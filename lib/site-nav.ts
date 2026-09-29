/**
 * Site navigation content shared by the header, footer, and homepage.
 * Copy here is FYNZ IQ's own; text in [brackets] is a placeholder.
 */

export type NavLink = { title: string; desc?: string; href: string };

export const PRODUCT_LINKS: NavLink[] = [
  { title: "Answer every call", desc: "Missed calls get an instant text back.", href: "/#answer-every-call" },
  { title: "Follow up fast", desc: "Every lead gets a reply in minutes, not hours.", href: "/#follow-up-fast" },
  { title: "Book jobs", desc: "Customers pick a time on your calendar.", href: "/#book-jobs" },
  { title: "Get more reviews", desc: "Happy customers get asked at the right moment.", href: "/#get-more-reviews" },
  { title: "AI Voice", desc: "Add-on: a voice assistant that answers after hours.", href: "/#ai-voice" },
  { title: "Fynz Social", desc: "Add-on: your social media, done for you.", href: "/#fynz-social" },
];

export const INDUSTRY_LINKS: NavLink[] = [
  { title: "Cleaning", href: "/industries/cleaning" },
  { title: "Plumbing", href: "/industries/plumbing" },
  { title: "Accounting Firms", href: "/industries/accounting-firms" },
  { title: "Real Estate Teams", href: "/industries/real-estate-teams" },
];

export const ROUTES = {
  pricing: "/pricing",
  learn: "/learn",
  bookDemo: "/book-demo",
  signIn: "/signin",
  tryIt: "/#try-it",
} as const;
