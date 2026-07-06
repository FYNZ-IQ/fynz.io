"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const transcript = [
  { id: 1, type: "ai", name: "VOICE AI · \"IVY\"", text: "Thanks for calling Beacon Plumbing — this is Ivy. How can I help tonight?" },
  { id: 2, type: "user", name: "CALLER", text: "There's water everywhere — a pipe just burst under my kitchen sink!" },
  { id: 3, type: "ai", name: "VOICE AI · \"IVY\"", text: "That sounds urgent — let's get you help fast. First: have you been able to shut off the main water valve?" },
  { id: 4, type: "user", name: "CALLER", text: "Yes, just now. But I need someone as soon as possible." },
  { id: 5, type: "ai", name: "VOICE AI · \"IVY\"", text: "Good call — that stops the damage. Our first crew slot is 7:30 tomorrow morning, and I've flagged this as urgent. Should I lock that in for 42 Birch Lane?" },
  { id: 6, type: "user", name: "CALLER", text: "Yes, please." },
  { id: 7, type: "ai", name: "VOICE AI · \"IVY\"", text: "Done — you're booked for 7:30 AM. I'm texting your confirmation now. If anything changes overnight, just reply to that text." },
  { id: 8, type: "sys", text: "✓ BOOKED 7:30 AM · MARKED URGENT · CONFIRMATION TEXTED · OWNER NOTIFIED" },
];

export function CallPlayerWidget() {
  const container = useRef<HTMLDivElement>(null);
  const progRef = useRef<HTMLSpanElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const [visibleCount, setVisibleCount] = useState(0);
  const [status, setStatus] = useState("LIVE");
  const [talking, setTalking] = useState(false);

  useGSAP(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      onStart: () => setTalking(true),
      onComplete: () => {
        setTalking(false);
        setStatus("CALL ENDED · 1:42");
      }
    });

    const totalTime = transcript.length * 1.6 + 0.6;
    
    // Animate progress bar
    tl.current.to(progRef.current, { width: "100%", duration: totalTime, ease: "linear" }, 0);

    // Reveal messages sequentially via state
    transcript.forEach((_, i) => {
      tl.current?.add(() => {
         setVisibleCount(i + 1);
         if (bodyRef.current) {
           setTimeout(() => {
             bodyRef.current!.scrollTop = bodyRef.current!.scrollHeight;
           }, 50);
         }
      }, 0.5 + i * 1.6);
    });

  }, { scope: container });

  const replay = () => {
    setVisibleCount(0);
    setStatus("LIVE");
    setTalking(true);
    gsap.set(progRef.current, { width: "0%" });
    tl.current?.restart();
  };

  return (
    <Card ref={container} className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white border-line rounded-[var(--r-lg)] overflow-hidden shadow-md max-w-[500px] w-full">
      <style>{`
        @keyframes cpw { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(3.6); } }
      `}</style>
      
      <div className="px-5 py-4 border-b border-line-soft flex items-center gap-3">
        <div className="w-[38px] h-[38px] rounded-[11px] bg-copper-tint border border-copper/30 grid place-items-center shrink-0">
          <svg className="w-[17px] h-[17px] stroke-copper" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
        </div>
        <div className="flex-1">
          <b className="font-display text-[0.9rem] font-bold text-slate-900 dark:text-white block">Beacon Plumbing — after hours</b>
          <small className="font-mono text-[8.5px] tracking-[0.12em] text-slate-500 dark:text-slate-400">INBOUND CALL · 11:02 PM</small>
        </div>
        <span className={cn("font-mono text-[8.5px] tracking-[0.14em] flex items-center gap-[7px]", status.includes("LIVE") ? "text-green" : "text-slate-500 dark:text-slate-400")}>
          {status.includes("LIVE") && <span className="w-[7px] h-[7px] rounded-full bg-green shadow-[0_0_8px_var(--green)]"></span>}
          {status}
        </span>
      </div>
      
      <div className="flex items-center gap-[3px] h-[44px] px-5 border-b border-line-soft overflow-hidden">
        {Array.from({ length: 36 }).map((_, i) => (
          <i key={i} className={cn("flex-1 h-[6px] rounded-[3px] bg-copper/55 origin-center transition-transform", talking ? "animate-[cpw_0.9s_ease-in-out_infinite]" : "scale-y-100")} style={{ animationDelay: `${(i % 5) * 0.15}s` }}></i>
        ))}
      </div>

      <div ref={bodyRef} className="p-5 min-h-[320px] max-h-[320px] overflow-y-auto flex flex-col gap-[9px] scroll-smooth">
        {transcript.slice(0, visibleCount).map((m) => (
          <div key={m.id} className={cn("max-w-[88%] animate-in fade-in slide-in-from-bottom-2 duration-300", 
            m.type === "ai" ? "self-end" : 
            m.type === "sys" ? "self-center max-w-full my-2" : "self-start"
          )}>
            {m.name && <small className={cn("font-mono text-[7.5px] tracking-[0.14em] text-slate-500 dark:text-slate-400 block mb-1", m.type === "ai" && "text-right")}>{m.name}</small>}
            <span className={cn("block px-[13px] py-[9px] text-[0.83rem] leading-relaxed",
              m.type === "ai" ? "bg-copper-tint border border-copper/30 text-slate-800 dark:text-white rounded-[12px_4px_12px_12px]" :
              m.type === "sys" ? "bg-green/10 border border-green/30 text-green font-mono text-[8.5px] tracking-[0.08em] rounded-lg text-center" :
              "bg-wash border border-line-soft text-slate-800 dark:text-white rounded-[4px_12px_12px_12px]"
            )}>
              {m.text}
            </span>
          </div>
        ))}
      </div>
      
      <div className="border-t border-line-soft">
        <div className="h-[3px] bg-wash w-full">
           <span ref={progRef} className="block h-full w-0 bg-copper"></span>
        </div>
        <button onClick={replay} className="w-full py-3 font-mono text-[9.5px] tracking-[0.16em] text-slate-500 dark:text-slate-400 hover:text-copper hover:bg-wash transition-colors">
          ↺ REPLAY THE CALL
        </button>
      </div>
    </Card>
  );
}
