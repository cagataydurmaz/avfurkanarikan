import type { Lang } from "./dictionary";
import { homepageBulletsEn, practiceAreasEn, type PracticeAreaHomepageBullets, type PracticeAreaTranslation } from "./practiceAreasEn";
import { homepageBulletsRu, practiceAreasRu } from "./practiceAreasRu";
import { homepageBulletsAr, practiceAreasAr } from "./practiceAreasAr";

const AREAS: Partial<Record<Lang, Record<string, PracticeAreaTranslation>>> = {
  en: practiceAreasEn,
  ru: practiceAreasRu,
  ar: practiceAreasAr,
};
const BULLETS: Partial<Record<Lang, Record<string, PracticeAreaHomepageBullets>>> = {
  en: homepageBulletsEn,
  ru: homepageBulletsRu,
  ar: homepageBulletsAr,
};

/** Seçili dildeki çalışma alanı çevirisi (yoksa undefined → Türkçe gösterilir). */
export function areaTranslation(lang: Lang, slug: string): PracticeAreaTranslation | undefined {
  return AREAS[lang]?.[slug];
}

/** Ana sayfa çalışma alanı başlık/madde çevirisi. */
export function areaBullets(lang: Lang, slug: string): PracticeAreaHomepageBullets | undefined {
  return BULLETS[lang]?.[slug];
}
