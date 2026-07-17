// Kaynak: 2025-2026 Avukatlık Asgari Ücret Tarifesi (AAÜT), Resmi Gazete 4 Kasım 2025/33067
// (resmigazete.gov.tr, birincil kaynaktan doğrulandı, 2026-07-17).
export const MAKTU_ASGARI_UCRET = 45000;

const DILIMLER = [
  { ustSinir: 600_000, oran: 0.16 },
  { ustSinir: 1_200_000, oran: 0.15 },
  { ustSinir: 2_400_000, oran: 0.14 },
  { ustSinir: 3_600_000, oran: 0.13 },
  { ustSinir: 5_400_000, oran: 0.11 },
  { ustSinir: 7_800_000, oran: 0.08 },
  { ustSinir: 10_800_000, oran: 0.05 },
  { ustSinir: 14_400_000, oran: 0.03 },
  { ustSinir: 18_600_000, oran: 0.02 },
  { ustSinir: Infinity, oran: 0.01 },
];

export function calculateVekaletUcreti(davaDegeri: number) {
  let kalan = davaDegeri;
  let oncekiSinir = 0;
  let nispiUcret = 0;

  for (const dilim of DILIMLER) {
    if (kalan <= 0) break;
    const dilimGenisligi = dilim.ustSinir - oncekiSinir;
    const buDilimdeKullanilan = Math.min(kalan, dilimGenisligi);
    nispiUcret += buDilimdeKullanilan * dilim.oran;
    kalan -= buDilimdeKullanilan;
    oncekiSinir = dilim.ustSinir;
  }

  nispiUcret = Math.round(nispiUcret * 100) / 100;
  const sonuc = Math.max(nispiUcret, MAKTU_ASGARI_UCRET);

  return { nispiUcret, sonuc };
}
