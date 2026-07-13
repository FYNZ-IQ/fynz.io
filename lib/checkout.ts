// GHL SaaS checkout links, per plan and billing cycle.
//
// Fill these in with the payment-link / order-form URLs from your agency's
// SaaS Configurator (GHL → SaaS Configurator → your plan → payment link).
// In each GHL payment link's settings, set the post-purchase redirect to:
//
//   https://<your-site>/onboarding?plan=<plan>&billing=<billing>&paid=1
//
// so buyers land back in the onboarding wizard after paying. The wizard also
// prefills the account email when the redirect appends &email=<buyer email>.
//
// A plan/cycle left as an empty string has no checkout gate: its CTA goes
// straight to the wizard, exactly as before this config existed. The Free
// plan never gates.

export type BillingCycle = "monthly" | "annual";

export const CHECKOUT_LINKS: Record<string, Record<BillingCycle, string>> = {
  launch: { monthly: "", annual: "" },
  growth: { monthly: "", annual: "" },
  managed: { monthly: "", annual: "" },
};

export function getCheckoutLink(plan: string, billing: BillingCycle): string {
  return CHECKOUT_LINKS[plan]?.[billing] || "";
}
