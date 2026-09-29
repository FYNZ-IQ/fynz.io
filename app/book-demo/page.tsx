import type { Metadata } from "next";
import DemoPage from "../demo/page";

export const metadata: Metadata = {
  title: "Book a demo | FYNZ IQ",
  description: "Watch a 20-minute demo built around your business and see how FYNZ IQ answers, follows up, and books jobs for your trade.",
};

export default function BookDemoPage() {
  return <DemoPage />;
}
