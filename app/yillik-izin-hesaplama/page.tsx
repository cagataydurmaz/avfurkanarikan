import type { Metadata } from "next";
import { pseoTitle } from "@/lib/pseo/pseoTitle";
import ToolRelated from "@/components/calculators/ToolRelated";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import YillikIzinForm from "@/components/calculators/YillikIzinForm";
import ToolBreadcrumb from "@/components/calculators/ToolBreadcrumb";
import ToolExplainer, { formatTL } from "@/components/calculators/ToolExplainer";
import { calculateIzinUcreti } from "@/lib/calculators/yillikIzin";

export const metadata: Metadata = {
  title: pseoTitle("Yıllık İzin Ücreti Hesaplama (Kullanılmayan İzin)"),
  description:
    "Kıdeminize göre yıllık izin hakkınızı görün, kullanılmayan izin gününüzün brüt ücret karşılığını hesaplayın.",
  alternates: {
    canonical: "/yillik-izin-hesaplama",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/yillik-izin-hesaplama#tool",
      name: "Yıllık İzin Ücreti Hesaplama",
      url: "https://furkanarikan.av.tr/yillik-izin-hesaplama",
      description: "Kıdeme göre yıllık izin hakkını gösteren ve kullanılmayan izin gününün brüt ücret karşılığını hesaplayan ücretsiz araç.",
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
          name: "Kıdeme göre yıllık izin süreleri nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "4857 sayılı İş Kanunu m.53 uyarınca 1-5 yıl arası kıdemde 14 gün, 5-15 yıl arası kıdemde 20 gün, 15 yıl ve üzeri kıdemde 26 gün yıllık ücretli izin hakkı doğar. 18 yaş ve altı ile 50 yaş ve üstü işçiler için taban 20 gündür.",
          },
        },
        {
          "@type": "Question",
          name: "Yıllık izin hakkı ne zaman doğar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "İşyerinde deneme süresi dahil en az 1 tam yıl çalışmış olmak gerekir; bu süreyi doldurmayan işçinin yıllık ücretli izin hakkı henüz doğmaz.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://furkanarikan.av.tr/araclar" },
        { "@type": "ListItem", position: 3, name: "Yıllık İzin Ücreti Hesaplama", item: "https://furkanarikan.av.tr/yillik-izin-hesaplama" },
      ],
    },
  ],
};

const ORNEK = calculateIzinUcreti(36000, 12);

export default function YillikIzinHesaplamaPage() {
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
            Yıllık İzin Ücreti Hesaplama
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            Kıdeminize göre yıllık izin hakkınızı görün, kullanılmayan izin gününüzün brüt ücret
            karşılığını hesaplayın.
          </p>
        </div>
      </div>

      <ToolBreadcrumb current="Yıllık İzin Ücreti Hesaplama" />

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <YillikIzinForm />

          <ToolExplainer
            title="Yıllık izin hakkı ve izin ücreti nasıl hesaplanır?"
            sections={[
              {
                heading: "Nasıl hesaplanır?",
                body: (
                  <>
                    <p>
                      Araç iki ayrı hesap yapar. İlki, işe giriş tarihi ile hesaplama tarihi
                      arasındaki kıdeme göre yıllık izin hakkınızı gösterir: 1 yıldan az kıdemde
                      hak doğmaz; 1–5 yıl arası kıdemde 14 gün, 5–15 yıl arasında 20 gün, daha
                      uzun kıdemde 26 gün. Yaşınızı girerseniz, 18 yaş ve altı ile 50 yaş ve
                      üstü için süre en az 20 güne yükseltilir.
                    </p>
                    <p>
                      İkincisi kullanılmayan izin ücretidir: aylık brüt ücret 30&apos;a bölünerek
                      günlük ücret bulunur ve bakiye izin gün sayısıyla çarpılır. Örneğin
                      36.000 TL brüt ücret ve 12 gün bakiye izin için günlük{" "}
                      {formatTL(ORNEK.gunlukUcret)} × 12 = {formatTL(ORNEK.izinUcreti)} brüt izin
                      ücreti çıkar.
                    </p>
                  </>
                ),
              },
              {
                heading: "Hangi bilgiler gerekir?",
                body: (
                  <ul>
                    <li>İşe giriş tarihi ve hesaplama tarihi (genellikle sözleşmenin sona erdiği gün)</li>
                    <li>Yaşınız (isteğe bağlı; asgari süreyi etkileyebilir)</li>
                    <li>
                      Kullanılmayan izin günü: her yıl hak edilen günlerden fiilen kullanılanlar
                      düşülerek bulunur. İzin formları ve işyerinin izin kayıtları bu konuda
                      başvurulacak belgelerdir.
                    </li>
                    <li>Son brüt aylık ücret</li>
                  </ul>
                ),
              },
              {
                heading: "Dikkat edilmesi gerekenler",
                body: (
                  <ul>
                    <li>
                      Araç bakiye günü kendisi hesaplamaz. Hak edilen süre her yıl o yıl ulaşılan
                      kıdeme göre değiştiğinden, geçmiş yılların hak ve kullanımlarını ayrı ayrı
                      toplamanız gerekir.
                    </li>
                    <li>
                      Yıllık izin süresine ulusal bayram, hafta tatili ve genel tatil günleri
                      sayılmaz (İş Kanunu m.56).
                    </li>
                    <li>
                      Kanundaki süreler asgaridir; iş sözleşmesi veya toplu iş sözleşmesiyle daha
                      uzun izin kararlaştırılabilir.
                    </li>
                    <li>
                      Gösterilen tutar brüttür ve bilgilendirme amaçlıdır; nete ulaşmak için
                      bordro kesintileri ayrıca hesaplanmalıdır.
                    </li>
                  </ul>
                ),
              },
            ]}
          />

          <div className="mt-10 pt-8" style={{ borderTop: "1px solid #EBE0D4" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              İzin ücreti yalnızca sözleşme sona erince ödenir
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#3D5A50" }}>
              Kullanılmayan izin günlerinin ücrete çevrilmesi yalnızca iş sözleşmesinin sona
              ermesi durumunda söz konusudur; devam eden bir iş ilişkisinde işveren izin yerine
              ücret ödemekle yükümlü değildir, izni fiilen kullandırmalıdır. Kaç gün bakiye
              izniniz olduğu konusunda işvereninizle uyuşmazlık varsa bir avukata danışmanız
              önerilir.
            </p>
          </div>

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki tavsiye niteliği taşımaz.
          </p>

          <ToolRelated links={[{ href: "/calisma-alanlari/is-hukuku", label: "İş Hukuku: fesih, kıdem tazminatı ve işçi alacakları" }, { href: "/fazla-mesai-hesaplama", label: "Fazla Mesai Ücreti Hesaplama" }, { href: "/makaleler/kidem-tazminati-hesaplama-2026", label: "Kıdem Tazminatı Hakkı ve Hesaplanması" }]} />
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
