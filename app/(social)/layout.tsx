import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "../social.css";
import { LEGAL } from "@/lib/social/content";

// One sans-serif family, two weights. No other web fonts load on this route.
const fontSocial = Instrument_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-social",
});

export const metadata: Metadata = {
  metadataBase: new URL(LEGAL.siteUrl),
};

export default function SocialRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontSocial.variable}>
      <body className="min-h-screen flex flex-col bg-warm-white text-navy-deep">
        {children}
      </body>
    </html>
  );
}
