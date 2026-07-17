"use client";

import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import {
  CURRENT_TUFE_PERIOD,
  CURRENT_TUFE_RATE,
  calculateKiraArtisi,
} from "@/lib/calculators/kiraArtisi";

const currency = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 2,
});

export default function KiraArtisiForm() {
  const [eskiKira, setEskiKira] = useState("");
  const [tufeOrani, setTufeOrani] = useState(String(CURRENT_TUFE_RATE));

  const eskiKiraNum = parseFloat(eskiKira.replace(",", "."));
  const tufeOraniNum = parseFloat(tufeOrani.replace(",", "."));
  const hasResult =
    !isNaN(eskiKiraNum) && eskiKiraNum > 0 && !isNaN(tufeOraniNum) && tufeOraniNum >= 0;
  const result = hasResult ? calculateKiraArtisi(eskiKiraNum, tufeOraniNum) : null;

  return (
    <div
      className="rounded-2xl border p-6 md:p-8"
      style={{ borderColor: "#E5D9CC", backgroundColor: "#fff" }}
    >
      <div className="grid sm:grid-cols-2 gap-5 mb-2">
        <div>
          <label
            htmlFor="eski-kira"
            className="block text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#7f5c2c" }}
          >
            Mevcut Kira Bedeli (TL)
          </label>
          <input
            id="eski-kira"
            type="number"
            inputMode="decimal"
            min="0"
            placeholder="Örn. 20000"
            value={eskiKira}
            onChange={(e) => setEskiKira(e.target.value)}
            className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
          />
        </div>

        <div>
          <label
            htmlFor="tufe-orani"
            className="block text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#7f5c2c" }}
          >
            TÜFE Oranı (%)
          </label>
          <input
            id="tufe-orani"
            type="number"
            inputMode="decimal"
            min="0"
            step="0.01"
            value={tufeOrani}
            onChange={(e) => setTufeOrani(e.target.value)}
            className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
          />
        </div>
      </div>
      <p className="text-xs leading-relaxed mb-6" style={{ color: "#8A9A93" }}>
        Alan, TÜİK&apos;in {CURRENT_TUFE_PERIOD} dönemi için açıkladığı on iki aylık ortalamalara
        göre değişim oranıyla (%{CURRENT_TUFE_RATE.toString().replace(".", ",")}) otomatik
        dolduruldu; TÜİK her ay yeni oran açıkladığından kira yenileme tarihinize göre güncel
        oranı kontrol edip gerekirse bu alanı düzenleyin.
      </p>

      {result ? (
        <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: "#F4EDE4" }}>
          <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#7A9089" }}>
            Yasal azami yeni kira bedeli
          </p>
          <h3
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {currency.format(result.yeniKira)}
          </h3>
          <p className="text-sm mb-5" style={{ color: "#3D5A50" }}>
            Artış tutarı: <strong>{currency.format(result.artisTutari)}</strong> (%
            {tufeOraniNum.toString().replace(".", ",")})
          </p>

          <TrackedLink
            channel="whatsapp"
            label="kira-artisi-hesaplama"
            href="https://wa.me/905354874099"
            className="inline-block text-xs font-semibold px-4 py-2.5 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
          >
            Bu Tutarı Avukatla Değerlendirin
          </TrackedLink>
        </div>
      ) : (
        <p className="text-sm" style={{ color: "#8A9A93" }}>
          Sonucu görmek için mevcut kira bedelinizi girin.
        </p>
      )}
    </div>
  );
}
