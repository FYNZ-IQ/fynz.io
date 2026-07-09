import type { Metadata } from "next";
import { FeatureLanding } from "@/components/features/FeatureLanding";
import { featureMap } from "@/lib/features";

const data = featureMap["reviews"];

export const metadata: Metadata = {
  title: data.seoTitle,
  description: data.seoDescription,
};

export default function Page() {
  return <FeatureLanding data={data} all={featureMap} />;
}
