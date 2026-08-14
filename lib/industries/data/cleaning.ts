import type { IndustryData } from "@/lib/industries/types";

const cleaning: IndustryData = {
  slug: "cleaning",
  name: "Cleaning Services",
  seoTitle: "Fill Your Route with Recurring Clients | FYNZ for Cleaning | FYNZ",
  seoDescription:
    "FYNZ turns one-time cleans into every-two-weeks clients — and keeps the schedule tight.",
  hero: {
    category: "Home Services & Trades · Cleaning Services",
    headline: "Fill your route with recurring clients.",
    subhead:
      "FYNZ turns one-time cleans into every-two-weeks clients — and keeps the schedule tight.",
    visual: {
      label: "FYNZ Workspace",
      title: "Route Planner",
      lines: ["✓ Recurring: Every 2 Weeks", "80% of route locked in"],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "Sound familiar?",
    cards: [
      {
        title: "One-time clean treadmill",
        desc: "Doing great one-time cleans but struggling to convert them into recurring clients.",
      },
      {
        title: "Silent estimates",
        desc: "Quotes sent to homeowners disappear into silence without manual follow-up time.",
      },
      {
        title: "Last-minute route gaps",
        desc: "Cancellations leave empty hours and distance gaps in your route schedule.",
      },
      {
        title: "Chasing cash and invoices",
        desc: "Spending Sunday evening sending invoices and chasing cash transfers.",
      },
    ],
  },
  benefits: [
    {
      powered: "Recurring appointments · SCHEDULE + Workflow AI",
      title: "One-time cleans become standing appointments.",
      desc: "After the first clean, a 'lock in your every-2-weeks spot' offer converts them to recurring.",
      preview:
        "Hi Jennifer, lock in your every-2-weeks spot before Thursday slots fill: [link]",
    },
    {
      powered: "Workflow AI",
      title: "Quotes follow up until they close.",
      desc: "Every estimate gets polite, persistent follow-ups — most jobs are won on the second touch.",
      preview: "Follow-up 2 of 3 sent",
    },
    {
      powered: "Online booking · SCHEDULE",
      title: "Cancellations don't leave holes in the route.",
      desc: "Openings offer themselves to nearby clients wanting an earlier slot.",
      preview: "Waitlist fill active",
    },
    {
      powered: "Deposits & payments · SHOP",
      title: "Payment is part of the booking.",
      desc: "Cards on file; the job completes, the payment processes.",
      preview: "✓ Paid: $180.00",
    },
    {
      powered: "Reviews AI",
      title: "Reviews build the referral machine.",
      desc: "Every sparkling home generates the review that wins the neighbor.",
      preview: "“Our house is sparkling! Left a review...”",
    },
  ],
  demo: {
    eyebrow: "Sequence Flow",
    title: "Cleaning route gap backfill",
    steps: [
      {
        label: "Thursday",
        sublabel: "Client cancels clean",
        desc: "Thursday AM slot becomes open.",
      },
      {
        label: "Auto-match",
        sublabel: "FYNZ checks nearby routes",
        desc: "AI scans for bi-weekly clients in same neighborhood.",
      },
      {
        label: "SMS dispatch",
        sublabel: "Offer sent to 3 clients",
        desc: "'Want an earlier slot this week?' SMS sent.",
      },
      {
        label: "Filled",
        sublabel: "Slot filled in minutes",
        desc: "Route efficiency maintained ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A day with FYNZ",
    before:
      "Before — 60% one-time jobs, constant scramble for new leads, and manual cash collection.",
    after:
      "After — 70% recurring, route gaps fill automatically, and payment details are secure on file.",
  },
  faq: [
    {
      q: "Can clients reschedule online?",
      a: "Yes — from the text reminder, clients can reschedule their slot, subject to your 24-hour cutoff rule.",
    },
    {
      q: "How does card-on-file billing work?",
      a: "FYNZ integrates with Stripe. Cards are saved securely at booking and charged once the cleaner marks the job complete.",
    },
    {
      q: "Can I manage different crew schedules?",
      a: "Yes — crew calendars can be configured separately with their own route zones and assignments.",
    },
  ],
};

export default cleaning;
