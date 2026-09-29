import type { Metadata } from "next";
import Link from "next/link";
import { Placeholder } from "@/components/home/Placeholder";

export const metadata: Metadata = {
  title: "Learn with FYNZ IQ | Lives, Webinars, and Guides",
  description:
    "Free lives, webinars, and short guides on getting more jobs from the calls and leads you already have.",
};

export default function LearnPage() {
  return (
    <div className="pt-[120px] md:pt-[150px] pb-24">
      <div className="wrap">
        <h1 className="font-bold tracking-[-0.03em] leading-[1.05] text-[2.4rem] md:text-[3.4rem] text-navy-deep mb-4">
          Learn with us, live.
        </h1>
        <p className="text-[1.05rem] md:text-[1.2rem] text-grey leading-relaxed max-w-[640px] mb-14">
          Free lives, webinars, and short guides on getting more jobs from the calls and leads you already have.
        </p>

        <section id="lives" className="scroll-mt-24 mb-14">
          <h2 className="font-bold tracking-tight text-[1.6rem] text-navy-deep mb-4">Lives</h2>
          <div className="pcard p-7">
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-copper">Latest live</span>
            <h3 className="font-bold tracking-tight text-[1.25rem] text-navy-deep mt-2 mb-4">
              <Placeholder className="whitespace-normal!">[Title of latest live replay]</Placeholder>
            </h3>
            <p className="text-grey"><Placeholder className="whitespace-normal!">[Replay embed or link]</Placeholder></p>
          </div>
        </section>

        <section id="webinars" className="scroll-mt-24 mb-14">
          <h2 className="font-bold tracking-tight text-[1.6rem] text-navy-deep mb-4">Webinars</h2>
          <div className="pcard p-7">
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-copper">Next webinar</span>
            <h3 className="font-bold tracking-tight text-[1.25rem] text-navy-deep mt-2 mb-4">
              <Placeholder>[Title]</Placeholder> · <Placeholder className="whitespace-normal!">[Date and time, ET]</Placeholder>
            </h3>
            <p className="text-grey"><Placeholder className="whitespace-normal!">[Registration link]</Placeholder></p>
          </div>
        </section>

        <section id="guides" className="scroll-mt-24">
          <h2 className="font-bold tracking-tight text-[1.6rem] text-navy-deep mb-4">Guides</h2>
          <div className="pcard p-7">
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-copper">Guide</span>
            <h3 className="font-bold tracking-tight text-[1.25rem] text-navy-deep mt-2 mb-4">
              5 ways your business loses jobs before you pick up the phone
            </h3>
            <p className="text-grey"><Placeholder className="whitespace-normal!">[Guide content]</Placeholder></p>
          </div>
        </section>

        <p className="mt-14 text-grey">
          Want the short version?{" "}
          <Link href="/#faq" className="font-semibold text-copper hover:text-copper-light">Read the FAQ →</Link>
        </p>
      </div>
    </div>
  );
}
