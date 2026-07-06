import type { IndustryData } from "./types";
import cafes from "./data/cafes";

/**
 * All template-driven industry landing pages, in display order.
 * The bespoke /industries/barbershops route is intentionally not listed here —
 * it has its own hand-built page and takes precedence over the [slug] route.
 */
export const industries: IndustryData[] = [cafes];

export const industryMap: Record<string, IndustryData> = Object.fromEntries(
  industries.map((industry) => [industry.slug, industry])
);

export function getIndustry(slug: string): IndustryData | undefined {
  return industryMap[slug];
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((industry) => industry.slug);
}

export type { IndustryData } from "./types";
