import type { Metadata } from "next";
import ToolRelated from "@/components/calculators/ToolRelated";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import KiraStopajiForm from "@/components/calculators/KiraStopajiForm";
import ToolBreadcrumb from "@/components/calculators/ToolBreadcrumb";
import ToolExplainer, { formatTL } from "@/components/calculators/ToolExplainer";
import { calculateKiraStopaji } from "@/lib/calculators/kiraStopaji";

export const metadata: Metadata = {
  title: "Kira Stopajı Hesaplama (%20 Stopaj)",
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

const ORNEK_BRUT = 50000;
const ORNEK = calculateKiraStopaji(ORNEK_BRUT);

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

      <ToolBreadcrumb current="Kira Stopajı Hesaplama" />

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <KiraStopajiForm />

          <ToolExplainer
            title="Kira stopajı nasıl hesaplanır?"
            sections={[
              {
                heading: "Nasıl hesaplanır?",
                body: (
                  <>
                    <p>
                      Kiracı stopaj yükümlüsüyse araç brüt kira bedelinin %20&apos;sini stopaj
                      olarak ayırır; kalan tutar mal sahibine ödenecek net kiradır. Örneğin{" "}
                      {formatTL(ORNEK_BRUT, 0)} brüt kirada stopaj {formatTL(ORNEK.stopajTutari, 0)},
                      net ödeme {formatTL(ORNEK.netOdeme, 0)} olur. Yıllık toplamı görmek için
                      aylık stopajı 12 ile çarpabilirsiniz; bu örnekte yıllık stopaj{" "}
                      {formatTL(ORNEK.stopajTutari * 12, 0)} eder. Kira peşin ve toplu ödendiğinde
                      de stopaj aynı oranla, ödeme sırasında kesilir.
                    </p>
                    <p>
                      Sözleşmede kira bedeli net olarak yazılmışsa hesap tersten yapılır: brüt
                      kira = net kira ÷ 0,80. Bu örnekte 40.000 TL net kiranın brütü
                      50.000 TL&apos;dir ve stopaj bu brüt tutar üzerinden kesilir.
                    </p>
                  </>
                ),
              },
              {
                heading: "Hangi bilgiler gerekir?",
                body: (
                  <ul>
                    <li>Kiracının gelir veya kurumlar vergisi mükellefi olup olmadığı</li>
                    <li>
                      Aylık kira bedeli ve sözleşmede bu bedelin brüt mü net mi
                      kararlaştırıldığı
                    </li>
                    <li>
                      Mal sahibinin kimlik bilgileri: kiracının verdiği muhtasar beyannamede yer
                      alır ve yıl sonunda mahsup için bu kayıtlar gerekir
                    </li>
                  </ul>
                ),
              },
              {
                heading: "Dikkat edilmesi gerekenler",
                body: (
                  <ul>
                    <li>
                      Stopajı kesip vergi dairesine ödemek kiracının sorumluluğundadır; kesinti
                      yapılmazsa vergi idaresi karşısında kiracı sorumlu tutulabilir.
                    </li>
                    <li>
                      Mal sahibi kira gelirini yıllık beyannamede bildirirken, kiracı tarafından
                      kesilen stopajı hesaplanan vergiden mahsup edebilir.
                    </li>
                    <li>
                      Kiracı mükellef değilse araç stopaj hesaplamaz; bu durumda kira gelirinin
                      beyanı mal sahibine aittir.
                    </li>
                    <li>
                      Kira artışları, taraflarca kararlaştırılan kira bedeli üzerinden yapılır;
                      stopaj artışa göre yeniden hesaplanmalıdır.
                    </li>
                    <li>
                      Sonuç bilgilendirme amaçlıdır; beyanname süreçleri için bir mali müşavire
                      danışmanız önerilir.
                    </li>
                  </ul>
                ),
              },
            ]}
          />

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki/mali tavsiye niteliği taşımaz.
          </p>

          <ToolRelated links={[{ href: "/kira-artisi-hesaplama", label: "Kira Artışı Hesaplama" }, { href: "/makaleler/kira-bedeli-tespit-ve-uyarlama-davasi", label: "Kira Bedeli Tespit ve Uyarlama Davası" }, { href: "/calisma-alanlari/gayrimenkul-hukuku", label: "Gayrimenkul Hukuku" }]} />
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
