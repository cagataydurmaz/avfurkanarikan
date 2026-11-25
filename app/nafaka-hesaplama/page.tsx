import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import NafakaForm from "@/components/calculators/NafakaForm";
import ToolBreadcrumb from "@/components/calculators/ToolBreadcrumb";
import ToolExplainer, { formatTL } from "@/components/calculators/ToolExplainer";
import { calculateNafakaAraligi } from "@/lib/calculators/nafaka";

export const metadata: Metadata = {
  title: "Nafaka Hesaplama (Tahmini Aralık)",
  description:
    "Nafakanın yasal olarak sabit bir formülü yoktur. Bu araç, iştirak nafakasında sık kullanılan tahmini bir aralık gösterir.",
  alternates: {
    canonical: "/nafaka-hesaplama",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://furkanarikan.av.tr/nafaka-hesaplama#tool",
      name: "Nafaka Hesaplama (Tahmini Aralık)",
      url: "https://furkanarikan.av.tr/nafaka-hesaplama",
      description:
        "İştirak nafakasında net gelire göre tahmini bir aralık gösteren, resmi olmayan bilgilendirme aracı.",
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
          name: "Nafaka miktarının sabit bir formülü var mı?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hayır. Türk Medeni Kanunu'na göre nafaka miktarı hakimin takdirine bağlıdır; Yargıtay kararlarında sabit bir yüzde veya formül yer almaz. Hakim, çocuğun ihtiyaçları, tarafların gelir ve hayat koşulları, evlilik süresi ve kusur durumu gibi somut kriterleri birlikte değerlendirir.",
          },
        },
        {
          "@type": "Question",
          name: "Nafaka türleri nelerdir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Türk Medeni Kanunu üç nafaka türü düzenler: dava sürerken hükmedilen tedbir nafakası (m.169), velayeti almayan ebeveynin çocuğa katkısı olan iştirak nafakası (m.182/2, 327-330) ve boşanma nedeniyle yoksullaşacak eşe hükmedilen yoksulluk nafakası (m.175).",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://furkanarikan.av.tr/araclar" },
        { "@type": "ListItem", position: 3, name: "Nafaka Hesaplama", item: "https://furkanarikan.av.tr/nafaka-hesaplama" },
      ],
    },
  ],
};

const ORNEK_GELIR = 40000;
const ORNEK = calculateNafakaAraligi(ORNEK_GELIR);

export default function NafakaHesaplamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <div className="pt-28 pb-16" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Ücretsiz Araç · Aile Hukuku
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Nafaka Hesaplama
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            Nafaka miktarının sabit bir yasal formülü yoktur; bu araç iştirak nafakasında sık
            kullanılan tahmini bir aralık gösterir.
          </p>
        </div>
      </div>

      <ToolBreadcrumb current="Nafaka Hesaplama" />

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <NafakaForm />

          <ToolExplainer
            title="Nafaka aralığı nasıl hesaplanır?"
            sections={[
              {
                heading: "Nasıl hesaplanır?",
                body: (
                  <p>
                    Araç tek bir işlem yapar: ödeyecek tarafın aylık net gelirini %10 ve %25 ile
                    çarparak bir alt ve bir üst sınır gösterir. Örneğin{" "}
                    {formatTL(ORNEK_GELIR, 0)} net gelir için aralık{" "}
                    {formatTL(ORNEK.altSinir, 0)} – {formatTL(ORNEK.ustSinir, 0)} olur. Bu oranlar
                    bir kanun maddesinden, tarifeden veya içtihattan alınmamıştır; mahkemenin
                    vereceği tutarı öngörmek için değil, ilk fikir edinmek için kullanılmalıdır.
                    Gelir düzensizse (prim, ek ödeme vb.) yıllık gelirin aylık ortalamasını girmek
                    daha gerçekçi bir başlangıç noktası sunar.
                  </p>
                ),
              },
              {
                heading: "Hangi bilgiler gerekir?",
                body: (
                  <>
                    <p>Araç için yalnızca ödeyecek tarafın aylık net geliri yeterlidir. Mahkeme
                      sürecinde ise genellikle şu belgeler önem kazanır:</p>
                    <ul>
                      <li>Tarafların maaş bordroları, SGK kayıtları ve varsa kira gibi ek gelirleri</li>
                      <li>Çocuğun okul, sağlık, kreş ve barınma giderlerini gösteren belgeler</li>
                      <li>Tarafların kendi kira, kredi ve zorunlu giderleri</li>
                      <li>Evlilik süresi ve varsa kusur durumuna ilişkin deliller</li>
                    </ul>
                  </>
                ),
              },
              {
                heading: "Dikkat edilmesi gerekenler",
                body: (
                  <ul>
                    <li>
                      Araç yalnızca girdiğiniz net gelir rakamını kullanır; mahkeme maaş dışındaki
                      düzenli gelirleri ve mal varlığını da dikkate alabilir.
                    </li>
                    <li>
                      Tedbir nafakası dava sürerken, iştirak ve yoksulluk nafakası ise boşanma
                      kararıyla birlikte belirlenir; araç bu türleri ayırt etmez.
                    </li>
                    <li>
                      Aralık çocuk sayısını ayırt etmez; iştirak nafakası uygulamada her çocuk için
                      ayrı ayrı belirlenir.
                    </li>
                    <li>
                      Hükmedilen nafaka, koşullar değiştiğinde artırılabilir veya azaltılabilir.
                      Mevcut bir karardaki yıllık artışı görmek için{" "}
                      <Link href="/nafaka-artisi-hesaplama" className="underline font-medium" style={{ color: "#14342B" }}>
                        Nafaka Artışı Hesaplama
                      </Link>{" "}
                      aracını kullanabilirsiniz.
                    </li>
                  </ul>
                ),
              },
            ]}
          />

          <div className="mt-10 pt-8" style={{ borderTop: "1px solid #EBE0D4" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Hakimin dikkate aldığı gerçek kriterler
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#3D5A50" }}>
              TMK m.330 uyarınca iştirak nafakasında çocuğun ihtiyaçları, ana-babanın hayat
              koşulları ve ödeme gücü, çocuğun varsa kendi geliri birlikte değerlendirilir.
              Yoksulluk nafakasında (m.175-176) ise tarafların kusur durumu, boşanma nedeniyle
              yoksullaşma, yükümlünün mali gücü, evlilik süresi ve hakkaniyet esas alınır.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3D5A50" }}>
              Bu kriterlerin somut olayınıza nasıl uygulanacağı, benzer davalardaki emsal
              kararlara ve tarafların sunacağı delillere bağlıdır. Yukarıdaki aralık yalnızca
              genel bir fikir vermek içindir. İnternette dolaşan yüzde iddialarının neden resmi
              olmadığını{" "}
              <Link href="/makaleler/nafakada-yuzde-kac-sorusu" className="underline font-medium" style={{ color: "#14342B" }}>
                ayrı bir makalede
              </Link>{" "}
              detaylandırdık.
            </p>
          </div>

          <p className="text-xs leading-relaxed mt-8" style={{ color: "#8A9A93" }}>
            Bu araç bilgilendirme amaçlıdır, hukuki tavsiye niteliği taşımaz ve resmi bir
            hesaplama yöntemine dayanmaz.
          </p>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
