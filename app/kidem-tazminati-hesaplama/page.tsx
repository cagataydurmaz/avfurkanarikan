import type { Metadata } from "next";
import { pseoTitle } from "@/lib/pseo/pseoTitle";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import KidemTazminatiForm from "@/components/calculators/KidemTazminatiForm";
import ToolBreadcrumb from "@/components/calculators/ToolBreadcrumb";
import ToolExplainer, { formatTL } from "@/components/calculators/ToolExplainer";
import { DAMGA_VERGISI_ORANI, KIDEM_TAVANI, KIDEM_TAVANI_PERIOD } from "@/lib/calculators/kidemTazminati";

export const metadata: Metadata = {
  title: pseoTitle("Kıdem Tazminatı Hesaplama 2026 (Tavan Dahil)"),
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

const ORNEK_BRUT = 40000;
const ORNEK_KIDEM = Math.round((ORNEK_BRUT / 365) * 1095 * 100) / 100;
const ORNEK_DAMGA = Math.round(ORNEK_KIDEM * DAMGA_VERGISI_ORANI * 100) / 100;

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

          <ToolExplainer
            title="Kıdem tazminatı adım adım nasıl hesaplanır?"
            sections={[
              {
                heading: "Nasıl hesaplanır?",
                body: (
                  <>
                    <p>
                      Araç önce giriş ve çıkış tarihleri arasındaki toplam gün sayısını bulur.
                      Bu süre 365 günün altındaysa hesaplama yapılmaz. Süre yeterliyse girdiğiniz
                      brüt ücret, {KIDEM_TAVANI_PERIOD} dönemi tavanı olan{" "}
                      {formatTL(KIDEM_TAVANI)} ile karşılaştırılır ve ikisinden düşük olanı esas
                      alınır.
                    </p>
                    <p>
                      Formül: <strong>esas ücret ÷ 365 × toplam çalışma günü</strong>. Bu, her tam
                      yıl için bir aylık ücret, yılı dolmayan kısım için de oransal ödeme anlamına
                      gelir. Brüt tutardan binde 7,59 damga vergisi düşülerek net tutara ulaşılır.
                      Örneğin {formatTL(ORNEK_BRUT, 0)} brüt ücretle 1095 gün çalışan bir işçi için
                      brüt tazminat {formatTL(ORNEK_KIDEM)}, damga vergisi {formatTL(ORNEK_DAMGA)}
                      olur.
                    </p>
                  </>
                ),
              },
              {
                heading: "Hangi bilgiler gerekir?",
                body: (
                  <ul>
                    <li>
                      <strong>İşe giriş ve çıkış tarihi:</strong> e-Devlet&apos;teki SGK hizmet
                      dökümü ve fesih bildirimi bu tarihleri teyit etmek için kullanılabilir.
                    </li>
                    <li>
                      <strong>Son brüt aylık ücret:</strong> bordrodaki brüt tutar ile düzenli
                      olarak ödenen ek ödemelerin toplamı.
                    </li>
                  </ul>
                ),
              },
              {
                heading: "Dikkat edilmesi gerekenler",
                body: (
                  <ul>
                    <li>
                      Araç güncel dönemin tavanını kullanır. Sözleşmeniz daha önceki bir dönemde
                      sona erdiyse, fesih tarihinde geçerli olan tavanı ayrıca kontrol edin.
                    </li>
                    <li>
                      Araç yalnızca girdiğiniz iki tarih arasını sayar; aynı işverende aralıklı
                      çalışmalarınız varsa bu sürelerin birleştirilip birleştirilemeyeceği ayrıca
                      değerlendirilmelidir.
                    </li>
                    <li>
                      Çıkış tarihi olarak, iş sözleşmesinin hukuken sona erdiği tarihi girin;
                      bu tarih son fiilen çalışılan günden farklı olabilir.
                    </li>
                    <li>
                      Geç ödenen kıdem tazminatına işleyecek faiz ve tahsil masrafları
                      hesaplamaya dahil değildir.
                    </li>
                    <li>
                      Sonuç bilgilendirme amaçlıdır; bordro, hizmet dökümü ve fesih belgeleriyle
                      birlikte değerlendirilmelidir.
                    </li>
                  </ul>
                ),
              },
            ]}
          />

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
