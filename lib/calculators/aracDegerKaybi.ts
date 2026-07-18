// Kaynak: KTK m.109, TBK m.72 (zamanaşımı, mevzuat.gov.tr, 2026-07-17 doğrulandı);
// Yargıtay HGK E.2017/2049, K.2021/771 (15.06.2021) — değer kaybı miktarının aracın
// modeli, markası, yaşı, kilometresi, hasarın nitelik ve niceliğine göre değiştiği
// ilkesi, 2 bağımsız kaynaktan doğrulandı. ÖNEMLİ: Güvenilir/tutarlı bir hesaplama
// yüzdesi veya formülü bulunmadığından (kaynaklar arası çelişkili rakamlar tespit
// edildi) bu araçta TL tutarı HESAPLANMAZ — kesin tutar mutlaka sigorta eksperi/
// bilirkişi raporuyla belirlenir.
function addYears(date: Date, years: number): Date {
  const d = new Date(date);
  d.setFullYear(d.getFullYear() + years);
  return d;
}

export function calculateDegerKaybiZamanasimi(kazaTarihi: string, ogrenmeTarihi: string) {
  const kaza = new Date(kazaTarihi);
  const ogrenme = new Date(ogrenmeTarihi);
  const genelSure = addYears(ogrenme, 2);
  const mutlakSure = addYears(kaza, 10);
  const uygulanacakTarih = genelSure < mutlakSure ? genelSure : mutlakSure;

  return { genelSure, mutlakSure, uygulanacakTarih };
}

export type SigortaTuru = "zmss" | "kasko";

export const SIGORTA_BILGISI: Record<SigortaTuru, string> = {
  zmss:
    "Zorunlu trafik sigortası (ZMSS), değer kaybını maddi zarar teminatı kapsamında poliçe limiti dahilinde öder. Kusurlu sürücünün trafik sigortacısına karşı talepte bulunabilirsiniz.",
  kasko:
    "Standart kasko poliçelerinde değer kaybı teminatı bulunmaz; yalnızca poliçenizde ayrıca 'değer kaybı teminatı/klozu' varsa kasko şirketinizden talep edebilirsiniz. Yoksa talebinizi kusurlu sürücünün trafik sigortacısına (ZMSS) yöneltmeniz gerekir.",
};
