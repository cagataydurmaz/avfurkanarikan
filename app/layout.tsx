import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://furkanarikan.av.tr"),
  title: {
    default: "Av. Furkan Arıkan | Hukuk Bürosu - İstanbul",
    template: "%s | Av. Furkan Arıkan Hukuk Bürosu",
  },
  description:
    "Ceza, iş ve gayrimenkul hukukunda İstanbul'da dava takibi ve hukuki danışmanlık hizmeti.",
  keywords: [
    "avukat",
    "İstanbul avukat",
    "ceza avukatı",
    "iş hukuku avukatı",
    "gayrimenkul avukatı",
    "Furkan Arıkan",
    "Beşiktaş avukat",
    "hukuk bürosu",
  ],
  authors: [{ name: "Av. Furkan Arıkan" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Av. Furkan Arıkan | Hukuk Bürosu",
    description:
      "Ceza, iş ve gayrimenkul hukukunda dava takibi ve hukuki danışmanlık.",
    type: "website",
    locale: "tr_TR",
    siteName: "Av. Furkan Arıkan Hukuk Bürosu",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "qO-yMyUS2ZbZ5W3Sk3ONvlQA2QFeGdTR7zXhIm2hfNw",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://furkanarikan.av.tr/#legalservice",
      name: "Av. Furkan Arıkan Hukuk Bürosu",
      url: "https://furkanarikan.av.tr",
      telephone: "+905354874099",
      email: "av.furkanarikan1@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sinanpaşa Mh. Şht. Asım Cd. No:37/12",
        addressLocality: "Beşiktaş",
        addressRegion: "İstanbul",
        postalCode: "34330",
        addressCountry: "TR",
      },
      areaServed: {
        "@type": "City",
        name: "İstanbul",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      knowsLanguage: ["tr", "en"],
    },
    {
      "@type": "Person",
      "@id": "https://furkanarikan.av.tr/#person",
      name: "Furkan Arıkan",
      jobTitle: "Avukat",
      worksFor: {
        "@id": "https://furkanarikan.av.tr/#legalservice",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "MEF Üniversitesi",
          department: "Hukuk Fakültesi",
        },
      ],
      memberOf: {
        "@type": "Organization",
        name: "İstanbul Barosu",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://furkanarikan.av.tr/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: "https://furkanarikan.av.tr",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
