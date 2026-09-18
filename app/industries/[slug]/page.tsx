import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryLanding } from "@/components/industries/IndustryLanding";
import { getIndustry } from "@/lib/industries";
import { PUBLISHED_INDUSTRY_SLUGS, isIndustryPublished } from "@/lib/industries/published";

export function generateStaticParams() {
  return PUBLISHED_INDUSTRY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = isIndustryPublished(slug) ? getIndustry(slug) : undefined;
  if (!industry) return {};
  return {
    title: industry.seoTitle,
    description: industry.seoDescription,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = isIndustryPublished(slug) ? getIndustry(slug) : undefined;
  if (!industry) notFound();
  return <IndustryLanding data={industry} />;
}
