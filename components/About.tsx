"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="hakkimda" className="py-20 md:py-28" style={{ backgroundColor: "#F4EDE4" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
            {t("about.label")}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Photo column */}
          <div className="flex flex-col items-center md:items-start">
            {/* Photo */}
            <div
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden mb-6 flex-shrink-0"
              style={{ border: "4px solid #C5A880" }}
            >
              <Image
                src="/furkan-arikan.jpg"
                alt="Av. Furkan Arıkan"
                fill
                sizes="(min-width: 768px) 288px, 224px"
                className="object-cover object-center"
              />
            </div>

            {/* Author byline - E-E-A-T */}
            <div
              className="w-full md:max-w-xs p-4 rounded border"
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
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{
                color: "#14342B",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              Furkan Arıkan
            </h2>
            <p className="text-sm font-medium mb-6" style={{ color: "#C5A880" }}>
              {t("about.role")}
            </p>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#2D4A3E" }}>
              <p>{t("about.bio1")}</p>
              <p>{t("about.bio2")}</p>
              <p>{t("about.bio3")}</p>
            </div>

            {/* Education / Bar info */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoCard
                icon={<GradCapIcon />}
                label={t("about.education")}
                value={t("about.educationValue")}
              />
              <InfoCard
                icon={<BarIcon />}
                label={t("about.bar")}
                value={t("about.barValue")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className="flex items-start gap-3 p-4 rounded"
      style={{ backgroundColor: "#EBE0D4" }}
    >
      <div
        className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded"
        style={{ backgroundColor: "#14342B" }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "#C5A880" }}>
          {label}
        </p>
        <p className="text-sm" style={{ color: "#14342B" }}>
          {value}
        </p>
      </div>
    </div>
  );
}

function GradCapIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function BarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 6l9-3 9 3M3 12l9 3 9-3M3 18l9 3 9-3" />
    </svg>
  );
}
