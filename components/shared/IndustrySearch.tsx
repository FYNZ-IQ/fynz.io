"use client";

import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { INDUSTRY_GROUPS } from "@/lib/checkout";
import { cn } from "@/lib/utils";
import { PUBLISHED_INDUSTRY_SLUGS } from "@/lib/industries/published";

// Industry keys that currently have a live landing page at /industries/<slug>.
// Sourced from lib/industries/published (slug list only — no page content), so
// the homepage bundle stays small and this can never drift from the nav.
// Keys not listed there send the visitor straight into the onboarding wizard
// with their industry preselected, so hidden verticals still convert.
const PAGE_SLUGS = new Set(PUBLISHED_INDUSTRY_SLUGS);

// Extra search terms per industry, beyond its label and category.
const SYNONYMS: Record<string, string> = {
  salons: "hair color stylist beauty blowout",
  barbershops: "barber fade cuts shave",
  spas: "spa massage esthetician facial wellness medspa",
  "nail-studios": "nails manicure pedicure",
  clinics: "clinic doctor practice patients",
  dental: "dentist orthodontist hygiene teeth",
  "medical-clinics": "medical doctor physician medspa",
  therapists: "therapy physio physiotherapy chiropractor counseling psychologist",
  gyms: "gym crossfit training workout",
  fitness: "fitness studio classes bootcamp",
  "personal-trainers": "pt trainer coach workout",
  "yoga-pilates": "yoga pilates barre studio",
  restaurants: "restaurant dining reservations food",
  cafes: "cafe coffee bakery brunch",
  bars: "bar pub cocktail nightlife",
  boutiques: "boutique clothing fashion shop",
  retail: "store shop retail",
  ecommerce: "online store shopify webshop",
  accounting: "accountant bookkeeper cpa tax",
  legal: "lawyer attorney law firm",
  coaching: "coach consultant advisor mentor",
  "home-services": "handyman hvac electrician trades",
  plumbing: "plumber pipes drains hvac",
  cleaning: "cleaner maid janitorial",
  contractors: "contractor construction renovation builder roofing",
  automotive: "auto mechanic repair detailing car shop garage",
  "water-damage": "flood restoration water extraction",
  "mold-remediation": "mold removal remediation",
  "fire-smoke": "fire damage smoke restoration",
  "storm-tree": "storm damage tree removal",
  "storm-roofing": "roof storm hail roofing",
  "biohazard-cleanup": "biohazard trauma cleanup",
  "real-estate": "realtor broker property listings agent",
  other: "other something else general",
};

type Entry = { key: string; label: string; group: string; haystack: string };

const ENTRIES: Entry[] = INDUSTRY_GROUPS.flatMap((group) =>
  group.items.map(({ key, label }) => ({
    key,
    label,
    group: group.title,
    haystack: `${label} ${group.title} ${SYNONYMS[key] || ""}`.toLowerCase(),
  })),
);

const hrefFor = (key: string) =>
  PAGE_SLUGS.has(key) ? `/industries/${key}` : `/onboarding?industry=${key}&plan=free`;

export function IndustrySearch({ className }: { className?: string }) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const q = query.trim().toLowerCase();
  const matches = useMemo(
    () => (q ? ENTRIES.filter((e) => e.haystack.includes(q)).slice(0, 7) : []),
    [q],
  );
  const open = focused && q.length > 0;

  return (
    <div className={cn("relative max-w-md", className)}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        aria-hidden="true"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-faint pointer-events-none"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => {
          if (blurTimer.current) clearTimeout(blurTimer.current);
          setFocused(true);
        }}
        onBlur={() => {
          // Delay so a click on a result registers before the list unmounts.
          blurTimer.current = setTimeout(() => setFocused(false), 150);
        }}
        placeholder="Search your business — barber, physio, mechanic…"
        aria-label="Search your business type"
        className="w-full bg-white dark:bg-navy-800 border border-line-soft dark:border-white/10 rounded-full pl-11 pr-5 py-3 text-sm text-ink dark:text-white placeholder:text-faint outline-none transition-colors focus:border-copper/60 focus:ring-2 focus:ring-copper/20"
      />

      {open && (
        <div className="absolute z-20 top-full mt-2 left-0 right-0 bg-white dark:bg-navy-800 border border-line-soft dark:border-white/10 rounded-2xl shadow-xl overflow-hidden">
          {matches.length > 0 ? (
            matches.map((m) => (
              <Link
                key={m.key}
                href={hrefFor(m.key)}
                className="flex items-baseline justify-between gap-4 px-5 py-3 transition-colors hover:bg-copper-tint group"
              >
                <span className="font-display font-semibold text-sm text-ink dark:text-white group-hover:text-copper">
                  {m.label}
                </span>
                <span className="font-mono text-[9px] tracking-wider uppercase text-faint shrink-0">
                  {m.group} →
                </span>
              </Link>
            ))
          ) : (
            <div className="px-5 py-4 text-sm text-muted">
              No match — but FYNZ still fits.{" "}
              <Link
                href="/onboarding?industry=other&plan=free"
                className="text-copper font-semibold hover:underline underline-offset-2"
              >
                Start free
              </Link>{" "}
              or{" "}
              <Link
                href="/industries"
                className="text-copper font-semibold hover:underline underline-offset-2"
              >
                browse every industry
              </Link>
              .
            </div>
          )}
        </div>
      )}
    </div>
  );
}
