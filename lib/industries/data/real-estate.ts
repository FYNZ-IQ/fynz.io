import type { IndustryData } from "@/lib/industries/types";

const realEstate: IndustryData = {
  slug: "real-estate",
  name: "Real Estate",
  seoTitle: "Be First to Every Lead, Every Time | FYNZ for Real Estate",
  seoDescription:
    "FYNZ answers every portal lead in 5 seconds, nurtures long-term buyers for months, books showings automatically, and keeps past clients warm for life.",
  hero: {
    category: "Real Estate",
    headline: "Be first to every lead, every time.",
    subhead: "The agent who answers in 5 minutes wins the client. FYNZ answers in 5 seconds.",
    visual: {
      label: "Lead Conversation",
      title: "Portal Lead",
      lines: ["3BR under $800K near good schools — Realtor.ca", "✓ Showing booked — Saturday 10 AM"],
    },
  },
  pain: {
    eyebrow: "The real-estate grind",
    title: "Sound familiar?",
    cards: [
      {
        title: "Portal leads go cold in minutes",
        desc: "You were in a showing. By the time you checked your phone, they had already moved on.",
      },
      {
        title: "Six months of 'just looking' with no system",
        desc: "Long-term buyers drift away without a structure to keep them warm until they are ready.",
      },
      {
        title: "Scheduling showings is a text-tag marathon",
        desc: "Back-and-forth texts to pin down a time — for every single buyer, every single property.",
      },
      {
        title: "Past clients forget you exist",
        desc: "By the time they're selling again, they've already called the agent whose sign they saw last week.",
      },
    ],
  },
  benefits: [
    {
      powered: "Conversation AI + Voice AI · RESPOND",
      title: "Every lead gets an answer in seconds.",
      desc: "A new inquiry — from your site, a form, or a missed call — gets an instant, natural reply that qualifies the lead and books the showing.",
      preview: "Showing booked — Saturday 10 AM ✓",
    },
    {
      powered: "Workflow AI + Email & SMS campaigns · GROW",
      title: "'Just looking' leads stay warm for months.",
      desc: "Market updates, rate alerts, and check-ins nurture the 6-month buyer until they're the this-month buyer.",
      preview: "Month 6 — 'Ready to start looking seriously?'",
    },
    {
      powered: "Online booking · SCHEDULE",
      title: "Showings book themselves.",
      desc: "Buyers pick from your real availability — no text tag, no back-and-forth.",
      preview: "142 Maple Grove Cres · $749,000 — Sat 10:00 AM, confirmed in 30 seconds.",
    },
    {
      powered: "Reviews AI + Workflow AI · GROW",
      title: "Closings become referrals.",
      desc: "Post-closing review requests and anniversary touches keep you the family's agent for life.",
      preview: "Happy home-iversary! Delivered · 1 referral generated.",
    },
    {
      powered: "One inbox · GROW",
      title: "One inbox for every conversation.",
      desc: "Calls, texts, emails, and web chats — every thread with every client in one place.",
      preview: "Sarah M. · Portal lead — 'Yes, pre-approved. Saturday works!'",
    },
  ],
  demo: {
    eyebrow: "Speed to lead",
    title: "5 seconds from inquiry to engaged — every time",
    steps: [
      {
        label: "8:14:02 PM",
        sublabel: "Lead submits form on Realtor.ca",
        desc: "'Looking for 3BR under $800K near good schools.'",
      },
      {
        label: "8:14:07 PM",
        sublabel: "FYNZ sends instantly:",
        desc: "'Hi Sarah! I found a few great options near top-rated schools. Are you pre-approved, and when can you view?'",
      },
      {
        label: "8:14:52 PM",
        sublabel: "Sarah replies:",
        desc: "'Yes, pre-approved. Saturday works!'",
      },
      {
        label: "8:15:10 PM",
        sublabel: "Showing booked automatically.",
        desc: "Saturday 10 AM ✓ Confirmed",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A tale of two agents",
    before:
      "A hot portal lead sat 40 minutes — they signed with the agent who answered first. You saw the notification at 9 PM.",
    after:
      "The lead was answered mid-showing. You walked out to a booked appointment waiting in your calendar.",
  },
  faq: [
    {
      q: "Will leads know they're texting an AI first?",
      a: "It's your choice — many agents disclose 'my assistant' and take over live the moment it's warm. The handoff is seamless, and most leads won't notice the difference in speed.",
    },
    {
      q: "Can it qualify buyer vs. seller leads differently?",
      a: "Yes — you configure separate flows for buyers, sellers, investors, and rental inquiries. Each gets a different qualification path and follow-up sequence tailored to their intent.",
    },
    {
      q: "How does the long-term nurture work?",
      a: "You set the cadence and content topics (market updates, rate alerts, local events). FYNZ drafts and sends — you approve or fully automate. The lead stays warm without any manual effort from you.",
    },
    {
      q: "Does it integrate with my MLS or CRM?",
      a: "FYNZ connects with popular tools via API and webhooks. Speak to our team about your specific stack and we'll confirm compatibility during your demo.",
    },
  ],
};

export default realEstate;
