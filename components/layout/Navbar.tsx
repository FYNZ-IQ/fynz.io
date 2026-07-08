"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled && "bg-nav-bg backdrop-blur-[14px] border-line-soft"
      )}
    >
      <div className="wrap h-[72px] flex items-center gap-[34px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-[11px] shrink-0" aria-label="FYNZ home">
          <Image src="/logo-fynz.png" alt="" width={36} height={31} className="h-[30px] w-auto" priority />
          <span className="font-display font-extrabold text-[1.22rem] tracking-[0.06em]">FYNZ</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1.5 flex-1">
          <NavigationMenu>
            <NavigationMenuList className="gap-1.5">
              
              {/* Features Mega Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-slate-600 dark:text-slate-300 hover:text-copper data-[state=open]:text-copper font-display font-medium text-[0.92rem]">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[min(920px,92vw)] grid grid-cols-5 gap-[22px] p-[26px]">
                    <div className="flex flex-col">
                      <h5 className="font-mono text-[10.5px] font-semibold tracking-[0.2em] uppercase text-copper mb-3 pb-2.5 border-b border-line-soft">Grow</h5>
                      <MenuLink href="/grow">Lead capture</MenuLink>
                      <MenuLink href="/features/crm">CRM &amp; pipelines</MenuLink>
                      <MenuLink href="/features/inbox">Unified inbox</MenuLink>
                      <MenuLink href="/features/marketing">Email &amp; SMS marketing</MenuLink>
                      <MenuLink href="/features/automations">Automations</MenuLink>
                      <MenuLink href="/features/funnels">Funnels &amp; pages</MenuLink>
                      <MenuLink href="/features/reputation">Reviews &amp; reputation</MenuLink>
                    </div>
                    <div className="flex flex-col">
                      <h5 className="font-mono text-[10.5px] font-semibold tracking-[0.2em] uppercase text-copper mb-3 pb-2.5 border-b border-line-soft">Schedule</h5>
                      <MenuLink href="/schedule">Booking core</MenuLink>
                      <MenuLink href="/features/calendar">Smart calendar</MenuLink>
                      <MenuLink href="/features/team">Team management</MenuLink>
                      <MenuLink href="/features/customers">Customer management</MenuLink>
                      <MenuLink href="/features/reminders">Reminders &amp; no-shows</MenuLink>
                    </div>
                    <div className="flex flex-col">
                      <h5 className="font-mono text-[10.5px] font-semibold tracking-[0.2em] uppercase text-copper mb-3 pb-2.5 border-b border-line-soft">Shop</h5>
                      <MenuLink href="/shop">Online store</MenuLink>
                      <MenuLink href="/features/payments">Payments</MenuLink>
                      <MenuLink href="/features/invoicing">Invoicing</MenuLink>
                      <MenuLink href="/features/memberships">Memberships &amp; courses</MenuLink>
                    </div>
                    <div className="flex flex-col">
                      <h5 className="font-mono text-[10.5px] font-semibold tracking-[0.2em] uppercase text-copper mb-3 pb-2.5 border-b border-line-soft">Ops</h5>
                      <MenuLink href="/ops">Ops overview</MenuLink>
                      <MenuLink href="/features/reporting">Reporting</MenuLink>
                      <MenuLink href="/features/accounting">Accounting</MenuLink>
                      <MenuLink href="/features/tax">Tax tools</MenuLink>
                    </div>
                    <div className="flex flex-col">
                      <h5 className="font-mono text-[10.5px] font-semibold tracking-[0.2em] uppercase text-copper mb-3 pb-2.5 border-b border-line-soft">FYNZ AI</h5>
                      <MenuLink href="/ai">All AI agents</MenuLink>
                      <MenuLink href="/ai/voice">Voice AI</MenuLink>
                      <MenuLink href="/ai/conversation">Conversation AI</MenuLink>
                      <MenuLink href="/ai/reviews">Reviews AI</MenuLink>
                      <MenuLink href="/ai/content">Content AI</MenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* AI Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-slate-600 dark:text-slate-300 hover:text-copper data-[state=open]:text-copper font-display font-medium text-[0.92rem]">
                  AI
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[250px] flex flex-col gap-0.5 p-[26px]">
                    <ListItem href="/ai" title="FYNZ AI hub">Meet your whole AI team</ListItem>
                    <ListItem href="/ai/voice" title="Voice AI">Answers every call, 24/7</ListItem>
                    <ListItem href="/ai/conversation" title="Conversation AI">Replies to every message</ListItem>
                    <ListItem href="/ai/reviews" title="Reviews AI">Requests &amp; responds to reviews</ListItem>
                    <ListItem href="/ai/content" title="Content AI">Writes posts, emails &amp; pages</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Who's it for Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-slate-600 dark:text-slate-300 hover:text-copper data-[state=open]:text-copper font-display font-medium text-[0.92rem]">
                  Who&apos;s it for
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[250px] flex flex-col gap-0.5 p-[26px]">
                    <ListItem href="/industries/salons" title="Salons &amp; barbershops" />
                    <ListItem href="/industries/clinics" title="Clinics &amp; dental" />
                    <ListItem href="/industries/fitness" title="Fitness &amp; gyms" />
                    <ListItem href="/industries/restaurants" title="Restaurants" />
                    <ListItem href="/industries/home-services" title="Home services" />
                    <ListItem href="/industries" title="See all industries →" />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/pricing" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-slate-600 dark:text-slate-300 hover:text-copper font-display font-medium text-[0.92rem]")}>
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/resources" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-slate-600 dark:text-slate-300 hover:text-copper font-display font-medium text-[0.92rem]")}>
                  Resources
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-[10px] ml-auto">
          <ModeToggle />
          
          <div className="hidden md:flex items-center gap-[10px]">
             <Link href="/login" className="font-display font-medium text-[0.92rem] text-muted hover:text-ink px-3.5 py-2.5 transition-colors">
               Log in
             </Link>
             <Button className="btn-copper rounded-full h-[45px] px-[22px] text-[0.92rem]">
               Start free
             </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className="md:hidden flex flex-col gap-[5px] p-2.5" aria-label="Open menu">
              <span className="w-[22px] h-[2px] bg-ink rounded-sm transition-transform" />
              <span className="w-[22px] h-[2px] bg-ink rounded-sm transition-opacity" />
              <span className="w-[22px] h-[2px] bg-ink rounded-sm transition-transform" />
            </SheetTrigger>
            <SheetContent side="top" className="bg-navy-900 text-white pt-20 pb-16 px-6 border-none">
              <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
              <div className="flex flex-col">
                <MobileMenuGroup title="Features">
                  <h6 className="font-mono text-[10px] tracking-[0.2em] uppercase text-copper mt-3.5 mb-1">Grow</h6>
                  <MobileLink href="/grow">Lead capture</MobileLink>
                  <MobileLink href="/features/crm">CRM &amp; pipelines</MobileLink>
                  <h6 className="font-mono text-[10px] tracking-[0.2em] uppercase text-copper mt-3.5 mb-1">Schedule</h6>
                  <MobileLink href="/schedule">Booking core</MobileLink>
                  <MobileLink href="/features/calendar">Smart calendar</MobileLink>
                </MobileMenuGroup>
                <MobileMenuGroup title="AI">
                  <MobileLink href="/ai">FYNZ AI hub</MobileLink>
                  <MobileLink href="/ai/voice">Voice AI</MobileLink>
                  <MobileLink href="/ai/conversation">Conversation AI</MobileLink>
                </MobileMenuGroup>
                <MobileLink href="/pricing" className="font-display font-semibold text-[1.05rem] py-[18px] border-b border-line-soft">Pricing</MobileLink>
                <MobileLink href="/resources" className="font-display font-semibold text-[1.05rem] py-[18px] border-b border-line-soft">Resources</MobileLink>
                
                <div className="flex flex-col gap-3 mt-[26px]">
                  <Button variant="outline" className="w-full btn-ghost rounded-full">Log in</Button>
                  <Button className="w-full btn-copper rounded-full">Start free</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MenuLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block text-[0.87rem] text-muted py-1.5 transition-colors hover:text-copper">
      {children}
    </Link>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        render={<Link ref={ref} href={href!} {...props as any} />}
        className={cn(
          "block select-none space-y-1 rounded-lg p-[9px_12px] leading-none no-underline outline-none transition-colors hover:bg-copper-tint hover:text-ink text-muted focus:bg-copper-tint group",
          className
        )}
      >
        <div className="text-[0.88rem] font-semibold font-display text-ink group-hover:text-copper leading-none">{title}</div>
        {children && <p className="text-[0.78rem] leading-snug text-faint group-hover:text-muted mt-1.5">{children}</p>}
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

function MobileMenuGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-line-soft">
      <details className="group">
        <summary className="flex justify-between items-center font-display font-semibold text-[1.05rem] py-[18px] text-left text-white cursor-pointer list-none">
          {title}
          <span className="text-copper text-[0.8em] transition-transform group-open:rotate-180">▾</span>
        </summary>
        <div className="pb-4 px-1">{children}</div>
      </details>
    </div>
  );
}

function MobileLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={cn("block py-[9px] text-slate-200 text-[0.95rem] hover:text-copper", className)}>
      {children}
    </Link>
  );
}
