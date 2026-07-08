"use client";

/**
 * Cinematic scroll system for the home page, adapted from the fynz_web
 * concept site: Lenis smooth scrolling, one shared rAF loop that scrubs
 * canvas "demo" graphics by scroll progress, parallax accents, and a fixed
 * progress rail. Everything registers into a module-level engine so the
 * whole page costs a single animation frame loop.
 */

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { cn } from "@/lib/utils";
import { PAINTERS, darkPalette, lightPalette, type Fonts } from "@/lib/cinematic/painters";

const clamp = (v: number, a: number, b: number) => Math.min(Math.max(v, a), b);

interface CanvasItem {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  painter: string;
  /** scrub = pinned section progress; transit = element's ride through the viewport */
  mode: "scrub" | "transit";
  /** dark = always the dark palette (canvas sits on a navy box); auto = follow theme */
  surface: "dark" | "auto";
  dpr: number;
}

interface EngineState {
  items: Set<CanvasItem>;
  parallax: Set<HTMLElement>;
  railIds: string[];
  raf: number;
  refs: number;
  lenis: Lenis | null;
  reduced: boolean;
  fonts: Fonts;
}

const engine: EngineState = {
  items: new Set(),
  parallax: new Set(),
  railIds: [],
  raf: 0,
  refs: 0,
  lenis: null,
  reduced: false,
  fonts: { display: "Sora, sans-serif", body: "sans-serif", mono: "monospace" },
};

function resolveFonts() {
  const cs = getComputedStyle(document.documentElement);
  const pick = (v: string, fb: string) => (cs.getPropertyValue(v).trim() || fb);
  engine.fonts = {
    display: pick("--font-display", '"Sora", sans-serif'),
    body: pick("--font-body", '"Instrument Sans", sans-serif'),
    mono: pick("--font-mono", '"IBM Plex Mono", monospace'),
  };
}

function sizeCanvas(it: CanvasItem) {
  it.dpr = Math.min(window.devicePixelRatio || 1, 2);
  it.canvas.width = it.canvas.clientWidth * it.dpr;
  it.canvas.height = it.canvas.clientHeight * it.dpr;
}

function progressFor(it: CanvasItem, vh: number): number | null {
  if (it.mode === "scrub") {
    const host = it.canvas.closest<HTMLElement>("[data-cine-scrub]");
    if (host) {
      const r = host.getBoundingClientRect();
      if (r.bottom < -vh * 0.5 || r.top > vh * 1.5) return null;
      if (r.height > vh * 1.2) return clamp(-r.top / (r.height - vh), 0, 1);
    }
  }
  const r = it.canvas.getBoundingClientRect();
  if (r.bottom < -vh * 0.5 || r.top > vh * 1.5) return null;
  return clamp(((vh - r.top) / (vh + r.height)) * 1.35, 0, 1);
}

function frame(t: number) {
  engine.raf = requestAnimationFrame(frame);
  if (engine.lenis) engine.lenis.raf(t);
  const vh = window.innerHeight;
  const dark = document.documentElement.classList.contains("dark");
  const themeP = dark ? darkPalette : lightPalette;

  for (const it of engine.items) {
    let p = progressFor(it, vh);
    if (p === null) continue;
    if (engine.reduced) p = 1;
    const w = it.canvas.clientWidth, h = it.canvas.clientHeight;
    if (it.canvas.width !== w * it.dpr) sizeCanvas(it);
    it.ctx.setTransform(it.dpr, 0, 0, it.dpr, 0, 0);
    it.ctx.clearRect(0, 0, w, h);
    const painter = PAINTERS[it.painter];
    const P = it.surface === "dark" ? darkPalette : themeP;
    if (painter) painter(it.ctx, w, h, p, t, P, engine.fonts, engine.reduced);
  }

  if (!engine.reduced) {
    for (const el of engine.parallax) {
      const speed = parseFloat(el.dataset.cineSpeed || "0");
      const r = el.getBoundingClientRect();
      if (r.bottom < -vh || r.top > vh * 2) continue;
      const mid = r.top + r.height / 2 - vh / 2;
      el.style.transform = `translate3d(0, ${(-mid * speed).toFixed(1)}px, 0)`;
    }
  }

  if (engine.railIds.length) {
    const mid = vh / 2;
    let active = "";
    for (const id of engine.railIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (r.top <= mid && r.bottom >= mid) active = id;
    }
    document.querySelectorAll<HTMLAnchorElement>("[data-cine-rail] a").forEach((a) => {
      a.classList.toggle("cine-on", a.getAttribute("href") === "#" + active);
    });
  }
}

function acquire() {
  engine.refs++;
  if (engine.refs > 1) return;
  engine.reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  resolveFonts();
  if (!engine.reduced) {
    engine.lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
  }
  engine.raf = requestAnimationFrame(frame);
}

function release() {
  engine.refs--;
  if (engine.refs > 0) return;
  cancelAnimationFrame(engine.raf);
  engine.lenis?.destroy();
  engine.lenis = null;
  engine.items.clear();
  engine.parallax.clear();
  engine.railIds = [];
}

/** Mount once on the page that should get the cinematic treatment. */
export function CinematicProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    acquire();
    const onResize = () => engine.items.forEach(sizeCanvas);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      release();
    };
  }, []);
  return <>{children}</>;
}

/** A scroll-scrubbed canvas graphic. Place inside a positioned container. */
export function CineCanvas({
  painter,
  mode = "transit",
  surface = "auto",
  className,
}: {
  painter: string;
  mode?: "scrub" | "transit";
  surface?: "dark" | "auto";
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const it: CanvasItem = { canvas, ctx, painter, mode, surface, dpr: 1 };
    sizeCanvas(it);
    engine.items.add(it);
    return () => {
      engine.items.delete(it);
    };
  }, [painter, mode, surface]);
  return <canvas ref={ref} className={cn("absolute inset-0 w-full h-full", className)} aria-hidden="true" />;
}

/** Film-grain vignette overlay for stages. */
export function Grain({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("absolute inset-0 pointer-events-none opacity-50", className)}
      style={{
        background:
          "radial-gradient(110% 85% at 50% 40%, transparent 50%, rgba(10,23,48,0.28) 100%)",
      }}
    />
  );
}

/** Scroll-linked parallax wrapper: drifts children vertically by speed. */
export function Parallax({
  speed = 0.1,
  className,
  children,
}: {
  speed?: number;
  className?: string;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    engine.parallax.add(el);
    return () => {
      engine.parallax.delete(el);
      el.style.transform = "";
    };
  }, []);
  return (
    <div ref={ref} data-cine-speed={speed} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}

export interface RailSection {
  id: string;
  label: string;
  color?: string;
}

/** Fixed left progress rail with section dots (desktop only). */
export function ProgressRail({ sections }: { sections: RailSection[] }) {
  useEffect(() => {
    engine.railIds = sections.map((s) => s.id);
    return () => {
      engine.railIds = [];
    };
  }, [sections]);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    if (engine.lenis) engine.lenis.scrollTo(el, { offset: -72 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      data-cine-rail
      className="fixed left-[26px] top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-[20px]"
    >
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          onClick={(e) => onClick(e, s.id)}
          className="group flex items-center gap-2.5 no-underline"
          style={{ ["--rail-c" as string]: s.color || "var(--copper)" }}
        >
          <span className="cine-dot w-[7px] h-[7px] rounded-full bg-ink/20 dark:bg-white/20 transition-all duration-300" />
          <span className="cine-lbl font-mono text-[10px] tracking-[0.14em] uppercase text-transparent transition-colors duration-300">
            {s.label}
          </span>
        </a>
      ))}
      <style>{`
        [data-cine-rail] a.cine-on .cine-dot{transform:scale(1.7);background:var(--rail-c);box-shadow:0 0 14px var(--rail-c)}
        [data-cine-rail] a.cine-on .cine-lbl{color:var(--muted-foreground,inherit);color:var(--brand-muted)}
        [data-cine-rail] a:hover .cine-lbl{color:var(--brand-muted)}
      `}</style>
    </div>
  );
}
