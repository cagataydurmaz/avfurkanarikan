import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import TapuHarciForm from "@/components/calculators/TapuHarciForm";
import ToolBreadcrumb from "@/components/calculators/ToolBreadcrumb";

export const metadata: Metadata = {
  title: "Tapu Harcı Hesaplama",
  description:
    "Gayrimenkul satışında satış bedeline göre toplam tapu harcını ve alıcı/satıcı payını hesaplayın.",
  alternates: {
    canonical: "/tapu-harci-hesaplama",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/tapu-harci-hesaplama#tool",
      name: "Tapu Harcı Hesaplama",
      url: "https://furkanarikan.av.tr/tapu-harci-hesaplama",
      description: "Gayrimenkul satışında satış bedeline göre toplam tapu harcını ve alıcı/satıcı payını hesaplayan ücretsiz araç.",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
      author: { "@id": "https://furkanarikan.av.tr/#person" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Tapu harcı oranı nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gayrimenkul satışında toplam tapu harcı, satış bedeli (veya emlak vergisi değerinden yüksekse o tutar) üzerinden binde 40'tır (%4); kanunen alıcı ve satıcı ayrı ayrı %2 öder.",
          },
        },
        {
          "@type": "Question",
          name: "Tapu harcını kim öder, alıcı mı satıcı mı?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kanuna göre harç alıcı ve satıcı arasında %2-%2 paylaştırılır. Ancak taraflar aralarında farklı bir paylaşım kararlaştırabilir; uygulamada satıcının net fiyat istemesi nedeniyle tüm harcın alıcıya yüklenmesi yaygındır.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://furkanarikan.av.tr/araclar" },
        { "@type": "ListItem", position: 3, name: "Tapu Harcı Hesaplama", item: "https://furkanarikan.av.tr/tapu-harci-hesaplama" },
      ],
    },
  ],
};

export default function TapuHarciHesaplamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div className="pt-28 pb-16" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Ücretsiz Araç · Gayrimenkul Hukuku
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Tapu Harcı Hesaplama
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            Satış bedeline göre toplam tapu harcını ve alıcı/satıcı payını hesaplayın.
          </p>
        </div>
      </div>

      <ToolBreadcrumb current="Tapu Harcı Hesaplama" />

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <TapuHarciForm />

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki tavsiye niteliği taşımaz. Tapuda düşük bedel
            beyanı hem cezai hem vergisel risk taşır; gerçek satış bedelinin beyan edilmesi
            önemlidir.
          </p>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
