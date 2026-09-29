import type { Metadata } from "next";
import Link from "next/link";
import { Placeholder } from "@/components/home/Placeholder";

export const metadata: Metadata = {
  title: "Sign in | FYNZ IQ",
  description: "Sign in to your FYNZ IQ account.",
};

export default function SignInPage() {
  return (
    <div className="pt-[140px] md:pt-[170px] pb-24">
      <div className="wrap max-w-[520px]">
        <h1 className="font-bold tracking-[-0.03em] leading-[1.05] text-[2.4rem] md:text-[3rem] text-navy-deep mb-4">Sign in</h1>
        <p className="text-[1.05rem] text-grey leading-relaxed mb-8">
          Your FYNZ IQ app lives at <Placeholder>[app sign-in URL]</Placeholder>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="#" className="btn-copper" aria-disabled="true">
            Open the app
          </a>
          <Link href="/book-demo" className="btn-ghost">
            Not a customer yet? Book a demo
          </Link>
        </div>
      </div>
    </div>
  );
}
