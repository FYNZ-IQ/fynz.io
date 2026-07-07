"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ScrollReveal, StaggerGroup, CountUp } from "@/components/animations";
import { Chip, ArrowLink } from "@/components/shared";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

/* ---- Hero revenue-streams ledger ---- */
const STREAMS = [
  { label: "Services", note: "BOOKINGS + DEPOSITS", amount: "$2,840", width: 66 },
  { label: "Products", note: "STORE + GIFT CARDS", amount: "$612", width: 15 },
  { label: "Memberships", note: "RECURRING · AUTO-BILLED", amount: "$828", width: 19 }
];

/* ---- Benefit rows: every way to charge ---- */
const BENEFIT_ROWS = [
  {
    chip: "STORE",
    title: "Your storefront, open around the clock",
    desc: "Sell products, gift cards, and service packages from a store that matches your brand. Inventory, order notifications, and customer records all update themselves — no separate e-commerce subscription.",
    links: [{ label: "Online store & products", href: "/features/store" }],
    reversed: false,
    viz: (
      <div className="bg-gradient-to-br from-white to-secondary dark:from-navy-800 dark:to-navy-750 border border-line rounded-[var(--r-lg)] p-5 shadow-md relative overflow-hidden">
        <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-faint mb-3.5 flex justify-between">
          STORE · MAPLE &amp; MAIN <b className="text-copper font-medium">3 ORDERS TODAY</b>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { name: "Gift card", price: "$100" },
            { name: "Styling pomade", price: "$24" },
            { name: "Balayage pkg", price: "$180" }
          ].map((p) => (
            <div key={p.name} className="bg-secondary border border-line-soft rounded-[var(--r-sm)] p-3 text-center">
              <span className="h-11 rounded-md mb-2.5 grid place-items-center bg-gradient-to-br from-copper-tint to-copper/5 border border-copper/20 text-copper text-sm">◇</span>
              <b className="font-display text-[0.72rem] font-semibold block leading-tight">{p.name}</b>
              <small className="font-mono text-[9.5px] text-copper">{p.price}</small>
              <span className="block mt-2 font-mono text-[8.5px] tracking-[0.12em] py-1 border border-line-soft rounded-md text-faint">ADD</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    chip: "PAYMENTS",
    title: "Text-to-pay: the invoice they settle from the couch",
    desc: "Send a payment link by SMS and get paid before dinner — cards, PayPal, Square, tap-to-pay in person. Unpaid invoices nudge themselves so you never have to write the awkward follow-up.",
    links: [
      { label: "Payments", href: "/features/payments" },
      { label: "Invoicing", href: "/features/invoicing" }
    ],
    reversed: true,
    viz: (
      <div className="bg-gradient-to-br from-white to-secondary dark:from-navy-800 dark:to-navy-750 border border-line rounded-[var(--r-lg)] p-5 shadow-md relative overflow-hidden">
        <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-faint mb-3.5 flex justify-between">
          TEXT-TO-PAY · INVOICE #1047 <b className="text-copper font-medium">PAID IN 4 MIN</b>
        </div>
        <div className="flex flex-row-reverse gap-2.5 mb-2.5 items-start">
          <span className="bg-green/10 text-green w-[30px] h-[30px] rounded-[9px] shrink-0 grid place-items-center font-mono text-[10px] font-semibold">MM</span>
          <div className="bg-copper-tint border border-copper/25 rounded-[12px_4px_12px_12px] px-3 py-2 text-[0.82rem] text-ink">
            Hi Rachel! Today&apos;s deep clean is done ✓ Here&apos;s your invoice: fynz.pay/1047
          </div>
        </div>
        <div className="flex gap-2.5 mb-2.5 items-start">
          <span className="bg-green/10 text-green w-[30px] h-[30px] rounded-[9px] shrink-0 grid place-items-center font-mono text-[10px] font-semibold">RC</span>
          <div className="bg-secondary border border-line-soft rounded-[4px_12px_12px_12px] px-3 py-2 text-[0.82rem] text-muted">
            Paid! Thanks for the great work 🙌
          </div>
        </div>
        <div className="flex justify-between items-center bg-secondary border border-line-soft rounded-[var(--r-sm)] px-3.5 py-2.5">
          <div>
            <b className="text-[0.83rem] font-semibold block">Invoice #1047 — deep clean pkg</b>
            <small className="font-mono text-[9px] text-faint">CARD · 1 TAP · RECEIPT SENT</small>
          </div>
          <span className="font-mono text-[0.82rem] text-green">+$185.00</span>
        </div>
      </div>
    )
  },
  {
    chip: "ESTIMATES & E-SIGN",
    title: "From estimate to signed deal, no printer involved",
    desc: "Send estimates and proposals customers can approve with an e-signature from their phone. The moment they sign, the deposit invoice fires automatically — the job is real before the ink metaphor dries.",
    links: [{ label: "Estimates, proposals & e-signatures", href: "/features/invoicing" }],
    reversed: false,
    viz: (
      <div className="bg-gradient-to-br from-white to-secondary dark:from-navy-800 dark:to-navy-750 border border-line rounded-[var(--r-lg)] p-5 shadow-md relative overflow-hidden">
        <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-faint mb-3.5 flex justify-between">
          PROPOSAL · KITCHEN REPAINT <b className="text-copper font-medium">SIGNED</b>
        </div>
        <div className="flex flex-col">
          {[
            { icon: "📄", label: "Estimate sent — $2,400", when: "MON 9:14 AM" },
            { icon: "👀", label: "Viewed by client", when: "MON 12:02 PM" },
            { icon: "✍", label: "E-signed on phone", when: "MON 12:06 PM" },
            { icon: "$", label: "Deposit invoice auto-sent → paid", when: "MON 12:07 PM · AUTOMATION" }
          ].map((n, i, arr) => (
            <React.Fragment key={n.label}>
              <div className="flex items-center gap-2.5 bg-secondary border border-line-soft rounded-[var(--r-sm)] px-3.5 py-2.5">
                <span className="w-[26px] h-[26px] rounded-[7px] bg-copper-tint text-copper grid place-items-center font-mono text-[10px] shrink-0">{n.icon}</span>
                <b className="text-[0.8rem] font-semibold">{n.label}</b>
                <small className="font-mono text-[9px] text-faint ml-auto">{n.when}</small>
              </div>
              {i < arr.length - 1 && <span className="w-px h-4 ml-[26px] bg-gradient-to-b from-copper/60 to-copper/15" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    )
  },
  {
    chip: "RECURRING",
    title: "Memberships & courses: revenue that repeats itself",
    desc: "Sell monthly plans, class packs, and online courses — billing, access, and renewals handled automatically. Failed cards get retried and dunned without you noticing, let alone chasing.",
    links: [{ label: "Memberships & courses", href: "/features/memberships" }],
    reversed: true,
    viz: (
      <div className="bg-gradient-to-br from-white to-secondary dark:from-navy-800 dark:to-navy-750 border border-line rounded-[var(--r-lg)] p-5 shadow-md relative overflow-hidden">
        <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-faint mb-3.5 flex justify-between">
          RECURRING · THIS MONTH <b className="text-copper font-medium">$3,290 MRR</b>
        </div>
        {[
          { name: "Gold membership × 24", note: "RENEWED AUTOMATICALLY", amt: "+$1,920" },
          { name: "“Color at home” course × 11", note: "SELF-SERVE ENROLLMENT", amt: "+$935" },
          { name: "Failed card — retried & recovered", note: "DUNNING AUTOMATION", amt: "+$80" }
        ].map((o) => (
          <div key={o.name} className="flex justify-between items-center bg-secondary border border-line-soft rounded-[var(--r-sm)] px-3.5 py-2.5 mb-2">
            <div>
              <b className="text-[0.83rem] font-semibold block">{o.name}</b>
              <small className="font-mono text-[9px] text-faint">{o.note}</small>
            </div>
            <span className="font-mono text-[0.82rem] text-green">{o.amt}</span>
          </div>
        ))}
      </div>
    )
  }
];

/* ---- Feature grid ---- */
const FEATURES = [
  { title: "Online store & products", href: "/features/store", desc: "Products, gift cards, and service packages from your own branded storefront — inventory and orders included." },
  { title: "Payments & invoicing", href: "/features/payments", desc: "Cards, text-to-pay, estimates, proposals, and e-signatures — running on Stripe, PayPal, and Square." },
  { title: "Memberships & courses", href: "/features/memberships", desc: "Recurring plans and paid course content, delivered, billed, and dunned automatically." },
  { title: "Communities", href: "/features/communities", desc: "A private member space tied to your plans and courses — included, not another subscription." }
];

/* ---- Outcome stats ---- */
const STATS = [
  { value: "$46M+", label: "Processed for owners" },
  { value: "4 min", label: "Median time to paid" },
  { value: "78%", label: "Of invoices paid same day" },
  { value: "2.7×", label: "Revenue streams per business" }
];

const INVOICE_METHODS = [
  { id: "card", label: "CARD" },
  { id: "paypal", label: "PAYPAL" },
  { id: "text", label: "TEXT-TO-PAY" }
];

type PayState = "due" | "processing" | "paid";

export default function ShopPage() {
  const [method, setMethod] = useState("card");
  const [payState, setPayState] = useState<PayState>("due");

  const pay = () => {
    if (payState !== "due") return;
    setPayState("processing");
    setTimeout(() => setPayState("paid"), 1400);
  };

  return (
    <div className="flex flex-col w-full">
      {/* ============ HERO ============ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-line-soft">
        <div className="absolute inset-0 pointer-events-none bg-radial-[at_18%_30%] from-copper/10 via-transparent to-transparent" />
        <div className="wrap max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
          <div>
            <span className="eyebrow eyebrow-line mb-5">
              <Link href="/platform#shop" className="hover:underline underline-offset-4">Pillar 03 · SHOP</Link>
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.07] mt-5 mb-5">
              Sell anything. Get paid <span className="text-copper">instantly</span>.
            </h1>
            <p className="text-muted text-lg mb-8 max-w-xl">
              Services, products, gift cards, memberships, and courses — with checkout, invoicing, and text-to-pay built in. Money stops waiting on your to-do list.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="#start" />}>
                Start free
              </Button>
              <Button size="lg" variant="outline" render={<Link href="#invoice" />}>
                Try the pay demo
              </Button>
            </div>
            <p className="mt-5 font-mono text-[10.5px] tracking-[0.14em] text-faint">
              RUNS ON THE RAILS YOUR CUSTOMERS ALREADY USE — <b className="text-muted font-medium">STRIPE · PAYPAL · SQUARE</b>
            </p>
          </div>

          {/* Revenue streams ledger */}
          <div>
            <div
              className="bg-gradient-to-br from-white to-secondary border border-line rounded-[var(--r-lg)] p-6 pb-5 shadow-md relative overflow-hidden max-w-[480px] mx-auto lg:ml-auto"
              role="img"
              aria-label="Today's revenue: services, products, and memberships totaling $4,280"
            >
              <span className="absolute top-0 left-[12%] right-[40%] h-px bg-gradient-to-r from-transparent via-copper/70 to-transparent" />
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-faint mb-5 flex justify-between">
                REVENUE · TODAY <b className="text-copper font-medium">LIVE</b>
              </div>
              {STREAMS.map((s) => (
                <div key={s.label} className="mb-4.5">
                  <div className="flex justify-between items-baseline mb-1.5">
                    <span>
                      <b className="font-display text-[0.86rem] font-semibold">{s.label}</b>
                      <small className="font-mono text-[9px] text-faint tracking-[0.1em] ml-2">{s.note}</small>
                    </span>
                    <span className="font-mono text-[0.86rem] text-muted">{s.amount}</span>
                  </div>
                  <div className="h-[7px] rounded-[5px] bg-secondary overflow-hidden">
                    <span className="block h-full rounded-[5px] bg-gradient-to-r from-copper/45 to-copper" style={{ width: `${s.width}%` }} />
                  </div>
                </div>
              ))}
              <div className="border-t border-line-soft mt-5 pt-4 flex justify-between items-baseline">
                <span className="font-mono text-[10px] tracking-[0.18em] text-faint">TODAY&apos;S TOTAL</span>
                <b className="font-mono text-[1.6rem] font-semibold text-ink"><em className="not-italic text-copper">$</em>4,280</b>
              </div>
              <p className="font-mono text-[9.5px] tracking-[0.16em] text-faint text-right mt-3">THREE STREAMS · ONE LEDGER · SYNCED TO OPS</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BENEFIT ROWS ============ */}
      <section className="sec py-20 md:py-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">How SHOP works</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-4">
              Every way to charge, without the <span className="text-copper">chasing</span>
            </h2>
            <p className="text-muted text-lg max-w-xl">
              Four ways money moves through FYNZ — each one wired to the CRM, the calendar, and the books by automation.
            </p>
          </div>

          <div className="flex flex-col gap-20 md:gap-24">
            {BENEFIT_ROWS.map((row) => (
              <ScrollReveal key={row.chip} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className={cn(row.reversed && "lg:order-2")}>
                  <Chip className="mb-4">{row.chip}</Chip>
                  <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-tight mb-3">{row.title}</h3>
                  <p className="text-muted text-lg">{row.desc}</p>
                  <div className="flex flex-col items-start gap-1 mt-2">
                    {row.links.map((l) => (
                      <ArrowLink key={l.href + l.label} href={l.href}>{l.label}</ArrowLink>
                    ))}
                  </div>
                </div>
                <div className={cn(row.reversed && "lg:order-1")}>{row.viz}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INVOICE DEMO (interactive) ============ */}
      <section id="invoice" className="sec py-20 md:py-24 bg-white dark:bg-navy-900 border-b border-line-soft scroll-mt-20">
        <div className="wrap max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[460px_1fr] gap-12 lg:gap-16 items-center">
          {/* Invoice widget */}
          <div className="relative bg-background border border-line rounded-[var(--r-lg)] overflow-hidden shadow-md order-2 lg:order-1 max-w-[480px] w-full mx-auto">
            {payState === "paid" && (
              <span
                className="absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 z-10 pointer-events-none font-mono font-semibold text-3xl tracking-[0.35em] text-green border-[3px] border-green rounded-[10px] pl-7 pr-6 py-2 opacity-90"
                aria-hidden="true"
              >
                PAID
              </span>
            )}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-line-soft">
              <div>
                <b className="font-display text-[0.95rem] font-bold block">Invoice #1048</b>
                <small className="font-mono text-[9px] text-faint tracking-[0.12em]">MAPLE &amp; MAIN SALON · POWERED BY FYNZ</small>
              </div>
              <span
                className={cn(
                  "ml-auto font-mono text-[9px] tracking-[0.16em] px-2.5 py-1 rounded-md border transition-all",
                  payState === "paid"
                    ? "bg-green/10 text-green border-green/35"
                    : "bg-copper-tint text-copper border-copper/30"
                )}
              >
                {payState === "paid" ? "PAID" : "DUE"}
              </span>
            </div>
            <div className="px-5 pt-5 pb-5.5 relative">
              <p className="font-mono text-[10px] tracking-[0.1em] text-faint mb-4 leading-loose">
                BILLED TO <b className="text-muted font-medium">SARAH MITCHELL</b> · THU JUL 9 · NET 7
              </p>
              {[
                { name: "Balayage", note: "2.5 HRS · WITH MAYA", n: "$180.00" },
                { name: "Gloss treatment", note: "ADD-ON", n: "$45.00" },
                { name: "Styling pomade", note: "PRODUCT", n: "$24.00" },
                { name: "Tax", note: "HST 13%", n: "$32.37" }
              ].map((line) => (
                <div key={line.name} className="flex justify-between gap-3 py-2.5 border-b border-line-soft text-[0.86rem]">
                  <span className="text-muted">
                    {line.name}
                    <small className="block font-mono text-[9px] text-faint mt-0.5">{line.note}</small>
                  </span>
                  <span className="font-mono text-ink shrink-0">{line.n}</span>
                </div>
              ))}
              <div className="flex justify-between items-baseline pt-4 pb-4.5">
                <span className="font-mono text-[10px] tracking-[0.18em] text-faint">TOTAL DUE</span>
                <b className="font-mono text-[1.45rem] font-semibold">$281.37</b>
              </div>

              {payState !== "paid" ? (
                <>
                  <div className="flex gap-2 mb-4" role="group" aria-label="Payment method">
                    {INVOICE_METHODS.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setMethod(m.id)}
                        className={cn(
                          "flex-1 font-mono text-[9px] tracking-[0.1em] text-center py-2.5 px-1 border rounded-lg transition-all",
                          method === m.id
                            ? "bg-copper-tint border-copper/45 text-copper"
                            : "border-line-soft text-muted hover:border-copper/40"
                        )}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={pay}
                    disabled={payState === "processing"}
                    className="w-full font-display font-bold text-base py-4 rounded-xl bg-copper text-white transition-all hover:bg-copper/90 hover:-translate-y-px disabled:opacity-80 disabled:cursor-wait disabled:translate-y-0"
                  >
                    {payState === "processing" ? (
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin align-middle" aria-hidden="true" />
                    ) : (
                      "Pay $281.37"
                    )}
                  </button>
                </>
              ) : (
                <div aria-live="polite">
                  <div className="flex flex-col gap-2">
                    {[
                      "RECEIPT EMAILED & TEXTED TO SARAH",
                      "SYNCED TO OPS — BOOKS ALREADY BALANCED",
                      "REVIEW REQUEST QUEUED · SENDS IN 2H"
                    ].map((b) => (
                      <span key={b} className="flex items-center gap-2 font-mono text-[9.5px] tracking-[0.1em] text-green">
                        <span className="text-green">✓</span> {b}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setPayState("due")}
                    className="block mx-auto mt-3.5 font-mono text-[10px] tracking-[0.14em] text-faint hover:text-copper"
                  >
                    ↺ RESET DEMO
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Side copy */}
          <div className="order-1 lg:order-2">
            <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">Live demo</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight mb-4">
              Watch an invoice get <span className="text-copper">paid</span>
            </h2>
            <p className="text-muted text-lg mb-3">
              Hit Pay. That one tap is the whole customer experience — and everything after it is automation: the receipt, the bookkeeping entry, the review request two hours later.
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {[
                <>One-tap checkout on any device — no customer account needed</>,
                <>Same engine for deposits, invoices, store orders, and renewals</>,
                <>Every payment lands in <Link href="/ops" className="text-copper hover:underline">OPS reporting</Link> the moment it clears</>
              ].map((li, i) => (
                <li key={i} className="flex gap-2.5 text-[0.95rem] text-muted">
                  <span className="text-copper font-mono shrink-0">→</span>
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ FEATURE GRID ============ */}
      <section className="sec py-20 md:py-24 border-b border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">Everything in SHOP</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Four features. One <span className="text-copper">ledger</span>.
            </h2>
          </div>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {FEATURES.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className="group bg-background border border-line-soft rounded-[var(--r-md)] p-6 flex flex-col gap-2 transition-all hover:border-copper/40 hover:-translate-y-1"
              >
                <b className="font-display font-semibold text-lg">{f.title}</b>
                <p className="text-sm text-muted flex-1">{f.desc}</p>
                <span className="font-mono text-[11px] tracking-[0.06em] text-copper opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                  LEARN MORE →
                </span>
              </Link>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ============ OUTCOME STATS ============ */}
      <section className="sec-tight py-16 md:py-20 bg-white dark:bg-navy-900 border-y border-line-soft">
        <div className="wrap max-w-7xl mx-auto px-6">
          <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <CountUp value={s.value} className="font-mono font-semibold text-4xl md:text-5xl tracking-tight text-ink block" />
                <span className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-faint block mt-2">{s.label}</span>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="final py-24 relative overflow-hidden text-center bg-radial-[at_bottom_center] from-copper/12 via-transparent to-transparent">
        <div className="wrap max-w-4xl mx-auto px-6 relative z-10">
          <span className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase block mb-3">SHOP · Pillar 03</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
            Charge for everything you&apos;re <span className="text-copper">worth</span>.
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            And every dollar lands in the OPS pillar on its own — reported, reconciled, ready for tax time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-copper hover:bg-copper/90 text-white font-semibold" render={<Link href="#start" />}>
              Start free
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/ops" />}>
              Next pillar: OPS →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
