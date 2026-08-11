import {
  FIELD_MAP,
  PROFILE_MAP,
  TAG_SUCCESS,
  TAG_FAILURE,
  LOOKUP_RETRIES,
  LOOKUP_DELAY_MS,
  WRITE_RETRIES,
  WRITE_DELAY_MS,
} from './config.js';
import {
  searchLocationsByEmail,
  getLocationWriteToken,
  getCustomValues,
  updateCustomValue,
  getLocation,
  updateLocation,
  addContactTags,
} from './ghl.js';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Normalize a custom value name for matching: lowercase, alphanumerics only. */
const normalize = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, '');

function log(level, msg, extra = {}) {
  console.log(JSON.stringify({ ts: new Date().toISOString(), level, msg, ...extra }));
}

async function withRetry(fn, attempts, delayMs, label) {
  let lastErr;
  for (let i = 1; i <= attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      log('warn', `${label} attempt ${i}/${attempts} failed`, { error: err.message });
      if (i < attempts) await sleep(delayMs);
    }
  }
  throw lastErr;
}

async function sendAlert(text) {
  const url = process.env.ALERT_WEBHOOK_URL;
  if (!url) {
    log('error', 'ALERT_WEBHOOK_URL not set; alert not delivered', { text });
    return;
  }
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
  } catch (err) {
    log('error', 'Failed to deliver alert', { error: err.message, text });
  }
}

/** Find the buyer's new sub-account, retrying while provisioning completes. */
async function findLocation(email) {
  return withRetry(
    async () => {
      const locations = await searchLocationsByEmail(email);
      if (locations.length === 0) {
        throw new Error(`No location found for ${email}`);
      }
      if (locations.length > 1) {
        log('warn', 'Multiple locations matched; using most recently created', {
          email,
          count: locations.length,
        });
        locations.sort(
          (a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0),
        );
      }
      return locations[0];
    },
    LOOKUP_RETRIES,
    LOOKUP_DELAY_MS,
    'location lookup',
  );
}

/** Write mapped answers into the location's custom values. */
async function writeCustomValues(locationId, payload, token) {
  const existing = await getCustomValues(locationId, token);
  const byName = new Map(existing.map((cv) => [normalize(cv.name), cv]));

  const updated = [];
  const missing = [];

  for (const [payloadKey, cvName] of Object.entries(FIELD_MAP)) {
    const value = payload[payloadKey];
    if (value === undefined || value === null || String(value).trim() === '') continue; // keep snapshot default

    const cv = byName.get(normalize(cvName));
    if (!cv) {
      missing.push(cvName);
      continue;
    }
    await withRetry(
      () => updateCustomValue(locationId, cv.id, cv.name, String(value).trim(), token),
      WRITE_RETRIES,
      WRITE_DELAY_MS,
      `custom value "${cv.name}"`,
    );
    updated.push(cv.name);
  }
  return { updated, missing };
}

/** Update the location's business profile with submitted fields (merge, never blank). */
async function writeBusinessProfile(locationId, payload, token) {
  const fields = {};
  for (const [payloadKey, locationProp] of Object.entries(PROFILE_MAP)) {
    const value = payload[payloadKey];
    if (value !== undefined && value !== null && String(value).trim() !== '') {
      fields[locationProp] = String(value).trim();
    }
  }
  if (Object.keys(fields).length === 0) return false;

  // Fetch first so we never regress fields GHL requires on PUT (name, etc.).
  const current = await getLocation(locationId, token);
  const body = { name: current.name, ...fields };
  await withRetry(
    () => updateLocation(locationId, body, token),
    WRITE_RETRIES,
    WRITE_DELAY_MS,
    'business profile update',
  );
  return true;
}

/**
 * Main sync run. Called async after the webhook has already been ACKed.
 * Idempotent: all writes set absolute values; tag adds are idempotent.
 */
export async function runSync(payload) {
  const { email, contact_id: contactId, company_name: companyName } = payload;
  const started = Date.now();

  try {
    const location = await findLocation(email);
    log('info', 'Location found', { email, locationId: location.id, name: location.name });

    const token = await getLocationWriteToken(location.id);

    const { updated, missing } = await writeCustomValues(location.id, payload, token);
    const profileUpdated = await writeBusinessProfile(location.id, payload, token);

    if (missing.length > 0) {
      log('warn', 'Custom values missing in location (snapshot audit gap)', {
        locationId: location.id,
        missing,
      });
      await sendAlert(
        `Onboarding sync for ${email} (${companyName || 'unknown company'}) completed with GAPS. ` +
          `Missing custom values in sub-account "${location.name}": ${missing.join(', ')}. ` +
          `Fix the snapshot so future deploys include them.`,
      );
    }

    if (contactId) {
      await addContactTags(contactId, [TAG_SUCCESS]);
    } else {
      log('warn', 'No contact_id in payload; success tag not applied', { email });
    }

    log('info', 'Sync complete', {
      email,
      locationId: location.id,
      valuesUpdated: updated.length,
      valuesMissing: missing.length,
      profileUpdated,
      ms: Date.now() - started,
    });
  } catch (err) {
    log('error', 'Sync FAILED', { email, error: err.message, payload });

    await sendAlert(
      `Onboarding sync FAILED for ${email} (${companyName || 'unknown company'}). ` +
        `Reason: ${err.message}. Manual entry needed. ` +
        `Answers: ${JSON.stringify(
          Object.fromEntries(
            Object.entries(payload).filter(([k]) => k.startsWith('onboard_') || k === 'company_name'),
          ),
        )}`,
    );

    if (contactId) {
      try {
        await addContactTags(contactId, [TAG_FAILURE]);
      } catch (tagErr) {
        log('error', 'Failed to apply failure tag', { email, error: tagErr.message });
      }
    }
  }
}
