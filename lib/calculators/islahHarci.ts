// Kaynak: 492 sayılı Harçlar Kanunu (1) Sayılı Tarife + Yargıtay 2.HD E.2016/9968 K.2018/929 —
// ıslah harcı yalnızca artan dava değeri üzerinden, dava açılışındaki nispi oranla (binde 68,31)
// hesaplanır; asgari harç tabanının altına inilemez (2026: 427,60 TL). 2026-07-17 doğrulandı.
export const NISPI_HARC_ORANI = 0.06831;
export const ASGARI_HARC = 427.6;

export function calculateIslahHarci(eskiDeger: number, yeniDeger: number) {
  const artanDeger = Math.max(0, yeniDeger - eskiDeger);
  const hesaplananHarc = Math.round(((artanDeger * NISPI_HARC_ORANI) / 4) * 100) / 100;
  const odenecekHarc = Math.max(hesaplananHarc, artanDeger > 0 ? ASGARI_HARC : 0);

  return { artanDeger, hesaplananHarc, odenecekHarc };
}
