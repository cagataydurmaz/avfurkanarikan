const areas = [
  {
    icon: <GavelIcon />,
    title: "Ceza Hukuku",
    description:
      "Soruşturma ve kovuşturma aşamalarında müdafilik, ifade ve sorgu süreçlerinde hukuki destek, tutukluluk itirazları ve dava takibi.",
  },
  {
    icon: <BriefcaseIcon />,
    title: "İş Hukuku",
    description:
      "İşçi-işveren uyuşmazlıklarında dava takibi; kıdem, ihbar ve işe iade taleplerinde temsil; iş sözleşmesi düzenlenmesi.",
  },
  {
    icon: <HomeIcon />,
    title: "Gayrimenkul Hukuku",
    description:
      "Tapu iptal ve tescil davaları, kira uyuşmazlıkları, tahliye süreçleri ve gayrimenkul alım-satım sözleşmeleri.",
  },
  {
    icon: <ScrollIcon />,
    title: "Miras Hukuku",
    description:
      "Miras paylaşımı, vasiyetname düzenlenmesi ve itirazı, tenkis davaları ve mirasçılık belgesi işlemleri.",
  },
  {
    icon: <ScalesIcon />,
    title: "Borçlar Hukuku",
    description:
      "Sözleşme uyuşmazlıkları, alacak ve tazminat davaları, icra takip süreçlerinde hukuki temsil.",
  },
  {
    icon: <FamilyIcon />,
    title: "Aile Hukuku",
    description:
      "Boşanma davaları, velayetin düzenlenmesi, nafaka, mal rejimi tasfiyesi ve aile hukuku danışmanlığı.",
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
            <div
              key={area.title}
              className="practice-card p-6 rounded-lg border"
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
              <p className="text-sm leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
                {area.description}
              </p>
            </div>
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

function GavelIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10" />
      <path d="m16 16 6-6" />
      <path d="m8 8 6-6" />
      <path d="m9 7 8 8" />
      <path d="m21 11-8-8" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function ScrollIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function ScalesIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
