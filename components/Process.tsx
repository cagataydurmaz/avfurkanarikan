"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  const steps = [
    { number: "01", title: t("process.step1.title"), description: t("process.step1.desc") },
    { number: "02", title: t("process.step2.title"), description: t("process.step2.desc") },
    { number: "03", title: t("process.step3.title"), description: t("process.step3.desc") },
    { number: "04", title: t("process.step4.title"), description: t("process.step4.desc") },
  ];
  return (
    <section id="surec" className="py-10 md:py-16" style={{ backgroundColor: "#F4EDE4" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header - centered, breaks from the split layout used elsewhere */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center mb-7 md:mb-12">
          <span
            className="text-xs tracking-widest uppercase font-semibold px-3 py-1 rounded-full border mb-4"
            style={{ color: "#C5A880", borderColor: "rgba(197,168,128,0.4)" }}
          >
            {t("process.label")}
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold max-w-lg"
            style={{
              color: "#14342B",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            {t("process.heading")}
          </h2>
          <p className="mt-3 text-sm max-w-md" style={{ color: "#3D5A50" }}>
            {t("process.subheading")}
          </p>
        </div>

        {/* Steps: mobilde sola hizalı ince zaman çizelgesi, masaüstünde 4 sütun */}
        <ol className="relative grid md:grid-cols-4 gap-5 md:gap-6">
          {/* Mobil dikey çizgi */}
          <span
            className="md:hidden absolute left-[17px] top-3 bottom-3 w-px"
            style={{ backgroundColor: "#C5A880", opacity: 0.35 }}
            aria-hidden="true"
          />
          {/* Masaüstü yatay çizgi */}
          <span
            className="hidden md:block absolute top-6 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px"
            style={{ backgroundColor: "#C5A880", opacity: 0.3 }}
            aria-hidden="true"
          />
          {steps.map((step, index) => (
            <li key={step.number} className="relative flex gap-4 md:flex-col md:items-center md:text-center md:gap-0">
              <span
                className="relative z-10 flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full border-2 md:mb-4 flex-shrink-0"
                style={{
                  borderColor: "#C5A880",
                  backgroundColor: index === 0 ? "#14342B" : "#F4EDE4",
                }}
              >
                <span
                  className="text-sm md:text-lg font-bold"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: index === 0 ? "#C5A880" : "#14342B",
                  }}
                >
                  {step.number}
                </span>
              </span>
              <div className="pt-1.5 md:pt-0">
                <h3
                  className="text-base font-bold mb-1"
                  style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#3D5A50" }}>
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Note */}
        <div
          className="mt-7 md:mt-10 p-4 rounded-lg border flex gap-3"
          style={{ borderColor: "#C5A880", backgroundColor: "rgba(197,168,128,0.08)" }}
        >
          <div
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mt-0.5"
            style={{ backgroundColor: "#14342B" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          </div>
          <p className="text-sm" style={{ color: "#3D5A50" }}>
            <span className="font-semibold" style={{ color: "#14342B" }}>{t("process.noteLabel")}</span>{" "}
            {t("process.noteText")}
          </p>
        </div>
      </div>
    </section>
  );
}
