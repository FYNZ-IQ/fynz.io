"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Placeholder } from "./Placeholder";
import { ROUTES } from "@/lib/site-nav";

const CARDS: { tag: string; title: React.ReactNode; cta: string; href: string }[] = [
  { tag: "Latest live", title: <Placeholder className="whitespace-normal!">[Title of latest live replay]</Placeholder>, cta: "Watch the replay", href: `${ROUTES.learn}#lives` },
  {
    tag: "Next webinar",
    title: (
      <>
        <Placeholder>[Title]</Placeholder> · <Placeholder className="whitespace-normal!">[Date and time, ET]</Placeholder>
      </>
    ),
    cta: "Save my seat",
    href: `${ROUTES.learn}#webinars`,
  },
  { tag: "Guide", title: "5 ways your business loses jobs before you pick up the phone", cta: "Read the guide", href: `${ROUTES.learn}#guides` },
];

export function Learn() {
  const track = React.useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = React.useState(false);
  const drag = React.useRef({ x: 0, left: 0, moved: false });

  const scrollByCard = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const w = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  const onDown = (e: React.PointerEvent) => {
    const el = track.current;
    if (!el || e.pointerType === "touch") return; // native touch scrolling already works
    drag.current = { x: e.clientX, left: el.scrollLeft, moved: false };
    setDragging(true);
    el.setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    const el = track.current;
    if (!dragging || !el) return;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.left - dx;
  };
  const onUp = (e: React.PointerEvent) => {
    const el = track.current;
    if (!el) return;
    setDragging(false);
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
  };
  // Swallow the click that ends a drag so cards don't navigate accidentally.
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white" aria-labelledby="learn-title">
      <div className="wrap">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-[640px]">
            <h2 id="learn-title" className="font-bold tracking-[-0.03em] leading-[1.08] text-[2.1rem] md:text-[3rem] text-navy-deep mb-4">
              Learn with us, live.
            </h2>
            <p className="text-[1.05rem] md:text-[1.15rem] text-grey leading-relaxed">
              Free lives, webinars, and short guides on getting more jobs from the calls and leads you already have.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <ArrowButton dir="prev" onClick={() => scrollByCard(-1)} />
            <ArrowButton dir="next" onClick={() => scrollByCard(1)} />
          </div>
        </Reveal>

        <Reveal group>
          <div
            ref={track}
            className={cn("carousel", dragging && "dragging")}
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerCancel={onUp}
            onClickCapture={onClickCapture}
          >
            {CARDS.map((c, i) => (
              <article key={i} className="pcard p-7 flex flex-col min-h-[280px]">
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-copper mb-4">{c.tag}</span>
                <h3 className="font-bold tracking-tight text-[1.25rem] leading-snug text-navy-deep flex-1 mb-6">{c.title}</h3>
                <Link href={c.href} prefetch={false} className="btn-ghost self-start h-[44px] py-0 px-6 text-[0.92rem]" draggable={false}>
                  {c.cta}
                </Link>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ArrowButton({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous" : "Next"}
      className="w-11 h-11 rounded-full border border-line text-navy-deep hover:bg-navy-deep hover:text-white hover:border-navy-deep transition-colors flex items-center justify-center"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={dir === "prev" ? "rotate-180" : ""}>
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
