import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0d2420 0%, #14342B 50%, #1B3A2F 100%)",
      }}
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C5A880" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Ambient glow orbs - fill the wide-screen side margins with depth */}
      <div
        className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(197,168,128,0.16) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 w-[36rem] h-[36rem] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(197,168,128,0.10) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        aria-hidden="true"
      />
      <div
        className="hidden lg:block absolute top-1/4 -left-24 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(244,237,228,0.06) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
        aria-hidden="true"
      />

      {/* Portrait photo - right edge, desktop only, blended into background */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[42%] pointer-events-none" aria-hidden="true">
        <Image
          src="/furkan-kutuphane.jpg"
          alt=""
          fill
          sizes="(min-width: 1024px) 42vw, 0px"
          priority
          className="object-cover"
          style={{ objectPosition: "30% center", filter: "grayscale(0.35) contrast(1.05)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0d2420 0%, rgba(13,36,32,0.8) 18%, rgba(13,36,32,0.35) 48%, rgba(13,36,32,0.18) 100%)",
          }}
        />
      </div>

      {/* Gold decorative lines */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: "linear-gradient(to bottom, transparent, #C5A880, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-1"
        style={{ background: "linear-gradient(to bottom, transparent, #C5A880, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p
          className="text-xs md:text-sm tracking-[0.3em] uppercase mb-8 font-medium"
          style={{ color: "#C5A880" }}
        >
          İstanbul Barosu - Sicil No: 72621
        </p>

        {/* Decorative line above name */}
        <div className="flex items-center justify-center gap-4 mb-6" aria-hidden="true">
          <div className="h-px w-16 md:w-24" style={{ backgroundColor: "#C5A880" }} />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="2" width="16" height="16" stroke="#C5A880" strokeWidth="1" transform="rotate(45 10 10)" />
          </svg>
          <div className="h-px w-16 md:w-24" style={{ backgroundColor: "#C5A880" }} />
        </div>

        {/* Name */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2"
          style={{
            color: "#F4EDE4",
            fontFamily: "var(--font-playfair), Georgia, serif",
            letterSpacing: "-0.01em",
          }}
        >
          Av. Furkan Arıkan
        </h1>

        {/* Tagline */}
        <p
          className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: "rgba(244,237,228,0.75)" }}
        >
          Ceza, iş ve gayrimenkul hukukunda dava takibi ve hukuki danışmanlık.{" "}
          İstanbul.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href="https://wa.me/905354874099?text=Merhaba%2C%20hukuki%20danışmanlık%20almak%20istiyorum."
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ease-out hover:opacity-90 hover:scale-[1.02]"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp ile iletişime geçin"
          >
            <WhatsAppIcon />
            WhatsApp ile Yazın
          </a>
          <a
            href="tel:+905354874099"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold border transition-all duration-300 ease-out hover:bg-white/10 hover:scale-[1.02]"
            style={{ color: "#C5A880", borderColor: "#C5A880" }}
            aria-label="Telefon ile iletişime geçin"
          >
            <PhoneIcon />
            Hemen Arayın
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs tracking-widest uppercase" style={{ color: "#C5A880" }}>
            Aşağı kaydır
          </span>
          <div
            className="w-px h-12 animate-pulse"
            style={{ backgroundColor: "#C5A880" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.5h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
