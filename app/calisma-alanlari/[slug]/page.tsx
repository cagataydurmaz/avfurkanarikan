import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { practiceAreas, getPracticeAreaBySlug } from "@/lib/practiceAreas";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: {
      canonical: `/calisma-alanlari/${area.slug}`,
    },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      type: "website",
      locale: "tr_TR",
      siteName: "Av. Furkan Arıkan Hukuk Bürosu",
      url: `/calisma-alanlari/${area.slug}`,
    },
  };
}

export default async function PracticeAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);
  if (!area) notFound();

  const relatedAreas = practiceAreas.filter((a) =>
    area.relatedSlugs.includes(a.slug)
  );

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://furkanarikan.av.tr" },
        { "@type": "ListItem", position: 2, name: "Çalışma Alanları", item: "https://furkanarikan.av.tr/#calisma-alanlari" },
        { "@type": "ListItem", position: 3, name: area.title, item: `https://furkanarikan.av.tr/calisma-alanlari/${area.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: area.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: `Av. Furkan Arıkan - ${area.title}`,
      url: `https://furkanarikan.av.tr/calisma-alanlari/${area.slug}`,
      provider: {
        "@type": "Person",
        name: "Furkan Arıkan",
        jobTitle: "Avukat",
      },
      areaServed: { "@type": "City", name: "İstanbul" },
      serviceType: area.title,
    },
  ];

  return (
    <>
      {jsonLd.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}
      <Navbar />

      {/* Header */}
      <div className="relative overflow-hidden pt-28 pb-14" style={{ background: "linear-gradient(135deg, #0d2420 0%, #14342B 100%)" }}>
        {/* Photo - right edge, desktop only, blended into background */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[38%] pointer-events-none" aria-hidden="true">
          <Image
            src="/furkan-kitaplik.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 38vw, 0px"
            priority
            className="object-cover"
            style={{ objectPosition: "50% 25%", filter: "grayscale(0.35) contrast(1.05)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #0d2420 0%, rgba(13,36,32,0.85) 22%, rgba(13,36,32,0.4) 55%, rgba(13,36,32,0.2) 100%)",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 md:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "rgba(197,168,128,0.7)" }} aria-label="Breadcrumb">
            <Link href="/" style={{ color: "rgba(197,168,128,0.7)" }} className="hover:text-[#C5A880] transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/#calisma-alanlari" style={{ color: "rgba(197,168,128,0.7)" }} className="hover:text-[#C5A880] transition-colors">Çalışma Alanları</Link>
            <span>/</span>
            <span style={{ color: "#C5A880" }}>{area.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
              Çalışma Alanları
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold mb-5"
            style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {area.title}
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "rgba(244,237,228,0.75)" }}>
            {area.intro}
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="py-16 md:py-20" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left: article content */}
            <div className="lg:col-span-2">

              {/* Sections */}
              <div className="space-y-10">
                {area.sections.map((section, i) => (
                  <article key={i}>
                    <h2
                      className="text-xl md:text-2xl font-bold mb-4"
                      style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {section.heading}
                    </h2>
                    <div className="space-y-3">
                      {section.paragraphs.map((p, j) => (
                        <p key={j} className="text-base leading-relaxed" style={{ color: "#2D4A3E" }}>
                          {p}
                        </p>
                      ))}
                    </div>
                    {section.items && (
                      <ul className="mt-4 space-y-2">
                        {section.items.map((item, k) => (
                          <li key={k} className="flex items-start gap-3">
                            <div
                              className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                              style={{ backgroundColor: "#C5A880" }}
                              aria-hidden="true"
                            />
                            <span className="text-sm leading-relaxed" style={{ color: "#2D4A3E" }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {i < area.sections.length - 1 && (
                      <div className="mt-10 h-px" style={{ backgroundColor: "#E5D9CC" }} aria-hidden="true" />
                    )}
                  </article>
                ))}
              </div>

              {/* FAQ */}
              <section className="mt-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
                  <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
                    Sıkça Sorulan Sorular
                  </span>
                </div>
                <h2
                  className="text-2xl font-bold mb-8"
                  style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {area.title} Hakkında Merak Edilenler
                </h2>
                <div className="space-y-5">
                  {area.faq.map((item, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl border"
                      style={{ backgroundColor: "#fff", borderColor: "#E5D9CC" }}
                    >
                      <h3
                        className="text-base font-semibold mb-2"
                        style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}
                      >
                        {item.question}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#3D5A50" }}>
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Disclaimer */}
              <p className="mt-10 text-xs leading-relaxed" style={{ color: "#7A9089" }}>
                Bu sayfa genel bilgilendirme amaçlıdır; hukuki danışmanlık niteliği taşımaz. Kendi durumunuza özgü değerlendirme için bir avukata başvurmanız önerilir.
              </p>
            </div>

            {/* Right: sticky sidebar */}
            <aside className="space-y-6">
              <div className="lg:sticky lg:top-24 space-y-6">

                {/* CTA card */}
                <div
                  className="p-6 rounded-2xl"
                  style={{ background: "linear-gradient(135deg, #0d2420 0%, #14342B 100%)" }}
                >
                  <p className="text-xs tracking-widest uppercase font-semibold mb-3" style={{ color: "#C5A880" }}>
                    Hukuki Destek
                  </p>
                  <p className="text-base font-semibold mb-2" style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}>
                    {area.title} konusunda danışmanlık almak ister misiniz?
                  </p>
                  <p className="text-xs mb-5 leading-relaxed" style={{ color: "rgba(244,237,228,0.6)" }}>
                    Danışmanlık görüşmesi ücret karşılığı yapılmaktadır.
                  </p>
                  <a
                    href="https://wa.me/905354874099?text=Merhaba%2C%20hukuki%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: "#25D366", color: "#fff" }}
                  >
                    <WhatsAppIcon />
                    WhatsApp ile Yazın
                  </a>
                  <a
                    href="tel:+905354874099"
                    className="mt-3 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold border transition-all duration-300 hover:bg-white/10"
                    style={{ color: "#C5A880", borderColor: "rgba(197,168,128,0.4)" }}
                  >
                    <PhoneIcon />
                    +90 535 487 40 99
                  </a>
                </div>

                {/* Related areas */}
                {relatedAreas.length > 0 && (
                  <div
                    className="p-5 rounded-2xl border"
                    style={{ backgroundColor: "#fff", borderColor: "#E5D9CC" }}
                  >
                    <p className="text-xs tracking-widest uppercase font-semibold mb-4" style={{ color: "#C5A880" }}>
                      İlgili Alanlar
                    </p>
                    <div className="space-y-2">
                      {relatedAreas.map((r) => (
                        <Link
                          key={r.slug}
                          href={`/calisma-alanlari/${r.slug}`}
                          className="flex items-center justify-between p-3 rounded-lg transition-colors duration-200 hover:bg-[#F4EDE4]"
                          style={{ color: "#14342B" }}
                        >
                          <span className="text-sm font-medium">{r.title}</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* All areas link */}
                <Link
                  href="/#calisma-alanlari"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium border transition-all duration-300"
                  style={{ color: "#14342B", borderColor: "#C5A880" }}
                >
                  Tüm Çalışma Alanları
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.5h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
