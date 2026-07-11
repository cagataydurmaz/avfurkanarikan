export type PseoFAQ = {
  question: string;
  answer: string;
};

export type PseoStep = {
  name: string;
  text: string;
};

export type PseoCard = {
  title: string;
  description: string;
};

export type PseoDistrict = {
  slug: string;
  name: string;
  locative: string;
  ablative: string;
  genitive: string;
  dative: string;
  courthouse: string;
  taxOffice: string;
  neighborhoods: string[];
  transport: string;
  officeNeighborhood: string;
  isOfficeLocation: boolean;
};

export type PseoService = {
  slug: string;
  urlSlug: string;
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  aboutParagraph: string;
  highlightCards: PseoCard[];
  processSteps: PseoStep[];
  servicesList: string[];
  localParagraphs: [string, string];
  faqs: PseoFAQ[];
  howToTitle: string;
  howToSteps: PseoStep[];
  crosslinkLabel: string;
};
