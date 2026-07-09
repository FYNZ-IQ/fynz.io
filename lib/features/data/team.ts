import type { FeatureData } from "@/lib/features/types";

const team: FeatureData = {
  slug: "team",
  name: "Team management",
  pillar: "SCHEDULE",
  pillarLink: "/schedule",
  seoTitle: "Team & Staff Management — Every Chair, Every Shift, In Sync | FYNZ",
  seoDescription:
    "Staff scheduling for small business: individual calendars, services, time off, commissions, and permissions per team member — with a booking link for every new hire on day one.",
  hero: {
    headline: "Every chair, every shift, in sync.",
    subhead:
      "Individual schedules, services, time off, and permissions per team member — plus performance at a glance. New hires get their own booking link on day one.",
  },
  capabilities: [
    {
      title: "A schedule per person",
      desc: "Each team member sets their own hours and days — customers only see who's actually working when they pick a time.",
    },
    {
      title: "Services mapped to skills",
      desc: "Assign services to the people who perform them. Nobody gets booked for a balayage they don't do.",
    },
    {
      title: "Time off that handles itself",
      desc: "Approve a vacation or a sick day and that person disappears from booking automatically — no orphaned appointments, no awkward calls.",
    },
    {
      title: "Personal booking links",
      desc: "Every team member gets their own link to share on Instagram or a business card. Their regulars book them directly.",
    },
    {
      title: "Commissions & performance",
      desc: "Bookings, revenue, and commission per staff member, visible at a glance — payday math stops being a spreadsheet project.",
    },
    {
      title: "Permissions that fit the role",
      desc: "Staff see their own schedule and clients; managers see everything. You decide who can change prices, hours, and payouts.",
    },
  ],
  steps: [
    { title: "Add your people", desc: "Name, photo, and the services each person performs." },
    { title: "Set hours & permissions", desc: "Working days, time off, and what each role can see and edit." },
    { title: "Share their links", desc: "Each team member gets a personal booking link the moment they're added." },
    { title: "Watch it run", desc: "Bookings route to the right person automatically, and performance rolls up in one view." },
  ],
  faq: [
    {
      q: "Can customers book a specific team member?",
      a: "Yes — customers pick a person or choose \"any available,\" and each team member's personal link books them directly.",
    },
    {
      q: "What happens to bookings when someone takes time off?",
      a: "Approved time off hides that person from booking for those dates automatically, and you can rebook any affected appointments to another team member in a couple of taps.",
    },
    {
      q: "Can staff see each other's clients and earnings?",
      a: "Only if you want them to. Permissions are per role — most businesses let staff see their own book while owners and managers see the whole picture.",
    },
  ],
  related: ["calendar", "customers", "reporting"],
};

export default team;
