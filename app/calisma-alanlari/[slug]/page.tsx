import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { practiceAreas, getPracticeAreaBySlug } from "@/lib/practiceAreas";
import PracticeAreaContent from "@/components/pra/PracticeAreaContent";

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
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: area.metaTitle,
      description: area.metaDescription,
      images: ["/opengraph-image"],
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
      "@type": "Service",
      "@id": `https://furkanarikan.av.tr/calisma-alanlari/${area.slug}#service`,
      name: area.title,
      url: `https://furkanarikan.av.tr/calisma-alanlari/${area.slug}`,
      serviceType: area.title,
      provider: { "@id": "https://furkanarikan.av.tr/#legalservice" },
      areaServed: { "@type": "City", name: "İstanbul" },
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
      <PracticeAreaContent area={area} relatedAreas={relatedAreas} />
    </>
  );
}
