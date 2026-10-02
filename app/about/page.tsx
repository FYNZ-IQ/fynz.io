import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell, LegalSection } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "About — FYNZ",
  description:
    "FYNZ is the business operating system for local service businesses — one platform for leads, bookings, payments, and operations, set up and run with you by a team of FYNZ experts.",
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

      <LegalSection title="Software plus the people who run it">
        <p>
          FYNZ is delivered, not just downloaded. Behind every account sits the FYNZ team: clients aren&apos;t handed a
          login and left to work it out. Setup, configuration, changes, and troubleshooting are done for them by
          people who know the system.
        </p>
        <p>
          There are two ways in. <b className="text-ink">Self-Serve</b> is plug-and-play — pick your industry
          snapshot, provision yourself, and you&apos;re live in minutes with a template already configured for your
          trade; snapshots exist for every industry in our library. <b className="text-ink">Managed</b> is a human
          build — our experts configure FYNZ to your actual business and hand it over working, live within{" "}
          <b className="text-ink">48 hours</b> of signing, then run your campaigns, monitoring, and compliance.
        </p>
        <p>
          Every paid account is instrumented for attribution on day one — source, saved-job value, closed amount,
          date — so you can see what the system earned you, in dollars.
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
