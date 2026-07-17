import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FazlaMesaiForm from "@/components/calculators/FazlaMesaiForm";

export const metadata: Metadata = {
  title: "Fazla Mesai Ücreti Hesaplama",
  description:
    "İş Kanunu m.41 uyarınca %50 zamlı fazla mesai ücretinizi aylık brüt ücretinize göre hesaplayın.",
  alternates: {
    canonical: "/fazla-mesai-hesaplama",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/fazla-mesai-hesaplama#tool",
      name: "Fazla Mesai Ücreti Hesaplama",
      url: "https://furkanarikan.av.tr/fazla-mesai-hesaplama",
      description: "Aylık brüt ücret ve fazla çalışılan saate göre %50 zamlı fazla mesai ücretini hesaplayan ücretsiz araç.",
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
          name: "Fazla mesai ücreti nasıl hesaplanır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "4857 sayılı İş Kanunu m.41 uyarınca haftalık 45 saati aşan çalışma için normal saatlik ücretin %50 fazlasıyla ödeme yapılır. Saatlik ücret, yerleşik uygulamada aylık brüt ücretin 225'e bölünmesiyle bulunur.",
          },
        },
        {
          "@type": "Question",
          name: "Yıllık fazla mesai üst sınırı var mı?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet, İş Kanunu'na göre bir işçiye yılda toplam 270 saatten fazla fazla çalışma yaptırılamaz.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://furkanarikan.av.tr/araclar" },
        { "@type": "ListItem", position: 3, name: "Fazla Mesai Ücreti Hesaplama", item: "https://furkanarikan.av.tr/fazla-mesai-hesaplama" },
      ],
    },
  ],
};

export default function FazlaMesaiHesaplamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div className="pt-28 pb-16" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Ücretsiz Araç · İş Hukuku
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Fazla Mesai Ücreti Hesaplama
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            Aylık brüt ücretinize göre %50 zamlı fazla mesai ücretinizi hesaplayın.
          </p>
        </div>
      </div>

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <FazlaMesaiForm />

          <div className="mt-10 pt-8" style={{ borderTop: "1px solid #EBE0D4" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              İspat yükü genellikle işçidedir
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#3D5A50" }}>
              Fazla mesai alacağı davalarında en kritik nokta, fazla çalışmanın gerçekten
              yapıldığının ispatıdır (giriş-çıkış kayıtları, tanık beyanı, yazışmalar vb.).
              İşyerinde fazla mesai için ayrıca ücret ödenmesi yerine serbest zaman kullandırılmış
              olması da mümkündür; bu durum hesaplamayı etkiler. Alacağınızı somut belgelerle
              değerlendirmek için bir avukata danışmanız önerilir.
            </p>
          </div>

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki tavsiye niteliği taşımaz.
          </p>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
