// Kaynak: TÜİK Haziran 2026 dönemi Tüketici Fiyat Endeksi haber bülteni —
// on iki aylık ortalamalara göre değişim oranı %32,03 (alomaliye.com üzerinden
// bülten metni doğrulandı, 2026-07-17). Bu oran her ay güncellenir; formdaki
// alan düzenlenebilir bırakılmıştır.
export const CURRENT_TUFE_RATE = 32.03;
export const CURRENT_TUFE_PERIOD = "Haziran 2026";

export function calculateKiraArtisi(eskiKira: number, tufeOrani: number) {
  const yeniKira = eskiKira * (1 + tufeOrani / 100);
  const artisTutari = yeniKira - eskiKira;
  return {
    yeniKira: Math.round(yeniKira * 100) / 100,
    artisTutari: Math.round(artisTutari * 100) / 100,
  };
}
