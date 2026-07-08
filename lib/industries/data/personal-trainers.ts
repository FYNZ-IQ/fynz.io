import type { IndustryData } from "@/lib/industries/types";

const personalTrainers: IndustryData = {
  slug: "personal-trainers",
  name: "Personal Trainers",
  seoTitle: "Book More Clients Without the Back-and-Forth | FYNZ for Personal Trainers | FYNZ",
  seoDescription:
    "FYNZ handles scheduling, answers client DMs, sells session packs, and refills cancellations — so you just show up and train.",
  hero: {
    category: "Fitness · Personal Trainers",
    headline: "Book more clients without the back-and-forth.",
    subhead:
      "FYNZ handles the scheduling ping-pong, answers the DMs, and sells your session packs.",
    visual: {
      label: "FYNZ Workspace",
      title: "Today's Schedule",
      lines: ["7:00 AM — Booked", "9:00 AM — Open slot"],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "Sound familiar?",
    cards: [
      {
        title: "Scheduling ping-pong threads",
        desc: "The 14-message thread playing calendar tennis that kills your evening.",
      },
      {
        title: "Repetitive DM questions",
        desc: "Answering the same basic questions about pricing and beginners daily.",
      },
      {
        title: "Chasing cash/transfers",
        desc: "Awkward conversations chasing clients for session pack payments.",
      },
      {
        title: "Last-minute calendar holes",
        desc: "Cancellations that wreck a stacked day with zero warning.",
      },
    ],
  },
  benefits: [
    {
      powered: "Online booking · SCHEDULE",
      title: "One link replaces the whole scheduling thread.",
      desc: "Clients see your real availability and book — no back-and-forth, no double-booking.",
      preview: "fynz.io/trainer/alex",
    },
    {
      powered: "Conversation AI",
      title: "The DMs answer themselves.",
      desc: "Answers common questions instantly, in your voice, with a booking link.",
      preview: "Do you train beginners? — Yes! Here's a link to book a consult: [link]",
    },
    {
      powered: "Memberships & packages · SHOP",
      title: "Session packs, paid up front.",
      desc: "5- and 10-packs sold online, tracked per client, used per session.",
      preview: "10-Pack Purchase Confirmed",
    },
    {
      powered: "Workflow AI",
      title: "Cancellations trigger the backfill.",
      desc: "Your waitlist gets the open slot before you've finished reading the cancellation text.",
      preview: "Rescheduled to waitlist",
    },
    {
      powered: "Reminders & confirmations · SCHEDULE",
      title: "Reminders keep the day intact.",
      desc: "Confirmations the night before mean fewer 6 AM ghosts.",
      preview: "Hi Jordan, reminder: our session is tomorrow at 6 AM. See you there!",
    },
  ],
  demo: {
    eyebrow: "Sequence Flow",
    title: "DM inquiry to session booked",
    steps: [
      {
        label: "8:10 PM",
        sublabel: "DM inquiry received",
        desc: "AI answers pricing questions and details beginner packs.",
      },
      {
        label: "8:12 PM",
        sublabel: "10-pack purchased",
        desc: "Client pays online securely.",
      },
      {
        label: "8:14 PM",
        sublabel: "First session booked",
        desc: "Client picks Tuesday 7 AM on your calendar.",
      },
      {
        label: "8:15 PM",
        sublabel: "Calendar synced & confirmed",
        desc: "Paid up front ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A day with FYNZ",
    before:
      "Before — spending 45 minutes a night playing calendar tennis and chasing transfer confirmations.",
    after:
      "After — the link does the scheduling; you just show up, train, and focus on client form.",
  },
  proof: {
    stats: [
      { num: "5 hrs", label: "Weekly scheduling time saved" },
      { num: "100%", label: "Packs sold and paid online" },
      { num: "98%", label: "Attendance rate with reminders" },
    ],
    testimonial:
      "“[Personal trainer testimonial placeholder — space for a quote about schedule automated backfills and prepaid session packages.]”",
  },
  faq: [
    {
      q: "Can I block personal time so I never get booked over it?",
      a: "Yes — your calendar rules are absolute. FYNZ syncs with Google/Apple calendar so your personal events block booking slots.",
    },
    {
      q: "How does session tracking work?",
      a: "Each time a client books, one session credit is subtracted from their pack balance. They receive a notification when their balance is low.",
    },
    {
      q: "Can I charge a deposit for consultations?",
      a: "Yes — you can collect full payments or deposits at booking time.",
    },
  ],
};

export default personalTrainers;
