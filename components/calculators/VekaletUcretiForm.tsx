"use client";

import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import { MAKTU_ASGARI_UCRET, calculateVekaletUcreti } from "@/lib/calculators/vekaletUcreti";

const currency = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 2,
});

export default function VekaletUcretiForm() {
  const [davaDegeri, setDavaDegeri] = useState("");

  const davaDegeriNum = parseFloat(davaDegeri.replace(",", "."));
  const result = davaDegeriNum > 0 ? calculateVekaletUcreti(davaDegeriNum) : null;

  return (
    <div className="rounded-2xl border p-6 md:p-8" style={{ borderColor: "#E5D9CC", backgroundColor: "#fff" }}>
      <div className="mb-2">
        <label htmlFor="dava-degeri-vekalet" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
          Dava Değeri (TL)
        </label>
        <input
          id="dava-degeri-vekalet"
          type="number"
          inputMode="decimal"
          min="0"
          placeholder="Örn. 500000"
          value={davaDegeri}
          onChange={(e) => setDavaDegeri(e.target.value)}
          className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
          style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
        />
      </div>
      <p className="text-xs leading-relaxed mb-6" style={{ color: "#8A9A93" }}>
        2025-2026 AAÜT&apos;ye göre kademeli (azalan oranlı) nispi ücret hesabı; dava değeri
        belirtilmeyen davalarda Asliye Mahkemelerinde maktu asgari ücret{" "}
        {currency.format(MAKTU_ASGARI_UCRET)}&apos;dir.
      </p>

      {result ? (
        <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: "#F4EDE4" }}>
          <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#7A9089" }}>
            Asgari vekalet ücreti
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {currency.format(result.sonuc)}
          </h3>
          <p className="text-sm" style={{ color: "#3D5A50" }}>
            Kademeli hesaplanan nispi ücret: <strong>{currency.format(result.nispiUcret)}</strong>
            {result.sonuc === MAKTU_ASGARI_UCRET && " (maktu asgari ücret esas alındı)"}
          </p>
        </div>
      ) : (
        <p className="text-sm" style={{ color: "#8A9A93" }}>
          Sonucu görmek için dava değerini girin.
        </p>
      )}

      <p className="text-xs leading-relaxed mt-5" style={{ color: "#8A9A93" }}>
        Bu, kanunla belirlenen bir <strong>asgari</strong> ücrettir; avukatlar bu tutarın altında
        ücret sözleşmesi yapamaz, üzerinde serbestçe anlaşabilir.
      </p>

      <TrackedLink
        channel="whatsapp"
        label="vekalet-ucreti-hesaplama"
        href="https://wa.me/905354874099"
        className="inline-block mt-5 text-xs font-semibold px-4 py-2.5 rounded-full transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#25D366", color: "#fff" }}
      >
        Davanız İçin Teklif Alın
      </TrackedLink>
    </div>
  );
}
