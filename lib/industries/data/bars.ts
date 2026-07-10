import type { IndustryData } from "@/lib/industries/types";

const bars: IndustryData = {
  slug: "bars",
  name: "Bars & Pubs",
  seoTitle: "Pack the House on Slow Nights | FYNZ for Bars | FYNZ",
  seoDescription:
    "FYNZ promotes your events, books your tables, and keeps last weekend's crowd coming back.",
  hero: {
    category: "Food & Hospitality · Bars",
    headline: "Pack the house on slow nights.",
    subhead:
      "FYNZ promotes your events, books your tables, and keeps last weekend's crowd coming back.",
    visual: {
      label: "FYNZ Workspace",
      title: "Trivia Night RSVPs",
      lines: ["RSVP Count: 78 Guests", "Full ✓"],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "Sound familiar?",
    cards: [
      {
        title: "Silent event promotion",
        desc: "Trivia or live music night is amazing, but nobody knows it exists.",
      },
      {
        title: "Low weekday revenue",
        desc: "Tuesday revenue doesn't cover staff costs, leading to empty slow nights.",
      },
      {
        title: "Paper booking notebooks",
        desc: "Table and party bookings live in a messy paper notebook behind the bar.",
      },
      {
        title: "Abandoned social media profiles",
        desc: "Social channels die whenever the team gets too busy to write content.",
      },
    ],
  },
  benefits: [
    {
      powered: "powered by Email & SMS campaigns · GROW",
      title: "Every event gets a crowd.",
      desc: "Trivia, live music, game night — announced to your whole list, with a booking link.",
      preview: "Trivia starts at 8! Grab your team and book a table: [link]",
    },
    {
      powered: "powered by Online booking · SCHEDULE + Deposits & payments · SHOP",
      title: "Tables and events book themselves.",
      desc: "Reservations, booth holds, and party bookings — with deposits for the big ones.",
      preview: "VIP Booth Booked • Deposit Paid",
    },
    {
      powered: "powered by Content AI",
      title: "The socials stay alive.",
      desc: "Event posts and weekly content drafted for you, on schedule.",
      preview: "“Ready for live music Friday?...”",
    },
    {
      powered: "powered by Workflow AI",
      title: "Last weekend's crowd is this weekend's plan.",
      desc: "Everyone who booked gets the next event's invite automatically.",
      preview: "Thanks for coming to Jazz night! Get early access to trivia tables: [link]",
    },
    {
      powered: "powered by Reviews AI",
      title: "Your rating brings the walk-ins.",
      desc: "Post-visit review asks keep you top of 'bars near me.'",
      preview: "Google Profile: 4.8 ★",
    },
  ],
  demo: {
    eyebrow: "Sequence Flow",
    title: "Event RSVP dispatch journey",
    steps: [
      {
        label: "Sunday",
        sublabel: "Trivia announcement sent",
        desc: "Invites sent via SMS to 600 past guests.",
      },
      {
        label: "Monday",
        sublabel: "Table bookings roll in",
        desc: "34 tables reserved online with deposits.",
      },
      {
        label: "Tuesday",
        sublabel: "Waitlist activated",
        desc: "Remaining bar stools set as waitlist only.",
      },
      {
        label: "Event",
        sublabel: "Bar filled to capacity",
        desc: "Full house by 7:30 PM ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "A day with FYNZ",
    before:
      "Before — trivia night starts, 9 people show up, and half of them are friends of the bar staff.",
    after:
      "After — the Tuesday invite hits 600 phones Sunday; the bar is full by 7:30 PM, plan intact.",
  },
  proof: {
    stats: [
      { num: "2.5x", label: "Event attendance lift" },
      { num: "+45%", label: "Tuesday night revenue" },
      { num: "100%", label: "Digital deposit collection" },
    ],
    testimonial:
      "“[Bar owner testimonial placeholder — space for a quote about table bookings, trivia crowds, and automated marketing reach.]”",
  },
  faq: [
    {
      q: "Can I take deposits for big party bookings?",
      a: "Yes — you can configure deposits for large groups or booth bookings, refundable on your own terms.",
    },
    {
      q: "Does this require a reservation app?",
      a: "No — customers book directly from a link via SMS or social bios without needing to download anything.",
    },
    {
      q: "Can I promote drink or food specials?",
      a: "Yes — send images of new menu items or drink features to your list to drive traffic.",
    },
  ],
};

export default bars;
