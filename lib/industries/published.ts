/**
 * Single source of truth for which industry landing pages are live, and for the
 * "Who's it for" navigation that exposes them.
 *
 * Only the slugs listed here are reachable: the [slug] route generates nothing
 * else, and the index, search and nav all filter against `isIndustryPublished`.
 * Everything else in `lib/industries` still exists and still builds — it is
 * hidden, not deleted — so re-launching a vertical is a one-line change here.
 *
 * Deliberately free of any content imports so client components can read it
 * without pulling every industry's page data into the browser bundle.
 *
 * NOTE: Law firms (`legal`) is withheld on purpose and must not be added back
 * without sign-off — see the blocked status in the launch brief.
 */

export type IndustryNavEntry = {
  label: string;
  /** Slug under /industries/. */
  slug: string;
};

export type IndustryNavColumn = {
  heading: string;
  entries: IndustryNavEntry[];
};

export const INDUSTRY_NAV: IndustryNavColumn[] = [
  {
    heading: "Home services & trades",
    entries: [
      { label: "Cleaning", slug: "cleaning" },
      { label: "Plumbing", slug: "plumbing" },
      { label: "Contractors", slug: "contractors" },
      { label: "Auto shops", slug: "automotive" },
      { label: "Home services", slug: "home-services" },
    ],
  },
  {
    heading: "Professional & property",
    entries: [
      { label: "Accounting firms", slug: "accounting" },
      { label: "Real estate teams", slug: "real-estate" },
    ],
  },
];

/** Slugs of every published industry page, in nav order. */
export const PUBLISHED_INDUSTRY_SLUGS: string[] = INDUSTRY_NAV.flatMap(
  (column) => column.entries.map((entry) => entry.slug)
);

const publishedSlugs = new Set(PUBLISHED_INDUSTRY_SLUGS);

export function isIndustryPublished(slug: string): boolean {
  return publishedSlugs.has(slug);
}

export function industryHref(slug: string): string {
  return `/industries/${slug}`;
}
