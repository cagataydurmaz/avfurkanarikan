import type { PseoService } from "./types";
import { kartalMiras } from "./miras/kartalMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const kartalBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "kartal-avukat",
    name: "Kartal Avukat",
    heroTitle: "Kartal Avukat",
    heroSubtitle:
      "Anadolu Yakası'nın adliye merkezi konumundaki Kartal'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında avukat Furkan Arıkan danışmanlık ve dava takibi hizmeti sunmaktadır; İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olan Arıkan'ın dosyaları, İstanbul Anadolu Adliyesi'nin fiziken Kartal sınırları içinde yer alması sayesinde komşu ilçelerin aksine ek bir ilçe geçişi gerektirmeden aynı ilçede görülür.",
    metaTitle: "Kartal Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Kartal'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. 1947'de sanayi bölgesi ilan edilmesinin ardından Yunus Çimento Fabrikası başta olmak üzere Eczacıbaşı, Siemens ve Mutlu Akü gibi tesislerin kurulduğu, sahil şeridiyle ve Adalar'a vapur bağlantısıyla bilinen Kartal'da ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; İstanbul Anadolu Adliyesi ilçe sınırları içinde, Esentepe Mahallesi'nde bulunduğundan Kartal davaları için Anadolu Yakası'ndaki komşu ilçelerden farklı olarak ilçe dışına çıkmaya gerek kalmaz, randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Sahil şeridi ve site nitelikli taşınmazlarda uyuşmazlık takibi." },
      { title: "İş Hukuku", description: "Sanayi tesislerinde çalışan personelin işçilik alacakları ve işe iade süreçleri." },
      { title: "İcra Hukuku", description: "Alacak takibi ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "İmar ve idari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı ve cezası uyuşmazlıkları." },
      { title: "Borçlar Hukuku", description: "Ticari sözleşme ve alacak kaynaklı davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Sahil şeridi ve site tipi taşınmazlara ilişkin gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İmar uygulamaları ve idari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Ticari sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "1930'larda Yunus Çimento Fabrikası ile başlayan, 1947'de resmen sanayi bölgesi ilan edilmesiyle hızlanan sanayileşme sürecinde Eczacıbaşı, Siemens, Superlit ve Mutlu Akü gibi üretim tesislerine ev sahipliği yapan Kartal, bugün hem sahil şeridindeki Yalı ve Kordonboyu gibi mahalleleriyle hem de Esentepe'deki adliye kompleksiyle Anadolu Yakası'nın önemli merkezlerinden biridir.",
      "Anadolu Yakası'ndaki Ataşehir, Maltepe, Ümraniye, Üsküdar ve Kadıköy gibi ilçelerin davaları kendi adliyeleri bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ne taşınırken, Kartal'ın kendi sınırları içinde adliyeye sahip olması ilçe sakinleri için ayrı bir avantaj sunar; ilçeye M4 metro hattının dört istasyonu ve Marmaray'ın beş istasyonuyla ulaşılabilir.",
    ],
    faqs: [
      { question: "Kartal'daki davalara hangi adliye bakıyor?", answer: "Kartal'daki davalara İstanbul Anadolu Adliyesi bakar. Adliye, Kartal'ın Esentepe Mahallesi'nde ilçe sınırları içinde bulunur ve ilçedeki tüm dava ve icra dosyaları bu adliyede görülür. Vergi işlemleri ise Hürriyet Mahallesi'ndeki Kartal Vergi Dairesi Müdürlüğü üzerinden yürütülür." },
      { question: "Randevu nasıl alınır?", answer: "Randevu WhatsApp veya telefon üzerinden talep edilir. Konunun kısa özeti ve varsa tebligat ya da süre bilgisi iletildiğinde uygun bir görüşme günü belirlenir. Görüşmeye kimlik, sözleşme, tebligat ve ödeme belgelerinin getirilmesi, hukuki durumun ilk görüşmede daha net değerlendirilmesini sağlar." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dosya takibi yapılır. Kartal'da sanayi geçmişinden gelen işçilik uyuşmazlıkları, ticari alacak takipleri, eski sanayi arazilerine bağlı tapu uyuşmazlıkları ve kıyı kullanımına ilişkin idari işlemler öne çıkabilir." },
      { question: "Büro Kartal'da mı bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır. Kartal'daki müvekkillerle büroda yüz yüze ya da çevrim içi görüşülür ve aynı kapsamda hizmet verilir. Kartal'daki davalar ilçe sınırlarındaki İstanbul Anadolu Adliyesi'nde görüldüğünden duruşma günlerinde ulaşım ve saat planı birlikte yapılabilir; dosyanın gelişmeleri müvekkille paylaşılır." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Ücret, dosyanın niteliğine ve gerektirdiği emeğe göre belirlenir ve randevu sırasında bildirilir. Danışmanlık görüşmesi ücrete tabidir; vekalet verilirse ücret yazılı olarak kararlaştırılır. Avukatlık Kanunu m.164 uyarınca ücret, Avukatlık Asgari Ücret Tarifesi'nin altında belirlenemez. Ücretin kapsamı ve ödeme şekli randevuda açıkça konuşulur." },
      { question: "Kartal'a nasıl ulaşılır?", answer: "Kartal'a M4 metro hattının Kartal, Yakacık-Adnan Kahveci, Hastane-Adliye ve Soğanlık istasyonları ile Marmaray'ın beş istasyonundan ulaşılabilir; E-5 üzerinden karayoluyla da erişim sağlanır. Hastane-Adliye istasyonu, Esentepe'deki İstanbul Anadolu Adliyesi'ne raylı ulaşım sağlar; duruşma günlerinde güzergah birlikte planlanabilir." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Görüşmeler tercihe göre yüz yüze veya çevrim içi planlanabilir. Yüz yüze görüşmeler Beşiktaş/Sinanpaşa'daki büroda yapılır; çevrim içi görüşmede belgeler WhatsApp veya e-posta ile paylaşılabilir. Randevu telefon ya da WhatsApp üzerinden talep edilir ve görüşme biçimi müvekkille birlikte belirlenir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Gözaltı halinde vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmelidir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar ve şüpheliye eşlik edilebilir. Ad, gözaltı yeri ve olayın kısa özeti paylaşıldığında sürecin ilk adımları hızla planlanabilir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca dosyadaki gelişmeler müvekkille paylaşılır. Duruşma tarihleri, mahkeme veya idare tarafından yapılan işlemler ve yeni evraklar hakkında bilgi verilir. Vekalet verilen dosyalarda gelişmeler WhatsApp, telefon veya yüz yüze görüşme gibi müvekkilin tercih ettiği yollarla aktarılır." },
      { question: "Kartal'daki sanayi tesislerinde çalışanların işçilik uyuşmazlıklarında destek alınabilir mi?", answer: "Evet, ilçedeki üretim ve depo tesislerinde çalışanların işçilik alacağı ve işe iade taleplerinde danışmanlık sağlanır. Bordro, iş sözleşmesi, vardiya çizelgesi ve fesih bildirimi incelenerek kıdem, ihbar ve fazla mesai alacakları değerlendirilir. İşe iade için fesihten itibaren 1 ay içinde arabulucuya başvurulur." },
    ],
    howToTitle: "Kartal'da Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Kartal Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "kartal-bosanma-avukati",
    name: "Kartal Boşanma Avukatı",
    heroTitle: "Kartal Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı veya çekişmeli boşanmada velayet, nafaka ve mal rejimi taleplerinin dilekçeye dökülmesi ile duruşma temsili sağlanır; aile mahkemesi dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Kartal Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Kartal'da anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Avukat Furkan Arıkan (72621 sicil no, İstanbul Barosu), hukuk eğitimini 2019'da MEF Üniversitesi'nde bitirmiştir. Kartal'da boşanma, velayet ve nafaka dosyalarında tarafların taleplerini düzenler, protokol veya dava dilekçesini hazırlar ve duruşmalarda temsil sağlar.",
    highlightCards: [
      { title: "Anlaşmalı Boşanma", description: "Protokol maddelerinin tek duruşmada kabul edilebilecek biçimde hazırlanması." },
      { title: "Çekişmeli Boşanma", description: "Kusur ve tazminat iddialarının belge ve tanıkla desteklenmesi." },
      { title: "Velayet ve Kişisel İlişki", description: "Çocuğun üstün yararı ölçüsünde velayet ve görüşme düzeninin kurulması." },
      { title: "Konut ve Mal Rejimi", description: "Kıyı mahallelerindeki ve sitelerdeki konutların tasfiyede değerlendirilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolünün hazırlanması ve duruşmada temsil",
      "Kusura dayalı çekişmeli boşanma davasının yürütülmesi",
      "Velayetin düzenlenmesi ve sonradan değiştirilmesi talepleri",
      "Nafakanın artırılması, azaltılması veya kaldırılması davaları",
      "Kıyı mahalleleri ile site konutlarını kapsayan mal rejimi tasfiyesi",
      "Boşanmanın sonuçlarına bağlı maddi ve manevi tazminat istemleri",
    ],
    localParagraphs: [
      "Yalı ve Kordonboyu'ndaki denize yakın daireler ile Soğanlık Yeni ve Yakacık Yeni gibi iç mahallelerdeki siteler Kartal'daki aile konutlarına örnek oluşturur; mal rejimi tasfiyesinde bu taşınmazların edinilme tarihi ve güncel rayiç değeri, paylaşımın en çok tartışılan yönüdür.",
      "Aile mahkemesi dosyaları Esentepe'deki İstanbul Anadolu Adliyesi'nde görüldüğünden Kartal'da yaşayan eşler başka bir ilçeye gitmeden duruşmaya katılabilir; anlaşmalı boşanmada protokolün eksiksizliği, çekişmeli boşanmada ise delillerin düzenli sunulması sonucu etkiler.",
    ],
    faqs: [
      { question: "Kartal'da boşanma davası hangi mahkemede açılır?", answer: "Boşanma davası aile mahkemesinde açılır; Kartal'daki aile mahkemeleri Esentepe Mahallesi'ndeki İstanbul Anadolu Adliyesi'nde bulunur. Yetkili mahkeme, eşlerden birinin yerleşim yeri veya davadan önce son altı aydır birlikte oturdukları yer esas alınarak belirlenir; dilekçe bu yer dikkate alınarak hazırlanır." },
      { question: "Anlaşmalı boşanma için hangi şartlar aranır?", answer: "Evlilik en az bir yıl sürmüş olmalı, eşler birlikte başvurmalı ve boşanmanın sonuçları üzerinde anlaşmalıdır. Hâkim, eşleri bizzat dinleyerek iradelerinin serbest olduğuna kanaat getirirse protokolü onaylar ve boşanmaya karar verir; protokolün eksiksiz olması bu aşamayı kolaylaştırır." },
      { question: "Velayet düzenlenirken çocuğun görüşü sorulur mu?", answer: "Çocuk yaşı ve olgunluğu bakımından görüşünü ifade edebilecek durumdaysa mahkeme onu dinleyebilir. Kararda belirleyici ölçüt çocuğun üstün yararıdır; pedagog raporu ve sosyal inceleme gibi araçlar bu değerlendirmeye yardımcı olabilir, ancak mahkemeyi bağlamaz; hâkim, dosyadaki tüm delilleri birlikte değerlendirerek karar verir." },
      { question: "Nafaka miktarı nasıl belirlenir?", answer: "Tarafların ekonomik durumu, ihtiyaçları ve çocuk varsa çocuğun giderleri birlikte değerlendirilerek belirlenir. Gelir belgeleri, kira ve fatura giderleri ile yaşam standardını gösteren kayıtlar ispat için sunulur; koşullar sonradan değişirse nafakanın artırılması veya azaltılması için dava açılabilir." },
      { question: "Kıyıya yakın bir konut mal paylaşımında nasıl hesaba katılır?", answer: "Konutun edinilme zamanı ve kaynağı belirlenir; edinilmiş mal sayılırsa güncel rayiç değeri bilirkişi incelemesiyle tespit edilir. Tapu kaydı ve ödeme belgeleri değerlemenin dayanağını oluşturur; konutun kişisel mal olduğu ileri sürülüyorsa bunun ayrıca ispatlanması gerekir; bu ispat kararın sonucunu doğrudan etkiler." },
    ],
    howToTitle: "Kartal'da Boşanma Dosyası Hangi Basamaklardan Geçer?",
    howToSteps: [
      { name: "Taleplerin Belirlenmesi", text: "Velayet, nafaka ve mal paylaşımı konusundaki beklentiler netleştirilir." },
      { name: "Protokol veya Dilekçe", text: "Anlaşma varsa protokol, yoksa gerekçeli dava dilekçesi yazılır." },
      { name: "Mahkemeye Sunum", text: "Evrak, İstanbul Anadolu Adliyesi'ndeki aile mahkemesine verilir." },
      { name: "Karar", text: "Duruşmaların ardından mahkeme boşanma ve bağlı hususlarda hüküm kurar." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "bosanmada-nafaka-turleri"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "kartal-ceza-avukati",
    name: "Kartal Ceza Avukatı",
    heroTitle: "Kartal Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; ceza davaları Kartal'ın kendi sınırları içindeki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Kartal Ceza Avukatı | Müdafilik",
    metaDescription:
      "Kartal'da soruşturma, kovuşturma, tutukluluğa itiraz ve ceza yargılamasının tüm aşamalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, ceza yargılamasının soruşturma ve kovuşturma aşamalarında Kartal'daki şüpheli ve sanıklara müdafilik hizmeti vermektedir.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Adliyeye Yakınlık Avantajı", description: "Gözaltı ve nöbetçi mahkeme süreçlerinde hızlı müdafi erişimi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Sahil şeridi ve toplu ulaşım noktalarındaki asayiş olaylarında savunma",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "M4 metro hattındaki istasyonlardan birinin doğrudan Hastane-Adliye adını taşıması, İstanbul Anadolu Adliyesi'nin Kartal'ın Esentepe Mahallesi'nde ne denli merkezi bir konumda yer aldığını gösterir; bu durum, ilçedeki ceza soruşturmalarında müdafi ile hızlı iletişim kurulmasını kolaylaştırır.",
      "Kartal'ın kendi sınırları içinde adliyeye sahip olması, komşu ilçelerin aksine ceza soruşturma ve kovuşturmalarının ilçe dışına taşınmadan yürütülmesini sağlar; gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar.",
    ],
    faqs: [
      { question: "Kartal'da bir ceza davası hangi adliyede görülür?", answer: "Kartal'daki ceza davaları, Esentepe Mahallesi'nde bulunan İstanbul Anadolu Adliyesi'nde görülür. Adliye ilçe sınırları içinde olduğundan ceza soruşturma ve kovuşturmaları ilçe dışına taşınmadan yürütülür. Soruşturma aşamasında ifade ve işlemler ise savcılık ve kolluk nezdinde yapılır; gözaltı halinde müdafi ile görüşme hakkı hemen doğar." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Şüphelinin ifadesi müdafi bulunmadan da alınabilir; ancak müdafi bulundurulması önerilir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar. Müdafi, soruşturma dosyasını inceleyerek ifadenin içeriği ve haklar konusunda şüpheliye yol gösterir; ifade öncesinde iletişime geçmek bu nedenle faydalıdır." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, kovuşturmaya yer olmadığı kararına karşı sulh ceza hakimliğine itiraz edilebilir. İtiraz süresi kararın tebliğinden itibaren 15 gündür. Mağdur veya şikayetçi, savcılığın dosyayı takipsizlikle sonuçlandırdığı hallerde bu yola başvurarak kararın yeniden incelenmesini isteyebilir; itiraz dilekçesi gerekçeleriyle hazırlanır." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Uzlaşma sağlanamazsa yargılamaya kaldığı yerden devam edilir. Uzlaşmaya tabi suçlarda taraflar bir araya getirilir; anlaşma olmazsa soruşturma veya kovuşturma olağan akışında sürer ve dosya iddianame ile mahkemeye taşınabilir. Uzlaşma görüşmelerinde ileri sürülen beyanlar dosyanın ilerleyişini kendiliğinden belirlemez." },
      { question: "Adliyenin ilçe içinde olması süreci nasıl etkiler?", answer: "Adliyenin ilçe içinde olması, duruşma ve nöbetçi işlemlere erişimde ek bir ilçe geçişi gerekmediğinden süreç takibini kolaylaştırır. Kartal'da M4 hattındaki Hastane-Adliye istasyonu adliyeye raylı ulaşım sağlar. Gözaltı halinde müdafi ile hızlı iletişim kurulabilmesi de bu konumdan kaynaklanan pratik bir kolaylıktır." },
    ],
    howToTitle: "Kartal'da Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "kartal-gayrimenkul-avukati",
    name: "Kartal Gayrimenkul Avukatı",
    heroTitle: "Kartal Gayrimenkul Avukatı",
    heroSubtitle:
      "Sahil şeridindeki ve eski sanayi arazileri üzerine kurulan kentsel dönüşüm projelerindeki tapu, kat mülkiyeti ve kira uyuşmazlıklarında hukuki destek sağlanır; davalar Kartal sınırları içindeki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Kartal Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Kartal'da kat mülkiyeti, tapu iptali, kentsel dönüşüm ve kira uyuşmazlıklarına ilişkin gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Avukat Furkan Arıkan (İstanbul Barosu, sicil no: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019 mezunu), Kartal'daki tapu, kat mülkiyeti ve kira uyuşmazlıklarında danışmanlık sağlar.",
    highlightCards: [
      { title: "Kentsel Dönüşüm", description: "Eski sanayi arazilerinde yürütülen dönüşüm projelerinde hak sahipliği takibi." },
      { title: "Sahil Şeridi Taşınmazları", description: "Yalı ve Kordonboyu çevresindeki konutlara ilişkin alım-satım işlemleri." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Kat Mülkiyeti Uyuşmazlıkları", description: "Site yönetimi, ortak gider ve karar uyuşmazlıklarının çözümü." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kentsel dönüşüm kapsamındaki hak sahipliği ve değer tespiti süreçleri",
      "Sahil şeridi ve site nitelikli taşınmazların alım-satımında tapu incelemesi",
      "Tapu iptali ve tescil davalarının açılması",
      "Kat mülkiyeti ve site yönetimi uyuşmazlıklarına ilişkin danışmanlık",
      "Kira bedeli tespiti ve uyarlama davaları",
      "Taşınmaz satış vaadi sözleşmelerinin hukuki incelemesi",
    ],
    localParagraphs: [
      "1947'de sanayi bölgesi ilan edilmesinin ardından Yunus Çimento Fabrikası, Eczacıbaşı ve Siemens gibi tesislerin yer aldığı Kartal'da, bu tesislerin zamanla kapanmasıyla boşalan sanayi arazilerinin bir bölümü konut ve karma kullanım projelerine dönüştürülmüş, bu süreç tapu ve hak sahipliği uyuşmazlıklarını da beraberinde getirmiştir.",
      "Bu tür uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Kartal'ın kendi sınırları içindeki İstanbul Anadolu Adliyesi'nde görülür.",
    ],
    faqs: [
      { question: "Eski sanayi arazisi üzerindeki bir projede hak sahipliği nasıl belirlenir?", answer: "İmar durumu, tapu kaydı ve varsa uygulama sözleşmesi incelenerek hak sahipliği tespit edilir. Kartal'da boşalan sanayi arazilerinin konut ve karma kullanım projelerine dönüşmesi tapu ve hak sahipliği uyuşmazlıklarını gündeme getirmiştir. Uyuşmazlık halinde dava, sulh veya asliye hukuk mahkemesinde açılır." },
      { question: "Kartal'da gayrimenkul davası hangi mahkemede görülür?", answer: "Gayrimenkul davaları, uyuşmazlığın niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, ilçe sınırları içindeki İstanbul Anadolu Adliyesi'nde görülür. Tapu iptali ve tescil davaları ile kira ve tahliye davaları farklı mahkemelerde görülebilir; görevli mahkeme dosyanın türüne göre belirlenir." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Tapu iptal davası, hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tarafından açılabilir. Sahte vekaletname, muvazaa veya geçersiz sözleşmeye dayanan tescil gibi durumlarda iptal ve tescil talep edilir. Dava, taşınmazın bulunduğu yer mahkemesinde görülür; tapu kaydı ve dayanak belgeler incelenerek dava dilekçesi hazırlanır." },
      { question: "Site yönetimiyle yaşanan bir ortak gider uyuşmazlığında ne yapılabilir?", answer: "Öncelikle yönetim planı ve genel kurul kararları incelenir; çözülemezse dava yoluna gidilebilir. Gider paylarının dağılımı, yönetici kararları ve ödeme kayıtları Kat Mülkiyeti Kanunu çerçevesinde değerlendirilir. Kartal'daki sitelerde yönetim planının ve karar defterinin eksiksiz olması uyuşmazlığın çözümünü kolaylaştırır." },
      { question: "Sahil şeridindeki bir konutun satışında nelere dikkat edilmeli?", answer: "Tapu kaydı, kıyı mesafesi ve imar durumu belgelerinin tam olması önerilir. Yalı ve Kordonboyu gibi sahil şeridindeki konutlarda tapudaki şerhler, ipotek ve haciz kayıtları ile kıyı kenar çizgisine göre taşınmazın konumu satış öncesinde incelenmelidir. Belgelerdeki eksiklikler sonradan uyuşmazlığa yol açabilir." },
    ],
    howToTitle: "Kartal'da Tapu Uyuşmazlığı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Kayıt İncelemesi", text: "Tapu ve imar durumu belgeleri incelenir." },
      { name: "Uyuşmazlığın Netleştirilmesi", text: "İddia ve dayanak deliller belirlenir." },
      { name: "Dava Açılması", text: "Yetkili mahkemede dava süreci başlatılır." },
      { name: "Sonuçlanma", text: "Karar veya bilirkişi raporu doğrultusunda süreç tamamlanır." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "kartal-is-hukuku-avukati",
    name: "Kartal İş Hukuku Avukatı",
    heroTitle: "Kartal İş Hukuku Avukatı",
    heroSubtitle:
      "Kartal'daki üretim, depo ve sevkiyat işlerinde çalışanların kıdem-ihbar tazminatı, işe iade ve fazla mesai taleplerinde arabuluculuk aşamasından iş mahkemesine kadar temsil sağlanır; davalar ilçenin Esentepe Mahallesi'ndeki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Kartal İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Kartal'da kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621), 2019'da MEF Üniversitesi'nden mezun olduktan sonra Kartal'daki işçi ve işverenlerin iş hukuku dosyalarında temsil görevini üstlenmektedir. Vardiyalı fabrika düzeni, depo ve sevkiyat işleri ile sahil şeridindeki küçük işletmeler, ilçede iş ilişkisinden doğan uyuşmazlıkların çıktığı başlıca alanlardır; görüşme talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Fesih ve Tazminat", description: "İşverenin feshinin geçerliliğinin incelenmesi, kıdem ve ihbar tazminatı hesabının kontrolü." },
      { title: "Arabuluculuk Aşaması", description: "İşe iade ve alacak davalarının ön şartı olan arabuluculuk başvurusunun süresinde yapılması." },
      { title: "Vardiya ve Mesai Kayıtları", description: "Puantaj, vardiya listesi ve bordro üzerinden fazla çalışma ile izin ücretinin hesaplanması." },
      { title: "Fabrika ve Depo Personeli", description: "Kartal'daki üretim, depo ve sevkiyat işlerinde çalışanların hak talepleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesihte kıdem ve ihbar tazminatı davalarının hazırlanması",
      "İşe iade talebinde zorunlu arabuluculuk başvurusunun yürütülmesi",
      "Üretim, depo ve sevkiyat personelinin işçilik alacaklarının tahsili",
      "Fazla mesai ve yıllık izin ücretinin puantaj ile bordro üzerinden hesaplanması",
      "İş sözleşmesi ile ibraname metinlerinin hukuki açıdan okunması",
      "İş kazasından kaynaklanan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Kartal'ın 1947'de sanayi bölgesi ilan edilmesinin ardından çimento, ilaç, elektrik-elektronik ve akü tesislerinin kurulması ilçenin iş gücü yapısını uzun süre belirledi; fabrika ve depo kökenli iş ilişkilerinde vardiya çizelgesi, ücret hesabı ve fesih bildirimi tartışmaları bugün de sıkça gündeme gelir.",
      "Arabuluculukta uzlaşma çıkmazsa dosya, M4 hattındaki Hastane-Adliye istasyonunun adını aldığı İstanbul Anadolu Adliyesi'nde iş mahkemesine taşınır; işçi ve işveren ilçeden ayrılmadan duruşmalara katılabilir.",
    ],
    faqs: [
      { question: "Kartal'da işe iade davası açmadan önce nereye başvurulur?", answer: "Önce arabulucuya başvurulur; arabuluculuk, işe iade davasının dava şartıdır. Başvuru, fesih bildiriminin tebliğinden itibaren bir ay içinde yapılır. Görüşmeler anlaşmayla bitmezse son tutanaktan itibaren iki hafta içinde Kartal'daki İstanbul Anadolu Adliyesi'nde iş mahkemesine dava açılabilir." },
      { question: "Kıdem tazminatı hangi ücret üzerinden hesaplanır?", answer: "Kıdem tazminatı, çalışılan süre ile işçinin son brüt giydirilmiş ücreti esas alınarak hesaplanır. Giydirilmiş ücrete çıplak maaşın yanında yol, yemek ve prim gibi düzenli yan ödemeler de eklenir; hesaplama sırasında bordrolar ile iş sözleşmesi birlikte incelenir." },
      { question: "Vardiyalı çalışanlar fazla mesaiyi nasıl ispatlayabilir?", answer: "Fazla mesai; puantaj kayıtları, vardiya çizelgeleri, giriş-çıkış verileri ve tanık beyanlarıyla ispatlanabilir. İşverenin elindeki kayıtların mahkemece getirtilmesi talep edilebilir; kayıtlar yetersiz kaldığında tanık anlatımları belirleyici olur. Bu nedenle çalışma düzenini gösteren belgelerin baştan saklanması önemlidir." },
      { question: "Kartal'daki iş mahkemesi davaları hangi adliyede görülür?", answer: "İş mahkemesi davaları, Kartal'ın Esentepe Mahallesi'ndeki İstanbul Anadolu Adliyesi'nde görülür. Yetki, davalının yerleşim yeri veya işin yapıldığı yere göre belirlendiğinden Kartal'daki işyerlerine ilişkin dosyalar bu adliyeye gelir; M4 metro hattındaki Hastane-Adliye istasyonu adliyeye ulaşımı kolaylaştırır." },
      { question: "İş kazasında tazminat talebi nasıl takip edilir?", answer: "İş kazasında önce kaza tespit tutanağı ve SGK bildirimi incelenir, ardından maddi ve manevi tazminat için dava yoluna gidilebilir. Kusur oranı ile maluliyet derecesi bilirkişi raporuyla belirlenir; tedavi ve sağlık belgelerinin saklanması süreci kolaylaştırır ve ispatı güçlendirir." },
    ],
    howToTitle: "Kartal'da İşten Çıkarılan Çalışan Hangi Adımları İzler?",
    howToSteps: [
      { name: "Fesih Belgelerinin Toplanması", text: "Fesih bildirimi, iş sözleşmesi, bordro ve puantaj kayıtları bir araya getirilir." },
      { name: "Süre Kontrolü", text: "Arabulucuya başvuru için fesih tebliğinden itibaren işleyen bir aylık süre denetlenir." },
      { name: "Arabuluculuk Görüşmesi", text: "Uzlaşma sağlanamazsa düzenlenen son tutanak dava dosyasına eklenir." },
      { name: "İş Mahkemesinde Dava", text: "Dilekçe, İstanbul Anadolu Adliyesi'ndeki iş mahkemesine sunulur ve yargılama başlar." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "giydirilmis-ucret-kavrami", "ise-iade-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "kartal-icra-avukati",
    name: "Kartal İcra Avukatı",
    heroTitle: "Kartal İcra Avukatı",
    heroSubtitle:
      "Alacağın tahsili için icra takibi başlatma, ödeme emrine itiraz ve haciz aşamalarında temsil sağlanır; Kartal'daki icra daireleri ile icra mahkemeleri, ilçenin Esentepe Mahallesi'ndeki İstanbul Anadolu Adliyesi bünyesinde çalışır.",
    metaTitle: "Kartal İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Kartal'da icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kartal'da alacaklı ya da borçlu konumundaki kişilere icra-iflas alanında destek veren 72621 sicil numaralı İstanbul Barosu avukatı Furkan Arıkan, hukuk eğitimini 2019'da MEF Üniversitesi'nde tamamlamıştır. Takip başlatmadan önce belge düzeninin kurulması ve borçluya karşı izlenecek yolun belirlenmesi, dosyalardaki temel hazırlık adımlarıdır.",
    highlightCards: [
      { title: "Takibin Açılması", description: "Sözleşme, senet, fatura veya ilam esas alınarak ilamlı ya da ilamsız takip yapılması." },
      { title: "Borca İtiraz", description: "Ödeme emrine itiraz ile itirazın iptali veya kaldırılması yolları." },
      { title: "Haciz ve Satış", description: "Taşınır, taşınmaz ve banka hesabı gibi varlıklar üzerinde haciz işlemleri." },
      { title: "Fabrika ve Depo Alacakları", description: "Üretim ve lojistik işletmelerinin birbirinden fatura ve sözleşme alacağı takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacağın dayanağı olan belge veya ilam üzerinden takip dosyasının açılması",
      "Ödeme emrine yapılan itirazların takibi ve itiraza karşılık verilmesi",
      "İtirazın iptali ve itirazın kaldırılması davalarının açılması",
      "Borçlunun taşınır ve taşınmaz mallarına haciz konulması",
      "Üretim ve lojistik işletmelerinin ticari alacaklarının icra yoluyla tahsili",
      "Ödeme güçlüğündeki borçlular için konkordato konusunda danışmanlık",
    ],
    localParagraphs: [
      "Kartal'da yıllarca üretim yapan çimento, ilaç, elektrik-elektronik ve akü tesisleri ile çevresindeki tedarik ve nakliye zinciri, ticari alacak takibini ilçede sıkça başvurulan bir yol hâline getirir; fatura, irsaliye ve cari hesap ekstreleri bu dosyaların ana belgeleridir.",
      "Borçlunun Kartal'da yerleşik olması halinde kural olarak ikametgâh icra dairesi yetkilidir; icra mahkemesi işlemleri ise Esentepe'deki İstanbul Anadolu Adliyesi'nde görülür ve M4 hattının Hastane-Adliye istasyonu bu adliyeye raylı ulaşım sağlar.",
    ],
    faqs: [
      { question: "Kartal'da icra takibi hangi belgelerle başlatılabilir?", answer: "Sözleşme, senet, çek, fatura veya mahkeme ilamı gibi alacağı gösteren belgelerle başlatılabilir. Belgenin türü, takibin ilamlı ya da ilamsız yürüyeceğini ve borçlunun itiraz imkânını etkiler; bu yüzden dosya açılmadan önce evrakın eksiksiz derlenmesi ve alacağın miktarının net hesaplanması gerekir." },
      { question: "Ödeme emrine ne kadar sürede itiraz edilir?", answer: "Ödeme emrine itiraz süresi, tebliğden itibaren yedi gündür. İtiraz süresinde yapılırsa takip durur; alacaklı bu durumda itirazın iptali davası açabilir veya itirazın kaldırılmasını isteyebilir. Süre geçtikten sonra yapılan itiraz, takibin durmasını sağlamaz; bu nedenle ödeme emrinin tebliğ tarihi dikkatle not edilmelidir." },
      { question: "Kartal'da icra dairesi ve icra mahkemesi nerededir?", answer: "İcra daireleri ve icra mahkemeleri, Esentepe Mahallesi'ndeki İstanbul Anadolu Adliyesi bünyesinde yer alır. Yetkili daire kural olarak borçlunun ikametgâhına göre belirlendiğinden, Kartal'da yerleşik borçlulara ilişkin takipler bu adliyede yürütülür; M4 hattındaki Hastane-Adliye istasyonu ulaşımı kolaylaştırır." },
      { question: "Haciz hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara, banka hesaplarına ve üçüncü kişilerdeki alacaklara haciz konulabilir. Kanunun haczedilemez saydığı mallar kapsam dışındadır; hangi varlıkların haczedilebileceği dosyaya göre değerlendirilir; haciz talebi, alacaklının bildirdiği malvarlığı bilgilerine dayanır." },
      { question: "Borçlu ödeme yapmazsa takip nasıl devam eder?", answer: "Borçlu ne ödeme yapar ne de itiraz ederse takip kesinleşir; ardından alacaklı haciz talep eder. Haczedilen mallar satılarak elde edilen bedelden alacak karşılanır. Borçlu itiraz etmişse önce itirazın iptali veya kaldırılması aşaması tamamlanır, sonra haciz ve satış gündeme gelir." },
    ],
    howToTitle: "Kartal'da Alacak İçin İcra Yolu Nasıl İşletilir?",
    howToSteps: [
      { name: "Evrak Toplama", text: "Sözleşme, senet veya fatura gibi alacağın dayanağı bir araya getirilir." },
      { name: "Takip Talebi", text: "Yetkili icra dairesine takip talebi verilir." },
      { name: "Ödeme Emri", text: "Borçluya tebliğ edilen ödeme emrine karşı yedi günlük itiraz süresi izlenir." },
      { name: "Haciz ve Satış", text: "Takip kesinleşirse haciz konulur, satış bedelinden tahsilat yapılır." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "kartal-idare-avukati",
    name: "Kartal İdare Avukatı",
    heroTitle: "Kartal İdare Avukatı",
    heroSubtitle:
      "Kıyı kenar çizgisi tespiti, iskele ve liman izinleri ile eski sanayi arsalarındaki plan ve ruhsat kararlarına karşı iptal ve tam yargı davalarında temsil sağlanır; bu davaları İstanbul idare mahkemeleri görür.",
    metaTitle: "Kartal İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Kartal'da idari işlemlerin iptali, imar uygulamalarına itiraz ve tazminat davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş, İstanbul Barosu 72621 sicil numaralı bir avukattır. Kartal'ın sahil kuşağındaki kıyı ve iskele işlemleri ile eski sanayi parsellerindeki dönüşüm kararları hakkında yargı yoluna başvurmak isteyen kişi ve kuruluşlara danışmanlık sunmaktadır.",
    highlightCards: [
      { title: "Kıyı Kenar Çizgisi İtirazı", description: "Kıyı kenar çizgisi tespitinin kıyıdaki parsele etkisini denetleyen iptal davası." },
      { title: "İskele ve Liman İzinleri", description: "Ret edilen veya iptal edilen izin işlemlerine karşı idare mahkemesine başvuru." },
      { title: "Sanayi Arsası Dönüşümü", description: "Plan değişikliği ve yapı ruhsatı kararlarına karşı iptal talebi." },
      { title: "İdari Para Cezaları", description: "Belediyece ve diğer kurumlarca kesilen cezalara karşı dava." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kıyı kenar çizgisi tespiti ile iskele ve liman izin işlemlerine karşı iptal davası açılması",
      "Belediye yapı ruhsatı işlemlerine karşı dava yoluna gidilmesi",
      "Eski sanayi arsalarındaki dönüşümü düzenleyen plan değişikliklerinin iptalinin istenmesi",
      "İdarenin işlem veya eyleminden doğan zararın tam yargı davasıyla tazmini",
      "İdari para cezalarına karşı dava sürecinin yürütülmesi",
      "Kamu görevlilerinin özlük haklarına ilişkin uyuşmazlıklarda destek",
    ],
    localParagraphs: [
      "Kartal'da sahil şeridi, Kartal İskelesi'nden Adalar'a kalkan vapur hattıyla birlikte hem günlük yaşamın hem de kıyı kullanımına dair idari kararların odağındadır; kıyı kenar çizgisinin nereden geçtiği, iskele ve liman kullanımına verilen izinler ile fabrikaların boşalttığı arsalardaki plan ve ruhsat değişiklikleri, ilçedeki idari uyuşmazlıkların önemli bir bölümünü oluşturur.",
      "Bu davalar İstanbul idare mahkemelerinde görülür. Dava açma süresi, işlemin tebliğ veya ilan edildiği günden itibaren 60 gündür; süre geçirilirse hak düşer ve işlem kesinleşir.",
    ],
    faqs: [
      { question: "Kıyı kenar çizgisi tespitine karşı dava süresi kaç gündür?", answer: "Tespitin tebliğ veya ilan edildiği tarihten itibaren 60 gündür. Bu süre içinde idare mahkemesine iptal davası açılmazsa tespit kesinleşir; bu yüzden ilan tarihinin ve tespite ait harita ile tutanakların hemen temin edilmesi ve parselin çizgiye göre konumunun belirlenmesi gerekir." },
      { question: "İskele veya liman izni reddedilirse ne yapılabilir?", answer: "Reddi içeren işlem, idare mahkemesine taşınarak iptal ettirilebilir. Dilekçede ret gerekçesinin hukuka aykırılığı gösterilir; işlemin tebliğinden itibaren 60 günlük süre içinde başvurulmazsa dava hakkı kaybedilir. Başvuru dosyası, ret yazısı ve varsa izne ilişkin önceki yazışmalar dilekçeye eklenir." },
      { question: "Eski sanayi arsasındaki ruhsat başvurusu reddedilirse itiraz mümkün mü?", answer: "Evet, ret kararına karşı tebliğden itibaren 60 gün içinde idare mahkemesinde iptal davası açılabilir. İmar durumu belgesi, plan notları ve başvuru dosyası, ret gerekçesinin incelenebilmesi için dilekçeye eklenir; mahkeme işlemin hukuka uygunluğunu bu belgeler üzerinden değerlendirir." },
      { question: "Belediyenin idari para cezasına karşı hangi yola başvurulur?", answer: "İtiraz, tebliğ tarihinden başlayan yasal süre içinde idare mahkemesine dilekçe verilerek yapılır. Başvuruda cezanın dayanağı olan tutanak ve tebligat belgesi sunulur; süre ilgili mevzuata göre değişebileceğinden tebliğ evrakı hemen incelenmelidir; ceza tutarı ve ödeme süresi de bu aşamada kontrol edilir." },
      { question: "İdarenin işlemi nedeniyle uğranılan zarar nasıl istenir?", answer: "Tam yargı davası açılarak zararın tazmini istenebilir. Zarar ile idarenin işlem veya eylemi arasındaki bağ belgelerle gösterilir; dava öncesinde idareye yazılı başvuru yapılması gerekebileceğinden süre ve usul baştan kontrol edilmelidir. Zararın miktarını gösteren fatura, rapor ve benzeri belgeler de hazırlanmalıdır." },
    ],
    howToTitle: "Kartal'da İdari İşleme Karşı Dava Nasıl Hazırlanır?",
    howToSteps: [
      { name: "İşlemin Tespiti", text: "Dava konusu işlemin içeriği ile tebliğ veya ilan tarihi belirlenir." },
      { name: "60 Günlük Süre", text: "Sürenin başlangıcı hesaplanır ve son gün takvime işlenir." },
      { name: "Dilekçe", text: "İptal gerekçeleri ve talepler dilekçede sıralanır." },
      { name: "Yargılama", text: "İdare mahkemesi dilekçe ve eklerini inceleyerek hükmünü verir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: ["idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "kartal-kira-tahliye-avukati",
    name: "Kartal Kira ve Tahliye Avukatı",
    heroTitle: "Kartal Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Sahil şeridindeki ve iç kesimlerdeki konutların kiralanması, tahliye ve kira bedeli tespiti uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemesi davaları Kartal sınırları içindeki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Kartal Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Kartal'da kiracı tahliyesi, konut kiralama sözleşmesi uyuşmazlıkları ve kira bedeli tespitinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kira hukuku kapsamında Kartal'daki kiraya verenlere ve kiracılara danışmanlık veren, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Sahil Şeridi Kiralamaları", description: "Yalı ve Kordonboyu çevresindeki konut kiralama uyuşmazlıkları." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sahil şeridi ve site konutlarına ilişkin kira sözleşmelerinin hazırlanması",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "M4 metro ve Marmaray hatlarının kesişim noktası konumundaki Kartal'da, ulaşım kolaylığı nedeniyle özellikle Yakacık ve Soğanlık Yeni gibi mahallelerde kiracı talebi yüksek seyretmekte, bu da kira sözleşmelerinde bedel ve süre şartlarının net belirlenmesini önemli kılmaktadır.",
      "Bu davalara, Kartal'ın kendi sınırları içindeki İstanbul Anadolu Adliyesi bünyesindeki sulh hukuk mahkemesinde bakılır; kira sözleşmesinin yazılı ve eksiksiz olması, uyuşmazlık halinde ispat açısından önem taşır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir tahliye taahhüdü veya ihtiyaç nedeniyle kiracının tahliyesi talep edilebilir. Kira borcunda TBK m.315 uyarınca kiracıya en az 30 gün süre verilerek ihtar gönderilir; süre içinde ödeme yapılmazsa tahliye yolu açılır. Dava sulh hukuk mahkemesinde, taahhütte icra yoluyla açılır." },
      { question: "Kartal'da bir konutun kira bedeli nasıl güncellenir?", answer: "Kira bedeli, sözleşmede belirlenen artış oranı veya yasal sınırlar çerçevesinde güncellenebilir; uyuşmazlık halinde tespit davası açılabilir. Taraflar anlaşamazsa mahkemeden kira bedelinin belirlenmesi istenir ve mahkeme bilirkişi aracılığıyla çevredeki benzer kiraları inceler. Kira sözleşmesi ve önceki ödeme kayıtları bu süreçte gereklidir." },
      { question: "Kartal'da tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine göre değişir; birkaç aydan bir yıla kadar sürebilir. Sürenin uzunluğu tebligatın ulaşması, bilirkişi incelemesi ve itirazlar gibi etkenlere bağlıdır. Dava Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki sulh hukuk mahkemesinde görülür; sözleşmenin yazılı ve eksiksiz olması ispatı kolaylaştırır." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Rayiç bedel tespiti, mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Kira artışı konusunda taraflar anlaşamazsa mahkemeden kira bedelinin belirlenmesi istenir; mahkeme çevredeki benzer kiraları ve taşınmazın özelliklerini bilirkişi aracılığıyla inceler. Mevcut sözleşme ve önceki ödemeler bu inceleme için gereklidir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir. Taahhütnamenin kiracı tarafından kiralananın tesliminden sonra yazılı olarak verilmiş olması ve geçerlilik şartlarını taşıması gerekir. Taahhütname geçerli değilse veya itiraz edilirse uyuşmazlık sulh hukuk mahkemesinde görülür." },
    ],
    howToTitle: "Kartal'da Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "kartal-vergi-avukati",
    name: "Kartal Vergi Avukatı",
    heroTitle: "Kartal Vergi Avukatı",
    heroSubtitle:
      "Vergi ve ceza ihbarnamelerine karşı dava, uzlaşma başvurusu ve ödeme emri itirazı süreçlerinde temsil sağlanır; Kartal mükellefleri Hürriyet Mahallesi'ndeki Kartal Vergi Dairesi Müdürlüğü'ne bağlıdır, davalar ise İstanbul vergi mahkemelerinde görülür.",
    metaTitle: "Kartal Vergi Avukatı | Vergi Cezası ve Uzlaşma",
    metaDescription:
      "Kartal'da vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Avukat Furkan Arıkan (72621 sicil no, İstanbul Barosu), 2019 yılında MEF Üniversitesi'nden mezun olmuştur; Kartal'daki üretim ve lojistik işletmeleri ile kira geliri bulunan gerçek kişilerin vergi incelemesi, tarhiyat ve ceza dosyalarında danışmanlık vermektedir.",
    highlightCards: [
      { title: "Tarhiyata Karşı Dava", description: "Re'sen veya ikmalen yapılan tarh işlemlerinin vergi mahkemesinde denetlenmesi." },
      { title: "Vergi Ziyaı ve Usulsüzlük Cezası", description: "Kesilen cezanın dayanağının ve miktarının incelenmesi." },
      { title: "Uzlaşma Başvurusu", description: "Vergi idaresiyle uzlaşma görüşmesinde mükellefin temsil edilmesi." },
      { title: "Üretim ve Lojistik İşletmeleri", description: "Kurumlar vergisi incelemelerinde savunma ve belge düzeni desteği." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamelerine karşı vergi mahkemesinde dava açılması",
      "Uzlaşma talebinin hazırlanması ve uzlaşma toplantılarında mükellefin temsili",
      "Tarh edilen vergiye ilişkin iptal davalarının takibi",
      "Ödeme emrine karşı dava açılması",
      "Üretim ve lojistik işletmelerinde kurumlar vergisi incelemesine yönelik danışmanlık",
      "Kira gelirinin beyanından doğan uyuşmazlıklarda destek",
    ],
    localParagraphs: [
      "Kartal'daki mükelleflerin vergi işlemleri Hürriyet Mahallesi'nde bulunan Kartal Vergi Dairesi Müdürlüğü aracılığıyla yürütülür; ihbarname tebliğ edildiğinde dava süresi o tarihten itibaren işlemeye başlar.",
      "Sanayi geçmişi olan ilçede fabrika ve lojistik firmalarının kurumlar vergisi incelemeleri de dosya konusu olabilir. İhbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür; uzlaşma sağlanamazsa geriye kalan süre işlemeye devam eder.",
    ],
    faqs: [
      { question: "Kartal'da vergi işlemleri hangi vergi dairesince yürütülür?", answer: "Kartal mükellefleri için yetkili daire, Hürriyet Mahallesi'ndeki Kartal Vergi Dairesi Müdürlüğü'dür; ilçedeki mükellefiyet kaydı buraya bağlıdır. Beyanname, tarhiyat ve tebligat işlemleri bu müdürlük üzerinden yürür; ihbarname aynı daire tarafından tebliğ edildiğinden dava açma süresi tebliğ tarihine göre hesaplanır." },
      { question: "Vergi ihbarnamesine karşı dava açma süresi kaç gündür?", answer: "Tebliğ tarihinden itibaren 30 gündür. Süre kaçırılırsa tarhiyat kesinleşir ve dava hakkı düşer; vergi mahkemesi bu aşamadan sonra işlemi esastan incelemez. Bu yüzden tebliğ zarfındaki tarihin ve ihbarnamenin dayanağının hemen incelenmesi gerekir. Uzlaşma talep edilmişse kalan süre ayrıca hesaplanmalıdır." },
      { question: "Vergi davaları hangi mahkemede görülür?", answer: "Vergi davaları İstanbul vergi mahkemelerinde görülür. Kartal Vergi Dairesi'nin yaptığı tarhiyatlara ilişkin dilekçeler de bu mahkemelere sunulur; dosya, dilekçeye eklenen ihbarname, tebliğ belgesi ve dayanak kayıtlar üzerinden incelenir ve hukuka uygunluk denetimi buna göre yapılır." },
      { question: "Uzlaşma başvurusu dava açma hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma talebi dava hakkını ortadan kaldırmaz. Uzlaşma sağlanamazsa geriye kalan süre mükellefin lehine korunur ve mükellef vergi mahkemesinde dava açabilir; ancak bu süre içinde dilekçe verilmezse işlem kesinleşir. Bu nedenle sürenin kaç gün kaldığı baştan hesaplanmalıdır." },
      { question: "Beyan edilmeyen kira geliri için ne yapılabilir?", answer: "Kira geliri beyan edilmemişse vergi idaresi re'sen veya ikmalen tarhiyat yapabilir ve buna bağlı ceza uygulanabilir. Tebliğ edilen işlemlere karşı 30 gün içinde dava açılabilir; kira sözleşmeleri ile tahsilat belgeleri bu aşamada dosyada önem taşır." },
    ],
    howToTitle: "Kartal'da Vergi Cezasına Nasıl İtiraz Edilir?",
    howToSteps: [
      { name: "İhbarnamenin Okunması", text: "Tebliğ tarihi, vergi türü ve dönem ile cezanın hukuki dayanağı çıkarılır." },
      { name: "Uzlaşma veya Dava Kararı", text: "Uzlaşmaya gidilmesi ya da doğrudan dava açılması değerlendirilir." },
      { name: "Başvurunun Yapılması", text: "30 günlük süre dolmadan dilekçe sunulur ya da uzlaşma talep edilir." },
      { name: "Sonucun Alınması", text: "Mahkeme kararı veya uzlaşma tutanağı ile uyuşmazlık sona erer." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: ["vergi-ihbarnamesine-itiraz-ve-uzlasma"],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "kartal-borclar-hukuku-avukati",
    name: "Kartal Borçlar Hukuku Avukatı",
    heroTitle: "Kartal Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Tedarik ve hizmet sözleşmelerinin ihlali, ödenmeyen alacaklar ve sözleşmeye aykırılıktan doğan zararlar için dava ve icra yollarında temsil sağlanır; asliye hukuk ile asliye ticaret mahkemelerindeki davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Kartal Borçlar Hukuku Avukatı | Alacak Davası",
    metaDescription:
      "Kartal'da ticari sözleşmeler, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "72621 sicil numaralı avukat Furkan Arıkan (İstanbul Barosu), 2019'da MEF Üniversitesi'nde tamamladığı hukuk eğitiminin ardından Kartal'daki gerçek ve tüzel kişilere sözleşme, alacak ve tazminat konularında danışmanlık sunmaktadır. Sanayi geçmişi olan bir ilçede fabrika, depo ve nakliye işletmeleri arasındaki tedarik ilişkileri ile sahil mahallelerindeki konut kiralamaları, bu alandaki başlıca dosya türleridir.",
    highlightCards: [
      { title: "Tedarik ve Hizmet Sözleşmeleri", description: "Fabrika, depo ve nakliye işletmeleri arasındaki sözleşmelerin ifa ve ihlal sorunları." },
      { title: "Alacak Davası ve Takip", description: "Para alacağının ihtarname, dava veya icra takibiyle talep edilmesi." },
      { title: "Konut Kirası Uyuşmazlıkları", description: "Kıyı mahallelerindeki ya da site içindeki konutların kira sözleşmesinden doğan ihtilaflar." },
      { title: "Zarar ve Tazminat", description: "Sözleşmeye aykırı davranış yüzünden oluşan zararın tazmini." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Tedarik ve hizmet sözleşmelerinin ihlaline veya ifasına dayanan davaların yürütülmesi",
      "Alacak davası ile icra takibinin birlikte planlanması",
      "Konut ve site kiralamalarından doğan sözleşme uyuşmazlıklarında dava takibi",
      "Ayıplı ifa halinde sözleşmeden dönme ve bedel iadesi taleplerinin hazırlanması",
      "Sözleşme taslaklarının kaleme alınması ve hukuki açıdan gözden geçirilmesi",
      "Sebepsiz zenginleşmeye dayanan iade taleplerinin ileri sürülmesi",
    ],
    localParagraphs: [
      "Kartal'ın sanayi geçmişi ve denize cephesi olan sahil kuşağı, ilçede iki ayrı sözleşme grubu doğurur: fabrika ve depo işletmelerinin birbirine mal ve hizmet sağladığı ticari sözleşmeler ile Yalı ve Kordonboyu gibi mahallelerdeki konutların kiralanmasına dayalı sözleşmeler. Her iki grupta da alacak ve tazminat ihtilafları ortaya çıkabilir.",
      "Davalar, M4 hattında Hastane-Adliye istasyonunun adını aldığı İstanbul Anadolu Adliyesi'nde görülür; ticari nitelikteki bazı alacak uyuşmazlıklarında dava açılmadan önce arabulucuya başvurulması zorunlu olabilir.",
    ],
    faqs: [
      { question: "Kartal'da alacak davası hangi mahkemede açılır?", answer: "Alacağın niteliğine göre asliye hukuk veya asliye ticaret mahkemesinde açılır; Kartal'daki bu mahkemeler Esentepe Mahallesi'ndeki İstanbul Anadolu Adliyesi'nde bulunur. Yetki, genel olarak davalının yerleşim yerine veya sözleşmenin ifa edileceği yere göre belirlenir. Uyuşmazlığın ticari olup olmadığı, görevli mahkemeyi de etkiler." },
      { question: "Sözleşmeyi ihlal eden tarafa karşı hangi talepler ileri sürülebilir?", answer: "Duruma göre ifa, sözleşmeden dönme veya tazminat talep edilebilir. Hangisinin seçileceği; ihlalin ağırlığına, sözleşmedeki cezai şart ile fesih hükümlerine ve zararın ispat edilebilirliğine bağlıdır. Belgelerin baştan toplanması bu seçimi kolaylaştırır; seçilen talebe göre dava dilekçesinin içeriği ve delil listesi de değişir." },
      { question: "Dava açmadan önce arabulucuya başvurmak zorunlu mu?", answer: "Her uyuşmazlıkta zorunlu değildir; ticari nitelikteki belirli alacak ve tazminat davalarında arabuluculuk dava şartıdır. Başvuru yapılmadan açılan dava usulden reddedilebilir; bu nedenle dava öncesinde uyuşmazlığın türü ve arabuluculuk şartına tabi olup olmadığı ile ihtarname gerekip gerekmediği kontrol edilmelidir." },
      { question: "Zamanaşımına uğrayan alacak yine de istenebilir mi?", answer: "Evet, ancak borçlu zamanaşımı def'ini ileri sürerse alacak dava yoluyla tahsil edilemez. Hâkim zamanaşımını kendiliğinden dikkate almaz; bu nedenle süre dolmuş olsa bile borçlunun itiraz edip etmeyeceği sonucu belirler. Sürelerin dolmadan takip edilmesi bu riski ortadan kaldırır." },
      { question: "Tedarik sözleşmesi erken feshedilirse ne olur?", answer: "Fesih haklı değilse feshi yapan taraf tazminat ödemekle yükümlü olabilir. Sözleşmedeki fesih ve cezai şart hükümleri ile bildirim usulüne uyulup uyulmadığı incelenir; haklı bir neden varsa tazminat sorumluluğu doğmayabilir. Sonuç, somut sözleşmenin metnine göre değişir." },
    ],
    howToTitle: "Kartal'da Sözleşmeden Doğan Alacak Nasıl Talep Edilir?",
    howToSteps: [
      { name: "Belgelerin Derlenmesi", text: "Sözleşme, fatura, irsaliye ve yazışmalar alacağın dayanağı olarak toplanır." },
      { name: "İhtar ve Arabuluculuk Kontrolü", text: "Borçluya ihtarname gönderilir; uyuşmazlık arabuluculuk şartına tabiyse başvuru yapılır." },
      { name: "Dava Dilekçesi", text: "Yetkili asliye hukuk veya asliye ticaret mahkemesine dilekçe sunulur." },
      { name: "Karar ve Tahsil", text: "Karar kesinleşince borçlu ödemezse icra yoluyla tahsile geçilir." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];

export const kartalServices: PseoService[] = [...kartalBaseServices, kartalMiras];
