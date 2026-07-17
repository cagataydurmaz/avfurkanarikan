// Kaynak: 492 sayılı Harçlar Kanunu (1) Sayılı Tarife B-I (mevzuat.gov.tr, resmi metin,
// 2026-07-17 doğrulandı). Tahsil harcı oranları İİK m.28/b — icra emri/ödeme emri sonrası
// tahsilat aşamasına göre kademelidir.
export const BASVURMA_HARCI = 732.0;
export const VEKALETNAME_SURETI_HARCI = 104.0;
export const ILAMSIZ_PESIN_HARC_ORANI = 0.005;

export const TAHSIL_HARCI_ORANLARI = {
  hacizOncesi: 0.0455,
  hacizSonrasi: 0.091,
  satisIle: 0.1138,
} as const;

export type TahsilAsamasi = keyof typeof TAHSIL_HARCI_ORANLARI;
export type TakipTuru = "ilamli" | "ilamsiz";

export function calculateIcraMasrafi(
  takipTuru: TakipTuru,
  alacakTutari: number,
  asama: TahsilAsamasi
) {
  const pesinHarc =
    takipTuru === "ilamsiz" ? Math.round(alacakTutari * ILAMSIZ_PESIN_HARC_ORANI * 100) / 100 : 0;
  const baslangicToplami =
    Math.round((BASVURMA_HARCI + VEKALETNAME_SURETI_HARCI + pesinHarc) * 100) / 100;

  const tahsilHarciOrani = TAHSIL_HARCI_ORANLARI[asama];
  const tahsilHarci = Math.round(alacakTutari * tahsilHarciOrani * 100) / 100;

  return { pesinHarc, baslangicToplami, tahsilHarci, tahsilHarciOrani };
}
