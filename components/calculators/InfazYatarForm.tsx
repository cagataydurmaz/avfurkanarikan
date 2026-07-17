"use client";

import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import { SUC_KATEGORILERI, calculateInfazYatar, type SucKategorisi } from "@/lib/calculators/infazYatar";

const dateFormat = new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" });

export default function InfazYatarForm() {
  const [baslangicTarihi, setBaslangicTarihi] = useState("");
  const [cezaYili, setCezaYili] = useState("");
  const [cezaAyi, setCezaAyi] = useState("0");
  const [kategori, setKategori] = useState<SucKategorisi>("genel");
  const [suc2020Oncesi, setSuc2020Oncesi] = useState(false);

  const cezaYiliNum = parseInt(cezaYili, 10) || 0;
  const cezaAyiNum = parseInt(cezaAyi, 10) || 0;
  const hasResult = !!baslangicTarihi && (cezaYiliNum > 0 || cezaAyiNum > 0);
  const result = hasResult
    ? calculateInfazYatar(baslangicTarihi, cezaYiliNum, cezaAyiNum, kategori, suc2020Oncesi)
    : null;

  return (
    <div className="rounded-2xl border p-6 md:p-8" style={{ borderColor: "#E5D9CC", backgroundColor: "#fff" }}>
      <div
        className="rounded-xl p-4 mb-6 text-sm leading-relaxed"
        style={{ backgroundColor: "#FBEFE8", color: "#8A4A2E" }}
      >
        <strong>Bu araç yalnızca süreli hapis cezaları için genel/basitleştirilmiş bir hesap
        sunar.</strong> Tekerrür, yaş/sağlık durumu, örgüt-terör bağlantısı gibi onlarca istisna
        sonucu değiştirebilir. Müebbet ve ağırlaştırılmış müebbet cezaları bu hesaba dahil
        değildir.
      </div>

      <div className="mb-5">
        <label htmlFor="infaz-baslangic" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
          Cezanın İnfaza Başlama Tarihi
        </label>
        <input
          id="infaz-baslangic"
          type="date"
          value={baslangicTarihi}
          onChange={(e) => setBaslangicTarihi(e.target.value)}
          className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
          style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="ceza-yili" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
            Ceza Süresi — Yıl
          </label>
          <input
            id="ceza-yili"
            type="number"
            inputMode="numeric"
            min="0"
            placeholder="Örn. 4"
            value={cezaYili}
            onChange={(e) => setCezaYili(e.target.value)}
            className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
          />
        </div>
        <div>
          <label htmlFor="ceza-ayi" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
            Ceza Süresi — Ay
          </label>
          <input
            id="ceza-ayi"
            type="number"
            inputMode="numeric"
            min="0"
            max="11"
            value={cezaAyi}
            onChange={(e) => setCezaAyi(e.target.value)}
            className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
          />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="suc-kategorisi" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
          Suç Kategorisi
        </label>
        <select
          id="suc-kategorisi"
          value={kategori}
          onChange={(e) => setKategori(e.target.value as SucKategorisi)}
          className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
          style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
        >
          {Object.entries(SUC_KATEGORILERI).map(([key, val]) => (
            <option key={key} value={key}>{val.label}</option>
          ))}
        </select>
      </div>

      <label className="flex items-center gap-2 mb-6 text-sm" style={{ color: "#3D5A50" }}>
        <input
          type="checkbox"
          checked={suc2020Oncesi}
          onChange={(e) => setSuc2020Oncesi(e.target.checked)}
          className="h-4 w-4"
        />
        Suç tarihi 30.03.2020&apos;den önce (denetimli serbestlik süresini etkiler)
      </label>

      {result ? (
        <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: "#F4EDE4" }}>
          <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#7A9089" }}>
            Tahmini koşullu salıverilme tarihi ({SUC_KATEGORILERI[kategori].oran === 0.5 ? "1/2" : SUC_KATEGORILERI[kategori].oran === 2 / 3 ? "2/3" : "3/4"})
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {dateFormat.format(result.kosulluSaliverilmeTarihi)}
          </h3>
          <p className="text-sm mb-5" style={{ color: "#3D5A50" }}>
            Tahmini denetimli serbestlik başlangıcı ({result.denetimliSerbestlikAy === 12 ? "son 1 yıl" : "son 3 yıl"}):{" "}
            <strong>{dateFormat.format(result.denetimliSerbestlikBaslangici)}</strong>
          </p>
          <p className="text-xs leading-relaxed mb-5" style={{ color: "#8A4A2E" }}>
            İyi hal, koşullu salıverilmenin süreyi kısaltan bir unsuru değil, ön şartıdır — iyi
            hal olmadan bu tarihte tahliye gerçekleşmez. Denetimli serbestlik ayrıca açık
            cezaevine ayrılma şartına bağlıdır.
          </p>

          <TrackedLink
            channel="whatsapp"
            label="infaz-yatar-hesaplama"
            href="https://wa.me/905354874099"
            className="inline-block text-xs font-semibold px-4 py-2.5 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
          >
            Durumunuzu Ceza Avukatıyla Değerlendirin
          </TrackedLink>
        </div>
      ) : (
        <p className="text-sm" style={{ color: "#8A9A93" }}>
          Sonucu görmek için infaz başlangıç tarihini ve ceza süresini girin.
        </p>
      )}
    </div>
  );
}
