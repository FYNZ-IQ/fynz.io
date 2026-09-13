import type { Metadata } from "next";
import { Instrument_Sans, Sora } from "next/font/google";
import "../social.css";
import { LEGAL } from "@/lib/social/content";

// Two weights total: Sora 700 for display, Instrument Sans 400 for body.
const fontDisplay = Sora({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-social-display",
});

const fontBody = Instrument_Sans({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-social",
});

export const metadata: Metadata = {
  metadataBase: new URL(LEGAL.siteUrl),
};

// Runs before first paint: marks the document as JS-capable (so elements that
// animate in can start hidden without a flash) and honours reduced motion.
const bootScript = `
(function(){var d=document.documentElement;d.classList.add('has-js');
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('reduced');}})();
`;

export default function SocialRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="min-h-screen flex flex-col bg-navy-deep text-warm-white">
        {children}
      </body>
    </html>
  );
}
