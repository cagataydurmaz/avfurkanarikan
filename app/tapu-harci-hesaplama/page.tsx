import type { Metadata } from "next";
import { pseoTitle } from "@/lib/pseo/pseoTitle";
import ToolRelated from "@/components/calculators/ToolRelated";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import TapuHarciForm from "@/components/calculators/TapuHarciForm";
import ToolBreadcrumb from "@/components/calculators/ToolBreadcrumb";
import ToolExplainer, { formatTL } from "@/components/calculators/ToolExplainer";
import {
  DONER_SERMAYE_BUYUKSEHIR,
  DONER_SERMAYE_DIGER,
  calculateTapuHarci,
} from "@/lib/calculators/tapuHarci";

export const metadata: Metadata = {
  title: pseoTitle("Tapu Harcı Hesaplama 2026 (Alıcı ve Satıcı)"),
  description:
    "Gayrimenkul satışında satış bedeline göre toplam tapu harcını ve alıcı/satıcı payını hesaplayın.",
  alternates: {
    canonical: "/tapu-harci-hesaplama",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/tapu-harci-hesaplama#tool",
      name: "Tapu Harcı Hesaplama",
      url: "https://furkanarikan.av.tr/tapu-harci-hesaplama",
      description: "Gayrimenkul satışında satış bedeline göre toplam tapu harcını ve alıcı/satıcı payını hesaplayan ücretsiz araç.",
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
          name: "Tapu harcı oranı nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gayrimenkul satışında toplam tapu harcı, satış bedeli (veya emlak vergisi değerinden yüksekse o tutar) üzerinden binde 40'tır (%4); kanunen alıcı ve satıcı ayrı ayrı %2 öder.",
          },
        },
        {
          "@type": "Question",
          name: "Tapu harcını kim öder, alıcı mı satıcı mı?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kanuna göre harç alıcı ve satıcı arasında %2-%2 paylaştırılır. Ancak taraflar aralarında farklı bir paylaşım kararlaştırabilir; uygulamada satıcının net fiyat istemesi nedeniyle tüm harcın alıcıya yüklenmesi yaygındır.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://furkanarikan.av.tr/araclar" },
        { "@type": "ListItem", position: 3, name: "Tapu Harcı Hesaplama", item: "https://furkanarikan.av.tr/tapu-harci-hesaplama" },
      ],
    },
  ],
};

const ORNEK_BEDEL = 5000000;
const ORNEK = calculateTapuHarci(ORNEK_BEDEL, true);

export default function TapuHarciHesaplamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div className="pt-28 pb-16" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Ücretsiz Araç · Gayrimenkul Hukuku
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F4EDE4", fontFamily: "var(--font-heading), Georgia, serif" }}>
            Tapu Harcı Hesaplama
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            Satış bedeline göre toplam tapu harcını ve alıcı/satıcı payını hesaplayın.
          </p>
        </div>
      </div>

      <ToolBreadcrumb current="Tapu Harcı Hesaplama" />

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <TapuHarciForm />

          <ToolExplainer
            title="Tapu harcı nasıl hesaplanır?"
            sections={[
              {
                heading: "Nasıl hesaplanır?",
                body: (
                  <>
                    <p>
                      Araç tapuda beyan edilecek satış bedelini binde 40 (%4) oranıyla çarparak
                      toplam tapu harcını, %2 oranıyla çarparak da alıcı ve satıcının ayrı ayrı
                      payını bulur. Bunlara ek olarak Tapu ve Kadastro Genel Müdürlüğü&apos;nün
                      döner sermaye ücreti gösterilir; araç bu ücret için büyükşehirlerde yaklaşık{" "}
                      {formatTL(DONER_SERMAYE_BUYUKSEHIR, 0)}, diğer illerde yaklaşık{" "}
                      {formatTL(DONER_SERMAYE_DIGER, 0)} esas alır.
                    </p>
                    <p>
                      Örneğin {formatTL(ORNEK_BEDEL, 0)} bedelle büyükşehirde satılan bir dairede
                      toplam harç {formatTL(ORNEK.toplamHarc, 0)}, alıcı ve satıcı payı ayrı ayrı{" "}
                      {formatTL(ORNEK.tarafPayi, 0)} olur. Hesap girdiğiniz bedel üzerinden
                      yapılır; bu bedel emlak vergisi değerinin altındaysa sonuç ödenecek gerçek
                      harcı yansıtmaz.
                    </p>
                  </>
                ),
              },
              {
                heading: "Hangi bilgiler gerekir?",
                body: (
                  <ul>
                    <li>Taraflarca kararlaştırılan gerçek satış bedeli</li>
                    <li>
                      Taşınmazın emlak vergisi değeri: belediyeden alınabilir; beyan edilen bedel
                      bu değerden düşükse harç emlak vergisi değeri üzerinden hesaplanır
                    </li>
                    <li>Taşınmazın büyükşehir sınırları içinde olup olmadığı</li>
                    <li>
                      İşlem başvurusu için ayrıca tapu bilgileri (ada/parsel) ve tarafların kimlik
                      bilgileri gerekir
                    </li>
                  </ul>
                ),
              },
              {
                heading: "Dikkat edilmesi gerekenler",
                body: (
                  <ul>
                    <li>
                      Döner sermaye tutarları yaklaşık değerlerdir ve her yıl yeniden belirlenir;
                      işlem öncesinde güncel tutarı kontrol edin.
                    </li>
                    <li>
                      Araç yalnızca satış işlemini hesaplar. Bağış, miras yoluyla intikal, ipotek
                      veya kat irtifakı gibi işlemler farklı harç kurallarına tabidir.
                    </li>
                    <li>
                      Harç ve döner sermaye ücreti tapudaki imza işleminden önce ödenir; ödeme
                      yapılmadan işlem tamamlanmaz.
                    </li>
                    <li>
                      Kanuni paylaşım %2-%2 olsa da tarafların anlaşması halinde harcın tamamını
                      bir taraf üstlenebilir. Sonuç bilgilendirme amaçlıdır.
                    </li>
                  </ul>
                ),
              },
            ]}
          />

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki tavsiye niteliği taşımaz. Tapuda düşük bedel
            beyanı hem cezai hem vergisel risk taşır; gerçek satış bedelinin beyan edilmesi
            önemlidir.
          </p>

          <ToolRelated links={[{ href: "/makaleler/tapu-iptali-ve-tescil-davasi", label: "Tapu İptali ve Tescil Davası" }, { href: "/calisma-alanlari/gayrimenkul-hukuku", label: "Gayrimenkul Hukuku" }]} />
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
