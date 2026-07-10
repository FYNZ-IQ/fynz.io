import type { IndustryData } from "@/lib/industries/types";

const ecommerce: IndustryData = {
  slug: "ecommerce",
  name: "E-commerce",
  seoTitle: "Recover Lost Sales and Win Repeat Orders | FYNZ for E-commerce",
  seoDescription:
    "FYNZ chases abandoned carts, triggers replenishment nudges, sends smarter campaigns by segment, and tells you what's actually working — in plain language.",
  hero: {
    category: "E-commerce",
    headline: "Recover lost sales and win repeat orders.",
    subhead: "FYNZ chases every abandoned cart, brings back every past buyer, and tells you what's working.",
    visual: {
      label: "FYNZ · Cart Recovery",
      title: "Cart Recovery",
      lines: ["🛒 Abandoned cart detected · 2:14 PM", "Order recovered ✓ — $89 sneakers"],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "The leaks that drain every online store",
    cards: [
      {
        title: "7 of 10 carts disappear",
        desc: "Shoppers reach checkout, hesitate, and vanish — and they stay gone without a reason to come back.",
      },
      {
        title: "One-time buyers drift away",
        desc: "A first order placed, then silence. No follow-up means no second order — ever.",
      },
      {
        title: "Every email looks the same",
        desc: "'Marketing' means the same blast to everyone. High unsubscribes, low revenue — the wrong kind of reach.",
      },
      {
        title: "You're guessing what works",
        desc: "Three dashboards, no clear answer. Revenue is happening somewhere — you just can't see it plainly.",
      },
    ],
  },
  benefits: [
    {
      powered: "powered by Workflow AI + Email & SMS campaigns · GROW",
      title: "Abandoned carts come back.",
      desc: "A well-timed text and email sequence recovers sales that were already gone — three touchpoints, each smarter than the last.",
      preview: "Cart recovery: +1 hr nudge → +24 hrs 10% off → recovered $89 ✓",
    },
    {
      powered: "powered by Workflow AI",
      title: "Repeat orders on schedule.",
      desc: "Consumables trigger replenishment nudges right when the last order should be running out.",
      preview: "Running low on your favourite protein powder? 💪 Reorder now — ships tomorrow ✓",
    },
    {
      powered: "powered by Customer list · GROW",
      title: "Campaigns that know your customers.",
      desc: "Segments by what they bought, when, and how much — no more blast-everyone emails.",
      preview: "Repeat buyers 234 · Lapsed 60+ 89 · High-value $500+ 47 — each its own campaign",
    },
    {
      powered: "powered by Online store + Deposits & payments · SHOP",
      title: "Store, checkout, and payments in one place.",
      desc: "Products, orders, and payment processing all under the same roof as your marketing.",
      preview: "Today: $2,840 revenue · 34 orders · 3 live campaigns — one dashboard",
    },
    {
      powered: "powered by Ask AI",
      title: "Ask your business anything.",
      desc: "'What was my best seller last month?' — answered in plain language from your real data.",
      preview: "“Best campaign this month?” → cart sequence recovered $1,840 · 340% ROI",
    },
  ],
  demo: {
    eyebrow: "Live scenario",
    title: "From abandoned cart to recovered order — 1 hour",
    steps: [
      {
        label: "2:14 PM",
        sublabel: "Cart abandoned",
        desc: "Customer adds $89 sneakers, reaches checkout — then leaves the page.",
      },
      {
        label: "3:14 PM",
        sublabel: "Recovery text sent",
        desc: "“You left something behind 🛒 — complete your order and get 10% off.” Sent automatically by FYNZ.",
      },
      {
        label: "3:22 PM",
        sublabel: "Customer returns",
        desc: "Clicks the link, lands back at checkout with the discount pre-applied.",
      },
      {
        label: "3:24 PM",
        sublabel: "Order completed",
        desc: "Sneakers purchased. Payment processed. Confirmation sent. Done.",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "Cart abandonment — with and without FYNZ",
    before:
      "Without FYNZ — checking three dashboards to guess what happened. Most carts just gone, forever. No follow-up, no recovery, no visibility into what actually drove revenue this week.",
    after:
      "With FYNZ — “Recovered $1,840 in carts this week” is just a line in your morning summary. The sequence runs itself — you just ship the orders.",
  },
  proof: {
    stats: [
      { num: "~15%", label: "Of abandoned carts recovered on average" },
      { num: "2.4×", label: "Repeat-order rate lift with replenishment flows" },
      { num: "340%", label: "ROI on cart recovery send cost" },
    ],
    testimonial:
      "“[Store owner testimonial placeholder] Add a real quote from an e-commerce store owner here — name, store name, and the result they saw. Requires customer approval before publishing.”",
  },
  faq: [
    {
      q: "I already sell on another platform — does FYNZ still help?",
      a: "Yes — the recovery flows, campaigns, and customer list work alongside your existing store. Integration with major platforms is supported, so you don't have to migrate to benefit from FYNZ automation.",
    },
    {
      q: "How soon after abandonment does the first message send?",
      a: "Configurable — most stores start with 1 hour for the first message and 24 hours for the follow-up with a discount. You set the timing and the tone; FYNZ handles the sending.",
    },
    {
      q: "Can I A/B test different recovery messages?",
      a: "Yes — test subject lines, send timing, and discount offers to find what works best for your customers. Results are tracked per variant so the winner is obvious.",
    },
  ],
};

export default ecommerce;
