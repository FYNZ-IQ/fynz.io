// Per-industry color themes ("anthems") for industry landing pages.
//
// Every theme is one hue on a shared saturation/lightness scale — accent at
// hsl(H 52% 45%), strong at hsl(H 55% 37%) — so any two industries sit in
// the same visual family and never clash with the navy ink or each other.
// The theme is applied by overriding the site's copper CSS variables on the
// page wrapper, so every accent-colored element (buttons, eyebrows, chips,
// stats, links) inherits it with no per-element changes.
//
// The background is a bright, futuristic wash: white-to-ice gradient, two
// soft radial glows in the industry hue, and a faint blueprint grid.

import type { CSSProperties } from "react";

const HUES: Record<string, number> = {
  // Beauty & personal care
  salons: 335,
  barbershops: 215,
  spas: 168,
  "nail-studios": 285,
  // Health
  clinics: 200,
  dental: 188,
  "medical-clinics": 222,
  therapists: 145,
  therapy: 152,
  // Fitness
  gyms: 358,
  fitness: 20,
  "personal-trainers": 30,
  "yoga-studios": 260,
  "yoga-pilates": 268,
  coaching: 42,
  // Food & hospitality
  restaurants: 5,
  cafes: 35,
  bars: 265,
  // Retail & commerce
  boutiques: 315,
  retail: 250,
  ecommerce: 235,
  automotive: 0,
  // Professional
  accounting: 155,
  legal: 230,
  "real-estate": 245,
  saas: 205,
  tutoring: 48,
  // Home services & trades
  "home-services": 175,
  plumbing: 210,
  cleaning: 190,
  contractors: 25,
};

const FALLBACK_HUE = 18; // the brand copper's hue

export function industryThemeVars(slug: string): CSSProperties {
  const h = HUES[slug] ?? FALLBACK_HUE;
  const accent = `hsl(${h} 52% 45%)`;
  const strong = `hsl(${h} 55% 37%)`;
  const tint = `hsl(${h} 52% 45% / 0.10)`;
  return {
    "--copper": accent,
    "--copper-strong": strong,
    "--copper-tint": tint,
    "--wash": `hsl(${h} 52% 45% / 0.06)`,
    "--wash-strong": `hsl(${h} 52% 45% / 0.12)`,
    "--ring": accent,
    // Tailwind v4 emits @theme tokens on :root with their var() references
    // already resolved, so overriding the source vars above doesn't reach
    // utility classes (text-copper, bg-primary, …). Mirror the overrides on
    // the emitted --color-* tokens so utilities re-theme too.
    "--color-copper": accent,
    "--color-copper-strong": strong,
    "--color-copper-tint": tint,
    "--color-primary": accent,
    "--color-ring": accent,
    // Bright futuristic backdrop: ice gradient + hue glows + blueprint grid.
    // Consumed by the .industry-theme class (light mode only — see globals.css).
    "--ind-bg": [
      `radial-gradient(880px 460px at 88% -4%, hsl(${h} 70% 60% / 0.16), transparent 70%)`,
      `radial-gradient(720px 520px at -8% 34%, hsl(${h} 70% 60% / 0.10), transparent 70%)`,
      `repeating-linear-gradient(0deg, hsl(${h} 40% 40% / 0.035) 0 1px, transparent 1px 56px)`,
      `repeating-linear-gradient(90deg, hsl(${h} 40% 40% / 0.035) 0 1px, transparent 1px 56px)`,
      `linear-gradient(180deg, #FBFCFF 0%, #F1F6FF 100%)`,
    ].join(", "),
  } as CSSProperties;
}
