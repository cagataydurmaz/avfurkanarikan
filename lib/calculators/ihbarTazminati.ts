// Kaynak: 4857 sayılı İş Kanunu m.17 (mevzuat.gov.tr, resmi metin, 2026-07-17 doğrulandı).
// Damga vergisi oranı 488 sayılı Kanun (1) Sayılı Tablo IV/1-b (GİB, 2026-07-17 doğrulandı).
export const DAMGA_VERGISI_ORANI = 0.00759;

export function ihbarSuresiHafta(toplamGun: number): number {
  if (toplamGun < 182) return 2;
  if (toplamGun <= 547) return 4;
  if (toplamGun <= 1095) return 6;
  return 8;
}

export type IhbarSonucu = {
  ihbarHaftasi: number;
  ihbarGunu: number;
  brutTazminat: number;
  damgaVergisi: number;
  damgaSonrasiTutar: number;
};

export function calculateIhbarTazminati(
  girisTarihi: string,
  cikisTarihi: string,
  brutUcret: number
): IhbarSonucu {
  const giris = new Date(girisTarihi);
  const cikis = new Date(cikisTarihi);
  const toplamGun = Math.round((cikis.getTime() - giris.getTime()) / (1000 * 60 * 60 * 24));

  const hafta = ihbarSuresiHafta(toplamGun);
  const gun = hafta * 7;
  const brutTazminat = Math.round((brutUcret / 30) * gun * 100) / 100;
  const damgaVergisi = Math.round(brutTazminat * DAMGA_VERGISI_ORANI * 100) / 100;
  const damgaSonrasiTutar = Math.round((brutTazminat - damgaVergisi) * 100) / 100;

  return { ihbarHaftasi: hafta, ihbarGunu: gun, brutTazminat, damgaVergisi, damgaSonrasiTutar };
}
