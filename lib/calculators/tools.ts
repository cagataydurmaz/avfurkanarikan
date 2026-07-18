export interface Tool {
  slug: string;
  title: string;
  category: string;
  description: string;
}

export const tools: Tool[] = [
  {
    slug: "istanbul-adliye-bulucu",
    title: "İstanbul Adliye Bulucu",
    category: "Genel",
    description:
      "İlçenizi seçin; bağlı olduğunuz adliyenin adresini, telefonunu ve konumunu anında görün.",
  },
  {
    slug: "kira-artisi-hesaplama",
    title: "Kira Artışı Hesaplama",
    category: "Kira Hukuku",
    description:
      "TBK m.344 uyarınca TÜFE 12 aylık ortalama oranına göre yasal kira artış sınırını hesaplayın.",
  },
  {
    slug: "kidem-tazminati-hesaplama",
    title: "Kıdem Tazminatı Hesaplama",
    category: "İş Hukuku",
    description:
      "İşe giriş/çıkış tarihleri ve brüt ücrete göre 2026 tavanı dahil net kıdem tazminatınızı hesaplayın.",
  },
  {
    slug: "ihbar-tazminati-hesaplama",
    title: "İhbar Tazminatı Hesaplama",
    category: "İş Hukuku",
    description:
      "Kıdeme göre belirlenen ihbar süresini ve brüt ihbar tazminatınızı hesaplayın.",
  },
  {
    slug: "fazla-mesai-hesaplama",
    title: "Fazla Mesai Ücreti Hesaplama",
    category: "İş Hukuku",
    description:
      "İş Kanunu m.41 uyarınca %50 zamlı fazla mesai ücretinizi aylık brüt ücretinize göre hesaplayın.",
  },
  {
    slug: "yillik-izin-hesaplama",
    title: "Yıllık İzin Ücreti Hesaplama",
    category: "İş Hukuku",
    description:
      "Kıdeminize göre yıllık izin hakkınızı görün, kullanılmayan izin gününüzün brüt ücret karşılığını hesaplayın.",
  },
  {
    slug: "nafaka-hesaplama",
    title: "Nafaka Hesaplama",
    category: "Aile Hukuku",
    description:
      "Nafakanın sabit bir formülü yoktur; bu araç iştirak nafakasında sık kullanılan tahmini bir aralık gösterir.",
  },
  {
    slug: "nafaka-artisi-hesaplama",
    title: "Nafaka Artış Oranı Hesaplama",
    category: "Aile Hukuku",
    description:
      "Mahkeme kararınızda öngörülen yıllık endeksleme oranına göre güncel nafaka tutarınızı hesaplayın.",
  },
  {
    slug: "dava-harci-hesaplama",
    title: "Dava Harcı Hesaplama",
    category: "Yargılama Giderleri",
    description:
      "Mahkeme türü ve dava değerine göre dava açılışında ödenecek başvurma harcı ve peşin harcı hesaplayın.",
  },
  {
    slug: "islah-harci-hesaplama",
    title: "Islah Harcı Hesaplama",
    category: "Yargılama Giderleri",
    description:
      "Dava değerinin ıslah yoluyla artırılması durumunda, artan kısım üzerinden ödenecek ıslah harcını hesaplayın.",
  },
  {
    slug: "vekalet-ucreti-hesaplama",
    title: "Vekalet Ücreti Hesaplama",
    category: "Genel",
    description:
      "2025-2026 AAÜT'ye göre dava değerinize karşılık gelen asgari vekalet ücretini hesaplayın.",
  },
  {
    slug: "tapu-harci-hesaplama",
    title: "Tapu Harcı Hesaplama",
    category: "Gayrimenkul Hukuku",
    description:
      "Gayrimenkul satışında satış bedeline göre toplam tapu harcını ve alıcı/satıcı payını hesaplayın.",
  },
  {
    slug: "kira-stopaji-hesaplama",
    title: "Kira Stopajı Hesaplama",
    category: "Vergi Hukuku",
    description:
      "Kiracınızın mükellefiyet durumuna göre işyeri kira stopajını ve mal sahibine ödenecek net tutarı hesaplayın.",
  },
  {
    slug: "icra-masrafi-hesaplama",
    title: "İcra Masrafı Hesaplama",
    category: "İcra Hukuku",
    description:
      "Takip türü, alacak tutarı ve tahsilat aşamasına göre icra masraflarınızı hesaplayın.",
  },
  {
    slug: "infaz-yatar-hesaplama",
    title: "İnfaz Yatar Hesaplama",
    category: "Ceza Hukuku",
    description:
      "Ceza süresi ve suç kategorisine göre tahmini koşullu salıverilme ve denetimli serbestlik tarihini hesaplayın.",
  },
  {
    slug: "trafik-kazasi-tazminati-hesaplama",
    title: "Trafik Kazası Tazminatı Hesaplama",
    category: "Tazminat Hukuku",
    description:
      "Dava açma hakkınızın zamanaşımını hesaplayın ve trafik kazası sonrası talep edilebilecek tazminat kalemlerini görün.",
  },
  {
    slug: "arac-deger-kaybi-hesaplama",
    title: "Araç Değer Kaybı Hesaplama",
    category: "Tazminat Hukuku",
    description:
      "Araç değer kaybı talebinizin zamanaşımını ve hangi sigortaya (ZMSS/kasko) yöneltilebileceğini öğrenin.",
  },
];
