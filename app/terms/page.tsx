import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell, LegalSection } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service — FYNZ",
  description:
    "The terms that govern your use of the FYNZ platform: subscriptions, billing in USD, cancellation, acceptable use, and more.",
};

export default function TermsPage() {
  return (
    <LegalShell eyebrow="Legal" title="Terms of Service" updated="August 14, 2026">
      <LegalSection title="1. Agreement">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) are an agreement between FYNZ, Inc. (&ldquo;FYNZ&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;) and the business or individual using our website and services
          (&ldquo;you&rdquo;). By creating an account, purchasing a subscription, or using the FYNZ platform, you
          agree to these Terms and to our{" "}
          <Link href="/privacy" className="text-copper hover:underline">Privacy Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="2. The service">
        <p>
          FYNZ is an all-in-one business platform for small and local service businesses — CRM and lead capture,
          online booking, payments and invoicing, marketing and automations, and business reporting — delivered
          with human onboarding and support. Some capabilities (for example, accounting and tax tools, or certain
          AI and telephony features) may be released over time or offered as add-ons; features included in each
          plan are described on our{" "}
          <Link href="/pricing" className="text-copper hover:underline">pricing page</Link>.
        </p>
      </LegalSection>

      <LegalSection title="3. Accounts">
        <p>
          You are responsible for the accuracy of your account information, for maintaining the confidentiality
          of your login credentials, and for all activity under your account. You must be at least the age of
          majority in your jurisdiction and have authority to bind the business you register.
        </p>
      </LegalSection>

      <LegalSection title="4. Fees, billing & cancellation">
        <p>
          · <b className="text-ink">All prices are in US dollars (USD)</b>, for all customers, including
          businesses in Canada.<br />
          · Paid plans are billed <b className="text-ink">month-to-month</b> in advance and renew automatically
          each billing cycle. There are no long-term contracts and no setup fees.<br />
          · You can <b className="text-ink">cancel anytime from your dashboard</b>; cancellation takes effect at
          the end of the current billing cycle, and you keep access until then.<br />
          · New paid subscriptions are covered by our{" "}
          <b className="text-ink">30-day money-back guarantee</b> — see the{" "}
          <Link href="/refund" className="text-copper hover:underline">Refund &amp; Cancellation Policy</Link>.<br />
          · Certain usage-based charges (for example, telephony or SMS carrier fees, where applicable) may be
          billed separately and will be disclosed before you enable the relevant feature.
        </p>
      </LegalSection>

      <LegalSection title="5. Your data & your customers">
        <p>
          You retain ownership of the data you bring to the platform, including your customer lists. You grant us
          the rights needed to host and process that data to provide the service. Your data remains exportable,
          including after cancellation, as described in our Privacy Policy.
        </p>
        <p>
          If you use FYNZ to communicate with your own customers (email, SMS, voice), you are responsible for
          complying with the laws that apply to those communications — including obtaining any required consent,
          honoring opt-outs, and following anti-spam laws such as the TCPA, CTIA guidelines, CAN-SPAM, and
          Canada&rsquo;s CASL. SMS/text features may require carrier registration and are enabled after the
          applicable compliance steps are complete.
        </p>
      </LegalSection>

      <LegalSection title="6. Acceptable use">
        <p>
          You agree not to use the service to send unlawful, deceptive, or unsolicited communications; to
          infringe others&rsquo; rights; to attempt to breach or probe the security of the platform; or to resell
          the service except as expressly agreed with us in writing. We may suspend accounts that put the
          platform, carriers&rsquo; networks, or other customers at risk, and will tell you why.
        </p>
      </LegalSection>

      <LegalSection title="7. Third-party services">
        <p>
          Parts of the service are delivered together with third-party providers — for example payment processing
          (Stripe, PayPal, Square), communications carriers, and platform infrastructure. Your use of those
          capabilities may also be subject to the applicable provider&rsquo;s terms.
        </p>
      </LegalSection>

      <LegalSection title="8. Intellectual property">
        <p>
          The FYNZ platform, website, and branding are owned by FYNZ, Inc. or its licensors. We grant you a
          limited, non-exclusive, non-transferable right to use the service for your business while your
          subscription is active. Your brand and content remain yours.
        </p>
      </LegalSection>

      <LegalSection title="9. Disclaimers & limitation of liability">
        <p>
          The service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. To the maximum extent
          permitted by law, we disclaim implied warranties of merchantability, fitness for a particular purpose,
          and non-infringement, and we do not warrant that the service will be uninterrupted or error-free.
          Business outcomes depend on many factors outside our control, and we do not guarantee any particular
          revenue, booking, or marketing results.
        </p>
        <p>
          To the maximum extent permitted by law, neither party is liable for indirect, incidental, special, or
          consequential damages, and our total liability arising out of the service is limited to the amounts you
          paid us in the twelve (12) months before the claim arose. Nothing in these Terms limits liability that
          cannot be limited under applicable law, including under Canadian consumer protection legislation where
          it applies.
        </p>
      </LegalSection>

      <LegalSection title="10. Termination">
        <p>
          You may cancel at any time from your dashboard. We may suspend or terminate the service for material
          breach of these Terms that remains uncured after notice, or where required by law. On termination, we
          make your data available for export as described in the Privacy Policy.
        </p>
      </LegalSection>

      <LegalSection title="11. Changes to these Terms">
        <p>
          We may update these Terms from time to time. Material changes will be notified to account holders by
          email or in-app notice before they take effect; continued use of the service after that date means you
          accept the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="12. Governing law & contact">
        <p>
          These Terms are governed by the laws applicable in the jurisdiction where FYNZ, Inc. is organized,
          without regard to conflict-of-law rules, except where the mandatory consumer protection laws of your
          place of residence apply. Questions about these Terms:{" "}
          <a href="mailto:hello@fynz.io" className="text-copper hover:underline">hello@fynz.io</a>.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
