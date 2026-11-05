import type { PseoService } from "./types";
import { basaksehirMiras } from "./miras/basaksehirMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const basaksehirBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "basaksehir-avukat",
    name: "Başakşehir Avukat",
    heroTitle: "Başakşehir Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, Avrupa'nın en büyük hastane komplekslerinden birine ve Bahçeşehir/Kayaşehir gibi planlı uydu kentlere ev sahipliği yapan Başakşehir'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Küçükçekmece Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Başakşehir Avukat | Hukuki Danışmanlık",
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
      { question: "Başakşehir'deki davalara hangi adliye bakıyor?", answer: "Başakşehir, İstanbul Küçükçekmece Adliyesi'nin yargı çevresinde yer aldığından davalara bu adliye bakar. İlçedeki hukuki uyuşmazlıklar bu adliyede, vergisel işlemler ise Başakşehir Vergi Dairesi Müdürlüğü nezdinde yürütülür; vergi davaları İstanbul vergi mahkemelerinde görülür. Hukuk ve ceza yargılaması da bu adliye bünyesinde yürütülür." },
      { question: "Randevu nasıl alınır?", answer: "Randevu için WhatsApp veya telefon üzerinden iletişime geçilir ve konu kısaca paylaşılır; ardından uygun bir görüşme günü belirlenir. Danışmanlık görüşmesi ücret karşılığı yapılır ve hukuki durum değerlendirilir. Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir ve süreç başlatılır." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve temsil hizmeti verilir. Bu kapsamda boşanma ve velayet, işçilik alacakları, icra takibi, idari işlemlere karşı iptal davaları ve vergi uyuşmazlıkları gibi konular yürütülür. Ayrıntılar randevuda paylaşılır." },
      { question: "Büro Başakşehir'de mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Başakşehir bölgesindeki müvekkillere de aynı kapsamda hizmet verilir. Görüşmeler yüz yüze veya çevrim içi planlanabilir; ilk iletişim WhatsApp ya da telefonla kurulur. Dava ve işlemler yetkili adliye ve idari merciler nezdinde yürütülür." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Danışmanlık görüşmesi ücret karşılığı yapılır ve ücret dosyanın niteliğine göre değişir. Uyuşmazlığın türü, belge yoğunluğu ve gerekecek takip süreci gibi unsurlar dikkate alınır. Ücret ve kapsam bilgisi randevu sırasında paylaşılır; temsil kararı alınırsa vekalet düzenlenir." },
      { question: "Yeni teslim edilen sitelerle ilgili destek alınabilir mi?", answer: "Evet, yeni teslim edilen sitelerde tapu ve teslim uyuşmazlıklarında danışmanlık sağlanır. Teslim gecikmesi, inşaat ayıbı ve kat mülkiyetine geçiş gibi konular bu kapsamdadır. Süreçte satış sözleşmesi, teslim tutanağı ve tapu kaydı incelenir; uyuşmazlık niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde görülür." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Görüşmeler tercihe göre yüz yüze veya çevrim içi olarak planlanabilir. İlk iletişim WhatsApp ya da telefonla kurulur, ardından görüşme günü belirlenir. Hangi yöntem seçilirse seçilsin hukuki durum değerlendirilir; temsil kararı alınırsa vekalet düzenlenir ve belgeler birlikte derlenir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Gözaltı halinde vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmelidir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından önem taşır. Müdafi, ifade alma ve soruşturma aşamalarında şüpheliye eşlik eder." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, dosyanın seyri hakkında süreç boyunca bilgi verilir. Temsil sürecinde gelişmeler müvekkille paylaşılır; mahkeme ve idari merciler nezdindeki işlemler, duruşma tarihleri ve yeni evraklar takip edilerek bildirilir. Bu takip, vekalet düzenlendikten sonra yürütülen dosya yönetiminin bir parçasıdır." },
      { question: "Küçükçekmece Adliyesi'ne Başakşehir'den ulaşım nasıl?", answer: "Küçükçekmece Adliyesi'ne Başakşehir'den ulaşım M3 metro hattı ve TEM otoyolu bağlantıları üzerinden sağlanabilir. Başakşehir, İstanbul Küçükçekmece Adliyesi'nin yargı çevresinde yer aldığı için ilçedeki davalar bu adliyede görülür. Duruşma gününden önce mahkeme ve saat bilgisinin teyit edilmesi önerilir." },
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
    metaTitle: "Başakşehir Boşanma Avukatı | Velayet ve Nafaka",
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
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Boşanma davası için İstanbul Küçükçekmece Adliyesi'ndeki aile mahkemesine başvurulur. Yetki TMK m.168 uyarınca eşlerden birinin yerleşim yeri mahkemesi veya eşlerin en son altı aydan beri birlikte oturdukları yer mahkemesidir. Anlaşmalı boşanmada en az 1 yıllık evlilik ve duruşmada iki eşin birlikte beyanı aranır (TMK m.166/3)." },
      { question: "Kredili konutun mal paylaşımı nasıl yapılır?", answer: "Evlilik süresince edinilmişse konut katılma alacağı hesabına dahil edilir; kredi borcu da hesaba katılır. Başakşehir gibi yeni sitelerin yoğun olduğu bölgelerde dairenin edinilme tarihi, değeri ve ödenen kredi taksitleri mal rejimi tasfiyesinde değerlendirilir. Taraflar anlaşamazsa hesaplama mahkemece yapılır." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Çocuk belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir. Velayet düzenlenirken esas ölçüt çocuğun yararıdır; çocuğun yaşı ve gelişim düzeyi, görüşünün ne ölçüde değerlendirileceğini etkiler. Mahkeme, tarafların beyanlarını dosyadaki delillerle birlikte değerlendirir. Bu değerlendirmede velayetin kime verileceği ve kişisel ilişki düzeni de gözetilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Nafaka miktarı, tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilerek belirlenir. Hakim, nafaka yükümlüsünün ödeme gücünü ve nafaka alacaklısının ihtiyaçlarını dosyadaki delillerle ölçer. Koşullar değişirse nafakanın artırılması, azaltılması veya kaldırılması talep edilebilir. Nafaka çocuğun giderlerine yönelik olabileceği gibi eşin ihtiyacına da ilişkin olabilir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir. Barışma halinde davanın sürdürülmesine gerek kalmaz; taraflar bu iradelerini mahkemeye bildirir. Bu yol, boşanma kararı verilmeden önce açıktır ve davanın seyri tarafların açıklamalarına göre mahkemece yürütülür. Anlaşmalı boşanma için ise protokolün eksiksiz olması önem taşır." },
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
    metaTitle: "Başakşehir Ceza Avukatı | Müdafilik",
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
      { question: "Başakşehir'de bir ceza davası hangi adliyede görülür?", answer: "Ceza davaları İstanbul Küçükçekmece Adliyesi'nde görülür. Soruşturma aşamasında şüpheli müdafiyle birlikte ifade verebilir; kovuşturma aşamasına geçildiğinde yargılama bu adliye bünyesinde yürütülür. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamalar açısından önem taşır." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "İfade müdafi bulunmadan da alınabilir; ancak şüpheli veya sanığın müdafi bulundurma hakkı vardır ve bu hakkın kullanılması önerilir. Müdafi, ifade sırasında hakların korunmasına ve dosya içeriğinin takip edilmesine yardımcı olur. Gözaltına alınan kişinin müdafi ile görüşme hakkı gözaltı anından itibaren doğar." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, kovuşturmaya yer olmadığı kararına karşı sulh ceza hakimliğine itiraz edilebilir. İtiraz süresi kararın tebliğinden itibaren 15 gündür. İtiraz dilekçesinde kararın hangi yönlerden hatalı olduğu ve soruşturmada eksik kalan hususların neler olduğu belirtilir. Karar kesinleştiğinde soruşturma sona erer; itirazın kabulü halinde soruşturmanın devamı sağlanabilir." },
      { question: "Temyiz kanun yoluna hangi kararlar için başvurulur?", answer: "Temyiz, kanunda sayılan ağır suçlara ilişkin kararlar için başvurulabilen kanun yoludur; istinaf incelemesinden sonra temyize açık bırakılan kararlar da bu kapsamdadır. Kararın temyize tabi olup olmadığı dosyanın niteliğine ve verilen karara göre belirlenir; kanun yolu süreleri kararın tefhim veya tebliğ tarihine göre işler." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Uzlaşma sağlanamazsa yargılama kaldığı yerden devam eder. Uzlaşmaya tabi suçlarda uzlaştırma süreci sonuçsuz kalırsa soruşturma veya kovuşturma olağan akışında yürütülür. Uzlaşma sürecinde taraflar bir araya getirilir; teklif kabul edilmezse savunma ve delil sunma hakları aynen devam eder." },
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
    metaTitle: "Başakşehir Gayrimenkul Avukatı | Tapu ve Kira",
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
      { question: "Site teslimi gecikirse alıcının hakları nelerdir?", answer: "Site teslimi gecikirse sözleşmede öngörülen gecikme cezası talep edilebilir, gerekirse sözleşmeden dönme hakkı kullanılabilir. Gecikmenin süresi ve sebebi satış veya inşaat sözleşmesi hükümleriyle birlikte değerlendirilir. Teslim tarihi, ödeme belgeleri ve yazışmalar dava veya ihtar aşamasında dayanak oluşturur." },
      { question: "Kat irtifakından kat mülkiyetine geçiş ne zaman olur?", answer: "Kat irtifakından kat mülkiyetine geçiş, yapı kullanma izin belgesi alındıktan sonra talep üzerine gerçekleştirilir. Yeni teslim edilen sitelerde tapu tescili bu geçişe bağlıdır. Geçişin gecikmesi halinde başvuru süreci ve belgeler incelenir; uyuşmazlık çıkarsa tescile ilişkin dava açılabilir." },
      { question: "Başakşehir'de gayrimenkul davası hangi mahkemede görülür?", answer: "Gayrimenkul davası, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Küçükçekmece Adliyesi bünyesinde görülür. Kira ve tahliye gibi uyuşmazlıklar sulh hukuk mahkemesinde, tapu iptali ve tescil gibi davalar ise asliye hukuk mahkemesinde ele alınabilir. Dosyaya tapu kaydı ve sözleşme gibi belgeler eklenir." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Tapu iptal ve tescil davası, hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tarafından açılabilir. Tescilin dayanağının geçersiz olduğu veya hakkın tapuya doğru yansımadığı iddia edilebilir. Dava taşınmazın niteliğine göre görevli mahkemede görülür ve dosyaya tapu kaydı ile dayanak belgeler eklenir." },
      { question: "Yeni sitede inşaat ayıbı tespit edilirse ne yapılmalı?", answer: "Yeni sitede inşaat ayıbı tespit edilirse bilirkişi incelemesiyle ayıp tespit ettirilip bedel indirimi veya giderim talep edilebilir. Ayıbın niteliği ve ortaya çıktığı tarih sözleşme ile teslim tutanağı birlikte değerlendirilerek belirlenir. Fotoğraf ve yazışmalar gibi deliller önceden derlenmeli; talep görevli mahkemede ileri sürülmelidir." },
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
    metaTitle: "Başakşehir İcra Avukatı | İcra Takibi ve Haciz",
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
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "İcra takibi sözleşme, senet, fatura veya mahkeme ilamı gibi alacağı gösteren belgelerle başlatılabilir. Belgelerin alacağın miktarını ve dayanağını açıkça göstermesi önemlidir. Takip talebi bu belgelere dayanılarak yapılır; borçluya ödeme emri gönderilir ve süreç icra dairesi nezdinde yürütülür." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "İcra takibinde ödeme emrine itiraz süresi, tebliğden itibaren 7 gündür (İİK m.62). Bu süre içinde icra dairesine yapılan itiraz takibi durdurur. Süre kaçırılırsa takip kesinleşebilir ve haciz aşamasına geçilebilir; bu nedenle tebliğ tarihinin doğru tespit edilmesi önemlidir." },
      { question: "Site aidat borcu ödenmezse ne yapılabilir?", answer: "Site aidat borcu ödenmezse aidat alacağı için icra takibi başlatılabilir veya dava yoluyla tahsil edilebilir. Alacak, yönetim planı, karar defteri ve borç dökümüyle belgelendirilir. Ödeme emrine itiraz süresi 7 gündür (İİK m.62); itiraz edilirse itirazın iptali veya kaldırılması yoluna gidilebilir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Haciz, kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir. Borçlunun mal varlığına yönelik bu işlem, takibin kesinleşmesinden sonra alacağın tahsili amacıyla yapılır. Kanunen haczedilemeyen mallar ile maaş gibi gelirlerde kanundaki sınırlamalar ayrıca gözetilir. Haciz işlemi icra dairesi eliyle yürütülür ve borçlu ile alacaklıya bilgi verilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Borçlu ödeme yapmaz ve itiraz etmezse takip kesinleşir; ardından haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür. Haczedilen malın satışından elde edilen bedel alacaklıya aktarılır. Borçlu itiraz ederse itirazın iptali veya kaldırılması gibi ek hukuki yollar gündeme gelir." },
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
    metaTitle: "Başakşehir İdare Avukatı | İptal ve Tam Yargı",
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
      { question: "Kamu hastanesi personelinin nakil talebi nasıl değerlendirilir?", answer: "Kamu hastanesi personelinin nakil talebi, ilgili mevzuattaki kriterlere göre idare tarafından değerlendirilir; ret halinde dava yoluna gidilebilir. Ret işlemine karşı idare mahkemesinde genel kural olarak tebliğden itibaren 60 gün içinde iptal davası açılır (İYUK m.7). Başvuru dilekçesi ve ret yazısı dosyaya eklenir." },
      { question: "Disiplin cezasına itiraz süresi ne kadardır?", answer: "Disiplin cezasına karşı tebliğ tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılabilir. İdari davalarda genel süre 60 gündür (İYUK m.7). Ceza kararı, savunma yazıları ve tebliğ belgesi dava dosyasına eklenir; disiplin kuruluna itiraz gibi ön başvuru yolları varsa süreyi etkileyebilir." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İmar planına karşı dava, ilan tarihinden itibaren yasal süre içinde idare mahkemesinde açılmalıdır; idari davalarda genel süre 60 gündür (İYUK m.7). Plan değişikliğinden etkilenen taşınmaz malikleri veya ilgili kişiler dava açabilir. Sürenin kaçırılmaması için ilan tarihi ve usulü doğru tespit edilmelidir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, idari para cezasına karşı yasal süresinde idare mahkemesinde dava açılabilir. İdari davalarda genel dava açma süresi, işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Ceza tutanağı ve tebliğ belgeleri dosyaya eklenir; iptal talebi hukuka aykırılık gerekçeleriyle birlikte sunulur." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde iptal davası açılabilir. Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Başvuru dosyası, ret yazısı ve tebliğ tarihini gösteren belgeler dava açılmadan önce derlenir." },
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
    metaTitle: "Başakşehir İş Hukuku Avukatı | İşe İade",
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
      { question: "Sağlık çalışanının nöbet ücreti nasıl hesaplanır?", answer: "Sağlık çalışanının nöbet ücreti, nöbet saatleri ve ilgili mevzuat veya sözleşme hükümlerine göre hesaplanır. Kamu ve özel sektör çalışanları için uygulanacak kurallar farklı olabilir. Nöbet çizelgeleri, bordrolar ve ödeme kayıtları hesabın dayanağını oluşturur; özel sektör alacak uyuşmazlıkları iş mahkemesinde ileri sürülebilir." },
      { question: "Özel sektörde çalışan sağlık personelinin fazla mesai hakkı var mı?", answer: "Evet, özel sektörde çalışan sağlık personeline iş kanunu kapsamındaki genel fazla mesai kuralları uygulanır. Yasal haftalık çalışma süresini aşan çalışma fazla mesai olarak değerlendirilir ve ücrete yansıtılır. Vardiya ve nöbet çizelgeleri ile bordrolar alacağın hesabında esas alınır; uyuşmazlık iş mahkemesinde görülür." },
      { question: "Başakşehir'de iş mahkemesi nerededir?", answer: "Bölgedeki iş davalarına İstanbul Küçükçekmece Adliyesi bünyesindeki iş mahkemeleri bakar. İşe iade ve işçilik alacağı davaları, arabuluculukta anlaşma sağlanamazsa bu mahkemelerde görülür. İşe iade için fesihten itibaren 1 ay içinde arabuluculuğa başvurulur; son tutanaktan itibaren 2 hafta içinde dava açılır." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "İşe iade sürecinin toplam süresi dosyaya göre değişir. Süreç, fesihten itibaren 1 ay içinde arabuluculuğa başvuru ile başlar; anlaşma sağlanamazsa son tutanaktan itibaren 2 hafta içinde dava açılır. İş K. m.18 uyarınca en az 30 işçi ve 6 ay kıdem şartı aranır." },
      { question: "İş kazası geçiren sağlık çalışanı ne yapmalı?", answer: "İş kazası geçiren sağlık çalışanı olayı derhal SGK'ya bildirmeli, tedavi ve tazminat sürecini başlatmalıdır. Kaza tutanağı, sağlık raporları ve tanık bilgileri delil olarak saklanır. Maddi ve manevi tazminat talepleri iş mahkemesinde ileri sürülebilir; talebin kapsamı olayın koşullarına göre belirlenir." },
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
    metaTitle: "Başakşehir Kira ve Tahliye Avukatı | Tahliye",
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
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kiracı; kira borcunun ödenmemesi, geçerli bir taahhütname veya kiraya verenin ihtiyacı gibi sebeplerle tahliye edilebilir. Kira borcunda kiracıya ödeme için 30 gün süre verilir (TBK m.315); süre sonunda ödeme yapılmazsa tahliye yoluna gidilebilir. Hangi yolun izleneceği olayın niteliğine göre belirlenir." },
      { question: "Yeni teslim edilen bir konutta kira sözleşmesi ne zaman yapılmalı?", answer: "Yeni teslim edilen bir konutta kira sözleşmesinin, teslim tutanağı düzenlendikten ve taşınmazın kullanıma hazır olduğu teyit edildikten sonra yapılması önerilir. Tutanakta taşınmazın durumu ve varsa eksikler belirtilir. Bu kayıt, ileride kira bedeli veya tahliye uyuşmazlığı çıkarsa ispat açısından önem taşır." },
      { question: "Başakşehir'de tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine göre değişir; birkaç aydan bir buçuk yıla kadar sürebilir. İstanbul Küçükçekmece Adliyesi bünyesindeki sulh hukuk mahkemelerinde görülen davalarda süreyi tebligat işlemleri, delillerin toplanması ve gerekirse bilirkişi incelemesi etkiler. Kira borcu veya taahhütname gibi belgeye dayalı hallerde farklı yollar izlenebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Rayiç bedel tespiti, mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Dava sulh hukuk mahkemesinde açılır; mahkeme bilirkişi aracılığıyla bölgedeki emsal kira bedellerini araştırır. Kira bedelinin uyarlanması da bu tespitin sonucuna göre değerlendirilir. Talep edilirken mevcut kira sözleşmesi ve ödeme kayıtları dosyaya sunulur." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname varsa tahliye doğrudan icra dairesi kanalıyla istenebilir. Taahhütnamenin geçerli olması ve tahliye talebinin usulüne uygun yapılması gerekir. Bu yol, mahkemede dava açılmasından farklı bir süreçtir; belgenin içeriği ve tarihi önceden incelenir." },
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
    metaTitle: "Başakşehir Vergi Avukatı | Uzlaşma ve Dava",
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
      { question: "Yeni kurulan bir işletme ne zaman vergi incelemesine tabi olabilir?", answer: "Yeni kurulan bir işletme, faaliyete başlama süresinden bağımsız olarak vergi idaresi gerekli gördüğünde incelemeye tabi tutulabilir. İnceleme sonucunda tarhiyat veya ceza kesilirse ihbarnamenin tebliğinden itibaren 30 gün içinde vergi mahkemesinde dava açılabilir (İYUK m.7). Kayıt düzeninin eksiksiz tutulması inceleme sürecinde önem taşır." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Vergi ve ceza ihbarnamesine karşı dava açma süresi, tebliğden itibaren 30 gündür (İYUK m.7). Dava vergi mahkemesinde açılır; süre kaçırılırsa tarhiyat kesinleşir. Dava süresi dolmadan uzlaşma başvurusu da değerlendirilebilir; uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "Vergi davaları İstanbul vergi mahkemelerinde görülür. Vergi ve ceza ihbarnamesine karşı iptal davası bu mahkemelerde açılır ve dava açma süresi tebliğden itibaren 30 gündür (İYUK m.7). İdari aşamadaki işlemler ise vergi dairesi müdürlüğü nezdinde yürütülür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma başvurusu dava hakkını ortadan kaldırmaz; uzlaşma sağlanamazsa kalan dava açma süresi korunur. Uzlaşma vergi idaresi nezdinde yürütülür ve taraflar anlaşırsa uyuşmazlık dava açılmadan sona erer. Anlaşma sağlanamazsa vergi mahkemesinde dava açılabilir; bu nedenle başvuru ile dava süresinin birlikte takip edilmesi gerekir." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Vergi ödeme emrine karşı, tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır. Ödeme emri, amme alacağının tahsili için gönderilir. Süre kaçırılırsa takip devam edebilir; bu nedenle tebliğ tarihi ve ödeme emrinin dayanağı doğru belirlenmelidir. Gerekirse ödeme emrine karşı iptal davası süresi içinde açılır." },
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
      { question: "Satış vaadi sözleşmesine dayalı tapu iptal-tescil davası nasıl açılır?", answer: "Sözleşme şartları yerine getirilmezse noter onaylı satış vaadi sözleşmesine dayanılarak tapu iptal ve tescil davası açılabilir. Sözleşmenin geçerliliği, bedelin ödenip ödenmediği ve satıcının yükümlülüğünü yerine getirmediği belgelerle ortaya konulur. Dava niteliğine göre görevli mahkemede, İstanbul Küçükçekmece Adliyesi bünyesinde görülür." },
      { question: "Müteahhit taahhüdünü yerine getirmezse ne yapılabilir?", answer: "Müteahhit taahhüdünü yerine getirmezse sözleşmeden dönme, tazminat veya ifa davası gibi hukuki yollara başvurulabilir. Hangi yolun seçileceği sözleşme hükümlerine, gecikmenin veya eksikliğin niteliğine ve zarara göre belirlenir. Sözleşme metni, ödeme belgeleri ve yazışmalar bu değerlendirmenin dayanağını oluşturur." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Ticari alacak davası, niteliğine göre asliye ticaret mahkemesinde, İstanbul Küçükçekmece Adliyesi bünyesinde görülür. Ticari nitelikteki bazı alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması dava şartı olabilir. Dosyaya sözleşme, fatura ve yazışmalar gibi alacağı gösteren belgeler eklenir." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, dava öncesi arabuluculuk her uyuşmazlıkta şart değildir; yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Şartın aranıp aranmadığı uyuşmazlığın konusuna göre belirlenir. Zorunlu olduğu hallerde arabuluculuğa başvurulmadan açılan dava usulden reddedilebilir. Bu nedenle uyuşmazlığın türü baştan doğru nitelendirilmelidir." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse alacak talep edilemez; ileri sürmezse talep edilebilir. Zamanaşımı mahkemece kendiliğinden dikkate alınmaz, borçlunun itirazına bağlıdır. Bu nedenle alacağın doğum tarihi ve zamanaşımını kesen işlemler dosyada dikkatle incelenir. Sözleşme, fatura ve yazışmalar bu incelemeye esas alınır." },
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

export const basaksehirServices: PseoService[] = [...basaksehirBaseServices, basaksehirMiras];
