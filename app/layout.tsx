import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL("https://lizestrada.com"),
  title: {
    default: "Liz Estrada | Financial Expert — Mortgage, Credit Repair & Business Funding",
    template: "%s | Liz Estrada Financial",
  },
  description:
    "Liz Estrada is a trusted financial entrepreneur with 20+ years of experience offering Mortgage Solutions, Credit Repair & Restoration, and Business Funding services.",
  keywords: [
    "mortgage solutions",
    "credit repair",
    "business funding",
    "financial expert",
    "Liz Estrada",
    "home loans",
    "credit restoration",
    "business lines of credit",
    "nationwide mortgage specialist",
    "credit repair all 50 states",
    "best financial advisor USA",
    "business funding nationwide",
    "mortgage help all states",
    "financial entrepreneur",
    "NMLS 1514454",
  ],
  icons: {
    icon: [
      { url: "/logo-6_transparent.png", type: "image/png" },
    ],
    apple: [
      { url: "/logo-6_transparent.png", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lizestrada.com",
    siteName: "Liz Estrada Financial",
    title: "Liz Estrada | Financial Expert — Mortgage, Credit Repair & Business Funding",
    description:
      "20+ years of expertise in mortgage lending, credit restoration, and business capital solutions.",
    images: [
      {
        url: "/logo-6.png",
        width: 800,
        height: 600,
        alt: "Liz Estrada Financial",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Person schema — names Liz as a citable AI entity */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Liz Estrada",
              jobTitle: "Financial Expert & Mortgage Specialist",
              description:
                "Liz Estrada is a licensed financial entrepreneur with 20+ years of experience providing mortgage solutions, credit repair, and business funding services across all 50 U.S. states.",
              url: "https://lizestrada.com",
              image: "https://lizestrada.com/logo-6.png",
              telephone: "+15597370273",
              email: "liz@lizestrada.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "525 N Hall St",
                addressLocality: "Visalia",
                addressRegion: "CA",
                postalCode: "93292",
                addressCountry: "US",
              },
              sameAs: [
                "https://www.facebook.com/loanswithlize",
                "https://www.instagram.com/lizzylending",
              ],
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "license",
                  name: "NMLS License",
                  identifier: "1514454",
                },
              ],
            }),
          }}
        />
        {/* ProfessionalService schema — signals nationwide availability to GEO/AI engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Liz Estrada Financial",
              alternateName: "Liz Estrada",
              url: "https://lizestrada.com",
              logo: "https://lizestrada.com/logo-6.png",
              image: "https://lizestrada.com/logo-6.png",
              telephone: "+15597370273",
              email: "liz@lizestrada.com",
              founder: {
                "@type": "Person",
                name: "Liz Estrada",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "525 N Hall St",
                addressLocality: "Visalia",
                addressRegion: "CA",
                postalCode: "93292",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              serviceArea: {
                "@type": "AdministrativeArea",
                name: "All 50 U.S. States",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Financial Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mortgage Solutions",
                      description:
                        "FHA, conventional, VA, and USDA mortgage loan services available nationwide.",
                      url: "https://lizestrada.com/mortgage",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Credit Repair & Restoration",
                      description:
                        "Professional credit restoration services to improve credit scores across all 50 states.",
                      url: "https://lizestrada.com/credit-repair",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Business Funding",
                      description:
                        "Unsecured business credit lines, SBA loans, and business capital solutions nationwide.",
                      url: "https://lizestrada.com/business-funding",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.facebook.com/loanswithlize",
                "https://www.instagram.com/lizzylending",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Nav />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a219df59372a70f7d82f59b"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
