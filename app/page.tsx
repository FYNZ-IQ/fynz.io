"use client";

import React from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup, HoverFloat } from "@/components/animations";
import { Chip } from "@/components/shared";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { CinematicProvider, CineCanvas, Grain, Parallax, ProgressRail } from "@/components/cinematic";
import { AiAgentVisual, ChannelVisual, IndustryVisual, VisualStyles } from "@/components/cinematic/visuals";


const PROOF_BADGES = [
  { name: "CAPTERRA", rating: "4.9 / 5" },
  { name: "G2", rating: "4.8 / 5" },
  { name: "TRUSTPILOT", rating: "4.9 / 5" },
  { name: "GETAPP", rating: "4.8 / 5" }
];

const BROW_CARDS = [
  {
    chip: "GROW",
    title: "Capture every lead, everywhere they find you",
    desc: "Forms, funnels, missed-call text-back, and social DMs all flow into one CRM. No lead slips through a busy Tuesday again — every inquiry gets a name, a pipeline stage, and a next step.",
    link: "/grow",
    linkText: "Explore GROW",
    reverse: false,
    visual: (
      <div className="panel bg-navy-800 text-white border border-white/10 rounded-[var(--r-md)] p-5 relative w-full select-none" aria-hidden="true">
        <div className="p-title font-mono text-[9px] tracking-wider text-slate-400 border-b border-white/10 pb-2 mb-3">
          PIPELINE · NEW LEADS <b className="text-copper">TODAY: 14</b>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 p-2 bg-navy-750/70 border border-white/10 rounded">
            <span className="w-6 h-6 rounded-full bg-copper/10 text-copper text-[10px] font-bold flex items-center justify-center shrink-0">JT</span>
            <div className="flex-1 min-w-0">
              <div className="font-display font-semibold text-white text-xs truncate">Jordan T.</div>
              <div className="font-mono text-[8px] text-slate-400 truncate">GOOGLE ADS · 4 MIN AGO</div>
            </div>
            <span className="bg-copper/10 text-copper border border-copper/30 px-1.5 py-0.5 rounded text-[7px] font-mono">NEW</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-navy-750/70 border border-white/10 rounded">
            <span className="w-6 h-6 rounded-full bg-copper/10 text-copper text-[10px] font-bold flex items-center justify-center shrink-0">MR</span>
            <div className="flex-1 min-w-0">
              <div className="font-display font-semibold text-white text-xs truncate">Maya R.</div>
              <div className="font-mono text-[8px] text-slate-400 truncate">INSTAGRAM DM · 11 MIN AGO</div>
            </div>
            <span className="bg-green/10 text-green border border-green/30 px-1.5 py-0.5 rounded text-[7px] font-mono">REPLIED</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-navy-750/70 border border-white/10 rounded">
            <span className="w-6 h-6 rounded-full bg-copper/10 text-copper text-[10px] font-bold flex items-center justify-center shrink-0">DK</span>
            <div className="flex-1 min-w-0">
              <div className="font-display font-semibold text-white text-xs truncate">Devon K.</div>
              <div className="font-mono text-[8px] text-slate-400 truncate">MISSED CALL · TEXT-BACK</div>
            </div>
            <span className="bg-copper/10 text-copper border border-copper/30 px-1.5 py-0.5 rounded text-[7px] font-mono">NEW</span>
          </div>
        </div>
      </div>
    )
  },
  {
    chip: "GROW",
    title: "One inbox for every message",
    desc: "SMS, email, WhatsApp, Instagram, Facebook, and webchat — answered from a single thread per customer. Stop app-hopping; the full conversation history is always right there.",
    link: "/features/inbox",
    linkText: "Learn more",
    reverse: true,
    visual: (
      <div className="panel bg-navy-800 text-white border border-white/10 rounded-[var(--r-md)] p-5 relative w-full select-none" aria-hidden="true">
        <div className="p-title font-mono text-[9px] tracking-wider text-slate-400 border-b border-white/10 pb-2 mb-3">
          UNIFIED INBOX · SARAH MITCHELL <b className="text-copper">ALL CHANNELS</b>
        </div>
        <div className="space-y-2.5">
          <div className="flex gap-2">
            <span className="font-mono text-[7px] text-slate-400 bg-white/[0.08] px-1.5 py-0.5 rounded h-fit">IG</span>
            <div className="bg-navy-750/80 border border-white/10 p-2 rounded text-[0.75rem] text-slate-100 max-w-[80%]">
              Hi! Do you have anything open this weekend?
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <div className="bg-copper/10 border border-copper/20 p-2 rounded text-[0.75rem] text-white max-w-[80%] text-right">
              We do! Saturday 10am or 1:30pm — want me to hold one?
            </div>
            <span className="font-mono text-[7px] text-copper bg-copper-tint/50 px-1.5 py-0.5 rounded h-fit">ME</span>
          </div>
          <div className="flex gap-2">
            <span className="font-mono text-[7px] text-slate-400 bg-white/[0.08] px-1.5 py-0.5 rounded h-fit">SMS</span>
            <div className="bg-navy-750/80 border border-white/10 p-2 rounded text-[0.75rem] text-slate-100 max-w-[80%]">
              1:30 works great, thank you!!
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    chip: "SCHEDULE",
    title: "Book appointments 24/7 — even while you sleep",
    desc: "A booking page that knows your services, staff, and real availability. Customers self-book, reschedule, and get reminders automatically, so no-shows drop and your phone stops ringing off the hook.",
    link: "/schedule",
    linkText: "Explore SCHEDULE",
    reverse: false,
    visual: (
      <div className="panel bg-navy-800 text-white border border-white/10 rounded-[var(--r-md)] p-5 relative w-full select-none" aria-hidden="true">
        <div className="p-title font-mono text-[9px] tracking-wider text-slate-400 border-b border-white/10 pb-2 mb-3">
          JULY · WEEK 2 <b className="text-copper">3 STAFF SYNCED</b>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center font-mono text-[10px] text-slate-300">
          <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
          <div className="p-1 rounded bg-white/[0.08] text-slate-400">6</div>
          <div className="p-1 rounded bg-copper-tint/20 text-copper border border-copper/20">7</div>
          <div className="p-1 rounded bg-copper-tint/20 text-copper border border-copper/20">8</div>
          <div className="p-1 rounded bg-copper text-white font-bold">9</div>
          <div className="p-1 rounded bg-copper-tint/20 text-copper border border-copper/20">10</div>
          <div className="p-1 rounded bg-copper-tint/20 text-copper border border-copper/20">11</div>
          <div className="p-1 rounded bg-white/[0.08] text-slate-400">12</div>
        </div>
      </div>
    )
  },
  {
    chip: "SHOP",
    title: "Get paid & sell online",
    desc: "Take deposits at booking, sell products and gift cards from your own store, and send invoices that get paid in one tap — through Stripe, PayPal, Square, and the cards your customers already carry.",
    link: "/shop",
    linkText: "Explore SHOP",
    reverse: true,
    visual: (
      <div className="panel bg-navy-800 text-white border border-white/10 rounded-[var(--r-md)] p-5 relative w-full select-none" aria-hidden="true">
        <div className="p-title font-mono text-[9px] tracking-wider text-slate-400 border-b border-white/10 pb-2 mb-3">
          PAYMENTS · THIS WEEK <b className="text-copper">$3,912.50</b>
        </div>
        <div className="space-y-2 text-[0.78rem]">
          <div className="flex justify-between items-center p-2 bg-navy-750/70 border border-white/10 rounded">
            <div>
              <b className="font-semibold block text-white">Deposit — Balayage, Sat 1:30</b>
              <small className="font-mono text-[8px] text-slate-400 uppercase">CARD · STRIPE</small>
            </div>
            <span className="text-green font-bold font-mono">+$50.00</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-navy-750/70 border border-white/10 rounded">
            <div>
              <b className="font-semibold block text-white">Gift card — $100</b>
              <small className="font-mono text-[8px] text-slate-400 uppercase">ONLINE STORE</small>
            </div>
            <span className="text-green font-bold font-mono">+$100.00</span>
          </div>
        </div>
      </div>
    )
  },
  {
    chip: "AUTOMATION",
    title: "Automate the busywork",
    desc: "Follow-ups, reminders, rebooking nudges, birthday offers — build the workflow once and FYNZ runs it forever. Automation is the connective tissue between every pillar, not an add-on.",
    link: "/features/automations",
    linkText: "Learn more",
    reverse: false,
    visual: (
      <div className="panel bg-navy-800 text-white border border-white/10 rounded-[var(--r-md)] p-4 relative w-full select-none" aria-hidden="true">
        <div className="p-title font-mono text-[9px] tracking-wider text-slate-400 border-b border-white/10 pb-1.5 mb-2.5">
          WORKFLOW · "NEW LEAD RESCUE" <b className="text-copper">ACTIVE</b>
        </div>
        <div className="flex flex-col gap-1 items-center text-[0.72rem]">
          <div className="px-2 py-1 bg-navy-750 border border-white/10 rounded w-full text-center">
            <span className="text-white">⚡ <b>Trigger: missed call</b></span>
          </div>
          <div className="w-0.5 h-2 bg-copper/30"></div>
          <div className="px-2 py-1 bg-navy-750 border border-white/10 rounded w-full text-center">
            <span className="text-white">💬 <b>Send text-back in 30 sec</b></span>
          </div>
          <div className="w-0.5 h-2 bg-copper/30"></div>
          <div className="px-2 py-1 bg-navy-800 border border-white/10 rounded w-full text-center text-copper font-bold">
            📅 <b>Offer booking link</b>
          </div>
        </div>
      </div>
    )
  },
  {
    chip: "REPUTATION",
    title: "Win reviews on autopilot",
    desc: "After every visit, FYNZ asks happy customers for a Google review at exactly the right moment — and drafts your responses. More stars, higher local ranking, zero chasing.",
    link: "/features/reputation",
    linkText: "Learn more",
    reverse: true,
    visual: (
      <div className="panel bg-navy-800 text-white border border-white/10 rounded-[var(--r-md)] p-5 relative w-full select-none" aria-hidden="true">
        <div className="p-title font-mono text-[9px] tracking-wider text-slate-400 border-b border-white/10 pb-2 mb-3">
          REVIEWS · LAST 30 DAYS <b className="text-copper">+41 NEW</b>
        </div>
        <div className="space-y-2">
          <div className="bg-navy-750/70 border border-white/10 p-2.5 rounded text-[0.75rem]">
            <div className="text-copper text-[10px] mb-0.5">★★★★★</div>
            <b className="font-semibold block text-white">"Best cut I've had in years."</b>
            <span className="font-mono text-[7.5px] text-slate-400 block mt-1">Google · Reviews AI drafted a reply</span>
          </div>
        </div>
      </div>
    )
  },
  {
    chip: "OPS",
    title: "See the whole business at a glance",
    desc: "Revenue, bookings, payroll hours, and what you owe at tax time — one dashboard instead of a shoebox of receipts. Accounting and tax tools are rolling out under the OPS pillar.",
    link: "/ops",
    linkText: "Explore OPS",
    reverse: false,
    visual: (
      <div className="panel bg-navy-800 text-white border border-white/10 rounded-[var(--r-md)] p-5 relative w-full select-none" aria-hidden="true">
        <div className="p-title font-mono text-[9px] tracking-wider text-slate-400 border-b border-white/10 pb-2 mb-4">
          REVENUE BY MONTH <b className="text-copper">YTD $128,400</b>
        </div>
        <div className="flex items-end justify-between h-14 px-2">
          <span className="w-[10%] bg-copper/30 rounded-t h-[40%]"></span>
          <span className="w-[10%] bg-copper/30 rounded-t h-[60%]"></span>
          <span className="w-[10%] bg-copper/30 rounded-t h-[50%]"></span>
          <span className="w-[10%] bg-copper/30 rounded-t h-[75%]"></span>
          <span className="w-[10%] bg-copper/30 rounded-t h-[70%]"></span>
          <span className="w-[10%] bg-copper rounded-t h-[95%]"></span>
        </div>
      </div>
    )
  }
];

const PILLARS = [
  {
    id: "grow",
    title: "GROW",
    promise: "Get customers and keep them coming back.",
    desc: "Lead capture, CRM & pipelines, Email & SMS marketing, reviews & reputation automations.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>
      </svg>
    ),
    link: "/grow"
  },
  {
    id: "schedule",
    title: "SCHEDULE",
    promise: "Bookings that run themselves, 24/7.",
    desc: "Online booking page & smart calendar, staff schedules, customer profiles & reminders.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
      </svg>
    ),
    link: "/schedule"
  },
  {
    id: "shop",
    title: "SHOP",
    promise: "Sell anything, get paid instantly.",
    desc: "Online store, gift cards, deposits, invoicing, tap-to-pay checkout & memberships.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
    link: "/shop"
  },
  {
    id: "ops",
    title: "OPS",
    promise: "The back office, finally under control.",
    desc: "Reporting & business dashboards, staff commissions, plus accounting & tax rolling out.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>
      </svg>
    ),
    link: "/ops"
  }
];

const REPLACES_STACK = [
  { name: "CRM", cost: "$99/mo" },
  { name: "Booking app", cost: "$45/mo" },
  { name: "Email marketing", cost: "$60/mo" },
  { name: "SMS platform", cost: "$39/mo" },
  { name: "Invoicing software", cost: "$30/mo" },
  { name: "Review manager", cost: "$79/mo" },
  { name: "Social scheduler", cost: "$25/mo" },
  { name: "Funnel builder", cost: "$97/mo" }
];

const AUTOMATION_STEPS = [
  { step: "TRIGGER", title: "New lead comes in", desc: "Form, DM, ad, or missed call" },
  { step: "00:30", title: "Auto text-back", desc: "Instant reply with your booking link" },
  { step: "SAME DAY", title: "They book themselves", desc: "Deposit collected at checkout" },
  { step: "-24H", title: "Reminder sent", desc: "SMS + email — no-show avoided" },
  { step: "+2H AFTER", title: "Review request", desc: "Five stars land on Google" }
];

const AI_TEAM = [
  {
    name: "Voice AI",
    role: "Receptionist",
    desc: "Answers every call, books the appointment, and texts a confirmation — even at 11pm on a Sunday.",
    link: "/ai/voice"
  },
  {
    name: "Conversation AI",
    role: "Front desk",
    desc: "Replies to every SMS, DM, and webchat instantly — answers questions, qualifies leads, drops the booking link.",
    link: "/ai/conversation"
  },
  {
    name: "Reviews AI",
    role: "Reputation manager",
    desc: "Requests reviews at the perfect moment and drafts on-brand responses to every one — good or bad.",
    link: "/ai/reviews"
  },
  {
    name: "Content AI",
    role: "Marketing assistant",
    desc: "Writes your social posts, emails, and landing pages in your voice — then schedules them for you.",
    link: "/ai/content"
  }
];

const CHANNELS = [
  { title: "Your booking page", desc: "A branded page at your own link — services, staff, live availability." },
  { title: "Instagram", desc: "A Book Now button on your profile and in every DM reply." },
  { title: "Website embed", desc: "Drop the booking widget into any site you already have." },
  { title: "QR code", desc: "Print it on the counter, the window, the receipt — scan to book." },
  { title: "WhatsApp", desc: "Customers book right inside the chat they already use." },
  { title: "Book from search & maps", desc: "Reserve-style booking directly from your business listing." }
];

const INDUSTRIES = [
  { title: "Salons & barbershops", desc: "Chairs, color services, rebooking", link: "/industries/barbershops" },
  { title: "Clinics & dental", desc: "Intake, recalls, HIPAA-minded flows", link: "/industries/clinics" },
  { title: "Fitness & gyms", desc: "Classes, memberships, waitlists", link: "/industries/fitness" },
  { title: "Restaurants", desc: "Reservations, events, private dining", link: "/industries/restaurants" },
  { title: "Retail & boutiques", desc: "Store, styling appointments, loyalty", link: "/industries/retail" },
  { title: "Home services", desc: "Estimates, dispatch, invoicing", link: "/industries/home-services" }
];

const STATS = [
  { num: "2,000+", label: "Businesses served" },
  { num: "1.4M+", label: "Appointments booked" },
  { num: "8.2M+", label: "Messages automated" },
  { num: "$46M+", label: "Processed for owners" }
];

const TESTIMONIALS = [
  {
    stars: "★★★★★",
    quote: "\"I cancelled four subscriptions the month we switched. The missed-call text-back alone books us two or three extra clients a week.\"",
    author: "Danielle L.",
    biz: "MAPLE & MAIN SALON · TORONTO, ON"
  },
  {
    stars: "★★★★★",
    quote: "\"Voice AI answers when we're mid-service. Customers think we hired a receptionist. We didn't — and our no-show rate is basically zero.\"",
    author: "Marcus P.",
    biz: "IRONWORKS FITNESS · AUSTIN, TX"
  },
  {
    stars: "★★★★★",
    quote: "\"Estimates, invoices, review requests — it all just happens now. I run a six-person crew from my phone.\"",
    author: "Rachel C.",
    biz: "NORTHPOINT HOME SERVICES · DENVER, CO"
  }
];

export default function Home() {
  return (
    <CinematicProvider>
    <div className="flex flex-col w-full">
      <VisualStyles />
      <ProgressRail
        sections={[
          { id: "hero", label: "Fynz", color: "#D9967D" },
          { id: "features", label: "Platform", color: "#D9967D" },
          { id: "pillars", label: "Pillars", color: "#7FB2E5" },
          { id: "automation", label: "Automation", color: "#E9BE6A" },
          { id: "ai", label: "AI", color: "#AEB9C9" },
          { id: "industries", label: "Industries", color: "#7FB2E5" },
          { id: "cta", label: "Start", color: "#D9967D" },
        ]}
      />
      {/* Hero — pinned cinematic stage: the orbit graphic converges as you scroll */}
      <section id="hero" data-cine-scrub className="relative lg:h-[210vh]">
        <div className="relative lg:sticky lg:top-0 lg:h-screen overflow-hidden flex flex-col justify-center pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-[88px] lg:pb-0">
        <CineCanvas painter="hero" mode="scrub" />
        <Grain />
        {/* Glow Effects */}
        <div className="absolute inset-0 bg-radial-[at_50%_0%] from-copper/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-[72px] left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-line-soft/20 pointer-events-none" />

        <div className="wrap max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col items-start text-left">
            <Chip className="mb-4">All-in-one business platform</Chip>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6">
              Run your entire business in <span className="text-copper">one place</span>.
            </h1>
            <p className="text-muted text-lg mb-8 max-w-xl">
              Get customers, book them, sell to them, and run the whole operation — without juggling ten different tools. FYNZ puts your CRM, calendar, store, and back office on a single screen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="/pricing" />}>
                Start 14-day trial
              </Button>
              <Button size="lg" variant="outline" render={<Link href="#demo" />}>
                Book a demo
              </Button>
            </div>
            <span className="font-mono text-[9px] tracking-widest text-faint uppercase">FREE PLAN — NO CARD · TRIALS SET UP FOR YOU IN 48H</span>
          </div>

          {/* Hero Dashboard Preview */}
          <div className="relative w-full max-w-[550px] justify-self-center lg:justify-self-end">
            <Parallax speed={0.06}>
            <HoverFloat yOffset={-12} duration={4}>
              <div className="bg-navy-900 text-white border border-white/10 rounded-[var(--r-lg)] p-5 relative shadow-xl overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.15em] text-slate-400">FYNZ · TODAY</span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5 text-center">
                  <div className="bg-navy-750/70 border border-white/10 p-2.5 rounded">
                    <small className="block font-mono text-[8px] text-slate-400 uppercase">Revenue</small>
                    <b className="font-display text-lg font-bold text-white">$4,280</b>
                    <span className="block font-mono text-[8px] text-green font-semibold mt-0.5">+12%</span>
                  </div>
                  <div className="bg-navy-750/70 border border-white/10 p-2.5 rounded">
                    <small className="block font-mono text-[8px] text-slate-400 uppercase">Bookings</small>
                    <b className="font-display text-lg font-bold text-white">23</b>
                    <span className="block font-mono text-[8px] text-green font-semibold mt-0.5">+6</span>
                  </div>
                  <div className="bg-navy-750/70 border border-white/10 p-2.5 rounded">
                    <small className="block font-mono text-[8px] text-slate-400 uppercase">New leads</small>
                    <b className="font-display text-lg font-bold text-white">14</b>
                    <span className="block font-mono text-[8px] text-green font-semibold mt-0.5">+9</span>
                  </div>
                </div>

                {/* Micro Chart SVG */}
                <div className="h-16 relative w-full mb-5 opacity-80 overflow-hidden rounded">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#D9967D" stopOpacity="0.35"/>
                        <stop offset="1" stopColor="#D9967D" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path d="M0,78 C30,70 45,82 70,64 C95,46 115,58 140,44 C165,30 185,42 210,28 C235,16 260,26 300,10 L300,100 L0,100 Z" fill="url(#cg)"/>
                    <path d="M0,78 C30,70 45,82 70,64 C95,46 115,58 140,44 C165,30 185,42 210,28 C235,16 260,26 300,10" fill="none" stroke="#D9967D" strokeWidth="2"/>
                  </svg>
                </div>

                <div className="space-y-2 text-[0.78rem]">
                  <div className="flex justify-between items-center p-2 bg-navy-750/60 border border-white/10 rounded">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-copper/10 text-copper font-bold text-[9px] flex items-center justify-center">SM</span>
                      <span className="text-slate-200">Sarah M. booked — Color &amp; Cut</span>
                    </div>
                    <span className="font-mono text-[8px] text-slate-400">2:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-navy-750/60 border border-white/10 rounded">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-copper/10 text-copper font-bold text-[9px] flex items-center justify-center">AI</span>
                      <span className="text-slate-200">Voice AI answered a missed call</span>
                    </div>
                    <span className="font-mono text-[8px] text-slate-400">2:12 PM</span>
                  </div>
                </div>
              </div>
            </HoverFloat>
            </Parallax>
          </div>
        </div>

        {/* Scroll hint (pinned stage only) */}
        <span className="hidden lg:block absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
          <span className="block font-mono text-[11px] tracking-[0.35em] text-faint animate-bounce">SCROLL</span>
        </span>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6 py-8 border-t border-line-soft/30">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <b className="text-ink font-display text-lg block">2,000+ businesses</b>
              <span className="text-muted text-sm">run on FYNZ across the US &amp; Canada</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {PROOF_BADGES.map((badge, idx) => (
                <div key={idx} className="flex flex-col items-center border border-white/10 px-4 py-2 rounded bg-navy-900/50 text-white">
                  <span className="text-copper text-xs mb-0.5">★★★★★</span>
                  <div className="text-center">
                    <b className="text-white text-xs block leading-none">{badge.rating}</b>
                    <small className="font-mono text-[10px] text-slate-400 tracking-wider uppercase mt-1 block">{badge.name}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rows: Feature Highlights */}
      <section id="features" className="sec py-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">The full platform</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-4">
              Booking is just the <span className="text-copper">beginning</span>.
            </h2>
            <p className="text-muted leading-relaxed">
              Most tools solve one problem and leave you with nine more subscriptions. FYNZ handles the whole customer journey — from the first click to the five-star review.
            </p>
          </div>

          <div className="space-y-24">
            {BROW_CARDS.map((card, idx) => (
              <ScrollReveal
                key={idx}
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-12",
                  card.reverse && "lg:flex-row-reverse"
                )}
                direction={card.reverse ? "right" : "left"}
              >
                <div className="flex-1 max-w-xl">
                  <Chip className="mb-4">{card.chip}</Chip>
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mb-4 text-slate-900 dark:text-white">{card.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{card.desc}</p>
                  <Link href={card.link} className="inline-flex items-center gap-1 text-copper font-mono text-xs tracking-wider uppercase group">
                    {card.linkText} <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
                <div className="flex-1 w-full max-w-[450px]">
                  {card.visual}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Four Pillars Grid */}
      <section id="pillars" className="sec py-24 bg-white dark:bg-navy-900 text-slate-900 dark:text-white border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">Four pillars</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-4">
              Everything your business runs on, in <span className="text-copper">four pillars</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Each pillar is a full product on its own. Together, they replace your entire software stack.
            </p>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PILLARS.map((p, idx) => (
              <Link
                key={idx}
                href={p.link}
                className="group border border-white/10 bg-navy-800 text-white hover:border-copper/40 p-6 rounded-[var(--r-lg)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 min-h-[300px]"
              >
                <div>
                  {/* Scroll-driven product demo graphic */}
                  <div className="relative h-[300px] mb-6 rounded-[10px] overflow-hidden border border-white/10 bg-navy-900/40">
                    <CineCanvas painter={p.id} surface="dark" />
                  </div>
                  <div className="w-10 h-10 rounded border border-none bg-navy-750 flex items-center justify-center text-copper mb-6 group-hover:bg-copper group-hover:text-white transition-colors duration-300">
                    {p.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-copper transition-colors duration-300 mb-2">{p.title}</h3>
                  <p className="font-mono text-xs text-slate-400 tracking-wide uppercase mb-3">{p.promise}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
                <span className="inline-flex items-center gap-1 font-mono text-xs tracking-wider text-copper uppercase mt-6 group-hover:translate-x-1 transition-transform">
                  Explore →
                </span>
              </Link>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Consolidate Section */}
      <section className="sec py-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">Consolidate</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-4">
              Everything, <span className="text-copper">actually</span> in one place
            </h2>
            <p className="text-muted">
              Stop paying for — and duct-taping together — ten subscriptions. FYNZ replaces the whole stack, and every part talks to every other part.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white dark:bg-navy-900 text-slate-900 dark:text-white border border-slate-200 dark:border-navy-800 p-8 md:p-12 rounded-[var(--r-lg)]">
            {/* Left side: Replaced Stack list */}
            <div className="grid grid-cols-2 gap-4">
              {REPLACES_STACK.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border border-slate-200 dark:border-line-soft/40 p-3 rounded bg-slate-100 dark:bg-navy-750/70">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">0{idx + 1}</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white line-through decoration-copper/50">{item.name}</span>
                  </div>
                  <span className="font-mono text-[9.5px] text-slate-500 dark:text-slate-400">{item.cost}</span>
                </div>
              ))}
            </div>

            {/* Right side: Replaced Summary */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left pl-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-line-soft/30 pt-8 lg:pt-0">
              <svg className="w-10 h-10 text-copper mb-6" viewBox="0 0 32 32" fill="none">
                <path d="M4 26 L16 4 L28 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 18 H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h3 className="font-display font-extrabold text-2xl tracking-tight mb-3 text-slate-900 dark:text-white">One platform. One login. One bill.</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Every tool above — connected out of the box, sharing one customer record.
              </p>
              <Link href="/pricing" className="font-mono text-xs tracking-widest text-copper font-bold uppercase hover:underline">
                FROM $97/MO · SET UP FOR YOU · SEE PRICING →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Flow Showcase */}
      <section id="automation" className="sec py-24 bg-white dark:bg-navy-900 text-slate-900 dark:text-white border-b border-line-soft relative overflow-hidden">
        <Grain className="hidden dark:block" />
        <div className="wrap max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">Automation</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-4">
              Set it once. It runs <span className="text-copper">forever</span>.
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              This is what happens to a new lead on FYNZ — without you touching anything.
            </p>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch relative">
            {AUTOMATION_STEPS.map((step, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-200 dark:border-line-soft p-5 rounded-lg flex flex-col justify-between min-h-[160px] relative">
                <div>
                  <span className="font-mono text-[9px] tracking-wider text-copper bg-copper-tint/20 border border-copper/20 px-2 py-0.5 rounded block w-fit mb-4">{step.step}</span>
                  <b className="font-display text-sm font-bold text-slate-900 dark:text-white block mb-1">{step.title}</b>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">{step.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 dark:text-slate-300 text-slate-600  dark:text-line-soft font-bold text-lg select-none z-10">→</div>
                )}
              </div>
            ))}
          </StaggerGroup>
          <div className="text-center mt-10">
            <span className="font-mono text-[8.5px] tracking-widest text-slate-400 uppercase">BUILT IN <b>4 MINUTES</b> · RUNS ON EVERY LEAD, FOREVER</span>
          </div>
        </div>
      </section>

      {/* Meet AI Team */}
      <section id="ai" className="sec py-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">FYNZ AI</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-4">
              Meet your <span className="text-copper">AI team</span>
            </h2>
            <p className="text-muted">
              A staff that never sleeps, never calls in sick, and answers in seconds. FYNZ AI agents work across every pillar — this is why owners pick FYNZ over a booking-only tool.
            </p>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {AI_TEAM.map((agent, idx) => (
              <Link
                key={idx}
                href={agent.link}
                className="group border border-white/10 shadow-none bg-navy-900 text-white hover:border-copper/40 p-6 rounded-[var(--r-lg)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 min-h-[250px]"
              >
                <div>
                  <AiAgentVisual name={agent.name} />
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-[10px] text-green border border-green/30 px-2 py-0.5 rounded uppercase font-semibold">ON DUTY</span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-white group-hover:text-copper transition-colors duration-300 mb-1">{agent.name}</h4>
                  <span className="font-mono text-xs text-slate-400 tracking-wider uppercase block mb-3">{agent.role}</span>
                  <p className="text-slate-400 text-sm leading-relaxed">{agent.desc}</p>
                </div>
                <span className="inline-flex items-center gap-1 font-mono text-xs tracking-wider text-copper uppercase mt-6 group-hover:translate-x-1 transition-transform">
                  Explore Agent →
                </span>
              </Link>
            ))}
          </StaggerGroup>
          <div className="text-center">
            <Button variant="outline" render={<Link href="/ai" />}>
              See all AI agents →
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Channels */}
      <section className="sec py-24 bg-white dark:bg-navy-900 text-slate-900 dark:text-white border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">Booking channels</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-4">
              Meet customers <span className="text-copper">wherever</span> they are
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              One availability, published everywhere. Every channel books into the same calendar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHANNELS.map((ch, idx) => (
              <div key={idx} className="bg-navy-800/60 text-white border border-white/10 shadow-none p-5 rounded-lg">
                <ChannelVisual title={ch.title} />
                <b className="font-display font-bold text-base text-white block mb-2">{ch.title}</b>
                <p className="text-slate-400 text-sm leading-relaxed">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who's It For (Industries) */}
      <section id="industries" className="sec py-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">Who's it for</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-4">
              Built for <span className="text-copper">your</span> business
            </h2>
            <p className="text-muted">
              Pre-configured services, pipelines, and automations for the way your industry actually works.
            </p>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {INDUSTRIES.map((ind, idx) => (
              <Link
                key={idx}
                href={ind.link}
                className="group border border-white/10 shadow-none bg-navy-900 text-white hover:border-copper/40 p-5 rounded-lg flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5"
              >
                <div>
                  <IndustryVisual title={ind.title} />
                  <b className="font-display font-bold text-base text-white group-hover:text-copper transition-colors duration-300 block mb-1">{ind.title}</b>
                  <p className="text-slate-400 text-sm">{ind.desc}</p>
                </div>
                <span className="font-mono text-xs tracking-wider text-copper uppercase mt-4 block group-hover:translate-x-1 transition-transform">
                  Explore →
                </span>
              </Link>
            ))}
          </StaggerGroup>
          <Link href="/industries" className="font-mono text-xs tracking-wider text-copper font-bold uppercase hover:underline">
            See every industry →
          </Link>
        </div>
      </section>

      {/* Stats Band */}
      <section className="py-12 bg-white dark:bg-navy-900 text-slate-900 dark:text-white border-b border-line-soft text-center select-none">
        <div className="wrap max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-display text-3xl md:text-4xl font-extrabold text-copper block mb-1">{stat.num}</span>
              <span className="font-mono text-[9px] tracking-widest dark:text-slate-300 text-slate-600  uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="sec py-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">Owners on FYNZ</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Less juggling. More <span className="text-copper">business</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-200 shadow-sm dark:border-white/5 dark:shadow-none p-6 rounded-[var(--r-md)] flex flex-col justify-between">
                <div>
                  <span className="text-copper text-xs block mb-4">{t.stars}</span>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 italic">{t.quote}</p>
                </div>
                <div className="flex items-center gap-3 border-t border-slate-100 dark:border-white/5 pt-4 mt-auto">
                  <span className="w-8 h-8 rounded-full bg-copper/10 text-copper font-bold text-xs flex items-center justify-center shrink-0">
                    {t.author.substring(0, 2)}
                  </span>
                  <div>
                    <b className="font-display font-bold text-xs block text-slate-900 dark:text-white">{t.author}</b>
                    <small className="font-mono text-[8px] text-slate-500 dark:text-slate-400 block uppercase mt-0.5">{t.biz}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="final py-24 relative overflow-hidden text-center bg-radial-[at_bottom_center] from-copper/10 via-transparent to-transparent">
        <div className="wrap max-w-4xl mx-auto px-6 relative z-10">
          <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">Start today</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
            Your business, <span className="text-copper">handled</span>.
          </h2>
          <p className="text-muted text-lg mb-4 max-w-xl mx-auto">
            Start your 14-day trial — our team sets everything up for you within 48 hours.
          </p>
          <p className="font-mono text-[11px] tracking-wide text-copper uppercase mb-8">
            Real humans set you up and run your campaigns — included in every paid plan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="/pricing" />}>
              Start 14-day trial
            </Button>
            <Button size="lg" variant="outline" render={<Link href="#demo" />}>
              Book a demo
            </Button>
          </div>
        </div>
      </section>
    </div>
    </CinematicProvider>
  );
}
