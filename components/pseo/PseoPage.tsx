import Link from "next/link";
import Image from "next/image";
import type { PseoDistrict, PseoService } from "@/lib/pseo/types";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import FloatingButtons from "@/components/FloatingButtons";

export default function PseoPage({
  district,
  service,
  allServices,
}: {
  district: PseoDistrict;
  service: PseoService;
  allServices: PseoService[];
}) {
  const otherServices = allServices.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* Minimal top bar - deliberately not the main site nav */}
      <header className="py-5" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 flex items-center justify-between">
          <Link href="/" className="inline-block">
            <p className="text-lg font-bold" style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Av. Furkan Arıkan
            </p>
            <p className="text-[10px] tracking-widest uppercase" style={{ color: "#C5A880" }}>Hukuk Bürosu</p>
          </Link>
          <a
            href="tel:+905354874099"
            className="text-sm font-medium hidden sm:inline-flex items-center gap-2"
            style={{ color: "#C5A880" }}
          >
            +90 535 487 40 99
          </a>
        </div>
      </header>

      <main>
        {/* 1. HERO */}
        <section className="py-16 md:py-24" style={{ background: "linear-gradient(135deg, #0d2420 0%, #14342B 60%, #1B3A2F 100%)" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
            <p className="text-xs tracking-widest uppercase mb-5 font-medium" style={{ color: "#C5A880" }}>
              {district.name} · İstanbul
            </p>
            <h1
              className="text-3xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {service.heroTitle}
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-9" style={{ color: "rgba(244,237,228,0.8)" }}>
              {service.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905354874099?text=Merhaba%2C%20hukuki%20danışmanlık%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ease-out hover:opacity-90"
                style={{ backgroundColor: "#25D366", color: "#fff" }}
              >
                WhatsApp ile Yazın
              </a>
              <a
                href="tel:+905354874099"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold border transition-all duration-300 ease-out hover:bg-white/10"
                style={{ color: "#C5A880", borderColor: "#C5A880" }}
              >
                Hemen Arayın
              </a>
            </div>
            <div className="mt-10 pt-6 inline-block" style={{ borderTop: "1px solid rgba(197,168,128,0.25)" }}>
              <p className="text-xs" style={{ color: "rgba(244,237,228,0.6)" }}>
                Av. Furkan Arıkan · İstanbul Barosu, Sicil No: 72621 · MEF Üniversitesi Hukuk Fakültesi (2019)
              </p>
            </div>
          </div>
        </section>

        {/* 2. ABOUT */}
        <section className="py-14 md:py-20" style={{ backgroundColor: "#F4EDE4" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row gap-6 items-start">
            <div
              className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0"
              style={{ border: "3px solid #C5A880" }}
            >
              <Image
                src="/furkan-arikan.jpg"
                alt="Av. Furkan Arıkan"
                fill
                sizes="80px"
                className="object-cover object-center"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Av. Furkan Arıkan Hakkında
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#2D4A3E" }}>
                {service.aboutParagraph}
              </p>
            </div>
          </div>
        </section>

        {/* 3. HIGHLIGHTS */}
        <section className="py-14 md:py-20" style={{ backgroundColor: "#14342B" }}>
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Hukuki Hizmetlerimiz
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {service.highlightCards.map((card) => (
                <div key={card.title} className="p-5 rounded-lg border" style={{ backgroundColor: "#1B3A2F", borderColor: "rgba(197,168,128,0.2)" }}>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(244,237,228,0.65)" }}>
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PROCESS */}
        <section className="py-14 md:py-20" style={{ backgroundColor: "#F4EDE4" }}>
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Süreci Birlikte Yönetelim
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {service.processSteps.map((step, i) => (
                <div key={step.name} className="text-center">
                  <div
                    className="w-12 h-12 mx-auto flex items-center justify-center rounded-full border-2 mb-3 font-bold"
                    style={{ borderColor: "#C5A880", color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-sm font-semibold mb-1.5" style={{ color: "#14342B" }}>{step.name}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#3D5A50" }}>{step.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-center max-w-md mx-auto" style={{ color: "#7A9089" }}>
              İlk danışmanlık görüşmesi ücret karşılığı yapılmaktadır.
            </p>
          </div>
        </section>

        {/* 5. SERVICES LIST */}
        <section className="py-14 md:py-20" style={{ backgroundColor: "#14342B" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Hizmet Verdiğimiz Alanlar
            </h2>
            <ul className="space-y-3">
              {service.servicesList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: "#C5A880" }} />
                  <span className="text-sm leading-relaxed" style={{ color: "rgba(244,237,228,0.75)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. MID CTA */}
        <section className="py-10" style={{ backgroundColor: "#C5A880" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm font-semibold text-center sm:text-left" style={{ color: "#14342B" }}>
              {district.name} bölgesinde hukuki danışmanlık için iletişime geçebilirsiniz.
            </p>
            <a
              href="https://wa.me/905354874099?text=Merhaba%2C%20hukuki%20danışmanlık%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap"
              style={{ backgroundColor: "#14342B", color: "#F4EDE4" }}
            >
              WhatsApp ile Yazın
            </a>
          </div>
        </section>

        {/* 7. LOCAL */}
        <section className="py-14 md:py-20" style={{ backgroundColor: "#F4EDE4" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <h2 className="text-2xl font-bold mb-5" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              {district.name} Hakkında
            </h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed" style={{ color: "#2D4A3E" }}>{service.localParagraphs[0]}</p>
              <p className="text-base leading-relaxed" style={{ color: "#2D4A3E" }}>{service.localParagraphs[1]}</p>
            </div>
          </div>
        </section>

        {/* 8. CROSSLINKS */}
        <section className="py-12" style={{ backgroundColor: "#EBE0D4" }}>
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <p className="text-xs tracking-widest uppercase font-semibold mb-5" style={{ color: "#14342B" }}>
              Diğer Hizmet Alanlarımız
            </p>
            <div className="flex flex-wrap gap-2.5">
              {service.slug !== "avukat" && (
                <Link
                  href={`/${district.slug}-avukat`}
                  className="text-xs font-medium px-4 py-2 rounded-full border transition-colors"
                  style={{ color: "#14342B", borderColor: "#C5A880" }}
                >
                  {district.name} Avukat (Genel)
                </Link>
              )}
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.urlSlug}`}
                  className="text-xs font-medium px-4 py-2 rounded-full border transition-colors"
                  style={{ color: "#14342B", borderColor: "#C5A880" }}
                >
                  {s.crosslinkLabel}
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/#calisma-alanlari" className="text-xs font-medium underline" style={{ color: "#14342B" }}>
                Tüm çalışma alanlarını inceleyin
              </Link>
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section className="py-14 md:py-20" style={{ backgroundColor: "#F4EDE4" }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Sık Sorulan Sorular
            </h2>
            <div className="space-y-5">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="p-5 rounded-xl border" style={{ backgroundColor: "#fff", borderColor: "#E5D9CC" }}>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "#14342B", fontFamily: "var(--font-playfair), Georgia, serif" }}>
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#3D5A50" }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. CONTACT */}
        <section className="py-14 md:py-20" style={{ backgroundColor: "#14342B" }}>
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              İletişime Geçin
            </h2>
            <div className="grid lg:grid-cols-5 gap-10 items-start">
              <div
                className="lg:col-span-3 p-6 md:p-8 rounded-2xl border"
                style={{ borderColor: "rgba(197,168,128,0.25)", backgroundColor: "rgba(255,255,255,0.03)" }}
              >
                <ContactForm />
              </div>
              <div className="lg:col-span-2 flex flex-col gap-4">
                <div className="rounded-lg overflow-hidden border" style={{ height: "200px", borderColor: "rgba(197,168,128,0.25)" }}>
                  <MapEmbed />
                </div>
                <div className="p-4 rounded-lg border" style={{ borderColor: "rgba(197,168,128,0.25)", backgroundColor: "rgba(255,255,255,0.05)" }}>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#C5A880" }}>Ofis Adresi</p>
                  <p className="text-sm" style={{ color: "rgba(244,237,228,0.8)" }}>Sinanpaşa Mh. Şht. Asım Cd. No:37/12</p>
                  <p className="text-sm" style={{ color: "rgba(244,237,228,0.8)" }}>Beşiktaş/İstanbul</p>
                </div>
                <a
                  href="https://www.google.com/search?q=Av.+Furkan+Arıkan+Beşiktaş"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium underline text-center"
                  style={{ color: "#C5A880" }}
                >
                  Google Yorumlarını Görün
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 11. FOOTER */}
      <footer className="py-8" style={{ backgroundColor: "#0d2420" }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
          <p className="text-xs" style={{ color: "rgba(244,237,228,0.5)" }}>
            Av. Furkan Arıkan Hukuk Bürosu · İstanbul Barosu, Sicil No: 72621
          </p>
          <p className="mt-2 text-xs max-w-lg mx-auto" style={{ color: "rgba(244,237,228,0.35)" }}>
            Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır ve hukuki tavsiye niteliği taşımaz.
          </p>
        </div>
      </footer>

      <FloatingButtons />
    </>
  );
}
