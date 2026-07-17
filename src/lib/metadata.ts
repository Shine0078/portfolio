import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface GenerateMetadataParams {
  title?: string;
  description?: string;
}

export function generateMetadata({
  title,
  description,
}: GenerateMetadataParams = {}): Metadata {
  const pageTitle = title
    ? `${title} — ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.role}`;
  const pageDescription = description ?? siteConfig.shortBio;
  const socialImage = `${siteConfig.siteUrl}/og.png`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteConfig.siteUrl),
    applicationName: `${siteConfig.name} Portfolio`,
    authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Technology",
    keywords: [
      "IT analyst",
      "cloud support",
      "IT operations",
      "Active Directory",
      "PowerShell automation",
      "AWS",
      "Oshawa",
      "Samuel Abraham",
    ],
    alternates: { canonical: siteConfig.siteUrl },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: siteConfig.siteUrl,
      siteName: `${siteConfig.name} Portfolio`,
      locale: "en_CA",
      type: "profile",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name}, ${siteConfig.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [socialImage],
    },
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
