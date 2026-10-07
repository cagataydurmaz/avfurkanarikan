import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { ADLIYE_DISTRICTS } from "@/lib/calculators/adliyeBulucu";

export const metadata: Metadata = {
  title: "İstanbul İlçelerine Göre Avukatlık Hizmetleri",
  description:
    "İstanbul'un 34 ilçesinde ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında ilçeye özel hukuki danışmanlık sayfaları.",
  alternates: { canonical: "/ilceler" },
  openGraph: {
    title: "İstanbul İlçelerine Göre Avukatlık Hizmetleri",
    description:
      "İstanbul'un 34 ilçesinde ilçeye özel hukuki danışmanlık ve dava takibi sayfaları.",
    type: "website",
    locale: "tr_TR",
    siteName: "Av. Furkan Arıkan Hukuk Bürosu",
    url: "/ilceler",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "İstanbul İlçelerine Göre Avukatlık Hizmetleri",
    description:
      "İstanbul'un 34 ilçesinde ilçeye özel hukuki danışmanlık ve dava takibi sayfaları.",
    images: ["/opengraph-image"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://furkanarikan.av.tr/ilceler#page",
      url: "https://furkanarikan.av.tr/ilceler",
      name: "İstanbul İlçelerine Göre Avukatlık Hizmetleri",
      isPartOf: { "@id": "https://furkanarikan.av.tr/#legalservice" },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: ADLIYE_DISTRICTS.map((d, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${d.name} Avukat`,
          url: `https://furkanarikan.av.tr/${d.slug}-avukat`,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "İlçeler", item: "https://furkanarikan.av.tr/ilceler" },
      ],
    },
  ],
};

export default function IlcelerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <div className="pt-28 pb-14" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Hizmet Bölgeleri
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            İstanbul İlçelerine Göre Avukatlık Hizmetleri
          </h1>
          <p className="text-sm max-w-2xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            Ofis Beşiktaş&apos;ta bulunmakla birlikte İstanbul&apos;un tüm ilçelerindeki müvekkillere
            hizmet verilir. Aşağıdaki sayfalarda her ilçenin bağlı olduğu adliye, vergi dairesi ve
            yerel uyuşmazlık türleri hakkında bilgi bulabilirsiniz.
          </p>
        </div>
      </div>

      <main className="py-16 md:py-20" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ADLIYE_DISTRICTS.map((d) => (
              <Link
                key={d.slug}
                href={`/${d.slug}-avukat`}
                className="flex items-center justify-between p-4 rounded-lg border transition-colors duration-200 hover:bg-white"
                style={{ borderColor: "#EBE0D4", color: "#14342B" }}
              >
                <span className="text-sm font-medium">{d.name} Avukat</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          <p className="text-xs leading-relaxed mt-10" style={{ color: "#8A9A93" }}>
            Bu sayfalar genel bilgilendirme amaçlıdır; hukuki danışmanlık niteliği taşımaz.
          </p>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
