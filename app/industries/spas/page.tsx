"use client";

import React from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup, HoverFloat } from "@/components/animations";
import { BadgeCard, Chip } from "@/components/shared";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, Button, Card, CardContent } from "@/components/ui";
import { industryThemeVars } from "@/lib/industries/themes";

const PAINS = [
  "Weekends are packed. Tuesdays are dead. And there's no way to move the demand.",
  "One-visit clients never come back — and you don't know why.",
  "Selling packages means explaining them at the front desk, every time.",
  "Gift cards live in a drawer and a spreadsheet.",
  "A couples booking takes 15 minutes at the front desk — and still gets double-booked somehow.",
  "Instagram is your best marketing, and the last thing that gets done."
];

// Small, tasteful light-theme preview visuals for each benefit card.
const vizWrap =
  "relative min-h-[150px] bg-white/[0.04] rounded-xl border border-white/10 p-4 overflow-hidden flex flex-col justify-center gap-2 w-full";
const vizLabel =
  "font-mono text-[8px] tracking-[0.14em] text-slate-400 absolute top-2.5 left-3 uppercase";

const BENEFIT_GROUPS = [
  {
    num: "01",
    title: "Fill quiet days, and every hour.",
    cards: [
      {
        title: "Slow days fill themselves.",
        desc: "A midweek offer goes to the exact clients who haven't visited in a while — no ad spend, no discount to your regulars who'd come anyway.",
        tag: "powered by Email & SMS campaigns · GROW",
        viz: (
          <div className={vizWrap}>
            <span className={vizLabel}>Bookings by day</span>
            <div className="flex items-end gap-2 h-[70px] mt-5">
              {[
                { d: "MON", h: "58%", on: false },
                { d: "TUE", h: "78%", on: true },
                { d: "WED", h: "50%", on: false },
                { d: "THU", h: "72%", on: false },
                { d: "FRI", h: "96%", on: false }
              ].map((b) => (
                <div key={b.d} className="flex-1 flex flex-col items-center gap-1 justify-end h-full">
                  <span
                    className={`w-full rounded-t ${b.on ? "bg-copper shadow-[0_0_14px_rgba(181,100,63,0.35)]" : "bg-white/20"}`}
                    style={{ height: b.h }}
                  />
                  <i className="not-italic font-mono text-[6.5px] text-slate-400 tracking-wide">{b.d}</i>
                </div>
              ))}
            </div>
            <span className="bg-copper-tint text-copper border border-copper/30 px-2 py-0.5 rounded-full font-mono text-[7px] tracking-wide self-start">
              MIDWEEK OFFER → LAPSED CLIENTS ONLY
            </span>
          </div>
        )
      },
      {
        title: "Every booking upsells itself.",
        desc: "Hot-stone add-ons, extended time, aromatherapy — offered at booking, not awkwardly at checkout. Average ticket rises without a conversation.",
        tag: "powered by Online booking · SCHEDULE",
        viz: (
          <div className={vizWrap}>
            <span className={vizLabel}>At booking — not at checkout</span>
            <div className="bg-navy-800 border border-white/10 p-2 rounded text-[0.78rem] mt-4">
              60-min massage
              <span className="block font-mono text-[7px] text-slate-400 mt-1">TUE 2:00 PM</span>
            </div>
            <div className="flex gap-1.5 flex-wrap">
              <span className="bg-copper-tint text-copper border border-copper/30 px-2 py-0.5 rounded-full font-mono text-[8px]">+ HOT STONES $25 ✓</span>
              <span className="bg-copper-tint text-copper border border-copper/30 px-2 py-0.5 rounded-full font-mono text-[8px]">+ AROMATHERAPY $15 ✓</span>
            </div>
            <div className="flex justify-between items-center text-[0.72rem] text-slate-300 font-mono">
              <span>TICKET TOTAL</span>
              <span>
                <s className="text-slate-400">$110</s> <b className="text-copper not-italic">$150</b>
              </span>
            </div>
          </div>
        )
      },
      {
        title: "Couples suites and multi-room bookings — without the Tetris.",
        desc: "Two therapists, one room, right time — matched automatically so the front desk stops juggling.",
        tag: "powered by Staff calendars + Online booking · SCHEDULE",
        viz: (
          <div className={vizWrap}>
            <span className={vizLabel}>Couples retreat — Thu 3:00 PM</span>
            <div className="flex gap-1.5 flex-wrap mt-4">
              <span className="bg-navy-800 border border-white/10 px-2 py-0.5 rounded font-mono text-[8px] text-slate-300">THERAPIST · ANA</span>
              <span className="bg-navy-800 border border-white/10 px-2 py-0.5 rounded font-mono text-[8px] text-slate-300">THERAPIST · KIM</span>
              <span className="bg-navy-800 border border-white/10 px-2 py-0.5 rounded font-mono text-[8px] text-slate-300">SUITE · ROOM 2</span>
            </div>
            <span className="bg-green/10 text-green border border-green/30 px-2 py-0.5 rounded-full font-mono text-[7.5px] self-start">
              MATCHED — ANA + KIM · ROOM 2 · 3:00 PM ✓
            </span>
          </div>
        )
      },
      {
        title: "Every call answered, even mid-treatment.",
        desc: "The receptionist takes questions about services, gift cards, and pricing — and books the appointment — while the room stays quiet.",
        tag: "powered by Voice AI",
        viz: (
          <div className={`${vizWrap} items-center`}>
            <span className={vizLabel}>Incoming call — mid-treatment</span>
            <span className="w-10 h-10 rounded-full bg-copper-tint border border-copper/40 grid place-items-center text-copper text-lg animate-pulse mt-4">✆</span>
            <div className="bg-copper-tint border border-copper/30 rounded-xl rounded-br-sm p-2 text-[0.72rem] text-white leading-snug">
              &quot;Our couples retreat is $240 for 90 minutes — Thursday 3:00 is open. Shall I add a gift card for the occasion?&quot;
              <span className="block font-mono text-[6.5px] text-slate-400 mt-1">VOICE AI · THE ROOM STAYED QUIET</span>
            </div>
          </div>
        )
      },
      {
        title: "No-shows stop stealing your best hours.",
        desc: "Reminders confirm every visit; a small deposit on peak slots and couples suites means people show up — or you're covered.",
        tag: "powered by Reminders & confirmations · SCHEDULE + Deposits & payments · SHOP",
        viz: (
          <div className={vizWrap}>
            <span className={vizLabel}>Couples suite — peak slot</span>
            <div className="bg-navy-800 border border-white/10 p-2 rounded text-[0.78rem] mt-4">
              Couples retreat — 90 min
              <span className="block font-mono text-[7px] text-slate-400 mt-1">SAT 3:00 PM · 2 THERAPISTS · CARD ON FILE</span>
            </div>
            <div className="flex gap-1.5 flex-wrap">
              <span className="bg-copper-tint text-copper border border-copper/30 px-2 py-0.5 rounded-full font-mono text-[8px]">🔔 −24H SENT ✓</span>
              <span className="bg-copper-tint text-copper border border-copper/30 px-2 py-0.5 rounded-full font-mono text-[8px]">🔔 −2H CONFIRMED ✓</span>
              <span className="bg-green/10 text-green border border-green/30 px-2 py-0.5 rounded-full font-mono text-[8px]">DEPOSIT HELD — $50</span>
            </div>
          </div>
        )
      }
    ]
  },
  {
    num: "02",
    title: "Keep them coming back.",
    cards: [
      {
        title: "\"We miss you\" goes out before they're gone.",
        desc: "Lapsed clients get a warm, well-timed nudge — automatically, in your tone.",
        tag: "powered by Workflow AI",
        viz: (
          <div className={vizWrap}>
            <span className={vizLabel}>Lapsed client — detected</span>
            <div className="bg-copper-tint border border-copper/30 rounded-xl p-2 text-[0.74rem] text-white leading-snug mt-4">
              We&apos;ve missed you at Serene ✨ Your favorite therapist has openings this week — shall we save you a quiet hour?
              <span className="block font-mono text-[6.5px] text-slate-400 mt-1">SENT AUTOMATICALLY · IN YOUR VOICE</span>
            </div>
            <span className="bg-copper-tint text-copper border border-copper/30 px-2 py-0.5 rounded-full font-mono text-[8px] self-start">
              5 LAPSED CLIENTS NUDGED THIS WEEK
            </span>
          </div>
        )
      },
      {
        title: "The next visit gets proposed at every checkout.",
        desc: "Monthly maintenance clients rebook on cadence; regulars never fall out of their rhythm.",
        tag: "powered by Recurring appointments · SCHEDULE + Workflow AI",
        viz: (
          <div className={vizWrap}>
            <span className={vizLabel}>Maya — monthly maintenance</span>
            <div className="bg-copper-tint border border-copper/30 rounded-xl rounded-bl-sm p-2 text-[0.72rem] text-white leading-snug mt-4">
              Same time next month, Maya? Tuesday the 12th at 2:00 is yours if you want it.
            </div>
            <div className="flex items-center justify-between mt-1 px-1">
              {["APR", "MAY", "JUN", "DUE"].map((m, i) => (
                <div key={m} className="flex flex-col items-center gap-1">
                  <span className={`w-2.5 h-2.5 rounded-full border-2 ${i === 3 ? "bg-copper border-copper shadow-[0_0_10px_rgba(181,100,63,0.6)]" : "bg-navy-800 border-copper/50"}`} />
                  <i className="not-italic font-mono text-[6px] text-slate-400">{m}</i>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        title: "Your calm shows up in your reviews.",
        desc: "Post-visit review requests keep your rating — and your search ranking — rising.",
        tag: "powered by Reviews AI",
        viz: (
          <div className={vizWrap}>
            <span className={vizLabel}>New Google review — post-visit</span>
            <div className="text-[#E9BE6A] text-base tracking-[3px] mt-4">★★★★★</div>
            <div className="bg-navy-800 border border-white/10 rounded p-2 text-[0.7rem] text-slate-300 leading-snug">
              Thank you, Maya — so glad the signature facial felt like a reset. The Zen room will be waiting. ✨
              <span className="block font-mono text-[6.5px] text-copper/70 mt-1">REPLY DRAFTED &amp; POSTED BY REVIEWS AI</span>
            </div>
          </div>
        )
      }
    ]
  },
  {
    num: "03",
    title: "Grow past word of mouth.",
    cards: [
      {
        title: "Your treatments become your marketing.",
        desc: "Post the ambience, the new facial, the Zen-room shot — Content AI drafts the caption in your voice and schedules it to Instagram, Facebook, and Google Business.",
        tag: "powered by Content AI + Social planner · GROW",
        viz: (
          <div className={vizWrap}>
            <span className={vizLabel}>Content AI — the Zen room shot</span>
            <div className="flex gap-3 items-center mt-4">
              <div className="w-16 h-16 rounded-lg shrink-0 bg-[radial-gradient(70%_90%_at_30%_25%,rgba(181,100,63,0.35),transparent_65%)] bg-white/[0.06] border border-white/10" />
              <div className="flex-1 space-y-1.5">
                <span className="block h-1.5 rounded bg-copper/25 w-[92%]" />
                <span className="block h-1.5 rounded bg-copper/15 w-[66%]" />
              </div>
            </div>
            <div className="flex gap-1.5 flex-wrap">
              <span className="bg-copper-tint text-copper border border-copper/30 px-2 py-0.5 rounded-full font-mono text-[8px]">INSTAGRAM ✓</span>
              <span className="bg-copper-tint text-copper border border-copper/30 px-2 py-0.5 rounded-full font-mono text-[8px]">FACEBOOK ✓</span>
              <span className="bg-green/10 text-green border border-green/30 px-2 py-0.5 rounded-full font-mono text-[8px]">GOOGLE BIZ ✓</span>
            </div>
          </div>
        )
      },
      {
        title: "Referrals reward themselves.",
        desc: "\"Send a friend, both get $25 off your next visit\" as a shareable link — when the friend books, both get credit automatically.",
        tag: "powered by Referrals · GROW + Workflow AI",
        viz: (
          <div className={vizWrap}>
            <span className={vizLabel}>Referral link — shared by a regular</span>
            <div className="flex items-center justify-between mt-4 px-2">
              <span className="w-9 h-9 rounded-full bg-copper-tint border border-copper/40 grid place-items-center font-display font-bold text-[0.7rem] text-copper">MAYA</span>
              <span className="flex-1 mx-2 border-t-2 border-dashed border-copper/50" />
              <span className="w-9 h-9 rounded-full bg-green/10 border border-green/40 grid place-items-center font-display font-bold text-[0.7rem] text-green">ERIN</span>
            </div>
            <div className="flex justify-between font-mono text-[8px]">
              <span className="text-copper">+ $25 CREDIT ✓</span>
              <span className="text-green">+ $25 OFF · BOOKED ✓</span>
            </div>
          </div>
        )
      },
      {
        title: "A spa website that books — not just sits there.",
        desc: "A calm, on-brand page with your services, therapists, and gallery, wired straight to your calendar. Drafted for you in an afternoon.",
        tag: "powered by Website & Funnel AI",
        viz: (
          <div className={`${vizWrap} items-center`}>
            <span className={vizLabel}>Website &amp; Funnel AI</span>
            <div className="w-24 border border-white/10 bg-navy-800 rounded-lg p-2 mt-4 space-y-1.5">
              <div className="flex gap-1">
                <i className="w-1 h-1 rounded-full bg-white/25" />
                <i className="w-1 h-1 rounded-full bg-white/25" />
                <i className="w-1 h-1 rounded-full bg-white/25" />
              </div>
              <span className="block h-5 rounded bg-copper/25" />
              <span className="block h-1.5 w-4/5 rounded bg-copper/15" />
              <span className="block h-3 w-2/5 rounded bg-copper" />
            </div>
            <span className="bg-green/10 text-green border border-green/30 px-2 py-0.5 rounded-full font-mono text-[7.5px]">WIRED TO YOUR CALENDAR ✓</span>
          </div>
        )
      }
    ]
  },
  {
    num: "04",
    title: "Sell more every visit.",
    cards: [
      {
        title: "Packages, memberships, and gift cards on your page.",
        desc: "Sell 5- and 10-visit series, monthly memberships, and gift cards online — plus bulk corporate and holiday gift cards without the paper certificates.",
        tag: "powered by Memberships & packages + Gift cards · SHOP",
        viz: (
          <div className={vizWrap}>
            <span className={vizLabel}>Sold online — tracked automatically</span>
            <div className="flex gap-3 items-center mt-4">
              <div className="w-28 h-16 rounded-lg shrink-0 p-2 text-white bg-gradient-to-br from-copper to-[#9E5533] overflow-hidden">
                <b className="font-display text-[0.62rem] font-extrabold block">SERENE DAY SPA</b>
                <small className="font-mono text-[6px] tracking-wide opacity-80">5-VISIT SERIES · GIFT CARD</small>
              </div>
              <div className="font-mono text-[8px] text-slate-300 text-right leading-relaxed">
                VISITS LEFT
                <br />
                <b className="text-copper">5 → 4</b>
              </div>
            </div>
            <span className="bg-green/10 text-green border border-green/30 px-2 py-0.5 rounded-full font-mono text-[7.5px] self-start">
              NO PAPER CERTIFICATES · NO SPREADSHEET ✓
            </span>
          </div>
        )
      },
      {
        title: "Retail products, sold when the spa is closed.",
        desc: "Your candles, oils, skincare, and post-treatment care available online — clients restock without waiting for their next appointment.",
        tag: "powered by Online store · SHOP",
        viz: (
          <div className={vizWrap}>
            <span className={vizLabel}>Your retail shelf — online</span>
            <div className="flex items-center justify-between mt-4">
              <div className="w-14 h-14 rounded-lg bg-[radial-gradient(70%_90%_at_35%_30%,rgba(233,190,106,0.4),transparent_65%)] bg-white/[0.06] border border-white/10" />
              <div className="relative w-9 h-9 rounded-full border border-white/10 grid place-items-center text-slate-300">
                🛒
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-copper text-white font-mono text-[8px] grid place-items-center">1</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="bg-green/10 text-green border border-green/30 px-2 py-0.5 rounded-full font-mono text-[8px]">ORDER #327 — PAID ✓</span>
              <span className="font-mono text-[6.5px] text-slate-400 tracking-wide">ORDERED 9:30 PM · SPA CLOSED</span>
            </div>
          </div>
        )
      }
    ]
  },
  {
    num: "05",
    title: "One inbox, one list, one view.",
    cards: [
      {
        title: "Every message in one place.",
        desc: "Instagram, Facebook, texts, and webchat land in the same inbox — every gift card question, every couples-booking request, one thread per client.",
        tag: "powered by One inbox · GROW + Conversation AI",
        viz: (
          <div className={vizWrap}>
            <span className={vizLabel}>Every channel → one place</span>
            <div className="flex gap-1.5 flex-wrap justify-center mt-4">
              {["INSTAGRAM", "FACEBOOK", "TEXTS", "WEBCHAT"].map((s) => (
                <span key={s} className="bg-navy-800 border border-white/10 px-2 py-0.5 rounded-full font-mono text-[7px] text-slate-300">{s}</span>
              ))}
            </div>
            <div className="flex items-center justify-between bg-copper-tint border border-copper/40 rounded-lg px-3 py-2 font-display font-bold text-[0.74rem] text-white">
              One inbox
              <span className="bg-copper-tint text-copper border border-copper/30 px-2 py-0.5 rounded-full font-mono text-[7px]">5 NEW · ONE THREAD PER CLIENT ✓</span>
            </div>
          </div>
        )
      },
      {
        title: "Ask your spa anything.",
        desc: "\"What's my top package this quarter?\" \"Which therapist is fully booked next weekend?\" \"How many gift cards did we sell in December?\" — answered in plain language, from your real numbers.",
        tag: "powered by Ask AI + Reports & insights · OPS (LIVE)",
        viz: (
          <div className={vizWrap}>
            <span className={vizLabel}>Ask AI</span>
            <div className="text-[0.72rem] text-slate-300 italic mt-4">▸ How many gift cards did we sell in December?</div>
            <div className="bg-navy-800 border border-white/10 rounded p-2">
              <b className="font-mono text-[11px] text-white">DECEMBER — 112 GIFT CARDS · $14.2K</b>
              <div className="flex items-end gap-1 h-8 mt-1.5">
                <i className="flex-1 rounded-t bg-copper/40" style={{ height: "38%" }} />
                <i className="flex-1 rounded-t bg-copper/40" style={{ height: "55%" }} />
                <i className="flex-1 rounded-t bg-copper" style={{ height: "100%" }} />
              </div>
            </div>
          </div>
        )
      }
    ]
  }
];

const DEMOS = [
  {
    title: "A quiet Tuesday",
    titleAccent: "fills itself",
    copy: "The \"midweek escape\" text goes out Friday to lapsed clients only. By Tuesday morning, the book is 85% full.",
    tag: "powered by Email & SMS campaigns · GROW",
    direction: "left" as const,
    body: (
      <div className="bg-navy-800 text-white border border-white/10 rounded-[var(--r-lg)] p-5 shadow-md">
        <div className="flex justify-between items-center pb-3 border-b border-white/10 mb-3">
          <b className="font-mono text-[11px] tracking-[0.16em] text-slate-400">TUESDAY — THE QUIET DAY</b>
          <span className="font-mono text-[11px] tracking-wide text-copper flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-copper animate-pulse" />
            LIVE
          </span>
        </div>
        <div className="bg-copper-tint border border-copper/30 rounded-xl p-3 text-[0.82rem] text-white leading-snug mb-4">
          Midweek escape ✨ This Tuesday only: 20% off any 60-min treatment. Quiet rooms, your favorite therapist. Book: fynz.io/serene
          <span className="block font-mono text-[7px] text-slate-400 mt-1.5">SENT FRIDAY 5 PM · 400 LAPSED CLIENTS · NOT YOUR REGULARS</span>
        </div>
        <div className="grid grid-cols-5 gap-1.5 mb-4">
          {["10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00"].map((t, i) => (
            <span
              key={t}
              className={`font-mono text-[8px] text-center rounded border py-1.5 ${i % 3 === 2 ? "bg-copper-tint border-copper/40 text-copper" : "border-white/10 text-slate-300"}`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <small className="font-mono text-[8px] text-slate-400 tracking-wide">TUESDAY</small>
          <div className="flex-1 h-2 rounded-full bg-white/[0.04] overflow-hidden">
            <span className="block h-full w-[85%] bg-copper rounded-full" />
          </div>
          <span className="font-mono text-[11px] text-copper font-bold">85%</span>
        </div>
      </div>
    )
  },
  {
    title: "A $650 sale at 8 PM —",
    titleAccent: "no front desk",
    copy: "A gift card and a 5-massage series, bought online after close. Both land in the client's record, ready to redeem.",
    tag: "powered by Memberships & packages + Gift cards · SHOP",
    direction: "right" as const,
    body: (
      <div className="bg-navy-800 text-white border border-white/10 rounded-[var(--r-lg)] p-5 shadow-md">
        <div className="flex justify-between items-center pb-3 border-b border-white/10 mb-3">
          <b className="font-mono text-[11px] tracking-[0.16em] text-slate-400">ONLINE CHECKOUT — 8:00 PM</b>
          <span className="font-mono text-[11px] tracking-wide text-copper">SPA CLOSED</span>
        </div>
        <div className="flex justify-between items-center py-2.5 border-b border-white/10 text-[0.84rem]">
          <span>
            Digital gift card
            <small className="block font-mono text-[7px] text-slate-400 tracking-wide mt-0.5">FOR: MOM · DELIVERED BY EMAIL</small>
          </span>
          <span className="font-mono text-[11px] text-copper">$200</span>
        </div>
        <div className="flex justify-between items-center py-2.5 border-b border-white/10 text-[0.84rem]">
          <span>
            5-massage series
            <small className="block font-mono text-[7px] text-slate-400 tracking-wide mt-0.5">60-MIN · NEVER EXPIRES</small>
          </span>
          <span className="font-mono text-[11px] text-copper">$450</span>
        </div>
        <div className="flex justify-between items-center py-3 font-display font-bold text-[0.9rem]">
          <span>TOTAL</span>
          <span>$650.00</span>
        </div>
        <div className="text-center mb-3">
          <span className="font-mono text-[11px] tracking-widest text-copper font-bold">PAID ✓</span>
        </div>
        <div className="text-center">
          <span className="bg-green/10 text-green border border-green/30 px-3 py-1 rounded-full font-mono text-[8px]">
            ADDED TO CLIENT RECORD — READY TO REDEEM ✓
          </span>
        </div>
      </div>
    )
  }
];

const BEFORE_ITEMS = [
  { time: "8:00 AM", desc: "Tuesday's book is 30% full. You stare at it and don't know what to do." },
  { time: "10:00 AM", desc: "Someone calls asking about couples massage — the front-desk person takes the call, misses two check-ins." },
  { time: "12:00 PM", desc: "Client checks out. You explain the 5-massage series. She'll \"think about it.\" Never buys." },
  { time: "3:00 PM", desc: "A client no-shows the couples suite. Ninety minutes and two therapists wasted." },
  { time: "6:00 PM", desc: "You post to Instagram between clients. Twelve likes." },
  { time: "8:00 PM", desc: "Someone stops by asking for a Mother's Day gift card. Handwritten certificate." }
];

const AFTER_ITEMS = [
  { time: "8:00 AM", desc: "The Friday \"midweek escape\" text hit 400 clients over the weekend. Tuesday is 85% booked before you unlock the door." },
  { time: "10:00 AM", desc: "Voice AI took the couples-massage call, booked for Thursday, and offered the gift card upsell — she added one to the checkout." },
  { time: "12:00 PM", desc: "Checkout offered the 5-massage series at the payment screen. She bought it in two taps." },
  { time: "3:00 PM", desc: "The couples suite deposit held. The no-show is covered; the waitlist got the slot; the room refilled by 3:20." },
  { time: "6:00 PM", desc: "Content AI posted the \"Zen room\" shot to Instagram at 4 PM. 180 likes and four saved posts." },
  { time: "8:00 PM", desc: "The Mother's Day gift card was bought online at 7:45. Delivered by email, tracked to the buyer's record, ready to redeem." }
];

const FAQs = [
  { q: "Do I need to be techy?", a: "No. Setup is guided step by step, and once it's running, it runs itself. If you can post to Instagram, you can run FYNZ." },
  { q: "Will it sound like a robot to my clients?", a: "It speaks and texts in a natural voice, in your tone — and it hands the conversation to you the moment it should." },
  { q: "Will the messages feel premium — not like retail marketing?", a: "Every message uses your voice, cadence, and pacing; approve-first mode lets you review anything before it sends. Members and regulars are never treated like a sale." },
  { q: "Can I keep my phone number?", a: "Yes. Your existing number keeps working — FYNZ just makes sure it always gets answered." },
  { q: "How long does setup take?", a: "Most owners are live in under a week." },
  { q: "What does it cost — am I locked into a contract?", a: "Plans are on the pricing page, and there's a free plan to start. No long-term contract — every paid plan is month-to-month with a 30-day money-back guarantee, and you can cancel anytime from your dashboard." },
  { q: "What happens when the AI can't answer something?", a: "It takes a message, notifies you instantly, and never guesses. You can also run it in approve-first mode — it drafts, you tap send." }
];

export default function SpasPage() {
  return (
    <div className="flex flex-col w-full industry-theme" style={industryThemeVars("spas")}>
      {/* Hero */}
      <section className="s-hero pt-32 pb-16 md:pt-40 md:pb-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Chip className="mb-4">For spas</Chip>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6">
              Fill quiet weekdays and sell <span className="text-copper">more packages</span>.
            </h1>
            <p className="text-muted text-lg mb-8 max-w-xl">
              FYNZ fills your slow days, sells your series and gift cards, and turns one-time visitors into members — while you keep the room quiet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="/onboarding?plan=free&industry=spas" />}>
                Start free
              </Button>
              <Button size="lg" variant="outline" render={<Link href="#showit" />}>
                See it work ↓
              </Button>
            </div>
          </div>

          {/* Hero visual mockups */}
          <div className="relative flex flex-col sm:flex-row gap-6 max-w-[550px] w-full justify-self-center lg:justify-self-end">
            <HoverFloat className="flex-1" yOffset={-10} duration={3.5}>
              <div className="bg-navy-800 text-white border border-white/10 rounded-[var(--r-lg)] p-5 relative shadow-md">
                <div className="flex items-center gap-3 pb-3 border-b border-white/10 mb-3">
                  <span className="w-9 h-9 rounded-xl bg-copper-tint border border-copper/30 grid place-items-center text-copper font-display font-extrabold text-sm shrink-0">S</span>
                  <div>
                    <b className="font-display text-[0.9rem] font-bold block leading-tight">Serene Day Spa</b>
                    <small className="font-mono text-[7px] tracking-[0.12em] text-slate-400 block mt-0.5">BOOK YOUR VISIT — POWERED BY FYNZ</small>
                  </div>
                </div>
                <div className="space-y-0">
                  <div className="flex justify-between items-center py-2.5 border-b border-white/10 text-[0.82rem]">
                    <span>
                      60-min massage
                      <small className="block font-mono text-[7px] text-slate-400 mt-0.5">ADD HOT STONES +$25</small>
                    </span>
                    <span className="font-mono text-[11px] text-copper">$110</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-white/10 text-[0.82rem]">
                    <span>
                      Signature facial
                      <small className="block font-mono text-[7px] text-slate-400 mt-0.5">75 MIN</small>
                    </span>
                    <span className="font-mono text-[11px] text-copper">$135</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 text-[0.82rem]">
                    <span>
                      Couples retreat
                      <small className="block font-mono text-[7px] text-slate-400 mt-0.5">2 THERAPISTS · SUITE</small>
                    </span>
                    <span className="font-mono text-[11px] text-copper">$240</span>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap py-3">
                  {["10:00", "2:00", "3:30", "5:00"].map((t) => (
                    <span
                      key={t}
                      className={`font-mono text-[11px] rounded-lg border px-3 py-1.5 ${t === "2:00" ? "bg-copper-tint border-copper/50 text-copper" : "border-white/10 text-slate-300"}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="block text-center bg-copper text-white font-display font-bold text-[0.9rem] rounded-full py-3">
                  Book Tuesday — 2:00 PM
                </span>
                <span className="block mt-3 text-center font-mono text-[8px] tracking-wide text-green border border-green/30 bg-green/10 rounded-lg py-1.5">
                  TUESDAY 85% BOOKED · OFFER SENT ✓
                </span>
              </div>
            </HoverFloat>

            <HoverFloat className="flex-1" yOffset={10} duration={4} delay={0.5}>
              <div className="bg-navy-800 text-white border border-white/10 rounded-[var(--r-lg)] p-4 relative shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <i className="w-5 h-5 rounded-full bg-copper-tint border border-copper/40 shrink-0" />
                  <b className="font-display text-[0.8rem] font-bold">serenedayspa</b>
                </div>
                <div className="h-24 rounded-lg mb-3 bg-[radial-gradient(70%_90%_at_30%_20%,rgba(181,100,63,0.35),transparent_60%),radial-gradient(60%_80%_at_80%_90%,rgba(233,190,106,0.22),transparent_60%)] bg-white/[0.06]" />
                <p className="text-[0.72rem] text-slate-300 leading-snug">The Zen room, ready for you ✨ Midweek escapes now booking…</p>
                <span className="block mt-2 font-mono text-[7.5px] tracking-wide text-green">SCHEDULED ✓ IG · FB · GOOGLE BUSINESS</span>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="rounded-lg p-2 text-white bg-gradient-to-br from-copper to-[#9E5533]">
                    <b className="font-display text-[0.6rem] font-extrabold block leading-tight">SERENE DAY SPA</b>
                    <small className="font-mono text-[6px] tracking-wide opacity-80">DIGITAL GIFT CARD</small>
                    <span className="font-display font-extrabold text-sm block leading-none mt-0.5">$200</span>
                  </div>
                  <small className="font-mono text-[7px] text-green tracking-wide text-right leading-tight w-20">PURCHASED ONLINE · 7:45 PM ✓</small>
                </div>
              </div>
            </HoverFloat>
          </div>
        </div>
      </section>

      {/* Pains */}
      <section className="sec py-20 bg-secondary border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">Sound familiar?</span>
            <h2 className="font-display font-extrabold text-3xl tracking-tight">
              The parts of spa life <span className="text-copper">nobody warned you about</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PAINS.map((pain, idx) => (
              <Card
                key={idx}
                className="bg-navy-800 border border-white/10 shadow-sm rounded-2xl ring-0 p-6 flex flex-row items-start gap-4"
              >
                <span className="font-display text-copper text-2xl leading-none mt-1 shrink-0 select-none">&ldquo;</span>
                <CardContent className="p-0">
                  <p className="text-slate-300 text-base leading-relaxed">{pain}</p>
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
            <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">Here&apos;s what changes</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Keep the room quiet. FYNZ handles <span className="text-copper">the noise</span>.
            </h2>
          </div>

          <div className="space-y-28">
            {BENEFIT_GROUPS.map((group, groupIdx) => (
              <div key={groupIdx} className="border-t border-line-soft/30 pt-12">
                <div className="flex items-center gap-4 mb-10">
                  <span className="font-mono text-sm text-copper bg-copper-tint border border-copper/30 px-3 py-1 rounded-full">{group.num}</span>
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight">{group.title}</h3>
                </div>

                <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.cards.map((card, cardIdx) => (
                    <BadgeCard
                      key={cardIdx}
                      title={card.title}
                      className="bg-navy-800 text-white border-white/10 flex flex-col justify-between min-h-[380px]"
                    >
                      <div>
                        <div className="mb-4" aria-hidden="true">{card.viz}</div>
                        <p className="text-slate-300 text-base leading-relaxed mb-6">{card.desc}</p>
                      </div>
                      <span className="block font-mono text-[8px] tracking-wider text-slate-400 uppercase mt-auto">{card.tag}</span>
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
            <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">Watch it work</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Two things FYNZ did <span className="text-copper">while the room stayed quiet</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {DEMOS.map((demo, idx) => (
              <ScrollReveal key={idx} className="flex flex-col gap-6" direction={demo.direction}>
                <div className="max-w-md">
                  <b className="font-display font-bold text-xl block mb-2">
                    {demo.title} <span className="text-copper">{demo.titleAccent}</span>.
                  </b>
                  <p className="text-muted text-base leading-relaxed">{demo.copy}</p>
                </div>
                {demo.body}
                <span className="font-mono text-[11px] tracking-widest text-faint uppercase">{demo.tag}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="sec py-20 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">A day with FYNZ</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Same Tuesday. <span className="text-copper">Different spa</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="border border-white/10 rounded-[var(--r-lg)] p-8 bg-navy-750">
              <span className="font-mono text-[11px] tracking-widest text-slate-400 block mb-8 uppercase font-bold">BEFORE FYNZ, TUESDAY</span>
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
              <span className="font-mono text-[11px] tracking-widest text-copper block mb-8 uppercase font-bold">SAME TUESDAY, WITH FYNZ</span>
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
            <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">Owner FAQ</span>
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
                  {idx === 5 ? (
                    <>
                      Plans are on the{" "}
                      <Link href="/pricing" className="text-copper">
                        pricing page
                      </Link>
                      , and there&apos;s a free plan to start. No long-term contract — every paid plan is month-to-month with a 30-day money-back guarantee, and you can cancel anytime from your dashboard.
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
          <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">For spas</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
            Keep the room quiet. FYNZ fills <span className="text-copper">the book</span>.
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            Full Tuesdays, packages that sell themselves, and gift cards without the drawer — from day one.
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
