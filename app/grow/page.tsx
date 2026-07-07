"use client";

import React from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup, CountUp } from "@/components/animations";
import { Button } from "@/components/ui";

/* ---------- Lifecycle ladder ---------- */
const LADDER = [
  { stage: "STAGE 1", title: "Stranger", sub: "Sees your ad, post, or storefront", n: "—" },
  { stage: "STAGE 2", title: "Lead", sub: "Captured by form, DM, or missed call", n: "+14 today" },
  { stage: "STAGE 3", title: "Booked", sub: "Self-scheduled from the auto text-back", n: "+9" },
  { stage: "STAGE 4", title: "Paying", sub: "Deposit collected at checkout", n: "+$1,240" },
  { stage: "STAGE 5", title: "Regular", sub: "Rebooking nudges + review posted", n: "★ 4.9" },
];

/* ---------- Benefit rows ---------- */
type Msg = { tag: string; tone: "ig" | "sms" | "em"; me?: boolean; text: string };

const TAG_TONE: Record<Msg["tone"], string> = {
  ig: "bg-[rgba(178,52,133,0.10)] text-[#B23485]",
  sms: "bg-green/10 text-green",
  em: "bg-[rgba(47,94,190,0.10)] text-[#2F5EBE]",
};

const CAPTURE_LEADS = [
  { i: "QR", title: "Walk-by scan → form", meta: "WINDOW QR · 3 MIN AGO", st: "NEW", hot: false },
  { i: "FN", title: "Spring promo funnel", meta: "LANDING PAGE · 12 MIN AGO", st: "REPLIED", hot: true },
  { i: "MC", title: "Missed call → text-back", meta: "AUTO-SENT IN 30 SEC", st: "NEW", hot: false },
  { i: "IG", title: "Instagram DM", meta: "CAPTURED TO CRM · 26 MIN AGO", st: "BOOKED", hot: true },
];

const CONVERSE_MSGS: Msg[] = [
  { tag: "IG", tone: "ig", text: "How much for a full detail on an SUV?" },
  { tag: "AI", tone: "sms", me: true, text: "SUV full detail is $189 and takes ~3 hrs. Want Thursday 10am or Friday 2pm?" },
  { tag: "SMS", tone: "sms", text: "Friday 2pm please!" },
  { tag: "AI", tone: "sms", me: true, text: "Booked ✓ — confirmation and reminder are on the way." },
];

const NURTURE_ITEMS = [
  { title: "SMS · lapsed 60-day clients", meta: "412 RECIPIENTS · 31% BOOKED", state: "LIVE" },
  { title: "Email · spring package launch", meta: "DRAFTED BY CONTENT AI", state: "QUEUED" },
  { title: "Social · 3 posts this week", meta: "PLANNER · AUTO-PUBLISH", state: "SCHEDULED" },
];

const PROVE_REVIEWS = [
  { quote: '"They text you back in seconds."', meta: "Google · reply drafted by Reviews AI, approved in 1 tap" },
  { quote: '"Never miss my rebooking window now."', meta: "Google · from an automated post-visit request" },
];

/* Reusable mockup panel shell */
function Panel({ title, badge, children }: { title: string; badge: string; children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[var(--r-lg)] border border-line bg-secondary p-[22px] shadow-[var(--shadow-md)]">
      <span className="absolute left-[12%] right-[45%] top-0 h-px bg-gradient-to-r from-transparent via-copper/70 to-transparent" />
      <div className="mb-3.5 flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
        <span>{title}</span>
        <b className="font-medium text-copper">{badge}</b>
      </div>
      {children}
    </div>
  );
}

const BENEFIT_ROWS = [
  {
    num: "01",
    kicker: "CAPTURE",
    title: "Capture every lead, from every direction",
    desc: "Forms, funnels, landing pages, QR codes, and quizzes — plus missed-call text-back so an unanswered ring becomes a conversation instead of a lost customer. Every entry point feeds one CRM record.",
    href: "/features/lead-capture",
    linkLabel: "Lead capture",
    reverse: false,
    visual: (
      <Panel title="NEW LEADS · ALL SOURCES" badge="TODAY: 14">
        <div className="flex flex-col gap-2">
          {CAPTURE_LEADS.map((l) => (
            <div key={l.title} className="flex items-center gap-[11px] rounded-[var(--r-sm)] border border-line-soft bg-wash px-[13px] py-2.5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-copper-tint font-display text-[0.72rem] font-bold text-copper">{l.i}</span>
              <div>
                <b className="block text-[0.83rem] font-semibold">{l.title}</b>
                <small className="font-mono text-[9px] tracking-[0.06em] text-faint">{l.meta}</small>
              </div>
              <span className={`ml-auto rounded-[5px] px-[9px] py-[3px] font-mono text-[9px] ${l.hot ? "bg-green/10 text-green" : "bg-copper-tint text-copper"}`}>{l.st}</span>
            </div>
          ))}
        </div>
      </Panel>
    ),
  },
  {
    num: "02",
    kicker: "CONVERSE",
    title: "One inbox for every conversation",
    desc: "SMS, email, WhatsApp, Instagram and Facebook DMs, and webchat land in a single thread per customer. Reply from one screen — or let Conversation AI answer instantly when you're mid-appointment.",
    href: "/features/inbox",
    linkLabel: "Unified inbox",
    reverse: true,
    visual: (
      <Panel title="INBOX · JORDAN T." badge="AI ASSIST ON">
        <div className="flex flex-col gap-2.5">
          {CONVERSE_MSGS.map((m, i) => (
            <div key={i} className={`flex items-start gap-2.5 ${m.me ? "flex-row-reverse" : ""}`}>
              <span className={`grid h-[30px] w-[30px] shrink-0 place-items-center rounded-[9px] font-mono text-[10px] font-semibold ${TAG_TONE[m.tone]}`}>{m.tag}</span>
              <div className={`rounded-[4px_12px_12px_12px] border px-3 py-2.5 text-[0.82rem] ${m.me ? "border-copper/25 bg-copper-tint text-ink [border-radius:12px_4px_12px_12px]" : "border-line-soft bg-wash text-muted"}`}>
                {m.text}
              </div>
            </div>
          ))}
        </div>
      </Panel>
    ),
  },
  {
    num: "03",
    kicker: "NURTURE",
    title: "Marketing that runs while you work",
    desc: "Email and SMS campaigns, drip sequences, and a social planner — with Content AI drafting the words in your voice. Stay in front of your list without spending Sunday nights writing newsletters.",
    href: "/features/marketing",
    linkLabel: "Email & SMS marketing",
    reverse: false,
    visual: (
      <Panel title='CAMPAIGN · "APRIL REBOOK"' badge="SENDING">
        <div className="flex flex-col gap-2">
          {NURTURE_ITEMS.map((it) => (
            <div key={it.title} className="flex items-center justify-between rounded-[var(--r-sm)] border border-line-soft bg-wash px-3.5 py-[11px]">
              <div>
                <b className="block text-[0.83rem] font-semibold">{it.title}</b>
                <small className="font-mono text-[9px] text-faint">{it.meta}</small>
              </div>
              <span className="font-mono text-[0.82rem] text-green">{it.state}</span>
            </div>
          ))}
        </div>
      </Panel>
    ),
  },
  {
    num: "04",
    kicker: "PROVE",
    title: "Turn great visits into five-star proof",
    desc: "Two hours after every appointment, happy customers get a review request; Reviews AI drafts your replies to every rating. Your Google profile compounds while you sleep — and new strangers see the stars.",
    href: "/features/reputation",
    linkLabel: "Reputation & reviews",
    reverse: true,
    visual: (
      <Panel title="REPUTATION · LAST 30 DAYS" badge="+41 REVIEWS">
        <div className="flex flex-col gap-2">
          {PROVE_REVIEWS.map((r) => (
            <div key={r.quote} className="rounded-[var(--r-sm)] border border-line-soft bg-wash px-3.5 py-3">
              <span className="text-[0.72rem] tracking-[2px] text-copper">★★★★★</span>
              <b className="block text-[0.8rem] font-semibold">{r.quote}</b>
              <p className="mt-[3px] text-[0.76rem] text-muted">{r.meta}</p>
            </div>
          ))}
        </div>
      </Panel>
    ),
  },
];

/* ---------- Flow builder ---------- */
function FlowNode({
  title,
  sub,
  k,
  dashed,
  small,
}: {
  title: string;
  sub: string;
  k: string;
  dashed?: boolean;
  small?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3.5 rounded-[var(--r-md)] border bg-secondary ${
        dashed ? "border-dashed border-line" : "border-line"
      } ${small ? "px-4 py-3" : "px-5 py-4"}`}
    >
      <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-[11px] bg-copper-tint">
        <span className="h-[18px] w-[18px] rounded-full bg-copper/70" />
      </span>
      <div>
        <b className={`block font-display font-semibold ${small ? "text-[0.86rem]" : "text-[0.94rem]"}`}>{title}</b>
        <small className="text-[0.78rem] text-faint">{sub}</small>
      </div>
      <span className="ml-auto shrink-0 rounded-[5px] border border-line-soft px-[9px] py-[3px] font-mono text-[9px] tracking-[0.14em] text-faint">
        {k}
      </span>
    </div>
  );
}

function FlowDrop() {
  return <span className="mx-auto block h-[30px] w-px bg-line" />;
}

/* ---------- Feature grid ---------- */
const FEATURES = [
  { title: "Lead capture", desc: "Forms, surveys, quizzes, funnels, landing pages, and QR codes.", href: "/features/lead-capture" },
  { title: "CRM & contacts", desc: "360° records with smart lists, tags, custom fields, and lead scoring.", href: "/features/crm" },
  { title: "Sales pipelines", desc: "Drag-and-drop stages so you always know who's close to a yes.", href: "/features/pipelines" },
  { title: "Unified inbox", desc: "SMS, email, WhatsApp, IG/FB DMs, and webchat in one thread.", href: "/features/inbox" },
  { title: "Email & SMS marketing", desc: "Campaigns, broadcasts, and drips that write themselves.", href: "/features/marketing" },
  { title: "Automations & workflows", desc: "The connective tissue — triggers and actions across every pillar.", href: "/features/automations" },
  { title: "Reputation & reviews", desc: "Perfectly-timed requests plus AI-drafted responses.", href: "/features/reputation" },
  { title: "Social planner", desc: "Plan, write, and schedule posts from one calendar.", href: "/features/social-planner" },
  { title: "Missed-call text-back", desc: "Every unanswered ring gets an instant text.", href: "/features/text-back" },
  { title: "AI agents", desc: "Conversation, Voice, and Content AI working leads 24/7.", href: "/ai" },
  { title: "Ad & campaign tracking", desc: "See which ad or post produced each customer and dollar.", href: "/features/ad-tracking" },
];

/* ---------- Outcome stats ---------- */
const STATS = [
  { value: "+38%", label: "More leads captured" },
  { value: "30s", label: "Median first response" },
  { value: "+41", label: "Reviews per month" },
  { value: "5.2h", label: "Saved every week" },
];

export default function GrowPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(46%_50%_at_82%_30%,var(--copper-tint),transparent_68%)]"
        />
        <div className="wrap relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="eyebrow eyebrow-line">
              <Link href="/platform#grow" className="hover:underline hover:underline-offset-[3px]">
                Pillar 01 · GROW
              </Link>
            </span>
            <h1 className="my-5 font-display text-[clamp(2.3rem,4.6vw,3.5rem)] font-extrabold leading-[1.07] tracking-[-0.02em]">
              Turn strangers into <span className="text-copper">regulars</span>.
            </h1>
            <p className="lede mb-8">
              GROW is the front half of your business on autopilot: capture every lead, answer every message, follow up
              every time, and collect the five-star proof — while you do the actual work.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Button size="lg" className="bg-copper font-semibold text-white hover:bg-copper/90">
                Start free
              </Button>
              <Button size="lg" variant="outline" render={<Link href="#builder" />}>
                See automation in action
              </Button>
            </div>
          </div>

          {/* Lifecycle ladder */}
          <div
            role="img"
            aria-label="Customer lifecycle: strangers become leads, bookings, paying customers, and repeat regulars"
            className="relative ml-auto max-w-[430px] pl-[34px]"
          >
            <span
              aria-hidden="true"
              className="absolute bottom-[26px] left-[10px] top-[26px] w-px bg-gradient-to-b from-line via-copper/55 to-line"
            />
            {LADDER.map((r, i) => (
              <div
                key={r.title}
                className={`relative mb-3 flex items-center gap-3.5 rounded-[var(--r-md)] border bg-secondary px-[18px] py-[15px] ${
                  i === LADDER.length - 1 ? "border-copper/35 shadow-[0_0_30px_var(--copper-tint)]" : "border-copper/35"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute left-[-28px] top-1/2 h-[9px] w-[9px] -translate-y-1/2 rounded-full bg-copper shadow-[0_0_10px_var(--copper-tint)]"
                />
                <div>
                  <span className="mb-0.5 block font-mono text-[9.5px] tracking-[0.2em] text-copper">{r.stage}</span>
                  <b className="block font-display text-[0.92rem] font-semibold">{r.title}</b>
                  <small className="text-[0.76rem] text-faint">{r.sub}</small>
                </div>
                <span className="ml-auto shrink-0 font-mono text-[0.86rem] text-muted">{r.n}</span>
              </div>
            ))}
            <p className="mt-1 text-right font-mono text-[10.5px] tracking-[0.16em] text-faint">
              EVERY ARROW BETWEEN STAGES IS AN AUTOMATION
            </p>
          </div>
        </div>
      </section>

      {/* Benefit rows */}
      <section className="sec border-t border-line-soft">
        <div className="wrap">
          <ScrollReveal className="sec-head">
            <span className="eyebrow eyebrow-line">How GROW works</span>
            <h2 className="h2">
              Four steps from first click to <span className="text-copper">five stars</span>
            </h2>
            <p className="lede">
              The steps below happen in order for every customer — and FYNZ automates the hand-off between each one.
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-24">
            {BENEFIT_ROWS.map((row) => (
              <ScrollReveal
                key={row.num}
                className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
              >
                <div className={row.reverse ? "lg:order-2" : ""}>
                  <span className="mb-1.5 inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] text-faint after:h-px after:w-[30px] after:bg-line after:content-['']">
                    <b className="font-medium text-copper">{row.num}</b> {row.kicker}
                  </span>
                  <h3 className="my-3 font-display text-[clamp(1.4rem,2.4vw,1.85rem)] font-bold leading-[1.2] tracking-[-0.01em]">
                    {row.title}
                  </h3>
                  <p className="text-[1.02rem] text-muted">{row.desc}</p>
                  <Link href={row.href} className="arrow-link mt-[18px]">
                    {row.linkLabel} <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <div className={row.reverse ? "lg:order-1" : ""} aria-hidden="true">
                  {row.visual}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Flow builder */}
      <section id="builder" className="sec scroll-mt-20 border-t border-line-soft bg-secondary">
        <div className="wrap">
          <ScrollReveal className="sec-head mx-auto text-center">
            <span className="eyebrow eyebrow-line justify-center">Automation</span>
            <h2 className="h2">
              Watch a workflow <span className="text-copper">think</span>
            </h2>
            <p className="lede mx-auto">
              This is a real FYNZ workflow — including the branch. Build it once in the visual editor; it handles every
              lead from then on.
            </p>
          </ScrollReveal>

          <ScrollReveal
            className="mx-auto max-w-[760px]"
            aria-label="Example workflow: new lead, text-back, then a branch depending on whether they replied"
          >
            <FlowNode title="New lead comes in" sub="Form, funnel, DM, or missed call" k="TRIGGER" />
            <FlowDrop />
            <FlowNode title="Send text-back in 30 seconds" sub={'"Hi! Sorry we missed you — how can we help?"'} k="ACTION" />
            <FlowDrop />
            <FlowNode title="Did they reply within 1 hour?" sub="The workflow checks, so you don't have to" k="CONDITION" dashed />

            <div className="mt-6 grid grid-cols-1 gap-[22px] sm:grid-cols-2">
              <div className="flex flex-col">
                <span className="mb-3 text-center font-mono text-[9.5px] tracking-[0.2em] text-green">YES — THEY REPLIED</span>
                <FlowNode small title="Send booking link" sub="They pick a slot; deposit collected" k="ACTION" />
                <FlowDrop />
                <FlowNode small title="Tag as customer → nurture list" sub="Reminders & review request take over" k="CRM" />
              </div>
              <div className="flex flex-col">
                <span className="mb-3 text-center font-mono text-[9.5px] tracking-[0.2em] text-faint">NO — WENT QUIET</span>
                <FlowNode small title="Wait 1 day" sub="People are busy; the workflow isn't" k="DELAY" />
                <FlowDrop />
                <FlowNode small title="Friendly follow-up, day 2" sub={'"Still interested? Here\'s 10% off this week."'} k="ACTION" />
              </div>
            </div>

            <p className="mt-9 text-center font-mono text-[12px] tracking-[0.14em] text-muted">
              DRAG, DROP, DONE — <b className="font-medium text-copper">NO CODE, NO ZAPIER, NO ELEVENTH TAB</b>
            </p>
          </ScrollReveal>

          <div className="mt-9 text-center">
            <Button variant="outline" render={<Link href="/features/automations" />}>
              Explore automations →
            </Button>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="sec border-t border-line-soft">
        <div className="wrap">
          <ScrollReveal className="sec-head">
            <span className="eyebrow eyebrow-line">Everything in GROW</span>
            <h2 className="h2">
              Eleven features. One <span className="text-copper">customer record</span>.
            </h2>
          </ScrollReveal>

          <StaggerGroup className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className="group flex flex-col gap-[7px] rounded-[var(--r-md)] border border-line-soft bg-secondary p-[22px] transition-all duration-200 hover:-translate-y-[3px] hover:border-copper/40"
              >
                <b className="font-display text-[0.99rem] font-semibold">{f.title}</b>
                <p className="flex-1 text-[0.85rem] text-muted">{f.desc}</p>
                <span className="font-mono text-[11px] tracking-[0.06em] text-copper opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  LEARN MORE →
                </span>
              </Link>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Outcome stats */}
      <section className="sec-tight border-y border-line-soft bg-secondary">
        <div className="wrap">
          <StaggerGroup className="grid grid-cols-2 gap-5 text-center lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <CountUp value={s.value} className="block font-mono text-[clamp(1.9rem,3.6vw,2.7rem)] font-semibold tracking-[-0.02em] text-ink" />
                <span className="mt-2 block font-mono text-[10.5px] uppercase tracking-[0.2em] text-faint">
                  {s.label}
                </span>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-32 text-center">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_100%,var(--copper-tint),transparent_70%)]"
        />
        <div className="wrap relative">
          <span className="eyebrow eyebrow-line justify-center">GROW · Pillar 01</span>
          <h2 className="my-4 font-display text-[clamp(2.2rem,5vw,3.4rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
            Growth, on <span className="text-copper">autopilot</span>.
          </h2>
          <p className="lede mx-auto mb-9">
            Capture, converse, nurture, prove — and hand every booked lead straight to the SCHEDULE pillar.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Button size="lg" className="bg-copper font-semibold text-white hover:bg-copper/90">
              Start free
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/schedule" />}>
              Next pillar: SCHEDULE →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
