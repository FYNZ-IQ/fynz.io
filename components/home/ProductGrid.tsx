"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Reveal, Playable, useInView } from "./Reveal";
import { Placeholder } from "./Placeholder";
import { ROUTES } from "@/lib/site-nav";

type Detail = {
  steps: { title: string; body: React.ReactNode }[];
  included: React.ReactNode[];
  cta: { label: string; href: string };
};

type Card = {
  id: string;
  title: string;
  body: string;
  mock: React.ReactNode;
  detail: Detail;
  span?: boolean;
  addon?: boolean;
  loop: number;
};

const CARDS: Card[] = [
  {
    id: "answer-every-call",
    title: "Answer every call",
    body: "When you can't pick up, your customer gets a text from your business within seconds, so they don't call the next company.",
    span: true,
    loop: 6000,
    mock: <AnswerMock />,
    detail: {
      steps: [
        { title: "Missed call", body: "A customer calls and you can't pick up." },
        { title: "Instant text back", body: "Within seconds they get a text from your business, so they don't call the next company." },
        { title: "In your name", body: "Texts go out in your business name and sound like you. You approve the wording before anything goes live." },
      ],
      included: ["Instant text-back on every missed call", "Emergency plans for after-hours coverage", "Consent and opt-out built into every text"],
      cta: { label: "Try it on your phone", href: ROUTES.tryIt },
    },
  },
  {
    id: "follow-up-fast",
    title: "Follow up fast",
    body: "Every web form, message, and missed call gets a reply right away, then friendly follow-ups until they answer.",
    loop: 6000,
    mock: <FollowUpMock />,
    detail: {
      steps: [
        { title: "New lead", body: "Every web form, message, and missed call gets a reply right away." },
        { title: "Friendly follow-ups", body: "Instant text, then 1 hour, then next day, until they answer." },
        { title: "Replied", body: "Every lead gets a reply in minutes, not hours." },
      ],
      included: ["Instant replies to quote requests", "Fast follow-up on web and phone leads", "Long-term follow-up for buyers not ready yet"],
      cta: { label: "Book a demo", href: ROUTES.bookDemo },
    },
  },
  {
    id: "book-jobs",
    title: "Book jobs",
    body: "Customers pick a time that works for you. Reminders go out automatically, so fewer people forget.",
    loop: 6500,
    mock: <BookMock />,
    detail: {
      steps: [
        { title: "Customer picks a time", body: "Customers pick a time that works for you." },
        { title: "Reminders go out", body: "Reminders go out automatically, so fewer people forget." },
        { title: "Job booked", body: "Jobs booked show up in your monthly report." },
      ],
      included: ["Booking with automatic reminders", "Appointment booking without back-and-forth", "Showing booking and reminders"],
      cta: { label: "Book a demo", href: ROUTES.bookDemo },
    },
  },
  {
    id: "get-more-reviews",
    title: "Get more reviews",
    body: "After each job, happy customers get a simple request to leave a review.",
    loop: 6500,
    mock: <ReviewsMock />,
    detail: {
      steps: [
        { title: "Job done", body: "After each job, happy customers get a simple request." },
        { title: "Asked at the right moment", body: "Happy customers get asked at the right moment, in your business name." },
        { title: "New review received", body: "You approve the wording before anything goes live." },
      ],
      included: ["Review requests after each job", "Sent in your business name", <Placeholder key="p">[Review platforms supported]</Placeholder>],
      cta: { label: "Book a demo", href: ROUTES.bookDemo },
    },
  },
  {
    id: "see-booked-jobs",
    title: "See booked jobs, not dashboards",
    body: "Every month you get a short report: calls answered, leads followed up, jobs booked.",
    loop: 6000,
    mock: <ReportMock />,
    detail: {
      steps: [
        { title: "Calls answered", body: <><Placeholder>[#]</Placeholder> calls answered this month.</> },
        { title: "Leads followed up", body: <><Placeholder>[#]</Placeholder> leads followed up this month.</> },
        { title: "Jobs booked", body: <><Placeholder>[#]</Placeholder> jobs booked this month.</> },
      ],
      included: ["A short report every month", "Booked jobs, not dashboards", <Placeholder key="p">[How the report is delivered]</Placeholder>],
      cta: { label: "See full pricing", href: ROUTES.pricing },
    },
  },
  {
    id: "ai-voice",
    title: "Add-on: AI Voice",
    body: "A voice assistant answers after-hours calls, takes details, and books the job.",
    addon: true,
    loop: 5500,
    mock: <VoiceMock />,
    detail: {
      steps: [
        { title: "Incoming call · 11:42 PM", body: "A voice assistant answers after-hours calls." },
        { title: "Answered", body: "It takes the details." },
        { title: "Booked for 8:00 AM", body: "And books the job." },
      ],
      included: ["Answers after-hours calls", "Takes details and books the job", "Usage charges for calls are billed separately"],
      cta: { label: "See full pricing", href: ROUTES.pricing },
    },
  },
  {
    id: "fynz-social",
    title: "Add-on: Fynz Social",
    body: "Our team plans and posts content for your business so you stay visible.",
    addon: true,
    span: true,
    loop: 6000,
    mock: <SocialMock />,
    detail: {
      steps: [
        { title: "We plan", body: "Our team plans content for your business." },
        { title: "We post", body: "Posts go out on schedule, done for you." },
        { title: "You stay visible", body: "Your social media, done for you." },
      ],
      included: ["Content planned and posted for you", <Placeholder key="p1">[Channels covered]</Placeholder>, <Placeholder key="p2">[Posts per month]</Placeholder>],
      cta: { label: "See full pricing", href: ROUTES.pricing },
    },
  },
];

const EASE = "cubic-bezier(0.2, 0.8, 0.2, 1)";

export function ProductGrid() {
  const [open, setOpen] = React.useState<string | null>(null);
  const { ref: grid, inView } = useInView<HTMLDivElement>();
  const before = React.useRef<Map<string, DOMRect> | null>(null);

  // FLIP: snapshot every card's position before the layout change, then
  // animate each one from where it was to where it landed.
  const toggle = (id: string) => {
    const el = grid.current;
    if (el && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const m = new Map<string, DOMRect>();
      el.querySelectorAll<HTMLElement>("[data-card]").forEach((c) => m.set(c.dataset.card!, c.getBoundingClientRect()));
      before.current = m;
    }
    setOpen((cur) => (cur === id ? null : id));
  };

  React.useLayoutEffect(() => {
    const el = grid.current;
    const prev = before.current;
    before.current = null;
    if (!el || !prev) return;
    el.querySelectorAll<HTMLElement>("[data-card]").forEach((c) => {
      const a = prev.get(c.dataset.card!);
      if (!a) return;
      const b = c.getBoundingClientRect();
      const dx = a.left - b.left;
      const dy = a.top - b.top;
      if (!dx && !dy) return;
      c.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "none" }], { duration: 420, easing: EASE });
    });
    if (open) {
      const card = el.querySelector<HTMLElement>(`[data-card="${open}"]`);
      if (card) {
        const top = card.getBoundingClientRect().top;
        if (top < 80 || top > window.innerHeight * 0.5) card.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [open, grid]);

  return (
    <section className="py-20 md:py-28" aria-labelledby="products-title">
      <div className="wrap">
        <Reveal className="max-w-[720px] mb-12 md:mb-16">
          <h2 id="products-title" className="rv-wipe font-bold tracking-[-0.03em] leading-[1.08] text-[2.1rem] md:text-[3rem] text-navy-deep mb-4">
            One team for your whole front office.
          </h2>
          <p className="text-[1.05rem] md:text-[1.15rem] text-grey leading-relaxed">
            Calls, follow-ups, bookings, and reviews, set up for your trade and run by people who watch over it every day.
          </p>
        </Reveal>

        <div ref={grid} className={cn("rv-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-5", inView && "in")}>
            {CARDS.map((c) => {
              const isOpen = open === c.id;
              return (
                <article
                  key={c.id}
                  id={c.id}
                  data-card={c.id}
                  className={cn(
                    "pcard p-6 md:p-7 flex flex-col scroll-mt-24",
                    c.span && "lg:col-span-2",
                    isOpen && "is-open md:col-span-2 lg:col-span-3"
                  )}
                >
                  <div className={cn("grid gap-6 md:gap-8", isOpen && "lg:grid-cols-[1.1fr_0.9fr]")}>
                    <div className="flex flex-col">
                      <div className={cn("mb-6", !isOpen && "flex-1")}>
                        <Playable className={cn(isOpen ? "lg:min-h-[220px]" : "h-full")} loop={c.loop}>
                          {c.mock}
                        </Playable>
                      </div>
                      {c.addon && (
                        <span className="self-start text-[10.5px] font-semibold tracking-[0.14em] uppercase text-copper bg-copper-core/12 rounded-full px-2.5 py-1 mb-2">
                          Add-on
                        </span>
                      )}
                      <h3 className="font-bold tracking-tight text-[1.2rem] text-navy-deep mb-2">{c.title}</h3>
                      <p className="text-[0.95rem] text-grey leading-relaxed">{c.body}</p>
                      <button
                        type="button"
                        onClick={() => toggle(c.id)}
                        aria-expanded={isOpen}
                        aria-controls={`${c.id}-detail`}
                        className="mt-4 self-start inline-flex items-center gap-2 font-semibold text-[0.92rem] text-copper hover:text-copper-light transition-colors"
                      >
                        <span className="plus-icon w-6 h-6 rounded-full border border-copper-core/50 flex items-center justify-center" aria-hidden="true">
                          <svg width="10" height="10" viewBox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                        </span>
                        {isOpen ? "Show less" : "Learn more"}
                      </button>
                    </div>

                    {/* Detail panel: animated height, staggered steps */}
                    <div id={`${c.id}-detail`} className="expander" data-open={isOpen} inert={!isOpen}>
                      <div>
                        <div className={cn("exp-inner", isOpen && "lg:pl-8 lg:border-l lg:border-line-soft")}>
                          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-grey mb-4 mt-2 lg:mt-0">How it works</p>
                          <ol className="flex flex-col gap-4 mb-6">
                            {c.detail.steps.map((s, i) => (
                              <li key={s.title} className="exp-step flex gap-3.5" style={{ "--i": i } as React.CSSProperties}>
                                <span className="shrink-0 w-7 h-7 rounded-full bg-copper-core text-white text-[0.8rem] font-bold flex items-center justify-center">{i + 1}</span>
                                <div>
                                  <div className="font-semibold text-navy-deep text-[0.95rem]">{s.title}</div>
                                  <div className="text-[0.9rem] text-grey leading-relaxed">{s.body}</div>
                                </div>
                              </li>
                            ))}
                          </ol>
                          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-grey mb-3">What&apos;s included</p>
                          <ul className="flex flex-col gap-2 mb-6">
                            {c.detail.included.map((it, i) => (
                              <li key={i} className="exp-step flex items-start gap-2.5 text-[0.92rem] text-navy-deep" style={{ "--i": i + 3 } as React.CSSProperties}>
                                <span className="mt-[4px] w-4 h-4 rounded-full bg-copper-core/15 text-copper flex items-center justify-center shrink-0" aria-hidden="true">
                                  <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5 5 9l4.5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </span>
                                {it}
                              </li>
                            ))}
                          </ul>
                          <Link href={c.detail.cta.href} prefetch={false} className="btn-ghost h-[44px] py-0 px-6 text-[0.92rem] self-start">
                            {c.detail.cta.label}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
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
        <span className="ring w-2 h-2 rounded-full bg-red-500" aria-hidden="true" />
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
