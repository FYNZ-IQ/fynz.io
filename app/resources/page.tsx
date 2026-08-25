import type { Metadata } from "next";
import Link from "next/link";
import { Chip } from "@/components/shared";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Resources — FYNZ",
  description:
    "Everything you need to evaluate and get started with FYNZ — the platform tour, pricing and FAQ, industry guides, and how to reach a human.",
};

const RESOURCES = [
  {
    href: "/platform",
    title: "Platform tour",
    desc: "Every feature across the four pillars — GROW, SCHEDULE, SHOP, and OPS — on one page.",
  },
  {
    href: "/pricing",
    title: "Pricing & FAQ",
    desc: "The full tier ladder in USD, what's in each plan, and straight answers on contracts, cancellation, and setup.",
  },
  {
    href: "/industries",
    title: "Industry guides",
    desc: "How salons, clinics, gyms, trades, restaurants, and more run on FYNZ — pre-configured for your vertical.",
  },
  {
    href: "/ai",
    title: "FYNZ AI",
    desc: "Meet the AI agents — what each one does, how handoff to humans works, and what's included.",
  },
  {
    href: "/integrations",
    title: "Integrations",
    desc: "The tools FYNZ connects with — payments, calendars, social channels, and more.",
  },
  {
    href: "/contact",
    title: "Talk to a human",
    desc: "Support, billing, privacy requests, or anything else — we reply within one business day.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 text-center overflow-hidden border-b border-line-soft">
        <div className="absolute inset-0 bg-radial-[at_50%_0%] from-copper/10 via-transparent to-transparent pointer-events-none" />
        <div className="wrap max-w-4xl mx-auto px-6 relative z-10">
          <Chip className="mb-4 mx-auto">Resources</Chip>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6">
            Everything you need to <span className="text-copper">evaluate FYNZ</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            The platform tour, pricing, industry guides, and a direct line to a human — all in one place.
          </p>
        </div>
      </section>

      {/* Resource grid */}
      <section className="py-16 md:py-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCES.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group bg-navy-800 text-white border border-white/10 hover:border-copper/40 p-6 rounded-[var(--r-lg)] flex flex-col transition-all duration-200 hover:-translate-y-0.5"
              >
                <b className="font-display font-bold text-lg text-white group-hover:text-copper transition-colors mb-2">
                  {r.title}
                </b>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{r.desc}</p>
                <span className="font-mono text-xs tracking-wider text-copper uppercase mt-5 group-hover:translate-x-1 transition-transform">
                  Open →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final py-24 relative overflow-hidden text-center bg-radial-[at_bottom_center] from-copper/10 via-transparent to-transparent">
        <div className="wrap max-w-4xl mx-auto px-6 relative z-10">
          <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">
            Prefer to just see it?
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-4">
            A 20-minute demo beats an hour of <span className="text-copper">reading</span>.
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            We&apos;ll walk through FYNZ on your industry and your numbers — no pitch deck, no card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="/demo" />}>
              Book a demo
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/pricing" />}>
              See pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
