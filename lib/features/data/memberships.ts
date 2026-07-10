import type { FeatureData } from "@/lib/features/types";

const memberships: FeatureData = {
  slug: "memberships",
  name: "Memberships & courses",
  pillar: "SHOP",
  pillarLink: "/shop",
  seoTitle: "Memberships & Courses — Revenue That Repeats Itself | FYNZ",
  seoDescription:
    "Sell monthly plans, class packs, and online courses with billing, access, and renewals handled automatically. Failed cards get retried and recovered without you chasing anyone.",
  hero: {
    headline: "Revenue that shows up whether you're open or not.",
    subhead:
      "Sell monthly memberships, class packs, and online courses. Enrollment, billing, access, and renewals run themselves — including the failed card nobody wants to chase.",
  },
  capabilities: [
    {
      title: "Recurring plans, your terms",
      desc: "Monthly, quarterly, or annual — set the price and the perks, and billing renews itself on schedule.",
    },
    {
      title: "Online courses & class packs",
      desc: "Package what you know into paid course content or session bundles. Customers enroll themselves and get access instantly.",
    },
    {
      title: "Failed cards recovered automatically",
      desc: "An expired or declined card gets retried and dunned without you noticing, let alone writing the awkward email.",
    },
    {
      title: "Self-serve enrollment",
      desc: "Customers sign up, pay, and get access from your site or a link — no back-and-forth, no manual setup per member.",
    },
    {
      title: "A community space included",
      desc: "Give members and students a private space tied to their plan — included with FYNZ, not another subscription to manage.",
    },
    {
      title: "Members are customers, not a separate list",
      desc: "Every member lives in the same CRM record as their bookings and purchases, and every renewal lands in your OPS reporting automatically.",
    },
  ],
  steps: [
    { title: "Create a plan or course", desc: "Name it, price it, and choose what members get — content, perks, or class credits." },
    { title: "Share the link", desc: "Put it on your site, in a text, or in a campaign. Enrollment is self-serve from there." },
    { title: "Members join and pay", desc: "Checkout, access, and the welcome message all happen the moment they sign up." },
    { title: "Renewals run themselves", desc: "Billing repeats on schedule, failed cards get retried, and your recurring revenue just keeps arriving." },
  ],
  faq: [
    {
      q: "What happens when a member's card fails?",
      a: "FYNZ retries the charge automatically and sends the member a friendly update-your-card message. Most lapses recover on their own — you only hear about the ones that don't.",
    },
    {
      q: "Can I sell a course without offering a membership?",
      a: "Yes — courses, class packs, and recurring plans are all separate products. Sell one, some, or all of them, and mix one-time and recurring pricing however you like.",
    },
    {
      q: "Do members need to create yet another account?",
      a: "They sign up once at checkout and that's it — the same login gets them their course content, their community space, and their billing details.",
    },
  ],
  related: ["payments", "marketing", "customers"],
};

export default memberships;
