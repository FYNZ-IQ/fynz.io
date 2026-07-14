"use client";

import React from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup, HoverFloat, CountUp } from "@/components/animations";
import { Chip } from "@/components/shared";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Button,
  Card,
  CardContent,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import type { IndustryData } from "@/lib/industries/types";
import { industryThemeVars } from "@/lib/industries/themes";

export function IndustryLanding({ data }: { data: IndustryData }) {
  const { hero, pain, benefits, demo, beforeAfter, proof, faq } = data;

  return (
    <div className="industry-theme" style={industryThemeVars(data.slug)}>
      {/* Hero */}
      <section className="sec pt-[136px] pb-[84px]">
        <div className="wrap grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <ScrollReveal>
            <span className="eyebrow eyebrow-line mb-5">{hero.category}</span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.4rem] tracking-tight leading-[1.08] mt-4 mb-6">
              {hero.headline}
            </h1>
            <p className="lede text-xl mb-9">{hero.subhead}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-copper rounded-full h-[52px] px-7 text-base" render={<Link href={`/onboarding?plan=free&industry=${data.slug}`} />}>
                Start free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-ghost rounded-full h-[52px] px-7 text-base"
                render={<Link href="/pricing" />}
              >
                Book demo
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.15} className="justify-self-center lg:justify-self-end w-full max-w-[400px]">
            <HoverFloat yOffset={-12} duration={4}>
              <Card className="bg-navy-900 text-white border border-line rounded-[var(--r-lg)] p-6 shadow-lg">
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-copper block mb-4">
                  {hero.visual.label}
                </span>
                <div className="rounded-[var(--r-md)] border border-line-soft bg-white/[0.04] p-5">
                  <h3 className="font-display font-bold text-lg mb-3">{hero.visual.title}</h3>
                  {hero.visual.lines.map((line, i) => (
                    <p
                      key={i}
                      className={cn(
                        "text-sm",
                        i === 0 ? "text-white/90 text-xl tracking-[0.15em] mb-1" : "text-white/55"
                      )}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </Card>
            </HoverFloat>
          </ScrollReveal>
        </div>
      </section>

      {/* Pain points */}
      <section className="sec bg-navy-900 text-white">
        <div className="wrap">
          <ScrollReveal className="sec-head">
            <span className="eyebrow eyebrow-line mb-4">{pain.eyebrow}</span>
            <h2 className="font-display font-bold text-3xl md:text-[2.6rem] leading-tight mt-3 text-white">
              {pain.title}
            </h2>
          </ScrollReveal>
          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
            {pain.cards.map((card, i) => (
              <div
                key={i}
                className="rounded-[var(--r-md)] border border-white/10 bg-white/[0.04] p-6"
              >
                <span className="w-9 h-9 rounded-lg bg-copper-tint border border-copper/30 grid place-items-center text-copper mb-4">
                  ✕
                </span>
                <h3 className="font-display font-bold text-lg text-white mb-2">{card.title}</h3>
                <p className="text-base text-white/60 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Benefits */}
      <section className="sec">
        <div className="wrap flex flex-col gap-20">
          {benefits.map((benefit, i) => (
            <ScrollReveal
              key={i}
              direction={i % 2 === 0 ? "up" : "up"}
              className={cn(
                "grid lg:grid-cols-2 gap-12 items-center",
                i % 2 === 1 && "lg:[&>*:first-child]:order-2"
              )}
            >
              <div>
                <Chip className="mb-4">{benefit.powered}</Chip>
                <h2 className="font-display font-bold text-2xl md:text-[2rem] leading-tight mb-4">
                  {benefit.title}
                </h2>
                <p className="lede">{benefit.desc}</p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {["Designed to save admin hours", "Native client communication layer", "Secure data handling and updates"].map(
                    (f) => (
                      <li key={f} className="flex items-start gap-2.5 text-base text-muted">
                        <span className="text-green mt-0.5 shrink-0">✓</span>
                        {f}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <Card className="bg-navy-800 text-white border border-white/10 rounded-[var(--r-lg)] shadow-none">
                <CardContent className="p-7">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-slate-400 block mb-4">
                    FYNZ Preview
                  </span>
                  <div className="rounded-[var(--r-md)] border border-white/10 bg-white/[0.04] p-5 min-h-[130px] flex items-center">
                    <p className="text-[1.05rem] text-slate-100 leading-relaxed">{benefit.preview}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Micro-demo timeline */}
      <section className="sec bg-secondary/50">
        <div className="wrap">
          <ScrollReveal className="sec-head text-center mx-auto">
            <span className="eyebrow mb-4 justify-center">{demo.eyebrow}</span>
            <h2 className="font-display font-bold text-3xl md:text-[2.4rem] leading-tight mt-3">
              {demo.title}
            </h2>
          </ScrollReveal>
          <Card className="max-w-[680px] mx-auto bg-navy-800 text-white border border-white/10 rounded-[var(--r-lg)] shadow-md">
            <CardContent className="p-8">
              <StaggerGroup className="flex flex-col">
                {demo.steps.map((step, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex gap-5 items-start py-4",
                      i !== demo.steps.length - 1 && "border-b border-white/10"
                    )}
                  >
                    <span
                      className={cn(
                        "w-3 h-3 rounded-full shrink-0 mt-1.5",
                        step.success ? "bg-green" : "bg-copper"
                      )}
                    />
                    <div>
                      <p className="font-display font-semibold text-base text-white">{step.label}</p>
                      <p className="text-base text-slate-300 leading-relaxed mt-0.5">{step.desc}</p>
                      {step.sublabel && (
                        <span className="inline-block mt-1.5 font-mono text-[11px] tracking-[0.12em] uppercase text-copper">
                          {step.sublabel}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </StaggerGroup>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Before / After */}
      <section className="sec">
        <div className="wrap">
          <ScrollReveal className="sec-head">
            <span className="eyebrow eyebrow-line mb-4">Comparison</span>
            <h2 className="font-display font-bold text-3xl md:text-[2.4rem] leading-tight mt-3">
              {beforeAfter.title}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="h-full rounded-[var(--r-lg)] border border-destructive/40 bg-navy-800 p-8">
                <span className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase text-destructive block mb-3">
                  Before FYNZ
                </span>
                <p className="text-[1.05rem] text-slate-300 leading-relaxed">{beforeAfter.before}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="h-full rounded-[var(--r-lg)] border border-green/40 bg-navy-800 p-8">
                <span className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase text-green block mb-3">
                  With FYNZ
                </span>
                <p className="text-[1.05rem] text-slate-300 leading-relaxed">{beforeAfter.after}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="sec bg-secondary/50">
        <div className="wrap">
          <ScrollReveal className="sec-head">
            <span className="eyebrow eyebrow-line mb-4">Proven impact</span>
            <h2 className="font-display font-bold text-3xl md:text-[2.4rem] leading-tight mt-3">
              Outcome metrics
            </h2>
          </ScrollReveal>
          <StaggerGroup className="grid sm:grid-cols-3 gap-6">
            {proof.stats.map((stat, i) => (
              <div
                key={i}
                className="text-center rounded-[var(--r-md)] border border-white/10 bg-navy-800 p-8"
              >
                <CountUp value={stat.num} className="block font-display font-extrabold text-4xl text-copper" />
                <div className="text-base text-slate-300 mt-1.5">{stat.label}</div>
              </div>
            ))}
          </StaggerGroup>
          <ScrollReveal>
            <blockquote className="mt-6 rounded-[var(--r-lg)] border border-white/10 bg-navy-800 p-8 text-center italic text-slate-300">
              {proof.testimonial}
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec">
        <div className="wrap max-w-[760px] mx-auto">
          <ScrollReveal className="sec-head text-center mx-auto">
            <span className="eyebrow mb-4 justify-center">FAQ</span>
            <h2 className="font-display font-bold text-3xl md:text-[2.4rem] leading-tight mt-3">
              Common questions
            </h2>
          </ScrollReveal>
          <Accordion className="border-none gap-3 flex flex-col bg-transparent">
            {faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-white/10 bg-navy-800 rounded-[var(--r-md)] px-5"
              >
                <AccordionTrigger className="font-display font-semibold text-base text-white py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-slate-300 leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="sec-tight">
        <div className="wrap">
          <div className="rounded-[var(--r-lg)] bg-navy-900 text-white text-center px-6 py-16">
            <h2 className="font-display font-bold text-3xl md:text-[2.2rem] leading-tight mb-3 text-white">
              Ready to transform your business with FYNZ?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
              Get started with a 14-day free trial. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-copper rounded-full h-[52px] px-7 text-base" render={<Link href={`/onboarding?plan=free&industry=${data.slug}`} />}>
                Start free today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-[52px] px-7 text-base border-white/25 text-white hover:bg-white/10"
                render={<Link href="/pricing" />}
              >
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
