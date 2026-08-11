"use client";

import React from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup, HoverFloat } from "@/components/animations";
import { Chip } from "@/components/shared";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    chip: "24/7 INBOUND",
    title: "The phone gets answered in two rings — at 2 a.m.",
    desc: "AI voice answers every inbound emergency call the moment it comes in — nights, weekends, holidays. It qualifies the loss, captures the address and severity, and books the truck while the caller is still on the line. No voicemail. No 'we'll call you back.'"
  },
  {
    chip: "CLAIM INTAKE",
    title: "Insurance details captured on the first call",
    desc: "FNOL-style intake built for restoration: loss type, cause, carrier, policy details, adjuster contact — collected while the caller is on the line and attached to the job record before your crew rolls."
  },
  {
    chip: "ATTRIBUTION",
    title: "See every job you would have lost",
    desc: "Every after-hours call that gets answered, qualified, and booked is logged as a saved job — with the revenue attributed to it. You see exactly what the system recovered, in dollars, on your own dashboard."
  },
  {
    chip: "HUMAN OVERLAP",
    title: "Humans on the line when it matters",
    desc: "On Emergency Managed, a done-for-you pod overlaps the AI with after-hours human coverage — live escalation on complex losses, follow-up chase on every open lead, and a weekly report on what came in and what got booked."
  }
];

const BUNDLES = [
  {
    name: "Emergency Growth",
    price: 297,
    who: "The pre-configured Emergency Restoration bundle — answer, qualify, capture, book.",
    popular: false,
    features: [
      "24/7 AI voice emergency answering (inbound)",
      "Insurance-claim / FNOL intake capture",
      "Saved-job & recovered-revenue attribution",
      "Emergency-tuned booking & dispatch flow",
      "Full FYNZ Growth platform underneath",
      "Live in 48 hours"
    ]
  },
  {
    name: "Emergency Managed",
    price: 797,
    who: "Everything in Emergency Growth, plus a done-for-you pod behind it.",
    popular: true,
    features: [
      "Everything in Emergency Growth",
      "After-hours human coverage overlap",
      "Live escalation on complex losses",
      "Follow-up chase on every open lead",
      "Weekly saved-jobs report",
      "Campaign management & monitoring"
    ]
  }
];

const ADDONS = [
  {
    name: "AI Voice & Call Management",
    price: "+$100/mo",
    desc: "Stackable call-handling capacity for the Emergency lane."
  },
  {
    name: "Emergency Response Pack",
    price: "+$300/mo",
    desc: "A bundle component only — included as part of a bundle, never sold on its own."
  }
];

export default function EmergencyPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-line-soft">
        <div className="absolute inset-0 bg-radial-[at_50%_0%] from-copper/10 via-transparent to-transparent pointer-events-none" />
        <div className="wrap max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col items-start text-left">
            <Chip className="mb-4">Emergency Restoration</Chip>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6">
              The 2 a.m. call you miss is a job your <span className="text-copper">competitor booked</span>.
            </h1>
            <p className="text-muted text-lg mb-8 max-w-xl">
              Water, fire, mold — losses don&apos;t wait for office hours, and neither do insurance-funded jobs. FYNZ answers in two rings, qualifies the loss, captures the claim details, and books the truck. Live in 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="/demo" />}>
                Book a demo
              </Button>
              <Button size="lg" variant="outline" render={<Link href="/demo" />}>
                Get your free missed-call audit
              </Button>
            </div>
            <span className="font-mono text-[9px] tracking-widest text-faint uppercase">MONTH-TO-MONTH · 30-DAY MONEY-BACK GUARANTEE · LIVE IN 48H</span>
          </div>

          {/* Hero visual — after-hours call, answered */}
          <div className="relative w-full max-w-[550px] justify-self-center lg:justify-self-end">
            <HoverFloat yOffset={-12} duration={4}>
              <div className="bg-navy-900 text-white border border-white/10 rounded-[var(--r-lg)] p-5 relative shadow-xl overflow-hidden" aria-hidden="true">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <span className="font-mono text-[9px] tracking-[0.15em] text-slate-400">FYNZ · AFTER HOURS</span>
                  <span className="font-mono text-[9px] tracking-wider text-green border border-green/30 px-2 py-0.5 rounded uppercase font-semibold">ON DUTY</span>
                </div>
                <div className="space-y-2 text-[0.78rem]">
                  <div className="flex justify-between items-center p-2 bg-navy-750/60 border border-white/10 rounded">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-copper/10 text-copper font-bold text-[9px] flex items-center justify-center">AI</span>
                      <span className="text-slate-200">Inbound call answered — 2nd ring</span>
                    </div>
                    <span className="font-mono text-[8px] text-slate-400">2:07 AM</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-navy-750/60 border border-white/10 rounded">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-copper/10 text-copper font-bold text-[9px] flex items-center justify-center">✓</span>
                      <span className="text-slate-200">Loss qualified — water, basement</span>
                    </div>
                    <span className="font-mono text-[8px] text-slate-400">2:09 AM</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-navy-750/60 border border-white/10 rounded">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-copper/10 text-copper font-bold text-[9px] flex items-center justify-center">✓</span>
                      <span className="text-slate-200">Claim details captured — carrier &amp; policy</span>
                    </div>
                    <span className="font-mono text-[8px] text-slate-400">2:11 AM</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-copper/10 border border-copper/30 rounded">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-copper text-white font-bold text-[9px] flex items-center justify-center">🚚</span>
                      <span className="text-white font-semibold">Truck booked — 7:00 AM window</span>
                    </div>
                    <span className="font-mono text-[8px] text-copper">SAVED JOB</span>
                  </div>
                </div>
              </div>
            </HoverFloat>
          </div>
        </div>
      </section>

      {/* The math of a missed call */}
      <section className="sec py-24 bg-white dark:bg-navy-900 text-slate-900 dark:text-white border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">The problem</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-4">
              Emergencies call once. Then they <span className="text-copper">call the next number</span>.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              A homeowner standing in two inches of water does not leave a voicemail. They hang up and dial the next restoration company on the list — and whoever answers first gets the mitigation, the rebuild, and the insurance-funded invoice that comes with it. Answering is the whole game. FYNZ makes sure you always answer.
            </p>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((f, idx) => (
              <div key={idx} className="bg-navy-800 text-white border border-white/10 hover:border-copper/40 p-6 rounded-[var(--r-lg)] transition-all duration-300 hover:-translate-y-1">
                <Chip className="mb-4">{f.chip}</Chip>
                <h3 className="font-display font-bold text-lg text-white mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Bundles */}
      <section className="sec py-24 border-b border-line-soft">
        <div className="wrap max-w-5xl mx-auto px-6">
          <div className="text-center mb-6 max-w-3xl mx-auto">
            <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">Emergency bundles</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-4">
              Two bundles. <span className="text-copper">No piecing it together.</span>
            </h2>
            <p className="text-muted">
              The Emergency lane is sold as fixed, pre-configured bundles — built for restoration from the first ring.
            </p>
          </div>
          <p className="text-center font-mono text-[10px] tracking-wider text-copper uppercase mb-12">
            30-day money-back guarantee · month-to-month · cancel anytime · prices in USD
          </p>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {BUNDLES.map((bundle, idx) => (
              <div
                key={idx}
                className={cn(
                  "group relative bg-navy-900 text-white p-8 rounded-[var(--r-lg)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1",
                  bundle.popular && "bg-gradient-to-b from-navy-800 to-navy-900"
                )}
              >
                {bundle.popular && (
                  <>
                    <span className="absolute top-0 left-[14%] right-[14%] h-[2px] bg-gradient-to-r from-transparent via-copper to-transparent" />
                    <span className="absolute top-[-11px] left-1/2 -translate-x-1/2 font-mono text-[8px] tracking-widest bg-copper text-white px-3.5 py-1 rounded-full font-bold uppercase select-none">
                      DONE FOR YOU
                    </span>
                  </>
                )}
                <div className="flex flex-col grow">
                  <h3 className="font-display font-extrabold text-xl text-white mb-1.5">{bundle.name}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed min-h-[36px] mb-6">{bundle.who}</p>
                  <div className="flex items-baseline gap-1.5 border-b border-white/10 pb-4 mb-4">
                    <span className="font-mono text-copper text-lg font-bold">$</span>
                    <span className="font-mono text-3xl font-extrabold tracking-tight text-white">{bundle.price}</span>
                    <span className="font-mono text-[9px] text-slate-400 tracking-wider uppercase">/MO</span>
                  </div>
                  <span className="font-mono text-[8.5px] tracking-wider text-slate-400 block">
                    BUNDLE PRICE · MONTH-TO-MONTH
                  </span>
                  <Button
                    className={cn(
                      "w-full mt-6 mb-8 py-6 font-semibold",
                      bundle.popular ? "bg-copper hover:bg-copper/90 text-white" : "bg-white text-navy-900 hover:bg-slate-100 border-none"
                    )}
                    render={<Link href="/demo" />}
                  >
                    Book a demo
                  </Button>
                  <ul className="space-y-3.5 text-xs text-slate-300">
                    {bundle.features.map((feat, fidx) => (
                      <li key={fidx} className="flex gap-2.5 items-start">
                        <span className="text-copper font-mono text-[10px] shrink-0 mt-0.5">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </StaggerGroup>

          {/* Add-ons */}
          <ScrollReveal>
            <div className="mt-10 bg-navy-900 text-white rounded-[var(--r-lg)] px-8 py-6">
              <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-4">Emergency lane add-ons</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ADDONS.map((addon, idx) => (
                  <div key={idx} className="flex items-start justify-between gap-4 border border-white/10 rounded-[var(--r-md)] p-4">
                    <div>
                      <b className="font-display font-bold text-sm text-white block mb-1">{addon.name}</b>
                      <p className="text-slate-400 text-xs leading-relaxed">{addon.desc}</p>
                    </div>
                    <span className="font-mono text-copper text-sm font-bold shrink-0">{addon.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final py-24 relative overflow-hidden text-center bg-radial-[at_bottom_center] from-copper/10 via-transparent to-transparent">
        <div className="wrap max-w-4xl mx-auto px-6 relative z-10">
          <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">Stop losing the after-hours call</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
            Find out what your phone line is <span className="text-copper">costing you</span>.
          </h2>
          <p className="text-muted text-lg mb-4 max-w-xl mx-auto">
            Book a demo and get your free missed-call audit — we&apos;ll show you what happens to your line after hours, and what it should be booking instead.
          </p>
          <p className="font-mono text-[11px] tracking-wide text-copper uppercase mb-8">
            Month-to-month · 30-day money-back guarantee · live in 48 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="/demo" />}>
              Book a demo
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/demo" />}>
              Get your free missed-call audit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
