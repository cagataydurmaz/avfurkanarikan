import type { PseoService } from "./types";
import { pendikMiras } from "./miras/pendikMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const pendikBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "pendik-avukat",
    name: "Pendik Avukat",
    heroTitle: "Pendik Avukat",
    heroSubtitle:
      "Sabiha Gökçen Havalimanı'nın konumlandığı Kurtköy'den sahil şeridindeki Güzelyalı'ya, Marmaray ve YHT hattının kesiştiği Pendik istasyon çevresinden sanayi sitelerinin yoğunlaştığı Kurtköy'e uzanan Pendik'te ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında avukat Furkan Arıkan danışmanlık ve dava takibi hizmeti sunmaktadır; İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olan Arıkan'ın dosyaları, ilçenin kendi adliyesi 2013'te kapatıldığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Pendik Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Pendik'te ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Sabiha Gökçen Havalimanı'nın bulunduğu Kurtköy, sahil hattındaki Güzelyalı ve Yenişehir, sanayi sitelerinin yer aldığı Kaynarca ve Sanayi Mahallesi gibi 36 mahalleden oluşan Pendik'te ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; ilçenin adliyesi 2013'te İstanbul Anadolu Adalet Sarayı'nın hizmete girmesiyle kapatıldığından davalar Kartal'daki bu adliyede görülür, randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Sahil şeridi ve sanayi bölgesi taşınmazlarında uyuşmazlık takibi." },
      { title: "İş Hukuku", description: "Havalimanı, lojistik ve sanayi sitesi çalışanlarının işçilik alacakları ve işe iade süreçleri." },
      { title: "İcra Hukuku", description: "Alacak takibi ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "İmar ve idari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı ve cezası uyuşmazlıkları." },
      { title: "Borçlar Hukuku", description: "Ticari sözleşme ve alacak kaynaklı davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Sahil şeridi ve sanayi bölgesi taşınmazlarına ilişkin gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İmar uygulamaları ve idari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Ticari sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "İstanbul'un Anadolu Yakası'nda, Marmara Denizi kıyısında yer alan Pendik, 36 mahallesiyle geniş bir alana yayılır; ilçeye bağlı Kurtköy'de bulunan Sabiha Gökçen Havalimanı ile ilçeyi hem havayolu hem kara ulaşımı açısından önemli bir merkez haline getirirken, Kaynarca ve Sanayi Mahallesi çevresindeki sanayi siteleri de yerel ekonominin önemli bir bölümünü oluşturur.",
      "Pendik'in kendi adliyesi, İstanbul Anadolu Adalet Sarayı'nın 2013 yılında hizmete girmesiyle kapatılmış olup ilçedeki dava ve icra dosyaları Kartal'daki bu adliyede görülür; ilçeye Marmaray'ın Pendik istasyonu (aynı yerleşkede YHT Garı ile birlikte) ve M4 metro hattının Pendik, Yayalar-Şeyhli ve Kurtköy istasyonlarından ulaşılabilir.",
    ],
    faqs: [
      { question: "Pendik'teki davalara hangi adliye bakıyor?", answer: "Pendik'in kendi adliyesi 2013 yılında kapatılmıştır; ilçedeki tüm dava ve icra dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Pendik'te mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Pendik'teki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Pendik'e nasıl ulaşılır?", answer: "Marmaray'ın Pendik istasyonu ve M4 metro hattının Pendik, Yayalar-Şeyhli ve Kurtköy istasyonları ilçeye raylı sistem bağlantısı sağlar; Sabiha Gökçen Havalimanı da ilçe sınırları içindedir." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır." },
      { question: "Sanayi sitesinde çalışanların işçilik uyuşmazlıklarında destek alınabilir mi?", answer: "Evet, Kaynarca ve Sanayi Mahallesi çevresindeki işyerlerinde çalışanların işçilik alacağı ve işe iade taleplerinde danışmanlık sağlanır." },
    ],
    howToTitle: "Pendik'te Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Pendik Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "pendik-bosanma-avukati",
    name: "Pendik Boşanma Avukatı",
    heroTitle: "Pendik Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanmalarda velayet, nafaka ve mal rejimi taleplerinin hazırlanmasında yardım verilir; Pendik Adliyesi 2013'te kapandığından aile mahkemesi duruşmaları Kartal'daki Anadolu Adliyesi'nde yapılır.",
    metaTitle: "Pendik Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Pendik'te anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Pendik'te yaşayan çiftler ve ebeveynler için boşanma, velayet ve nafaka dosyalarını Av. Furkan Arıkan yürütür; 2019 MEF Üniversitesi Hukuk mezunudur ve İstanbul Barosu'nda 72621 numarayla kayıtlıdır. Büro Pendik'te değil, Beşiktaş/Sinanpaşa'dadır.",
    highlightCards: [
      { title: "Protokollü Boşanma", description: "TMK m.166/3 çerçevesinde protokolün hazırlanması ve hâkim huzurunda onaylanması." },
      { title: "Kusur ve Tazminat", description: "Çekişmeli davada kusur iddialarının tanık ve belgelerle desteklenmesi." },
      { title: "Velayet ve Kişisel İlişki", description: "Çocuğun üstün yararına göre velayet ve görüşme düzeni." },
      { title: "Taşınmazlı Mal Tasfiyesi", description: "Güzelyalı, Yenişehir ve Kurtköy'deki konutların değerleme ve paylaşım hesabı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Protokol hazırlanması ve anlaşmalı boşanma duruşmasında temsil",
      "Kusur, tazminat ve nafaka taleplerini içeren çekişmeli boşanma davaları",
      "Velayet verilmesi, velayetin değiştirilmesi ve kişisel ilişki kurulması",
      "Yoksulluk, iştirak ve tedbir nafakasının artırılması veya kaldırılması",
      "Edinilmiş mallara katılma rejiminin tasfiyesi ve katkı payı alacağı talepleri",
      "Sahil şeridi ve Kurtköy'deki konutları kapsayan değerleme ve paylaşım hesapları",
    ],
    localParagraphs: [
      "Pendik'te mal paylaşımının önemli kısmını çoğu zaman taşınmazlar oluşturur: Güzelyalı ve Yenişehir'deki sahil daireleri ile Sabiha Gökçen'e yakın Kurtköy'de yeni yapılan konutlar. Boşanmada bunların edinme tarihi, hangi malla alındığı ve güncel rayiç bedeli, tapu kaydı ve bilirkişi raporuyla belirlenir.",
      "Aile mahkemesi dosyaları, Pendik Adliyesi'nin 2013'te kapanması nedeniyle Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. Anlaşmalı boşanmada evliliğin en az bir yıl sürmüş olması ve tarafların hâkim önünde iradelerini açıklaması gerekir (TMK m.166/3); çekişmeli davada ise delillerin dosyaya zamanında sunulması önem taşır.",
    ],
    faqs: [
      { question: "Anlaşmalı boşanmanın koşulları nelerdir?", answer: "Evlilik en az bir yıl sürmüş olmalı, eşler birlikte başvurmalı veya biri dava açıp diğeri kabul etmelidir. Hâkim tarafları dinler ve protokolün serbest iradeyle imzalandığına kanaat getirirse boşanmaya karar verir (TMK m.166/3). Protokolde velayet, nafaka ve mal paylaşımı yer alır." },
      { question: "Pendik'te yaşayan eşler boşanma için hangi aile mahkemesine başvurur?", answer: "Dava aile mahkemesine yöneltilir; yetkili yer, eşlerden birinin ikametgâhı ya da davadan önceki son altı ay boyunca birlikte yaşadıkları yerdir. Pendik'te yaşayanlar için bu mahkeme Kartal'daki İstanbul Anadolu Adliyesi'ndedir. Dilekçeye nüfus kayıt örneği ve evlilik belgeleri eklenir." },
      { question: "Velayet kararında hâkim hangi ölçütleri dikkate alır?", answer: "Esas ölçüt çocuğun üstün yararıdır. Hâkim çocuğun yaşını, bakım ihtiyacını, ebeveynlerin imkânlarını ve okul düzenini inceler; gerekirse pedagog ve sosyal çalışmacı raporu ister. Yeterince olgunlaşmış çocuğun görüşü de dinlenir. Karar sonrası koşullar değişirse velayetin değiştirilmesi ayrıca istenebilir." },
      { question: "Boşanmada nafaka türleri nelerdir?", answer: "Tedbir nafakası dava süresince, yoksulluk nafakası boşanma sonrasında yoksulluğa düşecek eşe, iştirak nafakası ise çocuğun bakımı için velayeti almayan ebeveyne ödenir. Miktar, tarafların gelir durumuna ve ihtiyaçlarına göre belirlenir; koşullar değişirse artırım veya kaldırma istenebilir." },
      { question: "Sahilde veya Kurtköy'de alınan daire mal paylaşımına dahil olur mu?", answer: "Evlilik süresince edinilmiş ve katılma rejimine tabi bir daire tasfiyeye dahil edilir; evlenmeden önce alınan veya miras yoluyla gelen taşınmaz ise kişisel mal sayılır. Değerleme için tapu kaydı ve bilirkişi incelemesi esas alınır. Mal rejimi tasfiyesi ayrı bir dava olarak da açılabilir." },
    ],
    howToTitle: "Pendik'te Boşanma Davası Hangi Adımlarla İlerler?",
    howToSteps: [
      { name: "Talep ve Belgelerin Belirlenmesi", text: "Anlaşmalı mı çekişmeli mi ilerleneceği; velayet, nafaka ve taşınmaz bilgileriyle belirlenir." },
      { name: "Protokol veya Dava Dilekçesi", text: "Anlaşma varsa protokol yazılır; yoksa kusur ve talepleri içeren dilekçe hazırlanır." },
      { name: "Aile Mahkemesine Başvuru", text: "Evrak Kartal'daki aile mahkemesine sunulur ve duruşma günü alınır." },
      { name: "Duruşma ve Hüküm", text: "Taraflar dinlenir, deliller toplanır ve mahkeme boşanma, velayet ve nafakaya karar verir." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "bosanmada-nafaka-turleri"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "pendik-ceza-avukati",
    name: "Pendik Ceza Avukatı",
    heroTitle: "Pendik Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade ve yargılama sırasında şüpheli, sanık ve mağdurlara müdafi veya vekil olarak yardım verilir; Pendik Adliyesi 2013'te kapatıldığı için soruşturma ve davalar Kartal'daki Anadolu Adliyesi'nde yürür.",
    metaTitle: "Pendik Ceza Avukatı | Müdafilik",
    metaDescription:
      "Pendik'te soruşturma, kovuşturma, tutukluluğa itiraz ve ceza yargılamasının tüm aşamalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Ceza soruşturması ve kovuşturmalarında Pendik'te yaşayan veya çalışan şüpheli, sanık ve mağdurlar için Av. Furkan Arıkan görev alır; 2019 MEF Üniversitesi Hukuk mezunudur ve İstanbul Barosu'nda 72621 numarayla kayıtlıdır. Büro Beşiktaş/Sinanpaşa'dadır.",
    highlightCards: [
      { title: "Gözaltında Müdafi", description: "Kolluk ve savcılıkta ifade alınırken avukat bulundurma hakkının kullanılması." },
      { title: "Tutuklama İtirazı", description: "Tutuklama ve tutukluluğun devamı kararlarına karşı sulh ceza hakimliğine başvuru." },
      { title: "Havalimanı Çevresi Dosyaları", description: "Sabiha Gökçen'e bağlı gümrük ve kaçakçılık kaynaklı iddialarda savunma." },
      { title: "Sanayi Siteleri Suçları", description: "İş yerlerinde hırsızlık ve güveni kötüye kullanma iddialarında savunma." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı ve ifade aşamasında müdafi olarak hazır bulunma",
      "Soruşturma dosyasının incelenmesi ve savunmanın hazırlanması",
      "Tutuklama ve adli kontrol kararlarına karşı itiraz dilekçeleri",
      "Kovuşturma aşamasında sanık müdafiliği ve mağdur vekilliği",
      "Gümrük mevzuatı ve kaçakçılık iddialarında havalimanı çevresi dosyalarında savunma",
      "Uzlaşmaya tabi suçlarda taraflar arasındaki uzlaştırma sürecinin takibi",
    ],
    localParagraphs: [
      "Pendik'in ceza dosyaları coğrafyasıyla bağlantılıdır: Kurtköy'deki Sabiha Gökçen Havalimanı çevresinde gümrük ve kaçakçılık mevzuatına aykırılık iddiaları, Kaynarca ve Sanayi Mahallesi'ndeki sanayi sitelerinde ise iş yeri hırsızlığı ve güveni kötüye kullanma şikâyetleri sık görülen konular arasındadır.",
      "Pendik Adliyesi'nin kapandığı 2013'ten itibaren soruşturma ve kovuşturmalar Kartal'daki İstanbul Anadolu Adliyesi'nde yürütülür. Yakalanan kişi, gözaltının ilk anından itibaren müdafiyle görüşme hakkına sahiptir; bu hakkın kullanılması ifadenin içeriğini ve savunmanın yönünü doğrudan etkiler.",
    ],
    faqs: [
      { question: "Gözaltına alınan kişi hemen avukatla görüşebilir mi?", answer: "Evet. Yakalanan veya gözaltına alınan kişi, yakalandığı andan itibaren avukat seçme ve görüşme hakkına sahiptir; ifade alınırken avukatın bulunmasını isteyebilir. Bu hak ifade öncesinde de kullanılabilir. Avukat tutamayan kişi için baro aracılığıyla zorunlu müdafi görevlendirilmesi talep edilebilir." },
      { question: "Havalimanı çevresinde gümrük kaynaklı bir şüphe varsa ilk ne yapılmalıdır?", answer: "İfade vermeden önce avukata danışılmalı, elde bulunan fatura, gümrük beyannamesi ve ticari yazışmalar korunmalıdır. Savunma, eşyanın menşei ve beyan edilen bilgilerle ilişkisi üzerinden kurulur; imzalanan her beyan dosyaya girdiği için içeriği dikkatle okunmalıdır. Delillerin erken toplanması savunmanın hazırlanmasını kolaylaştırır." },
      { question: "Müdafi soruşturma dosyasını inceleyebilir mi?", answer: "Müdafi dosya içeriğini inceleyebilir ve belge örneği alabilir; ancak soruşturmanın amacını tehlikeye düşürme ihtimali varsa hâkim kararıyla bu hak kısıtlanabilir. Kısıtlama halinde bile yakalanan kişinin ifade tutanağına ve bilirkişi raporlarına erişim sağlanır. Dosya incelemesi savunma stratejisinin belirlenmesi için gereklidir." },
      { question: "Tutuklama kararına karşı nereye itiraz edilir?", answer: "Tutuklama ve tutukluluğun devamı kararlarına karşı sulh ceza hakimliğine itiraz edilir; itiraz, kararın öğrenilmesinden itibaren yedi gün içinde yapılır. Tutukluluk durumu ayrıca otuz günlük aralıklarla resen incelenir; bu incelemede dilekçeyle tahliye talebi de sunulabilir. İtiraz dilekçesinde tutukluluğun gerekçesine ilişkin eksiklikler belirtilir." },
      { question: "Kovuşturmaya yer olmadığı kararına nasıl itiraz edilir?", answer: "Kararın tebliğinden itibaren on beş gün içinde sulh ceza hakimliğine itiraz edilebilir. Dilekçede, savcılığın değerlendirmediği deliller ve kararın hukuka aykırı olduğu yönler gösterilir; itiraz kabul edilirse soruşturma devam eder veya iddianame düzenlenir. Sürenin geçirilmesi halinde karar kesinleşir." },
    ],
    howToTitle: "Pendik'te Ceza Soruşturması Dava Aşamasına Nasıl Taşınır?",
    howToSteps: [
      { name: "Şüphe ve İfade", text: "Şikâyet, ihbar veya yakalama üzerine kolluk ve savcılık ifadeleri alınır." },
      { name: "Dosyanın İncelenmesi", text: "Müdafi soruşturma evrakını inceler, savunma için delilleri belirler." },
      { name: "İddianame ve Duruşma", text: "İddianame kabul edilirse ceza mahkemesinde kovuşturma başlar." },
      { name: "Kanun Yolları", text: "Hükme karşı istinaf, gerektiğinde temyiz yoluna başvurulur." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "kosullu-saliverilme-oranlari", "tutukluluga-itiraz"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "pendik-gayrimenkul-avukati",
    name: "Pendik Gayrimenkul Avukatı",
    heroTitle: "Pendik Gayrimenkul Avukatı",
    heroSubtitle:
      "Güzelyalı ve Yenişehir sahillerindeki siteler, Kurtköy'ün yeni konut adaları ve Kaynarca-Sanayi hattındaki iş yerleri için tapu, kat mülkiyeti ve kira ihtilaflarında hukuki yardım verilir; Pendik Adliyesi 2013'te kapandığından dosyalar Kartal'daki Anadolu Adliyesi'ne gider.",
    metaTitle: "Pendik Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Pendik'te kat mülkiyeti, tapu iptali, kira uyuşmazlıkları ve sanayi sitesi taşınmazlarına ilişkin gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Pendik'teki taşınmaz malikleri, site sakinleri ve iş yeri kiracıları için tapu, kat mülkiyeti ve kira dosyalarını Av. Furkan Arıkan yürütür; 2019 MEF Üniversitesi Hukuk mezunudur ve 72621 numaralı İstanbul Barosu sicilinde kayıtlıdır. Büro Pendik'te değil, Beşiktaş/Sinanpaşa'dadır.",
    highlightCards: [
      { title: "Site Yönetimi İhtilafları", description: "Sahil sitelerinde aidat, ortak gider ve genel kurul kararlarının iptali." },
      { title: "Kurtköy Konut Alımları", description: "Yeni projelerde satış vaadi sözleşmesi ve tapu devrinin gecikmesi halinde başvurulacak yollar." },
      { title: "İş Yeri ve Sanayi Siteleri", description: "Kaynarca ile Sanayi Mahallesi çevresindeki dükkân, atölye ve depo kiraları." },
      { title: "Tapu ve Dönüşüm Dosyaları", description: "Usulsüz tescil, riskli yapı tespiti ve hak sahipliği tartışmaları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Genel kurul kararlarının iptali ve ortak gider alacaklarına ilişkin kat mülkiyeti davaları",
      "Satış vaadi sözleşmesine dayalı tapu devri taleplerinin incelenmesi ve dava açılması",
      "Atölye, depo ve dükkân kiralarında sözleşme hazırlığı ve ihtilaf yönetimi",
      "Yolsuz tescile karşı tapu iptali ve tescil davaları",
      "Riskli yapı kararı sonrasında hak sahipliği ve bedel tespiti işlemleri",
      "Paydaşlar arasında ortaklığın giderilmesi davaları",
    ],
    localParagraphs: [
      "Pendik'te yapı stoku tek tip değildir: Güzelyalı ve Yenişehir gibi sahil mahallelerinde kat mülkiyetli siteler, Kurtköy'de Sabiha Gökçen Havalimanı'na yakın konumu nedeniyle gelişen konut adaları, Kaynarca ile Sanayi Mahallesi çevresinde ise sanayi sitesi parselleri öne çıkar. Bu çeşitlilik, yönetim planı okumasından satış vaadi sözleşmesinin incelenmesine kadar farklı değerlendirmeler gerektirir.",
      "Pendik Adliyesi 2013'te kapatıldığı için bu ihtilaflar Kartal'daki İstanbul Anadolu Adalet Sarayı'nda çözülür. Yönetim planı ve genel kurul kararlarına ilişkin işler çoğunlukla sulh hukuk, tapu iptali gibi talepler ise asliye hukuk mahkemesine gider; dilekçeden önce güncel tapu kaydı ve imar durumu belgesinin çıkarılması gerekir.",
    ],
    faqs: [
      { question: "Kurtköy'de yeni projeden alınan dairenin tapusu devredilmezse ne yapılabilir?", answer: "Noterde düzenlenmiş geçerli bir satış vaadi sözleşmesi varsa tapu devri için dava açılabilir. Önce ödemelerin belgelenmesine ve tapuda şerh bulunup bulunmadığına bakılır, ardından ihtarname gönderilir; sonuç alınamazsa tapu devri ve tescil talebiyle yetkili mahkemeye başvurulur." },
      { question: "Sahildeki sitede genel kurul kararına karşı hangi sürede dava açılır?", answer: "Kat Mülkiyeti Kanunu uyarınca kanuna veya yönetim planına aykırı kararlara karşı iptal davası, kural olarak karar tarihinden itibaren bir ay içinde sulh hukuk mahkemesinde açılır. Bu süre kısa olduğundan karar tutanağı ve toplantı tarihi hemen belgelenmeli, itiraz gerekçeleri dilekçeye yazılmalıdır." },
      { question: "Sanayi sitesindeki dükkân kirasında artış oranı nasıl belirlenir?", answer: "Çatılı iş yeri kiralarında yenilenen dönemdeki artış, önceki on iki ayın TÜFE ortalamasını aşamaz (TBK m.344); sözleşmedeki daha yüksek oran bu sınırı geçiyorsa geçersiz sayılır. Bedel emsal kiraların çok altında kalıyorsa ayrıca kira tespit davası açılabilir." },
      { question: "Tapu iptali ve tescil davası hangi mahkemede açılır?", answer: "Dava, taşınmazın bulunduğu yerdeki asliye hukuk mahkemesinde açılır; Pendik taşınmazları için bu mahkeme Kartal'daki İstanbul Anadolu Adliyesi'ndedir. Dilekçeye güncel tapu kaydı, dayanak belge ve varsa imar bilgileri eklenir; yetki taşınmazın bulunduğu yere bağlıdır. Yanlış mahkemede açılan dava yetkisizlik kararıyla sonuçlanır ve zaman kaybettirir." },
      { question: "Riskli yapı kararı verilen binada bir malik dönüşüme katılmazsa ne olur?", answer: "Kanunda aranan çoğunluk sağlanmışsa karar tüm maliklere uygulanır; katılmayan malike ihtar yapılır ve gerekirse pay satışı gibi yasal usuller işler. Riskli yapı tespitine ve sonraki işlemlere karşı yasal süre içinde itiraz veya iptal davası yolu da açıktır." },
    ],
    howToTitle: "Pendik'te Taşınmaz İhtilafında İzlenen Yol Nedir?",
    howToSteps: [
      { name: "Tapu ve Belge Çıkarılması", text: "Güncel tapu kaydı, yönetim planı, sözleşme ve imar durumu belgesi temin edilir." },
      { name: "Hukuki Niteliğin Belirlenmesi", text: "İhtilafın kat mülkiyeti, satış vaadi, kira veya tescil davasına dayanıp dayanmadığı ile görevli mahkeme saptanır." },
      { name: "İhtar ve Dilekçe", text: "Gerekirse noter ihtarı gönderilir, dava dilekçesi süre kontrolüyle hazırlanıp verilir." },
      { name: "Yargılama ve Keşif", text: "Mahkemede bilirkişi ve gerektiğinde keşifle taşınmaz incelenir, karar sonrası tapuya işlenir." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "pendik-icra-avukati",
    name: "Pendik İcra Avukatı",
    heroTitle: "Pendik İcra Avukatı",
    heroSubtitle:
      "Kurtköy'deki lojistik firmalarından Kaynarca sanayi sitelerine uzanan ticari alacaklarda takip başlatma, ödeme emrine itiraz ve haciz aşamalarında hukuki yardım verilir; icra dosyaları, 2013'te kapanan Pendik Adliyesi yerine Kartal'daki Anadolu Adliyesi'ne bağlıdır.",
    metaTitle: "Pendik İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Pendik'te icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Pendik'te yerleşik alacaklı ve borçlular için icra-iflas dosyalarını Av. Furkan Arıkan takip eder; 2019 MEF Üniversitesi Hukuk mezunudur, İstanbul Barosu'nda 72621 numarayla kayıtlıdır. Büro Beşiktaş/Sinanpaşa'dadır, ilçede bulunmamaktadır.",
    highlightCards: [
      { title: "Ödeme Emri Aşaması", description: "Tebliğ edilen emre karşı yedi günlük itiraz süresinin takibi." },
      { title: "İtirazın İptali", description: "İtiraz yüzünden duran takibin dava veya itirazın kaldırılması yoluyla sürdürülmesi." },
      { title: "Haciz ve Mal Araştırması", description: "Banka hesabı, araç ve taşınmaz kayıtları üzerinden haciz uygulaması." },
      { title: "Sanayi ve Lojistik Alacakları", description: "Kaynarca, Sanayi Mahallesi ve Kurtköy'deki firmalar arası fatura, irsaliye ve cari hesap takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fatura, irsaliye veya sözleşmeye dayanan ilamsız takip dosyalarının hazırlanması",
      "Mahkeme ilamlarının icraya konulması ve ilamlı takip işlemleri",
      "Ödeme emrine karşı borca ve imzaya itiraz dilekçelerinin verilmesi",
      "İtirazın iptali davası ile itirazın kaldırılması taleplerinin yürütülmesi",
      "Banka hesapları, araçlar ve taşınmazlar üzerindeki haciz ile satış işlemleri",
      "Ödeme güçlüğündeki borçlular için konkordato değerlendirmesi",
    ],
    localParagraphs: [
      "Pendik'te alacak sorunu çoğunlukla ticari defterlerde başlar: Kaynarca ve Sanayi Mahallesi çevresindeki sanayi sitelerinde tedarik faturaları, Kurtköy'deki lojistik ve havacılık hizmeti sağlayıcıları arasında ise cari hesap bakiyeleri vadesinde ödenmez. Böyle durumlarda alacaklı, elindeki belgelerin niteliğine göre ilamsız takibe başvurabilir.",
      "İcra dosyaları ve takibe bağlı şikâyetler, Pendik Adliyesi'nin 2013'te kapanması üzerine Kartal'daki İstanbul Anadolu Adliyesi'nde yürür. Yetki bakımından kural olarak borçlunun yerleşim yeri esas alınır; dolayısıyla Pendik'te oturan borçlu hakkındaki takip bu adliyedeki icra dairelerinde açılır.",
    ],
    faqs: [
      { question: "Ödeme emrine süresinde itiraz edilmezse ne olur?", answer: "Yedi günlük süre içinde itiraz edilmezse takip kesinleşir ve alacaklı haciz talep edebilir (İİK m.62). Süre, ödeme emrinin tebliğ edildiği günden başlar; itiraz dilekçesi icra dairesine verilir ve itiraz edilirse takip durur. Bu nedenle tebliğ tarihinin ve yedinci günün doğru hesaplanması takibin seyrini doğrudan etkiler." },
      { question: "Lojistik firmasından olan fatura alacağı için hangi belgeler gerekir?", answer: "Fatura, teslim irsaliyesi veya sevk belgesi, sözleşme ve varsa cari hesap mutabakatı toplanır. Bu belgeler alacağın miktarını ve vadesini gösterir; takip talebinde dayanak olarak sunulur. Belge eksikse önce ihtarname gönderilerek borçlunun temerrüdü kayda geçirilir. Belgeler dosyaya asıl veya onaylı örnek olarak eklenir." },
      { question: "İtiraz üzerine duran takip nasıl sürdürülür?", answer: "Takibi sürdürmek için itirazın iptali davası açılır; alacaklının elinde imzası ikrar edilmiş veya noterce onaylı bir belge varsa icra mahkemesinden itirazın kaldırılması da istenebilir. Hangi yolun seçileceği, alacağın dayanağı olan belgenin niteliğine göre belirlenir. Her iki yolda da süre ve yetkili merci kanunda ayrıca düzenlenmiştir." },
      { question: "Hangi mallar haczedilemez?", answer: "Borçlunun ve ailesinin zorunlu ev eşyası, mesleğini sürdürmek için gerekli bazı araçlar ve belirli gelir kalemleri kanunen haczedilemez. Banka hesabı, araç ve taşınmaz gibi mallara ise haciz konulabilir; haczi caiz olmayan mal üzerindeki haciz şikâyet yoluyla kaldırtılabilir." },
      { question: "Borçlu mal beyanında bulunmazsa ne olur?", answer: "Süresinde mal beyanında bulunmayan borçlu hakkında alacaklının şikâyeti üzerine icra mahkemesi disiplin hapsine karar verebilir. Gerçeğe aykırı beyan ise ayrıca cezai sorumluluk doğurabilir; mal beyanı, hacze elverişli varlıkların belirlenmesini kolaylaştırdığı için takibin seyrinde önem taşır." },
    ],
    howToTitle: "Pendik'te Alacak Takibi Hangi Sırayla İlerler?",
    howToSteps: [
      { name: "Dayanak Belgelerin Toplanması", text: "Fatura, irsaliye, sözleşme veya mahkeme ilamı gibi belgeler dosya halinde derlenir." },
      { name: "Takip Talebinin Verilmesi", text: "Yetkili icra dairesine talep sunulur ve takip dosyası numaralandırılır." },
      { name: "Ödeme Emrinin Tebliği", text: "Borçluya ödeme emri gönderilir; yedi günlük itiraz süresi tebliğle başlar." },
      { name: "Haciz ve Satış", text: "İtiraz gelmezse veya giderilirse haciz konulur, mallar satılarak alacak tahsil edilir." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "pendik-idare-avukati",
    name: "Pendik İdare Avukatı",
    heroTitle: "Pendik İdare Avukatı",
    heroSubtitle:
      "Sabiha Gökçen Havalimanı çevresinde uçuş emniyeti nedeniyle getirilen yapı yüksekliği sınırlamaları, Kurtköy'deki ruhsat ret işlemleri ve belediye yaptırımları idari yargıda dava konusu edilebilir; bu davaların görüldüğü yer İstanbul idare mahkemeleridir.",
    metaTitle: "Pendik İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Pendik'te idari işlemlerin iptali, imar uygulamalarına itiraz ve tazminat davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "İdari işlemin iptali ve tam yargı davalarında Pendik'teki başvurucular için Av. Furkan Arıkan çalışır; 2019 MEF Üniversitesi Hukuk mezunudur ve İstanbul Barosu'nda 72621 numarayla kayıtlıdır. Büro Beşiktaş/Sinanpaşa'dadır.",
    highlightCards: [
      { title: "Yükseklik Sınırlaması Kararları", description: "Havalimanı çevresinde irtifak ve yapı yüksekliğini sınırlayan işlemlere karşı iptal davası." },
      { title: "Ruhsat Ret İşlemleri", description: "Kurtköy'deki yapılaşma sürecinde reddedilen ruhsat ve yapı kullanma işlemleri." },
      { title: "Plan Değişikliği İtirazları", description: "İmar planlarında yapılan değişikliklere karşı dava." },
      { title: "Belediye Yaptırımları", description: "İdari para cezası, mühür ve yıkım kararlarına karşı yargı yolu." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Havalimanı çevresindeki irtifak ve yükseklik sınırlaması işlemlerine karşı iptal ve yürütmeyi durdurma talepleri",
      "Kurtköy'deki yapı ruhsatı reddi ve ruhsat iptali işlemlerine karşı dava",
      "İmar planı ve plan tadilatlarının hukuka uygunluk denetimi",
      "Belediyenin idari para cezası, mühürleme ve yıkım kararlarına itiraz",
      "İdarenin eylem veya işlemi nedeniyle doğan zarar için tam yargı davası",
      "Memur ve kamu görevlilerinin disiplin, atama ve özlük haklarına ilişkin davalar",
    ],
    localParagraphs: [
      "Pendik'in idari dosyaları iki eksende toplanır. Birincisi, Kurtköy'deki Sabiha Gökçen Havalimanı çevresinde uçuş güvenliği için konan yükseklik ve irtifak sınırları; ikincisi, hızla yapılaşan mahallelerde verilen veya reddedilen ruhsatlardır. Her iki grupta da işlemin dayandığı plan ve mevzuat tek tek incelenir.",
      "Davalara İstanbul idare mahkemelerinde bakılır. İYUK m.7 uyarınca süre kural olarak işlemin tebliğinden veya ilanından başlayarak 60 gündür; bu süre geçirilirse işlem kesinleşir ve iptal talebi esastan incelenmez. Bu nedenle ilk iş, tebliğ ya da ilan tarihinin belgeyle saptanmasıdır.",
    ],
    faqs: [
      { question: "Havalimanı çevresindeki yükseklik sınırlaması kararına karşı dava açılabilir mi?", answer: "Evet. Karar tebliğ edilmişse tebliğden, ilan edilmişse ilandan itibaren 60 gün içinde idare mahkemesinde iptal davası açılabilir. Dilekçede kararın dayandığı plan veya mevzuat, parselin konumu ve hukuka aykırılık iddiası gösterilir; istenirse yürütmenin durdurulması da talep edilir." },
      { question: "Kurtköy'de ruhsat başvurusu reddedilirse ne yapılır?", answer: "Ret işleminin tebliğinden sonra 60 gün içinde idare mahkemesinde iptal davası açılabilir. Bundan önce retin gerekçesi okunur; sebep eksik belgeden ibaretse eksikler tamamlanarak yeniden başvuru da mümkündür. Hangi yolun uygun olduğu, retin esasa mı yoksa şekle mi dayandığına göre belirlenir." },
      { question: "İmar planı değişikliği ilan edilmişse dava süresi ne zaman başlar?", answer: "İlan yoluyla duyurulan planlarda süre ilan tarihini esas alarak, ayrıca tebliğ edilen işlemlerde tebliğ tarihinden itibaren işler ve 60 gündür (İYUK m.7). Başlangıç gününü belirlemek için ilan evrakı ve askı tutanağı ilgili belediyeden istenir. Belge sunulamazsa süre hesabı tartışma konusu olabilir." },
      { question: "Belediyenin kestiği idari para cezasına karşı hangi yola başvurulur?", answer: "Cezanın dayandığı kanun başvuru yolunu belirler; imar kaynaklı işlemlerde kural olarak tebliğden itibaren 60 gün içinde idare mahkemesinde dava açılır. Önce ceza tutanağı ve tebligattaki başvuru yolu bilgisi incelenir, çünkü süre ve mahkeme bu belgelerden anlaşılır." },
      { question: "İdarenin işlemi veya eylemi nedeniyle zarar gören ne yapabilir?", answer: "Tam yargı davası açarak zararın tazminini isteyebilir. Zarar bir idari işlemden doğmuşsa 60 günlük dava süresi, eylemden doğmuşsa idareye ön başvuru koşulu dikkate alınır; zarar kalemleri belge ve bilirkişi hesabıyla ortaya konur. Başvuru yolunun yanlış seçilmesi süre kaybına yol açabilir." },
    ],
    howToTitle: "Pendik'te İdare Mahkemesine Başvuru Hangi Adımlarla Yapılır?",
    howToSteps: [
      { name: "İşlemin Belgelenmesi", text: "Dava konusu karar, tebliğ zarfı veya ilan kaydı ve ekleri toplanır." },
      { name: "60 Günlük Sürenin Hesaplanması", text: "Tebliğ ya da ilan tarihinden başlayarak son dava günü belirlenir." },
      { name: "Dilekçe ve Yürütmeyi Durdurma Talebi", text: "Hukuka aykırılık sebepleri yazılır; gerekirse işlemin uygulanması durdurulmak istenir." },
      { name: "Savunma ve Karar", text: "İdare savunma verir, dosya incelenir ve mahkeme kararını açıklar." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: ["idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "pendik-is-hukuku-avukati",
    name: "Pendik İş Hukuku Avukatı",
    heroTitle: "Pendik İş Hukuku Avukatı",
    heroSubtitle:
      "Havalimanı hizmet sektörü, Kurtköy lojistiği ve Kaynarca sanayi siteleri çalışanlarının kıdem-ihbar tazminatı, işe iade ve fazla mesai taleplerinde hukuki yardım verilir; iş mahkemesi dosyaları, Pendik Adliyesi'nin 2013'te kapanmasıyla Kartal'daki Anadolu Adliyesi'ne taşınmıştır.",
    metaTitle: "Pendik İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Pendik'te kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Pendik'te çalışan işçiler ile işverenlerin iş sözleşmesi ihtilaflarına Av. Furkan Arıkan bakar; 2019 MEF Üniversitesi Hukuk mezunudur ve İstanbul Barosu'nda 72621 numarayla kayıtlıdır. Büro Pendik'te değil, Beşiktaş/Sinanpaşa'dadır.",
    highlightCards: [
      { title: "Fesih ve Tazminat", description: "Kıdem ve ihbar tazminatı haklarının fesih biçimine göre değerlendirilmesi." },
      { title: "İşe İade Başvurusu", description: "İş güvencesi kapsamındaki işçi için arabuluculuk ve dava süreci." },
      { title: "Vardiya ve Fazla Mesai", description: "Puantaj, servis ve giriş-çıkış kayıtlarıyla çalışma süresinin ispatı." },
      { title: "Havalimanı ve Sanayi Çalışanları", description: "Kurtköy lojistiği, Sabiha Gökçen çevresi ve Kaynarca sanayi siteleri personeli." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kıdem ve ihbar tazminatı alacaklarının hesaplanması ve talep edilmesi",
      "İşe iade için arabulucuya başvuru ve anlaşma olmazsa dava açılması",
      "Vardiyalı çalışanların fazla mesai, hafta tatili ve yıllık izin ücreti alacakları",
      "Havalimanı çevresi, lojistik ve sanayi sitesi işverenlerinin işçilik uyuşmazlıklarında temsili",
      "İş sözleşmesi, ibraname ve istifa dilekçelerinin hukuki incelemesi",
      "İş kazası ve meslek hastalığından kaynaklanan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Pendik'te çalışma hayatı iki ayrı düzene dayanır: Sabiha Gökçen Havalimanı ve Kurtköy lojistik tesislerinde dönüşümlü vardiyalar, Kaynarca ve Sanayi Mahallesi'ndeki sanayi sitelerinde ise atölye ve üretim mesaisi. Vardiya çizelgeleri, fazla mesainin ve fesih gerekçesinin ispatında belirleyici olur.",
      "İşe iade ve işçilik alacağı davaları önce zorunlu arabuluculuktan geçer; anlaşma çıkmazsa Kartal'daki İstanbul Anadolu Adliyesi'nin iş mahkemesinde görülür. İş K. m.18 uyarınca iş güvencesinden yararlanma şartları (en az otuz işçi, altı ay kıdem) dosyanın başında kontrol edilir.",
    ],
    faqs: [
      { question: "Sabiha Gökçen çevresinde çalışan biri işe iade davası açabilir mi?", answer: "İş güvencesi şartları varsa açabilir: işyerinde en az otuz işçi çalışmalı, işçinin en az altı aylık kıdemi bulunmalı ve sözleşme belirsiz süreli olmalıdır (İş K. m.18). Fesih bildiriminden itibaren bir ay içinde arabulucuya başvurulur; anlaşma olmazsa son tutanaktan itibaren iki hafta içinde dava açılır." },
      { question: "Gece vardiyasında çalışılan fazla mesai nasıl ispatlanır?", answer: "Puantaj ve giriş-çıkış kayıtları, vardiya çizelgesi, servis listeleri ve tanık anlatımıyla ispatlanır; bu kayıtlar işverende bulunduğundan mahkemece istenebilir. Haftalık 45 saati aşan çalışma fazla mesai sayılır. Ücret bordrosundaki ödemeler de hesapta dikkate alınır. Kayıtlara itiraz halinde bilirkişi hesabı yapılır." },
      { question: "Kıdem tazminatına hak kazanmak için ne kadar çalışmak gerekir?", answer: "Aynı işverende en az bir yıl çalışmış olmak gerekir; ayrıca fesih biçimi de önemlidir. İşveren haklı sebep olmadan işten çıkarırsa veya işçi haklı sebeple ayrılırsa kıdem tazminatı doğar, haklı sebebi olmayan istifada ise doğmaz. Hesaplama giydirilmiş ücret üzerinden yapılır." },
      { question: "İşten ayrılırken kullanılmayan yıllık izin ücreti ödenmezse ne yapılır?", answer: "Kullanılmayan yıllık izin süreleri, sözleşme sona erdiğinde son ücret üzerinden işçiye ödenmelidir. Ödenmemişse bu alacak diğer işçilik alacaklarıyla birlikte arabuluculuk sonrasında dava edilebilir. İşçilik alacaklarında zamanaşımı süresi genel olarak beş yıldır. Ücret, ayrılış tarihindeki son brüt ücret üzerinden hesaplanır." },
      { question: "İbraname imzalandıysa işçilik alacağı istenebilir mi?", answer: "İbraname, ödenen kalemler açıkça yazılmış ve ödeme banka kaydıyla desteklenmişse bağlayıcı olabilir; ancak hesaplanmamış alacakları kapsayan genel ibra cümleleri tek başına yeterli sayılmaz. Geçerliliği, imza tarihi ve içeriği üzerinden değerlendirilir; imzalanan her belge dosyaya sunulabilir." },
    ],
    howToTitle: "Pendik'te İşten Çıkarılan Çalışanın Başvuru Yolu Nedir?",
    howToSteps: [
      { name: "Fesih Belgesinin İncelenmesi", text: "Fesih bildirimi, gerekçe, bordro ve iş sözleşmesi bir araya getirilir." },
      { name: "Arabulucuya Başvuru", text: "İşe iade talebinde fesih bildiriminden itibaren bir ay içinde arabuluculuk bürosuna başvurulur." },
      { name: "Son Tutanak ve Dava", text: "Anlaşma sağlanamazsa son tutanağın ardından iş mahkemesinde dava açılır." },
      { name: "Kararın Uygulanması", text: "Mahkeme kararı veya arabuluculuk anlaşmasına göre ödeme ve işe başlatma işlemleri yürütülür." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "giydirilmis-ucret-kavrami", "ise-iade-davasi"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "pendik-kira-tahliye-avukati",
    name: "Pendik Kira ve Tahliye Avukatı",
    heroTitle: "Pendik Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Güzelyalı ve Yenişehir'in sahile bakan daireleri, Sabiha Gökçen'e yakın Kurtköy konutları ve Kaynarca'daki iş yerleri için tahliye, kira artışı ve bedel tespiti uyuşmazlıklarında yardım verilir; sulh hukuk davaları, Pendik Adliyesi kapandığı için Kartal'daki Anadolu Adliyesi'nde görülür.",
    metaTitle: "Pendik Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Pendik'te kiracı tahliyesi, kiralama sözleşmesi uyuşmazlıkları ve kira bedeli tespitinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Pendik'te kiraya veren ve kiracıların sözleşme ile tahliye sorunlarında Av. Furkan Arıkan hukuki yardım sağlar; 2019 MEF Üniversitesi Hukuk mezunudur ve İstanbul Barosu'nda 72621 numarayla kayıtlıdır. Büro Beşiktaş/Sinanpaşa'dadır.",
    highlightCards: [
      { title: "Tahliye Sebepleri", description: "İhtiyaç, kira borcu temerrüdü ve yazılı tahliye taahhüdüne dayanan yollar." },
      { title: "Kira Artışı Denetimi", description: "TBK m.344 sınırına göre yenilenen dönemdeki artış oranının kontrolü." },
      { title: "Kira Tespit Davası", description: "Sözleşme bedelinin emsal ve bilirkişi incelemesiyle yeniden belirlenmesi." },
      { title: "İş Yeri Kiraları", description: "Kaynarca ve Sanayi Mahallesi'ndeki dükkân, depo ve atölye sözleşmeleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Konut ve çatılı iş yeri kira sözleşmelerinin hazırlanması ve kontrolü",
      "Kira borcu nedeniyle ihtar, takip ve tahliye davası açılması",
      "Kiraya verenin kendi ihtiyacına dayanan tahliye davalarında dosya hazırlığı",
      "Yazılı tahliye taahhüdüne dayalı icra yoluyla tahliye işlemleri",
      "Artış oranına ve rayiç bedele ilişkin kira tespit ve uyarlama davaları",
      "Haksız fesih veya tahliyede gecikmeden doğan zarar ve tazminat talepleri",
    ],
    localParagraphs: [
      "Pendik'te kira piyasası bölgeye göre farklılaşır: Sabiha Gökçen Havalimanı'na yakınlığıyla Kurtköy'de konut kiraları, Güzelyalı ve Yenişehir'de sahil dairelerinin kiralanması, Kaynarca ve Sanayi Mahallesi'nde ise dükkân ile depo kiraları görülür. Süre, bedel ve depozito şartlarının yazılı netleştirilmesi sonradan çıkacak tartışmaları azaltır.",
      "Kira davaları, Pendik Adliyesi'nin 2013'te kapanmasının ardından Kartal'daki İstanbul Anadolu Adliyesi'nin sulh hukuk mahkemelerinde görülür. Tahliye ve tespit davalarında sözleşme, banka dekontları ve ihtarname asıl delilleri oluşturur; geçerli taahhütname varsa icra dairesine doğrudan başvurulabilir.",
    ],
    faqs: [
      { question: "Kurtköy'de kiracı kira bedelini ödemezse ne zaman tahliye istenir?", answer: "Konut ve çatılı iş yeri kirasında ödenmeyen bedel için yazılı ihtar çekilir ve kiracıya otuz gün süre verilir. Bu süre içinde ödeme yapılmazsa sözleşme feshedilebilir; ardından tahliye davası açılır veya icra yoluyla tahliye talep edilir." },
      { question: "Kira artış oranı en çok ne kadar olabilir?", answer: "Konut ve çatılı iş yerlerinde yenilenen kira dönemindeki artış, önceki on iki aylık TÜFE ortalamasını geçemez (TBK m.344). Sözleşmede daha yüksek oran yazsa da sınırı aşan kısım geçersizdir; fazla ödenen tutarın iadesi ayrıca talep edilebilir." },
      { question: "Ev sahibi kendi ihtiyacı için tahliye isteyebilir mi?", answer: "Evet. Kiraya veren, kendisi, eşi, altsoyu, üstsoyu veya bakmakla yükümlü olduğu kişiler için konutu gerçek ve samimi bir ihtiyaç nedeniyle isteyebilir. İhtiyacın gerçekliği ispatlanmalı, dava da kanunda öngörülen süreler içinde açılmalıdır; bu süreler sözleşmenin türüne göre değişir." },
      { question: "Kira tespit davası ne zaman açılır?", answer: "Sözleşme bedeli emsal kiraların belirgin biçimde altında kalıyorsa kira tespit davası açılabilir. Mahkeme benzer taşınmazların bedelini ve konumu bilirkişiyle inceler; beş yıllık sürenin aşıldığı hâllerde hâkim yeni bedeli hakkaniyete göre belirler (TBK m.344). Dosyaya mevcut sözleşme ve emsal kira belgeleri eklenir." },
      { question: "Taahhütname ile tahliye için mahkemeye gerek var mı?", answer: "Hayır. Kira başladıktan sonra, boşaltma tarihi açıkça yazılarak verilmiş ve kiracının imzasını taşıyan taahhüt, icra dairesine sunularak tahliye talep edilebilir. Kira sözleşmesiyle birlikte baştan imzalatılan taahhütler genellikle geçerli kabul edilmez. Taahhüdün geçerliliği icra mahkemesinde ayrıca tartışılabilir." },
    ],
    howToTitle: "Pendik'te Kira Uyuşmazlığı Tahliyeyle Nasıl Sonuçlanır?",
    howToSteps: [
      { name: "Tahliye Dayanağının Seçilmesi", text: "Ödenmeyen kira, ihtiyaç ya da taahhüt gibi hukuki sebep belirlenir." },
      { name: "İhtar ve Belge Dosyası", text: "Sözleşme, banka dekontları ve ihtarname dosyada toplanır." },
      { name: "Mahkeme veya İcra Yolu", text: "Sulh hukuk mahkemesine dava ya da icra dairesine tahliye talebi sunulur." },
      { name: "Taşınmazın Teslim Alınması", text: "Karar veya tahliye emri uygulanır, taşınmaz tutanakla teslim alınır." },
    ],
    crosslinkLabel: "Kira ve Tahliye Avukatı",
    relatedPostSlugs: ["kiracinin-tahliye-sureci", "kira-bedeli-tespit-ve-uyarlama-davasi"],
  },

  // ─────────────────────────── VERGİ ───────────────────────────
  {
    slug: "vergi",
    urlSlug: "pendik-vergi-avukati",
    name: "Pendik Vergi Avukatı",
    heroTitle: "Pendik Vergi Avukatı",
    heroSubtitle:
      "Vergi ve ceza ihbarnamelerine karşı dava süresinin takibi, uzlaşma görüşmeleri ve vergi mahkemesi başvurularında yardım verilir; Pendik Vergi Dairesi'ne bağlı mükelleflerin davaları İstanbul vergi mahkemelerinde görülür.",
    metaTitle: "Pendik Vergi Avukatı | Vergi Cezası ve Uzlaşma",
    metaDescription:
      "Pendik'te vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Pendik mükelleflerinin tarhiyat, vergi ziyaı ve usulsüzlük cezası dosyalarında ve uzlaşma görüşmelerinde Av. Furkan Arıkan hukuki yardım sağlar; 2019 MEF Üniversitesi Hukuk mezunudur ve İstanbul Barosu'nda 72621 numarayla kayıtlıdır. Büro Beşiktaş/Sinanpaşa'dadır.",
    highlightCards: [
      { title: "Dava Süresinin Takibi", description: "İhbarnamenin tebliğ gününden başlayan 30 günlük sürenin kaçırılmaması." },
      { title: "Vergi Ziyaı Cezası", description: "Ziyaı cezasının kesildiği incelemelerde gerekçe ve hesabın kontrolü." },
      { title: "Uzlaşma Görüşmesi", description: "Uzlaşma tutanağı öncesinde tarhiyatın dayanağının ve tutarın görüşülmesi." },
      { title: "Sanayi ve Lojistik Mükellefleri", description: "Kaynarca, Kurtköy ve havalimanı çevresindeki işletmelerin inceleme dosyaları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı vergi mahkemesinde iptal davası",
      "Uzlaşma talebinin hazırlanması ve uzlaşma toplantısında temsil",
      "Vergi ziyaı ve usulsüzlük cezalarının hukuka uygunluk denetimi",
      "Ödeme emri ve haciz işlemlerine karşı dava açılması",
      "Sanayi sitesi ile lojistik şirketlerinin vergi incelemesi sırasında hukuki destek",
      "Kira geliri beyanındaki eksiklikten doğan tarhiyatlara karşı savunma",
    ],
    localParagraphs: [
      "Pendik'te ikamet eden veya iş yeri bulunan mükelleflerin vergi işlemleri Pendik Vergi Dairesi Müdürlüğü üzerinden yürür. Kaynarca ve Sanayi Mahallesi'ndeki sanayi sitelerinde imalat ve ticaret yapan işletmeler ile Sabiha Gökçen Havalimanı çevresinde faaliyet gösteren firmalar, vergi incelemesiyle en çok bu bağlamda karşılaşır.",
      "İhbarnamenin tebliğinden başlayarak 30 gün içinde dava açılmazsa tarhiyat kesinleşir. Uzlaşma başvurusu yapılsa da dava imkânı kapanmaz, görüşme sonuçsuz kalırsa kalan süre içinde dava açılabilir; davalar İstanbul vergi mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Pendik'te iş yeri olan mükellef hangi vergi dairesi üzerinden işlem yapar?", answer: "Pendik mükellefleri Pendik Vergi Dairesi Müdürlüğü üzerinden işlem yapar. Bağlı olunan daire vergi levhasında ve tebligatlarda görünür; ihbarnameler bu daireden çıkar, dava ise İstanbul vergi mahkemesinde açılır. Mükellef numarası, vergi kimlik numarası ve tebliğ tarihi yazışmalarda belirtilmelidir." },
      { question: "İhbarname tebliğ edildiyse dava için kaç gün vardır?", answer: "Vergi ve ceza ihbarnamesine karşı dava açma süresi tebliğ tarihinden itibaren 30 gündür. Son gün resmî tatile denk gelirse süre ilk iş gününe uzar. Süre kaçırılırsa tarhiyat kesinleşir; bu yüzden tebliğ zarfı ve tebliğ tarihi saklanmalıdır." },
      { question: "Uzlaşma talep etmek dava açma hakkını etkiler mi?", answer: "Uzlaşma istemek dava açma imkânını sona erdirmez. Görüşmeden sonuç çıkmazsa veya toplantıya gelinmezse kalan süre içinde vergi mahkemesinde dava açılabilir. Uzlaşma tutanağı imzalanırsa vergi ve ceza kesinleşir; bu nedenle imzadan önce tutar ve dayanak kontrol edilmelidir." },
      { question: "Vergi ziyaı cezası ile usulsüzlük cezası arasındaki fark nedir?", answer: "Vergi ziyaı cezası, verginin eksik veya hiç ödenmesi sonucunda vergi aslına bağlı olarak kesilir. Usulsüzlük cezası ise fatura, defter ve belge düzenine uyulmaması gibi şekle ilişkin ihlallerde uygulanır. İkisine karşı da ihbarnamenin tebliğinden itibaren dava açılabilir." },
      { question: "Kira geliri beyan edilmediği için gelen tarhiyata karşı ne yapılır?", answer: "Re'sen veya ikmalen tarh edilen vergi ve kesilen cezaya karşı tebliğden itibaren 30 gün içinde vergi mahkemesinde dava açılabilir. Dilekçede kira sözleşmesi, tahsilat belgeleri ve varsa istisna şartları gösterilir; beyan eksikliğinin bulunmadığı belgelerle ortaya konur." },
    ],
    howToTitle: "Pendik'te Vergi İhbarnamesine Karşı Hangi Adımlar Atılır?",
    howToSteps: [
      { name: "Tebliğ Tarihinin Tespiti", text: "İhbarnamenin tebliğ gününden başlayan 30 günlük süre hesaplanır." },
      { name: "Dayanağın İncelenmesi", text: "Tarhiyatın gerekçesi, matrah hesabı ve ceza türü belgelerle kontrol edilir." },
      { name: "Uzlaşma veya Dava", text: "Duruma göre uzlaşma talep edilir ya da vergi mahkemesine dilekçe verilir." },
      { name: "Karar ve Ödeme", text: "Mahkeme kararı ya da uzlaşma tutanağı çerçevesinde vergi ve cezanın akıbeti belirlenir." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: ["vergi-ihbarnamesine-itiraz-ve-uzlasma"],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "pendik-borclar-hukuku-avukati",
    name: "Pendik Borçlar Hukuku Avukatı",
    heroTitle: "Pendik Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Tedarik, nakliye ve hizmet sözleşmelerinden doğan alacak ve tazminat ihtilaflarında Pendik'teki firmalar ile bireyler için ihtar ve dava hazırlığı yapılır; asliye hukuk veya asliye ticaret davaları Kartal'daki Anadolu Adliyesi'nde yürür.",
    metaTitle: "Pendik Borçlar Hukuku Avukatı | Alacak Davası",
    metaDescription:
      "Pendik'te ticari sözleşmeler, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Sözleşmeden doğan alacak ve tazminat ihtilaflarında Pendik'teki firma ve bireylerin dosyalarını Av. Furkan Arıkan yürütür; 2019 MEF Üniversitesi Hukuk mezunudur ve İstanbul Barosu'nda 72621 numarayla kayıtlıdır. Büro Beşiktaş/Sinanpaşa'dadır.",
    highlightCards: [
      { title: "Tedarik ve Nakliye Sözleşmeleri", description: "Sanayi sitesi üreticileri ile lojistik firmaları arasındaki teslimat ve ödeme ihtilafları." },
      { title: "Alacak Davası", description: "Takibe elverişli olmayan veya itiraz edilen alacakların mahkemede istenmesi." },
      { title: "İş Yeri Kira Uyuşmazlıkları", description: "Kaynarca ve havalimanı çevresindeki iş yeri sözleşmelerinden doğan borç ihtilafları." },
      { title: "Sözleşmeye Aykırılık", description: "Gecikme, eksik ifa ve ayıp nedeniyle zarar ve tazminat talepleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Teslimat gecikmesi, eksik ifa ve ayıplı mal nedeniyle sözleşmeden dönme ve tazminat davaları",
      "İtiraz edilen veya takibe uygun olmayan alacaklar için alacak davası",
      "Cezai şart, gecikme faizi ve fesih tazminatı hesapları",
      "İhtarname ve arabuluculuk başvurusunun hazırlanması",
      "Ticari sözleşme, kefalet ve ödeme taahhüdü metinlerinin incelenmesi",
      "Haksız ödeme ve sebepsiz zenginleşmeden doğan iade talepleri",
    ],
    localParagraphs: [
      "Pendik'in ekonomik yapısı sözleşme ihtilaflarının niteliğini belirler: Kaynarca ile Sanayi Mahallesi'ndeki sanayi siteleri ve Kurtköy'deki lojistik ile havacılık yan hizmetleri firmaları, günlük ticarette tedarik, nakliye ve bakım sözleşmeleri yapar. Teslim tutanakları, irsaliyeler ve yazışmalar bu dosyalarda ispatın ana kaynağıdır.",
      "Asliye hukuk ve asliye ticaret davaları, Pendik Adliyesi'nin 2013'te kapandığı tarihten bu yana Kartal'daki İstanbul Anadolu Adliyesi'nde yürütülür. Konusu para alacağı veya tazminat olan ticari davalarda dava açmadan önce arabulucuya başvurmak zorunludur; bu aşama atlanırsa dava usulden reddedilir.",
    ],
    faqs: [
      { question: "Teslimatı geciktiren tedarikçiden hangi talepler istenebilir?", answer: "Gecikme halinde önce uygun bir süre verilerek ifa istenir; süre sonunda ifa gelmezse sözleşmeden dönülebilir veya gecikme zararı talep edilebilir. Sözleşmede cezai şart varsa o da istenebilir. Zararın ve gecikmenin ispatı için irsaliye ve yazışmalar saklanmalıdır." },
      { question: "Ticari alacak davasından önce arabuluculuk şart mıdır?", answer: "Konusu belirli bir para alacağı veya tazminat olan ticari davalarda arabulucuya başvurmak dava şartıdır; anlaşma sağlanamazsa son tutanakla dava açılır. Bu şartın aranmadığı uyuşmazlıklarda ise doğrudan dava açılabilir, bu nedenle dava türü başlangıçta doğru belirlenmelidir." },
      { question: "İtiraz edilen alacak ne zaman dava ile istenir?", answer: "Dayanak belge yeterince kesin değilse, borçlu alacağa itiraz ediyorsa veya miktar yargılama gerektiriyorsa alacak davası açılır. Dava, delillerin bilirkişi ve tanıkla incelenmesine imkân verir; takibe itiraz edilmişse itirazın iptali davası da aynı amaca hizmet eder." },
      { question: "Bir alacak ne zaman zamanaşımına uğrar?", answer: "Genel zamanaşımı süresi on yıldır; kira bedeli, işçilik ve ücret gibi bazı alacaklarda beş yıl uygulanır. Zamanaşımı mahkemece kendiliğinden gözetilmez: borçlu def'i ileri sürerse alacak istenemez, ileri sürmezse talep edilebilir. Bu nedenle borcun muaccel olduğu tarihin belgeyle gösterilmesi, süre hesabı için önemlidir." },
      { question: "Yazılı sözleşme olmadan alacak ispat edilebilir mi?", answer: "Sözleşmenin yazılı olması her durumda şart değildir; fatura, irsaliye, banka dekontu ve yazışmalar delil sayılabilir. Ancak ispat kuralları işlemin türüne ve tutarına göre değişir, bu nedenle delillerin hangi yolla sunulacağı dosyanın başında değerlendirilir. Delillerin erken toplanması ispatı kolaylaştırır." },
    ],
    howToTitle: "Pendik'te Sözleşme Alacağı Davası Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "Sözleşme ve Teslim Kayıtlarının Toplanması", text: "Sözleşme, irsaliye, fatura ve yazışmalarla borcun kaynağı gösterilir." },
      { name: "İhtar ve Arabuluculuk", text: "Borçluya ihtarname gönderilir; ticari davada arabuluculuk başvurusu yapılır." },
      { name: "Davanın Açılması", text: "Görevli asliye hukuk veya ticaret mahkemesine dilekçe verilir." },
      { name: "İcraya Konulması", text: "Karar kesinleşince borçluya karşı icra takibiyle tahsilat sağlanır." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];

export const pendikServices: PseoService[] = [...pendikBaseServices, pendikMiras];
