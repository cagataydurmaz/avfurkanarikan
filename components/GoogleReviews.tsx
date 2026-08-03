"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { googleReviews, GOOGLE_REVIEWS_URL } from "@/lib/googleReviews";

export default function GoogleReviews() {
  const { lang, t } = useLanguage();

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
            {t("reviews.label")}
          </span>
        </div>

        <div className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold max-w-sm"
            style={{
              color: "#14342B",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            {t("reviews.heading")}
          </h2>
          <div className="mt-4 flex items-center gap-2">
            <span aria-hidden="true" style={{ color: "#C5A880", letterSpacing: "1px" }}>
              ★★★★★
            </span>
            <span className="text-sm font-semibold" style={{ color: "#14342B" }}>
              5,0
            </span>
            <span className="text-sm" style={{ color: "#3D5A50" }}>
              · {t("reviews.count")}
            </span>
          </div>
        </div>

        {/* Cards - single-row auto-scrolling ticker */}
        <div
          className="reviews-ticker-wrap"
          style={{
            marginInline: "calc(50% - 50vw)",
            maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="reviews-ticker-track">
            {[...googleReviews, ...googleReviews].map((review, i) => (
              <div
                key={`${review.name}-${i}`}
                className="flex flex-col rounded-xl p-6 border flex-shrink-0"
                style={{ borderColor: "#EBE0D4", backgroundColor: "#F4EDE4", width: "320px" }}
                aria-hidden={i >= googleReviews.length ? true : undefined}
              >
                <GoogleIcon />
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "#2D4A3E" }}>
                  &ldquo;{lang === "en" ? review.en : review.tr}&rdquo;
                </p>
                <p className="mt-4 text-xs font-semibold" style={{ color: "#14342B" }}>
                  — {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border transition-all duration-300 hover:bg-[#14342B] hover:text-[#F4EDE4]"
            style={{ color: "#14342B", borderColor: "#14342B" }}
          >
            <GoogleIcon />
            {t("reviews.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}
