// Resmî mevzuat bağlantıları. Adresler mevzuat.gov.tr üzerinde tek tek doğrulanmıştır
// (PDF başlığı ile kanun adı/numarası eşleşti). Tertip numarası kanuna göre değişir;
// tahmin ederek yeni kayıt eklemeyin, önce adresi açıp başlığı kontrol edin.

export interface Mevzuat {
  key: string;
  name: string;
  number: string;
  url: string;
  /** Makale metninde bu kanunun geçtiğini gösteren desenler */
  patterns: RegExp[];
}

const u = (tertip: number, no: number) =>
  `https://www.mevzuat.gov.tr/MevzuatMetin/1.${tertip}.${no}.pdf`;

const w = (t: string) => new RegExp(`(?<![\\p{L}\\p{N}])${t}(?![\\p{L}\\p{N}])`, "u");

export const MEVZUAT: Mevzuat[] = [
  { key: "tmk", name: "Türk Medeni Kanunu", number: "4721", url: u(5, 4721), patterns: [w("TMK"), /Türk Medeni Kanunu/] },
  { key: "tbk", name: "Türk Borçlar Kanunu", number: "6098", url: u(5, 6098), patterns: [w("TBK"), /Türk Borçlar Kanunu/] },
  { key: "hmk", name: "Hukuk Muhakemeleri Kanunu", number: "6100", url: u(5, 6100), patterns: [w("HMK"), /Hukuk Muhakemeleri Kanunu/] },
  { key: "cmk", name: "Ceza Muhakemesi Kanunu", number: "5271", url: u(5, 5271), patterns: [w("CMK"), /Ceza Muhakemesi Kanunu/] },
  { key: "tck", name: "Türk Ceza Kanunu", number: "5237", url: u(5, 5237), patterns: [w("TCK"), /Türk Ceza Kanunu/] },
  { key: "isk", name: "İş Kanunu", number: "4857", url: u(5, 4857), patterns: [w("4857"), /İş Kanunu/, /İş K\./] },
  { key: "iik", name: "İcra ve İflas Kanunu", number: "2004", url: u(3, 2004), patterns: [w("İİK"), /İcra ve İflas Kanunu/] },
  { key: "vuk", name: "Vergi Usul Kanunu", number: "213", url: u(4, 213), patterns: [w("VUK"), /Vergi Usul Kanunu/] },
  { key: "iyuk", name: "İdari Yargılama Usulü Kanunu", number: "2577", url: u(5, 2577), patterns: [w("İYUK"), /İdari Yargılama Usulü Kanunu/] },
  { key: "kmk", name: "Kat Mülkiyeti Kanunu", number: "634", url: u(5, 634), patterns: [w("KMK"), /Kat Mülkiyeti Kanunu/] },
  { key: "ktk", name: "Karayolları Trafik Kanunu", number: "2918", url: u(5, 2918), patterns: [w("KTK"), /Karayolları Trafik Kanunu/] },
  { key: "ttk", name: "Türk Ticaret Kanunu", number: "6102", url: u(5, 6102), patterns: [w("TTK"), /Türk Ticaret Kanunu/] },
  { key: "arabuluculuk", name: "Hukuk Uyuşmazlıklarında Arabuluculuk Kanunu", number: "6325", url: u(5, 6325), patterns: [/6325 sayılı/, /Arabuluculuk Kanunu/] },
];

export function findMevzuat(text: string): Mevzuat[] {
  return MEVZUAT.filter((m) => m.patterns.some((p) => p.test(text)));
}
