"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup } from "@/components/animations";
import { Chip } from "@/components/shared";
import { Button } from "@/components/ui";

// Base URL of the onboarding bridge service (services/onboarding-bridge),
// inlined at build time. The form posts to `${BRIDGE_URL}/demo/web`.
const BRIDGE_URL = (process.env.NEXT_PUBLIC_ONBOARDING_BRIDGE_URL || "").replace(/\/$/, "");

const STEPS = [
  {
    step: "01",
    title: "Tell us about your business",
    desc: "Your industry, your line, and what a booked job is worth to you. Two minutes, no prep."
  },
  {
    step: "02",
    title: "We audit your missed calls",
    desc: "We record what your phone line actually does after hours — where callers land, and where they give up."
  },
  {
    step: "03",
    title: "A 20-minute call, on your numbers",
    desc: "We walk through what you're missing, in dollars, and show you exactly how FYNZ would answer, book, and recover it."
  }
];

function DemoForm() {
  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", website: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email.includes("@")) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setStatus("submitting");
    setErrorMsg("");
    try {
      if (!BRIDGE_URL) {
        throw new Error("The booking form isn't available right now.");
      }
      const res = await fetch(`${BRIDGE_URL}/demo/web`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.status === 429) {
        throw new Error("Too many attempts from your network — please try again in a few minutes.");
      }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong on our side.");
      }
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "done") {
    return (
      <div className="text-center py-6">
        <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">Request received</span>
        <h3 className="font-display font-extrabold text-2xl tracking-tight mb-3">
          We&apos;ll be in touch within <span className="text-copper">one business day</span>.
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto">
          A human from our team will email {form.email || "you"} to set up your 20-minute call and start your
          missed-call audit.
        </p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={submit}>
      {/* Honeypot — hidden from people, tempting to bots */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={set("website")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] top-auto h-px w-px opacity-0"
      />
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={set("name")}
        placeholder="Your name"
        aria-label="Your name"
        autoComplete="name"
        className="w-full bg-navy-800 border border-white/10 rounded-[var(--r-md)] py-3.5 px-5 text-[0.95rem] text-white outline-none transition-all placeholder:text-slate-400 focus:border-copper/55"
      />
      <input
        type="text"
        name="business"
        value={form.business}
        onChange={set("business")}
        placeholder="Business name"
        aria-label="Business name"
        autoComplete="organization"
        className="w-full bg-navy-800 border border-white/10 rounded-[var(--r-md)] py-3.5 px-5 text-[0.95rem] text-white outline-none transition-all placeholder:text-slate-400 focus:border-copper/55"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={set("email")}
        placeholder="Email"
        aria-label="Email"
        autoComplete="email"
        required
        className="w-full bg-navy-800 border border-white/10 rounded-[var(--r-md)] py-3.5 px-5 text-[0.95rem] text-white outline-none transition-all placeholder:text-slate-400 focus:border-copper/55"
      />
      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={set("phone")}
        placeholder="Business phone line (for the missed-call audit)"
        aria-label="Business phone line"
        autoComplete="tel"
        className="w-full bg-navy-800 border border-white/10 rounded-[var(--r-md)] py-3.5 px-5 text-[0.95rem] text-white outline-none transition-all placeholder:text-slate-400 focus:border-copper/55"
      />
      {status === "error" && (
        <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-[var(--r-md)] px-4 py-3">
          {errorMsg} You can also email{" "}
          <a href="mailto:hello@fynz.io?subject=Demo%20request" className="underline underline-offset-2">
            hello@fynz.io
          </a>{" "}
          and we&apos;ll book you by hand.
        </p>
      )}
      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="bg-copper hover:bg-copper/90 text-white font-semibold w-full"
      >
        {status === "submitting" ? "Sending…" : "Book my demo"}
      </Button>
      <p className="font-mono text-[9px] tracking-widest text-slate-400 uppercase text-center">
        No card required · we reply within one business day
      </p>
      <p className="text-[11px] text-slate-500 text-center">
        By submitting you agree to our{" "}
        <Link href="/terms" className="underline underline-offset-2 hover:text-copper">Terms</Link> and{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-copper">Privacy Policy</Link>.
      </p>
    </form>
  );
}

export default function DemoPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 text-center overflow-hidden border-b border-line-soft">
        <div className="absolute inset-0 bg-radial-[at_50%_0%] from-copper/10 via-transparent to-transparent pointer-events-none" />
        <div className="wrap max-w-4xl mx-auto px-6 relative z-10">
          <Chip className="mb-4 mx-auto">Book a demo</Chip>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6">
            Book your demo — get your <span className="text-copper">free missed-call audit</span>.
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            We record what your line does after hours, then show you what you&apos;re missing on a 20-minute call — your numbers, your industry, no slideware.
          </p>
          <p className="font-mono text-[9.5px] tracking-widest text-faint uppercase">
            Month-to-month · 30-day money-back guarantee · live in 48 hours
          </p>
        </div>
      </section>

      {/* What happens */}
      <section className="sec py-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase block mb-3">What happens</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Three steps. <span className="text-copper">No pitch deck.</span>
            </h2>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((step, idx) => (
              <div key={idx} className="bg-navy-800 text-white border border-white/10 p-6 rounded-[var(--r-lg)]">
                <span className="font-mono text-[9px] tracking-wider text-copper bg-copper-tint/20 border border-copper/20 px-2 py-0.5 rounded block w-fit mb-4">{step.step}</span>
                <h3 className="font-display font-bold text-lg text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Booking form */}
      <section id="book" className="sec py-24 border-b border-line-soft">
        <div className="wrap max-w-2xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-navy-900 text-white rounded-[var(--r-lg)] p-8 md:p-12">
              <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">Pick a time</span>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mb-6">
                Grab a <span className="text-copper">20-minute slot</span>
              </h2>

              <DemoForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final py-24 relative overflow-hidden text-center bg-radial-[at_bottom_center] from-copper/10 via-transparent to-transparent">
        <div className="wrap max-w-4xl mx-auto px-6 relative z-10">
          <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">Not ready to talk?</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-4">
            Start on <span className="text-copper">Free</span> instead.
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            The Free plan shows you the revenue you&apos;re missing — no card, no countdown. Upgrade whenever you&apos;re ready to recover it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" render={<Link href="/pricing" />}>
              See pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
