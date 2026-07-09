import type { FeatureData } from "@/lib/features/types";

const accounting: FeatureData = {
  slug: "accounting",
  name: "Accounting",
  pillar: "OPS",
  pillarLink: "/ops",
  seoTitle: "Accounting & Bookkeeping — Books That Balance Themselves | FYNZ",
  seoDescription:
    "Small-business bookkeeping where the money already lives: income records itself, expenses get categorized, and payouts reconcile automatically. Rolling out now — join the waitlist.",
  hero: {
    headline: "Books that balance themselves.",
    subhead:
      "Your income is already in FYNZ the moment you get paid. Accounting connects the other half — expenses, categorization, and reconciliation — so the books keep themselves while you work. Rolling out now.",
  },
  capabilities: [
    {
      title: "Income already recorded",
      desc: "Every payment you take through FYNZ is on the books the second it lands — no double entry, no shoebox of receipts.",
    },
    {
      title: "Automatic expense categorization",
      desc: "Supplies, rent, software — expenses get sorted into the right category on their own, and recurring bills stay recurring.",
    },
    {
      title: "Payout reconciliation",
      desc: "A Stripe payout matches itself to the individual payments inside it, so deposits and sales always agree without you playing detective.",
    },
    {
      title: "One set of books, one platform",
      desc: "Because bookings, invoices, and payments live in FYNZ already, your books draw from the source — not from exports that drift out of date.",
    },
    {
      title: "Bookkeeper-friendly access",
      desc: "Give your bookkeeper the finances — and only the finances. Roles keep client data and payroll out of view.",
    },
    {
      title: "Feeds your tax estimate",
      desc: "Clean books power the running tax set-aside in FYNZ tax tools, so what you owe stops being a year-end mystery.",
    },
  ],
  steps: [
    {
      title: "Join the waitlist",
      desc: "Accounting is in development and rolling out gradually — sign up and we'll let you in as early access opens.",
    },
    {
      title: "Connect where money moves",
      desc: "Link your payout and expense sources; your FYNZ income is already flowing in on its own.",
    },
    {
      title: "Review, don't type",
      desc: "Transactions arrive categorized and matched. Your job shrinks to a quick confirm — not an evening of data entry.",
    },
    {
      title: "Hand over clean books",
      desc: "Come tax time, you (or your bookkeeper) start from reconciled, organized records instead of a pile of statements.",
    },
  ],
  faq: [
    {
      q: "Is accounting available today?",
      a: "Not yet — it's in development and rolling out in stages. Join the waitlist from this page and we'll open early access to you as it becomes available. Reporting and team roles are live now if you want to start with your numbers today.",
    },
    {
      q: "Do I still need a bookkeeper or accountant?",
      a: "FYNZ handles the repetitive work — recording, categorizing, reconciling — so the person doing your books works from clean data. Many owners will do more themselves; others will simply hand their pro a much easier job.",
    },
    {
      q: "What happens to my income data in the meantime?",
      a: "It's already being captured. Every payment through FYNZ is recorded and reportable today, so when accounting reaches you, the income side of your books is ready on day one.",
    },
  ],
  related: ["reporting", "tax", "invoicing"],
};

export default accounting;
