"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup } from "@/components/animations";
import { Chip } from "@/components/shared";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, Badge, Button } from "@/components/ui";
import { cn } from "@/lib/utils";

type PillarId = "grow" | "schedule" | "shop" | "ops";

interface FeatureItem {
  name: string;
  desc: string;
  link?: string;
  soon?: boolean;
}

interface Pillar {
  id: PillarId;
  name: string;
  count: string;
  job: string;
  title: string;
  eyebrow: string;
  desc: string;
  ctaLink: string;
  ctaText: string;
  thread: string;
  features: FeatureItem[];
}

const PILLARS_DATA: Record<PillarId, Pillar> = {
  grow: {
    id: "grow" as PillarId,
    name: "GROW",
    count: "11 FEATURES",
    job: "Get & keep customers",
    title: "Get customers — and keep them",
    eyebrow: "GROW PILLAR",
    desc: "Everything between a stranger seeing your ad and a regular referring their friends: capture, converse, nurture, and follow up without lifting a finger.",
    ctaLink: "/grow",
    ctaText: "Explore the GROW hub →",
    thread: "Every GROW feature plugs into workflows — a new lead can be texted, scored, pipelined, and booked before you've finished your coffee.",
    features: [
      { name: "Lead capture", desc: "Forms, surveys, quizzes, funnels, landing pages, and QR codes — every entry point feeds the same CRM.", link: "/features/lead-capture" },
      { name: "CRM & contacts", desc: "360° customer records with smart lists, tags, custom fields, and lead scoring.", link: "/features/crm" },
      { name: "Sales pipelines", desc: "Drag-and-drop deal stages so you always know who's close to a yes.", link: "/features/pipelines" },
      { name: "Unified inbox", desc: "SMS, email, WhatsApp, Instagram & Facebook DMs, and webchat in one thread per customer.", link: "/features/inbox" },
      { name: "Email & SMS marketing", desc: "Campaigns, broadcasts, and drip sequences that write themselves with Content AI.", link: "/features/marketing" },
      { name: "Automations & workflows", desc: "Set the trigger once — follow-ups, nudges, and hand-offs run forever.", link: "/features/automations" },
      { name: "Reputation & reviews", desc: "Review requests at the perfect moment, plus drafted responses to every one.", link: "/features/reputation" },
      { name: "Social planner", desc: "Plan, write, and schedule posts across your profiles from one calendar.", link: "/features/social-planner" },
      { name: "Missed-call text-back", desc: "Every unanswered call gets an instant text — before the caller tries a competitor.", link: "/features/text-back" },
      { name: "AI agents", desc: "Conversation, Voice, and Content AI working leads around the clock.", link: "/ai" },
      { name: "Ad & campaign tracking", desc: "See which ad, post, or referral actually produced each customer and dollar.", link: "/features/ad-tracking" }
    ]
  },
  schedule: {
    id: "schedule" as PillarId,
    name: "SCHEDULE",
    count: "7 FEATURES",
    job: "Book them, 24/7",
    title: "Bookings that run themselves",
    eyebrow: "SCHEDULE PILLAR",
    desc: "The Trafft-class scheduling pillar: customers book around the clock, staff stay in sync, and reminders quietly kill no-shows.",
    ctaLink: "/schedule",
    ctaText: "Explore the SCHEDULE hub →",
    thread: "Bookings trigger everything downstream automatically — confirmations, reminders, deposits, and post-visit review requests.",
    features: [
      { name: "Booking core", desc: "A branded page where customers self-book, reschedule, and pay deposits 24/7.", link: "/schedule" },
      { name: "Smart calendar & scheduling", desc: "Buffers, padding, and availability rules across services and staff.", link: "/features/calendar" },
      { name: "Team & staff management", desc: "Individual schedules, services, commissions, and permissions per team member.", link: "/features/team" },
      { name: "Customer management", desc: "Visit history, notes, preferences, and no-show flags on every profile.", link: "/features/customers" },
      { name: "Reminders & no-show reduction", desc: "Automatic SMS + email reminders that keep chairs and slots full.", link: "/features/reminders" },
      { name: "Booking channels", desc: "Instagram, website embed, QR, WhatsApp, and search — one availability everywhere.", link: "/features/booking-channels" },
      { name: "Multi-location", desc: "Separate calendars, staff, and services per location under one account.", link: "/features/multi-location" }
    ]
  },
  shop: {
    id: "shop" as PillarId,
    name: "SHOP",
    count: "4 FEATURES",
    job: "Sell & get paid",
    title: "Sell anything. Get paid instantly.",
    eyebrow: "SHOP PILLAR",
    desc: "Your storefront, checkout, and billing desk in one: products, invoices, memberships, and the payment rails your customers already use.",
    ctaLink: "/shop",
    ctaText: "Explore the SHOP hub →",
    thread: "An unpaid invoice nudges itself. A new member gets onboarded automatically. Money stops waiting on your to-do list.",
    features: [
      { name: "Online store & products", desc: "Sell products, gift cards, and service packages from your own storefront.", link: "/features/store" },
      { name: "Payments & invoicing", desc: "Cards, text-to-pay, estimates, proposals, and e-signatures — via Stripe, PayPal, and Square.", link: "/features/payments" },
      { name: "Memberships & courses", desc: "Recurring plans and paid course content, delivered and billed automatically.", link: "/features/memberships" },
      { name: "Communities", desc: "A private space for your members — included with your plan, not another tool.", link: "/features/communities" }
    ]
  },
  ops: {
    id: "ops" as PillarId,
    name: "OPS",
    count: "5 FEATURES",
    job: "Run the back office",
    title: "The back office, under control",
    eyebrow: "OPS PILLAR",
    desc: "The numbers side of the business — reporting today, accounting and tax rolling out — all fed live by the other three pillars.",
    ctaLink: "/ops",
    ctaText: "Explore the OPS hub →",
    thread: "OPS doesn't need data entry: every booking, sale, and payment from the other pillars lands here on its own.",
    features: [
      { name: "Reporting & dashboards", desc: "Revenue, bookings, and marketing performance on one screen you'll actually check.", link: "/features/reporting" },
      { name: "Team roles & permissions", desc: "Give staff exactly the access they need — and nothing they don't.", link: "/features/roles" },
      { name: "Accounting & bookkeeping", desc: "Income and expenses reconciled where the money already lives.", soon: true },
      { name: "Tax", desc: "Know what you owe before tax season does.", soon: true },
      { name: "Multi-location rollups", desc: "Compare and combine numbers across every location.", soon: true }
    ]
  }
};

const REPLACES_ITEMS = [
  "CRM", "Booking app", "Email marketing", "SMS platform", "Funnel builder",
  "Review manager", "Social scheduler", "Invoicing", "Course platform",
  "Community app", "Phone answering"
];

export default function PlatformPage() {
  const [activePillar, setActivePillar] = useState<PillarId>("grow");
  const railRef = useRef<HTMLDivElement>(null);

  // Sync hash on hashchange or deep link
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") as PillarId;
      if (PILLARS_DATA[hash]) {
        setActivePillar(hash);
        // Scroll to rail
        if (railRef.current) {
          const top = railRef.current.getBoundingClientRect().top + window.scrollY - 72;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handlePillarClick = (pillar: PillarId) => {
    setActivePillar(pillar);
    try {
      window.history.replaceState(null, "", `#${pillar}`);
    } catch {}
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 text-center overflow-hidden border-b border-line-soft">
        <div className="absolute inset-0 bg-radial-[at_50%_0%] from-copper/10 via-transparent to-transparent pointer-events-none" />
        <div className="wrap max-w-4xl mx-auto px-6 relative z-10">
          <Chip className="mb-4 mx-auto">All features</Chip>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6">
            One platform. Four jobs.<br />
            <span className="text-copper relative inline-block">
              Zero duct tape.
              <span className="absolute bottom-1 left-0 right-0 h-[0.12em] bg-copper-tint -z-10 skew-x-[-8deg]" />
            </span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            From the first lead to the final invoice, FYNZ runs it — every feature below ships connected, sharing one customer record and one login.
          </p>
          <div className="flex items-center gap-6 justify-center mt-8 font-mono text-[10px] tracking-wider text-faint">
            <span><b>27</b> FEATURES</span>
            <span><b>4</b> PILLARS</span>
            <span><b>1</b> LOGIN</span>
          </div>
        </div>
      </section>

      {/* Sticky Tab Bar / Rail */}
      <div ref={railRef} className="sticky top-[72px] z-40 bg-navy-900 border-y border-white/10 transition-all duration-200">
        <div className="wrap max-w-7xl mx-auto px-6 grid grid-cols-4 select-none">
          {(Object.keys(PILLARS_DATA) as PillarId[]).map((key) => {
            const p = PILLARS_DATA[key];
            const isSelected = activePillar === key;
            return (
              <button
                key={key}
                onClick={() => handlePillarClick(key)}
                className={cn(
                  "relative text-left py-4 px-4 border-l first:border-l-0 border-white/10 transition-all duration-200 outline-none hover:bg-navy-800/30",
                  isSelected ? "bg-navy-800/60" : "bg-transparent"
                )}
              >
                {/* Accent Top Line */}
                <span
                  className={cn(
                    "absolute top-[-1px] left-0 right-0 h-[2px] bg-copper transition-transform duration-200 origin-left",
                    isSelected ? "scale-x-100" : "scale-x-0"
                  )}
                />
                <span className="flex flex-col">
                  <span className={cn(
                    "font-display font-extrabold text-xs md:text-sm tracking-wider flex items-baseline gap-1.5 text-white",
                    isSelected ? "text-copper" : "text-white"
                  )}>
                    {p.name}
                    <span className="font-mono text-[8px] text-slate-400 font-normal">{p.count}</span>
                  </span>
                  <span className="hidden md:block font-mono text-[9px] text-slate-400 mt-1 truncate">{p.job}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feature Panel Zone */}
      <div className="wrap max-w-7xl mx-auto px-6 py-16 min-h-[50vh]">
        {(Object.keys(PILLARS_DATA) as PillarId[]).map((key) => {
          const p = PILLARS_DATA[key];
          const isActive = activePillar === key;

          if (!isActive) return null;

          return (
            <div key={key} className="animate-fade-in space-y-12">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-8 border-b border-line-soft/30">
                <div className="max-w-2xl">
                  <Chip className="mb-3">{p.eyebrow}</Chip>
                  <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-4">
                    {p.title.split(" — ").map((part, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && " — "}
                        <span className={i > 0 ? "text-copper" : ""}>{part}</span>
                      </React.Fragment>
                    ))}
                  </h2>
                  <p className="text-muted text-sm md:text-base leading-relaxed">{p.desc}</p>
                </div>
                <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
                  <span className="font-mono text-[9px] tracking-widest text-faint">
                    <b className="text-copper font-semibold">{p.features.length}</b> FEATURES IN THIS PILLAR
                  </span>
                  <Button variant="ghost" render={<Link href={p.ctaLink} />}>
                    {p.ctaText}
                  </Button>
                </div>
              </div>

              {/* Feature Grid */}
              <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {p.features.map((feat, idx) => {
                  if (feat.soon) {
                    return (
                      <div
                        key={idx}
                        className="bg-navy-800 text-white border border-transparent p-5 rounded-[var(--r-md)] flex flex-col justify-between opacity-75 select-none"
                      >
                        <div>
                          <b className="font-display font-bold text-sm text-white flex items-center gap-2">
                            {feat.name}
                            <span className="font-mono text-[7px] tracking-wider bg-white/[0.04] text-slate-400 px-1.5 py-0.5 rounded border border-white/10">COMING SOON</span>
                          </b>
                          <p className="text-slate-300 text-xs leading-relaxed mt-2">{feat.desc}</p>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={idx}
                      href={feat.link || "#"}
                      className="group bg-navy-800 text-white border border-transparent hover:border-copper/40 p-5 rounded-[var(--r-md)] flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <div>
                        <b className="font-display font-bold text-sm text-white group-hover:text-copper transition-colors duration-200">
                          {feat.name}
                        </b>
                        <p className="text-slate-300 text-xs leading-relaxed mt-2">{feat.desc}</p>
                      </div>
                      <span className="font-mono text-[9px] tracking-wider text-copper uppercase mt-4 block">
                        LEARN MORE →
                      </span>
                    </Link>
                  );
                })}
              </StaggerGroup>

              {/* Thread Banner */}
              <div className="border border-dashed border-copper/30 bg-navy-800 rounded-[var(--r-md)] p-4 text-xs md:text-sm text-slate-300 flex gap-3 items-start md:items-center">
                <Chip className="bg-copper/10 border-copper/30 text-copper uppercase">CONNECTION</Chip>
                <span>{p.thread}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Replaces Strip */}
      <section className="py-20 bg-navy-800 text-white border-y border-line-soft text-center overflow-hidden">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="mb-12 max-w-3xl mx-auto">
            <Chip className="mx-auto mb-3">Consolidate</Chip>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-4 text-white">
              Simplify your stack
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
              Replace multiple disconnected subscriptions with one cohesive system that works together.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {REPLACES_ITEMS.map((item, idx) => (
              <span key={idx} className="font-mono text-xs border border-white/10 px-3 py-1.5 rounded-full text-slate-400 select-none hover:border-white/20 transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final py-24 relative overflow-hidden text-center bg-radial-[at_bottom_center] from-copper/10 via-transparent to-transparent">
        <div className="wrap max-w-4xl mx-auto px-6 relative z-10">
          <Chip className="mb-4 mx-auto">Start today</Chip>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
            All of it. <span className="text-copper">One place.</span>
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Start free and turn features on as you grow — no migrations, no duct tape, no eleventh subscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold">
              Start free
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/pricing" />}>
              See pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
