# Fynz Onboarding Bridge

Webhook service that receives onboarding wizard answers from a GHL agency workflow and writes them into the buyer's newly created SaaS sub-account — custom values plus business profile — then tags the agency contact so the "your system is ready" email fires.

```
Wizard submitted → GHL Custom Webhook → this service
  → find sub-account by buyer email (retries while provisioning)
  → write custom values (FIELD_MAP)
  → update business profile (PROFILE_MAP)
  → tag contact: onboarding-synced  → triggers ready email
  → on failure: alert + tag onboarding-sync-failed (never silent)
```

## Files

| File | Purpose |
|---|---|
| `server.js` | Express app. `POST /onboard` (validates, ACKs, runs sync async), `GET /health` |
| `sync.js` | Orchestration: lookup with retry, writes, tagging, failure alerts |
| `ghl.js` | GHL API 2.0 client (LeadConnector). Location token minting handled here |
| `config.js` | **The per-vertical file.** Field mappings, tags, retry tuning |

## Setup

```bash
npm install
cp .env.example .env   # fill in values
npm start
```

Node 18+ required (uses built-in fetch).

### PIT scopes

The agency Private Integration Token needs: locations (read/write), locations/customValues (read/write), contacts (write), oauth (for location token minting). If a location-scoped write returns 401/403 with the agency token, the client automatically mints a location token via `POST /oauth/locationToken` and caches it in memory.

## Deploy

Any always-on Node host works: a VPS with pm2 (`pm2 start server.js --name bridge`), Railway, Render, Fly.io. Put it behind HTTPS (required — GHL webhooks + your secret travel over this). If you prefer Cloudflare Workers, the logic ports directly but `setImmediate` must become `ctx.waitUntil()` and Express becomes the Workers fetch handler — ask Claude Code to do the port.

## GHL wiring (after deploy)

1. **Send workflow** — Trigger: Survey Submitted (onboarding wizard). Action: Custom Webhook, `POST https://your-host/onboard`, JSON body:

```json
{
  "secret": "YOUR_WEBHOOK_SECRET",
  "contact_id": "{{contact.id}}",
  "email": "{{contact.email}}",
  "company_name": "{{contact.company_name}}",
  "onboard_tagline": "{{contact.onboard_tagline}}",
  "onboard_owner_name": "{{contact.onboard_owner_name}}",
  "onboard_owner_title": "{{contact.onboard_owner_title}}",
  "onboard_phone": "{{contact.onboard_phone}}",
  "onboard_address": "{{contact.onboard_address}}",
  "onboard_hours": "{{contact.onboard_hours}}",
  "onboard_email": "{{contact.onboard_email}}",
  "onboard_logo_url": "{{contact.onboard_logo_url}}",
  "onboard_brand_color": "{{contact.onboard_brand_color}}",
  "onboard_service_area": "{{contact.onboard_service_area}}"
}
```

Adjust the merge tags to your actual agency custom field keys.

2. **Ready workflow** — Trigger: Tag Added = `onboarding-synced`. Action: send the "your system is ready — log in" email. Set to run once per contact.
3. **Failure workflow** — Trigger: Tag Added = `onboarding-sync-failed`. Action: internal team notification.

## Test

```bash
# 401 without secret
curl -s -X POST localhost:3000/onboard -H 'Content-Type: application/json' -d '{}'

# 400 without email
curl -s -X POST localhost:3000/onboard -H 'Content-Type: application/json' \
  -d '{"secret":"YOUR_SECRET"}'

# Real payload (use a scratch sub-account's buyer email)
curl -s -X POST localhost:3000/onboard -H 'Content-Type: application/json' -d '{
  "secret":"YOUR_SECRET",
  "contact_id":"CONTACT_ID",
  "email":"buyer@example.com",
  "company_name":"Test Restoration Co",
  "onboard_phone":"+14165551234",
  "onboard_tagline":"There in 60 minutes"
}'
```

Then verify in GHL: sub-account Settings → Custom Values updated, Business Info updated, `onboarding-synced` tag on the agency contact.

Full end-to-end: test purchase (Stripe test mode / 100% coupon) → complete the wizard → within ~2 min confirm tag, values, funnel pages rendering the brand, ready email received. Failure drill: submit the wizard with an email matching no location → confirm the alert arrives and the failure tag is applied (takes ~3 min due to lookup retries).

## Per-vertical rollout

Edit `config.js` only. If a new vertical's snapshot uses the same custom value names (recommended — standardize them), zero changes are needed.

## Behavior notes

- Empty answers are skipped — snapshot defaults stay in place, never blanked.
- Missing custom values in the sub-account are logged and alerted but don't fail the run (they indicate a snapshot audit gap).
- The whole run is idempotent: resubmitting the wizard re-writes the same absolute values and re-adds the same tag harmlessly.
- Success PII in logs is limited to the buyer email; full payloads are logged only on failure (needed for manual recovery).
- Endpoint paths follow GHL API 2.0 as of mid-2026. If GHL returns unexpected shapes, verify against https://highlevel.stoplight.io.
