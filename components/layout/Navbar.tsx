"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { PRODUCT_LINKS, INDUSTRY_LINKS, ROUTES } from "@/lib/site-nav";

type MenuKey = "product" | "industries" | null;

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const closeTimer = React.useRef<number | null>(null);
  const headerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on Escape / outside click.
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  // Lock body scroll while the mobile drawer is open.
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const show = (key: MenuKey) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(key);
  };
  const hide = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 120);
  };

  // The homepage hero is Navy Deep, so the transparent header inverts to white there.
  const pathname = usePathname();
  const solid = scrolled || open !== null || mobileOpen;
  const inverted = !solid && pathname === "/";

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 border-b border-transparent",
        solid && "bg-[color:var(--warm-white)] shadow-[0_6px_24px_rgba(13,33,84,0.08)] border-line-soft",
        inverted ? "text-white" : "text-navy-900"
      )}
      data-inverted={inverted || undefined}
      onMouseLeave={hide}
    >
      <div className="wrap h-[64px] md:h-[68px] flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="FYNZ IQ home" onClick={() => setMobileOpen(false)}>
          <Image src="/fynz-logo-mark.svg" alt="" width={53} height={30} className="h-[30px] w-auto" priority unoptimized />
          <span className="font-bold text-[1.1rem] tracking-tight">
            FYNZ <span className="font-semibold text-copper">IQ</span>
          </span>
        </Link>

        {/* Desktop menus */}
        <nav className="hidden lg:flex items-center gap-1 ml-2" aria-label="Main">
          <MenuButton
            label="Product"
            active={open === "product"}
            onEnter={() => show("product")}
            onToggle={() => setOpen(open === "product" ? null : "product")}
          />
          <MenuButton
            label="Industries"
            active={open === "industries"}
            onEnter={() => show("industries")}
            onToggle={() => setOpen(open === "industries" ? null : "industries")}
          />
          <TopLink href={ROUTES.pricing} onEnter={() => show(null)}>Pricing</TopLink>
          <TopLink href={ROUTES.learn} onEnter={() => show(null)}>Learn</TopLink>
        </nav>

        <div className="hidden lg:flex items-center gap-2 ml-auto">
          <TopLink href={ROUTES.signIn} onEnter={() => show(null)}>Sign in</TopLink>
          <Link href={ROUTES.bookDemo} prefetch={false} className="btn-copper h-[42px] px-5 text-[0.92rem] py-0">
            Book a demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden ml-auto flex flex-col justify-center gap-[5px] p-2.5 -mr-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={cn("w-[22px] h-[2px] bg-current rounded-sm transition-transform duration-200", mobileOpen && "translate-y-[7px] rotate-45")} />
          <span className={cn("w-[22px] h-[2px] bg-current rounded-sm transition-opacity duration-200", mobileOpen && "opacity-0")} />
          <span className={cn("w-[22px] h-[2px] bg-current rounded-sm transition-transform duration-200", mobileOpen && "-translate-y-[7px] -rotate-45")} />
        </button>
      </div>

      {/* Mega menu (desktop): two columns — products + one-liners left, industries right */}
      <div
        className={cn("mega hidden lg:block absolute left-0 right-0 top-full", open && "open")}
        onMouseEnter={() => open && show(open)}
        onMouseLeave={hide}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="wrap">
          <div className="bg-white rounded-2xl border border-line-soft shadow-[0_24px_60px_rgba(13,33,84,0.16)] p-2 grid grid-cols-[1.5fr_1fr] w-[min(860px,100%)]">
            <div className={cn("p-5 grid grid-cols-2 gap-x-6 gap-y-1", open === "industries" && "opacity-60")}>
              <p className="col-span-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-grey mb-2">Product</p>
              {PRODUCT_LINKS.map((l) => (
                <Link
                  key={l.title}
                  href={l.href}
                  prefetch={false}
                  onClick={() => setOpen(null)}
                  className="group rounded-xl px-3 py-2.5 -mx-3 hover:bg-[color:var(--warm-white)] transition-colors"
                >
                  <div className="font-semibold text-[0.95rem] text-navy-900 group-hover:text-copper">{l.title}</div>
                  <div className="text-[0.82rem] text-grey leading-snug mt-0.5">{l.desc}</div>
                </Link>
              ))}
            </div>
            <div className={cn("p-5 bg-[color:var(--warm-white)] rounded-xl m-1", open === "product" && "opacity-70")}>
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-grey mb-3">Industries</p>
              {INDUSTRY_LINKS.map((l) => (
                <Link
                  key={l.title}
                  href={l.href}
                  prefetch={false}
                  onClick={() => setOpen(null)}
                  className="block font-semibold text-[0.95rem] text-navy-900 hover:text-copper py-2 border-b border-line-soft last:border-0"
                >
                  {l.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[64px] bottom-0 bg-[color:var(--warm-white)] text-navy-900 overflow-y-auto transition-[opacity,transform] duration-200 ease-out",
          mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <div className="wrap py-4 flex flex-col">
          <MobileGroup title="Product">
            {PRODUCT_LINKS.map((l) => (
              <Link key={l.title} href={l.href} prefetch={false} onClick={() => setMobileOpen(false)} className="block py-2.5">
                <div className="font-semibold text-navy-900">{l.title}</div>
                <div className="text-[0.85rem] text-grey">{l.desc}</div>
              </Link>
            ))}
          </MobileGroup>
          <MobileGroup title="Industries">
            {INDUSTRY_LINKS.map((l) => (
              <Link key={l.title} href={l.href} prefetch={false} onClick={() => setMobileOpen(false)} className="block py-2.5 font-semibold text-navy-900">
                {l.title}
              </Link>
            ))}
          </MobileGroup>
          <Link href={ROUTES.pricing} prefetch={false} onClick={() => setMobileOpen(false)} className="font-semibold text-[1.05rem] py-4 border-b border-line-soft">Pricing</Link>
          <Link href={ROUTES.learn} prefetch={false} onClick={() => setMobileOpen(false)} className="font-semibold text-[1.05rem] py-4 border-b border-line-soft">Learn</Link>
          <Link href={ROUTES.signIn} prefetch={false} onClick={() => setMobileOpen(false)} className="font-semibold text-[1.05rem] py-4 border-b border-line-soft">Sign in</Link>
          <div className="flex flex-col gap-3 mt-6">
            <Link href={ROUTES.bookDemo} prefetch={false} onClick={() => setMobileOpen(false)} className="btn-copper w-full">Book a demo</Link>
            <Link href={ROUTES.tryIt} prefetch={false} onClick={() => setMobileOpen(false)} className="btn-ghost w-full">Try it on your phone</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function MenuButton({
  label,
  active,
  onEnter,
  onToggle,
}: {
  label: string;
  active: boolean;
  onEnter: () => void;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onFocus={onEnter}
      onClick={onToggle}
      aria-expanded={active}
      aria-haspopup="true"
      className={cn(
        "inline-flex items-center gap-1 px-3 py-2 rounded-full text-[0.92rem] font-medium hover:text-copper transition-colors",
        active && "text-copper"
      )}
    >
      {label}
      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className={cn("transition-transform duration-200", active && "rotate-180")}>
        <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function TopLink({ href, children, onEnter }: { href: string; children: React.ReactNode; onEnter: () => void }) {
  return (
    <Link
      href={href}
      prefetch={false}
      onMouseEnter={onEnter}
      onFocus={onEnter}
      className="px-3 py-2 rounded-full text-[0.92rem] font-medium hover:text-copper transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="group border-b border-line-soft">
      <summary className="flex justify-between items-center font-semibold text-[1.05rem] py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        {title}
        <svg width="14" height="14" viewBox="0 0 12 12" aria-hidden="true" className="text-copper transition-transform duration-200 group-open:rotate-180">
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className="pb-3">{children}</div>
    </details>
  );
}
