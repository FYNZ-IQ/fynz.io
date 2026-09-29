"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type AccordionEntry = {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

/**
 * Single-open accordion with animated height (grid-template-rows) and a
 * delayed content fade. Keyboard accessible (button + region). Can be
 * uncontrolled (`defaultOpen`) or controlled (`value` + `onOpenChange`).
 * `progressMs` draws a copper progress bar under the open item, used for
 * auto-advancing panels; `paused` freezes it.
 */
export function Accordion({
  items,
  defaultOpen = null,
  value,
  dark = false,
  className,
  onOpenChange,
  progressMs,
  progressKey,
  paused = false,
}: {
  items: AccordionEntry[];
  defaultOpen?: string | null;
  value?: string | null;
  dark?: boolean;
  className?: string;
  onOpenChange?: (id: string | null) => void;
  progressMs?: number;
  progressKey?: string | number;
  paused?: boolean;
}) {
  const [inner, setInner] = React.useState<string | null>(defaultOpen);
  const open = value !== undefined ? value : inner;
  const toggle = (id: string) => {
    const next = open === id ? null : id;
    if (value === undefined) setInner(next);
    onOpenChange?.(next);
  };
  return (
    <div className={cn("flex flex-col", paused && "acc-paused", className)}>
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id} className={cn("relative border-b", dark ? "border-white/10" : "border-line-soft")}>
            <h3 className="m-0">
              <button
                type="button"
                id={`${item.id}-trigger`}
                aria-expanded={isOpen}
                aria-controls={`${item.id}-panel`}
                onClick={() => toggle(item.id)}
                className={cn(
                  "w-full flex items-center justify-between gap-6 text-left py-5 font-semibold text-[1.05rem] md:text-[1.15rem] tracking-tight transition-colors",
                  dark ? "text-white hover:text-copper-light" : "text-navy-deep hover:text-copper",
                  isOpen && (dark ? "text-copper-light" : "text-copper")
                )}
              >
                <span>{item.title}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-transform duration-300",
                    dark ? "border-white/25" : "border-line",
                    isOpen && "rotate-45"
                  )}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={`${item.id}-panel`}
              role="region"
              aria-labelledby={`${item.id}-trigger`}
              className="acc-panel"
              data-open={isOpen}
              inert={!isOpen}
            >
              <div>
                <div className="acc-inner pb-6">{item.content}</div>
              </div>
            </div>
            {progressMs && isOpen ? (
              <span
                key={progressKey}
                className="acc-progress run"
                style={{ "--ms": `${progressMs}ms` } as React.CSSProperties}
                aria-hidden="true"
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
