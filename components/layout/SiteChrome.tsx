"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

/**
 * Routes rendered as single-goal funnel pages. They carry their own minimal
 * header and footer, so the site-wide navbar and footer are suppressed.
 */
export const FUNNEL_PATHS = ["/industries/restaurants"];

export function isFunnelPath(pathname: string | null): boolean {
  if (!pathname) return false;
  const clean = pathname.replace(/\/+$/, "") || "/";
  return FUNNEL_PATHS.includes(clean);
}

/** Renders its children everywhere except on funnel routes. */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (isFunnelPath(pathname)) return null;
  return <>{children}</>;
}
