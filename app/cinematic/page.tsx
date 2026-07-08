"use client";

import React from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup, CountUp } from "@/components/animations";
import { Chip, ArrowLink } from "@/components/shared";
import { Button } from "@/components/ui";

type Feature = {
  title: string;
  desc: string;
  status?: "live" | "soon";
};

type Pillar = {
  id: string;
  num: string;
  name: string;
  heading: React.ReactNode;
  lead: string;
  features: Feature[];
  link: { label: string; href: string };
};

const PILLARS: Pillar[] = [
  {
    id: "grow",
    num: "01",
    name: "Grow",
    heading: (
      <>
        Never lose
        <br />
        another lead.
      </>
    ),
    lead: "Every call, text, DM and form lands in one inbox — and follows up by itself.",
    features: [
      { title: "Every channel, one inbox", desc: "SMS, Instagram, Facebook, webchat and email flow straight in." },
      { title: "Missed-call text-back", desc: "Can't pick up? They get an instant text before they call a competitor." },
      { title: "Automated follow-up", desc: "Multi-step sequences that nurture every lead without you lifting a finger." },
      { title: "Visual sales pipeline", desc: "Drag leads from new to won. See exactly where every deal stands." }
    ],
    link: { label: "Explore Grow", href: "/grow" }
  },
  {
    id: "sched",
    num: "02",
    name: "Schedule",
    heading: (
      <>
        Bookings that
        <br />
        fill themselves.
      </>
    ),
    lead: "Share one link or QR code. Watch the calendar fill — reminders included.",
    features: [
      { title: "Online booking anywhere", desc: "Chat, QR code or website — customers book in seconds." },
      { title: "Automatic reminders", desc: "Confirmations and nudges go out on time, every time." },
      { title: "No-show recovery", desc: "Missed appointments get a rebooking message automatically." },
      { title: "Deposits at booking", desc: "Take a card or deposit up front — no-shows stop being free." }
    ],
    link: { label: "Explore Schedule", href: "/schedule" }
  },
  {
    id: "shop",
    num: "03",
    name: "Shop",
    heading: (
      <>
        Sell anywhere.
        <br />
        Get paid fast.
      </>
    ),
    lead: "A branded store with Stripe, PayPal and Square built in — plus recovery on autopilot.",
    features: [
      { title: "Branded online store", desc: "Your products, your look — live in minutes, no developer needed." },
      { title: "Invoices & text-to-pay", desc: "Send an invoice by text; get paid before the truck leaves the driveway." },
      { title: "Abandoned-cart recovery", desc: "A friendly reminder brings shoppers back to checkout." },
      { title: "Order updates by text", desc: "Order and delivery status sent where customers actually read it." }
    ],
    link: { label: "Explore Shop", href: "/shop" }
  },
  {
    id: "ops",
    num: "04",
    name: "Ops",
    heading: (
      <>
        The back office,
        <br />
        handled.
      </>
    ),
    lead: "Reporting, roles and — soon — accounting, fed automatically by everything above.",
    features: [
      { title: "Reporting & dashboards", desc: "Revenue, bookings and lead flow — one glance, no spreadsheets.", status: "live" },
      { title: "Roles & permissions", desc: "Staff see what they need. You see everything.", status: "live" },
      { title: "Accounting & tax", desc: "Every sale and booking recorded — books that keep themselves.", status: "soon" },
      { title: "Connected to everything", desc: "Grow, Schedule and Shop feed Ops automatically. One source of truth." }
    ],
    link: { label: "Explore Ops", href: "/ops" }
  },
  {
    id: "ai",
    num: "05",
    name: "FYNZ AI",
    heading: (
      <>
        Your AI team,
        <br />
        on shift 24/7.
      </>
    ),
    lead: "Eight AI employees that answer, book, follow up and write — while you sleep.",
    features: [
      { title: "Voice AI answers your phone", desc: "Greets, qualifies and books callers in a natural voice — even at 11 PM." },
      { title: "Conversation AI replies everywhere", desc: "SMS, DMs, webchat and email — answered in seconds, in any language." },
      { title: "Reviews AI grows your reputation", desc: "Requests reviews at the right moment and answers every single one." },
      { title: "You stay in control", desc: "Approve-first mode available; complex calls always reach a human." }
    ],
    link: { label: "Meet the AI team", href: "/ai" }
  }
];

const STATS = [
  { n: "27", l: "Features" },
  { n: "4", l: "Pillars" },
  { n: "8", l: "AI agents" },
  { n: "1", l: "Login" }
];

function StatusPill({ status }: { status: "live" | "soon" }) {
  if (status === "live") {
    return (
      <span className="align-middle ml-2 font-mono text-[10px] tracking-[0.15em] px-2 py-0.5 rounded-full bg-green/10 text-green">
        LIVE
      </span>
    );
  }
  return (
    <span className="align-middle ml-2 font-mono text-[10px] tracking-[0.15em] px-2 py-0.5 rounded-full bg-copper-tint text-copper">
      COMING SOON
    </span>
  );
}

export default function CinematicPage() {
  return (
    <>
      {/* Hero */}
      <section id="hero" className="sec relative overflow-hidden border-b border-line-soft text-center">
        <div className="wrap">
          <ScrollReveal>
            <span className="eyebrow eyebrow-line justify-center mb-6">Capture · Book · Sell · Run</span>
            <h1 className="font-display font-extrabold tracking-tight leading-[1.05] text-[clamp(2.4rem,7vw,5rem)]">
              Booking is just
              <br />
              the <span className="text-copper">beginning</span>.
            </h1>
            <p className="lede mx-auto mt-6 text-lg">
              Leads, bookings, sales and operations — connected, automated, and in one place.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-copper" render={<Link href="/pricing" />}>
                Start free
              </Button>
              <Button className="btn-ghost" render={<Link href="#grow" />}>
                Scroll to watch each pillar work ↓
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-2 justify-center">
              {PILLARS.map((p) => (
                <Link key={p.id} href={`#${p.id}`}>
                  <Chip>{p.name}</Chip>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product pillars */}
      {PILLARS.map((pillar, idx) => (
        <section
          key={pillar.id}
          id={pillar.id}
          className={`sec border-b border-line-soft scroll-mt-24 ${idx % 2 === 1 ? "bg-wash" : ""}`}
        >
          <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Copy */}
            <ScrollReveal direction="left" className="lg:sticky lg:top-28">
              <span className="chip mb-5">
                {pillar.num} · {pillar.name}
              </span>
              <h2 className="font-display font-extrabold tracking-tight leading-[1.08] text-[clamp(1.9rem,3.6vw,3rem)] mt-4">
                {pillar.heading}
              </h2>
              <p className="lede mt-4">{pillar.lead}</p>
              <ArrowLink href={pillar.link.href} className="mt-6">
                {pillar.link.label}
              </ArrowLink>
            </ScrollReveal>

            {/* Features */}
            <StaggerGroup className="flex flex-col rounded-[var(--r-lg)] border border-white/10 overflow-hidden">
              {pillar.features.map((feat) => (
                <div
                  key={feat.title}
                  className="flex gap-4 items-start py-5 px-5 bg-navy-800 border-t border-white/10 first:border-t-0"
                >
                  <span className="flex-none w-6 h-6 rounded-md bg-copper text-copper-ink grid place-items-center text-xs font-bold mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-display font-semibold text-white text-base">
                      {feat.title}
                      {feat.status && <StatusPill status={feat.status} />}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed mt-1">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </StaggerGroup>
          </div>
        </section>
      ))}

      {/* Outro / Final CTA — intentional dark band */}
      <section id="start" className="sec bg-navy-900 text-white text-center relative overflow-hidden">
        <div className="wrap relative z-10">
          <ScrollReveal>
            <h2 className="font-display font-extrabold tracking-tight leading-[1.06] text-[clamp(2.1rem,5vw,3.6rem)]">
              Run the whole thing
              <br />
              from <span className="text-copper">one login</span>.
            </h2>
            <p className="mx-auto max-w-xl mt-5 text-white/65 leading-relaxed">
              Four pillars, one platform, an AI team on shift around the clock — and automation
              stitching it all together.
            </p>

            <div className="flex flex-wrap justify-center gap-11 mt-12 mb-2">
              {STATS.map((s) => (
                <div key={s.l} className="flex flex-col gap-1">
                  <CountUp value={s.n} className="font-display font-extrabold text-3xl text-copper" />
                  <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-white/55">
                    {s.l}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-copper" render={<Link href="/pricing" />}>
                Start free
              </Button>
              <Button
                className="btn-ghost border-white/15 text-white hover:text-copper"
                render={<Link href="/platform" />}
              >
                Explore the platform →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
