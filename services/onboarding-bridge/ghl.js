// Thin GHL (LeadConnector) API 2.0 client.
// Docs: https://highlevel.stoplight.io — verify endpoint shapes if GHL bumps versions.

const BASE = 'https://services.leadconnectorhq.com';
const VERSION = '2021-07-28';

const AGENCY_TOKEN = process.env.GHL_AGENCY_TOKEN;
const COMPANY_ID = process.env.GHL_COMPANY_ID;

// In-memory cache of minted location tokens (process lifetime only).
const locationTokens = new Map();

class GhlError extends Error {
  constructor(message, status, body) {
    super(message);
    this.name = 'GhlError';
    this.status = status;
    this.body = body;
  }
}

async function request(method, path, { token = AGENCY_TOKEN, body, form } = {}) {
  const headers = {
    Authorization: `Bearer ${token}`,
    Version: VERSION,
    Accept: 'application/json',
  };
  let payload;
  if (form) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    payload = new URLSearchParams(form).toString();
  } else if (body !== undefined) {
    headers['Content-Type'] = 'application/json';
    payload = JSON.stringify(body);
  }

  const res = await fetch(`${BASE}${path}`, { method, headers, body: payload });
  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { raw: text };
  }
  if (!res.ok) {
    throw new GhlError(`GHL ${method} ${path} -> ${res.status}`, res.status, data);
  }
  return data;
}

/** Search agency locations by the buyer's email. Returns array of locations. */
export async function searchLocationsByEmail(email) {
  const qs = new URLSearchParams({ companyId: COMPANY_ID, email });
  const data = await request('GET', `/locations/search?${qs}`);
  return data.locations || [];
}

/**
 * Get a token authorized to write to a specific location.
 * Tries the agency token first; on 401/403 mints a location token via OAuth.
 */
export async function getLocationWriteToken(locationId) {
  if (locationTokens.has(locationId)) return locationTokens.get(locationId);
  try {
    // Probe: if the agency token can read the location's custom values, it can write too.
    await request('GET', `/locations/${locationId}/customValues`);
    locationTokens.set(locationId, AGENCY_TOKEN);
    return AGENCY_TOKEN;
  } catch (err) {
    if (err.status !== 401 && err.status !== 403) throw err;
  }
  const data = await request('POST', '/oauth/locationToken', {
    form: { companyId: COMPANY_ID, locationId },
  });
  const token = data.access_token;
  if (!token) throw new GhlError('locationToken response missing access_token', 500, data);
  locationTokens.set(locationId, token);
  return token;
}

/** List a location's custom values: [{ id, name, value }, ...] */
export async function getCustomValues(locationId, token) {
  const data = await request('GET', `/locations/${locationId}/customValues`, { token });
  return data.customValues || [];
}

/** Update one custom value by id. GHL requires name to be resent alongside value. */
export async function updateCustomValue(locationId, customValueId, name, value, token) {
  return request('PUT', `/locations/${locationId}/customValues/${customValueId}`, {
    token,
    body: { name, value },
  });
}

/** Fetch a location (for merge-before-update of the business profile). */
export async function getLocation(locationId, token) {
  const data = await request('GET', `/locations/${locationId}`, { token });
  return data.location || data;
}

/** Update location business profile fields. Send only the fields being changed. */
export async function updateLocation(locationId, fields, token) {
  return request('PUT', `/locations/${locationId}`, { token, body: fields });
}

/** Add tags to a contact (agency-level contact; agency token). */
export async function addContactTags(contactId, tags) {
  return request('POST', `/contacts/${contactId}/tags`, { body: { tags } });
}

export { GhlError };
