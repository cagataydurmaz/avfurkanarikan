export type DeepSection = { heading: string; paragraphs: string[] };
/** Hizmet slug'ı → o sayfaya özgü derin içerik bölümleri */
export type DeepContent = Record<string, DeepSection[]>;
