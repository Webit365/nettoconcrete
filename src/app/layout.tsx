import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema, baseUrl } from "@/lib/seo";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Condensed, industrial display face for headings — fits the construction brand.
const display = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#15181c",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default:
      "Netto Concrete Construction | Concrete Contractor in Watertown, NY",
    template: "%s | Netto Concrete Construction",
  },
  description:
    "Commercial, farm & residential concrete contractor in Watertown, NY. Poured foundations, driveways, stamped concrete, retaining walls & repairs across Jefferson, Lewis & St. Lawrence counties. Free quotes.",
  applicationName: site.legalName,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  keywords: [
    "concrete contractor Watertown NY",
    "poured foundations",
    "stamped concrete",
    "concrete driveways",
    "agricultural concrete",
    "Jefferson County concrete",
    "Northern New York concrete",
  ],
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: site.legalName,
    title: "Netto Concrete Construction | Concrete Contractor in Watertown, NY",
    description:
      "Commercial, farm & residential concrete work across Northern New York. Free quotes — call (315) 408-4158.",
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  verification: {
    // Add your Google Search Console token here after verifying the domain.
    // google: "xxxxxxxx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="bg-white font-sans text-ink antialiased">
        <JsonLd data={localBusinessSchema()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-netto-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
