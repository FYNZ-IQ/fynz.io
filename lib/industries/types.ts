export interface IndustryCta {
  label: string;
  href: string;
}

export interface HeroVisual {
  /** Small mono label at the top of the floating card, e.g. "FYNZ Workspace". */
  label: string;
  /** Card title, e.g. "Loyalty Card". */
  title: string;
  /** One or two supporting lines rendered under the title. */
  lines: string[];
}

export interface PainCard {
  title: string;
  desc: string;
}

export interface Benefit {
  /** Attribution line, e.g. "powered by Voice AI" or "Email & SMS campaigns · GROW". */
  powered: string;
  title: string;
  desc: string;
  /** Short snippet shown inside the benefit's preview card (a sample message, stat, etc.). */
  preview: string;
}

export interface DemoStep {
  label: string;
  sublabel: string;
  desc: string;
  /** Marks the final, "success" step in the sequence. */
  success?: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface IndustryData {
  /** URL segment, e.g. "cafes" → /industries/cafes. */
  slug: string;
  /** Short display name used in listings and nav, e.g. "Cafés". */
  name: string;
  seoTitle: string;
  seoDescription: string;

  hero: {
    /** Breadcrumb-style category, e.g. "Food & Hospitality · Cafés". */
    category: string;
    headline: string;
    subhead: string;
    visual: HeroVisual;
  };

  pain: {
    eyebrow: string;
    title: string;
    cards: PainCard[];
  };

  benefits: Benefit[];

  demo: {
    /** Eyebrow, e.g. "Sequence Flow". */
    eyebrow: string;
    title: string;
    steps: DemoStep[];
  };

  beforeAfter: {
    title: string;
    before: string;
    after: string;
  };

  faq: FaqItem[];
}
