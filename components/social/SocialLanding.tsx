import Link from "next/link";
import { HeroVisual } from "./HeroVisual";
import { SocialLeadForm } from "./SocialLeadForm";
import {
  LEGAL,
  PLANS,
  PRICING_CTA,
  PRICING_ROWS,
  buildFaq,
  type SocialPageContent,
} from "@/lib/social/content";

const FORM_ID = "first-month";

const ctaClass =
  "inline-flex items-center justify-center rounded-lg bg-copper px-7 py-4 text-[18px] font-bold text-navy-deep hover:bg-copper-light focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-copper/40";

const h2Class = "text-[2rem] md:text-[2.75rem] font-bold leading-[1.1] tracking-tight";

function formatPrice(price: number) {
  return `$${price.toLocaleString("en-US")}/mo`;
}

/** Renders the whole FYNZ Social landing page from a content object. */
export function SocialLanding({ content }: { content: SocialPageContent }) {
  const faq = buildFaq(content);
  const pageUrl = `${LEGAL.siteUrl}${content.path}`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "FYNZ Social",
    serviceType: "Done-for-you social media management",
    description: content.meta.description,
    url: pageUrl,
    provider: {
      "@type": "Organization",
      name: LEGAL.businessName,
      url: LEGAL.siteUrl,
      email: LEGAL.email,
    },
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

      {/* Header: wordmark only. The platform link lives in the footer. */}
      <header className="bg-navy-deep text-warm-white">
        <div className="social-wrap flex items-center justify-between h-16">
          <span className="text-[1.15rem] font-bold tracking-[0.08em]">
            FYNZ <span className="text-copper-light">SOCIAL</span>
          </span>
          <a
            href={`#${FORM_ID}`}
            className="hidden sm:inline-flex items-center rounded-lg bg-copper px-4 py-2 text-[16px] font-bold text-navy-deep hover:bg-copper-light"
          >
            First month free
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* 1. Hero */}
        <section className="bg-navy-deep text-warm-white">
          <div className="social-wrap py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-[2.35rem] sm:text-[3rem] md:text-[3.6rem] font-bold leading-[1.05] tracking-tight">
                {content.hero.headline}
              </h1>
              <p className="mt-6 text-[18px] md:text-[21px] leading-relaxed text-warm-white/85 max-w-[560px]">
                {content.hero.subhead}
              </p>
              <div className="mt-8">
                <a href={`#${FORM_ID}`} className={ctaClass}>
                  {content.hero.cta}
                </a>
                <p className="mt-3 text-[15px] text-warm-white/70">{content.hero.note}</p>
              </div>
            </div>
            <HeroVisual className="w-full max-w-[560px] mx-auto lg:mx-0 h-auto" />
          </div>
        </section>

        {/* 2. The problem */}
        <section className="bg-warm-white">
          <div className="social-wrap py-16 md:py-24">
            <h2 className={h2Class}>{content.problem.heading}</h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.problem.blocks.map((block) => (
                <div key={block.title} className="rounded-2xl bg-white p-6 md:p-8 border-2 border-navy-deep/10">
                  <h3 className="text-[1.35rem] font-bold leading-snug">{block.title}</h3>
                  <p className="mt-3 text-[18px] leading-relaxed text-navy-deep/85">{block.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[14px] text-navy-deep/60">{content.problem.attribution}</p>
          </div>
        </section>

        {/* 3. How it works */}
        <section className="bg-navy-mid text-warm-white">
          <div className="social-wrap py-16 md:py-24">
            <h2 className={h2Class}>{content.howItWorks.heading}</h2>
            <ol className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              {content.howItWorks.steps.map((step, i) => (
                <li key={step.title} className="flex gap-5 md:block">
                  <span
                    aria-hidden="true"
                    className="flex size-12 shrink-0 items-center justify-center rounded-full bg-copper text-navy-deep text-[1.25rem] font-bold md:mb-5"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[1.35rem] font-bold leading-snug">
                      <span className="sr-only">Step {i + 1}: </span>
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[18px] leading-relaxed text-warm-white/85">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 4. What you get */}
        <section className="bg-warm-white">
          <div className="social-wrap py-16 md:py-24 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 md:gap-16">
            <h2 className={h2Class}>{content.whatYouGet.heading}</h2>
            <ul className="divide-y-2 divide-navy-deep/10 border-y-2 border-navy-deep/10">
              {content.whatYouGet.items.map((item) => (
                <li key={item} className="py-4 text-[18px] md:text-[20px] leading-relaxed flex gap-4">
                  <span aria-hidden="true" className="font-bold text-copper">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. Who it's for */}
        <section className="bg-white border-y-2 border-navy-deep/10">
          <div className="social-wrap py-12 md:py-16">
            <h2 className="text-[14px] font-bold uppercase tracking-[0.18em] text-copper">{content.whoItsFor.heading}</h2>
            <p className="mt-4 text-[18px] md:text-[20px] leading-relaxed">
              {content.whoItsFor.row.map((item, i) => (
                <span key={item}>
                  {item}
                  {i < content.whoItsFor.row.length - 1 && (
                    <span aria-hidden="true" className="mx-3 text-copper">·</span>
                  )}
                </span>
              ))}
            </p>
            <p className="mt-4 text-[20px] md:text-[22px] font-bold">{content.whoItsFor.closer}</p>
          </div>
        </section>

        {/* 6. Pricing */}
        <section id="pricing" className="bg-warm-white scroll-mt-16">
          <div className="social-wrap py-16 md:py-24">
            <h2 className={h2Class}>{content.pricing.heading}</h2>

            {/* Desktop: three-column table */}
            <div className="mt-10 hidden md:block overflow-x-auto">
              <table className="w-full border-collapse text-[17px] lg:text-[18px]">
                <caption className="sr-only">FYNZ Social plans and monthly prices in US dollars</caption>
                <thead>
                  <tr className="align-bottom">
                    <th scope="col" className="sr-only">Feature</th>
                    {PLANS.map((plan) => (
                      <th
                        key={plan.id}
                        scope="col"
                        className={`p-5 text-left rounded-t-2xl ${plan.common ? "bg-navy-deep text-warm-white" : "bg-white"}`}
                      >
                        {plan.common && (
                          <span className="block text-[14px] font-bold uppercase tracking-[0.18em] text-copper-light mb-2">
                            Most common
                          </span>
                        )}
                        <span className="block text-[1.4rem] font-bold">{plan.name}</span>
                        <span className="block text-[2rem] font-bold leading-tight mt-1">{formatPrice(plan.price)}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PRICING_ROWS.map((row) => (
                    <tr key={row.label} className="border-t-2 border-navy-deep/10">
                      <th scope="row" className="py-4 pr-4 text-left font-bold w-[22%]">
                        {row.label}
                      </th>
                      {row.cells.map((cell, i) => (
                        <td key={PLANS[i].id} className={`p-5 ${PLANS[i].common ? "bg-navy-deep/5" : ""}`}>
                          {cell === "—" ? <span aria-label="Not included">—</span> : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="border-t-2 border-navy-deep/10">
                    <td className="py-5" />
                    {PLANS.map((plan) => (
                      <td key={plan.id} className={`p-5 ${plan.common ? "bg-navy-deep/5 rounded-b-2xl" : ""}`}>
                        <a href={`#${FORM_ID}`} className={`${ctaClass} w-full text-[16px] lg:text-[17px] px-4`}>
                          {PRICING_CTA}
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile: one card per plan, same data */}
            <div className="mt-8 md:hidden flex flex-col gap-5">
              {PLANS.map((plan, i) => (
                <div
                  key={plan.id}
                  className={`rounded-2xl p-6 border-2 ${plan.common ? "bg-navy-deep text-warm-white border-navy-deep" : "bg-white border-navy-deep/10"}`}
                >
                  {plan.common && (
                    <p className="text-[14px] font-bold uppercase tracking-[0.18em] text-copper-light mb-2">Most common</p>
                  )}
                  <h3 className="text-[1.4rem] font-bold">{plan.name}</h3>
                  <p className="text-[2rem] font-bold leading-tight mt-1">{formatPrice(plan.price)}</p>
                  <dl className="mt-5 divide-y divide-current/15 border-y border-current/15">
                    {PRICING_ROWS.map((row) => (
                      <div key={row.label} className="py-3 grid grid-cols-[1fr_1fr] gap-3 text-[16px]">
                        <dt className="font-bold">{row.label}</dt>
                        <dd className="text-right">
                          {row.cells[i] === "—" ? "Not included" : row.cells[i]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <a href={`#${FORM_ID}`} className={`${ctaClass} w-full mt-6`}>
                    {PRICING_CTA}
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[17px] text-navy-deep/80">
              {content.pricing.revisionsLine}
              {content.pricing.annualDiscount && (
                <> Pay for a year up front and get {content.pricing.annualDiscount} off.</>
              )}
            </p>
          </div>
        </section>

        {/* 7. The offer / form */}
        <section id={FORM_ID} className="bg-copper-light/30 border-t-2 border-navy-deep/10 scroll-mt-16">
          <div className="social-wrap py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16">
            <div>
              <h2 className={h2Class}>{content.offer.heading}</h2>
              <p className="mt-6 text-[18px] md:text-[20px] leading-relaxed">{content.offer.body}</p>
            </div>
            <SocialLeadForm
              industryDefault={content.offer.industryDefault}
              replyWindow={content.offer.replyWindow}
              page={content.path}
            />
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="bg-warm-white">
          <div className="social-wrap py-16 md:py-24 max-w-[860px]">
            <h2 className={h2Class}>{content.faq.heading}</h2>
            <div className="mt-8 divide-y-2 divide-navy-deep/10 border-y-2 border-navy-deep/10">
              {faq.map((item) => (
                <details key={item.question} className="group">
                  <summary className="faq-summary flex cursor-pointer items-center justify-between gap-6 py-5 text-[19px] md:text-[21px] font-bold leading-snug focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-copper/40 rounded">
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="flex size-8 shrink-0 items-center justify-center rounded-full bg-navy-deep text-warm-white text-[1.4rem] leading-none group-open:rotate-45 transition-transform"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-6 text-[18px] leading-relaxed text-navy-deep/85">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <footer className="bg-navy-deep text-warm-white">
        <div className="social-wrap py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-[1.15rem] font-bold tracking-[0.08em]">
              FYNZ <span className="text-copper-light">SOCIAL</span>
            </p>
            <address className="not-italic mt-4 text-[16px] leading-relaxed text-warm-white/80">
              {LEGAL.businessName}
              <br />
              {LEGAL.address && (
                <>
                  {LEGAL.address}
                  <br />
                </>
              )}
              {LEGAL.serviceArea}
              <br />
              {LEGAL.phone && (
                <>
                  <a href={`tel:${LEGAL.phone.replace(/[^+\d]/g, "")}`} className="hover:text-copper-light">
                    {LEGAL.phone}
                  </a>
                  <br />
                </>
              )}
              <a href={`mailto:${LEGAL.email}`} className="hover:text-copper-light">
                {LEGAL.email}
              </a>
            </address>
          </div>
          <nav aria-label="Footer" className="flex flex-col gap-3 text-[16px] md:items-end">
            <Link href="/privacy" className="hover:text-copper-light">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-copper-light">Terms</Link>
            <Link href="/" className="hover:text-copper-light">The FYNZ platform</Link>
          </nav>
        </div>
        <div className="social-wrap pb-8 text-[14px] text-warm-white/60">
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
