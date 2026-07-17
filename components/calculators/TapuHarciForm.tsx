"use client";

import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import { calculateTapuHarci } from "@/lib/calculators/tapuHarci";

const currency = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 2,
});

export default function TapuHarciForm() {
  const [satisBedeli, setSatisBedeli] = useState("");
  const [buyuksehir, setBuyuksehir] = useState(true);

  const satisBedeliNum = parseFloat(satisBedeli.replace(",", "."));
  const result = satisBedeliNum > 0 ? calculateTapuHarci(satisBedeliNum, buyuksehir) : null;

  return (
    <div className="rounded-2xl border p-6 md:p-8" style={{ borderColor: "#E5D9CC", backgroundColor: "#fff" }}>
      <div className="mb-5">
        <label htmlFor="satis-bedeli" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
          Tapuda Beyan Edilecek Satış Bedeli (TL)
        </label>
        <input
          id="satis-bedeli"
          type="number"
          inputMode="decimal"
          min="0"
          placeholder="Örn. 3000000"
          value={satisBedeli}
          onChange={(e) => setSatisBedeli(e.target.value)}
          className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
          style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
        />
        <p className="text-xs leading-relaxed mt-2" style={{ color: "#8A9A93" }}>
          Bu bedel, taşınmazın emlak vergisi (rayiç) değerinden düşük olamaz.
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
          Taşınmazın Bulunduğu Yer
        </label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setBuyuksehir(true)}
            className="flex-1 text-sm font-medium px-4 py-2.5 rounded-xl border transition-colors"
            style={
              buyuksehir
                ? { backgroundColor: "#14342B", color: "#F4EDE4", borderColor: "#14342B" }
                : { color: "#14342B", borderColor: "#E5D9CC" }
            }
          >
            Büyükşehir
          </button>
          <button
            type="button"
            onClick={() => setBuyuksehir(false)}
            className="flex-1 text-sm font-medium px-4 py-2.5 rounded-xl border transition-colors"
            style={
              !buyuksehir
                ? { backgroundColor: "#14342B", color: "#F4EDE4", borderColor: "#14342B" }
                : { color: "#14342B", borderColor: "#E5D9CC" }
            }
          >
            Diğer İl
          </button>
        </div>
      </div>

      {result ? (
        <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: "#F4EDE4" }}>
          <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#7A9089" }}>
            Toplam tapu harcı (%4)
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {currency.format(result.toplamHarc)}
          </h3>
          <div className="text-sm space-y-1 mb-5" style={{ color: "#3D5A50" }}>
            <p>Alıcı payı (%2): <strong>{currency.format(result.tarafPayi)}</strong></p>
            <p>Satıcı payı (%2): <strong>{currency.format(result.tarafPayi)}</strong></p>
            <p>TKGM döner sermaye ücreti (yaklaşık): <strong>{currency.format(result.donerSermaye)}</strong></p>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: "#8A9A93" }}>
            Kanunen harç alıcı-satıcı arasında %2-%2 paylaştırılır; ancak taraflar sözleşmeyle
            farklı bir paylaşım kararlaştırabilir (piyasada tüm harcın alıcıya yüklenmesi yaygındır).
          </p>

          <TrackedLink
            channel="whatsapp"
            label="tapu-harci-hesaplama"
            href="https://wa.me/905354874099"
            className="inline-block mt-5 text-xs font-semibold px-4 py-2.5 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
          >
            İşleminizi Avukatla Değerlendirin
          </TrackedLink>
        </div>
      ) : (
        <p className="text-sm" style={{ color: "#8A9A93" }}>
          Sonucu görmek için satış bedelini girin.
        </p>
      )}
    </div>
  );
}
