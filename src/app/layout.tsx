import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter, JetBrains_Mono } from "next/font/google";
import { generateMetadata } from "@/lib/metadata";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const GSAPScrollAnimations = dynamic(
  () =>
    import("@/components/GSAPScrollAnimations").then(
      (m) => m.GSAPScrollAnimations
    ),
  { ssr: false }
);

const CursorGlow = dynamic(
  () =>
    import("@/components/CursorGlow").then(
      (m) => m.CursorGlow
    ),
  { ssr: false }
);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
      </head>
      <body className="min-h-screen flex flex-col">
        <CursorGlow />
        <GSAPScrollAnimations />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
