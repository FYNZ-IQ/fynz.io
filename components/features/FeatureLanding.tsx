"use client";

import React from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup, HoverFloat } from "@/components/animations";
import { Chip } from "@/components/shared";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, Button } from "@/components/ui";
import { FeatureScene, FeatureStyles } from "./scenes";
import type { FeatureData } from "@/lib/features/types";

/** Resolve a feature slug to its route (AI agents live under /ai). */
export function featureHref(slug: string, all: Record<string, FeatureData>): string {
  const f = all[slug];
  if (!f) return `/features/${slug}`;
  return f.pillar === "FYNZ AI" ? `/ai/${slug}` : `/features/${slug}`;
}

export function FeatureLanding({ data, all }: { data: FeatureData; all: Record<string, FeatureData> }) {
  const { name, pillar, pillarLink, hero, capabilities, steps, faq, related } = data;

  return (
    <>
      <FeatureStyles />

      {/* Hero */}
      <section className="sec pt-[136px] pb-[84px]">
        <div className="wrap grid lg:grid-cols-[1fr_1fr] gap-14 items-center">
          <ScrollReveal>
            <Link href={pillarLink} className="inline-block">
              <Chip className="mb-5 hover:bg-copper hover:text-white transition-colors">{pillar} · {name}</Chip>
            </Link>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.08] mb-6">
              {hero.headline}
            </h1>
            <p className="lede text-lg mb-9">{hero.subhead}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-copper rounded-full h-[52px] px-7 text-base">
                Start free
              </Button>
              <Button size="lg" variant="outline" className="btn-ghost rounded-full h-[52px] px-7 text-base" render={<Link href={pillarLink} />}>
                Explore {pillar} →
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.15}>
            <HoverFloat yOffset={-10} duration={4.5}>
              <FeatureScene slug={data.slug} />
            </HoverFloat>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="sec bg-navy-900 text-white">
        <div className="wrap">
          <ScrollReveal className="sec-head">
            <span className="eyebrow eyebrow-line mb-4">What it does</span>
            <h2 className="font-display font-bold text-3xl md:text-[2.4rem] leading-tight mt-3 text-white">
              Everything {name.toLowerCase()} handles for you
            </h2>
          </ScrollReveal>
          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {capabilities.map((c, i) => (
              <div key={i} className="rounded-[var(--r-md)] border border-white/10 bg-white/[0.04] p-6">
                <span className="w-8 h-8 rounded-lg bg-copper-tint border border-copper/30 grid place-items-center text-copper mb-4 text-sm">✓</span>
                <h3 className="font-display font-bold text-base text-white mb-2">{c.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* How it works */}
      <section className="sec">
        <div className="wrap">
          <ScrollReveal className="sec-head">
            <span className="eyebrow eyebrow-line mb-4">How it works</span>
            <h2 className="font-display font-bold text-3xl md:text-[2.4rem] leading-tight mt-3">
              Up and running in minutes
            </h2>
          </ScrollReveal>
          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div key={i} className="rounded-[var(--r-md)] border border-white/10 bg-navy-800 p-6">
                <span className="font-mono text-[11px] tracking-widest text-copper block mb-3">STEP 0{i + 1}</span>
                <h3 className="font-display font-bold text-base text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec bg-secondary/50">
        <div className="wrap max-w-[760px] mx-auto">
          <ScrollReveal className="sec-head text-center mx-auto">
            <span className="eyebrow mb-4 justify-center">FAQ</span>
            <h2 className="font-display font-bold text-3xl md:text-[2.4rem] leading-tight mt-3">Common questions</h2>
          </ScrollReveal>
          <Accordion className="border-none gap-3 flex flex-col bg-transparent">
            {faq.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 bg-navy-800 rounded-[var(--r-md)] px-5">
                <AccordionTrigger className="font-display font-semibold text-[0.95rem] text-white py-5">{item.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-slate-300 leading-relaxed pb-5">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related features — interconnection */}
      <section className="sec-tight">
        <div className="wrap">
          <ScrollReveal className="sec-head">
            <span className="eyebrow eyebrow-line mb-4">Works with</span>
            <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight mt-3">
              {name} is stronger with the rest of FYNZ
            </h2>
          </ScrollReveal>
          <StaggerGroup className="grid sm:grid-cols-3 gap-5">
            {related.map((slug) => {
              const r = all[slug];
              if (!r) return null;
              return (
                <Link key={slug} href={featureHref(slug, all)} className="group rounded-[var(--r-md)] border border-white/10 bg-navy-800 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-copper/40">
                  <span className="font-mono text-[10px] tracking-widest text-copper block mb-2">{r.pillar}</span>
                  <h3 className="font-display font-bold text-base text-white group-hover:text-copper transition-colors mb-1.5">{r.name}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{r.hero.subhead}</p>
                  <span className="inline-block font-mono text-xs tracking-wider text-copper uppercase mt-4 group-hover:translate-x-1 transition-transform">Explore →</span>
                </Link>
              );
            })}
          </StaggerGroup>

          {/* CTA */}
          <div className="rounded-[var(--r-lg)] bg-navy-900 text-white text-center px-6 py-14 mt-14">
            <h2 className="font-display font-bold text-3xl leading-tight mb-3 text-white">Try {name} free</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">14-day free trial. No credit card required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-copper rounded-full h-[52px] px-7 text-base">Start free</Button>
              <Button size="lg" variant="outline" className="rounded-full h-[52px] px-7 text-base border-white/25 text-white hover:bg-white/10" render={<Link href="/pricing" />}>
                See pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
