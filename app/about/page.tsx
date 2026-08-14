import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell, LegalSection } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "About — FYNZ",
  description:
    "FYNZ is the business operating system for local service businesses — one platform for leads, bookings, payments, and operations, delivered with a human team.",
};

export default function AboutPage() {
  return (
    <LegalShell eyebrow="Company" title="What FYNZ is">
      <LegalSection title="A business operating system for local service businesses">
        <p>
          FYNZ is an all-in-one business operating system built for local service businesses — salons, clinics,
          gyms, trades, restaurants, and the businesses like them that run their town. One platform replaces the
          stack of single-purpose subscriptions: lead capture and CRM, online booking, payments and invoicing,
          marketing and automations, and business reporting, all sharing one customer record.
        </p>
      </LegalSection>

      <LegalSection title="Software plus humans">
        <p>
          FYNZ is delivered, not just downloaded. On every paid plan, a human team sets your system up for you —
          contacts imported, booking page live, missed-call text-back and review requests switched on — with
          onboarding targeted at <b className="text-ink">48 hours</b>. On the Managed plan, that team also runs
          your campaigns and monitoring for you.
        </p>
      </LegalSection>

      <LegalSection title="Straight terms">
        <p>
          Prices are in USD for all customers, including in Canada. Every plan is month-to-month with no
          long-term contract, backed by a 30-day money-back guarantee, and you can cancel anytime from your
          dashboard — see the{" "}
          <Link href="/refund" className="text-copper hover:underline">Refund &amp; Cancellation Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Get in touch">
        <p>
          <Link href="/demo" className="text-copper hover:underline font-semibold">Book a demo</Link> to see FYNZ
          on your numbers, or email{" "}
          <a href="mailto:hello@fynz.io" className="text-copper hover:underline">hello@fynz.io</a> — a human
          replies within one business day.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
