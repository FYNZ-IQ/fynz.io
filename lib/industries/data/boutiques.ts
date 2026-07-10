import type { IndustryData } from "@/lib/industries/types";

const boutiques: IndustryData = {
  slug: "boutiques",
  name: "Boutiques",
  seoTitle: "Bring Shoppers Back Again and Again | FYNZ for Boutiques & Retail",
  seoDescription:
    "FYNZ builds your shopper list, announces new arrivals by text, powers an online store, and wins back lapsed customers automatically.",
  hero: {
    category: "Retail & Commerce · Boutiques & Retail",
    headline: "Bring shoppers back again and again.",
    subhead:
      "FYNZ remembers every customer, announces every arrival, and sells even when the shop is closed.",
    visual: {
      label: "FYNZ Campaigns",
      title: "Arrival Blast · 384 contacts",
      lines: ["The linen dresses just landed 🌿 — shop before they sell out", "Sent 9:02 AM"],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "The retail loop that never closes",
    cards: [
      {
        title: "One sale, then silence",
        desc: "Shoppers love the store, buy once, and vanish — with no way for you to reach them again.",
      },
      {
        title: "Arrivals sell only to walk-ins",
        desc: "New stock sells only to whoever wanders in that week. Everyone else never knows it exists.",
      },
      {
        title: "Instagram isn't a list you own",
        desc: "Followers can disappear overnight. A phone number list is yours — platform-proof and direct.",
      },
      {
        title: "$0 after 6 PM",
        desc: "The shop makes nothing between closing time and opening. An online store fixes that.",
      },
    ],
  },
  benefits: [
    {
      powered: "powered by Customer list · GROW",
      title: "Checkout builds your list.",
      desc: "A name and number at the counter turns every sale into a future one. No friction, no forms — just a quick QR or tablet tap.",
      preview: "Join our VIP list 🛍️ — added! Welcome to the VIP list",
    },
    {
      powered: "powered by Email & SMS campaigns · GROW",
      title: "New arrivals sell out by text.",
      desc: "'The linen dresses just landed' goes to the customers who bought linen last time — not a blast to everyone.",
      preview: "The linen dresses just landed 🌿 — shop before they sell out: fynz.io/shop/linen",
    },
    {
      powered: "powered by Online store · SHOP",
      title: "Your shop never closes.",
      desc: "An online store sells your pieces around the clock — same inventory, same brand, same prices.",
      preview: "The Linen Edit · 11:43 PM — ✓ Order confirmed, ships tomorrow",
    },
    {
      powered: "powered by Workflow AI",
      title: "Lapsed shoppers get a reason to return.",
      desc: "A quiet 'we've got new things you'd love' after 60 days of silence — timed to when they're most likely to shop again.",
      preview: "👋 It's been a while — new arrivals just dropped and we thought of you: fynz.io/shop/new",
    },
    {
      powered: "powered by Reviews AI",
      title: "Word of mouth, systematized.",
      desc: "Review requests sent automatically after purchases keep the shop discoverable on Google.",
      preview: "★★★★★ “The linen dress is beautiful — will be back!”",
    },
  ],
  demo: {
    eyebrow: "Live scenario",
    title: "New arrival text → online orders before anyone walks in",
    steps: [
      {
        label: "9:00 AM",
        sublabel: "Arrival campaign sent",
        desc: "'Linen dresses arrived 🌿' SMS dispatched to 384 past buyers — one tap in FYNZ.",
      },
      {
        label: "9:15 AM",
        sublabel: "First online order placed",
        desc: "Priya orders the Sage Linen Dress before she's even out of bed.",
      },
      {
        label: "9:45 AM",
        sublabel: "7 orders confirmed",
        desc: "$686 in revenue — shop still 2 hours from opening.",
      },
      {
        label: "11:00 AM",
        sublabel: "14 pieces sold",
        desc: "The linen section is already half-cleared before a single walk-in.",
      },
      {
        label: "12:00 PM",
        sublabel: "Store opens",
        desc: "Best Friday in three months — $1,372 before opening ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A rainy week — with and without FYNZ",
    before:
      "Without FYNZ — a rainy week means a dead till. No reach, no list, no way to drive traffic. You wait for the weather to change and hope someone wanders in.",
    after:
      "With FYNZ — the arrival text sells 14 pieces before anyone walks in. Rain or shine — the list is yours and the shop is always open online.",
  },
  proof: {
    stats: [
      { num: "3×", label: "Repeat-purchase rate vs walk-in only" },
      { num: "$2k+", label: "Revenue from campaigns per month (placeholder — add real figure)" },
    ],
    testimonial:
      "“[Boutique owner testimonial placeholder] Add a real quote from a boutique owner here — name, store, and city. Requires customer approval before publishing.”",
  },
  faq: [
    {
      q: "Do I need to run a full e-commerce site?",
      a: "No — start with a simple storefront for bestsellers and grow from there. No technical setup required. You can start with 5 products and expand whenever you're ready.",
    },
    {
      q: "How do I capture customer details at checkout?",
      a: "A simple QR code or tablet form at the counter — takes 15 seconds and adds them to your list automatically. No staff training required; shoppers complete it themselves.",
    },
    {
      q: "Can I send different messages to different customer segments?",
      a: "Yes — segment by purchase history, last visit date, or product category to send only relevant messages. Linen buyers hear about linen; knitwear fans hear about knitwear. Relevance drives revenue.",
    },
  ],
};

export default boutiques;
