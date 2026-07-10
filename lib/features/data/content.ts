import type { FeatureData } from "@/lib/features/types";

const content: FeatureData = {
  slug: "content",
  name: "Content AI",
  pillar: "FYNZ AI",
  pillarLink: "/ai",
  seoTitle: "Content AI — Posts, Emails & Pages in Your Voice | FYNZ",
  seoDescription:
    "An AI marketing assistant for small business: writes your social posts, emails, texts, and landing pages in your voice, generates the images to match, and schedules everything for you.",
  hero: {
    headline: "A month of marketing, written in your voice, in an afternoon.",
    subhead:
      "Content AI is your marketing assistant. It writes the social posts, emails, texts, and landing pages you never get to — in your voice, with images to match — then schedules them so they actually go out.",
  },
  capabilities: [
    {
      title: "Writes in your voice",
      desc: "Feed it a few examples of how you talk to customers and it matches the tone — no more posts that sound like a corporation borrowed your account.",
    },
    {
      title: "Social posts, ready to ship",
      desc: "Captions for Instagram, Facebook, and Google Business — promos, tips, before-and-afters — drafted in batches you approve.",
    },
    {
      title: "Emails and texts that get opened",
      desc: "Monthly newsletters, win-back campaigns, seasonal promos — written, subject-lined, and pointed at the right segment of your CRM.",
    },
    {
      title: "Landing pages from a prompt",
      desc: "Describe the offer in plain language and get a page with headline, copy, and a form wired to your pipeline.",
    },
    {
      title: "Images to match",
      desc: "It generates on-brand visuals for posts and promos — no stock-photo hunting, no design app.",
    },
    {
      title: "Schedules it all",
      desc: "Approve a batch and it queues across your channels at the right times. Consistency without the Sunday-night scramble.",
    },
  ],
  steps: [
    {
      title: "Teach it your voice",
      desc: "Share your services, your style, and a few examples of how you actually talk.",
    },
    {
      title: "Tell it what's coming up",
      desc: "A promo, a holiday, a slow week to fill — or let it suggest ideas from your calendar.",
    },
    {
      title: "Review the drafts",
      desc: "Posts, emails, and images arrive in a batch. Edit what you want, approve the rest.",
    },
    {
      title: "It publishes on schedule",
      desc: "Everything goes out at the right time on the right channel — and you see what performed.",
    },
  ],
  faq: [
    {
      q: "Will it actually sound like me?",
      a: "That's the whole point. It learns from your existing posts and messages, and every draft is editable — most owners tweak the first few batches, then mostly just approve.",
    },
    {
      q: "Does anything publish without my approval?",
      a: "Not unless you turn that on. By default everything sits in a queue as a draft until you approve it — and you can keep it that way forever.",
    },
    {
      q: "I have zero marketing experience. Where do I start?",
      a: "Tell it one true thing — a service you want more of, a slow Tuesday, a season coming up — and it drafts the campaign around it. You bring the business knowledge; it handles the writing.",
    },
  ],
  related: ["marketing", "reviews", "funnels"],
};

export default content;
