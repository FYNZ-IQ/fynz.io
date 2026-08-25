import * as React from "react";

/**
 * Shared layout for legal / policy pages (Privacy, Terms, Refund, Contact).
 * Server-renderable; matches the site's display/mono type scale.
 */
export function LegalShell({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full">
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 border-b border-line-soft overflow-hidden">
        <div className="absolute inset-0 bg-radial-[at_50%_0%] from-copper/10 via-transparent to-transparent pointer-events-none" />
        <div className="wrap max-w-3xl mx-auto px-6 relative z-10">
          <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">{eyebrow}</span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.08] mb-4">{title}</h1>
          {updated && (
            <p className="font-mono text-[10px] tracking-widest text-faint uppercase">Last updated: {updated}</p>
          )}
        </div>
      </section>
      <section className="py-14 md:py-20">
        <div className="wrap max-w-3xl mx-auto px-6 flex flex-col gap-10">{children}</div>
      </section>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display font-bold text-xl md:text-2xl tracking-tight mb-3">{title}</h2>
      <div className="text-muted text-[0.95rem] leading-relaxed flex flex-col gap-3">{children}</div>
    </div>
  );
}
