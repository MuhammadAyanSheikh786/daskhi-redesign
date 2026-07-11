import type { Metadata } from "next";
import { Inter, Yeseva_One } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const yeseva = Yeseva_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yeseva",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dar e Arqam Schools Karachi | Excellence in This World & the Hereafter",
    template: "%s | Dar e Arqam Schools Karachi",
  },
  description:
    "Dar e Arqam Schools Karachi extends its unique learning experience to well over 12,000+ students in 50+ branches all across Karachi. Quality education rooted in Islamic values.",
  keywords: [
    "Dar e Arqam Schools",
    "DAS Karachi",
    "Islamic schools Karachi",
    "private schools Karachi",
    "school admissions 2025",
  ],
  openGraph: {
    title: "Dar e Arqam Schools Karachi",
    description:
      "Quality education rooted in Islamic values. 12,000+ students across 50+ branches in Karachi.",
    url: "https://daskhi.org",
    siteName: "Dar e Arqam Schools Karachi",
    locale: "en_PK",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Dar e Arqam Schools Karachi",
  url: "https://daskhi.org",
  telephone: "021-34811715",
  address: {
    "@type": "PostalAddress",
    streetAddress: "B9 Gulshan e Iqbal Block 4A",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    ratingCount: "1250",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${yeseva.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col selection:bg-accent selection:text-ink">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
