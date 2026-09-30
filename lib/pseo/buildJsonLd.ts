import type { PseoDistrict, PseoService } from "./types";

const BASE_URL = "https://furkanarikan.av.tr";
const LEGAL_SERVICE_ID = `${BASE_URL}/#legalservice`;
const PERSON_ID = `${BASE_URL}/#person`;

export function buildPseoJsonLd(district: PseoDistrict, service: PseoService) {
  const pageUrl = `${BASE_URL}/${service.urlSlug}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: service.name,
      url: pageUrl,
      description: service.metaDescription,
      serviceType: service.name,
      provider: { "@id": LEGAL_SERVICE_ID },
      areaServed: {
        "@type": "AdministrativeArea",
        name: `${district.name}, İstanbul`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: service.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: `${district.name} Avukat`, item: `${BASE_URL}/${district.slug}-avukat` },
        { "@type": "ListItem", position: 3, name: service.name, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${pageUrl}#howto`,
      name: service.howToTitle,
      step: service.howToSteps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.name,
        text: s.text,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: service.metaTitle,
      author: { "@id": PERSON_ID },
      about: { "@id": `${pageUrl}#service` },
      publisher: { "@id": LEGAL_SERVICE_ID },
      datePublished: district.publishedDate,
      dateModified: district.publishedDate,
    },
  ];
}
