import type { Post } from "../posts";

export const post: Post = {
  slug: "kira-artis-orani-nasil-hesaplanir",
  title: "Kira Artış Oranı Nasıl Hesaplanır? TBK m.344 ve TÜFE Sınırı",
  date: "2026-11-01",
  dateFormatted: "1 Kasım 2026",
  excerpt:
    "Konut ve çatılı işyeri kiralarında yıllık artış, TBK m.344 uyarınca TÜFE'nin on iki aylık ortalamalara göre değişim oranıyla sınırlıdır. Hesap yöntemi, örnek ve fazla ödeme hakkında bilgi.",
  category: "Gayrimenkul Hukuku",
  readingTime: 7,
  faq: [
    {
      question: "Sözleşmede yüksek bir artış oranı yazıyorsa kiracı bu oranı ödemek zorunda mı?",
      answer:
        "TBK m.344/1 uyarınca yenilenen kira dönemlerine ilişkin artış anlaşmaları, TÜFE'nin on iki aylık ortalamalara göre değişim oranını geçmemek koşuluyla geçerlidir. Sözleşmedeki oran bu sınırı aşıyorsa, aşan kısım geçerli değildir.",
    },
    {
      question: "Kira artış oranı hangi aya ait TÜFE verisine göre hesaplanır?",
      answer:
        "Kanun metni, bir önceki kira yılında TÜFE'deki on iki aylık ortalamalara göre değişim oranından söz eder. Uygulamada kira yenileme tarihinden önce TÜİK tarafından açıklanmış en son oran esas alınır. Güncel oran her ay değiştiği için hesaplamadan önce TÜİK bülteninin kontrol edilmesi gerekir.",
    },
    {
      question: "Fazla ödenen kira geri istenebilir mi?",
      answer:
        "Sınırı aşan kısım geçerli olmadığından, bu kısım için yapılan ödemenin iadesi sebepsiz zenginleşme hükümleri çerçevesinde gündeme gelebilir. Somut olayda belgeler ve süreler bir avukatla değerlendirilmelidir.",
    },
    {
      question: "%25 artış sınırı hâlâ geçerli mi?",
      answer:
        "Hayır. TBK Geçici Madde 1 ve 2'deki %25 sınırı, konut kiralarında 1 Temmuz 2024 tarihine (bu tarih dâhil) kadar yenilenen kira dönemleri için öngörülmüştü. Sonraki dönemlerde TBK m.344'teki TÜFE sınırı uygulanır.",
    },
    {
      question: "Kira beş yılı geçtiyse artış nasıl belirlenir?",
      answer:
        "Beş yıldan uzun süreli veya beş yıldan sonra yenilenen sözleşmelerde ve sonraki her beş yılın sonunda hâkim, yeni kira bedelini TÜFE değişim oranını, kiralananın durumunu ve emsal kira bedellerini göz önünde tutarak hakkaniyete uygun biçimde belirler (TBK m.344/3).",
    },
  ],
  content: `
<div class="stat-grid">
  <div class="stat-box">
    <div class="stat-number">TÜFE</div>
    <div class="stat-label">12 aylık ortalamalara göre değişim üst sınırı <span class="law-ref">TBK m.344/1</span></div>
  </div>
  <div class="stat-box">
    <div class="stat-number">5 Yıl</div>
    <div class="stat-label">Sonrasında hâkim tespiti <span class="law-ref">TBK m.344/3</span></div>
  </div>
  <div class="stat-box">
    <div class="stat-number">%25</div>
    <div class="stat-label">Geçici sınır, 1 Temmuz 2024 tarihine kadar yenilenen konut kiraları için <span class="law-ref">TBK Geçici m.1-2</span></div>
  </div>
</div>

<h2>Kira Artışının Yasal Dayanağı</h2>
<p>
  6098 sayılı Türk Borçlar Kanunu'nun 344. maddesinin birinci fıkrasına göre tarafların
  yenilenen kira dönemlerinde uygulanacak kira bedeline ilişkin anlaşmaları, bir önceki kira
  yılında tüketici fiyat endeksindeki (TÜFE) on iki aylık ortalamalara göre değişim oranını
  geçmemek koşuluyla geçerlidir. Bu kural bir yıldan daha uzun süreli kira sözleşmelerinde de
  uygulanır. Hüküm konut ve çatılı işyeri kiraları için düzenlenmiştir. Ayrıca TBK m.343 uyarınca
  kira bedelinin belirlenmesi dışında, kiracı aleyhine değişiklik yapılamaz.
</p>

<h2>Hangi Aya Ait TÜFE Oranı Kullanılır?</h2>
<p>
  Kanun metni "bir önceki kira yılında" TÜFE'deki on iki aylık ortalamalara göre değişim oranını
  esas alır. TÜİK her ay aylık enflasyon bülteninde bu oranı ayrıca yayımlar. Uygulamada kira
  yenileme tarihinden önce açıklanmış en son oran kullanılır. Örneğin Ekim ayında yenilenen bir
  sözleşme için Eylül ayı bülteninde yer alan on iki aylık ortalamalara göre değişim oranı
  dikkate alınır. Dikkat edilecek nokta, yıllık (aynı ayın bir önceki yılın aynı ayına göre)
  değişim oranıyla karıştırılmamasıdır. Bu iki oran farklı hesaplanır ve genellikle farklı çıkar.
</p>

<div class="note-box">
  <strong>Güncel oran her ay değişir:</strong> Bu yazıdaki örnek, TÜİK'in Eylül 2026 bülteninde
  açıklanan %31,49 değerine dayanmaktadır. Her ay yeni bülten yayımlandığı için kendi sözleşme
  tarihinize uygun oranı <a href="/kira-artisi-hesaplama">kira artışı hesaplama aracımızdan</a>
  veya doğrudan TÜİK bülteninden kontrol edebilirsiniz.
</div>

<h2>Örnek Hesap</h2>
<p>
  Varsayımsal bir örnek: Ekim 2026'da yenilenecek konut kirasının mevcut aylık bedeli 20.000 TL
  olsun ve esas alınacak oran %31,49 olsun.
</p>
<table>
  <thead>
    <tr>
      <th>Adım</th>
      <th>İşlem</th>
      <th>Sonuç</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Artış tutarı: 20.000 × 0,3149</td>
      <td>6.298 TL</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Yeni kira: 20.000 + 6.298</td>
      <td>26.298 TL (azami)</td>
    </tr>
  </tbody>
</table>
<p>
  Bu tutar, yasal üst sınırı gösterir. Taraflar daha düşük bir bedel üzerinde anlaşabilir.
  Sınırın aşılması ise aşağıda anlatılan sonuçları doğurur.
</p>

<h2>Sözleşmedeki Oran Sınırı Aşıyorsa</h2>
<p>
  Sözleşmeye örneğin "her yıl %40 artış uygulanır" şeklinde bir hüküm konmuş olsa bile, TBK
  m.344/1 gereği bu anlaşma yalnızca TÜFE sınırına kadar geçerlidir. Yukarıdaki örnekte yeni kira
  %40 üzerinden 28.000 TL olarak talep edilirse, 26.298 TL'yi aşan 1.702 TL'lik kısım geçerli
  olmaz. Bu fark aylık 1.702 TL olduğundan, kira yılı boyunca 12 ay için toplam 20.424 TL
  eder. Kiracı fazla bedeli ödemişse, bu kısmın iadesi sebepsiz zenginleşme hükümleri
  (TBK m.77 ve devamı) çerçevesinde gündeme gelebilir. İade talebinde ödeme belgeleri
  (dekont, banka kayıtları) önem taşır, bu nedenle kira ödemelerinin banka yoluyla yapılması ve
  kayıtların saklanması önerilir.
</p>

<h2>Artış Konusunda Anlaşma Yoksa</h2>
<p>
  Sözleşmede artış oranı belirlenmemişse TBK m.344/2 uyarınca kira bedeli, bir önceki kira
  yılının TÜFE'deki on iki aylık ortalamalara göre değişim oranını geçmemek koşuluyla hâkim
  tarafından, kiralananın durumu göz önüne alınarak hakkaniyete göre belirlenir. Dava süresi ve
  kararın etkisi TBK m.345'te düzenlenmiştir. Kira bedelinin belirlenmesine ilişkin dava her
  zaman açılabilir. Mahkemece belirlenecek bedelin yeni dönemin başlangıcından itibaren kiracıyı
  bağlaması için davanın yeni dönemin başlangıcından en geç otuz gün önce açılması veya
  kiraya verenin bu süre içinde artışa ilişkin yazılı bildirim yapmış olması gerekir. Ayrıntılı
  bilgi için
  <a href="/makaleler/kira-bedeli-tespit-ve-uyarlama-davasi">kira bedeli tespit ve uyarlama davası</a>
  yazımıza bakabilirsiniz.
</p>

<h2>Beş Yıl Sonrasında Hâkim Tespiti</h2>
<p>
  TBK m.344/3 uyarınca beş yıldan uzun süreli veya beş yıldan sonra yenilenen kira
  sözleşmelerinde ve bundan sonraki her beş yılın sonunda, taraflar bu konuda bir anlaşma
  yapmış olsa bile, yeni kira yılında uygulanacak bedel hâkim tarafından belirlenir. Hâkim bu
  belirlemeyi yaparken TÜFE'deki on iki aylık ortalamalara göre değişim oranını, kiralananın
  durumunu ve emsal kira bedellerini birlikte göz önünde tutar ve hakkaniyete uygun bir sonuca
  ulaşır. Her beş yıldan sonraki kira yılında bu şekilde belirlenen kira bedeli, önceki
  fıkralardaki ilkelere göre değiştirilebilir.
</p>

<div class="highlight-box">
  <strong>Yabancı Para Kiralarında</strong>
  Sözleşmede kira bedeli yabancı para olarak kararlaştırılmışsa, 1567 sayılı Kanun hükümleri
  saklı kalmak şartıyla, beş yıl geçmedikçe kira bedelinde değişiklik yapılamaz. TBK m.138'deki
  aşırı ifa güçlüğü hükmü saklıdır (TBK m.344/4).
</div>

<h2>%25 Sınırı Sona Erdi mi?</h2>
<p>
  Konut kiralarında geçici bir düzenleme uygulanmıştı. TBK Geçici Madde 1 (7409 sayılı Kanunla
  eklenmiştir) ve Geçici Madde 2 (7456 sayılı Kanunla eklenmiştir) uyarınca, 2 Temmuz 2023 ile
  1 Temmuz 2024 (bu tarihler dâhil) arasında yenilenen kira dönemlerinde artış, bir önceki kira
  yılı bedelinin yüzde yirmi beşini geçemiyordu. TÜFE oranının yüzde yirmi beşin altında
  kalması halinde ise TÜFE oranı geçerliydi. Bu geçici düzenleme 1 Temmuz 2024 tarihinden sonra
  yenilenen dönemler için uygulanmaz. Bu tarihten sonra konut ve çatılı işyeri kiralarında
  TBK m.344'teki TÜFE sınırı esas alınır.
</p>

<h2>Artış Sürecinde Dikkat Edilecek Noktalar</h2>
<div class="process-steps">
  <div class="process-step">
    <div class="step-num">1</div>
    <div class="step-text"><strong>Yenileme Tarihini Belirleyin</strong>Kira yılının hangi tarihte bittiği ve yeni dönemin ne zaman başladığı tespit edilir.</div>
  </div>
  <div class="process-step">
    <div class="step-num">2</div>
    <div class="step-text"><strong>TÜİK Bültenini Kontrol Edin</strong>Yenileme tarihinden önce açıklanmış en son on iki aylık ortalamalara göre değişim oranı belirlenir.</div>
  </div>
  <div class="process-step">
    <div class="step-num">3</div>
    <div class="step-text"><strong>Sözleşme Hükmünü Karşılaştırın</strong>Sözleşmedeki oran ya da talep edilen bedel, TÜFE sınırıyla kıyaslanır.</div>
  </div>
  <div class="process-step">
    <div class="step-num">4</div>
    <div class="step-text"><strong>Yazılı Kayıt Tutun</strong>Bildirimler ve ödemeler dekont veya yazılı belgeyle kayıt altına alınır.</div>
  </div>
</div>

<p>
  Kira artışı, yasal sınırın aşılması halinde kiracıya tahliye nedeni sağlamaz. Tahliye
  sebepleri kanunda sınırlı sayıda sayılmıştır. Ayrıntı için
  <a href="/makaleler/kiracinin-tahliye-sureci">kiracının tahliye süreci</a> yazımıza
  bakabilirsiniz.
</p>

<h2>Sık Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">Sözleşmede yüksek bir artış oranı yazıyorsa kiracı bu oranı ödemek zorunda mı?</p>
  <p class="faq-answer">TBK m.344/1 uyarınca yenilenen kira dönemlerine ilişkin artış anlaşmaları, TÜFE'nin on iki aylık ortalamalara göre değişim oranını geçmemek koşuluyla geçerlidir. Sözleşmedeki oran bu sınırı aşıyorsa, aşan kısım geçerli değildir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Kira artış oranı hangi aya ait TÜFE verisine göre hesaplanır?</p>
  <p class="faq-answer">Kanun metni, bir önceki kira yılında TÜFE'deki on iki aylık ortalamalara göre değişim oranından söz eder. Uygulamada kira yenileme tarihinden önce TÜİK tarafından açıklanmış en son oran esas alınır. Güncel oran her ay değiştiği için hesaplamadan önce TÜİK bülteninin kontrol edilmesi gerekir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Fazla ödenen kira geri istenebilir mi?</p>
  <p class="faq-answer">Sınırı aşan kısım geçerli olmadığından, bu kısım için yapılan ödemenin iadesi sebepsiz zenginleşme hükümleri çerçevesinde gündeme gelebilir. Somut olayda belgeler ve süreler bir avukatla değerlendirilmelidir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">%25 artış sınırı hâlâ geçerli mi?</p>
  <p class="faq-answer">Hayır. TBK Geçici Madde 1 ve 2'deki %25 sınırı, konut kiralarında 1 Temmuz 2024 tarihine (bu tarih dâhil) kadar yenilenen kira dönemleri için öngörülmüştü. Sonraki dönemlerde TBK m.344'teki TÜFE sınırı uygulanır.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Kira beş yılı geçtiyse artış nasıl belirlenir?</p>
  <p class="faq-answer">Beş yıldan uzun süreli veya beş yıldan sonra yenilenen sözleşmelerde ve sonraki her beş yılın sonunda hâkim, yeni kira bedelini TÜFE değişim oranını, kiralananın durumunu ve emsal kira bedellerini göz önünde tutarak hakkaniyete uygun biçimde belirler (TBK m.344/3).</p>
</div>

<div class="note-box">
  <strong>Genel Bilgilendirme:</strong> Bu yazı genel bilgilendirme amacıyla hazırlanmıştır ve
  hukuki danışmanlık niteliği taşımaz. Her uyuşmazlığın koşulları farklıdır. Kira sözleşmenize
  ilişkin somut bir durumda bir avukata danışmanız önerilir.
</div>
  `,
};
