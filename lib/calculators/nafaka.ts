// ÖNEMLİ: Türk hukukunda nafaka miktarının yasal olarak sabit bir formülü yoktur (TMK m.330,
// m.175). Yargıtay kararlarında sabit bir yüzde geçmez; hakim somut olayı (tarafların geliri,
// çocuğun ihtiyaçları, evlilik süresi, kusur vb.) değerlendirerek hakkaniyete uygun şekilde
// belirler. Aşağıdaki %10-25 aralığı, hukuk bürolarının pratikte sıklıkla referans verdiği
// KABA/GAYRİRESMİ bir aralıktır — resmi bir tarife veya içtihat kuralı DEĞİLDİR. 2026-07-17
// itibarıyla doğrulandı; kaynaklar arası tutarlı bir resmi oran bulunamamıştır.
export const TAHMINI_ORAN_ALT = 0.10;
export const TAHMINI_ORAN_UST = 0.25;

export function calculateNafakaAraligi(netGelir: number) {
  return {
    altSinir: Math.round(netGelir * TAHMINI_ORAN_ALT * 100) / 100,
    ustSinir: Math.round(netGelir * TAHMINI_ORAN_UST * 100) / 100,
  };
}
