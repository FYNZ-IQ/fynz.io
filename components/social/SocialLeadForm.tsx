"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { INDUSTRY_OPTIONS } from "@/lib/social/content";

// Base URL of the onboarding bridge service (services/onboarding-bridge),
// inlined at build time. This form posts to `${BRIDGE_URL}/social/web`.
const BRIDGE_URL = (process.env.NEXT_PUBLIC_ONBOARDING_BRIDGE_URL || "").replace(/\/$/, "");

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign"] as const;
type UtmKey = (typeof UTM_KEYS)[number];

type Fields = {
  business: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  industry: string;
  /** Honeypot. Real people never see or fill it. */
  nickname: string;
};

type Props = {
  industryDefault: string;
  replyWindow: string;
  page: string;
};

const inputClass =
  "w-full rounded-xl border-2 border-navy-deep/15 bg-white px-4 py-3 text-[18px] text-navy-deep outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-navy-deep/40 focus:border-copper focus:shadow-[0_0_0_4px_rgba(200,137,90,0.25)]";

const labelClass = "block text-[15px] font-display text-navy-deep mb-1.5";

export function SocialLeadForm({ industryDefault, replyWindow, page }: Props) {
  const uid = useId();
  const [fields, setFields] = useState<Fields>({
    business: "",
    name: "",
    email: "",
    phone: "",
    website: "",
    industry: industryDefault,
    nickname: "",
  });
  const [consent, setConsent] = useState(false);
  const [updates, setUpdates] = useState(false);
  // UTM values are kept outside React state: they are read once from the URL
  // after mount, written into the hidden inputs, and sent with the lead.
  const utmRef = useRef<Record<UtmKey, string>>({ utm_source: "", utm_medium: "", utm_campaign: "" });
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Capture UTM parameters from the landing URL so they travel with the lead.
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      for (const key of UTM_KEYS) {
        const value = (params.get(key) || "").slice(0, 200);
        utmRef.current[key] = value;
        const input = formRef.current?.elements.namedItem(key);
        if (input instanceof HTMLInputElement) input.value = value;
      }
    } catch {
      // No URL access (should not happen in a browser); leave UTMs empty.
    }
  }, []);

  const set =
    (key: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setStatus("error");
      setErrorMsg("Tick the box to agree to be contacted about this request.");
      return;
    }
    if (!fields.email.includes("@")) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setStatus("submitting");
    setErrorMsg("");
    try {
      if (!BRIDGE_URL) {
        throw new Error("The form isn't available right now.");
      }
      const res = await fetch(`${BRIDGE_URL}/social/web`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fields,
          consent: true,
          updates,
          ...utmRef.current,
          page,
        }),
      });
      if (res.status === 429) {
        throw new Error("Too many attempts from your network. Please try again in a few minutes.");
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
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl bg-white border-2 border-copper p-6 md:p-8 demo-in"
      >
        <p className="text-[14px] uppercase tracking-[0.18em] text-copper mb-3">Request received</p>
        <h3 className="text-2xl md:text-3xl leading-tight mb-4">
          Here&rsquo;s what happens next.
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-[18px]">
          <li>
            Someone from Fynz replies to <span className="font-bold">{fields.email}</span> within {replyWindow} to
            confirm the details.
          </li>
          <li>
            We build four real posts for {fields.business || "your business"} from photos already on your
            website and social pages.
          </li>
          <li>
            We send them to you. If you don&rsquo;t like them, that&rsquo;s the end of it. Nothing to pay, nothing
            to install.
          </li>
        </ol>
      </div>
    );
  }

  return (
    <form ref={formRef} className="flex flex-col gap-5" onSubmit={submit} noValidate>
      {/* Honeypot: hidden from people, tempting to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor={`${uid}-nickname`}>Nickname</label>
        <input
          id={`${uid}-nickname`}
          type="text"
          name="nickname"
          value={fields.nickname}
          onChange={set("nickname")}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* UTM parameters from the landing URL */}
      {UTM_KEYS.map((key) => (
        <input key={key} type="hidden" name={key} defaultValue="" />
      ))}
      <input type="hidden" name="page" value={page} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor={`${uid}-business`} className={labelClass}>Business name</label>
          <input
            id={`${uid}-business`}
            type="text"
            name="business"
            value={fields.business}
            onChange={set("business")}
            autoComplete="organization"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor={`${uid}-name`} className={labelClass}>Your name</label>
          <input
            id={`${uid}-name`}
            type="text"
            name="name"
            value={fields.name}
            onChange={set("name")}
            autoComplete="name"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className={labelClass}>Email</label>
          <input
            id={`${uid}-email`}
            type="email"
            name="email"
            value={fields.email}
            onChange={set("email")}
            autoComplete="email"
            inputMode="email"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor={`${uid}-phone`} className={labelClass}>Mobile</label>
          <input
            id={`${uid}-phone`}
            type="tel"
            name="phone"
            value={fields.phone}
            onChange={set("phone")}
            autoComplete="tel"
            inputMode="tel"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor={`${uid}-website`} className={labelClass}>Website</label>
          <input
            id={`${uid}-website`}
            type="url"
            name="website"
            value={fields.website}
            onChange={set("website")}
            autoComplete="url"
            inputMode="url"
            placeholder="yourbusiness.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor={`${uid}-industry`} className={labelClass}>Industry</label>
          <select
            id={`${uid}-industry`}
            name="industry"
            value={fields.industry}
            onChange={set("industry")}
            required
            className={`${inputClass} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='10' viewBox='0 0 16 10'%3E%3Cpath d='M2 2l6 6 6-6' fill='none' stroke='%230D2154' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_1rem_center] pr-10`}
          >
            <option value="" disabled>
              Choose one
            </option>
            {INDUSTRY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-1">
        {/* Required consent. Unticked by default; blocks submission until checked. */}
        <label htmlFor={`${uid}-consent`} className="flex items-start gap-3 text-[17px] leading-snug">
          <input
            id={`${uid}-consent`}
            type="checkbox"
            name="consent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
            aria-required="true"
            className="mt-1 size-5 shrink-0 accent-copper"
          />
          <span>
            I agree to be contacted by Fynz about this request. <span className="text-copper" aria-hidden="true">*</span>
          </span>
        </label>

        {/* Optional and separate. Never implied by the consent box above. */}
        <label htmlFor={`${uid}-updates`} className="flex items-start gap-3 text-[17px] leading-snug">
          <input
            id={`${uid}-updates`}
            type="checkbox"
            name="updates"
            checked={updates}
            onChange={(e) => setUpdates(e.target.checked)}
            className="mt-1 size-5 shrink-0 accent-copper"
          />
          <span>Send me occasional updates from Fynz. (Optional)</span>
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-lg bg-white border-2 border-red-700 px-4 py-3 text-[16px] text-red-800">
          {errorMsg}
        </p>
      )}

      <div className="flex flex-col gap-2 pt-1">
        <button
          type="submit"
          disabled={!consent || status === "submitting"}
          aria-disabled={!consent || status === "submitting"}
          className="btn-copper w-full md:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Send me four free posts"}
          <span className="arrow" aria-hidden="true">→</span>
        </button>
        {!consent && (
          <p className="text-[15px] text-navy-deep/70">Tick the consent box to send this request.</p>
        )}
      </div>
    </form>
  );
}
