"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/lib/social/content";

/** Accessible accordion with animated open and close. */
export function Faq({ items }: { items: FaqItem[] }) {
  const uid = useId();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-navy-deep/12 border-y border-navy-deep/12">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${uid}-panel-${i}`;
        const btnId = `${uid}-btn-${i}`;
        return (
          <div key={item.question}>
            <h3 className="m-0">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left text-[19px] md:text-[22px] font-display leading-snug text-navy-deep focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-copper/40 rounded"
              >
                <span className="transition-colors duration-300 group-hover:text-navy-mid">{item.question}</span>
                <span
                  aria-hidden="true"
                  className={`relative flex size-9 shrink-0 items-center justify-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "bg-copper rotate-45" : "bg-navy-deep group-hover:bg-navy-mid"}`}
                >
                  <span className={`absolute h-[2px] w-4 rounded ${isOpen ? "bg-navy-deep" : "bg-warm-white"}`} />
                  <span className={`absolute h-4 w-[2px] rounded ${isOpen ? "bg-navy-deep" : "bg-warm-white"}`} />
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={btnId} className="acc-panel" data-open={isOpen}>
              <div>
                <p className="pb-7 pr-12 text-[18px] leading-relaxed text-navy-deep/80 max-w-[640px]">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
