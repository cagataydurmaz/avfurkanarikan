"use client";

import { useState } from "react";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import { ADLIYE_DISTRICTS, COURTHOUSES } from "@/lib/calculators/adliyeBulucu";

export default function AdliyeBulucuForm() {
  const [slug, setSlug] = useState("");

  const district = ADLIYE_DISTRICTS.find((d) => d.slug === slug);
  const courthouse = district ? COURTHOUSES[district.courthouse] : undefined;
  const mapsHref = courthouse
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(courthouse.name + " " + courthouse.address)}`
    : undefined;

  return (
    <div
      className="rounded-2xl border p-6 md:p-8"
      style={{ borderColor: "#E5D9CC", backgroundColor: "#fff" }}
    >
      <label
        htmlFor="ilce-select"
        className="block text-xs font-semibold tracking-widest uppercase mb-2"
        style={{ color: "#7f5c2c" }}
      >
        İlçenizi Seçin
      </label>
      <select
        id="ilce-select"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        className="w-full text-base rounded-xl border px-4 py-3 mb-6 focus:outline-none focus:ring-2"
        style={{ borderColor: "#E5D9CC", color: "#14342B", backgroundColor: "#FBF7F1" }}
      >
        <option value="">— İlçe seçin —</option>
        {ADLIYE_DISTRICTS.map((d) => (
          <option key={d.slug} value={d.slug}>
            {d.name}
          </option>
        ))}
      </select>

      {district && courthouse ? (
        <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: "#F4EDE4" }}>
          <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#7A9089" }}>
            {district.name} bağlı olduğu adliye
          </p>
          <h3
            className="text-xl font-bold mb-3"
            style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {courthouse.name}
          </h3>
          <p className="text-sm leading-relaxed mb-1" style={{ color: "#3D5A50" }}>
            {courthouse.address}
          </p>
          <p className="text-sm mb-5" style={{ color: "#3D5A50" }}>
            {courthouse.phone}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-4 py-2.5 rounded-full border transition-colors"
              style={{ color: "#14342B", borderColor: "#14342B" }}
            >
              Haritada Göster
            </a>
            <Link
              href={`/${district.slug}-avukat`}
              className="text-xs font-semibold px-4 py-2.5 rounded-full border transition-colors"
              style={{ color: "#14342B", borderColor: "#14342B" }}
            >
              {district.name} Avukat →
            </Link>
            <TrackedLink
              channel="phone"
              label="adliye-bulucu"
              href="tel:+905354874099"
              className="text-xs font-semibold px-4 py-2.5 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#14342B", color: "#F4EDE4" }}
            >
              Hukuki Destek İçin Arayın
            </TrackedLink>
          </div>
        </div>
      ) : (
        <p className="text-sm" style={{ color: "#8A9A93" }}>
          Sonucu görmek için yukarıdan ilçenizi seçin.
        </p>
      )}
    </div>
  );
}
