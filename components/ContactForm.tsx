"use client";

import { useState } from "react";

const konular = [
  "Ceza Hukuku",
  "İş Hukuku",
  "Gayrimenkul Hukuku",
  "Miras Hukuku",
  "Borçlar Hukuku",
  "Aile Hukuku",
  "Diğer",
];

export default function ContactForm() {
  const [ad, setAd] = useState("");
  const [telefon, setTelefon] = useState("");
  const [konu, setKonu] = useState(konular[0]);
  const [mesaj, setMesaj] = useState("");

  const buildMessage = () =>
    [
      `Merhaba, ben ${ad || "..."}.`,
      `Konu: ${konu}`,
      telefon && `Telefon: ${telefon}`,
      mesaj && `Mesaj: ${mesaj}`,
    ]
      .filter(Boolean)
      .join("\n");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/905354874099?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const mailtoHref = () => {
    const subject = encodeURIComponent(`Hukuki Danışmanlık Talebi - ${konu}`);
    const body = encodeURIComponent(buildMessage());
    return `mailto:av.furkanarikan1@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="cf-ad"
          className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
          style={{ color: "#C5A880" }}
        >
          Ad Soyad
        </label>
        <input
          id="cf-ad"
          type="text"
          required
          value={ad}
          onChange={(e) => setAd(e.target.value)}
          placeholder="Adınız Soyadınız"
          className="contact-form-field"
        />
      </div>

      <div>
        <label
          htmlFor="cf-telefon"
          className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
          style={{ color: "#C5A880" }}
        >
          Telefon
        </label>
        <input
          id="cf-telefon"
          type="tel"
          inputMode="numeric"
          required
          value={telefon}
          onChange={(e) => setTelefon(e.target.value.replace(/[^0-9]/g, ""))}
          placeholder="05XX XXX XX XX"
          className="contact-form-field"
        />
      </div>

      <div>
        <label
          htmlFor="cf-konu"
          className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
          style={{ color: "#C5A880" }}
        >
          Konu
        </label>
        <select
          id="cf-konu"
          value={konu}
          onChange={(e) => setKonu(e.target.value)}
          className="contact-form-field"
        >
          {konular.map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="cf-mesaj"
          className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
          style={{ color: "#C5A880" }}
        >
          Mesajınız
        </label>
        <textarea
          id="cf-mesaj"
          rows={4}
          value={mesaj}
          onChange={(e) => setMesaj(e.target.value)}
          placeholder="Durumunuzu kısaca özetleyin"
          className="contact-form-field resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <button
          type="submit"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ease-out hover:opacity-90 hover:scale-[1.02]"
          style={{ backgroundColor: "#25D366", color: "#fff" }}
        >
          <WhatsAppIcon />
          WhatsApp ile Gönder
        </button>
        <a
          href={mailtoHref()}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold border transition-all duration-300 ease-out hover:bg-white/10"
          style={{ color: "#C5A880", borderColor: "rgba(197,168,128,0.4)" }}
        >
          <EmailIcon />
          E-posta ile Gönder
        </a>
      </div>

      <p className="text-xs pt-1" style={{ color: "rgba(244,237,228,0.4)" }}>
        Gönder&apos;e bastığınızda WhatsApp veya e-posta uygulamanız, mesajınız hazır halde açılır.
      </p>
    </form>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
