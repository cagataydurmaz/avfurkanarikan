import type { Metadata } from "next";
import ToolRelated from "@/components/calculators/ToolRelated";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import IslahHarciForm from "@/components/calculators/IslahHarciForm";
import ToolBreadcrumb from "@/components/calculators/ToolBreadcrumb";
import ToolExplainer, { formatTL } from "@/components/calculators/ToolExplainer";
import { ASGARI_HARC, NISPI_HARC_ORANI, calculateIslahHarci } from "@/lib/calculators/islahHarci";

export const metadata: Metadata = {
  title: "Islah Harcı Hesaplama 2026",
  description:
    "Dava değerinin ıslah yoluyla artırılması durumunda, artan kısım üzerinden ödenecek ıslah harcını hesaplayın.",
  alternates: {
    canonical: "/islah-harci-hesaplama",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/islah-harci-hesaplama#tool",
      name: "Islah Harcı Hesaplama",
      url: "https://furkanarikan.av.tr/islah-harci-hesaplama",
      description: "Dava değerinin ıslah yoluyla artırılması durumunda artan kısım üzerinden ödenecek harcı hesaplayan ücretsiz araç.",
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
          name: "Islah harcı nasıl hesaplanır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Islah harcı, dava değerinin ıslah edilerek artırılan kısmı üzerinden, dava açılışındaki nispi harç oranıyla (binde 68,31) aynı orandan, peşin harç mantığıyla (1/4) hesaplanır. Zaten ödenmiş olan peşin harç ikinci kez alınmaz, yalnızca fark üzerinden hesaplama yapılır.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://furkanarikan.av.tr/araclar" },
        { "@type": "ListItem", position: 3, name: "Islah Harcı Hesaplama", item: "https://furkanarikan.av.tr/islah-harci-hesaplama" },
      ],
    },
  ],
};

const ORNEK_BUYUK = calculateIslahHarci(50000, 150000);
const ORNEK_KUCUK = calculateIslahHarci(50000, 60000);
const NISPI_BINDE = (NISPI_HARC_ORANI * 1000).toLocaleString("tr-TR", { maximumFractionDigits: 2 });

export default function IslahHarciHesaplamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div className="pt-28 pb-16" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Ücretsiz Araç · Yargılama Giderleri
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Islah Harcı Hesaplama
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            Dava değerinizi ıslah yoluyla artırdığınızda ödeyeceğiniz harcı hesaplayın.
          </p>
        </div>
      </div>

      <ToolBreadcrumb current="Islah Harcı Hesaplama" />

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <IslahHarciForm />

          <ToolExplainer
            title="Islah harcı nasıl hesaplanır?"
            sections={[
              {
                heading: "Nasıl hesaplanır?",
                body: (
                  <>
                    <p>
                      Islah ile dava değeri artırıldığında harç, yeni değerin tamamı üzerinden
                      değil, yalnızca eski ve yeni değer arasındaki fark üzerinden alınır. Araç bu
                      farkı binde {NISPI_BINDE} nispi harç oranıyla çarpar ve sonucun dörtte birini
                      ödenecek harç olarak gösterir. Hesaplanan tutar {formatTL(ASGARI_HARC)}
                      asgari harcın altında kalırsa asgari harç esas alınır. Dava açılışında
                      ödenmiş peşin harç ikinci kez alınmaz.
                    </p>
                    <p>
                      Örneğin 50.000 TL olan dava değeri 150.000 TL&apos;ye çıkarılırsa artan
                      değer {formatTL(ORNEK_BUYUK.artanDeger, 0)}, ıslah harcı{" "}
                      {formatTL(ORNEK_BUYUK.odenecekHarc)} olur. Değer yalnızca 60.000 TL&apos;ye
                      çıkarılırsa hesaplanan {formatTL(ORNEK_KUCUK.hesaplananHarc)} asgari tutarın
                      altında kaldığından {formatTL(ORNEK_KUCUK.odenecekHarc)} ödenir.
                    </p>
                  </>
                ),
              },
              {
                heading: "Hangi bilgiler gerekir?",
                body: (
                  <ul>
                    <li>
                      Mevcut dava değeri: dava dilekçesinde gösterilen veya daha önce harcı
                      yatırılarak artırılmış son değer
                    </li>
                    <li>
                      Islahla ulaşılacak yeni dava değeri (çoğu zaman bilirkişi raporundaki
                      hesaplamaya göre belirlenir)
                    </li>
                    <li>
                      Dava açılışında ve varsa önceki artırımlarda alınan harç makbuzları;
                      harcı ödenmiş değerin doğru belirlenmesine yardımcı olur
                    </li>
                  </ul>
                ),
              },
              {
                heading: "Dikkat edilmesi gerekenler",
                body: (
                  <ul>
                    <li>
                      Aynı davada taraflardan her biri ıslah yoluna yalnızca bir kez başvurabilir
                      ve ıslah tahkikatın sonuna kadar yapılabilir.
                    </li>
                    <li>
                      Belirsiz alacak davasında yapılan talep artırımı ıslah hakkını tüketmez;
                      ancak artırılan kısım için harç yine fark üzerinden yatırılır.
                    </li>
                    <li>
                      Harcın mahkemenin verdiği süre içinde yatırılmaması, ıslahın sonuçsuz
                      kalmasına yol açabilir.
                    </li>
                    <li>
                      Ölüm ve cismani zarar davalarındaki istisnai oran bu hesaba yansımaz. Sonuç
                      bilgilendirme amaçlıdır; kesin tutar mahkeme veznesince hesaplanır.
                    </li>
                  </ul>
                ),
              },
            ]}
          />

          <div className="mt-10 pt-8" style={{ borderTop: "1px solid #EBE0D4" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Bir istisna: ölüm ve cismani zarar tazminatı davaları
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#3D5A50" }}>
              Ölüm veya cismani zarar nedeniyle açılan tazminat davalarında peşin harç oranı
              genel kuraldaki gibi 1/4 değil, istisnaen 1/20&apos;dir. Bu tür davalarda yukarıdaki
              hesaplama geçerli olmayabilir; bir avukata danışmanız önerilir.
            </p>
          </div>

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A89" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki tavsiye niteliği taşımaz.
          </p>

          <ToolRelated links={[{ href: "/dava-harci-hesaplama", label: "Dava Harcı Hesaplama" }, { href: "/calisma-alanlari/borclar-hukuku", label: "Borçlar Hukuku: alacak davaları ve zamanaşımı" }]} />
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
