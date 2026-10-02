"use client";

import * as React from "react";
import Link from "next/link";
import { ExpandMore } from "./ExpandMore";
import { cn } from "@/lib/utils";

/**
 * The FYNZ delivery model, in one place so every page tells the same story:
 * a human team sits behind every account, and there are two ways to go live.
 * The 48-hour promise belongs to Managed only — never attach it to Self-Serve.
 */
export const TEAM_PROMISE = {
  eyebrow: "Software plus the people who run it",
  title: "A platform with a team behind it",
  summary:
    "You're not handed a login and left to work it out. Setup, configuration, changes, and troubleshooting are done for you by FYNZ experts who know the system — on every account.",
};

export const ATTRIBUTION_PROMISE = {
  eyebrow: "Proof, not promises",
  title: "Every account is instrumented for attribution from day one.",
  detail:
    "Each lead carries where it came from, the value of the job it saved, the amount that closed, and the date. So when you look at FYNZ at 90 days, you see what the system earned you — in dollars, not impressions.",
};

export type WayIn = {
  key: "self-serve" | "managed";
  num: string;
  name: string;
  tagline: string;
  summary: string;
  details: string[];
  cta: { label: string; href: string };
};

export function getWaysIn(industryName?: string): WayIn[] {
  const snapshot = industryName ? `the ${industryName} snapshot` : "your industry snapshot";
  const trade = industryName ? industryName.toLowerCase() : "your trade";
  return [
    {
      key: "self-serve",
      num: "01",
      name: "Self-Serve",
      tagline: "Plug-and-play. Live in minutes.",
      summary: `Pick ${snapshot}, provision yourself, and you're live in minutes with a template already configured for ${trade}.`,
      details: [
        "A pre-built template for your industry — booking pages, pipelines, and automations already set up.",
        "Snapshots exist for every industry in the library, not just a few headline verticals.",
        "The FYNZ team stays behind the account: setup questions, configuration changes, and troubleshooting are handled for you.",
      ],
      cta: { label: "Start free", href: "/onboarding?plan=free" },
    },
    {
      key: "managed",
      num: "02",
      name: "Managed",
      tagline: "Built for you. Live within 48 hours of signing.",
      summary:
        "Our experts build FYNZ around your actual business — services, staff, hours, flows — and hand it over working.",
      details: [
        "A human build, configured to how your business really runs — not a template you adapt.",
        "Live within 48 hours of signing, with contacts imported and every channel switched on.",
        "Ongoing: campaigns, monitoring, compliance, changes, and troubleshooting run by the team.",
      ],
      cta: { label: "Talk to the team", href: "/demo" },
    },
  ];
}

export interface WaysInCardsProps {
  /** Personalises the Self-Serve copy, e.g. "Salons". */
  industryName?: string;
  className?: string;
  /** Show the day-one attribution band under the two cards. */
  withAttribution?: boolean;
}

/** Two cards — Self-Serve and Managed — with the detail tucked behind "Learn more". */
export function WaysInCards({ industryName, className, withAttribution = true }: WaysInCardsProps) {
  const ways = getWaysIn(industryName);
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {ways.map((way) => (
          <div
            key={way.key}
            className={cn(
              "bg-navy-900 text-white border border-white/10 p-6 md:p-8 rounded-[var(--r-lg)] flex flex-col transition-colors duration-300 hover:border-copper/40",
              way.key === "managed" && "border-copper/40 bg-gradient-to-b from-navy-800 to-navy-900"
            )}
          >
            <span className="font-mono text-[9px] tracking-[0.18em] text-copper uppercase block mb-3">
              Way in · {way.num}
            </span>
            <h3 className="font-display font-extrabold text-xl md:text-2xl tracking-tight text-white mb-1">{way.name}</h3>
            <p className="font-mono text-[11px] tracking-wider text-slate-400 uppercase mb-4">{way.tagline}</p>
            <p className="text-slate-300 text-sm leading-relaxed mb-5">{way.summary}</p>
            <ExpandMore panelClassName="pb-5">
              <ul className="space-y-3 text-sm text-slate-300">
                {way.details.map((d) => (
                  <li key={d} className="flex gap-2.5 items-start">
                    <span className="text-copper font-mono text-[10px] shrink-0 mt-1">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={way.cta.href}
                className="inline-flex items-center gap-1 mt-5 font-mono text-xs tracking-wider text-copper font-bold uppercase hover:underline underline-offset-4 group"
              >
                {way.cta.label} <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </ExpandMore>
          </div>
        ))}
      </div>

      {withAttribution && <AttributionBand />}
    </div>
  );
}

/** Day-one attribution — the proof a buyer can hold FYNZ to. */
export function AttributionBand({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-navy-900 text-white border border-white/10 rounded-[var(--r-lg)] px-6 py-6 md:px-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-10",
        className
      )}
    >
      <div className="md:w-[240px] shrink-0">
        <span className="font-mono text-[9px] tracking-[0.18em] text-copper uppercase block mb-2">
          {ATTRIBUTION_PROMISE.eyebrow}
        </span>
        <div className="flex flex-wrap gap-1.5">
          {["Source", "Saved-job value", "Closed amount", "Date"].map((t) => (
            <span
              key={t}
              className="font-mono text-[9px] tracking-wider uppercase text-slate-300 border border-white/10 bg-white/[0.04] px-2 py-0.5 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-display font-semibold text-sm md:text-base text-white mb-3">{ATTRIBUTION_PROMISE.title}</p>
        <ExpandMore panelClassName="pb-3">
          <p className="text-slate-300 text-sm leading-relaxed">{ATTRIBUTION_PROMISE.detail}</p>
        </ExpandMore>
      </div>
    </div>
  );
}
