import type { PseoService } from "./types";
import { beylikduzuMiras } from "./miras/beylikduzuMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const beylikduzuBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "beylikduzu-avukat",
    name: "Beylikdüzü Avukat",
    heroTitle: "Beylikdüzü Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, konut kooperatifleriyle planlı biçimde gelişmiş, TÜYAP Fuar Merkezi'ne ve uzun bir sahil şeridine sahip Beylikdüzü'nde ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Büyükçekmece Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Beylikdüzü Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Beylikdüzü'nde ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Yapı kooperatifleri aracılığıyla planlı biçimde gelişmiş, geniş yeşil alanlara ve TÜYAP Fuar Merkezi'ne sahip Beylikdüzü'nde ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Kooperatif ortaklığı ve tapu uyuşmazlıklarının takibi." },
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
      "Kooperatif ortaklığı, tapu ve kira ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "Yapı kooperatifleri eliyle inşa edilen toplu konut projeleriyle İstanbul'un en planlı yerleşimlerinden biri olan Beylikdüzü, geniş bulvarları, yeşil alanları ve TÜYAP Fuar ve Kongre Merkezi'yle hem yerleşik hem ticari bir profil sunmaktadır.",
      "İlçedeki hukuki uyuşmazlıklar İstanbul Büyükçekmece Adliyesi'nde, vergisel işlemler ise Beylikdüzü Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Beylikdüzü'ndeki davalara hangi adliye bakıyor?", answer: "Beylikdüzü, İstanbul Büyükçekmece Adliyesi'nin yargı çevresinde yer aldığından davalara bu adliye bakar. Hukuk ve ceza yargılaması bu adliye bünyesinde yürütülür; vergisel işlemler ilgili vergi dairesi müdürlüğü nezdinde, vergi davaları ise İstanbul vergi mahkemelerinde görülür. Randevu için WhatsApp veya telefonla iletişime geçilebilir." },
      { question: "Randevu nasıl alınır?", answer: "Randevu için WhatsApp veya telefon üzerinden iletişime geçilir ve konu kısaca paylaşılır; ardından uygun bir görüşme günü belirlenir. Danışmanlık görüşmesi ücret karşılığı yapılır ve hukuki durum değerlendirilir. Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir ve süreç başlatılır." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve temsil hizmeti verilir. Bu kapsamda boşanma ve velayet, işçilik alacakları, icra takibi, idari işlemlere karşı iptal davaları ve vergi uyuşmazlıkları gibi konular yürütülür. Ayrıntılar randevuda paylaşılır." },
      { question: "Büro Beylikdüzü'nde mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Beylikdüzü bölgesindeki müvekkillere de aynı kapsamda hizmet verilir. Görüşmeler yüz yüze veya çevrim içi planlanabilir; ilk iletişim WhatsApp ya da telefonla kurulur. Dava ve işlemler yetkili adliye ve idari merciler nezdinde yürütülür." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Danışmanlık görüşmesi ücret karşılığı yapılır ve ücret dosyanın niteliğine göre değişir. Uyuşmazlığın türü, belge yoğunluğu ve gerekecek takip süreci gibi unsurlar dikkate alınır. Ücret ve kapsam bilgisi randevu sırasında paylaşılır; temsil kararı alınırsa vekalet düzenlenir." },
      { question: "Konut kooperatifi uyuşmazlıklarında destek alınabilir mi?", answer: "Evet, konut kooperatifi uyuşmazlıklarında ortaklık payı ve tapu devri süreçlerinde danışmanlık sağlanır. Kooperatiften çıkarılma kararına itiraz ve ortaklık payı devri gibi konular ana sözleşme hükümlerine göre incelenir. Uyuşmazlık niteliğine göre görevli mahkemede, İstanbul Büyükçekmece Adliyesi bünyesinde görülür." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Görüşmeler tercihe göre yüz yüze veya çevrim içi olarak planlanabilir. İlk iletişim WhatsApp ya da telefonla kurulur, ardından görüşme günü belirlenir. Hangi yöntem seçilirse seçilsin hukuki durum değerlendirilir; temsil kararı alınırsa vekalet düzenlenir ve belgeler birlikte derlenir." },
      { question: "Büyükçekmece Adliyesi'ne Beylikdüzü'nden ulaşım nasıl?", answer: "Büyükçekmece Adliyesi'ne ulaşım, Metrobüs hattının son durağı olan Beylikdüzü/TÜYAP durağı üzerinden sağlanabilir. Beylikdüzü, İstanbul Büyükçekmece Adliyesi'nin yargı çevresinde yer aldığı için ilçedeki davalar bu adliyede görülür. Duruşma gününden önce mahkeme ve saat bilgisinin teyit edilmesi önerilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Gözaltı halinde vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmelidir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından önem taşır. Müdafi, ifade alma ve soruşturma aşamalarında şüpheliye eşlik eder." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, dosyanın seyri hakkında süreç boyunca bilgi verilir. Temsil sürecinde gelişmeler müvekkille paylaşılır; mahkeme ve idari merciler nezdindeki işlemler, duruşma tarihleri ve yeni evraklar takip edilerek bildirilir. Bu takip, vekalet düzenlendikten sonra yürütülen dosya yönetiminin bir parçasıdır." },
    ],
    howToTitle: "Beylikdüzü'nde Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Beylikdüzü Avukat (Genel)",
    relatedPostSlugs: ["ortakligin-giderilmesi-davasi", "tapu-iptali-ve-tescil-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "beylikduzu-bosanma-avukati",
    name: "Beylikdüzü Boşanma Avukatı",
    heroTitle: "Beylikdüzü Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; aile mahkemeleri İstanbul Büyükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Beylikdüzü Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Beylikdüzü'nde anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Aile hukuku alanında Beylikdüzü'ndeki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlar.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Kooperatif Konutu Payı", description: "Kooperatif hissesinin mal rejiminde değerlendirilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Kooperatif hissesi/konutunun mal rejimi tasfiyesinde değerlendirilmesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Konut kooperatifleri aracılığıyla edinilmiş taşınmazların yaygın olduğu Beylikdüzü'nde, boşanma davalarında kooperatif hissesinin veya henüz tapuya dönüşmemiş ortaklık payının mal rejimi tasfiyesinde nasıl değerlendirileceği ayrı bir uzmanlık gerektirebilmektedir.",
      "Boşanma, velayet ve nafaka davalarına İstanbul Büyükçekmece Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Boşanma davası için İstanbul Büyükçekmece Adliyesi'ndeki aile mahkemesine başvurulur. Yetki TMK m.168 uyarınca eşlerden birinin yerleşim yeri mahkemesi veya eşlerin en son altı aydan beri birlikte oturdukları yer mahkemesidir. Anlaşmalı boşanmada en az 1 yıllık evlilik ve duruşmada iki eşin birlikte beyanı aranır (TMK m.166/3)." },
      { question: "Kooperatif hissesi mal paylaşımında nasıl değerlendirilir?", answer: "Evlilik süresince edinilmişse kooperatif hissesi, tapuya henüz dönüşmemiş olsa dahi katılma alacağı hesabına dahil edilebilir. Mal rejimi tasfiyesinde hissenin edinilme tarihi, ödenen aidatlar ve güncel değeri değerlendirilir. Ortaklık belgeleri ve ödeme kayıtları hesabın dayanağını oluşturur." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Çocuk belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir. Velayet düzenlenirken esas ölçüt çocuğun yararıdır; çocuğun yaşı ve gelişim düzeyi, görüşünün ne ölçüde değerlendirileceğini etkiler. Mahkeme, tarafların beyanlarını dosyadaki delillerle birlikte değerlendirir. Bu değerlendirmede velayetin kime verileceği ve kişisel ilişki düzeni de gözetilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Nafaka miktarı, tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilerek belirlenir. Hakim, nafaka yükümlüsünün ödeme gücünü ve nafaka alacaklısının ihtiyaçlarını dosyadaki delillerle ölçer. Koşullar değişirse nafakanın artırılması, azaltılması veya kaldırılması talep edilebilir. Nafaka çocuğun giderlerine yönelik olabileceği gibi eşin ihtiyacına da ilişkin olabilir." },
      { question: "Mal rejimi tasfiyesi ne kadar sürer?", answer: "Mal rejimi tasfiyesinin süresi, dosyanın niteliğine ve bilirkişi incelemesine göre değişir. Taşınmaz ve kooperatif hissesi gibi mal varlığı kalemlerinin çokluğu ile tarafların delilleri süreyi etkiler. Belgelerin eksiksiz sunulması, bilirkişi incelemesinin ve hesaplamanın zamanında tamamlanmasına katkı sağlar." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir. Barışma halinde davanın sürdürülmesine gerek kalmaz; taraflar bu iradelerini mahkemeye bildirir. Bu yol, boşanma kararı verilmeden önce açıktır ve davanın seyri tarafların açıklamalarına göre mahkemece yürütülür. Anlaşmalı boşanma için ise protokolün eksiksiz olması önem taşır." },
    ],
    howToTitle: "Beylikdüzü'nde Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "beylikduzu-ceza-avukati",
    name: "Beylikdüzü Ceza Avukatı",
    heroTitle: "Beylikdüzü Ceza Avukatı",
    heroSubtitle:
      "Beylikdüzü'nde yürütülen ceza dosyalarında ifade alma, gözaltı ve kovuşturmanın her aşamasında müdafi olarak destek verilir; davalara bakan adliye İstanbul Büyükçekmece Adliyesi'dir.",
    metaTitle: "Beylikdüzü Ceza Avukatı | Müdafilik",
    metaDescription:
      "Beylikdüzü'nde soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarının tamamında Beylikdüzü'ndeki müvekkillere müdafilik hizmeti veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Fuar/Etkinlik Kaynaklı Uyuşmazlıklar", description: "TÜYAP çevresindeki organizasyonlara ilişkin iddialarda savunma." },
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
      "Beylikdüzü'nde zaman zaman gündeme gelen güven suçu iddialarının bir kısmı, TÜYAP Fuar ve Kongre Merkezi çevresinde yoğunlaşan etkinlik ve organizasyon faaliyetlerinden doğan ticari ilişkilerden kaynaklanabilmektedir.",
      "Müdafi ile görüşme hakkı, gözaltı sürecinin başladığı andan itibaren doğar ve bu hakkın zamanında kullanılması sürecin sonraki aşamalarını doğrudan etkiler; Beylikdüzü'nde açılan kovuşturma dosyalarına İstanbul Büyükçekmece Adliyesi'nde bakılmaktadır.",
    ],
    faqs: [
      { question: "Beylikdüzü'nde bir ceza davası hangi adliyede görülür?", answer: "Ceza davaları İstanbul Büyükçekmece Adliyesi'nde görülür. Soruşturma aşamasında şüpheli müdafiyle birlikte ifade verebilir; kovuşturma aşamasına geçildiğinde yargılama bu adliye bünyesinde yürütülür. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamalar açısından önem taşır." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "İfade müdafi bulunmadan da alınabilir; ancak şüpheli veya sanığın müdafi bulundurma hakkı vardır ve bu hakkın kullanılması önerilir. Müdafi, ifade sırasında hakların korunmasına ve dosya içeriğinin takip edilmesine yardımcı olur. Gözaltına alınan kişinin müdafi ile görüşme hakkı gözaltı anından itibaren doğar." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, kovuşturmaya yer olmadığı kararına karşı sulh ceza hakimliğine itiraz edilebilir. İtiraz süresi kararın tebliğinden itibaren 15 gündür. İtiraz dilekçesinde kararın hangi yönlerden hatalı olduğu ve soruşturmada eksik kalan hususların neler olduğu belirtilir. Karar kesinleştiğinde soruşturma sona erer; itirazın kabulü halinde soruşturmanın devamı sağlanabilir." },
      { question: "Temyiz kanun yoluna hangi kararlar için başvurulur?", answer: "Temyiz, kanunda sayılan ağır suçlara ilişkin kararlar için başvurulabilen kanun yoludur; istinaf incelemesinden sonra temyize açık bırakılan kararlar da bu kapsamdadır. Kararın temyize tabi olup olmadığı dosyanın niteliğine ve verilen karara göre belirlenir; kanun yolu süreleri kararın tefhim veya tebliğ tarihine göre işler." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Uzlaşma sağlanamazsa yargılama kaldığı yerden devam eder. Uzlaşmaya tabi suçlarda uzlaştırma süreci sonuçsuz kalırsa soruşturma veya kovuşturma olağan akışında yürütülür. Uzlaşma sürecinde taraflar bir araya getirilir; teklif kabul edilmezse savunma ve delil sunma hakları aynen devam eder." },
    ],
    howToTitle: "Beylikdüzü'nde Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "beylikduzu-gayrimenkul-avukati",
    name: "Beylikdüzü Gayrimenkul Avukatı",
    heroTitle: "Beylikdüzü Gayrimenkul Avukatı",
    heroSubtitle:
      "Yapı kooperatifi ortaklığı, tapu uyuşmazlıkları ve kira ilişkilerinde hukuki destek sağlanır; davalar İstanbul Büyükçekmece Adliyesi'nde görülür.",
    metaTitle: "Beylikdüzü Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Beylikdüzü'nde yapı kooperatifi ortaklığı, tapu iptali ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Yapı kooperatifi ortaklığı, tapu ve kira uyuşmazlıklarında Beylikdüzü'ndeki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Kooperatif Ortaklığı", description: "Ortaklık payının devri, kooperatiften çıkma/çıkarılma uyuşmazlıkları." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Site Yönetimi", description: "Toplu konut sitelerinde yönetim ve aidat uyuşmazlıkları." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Yapı kooperatifi ortaklık payının devri ve tapuya dönüştürülmesi süreçleri",
      "Kooperatiften çıkarılma kararlarına karşı itiraz ve iptal davaları",
      "Site yönetim planı ve ortak gider uyuşmazlıklarında temsil",
      "Tapu iptali ve tescil davalarının açılması",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
    ],
    localParagraphs: [
      "Yapı kooperatifleri eliyle gelişen bir yerleşim geçmişine sahip Beylikdüzü'nde, kooperatif ortaklık payının devri, kooperatiften çıkarılma kararlarına itiraz ve tapuya dönüştürme süreçleri sık karşılaşılan gayrimenkul hukuku konularındandır.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür.",
    ],
    faqs: [
      { question: "Kooperatiften çıkarılma kararına itiraz edilebilir mi?", answer: "Evet, kooperatiften çıkarılma kararına, kararın usule ve esasa aykırı olduğu iddiasıyla mahkemeye başvurulabilir. İtirazda ana sözleşme hükümleri ile kararın alınma usulü incelenir. Karar ve tebliğ belgeleri dava dosyasına eklenir; dava, İstanbul Büyükçekmece Adliyesi bünyesinde görülür." },
      { question: "Kooperatif ortaklık payı nasıl devredilir?", answer: "Kooperatif ortaklık payı, kooperatif ana sözleşmesindeki usule uygun olarak devredilmelidir. Devir için ana sözleşmenin aradığı şartlar ve varsa kurul onayı gibi hususlar önce kontrol edilir. Devir işlemi yazılı sözleşmeyle belgelenmeli; tapu devri aşamasında ortaklık belgeleri ayrıca incelenmelidir." },
      { question: "Beylikdüzü'nde gayrimenkul davası hangi mahkemede görülür?", answer: "Gayrimenkul davası, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür. Kira ve tahliye gibi uyuşmazlıklar sulh hukuk mahkemesinde, tapu iptali ve tescil gibi davalar ise asliye hukuk mahkemesinde ele alınabilir. Dosyaya tapu kaydı ve sözleşme gibi belgeler eklenir." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Tapu iptal ve tescil davası, hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tarafından açılabilir. Tescilin dayanağının geçersiz olduğu veya hakkın tapuya doğru yansımadığı iddia edilebilir. Dava taşınmazın niteliğine göre görevli mahkemede görülür ve dosyaya tapu kaydı ile dayanak belgeler eklenir." },
      { question: "Site yönetim kurulu kararına nasıl itiraz edilir?", answer: "Karara katılmayan malik, belirli süre içinde iptal davası açabilir. Dava, İstanbul Büyükçekmece Adliyesi bünyesindeki mahkemede görülür. Karar tutanağı, yönetim planı ve toplantı belgeleri incelenir; kararın kanuna veya yönetim planına aykırı olduğu iddiası bu belgelere dayandırılır." },
    ],
    howToTitle: "Beylikdüzü'nde Kooperatif Ortaklığı Uyuşmazlığı Nasıl Çözülür?",
    howToSteps: [
      { name: "Belge İncelemesi", text: "Kooperatif ana sözleşmesi ve ortaklık kayıtları incelenir." },
      { name: "İtiraz veya Talep", text: "Duruma göre kooperatif organlarına itiraz veya devir talebi yapılır." },
      { name: "Dava Açılması", text: "Çözülemeyen uyuşmazlıkta mahkemeye başvurulur." },
      { name: "Sonuçlanma", text: "Mahkeme kararıyla ortaklık durumu netleşir." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "beylikduzu-icra-avukati",
    name: "Beylikdüzü İcra Avukatı",
    heroTitle: "Beylikdüzü İcra Avukatı",
    heroSubtitle:
      "Alacak tahsili amacıyla icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır; icra daireleri İstanbul Büyükçekmece Adliyesi'ndedir.",
    metaTitle: "Beylikdüzü İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Beylikdüzü'nde icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İcra ve iflas hukuku kapsamında Beylikdüzü'ndeki alacaklı ve borçlu taraflara danışmanlık verir.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "Etkinlik/Organizasyon Alacakları", description: "Fuar ve etkinlik sektöründen doğan ticari alacaklar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fuar ve etkinlik organizasyonu hizmetlerinden doğan alacakların takibi",
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "TÜYAP Fuar ve Kongre Merkezi çevresinde yoğunlaşan etkinlik, stant ve organizasyon hizmetlerine ilişkin ticari ilişkilerden doğan alacaklar, Beylikdüzü'nde icra takiplerinin başlıca kaynaklarından biridir.",
      "Bu takiplere ilişkin uyuşmazlıklar İstanbul Büyükçekmece Adliyesi'ndeki icra mahkemelerinde görülür; borçlunun Beylikdüzü'nde yerleşik olduğu takiplerde yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "İcra takibi sözleşme, senet, fatura veya mahkeme ilamı gibi alacağı gösteren belgelerle başlatılabilir. Belgelerin alacağın miktarını ve dayanağını açıkça göstermesi önemlidir. Takip talebi bu belgelere dayanılarak yapılır; borçluya ödeme emri gönderilir ve süreç icra dairesi nezdinde yürütülür." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "İcra takibinde ödeme emrine itiraz süresi, tebliğden itibaren 7 gündür (İİK m.62). Bu süre içinde icra dairesine yapılan itiraz takibi durdurur. Süre kaçırılırsa takip kesinleşebilir ve haciz aşamasına geçilebilir; bu nedenle tebliğ tarihinin doğru tespit edilmesi önemlidir." },
      { question: "Fuar standı kirasında ödeme yapılmazsa ne olur?", answer: "Fuar standı kirasında ödeme yapılmazsa sözleşmeye dayanarak icra takibi başlatılabilir. Takipte kira sözleşmesi, fatura ve ödeme kayıtları dayanak olarak sunulur. Borçlu ödeme emrine 7 gün içinde itiraz edebilir (İİK m.62); itiraz halinde itirazın iptali veya kaldırılması yoluna gidilebilir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Haciz, kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir. Borçlunun mal varlığına yönelik bu işlem, takibin kesinleşmesinden sonra alacağın tahsili amacıyla yapılır. Kanunen haczedilemeyen mallar ile maaş gibi gelirlerde kanundaki sınırlamalar ayrıca gözetilir. Haciz işlemi icra dairesi eliyle yürütülür ve borçlu ile alacaklıya bilgi verilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Borçlu ödeme yapmaz ve itiraz etmezse takip kesinleşir; ardından haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür. Haczedilen malın satışından elde edilen bedel alacaklıya aktarılır. Borçlu itiraz ederse itirazın iptali veya kaldırılması gibi ek hukuki yollar gündeme gelir." },
    ],
    howToTitle: "Beylikdüzü'nde İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "beylikduzu-idare-avukati",
    name: "Beylikdüzü İdare Avukatı",
    heroTitle: "Beylikdüzü İdare Avukatı",
    heroSubtitle:
      "Beylikdüzü'nde belediye, imar ve kıyı alanına ilişkin idari işlemlere karşı açılan iptal ve tam yargı davalarında İstanbul idare mahkemeleri nezdinde temsil sağlanır.",
    metaTitle: "Beylikdüzü İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Beylikdüzü'nde idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş olup idari işlemlerin iptali ve tam yargı davaları alanında Beylikdüzü'ndeki müvekkillerine danışmanlık vermektedir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Kıyı Alanı Uygulamaları", description: "Sahil şeridi ve marina bölgesindeki imar uyuşmazlıkları." },
      { title: "Kooperatif İmar İzinleri", description: "Toplu konut projelerine ilişkin ruhsat süreçleri." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kıyı alanı ve sahil şeridi düzenlemelerine ilişkin idari dava süreçleri",
      "İmar planı değişikliklerine karşı iptal davası açılması",
      "Belediye ruhsat işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Sahil alanına ve imar planı değişikliklerine ilişkin idari işlemler, Beylikdüzü'nde zaman zaman dava konusu olabilmektedir; ilçe, 12,4 km uzunluğundaki kıyı şeridi ve West İstanbul Marina gibi tesisleriyle geniş bir sahil alanına sahiptir.",
      "Genel kural olarak dava açma süresi, ilgili işlemin tebliğinden itibaren 60 gündür; bu süre içindeki davalara İstanbul idare mahkemelerinde bakılmaktadır.",
    ],
    faqs: [
      { question: "Kıyı şeridindeki bir yapılaşmaya itiraz nasıl yapılır?", answer: "Kıyı şeridindeki bir yapılaşmaya karşı ilan veya tebliğ tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılabilir. Genel kural olarak idari davalarda süre 60 gündür (İYUK m.7). Sahil ve kıyı düzenlemelerine ilişkin imar ve ruhsat işlemleri iptal davasına konu edilebilir." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İmar planına karşı dava, ilan tarihinden itibaren yasal süre içinde idare mahkemesinde açılmalıdır; idari davalarda genel süre 60 gündür (İYUK m.7). Plan değişikliğinden etkilenen taşınmaz malikleri veya ilgili kişiler dava açabilir. Sürenin kaçırılmaması için ilan tarihi ve usulü doğru tespit edilmelidir." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde iptal davası açılabilir. Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Başvuru dosyası, ret yazısı ve tebliğ tarihini gösteren belgeler dava açılmadan önce derlenir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, idari para cezasına karşı yasal süresinde idare mahkemesinde dava açılabilir. İdari davalarda genel dava açma süresi, işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Ceza tutanağı ve tebliğ belgeleri dosyaya eklenir; iptal talebi hukuka aykırılık gerekçeleriyle birlikte sunulur." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "İdarenin işlem veya eyleminden zarar görenler, zararın tazmini için tam yargı davası açabilir. Zarara yol açan işlemin ya da eylemin ve zararın belgelerle ortaya konulması gerekir. Dava idare mahkemesinde görülür; süre ve ön başvuru usulü, somut olaya göre belirlenir." },
    ],
    howToTitle: "Beylikdüzü'nde İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "beylikduzu-is-hukuku-avukati",
    name: "Beylikdüzü İş Hukuku Avukatı",
    heroTitle: "Beylikdüzü İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul Büyükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Beylikdüzü İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Beylikdüzü'nde kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Beylikdüzü'ndeki fuarcılık, organizasyon ve diğer sektör çalışanlarına ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Fuar/Etkinlik Sektörü", description: "Dönemsel ve proje bazlı çalışanların işçilik alacakları." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Fuar dönemlerinde dönemsel çalışanların işçilik alacaklarının tahsili",
      "Hafta tatili ve yıllık izin ücreti gibi diğer işçilik alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "TÜYAP Fuar ve Kongre Merkezi'nde yıl boyunca düzenlenen etkinlikler, dönemsel ve proje bazlı istihdamı Beylikdüzü'nde yaygınlaştırmakta; bu da işçilik alacaklarının hesaplanmasında ayrı bir dikkat gerektirebilmektedir.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Büyükçekmece Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Fuar dönemlerinde çalışanların kıdem tazminatı hakkı var mı?", answer: "Şartları taşıması halinde fuar dönemlerinde çalışan dönemsel çalışanlar da kıdem tazminatına hak kazanabilir. Hizmet süresi ve işten ayrılış biçimi bu hakkın doğup doğmadığını belirler. Dönemsel ve proje bazlı çalışmalarda çalışma dönemleri ve sözleşmeler birlikte incelenerek işçilik alacağı hesaplanır." },
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Haksız fesih halinde kıdem tazminatı, çalışma süresi ve son brüt ücret esas alınarak hesaplanır. Hesapta çalışılan yıl sayısı ile ücrete eklenen düzenli ödemeler birlikte değerlendirilir. İşe giriş ve çıkış kayıtları, bordrolar ve fesih bildirimi hesabın dayanağını oluşturur; uyuşmazlık iş mahkemesinde görülür." },
      { question: "Beylikdüzü'nde iş mahkemesi nerededir?", answer: "Bölgedeki iş davalarına İstanbul Büyükçekmece Adliyesi bünyesindeki iş mahkemeleri bakar. İşe iade ve işçilik alacağı davaları, arabuluculukta anlaşma sağlanamazsa bu mahkemelerde görülür. İşe iade için fesihten itibaren 1 ay içinde arabuluculuğa başvurulur; son tutanaktan itibaren 2 hafta içinde dava açılır." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "İşe iade sürecinin toplam süresi dosyaya göre değişir. Süreç, fesihten itibaren 1 ay içinde arabuluculuğa başvuru ile başlar; anlaşma sağlanamazsa son tutanaktan itibaren 2 hafta içinde dava açılır. İş K. m.18 uyarınca en az 30 işçi ve 6 ay kıdem şartı aranır." },
      { question: "Etkinlik sırasında iş kazası geçiren çalışan ne yapmalı?", answer: "Etkinlik sırasında iş kazası geçiren çalışan olayı derhal SGK'ya bildirmeli, tedavi ve tazminat sürecini başlatmalıdır. Kaza tutanağı, sağlık raporları ve tanık bilgileri delil olarak saklanır. Maddi ve manevi tazminat talepleri iş mahkemesinde ileri sürülebilir; talebin kapsamı olayın koşullarına göre belirlenir." },
    ],
    howToTitle: "Beylikdüzü'nde İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "beylikduzu-kira-tahliye-avukati",
    name: "Beylikdüzü Kira ve Tahliye Avukatı",
    heroTitle: "Beylikdüzü Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Konut ve stant/işyeri tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemeleri İstanbul Büyükçekmece Adliyesi'ndedir.",
    metaTitle: "Beylikdüzü Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Beylikdüzü'nde kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Kira hukuku alanında Beylikdüzü'ndeki kiraya verenlere ve kiracılara danışmanlık verir.",
    highlightCards: [
      { title: "Site İçi Konut Kiraları", description: "Toplu konut projelerinde kira sözleşmesi süreçleri." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Toplu konut projelerinde kira sözleşmelerinin hazırlanması",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Planlı toplu konut projeleri ve yüksek yaşam standardıyla bilinen Beylikdüzü'nde, sahil bölgesine yakınlık gibi etmenler kira bedellerini semtten semte belirgin biçimde farklılaştırabilmektedir.",
      "Bu davalara İstanbul Büyükçekmece Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır; kira sözleşmesinin yazılı ve eksiksiz olması, uyuşmazlık halinde ispat açısından önem taşır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kiracı; kira borcunun ödenmemesi, geçerli bir taahhütname veya kiraya verenin ihtiyacı gibi sebeplerle tahliye edilebilir. Kira borcunda kiracıya ödeme için 30 gün süre verilir (TBK m.315); süre sonunda ödeme yapılmazsa tahliye yoluna gidilebilir. Hangi yolun izleneceği olayın niteliğine göre belirlenir." },
      { question: "Sahile yakın bir konutun kira bedeli nasıl tespit edilir?", answer: "Sahile yakın bir konutun kira bedeli, bilirkişi tarafından konum da dikkate alınarak bölgedeki emsal bedeller üzerinden tespit edilir. Dava sulh hukuk mahkemesinde görülür. Sahil bölgesine yakınlık gibi etmenler kira bedellerini semtten semte farklılaştırabildiğinden mevcut kira sözleşmesi ve emsal örnekler dosyaya sunulur." },
      { question: "Beylikdüzü'nde tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine göre değişir; birkaç aydan bir buçuk yıla kadar sürebilir. İstanbul Büyükçekmece Adliyesi bünyesindeki sulh hukuk mahkemelerinde görülen davalarda süreyi tebligat işlemleri, delillerin toplanması ve gerekirse bilirkişi incelemesi etkiler. Kira borcu veya taahhütname gibi belgeye dayalı hallerde farklı yollar izlenebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Rayiç bedel tespiti, mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Dava sulh hukuk mahkemesinde açılır; mahkeme bilirkişi aracılığıyla bölgedeki emsal kira bedellerini araştırır. Kira bedelinin uyarlanması da bu tespitin sonucuna göre değerlendirilir. Talep edilirken mevcut kira sözleşmesi ve ödeme kayıtları dosyaya sunulur." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname varsa tahliye doğrudan icra dairesi kanalıyla istenebilir. Taahhütnamenin geçerli olması ve tahliye talebinin usulüne uygun yapılması gerekir. Bu yol, mahkemede dava açılmasından farklı bir süreçtir; belgenin içeriği ve tarihi önceden incelenir." },
    ],
    howToTitle: "Beylikdüzü'nde Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "beylikduzu-vergi-avukati",
    name: "Beylikdüzü Vergi Avukatı",
    heroTitle: "Beylikdüzü Vergi Avukatı",
    heroSubtitle:
      "Vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Beylikdüzü Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Beylikdüzü'nde vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Beylikdüzü'ndeki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Etkinlik/Organizasyon Sektörü", description: "Fuarcılık ve etkinlik işletmelerine yönelik vergi uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Fuarcılık ve etkinlik organizasyonu işletmelerinde vergi incelemesi sürecinde danışmanlık",
      "Konut satışlarına ilişkin değer artış kazancı uyuşmazlıklarında destek",
    ],
    localParagraphs: [
      "TÜYAP çevresindeki fuarcılık ve etkinlik organizasyonu sektörünün yoğun olduğu Beylikdüzü'nde, dönemsel gelir beyanına ilişkin vergi incelemeleri ile bunlara bağlı ceza kesme işlemleri sık karşılaşılan konular arasındadır.",
      "Bu işlemlere karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir; ihbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Vergi ve ceza ihbarnamesine karşı dava açma süresi, tebliğden itibaren 30 gündür (İYUK m.7). Dava vergi mahkemesinde açılır; süre kaçırılırsa tarhiyat kesinleşir. Dava süresi dolmadan uzlaşma başvurusu da değerlendirilebilir; uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "Vergi davaları İstanbul vergi mahkemelerinde görülür. Vergi ve ceza ihbarnamesine karşı iptal davası bu mahkemelerde açılır ve dava açma süresi tebliğden itibaren 30 gündür (İYUK m.7). İdari aşamadaki işlemler ise vergi dairesi müdürlüğü nezdinde yürütülür." },
      { question: "Fuar dönemi gelirleri nasıl beyan edilmeli?", answer: "Fuar dönemi gelirleri, faaliyetin niteliğine göre ilgili vergilendirme dönemlerinde eksiksiz beyan edilmelidir. Dönemsel gelir beyanına ilişkin eksiklikler vergi incelemesine ve ceza kesilmesine yol açabilir. İhbarnameye karşı tebliğden itibaren 30 gün içinde vergi mahkemesinde dava açılabilir (İYUK m.7)." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma başvurusu dava hakkını ortadan kaldırmaz; uzlaşma sağlanamazsa kalan dava açma süresi korunur. Uzlaşma vergi idaresi nezdinde yürütülür ve taraflar anlaşırsa uyuşmazlık dava açılmadan sona erer. Anlaşma sağlanamazsa vergi mahkemesinde dava açılabilir; bu nedenle başvuru ile dava süresinin birlikte takip edilmesi gerekir." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Vergi ödeme emrine karşı, tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır. Ödeme emri, amme alacağının tahsili için gönderilir. Süre kaçırılırsa takip devam edebilir; bu nedenle tebliğ tarihi ve ödeme emrinin dayanağı doğru belirlenmelidir. Gerekirse ödeme emrine karşı iptal davası süresi içinde açılır." },
    ],
    howToTitle: "Beylikdüzü'nde Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "beylikduzu-borclar-hukuku-avukati",
    name: "Beylikdüzü Borçlar Hukuku Avukatı",
    heroTitle: "Beylikdüzü Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Etkinlik/organizasyon sözleşmesi uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; ticaret ve asliye hukuk mahkemeleri İstanbul Büyükçekmece Adliyesi'ndedir.",
    metaTitle: "Beylikdüzü Borçlar Hukuku Avukatı",
    metaDescription:
      "Beylikdüzü'nde sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Borçlar hukuku kapsamında Beylikdüzü'ndeki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık verir.",
    highlightCards: [
      { title: "Etkinlik/Stant Sözleşmeleri", description: "Fuar organizasyonu ve stant kiralama sözleşmelerinden doğan uyuşmazlıklar." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Kooperatif Sözleşmeleri", description: "Yapı kooperatifi ana sözleşmesinden doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fuar organizasyonu ve stant kiralama sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Kooperatif ortakları arası pay devri sözleşmelerinden doğan uyuşmazlıklar",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "TÜYAP çevresindeki yoğun etkinlik ve organizasyon sektörü nedeniyle Beylikdüzü'nde stant kiralama ve hizmet sözleşmelerinden doğan uyuşmazlıklar sık karşılaşılan dava türleri arasındadır.",
      "Bu davalar İstanbul Büyükçekmece Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Fuar organizatörü taahhüdünü yerine getirmezse ne yapılabilir?", answer: "Fuar organizatörü taahhüdünü yerine getirmezse sözleşmeden dönme, tazminat veya ifa davası gibi hukuki yollara başvurulabilir. Hangi yolun seçileceği sözleşme hükümlerine ve ihlalin niteliğine göre belirlenir. Stant kiralama veya hizmet sözleşmesi, ödeme belgeleri ve yazışmalar dayanak oluşturur." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Ticari alacak davası, niteliğine göre asliye ticaret mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür. Ticari nitelikteki bazı alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması dava şartı olabilir. Dosyaya sözleşme, fatura ve yazışmalar gibi alacağı gösteren belgeler eklenir." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, dava öncesi arabuluculuk her uyuşmazlıkta şart değildir; yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Şartın aranıp aranmadığı uyuşmazlığın konusuna göre belirlenir. Zorunlu olduğu hallerde arabuluculuğa başvurulmadan açılan dava usulden reddedilebilir. Bu nedenle uyuşmazlığın türü baştan doğru nitelendirilmelidir." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse alacak talep edilemez; ileri sürmezse talep edilebilir. Zamanaşımı mahkemece kendiliğinden dikkate alınmaz, borçlunun itirazına bağlıdır. Bu nedenle alacağın doğum tarihi ve zamanaşımını kesen işlemler dosyada dikkatle incelenir. Sözleşme, fatura ve yazışmalar bu incelemeye esas alınır." },
      { question: "Kooperatif ana sözleşmesine aykırı karar alınırsa ne yapılabilir?", answer: "Kooperatif ana sözleşmesine aykırı karar alınırsa karara karşı iptal davası açılabilir. Kararın hangi hükme aykırı olduğu ana sözleşme ve toplantı tutanağı üzerinden belirlenir. Kooperatif ortakları arası pay devri ve ortaklık haklarına ilişkin uyuşmazlıklarda bu belgeler önem taşır." },
    ],
    howToTitle: "Beylikdüzü'nde Alacak Davası Süreci Nasıl İşler?",
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

export const beylikduzuServices: PseoService[] = [...beylikduzuBaseServices, beylikduzuMiras];
