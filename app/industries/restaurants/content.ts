// Copy and structured data for /industries/restaurants. This is a funnel page:
// every call to action stays on the page and lands on the #book form, which
// carries the visitor's plan interest to the team.
// Kept outside the
// client component so the route's server file can feed the same FAQ and plan
// data into the page's JSON-LD without crossing the client boundary.

export const BOOK_CALL_HREF = "#book";
export const BOOK_CALL_LABEL = "Book a 15-minute call";
export const FREE_PLAN_HREF = "#book";
export const FREE_PLAN_LABEL = "Start on the free plan";

export type Plan = {
  key: "free" | "starter" | "growth" | "managed";
  name: string;
  price: number;
  desc: string;
  cta: string;
  href: string;
  popular?: boolean;
};

export const RESTAURANT_PLANS: Plan[] = [
  {
    key: "free",
    name: "Free",
    price: 0,
    desc: "Counts the calls you're already missing and the regulars who have gone quiet. No card, no expiry, not a trial.",
    cta: FREE_PLAN_LABEL,
    href: FREE_PLAN_HREF,
  },
  {
    key: "starter",
    name: "Starter",
    price: 97,
    desc: "The operational core: guest list, booking links, direct ordering, missed-call text-back and review requests. Social content isn't included.",
    cta: "Start on Starter",
    href: "#book",
  },
  {
    key: "growth",
    name: "Growth",
    price: 197,
    desc: "Everything in Starter, plus email campaigns, campaign pages, a social content calendar your team posts from, and documents and contracts.",
    cta: "Start on Growth",
    href: "#book",
    popular: true,
  },
  {
    key: "managed",
    name: "Managed",
    price: 397,
    desc: "Everything in Growth, plus our team creates and posts your content from your photos and runs your campaigns and guest follow-up.",
    cta: BOOK_CALL_LABEL,
    href: BOOK_CALL_HREF,
  },
];

export type PlanCell = boolean | string;

export type PlanRow = {
  name: string;
  cells: [PlanCell, PlanCell, PlanCell, PlanCell];
  emphasis?: boolean;
};

const SETUP = "Done for you, live in 48h";

export const PLAN_TABLE: PlanRow[] = [
  { name: "Missed-call and lapsed-guest counter", cells: [true, true, true, true] },
  { name: "Missed-call text-back", cells: [false, true, true, true] },
  { name: "Guest list, welcome, birthday and win-back messages", cells: [false, true, true, true] },
  { name: "Booking links to your reservation system", cells: [false, true, true, true] },
  { name: "Direct online ordering", cells: [false, true, true, true] },
  { name: "Review requests", cells: [false, true, true, true] },
  { name: "Email campaigns and campaign pages", cells: [false, false, true, true] },
  { name: "Social content calendar and scheduler", cells: [false, false, true, true] },
  { name: "Documents and contracts (events, catering)", cells: [false, false, true, true] },
  { name: "We create and post your content (photo-to-post)", cells: [false, false, false, true], emphasis: true },
  { name: "We run your campaigns and guest follow-up", cells: [false, false, false, true], emphasis: true },
  { name: "Setup", cells: ["Self-serve", SETUP, SETUP, SETUP] },
];

export const RESTAURANT_FAQS: { q: string; a: string }[] = [
  {
    q: "Will it actually bring in customers?",
    a: "We won't promise a number. Every guest who hasn't ordered, booked or checked in for 60 days gets an offer, every missed call gets a text back, and on the Managed plan your food gets posted every week. The free plan shows your real missed calls before you spend anything.",
  },
  {
    q: "Is it easy to use?",
    a: "Most of it runs on its own. On the Managed plan, your part is usually taking one photo before a dish leaves the pass.",
  },
  {
    q: "What does it cost?",
    a: "Paid plans start at $97 USD a month, and there is a free plan. Text messages and calls are billed at cost to your own account.",
  },
  {
    q: "What if it doesn't work for us?",
    a: "You leave. Plans are month to month with no contract and a 30-day money-back guarantee on paid plans. We export your guest list for you.",
  },
  {
    q: "Do I have to change my POS or booking system?",
    a: "No. Table bookings stay in your reservation system, and orders and tickets are paid through your own Stripe or Square account.",
  },
  {
    q: "Will my staff have to learn something new?",
    a: "Very little. One app on one phone for photos and messages. No new terminal at the host stand.",
  },
  {
    q: "Is texting guests legal?",
    a: "Yes, when it's done with consent. We set up consent capture, opt-out handling (\"reply STOP\") and US carrier registration for you. You stay in control of what gets sent, and we'll flag anything that needs a second look.",
  },
];

export const INTEREST_OPTIONS: { value: string; label: string }[] = [
  { value: "call", label: "A 15-minute call, on my numbers" },
  { value: "free", label: "The free plan (count my missed calls)" },
  { value: "starter", label: "Starter · $97/mo" },
  { value: "growth", label: "Growth · $197/mo" },
  { value: "managed", label: "Managed · $397/mo" },
];
