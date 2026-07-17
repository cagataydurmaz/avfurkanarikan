"use client";

import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import { calculateDavaHarci, type MahkemeTuru } from "@/lib/calculators/davaHarci";

const currency = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 2,
});

const MAHKEME_LABELS: Record<MahkemeTuru, string> = {
  sulhHukuk: "Sulh Hukuk Mahkemesi",
  asliyeHukuk: "Asliye Hukuk / Ticaret / Aile / İdare Mahkemesi",
  bolgeYargitay: "Bölge Adliye Mahkemesi / Yargıtay",
};

export default function DavaHarciForm() {
  const [mahkemeTuru, setMahkemeTuru] = useState<MahkemeTuru>("asliyeHukuk");
  const [davaDegeri, setDavaDegeri] = useState("");

  const davaDegeriNum = parseFloat(davaDegeri.replace(",", ".")) || 0;
  const result = calculateDavaHarci(mahkemeTuru, davaDegeriNum);

  return (
    <div className="rounded-2xl border p-6 md:p-8" style={{ borderColor: "#E5D9CC", backgroundColor: "#fff" }}>
      <div className="mb-5">
        <label htmlFor="mahkeme-turu" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
          Mahkeme Türü
        </label>
        <select
          id="mahkeme-turu"
          value={mahkemeTuru}
          onChange={(e) => setMahkemeTuru(e.target.value as MahkemeTuru)}
          className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
          style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
        >
          {Object.entries(MAHKEME_LABELS).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="dava-degeri" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
          Dava Değeri (TL) — konusu para olmayan davalarda boş bırakın
        </label>
        <input
          id="dava-degeri"
          type="number"
          inputMode="decimal"
          min="0"
          placeholder="Örn. 200000"
          value={davaDegeri}
          onChange={(e) => setDavaDegeri(e.target.value)}
          className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
          style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
        />
      </div>

      <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: "#F4EDE4" }}>
        <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#7A9089" }}>
          Dava açılışında ödenecek toplam harç
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
          {currency.format(result.acilisToplami)}
        </h3>
        <div className="text-sm space-y-1 mb-5" style={{ color: "#3D5A50" }}>
          <p>Başvurma harcı (maktu): <strong>{currency.format(result.basvurmaHarci)}</strong></p>
          {davaDegeriNum > 0 && (
            <>
              <p>Peşin harç (nispi harcın 1/4&apos;ü): <strong>{currency.format(result.pesinHarc)}</strong></p>
              <p>Karar kesinleşince ödenecek kalan harç (3/4): <strong>{currency.format(result.kalanHarc)}</strong></p>
            </>
          )}
        </div>
        <p className="text-xs leading-relaxed" style={{ color: "#8A9A93" }}>
          Bu tutara ayrıca tebligat gideri için gider avansı eklenir; kesin tutar dava dosyasının
          taraf sayısına göre değişir.
        </p>
      </div>

      <TrackedLink
        channel="whatsapp"
        label="dava-harci-hesaplama"
        href="https://wa.me/905354874099"
        className="inline-block mt-5 text-xs font-semibold px-4 py-2.5 rounded-full transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#25D366", color: "#fff" }}
      >
        Davanızı Avukatla Değerlendirin
      </TrackedLink>
    </div>
  );
}
