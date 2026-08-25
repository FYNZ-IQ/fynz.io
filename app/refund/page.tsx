import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell, LegalSection } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — FYNZ",
  description:
    "FYNZ's 30-day money-back guarantee, month-to-month billing, and how to cancel your subscription from your dashboard.",
};

export default function RefundPage() {
  return (
    <LegalShell eyebrow="Legal" title="Refund & Cancellation Policy" updated="August 14, 2026">
      <LegalSection title="The short version">
        <p>
          Every paid FYNZ plan is <b className="text-ink">month-to-month</b> with{" "}
          <b className="text-ink">no long-term contract</b>, covered by a{" "}
          <b className="text-ink">30-day money-back guarantee</b>, and you can{" "}
          <b className="text-ink">cancel anytime from your dashboard</b>. All prices are in US dollars (USD).
        </p>
      </LegalSection>

      <LegalSection title="30-day money-back guarantee">
        <p>
          If you are not satisfied with FYNZ for any reason, contact us at{" "}
          <a href="mailto:hello@fynz.io" className="text-copper hover:underline">hello@fynz.io</a> within 30 days
          of your first payment for a paid plan and we will refund that payment in full. The guarantee applies to
          your first purchase of a paid FYNZ plan.
        </p>
      </LegalSection>

      <LegalSection title="Cancelling your subscription">
        <p>
          You can cancel at any time from your FYNZ dashboard — no phone call and no retention hoops. Cancellation
          takes effect at the end of your current billing cycle: you keep full access until then, and you are not
          billed again after that. Outside the 30-day guarantee window, payments already made for the current
          cycle are not refunded, because plans are month-to-month and stop at the end of the cycle.
        </p>
        <p>
          Your data stays exportable when you cancel — see the{" "}
          <Link href="/privacy" className="text-copper hover:underline">Privacy Policy</Link> for how we handle
          data after cancellation.
        </p>
      </LegalSection>

      <LegalSection title="Plan changes">
        <p>
          You can upgrade or downgrade between plans at any time from your dashboard. Changes apply from your
          next billing cycle unless we tell you otherwise at the time of the change.
        </p>
      </LegalSection>

      <LegalSection title="Questions">
        <p>
          Anything unclear, or need a hand cancelling? Email{" "}
          <a href="mailto:hello@fynz.io" className="text-copper hover:underline">hello@fynz.io</a> and a human
          will reply within one business day. See also our{" "}
          <Link href="/terms" className="text-copper hover:underline">Terms of Service</Link>.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
