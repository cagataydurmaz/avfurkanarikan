"use client";

import Link from "next/link";
import ContactForm from "./ContactForm";
import MapEmbed from "./MapEmbed";
import TrackedLink from "./TrackedLink";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="iletisim" className="py-10 md:py-16" style={{ backgroundColor: "#14342B" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 md:mb-10">
          <div>
            <span
              className="inline-block text-xs tracking-widest uppercase font-semibold px-3 py-1 rounded-full mb-4"
              style={{ color: "#14342B", backgroundColor: "#C5A880" }}
            >
              {t("contact.label")}
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold max-w-sm"
              style={{
                color: "#F4EDE4",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              {t("contact.heading")}
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm max-w-xs" style={{ color: "rgba(244,237,228,0.65)" }}>
            {t("contact.subheading")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-start">
          {/* Contact form - primary */}
          <div
            className="lg:col-span-3 p-5 md:p-7 rounded-2xl border"
            style={{ borderColor: "rgba(197,168,128,0.25)", backgroundColor: "rgba(255,255,255,0.03)" }}
          >
            <p
              className="text-base font-semibold mb-4"
              style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {t("contact.formTitle")}
            </p>
            <ContactForm />
          </div>

          {/* Map + info - secondary */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div
              className="rounded-lg overflow-hidden border h-[170px] md:h-[200px]"
              style={{ borderColor: "rgba(197,168,128,0.25)" }}
            >
              <MapEmbed />
            </div>

            {/* Adres, saat, telefon, e-posta: tek kompakt liste */}
            <ul
              className="rounded-lg border divide-y divide-[rgba(197,168,128,0.18)]"
              style={{ borderColor: "rgba(197,168,128,0.25)", backgroundColor: "rgba(255,255,255,0.04)" }}
            >
              <InfoRow icon={<LocationIcon />} label={t("contact.address")}>
                Sinanpaşa Mh. Şht. Asım Cd. No:37/12, Beşiktaş/İstanbul
              </InfoRow>
              <InfoRow icon={<ClockIcon />} label={t("contact.hours")}>
                {t("contact.hoursLine1")}
                <br />
                {t("contact.hoursLine2")}
              </InfoRow>
              <li>
                <TrackedLink channel="phone" label="contact-section" href="tel:+905354874099" className="contact-row-link">
                  <PhoneIcon />
                  <span className="sr-only">{t("contact.phone")}: </span>
                  <span className="text-base font-medium" style={{ color: "#F4EDE4" }}>+90 535 487 40 99</span>
                </TrackedLink>
              </li>
              <li>
                <TrackedLink channel="email" label="contact-section" href="mailto:av.furkanarikan1@gmail.com" className="contact-row-link">
                  <EmailIcon />
                  <span className="sr-only">{t("contact.email")}: </span>
                  <span className="text-sm font-medium break-all" style={{ color: "#F4EDE4" }}>av.furkanarikan1@gmail.com</span>
                </TrackedLink>
              </li>
            </ul>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=41.0444231,29.0044619"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg border transition-colors duration-300 hover:bg-[#C5A880] hover:text-[#14342B]"
              style={{ color: "#C5A880", borderColor: "rgba(197,168,128,0.5)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              {t("contact.directions")}
            </a>

            {t("contact.langNote") && (
              <p className="text-xs leading-relaxed font-semibold" style={{ color: "#C5A880" }}>
                {t("contact.langNote")}
              </p>
            )}
            <p className="text-xs leading-relaxed" style={{ color: "rgba(244,237,228,0.6)" }}>
              {t("contact.fraudNote")}{" "}
              <Link href="/dolandiricilik-uyarisi" className="underline">
                {t("footer.fraud")}
              </Link>
              {" · "}
              <Link href="/besiktas-avukat" className="underline">
                {t("contact.besiktasPage")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 px-4 py-3">
      <span className="mt-0.5 flex-shrink-0">{icon}</span>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: "#C5A880" }}>
          {label}
        </p>
        <p className="text-sm mt-0.5" style={{ color: "rgba(244,237,228,0.8)" }}>
          {children}
        </p>
      </div>
    </li>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.5h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
