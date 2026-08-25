import type { IndustryData } from "@/lib/industries/types";

const saas: IndustryData = {
  slug: "saas",
  name: "SaaS Companies",
  seoTitle: "Turn Signups into Paying, Sticky Users | FYNZ for SaaS | FYNZ",
  seoDescription:
    "FYNZ runs your onboarding, converts your trials, and answers 'how's growth?' in plain language.",
  hero: {
    category: "Professional & Knowledge · SaaS Startups",
    headline: "Turn signups into paying, sticky users.",
    subhead:
      "FYNZ runs your onboarding, converts your trials, and answers 'how's growth?' in plain language.",
    visual: {
      label: "FYNZ Workspace",
      title: "User Activation Journey",
      lines: ["Day 0: Welcome", "Day 5: Active User ✓"],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "Sound familiar?",
    cards: [
      {
        title: "Onboarding signup dropoff",
        desc: "Signups activate once, hit the dashboard, and disappear forever.",
      },
      {
        title: "Silent trial expiry",
        desc: "Trials expire in silence without a targeted discount offer or save sequence.",
      },
      {
        title: "Spreadsheet customer lists",
        desc: "Your customer records are scattered in a spreadsheet named FINAL_v7.",
      },
      {
        title: "Siloed metrics dashboards",
        desc: "You have dashboards everywhere, but answers nowhere when you need them.",
      },
    ],
  },
  benefits: [
    {
      powered: "powered by Workflow AI + Email & SMS campaigns · GROW",
      title: "Onboarding journeys that actually activate users.",
      desc: "Day 0 welcome, day 2 feature nudge, day 5 win — email and SMS sequences keyed to what users do (or don't).",
      preview: "Auto Onboarding Journey Active",
    },
    {
      powered: "powered by Workflow AI",
      title: "Trial expiries become conversions.",
      desc: "The right offer at day 12 of 14, and a save sequence for the ones who lapse.",
      preview: "Your trial ends in 2 days. Upgrade today and keep your dashboard settings: [link]",
    },
    {
      powered: "powered by Customer list · GROW",
      title: "Every lead and user in one list.",
      desc: "Signups, demos, and deals tracked in one place your whole team can see.",
      preview: "CRM: 1,420 Active Trial Accounts",
    },
    {
      powered: "powered by Online booking · SCHEDULE",
      title: "Demos book themselves.",
      desc: "Prospects grab time straight from your pricing page — routed to the right teammate.",
      preview: "Demo Call — booked straight from the pricing page.",
    },
    {
      powered: "powered by Ask AI",
      title: "Ask your funnel anything.",
      desc: "'Where do trials drop off?' 'Which campaign converts?' — answered in plain language.",
      preview: "Ask AI: “Day-2 emails drove 45% of wins.”",
    },
  ],
  demo: {
    eyebrow: "Sequence Flow",
    title: "SaaS trial onboarding sequence",
    steps: [
      {
        label: "Day 0",
        sublabel: "Account created",
        desc: "Welcome email and tutorial guide triggered.",
      },
      {
        label: "Day 2",
        sublabel: "Feature nudge sent",
        desc: "Targeted SMS sent to users who haven't set up integration.",
      },
      {
        label: "Day 5",
        sublabel: "Activation milestone hit",
        desc: "User completes setup; onboarding checklist checked off.",
      },
      {
        label: "Day 14",
        sublabel: "Trial converts to paid plan",
        desc: "Trial-to-paid: +18% ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A day with FYNZ",
    before:
      "Before — 300 trial signups, 9 conversions, and zero visibility into why the rest abandoned.",
    after:
      "After — every trial user gets a tailored onboarding path; conversion doubles and Ask AI highlights wins.",
  },
  faq: [
    {
      q: "Does this replace our product analytics?",
      a: "No — it runs the customer communication layer and answers growth questions from the data it holds.",
    },
    {
      q: "Can I trigger emails based on API events?",
      a: "Yes — you can send API calls to FYNZ to start, branch, or stop campaigns based on client activity.",
    },
    {
      q: "How does Ask AI search my data?",
      a: "Ask AI processes plain English queries against your customer records, email logs, and billing history to give you analytics in seconds.",
    },
  ],
};

export default saas;
