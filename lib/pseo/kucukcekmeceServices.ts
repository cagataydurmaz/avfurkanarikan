import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const kucukcekmeceServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "kucukcekmece-avukat",
    name: "Küçükçekmece Avukat",
    heroTitle: "Küçükçekmece Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, dünyada nadir bulunan tipik lagün göllerinden birine ve 200'ü aşkın büyük fabrikaya ev sahipliği yapan Küçükçekmece'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Küçükçekmece Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Küçükçekmece Avukat",
    metaDescription:
      "Küçükçekmece'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Adını taşıyan nadir lagün gölüyle ve yoğun imalat sanayisiyle tanınan Küçükçekmece'de ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Fabrika/sanayi tesisi ve konut uyuşmazlıklarının takibi." },
      { title: "İş Hukuku", description: "Fabrika çalışanlarının işçilik alacaklarında destek." },
      { title: "İcra Hukuku", description: "Ticari alacak takibi ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "İdari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı ve cezası uyuşmazlıkları." },
      { title: "Borçlar Hukuku", description: "Sanayi sözleşmesi ve alacak kaynaklı davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Fabrika/sanayi tesisi ve konut ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Ticari alacakların tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sanayi sözleşmesi kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "Dünyada az sayıda örneği bulunan tipik bir lagün gölü olan Küçükçekmece Gölü'ne kıyısı bulunan ilçede, 200'ü aşkın büyük fabrika ve yaklaşık 10 bin kayıtlı imalathane ile Küçükçekmece, İstanbul'un önemli sanayi ve ticaret merkezlerinden biridir.",
      "İlçedeki hukuki uyuşmazlıklar İstanbul Küçükçekmece Adliyesi'nde, vergisel işlemler ise Küçükçekmece Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Küçükçekmece'deki davalara hangi adliye bakıyor?", answer: "Küçükçekmece, İstanbul Küçükçekmece Adliyesi'nin yargı çevresinde yer almaktadır." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Küçükçekmece'de mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Küçükçekmece'deki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Fabrika/imalathane uyuşmazlıklarında destek alınabilir mi?", answer: "Evet, ticari sözleşme ve alacak uyuşmazlıklarında danışmanlık sağlanır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır." },
      { question: "Küçükçekmece Adliyesi'ne ulaşım nasıl?", answer: "M1B metro hattı ve Marmaray bağlantıları üzerinden ulaşım sağlanabilir." },
    ],
    howToTitle: "Küçükçekmece'de Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Küçükçekmece Avukat (Genel)",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz", "kidem-tazminati-hesaplama-2026"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "kucukcekmece-bosanma-avukati",
    name: "Küçükçekmece Boşanma Avukatı",
    heroTitle: "Küçükçekmece Boşanma Avukatı",
    heroSubtitle:
      "İstanbul Küçükçekmece Adliyesi bünyesindeki aile mahkemelerinde görülen anlaşmalı ve çekişmeli boşanma davalarında velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır.",
    metaTitle: "Küçükçekmece Boşanma Avukatı",
    metaDescription:
      "Küçükçekmece'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Boşanma, velayet ve nafaka gibi aile hukuku uyuşmazlıklarında Küçükçekmece'deki müvekkillerini temsil eden Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat olarak görev yapmaktadır.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
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
      "Küçükçekmece'de görülen boşanma, velayet ve nafaka davalarına İstanbul Küçükçekmece Adliyesi bünyesindeki aile mahkemeleri bakar; süreç anlaşmalı yürütülürse protokolün eksiksizliği, çekişmeli yürütülürse delillerin yeterliliği belirleyici olur.",
      "İlçenin yoğun nüfusu ve sanayi işletmelerinin yaygınlığı düşünüldüğünde, velayet süreçlerinde çalışma düzenine bağlı kişisel ilişki planlamasının da zaman zaman ayrıca değerlendirilmesi gerekebilmektedir.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "İstanbul Küçükçekmece Adliyesi'ndeki aile mahkemesine başvurulur." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir." },
      { question: "Mal rejimi tasfiyesinde işletme payı nasıl değerlendirilir?", answer: "Edinilmiş mal sayılırsa katılma alacağı hesabına dahil edilir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir." },
    ],
    howToTitle: "Küçükçekmece'de Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "İhtiyaç Analizi", text: "Velayet, nafaka ve mal rejimi talepleri belirlenir." },
      { name: "Dilekçe Hazırlığı", text: "Duruma uygun dava dilekçesi veya protokol yazılır." },
      { name: "Dava Açılışı", text: "Yetkili aile mahkemesine başvurulur." },
      { name: "Sonuç", text: "Duruşma sonrası karar açıklanır." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "bosanmada-nafaka-turleri"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "kucukcekmece-ceza-avukati",
    name: "Küçükçekmece Ceza Avukatı",
    heroTitle: "Küçükçekmece Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; kovuşturma İstanbul Küçükçekmece Adliyesi'nde yürütülür.",
    metaTitle: "Küçükçekmece Ceza Avukatı",
    metaDescription:
      "Küçükçekmece'de soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. Ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında Küçükçekmece'deki müvekkillerine müdafilik yapar.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "İş Güvenliği İhlalleri", description: "Fabrika/sanayi tesisi kaynaklı iddialarda savunma." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "İş güvenliği ihlali iddialarına ilişkin süreçlerde destek",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "Yoğun bir sanayi ve imalat dokusuna sahip Küçükçekmece'de, iş güvenliği ihlalleri ve iş kazası kaynaklı taksirle yaralama/ölüme sebebiyet iddialarına dayalı ceza soruşturmaları zaman zaman gündeme gelebilmektedir.",
      "Kovuşturma aşamasındaki davalar İstanbul Küçükçekmece Adliyesi'nde görülür. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından belirleyicidir.",
    ],
    faqs: [
      { question: "Küçükçekmece'de bir ceza davası hangi adliyede görülür?", answer: "İstanbul Küçükçekmece Adliyesi'nde görülür." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir ancak müdafi bulundurmak önerilir." },
      { question: "Fabrikada iş kazası sonrası ceza soruşturması nasıl işler?", answer: "Olay yeri incelemesi ve bilirkişi raporu doğrultusunda kusur durumu değerlendirilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, sulh ceza hakimliğine itiraz edilebilir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Yargılamaya kaldığı yerden devam edilir." },
    ],
    howToTitle: "Küçükçekmece'de Ceza Yargılaması Nasıl İlerler?",
    howToSteps: [
      { name: "Olay Bildirimi", text: "Şikayet, ihbar veya resen harekete geçilir." },
      { name: "Soruşturma Aşaması", text: "Deliller toplanır, ifadeler alınır." },
      { name: "Dava Açılması", text: "İddianamenin kabulüyle kovuşturma başlar." },
      { name: "Temyiz/İstinaf", text: "Karara karşı üst yargı yoluna gidilebilir." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "kucukcekmece-gayrimenkul-avukati",
    name: "Küçükçekmece Gayrimenkul Avukatı",
    heroTitle: "Küçükçekmece Gayrimenkul Avukatı",
    heroSubtitle:
      "Fabrika ve sanayi tesisi taşınmazları, tapu uyuşmazlıkları ve konut ilişkilerinde hukuki destek sağlanır; davalar İstanbul Küçükçekmece Adliyesi'nde görülür.",
    metaTitle: "Küçükçekmece Gayrimenkul Avukatı",
    metaDescription:
      "Küçükçekmece'de fabrika/sanayi tesisi kiraları, tapu iptali ve konut uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Fabrika/sanayi tesisi ve konut uyuşmazlıklarında Küçükçekmece'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Sanayi Tesisi Taşınmazları", description: "Fabrika ve imalathane niteliğindeki taşınmazlarda kira uyuşmazlıkları." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Göl Kıyısı İmar Uygulamaları", description: "Küçükçekmece Gölü çevresi imar kısıtlamaları." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fabrika ve imalathane niteliğindeki taşınmazların kira sözleşmelerinin hazırlanması",
      "Sanayi tesisi devrine ilişkin uyuşmazlıklarda temsil",
      "Tapu iptali ve tescil davalarının açılması",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
      "Ortaklığın giderilmesi (izale-i şüyu) davaları",
    ],
    localParagraphs: [
      "200'ü aşkın büyük fabrikaya ve binlerce imalathaneye ev sahipliği yapan Küçükçekmece'de, sanayi tesisi niteliğindeki taşınmazların kira ve devir uyuşmazlıkları önemli bir gayrimenkul hukuku konusudur.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Küçükçekmece Adliyesi bünyesinde görülür.",
    ],
    faqs: [
      { question: "Fabrika niteliğindeki taşınmazın devrinde nelere dikkat edilmeli?", answer: "İmar durumu, çevre izinleri ve kira sözleşmesindeki devir şartları incelenmelidir." },
      { question: "Küçükçekmece'de gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Küçükçekmece Adliyesi bünyesinde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir." },
      { question: "Göl çevresindeki bir taşınmazda yapılaşma kısıtı var mı?", answer: "İmar planına göre değişebilir, satın alma öncesi imar durumu belgesi incelenmelidir." },
      { question: "Sanayi tesisi kirasında rayiç bedel nasıl tespit edilir?", answer: "Bölgedeki emsal kira bedelleri bilirkişi incelemesiyle değerlendirilir." },
    ],
    howToTitle: "Küçükçekmece'de Tapu İptali Süreci Nasıl İlerler?",
    howToSteps: [
      { name: "Kayıt İncelemesi", text: "Taşınmazın tapu kaydı, imar durumu ve varsa şerhler incelenir." },
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
    urlSlug: "kucukcekmece-icra-avukati",
    name: "Küçükçekmece İcra Avukatı",
    heroTitle: "Küçükçekmece İcra Avukatı",
    heroSubtitle:
      "İcra daireleri İstanbul Küçükçekmece Adliyesi bünyesinde yer alır; sanayi ve ticari alacakların tahsiline yönelik icra takibi, itiraz ve haciz süreçlerinde temsil verilir.",
    metaTitle: "Küçükçekmece İcra Avukatı",
    metaDescription:
      "Küçükçekmece'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, icra ve iflas hukuku alanında Küçükçekmece'deki fabrika işletmecilerine, esnafa ve bireysel müvekkillere danışmanlık vermektedir.",
    highlightCards: [
      { title: "Sanayi Alacakları", description: "Fabrika ve imalathaneler arası ticari alacakların takibi." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fabrika ve imalathaneler arası fatura/senet alacakları için icra takibi başlatılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "İhaleye katılım ve ihalenin feshi talepleri",
      "Mali sıkıntı yaşayan işletmeler için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Küçükçekmece'de 200'ü aşkın büyük fabrika ve binlerce imalathane faaliyet göstermektedir; tedarikçi ile alıcı arasındaki ticari ilişkilerden doğan çek ve senet alacakları, bu ortamda açılan icra takiplerinin başlıca nedenidir.",
      "İstanbul Küçükçekmece Adliyesi bünyesindeki icra mahkemeleri bu takiplere ilişkin uyuşmazlıklara bakmaktadır; borçlunun Küçükçekmece'de yerleşik olduğu dosyalarda yetkili icra dairesi, kural olarak borçlunun ikametgahı esas alınarak belirlenir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "Sözleşme, senet, çek, fatura veya mahkeme ilamı gibi belgelerle başlanabilir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Tebliğden itibaren 7 gündür." },
      { question: "Karşılıksız çek nedeniyle icra takibi nasıl başlatılır?", answer: "Çek bankaya ibraz edildikten sonra kambiyo senetlerine özgü haciz yoluyla takip başlatılabilir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür." },
    ],
    howToTitle: "Küçükçekmece'de İcra Takibi Hangi Aşamalardan Oluşur?",
    howToSteps: [
      { name: "Belge Derlemesi", text: "Alacağa dayanak oluşturan belgeler toplanır." },
      { name: "İcra Dairesine Başvuru", text: "Yetkili icra dairesinde takip dosyası açılır." },
      { name: "Tebligat Aşaması", text: "Borçluya ödeme emri gönderilir." },
      { name: "Haciz/Tahsilat", text: "Süreç sonunda haciz ve tahsilat işlemleri yürütülür." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "kucukcekmece-idare-avukati",
    name: "Küçükçekmece İdare Avukatı",
    heroTitle: "Küçükçekmece İdare Avukatı",
    heroSubtitle:
      "Sanayi tesisi ruhsatları, çevre izinleri ve belediye işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Küçükçekmece İdare Avukatı",
    metaDescription:
      "Küçükçekmece'de idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. İdari işlemlerin iptali ve tam yargı davalarında Küçükçekmece'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Sanayi Tesisi Ruhsatları", description: "Fabrika ve imalathane işletme ruhsatlarına ilişkin uyuşmazlıklar." },
      { title: "Çevre İzinleri", description: "Göl çevresi ve çevre mevzuatına ilişkin idari işlemler." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sanayi tesisi işletme ruhsatı işlemlerine itiraz edilmesi",
      "Çevre mevzuatına ilişkin idari işlemlerde danışmanlık",
      "İmar planı değişikliklerine karşı iptal davası açılması",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Yoğun sanayi faaliyetinin sürdüğü Küçükçekmece'de, fabrika işletme ruhsatlarına ve çevre mevzuatına ilişkin idari işlemler, göl çevresindeki imar kararlarıyla birlikte sık başvurulan idari dava konuları arasındadır.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "Fabrika işletme ruhsatı iptal edilirse ne yapılabilir?", answer: "İptal işlemine karşı idare mahkemesinde dava açılabilir." },
      { question: "Çevre cezası kesilirse itiraz edilebilir mi?", answer: "Evet, idari para cezasına karşı yasal süresinde dava açılabilir." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İlan tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılmalıdır." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde dava açılabilir." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "Tam yargı davası yoluyla zararın tazmini talep edilebilir." },
    ],
    howToTitle: "Küçükçekmece'de İdari İptal Davası Nasıl Açılır?",
    howToSteps: [
      { name: "İnceleme", text: "İptali istenen işlem ve ilan/tebliğ tarihi belirlenir." },
      { name: "Süre Takibi", text: "60 günlük yasal süre hesaplanır." },
      { name: "Dilekçe Hazırlığı", text: "Talep ve gerekçeler dilekçeye işlenir." },
      { name: "Yargılama", text: "İdare mahkemesi dosyayı inceleyip karar verir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "kucukcekmece-is-hukuku-avukati",
    name: "Küçükçekmece İş Hukuku Avukatı",
    heroTitle: "Küçükçekmece İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul Küçükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Küçükçekmece İş Hukuku Avukatı",
    metaDescription:
      "Küçükçekmece'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Küçükçekmece'deki fabrika ve imalathane çalışanlarına ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Fabrika Çalışanları", description: "Vardiyalı çalışma ve iş güvenliği uyuşmazlıkları." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Vardiyalı çalışmaya bağlı fazla mesai alacaklarının tahsili",
      "Sigortasız veya eksik günlü çalışmaya ilişkin hizmet tespiti davaları",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "200'ü aşkın büyük fabrika ve binlerce imalathaneye ev sahipliği yapan Küçükçekmece'de, vardiyalı çalışma düzenine bağlı fazla mesai ve iş güvenliği kaynaklı iş kazası uyuşmazlıkları sık gündeme gelmektedir.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Küçükçekmece Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Fabrikada iş kazası geçiren işçi ne yapmalı?", answer: "Olay derhal SGK'ya bildirilmeli, tedavi ve tazminat süreci başlatılmalıdır." },
      { question: "Vardiyalı çalışanların fazla mesai hakkı nasıl hesaplanır?", answer: "Haftalık 45 saati aşan çalışma süreleri fazla mesai olarak değerlendirilir." },
      { question: "Küçükçekmece'de iş mahkemesi nerededir?", answer: "İstanbul Küçükçekmece Adliyesi bünyesindedir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir." },
      { question: "Sigortasız çalıştırılan işçinin hakları nelerdir?", answer: "Hizmet tespiti davası açılarak çalışma süresi mahkemece tespit ettirilebilir." },
    ],
    howToTitle: "Küçükçekmece'de İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Fesih Değerlendirmesi", text: "İşten çıkarma gerekçesi ve usulü incelenir." },
      { name: "Arabulucuya Başvuru", text: "Yasal süre içinde arabuluculuk sürecine başlanır." },
      { name: "Dava Süreci", text: "Anlaşma olmazsa iş mahkemesinde dava açılır." },
      { name: "Sonuç", text: "Mahkeme kararı doğrultusunda işlem yapılır." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "ise-iade-davasi"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "kucukcekmece-kira-tahliye-avukati",
    name: "Küçükçekmece Kira ve Tahliye Avukatı",
    heroTitle: "Küçükçekmece Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Konut ve fabrika/imalathane tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemeleri İstanbul Küçükçekmece Adliyesi'ndedir.",
    metaTitle: "Küçükçekmece Kira ve Tahliye Avukatı",
    metaDescription:
      "Küçükçekmece'de kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Kira hukuku alanında Küçükçekmece'deki kiraya verenlere ve kiracılara danışmanlık verir.",
    highlightCards: [
      { title: "Fabrika/İmalathane Kiraları", description: "Sanayi tesisi niteliğindeki taşınmazlarda kira süreçleri." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fabrika ve imalathane niteliğindeki taşınmazların kira sözleşmelerinin hazırlanması",
      "İhtiyaç nedeniyle açılan tahliye davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Konut stokunun yanı sıra çok sayıda fabrika ve imalathanenin de kiracılık ilişkisiyle işletildiği Küçükçekmece'de, sanayi tesisi tahliyeleri konut kiralarına kıyasla farklı usul kurallarına tabi olabilmektedir.",
      "Bu davalara İstanbul Küçükçekmece Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır; taşınmazın konut mu işyeri mi olduğu, uygulanacak usulü doğrudan etkiler.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Fabrika kiracısının tahliyesi konuttan farklı mı?", answer: "Genel usul benzer olmakla birlikte, işyeri kiralarında ihtiyaç sebebiyle tahliyede ek koşullar aranabilir." },
      { question: "Küçükçekmece'de tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
    ],
    howToTitle: "Küçükçekmece'de Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "kucukcekmece-vergi-avukati",
    name: "Küçükçekmece Vergi Avukatı",
    heroTitle: "Küçükçekmece Vergi Avukatı",
    heroSubtitle:
      "Yetkili mahkeme İstanbul vergi mahkemeleri olmak üzere; sanayi işletmelerine yönelik vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil hizmeti sunulur.",
    metaTitle: "Küçükçekmece Vergi Avukatı",
    metaDescription:
      "Küçükçekmece'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukat olup, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur; vergi tarhiyatı ve buna bağlı cezalara ilişkin uyuşmazlıklarda Küçükçekmece'deki müvekkillerine danışmanlık sağlamaktadır.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Sanayi İşletmeleri", description: "Fabrika ve imalathanelere yönelik vergi incelemesi süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Fabrika ve imalathanelerde vergi incelemesi sürecinde danışmanlık",
      "Kayıt dışı işlem iddialarına karşı savunma hazırlanması",
    ],
    localParagraphs: [
      "Vergi tarhiyatı veya cezasına karşı açılan davalara İstanbul vergi mahkemelerinde bakılmakta olup, ihbarnamenin tebliğinden itibaren dava açma süresi 30 gün ile sınırlıdır.",
      "200'ü aşkın büyük fabrikanın bulunduğu Küçükçekmece'de, işletmelerin üretim ve satış kayıtlarının vergi incelemesine konu edilmesi ile buna bağlı olarak kesilen cezalar, sıklıkla karşılaşılan uyuşmazlık türleri arasında yer almaktadır.",
    ],
    faqs: [
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Fabrika üretim kayıtları vergi incelemesinde nasıl değerlendirilir?", answer: "Üretim, sevkiyat ve satış belgeleri karşılaştırmalı olarak incelenir." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır." },
    ],
    howToTitle: "Küçükçekmece'de Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "kucukcekmece-borclar-hukuku-avukati",
    name: "Küçükçekmece Borçlar Hukuku Avukatı",
    heroTitle: "Küçükçekmece Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Sanayi tedarik sözleşmesi uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; ticaret ve asliye hukuk mahkemeleri İstanbul Küçükçekmece Adliyesi'ndedir.",
    metaTitle: "Küçükçekmece Borçlar Hukuku Avukatı",
    metaDescription:
      "Küçükçekmece'de sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Borçlar hukuku kapsamında Küçükçekmece'deki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık verir.",
    highlightCards: [
      { title: "Sanayi Tedarik Sözleşmeleri", description: "Hammadde ve yarı mamul tedarik sözleşmesi uyuşmazlıkları." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Fason İmalat Sözleşmeleri", description: "Fason üretim ilişkilerinden doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Hammadde ve yarı mamul tedarik sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Fason imalat sözleşmelerinden doğan uyuşmazlıklar",
      "Ayıplı mal nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Yoğun imalat sanayisine sahip Küçükçekmece'de, hammadde tedariki ve fason üretim ilişkilerinden doğan ayıplı ifa ile ödeme gecikmesi kaynaklı uyuşmazlıklar sık karşılaşılan dava türleri arasındadır.",
      "Bu davalar İstanbul Küçükçekmece Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Fason üretimde teslim edilen ürün şartnameye uymazsa ne olur?", answer: "Ayıba dayalı olarak bedel indirimi veya sözleşmeden dönme talep edilebilir." },
      { question: "Tedarikçi malı zamanında teslim etmezse ne yapılabilir?", answer: "Sözleşmede öngörülen gecikme cezası talep edilebilir, gerekirse sözleşmeden dönme hakkı kullanılabilir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, İstanbul Küçükçekmece Adliyesi bünyesinde görülür." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir." },
    ],
    howToTitle: "Küçükçekmece'de Ticari Alacak Davası Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Delillerin Tespiti", text: "Sözleşme, fatura ve diğer belgelerle alacağın dayanağı ortaya konur." },
      { name: "Ön Koşullar", text: "Gerekiyorsa ihtarname çekilir veya arabuluculuğa başvurulur." },
      { name: "Dava Açılması", text: "Yetkili mahkemede alacak davası açılır." },
      { name: "İcra Aşaması", text: "Kararın kesinleşmesiyle gerekirse icra takibi başlatılır." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];
