import type { Metadata } from "next";
import { pseoTitle } from "@/lib/pseo/pseoTitle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AdliyeBulucuForm from "@/components/calculators/AdliyeBulucuForm";
import ToolBreadcrumb from "@/components/calculators/ToolBreadcrumb";
import ToolExplainer from "@/components/calculators/ToolExplainer";
import { ADLIYE_DISTRICTS, COURTHOUSES } from "@/lib/calculators/adliyeBulucu";

export const metadata: Metadata = {
  title: pseoTitle("İstanbul Adliye Bulucu: İlçeye Göre Bağlı Adliye"),
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

const ILCE_SAYISI = ADLIYE_DISTRICTS.length;
const ADLIYE_SAYISI = Object.keys(COURTHOUSES).length;

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

          <ToolExplainer
            title="Adliye bulucu nasıl çalışır?"
            sections={[
              {
                heading: "Araç nasıl çalışır?",
                body: (
                  <p>
                    Araç, {ILCE_SAYISI} İstanbul ilçesini {ADLIYE_SAYISI} adliyeden birine
                    eşleştiren bir liste kullanır. İlçenizi seçtiğinizde, o ilçenin genel olarak
                    bağlı olduğu adliyenin adı, adresi ve santral telefonu gösterilir; &quot;Haritada
                    Göster&quot; bağlantısı adresi harita uygulamasında açar. Adres ve telefon
                    bilgileri Adalet Bakanlığı&apos;nın adalet.gov.tr altındaki resmi iletişim
                    sayfalarından derlenmiştir. Araç herhangi bir kişisel bilgi istemez;
                    yalnızca ilçe seçimi yeterlidir.
                  </p>
                ),
              },
              {
                heading: "Hangi ilçeyi seçmelisiniz?",
                body: (
                  <>
                    <p>
                      Gideceğiniz adliye her zaman kendi oturduğunuz ilçeye göre belirlenmez;
                      işin türüne göre esas alınacak yer değişir. Sık karşılaşılan durumlar:
                    </p>
                    <ul>
                      <li>Genel kural olarak davalının yerleşim yeri</li>
                      <li>Tapu ve taşınmaz davalarında taşınmazın bulunduğu yer</li>
                      <li>İş davalarında davalının yerleşim yeri veya işin yapıldığı yer</li>
                      <li>Ceza işlerinde suçun işlendiği yer</li>
                      <li>
                        Boşanma davalarında eşlerden birinin yerleşim yeri veya eşlerin belirli bir
                        süredir birlikte oturdukları yer
                      </li>
                      <li>Tüketici uyuşmazlıklarında tüketicinin yerleşim yeri de seçilebilir</li>
                    </ul>
                  </>
                ),
              },
              {
                heading: "Dikkat edilmesi gerekenler",
                body: (
                  <ul>
                    <li>
                      Tebligatınızda veya UYAP&apos;ta yazan mahkeme adı, hangi adliyeye
                      gitmeniz gerektiğini kesin olarak gösterir; araç sonucu bununla çelişiyorsa
                      tebligattaki bilgi esas alınmalıdır.
                    </li>
                    <li>
                      Ağır ceza mahkemeleri ve bazı ihtisas mahkemeleri her adliyede
                      bulunmayabilir; bu davalar ilçenin bağlı olduğu adliyeden farklı bir
                      adliyede görülebilir.
                    </li>
                    <li>
                      Araç yalnızca İstanbul ilçelerini kapsar; listede olmayan bir yer için
                      adalet.gov.tr üzerinden ilgili adliyeyi kontrol edebilirsiniz.
                    </li>
                    <li>
                      Adliyeye gitmeden önce duruşma saatini ve salon bilgisini UYAP veya ilgili
                      mahkeme kalemi üzerinden kontrol etmeniz yararlı olur.
                    </li>
                  </ul>
                ),
              },
            ]}
          />

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
