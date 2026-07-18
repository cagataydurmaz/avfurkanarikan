import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import DavaHarciForm from "@/components/calculators/DavaHarciForm";
import ToolBreadcrumb from "@/components/calculators/ToolBreadcrumb";

export const metadata: Metadata = {
  title: "Dava Harcı Hesaplama",
  description:
    "Mahkeme türü ve dava değerine göre dava açılışında ödenecek başvurma harcı ve peşin harcı hesaplayın.",
  alternates: {
    canonical: "/dava-harci-hesaplama",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/dava-harci-hesaplama#tool",
      name: "Dava Harcı Hesaplama",
      url: "https://furkanarikan.av.tr/dava-harci-hesaplama",
      description: "Mahkeme türü ve dava değerine göre başvurma harcı ve peşin harcı hesaplayan ücretsiz araç.",
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
          name: "Dava açarken hangi harçlar ödenir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dava açılışında maktu (sabit) başvurma harcı ve konusu para olan davalarda ayrıca dava değerinin binde 68,31'i oranındaki nispi harcın 1/4'ü olan peşin harç ödenir. Nispi harcın kalan 3/4'ü karar kesinleştiğinde tahsil edilir.",
          },
        },
        {
          "@type": "Question",
          name: "Başvurma harcı mahkeme türüne göre değişir mi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. 2026 itibarıyla Sulh Hukuk Mahkemesi'nde 335,20 TL, Asliye Hukuk/Ticaret/Aile/İdare Mahkemelerinde 732,00 TL, Bölge Adliye Mahkemesi ve Yargıtay'da 1.124,50 TL maktu başvurma harcı uygulanır.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://furkanarikan.av.tr/araclar" },
        { "@type": "ListItem", position: 3, name: "Dava Harcı Hesaplama", item: "https://furkanarikan.av.tr/dava-harci-hesaplama" },
      ],
    },
  ],
};

export default function DavaHarciHesaplamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div className="pt-28 pb-16" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Ücretsiz Araç · Yargılama Giderleri
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Dava Harcı Hesaplama
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            Mahkeme türü ve dava değerine göre dava açılışında ödenecek harçları hesaplayın.
          </p>
        </div>
      </div>

      <ToolBreadcrumb current="Dava Harcı Hesaplama" />

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <DavaHarciForm />

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki tavsiye niteliği taşımaz. Harç tutarları her
            yıl Ocak ayında yeniden değerleme oranıyla güncellenir.
          </p>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
