import type { Metadata } from "next";
import ToolRelated from "@/components/calculators/ToolRelated";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FazlaMesaiForm from "@/components/calculators/FazlaMesaiForm";
import ToolBreadcrumb from "@/components/calculators/ToolBreadcrumb";
import ToolExplainer, { formatTL } from "@/components/calculators/ToolExplainer";
import { calculateFazlaMesai } from "@/lib/calculators/fazlaMesai";

export const metadata: Metadata = {
  title: "Fazla Mesai Ücreti Hesaplama (%50 Zamlı)",
  description:
    "İş Kanunu m.41 uyarınca %50 zamlı fazla mesai ücretinizi aylık brüt ücretinize göre hesaplayın.",
  alternates: {
    canonical: "/fazla-mesai-hesaplama",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/fazla-mesai-hesaplama#tool",
      name: "Fazla Mesai Ücreti Hesaplama",
      url: "https://furkanarikan.av.tr/fazla-mesai-hesaplama",
      description: "Aylık brüt ücret ve fazla çalışılan saate göre %50 zamlı fazla mesai ücretini hesaplayan ücretsiz araç.",
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
          name: "Fazla mesai ücreti nasıl hesaplanır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "4857 sayılı İş Kanunu m.41 uyarınca haftalık 45 saati aşan çalışma için normal saatlik ücretin %50 fazlasıyla ödeme yapılır. Saatlik ücret, yerleşik uygulamada aylık brüt ücretin 225'e bölünmesiyle bulunur.",
          },
        },
        {
          "@type": "Question",
          name: "Yıllık fazla mesai üst sınırı var mı?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet, İş Kanunu'na göre bir işçiye yılda toplam 270 saatten fazla fazla çalışma yaptırılamaz.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://furkanarikan.av.tr/araclar" },
        { "@type": "ListItem", position: 3, name: "Fazla Mesai Ücreti Hesaplama", item: "https://furkanarikan.av.tr/fazla-mesai-hesaplama" },
      ],
    },
  ],
};

const ORNEK = calculateFazlaMesai(45000, 10);

export default function FazlaMesaiHesaplamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div className="pt-28 pb-16" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Ücretsiz Araç · İş Hukuku
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Fazla Mesai Ücreti Hesaplama
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            Aylık brüt ücretinize göre %50 zamlı fazla mesai ücretinizi hesaplayın.
          </p>
        </div>
      </div>

      <ToolBreadcrumb current="Fazla Mesai Ücreti Hesaplama" />

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <FazlaMesaiForm />

          <ToolExplainer
            title="Fazla mesai ücreti nasıl hesaplanır?"
            sections={[
              {
                heading: "Nasıl hesaplanır?",
                body: (
                  <>
                    <p>Hesap üç adımdan oluşur:</p>
                    <ol>
                      <li>Aylık brüt ücret 225&apos;e bölünerek saatlik ücret bulunur.</li>
                      <li>
                        Saatlik ücret %50 zamla 1,5 katına çıkarılır; bu, bir saatlik fazla
                        mesainin ücretidir.
                      </li>
                      <li>Bu tutar, girdiğiniz fazla çalışma saatiyle çarpılır.</li>
                    </ol>
                    <p>
                      225 böleni (günlük 7,5 saat × 30 gün) kanun metninde geçmez; bordro ve
                      yargı uygulamasında yerleşik olarak kullanılır. Örneğin 45.000 TL brüt
                      ücrette saatlik ücret {formatTL(ORNEK.saatlikUcret)}, fazla mesai saat
                      ücreti {formatTL(ORNEK.fazlaMesaiSaatUcreti)} olur; 10 saatlik fazla
                      çalışma için brüt {formatTL(ORNEK.toplamUcret)} çıkar.
                    </p>
                  </>
                ),
              },
              {
                heading: "Hangi bilgiler gerekir?",
                body: (
                  <ul>
                    <li>Bordrodaki aylık brüt ücret</li>
                    <li>
                      Haftalık 45 saati aşan çalışma saatlerinin toplamı. Bunu hafta hafta
                      çıkarıp toplamanız gerekir; puantaj ve vardiya çizelgeleri bu hesap için
                      yararlı kaynaklardır.
                    </li>
                    <li>
                      Ücretin değiştiği dönemler varsa her dönemi kendi ücretiyle ayrı ayrı
                      hesaplayıp toplamak daha doğru sonuç verir.
                    </li>
                  </ul>
                ),
              },
              {
                heading: "Dikkat edilmesi gerekenler",
                body: (
                  <ul>
                    <li>
                      Sözleşmede haftalık çalışma süresi 45 saatin altında belirlenmişse, bu
                      süreyi aşan ancak 45 saate kadar olan çalışmalar farklı bir zam oranına
                      tabidir ve bu araçta ayrıca hesaplanmaz.
                    </li>
                    <li>
                      Denkleştirme uygulanan işyerlerinde fazla çalışma, tek bir haftanın
                      toplamına göre değil, denkleştirme dönemi ortalamasına göre belirlenir.
                    </li>
                    <li>
                      Hafta tatili, ulusal bayram ve genel tatil günlerindeki çalışmaların ücreti
                      ayrı kurallara tabidir; bu araç yalnızca fazla saatleri hesaplar.
                    </li>
                    <li>
                      Sonuç brüttür ve bilgilendirme amaçlıdır; talep edilebilecek alacak somut
                      kayıtlar ve ispat durumuna göre değişir.
                    </li>
                  </ul>
                ),
              },
            ]}
          />

          <div className="mt-10 pt-8" style={{ borderTop: "1px solid #EBE0D4" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              İspat yükü genellikle işçidedir
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#3D5A50" }}>
              Fazla mesai alacağı davalarında en kritik nokta, fazla çalışmanın gerçekten
              yapıldığının ispatıdır (giriş-çıkış kayıtları, tanık beyanı, yazışmalar vb.).
              İşyerinde fazla mesai için ayrıca ücret ödenmesi yerine serbest zaman kullandırılmış
              olması da mümkündür; bu durum hesaplamayı etkiler. Alacağınızı somut belgelerle
              değerlendirmek için bir avukata danışmanız önerilir.
            </p>
          </div>

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki tavsiye niteliği taşımaz.
          </p>

          <ToolRelated links={[{ href: "/calisma-alanlari/is-hukuku", label: "İş Hukuku: fesih, kıdem tazminatı ve işçi alacakları" }, { href: "/kidem-tazminati-hesaplama", label: "Kıdem Tazminatı Hesaplama" }, { href: "/makaleler/ise-iade-davasi", label: "İşe İade Davası: koşullar, süre ve süreç" }]} />
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
