"use client";

import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import { calculateIslahHarci } from "@/lib/calculators/islahHarci";

const currency = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 2,
});

export default function IslahHarciForm() {
  const [eskiDeger, setEskiDeger] = useState("");
  const [yeniDeger, setYeniDeger] = useState("");

  const eskiDegerNum = parseFloat(eskiDeger.replace(",", ".")) || 0;
  const yeniDegerNum = parseFloat(yeniDeger.replace(",", "."));
  const hasResult = yeniDegerNum > eskiDegerNum;
  const result = hasResult ? calculateIslahHarci(eskiDegerNum, yeniDegerNum) : null;

  return (
    <div className="rounded-2xl border p-6 md:p-8" style={{ borderColor: "#E5D9CC", backgroundColor: "#fff" }}>
      <div className="grid sm:grid-cols-2 gap-5 mb-6">
        <div>
          <label htmlFor="eski-deger" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
            Mevcut (Eski) Dava Değeri (TL)
          </label>
          <input
            id="eski-deger"
            type="number"
            inputMode="decimal"
            min="0"
            placeholder="Örn. 100000"
            value={eskiDeger}
            onChange={(e) => setEskiDeger(e.target.value)}
            className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
          />
        </div>
        <div>
          <label htmlFor="yeni-deger" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
            Islah Edilmiş (Yeni) Dava Değeri (TL)
          </label>
          <input
            id="yeni-deger"
            type="number"
            inputMode="decimal"
            min="0"
            placeholder="Örn. 250000"
            value={yeniDeger}
            onChange={(e) => setYeniDeger(e.target.value)}
            className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
          />
        </div>
      </div>

      {result ? (
        <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: "#F4EDE4" }}>
          <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#7A9089" }}>
            Ödenecek ıslah harcı
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {currency.format(result.odenecekHarc)}
          </h3>
          <p className="text-sm" style={{ color: "#3D5A50" }}>
            Artan dava değeri: <strong>{currency.format(result.artanDeger)}</strong>
          </p>
        </div>
      ) : (
        <p className="text-sm" style={{ color: "#8A9A93" }}>
          Sonucu görmek için yeni dava değerinin eski değerden yüksek olduğundan emin olun.
        </p>
      )}

      <TrackedLink
        channel="whatsapp"
        label="islah-harci-hesaplama"
        href="https://wa.me/905354874099"
        className="inline-block mt-5 text-xs font-semibold px-4 py-2.5 rounded-full transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#25D366", color: "#fff" }}
      >
        Davanızı Avukatla Değerlendirin
      </TrackedLink>
    </div>
  );
}
