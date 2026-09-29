import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar, Footer } from "@/components/layout";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FYNZ IQ | We Answer Your Leads and Book Your Jobs",
  description:
    "FYNZ IQ sets up and runs your calls, follow-ups, bookings, and reviews, done for you and built for cleaning, plumbing, accounting firms, and real estate teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={cn("min-h-screen flex flex-col bg-background text-foreground antialiased")}>
        <ThemeProvider attribute="class" forcedTheme="light" disableTransitionOnChange>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
