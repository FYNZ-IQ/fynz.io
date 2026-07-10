import type { FeatureData } from "@/lib/features/types";

const crm: FeatureData = {
  slug: "crm",
  name: "CRM & pipelines",
  pillar: "GROW",
  pillarLink: "/grow",
  seoTitle: "CRM & Pipelines — Every Lead, One Board | FYNZ",
  seoDescription:
    "A CRM built for small business: every lead gets a name, a stage, and a next step. Drag deals from new to won and never lose track of a customer again.",
  hero: {
    headline: "Every lead gets a name, a stage, and a next step.",
    subhead:
      "Leads from calls, forms, and DMs land on one visual pipeline. Drag them from new to won — and see exactly where every deal stands.",
  },
  capabilities: [
    {
      title: "One record per customer",
      desc: "Every conversation, booking, payment, and note in a single profile — no more digging through five apps to remember who someone is.",
    },
    {
      title: "Visual drag-and-drop pipeline",
      desc: "Stages you define, deals you drag. A glance tells you what's new, what's stalling, and what's about to close.",
    },
    {
      title: "Automatic lead capture",
      desc: "Missed calls, web forms, and social DMs create leads by themselves — nothing depends on you remembering to type it in.",
    },
    {
      title: "Follow-up that fires itself",
      desc: "A lead sitting too long in a stage triggers the nudge you'd have sent anyway — before they go cold.",
    },
    {
      title: "Tags, filters & smart lists",
      desc: "Slice your list by service, spend, last visit, or anything else — then message exactly that group.",
    },
    {
      title: "Works with the whole platform",
      desc: "Bookings, invoices, and campaigns all read from the same CRM — one source of truth across FYNZ.",
    },
  ],
  steps: [
    { title: "Connect your channels", desc: "Phone, web form, Instagram, Facebook — anywhere leads come from." },
    { title: "Name your stages", desc: "Use the default pipeline or shape it to how you actually sell." },
    { title: "Watch leads flow in", desc: "New inquiries appear on the board automatically, already tagged with their source." },
    { title: "Drag to won", desc: "Move deals forward; FYNZ handles the follow-ups and the record-keeping." },
  ],
  faq: [
    {
      q: "I've never used a CRM. Is this complicated?",
      a: "No — if you can move a sticky note, you can run this pipeline. Leads arrive by themselves; you just drag them forward.",
    },
    {
      q: "Can I import my existing contacts?",
      a: "Yes — upload a CSV or import from your phone contacts and you're live in minutes.",
    },
    {
      q: "Does it work with my booking calendar?",
      a: "Natively. A won deal can book straight onto your calendar, and every booking enriches the same customer record.",
    },
  ],
  related: ["inbox", "automations", "marketing"],
};

export default crm;
