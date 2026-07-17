// Kaynak: Hazine ve Maliye Bakanlığı Genelge No. 5 (02.07.2026) — 1 Temmuz-31 Aralık
// 2026 dönemi kıdem tazminatı tavanı (alomaliye.com üzerinden doğrulandı, 2026-07-17).
// Tavan, devlet memuru emeklilik ikramiyesi tavanına bağlı olarak Ocak ve Temmuz
// aylarında yeniden belirlenir.
export const KIDEM_TAVANI = 73729.87;
export const KIDEM_TAVANI_PERIOD = "1 Temmuz - 31 Aralık 2026";
export const DAMGA_VERGISI_ORANI = 0.00759;

export type KidemSonucu =
  | { yeterliKidem: false; toplamGun: number }
  | {
      yeterliKidem: true;
      toplamGun: number;
      brutTazminat: number;
      damgaVergisi: number;
      netTazminat: number;
      tavanUygulandi: boolean;
    };

export function calculateKidemTazminati(
  girisTarihi: string,
  cikisTarihi: string,
  brutUcret: number
): KidemSonucu {
  const giris = new Date(girisTarihi);
  const cikis = new Date(cikisTarihi);
  const toplamGun = Math.round((cikis.getTime() - giris.getTime()) / (1000 * 60 * 60 * 24));

  if (toplamGun < 365) {
    return { yeterliKidem: false, toplamGun };
  }

  const tavanUygulandi = brutUcret > KIDEM_TAVANI;
  const esasUcret = Math.min(brutUcret, KIDEM_TAVANI);
  const brutTazminat = Math.round((esasUcret / 365) * toplamGun * 100) / 100;
  const damgaVergisi = Math.round(brutTazminat * DAMGA_VERGISI_ORANI * 100) / 100;
  const netTazminat = Math.round((brutTazminat - damgaVergisi) * 100) / 100;

  return { yeterliKidem: true, toplamGun, brutTazminat, damgaVergisi, netTazminat, tavanUygulandi };
}
