import type { PseoService } from "./types";
import { bakirkoyMiras } from "./miras/bakirkoyMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const bakirkoyBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "bakirkoy-avukat",
    name: "Bakırköy Avukat",
    heroTitle: "Bakırköy Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, İstanbul Bakırköy Adliyesi'nin bizzat bulunduğu, köklü ve sahil şeridine sahip Bakırköy'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır.",
    metaTitle: "Bakırköy Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Bakırköy'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İstanbul'un batı yakasındaki altı ilçeye hizmet veren adliyenin bizzat bulunduğu Bakırköy'de ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Toplu yapı/site ve konut uyuşmazlıklarının takibi." },
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
      "Toplu yapı/site ve konut ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "İstanbul'un batı yakasındaki altı ilçenin (Bakırköy, Bahçelievler, Bağcılar, Esenler, Güngören, Zeytinburnu) tüm adli işlerine bakan İstanbul Bakırköy Adliyesi, bizzat Bakırköy sınırları içinde yer almaktadır; bu da ilçe sakinlerine adliyeye erişim açısından belirgin bir yakınlık sağlamaktadır.",
      "İlçedeki hukuki uyuşmazlıklar İstanbul Bakırköy Adliyesi'nde, vergisel işlemler ise Bakırköy Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Bakırköy Adliyesi tam olarak nerede?", answer: "Bakırköy Adliyesi, Bakırköy ilçe sınırları içinde yer alan ve İstanbul'un batı yakasındaki altı ilçeye (Bakırköy, Bahçelievler, Bağcılar, Esenler, Güngören, Zeytinburnu) hizmet veren merkezi bir adliyedir. Bu yakınlık, ilçe sakinlerinin adliyeye erişimini ve dosya takibini pratik açıdan kolaylaştırır." },
      { question: "Randevu nasıl alınır?", answer: "Randevu için WhatsApp veya telefon üzerinden iletişime geçilir ve konu kısaca paylaşılır; ardından uygun bir görüşme günü belirlenir. Danışmanlık görüşmesi ücret karşılığı yapılır ve hukuki durum değerlendirilir. Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir ve süreç başlatılır." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve temsil hizmeti verilir. Bu kapsamda boşanma ve velayet, işçilik alacakları, icra takibi, idari işlemlere karşı iptal davaları ve vergi uyuşmazlıkları gibi konular yürütülür. Ayrıntılar randevuda paylaşılır." },
      { question: "Büro Bakırköy'de mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Bakırköy bölgesindeki müvekkillere de aynı kapsamda hizmet verilir. Görüşmeler yüz yüze veya çevrim içi planlanabilir; ilk iletişim WhatsApp ya da telefonla kurulur. Dava ve işlemler yetkili adliye ve idari merciler nezdinde yürütülür." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Danışmanlık görüşmesi ücret karşılığı yapılır ve ücret dosyanın niteliğine göre değişir. Uyuşmazlığın türü, belge yoğunluğu ve gerekecek takip süreci gibi unsurlar dikkate alınır. Ücret ve kapsam bilgisi randevu sırasında paylaşılır; temsil kararı alınırsa vekalet düzenlenir." },
      { question: "Ataköy gibi büyük sitelerde yönetim uyuşmazlıklarında destek alınabilir mi?", answer: "Evet, Ataköy gibi büyük sitelerde toplu yapı yönetimi ve site aidatı uyuşmazlıklarında danışmanlık sağlanır. Çok sayıda blok ve ortak alandan oluşan sitelerde Kat Mülkiyeti Kanunu'nun toplu yapılara ilişkin hükümleri ile yönetim planı esas alınır. Uyuşmazlıklar niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde görülür." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Görüşmeler tercihe göre yüz yüze veya çevrim içi olarak planlanabilir. İlk iletişim WhatsApp ya da telefonla kurulur, ardından görüşme günü belirlenir. Hangi yöntem seçilirse seçilsin hukuki durum değerlendirilir; temsil kararı alınırsa vekalet düzenlenir ve belgeler birlikte derlenir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Gözaltı halinde vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmelidir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından önem taşır. Müdafi, ifade alma ve soruşturma aşamalarında şüpheliye eşlik eder." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, dosyanın seyri hakkında süreç boyunca bilgi verilir. Temsil sürecinde gelişmeler müvekkille paylaşılır; mahkeme ve idari merciler nezdindeki işlemler, duruşma tarihleri ve yeni evraklar takip edilerek bildirilir. Bu takip, vekalet düzenlendikten sonra yürütülen dosya yönetiminin bir parçasıdır." },
      { question: "Duruşma günü adliyede nereye başvurulur?", answer: "Duruşma salonu ve dosya numarası UYAP Vatandaş Portalı veya adliyedeki bilgi bankosundan öğrenilebilir. Duruşma gününden önce dosya numarası, mahkeme adı ve saat bilgisinin teyit edilmesi, adliyede zaman kaybını önler. Avukat tarafından takip edilen dosyalarda duruşma bilgileri müvekkille paylaşılır." },
    ],
    howToTitle: "Bakırköy'de Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Bakırköy Avukat (Genel)",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "bakirkoy-bosanma-avukati",
    name: "Bakırköy Boşanma Avukatı",
    heroTitle: "Bakırköy Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; aile mahkemeleri bizzat Bakırköy'de bulunan İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Bakırköy Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Bakırköy'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Aile hukuku alanında Bakırköy'deki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlar.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Site/Konut Payı", description: "Ataköy gibi büyük sitelerdeki konutların mal rejiminde değerlendirilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Site içindeki konutun mal rejimi tasfiyesinde değerlendirilmesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Köklü bir yerleşim geçmişine ve Ataköy gibi büyük ölçekli site projelerine sahip Bakırköy'de, boşanma davalarında evlilik birliği içinde edinilen sitedeki konutların katılma alacağı hesabına nasıl dahil edileceği önemli bir konu olabilmektedir.",
      "Boşanma, velayet ve nafaka davalarına, bizzat ilçe sınırları içinde bulunan İstanbul Bakırköy Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Sitedeki konutun mal paylaşımı nasıl yapılır?", answer: "Evlilik süresince edinilmişse sitedeki konut katılma alacağı hesabına dahil edilir; konut kredisi borcu varsa bu da hesaba katılır. Mal rejimi tasfiyesinde konutun edinildiği tarih, değeri ve ödenen kredi taksitleri değerlendirilir. Hesaplama genellikle bilirkişi incelemesiyle yapılır." },
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Boşanma davası için İstanbul Bakırköy Adliyesi'ndeki aile mahkemesine başvurulur. Yetki TMK m.168 uyarınca eşlerden birinin yerleşim yeri mahkemesi veya eşlerin en son altı aydan beri birlikte oturdukları yer mahkemesidir. Anlaşmalı boşanmada en az 1 yıllık evlilik ve duruşmada iki eşin birlikte beyanı aranır (TMK m.166/3)." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Çocuk belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir. Velayet düzenlenirken esas ölçüt çocuğun yararıdır; çocuğun yaşı ve gelişim düzeyi, görüşünün ne ölçüde değerlendirileceğini etkiler. Mahkeme, tarafların beyanlarını dosyadaki delillerle birlikte değerlendirir. Bu değerlendirmede velayetin kime verileceği ve kişisel ilişki düzeni de gözetilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Nafaka miktarı, tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilerek belirlenir. Hakim, nafaka yükümlüsünün ödeme gücünü ve nafaka alacaklısının ihtiyaçlarını dosyadaki delillerle ölçer. Koşullar değişirse nafakanın artırılması, azaltılması veya kaldırılması talep edilebilir. Nafaka çocuğun giderlerine yönelik olabileceği gibi eşin ihtiyacına da ilişkin olabilir." },
      { question: "Konut kredisi olan bir sitedeki daire nasıl paylaşılır?", answer: "Kredi borcu ve dairenin güncel değeri birlikte değerlendirilerek katılma alacağı hesaplanır. Evlilik içinde ödenen kredi taksitleri ile dairenin edinilme şekli ve tarihi bu hesapta dikkate alınır. Taraflar anlaşamazsa değerleme ve hesaplama mahkemece bilirkişi aracılığıyla yapılır." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir. Barışma halinde davanın sürdürülmesine gerek kalmaz; taraflar bu iradelerini mahkemeye bildirir. Bu yol, boşanma kararı verilmeden önce açıktır ve davanın seyri tarafların açıklamalarına göre mahkemece yürütülür. Anlaşmalı boşanma için ise protokolün eksiksiz olması önem taşır." },
    ],
    howToTitle: "Bakırköy'de Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "bakirkoy-ceza-avukati",
    name: "Bakırköy Ceza Avukatı",
    heroTitle: "Bakırköy Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; nöbetçi savcılık ve kovuşturma bizzat Bakırköy'deki adliyede yürütülür.",
    metaTitle: "Bakırköy Ceza Avukatı | Müdafilik",
    metaDescription:
      "Bakırköy'de soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. Ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında Bakırköy'deki müvekkillerine müdafilik yapar.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Nöbetçi Savcılık Süreci", description: "Adliyenin bizzat bulunmasından doğan hızlı işlem avantajı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Nöbetçi savcılık ve sulh ceza hakimliği süreçlerinde acil müdahale",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "Adliyenin bizzat ilçe sınırları içinde bulunması, Bakırköy'de gözaltı ve nöbetçi savcılık süreçlerinde müdafinin dosyaya ve şüpheliye erişimini pratik açıdan kolaylaştırmaktadır.",
      "Kovuşturma aşamasındaki davalar İstanbul Bakırköy Adliyesi'nde görülür. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından belirleyicidir.",
    ],
    faqs: [
      { question: "Bakırköy'de nöbetçi savcılığa nasıl ulaşılır?", answer: "Nöbetçi savcılık işlemleri, İstanbul Bakırköy Adliyesi bünyesindeki nöbetçi Cumhuriyet savcılığı üzerinden yürütülür. Adliyenin ilçe sınırları içinde bulunması, gözaltı ve nöbetçi savcılık süreçlerinde müdafinin dosyaya ve şüpheliye erişimini pratik açıdan kolaylaştırır. Gözaltında müdafi ile görüşme hakkı gözaltı anından itibaren doğar." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "İfade müdafi bulunmadan da alınabilir; ancak şüpheli veya sanığın müdafi bulundurma hakkı vardır ve bu hakkın kullanılması önerilir. Müdafi, ifade sırasında hakların korunmasına ve dosya içeriğinin takip edilmesine yardımcı olur. Gözaltına alınan kişinin müdafi ile görüşme hakkı gözaltı anından itibaren doğar." },
      { question: "Sulh ceza hakimliği kararlarına nereden itiraz edilir?", answer: "İtiraz, kararı veren hakimliğin bağlı olduğu adliyedeki diğer bir sulh ceza hakimliğine yapılır. Tutukluluğa itiraz süresi 7 gündür; kovuşturmaya yer olmadığı kararına itiraz süresi ise 15 gündür. İtiraz dilekçesinde kararın hangi yönlerden hukuka aykırı olduğu gerekçelendirilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, kovuşturmaya yer olmadığı kararına karşı sulh ceza hakimliğine itiraz edilebilir. İtiraz süresi kararın tebliğinden itibaren 15 gündür. İtiraz dilekçesinde kararın hangi yönlerden hatalı olduğu ve soruşturmada eksik kalan hususların neler olduğu belirtilir. Karar kesinleştiğinde soruşturma sona erer; itirazın kabulü halinde soruşturmanın devamı sağlanabilir." },
      { question: "Temyiz kanun yoluna hangi kararlar için başvurulur?", answer: "Temyiz, kanunda sayılan ağır suçlara ilişkin kararlar için başvurulabilen kanun yoludur; istinaf incelemesinden sonra temyize açık bırakılan kararlar da bu kapsamdadır. Kararın temyize tabi olup olmadığı dosyanın niteliğine ve verilen karara göre belirlenir; kanun yolu süreleri kararın tefhim veya tebliğ tarihine göre işler." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Uzlaşma sağlanamazsa yargılama kaldığı yerden devam eder. Uzlaşmaya tabi suçlarda uzlaştırma süreci sonuçsuz kalırsa soruşturma veya kovuşturma olağan akışında yürütülür. Uzlaşma sürecinde taraflar bir araya getirilir; teklif kabul edilmezse savunma ve delil sunma hakları aynen devam eder." },
    ],
    howToTitle: "Bakırköy'de Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "bakirkoy-gayrimenkul-avukati",
    name: "Bakırköy Gayrimenkul Avukatı",
    heroTitle: "Bakırköy Gayrimenkul Avukatı",
    heroSubtitle:
      "Toplu yapı ve site yönetimi, tapu uyuşmazlıkları ve kira ilişkilerinde hukuki destek sağlanır; davalar bizzat ilçede bulunan İstanbul Bakırköy Adliyesi'nde görülür.",
    metaTitle: "Bakırköy Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Bakırköy'de toplu yapı/site yönetimi, tapu iptali ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Toplu yapı/site yönetimi, tapu ve kira uyuşmazlıklarında Bakırköy'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Toplu Yapı/Site Yönetimi", description: "Ataköy gibi büyük ölçekli sitelerde yönetim ve aidat uyuşmazlıkları." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Sahil Şeridi Konutları", description: "Deniz manzaralı taşınmazlara ilişkin özel uyuşmazlıklar." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Toplu yapı yönetim planı ve ortak gider (aidat) uyuşmazlıklarında temsil",
      "Site yönetim kurulu kararlarına itiraz ve iptal davaları",
      "Tapu iptali ve tescil davalarının açılması",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
      "Ortaklığın giderilmesi (izale-i şüyu) davaları",
    ],
    localParagraphs: [
      "Ataköy gibi çok sayıda blok ve ortak alandan oluşan büyük ölçekli site projelerine sahip Bakırköy'de, Kat Mülkiyeti Kanunu'nun toplu yapılara ilişkin özel hükümleri kapsamındaki yönetim ve aidat uyuşmazlıkları sık karşılaşılan konular arasındadır.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, bizzat ilçede bulunan İstanbul Bakırköy Adliyesi'nde görülür.",
    ],
    faqs: [
      { question: "Toplu yapılarda blok ve site ortak giderleri nasıl paylaştırılır?", answer: "Toplu yapılarda blok ve site ortak giderleri yönetim planında belirlenen esaslara, plan bulunmuyorsa kanundaki paylaşım kurallarına göre belirlenir. Büyük sitelerde blok giderleri ile site geneli giderleri ayrı kalemler halinde ele alınabilir. Uyuşmazlık halinde yönetim planı ve karar defteri incelenir." },
      { question: "Site yönetim kurulu kararına nasıl itiraz edilir?", answer: "Karara katılmayan malik, belirli süre içinde iptal davası açabilir. Dava, İstanbul Bakırköy Adliyesi bünyesindeki mahkemede görülür. Toplu yapılarda yönetim planı ve ilgili kurul tutanağı incelenir; kararın kanuna veya yönetim planına aykırı olduğu iddiası bu belgelere dayandırılır." },
      { question: "Bakırköy'de gayrimenkul davası hangi mahkemede görülür?", answer: "Gayrimenkul davası, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, ilçede bulunan İstanbul Bakırköy Adliyesi'nde görülür. Kira ve tahliye gibi uyuşmazlıklar sulh hukuk mahkemesinde, tapu iptali ve tescil gibi davalar ise asliye hukuk mahkemesinde ele alınabilir. Dosyaya tapu kaydı ve sözleşme gibi belgeler eklenir." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Tapu iptal ve tescil davası, hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tarafından açılabilir. Tescilin dayanağının geçersiz olduğu veya hakkın tapuya doğru yansımadığı iddia edilebilir. Dava taşınmazın niteliğine göre görevli mahkemede görülür ve dosyaya tapu kaydı ile dayanak belgeler eklenir." },
      { question: "Ortak alanlarda yapılan izinsiz değişikliklere itiraz edilebilir mi?", answer: "Evet, yönetim planına aykırı değişikliklerin kaldırılması talep edilebilir. Ortak alanlarda yapılan müdahale, kat maliklerinin kanundaki ve yönetim planındaki yetkileri çerçevesinde değerlendirilir. Değişikliğin yapıldığı tarih, yönetim planı ve varsa fotoğraf veya tutanaklar delil olarak derlenir; talep mahkemede ileri sürülür." },
    ],
    howToTitle: "Bakırköy'de Ortaklığın Giderilmesi Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Mülkiyet Durumu İncelemesi", text: "Taşınmazın tapu kaydı ve paydaşlar tespit edilir." },
      { name: "Uzlaşma Girişimi", text: "Paydaşlar arasında satış veya paylaşım konusunda anlaşma aranır." },
      { name: "Dava Açılması", text: "Anlaşma sağlanamazsa sulh hukuk mahkemesinde dava açılır." },
      { name: "Satış/Paylaşım", text: "Mahkeme kararıyla taşınmaz satılır veya aynen paylaştırılır." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["ortakligin-giderilmesi-davasi", "tapu-iptali-ve-tescil-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "bakirkoy-icra-avukati",
    name: "Bakırköy İcra Avukatı",
    heroTitle: "Bakırköy İcra Avukatı",
    heroSubtitle:
      "İcra daireleri, ilçe sınırları içinde yer alan İstanbul Bakırköy Adliyesi bünyesindedir; alacakların tahsili amacıyla yürütülen icra takibi, itiraz ve haciz süreçlerinde temsil sağlanır.",
    metaTitle: "Bakırköy İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Bakırköy'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, icra ve iflas hukuku alanında Bakırköy'deki alacaklı ve borçlu taraflara danışmanlık hizmeti sunmaktadır.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Borca veya imzaya itiraz dilekçelerinin hazırlanması",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "İhaleye katılım ve ihalenin feshi talepleri",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Yetkili icra dairesi belirlenirken kural olarak borçlunun ikametgahı esas alınır; Bakırköy'de yerleşik borçlulara ilişkin takipler de bu kurala tabidir ve uyuşmazlıklar İstanbul Bakırköy Adliyesi'ndeki icra mahkemelerinde görülür.",
      "Öte yandan İstanbul Bakırköy Adliyesi'nin ilçe sınırları içinde yer alması, icra dosyalarının fiziki takibi ve dosyaya erişimi açısından Bakırköy'deki taraflara pratik bir kolaylık sağlamaktadır.",
    ],
    faqs: [
      { question: "İcra dosyasının fiziki takibi neden önemlidir?", answer: "İcra dosyasının fiziki takibi, dosyadaki gelişmelerin ve tebligatların zamanında öğrenilmesini sağlayarak hak kaybını önler. Ödeme emrine itiraz gibi süreli işlemler tebligat tarihine bağlıdır; ödeme emrine itiraz süresi 7 gündür (İİK m.62). Adliyenin ilçede bulunması, dosyaya erişimi pratik açıdan kolaylaştırır." },
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "İcra takibi sözleşme, senet, fatura veya mahkeme ilamı gibi alacağı gösteren belgelerle başlatılabilir. Belgelerin alacağın miktarını ve dayanağını açıkça göstermesi önemlidir. Takip talebi bu belgelere dayanılarak yapılır; borçluya ödeme emri gönderilir ve süreç icra dairesi nezdinde yürütülür." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "İcra takibinde ödeme emrine itiraz süresi, tebliğden itibaren 7 gündür (İİK m.62). Bu süre içinde icra dairesine yapılan itiraz takibi durdurur. Süre kaçırılırsa takip kesinleşebilir ve haciz aşamasına geçilebilir; bu nedenle tebliğ tarihinin doğru tespit edilmesi önemlidir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Haciz, kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir. Borçlunun mal varlığına yönelik bu işlem, takibin kesinleşmesinden sonra alacağın tahsili amacıyla yapılır. Kanunen haczedilemeyen mallar ile maaş gibi gelirlerde kanundaki sınırlamalar ayrıca gözetilir. Haciz işlemi icra dairesi eliyle yürütülür ve borçlu ile alacaklıya bilgi verilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Borçlu ödeme yapmaz ve itiraz etmezse takip kesinleşir; ardından haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür. Haczedilen malın satışından elde edilen bedel alacaklıya aktarılır. Borçlu itiraz ederse itirazın iptali veya kaldırılması gibi ek hukuki yollar gündeme gelir." },
    ],
    howToTitle: "Bakırköy'de İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "bakirkoy-idare-avukati",
    name: "Bakırköy İdare Avukatı",
    heroTitle: "Bakırköy İdare Avukatı",
    heroSubtitle:
      "İstanbul idare mahkemelerinin görev alanına giren belediye, imar ve sahil alanı işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır.",
    metaTitle: "Bakırköy İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Bakırköy'de idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "İdari işlemlerin iptali ve tam yargı davalarında Bakırköy'deki müvekkillerine danışmanlık hizmeti sunan Furkan Arıkan, 72621 sicil numarasıyla İstanbul Barosu'na kayıtlı bir avukat olup 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Sahil ve Millet Bahçesi", description: "Kıyı alanı ve kamusal alan düzenlemelerine ilişkin uyuşmazlıklar." },
      { title: "İmar Uygulamaları", description: "Toplu yapı ve site alanlarında imar durumu uyuşmazlıkları." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kıyı alanı ve kamusal alan düzenlemelerine ilişkin idari dava süreçleri",
      "İmar planı değişikliklerine karşı iptal davası açılması",
      "Belediye ruhsat işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "İdari işlemlerin iptaline veya tam yargıya ilişkin davalara İstanbul idare mahkemelerinde bakılır; dava açma süresi, genel kural olarak, işlemin tebliğinden itibaren 60 gündür.",
      "Bakırköy'ün uzun sahil şeridi ile eski havalimanı arazisinden dönüştürülen geniş millet bahçesi, kıyı ve kamusal alan düzenlemelerine ilişkin idari işlemlerin zaman zaman dava konusu olmasına zemin hazırlamaktadır.",
    ],
    faqs: [
      { question: "Sahil şeridindeki bir yapılaşmaya itiraz nasıl yapılır?", answer: "Sahil şeridindeki yapılaşmaya karşı ilan veya tebliğ tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılabilir. Genel kural olarak idari davalarda süre 60 gündür (İYUK m.7). Kıyı ve kamusal alan düzenlemelerine ilişkin işlemler İstanbul idare mahkemelerinde iptal davasına konu edilebilir." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İmar planına karşı dava, ilan tarihinden itibaren yasal süre içinde idare mahkemesinde açılmalıdır; idari davalarda genel süre 60 gündür (İYUK m.7). Plan değişikliğinden etkilenen taşınmaz malikleri veya ilgili kişiler dava açabilir. Sürenin kaçırılmaması için ilan tarihi ve usulü doğru tespit edilmelidir." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde iptal davası açılabilir. Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Başvuru dosyası, ret yazısı ve tebliğ tarihini gösteren belgeler dava açılmadan önce derlenir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, idari para cezasına karşı yasal süresinde idare mahkemesinde dava açılabilir. İdari davalarda genel dava açma süresi, işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Ceza tutanağı ve tebliğ belgeleri dosyaya eklenir; iptal talebi hukuka aykırılık gerekçeleriyle birlikte sunulur." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "İdarenin işlem veya eyleminden zarar görenler, zararın tazmini için tam yargı davası açabilir. Zarara yol açan işlemin ya da eylemin ve zararın belgelerle ortaya konulması gerekir. Dava idare mahkemesinde görülür; süre ve ön başvuru usulü, somut olaya göre belirlenir." },
    ],
    howToTitle: "Bakırköy'de İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "bakirkoy-is-hukuku-avukati",
    name: "Bakırköy İş Hukuku Avukatı",
    heroTitle: "Bakırköy İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri bizzat ilçede bulunan İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Bakırköy İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Bakırköy'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Bakırköy'deki çalışanlara ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Site Yönetimi Çalışanları", description: "Toplu yapılarda görevli personelin özlük hakları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Fazla mesai, hafta tatili ve yıllık izin alacaklarının tahsili",
      "Site/apartman yönetiminde görevli personelin işçilik alacakları",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Çok sayıda büyük ölçekli site ve iş merkezinin bulunduğu Bakırköy'de, güvenlik, temizlik ve yönetim personeli gibi toplu yapılarda görev yapan çalışanların işçilik alacakları sık karşılaşılan iş hukuku konularındandır.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları, ilçede bizzat bulunan İstanbul Bakırköy Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Site güvenlik görevlisinin fazla mesai hakkı nasıl hesaplanır?", answer: "Site güvenlik görevlisinin fazla mesaisi, vardiya çizelgeleri ve fiili çalışma süresi esas alınarak hesaplanır. Yasal haftalık çalışma süresini aşan süreler fazla mesai sayılır ve ücrete yansıtılır. Giriş-çıkış kayıtları, bordrolar ve tanık beyanları, çalışılan sürenin ispatında kullanılabilecek delillerdir." },
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Haksız fesih halinde kıdem tazminatı, çalışma süresi ve son brüt ücret esas alınarak hesaplanır. Hesapta çalışılan yıl sayısı ile ücrete eklenen düzenli ödemeler birlikte değerlendirilir. İşe giriş ve çıkış kayıtları, bordrolar ve fesih bildirimi hesabın dayanağını oluşturur; uyuşmazlık iş mahkemesinde görülür." },
      { question: "Bakırköy'de iş mahkemesi nerededir?", answer: "Bakırköy'de iş davalarına, ilçe sınırları içinde bulunan İstanbul Bakırköy Adliyesi bünyesindeki iş mahkemeleri bakar. İşe iade ve işçilik alacağı davaları, arabuluculukta anlaşma sağlanamazsa bu mahkemelerde görülür. İşe iade için fesihten itibaren 1 ay içinde arabuluculuğa başvurulur; son tutanaktan itibaren 2 hafta içinde dava açılır." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "İşe iade sürecinin toplam süresi dosyaya göre değişir. Süreç, fesihten itibaren 1 ay içinde arabuluculuğa başvuru ile başlar; anlaşma sağlanamazsa son tutanaktan itibaren 2 hafta içinde dava açılır. İş K. m.18 uyarınca en az 30 işçi ve 6 ay kıdem şartı aranır." },
      { question: "Site yönetimi personeli sigortasız çalıştırılırsa ne yapılabilir?", answer: "Site yönetimi personeli sigortasız çalıştırılırsa hizmet tespiti davası açılarak çalışma süresi mahkemece tespit ettirilebilir. Çalışmanın varlığı ve süresi bordro, banka kayıtları, tanık beyanı veya yazışmalarla ortaya konulur. Tespit edilen süre, işçilik alacaklarının hesabında da esas alınabilir." },
    ],
    howToTitle: "Bakırköy'de İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "bakirkoy-kira-tahliye-avukati",
    name: "Bakırköy Kira ve Tahliye Avukatı",
    heroTitle: "Bakırköy Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Site içi konut ve işyeri tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemeleri bizzat ilçede bulunan İstanbul Bakırköy Adliyesi'ndedir.",
    metaTitle: "Bakırköy Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Bakırköy'de kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Kira hukuku alanında Bakırköy'deki kiraya verenlere ve kiracılara danışmanlık verir.",
    highlightCards: [
      { title: "Site İçi Kira İlişkileri", description: "Ataköy gibi büyük sitelerdeki konutlarda kira sözleşmesi süreçleri." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Sahil Bölgesi Kiraları", description: "Deniz manzaralı taşınmazlarda rayiç bedel farkları." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Site içi konutlara ilişkin kira sözleşmelerinin hazırlanması ve incelenmesi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "İhtiyaç nedeniyle açılan tahliye davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Sahil şeridine yakınlığı ve Ataköy gibi geniş site projeleri nedeniyle Bakırköy'de kira bedelleri semtten semte belirgin farklılıklar gösterebilmekte, bu da rayiç bedel tespiti davalarını sık başvurulan bir yol haline getirmektedir.",
      "Bu davalara, ilçede bizzat bulunan İstanbul Bakırköy Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır; taşınmazın konut mu işyeri mi olduğu, uygulanacak usulü doğrudan etkiler.",
    ],
    faqs: [
      { question: "Deniz manzaralı bir konutun kira bedeli nasıl tespit edilir?", answer: "Deniz manzaralı konutun kira bedeli, bilirkişi tarafından konum ve manzara farkı da dikkate alınarak bölgedeki emsal bedeller üzerinden değerlendirilir. Dava sulh hukuk mahkemesinde görülür. Mevcut kira sözleşmesi ve emsal kira örnekleri bu değerlendirme için dosyaya sunulur." },
      { question: "Site içindeki bir dairenin kirası neden farklı olabilir?", answer: "Sitenin sunduğu ortak alan ve hizmetler kira bedelini etkileyebilir. Güvenlik, ortak sosyal alanlar ve yönetim hizmetleri gibi imkanlar, emsal kira bedelinin belirlenmesinde değerlendirilen unsurlar arasındadır. Rayiç bedel tespitinde bilirkişi bu farkları bölgedeki emsallerle karşılaştırarak görüş bildirir." },
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kiracı; kira borcunun ödenmemesi, geçerli bir taahhütname veya kiraya verenin ihtiyacı gibi sebeplerle tahliye edilebilir. Kira borcunda kiracıya ödeme için 30 gün süre verilir (TBK m.315); süre sonunda ödeme yapılmazsa tahliye yoluna gidilebilir. Hangi yolun izleneceği olayın niteliğine göre belirlenir." },
      { question: "Bakırköy'de tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine göre değişir; birkaç aydan bir buçuk yıla kadar sürebilir. İstanbul Bakırköy Adliyesi bünyesindeki sulh hukuk mahkemelerinde görülen davalarda süreyi tebligat işlemleri, delillerin toplanması ve gerekirse bilirkişi incelemesi etkiler. Kira borcu veya taahhütname gibi belgeye dayalı hallerde farklı yollar izlenebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname varsa tahliye doğrudan icra dairesi kanalıyla istenebilir. Taahhütnamenin geçerli olması ve tahliye talebinin usulüne uygun yapılması gerekir. Bu yol, mahkemede dava açılmasından farklı bir süreçtir; belgenin içeriği ve tarihi önceden incelenir." },
    ],
    howToTitle: "Bakırköy'de Kira Bedeli Tespiti Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Emsal Araştırması", text: "Bölgedeki benzer nitelikteki konutların kira bedelleri araştırılır." },
      { name: "İhtarname", text: "Gerekiyorsa karşı tarafa bildirim yapılır." },
      { name: "Dava Açılması", text: "Sulh hukuk mahkemesinde tespit davası açılır." },
      { name: "Bilirkişi İncelemesi", text: "Mahkemenin görevlendirdiği bilirkişi güncel bedeli belirler." },
    ],
    crosslinkLabel: "Kira ve Tahliye Avukatı",
    relatedPostSlugs: ["kira-bedeli-tespit-ve-uyarlama-davasi", "kiracinin-tahliye-sureci"],
  },

  // ─────────────────────────── VERGİ ───────────────────────────
  {
    slug: "vergi",
    urlSlug: "bakirkoy-vergi-avukati",
    name: "Bakırköy Vergi Avukatı",
    heroTitle: "Bakırköy Vergi Avukatı",
    heroSubtitle:
      "Ataköy ve sahil şeridindeki konut satışlarından doğan değer artış kazancı, harç farkı ve ceza ihbarnamelerine karşı uzlaşma ve dava süreçleri yürütülür; davalar İstanbul vergi mahkemelerinde görülür.",
    metaTitle: "Bakırköy Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Bakırköy'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Bakırköy'deki vergi uyuşmazlıklarında çalışan avukat Furkan Arıkan, MEF Üniversitesi'nden 2019 yılında hukuk diploması almış olup İstanbul Barosu kayıtlarında 72621 sicil numarasıyla yer alır. Bakırköy'de taşınmaz satan bireyler, serbest meslek sahipleri ve işletmeler adına Bakırköy Vergi Dairesi Müdürlüğü nezdindeki işlemlerde ve vergi mahkemesi davalarında hukuki destek sağlar.",
    highlightCards: [
      { title: "Konut Satışında Değer Artışı", description: "Ataköy ve sahile yakın sitelerde satış sonrası tarh edilen vergiye karşı yollar." },
      { title: "Tapu Harcı Farkı", description: "Beyan edilen bedel ile gerçek değer arasındaki farka dayalı tarhiyatlar." },
      { title: "Uzlaşma Görüşmeleri", description: "Komisyon önünde vergi ve ceza tutarının müzakere edilmesi." },
      { title: "Ödeme Emri Davası", description: "6183 sayılı Kanun m.58 uyarınca 15 gün içinde dava." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Daire veya arsa satışı sonrası düzenlenen değer artış kazancı ihbarnamelerinin incelenmesi",
      "Tapuda düşük bedel gösterildiği iddiasıyla yapılan harç ve vergi tarhiyatlarına karşı dava",
      "Bakırköy Vergi Dairesi Müdürlüğü'ne sunulacak uzlaşma talebinin hazırlanması",
      "Kesilen vergi ziyaı veya usulsüzlük cezasının iptali için İYUK m.7'deki 30 günlük sürede dava",
      "Amme alacağının tahsili amacıyla düzenlenen ödeme emrinin iptali için dava",
      "Vergi incelemesi sırasında tutanakların ve savunma yazılarının hazırlanması",
    ],
    localParagraphs: [
      "Sahil şeridine yakın konumu ve Ataköy gibi büyük ölçekli siteleriyle Bakırköy, konut değerlerinin yüksek seyrettiği ilçeler arasındadır. Daire satışlarında beyan edilen bedel ile edinme maliyeti arasındaki fark, değer artış kazancı ve harç farkı tarhiyatlarının başlıca kaynağını oluşturur.",
      "İlçe mükelleflerinin idari işlemleri Bakırköy Vergi Dairesi Müdürlüğü'nde yürür; tarhiyata ilişkin davalara ise İstanbul'da kurulu vergi mahkemeleri bakar. İhbarname geldikten sonra uzlaşma ile dava arasındaki seçim, 30 günlük dava süresi gözetilerek kısa sürede yapılmalıdır.",
    ],
    faqs: [
      { question: "Ataköy'deki dairesini satan kişiye değer artış kazancı ihbarnamesi gelirse ne yapılmalı?", answer: "İlk iş, tebliğ tarihini not edip 30 günlük dava süresini (İYUK m.7) takvime işlemektir; bu süre içinde uzlaşma da istenebilir. Önce edinme ve satış tarihleri, tapudaki bedeller ve istisna şartlarının bulunup bulunmadığı kontrol edilir. Hesaplamada hata varsa bu belgeler dava dilekçesinin dayanağı olur." },
      { question: "Bakırköy'de tapuda gösterilen satış bedeli düşük bulunursa ne olur?", answer: "İdare, gerçek bedelin daha yüksek olduğunu tespit ederse eksik kalan harç ve vergi için tarhiyat yapabilir ve üzerine vergi ziyaı cezası da ekleyebilir. Tespitin dayanağı olan emsal satışlar ve değerleme raporu incelenmeden ödeme kararı verilmemelidir. Dava veya uzlaşma için tebliğden sonraki 30 günlük süre kullanılmalıdır." },
      { question: "Bakırköy Vergi Dairesi ile uzlaşma sağlanamazsa dava hakkı kaybolur mu?", answer: "Hayır; tarhiyat sonrası uzlaşmada anlaşma sağlanamazsa mükellef dava açma hakkını korur. Uzlaşmanın sağlanamadığına dair tutanağın tebliğinden sonra, kanunun tanıdığı süre korunarak dava yoluna gidilebilir. Kalan süre kısa olabileceğinden tutanak eline ulaşır ulaşmaz dava dilekçesinin hazırlanması önerilir." },
      { question: "Bakırköy Vergi Dairesi'nin gönderdiği ödeme emrine hangi sürede karşı çıkılır?", answer: "Ödeme emrinin tebliğini izleyen 15 gün, vergi mahkemesine başvurmak için tanınan süredir (6183 s.K. m.58). Davada borçlu olunmadığı, borcun bir kısmının ödendiği ya da zamanaşımının dolduğu ileri sürülebilir. Ödeme emri tarhiyattan farklı bir tahsil işlemi olduğundan, bu süre ihbarnameye tanınan 30 günlük süreyle karıştırılmamalıdır." },
      { question: "Vergi incelemesine çağrılan Bakırköy'deki bir işletme hangi hazırlığı yapmalı?", answer: "İşletme, istenen defter ve belgeleri eksiksiz ve süresinde sunmalı, inceleme elemanıyla yapılan görüşmeleri tutanağa bağlatmalıdır. Katılınmayan tespitlere tutanakta şerh düşülmesi, ileride açılacak davada savunmanın temelini oluşturur. İnceleme sonucunda düzenlenen ihbarnameye karşı uzlaşma veya 30 gün içinde dava yolu açıktır." },
    ],
    howToTitle: "Bakırköy'de Değer Artışı ve Harç Tarhiyatına Nasıl Karşı Çıkılır?",
    howToSteps: [
      { name: "İhbarnamenin Okunması", text: "Tarh edilen tutar ve ceza türü belirlenir, ihbarnamenin hangi gün tebliğ edildiği kaydedilir." },
      { name: "Satış Belgelerinin Toplanması", text: "Tapu kayıtları, alım-satım bedelleri ve emsal değerler derlenir." },
      { name: "Uzlaşma veya Dava Kararı", text: "Bakırköy Vergi Dairesi Müdürlüğü'nden uzlaşma istenip istenmeyeceğine veya doğrudan dava açılacağına karar verilir." },
      { name: "Vergi Mahkemesi Süreci", text: "Süresinde açılan dava İstanbul vergi mahkemelerinde karara bağlanır." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "bakirkoy-borclar-hukuku-avukati",
    name: "Bakırköy Borçlar Hukuku Avukatı",
    heroTitle: "Bakırköy Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Ataköy'den Yeşilköy'e uzanan site ve toplu yapılarda yüklenici, yönetim ve hizmet sağlayıcılarla yaşanan sözleşme ve alacak uyuşmazlıkları takip edilir; davalar ilçe sınırındaki Osmaniye'de yer alan İstanbul Bakırköy Adliyesi'nde görülür.",
    metaTitle: "Bakırköy Borçlar Hukuku Avukatı",
    metaDescription:
      "Bakırköy'de sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "2019'da MEF Üniversitesi'nin hukuk programını bitiren avukat Furkan Arıkan'ın İstanbul'daki baro sicil numarası 72621'dir. Bakırköy'de site yönetimleri, kat malikleri ve küçük işletmeler adına yapım, tadilat ve hizmet sözleşmelerinin hazırlanması, ihlal halinde tazminat ile alacak taleplerinin takibi konularında çalışır.",
    highlightCards: [
      { title: "Toplu Yapı Teslim Sorunları", description: "Ortak alan, otopark ve sosyal tesislerin eksik veya geç tesliminden doğan talepler." },
      { title: "Tadilat ve Eser Sözleşmeleri", description: "Daire yenileme, cephe ve çatı işlerinde ayıplı iş ve bedel uyuşmazlıkları." },
      { title: "Site Yönetimi Hizmet Alımları", description: "Güvenlik, temizlik ve bahçe bakımı firmalarıyla yapılan sözleşmeler." },
      { title: "Zamanaşımı ve Tahsil", description: "Alacağın TBK m.146 ve m.147'ye göre süresi içinde talep edilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Ataköy ve benzeri toplu yapılarda yükleniciye karşı eksik iş ve gecikme tazminatı talepleri",
      "Daire tadilatı ve yenileme işlerinde ayıplı işin giderilmesi veya bedel indirimi davaları",
      "Site yönetimlerinin güvenlik, temizlik ve bakım firmalarıyla yaptığı sözleşmelerin incelenmesi",
      "Ticari para alacaklarında dava öncesi zorunlu arabuluculuk sürecinin takibi",
      "Avans, kapora ve depozito iadesine ilişkin talepler",
      "Alacak hükmüne dayanılarak ilamlı icra takibi başlatılması",
    ],
    localParagraphs: [
      "Ataköy'ün çok bloklu siteleri ve sahil şeridine yakın yerleşimleri, Bakırköy'de borç ilişkilerinin önemli bir bölümünü yapım, onarım ve site hizmetleri etrafında toplar. Yüklenicinin ortak alanları eksik bırakması ya da bir tadilat işinin sözleşmede vaat edilen niteliği taşımaması, ilçede sık karşılaşılan uyuşmazlık başlıklarıdır.",
      "İstanbul Bakırköy Adliyesi Osmaniye Mahallesi'nde, İsmail Erez Bulvarı üzerindedir; M3 metrosu, Marmaray ve metrobüs ilçe içi ulaşımı kolaylaştırır. Davaya hukuk mahkemesinin mi ticaret mahkemesinin mi bakacağı, sözleşmenin tarafları ve işin ticari niteliğine göre belirlenir.",
    ],
    faqs: [
      { question: "Ataköy'deki sitede yüklenici sosyal tesisi teslim etmezse kat malikleri ne yapabilir?", answer: "Kat malikleri veya yetkili yönetim, yükleniciden eksik işin tamamlanmasını, gecikmeden doğan zararın giderilmesini ya da bedelden indirim isteyebilir. Önce sözleşme, satış vaadi ekleri ve teslim tutanakları karşılaştırılır; eksiklik keşif ve bilirkişi raporuyla belgelenir. Dava, Osmaniye'deki İstanbul Bakırköy Adliyesi'nde açılır." },
      { question: "Bakırköy'de daire tadilatını yapan usta işi ayıplı teslim ederse hangi talepler ileri sürülebilir?", answer: "İş sahibi; ayıbın ücretsiz giderilmesini, bedelden indirim yapılmasını veya ayıp ağırsa sözleşmeden dönmeyi talep edebilir. Ayıbın fark edildiği anda yükleniciye bildirilmesi hak kaybını önler. Fotoğraflar, keşif tutanağı ve ödeme dekontları, mahkemenin yaptıracağı bilirkişi incelemesinde esas alınır." },
      { question: "Bakırköy'deki bir site yönetimi güvenlik firmasıyla sözleşmeyi süresinden önce sona erdirebilir mi?", answer: "Sözleşmede fesih hakkı tanınmışsa veya firma edimini ağır biçimde ihlal ediyorsa site yönetimi sözleşmeyi süresinden önce sona erdirebilir. Haklı sebep olmadan yapılan fesih, firmanın kalan süreye ilişkin tazminat istemesine yol açabilir. Bu nedenle ihlaller önce tutanakla kayda geçirilir ve yazılı ihtarla düzeltilmesi istenir." },
      { question: "Bakırköy'de açılacak ticari alacak davasından önce arabulucuya gitmek gerekir mi?", answer: "Evet; ticari nitelikteki bir para alacağında arabulucuya gidilmeden açılan dava, dava şartı eksikliğinden reddedilir. Görüşmeler sonuçsuz kalırsa arabulucunun düzenlediği tutanakla İstanbul Bakırköy Adliyesi'ndeki asliye ticaret mahkemesine başvurulur. Ticari nitelik taşımayan alacaklarda bu şart her durumda aranmaz." },
      { question: "Bakırköy'de iptal edilen bir tadilat işi için verilen avans geri alınabilir mi?", answer: "Evet, iş hiç yapılmadan sözleşme sona ermişse karşılıksız kalan avansın iadesi istenebilir. Ödemeyi banka dekontu, mesajlar ve varsa yazılı teklif ispatlar. İade talebi önce noter ihtarıyla yapılır; ödeme gelmezse takip ya da dava yoluna gidilir. İşin bir kısmı yapılmışsa bunun değeri avanstan düşülür." },
    ],
    howToTitle: "Bakırköy'de Yapım ve Tadilat Uyuşmazlığı Nasıl Çözülür?",
    howToSteps: [
      { name: "Sözleşme ve Proje İncelemesi", text: "Taahhüt edilen işin kapsamı, teslim tarihi ve ödeme planı belirlenir." },
      { name: "Eksikliğin Belgelenmesi", text: "Ayıp ve eksikler fotoğraf, tutanak veya delil tespitiyle kayda geçirilir." },
      { name: "İhtar ve Arabuluculuk", text: "Yükleniciye süre verilir; ticari alacaklarda arabulucuya başvurulur." },
      { name: "Dava ve İcra", text: "Osmaniye'deki adliyede dava açılır, hükme dayanılarak ilamlı takip yapılır." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];

export const bakirkoyServices: PseoService[] = [...bakirkoyBaseServices, bakirkoyMiras];
