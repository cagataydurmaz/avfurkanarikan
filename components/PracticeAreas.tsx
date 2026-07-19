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
    description:
      "Soruşturma ve kovuşturma aşamalarında müdafilik, ifade ve sorgu süreçlerinde hukuki destek, tutukluluk itirazları ve dava takibi.",
  },
  {
    slug: "is-hukuku",
    icon: <BriefcaseIcon />,
    title: "İş Hukuku",
    description:
      "İşçi-işveren uyuşmazlıklarında dava takibi; kıdem, ihbar ve işe iade taleplerinde temsil; iş sözleşmesi düzenlenmesi.",
  },
  {
    slug: "gayrimenkul-hukuku",
    icon: <HomeIcon />,
    title: "Gayrimenkul Hukuku",
    description:
      "Tapu iptal ve tescil davaları, kira uyuşmazlıkları, tahliye süreçleri ve gayrimenkul alım-satım sözleşmeleri.",
  },
  {
    slug: "miras-hukuku",
    icon: <ScrollIcon />,
    title: "Miras Hukuku",
    description:
      "Miras paylaşımı, vasiyetname düzenlenmesi ve itirazı, tenkis davaları ve mirasçılık belgesi işlemleri.",
  },
  {
    slug: "borclar-hukuku",
    icon: <ScalesIcon />,
    title: "Borçlar Hukuku",
    description:
      "Sözleşme uyuşmazlıkları, alacak ve tazminat davaları, icra takip süreçlerinde hukuki temsil.",
  },
  {
    slug: "aile-hukuku",
    icon: <FamilyIcon />,
    title: "Aile Hukuku",
    description:
      "Boşanma davaları, velayetin düzenlenmesi, nafaka, mal rejimi tasfiyesi ve aile hukuku danışmanlığı.",
  },
  {
    slug: "vergi-hukuku",
    icon: <PercentIcon />,
    title: "Vergi Hukuku",
    description:
      "Vergi incelemesi, tarhiyat öncesi/sonrası uzlaşma ve vergi/ceza ihbarnamesine karşı dava süreçlerinde destek.",
  },
  {
    slug: "icra-iflas-hukuku",
    icon: <BanknoteIcon />,
    title: "İcra ve İflas Hukuku",
    description:
      "İlamlı/ilamsız icra takibi, ödeme emrine itiraz, haciz süreci ve konkordato başvurularında temsil.",
  },
  {
    slug: "idare-hukuku",
    icon: <LandmarkIcon />,
    title: "İdare Hukuku",
    description:
      "İdari işlemin iptali, tam yargı davası ve yürütmenin durdurulması taleplerinde idare mahkemelerinde temsil.",
  },
  {
    slug: "tazminat-hukuku",
    icon: <ShieldCheckIcon />,
    title: "Tazminat Hukuku",
    description:
      "Trafik kazası, iş kazası ve haksız fiilden doğan maddi-manevi tazminat davalarında hukuki destek.",
  },
  {
    slug: "tahkim-arabuluculuk",
    icon: <AgreementIcon />,
    title: "Tahkim ve Arabuluculuk",
    description:
      "Zorunlu ve ihtiyari arabuluculuk süreçleri ile iç ve milletlerarası tahkimde danışmanlık ve temsil.",
  },
  {
    slug: "yabancilar-hukuku",
    icon: <GlobeIcon />,
    title: "Yabancılar ve Vatandaşlık Hukuku",
    description:
      "Oturma/çalışma izni, yatırım yoluyla Türk vatandaşlığı ve gayrimenkul edinimi süreçlerinde destek.",
  },
];

export default function PracticeAreas() {
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
          {areas.map((area) => (
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

              {/* Description */}
              <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(244,237,228,0.65)" }}>
                {area.description}
              </p>

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

        {/* Bottom note */}
        <p className="mt-10 text-sm text-center" style={{ color: "rgba(197,168,128,0.7)" }}>
          Yukarıda yer almayan konularda da danışmanlık talep edebilirsiniz.
        </p>
      </div>
    </section>
  );
}
