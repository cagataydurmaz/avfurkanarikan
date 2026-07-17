"use client";

import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import {
  CURRENT_UFE_PERIOD,
  CURRENT_UFE_RATE,
  calculateNafakaArtisi,
} from "@/lib/calculators/nafakaArtisi";

const currency = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 2,
});

export default function NafakaArtisiForm() {
  const [mevcutNafaka, setMevcutNafaka] = useState("");
  const [oran, setOran] = useState(String(CURRENT_UFE_RATE));

  const mevcutNafakaNum = parseFloat(mevcutNafaka.replace(",", "."));
  const oranNum = parseFloat(oran.replace(",", "."));
  const hasResult = mevcutNafakaNum > 0 && !isNaN(oranNum) && oranNum >= 0;
  const result = hasResult ? calculateNafakaArtisi(mevcutNafakaNum, oranNum) : null;

  return (
    <div className="rounded-2xl border p-6 md:p-8" style={{ borderColor: "#E5D9CC", backgroundColor: "#fff" }}>
      <div className="grid sm:grid-cols-2 gap-5 mb-2">
        <div>
          <label htmlFor="mevcut-nafaka" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
            Mevcut Nafaka Tutarı (TL)
          </label>
          <input
            id="mevcut-nafaka"
            type="number"
            inputMode="decimal"
            min="0"
            placeholder="Örn. 5000"
            value={mevcutNafaka}
            onChange={(e) => setMevcutNafaka(e.target.value)}
            className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
          />
        </div>
        <div>
          <label htmlFor="ufe-orani" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
            Artış Oranı (%)
          </label>
          <input
            id="ufe-orani"
            type="number"
            inputMode="decimal"
            min="0"
            step="0.01"
            value={oran}
            onChange={(e) => setOran(e.target.value)}
            className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
          />
        </div>
      </div>
      <p className="text-xs leading-relaxed mb-6" style={{ color: "#8A9A93" }}>
        Alan, TÜİK&apos;in {CURRENT_UFE_PERIOD} dönemi Yİ-ÜFE (üretici fiyat endeksi) on iki
        aylık ortalama değişim oranıyla (%{CURRENT_UFE_RATE.toString().replace(".", ",")})
        dolduruldu — Yargıtay uygulamasında nafaka artışında yerleşik ölçüt budur. Ancak
        mahkeme kararınızda açıkça TÜFE belirtilmişse veya oran güncellenmişse bu alanı
        düzenleyin.
      </p>

      {result ? (
        <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: "#F4EDE4" }}>
          <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#7A9089" }}>
            Yeni nafaka tutarı
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {currency.format(result.yeniNafaka)}
          </h3>
          <p className="text-sm mb-5" style={{ color: "#3D5A50" }}>
            Artış tutarı: <strong>{currency.format(result.artisTutari)}</strong> (%
            {oranNum.toString().replace(".", ",")})
          </p>

          <TrackedLink
            channel="whatsapp"
            label="nafaka-artisi-hesaplama"
            href="https://wa.me/905354874099"
            className="inline-block text-xs font-semibold px-4 py-2.5 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
          >
            Durumunuzu Avukatla Değerlendirin
          </TrackedLink>
        </div>
      ) : (
        <p className="text-sm" style={{ color: "#8A9A93" }}>
          Sonucu görmek için mevcut nafaka tutarınızı girin.
        </p>
      )}
    </div>
  );
}
