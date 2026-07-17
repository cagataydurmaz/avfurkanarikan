"use client";

import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import { calculateIzinUcreti, calculateYillikIzinHakki } from "@/lib/calculators/yillikIzin";

const currency = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 2,
});

export default function YillikIzinForm() {
  const [girisTarihi, setGirisTarihi] = useState("");
  const [hesapTarihi, setHesapTarihi] = useState("");
  const [yas, setYas] = useState("");
  const [bakiyeGun, setBakiyeGun] = useState("");
  const [brutUcret, setBrutUcret] = useState("");

  const yasNum = yas ? parseInt(yas, 10) : null;
  const bakiyeGunNum = parseFloat(bakiyeGun.replace(",", "."));
  const brutUcretNum = parseFloat(brutUcret.replace(",", "."));

  let toplamGun: number | null = null;
  if (girisTarihi && hesapTarihi && new Date(hesapTarihi) > new Date(girisTarihi)) {
    toplamGun = Math.round(
      (new Date(hesapTarihi).getTime() - new Date(girisTarihi).getTime()) / (1000 * 60 * 60 * 24)
    );
  }
  const hakSonucu = toplamGun !== null ? calculateYillikIzinHakki(toplamGun, yasNum) : null;
  const ucretSonucu = bakiyeGunNum > 0 && brutUcretNum > 0 ? calculateIzinUcreti(brutUcretNum, bakiyeGunNum) : null;

  return (
    <div className="rounded-2xl border p-6 md:p-8" style={{ borderColor: "#E5D9CC", backgroundColor: "#fff" }}>
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
          <label htmlFor="hesap-tarihi" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
            Hesaplama Tarihi
          </label>
          <input
            id="hesap-tarihi"
            type="date"
            value={hesapTarihi}
            onChange={(e) => setHesapTarihi(e.target.value)}
            className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
          />
        </div>
      </div>

      {hakSonucu && (
        <p className="text-sm mb-5" style={{ color: hakSonucu.yeterliKidem ? "#3D5A50" : "#8A4A2E" }}>
          {hakSonucu.yeterliKidem
            ? `Kıdeminize göre yıllık izin hakkınız: ${hakSonucu.yillikIzinGunu} gün (bilgi amaçlıdır).`
            : "1 yıldan az kıdemde yıllık ücretli izin hakkı henüz doğmaz."}
        </p>
      )}

      <div className="grid sm:grid-cols-2 gap-5 mb-2">
        <div>
          <label htmlFor="yas" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
            Yaşınız (opsiyonel)
          </label>
          <input
            id="yas"
            type="number"
            inputMode="numeric"
            min="0"
            placeholder="18 yaş altı / 50 yaş üstü için taban artar"
            value={yas}
            onChange={(e) => setYas(e.target.value)}
            className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
          />
        </div>
        <div>
          <label htmlFor="bakiye-gun" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
            Kullanılmayan (Bakiye) İzin Günü
          </label>
          <input
            id="bakiye-gun"
            type="number"
            inputMode="decimal"
            min="0"
            placeholder="Örn. 14"
            value={bakiyeGun}
            onChange={(e) => setBakiyeGun(e.target.value)}
            className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
            style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="izin-brut-ucret" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#7f5c2c" }}>
          Son Brüt Aylık Ücret (TL)
        </label>
        <input
          id="izin-brut-ucret"
          type="number"
          inputMode="decimal"
          min="0"
          placeholder="Örn. 40000"
          value={brutUcret}
          onChange={(e) => setBrutUcret(e.target.value)}
          className="w-full text-base rounded-xl border px-4 py-3 focus:outline-none focus:ring-2"
          style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
        />
      </div>

      {ucretSonucu ? (
        <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: "#F4EDE4" }}>
          <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#7A9089" }}>
            Brüt izin ücreti ({bakiyeGunNum} gün)
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {currency.format(ucretSonucu.izinUcreti)}
          </h3>
          <p className="text-sm mb-5" style={{ color: "#3D5A50" }}>
            Günlük brüt ücret: <strong>{currency.format(ucretSonucu.gunlukUcret)}</strong>
          </p>

          <TrackedLink
            channel="whatsapp"
            label="yillik-izin-hesaplama"
            href="https://wa.me/905354874099"
            className="inline-block text-xs font-semibold px-4 py-2.5 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
          >
            Bu Tutarı Avukatla Değerlendirin
          </TrackedLink>
        </div>
      ) : (
        <p className="text-sm" style={{ color: "#8A9A93" }}>
          İzin ücretini görmek için bakiye izin gününüzü ve brüt ücretinizi girin.
        </p>
      )}
    </div>
  );
}
