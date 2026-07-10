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

export function LiveQueueWidget() {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const [scanned, setScanned] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [queue, setQueue] = useState([
    { id: "1", pos: "#1", who: "Deon", eta: "CUTTING", status: "cutting" },
    { id: "2", pos: "#2", who: "Alex", eta: "~15 MIN", status: "waiting" },
  ]);

  useGSAP(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      }
    });

    // Step 1: Scan turns on
    tl.current.add(() => setScanned(true), "+=0.7");

    // Step 2: Add walk-in and show ticket
    tl.current.add(() => {
      setQueue((prev) => [
        ...prev,
        { id: "3", pos: "#3", who: "You (walk-in)", eta: "~40 MIN", status: "me" }
      ]);
      setShowTicket(true);
    }, "+=1.0");

    // Step 3: Shift queue
    tl.current.add(() => {
      setQueue([
        { id: "1", pos: "#1", who: "Deon", eta: "DONE ✓", status: "done" },
        { id: "2", pos: "#1", who: "Alex", eta: "CUTTING", status: "cutting" },
        { id: "3", pos: "#2", who: "You (walk-in)", eta: "~20 MIN", status: "me" }
      ]);
    }, "+=2.2");

  }, { scope: container });

  const replay = () => {
    setScanned(false);
    setShowTicket(false);
    setQueue([
      { id: "1", pos: "#1", who: "Deon", eta: "CUTTING", status: "cutting" },
      { id: "2", pos: "#2", who: "Alex", eta: "~15 MIN", status: "waiting" },
    ]);
    tl.current?.restart();
  };

  return (
    <Card ref={container} className="bg-navy-900 text-white border-white/10 rounded-[var(--r-lg)] overflow-hidden shadow-md flex flex-col">
      <div className="px-5 py-4 border-b border-white/10 flex justify-between items-center">
        <b className="font-display text-[0.9rem] font-bold text-white">WALK-IN QUEUE — SATURDAY</b>
        <span className="font-mono text-[8.5px] tracking-[0.14em] text-green flex items-center gap-[7px]">
          <span className="w-[7px] h-[7px] rounded-full bg-green shadow-[0_0_8px_var(--green)]"></span>
          LIVE
        </span>
      </div>
      
      <div className={cn("p-5 border-b border-white/10 flex gap-4 items-center transition-colors duration-500", scanned ? "bg-copper-tint border-copper/30" : "")}>
         <div className="w-12 h-12 bg-navy-900 rounded flex items-center justify-center font-mono text-[10px] text-black shrink-0">QR</div>
         <div>
           <b className="font-display text-[0.85rem] font-bold block text-white">QR AT THE DOOR</b>
           <span className="text-[0.85rem] text-slate-300 block leading-tight mt-0.5">Walk-in scans to join the queue</span>
         </div>
      </div>
      
      <div className="flex flex-col">
        {queue.map((q) => (
          <div key={q.id} className={cn("px-5 py-4 flex items-center gap-4 border-b border-white/10 transition-all duration-500",
            q.status === "cutting" ? "bg-white/[0.04]" :
            q.status === "done" ? "opacity-50" : 
            q.status === "me" ? "bg-copper-tint/30" : ""
          )}>
            <span className={cn("font-mono text-[10px] tracking-widest", q.status === "cutting" ? "text-copper font-bold" : "text-slate-400")}>{q.pos}</span>
            <span className={cn("font-display font-medium flex-1 text-[0.9rem]", q.status === "me" ? "text-white" : "text-slate-300")}>{q.who}</span>
            <span className={cn("font-mono text-[9px] tracking-widest text-right", q.status === "cutting" ? "text-copper font-bold" : q.status === "done" ? "text-slate-300" : "text-white font-semibold")}>{q.eta}</span>
          </div>
        ))}
      </div>
      
      {showTicket && (
        <div className="p-5 flex justify-center bg-navy-800 border-b border-white/10 animate-in fade-in slide-in-from-top-2 duration-500">
           <span className="bg-copper/10 border border-copper/30 text-copper font-mono text-[8px] tracking-[0.1em] px-3 py-2 rounded-full text-center">
             YOU'RE #3 · ABOUT 40 MIN — WE'LL TEXT WHEN YOU'RE UP ✓
           </span>
        </div>
      )}
      
      <button onClick={replay} className="w-full py-3 mt-auto font-mono text-[9.5px] tracking-[0.16em] text-slate-400 hover:text-copper hover:bg-white/[0.04] transition-colors">
        ↺ REPLAY THE QUEUE
      </button>
    </Card>
  );
}
