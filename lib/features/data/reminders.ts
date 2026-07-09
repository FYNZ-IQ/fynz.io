import type { FeatureData } from "@/lib/features/types";

const reminders: FeatureData = {
  slug: "reminders",
  name: "Reminders & no-shows",
  pillar: "SCHEDULE",
  pillarLink: "/schedule",
  seoTitle: "Reminders & No-Show Reduction — Empty Slots, Retired | FYNZ",
  seoDescription:
    "Automatic SMS and email reminders that keep chairs and slots full. Customers confirm with one reply, and repeat no-shows can be asked for a deposit next time.",
  hero: {
    headline: "No-shows, retired.",
    subhead:
      "Automatic SMS and email reminders do the chasing for you. Customers confirm with a single reply — and the ones who ghost anyway can be asked for a deposit next time.",
  },
  capabilities: [
    {
      title: "SMS + email, automatically",
      desc: "Reminders are scheduled the second a booking is made — 24 hours out and 2 hours out by default, or on whatever rhythm you set.",
    },
    {
      title: "One-tap confirmation",
      desc: "\"Reply C to confirm\" — the customer taps one letter, the appointment turns green on your calendar, and you know the slot is safe.",
    },
    {
      title: "Cancellations reopen the slot",
      desc: "When someone cancels from a reminder, the time reopens instantly and can be offered to your waitlist — a cancellation stops meaning lost money.",
    },
    {
      title: "Deposits for repeat offenders",
      desc: "No-shows are flagged on the customer profile, and repeat offenders can be required to pay a deposit before they book again.",
    },
    {
      title: "Your name, your voice",
      desc: "Every message goes out under your business name, and you can edit the wording so it sounds like you — not a robot.",
    },
    {
      title: "Zero effort after setup",
      desc: "No lists to check, no morning-of phone calls. Set the schedule once and every future booking gets reminded automatically.",
    },
  ],
  steps: [
    { title: "Pick your timing", desc: "Keep the default reminder schedule or set your own — most businesses use a day-before and a couple-hours-before nudge." },
    { title: "Make it sound like you", desc: "Tweak the message templates once; every reminder after that is on-brand." },
    { title: "Bookings do the rest", desc: "Every new appointment schedules its own confirmations and reminders — including bookings made at midnight." },
    { title: "Watch confirmations roll in", desc: "Replies update your calendar in real time, so you always know who's actually coming." },
  ],
  faq: [
    {
      q: "Will reminders annoy my customers?",
      a: "The opposite, in our experience — a short text the day before is the reminder most customers wish every business sent. You control the timing and the wording, so it stays helpful, not naggy.",
    },
    {
      q: "What happens when a customer cancels from a reminder?",
      a: "The slot reopens on your calendar immediately, and you can have FYNZ offer it to other customers automatically — so a cancellation becomes a filled seat instead of a gap.",
    },
    {
      q: "Can I require deposits only from people who've no-showed before?",
      a: "Yes. No-show history lives on the customer profile, so you can ask flagged customers for a deposit at booking while regulars keep booking friction-free.",
    },
  ],
  related: ["calendar", "payments", "automations"],
};

export default reminders;
