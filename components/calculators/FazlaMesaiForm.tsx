"use client";

import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import { YILLIK_UST_SINIR_SAAT, calculateFazlaMesai } from "@/lib/calculators/fazlaMesai";

const currency = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 2,
});

export default function FazlaMesaiForm() {
  const [aylikUcret, setAylikUcret] = useState("");
  const [saat, setSaat] = useState("");

  const aylikUcretNum = parseFloat(aylikUcret.replace(",", "."));
  const saatNum = parseFloat(saat.replace(",", "."));
  const hasResult = aylikUcretNum > 0 && saatNum > 0;
  const result = hasResult ? calculateFazlaMesai(aylikUcretNum, saatNum) : null;

  return (
    <div className="rounded-2xl border p-6 md:p-8" style={{ borderColor: "#E5D9CC", backgroundColor: "#fff" }}>
      <div className="grid sm:grid-cols-2 gap-5 mb-2">
        <div>
          <label htmlFor="aylik-ucret" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
            Aylık Brüt Ücret (TL)
          </label>
          <input
            id="aylik-ucret"
            type="number"
            inputMode="decimal"
            min="0"
            placeholder="Örn. 35000"
            value={aylikUcret}
            onChange={(e) => setAylikUcret(e.target.value)}
            className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
          />
        </div>
        <div>
          <label htmlFor="fazla-mesai-saat" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
            Fazla Çalışılan Saat
          </label>
          <input
            id="fazla-mesai-saat"
            type="number"
            inputMode="decimal"
            min="0"
            placeholder="Örn. 20"
            value={saat}
            onChange={(e) => setSaat(e.target.value)}
            className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
          />
        </div>
      </div>
      <p className="text-xs leading-relaxed mb-6" style={{ color: "#8A9A93" }}>
        Haftalık 45 saati aşan çalışma fazla mesai sayılır; yıllık fazla çalışma üst sınırı{" "}
        {YILLIK_UST_SINIR_SAAT} saattir.
      </p>

      {result ? (
        <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: "#F4EDE4" }}>
          <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#7A9089" }}>
            Brüt fazla mesai ücreti
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {currency.format(result.toplamUcret)}
          </h3>
          <div className="text-sm space-y-1 mb-5" style={{ color: "#3D5A50" }}>
            <p>Normal saatlik ücret: <strong>{currency.format(result.saatlikUcret)}</strong></p>
            <p>Fazla mesai saat ücreti (%50 zamlı): <strong>{currency.format(result.fazlaMesaiSaatUcreti)}</strong></p>
          </div>
          <p className="text-xs leading-relaxed mb-5" style={{ color: "#8A9A93" }}>
            Bu tutar brüttür; normal ücret gibi kümülatif gelir vergisi, damga vergisi ve SGK
            primi kesintisine tabidir.
          </p>

          <TrackedLink
            channel="whatsapp"
            label="fazla-mesai-hesaplama"
            href="https://wa.me/905354874099"
            className="inline-block text-xs font-semibold px-4 py-2.5 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
          >
            Bu Tutarı Avukatla Değerlendirin
          </TrackedLink>
        </div>
      ) : (
        <p className="text-sm" style={{ color: "#8A9A93" }}>
          Sonucu görmek için aylık brüt ücretinizi ve fazla çalıştığınız saati girin.
        </p>
      )}
    </div>
  );
}
