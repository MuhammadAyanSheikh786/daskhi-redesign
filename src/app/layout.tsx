import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F2ED" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0B" },
  ],
  width: "device-width",
  initialScale: 1,
};

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
    "school admissions 2026",
    "best schools in Karachi",
    "O Level schools Karachi",
    "A Level schools Karachi",
    "Hifz school Karachi",
    "Cambridge school Karachi",
    "Matriculation school Karachi",
    "Dar e Arqam Trust",
    "Islamic education Pakistan",
  ],
  openGraph: {
    title: "Dar e Arqam Schools Karachi",
    description:
      "Quality education rooted in Islamic values. 12,000+ students across 50+ branches in Karachi.",
    url: "https://daskhi.org",
    siteName: "Dar e Arqam Schools Karachi",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dar e Arqam Schools Karachi",
      },
    ],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "Dar e Arqam Schools Karachi",
  url: "https://daskhi.org",
  telephone: "021-34811715",
  email: "info@daskhi.org",
  parentOrganization: {
    "@type": "EducationalOrganization",
    name: "Dar e Arqam Trust",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Karachi",
    },
  ],
  knowsLanguage: ["English", "Urdu", "Arabic"],
  department: [
    {
      "@type": "EducationalProgram",
      name: "Cambridge O-Levels",
      description: "Cambridge International General Certificate of Education Ordinary Level",
    },
    {
      "@type": "EducationalProgram",
      name: "Cambridge A-Levels",
      description: "Cambridge International General Certificate of Education Advanced Level",
    },
    {
      "@type": "EducationalProgram",
      name: "Matriculation",
      description: "Secondary School Certificate (SSC) - Board of Secondary Education Karachi",
    },
    {
      "@type": "EducationalProgram",
      name: "Hifz Program",
      description: "Quran Memorization Program alongside formal education",
    },
  ],
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
  sameAs: [
    "https://www.facebook.com/darearqamschools",
    "https://www.instagram.com/darearqamschoolsofficial",
  ],
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
