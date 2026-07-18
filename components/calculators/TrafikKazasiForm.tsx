"use client";

import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import { calculateTrafikZamanasimi, type ZamanasimiTuru } from "@/lib/calculators/trafikKazasi";

const dateFormat = new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" });

const TUR_LABELS: Record<ZamanasimiTuru, string> = {
  genel: "Yalnızca maddi hasar / hafif yaralanma",
  taksirleYaralama: "Taksirle (bilinçsiz) yaralanma söz konusu",
  taksirleOlum: "Ölümle sonuçlandı",
};

export default function TrafikKazasiForm() {
  const [kazaTarihi, setKazaTarihi] = useState("");
  const [ogrenmeTarihi, setOgrenmeTarihi] = useState("");
  const [tur, setTur] = useState<ZamanasimiTuru>("genel");

  const result = kazaTarihi
    ? calculateTrafikZamanasimi(kazaTarihi, ogrenmeTarihi || kazaTarihi, tur)
    : null;

  return (
    <div className="rounded-2xl border p-6 md:p-8" style={{ borderColor: "#E5D9CC", backgroundColor: "#fff" }}>
      <div
        className="rounded-xl p-4 mb-6 text-sm leading-relaxed"
        style={{ backgroundColor: "#FBEFE8", color: "#8A4A2E" }}
      >
        <strong>Bu araç tazminat tutarı hesaplamaz.</strong> Sürekli iş göremezlik ve manevi
        tazminat tutarları aktüeryal hesap ve hakim takdiri gerektirir; güvenilir bir kestirme
        formül yoktur. Bu araç yalnızca dava açma hakkınızın ne zaman sona ereceğini
        (zamanaşımını) hesaplar.
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="kaza-tarihi" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
            Kaza Tarihi
          </label>
          <input
            id="kaza-tarihi"
            type="date"
            value={kazaTarihi}
            onChange={(e) => setKazaTarihi(e.target.value)}
            className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
          />
        </div>
        <div>
          <label htmlFor="ogrenme-tarihi" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
            Sorumlunun Öğrenildiği Tarih
          </label>
          <input
            id="ogrenme-tarihi"
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
        <label htmlFor="kaza-turu" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
          Kazanın Niteliği
        </label>
        <select
          id="kaza-turu"
          value={tur}
          onChange={(e) => setTur(e.target.value as ZamanasimiTuru)}
          className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
          style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
        >
          {Object.entries(TUR_LABELS).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
      </div>

      {result ? (
        <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: "#F4EDE4" }}>
          <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#7A9089" }}>
            Tazminat davası açma hakkının sona erdiği tarih
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {dateFormat.format(result.uygulanacakTarih)}
          </h3>
          {result.cezaZamanasimiUygulandi ? (
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#3D5A50" }}>
              Olay ceza gerektiren bir suç oluşturduğundan (taksirle yaralama/ölüm), TBK m.72/2
              uyarınca genel 2/10 yıllık süre yerine daha uzun olan{" "}
              <strong>{result.cezaYili} yıllık ceza zamanaşımı</strong> uygulanır; bu süre kaza
              tarihinden itibaren işler.
            </p>
          ) : (
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#3D5A50" }}>
              Genel kural: sorumlunun öğrenilmesinden itibaren{" "}
              <strong>{dateFormat.format(result.genelSure)}</strong> (2 yıl) veya kaza
              tarihinden itibaren <strong>{dateFormat.format(result.mutlakSure)}</strong>{" "}
              (10 yıl, mutlak süre) — hangisi önce dolarsa dava hakkı o tarihte sona erer.
            </p>
          )}

          <TrackedLink
            channel="whatsapp"
            label="trafik-kazasi-hesaplama"
            href="https://wa.me/905354874099"
            className="inline-block text-xs font-semibold px-4 py-2.5 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
          >
            Durumunuzu Avukatla Değerlendirin
          </TrackedLink>
        </div>
      ) : (
        <p className="text-sm" style={{ color: "#8A9A93" }}>
          Sonucu görmek için kaza tarihini ve kazanın niteliğini girin.
        </p>
      )}
    </div>
  );
}
