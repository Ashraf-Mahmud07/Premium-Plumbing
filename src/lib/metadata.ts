import type { Metadata } from "next";

/**
 * Uniform per-page metadata: unique title/description, canonical, OpenGraph +
 * Twitter card, and the branded OG image (app/opengraph-image.tsx). URLs are
 * resolved against metadataBase from the root layout.
 */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "OX Plumbing",
      locale: "en_US",
      type: "website",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
