import type { PseoService } from "./types";
import { beykozMiras } from "./miras/beykozMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const beykozBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "beykoz-avukat",
    name: "Beykoz Avukat",
    heroTitle: "Beykoz Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, Boğaziçi kıyısındaki tarihi yalıları, Anadolu Hisarı'nı ve geniş orman alanlarıyla İstanbul'un en yeşil ilçelerinden biri olan Beykoz'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçenin kendi adliyesi bulunmaktadır.",
    metaTitle: "Beykoz Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Beykoz'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. 310 km²'lik geniş alanı, geniş orman varlığı ve Boğaziçi kıyısındaki tarihi dokusuyla İstanbul'un en düşük nüfus yoğunluklu ilçelerinden biri olan Beykoz'da ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Yalı, villa ve Boğaziçi imar uyuşmazlıklarının takibi." },
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
      "Yalı, villa ve Boğaziçi imar kısıtlamalarına ilişkin gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "Anadolu Yakası'nın en geniş yüzölçümüne sahip ilçelerinden biri olan Beykoz, kişi başına düşen yeşil alan bakımından İstanbul'da başı çekmektedir; Polonezköy Tabiat Parkı ve geniş orman varlığı ilçenin kırsal-doğal karakterini korumasını sağlar.",
      "İlçedeki hukuki uyuşmazlıklar Beykoz Adliyesi'nde, ağır ceza davaları ise İstanbul Anadolu Adliyesi'nde görülür; vergisel işlemler Beykoz Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Beykoz'daki davalara hangi adliye bakıyor?", answer: "Beykoz'un kendi adliyesi (Beykoz Adliyesi) bulunmaktadır; hukuki uyuşmazlıkların çoğu burada görülür. Yalnızca ağır ceza mahkemesinin görev alanına giren davalar İstanbul Anadolu Adliyesi'nde görülür. Vergisel işlemler Beykoz Vergi Dairesi Müdürlüğü nezdinde yürütülür; vergi davaları İstanbul vergi mahkemelerinde görülür." },
      { question: "Randevu nasıl alınır?", answer: "Randevu için WhatsApp veya telefon üzerinden iletişime geçilir ve konu kısaca paylaşılır; ardından uygun bir görüşme günü belirlenir. Danışmanlık görüşmesi ücret karşılığı yapılır ve hukuki durum değerlendirilir. Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir ve süreç başlatılır." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve temsil hizmeti verilir. Bu kapsamda boşanma ve velayet, işçilik alacakları, icra takibi, idari işlemlere karşı iptal davaları ve vergi uyuşmazlıkları gibi konular yürütülür. Ayrıntılar randevuda paylaşılır." },
      { question: "Büro Beykoz'da mı bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Beykoz bölgesindeki müvekkillere de aynı kapsamda hizmet verilir. Görüşmeler yüz yüze veya çevrim içi planlanabilir; ilk iletişim WhatsApp ya da telefonla kurulur. Dava ve işlemler yetkili adliye ve idari merciler nezdinde yürütülür." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Danışmanlık görüşmesi ücret karşılığı yapılır ve ücret dosyanın niteliğine göre değişir. Uyuşmazlığın türü, belge yoğunluğu ve gerekecek takip süreci gibi unsurlar dikkate alınır. Ücret ve kapsam bilgisi randevu sırasında paylaşılır; temsil kararı alınırsa vekalet düzenlenir." },
      { question: "Yalı veya villa alım satımında hukuki destek alınabilir mi?", answer: "Evet, yalı veya villa alım satımında tapu incelemesi, sözleşme hazırlığı ve imar durumu değerlendirmesi konusunda danışmanlık sağlanır. Boğaziçi Kanunu kapsamındaki imar kısıtlamaları ve varsa sit alanı statüsü alım kararından önce incelenir. Tapu kaydı ve imar durumu bu değerlendirmenin temelini oluşturur." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Görüşmeler tercihe göre yüz yüze veya çevrim içi olarak planlanabilir. İlk iletişim WhatsApp ya da telefonla kurulur, ardından görüşme günü belirlenir. Hangi yöntem seçilirse seçilsin hukuki durum değerlendirilir; temsil kararı alınırsa vekalet düzenlenir ve belgeler birlikte derlenir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Gözaltı halinde vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmelidir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından önem taşır. Müdafi, ifade alma ve soruşturma aşamalarında şüpheliye eşlik eder." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, dosyanın seyri hakkında süreç boyunca bilgi verilir. Temsil sürecinde gelişmeler müvekkille paylaşılır; mahkeme ve idari merciler nezdindeki işlemler, duruşma tarihleri ve yeni evraklar takip edilerek bildirilir. Bu takip, vekalet düzenlendikten sonra yürütülen dosya yönetiminin bir parçasıdır." },
      { question: "Beykoz Adliyesi'ne ulaşım nasıl?", answer: "Beykoz Adliyesi'ne ulaşım, raylı sistem bağlantısı bulunmadığından İETT otobüs ve dolmuş hatları ile sağlanır. Duruşma gününden önce mahkeme ve saat bilgisinin dosya kayıtlarından teyit edilmesi, ulaşım süresinin planlanması açısından önem taşır. Ağır ceza davaları ise İstanbul Anadolu Adliyesi'nde görülür." },
    ],
    howToTitle: "Beykoz'da Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Beykoz Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "beykoz-bosanma-avukati",
    name: "Beykoz Boşanma Avukatı",
    heroTitle: "Beykoz Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; aile mahkemesi Beykoz Adliyesi bünyesindedir.",
    metaTitle: "Beykoz Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Beykoz'da anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Aile hukuku alanında Beykoz'daki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlar.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Mal Rejimi Tasfiyesi", description: "Yalı, villa gibi değerli taşınmazların paylaşımı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Yalı, villa ve orman köyü mülklerinin dahil olduğu mal rejimi tasfiyesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Villa ve müstakil ev tipi yerleşimin yaygın olduğu, Boğaz kıyısında tarihi yalıların da bulunduğu Beykoz'da, boşanma sürecindeki mal rejimi tasfiyelerinde taşınmaz değerlemesi ayrı bir önem taşımaktadır.",
      "Boşanma, velayet ve nafaka davalarına Beykoz Adliyesi'ndeki aile mahkemesinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Boşanma davası için Beykoz Adliyesi'ndeki aile mahkemesine başvurulur. Yetki TMK m.168 uyarınca eşlerden birinin yerleşim yeri mahkemesi veya eşlerin en son altı aydan beri birlikte oturdukları yer mahkemesidir. Anlaşmalı boşanmada en az 1 yıllık evlilik ve duruşmada iki eşin birlikte beyanı aranır (TMK m.166/3)." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Çocuk belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir. Velayet düzenlenirken esas ölçüt çocuğun yararıdır; çocuğun yaşı ve gelişim düzeyi, görüşünün ne ölçüde değerlendirileceğini etkiler. Mahkeme, tarafların beyanlarını dosyadaki delillerle birlikte değerlendirir. Bu değerlendirmede velayetin kime verileceği ve kişisel ilişki düzeni de gözetilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Nafaka miktarı, tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilerek belirlenir. Hakim, nafaka yükümlüsünün ödeme gücünü ve nafaka alacaklısının ihtiyaçlarını dosyadaki delillerle ölçer. Koşullar değişirse nafakanın artırılması, azaltılması veya kaldırılması talep edilebilir. Nafaka çocuğun giderlerine yönelik olabileceği gibi eşin ihtiyacına da ilişkin olabilir." },
      { question: "Yalı gibi özel statülü bir taşınmaz mal paylaşımını nasıl etkiler?", answer: "Yalı gibi özel statülü bir taşınmazda mal paylaşımı yapılırken taşınmazın niteliği ve tapu kaydı değerlemede dikkate alınır; sit alanı statüsü satış veya değerleme sürecini etkileyebilir. Mal rejimi tasfiyesinde taşınmazın edinilme zamanı ve değeri katılma alacağı hesabını belirler. Değerleme genellikle bilirkişi aracılığıyla yapılır." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir. Barışma halinde davanın sürdürülmesine gerek kalmaz; taraflar bu iradelerini mahkemeye bildirir. Bu yol, boşanma kararı verilmeden önce açıktır ve davanın seyri tarafların açıklamalarına göre mahkemece yürütülür. Anlaşmalı boşanma için ise protokolün eksiksiz olması önem taşır." },
    ],
    howToTitle: "Beykoz'da Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "İhtiyaç Analizi", text: "Velayet, nafaka ve mal rejimi talepleri belirlenir." },
      { name: "Dilekçe Hazırlığı", text: "Duruma uygun dava dilekçesi veya protokol yazılır." },
      { name: "Dava Açılışı", text: "Yetkili aile mahkemesine başvurulur." },
      { name: "Sonuç", text: "Duruşma sonrası karar açıklanır." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "nafakada-yuzde-kac-sorusu"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "beykoz-ceza-avukati",
    name: "Beykoz Ceza Avukatı",
    heroTitle: "Beykoz Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; genel ceza davaları Beykoz Adliyesi'nde, ağır ceza davaları İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Beykoz Ceza Avukatı | Müdafilik",
    metaDescription:
      "Beykoz'da soruşturma, kovuşturma, tutukluluğa itiraz ve orman/kıyı alanlarına ilişkin ceza uyuşmazlıklarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. Ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında Beykoz'daki müvekkillerine müdafilik yapar.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Orman/Kıyı Alanı Suçları", description: "Kaçak yapılaşma ve orman tahribatına ilişkin ceza davaları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Orman alanlarında kaçak yapılaşma ve tahribata ilişkin ceza davalarında savunma",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "İstanbul'un en geniş orman varlığına sahip ilçelerinden biri olan Beykoz'da, 6831 sayılı Orman Kanunu kapsamındaki kaçak yapılaşma ve orman tahribatı iddialarına ilişkin ceza yargılamaları kendine özgü bir uzmanlık gerektirmektedir.",
      "Genel ceza davaları Beykoz Adliyesi'nde görülürken, ağır ceza mahkemesinin görev alanına giren davalarda yetki İstanbul Anadolu Adliyesi'ndedir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar.",
    ],
    faqs: [
      { question: "Beykoz'da bir ceza davası hangi adliyede görülür?", answer: "Genel ceza davaları Beykoz Adliyesi'nde, ağır ceza mahkemesinin görev alanına giren davalar ise İstanbul Anadolu Adliyesi'nde görülür. Hangi mahkemenin görevli olduğu suçun niteliğine göre belirlenir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar ve bu hakkın zamanında kullanılması önem taşır." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "İfade müdafi bulunmadan da alınabilir; ancak şüpheli veya sanığın müdafi bulundurma hakkı vardır ve bu hakkın kullanılması önerilir. Müdafi, ifade sırasında hakların korunmasına ve dosya içeriğinin takip edilmesine yardımcı olur. Gözaltına alınan kişinin müdafi ile görüşme hakkı gözaltı anından itibaren doğar." },
      { question: "Orman alanında kaçak yapı nedeniyle ceza soruşturması açılabilir mi?", answer: "Evet, orman alanında kaçak yapı nedeniyle 6831 sayılı Orman Kanunu ve ilgili TCK hükümleri kapsamında ceza soruşturması açılabilir. Beykoz'da geniş orman varlığı nedeniyle bu tür iddialar gündeme gelir. Soruşturmada taşınmazın orman statüsü ve yapının niteliği önem taşabilir; müdafi dosyayı inceleyerek savunmayı hazırlar." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, kovuşturmaya yer olmadığı kararına karşı sulh ceza hakimliğine itiraz edilebilir. İtiraz süresi kararın tebliğinden itibaren 15 gündür. İtiraz dilekçesinde kararın hangi yönlerden hatalı olduğu ve soruşturmada eksik kalan hususların neler olduğu belirtilir. Karar kesinleştiğinde soruşturma sona erer; itirazın kabulü halinde soruşturmanın devamı sağlanabilir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Uzlaşma sağlanamazsa yargılama kaldığı yerden devam eder. Uzlaşmaya tabi suçlarda uzlaştırma süreci sonuçsuz kalırsa soruşturma veya kovuşturma olağan akışında yürütülür. Uzlaşma sürecinde taraflar bir araya getirilir; teklif kabul edilmezse savunma ve delil sunma hakları aynen devam eder." },
    ],
    howToTitle: "Beykoz'da Ceza Yargılaması Nasıl İlerler?",
    howToSteps: [
      { name: "Olay Bildirimi", text: "Şikayet, ihbar veya resen harekete geçilir." },
      { name: "Soruşturma Aşaması", text: "Deliller toplanır, ifadeler alınır." },
      { name: "Dava Açılması", text: "İddianamenin kabulüyle kovuşturma başlar." },
      { name: "Temyiz/İstinaf", text: "Karara karşı üst yargı yoluna gidilebilir." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "kosullu-saliverilme-oranlari"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "beykoz-gayrimenkul-avukati",
    name: "Beykoz Gayrimenkul Avukatı",
    heroTitle: "Beykoz Gayrimenkul Avukatı",
    heroSubtitle:
      "Boğaziçi Kanunu kapsamındaki yapılaşma kısıtlamaları, yalı ve villa alım-satımı, tapu uyuşmazlıklarında hukuki destek sağlanır; davalar Beykoz Adliyesi'nde görülür.",
    metaTitle: "Beykoz Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Beykoz'da yalı, villa ve Boğaziçi imar kısıtlamaları, tapu iptali ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Boğaziçi imar kısıtlamaları, yalı/villa uyuşmazlıkları ve tapu davalarında Beykoz'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Boğaziçi İmar Kısıtlamaları", description: "2960 sayılı Kanun kapsamındaki yapılaşma sınırlamaları." },
      { title: "Yalı ve Villa Uyuşmazlıkları", description: "Tarihi taşınmazların alım satımı ve restorasyon sözleşmeleri." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Orman/2B Arazi Sınır Uyuşmazlıkları", description: "Kadastro ve orman sınırı tespitine ilişkin davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Boğaziçi Kanunu kapsamındaki imar ve yapılaşma kısıtlamalarına ilişkin danışmanlık",
      "Yalı ve villa alım-satımında tapu ve imar durumu incelemesi",
      "Tarihi taşınmazların restorasyon sözleşmelerinin hazırlanması",
      "Orman sınırı ve 2B arazi statü tespitlerine ilişkin uyuşmazlıklar",
      "Tapu iptali ve tescil davalarının açılması",
      "Kira bedeli tespiti ve uyarlama davaları",
    ],
    localParagraphs: [
      "Boğaziçi'ne kıyısı bulunan sınırlı sayıdaki ilçeden biri olan Beykoz'da, 2960 sayılı Boğaziçi Kanunu kapsamındaki öngörülen imar planı ve yapılaşma sınırlamaları, tarihi yalı ve villaların alım-satım ile restorasyon süreçlerini doğrudan etkilemektedir.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Beykoz Adliyesi bünyesinde görülür.",
    ],
    faqs: [
      { question: "Boğaziçi Kanunu kapsamındaki bir taşınmazda yapılaşma nasıl kısıtlanır?", answer: "2960 sayılı Kanun ve ilgili imar planları kapsamında öngörü/geçiş bölgesi statüsüne göre yükseklik ve inşaat sınırlamaları uygulanır. Bu sınırlamalar tarihi yalı ve villaların alım satımını ve restorasyon süreçlerini doğrudan etkiler. Taşınmazın imar durumu, herhangi bir işlem yapılmadan önce incelenmelidir." },
      { question: "Yalı satın alırken nelere dikkat edilmeli?", answer: "Yalı satın alırken tapu kaydı, imar durumu, sit alanı statüsü ve varsa restorasyon şartları detaylı incelenmelidir. Boğaziçi Kanunu kapsamındaki yapılaşma sınırlamaları taşınmazın kullanım imkanlarını etkileyebilir. Satış sözleşmesi bu bilgiler doğrultusunda hazırlanmalı; tapu devri öncesinde taşınmazın hukuki durumu netleştirilmelidir." },
      { question: "Beykoz'da gayrimenkul davası hangi mahkemede görülür?", answer: "Gayrimenkul davası, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Beykoz Adliyesi bünyesinde görülür. Kira ve tahliye gibi uyuşmazlıklar sulh hukuk mahkemesinde, tapu iptali ve tescil gibi davalar ise asliye hukuk mahkemesinde ele alınabilir. Dosyaya tapu kaydı ve sözleşme gibi belgeler eklenir." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Tapu iptal ve tescil davası, hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tarafından açılabilir. Tescilin dayanağının geçersiz olduğu veya hakkın tapuya doğru yansımadığı iddia edilebilir. Dava taşınmazın niteliğine göre görevli mahkemede görülür ve dosyaya tapu kaydı ile dayanak belgeler eklenir." },
      { question: "Orman sınırına yakın bir arsanın statüsü nasıl öğrenilir?", answer: "Orman sınırına yakın bir arsanın statüsü, orman kadastro müdürlüğünden ve tapu kayıtlarından taşınmazın 2B arazisi olup olmadığı sorgulanarak öğrenilebilir. Beykoz'da geniş orman varlığı nedeniyle bu inceleme alımdan önce önem taşır. Statü uyuşmazlığı çıkarsa idare mahkemesinde dava açılabilir." },
    ],
    howToTitle: "Beykoz'da Tapu Uyuşmazlığı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Kayıt İncelemesi", text: "Tapu ve imar durumu belgeleri incelenir." },
      { name: "Uyuşmazlığın Netleştirilmesi", text: "İddia ve dayanak deliller belirlenir." },
      { name: "Dava Açılması", text: "Yetkili mahkemede dava süreci başlatılır." },
      { name: "Sonuçlanma", text: "Karar veya bilirkişi raporu doğrultusunda süreç tamamlanır." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "beykoz-icra-avukati",
    name: "Beykoz İcra Avukatı",
    heroTitle: "Beykoz İcra Avukatı",
    heroSubtitle:
      "Alacak tahsili amacıyla icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır; icra daireleri Beykoz Adliyesi bünyesindedir.",
    metaTitle: "Beykoz İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Beykoz'da icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İcra ve iflas hukuku kapsamında Beykoz'daki alacaklı ve borçlu taraflara danışmanlık verir.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "Restorasyon/İnşaat Alacakları", description: "Yalı ve villa onarım işlerinden doğan alacak takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "Restorasyon ve inşaat işlerinden doğan alacakların takibi",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Tarihi yalı ve villaların restorasyonuna yönelik yapım işlerinin sık görüldüğü Beykoz'da, yüklenici-işveren ilişkilerinden doğan alacaklar icra takiplerinin sık başvurulan nedenleri arasındadır.",
      "Bu takiplere ilişkin uyuşmazlıklar Beykoz Adliyesi'ndeki icra mahkemelerinde görülür; borçlunun Beykoz'da yerleşik olduğu takiplerde yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "İcra takibi sözleşme, senet, fatura veya mahkeme ilamı gibi alacağı gösteren belgelerle başlatılabilir. Belgelerin alacağın miktarını ve dayanağını açıkça göstermesi önemlidir. Takip talebi bu belgelere dayanılarak yapılır; borçluya ödeme emri gönderilir ve süreç icra dairesi nezdinde yürütülür." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "İcra takibinde ödeme emrine itiraz süresi, tebliğden itibaren 7 gündür (İİK m.62). Bu süre içinde icra dairesine yapılan itiraz takibi durdurur. Süre kaçırılırsa takip kesinleşebilir ve haciz aşamasına geçilebilir; bu nedenle tebliğ tarihinin doğru tespit edilmesi önemlidir." },
      { question: "Restorasyon işini yarım bırakan yüklenici için icra takibi başlatılabilir mi?", answer: "Evet, restorasyon işini yarım bırakan yüklenici için sözleşmeye dayanılarak alacak veya tazminat için icra takibi başlatılabilir. Takibin dayanağı sözleşme, ödeme belgeleri ve iş teslim kayıtlarıdır. Yüklenici ödeme emrine 7 gün içinde itiraz edebilir (İİK m.62); itiraz halinde itirazın iptali davası gündeme gelebilir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Haciz, kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir. Borçlunun mal varlığına yönelik bu işlem, takibin kesinleşmesinden sonra alacağın tahsili amacıyla yapılır. Kanunen haczedilemeyen mallar ile maaş gibi gelirlerde kanundaki sınırlamalar ayrıca gözetilir. Haciz işlemi icra dairesi eliyle yürütülür ve borçlu ile alacaklıya bilgi verilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Borçlu ödeme yapmaz ve itiraz etmezse takip kesinleşir; ardından haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür. Haczedilen malın satışından elde edilen bedel alacaklıya aktarılır. Borçlu itiraz ederse itirazın iptali veya kaldırılması gibi ek hukuki yollar gündeme gelir." },
    ],
    howToTitle: "Beykoz'da İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "beykoz-idare-avukati",
    name: "Beykoz İdare Avukatı",
    heroTitle: "Beykoz İdare Avukatı",
    heroSubtitle:
      "Orman/2B arazi statü tespitleri, Boğaziçi imar kısıtlamaları ve belediye işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Beykoz İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Beykoz'da idari işlemlerin iptali, orman/kıyı alanı statü tespitlerine itiraz ve tazminat davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. İdari işlemlerin iptali ve tam yargı davalarında Beykoz'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Orman/2B Statü Tespitleri", description: "Arazinin orman sayılıp sayılmadığına ilişkin idari işlemlere itiraz." },
      { title: "Boğaziçi İmar Uygulamaları", description: "Öngörü/geçiş bölgesi kararlarına karşı dava süreçleri." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Orman/2B arazi statü tespitlerine karşı idari dava süreçleri",
      "Boğaziçi Kanunu kapsamındaki imar planı kararlarına karşı iptal davası açılması",
      "Belediye ruhsat işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Geniş orman varlığı ve Boğaziçi'ne kıyısı bulunan Beykoz'da, arazinin orman sayılıp sayılmadığına ilişkin statü tespitleri ve Boğaziçi Kanunu kapsamındaki imar kararları sık başvurulan idari dava konuları arasındadır.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "Orman statü tespitine karşı hangi sürede dava açılmalı?", answer: "Orman statü tespitine karşı tebliğ veya öğrenme tarihinden itibaren 60 gün içinde idare mahkemesinde dava açılabilir (İYUK m.7). Beykoz'da geniş orman varlığı nedeniyle bu tür idari işlemler sık gündeme gelir. Süre tebliğ veya öğrenme tarihinden işlediği için bu tarihin belgelenmesi önemlidir." },
      { question: "Boğaziçi imar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "Boğaziçi imar planına karşı ilan tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılmalıdır; genel dava açma süresi 60 gündür (İYUK m.7). Plan kararı 2960 sayılı Boğaziçi Kanunu kapsamında alınmış olabilir. Sürenin kaçırılmaması için ilan tarihi ve usulü doğru tespit edilmelidir." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde iptal davası açılabilir. Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Başvuru dosyası, ret yazısı ve tebliğ tarihini gösteren belgeler dava açılmadan önce derlenir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, idari para cezasına karşı yasal süresinde idare mahkemesinde dava açılabilir. İdari davalarda genel dava açma süresi, işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Ceza tutanağı ve tebliğ belgeleri dosyaya eklenir; iptal talebi hukuka aykırılık gerekçeleriyle birlikte sunulur." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "İdarenin işlem veya eyleminden zarar görenler, zararın tazmini için tam yargı davası açabilir. Zarara yol açan işlemin ya da eylemin ve zararın belgelerle ortaya konulması gerekir. Dava idare mahkemesinde görülür; süre ve ön başvuru usulü, somut olaya göre belirlenir." },
    ],
    howToTitle: "Beykoz'da İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "beykoz-is-hukuku-avukati",
    name: "Beykoz İş Hukuku Avukatı",
    heroTitle: "Beykoz İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemesi Beykoz Adliyesi bünyesindedir.",
    metaTitle: "Beykoz İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Beykoz'da kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Beykoz'daki çalışanlara ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Turizm/Konaklama Sektörü", description: "Boğaz kıyısındaki restoran ve otel çalışanlarının hakları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Mevsimsel/sezonluk çalışan turizm ve konaklama personelinin işçilik alacaklarının tahsili",
      "Hafta tatili ve yıllık izin ücreti gibi diğer işçilik alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Tarihi Beykoz Kundura Fabrikası'nın simgelediği sanayi geçmişinin yerini bugün büyük ölçüde Boğaz kıyısındaki restoran, kafe ve konaklama işletmelerinin aldığı Beykoz'da, mevsimsel/sezonluk çalışanların işçilik alacaklarına ilişkin uyuşmazlıklar sık gündeme gelmektedir.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları Beykoz Adliyesi'ndeki iş mahkemesinde görülür.",
    ],
    faqs: [
      { question: "Sezonluk/mevsimlik çalışanın kıdem tazminatı hakkı var mı?", answer: "Aynı işverende toplam 1 yılı dolduran hizmet süresi şartıyla sezonluk veya mevsimlik çalışanın kıdem tazminatı hakkı doğabilir; ara verilen dönemler somut olaya göre değerlendirilir. Hizmet süresinin hesabında işe giriş-çıkış kayıtları ve bordrolar esas alınır. Dönemler arasındaki bağlantı delillerle ortaya konulur." },
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Haksız fesih halinde kıdem tazminatı, çalışma süresi ve son brüt (giydirilmiş) ücret esas alınarak hesaplanır. Giydirilmiş ücret, çıplak ücrete eklenen düzenli ödemeleri de kapsar. İşe giriş-çıkış kayıtları, bordrolar ve fesih bildirimi hesabın dayanağıdır; uyuşmazlık iş mahkemesinde görülür." },
      { question: "Beykoz'da iş mahkemesi nerededir?", answer: "Bölgedeki iş davalarına Beykoz Adliyesi bünyesindeki iş mahkemeleri bakar. İşe iade ve işçilik alacağı davaları, arabuluculukta anlaşma sağlanamazsa bu mahkemelerde görülür. İşe iade için fesihten itibaren 1 ay içinde arabuluculuğa başvurulur; son tutanaktan itibaren 2 hafta içinde dava açılır." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "İşe iade sürecinin toplam süresi dosyaya göre değişir. Süreç, fesihten itibaren 1 ay içinde arabuluculuğa başvuru ile başlar; anlaşma sağlanamazsa son tutanaktan itibaren 2 hafta içinde dava açılır. İş K. m.18 uyarınca en az 30 işçi ve 6 ay kıdem şartı aranır." },
      { question: "Restoran/otel çalışanlarının fazla mesai hakkı nasıl ispatlanır?", answer: "Restoran veya otel çalışanlarının fazla mesaisi, vardiya çizelgeleri, bordro kayıtları ve tanık beyanı ile ispat edilebilir. Giriş-çıkış kayıtları ve yazışmalar da fiili çalışma süresini gösterebilir. Vardiyalı çalışmada bu kayıtların saklanması önem taşır; alacak uyuşmazlığı iş mahkemesinde görülür." },
    ],
    howToTitle: "Beykoz'da İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Fesih Değerlendirmesi", text: "İşten çıkarma gerekçesi ve usulü incelenir." },
      { name: "Arabulucuya Başvuru", text: "Yasal süre içinde arabuluculuk sürecine başlanır." },
      { name: "Dava Süreci", text: "Anlaşma olmazsa iş mahkemesinde dava açılır." },
      { name: "Sonuç", text: "Mahkeme kararı doğrultusunda işlem yapılır." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "giydirilmis-ucret-kavrami"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "beykoz-kira-tahliye-avukati",
    name: "Beykoz Kira ve Tahliye Avukatı",
    heroTitle: "Beykoz Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Yazlık/hafta sonu evi kiralamaları, konut tahliyesi ve kira bedeli tespiti uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemesi Beykoz Adliyesi'ndedir.",
    metaTitle: "Beykoz Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Beykoz'da kiracı tahliyesi, yazlık/villa kiralama sözleşmesi uyuşmazlıkları ve kira bedeli tespitinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Kira hukuku alanında Beykoz'daki kiraya verenlere ve kiracılara danışmanlık verir.",
    highlightCards: [
      { title: "Yazlık/Villa Kiralamaları", description: "Orman köyleri ve Boğaz kıyısındaki mevsimlik kiralama uyuşmazlıkları." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Orman köyleri ve Boğaz kıyısındaki yazlık/hafta sonu evi kiralamalarına özgü sözleşmelerin hazırlanması",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Polonezköy ve Riva gibi orman köylerinde yazlık/hafta sonu evi kiralama talebinin yoğun olduğu Beykoz'da, mevsimlik kiralama sözleşmelerinde süre ve depozito şartlarının net belirlenmesi uyuşmazlıkları önlemek açısından önemlidir.",
      "Bu davalara Beykoz Adliyesi bünyesindeki sulh hukuk mahkemesinde bakılır; kira sözleşmesinin yazılı ve eksiksiz olması, uyuşmazlık halinde ispat açısından önem taşır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kiracı; kira borcunun ödenmemesi, geçerli bir taahhütname veya kiraya verenin ihtiyacı gibi sebeplerle tahliye edilebilir. Kira borcunda kiracıya ödeme için 30 gün süre verilir (TBK m.315); süre sonunda ödeme yapılmazsa tahliye yoluna gidilebilir. Hangi yolun izleneceği olayın niteliğine göre belirlenir." },
      { question: "Yazlık evin mevsimlik kiralanmasında sözleşme süresi nasıl belirlenir?", answer: "Yazlık evin mevsimlik kiralanmasında taraflar belirli bir dönem (örneğin yaz sezonu) için süreli kira sözleşmesi yapabilir; sürenin bitiminde taşınmazın tahliyesi ayrıca talep edilebilir. Sözleşmenin yazılı yapılması ve başlangıç ile bitiş tarihlerinin açıkça belirtilmesi ispat açısından önemlidir. Tahliye gerçekleşmezse hukuki yollara başvurulabilir." },
      { question: "Beykoz'da tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine göre değişir; birkaç aydan bir buçuk yıla kadar sürebilir. Beykoz Adliyesi bünyesindeki sulh hukuk mahkemelerinde görülen davalarda süreyi tebligat işlemleri, delillerin toplanması ve gerekirse bilirkişi incelemesi etkiler. Kira borcu veya taahhütname gibi belgeye dayalı hallerde farklı yollar izlenebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Rayiç bedel tespiti, mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Dava sulh hukuk mahkemesinde açılır; mahkeme bilirkişi aracılığıyla bölgedeki emsal kira bedellerini araştırır. Kira bedelinin uyarlanması da bu tespitin sonucuna göre değerlendirilir. Talep edilirken mevcut kira sözleşmesi ve ödeme kayıtları dosyaya sunulur." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname varsa tahliye doğrudan icra dairesi kanalıyla istenebilir. Taahhütnamenin geçerli olması ve tahliye talebinin usulüne uygun yapılması gerekir. Bu yol, mahkemede dava açılmasından farklı bir süreçtir; belgenin içeriği ve tarihi önceden incelenir." },
    ],
    howToTitle: "Beykoz'da Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "beykoz-vergi-avukati",
    name: "Beykoz Vergi Avukatı",
    heroTitle: "Beykoz Vergi Avukatı",
    heroSubtitle:
      "Vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Beykoz Vergi Avukatı | Vergi Cezası ve Uzlaşma",
    metaDescription:
      "Beykoz'da vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Beykoz'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Turizm İşletmeleri Denetimi", description: "Restoran, kafe ve otel işletmelerine yönelik vergi incelemeleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Boğaz kıyısındaki restoran ve konaklama işletmelerinde vergi incelemesi sürecinde danışmanlık",
      "Yazlık/hafta sonu evi kira gelirlerinin beyanına ilişkin uyuşmazlıklarda destek",
    ],
    localParagraphs: [
      "Beykoz Vergi Dairesi Müdürlüğü'nün hizmet binası fiziksel olarak Ümraniye'de bulunmakla birlikte, Beykoz mükelleflerinin vergisel işlemleri bu müdürlük üzerinden yürütülmektedir.",
      "Boğaz kıyısındaki restoran ve konaklama işletmelerinin yoğun olduğu ilçede, bu işletmelere yönelik vergi incelemeleri sık karşılaşılan konular arasındadır. İhbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "Beykoz Vergi Dairesi nerede bulunuyor?", answer: "Beykoz Vergi Dairesi Müdürlüğü'nün hizmet binası Ümraniye'dedir; Beykoz mükellefleri işlemlerini bu müdürlük üzerinden yürütür. Tarhiyat veya cezaya karşı dava ise İstanbul vergi mahkemelerinde açılır ve süre tebliğden itibaren 30 gündür (İYUK m.7). İdari aşama ile dava aşaması birbirinden ayrı yürür." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Vergi ve ceza ihbarnamesine karşı dava açma süresi, tebliğden itibaren 30 gündür (İYUK m.7). Dava vergi mahkemesinde açılır; süre kaçırılırsa tarhiyat kesinleşir. Dava süresi dolmadan uzlaşma başvurusu da değerlendirilebilir; uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "Vergi davaları İstanbul vergi mahkemelerinde görülür. Vergi ve ceza ihbarnamesine karşı iptal davası bu mahkemelerde açılır ve dava açma süresi tebliğden itibaren 30 gündür (İYUK m.7). İdari aşamadaki işlemler ise vergi dairesi müdürlüğü nezdinde yürütülür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma başvurusu dava hakkını ortadan kaldırmaz; uzlaşma sağlanamazsa kalan dava açma süresi korunur. Uzlaşma vergi idaresi nezdinde yürütülür ve taraflar anlaşırsa uyuşmazlık dava açılmadan sona erer. Anlaşma sağlanamazsa vergi mahkemesinde dava açılabilir; bu nedenle başvuru ile dava süresinin birlikte takip edilmesi gerekir." },
      { question: "Yazlık ev kira geliri beyan edilmezse ne olur?", answer: "Yazlık ev kira geliri beyan edilmezse re'sen veya ikmalen tarhiyat ve buna bağlı ceza uygulanabilir; bu işlemlere karşı dava açılabilir. İhbarnamenin tebliğinden itibaren 30 gün içinde vergi mahkemesinde dava açma hakkı vardır (İYUK m.7). Uzlaşma başvurusu da değerlendirilebilir." },
    ],
    howToTitle: "Beykoz'da Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "beykoz-borclar-hukuku-avukati",
    name: "Beykoz Borçlar Hukuku Avukatı",
    heroTitle: "Beykoz Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Restorasyon ve inşaat sözleşmesi uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; asliye hukuk mahkemesi Beykoz Adliyesi'ndedir.",
    metaTitle: "Beykoz Borçlar Hukuku Avukatı | Alacak Davası",
    metaDescription:
      "Beykoz'da yalı/villa restorasyon sözleşmeleri, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Borçlar hukuku kapsamında Beykoz'daki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık verir.",
    highlightCards: [
      { title: "Restorasyon Sözleşmeleri", description: "Tarihi yalı ve villa onarım işlerinden doğan uyuşmazlıklar." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Kat Karşılığı Sözleşmeler", description: "Villa/konut inşaat sözleşmesi uyuşmazlıkları." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Tarihi yalı ve villa restorasyon sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Kat karşılığı villa/konut inşaat sözleşmelerinden doğan uyuşmazlıklar",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Sit alanı statüsündeki tarihi yalı ve villaların onarımına yönelik yapım işlerinin sık görüldüğü Beykoz'da, restorasyon sözleşmelerinin niteliği ve kapsamının net biçimde belirlenmesi, uygulamada sıkça karşılaşılan sözleşme uyuşmazlıklarını önlemek açısından önem taşımaktadır.",
      "Bu davalar Beykoz Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Restorasyon işini üstlenen firma işi eksik/hatalı bırakırsa ne yapılabilir?", answer: "Restorasyon işini üstlenen firma işi eksik veya hatalı bırakırsa sözleşmeden dönme, tazminat veya ifa davası gibi hukuki yollara başvurulabilir. Eksiklik veya hatanın niteliği bilirkişi incelemesiyle belirlenebilir. Sözleşme, ödeme belgeleri ve iş teslim kayıtları dayanak oluşturur; sit alanındaki işlerde onarım kapsamı da önem taşır." },
      { question: "Sit alanındaki bir yalının restorasyonunda özel bir sözleşme şartı gerekir mi?", answer: "Evet, sit alanındaki bir yalının restorasyonunda koruma kurulu izinleri ve onarım kapsamının sözleşmede açıkça belirtilmesi önerilir. Böylece tarafların hangi işleri hangi izinler çerçevesinde yapacağı belli olur. Kapsam dışı iş veya izinsiz uygulama uyuşmazlıklarında sözleşme metni belirleyici olur." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Ticari alacak davası, niteliğine göre asliye ticaret mahkemesinde, Beykoz Adliyesi bünyesinde görülür. Ticari nitelikteki bazı alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması dava şartı olabilir. Dosyaya sözleşme, fatura ve yazışmalar gibi alacağı gösteren belgeler eklenir." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, dava öncesi arabuluculuk her uyuşmazlıkta şart değildir; yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Şartın aranıp aranmadığı uyuşmazlığın konusuna göre belirlenir. Zorunlu olduğu hallerde arabuluculuğa başvurulmadan açılan dava usulden reddedilebilir. Bu nedenle uyuşmazlığın türü baştan doğru nitelendirilmelidir." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse alacak talep edilemez; ileri sürmezse talep edilebilir. Zamanaşımı mahkemece kendiliğinden dikkate alınmaz, borçlunun itirazına bağlıdır. Bu nedenle alacağın doğum tarihi ve zamanaşımını kesen işlemler dosyada dikkatle incelenir. Sözleşme, fatura ve yazışmalar bu incelemeye esas alınır." },
    ],
    howToTitle: "Beykoz'da Alacak Davası Süreci Nasıl İşler?",
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

export const beykozServices: PseoService[] = [...beykozBaseServices, beykozMiras];
