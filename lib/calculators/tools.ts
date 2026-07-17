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
];
