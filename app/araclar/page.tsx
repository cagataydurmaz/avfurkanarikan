import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { tools } from "@/lib/calculators/tools";

export const metadata: Metadata = {
  title: "Hukuki Hesaplama Araçları",
  description:
    "Kıdem tazminatı, kira artışı ve daha fazlası için ücretsiz hukuki hesaplama araçları. Av. Furkan Arıkan Hukuk Bürosu.",
  alternates: {
    canonical: "/araclar",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
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
  ],
};

export default function AraclarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <div className="pt-28 pb-16" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Hesaplama Araçları
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Hukuki Hesaplama Araçları
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            Güncel mevzuata göre hazırlanmış ücretsiz araçlar. Sonuçlar bilgilendirme
            amaçlıdır; kesin hukuki değerlendirme için lütfen iletişime geçin.
          </p>
        </div>
      </div>

      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="group flex flex-col rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: "#EBE0D4", backgroundColor: "#fff" }}
              >
                <span
                  className="text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full whitespace-nowrap self-start mb-4"
                  style={{ color: "#7f5c2c", backgroundColor: "rgba(197,168,128,0.16)" }}
                >
                  {tool.category}
                </span>

                <h2
                  className="text-lg font-bold mb-3 leading-snug group-hover:text-opacity-80 transition-colors"
                  style={{
                    color: "#14342B",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                >
                  {tool.title}
                </h2>

                <p className="text-sm mb-5 flex-1" style={{ color: "#3D5A50" }}>
                  {tool.description}
                </p>

                <span
                  className="text-xs font-semibold flex items-center gap-1.5"
                  style={{ color: "#C5A880" }}
                >
                  Hemen Hesapla
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
