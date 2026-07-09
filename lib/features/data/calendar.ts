import type { FeatureData } from "@/lib/features/types";

const calendar: FeatureData = {
  slug: "calendar",
  name: "Smart calendar",
  pillar: "SCHEDULE",
  pillarLink: "/schedule",
  seoTitle: "Smart Calendar & Scheduling — One Calendar That Thinks Ahead | FYNZ",
  seoDescription:
    "Scheduling built for small business: buffers, padding, and availability rules per service and staff member. The calendar prevents conflicts instead of you untangling them.",
  hero: {
    headline: "One calendar that thinks ahead.",
    subhead:
      "Buffers between services, padding for cleanup, rules per service and per staff member — and two-way sync with the calendars you already live in. Conflicts get prevented, not untangled.",
  },
  capabilities: [
    {
      title: "Buffers & padding built in",
      desc: "Add prep time before and cleanup time after any service — customers only ever see slots you can actually take.",
    },
    {
      title: "Availability rules per service & staff",
      desc: "A 2.5-hour balayage and a 20-minute beard trim don't book the same way. Set rules once and the calendar enforces them.",
    },
    {
      title: "Zero double-booking",
      desc: "Real-time availability across every channel means two customers can never grab the same slot — no matter where they book from.",
    },
    {
      title: "Two-way sync",
      desc: "FYNZ syncs with the personal calendars you and your staff already live in, so a dentist appointment blocks a booking automatically.",
    },
    {
      title: "Self-serve rescheduling",
      desc: "Customers move their own appointments within your rules — the slot they leave reopens instantly, no phone call required.",
    },
    {
      title: "Fills around the clock",
      desc: "Bookings land at 11pm on a Sunday just as cleanly as 11am on a Tuesday. You open the calendar and the week is already taking shape.",
    },
  ],
  steps: [
    { title: "Add your services", desc: "Name, duration, price, and any deposit — plus buffer time before or after each one." },
    { title: "Set your rules", desc: "Hours, staff availability, lead time, and how far out customers can book." },
    { title: "Sync your calendars", desc: "Connect the personal calendars you already use so busy time blocks bookings automatically." },
    { title: "Let it fill", desc: "Customers book real openings 24/7; the calendar keeps everything conflict-free on its own." },
  ],
  faq: [
    {
      q: "What stops two customers from booking the same slot?",
      a: "Every booking channel reads from one live calendar. The moment a slot is taken, it disappears everywhere — website, Instagram, QR code, all of it.",
    },
    {
      q: "Can different services have different rules?",
      a: "Yes. Each service gets its own duration, buffer, deposit, and staff assignment — so a quick trim and a half-day color booking each behave the way they should.",
    },
    {
      q: "Does it sync with the calendar I already use?",
      a: "Two-way. Personal events block your FYNZ availability, and FYNZ bookings show up in your personal calendar — one view of your whole day.",
    },
  ],
  related: ["team", "reminders", "customers"],
};

export default calendar;
