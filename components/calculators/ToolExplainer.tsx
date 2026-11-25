import type { ReactNode } from "react";

export type ToolExplainerSection = {
  heading: string;
  body: ReactNode;
};

/** Açıklama metinlerindeki örnek tutarlar için TL biçimlendirme (ör. 1.234,50 TL). */
export function formatTL(n: number, fractionDigits = 2): string {
  return (
    n.toLocaleString("tr-TR", {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    }) + " TL"
  );
}

/** Oranı yüzde olarak biçimlendirir (ör. 0.0455 → "%4,55"). */
export function formatYuzde(oran: number): string {
  return "%" + (oran * 100).toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/**
 * Hesaplama araçlarının altında yer alan "nasıl hesaplanır / hangi bilgiler gerekir /
 * dikkat edilmesi gerekenler" açıklama bölümü. İçerik her sayfada ayrı yazılır; bu bileşen
 * yalnızca ortak görünümü sağlar.
 */
export default function ToolExplainer({
  title,
  sections,
}: {
  title: string;
  sections: ToolExplainerSection[];
}) {
  return (
    <section className="mt-10 pt-8" style={{ borderTop: "1px solid #EBE0D4" }}>
      <h2
        className="text-lg font-bold mb-5"
        style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        {title}
      </h2>
      <div className="space-y-6">
        {sections.map((s) => (
          <div key={s.heading}>
            <h3
              className="text-xs tracking-widest uppercase font-semibold mb-2"
              style={{ color: "#7f5c2c" }}
            >
              {s.heading}
            </h3>
            <div
              className="text-sm leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5"
              style={{ color: "#3D5A50" }}
            >
              {s.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
