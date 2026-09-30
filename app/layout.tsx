import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
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
    default: "Av. Furkan Arıkan | Beşiktaş İstanbul Avukat - Hukuk Bürosu",
    template: "%s | Av. Furkan Arıkan",
  },
  description:
    "Beşiktaş'ta İstanbul Barosu'na kayıtlı avukat Furkan Arıkan; ceza, iş, gayrimenkul, aile ve icra hukukunda İstanbul genelinde dava takibi ve hukuki danışmanlık.",
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
    title: "Av. Furkan Arıkan | Beşiktaş İstanbul Avukat",
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
      image: "https://furkanarikan.av.tr/furkan-arikan.jpg",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.0444231,
        longitude: 29.0044619,
      },
      hasMap: "https://maps.app.goo.gl/WZaamb3xkA74MTkW6",
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
      sameAs: [
        "https://www.linkedin.com/in/avfurkanar%C4%B1kan/",
        "https://maps.app.goo.gl/WZaamb3xkA74MTkW6",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://furkanarikan.av.tr/#person",
      name: "Furkan Arıkan",
      jobTitle: "Avukat",
      worksFor: {
        "@id": "https://furkanarikan.av.tr/#legalservice",
      },
      sameAs: ["https://www.linkedin.com/in/avfurkanar%C4%B1kan/"],
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
      <GoogleAnalytics gaId="G-4PDE3GQX22" />
    </html>
  );
}
