"use client";

import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import { TAHMINI_ORAN_ALT, TAHMINI_ORAN_UST, calculateNafakaAraligi } from "@/lib/calculators/nafaka";

const currency = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 0,
});

export default function NafakaForm() {
  const [netGelir, setNetGelir] = useState("");

  const netGelirNum = parseFloat(netGelir.replace(",", "."));
  const result = netGelirNum > 0 ? calculateNafakaAraligi(netGelirNum) : null;

  return (
    <div className="rounded-2xl border p-6 md:p-8" style={{ borderColor: "#E5D9CC", backgroundColor: "#fff" }}>
      <div
        className="rounded-xl p-4 mb-6 text-sm leading-relaxed"
        style={{ backgroundColor: "#FBEFE8", color: "#8A4A2E" }}
      >
        <strong>Bu bir hesap makinesi değil, kaba bir referans aracıdır.</strong> Türk hukukunda
        nafaka miktarının sabit bir yasal formülü yoktur; hakim her olayı ayrı değerlendirir.
        Aşağıdaki aralık, kesin bir sonuç değil, pratikte sık kullanılan gayriresmi bir
        referanstır.
      </div>

      <div className="mb-2">
        <label htmlFor="net-gelir" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
          Ödeyecek Tarafın Aylık Net Geliri (TL)
        </label>
        <input
          id="net-gelir"
          type="number"
          inputMode="decimal"
          min="0"
          placeholder="Örn. 30000"
          value={netGelir}
          onChange={(e) => setNetGelir(e.target.value)}
          className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
          style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
        />
      </div>
      <p className="text-xs leading-relaxed mb-6" style={{ color: "#8A9A93" }}>
        İştirak nafakası (çocuk nafakası) için; yoksulluk nafakasında böyle bir yaygın referans
        aralığı dahi bulunmaz, tamamen tarafların durumu ve kusur değerlendirmesine bağlıdır.
      </p>

      {result ? (
        <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: "#F4EDE4" }}>
          <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#7A9089" }}>
            Tahmini aralık (net gelirin %{TAHMINI_ORAN_ALT * 100}-%{TAHMINI_ORAN_UST * 100}&apos;i)
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {currency.format(result.altSinir)} – {currency.format(result.ustSinir)} / ay
          </h3>
          <p className="text-xs leading-relaxed mb-5" style={{ color: "#8A4A2E" }}>
            Bu aralık resmi bir tarife değildir. Çocuk sayısı, çocuğun yaşı ve ihtiyaçları, diğer
            ebeveynin geliri, evlilik süresi ve kusur durumu gibi faktörler hakimin takdirini bu
            aralığın dışına da taşıyabilir.
          </p>

          <TrackedLink
            channel="whatsapp"
            label="nafaka-hesaplama"
            href="https://wa.me/905354874099"
            className="inline-block text-xs font-semibold px-4 py-2.5 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
          >
            Durumunuzu Avukatla Değerlendirin
          </TrackedLink>
        </div>
      ) : (
        <p className="text-sm" style={{ color: "#8A9A93" }}>
          Tahmini aralığı görmek için net geliri girin.
        </p>
      )}
    </div>
  );
}
