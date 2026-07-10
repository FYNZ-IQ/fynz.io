import type { IndustryData } from "@/lib/industries/types";

const therapy: IndustryData = {
  slug: "therapy",
  name: "Therapy Practices",
  seoTitle: "Keep Clients on Their Plan | FYNZ for Therapists & Physio | FYNZ",
  seoDescription:
    "FYNZ keeps sessions booked to the plan — so progress doesn't stall between visits.",
  hero: {
    category: "Health · Therapists & Physio",
    headline: "Keep clients on their plan.",
    subhead:
      "FYNZ keeps sessions booked to the plan — so progress doesn't stall between visits.",
    visual: {
      label: "FYNZ Workspace",
      title: "Session Progress",
      lines: ["Session 4 of 10 complete", "Next proposed: Thu 3 PM"],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "Sound familiar?",
    cards: [
      {
        title: "Clients fall off mid-plan",
        desc: "Not because it isn't working, but because booking the next slot has friction.",
      },
      {
        title: "No time for follow-ups",
        desc: "Gentle follow-ups matter for care, but you don't have the time to write them.",
      },
      {
        title: "Lost cancellation slots",
        desc: "Cancellations rarely get rebooked, resulting in holes in your week.",
      },
      {
        title: "Invoicing gymnastics",
        desc: "Selling and tracking a 10-session package takes manual spreadsheet tracking.",
      },
    ],
  },
  benefits: [
    {
      powered: "powered by Recurring appointments · SCHEDULE + Workflow AI",
      title: "The next session is always on the books.",
      desc: "At the end of each visit, the next one is proposed automatically at the plan's cadence.",
      preview: "Proposed: Session 5 - Tuesday at 2 PM",
    },
    {
      powered: "powered by Memberships & packages · SHOP",
      title: "Session packages, sold and tracked.",
      desc: "Clients buy a 5- or 10-session plan online; FYNZ tracks what's used and what's left.",
      preview: "Package Balance: 6/10 Used",
    },
    {
      powered: "powered by Workflow AI",
      title: "Gentle check-ins that sound like you.",
      desc: "Between-session touches and 'how are you feeling?' notes go out in your tone.",
      preview: "Hi James — just checking in. How is the ankle feeling after Tuesday's exercises?",
    },
    {
      powered: "powered by Online booking · SCHEDULE",
      title: "Cancellations get rescheduled, not lost.",
      desc: "A cancelled session immediately offers new times — the plan stays intact.",
      preview: "Cancel confirmed. Here are 3 times to reschedule...",
    },
    {
      powered: "powered by Reminders & confirmations · SCHEDULE",
      title: "Reminders that respect the relationship.",
      desc: "Warm, quiet confirmations — never pushy.",
      preview: "Hi Sarah, looking forward to our session tomorrow at 2 PM.",
    },
  ],
  demo: {
    eyebrow: "Sequence Flow",
    title: "Plan progress micro-demo",
    steps: [
      {
        label: "Week 1",
        sublabel: "Session 1 Complete",
        desc: "Initial assessment done.",
      },
      {
        label: "Week 2",
        sublabel: "Session 2 Complete",
        desc: "Next session auto-scheduled.",
      },
      {
        label: "Week 4",
        sublabel: "Session 4 of 10 complete",
        desc: "Progress check-in sent automatically.",
      },
      {
        label: "Week 5",
        sublabel: "Next proposed slots confirmed",
        desc: "Plan adherence: 100% ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A day with FYNZ",
    before:
      "Before — a client cancels Tuesday and silently disappears for a month, stalling progress.",
    after:
      "After — the reschedule offer goes out instantly; they're back in Thursday's 3 PM, plan intact.",
  },
  proof: {
    stats: [
      { num: "+30%", label: "Plan completion lift" },
      { num: "92%", label: "Cancellations rebooked" },
      { num: "0 mins", label: "Manual email follow-up time" },
    ],
    testimonial:
      "“[Therapy practitioner testimonial placeholder — space for a quote about plan adherence and client recovery tracking.]”",
  },
  faq: [
    {
      q: "Can follow-ups be fully manual-approve?",
      a: "Yes; approve-first mode lets you review every message before it sends.",
    },
    {
      q: "Does this work for multi-provider clinics?",
      a: "Yes — you can configure plans, session balances, and templates per provider.",
    },
    {
      q: "How does package tracking work?",
      a: "When a client purchases a package, FYNZ allocates the credits and automatically subtracts them as appointments are completed.",
    },
  ],
};

export default therapy;
