"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Placeholder } from "./Placeholder";
import { ROUTES } from "@/lib/site-nav";

type Plan = {
  key: string;
  headline: string;
  name: string;
  body: string;
  cta: string;
  href: string;
  featured?: boolean;
};

// Managed is the featured (raised, tagged) card, so it sits in the middle.
const PLANS: Plan[] = [
  {
    key: "starter",
    headline: "Just the essentials.",
    name: "Starter",
    body: "Answer, follow up, and book, set up and ready to go.",
    cta: "Start now",
    href: "/onboarding?plan=launch",
  },
  {
    key: "managed",
    headline: "Run it for me.",
    name: "Managed",
    body: "Our team runs your calls, follow-ups, bookings, and reviews every day. You get the jobs and a monthly report.",
    cta: "Book a demo",
    href: ROUTES.bookDemo,
    featured: true,
  },
  {
    key: "growth",
    headline: "Set it up, I'll run it.",
    name: "Growth",
    body: "We set it up for your trade, including marketing tools to bring in more work. You run it from one simple app.",
    cta: "Start now",
    href: "/onboarding?plan=growth",
  },
];

function useTilt() {
  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--ry", `${(x * 6).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${(-y * 6).toFixed(2)}deg`);
  };
  const onLeave = (e: React.PointerEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };
  return { onPointerMove: onMove, onPointerLeave: onLeave };
}

export function Pricing() {
  const tilt = useTilt();
  return (
    <section id="pricing" className="py-20 md:py-28 scroll-mt-16" aria-labelledby="pricing-title">
      <div className="wrap">
        <Reveal className="max-w-[720px] mb-12 md:mb-16">
          <h2 id="pricing-title" className="rv-wipe font-bold tracking-[-0.03em] leading-[1.08] text-[2.1rem] md:text-[3rem] text-navy-deep mb-4">
            Choose how much we do for you.
          </h2>
          <p className="text-[1.05rem] md:text-[1.15rem] text-grey leading-relaxed">
            Every plan is set up for your trade. The difference is who runs it day to day.
          </p>
        </Reveal>

        <Reveal group className="grid md:grid-cols-3 gap-5 md:gap-4 lg:gap-6 items-stretch">
          {PLANS.map((p) => (
            <div key={p.key} className={cn("flex", p.featured && "md:-mt-4 md:-mb-4 z-10")}>
            <article
              {...tilt}
              className={cn(
                "tilt relative flex flex-col w-full rounded-2xl p-7 md:p-8 border",
                p.featured
                  ? "bg-navy-deep text-white border-navy-deep shadow-[0_30px_70px_rgba(13,33,84,0.28)]"
                  : "bg-white text-navy-deep border-line-soft shadow-[0_8px_24px_rgba(13,33,84,0.05)] hover:shadow-[0_22px_48px_rgba(13,33,84,0.12)]"
              )}
            >
              {p.featured && (
                <span className="absolute -top-3.5 left-7 text-[10.5px] font-bold tracking-[0.14em] uppercase bg-copper-core text-white rounded-full px-3 py-1.5 shadow-md">
                  Most hands-off
                </span>
              )}
              <h3 className="font-bold tracking-tight text-[1.35rem] mb-1">{p.headline}</h3>
              <p className={cn("text-[0.95rem] mb-5", p.featured ? "text-white/70" : "text-grey")}>
                {p.name} · <Placeholder>[price]</Placeholder>/month
              </p>
              <p className={cn("text-[0.98rem] leading-relaxed flex-1 mb-7", p.featured ? "text-white/85" : "text-navy-deep/85")}>{p.body}</p>
              <Link href={p.href} prefetch={false} className={cn(p.featured ? "btn-copper" : "btn-ghost", "w-full")}>
                {p.cta}
              </Link>
            </article>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-[0.9rem] text-grey">
          <p>Add-ons: AI Voice and Fynz Social. Usage charges for texts and calls are billed separately.</p>
          <Link href={ROUTES.pricing} prefetch={false} className="font-semibold text-copper hover:text-copper-light inline-flex items-center gap-1.5 group whitespace-nowrap">
            See full pricing <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
