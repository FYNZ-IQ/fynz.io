"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup } from "@/components/animations";
import { Chip } from "@/components/shared";
import { Button, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Types & constants                                                    */
/* ------------------------------------------------------------------ */

type BillingCycle = "monthly" | "annual";

type Industry = {
  slug: string;
  label: string;
  /** Copy example woven into standard cards — prices never change. */
  example: string;
  emergency?: boolean;
};

const INDUSTRIES: Industry[] = [
  { slug: "salons", label: "Salons & barbershops", example: "recover lapsed clients" },
  { slug: "clinics-dental", label: "Clinics & dental", example: "fill no-show slots" },
  { slug: "fitness", label: "Fitness & gyms", example: "recover missed bookings" },
  { slug: "restaurants", label: "Restaurants", example: "fill slow-night tables" },
  { slug: "retail", label: "Retail & boutiques", example: "bring lapsed customers back" },
  { slug: "home-services", label: "Home services", example: "turn missed calls into booked jobs" },
  { slug: "emergency-restoration", label: "Emergency restoration", example: "", emergency: true }
];

type Plan = {
  id: string;
  name: string;
  tag?: string;
  badge?: string;
  monthly: number;
  body?: string;
  prelude?: string;
  features?: string[];
  hasVoiceToggle?: boolean;
  finePrint: string;
  cta: string;
  ctaHref: string;
  popular?: boolean;
  anchorStrip?: string;
  /** Show industry example line when a non-emergency industry is selected. */
  personalize?: boolean;
};

const VOICE_MONTHLY = 100;
const VOICE_APPEND =
  "24/7 Voice AI answers every call, books the appointment, routes and records per your local consent rules. 500 AI-voice minutes/mo included.";

const STANDARD_PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    tag: "See what you're losing",
    monthly: 0,
    body:
      "Your locked dashboard: the revenue you missed last month — missed calls, lapsed clients, empty slots — in dollars.",
    finePrint: "No setup fee · No usage charges.",
    cta: "See what you missed",
    ctaHref: "#start"
  },
  {
    id: "starter",
    name: "Starter",
    monthly: 97,
    features: [
      "CRM & pipelines",
      "Unified inbox (SMS, email, socials)",
      "24/7 online booking",
      "Payments & invoicing",
      "Review engine",
      "Dashboards"
    ],
    finePrint:
      "One-time setup $197 — your system is live instantly, and onboarding help from our team is included for life. Messaging usage billed at published rates.",
    cta: "Start 14-day trial",
    ctaHref: "#start",
    personalize: true
  },
  {
    id: "growth",
    name: "Growth",
    badge: "Most popular",
    monthly: 197,
    prelude: "Everything in Starter, plus:",
    features: [
      "Full automation library",
      "Conversation AI (replies to every SMS/DM/webchat)",
      "Reviews AI",
      "Content AI",
      "Missed-call text-back",
      "750 SMS segments + 10,000 emails/mo included"
    ],
    hasVoiceToggle: true,
    finePrint:
      "Setup $197 · Overages: $0.03/SMS segment · $2 per 1,000 extra emails · $0.35/AI-voice minute (with Voice add-on).",
    cta: "Start 14-day trial",
    ctaHref: "#start",
    popular: true,
    personalize: true
  },
  {
    id: "managed",
    name: "Managed",
    monthly: 397,
    prelude: "Everything in Growth, plus:",
    features: [
      "Done-for-you setup & configuration",
      "Monthly monitoring & tuning by a dedicated team",
      "Campaign management",
      "Monthly recovered-revenue report",
      "2,000 SMS segments + 25,000 emails/mo"
    ],
    hasVoiceToggle: true,
    finePrint: "Setup $197 · Same overage rates · Multi-location: 20% off additional locations.",
    cta: "Book a demo",
    ctaHref: "#demo",
    personalize: true
  }
];

const EMERGENCY_PLANS: Plan[] = [
  {
    id: "e-free",
    name: "Free",
    tag: "See what you're losing",
    monthly: 0,
    body: "Your locked dashboard: last month's missed after-hours calls and what they were worth.",
    finePrint: "No setup fee · No usage charges.",
    cta: "See what you missed",
    ctaHref: "#start"
  },
  {
    id: "e-growth",
    name: "Emergency Growth",
    monthly: 297,
    features: [
      "24/7 AI voice emergency answering",
      "Emergency dispatch workflow",
      "Missed-call text-back",
      "Full CRM, booking, review engine",
      "Escalation to your cell",
      "500 AI-voice minutes + 750 SMS segments + 10,000 emails/mo"
    ],
    finePrint:
      "One-time setup $497 — live and answering within 48 hours · Overages: $0.35/AI-voice min · $0.03/SMS segment · $2 per 1,000 extra emails.",
    cta: "Start 14-day trial",
    ctaHref: "#start"
  },
  {
    id: "e-managed",
    name: "Emergency Managed",
    badge: "Most popular",
    monthly: 797,
    prelude: "Everything in Emergency Growth, plus:",
    features: [
      "Insurance-claim intake — carrier, policy, adjuster, loss category, delivered as a clean claim packet",
      "24/7 live human escalation desk",
      "Saved-job alerts with dollar values",
      "Done-for-you setup, script tuning & monthly monitoring",
      "1,500 AI-voice minutes + 2,000 SMS segments + 25,000 emails/mo"
    ],
    anchorStrip:
      "A dispatcher costs ~$3,500/mo. One exclusive lead costs $300–$750. One insurance job is worth $3,500–$20,000.",
    finePrint: "One-time setup $497 · Multi-location: 20% off additional locations · Same overage rates.",
    cta: "Book a demo",
    ctaHref: "#demo",
    popular: true
  }
];

/* ------------------------------------------------------------------ */
/* Comparison table data (both views)                                   */
/* ------------------------------------------------------------------ */

type CompareCell = boolean | string;

type CompareGroup = { group: string; rows: { name: string; cells: CompareCell[] }[] };

type CompareView = {
  columns: { name: string; monthly: number; highlight?: boolean }[];
  groups: CompareGroup[];
};

const STANDARD_COMPARE: CompareView = {
  columns: [
    { name: "Free", monthly: 0 },
    { name: "Starter", monthly: 97 },
    { name: "Growth", monthly: 197, highlight: true },
    { name: "Managed", monthly: 397 }
  ],
  groups: [
    {
      group: "Grow",
      rows: [
        { name: "CRM & pipelines", cells: [false, true, true, true] },
        { name: "Unified inbox (SMS, email, socials)", cells: [false, true, true, true] },
        { name: "Review engine", cells: [false, true, true, true] },
        { name: "Missed-call text-back", cells: [false, false, true, true] },
        { name: "Full automation library", cells: [false, false, true, true] },
        { name: "Campaign management", cells: [false, false, false, true] }
      ]
    },
    {
      group: "Schedule",
      rows: [{ name: "24/7 online booking", cells: [false, true, true, true] }]
    },
    {
      group: "Shop",
      rows: [{ name: "Payments & invoicing", cells: [false, true, true, true] }]
    },
    {
      group: "Ops",
      rows: [
        { name: "Dashboards", cells: ["Locked preview", true, true, true] },
        {
          name: "Included messaging volume",
          cells: [false, "Pay-as-you-go", "750 SMS · 10,000 emails", "2,000 SMS · 25,000 emails"]
        },
        { name: "Done-for-you setup & monthly tuning", cells: [false, false, false, true] },
        { name: "Monthly recovered-revenue report", cells: [false, false, false, true] }
      ]
    },
    {
      group: "AI",
      rows: [
        { name: "Conversation AI", cells: [false, false, true, true] },
        { name: "Reviews AI", cells: [false, false, true, true] },
        { name: "Content AI", cells: [false, false, true, true] },
        { name: "AI Voice & Call Management", cells: [false, false, "Add-on", "Add-on"] }
      ]
    }
  ]
};

const EMERGENCY_COMPARE: CompareView = {
  columns: [
    { name: "Free", monthly: 0 },
    { name: "Emergency Growth", monthly: 297 },
    { name: "Emergency Managed", monthly: 797, highlight: true }
  ],
  groups: [
    {
      group: "Answering",
      rows: [
        { name: "24/7 AI voice emergency answering", cells: [false, true, true] },
        { name: "Missed-call text-back", cells: [false, true, true] },
        { name: "Escalation to your cell", cells: [false, true, true] },
        { name: "Live human escalation desk", cells: [false, false, true] }
      ]
    },
    {
      group: "Dispatch & CRM",
      rows: [
        { name: "Emergency dispatch workflow", cells: [false, true, true] },
        { name: "Full CRM, booking, review engine", cells: [false, true, true] },
        { name: "Insurance claim intake & packet", cells: [false, false, true] },
        { name: "Saved-job dollar alerts", cells: [false, false, true] }
      ]
    },
    {
      group: "Ops",
      rows: [
        { name: "Missed after-hours call dashboard", cells: ["Locked preview", true, true] },
        {
          name: "Included volume",
          cells: [false, "500 min · 750 SMS · 10,000 emails", "1,500 min · 2,000 SMS · 25,000 emails"]
        },
        { name: "Done-for-you setup, script tuning & monitoring", cells: [false, false, true] }
      ]
    }
  ]
};

/* ------------------------------------------------------------------ */
/* FAQ                                                                  */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: "What happens after the 14-day trial?",
    a: "Your card on file is charged at the plan price when the trial ends. You can cancel anytime during the trial from your account settings — no charge."
  },
  {
    q: "Do I need a card for the 14-day trial?",
    a: "Yes. Starter and Growth start with 14 days free, and billing begins when the trial ends — cancel anytime before then and you pay nothing. Your system is live the moment you sign up, so you can dive in right away — and full onboarding help from our team is included for life, whenever you want it."
  },
  {
    q: "What happens if I go over my included usage?",
    a: "Overages are billed at published rates: $0.03 per SMS segment · $2 per 1,000 extra emails · $0.35 per AI-voice minute."
  },
  {
    q: "Can I cancel anytime?",
    a: "Monthly plans: yes — cancellation takes effect at the end of your billing period. Annual plans run to the end of their term; contact us about billing pauses."
  },
  {
    q: "What about taxes?",
    a: "Prices are in USD. Canadian customers: applicable taxes are added at checkout."
  },
  {
    q: "What does setup include?",
    a: "Your system and pages are live the instant you sign up. Setup covers number provisioning, messaging registration, and industry configuration — and onboarding help from our team stays included for life, not a one-time window."
  },
  {
    q: "Do you offer discounts?",
    a: "Annual billing = 2 months free. Additional locations on Managed plans = 20% off. Nothing else."
  }
];

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */

const fmt = (n: number) => n.toLocaleString("en-US");

/** "$1,970/yr — $197 value/mo, 2 months free" for annual; "$197/mo" for monthly. */
function priceParts(monthlyTotal: number, billing: BillingCycle) {
  if (billing === "monthly") {
    return { big: `$${fmt(monthlyTotal)}`, suffix: "/mo", sub: null as string | null };
  }
  return {
    big: `$${fmt(monthlyTotal * 10)}`,
    suffix: "/yr",
    sub: monthlyTotal === 0 ? null : `— $${fmt(monthlyTotal)} value/mo, 2 months free`
  };
}

/** Add-on price string honoring the billing toggle (annual = 10x monthly). */
function addOnPrice(monthly: number, billing: BillingCycle) {
  return billing === "monthly" ? `$${fmt(monthly)}/mo` : `$${fmt(monthly * 10)}/yr`;
}

/* ------------------------------------------------------------------ */
/* Hidden proof-stats slot                                              */
/* ------------------------------------------------------------------ */

// Do not populate without documented source data and, for testimonials, signed releases.
function ProofStats(props: {
  metroMissedCallStat?: string;
  customerCount?: string;
  attributedRevenueTotal?: string;
  testimonials?: unknown[];
}) {
  void props;
  return null;
}

/* ------------------------------------------------------------------ */
/* Plan card                                                            */
/* ------------------------------------------------------------------ */

function PlanCard({
  plan,
  billing,
  voiceOn,
  onVoiceToggle,
  industryExample,
  ctaHref
}: {
  plan: Plan;
  billing: BillingCycle;
  voiceOn?: boolean;
  onVoiceToggle?: () => void;
  industryExample?: { label: string; example: string } | null;
  ctaHref?: string;
}) {
  const total = plan.monthly + (plan.hasVoiceToggle && voiceOn ? VOICE_MONTHLY : 0);
  const price = priceParts(total, billing);

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-xl bg-[#0D2154] text-[#F5F0EB] p-7 border transition-transform duration-300 hover:-translate-y-1",
        plan.popular ? "border-[#C8895A]" : "border-transparent"
      )}
    >
      {plan.badge && (
        <span className="absolute top-[-11px] left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[11px] tracking-widest uppercase bg-[#C8895A] text-[#0D2154] font-bold px-3.5 py-1 rounded-full select-none">
          ★ {plan.badge}
        </span>
      )}

      {plan.tag && (
        <span className="font-mono text-[11px] tracking-wider uppercase text-[#C8895A] block mb-2">{plan.tag}</span>
      )}
      <h3 className="font-display font-extrabold text-xl mb-3">{plan.name}</h3>

      {/* Price */}
      <div className="border-b border-white/10 pb-4 mb-4">
        <div className="flex items-baseline gap-1">
          <span className="font-mono text-3xl font-extrabold tracking-tight text-[#F5F0EB]">{price.big}</span>
          <span className="font-mono text-[11px] text-[#F5F0EB]/60 tracking-wider uppercase">{price.suffix}</span>
        </div>
        {price.sub && (
          <p className="font-mono text-[11px] text-[#E4A87A] tracking-wide mt-1.5">{price.sub}</p>
        )}
      </div>

      {plan.body && <p className="text-[#F5F0EB]/85 text-base leading-relaxed mb-4">{plan.body}</p>}

      {industryExample && (
        <p className="text-[#E4A87A] text-base leading-relaxed mb-4">
          For {industryExample.label.toLowerCase()}: {industryExample.example}.
        </p>
      )}

      {plan.prelude && <p className="font-display font-semibold text-sm text-[#F5F0EB]/70 mb-3">{plan.prelude}</p>}

      {plan.features && (
        <ul className="space-y-2.5 text-sm text-[#F5F0EB]/85 mb-4">
          {plan.features.map((feat) => (
            <li key={feat} className="flex gap-2.5 items-start">
              <span className="text-[#C8895A] font-mono text-[11px] shrink-0 mt-0.5">✓</span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      )}

      {/* AI Voice add-on toggle (standard view only) */}
      {plan.hasVoiceToggle && onVoiceToggle && (
        <div className="rounded-lg bg-[#1A3375] p-3.5 mb-4">
          <button
            type="button"
            role="switch"
            aria-checked={!!voiceOn}
            onClick={onVoiceToggle}
            className="flex items-start gap-2.5 w-full text-left cursor-pointer"
          >
            <span
              aria-hidden="true"
              className={cn(
                "relative shrink-0 mt-0.5 w-9 h-5 rounded-full border transition-colors duration-200 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:w-3.5 after:h-3.5 after:rounded-full after:transition-transform after:duration-200",
                voiceOn
                  ? "bg-[#C8895A]/30 border-[#C8895A] after:bg-[#C8895A] after:translate-x-[16px]"
                  : "bg-[#0D2154] border-white/20 after:bg-[#F5F0EB]/50"
              )}
            />
            <span className="text-sm font-display font-semibold text-[#F5F0EB]">
              ＋ AI Voice & Call Management — {addOnPrice(VOICE_MONTHLY, billing)}
            </span>
          </button>
          {voiceOn && <p className="text-[11px] text-[#F5F0EB]/80 leading-relaxed mt-2.5">☎ {VOICE_APPEND}</p>}
        </div>
      )}

      {plan.anchorStrip && (
        <p className="rounded-lg bg-[#1A3375] p-3.5 text-[11px] text-[#F5F0EB]/90 leading-relaxed mb-4">
          {plan.anchorStrip}
        </p>
      )}

      <div className="mt-auto">
        {/* Setup fee + usage disclosure — on the card itself */}
        <p className="font-mono text-[11px] leading-relaxed tracking-wide text-[#F5F0EB]/60 border-t border-white/10 pt-4 mb-4">
          {plan.finePrint}
        </p>
        <Button
          className={cn(
            "w-full py-6 font-semibold border-none",
            plan.popular
              ? "bg-[#C8895A] hover:bg-[#E4A87A] text-[#0D2154]"
              : "bg-[#F5F0EB] hover:bg-white text-[#0D2154]"
          )}
          render={<Link href={ctaHref || plan.ctaHref} />}
        >
          {plan.cta} →
        </Button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Comparison table                                                     */
/* ------------------------------------------------------------------ */

function ComparisonTable({ view, billing }: { view: CompareView; billing: BillingCycle }) {
  const cols = view.columns.length;
  const gridCols = cols === 4 ? "grid-cols-[2fr_1fr_1fr_1fr_1fr]" : "grid-cols-[2fr_1fr_1fr_1fr]";

  return (
    <div className="rounded-xl bg-[#0D2154] text-[#F5F0EB] p-4 md:p-8 overflow-x-auto">
      <div className={cn("min-w-[720px]", cols === 3 && "min-w-[640px]")}>
        {/* Head */}
        <div className={cn("grid border-b border-white/10 pb-4", gridCols)}>
          <span />
          {view.columns.map((col) => (
            <span
              key={col.name}
              className={cn(
                "text-center font-display font-bold text-sm",
                col.highlight ? "text-[#C8895A]" : "text-[#F5F0EB]"
              )}
            >
              {col.name}
              <small
                className={cn(
                  "block font-mono text-[11px] font-normal tracking-wider mt-1",
                  col.highlight ? "text-[#E4A87A]" : "text-[#F5F0EB]/50"
                )}
              >
                {col.monthly === 0 ? "$0" : addOnPrice(col.monthly, billing)}
              </small>
            </span>
          ))}
        </div>

        {/* Body */}
        {view.groups.map((group) => (
          <div key={group.group}>
            <div className="font-mono text-[11px] font-bold tracking-widest text-[#C8895A] bg-[#1A3375]/60 px-3 py-2 uppercase mt-4 rounded">
              {group.group}
            </div>
            {group.rows.map((row) => (
              <div
                key={row.name}
                className={cn("grid border-b border-white/10 py-3.5 items-center text-sm hover:bg-white/[0.04]", gridCols)}
              >
                <span className="font-display font-medium text-[#F5F0EB]/85 pr-3">{row.name}</span>
                {row.cells.map((cell, cidx) => (
                  <span key={cidx} className="text-center font-mono text-[11px] text-[#F5F0EB]/85 px-1">
                    {cell === true ? (
                      <span className="text-[#C8895A] text-sm">✓</span>
                    ) : cell === false ? (
                      <span className="text-[#F5F0EB]/30 text-sm">✕</span>
                    ) : (
                      cell
                    )}
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");
  const [industry, setIndustry] = useState<string | null>(null);
  const [aiVoiceGrowth, setAiVoiceGrowth] = useState(false);
  const [aiVoiceManaged, setAiVoiceManaged] = useState(false);

  // Deep-link: ?industry=<slug> (static export — read on mount, no useSearchParams).
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("industry");
    if (slug && INDUSTRIES.some((i) => i.slug === slug)) setIndustry(slug);
  }, []);

  const selectIndustry = (slug: string) => {
    const next = industry === slug ? null : slug;
    setIndustry(next);
    const url = new URL(window.location.href);
    if (next) url.searchParams.set("industry", next);
    else url.searchParams.delete("industry");
    window.history.replaceState(null, "", url.toString());
  };

  const selected = INDUSTRIES.find((i) => i.slug === industry) ?? null;
  const isEmergency = !!selected?.emergency;
  const example = selected && !selected.emergency ? { label: selected.label, example: selected.example } : null;

  const plans = isEmergency ? EMERGENCY_PLANS : STANDARD_PLANS;
  const compare = isEmergency ? EMERGENCY_COMPARE : STANDARD_COMPARE;

  const getCtaLink = (plan: Plan) => {
    const planSlug = plan.id.startsWith("e-") ? plan.id.substring(2) : plan.id;
    const mappedPlan = planSlug === "starter" ? "launch" : planSlug;
    
    if (mappedPlan === "free") {
      return `/onboarding?plan=free${isEmergency ? "&industry=emergency-restoration" : ""}`;
    }
    
    const industryParam = isEmergency ? "emergency-restoration" : industry !== "salons" && industry ? industry : "";
    const industryQuery = industryParam ? `&industry=${industryParam}` : "";
    
    if (plan.ctaHref === "#demo") {
      return "#demo";
    }
    
    return `/onboarding?plan=${mappedPlan}${industryQuery}&billing=${billing}`;
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1) Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 text-center overflow-hidden border-b border-line-soft">
        <div className="absolute inset-0 bg-radial-[at_50%_0%] from-[#C8895A]/10 via-transparent to-transparent pointer-events-none" />
        <div className="wrap max-w-4xl mx-auto px-6 relative z-10">
          <Chip className="mb-4 mx-auto">Pricing</Chip>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6">
            Simple pricing. One platform. <span className="text-[#C8895A]">Built for your industry.</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Your system is live instantly — set it up yourself or let our team do it for you. Onboarding help is included for life.
          </p>

          {/* Billing toggle */}
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
              type="button"
              role="switch"
              aria-checked={billing === "annual"}
              onClick={() => setBilling(billing === "monthly" ? "annual" : "monthly")}
              className={cn(
                "relative w-14 h-7.5 rounded-full bg-[#0D2154] border border-white/10 transition-all duration-250 outline-none cursor-pointer after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:w-5.5 after:h-5.5 after:rounded-full after:bg-[#C8895A] after:transition-all after:duration-250",
                billing === "annual" ? "bg-[#1A3375] border-[#C8895A]/40 after:translate-x-[26px]" : ""
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
              <span className="font-mono text-[11px] tracking-wider bg-[#C8895A]/10 text-[#C8895A] border border-[#C8895A]/40 px-2 py-0.5 rounded-full uppercase shrink-0">
                2 months free
              </span>
            </span>
          </div>

          <p className="mt-6 font-mono text-[11px] tracking-wider text-faint">
            Prices in USD. Canadian customers: applicable taxes added at checkout.
          </p>
        </div>
      </section>

      {/* 2) Industry selector */}
      <section className="py-10 border-b border-line-soft">
        <div className="wrap max-w-5xl mx-auto px-6">
          <p className="text-center font-mono text-[11px] tracking-widest uppercase text-faint mb-5">
            What kind of business do you run?
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {INDUSTRIES.map((ind) => {
              const active = industry === ind.slug;
              return (
                <button
                  key={ind.slug}
                  type="button"
                  aria-pressed={active}
                  onClick={() => selectIndustry(ind.slug)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-display font-semibold border transition-colors duration-200 cursor-pointer",
                    active
                      ? "bg-[#0D2154] text-[#F5F0EB] border-[#C8895A]"
                      : "bg-transparent text-muted border-line-soft hover:border-[#E4A87A] hover:text-ink"
                  )}
                >
                  {ind.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3/4) Plan ladder — standard or emergency view */}
      <section className="py-16 md:py-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          {isEmergency && (
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="font-display font-extrabold text-2xl md:text-4xl tracking-tight mb-4">
                  Every missed 2 AM call is a <span className="text-[#C8895A]">$7,000 insurance job</span> your
                  competitor just booked.
                </h2>
                <p className="text-muted text-base leading-relaxed">
                  Fynz answers in two rings, qualifies the loss, captures the claim, and books your truck — live and
                  answering within 48 hours.
                </p>
              </div>
            </ScrollReveal>
          )}

          <StaggerGroup
            className={cn(
              "grid grid-cols-1 gap-6 pt-4 items-stretch",
              isEmergency ? "md:grid-cols-3 max-w-5xl mx-auto" : "md:grid-cols-2 lg:grid-cols-4"
            )}
          >
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                billing={billing}
                voiceOn={plan.id === "growth" ? aiVoiceGrowth : plan.id === "managed" ? aiVoiceManaged : undefined}
                onVoiceToggle={
                  plan.id === "growth"
                    ? () => setAiVoiceGrowth((v) => !v)
                    : plan.id === "managed"
                      ? () => setAiVoiceManaged((v) => !v)
                      : undefined
                }
                industryExample={plan.personalize ? example : null}
                ctaHref={getCtaLink(plan)}
              />
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 5) Add-on strip */}
      <section id="add-ons" className="py-16 md:py-20 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal>
            <div className="h-full rounded-xl bg-[#0D2154] text-[#F5F0EB] p-8 flex flex-col">
              <span className="font-mono text-[11px] tracking-[0.15em] text-[#C8895A] uppercase block mb-3">
                Add-on · Any paid plan
              </span>
              <h3 className="font-display font-extrabold text-xl md:text-2xl tracking-tight mb-2">
                Fynz Social — <span className="text-[#C8895A]">{addOnPrice(249, billing)}</span>
              </h3>
              {billing === "annual" && (
                <p className="font-mono text-[11px] text-[#E4A87A] tracking-wide mb-2">
                  — $249 value/mo, 2 months free
                </p>
              )}
              <p className="text-[#F5F0EB]/85 text-base leading-relaxed mb-5">
                Done-for-you social media: posting calendar, content, and publishing handled by our team.
              </p>
              <p className="mt-auto font-display font-semibold text-sm text-[#E4A87A]">
                Add at checkout / ask on your demo. →
              </p>
            </div>
          </ScrollReveal>

          {!isEmergency && (
            <ScrollReveal>
              <div className="h-full rounded-xl bg-[#0D2154] text-[#F5F0EB] p-8 flex flex-col">
                <span className="font-mono text-[11px] tracking-[0.15em] text-[#C8895A] uppercase block mb-3">
                  Add-on · Growth & Managed
                </span>
                <h3 className="font-display font-extrabold text-xl md:text-2xl tracking-tight mb-2">
                  ☎ AI Voice & Call Management — <span className="text-[#C8895A]">{addOnPrice(VOICE_MONTHLY, billing)}</span>
                </h3>
                {billing === "annual" && (
                  <p className="font-mono text-[11px] text-[#E4A87A] tracking-wide mb-2">
                    — $100 value/mo, 2 months free
                  </p>
                )}
                <p className="text-[#F5F0EB]/85 text-base leading-relaxed mb-5">
                  24/7 Voice AI answers every call, books the appointment, routes and records per your local consent
                  rules. 500 AI-voice minutes/mo included. Toggle it on inside the Growth or Managed card above.
                </p>
                <p className="mt-auto font-display font-semibold text-sm text-[#E4A87A]">
                  Add at checkout / ask on your demo. →
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* 6) Comparison table */}
      <section className="py-16 md:py-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <span className="font-mono text-[11px] tracking-[0.15em] text-[#C8895A] uppercase block mb-3">
              Compare plans
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Every feature, side by side
            </h2>
          </div>
          <ComparisonTable view={compare} billing={billing} />
        </div>
      </section>

      {/* 7) Trust */}
      <section className="py-16 md:py-20 border-b border-line-soft">
        <div className="wrap max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="rounded-xl bg-[#0D2154] text-[#F5F0EB] px-8 py-8 text-center">
              <p className="font-display font-semibold text-base md:text-base leading-relaxed">
                <span className="text-[#C8895A]">⚡</span> Ready the moment you sign up — your system goes live instantly, and full onboarding help is
                included for life: our team configures your account, ports your number, and stays with you whenever you want a hand.
              </p>
            </div>
          </ScrollReveal>
          {/* Renders nothing until real, documented data exists. */}
          <ProofStats />
        </div>
      </section>

      {/* 8) FAQ */}
      <section className="py-16 md:py-24">
        <div className="wrap max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-mono text-[11px] tracking-[0.15em] text-[#C8895A] uppercase block mb-3">
              Questions
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Fair questions, straight answers
            </h2>
          </div>

          <Accordion className="bg-[#0D2154] border-white/10 text-[#F5F0EB] rounded-xl">
            {FAQS.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border-white/10">
                <AccordionTrigger className="font-display font-bold text-sm md:text-base text-[#F5F0EB] py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#F5F0EB]/80 text-base md:text-base leading-relaxed pb-6 pr-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
