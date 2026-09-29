"use client";

import * as React from "react";
import { Reveal, Playable } from "./Reveal";

const COLS = ["Software on your own", "Typical marketing agency", "FYNZ IQ"];
const ROWS: { label: string; cells: [string, string, string] }[] = [
  { label: "Who sets it up", cells: ["You", "Agency", "FYNZ"] },
  { label: "Who runs it daily", cells: ["You", "Usually you", "FYNZ team"] },
  { label: "Built for your trade", cells: ["Generic", "Generic", "Yes"] },
  { label: "What you see each month", cells: ["Dashboards", "Clicks and leads", "Booked jobs"] },
  { label: "Anti-spam compliance", cells: ["Your problem", "Varies", "Built in"] },
];

export function Comparison() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="compare-title">
      <div className="wrap">
        <Reveal className="max-w-[720px] mb-10 md:mb-14">
          <h2 id="compare-title" className="rv-wipe font-bold tracking-[-0.03em] leading-[1.08] text-[2.1rem] md:text-[3rem] text-navy-deep">
            Not another login. A team that runs it.
          </h2>
        </Reveal>

        <Reveal>
        <Playable className="overflow-x-auto -mx-7 px-7 md:mx-0 md:px-0">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr>
                <th scope="col" className="w-[26%] pb-4 border-b border-line text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-grey">
                  <span className="sr-only">Feature</span>
                </th>
                {COLS.map((c, i) => (
                  <th
                    key={c}
                    scope="col"
                    className={
                      i === 2
                        ? "col-glow px-5 py-4 bg-copper-core text-white rounded-t-2xl font-bold text-[1rem] tracking-tight"
                        : "px-5 pb-4 border-b border-line font-semibold text-[0.95rem] text-navy-deep align-bottom"
                    }
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <Reveal as="tbody" group>
              {ROWS.map((r, ri) => (
                <tr key={r.label}>
                  <th scope="row" className="py-4 pr-4 border-b border-line-soft font-semibold text-[0.95rem] text-navy-deep">
                    {r.label}
                  </th>
                  {r.cells.map((cell, ci) =>
                    ci === 2 ? (
                      <td
                        key={ci}
                        className={`px-5 py-4 bg-warm-white border-b border-line-soft font-semibold text-navy-deep ${ri === ROWS.length - 1 ? "rounded-b-2xl" : ""}`}
                      >
                        <span className="inline-flex items-center gap-2.5">
                          <span className="pop w-5 h-5 rounded-full bg-copper-core text-white flex items-center justify-center shrink-0" style={{ "--d": `${600 + ri * 160}ms` } as React.CSSProperties} aria-hidden="true">
                            <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5 5 9l4.5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                          {cell}
                        </span>
                      </td>
                    ) : (
                      <td key={ci} className="px-5 py-4 border-b border-line-soft text-[0.95rem] text-grey">
                        {cell}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </Reveal>
          </table>
        </Playable>
        </Reveal>
      </div>
    </section>
  );
}
