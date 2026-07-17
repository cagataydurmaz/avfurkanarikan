import type { Metadata } from "next";
import { kucukcekmece } from "@/lib/pseo/kucukcekmece";
import { kucukcekmeceServices } from "@/lib/pseo/kucukcekmeceServices";
import { buildPseoJsonLd } from "@/lib/pseo/buildJsonLd";
import PseoPage from "@/components/pseo/PseoPage";

const service = kucukcekmeceServices.find((s) => s.slug === "borclar-hukuku")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: `/${service.urlSlug}` },
  robots: { index: true, follow: true },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    type: "website",
    locale: "tr_TR",
    siteName: "Av. Furkan Arıkan Hukuk Bürosu",
    url: `/${service.urlSlug}`,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: service.metaTitle,
    description: service.metaDescription,
    images: ["/opengraph-image"],
  },
};

const jsonLd = buildPseoJsonLd(kucukcekmece, service);

export default function Page() {
  return (
    <>
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
      <PseoPage district={kucukcekmece} service={service} allServices={kucukcekmeceServices} />
    </>
  );
}
