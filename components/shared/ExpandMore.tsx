"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ExpandMoreProps {
  /** Toggle label while the extra content is hidden. */
  moreLabel?: string;
  /** Toggle label while the extra content is shown. */
  lessLabel?: string;
  defaultOpen?: boolean;
  /** Wrapper classes. */
  className?: string;
  /** Classes for the revealed content (spacing, typography). */
  panelClassName?: string;
  /** Classes for the toggle button. */
  toggleClassName?: string;
  children: React.ReactNode;
}

/**
 * "Learn more" disclosure. The short copy stays on the page; the longer
 * detail sits in a collapsed panel the reader opens on demand. Uses the
 * site's mono-caps copper link treatment so it reads like every other
 * inline action.
 */
export function ExpandMore({
  moreLabel = "Learn more",
  lessLabel = "Show less",
  defaultOpen = false,
  className,
  panelClassName,
  toggleClassName,
  children,
}: ExpandMoreProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  const panelId = React.useId();

  return (
    <div className={cn("w-full", className)}>
      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
          open ? "[grid-template-rows:1fr]" : "[grid-template-rows:0fr]"
        )}
      >
        <div className="min-h-0 overflow-hidden" inert={!open} aria-hidden={!open}>
          <div className={cn("pb-4", panelClassName)}>{children}</div>
        </div>
      </div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "inline-flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase text-copper hover:underline underline-offset-4 cursor-pointer select-none",
          toggleClassName
        )}
      >
        {open ? lessLabel : moreLabel}
        <span
          aria-hidden="true"
          className={cn("inline-block transition-transform duration-300 motion-reduce:transition-none", open && "rotate-180")}
        >
          ▾
        </span>
      </button>
    </div>
  );
}
