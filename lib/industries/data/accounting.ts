import type { IndustryData } from "@/lib/industries/types";

const accounting: IndustryData = {
  slug: "accounting",
  name: "Accounting Firms",
  seoTitle: "Handle Tax Season Without Dropping Clients | FYNZ for Accounting | FYNZ",
  seoDescription:
    "FYNZ books the appointments, chases the documents, and answers the phones — so you can just do the returns.",
  hero: {
    category: "Professional & Knowledge · Accounting & Tax",
    headline: "Handle tax season without dropping clients.",
    subhead:
      "FYNZ books the appointments, chases the documents, and answers the phones — so you can just do the returns.",
    visual: {
      label: "FYNZ Workspace",
      title: "Document Checklist",
      lines: ["✓ W2 / T4 slip", "☐ 1099 / T5 slip — Chasing"],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "Sound familiar?",
    cards: [
      {
        title: "Tax season phone bottleneck",
        desc: "February–April: the phone never stops ringing and neither do you, slowing prep.",
      },
      {
        title: "Document chasing overhead",
        desc: "Half of your peak hours are wasted chasing clients for missing document slips.",
      },
      {
        title: "Off-season client churn",
        desc: "Off-season, clients forget you exist until next deadline, reducing year-round revenue.",
      },
      {
        title: "Calendar double-bookings",
        desc: "Double-booked consultations during your busiest weeks of the tax year.",
      },
    ],
  },
  benefits: [
    {
      powered: "powered by Voice AI",
      title: "Tax-season phones answer themselves.",
      desc: "Overflow calls handled naturally — appointments booked, questions answered, urgent matters routed.",
      preview: "Overflow calls handled by AI",
    },
    {
      powered: "powered by Workflow AI",
      title: "Document chasing becomes automatic.",
      desc: "'Still missing your T4' nudges go out until the folder is complete — without you sending one email.",
      preview: "Reminder: We are still missing your T5 slip to complete your tax return: [link]",
    },
    {
      powered: "powered by Online booking + Reminders & confirmations · SCHEDULE",
      title: "Appointments that can't double-book.",
      desc: "Clients book real openings by service type; reminders keep them showing up.",
      preview: "Feb 15 — Tax Prep",
    },
    {
      powered: "powered by Email & SMS campaigns · GROW",
      title: "Off-season stays warm.",
      desc: "Quarterly check-ins and planning-session offers keep clients year-round, not just April.",
      preview: "“Book your Q3 tax planning call...”",
    },
    {
      powered: "powered by Memberships & packages · SHOP",
      title: "Year-round packages smooth the revenue.",
      desc: "Monthly bookkeeping and advisory packages sold and billed automatically.",
      preview: "Monthly Autopay cleared",
    },
  ],
  demo: {
    eyebrow: "Sequence Flow",
    title: "Tax document chase timeline",
    steps: [
      {
        label: "Feb 15",
        sublabel: "Tax return file opened",
        desc: "FYNZ generates document checklist for client.",
      },
      {
        label: "Feb 16",
        sublabel: "4 of 6 slips uploaded",
        desc: "Client uploads documents via secure portal.",
      },
      {
        label: "Feb 18",
        sublabel: "Auto-chase sent for missing",
        desc: "SMS alert notifies client of missing T5 slip.",
      },
      {
        label: "Feb 20",
        sublabel: "All documents received",
        desc: "Return ready to prepare ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A day with FYNZ",
    before:
      "Before — March: 40 unread voicemails, 60 incomplete client folders, and endless manual chasing.",
    after:
      "After — the phone line is clear, the folders chase themselves, and you prepare returns instead.",
  },
  faq: [
    {
      q: "Can it handle both US and Canadian clients?",
      a: "Yes — you can invoice your own clients in USD or CAD through Stripe, PayPal, or Square, and North American phone configurations are fully native.",
    },
    {
      q: "How secure is document upload?",
      a: "FYNZ uses bank-grade encryption for all client portal uploads and files, ensuring compliance and security.",
    },
    {
      q: "Can I customize the document checklist?",
      a: "Yes — you can configure templates for corporate tax, individual returns, and payroll reviews.",
    },
  ],
};

export default accounting;
