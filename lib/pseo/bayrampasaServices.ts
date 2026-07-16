import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const bayrampasaServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "bayrampasa-avukat",
    name: "Bayrampaşa Avukat",
    heroTitle: "Bayrampaşa Avukat",
    heroSubtitle:
      "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku uyuşmazlıklarında temsil sağlayan Furkan Arıkan, Bayrampaşa'daki müvekkillerine hizmet vermektedir; ilçe İstanbul (Çağlayan) Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Bayrampaşa Avukat",
    metaDescription:
      "Bayrampaşa'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku uyuşmazlıklarında temsil sağlayan Furkan Arıkan, İstanbul Barosu'na kayıtlı (Sicil No: 72621) bir avukattır; 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur. Randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Tapu, kira ve tahliye uyuşmazlıklarının takibi." },
      { title: "İş Hukuku", description: "İşçilik alacakları ve işe iade davalarında destek." },
      { title: "İcra Hukuku", description: "Alacak takibi ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "İdari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı ve cezası uyuşmazlıkları." },
      { title: "Borçlar Hukuku", description: "Sözleşme ve alacak kaynaklı davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Tapu, kat mülkiyeti ve kira ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "İstanbul'un metrobüs ve M1 metro hattının kesiştiği merkezi bir noktasında yer alan Bayrampaşa, yoğun konut dokusu ve Forum İstanbul gibi büyük ticaret merkezleriyle şehrin işçi ve orta gelir grubunun yaşadığı önemli ilçelerinden biridir.",
      "İlçede yaşayan veya faaliyet gösterenlerin hukuki uyuşmazlıkları İstanbul (Çağlayan) Adliyesi'nde, vergisel işlemleri ise Bayrampaşa Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Bayrampaşa'daki davalara hangi adliye bakıyor?", answer: "Bayrampaşa, İstanbul (Çağlayan) Adliyesi'nin yargı çevresinde yer almaktadır." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Bayrampaşa'da mı bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Bayrampaşa'daki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Forum İstanbul çevresindeki işletmelerle ilgili destek var mı?", answer: "Evet, ticari kira ve tedarik sözleşmesi uyuşmazlıklarında borçlar hukuku kapsamında danışmanlık sağlanır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Çağlayan Adliyesi'ne Bayrampaşa'dan ulaşım nasıl?", answer: "M1A/M1B metro hattının Bayrampaşa-Maltepe istasyonu ve Metrobüs bağlantısı üzerinden ulaşım sağlanabilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır." },
    ],
    howToTitle: "Bayrampaşa'da Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Bayrampaşa Avukat (Genel)",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "kidem-tazminati-hesaplama-2026", "icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "bayrampasa-bosanma-avukati",
    name: "Bayrampaşa Boşanma Avukatı",
    heroTitle: "Bayrampaşa Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma davalarında velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlayan Furkan Arıkan, davalar İstanbul (Çağlayan) Adliyesi'nde görülmek üzere Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    metaTitle: "Bayrampaşa Boşanma Avukatı",
    metaDescription:
      "Bayrampaşa'da anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Boşanma, velayet ve nafaka dosyalarında temsil sağlayan Furkan Arıkan, İstanbul Barosu'na kayıtlı (72621) bir avukattır; 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve Bayrampaşa'daki müvekkillerine aile hukuku alanında danışmanlık vermektedir.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokol hazırlığı ve duruşma temsili." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına göre düzenleme talepleri." },
      { title: "Nafaka", description: "Tedbir, yoksulluk ve iştirak nafakası süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Katılma alacağı kapsamında mal rejimi tasfiyesi talepleri",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Bayrampaşa'nın yoğun ve istikrarlı konut dokusu, boşanma davalarında ortak konut ve ev eşyasına ilişkin taleplerin de sıkça gündeme gelmesine yol açmaktadır.",
      "İlçede açılan boşanma, velayet ve nafaka davalarına İstanbul (Çağlayan) Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davasında yetkili mahkeme hangisidir?", answer: "İstanbul (Çağlayan) Adliyesi'ndeki aile mahkemesidir." },
      { question: "Anlaşmalı boşanma ne kadar sürede sonuçlanır?", answer: "Genellikle tek duruşmada, protokol eksiksizse kısa sürede sonuçlanabilir." },
      { question: "Çekişmeli boşanmada tanık dinletmek zorunlu mu?", answer: "Zorunlu değildir ancak kusur iddialarının ispatında önemli rol oynayabilir." },
      { question: "Velayet sonradan değiştirilebilir mi?", answer: "Koşulların değişmesi halinde velayetin değiştirilmesi talep edilebilir." },
      { question: "İştirak nafakası kime ödenir?", answer: "Velayet kendisinde olmayan ebeveyn, çocuğun giderlerine katkı olarak öder." },
      { question: "Boşanma protokolüne sonradan itiraz edilebilir mi?", answer: "Kesinleşen protokole itiraz kural olarak mümkün değildir." },
    ],
    howToTitle: "Bayrampaşa'da Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "İlk Görüşme", text: "Evlilik birliğinin durumu ve talepler konuşulur." },
      { name: "Evrak Hazırlığı", text: "Protokol veya dava dilekçesi düzenlenir." },
      { name: "Başvuru", text: "Aile mahkemesine dosya sunulur." },
      { name: "Karar", text: "Duruşma sonunda mahkeme kararını açıklar." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "bosanmada-nafaka-turleri"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "bayrampasa-ceza-avukati",
    name: "Bayrampaşa Ceza Avukatı",
    heroTitle: "Bayrampaşa Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma aşamalarının her birinde müdafilik hizmeti sunan Furkan Arıkan, kovuşturması İstanbul (Çağlayan) Adliyesi'nde yürütülen dosyalarda Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    metaTitle: "Bayrampaşa Ceza Avukatı",
    metaDescription:
      "Bayrampaşa'da soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Ceza yargılamasının her aşamasında müdafilik yapan Furkan Arıkan, İstanbul Barosu'na kayıtlı (72621) bir avukattır; 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve Bayrampaşa'daki müvekkillerine gözaltı, soruşturma ve kovuşturma süreçlerinde hizmet vermektedir.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Kanun Yolları", description: "İstinaf ve temyiz süreçlerinin yürütülmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı aşamasında hukuki danışmanlık sağlanması",
      "Soruşturma sürecinin takip edilmesi",
      "Tutukluluğa ve adli kontrole itiraz edilmesi",
      "Duruşmalarda savunmanın sunulması",
      "Karara karşı üst mahkemelere başvuru dilekçelerinin hazırlanması",
      "Uzlaşma ve etkin pişmanlık konularında bilgilendirme",
    ],
    localParagraphs: [
      "Bayrampaşa'nın yoğun nüfusu ve Forum İstanbul gibi büyük alışveriş merkezlerinin bulunması, kolluk müdahalesi gerektiren bazı olayların ilçede görece sık yaşanmasına zemin hazırlayabilmektedir. Kovuşturma aşamasındaki davalar İstanbul (Çağlayan) Adliyesi'nde görülür.",
      "Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından belirleyicidir.",
    ],
    faqs: [
      { question: "Bayrampaşa'da ceza yargılaması nerede yürütülür?", answer: "İstanbul (Çağlayan) Adliyesi'nde yürütülür." },
      { question: "Avukatsız ifade verilebilir mi?", answer: "Evet ama müdafi bulundurmak hak kaybını önler." },
      { question: "Tutuklama kararı kim tarafından verilir?", answer: "Sulh ceza hakimliği tarafından verilir." },
      { question: "Beraat eden sanık yargılama giderlerini geri alabilir mi?", answer: "Bazı yargılama giderleri hazineden karşılanabilir." },
      { question: "İstinaf mahkemesi kararı kesin midir?", answer: "Bazı hallerde temyiz yoluna gidilebilir." },
      { question: "Uzlaşma teklifi kim tarafından yapılır?", answer: "Uzlaştırmacı aracılığıyla taraflara teklif götürülür." },
    ],
    howToTitle: "Bayrampaşa'da Ceza Yargılaması Nasıl İlerler?",
    howToSteps: [
      { name: "Bildirim", text: "Şikayet veya ihbarla süreç başlar." },
      { name: "İfade ve Gözaltı", text: "Şüphelinin ifadesi alınır, gerekirse gözaltına alınır." },
      { name: "Dava Süreci", text: "Kovuşturma aşamasında duruşmalar yapılır." },
      { name: "Karar", text: "Mahkeme kararını verir, gerekirse üst yargı yoluna gidilir." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "bayrampasa-gayrimenkul-avukati",
    name: "Bayrampaşa Gayrimenkul Avukatı",
    heroTitle: "Bayrampaşa Gayrimenkul Avukatı",
    heroSubtitle:
      "Tapu uyuşmazlıkları, kat mülkiyeti sorunları ve kira ilişkilerinde temsil sağlayan Furkan Arıkan, davalar İstanbul (Çağlayan) Adliyesi'nde görülmek üzere Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    metaTitle: "Bayrampaşa Gayrimenkul Avukatı",
    metaDescription:
      "Bayrampaşa'da tapu iptali, kat mülkiyeti uyuşmazlıkları ve kira ilişkilerinde gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Tapu, kat mülkiyeti ve kira uyuşmazlıklarında danışmanlık veren Furkan Arıkan, İstanbul Barosu'na kayıtlı (72621) bir avukattır; 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve gayrimenkul hukuku kapsamında Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    highlightCards: [
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Kat Mülkiyeti", description: "Yönetim planı ve ortak gider anlaşmazlıkları." },
      { title: "Kentsel Dönüşüm", description: "Yoğun konut dokusundaki dönüşüm süreçlerinde destek." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Tapu iptali ve tescil davalarının açılması",
      "Kat mülkiyeti ve yönetim planından doğan uyuşmazlıklar",
      "Riskli yapı tespiti sonrası kentsel dönüşüm sürecinde danışmanlık",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
      "Ortaklığın giderilmesi (izale-i şüyu) davaları",
    ],
    localParagraphs: [
      "Bayrampaşa'nın yoğun ve büyük ölçüde 1980-90'lı yıllarda inşa edilmiş apartman dokusu, kat mülkiyeti ve kentsel dönüşüm kapsamındaki tapu işlemlerini sık gündeme gelen konular haline getirmektedir; bu uyuşmazlıklar İstanbul (Çağlayan) Adliyesi'ndeki sulh hukuk ve asliye hukuk mahkemelerinde görülür.",
      "Forum İstanbul çevresindeki ticari alanlarda işyeri niteliğindeki taşınmazlara ilişkin kira ve kullanım uyuşmazlıkları da zaman zaman gündeme gelmektedir.",
    ],
    faqs: [
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir." },
      { question: "Bayrampaşa'da gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde görülür." },
      { question: "Kentsel dönüşüm süreci nasıl başlar?", answer: "Riskli yapı tespiti sonrasında kat maliklerinin çoğunluk kararı ve idari başvuru aşamalarıyla ilerler." },
      { question: "Ortak gider anlaşmazlıkları nasıl çözülür?", answer: "Öncelikle yönetim planı ve Kat Mülkiyeti Kanunu esas alınır, çözülemezse dava açılabilir." },
      { question: "İşyeri niteliğindeki taşınmaz alımında nelere dikkat edilmeli?", answer: "Tapu kaydı, imar durumu ve varsa kısıtlamaların önceden incelenmesi önerilir." },
    ],
    howToTitle: "Bayrampaşa'da Tapu İptali Süreci Nasıl İlerler?",
    howToSteps: [
      { name: "Kayıt İncelemesi", text: "Taşınmazın tapu kaydı ve varsa şerhler incelenir." },
      { name: "Dayanağın Belirlenmesi", text: "İptal talebinin hukuki gerekçesi netleştirilir." },
      { name: "Dilekçe Hazırlığı", text: "Talep ve deliller dilekçeye işlenir." },
      { name: "Yargılama", text: "Bilirkişi incelemesi sonrası mahkeme karar verir." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "bayrampasa-icra-avukati",
    name: "Bayrampaşa İcra Avukatı",
    heroTitle: "Bayrampaşa İcra Avukatı",
    heroSubtitle:
      "Alacak tahsili amacıyla icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlayan Furkan Arıkan, icra mahkemeleri İstanbul (Çağlayan) Adliyesi'nde olan dosyalarda Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    metaTitle: "Bayrampaşa İcra Avukatı",
    metaDescription:
      "Bayrampaşa'da icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İcra ve iflas hukuku kapsamında alacaklı ve borçlu taraflara danışmanlık veren Furkan Arıkan, İstanbul Barosu'na kayıtlı (72621) bir avukattır; 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve Bayrampaşa'daki müvekkillerine takip sürecinin her aşamasında hizmet vermektedir.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İcra takibinin ilamlı veya ilamsız olarak başlatılması",
      "Borca, imzaya veya yetkiye itiraz dilekçesi hazırlanması",
      "İtirazın iptali davası yoluyla takibin sürdürülmesi",
      "Maaş, banka hesabı ve taşınır/taşınmaz haczi işlemleri",
      "İhalenin feshi talepleri",
      "Konkordato başvurusu ve iflasın ertelenmesi süreçlerinde danışmanlık",
    ],
    localParagraphs: [
      "Forum İstanbul çevresindeki ticari işletmeler ile ilçedeki küçük esnafın alacakları, Bayrampaşa'da icra takiplerinin sık başvurulan bir yol olmasına yol açmaktadır; bu takiplere ilişkin uyuşmazlıklar İstanbul (Çağlayan) Adliyesi'ndeki icra mahkemelerinde görülür.",
      "Borçlunun Bayrampaşa'da yerleşik olduğu takiplerde yetkili icra dairesi, kural olarak borçlunun ikametgahı veya sözleşmede belirlenen yer esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "Ödeme emrine itiraz nasıl yapılır?", answer: "İcra dairesine veya icra mahkemesine yazılı dilekçeyle başvurulur." },
      { question: "İcra takibi ne kadar sürede sonuçlanır?", answer: "Borçlunun itiraz edip etmemesine ve mal varlığına göre değişir." },
      { question: "Maaş haczi ne kadar uygulanabilir?", answer: "Kanunda öngörülen oranlarla sınırlı olarak uygulanır." },
      { question: "Şikayet yolu ne zaman kullanılır?", answer: "İcra memurunun usule aykırı işlemlerine karşı başvurulur." },
      { question: "İcra mahkemesi kararına itiraz edilebilir mi?", answer: "Bazı kararlara karşı istinaf yoluna gidilebilir." },
    ],
    howToTitle: "Bayrampaşa'da İcra Takibi Hangi Aşamalardan Oluşur?",
    howToSteps: [
      { name: "Hazırlık", text: "Alacağı destekleyen belgeler bir araya getirilir." },
      { name: "Başvuru", text: "İcra dairesine takip talebiyle başvurulur." },
      { name: "Tebliğ ve Bekleme", text: "Ödeme emri tebliğ edilir, yasal süre beklenir." },
      { name: "İcra İşlemleri", text: "Gerekirse haciz ve satış aşamasına geçilir." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "bayrampasa-idare-avukati",
    name: "Bayrampaşa İdare Avukatı",
    heroTitle: "Bayrampaşa İdare Avukatı",
    heroSubtitle:
      "Belediye ve diğer kamu kurumu işlemlerine karşı iptal ve tam yargı davalarında temsil sağlayan Furkan Arıkan, yetkili mahkemenin İstanbul idare mahkemeleri olduğu dosyalarda Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    metaTitle: "Bayrampaşa İdare Avukatı",
    metaDescription:
      "Bayrampaşa'da idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "İdari işlemlerin iptali ve tam yargı davalarında danışmanlık veren Furkan Arıkan, İstanbul Barosu'na kayıtlı (72621) bir avukattır; 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve idare hukuku kapsamında Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Tam Yargı Davaları", description: "İdarenin işlem/eyleminden doğan zararın tazmini." },
      { title: "Kentsel Dönüşüm Kararları", description: "Riskli yapı tespitine ilişkin idari işlemlere itiraz." },
      { title: "Belediye İşlemleri", description: "İmar, ruhsat ve ceza kararlarına ilişkin uyuşmazlıklar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Riskli yapı tespitine dayalı kararlara itiraz edilmesi",
      "Belediye ruhsat ve ceza işlemlerine karşı dava açılması",
      "İdarenin işlem/eyleminden doğan zararlarda tam yargı davası",
      "İmar planı değişikliklerine itiraz edilmesi",
      "Yürütmenin durdurulması talebiyle başvuru yapılması",
      "Kamu görevlisi özlük haklarına ilişkin danışmanlık",
    ],
    localParagraphs: [
      "Bayrampaşa'nın yoğun ve eski yapı stoku, riskli yapı tespiti ve kentsel dönüşüm kapsamındaki idari kararların sık dava konusu olmasına yol açmaktadır; bu davalar İstanbul idare mahkemelerinde görülür.",
      "Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür; Forum İstanbul çevresindeki işletmelere yönelik idari para cezaları da bu kapsamda değerlendirilebilir.",
    ],
    faqs: [
      { question: "Riskli yapı tespitine karşı dava açılabilir mi?", answer: "Evet, teknik rapora itirazen idare mahkemesinde dava açılabilir." },
      { question: "İdari dava açma süresi ne kadardır?", answer: "Genellikle tebliğden itibaren 60 gündür." },
      { question: "AVM çevresindeki idari para cezalarına nasıl itiraz edilir?", answer: "Süresi içinde idare mahkemesine iptal davası açılarak itiraz edilebilir." },
      { question: "İmar planı değişikliğine kim itiraz edebilir?", answer: "Değişiklikten etkilenen taşınmaz maliki veya ilgili kişiler itiraz edebilir." },
      { question: "Tam yargı davasında ispat yükü kime aittir?", answer: "Zararı iddia eden tarafa aittir." },
    ],
    howToTitle: "Bayrampaşa'da İdari İptal Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Değerlendirme", text: "İptali istenen işlem ve dayanağı incelenir." },
      { name: "Süre Hesabı", text: "60 günlük başvuru süresi belirlenir." },
      { name: "Dilekçe", text: "Gerekçeli dava dilekçesi hazırlanır ve sunulur." },
      { name: "Karar", text: "İdare mahkemesi dosyayı sonuçlandırır." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "bayrampasa-is-hukuku-avukati",
    name: "Bayrampaşa İş Hukuku Avukatı",
    heroTitle: "Bayrampaşa İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlayan Furkan Arıkan, iş mahkemeleri İstanbul (Çağlayan) Adliyesi bünyesinde olan dosyalarda Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    metaTitle: "Bayrampaşa İş Hukuku Avukatı",
    metaDescription:
      "Bayrampaşa'da kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İşçi ve işveren tarafını temsil eden Furkan Arıkan, İstanbul Barosu'na kayıtlı (72621) bir avukattır; 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve iş hukuku kapsamında Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Perakende/AVM Çalışanları", description: "Forum İstanbul çevresindeki mağaza çalışanlarının uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Fazla mesai, hafta tatili ve yıllık izin alacaklarının tahsili",
      "Mobbing iddialarına ilişkin hukuki süreçler",
      "İş sözleşmesi ve ibraname metinlerinin düzenlenmesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Forum İstanbul ve çevresindeki büyük perakende mağazaları, Bayrampaşa'da önemli bir istihdam alanı oluşturmaktadır. Bu sektördeki iş sözleşmesi uyuşmazlıkları da diğer iş davaları gibi önce zorunlu arabuluculuk sürecinden geçer.",
      "Anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul (Çağlayan) Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "İşe iade davasından önce ne yapılmalı?", answer: "Fesihten itibaren 1 ay içinde arabulucuya başvurulması zorunludur." },
      { question: "Kıdem tazminatı hangi hallerde doğar?", answer: "İşverenin haksız feshi, işçinin haklı sebeple istifası ve emeklilik gibi hallerde doğar." },
      { question: "Bayrampaşa'da iş davası hangi mahkemede görülür?", answer: "İstanbul (Çağlayan) Adliyesi bünyesindeki iş mahkemelerinde görülür." },
      { question: "AVM çalışanlarının vardiya düzeni ispatı nasıl yapılır?", answer: "Puantaj kayıtları, e-posta yazışmaları ve tanık beyanı gibi delillerle ispat edilebilir." },
      { question: "İşçilik alacaklarında zamanaşımı süresi nedir?", answer: "Çoğu işçilik alacağında 5 yıllık zamanaşımı süresi uygulanır." },
    ],
    howToTitle: "Bayrampaşa'da İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Fesih İncelemesi", text: "İş sözleşmesinin sona erme şekli değerlendirilir." },
      { name: "Arabuluculuk", text: "Fesihten itibaren 1 ay içinde arabulucuya başvurulur." },
      { name: "Dava Açılışı", text: "Anlaşma olmazsa iki hafta içinde iş mahkemesine başvurulur." },
      { name: "Karar", text: "Mahkeme feshin geçerliliğini inceleyip sonuçlandırır." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "ise-iade-davasi"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "bayrampasa-kira-tahliye-avukati",
    name: "Bayrampaşa Kira ve Tahliye Avukatı",
    heroTitle: "Bayrampaşa Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında temsil sağlayan Furkan Arıkan, sulh hukuk mahkemeleri İstanbul (Çağlayan) Adliyesi'nde olan dosyalarda Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    metaTitle: "Bayrampaşa Kira ve Tahliye Avukatı",
    metaDescription:
      "Bayrampaşa'da kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kiraya verenlere ve kiracılara danışmanlık veren Furkan Arıkan, İstanbul Barosu'na kayıtlı (72621) bir avukattır; 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve kira hukuku kapsamında Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    highlightCards: [
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "İşyeri Kiraları", description: "Forum İstanbul çevresindeki ticari kira uyuşmazlıkları." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "İşyeri niteliğindeki taşınmazların kira sözleşmeleri",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Bayrampaşa'da konut kiralarının yanı sıra Forum İstanbul çevresinde işyeri niteliğindeki taşınmazlara ilişkin kira uyuşmazlıkları da önemli bir yer tutar. Bu uyuşmazlıklarda taşınmazın bulunduğu yer sulh hukuk mahkemesi görevlidir.",
      "Bu davalara İstanbul (Çağlayan) Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır; işyeri kiralarında ticari teamüller de ayrıca değerlendirmeye alınabilir.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Bayrampaşa'da tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "AVM içindeki mağaza kiralarında ek kural var mı?", answer: "Sözleşmede öngörülen ciro kirası ve ortak gider kalemleri ayrıca değerlendirilmelidir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
    ],
    howToTitle: "Bayrampaşa'da Kiracı Tahliye Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Sebebin Belirlenmesi", text: "Tahliyeye dayanak olacak durum netleştirilir." },
      { name: "Belge Toplama", text: "İhtarname, sözleşme veya taahhütname bir araya getirilir." },
      { name: "Başvuru", text: "Duruma göre sulh hukuk mahkemesi veya icra dairesine başvurulur." },
      { name: "Tahliye", text: "Kesinleşen karar veya emirle taşınmaz teslim alınır." },
    ],
    crosslinkLabel: "Kira ve Tahliye Avukatı",
    relatedPostSlugs: ["kiracinin-tahliye-sureci", "kira-bedeli-tespit-ve-uyarlama-davasi"],
  },

  // ─────────────────────────── VERGİ ───────────────────────────
  {
    slug: "vergi",
    urlSlug: "bayrampasa-vergi-avukati",
    name: "Bayrampaşa Vergi Avukatı",
    heroTitle: "Bayrampaşa Vergi Avukatı",
    heroSubtitle:
      "Vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlayan Furkan Arıkan, yetkili mahkemenin İstanbul vergi mahkemeleri olduğu dosyalarda Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    metaTitle: "Bayrampaşa Vergi Avukatı",
    metaDescription:
      "Bayrampaşa'da vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda danışmanlık veren Furkan Arıkan, İstanbul Barosu'na kayıtlı (72621) bir avukattır; 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve Bayrampaşa'daki müvekkillerine uzlaşma ve dava süreçlerinde hizmet vermektedir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Perakende Sektörü", description: "AVM içi işletmelere özgü vergi uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Vergi incelemesi sürecinde danışmanlık",
      "Gecikme faizi ve zammına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Bayrampaşa'da mükellefiyeti bulunanların vergisel işlemleri Bayrampaşa Vergi Dairesi Müdürlüğü tarafından yürütülür; bu daireye ait tarhiyat ve ceza kararlarına karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir.",
      "Forum İstanbul çevresindeki perakende işletmelerin faaliyet hacmi, KDV ve kurumlar vergisi kaynaklı uyuşmazlıkların da sık görülmesine yol açmaktadır.",
    ],
    faqs: [
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır." },
      { question: "Perakende sektöründe sık görülen vergi uyuşmazlığı nedir?", answer: "Hasılat tespiti ve KDV indirimi reddi sıkça gündeme gelmektedir." },
    ],
    howToTitle: "Bayrampaşa'da Vergi İtirazı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "İnceleme", text: "Tarhiyat veya cezanın dayanağı ayrıntılı incelenir." },
      { name: "Yol Seçimi", text: "Uzlaşma mı yoksa doğrudan dava mı açılacağı kararlaştırılır." },
      { name: "Başvuru", text: "Süresi içinde vergi mahkemesine başvurulur veya uzlaşma istenir." },
      { name: "Sonuçlanma", text: "Mahkeme kararı veya uzlaşma tutanağıyla süreç biter." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "bayrampasa-borclar-hukuku-avukati",
    name: "Bayrampaşa Borçlar Hukuku Avukatı",
    heroTitle: "Bayrampaşa Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Sözleşme uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlayan Furkan Arıkan, ticaret ve asliye hukuk mahkemeleri İstanbul (Çağlayan) Adliyesi'nde olan dosyalarda Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    metaTitle: "Bayrampaşa Borçlar Hukuku Avukatı",
    metaDescription:
      "Bayrampaşa'da sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Sözleşme ve alacak uyuşmazlıklarında danışmanlık veren Furkan Arıkan, İstanbul Barosu'na kayıtlı (72621) bir avukattır; 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve borçlar hukuku kapsamında Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    highlightCards: [
      { title: "Sözleşme Uyuşmazlıkları", description: "İfa, ihlal ve fesih kaynaklı süreçlerin yürütülmesi." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Perakende Tedarik Sözleşmeleri", description: "Mağaza ve tedarikçiler arası uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sözleşmenin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Perakende ve tedarik sözleşmelerinden doğan uyuşmazlıklar",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Forum İstanbul çevresindeki perakende mağazalar ile tedarikçileri arasında kurulan sözleşmelerden doğan uyuşmazlıklar, Bayrampaşa'da sık karşılaşılan bir dava türüdür; bu uyuşmazlıklara niteliğine göre asliye hukuk veya ticaret mahkemelerinde bakılır.",
      "Bu davalar İstanbul (Çağlayan) Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Mağaza kira/tedarik sözleşmesi feshedilirse ne olur?", answer: "Fesih bildirimi usulüne göre yapılmalı, aksi halde tazminat sorumluluğu doğabilir." },
      { question: "Toplu sipariş iptallerinde cezai şart uygulanır mı?", answer: "Sözleşmede öngörülmüşse uygulanır, aşırı olması halinde mahkemece indirilebilir." },
      { question: "Tedarikçi ile mağaza arasındaki uyuşmazlık nerede çözülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde çözülür." },
      { question: "Ürün ayıplı çıkarsa hangi haklar kullanılabilir?", answer: "Değişim, onarım, bedel indirimi veya sözleşmeden dönme talep edilebilir." },
      { question: "Alacağın tahsili için doğrudan icraya gidilebilir mi?", answer: "Evet, alacağı belgeleyen kayıtlarla ilamsız icra takibi başlatılabilir." },
    ],
    howToTitle: "Bayrampaşa'da Alacak Davası Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Kayıtların Toplanması", text: "Sözleşme, sipariş ve fatura belgeleri hazırlanır." },
      { name: "Bildirim", text: "Gerekiyorsa karşı tarafa ihtar gönderilir." },
      { name: "Başvuru", text: "Arabuluculuk veya dava yoluna başvurulur." },
      { name: "Sonuç", text: "Karar veya icra takibiyle alacak tahsil edilir." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];
