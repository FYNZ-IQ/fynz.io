import type { Metadata } from "next";
import { IndustryLanding } from "@/components/industries/IndustryLanding";
import accounting from "@/lib/industries/data/accounting";

export const metadata: Metadata = {
  title: accounting.seoTitle,
  description: accounting.seoDescription,
};

export default function AccountingFirmsPage() {
  return <IndustryLanding data={accounting} />;
}
