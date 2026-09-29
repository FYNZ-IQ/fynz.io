import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Placeholder } from "@/components/home/Placeholder";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Answer every call", href: "/#answer-every-call" },
      { label: "Follow up fast", href: "/#follow-up-fast" },
      { label: "Book jobs", href: "/#book-jobs" },
      { label: "Get more reviews", href: "/#get-more-reviews" },
      { label: "AI Voice", href: "/#ai-voice" },
      { label: "Fynz Social", href: "/#fynz-social" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Cleaning", href: "/industries/cleaning" },
      { label: "Plumbing", href: "/industries/plumbing" },
      { label: "Accounting Firms", href: "/industries/accounting-firms" },
      { label: "Real Estate Teams", href: "/industries/real-estate-teams" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Learn", href: "/learn" },
      { label: "Webinars", href: "/learn#webinars" },
      { label: "Guides", href: "/learn#guides" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Sign in", href: "/signin" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Anti-spam and Consent Policy", href: "/anti-spam" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-9">
      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_repeat(5,1fr)] gap-x-8 gap-y-10 mb-14">
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col">
            <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="FYNZ IQ home">
              <Image src="/fynz-logo-mark.svg" alt="" width={57} height={32} className="h-[32px] w-auto" loading="lazy" unoptimized />
              <span className="font-bold text-[1.1rem] tracking-tight">
                FYNZ <span className="font-semibold text-copper">IQ</span>
              </span>
            </Link>
            <p className="text-[0.9rem] text-white/70 mt-4 max-w-[260px] leading-relaxed">
              We answer your leads and book your jobs. You do the work.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col">
              <h2 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-copper mb-3">{col.title}</h2>
              {col.links.map((l) => (
                <Link key={l.label} href={l.href} prefetch={false} className="block text-[0.9rem] text-white/75 py-1.5 transition-colors hover:text-white">
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-6 text-[0.82rem] text-white/60 flex flex-wrap gap-x-3 gap-y-2 items-center">
          <span>© 2026 Fynz IQ Inc.</span>
          <span aria-hidden="true">·</span>
          <span>Toronto, Ontario</span>
          <span aria-hidden="true">·</span>
          <Placeholder>[email]</Placeholder>
          <span aria-hidden="true">·</span>
          <Placeholder>[phone]</Placeholder>
        </div>
      </div>
    </footer>
  );
}
