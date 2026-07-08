import Link from "next/link";
import { Post } from "@/lib/posts";
import { categoryIcons, ScalesIcon } from "./PracticeIcons";

export default function BlogPreview({ posts }: { posts: Post[] }) {
  return (
    <section id="makaleler" className="py-20 md:py-28" style={{ backgroundColor: "#F4EDE4" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
            Hukuki Bilgi
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold max-w-sm"
            style={{
              color: "#14342B",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            Hukuk Makaleleri
          </h2>
          <Link
            href="/makaleler"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border transition-all duration-300 hover:bg-[#14342B] hover:text-[#F4EDE4]"
            style={{ color: "#14342B", borderColor: "#14342B" }}
          >
            Tüm Makaleler
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => {
            const CategoryIcon = categoryIcons[post.category] ?? ScalesIcon;
            return (
            <Link
              key={post.slug}
              href={`/makaleler/${post.slug}`}
              className="group flex flex-col rounded-lg overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ borderColor: "#EBE0D4", backgroundColor: "#fff" }}
            >
              {/* Category visual */}
              <div
                className="h-44 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #14342B 0%, #1B3A2F 100%)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: "repeating-linear-gradient(45deg, #C5A880 0px, #C5A880 1px, transparent 1px, transparent 8px)",
                  }}
                  aria-hidden="true"
                />
                <div
                  className="absolute flex items-center justify-center opacity-[0.14] scale-[3.4] transition-transform duration-500 group-hover:scale-[3.7]"
                  aria-hidden="true"
                >
                  <CategoryIcon />
                </div>
                <span
                  className="relative z-10 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded border"
                  style={{ color: "#C5A880", borderColor: "rgba(197,168,128,0.4)", backgroundColor: "rgba(13,36,32,0.55)" }}
                >
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs" style={{ color: "#C5A880" }}>
                    {post.dateFormatted}
                  </span>
                  <span style={{ color: "#EBE0D4" }}>·</span>
                  <span className="text-xs" style={{ color: "#3D5A50" }}>
                    {post.readingTime} dk okuma
                  </span>
                </div>

                <h3
                  className="text-base font-bold mb-2.5 flex-1 leading-snug group-hover:text-opacity-80 transition-colors"
                  style={{
                    color: "#14342B",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                >
                  {post.title}
                </h3>

                <p className="text-sm line-clamp-3 mb-4" style={{ color: "#3D5A50" }}>
                  {post.excerpt}
                </p>

                <span
                  className="text-xs font-semibold flex items-center gap-1.5 mt-auto"
                  style={{ color: "#C5A880" }}
                >
                  Devamını Oku
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
