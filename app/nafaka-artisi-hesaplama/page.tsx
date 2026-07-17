import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import NafakaArtisiForm from "@/components/calculators/NafakaArtisiForm";
import { CURRENT_UFE_PERIOD, CURRENT_UFE_RATE } from "@/lib/calculators/nafakaArtisi";

export const metadata: Metadata = {
  title: "Nafaka Artış Oranı Hesaplama",
  description: `Mahkeme kararınızda öngörülen yıllık artış oranına (genelde Yİ-ÜFE 12 aylık ortalaması, ${CURRENT_UFE_PERIOD} dönemi için %${CURRENT_UFE_RATE.toString().replace(".", ",")}) göre yeni nafaka tutarını hesaplayın.`,
  alternates: {
    canonical: "/nafaka-artisi-hesaplama",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/nafaka-artisi-hesaplama#tool",
      name: "Nafaka Artış Oranı Hesaplama",
      url: "https://furkanarikan.av.tr/nafaka-artisi-hesaplama",
      description:
        "Mahkeme kararında öngörülen yıllık endeksleme oranına göre güncel nafaka tutarını hesaplayan ücretsiz araç.",
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
          name: "Nafaka artışında hangi endeks kullanılır, TÜFE mi Yİ-ÜFE mi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kira artışından farklı olarak, Yargıtay'ın yerleşik içtihadı nafaka artış davalarında Yİ-ÜFE'nin (üretici fiyat endeksi) on iki aylık ortalamasını esas alır. Davacı açıkça TÜFE talep etmişse ve mahkeme bu talebi kabul etmişse, kararda TÜFE esas alınmış olabilir; bu durumda kararınızdaki ibareye bakmanız gerekir.",
          },
        },
        {
          "@type": "Question",
          name: "Otomatik artış oranı hükmedilmesi, ayrıca nafaka artırım davası açılmasına engel mi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hayır. Kararda otomatik endeksleme öngörülmüş olsa bile, tarafların mali/sosyal koşullarında ciddi bir değişiklik olması halinde TMK m.176/4 uyarınca ayrıca nafaka artırım (veya azaltım) davası açılabilir.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://furkanarikan.av.tr/araclar" },
        { "@type": "ListItem", position: 3, name: "Nafaka Artış Oranı Hesaplama", item: "https://furkanarikan.av.tr/nafaka-artisi-hesaplama" },
      ],
    },
  ],
};

export default function NafakaArtisiHesaplamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div className="pt-28 pb-16" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Ücretsiz Araç · Aile Hukuku
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Nafaka Artış Oranı Hesaplama
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            Mahkeme kararınızda öngörülen yıllık endeksleme oranına göre güncel nafaka tutarınızı
            hesaplayın.
          </p>
        </div>
      </div>

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <NafakaArtisiForm />

          <div className="mt-10 pt-8" style={{ borderTop: "1px solid #EBE0D4" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Bu hesaplama, kararınızda otomatik artış öngörülmüşse geçerlidir
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#3D5A50" }}>
              Her nafaka kararında otomatik yıllık endeksleme hükmü bulunmaz — bu, davacının talep
              etmesi ve mahkemenin kararında buna yer vermesi halinde uygulanır. Kararınızda böyle
              bir hüküm yoksa, mevcut nafaka tutarı ancak yeni bir artırım davasıyla (TMK m.176/4)
              değiştirilebilir; bu durumda güncel TÜFE/Yİ-ÜFE oranı doğrudan uygulanmaz, mahkeme
              yeniden değerlendirme yapar.
            </p>
          </div>

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki tavsiye niteliği taşımaz. Endeks oranları
            TÜİK tarafından her ay güncellenir; kesin hesap için güncel oranı teyit ediniz.
          </p>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
