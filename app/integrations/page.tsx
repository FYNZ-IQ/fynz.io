"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup } from "@/components/animations";
import { Chip } from "@/components/shared";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

type Status = "live" | "built" | "plan";

interface Integration {
  tile: string;
  name: string;
  desc: string;
  status: Status;
}

interface Category {
  id: string;
  filter: string;
  title: string;
  blurb: string;
  items: Integration[];
}

const FILTERS = [
  { id: "all", label: "ALL" },
  { id: "payments", label: "PAYMENTS" },
  { id: "calendars", label: "CALENDARS" },
  { id: "comms", label: "COMMS" },
  { id: "automation", label: "ZAPIER & API" },
  { id: "analytics", label: "ANALYTICS" }
];

const CATEGORIES: Category[] = [
  {
    id: "payments",
    filter: "payments",
    title: "Payments",
    blurb:
      "Checkout, deposits, invoices, and text-to-pay all run through the processors your customers already trust.",
    items: [
      { tile: "S", name: "Stripe", desc: "Cards, wallets, and payouts for checkout, deposits, and invoices.", status: "live" },
      { tile: "PP", name: "PayPal", desc: "Let customers pay with the account they already have.", status: "live" },
      { tile: "SQ", name: "Square", desc: "Card payments plus in-person tap-to-pay hardware.", status: "live" },
      { tile: "AN", name: "Authorize.net", desc: "Gateway support for businesses on existing merchant accounts.", status: "plan" }
    ]
  },
  {
    id: "calendars",
    filter: "calendars",
    title: "Calendars",
    blurb: "Two-way sync so FYNZ availability and your personal calendar never disagree.",
    items: [
      { tile: "G", name: "Google Calendar", desc: "Two-way sync — personal events block booking slots automatically.", status: "live" },
      { tile: "O", name: "Outlook / Microsoft 365", desc: "Full two-way sync for Microsoft-based teams.", status: "live" },
      { tile: "iC", name: "iCloud Calendar", desc: "Sync for Apple-first owners and staff.", status: "plan" }
    ]
  },
  {
    id: "comms",
    filter: "comms",
    title: "Communications",
    blurb:
      "Every channel lands in the unified inbox — one thread per customer, whatever app they message from.",
    items: [
      { tile: "SMS", name: "SMS & MMS", desc: "Two-way texting with your own business number.", status: "built" },
      { tile: "EM", name: "Email", desc: "Sending, receiving, and campaigns — no separate email tool.", status: "built" },
      { tile: "WA", name: "WhatsApp", desc: "Chat and booking links inside the app your customers live in.", status: "live" },
      { tile: "IG", name: "Instagram DM", desc: "DMs flow to the inbox; Book Now sits on your profile.", status: "live" },
      { tile: "FB", name: "Facebook Messenger", desc: "Page messages answered from the same thread.", status: "live" },
      { tile: "WC", name: "Webchat", desc: "A chat bubble for your website, connected to the same inbox.", status: "built" }
    ]
  },
  {
    id: "automation",
    filter: "automation",
    title: "Zapier, Make & API",
    blurb:
      "When you need FYNZ to talk to something we don't natively support, the connectors take over.",
    items: [
      { tile: "Z", name: "Zapier", desc: "Trigger 6,000+ apps from FYNZ events — and vice versa.", status: "live" },
      { tile: "M", name: "Make", desc: "Visual multi-step scenarios for power users.", status: "plan" },
      { tile: "API", name: "Webhooks & API", desc: "Raw events in and out for anything custom.", status: "live" }
    ]
  },
  {
    id: "analytics",
    filter: "analytics",
    title: "Analytics & ads",
    blurb:
      "Know which ad, post, or search produced each customer — attribution flows straight into GROW reporting.",
    items: [
      { tile: "GA", name: "Google Analytics 4", desc: "Booking-page and funnel events in your GA property.", status: "live" },
      { tile: "MP", name: "Meta Pixel", desc: "Conversion events back to Facebook & Instagram ads.", status: "live" },
      { tile: "GAd", name: "Google Ads", desc: "Offline conversion sync for call and form leads.", status: "plan" },
      { tile: "TT", name: "TikTok Pixel", desc: "Attribution for TikTok-driven bookings.", status: "plan" }
    ]
  }
];

const STATUS_LABEL: Record<Status, string> = {
  live: "LIVE",
  built: "BUILT IN",
  plan: "PLANNED"
};

const STATUS_STYLE: Record<Status, string> = {
  live: "bg-green/10 text-green border border-green/25",
  built: "bg-copper-tint text-copper border border-copper/25",
  plan: "bg-transparent text-slate-400 border border-dashed border-white/10"
};

export default function IntegrationsPage() {
  const [active, setActive] = useState("all");

  const visible = CATEGORIES.filter((c) => active === "all" || c.filter === active);

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-14 md:pt-40 md:pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-radial-[at_50%_0%] from-copper/10 via-transparent to-transparent pointer-events-none" />
        <div className="wrap max-w-4xl mx-auto px-6 relative z-10">
          <Chip className="mb-5 mx-auto">Integrations</Chip>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-5">
            Plays well with the tools you <span className="text-copper">already use</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            FYNZ replaces a lot — but it doesn&apos;t pretend the rest of the world doesn&apos;t exist. Payments,
            calendars, and channels connect natively; Zapier and the API cover everything else.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center mt-8 font-mono text-[11px] tracking-[0.16em] text-faint uppercase" aria-label="Status legend">
            <span className="inline-flex items-center gap-2">
              <i className="w-[7px] h-[7px] rounded-full bg-green shadow-[0_0_7px_rgba(31,143,85,0.6)]" />
              LIVE — connected today
            </span>
            <span className="inline-flex items-center gap-2">
              <i className="w-[7px] h-[7px] rounded-full bg-copper" />
              BUILT IN — native, nothing to connect
            </span>
            <span className="inline-flex items-center gap-2">
              <i className="w-[7px] h-[7px] rounded-full border border-dashed border-faint" />
              PLANNED — on the roadmap
            </span>
          </div>
          <p className="mt-3 font-mono text-[11px] tracking-[0.14em] text-copper/80 uppercase">
            Statuses provisional — confirm before launch
          </p>

          {/* Filter chips */}
          <div className="flex flex-wrap gap-2 justify-center mt-8" role="group" aria-label="Filter by category">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={cn(
                  "font-mono text-[11px] tracking-[0.12em] px-4 py-2 rounded-full border transition-all",
                  active === f.id
                    ? "bg-copper text-copper-ink border-copper font-semibold"
                    : "border-line-soft text-muted hover:border-copper/40"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="pt-12 pb-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6 flex flex-col gap-14">
          {visible.map((cat) => (
            <div key={cat.id}>
              <div className="mb-5 pb-3 border-b border-line-soft">
                <h2 className="font-mono text-[11px] font-semibold tracking-[0.22em] uppercase text-copper">
                  {cat.title}
                </h2>
                <p className="text-base text-muted mt-2 max-w-2xl">{cat.blurb}</p>
              </div>

              <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className={cn(
                      "relative bg-navy-800 text-white border border-white/10 rounded-[var(--r-md)] p-5 flex flex-col gap-1.5 transition-all",
                      item.status === "plan"
                        ? "opacity-70"
                        : "hover:border-copper/35 hover:-translate-y-1"
                    )}
                  >
                    <span
                      className={cn(
                        "absolute top-4 right-4 font-mono text-[8px] tracking-[0.14em] px-2 py-1 rounded",
                        STATUS_STYLE[item.status]
                      )}
                    >
                      {STATUS_LABEL[item.status]}
                    </span>
                    {/* Monogram tile — swap for real partner logos once brand-usage approvals are in */}
                    <span
                      aria-hidden="true"
                      className="w-11 h-11 rounded-xl mb-2.5 grid place-items-center font-display font-extrabold text-sm text-copper border border-copper/20 bg-gradient-to-br from-copper-tint to-transparent"
                    >
                      {item.tile}
                    </span>
                    <b className="font-display font-semibold text-[0.95rem] text-white">{item.name}</b>
                    <p className="text-[0.8rem] text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </StaggerGroup>
            </div>
          ))}
        </div>
      </section>

      {/* Request block */}
      <section className="py-20 md:py-24">
        <div className="wrap max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="relative overflow-hidden text-center rounded-[var(--r-lg)] border border-white/10 bg-gradient-to-br from-navy-800 to-navy-900 px-6 py-12 md:px-10 md:py-14">
              <span className="absolute top-0 left-[18%] right-[18%] h-px bg-gradient-to-r from-transparent via-copper to-transparent" />
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-3 text-white">
                Don&apos;t see <span className="text-copper">your tool</span>?
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto mb-6">
                Tell us what you need connected. Integration requests directly shape the roadmap — the PLANNED
                items above are there because owners asked.
              </p>
              <Button
                size="lg"
                className="bg-copper hover:bg-copper/90 text-white font-semibold"
                render={<Link href="mailto:hello@fynz.io?subject=Integration%20request" />}
              >
                Request an integration
              </Button>
              <p className="mt-6 font-mono text-[11px] tracking-[0.12em] text-slate-400 uppercase">
                In the meantime:{" "}
                <Link href="#zapier" className="text-copper hover:underline underline-offset-4">
                  Zapier
                </Link>{" "}
                reaches 6,000+ apps ·{" "}
                <Link href="#api" className="text-copper hover:underline underline-offset-4">
                  Webhooks &amp; API
                </Link>{" "}
                cover the rest
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final py-24 relative overflow-hidden text-center bg-radial-[at_bottom_center] from-copper/10 via-transparent to-transparent">
        <div className="wrap max-w-4xl mx-auto px-6 relative z-10">
          <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">
            Connected day one
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
            Bring your stack. <span className="text-copper">Keep what works</span>.
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Connect your calendar and payment processor in minutes — then let FYNZ replace the rest, one
            subscription at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="/onboarding?plan=free" />}>
              Start free
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/platform" />}>
              See the platform →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
