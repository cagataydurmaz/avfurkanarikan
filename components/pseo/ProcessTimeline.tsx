"use client";

import { useEffect, useRef, useState } from "react";

type Step = { title: string; text: string };

// Adımlar sunucuda tam metinle render edilir; JS yalnızca kaydırınca beliren görünümü ekler.
export default function ProcessTimeline({ title, steps }: { title: string; steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const [armed, setArmed] = useState(false);
  const [seen, setSeen] = useState<number>(-1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setSeen(steps.length);
      return;
    }
    setArmed(true);
    const items = Array.from(el.querySelectorAll<HTMLElement>("[data-step]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.step);
            setSeen((s) => Math.max(s, i));
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.2 },
    );
    items.forEach((it) => io.observe(it));
    return () => io.disconnect();
  }, [steps.length]);

  const progress = steps.length > 1 ? Math.min(Math.max(seen, 0) / (steps.length - 1), 1) : 1;

  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: "#14342B" }} aria-labelledby="timeline-title">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <p className="text-xs tracking-widest uppercase font-semibold text-center mb-3" style={{ color: "#C5A880" }}>
          Adım adım
        </p>
        <h2
          id="timeline-title"
          className="text-2xl md:text-3xl font-bold mb-10 text-center"
          style={{ color: "#F4EDE4", fontFamily: "var(--font-heading), Georgia, serif" }}
        >
          {title}
        </h2>
        <ol ref={ref} className="relative">
          {/* Dikey çizgi ve dolan ilerleme */}
          <span aria-hidden="true" className="absolute left-[19px] top-2 bottom-2 w-px" style={{ backgroundColor: "rgba(197,168,128,0.2)" }} />
          <span
            aria-hidden="true"
            className="absolute left-[19px] top-2 w-px timeline-fill"
            style={{ backgroundColor: "#C5A880", height: armed ? `calc((100% - 1rem) * ${progress})` : "calc(100% - 1rem)" }}
          />
          {steps.map((s, i) => {
            const visible = !armed || seen >= i;
            return (
              <li
                key={s.title}
                data-step={i}
                className="relative pl-14 pb-8 last:pb-0 timeline-item"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(14px)",
                }}
              >
                <span
                  className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 timeline-dot"
                  style={{
                    borderColor: "#C5A880",
                    backgroundColor: visible ? "#C5A880" : "#14342B",
                    color: visible ? "#14342B" : "#C5A880",
                    fontFamily: "var(--font-heading), Georgia, serif",
                  }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3 className="text-base font-semibold pt-2 mb-1" style={{ color: "#F4EDE4" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(244,237,228,0.7)" }}>
                  {s.text}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
