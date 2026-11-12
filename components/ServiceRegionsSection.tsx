import Link from "next/link";
import ServiceRegions from "./ServiceRegions";

export default function ServiceRegionsSection() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: "#F4EDE4" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
            Hizmet Bölgeleri
          </span>
        </div>
        <p className="text-sm max-w-2xl leading-relaxed mb-8" style={{ color: "#3D5A50" }}>
          Büro Beşiktaş Sinanpaşa&apos;dadır; İstanbul genelindeki müvekkillere hizmet verilir.
        </p>
        <ServiceRegions />
        <div className="mt-6">
          <Link href="/ilceler" className="text-sm underline" style={{ color: "#14342B" }}>
            Tüm ilçeler
          </Link>
        </div>
      </div>
    </section>
  );
}
