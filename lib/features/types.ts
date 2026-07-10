export interface FeatureCapability {
  title: string;
  desc: string;
}

export interface FeatureStep {
  title: string;
  desc: string;
}

export interface FeatureFaq {
  q: string;
  a: string;
}

export interface FeatureData {
  /** URL segment under /features (or /ai for AI agents). */
  slug: string;
  /** Display name, e.g. "CRM & pipelines". */
  name: string;
  /** Owning pillar. */
  pillar: "GROW" | "SCHEDULE" | "SHOP" | "OPS" | "FYNZ AI";
  /** Pillar landing route, e.g. "/grow". */
  pillarLink: string;
  seoTitle: string;
  seoDescription: string;
  hero: {
    headline: string;
    subhead: string;
  };
  capabilities: FeatureCapability[]; // 3-6
  steps: FeatureStep[]; // 3-4 "how it works"
  faq: FeatureFaq[]; // 2-4
  /** Slugs of related features shown at the bottom (interconnection). */
  related: string[];
}
