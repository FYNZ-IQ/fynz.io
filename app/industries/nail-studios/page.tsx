"use client";

import React from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup, HoverFloat } from "@/components/animations";
import { BadgeCard, Chip } from "@/components/shared";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, Button, Card, CardContent } from "@/components/ui";

const PAINS = [
  "Your clients are on a 2–3 week cycle — but only if someone reminds them.",
  "No-shows sting most in a fully booked day.",
  "Instagram DMs are your front desk, and they're a mess.",
  "Gaps in the middle of the day are lost money."
];

const BENEFITS = [
  {
    title: "The rebook happens before the polish chips.",
    desc: "Right on their usual cycle, clients get a friendly \"time for a fill?\" with your live calendar.",
    tag: "powered by Workflow AI + Recurring appointments · SCHEDULE",
    viz: (
      <div className="relative min-h-[150px] bg-white/[0.04] rounded-xl border border-white/10 p-4 overflow-hidden flex flex-col justify-center w-full">
        <span className="font-mono text-[7.5px] tracking-[0.14em] text-slate-400 absolute top-2.5 left-3">AVA — FILL, EVERY 3 WEEKS</span>
        <div className="bg-copper-tint border border-copper/30 rounded-[9px_9px_9px_3px] px-3 py-2 text-[0.7rem] text-white self-end max-w-[75%] mt-4 mb-5">
          Time for a fill, Ava? Thursday 2:30 or Friday 11:00 — pick your spot 💅
        </div>
        <div className="relative h-6">
          <div className="absolute top-1/2 left-3 right-3 h-px bg-white/10" />
          {["MAY 8", "MAY 29", "JUN 19"].map((d, i) => (
            <div key={i} className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-navy-800 border-2 border-copper/60" style={{ left: `${8 + i * 28}%` }}>
              <span className="absolute top-3.5 left-1/2 -translate-x-1/2 font-mono text-[6.5px] tracking-wide text-slate-400 whitespace-nowrap">{d}</span>
            </div>
          ))}
          <div className="absolute top-1/2 -translate-y-1/2 right-3 w-2.5 h-2.5 rounded-full bg-copper shadow-[0_0_10px] shadow-copper/70">
            <span className="absolute top-3.5 left-1/2 -translate-x-1/2 font-mono text-[6.5px] tracking-wide text-copper whitespace-nowrap">DUE NOW</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Deposits end the no-show gamble.",
    desc: "A small card-on-file deposit at booking means people show up — or you're covered.",
    tag: "powered by Deposits & payments · SHOP",
    viz: (
      <div className="relative min-h-[150px] bg-white/[0.04] rounded-xl border border-white/10 p-4 overflow-hidden flex flex-col justify-center gap-2 w-full">
        <span className="font-mono text-[7.5px] tracking-[0.14em] text-slate-400 absolute top-2.5 left-3">FULLY BOOKED SATURDAY — PROTECTED</span>
        <div className="bg-navy-800 border border-white/10 rounded-lg px-3 py-2 text-[0.74rem] font-display font-semibold mt-3">
          Mia K. — Full set
          <span className="block font-mono font-normal text-[7px] text-slate-400 tracking-wide mt-0.5">SAT 1:00 PM · CARD ON FILE</span>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          <span className="font-mono text-[8px] tracking-wide bg-copper-tint border border-copper/40 text-copper px-2.5 py-1 rounded-full">🔔 −24H SENT ✓</span>
          <span className="font-mono text-[8px] tracking-wide bg-copper-tint border border-copper/40 text-copper px-2.5 py-1 rounded-full">🔔 −2H CONFIRMED ✓</span>
        </div>
        <span className="font-mono text-[8px] tracking-wide bg-green/10 border border-green/40 text-green px-2.5 py-1 rounded-full self-start">DEPOSIT HELD — $15</span>
      </div>
    )
  },
  {
    title: "DMs turn into bookings by themselves.",
    desc: "Instagram and Facebook messages get answered and booked without you leaving the table.",
    tag: "powered by Conversation AI",
    viz: (
      <div className="relative min-h-[150px] bg-white/[0.04] rounded-xl border border-white/10 p-4 overflow-hidden flex flex-col justify-center gap-2 w-full">
        <span className="font-mono text-[7.5px] tracking-[0.14em] text-slate-400 absolute top-2.5 left-3">INSTAGRAM DM — MID-SET</span>
        <div className="bg-navy-800 border border-white/10 rounded-[4px_10px_10px_10px] px-3 py-2 text-[0.72rem] text-slate-300 self-start max-w-[80%] mt-4">
          do you have anything Thursday? 🙏
          <span className="block font-mono text-[6.5px] text-slate-400 tracking-wide mt-1">IG DM · 1:12 PM</span>
        </div>
        <div className="bg-copper-tint border border-copper/30 rounded-[10px_10px_3px_10px] px-3 py-2 text-[0.72rem] text-white self-end max-w-[80%]">
          Thursday I&apos;ve got 11:00 or 4:15 — a $15 deposit holds it. Which works? 💅
        </div>
        <span className="font-mono text-[8px] tracking-wide bg-green/10 border border-green/40 text-green px-2.5 py-1 rounded-full self-center mt-1">BOOKED — THU 4:15 · DEPOSIT PAID ✓</span>
      </div>
    )
  },
  {
    title: "Mid-day gaps refill from your waitlist.",
    desc: "A cancellation triggers a text to clients waiting for that exact window.",
    tag: "powered by Online booking · SCHEDULE",
    viz: (
      <div className="relative min-h-[150px] bg-white/[0.04] rounded-xl border border-white/10 p-4 overflow-hidden flex flex-col justify-center gap-1.5 w-full">
        <span className="font-mono text-[7.5px] tracking-[0.14em] text-slate-400 absolute top-2.5 left-3">TODAY — MID-DAY GAP</span>
        <div className="flex items-center gap-2 text-[0.72rem] mt-4">
          <span className="font-mono text-slate-400 w-10">11:00</span>
          <span className="text-slate-300">Ava R. — Fill</span>
        </div>
        <div className="flex items-center gap-2 text-[0.72rem] bg-green/5 border border-green/20 rounded px-1.5 py-1">
          <span className="font-mono text-slate-400 w-10">1:30</span>
          <span className="text-green">Jess M. — Gel ✓</span>
        </div>
        <div className="flex items-center gap-2 text-[0.72rem]">
          <span className="font-mono text-slate-400 w-10">3:45</span>
          <span className="text-slate-300">Zoe P. — Full set</span>
        </div>
        <span className="font-mono text-[8px] tracking-wide bg-copper-tint border border-copper/40 text-copper px-2.5 py-1 rounded-full self-start mt-1">WAITLIST TEXTED — &quot;1:30 JUST OPENED&quot; ✓</span>
      </div>
    )
  },
  {
    title: "Your work markets itself.",
    desc: "Happy clients get the review ask while the set is still fresh.",
    tag: "powered by Reviews AI",
    viz: (
      <div className="relative min-h-[150px] bg-white/[0.04] rounded-xl border border-white/10 p-4 overflow-hidden flex flex-col justify-center gap-2 w-full">
        <span className="font-mono text-[7.5px] tracking-[0.14em] text-slate-400 absolute top-2.5 left-3">REVIEW ASK — WHILE THE SET IS FRESH</span>
        <div className="flex gap-1 text-[#E9BE6A] text-lg mt-4">★ ★ ★ ★ ★</div>
        <div className="bg-navy-800 border border-white/10 rounded-lg px-3 py-2 text-[0.7rem] text-slate-300 leading-relaxed">
          Thank you, Ava! That chrome set turned out gorgeous — see you in three weeks. 💅
          <span className="block font-mono text-[6.5px] text-copper tracking-wide mt-1">REPLY DRAFTED &amp; POSTED BY REVIEWS AI</span>
        </div>
      </div>
    )
  }
];

const DM_THREAD = [
  { type: "user", text: "do you have anything Thursday? 🙏", meta: "@AVANAILS_FAN · 1:12 PM" },
  { type: "ai", text: "Hi! Thursday I've got 11:00 AM or 4:15 PM for a fill — a $15 deposit holds your spot. Which works? 💅", meta: "CONVERSATION AI · 1:12 PM" },
  { type: "user", text: "4:15! how do I pay the deposit?", meta: "@AVANAILS_FAN · 1:13 PM" },
  { type: "ai", text: "Here you go — takes 10 seconds: fynz.pay/dep-415 🔒", meta: "CONVERSATION AI · 1:13 PM" },
  { type: "sys", text: "✓ BOOKED — THU 4:15 PM · $15 DEPOSIT PAID · REMINDER SET" }
];

const BEFORE_ITEMS = [
  { time: "BETWEEN SETS", desc: "Chasing regulars for rebooks — texting one at a time, whoever you remember." },
  { time: "EVERY EVENING", desc: "Digging through Instagram DMs, hoping the Thursday girl didn't book somewhere else." },
  { time: "NEXT MONTH", desc: "A calendar full of question marks." }
];

const AFTER_ITEMS = [
  { time: "BETWEEN SETS", desc: "Nothing to chase. The 3-week nudges go out on their own — right when each client is due." },
  { time: "EVERY EVENING", desc: "DMs answered, deposits collected, reminders queued. You're just checking the wins." },
  { time: "NEXT MONTH", desc: "Already 70% booked — before you've reminded a single person." }
];

const FAQs = [
  { q: "Do I need to be techy?", a: "No. Setup is guided step by step, and once it's running, it runs itself. If you can post a set to Instagram, you can run FYNZ." },
  { q: "Will it sound like a robot to my clients?", a: "It texts and replies in a natural voice, in your tone — and it hands the conversation to you the moment it should." },
  { q: "Can I require deposits only on certain services?", a: "Yes — per service and per amount." },
  { q: "Can I keep my phone number?", a: "Yes. Your existing number keeps working — FYNZ just makes sure it always gets answered." },
  { q: "How long does setup take?", a: "Most owners are live in under a week." },
  { q: "What does it cost — am I locked into a contract?", a: "Plans are on the pricing page, and there's a free plan to start. No long-term lock-in framing here until final terms are set." },
  { q: "What happens when the AI can't answer something?", a: "It takes a message, notifies you instantly, and never guesses. You can also run it in approve-first mode — it drafts, you tap send." }
];

const WEEK_DAYS = ["MON", "TUE", "WED", "THU", "FRI"];
const WEEK_SLOTS = [
  ["AVA · FILL", "MIA · SET", "OPEN", "ZOE · FILL", "LIA · SET"],
  ["KIM · GEL", "OPEN", "RAE · FILL", "JESS · FILL ✓", "NIA · SET"],
  ["EVE · FILL", "SIA · GEL", "AMY · SET", "TIA · FILL", "GIA · GEL"]
];

export default function NailStudiosPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="s-hero pt-32 pb-16 md:pt-40 md:pb-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Chip className="mb-4">For nail studios</Chip>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6">
              Keep the calendar full, <span className="text-copper">week after week</span>.
            </h1>
            <p className="text-muted text-lg mb-8 max-w-xl">
              FYNZ books the fill before they even think about it — and makes no-shows a thing of the past.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="/onboarding?plan=free&industry=nail-studios" />}>
                Start free
              </Button>
              <Button size="lg" variant="outline" render={<Link href="#showit" />}>
                See it work ↓
              </Button>
            </div>
          </div>

          {/* Hero Visual — booking week grid */}
          <div className="relative w-full max-w-[460px] justify-self-center lg:justify-self-end">
            <HoverFloat yOffset={-8} duration={4}>
              <div className="bg-navy-900 text-white border border-white/10 rounded-[var(--r-lg)] p-5 relative shadow-md">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <b className="font-display text-[0.95rem] font-bold">Polished Nail Studio</b>
                  <small className="font-mono text-[7.5px] tracking-[0.14em] text-green flex items-center gap-1.5 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                    This week — live
                  </small>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {WEEK_DAYS.map((d) => (
                    <span key={d} className="font-mono text-[8px] tracking-[0.12em] text-slate-400 text-center pb-1">{d}</span>
                  ))}
                  {WEEK_SLOTS.flat().map((slot, i) => {
                    const isOpen = slot === "OPEN";
                    const isHot = slot.includes("✓");
                    return (
                      <span
                        key={i}
                        className={
                          "font-mono text-[7px] tracking-tight text-center rounded px-1 py-1.5 border " +
                          (isHot
                            ? "bg-copper-tint border-copper/50 text-copper font-bold"
                            : isOpen
                              ? "bg-transparent border-dashed border-white/10 text-slate-400 italic"
                              : "bg-white/[0.04] border-white/10 text-slate-300")
                        }
                      >
                        {slot}
                      </span>
                    );
                  })}
                </div>
                <div className="mt-4 bg-green/10 border border-green/30 rounded-lg py-2 text-center">
                  <span className="font-mono text-[8px] tracking-wide text-green uppercase">Next month already 70% booked ✓</span>
                </div>
              </div>
            </HoverFloat>
          </div>
        </div>
      </section>

      {/* Pains */}
      <section className="sec py-20 bg-white dark:bg-navy-900 text-slate-900 dark:text-white border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">Sound familiar?</span>
            <h2 className="font-display font-extrabold text-3xl tracking-tight">
              The parts of studio life <span className="text-copper">nobody warned you about</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PAINS.map((pain, idx) => (
              <Card key={idx} className="bg-navy-800 border border-white/10 shadow-none rounded-2xl ring-0 p-6 flex flex-row items-start gap-4">
                <span className="font-display text-copper text-3xl leading-none opacity-30 select-none">&ldquo;</span>
                <CardContent className="p-0">
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">{pain}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="sec py-20 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">Here&apos;s what changes</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              You do the sets. FYNZ keeps the <span className="text-copper">book full</span>.
            </h2>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((card, idx) => (
              <BadgeCard key={idx} title={card.title} className="bg-navy-900 text-white border-white/10 flex flex-col justify-between min-h-[380px]">
                <div>
                  <div className="mb-4">{card.viz}</div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">{card.desc}</p>
                </div>
                <span className="block font-mono text-[8px] tracking-wider text-slate-400 uppercase mt-auto">
                  {card.tag}
                </span>
              </BadgeCard>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Show it — DM demo */}
      <section id="showit" className="sec py-20 bg-white dark:bg-navy-900 text-slate-900 dark:text-white border-b border-line-soft scroll-mt-20">
        <div className="wrap max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">Watch it work</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-4">
              A DM becomes a deposit-paid booking — <span className="text-copper">mid-set</span>.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6 max-w-lg">
              1:12 PM, you&apos;re two coats deep. The DM gets answered, the slot gets offered, and the deposit locks it in — all in one thread, all without you looking up.
            </p>
            <span className="font-mono text-[8.5px] tracking-widest text-slate-400">
              powered by <b className="text-copper">Conversation AI</b> + <b className="text-copper">Deposits &amp; payments · SHOP</b>
            </span>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <Card className="bg-navy-900 text-white border-white/10 rounded-[var(--r-lg)] overflow-hidden shadow-md">
              <div className="px-5 py-4 border-b border-white/10 flex justify-between items-center">
                <b className="font-mono text-[10px] tracking-[0.16em] text-slate-400">POLISHED — INSTAGRAM DM</b>
                <span className="font-mono text-[8.5px] tracking-[0.14em] text-copper flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-copper shadow-[0_0_7px] shadow-copper/80" />
                  LIVE
                </span>
              </div>
              <div className="p-5 min-h-[340px] flex flex-col gap-2.5">
                {DM_THREAD.map((m, i) => (
                  <div key={i} className={
                    "max-w-[88%] " + (m.type === "ai" ? "self-end" : m.type === "sys" ? "self-center max-w-full my-1" : "self-start")
                  }>
                    <span className={
                      "block px-3.5 py-2.5 text-[0.86rem] leading-relaxed " + (
                        m.type === "ai" ? "bg-copper-tint border border-copper/30 text-white rounded-[14px_4px_14px_14px]" :
                        m.type === "sys" ? "bg-green/10 border border-green/30 text-green font-mono text-[8px] tracking-[0.08em] rounded-lg text-center uppercase" :
                        "bg-white/[0.04] border border-white/10 text-slate-200 rounded-[4px_14px_14px_14px]"
                      )
                    }>
                      {m.text}
                    </span>
                    {m.meta && (
                      <small className={"font-mono text-[7.5px] tracking-[0.14em] text-slate-400 block mt-1.5 " + (m.type === "ai" ? "text-right" : "")}>
                        {m.meta}
                      </small>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* A day with FYNZ */}
      <section className="sec py-20 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">A day with FYNZ</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Same studio. <span className="text-copper">Different month</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border border-white/10 rounded-[var(--r-lg)] p-8 bg-navy-900 text-white">
              <span className="font-mono text-[10px] tracking-widest text-slate-400 block mb-8 uppercase font-bold bg-white/[0.04] px-3 py-1.5 rounded-full inline-block">BEFORE FYNZ</span>
              <div className="space-y-6">
                {BEFORE_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start text-sm">
                    <span className="font-mono text-[10px] text-slate-400 shrink-0 w-28 pt-1 tracking-wide">{item.time}</span>
                    <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-copper/40 rounded-[var(--r-lg)] p-8 bg-navy-800">
              <span className="font-mono text-[10px] tracking-widest text-white block mb-8 uppercase font-bold bg-copper px-3 py-1.5 rounded-full inline-block">With FYNZ</span>
              <div className="space-y-6">
                {AFTER_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start text-sm">
                    <span className="font-mono text-[10px] text-copper shrink-0 w-28 pt-1 font-bold tracking-wide">{item.time}</span>
                    <p className="text-white leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec py-20 border-b border-line-soft">
        <div className="wrap max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">Owner FAQ</span>
            <h2 className="font-display font-extrabold text-3xl tracking-tight">
              Fair <span className="text-copper">questions</span>
            </h2>
          </div>

          <Accordion className="w-full bg-navy-800">
            {FAQs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-white/10 py-2">
                <AccordionTrigger className="font-display font-semibold text-lg text-white hover:text-copper hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 leading-relaxed text-sm pt-2 pb-4 max-w-2xl">
                  {faq.q === "What does it cost — am I locked into a contract?" ? (
                    <>Plans are on the <Link href="/pricing" className="text-copper hover:underline">pricing page</Link>, and there&apos;s a free plan to start. No long-term lock-in framing here until final terms are set.</>
                  ) : faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final py-24 relative overflow-hidden text-center bg-radial-[at_bottom_center] from-copper/10 via-transparent to-transparent">
        <div className="wrap max-w-4xl mx-auto px-6 relative z-10">
          <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">For nail studios</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
            You do the sets. FYNZ keeps them <span className="text-copper">coming back</span>.
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            Auto-rebooks on the 3-week clock, deposits on every booking, DMs that book themselves — from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="/pricing" />}>
              Start free
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/schedule" />}>
              See how it works →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
