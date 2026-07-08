"use client";

/**
 * Small looping CSS/SVG visuals for the home page cards — one scene per
 * AI agent, booking channel, and industry. Pure CSS keyframes (no canvas),
 * theme-aware via currentColor + design tokens, and static under
 * prefers-reduced-motion.
 */

import React from "react";
import { cn } from "@/lib/utils";

function Scene({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "cine-scene relative h-[92px] mb-5 rounded-[10px] overflow-hidden",
        "border border-slate-200 dark:border-line-soft bg-white dark:bg-navy-900/60",
        "flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}

/* ============================== AI agents ============================== */

/** Voice AI — live waveform bars. */
function VoiceScene() {
  return (
    <Scene>
      <div className="flex items-center gap-[5px]">
        <span className="w-8 h-8 rounded-full bg-copper-tint border border-copper/30 grid place-items-center text-copper text-sm mr-3">✆</span>
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className="cine-wavebar w-[4px] rounded-full bg-copper"
            style={{ animationDelay: `${i * 0.09}s`, height: `${10 + (i % 4) * 8}px` }}
          />
        ))}
        <span className="ml-3 font-mono text-[10px] text-green">ANSWERED</span>
      </div>
    </Scene>
  );
}

/** Conversation AI — typing dots then a reply bubble. */
function ChatScene() {
  return (
    <Scene>
      <div className="flex flex-col gap-1.5 w-[75%]">
        <span className="self-start max-w-[70%] rounded-xl rounded-bl-sm bg-slate-100 dark:bg-navy-800 px-3 py-1.5 text-[11px] text-muted">
          Do you take walk-ins?
        </span>
        <span className="cine-reply self-end max-w-[80%] rounded-xl rounded-br-sm bg-copper text-white px-3 py-1.5 text-[11px]">
          We do! Want 3:30 today?
          <span className="cine-dots inline-flex gap-[3px] ml-1 align-middle">
            <i className="w-[3px] h-[3px] rounded-full bg-white/80" />
            <i className="w-[3px] h-[3px] rounded-full bg-white/80" />
            <i className="w-[3px] h-[3px] rounded-full bg-white/80" />
          </span>
        </span>
      </div>
    </Scene>
  );
}

/** Reviews AI — stars pop in, then the reply line. */
function ReviewsScene() {
  return (
    <Scene>
      <div className="flex flex-col items-center gap-1.5">
        <div className="flex gap-1 text-copper text-lg leading-none">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="cine-star" style={{ animationDelay: `${i * 0.18}s` }}>★</span>
          ))}
        </div>
        <span className="font-mono text-[9.5px] text-muted tracking-wide">REPLY DRAFTED · READY TO SEND ✓</span>
      </div>
    </Scene>
  );
}

/** Content AI — lines being written. */
function ContentScene() {
  return (
    <Scene>
      <div className="w-[70%] flex flex-col gap-[7px]">
        <span className="font-mono text-[9px] text-copper tracking-[0.14em]">DRAFTING POST…</span>
        {[92, 100, 64].map((wPct, i) => (
          <span
            key={i}
            className="cine-line h-[7px] rounded bg-slate-200 dark:bg-navy-750 block origin-left"
            style={{ width: `${wPct}%`, animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </div>
    </Scene>
  );
}

/* ============================ Booking channels ============================ */

function CalendarGlyph() {
  return (
    <div className="grid grid-cols-4 gap-[4px]">
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "w-[16px] h-[12px] rounded-[3px] border border-slate-200 dark:border-line-soft",
            i === 5 && "cine-blink bg-copper border-copper"
          )}
        />
      ))}
    </div>
  );
}

function InstagramGlyph() {
  return (
    <div className="relative">
      <span className="block w-9 h-9 rounded-[10px] border-2 border-copper" />
      <span className="absolute inset-0 m-auto w-4 h-4 rounded-full border-2 border-copper" />
      <span className="cine-pop absolute -top-1.5 -right-2 text-copper text-sm">♥</span>
    </div>
  );
}

function EmbedGlyph() {
  return (
    <div className="font-mono text-[15px] text-copper flex items-center gap-1.5">
      <span className="cine-slide-l">&lt;/&gt;</span>
      <span className="w-[54px] h-[10px] rounded bg-slate-200 dark:bg-navy-750 overflow-hidden relative">
        <span className="cine-fill absolute inset-y-0 left-0 bg-copper/60 w-full origin-left" />
      </span>
    </div>
  );
}

function QrGlyph() {
  return (
    <div className="relative grid grid-cols-5 gap-[3px] p-1">
      {Array.from({ length: 25 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "w-[6px] h-[6px] rounded-[1.5px]",
            [0, 1, 3, 4, 5, 9, 12, 15, 19, 20, 21, 23, 24, 7, 17].includes(i)
              ? "bg-ink/70 dark:bg-white/70"
              : "bg-transparent"
          )}
        />
      ))}
      <span className="cine-scan absolute inset-x-0 h-[2px] bg-copper/80 rounded" />
    </div>
  );
}

function WhatsappGlyph() {
  return (
    <div className="relative w-10 h-10 rounded-full bg-green/15 border border-green/40 grid place-items-center">
      <span className="text-green text-base">✆</span>
      <span className="cine-dots absolute -right-4 top-0 inline-flex gap-[3px]">
        <i className="w-[4px] h-[4px] rounded-full bg-green" />
        <i className="w-[4px] h-[4px] rounded-full bg-green" />
        <i className="w-[4px] h-[4px] rounded-full bg-green" />
      </span>
    </div>
  );
}

function MapsGlyph() {
  return (
    <div className="relative flex flex-col items-center">
      <span className="cine-drop text-copper text-2xl leading-none">📍</span>
      <span className="w-8 h-[5px] rounded-[50%] bg-ink/10 dark:bg-white/10 mt-0.5" />
    </div>
  );
}

/* ============================== Industries ============================== */

function IndustryGlyph({ emoji }: { emoji: string }) {
  return (
    <span className="cine-bob inline-grid place-items-center w-10 h-10 rounded-xl bg-copper-tint border border-copper/25 text-lg">
      {emoji}
    </span>
  );
}

/* ============================== dispatcher ============================== */

const AI_SCENES: Record<string, React.ReactNode> = {
  "Voice AI": <VoiceScene />,
  "Conversation AI": <ChatScene />,
  "Reviews AI": <ReviewsScene />,
  "Content AI": <ContentScene />,
};

const CHANNEL_GLYPHS: Record<string, React.ReactNode> = {
  "Your booking page": <CalendarGlyph />,
  Instagram: <InstagramGlyph />,
  "Website embed": <EmbedGlyph />,
  "QR code": <QrGlyph />,
  WhatsApp: <WhatsappGlyph />,
  "Book from search & maps": <MapsGlyph />,
};

const INDUSTRY_EMOJI: Record<string, string> = {
  "Salons & barbershops": "💈",
  "Clinics & dental": "🦷",
  "Fitness & gyms": "🏋️",
  Restaurants: "🍽️",
  "Retail & boutiques": "🛍️",
  "Home services": "🔧",
};

export function AiAgentVisual({ name }: { name: string }) {
  return <>{AI_SCENES[name] ?? null}</>;
}

export function ChannelVisual({ title }: { title: string }) {
  const glyph = CHANNEL_GLYPHS[title];
  if (!glyph) return null;
  return (
    <div aria-hidden="true" className="h-[58px] mb-4 flex items-center">
      {glyph}
    </div>
  );
}

export function IndustryVisual({ title }: { title: string }) {
  const emoji = INDUSTRY_EMOJI[title];
  if (!emoji) return null;
  return (
    <div aria-hidden="true" className="mb-4">
      <IndustryGlyph emoji={emoji} />
    </div>
  );
}

/** Global keyframes for the scenes — mount once per page. */
export function VisualStyles() {
  return (
    <style>{`
      .cine-wavebar{animation:cineWave 1.1s ease-in-out infinite}
      @keyframes cineWave{0%,100%{transform:scaleY(.45)}50%{transform:scaleY(1)}}
      .cine-dots i{animation:cineDot 1.2s ease-in-out infinite}
      .cine-dots i:nth-child(2){animation-delay:.15s}
      .cine-dots i:nth-child(3){animation-delay:.3s}
      @keyframes cineDot{0%,60%,100%{opacity:.35;transform:translateY(0)}30%{opacity:1;transform:translateY(-2px)}}
      .cine-reply{animation:cineRise 3.4s ease-in-out infinite}
      @keyframes cineRise{0%,18%{opacity:0;transform:translateY(6px)}32%,88%{opacity:1;transform:translateY(0)}100%{opacity:0}}
      .cine-star{display:inline-block;animation:cineStar 2.8s ease-in-out infinite}
      @keyframes cineStar{0%,10%{opacity:.15;transform:scale(.6)}22%,85%{opacity:1;transform:scale(1)}100%{opacity:.15}}
      .cine-line{animation:cineType 3s ease-in-out infinite;transform:scaleX(0)}
      @keyframes cineType{0%{transform:scaleX(0)}35%,85%{transform:scaleX(1)}100%{transform:scaleX(1);opacity:.4}}
      .cine-blink{animation:cineBlink 1.6s ease-in-out infinite}
      @keyframes cineBlink{0%,100%{opacity:.35}50%{opacity:1}}
      .cine-pop{animation:cinePop 2.2s ease-in-out infinite}
      @keyframes cinePop{0%,20%{opacity:0;transform:scale(.4)}35%,80%{opacity:1;transform:scale(1)}100%{opacity:0}}
      .cine-slide-l{display:inline-block;animation:cineNudge 2.4s ease-in-out infinite}
      @keyframes cineNudge{0%,100%{transform:translateX(0)}50%{transform:translateX(3px)}}
      .cine-fill{animation:cineFillX 2.4s ease-in-out infinite;transform:scaleX(0)}
      @keyframes cineFillX{0%{transform:scaleX(0)}55%,90%{transform:scaleX(1)}100%{transform:scaleX(1);opacity:.3}}
      .cine-scan{animation:cineScan 2s ease-in-out infinite;top:0}
      @keyframes cineScan{0%,100%{top:6%}50%{top:88%}}
      .cine-drop{display:inline-block;animation:cineDrop 2.2s ease-in-out infinite}
      @keyframes cineDrop{0%,15%{transform:translateY(-8px);opacity:0}35%,85%{transform:translateY(0);opacity:1}100%{opacity:1}}
      .cine-bob{animation:cineBob 3s ease-in-out infinite}
      @keyframes cineBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
      @media (prefers-reduced-motion: reduce){
        .cine-wavebar,.cine-dots i,.cine-reply,.cine-star,.cine-line,.cine-blink,.cine-pop,
        .cine-slide-l,.cine-fill,.cine-scan,.cine-drop,.cine-bob{animation:none !important;opacity:1;transform:none}
      }
    `}</style>
  );
}
