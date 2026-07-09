import type { FeatureData } from "@/lib/features/types";

const invoicing: FeatureData = {
  slug: "invoicing",
  name: "Invoicing",
  pillar: "SHOP",
  pillarLink: "/shop",
  seoTitle: "Invoicing — From Estimate to Paid, No Chasing | FYNZ",
  seoDescription:
    "Estimates, proposals, e-signatures, and invoices that follow up on themselves. Send from your phone, get approved with a signature, and watch the deposit invoice fire automatically.",
  hero: {
    headline: "From estimate to signed to paid — no printer involved.",
    subhead:
      "Send a proposal your customer can e-sign from their phone. The moment they sign, the deposit invoice fires by itself — and unpaid invoices nudge themselves so you never write the awkward follow-up.",
  },
  capabilities: [
    {
      title: "Estimates & proposals",
      desc: "Build a professional quote in minutes from your phone or laptop — line items, taxes, and terms pulled in automatically.",
    },
    {
      title: "E-signatures built in",
      desc: "Customers approve with a signature right on their phone. No printing, no scanning, no 'I'll get to it this weekend.'",
    },
    {
      title: "Signed → deposit, automatically",
      desc: "The moment a proposal is e-signed, the deposit invoice sends itself. The job is real before you've even seen the notification.",
    },
    {
      title: "Invoices they pay in one tap",
      desc: "Every invoice is a payment page — card, Apple Pay, PayPal, or text-to-pay. Getting paid is one tap, not a bank transfer form.",
    },
    {
      title: "Follow-ups that write themselves",
      desc: "Unpaid invoices send their own polite reminders on the schedule you set — you stay the nice one, FYNZ plays collections.",
    },
    {
      title: "Straight into your books",
      desc: "Every estimate, invoice, and payment syncs to the customer's CRM record and OPS reporting — nothing to re-enter at tax time.",
    },
  ],
  steps: [
    { title: "Build the estimate", desc: "Pick the customer, add line items, and hit send — from the job site if you want." },
    { title: "They sign on their phone", desc: "One tap to view, one signature to approve. You see the moment it happens." },
    { title: "The deposit invoice fires", desc: "Signature triggers the deposit automatically — no gap between 'yes' and money." },
    { title: "Reminders handle the rest", desc: "The final invoice sends when the job's done, and follows up on itself until it's paid." },
  ],
  faq: [
    {
      q: "Can I turn an estimate into an invoice without retyping it?",
      a: "Yes — an approved estimate converts to an invoice in one tap, with every line item, tax, and customer detail carried over.",
    },
    {
      q: "Are the e-signatures legitimate?",
      a: "Yes — each signature is captured with a timestamp and record of who signed, attached to the document, so you have a clear paper trail for every approved job.",
    },
    {
      q: "What if a customer just doesn't pay?",
      a: "Automatic reminders do the chasing — friendly at first, firmer on your schedule. You can see at a glance which invoices are outstanding and step in personally only when you choose to.",
    },
  ],
  related: ["payments", "accounting", "crm"],
};

export default invoicing;
