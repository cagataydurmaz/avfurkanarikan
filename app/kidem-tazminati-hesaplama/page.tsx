import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import KidemTazminatiForm from "@/components/calculators/KidemTazminatiForm";
import ToolBreadcrumb from "@/components/calculators/ToolBreadcrumb";
import { KIDEM_TAVANI, KIDEM_TAVANI_PERIOD } from "@/lib/calculators/kidemTazminati";

export const metadata: Metadata = {
  title: "Kıdem Tazminatı Hesaplama",
  description: `İşe giriş/çıkış tarihleri ve brüt ücrete göre net kıdem tazminatınızı hesaplayın. ${KIDEM_TAVANI_PERIOD} tavanı (${KIDEM_TAVANI.toLocaleString("tr-TR")} TL) dahil.`,
  alternates: {
    canonical: "/kidem-tazminati-hesaplama",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/kidem-tazminati-hesaplama#tool",
      name: "Kıdem Tazminatı Hesaplama",
      url: "https://furkanarikan.av.tr/kidem-tazminati-hesaplama",
      description:
        "İşe giriş/çıkış tarihleri ve brüt ücret bilgilerine göre brüt ve net kıdem tazminatını hesaplayan ücretsiz araç.",
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
          name: "Kıdem tazminatı almak için en az ne kadar çalışmak gerekir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1475 sayılı İş Kanunu m.14 uyarınca aynı işverene bağlı olarak en az 1 tam yıl (365 gün) kesintisiz çalışmış olmak gerekir. Bu süreyi doldurmayan çalışanlar, fesih sebebi ne olursa olsun kıdem tazminatına hak kazanamaz.",
          },
        },
        {
          "@type": "Question",
          name: "İstifa eden işçi kıdem tazminatı alabilir mi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kural olarak hayır; kendi isteğiyle ve haklı bir sebep göstermeden istifa eden işçi kıdem tazminatına hak kazanamaz. Ancak askerlik, emeklilik (yaş hariç diğer şartların sağlanması), kadın işçinin evlilik tarihinden itibaren 1 yıl içinde işten ayrılması veya işverenin İş Kanunu'nda sayılan yükümlülüklerini ihlali gibi haklı sebeplerle yapılan fesihlerde kıdem tazminatı doğar.",
          },
        },
        {
          "@type": "Question",
          name: "2026 yılı ikinci yarısında kıdem tazminatı tavanı ne kadar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `${KIDEM_TAVANI_PERIOD} döneminde uygulanan kıdem tazminatı tavanı ${KIDEM_TAVANI.toLocaleString("tr-TR")} TL'dir (Hazine ve Maliye Bakanlığı Genelgesi). Brüt aylık ücreti bu tutarın üzerinde olan çalışanlar için kıdem tazminatı hesaplamasında tavan tutar esas alınır.`,
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://furkanarikan.av.tr/araclar" },
        { "@type": "ListItem", position: 3, name: "Kıdem Tazminatı Hesaplama", item: "https://furkanarikan.av.tr/kidem-tazminati-hesaplama" },
      ],
    },
  ],
};

export default function KidemTazminatiHesaplamaPage() {
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
              Ücretsiz Araç · İş Hukuku
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Kıdem Tazminatı Hesaplama
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            İşe giriş/çıkış tarihleri ve brüt ücret bilgilerinizi girin; {KIDEM_TAVANI_PERIOD}
            {" "}tavanı dahil brüt ve net kıdem tazminatınızı görün.
          </p>
        </div>
      </div>

      <ToolBreadcrumb current="Kıdem Tazminatı Hesaplama" />

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <KidemTazminatiForm />

          <div className="mt-10 pt-8" style={{ borderTop: "1px solid #EBE0D4" }}>
            <h2
              className="text-lg font-bold mb-3"
              style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Bu araç, fesih sebebini değerlendirmez
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#3D5A50" }}>
              Hesaplama, kıdem tazminatına <strong>hak kazandığınız</strong> varsayımıyla ne kadar
              tazminat alacağınızı gösterir. Hak kazanıp kazanmadığınız; fesih 1 yılı doldurduktan
              sonra mı gerçekleşti, işveren mi feshetti yoksa siz mi haklı bir sebeple ayrıldınız
              gibi sorulara bağlıdır. Kendi isteğiyle ve haklı sebep göstermeden istifa eden işçi
              kural olarak kıdem tazminatı alamaz.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3D5A50" }}>
              Giydirilmiş brüt ücret hesaplamasında hangi ödemelerin dahil edileceği (düzenli
              yol/yemek yardımı, prim, ikramiye vb.) somut olaya göre değişebilir ve ihtilaf
              konusu olabilir. Durumunuzu netleştirmek için bir avukata danışmanız önerilir; konuyu{" "}
              <Link href="/makaleler/giydirilmis-ucret-kavrami" className="underline font-medium" style={{ color: "#14342B" }}>
                giydirilmiş ücret kavramını anlattığımız makalede
              </Link>{" "}
              Yargıtay kararlarıyla birlikte inceledik.
            </p>
          </div>

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki tavsiye niteliği taşımaz. Kıdem tazminatı
            tavanı Ocak ve Temmuz aylarında yeniden belirlenir; güncel tutarı teyit ediniz.
          </p>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
