import type { IndustryData } from "@/lib/industries/types";

const dental: IndustryData = {
  slug: "dental",
  name: "Dental Practices",
  seoTitle: "Fill Cancellations & Bring Patients Back | FYNZ for Dental | FYNZ",
  seoDescription:
    "FYNZ helps dental clinics backfill cancellations, automate hygiene recalls, and answer every call — so your front desk focuses on patients.",
  hero: {
    category: "Health · Dental Clinics",
    headline: "Fill cancellations and bring patients back on time.",
    subhead: "FYNZ handles recalls, confirmations, and the phones — so your front desk handles patients.",
    visual: {
      label: "FYNZ Workspace",
      title: "Hygiene Recall",
      lines: ["Hi Sarah, your 6-month check is due 🦷", "✓ Booked — Tuesday at 2 PM"],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "Sound familiar?",
    cards: [
      {
        title: "A 2 PM cancellation becomes an empty chair",
        desc: "Pure lost production that you can never get back.",
      },
      {
        title: "Hygiene recalls slip",
        desc: "Six months becomes fourteen, and patient retention drifts down.",
      },
      {
        title: "Front desk phone multi-tasking",
        desc: "Staff can't answer the phone and check in a patient at the same time.",
      },
      {
        title: "Reviews feel unprofessional to ask for",
        desc: "Asking in person feels awkward, so nobody does it and your score stalls.",
      },
    ],
  },
  benefits: [
    {
      powered: "powered by Online booking · SCHEDULE",
      title: "Cancellations backfill themselves.",
      desc: "The moment a slot opens, patients waiting for that window get a text — and the chair stays productive.",
      preview: "Waitlist dispatch: 2:00 PM cancellation → filled by patient James L. ✓",
    },
    {
      powered: "powered by Workflow AI + Reminders & confirmations · SCHEDULE",
      title: "Recalls go out on time, every time.",
      desc: "Six-month hygiene reminders send themselves and book straight into open slots.",
      preview: "Recall SMS sent → slot booked ✓ — no manual call list on Friday.",
    },
    {
      powered: "powered by Voice AI",
      title: "Every call gets answered — even at lunch.",
      desc: "Overflow and after-hours calls are answered naturally, appointments booked, urgent matters routed to you.",
      preview: "“Tuesday at 10 AM or 2 PM?” — “2 PM works.” ✓ Appointment Booked",
    },
    {
      powered: "powered by Reminders & confirmations · SCHEDULE",
      title: "Confirmations cut no-shows.",
      desc: "Patients confirm by text; unconfirmed slots get flagged early enough to refill.",
      preview: "“Reply C to confirm your cleaning tomorrow at 3 PM.” — ✓ Confirmed in PMS",
    },
    {
      powered: "powered by Reviews AI",
      title: "Your reviews reflect your care.",
      desc: "Happy patients get a gentle, compliant review request after their visit.",
      preview: "★★★★★ “Incredible staff and gentle cleaning. Will return!” — Google Review",
    },
  ],
  demo: {
    eyebrow: "Sequence Flow",
    title: "Watch a cancellation fill itself",
    steps: [
      {
        label: "2:00 PM",
        sublabel: "Patient cancels their 3:00 PM hygiene appointment",
        desc: "Empty chair identified by integration.",
      },
      {
        label: "2:01 PM",
        sublabel: "FYNZ texts 5 patients on the waitlist",
        desc: "Targets patients who prefer afternoon slots.",
      },
      {
        label: "2:15 PM",
        sublabel: "Patient claims and confirms the slot",
        desc: "Books directly via SMS click.",
      },
      {
        label: "2:40 PM",
        sublabel: "Chair refilled & confirmed",
        desc: "100% productive ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A day with FYNZ",
    before:
      "Before — the front desk spends Friday calling recall lists, leaving voicemails, and juggling sticky notes.",
    after:
      "After — recalls text themselves and book straight in; the team spends Friday with the patients in the room.",
  },
  faq: [
    {
      q: "Is patient messaging handled carefully?",
      a: "Yes — reminders are consent-based and appointment-only, and opt-outs are honored automatically. We walk through your privacy and compliance requirements with you during setup, and we never claim HIPAA or PIPEDA compliance for your practice until it has been verified for your configuration.",
    },
    {
      q: "How does waitlist backfill choose patients?",
      a: "FYNZ scans your waitlist for patients whose stated preferences (day of week, time of day) match the cancelled slot, and sends them a secure SMS booking link.",
    },
    {
      q: "Does it integrate with my dental practice management software (PMS)?",
      a: "Yes, FYNZ connects with major dental PMS solutions to read availability and write back appointments automatically.",
    },
  ],
};

export default dental;
