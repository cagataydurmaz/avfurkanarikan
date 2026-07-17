// Kaynak: 492 sayılı Harçlar Kanunu (4) Sayılı Tarife 20/a maddesi — toplam binde 40 (%4),
// alıcı ve satıcı ayrı ayrı %2 (mevzuat.gov.tr, GİB, 2026-07-17 doğrulandı). Matrah, tapuya
// beyan edilen satış bedeli ile emlak vergisi (rayiç) değerinden yüksek olanıdır.
// TKGM döner sermaye ücreti (2026, tekgm.gov.tr): büyükşehirlerde ~6.700 TL, diğer illerde ~3.400 TL.
export const TOPLAM_HARC_ORANI = 0.04;
export const TARAF_ORANI = 0.02;
export const DONER_SERMAYE_BUYUKSEHIR = 6700;
export const DONER_SERMAYE_DIGER = 3400;

export function calculateTapuHarci(satisBedeli: number, buyuksehir: boolean) {
  const toplamHarc = Math.round(satisBedeli * TOPLAM_HARC_ORANI * 100) / 100;
  const tarafPayi = Math.round(satisBedeli * TARAF_ORANI * 100) / 100;
  const donerSermaye = buyuksehir ? DONER_SERMAYE_BUYUKSEHIR : DONER_SERMAYE_DIGER;

  return { toplamHarc, tarafPayi, donerSermaye };
}
