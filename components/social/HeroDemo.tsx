"use client";

import { useEffect, useState } from "react";
import { PhotoTile } from "./PhotoTile";

/**
 * The hero's living demo: a text thread receives two photos, Fynz replies,
 * the finished post assembles beside it, the owner approves, it schedules,
 * and the loop moves to the next example business.
 */
type Scene = {
  label: string;
  photos: [number, number];
  caption: string;
  when: string;
};

const SCENES: Scene[] = [
  { label: "Kitchen remodel", photos: [0, 3], caption: "Nine days, one kitchen. Before and after.", when: "Tue 9:00" },
  { label: "Lunch service", photos: [1, 5], caption: "Back on the board today. Come hungry.", when: "Thu 11:30" },
  { label: "Salon chair", photos: [4, 2], caption: "Fresh cut, Saturday slots still open.", when: "Fri 4:00" },
  { label: "New listing", photos: [2, 0], caption: "Just listed. Open house Sunday 1 to 3.", when: "Sat 8:00" },
];

// Phase timings in ms from the start of a scene.
const STEPS = [0, 900, 1700, 2600, 3300, 4700, 5600, 7400];
const SCENE_MS = 8300;

export function HeroDemo() {
  const [scene, setScene] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = window.setTimeout(() => setPhase(6), 0);
      return () => clearTimeout(t);
    }
    let timers: number[] = [];
    let sceneTimer = 0;
    const run = () => {
      setPhase(0);
      timers = STEPS.map((ms, i) => window.setTimeout(() => setPhase(i), ms));
      sceneTimer = window.setTimeout(() => {
        setScene((s) => (s + 1) % SCENES.length);
        run();
      }, SCENE_MS);
    };
    run();
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(sceneTimer);
    };
  }, []);

  const s = SCENES[scene];
  const typed = phase >= 5 ? s.caption : phase === 4 ? s.caption.slice(0, Math.ceil(s.caption.length * 0.45)) : "";
  const out = phase >= 7;

  return (
    <div
      className="relative w-full max-w-[600px] mx-auto"
      role="img"
      aria-label="Example: a team texts two photos to their Fynz number, Fynz replies, and the finished post appears beside the thread ready to approve and schedule."
    >
      {/* Scene label */}
      <div className="flex items-center gap-3 mb-4 text-[14px] uppercase tracking-[0.18em] text-copper-light">
        <span className="size-2 rounded-full bg-copper-light" />
        <span key={scene} className="demo-in">{s.label}</span>
        <span className="ml-auto text-warm-white/40 normal-case tracking-normal">Example</span>
      </div>

      <div
        className={`grid grid-cols-[minmax(0,0.9fr)_auto_minmax(0,1fr)] items-center gap-3 sm:gap-5 transition-opacity duration-500 ${out ? "opacity-0" : "opacity-100"}`}
      >
        {/* Phone */}
        <div className="demo-float rounded-[26px] bg-navy-ink p-2 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] border border-warm-white/10">
          <div className="rounded-[20px] bg-warm-white text-navy-deep overflow-hidden aspect-[9/16.5] flex flex-col">
            <div className="bg-navy-mid text-warm-white px-3 py-2.5 text-[12px] sm:text-[13px] font-display flex items-center gap-2">
              <span className="size-5 rounded-full bg-copper" />
              Fynz number
            </div>
            <div className="flex-1 p-2.5 sm:p-3 flex flex-col gap-2 justify-end">
              {phase >= 0 && (
                <div key={`a${scene}`} className="self-end w-[78%] rounded-xl overflow-hidden demo-in">
                  <PhotoTile variant={s.photos[0]} className="w-full aspect-[4/3]" />
                </div>
              )}
              {phase >= 1 && (
                <div key={`b${scene}`} className="self-end w-[78%] rounded-xl overflow-hidden demo-in">
                  <PhotoTile variant={s.photos[1]} className="w-full aspect-[4/3]" />
                </div>
              )}
              {phase === 2 && (
                <div className="self-start rounded-xl bg-navy-mid px-3 py-2 flex gap-1 items-center demo-in">
                  <span className="demo-dot size-1.5 rounded-full bg-warm-white" />
                  <span className="demo-dot size-1.5 rounded-full bg-warm-white" />
                  <span className="demo-dot size-1.5 rounded-full bg-warm-white" />
                </div>
              )}
              {phase >= 3 && (
                <div key={`r${scene}`} className="self-start rounded-xl bg-navy-mid text-warm-white px-3 py-2 text-[12px] sm:text-[13px] leading-snug demo-in">
                  Got both. Post is on its way for approval.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="flex flex-col items-center gap-2 w-6 sm:w-10">
          <div className={`h-0.5 w-full bg-copper ${phase >= 3 ? "demo-line" : "opacity-0"}`} />
          <svg viewBox="0 0 24 24" className={`size-5 text-copper transition-opacity duration-300 ${phase >= 3 ? "opacity-100" : "opacity-0"}`} aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Post */}
        <div className={`relative rounded-2xl bg-white text-navy-deep overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] transition-all duration-700 ${phase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="flex items-center gap-2 px-3 py-2.5">
            <span className="size-6 rounded-full bg-navy-deep" />
            <div className="flex-1">
              <div className="h-2 w-20 rounded bg-navy-deep/70" />
              <div className="h-1.5 w-12 rounded bg-navy-deep/25 mt-1" />
            </div>
          </div>
          <div className="relative aspect-square bg-navy-deep/5">
            {phase >= 3 && (
              <div key={`p${scene}`} className="absolute inset-0 demo-in">
                <PhotoTile variant={s.photos[0]} className="w-full h-full" />
              </div>
            )}
          </div>
          <div className="px-3 py-3 min-h-[74px]">
            <p className={`text-[12px] sm:text-[13px] leading-snug ${phase === 4 ? "demo-caret" : ""}`}>{typed}</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="size-3 rounded-full bg-copper" />
              <span className="size-3 rounded-full bg-copper" />
              <span className="size-3 rounded-full bg-copper" />
            </div>
          </div>

          {/* Approve overlay */}
          {phase === 5 && (
            <div className="absolute inset-x-3 bottom-3 demo-in">
              <div className="demo-pulse rounded-lg bg-copper text-navy-deep text-center text-[13px] font-display py-2">Approve</div>
            </div>
          )}
          {phase >= 6 && (
            <div className="absolute inset-x-3 bottom-3 demo-in">
              <div className="rounded-lg bg-navy-deep text-warm-white text-center text-[13px] font-display py-2 flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" className="size-4 text-copper-light" aria-hidden="true">
                  <path d="M5 12l5 5L19 7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Scheduled · {s.when}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
