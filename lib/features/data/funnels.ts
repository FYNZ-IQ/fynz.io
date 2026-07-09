import type { FeatureData } from "@/lib/features/types";

const funnels: FeatureData = {
  slug: "funnels",
  name: "Funnels & pages",
  pillar: "GROW",
  pillarLink: "/grow",
  seoTitle: "Funnels & Landing Pages — From Click to Customer | FYNZ",
  seoDescription:
    "Landing pages, funnels, forms, and QR codes that turn attention into booked, paying customers — every submission lands straight in your CRM.",
  hero: {
    headline: "Turn a click into a customer, step by step.",
    subhead:
      "A funnel is just a page with one job: get the visitor to book. Build landing pages, forms, and QR codes in minutes — every submission lands straight in your CRM with its source attached.",
  },
  capabilities: [
    {
      title: "Landing pages in minutes",
      desc: "Pick a template, drop in your offer and photos, publish. No designer, no developer, no waiting.",
    },
    {
      title: "Forms, surveys & quizzes",
      desc: "Capture exactly the details you need — service, budget, timing — so you know what a lead wants before you reply.",
    },
    {
      title: "QR codes for the real world",
      desc: "Window decals, business cards, truck wraps — a scan opens your page and a walk-by becomes a lead in your CRM.",
    },
    {
      title: "Booking and payment built in",
      desc: "Let visitors pick a time and put down a deposit right on the page — from stranger to paid booking in one sitting.",
    },
    {
      title: "Every lead lands in your CRM",
      desc: "Submissions create contacts automatically, tagged with the page they came from, and your follow-up automations take it from there.",
    },
    {
      title: "See which pages actually convert",
      desc: "Views, submissions, and bookings per page — so you double down on what works and quietly retire what doesn't.",
    },
  ],
  steps: [
    { title: "Pick a template", desc: "Start from a proven layout for your kind of offer — promo, lead magnet, or booking page." },
    { title: "Make it yours", desc: "Swap in your words, photos, and prices with a drag-and-drop editor." },
    { title: "Share it everywhere", desc: "Link it in your bio, run ads to it, or print the QR code for your window." },
    { title: "Leads flow to your CRM", desc: "Every submission becomes a contact with its source attached — and follow-up starts automatically." },
  ],
  faq: [
    {
      q: "Do I need a website first?",
      a: "No. A funnel page stands on its own with its own link — many businesses run their whole promotion from a single page.",
    },
    {
      q: "What's the difference between a funnel and a landing page?",
      a: "A landing page is one page; a funnel is a short sequence — say, offer, then booking, then thank-you. You can build either, and both feed the same CRM.",
    },
    {
      q: "Can I take payments on my pages?",
      a: "Yes. Collect deposits or full payment right on the page, so a lead confirms with money down instead of a maybe.",
    },
  ],
  related: ["marketing", "crm", "payments"],
};

export default funnels;
