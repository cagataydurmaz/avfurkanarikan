"use client";

import { useState } from "react";

export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src="https://maps.google.com/maps?q=Sinanpaşa+Mahallesi+Şehit+Asım+Caddesi+No+37+Beşiktaş+Istanbul&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Av. Furkan Arıkan Hukuk Bürosu Konum"
        aria-label="Ofis konumu haritası - Sinanpaşa Mh. Şht. Asım Cd. No:37/12 Beşiktaş/İstanbul"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="w-full h-full flex flex-col items-center justify-center gap-2 transition-colors hover:brightness-95"
      style={{ backgroundColor: "#EBE0D4" }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#14342B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
      <span className="text-sm font-medium" style={{ color: "#14342B" }}>
        Haritayı Görüntüle
      </span>
    </button>
  );
}
