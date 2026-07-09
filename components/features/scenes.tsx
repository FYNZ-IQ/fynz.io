"use client";

/**
 * Animated hero illustrations for the feature landing pages — one looping
 * scene per feature, drawn with DOM + CSS keyframes in the navy-box style.
 * Static under prefers-reduced-motion (keyframes disabled in FeatureStyles).
 */

import React from "react";
import { cn } from "@/lib/utils";

function Stage({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative w-full min-h-[280px] rounded-[var(--r-lg)] overflow-hidden",
        "bg-navy-900 border border-white/10 shadow-lg p-6 flex flex-col justify-center",
        className
      )}
    >
      <span className="absolute top-4 left-5 font-mono text-[10px] tracking-[0.18em] uppercase text-slate-400">{label}</span>
      {children}
    </div>
  );
}

const Row = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <div className={cn("fs-rise bg-navy-800 border border-white/10 rounded-lg px-3.5 py-2.5", className)} style={{ animationDelay: `${delay}s` }}>
    {children}
  </div>
);

const Pill = ({ children, tone = "copper", className, delay = 0 }: { children: React.ReactNode; tone?: "copper" | "green"; className?: string; delay?: number }) => (
  <span
    className={cn(
      "fs-pop inline-flex items-center gap-1 font-mono text-[9px] tracking-wide uppercase px-2.5 py-1 rounded-full border",
      tone === "green" ? "bg-green/10 text-green border-green/30" : "bg-copper-tint text-copper border-copper/30",
      className
    )}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </span>
);

/* ----- GROW ----- */

const CrmScene = () => (
  <Stage label="CRM — Pipeline">
    <div className="grid grid-cols-3 gap-3 mt-6">
      {["NEW", "FOLLOW-UP", "WON"].map((col, c) => (
        <div key={col} className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5 min-h-[170px]">
          <span className={cn("font-mono text-[9px] tracking-widest", c === 2 ? "text-copper" : "text-slate-400")}>{col}</span>
          <div className="flex flex-col gap-2 mt-2">
            {Array.from({ length: 3 - c }).map((_, i) => (
              <div key={i} className="fs-rise bg-navy-800 border border-white/10 rounded-md h-9 flex items-center px-2 gap-2" style={{ animationDelay: `${c * 0.5 + i * 0.25}s` }}>
                <span className="w-1 h-5 rounded bg-copper/70" />
                <span className="h-1.5 w-3/5 rounded bg-white/15" />
              </div>
            ))}
            {c === 2 && <div className="fs-card-move bg-navy-800 border border-copper/50 rounded-md h-9 flex items-center px-2 gap-2"><span className="w-1 h-5 rounded bg-copper" /><span className="font-mono text-[9px] text-copper">WON ✓</span></div>}
          </div>
        </div>
      ))}
    </div>
  </Stage>
);

const InboxScene = () => (
  <Stage label="Unified inbox — all channels">
    <div className="flex flex-col gap-2.5 mt-6 max-w-[420px] mx-auto w-full">
      {[["IG", "Do you have Saturday openings?"], ["SMS", "Running 5 min late!"], ["FB", "Price for a group booking?"]].map(([tag, msg], i) => (
        <Row key={tag} delay={i * 0.5} className="flex items-center gap-3">
          <span className="font-mono text-[8px] px-1.5 py-0.5 rounded bg-copper-tint text-copper">{tag}</span>
          <span className="text-[12px] text-slate-200 truncate">{msg}</span>
          <span className="fs-blink ml-auto w-2 h-2 rounded-full bg-copper" style={{ animationDelay: `${i * 0.5}s` }} />
        </Row>
      ))}
      <Pill tone="green" delay={1.8} className="self-end">ALL REPLIED FROM ONE THREAD ✓</Pill>
    </div>
  </Stage>
);

const MarketingScene = () => (
  <Stage label="Email & SMS campaign">
    <div className="mt-6 max-w-[420px] mx-auto w-full">
      <Row className="text-[12px] text-slate-200">🍂 Fall special — 15% off this week only</Row>
      <div className="relative h-14 mt-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="fs-send absolute left-2 top-2 text-copper text-sm" style={{ animationDelay: `${i * 0.35}s`, top: `${4 + (i % 3) * 14}px` }}>✉</span>
        ))}
        <span className="absolute right-2 top-3 font-mono text-[10px] text-slate-400">→ 800 CLIENTS</span>
      </div>
      <div className="flex gap-2"><Pill tone="green" delay={1.4}>41% OPENED</Pill><Pill delay={1.8}>36 BOOKED ✓</Pill></div>
    </div>
  </Stage>
);

const AutomationsScene = () => (
  <Stage label="Automation — set once">
    <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
      {["NEW LEAD", "WAIT 5 MIN", "SEND TEXT", "BOOKED ✓"].map((step, i) => (
        <React.Fragment key={step}>
          <span className={cn("fs-rise font-mono text-[9.5px] tracking-wide px-3 py-2 rounded-lg border", i === 3 ? "bg-green/10 text-green border-green/30" : "bg-navy-800 text-slate-200 border-white/10")} style={{ animationDelay: `${i * 0.55}s` }}>{step}</span>
          {i < 3 && <span className="fs-flow text-copper" style={{ animationDelay: `${i * 0.55 + 0.3}s` }}>→</span>}
        </React.Fragment>
      ))}
    </div>
    <div className="fs-dash mx-auto mt-6 h-[3px] w-3/4 rounded bg-gradient-to-r from-copper/70 to-green/70" />
  </Stage>
);

const FunnelsScene = () => (
  <Stage label="Funnel — visitors to bookings">
    <div className="flex flex-col items-center gap-2 mt-6">
      {[["VISITORS", "w-4/5"], ["LEADS", "w-3/5"], ["BOOKED", "w-2/5"]].map(([t, w], i) => (
        <div key={t} className={cn("fs-rise rounded-md border border-white/10 bg-navy-800 py-2.5 text-center font-mono text-[9.5px] tracking-widest", w, i === 2 ? "text-copper border-copper/40" : "text-slate-300")} style={{ animationDelay: `${i * 0.5}s` }}>{t}</div>
      ))}
      <Pill tone="green" delay={1.7}>CONVERSION UP ↗</Pill>
    </div>
  </Stage>
);

const ReputationScene = () => (
  <Stage label="Reviews & reputation">
    <div className="flex flex-col items-center gap-3 mt-6">
      <div className="flex gap-1.5 text-copper text-2xl">{Array.from({ length: 5 }).map((_, i) => <span key={i} className="fs-star" style={{ animationDelay: `${i * 0.22}s` }}>★</span>)}</div>
      <Row delay={1.3} className="text-[12px] text-slate-200 max-w-[360px]">“Best fade in the city — booked again before I left the chair.”</Row>
      <Pill tone="green" delay={1.9}>REPLY DRAFTED & POSTED ✓</Pill>
    </div>
  </Stage>
);

/* ----- SCHEDULE ----- */

const CalendarScene = () => (
  <Stage label="Smart calendar — this week">
    <div className="grid grid-cols-5 gap-1.5 mt-7">
      {Array.from({ length: 15 }).map((_, i) => (
        <span key={i} className={cn("h-9 rounded-md border", [1, 3, 5, 8, 10, 12, 14].includes(i) ? "fs-fill bg-copper-tint border-copper/40" : "bg-white/[0.03] border-white/10")} style={{ animationDelay: `${(i % 7) * 0.3}s` }} />
      ))}
    </div>
    <div className="flex justify-between items-center mt-4">
      <span className="font-mono text-[10px] text-slate-400">UTILIZATION</span>
      <div className="flex-1 mx-3 h-2 rounded bg-white/[0.06] overflow-hidden"><span className="fs-grow-x block h-full bg-copper rounded" /></div>
      <span className="font-mono text-[11px] text-copper">86%</span>
    </div>
  </Stage>
);

const TeamScene = () => (
  <Stage label="Team — schedules synced">
    <div className="flex justify-center gap-4 mt-7">
      {["A", "K", "J"].map((m, i) => (
        <div key={m} className="fs-rise flex flex-col items-center gap-2" style={{ animationDelay: `${i * 0.4}s` }}>
          <span className="w-11 h-11 rounded-full bg-copper-tint border border-copper/40 grid place-items-center text-copper font-bold">{m}</span>
          <span className="h-1.5 w-10 rounded bg-white/15" />
          <Pill tone={i === 1 ? "green" : "copper"} delay={i * 0.4 + 0.3}>{i === 1 ? "ON SHIFT" : "BOOKED"}</Pill>
        </div>
      ))}
    </div>
  </Stage>
);

const CustomersScene = () => (
  <Stage label="Customer profile">
    <div className="max-w-[400px] mx-auto w-full mt-6">
      <Row className="flex items-center gap-3">
        <span className="w-9 h-9 rounded-full bg-copper-tint border border-copper/40 grid place-items-center text-copper font-bold">M</span>
        <div><div className="text-[13px] text-white font-semibold">Maya R.</div><div className="font-mono text-[9px] text-slate-400">CLIENT SINCE 2023 · 14 VISITS</div></div>
      </Row>
      <div className="flex gap-2 mt-3 flex-wrap">
        <Pill delay={0.5}>PREFERS THURSDAYS</Pill><Pill delay={0.8}>BALAYAGE</Pill><Pill tone="green" delay={1.1}>NEVER NO-SHOWS</Pill>
      </div>
    </div>
  </Stage>
);

const RemindersScene = () => (
  <Stage label="Reminders — no-shows drop">
    <div className="flex flex-col items-center gap-3 mt-6">
      <span className="fs-ring text-3xl">🔔</span>
      <Row delay={0.5} className="text-[12px] text-slate-200">Reminder: cut with Marco tomorrow at 2:00 — reply C to confirm</Row>
      <div className="flex gap-2"><Pill tone="green" delay={1.2}>CONFIRMED ✓</Pill><Pill delay={1.6}>DEPOSIT HELD</Pill></div>
    </div>
  </Stage>
);

/* ----- SHOP ----- */

const PaymentsScene = () => (
  <Stage label="Payments — tap to pay">
    <div className="flex flex-col items-center gap-3 mt-6">
      <div className="fs-tap w-40 h-24 rounded-xl bg-gradient-to-br from-navy-800 to-navy-750 border border-copper/40 p-3 flex flex-col justify-between">
        <span className="w-7 h-5 rounded bg-copper/70" /><span className="font-mono text-[10px] text-slate-300 tracking-widest">•••• 4242</span>
      </div>
      <span className="fs-ripple w-10 h-10 rounded-full border-2 border-green/60 grid place-items-center text-green">✓</span>
      <Pill tone="green" delay={1.2}>PAID $58.00 · INSTANT</Pill>
    </div>
  </Stage>
);

const InvoicingScene = () => (
  <Stage label="Invoice — one tap to pay">
    <div className="max-w-[380px] mx-auto w-full mt-6">
      <Row className="text-[12px]">
        <div className="flex justify-between text-slate-200"><span>Deep clean · 3 hrs</span><span className="font-mono">$180.00</span></div>
        <div className="flex justify-between text-slate-400 text-[11px] mt-1"><span>Supplies</span><span className="font-mono">$22.00</span></div>
        <div className="border-t border-white/10 mt-2 pt-2 flex justify-between text-white font-semibold"><span>Total</span><span className="font-mono">$202.00</span></div>
      </Row>
      <div className="flex justify-end mt-3"><Pill tone="green" delay={1}>PAID ✓ 4 MIN AFTER SENDING</Pill></div>
    </div>
  </Stage>
);

const MembershipsScene = () => (
  <Stage label="Memberships & courses">
    <div className="flex justify-center gap-3 mt-7 flex-wrap">
      {[["GOLD", "$79/MO"], ["SILVER", "$49/MO"]].map(([t, p], i) => (
        <div key={t} className={cn("fs-rise w-36 rounded-xl border p-3 text-center", i === 0 ? "border-copper/50 bg-copper-tint" : "border-white/10 bg-navy-800")} style={{ animationDelay: `${i * 0.4}s` }}>
          <div className={cn("font-mono text-[10px] tracking-widest", i === 0 ? "text-copper" : "text-slate-300")}>{t}</div>
          <div className="text-white font-bold mt-1">{p}</div>
        </div>
      ))}
      <Pill tone="green" delay={1.2} className="w-full justify-center">RECURRING REVENUE ↗ RENEWED AUTOMATICALLY</Pill>
    </div>
  </Stage>
);

/* ----- OPS ----- */

const ReportingScene = () => (
  <Stage label="Reporting — this month">
    <div className="flex items-end justify-center gap-2.5 h-[150px] mt-7">
      {[45, 62, 50, 78, 90, 100].map((v, i) => (
        <span key={i} className={cn("fs-bar w-9 rounded-t", i === 5 ? "bg-copper" : "bg-white/20")} style={{ height: `${v}%`, animationDelay: `${i * 0.18}s` }} />
      ))}
    </div>
    <div className="text-center mt-3"><Pill tone="green">REVENUE ↗ BEST MONTH YET</Pill></div>
  </Stage>
);

const AccountingScene = () => (
  <Stage label="Accounting — auto-recorded">
    <div className="max-w-[400px] mx-auto w-full mt-6 flex flex-col gap-2">
      {[["Booking · Sarah", "+ $35.00"], ["Store order #214", "+ $58.00"], ["Supplies", "– $22.40"]].map(([t, v], i) => (
        <Row key={t} delay={i * 0.45} className="flex justify-between text-[12px]">
          <span className="text-slate-200">{t}</span>
          <span className={cn("font-mono", v.startsWith("+") ? "text-green" : "text-slate-400")}>{v}</span>
        </Row>
      ))}
      <Pill tone="green" delay={1.6} className="self-center">BOOKS BALANCED — NO SPREADSHEET</Pill>
    </div>
  </Stage>
);

const TaxScene = () => (
  <Stage label="Tax tools — set aside as you earn">
    <div className="flex flex-col items-center gap-4 mt-7">
      <div className="w-3/4 h-3 rounded bg-white/[0.06] overflow-hidden"><span className="fs-grow-x block h-full bg-gradient-to-r from-copper to-green rounded" /></div>
      <div className="flex gap-6 font-mono text-[10px] text-slate-400"><span>EARNED <b className="text-white">$8,400</b></span><span>SET ASIDE <b className="text-copper">$1,260</b></span></div>
      <Pill tone="green" delay={1.3}>TAX SEASON: ALREADY COVERED ✓</Pill>
    </div>
  </Stage>
);

/* ----- FYNZ AI ----- */

const ConversationScene = () => (
  <Stage label="Conversation AI — every message answered">
    <div className="flex flex-col gap-2.5 mt-6 max-w-[400px] mx-auto w-full">
      <Row className="self-start max-w-[80%] text-[12px] text-slate-200">Do you take walk-ins today?</Row>
      <div className="fs-rise self-end max-w-[85%] rounded-lg rounded-br-sm bg-copper text-white px-3.5 py-2.5 text-[12px]" style={{ animationDelay: "0.7s" }}>
        We do! 3:30 is open — want me to hold it? <span className="fs-dots3 inline-flex gap-[3px] ml-1"><i className="w-[3px] h-[3px] rounded-full bg-white/80" /><i className="w-[3px] h-[3px] rounded-full bg-white/80" /><i className="w-[3px] h-[3px] rounded-full bg-white/80" /></span>
      </div>
      <Pill tone="green" delay={1.6} className="self-center">BOOKED — REPLIED IN 4 SECONDS</Pill>
    </div>
  </Stage>
);

const ReviewsAiScene = () => (
  <Stage label="Reviews AI — asks & responds">
    <div className="flex flex-col items-center gap-3 mt-6">
      <div className="flex gap-1.5 text-copper text-2xl">{Array.from({ length: 5 }).map((_, i) => <span key={i} className="fs-star" style={{ animationDelay: `${i * 0.22}s` }}>★</span>)}</div>
      <Row delay={1.2} className="text-[12px] text-slate-200 max-w-[380px]">Thank you, Maya! So glad the balayage felt right — see you in six weeks 🧡</Row>
      <Pill tone="green" delay={1.9}>ON-BRAND REPLY · POSTED FOR YOU ✓</Pill>
    </div>
  </Stage>
);

const ContentAiScene = () => (
  <Stage label="Content AI — writes in your voice">
    <div className="max-w-[380px] mx-auto w-full mt-6">
      <span className="font-mono text-[10px] text-copper tracking-widest">DRAFTING WEEKLY POST…</span>
      <div className="flex flex-col gap-2.5 mt-3">
        {[95, 100, 70].map((w, i) => <span key={i} className="fs-type h-2.5 rounded bg-navy-750 block origin-left" style={{ width: `${w}%`, animationDelay: `${i * 0.5}s` }} />)}
      </div>
      <div className="flex gap-2 mt-4"><Pill delay={1.7}>IG + FB + GOOGLE</Pill><Pill tone="green" delay={2}>SCHEDULED ✓</Pill></div>
    </div>
  </Stage>
);

const VoiceAiScene = () => (
  <Stage label="Voice AI — answers every call">
    <div className="flex items-center justify-center gap-1.5 mt-8">
      <span className="w-10 h-10 rounded-full bg-copper-tint border border-copper/40 grid place-items-center text-copper mr-3">✆</span>
      {Array.from({ length: 11 }).map((_, i) => <span key={i} className="fs-wave w-[5px] rounded-full bg-copper" style={{ animationDelay: `${i * 0.08}s`, height: `${12 + (i % 4) * 10}px` }} />)}
      <Pill tone="green" className="ml-4">ANSWERED · BOOKED ✓</Pill>
    </div>
  </Stage>
);

export const FEATURE_SCENES: Record<string, React.ReactNode> = {
  crm: <CrmScene />,
  inbox: <InboxScene />,
  marketing: <MarketingScene />,
  automations: <AutomationsScene />,
  funnels: <FunnelsScene />,
  reputation: <ReputationScene />,
  calendar: <CalendarScene />,
  team: <TeamScene />,
  customers: <CustomersScene />,
  reminders: <RemindersScene />,
  payments: <PaymentsScene />,
  invoicing: <InvoicingScene />,
  memberships: <MembershipsScene />,
  reporting: <ReportingScene />,
  accounting: <AccountingScene />,
  tax: <TaxScene />,
  conversation: <ConversationScene />,
  reviews: <ReviewsAiScene />,
  content: <ContentAiScene />,
  voice: <VoiceAiScene />,
};

export function FeatureScene({ slug }: { slug: string }) {
  return <>{FEATURE_SCENES[slug] ?? null}</>;
}

export function FeatureStyles() {
  return (
    <style>{`
      .fs-rise{animation:fsRise .7s ease-out both}
      @keyframes fsRise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
      .fs-pop{animation:fsPop .5s ease-out both}
      @keyframes fsPop{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:scale(1)}}
      .fs-blink{animation:fsBlink 1.6s ease-in-out infinite}
      @keyframes fsBlink{0%,100%{opacity:.25}50%{opacity:1}}
      .fs-star{display:inline-block;animation:fsStar 3s ease-in-out infinite}
      @keyframes fsStar{0%,8%{opacity:.15;transform:scale(.5)}20%,88%{opacity:1;transform:scale(1)}100%{opacity:.15}}
      .fs-send{animation:fsSend 2.6s ease-in-out infinite}
      @keyframes fsSend{0%{opacity:0;transform:translateX(0)}15%{opacity:1}70%{opacity:1;transform:translateX(300px)}100%{opacity:0;transform:translateX(340px)}}
      .fs-flow{animation:fsBlink 1.4s ease-in-out infinite}
      .fs-dash{background-size:200% 100%;animation:fsDash 2.2s linear infinite}
      @keyframes fsDash{from{background-position:100% 0}to{background-position:-100% 0}}
      .fs-fill{animation:fsFillIn 2.8s ease-in-out infinite}
      @keyframes fsFillIn{0%,10%{opacity:.15}30%,85%{opacity:1}100%{opacity:.15}}
      .fs-grow-x{transform-origin:left;animation:fsGrowX 3s ease-in-out infinite}
      @keyframes fsGrowX{0%{transform:scaleX(0)}55%,90%{transform:scaleX(.86)}100%{transform:scaleX(.86)}}
      .fs-bar{transform-origin:bottom;animation:fsBar 3.2s ease-in-out infinite}
      @keyframes fsBar{0%{transform:scaleY(0)}40%,90%{transform:scaleY(1)}100%{transform:scaleY(0)}}
      .fs-ring{display:inline-block;animation:fsRing 2.4s ease-in-out infinite;transform-origin:top center}
      @keyframes fsRing{0%,55%,100%{transform:rotate(0)}62%{transform:rotate(14deg)}70%{transform:rotate(-12deg)}78%{transform:rotate(8deg)}86%{transform:rotate(-5deg)}}
      .fs-tap{animation:fsTap 2.6s ease-in-out infinite}
      @keyframes fsTap{0%,100%{transform:translateY(0)}45%{transform:translateY(6px) scale(.985)}}
      .fs-ripple{animation:fsRipple 2.6s ease-out infinite}
      @keyframes fsRipple{0%,40%{box-shadow:0 0 0 0 rgba(127,216,166,.4)}75%{box-shadow:0 0 0 16px rgba(127,216,166,0)}100%{box-shadow:0 0 0 0 rgba(127,216,166,0)}}
      .fs-wave{animation:fsWave 1.1s ease-in-out infinite}
      @keyframes fsWave{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}
      .fs-type{transform:scaleX(0);animation:fsType 3.4s ease-in-out infinite}
      @keyframes fsType{0%{transform:scaleX(0)}40%,88%{transform:scaleX(1)}100%{transform:scaleX(1);opacity:.4}}
      .fs-dots3 i{animation:fsDot 1.2s ease-in-out infinite}
      .fs-dots3 i:nth-child(2){animation-delay:.15s}.fs-dots3 i:nth-child(3){animation-delay:.3s}
      @keyframes fsDot{0%,60%,100%{opacity:.35}30%{opacity:1}}
      .fs-card-move{animation:fsCardIn 3.4s ease-in-out infinite}
      @keyframes fsCardIn{0%,25%{opacity:0;transform:translateX(-30px)}45%,90%{opacity:1;transform:none}100%{opacity:0}}
      @media (prefers-reduced-motion: reduce){
        [class^="fs-"],[class*=" fs-"]{animation:none !important;opacity:1 !important;transform:none !important}
      }
    `}</style>
  );
}
