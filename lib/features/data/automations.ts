import type { FeatureData } from "@/lib/features/types";

const automations: FeatureData = {
  slug: "automations",
  name: "Automations",
  pillar: "GROW",
  pillarLink: "/grow",
  seoTitle: "Automations — Build It Once, It Runs Forever | FYNZ",
  seoDescription:
    "Visual workflows for small business: a trigger, a few actions, and every lead gets followed up every time. No code, no Zapier, no eleventh tab.",
  hero: {
    headline: "Build it once. It runs for every lead, forever.",
    subhead:
      "A workflow is just the follow-up you'd do anyway — written down once. New lead comes in, text goes out, booking link follows. Drag, drop, done: no code, no Zapier.",
  },
  capabilities: [
    {
      title: "Visual drag-and-drop builder",
      desc: "Triggers, actions, and delays snap together like blocks. If you can sketch your follow-up on a napkin, you can build it here.",
    },
    {
      title: "Branches that think",
      desc: "Did they reply within an hour? Send the booking link. Went quiet? Wait a day and follow up. The workflow checks, so you don't have to.",
    },
    {
      title: "Works across every pillar",
      desc: "Automations are the connective tissue of FYNZ — a trigger in your inbox can fire an action in your calendar, your CRM, or your invoicing.",
    },
    {
      title: "Missed-call text-back built in",
      desc: "An unanswered ring becomes an instant text within seconds — so a busy moment doesn't become a lost customer.",
    },
    {
      title: "Ready-made recipes",
      desc: "Start from proven templates — speed-to-lead, rebooking nudges, review requests — and tweak the words to sound like you.",
    },
    {
      title: "Every run, logged",
      desc: "See exactly which workflows fired for which customers and what happened next, so nothing runs in the dark.",
    },
  ],
  steps: [
    { title: "Pick a trigger", desc: "New lead, missed call, appointment booked, invoice paid — anything that happens in FYNZ can start a workflow." },
    { title: "Add your actions", desc: "Send a text, wait a day, add a tag, notify your team — stack the steps in the order you'd do them." },
    { title: "Add a branch if you want", desc: "Split on whether they replied, booked, or paid — each path gets its own follow-up." },
    { title: "Turn it on", desc: "From then on it runs for every lead that qualifies, whether you're working, driving, or asleep." },
  ],
  faq: [
    {
      q: "Do I need to know how to code?",
      a: "No. Everything is visual — you drag steps onto a canvas and connect them. If you can describe your follow-up out loud, you can build it.",
    },
    {
      q: "How is this different from Zapier?",
      a: "There's nothing to connect. Your inbox, CRM, calendar, and payments already live in FYNZ, so workflows reach all of them without third-party plumbing or a second subscription.",
    },
    {
      q: "What if an automation sends something I wouldn't?",
      a: "You write every message a workflow sends, and you can pause or edit any workflow at any time. Every run is logged so you can see exactly what went out and to whom.",
    },
  ],
  related: ["crm", "marketing", "reminders"],
};

export default automations;
