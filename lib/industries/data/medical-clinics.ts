import type { IndustryData } from "@/lib/industries/types";

const medicalClinics: IndustryData = {
  slug: "medical-clinics",
  name: "Medical Clinics",
  seoTitle: "Answer Every Patient Call, Even After Hours | FYNZ for Medical Clinics | FYNZ",
  seoDescription:
    "FYNZ answers, books, and sends the forms — before the patient ever reaches a voicemail.",
  hero: {
    category: "Health · Medical & Health Clinics",
    headline: "Answer every patient call, even after hours.",
    subhead:
      "FYNZ answers, books, and sends the forms — before the patient ever reaches a voicemail.",
    visual: {
      label: "FYNZ Workspace",
      title: "After-hours call transcript",
      lines: [
        "FYNZ AI: I can book you with Dr. Chen tomorrow at 9 AM — does that work?",
        "✓ Appointment Booked & Intake Sent",
      ],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "Sound familiar?",
    cards: [
      {
        title: "Voicemails after 5 PM",
        desc: "Every call becomes a voicemail — and half of those callers never call back.",
      },
      {
        title: "Endless phone tag",
        desc: "Chasing patients for appointments eats your staff's day and delays care.",
      },
      {
        title: "Missing paperwork at arrival",
        desc: "New patients arrive without paperwork done, stalling the provider's day.",
      },
      {
        title: "Unfilled no-show gaps",
        desc: "No-shows waste provider time you can't get back, reducing clinical efficiency.",
      },
    ],
  },
  benefits: [
    {
      powered: "Voice AI",
      title: "The phone is answered 24/7 — like your best receptionist.",
      desc: "Calls get answered, questions handled, appointments booked, urgent calls routed to a human immediately.",
      preview: "Voice AI Dispatch: Call at 8:12 PM · Resolved & Booked",
    },
    {
      powered: "Online booking · SCHEDULE",
      title: "Patients book themselves in.",
      desc: "Real-time availability by provider and visit type, from your site or Google.",
      preview: "Dr. Chen · 9:00 AM · 10:30 AM",
    },
    {
      powered: "Lead capture forms · GROW",
      title: "Paperwork done before they arrive.",
      desc: "Intake forms go out with the confirmation and land in the patient's record.",
      preview: "✓ Contact Details  ✓ Medical History  ☐ Consent Form",
    },
    {
      powered: "Reminders & confirmations · SCHEDULE",
      title: "Reminders that patients actually see.",
      desc: "Text confirmations cut no-shows and let you refill early.",
      preview: "Reminder: Appointment tomorrow at 10 AM with Dr. Patel. Reply C to confirm.",
    },
    {
      powered: "One inbox · GROW + Conversation AI",
      title: "One inbox for every patient message.",
      desc: "Texts, webchat, and portal-style questions in one place your staff actually checks.",
      preview: "SMS from Sarah L. · Webchat from John D.",
    },
  ],
  demo: {
    eyebrow: "Sequence Flow",
    title: "Voice AI after-hours booking workflow",
    steps: [
      {
        label: "6:22 PM",
        sublabel: "Patient calls clinic",
        desc: "AI receptionist answers immediately.",
      },
      {
        label: "6:23 PM",
        sublabel: "AI queries schedule",
        desc: "Offers next-day slots based on visit type.",
      },
      {
        label: "6:24 PM",
        sublabel: "Patient selects slot and registers",
        desc: "Intake paperwork sent automatically by SMS.",
      },
      {
        label: "6:25 PM",
        sublabel: "Appointment confirmed & synced",
        desc: "Voicemail bypassed ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A day with FYNZ",
    before:
      "Before — Monday opens to 23 voicemails, hours of callbacks, and frustrated staff playing telephone tag.",
    after:
      "After — Monday opens to a booked calendar; the only messages left are the ones that truly needed a human.",
  },
  proof: {
    stats: [
      { num: "68%", label: "After-hours calls converted" },
      { num: "45%", label: "Reduction in no-shows" },
      { num: "2 hrs", label: "Staff time saved daily" },
    ],
    testimonial:
      "“[Clinic administrator testimonial placeholder — space for a quote about after-hours booking conversion and reduced paperwork backlog.]”",
  },
  faq: [
    {
      q: "What happens with urgent calls?",
      a: "Voice AI never triages medical urgency by itself; defined urgent keywords route straight to your on-call line immediately.",
    },
    {
      q: "Is the system secure?",
      a: "Yes — reminders are consent-based and appointment-only. We include placeholders for your clinic's specific privacy and data handling statements.",
    },
    {
      q: "How do intake forms work?",
      a: "FYNZ automatically texts secure forms after booking. Completed data lands in the patient's record before their visit.",
    },
  ],
};

export default medicalClinics;
