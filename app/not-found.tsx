import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  description: "Aradığınız sayfa bulunamadı.",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen flex items-center justify-center px-5"
        style={{ background: "linear-gradient(135deg, #0d2420 0%, #14342B 50%, #1B3A2F 100%)" }}
      >
        <div className="max-w-lg mx-auto text-center py-32">
          <p
            className="text-xs md:text-sm tracking-[0.3em] uppercase mb-8 font-medium"
            style={{ color: "#C5A880" }}
          >
            Hata 404
          </p>

          <div className="flex items-center justify-center gap-4 mb-6" aria-hidden="true">
            <div className="h-px w-12 md:w-16" style={{ backgroundColor: "#C5A880" }} />
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="2" width="16" height="16" stroke="#C5A880" strokeWidth="1" transform="rotate(45 10 10)" />
            </svg>
            <div className="h-px w-12 md:w-16" style={{ backgroundColor: "#C5A880" }} />
          </div>

          <h1
            className="text-3xl md:text-4xl font-bold mb-5"
            style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Sayfa Bulunamadı
          </h1>

          <p
            className="text-base leading-relaxed mb-10 max-w-md mx-auto"
            style={{ color: "rgba(244,237,228,0.7)" }}
          >
            Aradığınız sayfa kaldırılmış, adresi değişmiş ya da hiç var olmamış olabilir.
            Aşağıdaki bağlantılardan devam edebilirsiniz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ease-out hover:opacity-90 hover:scale-[1.02]"
              style={{ backgroundColor: "#C5A880", color: "#14342B" }}
            >
              Ana Sayfaya Dön
            </Link>
            <Link
              href="/#calisma-alanlari"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold border transition-all duration-300 ease-out hover:bg-white/10 hover:scale-[1.02]"
              style={{ color: "#C5A880", borderColor: "#C5A880" }}
            >
              Çalışma Alanlarını Görüntüle
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
