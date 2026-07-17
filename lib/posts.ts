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
    faq: [
      { question: "Her suçta etkin pişmanlık mümkün mü?", answer: "Hayır. Etkin pişmanlık yalnızca TCK'da ve özel ceza kanunlarında açıkça düzenlenen suç tiplerinde uygulanır. Kasten öldürme, yaralama gibi suçlarda bu hüküm doğrudan geçerli değildir; bu tür suçlarda pişmanlık belirli koşullarla takdiri indirim sebebi sayılabilir." },
      { question: "Etkin pişmanlık beyanı ne zaman yapılmalıdır?", answer: "Beyan ne kadar erken yapılırsa indirim oranı genellikle o kadar yüksek olur. Kovuşturma başlamadan önce yapılan başvurularda daha yüksek indirim öngörülmüştür." },
      { question: "İfade verirken avukat olmadan etkin pişmanlık beyanında bulunabilir miyim?", answer: "Hukuken mümkün olmakla birlikte, içeriği hatalı şekillendirilen ya da koşulları sağlamayan bir beyan, sanık aleyhine sonuç doğurabilecek bilgi açıklamalarına zemin hazırlayabilir. Bu nedenle herhangi bir beyandan önce avukatınıza danışmanız önerilir." },
    ],
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
    faq: [
      { question: "Anlaşmalı boşanmada velayet nasıl belirlenir?", answer: "Anlaşmalı boşanmada eşler velayete ilişkin düzenlemeyi protokolde belirleyebilir. Hakim, protokolü çocuğun yararı açısından denetler ve uygun bulması halinde onaylar." },
      { question: "Müşterek velayet mümkün mü?", answer: "Türk hukukunda boşanma kararıyla birlikte müşterek velayet yasal olarak mümkündür; ancak uygulamada nadir görülür. Mahkemeler, çocuğun istikrarını esas alarak genellikle velayeti tek ebeveyne verir." },
      { question: "Çocuk başka şehirde yaşıyorsa ne olur?", answer: "Velayetin bulunduğu şehir dikkate alınarak yetkili aile mahkemesi belirlenir. Çocuğun farklı bir ilde bulunması, kişisel ilişki ve nafaka düzenlemelerini karmaşık hale getirebilir; her koşul somut olarak değerlendirilir." },
    ],
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
    faq: [
      { question: "İstifa ederek kıdem tazminatı alınabilir mi?", answer: "Haklı sebeple (İK m.24) istifa edilmesi, emeklilik için ayrılma veya evlilik nedeniyle 1 yıl içinde ayrılma halleri dışında sıradan istifa durumunda kıdem tazminatı hakkı doğmaz." },
      { question: "Kıdem tazminatı vergiye tabi mi?", answer: "Kıdem tazminatı yasal tavan içindeki kısım gelir vergisinden muaftır. Tavanı aşan kısım ise gelir vergisine tabidir." },
      { question: "İşveren ödeme yapmıyorsa ne yapılır?", answer: "İşveren kıdem tazminatını ödemiyorsa arabuluculuk başvurusu zorunlu bir ön koşuldur. Arabuluculukta anlaşma sağlanamaması durumunda iş mahkemesinde dava açılabilir. Ödeme yapılmaması halinde gecikme faizi de talep edilebilir." },
    ],
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
    faq: [
      { question: "Belirli süreli kira sözleşmesi sona erince kiracı çıkarılabilir mi?", answer: "TBK m. 347 uyarınca belirsiz süreli kira sözleşmelerinin aksine, konut ve çatılı işyeri kiralarında belirli sürenin dolması kiraya verene tahliye hakkı vermez. Kiracı, sözleşme bitiminden 15 gün önce bildirimde bulunmazsa sözleşme yenilenmiş sayılır. Tahliye için özel sebeplerin varlığı gerekir." },
      { question: "Tahliye davası ne kadar sürer?", answer: "Tahliye davalarının süresi mahkemenin iş yüküne, uyuşmazlığın niteliğine ve itirazlara göre farklılık gösterir. Sulh hukuk mahkemelerinde görülen bu davalar ortalama 6-18 ay sürebilir." },
      { question: "İcra yoluyla tahliye hangi hallerde mümkündür?", answer: "Tahliye taahhütnamesinin varlığında veya kira bedelinin ödenmemesi durumunda icra yoluyla tahliye mümkündür. Diğer hallerde dava açılması gerekir." },
    ],
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
    faq: [
      { question: "Miras bırakan tüm mal varlığını bir kişiye bırakabilir mi?", answer: "Saklı pay mirasçısı yoksa miras bırakan mal varlığını dilediği kişiye bırakabilir. Saklı pay mirasçısı varsa, saklı pay sınırı içindeki tasarruf hakkı güvenceli olmakla birlikte aşan kısım tenkise konu olabilir." },
      { question: "Miras reddedilirse saklı pay hakkı kaybolur mu?", answer: "Evet. Mirası reddeden kişi mirasçılık sıfatını yitirir ve buna bağlı olarak saklı pay talep hakkı da ortadan kalkar." },
      { question: "Sağlığında yapılan bağışlar tenkise konu olabilir mi?", answer: "TMK madde 565 kapsamında belirli bağışlar (ölüme bağlı tasarruf niteliğindekiler, son 1 yıl içinde yapılan bağışlar, salt saklı payı aşmak amacıyla yapıldığı kanıtlanan bağışlar) tenkise konu olabilir." },
    ],
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
    faq: [
      { question: "Sözleşmeden dönme ile fesih arasındaki fark nedir?", answer: "Dönme, sözleşmeyi geriye etkili olarak sona erdirir; taraflar aldıklarını iade eder. Fesih ise sözleşmeyi ileriye etkili olarak bitirir; geçmişteki edimler iade edilmez. Anlık edim sözleşmelerinde (satım, kira) dönme, sürekli edim sözleşmelerinde (iş, vekalet) ise fesih söz konusu olur." },
      { question: "Tazminat istenmeden yalnızca sözleşmeden dönülebilir mi?", answer: "Evet. Dönme hakkı tazminat talebinden bağımsız olarak kullanılabilir. Ancak dönme ile birlikte olumsuz zarar talep edilmesi de mümkündür." },
      { question: "Dönme beyanının şekli var mıdır?", answer: "TBK genel olarak şekil şartı öngörmemiştir. Ancak ispat güçlüğü yaşanmaması için noter kanalıyla ya da iadeli taahhütlü posta ile yazılı beyan gönderilmesi önerilir." },
      { question: "Ayıptan doğan dönme hakkı zamanaşımına uğrar mı?", answer: "Evet. TBK madde 231 uyarınca taşınır satımında ayıptan doğan talepler, ayıbın bildiriminden itibaren 2 yıllık zamanaşımına tabidir. Taşınmaz satımında bu süre 5 yıldır." },
      { question: "Karşılıklı borç sözleşmelerinde ifa imkansızlaşırsa ne olur?", answer: "Sonraki imkansızlık halinde TBK madde 136 uygulanır; borçlu kusursuz imkansızlık halinde borçtan kurtulur. Alacaklı da karşı edimden kaçınabilir ve önceden verdiklerini sebepsiz zenginleşme hükümleri uyarınca geri isteyebilir." },
    ],
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
    faq: [
      { question: "30'dan az işçi çalışan bir iş yerinde işten çıkarıldım, işe iade davası açabilir miyim?", answer: "İş güvencesi hükümleri 30'dan az işçi çalıştıran iş yerlerine uygulanmaz. Bu durumda kıdem ve ihbar tazminatı ile diğer işçilik alacakları talep edilebilir; ancak işe iade yoluna gidilemez." },
      { question: "Geçici iş ilişkisiyle çalışanlar işe iade davası açabilir mi?", answer: "Geçici iş ilişkisinde asıl işveren ile işçi arasında doğrudan bir iş sözleşmesi bulunmadığından işe iade davası genel olarak asıl işverene karşı açılamaz. Geçici iş ilişkisi kuran işverene karşı koşulların oluşup oluşmadığı somut duruma göre değerlendirilir." },
      { question: "Deneme süresinde işten çıkarıldım, işe iade davası açabilir miyim?", answer: "Deneme süresi içinde yapılan fesihlerde iş güvencesi hükümleri uygulanmaz; dolayısıyla bu dönemde işe iade davası açılamaz." },
      { question: "İşe iade kararı kesinleşmeden önce işçi başka bir iş yerinde çalışabilir mi?", answer: "Çalışılabilir. Ancak başka bir iş yerinde çalışıldığına dair kanıt olması halinde boşta geçen süre tazminatı bu süreyle sınırlandırılabilir. Mahkeme somut koşulları değerlendirir." },
      { question: "Arabuluculukta anlaşırsak ne alırım?", answer: "Arabuluculuk aşamasında taraflar serbestçe müzakere eder. İşçi, işe iade yerine belirli bir tazminat miktarında uzlaşmayı tercih edebilir. Bu tutarın herhangi bir yasal üst sınırı yoktur; tarafların mutabakatına bağlıdır." },
    ],
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
  {
    slug: "icra-takibi-ve-borca-itiraz",
    title: "İcra Takibi ve Borca İtiraz: Alacaklı ve Borçlu Açısından Süreç",
    date: "2026-07-12",
    dateFormatted: "12 Temmuz 2026",
    excerpt:
      "İlamlı ve ilamsız icra takibi arasındaki farklar, ödeme emrine itiraz süresi ve usulü, itirazın iptali ile itirazın kaldırılması yolları hakkında kapsamlı bilgi.",
    category: "Borçlar Hukuku",
    readingTime: 8,
    faq: [
      { question: "Ödeme emrine itiraz süresi kaçırılırsa ne olur?", answer: "7 günlük süre içinde itiraz edilmezse takip kesinleşir ve alacaklı haciz talep edebilir; borca itiraz hakkı kural olarak kaybedilir." },
      { question: "İtirazın iptali davası ile itirazın kaldırılması arasındaki fark nedir?", answer: "İtirazın iptali genel mahkemede açılan bir dava türüyken, itirazın kaldırılması icra mahkemesinde daha basit yargılama usulüyle görülen bir yoldur; başvuru için elde belirli nitelikte belge bulunması gerekir." },
      { question: "İcra takibine itiraz etmek takibi tamamen durdurur mu?", answer: "Evet, süresi içinde yapılan itiraz takibi kendiliğinden durdurur; alacaklının itirazın iptali veya kaldırılması yoluna başvurması gerekir." },
      { question: "Borçlu mal beyanında bulunmazsa ne olur?", answer: "Süresinde mal beyanında bulunmayan borçlu hakkında icra mahkemesine şikayet yoluyla disiplin hapsi talep edilebilir." },
      { question: "Haksız icra takibine karşı tazminat istenebilir mi?", answer: "Takibin haksız ve kötüniyetli olduğu ispatlanırsa, borçlu icra inkar tazminatı veya kötüniyet tazminatı talep edebilir." },
    ],
    content: `
<div class="stat-grid">
  <div class="stat-box">
    <div class="stat-number">7 Gün</div>
    <div class="stat-label">Ödeme emrine itiraz süresi <span class="law-ref">İİK m.62</span></div>
  </div>
  <div class="stat-box">
    <div class="stat-number">7 Gün</div>
    <div class="stat-label">İtiraz etmeyen borçlunun mal beyanı süresi</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">1 Yıl</div>
    <div class="stat-label">İtirazın iptali davası açma süresi <span class="law-ref">İİK m.67</span></div>
  </div>
</div>

<h2>İcra Takibi Nedir?</h2>
<p>
  İcra takibi, bir alacağın devlet gücü kullanılarak zorla tahsil edilmesi amacıyla başlatılan
  hukuki bir süreçtir. Alacaklı, icra dairesine başvurarak borçlu hakkında takip başlatabilir;
  bu süreç 2004 sayılı İcra ve İflas Kanunu (İİK) hükümlerine tabidir.
</p>

<h2>İlamlı ve İlamsız İcra Takibi Arasındaki Fark</h2>
<table>
  <thead>
    <tr>
      <th>Özellik</th>
      <th>İlamlı İcra</th>
      <th>İlamsız İcra</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dayanak</td>
      <td>Mahkeme ilamı veya ilam niteliğindeki belge</td>
      <td>Herhangi bir belgeye gerek yoktur</td>
    </tr>
    <tr>
      <td>İtiraz imkanı</td>
      <td>Sınırlıdır (icranın geri bırakılması)</td>
      <td>7 gün içinde serbestçe itiraz edilebilir</td>
    </tr>
    <tr>
      <td>İtirazın etkisi</td>
      <td>Takibi kendiliğinden durdurmaz</td>
      <td>Takibi kendiliğinden durdurur</td>
    </tr>
  </tbody>
</table>

<h2>Ödeme Emrine İtiraz Nasıl Yapılır?</h2>
<p>
  İlamsız icra takibinde borçluya gönderilen ödeme emrinin tebliğinden itibaren 7 gün içinde
  icra dairesine yazılı veya sözlü beyanla itiraz edilebilir. İtiraz, borcun tamamına veya bir
  kısmına, ayrıca imzaya (borçlu senedin altındaki imzayı kabul etmiyorsa) yönelik olabilir.
</p>
<div class="process-steps">
  <div class="process-step">
    <div class="step-num">1</div>
    <div class="step-text"><strong>Ödeme Emrinin Tebliği</strong>İcra dairesi tarafından düzenlenen ödeme emri borçluya tebliğ edilir.</div>
  </div>
  <div class="process-step">
    <div class="step-num">2</div>
    <div class="step-text"><strong>İtiraz Dilekçesinin Hazırlanması</strong>Borca veya imzaya itiraz gerekçesi belirtilir.</div>
  </div>
  <div class="process-step">
    <div class="step-num">3</div>
    <div class="step-text"><strong>İcra Dairesine Başvuru</strong>İtiraz, 7 günlük süre içinde icra dairesine bildirilir.</div>
  </div>
  <div class="process-step">
    <div class="step-num">4</div>
    <div class="step-text"><strong>Takibin Durması</strong>Süresinde yapılan itiraz üzerine takip kendiliğinden durur.</div>
  </div>
</div>

<div class="highlight-box">
  <strong>Süre Uyarısı</strong>
  7 günlük itiraz süresi hak düşürücü niteliktedir. Süre geçirildikten sonra yapılan itirazlar
  dikkate alınmaz ve takip kesinleşerek haciz aşamasına geçilebilir.
</div>

<h2>İtirazın İptali ve İtirazın Kaldırılması</h2>
<p>
  Borçlunun itirazı üzerine duran takibe devam edebilmek için alacaklının iki yoldan birini
  seçmesi gerekir:
</p>
<ul>
  <li><strong>İtirazın iptali davası:</strong> Genel mahkemede açılan, itirazın haksızlığının tam yargılamayla tespit edildiği bir davadır. İtirazın tebliğinden itibaren 1 yıl içinde açılmalıdır.</li>
  <li><strong>İtirazın kaldırılması:</strong> Alacaklının elinde imzası ikrar edilmiş bir belge veya kambiyo senedi (çek, senet, poliçe) varsa icra mahkemesinde daha hızlı işleyen bu yola başvurulabilir.</li>
</ul>

<h2>Borca İtiraz Sonrası Süreç Nasıl İşler?</h2>
<p>
  İtiraz kesin bir çözüm değil, sürecin bir aşamasıdır. Alacaklı itirazın iptali veya kaldırılması
  yoluna başvurmazsa takip fiilen sona erer. Yargılama sonucunda itirazın haksız bulunması halinde
  borçlu, alacağın belirli bir oranı kadar icra inkar tazminatına mahkum edilebilir.
</p>

<h2>Sık Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">Ödeme emrine itiraz süresi kaçırılırsa ne olur?</p>
  <p class="faq-answer">7 günlük süre içinde itiraz edilmezse takip kesinleşir ve alacaklı haciz talep edebilir; borca itiraz hakkı kural olarak kaybedilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">İtirazın iptali davası ile itirazın kaldırılması arasındaki fark nedir?</p>
  <p class="faq-answer">İtirazın iptali genel mahkemede açılan bir dava türüyken, itirazın kaldırılması icra mahkemesinde daha basit yargılama usulüyle görülen bir yoldur; başvuru için elde belirli nitelikte belge bulunması gerekir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">İcra takibine itiraz etmek takibi tamamen durdurur mu?</p>
  <p class="faq-answer">Evet, süresi içinde yapılan itiraz takibi kendiliğinden durdurur; alacaklının itirazın iptali veya kaldırılması yoluna başvurması gerekir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Borçlu mal beyanında bulunmazsa ne olur?</p>
  <p class="faq-answer">Süresinde mal beyanında bulunmayan borçlu hakkında icra mahkemesine şikayet yoluyla disiplin hapsi talep edilebilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Haksız icra takibine karşı tazminat istenebilir mi?</p>
  <p class="faq-answer">Takibin haksız ve kötüniyetli olduğu ispatlanırsa, borçlu icra inkar tazminatı veya kötüniyet tazminatı talep edebilir.</p>
</div>
    `,
  },
  {
    slug: "ortakligin-giderilmesi-davasi",
    title: "Ortaklığın Giderilmesi (İzale-i Şüyu) Davası Nasıl Açılır?",
    date: "2026-07-11",
    dateFormatted: "11 Temmuz 2026",
    excerpt:
      "Paylı veya elbirliği mülkiyetindeki bir taşınmazda ortaklığın giderilmesi davası nasıl açılır, aynen taksim ile satış yoluyla giderilme arasındaki fark ve satış sürecinde malın değerinin korunması.",
    category: "Gayrimenkul Hukuku",
    readingTime: 7,
    faq: [
      { question: "Ortaklığın giderilmesi davasını kimler açabilir?", answer: "Paylı veya elbirliği mülkiyetindeki taşınmazın paydaşlarından her biri, diğer paydaşlara karşı bu davayı açabilir." },
      { question: "Aynen taksim her zaman mümkün müdür?", answer: "Hayır. Taşınmazın fiziksel olarak bölünmesi mümkün değilse veya bölünme değerinde önemli azalmaya yol açacaksa mahkeme satış yoluyla giderilmeye karar verir." },
      { question: "Satış hangi yöntemle yapılır?", answer: "Kural olarak açık artırma yoluyla yapılır; paydaşlar kendi aralarında pazarlıkla satışı da kararlaştırabilir." },
      { question: "Kıymet takdirine itiraz edilebilir mi?", answer: "Evet, bilirkişi tarafından belirlenen değere karşı, raporun tebliğinden itibaren yasal süre içinde itiraz edilebilir." },
      { question: "Dava süresince taşınmazın satılması engellenebilir mi?", answer: "Davanın açılmasıyla birlikte taşınmaz üzerine tapuya şerh konulması talep edilerek üçüncü kişilere satışın önüne geçilebilir." },
    ],
    content: `
<div class="stat-grid">
  <div class="stat-box">
    <div class="stat-number">Sulh Hukuk</div>
    <div class="stat-label">Görevli mahkeme <span class="law-ref">TMK m.699</span></div>
  </div>
  <div class="stat-box">
    <div class="stat-number">2</div>
    <div class="stat-label">Giderilme yöntemi: aynen taksim veya satış</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">Bilirkişi</div>
    <div class="stat-label">Değer tespiti mahkemece atanan bilirkişilerce yapılır</div>
  </div>
</div>

<h2>Ortaklığın Giderilmesi Davası Nedir?</h2>
<p>
  Ortaklığın giderilmesi (izale-i şüyu) davası, paylı mülkiyet veya elbirliği mülkiyetine konu
  bir taşınmaz ya da taşınırdaki ortaklığın sona erdirilmesi amacıyla açılan bir davadır.
  Miras yoluyla birden fazla kişiye geçen taşınmazlarda veya birlikte satın alınan mülklerde
  sıkça başvurulan bir yoldur. Görevli mahkeme sulh hukuk mahkemesidir.
</p>

<h2>Aynen Taksim ile Satış Yoluyla Giderilme Arasındaki Fark</h2>
<table>
  <thead>
    <tr>
      <th>Yöntem</th>
      <th>Uygulandığı Durum</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Aynen taksim</td>
      <td>Taşınmaz, değerinde önemli bir azalma olmaksızın fiziksel olarak paylara bölünebiliyorsa uygulanır.</td>
    </tr>
    <tr>
      <td>Satış yoluyla giderilme</td>
      <td>Fiziksel bölünme mümkün değilse veya paydaşlar taksimde anlaşamıyorsa, taşınmaz satılarak bedeli paydaşlar arasında paylaştırılır.</td>
    </tr>
  </tbody>
</table>
<p>
  Uygulamada, özellikle konut ve işyerlerinde fiziksel bölünme çoğunlukla mümkün olmadığından
  satış yoluyla giderilme daha sık uygulanan yöntemdir.
</p>

<h2>Satış Sürecinde Malın Değerinin Korunması</h2>
<p>
  Satış kararı verildiğinde taşınmazın değeri, mahkemece atanan bilirkişiler tarafından tespit
  edilir. Bu kıymet takdirine karşı ilgililer, raporun tebliğinden itibaren yasal süre içinde
  itiraz edebilir. Satışın rayiç değerin altında gerçekleşmesi, paydaşların zarar görmesine yol
  açabileceğinden kıymet takdiri aşamasının doğru şekilde takip edilmesi önem taşır.
</p>
<div class="highlight-box">
  <strong>Düşük Bedelle Satış Riski</strong>
  Kıymet takdirine süresinde itiraz edilmemesi veya satış ilanı ve ihale sürecindeki usul
  hatalarının fark edilmemesi, taşınmazın gerçek değerinin altında satılmasına yol açabilir.
  İhalenin feshi davası bu tür usulsüzlüklere karşı başvurulabilecek bir yoldur.
</div>

<h2>Dava Süreci Nasıl İşler?</h2>
<div class="process-steps">
  <div class="process-step">
    <div class="step-num">1</div>
    <div class="step-text"><strong>Dava Açılması</strong>Taşınmazın bulunduğu yer sulh hukuk mahkemesinde dava açılır.</div>
  </div>
  <div class="process-step">
    <div class="step-num">2</div>
    <div class="step-text"><strong>Taksim İmkanının Değerlendirilmesi</strong>Mahkeme, aynen taksimin mümkün olup olmadığını bilirkişi aracılığıyla inceler.</div>
  </div>
  <div class="process-step">
    <div class="step-num">3</div>
    <div class="step-text"><strong>Kıymet Takdiri</strong>Satışa karar verilirse taşınmazın güncel değeri tespit edilir.</div>
  </div>
  <div class="process-step">
    <div class="step-num">4</div>
    <div class="step-text"><strong>Satış ve Paylaştırma</strong>İhale yoluyla satış gerçekleştirilir, bedel paydaşlar arasında pay oranına göre dağıtılır.</div>
  </div>
</div>

<h2>Sık Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">Ortaklığın giderilmesi davasını kimler açabilir?</p>
  <p class="faq-answer">Paylı veya elbirliği mülkiyetindeki taşınmazın paydaşlarından her biri, diğer paydaşlara karşı bu davayı açabilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Aynen taksim her zaman mümkün müdür?</p>
  <p class="faq-answer">Hayır. Taşınmazın fiziksel olarak bölünmesi mümkün değilse veya bölünme değerinde önemli azalmaya yol açacaksa mahkeme satış yoluyla giderilmeye karar verir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Satış hangi yöntemle yapılır?</p>
  <p class="faq-answer">Kural olarak açık artırma yoluyla yapılır; paydaşlar kendi aralarında pazarlıkla satışı da kararlaştırabilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Kıymet takdirine itiraz edilebilir mi?</p>
  <p class="faq-answer">Evet, bilirkişi tarafından belirlenen değere karşı, raporun tebliğinden itibaren yasal süre içinde itiraz edilebilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Dava süresince taşınmazın satılması engellenebilir mi?</p>
  <p class="faq-answer">Davanın açılmasıyla birlikte taşınmaz üzerine tapuya şerh konulması talep edilerek üçüncü kişilere satışın önüne geçilebilir.</p>
</div>
    `,
  },
  {
    slug: "bosanma-sureci-bilinmesi-gerekenler",
    title: "Boşanma Süreci: Aşamalar, Gerekli Belgeler ve Süre",
    date: "2026-07-09",
    dateFormatted: "9 Temmuz 2026",
    excerpt:
      "Anlaşmalı ve çekişmeli boşanma süreçleri hangi aşamalardan oluşur, hangi belgeler gerekir, dava ne kadar sürer? Boşanma sürecinin bütününe dair pratik bilgiler.",
    category: "Aile Hukuku",
    readingTime: 8,
    faq: [
      { question: "Anlaşmalı boşanma ile çekişmeli boşanma arasındaki temel fark nedir?", answer: "Anlaşmalı boşanmada taraflar tüm sonuçlar üzerinde mutabıktır ve tek celsede sonuçlanabilir; çekişmeli boşanmada taraflar anlaşamaz ve deliller üzerinden yargılama yapılır." },
      { question: "Boşanma davası açmak için evlilik süresi şartı var mı?", answer: "Anlaşmalı boşanma için evliliğin en az 1 yıl sürmüş olması gerekir; çekişmeli boşanmada böyle bir süre şartı aranmaz." },
      { question: "Boşanma davası hangi mahkemede açılır?", answer: "Eşlerden birinin yerleşim yeri veya davadan önceki son 6 aydır birlikte oturulan yer aile mahkemesinde açılır." },
      { question: "Boşanma kararı kesinleşince ne olur?", answer: "Evlilik birliği sona erer, kadının evlilik öncesi soyadını kullanma hakkı doğar ve mal rejimi tasfiyesi süreci başlayabilir." },
      { question: "Dava sırasında eşler ayrı yaşamak zorunda mı?", answer: "Zorunlu değildir, ancak uygulamada dava süresince ayrı yaşama tercih edilmektedir; şiddetli geçimsizlik hallerinde tedbir kararları da talep edilebilir." },
      { question: "Boşanma protokolü sonradan değiştirilebilir mi?", answer: "Kesinleşmiş protokol kural olarak bağlayıcıdır; ancak nafaka ve velayet gibi bazı hususlarda şartların değişmesi halinde ayrı davalarla güncelleme talep edilebilir." },
    ],
    content: `
<div class="stat-grid">
  <div class="stat-box">
    <div class="stat-number">1 Yıl</div>
    <div class="stat-label">Anlaşmalı boşanma için gereken minimum evlilik süresi</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">1-2 Celse</div>
    <div class="stat-label">Anlaşmalı boşanmada ortalama duruşma sayısı</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">Aile Mahkemesi</div>
    <div class="stat-label">Görevli mahkeme <span class="law-ref">TMK m.166 vd.</span></div>
  </div>
</div>

<h2>Boşanma Süreci Nasıl Başlar?</h2>
<p>
  Boşanma süreci, taraflardan birinin veya her ikisinin birlikte yetkili aile mahkemesine
  dava dilekçesi ya da anlaşmalı boşanma protokolüyle başvurmasıyla başlar. Sürecin nasıl
  ilerleyeceği büyük ölçüde tarafların anlaşmalı ya da çekişmeli bir yol izlemesine bağlıdır.
</p>

<h2>Anlaşmalı ve Çekişmeli Boşanma Karşılaştırması</h2>
<table>
  <thead>
    <tr>
      <th>Özellik</th>
      <th>Anlaşmalı Boşanma</th>
      <th>Çekişmeli Boşanma</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Süre şartı</td>
      <td>Evliliğin en az 1 yıl sürmüş olması gerekir</td>
      <td>Süre şartı aranmaz</td>
    </tr>
    <tr>
      <td>Duruşma sayısı</td>
      <td>Genellikle 1 celse</td>
      <td>Delil ve tanık durumuna göre birden fazla celse</td>
    </tr>
    <tr>
      <td>Temel belge</td>
      <td>Taraflarca imzalanmış protokol</td>
      <td>Dava dilekçesi ve deliller</td>
    </tr>
    <tr>
      <td>Ortalama süre</td>
      <td>Birkaç hafta - birkaç ay</td>
      <td>Mahkemenin iş yüküne göre değişmekle birlikte daha uzun sürebilir</td>
    </tr>
  </tbody>
</table>

<h2>Boşanma Davası İçin Gerekli Belgeler</h2>
<ul>
  <li>Kimlik belgesi ve nüfus kayıt örneği</li>
  <li>Evlilik cüzdanı fotokopisi</li>
  <li>Anlaşmalı boşanmada taraflarca imzalanmış protokol</li>
  <li>Çekişmeli boşanmada kusur ve taleplere ilişkin deliller (yazışmalar, tanık listesi, banka kayıtları vb.)</li>
  <li>Varsa mal rejimi tasfiyesine ilişkin belgeler (tapu, araç ruhsatı, hesap ekstresi)</li>
</ul>

<div class="highlight-box">
  <strong>Protokolün Kapsamı</strong>
  Anlaşmalı boşanma protokolünde velayet, nafaka, mal rejimi tasfiyesi ve tazminat gibi
  hususların tamamının açıkça düzenlenmesi gerekir. Eksik veya belirsiz bırakılan hususlar,
  hakimin protokolü onaylamamasına ve sürecin çekişmeli boşanmaya dönüşmesine yol açabilir.
</div>

<h2>Çekişmeli Boşanmada Süreç Nasıl İlerler?</h2>
<div class="process-steps">
  <div class="process-step">
    <div class="step-num">1</div>
    <div class="step-text"><strong>Dava Dilekçesinin Hazırlanması</strong>Boşanma sebebi, kusur iddiaları ve talepler (velayet, nafaka, tazminat) dilekçede belirtilir.</div>
  </div>
  <div class="process-step">
    <div class="step-num">2</div>
    <div class="step-text"><strong>Cevap Dilekçesi</strong>Davalı taraf, kendisine tebliğ edilen dilekçeye süresi içinde cevap verir.</div>
  </div>
  <div class="process-step">
    <div class="step-num">3</div>
    <div class="step-text"><strong>Delillerin Toplanması</strong>Tanık dinlenir, varsa bilirkişi (örneğin sosyal inceleme) raporu alınır.</div>
  </div>
  <div class="process-step">
    <div class="step-num">4</div>
    <div class="step-text"><strong>Karar</strong>Mahkeme, kusur, velayet, nafaka ve tazminat hususlarında kararını verir.</div>
  </div>
</div>

<h2>Boşanma Sonrası Süreç</h2>
<p>
  Boşanma kararının kesinleşmesiyle evlilik birliği sona erer. Bu aşamadan sonra nafaka ve
  velayet düzenlemeleri yürürlüğe girer, mal rejimi tasfiyesi ayrı bir dava konusu olabilir.
  Boşanmaya bağlı velayet ve nafaka konularındaki ayrıntılar site içindeki ilgili makalelerde
  ayrıca ele alınmaktadır.
</p>

<h2>Sık Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">Anlaşmalı boşanma ile çekişmeli boşanma arasındaki temel fark nedir?</p>
  <p class="faq-answer">Anlaşmalı boşanmada taraflar tüm sonuçlar üzerinde mutabıktır ve tek celsede sonuçlanabilir; çekişmeli boşanmada taraflar anlaşamaz ve deliller üzerinden yargılama yapılır.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Boşanma davası açmak için evlilik süresi şartı var mı?</p>
  <p class="faq-answer">Anlaşmalı boşanma için evliliğin en az 1 yıl sürmüş olması gerekir; çekişmeli boşanmada böyle bir süre şartı aranmaz.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Boşanma davası hangi mahkemede açılır?</p>
  <p class="faq-answer">Eşlerden birinin yerleşim yeri veya davadan önceki son 6 aydır birlikte oturulan yer aile mahkemesinde açılır.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Boşanma kararı kesinleşince ne olur?</p>
  <p class="faq-answer">Evlilik birliği sona erer, kadının evlilik öncesi soyadını kullanma hakkı doğar ve mal rejimi tasfiyesi süreci başlayabilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Dava sırasında eşler ayrı yaşamak zorunda mı?</p>
  <p class="faq-answer">Zorunlu değildir, ancak uygulamada dava süresince ayrı yaşama tercih edilmektedir; şiddetli geçimsizlik hallerinde tedbir kararları da talep edilebilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Boşanma protokolü sonradan değiştirilebilir mi?</p>
  <p class="faq-answer">Kesinleşmiş protokol kural olarak bağlayıcıdır; ancak nafaka ve velayet gibi bazı hususlarda şartların değişmesi halinde ayrı davalarla güncelleme talep edilebilir.</p>
</div>
    `,
  },
  {
    slug: "ziynet-esyasi-davasi",
    title: "Düğünde Takılan Ziynet Eşyası (Altın) Kimindir? Ziynet Alacağı Davası",
    date: "2026-07-08",
    dateFormatted: "8 Temmuz 2026",
    excerpt:
      "Düğünde takılan altın ve ziynet eşyaları boşanmada kime kalır? Ziynet alacağı davasının şartları, ispat yükü ve yerleşik Yargıtay içtihatları çerçevesinde uygulanan temel ilkeler.",
    category: "Aile Hukuku",
    readingTime: 7,
    faq: [
      { question: "Düğünde takılan altınlar kime aittir?", answer: "Yerleşik Yargıtay içtihatlarına göre, aksi ispat edilmedikçe düğünde takılan ziynet eşyalarının kadına ait olduğu kabul edilir." },
      { question: "Erkeğe takılan paralar (kolye, para) da bu kapsamda mıdır?", answer: "Doğrudan erkeğe takılan ziynetler kural olarak erkeğe ait sayılır; kime takıldığı taraflar ve tanık beyanlarıyla değerlendirilir." },
      { question: "Ziynet eşyası davası boşanma davasından ayrı açılabilir mi?", answer: "Evet, ziynet alacağı davası boşanma davasıyla birlikte açılabileceği gibi ayrı bir dava olarak da açılabilir." },
      { question: "Ziynetlerin evlilik sırasında bozdurulduğu iddia edilirse ne olur?", answer: "Ziynetlerin ailenin ortak ihtiyaçları için rızayla bozdurulduğunu ispat yükü, bunu iddia eden tarafa aittir." },
      { question: "Ziynet alacağı davasında zamanaşımı var mıdır?", answer: "Ziynet eşyası iadesi istihkak niteliğinde bir talep olduğundan, genel zamanaşımı süreleri saklı kalmak kaydıyla evlilik birliği içinde zamanaşımı işlemeyeceği kabul edilmektedir; kesin süre için somut olayın değerlendirilmesi gerekir." },
    ],
    content: `
<div class="stat-grid">
  <div class="stat-box">
    <div class="stat-number">Kadına Ait</div>
    <div class="stat-label">Yerleşik içtihatta temel karine</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">Ayrı Dava</div>
    <div class="stat-label">Boşanmadan bağımsız açılabilir</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">İspat</div>
    <div class="stat-label">Bozdurma/harcama iddiasını ileri süren ispatlamalıdır</div>
  </div>
</div>

<h2>Ziynet Eşyası Nedir?</h2>
<p>
  Ziynet eşyası; düğün, nişan veya benzeri törenlerde takılan altın, bilezik, kolye, yüzük gibi
  kıymetli eşyaları ifade eder. Türk hukukunda ziynet eşyaları, evlilik birliği içinde edinilen
  diğer mallardan farklı bir kabul görür ve boşanma sürecinde ayrı bir alacak kalemi olarak
  değerlendirilir.
</p>

<h2>Düğünde Takılan Altınlar Kime Aittir?</h2>
<p>
  Yerleşik Yargıtay içtihatlarında benimsenen temel ilke, aksi kanıtlanmadıkça düğünde takılan
  ziynet eşyalarının kim tarafından takıldığına bakılmaksızın kadına bağışlanmış sayılacağı
  yönündedir. Bu kabul, örf ve adet kurallarına dayanmaktadır; doğrudan erkeğe takılan ziynetler
  ise kural olarak erkeğe ait kabul edilir.
</p>

<div class="highlight-box">
  <strong>Aksi İspat Yükü</strong>
  Ziynet eşyalarının evlilik birliğinin ortak ihtiyaçları için harcandığı veya bozdurulduğu
  iddiası, bunu ileri süren tarafça (genellikle erkek eş) somut delillerle ispatlanmalıdır.
  Salt beyan bu karineyi çürütmeye yeterli görülmemektedir.
</div>

<h2>Ziynet Alacağı Davasının Şartları</h2>
<table>
  <thead>
    <tr>
      <th>Husus</th>
      <th>Açıklama</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dava türü</td>
      <td>Kişisel mala ilişkin istihkak (alacak) davasıdır, mal rejimi tasfiyesinden bağımsızdır</td>
    </tr>
    <tr>
      <td>Açılabileceği zaman</td>
      <td>Boşanma davasıyla birlikte veya ayrı bir dava olarak açılabilir</td>
    </tr>
    <tr>
      <td>İspat aracı</td>
      <td>Tanık beyanı, düğün fotoğraf ve videoları, örf ve adet</td>
    </tr>
    <tr>
      <td>Talep</td>
      <td>Ziynetin aynen iadesi veya bulunamıyorsa güncel bedelinin ödenmesi</td>
    </tr>
  </tbody>
</table>

<h2>Ziynet Eşyası Davasında İspat Süreci Nasıl İşler?</h2>
<div class="process-steps">
  <div class="process-step">
    <div class="step-num">1</div>
    <div class="step-text"><strong>Ziynetlerin Tespiti</strong>Düğünde takılan ziynetlerin türü ve miktarı tanık beyanı ve varsa görsellerle ortaya konur.</div>
  </div>
  <div class="process-step">
    <div class="step-num">2</div>
    <div class="step-text"><strong>Zilyetliğin Belirlenmesi</strong>Ziynetlerin dava tarihinde kimin elinde/zilyetliğinde olduğu değerlendirilir.</div>
  </div>
  <div class="process-step">
    <div class="step-num">3</div>
    <div class="step-text"><strong>Karşı İddiaların Değerlendirilmesi</strong>Bozdurma veya harcama iddiası ileri sürülmüşse buna ilişkin deliller incelenir.</div>
  </div>
  <div class="process-step">
    <div class="step-num">4</div>
    <div class="step-text"><strong>Karar</strong>Mahkeme, ziynetlerin aynen iadesine veya bedelinin ödenmesine karar verir.</div>
  </div>
</div>

<h2>Sık Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">Düğünde takılan altınlar kime aittir?</p>
  <p class="faq-answer">Yerleşik Yargıtay içtihatlarına göre, aksi ispat edilmedikçe düğünde takılan ziynet eşyalarının kadına ait olduğu kabul edilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Erkeğe takılan paralar (kolye, para) da bu kapsamda mıdır?</p>
  <p class="faq-answer">Doğrudan erkeğe takılan ziynetler kural olarak erkeğe ait sayılır; kime takıldığı taraflar ve tanık beyanlarıyla değerlendirilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Ziynet eşyası davası boşanma davasından ayrı açılabilir mi?</p>
  <p class="faq-answer">Evet, ziynet alacağı davası boşanma davasıyla birlikte açılabileceği gibi ayrı bir dava olarak da açılabilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Ziynetlerin evlilik sırasında bozdurulduğu iddia edilirse ne olur?</p>
  <p class="faq-answer">Ziynetlerin ailenin ortak ihtiyaçları için rızayla bozdurulduğunu ispat yükü, bunu iddia eden tarafa aittir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Ziynet alacağı davasında zamanaşımı var mıdır?</p>
  <p class="faq-answer">Ziynet eşyası iadesi istihkak niteliğinde bir talep olduğundan, genel zamanaşımı süreleri saklı kalmak kaydıyla evlilik birliği içinde zamanaşımı işlemeyeceği kabul edilmektedir; kesin süre için somut olayın değerlendirilmesi gerekir.</p>
</div>
    `,
  },
  {
    slug: "kira-bedeli-tespit-ve-uyarlama-davasi",
    title: "Kira Bedeli Tespit ve Uyarlama Davaları Arasındaki Fark",
    date: "2026-07-07",
    dateFormatted: "7 Temmuz 2026",
    excerpt:
      "Kira bedeli tespit davası ile uyarlama davası birbirinden farklı hukuki müesseselerdir. Hangi durumda hangi davanın açılacağı, artış sınırları ve süreç hakkında bilgi.",
    category: "Gayrimenkul Hukuku",
    readingTime: 7,
    faq: [
      { question: "Kira bedeli tespit davası ne zaman açılır?", answer: "Taraflar yeni dönem kira bedelinde anlaşamazsa veya sözleşmede artış oranı belirlenmemişse, güncel kira bedelinin tespiti için açılır." },
      { question: "5 yılını dolduran kira sözleşmelerinde farklı bir kural var mı?", answer: "Evet, 5 yılını dolduran kira ilişkilerinde hakim, TÜFE sınırına bağlı kalmaksızın taşınmazın rayiç bedelini de dikkate alarak kira bedelini belirleyebilir." },
      { question: "Kira uyarlama davası hangi hallerde açılır?", answer: "Sözleşme kurulduktan sonra öngörülemeyen olağanüstü bir durum nedeniyle edimler arasındaki dengenin katlanılamaz şekilde bozulması halinde açılabilir." },
      { question: "Tespit davası ile uyarlama davası birlikte açılabilir mi?", answer: "Farklı hukuki dayanaklara sahip olsalar da, somut olayın koşullarına göre taleplerin birlikte değerlendirilmesi mümkün olabilir." },
      { question: "Kira artış oranının sözleşmede yazılı olması tespit davasını engeller mi?", answer: "Sözleşmede geçerli bir artış oranı belirlenmişse, bu oran TÜFE artış oranını aşmadığı sürece geçerlidir ve tespit davasına gerek kalmayabilir." },
    ],
    content: `
<div class="stat-grid">
  <div class="stat-box">
    <div class="stat-number">TÜFE</div>
    <div class="stat-label">Kira artışında üst sınır <span class="law-ref">TBK m.344</span></div>
  </div>
  <div class="stat-box">
    <div class="stat-number">5 Yıl</div>
    <div class="stat-label">Rayiç bedel değerlendirmesi yapılabilecek süre</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">Olağanüstü Hal</div>
    <div class="stat-label">Uyarlama davasının temel şartı <span class="law-ref">TBK m.138</span></div>
  </div>
</div>

<h2>Kira Bedeli Tespit Davası Nedir?</h2>
<p>
  Kira bedeli tespit davası, yeni kira döneminde uygulanacak kira bedelinin belirlenmesi
  amacıyla açılan bir davadır. 6098 sayılı Türk Borçlar Kanunu'nun 344. maddesi uyarınca,
  konut ve çatılı işyeri kiralarında bir önceki yılın kira bedeli, tüketici fiyat endeksindeki
  (TÜFE) on iki aylık ortalamalara göre değişim oranını geçmeyecek şekilde artırılabilir.
</p>

<h2>Kira Bedeli Uyarlama Davası Nedir?</h2>
<p>
  Uyarlama davası ise TBK madde 138'de düzenlenen aşırı ifa güçlüğü hükmüne dayanır. Sözleşme
  kurulduktan sonra öngörülemeyen olağanüstü bir durum (örneğin ciddi ekonomik dalgalanmalar)
  nedeniyle edimler arasındaki denge, borçlunun aleyhine katlanılamayacak ölçüde bozulmuşsa
  hakimden sözleşmenin yeni koşullara uyarlanması istenebilir.
</p>

<h2>Tespit ile Uyarlama Davası Karşılaştırması</h2>
<table>
  <thead>
    <tr>
      <th>Özellik</th>
      <th>Tespit Davası</th>
      <th>Uyarlama Davası</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hukuki dayanak</td>
      <td>TBK m.344</td>
      <td>TBK m.138</td>
    </tr>
    <tr>
      <td>Amaç</td>
      <td>Yeni dönem kira bedelinin belirlenmesi</td>
      <td>Olağanüstü koşullar nedeniyle sözleşmenin yeniden dengelenmesi</td>
    </tr>
    <tr>
      <td>Sınır</td>
      <td>Kural olarak TÜFE oranı (5 yıl sonrasında rayiç bedel de dikkate alınabilir)</td>
      <td>Somut olayın koşullarına göre hakim takdir eder, sabit bir oran yoktur</td>
    </tr>
    <tr>
      <td>Uygulama sıklığı</td>
      <td>Her kira dönemi başında gündeme gelebilir</td>
      <td>İstisnai, öngörülemeyen durumlarla sınırlıdır</td>
    </tr>
  </tbody>
</table>

<div class="highlight-box">
  <strong>5 Yıllık Kira İlişkilerinde Özel Kural</strong>
  Beş yıldan uzun süredir devam eden veya beş yıldan sonra yenilenen kira sözleşmelerinde,
  hakim TÜFE artış oranıyla bağlı kalmaksızın taşınmazın durumunu, emsal kira bedellerini ve
  hakkaniyeti gözeterek kira bedelini belirleyebilir.
</div>

<h2>Dava Süreci Nasıl İşler?</h2>
<div class="process-steps">
  <div class="process-step">
    <div class="step-num">1</div>
    <div class="step-text"><strong>Talebin Belirlenmesi</strong>Yeni dönem kira bedelinin tespiti mi yoksa olağanüstü koşullar nedeniyle uyarlama mı isteneceği belirlenir.</div>
  </div>
  <div class="process-step">
    <div class="step-num">2</div>
    <div class="step-text"><strong>Emsal Araştırması</strong>Bölgedeki emsal kira bedelleri ve TÜFE verileri toplanır.</div>
  </div>
  <div class="process-step">
    <div class="step-num">3</div>
    <div class="step-text"><strong>Dava Açılması</strong>Taşınmazın bulunduğu yer sulh hukuk mahkemesinde dava açılır.</div>
  </div>
  <div class="process-step">
    <div class="step-num">4</div>
    <div class="step-text"><strong>Bilirkişi İncelemesi ve Karar</strong>Mahkeme, bilirkişi raporu doğrultusunda yeni kira bedelini belirler.</div>
  </div>
</div>

<h2>Sık Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">Kira bedeli tespit davası ne zaman açılır?</p>
  <p class="faq-answer">Taraflar yeni dönem kira bedelinde anlaşamazsa veya sözleşmede artış oranı belirlenmemişse, güncel kira bedelinin tespiti için açılır.</p>
</div>
<div class="faq-item">
  <p class="faq-question">5 yılını dolduran kira sözleşmelerinde farklı bir kural var mı?</p>
  <p class="faq-answer">Evet, 5 yılını dolduran kira ilişkilerinde hakim, TÜFE sınırına bağlı kalmaksızın taşınmazın rayiç bedelini de dikkate alarak kira bedelini belirleyebilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Kira uyarlama davası hangi hallerde açılır?</p>
  <p class="faq-answer">Sözleşme kurulduktan sonra öngörülemeyen olağanüstü bir durum nedeniyle edimler arasındaki dengenin katlanılamaz şekilde bozulması halinde açılabilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Tespit davası ile uyarlama davası birlikte açılabilir mi?</p>
  <p class="faq-answer">Farklı hukuki dayanaklara sahip olsalar da, somut olayın koşullarına göre taleplerin birlikte değerlendirilmesi mümkün olabilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Kira artış oranının sözleşmede yazılı olması tespit davasını engeller mi?</p>
  <p class="faq-answer">Sözleşmede geçerli bir artış oranı belirlenmişse, bu oran TÜFE artış oranını aşmadığı sürece geçerlidir ve tespit davasına gerek kalmayabilir.</p>
</div>
    `,
  },
  {
    slug: "muris-muvazaasi-nedir",
    title: "Muris Muvazaası Nedir? Mirasçıların Tapu İptal Davası Hakkı",
    date: "2026-07-06",
    dateFormatted: "6 Temmuz 2026",
    excerpt:
      "Mirasbırakanın, mirasçısını miras hakkından yoksun bırakmak amacıyla malını satış görünümü altında devretmesi muris muvazaası olarak adlandırılır. Bu durumda hangi dava açılabilir?",
    category: "Miras Hukuku",
    readingTime: 7,
    faq: [
      { question: "Muris muvazaası nedir?", answer: "Mirasbırakanın, mirasçısını miras hakkından yoksun bırakmak amacıyla asıl iradesi bağış olduğu halde tapuda satış gibi göstererek yaptığı devir işlemidir." },
      { question: "Muris muvazaasına dayalı dava kim tarafından açılabilir?", answer: "Mirasbırakanın yasal mirasçılarından her biri, miras payı oranında bu davayı açabilir." },
      { question: "Bu davada zamanaşımı var mıdır?", answer: "Muris muvazaasına dayalı tapu iptal davaları, kesin hükümsüzlük iddiasına dayandığından süreye tabi değildir; mirasbırakanın ölümünden uzun süre sonra da açılabilir." },
      { question: "Muris muvazaası ile tenkis davası aynı şey midir?", answer: "Hayır. Muvazaa davası işlemin tamamen geçersizliğini, tenkis davası ise saklı payı ihlal eden kısmın kısmen iptalini amaçlar; farklı hukuki temellere dayanırlar." },
      { question: "Devrin gerçek bir satış olduğu nasıl ispatlanır?", answer: "Devralan taraf, bedelin gerçekten ödendiğini banka kayıtları, tanık beyanları gibi delillerle ispatlayarak muvazaa iddiasını çürütebilir." },
    ],
    content: `
<div class="stat-grid">
  <div class="stat-box">
    <div class="stat-number">Süresiz</div>
    <div class="stat-label">Muvazaa davasında zamanaşımı uygulanmaz</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">Yasal Mirasçı</div>
    <div class="stat-label">Dava açma hakkına sahip kişi</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">Tapu İptali</div>
    <div class="stat-label">Davanın temel sonucu</div>
  </div>
</div>

<h2>Muris Muvazaası Nedir?</h2>
<p>
  Muris muvazaası, mirasbırakanın sağlığında, mirasçısını miras hakkından yoksun bırakmak
  amacıyla gerçek iradesi bağışlama olduğu halde bunu tapuda satış sözleşmesi gibi göstererek
  taşınmazını bir başkasına (genellikle mirasçılardan birine) devretmesi durumunu ifade eder.
  Bu, Türk hukukunda yerleşik içtihatlarla tanınan bir muvazaa (danışıklı işlem) türüdür.
</p>

<h2>Muris Muvazaasının Unsurları</h2>
<ul>
  <li>Mirasbırakan ile devralan arasında gerçek irade ile görünürdeki işlem arasında uyumsuzluk bulunmalıdır</li>
  <li>Devrin asıl amacı, diğer mirasçıları miras hakkından yoksun bırakmak olmalıdır</li>
  <li>Görünürdeki işlem (satış) ile gizli işlem (bağış) birbirinden farklı olmalıdır</li>
</ul>

<div class="highlight-box">
  <strong>Muvazaa ile Tenkis Davası Arasındaki Fark</strong>
  Muvazaa davası, işlemin baştan itibaren geçersiz (yok hükmünde) olduğunu ileri sürer ve
  tapu kaydının tamamen iptalini amaçlar. Tenkis davası ise geçerli bir kazandırmanın saklı
  payı aşan kısmının indirilmesini amaçlar. İki dava farklı hukuki temellere dayanır ve
  sonuçları da farklıdır.
</div>

<h2>Muris Muvazaası ile Tenkis Davası Karşılaştırması</h2>
<table>
  <thead>
    <tr>
      <th>Özellik</th>
      <th>Muris Muvazaası Davası</th>
      <th>Tenkis Davası</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dayanak</td>
      <td>İşlemin muvazaalı (danışıklı) olması</td>
      <td>Geçerli bir kazandırmanın saklı payı aşması</td>
    </tr>
    <tr>
      <td>Sonuç</td>
      <td>Tapu kaydının tamamen iptali</td>
      <td>Saklı payı aşan kısmın tenkisi (indirilmesi)</td>
    </tr>
    <tr>
      <td>Süre</td>
      <td>Zamanaşımına tabi değildir</td>
      <td>Belirli hak düşürücü sürelere tabidir</td>
    </tr>
  </tbody>
</table>

<h2>Dava Süreci Nasıl İşler?</h2>
<div class="process-steps">
  <div class="process-step">
    <div class="step-num">1</div>
    <div class="step-text"><strong>Devrin İncelenmesi</strong>Mirasbırakanın sağlığında yaptığı devir işlemi ve bedel durumu incelenir.</div>
  </div>
  <div class="process-step">
    <div class="step-num">2</div>
    <div class="step-text"><strong>Muvazaa Delillerinin Toplanması</strong>Bedelin ödenmediğine, mirasbırakanın gerçek amacının bağış olduğuna ilişkin deliller (tanık, mali kayıtlar) toplanır.</div>
  </div>
  <div class="process-step">
    <div class="step-num">3</div>
    <div class="step-text"><strong>Dava Açılması</strong>Taşınmazın bulunduğu yer asliye hukuk mahkemesinde tapu iptal ve tescil davası açılır.</div>
  </div>
  <div class="process-step">
    <div class="step-num">4</div>
    <div class="step-text"><strong>Yargılama ve Karar</strong>Muvazaa ispatlanırsa tapu kaydı iptal edilir, taşınmaz miras payları oranında mirasçılara tescil edilir.</div>
  </div>
</div>

<h2>Sık Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">Muris muvazaası nedir?</p>
  <p class="faq-answer">Mirasbırakanın, mirasçısını miras hakkından yoksun bırakmak amacıyla asıl iradesi bağış olduğu halde tapuda satış gibi göstererek yaptığı devir işlemidir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Muris muvazaasına dayalı dava kim tarafından açılabilir?</p>
  <p class="faq-answer">Mirasbırakanın yasal mirasçılarından her biri, miras payı oranında bu davayı açabilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Bu davada zamanaşımı var mıdır?</p>
  <p class="faq-answer">Muris muvazaasına dayalı tapu iptal davaları, kesin hükümsüzlük iddiasına dayandığından süreye tabi değildir; mirasbırakanın ölümünden uzun süre sonra da açılabilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Muris muvazaası ile tenkis davası aynı şey midir?</p>
  <p class="faq-answer">Hayır. Muvazaa davası işlemin tamamen geçersizliğini, tenkis davası ise saklı payı ihlal eden kısmın kısmen iptalini amaçlar; farklı hukuki temellere dayanırlar.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Devrin gerçek bir satış olduğu nasıl ispatlanır?</p>
  <p class="faq-answer">Devralan taraf, bedelin gerçekten ödendiğini banka kayıtları, tanık beyanları gibi delillerle ispatlayarak muvazaa iddiasını çürütebilir.</p>
</div>
    `,
  },
  {
    slug: "idari-islemin-iptali-davasi",
    title: "İdari İşlemin İptali Davası: Süre, Şartlar ve Süreç",
    date: "2026-07-13",
    dateFormatted: "13 Temmuz 2026",
    excerpt:
      "İdari işlemlere karşı iptal davası açma süresi, yürütmenin durdurulması talebi ve görevli mahkeme hakkında İYUK'a göre bilinmesi gerekenler.",
    category: "İdare Hukuku",
    readingTime: 7,
    faq: [
      { question: "İdari işlemin iptali davası açma süresi ne kadardır?", answer: "Genel kural olarak idare mahkemeleri ve Danıştay'da 60 gün, vergi mahkemelerinde 30 gündür. Süre, işlemin tebliğini, ilanını veya öğrenilmesini izleyen günden itibaren işlemeye başlar." },
      { question: "Dava açmadan önce idareye itiraz etmek zorunlu mu?", answer: "Kural olarak hayır, doğrudan dava açılabilir. İYUK m.11 kapsamında idareye yapılan başvuru ihtiyaridir ve dava açma süresini durdurur; bazı özel kanunlarda ise ön başvuru zorunlu bir dava şartı olabilir." },
      { question: "Yürütmenin durdurulması ne zaman verilir?", answer: "Telafisi güç veya imkânsız bir zararın doğma ihtimali ile işlemin açıkça hukuka aykırı olması şartlarının birlikte gerçekleşmesi halinde, mahkeme gerekçeli kararla yürütmenin durdurulmasına hükmedebilir." },
      { question: "Hangi mahkemede dava açmalıyım?", answer: "Genel kural idare mahkemesidir; vergi, resim ve harçlara ilişkin uyuşmazlıklarda vergi mahkemesi görevlidir. Yetkili mahkeme ise kural olarak işlemi tesis eden idari merciin bulunduğu yer mahkemesidir." },
      { question: "Süreyi kaçırırsam dava açabilir miyim?", answer: "Dava açma süreleri hak düşürücüdür; süre geçirildikten sonra açılan dava, işin esasına girilmeden süre aşımı nedeniyle reddedilir. Bu nedenle tebliğ tarihinin doğru tespiti kritik önem taşır." },
    ],
    content: `
<div class="stat-grid">
  <div class="stat-box">
    <div class="stat-number">60 Gün</div>
    <div class="stat-label">İdare/Danıştay'da dava açma süresi <span class="law-ref">İYUK m.7</span></div>
  </div>
  <div class="stat-box">
    <div class="stat-number">30 Gün</div>
    <div class="stat-label">Vergi mahkemesinde dava açma süresi</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">2 Şart</div>
    <div class="stat-label">Yürütmenin durdurulması için birlikte aranır <span class="law-ref">İYUK m.27</span></div>
  </div>
</div>

<h2>İdari İşlemin İptali Davası Nedir?</h2>
<p>
  İdari işlemin iptali davası, idarenin tesis ettiği tek taraflı, icrai nitelikteki işlemlerin
  hukuka aykırılığı iddiasıyla yargı önünde iptalinin istenmesidir. Dava, 2577 sayılı İdari
  Yargılama Usulü Kanunu (İYUK) çerçevesinde idare mahkemelerinde, vergi mahkemelerinde veya
  bazı sınırlı hallerde ilk derece mahkemesi sıfatıyla Danıştay'da görülür.
</p>
<p>
  İptal davasına konu olabilecek işlemler oldukça geniştir: bir kamu görevlisinin atama veya
  disiplin işlemi, bir yapı ruhsatının reddi, ihale kararı, imar planı, ruhsat iptali gibi
  idarenin tek yanlı iradesiyle hukuki sonuç doğuran her türlü işlem bu kapsama girebilir.
</p>

<h2>Dava Açma Süresi Ne Kadardır?</h2>
<p>
  İYUK m.7 uyarınca genel kural, idare mahkemeleri ve Danıştay'da dava açma süresinin
  <strong>60 gün</strong>, vergi mahkemelerinde ise <strong>30 gün</strong> olmasıdır. Süre;
  yazılı bildirimin (tebliğ) yapıldığı tarihi izleyen günden, düzenleyici işlemlerde ilan
  tarihinden, yazılı bildirim hiç yapılmamışsa işlemin öğrenildiği tarihten itibaren işlemeye
  başlar.
</p>
<p>
  Bazı özel kanunlarda daha kısa süreler öngörülebilir. Örneğin 4734 sayılı Kamu İhale
  Kanunu kapsamındaki ihale kararlarına karşı dava açma süresi 30 gündür ve dava açılmadan
  önce Kamu İhale Kurumu'na zorunlu itirazen şikayet başvurusu yapılmış olması gerekir.
  Bu tür özel süre ve usul şartlarının atlanması, davanın süre veya usul yönünden reddiyle
  sonuçlanabilir.
</p>

<div class="highlight-box">
  <strong>Süre Hak Düşürücüdür</strong>
  İYUK'ta öngörülen dava açma süreleri hak düşürücü niteliktedir. Süre geçirildikten sonra
  açılan davalar, işin esasına girilmeden süre yönünden reddedilir. Tebliğ tarihini gösteren
  belgenin (tebligat zarfı, elektronik tebligat kaydı vb.) saklanması bu nedenle önemlidir.
</div>

<h2>Dava Açmadan Önce İdareye Başvurmak Zorunlu mu?</h2>
<p>
  Kural olarak hayır; ilgili doğrudan dava açabilir. İYUK m.11, ihtiyari bir yol sunar: işlemi
  yapan idari makama veya üst makama başvurulursa dava açma süresi durur. İdarenin bu başvuruya
  cevap vermesi gereken süre 30 gündür; bu süre içinde cevap verilmez veya istem reddedilirse
  kalan dava açma süresi işlemeye devam eder.
</p>
<p>
  Bazı özel kanunlarda ise idareye başvuru bir dava şartı olarak öngörülebilir; bu istisnai
  hallerde ön başvuru tüketilmeden açılan dava, dava şartı yokluğundan reddedilir. Bir işleme
  karşı dava açmadan önce, o işlemi düzenleyen özel kanunda ayrı bir başvuru usulü öngörülüp
  öngörülmediğinin kontrol edilmesi gerekir.
</p>

<h2>Yürütmenin Durdurulması Talebi</h2>
<p>
  Dava süresince işlemin uygulanmaya devam etmesi, davacı açısından telafisi güç zararlara yol
  açabilir. Bu ihtimale karşı İYUK m.27 uyarınca yürütmenin durdurulması (YD) talep edilebilir.
  Mahkemenin YD kararı verebilmesi için iki şartın birlikte gerçekleşmesi aranır:
</p>
<ul>
  <li>İşlemin uygulanması halinde telafisi güç veya imkânsız bir zararın doğması ihtimali</li>
  <li>İşlemin açıkça hukuka aykırı olması</li>
</ul>
<p>
  Mahkeme, YD talebini idarenin savunması alındıktan veya savunma süresi geçtikten sonra
  gerekçeli olarak karara bağlar. YD kararı kural olarak teminat karşılığında verilir; bazı
  istisnai hallerde teminat aranmayabilir.
</p>

<h2>Görevli ve Yetkili Mahkeme</h2>
<p>
  İdari uyuşmazlıklarda genel görevli mahkeme idare mahkemesidir. Vergi, resim, harç ve benzeri
  mali yükümlülüklere ilişkin uyuşmazlıklara ise özel olarak vergi mahkemeleri bakar. Danıştay,
  yalnızca Cumhurbaşkanlığı kararnameleri, ülke çapında uygulanacak düzenleyici işlemler gibi
  kanunda sayılan sınırlı davalara ilk derece mahkemesi sıfatıyla bakar.
</p>
<p>
  Yetki bakımından genel kural, işlemi tesis eden idari merciin bulunduğu yer mahkemesidir.
  Kamu görevlileriyle ilgili uyuşmazlıklar, tam yargı davaları ve vergi uyuşmazlıkları için
  kanunda ayrıca özel yetki kuralları öngörülmüştür.
</p>

<h2>Dava Dilekçesinde Bulunması Gerekenler</h2>
<div class="process-steps">
  <div class="process-step">
    <div class="step-num">1</div>
    <div class="step-text"><strong>Taraf Bilgileri</strong>Davacı ve davalı idarenin kimlik/unvan ve adres bilgileri eksiksiz yazılır.</div>
  </div>
  <div class="process-step">
    <div class="step-num">2</div>
    <div class="step-text"><strong>İşlemin Tespiti</strong>İptali istenen işlem, tebliğ tarihi belirtilerek somut biçimde tanımlanır.</div>
  </div>
  <div class="process-step">
    <div class="step-num">3</div>
    <div class="step-text"><strong>Hukuka Aykırılık Sebepleri</strong>İşlemin hangi yönlerden hukuka aykırı olduğu ve dayanılan deliller açıklanır.</div>
  </div>
  <div class="process-step">
    <div class="step-num">4</div>
    <div class="step-text"><strong>YD Talebi (varsa)</strong>Yürütmenin durdurulması isteniyorsa bu talep dilekçede açıkça belirtilmelidir.</div>
  </div>
</div>

<h2>Sık Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">İdari işlemin iptali davası açma süresi ne kadardır?</p>
  <p class="faq-answer">Genel kural olarak idare mahkemeleri ve Danıştay'da 60 gün, vergi mahkemelerinde 30 gündür. Süre, işlemin tebliğini, ilanını veya öğrenilmesini izleyen günden itibaren işlemeye başlar.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Dava açmadan önce idareye itiraz etmek zorunlu mu?</p>
  <p class="faq-answer">Kural olarak hayır, doğrudan dava açılabilir. İYUK m.11 kapsamında idareye yapılan başvuru ihtiyaridir ve dava açma süresini durdurur; bazı özel kanunlarda ise ön başvuru zorunlu bir dava şartı olabilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Yürütmenin durdurulması ne zaman verilir?</p>
  <p class="faq-answer">Telafisi güç veya imkânsız bir zararın doğma ihtimali ile işlemin açıkça hukuka aykırı olması şartlarının birlikte gerçekleşmesi halinde, mahkeme gerekçeli kararla yürütmenin durdurulmasına hükmedebilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Hangi mahkemede dava açmalıyım?</p>
  <p class="faq-answer">Genel kural idare mahkemesidir; vergi, resim ve harçlara ilişkin uyuşmazlıklarda vergi mahkemesi görevlidir. Yetkili mahkeme ise kural olarak işlemi tesis eden idari merciin bulunduğu yer mahkemesidir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Süreyi kaçırırsam dava açabilir miyim?</p>
  <p class="faq-answer">Dava açma süreleri hak düşürücüdür; süre geçirildikten sonra açılan dava, işin esasına girilmeden süre aşımı nedeniyle reddedilir. Bu nedenle tebliğ tarihinin doğru tespiti kritik önem taşır.</p>
</div>
    `,
  },
  {
    slug: "vergi-ihbarnamesine-itiraz-ve-uzlasma",
    title: "Vergi/Ceza İhbarnamesine İtiraz ve Uzlaşma Yolları",
    date: "2026-07-14",
    dateFormatted: "14 Temmuz 2026",
    excerpt:
      "Vergi ihbarnamesi tebliğ edildiğinde uzlaşma, dava açma ve VUK m.376 indirimi seçenekleri; 7524 sayılı Kanun'la değişen uzlaşma kapsamı.",
    category: "Vergi Hukuku",
    readingTime: 7,
    faq: [
      { question: "Vergi aslına karşı uzlaşma talep edebilir miyim?", answer: "Hayır. 7524 sayılı Kanun'un 2 Ağustos 2024'te yürürlüğe girmesinden itibaren vergi aslı uzlaşma kapsamı dışındadır. Vergi aslına karşı tek hukuki yol vergi mahkemesinde dava açmaktır; uzlaşma yalnızca belirli cezalar için mümkündür." },
      { question: "Uzlaşma başvurusu için süre ne kadardır?", answer: "Tarhiyat sonrası uzlaşma, ihbarnamenin tebliğini izleyen günden itibaren 30 gün içinde talep edilmelidir. Tarhiyat öncesi uzlaşma ise incelemenin bitiminden ve ihbarname düzenlenmeden önce istenir." },
      { question: "Uzlaşma ile VUK m.376 indirimi aynı anda kullanılabilir mi?", answer: "Hayır. Uzlaşma sağlanan bir ceza için ayrıca m.376 indirimi talep edilemez; mükellefin bu iki yoldan yalnızca birini seçmesi gerekir." },
      { question: "Uzlaşma sağlanamazsa dava açma hakkım devam eder mi?", answer: "Evet. Uzlaşmanın vaki olmadığına dair tutanağın tebliğinden itibaren, kalan dava açma süresi işler; bu süre 15 günden azsa VUK Ek m.7 uyarınca 15 güne tamamlanır." },
      { question: "Vergi mahkemesinde dava açma süresi ne kadardır?", answer: "Genel kural olarak ihbarnamenin tebliğinden itibaren 30 gündür. Bu süre, uzlaşma başvurusu yapılmışsa ve uzlaşma sağlanamamışsa, tutanağın tebliğinden itibaren yeniden (gerekirse 15 güne tamamlanarak) işlemeye başlar." },
    ],
    content: `
<div class="stat-grid">
  <div class="stat-box">
    <div class="stat-number">30 Gün</div>
    <div class="stat-label">Uzlaşma başvurusu ve dava açma süresi</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">%50</div>
    <div class="stat-label">Vergi ziyaı cezasında ilk kez indirim oranı <span class="law-ref">VUK m.376</span></div>
  </div>
  <div class="stat-box">
    <div class="stat-number">2 Yol</div>
    <div class="stat-label">Uzlaşma ile dava açma birbirini dışlar</div>
  </div>
</div>

<h2>İhbarname Tebliğ Edildiğinde Hangi Yollar İzlenebilir?</h2>
<p>
  Vergi incelemesi veya idari tespit sonucunda düzenlenen vergi/ceza ihbarnamesi mükellefe
  tebliğ edildiğinde, 213 sayılı Vergi Usul Kanunu (VUK) mükellefe üç ayrı yol tanır: uzlaşma
  talep etmek, vergi mahkemesinde dava açmak veya VUK m.376 kapsamında cezada indirim talep
  etmek. Bu üç yol birbirini dışlayan alternatiflerdir; aynı vergi/ceza için ikisi birden
  kullanılamaz.
</p>

<div class="highlight-box">
  <strong>2024 Değişikliği: Uzlaşmanın Kapsamı Daraldı</strong>
  7524 sayılı Kanun ile 2 Ağustos 2024'ten itibaren <strong>vergi aslı uzlaşma kapsamından
  tamamen çıkarılmıştır</strong>. Bugün uzlaşma yalnızca vergi ziyaı cezası ile belirli tutarı
  aşan usulsüzlük/özel usulsüzlük cezaları için mümkündür; vergi aslına karşı tek yol dava
  açmaktır. 2023 ve öncesine ait kaynaklarda yer alan "vergi aslında da uzlaşılabilir" bilgisi
  artık güncel değildir.
</div>

<h2>Tarhiyat Öncesi ve Tarhiyat Sonrası Uzlaşma</h2>
<p>
  Uzlaşma, incelemenin hangi aşamasında talep edildiğine göre ikiye ayrılır. Tarhiyat öncesi
  uzlaşma, yalnızca vergi incelemesine dayanan durumlarda, ihbarname düzenlenmeden önce
  incelemeyi yapan birimden talep edilir. Tarhiyat sonrası uzlaşma ise ihbarnamenin tebliğinden
  sonra, tebliği izleyen 30 gün içinde istenir. İkisi de seçimliktir; biri kullanıldığında
  diğerine başvurulamaz.
</p>

<h2>Uzlaşma Sağlanamazsa Ne Olur?</h2>
<p>
  Uzlaşma görüşmesinde taraflar anlaşamazsa (uzlaşmanın vaki olmaması), mükellefin dava açma
  hakkı devam eder. VUK Ek m.7 uyarınca, uzlaşmanın vaki olmadığına ilişkin tutanağın
  tebliğinden itibaren kalan dava açma süresi işlemeye devam eder; kalan süre 15 günden azsa
  bu süre 15 güne tamamlanır.
</p>
<div class="process-steps">
  <div class="process-step">
    <div class="step-num">1</div>
    <div class="step-text"><strong>İhbarnamenin Tebliği</strong>Vergi/ceza ihbarnamesi mükellefe usulüne uygun tebliğ edilir.</div>
  </div>
  <div class="process-step">
    <div class="step-num">2</div>
    <div class="step-text"><strong>Yol Seçimi</strong>Mükellef 30 gün içinde uzlaşma, dava açma veya VUK m.376 indirimi arasında tercih yapar.</div>
  </div>
  <div class="process-step">
    <div class="step-num">3</div>
    <div class="step-text"><strong>Uzlaşma Görüşmesi (seçildiyse)</strong>Uzlaşma komisyonu ile görüşme yapılır; anlaşma sağlanırsa tutanakla sonuçlanır.</div>
  </div>
  <div class="process-step">
    <div class="step-num">4</div>
    <div class="step-text"><strong>Uzlaşılamazsa Dava</strong>Kalan (veya 15 güne tamamlanan) süre içinde vergi mahkemesinde dava açılabilir.</div>
  </div>
</div>

<h2>VUK m.376 Kapsamında Cezada İndirim</h2>
<p>
  Mükellef, uzlaşma veya dava yoluna gitmeksizin, ihbarnamenin tebliğinden itibaren 30 gün
  içinde vergiyi ve cezayı kabul edip başvurursa VUK m.376 uyarınca ceza indiriminden
  yararlanabilir. Vergi ziyaı cezasında indirim oranı ilk defa uygulamada yarısı (%50),
  tekrarında ise üçte biri; usulsüzlük ve özel usulsüzlük cezalarında üçte biridir. İndirimden
  yararlanmak için belirtilen süre içinde başvuru yapılması ve vergi ile indirilmiş cezanın
  ödenmesi (veya teminat gösterilmesi) şarttır.
</p>

<h2>Hangi Yol Ne Zaman Tercih Edilmeli?</h2>
<table>
  <thead>
    <tr>
      <th>Yol</th>
      <th>Ne Zaman Uygun</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Uzlaşma</td>
      <td>Cezanın miktarında haklı gerekçelerle indirim ihtimali görülüyorsa (yalnızca ceza için)</td>
    </tr>
    <tr>
      <td>Dava Açma</td>
      <td>Tarhiyatın veya cezanın hukuka aykırı olduğu, vergi aslına itiraz edildiği durumlarda</td>
    </tr>
    <tr>
      <td>VUK m.376 İndirimi</td>
      <td>Tarhiyatın haklılığı kabul edilip hızlı ve düşük maliyetli kapanış isteniyorsa</td>
    </tr>
  </tbody>
</table>

<h2>Sık Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">Vergi aslına karşı uzlaşma talep edebilir miyim?</p>
  <p class="faq-answer">Hayır. 7524 sayılı Kanun'un 2 Ağustos 2024'te yürürlüğe girmesinden itibaren vergi aslı uzlaşma kapsamı dışındadır. Vergi aslına karşı tek hukuki yol vergi mahkemesinde dava açmaktır; uzlaşma yalnızca belirli cezalar için mümkündür.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Uzlaşma başvurusu için süre ne kadardır?</p>
  <p class="faq-answer">Tarhiyat sonrası uzlaşma, ihbarnamenin tebliğini izleyen günden itibaren 30 gün içinde talep edilmelidir. Tarhiyat öncesi uzlaşma ise incelemenin bitiminden ve ihbarname düzenlenmeden önce istenir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Uzlaşma ile VUK m.376 indirimi aynı anda kullanılabilir mi?</p>
  <p class="faq-answer">Hayır. Uzlaşma sağlanan bir ceza için ayrıca m.376 indirimi talep edilemez; mükellefin bu iki yoldan yalnızca birini seçmesi gerekir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Uzlaşma sağlanamazsa dava açma hakkım devam eder mi?</p>
  <p class="faq-answer">Evet. Uzlaşmanın vaki olmadığına dair tutanağın tebliğinden itibaren, kalan dava açma süresi işler; bu süre 15 günden azsa VUK Ek m.7 uyarınca 15 güne tamamlanır.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Vergi mahkemesinde dava açma süresi ne kadardır?</p>
  <p class="faq-answer">Genel kural olarak ihbarnamenin tebliğinden itibaren 30 gündür. Bu süre, uzlaşma başvurusu yapılmışsa ve uzlaşma sağlanamamışsa, tutanağın tebliğinden itibaren yeniden (gerekirse 15 güne tamamlanarak) işlemeye başlar.</p>
</div>
    `,
  },
  {
    slug: "nafakada-yuzde-kac-sorusu",
    title: "Nafakada 'Yüzde Kaç' Sorusu: Neden Sabit Bir Oran Yoktur?",
    date: "2026-07-15",
    dateFormatted: "15 Temmuz 2026",
    excerpt:
      "İnternette dolaşan nafaka yüzdeleri neden birbiriyle çelişir? Hakimin nafaka miktarını belirlerken gerçekte hangi kriterlere baktığını inceliyoruz.",
    category: "Aile Hukuku",
    readingTime: 6,
    faq: [
      { question: "Nafaka gerçekten gelirin belirli bir yüzdesi olarak mı hesaplanır?", answer: "Hayır. Kanunda veya Yargıtay içtihadında sabit bir yüzde yer almaz. İnternette görülen \"yüzde 20-25\" gibi rakamlar resmi olmayan, pratikte gözlemlenen kaba eğilimlerdir; her dava somut koşullarına göre ayrı değerlendirilir." },
      { question: "Neden farklı kaynaklar farklı yüzdeler veriyor?", answer: "Çünkü hiçbiri resmi bir kaynağa dayanmaz; her biri kendi gözlemlediği dava örneklerinden genelleme yapar. Bu tutarsızlığın kendisi, sabit bir oranın hukuken var olmadığının göstergesidir." },
      { question: "Asgari ücretli biri yüksek nafakaya mahkum edilebilir mi?", answer: "Mahkeme, yükümlünün ödeme gücünü aşan bir nafakaya hükmetmez; miktar, yükümlünün de asgari yaşam düzeyini sürdürebileceği şekilde belirlenir. Bu da nafakanın neden tek bir formülle hesaplanamayacağının bir örneğidir." },
      { question: "Online hesaplama araçlarının sonucu mahkemeyi bağlar mı?", answer: "Hayır. Hiçbir online araç mahkemeyi bağlamaz; bu tür araçlar yalnızca kaba bir referans sunar. Kesin sonuç, davanın tüm somut delilleri değerlendirilerek hakim tarafından belirlenir." },
      { question: "Nafaka miktarını etkileyen en önemli tek faktör nedir?", answer: "Tek bir faktör yoktur; çocuğun/eşin ihtiyaçları ile yükümlünün ödeme gücü birlikte ve dengeli şekilde değerlendirilir. Bu ikisinden birinin diğerini tamamen domine etmesi beklenmez." },
    ],
    content: `
<div class="stat-grid">
  <div class="stat-box">
    <div class="stat-number">0</div>
    <div class="stat-label">Yargıtay kararında geçen resmi nafaka yüzdesi</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">Somut Olay</div>
    <div class="stat-label">Kanunun esas aldığı tek değerlendirme yöntemi <span class="law-ref">TMK m.4</span></div>
  </div>
  <div class="stat-box">
    <div class="stat-number">3+ Kriter</div>
    <div class="stat-label">Hakimin birlikte değerlendirdiği unsur sayısı</div>
  </div>
</div>

<h2>İnternette Dolaşan "Yüzde 20-25" Gibi Rakamlar Nereden Geliyor?</h2>
<p>
  "Nafaka gelirin yüzde kaçı olur?" sorusu, aile hukukunda en sık aranan sorulardan biridir.
  Ancak bu soruya arama motorlarında verilen cevaplar birbiriyle çelişir: bazı kaynaklar
  "yüzde 10-15", bazıları "yüzde 20-30", bazıları ise düz bir "yüzde 25" rakamı verir. Bu
  tutarsızlığın kendisi, aslında böyle resmi bir oranın var olmadığının en açık göstergesidir.
</p>
<p>
  Türk hukukunda nafaka miktarını belirleyen kanun maddelerinde (TMK m.175, m.176, m.330) hiçbir
  yüzde veya sabit formül geçmez. Yargıtay'ın yerleşik içtihadı da aynı yöndedir: nafaka miktarı,
  her davanın kendine özgü koşulları içinde, hakkaniyet ilkesi (TMK m.4) çerçevesinde belirlenir.
</p>

<div class="highlight-box">
  <strong>Neden Sabit Bir Oran Kabul Edilmemiştir?</strong>
  Kanun koyucu bilinçli olarak sabit bir oran öngörmemiştir; çünkü aynı gelir düzeyindeki iki
  aile, farklı sayıda çocuk, farklı sağlık/eğitim giderleri ve farklı yaşam koşullarına sahip
  olabilir. Sabit bir yüzde, bazı davalarda adaletsiz sonuçlara yol açardı.
</div>

<h2>Hakim Nafaka Miktarını Belirlerken Gerçekte Neye Bakar?</h2>
<p>
  İştirak nafakasında (çocuk için) <span class="law-ref">TMK m.330</span> uyarınca değerlendirilen
  başlıca unsurlar şunlardır:
</p>
<ul>
  <li>Çocuğun yaşına, eğitim durumuna ve sağlığına göre somut ihtiyaçları</li>
  <li>Her iki ebeveynin geliri, mal varlığı ve ödeme gücü</li>
  <li>Çocuğun varsa kendi geliri</li>
  <li>Velayeti alan ebeveynin çocuğa fiilen sağladığı bakım ve emek</li>
</ul>
<p>
  Yoksulluk nafakasında (eş için) ise <span class="law-ref">TMK m.175-176</span> uyarınca ayrıca
  boşanmadaki kusur oranı, evlilik süresi, talep edenin çalışma kapasitesi ve yükümlünün mali
  gücü birlikte değerlendirilir. Uygulamada asgari ücretle çalışan bir yükümlünün nafaka
  yükümlülüğü, mahkemece yaşamını sürdürebileceği bir düzeyde sınırlandırılabilir; bu da neden
  tek bir yüzdenin herkese uygulanamayacağını gösterir.
</p>

<h2>Tahmini Bir Fikir Edinmenin Sınırları</h2>
<p>
  Resmi bir oran bulunmasa da, hukuk pratiğinde iştirak nafakası için genellikle ödeyen tarafın
  net gelirinin belirli bir aralığında (kabaca onda biri ile dörtte biri arası) bir tutara
  hükmedildiği gözlemlenir. Bu, <strong>yasal bir kural değil</strong>, sıkça karşılaşılan bir
  eğilimdir; büro olarak hazırladığımız
  <a href="/nafaka-hesaplama">nafaka hesaplama aracı</a> bu aralığı net gelire göre gösterir —
  ancak sonucu her zaman "tahmini" olarak değerlendirmeli, kendi durumunuza özgü bir hukuki
  görüş için mutlaka bir avukata danışmalısınız.
</p>

<h2>Hükmedilen Nafaka Miktarı Sabit Kalır mı?</h2>
<p>
  Hayır. Mahkeme kararında yıllık otomatik artış öngörülmüşse bu genellikle Yargıtay'ın yerleşik
  uygulamasında üretici fiyat endeksi (Yİ-ÜFE) esas alınarak hesaplanır — kira artışında kullanılan
  TÜFE ölçütünden farklıdır. Böyle bir hüküm yoksa veya koşullar önemli ölçüde değiştiyse, TMK
  m.176/4 uyarınca ayrı bir nafaka artırım/azaltım davası açılabilir.
  <a href="/nafaka-artisi-hesaplama">Nafaka artış oranı hesaplama aracımızla</a> güncel endeks
  oranına göre yeni tutarı hesaplayabilirsiniz.
</p>

<h2>Sık Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">Nafaka gerçekten gelirin belirli bir yüzdesi olarak mı hesaplanır?</p>
  <p class="faq-answer">Hayır. Kanunda veya Yargıtay içtihadında sabit bir yüzde yer almaz. İnternette görülen "yüzde 20-25" gibi rakamlar resmi olmayan, pratikte gözlemlenen kaba eğilimlerdir; her dava somut koşullarına göre ayrı değerlendirilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Neden farklı kaynaklar farklı yüzdeler veriyor?</p>
  <p class="faq-answer">Çünkü hiçbiri resmi bir kaynağa dayanmaz; her biri kendi gözlemlediği dava örneklerinden genelleme yapar. Bu tutarsızlığın kendisi, sabit bir oranın hukuken var olmadığının göstergesidir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Asgari ücretli biri yüksek nafakaya mahkum edilebilir mi?</p>
  <p class="faq-answer">Mahkeme, yükümlünün ödeme gücünü aşan bir nafakaya hükmetmez; miktar, yükümlünün de asgari yaşam düzeyini sürdürebileceği şekilde belirlenir. Bu da nafakanın neden tek bir formülle hesaplanamayacağının bir örneğidir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Online hesaplama araçlarının sonucu mahkemeyi bağlar mı?</p>
  <p class="faq-answer">Hayır. Hiçbir online araç mahkemeyi bağlamaz; bu tür araçlar yalnızca kaba bir referans sunar. Kesin sonuç, davanın tüm somut delilleri değerlendirilerek hakim tarafından belirlenir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Nafaka miktarını etkileyen en önemli tek faktör nedir?</p>
  <p class="faq-answer">Tek bir faktör yoktur; çocuğun/eşin ihtiyaçları ile yükümlünün ödeme gücü birlikte ve dengeli şekilde değerlendirilir. Bu ikisinden birinin diğerini tamamen domine etmesi beklenmez.</p>
</div>
    `,
  },
  {
    slug: "giydirilmis-ucret-kavrami",
    title: "Kıdem ve İhbar Tazminatında 'Giydirilmiş Ücret' Nedir? Yargıtay Kriterleri",
    date: "2026-07-16",
    dateFormatted: "16 Temmuz 2026",
    excerpt:
      "Kıdem ve ihbar tazminatı hesabında esas alınan giydirilmiş ücret kavramı, hangi yan ödemelerin dahil edildiği ve konuya ilişkin Yargıtay kararları.",
    category: "İş Hukuku",
    readingTime: 8,
    faq: [
      { question: "Giydirilmiş ücret nedir?", answer: "İşçinin çıplak (sözleşmede yazılı) ücretine; yol, yemek, ikramiye, prim gibi düzenli ve para ile ölçülebilir yan menfaatlerin eklenmesiyle bulunan, kıdem ve ihbar tazminatı hesabında esas alınan ücrettir." },
      { question: "Servis (ulaşım) hizmeti giydirilmiş ücrete dahil midir?", answer: "Yargıtay 9. Hukuk Dairesi'nin 2020/5964 esas sayılı kararına göre, işverenin sağladığı toplu ulaşım/servis hizmeti giydirilmiş ücrete dahil edilmez; buna karşılık konaklama ve yemek gibi kalemler dahil edilir." },
      { question: "Özel sağlık sigortası primi tazminata dahil edilir mi?", answer: "Evet. Yargıtay 9. Hukuk Dairesi'nin 2020/2597 esas, 2021/5846 karar sayılı kararına göre işveren tarafından düzenli ödenen özel sağlık/hayat sigortası primleri para ile ölçülebilen bir menfaat olduğundan giydirilmiş ücrete dahildir." },
      { question: "Kıdem ve ihbar tazminatı aynı ücretten mi hesaplanır?", answer: "Genel kural olarak ikisi de giydirilmiş ücretten hesaplanır (İş K. m.17 son fıkra, m.32). Yargıtay Hukuk Genel Kurulu'nun 2015/22-127 esas sayılı kararı bu iki tazminatın hesap yönteminin karıştırılmaması gerektiğine dikkat çeker." },
      { question: "Arızi (bir kereye mahsus) ödemeler tazminata dahil edilir mi?", answer: "Hayır. Bir ödemenin giydirilmiş ücrete dahil edilebilmesi için süreklilik arz etmesi gerekir; yılda bir kez verilen olağanüstü bir prim veya ödül gibi arızi ödemeler kapsam dışında kalır." },
    ],
    content: `
<div class="stat-grid">
  <div class="stat-box">
    <div class="stat-number">m.32/m.17</div>
    <div class="stat-label">Giydirilmiş ücretin yasal dayanağı <span class="law-ref">4857 s. Kanun</span></div>
  </div>
  <div class="stat-box">
    <div class="stat-number">Kıdem: Giydirilmiş</div>
    <div class="stat-label">İhbar: Çıplak Ücret <span class="law-ref">HGK E.2015/22-127</span></div>
  </div>
  <div class="stat-box">
    <div class="stat-number">Süreklilik</div>
    <div class="stat-label">Bir ödemenin dahil edilmesinin temel şartı</div>
  </div>
</div>

<h2>Giydirilmiş Ücret Nedir?</h2>
<p>
  Kıdem tazminatı hesaplanırken esas alınan ücret, işçinin yalnızca sözleşmesinde yazılı çıplak
  maaşı değildir. 4857 sayılı İş Kanunu m.32/1'de tanımlanan asıl ücrete; yol, yemek, ikramiye,
  düzenli ödenen prim gibi <strong>para veya para ile ölçülebilir, süreklilik arz eden</strong>
  yan menfaatler eklenerek bulunan tutara uygulamada "giydirilmiş ücret" denir. Aynı kural,
  Kanun m.17 son fıkrası uyarınca ihbar tazminatı hesabında da geçerlidir.
</p>
<p>
  Kanun metni açıkça şöyle der: "tazminatlar ile bildirim sürelerine ait peşin ödenecek ücretin
  hesabında 32'nci maddenin birinci fıkrasında yazılan ücrete ek olarak işçiye sağlanmış para
  veya para ile ölçülmesi mümkün sözleşme ve kanundan doğan menfaatler de göz önünde tutulur."
</p>

<h2>Hangi Ödemeler Giydirilmiş Ücrete Dahildir?</h2>
<p>
  Yargıtay 9. Hukuk Dairesi'nin <strong>E. 2020/5964, K. 2020/13100 sayılı, 22.10.2020 tarihli</strong>
  kararında, işverenin işçiye sağladığı konaklama ve yemek gibi düzenli menfaatlerin giydirilmiş
  ücrete dahil edilmesi gerektiği; buna karşılık işverenin şantiye ile kamp arasında sağladığı
  servis (ulaşım) hizmetinin ücret eki sayılmayacağı açıkça belirtilmiştir.
</p>
<ul>
  <li>Düzenli ödenen yol ve yemek yardımı</li>
  <li>Düzenlilik arz eden ikramiye ve primler</li>
  <li>Konaklama gibi süreklilik taşıyan ayni menfaatler</li>
  <li>Bayram/izin harçlığı gibi düzenli ödemeler</li>
</ul>
<div class="highlight-box">
  <strong>Süreklilik Şartı</strong>
  Bir ödemenin giydirilmiş ücrete dahil edilebilmesi için iki şart aranır: (1) para veya para
  ile ölçülebilir nitelikte olması, (2) arızi değil, düzenli/süreklilik arz eder biçimde
  sağlanmış olması. Yılda bir kez verilen olağanüstü bir ödül gibi arızi ödemeler bu kapsama
  girmez.
</div>

<h2>Özel Sağlık Sigortası Gibi Yan Haklar Dahil mi?</h2>
<p>
  Yargıtay 9. Hukuk Dairesi'nin <strong>E. 2020/2597, K. 2021/5846 sayılı, 09.03.2021 tarihli</strong>
  kararında, işveren tarafından işçi lehine düzenli olarak ödenen özel sağlık ve hayat sigortası
  primlerinin de para ile ölçülebilen bir menfaat olarak giydirilmiş ücrete dahil edilmesi
  gerektiğine hükmedilmiştir. Bu karar, giydirilmiş ücret kavramının yalnızca klasik yol/yemek
  kalemleriyle sınırlı olmadığını, işçiye sağlanan her türlü düzenli parasal menfaati kapsayacak
  şekilde geniş yorumlandığını gösterir.
</p>

<h2>Kıdem Tazminatı Giydirilmiş, İhbar Tazminatı Çıplak Ücretten mi Hesaplanır?</h2>
<p>
  Bu noktada önemli bir ayrıma dikkat çekmek gerekir. Yargıtay Hukuk Genel Kurulu'nun
  <strong>E. 2015/22-127, K. 2018/559 sayılı, 28.3.2018 tarihli</strong> kararında, kıdem
  tazminatının giydirilmiş ücretten, ihbar tazminatının ise kural olarak çıplak (kanuni)
  ücretten hesaplanacağı ilkesi vurgulanmıştır. Uygulamada bu iki tazminat çoğu zaman birlikte
  talep edildiğinden, hangi tazminat için hangi ücretin esas alınacağının karıştırılması sık
  görülen bir hesaplama hatasıdır.
</p>
<table>
  <thead>
    <tr>
      <th>Tazminat Türü</th>
      <th>Esas Alınan Ücret</th>
      <th>Yasal Dayanak</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Kıdem Tazminatı</td>
      <td>Giydirilmiş brüt ücret</td>
      <td>İş K. m.32/1 + yerleşik içtihat</td>
    </tr>
    <tr>
      <td>İhbar Tazminatı</td>
      <td>Giydirilmiş brüt ücret</td>
      <td>İş K. m.17 son fıkra</td>
    </tr>
  </tbody>
</table>
<p>
  Not: Kanun metninin açık hükmü ihbar tazminatını da giydirilmiş ücrete bağlasa da, HGK
  kararında bazı özel kanun kapsamındaki (örneğin gazetecilik) istisnai uygulamalara işaret
  edilmiştir; genel işçi statüsünde giydirilmiş ücret kuralı tartışmasız uygulanır.
</p>

<h2>Giydirilmiş Ücret Nasıl İspatlanır?</h2>
<div class="process-steps">
  <div class="process-step">
    <div class="step-num">1</div>
    <div class="step-text"><strong>Bordro ve Ödeme Kayıtları</strong>Maaş bordroları, banka dekontları ve ek ödeme belgeleri toplanır.</div>
  </div>
  <div class="process-step">
    <div class="step-num">2</div>
    <div class="step-text"><strong>Süreklilik Delili</strong>İlgili ödemenin arızi değil düzenli/periyodik yapıldığı (örn. her ay, her yıl aynı dönemde) gösterilir.</div>
  </div>
  <div class="process-step">
    <div class="step-num">3</div>
    <div class="step-text"><strong>Tanık Beyanı</strong>Yazılı belge bulunmayan menfaatler (örn. yemek/servis uygulaması) için tanık deliline başvurulabilir.</div>
  </div>
  <div class="process-step">
    <div class="step-num">4</div>
    <div class="step-text"><strong>Bilirkişi Hesabı</strong>Mahkeme, toplanan delillere göre giydirilmiş ücreti bilirkişi marifetiyle hesaplatır.</div>
  </div>
</div>
<p>
  Giydirilmiş ücretin doğru tespiti, kıdem tazminatı hesaplamasını doğrudan etkiler. Kendi
  durumunuza göre yaklaşık bir tutar görmek için
  <a href="/kidem-tazminati-hesaplama">kıdem tazminatı hesaplama</a> ve
  <a href="/ihbar-tazminati-hesaplama">ihbar tazminatı hesaplama</a> araçlarımızı kullanabilirsiniz.
</p>

<h2>Sık Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">Giydirilmiş ücret nedir?</p>
  <p class="faq-answer">İşçinin çıplak (sözleşmede yazılı) ücretine; yol, yemek, ikramiye, prim gibi düzenli ve para ile ölçülebilir yan menfaatlerin eklenmesiyle bulunan, kıdem ve ihbar tazminatı hesabında esas alınan ücrettir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Servis (ulaşım) hizmeti giydirilmiş ücrete dahil midir?</p>
  <p class="faq-answer">Yargıtay 9. Hukuk Dairesi'nin 2020/5964 esas sayılı kararına göre, işverenin sağladığı toplu ulaşım/servis hizmeti giydirilmiş ücrete dahil edilmez; buna karşılık konaklama ve yemek gibi kalemler dahil edilir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Özel sağlık sigortası primi tazminata dahil edilir mi?</p>
  <p class="faq-answer">Evet. Yargıtay 9. Hukuk Dairesi'nin 2020/2597 esas, 2021/5846 karar sayılı kararına göre işveren tarafından düzenli ödenen özel sağlık/hayat sigortası primleri para ile ölçülebilen bir menfaat olduğundan giydirilmiş ücrete dahildir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Kıdem ve ihbar tazminatı aynı ücretten mi hesaplanır?</p>
  <p class="faq-answer">Genel kural olarak ikisi de giydirilmiş ücretten hesaplanır (İş K. m.17 son fıkra, m.32). Yargıtay Hukuk Genel Kurulu'nun 2015/22-127 esas sayılı kararı bu iki tazminatın hesap yönteminin karıştırılmaması gerektiğine dikkat çeker.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Arızi (bir kereye mahsus) ödemeler tazminata dahil edilir mi?</p>
  <p class="faq-answer">Hayır. Bir ödemenin giydirilmiş ücrete dahil edilebilmesi için süreklilik arz etmesi gerekir; yılda bir kez verilen olağanüstü bir prim veya ödül gibi arızi ödemeler kapsam dışında kalır.</p>
</div>
    `,
  },
  {
    slug: "kosullu-saliverilme-oranlari",
    title: "Koşullu Salıverilme Oranları: Hangi Suçta Ne Kadar İnfaz Gerekir?",
    date: "2026-07-17",
    dateFormatted: "17 Temmuz 2026",
    excerpt:
      "5275 sayılı Kanun'a göre koşullu salıverilme oranları, suç kategorilerine göre değişen infaz süreleri ve denetimli serbestlik şartları.",
    category: "Ceza Hukuku",
    readingTime: 7,
    faq: [
      { question: "Koşullu salıverilme oranı her suçta aynı mı?", answer: "Hayır. Genel kural cezanın yarısıdır (1/2), ancak kasten öldürme, nitelikli cinsel suçlar, uyuşturucu ticareti ve terör suçları gibi kanunda sayılan kategorilerde 2/3 veya 3/4 gibi daha yüksek oranlar uygulanır." },
      { question: "İyi hal, infaz süresini kısaltır mı?", answer: "Hayır. İyi hal, süreyi kısaltan bir indirim değil, hesaplanan sürenin sonunda tahliyenin gerçekleşmesi için aranan bir ön şarttır. İyi hal olmadan koşullu salıverilme gerçekleşmez." },
      { question: "Denetimli serbestlik süresi ne kadardır?", answer: "Genel kuralda koşullu salıverilme tarihine son 1 yıl kaladır. 30 Mart 2020 öncesi işlenmiş, istisna suçlar hariç kalan suçlarda bu süre Geçici Madde 6 uyarınca 3 yıla çıkar." },
      { question: "Tekerrür (mükerrirlik) infaz oranını nasıl etkiler?", answer: "5275 sayılı Kanun m.108 uyarınca tekerrür hali, suç kategorisine göre belirlenen orandan bağımsız olarak infaz süresini ayrıca yükseltir." },
      { question: "Bu oranlar müebbet hapis için de aynı mı?", answer: "Hayır, müebbet ve ağırlaştırılmış müebbet hapiste oran değil, sabit yıl esası uygulanır: müebbette 24 yıl, ağırlaştırılmış müebbette 30 yıl infaz gerekir; bazı ağır örgütlü suçlarda ise koşullu salıverilme hiç uygulanmaz." },
    ],
    content: `
<div class="stat-grid">
  <div class="stat-box">
    <div class="stat-number">1/2</div>
    <div class="stat-label">Genel koşullu salıverilme oranı <span class="law-ref">5275 s. K. m.107/2</span></div>
  </div>
  <div class="stat-box">
    <div class="stat-number">2/3 – 3/4</div>
    <div class="stat-label">Belirli suç kategorilerinde uygulanan artırılmış oran</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">Son 1 Yıl</div>
    <div class="stat-label">Genel kuralda denetimli serbestlik süresi <span class="law-ref">m.105/A</span></div>
  </div>
</div>

<h2>Koşullu Salıverilme Nedir?</h2>
<p>
  Koşullu salıverilme, hükümlünün cezasının belirli bir oranını infaz kurumunda geçirdikten
  sonra, iyi halli olması şartıyla cezasının kalan kısmını dışarıda, denetim altında
  tamamlamasına imkân tanıyan bir infaz kurumudur. Kurum, 5275 sayılı Ceza ve Güvenlik
  Tedbirlerinin İnfazı Hakkında Kanun'un 107. maddesinde düzenlenmiştir.
</p>

<h2>Genel Kural: Cezanın Yarısı (2020 Değişikliği)</h2>
<p>
  14 Nisan 2020 tarihli 7242 sayılı Kanun'la yapılan değişiklikle, süreli hapis cezalarında
  genel koşullu salıverilme oranı üçte ikiden (2/3) <strong>yarıya (1/2)</strong> indirilmiştir.
  Müebbet hapiste bu süre 24 yıl, ağırlaştırılmış müebbet hapiste ise 30 yıldır. Bu, süreli
  hapis cezaları için genel/varsayılan orandır; kanunda sayılan bazı suç grupları için farklı
  (daha yüksek) oranlar ayrıca uygulanır.
</p>

<div class="highlight-box">
  <strong>Bu Bir Genelleme, Kesin Hesap Değildir</strong>
  Suç tarihi (30.03.2020 öncesi/sonrası), suç tipi, tekerrür durumu, failin yaşı ve örgüt/terör
  bağlantısı gibi etkenlere göre onlarca farklı senaryo mevcuttur. Somut dosyanız için kesin
  hesap ancak infaz hakimliği veya bir ceza avukatı tarafından yapılabilir.
</div>

<h2>Daha Yüksek Oran Uygulanan Suçlar</h2>
<p>
  m.107/2'nin devamı ve ilgili özel kanunlar, aşağıdaki suç kategorilerini genel 1/2 kuralından
  ayırarak daha yüksek infaz oranına tabi tutar:
</p>
<table>
  <thead>
    <tr>
      <th>Oran</th>
      <th>Suç Kategorisi (Genel Hatlarıyla)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2/3</td>
      <td>Kasten öldürme, işkence/eziyet, nitelikli olmayan cinsel suçlar, özel hayata karşı suçlar, devlet sırlarına karşı suçlar/casusluk, örgütlü suçlar</td>
    </tr>
    <tr>
      <td>3/4</td>
      <td>Nitelikli/çocuğa karşı cinsel suçlar, uyuşturucu madde imal ve ticareti, terör suçları (3713 sayılı Kanun m.17)</td>
    </tr>
    <tr>
      <td>Uygulanmaz</td>
      <td>Devletin güvenliğine/anayasal düzene karşı örgüt faaliyeti çerçevesinde işlenip ağırlaştırılmış müebbetle sonuçlanan bazı suçlar <span class="law-ref">m.107/16</span></td>
    </tr>
  </tbody>
</table>
<p>
  Ayrıca <span class="law-ref">m.108</span> uyarınca tekerrür (mükerrirlik) hali, yukarıdaki
  oranlardan bağımsız olarak infaz süresini ayrıca artırır.
</p>

<h2>Denetimli Serbestlik Süresi</h2>
<p>
  Koşullu salıverilme tarihine belirli bir süre kala, iyi hal ve açık cezaevine ayrılma
  şartıyla denetimli serbestlik tedbiri uygulanabilir (m.105/A). Genel kuralda bu süre
  <strong>son 1 yıl</strong>dır. Ancak 30 Mart 2020 tarihinden önce işlenmiş, kanunda sayılan
  istisna suçlar (terör suçları dahil) dışındaki suçlarda, Geçici m.6 uyarınca bu süre
  <strong>3 yıla</strong> çıkar.
</p>
<p>
  Özel gruplarda farklı süreler uygulanır: 0-6 yaş grubunda çocuğu bulunan kadın hükümlülerde
  2 yıl (2020 öncesi suçlarda 4 yıl), ağır hasta, engelli veya belirli bir yaşın üzerindeki
  hükümlülerde 3 yıl (2020 öncesi suçlarda, 65 yaş üstü için süre sınırı aranmaz). 2025 yılında
  7550 sayılı Kanun'la, cezaevinde kalınması gereken sürenin en az onda birinin fiilen
  tamamlanmış olması şartı da eklenmiştir.
</p>

<h2>İyi Hal Süreyi Kısaltır mı?</h2>
<p>
  Hayır — bu, sık karıştırılan bir noktadır. İyi hal, koşullu salıverilme süresini
  <strong>kısaltan bir indirim değildir</strong>; süre dolduğunda tahliyenin gerçekleşmesi için
  aranan bir <strong>ön şarttır</strong>. m.107/1 uyarınca infaz kurumundaki iyi hal
  değerlendirmesi olumsuzsa, hesaplanan süre dolmuş olsa bile koşullu salıverilme
  gerçekleşmez.
</p>

<h2>Sık Sorulan Sorular</h2>
<div class="faq-item">
  <p class="faq-question">Koşullu salıverilme oranı her suçta aynı mı?</p>
  <p class="faq-answer">Hayır. Genel kural cezanın yarısıdır (1/2), ancak kasten öldürme, nitelikli cinsel suçlar, uyuşturucu ticareti ve terör suçları gibi kanunda sayılan kategorilerde 2/3 veya 3/4 gibi daha yüksek oranlar uygulanır.</p>
</div>
<div class="faq-item">
  <p class="faq-question">İyi hal, infaz süresini kısaltır mı?</p>
  <p class="faq-answer">Hayır. İyi hal, süreyi kısaltan bir indirim değil, hesaplanan sürenin sonunda tahliyenin gerçekleşmesi için aranan bir ön şarttır. İyi hal olmadan koşullu salıverilme gerçekleşmez.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Denetimli serbestlik süresi ne kadardır?</p>
  <p class="faq-answer">Genel kuralda koşullu salıverilme tarihine son 1 yıl kaladır. 30 Mart 2020 öncesi işlenmiş, istisna suçlar hariç kalan suçlarda bu süre Geçici Madde 6 uyarınca 3 yıla çıkar.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Tekerrür (mükerrirlik) infaz oranını nasıl etkiler?</p>
  <p class="faq-answer">5275 sayılı Kanun m.108 uyarınca tekerrür hali, suç kategorisine göre belirlenen orandan bağımsız olarak infaz süresini ayrıca yükseltir.</p>
</div>
<div class="faq-item">
  <p class="faq-question">Bu oranlar müebbet hapis için de aynı mı?</p>
  <p class="faq-answer">Hayır, müebbet ve ağırlaştırılmış müebbet hapiste oran değil, sabit yıl esası uygulanır: müebbette 24 yıl, ağırlaştırılmış müebbette 30 yıl infaz gerekir; bazı ağır örgütlü suçlarda ise koşullu salıverilme hiç uygulanmaz.</p>
</div>
    `,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
