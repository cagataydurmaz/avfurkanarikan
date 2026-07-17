"use client";

import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import { STOPAJ_ORANI, calculateKiraStopaji } from "@/lib/calculators/kiraStopaji";

const currency = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 2,
});

export default function KiraStopajiForm() {
  const [brutKira, setBrutKira] = useState("");
  const [mukellef, setMukellef] = useState<boolean | null>(null);

  const brutKiraNum = parseFloat(brutKira.replace(",", "."));
  const result = mukellef === true && brutKiraNum > 0 ? calculateKiraStopaji(brutKiraNum) : null;

  return (
    <div className="rounded-2xl border p-6 md:p-8" style={{ borderColor: "#E5D9CC", backgroundColor: "#fff" }}>
      <div className="mb-6">
        <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
          Kiracınız Gelir/Kurumlar Vergisi Mükellefi mi? (Şirket, esnaf, serbest meslek sahibi vb.)
        </label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setMukellef(true)}
            className="flex-1 text-sm font-medium px-4 py-2.5 rounded-xl border transition-colors"
            style={
              mukellef === true
                ? { backgroundColor: "#14342B", color: "#F4EDE4", borderColor: "#14342B" }
                : { color: "#14342B", borderColor: "#E5D9CC" }
            }
          >
            Evet, mükellef
          </button>
          <button
            type="button"
            onClick={() => setMukellef(false)}
            className="flex-1 text-sm font-medium px-4 py-2.5 rounded-xl border transition-colors"
            style={
              mukellef === false
                ? { backgroundColor: "#14342B", color: "#F4EDE4", borderColor: "#14342B" }
                : { color: "#14342B", borderColor: "#E5D9CC" }
            }
          >
            Hayır, gerçek kişi
          </button>
        </div>
      </div>

      <div className="mb-2">
        <label htmlFor="brut-kira" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
          Aylık Brüt Kira Bedeli (TL)
        </label>
        <input
          id="brut-kira"
          type="number"
          inputMode="decimal"
          min="0"
          placeholder="Örn. 50000"
          value={brutKira}
          onChange={(e) => setBrutKira(e.target.value)}
          className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
          style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
        />
      </div>
      <p className="text-xs leading-relaxed mb-6" style={{ color: "#8A9A93" }}>
        Kriter işyeri/konut ayrımı değil, kiracının kim olduğudur — mükellef olmayan bir gerçek
        kişi işyeri kiralasa dahi stopaj yükümlülüğü doğmaz.
      </p>

      {mukellef === false && (
        <div className="rounded-xl p-5" style={{ backgroundColor: "#F4EDE4" }}>
          <p className="text-sm" style={{ color: "#3D5A50" }}>
            Kiracınız gelir/kurumlar vergisi mükellefi olmadığından bu kirada stopaj yükümlülüğü
            yoktur. Mal sahibi kira gelirini gayrimenkul sermaye iradı (GMSİ) olarak kendisi
            yıllık beyanname ile beyan eder.
          </p>
        </div>
      )}

      {result && (
        <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: "#F4EDE4" }}>
          <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#7A9089" }}>
            Stopaj tutarı (%{STOPAJ_ORANI * 100})
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {currency.format(result.stopajTutari)}
          </h3>
          <p className="text-sm" style={{ color: "#3D5A50" }}>
            Mal sahibine ödenecek net tutar: <strong>{currency.format(result.netOdeme)}</strong>
          </p>
          <p className="text-xs leading-relaxed mt-3" style={{ color: "#8A9A93" }}>
            Kiracı, kestiği stopajı muhtasar beyanname ile vergi dairesine beyan edip öder.
          </p>
        </div>
      )}

      <TrackedLink
        channel="whatsapp"
        label="kira-stopaji-hesaplama"
        href="https://wa.me/905354874099"
        className="inline-block mt-5 text-xs font-semibold px-4 py-2.5 rounded-full transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#25D366", color: "#fff" }}
      >
        Sorunuzu Avukatla Değerlendirin
      </TrackedLink>
    </div>
  );
}
