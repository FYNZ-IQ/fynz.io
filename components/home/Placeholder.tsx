import * as React from "react";

/** Bracketed placeholder copy, styled in Copper Light so it is easy to find before publishing. */
export function Placeholder({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={className ? `ph ${className}` : "ph"} data-placeholder="">
      {children}
    </span>
  );
}
