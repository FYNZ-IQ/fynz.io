import type { FeatureData } from "@/lib/features/types";

const marketing: FeatureData = {
  slug: "marketing",
  name: "Email & SMS marketing",
  pillar: "GROW",
  pillarLink: "/grow",
  seoTitle: "Email & SMS Marketing — Campaigns That Run Themselves | FYNZ",
  seoDescription:
    "Email and SMS campaigns, drip sequences, and broadcasts for small business — with AI drafting the words in your voice. Stay in front of your list without living in a marketing tool.",
  hero: {
    headline: "Marketing that runs while you work.",
    subhead:
      "Campaigns, broadcasts, and drip sequences go out on schedule — with Content AI drafting the words in your voice. Stay in front of your list without spending Sunday nights writing newsletters.",
  },
  capabilities: [
    {
      title: "Email and SMS from one place",
      desc: "Send a text blast, an email newsletter, or both from the same campaign — no separate tools, no exporting lists back and forth.",
    },
    {
      title: "Content AI writes the first draft",
      desc: "Describe the offer and AI drafts the message in your voice. You edit, approve, and send — the blank page is gone.",
    },
    {
      title: "Drip sequences that nurture",
      desc: "New leads get a welcome series; quiet customers get a win-back. Set the sequence once and it runs for everyone who qualifies.",
    },
    {
      title: "Send to exactly the right people",
      desc: "Smart lists pull straight from your CRM — lapsed 60-day clients, big spenders, one service type — so every message lands where it's relevant.",
    },
    {
      title: "Results you can actually read",
      desc: "Opens, clicks, replies, and bookings per campaign — see which messages fill the calendar, not just which got opened.",
    },
    {
      title: "Built-in compliance",
      desc: "Opt-outs, unsubscribes, and consent are handled automatically, so you can text your list without worrying about the rules.",
    },
  ],
  steps: [
    { title: "Pick your audience", desc: "Choose a smart list from your CRM — or everyone. Segments update themselves." },
    { title: "Draft with AI", desc: "Tell Content AI what you're promoting; it writes the email and the text in your voice." },
    { title: "Schedule or send", desc: "Fire it off now or queue it for the best time. Drips run continuously on their own." },
    { title: "Watch the bookings", desc: "Track who opened, clicked, replied — and who actually booked from each campaign." },
  ],
  faq: [
    {
      q: "I'm not a writer. Will my messages sound like a robot?",
      a: "Content AI learns your tone from how you already talk to customers and drafts in that voice. You always get final say before anything sends.",
    },
    {
      q: "Do I need a separate texting service?",
      a: "No. SMS is built in alongside email — same contacts, same campaigns, same reporting, one bill.",
    },
    {
      q: "How is this different from Mailchimp?",
      a: "Your marketing reads from the same CRM as your bookings and payments, so you can target by real behavior — last visit, service type, spend — and see revenue per campaign, not just opens.",
    },
  ],
  related: ["crm", "automations", "funnels"],
};

export default marketing;
