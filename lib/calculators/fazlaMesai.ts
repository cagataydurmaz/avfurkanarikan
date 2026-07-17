// Kaynak: 4857 sayılı İş Kanunu m.41 (%50 zam oranı, mevzuat.gov.tr) — saatlik ücret böleni
// (aylık brüt ÷ 225) yerleşik bordro/içtihat uygulamasıdır, kanun metninde sayı geçmez.
// 2026-07-17 doğrulandı.
export const SAATLIK_UCRET_BOLENI = 225;
export const FAZLA_MESAI_ZAM_ORANI = 0.5;
export const YILLIK_UST_SINIR_SAAT = 270;

export function calculateFazlaMesai(aylikBrutUcret: number, fazlaMesaiSaati: number) {
  const saatlikUcret = aylikBrutUcret / SAATLIK_UCRET_BOLENI;
  const fazlaMesaiSaatUcreti = Math.round(saatlikUcret * (1 + FAZLA_MESAI_ZAM_ORANI) * 100) / 100;
  const toplamUcret = Math.round(fazlaMesaiSaatUcreti * fazlaMesaiSaati * 100) / 100;

  return { saatlikUcret: Math.round(saatlikUcret * 100) / 100, fazlaMesaiSaatUcreti, toplamUcret };
}
