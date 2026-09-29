import type { Metadata } from "next";
import { Hero, TradeStrip, ProductGrid, SeeIt, Pricing, Industries, Comparison, Learn, Faq, FinalCta } from "@/components/home";
import { FAQ, SEO } from "@/lib/home-content";

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    type: "website",
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FYNZ IQ",
  legalName: "Fynz IQ Inc.",
  url: "https://fynz.io",
  logo: "https://fynz.io/logo-fynz.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  description: SEO.description,
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Hero />
      <TradeStrip />
      <ProductGrid />
      <SeeIt />
      <Pricing />
      <Industries />
      <Comparison />
      <Learn />
      <Faq />
      <FinalCta />
    </>
  );
}
