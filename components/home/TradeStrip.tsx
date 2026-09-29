import * as React from "react";

const TRADES = ["Cleaning", "Plumbing", "Accounting Firms", "Real Estate Teams"];

/** Continuous left-scrolling strip of the trades we're built for. Pauses on hover. */
export function TradeStrip() {
  const items = [...TRADES, ...TRADES, ...TRADES, ...TRADES];
  return (
    <section className="py-8 md:py-10 border-b border-line-soft" aria-label="Built for these trades">
      <div className="wrap flex items-center gap-6">
        <span className="shrink-0 text-[0.8rem] font-semibold tracking-[0.14em] uppercase text-grey">Built for</span>
        <div className="marquee flex-1 min-w-0">
          <div className="marquee-track" aria-hidden="true">
            {[0, 1].map((half) => (
              <div key={half} className="flex items-center shrink-0">
                {items.map((t, i) => (
                  <span key={`${half}-${i}`} className="flex items-center text-[1.05rem] md:text-[1.2rem] font-semibold text-navy-deep whitespace-nowrap px-6">
                    {t}
                    <span className="ml-12 text-copper" aria-hidden="true">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
          <p className="sr-only">{TRADES.join(", ")}</p>
        </div>
      </div>
    </section>
  );
}
