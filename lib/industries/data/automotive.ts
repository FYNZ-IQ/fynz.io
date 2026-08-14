import type { IndustryData } from "@/lib/industries/types";

const automotive: IndustryData = {
  slug: "automotive",
  name: "Auto Shops",
  seoTitle: "Keep the Bays Full and Customers Returning | FYNZ for Automotive | FYNZ",
  seoDescription:
    "FYNZ reminds them when service is due, books the bay, and answers the phone while you're under the hood.",
  hero: {
    category: "Home Services & Trades · Automotive",
    headline: "Keep the bays full and customers returning.",
    subhead:
      "FYNZ reminds them when service is due, books the bay, and answers the phone while you're under the hood.",
    visual: {
      label: "FYNZ Workspace",
      title: "Service Reminders",
      lines: ["Tire Swap Reminder Sent", "Scheduled based on vehicle history"],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "Sound familiar?",
    cards: [
      {
        title: "Forgotten service dates",
        desc: "Customers forget oil or tire changes until something breaks, then go to whoever is closest.",
      },
      {
        title: "Techs answering calls",
        desc: "The counter phone rings while techs are elbow-deep, dropping productivity.",
      },
      {
        title: "Idle bay no-shows",
        desc: "Unconfirmed bookings leave bays empty and technicians standing around doing nothing.",
      },
      {
        title: "No reviews after service",
        desc: "Nobody asks for reviews after a good job, and competitors win on Google search.",
      },
    ],
  },
  benefits: [
    {
      powered: "powered by Workflow AI + Reminders & confirmations · SCHEDULE",
      title: "Service reminders bring them back on time.",
      desc: "Oil, brakes, seasonal tires — reminders by time or season, booked in one tap.",
      preview: "Your seasonal tire swap is due. Book your bay slot: [link]",
    },
    {
      powered: "powered by Missed-call text-back · GROW",
      title: "Missed calls become booked bays.",
      desc: "Every unanswered ring gets an instant text-back with a booking link.",
      preview: "Missed call backfill active",
    },
    {
      powered: "powered by Voice AI",
      title: "The counter phone answers itself.",
      desc: "Hours, pricing questions, and appointment booking handled while your team wrenches.",
      preview: "“Hi! We offer synthetic oil changes at $79. Book a time?”",
    },
    {
      powered: "powered by Conversation AI",
      title: "Customers know what's happening with their car.",
      desc: "'Parts arrived, ready by 3 PM' texts keep the phone from ringing.",
      preview: "Your parts have arrived. Tech starting now. Car ready by 3 PM.",
    },
    {
      powered: "powered by Reviews AI",
      title: "Good work becomes visible work.",
      desc: "Post-service review asks build the rating that fills the bays.",
      preview: "Google Rating: 4.9 ★",
    },
  ],
  demo: {
    eyebrow: "Sequence Flow",
    title: "Seasonal reminder campaign",
    steps: [
      {
        label: "Oct 1",
        sublabel: "Tire swap alert dispatched",
        desc: "SMS alerts sent to 300 clients with winter tire notes.",
      },
      {
        label: "Oct 2",
        sublabel: "Bay bookings rise",
        desc: "Clients book time windows based on tech availability.",
      },
      {
        label: "Oct 3",
        sublabel: "Bays filled out 2 weeks",
        desc: "67 slots claimed within 48 hours.",
      },
      {
        label: "Season",
        sublabel: "Shoulder season bottleneck solved",
        desc: "100% bay utilization ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A day with FYNZ",
    before:
      "Before — bays half-empty during shoulder season while waiting for clients to remember their seasonal maintenance.",
    after:
      "After — the seasonal reminder run books out two weeks of tire swaps in three days, keeping techs busy.",
  },
  faq: [
    {
      q: "Can reminders use vehicle service history?",
      a: "Yes — reminders key off each vehicle's history and last service date for precision timing.",
    },
    {
      q: "Does this work with my shop management system?",
      a: "Yes — integrations support importing customer records and service notes.",
    },
    {
      q: "Can I disable automated bookings for complex diagnostics?",
      a: "Yes — you can set complex diagnostic bookings to require manual approval first.",
    },
  ],
};

export default automotive;
