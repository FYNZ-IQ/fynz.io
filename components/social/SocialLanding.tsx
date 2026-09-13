"use client";

import { useRef } from "react";
import Link from "next/link";
import { Faq } from "./Faq";
import { Header } from "./Header";
import { HeroDemo } from "./HeroDemo";
import { HowItWorks } from "./HowItWorks";
import { Marquee } from "./Marquee";
import { SocialLeadForm } from "./SocialLeadForm";
import { CountUp } from "./motion/CountUp";
import { HeroIntro } from "./motion/HeroIntro";
import { MotionProvider } from "./motion/MotionProvider";
import {
  LEGAL,
  PLANS,
  PRICING_CTA,
  PRICING_ROWS,
  buildFaq,
  type SocialPageContent,
} from "@/lib/social/content";

const FORM_ID = "first-month";

const h2 = "text-[2.1rem] md:text-[3.2rem] leading-[1.05]";

function formatPrice(price: number) {
  return `$${price.toLocaleString("en-US")}`;
}

/** Renders the whole FYNZ Social landing page from a content object. */
export function SocialLanding({ content }: { content: SocialPageContent }) {
  const heroRef = useRef<HTMLElement>(null);
  const faq = buildFaq(content);
  const pageUrl = `${LEGAL.siteUrl}${content.path}`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "FYNZ Social",
    serviceType: "Done-for-you social media management",
    description: content.meta.description,
    url: pageUrl,
    provider: { "@type": "Organization", name: LEGAL.businessName, url: LEGAL.siteUrl, email: LEGAL.email },
    areaServed: ["US", "CA"],
    offers: PLANS.map((plan) => ({
      "@type": "Offer",
      name: `FYNZ Social ${plan.name}`,
      price: plan.price.toFixed(2),
      priceCurrency: "USD",
      url: `${pageUrl}#pricing`,
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: plan.price.toFixed(2),
        priceCurrency: "USD",
        billingDuration: 1,
        unitCode: "MON",
      },
    })),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={faqLd} />
      <MotionProvider />

      <Header formId={FORM_ID} cta="First month free" />

      <main className="flex-1">
        {/* 1. Hero */}
        <section ref={heroRef} className="bg-navy-deep text-warm-white pt-[104px] md:pt-[140px] pb-16 md:pb-28 overflow-hidden">
          <HeroIntro scope={heroRef} />
          <div className="social-wrap grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-14 lg:gap-12 items-center">
            <div>
              <h1 data-hero-in className="text-[2.6rem] sm:text-[3.4rem] md:text-[4rem] leading-[1.0] max-w-[620px]">
                {content.hero.headline}
              </h1>
              <p data-hero-in data-hero-order="1" className="mt-7 text-[18px] md:text-[21px] leading-relaxed text-warm-white/80 max-w-[540px]">
                {content.hero.subhead}
              </p>
              <div data-hero-in data-hero-order="2" className="mt-9">
                <a href={`#${FORM_ID}`} className="btn-copper">
                  {content.hero.cta}
                  <span className="arrow" aria-hidden="true">→</span>
                </a>
                <p className="mt-4 text-[15px] text-warm-white/60">{content.hero.note}</p>
              </div>
            </div>
            <div data-hero-in data-hero-order="3">
              <HeroDemo />
            </div>
          </div>
        </section>

        {/* 2. The problem */}
        <section className="bg-warm-white text-navy-deep">
          <div className="social-wrap py-20 md:py-32">
            <h2 data-reveal className={`${h2} max-w-[720px]`}>{content.problem.heading}</h2>
            <div data-reveal-stagger className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
              {content.problem.blocks.map((block, i) => (
                <div key={block.title} className="rounded-2xl bg-white p-7 md:p-8 flex flex-col min-h-[300px] shadow-[0_1px_0_rgba(13,33,84,0.06)]">
                  {i === 1 ? (
                    <div className="mb-6 font-display leading-none">
                      <p className="text-[2.6rem] md:text-[3rem] tracking-tight">
                        <CountUp value={50} prefix="$" suffix="k" />
                        <span className="text-navy-deep/40">–</span>
                        <CountUp value={70} suffix="k" />
                      </p>
                      <p className="mt-1 text-[14px] uppercase tracking-[0.16em] text-copper">a year, one hire</p>
                    </div>
                  ) : i === 0 ? (
                    <div className="mb-6 font-display leading-none">
                      <p className="text-[2.6rem] md:text-[3rem] tracking-tight text-navy-deep/25">Last post</p>
                      <p className="mt-1 text-[14px] uppercase tracking-[0.16em] text-copper">you can&rsquo;t remember when</p>
                    </div>
                  ) : (
                    <div className="mb-6 font-display leading-none">
                      <p className="text-[2.6rem] md:text-[3rem] tracking-tight">Still you</p>
                      <p className="mt-1 text-[14px] uppercase tracking-[0.16em] text-copper">making the posts</p>
                    </div>
                  )}
                  <h3 className="text-[1.35rem] leading-snug mt-auto">{block.title}</h3>
                  <p className="mt-3 text-[17px] leading-relaxed text-navy-deep/80">{block.body}</p>
                </div>
              ))}
            </div>
            <p data-reveal className="mt-6 text-[14px] text-navy-deep/55">{content.problem.attribution}</p>
          </div>
        </section>

        {/* 3. How it works */}
        <section className="bg-navy-deep text-warm-white">
          <HowItWorks heading={content.howItWorks.heading} steps={content.howItWorks.steps} />
        </section>

        {/* 4. What you get */}
        <section className="bg-navy-mid text-warm-white">
          <div className="social-wrap py-20 md:py-32 grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 md:gap-20">
            <div data-reveal>
              <h2 className={h2}>{content.whatYouGet.heading}</h2>
              <p className="mt-6 text-[18px] text-warm-white/70 max-w-[380px]">Every plan. Written for your business, not pulled from a template library.</p>
            </div>
            <ul data-draw className="divide-y divide-warm-white/12 border-y border-warm-white/12">
              {content.whatYouGet.items.map((item) => (
                <li key={item} className="py-5 text-[18px] md:text-[21px] leading-snug flex gap-5 items-start">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-copper text-navy-deep">
                    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
                      <path className="check-path" d="M5 12l5 5L19 7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. Who it's for */}
        <section className="bg-navy-deep text-warm-white">
          <div className="social-wrap pt-20 md:pt-28 pb-8">
            <h2 data-reveal className="text-[14px] uppercase tracking-[0.2em] text-copper-light font-sans font-normal">
              {content.whoItsFor.heading}
            </h2>
          </div>
          <Marquee items={content.whoItsFor.row} label={content.whoItsFor.heading} />
          <div className="social-wrap pt-10 pb-20 md:pb-28">
            <p data-reveal className="font-display text-[1.6rem] md:text-[2.4rem] leading-tight max-w-[760px]">{content.whoItsFor.closer}</p>
          </div>
        </section>

        {/* 6. Pricing */}
        <section id="pricing" className="bg-warm-white text-navy-deep scroll-mt-16">
          <div className="social-wrap py-20 md:py-32">
            <h2 data-reveal className={`${h2} max-w-[720px]`}>{content.pricing.heading}</h2>
            <div data-reveal-stagger className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:items-end">
              {PLANS.map((plan, i) => (
                <div
                  key={plan.id}
                  className={`group relative rounded-3xl p-7 md:p-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 ${
                    plan.common
                      ? "bg-navy-deep text-warm-white shadow-[0_40px_80px_-40px_rgba(13,33,84,0.6)] md:pb-10"
                      : "bg-white text-navy-deep shadow-[0_1px_0_rgba(13,33,84,0.06)] hover:shadow-[0_30px_60px_-40px_rgba(13,33,84,0.35)]"
                  }`}
                >
                  {plan.common && (
                    <p className="absolute -top-3 left-7 rounded-full bg-copper px-3 py-1 text-[12px] uppercase tracking-[0.18em] text-navy-deep font-display">
                      Most common
                    </p>
                  )}
                  <h3 className="text-[1.3rem]">{plan.name}</h3>
                  <p className="mt-2 font-display leading-none flex items-baseline gap-1">
                    <span className="text-[3rem] tracking-tight">{formatPrice(plan.price)}</span>
                    <span className={`text-[16px] font-sans ${plan.common ? "text-warm-white/60" : "text-navy-deep/55"}`}>/month</span>
                  </p>
                  <dl className={`mt-7 divide-y ${plan.common ? "divide-warm-white/12 border-warm-white/12" : "divide-navy-deep/10 border-navy-deep/10"} border-y`}>
                    {PRICING_ROWS.map((row) => (
                      <div key={row.label} className="py-3 grid grid-cols-[1fr_1fr] gap-3 text-[15px] md:text-[16px]">
                        <dt className={plan.common ? "text-warm-white/65" : "text-navy-deep/65"}>{row.label}</dt>
                        <dd className="text-right">
                          {row.cells[i] === "—" ? (
                            <span className={plan.common ? "text-warm-white/35" : "text-navy-deep/35"}>Not included</span>
                          ) : (
                            row.cells[i]
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <a href={`#${FORM_ID}`} className="btn-copper w-full mt-7">
                    {PRICING_CTA}
                    <span className="arrow" aria-hidden="true">→</span>
                  </a>
                </div>
              ))}
            </div>
            <p data-reveal className="mt-8 text-[17px] text-navy-deep/70">
              {content.pricing.revisionsLine}
              {content.pricing.annualDiscount && <> Pay for a year up front and get {content.pricing.annualDiscount} off.</>}
            </p>
          </div>
        </section>

        {/* 7. The offer / form */}
        <section id={FORM_ID} className="bg-navy-deep text-warm-white scroll-mt-16">
          <div className="social-wrap py-20 md:py-32 grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-20 items-start">
            <div data-reveal className="lg:sticky lg:top-28">
              <h2 className={h2}>{content.offer.heading}</h2>
              <p className="mt-7 text-[18px] md:text-[20px] leading-relaxed text-warm-white/80 max-w-[480px]">{content.offer.body}</p>
              <ul className="mt-8 flex flex-col gap-3 text-[16px] text-warm-white/70">
                {["Four real posts, built for you", "Nothing to install, nothing to pay", "Reply within one business day"].map((t) => (
                  <li key={t} className="flex items-center gap-3"><span className="size-2 rounded-full bg-copper" />{t}</li>
                ))}
              </ul>
            </div>
            <div data-reveal className="rounded-3xl bg-warm-white text-navy-deep p-6 md:p-10 shadow-[0_50px_100px_-50px_rgba(0,0,0,0.7)]">
              <SocialLeadForm industryDefault={content.offer.industryDefault} replyWindow={content.offer.replyWindow} page={content.path} />
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="bg-warm-white text-navy-deep">
          <div className="social-wrap py-20 md:py-32 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-20">
            <h2 data-reveal className={h2}>{content.faq.heading}</h2>
            <div data-reveal>
              <Faq items={faq} />
            </div>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <footer className="bg-navy-ink text-warm-white">
        <div className="social-wrap py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="font-display text-[1.1rem] tracking-[0.1em]">
              FYNZ <span className="text-copper-light">SOCIAL</span>
            </p>
            <address className="not-italic mt-5 text-[16px] leading-relaxed text-warm-white/70">
              {LEGAL.businessName}
              <br />
              {LEGAL.address && (<>{LEGAL.address}<br /></>)}
              {LEGAL.serviceArea}
              <br />
              {LEGAL.phone && (
                <>
                  <a href={`tel:${LEGAL.phone.replace(/[^+\d]/g, "")}`} className="hover:text-copper-light transition-colors">{LEGAL.phone}</a>
                  <br />
                </>
              )}
              <a href={`mailto:${LEGAL.email}`} className="hover:text-copper-light transition-colors">{LEGAL.email}</a>
            </address>
          </div>
          <nav aria-label="Footer" className="flex flex-col gap-3 text-[16px] md:items-end">
            <Link href="/privacy" prefetch={false} className="hover:text-copper-light transition-colors">Privacy Policy</Link>
            <Link href="/terms" prefetch={false} className="hover:text-copper-light transition-colors">Terms</Link>
            <Link href="/" prefetch={false} className="hover:text-copper-light transition-colors">The FYNZ platform</Link>
          </nav>
        </div>
        <div className="social-wrap pb-8 text-[14px] text-warm-white/45">
          © {new Date().getFullYear()} {LEGAL.businessName} All prices in USD.
        </div>
      </footer>
    </>
  );
}

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so a value can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
