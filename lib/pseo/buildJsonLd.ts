import type { PseoDistrict, PseoService } from "./types";

const BASE_URL = "https://furkanarikan.av.tr";
const OFFICE_ADDRESS = {
  streetAddress: "Sinanpaşa Mh. Şht. Asım Cd. No:37/12",
  addressLocality: "Beşiktaş",
  addressRegion: "İstanbul",
  postalCode: "34330",
  addressCountry: "TR",
};

export function buildPseoJsonLd(district: PseoDistrict, service: PseoService) {
  const pageUrl = `${BASE_URL}/${service.urlSlug}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": ["LegalService", "LocalBusiness"],
      "@id": `${pageUrl}#business`,
      name: "Av. Furkan Arıkan Hukuk Bürosu",
      url: pageUrl,
      description: service.metaDescription,
      telephone: "+905354874099",
      email: "av.furkanarikan1@gmail.com",
      address: {
        "@type": "PostalAddress",
        ...OFFICE_ADDRESS,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.0428,
        longitude: 29.0044,
      },
      areaServed: {
        "@type": "City",
        name: district.name,
      },
      serviceType: service.name,
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: [
        "https://furkanarikan.av.tr",
        "https://www.linkedin.com/in/avfurkanar%C4%B1kan/",
      ],
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
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Furkan Arıkan",
      jobTitle: "Avukat",
      worksFor: { "@id": `${pageUrl}#business` },
      sameAs: [
        "https://www.linkedin.com/in/avfurkanar%C4%B1kan/",
      ],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "MEF Üniversitesi",
          department: "Hukuk Fakültesi",
        },
      ],
      memberOf: {
        "@type": "Organization",
        name: "İstanbul Barosu",
      },
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
      author: { "@id": `${BASE_URL}/#person` },
      datePublished: district.publishedDate,
      dateModified: district.publishedDate,
    },
  ];
}
