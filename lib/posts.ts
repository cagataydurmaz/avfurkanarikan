export interface Post {
  slug: string;
  title: string;
  date: string;
  dateFormatted: string;
  excerpt: string;
  content: string;
  category: string;
  readingTime: number;
}

export const posts: Post[] = [
  {
    slug: "ceza-hukukunda-etkin-pismanlik",
    title: "Ceza Hukukunda Etkin Pişmanlık Nedir ve Nasıl Uygulanır?",
    date: "2025-05-12",
    dateFormatted: "12 Mayıs 2025",
    excerpt:
      "Türk Ceza Kanunu'nda etkin pişmanlık müessesesi, belirli suçlarda şüpheli veya sanığın zararı gidermesi ya da suçun aydınlatılmasına katkı sağlaması karşılığında ceza indiriminden yararlanmasını mümkün kılar.",
    category: "Ceza Hukuku",
    readingTime: 7,
    content: `
<h2>Etkin Pişmanlık Nedir?</h2>
<p>
  Etkin pişmanlık, Türk Ceza Kanunu'nun (TCK) çeşitli maddelerinde düzenlenen ve kişinin
  işlediği suç nedeniyle ortaya çıkan zararı gidermesi, suçun aydınlatılmasına katkı sağlaması
  ya da suçun tamamlanmasını engellemesi halinde ceza indiriminden yararlanmasını sağlayan
  bir müessesedir. Bu kavram yalnızca belirli suç tipleri için öngörülmüştür.
</p>
<p>
  TCK'da etkin pişmanlığa ilişkin genel bir hüküm bulunmamakla birlikte, hırsızlık (madde 168),
  dolandırıcılık (madde 168), zimmet (madde 248), rüşvet (madde 254) ve terörle mücadele
  kapsamındaki suçlar gibi birçok farklı suç tipinde özel etkin pişmanlık düzenlemeleri mevcuttur.
</p>

<h2>Uygulanma Koşulları</h2>
<p>
  Etkin pişmanlık hükümlerinden yararlanabilmek için genel olarak şu koşulların bulunması
  aranmaktadır:
</p>
<ol>
  <li>Suçun tamamlanmış ya da teşebbüs aşamasında kalmış olması</li>
  <li>Şüpheli veya sanığın kendi iradesiyle hareket etmesi (baskı altında yapılan açıklamalar kabul edilmez)</li>
  <li>Zararın giderilmesi, iade veya tazmin gibi somut bir katkının sağlanmış olması</li>
  <li>Suçun aydınlatılmasına ya da faillerin tespitine katkı sunulması (bazı suçlarda)</li>
</ol>

<div class="note-box">
  <strong>Önemli:</strong> Etkin pişmanlık beyanının, soruşturma ya da kovuşturma sürecinde
  hangi aşamada yapıldığı, uygulanacak indirim oranını doğrudan etkiler. Genellikle erken
  aşamada yapılan başvurular daha yüksek indirim sağlar.
</div>

<h2>İndirim Oranları: Suç Tipine Göre Karşılaştırma</h2>
<table>
  <thead>
    <tr>
      <th>Suç Tipi</th>
      <th>TCK Maddesi</th>
      <th>Kovuşturmadan Önce</th>
      <th>Kovuşturma Sırasında</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hırsızlık / Dolandırıcılık</td>
      <td>168</td>
      <td>2/3 oranında indirim</td>
      <td>1/2 oranında indirim</td>
    </tr>
    <tr>
      <td>Zimmet</td>
      <td>248</td>
      <td>2/3 oranında indirim</td>
      <td>1/2 oranında indirim</td>
    </tr>
    <tr>
      <td>Rüşvet</td>
      <td>254</td>
      <td>Ceza verilmez</td>
      <td>3/4 oranında indirim</td>
    </tr>
    <tr>
      <td>Kaçakçılık suçları</td>
      <td>5607 s. Kanun</td>
      <td>Soruşturmaya göre değişir</td>
      <td>1/2'ye kadar indirim</td>
    </tr>
  </tbody>
</table>

<h2>Dikkat Edilmesi Gereken Hususlar</h2>
<p>
  Etkin pişmanlık beyanı, yalnızca söylem düzeyinde kalmayıp somut bir eylemle desteklenmelidir.
  Mahkemeler, beyanın samimi olup olmadığını ve fiili katkıyı birlikte değerlendirir. Soyut bir
  "pişmanlık ifadesi" tek başına etkin pişmanlık hükmünün uygulanması için yeterli değildir.
</p>
<p>
  Ayrıca etkin pişmanlık hükmü sanık aleyhine delil olarak kullanılamaz; ancak beyanın zamanlaması
  ve içeriği dosya kapsamında değerlendirilir. Bu nedenle sürecin bir avukat eşliğinde yönetilmesi,
  hak kayıplarının önüne geçmek açısından önem taşımaktadır.
</p>

<h2>Sıkça Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">Her suçta etkin pişmanlık mümkün mü?</p>
  <p class="faq-answer">
    Hayır. Etkin pişmanlık yalnızca TCK'da ve özel ceza kanunlarında açıkça düzenlenen suç
    tiplerinde uygulanır. Kasten öldürme, yaralama gibi suçlarda bu hüküm doğrudan geçerli değildir;
    bu tür suçlarda pişmanlık belirli koşullarla takdiri indirim sebebi sayılabilir.
  </p>
</div>
<div class="faq-item">
  <p class="faq-question">Etkin pişmanlık beyanı ne zaman yapılmalıdır?</p>
  <p class="faq-answer">
    Beyan ne kadar erken yapılırsa indirim oranı genellikle o kadar yüksek olur. Kovuşturma
    başlamadan önce yapılan başvurularda daha yüksek indirim öngörülmüştür.
  </p>
</div>
<div class="faq-item">
  <p class="faq-question">İfade verirken avukat olmadan etkin pişmanlık beyanında bulunabilir miyim?</p>
  <p class="faq-answer">
    Hukuken mümkün olmakla birlikte, içeriği hatalı şekillendirilen ya da koşulları sağlamayan
    bir beyan, sanık aleyhine sonuç doğurabilecek bilgi açıklamalarına zemin hazırlayabilir.
    Bu nedenle herhangi bir beyandan önce avukatınıza danışmanız önerilir.
  </p>
</div>
    `,
  },
  {
    slug: "bosanma-davasinda-velayet",
    title: "Boşanma Davasında Çocuğun Velayeti: Mahkeme Hangi Kriterleri Değerlendirir?",
    date: "2025-04-18",
    dateFormatted: "18 Nisan 2025",
    excerpt:
      "Türk aile mahkemelerinde velayet kararları, çocuğun üstün yararı ilkesi çerçevesinde şekillenir. Mahkemenin gözettiği başlıca kriterler ve süreç hakkında bilgi.",
    category: "Aile Hukuku",
    readingTime: 8,
    content: `
<h2>Velayet Kararlarında Temel İlke: Çocuğun Üstün Yararı</h2>
<p>
  Türk Medeni Kanunu'nun (TMK) 182. maddesi uyarınca boşanma kararıyla birlikte hakim,
  velayeti eşlerden birine verir. Bu kararın odak noktası, ebeveynlerin talepleri değil,
  çocuğun üstün yararıdır. Uluslararası alanda da benimsenen bu ilke, Türk mahkemelerinin
  velayet hükümlerinde temel ölçüt niteliğini taşımaktadır.
</p>

<h2>Mahkemenin Değerlendirdiği Başlıca Kriterler</h2>
<ol>
  <li>
    <strong>Çocuğun yaşı ve cinsiyeti:</strong> Küçük yaştaki çocuklar (özellikle 0-7 yaş aralığında)
    annede bırakılma eğilimi daha yüksek olmakla birlikte, bu kural kesin değildir.
    Her davanın koşulları ayrı ayrı değerlendirilir.
  </li>
  <li>
    <strong>Ebeveynin bakım kapasitesi:</strong> Çalışma düzeni, konut koşulları, çocukla
    geçirilen zaman ve sağlık durumu değerlendirmeye alınır.
  </li>
  <li>
    <strong>Çocuğun okul ve sosyal çevresi:</strong> Çocuğun alışkın olduğu ortamdan kopmaması
    için mevcut yaşam düzenine bağlılık dikkate alınır.
  </li>
  <li>
    <strong>Çocuğun görüşü:</strong> TMK madde 182/2 uyarınca, çocuğun görüşü yaşına ve
    olgunluğuna göre değerlendirmeye katılır. Uzman psikolog veya pedagogdan görüş alınabilir.
  </li>
  <li>
    <strong>Ebeveynin diğer ebeveynle işbirliğine açıklığı:</strong> Çocuğun diğer ebeveynle
    ilişkisini sekteye uğratabilecek tutumlar olumsuz değerlendirilebilir.
  </li>
  <li>
    <strong>Ebeveyn-çocuk bağı:</strong> Geçmiş bakım yükümlülüklerini hangi ebeveynin
    üstlendiği göz önünde bulundurulur.
  </li>
</ol>

<div class="note-box">
  <strong>Uzman bilirkişi incelemesi:</strong> Mahkemeler gerekli gördüğünde sosyal hizmet
  uzmanı, pedagog veya psikolog gibi bilirkişilere başvurabilir. Bilirkişi raporu,
  velayet kararında belirleyici bir rol üstlenebilir.
</div>

<h2>Velayetin Değiştirilmesi</h2>
<p>
  Velayet kararı kesinleştikten sonra da koşulların değişmesi halinde yeniden
  değiştirilebilir. TMK madde 183 uyarınca, "koşulların değişmesi" gerekçesiyle
  velayetin düzenlenmesine ilişkin yeni bir dava açılabilir. Koşul değişikliği
  somut olgularla desteklenmelidir.
</p>

<h2>Kişisel İlişki (Görüş) Hakkı</h2>
<p>
  Velayeti verilmeyen ebeveyn, TMK madde 182 uyarınca çocukla kişisel ilişki kurma hakkına
  sahiptir. Bu hakkın kapsamı hakim tarafından belirlenir. Kişisel ilişki hakkının
  engellenmesi ayrı bir hukuki sürecin konusunu oluşturabilir.
</p>

<h2>Sıkça Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">Anlaşmalı boşanmada velayet nasıl belirlenir?</p>
  <p class="faq-answer">
    Anlaşmalı boşanmada eşler velayete ilişkin düzenlemeyi protokolde belirleyebilir.
    Hakim, protokolü çocuğun yararı açısından denetler ve uygun bulması halinde onaylar.
  </p>
</div>
<div class="faq-item">
  <p class="faq-question">Müşterek velayet mümkün mü?</p>
  <p class="faq-answer">
    Türk hukukunda boşanma kararıyla birlikte müşterek velayet yasal olarak mümkündür;
    ancak uygulamada nadir görülür. Mahkemeler, çocuğun istikrarını esas alarak genellikle
    velayeti tek ebeveyne verir.
  </p>
</div>
<div class="faq-item">
  <p class="faq-question">Çocuk başka şehirde yaşıyorsa ne olur?</p>
  <p class="faq-answer">
    Velayetin bulunduğu şehir dikkate alınarak yetkili aile mahkemesi belirlenir.
    Çocuğun farklı bir ilde bulunması, kişisel ilişki ve nafaka düzenlemelerini karmaşık
    hale getirebilir; her koşul somut olarak değerlendirilir.
  </p>
</div>
    `,
  },
  {
    slug: "kidem-tazminati-hesaplama-2025",
    title: "Kıdem Tazminatı Hakkı ve Hesaplanması: 2025 Güncel Rehberi",
    date: "2025-03-05",
    dateFormatted: "5 Mart 2025",
    excerpt:
      "İş Kanunu kapsamında kıdem tazminatı, hangi hallerde doğar ve nasıl hesaplanır? 2025 yılı kıdem tazminatı tavanı ve pratik örneklerle kapsamlı açıklama.",
    category: "İş Hukuku",
    readingTime: 9,
    content: `
<h2>Kıdem Tazminatı Nedir?</h2>
<p>
  Kıdem tazminatı, 4857 sayılı İş Kanunu ve 1475 sayılı İş Kanunu'nun 14. maddesi
  kapsamında, belirli koşulları sağlayan işçilere iş sözleşmesinin sona ermesi
  halinde ödenen bir tazminattır. Günümüzde kıdem tazminatına ilişkin esaslar
  hâlâ yürürlükte olan 1475 sayılı Kanun'un 14. maddesiyle düzenlenmektedir.
</p>

<h2>Kıdem Tazminatı Hakkının Doğduğu Haller</h2>
<p>
  Aşağıdaki durumlarda, en az bir yıl çalışmış olması şartıyla işçi kıdem
  tazminatı hakkını kazanır:
</p>
<table>
  <thead>
    <tr>
      <th>Sona Erme Sebebi</th>
      <th>Kıdem Tazminatı Hakkı</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>İşverenin geçerli sebep olmaksızın feshi</td>
      <td>Evet</td>
    </tr>
    <tr>
      <td>İşçinin haklı sebeple (İK m.24) istifası</td>
      <td>Evet</td>
    </tr>
    <tr>
      <td>Askerlik sebebiyle ayrılma</td>
      <td>Evet</td>
    </tr>
    <tr>
      <td>Emeklilik (sigorta süresi ve prim günü şartı sağlanmışsa)</td>
      <td>Evet</td>
    </tr>
    <tr>
      <td>Kadın işçinin evlenme tarihinden itibaren 1 yıl içinde ayrılması</td>
      <td>Evet</td>
    </tr>
    <tr>
      <td>İşçinin haklı sebep olmaksızın istifası</td>
      <td>Hayır</td>
    </tr>
    <tr>
      <td>İşverenin haklı sebeple feshi (İK m.25/II)</td>
      <td>Hayır</td>
    </tr>
  </tbody>
</table>

<h2>Hesaplama Yöntemi</h2>
<p>
  Kıdem tazminatı hesabında esas alınan gün sayısı ve ücret aşağıdaki şekilde
  belirlenmektedir:
</p>
<ol>
  <li>Her tam çalışma yılı için 30 günlük giydirilmiş brüt ücret esas alınır.</li>
  <li>Bir yıldan az olan süreler oransal olarak hesaplanır.</li>
  <li>
    Hesaplamada "giydirilmiş ücret" kullanılır: brüt ücrete yemek yardımı,
    servis, ikramiye gibi düzenli ödenen yan ödemeler eklenir.
  </li>
  <li>
    Hesaplanan tutar kıdem tazminatı tavanıyla karşılaştırılır; tavan aşılamaz.
  </li>
</ol>

<blockquote>
  <p>
    <strong>Formül:</strong> (Brüt Giydirilmiş Ücret / 30) x 30 x Çalışma Yılı = Kıdem Tazminatı
  </p>
</blockquote>

<h2>2025 Kıdem Tazminatı Tavanı</h2>
<p>
  Kıdem tazminatı tavanı 6 ayda bir (Ocak ve Temmuz aylarında) güncellenmektedir.
  2025 yılı Ocak dönemi için tavan tutarı 56.027,45 TL olarak belirlenmiştir.
  Her tam yıl için ödenecek tutar bu tavanı geçemez.
</p>

<div class="note-box">
  <strong>Hatırlatma:</strong> Tavan tutarları periyodik olarak değiştiğinden,
  hesaplama yaparken güncel tutarı Çalışma ve Sosyal Güvenlik Bakanlığı'nın
  resmi sitesinden teyit edin.
</div>

<h2>Kıdem Tazminatında Zamanaşımı</h2>
<p>
  İş sözleşmesinin sona ermesinden itibaren 5 yıl içinde dava açılması gerekir.
  7036 sayılı İş Mahkemeleri Kanunu'nun yürürlüğe girmesiyle birlikte kıdem ve
  ihbar tazminatı alacakları için 5 yıllık zamanaşımı süresi belirlenmiştir.
  Süre geçirildikten sonra dava açılması mümkün değildir.
</p>

<h2>Sıkça Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">İstifa ederek kıdem tazminatı alınabilir mi?</p>
  <p class="faq-answer">
    Haklı sebeple (İK m.24) istifa edilmesi, emeklilik için ayrılma veya
    evlilik nedeniyle 1 yıl içinde ayrılma halleri dışında sıradan istifa
    durumunda kıdem tazminatı hakkı doğmaz.
  </p>
</div>
<div class="faq-item">
  <p class="faq-question">Kıdem tazminatı vergiye tabi mi?</p>
  <p class="faq-answer">
    Kıdem tazminatı yasal tavan içindeki kısım gelir vergisinden muaftır.
    Tavanı aşan kısım ise gelir vergisine tabidir.
  </p>
</div>
<div class="faq-item">
  <p class="faq-question">İşveren ödeme yapmıyorsa ne yapılır?</p>
  <p class="faq-answer">
    İşveren kıdem tazminatını ödemiyorsa arabuluculuk başvurusu zorunlu bir
    ön koşuldur. Arabuluculukta anlaşma sağlanamaması durumunda iş mahkemesinde
    dava açılabilir. Ödeme yapılmaması halinde gecikme faizi de talep edilebilir.
  </p>
</div>
    `,
  },
  {
    slug: "kiracinin-tahliye-sureci",
    title: "Kiracının Tahliye Süreci: Kiraya Verenin Yasal Hakları",
    date: "2025-02-14",
    dateFormatted: "14 Şubat 2025",
    excerpt:
      "6098 sayılı Türk Borçlar Kanunu kapsamında kiraya verenin kiracıyı tahliye ettirebileceği haller, gerekli şartlar ve süreç.",
    category: "Gayrimenkul Hukuku",
    readingTime: 7,
    content: `
<h2>Tahliye Sebepleri: TBK Kapsamında</h2>
<p>
  6098 sayılı Türk Borçlar Kanunu'nda (TBK) kiraya verene kira sözleşmesini
  sona erdirerek kiracıyı tahliye ettirebilme imkânı, sınırlı sayıda sayılan
  sebeplere bağlanmıştır. Bu sebepler dışında kira sözleşmesi kendiliğinden
  sona ermez.
</p>

<h2>Sözleşmeye Dayalı Tahliye Halleri</h2>
<ol>
  <li>
    <strong>Kira bedelinin ödenmemesi (TBK m. 315):</strong> Kiracının kira bedelini
    ödememesi halinde kiraya veren, yazılı bildirimde bullanarak 30 günlük süre verir.
    Bu süre içinde ödeme yapılmazsa tahliye davası açılabilir veya icra yoluna gidilebilir.
  </li>
  <li>
    <strong>Tahliye taahhütnamesi (TBK m. 352):</strong> Kiracının kira döneminin
    başlamasından sonra kiraya verene belirli bir tarihte tahliye edeceğini yazılı
    olarak taahhüt etmesi, bu tarihe riayet edilmemesi halinde tahliye hakkı doğurur.
  </li>
  <li>
    <strong>İki haklı ihtar (TBK m. 352/2):</strong> Bir kira yılında kira bedelini
    ödememesi nedeniyle iki kez yazılı ihtara muhatap kalan kiracı, kira yılının
    bitiminden itibaren bir ay içinde tahliye davasıyla çıkarılabilir.
  </li>
</ol>

<div class="note-box">
  <strong>Dikkat:</strong> Tahliye taahhütnamesinin geçerli olabilmesi için
  taahhüdün kiracı tarafından kira sözleşmesinin yapılmasından sonra (imzalanmasından
  sonra) verilmesi şarttır. Sözleşmeyle eş zamanlı verilen taahhütnameler geçersiz
  sayılmaktadır.
</div>

<h2>Kiraya Verene Özgü Nedenler (TBK m. 350-351)</h2>
<table>
  <thead>
    <tr>
      <th>Sebep</th>
      <th>Koşul</th>
      <th>Dava Açma Süresi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Kiraya verenin konut veya işyeri ihtiyacı</td>
      <td>İhtiyacın gerçek ve zorunlu olması</td>
      <td>Kira sözleşmesinin bitiminden itibaren 1 ay</td>
    </tr>
    <tr>
      <td>Yeniden inşa veya esaslı onarım</td>
      <td>Teknik raporla belgelenmiş olması</td>
      <td>Kira sözleşmesinin bitiminden itibaren 1 ay</td>
    </tr>
    <tr>
      <td>Yeni malikin gereksinimi (TBK m. 351)</td>
      <td>Taşınmazın ediniminden sonra 6 ay bildirim, 1 ay sonra dava</td>
      <td>6 aylık bildirimin ardından</td>
    </tr>
  </tbody>
</table>

<h2>Tahliye Sürecinde Dikkat Edilmesi Gereken Noktalar</h2>
<ul>
  <li>Tüm ihtarların noter kanalıyla ya da yazılı olarak yapılması tavsiye edilir.</li>
  <li>Kira artış oranının TÜFE sınırını aşması kiracıya tahliye nedeni sağlamaz.</li>
  <li>İcra yoluyla tahliyede 2-3 aylık kira bedeli karşılığı teminat yatırılması gerekebilir.</li>
  <li>Hukuka aykırı tahliye girişimleri (kilit değiştirme, kapı önüne eşya çıkarma) cezai ve tazminat sorumluluğu doğurur.</li>
</ul>

<h2>Sıkça Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">Belirli süreli kira sözleşmesi sona erince kiracı çıkarılabilir mi?</p>
  <p class="faq-answer">
    TBK m. 347 uyarınca belirsiz süreli kira sözleşmelerinin aksine, konut ve çatılı
    işyeri kiralarında belirli sürenin dolması kiraya verene tahliye hakkı vermez.
    Kiracı, sözleşme bitiminden 15 gün önce bildirimde bulunmazsa sözleşme yenilenmiş
    sayılır. Tahliye için özel sebeplerin varlığı gerekir.
  </p>
</div>
<div class="faq-item">
  <p class="faq-question">Tahliye davası ne kadar sürer?</p>
  <p class="faq-answer">
    Tahliye davalarının süresi mahkemenin iş yüküne, uyuşmazlığın niteliğine ve
    itirazlara göre farklılık gösterir. Sulh hukuk mahkemelerinde görülen bu davalar
    ortalama 6-18 ay sürebilir.
  </p>
</div>
<div class="faq-item">
  <p class="faq-question">İcra yoluyla tahliye hangi hallerde mümkündür?</p>
  <p class="faq-answer">
    Tahliye taahhütnamesinin varlığında veya kira bedelinin ödenmemesi durumunda
    icra yoluyla tahliye mümkündür. Diğer hallerde dava açılması gerekir.
  </p>
</div>
    `,
  },
  {
    slug: "miras-saklı-pay-tenkis",
    title: "Miras Hukukunda Saklı Pay ve Tenkis Davası",
    date: "2025-01-20",
    dateFormatted: "20 Ocak 2025",
    excerpt:
      "TMK kapsamında saklı pay mirasçıları kimlerdir, saklı paylar nasıl hesaplanır ve tenkis davası ne zaman açılır?",
    category: "Miras Hukuku",
    readingTime: 6,
    content: `
<h2>Saklı Pay Nedir?</h2>
<p>
  Türk Medeni Kanunu'nun (TMK) 505-514. maddeleri arasında düzenlenen saklı pay,
  belirli mirasçıların mirasçılık sıfatından doğan ve miras bırakanın tasarruf
  özgürlüğüne karşın güvence altına alınan asgari miras payıdır. Miras bırakan,
  saklı pay sınırını aşacak tasarruflarda bulunursa, bu tasarrufların iptali
  için tenkis davası açılabilir.
</p>

<h2>Saklı Pay Mirasçıları ve Oranları (TMK m. 506)</h2>
<table>
  <thead>
    <tr>
      <th>Mirasçı</th>
      <th>Saklı Pay Oranı</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alt soy (çocuklar, torunlar)</td>
      <td>Yasal payın 1/2'si</td>
    </tr>
    <tr>
      <td>Ana ve baba</td>
      <td>Yasal payın 1/4'ü</td>
    </tr>
    <tr>
      <td>Kardeşler (01.01.2002 öncesi sözleşmelerde)</td>
      <td>Yasal payın 1/8'i</td>
    </tr>
    <tr>
      <td>Sağ kalan eş (tek başına mirasçıysa)</td>
      <td>Yasal payın tamamı</td>
    </tr>
  </tbody>
</table>

<p>
  01.01.2002'de yürürlüğe giren TMK ile kardeşlere tanınan saklı pay hakkı
  kaldırılmıştır. Yeni hukukta saklı pay mirasçıları yalnızca alt soy, ana-baba
  ve sağ kalan eştir.
</p>

<h2>Tenkis Davası Ne Zaman Açılır?</h2>
<p>
  Miras bırakanın sağlığında gerçekleştirdiği bağışlar veya vasiyetname yoluyla
  yaptığı tasarruflar saklı payı zedeliyorsa, saklı pay mirasçısı tenkis (indirim)
  talep edebilir. Tenkis davası ile sınırı aşan tasarrufun iptali değil, saklı payı
  karşılayacak miktarın iadesi talep edilir.
</p>

<h2>Zamanaşımı</h2>
<p>
  TMK madde 571 uyarınca tenkis davası, mirasçının saklı payının zedelendiğini
  öğrendiği tarihten itibaren 1 yıl ve her halükarda vasiyetnamenin açılması
  tarihinden itibaren 10 yıl içinde açılmalıdır. Süre kaçırılması hak kaybına
  yol açar.
</p>

<h2>Sıkça Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">Miras bırakan tüm mal varlığını bir kişiye bırakabilir mi?</p>
  <p class="faq-answer">
    Saklı pay mirasçısı yoksa miras bırakan mal varlığını dilediği kişiye bırakabilir.
    Saklı pay mirasçısı varsa, saklı pay sınırı içindeki tasarruf hakkı güvenceli
    olmakla birlikte aşan kısım tenkise konu olabilir.
  </p>
</div>
<div class="faq-item">
  <p class="faq-question">Miras reddedilirse saklı pay hakkı kaybolur mu?</p>
  <p class="faq-answer">
    Evet. Mirası reddeden kişi mirasçılık sıfatını yitirir ve buna bağlı olarak
    saklı pay talep hakkı da ortadan kalkar.
  </p>
</div>
<div class="faq-item">
  <p class="faq-question">Sağlığında yapılan bağışlar tenkise konu olabilir mi?</p>
  <p class="faq-answer">
    TMK madde 565 kapsamında belirli bağışlar (ölüme bağlı tasarruf niteliğindekiler,
    son 1 yıl içinde yapılan bağışlar, salt saklı payı aşmak amacıyla yapıldığı
    kanıtlanan bağışlar) tenkise konu olabilir.
  </p>
</div>
    `,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
