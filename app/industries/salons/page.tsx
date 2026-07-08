"use client";

import React from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup, HoverFloat } from "@/components/animations";
import { BadgeCard, Chip } from "@/components/shared";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, Button, Card, CardContent } from "@/components/ui";

const PAINS = [
  "You're mid-cut and the phone rings — that's a booking you just lost.",
  "A no-show just killed your best Saturday slot.",
  "Regulars quietly drift away, and you only notice months later.",
  "Your evenings disappear into DMs, confirmation texts, and posting to Instagram.",
  "Saturdays are booked solid. Tuesdays are a graveyard — and there's no way to move the demand.",
  "You've got 400 client numbers in your phone and no way to reach them all at once."
];

const vizWrap =
  "relative min-h-[150px] bg-white/[0.04] rounded border border-white/10 p-4 overflow-hidden flex flex-col justify-center gap-2 w-full";
const vLabel =
  "font-mono text-[8px] tracking-[0.1em] text-slate-400 absolute top-2 left-2";

const BENEFIT_GROUPS = [
  {
    num: "01",
    title: "Fill every chair.",
    cols: 3,
    cards: [
      {
        title: "Get booked 24/7 — even while you're behind the chair.",
        desc: "Clients pick a real open slot from your page, Instagram, or Google at 2 PM or 2 AM. Every booking taken is one you would have missed.",
        tag: "powered by Online booking · SCHEDULE",
        viz: (
          <div className={vizWrap}>
            <span className={vLabel}>YOUR BOOKING PAGE — 2:04 AM</span>
            <div className="flex gap-1.5 justify-center mt-4">
              <span className="font-mono text-[9px] border border-white/10 rounded px-2 py-1.5 text-slate-300">10:00</span>
              <span className="font-mono text-[9px] bg-copper-tint border border-copper/50 rounded px-2 py-1.5 text-copper">TUE 11:30</span>
              <span className="font-mono text-[9px] border border-white/10 rounded px-2 py-1.5 text-slate-300">4:45</span>
            </div>
            <div className="text-center mt-1">
              <span className="bg-green/10 text-green border border-green/30 px-2 py-0.5 rounded font-mono text-[7px] tracking-wide uppercase">BOOKED — TUE 11:30 · CONFIRMATION SENT ✓</span>
            </div>
          </div>
        )
      },
      {
        title: "Every call answered — every missed call texted back in seconds.",
        desc: "The receptionist takes the call, checks the calendar, and books the appointment while your clippers stay on. Missed calls get an instant text back so the caller doesn't dial the next salon.",
        tag: "powered by Voice AI + Missed-call text-back · GROW",
        viz: (
          <div className={vizWrap}>
            <span className={vLabel}>INCOMING CALL — MID-CUT</span>
            <span className="w-9 h-9 rounded-full bg-copper-tint border border-copper/40 grid place-items-center text-copper text-base mx-auto mt-3 animate-pulse">✆</span>
            <div className="bg-copper-tint border border-copper/30 p-2 rounded text-[0.72rem] text-white leading-snug">
              Sorry we missed you! Book in 10 seconds: fynz.io/luxe ✂️
              <span className="block font-mono text-[6.5px] text-slate-400 mt-1 tracking-wide">AUTO-TEXT · SENT IN 4 SECONDS</span>
            </div>
          </div>
        )
      },
      {
        title: "No-shows stop costing you Saturdays.",
        desc: "Automatic reminders confirm every visit, and a small card-on-file deposit on peak slots means people show up — or you're covered.",
        tag: "powered by Reminders & confirmations · SCHEDULE + Deposits & payments · SHOP",
        viz: (
          <div className={vizWrap}>
            <span className={vLabel}>SATURDAY 2:00 PM — PEAK SLOT</span>
            <div className="bg-navy-800 border border-white/10 p-2 rounded text-[0.78rem] font-semibold text-white mt-3">
              Hannah M. — Balayage
              <span className="block font-mono text-[6.5px] text-slate-400 mt-1 tracking-wide">SAT 2:00 PM · CARD ON FILE</span>
            </div>
            <div className="flex gap-1.5 justify-center">
              <span className="bg-copper-tint text-copper border border-copper/40 px-2 py-0.5 rounded-full font-mono text-[7px]">🔔 −24H ✓</span>
              <span className="bg-green/10 text-green border border-green/30 px-2 py-0.5 rounded-full font-mono text-[7px]">DEPOSIT $20</span>
            </div>
          </div>
        )
      }
    ]
  },
  {
    num: "02",
    title: "Keep them coming back.",
    cols: 3,
    cards: [
      {
        title: "Every client rebooks on schedule.",
        desc: "When someone's due for a touch-up, FYNZ nudges them at their usual cadence, in your tone — before they think about drifting.",
        tag: "powered by Recurring appointments · SCHEDULE + Workflow AI",
        viz: (
          <div className={vizWrap}>
            <span className={vLabel}>ROOT TOUCH-UP — EVERY 6 WEEKS</span>
            <div className="bg-copper-tint border border-copper/30 p-2 rounded text-[0.72rem] text-white leading-snug mt-3">
              "Hi Maya! It's been 6 weeks — time for your touch-up? Book: fynz.io/luxe"
            </div>
            <div className="flex items-center justify-between text-[7px] font-mono text-slate-400 mt-1">
              <span>JAN 4</span><span>FEB 15</span><span>MAR 29</span>
              <span className="text-copper font-bold">DUE NOW</span>
            </div>
          </div>
        )
      },
      {
        title: "Birthdays, anniversaries, and big moments — remembered.",
        desc: "A birthday discount, a \"one-year with us\" thank you, a first-appointment anniversary offer — all sent automatically, timed to each client.",
        tag: "powered by Email & SMS campaigns · GROW + Workflow AI",
        viz: (
          <div className={vizWrap}>
            <span className={vLabel}>CLIENT DATES — TRACKED FOR YOU</span>
            <div className="bg-copper-tint border border-copper/30 p-2 rounded text-[0.72rem] text-white leading-snug mt-3">
              🎂 Happy birthday, Maya! Enjoy 15% off any service this week — from all of us at Luxe & Co.
              <span className="block font-mono text-[6.5px] text-slate-400 mt-1 tracking-wide">SENT AUTOMATICALLY · 9:00 AM ON HER DAY</span>
            </div>
          </div>
        )
      },
      {
        title: "Five-star reviews, without the awkward ask.",
        desc: "After a great visit, the review request sends itself and routes happy clients straight to Google. Every fresh review is a new client Google sends your way.",
        tag: "powered by Reviews AI",
        viz: (
          <div className={vizWrap}>
            <span className={vLabel}>NEW GOOGLE REVIEW — 2 MIN AFTER VISIT</span>
            <div className="text-[15px] tracking-[3px] text-copper mt-3">★ ★ ★ ★ ★</div>
            <div className="bg-navy-800 border border-white/10 p-2 rounded text-[0.7rem] text-slate-300 leading-snug">
              Thank you, Maya! That balayage was so fun to do — see you in six weeks. 🧡
              <span className="block font-mono text-[6.5px] text-copper/70 mt-1 tracking-wide">REPLY DRAFTED & POSTED BY REVIEWS AI</span>
            </div>
          </div>
        )
      }
    ]
  },
  {
    num: "03",
    title: "Grow past word of mouth.",
    cols: 2,
    cards: [
      {
        title: "Social posts that actually go out.",
        desc: "New color, styled shot, weekly special — the caption is drafted in your voice and posted to Instagram, Facebook, and Google Business on schedule.",
        tag: "powered by Content AI + Social planner · GROW",
        viz: (
          <div className={vizWrap}>
            <span className={vLabel}>CONTENT AI — THIS MORNING'S SHOT</span>
            <div className="flex gap-3 items-center mt-3">
              <div className="w-16 h-16 rounded-lg shrink-0 border border-white/10 bg-[radial-gradient(70%_90%_at_30%_25%,rgba(181,100,63,0.35),transparent_65%)] bg-white/[0.06]" />
              <div className="flex flex-col gap-1.5 items-start">
                <span className="bg-copper-tint text-copper border border-copper/40 px-2 py-0.5 rounded font-mono text-[7px]">INSTAGRAM ✓</span>
                <span className="bg-copper-tint text-copper border border-copper/40 px-2 py-0.5 rounded font-mono text-[7px]">FACEBOOK ✓</span>
                <span className="bg-green/10 text-green border border-green/30 px-2 py-0.5 rounded font-mono text-[7px]">GOOGLE BUSINESS ✓</span>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Quiet Tuesdays fill themselves.",
        desc: "A midweek offer goes to the exact clients who haven't visited in a while — no ad spend, no discount to your regulars who'd come anyway.",
        tag: "powered by Email & SMS campaigns · GROW",
        viz: (
          <div className={vizWrap}>
            <span className={vLabel}>BOOKINGS BY DAY</span>
            <div className="text-center">
              <span className="bg-copper-tint text-copper border border-copper/40 px-2 py-0.5 rounded font-mono text-[6.5px] tracking-wide">OFFER SENT 8:00 AM → LAPSED CLIENTS</span>
            </div>
            <div className="flex gap-2 items-end justify-center h-14 mt-1">
              {[
                { d: "MON", h: "62%", hot: false },
                { d: "TUE", h: "78%", hot: true },
                { d: "WED", h: "54%", hot: false },
                { d: "THU", h: "70%", hot: false },
                { d: "FRI", h: "96%", hot: false }
              ].map((b) => (
                <div key={b.d} className="flex flex-col items-center gap-1 flex-1">
                  <div className={`w-full rounded-t ${b.hot ? "bg-copper" : "bg-white/20"}`} style={{ height: b.h }} />
                  <span className="font-mono text-[6px] text-slate-400">{b.d}</span>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        title: "Referrals reward themselves.",
        desc: "Happy clients get a shareable \"$20 off for you and a friend\" link; when the friend books, both get credit — no punch cards, no tracking by hand.",
        tag: "powered by Referrals · GROW + Workflow AI",
        viz: (
          <div className={vizWrap}>
            <span className={vLabel}>REFERRAL LINK — SHARED BY A HAPPY CLIENT</span>
            <div className="flex items-center justify-center gap-4 mt-3">
              <span className="w-9 h-9 rounded-full bg-copper-tint border border-copper/40 grid place-items-center font-display font-bold text-[0.62rem] text-copper">MAYA</span>
              <span className="flex-1 max-w-16 border-t border-dashed border-copper/50" />
              <span className="w-9 h-9 rounded-full bg-green/10 border border-green/40 grid place-items-center font-display font-bold text-[0.62rem] text-green">JESS</span>
            </div>
            <div className="flex justify-between font-mono text-[7px] mt-1">
              <span className="text-copper">+ $20 CREDIT ✓</span>
              <span className="text-green">+ $20 OFF · BOOKED ✓</span>
            </div>
          </div>
        )
      },
      {
        title: "A website that books clients — not just sits there.",
        desc: "A salon-styled page with your services, prices, and gallery, wired to your calendar. Drafted for you in an afternoon.",
        tag: "powered by Website & Funnel AI",
        viz: (
          <div className={vizWrap}>
            <span className={vLabel}>WEBSITE & FUNNEL AI — DRAFTING YOUR PAGE</span>
            <div className="bg-navy-800 border border-white/10 rounded p-2 mt-3 flex flex-col gap-1.5">
              <div className="flex gap-1">
                <i className="w-1 h-1 rounded-full bg-white/25" />
                <i className="w-1 h-1 rounded-full bg-white/25" />
                <i className="w-1 h-1 rounded-full bg-white/25" />
              </div>
              <span className="h-5 rounded bg-copper/25" />
              <span className="h-1.5 w-4/5 rounded bg-copper/15" />
              <span className="h-3 w-2/5 rounded bg-copper" />
            </div>
            <div className="text-center">
              <span className="bg-green/10 text-green border border-green/30 px-2 py-0.5 rounded font-mono text-[6.5px]">WIRED TO YOUR CALENDAR ✓</span>
            </div>
          </div>
        )
      }
    ]
  },
  {
    num: "04",
    title: "Sell more every visit.",
    cols: 2,
    cards: [
      {
        title: "Packages, memberships, and gift cards on your page.",
        desc: "Sell 3-cut packages, monthly color memberships, and gift cards online — clients redeem in-chair without a paper balance to keep.",
        tag: "powered by Memberships & packages + Gift cards · SHOP",
        viz: (
          <div className={vizWrap}>
            <span className={vLabel}>SOLD ONLINE — REDEEMED IN-CHAIR</span>
            <div className="flex items-center justify-between gap-3 mt-3">
              <div className="w-32 h-16 rounded-lg p-2.5 text-white bg-gradient-to-br from-copper to-[#9E5533] overflow-hidden">
                <b className="font-display text-[0.62rem] font-extrabold block">LUXE & CO.</b>
                <small className="font-mono text-[6px] tracking-wide opacity-80">GIFT CARD · COLOR MEMBERSHIP</small>
              </div>
              <div className="font-mono text-[7.5px] text-slate-300 text-right leading-relaxed">
                BALANCE<br />
                <b className="text-copper font-medium">$85 → $60</b>
              </div>
            </div>
            <div className="text-center">
              <span className="bg-green/10 text-green border border-green/30 px-2 py-0.5 rounded font-mono text-[6.5px]">REDEEMED IN-CHAIR — NO PAPER BALANCE ✓</span>
            </div>
          </div>
        )
      },
      {
        title: "Retail products, sold when the shop is closed.",
        desc: "Your shampoo, styling, and home-care products for sale online — regulars restock without waiting for their next appointment.",
        tag: "powered by Online store · SHOP",
        viz: (
          <div className={vizWrap}>
            <span className={vLabel}>YOUR RETAIL SHELF — ONLINE</span>
            <div className="flex items-center justify-between gap-3 mt-3">
              <div className="w-14 h-14 rounded-lg border border-white/10 bg-[radial-gradient(70%_90%_at_35%_30%,rgba(233,190,106,0.4),transparent_65%)] bg-white/[0.06]" />
              <div className="relative w-9 h-9 rounded-full border border-white/10 grid place-items-center text-base text-slate-300">
                🛒
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-copper text-white text-[8px] font-bold grid place-items-center font-mono">1</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="bg-green/10 text-green border border-green/30 px-2 py-0.5 rounded font-mono text-[6.5px]">ORDER #218 — PAID ✓</span>
              <span className="font-mono text-[6px] text-slate-400">ORDERED 10:40 PM · CLOSED</span>
            </div>
          </div>
        )
      }
    ]
  },
  {
    num: "05",
    title: "One inbox, one list, one view.",
    cols: 2,
    cards: [
      {
        title: "Every message in one place.",
        desc: "Instagram, Facebook, texts, and webchat all land in the same inbox — and get answered even when you can't get to them.",
        tag: "powered by One inbox · GROW + Conversation AI",
        viz: (
          <div className={vizWrap}>
            <span className={vLabel}>EVERY CHANNEL → ONE PLACE</span>
            <div className="flex flex-wrap gap-1.5 justify-center mt-3">
              {["INSTAGRAM", "FACEBOOK", "TEXTS", "WEBCHAT"].map((s) => (
                <span key={s} className="font-mono text-[7px] border border-white/10 rounded-full px-2 py-1 text-slate-300 bg-navy-800">{s}</span>
              ))}
            </div>
            <div className="flex items-center justify-between bg-copper-tint border border-copper/40 rounded-lg px-3 py-2 font-display font-bold text-[0.72rem] text-white">
              One inbox
              <span className="bg-copper-tint text-copper border border-copper/40 px-2 py-0.5 rounded-full font-mono text-[7px]">4 NEW · ALL ANSWERED ✓</span>
            </div>
          </div>
        )
      },
      {
        title: "Ask your salon anything.",
        desc: "\"What's my top service this quarter?\" \"Which stylist is fully booked next week?\" — answered in plain language, from your real numbers.",
        tag: "powered by Ask AI + Reports & insights · OPS (LIVE)",
        viz: (
          <div className={vizWrap}>
            <span className={vLabel}>ASK AI</span>
            <div className="border border-white/10 rounded px-2 py-1.5 font-mono text-[8px] text-slate-300 mt-3">▸ What's my top service this quarter?</div>
            <div className="bg-navy-800 border border-white/10 rounded px-2 py-2">
              <b className="font-mono text-[8px] text-copper block mb-2">BALAYAGE — $8.4K THIS QUARTER</b>
              <div className="flex gap-1.5 items-end h-7">
                <i className="flex-1 rounded-t bg-copper" style={{ height: "100%" }} />
                <i className="flex-1 rounded-t bg-white/20" style={{ height: "64%" }} />
                <i className="flex-1 rounded-t bg-white/20" style={{ height: "41%" }} />
              </div>
            </div>
          </div>
        )
      }
    ]
  }
];

const BEFORE_ITEMS = [
  { time: "7:00 AM", desc: "You wake to four Instagram DMs, all asking about Saturday." },
  { time: "10:00 AM", desc: "Two calls between clients — both go to voicemail. Both go elsewhere." },
  { time: "12:00 PM", desc: "Half the afternoon is empty. You post to Instagram between clients, hoping someone sees it." },
  { time: "5:00 PM", desc: "Cancellation for 6:30. The chair sits." },
  { time: "9:00 PM", desc: "On the couch, texting tomorrow's confirmations one at a time." }
];

const AFTER_ITEMS = [
  { time: "7:00 AM", desc: "The four DMs were answered overnight — three are booked, one's on the waitlist." },
  { time: "10:00 AM", desc: "Both missed calls got a text back in seconds; one has already booked Thursday, the other is choosing a time." },
  { time: "12:00 PM", desc: "The Tuesday-only offer went out to your list at 8 AM. The afternoon is 80% booked. Instagram already posted this morning's balayage — Content AI drafted it, you approved it in 10 seconds." },
  { time: "5:00 PM", desc: "The 6:30 cancellation pinged your waitlist. Refilled by 5:12." },
  { time: "9:00 PM", desc: "You're not on your phone. Every appointment tomorrow is confirmed, deposits held, and the review-request texts are already out from today's visits." }
];

const FAQs = [
  { q: "Do I need to be techy?", a: "No. Setup is guided step by step, and once it's running, it runs itself. If you can post to Instagram, you can run FYNZ." },
  { q: "Will it sound like a robot to my clients?", a: "It speaks and texts in a natural voice, in your tone — and it hands the conversation to you the moment it should." },
  { q: "Can I keep my phone number?", a: "Yes. Your existing number keeps working — FYNZ just makes sure it always gets answered." },
  { q: "Can each stylist have their own calendar, booking link, and commission?", a: "Yes — every stylist gets their own services, hours, calendar, and reminders, with their own link to share and their own reporting." },
  { q: "How long does setup take?", a: "Most owners are live in under a week." },
  { q: "What does it cost — am I locked into a contract?", a: "Plans are on the pricing page, and there's a free plan to start. No long-term lock-in framing here until final terms are set." },
  { q: "What happens when the AI can't answer something?", a: "It takes a message, notifies you instantly, and never guesses. You can also run it in approve-first mode — it drafts, you tap send." }
];

export default function SalonsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="s-hero pt-32 pb-16 md:pt-40 md:pb-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Chip className="mb-4">For salons</Chip>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6">
              Fill every chair. Keep them <span className="text-copper">coming back</span>.
            </h1>
            <p className="text-muted text-lg mb-8 max-w-xl">
              FYNZ books your clients, reminds them, rebooks them, promotes your work, and asks for the review — while you do the hair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold">
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
              <div className="bg-navy-900 border border-white/10 rounded-[var(--r-lg)] p-5 relative shadow-md">
                <div className="flex items-center gap-3 pb-3 border-b border-white/10 mb-3">
                  <span className="w-9 h-9 rounded-xl bg-copper-tint grid place-items-center font-display font-extrabold text-copper text-sm shrink-0">L</span>
                  <div>
                    <b className="font-display text-[0.85rem] font-bold text-white block leading-tight">Luxe &amp; Co. Salon</b>
                    <small className="font-mono text-[7px] tracking-[0.12em] text-slate-400 block mt-0.5">BOOK YOUR VISIT — POWERED BY FYNZ</small>
                  </div>
                </div>
                <div className="space-y-0">
                  {[
                    { nm: "Cut & style", dur: "45 MIN", pr: "$65" },
                    { nm: "Balayage", dur: "2 HR 30 MIN", pr: "$180" },
                    { nm: "Root touch-up", dur: "1 HR 15 MIN", pr: "$95" }
                  ].map((s) => (
                    <div key={s.nm} className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-[0.82rem] text-white">
                        {s.nm}
                        <small className="block font-mono text-[7px] text-slate-400 tracking-wide mt-0.5">{s.dur}</small>
                      </span>
                      <span className="font-mono text-[11px] text-copper">{s.pr}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 py-3">
                  {["MJ", "AR", "KT", "DS"].map((i, idx) => (
                    <span
                      key={i}
                      className={`w-8 h-8 rounded-full grid place-items-center font-display font-bold text-[0.62rem] ${idx === 0 ? "bg-copper text-white" : "bg-white/[0.04] border border-white/10 text-slate-300"}`}
                    >
                      {i}
                    </span>
                  ))}
                </div>
                <div className="flex gap-1.5 flex-wrap pb-3">
                  {["10:00", "11:30", "1:15", "3:00", "4:45"].map((t, idx) => (
                    <span
                      key={t}
                      className={`font-mono text-[10px] rounded-lg px-2.5 py-1.5 border ${idx === 1 ? "bg-copper-tint border-copper/50 text-copper" : "border-white/10 text-slate-300"}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="block text-center bg-copper text-white font-display font-bold text-[0.85rem] rounded-full py-2.5">
                  Book with Maria — Tue 11:30
                </span>
                <span className="absolute -right-3 bottom-14 bg-navy-900 border border-green/35 rounded-xl px-3 py-2 font-mono text-[8px] tracking-wide text-green shadow-md">
                  BOOKED AT 11:58 PM · REMINDER SET ✓
                </span>
              </div>
            </HoverFloat>

            <HoverFloat className="flex-1 sm:max-w-[220px] sm:self-end" yOffset={10} duration={4} delay={0.5}>
              <div className="bg-navy-900 border border-white/10 rounded-2xl p-3 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <i className="w-5 h-5 rounded-full bg-copper-tint border border-copper/40 shrink-0" />
                  <b className="font-display text-[0.7rem] font-bold text-white">luxeandco.salon</b>
                </div>
                <div className="h-24 rounded-lg mb-2 bg-[radial-gradient(70%_90%_at_30%_20%,rgba(181,100,63,0.35),transparent_60%)] bg-white/[0.06]" />
                <p className="text-[0.68rem] text-slate-300 leading-snug">Fresh balayage for the weekend ✨ New color arrivals just landed…</p>
                <span className="block mt-2 font-mono text-[7.5px] tracking-wide text-green">SCHEDULED ✓ IG · FB · GOOGLE BUSINESS</span>
              </div>
            </HoverFloat>
          </div>
        </div>
      </section>

      {/* Pains */}
      <section className="sec py-20 bg-secondary border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">Sound familiar?</span>
            <h2 className="font-display font-extrabold text-3xl tracking-tight">
              The parts of salon life <span className="text-copper">nobody warned you about</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PAINS.map((pain, idx) => (
              <Card key={idx} className="bg-navy-800 border border-white/10 shadow-sm rounded-2xl ring-0 p-6 flex flex-row items-start gap-4">
                <span className="font-display text-copper text-2xl leading-none mt-0.5 shrink-0 select-none opacity-30">&ldquo;</span>
                <CardContent className="p-0">
                  <p className="text-slate-300 text-sm leading-relaxed">{pain}</p>
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
              Run the chair. FYNZ runs <span className="text-copper">everything else</span>.
            </h2>
          </div>

          <div className="space-y-28">
            {BENEFIT_GROUPS.map((group, groupIdx) => (
              <div key={groupIdx} className="border-t border-line-soft/30 pt-12">
                <div className="flex items-center gap-4 mb-10">
                  <span className="font-mono text-xs text-copper bg-copper-tint border border-copper/30 px-3 py-1 rounded-full">{group.num}</span>
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight">{group.title}</h3>
                </div>

                <StaggerGroup
                  className={`grid grid-cols-1 gap-6 ${group.cols === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}
                >
                  {group.cards.map((card, cardIdx) => (
                    <BadgeCard key={cardIdx} title={card.title} className="bg-navy-800 text-white border-white/10 flex flex-col justify-between min-h-[380px]">
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
            ))}
          </div>
        </div>
      </section>

      {/* Show it — two demos */}
      <section id="showit" className="sec py-20 bg-secondary border-b border-line-soft scroll-mt-20">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">Watch it work</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Two things FYNZ did <span className="text-copper">while you were cutting</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Waitlist refill */}
            <ScrollReveal className="flex flex-col gap-6" direction="left">
              <div className="max-w-md">
                <b className="font-display font-bold text-xl block mb-2">A Saturday slot <span className="text-copper">refills itself</span>.</b>
                <p className="text-muted text-sm leading-relaxed">
                  Your 4:00 cancels. The waitlist gets a text before you've seen it — chair booked again by 4:12.
                </p>
              </div>
              <div className="bg-navy-800 border border-white/10 rounded-[var(--r-lg)] p-5 shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <b className="font-mono text-[10px] tracking-[0.16em] text-slate-400">SATURDAY — MARIA'S CHAIR</b>
                  <span className="font-mono text-[9px] tracking-wide text-green flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" /> LIVE
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-[10px] px-3.5 py-2.5">
                    <span className="font-mono text-[10px] text-slate-400 w-16 shrink-0">1:00 PM</span>
                    <span className="text-[0.82rem] font-display font-semibold text-white">Chloe R.</span>
                    <span className="text-[0.72rem] text-slate-400 ml-auto">Cut &amp; style</span>
                  </div>
                  <div className="flex items-center gap-3 bg-green/[0.06] border border-green/40 rounded-[10px] px-3.5 py-2.5">
                    <span className="font-mono text-[10px] text-slate-400 w-16 shrink-0">4:00 PM</span>
                    <span className="text-[0.82rem] font-display font-semibold text-white">Jess T.</span>
                    <span className="text-[0.72rem] text-slate-400 ml-auto">Balayage</span>
                    <span className="font-mono text-[8px] tracking-wide rounded-full px-2 py-0.5 bg-green/15 text-green shrink-0">REFILLED</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-[10px] px-3.5 py-2.5">
                    <span className="font-mono text-[10px] text-slate-400 w-16 shrink-0">5:30 PM</span>
                    <span className="text-[0.82rem] font-display font-semibold text-white">Dana K.</span>
                    <span className="text-[0.72rem] text-slate-400 ml-auto">Root touch-up</span>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <div className="max-w-[86%] bg-copper-tint border border-copper/30 rounded-[13px_4px_13px_13px] px-3.5 py-2.5 text-[0.82rem] text-white leading-snug">
                    Hi Jess! A spot just opened at Luxe &amp; Co. today at 4:00 PM for your balayage. Want it? Reply YES to grab it. ✂️
                    <small className="block font-mono text-[8px] text-slate-400 tracking-wide mt-1.5">WAITLIST TEXT · SENT 4:01 PM</small>
                  </div>
                </div>
              </div>
              <span className="font-mono text-[8.5px] tracking-widest text-faint">
                powered by <b className="text-copper">Class schedules &amp; waitlists · SCHEDULE</b>
              </span>
            </ScrollReveal>

            {/* Content AI post */}
            <ScrollReveal className="flex flex-col gap-6" direction="right">
              <div className="max-w-md">
                <b className="font-display font-bold text-xl block mb-2">A post <span className="text-copper">writes itself</span>.</b>
                <p className="text-muted text-sm leading-relaxed">
                  You snapped this morning's balayage. Content AI drafts the caption and schedules it everywhere.
                </p>
              </div>
              <div className="bg-navy-800 border border-white/10 rounded-[var(--r-lg)] p-5 shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <b className="font-mono text-[10px] tracking-[0.16em] text-slate-400">CONTENT AI — DRAFTING POST</b>
                  <span className="font-mono text-[9px] tracking-wide text-copper flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-copper animate-pulse" /> WORKING
                  </span>
                </div>
                <div className="h-28 rounded-[10px] mb-3 relative overflow-hidden border border-white/10 bg-[radial-gradient(70%_90%_at_25%_25%,rgba(181,100,63,0.35),transparent_62%)] bg-white/[0.06]">
                  <i className="absolute left-3 bottom-2.5 font-mono text-[8px] tracking-wide text-slate-400 not-italic">THIS MORNING'S BALAYAGE.JPG</i>
                </div>
                <div className="bg-white/[0.04] border border-white/10 rounded-[10px] px-3.5 py-3 text-[0.84rem] text-slate-300 leading-relaxed min-h-[72px]">
                  Weekend-ready balayage on Maya — sun-kissed dimension that grows out soft. Booking for next week is open at fynz.io/luxe ✨
                </div>
                <div className="flex gap-1.5 flex-wrap mt-3">
                  <span className="font-mono text-[8.5px] tracking-wide border border-white/10 rounded-full px-2.5 py-1 text-slate-300">INSTAGRAM</span>
                  <span className="font-mono text-[8.5px] tracking-wide border border-white/10 rounded-full px-2.5 py-1 text-slate-300">FACEBOOK</span>
                  <span className="font-mono text-[8.5px] tracking-wide border border-white/10 rounded-full px-2.5 py-1 text-slate-300">GOOGLE BUSINESS</span>
                  <span className="font-mono text-[8.5px] tracking-wide border border-green/40 rounded-full px-2.5 py-1 text-green">SCHEDULED — SAT 9:00 AM ✓</span>
                </div>
                <div className="text-center mt-3 font-mono text-[9px] tracking-[0.14em] text-copper">YOU APPROVED IT IN 10 SECONDS</div>
              </div>
              <span className="font-mono text-[8.5px] tracking-widest text-faint">
                powered by <b className="text-copper">Content AI</b> + <b className="text-copper">Social planner · GROW</b>
              </span>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* A day with FYNZ */}
      <section className="sec py-20 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">A day with FYNZ</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Same Tuesday. <span className="text-copper">Different salon</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="border border-white/10 rounded-[var(--r-lg)] p-8 bg-navy-750">
              <span className="font-mono text-[10px] tracking-widest text-slate-400 block mb-8 uppercase font-bold">BEFORE FYNZ</span>
              <div className="space-y-6">
                {BEFORE_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start text-sm">
                    <span className="font-mono text-slate-400 shrink-0 w-20">{item.time}</span>
                    <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-copper/30 rounded-[var(--r-lg)] p-8 bg-navy-800">
              <span className="font-mono text-[10px] tracking-widest text-copper block mb-8 uppercase font-bold">SAME TUESDAY, WITH FYNZ</span>
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

          <Accordion className="w-full bg-navy-800">
            {FAQs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-white/10 py-2">
                <AccordionTrigger className="font-display font-semibold text-lg text-white hover:text-copper hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 leading-relaxed text-sm pt-2 pb-4 max-w-2xl">
                  {faq.q === "What does it cost — am I locked into a contract?" ? (
                    <>
                      Plans are on the{" "}
                      <Link href="/pricing" className="text-copper hover:underline">
                        pricing page
                      </Link>
                      , and there's a free plan to start. No long-term lock-in framing here until final terms are set.
                    </>
                  ) : (
                    faq.a
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final py-24 relative overflow-hidden text-center bg-radial-[at_bottom_center] from-copper/10 via-transparent to-transparent">
        <div className="wrap max-w-4xl mx-auto px-6 relative z-10">
          <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">For salons</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
            Do the hair. FYNZ does <span className="text-copper">the rest</span>.
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            Booked chairs, confirmed visits, filled Tuesdays, five-star reviews — on autopilot from day one.
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
