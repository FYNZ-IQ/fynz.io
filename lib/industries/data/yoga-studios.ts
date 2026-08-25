import type { IndustryData } from "@/lib/industries/types";

const yogaStudios: IndustryData = {
  slug: "yoga-studios",
  name: "Yoga Studios",
  seoTitle: "Fill Your Classes and Grow Memberships | FYNZ for Yoga & Pilates",
  seoDescription:
    "FYNZ fills class spots, sells passes online, and welcomes new students — so you focus on the mat.",
  hero: {
    category: "Fitness · Yoga & Pilates Studios",
    headline: "Fill your classes and grow memberships.",
    subhead: "FYNZ fills the mat spots, sells the passes, and welcomes every new student like you would.",
    visual: {
      label: "FYNZ Workspace",
      title: "6 PM Vinyasa Status",
      lines: ["Class Fully Booked (15/15)", "Waitlist: 3"],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "Sound familiar?",
    cards: [
      {
        title: "Half-empty off-peak classes",
        desc: "Empty 6 AM slots next to waitlisted 6 PM classes with no balance.",
      },
      {
        title: "Spreadsheet pass tracking",
        desc: "Wasting hours checking remaining classes in spreadsheets and manual files.",
      },
      {
        title: "One-and-done student churn",
        desc: "New students attend once and never return, losing customer value.",
      },
      {
        title: "Instructor sub scrambles",
        desc: "Subbing requests turn into group-chat scrambles that eat your evenings.",
      },
    ],
  },
  benefits: [
    {
      powered: "powered by Class schedules & waitlists · SCHEDULE",
      title: "Every class fills to capacity.",
      desc: "Live schedules with spot counts, and waitlists that auto-fill when someone drops.",
      preview: "Waitlist Dispatch Active",
    },
    {
      powered: "powered by Memberships & packages · SHOP",
      title: "Passes and memberships sell themselves.",
      desc: "Drop-ins, 10-class packs, and unlimited memberships purchased online, tracked automatically.",
      preview: "Drop-in, 10-Pass, or Monthly Memberships",
    },
    {
      powered: "powered by Workflow AI",
      title: "New students get a real welcome.",
      desc: "A first-week sequence — what to bring, intro offer, 'how was your first class?' — turns one visit into a habit.",
      preview: "Welcome to Flow Studio! Here is what to bring to class tomorrow...",
    },
    {
      powered: "powered by Reminders & confirmations · SCHEDULE",
      title: "Reminders protect the mat count.",
      desc: "Class reminders cut silent no-shows so waitlisted students actually get in.",
      preview: "See you tomorrow at 6 AM. Reply C to confirm or R to release.",
    },
    {
      powered: "powered by Reviews AI",
      title: "Your community grows your studio.",
      desc: "Milestone review requests ('50th class!') build the rating that fills intro classes.",
      preview: "⭐ 50th Class Review Trigger",
    },
  ],
  demo: {
    eyebrow: "Sequence Flow",
    title: "Class waitlist auto-refill journey",
    steps: [
      {
        label: "4:32 PM",
        sublabel: "Student cancels mat spot",
        desc: "6 PM class opens 1 spot.",
      },
      {
        label: "4:33 PM",
        sublabel: "Waitlist scan",
        desc: "AI identifies and texts first student on the list.",
      },
      {
        label: "4:41 PM",
        sublabel: "Spot claimed",
        desc: "Student clicks to book and confirm their attendance.",
      },
      {
        label: "4:45 PM",
        sublabel: "Mat spot refilled",
        desc: "Class is fully booked ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A day with FYNZ",
    before:
      "Before — Sunday night spent cross-referencing class counts and updating spreadsheets.",
    after:
      "After — passes, waitlists, and student welcomes run themselves; you focus on planning studio sequences instead.",
  },
  faq: [
    {
      q: "Can students manage their own passes?",
      a: "Yes — students log into their portal to view remaining class passes and book slots against them.",
    },
    {
      q: "How does instructor subbing work?",
      a: "Instructors flag when they need a sub, and FYNZ alerts your approved sub list instantly to fill the shift.",
    },
    {
      q: "Can I sell merch alongside class passes?",
      a: "Yes — your online storefront can sell yoga mats, blocks, and apparel alongside memberships.",
    },
  ],
};

export default yogaStudios;
