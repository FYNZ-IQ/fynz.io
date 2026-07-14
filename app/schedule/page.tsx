"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup } from "@/components/animations";
import { Chip, ArrowLink } from "@/components/shared";
import { Button, Card } from "@/components/ui";
import { cn } from "@/lib/utils";

type Appt = {
  title: string;
  time?: string;
  night?: string; // after-hours booking label; presence => night styling
};

const WEEK: { day: string; date: string; appts: Appt[] }[] = [
  {
    day: "MON",
    date: "6",
    appts: [
      { title: "Cut & style", time: "9:00 AM" },
      { title: "Color touch-up", time: "11:30 AM", night: "11:18 PM ☾" },
      { title: "Beard trim", time: "2:00 PM" },
    ],
  },
  {
    day: "TUE",
    date: "7",
    appts: [
      { title: "Balayage", time: "10:00 AM" },
      { title: "Kids cut", time: "1:30 PM" },
    ],
  },
  {
    day: "WED",
    date: "8",
    appts: [
      { title: "Full color", time: "9:30 AM", night: "6:04 AM ☾" },
      { title: "Blowout", time: "12:00 PM" },
      { title: "Cut & style", time: "3:30 PM" },
    ],
  },
  {
    day: "THU",
    date: "9",
    appts: [
      { title: "Consultation", time: "10:00 AM" },
      { title: "Highlights", time: "11:00 AM", night: "SUN 9:52 PM ☾" },
      { title: "Cut & style", time: "2:30 PM" },
      { title: "Beard trim", time: "4:30 PM" },
    ],
  },
  {
    day: "FRI",
    date: "10",
    appts: [
      { title: "Balayage", time: "9:00 AM" },
      { title: "Color & cut", time: "12:30 PM" },
      { title: "Blowout", time: "4:00 PM", night: "12:11 AM ☾" },
    ],
  },
  {
    day: "SAT",
    date: "11",
    appts: [
      { title: "Bridal trial", time: "9:00 AM" },
      { title: "Cut & style", time: "11:00 AM" },
      { title: "Highlights", time: "1:00 PM" },
      { title: "Kids cut", time: "3:30 PM" },
    ],
  },
  {
    day: "SUN",
    date: "12",
    appts: [{ title: "Closed — but bookings kept landing", night: "☾" }],
  },
];

const FEATURES = [
  {
    title: "Booking core",
    desc: "A branded page where customers self-book, reschedule, and pay deposits 24/7.",
    href: "/features/booking-core",
  },
  {
    title: "Smart calendar & scheduling",
    desc: "Buffers, padding, and availability rules across services and staff.",
    href: "/features/calendar",
  },
  {
    title: "Team & staff management",
    desc: "Schedules, services, commissions, and permissions per team member.",
    href: "/features/team",
  },
  {
    title: "Customer management",
    desc: "Visit history, notes, preferences, and no-show flags on every profile.",
    href: "/features/customers",
  },
  {
    title: "Reminders & no-show reduction",
    desc: "Automatic SMS + email reminders that keep chairs and slots full.",
    href: "/features/reminders",
  },
  {
    title: "Booking channels",
    desc: "Instagram, website embed, QR, WhatsApp, and search — one availability everywhere.",
    href: "/features/booking-channels",
  },
  {
    title: "Multi-location",
    desc: "Separate calendars, staff, and services per location under one account.",
    href: "/features/multi-location",
  },
];

const SERVICES = [
  { name: "Cut & style", meta: "45 MIN", price: "$65" },
  { name: "Balayage", meta: "2.5 HRS · $50 DEPOSIT", price: "$180" },
  { name: "Beard trim", meta: "20 MIN", price: "$30" },
];

const STAFF = ["Any", "Maya", "Jordan", "Aisha"];
const SLOTS = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"];

/* -------------------------------------------------------------------------- */
/*  Interactive booking preview widget                                        */
/* -------------------------------------------------------------------------- */

function BookingWidget() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("Cut & style");
  const [staff, setStaff] = useState("Any");
  const [time, setTime] = useState("1:00 PM");

  const summary = `${service}${staff === "Any" ? "" : ` with ${staff}`} · Thu Jul 9 · ${time}`;

  return (
    <div className="bg-navy-800 text-white border border-white/10 rounded-[var(--r-lg)] overflow-hidden shadow-[var(--shadow-md)]">
      {/* head */}
      <div className="flex items-center gap-3 px-[22px] py-[18px] border-b border-white/10">
        <span className="w-[34px] h-[34px] rounded-[10px] bg-copper-tint grid place-items-center shrink-0">
          <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M4 26 L16 4 L28 26" stroke="currentColor" className="text-copper" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 18 H23" stroke="currentColor" className="text-copper" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </span>
        <div>
          <b className="font-display text-[0.95rem] font-bold block leading-tight">Maple &amp; Main Salon</b>
          <small className="font-mono text-[11px] tracking-[0.12em] text-slate-400">POWERED BY FYNZ</small>
        </div>
        <span className="ml-auto font-mono text-[11px] tracking-[0.14em] text-copper bg-copper-tint px-[9px] py-[3px] rounded-[5px]">
          LIVE PREVIEW
        </span>
      </div>

      {/* step dots */}
      <div className="flex gap-1.5 px-[22px] pt-3.5" aria-hidden="true">
        {[1, 2, 3].map((d) => (
          <span
            key={d}
            className={cn(
              "flex-1 h-[3px] rounded-[3px] transition-colors",
              d <= step ? "bg-copper" : "bg-white/[0.04]"
            )}
          />
        ))}
      </div>

      {/* body */}
      <div className="px-[22px] pb-[22px] pt-[18px] min-h-[300px]">
        {/* STEP 1 — service */}
        {step === 1 && (
          <div>
            <span className="block font-mono text-[11px] tracking-[0.18em] uppercase text-slate-400 mb-3">
              1 · Choose a service
            </span>
            {SERVICES.map((s) => (
              <button
                key={s.name}
                onClick={() => {
                  setService(s.name);
                  setStep(2);
                }}
                className="w-full flex items-center gap-3 text-left bg-white/[0.04] border border-white/10 rounded-[var(--r-sm)] px-[15px] py-[13px] mb-[9px] transition-colors hover:border-copper/45"
              >
                <div>
                  <b className="font-display text-[0.88rem] font-semibold block">{s.name}</b>
                  <small className="font-mono text-[11px] text-slate-400 tracking-[0.06em]">{s.meta}</small>
                </div>
                <span className="ml-auto font-mono text-[0.84rem] text-copper">{s.price}</span>
              </button>
            ))}
          </div>
        )}

        {/* STEP 2 — staff + time */}
        {step === 2 && (
          <div>
            <button
              onClick={() => setStep(1)}
              className="font-mono text-[11px] tracking-[0.14em] text-slate-400 mb-3.5 inline-flex items-center gap-1.5 hover:text-copper"
            >
              ← BACK
            </button>
            <span className="block font-mono text-[11px] tracking-[0.18em] uppercase text-slate-400 mb-3">
              2 · Pick your person &amp; time — THU JUL 9
            </span>
            <div className="flex gap-2 mb-4 flex-wrap" role="group" aria-label="Choose staff member">
              {STAFF.map((name) => (
                <button
                  key={name}
                  onClick={() => setStaff(name)}
                  className={cn(
                    "font-display text-[0.8rem] font-semibold px-[15px] py-2 rounded-full border transition-all",
                    staff === name
                      ? "bg-copper text-copper-ink border-copper"
                      : "border-white/10 text-slate-300 hover:border-copper/45"
                  )}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2" role="group" aria-label="Available times">
              {SLOTS.map((slot) => (
                <button
                  key={slot}
                  onClick={() => {
                    setTime(slot);
                    setStep(3);
                  }}
                  className="font-mono text-[0.8rem] px-1.5 py-2.5 rounded-lg border border-white/10 text-slate-300 text-center transition-all hover:border-copper/50 hover:text-white"
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3 — confirmed */}
        {step === 3 && (
          <div className="text-center pt-2.5" aria-live="polite">
            <span className="w-[52px] h-[52px] rounded-full mx-auto mt-1.5 mb-4 bg-green/10 border border-green/40 grid place-items-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-[22px] h-[22px] text-green" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <h4 className="font-display font-bold text-[1.08rem] mb-1.5">You&apos;re booked!</h4>
            <p className="text-[0.86rem] text-slate-300 mb-4">{summary}</p>
            <div className="flex flex-col gap-[7px] mb-[18px]">
              {[
                "CONFIRMATION TEXT + EMAIL SENT",
                "REMINDER SCHEDULED · −24H & −2H",
                "ADDED TO STAFF CALENDAR · SYNCED",
              ].map((b) => (
                <span
                  key={b}
                  className="font-mono text-[11px] tracking-[0.12em] px-3 py-2 rounded-[7px] bg-white/[0.04] border border-white/10 text-slate-300 flex items-center gap-[9px]"
                >
                  <span className="text-green not-italic">✓</span> {b}
                </span>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="font-display font-semibold text-[0.85rem] text-copper hover:underline underline-offset-[3px]"
            >
              ← Book another (start over)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Shared mock-panel primitives                                              */
/* -------------------------------------------------------------------------- */

function Panel({ title, meta, children }: { title: string; meta: string; children: React.ReactNode }) {
  return (
    <div className="bg-navy-800 text-white border border-white/10 rounded-[var(--r-lg)] p-[22px] shadow-[var(--shadow-md)]" aria-hidden="true">
      <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-slate-400 mb-3.5 flex justify-between">
        {title}
        <b className="text-copper font-medium">{meta}</b>
      </div>
      {children}
    </div>
  );
}

function Lead({
  icon,
  title,
  sub,
  status,
  hot,
}: {
  icon: string;
  title: string;
  sub: string;
  status: string;
  hot?: boolean;
}) {
  return (
    <div className="flex items-center gap-[11px] bg-white/[0.04] border border-white/10 rounded-[var(--r-sm)] px-3.5 py-2.5">
      <span className="w-8 h-8 rounded-full bg-copper-tint text-copper grid place-items-center font-display text-[0.72rem] font-bold shrink-0">
        {icon}
      </span>
      <div className="min-w-0">
        <b className="text-[0.83rem] font-semibold block leading-tight">{title}</b>
        <small className="font-mono text-[11px] text-slate-400 tracking-[0.06em]">{sub}</small>
      </div>
      <span
        className={cn(
          "ml-auto font-mono text-[11px] px-[9px] py-[3px] rounded-[5px] shrink-0",
          hot ? "bg-green/10 text-green" : "bg-copper-tint text-copper"
        )}
      >
        {status}
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function SchedulePage() {
  return (
    <div className="flex flex-col w-full">
      {/* ============ HERO ============ */}
      <section className="relative pt-32 md:pt-40 text-center overflow-hidden border-b border-line-soft">
        <div className="absolute inset-0 pointer-events-none bg-radial-[at_50%_0%] from-copper/10 to-transparent" />
        <div className="wrap max-w-7xl mx-auto px-6 relative">
          <span className="eyebrow eyebrow-line justify-center">
            <Link href="/platform#schedule" className="hover:underline underline-offset-[3px]">
              Pillar 02 · SCHEDULE
            </Link>
          </span>
          <h1 className="font-display font-extrabold tracking-tight leading-[1.07] text-[clamp(2.3rem,4.8vw,3.6rem)] mt-5 mb-4.5 max-w-[800px] mx-auto">
            Your calendar, filled and organized — <span className="text-copper">24/7</span>
          </h1>
          <p className="lede mx-auto mb-8">
            Customers book themselves around the clock. Staff schedules stay in sync. Reminders quietly
            kill no-shows. You just show up and do the work.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="/onboarding?plan=free" />}>
              Start free
            </Button>
            <Button size="lg" variant="outline" render={<Link href="#preview" />}>
              Try the booking preview
            </Button>
          </div>
        </div>

        {/* self-filling week strip */}
        <div className="mt-16 pb-2">
          <div className="wrap max-w-7xl mx-auto px-6 flex justify-between font-mono text-[11px] tracking-[0.2em] text-faint mb-3">
            <span>THIS WEEK · MAPLE &amp; MAIN SALON</span>
            <span>
              <b className="text-copper font-medium">☾</b> = BOOKED AFTER HOURS
            </span>
          </div>
          <div className="wrap max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {WEEK.map((d) => (
                <div
                  key={d.day}
                  className="bg-navy-800 text-white border border-white/10 rounded-t-[var(--r-md)] border-b-0 px-2.5 pt-3 pb-5 min-h-[230px]"
                >
                  <h6 className="font-mono text-[11px] font-medium tracking-[0.16em] text-slate-400 text-center mb-3 pb-2.5 border-b border-white/10">
                    {d.day} <b className="text-white font-semibold">{d.date}</b>
                  </h6>
                  {d.appts.map((a, i) => (
                    <div
                      key={i}
                      className={cn(
                        "relative bg-white/[0.04] border border-white/10 rounded-[7px] px-2.5 py-2 mb-[7px] border-l-2",
                        a.night ? "border-l-green" : "border-l-copper/60"
                      )}
                    >
                      {a.night && (
                        <span className="absolute top-1.5 right-2 font-mono text-[8px] text-green tracking-[0.05em]">
                          {a.night}
                        </span>
                      )}
                      <b className="font-display text-[0.68rem] font-semibold block leading-tight">{a.title}</b>
                      {a.time && <small className="font-mono text-[11px] text-slate-400 tracking-[0.05em]">{a.time}</small>}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ BENEFIT ROWS ============ */}
      <section className="sec py-20 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <ScrollReveal className="sec-head max-w-[720px] mb-14">
            <span className="eyebrow eyebrow-line">How SCHEDULE works</span>
            <h2 className="h2">
              The front desk that never takes a <span className="text-copper">lunch break</span>
            </h2>
            <p className="lede">
              Four pieces working together — and automation gluing each one to the GROW and SHOP pillars on
              either side.
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-24">
            {/* Booking core */}
            <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Chip>BOOKING CORE</Chip>
                <h3 className="font-display font-bold text-[clamp(1.4rem,2.4vw,1.85rem)] leading-tight tracking-tight mt-3.5 mb-3">
                  A booking page that sells while you sleep
                </h3>
                <p className="text-muted text-[1.02rem]">
                  Your services, staff, and real availability on a branded page customers actually enjoy
                  using. They book, reschedule, and pay deposits at 11pm on a Sunday — no phone tag, no
                  double-booking.
                </p>
                <ArrowLink href="/features/booking-core">Booking core</ArrowLink>
              </div>
              <Panel title="BOOKINGS · LAST 24H" meta="9 NEW">
                <div className="flex flex-col gap-2">
                  <Lead icon="☾" title="Balayage — Sat 1:00 PM" sub="BOOKED 11:18 PM · DEPOSIT PAID" status="CONFIRMED" hot />
                  <Lead icon="☾" title="Beard trim — Thu 4:30 PM" sub="BOOKED 12:11 AM" status="CONFIRMED" hot />
                  <Lead icon="RS" title="Rescheduled — Fri → Mon" sub="SELF-SERVE · NO PHONE CALL" status="UPDATED" />
                </div>
              </Panel>
            </ScrollReveal>

            {/* Smart calendar (reversed) */}
            <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <Panel title="JULY · WEEK 2" meta="CONFLICTS: 0">
                <div className="grid grid-cols-7 gap-1.5">
                  {["M", "T", "W", "T", "F", "S", "S"].map((h, i) => (
                    <div key={`h${i}`} className="aspect-square border border-white/10 rounded-[7px] grid place-items-center font-mono text-[11px] text-slate-400">
                      {h}
                    </div>
                  ))}
                  {[
                    { n: "6" }, { n: "7", busy: true }, { n: "8", busy: true }, { n: "9", today: true }, { n: "10", busy: true }, { n: "11", busy: true }, { n: "12" },
                    { n: "13", busy: true }, { n: "14", busy: true }, { n: "15" }, { n: "16", busy: true }, { n: "17", busy: true }, { n: "18", busy: true }, { n: "19" },
                  ].map((c, i) => (
                    <div
                      key={`c${i}`}
                      className={cn(
                        "aspect-square border rounded-[7px] grid place-items-center font-mono text-[11px]",
                        c.today
                          ? "bg-copper text-copper-ink font-semibold border-copper"
                          : c.busy
                            ? "bg-copper-tint border-copper/30 text-copper"
                            : "border-white/10 text-slate-400"
                      )}
                    >
                      {c.n}
                    </div>
                  ))}
                </div>
              </Panel>
              <div className="lg:order-first">
                <Chip>SMART CALENDAR</Chip>
                <h3 className="font-display font-bold text-[clamp(1.4rem,2.4vw,1.85rem)] leading-tight tracking-tight mt-3.5 mb-3">
                  One calendar that thinks ahead
                </h3>
                <p className="text-muted text-[1.02rem]">
                  Buffers between services, padding for cleanup, rules per service and per staff member — and
                  two-way sync with the calendars you already live in. The calendar prevents conflicts instead
                  of you untangling them.
                </p>
                <ArrowLink href="/features/calendar">Smart calendar &amp; scheduling</ArrowLink>
              </div>
            </ScrollReveal>

            {/* Team */}
            <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Chip>TEAM</Chip>
                <h3 className="font-display font-bold text-[clamp(1.4rem,2.4vw,1.85rem)] leading-tight tracking-tight mt-3.5 mb-3">
                  Every chair, every shift, in sync
                </h3>
                <p className="text-muted text-[1.02rem]">
                  Individual schedules, services, time off, and permissions per team member — plus performance
                  at a glance. New hires get their own booking link on day one.
                </p>
                <ArrowLink href="/features/team">Team management</ArrowLink>
              </div>
              <Panel title="STAFF · TODAY" meta="3 ON · 1 OFF">
                <div className="flex flex-col gap-2">
                  <Lead icon="MR" title="Maya R." sub="9–5 · COLOR & CUTS · 6 BOOKED" status="ON" hot />
                  <Lead icon="JT" title="Jordan T." sub="10–6 · BARBER · 7 BOOKED" status="ON" hot />
                  <Lead icon="AL" title="Aisha L." sub="12–8 · STYLIST · 5 BOOKED" status="ON" hot />
                  <Lead icon="DK" title="Devon K." sub="PTO · AUTO-HIDDEN FROM BOOKING" status="OFF" />
                </div>
              </Panel>
            </ScrollReveal>

            {/* Customers + reminders (reversed) */}
            <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <Panel title="SARAH MITCHELL · REGULAR" meta="14 VISITS">
                <div className="flex gap-2.5 mb-2.5 items-start">
                  <span className="w-[30px] h-[30px] rounded-[9px] shrink-0 grid place-items-center font-mono text-[11px] font-semibold tag-sms">RM</span>
                  <div className="bg-white/[0.04] border border-white/10 rounded-[4px_12px_12px_12px] px-3.5 py-2.5 text-[0.82rem] text-slate-300">
                    Reminder: Balayage tomorrow at 1:30 PM with Maya. Reply C to confirm.
                  </div>
                </div>
                <div className="flex gap-2.5 mb-2.5 items-start flex-row-reverse">
                  <span className="w-[30px] h-[30px] rounded-[9px] shrink-0 grid place-items-center font-mono text-[11px] font-semibold tag-sms">SM</span>
                  <div className="bg-copper-tint border border-copper/25 rounded-[12px_4px_12px_12px] px-3.5 py-2.5 text-[0.82rem] text-white">
                    C
                  </div>
                </div>
                <div className="flex justify-between items-center bg-white/[0.04] border border-white/10 rounded-[var(--r-sm)] px-3.5 py-2.5">
                  <div>
                    <b className="text-[0.83rem] font-semibold block leading-tight">Prefers: cooler tones · oat-milk latte</b>
                    <small className="font-mono text-[11px] text-slate-400">NOTES · VISIBLE TO ASSIGNED STAFF</small>
                  </div>
                  <span className="font-mono text-[0.82rem] text-green">✓</span>
                </div>
              </Panel>
              <div className="lg:order-first">
                <Chip>CUSTOMERS &amp; REMINDERS</Chip>
                <h3 className="font-display font-bold text-[clamp(1.4rem,2.4vw,1.85rem)] leading-tight tracking-tight mt-3.5 mb-3">
                  Regulars remembered. No-shows retired.
                </h3>
                <p className="text-muted text-[1.02rem]">
                  Every customer profile carries visit history, notes, and preferences — so &quot;the
                  usual&quot; actually means something. Automatic SMS and email reminders do the chasing, and
                  repeat no-shows can be asked for a deposit next time.
                </p>
                <div className="flex flex-col items-start">
                  <ArrowLink href="/features/customers">Customer management</ArrowLink>
                  <ArrowLink href="/features/reminders">Reminders &amp; no-show reduction</ArrowLink>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ BOOKING PREVIEW (interactive) ============ */}
      <section id="preview" className="sec py-20 bg-card border-b border-line-soft scroll-mt-20">
        <div className="wrap max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-16 items-center">
          <ScrollReveal>
            <span className="eyebrow eyebrow-line">Live preview</span>
            <h2 className="font-display font-bold text-[clamp(1.7rem,3vw,2.4rem)] leading-tight tracking-tight mt-3.5 mb-3.5">
              This is what your customers <span className="text-copper">see</span>
            </h2>
            <p className="text-muted text-[1.02rem] mb-3">
              Try it — pick a service and a time. Three taps, no account, no app to download. This exact
              widget lives on your booking page, your Instagram, your site, and your QR code.
            </p>
            <ul className="list-none mt-5 flex flex-col gap-2.5">
              {[
                <>Real-time availability — no double-booking, ever</>,
                <>
                  Deposits collected at booking through{" "}
                  <Link href="/features/payments" className="text-copper hover:underline underline-offset-[3px]">
                    SHOP payments
                  </Link>
                </>,
                <>Confirmation + reminder automations fire instantly</>,
              ].map((li, i) => (
                <li key={i} className="flex gap-2.5 text-[0.93rem] text-muted">
                  <span className="text-copper font-mono shrink-0">→</span>
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <BookingWidget />
          </ScrollReveal>
        </div>
      </section>

      {/* ============ FEATURE GRID ============ */}
      <section className="sec py-20 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <ScrollReveal className="sec-head max-w-[720px] mb-14">
            <span className="eyebrow eyebrow-line">Everything in SCHEDULE</span>
            <h2 className="h2">
              Seven features. Zero <span className="text-copper">phone tag</span>.
            </h2>
          </ScrollReveal>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {FEATURES.map((f) => (
              <Card
                key={f.title}
                className="group bg-navy-800 text-white border border-white/10 rounded-[var(--r-md)] p-[22px] flex flex-col gap-[7px] shadow-none transition-all hover:-translate-y-[3px] hover:border-copper/40"
              >
                <Link href={f.href} className="flex flex-col gap-[7px] h-full">
                  <b className="font-display font-semibold text-[0.99rem]">{f.title}</b>
                  <p className="text-[0.85rem] text-slate-300 flex-1">{f.desc}</p>
                  <span className="font-mono text-[11px] text-copper tracking-[0.06em] opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                    LEARN MORE →
                  </span>
                </Link>
              </Card>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="final py-28 relative overflow-hidden text-center bg-radial-[at_bottom_center] from-copper/10 via-transparent to-transparent">
        <div className="wrap max-w-4xl mx-auto px-6 relative z-10">
          <span className="eyebrow eyebrow-line justify-center">SCHEDULE · Pillar 02</span>
          <h2 className="font-display font-extrabold text-[clamp(2.2rem,5vw,3.4rem)] tracking-tight leading-[1.08] mt-4.5 mb-4">
            Booked solid, <span className="text-copper">hands free</span>.
          </h2>
          <p className="lede mx-auto mb-9">
            And every booking flows straight into payments, reminders, and review requests — because booking
            is just the beginning.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="/onboarding?plan=free" />}>
              Start free
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/shop" />}>
              Next pillar: SHOP →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
