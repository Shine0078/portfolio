import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface GenerateMetadataParams {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}

export function generateMetadata({
  title,
  description,
  path = "/",
  ogImage = "/og-image.png",
}: GenerateMetadataParams = {}): Metadata {
  const baseUrl = siteConfig.siteUrl;
  const pageTitle = title
    ? `${title} — ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.role}`;
  const pageDescription =
    description ??
    "Aspiring programmer and data enthusiast building real-world solutions. Skilled in Python, Java, JavaScript, AWS, and cloud computing.";

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(baseUrl),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${baseUrl}${path}`,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    alternates: { canonical: `${baseUrl}${path}` },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
