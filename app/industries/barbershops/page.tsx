"use client";

import React from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup, HoverFloat, CountUp } from "@/components/animations";
import { BadgeCard, Chip } from "@/components/shared";
import { SmsChatWidget, LiveQueueWidget } from "@/components/widgets";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, Button, Card, CardContent } from "@/components/ui";
import { cn } from "@/lib/utils";

const PAINS = [
  "The phone rings mid-fade. Answer it and lose the cut, ignore it and lose the booking.",
  "Saturday no-shows leave your best chair empty for 45 minutes.",
  "Walk-ins pile up while booked clients wait — half of them just leave.",
  "DMs pile up faster than you can reply.",
  "Your Instagram would be a goldmine — if you had time to post the fades you're cutting.",
  "Every barber in the shop has their own following, but the shop's calendar can't tell them apart."
];

const BENEFIT_GROUPS = [
  {
    title: "Fill every chair.",
    num: "01",
    cards: [
      {
        title: "Every ring gets answered — even mid-fade.",
        desc: "A natural-sounding receptionist takes the call, checks the calendar, and books the cut while your clippers stay on. Every call that used to go to voicemail is now a booking.",
        tag: "powered by Voice AI",
        viz: (
          <div className="relative min-h-[140px] bg-white/[0.04] rounded border border-white/10 p-4 overflow-hidden flex flex-col justify-center items-center w-full">
            <span className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-2 left-2">INCOMING CALL — MID-FADE</span>
            <span className="w-10 h-10 rounded-full bg-copper-tint border border-copper/30 flex items-center justify-center text-copper text-lg animate-pulse">✆</span>
            <span className="bg-green/10 text-green border border-green/30 px-3 py-1 rounded-full font-mono text-[8px] tracking-wide uppercase mt-3">ANSWERED · CUT BOOKED ✓</span>
          </div>
        )
      },
      {
        title: "Missed a call anyway? They get a text in seconds.",
        desc: "\"Sorry we missed you — grab a time here\" fires automatically with your booking link, so they don't dial the shop down the block.",
        tag: "powered by Missed-call text-back · GROW",
        viz: (
          <div className="relative min-h-[140px] bg-white/[0.04] rounded border border-white/10 p-4 overflow-hidden flex flex-col justify-center gap-2 w-full">
            <span className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-2 left-2">MISSED CALL — TEXT-BACK</span>
            <div className="bg-navy-800 border border-white/10 p-2.5 rounded text-[0.8rem] text-slate-300 max-w-[90%] self-end">
              Sorry we missed you — grab a time here: fynz.io/kings 💈
              <span className="block font-mono text-[7px] text-slate-400 mt-1">AUTO-TEXT · SENT IN 4 SECONDS</span>
            </div>
          </div>
        )
      },
      {
        title: "Every barber runs their own book.",
        desc: "Each chair gets its own link, services, hours, and photo — clients pick their barber and a real open slot, and each barber owns their own following.",
        tag: "powered by Staff calendars · SCHEDULE",
        viz: (
          <div className="relative min-h-[140px] bg-white/[0.04] rounded border border-white/10 p-4 overflow-hidden flex flex-col justify-center gap-1.5 w-full">
            <span className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-2 left-2">ONE SHOP — THREE BOOKS</span>
            <div className="flex gap-1.5 justify-center mt-3 text-[0.75rem]">
              <div className="bg-navy-800 border border-white/10 p-1.5 rounded flex items-center gap-1 text-[10px]">
                <span className="w-5 h-5 rounded-full bg-copper/10 grid place-items-center text-copper text-[8px] font-bold">M</span>
                <span>Marco</span>
              </div>
              <div className="bg-navy-800 border border-white/10 p-1.5 rounded flex items-center gap-1 text-[10px]">
                <span className="w-5 h-5 rounded-full bg-copper/10 grid place-items-center text-copper text-[8px] font-bold">D</span>
                <span>Dre</span>
              </div>
              <div className="bg-navy-800 border border-white/10 p-1.5 rounded flex items-center gap-1 text-[10px]">
                <span className="w-5 h-5 rounded-full bg-copper/10 grid place-items-center text-copper text-[8px] font-bold">S</span>
                <span>Sam</span>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Walk-ins join a real queue — not a chaos line.",
        desc: "A QR at the door lets walk-ins claim the next open chair with a live wait time. Fewer people walk in, look at the bench, and leave.",
        tag: "powered by Online booking · SCHEDULE",
        viz: (
          <div className="relative min-h-[140px] bg-white/[0.04] rounded border border-white/10 p-4 overflow-hidden flex flex-col justify-center gap-2 w-full">
            <span className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-2 left-2">QR AT THE DOOR — LIVE QUEUE</span>
            <div className="flex justify-between items-center bg-navy-800 border border-white/10 p-2 rounded text-[0.75rem] mt-3">
              <span className="font-mono text-slate-400">ALEX</span>
              <span className="font-mono text-copper font-bold">~15 MIN</span>
            </div>
            <div className="text-center"><span className="bg-copper/10 text-copper border border-copper/30 px-2 py-0.5 rounded font-mono text-[7px] tracking-wide uppercase">YOU'RE #3 · ABOUT 40 MIN</span></div>
          </div>
        )
      },
      {
        title: "No-shows pay or they show.",
        desc: "Reminders confirm every cut, and a small deposit holds your peak Saturday slots — if they ghost, you're covered.",
        tag: "powered by Reminders & confirmations · SCHEDULE + SHOP",
        viz: (
          <div className="relative min-h-[140px] bg-white/[0.04] rounded border border-white/10 p-4 overflow-hidden flex flex-col justify-center gap-2 w-full">
            <span className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-2 left-2">SATURDAY 2:00 PM</span>
            <div className="bg-navy-800 border border-white/10 p-2 rounded text-[0.8rem] text-slate-300 mt-2">
              Deon W. — Fade + beard
              <span className="block font-mono text-[7px] text-slate-400 mt-1">CARD ON FILE · DEPOSIT $15</span>
            </div>
          </div>
        )
      }
    ]
  },
  {
    title: "Keep them coming back.",
    num: "02",
    cards: [
      {
        title: "The rebook happens on the 3-week clock.",
        desc: "Regulars get a \"time for a lineup?\" nudge right when they're due, in your tone, with your calendar.",
        tag: "powered by Recurring appointments · SCHEDULE + Workflow AI",
        viz: (
          <div className="relative min-h-[140px] bg-white/[0.04] rounded border border-white/10 p-4 overflow-hidden flex flex-col justify-center gap-2 w-full">
            <span className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-2 left-2">3-WEEK CLOCK NUDGE</span>
            <div className="bg-navy-800 border border-white/10 p-2 rounded text-[0.8rem] text-slate-300 mt-2">
              "Time for a lineup? Marco's got Thursday 5:15..."
            </div>
          </div>
        )
      },
      {
        title: "Fresh fades generate fresh five-stars.",
        desc: "Every finished cut triggers a review ask — and Google starts sending you the neighborhood.",
        tag: "powered by Reviews AI",
        viz: (
          <div className="relative min-h-[140px] bg-white/[0.04] rounded border border-white/10 p-4 overflow-hidden flex flex-col justify-center gap-1.5 w-full">
            <span className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-2 left-2">GOOGLE REVIEW ASK</span>
            <div className="flex gap-0.5 mt-3 justify-center text-copper">★ ★ ★ ★ ★</div>
            <div className="text-[10px] text-slate-300 text-center font-mono">REPLY POSTED BY REVIEWS AI ✓</div>
          </div>
        )
      },
      {
        title: "Regulars who go quiet get a friendly nudge.",
        desc: "No visit in six weeks? A \"we miss you\" text goes out — you save clients before you notice they're gone.",
        tag: "powered by Workflow AI",
        viz: (
          <div className="relative min-h-[140px] bg-white/[0.04] rounded border border-white/10 p-4 overflow-hidden flex flex-col justify-center gap-2 w-full">
            <span className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-2 left-2">QUIET REGULAR NUDGE</span>
            <div className="bg-navy-800 border border-white/10 p-2 rounded text-[0.8rem] text-slate-300 mt-2">
              "We miss you at Kings Cut! Book: fynz.io/kings"
            </div>
          </div>
        )
      }
    ]
  },
  {
    title: "Grow past word of mouth.",
    num: "03",
    cards: [
      {
        title: "Your best cuts do the marketing.",
        desc: "Snap the after-shot, tag it \"post-ready,\" and Content AI writes the caption and schedules it to Instagram, Facebook, and Google Business — in the shop's voice.",
        tag: "powered by Content AI + Social planner · GROW",
        viz: (
          <div className="relative min-h-[140px] bg-white/[0.04] rounded border border-white/10 p-4 overflow-hidden flex flex-col justify-center gap-2 w-full">
            <span className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-2 left-2">TAGGED "POST-READY"</span>
            <div className="flex justify-center gap-1.5 mt-2">
              <span className="bg-copper/10 text-copper border border-copper/30 px-2 py-0.5 rounded font-mono text-[8px]">INSTAGRAM</span>
              <span className="bg-green/10 text-green border border-green/30 px-2 py-0.5 rounded font-mono text-[8px]">GOOGLE BIZ</span>
            </div>
          </div>
        )
      },
      {
        title: "Referrals reward themselves.",
        desc: "\"Bring your boy, both get $10 off\" as a shareable link — when the friend books, both get credit automatically.",
        tag: "powered by Referrals · GROW + Workflow AI",
        viz: (
          <div className="relative min-h-[140px] bg-white/[0.04] rounded border border-white/10 p-4 overflow-hidden flex flex-col justify-center gap-2 w-full">
            <span className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-2 left-2">REFERRAL SYSTEM</span>
            <div className="flex gap-2 justify-center mt-3 text-[10px]">
              <span className="text-copper">+ $10 CREDIT ✓</span>
              <span className="text-green">+ $10 OFF ✓</span>
            </div>
          </div>
        )
      },
      {
        title: "A shop website that books — not just sits there.",
        desc: "A shop-styled page with your barbers, prices, and cut gallery, wired straight to the calendar. Drafted for you in an afternoon.",
        tag: "powered by Website & Funnel AI",
        viz: (
          <div className="relative min-h-[140px] bg-white/[0.04] rounded border border-white/10 p-4 overflow-hidden flex flex-col justify-center items-center w-full">
            <span className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-2 left-2">WEBSITE & FUNNEL AI</span>
            <div className="w-16 h-10 border border-white/10 bg-navy-800 rounded mt-3 flex flex-col p-1 gap-1">
              <span className="w-full h-1.5 bg-copper/20 rounded"></span>
              <span className="w-2/3 h-1 bg-white/60 rounded"></span>
            </div>
          </div>
        )
      }
    ]
  },
  {
    title: "Sell more every visit.",
    num: "04",
    cards: [
      {
        title: "Sell your line at 10 PM too.",
        desc: "Pomades, beard oil, tees, and hats live on your online store — regulars restock without waiting for their next cut.",
        tag: "powered by Online store · SHOP",
        viz: (
          <div className="relative min-h-[140px] bg-white/[0.04] rounded border border-white/10 p-4 overflow-hidden flex flex-col justify-center items-center w-full">
            <span className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-2 left-2">ONLINE STORE</span>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-xl">🛒</span>
              <span className="bg-green/10 text-green border border-green/30 px-2 py-0.5 rounded font-mono text-[8px]">PAID ✓</span>
            </div>
          </div>
        )
      },
      {
        title: "Cut packages, memberships, and gift cards on your page.",
        desc: "Sell 5-cut packages, a monthly \"cut + line-up\" membership, and gift cards online — clients redeem in-chair without a paper card.",
        tag: "powered by Memberships & packages + Gift cards · SHOP",
        viz: (
          <div className="relative min-h-[140px] bg-white/[0.04] rounded border border-white/10 p-4 overflow-hidden flex flex-col justify-center gap-2 w-full">
            <span className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-2 left-2">MEMBERSHIPS</span>
            <div className="bg-navy-800 border border-white/10 p-2 rounded text-[0.8rem] text-slate-300 text-center mt-2">
              <b>5-CUT PACKAGE</b>
            </div>
          </div>
        )
      }
    ]
  },
  {
    title: "One inbox, one list, one view.",
    num: "05",
    cards: [
      {
        title: "Every DM, text, and web message in one place.",
        desc: "Instagram, Facebook, SMS, and webchat all land in the same inbox — and get answered even when your clippers are on.",
        tag: "powered by One inbox · GROW + Conversation AI",
        viz: (
          <div className="relative min-h-[140px] bg-white/[0.04] rounded border border-white/10 p-4 overflow-hidden flex flex-col justify-center items-center w-full">
            <span className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-2 left-2">ONE INBOX</span>
            <span className="bg-copper/10 text-copper border border-copper/30 px-3 py-1 rounded-full font-mono text-[8px] tracking-wide uppercase mt-3">6 NEW · ALL ANSWERED ✓</span>
          </div>
        )
      },
      {
        title: "Ask your shop anything.",
        desc: "\"Who's my top barber this month?\" \"Which chair is fully booked next Saturday?\" — answered in plain language, from your real numbers.",
        tag: "powered by Ask AI + Reports & insights · OPS (LIVE)",
        viz: (
          <div className="relative min-h-[140px] bg-white/[0.04] rounded border border-white/10 p-4 overflow-hidden flex flex-col justify-center gap-1.5 w-full">
            <span className="font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-2 left-2">ASK AI</span>
            <span className="text-[10px] text-slate-300 italic mt-2">"Who's my top barber this month?"</span>
            <span className="text-[10px] text-white font-bold font-mono">MARCO — 84 CUTS</span>
          </div>
        )
      }
    ]
  }
];

const BEFORE_ITEMS = [
  { time: "9:00 AM", desc: "Shop opens. The phone starts ringing. Your first fade gets interrupted three times." },
  { time: "11:00 AM", desc: "Two walk-ins arrive at once. One waits 40 minutes. The other looks around and leaves." },
  { time: "1:00 PM", desc: "Five voicemails have piled up. You'll listen tonight, if you can." },
  { time: "3:00 PM", desc: "A booked client no-shows. The chair sits empty for 45 minutes." },
  { time: "6:00 PM", desc: "You meant to post the mid-day fade. Instagram is dead — you forgot." },
  { time: "8:00 PM", desc: "You're finally sitting. Replying to 12 DMs from the day, none of them worth much anymore." }
];

const AFTER_ITEMS = [
  { time: "9:00 AM", desc: "Voice AI takes the first three calls. All three cuts are booked before your first fade is done." },
  { time: "11:00 AM", desc: "Both walk-ins scan the QR — one grabs 11:20, one takes 12:15. Nobody leaves." },
  { time: "1:00 PM", desc: "No voicemails piled up — no calls went to voicemail." },
  { time: "3:00 PM", desc: "The no-show forfeits their deposit; the waitlist gets pinged; the chair is refilled by 3:20." },
  { time: "6:00 PM", desc: "The mid-day fade you tagged \"post-ready\" was scheduled to Instagram at 4 PM. Already 200 likes and three new followers." },
  { time: "8:00 PM", desc: "You're at dinner. The DMs got answered hours ago — three were booked, two are on tomorrow's calendar." }
];

const FAQs = [
  { q: "Do I need to be techy?", a: "No. Setup is guided step by step, and once it's running, it runs itself. If you can post a fade to Instagram, you can run FYNZ." },
  { q: "Will my regulars notice it's AI on the phone?", a: "It sounds natural, knows your prices, hours, and each barber's schedule, and hands the call to you the moment it should." },
  { q: "Can I keep my phone number?", a: "Yes. Your existing shop number keeps working — FYNZ just makes sure it always gets answered." },
  { q: "How long does setup take?", a: "Most owners are live in under a week." },
  { q: "What does it cost — am I locked into a contract?", a: "Plans are on the pricing page, and there's a free plan to start. No long-term lock-in framing here until final terms are set." },
  { q: "What happens when the AI can't answer something?", a: "It takes a message, notifies you instantly, and never guesses. You can also run it in approve-first mode — it drafts, you tap send." }
];

export default function BarbershopPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="s-hero pt-32 pb-16 md:pt-40 md:pb-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Chip className="mb-4">For barbershops</Chip>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6">
              Never stop mid-cut to <span className="text-copper">answer the phone</span>.
            </h1>
            <p className="text-muted text-lg mb-8 max-w-xl">
              FYNZ answers the calls, runs the walk-in queue, posts your best fades, and asks for the review — you just keep cutting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="/onboarding?plan=free&industry=barbershops" />}>
                Start free
              </Button>
              <Button size="lg" variant="outline" render={<Link href="#showit" />}>
                See it work ↓
              </Button>
            </div>
          </div>

          {/* Hero Visual Mockups */}
          <div className="relative flex flex-col sm:flex-row gap-6 max-w-[550px] w-full justify-self-center lg:justify-self-end">
            <HoverFloat className="flex-1" yOffset={-10} duration={3.5}>
              <div className="bg-navy-900 text-white border border-white/10 rounded-[var(--r-lg)] p-5 relative shadow-md">
                <div className="flex items-center gap-3 pb-3 border-b border-white/10 mb-3">
                  <span className="w-8 h-8 rounded bg-copper-tint border border-copper/30 grid place-items-center text-copper text-xs shrink-0">✆</span>
                  <div>
                    <b className="font-display text-[0.8rem] font-bold text-white block leading-tight">Kings Cut Barbershop</b>
                    <small className="font-mono text-[7px] tracking-[0.12em] text-slate-400 block mt-0.5">INCOMING CALL — 11:42 AM</small>
                  </div>
                  <span className="font-mono text-[7.5px] tracking-[0.14em] text-green border border-green/30 px-2 py-0.5 rounded ml-auto uppercase">ANSWERED</span>
                </div>
                <div className="space-y-2 text-[0.78rem]">
                  <div className="text-slate-300"><b>CALLER:</b> "You got anything with Marco this afternoon?"</div>
                  <div className="text-copper"><b>VOICE AI:</b> "Marco's got 2:40 or 5:15 today — want me to lock one in?"</div>
                </div>
                <div className="mt-3.5 bg-green/10 border border-green/30 p-2 rounded text-center">
                  <span className="font-mono text-[8px] text-green uppercase tracking-wide">BOOKED — MARCO 2:40 PM ✓</span>
                </div>
              </div>
            </HoverFloat>

            <HoverFloat className="flex-1" yOffset={10} duration={4} delay={0.5}>
              <div className="bg-navy-900 text-white border border-white/10 rounded-[var(--r-lg)] p-5 relative shadow-md">
                <div className="flex justify-between items-center pb-3 border-b border-white/10 mb-3">
                  <span className="font-display text-[0.8rem] font-bold text-white uppercase tracking-wide">Walk-in Queue</span>
                  <span className="font-mono text-[7.5px] tracking-[0.14em] text-green flex items-center gap-1 uppercase">
                    <span className="w-1 h-1 rounded-full bg-green animate-pulse"></span>
                    LIVE
                  </span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className="flex justify-between items-center text-[0.8rem] border-b border-white/10 pb-1.5">
                    <span className="text-slate-300 font-medium">Deon</span>
                    <span className="font-mono text-[8px] text-copper font-bold uppercase tracking-wider">CUTTING</span>
                  </div>
                  <div className="flex justify-between items-center text-[0.8rem] border-b border-white/10 pb-1.5">
                    <span className="text-slate-300 font-medium">Alex</span>
                    <span className="font-mono text-[8px] text-slate-400 uppercase tracking-wider">~15 MIN</span>
                  </div>
                  <div className="flex justify-between items-center text-[0.8rem] bg-copper-tint/20 px-2 py-1 rounded border border-copper/10">
                    <span className="text-white font-bold">You</span>
                    <span className="font-mono text-[8px] text-copper font-bold uppercase tracking-wider">#3 · ~40 MIN</span>
                  </div>
                </div>
              </div>
            </HoverFloat>
          </div>
        </div>
      </section>

      {/* Pains */}
      <section className="sec py-20 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">Sound familiar?</span>
            <h2 className="font-display font-extrabold text-3xl tracking-tight">
              The parts of the shop <span className="text-copper">nobody warned you about</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PAINS.map((pain, idx) => (
              <Card key={idx} className="bg-navy-900 border border-transparent shadow-none rounded-2xl ring-0 p-6 flex flex-row items-start gap-4">
                <span className="font-mono text-copper text-xs mt-0.5 shrink-0 select-none">✕</span>
                <CardContent className="p-0">
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{pain}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="sec py-20 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-20">
            <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">Here's what changes</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              You keep cutting. FYNZ keeps <span className="text-copper">booking</span>.
            </h2>
          </div>

          <div className="space-y-28">
            {BENEFIT_GROUPS.map((group, groupIdx) => (
              <div key={groupIdx} className="border-t border-line-soft/30 pt-12">
                <div className="flex items-center gap-4 mb-10">
                  <span className="font-mono text-xs text-copper bg-copper-tint border border-copper/30 px-3 py-1 rounded-full">{group.num}</span>
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight">{group.title}</h3>
                </div>
                
                <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.cards.map((card, cardIdx) => (
                    <BadgeCard key={cardIdx} title={card.title} className="bg-navy-900 text-white border-white/10 flex flex-col justify-between min-h-[360px]">
                      <div>
                        <div className="mb-4">
                          {card.viz}
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed mb-6">{card.desc}</p>
                      </div>
                      <span className="block font-mono text-[8px] tracking-wider text-slate-400 uppercase mt-auto">
                        {card.tag}
                      </span>
                    </BadgeCard>
                  ))}
                </StaggerGroup>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demos */}
      <section id="showit" className="sec py-20 bg-white dark:bg-navy-900 text-slate-900 dark:text-white border-b border-line-soft scroll-mt-20">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">Watch it work</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Two things FYNZ did <span className="text-copper">while your clippers were on</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal className="flex flex-col gap-6" direction="left">
              <div className="max-w-md">
                <b className="font-display font-bold text-xl block mb-2">A missed call becomes a booking <span className="text-copper">in 3 minutes</span>.</b>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  11:12 AM — you're mid-fade, the call drops. The text-back fires instantly; four messages later, it's on the books.
                </p>
              </div>
              <SmsChatWidget />
              <span className="font-mono text-[8.5px] tracking-widest text-slate-400">
                powered by <b className="text-copper">Missed-call text-back · GROW</b> + <b className="text-copper">Conversation AI</b>
              </span>
            </ScrollReveal>

            <ScrollReveal className="flex flex-col gap-6" direction="right">
              <div className="max-w-md">
                <b className="font-display font-bold text-xl block mb-2">The walk-in line <span className="text-copper">runs itself</span>.</b>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  A walk-in scans the QR at the door, grabs a real place in line, and watches the wait tick down — nobody eyeballs the bench and leaves.
                </p>
              </div>
              <LiveQueueWidget />
              <span className="font-mono text-[8.5px] tracking-widest text-slate-400">
                powered by <b className="text-copper">Online booking · SCHEDULE</b>
              </span>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="sec py-20 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">A day with FYNZ</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Same Saturday. <span className="text-copper">Different shop</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="border border-white/10 rounded-[var(--r-lg)] p-8 bg-navy-900 text-white">
              <span className="font-mono text-[10px] tracking-widest text-copper block mb-8 uppercase font-bold">BEFORE FYNZ, SATURDAY</span>
              <div className="space-y-6">
                {BEFORE_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start text-sm">
                    <span className="font-mono text-slate-400 shrink-0 w-20">{item.time}</span>
                    <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-copper/30 rounded-[var(--r-lg)] p-8 bg-navy-900 text-white">
              <span className="font-mono text-[10px] tracking-widest text-green block mb-8 uppercase font-bold">SAME SATURDAY, WITH FYNZ</span>
              <div className="space-y-6">
                {AFTER_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start text-sm">
                    <span className="font-mono text-copper shrink-0 w-20 font-bold">{item.time}</span>
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

          <Accordion className="w-full bg-navy-800 border-white/10">
            {FAQs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-white/10 py-2">
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
          <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">For barbershops</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
            Keep cutting. FYNZ keeps <span className="text-copper">booking</span>.
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            Answered calls, a walk-in queue that runs itself, and an Instagram that posts your best work — from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="/onboarding?plan=free&industry=barbershops" />}>
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
