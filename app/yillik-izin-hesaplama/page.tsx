import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import YillikIzinForm from "@/components/calculators/YillikIzinForm";

export const metadata: Metadata = {
  title: "Yıllık İzin Ücreti Hesaplama",
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

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <YillikIzinForm />

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
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
