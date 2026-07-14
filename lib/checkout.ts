// GHL SaaS checkout links, per industry, plan, and billing cycle.
//
// Your GHL plans are prepared per industry — each plan carries that
// industry's snapshot — so every industry has its own payment pages. Fill
// CHECKOUT_LINKS with the payment-link / order-form URLs from your agency's
// SaaS Configurator (GHL → SaaS Configurator → the industry's plan →
// payment link). In each GHL payment link's settings, set the post-purchase
// redirect to:
//
//   https://<your-site>/onboarding?industry=<industry>&plan=<plan>&billing=<billing>&paid=1
//
// so buyers land back in the onboarding wizard after paying. The wizard also
// prefills the account email when the redirect appends &email=<buyer email>.
//
// Lookup order: exact industry → the "default" row → no gate. So a
// plan/cycle with no link anywhere goes straight to the wizard, exactly as
// before checkout existed. The Free plan gates only if you give it links
// ($0 order forms), which still provision the industry snapshot.
//
// INDUSTRIES drives the wizard's "what kind of business are you?" picker.
// Add a row per industry you sell (key must match CHECKOUT_LINKS and, where
// applicable, the site's /industries/<slug> so those pages can deep-link
// straight past the picker).

export type BillingCycle = "monthly" | "annual";

export const INDUSTRIES: { key: string; label: string }[] = [
  { key: "salons", label: "Hair Salon" },
  { key: "barbershops", label: "Barbershop" },
  { key: "spas", label: "Spa & Wellness" },
  { key: "nail-studios", label: "Nail Studio" },
  { key: "other", label: "Something else" },
];

type PlanLinks = Partial<Record<string, Record<BillingCycle, string>>>;

export const CHECKOUT_LINKS: Record<string, PlanLinks> = {
  salons: {
    launch: { monthly: "", annual: "" },
    growth: { monthly: "", annual: "" },
    managed: { monthly: "", annual: "" },
  },
  barbershops: {
    launch: { monthly: "", annual: "" },
    growth: { monthly: "", annual: "" },
    managed: { monthly: "", annual: "" },
  },
  spas: {
    launch: { monthly: "", annual: "" },
    growth: { monthly: "", annual: "" },
    managed: { monthly: "", annual: "" },
  },
  "nail-studios": {
    launch: { monthly: "", annual: "" },
    growth: { monthly: "", annual: "" },
    managed: { monthly: "", annual: "" },
  },
  // Fallback for industries without their own plans (and the "other" pick).
  default: {
    launch: { monthly: "", annual: "" },
    growth: { monthly: "", annual: "" },
    managed: { monthly: "", annual: "" },
  },
};

export function getCheckoutLink(
  industry: string,
  plan: string,
  billing: BillingCycle,
): string {
  return (
    CHECKOUT_LINKS[industry]?.[plan]?.[billing] ||
    CHECKOUT_LINKS.default?.[plan]?.[billing] ||
    ""
  );
}
