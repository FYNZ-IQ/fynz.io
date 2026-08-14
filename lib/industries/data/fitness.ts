import type { IndustryData } from "@/lib/industries/types";

const fitness: IndustryData = {
  slug: "fitness",
  name: "Fitness Studios",
  seoTitle: "Fill Classes and Grow Member Retention | FYNZ for Fitness & Gyms | FYNZ",
  seoDescription:
    "FYNZ handles gym trial follow-up, membership billing, class waitlists, and win-back campaigns automatically so your fitness business grows.",
  hero: {
    category: "Fitness & Gyms",
    headline: "Fill classes and grow memberships.",
    subhead: "FYNZ follows up trial members, bills memberships, and recovers drifting clients — so you focus on the workout.",
    visual: {
      label: "FYNZ Workspace",
      title: "Active Gym Members",
      lines: ["Trial onboarding active", "Conversions +35% ✓"],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "Sound familiar?",
    cards: [
      {
        title: "Vanishing trial signups",
        desc: "New trials sweat once and vanish because nobody followed up on time.",
      },
      {
        title: "Fragmented billing system",
        desc: "Membership payments live in a separate system from class schedules and chat.",
      },
      {
        title: "Declined card churn",
        desc: "You notice a member has quit only when their monthly autopay card declines.",
      },
      {
        title: "Coaches in empty rooms",
        desc: "Class no-shows leave paid coaches in empty rooms, wasting production.",
      },
    ],
  },
  benefits: [
    {
      powered: "powered by Workflow AI + Email & SMS campaigns · GROW",
      title: "Every trial gets followed up.",
      desc: "Day 1 welcome, day 3 check-in, day 7 membership offer send themselves automatically.",
      preview: "“Welcome! Here's a trial pass...” — day 1 of the automated follow-up sequence",
    },
    {
      powered: "powered by Memberships & packages · SHOP",
      title: "Memberships that bill themselves.",
      desc: "Autopay setup, monthly renewals, and failed-payment retries run in the background.",
      preview: "Autopay: Active — renewals and failed-payment retries run automatically",
    },
    {
      powered: "powered by Workflow AI",
      title: "Win back members before they cancel.",
      desc: "No check-in for 3 weeks triggers a personal 'we miss you' text to save the member.",
      preview: "We haven't seen you lately! Next session is on us 👊",
    },
    {
      powered: "powered by Class schedules & waitlists · SCHEDULE",
      title: "Classes fill from the waitlist.",
      desc: "Class waitlists text waiting members automatically when a spot opens up.",
      preview: "Class filled from waitlist — waiting member texted the moment a spot opened",
    },
    {
      powered: "powered by Reviews AI",
      title: "Milestones build Google ratings.",
      desc: "Trigger review requests at the 100th workout to keep you at the top of local searches.",
      preview: "“100th workout! Leave a review?” — sent at the milestone automatically",
    },
  ],
  demo: {
    eyebrow: "Sequence Flow",
    title: "Trial conversion to membership",
    steps: [
      {
        label: "Day 0",
        sublabel: "Trial signup",
        desc: "Welcome email and tour booking details sent.",
      },
      {
        label: "Day 3",
        sublabel: "Workout check-in",
        desc: "How was the class? Tip guide sent automatically.",
      },
      {
        label: "Day 7",
        sublabel: "Membership offer sent",
        desc: "SMS offer for 20% off first month.",
      },
      {
        label: "Day 8",
        sublabel: "Converted to member",
        desc: "Conversions doubled ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A day with FYNZ",
    before:
      "Before — trial slips sitting in a desk drawer, no follow-up structure, and manual billing cards.",
    after:
      "After — every trial goes on an automated journey; conversions double without staff picking up the phone.",
  },
  faq: [
    {
      q: "Does it handle failed membership payments?",
      a: "Yes; dunning texts and payment retries run automatically, recovering payments without manual effort.",
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

export default fitness;
