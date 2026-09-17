import type { Metadata } from "next";
import { RealEstateLanding } from "./RealEstateLanding";
import { REAL_ESTATE_FAQS, REAL_ESTATE_PLANS } from "./content";

const PAGE_URL = "https://fynz.io/industries/real-estate";

export const metadata: Metadata = {
  title: "Real Estate Marketing and Client System for Agents in Canada | Fynz",
  description:
    "Fynz keeps your past clients warm with anniversary and check-in messages, texts back missed calls mid-showing and answers portal leads in seconds. Works with your brokerage's tools. Free plan available.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Real estate marketing and client system for agents in Canada | Fynz",
    description:
      "Your past clients would hire you again. They just forgot your name. Fynz keeps you in front of them automatically.",
    url: PAGE_URL,
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: REAL_ESTATE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Fynz for Real Estate Agents",
  description:
    "Real estate marketing and client system for agents in Canada: automatic anniversary, birthday and check-in messages for past clients, missed-call text-back, instant portal replies, open-house sign-in, review requests and listing content.",
  brand: { "@type": "Brand", name: "Fynz" },
  url: PAGE_URL,
  areaServed: { "@type": "Country", name: "Canada" },
  offers: REAL_ESTATE_PLANS.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    price: String(plan.price),
    priceCurrency: "USD",
    url: `${PAGE_URL}#pricing`,
  })),
};

export default function RealEstatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <RealEstateLanding />
    </>
  );
}
