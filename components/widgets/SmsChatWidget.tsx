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

const smsSequence = [
  { id: 1, type: "sys-miss", text: "✕ MISSED CALL — 11:12 AM · MID-FADE" },
  { id: 2, type: "ai", text: "Sorry we missed you at Kings Cut! Grab a time here: fynz.io/kings 💈", meta: "AUTO TEXT-BACK · 11:12 AM" },
  { id: 3, type: "user", text: "You got anything with Marco today?", meta: "CALLER · 11:13 AM" },
  { id: 4, type: "ai", text: "Marco's got 2:40 or 5:15 this afternoon — want me to lock one in?", meta: "CONVERSATION AI · 11:13 AM" },
  { id: 5, type: "user", text: "2:40 works 👍", meta: "CALLER · 11:14 AM" },
  { id: 6, type: "sys", text: "✓ BOOKED — MARCO 2:40 PM · CONFIRMED 11:15 AM" }
];

export function SmsChatWidget() {
  const container = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const [messages, setMessages] = useState<typeof smsSequence>([]);
  const [isTyping, setIsTyping] = useState(false);

  useGSAP(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      }
    });

    let currentTime = 0.4;

    smsSequence.forEach((msg) => {
      const aiOrSys = msg.type === "ai" || msg.type === "sys";
      
      if (aiOrSys) {
        tl.current?.add(() => setIsTyping(true), currentTime);
        currentTime += 1.0;
        tl.current?.add(() => setIsTyping(false), currentTime);
      }
      
      tl.current?.add(() => {
        setMessages((prev) => [...prev, msg]);
        if (bodyRef.current) {
          setTimeout(() => {
            bodyRef.current!.scrollTop = bodyRef.current!.scrollHeight;
          }, 50);
        }
      }, currentTime);
      
      currentTime += 1.3;
    });

  }, { scope: container });

  const replay = () => {
    setMessages([]);
    setIsTyping(false);
    tl.current?.restart();
  };

  return (
    <Card ref={container} className="bg-navy-900 text-white border-white/10 rounded-[var(--r-lg)] overflow-hidden shadow-md">
      <div className="px-5 py-4 border-b border-white/10 flex justify-between items-center">
        <b className="font-display text-[0.9rem] font-bold text-white">KINGS CUT — SMS</b>
        <span className="font-mono text-[8.5px] tracking-[0.14em] text-green flex items-center gap-[7px]">
          <span className="w-[7px] h-[7px] rounded-full bg-green shadow-[0_0_8px_var(--green)]"></span>
          LIVE
        </span>
      </div>
      <div ref={bodyRef} className="p-5 min-h-[360px] max-h-[360px] overflow-y-auto flex flex-col gap-[9px] scroll-smooth">
         {messages.map((m) => (
           <div key={m.id} className={cn("max-w-[88%] animate-in fade-in slide-in-from-bottom-2 duration-300", 
             m.type === "ai" ? "self-end" : 
             m.type.startsWith("sys") ? "self-center max-w-full my-2" : "self-start"
           )}>
             <span className={cn("block px-3.5 py-2.5 text-[0.88rem] leading-relaxed",
               m.type === "ai" ? "bg-copper-tint border border-copper/30 text-white rounded-[14px_4px_14px_14px]" :
               m.type === "sys" ? "bg-green/10 border border-green/30 text-green font-mono text-[8px] tracking-[0.08em] rounded-lg text-center uppercase" :
               m.type === "sys-miss" ? "bg-white/[0.04]/50 border border-white/10 text-slate-300 font-mono text-[8px] tracking-[0.08em] rounded-lg text-center uppercase" :
               "bg-white/[0.04] border border-white/10 text-slate-200 rounded-[4px_14px_14px_14px]"
             )}>
               {m.text}
             </span>
             {m.meta && (
               <small className={cn("font-mono text-[7.5px] tracking-[0.14em] text-slate-400 block mt-1.5", m.type === "ai" && "text-right")}>
                 {m.meta}
               </small>
             )}
           </div>
         ))}
         {isTyping && (
           <div className="self-end bg-copper-tint border border-copper/30 py-3 px-3.5 rounded-[14px_4px_14px_14px] flex items-center gap-1 animate-in fade-in slide-in-from-bottom-2 duration-300">
             <span className="w-[5px] h-[5px] rounded-full bg-copper animate-bounce [animation-delay:-0.3s]"></span>
             <span className="w-[5px] h-[5px] rounded-full bg-copper animate-bounce [animation-delay:-0.15s]"></span>
             <span className="w-[5px] h-[5px] rounded-full bg-copper animate-bounce"></span>
           </div>
         )}
      </div>
      <div className="border-t border-white/10">
        <button onClick={replay} className="w-full py-3 font-mono text-[9.5px] tracking-[0.16em] text-slate-400 hover:text-copper hover:bg-white/[0.04] transition-colors">
          ↺ REPLAY THE SAVE
        </button>
      </div>
    </Card>
  );
}
