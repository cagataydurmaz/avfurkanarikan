import type { PseoService } from "./types";
import { zeytinburnuMiras } from "./miras/zeytinburnuMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const zeytinburnuBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "zeytinburnu-avukat",
    name: "Zeytinburnu Avukat",
    heroTitle: "Zeytinburnu Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, yüzyıllardır süregelen deri ve konfeksiyon ticaretiyle bilinen Kazlıçeşme'nin de içinde bulunduğu Zeytinburnu'nda ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Bakırköy Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Zeytinburnu Avukat | Hukuki Danışmanlık",
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
      { question: "Zeytinburnu'daki davalara hangi adliye bakıyor?", answer: "Zeytinburnu, İstanbul Bakırköy Adliyesi'nin yargı çevresinde yer almaktadır. İlçedeki hukuki uyuşmazlıklar bu adliyede görülür; hukuk, ceza ve icra dosyaları Bakırköy Adliyesi'nde takip edilir, vergisel işlemler ise Zeytinburnu Vergi Dairesi Müdürlüğü nezdinde ayrıca yürütülür ve süre hesabı için tebligat tarihi esas alınır." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir. Konu kısaca aktarıldıktan sonra danışmanlık görüşmesinde dosyanın hukuki durumu ele alınır; temsile karar verilirse vekaletname düzenlenir, evraklar bir araya getirilir ve mahkeme ile idari kurumlar önündeki takip müvekkile bilgi verilerek sürdürülür." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır. Kazlıçeşme'deki deri ve konfeksiyon ticaretine bağlı toptan satış alacakları, mağaza ve showroom kiraları, işçilik alacakları, ruhsat işlemleri ve KDV iadesi uyuşmazlıkları başlıca çalışma konuları arasında yer alır." },
      { question: "Büro Zeytinburnu'da mı bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Zeytinburnu'daki müvekkillere de aynı kapsamda hizmet verilir. Görüşmeler yüz yüze veya çevrim içi planlanabilir; Zeytinburnu'daki dosyalar ise İstanbul Bakırköy Adliyesi'nde görüldüğü için dosya takibi bu adliye esas alınarak yürütülür ve gelişmeler müvekkille paylaşılır." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Ücret dosyanın niteliğine göre değişir ve randevu sırasında bilgi verilir. Danışmanlık görüşmesi ücretlidir; davanın türü, aşama sayısı ve gerekecek hazırlık çalışması ücretin belirlenmesinde dikkate alınan başlıca unsurlardır. Temsile karar verilirse kapsam vekaletname düzenlenirken yazılı olarak netleştirilir." },
      { question: "Deri ve konfeksiyon firmaları arası uyuşmazlıklarda destek alınabilir mi?", answer: "Evet, toptan satış sözleşmeleri ve alacak uyuşmazlıklarında danışmanlık sağlanır. Kazlıçeşme çevresindeki toptancı-perakendeci ilişkilerinden doğan senet ve çek alacakları icra takibine, ödeme gecikmesi ve ayıplı mal iddiaları ise alacak veya sözleşme davalarına konu olur; sözleşme ve fatura belgeleri başta incelenir." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir. İlk iletişim WhatsApp ya da telefonla kurulur; görüşmede konunun özeti alınır, dosyanın hukuki durumu değerlendirilir ve hangi belgelerin hazırlanması gerektiği konusunda bilgi verilir. Temsile karar verilirse vekaletname düzenlenerek takip başlatılır." },
      { question: "Bakırköy Adliyesi'ne Zeytinburnu'dan ulaşım nasıl?", answer: "T1 tramvay ve M1A metro bağlantıları üzerinden ulaşım sağlanabilir. Zeytinburnu, İstanbul Bakırköy Adliyesi'nin yargı çevresinde yer aldığından ilçedeki hukuk, ceza ve icra dosyalarına ilişkin duruşma ve işlemler için bu güzergahlar kullanılır; vergisel işlemler ise Zeytinburnu Vergi Dairesi Müdürlüğü'nde yürütülür." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi gerekir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; müdafi şüpheliye eşlik edebilir, soruşturma dosyasını inceleyebilir ve tutukluluk kararlarına karşı itiraz hazırlayabilir. Tutuklamaya itiraz süresi yedi gündür." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır. Mahkeme ve idari kurumlar önünde temsil sağlanırken dosyadaki duruşma, tebligat ve karar gibi gelişmeler müvekkile iletilir; ilk iletişim WhatsApp veya telefonla kurulabilir ve takip sürecinde bilgi alma talepleri de aynı kanallardan iletilebilir." },
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
    metaTitle: "Zeytinburnu Boşanma Avukatı | Velayet",
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
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "İstanbul Bakırköy Adliyesi'ndeki aile mahkemesine başvurulur. Boşanma, velayet ve nafaka davaları bu adliyedeki aile mahkemelerinde görülür; yetki TMK m.168 uyarınca belirlenir ve anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler." },
      { question: "Eşlerden birine ait mağaza mal paylaşımında nasıl değerlendirilir?", answer: "Evlilik süresince edinilmişse katılma alacağı hesabına dahil edilebilir, işletmenin niteliği ayrıca incelenir. Aile işletmesi şeklinde yürütülen mağaza ve atölyelerde mal rejimi tasfiyesi sırasında işletme payının değerlendirilmesi ayrı bir inceleme gerektirebilir; bu değerlendirmede edinme tarihi ve işletmenin değeri dikkate alınır." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Belirli bir olgunluğa ulaşmışsa çocuğun görüşü dikkate alınabilir. Velayetin düzenlenmesinde esas olan çocuğun yararıdır; hakim, ana ve babanın koşullarını, çocuğun ihtiyaçlarını ve çocukla kişisel ilişki düzenini birlikte değerlendirir. Çocuğun görüşü bu değerlendirmede bir unsur olup tek başına belirleyici değildir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir. Çocuğun giderleri, tarafların yaşam koşulları ve ödeme gücü de dikkate alınır; nafaka dava sürerken tedbir nafakası, boşanma sonrasında iştirak veya yoksulluk nafakası olarak istenebilir ve sonradan artırılması, azaltılması ya da kaldırılması için ayrıca dava açılabilir." },
      { question: "Mal rejimi tasfiyesi ne kadar sürer?", answer: "Dosyanın niteliğine ve bilirkişi incelemesine göre süre değişebilir. Tasfiyede edinilmiş malların belirlenmesi, değerlerinin tespiti ve katılma alacağının hesaplanması gerekir; aile işletmesi niteliğindeki mağaza veya atölye varsa işletmenin değeri bilirkişi incelemesiyle belirlendiğinden yargılama daha uzun sürebilir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir. Eşlerin barışması hâlinde dava dosyası kapanır ve evlilik birliği devam eder; ancak dava sürerken verilmiş tedbir kararlarının akıbeti ile yargılama giderleri konusunda mahkemeden gelen kararların ayrıca değerlendirilmesi gerekir ve bu konuda mahkeme kararı esas alınır." },
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
    metaTitle: "Zeytinburnu Ceza Avukatı | Müdafilik",
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
      { question: "Zeytinburnu'da bir ceza davası hangi adliyede görülür?", answer: "İstanbul Bakırköy Adliyesi'nde görülür. Kovuşturma aşamasındaki davalar bu adliyede yürütülür; gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar ve bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından belirleyicidir. Soruşturma dosyası da müdafi aracılığıyla incelenebilir." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir, ancak şüpheli müdafi yardımından yararlanma hakkına sahiptir ve müdafi bulundurulması önerilir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; ifade vermeden önce soruşturma dosyasının incelenmesi savunmanın hazırlanması açısından önem taşır ve ifadenin içeriği dosyanın seyrini etkileyebilir." },
      { question: "Taklit ürün satışı iddiasıyla el konulan mallar geri alınabilir mi?", answer: "Sürecin sonucuna göre değişir; hukuka aykırı el koyma işlemlerine itiraz edilebilir. Marka hakkına tecavüz ve taklit ürün iddialarına dayalı soruşturmalarda savunma hazırlanırken el koyma kararının dayanağı ve usulü incelenir; itiraz, sulh ceza hakimliği önünde yapılır ve soruşturma dosyasındaki belgelere göre değerlendirilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, karara karşı tebliğden itibaren 15 gün içinde sulh ceza hakimliğine itiraz edilebilir. Savcılığın verdiği kovuşturmaya yer olmadığı kararı bu yolla denetlettirilebilir; itiraz dilekçesinin süresinde hazırlanabilmesi için karar metninin ve soruşturma dosyasının vakit kaybetmeden incelenmesi gerekir." },
      { question: "Temyiz kanun yoluna hangi kararlar için başvurulur?", answer: "Kanunda sayılan ağır suçlara ilişkin kararlar için başvurulabilir. Ceza yargılamasında kanun yolu aşamaları istinaf ve temyizden oluşur; hangi kararın hangi kanun yoluna tabi olduğu suçun ve verilen cezanın niteliğine göre belirlenir ve başvuru dilekçesi süresinde hazırlanmalıdır." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Yargılamaya kaldığı yerden devam edilir. Uzlaşma yalnızca kanunda uzlaşmaya tabi olarak sayılan suçlarda söz konusudur; taraflar anlaşamazsa soruşturma veya kovuşturma süreci sürer, uzlaşma sağlanırsa ise ceza kovuşturması sona erebilir. Süreç sanık veya mağdur vekili aracılığıyla takip edilebilir." },
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
    metaTitle: "Zeytinburnu Gayrimenkul Avukatı | Tapu ve Kira",
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
      { question: "İşyeri devrinde kiracının hakları nelerdir?", answer: "Devir sözleşmesinin şartlarına ve kiraya verenin onayına bağlı olarak değerlendirilir. Mağaza ve showroom niteliğindeki işyerlerinde devir ve kiracılık ilişkisinin sona ermesine ilişkin uyuşmazlıklar sık görülür; devir öncesinde kira sözleşmesinin hükümleri ve kiraya verenin yazılı onayı incelenmeli, haklar sözleşme metnine göre belirlenmelidir." },
      { question: "Showroom kirasında rayiç bedel tespiti nasıl yapılır?", answer: "Bölgedeki emsal kira bedelleri bilirkişi incelemesiyle değerlendirilerek tespit edilir. Kira bedeli tespiti ve uyarlama davaları sulh hukuk mahkemesinde açılır; Kazlıçeşme çevresindeki mağaza ve showroom niteliğindeki işyerlerinde emsal kira bedelleri, işyerinin konumu ve özellikleri dikkate alınarak bilirkişi raporuyla belirlenir." },
      { question: "Zeytinburnu'da gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür. Tapu iptali ve tescil, kira bedeli tespiti ve tahliye gibi uyuşmazlıklar bu adliyedeki ilgili hukuk mahkemelerinde açılır; dava türüne göre görevli mahkeme değişebilir ve dava dilekçesi buna göre hazırlanır." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir. Dava, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde görülür; talebin dayanağı olan hukuki sebep ile tescilin hangi gerekçeyle hukuka aykırı olduğu dilekçede açıkça belirtilmeli ve tapu kaydına ilişkin belgeler sunulmalıdır." },
      { question: "Kat malikleri kurulu kararına nasıl itiraz edilir?", answer: "Karara katılmayan malik, belirli süre içinde iptal davası açabilir. Kat Mülkiyeti Kanunu m.33 kapsamında karara, öğrenmeden itibaren bir ay içinde ve her halde karar tarihinden itibaren üç ay içinde mahkemede itiraz edilebilir; yönetim planı uyuşmazlıklarında da bu süreler dikkatle takip edilmelidir." },
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
    metaTitle: "Zeytinburnu İcra Avukatı | Takip ve Haciz",
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
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "Sözleşme, senet, çek, fatura veya mahkeme ilamı gibi belgelerle başlanabilir. Belgeye dayanan alacaklarda ilamsız takip, mahkeme ilamı bulunan alacaklarda ilamlı takip yapılır; takibin başlatılmasının ardından borçluya ödeme emri tebliğ edilir ve borçlunun yedi gün içinde itiraz hakkı doğar." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Ödeme emrine itiraz süresi, tebliğden itibaren 7 gündür. İİK m.62 uyarınca bu süre içinde itiraz edilmezse takip kesinleşir; itiraz edilirse takip durur ve alacaklı itirazın iptali veya kaldırılması yoluna gidebilir. Bu nedenle tebliğ tarihinin doğru belirlenmesi ve itirazın zamanında yapılması önem taşır." },
      { question: "Karşılıksız çek nedeniyle icra takibi nasıl başlatılır?", answer: "Çek bankaya ibraz edildikten sonra kambiyo senetlerine özgü haciz yoluyla takip başlatılabilir. Kazlıçeşme çevresindeki toptancı-perakendeci ilişkilerinden doğan çek ve senet alacakları icra takiplerinin sık başvurulan nedenleridir; takibin başlatılması için çekin aslı ve ilgili belgelerin hazırlanması gerekir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir. Haciz, takibin kesinleşmesinin ardından borçlunun malvarlığı üzerinde uygulanır; kanunen haczedilemeyen mallar ise haciz kapsamı dışındadır ve haczedilemezlik iddiası icra mahkemesinde şikayet yoluyla ileri sürülebilir. Bu başvuru icra dairesinin işlemine karşı yapılır." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür. Borçlu itiraz etmemişse takip kesinleşir, taşınır ve taşınmaz mallar üzerinde haciz uygulanır ve haczedilen mallar satışa çıkarılarak elde edilen bedelle alacaklının talebi karşılanır. Borçlu itiraz etmişse alacaklı önce itirazın iptali veya kaldırılması yoluna gider." },
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
    metaTitle: "Zeytinburnu İdare Avukatı | İptal ve Tam Yargı",
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
      { question: "İşyeri ruhsatı iptal edilirse ne yapılabilir?", answer: "İptal işlemine karşı idare mahkemesinde dava açılabilir. Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür; İYUK m.7 uyarınca bu süre geçirilirse dava hakkı düşer, bu nedenle iptal işleminin yazılı bildirimi ve ruhsat belgeleri vakit kaybetmeden toplanmalı, yürütmenin durdurulması da talep edilebilir." },
      { question: "Sahil bölgesindeki imar planına itiraz süresi nedir?", answer: "İlan tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılmalıdır. İYUK m.7 uyarınca idare mahkemelerinde dava açma süresi, işlemin tebliğ veya ilanından itibaren genel kural olarak 60 gündür; kıyı bölgesindeki imar uygulamalarında da bu süre geçirilirse dava hakkı düşer." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, yasal süresinde idare mahkemesinde dava açılabilir. Cezayı veren kanunun öngördüğü yargı yolu ve süre ayrıca incelenmelidir; genel kural olarak idari işlemlere karşı iptal davası, İYUK m.7 uyarınca yazılı bildirimden itibaren altmış gün içinde açılır ve cezanın dayanağı olan işlem dilekçede açıkça belirtilir." },
      { question: "Encümen kararına karşı dava açılabilir mi?", answer: "Evet, hukuka aykırılık iddiasıyla idare mahkemesinde dava açılabilir. Belediye encümen kararlarına karşı iptal davası, kararın tebliğinden itibaren genel kural olarak 60 gün içinde açılır; yürütmenin durdurulması talebi de dilekçeyle birlikte yapılabilir ve kararın dayanağı olan işlem dilekçede açıkça belirtilmelidir." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde dava açılabilir. İşyeri ve atölye ruhsat işlemlerine itiraz uyuşmazlıkları idare hukuku kapsamındadır; ret işleminin yazılı bildiriminden itibaren İYUK m.7 uyarınca altmış gün içinde iptal davası açılması gerekir ve yürütmenin durdurulması talebi de dilekçeye eklenebilir." },
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
    metaTitle: "Zeytinburnu İş Hukuku Avukatı | İşe İade",
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
      { question: "Satış elemanının primi ödenmezse ne yapılabilir?", answer: "Sözleşmede öngörülen prim sistemi esas alınarak alacak talep edilebilir, gerekirse dava açılabilir. Prim ve komisyon alacaklarında iş sözleşmesindeki hükümler ve ödeme kayıtları incelenir; işçilik alacağı davası açılmadan önce arabulucuya başvurmak dava şartıdır ve davalar İstanbul Bakırköy Adliyesi'ndeki iş mahkemelerinde görülür." },
      { question: "Atölyede sigortasız çalıştırılan işçinin hakları nelerdir?", answer: "Hizmet tespiti davası açılarak çalışma süresi mahkemece tespit ettirilebilir. Tanık beyanları, banka kayıtları, yazışmalar ve işyeri belgeleriyle fiilen çalışılan sürenin ve ücretin ispatı denenir; sigortasız çalışmaya ilişkin tespit sonrasında kıdem ve ihbar tazminatı gibi işçilik alacakları da ayrıca talep edilebilir." },
      { question: "Zeytinburnu'da iş mahkemesi nerededir?", answer: "İş mahkemesi İstanbul Bakırköy Adliyesi bünyesindedir. Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları bu adliyedeki iş mahkemelerinde görülür; işe iade için fesihten itibaren bir ay içinde arabulucuya başvurulması, son tutanaktan itibaren iki hafta içinde dava açılması gerekir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir. Süreç, fesihten itibaren bir ay içinde arabulucuya başvurmakla başlar; anlaşma sağlanamazsa son tutanaktan itibaren iki hafta içinde iş mahkemesinde dava açılır ve yargılamanın süresi mahkemenin iş yüküne göre farklılık gösterebilir." },
      { question: "Mevsimlik satış elemanlarının kıdem tazminatı hakkı var mı?", answer: "Çalışma süresi ve niteliğine göre değerlendirilir, şartları taşıması halinde hak doğabilir. Genel olarak aynı işyerinde en az bir yıl çalışmış olmak gerekir ve fesih nedeni tazminata hak kazandırmalıdır; kıdem tazminatı davasından önce arabulucuya başvurulması dava şartıdır." },
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
    metaTitle: "Zeytinburnu Kira ve Tahliye Avukatı | Tahliye",
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
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir. Kira ödenmezse TBK m.315 uyarınca konutta kiracıya yazılı ihtarla otuz gün süre verilir; bu sürede ödeme yapılmazsa sözleşme feshedilebilir ve tahliye davası ya da icra yoluyla tahliye istenebilir." },
      { question: "Mağaza kiracısının tahliyesi konuttan farklı mı?", answer: "Genel usul benzer olmakla birlikte, işyeri kiralarında ihtiyaç sebebiyle tahliyede ek koşullar aranabilir. Taşınmazın konut ya da işyeri niteliğinde olması tahliye sürecinde uygulanacak usul kuralını doğrudan etkiler; Zeytinburnu'nda konut ve mağaza kiraları birlikte görüldüğü için kira sözleşmesinin niteliği baştan belirlenmelidir." },
      { question: "Zeytinburnu'da tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir. Süre; tahliye sebebine, tebligat süreçlerine ve mahkemenin iş yüküne bağlıdır. Davalar kiralananın bulunduğu yerdeki sulh hukuk mahkemesinde, Zeytinburnu için İstanbul Bakırköy Adliyesi bünyesinde görülür." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Kira bedelinin tespiti ve uyarlama davaları sulh hukuk mahkemesinde açılır; rayiç kira bedelinin belirlenmesinde kiralananın özellikleri ve bölgedeki benzer kira bedelleri değerlendirilir, artış ise konutlarda TBK m.344 sınırına tabidir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir. Taahhütnamenin geçerli sayılması için kira sözleşmesinden sonra, kiralananın teslimi sonrasında yazılı olarak düzenlenmiş olması gerekir; geçerliliği somut olayda incelenir ve uyuşmazlık hâlinde sulh hukuk mahkemesine başvurulabilir." },
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
    metaTitle: "Zeytinburnu Vergi Avukatı | Uzlaşma ve Dava",
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
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir. İYUK m.7 uyarınca vergi ve ceza ihbarnamesine karşı dava açma süresi 30 gündür; davalar İstanbul vergi mahkemelerinde görülür, uzlaşma talebi de aynı süre içinde yapılabilir ve tebliğ tarihinin doğru belirlenmesi süre hesabı için önemlidir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür. Vergi ve ceza ihbarnamesine, ödeme emrine ve KDV iadesi ret işlemlerine karşı açılan iptal davaları bu mahkemelerde görülür; ihbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür ve yürütmenin durdurulması talebi dilekçede ayrıca yapılabilir." },
      { question: "KDV iadesi reddedilirse ne yapılabilir?", answer: "Ret işlemine karşı vergi mahkemesinde dava açılabilir. Deri ve konfeksiyon sektöründe ihracat faaliyetinin yoğun olduğu Zeytinburnu'nda KDV iadesi taleplerinin reddi veya eksik iadesi önemli bir uyuşmazlık konusudur; ret işleminin dayanağı ve tebliğ tarihi incelenerek süresinde dava açılması gerekir." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur. Uzlaşma talebi ihbarnamenin tebliğinden itibaren 30 gün içinde yapılır; görüşmede anlaşma sağlanamazsa dava süresi kaldığı yerden işlemeye devam eder ve vergi mahkemesinde dava açılabilir, bu yüzden uzlaşma ile dava süreleri birlikte izlenmelidir." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Ödeme emrine karşı vergi mahkemesinde dava açılabilir ve süre, ödeme emrinin tebliğ tarihinden itibaren işlemeye başlar. Süre ve başvuru yolu ilgili kanun hükmüne göre ayrıca kontrol edilmelidir; dava açılması tek başına ödemeyi durdurmaz, yürütmenin durdurulması dilekçede ayrıca talep edilebilir ve tebligat evrakı saklanmalıdır." },
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
      { question: "Konsinye teslim edilen ürün satılmazsa ne olur?", answer: "Sözleşme şartlarına göre ürün iade edilebilir veya bedeli mahsuplaşma yoluyla çözülebilir. Konsinye teslim ilişkilerinden doğan uyuşmazlıklarda iade süresi, bedelin ödenme zamanı ve ürünün durumuna ilişkin sözleşme hükümleri belirleyicidir; yazılı sözleşme ve teslim belgeleri bu nedenle incelenmelidir." },
      { question: "Ayıplı mal iddiasında ispat yükü kimdedir?", answer: "Kural olarak malın ayıplı teslim edildiğini iddia eden taraf bunu ispatla yükümlüdür. Ayıplı mal nedeniyle sözleşmeden dönme talepleri ileri sürülürken teslim belgeleri, fatura, yazışmalar ve bilirkişi incelemesi gibi deliller önem taşır; ayıp iddiasının sözleşme hükümlerine uygun biçimde ve zamanında bildirilmesi gerekir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür. Toptan satış ve konsinye teslim ilişkilerinden doğan alacak davaları bu adliyede açılır; konusu para olan ticari alacak davalarında dava açılmadan önce arabulucuya başvurmak dava şartıdır ve bu sürecin tamamlanması gerekir." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Konusu para olan ticari davalarda 6102 sayılı Kanun m.5/A uyarınca arabulucuya başvurmak dava şartıdır; dava şartı olmayan uyuşmazlıklarda ise taraflar isterlerse arabuluculuğa yine de başvurabilir." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir. TBK m.146 uyarınca genel zamanaşımı süresi on yıldır; kira gibi bazı alacaklarda bu süre TBK m.147 gereği beş yıldır. Süre, alacağın muaccel olduğu andan itibaren işlemeye başlar." },
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

export const zeytinburnuServices: PseoService[] = [...zeytinburnuBaseServices, zeytinburnuMiras];
