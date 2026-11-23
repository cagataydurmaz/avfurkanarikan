import type { DeepContent, DeepSection } from "./types";
import { besiktasDeep } from "./besiktas";
import { sisliDeep } from "./sisli";
import { kadikoyDeep } from "./kadikoy";
import { uskudarDeep } from "./uskudar";
import { atasehirDeep } from "./atasehir";
import { bakirkoyDeep } from "./bakirkoy";
import { basaksehirDeep } from "./basaksehir";
import { kucukcekmeceDeep } from "./kucukcekmece";
import { avcilarDeep } from "./avcilar";
import { buyukcekmeceDeep } from "./buyukcekmece";

/** Hedef ilçeler için elle yazılmış derin içerik. */
export const DEEP_UPDATED = "2026-11-12";
/** Tüm pSEO sayfalarında SSS cevaplarının genişletildiği tarih (görünür içerik değişikliği). */
export const CONTENT_UPDATED = "2026-11-05";

/** Sayfanın görünür içeriğinin en son değiştiği tarih (şema, site haritası ve sayfadaki künye için). */
export function pageModified(districtSlug: string, serviceSlug: string, publishedDate: string): string {
  if (getDeep(districtSlug, serviceSlug).length > 0) return DEEP_UPDATED;
  return publishedDate > CONTENT_UPDATED ? publishedDate : CONTENT_UPDATED;
}

const DEEP: Record<string, DeepContent> = {
  besiktas: besiktasDeep,
  sisli: sisliDeep,
  kadikoy: kadikoyDeep,
  uskudar: uskudarDeep,
  atasehir: atasehirDeep,
  bakirkoy: bakirkoyDeep,
  basaksehir: basaksehirDeep,
  kucukcekmece: kucukcekmeceDeep,
  avcilar: avcilarDeep,
  buyukcekmece: buyukcekmeceDeep,
};

export function getDeep(districtSlug: string, serviceSlug: string): DeepSection[] {
  return DEEP[districtSlug]?.[serviceSlug] ?? [];
}

export const TARGET_DISTRICTS = ["besiktas", "sisli", "kadikoy", "uskudar", "atasehir", "bakirkoy", "basaksehir", "kucukcekmece", "avcilar", "buyukcekmece"];
