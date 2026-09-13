import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryLanding } from "@/components/industries/IndustryLanding";
import { getIndustry, getAllIndustrySlugs } from "@/lib/industries";

export function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
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
  const industry = getIndustry(slug);
  if (!industry) notFound();
  return <IndustryLanding data={industry} />;
}
