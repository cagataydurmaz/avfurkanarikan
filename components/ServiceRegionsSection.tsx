import Link from "next/link";
import ServiceRegions from "./ServiceRegions";

export default function ServiceRegionsSection() {
  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: "#F4EDE4" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
            Hizmet Bölgeleri
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
          Başlıca Hizmet Bölgeleri
        </h2>
        <p className="text-sm max-w-2xl leading-relaxed mb-10" style={{ color: "#3D5A50" }}>
          Büro Beşiktaş Sinanpaşa&apos;dadır. Aşağıdaki ilçelerde dosyaların görüldüğü adliyeler ve
          sık karşılaşılan uyuşmazlıklar hakkında ayrıntılı bilgi sayfaları bulunur.
        </p>
        <ServiceRegions showServices />
        <div className="mt-8">
          <Link href="/ilceler" className="text-sm font-medium underline" style={{ color: "#14342B" }}>
            Tüm ilçeleri görün
          </Link>
        </div>
      </div>
    </section>
  );
}
