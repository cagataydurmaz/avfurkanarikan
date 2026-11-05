import type { PseoService } from "./types";
import { bahcelievlerMiras } from "./miras/bahcelievlerMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const bahcelievlerBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "bahcelievler-avukat",
    name: "Bahçelievler Avukat",
    heroTitle: "Bahçelievler Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, İstanbul'un ilk planlı yerleşimlerinden biri olan Bahçelievler'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Bakırköy Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Bahçelievler Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Bahçelievler'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Yerleşik aile yapısı ile Yenibosna çevresindeki iş merkezi ve otel yoğunluğunu bir arada barındıran Bahçelievler'de ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Kat mülkiyeti, miras intikali ve tahliye uyuşmazlıklarının takibi." },
      { title: "İş Hukuku", description: "İşçilik alacakları ve işe iade davalarında destek." },
      { title: "İcra Hukuku", description: "Alacak takibi ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "İdari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı ve cezası uyuşmazlıkları." },
      { title: "Borçlar Hukuku", description: "Hizmet sözleşmesi ve alacak kaynaklı davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Kat mülkiyeti, miras intikali ve kira ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Hizmet sözleşmesi kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "1930'larda Fransız şehir plancısı Henri Prost'un imar planıyla İstanbul'un ilk planlı bahçe-şehir örneklerinden biri olarak gelişen Bahçelievler, bugün yerleşik bir aile yapısını Yenibosna çevresindeki yoğun ofis, otel ve iş merkezi dokusuyla bir arada barındırmaktadır.",
      "İlçedeki hukuki uyuşmazlıklar İstanbul Bakırköy Adliyesi'nde, vergisel işlemler ise Yenibosna Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Bahçelievler'deki davalara hangi adliye bakıyor?", answer: "Bahçelievler, İstanbul Bakırköy Adliyesi'nin yargı çevresinde yer aldığından davalara bu adliye bakar. İlçedeki hukuki uyuşmazlıklar bu adliyede, vergisel işlemler ise Yenibosna Vergi Dairesi Müdürlüğü nezdinde yürütülür; vergi davaları İstanbul vergi mahkemelerinde görülür. Hukuk ve ceza yargılaması da bu adliye bünyesinde yürütülür." },
      { question: "Randevu nasıl alınır?", answer: "Randevu için WhatsApp veya telefon üzerinden iletişime geçilir ve konu kısaca paylaşılır; ardından uygun bir görüşme günü belirlenir. Danışmanlık görüşmesi ücret karşılığı yapılır ve hukuki durum değerlendirilir. Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir ve süreç başlatılır." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve temsil hizmeti verilir. Bu kapsamda boşanma ve velayet, işçilik alacakları, icra takibi, idari işlemlere karşı iptal davaları ve vergi uyuşmazlıkları gibi konular yürütülür. Ayrıntılar randevuda paylaşılır." },
      { question: "Büro Bahçelievler'de mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Bahçelievler bölgesindeki müvekkillere de aynı kapsamda hizmet verilir. Görüşmeler yüz yüze veya çevrim içi planlanabilir; ilk iletişim WhatsApp ya da telefonla kurulur. Dava ve işlemler yetkili adliye ve idari merciler nezdinde yürütülür." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Danışmanlık görüşmesi ücret karşılığı yapılır ve ücret dosyanın niteliğine göre değişir. Uyuşmazlığın türü, belge yoğunluğu ve gerekecek takip süreci gibi unsurlar dikkate alınır. Ücret ve kapsam bilgisi randevu sırasında paylaşılır; temsil kararı alınırsa vekalet düzenlenir." },
      { question: "Miras yoluyla intikal eden dairelerle ilgili destek alınabilir mi?", answer: "Evet, miras yoluyla intikal eden dairelerde veraset intikali ve ortaklığın giderilmesi süreçlerinde danışmanlık sağlanır. Mirasçılar arasında anlaşma sağlanamazsa ortaklığın giderilmesi (izale-i şüyu) davası açılabilir. Süreçte tapu kaydı, veraset belgesi ve mirasçıların bilgileri derlenerek hukuki durum değerlendirilir." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Görüşmeler tercihe göre yüz yüze veya çevrim içi olarak planlanabilir. İlk iletişim WhatsApp ya da telefonla kurulur, ardından görüşme günü belirlenir. Hangi yöntem seçilirse seçilsin hukuki durum değerlendirilir; temsil kararı alınırsa vekalet düzenlenir ve belgeler birlikte derlenir." },
      { question: "Bakırköy Adliyesi'ne Bahçelievler'den ulaşım nasıl?", answer: "Bakırköy Adliyesi'ne ulaşım Metrobüs ve M1A metro hattı bağlantıları üzerinden sağlanabilir. Bahçelievler, İstanbul Bakırköy Adliyesi'nin yargı çevresinde yer aldığı için ilçedeki davalar bu adliyede görülür. Duruşma gününden önce mahkeme ve saat bilgisinin dosya kayıtlarından teyit edilmesi önerilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Gözaltı halinde vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmelidir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından önem taşır. Müdafi, ifade alma ve soruşturma aşamalarında şüpheliye eşlik eder." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, dosyanın seyri hakkında süreç boyunca bilgi verilir. Temsil sürecinde gelişmeler müvekkille paylaşılır; mahkeme ve idari merciler nezdindeki işlemler, duruşma tarihleri ve yeni evraklar takip edilerek bildirilir. Bu takip, vekalet düzenlendikten sonra yürütülen dosya yönetiminin bir parçasıdır." },
    ],
    howToTitle: "Bahçelievler'de Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Bahçelievler Avukat (Genel)",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "icra-takibi-ve-borca-itiraz", "muris-muvazaasi-nedir"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "bahcelievler-bosanma-avukati",
    name: "Bahçelievler Boşanma Avukatı",
    heroTitle: "Bahçelievler Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; aile mahkemeleri İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Bahçelievler Boşanma Avukatı | Velayet",
    metaDescription:
      "Bahçelievler'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Aile hukuku alanında Bahçelievler'deki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlar.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Aile Konutu", description: "Uzun süreli evliliklerde aile konutu şerhi ve tahsisi uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Aile konutu şerhi ve tahsisine ilişkin taleplerin yürütülmesi",
      "Katılma alacağı kapsamında mal rejimi tasfiyesi talepleri",
    ],
    localParagraphs: [
      "Yerleşik aile yapısıyla bilinen Bahçelievler'de boşanma davalarında, uzun süreli evlilik birlikteliklerine bağlı olarak aile konutu şerhi ve müşterek mal varlığının tasfiyesi konuları önemli bir yer tutmaktadır.",
      "Boşanma, velayet ve nafaka davalarına İstanbul Bakırköy Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Boşanma davası için İstanbul Bakırköy Adliyesi'ndeki aile mahkemesine başvurulur. Yetki TMK m.168 uyarınca eşlerden birinin yerleşim yeri mahkemesi veya eşlerin en son altı aydan beri birlikte oturdukları yer mahkemesidir. Anlaşmalı boşanmada en az 1 yıllık evlilik ve duruşmada iki eşin birlikte beyanı aranır (TMK m.166/3)." },
      { question: "Aile konutu şerhi ne işe yarar?", answer: "Aile konutu şerhi, konutun diğer eşin rızası olmadan devrini engelleyerek o eşin oturma hakkını güvence altına alır. Boşanma sürecinde konutun satılması veya üzerinde hak tesis edilmesi riskine karşı tapu siciline işlenir. Aile konutu şerhi ve tahsisine ilişkin talepler dava sürecinde de yürütülür." },
      { question: "Mal rejimi tasfiyesinde uzun evlilik süresi nasıl etkili olur?", answer: "Evlilik süresince edinilen mal varlığı arttıkça katılma alacağı hesabı da genişleyebilir. Mal rejimi tasfiyesinde evlilik içinde edinilen mallar ve bunlara ait borçlar birlikte değerlendirilir. Uzun süreli evliliklerde aile konutu ve müşterek mal varlığının tasfiyesi bu nedenle önemli bir yer tutar." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Çocuk belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir. Velayet düzenlenirken esas ölçüt çocuğun yararıdır; çocuğun yaşı ve gelişim düzeyi, görüşünün ne ölçüde değerlendirileceğini etkiler. Mahkeme, tarafların beyanlarını dosyadaki delillerle birlikte değerlendirir. Bu değerlendirmede velayetin kime verileceği ve kişisel ilişki düzeni de gözetilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Nafaka miktarı, tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilerek belirlenir. Hakim, nafaka yükümlüsünün ödeme gücünü ve nafaka alacaklısının ihtiyaçlarını dosyadaki delillerle ölçer. Koşullar değişirse nafakanın artırılması, azaltılması veya kaldırılması talep edilebilir. Nafaka çocuğun giderlerine yönelik olabileceği gibi eşin ihtiyacına da ilişkin olabilir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir. Barışma halinde davanın sürdürülmesine gerek kalmaz; taraflar bu iradelerini mahkemeye bildirir. Bu yol, boşanma kararı verilmeden önce açıktır ve davanın seyri tarafların açıklamalarına göre mahkemece yürütülür. Anlaşmalı boşanma için ise protokolün eksiksiz olması önem taşır." },
    ],
    howToTitle: "Bahçelievler'de Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "bahcelievler-ceza-avukati",
    name: "Bahçelievler Ceza Avukatı",
    heroTitle: "Bahçelievler Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; kovuşturma İstanbul Bakırköy Adliyesi'nde yürütülür.",
    metaTitle: "Bahçelievler Ceza Avukatı | Müdafilik",
    metaDescription:
      "Bahçelievler'de soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. Ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında Bahçelievler'deki müvekkillerine müdafilik yapar.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Dolandırıcılık/Güven Suçları", description: "Ticari işletmelere yönelik iddialarda savunma." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Dolandırıcılık ve güveni kötüye kullanma iddialarında savunma",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "E-5 karayolu koridorundaki yoğun otel, ofis ve iş merkezi trafiği, Bahçelievler'de dolandırıcılık ve güveni kötüye kullanma gibi ticari nitelikli suç iddialarının da zaman zaman gündeme gelmesine yol açmaktadır.",
      "Kovuşturma aşamasındaki davalar İstanbul Bakırköy Adliyesi'nde görülür. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından belirleyicidir.",
    ],
    faqs: [
      { question: "Bahçelievler'de bir ceza davası hangi adliyede görülür?", answer: "Ceza davaları İstanbul Bakırköy Adliyesi'nde görülür. Soruşturma aşamasında şüpheli müdafiyle birlikte ifade verebilir; kovuşturma aşamasına geçildiğinde yargılama bu adliye bünyesinde yürütülür. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamalar açısından önem taşır." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "İfade müdafi bulunmadan da alınabilir; ancak şüpheli veya sanığın müdafi bulundurma hakkı vardır ve bu hakkın kullanılması önerilir. Müdafi, ifade sırasında hakların korunmasına ve dosya içeriğinin takip edilmesine yardımcı olur. Gözaltına alınan kişinin müdafi ile görüşme hakkı gözaltı anından itibaren doğar." },
      { question: "Otel veya iş yerinde işlenen hırsızlık iddiasında ne yapılmalı?", answer: "Önce kolluğa bildirim yapılmalı ve mümkünse kamera kayıtları delil olarak korunmalıdır. Kayıtların silinmeden saklanması, olayın zamanı ve kişileri açısından ispatta önem taşır. Bildirimin ardından soruşturma başlar; şüpheli veya mağdur sıfatıyla müdafilik hizmeti dosya aşamalarının takibini kolaylaştırır." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, kovuşturmaya yer olmadığı kararına karşı sulh ceza hakimliğine itiraz edilebilir. İtiraz süresi kararın tebliğinden itibaren 15 gündür. İtiraz dilekçesinde kararın hangi yönlerden hatalı olduğu ve soruşturmada eksik kalan hususların neler olduğu belirtilir. Karar kesinleştiğinde soruşturma sona erer; itirazın kabulü halinde soruşturmanın devamı sağlanabilir." },
      { question: "Temyiz kanun yoluna hangi kararlar için başvurulur?", answer: "Temyiz, kanunda sayılan ağır suçlara ilişkin kararlar için başvurulabilen kanun yoludur; istinaf incelemesinden sonra temyize açık bırakılan kararlar da bu kapsamdadır. Kararın temyize tabi olup olmadığı dosyanın niteliğine ve verilen karara göre belirlenir; kanun yolu süreleri kararın tefhim veya tebliğ tarihine göre işler." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Uzlaşma sağlanamazsa yargılama kaldığı yerden devam eder. Uzlaşmaya tabi suçlarda uzlaştırma süreci sonuçsuz kalırsa soruşturma veya kovuşturma olağan akışında yürütülür. Uzlaşma sürecinde taraflar bir araya getirilir; teklif kabul edilmezse savunma ve delil sunma hakları aynen devam eder." },
    ],
    howToTitle: "Bahçelievler'de Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "bahcelievler-gayrimenkul-avukati",
    name: "Bahçelievler Gayrimenkul Avukatı",
    heroTitle: "Bahçelievler Gayrimenkul Avukatı",
    heroSubtitle:
      "Kat mülkiyeti, apartman yönetimi, miras intikali ve kira ilişkilerinde hukuki destek sağlanır; davalar İstanbul Bakırköy Adliyesi'nde görülür.",
    metaTitle: "Bahçelievler Gayrimenkul Avukatı | Tapu",
    metaDescription:
      "Bahçelievler'de kat mülkiyeti, tapu iptali, miras intikali ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Kat mülkiyeti, miras intikali ve kira uyuşmazlıklarında Bahçelievler'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Kat Mülkiyeti", description: "Yönetim planı, ortak gider ve kat malikleri kurulu uyuşmazlıkları." },
      { title: "Miras İntikali", description: "1980-90'larda inşa edilen apartman dairelerinin veraset yoluyla devri." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kat malikleri kurulu kararlarına itiraz ve iptal davaları",
      "Ortak gider (aidat) alacaklarının tahsili",
      "Veraset yoluyla intikal eden apartman dairelerinde ortaklığın giderilmesi",
      "Tapu iptali ve tescil davalarının açılması",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
    ],
    localParagraphs: [
      "1980'ler ve 1990'lardaki hızlı yapılaşma döneminde bahçeli evlerin yerini büyük ölçüde apartmanların aldığı Bahçelievler'de, kat mülkiyeti yönetimine ve yaşlanan bina stokuna bağlı uyuşmazlıklar sık karşılaşılan konular arasındadır.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür.",
    ],
    faqs: [
      { question: "Kat malikleri kurulu kararına nasıl itiraz edilir?", answer: "Karara katılmayan malik, kararın alınmasından itibaren belirli süre içinde iptal davası açabilir. Dava, İstanbul Bakırköy Adliyesi bünyesindeki mahkemede görülür. Kararın dayanağı olan toplantı tutanağı ve yönetim planı dava dosyasına eklenir; iptal talebi bu belgelerdeki aykırılıklara dayandırılır." },
      { question: "Ortak gider borcunu ödemeyen kat malikine ne yapılabilir?", answer: "Ortak gider (aidat) borcunu ödemeyen kat malikine karşı alacak için icra takibi başlatılabilir veya dava yoluyla tahsil edilebilir. Alacağın dayanağı olarak yönetim planı, karar defteri ve borç dökümü kullanılır. Ödeme emrine itiraz edilirse itirazın iptali ya da kaldırılması yoluna gidilebilir." },
      { question: "Miras yoluyla kalan daire birden fazla mirasçıya aitse ne yapılır?", answer: "Daire birden fazla mirasçıya aitse ve anlaşma sağlanamazsa ortaklığın giderilmesi (izale-i şüyu) davası açılabilir. Dava ile taşınmazın paydaşlar arasında paylaştırılması veya satılarak bedelin paylaşılması sağlanır. Veraset intikali tamamlandıktan sonra tapu kaydı ve mirasçıların payları dosyada ortaya konulur." },
      { question: "Bahçelievler'de gayrimenkul davası hangi mahkemede görülür?", answer: "Gayrimenkul davası, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür. Kira ve tahliye gibi uyuşmazlıklar sulh hukuk mahkemesinde, tapu iptali ve tescil gibi davalar ise asliye hukuk mahkemesinde ele alınabilir. Dosyaya tapu kaydı ve sözleşme gibi belgeler eklenir." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Tapu iptal ve tescil davası, hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tarafından açılabilir. Tescilin dayanağının geçersiz olduğu veya hakkın tapuya doğru yansımadığı iddia edilebilir. Dava taşınmazın niteliğine göre görevli mahkemede görülür ve dosyaya tapu kaydı ile dayanak belgeler eklenir." },
    ],
    howToTitle: "Bahçelievler'de Ortaklığın Giderilmesi Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Mülkiyet Durumu İncelemesi", text: "Taşınmazın tapu kaydı ve paydaşlar tespit edilir." },
      { name: "Uzlaşma Girişimi", text: "Paydaşlar arasında satış veya paylaşım konusunda anlaşma aranır." },
      { name: "Dava Açılması", text: "Anlaşma sağlanamazsa sulh hukuk mahkemesinde dava açılır." },
      { name: "Satış/Paylaşım", text: "Mahkeme kararıyla taşınmaz satılır veya aynen paylaştırılır." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi", "tapu-iptali-ve-tescil-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "bahcelievler-icra-avukati",
    name: "Bahçelievler İcra Avukatı",
    heroTitle: "Bahçelievler İcra Avukatı",
    heroSubtitle:
      "Hizmet sektörü ve bireysel alacakların tahsili amacıyla icra takibi, itiraz ve haciz süreçlerinde temsil sağlanır; icra daireleri İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Bahçelievler İcra Avukatı | Takip ve Haciz",
    metaDescription:
      "Bahçelievler'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İcra ve iflas hukuku kapsamında Bahçelievler'deki alacaklı ve borçlu taraflara danışmanlık verir.",
    highlightCards: [
      { title: "Hizmet Sektörü Alacakları", description: "Ofis, otel ve iş merkezi işletmeleri arası alacakların takibi." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Hizmet sözleşmelerinden doğan alacaklar için icra takibi başlatılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "İhaleye katılım ve ihalenin feshi talepleri",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Yenibosna çevresindeki ofis, otel ve iş merkezi yoğunluğu, Bahçelievler'de hizmet sözleşmelerinden ve kira ilişkilerinden doğan ticari alacakların icra yoluyla takibini sık görülen bir ihtiyaç haline getirmektedir.",
      "Bu takiplere ilişkin uyuşmazlıklar İstanbul Bakırköy Adliyesi'ndeki icra mahkemelerinde görülür; borçlunun Bahçelievler'de yerleşik olduğu takiplerde yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "İcra takibi sözleşme, senet, fatura veya mahkeme ilamı gibi alacağı gösteren belgelerle başlatılabilir. Belgelerin alacağın miktarını ve dayanağını açıkça göstermesi önemlidir. Takip talebi bu belgelere dayanılarak yapılır; borçluya ödeme emri gönderilir ve süreç icra dairesi nezdinde yürütülür." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "İcra takibinde ödeme emrine itiraz süresi, tebliğden itibaren 7 gündür (İİK m.62). Bu süre içinde icra dairesine yapılan itiraz takibi durdurur. Süre kaçırılırsa takip kesinleşebilir ve haciz aşamasına geçilebilir; bu nedenle tebliğ tarihinin doğru tespit edilmesi önemlidir." },
      { question: "Ofis kirası ödenmezse ne yapılabilir?", answer: "Ofis kirası ödenmezse kira alacağı için icra takibi başlatılabilir, gerekirse tahliye talebi eklenebilir. Kira sözleşmesi ve ödeme kayıtları takibin dayanağı olarak kullanılır. Ödeme emrine itiraz edilirse süreç itirazın iptali ya da kaldırılması gibi yollarla devam eder; ödeme emrine itiraz süresi 7 gündür (İİK m.62)." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Haciz, kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir. Borçlunun mal varlığına yönelik bu işlem, takibin kesinleşmesinden sonra alacağın tahsili amacıyla yapılır. Kanunen haczedilemeyen mallar ile maaş gibi gelirlerde kanundaki sınırlamalar ayrıca gözetilir. Haciz işlemi icra dairesi eliyle yürütülür ve borçlu ile alacaklıya bilgi verilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Borçlu ödeme yapmaz ve itiraz etmezse takip kesinleşir; ardından haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür. Haczedilen malın satışından elde edilen bedel alacaklıya aktarılır. Borçlu itiraz ederse itirazın iptali veya kaldırılması gibi ek hukuki yollar gündeme gelir." },
    ],
    howToTitle: "Bahçelievler'de İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "bahcelievler-idare-avukati",
    name: "Bahçelievler İdare Avukatı",
    heroTitle: "Bahçelievler İdare Avukatı",
    heroSubtitle:
      "Belediye, imar ve ruhsat işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Bahçelievler İdare Avukatı | İptal Davası",
    metaDescription:
      "Bahçelievler'de idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. İdari işlemlerin iptali ve tam yargı davalarında Bahçelievler'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "İmar Uygulamaları", description: "Yapı ruhsatı ve imar durumu uyuşmazlıkları." },
      { title: "Otel/İşyeri Ruhsatları", description: "Ofis ve otel işletmelerine ilişkin ruhsat süreçleri." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Yapı ruhsatı ve imar durumu uyuşmazlıklarında iptal davası açılması",
      "Otel ve işyeri ruhsat işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
      "Belediye imar planı değişikliklerine karşı dava açılması",
    ],
    localParagraphs: [
      "E-5 koridorundaki yoğun otel ve ofis yapılaşması, Bahçelievler'de yapı ruhsatı ve işyeri açma izinlerine ilişkin idari uyuşmazlıkların da düzenli biçimde gündeme gelmesine yol açmaktadır.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "Yapı ruhsatı iptal edilirse ne yapılabilir?", answer: "Yapı ruhsatı iptal edilirse iptal işlemine karşı idare mahkemesinde dava açılabilir. İptal davası için genel süre, işlemin tebliğinden itibaren 60 gündür (İYUK m.7). İptale ilişkin işlem yazısı, tebliğ tarihi ve ruhsat belgeleri dava dosyasına eklenir; dava İstanbul idare mahkemelerinde görülür." },
      { question: "Otel işletme belgesi reddedilirse itiraz süresi nedir?", answer: "Otel işletme belgesi reddedilirse tebliğ tarihinden itibaren 60 gün içinde idare mahkemesinde dava açılabilir (İYUK m.7). Ret kararı ve gerekçesi dava dilekçesinde değerlendirilir. Süre tebliğ tarihinden işlediği için tebliğ zarfı ve tarih bilgisi saklanmalıdır; davalar İstanbul idare mahkemelerinde görülür." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İmar planına karşı dava, ilan tarihinden itibaren yasal süre içinde idare mahkemesinde açılmalıdır; idari davalarda genel süre 60 gündür (İYUK m.7). Plan değişikliğinden etkilenen taşınmaz malikleri veya ilgili kişiler dava açabilir. Sürenin kaçırılmaması için ilan tarihi ve usulü doğru tespit edilmelidir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, idari para cezasına karşı yasal süresinde idare mahkemesinde dava açılabilir. İdari davalarda genel dava açma süresi, işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Ceza tutanağı ve tebliğ belgeleri dosyaya eklenir; iptal talebi hukuka aykırılık gerekçeleriyle birlikte sunulur." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde iptal davası açılabilir. Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Başvuru dosyası, ret yazısı ve tebliğ tarihini gösteren belgeler dava açılmadan önce derlenir." },
    ],
    howToTitle: "Bahçelievler'de İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "bahcelievler-is-hukuku-avukati",
    name: "Bahçelievler İş Hukuku Avukatı",
    heroTitle: "Bahçelievler İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Bahçelievler İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Bahçelievler'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Bahçelievler'deki ofis, otel ve hizmet sektörü çalışanlarına ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Otel/Ofis Sektörü", description: "Vardiyalı çalışma ve fazla mesai uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Vardiyalı çalışmaya bağlı fazla mesai ve hafta tatili alacaklarının tahsili",
      "Yıllık izin ve diğer işçilik alacaklarının tahsili",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "Mobbing iddialarına ilişkin hukuki süreçler",
    ],
    localParagraphs: [
      "Yenibosna çevresindeki otel, ofis ve iş merkezlerinde yoğun bir hizmet sektörü istihdamının bulunduğu Bahçelievler'de, vardiyalı çalışma düzenine bağlı fazla mesai ve hafta tatili alacağı uyuşmazlıkları sık gündeme gelmektedir.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Bakırköy Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Vardiyalı çalışanların fazla mesai hakkı nasıl hesaplanır?", answer: "Haftalık 45 saati aşan çalışma süreleri fazla mesai olarak değerlendirilir ve ücrete yansıtılır. Vardiyalı çalışmada fiili çalışma süresi, vardiya çizelgeleri ve bordro kayıtları üzerinden belirlenir. Hesaplamada ödenen ücret ile fiilen çalışılan saatler karşılaştırılır; anlaşmazlıkta alacak iş mahkemesinde talep edilebilir." },
      { question: "Otel çalışanının hafta tatili ücreti ödenmezse ne yapılabilir?", answer: "Ödenmeyen hafta tatili alacağı için arabuluculuk ve dava yoluna gidilebilir. Hafta tatilinde çalışıldığı halde karşılığı ödenmemişse vardiya kayıtları ve bordrolar alacağın hesabında esas alınır. Alacak talebi iş mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür. Arabuluculuk başvurusu bu aşamada dava şartı olarak aranır." },
      { question: "Bahçelievler'de iş mahkemesi nerededir?", answer: "Bölgedeki iş davalarına İstanbul Bakırköy Adliyesi bünyesindeki iş mahkemeleri bakar. İşe iade ve işçilik alacağı davaları, arabuluculukta anlaşma sağlanamazsa bu mahkemelerde görülür. İşe iade için fesihten itibaren 1 ay içinde arabuluculuğa başvurulur; son tutanaktan itibaren 2 hafta içinde dava açılır." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "İşe iade sürecinin toplam süresi dosyaya göre değişir. Süreç, fesihten itibaren 1 ay içinde arabuluculuğa başvuru ile başlar; anlaşma sağlanamazsa son tutanaktan itibaren 2 hafta içinde dava açılır. İş K. m.18 uyarınca en az 30 işçi ve 6 ay kıdem şartı aranır." },
      { question: "Mobbing iddiası nasıl ispatlanır?", answer: "Mobbing iddiası, yazışmalar, tanık beyanları ve varsa kayıtlarla desteklenerek ispatlanmaya çalışılır. Süreklilik taşıyan baskı, aşağılama veya dışlama gibi davranışların tarihleri ve niteliği somut olarak ortaya konulmalıdır. Deliller dava öncesinde derlenir ve iddianın hukuki sonuçları iş mahkemesinde değerlendirilir." },
    ],
    howToTitle: "Bahçelievler'de İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "bahcelievler-kira-tahliye-avukati",
    name: "Bahçelievler Kira ve Tahliye Avukatı",
    heroTitle: "Bahçelievler Kira ve Tahliye Avukatı",
    heroSubtitle:
      "İstanbul Bakırköy Adliyesi bünyesindeki sulh hukuk mahkemelerinin yetkili olduğu kira bedeli tespiti, kira sözleşmesi uyuşmazlıkları ile konut ve ofis tahliyesi süreçlerinde hukuki destek verilmektedir.",
    metaTitle: "Bahçelievler Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Bahçelievler'de kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kira hukuku kapsamında Bahçelievler'deki kiraya verenler ve kiracılar için danışmanlık sağlayan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Ofis/İşyeri Tahliyesi", description: "Yenibosna çevresindeki ofis kiralarında tahliye süreci." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Konut ve ofis kira sözleşmelerinin hazırlanması ve incelenmesi",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Ofis kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "1930'larda hazırlanan imar planıyla gelişen Bahçelievler'in yerleşik konut dokusu, Yenibosna çevresindeki yoğun ofis kiralama piyasasıyla iç içedir; bu birliktelik konut ve işyeri kiralarını farklı usul kurallarına tabi kılabilmektedir.",
      "Uygulanacak usul, taşınmazın konut ya da işyeri niteliğinde olmasına göre değişebilir; her iki halde de yetkili sulh hukuk mahkemeleri İstanbul Bakırköy Adliyesi bünyesinde yer almaktadır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kiracı; kira borcunun ödenmemesi, geçerli bir taahhütname veya kiraya verenin ihtiyacı gibi sebeplerle tahliye edilebilir. Kira borcunda kiracıya ödeme için 30 gün süre verilir (TBK m.315); süre sonunda ödeme yapılmazsa tahliye yoluna gidilebilir. Hangi yolun izleneceği olayın niteliğine göre belirlenir." },
      { question: "Ofis kiracısının tahliyesi konuttan farklı mı?", answer: "Genel usul benzer olmakla birlikte, işyeri kiralarında ihtiyaç sebebiyle tahliyede ek koşullar aranabilir. Taşınmazın konut ya da işyeri niteliğinde olması uygulanacak usulü etkiler. Her iki halde de yetkili sulh hukuk mahkemeleri İstanbul Bakırköy Adliyesi bünyesinde yer alır." },
      { question: "Bahçelievler'de tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine göre değişir; birkaç aydan bir buçuk yıla kadar sürebilir. İstanbul Bakırköy Adliyesi bünyesindeki sulh hukuk mahkemelerinde görülen davalarda süreyi tebligat işlemleri, delillerin toplanması ve gerekirse bilirkişi incelemesi etkiler. Kira borcu veya taahhütname gibi belgeye dayalı hallerde farklı yollar izlenebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Rayiç bedel tespiti, mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Dava sulh hukuk mahkemesinde açılır; mahkeme bilirkişi aracılığıyla bölgedeki emsal kira bedellerini araştırır. Kira bedelinin uyarlanması da bu tespitin sonucuna göre değerlendirilir. Talep edilirken mevcut kira sözleşmesi ve ödeme kayıtları dosyaya sunulur." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname varsa tahliye doğrudan icra dairesi kanalıyla istenebilir. Taahhütnamenin geçerli olması ve tahliye talebinin usulüne uygun yapılması gerekir. Bu yol, mahkemede dava açılmasından farklı bir süreçtir; belgenin içeriği ve tarihi önceden incelenir." },
    ],
    howToTitle: "Bahçelievler'de Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "bahcelievler-vergi-avukati",
    name: "Bahçelievler Vergi Avukatı",
    heroTitle: "Bahçelievler Vergi Avukatı",
    heroSubtitle:
      "Yetkili mahkeme İstanbul vergi mahkemeleri olmak üzere, hizmet sektörü işletmelerini ilgilendiren vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde hukuki temsil sunulmaktadır.",
    metaTitle: "Bahçelievler Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Bahçelievler'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Bahçelievler'deki müvekkillerine danışmanlık sağlayan Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunmaktadır.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Otel/Ofis İşletmeleri", description: "Konaklama ve hizmet sektörü işletmelerine yönelik vergi uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Otel ve ofis işletmelerinde vergi incelemesi sürecinde danışmanlık",
      "Konaklama vergisi ve KDV uyuşmazlıklarında destek",
    ],
    localParagraphs: [
      "Bahçelievler'de sık karşılaşılan vergi uyuşmazlıkları arasında konaklama vergisi, KDV ve stopaj kaynaklı incelemeler ile bunlara bağlı ceza kesme işlemleri yer alır; bu durum Yenibosna çevresindeki yoğun otel ve ofis işletmeciliğinden kaynaklanır.",
      "Bu işlemler idari aşamada Yenibosna Vergi Dairesi Müdürlüğü nezdinde yürütülür; itiraz davaları İstanbul vergi mahkemelerinde görülür ve dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Vergi ve ceza ihbarnamesine karşı dava açma süresi, tebliğden itibaren 30 gündür (İYUK m.7). Dava vergi mahkemesinde açılır; süre kaçırılırsa tarhiyat kesinleşir. Dava süresi dolmadan uzlaşma başvurusu da değerlendirilebilir; uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "Vergi davaları İstanbul vergi mahkemelerinde görülür. Vergi ve ceza ihbarnamesine karşı iptal davası bu mahkemelerde açılır ve dava açma süresi tebliğden itibaren 30 gündür (İYUK m.7). İdari aşamadaki işlemler ise vergi dairesi müdürlüğü nezdinde yürütülür." },
      { question: "Konaklama vergisi eksik beyan edilirse ne olur?", answer: "Konaklama vergisi eksik beyan edilirse re'sen veya ikmalen tarhiyat ve buna bağlı ceza uygulanabilir. Bu işlemlere karşı tebliğden itibaren 30 gün içinde vergi mahkemesinde dava açılabilir (İYUK m.7). İdari aşamada işlemler Yenibosna Vergi Dairesi Müdürlüğü nezdinde yürütülür; uzlaşma başvurusu da değerlendirilebilir." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma başvurusu dava hakkını ortadan kaldırmaz; uzlaşma sağlanamazsa kalan dava açma süresi korunur. Uzlaşma vergi idaresi nezdinde yürütülür ve taraflar anlaşırsa uyuşmazlık dava açılmadan sona erer. Anlaşma sağlanamazsa vergi mahkemesinde dava açılabilir; bu nedenle başvuru ile dava süresinin birlikte takip edilmesi gerekir." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Vergi ödeme emrine karşı, tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır. Ödeme emri, amme alacağının tahsili için gönderilir. Süre kaçırılırsa takip devam edebilir; bu nedenle tebliğ tarihi ve ödeme emrinin dayanağı doğru belirlenmelidir. Gerekirse ödeme emrine karşı iptal davası süresi içinde açılır." },
    ],
    howToTitle: "Bahçelievler'de Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "bahcelievler-borclar-hukuku-avukati",
    name: "Bahçelievler Borçlar Hukuku Avukatı",
    heroTitle: "Bahçelievler Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Hizmet sözleşmesi uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; ticaret ve asliye hukuk mahkemeleri İstanbul Bakırköy Adliyesi'ndedir.",
    metaTitle: "Bahçelievler Borçlar Hukuku Avukatı",
    metaDescription:
      "Bahçelievler'de sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Borçlar hukuku kapsamında Bahçelievler'deki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık verir.",
    highlightCards: [
      { title: "Hizmet Sözleşmeleri", description: "Otel ve ofis işletmelerine ilişkin hizmet sözleşmesi uyuşmazlıkları." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Acentelik Sözleşmeleri", description: "Turizm ve hizmet sektörü acentelik ilişkilerinden doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Hizmet ve acentelik sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Ayıplı hizmet nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
      "Kefalet ve teminat sözleşmelerinden doğan uyuşmazlıklar",
    ],
    localParagraphs: [
      "Yenibosna çevresindeki otel ve ofis işletmelerinin yoğunluğu nedeniyle Bahçelievler'de hizmet sözleşmelerinden ve turizm acenteliği ilişkilerinden doğan uyuşmazlıklar sık karşılaşılan dava türleri arasındadır.",
      "Bu davalar İstanbul Bakırköy Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Hizmet sağlayıcı taahhüdünü yerine getirmezse ne yapılabilir?", answer: "Hizmet sağlayıcı taahhüdünü yerine getirmezse sözleşmeden dönme, tazminat veya ifa davası gibi hukuki yollara başvurulabilir. Hangi yolun seçileceği sözleşme hükümlerine ve ihlalin niteliğine bağlıdır. Sözleşme metni, ödeme belgeleri ve yazışmalar hizmetin eksik ya da hiç verilmediğinin ispatında kullanılır." },
      { question: "Acentelik sözleşmesi tek taraflı feshedilebilir mi?", answer: "Acentelik sözleşmesinin tek taraflı feshi, sözleşme şartlarına ve haklı sebebin bulunup bulunmadığına göre değerlendirilir. Fesih bildirimi usulüne uygun yapılmazsa tazminat sorumluluğu doğabilir. Bu nedenle sözleşmedeki fesih ve bildirim hükümleri ile tarafların yazışmaları önce incelenir. Haklı sebep iddiası varsa buna dayanak belgeler de dosyaya eklenir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Ticari alacak davası, niteliğine göre asliye ticaret mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür. Ticari nitelikteki bazı alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması dava şartı olabilir. Dosyaya sözleşme, fatura ve yazışmalar gibi alacağı gösteren belgeler eklenir." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, dava öncesi arabuluculuk her uyuşmazlıkta şart değildir; yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Şartın aranıp aranmadığı uyuşmazlığın konusuna göre belirlenir. Zorunlu olduğu hallerde arabuluculuğa başvurulmadan açılan dava usulden reddedilebilir. Bu nedenle uyuşmazlığın türü baştan doğru nitelendirilmelidir." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse alacak talep edilemez; ileri sürmezse talep edilebilir. Zamanaşımı mahkemece kendiliğinden dikkate alınmaz, borçlunun itirazına bağlıdır. Bu nedenle alacağın doğum tarihi ve zamanaşımını kesen işlemler dosyada dikkatle incelenir. Sözleşme, fatura ve yazışmalar bu incelemeye esas alınır." },
    ],
    howToTitle: "Bahçelievler'de Alacak Davası Süreci Nasıl İşler?",
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

export const bahcelievlerServices: PseoService[] = [...bahcelievlerBaseServices, bahcelievlerMiras];
