// Kaynak: TÜİK Haziran 2026 dönemi Yurt İçi Üretici Fiyat Endeksi (Yİ-ÜFE) — on iki aylık
// ortalamalara göre değişim oranı %27,26 (tekha.com.tr üzerinden TÜİK bülten metni
// doğrulandı, 2026-07-17). Yargıtay'ın yerleşik içtihadı nafaka artış davalarında TÜFE değil
// Yİ-ÜFE'nin 12 aylık ortalamasını esas alır (istisna: davacı açıkça TÜFE talep etmişse hakim
// bununla bağlıdır). Oran her ay güncellenir; formdaki alan düzenlenebilir bırakılmıştır.
export const CURRENT_UFE_RATE = 27.26;
export const CURRENT_UFE_PERIOD = "Haziran 2026";

export function calculateNafakaArtisi(mevcutNafaka: number, oran: number) {
  const yeniNafaka = mevcutNafaka * (1 + oran / 100);
  const artisTutari = yeniNafaka - mevcutNafaka;
  return {
    yeniNafaka: Math.round(yeniNafaka * 100) / 100,
    artisTutari: Math.round(artisTutari * 100) / 100,
  };
}
