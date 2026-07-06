"use client";

import React from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup } from "@/components/animations";
import { ArrowLink } from "@/components/shared";
import { Button } from "@/components/ui";

type Agent = {
  name: string;
  role: string;
  desc: string;
  href: string;
  meet: string;
  status: string;
  own?: boolean;
  icon: React.ReactNode;
};

const AGENTS: Agent[] = [
  {
    name: "Voice AI",
    role: "24/7 receptionist",
    desc: "Answers every call in a natural voice — greets, qualifies, books, and transfers the tricky ones to you.",
    href: "/ai/voice",
    meet: "MEET VOICE AI →",
    status: "ON SHIFT",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    name: "Conversation AI",
    role: "Front desk",
    desc: "Replies to every SMS, DM, chat, and email instantly — in the customer's own language, 24/7.",
    href: "/ai/conversation",
    meet: "MEET CONVERSATION AI →",
    status: "ON SHIFT",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Z" />
        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
      </svg>
    ),
  },
  {
    name: "Reviews AI",
    role: "Reputation manager",
    desc: "Requests reviews at the right moment and answers every one — warm, engaged, or calmly de-escalating.",
    href: "/ai/reviews",
    meet: "MEET REVIEWS AI →",
    status: "ON SHIFT",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z" />
      </svg>
    ),
  },
  {
    name: "Content AI",
    role: "Copywriter & designer",
    desc: "Writes your emails, texts, ads, captions, and blogs in your voice — and generates the images to match.",
    href: "/ai/content",
    meet: "MEET CONTENT AI →",
    status: "ON SHIFT",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
  },
  {
    name: "Website & Funnel AI",
    role: "Web designer",
    desc: "Builds full funnels, landing pages, and sites from a plain-language prompt — wired to your CRM.",
    href: "/ai/website-builder",
    meet: "MEET WEBSITE & FUNNEL AI →",
    status: "ON SHIFT",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 9h20M7 14h6" />
      </svg>
    ),
  },
  {
    name: "Workflow AI",
    role: "Operations brain",
    desc: "Makes automations smart — reads messy messages, extracts what matters, scores, and routes.",
    href: "/ai/workflow",
    meet: "MEET WORKFLOW AI →",
    status: "ON SHIFT",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5" cy="6" r="2.5" />
        <circle cx="19" cy="6" r="2.5" />
        <circle cx="12" cy="18" r="2.5" />
        <path d="M7 7.5 10.5 16M17 7.5 13.5 16M7.5 6h9" />
      </svg>
    ),
  },
  {
    name: "Ask AI",
    role: "Business analyst",
    desc: "Answers \"how's business?\" in plain language — bookings, revenue, slow days, on demand.",
    href: "/ai/ask",
    meet: "MEET ASK AI →",
    status: "ON SHIFT",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01" />
      </svg>
    ),
  },
  {
    name: "Agent Studio",
    role: "Build your own",
    desc: "A drag-and-drop canvas for custom agents with your prompts, your data, and your rules.",
    href: "/ai/studio",
    meet: "MEET THE STUDIO →",
    status: "YOUR HIRE",
    own: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
        <rect x="8" y="8" width="8" height="8" rx="2" />
      </svg>
    ),
  },
];

type DemoMsg = {
  kind: "lead" | "ai" | "sys";
  text: string;
  meta?: string;
};

const DEMO_MSGS: DemoMsg[] = [
  { kind: "lead", text: "Hi, how much is a full detail for an SUV? And are you open Saturday?", meta: "LEAD · 11:04 PM" },
  {
    kind: "ai",
    text: "Hi! SUV full detail is $189 and takes about 3 hours. We're open Saturday — I've got 9:00 AM or 1:30 PM free. Want me to hold one for you?",
    meta: "CONVERSATION AI · 11:04 PM",
  },
  { kind: "lead", text: "9am works. Do you take deposits?", meta: "LEAD · 11:06 PM" },
  {
    kind: "ai",
    text: "We do — a $25 deposit locks it in, applied to your total. Here's your secure link: fynz.pay/dep-9am 🔒",
    meta: "CONVERSATION AI · 11:06 PM",
  },
  { kind: "sys", text: "✓ BOOKED — SAT 9:00 AM · DEPOSIT PAID · REMINDER SET · OWNER NOTIFIED" },
];

const STEPS = [
  { num: "STEP 01", title: "Give it a knowledge base", desc: "Your business info, services, prices, policies, and FAQs — the stuff you repeat all day." },
  { num: "STEP 02", title: "Set a persona", desc: "A name, a voice, and a tone that sounds like your business — friendly, formal, or somewhere between." },
  { num: "STEP 03", title: "Define objectives", desc: "What each interaction should accomplish: qualify, answer, book, collect, or follow up." },
  { num: "STEP 04", title: "Set escalation", desc: "Exactly when to hand to a human — by topic, sentiment, or a customer simply asking." },
];

const CHANNELS: { label: string; icon: React.ReactNode }[] = [
  {
    label: "Phone",
    icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />,
  },
  {
    label: "SMS",
    icon: <path d="M21 11.5a8.38 8.38 0 0 1-9 8.36 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 1 1 17 0Z" />,
  },
  {
    label: "Webchat",
    icon: <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Z" />,
  },
  {
    label: "Email",
    icon: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </>
    ),
  },
  {
    label: "Facebook",
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    label: "WhatsApp",
    icon: (
      <>
        <path d="M21 11.5a8.38 8.38 0 0 1-9 8.36 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 1 1 17 0Z" />
        <path d="M9 10h.01M12 10h.01M15 10h.01" />
      </>
    ),
  },
  {
    label: "Google Business",
    icon: (
      <>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </>
    ),
  },
];

const PILLARS = [
  { name: "GROW", href: "/grow", desc: "Never miss a lead again — every call, DM, and form answered in seconds." },
  { name: "SCHEDULE", href: "/schedule", desc: "Books while you sleep — straight into real availability, deposits included." },
  { name: "SHOP", href: "/shop", desc: "Chases invoices politely and suggests the upsell you'd forget to mention." },
  { name: "OPS", href: "/ops", desc: "Answers \"how's business?\" in plain language — no report-building required." },
];

export default function AIPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-14 text-center overflow-hidden bg-radial-[at_50%_0%] from-copper/10 via-transparent to-transparent">
        <div className="wrap max-w-5xl mx-auto">
          <span className="eyebrow eyebrow-line justify-center">FYNZ AI</span>
          <h1 className="font-display font-extrabold tracking-tight leading-[1.06] text-[clamp(2.5rem,5.4vw,4rem)] mt-5 mb-4 max-w-3xl mx-auto">
            Meet your <span className="text-copper">AI team</span>.
          </h1>
          <p className="lede mx-auto mb-8">
            Agents that answer the phone, reply to every message, ask for reviews, write your content, and build your pages — around the clock. Hire them once; they never call in sick.
          </p>
          <div className="flex gap-3.5 flex-wrap justify-center">
            <Button className="btn-copper" render={<Link href="#start" />}>
              Start free
            </Button>
            <Button className="btn-ghost" render={<Link href="#roster" />}>
              See the agents ↓
            </Button>
          </div>
          <p className="mt-6 font-mono text-[10.5px] tracking-[0.18em] text-faint inline-flex items-center gap-2.5">
            <span className="w-[7px] h-[7px] rounded-full bg-green shadow-[0_0_8px_var(--green)] animate-pulse" />
            8 AGENTS · ALL ON SHIFT · RIGHT NOW
          </p>
        </div>
      </section>

      {/* Roster */}
      <section id="roster" className="sec pt-16 relative bg-secondary scroll-mt-20">
        <div className="wrap max-w-7xl mx-auto">
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {AGENTS.map((agent) => (
              <Link
                key={agent.name}
                href={agent.href}
                className="group relative bg-background border border-line rounded-[var(--r-lg)] p-[28px_24px] transition-all duration-250 hover:-translate-y-[5px] hover:border-copper/40"
              >
                <span
                  className={
                    "absolute top-5 right-5 flex items-center gap-1.5 font-mono text-[8.5px] tracking-[0.14em] " +
                    (agent.own ? "text-copper" : "text-green")
                  }
                >
                  <span
                    className={
                      "w-1.5 h-1.5 rounded-full animate-pulse " +
                      (agent.own ? "bg-copper shadow-[0_0_8px_rgba(181,100,63,0.7)]" : "bg-green shadow-[0_0_8px_var(--green)]")
                    }
                  />
                  {agent.status}
                </span>
                <div className="w-[52px] h-[52px] rounded-2xl mb-[18px] bg-gradient-to-br from-copper-tint to-copper/5 border border-copper/25 grid place-items-center text-copper [&_svg]:w-6 [&_svg]:h-6 [&_svg]:stroke-copper">
                  {agent.icon}
                </div>
                <h4 className="font-display font-bold text-[1.05rem] mb-1">{agent.name}</h4>
                <span className="block font-mono text-[9.5px] tracking-[0.16em] uppercase text-copper mb-3">
                  {agent.role}
                </span>
                <p className="text-[0.85rem] text-muted">{agent.desc}</p>
                <span className="mt-3.5 inline-block font-mono text-[10px] tracking-[0.1em] text-copper opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                  {agent.meet}
                </span>
              </Link>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Typing demo */}
      <section className="sec bg-background border-y border-line-soft">
        <div className="wrap max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 items-center">
          <ScrollReveal direction="left">
            <span className="eyebrow eyebrow-line">Watch one work</span>
            <h2 className="font-display font-bold text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.14] tracking-tight mt-3.5 mb-3.5">
              It's 11:04 PM. Your AI is <span className="text-copper">closing a lead</span>.
            </h2>
            <p className="text-muted text-[1.02rem] mb-3">
              This is Conversation AI handling a real after-hours inquiry — qualifying, answering from your knowledge base, and booking into your actual calendar. You'll read about it over coffee.
            </p>
            <ul className="list-none mt-5 flex flex-col gap-3">
              {[
                <>Trained on your services, prices, and policies</>,
                <>
                  Books straight into{" "}
                  <Link href="/schedule" className="text-copper hover:underline">
                    SCHEDULE
                  </Link>{" "}
                  — no double-booking
                </>,
                <>Hands off to you the moment it should</>,
              ].map((item, i) => (
                <li key={i} className="flex gap-2.5 text-[0.93rem] text-muted">
                  <span className="text-copper font-mono shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="right" className="w-full max-w-[460px] mx-auto lg:mx-0">
            <div className="bg-secondary border border-line rounded-[var(--r-lg)] shadow-[var(--shadow-md)] overflow-hidden">
              <div className="p-[16px_20px] border-b border-line-soft flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-[11px] bg-copper-tint border border-copper/25 grid place-items-center shrink-0 [&_svg]:w-[17px] [&_svg]:h-[17px] [&_svg]:stroke-copper">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                </span>
                <div>
                  <b className="font-display text-[0.9rem] font-bold block leading-tight">Conversation AI</b>
                  <small className="font-mono text-[8.5px] text-green tracking-[0.14em] flex items-center gap-1.5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-green before:shadow-[0_0_7px_var(--green)]">
                    ON SHIFT
                  </small>
                </div>
                <span className="ml-auto font-mono text-[8.5px] tracking-[0.12em] text-faint border border-line-soft px-2.5 py-[3px] rounded-[5px]">
                  SMS · 11:04 PM
                </span>
              </div>
              <div className="p-5 min-h-[340px] flex flex-col gap-2.5">
                {DEMO_MSGS.map((msg, i) => {
                  if (msg.kind === "sys") {
                    return (
                      <div key={i} className="self-center max-w-full">
                        <span className="block px-3.5 py-2.5 rounded-lg bg-green/10 border border-green/25 text-green font-mono text-[9.5px] tracking-[0.1em] text-center">
                          {msg.text}
                        </span>
                      </div>
                    );
                  }
                  const isAI = msg.kind === "ai";
                  return (
                    <div key={i} className={"max-w-[82%] " + (isAI ? "self-end" : "")}>
                      <span
                        className={
                          "block px-3.5 py-2.5 text-[0.84rem] leading-[1.5] " +
                          (isAI
                            ? "bg-copper-tint border border-copper/25 text-ink rounded-[13px_4px_13px_13px]"
                            : "bg-wash border border-line-soft text-muted rounded-[4px_13px_13px_13px]")
                        }
                      >
                        {msg.text}
                      </span>
                      <small
                        className={
                          "font-mono text-[8px] tracking-[0.1em] text-faint block mt-1.5 " +
                          (isAI ? "text-right mr-1" : "ml-1")
                        }
                      >
                        {msg.meta}
                      </small>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How it works */}
      <section className="sec">
        <div className="wrap max-w-7xl mx-auto">
          <div className="sec-head mx-auto text-center">
            <span className="eyebrow eyebrow-line justify-center">How FYNZ AI works</span>
            <h2 className="h2">
              Hire once. <span className="text-copper">Onboard</span> in four steps.
            </h2>
            <p className="lede mx-auto">
              Every agent shares the same setup model — fill it in once and the whole team knows your business.
            </p>
          </div>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {STEPS.map((step) => (
              <div key={step.num} className="bg-secondary border border-line-soft rounded-[var(--r-md)] p-[24px_22px]">
                <span className="block font-mono text-[11px] tracking-[0.16em] text-copper mb-3.5">{step.num}</span>
                <b className="font-display font-bold text-base block mb-[7px]">{step.title}</b>
                <p className="text-[0.83rem] text-muted">{step.desc}</p>
              </div>
            ))}
          </StaggerGroup>
          <p className="mt-6 text-center font-mono text-[11px] tracking-[0.14em] text-muted">
            THEN IT PLUGS INTO YOUR <b className="text-copper font-medium">CRM · CALENDAR · INBOX</b> — NO EXTRA WIRING
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="sec-tight bg-secondary border-y border-line-soft">
        <div className="wrap max-w-7xl mx-auto">
          <div className="sec-head mx-auto text-center mb-8">
            <span className="eyebrow eyebrow-line justify-center">Coverage</span>
            <h2 className="h2">
              One brain. <span className="text-copper">Every channel</span>.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {CHANNELS.map((chan) => (
              <span
                key={chan.label}
                className="inline-flex items-center gap-2.5 border border-line-soft rounded-full px-[18px] py-2.5 font-display font-semibold text-[0.85rem] text-muted transition-colors hover:border-copper/40 hover:text-ink"
              >
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] stroke-copper">
                  {chan.icon}
                </svg>
                {chan.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-pillar */}
      <section className="sec">
        <div className="wrap max-w-7xl mx-auto">
          <div className="sec-head mx-auto text-center">
            <span className="eyebrow eyebrow-line justify-center">Across the platform</span>
            <h2 className="h2">
              One team, all <span className="text-copper">four pillars</span>
            </h2>
          </div>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {PILLARS.map((pillar) => (
              <Link
                key={pillar.name}
                href={pillar.href}
                className="group bg-secondary border border-line-soft rounded-[var(--r-md)] p-[22px] transition-all hover:border-copper/40 hover:-translate-y-[3px]"
              >
                <span className="font-display font-bold text-[0.95rem] tracking-[0.05em] block mb-1.5">{pillar.name}</span>
                <p className="text-[0.84rem] text-muted">{pillar.desc}</p>
                <ArrowLink href={pillar.href} className="mt-3 text-[0.85rem]">
                  See {pillar.name}
                </ArrowLink>
              </Link>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Honesty note */}
      <section className="sec-tight pb-24">
        <div className="wrap max-w-7xl mx-auto">
          <ScrollReveal className="max-w-[760px] mx-auto border border-dashed border-copper/35 rounded-[var(--r-lg)] p-[32px_34px] text-center">
            <h3 className="font-display font-bold text-[1.15rem] mb-2.5">The honest part</h3>
            <p className="text-[0.94rem] text-muted mb-2">
              FYNZ AI handles roughly 70–80% of routine contacts on its own — the repetitive majority. The rest get routed to you, and anything complex or sensitive always can be. You can also run any agent in{" "}
              <b className="text-ink">approve-first mode</b>: it drafts, you tap send.
            </p>
            <p className="mt-3.5 font-mono text-[9.5px] tracking-[0.12em] text-faint">
              TELEPHONY &amp; AI USAGE BILLED SEPARATELY — RATES TBD
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden text-center py-28 bg-radial-[at_50%_100%] from-copper/12 via-transparent to-transparent">
        <div className="wrap max-w-4xl mx-auto relative z-10">
          <span className="eyebrow eyebrow-line justify-center">FYNZ AI</span>
          <h2 className="font-display font-extrabold text-[clamp(2.2rem,5vw,3.4rem)] tracking-tight leading-[1.08] mt-4 mb-4">
            The best hire you'll <span className="text-copper">never manage</span>.
          </h2>
          <p className="lede mx-auto mb-9">
            Onboard your AI team in an afternoon — and stop losing the leads that arrive after closing time.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Button className="btn-copper" render={<Link href="#start" />}>
              Start free
            </Button>
            <Button className="btn-ghost" render={<Link href="/ai/voice" />}>
              Meet Voice AI →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
