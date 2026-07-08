"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#hakkimda", label: "Hakkımda" },
  { href: "/#calisma-alanlari", label: "Çalışma Alanları" },
  { href: "/#surec", label: "Süreç" },
  { href: "/makaleler", label: "Makaleler" },
  { href: "/#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "#0d2420" : "#14342B",
          boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.25)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span
              className="text-lg md:text-xl font-bold tracking-wide"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#F4EDE4" }}
            >
              Av. Furkan Arıkan
            </span>
            <span className="text-xs tracking-widest uppercase" style={{ color: "#C5A880" }}>
              Hukuk Bürosu
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "#C5C5C5" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C5A880")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#C5C5C5")}
              >
                {link.label}
              </Link>
            ))}
            <span
              className="ml-2 text-xs font-semibold tracking-widest px-2 py-1 rounded border"
              style={{ color: "#C5A880", borderColor: "#C5A880", opacity: 0.7 }}
            >
              TR
            </span>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
          >
            <span
              className="block w-6 h-0.5 transition-all duration-300 origin-center"
              style={{
                backgroundColor: "#C5A880",
                transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                backgroundColor: "#C5A880",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300 origin-center"
              style={{
                backgroundColor: "#C5A880",
                transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col pt-20 px-8 transition-all duration-300 md:hidden"
        style={{
          backgroundColor: "#0d2420",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-2 mt-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium py-3 border-b transition-colors"
              style={{
                color: "#F4EDE4",
                borderColor: "rgba(197,168,128,0.2)",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8 flex gap-4">
          <a
            href="https://wa.me/905354874099"
            className="flex-1 text-center py-3 rounded-xl text-sm font-semibold transition-all duration-300 ease-out hover:opacity-90"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
            onClick={() => setMenuOpen(false)}
          >
            WhatsApp ile Yazın
          </a>
          <a
            href="tel:+905354874099"
            className="flex-1 text-center py-3 rounded-xl text-sm font-semibold border transition-all duration-300 ease-out hover:bg-white/10"
            style={{ color: "#C5A880", borderColor: "#C5A880" }}
            onClick={() => setMenuOpen(false)}
          >
            Hemen Arayın
          </a>
        </div>
      </div>
    </>
  );
}
