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
      <div
        className="pt-28 pb-16"
        style={{ backgroundColor: "#14342B" }}
      >
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Hukuk Makaleleri
            </span>
          </div>
          <h1
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{
              color: "#F4EDE4",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            Hukuki Bilgi ve Kaynaklar
          </h1>
          <p className="text-sm max-w-lg" style={{ color: "rgba(244,237,228,0.65)" }}>
            Bu makaleler genel bilgilendirme amaçlıdır; hukuki danışmanlık niteliği taşımaz.
            Kendi durumunuza özgü değerlendirme için bir avukata başvurmanız önerilir.
          </p>
        </div>
      </div>

      {/* Articles */}
      <main
        className="py-16 md:py-20 min-h-screen"
        style={{ backgroundColor: "#F4EDE4" }}
      >
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="grid gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/makaleler/${post.slug}`}
                className="group flex gap-5 p-6 rounded-lg border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                style={{
                  borderColor: "#EBE0D4",
                  backgroundColor: "#fff",
                }}
              >
                {/* Category pill */}
                <div
                  className="hidden sm:flex flex-shrink-0 w-2 rounded-full self-stretch"
                  style={{ backgroundColor: "#C5A880" }}
                  aria-hidden="true"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded"
                      style={{ backgroundColor: "#EBE0D4", color: "#14342B" }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: "#3D5A50" }}>
                      {post.dateFormatted}
                    </span>
                    <span className="text-xs" style={{ color: "#C5A880" }}>
                      {post.readingTime} dk
                    </span>
                  </div>

                  <h2
                    className="text-lg font-bold mb-2 leading-snug"
                    style={{
                      color: "#14342B",
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    {post.title}
                  </h2>

                  <p className="text-sm line-clamp-2 mb-3" style={{ color: "#3D5A50" }}>
                    {post.excerpt}
                  </p>

                  <span
                    className="text-xs font-semibold flex items-center gap-1.5"
                    style={{ color: "#C5A880" }}
                  >
                    Makaleyi Oku
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
