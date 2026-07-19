import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const zeytinburnuServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "zeytinburnu-avukat",
    name: "Zeytinburnu Avukat",
    heroTitle: "Zeytinburnu Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, yüzyıllardır süregelen deri ve konfeksiyon ticaretiyle bilinen Kazlıçeşme'nin de içinde bulunduğu Zeytinburnu'nda ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Bakırköy Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Zeytinburnu Avukat",
    metaDescription:
      "Zeytinburnu'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Kazlıçeşme'nin tarihi deri ve konfeksiyon ticaret dokusuyla bilinen Zeytinburnu'nda ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Mağaza, showroom ve konut uyuşmazlıklarının takibi." },
      { title: "İş Hukuku", description: "Konfeksiyon ve satış personeli işçilik alacaklarında destek." },
      { title: "İcra Hukuku", description: "Ticari alacak takibi ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "İdari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "İhracat KDV iadesi dahil vergi uyuşmazlıkları." },
      { title: "Borçlar Hukuku", description: "Toptan satış sözleşmesi ve alacak kaynaklı davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Mağaza, showroom ve konut ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Toptan satış alacaklarının tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Toptan satış sözleşmesi kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "Fetihten bu yana deri imalatıyla anılan Kazlıçeşme mahallesinde bugün 500'ü aşkın firmanın satış mağazası ve dikim atölyesi faaliyet göstermekte; bu tarihi ticaret dokusu, Zeytinburnu'nun hukuki ihtiyaçlarını da şekillendirmektedir.",
      "İlçedeki hukuki uyuşmazlıklar İstanbul Bakırköy Adliyesi'nde, vergisel işlemler ise Zeytinburnu Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Zeytinburnu'daki davalara hangi adliye bakıyor?", answer: "Zeytinburnu, İstanbul Bakırköy Adliyesi'nin yargı çevresinde yer almaktadır." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Zeytinburnu'da mı bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Zeytinburnu'daki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Deri ve konfeksiyon firmaları arası uyuşmazlıklarda destek alınabilir mi?", answer: "Evet, toptan satış sözleşmeleri ve alacak uyuşmazlıklarında danışmanlık sağlanır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Bakırköy Adliyesi'ne Zeytinburnu'dan ulaşım nasıl?", answer: "T1 tramvay ve M1A metro bağlantıları üzerinden ulaşım sağlanabilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır." },
    ],
    howToTitle: "Zeytinburnu'da Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Zeytinburnu Avukat (Genel)",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz", "kidem-tazminati-hesaplama-2026"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "zeytinburnu-bosanma-avukati",
    name: "Zeytinburnu Boşanma Avukatı",
    heroTitle: "Zeytinburnu Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; aile mahkemeleri İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Zeytinburnu Boşanma Avukatı",
    metaDescription:
      "Zeytinburnu'da anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Aile hukuku alanında Zeytinburnu'daki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlar.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Aile İşletmesi Payı", description: "Eşlerden birine ait mağaza veya atölyenin mal rejiminde değerlendirilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Aile işletmesi niteliğindeki mağaza/atölyenin mal rejiminde değerlendirilmesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Aile işletmesi şeklinde yürütülen çok sayıda mağaza ve atölyenin bulunduğu Zeytinburnu'nda, boşanma davalarında mal rejimi tasfiyesi sırasında işletme payının değerlendirilmesi ayrı bir uzmanlık gerektirebilmektedir.",
      "Boşanma, velayet ve nafaka davalarına İstanbul Bakırköy Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "İstanbul Bakırköy Adliyesi'ndeki aile mahkemesine başvurulur." },
      { question: "Eşlerden birine ait mağaza mal paylaşımında nasıl değerlendirilir?", answer: "Evlilik süresince edinilmişse katılma alacağı hesabına dahil edilebilir, işletmenin niteliği ayrıca incelenir." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir." },
      { question: "Mal rejimi tasfiyesi ne kadar sürer?", answer: "Dosyanın niteliğine ve bilirkişi incelemesine göre süre değişebilir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir." },
    ],
    howToTitle: "Zeytinburnu'da Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "zeytinburnu-ceza-avukati",
    name: "Zeytinburnu Ceza Avukatı",
    heroTitle: "Zeytinburnu Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; kovuşturma İstanbul Bakırköy Adliyesi'nde yürütülür.",
    metaTitle: "Zeytinburnu Ceza Avukatı",
    metaDescription:
      "Zeytinburnu'da soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. Ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında Zeytinburnu'daki müvekkillerine müdafilik yapar.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Marka/Taklit Ürün İddiaları", description: "Fikri mülkiyet ihlali iddialarında savunma." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Marka hakkına tecavüz ve taklit ürün iddialarına karşı savunma",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "Yoğun bir konfeksiyon ve deri ticaretinin yapıldığı Zeytinburnu'nda, marka hakkına tecavüz ve taklit ürün satışı iddialarına dayalı ceza soruşturmaları zaman zaman gündeme gelebilmektedir.",
      "Kovuşturma aşamasındaki davalar İstanbul Bakırköy Adliyesi'nde görülür. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından belirleyicidir.",
    ],
    faqs: [
      { question: "Zeytinburnu'da bir ceza davası hangi adliyede görülür?", answer: "İstanbul Bakırköy Adliyesi'nde görülür." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir ancak müdafi bulundurmak önerilir." },
      { question: "Taklit ürün satışı iddiasıyla el konulan mallar geri alınabilir mi?", answer: "Sürecin sonucuna göre değişir; hukuka aykırı el koyma işlemlerine itiraz edilebilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, sulh ceza hakimliğine itiraz edilebilir." },
      { question: "Temyiz kanun yoluna hangi kararlar için başvurulur?", answer: "Kanunda sayılan ağır suçlara ilişkin kararlar için başvurulabilir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Yargılamaya kaldığı yerden devam edilir." },
    ],
    howToTitle: "Zeytinburnu'da Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "zeytinburnu-gayrimenkul-avukati",
    name: "Zeytinburnu Gayrimenkul Avukatı",
    heroTitle: "Zeytinburnu Gayrimenkul Avukatı",
    heroSubtitle:
      "Mağaza, showroom, tapu uyuşmazlıkları ve konut ilişkilerinde hukuki destek sağlanır; davalar İstanbul Bakırköy Adliyesi'nde görülür.",
    metaTitle: "Zeytinburnu Gayrimenkul Avukatı",
    metaDescription:
      "Zeytinburnu'da mağaza/showroom kiraları, tapu iptali ve konut uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Mağaza, showroom ve konut uyuşmazlıklarında Zeytinburnu'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Mağaza/Showroom Kiraları", description: "Kazlıçeşme hatboyu bölgesindeki işyerlerinde kira uyuşmazlıkları." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Kat Mülkiyeti", description: "Yoğun apartman dokusunda yönetim uyuşmazlıkları." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Mağaza ve showroom niteliğindeki işyerlerinin kira sözleşmelerinin hazırlanması",
      "İşyeri devri ve kiracılık ilişkisinin sona ermesine ilişkin uyuşmazlıklar",
      "Kat malikleri kurulu ve yönetim planı uyuşmazlıklarında temsil",
      "Tapu iptali ve tescil davalarının açılması",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
    ],
    localParagraphs: [
      "Kazlıçeşme'deki hatboyu olarak bilinen Zübeyde Hanım Caddesi çevresinde yoğunlaşan mağaza ve showroom niteliğindeki işyerlerinde kira bedeli ve devir uyuşmazlıkları, Zeytinburnu'nda sık karşılaşılan gayrimenkul hukuku konuları arasındadır.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür.",
    ],
    faqs: [
      { question: "İşyeri devrinde kiracının hakları nelerdir?", answer: "Devir sözleşmesinin şartlarına ve kiraya verenin onayına bağlı olarak değerlendirilir." },
      { question: "Showroom kirasında rayiç bedel tespiti nasıl yapılır?", answer: "Bölgedeki emsal kira bedelleri bilirkişi incelemesiyle değerlendirilerek tespit edilir." },
      { question: "Zeytinburnu'da gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir." },
      { question: "Kat malikleri kurulu kararına nasıl itiraz edilir?", answer: "Karara katılmayan malik, belirli süre içinde iptal davası açabilir." },
    ],
    howToTitle: "Zeytinburnu'da Tapu İptali Süreci Nasıl İlerler?",
    howToSteps: [
      { name: "Kayıt İncelemesi", text: "Taşınmazın tapu kaydı ve varsa şerhler incelenir." },
      { name: "Dayanağın Belirlenmesi", text: "İptal talebinin hukuki gerekçesi netleştirilir." },
      { name: "Dilekçe Hazırlığı", text: "Talep ve deliller dilekçeye işlenir." },
      { name: "Yargılama", text: "Bilirkişi incelemesi sonrası mahkeme karar verir." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "kira-bedeli-tespit-ve-uyarlama-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "zeytinburnu-icra-avukati",
    name: "Zeytinburnu İcra Avukatı",
    heroTitle: "Zeytinburnu İcra Avukatı",
    heroSubtitle:
      "Toptan satış ve bireysel alacakların tahsili amacıyla icra takibi, itiraz ve haciz süreçlerinde temsil sağlanır; icra daireleri İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Zeytinburnu İcra Avukatı",
    metaDescription:
      "Zeytinburnu'da icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İcra ve iflas hukuku kapsamında Zeytinburnu'daki deri/konfeksiyon işletmeleri, esnaf ve bireysel müvekkillere danışmanlık verir.",
    highlightCards: [
      { title: "Toptan Satış Alacakları", description: "Deri ve konfeksiyon ticaretinden doğan alacakların takibi." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Toptan ve perakende satıştan doğan alacaklar için icra takibi başlatılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "İhaleye katılım ve ihalenin feshi talepleri",
      "Mali sıkıntı yaşayan işletmeler için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Kazlıçeşme çevresindeki yoğun deri ve konfeksiyon ticareti, toptancı-perakendeci ilişkilerinden doğan senet ve çek alacaklarını Zeytinburnu'nda icra takiplerinin sık başvurulan nedenleri arasına sokmaktadır.",
      "Bu takiplere ilişkin uyuşmazlıklar İstanbul Bakırköy Adliyesi'ndeki icra mahkemelerinde görülür; borçlunun Zeytinburnu'da yerleşik olduğu takiplerde yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "Sözleşme, senet, çek, fatura veya mahkeme ilamı gibi belgelerle başlanabilir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Tebliğden itibaren 7 gündür." },
      { question: "Karşılıksız çek nedeniyle icra takibi nasıl başlatılır?", answer: "Çek bankaya ibraz edildikten sonra kambiyo senetlerine özgü haciz yoluyla takip başlatılabilir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür." },
    ],
    howToTitle: "Zeytinburnu'da İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "zeytinburnu-idare-avukati",
    name: "Zeytinburnu İdare Avukatı",
    heroTitle: "Zeytinburnu İdare Avukatı",
    heroSubtitle:
      "Belediye, imar ve işyeri ruhsat işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Zeytinburnu İdare Avukatı",
    metaDescription:
      "Zeytinburnu'da idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. İdari işlemlerin iptali ve tam yargı davalarında Zeytinburnu'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "İşyeri Ruhsatları", description: "Mağaza ve atölye ruhsat işlemlerine ilişkin uyuşmazlıklar." },
      { title: "Sahil/İmar Uygulamaları", description: "Kıyı bölgesindeki imar planı değişikliklerine ilişkin uyuşmazlıklar." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İşyeri ve atölye ruhsat işlemlerine itiraz edilmesi",
      "İmar planı değişikliklerine karşı iptal davası açılması",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
      "Belediye encümen kararlarına karşı dava açılması",
    ],
    localParagraphs: [
      "Kazlıçeşme çevresindeki yoğun mağaza ve atölye faaliyeti nedeniyle Zeytinburnu'nda işyeri ruhsatlarına ilişkin idari işlemler ile kıyı bölgesindeki imar uygulamaları sık başvurulan idari dava konuları arasındadır.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "İşyeri ruhsatı iptal edilirse ne yapılabilir?", answer: "İptal işlemine karşı idare mahkemesinde dava açılabilir." },
      { question: "Sahil bölgesindeki imar planına itiraz süresi nedir?", answer: "İlan tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılmalıdır." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, yasal süresinde idare mahkemesinde dava açılabilir." },
      { question: "Encümen kararına karşı dava açılabilir mi?", answer: "Evet, hukuka aykırılık iddiasıyla idare mahkemesinde dava açılabilir." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde dava açılabilir." },
    ],
    howToTitle: "Zeytinburnu'da İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "zeytinburnu-is-hukuku-avukati",
    name: "Zeytinburnu İş Hukuku Avukatı",
    heroTitle: "Zeytinburnu İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Zeytinburnu İş Hukuku Avukatı",
    metaDescription:
      "Zeytinburnu'da kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Zeytinburnu'daki konfeksiyon ve satış sektörü çalışanlarına ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Satış/Atölye Personeli Alacakları", description: "Prim, komisyon ve fazla mesai uyuşmazlıkları." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Satış personeli için ödenmeyen prim ve komisyon alacaklarının tahsili",
      "Hafta tatili ve yıllık izin ücreti gibi diğer işçilik alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "Sigortasız çalışmaya ilişkin hizmet tespiti davaları",
    ],
    localParagraphs: [
      "Kazlıçeşme çevresindeki mağaza ve dikim atölyelerinde yoğun bir satış ve üretim personeli istihdamının bulunduğu Zeytinburnu'nda, prim ve komisyon alacakları ile sigortasız çalışma kaynaklı uyuşmazlıklar sık gündeme gelmektedir.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Bakırköy Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Satış elemanının primi ödenmezse ne yapılabilir?", answer: "Sözleşmede öngörülen prim sistemi esas alınarak alacak talep edilebilir, gerekirse dava açılabilir." },
      { question: "Atölyede sigortasız çalıştırılan işçinin hakları nelerdir?", answer: "Hizmet tespiti davası açılarak çalışma süresi mahkemece tespit ettirilebilir." },
      { question: "Zeytinburnu'da iş mahkemesi nerededir?", answer: "İstanbul Bakırköy Adliyesi bünyesindedir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir." },
      { question: "Mevsimlik satış elemanlarının kıdem tazminatı hakkı var mı?", answer: "Çalışma süresi ve niteliğine göre değerlendirilir, şartları taşıması halinde hak doğabilir." },
    ],
    howToTitle: "Zeytinburnu'da İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "zeytinburnu-kira-tahliye-avukati",
    name: "Zeytinburnu Kira ve Tahliye Avukatı",
    heroTitle: "Zeytinburnu Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Zeytinburnu'nda konut ve mağaza tahliyesi, kira bedeli tespiti ve kira sözleşmesinden doğan uyuşmazlıklarda hukuki destek sağlanır. Bu davalara bakan sulh hukuk mahkemeleri, İstanbul Bakırköy Adliyesi bünyesinde yer almaktadır.",
    metaTitle: "Zeytinburnu Kira ve Tahliye Avukatı",
    metaDescription:
      "Zeytinburnu'da kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kira hukuku kapsamında Zeytinburnu'daki kiraya verenler ile kiracılara danışmanlık ve dava takibi hizmeti sunulmaktadır. Bu hizmeti yürüten Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Mağaza Tahliyesi", description: "Kazlıçeşme hatboyu bölgesindeki işyerlerinde tahliye süreci." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Konut ve mağaza kira sözleşmelerinin hazırlanması ve incelenmesi",
      "İhtiyaç nedeniyle açılan tahliye davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Taşınmazın konut ya da işyeri niteliğinde olması, tahliye sürecinde uygulanacak usul kuralını doğrudan etkilemektedir. Zeytinburnu'nda konut stokunun yanında Kazlıçeşme çevresinde kiracılık ilişkisiyle işletilen çok sayıda mağaza ve showroom bulunması, bu iki usul rejiminin ilçede birlikte uygulama alanı bulmasına yol açmaktadır.",
      "Söz konusu tahliye ve kira uyuşmazlıklarına İstanbul Bakırköy Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılmaktadır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Mağaza kiracısının tahliyesi konuttan farklı mı?", answer: "Genel usul benzer olmakla birlikte, işyeri kiralarında ihtiyaç sebebiyle tahliyede ek koşullar aranabilir." },
      { question: "Zeytinburnu'da tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
    ],
    howToTitle: "Zeytinburnu'da Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "zeytinburnu-vergi-avukati",
    name: "Zeytinburnu Vergi Avukatı",
    heroTitle: "Zeytinburnu Vergi Avukatı",
    heroSubtitle:
      "Deri ve konfeksiyon işletmelerine yönelik vergi tarhiyatı, ihracat KDV iadesi ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Zeytinburnu Vergi Avukatı",
    metaDescription:
      "Zeytinburnu'da vergi tarhiyatına itiraz, KDV iadesi, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Zeytinburnu'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "İhracat KDV İadesi", description: "Deri ve konfeksiyon ihracatına bağlı KDV iadesi uyuşmazlıkları." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "İhracat KDV iadesi reddi işlemlerine karşı dava süreçleri",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Deri ve konfeksiyon işletmelerinde vergi incelemesi sürecinde danışmanlık",
    ],
    localParagraphs: [
      "Deri ve konfeksiyon sektöründe ihracat faaliyetinin yoğun olduğu Zeytinburnu'nda, KDV iadesi taleplerinin reddi veya eksik iadesi kaynaklı uyuşmazlıklar diğer vergi konularına kıyasla ayrı bir önem taşımaktadır.",
      "Bu işlemlere karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir; ihbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "KDV iadesi reddedilirse ne yapılabilir?", answer: "Ret işlemine karşı vergi mahkemesinde dava açılabilir." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır." },
    ],
    howToTitle: "Zeytinburnu'da KDV İadesi Uyuşmazlığı Nasıl Çözülür?",
    howToSteps: [
      { name: "İnceleme", text: "Ret veya eksik iade işleminin dayanağı incelenir." },
      { name: "İdari Başvuru", text: "Gerekiyorsa vergi idaresine düzeltme talebiyle başvurulur." },
      { name: "Dava Açılması", text: "Süresi içinde vergi mahkemesinde dava açılır." },
      { name: "Sonuçlanma", text: "Mahkeme kararıyla iade süreci tamamlanır." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "zeytinburnu-borclar-hukuku-avukati",
    name: "Zeytinburnu Borçlar Hukuku Avukatı",
    heroTitle: "Zeytinburnu Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Zeytinburnu'ndaki ticaret ve asliye hukuk mahkemeleri İstanbul Bakırköy Adliyesi bünyesinde faaliyet göstermektedir. Bu mahkemeler nezdinde toptan satış sözleşmesinden doğan uyuşmazlıklar, alacak talepleri ve tazminat davalarında temsil sağlanmaktadır.",
    metaTitle: "Zeytinburnu Borçlar Hukuku Avukatı",
    metaDescription:
      "Zeytinburnu'da sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Borçlar hukuku alanında Zeytinburnu'daki müvekkillere sözleşme ve alacak uyuşmazlıklarında danışmanlık ve dava takibi hizmeti sunulmaktadır. 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olan Furkan Arıkan, bu hizmeti İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat sıfatıyla yürütmektedir.",
    highlightCards: [
      { title: "Toptan Satış Sözleşmeleri", description: "Deri ve konfeksiyon toptan satışından doğan uyuşmazlıklar." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Konsinye İlişkileri", description: "Konsinye teslim edilen ürünlerden doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Toptan satış ve tedarik sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Konsinye teslim ilişkilerinden doğan uyuşmazlıklar",
      "Ayıplı mal nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Ticari nitelikteki bazı alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması zorunlu tutulabilmekte, açılan davalara ise İstanbul Bakırköy Adliyesi bünyesinde bakılmaktadır.",
      "Kazlıçeşme'nin tarihi deri ve konfeksiyon ticaretiyle öne çıktığı Zeytinburnu'nda, toptan satış ve konsinye teslim ilişkilerine dayalı ödeme gecikmesi ile ayıplı mal iddiaları, bu kapsamda sık görülen uyuşmazlık türleri arasında yer almaktadır.",
    ],
    faqs: [
      { question: "Konsinye teslim edilen ürün satılmazsa ne olur?", answer: "Sözleşme şartlarına göre ürün iade edilebilir veya bedeli mahsuplaşma yoluyla çözülebilir." },
      { question: "Ayıplı mal iddiasında ispat yükü kimdedir?", answer: "Kural olarak malın ayıplı teslim edildiğini iddia eden taraf bunu ispatla yükümlüdür." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir." },
    ],
    howToTitle: "Zeytinburnu'da Ticari Alacak Davası Süreci Nasıl İşler?",
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
