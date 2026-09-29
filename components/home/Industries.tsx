"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Accordion } from "./Accordion";

type Industry = {
  id: string;
  name: string;
  desc: string;
  setup: string[];
  link: string;
  linkLabel: string;
  visual: React.ReactNode;
};

const INDUSTRIES: Industry[] = [
  {
    id: "ind-cleaning",
    name: "Cleaning",
    desc: "Book recurring cleans, send quotes fast, and cut no-shows.",
    setup: ["Instant replies to quote requests", "Booking with automatic reminders", "Review requests after every clean"],
    link: "/industries/cleaning",
    linkLabel: "See how it works for cleaning",
    visual: (
      <Visual title="Quote request" meta="Web form · 1 min ago">
        <Bubble side="left">Can I get a quote for a 3-bed deep clean?</Bubble>
        <Bubble side="right">Absolutely. Deep cleans for a 3-bed start at a fixed rate. Want Thursday 10 AM?</Bubble>
        <Row label="Every 2 weeks" value="Recurring · Confirmed" />
      </Visual>
    ),
  },
  {
    id: "ind-plumbing",
    name: "Plumbing",
    desc: "Catch every emergency call, even when you are under a sink.",
    setup: ["Instant text-back on every missed call", "Fast follow-up on web and phone leads", "Emergency plans for after-hours coverage"],
    link: "/industries/plumbing",
    linkLabel: "See how it works for plumbing",
    visual: (
      <Visual title="Missed call" meta="11:42 PM">
        <Bubble side="right">Hi, it&apos;s Maple Plumbing. Sorry we missed your call! Is this an emergency?</Bubble>
        <Bubble side="left">Yes, burst pipe in the basement.</Bubble>
        <Row label="After-hours plan" value="On-call tech notified" />
      </Visual>
    ),
  },
  {
    id: "ind-accounting",
    name: "Accounting Firms",
    desc: "Keep client intake and follow-ups organized during your busiest season.",
    setup: ["Online intake forms for new clients", "Automatic reminders for missing documents", "Appointment booking without back-and-forth"],
    link: "/industries/accounting-firms",
    linkLabel: "See how it works for accounting firms",
    visual: (
      <Visual title="New client intake" meta="Form completed">
        <Row label="T4 slips" value="Received" />
        <Row label="Receipts" value="Reminder sent" />
        <Row label="Review meeting" value="Tue 2:00 PM" />
      </Visual>
    ),
  },
  {
    id: "ind-real-estate",
    name: "Real Estate Teams",
    desc: "Reply to every lead in minutes and keep showings on track.",
    setup: ["Instant reply to every new lead", "Showing booking and reminders", "Long-term follow-up for buyers not ready yet"],
    link: "/industries/real-estate-teams",
    linkLabel: "See how it works for real estate teams",
    visual: (
      <Visual title="New lead" meta="Portal inquiry · 30 sec ago">
        <Bubble side="right">Thanks for reaching out about 42 Elm St. Want to see it this weekend?</Bubble>
        <Bubble side="left">Saturday morning works.</Bubble>
        <Row label="Showing" value="Sat 10:30 AM · Reminder set" />
      </Visual>
    ),
  },
];

export function Industries() {
  const [open, setOpen] = React.useState<string | null>(INDUSTRIES[0].id);
  const active = INDUSTRIES.find((i) => i.id === open) ?? INDUSTRIES[0];

  return (
    <section className="bg-navy-deep text-white py-20 md:py-28" aria-labelledby="industries-title">
      <div className="wrap">
        <Reveal className="max-w-[720px] mb-10 md:mb-14">
          <h2 id="industries-title" className="font-bold tracking-[-0.03em] leading-[1.08] text-[2.1rem] md:text-[3rem]">
            Built for your business.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
          <Reveal>
            <Accordion
              dark
              defaultOpen={INDUSTRIES[0].id}
              onOpenChange={setOpen}
              items={INDUSTRIES.map((ind) => ({
                id: ind.id,
                title: ind.name,
                content: (
                  <div>
                    <p className="text-[1rem] text-white/80 leading-relaxed mb-5">{ind.desc}</p>
                    <div className="lg:hidden mb-6">{ind.visual}</div>
                    <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-copper-light mb-3">What we set up</p>
                    <ul className="flex flex-col gap-2 mb-5">
                      {ind.setup.map((s) => (
                        <li key={s} className="flex items-start gap-2.5 text-[0.95rem] text-white/85">
                          <span className="mt-[5px] w-4 h-4 rounded-full bg-copper-core text-white flex items-center justify-center shrink-0" aria-hidden="true">
                            <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5 5 9l4.5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                          {s}
                        </li>
                      ))}
                    </ul>
                    <Link href={ind.link} prefetch={false} className="font-semibold text-copper-light hover:text-white inline-flex items-center gap-1.5 group">
                      {ind.linkLabel} <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                ),
              }))}
            />
          </Reveal>

          <Reveal index={1} className="hidden lg:block lg:sticky lg:top-28">
            <div key={active.id} className="notif">{active.visual}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Visual bits ---------- */

function Visual({ title, meta, children }: { title: string; meta: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white text-navy-deep p-5 md:p-6 shadow-[0_30px_70px_rgba(0,0,0,0.35)] border border-white/10 flex flex-col gap-3">
      <div className="flex items-center justify-between pb-3 border-b border-line-soft">
        <span className="font-semibold">{title}</span>
        <span className="text-[0.75rem] text-grey">{meta}</span>
      </div>
      {children}
    </div>
  );
}

function Bubble({ side, children }: { side: "left" | "right"; children: React.ReactNode }) {
  return (
    <p
      className={cn(
        "max-w-[88%] text-[0.9rem] leading-snug rounded-2xl px-3.5 py-2",
        side === "right" ? "self-end bg-copper-core text-white rounded-tr-md" : "self-start bg-warm-white rounded-tl-md"
      )}
    >
      {children}
    </p>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-[0.85rem] rounded-xl bg-warm-white px-3.5 py-2.5">
      <span className="text-grey">{label}</span>
      <span className="font-semibold text-copper">{value}</span>
    </div>
  );
}
