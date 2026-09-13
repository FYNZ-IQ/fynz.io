"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** Counts from 0 to `value` when scrolled into view. Renders the final value without JS. */
export function CountUp({ value, prefix = "", suffix = "", className = "" }: { value: number; prefix?: string; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const obj = { n: 0 };
    const tween = gsap.to(obj, {
      n: value,
      duration: 1.6,
      ease: "expo.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
      onUpdate: () => {
        el.textContent = `${prefix}${Math.round(obj.n).toLocaleString("en-US")}${suffix}`;
      },
    });
    return () => {
      tween.kill();
    };
  }, [value, prefix, suffix]);
  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefix}
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
