import Link from "next/link";
import { practiceAreas } from "@/lib/practiceAreas";

export default function PracticeAreasTicker() {
  const items = [...practiceAreas, ...practiceAreas];

  return (
    <div
      className="ticker-wrap"
      style={{ background: "linear-gradient(90deg, #C5A880 0%, #A8875E 50%, #C5A880 100%)" }}
    >
      <div className="ticker-track">
        {items.map((area, i) => (
          <span key={`${area.slug}-${i}`} className="inline-flex items-center">
            <Link
              href={`/calisma-alanlari/${area.slug}`}
              className="text-xs font-semibold tracking-widest uppercase transition-colors hover:opacity-70"
              style={{ color: "#14342B" }}
              aria-hidden={i >= practiceAreas.length ? true : undefined}
              tabIndex={i >= practiceAreas.length ? -1 : undefined}
            >
              {area.title}
            </Link>
            <span className="mx-8" aria-hidden="true" style={{ color: "#14342B", opacity: 0.45 }}>
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
