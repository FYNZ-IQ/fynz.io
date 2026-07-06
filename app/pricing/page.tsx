"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup } from "@/components/animations";
import { Chip } from "@/components/shared";
import { Button, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui";
import { cn } from "@/lib/utils";

type BillingCycle = "monthly" | "annual";

const PLANS = [
  {
    name: "Free",
    who: "For getting your first bookings and leads in one place.",
    mPrice: 0,
    aPrice: 0,
    cap: "FREE. FOREVER. NO CARD.",
    cta: "Start free",
    ctaLink: "#start",
    popular: false,
    freeFlag: "FREE FOREVER · NOT A TRIAL",
    features: [
      "24/7 booking page + QR code",
      "CRM with 500 contacts",
      "SMS & email inbox",
      "3 active automations",
      "Payments & invoicing"
    ]
  },
  {
    name: "Start",
    who: "For solo owners replacing their first few subscriptions.",
    mPrice: 29,
    aPrice: 23,
    mCap: "BILLED MONTHLY · CANCEL ANYTIME",
    aCap: "PER MONTH · BILLED ANNUALLY",
    cta: "Choose Start",
    ctaLink: "#start",
    popular: false,
    features: [
      "Everything in Free",
      "2,500 contacts · 5 staff",
      "All inbox channels + IG & FB",
      "Email & SMS marketing",
      "Online store + e-signatures",
      "Reviews & Content AI"
    ]
  },
  {
    name: "Grow",
    who: "For teams ready to automate the whole customer journey.",
    mPrice: 79,
    aPrice: 63,
    mCap: "BILLED MONTHLY · CANCEL ANYTIME",
    aCap: "PER MONTH · BILLED ANNUALLY",
    cta: "Choose Grow",
    ctaLink: "#start",
    popular: true,
    features: [
      "Everything in Start",
      "10,000 contacts · 15 staff",
      "Unlimited automations & funnels",
      "Conversation AI included",
      "Memberships, courses & communities",
      "Up to 3 locations"
    ]
  },
  {
    name: "Scale",
    who: "For multi-location operators running everything on FYNZ.",
    mPrice: 149,
    aPrice: 119,
    mCap: "BILLED MONTHLY · CANCEL ANYTIME",
    aCap: "PER MONTH · BILLED ANNUALLY",
    cta: "Talk to us",
    ctaLink: "#demo",
    popular: false,
    features: [
      "Everything in Grow",
      "Unlimited contacts, staff & locations",
      "Full AI team — Voice AI included",
      "Multi-location rollups",
      "Priority support & onboarding"
    ]
  }
];

const COMPARISON_MATRIX = [
  {
    group: "GROW",
    rows: [
      { name: "CRM contacts", free: "500", start: "2,500", grow: "10,000", scale: "Unlimited", link: "/features/crm" },
      { name: "Unified inbox", free: "SMS + EMAIL", start: "+ IG & FB", grow: "ALL CHANNELS", scale: "ALL CHANNELS", link: "/features/inbox" },
      { name: "Email & SMS marketing", free: false, start: true, grow: true, scale: true, link: "/features/marketing" },
      { name: "Automations & workflows", free: "3 ACTIVE", start: "10 ACTIVE", grow: "UNLIMITED", scale: "UNLIMITED", link: "/features/automations" },
      { name: "Funnels & landing pages", free: "1 PAGE", start: "5 PAGES", grow: "UNLIMITED", scale: "UNLIMITED", link: "/features/funnels" },
      { name: "Reputation & reviews", free: false, start: true, grow: true, scale: true, link: "/features/reputation" },
      { name: "Social planner", free: false, start: true, grow: true, scale: true, link: "/features/social-planner" }
    ]
  },
  {
    group: "SCHEDULE",
    rows: [
      { name: "24/7 booking page", free: true, start: true, grow: true, scale: true, link: "/features/booking-core" },
      { name: "Staff members", free: "1", start: "5", grow: "15", scale: "UNLIMITED", link: "/features/team" },
      { name: "Reminders", free: "EMAIL", start: "SMS + EMAIL", grow: "SMS + EMAIL", scale: "SMS + EMAIL", link: "/features/reminders" },
      { name: "Booking channels", free: "PAGE + QR", start: "ALL", grow: "ALL", scale: "ALL", link: "/features/booking-channels" },
      { name: "Multi-location", free: false, start: false, grow: "UP TO 3", scale: "UNLIMITED", link: "/features/multi-location" }
    ]
  },
  {
    group: "SHOP",
    rows: [
      { name: "Payments & invoicing", free: true, start: true, grow: true, scale: true, link: "/features/payments" },
      { name: "Estimates & e-signatures", free: false, start: true, grow: true, scale: true, link: "/features/invoicing" },
      { name: "Online store", free: false, start: true, grow: true, scale: true, link: "/features/store" },
      { name: "Memberships & courses", free: false, start: false, grow: true, scale: true, link: "/features/memberships" },
      { name: "Communities", free: false, start: false, grow: true, scale: true, link: "/features/communities" }
    ]
  },
  {
    group: "OPS",
    rows: [
      { name: "Reporting & dashboards", free: "BASIC", start: true, grow: "ADVANCED", scale: "ADVANCED", link: "/features/reporting" },
      { name: "Team roles & permissions", free: false, start: true, grow: true, scale: true, link: "/features/roles" },
      { name: "Accounting & tax", free: "soon", start: "soon", grow: "soon", scale: "soon", link: "/features/accounting" },
      { name: "Multi-location rollups", free: false, start: false, grow: false, scale: "soon", link: "/features/multi-location" }
    ]
  },
  {
    group: "FYNZ AI",
    rows: [
      { name: "Conversation AI", free: false, start: "ADD-ON", grow: true, scale: true, link: "/ai/conversation" },
      { name: "Voice AI", free: false, start: false, grow: "ADD-ON", scale: true, link: "/ai/voice" },
      { name: "Reviews AI", free: false, start: true, grow: true, scale: true, link: "/ai/reviews" },
      { name: "Content AI", free: false, start: true, grow: true, scale: true, link: "/ai/content" }
    ]
  }
];

const FAQS = [
  {
    q: "Is the Free plan really free forever?",
    a: "Yes — it's a plan, not a trial. No card required, no 14-day countdown. It covers a real single-person business: bookings, a small CRM, an inbox, and payments. You only upgrade when you want more capacity or more automation."
  },
  {
    q: "Do you charge per staff member?",
    a: "No per-seat surprises. Each plan includes a set number of staff members (Free covers you; Scale is unlimited), and everyone on your team gets their own login with role-based permissions at no extra cost per seat."
  },
  {
    q: "I'm in Canada — what do I pay?",
    a: "Prices are listed in USD, and CAD billing is available at checkout for Canadian businesses. Payments you collect from your own customers are always settled in your local currency through Stripe, PayPal, or Square."
  },
  {
    q: "Can I cancel or change plans anytime?",
    a: "Yes. Upgrade, downgrade, or cancel from your account settings anytime — monthly plans stop at the end of the billing cycle, and annual plans keep running until the term ends. Your data stays exportable either way."
  }
];

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  const getPrice = (plan: typeof PLANS[0]) => {
    return billing === "monthly" ? plan.mPrice : plan.aPrice;
  };

  const getCap = (plan: typeof PLANS[0]) => {
    if (plan.mPrice === 0) return plan.cap;
    return billing === "monthly" ? plan.mCap : plan.aCap;
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
                "relative w-14 h-7.5 rounded-full bg-navy-800 border border-line transition-all duration-250 outline-none after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:w-5.5 after:h-5.5 after:rounded-full after:bg-copper after:transition-all after:duration-250 after:cubic-bezier(0.3,1.4,0.4,1) cursor-pointer",
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
              <span className="font-mono text-[9px] tracking-wider bg-green/10 text-green border border-green/30 px-2 py-0.5 rounded-full uppercase shrink-0">SAVE ~20%</span>
            </span>
          </div>

          <div className="flex flex-col gap-1.5 items-center justify-center mt-6 font-mono text-[9.5px] tracking-wider text-faint">
            <span>PRICES IN USD · CAD BILLING AVAILABLE FOR CANADA</span>
            <span className="text-copper/90">PRICING PROVISIONAL — FINAL PLANS &amp; GATING TBD</span>
          </div>
        </div>
      </section>

      {/* Plan Cards Grid */}
      <section className="py-16 md:py-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PLANS.map((plan, idx) => (
              <div
                key={idx}
                className={cn(
                  "group relative bg-white text-slate-900 border border-slate-200 shadow-sm p-8 rounded-[var(--r-lg)] flex flex-col justify-between transition-all duration-300 hover:border-copper/40 hover:-translate-y-1 dark:bg-navy-900 dark:text-white dark:border-none dark:shadow-none",
                  plan.popular && "border-copper/50 dark:border-copper/50 shadow-xl bg-gradient-to-b from-white to-slate-50/50 dark:from-navy-800 dark:to-navy-900"
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
                    {plan.freeFlag || "PLACEHOLDER"}
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white mb-1.5">{plan.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed min-h-[48px] mb-6">{plan.who}</p>
                  
                  <div className="flex items-baseline gap-1.5 border-b border-slate-200 dark:border-line-soft/30 pb-4 mb-4">
                    <span className="font-mono text-copper text-lg font-bold">$</span>
                    <span className="font-mono text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                      {getPrice(plan)}
                    </span>
                    <span className="font-mono text-[9px] text-slate-500 dark:text-slate-400 tracking-wider uppercase">/MO</span>
                  </div>
                  <span className="font-mono text-[8.5px] tracking-wider text-slate-500 dark:text-slate-400 block min-h-[14px]">
                    {getCap(plan)}
                  </span>

                  <Button
                    className={cn(
                      "w-full mt-6 mb-8 py-6 font-semibold",
                      plan.popular ? "bg-copper hover:bg-copper/90 text-white" : "bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 dark:bg-white dark:text-navy-900 dark:hover:bg-slate-100 dark:border-none"
                    )}
                    render={<Link href={plan.ctaLink} />}
                  >
                    {plan.cta}
                  </Button>

                  <ul className="space-y-3.5 text-xs text-slate-600 dark:text-slate-400">
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
              Every row links to its feature page. Accounting and tax arrive for all paid plans when they ship.
            </p>
          </div>

          <div className="overflow-x-auto scrollbar-thin">
            <div className="min-w-[820px]">
              {/* Table Head */}
              <div className="grid grid-cols-[2.1fr_1fr_1fr_1fr_1fr] border-b border-line pb-4 sticky top-[72px] bg-navy-900 text-white z-10">
                <span />
                <span className="text-center font-display font-bold text-sm text-slate-200">
                  Free
                  <small className="block font-mono text-[9px] text-slate-400 font-normal mt-1">$0</small>
                </span>
                <span className="text-center font-display font-bold text-sm text-slate-200">
                  Start
                  <small className="block font-mono text-[9px] text-slate-400 font-normal mt-1">
                    ${billing === "monthly" ? "29" : "23"}/MO
                  </small>
                </span>
                <span className="text-center font-display font-bold text-sm text-copper">
                  Grow
                  <small className="block font-mono text-[9px] text-copper/60 font-semibold mt-1">
                    ${billing === "monthly" ? "79" : "63"}/MO
                  </small>
                </span>
                <span className="text-center font-display font-bold text-sm text-slate-200">
                  Scale
                  <small className="block font-mono text-[9px] text-slate-400 font-normal mt-1">
                    ${billing === "monthly" ? "149" : "119"}/MO
                  </small>
                </span>
              </div>

              {/* Table Body */}
              {COMPARISON_MATRIX.map((group, gidx) => (
                <div key={gidx} className="mb-4">
                  <div className="font-mono text-[9.5px] font-bold tracking-widest text-copper bg-navy-800/40 text-white px-3 py-2 border-b border-line-soft/40 uppercase mt-4">
                    {group.group}
                  </div>
                  {group.rows.map((row, ridx) => (
                    <div
                      key={ridx}
                      className="grid grid-cols-[2.1fr_1fr_1fr_1fr_1fr] border-b border-line-soft/40 py-3.5 hover:bg-wash/30 items-center text-xs"
                    >
                      <span className="font-display font-medium text-slate-300 hover:text-copper transition-colors">
                        <Link href={row.link}>{row.name}</Link>
                      </span>

                      {/* Cell renderers */}
                      {[row.free, row.start, row.grow, row.scale].map((cell, cidx) => {
                        const isGrow = cidx === 2;
                        return (
                          <span
                            key={cidx}
                            className={cn(
                              "text-center font-mono text-[11px]",
                              isGrow ? "text-copper font-semibold" : "text-slate-300"
                            )}
                          >
                            {cell === true ? (
                              <span className="text-copper text-xs">✓</span>
                            ) : cell === false ? (
                              <span className="text-slate-500">—</span>
                            ) : cell === "soon" ? (
                              <span className="font-mono text-[8px] tracking-wider text-slate-400 border border-dashed border-line-soft px-1.5 py-0.5 rounded uppercase">SOON</span>
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

          <Accordion>
            {FAQS.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="font-display font-bold text-sm md:text-base text-ink py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted text-xs md:text-sm leading-relaxed pb-6 pr-6">
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
            Start on Free, bring your bookings and leads over, and upgrade the day you need more. No card, no contract, no eleventh subscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold">
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
