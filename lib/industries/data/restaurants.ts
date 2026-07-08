import type { IndustryData } from "@/lib/industries/types";

const restaurants: IndustryData = {
  slug: "restaurants",
  name: "Restaurants",
  seoTitle: "Own Your Guests and Get Them Coming Back | FYNZ for Restaurants",
  seoDescription:
    "FYNZ builds your owned guest list, fills slow nights with SMS campaigns, handles incoming calls, and turns happy meals into five-star reviews.",
  hero: {
    category: "Food & Hospitality · Restaurants",
    headline: "Own your guests and get them coming back.",
    subhead: "The delivery apps keep your customers' names. FYNZ gives them back — and fills your slow nights.",
    visual: {
      label: "FYNZ Dashboard",
      title: "Guest List",
      lines: ["1,247 total guests · 34 covers tonight", "Monday Night Promo — Sent ✓"],
    },
  },
  pain: {
    eyebrow: "The Challenges",
    title: "The problems every restaurant knows",
    cards: [
      {
        title: "The apps own the relationship",
        desc: "Delivery apps take the commission and the customer's name. You cook the food; they keep the data.",
      },
      {
        title: "Monday and Tuesday are ghost towns",
        desc: "Weeknight tables go empty with no way to nudge a crowd into the restaurant on demand.",
      },
      {
        title: "One bad review dominates Google",
        desc: "A single complaint sits at the top for months, costing you walk-ins before you even get a chance.",
      },
      {
        title: "'Are you open?' fifty times a day",
        desc: "Your staff fields the same basic calls all day instead of serving the guests who are already there.",
      },
    ],
  },
  benefits: [
    {
      powered: "Lead capture forms + Customer list · GROW",
      title: "Build a guest list the apps can't touch.",
      desc: "QR codes, Wi-Fi sign-in, and reservations quietly capture names and numbers — yours to keep forever, no middleman.",
      preview: "Scan to join our VIP list — ✓ Added to guest list",
    },
    {
      powered: "Email & SMS campaigns · GROW",
      title: "Slow nights fill on command.",
      desc: "A Monday-night offer goes to your own list — no ad spend, no app commission. Just a text and a link.",
      preview: "🍝 Monday Special — 20% off. 47 replies · 18 bookings confirmed.",
    },
    {
      powered: "Voice AI",
      title: "'Are you open?' answers itself.",
      desc: "Hours, menu questions, and reservations handled on the phone — while your staff runs the floor without interruption.",
      preview: "'Table for 4 at 7:30 PM confirmed ✓ You'll get a text shortly!'",
    },
    {
      powered: "Reviews AI",
      title: "Good nights become good reviews.",
      desc: "Post-visit review requests bury the bad one under a stream of fresh five-stars — sent automatically while the meal is still warm.",
      preview: "★★★★★ 'Best pasta in the city!' — 4.8 average · 214 reviews this quarter",
    },
    {
      powered: "Workflow AI",
      title: "Regulars are made, not hoped for.",
      desc: "First-time guests get a come-back offer. Regulars get birthday and anniversary touches that make them feel seen — all on autopilot.",
      preview: "🎂 Happy Birthday, Elena! Your complimentary dessert is waiting.",
    },
  ],
  demo: {
    eyebrow: "See it in action",
    title: "A slow Monday — reversed by 3 PM",
    steps: [
      {
        label: "3:00 PM",
        sublabel: "Campaign sent — 'Monday Special' to 1,247 guests",
        desc: "🍝 20% off for the next 3 hours. Book your table.",
      },
      {
        label: "3:15 PM",
        sublabel: "47 replies received",
        desc: "Questions, booking links clicked, tables filling fast.",
      },
      {
        label: "5:00 PM",
        sublabel: "18 reservations booked",
        desc: "All confirmed automatically — no staff time spent.",
      },
      {
        label: "7:00 PM",
        sublabel: "Cover count tonight",
        desc: "11 → 34 covers (+23) ✓",
        success: true,
      },
    ],
  },
  beforeAfter: {
    title: "Before and after FYNZ",
    before:
      "Before — Monday, 11 covers: staff standing around with no way to reach guests and zero marketing reach beyond delivery apps that don't share contact details.",
    after:
      "After — the offer goes out at 3 PM and 30+ covers arrive by 7 PM; one SMS campaign to your own list, 47 replies, 18 confirmed reservations.",
  },
  proof: {
    stats: [
      { num: "1,200+", label: "Guest list size built in first 90 days" },
      { num: "+22", label: "Average covers added on promo nights" },
      { num: "4.8★", label: "Average Google rating after 90 days of review requests" },
    ],
    testimonial:
      "“[Placeholder: restaurateur testimonial about guest list growth, slow night improvement, or review impact — to be filled in with a real customer quote.]”",
  },
  faq: [
    {
      q: "Does this replace my reservation platform?",
      a: "It can take bookings directly, or capture guests alongside what you already use — your choice. FYNZ integrates with your existing setup or operates standalone.",
    },
    {
      q: "Can guests opt out of messages?",
      a: "Absolutely — one-word opt-out is always available, and frequency is fully in your control. Guests who opt in choose to hear from you, so engagement stays high.",
    },
    {
      q: "How do QR codes work?",
      a: "A guest scans, fills a 2-field form (name and phone), and joins your list instantly. FYNZ handles the capture and adds them automatically — no manual entry required.",
    },
    {
      q: "How quickly can I send my first campaign?",
      a: "Most restaurants send their first campaign within the first week of setup. Once your list has a few hundred guests, a slow-night offer can make a measurable difference the same evening.",
    },
    {
      q: "Is this suitable for a single-location restaurant?",
      a: "Yes — FYNZ works for single locations and multi-site groups alike. For single locations, the guest list and campaign tools are particularly impactful because every local guest matters.",
    },
  ],
};

export default restaurants;
