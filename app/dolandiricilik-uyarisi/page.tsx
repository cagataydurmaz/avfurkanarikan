import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Dolandırıcılık Uyarısı",
  description:
    "Av. Furkan Arıkan veya büro adına arayarak ödeme ya da bilgi isteyen kişilere itibar etmeyiniz. Büronun resmi iletişim kanalları ve teyit yöntemi.",
  alternates: { canonical: "/dolandiricilik-uyarisi" },
  robots: { index: true, follow: true },
};

export default function DolandiricilikUyarisiPage() {
  return (
    <>
      <Navbar />

      <div className="pt-28 pb-12" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <nav className="flex items-center gap-2 mb-6 text-xs" aria-label="Konum">
            <Link href="/" className="transition-colors" style={{ color: "rgba(197,168,128,0.7)" }}>
              Ana Sayfa
            </Link>
            <span style={{ color: "rgba(197,168,128,0.4)" }}>/</span>
            <span style={{ color: "#C5A880" }}>Dolandırıcılık Uyarısı</span>
          </nav>
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug"
            style={{ color: "#F4EDE4", fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Dolandırıcılık Uyarısı
          </h1>
          <p className="mt-3 text-sm" style={{ color: "rgba(244,237,228,0.6)" }}>
            Son güncelleme: 17 Kasım 2026
          </p>
        </div>
      </div>

      <main className="py-12 md:py-16" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <article className="prose-law">
            <p>
              Son dönemde kendini Av. Furkan Arıkan olarak tanıtan ya da büro adına arayarak veya
              mesaj göndererek para, ödeme ya da kişisel bilgi isteyen kişiler olduğu bildirilmiştir.
              Bu kişilerin Av. Furkan Arıkan ve büro ile hiçbir ilgisi yoktur; bu tür taleplere itibar
              etmeyiniz.
            </p>

            <h2>Büronun resmi iletişim kanalları</h2>
            <ul>
              <li>
                Telefon ve WhatsApp: <a href="tel:+905354874099">+90 535 487 40 99</a>
              </li>
              <li>
                E-posta: <a href="mailto:av.furkanarikan1@gmail.com">av.furkanarikan1@gmail.com</a>
              </li>
              <li>Adres: Sinanpaşa Mh. Şht. Asım Cd. No:37/12 Beşiktaş/İstanbul</li>
            </ul>

            <h2>Şüpheli bir arama veya mesaj alırsanız</h2>
            <ul>
              <li>
                Başka bir numaradan aranır ve ödeme ya da bilgi istenirse, hiçbir işlem yapmadan önce
                yukarıdaki resmi numarayı arayarak teyit ediniz.
              </li>
              <li>Size gönderilen bağlantılara tıklamayınız, doğrulama kodu ve şifre paylaşmayınız.</li>
              <li>
                Bir dolandırıcılık girişimiyle karşılaştıysanız en yakın kolluk birimine veya Cumhuriyet
                Başsavcılığı&apos;na başvurabilirsiniz.
              </li>
            </ul>
          </article>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: "#14342B" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
