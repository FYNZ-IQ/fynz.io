import type { FeatureData } from "@/lib/features/types";

const reputation: FeatureData = {
  slug: "reputation",
  name: "Reviews & reputation",
  pillar: "GROW",
  pillarLink: "/grow",
  seoTitle: "Reviews & Reputation — Five-Star Proof on Autopilot | FYNZ",
  seoDescription:
    "Perfectly-timed review requests after every visit, plus AI-drafted replies to every rating. Your Google profile compounds while you sleep.",
  hero: {
    headline: "Turn great visits into five-star proof.",
    subhead:
      "A couple of hours after every appointment, happy customers get a review request by text. Reviews AI drafts your reply to every rating. Your stars stack up — and new strangers see them first.",
  },
  capabilities: [
    {
      title: "Requests that time themselves",
      desc: "The ask goes out shortly after the visit, while the experience is fresh — no sticky note reminding you to send it.",
    },
    {
      title: "One tap to leave a review",
      desc: "Customers get a direct link to your Google profile — no searching, no login maze, no friction between happy and posted.",
    },
    {
      title: "AI-drafted replies to every rating",
      desc: "Reviews AI writes a thoughtful response in your voice; you approve it in one tap. Five stars get thanked, tough ones get handled.",
    },
    {
      title: "All your reviews in one place",
      desc: "Watch new ratings roll in from a single dashboard instead of checking each platform — and never leave one unanswered.",
    },
    {
      title: "Catch problems before they post",
      desc: "An unhappy customer can reach you privately first, so you get the chance to make it right instead of reading about it publicly.",
    },
    {
      title: "Stars that sell for you",
      desc: "Showcase your best reviews on your pages and funnels, so proof does the persuading before you ever pick up the phone.",
    },
  ],
  steps: [
    { title: "Connect your profiles", desc: "Link Google and your other review platforms once." },
    { title: "Set the timing", desc: "Choose when the request goes out after each appointment — the default works great." },
    { title: "Requests send themselves", desc: "Every completed visit triggers a friendly text with a direct review link." },
    { title: "Approve AI replies", desc: "Reviews AI drafts a response to each new rating; you approve in one tap." },
  ],
  faq: [
    {
      q: "Won't automated requests annoy my customers?",
      a: "It's one friendly text, timed right after a good visit, and anyone can opt out. Most customers are glad to help — they just needed the link.",
    },
    {
      q: "What about negative reviews?",
      a: "You can route unhappy feedback to a private conversation first, so you get the chance to fix it. If a negative review does post, Reviews AI drafts a calm, professional reply for your approval.",
    },
    {
      q: "Does this follow Google's rules?",
      a: "Yes. Requests go to your real customers after real visits with a direct link to leave honest feedback — exactly the kind of asking Google expects businesses to do.",
    },
  ],
  related: ["reviews", "marketing", "customers"],
};

export default reputation;
