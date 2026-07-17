// Kaynak: 4857 sayılı İş Kanunu m.53, 56, 59 (mevzuat.gov.tr, resmi metin, 2026-07-17 doğrulandı).
export type IzinHakSonucu = { yeterliKidem: false } | { yeterliKidem: true; yillikIzinGunu: number };

export function calculateYillikIzinHakki(toplamGun: number, yas: number | null): IzinHakSonucu {
  if (toplamGun < 365) return { yeterliKidem: false };

  let gun: number;
  if (toplamGun <= 1825) gun = 14;
  else if (toplamGun <= 5475) gun = 20;
  else gun = 26;

  if (yas !== null && (yas <= 18 || yas >= 50)) {
    gun = Math.max(gun, 20);
  }

  return { yeterliKidem: true, yillikIzinGunu: gun };
}

export function calculateIzinUcreti(brutAylikUcret: number, bakiyeGun: number) {
  const gunlukUcret = brutAylikUcret / 30;
  const izinUcreti = Math.round(gunlukUcret * bakiyeGun * 100) / 100;
  return { gunlukUcret: Math.round(gunlukUcret * 100) / 100, izinUcreti };
}
