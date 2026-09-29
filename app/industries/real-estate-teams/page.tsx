import type { Metadata } from "next";
import { IndustryLanding } from "@/components/industries/IndustryLanding";
import realEstate from "@/lib/industries/data/real-estate";

export const metadata: Metadata = {
  title: realEstate.seoTitle,
  description: realEstate.seoDescription,
};

export default function RealEstateTeamsPage() {
  return <IndustryLanding data={realEstate} />;
}
