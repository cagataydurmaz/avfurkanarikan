import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { posts, getPostBySlug } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: "Av. Furkan Arıkan" }],
    alternates: {
      canonical: `/makaleler/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Av. Furkan Arıkan"],
      locale: "tr_TR",
      siteName: "Av. Furkan Arıkan Hukuk Bürosu",
      url: `/makaleler/${post.slug}`,
    },
  };
}

export default async function MakalePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const jsonLd: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: "Av. Furkan Arıkan",
        url: "https://furkanarikan.av.tr/#person",
      },
      publisher: {
        "@type": "Organization",
        name: "Av. Furkan Arıkan Hukuk Bürosu",
        url: "https://furkanarikan.av.tr",
      },
      url: `https://furkanarikan.av.tr/makaleler/${post.slug}`,
    },
    {
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
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: `https://furkanarikan.av.tr/makaleler/${post.slug}`,
        },
      ],
    },
  ];

  if (post.faq && post.faq.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Article header */}
      <div className="pt-28 pb-12" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-6 text-xs" aria-label="Konum">
            <Link
              href="/"
              className="transition-colors"
              style={{ color: "rgba(197,168,128,0.7)" }}
            >
              Ana Sayfa
            </Link>
            <span style={{ color: "rgba(197,168,128,0.4)" }}>/</span>
            <Link
              href="/makaleler"
              className="transition-colors"
              style={{ color: "rgba(197,168,128,0.7)" }}
            >
              Makaleler
            </Link>
            <span style={{ color: "rgba(197,168,128,0.4)" }}>/</span>
            <span style={{ color: "#C5A880" }} className="truncate max-w-[200px]">
              {post.category}
            </span>
          </nav>

          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-2.5 py-1 rounded"
            style={{ backgroundColor: "rgba(197,168,128,0.15)", color: "#C5A880" }}
          >
            {post.category}
          </span>

          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-snug"
            style={{
              color: "#F4EDE4",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: "rgba(244,237,228,0.6)" }}>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Av. Furkan Arıkan
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              {post.dateFormatted}
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {post.readingTime} dk okuma
            </span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <main className="py-12 md:py-16" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          {/* Disclaimer */}
          <div
            className="mb-8 p-4 rounded border text-sm"
            style={{
              borderColor: "#C5A880",
              backgroundColor: "rgba(197,168,128,0.07)",
              color: "#3D5A50",
            }}
          >
            Bu makale genel bilgilendirme amaçlıdır ve hukuki danışmanlık niteliği taşımaz.
            Kendi durumunuza özgü hukuki destek için lütfen bir avukata başvurun.
          </div>

          {/* Content */}
          <article
            className="prose-law"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author card */}
          <div
            className="mt-12 p-6 rounded-lg border flex gap-4 items-start"
            style={{ borderColor: "#EBE0D4", backgroundColor: "#fff" }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold"
              style={{
                backgroundColor: "#14342B",
                color: "#C5A880",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              FA
            </div>
            <div>
              <p
                className="font-semibold mb-0.5"
                style={{
                  color: "#14342B",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                Av. Furkan Arıkan
              </p>
              <p className="text-xs mb-2" style={{ color: "#C5A880" }}>
                İstanbul Barosu - Sicil No: 72621 | MEF Üniversitesi Hukuk Fakültesi (2019)
              </p>
              <p className="text-sm" style={{ color: "#3D5A50" }}>
                Bu makale Av. Furkan Arıkan tarafından hazırlanmıştır.
                Hukuki danışmanlık için{" "}
                <Link
                  href="/#iletisim"
                  className="font-medium underline"
                  style={{ color: "#14342B" }}
                >
                  iletişim sayfasını
                </Link>{" "}
                ziyaret edebilirsiniz.
              </p>
            </div>
          </div>

          {/* Back button */}
          <div className="mt-8">
            <Link
              href="/makaleler"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: "#14342B" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Tüm Makaleler
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
