"use client";

import * as React from "react";
import Link from "next/link";
import { Reveal, useParallax } from "./Reveal";
import { ROUTES } from "@/lib/site-nav";

const NEXT_STEPS = [
  { title: "See what you'll pay", body: "Simple monthly plans. No surprises.", cta: "Pricing details", href: ROUTES.pricing },
  { title: "See it in action", body: "Watch a 20-minute demo built around your business.", cta: "Book a demo", href: ROUTES.bookDemo },
];

export function FinalCta() {
  const ref = useParallax<HTMLElement>();
  return (
    <section ref={ref} className="relative isolate bg-navy-deep text-white cut-top pt-[calc(var(--cut)+64px)] md:pt-[calc(var(--cut)+80px)] pb-24 md:pb-32 overflow-hidden" aria-labelledby="cta-title">
      <div className="mesh opacity-90 px-layer" style={{ "--px": "16px" } as React.CSSProperties} aria-hidden="true">
        <i className="m2" style={{ top: "-30vw" }} />
        <i className="m3" style={{ top: "-14vw" }} />
      </div>
      <div className="wrap relative grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
        <Reveal>
          <h2 id="cta-title" className="rv-wipe font-bold tracking-[-0.03em] leading-[1.02] text-[2.4rem] sm:text-[3rem] lg:text-[3.8rem] mb-5 max-w-[14ch]">
            Stop losing jobs to missed calls.
          </h2>
          <p className="text-[1.05rem] md:text-[1.15rem] text-white/80 leading-relaxed max-w-[540px] mb-8">
            See what your customers would get, right from your own phone. Or talk to us and we&apos;ll show you how it works for your trade.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href={ROUTES.tryIt} prefetch={false} className="btn-copper">Try it on your phone</Link>
            <Link href={ROUTES.bookDemo} prefetch={false} className="btn-white">Book a demo</Link>
          </div>
        </Reveal>

        <Reveal group className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {NEXT_STEPS.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              prefetch={false}
              className="group rounded-2xl bg-white/[0.06] border border-white/12 p-6 hover:bg-white/[0.1] hover:border-copper-light/50 transition-colors"
            >
              <h3 className="font-bold tracking-tight text-[1.15rem] mb-1.5">{s.title}</h3>
              <p className="text-[0.92rem] text-white/70 mb-4">{s.body}</p>
              <span className="font-semibold text-copper-light inline-flex items-center gap-1.5">
                {s.cta} <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
