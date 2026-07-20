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
  const visibleAreas = showAll ? areas : areas.slice(0, INITIAL_COUNT);

  return (
    <section
      id="calisma-alanlari"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#14342B" }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
            Çalışma Alanları
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold max-w-md"
            style={{
              color: "#F4EDE4",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            Hukuki Destek Sunduğumuz Alanlar
          </h2>
          <p className="mt-4 md:mt-0 text-sm max-w-xs" style={{ color: "rgba(244,237,228,0.6)" }}>
            Her hukuki süreç farklı bir yaklaşım gerektirir. Dosyanızın ihtiyacına göre destek sağlıyoruz.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleAreas.map((area) => (
            <Link
              key={area.title}
              href={`/calisma-alanlari/${area.slug}`}
              className="practice-card p-6 rounded-lg border flex flex-col group"
              style={{ backgroundColor: "#1B3A2F" }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 flex items-center justify-center rounded mb-4"
                style={{ backgroundColor: "rgba(197,168,128,0.12)" }}
              >
                {area.icon}
              </div>

              {/* Title */}
              <h3
                className="text-lg font-semibold mb-2.5"
                style={{
                  color: "#F4EDE4",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                {area.title}
              </h3>

              {/* Bullets */}
              <ul className="flex-1 space-y-2 mb-1">
                {area.bullets.map((bullet) => (
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

              {/* Read more */}
              <span
                className="mt-4 text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 group-hover:gap-2.5"
                style={{ color: "#C5A880" }}
              >
                Detaylı Bilgi
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Show all toggle */}
        {!showAll && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border transition-all duration-300 hover:bg-[#C5A880] hover:text-[#14342B]"
              style={{ color: "#C5A880", borderColor: "#C5A880" }}
            >
              Tüm Çalışma Alanlarını Gör
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        )}

        {/* Bottom note */}
        <p className="mt-10 text-sm text-center" style={{ color: "rgba(197,168,128,0.7)" }}>
          Yukarıda yer almayan konularda da danışmanlık talep edebilirsiniz.
        </p>
      </div>
    </section>
  );
}
