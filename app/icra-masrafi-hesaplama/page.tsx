import type { Metadata } from "next";
import ToolRelated from "@/components/calculators/ToolRelated";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import IcraMasrafiForm from "@/components/calculators/IcraMasrafiForm";
import ToolBreadcrumb from "@/components/calculators/ToolBreadcrumb";
import ToolExplainer, { formatTL, formatYuzde } from "@/components/calculators/ToolExplainer";
import {
  BASVURMA_HARCI,
  TAHSIL_HARCI_ORANLARI,
  VEKALETNAME_SURETI_HARCI,
  calculateIcraMasrafi,
} from "@/lib/calculators/icraMasrafi";

export const metadata: Metadata = {
  title: "İcra Masrafı ve Harç Hesaplama 2026",
  description:
    "Takip türü, alacak tutarı ve tahsilat aşamasına göre icra takibi başlangıç masraflarını ve tahsil harcını hesaplayın.",
  alternates: {
    canonical: "/icra-masrafi-hesaplama",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/icra-masrafi-hesaplama#tool",
      name: "İcra Masrafı Hesaplama",
      url: "https://furkanarikan.av.tr/icra-masrafi-hesaplama",
      description: "Takip türü, alacak tutarı ve tahsilat aşamasına göre icra masraflarını ve tahsil harcını hesaplayan ücretsiz araç.",
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
          name: "Tahsil harcı oranı tahsilat aşamasına göre neden değişir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "492 sayılı Harçlar Kanunu, borçlunun ödemeyi hangi aşamada yaptığına göre kademeli oranlar öngörür: haciz öncesi ödemede %4,55, haciz sonrası satıştan önce ödemede %9,10, haczedilen malın satışıyla tahsilde %11,38. Bu, erken ödemeyi teşvik eden bir sistemdir.",
          },
        },
        {
          "@type": "Question",
          name: "İcra masraflarını kim öder?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Başlangıç masraflarını (harç, tebligat gideri vb.) alacaklı avans olarak öder. Takip başarılı olursa İİK m.15 uyarınca tüm masraflar borçluya yükletilir. Tahsil harcı ise doğrudan tahsil edilen tutardan kesilir.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://furkanarikan.av.tr/araclar" },
        { "@type": "ListItem", position: 3, name: "İcra Masrafı Hesaplama", item: "https://furkanarikan.av.tr/icra-masrafi-hesaplama" },
      ],
    },
  ],
};

const ORNEK_ALACAK = 200000;
const ORNEK = calculateIcraMasrafi("ilamsiz", ORNEK_ALACAK, "hacizOncesi");

export default function IcraMasrafiHesaplamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div className="pt-28 pb-16" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Ücretsiz Araç · İcra Hukuku
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            İcra Masrafı Hesaplama
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            Takip türü, alacak tutarı ve tahsilat aşamasına göre icra masraflarınızı hesaplayın.
          </p>
        </div>
      </div>

      <ToolBreadcrumb current="İcra Masrafı Hesaplama" />

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <IcraMasrafiForm />

          <ToolExplainer
            title="İcra masrafları nasıl hesaplanır?"
            sections={[
              {
                heading: "Nasıl hesaplanır?",
                body: (
                  <>
                    <p>
                      Araç iki ayrı tutar üretir. <strong>Başlangıç masrafı</strong>, takip
                      açılırken alacaklının yatırdığı tutardır: başvurma harcı (
                      {formatTL(BASVURMA_HARCI)}) + vekaletname sureti harcı (
                      {formatTL(VEKALETNAME_SURETI_HARCI)}) + ilamsız ve kambiyo takiplerinde
                      alacağın binde 5&apos;i oranında peşin harç. İlamlı takip seçildiğinde araç
                      peşin harç eklemez.
                    </p>
                    <p>
                      <strong>Tahsil harcı</strong> ise borçlunun ödemeyi yaptığı aşamaya göre
                      alacak tutarına uygulanır: haciz öncesi{" "}
                      {formatYuzde(TAHSIL_HARCI_ORANLARI.hacizOncesi)}, haciz sonrası satıştan
                      önce {formatYuzde(TAHSIL_HARCI_ORANLARI.hacizSonrasi)}, satış yoluyla
                      tahsilde {formatYuzde(TAHSIL_HARCI_ORANLARI.satisIle)}. Örneğin{" "}
                      {formatTL(ORNEK_ALACAK, 0)} tutarlı ilamsız bir takipte peşin harç{" "}
                      {formatTL(ORNEK.pesinHarc)}, başlangıç toplamı{" "}
                      {formatTL(ORNEK.baslangicToplami)} olur; borç haciz öncesinde ödenirse
                      tahsil harcı {formatTL(ORNEK.tahsilHarci)} çıkar.
                    </p>
                  </>
                ),
              },
              {
                heading: "Hangi bilgiler gerekir?",
                body: (
                  <ul>
                    <li>
                      Takip türü: mahkeme kararına dayanıyorsa ilamlı; fatura, sözleşme gibi
                      belgelere dayanıyorsa ilamsız; çek, senet veya poliçeye dayanıyorsa kambiyo
                    </li>
                    <li>
                      Takip talebinde istenen alacak tutarı: asıl alacak ile takip tarihine kadar
                      işlemiş faizin toplamı
                    </li>
                    <li>Tahsilatın gerçekleştiği (veya beklendiği) aşama</li>
                  </ul>
                ),
              },
              {
                heading: "Dikkat edilmesi gerekenler",
                body: (
                  <ul>
                    <li>
                      Haciz, muhafaza, kıymet takdiri ve ilan gibi takip sırasında doğan giderler
                      hesaplamaya dahil değildir.
                    </li>
                    <li>
                      Takip boyunca işleyen faiz tahsil edilecek tutarı, dolayısıyla tahsil
                      harcını da artırır; araç yalnızca girdiğiniz tutarı esas alır.
                    </li>
                    <li>
                      Kısmi ödemelerde her tahsilat, yapıldığı aşamanın oranına tabi olabilir.
                    </li>
                    <li>
                      Borçlu itiraz ederse takip durur; itirazın iptali veya kaldırılması
                      süreçleri ayrıca masraf doğurur. Sonuç bilgilendirme amaçlıdır.
                    </li>
                  </ul>
                ),
              },
            ]}
          />

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki tavsiye niteliği taşımaz. Vekalet ücreti bu
            hesaplamaya dahil değildir, ayrı bir tarifeye tabidir.
          </p>

          <ToolRelated links={[{ href: "/makaleler/icra-takibi-ve-borca-itiraz", label: "İcra Takibi ve Borca İtiraz: süreç ve süreler" }, { href: "/calisma-alanlari/icra-iflas-hukuku", label: "İcra ve İflas Hukuku" }]} />
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
