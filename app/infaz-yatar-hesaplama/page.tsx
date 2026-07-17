import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import InfazYatarForm from "@/components/calculators/InfazYatarForm";

export const metadata: Metadata = {
  title: "İnfaz Yatar Hesaplama (Koşullu Salıverilme)",
  description:
    "Ceza süresi ve suç kategorisine göre tahmini koşullu salıverilme ve denetimli serbestlik tarihini hesaplayın.",
  alternates: {
    canonical: "/infaz-yatar-hesaplama",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/infaz-yatar-hesaplama#tool",
      name: "İnfaz Yatar Hesaplama",
      url: "https://furkanarikan.av.tr/infaz-yatar-hesaplama",
      description:
        "Süreli hapis cezalarında ceza süresi ve suç kategorisine göre tahmini koşullu salıverilme ve denetimli serbestlik tarihini hesaplayan ücretsiz araç.",
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
          name: "Koşullu salıverilme oranı suça göre neden değişir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "5275 sayılı Kanun m.107 uyarınca genel kural cezanın 1/2'sinin infazı iken; kasten öldürme, işkence ve nitelikli olmayan cinsel suçlar gibi bazı suçlarda 2/3, nitelikli cinsel suçlar, uyuşturucu imalat/ticareti ve terör suçlarında 3/4 oranı uygulanır. Bazı ağır örgütlü suçlarda koşullu salıverilme hiç uygulanmaz.",
          },
        },
        {
          "@type": "Question",
          name: "İyi hal koşullu salıverilme süresini kısaltır mı?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hayır. İyi hal, süreyi kısaltan bir indirim değil, koşullu salıverilmenin gerçekleşmesi için aranan bir ön şarttır. İyi hal olmadan hesaplanan tarihte tahliye gerçekleşmez.",
          },
        },
        {
          "@type": "Question",
          name: "Denetimli serbestlik süresi ne kadardır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Genel kural, koşullu salıverilme tarihine son 1 yıl kala açık cezaevi ve iyi hal şartıyla denetimli serbestlikten yararlanılabilmesidir. 30 Mart 2020 öncesi işlenmiş, istisna suçlar hariç kalan suçlarda bu süre Geçici Madde 6 uyarınca 3 yıla çıkar.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://furkanarikan.av.tr/araclar" },
        { "@type": "ListItem", position: 3, name: "İnfaz Yatar Hesaplama", item: "https://furkanarikan.av.tr/infaz-yatar-hesaplama" },
      ],
    },
  ],
};

export default function InfazYatarHesaplamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div className="pt-28 pb-16" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Ücretsiz Araç · Ceza Hukuku
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            İnfaz Yatar Hesaplama
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            Ceza süresi ve suç kategorisine göre tahmini koşullu salıverilme ve denetimli
            serbestlik tarihini hesaplayın.
          </p>
        </div>
      </div>

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <InfazYatarForm />

          <div className="mt-10 pt-8" style={{ borderTop: "1px solid #EBE0D4" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Onlarca istisna bu hesabı değiştirebilir
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#3D5A50" }}>
              Tekerrür (mükerrirlik) hükümleri infaz oranını bağımsız olarak yükseltir. 0-6 yaş
              çocuklu kadın hükümlüler, ağır hasta, engelli ve belirli yaşın üzerindeki hükümlüler
              için denetimli serbestlik süresinde ayrıca farklı (daha uzun) süreler uygulanır.
              Devletin güvenliğine karşı işlenip ağırlaştırılmış müebbetle sonuçlanan bazı örgütlü
              suçlarda koşullu salıverilme hiç uygulanmaz.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3D5A50" }}>
              2020, 2023 ve 2025 yıllarında infaz mevzuatında ek değişiklikler yapılmıştır. Bu
              kadar çok değişkenli bir alanda kesin hesap, dosyanızın infaz hakimliği veya bir
              ceza avukatı tarafından incelenmesini gerektirir.
            </p>
          </div>

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki tavsiye niteliği taşımaz ve kesin bir infaz
            hesabı yerine geçmez.
          </p>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
