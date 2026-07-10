import type { FeatureData } from "@/lib/features/types";

const reporting: FeatureData = {
  slug: "reporting",
  name: "Reporting",
  pillar: "OPS",
  pillarLink: "/ops",
  seoTitle: "Reporting & Dashboards — Your Numbers, Live | FYNZ",
  seoDescription:
    "Small-business reporting without the spreadsheet project: revenue, bookings, top services, and marketing performance on one live dashboard, updated the moment money moves.",
  hero: {
    headline: "How's the month going? Now you can just look.",
    subhead:
      "Revenue, bookings, top services, and marketing performance on one screen — updated the moment money moves. No exports, no spreadsheets, no waiting for month-end.",
  },
  capabilities: [
    {
      title: "One live dashboard",
      desc: "Every booking, sale, and payment lands here on its own. Open the app and the month is already added up for you.",
    },
    {
      title: "Revenue at a glance",
      desc: "Daily, weekly, or quarter-to-date — flip the range and the numbers and chart follow. Spot your best day of the week in two seconds.",
    },
    {
      title: "Top services & products",
      desc: "See what's actually earning: which services fill the calendar, which products move, and what deserves more of your attention.",
    },
    {
      title: "Marketing that proves itself",
      desc: "Campaign performance sits next to the revenue it drove — so you know which posts and promos paid for themselves.",
    },
    {
      title: "Fed by the whole platform",
      desc: "GROW, SCHEDULE, and SHOP all report into the same screen. No CSV exports, no copy-paste, no 'I'll reconcile it later.'",
    },
    {
      title: "Share it safely",
      desc: "Team roles decide who sees what — your manager gets the numbers, your staff see their own schedule, and nobody stumbles into payroll.",
    },
  ],
  steps: [
    {
      title: "Run your business as usual",
      desc: "Take bookings, send invoices, get paid — every transaction records itself.",
    },
    {
      title: "Open the dashboard",
      desc: "Revenue, bookings, and average ticket are already there, current to the last payment.",
    },
    {
      title: "Flip the range",
      desc: "7 days, 30 days, or quarter-to-date — compare periods without building a single formula.",
    },
    {
      title: "Act on what you see",
      desc: "Double down on your top service, nudge a slow week, or plan the next promo with real numbers behind it.",
    },
  ],
  faq: [
    {
      q: "Do I have to enter data or upload spreadsheets?",
      a: "No. Reporting reads directly from your FYNZ bookings, sales, and payments — zero manual entries. If it happened in FYNZ, it's already on the dashboard.",
    },
    {
      q: "Is reporting available now?",
      a: "Yes — reporting and dashboards are live today for every FYNZ account. (Accounting and tax tools are still rolling out; reporting doesn't wait on them.)",
    },
    {
      q: "Can my manager or bookkeeper see the reports without full access?",
      a: "Yes. Team roles and permissions let you give someone the numbers — per role, per location — without handing over the whole account.",
    },
  ],
  related: ["accounting", "tax", "payments"],
};

export default reporting;
