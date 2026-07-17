// Kaynak: 193 sayılı Gelir Vergisi Kanunu m.94/1 ve 94/5-a — kiracı gelir/kurumlar vergisi
// mükellefiyse (şirket, esnaf, serbest meslek sahibi vb.) kira ödemesinden %20 tevkifat
// yapmakla yükümlüdür; sıradan gerçek kişi kiracılar bu yükümlülüğe tabi değildir.
// GİB, mevzuat.gov.tr üzerinden doğrulandı, 2026-07-17.
export const STOPAJ_ORANI = 0.2;

export function calculateKiraStopaji(brutKira: number) {
  const stopajTutari = Math.round(brutKira * STOPAJ_ORANI * 100) / 100;
  const netOdeme = Math.round((brutKira - stopajTutari) * 100) / 100;
  return { stopajTutari, netOdeme };
}
