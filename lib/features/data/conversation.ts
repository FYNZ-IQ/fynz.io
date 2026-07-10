import type { FeatureData } from "@/lib/features/types";

const conversation: FeatureData = {
  slug: "conversation",
  name: "Conversation AI",
  pillar: "FYNZ AI",
  pillarLink: "/ai",
  seoTitle: "Conversation AI — Every Message Answered in Seconds | FYNZ",
  seoDescription:
    "An AI front desk for small business: replies to every SMS, DM, webchat, and email instantly — answers questions, qualifies leads, books appointments, and hands off to you when it should.",
  hero: {
    headline: "Every message answered in seconds — even at 11pm on a Sunday.",
    subhead:
      "Conversation AI is your front desk. It replies to every SMS, DM, webchat, and email instantly — answers from your knowledge base, qualifies the lead, and drops your booking link.",
  },
  capabilities: [
    {
      title: "Instant replies on every channel",
      desc: "SMS, Instagram, Facebook, WhatsApp, webchat, email, Google Business — one brain answers them all, so no message waits until morning.",
    },
    {
      title: "Trained on your business",
      desc: "It answers from your services, prices, hours, and policies — the questions you repeat all day, handled without you.",
    },
    {
      title: "Qualifies leads while they're hot",
      desc: "Asks the right follow-up questions, figures out what they need, and tags the lead in your CRM — before they message your competitor.",
    },
    {
      title: "Books straight into your calendar",
      desc: "Offers real open slots, collects the deposit, and confirms — a midnight inquiry becomes a Saturday 9 AM booking by itself.",
    },
    {
      title: "Speaks the customer's language",
      desc: "Replies in the language the customer writes in, in the tone you set — friendly, formal, or somewhere between.",
    },
    {
      title: "Hands off when it should",
      desc: "Complex, sensitive, or heated conversations route to you — by topic, sentiment, or a customer simply asking for a human.",
    },
  ],
  steps: [
    {
      title: "Give it your knowledge base",
      desc: "Services, prices, hours, policies, FAQs — fill it in once and it answers like you would.",
    },
    {
      title: "Set the persona and rules",
      desc: "Name, tone, objectives, and exactly when to hand a conversation to a human.",
    },
    {
      title: "Connect your channels",
      desc: "Turn it on for SMS, DMs, webchat, and email — every inquiry now gets an answer in seconds.",
    },
    {
      title: "Watch bookings appear",
      desc: "It qualifies, answers, and books into your real availability. You read the transcripts over coffee.",
    },
  ],
  faq: [
    {
      q: "Will customers know they're talking to an AI?",
      a: "That's up to you — many owners give it a name and introduce it as their assistant. Either way it never pretends to be you, and anyone who asks for a human gets one.",
    },
    {
      q: "What happens when it doesn't know the answer?",
      a: "It says so and routes the conversation to you instead of guessing. You can also run it in approve-first mode: it drafts every reply, you tap send.",
    },
    {
      q: "Does it really book appointments, or just chat?",
      a: "It books for real — it reads your live calendar, offers open slots, collects a deposit if you require one, and sends the confirmation and reminder.",
    },
  ],
  related: ["inbox", "crm", "reviews"],
};

export default conversation;
