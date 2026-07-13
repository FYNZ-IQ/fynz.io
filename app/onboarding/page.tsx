"use client";

import React, { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Chip } from "@/components/shared";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

// Base URL of the onboarding bridge service (services/onboarding-bridge),
// inlined at build time. The wizard posts to `${BRIDGE_URL}/onboard/web`.
const BRIDGE_URL = (process.env.NEXT_PUBLIC_ONBOARDING_BRIDGE_URL || "").replace(/\/$/, "");

const PLAN_LABELS: Record<string, string> = {
  free: "Free",
  launch: "Launch",
  growth: "Growth",
  managed: "Managed",
};

type FormState = {
  email: string;
  company_name: string;
  onboard_owner_name: string;
  onboard_owner_title: string;
  onboard_tagline: string;
  onboard_logo_url: string;
  onboard_brand_color: string;
  onboard_service_area: string;
  onboard_phone: string;
  onboard_email: string;
  onboard_address: string;
  onboard_hours: string;
  website: string; // honeypot — hidden from real users, dropped by bots-only
};

const EMPTY_FORM: FormState = {
  email: "",
  company_name: "",
  onboard_owner_name: "",
  onboard_owner_title: "",
  onboard_tagline: "",
  onboard_logo_url: "",
  onboard_brand_color: "#B5643F",
  onboard_service_area: "",
  onboard_phone: "",
  onboard_email: "",
  onboard_address: "",
  onboard_hours: "",
  website: "",
};

type Field = {
  key: keyof FormState;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  hint?: string;
};

const STEPS: { title: string; blurb: string; fields: Field[] }[] = [
  {
    title: "Your account",
    blurb: "The email you signed up with is how we find your new workspace.",
    fields: [
      { key: "email", label: "Account email", placeholder: "you@yourbusiness.com", type: "email", required: true, hint: "Use the same email as your subscription." },
      { key: "company_name", label: "Business name", placeholder: "Shoreline Spa & Wellness", required: true },
      { key: "onboard_owner_name", label: "Owner name", placeholder: "Jordan Lee" },
      { key: "onboard_owner_title", label: "Owner title", placeholder: "Founder" },
    ],
  },
  {
    title: "Your brand",
    blurb: "This is what your booking page, emails, and funnels will wear.",
    fields: [
      { key: "onboard_tagline", label: "Tagline", placeholder: "Look good. Feel better." },
      { key: "onboard_logo_url", label: "Logo URL", placeholder: "https://…/logo.png", type: "url", hint: "A link to your logo image — we'll place it everywhere." },
      { key: "onboard_brand_color", label: "Brand color", placeholder: "#B5643F", type: "color" },
      { key: "onboard_service_area", label: "Service area", placeholder: "Greater Toronto Area" },
    ],
  },
  {
    title: "Business details",
    blurb: "Contact details your clients will see and book against.",
    fields: [
      { key: "onboard_phone", label: "Business phone", placeholder: "+1 416 555 0134", type: "tel" },
      { key: "onboard_email", label: "Public business email", placeholder: "hello@yourbusiness.com", type: "email" },
      { key: "onboard_address", label: "Business address", placeholder: "12 King St W, Toronto, ON" },
      { key: "onboard_hours", label: "Business hours", placeholder: "Mon–Sat 9am–7pm" },
    ],
  },
];

const inputClasses =
  "w-full bg-navy-800/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-copper/60 focus:ring-2 focus:ring-copper/20";

function OnboardingWizard() {
  const params = useSearchParams();
  const planParam = (params.get("plan") || "").toLowerCase();
  const plan = PLAN_LABELS[planParam] ? planParam : "";
  const billing = params.get("billing") === "annual" ? "annual" : "monthly";

  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const stepValid =
    step !== 0 || (form.email.includes("@") && form.company_name.trim().length > 0);

  const submit = async () => {
    setStatus("submitting");
    setErrorMsg("");
    try {
      if (!BRIDGE_URL) {
        throw new Error("Onboarding isn't wired up in this build yet.");
      }
      const res = await fetch(`${BRIDGE_URL}/onboard/web`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, plan, billing }),
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
      <div className="bg-navy-900 text-white rounded-[var(--r-lg)] p-8 md:p-12 text-center">
        <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">
          You&apos;re in
        </span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-4">
          Setting up <span className="text-copper">{form.company_name || "your business"}</span>
        </h2>
        <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8">
          Your answers are on their way to our setup team. Your branded system is being
          configured now — watch <span className="text-white font-semibold">{form.email}</span> for
          your &ldquo;you&apos;re ready — log in&rdquo; email.
        </p>
        <Button size="lg" className="btn-copper" render={<Link href="/" />}>
          Back to home
        </Button>
      </div>
    );
  }

  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;

  return (
    <div className="bg-navy-900 text-white rounded-[var(--r-lg)] p-8 md:p-12">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {STEPS.map((s, i) => (
          <React.Fragment key={s.title}>
            <span
              className={cn(
                "font-mono text-[9px] tracking-wider uppercase transition-colors",
                i === step ? "text-copper font-bold" : i < step ? "text-slate-300" : "text-slate-500"
              )}
            >
              {i + 1}. {s.title}
            </span>
            {i < STEPS.length - 1 && <span className="h-px flex-1 bg-white/10" />}
          </React.Fragment>
        ))}
      </div>

      <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mb-2">
        {current.title}
      </h2>
      <p className="text-slate-400 text-sm mb-8">{current.blurb}</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!stepValid) return;
          if (isLast) submit();
          else setStep(step + 1);
        }}
      >
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {current.fields.map((field) => (
            <label key={field.key} className="flex flex-col gap-2">
              <span className="font-mono text-[9.5px] tracking-wider uppercase text-slate-400">
                {field.label}
                {field.required && <span className="text-copper"> *</span>}
              </span>
              <input
                type={field.type || "text"}
                value={form[field.key]}
                onChange={set(field.key)}
                placeholder={field.placeholder}
                required={field.required}
                className={cn(
                  inputClasses,
                  field.type === "color" && "h-12 p-1.5 cursor-pointer"
                )}
              />
              {field.hint && <span className="text-[11px] text-slate-500">{field.hint}</span>}
            </label>
          ))}
        </div>

        {status === "error" && (
          <p className="mt-6 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
            {errorMsg} If it keeps happening, email{" "}
            <a href="mailto:hello@fynz.io" className="underline underline-offset-2">
              hello@fynz.io
            </a>{" "}
            and we&apos;ll set you up by hand.
          </p>
        )}

        <div className="flex items-center justify-between mt-10">
          {step > 0 ? (
            <Button
              type="button"
              variant="outline"
              className="border-white/15 bg-transparent text-slate-300 hover:bg-white/5 hover:text-white"
              onClick={() => setStep(step - 1)}
            >
              Back
            </Button>
          ) : (
            <span />
          )}
          <Button
            type="submit"
            size="lg"
            className="btn-copper font-semibold px-8"
            disabled={!stepValid || status === "submitting"}
          >
            {status === "submitting" ? "Sending…" : isLast ? "Finish setup" : "Continue"}
          </Button>
        </div>
      </form>
    </div>
  );
}

function PlanBanner() {
  const params = useSearchParams();
  const planParam = (params.get("plan") || "").toLowerCase();
  const planLabel = PLAN_LABELS[planParam];
  const billing = params.get("billing") === "annual" ? "annual" : "monthly";
  if (!planLabel) return null;
  return (
    <p className="font-mono text-[10px] tracking-wider uppercase text-faint mt-4">
      Selected plan: <span className="text-copper font-bold">{planLabel}</span>
      {planParam !== "free" && <> · {billing === "annual" ? "annual" : "monthly"} billing</>}
      {" · "}
      <Link href="/pricing" className="underline underline-offset-2 hover:text-copper">
        change
      </Link>
    </p>
  );
}

export default function OnboardingPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 text-center overflow-hidden border-b border-line-soft">
        <div className="absolute inset-0 bg-radial-[at_50%_0%] from-copper/10 via-transparent to-transparent pointer-events-none" />
        <div className="wrap max-w-3xl mx-auto px-6 relative z-10">
          <Chip className="mb-4 mx-auto">Onboarding</Chip>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.08] mb-5">
            Let&apos;s build <span className="text-copper">your</span> system.
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
            Three quick steps — your answers brand your booking page, funnels, and
            messages, and our team takes it from there within 48 hours.
          </p>
          <Suspense fallback={null}>
            <PlanBanner />
          </Suspense>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="wrap max-w-3xl mx-auto px-6">
          <Suspense fallback={null}>
            <OnboardingWizard />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
