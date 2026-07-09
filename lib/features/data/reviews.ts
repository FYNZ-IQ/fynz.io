import type { FeatureData } from "@/lib/features/types";

const reviews: FeatureData = {
  slug: "reviews",
  name: "Reviews AI",
  pillar: "FYNZ AI",
  pillarLink: "/ai",
  seoTitle: "Reviews AI — Ask at the Right Moment, Reply to Every One | FYNZ",
  seoDescription:
    "An AI reputation manager for small business: requests reviews right after a great visit, drafts on-brand responses to every one — five stars or one — and flags the ones that need you.",
  hero: {
    headline: "Ask at the right moment. Reply to every single one.",
    subhead:
      "Reviews AI is your reputation manager. It requests a review right after a great visit, then drafts an on-brand response to every review that lands — warm for the five-stars, calm and careful for the rest.",
  },
  capabilities: [
    {
      title: "Requests at the perfect moment",
      desc: "A couple hours after the appointment or delivery — when the customer is happiest — the review ask goes out by text. No spreadsheet, no remembering.",
    },
    {
      title: "Drafts a reply to every review",
      desc: "Five stars or one, every review gets a response in your voice — because an unanswered review reads like an owner who stopped caring.",
    },
    {
      title: "De-escalates the bad ones",
      desc: "Negative reviews get a calm, professional draft that takes the conversation offline — and you're alerted before anything goes out.",
    },
    {
      title: "Sounds like you, not a bot",
      desc: "It learns your tone and mentions the specifics — the service, the visit, the name — so replies never read like copy-paste.",
    },
    {
      title: "Works where reviews live",
      desc: "Google and Facebook reviews flow into one place, with your ratings and trends on a single dashboard.",
    },
    {
      title: "Knows who to ask — and who not to",
      desc: "It reads the customer record: happy regulars get the ask, an unresolved complaint doesn't. Timing rules you control.",
    },
  ],
  steps: [
    {
      title: "Connect your review profiles",
      desc: "Link Google and Facebook so reviews and ratings flow into FYNZ.",
    },
    {
      title: "Set your voice and rules",
      desc: "Pick the tone, when to ask, and whether replies post automatically or wait for your approval.",
    },
    {
      title: "Serve customers like always",
      desc: "After each visit, the review request goes out on its own — at the moment they're most likely to say yes.",
    },
    {
      title: "Approve and post replies",
      desc: "Drafted responses wait in your queue — tap to approve, or let the five-stars post themselves.",
    },
  ],
  faq: [
    {
      q: "Will it post replies without me seeing them?",
      a: "Only if you tell it to. Most owners auto-post the positive replies and keep approval on anything three stars or below. Negative reviews can always require your sign-off.",
    },
    {
      q: "Is automated review requesting allowed?",
      a: "Yes — asking customers for honest reviews is fine. FYNZ asks everyone you choose to ask and never offers incentives or filters out unhappy customers, which is what the platforms prohibit.",
    },
    {
      q: "What does it do with a bad review?",
      a: "It alerts you immediately and drafts a calm, non-defensive response that apologizes where it should and moves the conversation offline. You review it before it posts — no exceptions if you want it that way.",
    },
  ],
  related: ["reputation", "content", "conversation"],
};

export default reviews;
