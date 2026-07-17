import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import KiraStopajiForm from "@/components/calculators/KiraStopajiForm";

export const metadata: Metadata = {
  title: "Kira Stopajı Hesaplama",
  description:
    "Kiracınızın mükellef olup olmamasına göre işyeri kira stopajını (%20) ve mal sahibine ödenecek net tutarı hesaplayın.",
  alternates: {
    canonical: "/kira-stopaji-hesaplama",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/kira-stopaji-hesaplama#tool",
      name: "Kira Stopajı Hesaplama",
      url: "https://furkanarikan.av.tr/kira-stopaji-hesaplama",
      description: "Kiracının mükellefiyet durumuna göre işyeri kira stopajını ve mal sahibine ödenecek net tutarı hesaplayan ücretsiz araç.",
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
          name: "Konut kiralarında stopaj kesilir mi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kural olarak hayır. Belirleyici kriter işyeri/konut ayrımı değil, kiracının kim olduğudur: kiracı gelir/kurumlar vergisi mükellefi olmayan sıradan bir gerçek kişiyse stopaj yükümlülüğü doğmaz.",
          },
        },
        {
          "@type": "Question",
          name: "Kira stopaj oranı nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gelir Vergisi Kanunu m.94/5-a uyarınca kira stopaj oranı %20'dir; bu oran 2009'dan beri sabittir (Covid döneminde kısa süreliğine %10'a indirilip 2022 başında yeniden %20'ye dönmüştür).",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://furkanarikan.av.tr/araclar" },
        { "@type": "ListItem", position: 3, name: "Kira Stopajı Hesaplama", item: "https://furkanarikan.av.tr/kira-stopaji-hesaplama" },
      ],
    },
  ],
};

export default function KiraStopajiHesaplamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div className="pt-28 pb-16" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Ücretsiz Araç · Vergi Hukuku
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Kira Stopajı Hesaplama
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            Kiracınızın mükellefiyet durumuna göre kira stopajını ve mal sahibine ödenecek net
            tutarı hesaplayın.
          </p>
        </div>
      </div>

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <KiraStopajiForm />

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki/mali tavsiye niteliği taşımaz.
          </p>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
