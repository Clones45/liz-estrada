import type { Metadata } from "next";
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
  ],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", type: "image/png" },
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
        url: "/logo-2_transparent.png",
        width: 1169,
        height: 926,
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Nav />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
