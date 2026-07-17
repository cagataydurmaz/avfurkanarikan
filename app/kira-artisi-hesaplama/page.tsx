import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import KiraArtisiForm from "@/components/calculators/KiraArtisiForm";
import { CURRENT_TUFE_PERIOD, CURRENT_TUFE_RATE } from "@/lib/calculators/kiraArtisi";

export const metadata: Metadata = {
  title: "Kira Artışı Hesaplama (TÜFE)",
  description: `TBK m.344 uyarınca TÜFE 12 aylık ortalama oranına göre yasal kira artış sınırını hesaplayın. Güncel oran: %${CURRENT_TUFE_RATE.toString().replace(".", ",")} (${CURRENT_TUFE_PERIOD}).`,
  alternates: {
    canonical: "/kira-artisi-hesaplama",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/kira-artisi-hesaplama#tool",
      name: "Kira Artışı Hesaplama",
      url: "https://furkanarikan.av.tr/kira-artisi-hesaplama",
      description:
        "TBK m.344 uyarınca TÜFE 12 aylık ortalama değişim oranına göre yasal kira artış sınırını hesaplayan ücretsiz araç.",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "TRY",
      },
      author: { "@id": "https://furkanarikan.av.tr/#person" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kira artışında yasal sınır nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Türk Borçlar Kanunu m.344 uyarınca yenilenen kira dönemlerinde uygulanacak artış oranı, bir önceki kira yılında tüketici fiyat endeksindeki (TÜFE) on iki aylık ortalamalara göre değişim oranını geçemez. Bu sınır hem konut hem çatılı işyeri kiraları için geçerlidir; sözleşmede daha yüksek bir oran yazılmış olsa bile geçersizdir.",
          },
        },
        {
          "@type": "Question",
          name: "Yüzde 25 kira artış sınırı hâlâ geçerli mi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hayır. Konut kiralarına 2022'de getirilen geçici yüzde 25 artış sınırı 1 Temmuz 2024 itibarıyla sona ermiştir. Bugün tek yasal tavan TÜFE'nin on iki aylık ortalamasıdır.",
          },
        },
        {
          "@type": "Question",
          name: "5 yılını dolduran kira sözleşmelerinde artış oranı farklı mı hesaplanır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. TBK m.344 son fıkrasına göre beş yıldan uzun süreli veya beş yılın sonunda yenilenen kira sözleşmelerinde taraflar anlaşamazsa yeni kira bedeli hâkim tarafından TÜFE oranı, kiralananın durumu ve emsal kira bedelleri birlikte değerlendirilerek belirlenir; bu durumda salt TÜFE hesabı yeterli olmayabilir.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://furkanarikan.av.tr/araclar" },
        { "@type": "ListItem", position: 3, name: "Kira Artışı Hesaplama", item: "https://furkanarikan.av.tr/kira-artisi-hesaplama" },
      ],
    },
  ],
};

export default function KiraArtisiHesaplamaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <div className="pt-28 pb-16" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Ücretsiz Araç · Kira Hukuku
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Kira Artışı Hesaplama
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            TBK m.344 uyarınca yenilenen kira döneminde uygulanabilecek yasal azami artış
            oranını (TÜFE 12 aylık ortalaması) hesaplayın.
          </p>
        </div>
      </div>

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <KiraArtisiForm />

          <div className="mt-10 pt-8" style={{ borderTop: "1px solid #EBE0D4" }}>
            <h2
              className="text-lg font-bold mb-3"
              style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Bu oran bir üst sınırdır
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#3D5A50" }}>
              TÜFE 12 aylık ortalaması, taraflarca uygulanabilecek <strong>azami</strong> artış
              oranıdır — taraflar isterse daha düşük bir artışta serbestçe anlaşabilir.
              Sözleşmeye bu oranın üzerinde bir artış maddesi yazılmış olsa bile o kısım
              geçersizdir; kiracı yasal orana göre ödeme yapabilir ve fazla ödenen tutarın
              iadesini isteyebilir.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3D5A50" }}>
              Sözleşmesi beş yılı dolmuş veya beşinci yılın sonunda yenilenen kiralarda taraflar
              anlaşamazsa, yeni bedel yalnızca TÜFE ile değil; hâkim tarafından kiralananın
              durumu ve emsal kira bedelleri de gözetilerek belirlenir. Bu durumda hesap makinesi
              sonucu bağlayıcı değildir, bir avukata danışmanız önerilir.
            </p>
          </div>

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki tavsiye niteliği taşımaz. TÜFE oranı TÜİK
            tarafından her ay güncellenir; kesin hesap için kira yenileme ayınıza ait resmi
            oranı teyit ediniz.
          </p>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
