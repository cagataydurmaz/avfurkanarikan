"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="hakkimda" className="py-10 md:py-16" style={{ backgroundColor: "#F4EDE4" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
            {t("about.label")}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Photo column */}
          <div className="flex flex-col items-center md:items-start" data-reveal>
            {/* Mobil: kütüphane fotoğrafı (Hero'daki yuvarlak cüppeli portreyi tekrar etmemek için) */}
            <div className="md:hidden relative -mx-5 w-[calc(100%+2.5rem)] -mt-4 -mb-6">
              <div
                className="relative w-full aspect-[4/3]"
                style={{
                  maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.55) 8%, #000 18%, #000 55%, rgba(0,0,0,0.55) 76%, rgba(0,0,0,0.15) 90%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.55) 8%, #000 18%, #000 55%, rgba(0,0,0,0.55) 76%, rgba(0,0,0,0.15) 90%, transparent 100%)",
                }}
              >
                <Image
                  src="/furkan-kutuphane-yatay.jpg"
                  alt="Av. Furkan Arıkan büro kütüphanesinde çalışırken"
                  fill
                  sizes="(max-width: 767px) 100vw, 0px"
                  className="object-cover"
                  style={{ filter: "saturate(0.85) contrast(1.03)" }}
                />
                {/* Krem zemine sıcak geçiş */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, rgba(244,237,228,0) 40%, rgba(244,237,228,0.35) 75%, rgba(244,237,228,0.7) 100%)" }}
                />
              </div>
            </div>

            {/* Masaüstü: yuvarlak cüppeli portre */}
            <div
              className="hidden md:block relative md:w-72 md:h-72 rounded-full overflow-hidden mb-6 flex-shrink-0"
              style={{ border: "4px solid #C5A880" }}
            >
              <Image
                src="/furkan-arikan-cuppe.jpg"
                alt="Av. Furkan Arıkan"
                fill
                sizes="(min-width: 768px) 288px, 0px"
                className="object-cover object-center"
              />
            </div>

            {/* Author byline - E-E-A-T */}
            <div
              className="relative w-full md:max-w-xs p-4 rounded border"
              style={{ borderColor: "#C5A880", backgroundColor: "#FFFAF5" }}
            >
              <p className="text-sm font-semibold" style={{ color: "#14342B" }}>
                Av. Furkan Arıkan
              </p>
              <p className="text-xs mt-1" style={{ color: "#3D5A50" }}>
                {t("about.barValue")}
              </p>
              <div className="h-px my-2.5" style={{ backgroundColor: "#EBE0D4" }} />
              <p className="text-xs" style={{ color: "#3D5A50" }}>
                {t("about.educationValue")}
              </p>
            </div>
          </div>

          {/* Bio column */}
          <div data-reveal style={{ ["--d" as string]: "120ms" }}>
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{
                color: "#14342B",
                fontFamily: "var(--font-heading), Georgia, serif",
              }}
            >
              Furkan Arıkan
            </h2>
            <p className="text-sm font-medium mb-4 md:mb-6" style={{ color: "#C5A880" }}>
              {t("about.role")}
            </p>

            <div className="space-y-3 md:space-y-4 text-base leading-relaxed" style={{ color: "#2D4A3E" }}>
              <p>{t("about.bio1")}</p>
              <p>{t("about.bio2")}</p>
              <p>{t("about.bio3")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
