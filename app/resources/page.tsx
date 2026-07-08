"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup } from "@/components/animations";
import { Chip } from "@/components/shared";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

type Filter = "all" | "playbook" | "recipe" | "industry" | "update";

const CATEGORIES = [
  {
    href: "#playbooks",
    count: "12 POSTS",
    title: "Growth playbooks",
    desc: "Step-by-step plans for getting and keeping customers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </svg>
    )
  },
  {
    href: "#recipes",
    count: "18 POSTS",
    title: "Automation recipes",
    desc: "Copy-paste workflows — set once, run forever.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    )
  },
  {
    href: "#industry",
    count: "9 POSTS",
    title: "Industry guides",
    desc: "How salons, trades, clinics, and cafés run on FYNZ.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
      </svg>
    )
  },
  {
    href: "#updates",
    count: "6 POSTS",
    title: "Product updates",
    desc: "What shipped, what's next — including the OPS roadmap.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
      </svg>
    )
  }
];

const FILTERS: { label: string; value: Filter }[] = [
  { label: "ALL", value: "all" },
  { label: "PLAYBOOKS", value: "playbook" },
  { label: "RECIPES", value: "recipe" },
  { label: "INDUSTRY", value: "industry" },
  { label: "UPDATES", value: "update" }
];

// PLACEHOLDER: real data needed — featured article + all article cards below are placeholder content.
const ARTICLES = [
  {
    href: "#a1",
    cat: "recipe" as Filter,
    label: "AUTOMATION RECIPE",
    title: "The 5-step review engine: from \"great visit\" to 5 stars on Google, automatically",
    desc: "The exact trigger timing, message copy, and follow-up window that gets reviews without nagging.",
    date: "JUN 18, 2026",
    read: "5 MIN",
    gx: "70%"
  },
  {
    href: "#a2",
    cat: "industry" as Filter,
    label: "INDUSTRY GUIDE",
    title: "Restaurants: own the guest the delivery apps hide from you",
    desc: "Third-party apps keep the customer data. Here's how to capture it back — QR to first-party list in one visit.",
    date: "JUN 12, 2026",
    read: "8 MIN",
    gx: "25%"
  },
  {
    href: "#a3",
    cat: "playbook" as Filter,
    label: "PLAYBOOK",
    title: "Ten subscriptions to one: a 30-day consolidation plan that doesn't break anything",
    desc: "Which tool to migrate first, what to run in parallel, and when it's safe to cancel each one.",
    date: "JUN 5, 2026",
    read: "11 MIN",
    gx: "85%"
  },
  {
    href: "#a4",
    cat: "recipe" as Filter,
    label: "AUTOMATION RECIPE",
    title: "The no-show killer: reminder timing that actually changes behavior",
    desc: "−24h, −2h, and the confirm-by-reply trick — with the message templates to steal.",
    date: "MAY 29, 2026",
    read: "4 MIN",
    gx: "40%"
  },
  {
    href: "#a5",
    cat: "update" as Filter,
    label: "PRODUCT UPDATE",
    title: "What's new in FYNZ: Voice AI improvements & the road to accounting",
    desc: "This quarter's shipped features, plus an honest look at where the OPS pillar stands.",
    date: "MAY 22, 2026",
    read: "6 MIN",
    gx: "60%"
  },
  {
    href: "#a6",
    cat: "industry" as Filter,
    label: "INDUSTRY GUIDE",
    title: "Plumbers: the first business to answer wins the job",
    desc: "Why speed-to-lead decides emergency work — and the missed-call text-back setup for crews in the field.",
    date: "MAY 15, 2026",
    read: "7 MIN",
    gx: "15%"
  }
];

const HELP_DOCS = [
  { href: "#doc1", title: "Connect your Google or Outlook calendar", tag: "2 MIN" },
  { href: "#doc2", title: "Set up Stripe, PayPal, or Square payments", tag: "4 MIN" },
  { href: "#doc3", title: "Add your team and set permissions", tag: "3 MIN" },
  { href: "#doc4", title: "Embed the booking widget on your website", tag: "2 MIN" }
];

const GUIDES = [
  { href: "#g1", title: "Your first week on FYNZ, day by day", tag: "GUIDE" },
  { href: "#g2", title: "Migrating from a booking-only tool", tag: "GUIDE" },
  { href: "#g3", title: "The automation cookbook: 10 workflows to steal", tag: "GUIDE" },
  { href: "#g4", title: "Hiring your first AI employee", tag: "GUIDE" }
];

export default function ResourcesPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<{ text: string; kind: "ok" | "bad" } | null>(null);
  const [err, setErr] = useState(false);

  const subscribe = () => {
    const v = email.trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    if (!ok) {
      setErr(true);
      setMsg({ text: "THAT EMAIL DOESN'T LOOK RIGHT — MIND CHECKING IT?", kind: "bad" });
      return;
    }
    setErr(false);
    setMsg({ text: "YOU'RE IN — FIRST BRIEF LANDS SOON. ✓", kind: "ok" });
    setEmail("");
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero + Featured */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden border-b border-line-soft">
        <div className="absolute inset-0 bg-radial-[at_18%_20%] from-copper/10 via-transparent to-transparent pointer-events-none" />
        <div className="wrap max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-14 items-center">
          <div>
            <Chip className="mb-4">Resources</Chip>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.08] mb-4">
              Learn it once. <span className="text-copper">Automate it</span> forever.
            </h1>
            <p className="text-muted text-lg max-w-xl leading-relaxed">
              Playbooks, automation recipes, and straight-talking guides for owners who&apos;d rather run their business than research software.
            </p>
          </div>

          {/* Featured article card — PLACEHOLDER content */}
          <Link
            href="#article"
            className="group block bg-navy-800 border border-white/10 rounded-[var(--r-lg)] overflow-hidden shadow-[var(--shadow-md)] transition-all duration-250 hover:border-copper/40 hover:-translate-y-1"
          >
            <div
              className="relative h-[190px] border-b border-white/10 bg-copper-tint"
              style={{
                backgroundImage:
                  "radial-gradient(70% 100% at 80% 0%, var(--copper-tint), transparent 60%), repeating-linear-gradient(-45deg, rgba(181,100,63,0.05) 0 2px, transparent 2px 14px)"
              }}
              aria-hidden="true"
            >
              <span className="absolute top-4 left-[18px] font-mono text-[9px] tracking-[0.18em] bg-copper text-copper-ink px-3 py-[5px] rounded-full font-semibold">
                FEATURED
              </span>
              <svg
                className="absolute right-6 -bottom-3.5 opacity-50"
                width="120"
                height="120"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path d="M4 26 L16 4 L28 26" stroke="var(--copper)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 18 H23" stroke="var(--copper)" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="p-6 md:px-[26px] md:py-[26px]">
              <span className="font-mono text-[9.5px] tracking-[0.18em] text-copper">PLAYBOOK</span>
              <h2 className="font-display font-bold text-[1.35rem] leading-[1.25] my-2.5 text-white group-hover:text-copper transition-colors">
                The missed-call money leak: why 62% of small-business calls go unanswered — and the 30-second fix
              </h2>
              <p className="text-[0.92rem] text-slate-300">
                Every unanswered ring is a customer dialing your competitor. Here&apos;s the text-back automation that turns missed calls into booked appointments.
              </p>
              <div className="flex gap-3.5 mt-4 font-mono text-[9.5px] tracking-[0.1em] text-slate-400">
                <span>FYNZ TEAM</span>
                <span>JUN 24, 2026</span>
                <span>7 MIN READ</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Category cards */}
      <section className="pt-12 pb-20 md:pb-24">
        <div className="wrap max-w-7xl mx-auto px-6">
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative bg-navy-800 border border-white/10 rounded-[var(--r-md)] px-5 py-[22px] transition-all duration-200 hover:border-copper/40 hover:-translate-y-[3px]"
              >
                <span className="absolute top-5 right-[18px] font-mono text-[9px] tracking-[0.08em] text-slate-400">
                  {cat.count}
                </span>
                <span className="w-[38px] h-[38px] rounded-[11px] bg-copper-tint grid place-items-center mb-[13px] [&_svg]:w-[18px] [&_svg]:h-[18px] [&_svg]:stroke-copper">
                  {cat.icon}
                </span>
                <b className="font-display font-semibold text-[0.95rem] block mb-1 text-white group-hover:text-copper transition-colors">
                  {cat.title}
                </b>
                <p className="text-[0.79rem] text-slate-400 leading-[1.5]">{cat.desc}</p>
              </Link>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Article grid */}
      <section className="sec py-20 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-8">
            <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">Latest</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Fresh from the <span className="text-copper">field</span>
            </h2>
          </div>

          {/* Filter chips */}
          <div className="flex gap-2 flex-wrap mb-7" role="group" aria-label="Filter articles">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={cn(
                  "font-mono text-[10px] tracking-[0.12em] px-4 py-2 rounded-full border transition-all duration-200",
                  filter === f.value
                    ? "bg-copper text-copper-ink border-copper font-semibold"
                    : "border-line-soft text-muted hover:border-copper/40"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ARTICLES.filter((a) => filter === "all" || a.cat === filter).map((art) => (
              <Link
                key={art.href}
                href={art.href}
                className="group flex flex-col bg-navy-800 border border-white/10 rounded-[var(--r-md)] overflow-hidden transition-all duration-200 hover:border-copper/40 hover:-translate-y-[3px]"
              >
                <div
                  className="h-[110px] border-b border-white/10 bg-white/[0.06]"
                  style={{
                    backgroundImage: `radial-gradient(60% 110% at ${art.gx} 0%, var(--copper-tint), transparent 62%)`
                  }}
                  aria-hidden="true"
                />
                <div className="flex flex-col flex-1 px-5 pt-[18px] pb-5">
                  <span className="font-mono text-[9px] tracking-[0.16em] text-copper">{art.label}</span>
                  <h3 className="font-display font-semibold text-[1.02rem] leading-[1.3] my-2 text-white group-hover:text-copper transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-[0.83rem] text-slate-300 flex-1">{art.desc}</p>
                  <div className="flex gap-3.5 mt-3.5 font-mono text-[9.5px] tracking-[0.1em] text-slate-400">
                    <span>{art.date}</span>
                    <span>{art.read}</span>
                  </div>
                </div>
              </Link>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Docs / Guides */}
      <section id="docs" className="sec py-20 md:py-24 bg-card border-b border-line-soft scroll-mt-20">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">Help yourself</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Docs &amp; guides, when you <span className="text-copper">need them</span>
            </h2>
          </div>

          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-[18px]">
            {/* Help center */}
            <div className="bg-navy-800 border border-white/10 rounded-[var(--r-lg)] p-8">
              <span className="w-11 h-11 rounded-xl bg-copper-tint grid place-items-center mb-[18px] [&_svg]:w-5 [&_svg]:h-5 [&_svg]:stroke-copper">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01" />
                </svg>
              </span>
              <h3 className="font-display font-bold text-[1.2rem] mb-2 text-white">Help center</h3>
              <p className="text-[0.9rem] text-slate-300 mb-5">
                Searchable answers for every button in the product — written for owners, not engineers.
              </p>
              {HELP_DOCS.map((doc) => (
                <Link
                  key={doc.href}
                  href={doc.href}
                  className="flex justify-between items-center gap-3 py-3 border-b border-white/10 last:border-b-0 text-[0.9rem] text-slate-300 transition-all duration-150 hover:text-copper hover:pl-2"
                >
                  <span>{doc.title}</span>
                  <span className="font-mono text-[9px] text-slate-400 tracking-[0.1em] shrink-0">{doc.tag}</span>
                </Link>
              ))}
            </div>

            {/* Getting-started guides */}
            <div id="guides" className="bg-navy-800 border border-white/10 rounded-[var(--r-lg)] p-8 scroll-mt-24">
              <span className="w-11 h-11 rounded-xl bg-copper-tint grid place-items-center mb-[18px] [&_svg]:w-5 [&_svg]:h-5 [&_svg]:stroke-copper">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
              </span>
              <h3 className="font-display font-bold text-[1.2rem] mb-2 text-white">Getting-started guides</h3>
              <p className="text-[0.9rem] text-slate-300 mb-5">
                Longer walkthroughs for the moments that matter — day one, migration week, and your first automation.
              </p>
              {GUIDES.map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="flex justify-between items-center gap-3 py-3 border-b border-white/10 last:border-b-0 text-[0.9rem] text-slate-300 transition-all duration-150 hover:text-copper hover:pl-2"
                >
                  <span>{g.title}</span>
                  <span className="font-mono text-[9px] text-slate-400 tracking-[0.1em] shrink-0">{g.tag}</span>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative overflow-hidden text-center py-24 md:py-28">
        <div className="absolute inset-0 bg-radial-[at_50%_100%] from-copper/12 via-transparent to-transparent pointer-events-none" />
        <div className="wrap max-w-4xl mx-auto px-6 relative z-10">
          <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">The owner&apos;s brief</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-[1.1] mb-3.5">
            One useful email. <span className="text-copper">Twice a month</span>.
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Automation recipes, growth tactics, and product news — written for busy owners. No fluff, unsubscribe anytime.
          </p>

          {/* PLACEHOLDER: wire this form to your email provider before launch — currently a front-end demo */}
          <div className="flex flex-col sm:flex-row gap-2.5 max-w-[480px] mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") subscribe();
              }}
              placeholder="you@yourbusiness.com"
              aria-label="Email address"
              autoComplete="email"
              className={cn(
                "flex-1 min-w-0 bg-navy-800 border rounded-full px-[22px] py-3.5 text-white text-[0.95rem] outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-copper/55 focus:shadow-[0_0_0_3px_var(--copper-tint)]",
                err ? "border-destructive" : "border-white/10"
              )}
            />
            <Button onClick={subscribe} className="btn-copper sm:w-auto w-full">
              Subscribe
            </Button>
          </div>

          <p
            className={cn(
              "min-h-[22px] mt-3.5 font-mono text-[10.5px] tracking-[0.12em]",
              msg?.kind === "ok" ? "text-green" : msg?.kind === "bad" ? "text-destructive" : "text-faint"
            )}
            aria-live="polite"
          >
            {msg?.text}
          </p>
          <p className="mt-1.5 font-mono text-[9px] tracking-[0.1em] text-faint opacity-70">
            NO SPAM · UNSUBSCRIBE ANYTIME · WE NEVER SELL YOUR DATA
          </p>
        </div>
      </section>
    </div>
  );
}
