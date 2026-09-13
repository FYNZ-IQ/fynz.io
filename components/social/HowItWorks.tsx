"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PhotoTile } from "./PhotoTile";
import type { HowItWorksStep } from "@/lib/social/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Scrollytelling: the three steps scroll on the left while a sticky visual
 * on the right changes state with the active step. On phones the visual sits
 * above the steps and the steps simply reveal.
 */
export function HowItWorks({ heading, steps }: { heading: string; steps: HowItWorksStep[] }) {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!root.current) return;
    const items = gsap.utils.toArray<HTMLElement>("[data-step]", root.current);
    const triggers = items.map((el, i) =>
      ScrollTrigger.create({
        trigger: el,
        start: "top 55%",
        end: "bottom 55%",
        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i),
      })
    );
    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <div ref={root} className="social-wrap py-20 md:py-32">
      <h2 data-reveal className="text-[2.1rem] md:text-[3.2rem] leading-[1.05] max-w-[720px]">
        {heading}
      </h2>

      <div className="mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
        {/* Sticky visual */}
        <div className="lg:sticky lg:top-24 order-first lg:order-last" data-reveal>
          <StepVisual active={active} />
        </div>

        {/* Steps */}
        <ol className="flex flex-col">
          {steps.map((step, i) => {
            const on = i === active;
            return (
              <li
                key={step.title}
                data-step
                className={`relative border-l-2 pl-8 md:pl-10 py-8 md:py-12 transition-colors duration-500 ${on ? "border-copper" : "border-warm-white/15"}`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute -left-[13px] top-9 md:top-[54px] flex size-6 items-center justify-center rounded-full text-[12px] font-display transition-all duration-500 ${on ? "bg-copper text-navy-deep scale-110" : "bg-navy-deep text-warm-white/60 ring-2 ring-warm-white/15"}`}
                >
                  {i + 1}
                </span>
                <h3 className={`text-[1.5rem] md:text-[1.9rem] leading-tight transition-colors duration-500 ${on ? "text-warm-white" : "text-warm-white/55"}`}>
                  <span className="sr-only">Step {i + 1}: </span>
                  {step.title}
                </h3>
                <p className={`mt-4 max-w-[480px] text-[18px] md:text-[19px] leading-relaxed transition-colors duration-500 ${on ? "text-warm-white/85" : "text-warm-white/45"}`}>
                  {step.body}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

const CALENDAR = [0, 3, 1, 5, 2, 4, 0, 1, 3, 5, 4, 2, 1, 0, 5, 3, 2, 4, 1, 0];

function StepVisual({ active }: { active: number }) {
  return (
    <div className="relative aspect-[5/4] w-full max-w-[560px] mx-auto">
      {/* 1. Photos arrive */}
      <Panel show={active === 0}>
        <div className="h-full grid grid-cols-[1fr_1.2fr] gap-4 items-end">
          <div className="rounded-[22px] bg-navy-ink p-2 border border-warm-white/10">
            <div className="rounded-[16px] bg-warm-white overflow-hidden aspect-[9/15] flex flex-col">
              <div className="bg-navy-mid text-warm-white text-[12px] font-display px-3 py-2">Fynz number</div>
              <div className="flex-1 p-2 flex flex-col justify-end gap-2">
                {[0, 3, 1].map((v, i) => (
                  <div key={v} className="self-end w-[80%] rounded-lg overflow-hidden demo-in" style={{ animationDelay: `${i * 0.25}s` }}>
                    <PhotoTile variant={v} className="w-full aspect-[4/3]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ul className="flex flex-col gap-3 text-[15px] md:text-[16px] text-warm-white/80">
            {["The job you finished", "The dish you plated", "The room you set up", "The product that just landed"].map((t, i) => (
              <li key={t} className="flex items-center gap-3 rounded-xl bg-navy-mid/60 px-4 py-3 border border-warm-white/10 demo-in" style={{ animationDelay: `${0.3 + i * 0.15}s` }}>
                <span className="size-2 rounded-full bg-copper" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Panel>

      {/* 2. The month fills */}
      <Panel show={active === 1}>
        <div className="h-full rounded-[22px] bg-navy-ink border border-warm-white/10 p-4 md:p-5 flex flex-col">
          <div className="flex items-center justify-between text-[13px] uppercase tracking-[0.16em] text-copper-light">
            <span>This month</span>
            <span className="text-warm-white/50 normal-case tracking-normal">20 posts</span>
          </div>
          <div className="mt-4 grid grid-cols-5 gap-2 flex-1">
            {CALENDAR.map((v, i) => (
              <div key={i} className="rounded-lg overflow-hidden demo-in" style={{ animationDelay: `${i * 0.06}s` }}>
                {i % 5 === 2 ? (
                  <div className="h-full min-h-[38px] bg-navy-mid flex items-center justify-center">
                    <span className="text-copper-light text-[16px]">★</span>
                  </div>
                ) : i % 7 === 6 ? (
                  <div className="h-full min-h-[38px] bg-warm-white text-navy-deep text-[10px] font-display flex items-center justify-center text-center px-1">Q&amp;A</div>
                ) : (
                  <PhotoTile variant={v} className="w-full h-full min-h-[38px]" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-4 text-[13px] text-warm-white/60">
            <span className="flex items-center gap-2"><span className="size-3 rounded bg-copper-light" /> Your photos</span>
            <span className="flex items-center gap-2"><span className="text-copper-light">★</span> Reviews</span>
            <span className="flex items-center gap-2"><span className="size-3 rounded bg-warm-white" /> Seasonal, Q&amp;A</span>
          </div>
        </div>
      </Panel>

      {/* 3. Approve */}
      <Panel show={active === 2}>
        <div className="h-full rounded-[22px] bg-navy-ink border border-warm-white/10 p-4 md:p-5 flex flex-col">
          <div className="text-[13px] uppercase tracking-[0.16em] text-copper-light">Ready for your approval</div>
          <ul className="mt-4 flex flex-col gap-2.5 flex-1">
            {[
              ["Before and after, kitchen", "Tue 9:00", true],
              ["Five-star review, graphic", "Wed 12:00", true],
              ["Seasonal: fall hours", "Thu 5:00", false],
              ["Q&A: how long does it take?", "Fri 10:00", true],
            ].map(([t, w, ok], i) => (
              <li key={String(t)} className="flex items-center gap-3 rounded-xl bg-navy-mid/60 border border-warm-white/10 px-3 py-2.5 demo-in" style={{ animationDelay: `${0.15 + i * 0.15}s` }}>
                <div className="size-9 rounded-md overflow-hidden shrink-0"><PhotoTile variant={i + 1} className="w-full h-full" /></div>
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] md:text-[15px] text-warm-white truncate">{t}</p>
                  <p className="text-[12px] text-warm-white/50">{w}</p>
                </div>
                <span className={`shrink-0 rounded-md px-2 py-1 text-[12px] font-display ${ok ? "bg-copper text-navy-deep" : "bg-warm-white/10 text-warm-white/70"}`}>
                  {ok ? "Approved" : "Edit"}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-xl bg-copper text-navy-deep text-center font-display py-3 text-[15px] demo-in" style={{ animationDelay: "0.9s" }}>
            Approve the month
          </div>
        </div>
      </Panel>
    </div>
  );
}

function Panel({ show, children }: { show: boolean; children: React.ReactNode }) {
  return (
    <div
      aria-hidden={!show}
      className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
    >
      {show && children}
    </div>
  );
}
