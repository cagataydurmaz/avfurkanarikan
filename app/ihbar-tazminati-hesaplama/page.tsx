import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import IhbarTazminatiForm from "@/components/calculators/IhbarTazminatiForm";

export const metadata: Metadata = {
  title: "İhbar Tazminatı Hesaplama",
  description:
    "İşe giriş/çıkış tarihleri ve brüt ücrete göre kıdeme dayalı ihbar süresini ve brüt ihbar tazminatınızı hesaplayın.",
  alternates: {
    canonical: "/ihbar-tazminati-hesaplama",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/ihbar-tazminati-hesaplama#tool",
      name: "İhbar Tazminatı Hesaplama",
      url: "https://furkanarikan.av.tr/ihbar-tazminati-hesaplama",
      description:
        "İşe giriş/çıkış tarihleri ve brüt ücret bilgilerine göre kıdeme dayalı ihbar süresini ve brüt ihbar tazminatını hesaplayan ücretsiz araç.",
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
          name: "İhbar süresi kıdeme göre nasıl belirlenir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "4857 sayılı İş Kanunu m.17 uyarınca 6 aydan az kıdemde 2 hafta, 6 ay-1,5 yıl arasında 4 hafta, 1,5-3 yıl arasında 6 hafta, 3 yıldan fazla kıdemde 8 hafta ihbar süresi uygulanır. Bu süreler asgaridir, sözleşmeyle artırılabilir.",
          },
        },
        {
          "@type": "Question",
          name: "İhbar tazminatı gelir vergisinden istisna mıdır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hayır. Kıdem tazminatının aksine ihbar tazminatı Gelir Vergisi Kanunu m.25'teki istisna kapsamında değildir; ücret gibi tam olarak gelir vergisine tabidir ve ayrıca binde 7,59 oranında damga vergisi kesilir.",
          },
        },
        {
          "@type": "Question",
          name: "İşveren de işçiden ihbar tazminatı talep edebilir mi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. İhbar yükümlülüğü karşılıklıdır; işçi haklı bir sebep göstermeden ve ihbar süresine uymadan işi bırakırsa işveren de işçiden ihbar tazminatı talep edebilir.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://furkanarikan.av.tr/araclar" },
        { "@type": "ListItem", position: 3, name: "İhbar Tazminatı Hesaplama", item: "https://furkanarikan.av.tr/ihbar-tazminati-hesaplama" },
      ],
    },
  ],
};

export default function IhbarTazminatiHesaplamaPage() {
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
            İhbar Tazminatı Hesaplama
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            Kıdeme göre belirlenen ihbar süresini ve brüt ihbar tazminatınızı hesaplayın.
          </p>
        </div>
      </div>

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <IhbarTazminatiForm />

          <div className="mt-10 pt-8" style={{ borderTop: "1px solid #EBE0D4" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              İhbar yükümlülüğü karşılıklıdır
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#3D5A50" }}>
              Bu hesaplama işverenin işçiyi ihbar süresine uymadan işten çıkarması senaryosunu
              esas alır. Aynı kurallar işçi için de geçerlidir: işçi haklı bir sebep göstermeden
              ve ihbar süresini beklemeden işi bırakırsa işveren de işçiden aynı formülle
              hesaplanan ihbar tazminatını talep edebilir.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3D5A50" }}>
              Hesaplamada &quot;giydirilmiş brüt ücret&quot; (yol, yemek, düzenli prim/ikramiye
              gibi süreklilik arz eden ödemeler dahil) esas alınmalıdır; bu ödemelerin dahil
              edilip edilmeyeceği ihtilaf konusu olabilir.
            </p>
          </div>

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki tavsiye niteliği taşımaz. Fesih haklı bir
            nedene mi dayanıyor sorusu ihbar tazminatı hakkını doğrudan etkiler; durumunuzu bir
            avukatla değerlendirin.
          </p>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
