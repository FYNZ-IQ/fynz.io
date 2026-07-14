"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup } from "@/components/animations";
import { Chip } from "@/components/shared";
import { Button, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui";
import { cn } from "@/lib/utils";

type BillingCycle = "monthly" | "annual";

type Plan = {
  name: string;
  who: string;
  mPrice: number;
  aPrice: number;
  from?: boolean;
  cap?: string;
  mCap?: string;
  aCap?: string;
  note?: string;
  cta: string;
  ctaLink: string;
  popular: boolean;
  freeFlag?: string;
  features: string[];
};

const PLANS: Plan[] = [
  {
    name: "Free",
    who: "Get found and get booked — your first step off pen-and-paper.",
    mPrice: 0,
    aPrice: 0,
    cap: "FREE. FOREVER. NO CARD.",
    cta: "Start free",
    ctaLink: "/onboarding?plan=free",
    popular: false,
    freeFlag: "FREE FOREVER · NOT A TRIAL",
    features: [
      "24/7 booking page + QR code",
      "CRM with 250 contacts",
      "Unified inbox (email)",
      "1 active automation",
      "Business dashboard — see what's waiting, like clients overdue for rebook"
    ]
  },
  {
    name: "Launch",
    who: "The full system, ready the moment you sign up — set it up yourself or let us do it.",
    mPrice: 97,
    aPrice: 81,
    mCap: "14-DAY TRIAL · CANCEL ANYTIME",
    aCap: "PER MONTH · BILLED ANNUALLY",
    note: "One-time onboarding fee $299 — waived on annual",
    cta: "Start 14-day trial",
    ctaLink: "/onboarding?plan=launch",
    popular: false,
    features: [
      "Everything in Free",
      "48-hour concierge setup — our team imports your contacts and turns everything on",
      "Dedicated business phone number + 2-way SMS",
      "Missed-call text-back — never lose a job to a missed call",
      "Unlimited contacts & automations",
      "Email marketing, funnels & landing pages",
      "Review requests on autopilot",
      "Payments, invoicing & online store"
    ]
  },
  {
    name: "Growth",
    who: "Software plus a team that runs your marketing every month.",
    mPrice: 297,
    aPrice: 248,
    mCap: "14-DAY TRIAL · CANCEL ANYTIME",
    aCap: "PER MONTH · BILLED ANNUALLY",
    note: "One-time onboarding fee $499 — waived on annual",
    cta: "Start 14-day trial",
    ctaLink: "/onboarding?plan=growth",
    popular: true,
    features: [
      "Everything in Launch",
      "Conversation AI — instant replies on SMS, chat & DMs",
      "1 done-for-you campaign every month (rebooking, reactivation) — built and sent by our team",
      "Review responses managed for you",
      "Content AI + social planner",
      "Quarterly strategy & optimization call",
      "Priority support"
    ]
  },
  {
    name: "Managed",
    who: "Your virtual front office. We run it, you run the business.",
    mPrice: 697,
    aPrice: 581,
    from: true,
    mCap: "BILLED MONTHLY",
    aCap: "PER MONTH · BILLED ANNUALLY",
    cta: "Book a demo",
    ctaLink: "#demo",
    popular: false,
    features: [
      "Everything in Growth",
      "Voice AI receptionist with human backup during business hours",
      "Inbox coverage — messages answered for you",
      "Unlimited done-for-you campaigns",
      "Compliance fully handled — texting registration, consent and opt-outs, zero legal exposure",
      "Monthly recovered-revenue report"
    ]
  }
];

type Cell = string | boolean;

type MatrixRow = {
  name: string;
  free: Cell;
  launch: Cell;
  growth: Cell;
  managed: Cell;
  link?: string;
};

const COMPARISON_MATRIX: { group: string; rows: MatrixRow[] }[] = [
  {
    group: "GROW",
    rows: [
      { name: "CRM contacts", free: "250", launch: "UNLIMITED", growth: "UNLIMITED", managed: "UNLIMITED", link: "/features/crm" },
      { name: "Unified inbox", free: "EMAIL", launch: "ALL CHANNELS", growth: "ALL CHANNELS", managed: "ALL CHANNELS", link: "/features/inbox" },
      { name: "Automations", free: "1 ACTIVE", launch: "UNLIMITED", growth: "UNLIMITED", managed: "UNLIMITED", link: "/features/automations" },
      { name: "Email & SMS marketing", free: false, launch: true, growth: true, managed: true, link: "/features/marketing" },
      { name: "Missed-call text-back", free: false, launch: true, growth: true, managed: true, link: "/features/conversation" },
      { name: "Review requests", free: false, launch: true, growth: true, managed: true, link: "/features/reviews" },
      { name: "Review responses managed for you", free: false, launch: false, growth: true, managed: true, link: "/features/reputation" },
      { name: "Social planner + Content AI", free: false, launch: false, growth: true, managed: true, link: "/ai/content" }
    ]
  },
  {
    group: "SHOP",
    rows: [
      { name: "Payments & invoicing", free: false, launch: true, growth: true, managed: true, link: "/features/payments" },
      { name: "Online store", free: false, launch: true, growth: true, managed: true, link: "/features/payments" },
      { name: "Funnels & landing pages", free: false, launch: true, growth: true, managed: true, link: "/features/funnels" }
    ]
  },
  {
    group: "FYNZ AI",
    rows: [
      { name: "Conversation AI", free: false, launch: false, growth: true, managed: true, link: "/ai/conversation" },
      { name: "Voice AI", free: false, launch: false, growth: false, managed: true, link: "/ai/voice" }
    ]
  },
  {
    group: "DONE FOR YOU",
    rows: [
      { name: "Concierge setup (48h)", free: false, launch: true, growth: true, managed: "WHITE-GLOVE" },
      { name: "Done-for-you campaigns", free: false, launch: false, growth: "1/MO", managed: "UNLIMITED", link: "/features/marketing" },
      { name: "Compliance handled", free: false, launch: false, growth: false, managed: true },
      { name: "Monthly revenue report", free: false, launch: false, growth: false, managed: true, link: "/features/reporting" }
    ]
  },
  {
    group: "OPS",
    rows: [
      { name: "Accounting & tax", free: "soon", launch: "soon", growth: "soon", managed: "soon", link: "/features/accounting" }
    ]
  },
  {
    group: "ADD-ONS",
    rows: [
      { name: "Fynz Social add-on", free: false, launch: "+$249/MO", growth: "+$249/MO", managed: "+$249/MO", link: "#fynz-social" }
    ]
  }
];

const FAQS = [
  {
    q: "Is the Free plan really free forever?",
    a: "Yes. No card required, no expiry, no countdown — it's a starter plan, not a trial. You get a real working setup: a 24/7 booking page, a 250-contact CRM, an email inbox, and one automation, for as long as you want them."
  },
  {
    q: "Do I need a card for the 14-day trial?",
    a: "Yes. Launch and Growth start with 14 days free, and billing begins when the trial ends — cancel anytime before then and you pay nothing. Your system is live the moment you sign up, so you can dive in right away — and if you'd rather not lift a finger, our team will set everything up for you within 48 hours."
  },
  {
    q: "What does concierge setup include?",
    a: "Within 48 hours of signing up, our team imports your contacts, puts your booking page live, turns on missed-call text-back, and switches on review requests. You start with a working system, not an empty one."
  },
  {
    q: "Is there an onboarding fee?",
    a: "Launch has a one-time $299 onboarding fee and Growth a one-time $499 fee — that's what funds the concierge setup. Both are waived when you choose annual billing."
  },
  {
    q: "I'm in Canada — what do I pay?",
    a: "Prices are listed in USD, and CAD billing is available at checkout for Canadian businesses. Payments you collect from your own customers are always settled in your local currency through Stripe, PayPal, or Square."
  },
  {
    q: "Can I cancel or change plans anytime?",
    a: "Yes. Upgrade, downgrade, or cancel from your account settings anytime — monthly plans stop at the end of the billing cycle, and annual plans keep running until the term ends. Your data stays exportable either way."
  },
  {
    q: "What is Fynz Social?",
    a: "A done-for-you social media add-on for any paid plan, at $249 per month. You take the pictures and videos, and our team creates and publishes 12–16 branded posts a month across your social profiles — with a monthly content calendar sent to you for approval."
  }
];

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  const getPrice = (plan: Plan) => {
    return billing === "monthly" ? plan.mPrice : plan.aPrice;
  };

  const getCap = (plan: Plan) => {
    if (plan.mPrice === 0) return plan.cap;
    return billing === "monthly" ? plan.mCap : plan.aCap;
  };

  const getCtaLink = (plan: Plan) => {
    // Onboarding links carry the billing toggle; demo links pass through.
    if (plan.ctaLink.startsWith("/onboarding") && plan.mPrice > 0) {
      return `${plan.ctaLink}&billing=${billing}`;
    }
    return plan.ctaLink;
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 text-center overflow-hidden border-b border-line-soft">
        <div className="absolute inset-0 bg-radial-[at_50%_0%] from-copper/10 via-transparent to-transparent pointer-events-none" />
        <div className="wrap max-w-4xl mx-auto px-6 relative z-10">
          <Chip className="mb-4 mx-auto">Pricing</Chip>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6">
            Simple pricing. <span className="text-copper">Whole platform</span>.
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            One subscription replaces your CRM, booking app, email tool, SMS platform, invoicing, and review manager. Start free — actually free — and grow into the rest.
          </p>

          {/* Billing Switch */}
          <div className="flex items-center gap-4 justify-center mt-10 font-display font-semibold text-sm">
            <span
              onClick={() => setBilling("monthly")}
              className={cn(
                "transition-colors duration-250 cursor-pointer select-none",
                billing === "monthly" ? "text-ink font-bold" : "text-faint"
              )}
            >
              Monthly
            </span>
            <button
              role="switch"
              aria-checked={billing === "annual"}
              onClick={() => setBilling(billing === "monthly" ? "annual" : "monthly")}
              className={cn(
                "relative w-14 h-7.5 rounded-full bg-navy-800 border border-white/10 transition-all duration-250 outline-none after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:w-5.5 after:h-5.5 after:rounded-full after:bg-copper after:transition-all after:duration-250 after:cubic-bezier(0.3,1.4,0.4,1) cursor-pointer",
                billing === "annual" ? "bg-copper-tint/30 border-copper/40 after:translate-x-[26px]" : ""
              )}
              aria-label="Toggle annual billing"
            />
            <span
              onClick={() => setBilling("annual")}
              className={cn(
                "transition-colors duration-250 cursor-pointer select-none flex items-center gap-2",
                billing === "annual" ? "text-ink font-bold" : "text-faint"
              )}
            >
              Annual
              <span className="font-mono text-[9px] tracking-wider bg-green/10 text-green border border-green/30 px-2 py-0.5 rounded-full uppercase shrink-0">2 MONTHS FREE</span>
            </span>
          </div>

          <div className="flex flex-col gap-1.5 items-center justify-center mt-6 font-mono text-[9.5px] tracking-wider text-faint">
            <span>PRICES IN USD · CAD BILLING AVAILABLE FOR CANADA</span>
          </div>
        </div>
      </section>

      {/* Plan Cards Grid */}
      <section className="py-16 md:py-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <p className="text-center text-muted text-sm md:text-base font-display font-semibold mb-10">
            Start your 14-day trial — your system is live instantly, and our team can set everything up for you within 48 hours.
          </p>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PLANS.map((plan, idx) => (
              <div
                key={idx}
                className={cn(
                  "group relative bg-navy-900 text-white border-none shadow-none p-8 rounded-[var(--r-lg)] flex flex-col justify-between transition-all duration-300 hover:border-copper/40 hover:-translate-y-1",
                  plan.popular && "border-copper/50 bg-gradient-to-b from-navy-800 to-navy-900"
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <>
                    <span className="absolute top-0 left-[14%] right-[14%] h-[2px] bg-gradient-to-r from-transparent via-copper to-transparent" />
                    <span className="absolute top-[-11px] left-1/2 -translate-x-1/2 font-mono text-[8px] tracking-widest bg-copper text-white px-3.5 py-1 rounded-full font-bold uppercase select-none">
                      MOST POPULAR
                    </span>
                  </>
                )}

                <div className="flex flex-col grow">
                  <span className={cn(
                    "font-mono text-[8.5px] tracking-wider px-2.5 py-1 rounded-md block w-fit mb-4 select-none",
                    plan.freeFlag ? "text-green bg-green/10 border border-green/30" : "invisible border border-transparent"
                  )}>
                    {plan.freeFlag || " "}
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-white mb-1.5">{plan.name}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed min-h-[48px] mb-6">{plan.who}</p>

                  <div className="flex items-baseline gap-1.5 border-b border-white/10 pb-4 mb-4">
                    {plan.from && (
                      <span className="font-mono text-[9px] text-slate-400 tracking-wider uppercase">FROM</span>
                    )}
                    <span className="font-mono text-copper text-lg font-bold">$</span>
                    <span className="font-mono text-3xl font-extrabold tracking-tight text-white">
                      {getPrice(plan)}
                    </span>
                    <span className="font-mono text-[9px] text-slate-400 tracking-wider uppercase">/MO</span>
                  </div>
                  <span className="font-mono text-[8.5px] tracking-wider text-slate-400 block min-h-[14px]">
                    {getCap(plan)}
                  </span>
                  {plan.note && (
                    <span className="font-mono text-[8.5px] tracking-wider text-slate-400 block mt-1.5">
                      {plan.note}
                    </span>
                  )}

                  <Button
                    className={cn(
                      "w-full mt-6 mb-8 py-6 font-semibold",
                      plan.popular ? "bg-copper hover:bg-copper/90 text-white" : "bg-white text-navy-900 hover:bg-slate-100 border-none"
                    )}
                    render={<Link href={getCtaLink(plan)} />}
                  >
                    {plan.cta}
                  </Button>

                  <ul className="space-y-3.5 text-xs text-slate-300">
                    {plan.features.map((feat, fidx) => (
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

          {/* Human-team banner */}
          <ScrollReveal>
            <div className="mt-10 bg-navy-900 text-white rounded-[var(--r-lg)] px-8 py-6 text-center">
              <p className="font-display font-semibold text-sm md:text-base">
                Real humans set you up and run your campaigns — included in every paid plan.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fynz Social Add-on */}
      <section id="fynz-social" className="py-16 md:py-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-navy-900 text-white rounded-[var(--r-lg)] p-8 md:p-12 flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
              <div className="max-w-2xl">
                <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">Add-on · Available on any paid plan</span>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mb-3">
                  Fynz Social — <span className="text-copper">$249/mo</span>
                </h2>
                <p className="text-slate-200 text-sm md:text-base font-semibold leading-relaxed mb-3">
                  You take the pictures and videos. We do the rest.
                </p>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                  Our team creates and publishes 12–16 branded posts per month across Instagram, Facebook, Google Business Profile, TikTok, LinkedIn, X and Pinterest — including seasonal posts and graphics matched to your brand, with a monthly content calendar sent for approval.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-copper hover:bg-copper/90 text-white font-semibold shrink-0"
                render={<Link href="/onboarding" />}
              >
                Add to any plan
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-24 bg-navy-900 text-white border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">Compare plans</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-4">
              Every feature, by <span className="text-copper">pillar</span>
            </h2>
            <p className="text-slate-300">
              Rows link to their feature pages. Accounting and tax arrive for all paid plans when they ship.
            </p>
          </div>

          <div className="overflow-x-auto scrollbar-thin">
            <div className="min-w-[820px]">
              {/* Table Head */}
              <div className="grid grid-cols-[2.1fr_1fr_1fr_1fr_1fr] border-b border-white/10 pb-4 sticky top-[72px] bg-navy-900 text-white z-10">
                <span />
                <span className="text-center font-display font-bold text-sm text-slate-200">
                  Free
                  <small className="block font-mono text-[9px] text-slate-400 font-normal mt-1">$0</small>
                </span>
                <span className="text-center font-display font-bold text-sm text-slate-200">
                  Launch
                  <small className="block font-mono text-[9px] text-slate-400 font-normal mt-1">
                    ${billing === "monthly" ? "97" : "81"}/MO
                  </small>
                </span>
                <span className="text-center font-display font-bold text-sm text-copper">
                  Growth
                  <small className="block font-mono text-[9px] text-copper/60 font-semibold mt-1">
                    ${billing === "monthly" ? "297" : "248"}/MO
                  </small>
                </span>
                <span className="text-center font-display font-bold text-sm text-slate-200">
                  Managed
                  <small className="block font-mono text-[9px] text-slate-400 font-normal mt-1">
                    FROM ${billing === "monthly" ? "697" : "581"}/MO
                  </small>
                </span>
              </div>

              {/* Table Body */}
              {COMPARISON_MATRIX.map((group, gidx) => (
                <div key={gidx} className="mb-4">
                  <div className="font-mono text-[9.5px] font-bold tracking-widest text-copper bg-navy-800/40 text-white px-3 py-2 border-b border-white/10 uppercase mt-4">
                    {group.group}
                  </div>
                  {group.rows.map((row, ridx) => (
                    <div
                      key={ridx}
                      className="grid grid-cols-[2.1fr_1fr_1fr_1fr_1fr] border-b border-white/10 py-3.5 hover:bg-white/[0.04] items-center text-xs"
                    >
                      <span className="font-display font-medium text-slate-300 hover:text-copper transition-colors">
                        {row.link ? <Link href={row.link}>{row.name}</Link> : row.name}
                      </span>

                      {/* Cell renderers */}
                      {[row.free, row.launch, row.growth, row.managed].map((cell, cidx) => {
                        const isGrowth = cidx === 2;
                        return (
                          <span
                            key={cidx}
                            className={cn(
                              "text-center font-mono text-[11px]",
                              isGrowth ? "text-copper font-semibold" : "text-slate-300"
                            )}
                          >
                            {cell === true ? (
                              <span className="text-copper text-xs">✓</span>
                            ) : cell === false ? (
                              <span className="text-slate-500">—</span>
                            ) : cell === "soon" ? (
                              <span className="font-mono text-[8px] tracking-wider text-slate-400 border border-dashed border-white/10 px-1.5 py-0.5 rounded uppercase">SOON</span>
                            ) : (
                              cell
                            )}
                          </span>
                        );
                      })}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-b border-line-soft">
        <div className="wrap max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">Questions</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Fair questions, straight <span className="text-copper">answers</span>
            </h2>
          </div>

          <Accordion className="bg-navy-800 border-white/10">
            {FAQS.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border-white/10">
                <AccordionTrigger className="font-display font-bold text-sm md:text-base text-white py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-xs md:text-sm leading-relaxed pb-6 pr-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final py-24 relative overflow-hidden text-center bg-radial-[at_bottom_center] from-copper/10 via-transparent to-transparent">
        <div className="wrap max-w-4xl mx-auto px-6 relative z-10">
          <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">Start today</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
            One bill. <span className="text-copper font-extrabold">Zero duct tape</span>.
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Start on Free, bring your bookings and leads over, and upgrade the day you want the team behind you. No card on Free, no contract, no eleventh subscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="/onboarding?plan=free" />}>
              Start free
            </Button>
            <Button size="lg" variant="outline" render={<Link href="#demo" />}>
              Book a demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
