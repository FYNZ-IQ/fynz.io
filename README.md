This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Onboarding wizard

All subscribe CTAs route to `/onboarding`, a wizard that collects the new
customer's brand and business details and posts them to the onboarding bridge
(`services/onboarding-bridge`), which writes them into the buyer's GHL
sub-account. Because this site is a static export, the browser calls the
bridge directly — set the bridge's base URL at build time:

```bash
NEXT_PUBLIC_ONBOARDING_BRIDGE_URL=https://your-bridge-host pnpm build
```

The bridge must list this site's origin in its `PUBLIC_SITE_ORIGINS` env var
(see `services/onboarding-bridge/README.md`). If the variable is unset, the
wizard renders but submissions show a "not wired up" error with a mailto
fallback.

### Checkout step (GHL SaaS payment links)

Paid plans should collect payment *before* onboarding — the bridge can only
sync answers into a sub-account that GHL SaaS mode has provisioned, which
happens at purchase. GHL plans are prepared **per industry** (each carries
that industry's snapshot), so `lib/checkout.ts` keys payment-link URLs by
industry × plan × billing, with a `default` row as fallback. The wizard asks
"what kind of business are you?" first (skipped when the visitor arrives from
an industry page with `?industry=…`), then shows the matching "continue to
secure checkout" gate. GHL redirects buyers back to
`/onboarding?industry=…&plan=…&billing=…&paid=1` (optionally `&email=…` to
prefill). Combinations with no link configured skip the gate and go straight
to the wizard. The picker's options live in `INDUSTRIES` in the same file.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
