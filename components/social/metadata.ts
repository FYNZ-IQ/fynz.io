import type { Metadata } from "next";
import { LEGAL, type SocialPageContent } from "@/lib/social/content";

/** Page metadata (title, description, canonical, Open Graph, Twitter). */
export function buildSocialMetadata(content: SocialPageContent): Metadata {
  const url = `${LEGAL.siteUrl}${content.path}`;
  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: "FYNZ Social",
      title: content.meta.title,
      description: content.meta.description,
      images: [
        {
          url: content.meta.shareImage,
          width: 1200,
          height: 630,
          alt: content.meta.shareImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
      images: [content.meta.shareImage],
    },
  };
}
