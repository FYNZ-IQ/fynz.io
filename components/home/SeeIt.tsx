"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal, useInView } from "./Reveal";
import { Placeholder } from "./Placeholder";

const BRIDGE_URL = (process.env.NEXT_PUBLIC_ONBOARDING_BRIDGE_URL || "").replace(/\/$/, "");

export function SeeIt() {
  return (
    <section id="try-it" className="relative bg-white cut-top pt-[calc(var(--cut)+56px)] md:pt-[calc(var(--cut)+72px)] pb-20 md:pb-28 scroll-mt-16" aria-labelledby="see-title">
      <div className="wrap">
        <Reveal className="mb-12 md:mb-16">
          <h2 id="see-title" className="font-bold tracking-[-0.03em] leading-[1.08] text-[2.1rem] md:text-[3rem] text-navy-deep">
            See it. Then do the math.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
          <Reveal className="rounded-2xl bg-warm-white border border-line-soft p-7 md:p-9">
            <h3 className="font-bold tracking-tight text-[1.4rem] text-navy-deep mb-6">Try it on your own phone</h3>
            <ol className="flex flex-col gap-4 mb-8">
              {["Call the number below.", "Hang up before anyone answers.", "Check your texts."].map((s, i) => (
                <li key={s} className="flex items-start gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-copper-core text-white font-bold text-[0.9rem] flex items-center justify-center">{i + 1}</span>
                  <span className="text-[1.02rem] text-navy-deep pt-1">{s}</span>
                </li>
              ))}
            </ol>
            <div className="font-bold tracking-tight text-[1.6rem] sm:text-[2rem] md:text-[2.3rem] text-navy-deep mb-6 break-words">
              <Placeholder className="whitespace-normal!">[Demo phone number]</Placeholder>
            </div>
            <p className="text-[0.8rem] text-grey leading-relaxed">
              By calling, you agree to receive a reply text from FYNZ IQ. Message and data rates may apply. Reply STOP to opt out.
            </p>
          </Reveal>

          <Reveal index={1}>
            <Calculator />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Calculator ---------- */

type Inputs = { calls: number; miss: number; conv: number; value: number };
const DEFAULTS: Inputs = { calls: 30, miss: 25, conv: 40, value: 300 };

function estimate({ calls, miss, conv, value }: Inputs) {
  // calls per week × 52 ÷ 12 × miss rate × conversion rate × job value
  return Math.round(((calls * 52) / 12) * (miss / 100) * (conv / 100) * value);
}

function useAnimatedNumber(target: number, active: boolean, ms = 600) {
  const [shown, setShown] = React.useState(0);
  const from = React.useRef(0);
  const raf = React.useRef(0);
  React.useEffect(() => {
    if (!active) return;
    cancelAnimationFrame(raf.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      from.current = target;
      raf.current = requestAnimationFrame(() => setShown(target));
      return () => cancelAnimationFrame(raf.current);
    }
    const start = performance.now();
    const begin = from.current;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / ms);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = Math.round(begin + (target - begin) * eased);
      setShown(v);
      if (t < 1) raf.current = requestAnimationFrame(tick);
      else from.current = target;
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target, active, ms]);
  return shown;
}

const money = (n: number) => `$${n.toLocaleString("en-US")}`;

function Calculator() {
  const [v, setV] = React.useState<Inputs>(DEFAULTS);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const total = estimate(v);
  const shown = useAnimatedNumber(total, inView);
  const set = (k: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement>) => setV((s) => ({ ...s, [k]: Number(e.target.value) }));

  return (
    <div ref={ref} className="rounded-2xl bg-navy-deep text-white p-7 md:p-9 shadow-[0_30px_70px_rgba(13,33,84,0.25)]">
      <h3 className="font-bold tracking-tight text-[1.4rem] mb-5">What are missed calls costing you?</h3>
      <div className="mb-1 font-bold tracking-[-0.03em] text-[2.8rem] md:text-[3.6rem] leading-none text-copper-light tabular-nums" aria-live="polite" aria-atomic="true">
        {money(shown)} <span className="text-[1.1rem] md:text-[1.3rem] font-semibold text-white/70 tracking-normal">a month</span>
      </div>
      <p className="text-[0.85rem] text-white/60 mb-7">Example based on the starting numbers below. Move the sliders to see yours.</p>

      <div className="flex flex-col gap-5">
        <Slider label="Calls you get per week" value={v.calls} min={5} max={200} step={1} onChange={set("calls")} format={(n) => `${n}`} />
        <Slider label="Calls you miss" value={v.miss} min={0} max={100} step={1} onChange={set("miss")} format={(n) => `${n}%`} />
        <Slider label="Answered calls that turn into a job" value={v.conv} min={0} max={100} step={1} onChange={set("conv")} format={(n) => `${n}%`} />
        <Slider label="Average job value" value={v.value} min={50} max={5000} step={25} onChange={set("value")} format={(n) => money(n)} />
      </div>
      <p className="text-[0.78rem] text-white/50 mt-5">Estimate only, based on the numbers you enter.</p>

      <BreakdownForm inputs={v} total={total} />
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  format: (n: number) => string;
}) {
  const id = React.useId();
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label htmlFor={id} className="text-[0.92rem] text-white/85">
          {label}
        </label>
        <output htmlFor={id} className="font-semibold tabular-nums text-copper-light">
          {format(value)}
        </output>
      </div>
      <input
        id={id}
        type="range"
        className="slider"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        style={{ "--p": `${pct}%` } as React.CSSProperties}
      />
    </div>
  );
}

function BreakdownForm({ inputs, total }: { inputs: Inputs; total: number }) {
  const [email, setEmail] = React.useState("");
  const [optin, setOptin] = React.useState(false);
  const [hp, setHp] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "sending" | "done" | "error">("idle");
  const [msg, setMsg] = React.useState("");
  const emailId = React.useId();
  const optId = React.useId();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      setMsg("Please enter a valid email address.");
      return;
    }
    setStatus("sending");
    setMsg("");
    try {
      if (!BRIDGE_URL) throw new Error("This form isn't wired up yet. Email us and we'll send your breakdown.");
      const res = await fetch(`${BRIDGE_URL}/roi/web`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          optin: optin ? "yes" : "no",
          calls_per_week: inputs.calls,
          miss_rate: inputs.miss,
          conversion_rate: inputs.conv,
          job_value: inputs.value,
          estimate: total,
          website: hp,
        }),
      });
      if (res.status === 429) throw new Error("Too many attempts from your network. Please try again in a few minutes.");
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong on our side.");
      }
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "done") {
    return (
      <p className="mt-7 pt-6 border-t border-white/10 text-[0.95rem] text-white/85">
        Thanks. Your breakdown is on its way to <span className="font-semibold text-white">{email}</span>.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="mt-7 pt-6 border-t border-white/10" noValidate>
      <p className="text-[0.95rem] text-white/85 mb-3">Want the full breakdown and how to recover it? Enter your email.</p>
      <input type="text" name="website" value={hp} onChange={(e) => setHp(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor={emailId} className="sr-only">Email</label>
        <input
          id={emailId}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@yourbusiness.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 min-w-0 h-[48px] rounded-full bg-white/10 border border-white/20 px-5 text-white placeholder:text-white/45 outline-none focus:border-copper-light focus:bg-white/15 transition-colors"
        />
        <button type="submit" disabled={status === "sending"} className="btn-copper h-[48px] py-0 disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Send my breakdown"}
        </button>
      </div>
      <label htmlFor={optId} className="flex items-start gap-2.5 mt-3 text-[0.82rem] text-white/65 cursor-pointer">
        <input id={optId} type="checkbox" checked={optin} onChange={(e) => setOptin(e.target.checked)} className="mt-[3px] accent-[#C8895A] w-4 h-4" />
        Send me occasional tips and offers from FYNZ IQ.
      </label>
      {status === "error" && (
        <p role="alert" className={cn("mt-3 text-[0.85rem] text-copper-light")}>
          {msg}
        </p>
      )}
    </form>
  );
}
