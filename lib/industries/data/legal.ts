import type { IndustryData } from "@/lib/industries/types";

const legal: IndustryData = {
  slug: "legal",
  name: "Law Firms",
  seoTitle: "Capture Every Case That Calls | FYNZ for Law Firms | FYNZ",
  seoDescription:
    "FYNZ answers every call, runs structured intake, and books the consult — so no case walks to the next listing.",
  hero: {
    category: "Professional & Knowledge · Legal",
    headline: "Capture every case that calls.",
    subhead:
      "FYNZ answers every call, runs the intake, and books the consult — so no case walks to the next listing.",
    visual: {
      label: "FYNZ Workspace",
      title: "Intake Summary",
      lines: ["Matter: Family Law (Custody)", "✓ Consult Booked: Mon 9:30 AM"],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "Sound familiar?",
    cards: [
      {
        title: "Voicemail case leakage",
        desc: "Potential clients call once — if it goes to voicemail, they call the next listing.",
      },
      {
        title: "Scattered intake details",
        desc: "Details arrive scattered across call notes, emails, and bar sticky notes.",
      },
      {
        title: "Consultation no-shows",
        desc: "Unconfirmed consults no-show, leaving attorney hours unbillable and empty.",
      },
      {
        title: "Engagement follow-up slippage",
        desc: "Signed agreements slip when the week gets busy, slowing case opening.",
      },
    ],
  },
  benefits: [
    {
      powered: "Voice AI",
      title: "Every call is answered like your best receptionist took it.",
      desc: "Matter type, urgency, and contact details captured 24/7; urgent calls routed to you.",
      preview: "24/7 Receptionist Live",
    },
    {
      powered: "Lead capture forms · GROW",
      title: "Intake runs itself.",
      desc: "A structured form collects the details before the consult, so the consult is about the case.",
      preview: "✓ Case details  ☐ ID Verification",
    },
    {
      powered: "Online booking + Reminders & confirmations · SCHEDULE",
      title: "Consults book straight into your calendar.",
      desc: "Prospects pick a slot; confirmations and reminders protect it.",
      preview: "Mon 9:30a · Mon 11a",
    },
    {
      powered: "Workflow AI",
      title: "Unsigned engagements get followed up.",
      desc: "Polite, persistent nudges until the engagement letter comes back.",
      preview: "Hi Michael, following up on the engagement letter sent Tuesday: [link]",
    },
    {
      powered: "Reviews AI",
      title: "Your reputation compounds.",
      desc: "Post-matter review requests (where appropriate) build the profile that wins the next search.",
      preview: "Google Profile: 4.9 ★",
    },
  ],
  demo: {
    eyebrow: "Sequence Flow",
    title: "After-hours matter intake workflow",
    steps: [
      {
        label: "9:47 PM",
        sublabel: "Call received by AI",
        desc: "AI captures caller details and matter type.",
      },
      {
        label: "9:49 PM",
        sublabel: "Consult booked for Monday",
        desc: "Slot locked in attorney's calendar.",
      },
      {
        label: "9:50 PM",
        sublabel: "Intake form sent",
        desc: "SMS link sent to gather case files.",
      },
      {
        label: "Monday",
        sublabel: "Intake ready before call",
        desc: "Consult starts at 9:30 AM ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A day with FYNZ",
    before:
      "Before — Monday opens to voicemail roulette; two of five weekend callers are already retained elsewhere.",
    after:
      "After — all five were answered live over the weekend; three consults are locked on Monday's calendar.",
  },
  faq: [
    {
      q: "Is client information handled confidentially?",
      a: "Yes — voice AI captures intake facts only and never provides legal advice. Detailed data-handling privacy rules are linked in our template footer.",
    },
    {
      q: "Can I route emergency calls?",
      a: "Yes — urgent keywords route straight to your firm's designated on-call cell line immediately.",
    },
    {
      q: "How does the engagement letter follow-up work?",
      a: "Once an engagement is sent, FYNZ sends follow-up texts at day 2, 5, and 10 until signed, then stops.",
    },
  ],
};

export default legal;
