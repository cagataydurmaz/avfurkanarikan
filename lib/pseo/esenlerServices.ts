import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const esenlerServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "esenler-avukat",
    name: "Esenler Avukat",
    heroTitle: "Esenler Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, Türkiye'nin en büyük şehirlerarası otobüs terminaline ev sahipliği yapan Esenler'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Bakırköy Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Esenler Avukat",
    metaDescription:
      "Esenler'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İstanbul Otogarı'nın da içinde bulunduğu, kara taşımacılığı ve lojistik sektörünün yoğun olduğu Esenler'de ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Depolama, antrepo ve konut uyuşmazlıklarının takibi." },
      { title: "İş Hukuku", description: "Şoför ve lojistik personeli işçilik alacaklarında destek." },
      { title: "İcra Hukuku", description: "Taşıma alacaklarında takip ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "Taşımacılık yetki belgesi ve idari işlemlere karşı davalar." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı ve cezası uyuşmazlıkları." },
      { title: "Borçlar Hukuku", description: "Taşıma sözleşmesi ve alacak kaynaklı davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Depolama, antrepo ve konut ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Taşıma ve navlun alacaklarının tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Taşıma sözleşmesi kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "Türkiye'nin en yoğun şehirlerarası otobüs terminaline ve çok sayıda nakliye/lojistik firmasına ev sahipliği yapan Esenler, kara taşımacılığı sektörünün İstanbul'daki en önemli merkezlerinden biridir; bu doku, hukuki ihtiyaçları da şekillendirmektedir.",
      "İlçedeki hukuki uyuşmazlıklar İstanbul Bakırköy Adliyesi'nde, vergisel işlemler ise Esenler Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Esenler'deki davalara hangi adliye bakıyor?", answer: "Esenler, İstanbul Bakırköy Adliyesi'nin yargı çevresinde yer almaktadır." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Esenler'de mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Esenler'deki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Nakliye firmaları arası uyuşmazlıklarda destek alınabilir mi?", answer: "Evet, taşıma sözleşmesi ve navlun alacağı uyuşmazlıklarında danışmanlık sağlanır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Bakırköy Adliyesi'ne Esenler'den ulaşım nasıl?", answer: "M1A ve M1B metro hatları üzerinden ulaşım sağlanabilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır." },
    ],
    howToTitle: "Esenler'de Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Esenler Avukat (Genel)",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "esenler-bosanma-avukati",
    name: "Esenler Boşanma Avukatı",
    heroTitle: "Esenler Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; aile mahkemeleri İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Esenler Boşanma Avukatı",
    metaDescription:
      "Esenler'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Aile hukuku alanında Esenler'deki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlar.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Vardiyalı Çalışan Aileler", description: "Şoförlük ve lojistik sektöründe uzun mesai düzenine bağlı velayet düzenlemeleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Uzun süreli seferlere çıkan eşler için kişisel ilişki düzenlemesi talepleri",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Kara taşımacılığı sektöründe çalışan şoför ve lojistik personelinin yoğun olduğu Esenler'de, uzun süreli şehirlerarası seferler nedeniyle velayet düzenlemelerinde kişisel ilişki takviminin gerçekçi biçimde kurulması ayrı bir önem taşımaktadır.",
      "Boşanma, velayet ve nafaka davalarına İstanbul Bakırköy Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "İstanbul Bakırköy Adliyesi'ndeki aile mahkemesine başvurulur." },
      { question: "Şoför olarak çalışan ebeveynin velayet şansı düşer mi?", answer: "Meslek tek başına belirleyici değildir; çocuğun üstün yararı esas alınır, çalışma düzenine uygun kişisel ilişki planı kurulabilir." },
      { question: "Uzun seferlere çıkan eşle kişisel ilişki nasıl düzenlenir?", answer: "Sefer takvimine uyarlanmış esnek bir görüşme planı talep edilebilir." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir." },
    ],
    howToTitle: "Esenler'de Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "esenler-ceza-avukati",
    name: "Esenler Ceza Avukatı",
    heroTitle: "Esenler Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; kovuşturma İstanbul Bakırköy Adliyesi'nde yürütülür.",
    metaTitle: "Esenler Ceza Avukatı",
    metaDescription:
      "Esenler'de soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. Ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında Esenler'deki müvekkillerine müdafilik yapar.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Otogar Çevresi Olaylar", description: "Yolcu ve eşya güvenliğine ilişkin iddialarda savunma." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Otogar ve çevresinde meydana gelen olaylarda müdafilik/mağdur vekilliği",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "Yoğun yolcu ve eşya trafiğine sahne olan İstanbul Otogarı çevresinde, kalabalık ortamların doğası gereği hırsızlık ve dolandırıcılık gibi suç iddiaları zaman zaman gündeme gelebilmektedir.",
      "Kovuşturma aşamasındaki davalar İstanbul Bakırköy Adliyesi'nde görülür. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından belirleyicidir.",
    ],
    faqs: [
      { question: "Esenler'de bir ceza davası hangi adliyede görülür?", answer: "İstanbul Bakırköy Adliyesi'nde görülür." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir ancak müdafi bulundurmak önerilir." },
      { question: "Otogarda eşyası çalınan yolcu ne yapmalı?", answer: "Derhal kolluğa bildirimde bulunmalı ve mümkünse kamera kayıtları tespit edilmelidir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, sulh ceza hakimliğine itiraz edilebilir." },
      { question: "Temyiz kanun yoluna hangi kararlar için başvurulur?", answer: "Kanunda sayılan ağır suçlara ilişkin kararlar için başvurulabilir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Yargılamaya kaldığı yerden devam edilir." },
    ],
    howToTitle: "Esenler'de Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "esenler-gayrimenkul-avukati",
    name: "Esenler Gayrimenkul Avukatı",
    heroTitle: "Esenler Gayrimenkul Avukatı",
    heroSubtitle:
      "Depolama alanları, antrepo kiraları, tapu uyuşmazlıkları ve konut ilişkilerinde hukuki destek sağlanır; davalar İstanbul Bakırköy Adliyesi'nde görülür.",
    metaTitle: "Esenler Gayrimenkul Avukatı",
    metaDescription:
      "Esenler'de depolama/antrepo kiraları, tapu iptali ve konut uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Depolama, antrepo ve konut uyuşmazlıklarında Esenler'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Depolama/Antrepo", description: "Lojistik amaçlı kullanılan taşınmazlarda kira ve teslim uyuşmazlıkları." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Konut Yapı Stoku", description: "Yoğun apartman dokusunda kat mülkiyeti uyuşmazlıkları." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Depolama ve antrepo amaçlı taşınmazların kira sözleşmelerinin hazırlanması",
      "Lojistik firmaları ile mülk sahipleri arasındaki teslim uyuşmazlıkları",
      "Kat malikleri kurulu ve yönetim planı uyuşmazlıklarında temsil",
      "Tapu iptali ve tescil davalarının açılması",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
    ],
    localParagraphs: [
      "Otogar çevresinde yoğunlaşan nakliye ve lojistik firmalarının depolama ihtiyacı, Esenler'de sanayi/depo niteliğindeki taşınmazlara olan talebi artırmakta; bu da kira ve teslim uyuşmazlıklarını sık karşılaşılan bir konu haline getirmektedir.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür.",
    ],
    faqs: [
      { question: "Depo niteliğindeki taşınmaz kirasında nelere dikkat edilmeli?", answer: "Taşınmazın kullanım amacı, teslim tarihi ve varsa özel şartlar sözleşmede açıkça belirtilmelidir." },
      { question: "Antrepo kiracısı taşınmazı zamanında teslim etmezse ne olur?", answer: "Sözleşmede öngörülen gecikme cezası talep edilebilir, gerekirse tahliye yoluna gidilebilir." },
      { question: "Esenler'de gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir." },
      { question: "Kat malikleri kurulu kararına nasıl itiraz edilir?", answer: "Karara katılmayan malik, belirli süre içinde iptal davası açabilir." },
    ],
    howToTitle: "Esenler'de Tapu İptali Süreci Nasıl İlerler?",
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
    urlSlug: "esenler-icra-avukati",
    name: "Esenler İcra Avukatı",
    heroTitle: "Esenler İcra Avukatı",
    heroSubtitle:
      "Taşıma ve navlun alacaklarının tahsili amacıyla icra takibi, itiraz ve haciz süreçlerinde temsil sağlanır; icra daireleri İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Esenler İcra Avukatı",
    metaDescription:
      "Esenler'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İcra ve iflas hukuku kapsamında Esenler'deki nakliye ve lojistik firmalarına, esnafa ve bireysel müvekkillere danışmanlık verir.",
    highlightCards: [
      { title: "Navlun Alacakları", description: "Taşıma sözleşmelerinden doğan alacakların takibi." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Araç, menkul ve gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Navlun ve taşıma bedeli alacakları için icra takibi başlatılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Ticari araç dahil menkul ve gayrimenkul üzerinde haciz uygulanması",
      "İhaleye katılım ve ihalenin feshi talepleri",
      "Mali sıkıntı yaşayan nakliye firmaları için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "İstanbul Otogarı çevresinde yoğunlaşan çok sayıda nakliye ve lojistik firması arasındaki navlun ve taşıma bedeli alacakları, Esenler'de icra takiplerinin sık başvurulan nedenleri arasındadır.",
      "Bu takiplere ilişkin uyuşmazlıklar İstanbul Bakırköy Adliyesi'ndeki icra mahkemelerinde görülür; borçlunun Esenler'de yerleşik olduğu takiplerde yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "Sözleşme, senet, fatura, taşıma irsaliyesi veya mahkeme ilamı gibi belgelerle başlanabilir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Tebliğden itibaren 7 gündür." },
      { question: "Taşıma sırasında hasar oluşursa navlun alacağı etkilenir mi?", answer: "Hasarın sorumluluğu ve kapsamı ayrıca değerlendirilir, bu durum navlun talebini etkileyebilir." },
      { question: "Haciz işlemi ticari araçlara uygulanabilir mi?", answer: "Evet, kanunen haczi caiz olan ticari araçlar üzerinde haciz uygulanabilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür." },
    ],
    howToTitle: "Esenler'de İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "esenler-idare-avukati",
    name: "Esenler İdare Avukatı",
    heroTitle: "Esenler İdare Avukatı",
    heroSubtitle:
      "Taşımacılık yetki belgesi, belediye ve imar işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Esenler İdare Avukatı",
    metaDescription:
      "Esenler'de idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. İdari işlemlerin iptali ve tam yargı davalarında Esenler'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Taşımacılık Belgeleri", description: "K1/K2 yetki belgesi ve idari para cezalarına ilişkin uyuşmazlıklar." },
      { title: "Otogar İşletme İzinleri", description: "Terminal içi işyeri ve acentelik ruhsatlarına ilişkin süreçler." },
      { title: "Belediye İşlemleri", description: "Ruhsat ve idari para cezalarına ilişkin uyuşmazlıklar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Karayolu taşımacılığı yetki belgesi iptaline karşı dava süreçleri",
      "Otogar içi işyeri ve acentelik ruhsat işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Belediye ruhsat işlemlerine itiraz edilmesi",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Kara taşımacılığı sektörünün yoğun olduğu Esenler'de, taşımacılık yetki belgelerine ve otogar içi işyeri ruhsatlarına ilişkin idari işlemler diğer ilçelere kıyasla daha sık gündeme gelmektedir.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "Taşımacılık yetki belgesi iptal edilirse ne yapılabilir?", answer: "İptal işlemine karşı idare mahkemesinde dava açılabilir." },
      { question: "Otogar içi işyeri ruhsatı reddedilirse itiraz süresi nedir?", answer: "Tebliğ tarihinden itibaren 60 gün içinde idare mahkemesinde dava açılabilir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, yasal süresinde idare mahkemesinde dava açılabilir." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İlan tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılmalıdır." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde dava açılabilir." },
    ],
    howToTitle: "Esenler'de İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "esenler-is-hukuku-avukati",
    name: "Esenler İş Hukuku Avukatı",
    heroTitle: "Esenler İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Esenler İş Hukuku Avukatı",
    metaDescription:
      "Esenler'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Esenler'deki şoför, lojistik personeli ve diğer çalışanlara ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Şoför/Lojistik Alacakları", description: "Yol tazminatı, fazla mesai ve harcırah uyuşmazlıkları." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Şoförler için yol/harcırah ve fazla mesai alacaklarının tahsili",
      "Sigortasız veya eksik günlü çalışmaya ilişkin hizmet tespiti davaları",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "İstanbul Otogarı ve çevresindeki lojistik firmalarında yoğun bir şoför ve nakliye personeli istihdamının bulunduğu Esenler'de, uzun mesafe seferlerine bağlı fazla mesai ve harcırah uyuşmazlıkları sık gündeme gelmektedir.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Bakırköy Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Şehirlerarası sefer yapan şoförün fazla mesaisi nasıl hesaplanır?", answer: "Fiili çalışma süresi ve dinlenme süreleri birlikte değerlendirilerek hesaplanır." },
      { question: "Harcırah ödenmezse ne yapılabilir?", answer: "Ödenmeyen harcırah alacağı için arabuluculuk ve dava yoluna gidilebilir." },
      { question: "Esenler'de iş mahkemesi nerededir?", answer: "İstanbul Bakırköy Adliyesi bünyesindedir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir." },
      { question: "Trafik kazası geçiren şoför için iş kazası tazminatı istenebilir mi?", answer: "İşle ilgili bir sefer sırasında meydana gelen kaza iş kazası sayılabilir, şartları taşıması halinde tazminat talep edilebilir." },
    ],
    howToTitle: "Esenler'de İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "esenler-kira-tahliye-avukati",
    name: "Esenler Kira ve Tahliye Avukatı",
    heroTitle: "Esenler Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Esenler'de konut ya da depo/antrepo niteliğindeki taşınmazların tahliyesi, kira bedelinin belirlenmesi ve kira sözleşmesinden doğan uyuşmazlıklarda destek verilir; bu davalar İstanbul Bakırköy Adliyesi'ndeki sulh hukuk mahkemelerinde görülür.",
    metaTitle: "Esenler Kira ve Tahliye Avukatı",
    metaDescription:
      "Esenler'de kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kira hukuku alanında Esenler'deki kiraya verenlere ve kiracılara danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Depo/Antrepo Tahliyesi", description: "Lojistik amaçlı kullanılan taşınmazlarda tahliye süreci." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Konut ve depo/antrepo kira sözleşmelerinin hazırlanması ve incelenmesi",
      "İhtiyaç nedeniyle açılan tahliye davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Esenler'de yoğun konut dokusunun yanında, İstanbul Otogarı çevresindeki lojistik firmalarının depolama ihtiyacı nedeniyle kiracılık ilişkisiyle işletilen depo/antrepo niteliğinde taşınmazlar da bulunur; bu taşınmazların tahliyesi konut kiralarından farklı usul kurallarına tabi olabilir.",
      "Bu taşınmazın konut mu yoksa işyeri mi sayılacağı, uygulanacak usulü doğrudan etkileyen bir husustur; ilgili davalar İstanbul Bakırköy Adliyesi çatısı altındaki sulh hukuk mahkemelerinde görülmektedir.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Depo kiracısının tahliyesi konuttan farklı mı?", answer: "Genel usul benzer olmakla birlikte, işyeri kiralarında ihtiyaç sebebiyle tahliyede ek koşullar aranabilir." },
      { question: "Esenler'de tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
    ],
    howToTitle: "Esenler'de Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "esenler-vergi-avukati",
    name: "Esenler Vergi Avukatı",
    heroTitle: "Esenler Vergi Avukatı",
    heroSubtitle:
      "Esenler'deki nakliye ve lojistik işletmeleri için vergi tarhiyatına, kesilen cezalara ve uzlaşma sürecine ilişkin temsil sağlanır; bu uyuşmazlıklarda yetkili yargı mercii İstanbul vergi mahkemeleridir.",
    metaTitle: "Esenler Vergi Avukatı",
    metaDescription:
      "Esenler'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Vergi tarhiyatı ve buna bağlı cezalara ilişkin uyuşmazlıklarda Esenler'deki müvekkillerine danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukat olup 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Nakliye Sektörü", description: "Taşımacılık işletmelerine yönelik vergi incelemesi süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Nakliye ve lojistik işletmelerinde vergi incelemesi sürecinde danışmanlık",
      "Motorlu taşıtlar vergisi ve ÖTV kaynaklı uyuşmazlıklarda destek",
    ],
    localParagraphs: [
      "Esenler'de motorlu taşıtlar vergisi, KDV ve navlun gelirleriyle ilgili vergi incelemeleri ile bunların sonucunda uygulanan ceza kesme işlemleri sıkça gündeme gelmektedir; bunun başlıca nedeni İstanbul Otogarı çevresinde yoğunlaşan nakliye ve taşımacılık faaliyetleridir.",
      "İstanbul vergi mahkemeleri, bu tür işlemlere karşı açılan davalara bakmakla görevlidir; ihbarnamenin tebliğinden itibaren 30 günlük süre içinde dava açılması gerekir.",
    ],
    faqs: [
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Navlun gelirleri eksik beyan edilirse ne olur?", answer: "Re'sen veya ikmalen tarhiyat ve buna bağlı ceza uygulanabilir, bu işlemlere karşı dava açılabilir." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır." },
    ],
    howToTitle: "Esenler'de Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "esenler-borclar-hukuku-avukati",
    name: "Esenler Borçlar Hukuku Avukatı",
    heroTitle: "Esenler Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Taşıma sözleşmesi uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; ticaret ve asliye hukuk mahkemeleri İstanbul Bakırköy Adliyesi'ndedir.",
    metaTitle: "Esenler Borçlar Hukuku Avukatı",
    metaDescription:
      "Esenler'de sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Borçlar hukuku kapsamında Esenler'deki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık verir.",
    highlightCards: [
      { title: "Taşıma Sözleşmeleri", description: "Eşya taşıma ve nakliye sözleşmelerinden doğan uyuşmazlıklar." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Acentelik İlişkileri", description: "Otogar içi bilet satış ve acentelik sözleşmesi uyuşmazlıkları." },
      { title: "Tazminat Talepleri", description: "Taşıma sırasında oluşan hasarlardan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Eşya taşıma sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Taşıma sırasında oluşan hasar nedeniyle tazminat talepleri",
      "Otogar içi acentelik ve bilet satış sözleşmelerinden doğan uyuşmazlıklar",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Kara taşımacılığı ve nakliye sektörünün merkezlerinden biri olan Esenler'de, eşya taşıma sözleşmelerinden doğan hasar ve gecikme kaynaklı tazminat talepleri sık karşılaşılan dava türleri arasındadır.",
      "Bu davalar İstanbul Bakırköy Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Taşıma sırasında eşya hasar görürse kim sorumludur?", answer: "Kural olarak taşıyıcı, taşıma süresince oluşan hasardan sorumlu tutulabilir; sözleşme şartları da dikkate alınır." },
      { question: "Otogar içi acentelik sözleşmesi tek taraflı feshedilebilir mi?", answer: "Sözleşme şartlarına ve haklı sebebin bulunup bulunmadığına göre değerlendirilir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir." },
    ],
    howToTitle: "Esenler'de Alacak Davası Süreci Nasıl İşler?",
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
