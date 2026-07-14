"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup, HoverFloat, CountUp } from "@/components/animations";
import { Chip } from "@/components/shared";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

/* ---------- Hero KPI tiles ---------- */
const HERO_KPIS = [
  {
    label: "Revenue · MTD",
    value: "18,940",
    delta: "+12% VS LAST MO",
    points: "0,30 12,26 24,28 36,20 48,22 60,14 74,12 88,6",
    area: "0,30 12,26 24,28 36,20 48,22 60,14 74,12 88,6 88,34 0,34"
  },
  {
    label: "Outstanding invoices",
    value: "1,240",
    delta: "3 · AUTO-NUDGING",
    points: "0,10 14,14 28,12 42,18 56,20 70,24 88,27",
    area: "0,10 14,14 28,12 42,18 56,20 70,24 88,27 88,34 0,34"
  },
  {
    label: "Est. tax set-aside",
    value: "4,180",
    delta: "ON TRACK",
    points: "0,28 15,25 30,23 45,19 60,16 75,12 88,9",
    area: "0,28 15,25 30,23 45,19 60,16 75,12 88,9 88,34 0,34"
  }
];

/* ---------- Benefit rows ---------- */
type BenefitRow = {
  chips: { label: string; soon?: boolean }[];
  title: string;
  desc: string;
  link: { href: string; label: string };
  reversed?: boolean;
  panelTitle: React.ReactNode;
  visual: React.ReactNode;
};

const BENEFIT_ROWS: BenefitRow[] = [
  {
    chips: [{ label: "REPORTING · LIVE" }],
    title: "One dashboard you'll actually check",
    desc: "Revenue, bookings, top services, and marketing performance on a single screen, updated the moment money moves. Ask \"how's the month going?\" and get an answer, not a spreadsheet project.",
    link: { href: "/features/reporting", label: "Reporting & dashboards" },
    panelTitle: (
      <>
        REVENUE BY WEEK <b className="text-copper font-medium">MTD $18,940</b>
      </>
    ),
    visual: (
      <div className="flex items-end gap-2 h-28 pt-2">
        {[42, 58, 51, 74, 66, 88].map((h, i) => (
          <i
            key={i}
            className="flex-1 rounded-t-md bg-gradient-to-b from-copper/75 to-copper/20"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    )
  },
  {
    chips: [{ label: "ROLES · LIVE" }],
    title: "Everyone sees exactly what they should",
    desc: "Stylists see their own calendar and clients. Your manager sees the numbers. Your bookkeeper sees the books — and nobody stumbles into payroll. Permissions per role, per location, set once.",
    link: { href: "/features/roles", label: "Team roles & permissions" },
    reversed: true,
    panelTitle: (
      <>
        ACCESS · 5 SEATS <b className="text-copper font-medium">3 ROLES</b>
      </>
    ),
    visual: (
      <div className="flex flex-col gap-2">
        {[
          { i: "AN", name: "Anteneh (you)", sub: "OWNER · EVERYTHING", tag: "FULL", hot: true },
          { i: "MR", name: "Maya R.", sub: "MANAGER · REPORTS + CALENDAR", tag: "MGR" },
          { i: "JT", name: "Jordan T.", sub: "STAFF · OWN SCHEDULE ONLY", tag: "STAFF" },
          { i: "BK", name: "Bookkeeper", sub: "FINANCE · BOOKS, NO CLIENT DATA", tag: "FIN" }
        ].map((r, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-[var(--r-sm)] px-3 py-2.5"
          >
            <span className="w-8 h-8 rounded-full bg-copper-tint text-copper grid place-items-center font-display text-[0.72rem] font-bold shrink-0">
              {r.i}
            </span>
            <div className="min-w-0">
              <b className="text-[0.83rem] font-semibold block leading-tight">{r.name}</b>
              <small className="font-mono text-[11px] text-slate-400 tracking-wide">{r.sub}</small>
            </div>
            <span
              className={cn(
                "ml-auto font-mono text-[11px] px-2.5 py-1 rounded shrink-0",
                r.hot ? "bg-green/10 text-green" : "bg-copper-tint text-copper"
              )}
            >
              {r.tag}
            </span>
          </div>
        ))}
      </div>
    )
  },
  {
    chips: [{ label: "ACCOUNTING" }, { label: "COMING SOON", soon: true }],
    title: "Books that balance themselves",
    desc: "Income is already in FYNZ the moment you get paid — accounting connects the other half: expenses, categorization, and reconciliation where the money already lives. In development now; join the waitlist from the feature page.",
    link: { href: "/features/accounting", label: "Accounting & bookkeeping" },
    panelTitle: (
      <>
        PREVIEW · RECONCILIATION <b className="text-copper font-medium">IN DEVELOPMENT</b>
      </>
    ),
    visual: (
      <div className="flex flex-col gap-2">
        {[
          { t: "Stripe payout — Jul 2", s: "MATCHED TO 14 PAYMENTS · AUTO", amt: "✓ $2,412", pos: true },
          { t: "Beauty supply co.", s: "CATEGORIZED: SUPPLIES · AUTO", amt: "−$318" },
          { t: "Rent — Main St. studio", s: "RECURRING · CATEGORIZED", amt: "−$2,100" }
        ].map((o, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center bg-white/[0.04] border border-white/10 rounded-[var(--r-sm)] px-3.5 py-2.5"
          >
            <div>
              <b className="text-[0.83rem] font-semibold block">{o.t}</b>
              <small className="font-mono text-[11px] text-slate-400">{o.s}</small>
            </div>
            <span className={cn("font-mono text-[0.82rem]", o.pos ? "text-green" : "text-slate-300")}>
              {o.amt}
            </span>
          </div>
        ))}
      </div>
    )
  },
  {
    chips: [{ label: "TAX" }, { label: "COMING SOON", soon: true }],
    title: "Know what you owe before tax season does",
    desc: "A running estimate of your tax set-aside, built from real income as it happens — for US and Canadian small businesses. So April (or your quarterly installments) stops being a surprise party.",
    link: { href: "/features/tax", label: "Tax tools" },
    reversed: true,
    panelTitle: (
      <>
        PREVIEW · TAX SET-ASIDE <b className="text-copper font-medium">Q3</b>
      </>
    ),
    visual: (
      <div className="mt-1.5">
        <div className="flex justify-between font-mono text-[11px] text-slate-400 tracking-wide mb-2">
          <span>SET ASIDE SO FAR</span>
          <b className="text-white font-semibold">$4,180 / $6,700</b>
        </div>
        <div className="h-2.5 rounded-md bg-white/[0.04] overflow-hidden">
          <i className="block h-full w-[62%] rounded-md bg-gradient-to-r from-copper/45 to-copper" />
        </div>
        <small className="font-mono text-[11px] text-slate-400 block mt-2 tracking-wide">
          ESTIMATED FROM LIVE INCOME · UPDATED WITH EVERY PAYMENT
        </small>
      </div>
    )
  }
];

/* ---------- Interactive dashboard data ---------- */
type RangeKey = "d7" | "d30" | "qtd";

const DASH_DATA: Record<
  RangeKey,
  {
    rev: string;
    revD: string;
    book: string;
    bookD: string;
    ticket: string;
    ticketD: string;
    bars: { l: string; h: number; hot?: boolean }[];
    top: [string, string][];
  }
> = {
  d7: {
    rev: "$4,280", revD: "+12%", book: "61", bookD: "+6%", ticket: "$70", ticketD: "+3%",
    bars: [
      { l: "MON", h: 46 }, { l: "TUE", h: 58 }, { l: "WED", h: 52 },
      { l: "THU", h: 71 }, { l: "FRI", h: 84 }, { l: "SAT", h: 96, hot: true }, { l: "SUN", h: 22 }
    ],
    top: [["Balayage", "$1,440"], ["Cut & style", "$1,105"], ["Gift cards", "$600"], ["Memberships", "$528"]]
  },
  d30: {
    rev: "$18,940", revD: "+12%", book: "263", bookD: "+9%", ticket: "$72", ticketD: "+4%",
    bars: [
      { l: "WK 1", h: 58 }, { l: "WK 2", h: 66 }, { l: "WK 3", h: 74 }, { l: "WK 4", h: 92, hot: true }
    ],
    top: [["Balayage", "$5,940"], ["Cut & style", "$4,730"], ["Memberships", "$2,112"], ["Gift cards", "$1,900"]]
  },
  qtd: {
    rev: "$51,320", revD: "+18%", book: "742", bookD: "+14%", ticket: "$69", ticketD: "+2%",
    bars: [
      { l: "APR", h: 62 }, { l: "MAY", h: 78 }, { l: "JUN", h: 94, hot: true }
    ],
    top: [["Balayage", "$16,400"], ["Cut & style", "$13,050"], ["Memberships", "$6,290"], ["Courses", "$3,180"]]
  }
};

const RANGES: { key: RangeKey; label: string }[] = [
  { key: "d7", label: "7D" },
  { key: "d30", label: "30D" },
  { key: "qtd", label: "QTD" }
];

/* ---------- Roadmap ---------- */
const ROADMAP: { title: string; sub: string; status: "LIVE" | "IN DEVELOPMENT" | "PLANNED" }[] = [
  { title: "Reporting & dashboards", sub: "Revenue, bookings, and marketing performance in real time", status: "LIVE" },
  { title: "Team roles & permissions", sub: "Per-role, per-location access control", status: "LIVE" },
  { title: "Accounting & bookkeeping", sub: "Expenses, categorization, and reconciliation", status: "IN DEVELOPMENT" },
  { title: "Tax tools", sub: "Running set-aside estimates for US & Canada", status: "IN DEVELOPMENT" },
  { title: "Multi-location rollups", sub: "Combined and compared numbers across locations", status: "PLANNED" }
];

/* ---------- Feature grid ---------- */
const FEATURES: { title: string; desc: string; href?: string; soon?: boolean }[] = [
  { title: "Reporting & dashboards", desc: "Revenue, bookings, and marketing on one live screen.", href: "/features/reporting" },
  { title: "Team roles & permissions", desc: "Everyone sees exactly what they should — nothing more.", href: "/features/roles" },
  { title: "Accounting & bookkeeping", desc: "Income and expenses reconciled where the money already lives.", soon: true },
  { title: "Tax", desc: "Know what you owe before tax season does.", soon: true },
  { title: "Multi-location rollups", desc: "Compare and combine numbers across every location.", soon: true }
];

/* ---------- Outcome stats ---------- */
const STATS = [
  { value: "6.5h", label: "Admin time saved weekly" },
  { value: "0", label: "Manual entries required" },
  { value: "100%", label: "Of payments auto-recorded" },
  { value: "1", label: "Screen for the whole business" }
];

export default function OpsPage() {
  const [range, setRange] = useState<RangeKey>("d7");
  const d = DASH_DATA[range];

  return (
    <div className="flex flex-col w-full">
      {/* ---------- HERO ---------- */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-line-soft">
        <div className="absolute inset-0 bg-radial-[at_84%_26%] from-copper/10 via-transparent to-transparent pointer-events-none" />
        <div className="wrap max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative z-10">
          <div>
            <span className="eyebrow eyebrow-line mb-2">
              <Link href="/platform#ops" className="hover:underline underline-offset-4">
                Pillar 04 · OPS
              </Link>
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.07] mt-5 mb-5">
              Know your numbers. Run the <span className="text-copper">back office</span>.
            </h1>
            <p className="text-muted text-lg mb-8 max-w-xl">
              OPS is where the other three pillars report for duty: every booking, sale, and payment lands here on its own — no data entry, no shoebox of receipts, no "I'll sort it at tax time."
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="/onboarding?plan=free" />}>
                Start free
              </Button>
              <Button size="lg" variant="outline" render={<Link href="#dashboard" />}>
                Play with the dashboard
              </Button>
            </div>
            <p className="mt-5 font-mono text-[10.5px] tracking-[0.12em] text-faint">
              REPORTING &amp; ROLES ARE LIVE TODAY · ACCOUNTING &amp; TAX ARE ON THE WAY — SEE THE ROADMAP BELOW
            </p>
          </div>

          {/* KPI tile stack */}
          <div
            className="flex flex-col gap-3 max-w-[420px] w-full mx-auto lg:ml-auto"
            role="img"
            aria-label="Key numbers: revenue month to date, outstanding invoices, and estimated tax set-aside"
          >
            {HERO_KPIS.map((k, idx) => (
              <HoverFloat key={idx} yOffset={idx % 2 === 0 ? -6 : 6} duration={4} delay={idx * 0.3}>
                <div className="bg-navy-800 text-white border border-white/10 rounded-[var(--r-md)] px-[18px] py-4 flex items-center gap-4 transition-colors hover:border-copper/30 shadow-sm">
                  <div className="flex-1">
                    <small className="font-mono text-[11px] tracking-[0.16em] uppercase text-slate-400 block mb-1">
                      {k.label}
                    </small>
                    <b className="font-mono text-xl font-semibold">
                      <em className="not-italic text-copper">$</em>
                      {k.value}
                    </b>
                    <span className="font-mono text-[11px] text-green ml-2">{k.delta}</span>
                  </div>
                  <svg viewBox="0 0 88 34" className="w-[88px] h-[34px] shrink-0" aria-hidden="true">
                    <polygon points={k.area} fill="rgba(181,100,63,0.10)" />
                    <polyline
                      points={k.points}
                      fill="none"
                      stroke="var(--copper)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.85"
                    />
                  </svg>
                </div>
              </HoverFloat>
            ))}
            <p className="font-mono text-[11px] tracking-[0.16em] text-faint text-right mt-1">
              FED LIVE BY GROW · SCHEDULE · SHOP
            </p>
          </div>
        </div>
      </section>

      {/* ---------- BENEFIT ROWS ---------- */}
      <section className="sec py-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <ScrollReveal className="sec-head max-w-2xl mb-14">
            <span className="eyebrow eyebrow-line">How OPS works</span>
            <h2 className="h2 font-display font-bold">
              The numbers do their own <span className="text-copper">paperwork</span>
            </h2>
            <p className="lede">
              Two OPS features are live today, two are in the workshop — and we'll always tell you which is which.
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-24">
            {BENEFIT_ROWS.map((row, idx) => (
              <ScrollReveal
                key={idx}
                direction={row.reversed ? "right" : "left"}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                <div className={cn(row.reversed && "lg:order-2")}>
                  <div className="flex items-center gap-2 flex-wrap mb-4">
                    {row.chips.map((c, ci) =>
                      c.soon ? (
                        <span
                          key={ci}
                          className="font-mono text-[11px] tracking-[0.12em] bg-wash text-faint px-2.5 py-1 rounded-full border border-dashed border-line"
                        >
                          {c.label}
                        </span>
                      ) : (
                        <Chip key={ci}>{c.label}</Chip>
                      )
                    )}
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-tight mb-3">
                    {row.title}
                  </h3>
                  <p className="text-muted text-[1.02rem] mb-2">{row.desc}</p>
                  <Link
                    href={row.link.href}
                    className="arrow-link group inline-flex items-center gap-2"
                  >
                    {row.link.label}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>

                <div className={cn(row.reversed && "lg:order-1")}>
                  <div className="relative bg-gradient-to-br from-navy-800 to-navy-750 text-white border border-white/10 rounded-[var(--r-lg)] p-5.5 shadow-[var(--shadow-md)] overflow-hidden">
                    <span className="absolute top-0 left-[12%] right-[45%] h-px bg-gradient-to-r from-transparent via-copper/70 to-transparent" />
                    <div className="flex justify-between font-mono text-[11px] tracking-[0.18em] uppercase text-slate-400 mb-3.5">
                      {row.panelTitle}
                    </div>
                    {row.visual}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- INTERACTIVE DASHBOARD ---------- */}
      <section id="dashboard" className="sec py-24 bg-white dark:bg-navy-800 border-b border-line-soft scroll-mt-20">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="eyebrow eyebrow-line justify-center">Live demo</span>
            <h2 className="h2 font-display font-bold">
              Your month, at a <span className="text-copper">glance</span>
            </h2>
            <p className="lede mx-auto">
              Flip the range — the numbers and chart follow. This is the OPS home screen, fed automatically by the other three pillars.
            </p>
          </div>

          <div className="bg-navy-800 text-white border border-white/10 rounded-[var(--r-lg)] shadow-[var(--shadow-md)] overflow-hidden max-w-5xl mx-auto">
            {/* top bar */}
            <div className="flex items-center gap-3.5 flex-wrap px-6 py-4 border-b border-white/10">
              <div>
                <b className="font-display text-[0.95rem] font-bold block">Maple &amp; Main Salon</b>
                <small className="font-mono text-[11px] text-slate-400 tracking-[0.12em] block">OPS · OVERVIEW</small>
              </div>
              <div className="ml-auto flex gap-1.5" role="group" aria-label="Date range">
                {RANGES.map((r) => (
                  <button
                    key={r.key}
                    onClick={() => setRange(r.key)}
                    aria-pressed={range === r.key}
                    className={cn(
                      "font-mono text-[11px] tracking-[0.12em] px-3.5 py-1.5 rounded-full border transition-all",
                      range === r.key
                        ? "bg-copper text-white border-copper font-semibold"
                        : "border-white/10 text-slate-300 hover:border-copper/40"
                    )}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* body */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px]">
              <div className="p-6">
                <div className="grid grid-cols-3 gap-2.5 mb-5" aria-live="polite">
                  {[
                    { s: "Revenue", b: d.rev, sp: d.revD },
                    { s: "Bookings", b: d.book, sp: d.bookD },
                    { s: "Avg ticket", b: d.ticket, sp: d.ticketD }
                  ].map((k, i) => (
                    <div key={i} className="bg-white/[0.04] border border-white/10 rounded-[var(--r-sm)] px-3.5 py-3">
                      <small className="font-mono text-[11px] tracking-[0.14em] uppercase text-slate-400 block mb-1.5">
                        {k.s}
                      </small>
                      <b className="font-mono text-[1.12rem] font-semibold">{k.b}</b>
                      <span className="font-mono text-[11px] text-green ml-1.5">{k.sp}</span>
                    </div>
                  ))}
                </div>
                <div
                  className="flex items-end gap-2.5 h-[170px] border-b border-white/10"
                  role="img"
                  aria-label="Revenue chart for the selected range"
                >
                  {d.bars.map((b, i) => (
                    <div key={`${range}-${i}`} className="flex-1 flex flex-col justify-end h-full gap-2">
                      <i
                        className={cn(
                          "block rounded-t-md transition-[height] duration-700 ease-out",
                          b.hot
                            ? "bg-gradient-to-b from-copper to-copper/30"
                            : "bg-gradient-to-b from-copper/75 to-copper/20"
                        )}
                        style={{ height: `${b.h}%` }}
                      />
                      <span className="font-mono text-[11px] tracking-wide text-slate-400 text-center">{b.l}</span>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="border-t lg:border-t-0 lg:border-l border-white/10 p-5">
                <h5 className="font-mono text-[11px] tracking-[0.18em] uppercase text-slate-400 mb-3.5">Top services</h5>
                <div>
                  {d.top.map(([name, amt], i) => (
                    <div
                      key={i}
                      className="flex justify-between gap-2.5 py-2.5 border-b border-white/10 last:border-0 text-[0.82rem]"
                    >
                      <span className="text-slate-300">{name}</span>
                      <b className="font-mono text-[0.78rem] font-medium text-white shrink-0">{amt}</b>
                    </div>
                  ))}
                </div>
              </aside>
            </div>

            {/* note */}
            <div className="flex justify-between flex-wrap gap-2 px-6 py-3.5 border-t border-white/10 font-mono text-[11px] tracking-[0.12em] text-slate-400">
              <span>
                UPDATED <b className="text-copper font-medium">LIVE</b> · NO EXPORTS, NO SPREADSHEETS
              </span>
              <span>SOURCES: GROW · SCHEDULE · SHOP</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ROADMAP ---------- */}
      <section className="sec py-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="eyebrow eyebrow-line justify-center">The honest roadmap</span>
            <h2 className="h2 font-display font-bold">
              What's live, what's <span className="text-copper">next</span>
            </h2>
            <p className="lede mx-auto">
              We'd rather under-promise: here's exactly where each OPS feature stands today.
            </p>
          </div>

          <StaggerGroup className="flex flex-col gap-2.5 max-w-3xl mx-auto">
            {ROADMAP.map((rm, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex items-center gap-4 bg-navy-800 text-white border border-white/10 rounded-[var(--r-md)] px-5.5 py-4",
                  rm.status !== "LIVE" && "opacity-80"
                )}
              >
                <div>
                  <b className="font-display text-[0.95rem] font-semibold block">{rm.title}</b>
                  <small className="text-[0.8rem] text-slate-400">{rm.sub}</small>
                </div>
                <span
                  className={cn(
                    "ml-auto shrink-0 font-mono text-[11px] tracking-[0.14em] px-3.5 py-1.5 rounded-full border",
                    rm.status === "LIVE" && "bg-green/10 text-green border-green/30",
                    rm.status === "IN DEVELOPMENT" && "bg-copper-tint text-copper border-copper/30",
                    rm.status === "PLANNED" && "bg-white/[0.04] text-slate-400 border-dashed border-white/10"
                  )}
                >
                  {rm.status}
                </span>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ---------- FEATURE GRID ---------- */}
      <section className="sec-tight py-20 bg-white dark:bg-navy-800 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow eyebrow-line">Everything in OPS</span>
            <h2 className="h2 font-display font-bold">
              Five features. Zero <span className="text-copper">spreadsheets</span>.
            </h2>
          </div>

          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {FEATURES.map((f, idx) => {
              const inner = (
                <>
                  <b className="font-display font-semibold text-[0.99rem] flex items-center gap-2.5 flex-wrap">
                    {f.title}
                    {f.soon && (
                      <span className="font-mono text-[11px] tracking-[0.1em] bg-white/[0.04] text-slate-400 px-1.5 py-0.5 rounded">
                        COMING SOON
                      </span>
                    )}
                  </b>
                  <p className="text-[0.85rem] text-slate-300 flex-1">{f.desc}</p>
                  {!f.soon && (
                    <span className="font-mono text-[11px] tracking-[0.06em] text-copper opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                      LEARN MORE →
                    </span>
                  )}
                </>
              );
              return f.href && !f.soon ? (
                <Link
                  key={idx}
                  href={f.href}
                  className="group bg-navy-800 text-white border border-white/10 rounded-[var(--r-md)] p-5.5 flex flex-col gap-2 transition-all hover:border-copper/40 hover:-translate-y-0.5"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={idx}
                  className="bg-navy-800 text-white border border-white/10 rounded-[var(--r-md)] p-5.5 flex flex-col gap-2 opacity-75"
                >
                  {inner}
                </div>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* ---------- OUTCOME STATS ---------- */}
      <section className="sec-tight py-20 bg-secondary border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5 text-center">
            {STATS.map((s, idx) => (
              <div key={idx}>
                <CountUp
                  value={s.value}
                  className="font-mono font-semibold text-4xl md:text-5xl tracking-tight text-copper block"
                />
                <span className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-faint block mt-2">
                  {s.label}
                </span>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="final py-28 relative overflow-hidden text-center bg-radial-[at_bottom_center] from-copper/12 via-transparent to-transparent">
        <div className="wrap max-w-4xl mx-auto px-6 relative z-10">
          <span className="eyebrow eyebrow-line justify-center">OPS · Pillar 04</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.08] mt-4 mb-4">
            The whole business, <span className="text-copper">accounted for</span>.
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            Four pillars, one platform — from the first lead in GROW to the last line in the books.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="/onboarding?plan=free" />}>
              Start free
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/platform" />}>
              See the whole platform →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
