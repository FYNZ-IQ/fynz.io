import * as React from "react";
import Link from "next/link";
import Image from "next/image";

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
              <a href="mailto:hello@fynz.com" className="hover:text-copper transition-colors">hello@fynz.com</a><br/>
              <a href="tel:+18005550199" className="hover:text-copper transition-colors">1-800-555-0199</a><br/>
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
            <FooterLink href="/industries/salons">Salons &amp; barbershops</FooterLink>
            <FooterLink href="/industries/clinics">Clinics &amp; dental</FooterLink>
            <FooterLink href="/industries/fitness">Fitness &amp; gyms</FooterLink>
            <FooterLink href="/industries/home-services">Home services</FooterLink>
            <FooterLink href="/industries/real-estate">Real estate</FooterLink>
            <FooterLink href="/industries">All industries</FooterLink>
          </div>
          
          <div className="flex flex-col">
            <h5 className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase text-copper mb-4">Resources</h5>
            <FooterLink href="/resources">Blog</FooterLink>
            <FooterLink href="/resources#docs">Help center</FooterLink>
            <FooterLink href="/resources#guides">Guides</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
            <FooterLink href="#status">System status</FooterLink>
          </div>

          <div className="flex flex-col">
            <h5 className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase text-copper mb-4">Company</h5>
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#careers">Careers</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
            <FooterLink href="#privacy">Privacy</FooterLink>
            <FooterLink href="#terms">Terms</FooterLink>
          </div>
        </div>
        
        <div className="border-t border-line-soft pt-[26px] flex justify-between items-center gap-5 flex-wrap">
          <span className="font-mono text-[10.5px] text-slate-400 tracking-[0.06em]">© 2026 FYNZ, INC. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-2.5">
            <SocialLink href="#x" aria-label="X">
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-slate-400 group-hover:fill-copper transition-colors"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1.6 2H8l4.4 5.9L18.9 2Zm-1.1 18h1.7L7.1 3.7H5.3L17.8 20Z"/></svg>
            </SocialLink>
            <SocialLink href="#instagram" aria-label="Instagram">
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-slate-400 group-hover:fill-copper transition-colors"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.8C2.4 4 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2Zm0 3.6a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.4a1.4 1.4 0 1 0 0-2.9 1.4 1.4 0 0 0 0 2.9Z"/></svg>
            </SocialLink>
            <SocialLink href="#linkedin" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-slate-400 group-hover:fill-copper transition-colors"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1a3.7 3.7 0 0 1 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.3ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.5H3.5V9h3.6v11.5Z"/></svg>
            </SocialLink>
            <SocialLink href="#youtube" aria-label="YouTube">
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-slate-400 group-hover:fill-copper transition-colors"><path d="M23.5 6.5a3 3 0 0 0-2.1-2.2C19.5 3.8 12 3.8 12 3.8s-7.5 0-9.4.5A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z"/></svg>
            </SocialLink>
          </div>
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

function SocialLink({ href, "aria-label": ariaLabel, children }: { href: string; "aria-label"?: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      aria-label={ariaLabel}
      className="w-[34px] h-[34px] border border-line-soft rounded-md grid place-items-center transition-colors hover:border-copper/50 hover:bg-copper-tint group"
    >
      {children}
    </a>
  );
}
