import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { INDUSTRY_NAV, industryHref } from "@/lib/industries/published";

export function Footer() {
  return (
    <footer className="bg-navy-800 text-white border-t border-line-soft pt-[72px] pb-[36px]">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] gap-[36px] mb-[56px]">
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-[11px] shrink-0" aria-label="FYNZ home">
              <Image src="/logo-fynz.png" alt="" width={34} height={29} className="h-[28px] w-auto" />
              <span className="font-display font-extrabold text-[1.22rem] tracking-[0.06em]">FYNZ</span>
            </Link>
            <p className="text-[0.86rem] text-slate-300 my-4 mb-5 max-w-[260px]">
              The all-in-one platform for small business — grow, schedule, sell, and run operations from one place.
            </p>
            <div className="font-mono text-[11px] text-slate-400 leading-loose">
              <a href="mailto:hello@fynz.io" className="hover:text-copper transition-colors">hello@fynz.io</a><br/>
              <span>US &amp; Canada</span>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h5 className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase text-copper mb-4">Product</h5>
            <FooterLink href="/platform">Platform overview</FooterLink>
            <FooterLink href="/grow">GROW</FooterLink>
            <FooterLink href="/schedule">SCHEDULE</FooterLink>
            <FooterLink href="/shop">SHOP</FooterLink>
            <FooterLink href="/ops">OPS</FooterLink>
            <FooterLink href="/ai">FYNZ AI</FooterLink>
            <FooterLink href="/integrations">Integrations</FooterLink>
          </div>
          
          <div className="flex flex-col">
            <h5 className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase text-copper mb-4">Who&apos;s it for</h5>
            {INDUSTRY_NAV.flatMap((column) => column.entries).map((entry) => (
              <FooterLink key={entry.slug} href={industryHref(entry.slug)}>{entry.label}</FooterLink>
            ))}
            <FooterLink href="/industries">All industries</FooterLink>
          </div>
          
          <div className="flex flex-col">
            <h5 className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase text-copper mb-4">Resources</h5>
            <FooterLink href="/resources">Resources</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
            <FooterLink href="/demo">Book a demo</FooterLink>
            <FooterLink href="/onboarding?plan=free">Start free</FooterLink>
          </div>

          <div className="flex flex-col">
            <h5 className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase text-copper mb-4">Company</h5>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/refund">Refund &amp; Cancellation</FooterLink>
          </div>
        </div>
        
        <div className="border-t border-line-soft pt-[26px] flex justify-between items-center gap-5 flex-wrap">
          <span className="font-mono text-[10.5px] text-slate-400 tracking-[0.06em]">© 2026 FYNZ, INC. ALL RIGHTS RESERVED.</span>
          <span className="font-mono text-[10.5px] text-slate-400 tracking-[0.06em]">ALL PRICES IN USD</span>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block text-[0.86rem] text-slate-300 py-1.5 transition-colors hover:text-white">
      {children}
    </Link>
  );
}
