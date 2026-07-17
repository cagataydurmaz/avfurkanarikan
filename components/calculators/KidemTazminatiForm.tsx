"use client";

import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import { KIDEM_TAVANI, KIDEM_TAVANI_PERIOD, calculateKidemTazminati } from "@/lib/calculators/kidemTazminati";

const currency = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 2,
});

export default function KidemTazminatiForm() {
  const [girisTarihi, setGirisTarihi] = useState("");
  const [cikisTarihi, setCikisTarihi] = useState("");
  const [brutUcret, setBrutUcret] = useState("");

  const brutUcretNum = parseFloat(brutUcret.replace(",", "."));
  const canCalculate =
    !!girisTarihi && !!cikisTarihi && new Date(cikisTarihi) > new Date(girisTarihi) && brutUcretNum > 0;
  const result = canCalculate ? calculateKidemTazminati(girisTarihi, cikisTarihi, brutUcretNum) : null;

  return (
    <div
      className="rounded-2xl border p-6 md:p-8"
      style={{ borderColor: "#E5D9CC", backgroundColor: "#fff" }}
    >
      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label
            htmlFor="giris-tarihi"
            className="block text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#7f5c2c" }}
          >
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
          <label
            htmlFor="cikis-tarihi"
            className="block text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#7f5c2c" }}
          >
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

      <div className="mb-2">
        <label
          htmlFor="brut-ucret"
          className="block text-xs font-semibold tracking-widest uppercase mb-2"
          style={{ color: "#7f5c2c" }}
        >
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
      <p className="text-xs leading-relaxed mb-6" style={{ color: "#8A9A93" }}>
        Yol, yemek, düzenli prim ve ikramiye gibi para ile ölçülebilen süreklilik arz eden
        ödemeler dahil edilmiş (&quot;giydirilmiş&quot;) brüt ücretinizi girmeniz daha doğru
        sonuç verir.
      </p>

      {result && !result.yeterliKidem && (
        <div className="rounded-xl p-5" style={{ backgroundColor: "#FBEFE8" }}>
          <p className="text-sm leading-relaxed" style={{ color: "#8A4A2E" }}>
            Girdiğiniz tarihlere göre toplam çalışma süresi <strong>{result.toplamGun} gün</strong>
            {" "}— yasal kıdem tazminatı hakkı için en az <strong>1 tam yıl (365 gün)</strong> kesintisiz
            çalışma şartı aranır. Bu süreyi doldurmayan çalışmalar için kıdem tazminatı doğmaz.
          </p>
        </div>
      )}

      {result && result.yeterliKidem && (
        <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: "#F4EDE4" }}>
          <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#7A9089" }}>
            Net kıdem tazminatı
          </p>
          <h3
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {currency.format(result.netTazminat)}
          </h3>
          <div className="text-sm space-y-1 mb-5" style={{ color: "#3D5A50" }}>
            <p>Brüt tazminat: <strong>{currency.format(result.brutTazminat)}</strong></p>
            <p>Damga vergisi (binde 7,59): <strong>{currency.format(result.damgaVergisi)}</strong></p>
            <p>Toplam kıdem süresi: <strong>{result.toplamGun} gün</strong></p>
          </div>

          {result.tavanUygulandi && (
            <p className="text-xs leading-relaxed mb-5" style={{ color: "#8A4A2E" }}>
              Girdiğiniz brüt ücret, {KIDEM_TAVANI_PERIOD} dönemi için geçerli kıdem tazminatı
              tavanı olan {currency.format(KIDEM_TAVANI)} tutarının üzerinde olduğundan hesaplama
              tavan üzerinden yapılmıştır.
            </p>
          )}

          <TrackedLink
            channel="whatsapp"
            label="kidem-tazminati-hesaplama"
            href="https://wa.me/905354874099"
            className="inline-block text-xs font-semibold px-4 py-2.5 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
          >
            Bu Tutarı Avukatla Değerlendirin
          </TrackedLink>
        </div>
      )}

      {!result && (
        <p className="text-sm" style={{ color: "#8A9A93" }}>
          Sonucu görmek için işe giriş/çıkış tarihlerinizi ve brüt ücretinizi girin.
        </p>
      )}
    </div>
  );
}
