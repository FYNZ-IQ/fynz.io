import type { Metadata } from "next";
import { LegalShell, LegalSection } from "@/components/legal/LegalShell";
import { Placeholder } from "@/components/home/Placeholder";

export const metadata: Metadata = {
  title: "Anti-spam and Consent Policy | FYNZ IQ",
  description: "How FYNZ IQ builds consent and opt-out into every text and follow-up, in line with Canadian and US anti-spam rules.",
};

export default function AntiSpamPage() {
  return (
    <LegalShell eyebrow="Legal" title="Anti-spam and Consent Policy">
      <LegalSection title="Consent and opt-out">
        <p>
          Texts and follow-ups sent through FYNZ IQ go out in your business name, with consent and opt-out built in. Every
          message honours STOP requests and follows Canadian and US anti-spam rules.
        </p>
        <p>
          <Placeholder className="whitespace-normal!">[Full policy text to confirm]</Placeholder>
        </p>
      </LegalSection>
    </LegalShell>
  );
}
