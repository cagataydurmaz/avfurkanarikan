"use client";

import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import { calculateIhbarTazminati } from "@/lib/calculators/ihbarTazminati";

const currency = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 2,
});

export default function IhbarTazminatiForm() {
  const [girisTarihi, setGirisTarihi] = useState("");
  const [cikisTarihi, setCikisTarihi] = useState("");
  const [brutUcret, setBrutUcret] = useState("");

  const brutUcretNum = parseFloat(brutUcret.replace(",", "."));
  const canCalculate =
    !!girisTarihi && !!cikisTarihi && new Date(cikisTarihi) > new Date(girisTarihi) && brutUcretNum > 0;
  const result = canCalculate ? calculateIhbarTazminati(girisTarihi, cikisTarihi, brutUcretNum) : null;

  return (
    <div
      className="rounded-2xl border p-6 md:p-8"
      style={{ borderColor: "#E5D9CC", backgroundColor: "#fff" }}
    >
      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="giris-tarihi" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
            İşe Giriş Tarihi
          </label>
          <input
            id="giris-tarihi"
            type="date"
            value={girisTarihi}
            onChange={(e) => setGirisTarihi(e.target.value)}
            className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
          />
        </div>
        <div>
          <label htmlFor="cikis-tarihi" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
            İşten Çıkış Tarihi
          </label>
          <input
            id="cikis-tarihi"
            type="date"
            value={cikisTarihi}
            onChange={(e) => setCikisTarihi(e.target.value)}
            className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="brut-ucret" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
          Son Brüt Aylık Ücret (TL)
        </label>
        <input
          id="brut-ucret"
          type="number"
          inputMode="decimal"
          min="0"
          placeholder="Örn. 45000"
          value={brutUcret}
          onChange={(e) => setBrutUcret(e.target.value)}
          className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
          style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
        />
      </div>

      {result ? (
        <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: "#F4EDE4" }}>
          <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#7A9089" }}>
            Brüt ihbar tazminatı ({result.ihbarHaftasi} hafta / {result.ihbarGunu} gün)
          </p>
          <h3
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {currency.format(result.brutTazminat)}
          </h3>
          <div className="text-sm space-y-1 mb-5" style={{ color: "#3D5A50" }}>
            <p>Damga vergisi (binde 7,59): <strong>{currency.format(result.damgaVergisi)}</strong></p>
            <p>Damga vergisi sonrası tutar: <strong>{currency.format(result.damgaSonrasiTutar)}</strong></p>
          </div>
          <p className="text-xs leading-relaxed mb-5" style={{ color: "#8A4A2E" }}>
            Kıdem tazminatının aksine ihbar tazminatı gelir vergisinden istisna değildir; damga
            vergisi sonrası tutardan ayrıca kümülatif gelir vergisi dilimine göre kesinti yapılır.
            Bu kesinti yıl içindeki diğer kazancınıza bağlı olduğundan burada gösterilemez —
            kesin net tutar için bordronuzu/muhasebecinizi kontrol edin.
          </p>

          <TrackedLink
            channel="whatsapp"
            label="ihbar-tazminati-hesaplama"
            href="https://wa.me/905354874099"
            className="inline-block text-xs font-semibold px-4 py-2.5 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
          >
            Bu Tutarı Avukatla Değerlendirin
          </TrackedLink>
        </div>
      ) : (
        <p className="text-sm" style={{ color: "#8A9A93" }}>
          Sonucu görmek için işe giriş/çıkış tarihlerinizi ve brüt ücretinizi girin.
        </p>
      )}
    </div>
  );
}
