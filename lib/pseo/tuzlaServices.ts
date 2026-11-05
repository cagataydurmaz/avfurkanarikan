import type { PseoService } from "./types";
import { tuzlaMiras } from "./miras/tuzlaMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp ya da telefonla ulaşarak uyuşmazlığın konusunu kısaca aktarın." },
  { name: "Danışmanlık Görüşmesi", text: "Görüşme ücret karşılığında yapılır; belgeler incelenir ve hukuki durum değerlendirilir." },
  { name: "Vekalet ve Belge Hazırlığı", text: "Temsil üstlenilirse vekaletname düzenlenir, dosyaya ilişkin evrak toplanır." },
  { name: "Takip ve Bilgilendirme", text: "Mahkeme ve kurumlar nezdindeki işlemler yürütülür, her aşama müvekkille paylaşılır." },
];

const tuzlaBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "tuzla-avukat",
    name: "Tuzla Avukat",
    heroTitle: "Tuzla Avukat",
    heroSubtitle:
      "Marmara kıyısında 138 km²'lik bir alana yayılan, 27 Mayıs 1992 tarihli 3806 sayılı Bakanlar Kurulu Kararı ile Pendik'ten ayrılarak müstakil ilçe olan ve tersaneleri, organize sanayi bölgeleriyle bilinen Tuzla'da avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku dosyalarında danışmanlık ve dava takibi hizmeti vermektedir; ilçenin kendi adliyesi bulunmadığından dosyalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Tuzla Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Tuzla'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuş bir avukattır. Aydınlı, Aydıntepe, İçmeler, Evliya Çelebi, Tepeören ve Orhanlı gibi 17 mahalleden oluşan Tuzla'da, sahil kesimindeki yerleşimlerden tersane çevresine ve organize sanayi bölgelerinin yanındaki mahallelere uzanan geniş bir çevrede ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine temsil sağlar; büro Beşiktaş/Sinanpaşa'dadır, görüşme talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik, iş kazası kaynaklı taksirli suç dosyaları." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Kıyı kesimi, sanayi çevresi ve kırsal karakterli mahallelerdeki taşınmaz uyuşmazlıkları." },
      { title: "İş Hukuku", description: "Tersane ve sanayi tesisi çalışanlarının işçilik alacakları, iş kazası ve işe iade süreçleri." },
      { title: "İcra Hukuku", description: "Sanayi ve tedarik zincirinden doğan alacakların takibi ve itiraz süreçleri." },
      { title: "İdare Hukuku", description: "İmar, kıyı ve çevre mevzuatından doğan idari işlemlere karşı dava." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı, ceza ve uzlaşma uyuşmazlıkları." },
      { title: "Borçlar Hukuku", description: "Ticari sözleşme, alt yüklenici ve alacak kaynaklı davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Kıyı, sanayi ve kırsal nitelikli taşınmazlara ilişkin gayrimenkul hukuku desteği",
      "İş kazası, işe iade ve işçilik alacaklarında iş hukuku danışmanlığı",
      "Ticari ve bireysel alacakların tahsilinde icra-iflas hukuku desteği",
      "İmar, kıyı ve çevre işlemlerine karşı idari dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Alt yüklenici ve tedarik sözleşmelerinden doğan borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "Tuzla, kıyı şeridindeki Tuzla Tersaneler Bölgesi, Tepeören ve Orhanlı çevresindeki organize sanayi alanları ve nüfusu 2025 verilerine göre yaklaşık 314 bine ulaşan yerleşim mahalleleriyle, Anadolu Yakası'nın sanayi ağırlıklı ilçelerinden biridir; bu yapı, ilçedeki hukuki ihtiyaçları iş kazası, işçilik alacağı, ticari alacak ve çevre-imar işlemleri çevresinde şekillendirir.",
      "İlçenin kendi adliyesi bulunmadığından dava ve icra dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde yürütülür; vergi işlemleri Tuzla Vergi Dairesi Müdürlüğü, tapu işlemleri ise Evliya Çelebi Mahallesi'ndeki kaymakamlık binasında hizmet veren Tuzla Tapu Müdürlüğü üzerinden görülür.",
    ],
    faqs: [
      { question: "Tuzla'daki davalara hangi adliye bakıyor?", answer: "Tuzla'nın kendi adliyesi bulunmadığından ilçedeki dava ve icra dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. Vergi işlemleri Tuzla Vergi Dairesi Müdürlüğü, tapu işlemleri ise Evliya Çelebi Mahallesi'ndeki kaymakamlık binasında hizmet veren Tuzla Tapu Müdürlüğü üzerinden yürütülür." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme zamanı belirlenir. Konu kısaca aktarıldıktan sonra danışmanlık görüşmesinde dosyanın hukuki durumu ele alınır; temsile karar verilirse vekaletname düzenlenir, evraklar bir araya getirilir ve mahkeme ile idari kurumlar önündeki takip müvekkile bilgi verilerek sürdürülür." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır. Tuzla'daki tersane ve sanayi işyerlerine bağlı iş kazası ile taşeron uyuşmazlıkları, kıyı ve imar işlemleri, ticari alacak takipleri ve alt yüklenici sözleşmeleri başlıca çalışma konuları arasında yer alır." },
      { question: "Büro Tuzla'da mı bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Tuzla'daki müvekkillere de aynı kapsamda hizmet verilir. Görüşmeler yüz yüze veya çevrim içi planlanabilir; Tuzla'daki dosyalar ise Kartal'daki İstanbul Anadolu Adliyesi'nde görüldüğü için dosya takibi bu adliye esas alınarak yürütülür ve gelişmeler müvekkille paylaşılır." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Ücret dosyanın niteliğine göre değişir ve görüşme sırasında bilgi verilir. Danışmanlık görüşmesi ücretlidir; davanın türü, aşama sayısı ve gerekecek hazırlık çalışması ücretin belirlenmesinde dikkate alınan başlıca unsurlardır. Temsile karar verilirse kapsam vekaletname düzenlenirken yazılı olarak netleştirilir." },
      { question: "Tuzla'ya raylı sistemle nasıl ulaşılır?", answer: "Marmaray banliyö hattının Aydıntepe, İçmeler ve Tuzla istasyonları ilçe sınırları içindedir. Bu istasyonlara yakın mahallelerdeki konutlar ve tersane ile organize sanayi alanlarına yakın işyerleri Tuzla'daki kira uyuşmazlıklarının başlıca konusudur; dava dosyaları ise Kartal'daki İstanbul Anadolu Adliyesi'nde görülür." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir. İlk iletişim WhatsApp ya da telefonla kurulur; görüşmede konunun özeti alınır, dosyanın hukuki durumu değerlendirilir ve hangi belgelerin hazırlanması gerektiği konusunda bilgi verilir. Temsile karar verilirse vekaletname düzenlenerek takip başlatılır." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi gerekir. Şüphelinin gözaltına alındığı andan itibaren müdafi yardımından yararlanma hakkı doğar; müdafi ifade sürecine eşlik edebilir, soruşturma dosyasını inceleyebilir ve tutuklama kararına karşı itiraz hazırlayabilir. Tutuklamaya itiraz süresi yedi gündür." },
      { question: "Tersane veya sanayi tesisinde çalışanlar işçilik uyuşmazlığında destek alabilir mi?", answer: "Evet, iş kazası, kıdem-ihbar tazminatı, fazla mesai ve işe iade taleplerinde danışmanlık ve dava takibi sağlanır. Tersane ve sanayi işyerlerinde alt işveren ilişkisi yaygın olduğundan asıl işveren ile alt işverenin müteselsil sorumluluğu ayrıca incelenir; dava öncesinde zorunlu arabuluculuk sürecinin yürütülmesi gerekir." },
    ],
    howToTitle: "Tuzla'da Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Tuzla Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "tuzla-bosanma-avukati",
    name: "Tuzla Boşanma Avukatı",
    heroTitle: "Tuzla Boşanma Avukatı",
    heroSubtitle:
      "Aydınlı'dan İçmeler'e, Postane'den Yayla'ya uzanan mahallelerde yaşayan ailelerin anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal rejimi taleplerinde avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) temsil sağlar; Tuzla'nın kendi adliyesi bulunmadığından aile mahkemesi davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Tuzla Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Tuzla'da anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, Tuzla'daki ailelerin boşanma, velayet ve nafaka süreçlerinde temsilini üstlenmektedir.",
    highlightCards: [
      { title: "Anlaşmalı Boşanma", description: "Protokolün tüm hak ve yükümlülükleri kapsayacak biçimde yazılması." },
      { title: "Çekişmeli Boşanma", description: "Kusur iddialarının ve tazminat taleplerinin delillere dayandırılması." },
      { title: "Velayet ve Kişisel İlişki", description: "Çocuğun yararı gözetilerek velayet ve görüşme düzeninin kurulması." },
      { title: "Vardiyalı Çalışan Ailelerde Gelir Tespiti", description: "Sanayi ve tersane çalışanlarının ücret ve ek ödemelerinin nafaka bakımından değerlendirilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolünün hazırlanması ve duruşmada temsil",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayetin verilmesi ve sonradan değiştirilmesi talepleri",
      "Tedbir, yoksulluk ve iştirak nafakasının artırılması, azaltılması veya kaldırılması davaları",
      "Evlilik içinde edinilen konut ve araçların dahil olduğu mal rejimi tasfiyesi",
      "Boşanmaya bağlı maddi ve manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Tersane, organize sanayi ve lojistik işletmelerinde vardiyalı çalışan kişilerin çok olduğu Tuzla'da, nafaka ve velayet taleplerinde tarafların düzensiz mesai saatleri ile ücret dışı ödemeleri (ikramiye, fazla mesai, yol-yemek yardımı) gelir tespitinin tartışma konusu olmasına yol açabilmektedir.",
      "Boşanma ve velayet davaları, Tuzla'nın kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki aile mahkemelerinde görülür; anlaşmalı boşanmada protokolün eksiksizliği, çekişmeli boşanmada ise sunulan delillerin niteliği sonucu etkiler.",
    ],
    faqs: [
      { question: "Tuzla'da boşanma davası hangi adliyede açılır?", answer: "Tuzla'nın kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki aile mahkemesine başvurulur. Boşanma ve velayet davaları bu adliyedeki aile mahkemelerinde görülür; yetki TMK m.168 uyarınca belirlenir ve anlaşmalı boşanmada protokolün eksiksizliği, çekişmeli boşanmada ise delillerin niteliği sonucu etkiler." },
      { question: "Anlaşmalı boşanma için hangi şartlar aranır?", answer: "TMK m.166/3 uyarınca evlilik en az bir yıl sürmüş olmalı, taraflar boşanma ve sonuçları üzerinde anlaşmalı ve hâkim önünde iradelerini birlikte açıklamalıdır. Velayet, nafaka ve mal paylaşımı gibi mali sonuçlar hazırlanan protokolde düzenlenir; hâkim protokolü uygun bulmazsa taraflarla birlikte yeniden değerlendirebilir." },
      { question: "Vardiyalı çalışan eşin geliri nafakada nasıl değerlendirilir?", answer: "Maaş bordroları, fazla mesai ve ek ödemeler birlikte incelenerek tarafların ekonomik durumu belirlenir. İkramiye, yol ve yemek yardımı gibi ücret dışı ödemeler de gelir tespitinde tartışma konusu olabilir; düzensiz mesai saatleri nedeniyle gelirin dönemsel değişmesi hâlinde belgeler uzun bir dönem itibarıyla birlikte değerlendirilir." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Yaş ve olgunluk düzeyine göre çocuğun görüşü dikkate alınabilir. Velayetin düzenlenmesinde esas olan çocuğun yararıdır; hakim, ana ve babanın koşullarını, çocuğun ihtiyaçlarını ve çocukla kişisel ilişki düzenini birlikte değerlendirir. Çocuğun görüşü bu değerlendirmede bir unsur olup tek başına belirleyici değildir." },
      { question: "Boşanma davası açıldıktan sonra ortak konutta kalma hakkı korunabilir mi?", answer: "Aile konutuna ilişkin tedbir kararı aile mahkemesinden talep edilebilir. Dava sürerken ortak konutun hangi eş tarafından kullanılacağı geçici tedbirle düzenlenebilir; talep dilekçesinde konutun niteliği, çocukların durumu ve tarafların ihtiyaçları açıklanır ve karar dosyadaki delillere göre mahkemece verilir." },
    ],
    howToTitle: "Tuzla'da Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "Talep Belirleme", text: "Velayet, nafaka ve mal rejimi beklentileri netleştirilir." },
      { name: "Dilekçe veya Protokol", text: "Duruma göre dava dilekçesi ya da anlaşmalı boşanma protokolü hazırlanır." },
      { name: "Dava Açılması", text: "Yetkili aile mahkemesine başvuru yapılır." },
      { name: "Karar", text: "Duruşmaların ardından mahkeme hüküm verir." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-davasinda-velayet", "bosanmada-nafaka-turleri", "nafakada-yuzde-kac-sorusu"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "tuzla-ceza-avukati",
    name: "Tuzla Ceza Avukatı",
    heroTitle: "Tuzla Ceza Avukatı",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, gözaltı, ifade ve kovuşturma aşamalarında Tuzla'daki şüpheli, sanık ve mağdurlara hukuki destek sağlar; tersane ve sanayi tesislerinde meydana gelen iş kazalarına bağlı taksirli suç dosyaları da dahil olmak üzere dosyalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Tuzla Ceza Avukatı | Müdafilik",
    metaDescription:
      "Tuzla'da soruşturma, kovuşturma, tutukluluğa itiraz ve ceza yargılamasının tüm aşamalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olan ve İstanbul Barosu'nda 72621 sicil numarasıyla kayıtlı Furkan Arıkan, Tuzla'daki müvekkilleri için soruşturma ve kovuşturma süreçlerinde müdafilik ile mağdur vekilliği yapmaktadır.",
    highlightCards: [
      { title: "Gözaltı ve İfade", description: "Kolluk ve savcılık ifadesi sırasında müdafi bulundurulması." },
      { title: "Tutukluluğa İtiraz", description: "Tutuklama ve tutukluluğun devamı kararlarına karşı başvuru." },
      { title: "İş Kazası Soruşturmaları", description: "Taksirle yaralama ve ölüme neden olma suçlamalarında sorumluluk dağılımının incelenmesi." },
      { title: "Uzlaşma", description: "Uzlaşmaya tabi suçlarda tarafların arabulucu eşliğinde bir araya gelmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının ve bilirkişi raporlarının incelenmesi",
      "Tutuklama ve adli kontrol kararlarına itiraz",
      "Taksirle yaralama ve öldürme suçlamalarında sanık veya mağdur vekilliği",
      "Uzlaşma sürecinin yürütülmesi",
      "Hükmün açıklanmasının geri bırakılması ve diğer alternatif yaptırımların değerlendirilmesi",
    ],
    localParagraphs: [
      "Tuzla Tersaneler Bölgesi'ndeki gemi inşa ve onarım faaliyetleri ile sanayi tesislerinde meydana gelen iş kazaları, Türk Ceza Kanunu'nun 85. maddesi (taksirle öldürme) ve 89. maddesi (taksirle yaralama) kapsamında soruşturulabilmekte; bu dosyalarda iş güvenliği uzmanı, işveren vekili ve ilgili yöneticiler arasında kusur dağılımı bilirkişi incelemesiyle belirlenmektedir.",
      "Soruşturma ve kovuşturmalar Tuzla'nın kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde yürütülür; şüphelinin gözaltına alındığı andan itibaren müdafi yardımından yararlanma hakkı doğar.",
    ],
    faqs: [
      { question: "Tuzla'daki bir ceza davası hangi adliyede görülür?", answer: "Tuzla'nın kendi adliyesi bulunmadığından dava Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. Soruşturma ve kovuşturma işlemleri de aynı adliyede yürütülür; şüphelinin gözaltına alındığı andan itibaren müdafi yardımından yararlanma hakkı doğar ve savunma hazırlığı soruşturma aşamasından itibaren başlar." },
      { question: "İş kazası sonucu yaralanma veya ölümde işveren yetkilileri yargılanabilir mi?", answer: "Evet, kusur bilirkişi incelemesiyle belirlenir ve ihmali bulunan kişiler taksirle yaralama veya öldürme suçlarından yargılanabilir. TCK m.85 taksirle öldürme, m.89 taksirle yaralama suçlarını düzenler; iş güvenliği görevlisi, işveren vekili ve yöneticiler arasındaki kusur dağılımı bilirkişi raporuyla ortaya konur." },
      { question: "İfade vermeden önce avukat talep edilebilir mi?", answer: "Evet, şüpheli ifadesi alınmadan önce müdafi talep etme hakkına sahiptir. Müdafi ile görüşme hakkı gözaltı sürecinin başlamasıyla doğar; müdafi ifade sırasında şüpheliye eşlik edebilir ve soruşturma dosyasını inceleyerek savunmanın hazırlanmasına yardımcı olur. Bu hak, soruşturmanın her aşamasında kullanılabilir." },
      { question: "Tutuklama kararına karşı nereye başvurulur?", answer: "Kararı veren hâkimliğin bağlı olduğu bir sonraki sulh ceza hâkimliğine itiraz edilir. Tutuklamaya itiraz süresi yedi gündür; süre kısa olduğundan karar sonrası vakit kaybetmeden itiraz dilekçesi hazırlanmalı, tutuklama ve adli kontrol kararlarına karşı itiraz müdafi aracılığıyla da yapılabilir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Soruşturma veya kovuşturma olağan yoluyla devam eder. Uzlaşma yalnızca kanunda uzlaşmaya tabi olarak sayılan suçlarda söz konusudur; taraflar anlaşamazsa dosya savcılık veya mahkeme önünde ilerler, uzlaşma sağlanırsa ceza kovuşturması sona erebilir. Süreç sanık veya mağdur vekili aracılığıyla takip edilebilir." },
    ],
    howToTitle: "Tuzla'da Ceza Yargılaması Nasıl İlerler?",
    howToSteps: [
      { name: "Şikayet veya İhbar", text: "Olay kolluğa ya da savcılığa intikal eder." },
      { name: "Soruşturma", text: "İfadeler alınır, deliller toplanır, gerekirse bilirkişi raporu hazırlatılır." },
      { name: "İddianame", text: "Savcılık iddianame düzenler, mahkemenin kabulüyle kovuşturma başlar." },
      { name: "Karar ve Kanun Yolu", text: "Hüküm verilir; karara karşı istinaf yoluna başvurulabilir." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz", "kosullu-saliverilme-oranlari"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "tuzla-gayrimenkul-avukati",
    name: "Tuzla Gayrimenkul Avukatı",
    heroTitle: "Tuzla Gayrimenkul Avukatı",
    heroSubtitle:
      "Sahil kesimindeki İçmeler ve Aydıntepe'den sanayi alanlarına yakın Tepeören ve Orhanlı'ya kadar farklı karakterde taşınmazların bulunduğu Tuzla'da tapu, imar, kat mülkiyeti ve ortaklığın giderilmesi uyuşmazlıklarında avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) danışmanlık verir; davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Tuzla Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Tuzla'da tapu iptali ve tescil, kat mülkiyeti, ortaklığın giderilmesi ve kira davalarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Gayrimenkul hukuku alanında Tuzla'daki müvekkillerine danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Tapu Kayıt İncelemesi", description: "Satın alma öncesi takyidat, imar ve fiili durum kontrolü." },
      { title: "Hisseli ve Kırsal Taşınmazlar", description: "Orhanlı, Tepeören ve çevresindeki arsa ve tarla vasıflı hisseli parsellerde uyuşmazlık takibi." },
      { title: "Kat Mülkiyeti", description: "Site yönetimi, ortak gider ve genel kurul kararı uyuşmazlıkları." },
      { title: "Ortaklığın Giderilmesi", description: "Paydaşlar arasında satış yoluyla ya da aynen taksimle çözüm talepleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Satın alma öncesi tapu, takyidat ve imar durumu incelemesi",
      "Tapu iptali ve tescil davalarının açılması",
      "Hisseli parsellerde ortaklığın giderilmesi (izale-i şuyu) davaları",
      "Kat mülkiyeti ve site yönetimi uyuşmazlıklarına ilişkin danışmanlık",
      "Taşınmaz satış vaadi sözleşmelerinin hukuki incelemesi",
      "Kira bedeli tespiti ve uyarlama davaları",
    ],
    localParagraphs: [
      "Tuzla'da sahil kesimindeki konut yerleşimleri, tersane ve sanayi alanlarının çevresindeki işyeri taşınmazları ile Orhanlı ve Tepeören gibi kırsal karakterli mahallelerdeki arsa ve tarlalar birbirinden farklı hukuki sorunlar doğurur; hisseli tapularda paydaşlar arası anlaşmazlıklar ve imar durumuna ilişkin belirsizlikler bunların başında gelir.",
      "Tapu işlemleri Evliya Çelebi Mahallesi'ndeki kaymakamlık binasında bulunan Tuzla Tapu Müdürlüğü'nde yapılır; uyuşmazlıklar ise niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Tuzla'nın kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    ],
    faqs: [
      { question: "Hisseli bir taşınmaz satın alırken nelere dikkat edilmeli?", answer: "Diğer paydaşların hakları, önalım (şufa) ihtimali ve parselin imar durumu tapu ve belediye kayıtlarından ayrıca doğrulanmalıdır. Hisseli tapularda paydaşlar arası anlaşmazlıklar sık görülür; satın alma öncesinde tapu, takyidat ve imar durumu incelemesi yapılması, ileride doğabilecek uyuşmazlıkların önlenmesi bakımından önem taşır." },
      { question: "Tuzla'da gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. Tapu işlemleri Evliya Çelebi Mahallesi'ndeki Tuzla Tapu Müdürlüğü'nde yapılırken uyuşmazlıklar Tuzla'nın kendi adliyesi bulunmadığından bu adliyedeki ilgili hukuk mahkemelerinde, dava türüne göre açılır." },
      { question: "Ortaklığın giderilmesi davasında taşınmaz nasıl paylaştırılır?", answer: "Mahkeme taşınmazın aynen bölünmesine karar verebilir ya da bölünmesi mümkün değilse satışına hükmederek bedeli paydaşlara payları oranında dağıtır. Hisseli parsellerde paydaşlardan biri dava açarak ortaklığın giderilmesini isteyebilir; sonucun belirlenmesinde taşınmazın niteliği ve fiilen bölünüp bölünemeyeceği esas alınır." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil bulunduğunda hak sahibi tapu iptali ve tescil talebiyle dava açabilir. Dava, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde görülür; talebin dayanağı olan hukuki sebep ile tescilin hangi gerekçeyle hukuka aykırı olduğu dilekçede açıkça belirtilmeli ve tapu kaydına ilişkin belgeler sunulmalıdır." },
      { question: "Site yönetimiyle ortak gider anlaşmazlığında ne yapılabilir?", answer: "Yönetim planı ve kararlar incelenir, gerekirse dava yoluna gidilir. Kat mülkiyeti ve site yönetimi uyuşmazlıklarında önce ortak gider ve aidat kararlarının yönetim planına ve kanuna uygunluğu değerlendirilir; kat malikleri kurulu kararlarına karşı mahkemede itiraz yoluna başvurulabilir ve süreler dikkatle takip edilmelidir." },
    ],
    howToTitle: "Tuzla'da Tapu Uyuşmazlığı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Kayıt Toplama", text: "Tapu kaydı, imar durumu ve varsa sözleşmeler temin edilir." },
      { name: "Hukuki Nitelendirme", text: "Uyuşmazlığın dayanağı ve talep türü belirlenir." },
      { name: "Dava Açılması", text: "Yetkili mahkemede dava açılır." },
      { name: "Yargılama ve Karar", text: "Keşif, bilirkişi raporu ve deliller değerlendirilerek karar verilir." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi", "muris-muvazaasi-nedir"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "tuzla-icra-avukati",
    name: "Tuzla İcra Avukatı",
    heroTitle: "Tuzla İcra Avukatı",
    heroSubtitle:
      "Tersane, organize sanayi ve sanayi siteleriyle iç içe geçmiş bir tedarik zincirine sahip Tuzla'da fatura, çek ve senede dayalı alacakların takibinde ve borçluların itiraz süreçlerinde İstanbul Barosu sicil no 72621 ile kayıtlı avukat Furkan Arıkan temsil sağlar; takipler Kartal'daki İstanbul Anadolu Adliyesi icra daireleri üzerinden yürütülür.",
    metaTitle: "Tuzla İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Tuzla'da icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi 2019 mezunu ve İstanbul Barosu sicil no 72621 ile kayıtlı Furkan Arıkan, icra ve iflas hukuku kapsamında Tuzla'daki alacaklı ve borçlu taraflara danışmanlık ve dava takibi sunar.",
    highlightCards: [
      { title: "Takip Başlatma", description: "İlamsız veya ilamlı takibin dayanak belgeye göre yapılandırılması." },
      { title: "İtiraz Süreçleri", description: "Ödeme emrine itiraz, itirazın iptali ve kaldırılması." },
      { title: "Haciz", description: "Banka hesabı, araç ve taşınmaz üzerinde haciz işlemleri." },
      { title: "Sanayi Alacakları", description: "Alt yüklenici, malzeme ve hizmet bedelinden doğan ticari alacakların takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fatura, çek, senet veya sözleşmeye dayalı icra takibinin başlatılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali ve itirazın kaldırılması davaları",
      "Taşınmaz, araç ve banka hesapları üzerinde haciz uygulanması",
      "İşletmeler arası ticari alacakların takibi",
      "Mali sıkıntıdaki işletmeler için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Tersanelerde ve sanayi tesislerinde çalışan alt yüklenici firmalarla ana işletmeler arasındaki malzeme, nakliye ve işçilik bedeli alacakları, vadesi geçen fatura ve çeklerle birlikte Tuzla'da icra takibine konu olan alacak türlerindendir.",
      "Bu takipler, Tuzla'nın kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki icra daireleri ve icra mahkemelerinde yürütülür; ödeme emrine itiraz süresi tebliğden itibaren 7 gündür.",
    ],
    faqs: [
      { question: "Tuzla'daki bir ticari alacak için icra takibi nasıl başlatılır?", answer: "Fatura, çek, senet veya sözleşme gibi dayanak belgelerle yetkili icra dairesine takip talebi sunulur. Takip talebinin ardından borçluya ödeme emri tebliğ edilir; borçlu tebliğden itibaren yedi gün içinde itiraz etmezse takip kesinleşir. Tuzla'daki dosyalar Kartal'daki İstanbul Anadolu Adliyesi'ndeki icra daireleri aracılığıyla yürütülür." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Ödeme emrine itiraz süresi, tebliğden itibaren 7 gündür. İİK m.62 uyarınca bu süre içinde itiraz edilmezse takip kesinleşir; itiraz edilirse takip durur ve alacaklı itirazın iptali veya kaldırılması yoluna gidebilir. Bu nedenle tebliğ tarihinin doğru belirlenmesi ve itirazın zamanında yapılması önem taşır." },
      { question: "Borçlu itiraz ederse takip durur mu?", answer: "İtiraz takibi durdurur; alacaklı itirazın iptali davası açabilir veya uygun belgeye dayanıyorsa itirazın kaldırılmasını isteyebilir. Hangi yolun izleneceği alacağın dayanağına göre belirlenir; borçlunun itirazının süresinde, yani ödeme emrinin tebliğinden itibaren yedi gün içinde yapılması gerekir ve itiraz edilmezse takip kesinleşir." },
      { question: "Hacizde hangi mallar konu olabilir?", answer: "Kanunen haczi mümkün taşınır, taşınmaz ve alacaklar haczedilebilir. Taşınmaz, araç ve banka hesapları üzerinde haciz uygulanabilir; kanunen haczedilemeyen mallar ise haciz kapsamı dışında kalır ve haczedilemezlik iddiası icra mahkemesinde şikayet yoluyla ileri sürülebilir. Haciz, takibin kesinleşmesinin ardından uygulanır." },
      { question: "Mali sıkıntıdaki işletme takipten nasıl korunabilir?", answer: "Şartlar mevcutsa konkordato talebiyle mahkemeden geçici mühlet istenebilir. Mali sıkıntı yaşayan işletmeler için konkordato danışmanlığı verilir; talebin kabulü mahkemenin değerlendirmesine bağlıdır ve işletmenin borç yapısı, alacaklılarla ilişkisi ile mali durumunu gösteren belgelerin eksiksiz hazırlanması süreç açısından önem taşır." },
    ],
    howToTitle: "Tuzla'da İcra Takibi Hangi Aşamalardan Oluşur?",
    howToSteps: [
      { name: "Belgelerin Toplanması", text: "Fatura, çek, senet veya sözleşme gibi alacak belgeleri derlenir." },
      { name: "Takip Talebi", text: "Kartal'daki İstanbul Anadolu Adliyesi icra dairesine takip talebi verilir." },
      { name: "Ödeme Emri", text: "Borçluya tebliğ edilen ödeme emri için yasal itiraz süresi işler." },
      { name: "Haciz ve Satış", text: "İtiraz edilmezse veya itiraz sonuçlanırsa haciz ve satış aşamasına geçilir." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "tuzla-idare-avukati",
    name: "Tuzla İdare Avukatı",
    heroTitle: "Tuzla İdare Avukatı",
    heroSubtitle:
      "Tuzla'nın kıyı şeridi, tersane alanları ve sanayi bölgelerindeki imar, kıyı ve çevre düzenlemelerinden doğan idari işlemlere karşı avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) iptal ve tam yargı davalarında müvekkillerini temsil eder; yetkili mahkemeler İstanbul idare mahkemeleridir.",
    metaTitle: "Tuzla İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Tuzla'da idari işlemlerin iptali, imar, kıyı ve çevre işlemlerine itiraz ve tazminat davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "İstanbul Barosu'nda 72621 sicil numarasıyla kayıtlı ve 2019 MEF Üniversitesi Hukuk Fakültesi mezunu olan Furkan Arıkan, Tuzla'daki gerçek ve tüzel kişilere idari yargı süreçlerinde danışmanlık yapmaktadır.",
    highlightCards: [
      { title: "İmar İşlemleri", description: "İmar planı, yapı ruhsatı ve yıkım kararlarına karşı iptal davası." },
      { title: "Kıyı ve Deniz Kullanımı", description: "Kıyı şeridindeki yapı ve tesislere ilişkin idari işlemlerin denetimi." },
      { title: "Çevre Yaptırımları", description: "Sanayi tesislerine uygulanan çevre idari para cezalarına itiraz." },
      { title: "Tam Yargı Davaları", description: "İdarenin işlem veya eyleminden doğan zararların tazmini." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İmar planı, yapı ruhsatı ve yıkım kararlarına karşı iptal davası",
      "Kıyı kenar çizgisi ve kıyı yapılarına ilişkin idari işlemlere itiraz",
      "Çevre mevzuatından doğan idari para cezalarına karşı dava",
      "İşyeri açma ve çalışma ruhsatı ret işlemlerine itiraz",
      "İdarenin işlem veya eyleminden doğan zararlar için tam yargı davası",
      "Kamu görevlilerinin özlük hakları ile ilgili idari uyuşmazlıklar",
    ],
    localParagraphs: [
      "Denize kıyısı olan ve ilçe ekonomisinin merkezinde tersaneler ile organize sanayi bölgeleri yer alan Tuzla'da, kıyı kullanımı, imar planı değişiklikleri ve sanayi tesislerinin çevre izin ve denetim süreçleri idari uyuşmazlıkların başlıca konuları arasındadır.",
      "Bu davalara İstanbul idare mahkemelerinde bakılmakta olup dava açma süresi, işlemin tebliğ veya ilanından itibaren kural olarak 60 gündür; süre geçirildiğinde dava hakkı düşer.",
    ],
    faqs: [
      { question: "İmar planı değişikliğine karşı dava ne zaman açılmalıdır?", answer: "Planın ilanından veya işlemin tebliğinden itibaren 60 gün içinde idare mahkemesinde dava açılmalıdır. İYUK m.7 uyarınca bu süre geçirildiğinde dava hakkı düşer; imar planı, yapı ruhsatı ve yıkım kararlarına karşı iptal davası açılabilir ve yürütmenin durdurulması talebi de dilekçeye eklenebilir." },
      { question: "Çevre kanunu kapsamında kesilen idari para cezasına nasıl itiraz edilir?", answer: "Cezanın tebliğinden itibaren yasal süre içinde yetkili mahkemede dava yoluna gidilebilir. Sanayi tesislerinin çevre izin ve denetim süreçlerinde kesilen idari para cezaları idari uyuşmazlıkların başlıca konuları arasındadır; cezayı veren kanunun öngördüğü yargı yolu ve süre ayrıca incelenmeli, tebliğ tarihi doğru tespit edilmelidir." },
      { question: "Kıyı şeridindeki bir yapıya yıkım kararı verilirse ne yapılabilir?", answer: "Karara karşı süresi içinde idare mahkemesinde iptal davası açılabilir ve yürütmenin durdurulması istenebilir. Dava açma süresi kural olarak işlemin tebliğ veya ilanından itibaren 60 gündür; kıyı kenar çizgisi ve kıyı yapılarına ilişkin işlemlerde süre geçirilmemesi ve belgelerin vakit kaybetmeden toplanması gerekir." },
      { question: "İşyeri ruhsat başvurusu reddedilirse ne yapılabilir?", answer: "Ret işlemine karşı idare mahkemesinde iptal davası açılabilir. Dava, işlemin tebliğ tarihinden itibaren kural olarak 60 gün içinde açılmalıdır; işyeri açma ve çalışma ruhsatı ret işlemlerine itiraz süreçlerinde ret gerekçesi, başvuru belgeleri ve idarenin yazışmaları dilekçeye eklenir ve yürütmenin durdurulması da talep edilebilir." },
      { question: "İdarenin eylemi nedeniyle zarar gören ne yapabilir?", answer: "Tam yargı davası açarak uğradığı zararın tazminini talep edebilir. İdarenin işlem veya eyleminden doğan zararlarda dava idare mahkemesinde açılır; zararın doğduğu eylemin niteliği, idarenin kusuru veya hizmet kusuru ile zararın miktarına ilişkin belgeler dava dilekçesinde ortaya konulmalıdır." },
    ],
    howToTitle: "Tuzla'da İdari Dava Süreci Nasıl Yürütülür?",
    howToSteps: [
      { name: "İşlemin Tespiti", text: "Dava konusu işlem ve tebliğ veya ilan tarihi belirlenir." },
      { name: "Süre Kontrolü", text: "60 günlük dava açma süresinin başlangıcı hesaplanır." },
      { name: "Dilekçe", text: "Hukuki gerekçeler ve talepler dilekçeye yazılır." },
      { name: "Yargılama", text: "İdare mahkemesi dosyayı inceler ve karar verir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: ["idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "tuzla-is-hukuku-avukati",
    name: "Tuzla İş Hukuku Avukatı",
    heroTitle: "Tuzla İş Hukuku Avukatı",
    heroSubtitle:
      "Tuzla Tersaneler Bölgesi'ndeki gemi inşa ve onarım işletmeleri ile ilçedeki organize sanayi tesislerinde çalışanların iş kazası tazminatı, kıdem-ihbar tazminatı, işçilik alacakları ve işe iade süreçlerinde İstanbul Barosu sicil no 72621 ile kayıtlı avukat Furkan Arıkan temsil sağlar; iş mahkemesi davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Tuzla İş Hukuku Avukatı | İşe İade ve Tazminat",
    metaDescription:
      "Tuzla'da iş kazası tazminatı, kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'ni bitirmiş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur; Tuzla'daki işçi ve işverenlere iş hukuku alanında danışmanlık vermektedir.",
    highlightCards: [
      { title: "İş Kazası Tazminatı", description: "Tersane ve sanayi tesislerinde yaşanan kazalarda maddi ve manevi tazminat talepleri." },
      { title: "Alt İşveren İlişkisi", description: "Asıl işveren ve alt işverenin müteselsil sorumluluğunun incelenmesi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında geçersiz fesihlere karşı dava." },
      { title: "İşçilik Alacakları", description: "Fazla mesai, yıllık izin ve ücret alacaklarının tahsili." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İş kazası ve meslek hastalığından doğan maddi ve manevi tazminat davaları",
      "SGK iş kazası bildirimi ve sürekli iş göremezlik süreçlerinin takibi",
      "Asıl işveren-alt işveren ilişkisinden doğan alacak talepleri",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Kıdem, ihbar, fazla mesai ve yıllık izin ücreti alacakları",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
    ],
    localParagraphs: [
      "Tuzla'daki tersane ve sanayi işyerlerinde iş kazası ve alt işveren (taşeron) uyuşmazlıkları sık gündeme gelen konulardandır. Tersanelerde ve sanayi tesislerinde alt işveren (taşeron) ilişkisi yaygın olduğundan 4857 sayılı Kanun'un 2. maddesi uyarınca asıl işveren ile alt işverenin müteselsil sorumluluğu çoğu dosyada ayrıca incelenir.",
      "Arabuluculukta anlaşma sağlanamayan işe iade ve işçilik alacağı davaları ile iş kazası tazminat davaları, Tuzla'nın kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki iş mahkemelerinde görülür; iş kazasının SGK'ya bildirimi kanunen kazadan sonraki üç iş günü içinde yapılmalıdır.",
    ],
    faqs: [
      { question: "İş kazasında hangi tazminatlar talep edilebilir?", answer: "Kusur ve zarar durumuna göre maddi (iş göremezlik, tedavi giderleri, destekten yoksun kalma) ve manevi tazminat talep edilebilir. İş kazasının SGK'ya bildirimi kazadan sonraki üç iş günü içinde yapılmalıdır; tazminat davaları Kartal'daki İstanbul Anadolu Adliyesi'ndeki iş mahkemelerinde görülür." },
      { question: "Taşeron firmada çalışırken kaza geçiren işçi kime karşı dava açar?", answer: "Asıl işveren ve alt işveren müteselsil sorumlu olabileceğinden her ikisine karşı dava açılması gündeme gelebilir. 4857 sayılı Kanun'un 2. maddesi uyarınca asıl işveren ile alt işverenin müteselsil sorumluluğu çoğu dosyada ayrıca incelenir; tersane ve sanayi işyerlerinde alt işveren ilişkisi yaygın olduğundan bu inceleme önem taşır." },
      { question: "Tuzla'da iş mahkemesi nerededir?", answer: "Tuzla'nın kendi adliyesi bulunmadığından iş mahkemesi, Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir. Arabuluculukta anlaşma sağlanamayan işe iade ve işçilik alacağı davaları ile iş kazası tazminat davaları bu adliyedeki iş mahkemelerinde görülür; işe iade için fesihten itibaren bir ay içinde arabulucuya başvurulur." },
      { question: "İşe iade davasından önce arabuluculuk zorunlu mu?", answer: "Evet, dava şartı olarak öncelikle arabulucuya başvurulması gerekir; başvuru fesih bildiriminden itibaren bir ay içinde yapılmalıdır. Arabuluculukta anlaşma sağlanamazsa son tutanaktan itibaren iki hafta içinde iş mahkemesinde dava açılır; İş Kanunu m.18 uyarınca otuz işçi ve altı ay kıdem şartları aranır." },
      { question: "Fazla mesai nasıl ispatlanır?", answer: "Puantaj, bordro, işyeri giriş-çıkış kayıtları ve tanık beyanlarıyla ispat edilebilir. Fazla mesai alacağında çalışma saatlerini gösteren belgeler önem taşır; bu belgeler ile birlikte çalışılan kişilerin beyanları dava dilekçesine eklenir. Dava açılmadan önce işçilik alacakları için arabuluculuğa başvurulması dava şartıdır." },
    ],
    howToTitle: "Tuzla'da İş Kazası veya İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Olayın İncelenmesi", text: "Kaza tutanağı, SGK bildirimi veya fesih yazısı gibi belgeler toplanır." },
      { name: "Arabuluculuk", text: "İşe iade ve işçilik alacaklarında zorunlu arabuluculuğa başvurulur." },
      { name: "Dava Açılması", text: "Anlaşma sağlanamazsa iş mahkemesinde dava açılır." },
      { name: "Bilirkişi ve Karar", text: "Kusur ve hesap raporları alınır, mahkeme hüküm verir." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["ise-iade-davasi", "kidem-tazminati-hesaplama-2026", "giydirilmis-ucret-kavrami"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "tuzla-kira-tahliye-avukati",
    name: "Tuzla Kira ve Tahliye Avukatı",
    heroTitle: "Tuzla Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Marmaray'ın Aydıntepe, İçmeler ve Tuzla istasyonları çevresindeki konutlarda ve sanayi alanlarına yakın işyeri kiralamalarında tahliye, kira bedeli tespiti ve sözleşme uyuşmazlıklarında avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) hizmet verir; sulh hukuk mahkemesi davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Tuzla Kira ve Tahliye Avukatı | Tahliye ve Kira Tespiti",
    metaDescription:
      "Tuzla'da kiracı tahliyesi, kira sözleşmesi uyuşmazlıkları ve kira bedeli tespitinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kira hukuku uyuşmazlıklarında Tuzla'daki kiracı ve kiraya verenlere destek olan Furkan Arıkan, 2019 MEF Üniversitesi Hukuk Fakültesi mezunu olup İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır.",
    highlightCards: [
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüt gibi sebeplere dayalı tahliye süreçleri." },
      { title: "Kira Bedeli Tespiti", description: "Rayiç bedele göre kira bedelinin belirlenmesi veya uyarlanması." },
      { title: "Sanayi Çevresi İşyeri Kiraları", description: "Atölye, depo ve işyeri kiralamalarından doğan uyuşmazlıklar." },
      { title: "Sözleşme Hazırlığı", description: "Kira sözleşmesinin yazılması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Ev sahibinin ihtiyacına dayalı tahliye davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye",
      "Kira borcunun ödenmemesi nedeniyle ihtar ve tahliye süreci",
      "Kira bedelinin tespiti ve yasal artış sınırları kapsamında uyuşmazlıklar",
      "Konut, atölye ve depo kira sözleşmelerinin hazırlanması ve incelenmesi",
      "Sözleşmenin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Marmaray'ın Aydıntepe, İçmeler ve Tuzla istasyonlarına yakın mahallelerdeki konutlar ile tersane ve organize sanayi alanlarına yakın atölye, depo ve işyeri kiralamaları, Tuzla'da kira uyuşmazlıklarının başlıca konusudur; çalışanların işyerine yakınlık nedeniyle tercih ettiği kiralık konutlarda iş değişikliği, sözleşmenin sona erdirilmesi gündemini sık sık beraberinde getirir.",
      "Tahliye ve kira bedeli tespiti davaları, Tuzla'nın kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki sulh hukuk mahkemesinde görülür; Türk Borçlar Kanunu'nun 344. maddesi kira artışını belirli bir üst sınıra bağlamıştır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira bedelinin ödenmemesi, geçerli bir tahliye taahhüdü, ihtiyaç veya sözleşme şartları nedeniyle tahliye istenebilir. Kira ödenmezse TBK m.315 uyarınca konutta kiracıya yazılı ihtarla otuz gün süre verilir; bu sürede ödeme yapılmazsa sözleşme feshedilebilir ve tahliye davası ya da icra yoluyla tahliye istenebilir." },
      { question: "Tuzla'da tahliye davası hangi mahkemede görülür?", answer: "Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki sulh hukuk mahkemesinde görülür. Tuzla'nın kendi adliyesi bulunmadığından tahliye ve kira bedeli tespiti davaları bu adliyede açılır; ev sahibinin ihtiyacına dayalı, kira borcuna dayalı ve taahhütnameye dayalı tahliye talepleri için dava şartları ayrı ayrı incelenir." },
      { question: "Kira artışında yasal sınır var mı?", answer: "Konut ve çatılı işyeri kiralarında artış, Türk Borçlar Kanunu'nun 344. maddesindeki sınırlamalara tabidir. Konut kira artışı bir önceki kira yılındaki on iki aylık TÜFE ortalamasını geçemez; kira bedelinin tespiti ve uyarlama davaları Kartal'daki İstanbul Anadolu Adliyesi'nde sulh hukuk mahkemesinde açılır." },
      { question: "Taahhütnameyle tahliye için mahkemeye gitmek gerekir mi?", answer: "Geçerli bir taahhütname varsa tahliye doğrudan icra dairesi yoluyla istenebilir. Taahhütnamenin geçerli sayılması için kira sözleşmesinden sonra, kiralananın teslimi sonrasında yazılı olarak düzenlenmiş olması gerekir; geçerliliği somut olayda incelenir ve uyuşmazlık hâlinde sulh hukuk mahkemesine başvurulabilir." },
      { question: "Kira bedeli piyasa koşullarından düşükse ne yapılabilir?", answer: "Kira bedelinin tespiti için sulh hukuk mahkemesinde dava açılabilir. Kira bedeli tespiti ve uyarlama davaları Tuzla'nın kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür; rayiç bedelin belirlenmesinde kiralananın özellikleri ve bölgedeki benzer kira bedelleri değerlendirilir, artış ise TBK m.344 sınırına tabidir." },
    ],
    howToTitle: "Tuzla'da Kiracı Tahliye Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Sebebin Tespiti", text: "Tahliyenin hukuki dayanağı belirlenir." },
      { name: "Belgeler", text: "Kira sözleşmesi, ihtarname ve varsa taahhütname toplanır." },
      { name: "Başvuru", text: "Duruma göre icra dairesi ya da sulh hukuk mahkemesine başvurulur." },
      { name: "Teslim", text: "Karar veya tahliye emri sonrası taşınmaz teslim alınır." },
    ],
    crosslinkLabel: "Kira ve Tahliye Avukatı",
    relatedPostSlugs: ["kiracinin-tahliye-sureci", "kira-bedeli-tespit-ve-uyarlama-davasi"],
  },

  // ─────────────────────────── VERGİ ───────────────────────────
  {
    slug: "vergi",
    urlSlug: "tuzla-vergi-avukati",
    name: "Tuzla Vergi Avukatı",
    heroTitle: "Tuzla Vergi Avukatı",
    heroSubtitle:
      "Tuzla Vergi Dairesi Müdürlüğü nezdinde işlem gören; tersane, sanayi, lojistik ve ticaret faaliyetindeki mükelleflerin vergi tarhiyatı, vergi ziyaı cezası ve uzlaşma süreçlerinde avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) temsil sağlar; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Tuzla Vergi Avukatı | Vergi Cezası ve Uzlaşma",
    metaDescription:
      "Tuzla'da vergi tarhiyatına itiraz, vergi cezaları, uzlaşma ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı Furkan Arıkan, Tuzla'daki mükelleflere vergi tarhiyatı, cezası ve tahsilat işlemlerine ilişkin uyuşmazlıklarda danışmanlık vermektedir.",
    highlightCards: [
      { title: "Tarhiyata İtiraz", description: "Re'sen veya ikmalen tarh edilen vergilere karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Vergi ziyaı ve usulsüzlük cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma görüşmelerinde temsil." },
      { title: "Sanayi ve Lojistik Mükellefleri", description: "Üretim, ticaret ve taşımacılık faaliyetindeki işletmelerin vergi incelemeleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Vergi incelemesi ve takdir komisyonu süreçlerinde danışmanlık",
      "Kira geliri ve diğer beyan konularında uyuşmazlık desteği",
    ],
    localParagraphs: [
      "Tuzla'daki mükellefler vergi işlemlerinde Tuzla Vergi Dairesi Müdürlüğü ile muhatap olmaktadır; sanayi tesisleri, tersane ve taşeron firmalar ile lojistik şirketlerinin yoğun olduğu ilçede vergi incelemeleri ve buna bağlı ihbarnameler sık karşılaşılan uyuşmazlık konularıdır.",
      "Vergi ve ceza ihbarnamesine karşı dava açma süresi tebliğden itibaren 30 gündür; davalar İstanbul vergi mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Tuzla'daki mükellefler hangi vergi dairesine bağlıdır?", answer: "İşlemler Tuzla Vergi Dairesi Müdürlüğü üzerinden yürütülmektedir. Sanayi tesisleri, tersane ve taşeron firmalar ile lojistik şirketlerinin yoğun olduğu ilçede vergi incelemeleri ve buna bağlı ihbarnameler sık karşılaşılan konulardır; tebligatın hangi daireden geldiği, dava ve uzlaşma sürelerinin hesaplanması için kontrol edilmelidir." },
      { question: "Vergi ihbarnamesine itiraz süresi kaçtır?", answer: "Tebliğden itibaren 30 gün içinde vergi mahkemesinde dava açılabilir. İYUK m.7 uyarınca vergi ve ceza ihbarnamesine karşı dava açma süresi 30 gündür; davalar İstanbul vergi mahkemelerinde görülür, uzlaşma talebi de aynı süre içinde yapılabilir ve tebliğ tarihinin doğru belirlenmesi süre hesabı için önemlidir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür. Vergi ve ceza ihbarnamesine, ödeme emrine ve vergi cezalarına karşı açılan iptal davaları bu mahkemelerde görülür; dava açma süresi tebliğden itibaren 30 gündür ve yürütmenin durdurulması talebi dava dilekçesinde ayrıca yapılabilir." },
      { question: "Uzlaşma talebi dava açma hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa mükellef dava yoluna başvurabilir. Uzlaşma talebi ihbarnamenin tebliğinden itibaren otuz gün içinde yapılır; uzlaşma sağlanamazsa dava süresi kaldığı yerden işlemeye devam eder, bu nedenle uzlaşma ve dava süreleri birlikte takip edilmelidir ve tebliğ tarihi esas alınır." },
      { question: "İncelemeye dayanan tarhiyatta ne yapılabilir?", answer: "İnceleme raporu ve ihbarname ayrıntılı incelenir; hukuka aykırılık varsa dava veya uzlaşma yoluna gidilir. İhbarnameye karşı vergi mahkemesinde tebliğden itibaren 30 gün içinde dava açılabilir; vergi incelemesi ve takdir komisyonu süreçlerinde raporun dayanakları ve delilleri de değerlendirilir." },
    ],
    howToTitle: "Tuzla'da Vergi İtirazı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "İhbarname İncelemesi", text: "Tarhiyatın dayanağı ve ceza gerekçesi ayrıntılı incelenir." },
      { name: "Yol Seçimi", text: "Uzlaşma veya doğrudan dava seçeneği değerlendirilir." },
      { name: "Başvuru", text: "Süre içinde vergi mahkemesine başvurulur veya uzlaşma talep edilir." },
      { name: "Sonuç", text: "Mahkeme kararı ya da uzlaşma tutanağıyla süreç sona erer." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: ["vergi-ihbarnamesine-itiraz-ve-uzlasma"],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "tuzla-borclar-hukuku-avukati",
    name: "Tuzla Borçlar Hukuku Avukatı",
    heroTitle: "Tuzla Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Tersane, organize sanayi, lojistik ve tedarik ilişkilerinin yoğun olduğu Tuzla'da ticari sözleşme, alt yüklenici ve alacak uyuşmazlıklarında İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan (MEF Üniversitesi Hukuk Fakültesi, 2019) müvekkillerini temsil eder; davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Tuzla Borçlar Hukuku Avukatı | Alacak ve Tazminat",
    metaDescription:
      "Tuzla'da ticari sözleşmeler, alt yüklenici ilişkileri, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Sözleşme ve alacak kaynaklı uyuşmazlıklarda Tuzla'daki müvekkillerine danışmanlık veren Furkan Arıkan, İstanbul Barosu'na kayıtlı (sicil no: 72621) ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunu bir avukattır.",
    highlightCards: [
      { title: "Alt Yüklenici Sözleşmeleri", description: "Gemi onarımı, imalat ve montaj işlerine ilişkin sözleşme uyuşmazlıkları." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Tedarik ve Nakliye", description: "Malzeme, nakliye ve hizmet bedeli kaynaklı anlaşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alt yüklenici ve imalat sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Malzeme tedariki ve nakliye sözleşmesi uyuşmazlıkları",
      "Ayıplı ifa nedeniyle sözleşmeden dönme ve bedel indirimi talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Gemi onarım ve inşa faaliyetlerinde ana işletme ile alt yükleniciler arasında kurulan iş, malzeme ve nakliye ilişkileri, Tuzla'da borçlar hukuku kapsamındaki uyuşmazlıkların önemli bir bölümünü oluşturur; bedel, süre ve ayıp konularında yazılı sözleşme hükümleri belirleyici olur.",
      "Bu davalar, Tuzla'nın kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür; Türk Ticaret Kanunu'nun 5/A maddesi uyarınca konusu para alacağı olan ticari davalarda dava açmadan önce arabulucuya başvurmak dava şartıdır.",
    ],
    faqs: [
      { question: "Sözleşmeyi ihlal eden taraftan ne talep edilebilir?", answer: "Duruma göre ifa, sözleşmeden dönme veya zararın tazmini talep edilebilir. Hangi talebin ileri sürüleceği sözleşme hükümlerine, ihlalin niteliğine ve borçlunun temerrüt durumuna göre belirlenir; bedel, süre ve ayıp konularında yazılı sözleşme hükümleri belirleyici olduğundan sözleşme ve ihtar belgeleri önce incelenmelidir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür. Tuzla'nın kendi adliyesi bulunmadığından bu davalar anılan adliyede açılır; konusu para alacağı olan ticari davalarda dava açmadan önce arabulucuya başvurmak dava şartıdır ve bu sürecin tamamlanması gerekir." },
      { question: "Dava öncesi arabuluculuk zorunlu mu?", answer: "Konusu para alacağı olan ticari davalarda dava şartıdır; diğer uyuşmazlıklarda duruma göre değişir. Dava şartı niteliğindeki durumlarda arabulucuya başvurulmadan açılan dava usulden reddedilir; arabuluculukta anlaşma sağlanamazsa son tutanakla birlikte Kartal'daki İstanbul Anadolu Adliyesi'nde dava açılabilir." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir. TBK m.146 uyarınca genel zamanaşımı süresi on yıldır; kira gibi bazı alacaklarda bu süre TBK m.147 gereği beş yıldır. Süre, alacağın muaccel olduğu andan itibaren işlemeye başlar." },
      { question: "Alt yüklenici bedelini alamazsa ne yapabilir?", answer: "Sözleşme ve fatura belgeleriyle icra takibi başlatabilir veya alacak davası açabilir. Malzeme, nakliye ve işçilik bedeli alacaklarında vadesi geçen fatura ve çekler takibe konu olur; ticari nitelikli ve konusu para olan alacak davalarında önce arabulucuya başvurulması dava şartıdır." },
    ],
    howToTitle: "Tuzla'da Alacak Davası Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Delillerin Toplanması", text: "Sözleşme, fatura ve yazışmalarla alacağın dayanağı belirlenir." },
      { name: "Ön Koşullar", text: "Gerekli ise ihtarname çekilir veya arabulucuya başvurulur." },
      { name: "Dava Açılması", text: "Yetkili mahkemede alacak davası açılır." },
      { name: "İcra", text: "Karar kesinleştikten sonra gerekirse icra takibi başlatılır." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];

export const tuzlaServices: PseoService[] = [...tuzlaBaseServices, tuzlaMiras];
