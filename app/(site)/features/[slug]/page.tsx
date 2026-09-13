import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeatureLanding } from "@/components/features/FeatureLanding";
import { featureMap, featureRouteSlugs } from "@/lib/features";

export function generateStaticParams() {
  return featureRouteSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const f = featureMap[slug];
  if (!f) return {};
  return { title: f.seoTitle, description: f.seoDescription };
}

export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = featureMap[slug];
  if (!f || f.pillar === "FYNZ AI") notFound();
  return <FeatureLanding data={f} all={featureMap} />;
}
