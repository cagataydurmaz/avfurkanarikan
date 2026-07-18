import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import VekaletUcretiForm from "@/components/calculators/VekaletUcretiForm";
import ToolBreadcrumb from "@/components/calculators/ToolBreadcrumb";

export const metadata: Metadata = {
  title: "Vekalet Ücreti Hesaplama (AAÜT 2026)",
  description:
    "2025-2026 Avukatlık Asgari Ücret Tarifesi'ne göre dava değerinize karşılık gelen asgari nispi vekalet ücretini hesaplayın.",
  alternates: {
    canonical: "/vekalet-ucreti-hesaplama",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/vekalet-ucreti-hesaplama#tool",
      name: "Vekalet Ücreti Hesaplama",
      url: "https://furkanarikan.av.tr/vekalet-ucreti-hesaplama",
      description: "2025-2026 Avukatlık Asgari Ücret Tarifesi'ne göre dava değerine karşılık gelen asgari nispi vekalet ücretini hesaplayan ücretsiz araç.",
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
          name: "Vekalet ücreti dava değerine göre nasıl hesaplanır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "2025-2026 AAÜT'ye göre dava değeri dilimlere ayrılır ve her dilime azalan bir oran uygulanarak (ilk 600.000 TL için %16'dan başlayıp kademeli düşerek) toplanır. Bu, gelir vergisi dilim hesabına benzer kademeli bir sistemdir.",
          },
        },
        {
          "@type": "Question",
          name: "Bu tarife avukatı bu ücrete mi mecbur bırakır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hayır, tam tersi: bu bir asgari ücrettir. Avukatlık Kanunu m.164/4 uyarınca avukat bu tutarın altında ücret sözleşmesi yapamaz; üzerinde taraflar serbestçe anlaşabilir.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://furkanarikan.av.tr/araclar" },
        { "@type": "ListItem", position: 3, name: "Vekalet Ücreti Hesaplama", item: "https://furkanarikan.av.tr/vekalet-ucreti-hesaplama" },
      ],
    },
  ],
};

export default function VekaletUcretiHesaplamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div className="pt-28 pb-16" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Ücretsiz Araç · Genel
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Vekalet Ücreti Hesaplama
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            2025-2026 AAÜT&apos;ye göre dava değerinize karşılık gelen asgari vekalet ücretini
            hesaplayın.
          </p>
        </div>
      </div>

      <ToolBreadcrumb current="Vekalet Ücreti Hesaplama" />

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <VekaletUcretiForm />

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki tavsiye niteliği taşımaz. Tarife her yıl
            yeniden yayımlanır; güncel oranları teyit ediniz.
          </p>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
