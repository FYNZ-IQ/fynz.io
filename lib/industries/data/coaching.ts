import type { IndustryData } from "@/lib/industries/types";

const coaching: IndustryData = {
  slug: "coaching",
  name: "Coaches",
  seoTitle:
    "Book More Discovery Calls and Sell Your Programs | FYNZ for Coaching & Consulting",
  seoDescription:
    "FYNZ pre-qualifies discovery calls, builds nurture sequences that convert downloads to bookings, and sells your programs and packages all in one place.",
  hero: {
    category: "Coaching & Consulting",
    headline: "Book more discovery calls and sell your programs.",
    subhead:
      "FYNZ fills your calendar with the right calls — and sells your programs while you coach.",
    visual: {
      label: "Your Coaching Funnel",
      title: "Discovery Funnel",
      lines: ["Landing page → Freebie → Nurture", "Discovery call booked ✓"],
    },
  },
  pain: {
    eyebrow: "The coaching trap",
    title: "Sound familiar?",
    cards: [
      {
        title: "Your calendar is empty or full of the wrong calls",
        desc: "Feast or famine. Either scrambling to fill slots or spending hours on calls that were never going to convert.",
      },
      {
        title: "Leads download the freebie and disappear",
        desc: "200 downloads, 2 calls. The rest of the list goes cold before you even know their name.",
      },
      {
        title: "Selling a program means three different platforms",
        desc: "Payment link here, course platform there, email list somewhere else. Clients get confused. Revenue leaks.",
      },
      {
        title: "No-shows steal your best hours",
        desc: "Discovery calls that evaporate at 10 AM. No reminder. No reschedule. Just a blocked hour gone.",
      },
    ],
  },
  benefits: [
    {
      powered: "Online booking · SCHEDULE + Lead capture forms · GROW",
      title: "Discovery calls book themselves — pre-qualified.",
      desc: "A short screening form filters for fit before your calendar ever opens. Only leads who pass the criteria see your availability.",
      preview: "Calendar unlocked ✓ — Choose your slot",
    },
    {
      powered: "Website & Funnel AI · GROW",
      title: "A funnel that works while you sleep.",
      desc: "Landing page → freebie → nurture → call booked. Built in an afternoon, drafted for you.",
      preview: "Discovery call booked ✓ — 15 calls",
    },
    {
      powered: "Memberships & packages · SHOP",
      title: "Programs sold and delivered in one place.",
      desc: "Payment plans, memberships, and course content under the same roof — enroll, pay, and access from one portal.",
      preview: "3-Month Business Accelerator · $1,497 or 3× $549",
    },
    {
      powered: "Workflow AI + Content AI · GROW",
      title: "Leads warm themselves up.",
      desc: "The email sequence that turns a download into a discovery call — written in your voice.",
      preview: "Day 7: Ready to go deeper? Book a call. →",
    },
    {
      powered: "Reminders & confirmations · SCHEDULE",
      title: "No-shows stop stealing your peak hours.",
      desc: "Confirmations, reminders, and easy rescheduling protect every slot.",
      preview: "Your discovery call is tomorrow at 10 AM — here's the Zoom link: [link]",
    },
  ],
  demo: {
    eyebrow: "Funnel in action",
    title: "From freebie download to booked call — in 7 days",
    steps: [
      {
        label: "Day 0",
        sublabel: "Lead downloads “5 Keys to Scaling” guide",
        desc: "Opt-in confirmed. Freebie delivered. Nurture sequence starts.",
      },
      {
        label: "Day 1",
        sublabel: "Welcome email + freebie delivered",
        desc: "52% open rate · 31% click-through · First value hit.",
      },
      {
        label: "Day 3",
        sublabel: "Follow-up: “The mistake that kills scale”",
        desc: "Personal story + actionable insight. Trust built.",
      },
      {
        label: "Day 7",
        sublabel: "Booking email sent → call confirmed.",
        desc: "Discovery call booked — Friday 10 AM ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "200 downloads, two very different outcomes",
    before:
      "Without FYNZ — 200 freebie downloads, 2 discovery calls. The rest of the list went cold and you never heard from them again.",
    after:
      "With FYNZ — the nurture sequence books 15 calls from the same 200. (Placeholder figures — replace with your data.)",
  },
  proof: {
    stats: [
      { num: "7.5%", label: "Download → call conversion rate (placeholder)" },
      { num: "$0", label: "Manual follow-up time spent per lead" },
      { num: "1 place", label: "For programs, billing, and content" },
    ],
    testimonial:
      "“[Coach testimonial placeholder — space for a coaching or consulting client quote about FYNZ's impact on their call bookings and program revenue.]”",
  },
  faq: [
    {
      q: "Can I offer payment plans on my programs?",
      a: "Yes — split payments run automatically. You set the number of installments and intervals; FYNZ handles the billing, retries on failures, and notifies you only when something needs attention.",
    },
    {
      q: "Can I host course content directly in FYNZ?",
      a: "Yes — modules, videos, and downloadable resources are all hosted and gated by enrollment status. Clients access everything through a single branded portal, not a stack of third-party links.",
    },
    {
      q: "What if a lead isn't ready to book yet?",
      a: "They stay in your nurture sequence, receiving value emails until they're ready. You can segment and re-engage at any point — or trigger a personal outreach when engagement signals pick up.",
    },
    {
      q: "Can I use my own email domain for nurture sequences?",
      a: "Yes — all emails send from your domain, preserving your brand and deliverability. Setup takes a few minutes.",
    },
  ],
};

export default coaching;
