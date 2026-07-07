"use client";

import React, { useEffect, useRef, useState } from "react";

export interface CountUpProps {
  /** The final display string, e.g. "+38%", "$46M+", "4.9", "1,240", "10 min". */
  value: string;
  /** Animation length in seconds. */
  duration?: number;
  className?: string;
}

interface Parsed {
  prefix: string;
  suffix: string;
  target: number;
  decimals: number;
  hasComma: boolean;
}

// Split a stat string into a leading prefix, the numeric token, and a trailing
// suffix so we can animate only the number and keep symbols like $, %, ×, M+, ★.
function parse(value: string): Parsed | null {
  const match = value.match(/-?\d[\d,]*(\.\d+)?/);
  if (!match || match.index === undefined) return null;
  const numStr = match[0];
  return {
    prefix: value.slice(0, match.index),
    suffix: value.slice(match.index + numStr.length),
    target: parseFloat(numStr.replace(/,/g, "")),
    decimals: numStr.includes(".") ? numStr.split(".")[1].length : 0,
    hasComma: numStr.includes(","),
  };
}

function format(n: number, decimals: number, hasComma: boolean): string {
  const fixed = n.toFixed(decimals);
  if (!hasComma) return fixed;
  const [intPart, decPart] = fixed.split(".");
  const grouped = Number(intPart).toLocaleString("en-US");
  return decPart ? `${grouped}.${decPart}` : grouped;
}

export function CountUp({ value, duration = 1.6, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = parse(value);
  // SSR / no-JS renders the final value; the client resets to 0 and animates.
  const [display, setDisplay] = useState<string>(
    parsed ? format(parsed.target, parsed.decimals, parsed.hasComma) : value
  );

  useEffect(() => {
    const p = parse(value);
    const node = ref.current;
    if (!p || !node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(format(p.target, p.decimals, p.hasComma));
      return;
    }

    let raf = 0;
    let started = false;
    setDisplay(format(0, p.decimals, p.hasComma));

    const animate = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / (duration * 1000));
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        setDisplay(format(p.target * eased, p.decimals, p.hasComma));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true;
            animate();
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(node);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [value, duration]);

  if (!parsed) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </span>
  );
}
