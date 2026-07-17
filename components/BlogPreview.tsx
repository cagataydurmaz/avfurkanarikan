import Link from "next/link";
import { Post } from "@/lib/posts";

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
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/makaleler/${post.slug}`}
              className="group flex flex-col rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ borderColor: "#EBE0D4", backgroundColor: "#fff" }}
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <span
                  className="text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full whitespace-nowrap"
                  style={{ color: "#7f5c2c", backgroundColor: "rgba(197,168,128,0.16)" }}
                >
                  {post.category}
                </span>
                <span className="text-xs whitespace-nowrap" style={{ color: "#8A9A93" }}>
                  {post.dateFormatted}
                </span>
              </div>

              <h3
                className="text-lg font-bold mb-3 leading-snug group-hover:text-opacity-80 transition-colors"
                style={{
                  color: "#14342B",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                {post.title}
              </h3>

              <p className="text-sm line-clamp-3 mb-5 flex-1" style={{ color: "#3D5A50" }}>
                {post.excerpt}
              </p>

              <span
                className="text-xs font-semibold flex items-center gap-1.5"
                style={{ color: "#C5A880" }}
              >
                Devamını Oku
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
