import type { FeatureData } from "@/lib/features/types";

const customers: FeatureData = {
  slug: "customers",
  name: "Customer management",
  pillar: "SCHEDULE",
  pillarLink: "/schedule",
  seoTitle: "Customer Management — Regulars, Remembered | FYNZ",
  seoDescription:
    "Customer profiles for small business: visit history, notes, preferences, and no-show flags on every profile — so \"the usual\" actually means something.",
  hero: {
    headline: "Regulars, remembered.",
    subhead:
      "Every customer profile carries visit history, notes, and preferences — so \"the usual\" actually means something, whether it's you at the chair or the newest hire.",
  },
  capabilities: [
    {
      title: "Full visit history",
      desc: "Every appointment, service, and payment on one timeline. You know it's Sarah's fourteenth visit before she's through the door.",
    },
    {
      title: "Notes & preferences",
      desc: "Cooler tones, oat-milk latte, hates small talk — the details that make someone a regular, saved where the right staff can see them.",
    },
    {
      title: "Profiles that build themselves",
      desc: "Every booking, reschedule, and payment updates the record automatically. No data entry, no after-hours admin.",
    },
    {
      title: "No-show flags",
      desc: "Repeat no-shows are flagged on the profile, so you can require a deposit next time instead of eating another empty slot.",
    },
    {
      title: "Shared across your team",
      desc: "Notes and history travel with the customer, not the staff member — anyone who takes the appointment knows exactly who's sitting down.",
    },
    {
      title: "Connected to everything",
      desc: "The same profile powers your reminders, marketing, and CRM — one record per customer across all of FYNZ.",
    },
  ],
  steps: [
    { title: "Import your list", desc: "Bring in existing customers from a spreadsheet or your phone — or just let bookings create them." },
    { title: "Let history accumulate", desc: "Every visit, payment, and message lands on the profile automatically." },
    { title: "Add the human details", desc: "A quick note after an appointment — preferences, allergies, what to remember next time." },
    { title: "Use it everywhere", desc: "Reminders, follow-ups, and campaigns all read from the same profile." },
  ],
  faq: [
    {
      q: "Do I have to type in customer details myself?",
      a: "Almost never. Profiles are created and updated by bookings and payments automatically — the only thing you add by hand is the personal notes worth remembering.",
    },
    {
      q: "Who on my team can see customer notes?",
      a: "You control that. Notes can be visible to assigned staff only or to the whole team — set it once and it applies everywhere.",
    },
    {
      q: "How is this different from the CRM?",
      a: "It's the same customer record, viewed from two sides. Customer management is the service side — visits, notes, no-show history. The CRM is the sales side — leads, stages, and follow-ups. Both read from one profile.",
    },
  ],
  related: ["crm", "reminders", "marketing"],
};

export default customers;
