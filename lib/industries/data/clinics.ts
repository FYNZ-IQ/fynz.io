import type { IndustryData } from "@/lib/industries/types";

const clinics: IndustryData = {
  slug: "clinics",
  name: "Clinics",
  seoTitle: "Answer Patient Calls and Send Intakes | FYNZ for Clinics & Dental | FYNZ",
  seoDescription:
    "FYNZ helps medical, health, and dental clinics answer after-hours calls, book appointments, send intakes, and cut no-shows.",
  hero: {
    category: "Medical, Health & Dental Clinics",
    headline: "Answer patient calls and send intakes.",
    subhead:
      "FYNZ answers, books, and sends forms — before the patient ever reaches a voicemail.",
    visual: {
      label: "FYNZ Workspace",
      title: "Booking Assistant",
      lines: ["I can book you for tomorrow at 9:15 AM", "✓ Confirmed & intake sent"],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "Sound familiar?",
    cards: [
      {
        title: "Voicemail patient loss",
        desc: "After 5 PM, every call becomes a voicemail — and half of those callers never call back.",
      },
      {
        title: "Front desk phone tag",
        desc: "Staff spends hours playing phone tag to confirm details and schedules.",
      },
      {
        title: "Unfinished intake forms",
        desc: "Patients arrive without paperwork done, delaying appointments.",
      },
      {
        title: "Last-minute no-shows",
        desc: "Idle appointment slots waste provider time that cannot be recovered.",
      },
    ],
  },
  benefits: [
    {
      powered: "Voice AI",
      title: "The phone is answered 24/7.",
      desc: "AI answers after-hours calls, books appointments, and routes urgent calls instantly.",
      preview: "Overflow call handled",
    },
    {
      powered: "Online booking · SCHEDULE",
      title: "Self-serve online booking.",
      desc: "Patients book visits based on provider availability directly from Google or your site.",
      preview: "Provider slot booked",
    },
    {
      powered: "Lead capture forms · GROW",
      title: "Intakes completed beforehand.",
      desc: "Intake forms go out with text confirmations and sync directly to records.",
      preview: "✓ Intake form submitted",
    },
    {
      powered: "Reminders & confirmations · SCHEDULE",
      title: "Text reminders that cut no-shows.",
      desc: "Confirmations let you know patient status early enough to refill open spots.",
      preview: "Your appointment is tomorrow. Reply C to confirm.",
    },
    {
      powered: "One inbox · GROW",
      title: "A single inbox for all messages.",
      desc: "Texts, webchats, and form inquiries merge into one list for easy front-desk access.",
      preview: "Unified Inbox active",
    },
  ],
  demo: {
    eyebrow: "Sequence Flow",
    title: "After-hours patient call handling",
    steps: [
      {
        label: "6:22 PM",
        sublabel: "Call received",
        desc: "AI answers: “How can I help you today?”",
      },
      {
        label: "6:23 PM",
        sublabel: "Slot selected",
        desc: "Patient books tomorrow 9:15 AM slot.",
      },
      {
        label: "6:24 PM",
        sublabel: "Intake form sent",
        desc: "SMS confirmation and digital intake link delivered.",
      },
      {
        label: "8:05 PM",
        sublabel: "Intake submitted",
        desc: "Patient record updated ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A day with FYNZ",
    before:
      "Before — Monday opens to 23 voicemails, two hours of callbacks, and patients already booked elsewhere.",
    after:
      "After — Monday opens to a fully booked calendar; the team focuses on patient check-ins.",
  },
  faq: [
    {
      q: "What happens with urgent medical calls?",
      a: "FYNZ is not a medical triage tool. Emergency keywords route patients directly to your on-call phone line.",
    },
    {
      q: "Is patient messaging handled carefully?",
      a: "Yes — messaging is strictly scheduling-related and consent-based.",
    },
    {
      q: "Can we capture new patient info?",
      a: "Yes — captures basic contact info and reason for visit, then triggers the intake form.",
    },
  ],
};

export default clinics;
