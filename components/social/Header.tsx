"use client";

import { useEffect, useState } from "react";

/** Slim sticky header. The wordmark only; the platform link lives in the footer. */
export function Header({ formId, cta }: { formId: string; cta: string }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-navy-deep transition-[box-shadow,height] duration-500 ${scrolled ? "shadow-[0_1px_0_0_rgba(245,240,235,0.12)]" : ""}`}
      data-hero-in
      data-hero-order="0"
    >
      <div className={`social-wrap flex items-center justify-between transition-[height] duration-500 ${scrolled ? "h-14" : "h-[72px]"}`}>
        <span className="font-display text-[1.1rem] tracking-[0.1em]">
          FYNZ <span className="text-copper-light">SOCIAL</span>
        </span>
        <a href={`#${formId}`} className="btn-copper !py-2.5 !px-4 !text-[15px]">
          {cta}
        </a>
      </div>
    </header>
  );
}
