import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { site, contacts } from "@/lib/site";

const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: site.url ? new URL(site.url) : undefined,
  title: { default: "AEON Media — Your vision, brought to life with purpose", template: "%s | AEON Media" },
  description: site.description,
  alternates: { canonical: "./" },
  openGraph: { title: "AEON Media", description: site.description, type: "website", siteName: "AEON Media", locale: "en_IN", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AEON Media — Your vision, brought to life with purpose" }] },
  twitter: { card: "summary_large_image", title: "AEON Media", description: site.description, images: ["/og-image.png"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  description: site.description,
  url: site.url || undefined,
  contactPoint: contacts.map((c) => ({ "@type": "ContactPoint", contactType: "customer service", name: c.name, telephone: c.tel })),
};

export const viewport: Viewport = { themeColor: "#F8F6F1", viewportFit: "cover", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-charcoal focus:px-4 focus:py-2 focus:text-ivory">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">{children}</main>
        <SiteFooter />
        <MobileCTA />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
