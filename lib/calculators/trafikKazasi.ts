// Kaynak: 2918 sayılı KTK m.109, 6098 sayılı TBK m.72, 5237 sayılı TCK m.66/85/89
// (mevzuat.gov.tr, 2026-07-17 doğrulandı). ÖNEMLİ: Sürekli iş göremezlik ve manevi
// tazminat TUTARLARI, aktüeryal hesaplama (TRH 2010 yaşam tablosu, maluliyet oranı,
// hakim takdiri) gerektirdiğinden ve güvenilir/tutarlı bir kestirme formül
// bulunmadığından bu araçta HESAPLANMAZ — yalnızca zamanaşımı süresi, kesin bir
// tarih hesabı olduğu için sunulur.
function addYears(date: Date, years: number): Date {
  const d = new Date(date);
  d.setFullYear(d.getFullYear() + years);
  return d;
}

export type ZamanasimiTuru = "genel" | "taksirleYaralama" | "taksirleOlum";

export function calculateTrafikZamanasimi(
  kazaTarihi: string,
  ogrenmeTarihi: string,
  tur: ZamanasimiTuru
) {
  const kaza = new Date(kazaTarihi);
  const ogrenme = new Date(ogrenmeTarihi);
  const genelSure = addYears(ogrenme, 2);
  const mutlakSure = addYears(kaza, 10);

  if (tur === "genel") {
    const uygulanacakTarih = genelSure < mutlakSure ? genelSure : mutlakSure;
    return { genelSure, mutlakSure, uygulanacakTarih, cezaZamanasimiUygulandi: false, cezaYili: null };
  }

  const cezaYili = tur === "taksirleYaralama" ? 8 : 15;
  const uygulanacakTarih = addYears(kaza, cezaYili);
  return { genelSure, mutlakSure, uygulanacakTarih, cezaZamanasimiUygulandi: true, cezaYili };
}
