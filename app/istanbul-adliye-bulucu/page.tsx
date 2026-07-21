import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AdliyeBulucuForm from "@/components/calculators/AdliyeBulucuForm";
import ToolBreadcrumb from "@/components/calculators/ToolBreadcrumb";

export const metadata: Metadata = {
  title: "İstanbul Adliye Bulucu",
  description:
    "İlçenizi seçin, bağlı olduğunuz İstanbul adliyesinin adresini, telefonunu ve konumunu anında öğrenin.",
  alternates: {
    canonical: "/istanbul-adliye-bulucu",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/istanbul-adliye-bulucu#tool",
      name: "İstanbul Adliye Bulucu",
      url: "https://furkanarikan.av.tr/istanbul-adliye-bulucu",
      description:
        "İlçeye göre bağlı olunan İstanbul adliyesini, adresini ve telefonunu gösteren ücretsiz araç.",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "TRY",
      },
      author: { "@id": "https://furkanarikan.av.tr/#person" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Adliye yargı çevresi nasıl belirlenir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Her ilçe, Adalet Bakanlığı tarafından belirlenen bir yargı çevresi kapsamında belirli bir adliyeye bağlanır. Bu çevreler zaman zaman idari düzenlemelerle değişebilir; güncel durumu adalet.gov.tr üzerinden teyit etmek en sağlıklısıdır.",
          },
        },
        {
          "@type": "Question",
          name: "İlçem bu listede yoksa ne yapmalıyım?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aracın kapsamını kademeli olarak genişletiyoruz; şu an İstanbul'un merkez, batı ve yeni eklenen bazı Anadolu Yakası ilçelerini kapsıyor. Listede olmayan bir ilçe için doğrudan bize ulaşabilir veya adalet.gov.tr üzerinden ilçenizin bağlı olduğu adliyeyi öğrenebilirsiniz.",
          },
        },
        {
          "@type": "Question",
          name: "Bir ilçe birden fazla adliyeye bağlı olabilir mi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet, bazı ilçelerde genel adli işler kendi mülhakat adliyesinde görülürken, ağır ceza gibi belirli dava türleri farklı bir adliyenin (örneğin bölge merkezi adliyesinin) yetkisinde olabilir. Bu araç ilçenin genel bağlı olduğu adliyeyi gösterir; dava türüne özgü yetki sorularında bir avukata danışmanız önerilir.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: "https://furkanarikan.av.tr",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Araçlar",
          item: "https://furkanarikan.av.tr/araclar",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "İstanbul Adliye Bulucu",
          item: "https://furkanarikan.av.tr/istanbul-adliye-bulucu",
        },
      ],
    },
  ],
};

export default function AdliyeBulucuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <div className="pt-28 pb-16" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Ücretsiz Araç
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            İstanbul Adliye Bulucu
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            İlçenizi seçin; bağlı olduğunuz adliyenin adresini, telefonunu ve konumunu anında görün.
            Şu an 31 İstanbul ilçesini kapsıyoruz; kapsamı sürekli genişletiyoruz.
          </p>
        </div>
      </div>

      <ToolBreadcrumb current="İstanbul Adliye Bulucu" />

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <AdliyeBulucuForm />

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır; adli yargı çevreleri zaman zaman değişebilir,
            işleminiz öncesi ilgili adliyeden teyit ediniz. Sonuçlar hukuki danışmanlık
            niteliği taşımaz.
          </p>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
