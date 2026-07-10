import type { FeatureData } from "@/lib/features/types";

const payments: FeatureData = {
  slug: "payments",
  name: "Payments",
  pillar: "SHOP",
  pillarLink: "/shop",
  seoTitle: "Payments — Get Paid Before Dinner | FYNZ",
  seoDescription:
    "Take cards, Apple Pay, PayPal, and tap-to-pay — online, in person, or by text. One payment engine for deposits, invoices, store orders, and renewals, running on Stripe, PayPal, and Square.",
  hero: {
    headline: "Get paid the moment the work is done.",
    subhead:
      "Cards, Apple Pay, PayPal, tap-to-pay in person, or a payment link by text. One tap for your customer — the receipt, the bookkeeping, and the follow-up handle themselves.",
  },
  capabilities: [
    {
      title: "Every way customers want to pay",
      desc: "Card, Apple Pay, PayPal, and tap-to-pay on your phone — running on the rails your customers already trust: Stripe, PayPal, and Square.",
    },
    {
      title: "Text-to-pay",
      desc: "Send a payment link by SMS and let them settle from the couch. No app to download, no account to create — one tap and it's paid.",
    },
    {
      title: "One engine for everything you charge",
      desc: "Deposits, invoices, store orders, and membership renewals all run through the same checkout — one place to look, one ledger to trust.",
    },
    {
      title: "Receipts that send themselves",
      desc: "The moment a payment clears, the receipt goes out by email and text — you never touch it.",
    },
    {
      title: "Deposits that protect your time",
      desc: "Collect a deposit when a job is booked or a proposal is signed, so the appointment is real before you block the day.",
    },
    {
      title: "Synced straight to your books",
      desc: "Every payment lands in OPS reporting the moment it clears — recorded, reconciled, ready for tax time.",
    },
  ],
  steps: [
    { title: "Connect a processor", desc: "Link Stripe, PayPal, or Square — or the one you already use — in a few minutes." },
    { title: "Charge your way", desc: "Send a text-to-pay link, add checkout to your store, or tap a card in person." },
    { title: "Customer pays in one tap", desc: "No customer account needed — the payment page works on any device." },
    { title: "Everything else is automatic", desc: "Receipt sent, books updated, and the review request queued — before you've put your phone down." },
  ],
  faq: [
    {
      q: "Do I need a separate card reader or terminal?",
      a: "Not necessarily — tap-to-pay works right from your phone for in-person payments, and text-to-pay covers everyone else. If you already use a Square reader, it fits right in.",
    },
    {
      q: "What does my customer see when I send a payment link?",
      a: "A clean, branded payment page with the amount and a Pay button. They tap, pay with card, Apple Pay, or PayPal, and get a receipt instantly — no login, no app.",
    },
    {
      q: "Can I keep my existing Stripe, PayPal, or Square account?",
      a: "Yes — FYNZ runs on top of the processor you already have, so your payouts, rates, and account history stay exactly where they are.",
    },
  ],
  related: ["invoicing", "reminders", "memberships"],
};

export default payments;
