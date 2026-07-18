"use client";

import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import {
  SIGORTA_BILGISI,
  calculateDegerKaybiZamanasimi,
  type SigortaTuru,
} from "@/lib/calculators/aracDegerKaybi";

const dateFormat = new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" });

export default function AracDegerKaybiForm() {
  const [kazaTarihi, setKazaTarihi] = useState("");
  const [ogrenmeTarihi, setOgrenmeTarihi] = useState("");
  const [sigortaTuru, setSigortaTuru] = useState<SigortaTuru>("zmss");

  const result = kazaTarihi ? calculateDegerKaybiZamanasimi(kazaTarihi, ogrenmeTarihi || kazaTarihi) : null;

  return (
    <div className="rounded-2xl border p-6 md:p-8" style={{ borderColor: "#E5D9CC", backgroundColor: "#fff" }}>
      <div
        className="rounded-xl p-4 mb-6 text-sm leading-relaxed"
        style={{ backgroundColor: "#FBEFE8", color: "#8A4A2E" }}
      >
        <strong>Bu araç değer kaybı tutarı hesaplamaz.</strong> Kesin tutar; aracın yaşı,
        kilometresi, hasarın niteliği ve piyasa değeri dikkate alınarak mutlaka bir sigorta
        eksperi/bilirkişi raporuyla belirlenir — güvenilir bir kestirme formül yoktur. Bu araç
        talebinizin zamanaşımını ve hangi sigortaya yöneltilebileceğini gösterir.
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="dk-kaza-tarihi" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
            Kaza Tarihi
          </label>
          <input
            id="dk-kaza-tarihi"
            type="date"
            value={kazaTarihi}
            onChange={(e) => setKazaTarihi(e.target.value)}
            className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
          />
        </div>
        <div>
          <label htmlFor="dk-ogrenme-tarihi" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
            Sorumlunun Öğrenildiği Tarih
          </label>
          <input
            id="dk-ogrenme-tarihi"
            type="date"
            value={ogrenmeTarihi}
            onChange={(e) => setOgrenmeTarihi(e.target.value)}
            placeholder="Boşsa kaza tarihiyle aynı kabul edilir"
            className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
          Talebi Hangi Sigortaya Yöneltmeyi Planlıyorsunuz?
        </label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setSigortaTuru("zmss")}
            className="flex-1 text-sm font-medium px-4 py-2.5 rounded-xl border transition-colors"
            style={
              sigortaTuru === "zmss"
                ? { backgroundColor: "#14342B", color: "#F4EDE4", borderColor: "#14342B" }
                : { color: "#14342B", borderColor: "#E5D9CC" }
            }
          >
            Zorunlu Trafik Sigortası (ZMSS)
          </button>
          <button
            type="button"
            onClick={() => setSigortaTuru("kasko")}
            className="flex-1 text-sm font-medium px-4 py-2.5 rounded-xl border transition-colors"
            style={
              sigortaTuru === "kasko"
                ? { backgroundColor: "#14342B", color: "#F4EDE4", borderColor: "#14342B" }
                : { color: "#14342B", borderColor: "#E5D9CC" }
            }
          >
            Kasko
          </button>
        </div>
      </div>

      <div className="rounded-xl p-5 mb-5" style={{ backgroundColor: "#F4EDE4" }}>
        <p className="text-sm leading-relaxed" style={{ color: "#3D5A50" }}>
          {SIGORTA_BILGISI[sigortaTuru]}
        </p>
      </div>

      {result ? (
        <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: "#F4EDE4" }}>
          <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#7A9089" }}>
            Talep hakkının sona erdiği tarih
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {dateFormat.format(result.uygulanacakTarih)}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "#3D5A50" }}>
            Genel kural: sorumlunun öğrenilmesinden itibaren{" "}
            <strong>{dateFormat.format(result.genelSure)}</strong> (2 yıl) veya kaza
            tarihinden itibaren <strong>{dateFormat.format(result.mutlakSure)}</strong>{" "}
            (10 yıl, mutlak süre) — hangisi önce dolarsa talep hakkı o tarihte sona erer.
          </p>

          <TrackedLink
            channel="whatsapp"
            label="arac-deger-kaybi-hesaplama"
            href="https://wa.me/905354874099"
            className="inline-block mt-5 text-xs font-semibold px-4 py-2.5 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
          >
            Durumunuzu Avukatla Değerlendirin
          </TrackedLink>
        </div>
      ) : (
        <p className="text-sm" style={{ color: "#8A9A93" }}>
          Sonucu görmek için kaza tarihini girin.
        </p>
      )}
    </div>
  );
}
