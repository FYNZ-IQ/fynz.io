import type { Metadata } from "next";
import { SocialLanding } from "@/components/social/SocialLanding";
import { buildSocialMetadata } from "@/components/social/metadata";
import { DEFAULT_SOCIAL_CONTENT } from "@/lib/social/content";

// The general FYNZ Social page. Industry versions live as sibling routes that
// render <SocialLanding /> with a content object spread from
// DEFAULT_SOCIAL_CONTENT — see lib/social/content.ts.
export const metadata: Metadata = buildSocialMetadata(DEFAULT_SOCIAL_CONTENT);

export default function SocialPage() {
  return <SocialLanding content={DEFAULT_SOCIAL_CONTENT} />;
}
