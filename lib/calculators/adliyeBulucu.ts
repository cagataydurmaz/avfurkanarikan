export type CourthouseInfo = {
  name: string;
  address: string;
  phone: string;
};

// Kaynak: adalet.gov.tr resmi iletişim sayfaları (istanbul.adalet.gov.tr,
// bakirkoy.adalet.gov.tr, kucukcekmece.adalet.gov.tr, istanbulanadolu.adalet.gov.tr)
// — 2026-07-17 doğrulandı.
export const COURTHOUSES: Record<string, CourthouseInfo> = {
  "İstanbul (Çağlayan) Adliyesi": {
    name: "İstanbul (Çağlayan) Adliyesi",
    address:
      "Çağlayan Meydanı, Şişli Merkez Mah. Abide-i Hürriyet Cad. No:223, Şişli/İstanbul",
    phone: "0212 375 75 75",
  },
  "İstanbul Bakırköy Adliyesi": {
    name: "İstanbul Bakırköy Adliyesi",
    address: "Osmaniye Mah. İsmail Erez Bulvarı No:14, 34146 Bakırköy/İstanbul",
    phone: "0212 414 54 00",
  },
  "İstanbul Büyükçekmece Adliyesi": {
    name: "İstanbul Büyükçekmece Adliyesi",
    address: "Fatih Mah. Hasan Şevket Cad., 34500 Büyükçekmece/İstanbul",
    phone: "0212 882 10 00",
  },
  "İstanbul Küçükçekmece Adliyesi": {
    name: "İstanbul Küçükçekmece Adliyesi",
    address: "Kartaltepe Mah. Malazgirt Cad. No:2-4, 34295 Küçükçekmece/İstanbul",
    phone: "0212 411 51 00",
  },
  "İstanbul Beykoz Adliyesi": {
    name: "İstanbul Beykoz Adliyesi",
    address: "Gümüşsuyu Mah. Şht. Bülent Kocabıyık Cad., Beykoz/İstanbul",
    phone: "0216 322 00 65",
  },
};

export type AdliyeDistrict = {
  slug: string;
  name: string;
  courthouse: string;
};

const RAW_DISTRICTS: AdliyeDistrict[] = [
  { slug: "arnavutkoy", name: "Arnavutköy", courthouse: "İstanbul (Çağlayan) Adliyesi" },
  { slug: "avcilar", name: "Avcılar", courthouse: "İstanbul Küçükçekmece Adliyesi" },
  { slug: "bagcilar", name: "Bağcılar", courthouse: "İstanbul Bakırköy Adliyesi" },
  { slug: "bahcelievler", name: "Bahçelievler", courthouse: "İstanbul Bakırköy Adliyesi" },
  { slug: "bakirkoy", name: "Bakırköy", courthouse: "İstanbul Bakırköy Adliyesi" },
  { slug: "basaksehir", name: "Başakşehir", courthouse: "İstanbul Küçükçekmece Adliyesi" },
  { slug: "bayrampasa", name: "Bayrampaşa", courthouse: "İstanbul (Çağlayan) Adliyesi" },
  { slug: "besiktas", name: "Beşiktaş", courthouse: "İstanbul (Çağlayan) Adliyesi" },
  { slug: "beykoz", name: "Beykoz", courthouse: "İstanbul Beykoz Adliyesi" },
  { slug: "beylikduzu", name: "Beylikdüzü", courthouse: "İstanbul Büyükçekmece Adliyesi" },
  { slug: "beyoglu", name: "Beyoğlu", courthouse: "İstanbul (Çağlayan) Adliyesi" },
  { slug: "buyukcekmece", name: "Büyükçekmece", courthouse: "İstanbul Büyükçekmece Adliyesi" },
  { slug: "catalca", name: "Çatalca", courthouse: "İstanbul Büyükçekmece Adliyesi" },
  { slug: "esenler", name: "Esenler", courthouse: "İstanbul Bakırköy Adliyesi" },
  { slug: "esenyurt", name: "Esenyurt", courthouse: "İstanbul Büyükçekmece Adliyesi" },
  { slug: "eyupsultan", name: "Eyüpsultan", courthouse: "İstanbul (Çağlayan) Adliyesi" },
  { slug: "fatih", name: "Fatih", courthouse: "İstanbul (Çağlayan) Adliyesi" },
  { slug: "gungoren", name: "Güngören", courthouse: "İstanbul Bakırköy Adliyesi" },
  { slug: "kagithane", name: "Kağıthane", courthouse: "İstanbul (Çağlayan) Adliyesi" },
  { slug: "kucukcekmece", name: "Küçükçekmece", courthouse: "İstanbul Küçükçekmece Adliyesi" },
  { slug: "sariyer", name: "Sarıyer", courthouse: "İstanbul (Çağlayan) Adliyesi" },
  { slug: "silivri", name: "Silivri", courthouse: "İstanbul Büyükçekmece Adliyesi" },
  { slug: "sisli", name: "Şişli", courthouse: "İstanbul (Çağlayan) Adliyesi" },
  { slug: "zeytinburnu", name: "Zeytinburnu", courthouse: "İstanbul Bakırköy Adliyesi" },
];

export const ADLIYE_DISTRICTS: AdliyeDistrict[] = [...RAW_DISTRICTS].sort((a, b) =>
  a.name.localeCompare(b.name, "tr")
);

export function findAdliyeByDistrict(slug: string): AdliyeDistrict | undefined {
  return ADLIYE_DISTRICTS.find((d) => d.slug === slug);
}
