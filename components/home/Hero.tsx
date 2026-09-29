"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/site-nav";
import { useParallax, useReducedMotion } from "./Reveal";

const HEADLINE = "We answer your leads and book your jobs. You do the work.";

export function Hero() {
  const words = HEADLINE.split(" ");
  const ref = useParallax<HTMLElement>();
  return (
    <section ref={ref} className="relative isolate bg-navy-deep text-white cut-bottom overflow-hidden" aria-labelledby="hero-title">
      <div className="mesh px-layer" style={{ "--px": "18px" } as React.CSSProperties} aria-hidden="true">
        <i className="m1" />
        <i className="m2" />
        <i className="m3" />
        <i className="m4" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,33,84,0.55)_0%,rgba(13,33,84,0.15)_55%,transparent_100%)] pointer-events-none" aria-hidden="true" />

      <div className="wrap relative pt-[120px] md:pt-[150px] pb-[calc(var(--cut)+56px)] md:pb-[calc(var(--cut)+72px)] grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
        <div>
          <h1
            id="hero-title"
            className="font-bold tracking-[-0.03em] leading-[1.02] text-[2.6rem] sm:text-[3.4rem] lg:text-[4.2rem] xl:text-[4.6rem] max-w-[13ch] mb-6"
          >
            {words.map((w, i) => (
              <React.Fragment key={i}>
                <span className="hw" style={{ "--i": i } as React.CSSProperties}>
                  {w}
                </span>{" "}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-[1.05rem] md:text-[1.2rem] leading-relaxed text-white/80 max-w-[560px] mb-8">
            FYNZ IQ sets up and runs your calls, follow-ups, bookings, and reviews, done for you and built for your trade.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href={ROUTES.tryIt} prefetch={false} className="btn-copper">
              Try it on your phone
            </Link>
            <Link href={ROUTES.bookDemo} prefetch={false} className="btn-white">
              Book a demo
            </Link>
          </div>
          <p className="mt-5 text-[0.9rem] text-white/65 max-w-[520px]">
            Call our demo line, hang up, and see the text your customers would get.
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-end px-layer" style={{ "--px": "-10px" } as React.CSSProperties}>
          <PhoneStory />
          <span className="mt-4 text-[0.78rem] tracking-[0.12em] uppercase text-white/55">Sample business</span>
        </div>
      </div>
    </section>
  );
}

type Kind = "call" | "typing-biz" | "sent" | "typing-cust" | "reply" | "booked";
type Item = { kind: Kind; title: string; body: string; meta: string };

const ITEMS: Record<Kind, Item> = {
  call: { kind: "call", title: "Missed call", body: "(416) 555-0142", meta: "Just now" },
  "typing-biz": { kind: "typing-biz", title: "Maple Plumbing", body: "", meta: "typing…" },
  sent: { kind: "sent", title: "Text sent", body: "Hi, it's Maple Plumbing. Sorry we missed your call! How can we help?", meta: "8 sec later" },
  "typing-cust": { kind: "typing-cust", title: "Customer", body: "", meta: "typing…" },
  reply: { kind: "reply", title: "Customer replied", body: "Leak under my kitchen sink. Can someone come today?", meta: "2 min later" },
  booked: { kind: "booked", title: "Calendar", body: "Booked · Today 3:00 PM · Leak repair", meta: "Confirmed" },
};

/**
 * 10-second timeline. Each frame is the full list of cards on screen, so a
 * typing indicator is swapped for the message it precedes.
 */
const TIMELINE: { at: number; show: Kind[] }[] = [
  { at: 0, show: ["call"] },
  { at: 1300, show: ["call", "typing-biz"] },
  { at: 2500, show: ["call", "sent"] },
  { at: 4300, show: ["call", "sent", "typing-cust"] },
  { at: 5200, show: ["call", "sent", "reply"] },
  { at: 7400, show: ["call", "sent", "reply", "booked"] },
];
const LOOP_MS = 10000;
const FINAL: Kind[] = ["call", "sent", "reply", "booked"];

/** Phone mockup that replays a missed-call → booked story on a 10-second loop. */
export function PhoneStory({ className }: { className?: string }) {
  const reduced = useReducedMotion();
  const [state, setState] = React.useState({ frame: 0, loop: 0 });

  React.useEffect(() => {
    if (reduced) return;
    let timer: number | undefined;
    let loop = 0;
    let frame = 0;
    const schedule = () => {
      const next = frame + 1;
      const delay = next < TIMELINE.length ? TIMELINE[next].at - TIMELINE[frame].at : LOOP_MS - TIMELINE[frame].at;
      timer = window.setTimeout(() => {
        if (next < TIMELINE.length) frame = next;
        else {
          frame = 0;
          loop += 1;
        }
        setState({ frame, loop });
        schedule();
      }, delay);
    };
    const stop = () => window.clearTimeout(timer);
    const onVis = () => (document.hidden ? stop() : schedule());
    document.addEventListener("visibilitychange", onVis);
    schedule();
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reduced]);

  const shown = reduced ? FINAL : TIMELINE[state.frame].show;

  return (
    <div className={cn("float-phone", className)} role="img" aria-label="Phone showing a missed call, an automatic text back, the customer's reply, and a booked appointment.">
      <div className="relative w-[270px] sm:w-[300px] h-[560px] sm:h-[600px] rounded-[44px] bg-navy-deep p-[10px] shadow-[0_40px_80px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.12)]">
        <div className="relative h-full w-full rounded-[36px] bg-warm-white overflow-hidden text-navy-deep">
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[92px] h-[26px] rounded-full bg-navy-deep z-10" aria-hidden="true" />
          <div className="flex justify-between px-6 pt-4 text-[11px] font-semibold text-navy-deep/80">
            <span>9:41</span>
            <span aria-hidden="true">●●●</span>
          </div>
          <div className="px-4 pt-6 flex flex-col gap-3">
            {shown.map((k) => (
              <Notification key={`${state.loop}-${k}`} item={ITEMS[k]} reduced={reduced} />
            ))}
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[110px] h-[5px] rounded-full bg-navy-deep/25" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

function Notification({ item, reduced }: { item: Item; reduced: boolean }) {
  const k = item.kind;
  const typing = k === "typing-biz" || k === "typing-cust";
  const isReply = k === "reply" || k === "typing-cust";
  const isBooked = k === "booked";
  return (
    <div
      className={cn(
        !reduced && "notif",
        "rounded-2xl bg-white shadow-[0_8px_24px_rgba(13,33,84,0.10)] border border-line-soft p-3.5",
        isBooked && "border-copper-core/40"
      )}
    >
      <div className="flex items-center gap-2.5 mb-1.5">
        <span
          className={cn(
            "w-7 h-7 rounded-lg flex items-center justify-center shrink-0",
            k === "call" && "bg-red-50 text-red-500",
            (k === "sent" || k === "typing-biz") && "bg-copper-core/15 text-copper",
            isReply && "bg-navy-deep/8 text-navy-deep",
            isBooked && "bg-copper-core text-white"
          )}
          aria-hidden="true"
        >
          {k === "call" && <span className="ring inline-flex"><PhoneIcon /></span>}
          {(k === "sent" || k === "typing-biz" || isReply) && <MessageIcon />}
          {isBooked && <CalendarIcon />}
        </span>
        <span className="font-semibold text-[0.82rem] flex-1">{item.title}</span>
        <span className="text-[0.7rem] text-grey">{item.meta}</span>
      </div>
      {typing ? (
        <span
          className={cn(
            "dots rounded-2xl px-3 py-2.5",
            k === "typing-biz" ? "bg-copper-core text-white rounded-tl-md" : "bg-warm-white text-navy-deep rounded-tl-md"
          )}
          aria-label="typing"
        >
          <i /><i /><i />
        </span>
      ) : (
        <p
          className={cn(
            "text-[0.86rem] leading-snug",
            k === "sent" && "bg-copper-core text-white rounded-2xl rounded-tl-md px-3 py-2 inline-block",
            k === "reply" && "bg-warm-white rounded-2xl rounded-tl-md px-3 py-2 inline-block",
            isBooked && "font-semibold text-navy-deep",
            k === "call" && "text-navy-deep font-medium"
          )}
        >
          {item.body}
        </p>
      )}
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.9 2z" />
    </svg>
  );
}
function MessageIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}
