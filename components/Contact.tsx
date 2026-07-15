import ContactForm from "./ContactForm";
import MapEmbed from "./MapEmbed";
import TrackedLink from "./TrackedLink";

export default function Contact() {
  return (
    <section id="iletisim" className="py-20 md:py-28" style={{ backgroundColor: "#14342B" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span
              className="inline-block text-xs tracking-widest uppercase font-semibold px-3 py-1 rounded-full mb-4"
              style={{ color: "#14342B", backgroundColor: "#C5A880" }}
            >
              İletişim
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold max-w-sm"
              style={{
                color: "#F4EDE4",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              Bize Ulaşın
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm max-w-xs" style={{ color: "rgba(244,237,228,0.65)" }}>
            Randevu için arayabilir veya WhatsApp üzerinden yazabilirsiniz.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact form - primary */}
          <div
            className="lg:col-span-3 p-6 md:p-8 rounded-2xl border"
            style={{ borderColor: "rgba(197,168,128,0.25)", backgroundColor: "rgba(255,255,255,0.03)" }}
          >
            <p
              className="text-base font-semibold mb-5"
              style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Bir Mesaj Bırakın
            </p>
            <ContactForm />
          </div>

          {/* Map + info - secondary */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div
              className="rounded-lg overflow-hidden border"
              style={{ height: "200px", borderColor: "rgba(197,168,128,0.25)" }}
            >
              <MapEmbed />
            </div>

            {/* Address */}
            <StaticCard
              icon={<LocationIcon />}
              title="Adres"
              lines={[
                "Sinanpaşa Mh. Şht. Asım Cd. No:37/12",
                "Beşiktaş/İstanbul",
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
            <TrackedLink channel="phone" label="contact-section" href="tel:+905354874099" className="contact-card-link">
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
                  +90 535 487 40 99
                </p>
              </div>
            </TrackedLink>

            {/* Email */}
            <TrackedLink channel="email" label="contact-section" href="mailto:av.furkanarikan1@gmail.com" className="contact-card-link">
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
                  av.furkanarikan1@gmail.com
                </p>
              </div>
            </TrackedLink>
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
