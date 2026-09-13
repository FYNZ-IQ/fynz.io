/**
 * Content model for the FYNZ Social landing page (`/social`).
 *
 * The general page is the master. Industry versions are cloned by creating a
 * new route (e.g. `app/(social)/social/restaurants/page.tsx`) that renders
 * `<SocialLanding content={...} />` with a content object spread from
 * `DEFAULT_SOCIAL_CONTENT` and only the swappable fields overridden. Layout,
 * pricing, form rules and legal copy never need to be touched.
 *
 * Hard rule carried over from the brief: invent nothing. Any value without a
 * real source is typed as nullable here and the section or line is omitted
 * when it is `null`, rather than rendered with a made-up number.
 */

export type HowItWorksStep = {
  title: string;
  body: string;
};

export type ProblemBlock = {
  title: string;
  body: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type IndustryOption = {
  value: string;
  label: string;
};

export type SocialPageContent = {
  /** Path of this page, used for canonical URL and JSON-LD. */
  path: string;

  /** <title>, meta description and share copy. */
  meta: {
    title: string;
    description: string;
    /** Path to the share image under /public. */
    shareImage: string;
    shareImageAlt: string;
  };

  hero: {
    /** The page's only H1. */
    headline: string;
    subhead: string;
    cta: string;
    /** Small line under the button. Sourced from /refund. */
    note: string;
  };

  problem: {
    heading: string;
    blocks: [ProblemBlock, ProblemBlock, ProblemBlock];
    /** Small attribution under the three blocks. */
    attribution: string;
  };

  howItWorks: {
    heading: string;
    steps: [HowItWorksStep, HowItWorksStep, HowItWorksStep];
  };

  whatYouGet: {
    heading: string;
    items: string[];
  };

  whoItsFor: {
    heading: string;
    row: string[];
    closer: string;
  };

  pricing: {
    heading: string;
    /** Always shown. */
    revisionsLine: string;
    /**
     * Rendered as "Pay for a year up front and get {annualDiscount} off."
     * `null` omits the sentence entirely (no confirmed discount yet).
     */
    annualDiscount: string | null;
  };

  offer: {
    heading: string;
    body: string;
    /** Default selection for the industry dropdown. Empty string = none. */
    industryDefault: string;
    /** How quickly a human replies. Sourced from /contact. */
    replyWindow: string;
  };

  faq: {
    heading: string;
    /** The industry-specific answer lives here so clones swap one string. */
    industryAnswer: string;
    /**
     * Time from account connection to first post. `null` omits the
     * "How long until the first post?" question from the page and the
     * FAQPage JSON-LD, because no turnaround has been confirmed yet.
     */
    turnaround: string | null;
    /** Sourced from /refund. */
    cancellation: string;
  };
};

/** Plans are the same on every version of the page. */
export type Plan = {
  id: "essentials" | "growth" | "full";
  name: string;
  /** USD per month. */
  price: number;
  common: boolean;
};

export const PLANS: Plan[] = [
  { id: "essentials", name: "Essentials", price: 497, common: false },
  { id: "growth", name: "Growth", price: 797, common: true },
  { id: "full", name: "Full", price: 1297, common: false },
];

export type PricingRow = {
  label: string;
  cells: [string, string, string];
};

/** Rows in the pricing table, in order. "—" renders as "not included". */
export const PRICING_ROWS: PricingRow[] = [
  { label: "Networks", cells: ["Facebook, Instagram", "+ Google Business Profile", "+ LinkedIn or TikTok"] },
  { label: "Posts per month", cells: ["12", "20", "30"] },
  { label: "Photo text line", cells: ["Included", "Included", "Included"] },
  { label: "Review graphics", cells: ["—", "Included", "Included"] },
  { label: "Short video edits", cells: ["—", "2 per month", "4 per month"] },
  { label: "Comments and DMs", cells: ["—", "Weekdays", "Weekdays"] },
  { label: "Reporting", cells: ["Monthly summary", "Monthly + call", "Monthly + call"] },
];

export const PRICING_CTA = "Start with a free first month";

export const INDUSTRY_OPTIONS: IndustryOption[] = [
  { value: "home-services", label: "Home services & trades" },
  { value: "restaurant", label: "Restaurant & food" },
  { value: "beauty", label: "Beauty & salon" },
  { value: "fitness", label: "Fitness & studio" },
  { value: "health", label: "Health & wellness" },
  { value: "real-estate", label: "Real estate" },
  { value: "retail", label: "Retail" },
  { value: "professional", label: "Professional services" },
  { value: "auto", label: "Auto" },
  { value: "other", label: "Other" },
];

/** Legal details for the footer. `null` fields are omitted, not invented. */
export const LEGAL = {
  businessName: "FYNZ, Inc.",
  /** No confirmed mailing address yet. */
  address: null as string | null,
  /** No confirmed public phone number yet. */
  phone: null as string | null,
  email: "hello@fynz.io",
  serviceArea: "US & Canada",
  siteUrl: "https://fynz.io",
};

export const DEFAULT_SOCIAL_CONTENT: SocialPageContent = {
  path: "/social",

  meta: {
    title: "Done-For-You Social Media for Small Business | FYNZ Social",
    description:
      "We turn photos your team already takes into finished social posts. Done-for-you social media for small businesses. From $497/month, no contract.",
    shareImage: "/social/og.png",
    shareImageAlt:
      "FYNZ Social. You're already taking the photos. We turn them into posts.",
  },

  hero: {
    headline: "You're already taking the photos. We turn them into posts.",
    subhead:
      "Done-for-you social media for small businesses. Your team texts photos to one number. We write, design and schedule everything. You approve it from your phone.",
    cta: "See your first month free",
    note: "No contract. Cancel anytime; it takes effect at the end of your billing cycle.",
  },

  problem: {
    heading: "Why it keeps not happening",
    blocks: [
      {
        title: "Posting falls to the bottom of the list.",
        body: "You meant to post last month. Then the week happened.",
      },
      {
        title: "Hiring is expensive.",
        body: "A social media manager runs $50,000–$70,000 a year before payroll taxes. A freelancer runs $750–$1,500 a month and still needs briefing every week.",
      },
      {
        title: "The tools don't solve it.",
        body: "Scheduling software is cheap, but somebody still has to make the posts. That somebody is you.",
      },
    ],
    attribution: "Salary and freelancer ranges from 2026 industry pricing surveys.",
  },

  howItWorks: {
    heading: "How it works",
    steps: [
      {
        title: "You get a Fynz number.",
        body: "Your team texts photos to it during the day: the job you finished, the dish you plated, the room you set up, the product that just landed. No app, no login, no training.",
      },
      {
        title: "We build the month.",
        body: "We write the captions, design the graphics, and fill the gaps with content that doesn't need new photos: your Google reviews, seasonal posts, answers to the questions customers keep asking.",
      },
      {
        title: "You approve, we post.",
        body: "The calendar comes to you before anything goes live. Change what you want. We handle the rest.",
      },
    ],
  },

  whatYouGet: {
    heading: "What you get",
    items: [
      "Posts written and designed for your business, not templates.",
      "Facebook, Instagram, Google Business Profile, and LinkedIn or TikTok depending on plan.",
      "Your Google reviews turned into graphics.",
      "Short video edits from clips your team sends.",
      "A monthly report on what people actually saw.",
      "One person who knows your account.",
    ],
  },

  whoItsFor: {
    heading: "Who it's for",
    row: [
      "Trades and home services",
      "Restaurants and cafés",
      "Salons, barbers and spas",
      "Gyms and studios",
      "Clinics and wellness",
      "Real estate",
      "Local retail",
      "Professional services",
    ],
    closer: "If your work looks like something, this works.",
  },

  pricing: {
    heading: "Pricing. No quotes, no sales call.",
    revisionsLine: "Two revisions included on every post.",
    annualDiscount: null,
  },

  offer: {
    heading: "See your first month before you pay for it.",
    body: "Send us your business name and website. We'll build four real posts for your business using photos you already have online, and send them to you. If you don't like them, that's the end of it.",
    industryDefault: "",
    replyWindow: "one business day",
  },

  faq: {
    heading: "Questions people ask",
    industryAnswer:
      "If your business has customers and something worth showing them, yes. We've built the same system for service businesses, food, retail and professional offices.",
    turnaround: null,
    cancellation:
      "Yes. Plans are month-to-month with no contract. Cancel anytime and it takes effect at the end of your current billing cycle. You keep access until then.",
  },
};

/** Builds the FAQ list from the content, in page order. */
export function buildFaq(content: SocialPageContent): FaqItem[] {
  const items: FaqItem[] = [
    {
      question: "What if my team doesn't send photos?",
      answer:
        "The calendar still ships. Roughly half of what we post doesn't need a new photo: reviews, seasonal content, answers to common customer questions. Your photos make it better, not possible.",
    },
    { question: "Does this work for my industry?", answer: content.faq.industryAnswer },
    {
      question: "Who approves the posts?",
      answer: "You do, before anything goes live. We send the month's calendar and you change what you want.",
    },
    {
      question: "Do you post from my accounts?",
      answer:
        "Yes. We connect to your existing pages. You keep ownership and access the whole time, including if you leave.",
    },
  ];
  if (content.faq.turnaround) {
    items.push({ question: "How long until the first post?", answer: content.faq.turnaround });
  }
  items.push({ question: "Can I cancel?", answer: content.faq.cancellation });
  items.push({ question: "Do you run ads?", answer: "Not on these plans. This is organic posting only." });
  return items;
}
