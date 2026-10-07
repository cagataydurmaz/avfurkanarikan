// Kaynak: TÜİK Eylül 2026 dönemi Tüketici Fiyat Endeksi haber bülteni —
// on iki aylık ortalamalara göre değişim oranı %31,49 (alomaliye.com üzerinden
// bülten metni doğrulandı, 2026-10-07; ayrıca TÜİK'in kendi açıklamasını aktaran
// haber kaynaklarıyla çapraz kontrol edildi). Bu oran, Ekim 2026'da yenilenecek
// kira dönemleri için geçerli azami artış oranıdır. Her ay güncellenir; formdaki
// alan düzenlenebilir bırakılmıştır.
export const CURRENT_TUFE_RATE = 31.49;
export const CURRENT_TUFE_PERIOD = "Eylül 2026";

export function calculateKiraArtisi(eskiKira: number, tufeOrani: number) {
  const yeniKira = eskiKira * (1 + tufeOrani / 100);
  const artisTutari = yeniKira - eskiKira;
  return {
    yeniKira: Math.round(yeniKira * 100) / 100,
    artisTutari: Math.round(artisTutari * 100) / 100,
  };
}
