import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { Footer } from "@/components/footer";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Indy CM Towing & Rescue | 24/7 Towing Indianapolis",
    template: "%s | Indy CM Towing & Rescue"
  },
  description:
    "Indy CM Towing & Rescue provides fast, professional 24/7 towing services in Indianapolis, Indiana and surrounding areas.",
  keywords: [
    "towing Indianapolis",
    "tow truck Indianapolis",
    "24/7 towing Indianapolis",
    "Indianapolis towing",
    "Indy tow truck"
  ],
  openGraph: {
    title: "Indy CM Towing & Rescue",
    description: "24/7 towing services in Indianapolis, Indiana.",
    url: siteUrl,
    siteName: "Indy CM Towing & Rescue",
    locale: "en_US",
    type: "website"
  }
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Indy CM Towing & Rescue",
  description: "Professional flatbed towing and vehicle transport in Indianapolis and nearby Indiana communities.",
  telephone: ["+1-317-956-0975", "+1-317-441-5776"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indianapolis",
    addressRegion: "IN",
    addressCountry: "US"
  },
  areaServed: [
    "Indianapolis",
    "Speedway",
    "Beech Grove",
    "Lawrence",
    "Greenwood",
    "Plainfield",
    "Carmel",
    "Fishers",
    "Frankfort",
    "Kokomo",
    "Bloomington",
    "Lafayette",
    "Muncie"
  ],
  openingHours: "Mo-Su 00:00-23:59",
  availableLanguage: ["English", "Spanish"],
  url: siteUrl
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
