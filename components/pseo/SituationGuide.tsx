"use client";

import { useState } from "react";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import TrackedLink from "@/components/TrackedLink";
import { fill, type GuideResult, type GuideStep } from "@/lib/pseo/guides";

type Props = {
  title: string;
  intro: string;
  start: string;
  steps: Record<string, GuideStep>;
  district: { slug: string; name: string; locative: string; courthouse: string };
  serviceSlug: string;
};

const WA = "https://wa.me/905354874099?text=";

export default function SituationGuide({ title, intro, start, steps, district, serviceSlug }: Props) {
  const [path, setPath] = useState<string[]>([start]);
  const [result, setResult] = useState<GuideResult | null>(null);
  const [anim, setAnim] = useState(0);

  const current = steps[path[path.length - 1]];
  // Son soru sonucu açar; ilerleme çubuğu sonuçta dolar.
  const progress = result ? 1 : path.length / (path.length + 1);

  function choose(label: string, next?: string, res?: GuideResult) {
    sendGAEvent("event", "guide_answer", { page: `${district.slug}-${serviceSlug}`, answer: label });
    if (res) setResult(res);
    else if (next) setPath((p) => [...p, next]);
    setAnim((n) => n + 1);
  }

  function back() {
    if (result) setResult(null);
    else setPath((p) => (p.length > 1 ? p.slice(0, -1) : p));
    setAnim((n) => n + 1);
  }

  function reset() {
    setResult(null);
    setPath([start]);
    setAnim((n) => n + 1);
  }

  const message = result
    ? `Merhaba, ${fill(result.message, district)} Sitenizdeki değerlendirme bölümünden yazıyorum.`
    : "";

  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: "#F4EDE4" }} aria-labelledby="guide-title">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <p className="text-xs tracking-widest uppercase font-semibold text-center mb-3" style={{ color: "#9C7F57" }}>
          Kısa değerlendirme
        </p>
        <h2
          id="guide-title"
          className="text-2xl md:text-3xl font-bold mb-3 text-center"
          style={{ color: "#14342B", fontFamily: "var(--font-heading), Georgia, serif" }}
        >
          {title}
        </h2>
        <p className="text-sm text-center max-w-xl mx-auto mb-8" style={{ color: "#3D5A50" }}>
          {intro}
        </p>

        <div
          className="rounded-2xl border shadow-sm overflow-hidden"
          style={{ backgroundColor: "#fff", borderColor: "rgba(197,168,128,0.45)" }}
        >
          {/* İlerleme */}
          <div className="flex items-center gap-3 px-5 md:px-7 pt-5">
            <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "#EBE0D4" }}>
              <div
                className="h-full rounded-full guide-progress"
                style={{ width: `${progress * 100}%`, backgroundColor: "#C5A880" }}
              />
            </div>
            <span className="text-xs font-medium tabular-nums" style={{ color: "#7A9089" }}>
              {result ? "Özet" : `Soru ${path.length}`}
            </span>
          </div>

          <div key={anim} className="guide-step px-5 md:px-7 py-6 md:py-7" aria-live="polite">
            {!result && current && (
              <>
                <p className="text-lg font-semibold mb-5" style={{ color: "#14342B" }}>
                  {current.question}
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {current.options.map((o) => (
                    <button
                      key={o.label}
                      type="button"
                      onClick={() => choose(o.label, o.next, o.result)}
                      className="guide-option group text-left rounded-xl border px-4 py-3.5 text-sm font-medium flex items-center justify-between gap-3"
                    >
                      <span>{o.label}</span>
                      <span aria-hidden="true" className="guide-arrow">→</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {result && (
              <div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "#14342B", fontFamily: "var(--font-heading), Georgia, serif" }}
                >
                  {result.title}
                </h3>
                <ul className="space-y-3 mb-5">
                  {result.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 guide-point" style={{ animationDelay: `${i * 90}ms` }}>
                      <span
                        className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold"
                        style={{ backgroundColor: "#14342B", color: "#C5A880" }}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed" style={{ color: "#2D4A3E" }}>
                        {fill(pt, district)}
                      </span>
                    </li>
                  ))}
                </ul>
                {result.link && (
                  <Link
                    href={result.link.href}
                    className="inline-block text-sm font-semibold underline underline-offset-4 mb-5"
                    style={{ color: "#14342B" }}
                  >
                    {result.link.label} →
                  </Link>
                )}

                <div className="rounded-xl p-4 md:p-5" style={{ backgroundColor: "#14342B" }}>
                  <p className="text-sm mb-1 font-semibold" style={{ color: "#F4EDE4" }}>
                    Durumunuzu WhatsApp&apos;tan iletin
                  </p>
                  <p className="text-xs mb-4" style={{ color: "rgba(244,237,228,0.6)" }}>
                    Mesajınız hazır; göndermeden önce dilediğiniz gibi düzenleyebilirsiniz.
                  </p>
                  <p
                    className="text-sm rounded-lg px-3 py-2.5 mb-4 italic"
                    style={{ backgroundColor: "rgba(244,237,228,0.08)", color: "rgba(244,237,228,0.85)" }}
                  >
                    “{message}”
                  </p>
                  <TrackedLink
                    channel="whatsapp"
                    label={`${district.slug}-${serviceSlug}-guide`}
                    href={WA + encodeURIComponent(message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold"
                    style={{ backgroundColor: "#C5A880", color: "#14342B" }}
                  >
                    WhatsApp ile Gönder
                  </TrackedLink>
                </div>
                <p className="mt-4 text-xs" style={{ color: "#7A9089" }}>
                  Bu özet genel bilgilendirme amaçlıdır; somut durumunuz belgelerle birlikte değerlendirilmelidir.
                </p>
              </div>
            )}
          </div>

          {(path.length > 1 || result) && (
            <div className="flex items-center justify-between px-5 md:px-7 pb-5 -mt-1">
              <button type="button" onClick={back} className="text-xs font-medium underline underline-offset-4" style={{ color: "#3D5A50" }}>
                ← Geri
              </button>
              <button type="button" onClick={reset} className="text-xs font-medium underline underline-offset-4" style={{ color: "#3D5A50" }}>
                Baştan başla
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
