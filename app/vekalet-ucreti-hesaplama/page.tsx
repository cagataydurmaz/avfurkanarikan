import type { Metadata } from "next";
import ToolRelated from "@/components/calculators/ToolRelated";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import VekaletUcretiForm from "@/components/calculators/VekaletUcretiForm";
import ToolBreadcrumb from "@/components/calculators/ToolBreadcrumb";
import ToolExplainer, { formatTL } from "@/components/calculators/ToolExplainer";
import { DILIMLER, MAKTU_ASGARI_UCRET, calculateVekaletUcreti } from "@/lib/calculators/vekaletUcreti";

export const metadata: Metadata = {
  title: "Vekalet Ücreti Hesaplama (AAÜT 2026)",
  description:
    "2025-2026 Avukatlık Asgari Ücret Tarifesi'ne göre dava değerinize karşılık gelen asgari nispi vekalet ücretini hesaplayın.",
  alternates: {
    canonical: "/vekalet-ucreti-hesaplama",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/vekalet-ucreti-hesaplama#tool",
      name: "Vekalet Ücreti Hesaplama",
      url: "https://furkanarikan.av.tr/vekalet-ucreti-hesaplama",
      description: "2025-2026 Avukatlık Asgari Ücret Tarifesi'ne göre dava değerine karşılık gelen asgari nispi vekalet ücretini hesaplayan ücretsiz araç.",
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
          name: "Vekalet ücreti dava değerine göre nasıl hesaplanır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "2025-2026 AAÜT'ye göre dava değeri dilimlere ayrılır ve her dilime azalan bir oran uygulanarak (ilk 600.000 TL için %16'dan başlayıp kademeli düşerek) toplanır. Bu, gelir vergisi dilim hesabına benzer kademeli bir sistemdir.",
          },
        },
        {
          "@type": "Question",
          name: "Bu tarife avukatı bu ücrete mi mecbur bırakır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hayır, tam tersi: bu bir asgari ücrettir. Avukatlık Kanunu m.164/4 uyarınca avukat bu tutarın altında ücret sözleşmesi yapamaz; üzerinde taraflar serbestçe anlaşabilir.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://furkanarikan.av.tr/araclar" },
        { "@type": "ListItem", position: 3, name: "Vekalet Ücreti Hesaplama", item: "https://furkanarikan.av.tr/vekalet-ucreti-hesaplama" },
      ],
    },
  ],
};

const ORNEK_BUYUK = calculateVekaletUcreti(1000000);
const ORNEK_KUCUK = calculateVekaletUcreti(200000);

export default function VekaletUcretiHesaplamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div className="pt-28 pb-16" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Ücretsiz Araç · Genel
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F4EDE4", fontFamily: "var(--font-heading), Georgia, serif" }}>
            Vekalet Ücreti Hesaplama
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            2025-2026 AAÜT&apos;ye göre dava değerinize karşılık gelen asgari vekalet ücretini
            hesaplayın.
          </p>
        </div>
      </div>

      <ToolBreadcrumb current="Vekalet Ücreti Hesaplama" />

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <VekaletUcretiForm />

          <ToolExplainer
            title="Kademeli vekalet ücreti nasıl hesaplanır?"
            sections={[
              {
                heading: "Nasıl hesaplanır?",
                body: (
                  <>
                    <p>
                      Dava değeri dilimlere ayrılır ve her dilime kendi oranı uygulanır; dilim
                      sonuçları toplanır. Araçta kullanılan dilimler şöyledir:
                    </p>
                    <ul>
                      {DILIMLER.map((d, i) => {
                        const onceki = i === 0 ? 0 : DILIMLER[i - 1].ustSinir;
                        const oran = `%${Math.round(d.oran * 100)}`;
                        if (d.ustSinir === Infinity) {
                          return <li key={i}>{formatTL(onceki, 0)}&apos;yi aşan kısım için {oran}</li>;
                        }
                        return (
                          <li key={i}>
                            {i === 0 ? "İlk" : "Sonraki"} {formatTL(d.ustSinir - onceki, 0)} için {oran}
                          </li>
                        );
                      })}
                    </ul>
                    <p>
                      Örneğin 1.000.000 TL&apos;lik davada 600.000 TL × %16 ve 400.000 TL × %15
                      toplanarak {formatTL(ORNEK_BUYUK.sonuc)} bulunur. Toplam, maktu asgari
                      ücretin ({formatTL(MAKTU_ASGARI_UCRET)}) altında kalırsa sonuç olarak maktu
                      tutar gösterilir: 200.000 TL&apos;lik davada nispi hesap{" "}
                      {formatTL(ORNEK_KUCUK.nispiUcret)} olsa da sonuç{" "}
                      {formatTL(ORNEK_KUCUK.sonuc)} olur.
                    </p>
                  </>
                ),
              },
              {
                heading: "Hangi bilgiler gerekir?",
                body: (
                  <p>
                    Yalnızca dava değeri. Karşı tarafa yükletilecek vekalet ücreti hesaplanıyorsa,
                    davanın kabul edilen veya reddedilen kısmının tutarını girmelisiniz; bu
                    kısımlar için ücret ayrı ayrı belirlenir. Dava değeri sonradan ıslahla
                    artırılmışsa artırılmış değer esas alınmalıdır.
                  </p>
                ),
              },
              {
                heading: "Dikkat edilmesi gerekenler",
                body: (
                  <ul>
                    <li>
                      Araç yalnızca konusu para olan davalardaki kademeli hesabı yapar. İcra
                      takipleri, ceza ve idari davalar gibi işler tarifede ayrı kalemlere tabidir.
                    </li>
                    <li>
                      Mahkemenin hükmettiği vekalet ücreti yargılama giderinden ayrıdır ve
                      müvekkil ile avukat arasındaki ücret sözleşmesinden bağımsızdır.
                    </li>
                    <li>
                      Sonuç bilgilendirme amaçlıdır; mahkeme somut davada tarifenin özel
                      hükümlerini de uygular.
                    </li>
                  </ul>
                ),
              },
            ]}
          />

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki tavsiye niteliği taşımaz. Tarife her yıl
            yeniden yayımlanır; güncel oranları teyit ediniz.
          </p>

          <ToolRelated links={[{ href: "/dava-harci-hesaplama", label: "Dava Harcı Hesaplama" }, { href: "/icra-masrafi-hesaplama", label: "İcra Masrafı Hesaplama" }]} />
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
