import type { FeatureData } from "@/lib/features/types";

const tax: FeatureData = {
  slug: "tax",
  name: "Tax tools",
  pillar: "OPS",
  pillarLink: "/ops",
  seoTitle: "Tax Tools — Know What You Owe Before April Does | FYNZ",
  seoDescription:
    "A running tax set-aside estimate built from real income as it happens, for US and Canadian small businesses. No more surprise bills in April. In development — join the waitlist.",
  hero: {
    headline: "Know what you owe before tax season does.",
    subhead:
      "A running estimate of your tax set-aside, built from real income as every payment lands — for US and Canadian small businesses. So April (or your quarterly installments) stops being a surprise party. In development now.",
  },
  capabilities: [
    {
      title: "A running set-aside estimate",
      desc: "As payments come in, FYNZ estimates what portion belongs to the tax bill — a live number, not a year-end guess.",
    },
    {
      title: "Built from real income",
      desc: "The estimate reads from money you've actually earned in FYNZ, updated with every payment — not from projections you typed in last January.",
    },
    {
      title: "US and Canada, covered",
      desc: "Designed for North American small businesses on either side of the border, including quarterly estimated payments and installments.",
    },
    {
      title: "Progress you can see",
      desc: "One bar: what you've set aside so far versus where you should be. On track feels calm; behind gets caught early.",
    },
    {
      title: "No spreadsheet math",
      desc: "The 'multiply revenue by a percentage and hope' ritual retires. The estimate lives on your OPS dashboard next to the numbers that feed it.",
    },
    {
      title: "Works with your books",
      desc: "Paired with FYNZ accounting, cleaner categorized records sharpen the estimate — and tax time starts from organized books instead of a scramble.",
    },
  ],
  steps: [
    {
      title: "Join the waitlist",
      desc: "Tax tools are in development and rolling out gradually — sign up and we'll bring you in as early access opens.",
    },
    {
      title: "Tell us the basics",
      desc: "Country, business type, and filing rhythm — enough to shape an estimate that fits how you're taxed.",
    },
    {
      title: "Watch the estimate track your income",
      desc: "Every payment updates your suggested set-aside automatically. No end-of-quarter arithmetic.",
    },
    {
      title: "Set the money aside",
      desc: "When the bill or installment comes due, the money is already parked — and the amount isn't a surprise.",
    },
  ],
  faq: [
    {
      q: "Are tax tools available today?",
      a: "Not yet — they're in development and rolling out in stages, and we'd rather tell you that plainly than pretend. Join the waitlist and we'll open early access to you as it's ready. Your income is already being tracked in FYNZ, so the estimate has real data from day one.",
    },
    {
      q: "Does this file my taxes for me?",
      a: "No — it keeps you ready. Tax tools estimate what to set aside and keep your numbers organized so filing (by you or your accountant) starts from real, current figures instead of a shoebox.",
    },
    {
      q: "Which countries does it support?",
      a: "US and Canadian small businesses, including quarterly estimated payments in the US and installments in Canada. It's an estimate to keep you prepared — your accountant still confirms the final numbers.",
    },
  ],
  related: ["accounting", "reporting", "payments"],
};

export default tax;
