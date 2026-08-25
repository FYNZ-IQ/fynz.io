# GHL setup for the FYNZ onboarding system

How to wire GoHighLevel to the onboarding wizard (`/onboarding` on the site)
and the bridge service (`services/onboarding-bridge`). Follow the parts in
order — each one unblocks the next.

The flow you are wiring:

```
Buyer picks industry + plan on the site
  → GHL payment link (per industry × plan × billing; carries the snapshot)
  → GHL SaaS mode takes payment and provisions the sub-account
  → redirect back to /onboarding?...&paid=1  (wizard, 3 steps)
  → wizard POSTs answers to the bridge
  → bridge finds the sub-account by buyer email, writes custom values
    + business profile, tags the agency contact
  → tag "onboarding-synced" fires your "you're ready — log in" email
```

---

## Part 1 — Agency credentials (once)

1. **Private Integration Token (PIT)**
   In your **agency** account: *Settings → Private Integrations → Create*.
   Scopes needed:
   - Locations — **read/write**
   - Locations / Custom Values — **read/write**
   - Contacts — **write**
   - OAuth — needed so the bridge can mint location tokens when the agency
     token can't write to a sub-account directly.

   > If you ever pasted a token into a chat, email, or ticket, rotate it here
   > and update the bridge's environment variable.

2. **Company ID** — *Settings → Company* (also visible in the agency URL).

These become the bridge's `GHL_AGENCY_TOKEN` and `GHL_COMPANY_ID`.

## Part 2 — Deploy the bridge (once)

Any always-on Node 18+ host (VPS + pm2, Railway, Render, Fly.io), behind
HTTPS. From `services/onboarding-bridge/`: `npm ci && npm start`.

Environment variables (see `.env.example`):

| Variable | Value |
|---|---|
| `GHL_AGENCY_TOKEN` | the PIT from Part 1 |
| `GHL_COMPANY_ID` | your agency/company id |
| `WEBHOOK_SECRET` | any long random string — used only by the GHL-side webhook (Part 6) |
| `PUBLIC_SITE_ORIGINS` | your site origins, comma-separated, e.g. `https://fynz.io,https://www.fynz.io` |
| `ALERT_WEBHOOK_URL` | optional — Slack-style incoming webhook for failure alerts |

Then set the site's repository variable `NEXT_PUBLIC_ONBOARDING_BRIDGE_URL`
to the bridge's base URL (e.g. `https://bridge.fynz.io`) so the deploy
workflow bakes it into the wizard.

Smoke test: `GET https://<bridge>/health` → `{"ok":true}`.

## Part 3 — Snapshots: custom values (per industry, once per snapshot)

The bridge writes the wizard answers into these **custom value names** in the
buyer's sub-account. Every industry snapshot must define them (names are
matched case-insensitively, spaces/underscores ignored):

| Wizard question | Custom value name in the snapshot |
|---|---|
| Business name | `business_name` |
| Tagline | `tagline` |
| Owner name | `owner_name` |
| Owner title | `owner_title` |
| Business phone | `dispatch_phone` |
| Business address | `business_address` |
| Business hours | `business_hours` |
| Public business email | `business_email` |
| Logo URL | `logo_url` |
| Brand color | `brand_primary_color` |
| Service area | `service_area` |

Build your snapshot's funnels/emails to reference these custom values, and
the buyer's brand appears everywhere the moment the sync runs. A custom value
missing from a snapshot doesn't fail the sync — it's logged and alerted so
you can fix the snapshot.

If a vertical's snapshot must use different names, edit `FIELD_MAP` in
`services/onboarding-bridge/config.js` — nothing else changes.

## Part 4 — SaaS Configurator: plans + payment links (per industry)

For each industry you sell:

1. *Agency → SaaS Configurator*: create (or reuse) the plan and attach that
   **industry's snapshot** to it. Repeat per tier you offer (Starter /
   Growth / Managed) and per billing cycle.
2. Copy each plan's **payment link URL**.
3. In each payment link / order form's settings, set the **post-purchase
   redirect** to:

   ```
   https://<your-site>/onboarding?industry=<industry>&plan=<plan>&billing=<cycle>&paid=1
   ```

   - `<industry>` = the key from the wizard picker (e.g. `salons`,
     `barbershops`, `water-damage` — full list in `lib/checkout.ts`).
   - `<plan>` = `launch` (the Starter tier), `growth`, or `managed`.
   - `<cycle>` = `monthly` or `annual`.
   - If your redirect supports merge tags, append `&email={{contact.email}}`
     so the wizard prefills the buyer's email. If not, omit it — the wizard
     asks for the email either way.

4. Paste the payment-link URLs into `lib/checkout.ts` under that industry's
   row (plan × billing slots). Empty slots simply skip the checkout gate, so
   you can roll out one industry at a time. The `default` row covers
   industries without their own plans and the "Something else" pick.

## Part 5 — Agency workflows: ready + failure (once)

The bridge tags the **agency contact** (the buyer) after syncing:

1. **Ready workflow** — Trigger: *Tag added* = `onboarding-synced`.
   Action: send the "your system is ready — log in" email (include the
   white-label login URL). Set to run once per contact.
2. **Failure workflow** — Trigger: *Tag added* = `onboarding-sync-failed`.
   Action: internal notification to your team (the bridge also fires
   `ALERT_WEBHOOK_URL` with the buyer's answers for manual recovery).

Note: tagging requires the bridge to know the contact. Submissions from the
website wizard don't carry a contact id (it's deliberately not accepted from
the public endpoint), so for those the "ready" moment is best driven by your
GHL welcome email at purchase; the tags always work for the GHL-survey path
(Part 6). Failure alerts fire regardless via `ALERT_WEBHOOK_URL`.

## Part 6 — Optional: GHL-hosted survey path

If you also (or instead) run the onboarding questions as a GHL survey:

- Workflow trigger: *Survey submitted*.
- Action: **Custom Webhook** → `POST https://<bridge>/onboard` with JSON body
  containing `secret` (= `WEBHOOK_SECRET`), `contact_id`, `email`, and the
  `onboard_*` fields (see `services/onboarding-bridge/README.md` for the full
  body template).

This path supports contact tagging fully, since GHL sends the contact id.

## Part 7 — Test checklist

1. `GET /health` on the bridge → `{"ok":true}`.
2. Buy a plan with a Stripe **test-mode** card (or 100% coupon) for one
   industry → confirm the sub-account is provisioned with the right snapshot.
3. Complete the wizard with the same email → within ~2 minutes check the
   sub-account: *Settings → Custom Values* updated, *Business Info* updated,
   funnel pages rendering the brand.
4. Failure drill: submit the wizard with an email matching no sub-account →
   after ~3 minutes of retries the alert should arrive on
   `ALERT_WEBHOOK_URL` with the answers.
5. Rate-limit sanity: a 6th rapid submission from one IP returns 429.

## Reference

- Bridge internals & endpoint docs: `services/onboarding-bridge/README.md`
- Payment-link slots & industry keys: `lib/checkout.ts`
- Field mapping (per-vertical file): `services/onboarding-bridge/config.js`
