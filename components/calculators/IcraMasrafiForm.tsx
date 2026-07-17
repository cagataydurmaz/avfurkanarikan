"use client";

import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import {
  calculateIcraMasrafi,
  type TahsilAsamasi,
  type TakipTuru,
} from "@/lib/calculators/icraMasrafi";

const currency = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 2,
});

const ASAMA_LABELS: Record<TahsilAsamasi, string> = {
  hacizOncesi: "Haciz öncesi (icra/ödeme emri sonrası)",
  hacizSonrasi: "Haciz sonrası, satıştan önce",
  satisIle: "Haczedilen malın satışıyla",
};

export default function IcraMasrafiForm() {
  const [takipTuru, setTakipTuru] = useState<TakipTuru>("ilamsiz");
  const [alacakTutari, setAlacakTutari] = useState("");
  const [asama, setAsama] = useState<TahsilAsamasi>("hacizOncesi");

  const alacakTutariNum = parseFloat(alacakTutari.replace(",", "."));
  const result = alacakTutariNum > 0 ? calculateIcraMasrafi(takipTuru, alacakTutariNum, asama) : null;

  return (
    <div className="rounded-2xl border p-6 md:p-8" style={{ borderColor: "#E5D9CC", backgroundColor: "#fff" }}>
      <div className="mb-5">
        <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
          Takip Türü
        </label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setTakipTuru("ilamsiz")}
            className="flex-1 text-sm font-medium px-4 py-2.5 rounded-xl border transition-colors"
            style={
              takipTuru === "ilamsiz"
                ? { backgroundColor: "#14342B", color: "#F4EDE4", borderColor: "#14342B" }
                : { color: "#14342B", borderColor: "#E5D9CC" }
            }
          >
            İlamsız / Kambiyo
          </button>
          <button
            type="button"
            onClick={() => setTakipTuru("ilamli")}
            className="flex-1 text-sm font-medium px-4 py-2.5 rounded-xl border transition-colors"
            style={
              takipTuru === "ilamli"
                ? { backgroundColor: "#14342B", color: "#F4EDE4", borderColor: "#14342B" }
                : { color: "#14342B", borderColor: "#E5D9CC" }
            }
          >
            İlamlı
          </button>
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="alacak-tutari" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
          Alacak Tutarı (TL)
        </label>
        <input
          id="alacak-tutari"
          type="number"
          inputMode="decimal"
          min="0"
          placeholder="Örn. 100000"
          value={alacakTutari}
          onChange={(e) => setAlacakTutari(e.target.value)}
          className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
          style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="tahsil-asamasi" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
          Tahsilat Hangi Aşamada Gerçekleşti?
        </label>
        <select
          id="tahsil-asamasi"
          value={asama}
          onChange={(e) => setAsama(e.target.value as TahsilAsamasi)}
          className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
          style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
        >
          {Object.entries(ASAMA_LABELS).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
      </div>

      {result ? (
        <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: "#F4EDE4" }}>
          <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#7A9089" }}>
            Tahsil harcı (%{(result.tahsilHarciOrani * 100).toFixed(2).replace(".", ",")})
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {currency.format(result.tahsilHarci)}
          </h3>
          <div className="text-sm space-y-1 mb-5" style={{ color: "#3D5A50" }}>
            <p>Başlangıç masrafları toplamı: <strong>{currency.format(result.baslangicToplami)}</strong></p>
            {takipTuru === "ilamsiz" && (
              <p className="text-xs" style={{ color: "#8A9A93" }}>
                (başvurma harcı + vekaletname sureti harcı + binde 5 peşin harç)
              </p>
            )}
          </div>
          <p className="text-xs leading-relaxed" style={{ color: "#8A9A93" }}>
            Bu tutarlara ayrıca tebligat gideri eklenir; başlangıç masraflarını alacaklı öder,
            takip başarılı olursa İİK m.15 uyarınca borçluya yükletilir. Tahsil harcı ise
            doğrudan tahsil edilen tutardan kesilir.
          </p>

          <TrackedLink
            channel="whatsapp"
            label="icra-masrafi-hesaplama"
            href="https://wa.me/905354874099"
            className="inline-block mt-5 text-xs font-semibold px-4 py-2.5 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
          >
            Takibinizi Avukatla Değerlendirin
          </TrackedLink>
        </div>
      ) : (
        <p className="text-sm" style={{ color: "#8A9A93" }}>
          Sonucu görmek için alacak tutarını girin.
        </p>
      )}
    </div>
  );
}
