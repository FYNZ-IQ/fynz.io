"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Page-level motion: smooth scrolling (Lenis), scroll-linked reveals for any
 * element marked `data-reveal` (single) or `data-reveal-stagger` (children
 * stagger in), and checklist draw-ins for `[data-draw]`. Everything is a
 * no-op under prefers-reduced-motion, and the markup is fully readable
 * without JavaScript because elements only start hidden once `has-js` is on
 * the root (see app/(social)/layout.tsx).
 */
export function MotionProvider() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    // Smooth scroll, driven by GSAP's ticker so ScrollTrigger stays in sync.
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Anchor links scroll smoothly through Lenis.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const target = document.querySelector(a.getAttribute("href") || "");
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -72, duration: 1.2 });
    };
    document.addEventListener("click", onClick);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
        const items = Array.from(group.children) as HTMLElement[];
        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "expo.out",
            stagger: 0.12,
            scrollTrigger: { trigger: group, start: "top 85%", once: true },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-draw]").forEach((group) => {
        const items = Array.from(group.children) as HTMLElement[];
        ScrollTrigger.create({
          trigger: group,
          start: "top 80%",
          once: true,
          onEnter: () => items.forEach((item, i) => setTimeout(() => item.classList.add("is-drawn"), i * 140)),
        });
      });
    });

    return () => {
      ctx.revert();
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
