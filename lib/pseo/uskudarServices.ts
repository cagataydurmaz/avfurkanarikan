import type { PseoService } from "./types";
import { uskudarMiras } from "./miras/uskudarMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const uskudarBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "uskudar-avukat",
    name: "Üsküdar Avukat",
    heroTitle: "Üsküdar Avukat",
    heroSubtitle:
      "Boğaziçi'nin Anadolu yakasında, Mimar Sinan imzalı tarihi camileri, Kız Kulesi ve sahil hattındaki yalılarıyla tanınan Üsküdar'da avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti vermektedir; ilçedeki dava ve icra dosyaları İstanbul Anadolu Adliyesi bünyesinde yürütülmektedir.",
    metaTitle: "Üsküdar Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Üsküdar'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş bir avukattır. Anadolu yakasının en köklü yerleşim merkezlerinden biri olan, 33 mahallesiyle yoğun nüfuslu ve tarihi dokusu güçlü Üsküdar'da ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Sahil semtlerindeki tarihi yapı ve tapu uyuşmazlıklarının takibi." },
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
      "Sahil semtlerindeki tarihi yapı, tapu ve imar uyuşmazlıklarında gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "Anadolu yakasının en eski yerleşim merkezlerinden olan Üsküdar; Mimar Sinan'ın eseri Mihrimah Sultan ve Şemsi Paşa camileri, Kız Kulesi ve Kuzguncuk ile Beylerbeyi'nin sahil hattındaki tarihi yalılarıyla İstanbul'un kültürel simgeleri arasında yer alır. Marmaray ile M5 metrosunun kesiştiği yoğun ulaşım ağı ve Altunizade'deki üniversite kampüsü ile ofis yoğunluğu, ilçenin merkezi konumunu pekiştirmektedir.",
      "2013 yılında İstanbul Anadolu Adalet Sarayı'nın hizmete girmesiyle ilçenin ayrı adliyesi kapatılmış, dava ve icra dosyaları Kartal'daki İstanbul Anadolu Adliyesi'ne bağlanmıştır; vergisel işlemler ise hizmet binası Ümraniye'de bulunan Üsküdar Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Üsküdar'daki davalara hangi adliye bakıyor?", answer: "Üsküdar'ın ayrı bir adliyesi bulunmamaktadır; 2013'te İstanbul Anadolu Adalet Sarayı'nın açılmasıyla ilçedeki dava ve icra dosyaları Kartal'daki İstanbul Anadolu Adliyesi'ne bağlanmıştır. Vergisel işlemler ise hizmet binası Ümraniye'de bulunan Üsküdar Vergi Dairesi Müdürlüğü nezdinde yürütülür; bu iki işlem alanı birbirinden ayrıdır." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir. Konu kısaca aktarıldıktan sonra danışmanlık görüşmesinde dosyanın hukuki durumu ele alınır; temsile karar verilirse vekaletname düzenlenir, evraklar bir araya getirilir ve mahkeme ile idari kurumlar önündeki takip müvekkile bilgi verilerek sürdürülür." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır. Sahil semtlerindeki tarihi yapılara ilişkin tapu, imar ve koruma kurulu işlemleri, Altunizade çevresindeki ticari kira ve işçilik uyuşmazlıkları ile alacak takipleri başlıca çalışma konuları arasında yer alır." },
      { question: "Büro Üsküdar'da mı bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Üsküdar'daki müvekkillere de aynı kapsamda hizmet verilir. Görüşmeler yüz yüze veya çevrim içi planlanabilir; Üsküdar'daki dosyalar ise Kartal'daki İstanbul Anadolu Adliyesi'nde görüldüğü için dosya takibi bu adliye esas alınarak yürütülür ve gelişmeler müvekkille paylaşılır." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Ücret dosyanın niteliğine göre değişir ve randevu sırasında bilgi verilir. Danışmanlık görüşmesi ücretlidir; davanın türü, aşama sayısı ve gerekecek hazırlık çalışması ücretin belirlenmesinde dikkate alınan başlıca unsurlardır. Temsile karar verilirse kapsam vekaletname düzenlenirken yazılı olarak netleştirilir." },
      { question: "Sahil semtlerindeki tarihi bir yalının alım satımında hukuki destek alınabilir mi?", answer: "Evet, tapu incelemesi, sözleşme hazırlığı ve koruma kurulu/imar durumu değerlendirmesi konusunda danışmanlık sağlanır. Kuzguncuk, Beylerbeyi ve Çengelköy gibi sahil semtlerindeki tarihi yalıların önemli bir kısmı sit alanı statüsü taşıdığından alım-satım öncesinde koruma kurulu izinlerinin ve tapu kaydının ayrıca incelenmesi önem taşır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir. İlk iletişim WhatsApp ya da telefonla kurulur; görüşmede konunun özeti alınır, dosyanın hukuki durumu değerlendirilir ve hangi belgelerin hazırlanması gerektiği konusunda bilgi verilir. Temsile karar verilirse vekaletname düzenlenerek takip başlatılır." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi gerekir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; müdafi şüpheliye eşlik edebilir, soruşturma dosyasını inceleyebilir ve tutukluluk kararlarına karşı itiraz hazırlayabilir. Tutuklamaya itiraz süresi yedi gündür." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır. Mahkeme ve idari kurumlar önünde temsil sağlanırken dosyadaki duruşma, tebligat ve karar gibi gelişmeler müvekkile iletilir; ilk iletişim WhatsApp veya telefonla kurulabilir ve takip sürecinde bilgi alma talepleri de aynı kanallardan iletilebilir." },
      { question: "İstanbul Anadolu Adliyesi'ne Üsküdar'dan ulaşım nasıl?", answer: "Üsküdar Meydanı'ndan M5 metrosu ile Ümraniye'ye, oradan Kartal yönüne aktarma yapılarak ya da Marmaray ve bağlantılı hatlarla ulaşılabilir. Üsküdar'ın 2013'te kapatılan kendi adliyesinin ardından ilçedeki dava ve icra dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görüldüğü için duruşma günlerinde bu güzergahlar kullanılır." },
    ],
    howToTitle: "Üsküdar'da Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Üsküdar Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "uskudar-bosanma-avukati",
    name: "Üsküdar Boşanma Avukatı",
    heroTitle: "Üsküdar Boşanma Avukatı",
    heroSubtitle:
      "Aile hukuku alanındaki danışmanlık ve dava süreçleri, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan avukat Furkan Arıkan tarafından yürütülmektedir; anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal paylaşımı taleplerine ilişkin davalara İstanbul Anadolu Adliyesi'ndeki aile mahkemelerinde bakılmaktadır.",
    metaTitle: "Üsküdar Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Üsküdar'da anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Aile hukuku alanındaki danışmanlık ve dava süreçleri, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan avukat Furkan Arıkan tarafından yürütülmektedir. Üsküdar'daki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlar.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Mal Rejimi Tasfiyesi", description: "Sahil semtlerindeki yalı ve dairelerin değerlemeyle paylaşımı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Sahil semtlerindeki yalı ve konutların da dahil olduğu mal rejimi tasfiyesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Yoğun nüfuslu ve farklı sosyoekonomik katmanları bir arada barındıran Üsküdar'da, Kuzguncuk ve Beylerbeyi'nin sahil hattındaki yalı ve villalarından Bulgurlu ile Acıbadem çevresindeki apartman dairelerine uzanan geniş bir taşınmaz yelpazesi, boşanma davalarındaki mal rejimi tasfiyelerini karmaşıklaştırabilmektedir.",
      "Boşanma, velayet ve nafaka talepleri İstanbul Anadolu Adliyesi'ndeki aile mahkemelerinde görülür; anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise ileri sürülen delillerin gücü sonucu belirlemektedir.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "İstanbul Anadolu Adliyesi'ndeki aile mahkemesine başvurulur; Üsküdar'ın ayrı bir adliyesi bulunmamaktadır. Boşanma, velayet ve nafaka talepleri bu adliyedeki aile mahkemelerinde görülür; yetki TMK m.168 uyarınca belirlenir ve anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin gücü sonucu belirler." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Belirli bir olgunluğa ulaşmışsa çocuğun görüşü dikkate alınabilir. Velayetin düzenlenmesinde esas olan çocuğun yararıdır; hakim, ana ve babanın koşullarını, çocuğun ihtiyaçlarını ve çocukla kişisel ilişki düzenini birlikte değerlendirir. Çocuğun görüşü bu değerlendirmede bir unsur olup tek başına belirleyici değildir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir. Çocuğun giderleri, tarafların yaşam koşulları ve ödeme gücü de dikkate alınır; nafaka dava sürerken tedbir nafakası, boşanma sonrasında iştirak veya yoksulluk nafakası olarak istenebilir ve sonradan artırılması, azaltılması ya da kaldırılması için ayrıca dava açılabilir." },
      { question: "Sahil semtindeki bir yalı mal paylaşımını nasıl etkiler?", answer: "Taşınmazın niteliği, tapu kaydı ve varsa sit alanı statüsü değerleme sürecinde ayrıca dikkate alınır. Kuzguncuk ve Beylerbeyi'ndeki yalı ve villalardan Bulgurlu ile Acıbadem çevresindeki apartman dairelerine uzanan taşınmaz yelpazesi mal rejimi tasfiyesini karmaşıklaştırabilir; edinilmiş mallara katılma rejiminde tasfiye taşınmazların değerine göre yapılır." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir. Eşlerin barışması hâlinde dava dosyası kapanır ve evlilik birliği devam eder; ancak dava sürerken verilmiş tedbir kararlarının akıbeti ile yargılama giderleri konusunda mahkemeden gelen kararların ayrıca değerlendirilmesi gerekir ve bu konuda mahkeme kararı esas alınır." },
    ],
    howToTitle: "Üsküdar'da Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "İhtiyaç Analizi", text: "Velayet, nafaka ve mal rejimi talepleri belirlenir." },
      { name: "Dilekçe Hazırlığı", text: "Duruma uygun dava dilekçesi veya protokol yazılır." },
      { name: "Dava Açılışı", text: "Yetkili aile mahkemesine başvurulur." },
      { name: "Sonuç", text: "Duruşma sonrası karar açıklanır." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanmada-nafaka-turleri"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "uskudar-ceza-avukati",
    name: "Üsküdar Ceza Avukatı",
    heroTitle: "Üsküdar Ceza Avukatı",
    heroSubtitle:
      "MEF Üniversitesi Hukuk Fakültesi 2019 mezunu ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında Üsküdar'daki şüpheli ve sanıklara müdafilik hizmeti sunar; dosyalar İstanbul Anadolu Adliyesi'nde görülmektedir.",
    metaTitle: "Üsküdar Ceza Avukatı | Müdafilik",
    metaDescription:
      "Üsküdar'da soruşturma, kovuşturma, tutukluluğa itiraz ve ceza yargılamasının her aşamasında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında Üsküdar'daki müvekkillerine müdafilik yapar.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Kanun Yolu Süreçleri", description: "İstinaf ve temyiz aşamalarında temsil." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "İstinaf ve temyiz aşamalarında dosyanın takibi",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "İstanbul'un en kalabalık ilçelerinden biri olan ve Marmaray ile M5 metrosunun kesiştiği yoğun bir ulaşım ağına sahip Üsküdar'da, nüfus yoğunluğuna paralel olarak ceza yargılamasına konu olan uyuşmazlıklar da geniş bir çeşitlilik göstermektedir.",
      "Soruşturma ve kovuşturma dosyaları İstanbul Anadolu Adliyesi'nde görülür; Üsküdar'ın 2013'te kapatılan kendi adliyesinin ardından bu adliyenin cumhuriyet başsavcılığı ve ceza daireleri ilçeye hizmet vermektedir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar.",
    ],
    faqs: [
      { question: "Üsküdar'da bir ceza davası hangi adliyede görülür?", answer: "İstanbul Anadolu Adliyesi'nde görülür; Üsküdar'ın kendi adliyesi 2013'te kapatılmıştır. Bu adliyenin cumhuriyet başsavcılığı ve ceza daireleri ilçeye hizmet verir; soruşturma ve kovuşturma dosyaları burada yürütülür ve gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir, ancak şüpheli müdafi yardımından yararlanma hakkına sahiptir ve müdafi bulundurulması önerilir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; ifade vermeden önce soruşturma dosyasının incelenmesi savunmanın hazırlanması açısından önem taşır ve ifadenin içeriği dosyanın seyrini etkileyebilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, karara karşı tebliğden itibaren 15 gün içinde sulh ceza hakimliğine itiraz edilebilir. Savcılığın verdiği kovuşturmaya yer olmadığı kararı bu yolla denetlettirilebilir; itiraz dilekçesinin süresinde hazırlanabilmesi için karar metninin ve soruşturma dosyasının vakit kaybetmeden incelenmesi gerekir." },
      { question: "Tutuklama kararına nasıl itiraz edilir?", answer: "Kararın tebliğinden itibaren yetkili sulh ceza hakimliğine itiraz dilekçesi sunulabilir. Tutuklamaya itiraz süresi yedi gündür; süre kısa olduğundan karar sonrası vakit kaybetmeden dilekçe hazırlanmalı, tutuklama ve adli kontrol kararlarına karşı itiraz müdafi aracılığıyla yapılabilir ve dilekçede karara karşı gerekçeler açıklanır." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Yargılamaya kaldığı yerden devam edilir. Uzlaşma yalnızca kanunda uzlaşmaya tabi olarak sayılan suçlarda söz konusudur; taraflar anlaşamazsa soruşturma veya kovuşturma süreci sürer, uzlaşma sağlanırsa ise ceza kovuşturması sona erebilir. Süreç sanık veya mağdur vekili aracılığıyla takip edilebilir." },
    ],
    howToTitle: "Üsküdar'da Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "uskudar-gayrimenkul-avukati",
    name: "Üsküdar Gayrimenkul Avukatı",
    heroTitle: "Üsküdar Gayrimenkul Avukatı",
    heroSubtitle:
      "Gayrimenkul hukuku alanında Üsküdar'daki müvekkillerine danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve MEF Üniversitesi Hukuk Fakültesi'nin 2019 mezunudur; sahil semtlerindeki tarihi yapı, tapu ve imar uyuşmazlıklarında dava süreci İstanbul Anadolu Adliyesi bünyesinde yürütülür.",
    metaTitle: "Üsküdar Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Üsküdar'da tarihi yalı ve konutlara ilişkin tapu, imar ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Gayrimenkul hukuku alanında Üsküdar'daki müvekkillerine danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019 mezunu olduğu MEF Üniversitesi Hukuk Fakültesi'nde hukuk eğitimini tamamlamıştır.",
    highlightCards: [
      { title: "Tarihi Yapı ve Sit Alanı", description: "Kuzguncuk, Beylerbeyi ve Çengelköy'deki yalı ve ahşap konutlara ilişkin koruma kurulu süreçleri." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Ticari Gayrimenkul", description: "Altunizade çevresindeki ofis ve plaza kiralama/alım süreçleri." },
      { title: "Kira Bedeli Uyuşmazlıkları", description: "Rayiç bedel tespiti ve uyarlama davaları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sahil semtlerindeki tarihi yalı ve konutların alım-satımında tapu ve imar durumu incelemesi",
      "Koruma kurulu izin süreçleri ve tadilat/restorasyon sözleşmelerinin hazırlanması",
      "Altunizade çevresindeki ticari gayrimenkul kiralama ve satış sözleşmelerinin incelenmesi",
      "Tapu iptali ve tescil davalarının açılması",
      "Ortaklığın giderilmesi (izale-i şüyu) davalarının takibi",
      "Kira bedeli tespiti ve uyarlama davaları",
    ],
    localParagraphs: [
      "Kuzguncuk, Beylerbeyi ve Çengelköy gibi sahil semtlerindeki tarihi yalı ve ahşap konutların önemli bir kısmı sit alanı statüsü taşıdığından, bu bölgelerdeki alım-satım ve tadilat işlemlerinde koruma kurulu izinleri ayrı bir önem kazanmaktadır; Altunizade çevresindeki plaza ve ofis yoğunluğu ise ticari gayrimenkul işlemlerini gündeme getirmektedir.",
      "Tapu ve imar uyuşmazlıkları, niteliğine göre sulh hukuk ya da asliye hukuk mahkemesinde, İstanbul Anadolu Adliyesi bünyesinde görülmektedir.",
    ],
    faqs: [
      { question: "Sahil semtindeki tarihi bir yalı satın alırken nelere dikkat edilmeli?", answer: "Tapu kaydı, imar durumu, sit alanı statüsü ve varsa koruma kurulu şartları detaylı incelenmelidir. Kuzguncuk, Beylerbeyi ve Çengelköy'deki tarihi yalı ve ahşap konutların önemli bir kısmı sit alanı statüsü taşıdığından alım-satım ve tadilat işlemlerinde koruma kurulu izinleri ayrı bir önem kazanır ve satın alma öncesinde doğrulanmalıdır." },
      { question: "Üsküdar'da gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Anadolu Adliyesi bünyesinde görülür. Tapu iptali ve tescil, ortaklığın giderilmesi ve imar kaynaklı uyuşmazlıklar bu adliyedeki ilgili hukuk mahkemelerinde açılır; dava türüne göre görevli mahkeme değişebilir ve dava dilekçesi buna göre hazırlanır." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir. Dava, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde görülür; talebin dayanağı olan hukuki sebep ile tescilin hangi gerekçeyle hukuka aykırı olduğu dilekçede açıkça belirtilmeli ve tapu kaydına ilişkin belgeler sunulmalıdır." },
      { question: "Sit alanındaki bir taşınmazda tadilat için hangi izinler gerekir?", answer: "İlgili koruma kurulundan onay alınması gerekir; onaysız yapılan müdahaleler idari ve cezai yaptırımlara yol açabilir. Sit alanı statüsü taşıyan yalı ve ahşap konutlarda tadilat ve restorasyon sözleşmelerinin hazırlanması sırasında koruma kurulu izin süreçleri de dikkate alınmalıdır ve izin kararlarına karşı idari dava yolu açıktır." },
      { question: "Ortaklığın giderilmesi davası ne zaman açılır?", answer: "Paydaşlar arasında taşınmazın kullanımı veya satışı konusunda anlaşma sağlanamadığında açılabilir. Paydaşlardan biri sulh hukuk mahkemesinde ortaklığın giderilmesi davası açarak satış veya aynen taksim talep edebilir; taşınmaz bölünemiyorsa satış yoluyla ortaklık giderilir ve bedel paydaşlar arasında payları oranında paylaştırılır." },
    ],
    howToTitle: "Üsküdar'da Tapu Uyuşmazlığı Süreci Nasıl İşler?",
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
    urlSlug: "uskudar-icra-avukati",
    name: "Üsküdar İcra Avukatı",
    heroTitle: "Üsküdar İcra Avukatı",
    heroSubtitle:
      "İstanbul Barosu sicil no 72621 ile kayıtlı avukat Furkan Arıkan (MEF Üniversitesi Hukuk Fakültesi, 2019), icra ve iflas hukuku kapsamında Üsküdar'daki alacaklı ve borçlu taraflara temsil sağlamaktadır; icra takipleri İstanbul Anadolu Adliyesi'ndeki icra daireleri üzerinden yürütülür.",
    metaTitle: "Üsküdar İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Üsküdar'da icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İstanbul Barosu sicil no 72621 ile kayıtlı avukat Furkan Arıkan (MEF Üniversitesi Hukuk Fakültesi, 2019), icra ve iflas hukuku kapsamında Üsküdar'daki alacaklı ve borçlu taraflara danışmanlık verir.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "Ticari Alacaklar", description: "Altunizade çevresindeki işletmelerden doğan alacakların takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "Ticari işletmelerden doğan alacakların takibi",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Ticari faaliyetin yoğunlaştığı Altunizade ile yerleşik nüfusun yüksek olduğu Bulgurlu ve Acıbadem gibi mahalleleri bir arada barındıran Üsküdar'da, hem ticari hem de bireysel alacaklara ilişkin icra takipleri sık başvurulan bir hukuki yol olarak öne çıkmaktadır.",
      "İlçede yerleşik borçlulara yönelik takipler İstanbul Anadolu Adliyesi'ndeki icra daireleri üzerinden yürütülür; ödeme emrine itiraz süresi tebliğden itibaren 7 gündür.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "Sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlanabilir. Belgeye dayanan alacaklarda ilamsız takip, mahkeme ilamı bulunan alacaklarda ilamlı takip yapılır; takibin başlatılmasının ardından borçluya ödeme emri tebliğ edilir ve borçlunun yedi gün içinde itiraz hakkı doğar." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Ödeme emrine itiraz süresi, tebliğden itibaren 7 gündür. İİK m.62 uyarınca bu süre içinde itiraz edilmezse takip kesinleşir; itiraz edilirse takip durur ve alacaklı itirazın iptali veya kaldırılması yoluna gidebilir. Bu nedenle tebliğ tarihinin doğru belirlenmesi ve itirazın zamanında yapılması önem taşır." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir. Haciz, takibin kesinleşmesinin ardından borçlunun malvarlığı üzerinde uygulanır; kanunen haczedilemeyen mallar ise haciz kapsamı dışındadır ve haczedilemezlik iddiası icra mahkemesinde şikayet yoluyla ileri sürülebilir. Bu başvuru icra dairesinin işlemine karşı yapılır." },
      { question: "Üsküdar'daki icra takipleri hangi icra dairesinde yürütülür?", answer: "İstanbul Anadolu Adliyesi bünyesindeki icra dairelerinde yürütülür. Üsküdar'ın kendi adliyesi 2013'te kapatıldığı için ilçede yerleşik borçlulara yönelik takipler bu adliyedeki icra daireleri üzerinden işlem görür; icra mahkemesine yapılacak şikayet başvuruları da aynı adliyede incelenir ve ödeme emrine itiraz süresi yedi gündür." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür. Borçlu itiraz etmemişse takip kesinleşir, taşınır ve taşınmaz mallar üzerinde haciz uygulanır ve haczedilen mallar satışa çıkarılarak elde edilen bedelle alacaklının talebi karşılanır. Borçlu itiraz etmişse alacaklı önce itirazın iptali veya kaldırılması yoluna gider." },
    ],
    howToTitle: "Üsküdar'da İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "uskudar-idare-avukati",
    name: "Üsküdar İdare Avukatı",
    heroTitle: "Üsküdar İdare Avukatı",
    heroSubtitle:
      "2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan Furkan Arıkan, İstanbul Barosu'nun 72621 sicil numaralı avukatı olarak idari işlemlerin iptali ve tam yargı davalarında Üsküdar'daki müvekkillerine danışmanlık vermektedir; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Üsküdar İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Üsküdar'da idari işlemlerin iptali, koruma kurulu kararlarına itiraz ve tazminat davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan Furkan Arıkan, İstanbul Barosu'nun 72621 sicil numaralı avukatı olarak idari işlemlerin iptali ve tam yargı davalarında Üsküdar'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Koruma Kurulu Kararları", description: "Sit alanı ve tarihi yapılara ilişkin idari işlemlere itiraz." },
      { title: "Belediye İşlemleri", description: "Ruhsat ve imar uygulamalarına karşı dava süreçleri." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Koruma kurulu kararlarına karşı idari dava süreçleri",
      "Belediye imar planı kararlarına karşı iptal davası açılması",
      "Belediye ruhsat işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Sahil şeridindeki yoğun tarihi doku nedeniyle sıkça gündeme gelen koruma kurulu kararları ile belediye imar uygulamaları, Üsküdar'da idari uyuşmazlıkların önemli bir bölümünü oluşturmaktadır.",
      "Bu davalara İstanbul idare mahkemelerinde bakılır; işlemin tebliğ veya ilanından itibaren dava açma süresi genel kural olarak 60 gündür.",
    ],
    faqs: [
      { question: "Koruma kurulu kararına karşı hangi sürede dava açılmalı?", answer: "Tebliğ veya öğrenme tarihinden itibaren 60 gün içinde idare mahkemesinde dava açılabilir. İYUK m.7 uyarınca belirlenen bu süre geçirildiğinde dava hakkı düşer; sahil şeridindeki tarihi dokuya ilişkin koruma kurulu kararlarında karar metni ve tebliğ tarihi dilekçe hazırlığı için vakit kaybetmeden temin edilmelidir." },
      { question: "Belediye imar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İlan tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılmalıdır. İYUK m.7 uyarınca idare mahkemelerinde dava açma süresi, işlemin tebliğ veya ilanından itibaren genel kural olarak 60 gündür; bu süre geçirilirse dava hakkı düşer ve yürütmenin durdurulması da dilekçeyle talep edilebilir." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde dava açılabilir. Belediye ruhsat işlemlerine itiraz uyuşmazlıkları idare hukuku kapsamındadır; ret işleminin yazılı bildiriminden itibaren İYUK m.7 uyarınca altmış gün içinde iptal davası açılması gerekir ve yürütmenin durdurulması talebi de dilekçeye eklenebilir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, yasal süresinde idare mahkemesinde dava açılabilir. Cezayı veren kanunun öngördüğü yargı yolu ve süre ayrıca incelenmelidir; genel kural olarak idari işlemlere karşı iptal davası, İYUK m.7 uyarınca yazılı bildirimden itibaren altmış gün içinde açılır ve cezanın dayanağı olan işlem dilekçede açıkça belirtilir." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "Tam yargı davası yoluyla zararın tazmini talep edilebilir. İdarenin işlem veya eyleminden doğan zararlarda dava idare mahkemesinde açılır; zararın doğduğu eylemin niteliği, idarenin kusuru ile zararın miktarına ilişkin belgeler dava dilekçesinde ortaya konulmalı ve idari yargı süreleri dikkatle takip edilmelidir." },
    ],
    howToTitle: "Üsküdar'da İdari İptal Davası Nasıl Açılır?",
    howToSteps: [
      { name: "İnceleme", text: "İptali istenen işlem ve ilan/tebliğ tarihi belirlenir." },
      { name: "Süre Takibi", text: "60 günlük yasal süre hesaplanır." },
      { name: "Dilekçe Hazırlığı", text: "Talep ve gerekçeler dilekçeye işlenir." },
      { name: "Yargılama", text: "İdare mahkemesi dosyayı inceleyip karar verir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: ["idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "uskudar-is-hukuku-avukati",
    name: "Üsküdar İş Hukuku Avukatı",
    heroTitle: "Üsküdar İş Hukuku Avukatı",
    heroSubtitle:
      "Üsküdar'daki işçi ve işverenlere iş hukuku kapsamında danışmanlık veren avukat Furkan Arıkan'ın İstanbul Barosu sicil numarası 72621'dir; hukuk eğitimini 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nde tamamlamıştır. Arabuluculukta anlaşma sağlanamayan uyuşmazlıklarda dava süreci İstanbul Anadolu Adliyesi'ndeki iş mahkemesinde yürütülür.",
    metaTitle: "Üsküdar İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Üsküdar'da kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Üsküdar'daki işçi ve işverenlere iş hukuku kapsamında danışmanlık veren avukat Furkan Arıkan'ın İstanbul Barosu sicil numarası 72621'dir; hukuk eğitimini 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nde tamamlamıştır.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Kurumsal ve Sağlık Sektörü", description: "Altunizade'deki plaza, üniversite ve sağlık kuruluşu çalışanlarının hakları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Altunizade çevresindeki plaza, üniversite ve sağlık kuruluşu personelinin işçilik alacaklarının tahsili",
      "Hafta tatili ve yıllık izin ücreti gibi diğer işçilik alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Altunizade'deki üniversite kampüsü ve çok sayıda ofis/plaza binası ile sahil hattındaki otel, restoran ve kültür işletmelerini bir arada barındıran Üsküdar'da, beyaz yakalı çalışanlardan hizmet sektörü personeline uzanan geniş bir yelpazede işçilik alacağı uyuşmazlığıyla karşılaşılabilmektedir.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Anadolu Adliyesi'ndeki iş mahkemesinde görülür.",
    ],
    faqs: [
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Çalışma süresi ve son brüt (giydirilmiş) ücret esas alınarak hesaplanır. Hesaplamada işçinin aynı işyerindeki toplam çalışma süresi ve ücrete eklenen yan haklar dikkate alınır; kıdem ve ihbar tazminatı alacağında dava açılmadan önce zorunlu arabuluculuğa başvurulması gerekir ve fesih nedeni tazminata hak kazandırmalıdır." },
      { question: "Üsküdar'da iş mahkemesi nerededir?", answer: "İş mahkemesi İstanbul Anadolu Adliyesi bünyesindedir. Üsküdar'ın kendi adliyesi 2013'te kapatıldığından işe iade ve işçilik alacağı davaları, arabuluculukta anlaşma sağlanamazsa bu adliyedeki iş mahkemesinde görülür; işe iade için fesihten itibaren bir ay içinde arabulucuya başvurulması, son tutanaktan itibaren iki hafta içinde dava açılması gerekir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir. Süreç, fesihten itibaren bir ay içinde arabulucuya başvurmakla başlar; anlaşma sağlanamazsa son tutanaktan itibaren iki hafta içinde iş mahkemesinde dava açılır ve yargılamanın süresi mahkemenin iş yüküne göre farklılık gösterebilir." },
      { question: "Fazla mesai alacağı nasıl ispatlanır?", answer: "Bordro kayıtları, yazışmalar, tanık beyanı gibi delillerle ispat edilebilir. Fazla mesai alacağında çalışma saatlerini gösteren belgeler önem taşır; ücret bordroları, işyeri yazışmaları ve birlikte çalışılan kişilerin beyanları dava dilekçesine eklenir. Dava açmadan önce işçilik alacakları için arabuluculuğa başvurulması dava şartıdır." },
      { question: "İş kazası nedeniyle hangi taleplerde bulunulabilir?", answer: "Maddi ve manevi tazminat ile sosyal güvenlik kurumundan bağlanacak gelirler ayrıca değerlendirilir. İş kazasından doğan tazminat talepleri kusur ve zarar durumuna göre belirlenir; tedavi giderleri ve iş göremezlik gibi kalemler maddi tazminat kapsamında istenebilir ve dava İstanbul Anadolu Adliyesi'ndeki iş mahkemesinde açılır." },
    ],
    howToTitle: "Üsküdar'da İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "uskudar-kira-tahliye-avukati",
    name: "Üsküdar Kira ve Tahliye Avukatı",
    heroTitle: "Üsküdar Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Kira hukuku uyuşmazlıklarında Üsküdar'daki kiracı ve kiraya verenlere destek olan Furkan Arıkan, 2019 MEF Üniversitesi Hukuk Fakültesi mezunu olup İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır; tahliye ve bedel tespiti davaları İstanbul Anadolu Adliyesi'ndeki sulh hukuk mahkemesinde görülür.",
    metaTitle: "Üsküdar Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Üsküdar'da kiracı tahliyesi, kira sözleşmesi uyuşmazlıkları ve kira bedeli tespitinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kira hukuku uyuşmazlıklarında Üsküdar'daki kiracı ve kiraya verenlere destek olan Furkan Arıkan, 2019 MEF Üniversitesi Hukuk Fakültesi mezunu olup İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır.",
    highlightCards: [
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Ticari Kiralamalar", description: "Altunizade çevresindeki ofis ve işyeri kira uyuşmazlıkları." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Altunizade çevresindeki ofis ve işyeri kira sözleşmelerinin hazırlanması ve incelenmesi",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Marmaray ve M5 metrosunun kesişim noktası olması nedeniyle kiralık konut talebinin yüksek seyrettiği Üsküdar'da, özellikle Altunizade ve Bağlarbaşı çevresindeki dairelerde kira bedeli uyuşmazlıkları sık karşılaşılan bir konudur.",
      "Tahliye ve kira bedeli tespiti davalarına İstanbul Anadolu Adliyesi'ndeki sulh hukuk mahkemesinde bakılır; yazılı ve eksiksiz bir kira sözleşmesi uyuşmazlık halinde ispat kolaylığı sağlamaktadır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir. Kira ödenmezse TBK m.315 uyarınca konutta kiracıya yazılı ihtarla otuz gün süre verilir; bu sürede ödeme yapılmazsa sözleşme feshedilebilir ve tahliye davası ya da icra yoluyla tahliye istenebilir." },
      { question: "Üsküdar'da tahliye davası hangi mahkemede görülür?", answer: "İstanbul Anadolu Adliyesi bünyesindeki sulh hukuk mahkemesinde görülür. Üsküdar'ın kendi adliyesi 2013'te kapatıldığından tahliye ve kira bedeli tespiti davaları bu adliyede açılır; ihtiyaç, kira borcu veya taahhütnameye dayalı tahliye taleplerinin dava şartları ayrı ayrı incelenir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Kira bedelinin tespiti ve uyarlama davaları sulh hukuk mahkemesinde açılır; rayiç kira bedelinin belirlenmesinde kiralananın özellikleri ve bölgedeki benzer kira bedelleri değerlendirilir, artış ise konutlarda TBK m.344 sınırına tabidir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir. Taahhütnamenin geçerli sayılması için kira sözleşmesinden sonra, kiralananın teslimi sonrasında yazılı olarak düzenlenmiş olması gerekir; geçerliliği somut olayda incelenir ve uyuşmazlık hâlinde sulh hukuk mahkemesine başvurulabilir." },
      { question: "Ticari bir ofisin kira sözleşmesi konut kirasından farklı mı değerlendirilir?", answer: "Evet, tarafların tacir sıfatı ve sözleşme hükümleri işyeri kiralarında ayrıca değerlendirilir. Altunizade çevresindeki ofis ve işyeri kira sözleşmelerinin hazırlanması ve incelenmesi bu nedenle önem taşır; yazılı ve eksiksiz bir kira sözleşmesi uyuşmazlık hâlinde ispat kolaylığı sağlar, tahliye ve tespit davaları sulh hukuk mahkemesinde görülür." },
    ],
    howToTitle: "Üsküdar'da Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "uskudar-vergi-avukati",
    name: "Üsküdar Vergi Avukatı",
    heroTitle: "Üsküdar Vergi Avukatı",
    heroSubtitle:
      "İstanbul Barosu'na kayıtlı (sicil no: 72621) ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan Furkan Arıkan, vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Üsküdar'daki müvekkillerine danışmanlık sağlamaktadır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Üsküdar Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Üsküdar'da vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İstanbul Barosu'na kayıtlı (sicil no: 72621) ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan Furkan Arıkan, vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Üsküdar'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Kurumsal Mükellef Denetimi", description: "Altunizade çevresindeki plaza ve ofis merkezli işletmelere yönelik vergi incelemeleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Altunizade çevresindeki plaza ve ofis merkezli işletmelerde vergi incelemesi sürecinde danışmanlık",
      "Gayrimenkul kira gelirlerinin beyanına ilişkin uyuşmazlıklarda destek",
    ],
    localParagraphs: [
      "Üsküdar Vergi Dairesi Müdürlüğü'nün hizmet binası, Beykoz ve Ümraniye vergi daireleriyle birlikte fiziksel olarak Ümraniye'de yer almaktadır; buna karşın Üsküdar mükelleflerinin vergisel işlemleri bu müdürlük üzerinden yürütülmeye devam eder.",
      "Altunizade'deki plaza ve ofis yoğunluğu ile sahil hattındaki turizm ve kültür işletmeleri, incelemeye konu olabilecek ticari faaliyet çeşitliliğini artırmaktadır; ihbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "Üsküdar Vergi Dairesi nerede bulunuyor?", answer: "Üsküdar Vergi Dairesi Müdürlüğü'nün hizmet binası Ümraniye'dedir; Üsküdar mükellefleri işlemlerini bu müdürlük üzerinden yürütür. Müdürlük, Beykoz ve Ümraniye vergi daireleriyle birlikte fiziksel olarak Ümraniye'de yer alır; ihbarname ve ödeme emri gibi tebligatların hangi daireden geldiği süre hesabı için kontrol edilmelidir." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir. İYUK m.7 uyarınca vergi ve ceza ihbarnamesine karşı dava açma süresi 30 gündür; davalar İstanbul vergi mahkemelerinde görülür, uzlaşma talebi de aynı süre içinde yapılabilir ve tebliğ tarihinin doğru belirlenmesi süre hesabı için önemlidir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür. Vergi ve ceza ihbarnamesine, ödeme emrine ve vergi cezalarına karşı açılan iptal davaları bu mahkemelerde görülür; dava açma süresi tebliğden itibaren 30 gündür ve yürütmenin durdurulması talebi dava dilekçesinde ayrıca yapılabilir." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur. Uzlaşma talebi ihbarnamenin tebliğinden itibaren 30 gün içinde yapılır; görüşmede anlaşma sağlanamazsa dava süresi kaldığı yerden işlemeye devam eder ve vergi mahkemesinde dava açılabilir, bu yüzden uzlaşma ile dava süreleri birlikte izlenmelidir." },
      { question: "Kira geliri beyan edilmezse ne olur?", answer: "Re'sen veya ikmalen tarhiyat ve buna bağlı ceza uygulanabilir, bu işlemlere karşı dava açılabilir. Tarhiyat ve ceza ihbarnamesine karşı vergi mahkemesinde, tebliğden itibaren 30 gün içinde iptal davası açılması mümkündür; ayrıca uzlaşma başvurusu yapılarak ceza ve vergi miktarı idare ile görüşülebilir." },
    ],
    howToTitle: "Üsküdar'da Vergi İtirazı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "İnceleme", text: "Tarhiyat veya cezanın dayanağı ayrıntılı incelenir." },
      { name: "Yol Seçimi", text: "Uzlaşma mı yoksa doğrudan dava mı açılacağı kararlaştırılır." },
      { name: "Başvuru", text: "Süresi içinde vergi mahkemesine başvurulur veya uzlaşma istenir." },
      { name: "Sonuçlanma", text: "Mahkeme kararı veya uzlaşma tutanağıyla süreç biter." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: ["vergi-ihbarnamesine-itiraz-ve-uzlasma"],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "uskudar-borclar-hukuku-avukati",
    name: "Üsküdar Borçlar Hukuku Avukatı",
    heroTitle: "Üsküdar Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Borçlar hukuku kapsamındaki sözleşme ve alacak uyuşmazlıklarında Üsküdar'daki müvekkillerini temsil eden Furkan Arıkan, 72621 sicil numarasıyla İstanbul Barosu'na kayıtlıdır ve MEF Üniversitesi Hukuk Fakültesi'nin 2019 mezunudur; davalar İstanbul Anadolu Adliyesi bünyesinde görülmektedir.",
    metaTitle: "Üsküdar Borçlar Hukuku Avukatı | Alacak Davası",
    metaDescription:
      "Üsküdar'da sözleşme, restorasyon ve alacak uyuşmazlıkları ile tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Borçlar hukuku kapsamındaki sözleşme ve alacak uyuşmazlıklarında Üsküdar'daki müvekkillerini temsil eden Furkan Arıkan, 72621 sicil numarasıyla İstanbul Barosu'na kayıtlıdır ve MEF Üniversitesi Hukuk Fakültesi'nin 2019 mezunudur.",
    highlightCards: [
      { title: "Restorasyon Sözleşmeleri", description: "Tarihi yalı ve konut onarım işlerinden doğan uyuşmazlıklar." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Hizmet ve Kira Sözleşmeleri", description: "Altunizade çevresindeki ofis kiralama ve hizmet sözleşmesi uyuşmazlıkları." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sahil semtlerindeki tarihi yapıların restorasyon sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Altunizade çevresindeki ofis kiralama ve hizmet sözleşmelerinden doğan uyuşmazlıklar",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Kuzguncuk ve Beylerbeyi gibi sahil semtlerindeki tarihi yapıların restorasyonundan Altunizade'deki ofis kiralama ve hizmet sözleşmelerine uzanan geniş bir yelpazede sözleşme uyuşmazlığı Üsküdar'da görülebilmektedir.",
      "Bu tür alacak ve tazminat davaları İstanbul Anadolu Adliyesi bünyesinde görülür; bazı ticari nitelikteki alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması dava şartıdır.",
    ],
    faqs: [
      { question: "Restorasyon işini üstlenen firma işi eksik/hatalı bırakırsa ne yapılabilir?", answer: "Sözleşmeden dönme, tazminat veya ifa davası gibi hukuki yollara başvurulabilir. Hangi yolun izleneceği sözleşme hükümlerine, ayıplı ifanın niteliğine ve borçlunun temerrüdüne göre belirlenir; tarihi yapıların restorasyon sözleşmelerinde onarım kapsamı ve teslim koşullarına ilişkin belgeler dava öncesinde incelenmelidir." },
      { question: "Sit alanındaki bir yapının restorasyonunda özel bir sözleşme şartı gerekir mi?", answer: "Evet, koruma kurulu izinleri ve onarım kapsamının sözleşmede açıkça belirtilmesi önerilir. Kuzguncuk ve Beylerbeyi gibi sahil semtlerindeki tarihi yapıların restorasyonunda iş kapsamı, bedel ve teslim koşulları ile izin süreçlerinin sözleşmede yer alması ileride doğabilecek uyuşmazlıkları önlemek bakımından önem taşır." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, İstanbul Anadolu Adliyesi bünyesinde görülür. Bu tür alacak ve tazminat davaları anılan adliyede açılır; konusu para olan ticari alacak davalarında dava açılmadan önce arabulucuya başvurmak dava şartıdır ve bu sürecin tamamlanması gerekir." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Konusu para olan ticari davalarda 6102 sayılı Kanun m.5/A uyarınca arabulucuya başvurmak dava şartıdır; dava şartı olmayan uyuşmazlıklarda ise taraflar isterlerse arabuluculuğa yine de başvurabilir." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir. TBK m.146 uyarınca genel zamanaşımı süresi on yıldır; kira gibi bazı alacaklarda bu süre TBK m.147 gereği beş yıldır. Süre, alacağın muaccel olduğu andan itibaren işlemeye başlar." },
    ],
    howToTitle: "Üsküdar'da Alacak Davası Süreci Nasıl İşler?",
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

export const uskudarServices: PseoService[] = [...uskudarBaseServices, uskudarMiras];
