import type { IndustryData } from "@/lib/industries/types";

const plumbing: IndustryData = {
  slug: "plumbing",
  name: "Plumbers",
  seoTitle: "Never Miss Another Job | FYNZ for Plumbing | FYNZ",
  seoDescription:
    "You're under a sink. The phone rings. FYNZ answers it, books it, and texts back the ones it can't.",
  hero: {
    category: "Home Services & Trades · Plumbing",
    headline: "Never miss another job.",
    subhead: "You're under a sink. The phone rings. FYNZ answers it, books it, and texts back the ones it can't.",
    visual: {
      label: "FYNZ Workspace",
      title: "Missed Call Recovery",
      lines: ["Sorry we missed you — what's going on with your plumbing?", "✓ Tech dispatched"],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "Sound familiar?",
    cards: [
      {
        title: "Missed call customer loss",
        desc: "Every missed call is a job that went to the next plumber listed on Google.",
      },
      {
        title: "Working while answering phone",
        desc: "You can't quote, drive, and answer the phone at the same time without risk.",
      },
      {
        title: "Neglected Google reviews",
        desc: "Your Google profile has 6 reviews while your competitor down the road has 200.",
      },
      {
        title: "Chasing estimate approvals",
        desc: "Estimates go out and disappear into silence with no follow-up plan.",
      },
    ],
  },
  benefits: [
    {
      powered: "Missed-call text-back · GROW",
      title: "Missed calls text themselves back — in seconds.",
      desc: "'Sorry we missed you — what's going on with your plumbing?' starts the job before the caller dials a competitor.",
      preview: "Missed-call response speed: 12 seconds",
    },
    {
      powered: "Voice AI",
      title: "The phone gets answered on the jobsite.",
      desc: "A natural-sounding receptionist takes the call, gets the details, and books the visit.",
      preview: "'Hi! I can schedule a tech. Is tomorrow morning good?'",
    },
    {
      powered: "Online booking · SCHEDULE",
      title: "Jobs book straight into your day.",
      desc: "Customers pick a window from your real availability, by service area.",
      preview: "PM slot open — booked straight into your day from real availability.",
    },
    {
      powered: "Reviews AI",
      title: "Reviews win you the neighborhood.",
      desc: "Every finished job triggers a review ask — and Google starts sending you the calls.",
      preview: "Google review sent • Auto-triggered",
    },
    {
      powered: "Workflow AI + Invoicing & estimates · SHOP",
      title: "Estimates get followed up until they answer.",
      desc: "Quotes chase themselves at day 2, 5, and 10 — politely, automatically.",
      preview: "Estimate Approved ($450)",
    },
  ],
  demo: {
    eyebrow: "Sequence Flow",
    title: "Missed call text-back workflow",
    steps: [
      {
        label: "10:02 AM",
        sublabel: "Call missed under sink",
        desc: "AI detects missed call from new client.",
      },
      {
        label: "10:02 AM",
        sublabel: "Instant text-back sent",
        desc: "FYNZ asks what's going on and provides booking link.",
      },
      {
        label: "10:04 AM",
        sublabel: "Client replies and books",
        desc: "Details issue and books emergency AM slot.",
      },
      {
        label: "10:07 AM",
        sublabel: "Job confirmed on route",
        desc: "Job saved in under 5 minutes ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A day with FYNZ",
    before:
      "Before — two missed calls under a sink equals two jobs lost to the competitor who answered first.",
    after:
      "After — both callers get a text in seconds; both are on tomorrow's schedule.",
  },
  proof: {
    stats: [
      { num: "28", label: "Jobs saved monthly from missed calls" },
      { num: "+45", label: "Google reviews in 90 days" },
      { num: "100%", label: "Automated quote follow-up" },
    ],
    testimonial:
      "“[Plumber owner testimonial placeholder — space for a quote about missed call saves and auto-quote follow-up wins.]”",
  },
  faq: [
    {
      q: "What about emergency plumbing calls?",
      a: "Emergency keywords (burst pipe, leak, gas) ring straight through to your phone, bypass automation, and alert you immediately.",
    },
    {
      q: "Can I set service radius blocks?",
      a: "Yes — users enter their zip code/postal code first to ensure you only get booked in your service area.",
    },
    {
      q: "Can I attach photos to estimates?",
      a: "Yes — estimates sent through FYNZ support PDF attachments and image uploads so clients see the issue.",
    },
  ],
};

export default plumbing;
