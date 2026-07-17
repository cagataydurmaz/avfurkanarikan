import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const buyukcekmeceServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "buyukcekmece-avukat",
    name: "Büyükçekmece Avukat",
    heroTitle: "Büyükçekmece Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, adını taşıdığı tarihi göle ve uzun bir Marmara sahiline sahip Büyükçekmece'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Büyükçekmece Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Büyükçekmece Avukat",
    metaDescription:
      "Büyükçekmece'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Bizans ve Osmanlı dönemlerine uzanan tarihi bir yerleşim geçmişine, kendi adını taşıyan göle ve geniş bir sahil şeridine sahip Büyükçekmece'de ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Sahil ve göl çevresi taşınmazlarının takibi." },
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
      "Sahil ve göl çevresi taşınmazlarında gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "1987 yılına kadar Çatalca'ya bağlı bir bucak merkezi olan Büyükçekmece, üzerinden tarihi Kanuni Sultan Süleyman Köprüsü'nün geçtiği göl ile 25 km'lik Marmara sahilini bir arada barındıran, hem yerleşik hem sayfiye karakterli bir ilçedir.",
      "İlçedeki hukuki uyuşmazlıklar İstanbul Büyükçekmece Adliyesi'nde, vergisel işlemler ise Büyükçekmece Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Büyükçekmece'deki davalara hangi adliye bakıyor?", answer: "Büyükçekmece, İstanbul Büyükçekmece Adliyesi'nin yargı çevresinde yer almaktadır; adliyenin kendisi de ilçe sınırları içindedir." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Büyükçekmece'de mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Büyükçekmece'deki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Sahil veya göl çevresindeki taşınmazlarla ilgili destek alınabilir mi?", answer: "Evet, tapu ve imar durumuna ilişkin danışmanlık sağlanır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır." },
      { question: "E-5 ve TEM üzerinden Büyükçekmece'ye ulaşım nasıl?", answer: "Her iki karayolu bağlantısı da ilçeyi İstanbul'un merkezine ve Trakya yönüne bağlar." },
    ],
    howToTitle: "Büyükçekmece'de Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Büyükçekmece Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "buyukcekmece-bosanma-avukati",
    name: "Büyükçekmece Boşanma Avukatı",
    heroTitle: "Büyükçekmece Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; aile mahkemeleri bizzat ilçede bulunan İstanbul Büyükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Büyükçekmece Boşanma Avukatı",
    metaDescription:
      "Büyükçekmece'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Aile hukuku alanında Büyükçekmece'deki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlar.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Sayfiye Konutu Payı", description: "Sahil bölgesindeki yazlık/konutların mal rejiminde değerlendirilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Sahil bölgesindeki taşınmazların mal rejimi tasfiyesinde değerlendirilmesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Uzun sahil şeridi boyunca sayfiye amaçlı konutların da bulunduğu Büyükçekmece'de, boşanma davalarında bu tür ikinci konutların mal rejimi tasfiyesinde nasıl değerlendirileceği ayrıca incelenmesi gereken bir konu olabilmektedir.",
      "Boşanma, velayet ve nafaka davalarına, bizzat ilçe sınırları içinde bulunan İstanbul Büyükçekmece Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "İlçe sınırları içinde bulunan İstanbul Büyükçekmece Adliyesi'ndeki aile mahkemesine başvurulur." },
      { question: "Sayfiye amaçlı ikinci konut mal paylaşımında nasıl değerlendirilir?", answer: "Evlilik süresince edinilmişse, kullanım amacından bağımsız olarak katılma alacağı hesabına dahil edilir." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir." },
    ],
    howToTitle: "Büyükçekmece'de Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "buyukcekmece-ceza-avukati",
    name: "Büyükçekmece Ceza Avukatı",
    heroTitle: "Büyükçekmece Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; kovuşturma bizzat ilçede bulunan İstanbul Büyükçekmece Adliyesi'nde yürütülür.",
    metaTitle: "Büyükçekmece Ceza Avukatı",
    metaDescription:
      "Büyükçekmece'de soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. Ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında Büyükçekmece'deki müvekkillerine müdafilik yapar.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Adliyenin Bizzat Bulunması", description: "Nöbetçi savcılık süreçlerinde hızlı erişim avantajı." },
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
      "İstanbul Büyükçekmece Adliyesi'nin bizzat ilçe sınırları içinde bulunması, Büyükçekmece'de gözaltı ve nöbetçi savcılık süreçlerinde müdafinin dosyaya erişimini pratik açıdan kolaylaştırmaktadır.",
      "Kovuşturma aşamasındaki davalar bu adliyede görülür. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından belirleyicidir.",
    ],
    faqs: [
      { question: "Büyükçekmece'de bir ceza davası hangi adliyede görülür?", answer: "İlçe sınırları içinde bulunan İstanbul Büyükçekmece Adliyesi'nde görülür." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir ancak müdafi bulundurmak önerilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, sulh ceza hakimliğine itiraz edilebilir." },
      { question: "Temyiz kanun yoluna hangi kararlar için başvurulur?", answer: "Kanunda sayılan ağır suçlara ilişkin kararlar için başvurulabilir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Yargılamaya kaldığı yerden devam edilir." },
    ],
    howToTitle: "Büyükçekmece'de Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "buyukcekmece-gayrimenkul-avukati",
    name: "Büyükçekmece Gayrimenkul Avukatı",
    heroTitle: "Büyükçekmece Gayrimenkul Avukatı",
    heroSubtitle:
      "Sahil ve göl çevresi taşınmazları, tapu uyuşmazlıkları ve kira ilişkilerinde hukuki destek sağlanır; davalar bizzat ilçede bulunan İstanbul Büyükçekmece Adliyesi'nde görülür.",
    metaTitle: "Büyükçekmece Gayrimenkul Avukatı",
    metaDescription:
      "Büyükçekmece'de sahil ve göl çevresi taşınmazlar, tapu iptali ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Sahil, göl çevresi ve konut uyuşmazlıklarında Büyükçekmece'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Göl/Sahil Çevresi Taşınmazlar", description: "İmar ve koruma alanı sınırlamalarına ilişkin uyuşmazlıklar." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Kat Mülkiyeti", description: "Site ve apartman yönetimi uyuşmazlıkları." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Göl ve sahil koruma alanı sınırlarındaki yapılaşmaya ilişkin danışmanlık",
      "Tapu iptali ve tescil davalarının açılması",
      "Kat malikleri kurulu ve yönetim planı uyuşmazlıklarında temsil",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
      "Ortaklığın giderilmesi (izale-i şüyu) davaları",
    ],
    localParagraphs: [
      "İçme suyu kaynağı olarak da kullanılan Büyükçekmece Gölü'nün koruma alanı sınırları ile 25 km'lik Marmara sahili, ilçedeki imar ve yapılaşma uygulamalarını doğrudan etkilemekte; bu da gayrimenkul hukuku uyuşmazlıklarında ayrıca dikkat gerektiren bir unsur olmaktadır.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, ilçede bizzat bulunan İstanbul Büyükçekmece Adliyesi'nde görülür.",
    ],
    faqs: [
      { question: "Göl koruma alanındaki bir taşınmaza yapılaşma izni nasıl alınır?", answer: "İlgili idarelerin koruma alanı imar planına uygunluk şartı aranır, bu süreçte hukuki danışmanlık alınması önerilir." },
      { question: "Büyükçekmece'de gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, ilçede bulunan İstanbul Büyükçekmece Adliyesi'nde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir." },
      { question: "Kat malikleri kurulu kararına nasıl itiraz edilir?", answer: "Karara katılmayan malik, belirli süre içinde iptal davası açabilir." },
      { question: "Sahil şeridindeki bir arsa alımında nelere dikkat edilmeli?", answer: "İmar durumu, kıyı kenar çizgisi ve varsa koruma alanı sınırlaması incelenmelidir." },
    ],
    howToTitle: "Büyükçekmece'de Tapu İptali Süreci Nasıl İlerler?",
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
    urlSlug: "buyukcekmece-icra-avukati",
    name: "Büyükçekmece İcra Avukatı",
    heroTitle: "Büyükçekmece İcra Avukatı",
    heroSubtitle:
      "Alacak tahsili amacıyla icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır; icra daireleri bizzat ilçede bulunan İstanbul Büyükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Büyükçekmece İcra Avukatı",
    metaDescription:
      "Büyükçekmece'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İcra ve iflas hukuku kapsamında Büyükçekmece'deki alacaklı ve borçlu taraflara danışmanlık verir.",
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
      "Adliyenin bizzat ilçe içinde bulunması, Büyükçekmece'de icra dosyalarının fiziki takibini ve dosyaya erişimi kolaylaştıran pratik bir avantaj sunmaktadır.",
      "Bu takiplere ilişkin uyuşmazlıklar İstanbul Büyükçekmece Adliyesi'ndeki icra mahkemelerinde görülür; borçlunun Büyükçekmece'de yerleşik olduğu takiplerde yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "Sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlanabilir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Tebliğden itibaren 7 gündür." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir." },
      { question: "İtirazın iptali davası açma süresi var mı?", answer: "Evet, itirazın tebliğinden itibaren bir yıl içinde açılmalıdır." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür." },
    ],
    howToTitle: "Büyükçekmece'de İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "buyukcekmece-idare-avukati",
    name: "Büyükçekmece İdare Avukatı",
    heroTitle: "Büyükçekmece İdare Avukatı",
    heroSubtitle:
      "Göl koruma alanı, imar ve belediye işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Büyükçekmece İdare Avukatı",
    metaDescription:
      "Büyükçekmece'de idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. İdari işlemlerin iptali ve tam yargı davalarında Büyükçekmece'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Göl Koruma Alanı", description: "İçme suyu havzası sınırlarındaki kısıtlamalara ilişkin uyuşmazlıklar." },
      { title: "İmar Uygulamaları", description: "Sahil ve göl çevresindeki imar planı değişiklikleri." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Göl koruma alanı ve içme suyu havzası sınırlamalarına ilişkin idari dava süreçleri",
      "İmar planı değişikliklerine karşı iptal davası açılması",
      "Belediye ruhsat işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "İçme suyu kaynağı olarak kullanılan Büyükçekmece Gölü'nün koruma alanı sınırları, ilçedeki imar ve yapılaşma işlemlerine özel kısıtlamalar getirebilmekte; bu da idari uyuşmazlıkların diğer ilçelere kıyasla farklı bir boyut kazanmasına yol açmaktadır.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "Göl koruma alanı sınırındaki bir yapılaşma kararına itiraz nasıl yapılır?", answer: "İlan veya tebliğ tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılabilir." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İlan tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılmalıdır." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde dava açılabilir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, yasal süresinde idare mahkemesinde dava açılabilir." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "Tam yargı davası yoluyla zararın tazmini talep edilebilir." },
    ],
    howToTitle: "Büyükçekmece'de İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "buyukcekmece-is-hukuku-avukati",
    name: "Büyükçekmece İş Hukuku Avukatı",
    heroTitle: "Büyükçekmece İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri bizzat ilçede bulunan İstanbul Büyükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Büyükçekmece İş Hukuku Avukatı",
    metaDescription:
      "Büyükçekmece'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Büyükçekmece'deki işçi ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Turizm/Sayfiye Sektörü", description: "Sahil bölgesindeki mevsimlik istihdama ilişkin uyuşmazlıklar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Sahil bölgesinde mevsimlik çalışanların işçilik alacaklarının tahsili",
      "Hafta tatili ve yıllık izin ücreti gibi diğer işçilik alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Uzun sahil şeridi boyunca yaz aylarında yoğunlaşan restoran ve turizm işletmeciliği, Büyükçekmece'de mevsimlik istihdamı yaygınlaştırmakta; bu da işçilik alacaklarının hesaplanmasında ayrı bir dikkat gerektirebilmektedir.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları, ilçede bizzat bulunan İstanbul Büyükçekmece Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Mevsimlik çalışanların kıdem tazminatı hakkı var mı?", answer: "Çalışma süresi ve niteliğine göre değerlendirilir, şartları taşıması halinde hak doğabilir." },
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Çalışma süresi ve son brüt ücret esas alınarak hesaplanır." },
      { question: "Büyükçekmece'de iş mahkemesi nerededir?", answer: "İlçe sınırları içinde bulunan İstanbul Büyükçekmece Adliyesi bünyesindedir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir." },
      { question: "Sezon sonunda işten çıkarılan çalışanın hakları nelerdir?", answer: "Fesih usulüne ve sözleşme türüne göre kıdem/ihbar tazminatı ve diğer alacaklar değerlendirilir." },
    ],
    howToTitle: "Büyükçekmece'de İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "buyukcekmece-kira-tahliye-avukati",
    name: "Büyükçekmece Kira ve Tahliye Avukatı",
    heroTitle: "Büyükçekmece Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Konut ve yazlık tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemeleri bizzat ilçede bulunan İstanbul Büyükçekmece Adliyesi'ndedir.",
    metaTitle: "Büyükçekmece Kira ve Tahliye Avukatı",
    metaDescription:
      "Büyükçekmece'de kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Kira hukuku alanında Büyükçekmece'deki kiraya verenlere ve kiracılara danışmanlık verir.",
    highlightCards: [
      { title: "Yazlık/Sayfiye Kiraları", description: "Sahil bölgesinde dönemsel kiralama sözleşmeleri." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Yazlık ve sayfiye amaçlı taşınmazlar için dönemsel kira sözleşmelerinin hazırlanması",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Sahil şeridi boyunca yaz sezonunda talebin arttığı Büyükçekmece'de, dönemsel/yazlık kiralamalar ile yıllık konut kiraları farklı sözleşme dinamiklerine sahiptir; bu fark uyuşmazlık halinde ispat açısından önem taşır.",
      "Bu davalara, ilçede bizzat bulunan İstanbul Büyükçekmece Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Yazlık kiralamada sezon sonu tahliye otomatik midir?", answer: "Sözleşmede belirlenen sürenin dolmasıyla kiracının taşınmazı teslim etmesi gerekir; anlaşmazlık halinde hukuki yollara başvurulabilir." },
      { question: "Büyükçekmece'de tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
    ],
    howToTitle: "Büyükçekmece'de Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "buyukcekmece-vergi-avukati",
    name: "Büyükçekmece Vergi Avukatı",
    heroTitle: "Büyükçekmece Vergi Avukatı",
    heroSubtitle:
      "Restoran ve sahil işletmelerine yönelik vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Büyükçekmece Vergi Avukatı",
    metaDescription:
      "Büyükçekmece'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Büyükçekmece'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Sahil İşletmeleri", description: "Restoran ve kafelerin mevsimsel gelir beyanına ilişkin vergi uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Sahil restoranı ve kafe işletmelerinde vergi incelemesi sürecinde danışmanlık",
      "Kayıt dışı işlem iddialarına karşı savunma hazırlanması",
    ],
    localParagraphs: [
      "Sahil şeridi boyunca yaz sezonunda yoğunlaşan restoran ve kafe işletmeciliği, Büyükçekmece'de mevsimsel gelir dalgalanmasına bağlı vergi incelemelerini diğer aylara kıyasla daha sık gündeme getirmektedir.",
      "Bu işlemlere karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir; ihbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "Mevsimsel işletmelerde vergi incelemesi nasıl yürütülür?", answer: "Faaliyet dönemine ait kayıt ve belgeler esas alınarak inceleme yapılır." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır." },
    ],
    howToTitle: "Büyükçekmece'de Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "buyukcekmece-borclar-hukuku-avukati",
    name: "Büyükçekmece Borçlar Hukuku Avukatı",
    heroTitle: "Büyükçekmece Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Sözleşme uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; ticaret ve asliye hukuk mahkemeleri bizzat ilçede bulunan İstanbul Büyükçekmece Adliyesi'ndedir.",
    metaTitle: "Büyükçekmece Borçlar Hukuku Avukatı",
    metaDescription:
      "Büyükçekmece'de sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Borçlar hukuku kapsamında Büyükçekmece'deki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık verir.",
    highlightCards: [
      { title: "Tedarik Sözleşmeleri", description: "Restoran ve sahil işletmelerinin gıda/malzeme tedarik uyuşmazlıkları." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Hizmet Sözleşmeleri", description: "Etkinlik ve organizasyon hizmetlerinden doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sözleşmenin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Restoran ve kafe işletmelerinin gıda/malzeme tedarik sözleşmelerinden doğan uyuşmazlıklar",
      "Ayıplı mal veya hizmet nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Sahil şeridi boyunca yoğunlaşan restoran ve kafe işletmelerinin tedarikçileriyle olan gıda/malzeme temin sözleşmeleri, Büyükçekmece'de sık karşılaşılan borçlar hukuku uyuşmazlıkları arasındadır.",
      "Bu davalar, ilçede bizzat bulunan İstanbul Büyükçekmece Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Tedarikçi malı zamanında teslim etmezse ne yapılabilir?", answer: "Sözleşmede öngörülen gecikme cezası talep edilebilir, gerekirse sözleşmeden dönme hakkı kullanılabilir." },
      { question: "Ayıplı gıda/malzeme teslimatında ispat yükü kimdedir?", answer: "Kural olarak malın ayıplı teslim edildiğini iddia eden taraf bunu ispatla yükümlüdür." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, ilçede bulunan İstanbul Büyükçekmece Adliyesi bünyesinde görülür." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir." },
    ],
    howToTitle: "Büyükçekmece'de Alacak Davası Süreci Nasıl İşler?",
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
