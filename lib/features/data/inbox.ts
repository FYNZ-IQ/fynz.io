import type { FeatureData } from "@/lib/features/types";

const inbox: FeatureData = {
  slug: "inbox",
  name: "Unified inbox",
  pillar: "GROW",
  pillarLink: "/grow",
  seoTitle: "Unified Inbox — Every Message, One Screen | FYNZ",
  seoDescription:
    "SMS, email, WhatsApp, Instagram and Facebook DMs, and webchat land in one thread per customer. Reply from a single screen — or let AI answer while you work.",
  hero: {
    headline: "Every message, from every channel, on one screen.",
    subhead:
      "SMS, email, WhatsApp, Instagram and Facebook DMs, and webchat all land in a single thread per customer. Answer from one place — no more tab-hopping to find where the conversation started.",
  },
  capabilities: [
    {
      title: "One thread per customer",
      desc: "A customer who texts on Monday and DMs on Wednesday is still one conversation — with the full history right there when you reply.",
    },
    {
      title: "Every channel, natively",
      desc: "SMS, email, WhatsApp, Instagram, Facebook Messenger, and website chat flow into the same inbox. Nothing to forward, nothing to miss.",
    },
    {
      title: "AI answers when you can't",
      desc: "Mid-appointment? Conversation AI replies instantly with your prices and availability — and can book the job before you're free to look.",
    },
    {
      title: "Reply from anywhere",
      desc: "Desktop or the mobile app — answer a DM from the truck, the chair, or the counter without switching apps.",
    },
    {
      title: "Assigned and accounted for",
      desc: "Route conversations to the right person on your team, so every message has an owner and nothing sits unanswered.",
    },
    {
      title: "Connected to your CRM",
      desc: "Every conversation lives on the customer's record — bookings, payments, and notes included — so context is never a scroll-back away.",
    },
  ],
  steps: [
    { title: "Connect your channels", desc: "Link your business number, email, socials, and website chat in a few clicks." },
    { title: "Messages flow in", desc: "New texts, DMs, and emails appear in one inbox, matched to the right customer automatically." },
    { title: "Reply — or let AI", desc: "Answer yourself from one screen, or let Conversation AI handle the instant response." },
    { title: "Book from the thread", desc: "Send a booking link or confirm a time right in the conversation — no app-switching." },
  ],
  faq: [
    {
      q: "Do my customers see anything different?",
      a: "No. They text, DM, or email you the way they always have. The only change they notice is how fast you reply.",
    },
    {
      q: "Can my whole team use the same inbox?",
      a: "Yes. Everyone works from the shared inbox, conversations can be assigned to a teammate, and you can see who replied to what.",
    },
    {
      q: "What happens when I'm busy with a customer?",
      a: "Conversation AI can answer instantly — quoting your services, answering common questions, and even booking appointments — then hand the thread back to you.",
    },
  ],
  related: ["crm", "conversation", "marketing"],
};

export default inbox;
