export interface Post {
  slug: string;
  title: string;
  date: string;
  dateFormatted: string;
  excerpt: string;
  content: string;
  category: string;
  readingTime: number;
  faq?: Array<{ question: string; answer: string }>;
}

export const posts: Post[] = [
  {
    slug: "ceza-hukukunda-etkin-pismanlik",
    title: "Ceza Hukukunda Etkin Pişmanlık Nedir ve Nasıl Uygulanır?",
    date: "2026-06-10",
    dateFormatted: "10 Haziran 2026",
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
    date: "2026-05-15",
    dateFormatted: "15 Mayıs 2026",
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
    slug: "kidem-tazminati-hesaplama-2026",
    title: "Kıdem Tazminatı Hakkı ve Hesaplanması: 2026 Güncel Rehberi",
    date: "2026-04-08",
    dateFormatted: "8 Nisan 2026",
    excerpt:
      "İş Kanunu kapsamında kıdem tazminatı, hangi hallerde doğar ve nasıl hesaplanır? 2026 yılı kıdem tazminatı tavanı ve pratik örneklerle kapsamlı açıklama.",
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

<h2>2026 Kıdem Tazminatı Tavanı</h2>
<p>
  Kıdem tazminatı tavanı 6 ayda bir (Ocak ve Temmuz aylarında) güncellenmektedir.
  2026 yılı için geçerli güncel tavan tutarı Çalışma ve Sosyal Güvenlik Bakanlığı'nın
  resmi kanallarından teyit edilmelidir. Her tam yıl için ödenecek tutar bu tavanı geçemez.
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
    date: "2026-03-05",
    dateFormatted: "5 Mart 2026",
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
    slug: "miras-sakli-pay-tenkis",
    title: "Miras Hukukunda Saklı Pay ve Tenkis Davası",
    date: "2026-02-18",
    dateFormatted: "18 Şubat 2026",
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
  {
    slug: "sozlesmeden-donme-ve-tazminat",
    title: "Sözleşmeden Dönme Hakkı Ne Zaman Kullanılabilir?",
    date: "2026-01-14",
    dateFormatted: "14 Ocak 2026",
    excerpt:
      "Türk Borçlar Kanunu kapsamında sözleşmeden dönme hakkı, hangi koşullarda ve nasıl kullanılır? Dönme sonuçları, tazminat hakları ve dikkat edilmesi gereken süreler.",
    category: "Borçlar Hukuku",
    readingTime: 7,
    content: `
<h2>Sözleşmeden Dönme Nedir?</h2>
<p>
  Sözleşmeden dönme, 6098 sayılı Türk Borçlar Kanunu (TBK) çerçevesinde taraflardan
  birinin belirli koşulların gerçekleşmesi halinde sözleşmeyi ileriye değil geriye
  etkili olarak sona erdirmesidir. Dönme beyanı karşı tarafa ulaştığı anda hüküm ifade eder
  ve taraflar aldıklarını iade etmekle yükümlü hale gelir.
</p>
<p>
  Dönme hakkı esas olarak iki durumda gündeme gelir: borçlunun temerrüdü (TBK m. 125) ve
  ayıplı ifa (TBK m. 227-228). Her iki durumda da hakkın kullanım koşulları ve sonuçları farklılık gösterir.
</p>

<h2>Borçlunun Temerrüdünde Dönme Hakkı Nasıl Doğar?</h2>
<p>
  Borçlu edimini ifa etmemişse alacaklı, TBK madde 125 uyarınca aşağıdaki seçimlik haklardan
  birini kullanabilir:
</p>
<ul>
  <li>Aynen ifayı ve gecikme tazminatını talep etmek</li>
  <li>Aynen ifadan vazgeçerek olumlu zararın tazminatını istemek</li>
  <li>Sözleşmeden dönerek olumsuz zararın tazminatını istemek</li>
</ul>
<p>
  Dönme hakkının kullanılabilmesi için alacaklının borçluya uygun bir süre tanımış ve bu süre
  içinde de ifanın gerçekleşmemiş olması gerekir. Süre tanınmasına gerek olmayan haller kanunda
  sınırlı biçimde sayılmıştır (örneğin; borcun sabit vadeli olması ya da borçlunun ifadan
  açıkça kaçınması).
</p>

<div class="note-box">
  <strong>Önemli:</strong> Seçimlik haklardan biri kullanıldıktan sonra diğerine geçmek kural olarak
  mümkün değildir. Bu nedenle hangi seçeneğin tercih edileceğine dikkatli biçimde karar verilmelidir.
</div>

<h2>Ayıplı İfada Dönme Hakkı Ne Zaman Kullanılır?</h2>
<p>
  Teslim edilen mal sözleşmede öngörülen nitelikleri taşımıyorsa alıcı, TBK madde 227
  kapsamında şu seçeneklerden birini tercih edebilir:
</p>
<table>
  <thead>
    <tr>
      <th>Seçimlik Hak</th>
      <th>Açıklama</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sözleşmeden dönme</td>
      <td>Mal iade edilir, bedel geri alınır</td>
    </tr>
    <tr>
      <td>Bedel indirimi</td>
      <td>Ayıplı malla orantılı indirim talep edilir</td>
    </tr>
    <tr>
      <td>Ücretsiz onarım</td>
      <td>Satıcıdan ayıbın giderilmesi istenir</td>
    </tr>
    <tr>
      <td>Misliyle değişim</td>
      <td>Ayıpsız bir misli ile değişim talep edilir</td>
    </tr>
  </tbody>
</table>
<p>
  Ayıbın önemli olup olmadığı, dönme hakkının kullanılabilmesi bakımından belirleyicidir.
  Küçük ayıplarda hakim, dönme yerine bedel indirimine hükmedebilir.
</p>

<h2>Dönmenin Hukuki Sonuçları Nelerdir?</h2>
<p>
  Sözleşmeden dönülmesi halinde sözleşme baştan itibaren geçersiz hale gelir ve taraflar
  karşılıklı olarak aldıklarını iade etmekle yükümlü tutulur. Bu yükümlülük şunları kapsar:
</p>
<ul>
  <li>Ödenen bedelin iadesi</li>
  <li>Teslim edilen malın iadesi</li>
  <li>Yararlanmadan doğan bedelin hesaplanması (kullanım tazminatı)</li>
  <li>Olumsuz zararın tazminatı (varsa)</li>
</ul>

<h2>Sıkça Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">Sözleşmeden dönme ile fesih arasındaki fark nedir?</p>
  <p class="faq-answer">
    Dönme, sözleşmeyi geriye etkili olarak sona erdirir; taraflar aldıklarını iade eder.
    Fesih ise sözleşmeyi ileriye etkili olarak bitirir; geçmişteki edimler iade edilmez.
    Anlık edim sözleşmelerinde (satım, kira) dönme, sürekli edim sözleşmelerinde (iş, vekalet)
    ise fesih söz konusu olur.
  </p>
</div>
<div class="faq-item">
  <p class="faq-question">Tazminat istenmeden yalnızca sözleşmeden dönülebilir mi?</p>
  <p class="faq-answer">
    Evet. Dönme hakkı tazminat talebinden bağımsız olarak kullanılabilir. Ancak dönme ile
    birlikte olumsuz zarar talep edilmesi de mümkündür.
  </p>
</div>
<div class="faq-item">
  <p class="faq-question">Dönme beyanının şekli var mıdır?</p>
  <p class="faq-answer">
    TBK genel olarak şekil şartı öngörmemiştir. Ancak ispat güçlüğü yaşanmaması için
    noter kanalıyla ya da iadeli taahhütlü posta ile yazılı beyan gönderilmesi önerilir.
  </p>
</div>
<div class="faq-item">
  <p class="faq-question">Ayıptan doğan dönme hakkı zamanaşımına uğrar mı?</p>
  <p class="faq-answer">
    Evet. TBK madde 231 uyarınca taşınır satımında ayıptan doğan talepler, ayıbın
    bildiriminden itibaren 2 yıllık zamanaşımına tabidir. Taşınmaz satımında bu süre 5 yıldır.
  </p>
</div>
<div class="faq-item">
  <p class="faq-question">Karşılıklı borç sözleşmelerinde ifa imkansızlaşırsa ne olur?</p>
  <p class="faq-answer">
    Sonraki imkansızlık halinde TBK madde 136 uygulanır; borçlu kusursuz imkansızlık
    halinde borçtan kurtulur. Alacaklı da karşı edimden kaçınabilir ve önceden verdiklerini
    sebepsiz zenginleşme hükümleri uyarınca geri isteyebilir.
  </p>
</div>
    `,
  },
  {
    slug: "ise-iade-davasi",
    title: "İşe İade Davası: Hangi Koşullarda Açılır ve Süreç Nasıl İşler?",
    date: "2026-06-22",
    dateFormatted: "22 Haziran 2026",
    excerpt:
      "4857 sayılı İş Kanunu kapsamında işe iade davası, kimler tarafından ve ne zaman açılabilir? Başvuru süresi, arabuluculuk zorunluluğu ve karar sonrası haklar.",
    category: "İş Hukuku",
    readingTime: 8,
    content: `
<h2>İşe İade Davası Nedir?</h2>
<p>
  İşe iade davası, 4857 sayılı İş Kanunu'nun 18 ila 21. maddeleri arasında düzenlenen ve
  iş güvencesi kapsamındaki işçilerin geçerli sebep gösterilmeksizin işten çıkarılması
  halinde başvurabilecekleri bir hukuki yoldur. Bu dava ile işçi, feshin geçersizliğinin
  tespitini ve işe iadesini talep eder.
</p>
<p>
  İş güvencesi hükümleri yalnızca belirli koşulları taşıyan işçilere uygulanır.
  Bu koşulların tamamının bir arada bulunması gerekir.
</p>

<h2>İşe İade Davası Açmak İçin Hangi Koşullar Gereklidir?</h2>
<table>
  <thead>
    <tr>
      <th>Koşul</th>
      <th>Açıklama</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>İş yeri büyüklüğü</td>
      <td>İş yerinde en az 30 işçi çalışıyor olmalıdır</td>
    </tr>
    <tr>
      <td>Kıdem süresi</td>
      <td>İşçinin aynı işverende en az 6 ay çalışmış olması gerekir</td>
    </tr>
    <tr>
      <td>Sözleşme türü</td>
      <td>Belirsiz süreli iş sözleşmesiyle çalışılıyor olmalıdır</td>
    </tr>
    <tr>
      <td>İşveren vekili kapsamı dışında olmak</td>
      <td>İşletmenin bütününü yönetenler iş güvencesi kapsamı dışındadır</td>
    </tr>
  </tbody>
</table>

<h2>Başvuru Süresi Ne Kadardır?</h2>
<p>
  Fesih bildiriminin tebliğinden itibaren <strong>1 ay</strong> içinde arabulucuya başvurulması
  zorunludur (İş Mahkemeleri Kanunu m. 11). Arabuluculuk görüşmelerinin anlaşmazlıkla
  sonuçlanması halinde son tutanağın düzenlendiği tarihten itibaren <strong>2 hafta</strong>
  içinde iş mahkemesinde dava açılmalıdır. Bu süreler hak düşürücü nitelikte olup,
  geçirilmesi halinde dava hakkı ortadan kalkar.
</p>

<div class="note-box">
  <strong>Önemli:</strong> Arabuluculuk başvurusu yapılmadan doğrudan mahkemeye gidilmesi
  halinde dava usulden reddedilir. Dolayısıyla sürelerin dikkatle takip edilmesi gerekir.
</div>

<h2>Mahkeme İşe İadeye Karar Verirse Ne Olur?</h2>
<p>
  Feshin geçersiz bulunması halinde mahkeme, işçinin işe iadesine ve boşta geçen süre için
  en fazla 4 aya kadar ücret ile diğer haklarının ödenmesine hükmeder (İK m. 21). Kararın
  kesinleşmesinden itibaren 10 gün içinde işçinin işe iade başvurusunda bulunması gerekir.
</p>
<p>
  İşveren işçiyi işe başlatmazsa, tazminat miktarı iş mahkemesince belirlenir. Bu tazminat
  işçinin kıdemine ve feshin niteliğine göre 4 ila 8 aylık ücret tutarında olup, sendikal
  nedenlerle gerçekleştirilen fesihlerde bu tutar en az 1 yıllık ücret olarak belirlenir.
</p>

<h2>İşçi İşe Başlamak İstemezse Ne Olur?</h2>
<p>
  İşçi, mahkeme kararı kesinleştikten sonra 10 günlük süre içinde işe başvurmaz ya da başvurup
  işe başlamazsa, iş sözleşmesi işverence geçerli sebeple feshedilmiş sayılır. Bu durumda
  işe iade tazminatı alınamaz; yalnızca kıdem ve ihbar tazminatı talep edilebilir.
</p>

<h2>Sıkça Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">30'dan az işçi çalışan bir iş yerinde işten çıkarıldım, işe iade davası açabilir miyim?</p>
  <p class="faq-answer">
    İş güvencesi hükümleri 30'dan az işçi çalıştıran iş yerlerine uygulanmaz. Bu durumda
    kıdem ve ihbar tazminatı ile diğer işçilik alacakları talep edilebilir; ancak işe iade
    yoluna gidilemez.
  </p>
</div>
<div class="faq-item">
  <p class="faq-question">Geçici iş ilişkisiyle çalışanlar işe iade davası açabilir mi?</p>
  <p class="faq-answer">
    Geçici iş ilişkisinde asıl işveren ile işçi arasında doğrudan bir iş sözleşmesi
    bulunmadığından işe iade davası genel olarak asıl işverene karşı açılamaz.
    Geçici iş ilişkisi kuran işverene karşı koşulların oluşup oluşmadığı somut duruma göre değerlendirilir.
  </p>
</div>
<div class="faq-item">
  <p class="faq-question">Deneme süresinde işten çıkarıldım, işe iade davası açabilir miyim?</p>
  <p class="faq-answer">
    Deneme süresi içinde yapılan fesihlerde iş güvencesi hükümleri uygulanmaz; dolayısıyla
    bu dönemde işe iade davası açılamaz.
  </p>
</div>
<div class="faq-item">
  <p class="faq-question">İşe iade kararı kesinleşmeden önce işçi başka bir iş yerinde çalışabilir mi?</p>
  <p class="faq-answer">
    Çalışılabilir. Ancak başka bir iş yerinde çalışıldığına dair kanıt olması halinde
    boşta geçen süre tazminatı bu süreyle sınırlandırılabilir. Mahkeme somut koşulları değerlendirir.
  </p>
</div>
<div class="faq-item">
  <p class="faq-question">Arabuluculukta anlaşırsak ne alırım?</p>
  <p class="faq-answer">
    Arabuluculuk aşamasında taraflar serbestçe müzakere eder. İşçi, işe iade yerine
    belirli bir tazminat miktarında uzlaşmayı tercih edebilir. Bu tutarın herhangi bir yasal
    üst sınırı yoktur; tarafların mutabakatına bağlıdır.
  </p>
</div>
    `,
  },
  {
    slug: "tutukluluga-itiraz",
    title: "Tutukluluk Nedir? Tutukluluğa İtiraz Nasıl Yapılır?",
    date: "2026-07-05",
    dateFormatted: "5 Temmuz 2026",
    excerpt:
      "Ceza Muhakemesi Kanunu kapsamında tutukluluk kararına itiraz hakkı, yasal süre sınırları ve salıverilme talep yolları hakkında kapsamlı bilgi.",
    category: "Ceza Hukuku",
    readingTime: 8,
    faq: [
      { question: "Tutukluluğun devamına karar verilirse ne yapılabilir?", answer: "Her duruşmada ya da koşullar değiştiğinde yeniden tahliye talebinde bulunulabilir. Ayrıca CMK madde 267 kapsamında tutukluluk devamı kararlarına da itiraz yolu açıktır." },
      { question: "Avukat olmadan tutukluluğa itiraz edilebilir mi?", answer: "Hukuken mümkündür; tutuklu bizzat dilekçe vererek itiraz edebilir. Ancak itiraz dilekçesinin hukuki gerekçelerle desteklenmesi değerlendirme sürecini doğrudan etkiler." },
      { question: "Adli kontrol ile tutukluluk arasındaki fark nedir?", answer: "Adli kontrol (CMK m.109) kişiyi fiziksel olarak gözaltına almaksızın yurt dışı çıkış yasağı, imza zorunluluğu gibi yükümlülükler getiren hafif bir tedbirdir. Tutukluluk ise fiziksel özgürlüğün tamamen kısıtlanmasıdır." },
      { question: "Tutukluluk süresi ceza süresinden düşülür mü?", answer: "Evet. CMK madde 63 ve TCK madde 63 uyarınca çekilen tutukluluk süresi, mahkumiyet halinde verilecek cezadan mahsup edilir." },
      { question: "Haksız tutukluluk sonrası tazminat istenebilir mi?", answer: "Evet. CMK madde 141 uyarınca haksız tutuklanan ve beraat eden kişi, Devlet aleyhine tazminat davası açabilir." },
    ],
    content: `
<div class="stat-grid">
  <div class="stat-box">
    <div class="stat-number">1+1 Yıl</div>
    <div class="stat-label">Ağır olmayan suçlarda azami tutukluluk süresi</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">7 Gün</div>
    <div class="stat-label">Tutuklama kararına itiraz süresi <span class="law-ref">CMK m.104</span></div>
  </div>
  <div class="stat-box">
    <div class="stat-number">2+3 Yıl</div>
    <div class="stat-label">Ağır ceza suçlarında azami tutukluluk süresi</div>
  </div>
</div>

<h2>Tutukluluk Nedir?</h2>
<p>
  Tutukluluk, henüz mahkumiyet kararı bulunmayan bir kişinin kaçma şüphesi veya delilleri karartma tehlikesi gerekçesiyle hâkim kararıyla özgürlüğünden yoksun bırakılmasıdır. <span class="law-ref">CMK m.100</span> uyarınca tutuklama, yalnızca zorunlu hallerde başvurulabilecek istisnai bir koruma tedbiridir.
</p>
<p>
  Tutukluluk sanığın suçlu olduğunu kanıtlamaz; kovuşturma sürecinin sağlıklı yürütülmesi amacıyla uygulanan geçici bir kısıtlamadır. Anayasa'nın 19. maddesi kapsamında kişi özgürlüğü ve güvenliği hakkıyla doğrudan ilişkilidir.
</p>

<h2>Tutuklama Kararı İçin Hangi Koşullar Aranır?</h2>
<p><span class="law-ref">CMK m.100</span> uyarınca tutuklama kararı verilebilmesi için şu koşulların bir arada bulunması gerekir:</p>
<ul>
  <li>Suçun işlendiğine dair kuvvetli şüphenin varlığı</li>
  <li>Kaçma, saklanma veya kaçmaya teşebbüs ihtimalini güçlendiren somut olgular</li>
  <li>Delilleri karartma, tanıkları etkileme girişimiyle ilgili kuvvetli şüphe</li>
</ul>
<p>
  Terör, uyuşturucu ve örgütlü suç gibi katalog suçlarda bu şüphenin varlığı, kaçma ve delil karartma şüphesinin var olduğuna karine teşkil eder. Tutuklama, ölçülülük ilkesi gereğince adli kontrol tedbirleriyle amacın sağlanamayacağı durumlarda uygulanabilir.
</p>

<div class="highlight-box">
  <strong>Son Çare Kuralı</strong>
  Tutuklama, istisnai niteliktedir. <span class="law-ref">CMK m.109</span> kapsamındaki adli kontrol tedbirleri (yurt dışı çıkış yasağı, imza zorunluluğu, elektronik kelepçe) yeterli görülüyorsa tutuklama yoluna gidilmemesi gerekir.
</div>

<h2>Tutukluluk Süreleri Ne Kadardır?</h2>
<table>
  <thead>
    <tr>
      <th>Suç Türü</th>
      <th>Azami Süre</th>
      <th>Uzatma Sınırı</th>
      <th>Toplam</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ağır olmayan suçlar</td>
      <td>1 yıl</td>
      <td>1 yıl</td>
      <td>2 yıl</td>
    </tr>
    <tr>
      <td>Ağır ceza suçları</td>
      <td>2 yıl</td>
      <td>3 yıl</td>
      <td>5 yıl</td>
    </tr>
    <tr>
      <td>Terör suçları</td>
      <td>2 yıl</td>
      <td>5 yıl</td>
      <td>7 yıl</td>
    </tr>
  </tbody>
</table>

<h2>Tutukluluğa İtiraz Nasıl Yapılır?</h2>
<div class="process-steps">
  <div class="process-step">
    <div class="step-num">1</div>
    <div class="step-text">
      <strong>Salıverilme Talebi</strong>
      <span class="law-ref">CMK m.104</span> — Tutuklu veya avukatı her aşamada tahliye talebinde bulunabilir. Hâkim talebi en geç 3 gün içinde karara bağlar.
    </div>
  </div>
  <div class="process-step">
    <div class="step-num">2</div>
    <div class="step-text">
      <strong>İtiraz Yolu</strong>
      <span class="law-ref">CMK m.267-268</span> — Tutuklama kararına 7 gün içinde itiraz edilebilir. İtiraz, kararı veren mahkemenin üstündeki mahkemece incelenir.
    </div>
  </div>
  <div class="process-step">
    <div class="step-num">3</div>
    <div class="step-text">
      <strong>Anayasa Mahkemesi Bireysel Başvurusu</strong>
      İç hukuk yolları tükendikten sonra AYM'ye bireysel başvuru yapılabilir. Uzun tutukluluk sürelerinde bu yol sıklıkla kullanılmaktadır.
    </div>
  </div>
  <div class="process-step">
    <div class="step-num">4</div>
    <div class="step-text">
      <strong>AİHM Başvurusu</strong>
      İç hukuk yollarının tükenmesi koşuluyla Avrupa İnsan Hakları Mahkemesi'ne başvurulabilir. AİHM, aşırı uzun tutukluluk sürelerinde Madde 5 kapsamında ihlal kararları vermektedir.
    </div>
  </div>
</div>

<h2>Sıkça Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">Tutukluluğun devamına karar verilirse ne yapılabilir?</p>
  <p class="faq-answer">Her duruşmada ya da koşullar değiştiğinde yeniden tahliye talebinde bulunulabilir. Ayrıca CMK madde 267 kapsamında tutukluluk devamı kararlarına da itiraz yolu açıktır.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Avukat olmadan tutukluluğa itiraz edilebilir mi?</p>
  <p class="faq-answer">Hukuken mümkündür; tutuklu bizzat dilekçe vererek itiraz edebilir. Ancak itiraz dilekçesinin hukuki gerekçelerle desteklenmesi değerlendirme sürecini doğrudan etkiler.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Adli kontrol ile tutukluluk arasındaki fark nedir?</p>
  <p class="faq-answer">Adli kontrol (CMK m.109), kişiyi fiziksel olarak gözaltına almaksızın yurt dışı çıkış yasağı, imza zorunluluğu gibi yükümlülükler getiren hafif bir tedbirdir. Tutukluluk ise fiziksel özgürlüğün tamamen kısıtlanmasıdır.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Tutukluluk süresi ceza süresinden düşülür mü?</p>
  <p class="faq-answer">Evet. CMK madde 63 ve TCK madde 63 uyarınca çekilen tutukluluk süresi, mahkumiyet halinde verilecek cezadan mahsup edilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Haksız tutukluluk sonrası tazminat istenebilir mi?</p>
  <p class="faq-answer">Evet. CMK madde 141 uyarınca haksız tutuklanan ve beraat eden kişi, Devlet aleyhine tazminat davası açabilir.</p>
</div>
    `,
  },
  {
    slug: "bosanmada-nafaka-turleri",
    title: "Boşanmada Nafaka Türleri: Kimler Alabilir, Nasıl Hesaplanır?",
    date: "2026-06-28",
    dateFormatted: "28 Haziran 2026",
    excerpt:
      "Türk Medeni Kanunu'nda düzenlenen tedbir, iştirak, yoksulluk ve yardım nafakası türleri; hak kazanma koşulları, hesaplama kriterleri ve sona erme halleri.",
    category: "Aile Hukuku",
    readingTime: 9,
    faq: [
      { question: "Nafaka miktarı nasıl belirlenir?", answer: "Mahkeme, nafaka miktarını belirlerken tarafların ekonomik durumlarını, yaşam standartlarını ve ihtiyaçlarını göz önünde bulundurur. Belirlenmiş sabit bir formül yoktur; her dava somut koşullarına göre değerlendirilir." },
      { question: "Erkek de nafaka alabilir mi?", answer: "Evet. Yoksulluk nafakası cinsiyete göre ayrım yapılmaksızın uygulanır. Boşanma sonrası yoksulluğa düşen eş, kadın veya erkek olsun, TMK madde 175 kapsamında nafaka talep edebilir." },
      { question: "Nafaka ne zaman sona erer?", answer: "Yoksulluk nafakası, nafaka alanın evlenmesi, taraflardan birinin ölümü veya nafaka alanın yoksulluğunun ortadan kalkması halinde sona erer. Ayrıca hâkim, koşulların değişmesiyle nafakayı kaldırabilir veya azaltabilir." },
      { question: "Çocuğun nafakasını kim alır?", answer: "İştirak nafakası, velayeti olmayan ebeveyn tarafından velayet hakkına sahip ebeveyine ödenir. Çocuğun 18 yaşına gelmesiyle birlikte nafaka kendisine doğrudan ödenebilir veya sona erebilir." },
      { question: "Nafaka ödenmezse ne yapılır?", answer: "Nafakayı ödemeyen eş aleyhine icra takibi başlatılabilir. Ayrıca nafaka borcunu ödemeyen kişi hakkında İcra ve İflas Kanunu madde 344 uyarınca üç aya kadar tazyik hapsi uygulanabilir." },
    ],
    content: `
<div class="stat-grid">
  <div class="stat-box">
    <div class="stat-number">4 Tür</div>
    <div class="stat-label">Türk hukukunda düzenlenen nafaka çeşidi</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">TMK 175</div>
    <div class="stat-label">Yoksulluk nafakasını düzenleyen madde</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">TMK 182</div>
    <div class="stat-label">İştirak nafakasını düzenleyen madde</div>
  </div>
</div>

<h2>Nafaka Türleri Nelerdir?</h2>
<p>
  Türk Medeni Kanunu (TMK), boşanma süreciyle bağlantılı dört farklı nafaka türü düzenlemektedir. Her birinin hak kazanma koşulları, miktarı ve süresi birbirinden farklıdır.
</p>
<table>
  <thead>
    <tr>
      <th>Nafaka Türü</th>
      <th>TMK Maddesi</th>
      <th>Kim İçin?</th>
      <th>Ne Zaman Sona Erer?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tedbir Nafakası</td>
      <td>TMK m.169</td>
      <td>Eş ve çocuklar (dava süresince)</td>
      <td>Dava sonunda</td>
    </tr>
    <tr>
      <td>İştirak Nafakası</td>
      <td>TMK m.182</td>
      <td>Velayeti olmayan ebeveynin çocuğu için katkısı</td>
      <td>Çocuğun ekonomik bağımsızlığını kazanmasıyla</td>
    </tr>
    <tr>
      <td>Yoksulluk Nafakası</td>
      <td>TMK m.175</td>
      <td>Boşanma yüzünden yoksulluğa düşen eş</td>
      <td>Evlenme, ölüm, yoksulluğun sona ermesi</td>
    </tr>
    <tr>
      <td>Yardım Nafakası</td>
      <td>TMK m.364</td>
      <td>Yoksulluk içindeki alt/üst soy</td>
      <td>Yoksulluğun ortadan kalkmasıyla</td>
    </tr>
  </tbody>
</table>

<h2>Tedbir Nafakası Ne Zaman İstenir?</h2>
<p>
  Boşanma davası açılmasıyla birlikte, dava süresince geçim güçlüğü çekecek olan eş ve çocuklar için <span class="law-ref">TMK m.169</span> uyarınca tedbir nafakasına hükmedilebilir. Bu nafaka, davanın sonuçlanmasına kadar geçici nitelikte uygulanır. Talep dava dilekçesiyle veya ayrı bir ara karar talebiyle yapılabilir.
</p>

<h2>Yoksulluk Nafakası Hangi Koşullarda Hak Kazandırır?</h2>
<p>
  <span class="law-ref">TMK m.175</span> uyarınca yoksulluk nafakasına hak kazanılabilmesi için şu koşulların bulunması gerekir:
</p>
<ul>
  <li>Boşanma nedeniyle yoksulluğa düşme (gelirin temel ihtiyaçları karşılayamaması)</li>
  <li>Talep eden eşin boşanmada daha az kusurlu ya da kusursuz olması</li>
  <li>Diğer eşin ödeme gücüne sahip olması</li>
</ul>

<div class="note-box">
  <strong>Kusur Koşulu:</strong> Yoksulluk nafakasında talep eden tarafın daha az kusurlu olması yeterlidir; tamamen kusursuz olması şart değildir. Ancak daha ağır kusurlu olan taraf yoksulluk nafakası talep edemez.
</div>

<h2>Nafaka Miktarı Nasıl Belirlenir?</h2>
<p>
  Mahkeme nafaka miktarını belirlerken kanunda öngörülmüş sabit bir formül uygulamaz. Değerlendirmede dikkate alınan başlıca unsurlar şunlardır:
</p>
<ul>
  <li>Tarafların mevcut gelir ve giderleri</li>
  <li>Yaşam standartları ve ekonomik durumları</li>
  <li>Çocukların bakım ihtiyaçları ve eğitim giderleri (iştirak nafakasında)</li>
  <li>Enflasyon oranları ve geçim endeksleri</li>
  <li>Nafaka alacaklısının çalışma kapasitesi</li>
</ul>

<h2>Nafaka Artırım Davası Ne Zaman Açılır?</h2>
<p>
  Hükmedilen nafaka miktarı ekonomik koşulların değişmesiyle yetersiz kalabilir. <span class="law-ref">TMK m.176/4</span> uyarınca taraflardan biri, koşulların önemli ölçüde değişmesi halinde nafakanın artırılmasını veya azaltılmasını talep edebilir. Enflasyon artışı, nafaka alacaklısının artan ihtiyaçları ya da nafaka borçlusunun ekonomik durumunun iyileşmesi bu davayı açmak için gerekçe oluşturabilir.
</p>

<div class="highlight-box">
  <strong>Önemli Süre Kuralı</strong>
  Boşanma kararının kesinleşmesinden itibaren nafaka talebinde bulunulabilmesi için herhangi bir hak düşürücü süre öngörülmemiştir. Ancak dava açılırken talebe ilişkin gerekçelerin somut delillerle desteklenmesi sonucu olumlu etkiler.
</div>

<h2>Sıkça Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">Nafaka miktarı nasıl belirlenir?</p>
  <p class="faq-answer">Mahkeme nafaka miktarını belirlerken tarafların ekonomik durumlarını, yaşam standartlarını ve ihtiyaçlarını göz önünde bulundurur. Belirlenmiş sabit bir formül yoktur; her dava somut koşullarına göre değerlendirilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Erkek de nafaka alabilir mi?</p>
  <p class="faq-answer">Evet. Yoksulluk nafakası cinsiyete göre ayrım yapılmaksızın uygulanır. Boşanma sonrası yoksulluğa düşen eş, kadın veya erkek olsun, TMK madde 175 kapsamında nafaka talep edebilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Nafaka ne zaman sona erer?</p>
  <p class="faq-answer">Yoksulluk nafakası, nafaka alanın evlenmesi, taraflardan birinin ölümü veya nafaka alanın yoksulluğunun ortadan kalkması halinde sona erer. Hâkim, koşulların değişmesiyle nafakayı kaldırabilir veya azaltabilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Çocuğun nafakasını kim alır?</p>
  <p class="faq-answer">İştirak nafakası, velayeti olmayan ebeveyn tarafından velayet hakkına sahip ebeveyine ödenir. Çocuğun 18 yaşına gelmesiyle birlikte nafaka kendisine doğrudan ödenebilir veya sona erebilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Nafaka ödenmezse ne yapılır?</p>
  <p class="faq-answer">Nafakayı ödemeyen eş aleyhine icra takibi başlatılabilir. Ayrıca nafaka borcunu ödemeyen kişi hakkında İcra ve İflas Kanunu madde 344 uyarınca üç aya kadar tazyik hapsi uygulanabilir.</p>
</div>
    `,
  },
  {
    slug: "tapu-iptali-ve-tescil-davasi",
    title: "Tapu İptali ve Tescil Davası: Ne Zaman Açılır, Nasıl Sonuçlanır?",
    date: "2026-06-15",
    dateFormatted: "15 Haziran 2026",
    excerpt:
      "Muris muvazaası başta olmak üzere tapu iptaline yol açan hukuki nedenler, zamanaşımı süreleri, dava süreci ve iyiniyetli üçüncü kişi ilkesi.",
    category: "Gayrimenkul Hukuku",
    readingTime: 8,
    faq: [
      { question: "Tapu iptali davasını kimler açabilir?", answer: "Tapu kaydından etkilenen kişiler, mirasçılar ve ilgili diğer üçüncü şahıslar tapu iptali davası açabilir. Muris muvazaasında ise mirastan pay alması gereken mirasçılar dava hakkına sahiptir." },
      { question: "Muris muvazaası nedir?", answer: "Miras bırakanın mirasçılardan mal kaçırmak amacıyla gerçekte bağış olan bir işlemi satış veya başka bir sözleşme biçiminde göstermesidir. Bu durumda mirasçılar tapu iptali ve tescil davası açabilir." },
      { question: "Tapu iptali davasında zamanaşımı var mı?", answer: "Muris muvazaasına dayanan davalarda zamanaşımı uygulanmaz; hak düşürücü süre de öngörülmemiştir. Ancak iyiniyetli üçüncü kişilere devir söz konusuysa durum farklılaşabilir." },
      { question: "İyiniyetli alıcıdan tapu geri alınabilir mi?", answer: "Türk Medeni Kanunu madde 1023 uyarınca tapuya güvenerek iyiniyetle taşınmaz satın alan kişinin hakkı korunur. Bu durumda tapu iptali değil, ancak tazminat yoluna gidilebilir." },
      { question: "Tapu iptali davası ne kadar sürer?", answer: "Dava süresi, delil durumuna, bilirkişi incelemelerine ve mahkeme yoğunluğuna göre değişir. Ortalama 1-3 yıl sürmektedir; ancak istinaf ve temyiz aşamaları bu süreyi uzatabilir." },
    ],
    content: `
<div class="stat-grid">
  <div class="stat-box">
    <div class="stat-number">TMK 1026</div>
    <div class="stat-label">Tapu sicilindeki yanlışlıkları düzenleyen temel madde</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">TMK 1023</div>
    <div class="stat-label">İyiniyetli üçüncü kişi korumasını düzenleyen madde</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">Süresiz</div>
    <div class="stat-label">Muris muvazaası davalarında zamanaşımı süresi</div>
  </div>
</div>

<h2>Tapu İptali ve Tescil Davası Nedir?</h2>
<p>
  Tapu iptali ve tescil davası, hukuka aykırı biçimde oluşturulan tapu kaydının mahkeme kararıyla silinmesi ve taşınmazın gerçek hak sahibi adına tescil edilmesini sağlayan bir dava türüdür. Bu dava, taşınmaz mülkiyetinin korunması amacıyla <span class="law-ref">TMK m.1026</span> çerçevesinde düzenlenmiştir.
</p>

<h2>Hangi Nedenlerle Tapu İptali Davası Açılır?</h2>
<table>
  <thead>
    <tr>
      <th>Dava Nedeni</th>
      <th>Açıklama</th>
      <th>Zamanaşımı</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Muris Muvazaası</td>
      <td>Miras bırakanın mal kaçırma amacıyla yaptığı muvazaalı işlemler</td>
      <td>Yok (süresiz)</td>
    </tr>
    <tr>
      <td>Sahte Senet / İmza</td>
      <td>Sahte belgeyle gerçekleştirilen tapu devri</td>
      <td>10 yıl (zamanaşımı)</td>
    </tr>
    <tr>
      <td>Ehliyetsizlik</td>
      <td>Hukuki ehliyeti olmayan kişinin yaptığı devir işlemi</td>
      <td>1 yıl (hak düşürücü)</td>
    </tr>
    <tr>
      <td>Hata, Hile, İkrah</td>
      <td>Yanıltma veya baskı altında yapılan işlemler</td>
      <td>1 yıl (hak düşürücü)</td>
    </tr>
    <tr>
      <td>Kadastro Hatası</td>
      <td>Taşınmazın yanlış kişi adına tescil edilmesi</td>
      <td>10 yıl</td>
    </tr>
  </tbody>
</table>

<h2>Muris Muvazaası Nedir?</h2>
<p>
  Muris muvazaası, miras bırakanın mirasçılardan mal kaçırmak amacıyla gerçekte bağış olan bir işlemi satış veya başka bir sözleşme görünümünde gerçekleştirmesidir. Yargıtay içtihatlarıyla şekillenen bu alanda, işlemin gerçek niteliğinin bağış olduğunun kanıtlanması halinde mirasçılar tapu iptalini talep edebilir.
</p>
<p>
  Mahkemeler muris muvazaasının varlığını araştırırken satış bedelinin piyasa değeriyle uyumu, taraflar arasındaki ilişki, taşınmazın devir sonrası fiilen kimin kullandığı ve tanık beyanları gibi unsurları değerlendirir.
</p>

<div class="highlight-box">
  <strong>İyiniyetli Üçüncü Kişi Koruması</strong>
  <span class="law-ref">TMK m.1023</span> uyarınca tapuya güvenerek iyiniyetle taşınmaz satın alan kişinin hakkı korunur. Muvazaalı bir devir zincirinde taşınmazı iyiniyetle satın alan üçüncü kişiye karşı doğrudan tapu iptali talep edilemez; bu durumda gerçek hak sahibi yalnızca tazminat yoluna başvurabilir.
</div>

<h2>Dava Süreci Nasıl İşler?</h2>
<div class="process-steps">
  <div class="process-step">
    <div class="step-num">1</div>
    <div class="step-text">
      <strong>Tapu Kayıtlarının İncelenmesi</strong>
      Tapu sicil müdürlüğünden taşınmazın tapu kütüğü, geçmiş devirler ve bağlı belgeler temin edilir.
    </div>
  </div>
  <div class="process-step">
    <div class="step-num">2</div>
    <div class="step-text">
      <strong>Dava Dilekçesi ve Tedbir Talebi</strong>
      Asliye hukuk mahkemesinde dava açılır. Taşınmazın başkasına devredilmemesi için ihtiyati tedbir kararı talep edilebilir.
    </div>
  </div>
  <div class="process-step">
    <div class="step-num">3</div>
    <div class="step-text">
      <strong>Bilirkişi İncelemesi</strong>
      Mahkeme, taşınmazın rayiç değerini ve işlemin niteliğini tespit etmek üzere bilirkişi görevlendirebilir.
    </div>
  </div>
  <div class="process-step">
    <div class="step-num">4</div>
    <div class="step-text">
      <strong>Karar ve Tescil</strong>
      Mahkeme tapu iptaline hükmederse bu karar tapu sicil müdürlüğüne bildirilir ve taşınmaz gerçek hak sahibi adına tescil edilir.
    </div>
  </div>
</div>

<h2>Sıkça Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">Tapu iptali davasını kimler açabilir?</p>
  <p class="faq-answer">Tapu kaydından etkilenen kişiler, mirasçılar ve ilgili diğer üçüncü şahıslar tapu iptali davası açabilir. Muris muvazaasında ise mirastan pay alması gereken mirasçılar dava hakkına sahiptir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Muris muvazaası nedir?</p>
  <p class="faq-answer">Miras bırakanın mirasçılardan mal kaçırmak amacıyla gerçekte bağış olan bir işlemi satış veya başka bir sözleşme biçiminde göstermesidir. Bu durumda mirasçılar tapu iptali ve tescil davası açabilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Tapu iptali davasında zamanaşımı var mı?</p>
  <p class="faq-answer">Muris muvazaasına dayanan davalarda zamanaşımı uygulanmaz; hak düşürücü süre de öngörülmemiştir. Ancak iyiniyetli üçüncü kişilere devir söz konusuysa durum farklılaşabilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">İyiniyetli alıcıdan tapu geri alınabilir mi?</p>
  <p class="faq-answer">Türk Medeni Kanunu madde 1023 uyarınca tapuya güvenerek iyiniyetle taşınmaz satın alan kişinin hakkı korunur. Bu durumda tapu iptali değil, ancak tazminat yoluna gidilebilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Tapu iptali davası ne kadar sürer?</p>
  <p class="faq-answer">Dava süresi, delil durumuna, bilirkişi incelemelerine ve mahkeme yoğunluğuna göre değişir. Ortalama 1-3 yıl sürmektedir; istinaf ve temyiz aşamaları bu süreyi uzatabilir.</p>
</div>
    `,
  },
  {
    slug: "vasiyetname-nasil-duzenlenir",
    title: "Vasiyetname Nasıl Düzenlenir? Türleri ve Geçerlilik Koşulları",
    date: "2026-05-28",
    dateFormatted: "28 Mayıs 2026",
    excerpt:
      "Türk Medeni Kanunu kapsamında resmi, el yazılı ve sözlü vasiyetname türleri; her birinin geçerlilik koşulları, sık yapılan hatalar ve iptale yol açan durumlar.",
    category: "Miras Hukuku",
    readingTime: 7,
    faq: [
      { question: "El yazılı vasiyetname bilgisayarda yazılabilir mi?", answer: "Hayır. El yazılı vasiyetnamenin tamamının miras bırakanın el yazısıyla yazılmış olması zorunludur (TMK m.538). Bilgisayar çıktısı veya daktilo ile yazılan belge el yazılı vasiyetname olarak kabul edilmez." },
      { question: "Vasiyetnameyi kimler düzenleyebilir?", answer: "Vasiyetname düzenleyebilmek için 15 yaşını doldurmuş ve ayırt etme gücüne sahip olmak gerekir (TMK m.502). Akıl hastalığı veya geçici bilinç kaybı dönemlerinde düzenlenen vasiyetnameler geçersiz sayılır." },
      { question: "Mirasçı vasiyetnamede tanık olabilir mi?", answer: "Hayır. Resmi vasiyetname düzenlenirken mirasçı ve vasiyet alacaklısı, bunların eşleri ve yakın akrabaları tanık olamaz (TMK m.536). Bu kural ihlal edilirse vasiyetname iptal edilebilir." },
      { question: "Vasiyetname hangi hallerde iptal edilir?", answer: "Vasiyetname; ehliyetsizlik, hata, hile veya korkutma halleriyle şekil koşullarına uyulmaması durumunda iptal edilebilir. İptal davası, vasiyetnamenin öğrenilmesinden itibaren 1 yıl, her halükarda açılmasından itibaren 10 yıl içinde açılmalıdır (TMK m.559-560)." },
      { question: "Sözlü vasiyetname her zaman kullanılabilir mi?", answer: "Hayır. Sözlü vasiyetname yalnızca yakın ölüm tehlikesi, salgın hastalık, savaş veya ulaşımın kesilmesi gibi olağanüstü hallerde yapılabilir (TMK m.539). Bu koşullar ortadan kalktıktan sonra 1 ay içinde resmi veya el yazılı vasiyetname düzenlenmezse sözlü vasiyetname geçersiz olur." },
    ],
    content: `
<div class="stat-grid">
  <div class="stat-box">
    <div class="stat-number">3 Tür</div>
    <div class="stat-label">Türk hukukunda geçerli vasiyetname şekli</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">2 Tanık</div>
    <div class="stat-label">Resmi vasiyetname için zorunlu tanık sayısı</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">15 Yaş</div>
    <div class="stat-label">Vasiyetname düzenleyebilmek için asgari yaş <span class="law-ref">TMK m.502</span></div>
  </div>
</div>

<h2>Vasiyetname Nedir?</h2>
<p>
  Vasiyetname, bir kişinin ölümünden sonra malvarlığının nasıl paylaşılacağını, kimin ne alacağını veya belirli görevlerin nasıl yerine getirileceğini önceden belirlediği tek taraflı bir hukuki işlemdir. Türk Medeni Kanunu (TMK) üç farklı vasiyetname türü düzenlemektedir.
</p>
<p>
  Vasiyetname düzenlenebilmesi için kişinin <span class="law-ref">TMK m.502</span> uyarınca 15 yaşını doldurmuş ve ayırt etme gücüne sahip olması gerekir.
</p>

<h2>Vasiyetname Türleri Karşılaştırması</h2>
<table>
  <thead>
    <tr>
      <th>Tür</th>
      <th>TMK Maddesi</th>
      <th>Şekil Koşulu</th>
      <th>Ne Zaman Kullanılır?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Resmi Vasiyetname</td>
      <td>TMK m.531-537</td>
      <td>Noter + 2 tanık</td>
      <td>Her zaman</td>
    </tr>
    <tr>
      <td>El Yazılı Vasiyetname</td>
      <td>TMK m.538</td>
      <td>Tamamı el yazısı, tarihli, imzalı</td>
      <td>Her zaman</td>
    </tr>
    <tr>
      <td>Sözlü Vasiyetname</td>
      <td>TMK m.539</td>
      <td>2 tanık + 1 ay içinde tescil</td>
      <td>Yalnızca olağanüstü hallerde</td>
    </tr>
  </tbody>
</table>

<h2>El Yazılı Vasiyetname Nasıl Yazılır?</h2>
<p>
  El yazılı vasiyetname, şeklen en basit görünen ancak en çok hata yapılan türdür. <span class="law-ref">TMK m.538</span> uyarınca geçerli olabilmesi için şu koşulların tamamının karşılanması gerekir:
</p>
<ul>
  <li>Vasiyetnamenin tamamı miras bırakanın kendi el yazısıyla yazılmış olmalıdır (bilgisayar çıktısı geçersizdir)</li>
  <li>Gün, ay ve yılı belirten tarih el yazısıyla yazılmış olmalıdır</li>
  <li>Vasiyetname miras bırakanın imzasıyla bitirilmelidir</li>
</ul>

<div class="note-box">
  <strong>Sık Yapılan Hata:</strong> Vasiyetnamenin bir bölümünün bilgisayarda yazılıp yalnızca imzalanması, belgenin tamamının el yazılı sayılmasını engeller. Bu durumda vasiyetname şeklen geçersiz olabilir.
</div>

<h2>Resmi Vasiyetname Nasıl Yapılır?</h2>
<div class="process-steps">
  <div class="process-step">
    <div class="step-num">1</div>
    <div class="step-text">
      <strong>Notere Başvuru</strong>
      Miras bırakan noter huzurunda vasiyetnamenin içeriğini bildirir. Noterin bunu yazılı hale getirmesi ya da miras bırakanın hazırladığı metni teslim etmesi mümkündür.
    </div>
  </div>
  <div class="process-step">
    <div class="step-num">2</div>
    <div class="step-text">
      <strong>Noterlik Onayı ve İki Tanık</strong>
      Vasiyetname noter tarafından okunur, miras bırakan onaylar ve iki tanık huzurunda imzalanır. Tanıklar okur-yazar olmak zorundadır.
    </div>
  </div>
  <div class="process-step">
    <div class="step-num">3</div>
    <div class="step-text">
      <strong>Saklanması</strong>
      Resmi vasiyetname noter sicilinde saklanır. İstenirse sulh hukuk mahkemesine de bırakılabilir.
    </div>
  </div>
</div>

<div class="highlight-box">
  <strong>Tanık Yasağı</strong>
  <span class="law-ref">TMK m.536</span> uyarınca vasiyetnameyle kazanım sağlayan kişiler, bunların eşleri ve belirli dereceye kadar hısımları tanık olamaz. Bu kurala aykırılık vasiyetnamenin iptaline neden olabilir.
</div>

<h2>Vasiyetname Hangi Hallerde Geçersiz Sayılır?</h2>
<ul>
  <li>Şekil koşullarına uyulmaması (tarih, imza, el yazısı eksiklikleri)</li>
  <li>Düzenleme anında ayırt etme gücünün bulunmaması</li>
  <li>Hile, korkutma veya yanıltma ile yapılmış olması</li>
  <li>Saklı pay kurallarının ihlal edilmesi (tenkis davası açılabilir)</li>
  <li>Tanıklara ilişkin yasak kurallarının çiğnenmesi</li>
</ul>
<p>
  Vasiyetnamenin iptali için açılacak davanın, vasiyetnamenin öğrenilmesinden itibaren 1 yıl ve her halükarda açılmasından itibaren 10 yıl içinde açılması gerekir (<span class="law-ref">TMK m.559-560</span>).
</p>

<h2>Sıkça Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">El yazılı vasiyetname bilgisayarda yazılabilir mi?</p>
  <p class="faq-answer">Hayır. El yazılı vasiyetnamenin tamamının miras bırakanın el yazısıyla yazılmış olması zorunludur (TMK m.538). Bilgisayar çıktısı veya daktilo ile yazılan belge el yazılı vasiyetname olarak kabul edilmez.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Vasiyetnameyi kimler düzenleyebilir?</p>
  <p class="faq-answer">Vasiyetname düzenleyebilmek için 15 yaşını doldurmuş ve ayırt etme gücüne sahip olmak gerekir (TMK m.502). Akıl hastalığı veya geçici bilinç kaybı dönemlerinde düzenlenen vasiyetnameler geçersiz sayılır.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Mirasçı vasiyetnamede tanık olabilir mi?</p>
  <p class="faq-answer">Hayır. Resmi vasiyetname düzenlenirken mirasçı ve vasiyet alacaklısı, bunların eşleri ve yakın akrabaları tanık olamaz (TMK m.536). Bu kural ihlal edilirse vasiyetname iptal edilebilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Vasiyetname hangi hallerde iptal edilir?</p>
  <p class="faq-answer">Vasiyetname; ehliyetsizlik, hata, hile veya korkutma halleriyle şekil koşullarına uyulmaması durumunda iptal edilebilir. İptal davası, vasiyetnamenin öğrenilmesinden itibaren 1 yıl, her halükarda açılmasından itibaren 10 yıl içinde açılmalıdır.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Sözlü vasiyetname her zaman kullanılabilir mi?</p>
  <p class="faq-answer">Hayır. Sözlü vasiyetname yalnızca yakın ölüm tehlikesi, salgın hastalık veya ulaşımın kesilmesi gibi olağanüstü hallerde yapılabilir (TMK m.539). Bu koşullar ortadan kalktıktan sonra 1 ay içinde yazılı vasiyetname düzenlenmezse sözlü vasiyetname geçersiz olur.</p>
</div>
    `,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
