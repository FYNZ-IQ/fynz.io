"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

/**
 * Page-load sequence for the hero: headline lines rise in one after another,
 * then the subhead, the button and the demo. Elements carry `data-hero-in`
 * and an optional `data-hero-order` to sequence them.
 */
export function HeroIntro({ scope }: { scope: React.RefObject<HTMLElement | null> }) {
  const done = useRef(false);

  useEffect(() => {
    if (done.current || !scope.current) return;
    done.current = true;
    const root = scope.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = gsap.utils.toArray<HTMLElement>("[data-hero-in]", root);
    if (reduced) {
      gsap.set(items, { autoAlpha: 1 });
      return;
    }

    const headline = root.querySelector<HTMLElement>("h1");
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    let split: SplitText | null = null;
    if (headline) {
      split = new SplitText(headline, { type: "lines", linesClass: "hero-line" });
      gsap.set(headline, { autoAlpha: 1 });
      tl.from(split.lines, { yPercent: 110, autoAlpha: 0, duration: 1.1, stagger: 0.1 }, 0.1);
    }

    const rest = items.filter((el) => el !== headline).sort(
      (a, b) => Number(a.dataset.heroOrder || 0) - Number(b.dataset.heroOrder || 0)
    );
    tl.to(rest, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.12 }, 0.45);
    gsap.set(rest, { y: 28 });

    return () => {
      tl.kill();
      split?.revert();
    };
  }, [scope]);

  return null;
}
