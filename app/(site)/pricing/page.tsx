"use client";

import React from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup } from "@/components/animations";
import { Chip } from "@/components/shared";
import { Button, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  who: string;
  price: number;
  cap: string;
  cta: string;
  ctaLink: string;
  popular: boolean;
  freeFlag?: string;
  features: string[];
};

const PLANS: Plan[] = [
  {
    name: "Free",
    who: "See the revenue you're missing — before you spend a dollar.",
    price: 0,
    cap: "FREE. FOREVER. NO CARD.",
    cta: "Start free",
    ctaLink: "/onboarding?plan=free",
    popular: false,
    freeFlag: "FREE FOREVER · NOT A TRIAL",
    features: [
      "See your missed-revenue dashboard — missed calls, lapsed clients, and empty slots",
      "Your own numbers, in dollars — not industry averages",
      "A diagnostic, not a trial — it shows you what's leaking",
      "Upgrade when you're ready to recover it"
    ]
  },
  {
    name: "Starter",
    who: "The operational core — set up for you in 48 hours.",
    price: 97,
    cap: "MONTH-TO-MONTH · CANCEL ANYTIME",
    cta: "Book a demo",
    ctaLink: "/demo",
    popular: false,
    features: [
      "Full CRM & pipelines",
      "48-hour concierge setup — our team imports your contacts and turns everything on",
      "24/7 online booking & smart calendar",
      "Payments, invoicing & online store",
      "Missed-call text-back & base automations",
      "Review requests on autopilot",
      "Business reporting dashboard"
    ]
  },
  {
    name: "Growth",
    who: "Everything in Starter, plus the marketing engine to grow it.",
    price: 197,
    cap: "MONTH-TO-MONTH · CANCEL ANYTIME",
    cta: "Book a demo",
    ctaLink: "/demo",
    popular: true,
    features: [
      "Everything in Starter",
      "Email marketing & campaigns",
      "Social planner",
      "Blogs & surveys",
      "Documents & contracts",
      "AI capabilities available as add-ons",
      "Priority support"
    ]
  },
  {
    name: "Managed",
    who: "Everything in Growth, plus a team that runs it for you.",
    price: 397,
    cap: "MONTH-TO-MONTH · CANCEL ANYTIME",
    cta: "Book a demo",
    ctaLink: "/demo",
    popular: false,
    features: [
      "Everything in Growth",
      "Done-for-you campaign management",
      "Monitoring & live escalation",
      "Compliance handled for you — texting registration, consent, and opt-outs managed"
    ]
  }
];

type Cell = string | boolean;

type MatrixRow = {
  name: string;
  free: Cell;
  starter: Cell;
  growth: Cell;
  managed: Cell;
  link?: string;
};

const COMPARISON_MATRIX: { group: string; rows: MatrixRow[] }[] = [
  {
    group: "DIAGNOSTIC",
    rows: [
      { name: "Missed-revenue dashboard", free: true, starter: true, growth: true, managed: true, link: "/features/reporting" }
    ]
  },
  {
    group: "GROW",
    rows: [
      { name: "CRM & pipelines", free: false, starter: true, growth: true, managed: true, link: "/features/crm" },
      { name: "Unified inbox", free: false, starter: true, growth: true, managed: true, link: "/features/inbox" },
      { name: "Base automations", free: false, starter: true, growth: true, managed: true, link: "/features/automations" },
      { name: "Missed-call text-back", free: false, starter: true, growth: true, managed: true, link: "/ai/conversation" },
      { name: "Review requests", free: false, starter: true, growth: true, managed: true, link: "/ai/reviews" },
      { name: "Email marketing & campaigns", free: false, starter: false, growth: true, managed: true, link: "/features/marketing" },
      { name: "Social planner", free: false, starter: false, growth: true, managed: true, link: "/ai/content" },
      { name: "Blogs & surveys", free: false, starter: false, growth: true, managed: true },
      { name: "Documents & contracts", free: false, starter: false, growth: true, managed: true }
    ]
  },
  {
    group: "SHOP",
    rows: [
      { name: "Payments & invoicing", free: false, starter: true, growth: true, managed: true, link: "/features/payments" },
      { name: "Online store", free: false, starter: true, growth: true, managed: true, link: "/features/payments" }
    ]
  },
  {
    group: "DONE FOR YOU",
    rows: [
      { name: "Concierge setup (48h)", free: false, starter: true, growth: true, managed: "WHITE-GLOVE" },
      { name: "Campaign management", free: false, starter: false, growth: false, managed: true, link: "/features/marketing" },
      { name: "Monitoring & live escalation", free: false, starter: false, growth: false, managed: true },
      { name: "Compliance handled", free: false, starter: false, growth: false, managed: true }
    ]
  },
  {
    group: "OPS",
    rows: [
      { name: "Reporting dashboard", free: "DIAGNOSTIC", starter: true, growth: true, managed: true, link: "/features/reporting" },
      { name: "Accounting & tax", free: "soon", starter: "soon", growth: "soon", managed: "soon", link: "/features/accounting" }
    ]
  },
  {
    group: "ADD-ONS",
    rows: [
      { name: "Fynz Social add-on", free: false, starter: "+$249/MO", growth: "+$249/MO", managed: "+$249/MO", link: "#fynz-social" },
      { name: "AI capabilities", free: false, starter: "ADD-ON", growth: "ADD-ON", managed: "ADD-ON", link: "/ai" }
    ]
  }
];

const FAQS = [
  {
    q: "Is the Free plan really free forever?",
    a: "Yes. No card required, no expiry, no countdown. The Free plan is a diagnostic, not a trial and not a stripped-down CRM: it shows you the revenue your business is currently missing — missed calls, lapsed clients, empty slots — in your own dollars. When you're ready to recover that revenue, you upgrade."
  },
  {
    q: "Is there a contract?",
    a: "No contract. Every plan is month-to-month with a 30-day money-back guarantee, and you can cancel anytime right from your dashboard."
  },
  {
    q: "What does concierge setup include?",
    a: "Within 48 hours of signing up, our team imports your contacts, puts your booking page live, turns on missed-call text-back, and switches on review requests. You start with a working system, not an empty one."
  },
  {
    q: "Are there setup fees?",
    a: "No. There are no setup or onboarding fees on any plan — the monthly price you see is the whole price."
  },
  {
    q: "I'm in Canada — what do I pay?",
    a: "All FYNZ prices are in USD for everyone, including Canadian businesses — there is no separate CAD price or CAD billing option. The payments you collect from your own customers still settle in your local currency through Stripe, PayPal, or Square."
  },
  {
    q: "Can I cancel or change plans anytime?",
    a: "Yes. Upgrade, downgrade, or cancel from your dashboard anytime — plans are month-to-month and stop at the end of the billing cycle. Your data stays exportable either way."
  },
  {
    q: "What is Fynz Social?",
    a: "A done-for-you social media add-on for any paid plan, at $249 per month. You take the pictures and videos, and our team creates and publishes 12–16 branded posts a month across your social profiles — with a monthly content calendar sent to you for approval."
  }
];

export default function PricingPage() {
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
            One subscription replaces your CRM, booking app, email tool, SMS platform, invoicing, and review manager. Start free — see what you&apos;re missing — and upgrade into the rest.
          </p>

          <div className="flex flex-col gap-1.5 items-center justify-center mt-8 font-mono text-[9.5px] tracking-wider text-faint">
            <span>PRICES IN USD</span>
          </div>
        </div>
      </section>

      {/* Plan Cards Grid */}
      <section className="py-16 md:py-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <p className="text-center text-muted text-sm md:text-base font-display font-semibold mb-3">
            Every paid plan is set up for you — live within 48 hours.
          </p>
          <p className="text-center font-mono text-[10px] tracking-wider text-copper uppercase mb-10">
            30-day money-back guarantee · month-to-month · cancel anytime
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
                    {plan.freeFlag || " "}
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-white mb-1.5">{plan.name}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed min-h-[48px] mb-6">{plan.who}</p>

                  <div className="flex items-baseline gap-1.5 border-b border-white/10 pb-4 mb-4">
                    <span className="font-mono text-copper text-lg font-bold">$</span>
                    <span className="font-mono text-3xl font-extrabold tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span className="font-mono text-[9px] text-slate-400 tracking-wider uppercase">USD/MO</span>
                  </div>
                  <span className="font-mono text-[8.5px] tracking-wider text-slate-400 block min-h-[14px]">
                    {plan.cap}
                  </span>

                  <Button
                    className={cn(
                      "w-full mt-6 mb-8 py-6 font-semibold",
                      plan.popular ? "bg-copper hover:bg-copper/90 text-white" : "bg-white text-navy-900 hover:bg-slate-100 border-none"
                    )}
                    render={<Link href={plan.ctaLink} />}
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
                Real humans set you up on every paid plan — and on Managed, they run your campaigns too.
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
                  Fynz Social — <span className="text-copper">$249 USD/mo</span>
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
                render={<Link href="/demo" />}
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
                  Starter
                  <small className="block font-mono text-[9px] text-slate-400 font-normal mt-1">$97 USD/MO</small>
                </span>
                <span className="text-center font-display font-bold text-sm text-copper">
                  Growth
                  <small className="block font-mono text-[9px] text-copper/60 font-semibold mt-1">$197 USD/MO</small>
                </span>
                <span className="text-center font-display font-bold text-sm text-slate-200">
                  Managed
                  <small className="block font-mono text-[9px] text-slate-400 font-normal mt-1">$397 USD/MO</small>
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
                      {[row.free, row.starter, row.growth, row.managed].map((cell, cidx) => {
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
          <p className="text-muted text-lg mb-4 max-w-xl mx-auto leading-relaxed">
            Start on Free and see what you&apos;re missing, or book a demo and go live in 48 hours. No card on Free, no contract, no eleventh subscription.
          </p>
          <p className="font-mono text-[10px] tracking-wider text-copper uppercase mb-8">
            30-day money-back guarantee · month-to-month · cancel anytime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="/onboarding?plan=free" />}>
              Start free
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/demo" />}>
              Book a demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
