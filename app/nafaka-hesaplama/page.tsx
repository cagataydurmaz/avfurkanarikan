import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import NafakaForm from "@/components/calculators/NafakaForm";

export const metadata: Metadata = {
  title: "Nafaka Hesaplama (Tahmini Aralık)",
  description:
    "Nafakanın yasal olarak sabit bir formülü yoktur. Bu araç, iştirak nafakasında sık kullanılan tahmini bir aralık gösterir.",
  alternates: {
    canonical: "/nafaka-hesaplama",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/nafaka-hesaplama#tool",
      name: "Nafaka Hesaplama (Tahmini Aralık)",
      url: "https://furkanarikan.av.tr/nafaka-hesaplama",
      description:
        "İştirak nafakasında net gelire göre tahmini bir aralık gösteren, resmi olmayan bilgilendirme aracı.",
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
          name: "Nafaka miktarının sabit bir formülü var mı?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hayır. Türk Medeni Kanunu'na göre nafaka miktarı hakimin takdirine bağlıdır; Yargıtay kararlarında sabit bir yüzde veya formül yer almaz. Hakim, çocuğun ihtiyaçları, tarafların gelir ve hayat koşulları, evlilik süresi ve kusur durumu gibi somut kriterleri birlikte değerlendirir.",
          },
        },
        {
          "@type": "Question",
          name: "Nafaka türleri nelerdir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Türk Medeni Kanunu üç nafaka türü düzenler: dava sürerken hükmedilen tedbir nafakası (m.169), velayeti almayan ebeveynin çocuğa katkısı olan iştirak nafakası (m.182/2, 327-330) ve boşanma nedeniyle yoksullaşacak eşe hükmedilen yoksulluk nafakası (m.175).",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://furkanarikan.av.tr/araclar" },
        { "@type": "ListItem", position: 3, name: "Nafaka Hesaplama", item: "https://furkanarikan.av.tr/nafaka-hesaplama" },
      ],
    },
  ],
};

export default function NafakaHesaplamaPage() {
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
            Nafaka Hesaplama
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            Nafaka miktarının sabit bir yasal formülü yoktur; bu araç iştirak nafakasında sık
            kullanılan tahmini bir aralık gösterir.
          </p>
        </div>
      </div>

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <NafakaForm />

          <div className="mt-10 pt-8" style={{ borderTop: "1px solid #EBE0D4" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Hakimin dikkate aldığı gerçek kriterler
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#3D5A50" }}>
              TMK m.330 uyarınca iştirak nafakasında çocuğun ihtiyaçları, ana-babanın hayat
              koşulları ve ödeme gücü, çocuğun varsa kendi geliri birlikte değerlendirilir.
              Yoksulluk nafakasında (m.175-176) ise tarafların kusur durumu, boşanma nedeniyle
              yoksullaşma, yükümlünün mali gücü, evlilik süresi ve hakkaniyet esas alınır.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3D5A50" }}>
              Bu kriterlerin somut olayınıza nasıl uygulanacağı, benzer davalardaki emsal
              kararlara ve tarafların sunacağı delillere bağlıdır. Yukarıdaki aralık yalnızca
              genel bir fikir vermek içindir.
            </p>
          </div>

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki tavsiye niteliği taşımaz ve resmi bir
            hesaplama yöntemine dayanmaz.
          </p>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
