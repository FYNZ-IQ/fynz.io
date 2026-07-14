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
// plan/cycle with no link anywhere goes straight to the wizard. Fill links
// industry by industry as you create the plans in GHL — empty slots are
// harmless.
//
// INDUSTRY_GROUPS drives the wizard's "what kind of business are you?"
// picker, mirroring the site's "Who's it for" directory. Keys match the
// site's /industries/<slug> pages where they exist, so those pages deep-link
// straight past the picker.

export type BillingCycle = "monthly" | "annual";

export type IndustryGroup = {
  title: string;
  items: { key: string; label: string }[];
};

export const INDUSTRY_GROUPS: IndustryGroup[] = [
  {
    title: "Beauty & personal care",
    items: [
      { key: "salons", label: "Salons" },
      { key: "barbershops", label: "Barbershops" },
      { key: "spas", label: "Spas & beauty" },
      { key: "nail-studios", label: "Nail studios" },
    ],
  },
  {
    title: "Health",
    items: [
      { key: "clinics", label: "Clinics" },
      { key: "dental", label: "Dental clinics" },
      { key: "medical-clinics", label: "Medical & health" },
      { key: "therapists", label: "Therapists & physio" },
    ],
  },
  {
    title: "Fitness",
    items: [
      { key: "gyms", label: "Gyms" },
      { key: "fitness", label: "Fitness studios" },
      { key: "personal-trainers", label: "Personal trainers" },
      { key: "yoga-pilates", label: "Yoga & Pilates" },
    ],
  },
  {
    title: "Food & hospitality",
    items: [
      { key: "restaurants", label: "Restaurants" },
      { key: "cafes", label: "Cafés" },
      { key: "bars", label: "Bars" },
    ],
  },
  {
    title: "Retail & commerce",
    items: [
      { key: "boutiques", label: "Boutiques" },
      { key: "retail", label: "Retail stores" },
      { key: "ecommerce", label: "E-commerce" },
    ],
  },
  {
    title: "Professional",
    items: [
      { key: "accounting", label: "Accounting firms" },
      { key: "legal", label: "Law firms" },
      { key: "coaching", label: "Coaches" },
    ],
  },
  {
    title: "Home services & trades",
    items: [
      { key: "home-services", label: "Home services" },
      { key: "plumbing", label: "Plumbing" },
      { key: "cleaning", label: "Cleaning" },
      { key: "contractors", label: "Contractors" },
      { key: "automotive", label: "Auto shops" },
    ],
  },
  {
    title: "Emergency restoration",
    items: [
      { key: "water-damage", label: "Water damage" },
      { key: "mold-remediation", label: "Mold remediation" },
      { key: "fire-smoke", label: "Fire & smoke" },
      { key: "storm-tree", label: "Storm & tree" },
      { key: "storm-roofing", label: "Storm roofing" },
      { key: "biohazard-cleanup", label: "Biohazard cleanup" },
    ],
  },
  {
    title: "Property",
    items: [{ key: "real-estate", label: "Real estate" }],
  },
  {
    title: "Everything else",
    items: [{ key: "other", label: "Something else" }],
  },
];

export const INDUSTRIES = INDUSTRY_GROUPS.flatMap((group) => group.items);

type PlanLinks = Partial<Record<string, Record<BillingCycle, string>>>;

const EMPTY: PlanLinks = {
  launch: { monthly: "", annual: "" },
  growth: { monthly: "", annual: "" },
  managed: { monthly: "", annual: "" },
};

// One row per business in the picker. Paste each GHL payment-link URL into
// its slot; a spread of EMPTY means "no links yet" (falls back to default).
export const CHECKOUT_LINKS: Record<string, PlanLinks> = {
  // Beauty & personal care
  salons: { ...EMPTY },
  barbershops: { ...EMPTY },
  spas: { ...EMPTY },
  "nail-studios": { ...EMPTY },
  // Health
  clinics: { ...EMPTY },
  dental: { ...EMPTY },
  "medical-clinics": { ...EMPTY },
  therapists: { ...EMPTY },
  // Fitness
  gyms: { ...EMPTY },
  fitness: { ...EMPTY },
  "personal-trainers": { ...EMPTY },
  "yoga-pilates": { ...EMPTY },
  // Food & hospitality
  restaurants: { ...EMPTY },
  cafes: { ...EMPTY },
  bars: { ...EMPTY },
  // Retail & commerce
  boutiques: { ...EMPTY },
  retail: { ...EMPTY },
  ecommerce: { ...EMPTY },
  // Professional
  accounting: { ...EMPTY },
  legal: { ...EMPTY },
  coaching: { ...EMPTY },
  // Home services & trades
  "home-services": { ...EMPTY },
  plumbing: { ...EMPTY },
  cleaning: { ...EMPTY },
  contractors: { ...EMPTY },
  automotive: { ...EMPTY },
  // Emergency restoration
  "water-damage": { ...EMPTY },
  "mold-remediation": { ...EMPTY },
  "fire-smoke": { ...EMPTY },
  "storm-tree": { ...EMPTY },
  "storm-roofing": { ...EMPTY },
  "biohazard-cleanup": { ...EMPTY },
  // The pricing page's Emergency Restoration view sends this combined key
  // (its plans map to growth/managed with this industry).
  "emergency-restoration": { ...EMPTY },
  // Fallback for "Something else" and any industry without its own plans.
  default: { ...EMPTY },
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
