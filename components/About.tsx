export default function About() {
  return (
    <section id="hakkimda" className="py-20 md:py-28" style={{ backgroundColor: "#F4EDE4" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
            Hakkımda
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Photo column */}
          <div className="flex flex-col items-center md:items-start">
            {/* Photo placeholder */}
            <div
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden mb-6"
              style={{ border: "4px solid #C5A880" }}
            >
              <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect width="300" height="300" fill="#1B3A2F" />
                <circle cx="150" cy="115" r="60" fill="#C5A880" opacity="0.5" />
                <ellipse cx="150" cy="310" rx="110" ry="100" fill="#C5A880" opacity="0.4" />
                <text
                  x="150"
                  y="130"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#F4EDE4"
                  fontSize="64"
                  fontFamily="Georgia, serif"
                  fontWeight="700"
                >
                  FA
                </text>
              </svg>
              <div className="absolute inset-0 flex items-end justify-center pb-4">
                <span className="text-xs" style={{ color: "rgba(244,237,228,0.6)" }}>
                  Fotoğraf eklenecek
                </span>
              </div>
            </div>

            {/* Author byline - E-E-A-T */}
            <div
              className="w-full md:max-w-xs p-4 rounded border"
              style={{ borderColor: "#C5A880", backgroundColor: "#FFFAF5" }}
            >
              <p className="text-sm font-semibold" style={{ color: "#14342B" }}>
                Av. Furkan Arıkan
              </p>
              <p className="text-xs mt-1" style={{ color: "#3D5A50" }}>
                İstanbul Barosu - Sicil No: 72621
              </p>
              <div className="h-px my-2.5" style={{ backgroundColor: "#EBE0D4" }} />
              <p className="text-xs" style={{ color: "#3D5A50" }}>
                MEF Üniversitesi Hukuk Fakültesi mezunu (2019)
              </p>
            </div>
          </div>

          {/* Bio column */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{
                color: "#14342B",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              Furkan Arıkan
            </h2>
            <p className="text-sm font-medium mb-6" style={{ color: "#C5A880" }}>
              Avukat - İstanbul Barosu
            </p>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#2D4A3E" }}>
              <p>
                2019 yılında MEF Üniversitesi Hukuk Fakültesi&apos;nden mezun olan Furkan Arıkan,
                avukatlık mesleğine İstanbul&apos;da başlamış ve o tarihten bu yana aktif olarak
                hukuki danışmanlık ile dava takibi hizmetleri sürdürmektedir.
              </p>
              <p>
                Büro, ağırlıklı olarak ceza hukuku, iş hukuku ve gayrimenkul uyuşmazlıklarında
                müvekkillere hukuki destek sağlamaktadır. Soruşturma ve kovuşturma süreçlerinde
                müdafilik, işçi-işveren uyuşmazlıklarında temsil ve kira hukuku kapsamındaki
                davalarda dava takibi bu hizmetlerin başlıcalarıdır.
              </p>
              <p>
                İstinye, Sarıyer&apos;de faaliyet gösteren büro, İstanbul&apos;un farklı ilçelerinden
                müvekkillere hizmet sunmaktadır. Randevu bazlı çalışma prensibiyle, her dosyaya
                birebir ilgi ve yeterli zaman ayrılmaktadır.
              </p>
            </div>

            {/* Education / Bar info */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoCard
                icon={<GradCapIcon />}
                label="Eğitim"
                value="MEF Üniversitesi Hukuk Fakültesi (2019)"
              />
              <InfoCard
                icon={<BarIcon />}
                label="Baro"
                value="İstanbul Barosu - Sicil No: 72621"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className="flex items-start gap-3 p-4 rounded"
      style={{ backgroundColor: "#EBE0D4" }}
    >
      <div
        className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded"
        style={{ backgroundColor: "#14342B" }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "#C5A880" }}>
          {label}
        </p>
        <p className="text-sm" style={{ color: "#14342B" }}>
          {value}
        </p>
      </div>
    </div>
  );
}

function GradCapIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function BarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 6l9-3 9 3M3 12l9 3 9-3M3 18l9 3 9-3" />
    </svg>
  );
}
