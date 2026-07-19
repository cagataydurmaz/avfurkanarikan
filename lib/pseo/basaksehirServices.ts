import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const basaksehirServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "basaksehir-avukat",
    name: "Başakşehir Avukat",
    heroTitle: "Başakşehir Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, Avrupa'nın en büyük hastane komplekslerinden birine ve Bahçeşehir/Kayaşehir gibi planlı uydu kentlere ev sahipliği yapan Başakşehir'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Küçükçekmece Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Başakşehir Avukat",
    metaDescription:
      "Başakşehir'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. 2008'de kurulan, planlı uydu kentleri ve dev şehir hastanesi kompleksiyle tanınan Başakşehir'de ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Uydu kent site teslim ve tapu uyuşmazlıklarının takibi." },
      { title: "İş Hukuku", description: "Sağlık personeli işçilik alacaklarında destek." },
      { title: "İcra Hukuku", description: "Alacak takibi ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "İdari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı ve cezası uyuşmazlıkları." },
      { title: "Borçlar Hukuku", description: "Sözleşme ve alacak kaynaklı davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Uydu kent site teslimi ve tapu ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "2008 yılında Küçükçekmece, Esenler ve Büyükçekmece'ye bağlı bölgelerin birleştirilmesiyle kurulan Başakşehir, Bahçeşehir ve Kayaşehir gibi planlı uydu kentleri ile Avrupa'nın en büyük yoğun bakım kapasitesine sahip şehir hastanesi kompleksini bir arada barındırmaktadır.",
      "İlçedeki hukuki uyuşmazlıklar İstanbul Küçükçekmece Adliyesi'nde, vergisel işlemler ise Başakşehir Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Başakşehir'deki davalara hangi adliye bakıyor?", answer: "Başakşehir, İstanbul Küçükçekmece Adliyesi'nin yargı çevresinde yer almaktadır." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Başakşehir'de mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Başakşehir'deki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Yeni teslim edilen sitelerle ilgili destek alınabilir mi?", answer: "Evet, tapu ve teslim uyuşmazlıklarında danışmanlık sağlanır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır." },
      { question: "Küçükçekmece Adliyesi'ne Başakşehir'den ulaşım nasıl?", answer: "M3 metro hattı ve TEM otoyolu bağlantıları üzerinden ulaşım sağlanabilir." },
    ],
    howToTitle: "Başakşehir'de Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Başakşehir Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "kidem-tazminati-hesaplama-2026"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "basaksehir-bosanma-avukati",
    name: "Başakşehir Boşanma Avukatı",
    heroTitle: "Başakşehir Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; aile mahkemeleri İstanbul Küçükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Başakşehir Boşanma Avukatı",
    metaDescription:
      "Başakşehir'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Aile hukuku alanında Başakşehir'deki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlar.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Site Konutu Payı", description: "Uydu kentlerdeki konutların mal rejiminde değerlendirilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Site konutunun mal rejimi tasfiyesinde değerlendirilmesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Bahçeşehir ve Kayaşehir gibi planlı uydu kentlerde yeni aile yerleşiminin yoğun olduğu Başakşehir'de, boşanma davalarında konut kredisi ile edinilen sitedeki dairenin mal rejimi tasfiyesinde nasıl değerlendirileceği önemli bir konu olabilmektedir.",
      "Boşanma, velayet ve nafaka davalarına İstanbul Küçükçekmece Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "İstanbul Küçükçekmece Adliyesi'ndeki aile mahkemesine başvurulur." },
      { question: "Kredili konutun mal paylaşımı nasıl yapılır?", answer: "Evlilik süresince edinilmişse katılma alacağı hesabına dahil edilir; kredi borcu da hesaba katılır." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir." },
    ],
    howToTitle: "Başakşehir'de Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "basaksehir-ceza-avukati",
    name: "Başakşehir Ceza Avukatı",
    heroTitle: "Başakşehir Ceza Avukatı",
    heroSubtitle:
      "Kovuşturma İstanbul Küçükçekmece Adliyesi'nde görülür; gözaltı ve ifade alma anından yargılamanın sonuna kadar sürecin her aşamasında müdafi olarak hukuki destek sağlanır.",
    metaTitle: "Başakşehir Ceza Avukatı",
    metaDescription:
      "Başakşehir'de soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olan Furkan Arıkan, İstanbul Barosu'nun 72621 sicil numaralı avukatıdır. Başakşehir'deki müvekkillere, ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarının tamamında müdafi olarak hukuki destek verilir.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Kanun Yolları", description: "Karara karşı üst mahkemelere başvuru süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "İstinaf ve temyiz dilekçelerinin düzenlenmesi",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "Başakşehir'in hızla büyüyen uydu kentleri ve buna bağlı yoğun nüfus hareketliliği, ilçenin belirgin özelliklerindendir; bu yapı, kolluk müdahalesi gerektiren olayların bazı ilçelerden farklı bir seyir izlemesine yol açabilmektedir.",
      "Gözaltına alınan kişinin müdafi ile görüşme hakkı, gözaltı sürecinin başladığı andan itibaren doğar; bu hakkın zamanında kullanılması sürecin sonraki aşamalarının seyri açısından belirleyici olabilmektedir. Kovuşturma aşamasına geçildiğinde davalar İstanbul Küçükçekmece Adliyesi'nde görülmektedir.",
    ],
    faqs: [
      { question: "Başakşehir'de bir ceza davası hangi adliyede görülür?", answer: "İstanbul Küçükçekmece Adliyesi'nde görülür." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir ancak müdafi bulundurmak önerilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, sulh ceza hakimliğine itiraz edilebilir." },
      { question: "Temyiz kanun yoluna hangi kararlar için başvurulur?", answer: "Kanunda sayılan ağır suçlara ilişkin kararlar için başvurulabilir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Yargılamaya kaldığı yerden devam edilir." },
    ],
    howToTitle: "Başakşehir'de Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "basaksehir-gayrimenkul-avukati",
    name: "Başakşehir Gayrimenkul Avukatı",
    heroTitle: "Başakşehir Gayrimenkul Avukatı",
    heroSubtitle:
      "Uydu kent site teslimi, tapu uyuşmazlıkları ve kira ilişkilerinde hukuki destek sağlanır; davalar İstanbul Küçükçekmece Adliyesi'nde görülür.",
    metaTitle: "Başakşehir Gayrimenkul Avukatı",
    metaDescription:
      "Başakşehir'de site teslimi, tapu iptali ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Uydu kent site teslimi, tapu ve kira uyuşmazlıklarında Başakşehir'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Site Teslim Uyuşmazlıkları", description: "Bahçeşehir ve Kayaşehir'de teslim gecikmesi ve ayıp iddiaları." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Site Yönetimi", description: "Yeni kurulan sitelerde yönetim planı ve aidat uyuşmazlıkları." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Site teslim gecikmesi ve inşaat ayıbı iddialarında temsil",
      "Kat mülkiyetine geçiş ve tapu tescili süreçlerinde danışmanlık",
      "Site yönetim planı ve ortak gider uyuşmazlıklarında temsil",
      "Tapu iptali ve tescil davalarının açılması",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
    ],
    localParagraphs: [
      "Bahçeşehir ve Kayaşehir gibi planlı uydu kentlerinde sürekli yeni sitelerin teslim edildiği Başakşehir'de, teslim gecikmesi, inşaat ayıbı ve kat mülkiyetine geçiş süreçlerine ilişkin uyuşmazlıklar sık karşılaşılan gayrimenkul hukuku konularındandır.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Küçükçekmece Adliyesi bünyesinde görülür.",
    ],
    faqs: [
      { question: "Site teslimi gecikirse alıcının hakları nelerdir?", answer: "Sözleşmede öngörülen gecikme cezası talep edilebilir, gerekirse sözleşmeden dönme hakkı kullanılabilir." },
      { question: "Kat irtifakından kat mülkiyetine geçiş ne zaman olur?", answer: "Yapı kullanma izin belgesi alındıktan sonra talep üzerine gerçekleştirilir." },
      { question: "Başakşehir'de gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Küçükçekmece Adliyesi bünyesinde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir." },
      { question: "Yeni sitede inşaat ayıbı tespit edilirse ne yapılmalı?", answer: "Bilirkişi incelemesiyle ayıp tespit ettirilip, bedel indirimi veya giderim talep edilebilir." },
    ],
    howToTitle: "Başakşehir'de Tapu İptali Süreci Nasıl İlerler?",
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
    urlSlug: "basaksehir-icra-avukati",
    name: "Başakşehir İcra Avukatı",
    heroTitle: "Başakşehir İcra Avukatı",
    heroSubtitle:
      "İcra daireleri İstanbul Küçükçekmece Adliyesi bünyesindedir; alacağın tahsili amacıyla yürütülen icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır.",
    metaTitle: "Başakşehir İcra Avukatı",
    metaDescription:
      "Başakşehir'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İcra ve iflas hukuku alanında Başakşehir'deki alacaklı ve borçlu taraflara danışmanlık ve temsil hizmeti veren Furkan Arıkan, İstanbul Barosu'nun 72621 sicil numaralı avukatıdır ve 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "İhaleye katılım ve ihalenin feshi talepleri",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Başakşehir'de icra takiplerinin sık karşılaşılan nedenleri arasında müteahhit-alıcı ilişkilerinden ve site aidatlarından kaynaklanan alacaklar yer almaktadır; bunda ilçede sürekli yeni konut projelerinin teslim edilmesinin de etkisi bulunmaktadır.",
      "Borçlunun Başakşehir'de yerleşik olduğu icra takiplerinde yetkili icra dairesi, kural olarak borçlunun ikametgahı esas alınarak belirlenir. Bu uyuşmazlıklar İstanbul Küçükçekmece Adliyesi'ndeki icra mahkemelerinde görülmektedir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "Sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlanabilir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Tebliğden itibaren 7 gündür." },
      { question: "Site aidat borcu ödenmezse ne yapılabilir?", answer: "Aidat alacağı için icra takibi başlatılabilir veya dava yoluyla tahsil edilebilir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür." },
    ],
    howToTitle: "Başakşehir'de İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "basaksehir-idare-avukati",
    name: "Başakşehir İdare Avukatı",
    heroTitle: "Başakşehir İdare Avukatı",
    heroSubtitle:
      "Belediye, imar ve sağlık personeli işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Başakşehir İdare Avukatı",
    metaDescription:
      "Başakşehir'de idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. İdari işlemlerin iptali ve tam yargı davalarında Başakşehir'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Kamu Sağlık Personeli", description: "Şehir hastanesi personelinin özlük hakları uyuşmazlıkları." },
      { title: "İmar Uygulamaları", description: "Uydu kent alanlarındaki imar planı değişiklikleri." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kamu sağlık personelinin özlük haklarına ilişkin idari dava süreçleri",
      "İmar planı değişikliklerine karşı iptal davası açılması",
      "Belediye ruhsat işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi disiplin cezalarına karşı dava açılması",
    ],
    localParagraphs: [
      "Avrupa'nın en büyük yoğun bakım kapasitesine sahip şehir hastanesi kompleksinin bulunduğu Başakşehir'de, kamu sağlık personelinin atama, nakil ve disiplin işlemlerine ilişkin idari uyuşmazlıklar diğer ilçelere kıyasla daha sık gündeme gelmektedir.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "Kamu hastanesi personelinin nakil talebi nasıl değerlendirilir?", answer: "İlgili mevzuattaki kriterlere göre idare tarafından değerlendirilir, ret halinde dava yoluna gidilebilir." },
      { question: "Disiplin cezasına itiraz süresi ne kadardır?", answer: "Tebliğ tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılabilir." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İlan tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılmalıdır." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, yasal süresinde idare mahkemesinde dava açılabilir." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde dava açılabilir." },
    ],
    howToTitle: "Başakşehir'de İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "basaksehir-is-hukuku-avukati",
    name: "Başakşehir İş Hukuku Avukatı",
    heroTitle: "Başakşehir İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul Küçükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Başakşehir İş Hukuku Avukatı",
    metaDescription:
      "Başakşehir'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Başakşehir'deki sağlık sektörü ve diğer alan çalışanlarına ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Sağlık Personeli Alacakları", description: "Nöbet ücreti ve fazla mesai uyuşmazlıkları." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Sağlık sektörü çalışanlarının nöbet ücreti ve fazla mesai alacaklarının tahsili",
      "Yıllık izin ve diğer işçilik alacaklarının tahsili",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Binlerce sağlık çalışanının istihdam edildiği dev şehir hastanesi kompleksinin bulunduğu Başakşehir'de, vardiyalı çalışma düzenine bağlı nöbet ücreti ve fazla mesai alacağı uyuşmazlıkları sık gündeme gelmektedir.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Küçükçekmece Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Sağlık çalışanının nöbet ücreti nasıl hesaplanır?", answer: "Nöbet saatleri ve ilgili mevzuat/sözleşme hükümlerine göre hesaplanır." },
      { question: "Özel sektörde çalışan sağlık personelinin fazla mesai hakkı var mı?", answer: "Evet, iş kanunu kapsamındaki genel fazla mesai kuralları uygulanır." },
      { question: "Başakşehir'de iş mahkemesi nerededir?", answer: "İstanbul Küçükçekmece Adliyesi bünyesindedir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir." },
      { question: "İş kazası geçiren sağlık çalışanı ne yapmalı?", answer: "Olay derhal SGK'ya bildirilmeli, tedavi ve tazminat süreci başlatılmalıdır." },
    ],
    howToTitle: "Başakşehir'de İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "basaksehir-kira-tahliye-avukati",
    name: "Başakşehir Kira ve Tahliye Avukatı",
    heroTitle: "Başakşehir Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Konut tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemeleri İstanbul Küçükçekmece Adliyesi'ndedir.",
    metaTitle: "Başakşehir Kira ve Tahliye Avukatı",
    metaDescription:
      "Başakşehir'de kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Kira hukuku alanında Başakşehir'deki kiraya verenlere ve kiracılara danışmanlık verir.",
    highlightCards: [
      { title: "Yeni Site Kiraları", description: "Bahçeşehir ve Kayaşehir'de yeni teslim konutların kiralanması." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Yeni teslim edilen sitelerde kira sözleşmelerinin hazırlanması",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Bahçeşehir ve Kayaşehir gibi uydu kentlerinde sürekli yeni konut arzının bulunduğu Başakşehir'de, teslim tarihine yakın dönemlerde kira piyasası da hızla hareketlenmekte, bu da kira bedeli uyuşmazlıklarını sık başvurulan bir konu haline getirmektedir.",
      "Bu davalara İstanbul Küçükçekmece Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Yeni teslim edilen bir konutta kira sözleşmesi ne zaman yapılmalı?", answer: "Teslim tutanağı düzenlendikten ve taşınmazın kullanıma hazır olduğu teyit edildikten sonra yapılması önerilir." },
      { question: "Başakşehir'de tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
    ],
    howToTitle: "Başakşehir'de Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "basaksehir-vergi-avukati",
    name: "Başakşehir Vergi Avukatı",
    heroTitle: "Başakşehir Vergi Avukatı",
    heroSubtitle:
      "Yeni kurulan işletmelere yönelik vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Başakşehir Vergi Avukatı",
    metaDescription:
      "Başakşehir'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Başakşehir'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Yeni Kurulan İşletmeler", description: "2008'den bu yana hızla büyüyen ilçedeki yeni işletmelere yönelik vergi uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Yeni kurulan işletmelerde ilk vergi incelemesi sürecinde danışmanlık",
      "Sağlık ve hizmet sektörü işletmelerinde vergi uyuşmazlıklarında destek",
    ],
    localParagraphs: [
      "2008'de kurulduğundan bu yana hızla gelişen Başakşehir'de, yeni açılan işletmelerin ilk vergi incelemelerine ve kayıt düzenine ilişkin uyuşmazlıklar sık karşılaşılan konular arasındadır.",
      "Bu işlemlere karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir; ihbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "Yeni kurulan bir işletme ne zaman vergi incelemesine tabi olabilir?", answer: "Faaliyete başlama süresinden bağımsız olarak, vergi idaresi gerekli gördüğünde inceleme başlatabilir." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır." },
    ],
    howToTitle: "Başakşehir'de Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "basaksehir-borclar-hukuku-avukati",
    name: "Başakşehir Borçlar Hukuku Avukatı",
    heroTitle: "Başakşehir Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Sözleşme uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; ticaret ve asliye hukuk mahkemeleri İstanbul Küçükçekmece Adliyesi'ndedir.",
    metaTitle: "Başakşehir Borçlar Hukuku Avukatı",
    metaDescription:
      "Başakşehir'de sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Borçlar hukuku kapsamında Başakşehir'deki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık verir.",
    highlightCards: [
      { title: "Konut Satış Sözleşmeleri", description: "Yeni site projelerinde satış vaadi sözleşmesi uyuşmazlıkları." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Müteahhit Sözleşmeleri", description: "Kat karşılığı inşaat ve yapım sözleşmesi uyuşmazlıkları." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gayrimenkul satış vaadi sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Kat karşılığı inşaat sözleşmelerinden doğan uyuşmazlıklar",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Sürekli yeni konut projelerinin geliştirildiği Başakşehir'de, gayrimenkul satış vaadi sözleşmeleri ile müteahhitlik ilişkilerinden doğan uyuşmazlıklar sık karşılaşılan borçlar hukuku konularındandır.",
      "Bu davalar İstanbul Küçükçekmece Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Satış vaadi sözleşmesine dayalı tapu iptal-tescil davası nasıl açılır?", answer: "Sözleşme şartlarının yerine getirilmemesi halinde noter onaylı satış vaadi sözleşmesine dayanılarak dava açılabilir." },
      { question: "Müteahhit taahhüdünü yerine getirmezse ne yapılabilir?", answer: "Sözleşmeden dönme, tazminat veya ifa davası gibi hukuki yollara başvurulabilir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, İstanbul Küçükçekmece Adliyesi bünyesinde görülür." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir." },
    ],
    howToTitle: "Başakşehir'de Alacak Davası Süreci Nasıl İşler?",
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
