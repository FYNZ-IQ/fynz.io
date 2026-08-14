import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell, LegalSection } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Contact — FYNZ",
  description: "Get in touch with the FYNZ team — sales, support, billing, and privacy requests.",
};

export default function ContactPage() {
  return (
    <LegalShell eyebrow="Company" title="Contact us">
      <LegalSection title="Talk to a human">
        <p>
          Email us at{" "}
          <a href="mailto:hello@fynz.io" className="text-copper hover:underline font-semibold">hello@fynz.io</a>{" "}
          — for sales questions, support, billing, cancellations, or privacy requests. We reply within one
          business day.
        </p>
        <p>
          FYNZ, Inc. · Serving small businesses across the US &amp; Canada.
        </p>
      </LegalSection>

      <LegalSection title="Want to see FYNZ on your numbers?">
        <p>
          <Link href="/demo" className="text-copper hover:underline font-semibold">Book a 20-minute demo</Link>{" "}
          and we&rsquo;ll walk through the platform on your industry and your numbers — no pitch deck.
        </p>
      </LegalSection>

      <LegalSection title="Billing & cancellations">
        <p>
          Plans are month-to-month with a 30-day money-back guarantee, and you can cancel anytime from your
          dashboard — details in our{" "}
          <Link href="/refund" className="text-copper hover:underline">Refund &amp; Cancellation Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Privacy requests">
        <p>
          To access, correct, or delete your personal information, email{" "}
          <a href="mailto:hello@fynz.io" className="text-copper hover:underline">hello@fynz.io</a> with the
          subject line &ldquo;Privacy request&rdquo;. See our{" "}
          <Link href="/privacy" className="text-copper hover:underline">Privacy Policy</Link> for details.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
