// Kaynak: 492 sayılı Harçlar Kanunu Genel Tebliği Seri No:98 (RG 31.12.2025/33124),
// resmigazete.gov.tr üzerinden doğrulandı, 2026-07-17. Tutarlar Ocak'ta yeniden değerleme
// oranıyla güncellenir.
export const NISPI_HARC_ORANI = 0.06831;

export const BASVURMA_HARCI = {
  sulhHukuk: 335.2,
  asliyeHukuk: 732.0,
  bolgeYargitay: 1124.5,
} as const;

export type MahkemeTuru = keyof typeof BASVURMA_HARCI;

export function calculateDavaHarci(mahkemeTuru: MahkemeTuru, davaDegeri: number) {
  const basvurmaHarci = BASVURMA_HARCI[mahkemeTuru];
  const toplamNispiHarc = davaDegeri > 0 ? davaDegeri * NISPI_HARC_ORANI : 0;
  const pesinHarc = Math.round((toplamNispiHarc / 4) * 100) / 100;
  const kalanHarc = Math.round(((toplamNispiHarc * 3) / 4) * 100) / 100;
  const acilisToplami = Math.round((basvurmaHarci + pesinHarc) * 100) / 100;

  return { basvurmaHarci, pesinHarc, kalanHarc, acilisToplami };
}
