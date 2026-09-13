import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell, LegalSection } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy — FYNZ",
  description:
    "How FYNZ collects, uses, and protects your information — including SMS consent, cookies, and your privacy rights in the US and Canada.",
};

export default function PrivacyPage() {
  return (
    <LegalShell eyebrow="Legal" title="Privacy Policy" updated="August 14, 2026">
      <LegalSection title="Who we are">
        <p>
          FYNZ, Inc. (&ldquo;FYNZ&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides an all-in-one business
          platform for small and local service businesses in the United States and Canada. This policy explains
          what personal information we collect, how we use it, and the choices you have. It applies to this
          website (fynz.io) and to the FYNZ platform and services.
        </p>
        <p>
          Questions or requests about this policy can be sent to{" "}
          <a href="mailto:hello@fynz.io" className="text-copper hover:underline">hello@fynz.io</a>.
        </p>
      </LegalSection>

      <LegalSection title="Information we collect">
        <p>
          <b className="text-ink">Information you give us.</b> When you book a demo, start onboarding, subscribe
          to a plan, or contact us, we collect information such as your name, business name, email address, phone
          number, business address, branding details, and billing information (payments are processed by our
          payment providers — we do not store full card numbers).
        </p>
        <p>
          <b className="text-ink">Information collected automatically.</b> Like most websites, we collect basic
          technical data when you visit — such as IP address, browser type, pages viewed, and referring page — via
          cookies and similar technologies (see &ldquo;Cookies &amp; analytics&rdquo; below).
        </p>
        <p>
          <b className="text-ink">Your customers&rsquo; data.</b> If you use the FYNZ platform to run your
          business, you (the business) are responsible for the customer data you bring onto the platform. We
          process that data on your behalf, on your instructions, to deliver the service — we do not use your
          customer lists for our own marketing.
        </p>
      </LegalSection>

      <LegalSection title="How we use information">
        <p>We use personal information to:</p>
        <p>
          · provide, set up, and support your FYNZ account (including our 48-hour concierge onboarding);<br />
          · process payments and manage subscriptions;<br />
          · respond to enquiries and provide customer support;<br />
          · send service messages about your account, and — with your consent — marketing communications;<br />
          · improve the website and the platform; and<br />
          · comply with legal obligations.
        </p>
      </LegalSection>

      <LegalSection title="SMS / text messaging consent">
        <p>
          Where we offer SMS communications, we send text messages only to individuals who have given prior
          express consent — for example by submitting a form that clearly discloses they are opting in to receive
          texts from FYNZ. By opting in, you agree to receive text messages from FYNZ at the number you provided.
          Message frequency varies. Message and data rates may apply. You can opt out at any time by replying{" "}
          <b className="text-ink">STOP</b>, and get help by replying <b className="text-ink">HELP</b> or emailing{" "}
          <a href="mailto:hello@fynz.io" className="text-copper hover:underline">hello@fynz.io</a>. Consent to
          receive text messages is not a condition of purchasing any FYNZ product or service.
        </p>
        <p>
          If you use the FYNZ platform to send SMS to your own customers, you are responsible for obtaining and
          recording their consent and honoring opt-outs, and our tools are built to support that (opt-out handling
          is automatic).
        </p>
      </LegalSection>

      <LegalSection title="We do not sell or share your data">
        <p>
          <b className="text-ink">
            We do not sell or share your personal information. No mobile information, phone numbers, or SMS
            opt-in / consent data will be shared with, sold to, or transferred to third parties or affiliates for
            their marketing or promotional purposes.
          </b>{" "}
          Text-messaging originator opt-in data and consent are not shared with any third party, except with
          service providers acting on our behalf solely to deliver the messages you have consented to receive.
        </p>
        <p>
          We share personal information only with service providers who help us run the service (such as cloud
          hosting and platform infrastructure, payment processors like Stripe, PayPal, and Square, and
          communications carriers), under contracts that limit their use of the data to providing services to us;
          or where required by law.
        </p>
      </LegalSection>

      <LegalSection title="Canadian users — PIPEDA">
        <p>
          For users in Canada, we handle personal information in accordance with the Personal Information
          Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy laws. In particular:
        </p>
        <p>
          · we collect, use, and disclose personal information only with your consent, or as otherwise permitted
          by law;<br />
          · we limit collection to what is needed for the purposes identified at or before the time of
          collection;<br />
          · we keep personal information only as long as needed for those purposes;<br />
          · you may request access to, and correction of, your personal information by contacting{" "}
          <a href="mailto:hello@fynz.io" className="text-copper hover:underline">hello@fynz.io</a>; and<br />
          · you may challenge our compliance with this policy; if you are not satisfied with our response, you
          may contact the Office of the Privacy Commissioner of Canada.
        </p>
        <p>
          Our service providers may store or process data in the United States or other jurisdictions; where they
          do, the data is subject to the laws of those jurisdictions.
        </p>
      </LegalSection>

      <LegalSection title="Cookies & analytics">
        <p>
          We use cookies and similar technologies that are necessary for the website to function (for example,
          remembering your theme preference). We may also use analytics tools to understand how visitors use the
          site — such as which pages are visited and for how long — so we can improve it. Analytics data is used
          in aggregate and is not used to identify you personally.
        </p>
        <p>
          You can control or delete cookies through your browser settings; blocking essential cookies may affect
          how the site works. If we add analytics or advertising technologies that require consent, we will
          request it as required by applicable law.
        </p>
      </LegalSection>

      <LegalSection title="Data retention & security">
        <p>
          We retain personal information for as long as your account is active or as needed to provide the
          service, meet legal obligations, and resolve disputes. We use reasonable administrative, technical, and
          physical safeguards appropriate to the sensitivity of the information. If you cancel your account, your
          data remains exportable, and we delete or anonymize personal information we no longer need.
        </p>
      </LegalSection>

      <LegalSection title="Your choices & rights">
        <p>
          You may unsubscribe from marketing emails via the link in any email, opt out of SMS by replying STOP,
          and request access to, correction of, or deletion of your personal information by emailing{" "}
          <a href="mailto:hello@fynz.io" className="text-copper hover:underline">hello@fynz.io</a>. We respond to
          verified requests within the timelines required by applicable law.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          We may update this policy from time to time. We will post the updated version on this page with a new
          &ldquo;last updated&rdquo; date, and — for material changes — notify account holders by email or in-app
          notice.
        </p>
        <p>
          See also our <Link href="/terms" className="text-copper hover:underline">Terms of Service</Link> and{" "}
          <Link href="/refund" className="text-copper hover:underline">Refund &amp; Cancellation Policy</Link>.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
