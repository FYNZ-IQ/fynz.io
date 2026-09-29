"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal, Playable } from "./Reveal";
import { Placeholder } from "./Placeholder";

type Card = { id: string; title: string; body: string; mock: React.ReactNode; span?: boolean; addon?: boolean };

const CARDS: Card[] = [
  {
    id: "answer-every-call",
    title: "Answer every call",
    body: "When you can't pick up, your customer gets a text from your business within seconds, so they don't call the next company.",
    span: true,
    mock: <AnswerMock />,
  },
  {
    id: "follow-up-fast",
    title: "Follow up fast",
    body: "Every web form, message, and missed call gets a reply right away, then friendly follow-ups until they answer.",
    mock: <FollowUpMock />,
  },
  {
    id: "book-jobs",
    title: "Book jobs",
    body: "Customers pick a time that works for you. Reminders go out automatically, so fewer people forget.",
    mock: <BookMock />,
  },
  {
    id: "get-more-reviews",
    title: "Get more reviews",
    body: "After each job, happy customers get a simple request to leave a review.",
    mock: <ReviewsMock />,
  },
  {
    id: "see-booked-jobs",
    title: "See booked jobs, not dashboards",
    body: "Every month you get a short report: calls answered, leads followed up, jobs booked.",
    mock: <ReportMock />,
  },
  {
    id: "ai-voice",
    title: "Add-on: AI Voice",
    body: "A voice assistant answers after-hours calls, takes details, and books the job.",
    addon: true,
    mock: <VoiceMock />,
  },
  {
    id: "fynz-social",
    title: "Add-on: Fynz Social",
    body: "Our team plans and posts content for your business so you stay visible.",
    addon: true,
    span: true,
    mock: <SocialMock />,
  },
];

export function ProductGrid() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="products-title">
      <div className="wrap">
        <Reveal className="max-w-[720px] mb-12 md:mb-16">
          <h2 id="products-title" className="font-bold tracking-[-0.03em] leading-[1.08] text-[2.1rem] md:text-[3rem] text-navy-deep mb-4">
            One team for your whole front office.
          </h2>
          <p className="text-[1.05rem] md:text-[1.15rem] text-grey leading-relaxed">
            Calls, follow-ups, bookings, and reviews, set up for your trade and run by people who watch over it every day.
          </p>
        </Reveal>

        <Reveal group className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CARDS.map((c) => (
            <article
              key={c.id}
              id={c.id}
              className={cn("pcard p-6 md:p-7 flex flex-col scroll-mt-24", c.span && "lg:col-span-2")}
            >
              <div className="mb-6 flex-1">
                <Playable className="h-full">{c.mock}</Playable>
              </div>
              {c.addon && (
                <span className="self-start text-[10.5px] font-semibold tracking-[0.14em] uppercase text-copper bg-copper-core/12 rounded-full px-2.5 py-1 mb-2">
                  Add-on
                </span>
              )}
              <h3 className="font-bold tracking-tight text-[1.2rem] text-navy-deep mb-2">{c.title}</h3>
              <p className="text-[0.95rem] text-grey leading-relaxed">{c.body}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Mini-UI mockups ---------- */

const frame = "rounded-xl bg-warm-white border border-line-soft p-4 text-[0.85rem] text-navy-deep h-full min-h-[150px]";
const d = (ms: number) => ({ "--d": `${ms}ms` } as React.CSSProperties);

function AnswerMock() {
  return (
    <div className={cn(frame, "flex flex-col gap-3")} aria-label="Missed call gets an automatic text within seconds">
      <div className="flex items-center gap-2 text-[0.8rem] text-grey">
        <span className="w-2 h-2 rounded-full bg-red-500" aria-hidden="true" />
        Missed call
        <span className="ml-auto">2:14 PM</span>
      </div>
      <div className="self-end max-w-[85%] bg-copper-core text-white rounded-2xl rounded-tr-md px-3.5 py-2 leading-snug">
        <span className="typing" style={d(300)}>
          Sorry we missed you! How can we help?
        </span>
      </div>
      <span className="pop self-end inline-flex items-center gap-1.5 text-[0.75rem] font-semibold text-copper bg-white border border-copper-core/40 rounded-full px-2.5 py-1" style={d(1500)}>
        <Check /> sent in 8 seconds
      </span>
    </div>
  );
}

function FollowUpMock() {
  const steps = ["Instant text", "1 hour", "Next day", "Replied"];
  return (
    <div className={cn(frame, "flex flex-col gap-3")} aria-label="Lead follow-up sequence">
      <div className="flex items-center justify-between">
        <span className="font-semibold">New lead: Sarah K.</span>
        <span className="text-[0.75rem] text-grey">Web form</span>
      </div>
      <ul className="flex flex-col gap-1.5">
        {steps.map((s, i) => (
          <li key={s} className="tick flex items-center gap-2.5" style={d(300 + i * 350)}>
            <span className={cn("w-5 h-5 rounded-full flex items-center justify-center", i === steps.length - 1 ? "bg-copper-core text-white" : "bg-white border border-copper-core/50 text-copper")}>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path className="tick-mark" d="M2.5 6.5 5 9l4.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className={cn(i === steps.length - 1 && "font-semibold text-copper")}>{s}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BookMock() {
  const slots = ["9:00", "10:00", "11:00", "1:00"];
  return (
    <div className={cn(frame, "flex flex-col gap-3")} aria-label="Booking confirmed with automatic reminder">
      <div className="flex items-center justify-between">
        <span className="font-semibold">Thursday</span>
        <span className="text-[0.75rem] text-grey">Deep clean</span>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {slots.map((s, i) => (
          <span key={s} className={cn("slot text-center text-[0.78rem] rounded-lg bg-white border border-line-soft py-1.5", i === 1 && "slot-on")} style={d(400)}>
            {s}
          </span>
        ))}
      </div>
      <div className="relative flex items-center justify-between text-[0.8rem] text-grey">
        <span>10:00 AM · Deep clean</span>
        <span className="stamp text-[0.72rem] font-bold tracking-[0.12em] uppercase text-copper border-2 border-copper-core rounded px-1.5 py-0.5" style={d(900)}>
          Confirmed
        </span>
      </div>
      <p className="fade-in text-[0.78rem] text-grey" style={d(1300)}>
        Reminder sent the day before
      </p>
    </div>
  );
}

function ReviewsMock() {
  return (
    <div className={cn(frame, "flex flex-col gap-3")} aria-label="Review request and five-star review">
      <div className="self-end max-w-[90%] bg-copper-core text-white rounded-2xl rounded-tr-md px-3.5 py-2 leading-snug">
        Thanks for choosing us! Mind leaving a quick review?
      </div>
      <div className="flex items-center gap-1 text-[1.4rem] leading-none" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="star" style={d(500 + i * 220)}>★</span>
        ))}
      </div>
      <p className="fade-in text-[0.8rem] font-semibold text-navy-deep" style={d(1700)}>
        New review received
      </p>
    </div>
  );
}

function ReportMock() {
  const rows = [
    { label: "calls answered", h: 62 },
    { label: "leads followed up", h: 84 },
    { label: "jobs booked", h: 46 },
  ];
  return (
    <div className={cn(frame, "flex flex-col gap-3")} aria-label="Monthly report">
      <div className="flex items-center justify-between">
        <span className="font-semibold">This month</span>
        <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-grey">Sample report</span>
      </div>
      <div className="grid grid-cols-3 gap-3 items-end h-[72px]">
        {rows.map((r, i) => (
          <div key={r.label} className="flex flex-col justify-end h-full">
            <div className="bar rounded-t-md bg-gradient-to-t from-copper-core to-copper-light" style={{ height: `${r.h}%`, ...d(200 + i * 200) }} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 text-[0.72rem] text-grey leading-tight">
        {rows.map((r) => (
          <div key={r.label}>
            <Placeholder>[#]</Placeholder> {r.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function VoiceMock() {
  return (
    <div className={cn(frame, "flex flex-col gap-3")} aria-label="After-hours call answered and booked by AI Voice">
      <div className="flex items-center justify-between">
        <span className="font-semibold">Incoming call</span>
        <span className="text-[0.75rem] text-grey">11:42 PM</span>
      </div>
      <div className="wave flex items-center gap-[3px] h-8" aria-hidden="true">
        {Array.from({ length: 22 }).map((_, i) => (
          <i key={i} style={d((i % 7) * 90)} />
        ))}
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="pop inline-flex items-center gap-1.5 text-[0.75rem] font-semibold text-copper bg-white border border-copper-core/40 rounded-full px-2.5 py-1" style={d(700)}>
          <Check /> Answered
        </span>
        <span className="pop inline-flex items-center gap-1.5 text-[0.75rem] font-semibold text-white bg-copper-core rounded-full px-2.5 py-1" style={d(1400)}>
          Booked for 8:00 AM
        </span>
      </div>
    </div>
  );
}

function SocialMock() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const posts = [1, 3, 5];
  return (
    <div className={cn(frame, "flex flex-col gap-3")} aria-label="Three social posts scheduled this week">
      <div className="flex items-center justify-between">
        <span className="font-semibold">Scheduled: 3 posts this week</span>
      </div>
      <div className="grid grid-cols-7 gap-1.5">
        {days.map((day, i) => {
          const idx = posts.indexOf(i);
          return (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <span className="text-[0.7rem] text-grey">{day}</span>
              <div className="w-full aspect-square rounded-md bg-white border border-line-soft overflow-hidden">
                {idx >= 0 && (
                  <div
                    className={cn("thumb w-full h-full", idx === 0 && "bg-gradient-to-br from-copper-light to-copper-core", idx === 1 && "bg-gradient-to-br from-navy-mid to-navy-deep", idx === 2 && "bg-gradient-to-br from-copper-core to-navy-mid")}
                    style={d(400 + idx * 300)}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Check() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 6.5 5 9l4.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
