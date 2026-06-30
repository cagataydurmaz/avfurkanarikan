export default function Contact() {
  return (
    <section id="iletisim" className="py-20 md:py-28" style={{ backgroundColor: "#14342B" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-10" style={{ backgroundColor: "#C5A880" }} aria-hidden="true" />
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#C5A880" }}>
            İletişim
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold max-w-sm"
            style={{
              color: "#F4EDE4",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            Bize Ulaşın
          </h2>
          <p className="mt-4 md:mt-0 text-sm max-w-xs" style={{ color: "rgba(244,237,228,0.65)" }}>
            Randevu için arayabilir veya WhatsApp üzerinden yazabilirsiniz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <div className="rounded-lg overflow-hidden" style={{ height: "320px" }}>
            <iframe
              src="https://maps.google.com/maps?q=İstinye+Sarıyer+İstanbul&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Av. Furkan Arıkan Hukuk Bürosu Konum"
              aria-label="Ofis konumu haritası - İstinye, Sarıyer, İstanbul"
            />
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            {/* Address */}
            <StaticCard
              icon={<LocationIcon />}
              title="Adres"
              lines={[
                "[Sokak / Mahalle Placeholder]",
                "İstinye, Sarıyer",
                "34460 İstanbul",
              ]}
            />

            {/* Working hours */}
            <StaticCard
              icon={<ClockIcon />}
              title="Çalışma Saatleri"
              lines={[
                "Pazartesi - Cuma: 09:00 - 18:00",
                "Cumartesi - Pazar: Kapalı",
              ]}
            />

            {/* Phone */}
            <a href="tel:+905XXXXXXXXX" className="contact-card-link">
              <div
                className="w-10 h-10 flex items-center justify-center rounded flex-shrink-0"
                style={{ backgroundColor: "rgba(197,168,128,0.15)" }}
              >
                <PhoneIcon />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#C5A880" }}>
                  Telefon
                </p>
                <p className="text-base font-medium" style={{ color: "#F4EDE4" }}>
                  +90 5XX XXX XX XX
                </p>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:info@furkanarikan.av.tr" className="contact-card-link">
              <div
                className="w-10 h-10 flex items-center justify-center rounded flex-shrink-0"
                style={{ backgroundColor: "rgba(197,168,128,0.15)" }}
              >
                <EmailIcon />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#C5A880" }}>
                  E-posta
                </p>
                <p className="text-base font-medium" style={{ color: "#F4EDE4" }}>
                  info@furkanarikan.av.tr
                </p>
              </div>
            </a>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="https://wa.me/905XXXXXXXXX?text=Merhaba%2C%20randevu%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded text-sm font-semibold"
                style={{ backgroundColor: "#25D366", color: "#fff" }}
              >
                <WhatsAppIcon />
                WhatsApp ile Yazın
              </a>
              <a
                href="tel:+905XXXXXXXXX"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded text-sm font-semibold border"
                style={{ color: "#C5A880", borderColor: "#C5A880" }}
              >
                <PhoneIcon />
                Hemen Arayın
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StaticCard({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: string[] }) {
  return (
    <div
      className="flex items-start gap-4 p-4 rounded-lg border"
      style={{ borderColor: "rgba(197,168,128,0.25)", backgroundColor: "rgba(255,255,255,0.05)" }}
    >
      <div
        className="w-10 h-10 flex items-center justify-center rounded flex-shrink-0"
        style={{ backgroundColor: "rgba(197,168,128,0.15)" }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#C5A880" }}>
          {title}
        </p>
        {lines.map((line, i) => (
          <p key={i} className="text-sm" style={{ color: "rgba(244,237,228,0.8)" }}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.5h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}
