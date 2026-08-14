import type { IndustryData } from "@/lib/industries/types";

const contractors: IndustryData = {
  slug: "contractors",
  name: "Contractors",
  seoTitle: "Win More Bids and Get Paid Faster | FYNZ for General Contractors | FYNZ",
  seoDescription:
    "FYNZ follows up every quote, sends every invoice, and never lets a lead go cold in your voicemail.",
  hero: {
    category: "Home Services & Trades · General Contractors",
    headline: "Win more bids and get paid faster.",
    subhead:
      "FYNZ follows up every quote, sends every invoice, and never lets a lead go cold in your voicemail.",
    visual: {
      label: "FYNZ Workspace",
      title: "Bid Status",
      lines: ["Estimate Approved ($8,750)", "Deposit paid • Job scheduled"],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "Sound familiar?",
    cards: [
      {
        title: "Ghosted estimate bids",
        desc: "You send the proposal, then nothing — and you are too busy building to chase it down.",
      },
      {
        title: "Late invoicing and payments",
        desc: "Invoices go out late, cash flow gets tight, and bank payments crawl in.",
      },
      {
        title: "Voicemail lead leakage",
        desc: "Missed calls during active site hours are lost jobs to competitors.",
      },
      {
        title: "Invisible quality work",
        desc: "Your best projects are finished but you have no reviews, photos, or public proof.",
      },
    ],
  },
  benefits: [
    {
      powered: "Workflow AI",
      title: "Bids follow themselves up.",
      desc: "Day 2, day 5, day 10 — polite nudges until they answer. Most contractors lose bids to silence, not price.",
      preview: "Follow-up sequence active",
    },
    {
      powered: "Invoicing & estimates + Deposits & payments · SHOP",
      title: "Estimates and invoices, sent and paid online.",
      desc: "Professional quotes, one-tap approval, card or bank payment — money moves faster.",
      preview: "Click to Approve & Pay Deposit",
    },
    {
      powered: "Missed-call text-back · GROW + Conversation AI",
      title: "Site hours don't cost you leads.",
      desc: "Missed calls get an instant text-back; new inquiries get answered and qualified.",
      preview: "Sorry we missed you. Send us your project details here: [link]",
    },
    {
      powered: "Reviews AI",
      title: "Every job feeds the next one.",
      desc: "Finished projects trigger review requests — the proof that wins the next neighborhood.",
      preview: "Love the new deck? Leave a review and share a photo: [link]",
    },
    {
      powered: "Customer list · GROW",
      title: "Every lead has a next step.",
      desc: "Inquiries, site visits, bids, and jobs tracked in one simple list — nothing falls through.",
      preview: "Job Pipeline: 8 Active Bids",
    },
  ],
  demo: {
    eyebrow: "Sequence Flow",
    title: "Bid to deposit workflow",
    steps: [
      {
        label: "Day 0",
        sublabel: "Estimate sent to client",
        desc: "Professional quote PDF delivered online.",
      },
      {
        label: "Day 1",
        sublabel: "Auto-follow-up sent",
        desc: "FYNZ asks if they have questions about the scope.",
      },
      {
        label: "Day 2",
        sublabel: "Quote approved by client",
        desc: "Client signs and authorizes deposit securely.",
      },
      {
        label: "Paid",
        sublabel: "Deposit collected",
        desc: "$2,187 Deposit cleared ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A day with FYNZ",
    before:
      "Before — 10 bids out, 2 answered, and the rest a mystery while you are too busy on-site to call.",
    after:
      "After — every bid is on a follow-up cadence; you find out 'yes or no' on all 10 without calling.",
  },
  faq: [
    {
      q: "Can I take deposits before starting work?",
      a: "Yes — you can set a deposit percentage on the estimate, and the booking isn't confirmed until payment clears.",
    },
    {
      q: "What payment types are supported?",
      a: "Clients can pay via credit card or secure bank transfers (ACH/EFT) directly from the invoice link.",
    },
    {
      q: "Can I attach drawings and drafts?",
      a: "Yes — attach project drawings, permits, or contracts directly to the estimate package.",
    },
  ],
};

export default contractors;
