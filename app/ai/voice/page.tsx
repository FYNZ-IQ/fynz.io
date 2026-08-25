"use client";

import React from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations";
import { BadgeCard, Chip } from "@/components/shared";
import { CallPlayerWidget } from "@/components/widgets";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, Button } from "@/components/ui";
import { cn } from "@/lib/utils";

const CAPABILITIES = [
  {
    num: "01 · ANSWERS",
    title: "Picks up instantly, any hour.",
    desc: "Ring one, answered. Midnight, Sunday, or mid-rush — every inbound call gets a warm, natural greeting in your business's name. Callers never hear voicemail, and you never lose the job to whoever answered first.",
    viz: (
      <div className="flex flex-col justify-center items-center relative min-h-[220px] bg-navy-800 text-white border border-white/10 rounded-lg p-6 overflow-hidden w-full">
        <span className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-4 left-4">INCOMING CALL — 11:02 PM</span>
        <div className="relative flex justify-center items-center w-24 h-24">
          <span className="absolute inset-0 rounded-full border border-copper/30 animate-ping"></span>
          <span className="absolute inset-4 rounded-full border border-copper/20 animate-ping [animation-delay:0.3s]"></span>
          <span className="w-12 h-12 rounded-full bg-copper-tint border border-copper/40 flex items-center justify-center text-copper text-xl">✆</span>
        </div>
        <div className="mt-4"><span className="bg-green/10 text-green border border-green/30 px-3 py-1 rounded-full font-mono text-[11px] tracking-wide uppercase">ANSWERED — RING 1 ✓</span></div>
        <div className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute bottom-4">0 CALLS TO VOICEMAIL THIS MONTH</div>
      </div>
    )
  },
  {
    num: "02 · KNOWS YOUR BUSINESS",
    title: "Answers the questions you answer all day.",
    desc: "Hours, prices, services, parking, policies — it answers from your knowledge base, in your tone. The stuff you repeat forty times a week gets handled without you.",
    viz: (
      <div className="flex flex-col justify-center gap-3 relative min-h-[270px] pt-12 pb-14 bg-navy-800 text-white border border-white/10 rounded-lg p-6 overflow-hidden w-full">
        <span className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-4 left-4">LIVE CALL</span>
        <div className="bg-navy-750 border border-white/10 p-3 rounded-lg text-slate-100 text-[0.82rem] max-w-[80%] self-start">
          "Are you open Sunday? And how much is a deep clean?"
        </div>
        <div className="bg-copper-tint border border-copper/30 p-3 rounded-lg text-white text-[0.82rem] max-w-[80%] self-end">
          "We're open Sundays 10 to 4! A deep clean is $149 and takes about two hours. Want me to check Sunday availability?"
        </div>
        <span className="bg-copper/10 text-copper border border-copper/30 px-3 py-1 rounded-full font-mono text-[8px] tracking-wide absolute bottom-4 left-4">FROM YOUR KNOWLEDGE BASE</span>
      </div>
    ),
    flip: true
  },
  {
    num: "03 · QUALIFIES & BOOKS",
    title: "Turns the call into a confirmed booking.",
    desc: "It asks the right questions, checks your real availability, and books the appointment on the spot — deposits included if you want them. The confirmation text is sent before the caller hangs up.",
    viz: (
      <div className="flex flex-col justify-center items-center gap-3 relative min-h-[220px] bg-navy-800 text-white border border-white/10 rounded-lg p-6 overflow-hidden w-full">
        <span className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-4 left-4">YOUR CALENDAR — LIVE AVAILABILITY</span>
        <div className="grid grid-cols-3 gap-2 w-full max-w-[320px] mt-2">
          <span className="bg-navy-750 border border-white/10 py-2 px-3 text-center text-slate-200 font-mono text-[11px] rounded">TUE 9:00</span>
          <span className="bg-copper-tint border border-copper/30 py-2 px-3 text-center text-white font-mono text-[11px] rounded font-bold font-mono">TUE 11:30 ✓</span>
          <span className="bg-navy-750 border border-white/10 py-2 px-3 text-center text-slate-200 font-mono text-[11px] rounded">TUE 2:15</span>
        </div>
        <div className="flex gap-2 mt-2">
          <span className="bg-copper/10 text-copper border border-copper/30 px-3 py-1 rounded-full font-mono text-[8px] tracking-wide uppercase">QUALIFIED — NEW CLIENT · URGENT</span>
          <span className="bg-green/10 text-green border border-green/30 px-3 py-1 rounded-full font-mono text-[8px] tracking-wide uppercase">CONFIRMATION TEXTED ✓</span>
        </div>
      </div>
    )
  },
  {
    num: "04 · KNOWS ITS LIMITS",
    title: "Takes messages. Transfers the calls that need you.",
    desc: "Complex, sensitive, or simply \"I'd like to speak to the owner\" — those calls transfer to you or become a clean, structured message with a callback number. It never guesses its way through something important.",
    viz: (
      <div className="flex flex-col justify-center items-center gap-3 relative min-h-[220px] bg-navy-800 text-white border border-white/10 rounded-lg p-6 overflow-hidden w-full">
        <span className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-4 left-4">ESCALATION — YOUR RULES</span>
        <div className="bg-navy-750 border border-white/10 p-3 rounded-lg text-slate-200 text-[0.8rem] max-w-[85%]">
          <b className="block text-white text-[8px] font-mono tracking-wide mb-1 uppercase">MESSAGE TAKEN — 3:40 PM</b>
          Frank D. — asking about the invoice from March. Wants a callback today. 416-555-0182.
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-copper"></span>
          <span className="h-[1px] w-8 bg-copper/30"></span>
          <span className="font-display font-bold text-[0.8rem] text-white">YOU</span>
        </div>
        <span className="bg-copper/10 text-copper border border-copper/30 px-3 py-1 rounded-full font-mono text-[8px] tracking-wide uppercase">TRIGGER: BILLING QUESTION → TRANSFER</span>
      </div>
    ),
    flip: true
  },
  {
    num: "05 · COVERS THE GAPS",
    title: "After-hours, weekends, and overflow — covered.",
    desc: "Busy line? Second call rings straight to Voice AI. Closed for the night? It's just getting started. The calls that used to hit voicemail become bookings you wake up to.",
    viz: (
      <div className="flex flex-col justify-center gap-3 relative min-h-[220px] bg-navy-800 text-white border border-white/10 rounded-lg p-6 overflow-hidden w-full">
        <span className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-4 left-4">COVERAGE — LAST NIGHT</span>
        <div className="self-center"><span className="bg-green/10 text-green border border-green/30 px-3 py-1 rounded-full font-mono text-[8px] tracking-wide uppercase">EVERY HOUR COVERED ✓</span></div>
        <div className="w-full h-1.5 bg-navy-800 border border-white/10 rounded-full overflow-hidden relative">
           <span className="absolute left-0 top-0 bottom-0 right-1/4 bg-green"></span>
        </div>
        <div className="flex justify-between font-mono text-[7px] text-slate-400 px-1">
          <span>9 PM</span>
          <span>12 AM</span>
          <span>3 AM</span>
          <span>7 AM</span>
        </div>
        <div className="font-mono text-[8px] text-slate-300 text-center tracking-wide mt-1">
          OVERNIGHT: <b className="text-white">4 CALLS ANSWERED · 2 BOOKED · 1 MESSAGE · 1 FAQ</b>
        </div>
      </div>
    )
  }
];

const STEPS = [
  { num: "STEP 01", title: "Give it a persona", desc: "A name, a personality, and a speaking style — pick a voice that sounds like your front desk should." },
  { num: "STEP 02", title: "Load the knowledge base", desc: "Your services, prices, hours, policies, and FAQs — everything it needs to answer like you would." },
  { num: "STEP 03", title: "Set call objectives", desc: "What each call should accomplish: qualify the caller, answer, book, take a deposit, or capture a message." },
  { num: "STEP 04", title: "Define escalation triggers", desc: "Exactly which topics, moods, or requests transfer to a human — instantly, mid-call." }
];

const BEST_FOR = [
  { icon: "🔧", label: "Home services", href: "/industries/home-services" },
  { icon: "🩺", label: "Clinics & dental", href: "/industries/clinics" },
  { icon: "🏠", label: "Real estate", href: "/industries/real-estate" },
  { icon: "✂️", label: "Salons", href: "/industries/salons" },
  { icon: "→", label: "All industries", href: "/industries" }
];

const WORKS_WITH = [
  { prefix: "SCHEDULE", title: "Books real slots", desc: "It reads your live calendar — services, staff, buffers — so double-bookings can't happen.", href: "/schedule" },
  { prefix: "GROW", title: "Feeds your customer list", desc: "Every caller becomes a contact with notes; missed-call text-back covers the ones who hang up early.", href: "/grow" },
  { prefix: "FYNZ AI", title: "Works the same shift as the team", desc: "Conversation AI handles the texts it sends; Workflow AI routes the urgent jobs. One roster, one brain.", href: "/ai" }
];

const FAQs = [
  { q: "Which calls does it cover — and can I keep my number?", a: "All inbound calls: after-hours, weekends, overflow when your line is busy, or every call if you want. Your existing number stays — Voice AI just makes sure it always gets answered." },
  { q: "Does it sound human? Will it stay on-brand?", a: "It speaks in a natural voice with a persona you define — name, personality, tone. It only says what your knowledge base and rules allow, and it identifies itself honestly if asked." },
  { q: "When does it hand a call to a human?", a: "On your triggers: specific topics (billing disputes, complaints), caller frustration, or someone simply asking for a person. It transfers live when you're available, or takes a structured message and notifies you instantly. It never guesses." },
  { q: "What does it cost to run?", a: "Voice AI is part of FYNZ AI, available as an add-on to any paid plan. Telephony and AI usage are billed separately based on what you use, and we walk you through the exact rates on your demo call — nothing is enabled before you've seen the numbers." }
];

export default function VoiceAIPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="v-hero pt-32 pb-16 md:pt-40 md:pb-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Chip className="mb-4">FYNZ AI · Agent 01</Chip>
            <span className="block font-mono text-[11px] tracking-[0.15em] text-copper mb-4 uppercase">
              JOB TITLE — YOUR 24/7 RECEPTIONIST
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6">
              Voice AI answers your phone. <span className="text-copper">Every time</span>.
            </h1>
            <p className="text-muted text-lg mb-8 max-w-xl">
              It greets callers in a natural voice, answers their questions, books them straight into your calendar, and hands the complex calls to you. No hold music. No voicemail. No missed revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="/demo" />}>
                Book a demo
              </Button>
              <Button size="lg" variant="outline" render={<Link href="#inaction" />}>
                Hear a call ↓
              </Button>
            </div>
          </div>

          {/* Badge Card Representation */}
          <div className="bg-navy-900 text-white border border-white/10 rounded-[var(--r-lg)] p-8 relative max-w-[450px] justify-self-center lg:justify-self-end w-full shadow-lg">
            <div className="absolute top-6 right-6 flex items-center gap-1.5 font-mono text-[11px] tracking-[0.14em] text-green">
              <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_8px_var(--green)] animate-pulse" />
              ON SHIFT RIGHT NOW
            </div>
            <div className="flex items-center gap-4 pb-6 border-b border-white/10 mb-6">
              <span className="w-[38px] h-[38px] rounded-[11px] bg-copper-tint border border-copper/30 grid place-items-center text-copper shrink-0">
                <svg className="w-[17px] h-[17px] stroke-copper fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
              </span>
              <div>
                <b className="font-display text-[1rem] font-bold text-white block">Voice AI</b>
                <small className="font-mono text-[11px] tracking-[0.12em] text-slate-400 block">EMPLOYEE ID — FYNZ-AI-01</small>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between border-b border-white/10 pb-2 text-[0.8rem]">
                <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider">ROLE</span>
                <b className="text-slate-200">Receptionist</b>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2 text-[0.8rem]">
                <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider">SHIFT</span>
                <b className="text-slate-200">24/7 — nights, weekends, holidays</b>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2 text-[0.8rem]">
                <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider">SICK DAYS</span>
                <b className="text-green font-bold">Zero, ever</b>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2 text-[0.8rem]">
                <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider">SPEAKS</span>
                <b className="text-slate-200">Your tone, your rules</b>
              </div>
              <div className="flex justify-between pb-2 text-[0.8rem]">
                <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider">HANDS OFF TO</span>
                <b className="text-slate-200">You, the moment it should</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="sec py-20 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">What it does</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Everything a great receptionist does — <span className="text-copper">without the front desk</span>
            </h2>
          </div>

          <div className="flex flex-col gap-24">
            {CAPABILITIES.map((cap, index) => (
              <ScrollReveal key={index} direction={cap.flip ? "left" : "right"} className={cn("grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", cap.flip && "lg:flex-row-reverse")}>
                <div className={cn(cap.flip && "lg:order-2")}>
                  <span className="font-mono text-sm text-copper tracking-wider block mb-2">{cap.num}</span>
                  <h3 className="font-display font-bold text-2xl mb-4">{cap.title}</h3>
                  <p className="text-muted leading-relaxed">{cap.desc}</p>
                </div>
                <div className={cn("w-full max-w-[500px] mx-auto", cap.flip && "lg:order-1")}>
                  {cap.viz}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="sec py-20 bg-white dark:bg-navy-900 text-slate-900 dark:text-white border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6 text-center">
          <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">How it works</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-16">
            Onboard it like a hire. <span className="text-copper">Four steps</span>, one afternoon.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {STEPS.map((step, idx) => (
              <div key={idx} className="bg-navy-800 text-white border border-white/10 p-6 rounded-[var(--r-md)] text-left flex flex-col justify-between min-h-[200px]">
                <div>
                  <span className="font-mono text-[11px] tracking-widest text-copper block mb-3">{step.num}</span>
                  <b className="font-display font-bold text-lg text-white block mb-2">{step.title}</b>
                  <p className="text-slate-300 text-base leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="font-mono text-[11px] tracking-widest text-slate-400 uppercase bg-navy-800 py-4 px-6 rounded-full inline-block">
            AFTER EVERY CALL: <b className="text-copper font-medium">FOLLOW-UP TEXT OR EMAIL SENT · CONTACT UPDATED · DEAL STAGE MOVED</b> — AUTOMATICALLY
          </p>
        </div>
      </section>

      {/* In Action (Call Player) */}
      <section id="inaction" className="sec py-20 border-b border-line-soft scroll-mt-20">
        <div className="wrap max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">In Action</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-6">
              11:02 PM. A pipe bursts. <span className="text-copper">Voice AI picks up.</span>
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              A real emergency call, handled end to end: answered on the first ring, urgency qualified, the first morning slot booked, and a confirmation text sent — all while the owner sleeps.
            </p>
            <ul className="flex flex-col gap-3 font-medium text-base text-muted mb-8">
              <li className="flex items-center gap-3">
                <span className="text-copper font-mono">→</span> Books into <Link href="/schedule" className="text-copper hover:underline">SCHEDULE</Link>'s real availability
              </li>
              <li className="flex items-center gap-3">
                <span className="text-copper font-mono">→</span> Marks the job urgent in the pipeline — crew sees it first thing
              </li>
              <li className="flex items-center gap-3">
                <span className="text-copper font-mono">→</span> Owner wakes up to a booked job, not a voicemail
              </li>
            </ul>
          </div>
          <div className="flex justify-center w-full">
            <CallPlayerWidget />
          </div>
        </div>
      </section>

      {/* Best For */}
      <section className="sec py-12 bg-white dark:bg-navy-900 text-slate-900 dark:text-white border-b border-line">
        <div className="wrap max-w-7xl mx-auto px-6 text-center">
          <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">Best for</span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mb-8">
            Anywhere a missed call is <span className="text-copper">lost revenue</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {BEST_FOR.map((item, idx) => (
              <Button key={idx} variant="outline" render={<Link href={item.href} />} className="rounded-full px-6 py-5 bg-navy-800/80 border border-white/5 text-slate-200 hover:-translate-y-0.5 hover:bg-navy-750/50 hover:border-copper/40 transition-all">
                <span className="flex items-center">
                  <span className={cn(
                    "flex items-center justify-center w-7 h-7 rounded-full bg-navy-750/60 border border-white/5 mr-2.5 text-sm shrink-0 transition-colors",
                    item.icon === "→" && "text-copper bg-copper/10 border-copper/20"
                  )}>
                    <i className="not-italic">{item.icon}</i>
                  </span>
                  {item.label}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Works With */}
      <section className="sec py-20 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">Works with the rest of FYNZ</span>
            <h2 className="font-display font-extrabold text-3xl tracking-tight">
              A receptionist that's <span className="text-copper">plugged into everything</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WORKS_WITH.map((card, idx) => (
              <BadgeCard key={idx} title={card.title} subtitle={card.prefix} className="bg-navy-900 text-white border border-white/5">
                <p className="mb-4 text-slate-300">{card.desc}</p>
                <Link href={card.href} className="text-copper font-mono text-[11px] tracking-wider font-semibold uppercase hover:underline">
                  Learn more →
                </Link>
              </BadgeCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec py-20 border-b border-line-soft">
        <div className="wrap max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">Fair questions</span>
            <h2 className="font-display font-extrabold text-3xl tracking-tight">
              Before you <span className="text-copper">hire it</span>
            </h2>
          </div>

          <Accordion className="w-full rounded-[var(--r-lg)] border border-white/10 overflow-hidden">
            {FAQs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-navy-800 border-b border-white/10 last:border-b-0 py-2 px-5">
                <AccordionTrigger className="font-display font-semibold text-lg text-white hover:text-copper hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 leading-relaxed text-sm pt-2 pb-4 max-w-2xl">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final py-24 relative overflow-hidden text-center bg-radial-[at_bottom_center] from-copper/10 via-transparent to-transparent">
        <div className="wrap max-w-4xl mx-auto px-6 relative z-10">
          <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">Voice AI</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
            Never send another caller <span className="text-copper">to voicemail</span>.
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            Book a demo and hear it answer — your receptionist can be part of your 48-hour setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="/demo" />}>
              Book a demo
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/ai" />}>
              Meet the whole team →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
