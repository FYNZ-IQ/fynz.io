import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries | FYNZ",
  description:
    "FYNZ tailors lead capture, booking, loyalty, and AI employees to your industry — from cafés and clinics to contractors and coaches.",
};

export default function IndustriesIndexPage() {
  return (
    <section className="sec pt-[136px]">
      <div className="wrap">
        <div className="sec-head max-w-[720px]">
          <span className="eyebrow eyebrow-line mb-4">Who&apos;s it for</span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.1] mt-3 mb-5">
            Built for your industry.
          </h1>
          <p className="lede text-lg">
            Every business runs a little differently. Explore how FYNZ adapts to yours — with
            workflows, AI employees, and playbooks tuned to your customers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group rounded-[var(--r-lg)] border border-border bg-background p-7 transition-all duration-200 hover:-translate-y-1 hover:border-copper/40 hover:shadow-md"
            >
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-copper block mb-3">
                {industry.hero.category}
              </span>
              <h2 className="font-display font-bold text-xl mb-2 group-hover:text-copper transition-colors">
                {industry.name}
              </h2>
              <p className="text-sm text-muted leading-relaxed">{industry.hero.subhead}</p>
              <span className="arrow-link mt-4 text-sm">
                Explore
                <span aria-hidden="true" className="ml-1 transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
