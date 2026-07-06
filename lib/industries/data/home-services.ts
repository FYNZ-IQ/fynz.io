import type { IndustryData } from "@/lib/industries/types";

const homeServices: IndustryData = {
  slug: "home-services",
  name: "Home Services",
  seoTitle: "Grow Your Trade & Keep the Bays and Routes Full | FYNZ for Home Services | FYNZ",
  seoDescription:
    "FYNZ helps home service businesses, trades, plumbers, cleaners, and contractors answer every call, book jobs, follow up estimates, and collect payments on the spot.",
  hero: {
    category: "Home Services & Trades",
    headline: "Grow your trade and keep the routes full.",
    subhead:
      "FYNZ answers the phone, schedules the jobs, and bills the clients — so you and your crews can focus on the work.",
    visual: {
      label: "FYNZ Workspace",
      title: "Missed-Call Text-Back",
      lines: [
        "Sorry we missed you! Need a repair, project, or clean? Book: fynz.io/book/service",
        "✓ Job scheduled",
      ],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "Sound familiar?",
    cards: [
      {
        title: "Missed calls are lost jobs",
        desc: "Every call that goes to voicemail is a client who goes to the next trade listed on Google.",
      },
      {
        title: "Playing phone tag on site",
        desc: "You cannot safely answer the phone while driving, on a ladder, or working on-site.",
      },
      {
        title: "Chasing estimate approvals",
        desc: "Quotes and proposals sit in client inboxes with no automated follow-up process.",
      },
      {
        title: "Sunday night invoice chase",
        desc: "Spending weekends sending bills, following up on checks, and chasing credit cards.",
      },
    ],
  },
  benefits: [
    {
      powered: "Missed-call text-back · GROW",
      title: "Missed calls text themselves back.",
      desc: "Instant automated text-back asks the client what they need and offers booking before they call competitors.",
      preview: "Missed call text-back active",
    },
    {
      powered: "Voice AI",
      title: "Your business is open 24/7.",
      desc: "An AI receptionist answers overflow calls, books appointments, and captures job details naturally.",
      preview: "“Hi! I can book a service window for you...”",
    },
    {
      powered: "Workflow AI",
      title: "Estimates follow up until approved.",
      desc: "Polite, persistent reminders check in with clients on days 2, 5, and 10, increasing close rates.",
      preview: "Estimate Approved ($1,250)",
    },
    {
      powered: "Online booking · SCHEDULE",
      title: "Bookings map straight to routes.",
      desc: "Crews get schedules, navigation, and client updates automatically synced from one calendar.",
      preview: "Route filled for Thursday",
    },
    {
      powered: "Deposits & payments · SHOP",
      title: "Card on file keeps cash flow moving.",
      desc: "Collect deposits up front or charge cards securely the moment the crew marks the job complete.",
      preview: "✓ Payment cleared",
    },
  ],
  demo: {
    eyebrow: "Sequence Flow",
    title: "Job dispatch to payment journey",
    steps: [
      {
        label: "10:02 AM",
        sublabel: "Call missed on-site",
        desc: "AI detects missed call from new lead.",
      },
      {
        label: "10:02 AM",
        sublabel: "Instant text-back sent",
        desc: "FYNZ texts a booking link.",
      },
      {
        label: "10:05 AM",
        sublabel: "Job booked & confirmed",
        desc: "Client picks Thursday AM slot.",
      },
      {
        label: "Thursday",
        sublabel: "Job marked done & paid",
        desc: "Payment processed on file ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A day with FYNZ",
    before:
      "Before — two missed calls on the ladder equals two jobs lost to the contractor who answered first.",
    after:
      "After — both callers get a text back in seconds; both are on Thursday's schedule.",
  },
  proof: {
    stats: [
      { num: "28", label: "Jobs saved monthly" },
      { num: "+38%", label: "Quote close rate" },
      { num: "0 hrs", label: "Time chasing payments" },
    ],
    testimonial:
      "“[Home Services manager testimonial placeholder — space for a quote about route density, automated scheduling, and text-back saves.]”",
  },
  faq: [
    {
      q: "What about emergency calls?",
      a: "Emergency keywords bypass automation and ring straight through to your on-call phone.",
    },
    {
      q: "Can I restrict my service area?",
      a: "Yes — clients enter their zip/postal code first to ensure you only get bookings within your service zones.",
    },
    {
      q: "Can crew members see the schedule?",
      a: "Yes — you can set separate permissions so crew members see only their assigned route and details.",
    },
  ],
};

export default homeServices;
