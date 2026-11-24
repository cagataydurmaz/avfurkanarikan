/** id: isteğe bağlı bölüm bağlantısı (ör. "tarabya"), sayfa içi #bağlantı için */
export type DeepSection = { heading: string; paragraphs: string[]; id?: string };
/** Hizmet slug'ı → o sayfaya özgü derin içerik bölümleri */
export type DeepContent = Record<string, DeepSection[]>;
