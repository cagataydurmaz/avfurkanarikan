const steps = [
  {
    number: "01",
    title: "İlk İletişim",
    description:
      "WhatsApp veya telefon aracılığıyla ulaşın. Konunuzu kısaca paylaşın; randevu için uygun tarih ve saati birlikte belirleyelim.",
  },
  {
    number: "02",
    title: "Danışmanlık Randevusu",
    description:
      "Yüz yüze veya çevrim içi gerçekleştirilen danışmanlık görüşmesi ücret karşılığı yapılmaktadır. Görüşmede hukuki durumunuz değerlendirilir.",
  },
  {
    number: "03",
    title: "Vekalet ve Dosya Hazırlığı",
    description:
      "Temsil kararı alınması halinde noterde vekalet düzenlenir, ilgili belgeler derlenir ve dosya hazırlığı tamamlanır.",
  },
  {
    number: "04",
    title: "Temsil ve Süreç Takibi",
    description:
      "Mahkeme, savcılık ve diğer idari merciler nezdinde temsil ve süreç yönetimi sağlanır; gelişmeler müvekkille paylaşılır.",
  },
];

export default function Process() {
  return (
    <section id="surec" className="py-20 md:py-28" style={{ backgroundColor: "#F4EDE4" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
            Nasıl Çalışıyoruz
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold max-w-sm"
            style={{
              color: "#14342B",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            Süreci Birlikte Yönetelim
          </h2>
          <p className="mt-4 md:mt-0 text-sm max-w-xs" style={{ color: "#3D5A50" }}>
            Şeffaf ve öngörülebilir bir süreç için her adımı önceden paylaşıyoruz.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line - desktop */}
          <div
            className="hidden md:block absolute top-9 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px"
            style={{ backgroundColor: "#C5A880", opacity: 0.3 }}
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-start md:items-center text-left md:text-center">
                {/* Step circle */}
                <div
                  className="relative flex items-center justify-center w-16 h-16 rounded-full border-2 mb-5 flex-shrink-0"
                  style={{
                    borderColor: "#C5A880",
                    backgroundColor: index === 0 ? "#14342B" : "#F4EDE4",
                  }}
                >
                  <span
                    className="text-xl font-bold"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      color: index === 0 ? "#C5A880" : "#14342B",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3
                  className="text-base font-bold mb-2"
                  style={{
                    color: "#14342B",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#3D5A50" }}>
                  {step.description}
                </p>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div
                    className="md:hidden w-px h-8 mt-6"
                    style={{ backgroundColor: "#C5A880", opacity: 0.4 }}
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div
          className="mt-12 p-5 rounded-lg border flex gap-4"
          style={{ borderColor: "#C5A880", backgroundColor: "rgba(197,168,128,0.08)" }}
        >
          <div
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mt-0.5"
            style={{ backgroundColor: "#14342B" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          </div>
          <p className="text-sm" style={{ color: "#3D5A50" }}>
            <span className="font-semibold" style={{ color: "#14342B" }}>Bilgi notu:</span>{" "}
            İlk danışmanlık görüşmesi ücretlidir. Görüşme sonrasında vekalet verip vermemek tamamen
            müvekkile bırakılmakta olup herhangi bir yükümlülük doğurmaz.
          </p>
        </div>
      </div>
    </section>
  );
}
