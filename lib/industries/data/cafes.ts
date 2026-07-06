import type { IndustryData } from "@/lib/industries/types";

const cafes: IndustryData = {
  slug: "cafes",
  name: "Cafés",
  seoTitle: "Turn One-Time Visitors Into Regulars | FYNZ for Cafés",
  seoDescription:
    "FYNZ remembers every customer, runs text-based loyalty, announces specials by 8 AM, and writes your Instagram posts — so you focus on the coffee.",
  hero: {
    category: "Food & Hospitality · Cafés",
    headline: "Turn one-time visitors into regulars.",
    subhead: "FYNZ remembers every customer — and gives them a reason to come back tomorrow.",
    visual: {
      label: "FYNZ Workspace",
      title: "Loyalty Card",
      lines: ["☕ ☕ ☕ ☕ 🔲", "4 of 5 visits complete"],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "Sound familiar?",
    cards: [
      {
        title: "One-and-done foot traffic",
        desc: "Customers have a great first visit, but then you never see them again.",
      },
      {
        title: "Lost physical punch cards",
        desc: "Paper punch cards get lost or forgotten, and loyalty progress is reset.",
      },
      {
        title: "Invisible daily specials",
        desc: "Your new pastry or drink specials are only seen by whoever walks past the board.",
      },
      {
        title: "Social media procrastination",
        desc: "Posting to Instagram is the job that never gets done when things get busy.",
      },
    ],
  },
  benefits: [
    {
      powered: "Lead capture forms · GROW",
      title: "Every customer joins your list.",
      desc: "A QR at the counter turns a latte into a lasting relationship.",
      preview: "“Scan to join our loyalty list” — one tap and they're a regular in your CRM.",
    },
    {
      powered: "Email & SMS campaigns · GROW + Workflow AI",
      title: "Loyalty that lives in their pocket.",
      desc: "'Your 5th coffee is on us' arrives by text — no punch card to lose.",
      preview: "Your 5th coffee is on us! Show this text to our barista ☕",
    },
    {
      powered: "Email & SMS campaigns · GROW",
      title: "Specials reach past the sidewalk.",
      desc: "New pastry? Seasonal drink? Your whole list knows by 8 AM.",
      preview: "🍁 Autumn lattes are back! Stop by this morning for 15% off.",
    },
    {
      powered: "Content AI",
      title: "The Instagram posts write themselves.",
      desc: "Weekly content drafted in your voice, ready to approve and post.",
      preview: "“Morning routines done right ☕...” — drafted and ready to post.",
    },
    {
      powered: "Reviews AI",
      title: "Reviews stack up like saucers.",
      desc: "Gentle review nudges keep you at the top of 'coffee near me.'",
      preview: "Google Rating: 4.9 ★ (140 reviews)",
    },
  ],
  demo: {
    eyebrow: "Sequence Flow",
    title: "Loyalty visit counter progress",
    steps: [
      {
        label: "Visit 1",
        sublabel: "Latte purchased",
        desc: "Customer scans counter QR code and registers.",
      },
      {
        label: "Visit 3",
        sublabel: "Punch card progress",
        desc: "3 cup stamps added digitally to their phone profile.",
      },
      {
        label: "Visit 5",
        sublabel: "Free coffee unlocked",
        desc: "SMS coupon sent automatically to claim at the till.",
      },
      {
        label: "Redeemed",
        sublabel: "Repeat client secured",
        desc: "Repeat visit rate +25% ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A day with FYNZ",
    before:
      "Before — regulars are whoever happens to remember you; no list, no marketing outreach.",
    after:
      "After — 800 local coffee lovers get the new seasonal drink alert at 8 AM; the morning line proves it.",
  },
  proof: {
    stats: [
      { num: "+25%", label: "Repeat-visit rate lift" },
      { num: "800+", label: "Local subscriber list size" },
      { num: "10 min", label: "Time to launch SMS specials" },
    ],
    testimonial:
      "“[Café owner testimonial placeholder — space for a quote about text-based loyalty success and morning customer line increases.]”",
  },
  faq: [
    {
      q: "Is texting customers annoying?",
      a: "You control frequency; customers opt in and can opt out easily with one word (STOP).",
    },
    {
      q: "Do I need a POS integration?",
      a: "No — loyalty is QR and text-based. No complex till setup is required.",
    },
    {
      q: "Can I target offers to lapsed customers?",
      a: "Yes — filter by 'last scan > 30 days' and send a 'we miss you' offer to bring them back.",
    },
  ],
};

export default cafes;
