"use client";

import * as React from "react";
import { Reveal } from "./Reveal";
import { Accordion } from "./Accordion";
import { Placeholder } from "./Placeholder";
import { FAQ } from "@/lib/home-content";

/** Render "[bracketed]" tokens as visible placeholders. */
function withPlaceholders(text: string) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return parts.map((p, i) => (p.startsWith("[") && p.endsWith("]") ? <Placeholder key={i}>{p}</Placeholder> : <React.Fragment key={i}>{p}</React.Fragment>));
}

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 scroll-mt-16" aria-labelledby="faq-title">
      <div className="wrap grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-16">
        <Reveal>
          <h2 id="faq-title" className="font-bold tracking-[-0.03em] leading-[1.08] text-[2.1rem] md:text-[3rem] text-navy-deep">
            Questions owners ask
          </h2>
        </Reveal>
        <Reveal index={1}>
          <Accordion
            items={FAQ.map((f, i) => ({
              id: `faq-${i}`,
              title: f.q,
              content: <p className="text-[1rem] text-grey leading-relaxed max-w-[60ch]">{withPlaceholders(f.a)}</p>,
            }))}
          />
        </Reveal>
      </div>
    </section>
  );
}
