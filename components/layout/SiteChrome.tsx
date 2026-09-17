"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

/**
 * Routes rendered as single-goal funnel pages. They carry their own minimal
 * header and footer, so the site-wide navbar and footer are suppressed.
 */
export const FUNNEL_PATHS = ["/industries/restaurants", "/industries/real-estate"];

export function isFunnelPath(pathname: string | null): boolean {
  if (!pathname) return false;
  const clean = pathname.replace(/\/+$/, "") || "/";
  return FUNNEL_PATHS.includes(clean);
}

/**
 * True when the rendered page has marked itself as a funnel with
 * `data-funnel-page`. This covers previews served from a different URL,
 * where the pathname check alone would bring the site chrome back after
 * hydration. Reading the DOM here is safe: on the server it is skipped, and on
 * the client the server-rendered markup is already present during hydration.
 */
function hasFunnelMarker(): boolean {
  if (typeof document === "undefined") return false;
  return document.querySelector("[data-funnel-page]") !== null;
}

/** Renders its children everywhere except on funnel routes. */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (isFunnelPath(pathname) || hasFunnelMarker()) return null;
  return <>{children}</>;
}
