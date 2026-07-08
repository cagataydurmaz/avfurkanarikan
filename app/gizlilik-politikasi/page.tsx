import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Gizlilik Politikası ve KVKK Aydınlatma Metni",
  description:
    "Av. Furkan Arıkan Hukuk Bürosu web sitesi kapsamında kişisel verilerin işlenmesine ilişkin KVKK aydınlatma metni ve gizlilik politikası.",
  robots: { index: true, follow: true },
};

export default function GizlilikPolitikasiPage() {
  return (
    <>
      <Navbar />

      <div className="pt-28 pb-12" style={{ backgroundColor: "#14342B" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <nav className="flex items-center gap-2 mb-6 text-xs" aria-label="Konum">
            <Link href="/" className="transition-colors" style={{ color: "rgba(197,168,128,0.7)" }}>
              Ana Sayfa
            </Link>
            <span style={{ color: "rgba(197,168,128,0.4)" }}>/</span>
            <span style={{ color: "#C5A880" }}>Gizlilik Politikası</span>
          </nav>

          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug"
            style={{ color: "#F4EDE4", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Gizlilik Politikası ve KVKK Aydınlatma Metni
          </h1>
          <p className="mt-3 text-sm" style={{ color: "rgba(244,237,228,0.6)" }}>
            Son güncelleme: 8 Temmuz 2026
          </p>
        </div>
      </div>

      <main className="py-12 md:py-16" style={{ backgroundColor: "#F4EDE4" }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <article className="prose-law">
            <h2>Veri Sorumlusu</h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, bu internet
              sitesi üzerinden veya site aracılığıyla iletişime geçilmesi halinde işlenen
              kişisel verilere ilişkin veri sorumlusu Av. Furkan Arıkan'dır (İstanbul Barosu,
              Sicil No: 72621).
            </p>

            <h2>Hangi Kişisel Veriler İşlenir?</h2>
            <p>
              Bu web sitesinde herhangi bir üyelik sistemi, iletişim formu veya çerez tabanlı
              takip aracı bulunmamaktadır. Kişisel veri işlenmesi yalnızca, ziyaretçinin kendi
              iradesiyle telefon, WhatsApp veya e-posta yoluyla iletişime geçmesi halinde ve bu
              iletişimle sınırlı olarak gerçekleşir. Bu kapsamda işlenebilecek veriler:
            </p>
            <ul>
              <li>Ad, soyad</li>
              <li>Telefon numarası</li>
              <li>E-posta adresi</li>
              <li>İletişim mesajı içeriğinde paylaşılan diğer bilgiler</li>
            </ul>

            <h2>Kişisel Verilerin İşlenme Amaçları</h2>
            <p>
              Yukarıda belirtilen veriler; hukuki danışmanlık talebinin değerlendirilmesi,
              iletişimin sürdürülmesi ve talep edilen bilginin sağlanması amacıyla işlenir.
              Veriler bu amaçlar dışında kullanılmaz.
            </p>

            <h2>Hukuki Sebep</h2>
            <p>
              Kişisel veriler, KVKK madde 5/2-(c) ve (f) bentleri kapsamında, bir sözleşmenin
              kurulması veya ifasıyla doğrudan ilgili olması ve veri sorumlusunun meşru
              menfaati için veri işlemenin zorunlu olması hukuki sebeplerine dayanılarak
              işlenmektedir.
            </p>

            <h2>Verilerin Saklanması ve Aktarımı</h2>
            <p>
              İletişim yoluyla elde edilen kişisel veriler, talebin sonuçlandırılması için
              gerekli süre boyunca saklanır ve üçüncü kişilerle paylaşılmaz. Avukatlık Kanunu
              ve ilgili mevzuattan doğan sır saklama yükümlülüğü herhangi bir istisna
              olmaksızın uygulanır.
            </p>

            <h2>Çerezler (Cookies)</h2>
            <p>
              Bu web sitesi herhangi bir analitik, reklam veya takip amaçlı çerez
              kullanmamaktadır. İleride bu kapsamda bir değişiklik yapılması halinde işbu
              metin güncellenecektir.
            </p>

            <h2>Kişisel Veri Sahibinin Hakları</h2>
            <p>
              KVKK madde 11 uyarınca, kişisel verisi işlenen ilgili kişi veri sorumlusuna
              başvurarak aşağıdaki haklarını kullanabilir:
            </p>
            <ul>
              <li>Kişisel veri işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
              <li>KVKK'da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
              <li>İşlemlerin, verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
              <li>Aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kanuna aykırı işleme sebebiyle zararın giderilmesini talep etme</li>
            </ul>

            <h2>Başvuru Yöntemi</h2>
            <p>
              Yukarıda sayılan haklar kapsamındaki talepler, kimlik doğrulayıcı bilgilerle
              birlikte{" "}
              <a href="mailto:av.furkanarikan1@gmail.com" style={{ color: "#14342B", fontWeight: 600 }}>
                av.furkanarikan1@gmail.com
              </a>{" "}
              adresine e-posta yoluyla iletilebilir. Talepler, niteliğine göre en kısa sürede
              ve en geç 30 gün içinde sonuçlandırılır.
            </p>

            <h2>Değişiklikler</h2>
            <p>
              Bu gizlilik politikası, yasal düzenlemelerdeki değişiklikler veya site
              işleyişindeki güncellemeler doğrultusunda revize edilebilir. Güncel metin her
              zaman bu sayfada yer alır.
            </p>
          </article>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: "#14342B" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
