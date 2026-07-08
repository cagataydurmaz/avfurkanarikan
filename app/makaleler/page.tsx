import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Hukuk Makaleleri",
  description:
    "Ceza, iş, aile ve gayrimenkul hukuku başlıklarında bilgilendirici makaleler. Av. Furkan Arıkan Hukuk Bürosu.",
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
      name: "Makaleler",
      item: "https://furkanarikan.av.tr/makaleler",
    },
  ],
};


export default function MakalelerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Page header */}
      <div className="pt-28 pb-16" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Hukuk Makaleleri
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Hukuki Bilgi ve Kaynaklar
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
            Bu makaleler genel bilgilendirme amaçlıdır; hukuki danışmanlık niteliği taşımaz.
            Kendi durumunuza özgü değerlendirme için bir avukata başvurmanız önerilir.
          </p>
        </div>
      </div>

      {/* Articles */}
      <main className="py-16 md:py-20 min-h-screen" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/makaleler/${post.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl"
                style={{ borderColor: "#E5D9CC", backgroundColor: "#fff" }}
              >
                {/* Card top band */}
                <div
                  className="px-6 py-5 flex items-center justify-between"
                  style={{ background: "linear-gradient(135deg, #0d2420 0%, #14342B 100%)" }}
                >
                  <span
                    className="text-xs font-semibold tracking-wide px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: "rgba(197,168,128,0.2)", color: "#C5A880" }}
                  >
                    {post.category}
                  </span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs" style={{ color: "#7A9089" }}>
                      {post.dateFormatted}
                    </span>
                    <span className="text-xs" style={{ color: "#C5D0CB" }}>·</span>
                    <span className="text-xs font-medium" style={{ color: "#C5A880" }}>
                      {post.readingTime} dk okuma
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="text-lg font-bold mb-3 leading-snug flex-1 group-hover:text-[#0d2420] transition-colors duration-300"
                    style={{
                      color: "#14342B",
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm leading-relaxed line-clamp-3 mb-5" style={{ color: "#5A7A70" }}>
                    {post.excerpt}
                  </p>

                  {/* Divider */}
                  <div className="h-px mb-4" style={{ backgroundColor: "#EBE0D4" }} aria-hidden="true" />

                  {/* Read more */}
                  <span
                    className="text-xs font-semibold flex items-center gap-1.5 transition-gap duration-300"
                    style={{ color: "#C5A880" }}
                  >
                    Makaleyi Oku
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
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
