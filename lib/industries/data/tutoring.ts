import type { IndustryData } from "@/lib/industries/types";

const tutoring: IndustryData = {
  slug: "tutoring",
  name: "Tutoring",
  seoTitle: "Fill Your Schedule and Keep Parents in the Loop | FYNZ for Tutoring | FYNZ",
  seoDescription:
    "FYNZ books the sessions, reminds the families, and answers the inquiries — even during class.",
  hero: {
    category: "Professional & Knowledge · Tutoring & Education",
    headline: "Fill your schedule and keep parents in the loop.",
    subhead:
      "FYNZ books the sessions, reminds the families, and answers the inquiries — even during class.",
    visual: {
      label: "FYNZ Workspace",
      title: "Weekly Schedule",
      lines: ["Mon 4p ✓  Wed 4p ✓", "1 slot still available"],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "Sound familiar?",
    cards: [
      {
        title: "Missed inquiry opportunities",
        desc: "Inquiries arrive while you are mid-lesson, and go to competitors by evening.",
      },
      {
        title: "Forgotten lesson no-shows",
        desc: "Parents forget sessions, kids miss them, and you eat the unbillable hour.",
      },
      {
        title: "Schedule building puzzle",
        desc: "Rebuilding the weekly schedule every term is a massive matching puzzle.",
      },
      {
        title: "Awkward payment chasing",
        desc: "Chasing families for session payments feels awkward and slows collections.",
      },
    ],
  },
  benefits: [
    {
      powered: "powered by Conversation AI",
      title: "Every inquiry gets an answer today.",
      desc: "Questions about subjects, levels, and rates answered instantly — with a trial-session link.",
      preview: "Yes! I have slots open. Book a 30-min trial session here: [link]",
    },
    {
      powered: "powered by Recurring appointments · SCHEDULE",
      title: "Weekly slots that repeat all term.",
      desc: "Recurring sessions lock in the schedule; changes take one tap, not one phone call.",
      preview: "Term Booking: Locked ✓",
    },
    {
      powered: "powered by Reminders & confirmations · SCHEDULE",
      title: "Parents always know what's next.",
      desc: "Session reminders and 'see you Thursday' notes go to the right parent, every time.",
      preview: "Hi Mrs. Chen, reminder: Alex has math tomorrow at 4 PM. Zoom link: [link]",
    },
    {
      powered: "powered by Memberships & packages · SHOP",
      title: "Packages make payment painless.",
      desc: "Families buy 10-session packs up front; FYNZ tracks the balance.",
      preview: "Package Balance: 8 of 10 sessions remaining",
    },
    {
      powered: "powered by Workflow AI",
      title: "Trial students become term students.",
      desc: "Post-trial follow-ups convert the maybe into the Monday 4 PM regular.",
      preview: "Trial-to-Term Flow Active",
    },
  ],
  demo: {
    eyebrow: "Sequence Flow",
    title: "Inquiry to booked trial session",
    steps: [
      {
        label: "3:00 PM",
        sublabel: "Parent text inquiry",
        desc: "Asks for Grade 11 chemistry help during class.",
      },
      {
        label: "3:01 PM",
        sublabel: "AI answers and sends link",
        desc: "Details experience, pricing, and trial link.",
      },
      {
        label: "3:15 PM",
        sublabel: "Trial booked by parent",
        desc: "Picks Thursday 4 PM slot on scheduling page.",
      },
      {
        label: "Thursday",
        sublabel: "Trial confirmed",
        desc: "SMS reminder sent to parent ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A day with FYNZ",
    before:
      "Before — three inquiry emails answered at 9 PM; one family has already booked with another tutor.",
    after:
      "After — all three answered within a minute; two new trial sessions locked on the calendar.",
  },
  faq: [
    {
      q: "Can reminders go to the parent instead of the student?",
      a: "Yes — each student profile can link to a parent contact so reminders send to the parent's phone.",
    },
    {
      q: "How does package balance tracking work?",
      a: "FYNZ tracks credits and alerts families to top up when they reach 1 session remaining.",
    },
    {
      q: "Can I block holidays?",
      a: "Yes — block holidays and the term schedule shifts or pauses automatically based on your rules.",
    },
  ],
};

export default tutoring;
