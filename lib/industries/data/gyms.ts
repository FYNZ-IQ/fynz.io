import type { IndustryData } from "@/lib/industries/types";

const gyms: IndustryData = {
  slug: "gyms",
  name: "Gyms",
  seoTitle: "Turn Trials into Members & Keep Them | FYNZ for Gyms | FYNZ",
  seoDescription:
    "FYNZ follows up every trial automatically, bills memberships, and wins back drifting members — so your gym grows without the manual hustle.",
  hero: {
    category: "Fitness · Gyms",
    headline: "Turn trials into members — and keep them.",
    subhead: "FYNZ follows up with every trial, bills every membership, and wins back the ones who drift.",
    visual: {
      label: "FYNZ Workspace",
      title: "Member Acquisition Funnel",
      lines: ["Trial signup", "Active membership ✓"],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "Sound familiar?",
    cards: [
      {
        title: "Vanishing gym trials",
        desc: "Trials walk in, sweat once, and vanish because nobody followed up on time.",
      },
      {
        title: "Fragmented billing system",
        desc: "Membership billing lives in a different system than scheduling and messaging.",
      },
      {
        title: "Declined card churn",
        desc: "You notice a member has quit only when their monthly card declines.",
      },
      {
        title: "Empty class spots",
        desc: "Class no-shows leave paid coaches in empty rooms, wasting production.",
      },
    ],
  },
  benefits: [
    {
      powered: "powered by Workflow AI + Email & SMS campaigns · GROW",
      title: "Every trial gets the full-court press — automatically.",
      desc: "Day 1 welcome, day 3 check-in, day 7 offer. No trial slips through untouched.",
      preview: "“Welcome! Here's a trial pass...” — the first touch in the automated sequence",
    },
    {
      powered: "powered by Memberships & packages · SHOP",
      title: "Memberships that bill themselves.",
      desc: "Sign-ups, recurring billing, and failed-payment recovery, all in the same place.",
      preview: "Autopay: Active — sign-ups, renewals, and failed-payment recovery in one place",
    },
    {
      powered: "powered by Workflow AI",
      title: "Win them back before they're gone.",
      desc: "No check-in for three weeks triggers a personal 'we miss you' — the save happens before the cancel.",
      preview: "Hey Marcus — we haven't seen you at the gym lately. Next session is on us 👊",
    },
    {
      powered: "powered by Class schedules & waitlists · SCHEDULE",
      title: "Classes fill from the waitlist.",
      desc: "Booked-out classes auto-fill from waiting members when someone drops.",
      preview: "Class filled from waitlist — a waiting member takes the spot automatically",
    },
    {
      powered: "powered by Reviews AI",
      title: "Members bring members.",
      desc: "Post-milestone review and referral asks turn your best members into your marketing.",
      preview: "“100th workout! Leave a review?” — milestone review and referral ask",
    },
  ],
  demo: {
    eyebrow: "Sequence Flow",
    title: "7 days from trial to member",
    steps: [
      {
        label: "Day 0",
        sublabel: "Trial signup online",
        desc: "Welcome email and tour booking sent.",
      },
      {
        label: "Day 3",
        sublabel: "First workout check-in",
        desc: "How was the class? Tip guide sent.",
      },
      {
        label: "Day 7",
        sublabel: "Membership offer sent",
        desc: "SMS offer for 20% off first month.",
      },
      {
        label: "Day 8",
        sublabel: "Trial converts to member",
        desc: "Conversions doubled ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A day with FYNZ",
    before:
      "Before — 40 trial slips sitting in a desk drawer, 3 conversions, and no follow-up structure.",
    after:
      "After — every trial is on an automated 7-day journey; conversions double without anyone picking up a phone.",
  },
  faq: [
    {
      q: "Does it handle failed membership payments?",
      a: "Yes; dunning texts and retry logic run automatically, recovering payments without manual effort.",
    },
    {
      q: "Can members book class spots online?",
      a: "Yes — members book class spots from your schedule widget, and are placed on waitlists if classes are full.",
    },
    {
      q: "Can I target messages by member type?",
      a: "Yes — set different onboarding journeys for personal training clients, class members, and open gym members.",
    },
  ],
};

export default gyms;
