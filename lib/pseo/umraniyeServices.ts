import type { PseoService } from "./types";
import { umraniyeMiras } from "./miras/umraniyeMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const umraniyeBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "umraniye-avukat",
    name: "Ümraniye Avukat",
    heroTitle: "Ümraniye Avukat",
    heroSubtitle:
      "1987 yılında Üsküdar'dan ayrılarak ilçe statüsü kazanan ve TÜİK'in 2025 verilerine göre 728.913 nüfusuyla İstanbul'un dördüncü kalabalık ilçesi olan Ümraniye'de avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti vermektedir; ilçenin 2013'te kapatılan kendi adliyesinin ardından dava ve icra dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülmektedir.",
    metaTitle: "Ümraniye Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Ümraniye'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuş bir avukattır. Doğusunda Sancaktepe, güneyinde Ataşehir, batısında Üsküdar, kuzeyinde ise Çekmeköy ve Beykoz ile komşu olan, yaklaşık 45 km²'lik alanda 30'u aşkın mahalleyi barındıran Ümraniye'de ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Sanayi sitesi, konut ve işyeri niteliğindeki taşınmazlarda uyuşmazlık takibi." },
      { title: "İş Hukuku", description: "İmalat ve hizmet sektörü çalışanlarının işçilik alacakları ve işe iade süreçleri." },
      { title: "İcra Hukuku", description: "Alacak takibi ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "İmar ve idari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı ve cezası uyuşmazlıkları." },
      { title: "Borçlar Hukuku", description: "Ticari sözleşme ve alacak kaynaklı davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Sanayi sitesi, konut ve işyeri niteliğindeki taşınmazlara ilişkin gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İmar uygulamaları ve idari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Ticari sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "1963 yılında belediye teşkilatına kavuşan ve 1987'de Üsküdar'dan ayrılarak ilçe statüsü kazanan Ümraniye, TÜİK'in 2025 Adrese Dayalı Nüfus Kayıt Sistemi sonuçlarına göre 728.913 kişilik nüfusuyla İstanbul'un dördüncü kalabalık ilçesidir; Yukarı Dudullu'daki İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi başta olmak üzere sanayi ile konut dokusunun iç içe geçtiği bir yerleşim yapısına sahiptir.",
      "İlçenin kendi adliyesi 2013 yılının Şubat ayında kapatılarak Kartal'daki İstanbul Anadolu Adliyesi'ne bağlanmıştır; vergisel işlemler Yamanevler Mahallesi'ndeki Ümraniye Vergi Dairesi Müdürlüğü üzerinden yürütülür, ulaşımda ise M5 metro hattının dokuz istasyonu ile 2023'te açılan M8 hattının beş istasyonu ilçe sınırları içinde kalır.",
    ],
    faqs: [
      { question: "Ümraniye'deki davalara hangi adliye bakıyor?", answer: "Ümraniye'nin kendi adliyesi 2013 yılının Şubat ayında kapatılarak Kartal'daki İstanbul Anadolu Adliyesi'ne bağlanmıştır; ilçedeki tüm dava ve icra dosyaları bu adliyede görülür. Vergisel işlemler ise Yamanevler Mahallesi'ndeki Ümraniye Vergi Dairesi Müdürlüğü üzerinden yürütülür; dosyalar adliyede, vergi işlemleri ise bu müdürlükte ayrı ayrı takip edilir." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir. Konu kısaca aktarıldıktan sonra danışmanlık görüşmesinde dosyanın hukuki durumu ele alınır; temsile karar verilirse vekaletname düzenlenir, evraklar bir araya getirilir ve mahkeme ile idari kurumlar önündeki takip müvekkile bilgi verilerek sürdürülür." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır. İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi'ndeki işletmelere ilişkin alacak, iş ve ruhsat uyuşmazlıkları ile konut kira, tapu ve imar işlemleri başlıca çalışma konuları arasında yer alır." },
      { question: "Büro Ümraniye'de mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Ümraniye'deki müvekkillere de aynı kapsamda hizmet verilir. Görüşmeler yüz yüze veya çevrim içi planlanabilir; Ümraniye'deki dosyalar ise Kartal'daki İstanbul Anadolu Adliyesi'nde görüldüğü için dosya takibi bu adliye esas alınarak yürütülür ve gelişmeler müvekkille paylaşılır." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Ücret dosyanın niteliğine göre değişir ve randevu sırasında bilgi verilir. Danışmanlık görüşmesi ücretlidir; davanın türü, aşama sayısı ve gerekecek hazırlık çalışması ücretin belirlenmesinde dikkate alınan başlıca unsurlardır. Temsile karar verilirse kapsam vekaletname düzenlenirken yazılı olarak netleştirilir." },
      { question: "Ümraniye'de vergi dairesi nerede?", answer: "Ümraniye Vergi Dairesi Müdürlüğü, Yamanevler Mahallesi'nde, Dr. Fazıl Küçük Caddesi'nde hizmet vermektedir. Ümraniye mükelleflerinin vergisel işlemleri bu müdürlük üzerinden yürütülür; ihbarnameye karşı vergi mahkemesinde dava açma süresi tebliğden itibaren 30 gün olduğundan tebligatın hangi daireden geldiği önem taşır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir. İlk iletişim WhatsApp ya da telefonla kurulur; görüşmede konunun özeti alınır, dosyanın hukuki durumu değerlendirilir ve hangi belgelerin hazırlanması gerektiği konusunda bilgi verilir. Temsile karar verilirse vekaletname düzenlenerek takip başlatılır." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi gerekir. Gözaltı sürecinin başladığı andan itibaren şüphelinin müdafi ile görüşme hakkı doğar; müdafi şüpheliye eşlik edebilir, soruşturma dosyasını inceleyebilir ve tutukluluk kararlarına karşı itiraz hazırlayabilir. Tutuklamaya itiraz süresi yedi gündür." },
      { question: "Ümraniye'ye hangi metro hatlarıyla ulaşılır?", answer: "Üsküdar-Çekmeköy güzergahındaki M5 metrosu ile Bostancı-Dudullu güzergahındaki M8 metrosunun ilçe sınırları içindeki istasyonlarından ulaşılabilir. M5 hattının dokuz, 2023'te açılan M8 hattının ise beş istasyonu ilçe sınırları içinde kalır; Ümraniye'deki dosyalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür." },
    ],
    howToTitle: "Ümraniye'de Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Ümraniye Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "umraniye-bosanma-avukati",
    name: "Ümraniye Boşanma Avukatı",
    heroTitle: "Ümraniye Boşanma Avukatı",
    heroSubtitle:
      "TÜİK verilerine göre İstanbul'un dördüncü kalabalık ilçesi olan ve İstiklal, Atatürk gibi yoğun apartman yerleşimine sahip mahalleleri barındıran Ümraniye'de anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal paylaşımı süreçlerinde avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) temsil sağlamaktadır; aile mahkemesi davaları, ilçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Ümraniye Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Ümraniye'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, Ümraniye'deki ailelerin boşanma, velayet ve nafaka süreçlerinde temsilini üstlenmektedir.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Mal Rejimi Tasfiyesi", description: "Apartman ve site nitelikli konutların değerlemeyle paylaşımı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Konut ve işyeri niteliğindeki taşınmazların dahil olduğu mal rejimi tasfiyesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "TÜİK verilerine göre Ümraniye'nin en kalabalık mahallesi olan İstiklal başta olmak üzere yoğun apartman ve site yerleşimine sahip ilçede, boşanma sürecindeki eşler için ortak konutun akıbeti ve ev eşyalarının paylaşımı sıklıkla gündeme gelen konular arasındadır.",
      "Boşanma, velayet ve nafaka talepleri, Ümraniye'nin kendi adliyesi 2013'te kapatılıp Kartal'daki İstanbul Anadolu Adliyesi'ne bağlandığından bu adliyedeki aile mahkemelerinde görülür; anlaşmalı süreçte protokolün eksiksizliği, çekişmeli süreçte ise ileri sürülen delillerin gücü sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Ümraniye'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki aile mahkemesine başvurulur. İlçenin adliyesi 2013'te kapatılmış ve dosyalar bu adliyeye bağlanmıştır; yetki TMK m.168 uyarınca belirlenir ve anlaşmalı süreçte protokolün eksiksizliği, çekişmeli süreçte ise delillerin gücü sonucu etkiler." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Belirli bir olgunluğa ulaşmışsa çocuğun görüşü dikkate alınabilir. Velayetin düzenlenmesinde esas olan çocuğun yararıdır; hakim, ana ve babanın koşullarını, çocuğun ihtiyaçlarını ve çocukla kişisel ilişki düzenini birlikte değerlendirir. Çocuğun görüşü bu değerlendirmede bir unsur olup tek başına belirleyici değildir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir. Çocuğun giderleri, tarafların yaşam koşulları ve ödeme gücü de dikkate alınır; nafaka dava sürerken tedbir nafakası, boşanma sonrasında iştirak veya yoksulluk nafakası olarak istenebilir ve sonradan artırılması, azaltılması ya da kaldırılması için ayrıca dava açılabilir." },
      { question: "Ortak konut kiracı ise boşanma sürecini nasıl etkiler?", answer: "Kira sözleşmesinin tarafı olma durumu ve tahliye talepleri ayrıca değerlendirilir, konut hakkına ilişkin tedbir aile mahkemesinden istenebilir. Boşanma sürecinde ortak konutun akıbeti ve ev eşyalarının paylaşımı sık gündeme gelir; hangi eşin konutta kalacağı geçici tedbirle düzenlenebilir ve karar dosyadaki delillere göre verilir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir. Eşlerin barışması hâlinde dava dosyası kapanır ve evlilik birliği devam eder; ancak dava sürerken verilmiş tedbir kararlarının akıbeti ile yargılama giderleri konusunda mahkemeden gelen kararların ayrıca değerlendirilmesi gerekir ve bu konuda mahkeme kararı esas alınır." },
    ],
    howToTitle: "Ümraniye'de Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "İhtiyaç Analizi", text: "Velayet, nafaka ve mal rejimi talepleri değerlendirilir." },
      { name: "Dilekçe Hazırlığı", text: "Duruma uygun dava dilekçesi ya da protokol hazırlanır." },
      { name: "Dava Açılışı", text: "Yetkili aile mahkemesine başvuru yapılır." },
      { name: "Sonuç", text: "Duruşma sürecinin ardından karar açıklanır." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanmada-nafaka-turleri", "ziynet-esyasi-davasi"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "umraniye-ceza-avukati",
    name: "Ümraniye Ceza Avukatı",
    heroTitle: "Ümraniye Ceza Avukatı",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan avukat Furkan Arıkan, gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında Ümraniye'deki şüpheli ve sanıklara müdafilik hizmeti sunar; ilçe sınırlarında E ve T tipi kapalı ceza infaz kurumları bulunmakla birlikte dava dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülmektedir.",
    metaTitle: "Ümraniye Ceza Avukatı | Müdafilik",
    metaDescription:
      "Ümraniye'de soruşturma, kovuşturma, tutukluluğa itiraz ve ceza yargılamasının tüm aşamalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nin 2019 mezunu olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, ceza yargılamasının soruşturma ve kovuşturma aşamalarında Ümraniye'deki müvekkillerine müdafilik hizmeti vermektedir.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "İnfaz Hukuku", description: "Ceza infaz kurumundaki hükümlülerin infaza ilişkin başvuruları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Ceza infaz kurumundaki hükümlülerin infaz hukukuna ilişkin başvuruları",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "Ümraniye sınırları içinde E ve T tipi kapalı ceza infaz kurumları ile 2014 yılından bu yana hizmet veren bir çocuk eğitim evi bulunmaktadır; bu durum infaz hukukuna ilişkin başvuruların ilçede sık karşılaşılan konular arasında yer almasına yol açmaktadır.",
      "Soruşturma ve kovuşturma dosyaları, ilçe adliyesinin 2013 yılında kapatılmasının ardından Kartal'daki İstanbul Anadolu Adliyesi'nde yürütülmektedir; gözaltı sürecinin başladığı andan itibaren şüphelinin müdafi ile görüşme hakkı doğar.",
    ],
    faqs: [
      { question: "Ümraniye'de bir ceza davası hangi adliyede görülür?", answer: "İlçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. Ümraniye adliyesi 2013 yılında kapatıldığı için soruşturma ve kovuşturma dosyaları bu adliyede yürütülür; gözaltı sürecinin başladığı andan itibaren şüphelinin müdafi ile görüşme hakkı doğar ve savunma hazırlığı bu aşamada başlar." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir, ancak şüpheli müdafi yardımından yararlanma hakkına sahiptir ve müdafi bulundurulması önerilir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; ifade vermeden önce soruşturma dosyasının incelenmesi savunmanın hazırlanması açısından önem taşır ve ifadenin içeriği dosyanın seyrini etkileyebilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, karara karşı tebliğden itibaren 15 gün içinde sulh ceza hakimliğine itiraz edilebilir. Savcılığın verdiği kovuşturmaya yer olmadığı kararı bu yolla denetlettirilebilir; itiraz dilekçesinin süresinde hazırlanabilmesi için karar metninin ve soruşturma dosyasının vakit kaybetmeden incelenmesi gerekir." },
      { question: "Ceza infaz kurumundaki bir hükümlü için hangi başvurular yapılabilir?", answer: "Koşullu salıverilme, denetimli serbestlik ve infazın ertelenmesi gibi taleplere ilişkin başvurular yapılabilir. Ümraniye sınırları içinde E ve T tipi kapalı ceza infaz kurumları ile bir çocuk eğitim evi bulunduğundan infaz hukukuna ilişkin başvurular ilçede sık görülür; şartların sağlanıp sağlanmadığı hükümlünün durumuna göre incelenir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Yargılamaya kaldığı yerden devam edilir. Uzlaşma yalnızca kanunda uzlaşmaya tabi olarak sayılan suçlarda söz konusudur; taraflar anlaşamazsa soruşturma veya kovuşturma süreci sürer, uzlaşma sağlanırsa ise ceza kovuşturması sona erebilir. Süreç sanık veya mağdur vekili aracılığıyla takip edilebilir." },
    ],
    howToTitle: "Ümraniye'de Ceza Yargılaması Nasıl İlerler?",
    howToSteps: [
      { name: "Olay Bildirimi", text: "Şikayet, ihbar veya resen harekete geçilir." },
      { name: "Soruşturma Aşaması", text: "Deliller toplanır, ifadeler alınır." },
      { name: "Dava Açılması", text: "İddianamenin kabulüyle kovuşturma başlar." },
      { name: "Temyiz/İstinaf", text: "Karara karşı üst yargı yoluna gidilebilir." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz", "kosullu-saliverilme-oranlari"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "umraniye-gayrimenkul-avukati",
    name: "Ümraniye Gayrimenkul Avukatı",
    heroTitle: "Ümraniye Gayrimenkul Avukatı",
    heroSubtitle:
      "Yukarı Dudullu Mahallesi'ndeki İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi'nin yanı sıra yoğun konut yerleşimine sahip Ümraniye'de tapu, kat mülkiyeti ve kira uyuşmazlıklarında avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) danışmanlık sağlar; davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Ümraniye Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Ümraniye'de tapu iptali, kat mülkiyeti, sanayi sitesi taşınmazları ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Gayrimenkul hukuku alanında Ümraniye'deki müvekkillerine danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Sanayi Sitesi Taşınmazları", description: "İMES ve Dudullu OSB'deki işyeri/depo niteliğindeki taşınmazların alım-satım ve kira süreçleri." },
      { title: "Kat Mülkiyeti Uyuşmazlıkları", description: "Site yönetimi, ortak gider ve karar uyuşmazlıklarının çözümü." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Kentsel Dönüşüm", description: "Riskli yapı tespiti ve dönüşüm süreçlerinde hak sahipliği takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İMES Sanayi Sitesi ve Dudullu OSB'deki işyeri taşınmazlarının tapu ve imar durumu incelemesi",
      "Kat mülkiyeti ve site yönetimi uyuşmazlıklarına ilişkin danışmanlık",
      "Tapu iptali ve tescil davalarının açılması",
      "Kentsel dönüşüm kapsamındaki hak sahipliği ve değer tespiti süreçleri",
      "Kira bedeli tespiti ve uyarlama davaları",
      "Taşınmaz satış vaadi sözleşmelerinin hukuki incelemesi",
    ],
    localParagraphs: [
      "Yukarı Dudullu Mahallesi'ndeki İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi, Ümraniye'nin sanayi ve ticari gayrimenkul dokusunu oluşturmaktadır; bu bölgelerdeki işyeri ve depo niteliğindeki taşınmazların alım-satım ve kiralama işlemlerinde tapu kaydı ile imar durumunun birlikte incelenmesi önem taşır.",
      "Tapu ve imar kaynaklı uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Ümraniye'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    ],
    faqs: [
      { question: "Sanayi sitesindeki bir işyerini satın alırken nelere dikkat edilmeli?", answer: "Tapu kaydı, kat irtifakı veya mülkiyeti durumu ve varsa kooperatif işletme yönetmeliği incelenmelidir. İMES Sanayi Sitesi ve Dudullu OSB'deki işyeri ve depo niteliğindeki taşınmazların alım-satımında tapu kaydı ile imar durumunun birlikte incelenmesi önem taşır; bu inceleme satın alma öncesinde yapılmalıdır." },
      { question: "Ümraniye'de gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. Ümraniye'nin kendi adliyesi bulunmadığından tapu ve imar kaynaklı uyuşmazlıklar bu adliyedeki ilgili hukuk mahkemelerinde açılır; dava türüne göre görevli mahkeme değişebilir ve dava dilekçesi buna göre hazırlanır." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir. Dava, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde görülür; talebin dayanağı olan hukuki sebep ile tescilin hangi gerekçeyle hukuka aykırı olduğu dilekçede açıkça belirtilmeli ve tapu kaydına ilişkin belgeler sunulmalıdır." },
      { question: "Site yönetimiyle yaşanan ortak gider uyuşmazlığında ne yapılabilir?", answer: "Öncelikle yönetim planı ve genel kurul kararları incelenir, gerekirse dava yoluna gidilebilir. Kat mülkiyeti ve site yönetimi uyuşmazlıklarında ortak gider ve aidat kararlarının yönetim planına ve kanuna uygunluğu değerlendirilir; kat malikleri kurulu kararlarına karşı mahkemede itiraz edilebilir ve süreler dikkatle takip edilmelidir." },
      { question: "Kentsel dönüşümde hak sahibinin onayı şart mı?", answer: "Riskli yapı tespiti sonrası süreç kanunda öngörülen çoğunluk ve usul kurallarına göre ilerler. Hak sahipliği ve değer tespiti süreçleri bu kurallara göre yürütülür; tespit tebliğ tarihinden itibaren on beş gün içinde Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'na itiraz konusu yapılabilir ve sonrasında idari yargı yolu açıktır." },
    ],
    howToTitle: "Ümraniye'de Tapu Uyuşmazlığı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Kayıt İncelemesi", text: "Tapu ve imar durumu belgeleri incelenir." },
      { name: "Uyuşmazlığın Netleştirilmesi", text: "İddia ve dayanak deliller belirlenir." },
      { name: "Dava Açılması", text: "Yetkili mahkemede dava süreci başlatılır." },
      { name: "Sonuçlanma", text: "Karar veya bilirkişi raporu doğrultusunda süreç tamamlanır." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "umraniye-icra-avukati",
    name: "Ümraniye İcra Avukatı",
    heroTitle: "Ümraniye İcra Avukatı",
    heroSubtitle:
      "İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi'ndeki üretici ve tedarikçiler arasındaki fatura, çek ve senet alacakları ile Şerifali, Çakmak ve Atatürk mahallelerindeki bireysel borç ilişkilerinde takip, itiraz ve haciz işlemleri yürütülür; ilçe için yetkili icra mahkemeleri İstanbul Anadolu Adliyesi'ndedir.",
    metaTitle: "Ümraniye İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Ümraniye'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Ümraniye'de tahsil edilemeyen alacağı bulunan işletmelere ve hakkında icra takibi başlatılan kişilere takip hukuku konularında destek veren Av. Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'ni tamamlamış ve 72621 sicil numarasıyla İstanbul Barosu'na kaydolmuştur.",
    highlightCards: [
      { title: "Üretici ve Tedarikçi Alacakları", description: "İMES ve Dudullu OSB'deki işletmeler arasında kesilen faturalara dayalı takip." },
      { title: "Çek ve Senet Takibi", description: "Ödenmeyen çek ve bonolar için kambiyo senetlerine özgü takip yolu." },
      { title: "Borçlu Vekilliği", description: "Ödeme emri alan kişi ve şirketler adına süresinde itiraz ve şikayet." },
      { title: "Haciz ve Muhafaza", description: "Makine, stok, araç ve banka hesapları üzerinde haciz talepleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İMES Sanayi Sitesi ve Dudullu OSB'deki imalatçılar arasındaki mal teslimine dayalı fatura alacaklarının takibi",
      "Karşılıksız çek ve vadesinde ödenmeyen bonolar için kambiyo takibi",
      "Mahkeme kararlarının ilamlı icra yoluyla infazı",
      "Ödeme emrine süresinde itiraz ile icra mahkemesine şikayet dilekçeleri",
      "İtirazın iptali (İİK m.67) ile itirazın kaldırılması (İİK m.68) davaları",
      "İşyerindeki makine ve stoklar üzerinde haciz ile satış sürecinin takibi",
    ],
    localParagraphs: [
      "Ümraniye'de M8 Bostancı-Dudullu hattının İMES ve Modoko-Keyap istasyonları çevresindeki sanayi siteleri ile Dudullu Organize Sanayi Bölgesi'nde faaliyet gösteren işletmeler arasındaki vadeli satışlarda kullanılan çek, senet ve açık hesap faturalar, ödenmediğinde icra takibine konu olabilir.",
      "Atatürk, İstiklal, Namık Kemal ve Esenşehir gibi mahallelerde yaşayan bireyler açısından ise kira, kredi ve kişiler arası borçlardan doğan takipler gündeme gelebilir. Ümraniye'nin ayrı bir adliyesi olmadığından bu dosyalardaki şikayet ve itiraz uyuşmazlıklarını Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki icra mahkemeleri karara bağlar.",
    ],
    faqs: [
      { question: "İMES veya Dudullu OSB'deki bir firmadan fatura alacağı nasıl tahsil edilir?", answer: "Firma hakkında ilamsız takip açılır ve ödeme emri tebliğe çıkarılır. Talebe sevk irsaliyesi, fatura, sipariş yazışmaları ve cari hesap mutabakatı eklenir. Firma yedi günlük süreyi itirazsız geçirirse takip kesinleşir ve işyerindeki makine, stok veya banka hesapları üzerinde haciz istenebilir; itiraz gelirse alacaklı iptal ya da kaldırma yoluna başvurur." },
      { question: "Ümraniye'de ödenmeyen bir çek için hangi takip yolu kullanılır?", answer: "Çek için kambiyo senetlerine dayalı haciz yoluyla takip başlatılabilir. Bu yolda borçluya gönderilen ödeme emrine itirazın süresi ve şartları genel takipten farklıdır; bu nedenle ödeme emrinde yazan süreler dikkatle okunmalıdır. Takip talebine çekin aslı ile bankaya ibraz edildiğini ve karşılıksız kaldığını gösteren şerh eklenir." },
      { question: "Ümraniye'de oturan biri ödeme emri aldığında itiraz için kaç günü vardır?", answer: "Ödeme emrinin tebliğinden sonra 7 gün içinde itiraz yapılmalıdır; söz konusu süre, genel haciz yoluyla başlatılan ilamsız takiplere özgüdür. İİK m.62'ye göre itiraz dilekçesi dosyanın bulunduğu icra dairesine verilir ve vaktinde yapılan itiraz takibi durdurur. Tebliğ günü tebligat mazbatasından teyit edilmeli, kabul edilmeyen tutar dilekçede açıkça gösterilmelidir." },
      { question: "Ümraniye'deki takiplerde itiraz ve şikayetler hangi mahkemede görülür?", answer: "Bu başvuruları Kartal'daki İstanbul Anadolu Adliyesi'nde görev yapan icra mahkemeleri inceler; Ümraniye'nin ayrı bir adliyesi bulunmamaktadır. İcra dairesinin işlemine karşı şikayet ve itirazın kaldırılması talepleri icra mahkemesine yapılır. Alacaklı İİK m.67'deki itirazın iptali davasını ise genel mahkemede, itirazın kendisine bildirildiği tarihten itibaren 1 yıllık süre içinde açabilir." },
      { question: "Dudullu OSB'deki bir işyerinin makine ve stoklarına haciz konulabilir mi?", answer: "Evet, makine ve stoklar kanunun haczi yasaklamadığı ölçüde haczedilebilir. Kanunun haczini yasakladığı mallara dokunulamaz; bu yöndeki itiraz icra mahkemesine şikayet yoluyla yapılır. Haciz sırasında mallar yediemine bırakılabilir veya muhafaza altına alınabilir; satış aşaması alacaklının talebiyle kıymet takdirinden sonra başlar." },
    ],
    howToTitle: "Ümraniye'de Ticari Alacak İçin İcra Takibi Nasıl Yürütülür?",
    howToSteps: [
      { name: "Belgelerin Toplanması", text: "Fatura, irsaliye, çek, senet ve cari hesap kayıtları dosyalanır." },
      { name: "Takip Talebi", text: "Belgeye uygun takip türü seçilerek yetkili icra dairesinde dosya açılır." },
      { name: "İtirazın İzlenmesi", text: "Ödeme emri tebliğ edildikten sonra borçlunun itiraz edip etmediği takip edilir." },
      { name: "Haciz ve Muhafaza", text: "Kesinleşen takipte işyerindeki mallar, araçlar ve hesaplara haciz konulur." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "umraniye-idare-avukati",
    name: "Ümraniye İdare Avukatı",
    heroTitle: "Ümraniye İdare Avukatı",
    heroSubtitle:
      "İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi'ndeki işyeri açma/çalışma ruhsatı uyuşmazlıklarından, 1960'lardan bu yana çarpık biçimde yapılaşan bölgelerdeki ıslah imar planı işlemlerine kadar geniş bir alanda avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) Ümraniye'deki müvekkillerine idari dava desteği sunar; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Ümraniye İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Ümraniye'de idari işlemlerin iptali, imar uygulamalarına itiraz ve tazminat davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nin 2019 mezunu olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, idari işlemlerin iptali ve tam yargı davalarında Ümraniye'deki müvekkillerine danışmanlık sağlamaktadır.",
    highlightCards: [
      { title: "İptal Davası Süreci", description: "Hukuka aykırı idari işlemlere karşı yargı yoluna başvurulması." },
      { title: "Sanayi Sitesi Ruhsat İşlemleri", description: "İMES ve Dudullu OSB'deki işyeri açma/çalışma ruhsatı uyuşmazlıkları." },
      { title: "Islah İmar Uygulamaları", description: "Çarpık yapılaşan bölgelerdeki ıslah imar planı ve tapu tahsis işlemlerine itiraz." },
      { title: "İdari Yaptırımlara İtiraz", description: "Belediye ve diğer kurumların idari para cezalarına karşı dava." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İMES Sanayi Sitesi ve Dudullu OSB'deki işyeri açma ve çalışma ruhsatı ret işlemlerine itiraz",
      "Islah imar planı ve tapu tahsis belgesi işlemlerine ilişkin idari dava süreçleri",
      "Belediye imar planı ve plan değişikliği kararlarına karşı iptal davası açılması",
      "İdarenin işlem veya eyleminden kaynaklanan zararlar için tam yargı davası açılması",
      "İdari para cezalarına karşı dava süreçlerinin yürütülmesi",
      "Kamu görevlisi özlük haklarına ilişkin idari uyuşmazlıklar",
    ],
    localParagraphs: [
      "1960 yılında Organize Sanayi Bölgesi ilan edilmesinin ardından yoğun iç göç alan ve hızla yapılaşan Ümraniye'de, geçmişte plansız gelişen yerleşim alanlarına yönelik ıslah imar planı işlemleri ile İMES ve Dudullu OSB'deki işyerlerinin ruhsatlandırma süreçleri, ilçedeki idari uyuşmazlıkların önemli bir bölümünü oluşturmaktadır.",
      "Bu davalara İstanbul idare mahkemelerinde bakılmakta olup dava açma süresi, kural olarak işlemin tebliğ veya ilan edildiği tarihten başlayan 60 gündür; bu süre içinde dava açılmazsa hak düşümü söz konusu olur.",
    ],
    faqs: [
      { question: "Ümraniye'de imar planı değişikliğine ne zaman itiraz edilmeli?", answer: "Planın ilan edildiği veya işlemin tebliğ edildiği tarihten itibaren 60 gün içinde idare mahkemesinde dava açılması gerekir; bu süre geçirildiğinde dava hakkı düşer. İYUK m.7 uyarınca belirlenen bu süre kısa olduğundan plan ve işlem belgeleri vakit kaybetmeden toplanmalı, yürütmenin durdurulması da talep edilebilir." },
      { question: "Sanayi sitesindeki bir işyerinin ruhsat başvurusu reddedilirse ne yapılabilir?", answer: "Ret işlemine karşı idare mahkemesinde iptal davası açılabilir. Dava, işlemin tebliğ tarihinden itibaren kural olarak 60 gün içinde açılmalıdır; İMES ve Dudullu OSB'deki işyeri açma ve çalışma ruhsatı ret işlemlerinde ret gerekçesi, başvuru belgeleri ve idarenin yazışmaları dilekçeye eklenir." },
      { question: "Islah imar planı kapsamındaki bir tespite itiraz mümkün mü?", answer: "Evet, ilgili idari işleme karşı yasal süresi içinde dava yoluna gidilebilir. Geçmişte plansız gelişen yerleşim alanlarına yönelik ıslah imar planı ve tapu tahsis belgesi işlemleri idari dava konusu olabilir; dava açma süresi kural olarak işlemin tebliğ veya ilanından itibaren 60 gündür ve bu süre geçirilmemelidir." },
      { question: "Belediyenin kestiği idari para cezasına nasıl itiraz edilir?", answer: "Cezanın tebliğinden itibaren yasal süre içinde idare mahkemesinde dava açılarak itiraz edilebilir. Cezayı veren kanunun öngördüğü yargı yolu ve süre ayrıca incelenmelidir; genel kural olarak idari işlemlere karşı iptal davası, İYUK m.7 uyarınca yazılı bildirimden itibaren altmış gün içinde açılır ve tebliğ tarihi önem taşır." },
      { question: "İdarenin bir işlemi nedeniyle zarara uğrayan ne yapabilir?", answer: "Tam yargı davası açarak uğradığı zararın tazminini talep edebilir. İdarenin işlem veya eyleminden doğan zararlarda dava idare mahkemesinde açılır; zararın doğduğu eylemin niteliği, idarenin kusuru veya hizmet kusuru ile zararın miktarına ilişkin belgeler dava dilekçesinde ortaya konulmalıdır." },
    ],
    howToTitle: "Ümraniye'de İdari Dava Süreci Nasıl Yürütülür?",
    howToSteps: [
      { name: "Ön İnceleme", text: "Dava konusu işlem ile tebliğ veya ilan tarihi tespit edilir." },
      { name: "Süre Hesabı", text: "60 günlük dava açma süresinin başlangıcı belirlenir." },
      { name: "Dilekçenin Hazırlanması", text: "Hukuki dayanaklar ve talepler dilekçeye yazılır." },
      { name: "Mahkeme Süreci", text: "İdare mahkemesi dosyayı inceleyerek kararını verir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: ["idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "umraniye-is-hukuku-avukati",
    name: "Ümraniye İş Hukuku Avukatı",
    heroTitle: "Ümraniye İş Hukuku Avukatı",
    heroSubtitle:
      "Elmalıkent Mahallesi'ndeki Ümraniye Eğitim ve Araştırma Hastanesi ile İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi'ndeki imalat işletmelerinde çalışanların kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerinde İstanbul Barosu sicil no 72621 ile kayıtlı avukat Furkan Arıkan temsil sağlar; iş mahkemesi davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Ümraniye İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Ümraniye'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan İstanbul Barosu'nda 72621 sicil numarasıyla kayıtlı olup 2019'da MEF Üniversitesi Hukuk Fakültesi'ni tamamlamıştır; iş hukuku alanında Ümraniye'deki çalışan ve işverenlere danışmanlık vermektedir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Sanayi ve Sağlık Sektörü Çalışanları", description: "İMES/Dudullu OSB'deki imalat işletmeleri ile hastane personelinin işçilik hakları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Sanayi sitesi ve OSB'deki imalat işletmesi çalışanlarının işçilik alacaklarının tahsili",
      "Fazla mesai ve yıllık izin ücreti gibi diğer işçilik alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Elmalıkent Mahallesi'ndeki Ümraniye Eğitim ve Araştırma Hastanesi ile Yukarı Dudullu ve Esenşehir çevresindeki İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi'nde istihdam edilen çalışanlar, Ümraniye'de işçilik alacağı ve işe iade uyuşmazlıklarının önemli bir bölümünü oluşturmaktadır.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları, Ümraniye'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki iş mahkemesinde görülür.",
    ],
    faqs: [
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Çalışma süresi ve son brüt (giydirilmiş) ücret esas alınarak hesaplanır. Hesaplamada işçinin aynı işyerindeki toplam çalışma süresi ve ücrete eklenen yan haklar dikkate alınır; kıdem ve ihbar tazminatı alacağında dava açılmadan önce zorunlu arabuluculuğa başvurulması gerekir ve fesih nedeni tazminata hak kazandırmalıdır." },
      { question: "Ümraniye'de iş mahkemesi nerededir?", answer: "İlçenin kendi adliyesi bulunmadığından iş mahkemesi, Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir. Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları bu adliyedeki iş mahkemesinde görülür; işe iade için fesihten itibaren bir ay içinde arabulucuya başvurulması, son tutanaktan itibaren iki hafta içinde dava açılması gerekir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir. Süreç, fesihten itibaren bir ay içinde arabulucuya başvurmakla başlar; anlaşma sağlanamazsa son tutanaktan itibaren iki hafta içinde iş mahkemesinde dava açılır ve yargılamanın süresi mahkemenin iş yüküne göre farklılık gösterebilir." },
      { question: "Sanayi sitesinde çalışanların fazla mesai hakkı nasıl ispatlanır?", answer: "Puantaj kayıtları, bordrolar ve tanık beyanıyla ispat edilebilir. Fazla mesai alacağında çalışma saatlerini gösteren belgeler önem taşır; işyeri giriş-çıkış kayıtları, ücret bordroları ve birlikte çalışılan kişilerin beyanları dava dilekçesine eklenir. Dava açmadan önce işçilik alacakları için arabuluculuğa başvurulması dava şartıdır." },
      { question: "İşe iade davası açmadan önce arabuluculuğa gitmek zorunlu mu?", answer: "Evet, dava şartı olarak öncelikle arabulucuya başvurulması gerekir. Başvuru fesih bildiriminden itibaren bir ay içinde yapılmalıdır; arabuluculukta anlaşma sağlanamazsa son tutanaktan itibaren iki hafta içinde iş mahkemesinde dava açılır. İş Kanunu m.18 uyarınca otuz işçi ve altı ay kıdem şartları aranır." },
    ],
    howToTitle: "Ümraniye'de İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Fesih Değerlendirmesi", text: "İşten çıkarma gerekçesi ve usulü incelenir." },
      { name: "Arabulucuya Başvuru", text: "Yasal süre içinde arabuluculuk sürecine başlanır." },
      { name: "Dava Süreci", text: "Anlaşma olmazsa iş mahkemesinde dava açılır." },
      { name: "Sonuç", text: "Mahkeme kararı doğrultusunda işlem yapılır." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "giydirilmis-ucret-kavrami", "ise-iade-davasi"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "umraniye-kira-tahliye-avukati",
    name: "Ümraniye Kira ve Tahliye Avukatı",
    heroTitle: "Ümraniye Kira ve Tahliye Avukatı",
    heroSubtitle:
      "TÜİK'in 2025 verilerine göre 728.913 nüfusuyla İstanbul'un dördüncü kalabalık ilçesi olan Ümraniye'de, M5 ve M8 metro hatlarının istasyonlarına yakın mahallelerdeki konut ve işyeri kiralamalarında, tahliye ve kira bedeli tespiti uyuşmazlıklarında avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) destek sağlar; sulh hukuk mahkemesi davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Ümraniye Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Ümraniye'de kiracı tahliyesi, kira sözleşmesi uyuşmazlıkları ve kira bedeli tespitinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kira hukuku uyuşmazlıklarında Ümraniye'deki kiracı ve kiraya verenlere destek olan Furkan Arıkan, 2019 MEF Üniversitesi Hukuk Fakültesi mezunu olup İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır.",
    highlightCards: [
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "İşyeri Kiralamaları", description: "Sanayi sitesi ve cadde üzeri işyerlerinin kira uyuşmazlıkları." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Sanayi sitesi ve cadde üzerindeki işyerlerinin kira sözleşmelerinin hazırlanması ve incelenmesi",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "TÜİK'in 2025 verilerine göre 728.913 nüfusuyla İstanbul'un dördüncü kalabalık ilçesi olan Ümraniye'de, M5 hattının Çarşı ve Yamanevler, M8 hattının ise Parseller gibi istasyonlarına yakın mahallelerdeki konutlarda kiracı talebi yüksek seyretmektedir.",
      "Tahliye ve kira bedeli tespiti davalarına, Ümraniye'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki sulh hukuk mahkemesinde bakılır; yazılı ve eksiksiz bir kira sözleşmesi uyuşmazlık halinde ispat kolaylığı sağlar.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir. Kira ödenmezse TBK m.315 uyarınca konutta kiracıya yazılı ihtarla otuz gün süre verilir; bu sürede ödeme yapılmazsa sözleşme feshedilebilir ve tahliye davası ya da icra yoluyla tahliye istenebilir." },
      { question: "Ümraniye'de tahliye davası hangi mahkemede görülür?", answer: "İstanbul Anadolu Adliyesi bünyesindeki sulh hukuk mahkemesinde görülür. Ümraniye'nin kendi adliyesi bulunmadığından tahliye ve kira bedeli tespiti davaları Kartal'daki bu adliyede açılır; ihtiyaç, kira borcu veya taahhütnameye dayalı tahliye taleplerinin dava şartları ayrı ayrı incelenir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Kira bedelinin tespiti ve uyarlama davaları sulh hukuk mahkemesinde açılır; rayiç kira bedelinin belirlenmesinde kiralananın özellikleri ve bölgedeki benzer kira bedelleri değerlendirilir, artış ise konutlarda TBK m.344 sınırına tabidir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir. Taahhütnamenin geçerli sayılması için kira sözleşmesinden sonra, kiralananın teslimi sonrasında yazılı olarak düzenlenmiş olması gerekir; geçerliliği somut olayda incelenir ve uyuşmazlık hâlinde sulh hukuk mahkemesine başvurulabilir." },
      { question: "Metro istasyonuna yakın bir konutun kira bedeli nasıl güncellenir?", answer: "Sözleşmede belirlenen artış oranı veya yasal sınırlar çerçevesinde güncelleme yapılabilir; uyuşmazlık halinde tespit davası açılabilir. Konut kira artışı, TBK m.344 uyarınca bir önceki kira yılındaki on iki aylık TÜFE ortalamasını geçemez; tespit davası Kartal'daki İstanbul Anadolu Adliyesi'nde sulh hukuk mahkemesinde açılır." },
    ],
    howToTitle: "Ümraniye'de Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "umraniye-vergi-avukati",
    name: "Ümraniye Vergi Avukatı",
    heroTitle: "Ümraniye Vergi Avukatı",
    heroSubtitle:
      "Dr. Fazıl Küçük Caddesi'ndeki Ümraniye Vergi Dairesi Müdürlüğü'ne kayıtlı şirket ve şahıs mükelleflerin tarhiyat, vergi ziyaı cezası, uzlaşma ve 6183 sayılı Kanun kapsamındaki ödeme emri uyuşmazlıklarında idari başvuru ve dava süreçleri takip edilir; dava aşamasında İstanbul vergi mahkemeleri görevlidir.",
    metaTitle: "Ümraniye Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Ümraniye'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Av. Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olmuştur; Ümraniye'deki imalatçı, tüccar ve kira geliri elde eden bireylerin vergi idaresiyle yaşadığı uyuşmazlıklarda hukuki destek sağlar.",
    highlightCards: [
      { title: "İnceleme Sonrası Tarhiyat", description: "Vergi inceleme raporuna dayanan ikmalen ve re'sen tarhiyata karşı dava." },
      { title: "Ceza İhbarnameleri", description: "Vergi ziyaı ile usulsüzlük cezası içeren ihbarnamelerde uzlaşma ya da dava seçenekleri." },
      { title: "Ödeme Emri Uyuşmazlıkları", description: "6183 s.K. m.58 kapsamındaki ödeme emrine 15 gün içinde dava." },
      { title: "Üretim İşletmeleri", description: "İMES ve Dudullu OSB'deki şirketlerin KDV ve kurumlar vergisi yönünden incelenmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi inceleme tutanakları ve raporlarına karşı savunmanın hazırlanması",
      "Vergi ve ceza ihbarnamesine karşı vergi mahkemesinde 30 günlük sürede iptal davası",
      "Ümraniye Vergi Dairesi nezdinde uzlaşma görüşmelerinde temsil",
      "6183 sayılı Kanun m.58 uyarınca ödeme emrine karşı 15 gün içinde dava",
      "İMES Sanayi Sitesi ve Dudullu OSB'deki üretim işletmelerine inceleme süresince hukuki destek",
      "Kira gelirinin beyan dışı kalmasından doğan tarhiyat ve cezalara itiraz",
    ],
    localParagraphs: [
      "Ümraniye'de yerleşik mükelleflerin vergi işlemleri Yamanevler Mahallesi Dr. Fazıl Küçük Caddesi'nde bulunan Ümraniye Vergi Dairesi Müdürlüğü'nce yürütülür. İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi'ndeki imalat şirketlerinde hammadde alımları, stok hareketleri ve faturaların gerçekliği vergi incelemelerinde ele alınabilecek konulardır.",
      "İnceleme sonucunda düzenlenen vergi ve ceza ihbarnamesi için İYUK m.7 uyarınca dava süresi 30 gündür ve bu süre tebliğle başlar; davaya İstanbul vergi mahkemelerinde bakılır, aynı dönemde uzlaşma talep edilmesi de mümkündür. Vadesinde ödenmeyen kamu alacakları için gönderilen ödeme emrine karşı ise 6183 sayılı Kanun m.58 gereği 15 günlük dava süresi işler.",
    ],
    faqs: [
      { question: "Ümraniye Vergi Dairesi nerede ve hangi mükelleflere bakar?", answer: "Ümraniye Vergi Dairesi Müdürlüğü, Yamanevler Mahallesi'nde Dr. Fazıl Küçük Caddesi üzerindedir ve kendisine kayıtlı mükelleflerin işlemlerini yürütür. Tarhiyat, ceza ihbarnamesi ve ödeme emri gibi tebligatlar bu müdürlükten gelir. Tebligatı düzenleyen dairenin adı ve tebliğ tarihi, dava ve uzlaşma süreleri için ilk kontrol edilmesi gereken bilgilerdir." },
      { question: "Dudullu OSB'deki bir şirkete vergi inceleme raporu sonrası ihbarname gelirse ne yapılmalı?", answer: "İhbarnamenin tebliğini izleyen 30 gün içinde vergi mahkemesine başvurulabilir; şartları varsa uzlaşma yolu da değerlendirilebilir. İYUK m.7'deki bu süre içinde yol seçimi yapılmalıdır. Önce inceleme raporu, tutanaklar ve şirketin muhasebe kayıtları karşılaştırılarak tespitlerin hangi yönden tartışmalı olduğu belirlenir." },
      { question: "Ümraniye'deki vergi uyuşmazlıkları hangi mahkemede görülür?", answer: "Görevli yargı yeri İstanbul vergi mahkemeleridir. Tarhiyat, vergi cezası ve ödeme emrine yönelik iptal davaları bu mahkemelerin görev alanındadır. Dava dilekçesine ihbarname, inceleme raporu ve tebliğ belgesi eklenir; ödeme emrine karşı dava süresinin 15 gün, ihbarnameye karşı 30 gün olduğu ayrıca gözetilir." },
      { question: "Ümraniye Vergi Dairesi'nden gelen ödeme emrine karşı süre nedir?", answer: "Bu tür bir ödeme emri için vergi mahkemesinde 15 gün içinde dava açılmalıdır. 6183 sayılı Kanun m.58 çerçevesinde borçlu olunmadığı, borcun bir bölümünün kapatıldığı ya da zamanaşımının gerçekleştiği bu sürede ileri sürülebilir. Süre ihbarname davasındaki 30 günden kısa olduğundan tebliğ tarihi gecikmeden kayda alınmalıdır." },
      { question: "Kira geliri olan Ümraniye sakinleri hangi vergi riskleriyle karşılaşabilir?", answer: "Beyan dışı kalan kira geliri, re'sen veya ikmalen tarh edilecek verginin ve buna bağlı vergi ziyaı cezasının konusu olabilir. Tespitlerde kira ödemelerine ait banka kayıtları ve kira sözleşmeleri kullanılabilir. İhbarnameye karşı 30 günlük süre içinde dava açılabilir; uzlaşma yolu da ayrıca değerlendirilerek vergi ve ceza tutarı idareyle görüşülebilir." },
    ],
    howToTitle: "Ümraniye'de Vergi Tarhiyatına Karşı Hangi Adımlar İzlenir?",
    howToSteps: [
      { name: "Tebligatın Kontrolü", text: "İhbarname veya ödeme emrinin türü, düzenleyen daire ve tebliğ tarihi belirlenir." },
      { name: "Rapor ve Kayıt Analizi", text: "İnceleme raporu ile defter, fatura ve banka kayıtları karşılaştırılır." },
      { name: "Yolun Belirlenmesi", text: "Uzlaşma talep edilip edilmeyeceği ya da doğrudan vergi mahkemesine gidileceği kararlaştırılır." },
      { name: "Dava Takibi", text: "İstanbul vergi mahkemesindeki yargılama ve kanun yolu aşamaları izlenir." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: ["vergi-ihbarnamesine-itiraz-ve-uzlasma"],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "umraniye-borclar-hukuku-avukati",
    name: "Ümraniye Borçlar Hukuku Avukatı",
    heroTitle: "Ümraniye Borçlar Hukuku Avukatı",
    heroSubtitle:
      "İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi'ndeki imalatçı ve tedarikçi işletmeler arasındaki sözleşme ve alacak uyuşmazlıklarında İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan (MEF Üniversitesi Hukuk Fakültesi, 2019) Ümraniye'deki müvekkillerini temsil eder; davalar Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür.",
    metaTitle: "Ümraniye Borçlar Hukuku Avukatı",
    metaDescription:
      "Ümraniye'de ticari sözleşmeler, sanayi sitesi işletmeleri arası alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Sözleşme ve alacak kaynaklı uyuşmazlıklarda Ümraniye'deki müvekkillerine danışmanlık veren Furkan Arıkan, İstanbul Barosu'na kayıtlı (sicil no: 72621) ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunu bir avukattır.",
    highlightCards: [
      { title: "Tedarik Sözleşmeleri", description: "İmalat ve lojistik işletmeleri arası sözleşmelerden doğan uyuşmazlıklar." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Kira/İşyeri Sözleşmeleri", description: "Sanayi sitesi ve cadde üzeri işyeri kiralamalarından doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İmalat ve tedarik işletmeleri arası hizmet ve satış sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Sanayi sitesi ve cadde üzeri işyeri kiralamalarından doğan sözleşme uyuşmazlıkları",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi'ndeki imalatçı ve tedarikçi işletmeler arasında akdedilen hizmet ve satış sözleşmelerinden doğan ifa ve alacak uyuşmazlıkları, Ümraniye'de borçlar hukuku kapsamında sık karşılaşılan dava türlerindendir.",
      "Bu davalar, Ümraniye'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması dava şartıdır.",
    ],
    faqs: [
      { question: "Sözleşmeyi ihlal eden taraftan ne talep edilebilir?", answer: "Sözleşmeden dönme, ifa veya tazminat gibi hukuki yollara başvurulabilir. Hangi talebin ileri sürüleceği sözleşme hükümlerine, ihlalin niteliğine ve borçlunun temerrüt durumuna göre belirlenir; imalatçı ve tedarikçi işletmeler arasındaki hizmet ve satış sözleşmelerinde sözleşme ve ihtar belgeleri bu nedenle önce incelenmelidir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür. Ümraniye'nin kendi adliyesi bulunmadığından bu davalar anılan adliyede açılır; konusu para olan ticari alacak davalarında dava açılmadan önce arabulucuya başvurmak dava şartıdır ve bu sürecin tamamlanması gerekir." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Konusu para olan ticari davalarda 6102 sayılı Kanun m.5/A uyarınca arabulucuya başvurmak dava şartıdır; dava şartı olmayan uyuşmazlıklarda ise taraflar isterlerse arabuluculuğa yine de başvurabilir." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir. TBK m.146 uyarınca genel zamanaşımı süresi on yıldır; kira gibi bazı alacaklarda bu süre TBK m.147 gereği beş yıldır. Süre, alacağın muaccel olduğu andan itibaren işlemeye başlar." },
      { question: "Sanayi sitesindeki bir işyeri kira sözleşmesinin erken feshinde ne olur?", answer: "Sözleşme hükümleri ve kanuni düzenlemeler çerçevesinde tazminat yükümlülüğü doğabilir. Sözleşmenin feshinden doğan tazminat talepleri, fesih nedenine ve sözleşmede öngörülen şartlara göre değerlendirilir; yazılı ve eksiksiz bir kira sözleşmesi uyuşmazlık hâlinde ispat kolaylığı sağlar, bu nedenle sözleşme hükümleri ayrıca incelenmelidir." },
    ],
    howToTitle: "Ümraniye'de Alacak Davası Süreci Nasıl İşler?",
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

export const umraniyeServices: PseoService[] = [...umraniyeBaseServices, umraniyeMiras];
