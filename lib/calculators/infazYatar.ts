// Kaynak: 5275 sayılı Ceza ve Güvenlik Tedbirlerinin İnfazı Hakkında Kanun m.107, 105/A,
// Geçici Madde 6 (mevzuat.gov.tr, resmi konsolide metin, 2026-07-17 doğrulandı).
// ÖNEMLİ: Bu yalnızca SÜRELİ hapis cezaları için genel/basitleştirilmiş bir hesaptır.
// Tekerrür, özel haller (yaş, sağlık), örgüt/terör bağlantısı gibi onlarca istisna bu
// hesabı değiştirebilir — kesin sonuç için infaz hakimliği/avukat teyidi gerekir.
export const SUC_KATEGORILERI = {
  genel: { label: "Genel suçlar", oran: 0.5 },
  nitelikli: {
    label: "Kasten öldürme, işkence, nitelikli olmayan cinsel suçlar, casusluk vb.",
    oran: 2 / 3,
  },
  agir: {
    label: "Nitelikli cinsel suçlar, uyuşturucu imalat/ticareti, terör suçları",
    oran: 0.75,
  },
} as const;

export type SucKategorisi = keyof typeof SUC_KATEGORILERI;

function addMonths(date: Date, months: number): Date {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
}

export function calculateInfazYatar(
  baslangicTarihi: string,
  cezaYili: number,
  cezaAyi: number,
  kategori: SucKategorisi,
  suc2020Oncesi: boolean
) {
  const baslangic = new Date(baslangicTarihi);
  const toplamAy = cezaYili * 12 + cezaAyi;
  const oran = SUC_KATEGORILERI[kategori].oran;
  const kosulluSaliverilmeAyi = Math.round(toplamAy * oran);

  const kosulluSaliverilmeTarihi = addMonths(baslangic, kosulluSaliverilmeAyi);

  const denetimliSerbestlikAy = suc2020Oncesi ? 36 : 12;
  const denetimliSerbestlikBaslangici = addMonths(kosulluSaliverilmeTarihi, -denetimliSerbestlikAy);

  return {
    kosulluSaliverilmeAyi,
    kosulluSaliverilmeTarihi,
    denetimliSerbestlikBaslangici,
    denetimliSerbestlikAy,
  };
}
