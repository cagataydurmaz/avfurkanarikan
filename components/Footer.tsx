import Link from "next/link";
import TrackedLink from "./TrackedLink";

const navLinks = [
  { href: "/#hakkimda", label: "Hakkımda" },
  { href: "/#calisma-alanlari", label: "Çalışma Alanları" },
  { href: "/#surec", label: "Süreç" },
  { href: "/makaleler", label: "Makaleler" },
  { href: "/araclar", label: "Araçlar" },
  { href: "/#iletisim", label: "İletişim" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0d2420" }}>
      <div className="h-px" style={{ backgroundColor: "rgba(197,168,128,0.2)" }} aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-12 pb-28 md:pt-16 md:pb-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <p
                className="text-xl font-bold"
                style={{
                  color: "#F4EDE4",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                Av. Furkan Arıkan
              </p>
              <p className="text-xs tracking-widest uppercase mt-0.5" style={{ color: "#C5A880" }}>
                Hukuk Bürosu
              </p>
            </Link>
            <p className="text-sm leading-relaxed mt-3" style={{ color: "rgba(244,237,228,0.55)" }}>
              Ceza, iş ve gayrimenkul hukukunda İstanbul&apos;da dava takibi ve hukuki danışmanlık.
            </p>
            <p className="text-xs mt-3" style={{ color: "rgba(197,168,128,0.6)" }}>
              İstanbul Barosu - Sicil No: 72621
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "#C5A880" }}
            >
              Bağlantılar
            </p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "#C5A880" }}
            >
              İletişim
            </p>
            <address className="not-italic space-y-2" style={{ color: "rgba(244,237,228,0.65)" }}>
              <p className="text-sm">Sinanpaşa Mh. Şht. Asım Cd. No:37/12</p>
              <p className="text-sm">Beşiktaş/İstanbul</p>
              <div className="h-px my-3" style={{ backgroundColor: "rgba(197,168,128,0.15)" }} aria-hidden="true" />
              <TrackedLink channel="phone" label="footer" href="tel:+905354874099" className="footer-address-link">
                +90 535 487 40 99
              </TrackedLink>
              <TrackedLink channel="email" label="footer" href="mailto:av.furkanarikan1@gmail.com" className="footer-address-link">
                av.furkanarikan1@gmail.com
              </TrackedLink>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
          style={{ borderTop: "1px solid rgba(197,168,128,0.15)" }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-1.5 md:gap-4">
            <p className="text-xs" style={{ color: "rgba(244,237,228,0.6)" }}>
              &copy; {year} Av. Furkan Arıkan Hukuk Bürosu. Tüm hakları saklıdır.
            </p>
            <Link
              href="/gizlilik-politikasi"
              className="text-xs underline transition-colors"
              style={{ color: "rgba(244,237,228,0.6)" }}
            >
              Gizlilik Politikası ve KVKK Aydınlatma Metni
            </Link>
          </div>
          <p className="text-xs" style={{ color: "rgba(244,237,228,0.6)" }}>
            Bu sitedeki bilgiler hukuki danışmanlık niteliği taşımaz.
          </p>
        </div>
      </div>
    </footer>
  );
}
