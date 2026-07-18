import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import TrafikKazasiForm from "@/components/calculators/TrafikKazasiForm";
import ToolBreadcrumb from "@/components/calculators/ToolBreadcrumb";

export const metadata: Metadata = {
  title: "Trafik Kazası Tazminatı Hesaplama",
  description:
    "Trafik kazası sonrası talep edilebilecek tazminat kalemlerini ve dava açma hakkınızın ne zaman sona ereceğini (zamanaşımını) öğrenin.",
  alternates: {
    canonical: "/trafik-kazasi-tazminati-hesaplama",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/trafik-kazasi-tazminati-hesaplama#tool",
      name: "Trafik Kazası Tazminatı Hesaplama",
      url: "https://furkanarikan.av.tr/trafik-kazasi-tazminati-hesaplama",
      description:
        "Trafik kazası sonrası tazminat davası açma hakkının zamanaşımı süresini hesaplayan ve talep edilebilecek tazminat kalemlerini gösteren ücretsiz araç.",
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
          name: "Trafik kazası sonrası hangi tazminatlar talep edilebilir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TBK m.53-56 uyarınca tedavi gideri, geçici iş göremezlik (kazanç kaybı), sürekli iş göremezlik (maluliyet) tazminatı, araç hasar bedeli, ölüm halinde cenaze gideri ve destekten yoksun kalma tazminatı ile yaralanan ve yakınları için manevi tazminat talep edilebilir.",
          },
        },
        {
          "@type": "Question",
          name: "Trafik kazası tazminat davasında zamanaşımı süresi nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TBK m.72 ve KTK m.109 uyarınca genel kural, zararın ve sorumlunun öğrenilmesinden itibaren 2 yıl, her hâlde kaza tarihinden itibaren 10 yıldır. Olay taksirle yaralama veya taksirle ölüm gibi ceza gerektiren bir suç oluşturuyorsa, daha uzun olan ceza zamanaşımı süresi (8 veya 15 yıl) uygulanır.",
          },
        },
        {
          "@type": "Question",
          name: "Sürekli iş göremezlik veya manevi tazminat tutarı neden hesaplanmıyor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sürekli iş göremezlik tazminatı aktüeryal hesaplama (yaşam tablosu, maluliyet oranı, gelir) gerektirir ve mahkemece atanan bilirkişi tarafından hesaplanır. Manevi tazminat ise tamamen hakim takdirine bağlıdır, kanunda veya içtihatta sabit bir tutar/oran yer almaz. Güvenilir olmayan bir tahmin sunmak yanıltıcı olacağından bu tutarlar hesaplanmaz.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://furkanarikan.av.tr/araclar" },
        { "@type": "ListItem", position: 3, name: "Trafik Kazası Tazminatı Hesaplama", item: "https://furkanarikan.av.tr/trafik-kazasi-tazminati-hesaplama" },
      ],
    },
  ],
};

export default function TrafikKazasiHesaplamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div className="pt-28 pb-16" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Ücretsiz Araç · Tazminat Hukuku
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Trafik Kazası Tazminatı Hesaplama
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            Dava açma hakkınızın ne zaman sona ereceğini (zamanaşımını) hesaplayın ve talep
            edilebilecek tazminat kalemlerini görün.
          </p>
        </div>
      </div>

      <ToolBreadcrumb current="Trafik Kazası Tazminatı Hesaplama" />

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <TrafikKazasiForm />

          <div className="mt-10 pt-8" style={{ borderTop: "1px solid #EBE0D4" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Talep edilebilecek tazminat kalemleri
            </h2>
            <ul className="text-sm leading-relaxed space-y-2 mb-3" style={{ color: "#3D5A50" }}>
              <li><strong>Tedavi gideri</strong> — kaza nedeniyle yapılan sağlık harcamaları</li>
              <li><strong>Geçici iş göremezlik</strong> — iyileşme sürecindeki kazanç kaybı</li>
              <li><strong>Sürekli iş göremezlik (maluliyet)</strong> — kalıcı sakatlık nedeniyle çalışma gücü kaybı, bilirkişi/aktüer hesabı gerektirir</li>
              <li><strong>Araç hasar bedeli</strong> — onarım veya değer kaybı (ayrı bir hesaplama konusudur)</li>
              <li><strong>Destekten yoksun kalma</strong> — ölüm halinde, ölenin desteğinden yoksun kalan yakınları için</li>
              <li><strong>Manevi tazminat</strong> — yaralanan ve ağır durumlarda yakınları için, hakim takdirine bağlı</li>
            </ul>
            <p className="text-sm leading-relaxed" style={{ color: "#3D5A50" }}>
              Zorunlu trafik sigortası (ZMSS) manevi tazminatı kapsamaz. Dava açmadan önce
              sigorta şirketine yazılı başvuru yapılması gerekir (KTK m.97); Sigorta Tahkim
              Komisyonu&apos;na başvuru ise zorunlu değil, seçimliktir.
            </p>
          </div>

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki tavsiye niteliği taşımaz ve tazminat
            tutarını hesaplamaz. Tazminat miktarı somut olayın delillerine ve bilirkişi
            raporlarına göre belirlenir; bir avukata danışmanız önerilir.
          </p>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
