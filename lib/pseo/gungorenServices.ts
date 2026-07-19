import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const gungorenServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "gungoren-avukat",
    name: "Güngören Avukat",
    heroTitle: "Güngören Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, dünyanın önemli toptan tekstil çarşılarından birine ev sahipliği yapan, yüzölçümü bakımından Türkiye'nin en küçük ilçesi olan Güngören'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Bakırköy Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Güngören Avukat",
    metaDescription:
      "Güngören'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Toptan tekstil çarşısıyla tanınan, sık dokulu ve kompakt yapısıyla öne çıkan Güngören'de ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Çarşı dükkanı ve konut uyuşmazlıklarının takibi." },
      { title: "İş Hukuku", description: "Tekstil çarşısı çalışanlarının işçilik alacaklarında destek." },
      { title: "İcra Hukuku", description: "Toptan alacak takibi ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "İdari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı ve cezası uyuşmazlıkları." },
      { title: "Borçlar Hukuku", description: "Toptan tekstil sözleşmesi ve alacak kaynaklı davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Çarşı dükkanı ve konut ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Toptan alacakların tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Toptan tekstil sözleşmesi kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "1992 yılına kadar Bakırköy'e bağlı bir bölge olan, 7 km² yüzölçümüyle Türkiye'nin en küçük ilçesi Güngören, buna karşın toptan tekstil ticaretinde dünya çapında tanınan bir çarşıya sahiptir; bu yoğun ve kompakt doku, hukuki ihtiyaçları da şekillendirmektedir.",
      "İlçedeki hukuki uyuşmazlıklar İstanbul Bakırköy Adliyesi'nde, vergisel işlemler ise Güngören Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Güngören'deki davalara hangi adliye bakıyor?", answer: "Güngören, İstanbul Bakırköy Adliyesi'nin yargı çevresinde yer almaktadır." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Güngören'de mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Güngören'deki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Çarşı esnafı arası uyuşmazlıklarda destek alınabilir mi?", answer: "Evet, toptan satış sözleşmeleri ve alacak uyuşmazlıklarında danışmanlık sağlanır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Bakırköy Adliyesi'ne Güngören'den ulaşım nasıl?", answer: "Metrobüs ve T1 tramvay bağlantıları üzerinden ulaşım sağlanabilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır." },
    ],
    howToTitle: "Güngören'de Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Güngören Avukat (Genel)",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz", "kidem-tazminati-hesaplama-2026"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "gungoren-bosanma-avukati",
    name: "Güngören Boşanma Avukatı",
    heroTitle: "Güngören Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; aile mahkemeleri İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Güngören Boşanma Avukatı",
    metaDescription:
      "Güngören'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Aile hukuku alanında Güngören'deki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlar.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Esnaf Ailelerinde Mal Rejimi", description: "Dükkan işleten eşin katkı payının hesaplanması." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Dükkan işleten eşin katkı payının mal rejiminde değerlendirilmesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Çarşıda dükkan işleten aile işletmelerinin yaygın olduğu Güngören'de, boşanma davalarında eşlerden birinin işletmeye emek veya sermaye katkısının mal rejimi tasfiyesinde nasıl değerlendirileceği önemli bir konu olabilmektedir.",
      "Boşanma, velayet ve nafaka davalarına İstanbul Bakırköy Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Anlaşmalı boşanmada dükkan/işletme nasıl paylaşılır?", answer: "Taraflar protokolde serbestçe anlaşabilir; anlaşma sağlanamazsa mal rejimi hükümleri uygulanır." },
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "İstanbul Bakırköy Adliyesi'ndeki aile mahkemesine başvurulur." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir." },
      { question: "Eşin işletmeye kayıtsız katkısı ispatlanabilir mi?", answer: "Tanık beyanı, banka kayıtları ve benzeri delillerle ispat edilmeye çalışılabilir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir." },
    ],
    howToTitle: "Güngören'de Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "gungoren-ceza-avukati",
    name: "Güngören Ceza Avukatı",
    heroTitle: "Güngören Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; kovuşturma İstanbul Bakırköy Adliyesi'nde yürütülür.",
    metaTitle: "Güngören Ceza Avukatı",
    metaDescription:
      "Güngören'de soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. Ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında Güngören'deki müvekkillerine müdafilik yapar.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Çarşı İçi Uyuşmazlıklar", description: "Dükkan ve depo kaynaklı güven suçu iddialarında savunma." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Çarşı içi ticari ilişkilerden doğan güveni kötüye kullanma iddialarında savunma",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "Küçük yüzölçümüne rağmen yoğun bir ticari trafiğe sahne olan Güngören çarşısında, esnaf arası ticari ilişkilerden kaynaklanan güveni kötüye kullanma ve dolandırıcılık iddiaları zaman zaman gündeme gelebilmektedir.",
      "Kovuşturma aşamasındaki davalar İstanbul Bakırköy Adliyesi'nde görülür. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından belirleyicidir.",
    ],
    faqs: [
      { question: "Esnaf arası güven ilişkisinden doğan suçlarda süreç nasıl işler?", answer: "Şikayet üzerine soruşturma başlar, ticari belgeler delil olarak incelenir." },
      { question: "Güngören'de bir ceza davası hangi adliyede görülür?", answer: "İstanbul Bakırköy Adliyesi'nde görülür." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir ancak müdafi bulundurmak önerilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, sulh ceza hakimliğine itiraz edilebilir." },
      { question: "Temyiz kanun yoluna hangi kararlar için başvurulur?", answer: "Kanunda sayılan ağır suçlara ilişkin kararlar için başvurulabilir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Yargılamaya kaldığı yerden devam edilir." },
    ],
    howToTitle: "Güngören'de Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "gungoren-gayrimenkul-avukati",
    name: "Güngören Gayrimenkul Avukatı",
    heroTitle: "Güngören Gayrimenkul Avukatı",
    heroSubtitle:
      "Çarşı dükkanı, tapu uyuşmazlıkları ve konut ilişkilerinde hukuki destek sağlanır; davalar İstanbul Bakırköy Adliyesi'nde görülür.",
    metaTitle: "Güngören Gayrimenkul Avukatı",
    metaDescription:
      "Güngören'de çarşı dükkanı kiraları, tapu iptali ve konut uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Çarşı dükkanı ve konut uyuşmazlıklarında Güngören'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Çarşı Dükkanları", description: "Tekstil çarşısındaki işyerlerinde kira ve devir uyuşmazlıkları." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Yoğun Konut Dokusu", description: "Kompakt yerleşimde kat mülkiyeti uyuşmazlıkları." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Çarşı dükkanlarının kira sözleşmelerinin hazırlanması ve incelenmesi",
      "İşyeri devri ve kiracılık ilişkisinin sona ermesine ilişkin uyuşmazlıklar",
      "Kat malikleri kurulu ve yönetim planı uyuşmazlıklarında temsil",
      "Tapu iptali ve tescil davalarının açılması",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
    ],
    localParagraphs: [
      "Türkiye'nin en küçük ilçesi olmasına karşın yoğun bir çarşı ve konut dokusuna sahip Güngören'de, sınırlı alan nedeniyle dükkan devri ve kira bedeli uyuşmazlıkları önemli bir gayrimenkul hukuku konusu haline gelmektedir.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür.",
    ],
    faqs: [
      { question: "Çarşıdaki dükkanın devrinde kiracının onayı gerekir mi?", answer: "Kural olarak devir için kiraya verenin onayı aranır, sözleşmede aksi kararlaştırılmışsa ona bakılır." },
      { question: "Dükkan kirasında rayiç bedel tespiti nasıl yapılır?", answer: "Çarşı içindeki emsal kira bedelleri bilirkişi incelemesiyle değerlendirilerek tespit edilir." },
      { question: "Güngören'de gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir." },
      { question: "Kat malikleri kurulu kararına nasıl itiraz edilir?", answer: "Karara katılmayan malik, belirli süre içinde iptal davası açabilir." },
    ],
    howToTitle: "Güngören'de Tapu İptali Süreci Nasıl İlerler?",
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
    urlSlug: "gungoren-icra-avukati",
    name: "Güngören İcra Avukatı",
    heroTitle: "Güngören İcra Avukatı",
    heroSubtitle:
      "Toptan tekstil ticaretinden doğan alacakların tahsili amacıyla icra takibi, itiraz ve haciz süreçlerinde temsil sağlanır; icra daireleri İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Güngören İcra Avukatı",
    metaDescription:
      "Güngören'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İcra ve iflas hukuku kapsamında Güngören'deki tekstil esnafına ve bireysel müvekkillere danışmanlık verir.",
    highlightCards: [
      { title: "Çarşı Esnafı Alacakları", description: "Toptan tekstil satışından doğan çek/senet alacaklarının takibi." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Toptan tekstil satışından doğan çek ve senet alacaklarının takibi",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "İhaleye katılım ve ihalenin feshi talepleri",
      "Mali sıkıntı yaşayan esnaf ve işletmeler için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Dar bir alana sıkışmış yoğun bir tekstil çarşısına sahip Güngören'de, komisyoncu ve toptancı esnaf arasındaki vadeli satışlardan doğan çek ve senet alacakları icra takiplerinin başlıca nedenlerindendir.",
      "Bu takiplere ilişkin uyuşmazlıklar İstanbul Bakırköy Adliyesi'ndeki icra mahkemelerinde görülür; borçlunun Güngören'de yerleşik olduğu takiplerde yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "Vadeli tekstil satışında ödeme yapılmazsa ilk adım ne olmalı?", answer: "Elde bulunan çek, senet veya faturaya dayanarak icra takibi başlatılabilir." },
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "Sözleşme, senet, çek, fatura veya mahkeme ilamı gibi belgelerle başlanabilir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Tebliğden itibaren 7 gündür." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür." },
    ],
    howToTitle: "Güngören'de İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "gungoren-idare-avukati",
    name: "Güngören İdare Avukatı",
    heroTitle: "Güngören İdare Avukatı",
    heroSubtitle:
      "Belediye, imar ve işyeri ruhsat işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Güngören İdare Avukatı",
    metaDescription:
      "Güngören'de idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. İdari işlemlerin iptali ve tam yargı davalarında Güngören'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Çarşı İşyeri Ruhsatları", description: "Tekstil çarşısındaki işyeri ve depo ruhsat süreçleri." },
      { title: "İmar Uygulamaları", description: "Kompakt yerleşim dokusunda imar durumu uyuşmazlıkları." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Çarşı içi işyeri ve depo ruhsat işlemlerine itiraz edilmesi",
      "İmar planı değişikliklerine karşı iptal davası açılması",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
      "Belediye encümen kararlarına karşı dava açılması",
    ],
    localParagraphs: [
      "Sınırlı yüzölçümüne rağmen yoğun bir çarşı faaliyetinin sürdüğü Güngören'de, işyeri ve depo ruhsatlarına ilişkin idari işlemler ile imar uygulamaları sık başvurulan idari dava konuları arasındadır.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "Çarşı içi depo ruhsatı reddedilirse itiraz süresi nedir?", answer: "Tebliğ tarihinden itibaren 60 gün içinde idare mahkemesinde dava açılabilir." },
      { question: "İşyeri ruhsatı iptal edilirse ne yapılabilir?", answer: "İptal işlemine karşı idare mahkemesinde dava açılabilir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, yasal süresinde idare mahkemesinde dava açılabilir." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İlan tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılmalıdır." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde dava açılabilir." },
    ],
    howToTitle: "Güngören'de İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "gungoren-is-hukuku-avukati",
    name: "Güngören İş Hukuku Avukatı",
    heroTitle: "Güngören İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Güngören İş Hukuku Avukatı",
    metaDescription:
      "Güngören'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Güngören'deki tekstil çarşısı çalışanlarına ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Çarşı Çalışanı Alacakları", description: "Tezgahtar ve depo elemanlarının ücret uyuşmazlıkları." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Tezgahtar ve depo elemanlarının ücret ve fazla mesai alacaklarının tahsili",
      "Sigortasız veya eksik günlü çalışmaya ilişkin hizmet tespiti davaları",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Küçük ama yoğun bir tekstil çarşısına sahip Güngören'de, dükkan ve depolarda çalışan tezgahtar ve yardımcı personelin ücret, fazla mesai ve sigorta kaydı uyuşmazlıkları sık görülen iş hukuku konularındandır.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Bakırköy Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Çarşıda sigortasız çalıştırılan tezgahtarın hakları nelerdir?", answer: "Hizmet tespiti davası açılarak çalışma süresi ve sigorta eksikliği mahkemece tespit ettirilebilir." },
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Çalışma süresi ve son brüt ücret esas alınarak hesaplanır." },
      { question: "Güngören'de iş mahkemesi nerededir?", answer: "İstanbul Bakırköy Adliyesi bünyesindedir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir." },
      { question: "Depoda iş kazası geçiren çalışan ne yapmalı?", answer: "Olay derhal SGK'ya bildirilmeli, tedavi ve tazminat süreci başlatılmalıdır." },
    ],
    howToTitle: "Güngören'de İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "gungoren-kira-tahliye-avukati",
    name: "Güngören Kira ve Tahliye Avukatı",
    heroTitle: "Güngören Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Çarşı dükkanı ve konut tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemeleri İstanbul Bakırköy Adliyesi'ndedir.",
    metaTitle: "Güngören Kira ve Tahliye Avukatı",
    metaDescription:
      "Güngören'de kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Kira hukuku alanında Güngören'deki kiraya verenlere ve kiracılara danışmanlık verir.",
    highlightCards: [
      { title: "Dükkan Rayiç Bedeli", description: "Sınırlı çarşı alanında güncel kira bedelinin tespiti." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "İşyeri Tahliyesi", description: "Çarşı dükkanlarında tahliye süreci ve usulü." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Çarşı dükkanlarında rayiç kira bedelinin tespiti ve uyarlanması",
      "Konut ve işyeri kira sözleşmelerinin hazırlanması ve incelenmesi",
      "İhtiyaç nedeniyle açılan tahliye davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Sınırlı yüzölçümü nedeniyle çarşı içindeki dükkanlara olan talebin yüksek kaldığı Güngören'de, kira bedeli tespiti davaları konut kiralarına kıyasla daha sık başvurulan bir yol haline gelmektedir.",
      "Bu davalara İstanbul Bakırköy Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır; taşınmazın konut mu işyeri mi olduğu, uygulanacak usulü doğrudan etkiler.",
    ],
    faqs: [
      { question: "Çarşıda dükkan kirası neden sık uyuşmazlık konusu olur?", answer: "Sınırlı alan nedeniyle talebin yüksek kalması, rayiç bedel farklarını daha belirgin hale getirebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Güngören'de tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
    ],
    howToTitle: "Güngören'de Kira Bedeli Tespiti Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Emsal Araştırması", text: "Çarşı içindeki benzer nitelikteki dükkanların kira bedelleri araştırılır." },
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
    urlSlug: "gungoren-vergi-avukati",
    name: "Güngören Vergi Avukatı",
    heroTitle: "Güngören Vergi Avukatı",
    heroSubtitle:
      "Tekstil çarşısı işletmelerine yönelik vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Güngören Vergi Avukatı",
    metaDescription:
      "Güngören'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Güngören'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Çarşı Esnafı İncelemesi", description: "Toptan tekstil ticaretine yönelik vergi incelemesi süreçleri." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Toptan tekstil ticaretine yönelik vergi incelemesi sürecinde danışmanlık",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Kayıt dışı işlem iddialarına karşı savunma hazırlanması",
    ],
    localParagraphs: [
      "Dünyanın önemli toptan tekstil çarşılarından birine sahip Güngören'de, yoğun nakit ve vadeli işlem hacmi nedeniyle kayıt düzenine ilişkin vergi incelemeleri ile bunlara bağlı ceza kesme işlemleri sık karşılaşılan konular arasındadır.",
      "Bu işlemlere karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir; ihbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "Toptan satışlarda kayıt dışı işlem iddiasına nasıl itiraz edilir?", answer: "İncelemenin dayanağı ve hesap yöntemi hukuka aykırıysa dava yoluyla itiraz edilebilir." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır." },
    ],
    howToTitle: "Güngören'de Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "gungoren-borclar-hukuku-avukati",
    name: "Güngören Borçlar Hukuku Avukatı",
    heroTitle: "Güngören Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Toptan tekstil ticaretinden doğan sözleşme, alacak ve tazminat uyuşmazlıkları, Güngören'in bağlı bulunduğu İstanbul Bakırköy Adliyesi'ndeki ticaret ve asliye hukuk mahkemelerinde takip edilir.",
    metaTitle: "Güngören Borçlar Hukuku Avukatı",
    metaDescription:
      "Güngören'de sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Güngören'de borçlar hukuku kapsamındaki sözleşme ve alacak uyuşmazlıkları, danışmanlıktan dava takibine uzanan bir süreçte ele alınır. Bu hizmeti sunan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Toptan Tekstil Sözleşmeleri", description: "Komisyonculuk ve toptan satıştan doğan uyuşmazlıklar." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Konsinye İlişkileri", description: "Konsinye teslim edilen ürünlerden doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Toptan satış ve komisyonculuk sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Konsinye teslim ilişkilerinden doğan uyuşmazlıklar",
      "Ayıplı mal nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması kanunen zorunludur; Güngören'de bu davalara İstanbul Bakırköy Adliyesi'ndeki ticaret ve asliye hukuk mahkemelerinde bakılır.",
      "Toptan tekstil çarşısıyla tanınan ilçede, komisyonculuk ve konsinye teslim ilişkilerinden kaynaklanan ödeme gecikmeleri, borçlar hukuku alanında sık görülen uyuşmazlıklar arasındadır.",
    ],
    faqs: [
      { question: "Komisyoncu ile toptancı arasındaki uyuşmazlıklar nasıl çözülür?", answer: "Öncelikle sözleşme şartları incelenir, gerekirse arabuluculuk veya dava yoluna gidilir." },
      { question: "Konsinye teslim edilen ürün satılmazsa ne olur?", answer: "Sözleşme şartlarına göre ürün iade edilebilir veya bedeli mahsuplaşma yoluyla çözülebilir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir." },
    ],
    howToTitle: "Güngören'de Ticari Alacak Davası Süreci Nasıl İşler?",
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
