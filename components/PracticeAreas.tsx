"use client";

import { useState } from "react";
import Link from "next/link";
import {
  GavelIcon,
  BriefcaseIcon,
  HomeIcon,
  ScrollIcon,
  ScalesIcon,
  FamilyIcon,
  PercentIcon,
  BanknoteIcon,
  LandmarkIcon,
  ShieldCheckIcon,
  AgreementIcon,
  GlobeIcon,
} from "./PracticeIcons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { areaBullets } from "@/lib/i18n/practiceAreasI18n";

const areas = [
  {
    slug: "ceza-hukuku",
    icon: <GavelIcon />,
    title: "Ceza Hukuku",
    bullets: [
      "Soruşturma ve kovuşturmada müdafilik",
      "Tutukluluk itirazı ve adli kontrol",
      "Gözaltı ve ifade sürecinde hukuki destek",
      "Haksız tutuklama nedeniyle tazminat davası",
    ],
  },
  {
    slug: "is-hukuku",
    icon: <BriefcaseIcon />,
    title: "İş Hukuku",
    bullets: [
      "Kıdem ve ihbar tazminatı davası",
      "İşe iade davası",
      "Fazla mesai ve işçilik alacakları",
      "Haksız/geçersiz fesih itirazı",
    ],
  },
  {
    slug: "gayrimenkul-hukuku",
    icon: <HomeIcon />,
    title: "Gayrimenkul Hukuku",
    bullets: [
      "Tapu iptal ve tescil davası",
      "Kira tespit ve tahliye davası",
      "Kat mülkiyeti ve ortak alan uyuşmazlığı",
      "Muris muvazaası nedeniyle tapu iptali",
    ],
  },
  {
    slug: "miras-hukuku",
    icon: <ScrollIcon />,
    title: "Miras Hukuku",
    bullets: [
      "Tenkis davası (saklı pay ihlali)",
      "Vasiyetname iptali davası",
      "Mirasın reddi başvurusu",
      "Miras taksimi ve ortaklığın giderilmesi",
    ],
  },
  {
    slug: "borclar-hukuku",
    icon: <ScalesIcon />,
    title: "Borçlar Hukuku",
    bullets: [
      "Alacak davası ve icra takibi",
      "Sözleşmeye aykırılık nedeniyle tazminat",
      "Sebepsiz zenginleşme davası",
      "İtirazın iptali davası",
    ],
  },
  {
    slug: "aile-hukuku",
    icon: <FamilyIcon />,
    title: "Aile Hukuku",
    bullets: [
      "Anlaşmalı ve çekişmeli boşanma",
      "Velayet ve kişisel ilişki düzenlemesi",
      "Nafaka davası",
      "Mal rejimi tasfiyesi davası",
    ],
  },
  {
    slug: "vergi-hukuku",
    icon: <PercentIcon />,
    title: "Vergi Hukuku",
    bullets: [
      "Vergi/ceza ihbarnamesine karşı dava",
      "Tarhiyat öncesi/sonrası uzlaşma",
      "Vergi incelemesi sürecinde danışmanlık",
      "Vergi mahkemesinde iptal davası",
    ],
  },
  {
    slug: "icra-iflas-hukuku",
    icon: <BanknoteIcon />,
    title: "İcra ve İflas Hukuku",
    bullets: [
      "İlamsız icra takibi başlatma",
      "Ödeme emrine itiraz",
      "İtirazın iptali/kaldırılması davası",
      "Konkordato başvurusu",
    ],
  },
  {
    slug: "idare-hukuku",
    icon: <LandmarkIcon />,
    title: "İdare Hukuku",
    bullets: [
      "İdari işlemin iptali davası",
      "Tam yargı (tazminat) davası",
      "Yürütmenin durdurulması talebi",
      "Disiplin cezasına itiraz",
    ],
  },
  {
    slug: "tazminat-hukuku",
    icon: <ShieldCheckIcon />,
    title: "Tazminat Hukuku",
    bullets: [
      "Trafik kazası tazminatı davası",
      "Manevi tazminat davası",
      "Destekten yoksun kalma tazminatı",
      "Araç değer kaybı talebi",
    ],
  },
  {
    slug: "tahkim-arabuluculuk",
    icon: <AgreementIcon />,
    title: "Tahkim ve Arabuluculuk",
    bullets: [
      "Zorunlu arabuluculuk süreci",
      "Ticari uyuşmazlıklarda tahkim",
      "Milletlerarası tahkim (yabancılık unsurlu)",
      "Hakem kararına karşı iptal davası",
    ],
  },
  {
    slug: "yabancilar-hukuku",
    icon: <GlobeIcon />,
    title: "Yabancılar ve Vatandaşlık Hukuku",
    bullets: [
      "İkamet izni başvurusu ve uzatma",
      "Çalışma izni süreci",
      "Yatırım yoluyla Türk vatandaşlığı",
      "Sınır dışı etme kararına itiraz",
    ],
  },
];

const INITIAL_COUNT = 6;

export default function PracticeAreas() {
  const [showAll, setShowAll] = useState(false);
  const { lang, t } = useLanguage();
  const localizedAreas =
    lang === "tr"
      ? areas
      : areas.map((area) => ({
          ...area,
          title: areaBullets(lang, area.slug)?.title ?? area.title,
          bullets: areaBullets(lang, area.slug)?.bullets ?? area.bullets,
        }));
  const visibleAreas = showAll ? localizedAreas : localizedAreas.slice(0, INITIAL_COUNT);

  return (
    <section
      id="calisma-alanlari"
      className="py-10 md:py-16"
      style={{ backgroundColor: "#14342B" }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
            {t("practiceAreas.label")}
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 md:mb-10" data-reveal>
          <h2
            className="text-3xl md:text-4xl font-bold max-w-md"
            style={{
              color: "#F4EDE4",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            {t("practiceAreas.heading")}
          </h2>
          <p className="mt-3 md:mt-0 text-sm max-w-xs" style={{ color: "rgba(244,237,228,0.6)" }}>
            {t("practiceAreas.subheading")}
          </p>
        </div>

        {/* Mobil: açılır satırlar (tüm alanlar; maddeler sayfada kalır, dokununca açılır) */}
        <div className="md:hidden border-t" style={{ borderColor: "rgba(197,168,128,0.2)" }}>
          {localizedAreas.map((area, i) => (
            <details
              key={area.slug}
              data-reveal
              className="practice-row group border-b"
              style={{ borderColor: "rgba(197,168,128,0.2)", ["--d" as string]: `${Math.min(i, 6) * 50}ms` }}
            >
              <summary className="flex items-center gap-3 py-3.5 cursor-pointer list-none">
                <span
                  className="w-8 h-8 flex items-center justify-center rounded flex-shrink-0 practice-row-icon"
                  style={{ backgroundColor: "rgba(197,168,128,0.12)" }}
                >
                  {area.icon}
                </span>
                <span
                  className="flex-1 text-base font-semibold"
                  style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {area.title}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C5A880"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <div className="pl-11 pb-4 -mt-0.5">
                <ul className="space-y-1.5">
                  {area.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm leading-snug" style={{ color: "rgba(244,237,228,0.7)" }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/calisma-alanlari/${area.slug}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold"
                  style={{ color: "#C5A880" }}
                >
                  {t("practiceAreas.readMore")}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </details>
          ))}
        </div>

        {/* Masaüstü: sade kartlar */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleAreas.map((area, i) => (
            <Link
              key={area.slug}
              data-reveal
              href={`/calisma-alanlari/${area.slug}`}
              className="practice-card p-5 rounded-lg border flex flex-col group"
              style={{ backgroundColor: "#1B3A2F", ["--d" as string]: `${(i % 6) * 70}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded flex-shrink-0 practice-row-icon"
                  style={{ backgroundColor: "rgba(197,168,128,0.12)" }}
                >
                  {area.icon}
                </div>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {area.title}
                </h3>
              </div>

              <ul className="flex-1 space-y-1.5">
                {area.bullets.slice(0, 2).map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm leading-snug" style={{ color: "rgba(244,237,228,0.7)" }}>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C5A880"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <span
                className="mt-3 text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 group-hover:gap-2.5"
                style={{ color: "#C5A880" }}
              >
                {t("practiceAreas.readMore")}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Show all toggle (masaüstü) */}
        {!showAll && (
          <div className="hidden md:flex mt-7 justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border transition-all duration-300 text-[#C5A880] border-[#C5A880] hover:bg-[#C5A880] hover:text-[#14342B]"
            >
              {t("practiceAreas.showAll")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        )}

        {/* Bottom note */}
        <p className="mt-7 md:mt-8 text-sm text-center" style={{ color: "rgba(197,168,128,0.7)" }}>
          {t("practiceAreas.note")}
        </p>
      </div>
    </section>
  );
}
