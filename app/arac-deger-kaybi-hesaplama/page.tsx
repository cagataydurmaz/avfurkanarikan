import type { Metadata } from "next";
import { pseoTitle } from "@/lib/pseo/pseoTitle";
import ToolRelated from "@/components/calculators/ToolRelated";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AracDegerKaybiForm from "@/components/calculators/AracDegerKaybiForm";
import ToolBreadcrumb from "@/components/calculators/ToolBreadcrumb";
import ToolExplainer from "@/components/calculators/ToolExplainer";

export const metadata: Metadata = {
  title: pseoTitle("Araç Değer Kaybı Tazminatı: Dava Süresi Hesaplama"),
  description:
    "Trafik kazası sonrası araç değer kaybı talebinizin zamanaşımını ve hangi sigortaya (ZMSS/kasko) yöneltilebileceğini öğrenin.",
  alternates: {
    canonical: "/arac-deger-kaybi-hesaplama",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/arac-deger-kaybi-hesaplama#tool",
      name: "Araç Değer Kaybı Hesaplama",
      url: "https://furkanarikan.av.tr/arac-deger-kaybi-hesaplama",
      description:
        "Araç değer kaybı talebinin zamanaşımı süresini hesaplayan ve ZMSS/kasko ayrımını gösteren ücretsiz araç.",
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
          name: "Araç değer kaybı hesaplamasında hangi kriterler dikkate alınır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yargıtay Hukuk Genel Kurulu'nun E.2017/2049, K.2021/771 sayılı kararına göre değer kaybı; aracın markası, modeli, kaza tarihindeki yaşı, kilometresi ve hasarın nitelik ve niceliğine göre değişir. Kesin tutar, kaza öncesi ve onarım sonrası ikinci el rayiç değer farkı esas alınarak bilirkişi/eksper raporuyla belirlenir.",
          },
        },
        {
          "@type": "Question",
          name: "Kasko değer kaybını öder mi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Standart kasko poliçelerinde değer kaybı teminatı bulunmaz. Poliçenizde ayrıca bu teminat/klozu varsa kasko şirketinizden talep edebilirsiniz; yoksa talebi kusurlu sürücünün zorunlu trafik sigortasına (ZMSS) yöneltmeniz gerekir.",
          },
        },
        {
          "@type": "Question",
          name: "Değer kaybı talebinde zamanaşımı süresi nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "KTK m.109 ve TBK m.72 uyarınca genel kural, zararın ve sorumlunun öğrenilmesinden itibaren 2 yıl, her hâlde kaza tarihinden itibaren 10 yıldır.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://furkanarikan.av.tr/araclar" },
        { "@type": "ListItem", position: 3, name: "Araç Değer Kaybı Hesaplama", item: "https://furkanarikan.av.tr/arac-deger-kaybi-hesaplama" },
      ],
    },
  ],
};

export default function AracDegerKaybiHesaplamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div className="pt-28 pb-16" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Ücretsiz Araç · Tazminat Hukuku
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Araç Değer Kaybı Hesaplama
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            Talep hakkınızın zamanaşımını ve hangi sigortaya yöneltilebileceğini öğrenin.
          </p>
        </div>
      </div>

      <ToolBreadcrumb current="Araç Değer Kaybı Hesaplama" />

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <AracDegerKaybiForm />

          <ToolExplainer
            title="Araç ne hesaplar, ne hesaplamaz?"
            sections={[
              {
                heading: "Nasıl hesaplanır?",
                body: (
                  <>
                    <p>
                      Değer kaybının TL karşılığı için tutarlı ve güvenilir bir formül
                      bulunmadığından araç tutar hesaplamaz. Bunun yerine iki şey yapar:
                    </p>
                    <ol>
                      <li>
                        <strong>Talep süresi:</strong> sorumlunun öğrenildiği tarihe 2 yıl, kaza
                        tarihine 10 yıl ekler ve bunlardan erken olanı talep hakkının sona erdiği
                        tarih olarak gösterir (KTK m.109, TBK m.72).
                      </li>
                      <li>
                        <strong>Muhatap sigorta:</strong> seçtiğiniz sigorta türüne (zorunlu
                        trafik sigortası veya kasko) göre talebin kime yöneltilebileceğini açıklar.
                      </li>
                    </ol>
                    <p>
                      Uygulamada tutar, kaza öncesi rayiç değer ile onarım sonrası rayiç değer
                      arasındaki farka göre eksper veya bilirkişi tarafından belirlenir.
                    </p>
                  </>
                ),
              },
              {
                heading: "Hangi bilgiler gerekir?",
                body: (
                  <ul>
                    <li>
                      Kaza tarihi ve kusurlu tarafın öğrenildiği tarih; ikinci tarihi boş
                      bırakırsanız araç kaza tarihini esas alır
                    </li>
                    <li>Kaza tespit tutanağı (kusur oranlarını gösterir)</li>
                    <li>Ekspertiz raporu ve onarım faturası (değişen ve boyanan parçalar)</li>
                    <li>Araç ruhsatı ve kilometre bilgisi</li>
                    <li>Karşı tarafın trafik sigortası poliçe bilgileri</li>
                  </ul>
                ),
              },
              {
                heading: "Dikkat edilmesi gerekenler",
                body: (
                  <ul>
                    <li>
                      Talep edilebilecek tutar kusur oranlarına göre belirlenir; kazada sizin de
                      kusurunuz varsa o oranda indirim yapılır.
                    </li>
                    <li>
                      Trafik sigortası poliçe limiti dahilinde öder; limiti aşan kısım için
                      kusurlu sürücüye ve araç işletenine başvurulabilir.
                    </li>
                    <li>
                      Değer kaybı, onarım bedelinden ayrı bir zarar kalemidir; aracın onarılmış
                      olması değer kaybı talebini ortadan kaldırmaz.
                    </li>
                    <li>
                      Sigorta şirketinin ödemesini kabul ederken imzalanan ibraname kalan
                      talepleri etkileyebileceğinden, içeriği dikkatle okunmalıdır.
                    </li>
                    <li>
                      Dava açmadan önce sigorta şirketine yazılı başvuru yapılması gerekir.
                    </li>
                    <li>Sonuç bilgilendirme amaçlıdır.</li>
                  </ul>
                ),
              },
            ]}
          />

          <div className="mt-10 pt-8" style={{ borderTop: "1px solid #EBE0D4" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Değer kaybını etkileyen faktörler
            </h2>
            <ul className="text-sm leading-relaxed space-y-2" style={{ color: "#3D5A50" }}>
              <li>Aracın markası, modeli ve kaza tarihindeki yaşı</li>
              <li>Kilometresi ve kaza öncesi genel durumu</li>
              <li>Hasarın niteliği ve niceliği (hangi parçaların değiştiği, boyandığı)</li>
              <li>Kaza öncesi ve onarım sonrası ikinci el piyasa (rayiç) değer farkı</li>
              <li>Aracın daha önce hasar kaydının bulunup bulunmadığı</li>
            </ul>
          </div>

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki tavsiye niteliği taşımaz ve değer kaybı
            tutarını hesaplamaz. Kesin tutar için bir sigorta eksperi/bilirkişi raporu ve bir
            avukata danışmanız önerilir.
          </p>

          <ToolRelated links={[{ href: "/calisma-alanlari/tazminat-hukuku", label: "Tazminat Hukuku: koşullar, kalemler ve zamanaşımı" }, { href: "/trafik-kazasi-tazminati-hesaplama", label: "Trafik Kazası Tazminatı Zamanaşımı Hesaplama" }]} />
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
