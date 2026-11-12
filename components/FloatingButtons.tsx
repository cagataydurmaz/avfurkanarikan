"use client";

import { useEffect, useState } from "react";
import TrackedLink from "./TrackedLink";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const HINT_KEY = "fa_wa_hint_seen";
const HINT_DELAY_MS = 500;
const HINT_VISIBLE_MS = 5000;

/** İlk ziyarette WhatsApp butonunun üstünde kısa süre görünen bilgi baloncuğu. */
function WhatsAppHint() {
  const { lang } = useLanguage();
  // idle: DOM'da yok · in: görünür · out: soluyor · done: kaldırıldı
  const [phase, setPhase] = useState<"idle" | "in" | "out" | "done">("idle");

  useEffect(() => {
    try {
      if (window.localStorage.getItem(HINT_KEY)) return;
    } catch {
      // depolama kapalıysa baloncuk yine gösterilir
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    const hide = () => {
      setPhase((p) => (p === "in" ? "out" : p));
      timers.push(setTimeout(() => setPhase("done"), 500));
    };
    timers.push(
      setTimeout(() => {
        setPhase("in");
        try {
          window.localStorage.setItem(HINT_KEY, "1");
        } catch {}
        timers.push(setTimeout(hide, HINT_VISIBLE_MS));
        window.addEventListener("scroll", hide, { once: true, passive: true });
        window.addEventListener("pointerdown", hide, { once: true });
      }, HINT_DELAY_MS),
    );
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("scroll", hide);
      window.removeEventListener("pointerdown", hide);
    };
  }, []);

  if (phase === "idle" || phase === "done") return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed right-5 bottom-[5.25rem] z-50 max-w-[220px] px-4 py-2.5 rounded-xl border text-sm leading-snug shadow-md pointer-events-none motion-safe:animate-[hintIn_400ms_ease-out] transition-opacity duration-500 motion-reduce:transition-none ${
        phase === "out" ? "opacity-0" : "opacity-100"
      }`}
      style={{ backgroundColor: "#fff", color: "#14342B", borderColor: "#D9CBB8" }}
    >
      {lang === "en" ? "You can send your question on WhatsApp" : "Sorunuzu WhatsApp\u2019tan yazabilirsiniz"}
      <span
        aria-hidden="true"
        className="absolute -bottom-[7px] right-8 w-3 h-3 rotate-45 border-r border-b"
        style={{ backgroundColor: "#fff", borderColor: "#D9CBB8" }}
      />
    </div>
  );
}

export default function FloatingButtons() {
  const { t } = useLanguage();
  return (
    <>
      <WhatsAppHint />
      {/* WhatsApp - bottom right */}
      <TrackedLink
        channel="whatsapp"
        label="floating"
        href="https://wa.me/905354874099?text=Merhaba%2C%20hukuki%20danışmanlık%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ backgroundColor: "#25D366", color: "#fff" }}
        aria-label="WhatsApp ile iletişime geçin"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
        <span className="text-sm font-semibold hidden sm:inline">{t("floating.whatsapp")}</span>
      </TrackedLink>

      {/* Phone - bottom left */}
      <TrackedLink
        channel="phone"
        label="floating"
        href="tel:+905354874099"
        className="fixed bottom-6 left-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ backgroundColor: "#14342B", color: "#C5A880", border: "1px solid #C5A880" }}
        aria-label="Telefon ile arayın"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.5h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span className="text-sm font-semibold hidden sm:inline">{t("floating.call")}</span>
      </TrackedLink>
    </>
  );
}
