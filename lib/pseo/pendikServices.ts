import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const pendikServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "pendik-avukat",
    name: "Pendik Avukat",
    heroTitle: "Pendik Avukat",
    heroSubtitle:
      "Sabiha Gökçen Havalimanı'nın konumlandığı Kurtköy'den sahil şeridindeki Güzelyalı'ya, Marmaray ve YHT hattının kesiştiği Pendik istasyon çevresinden sanayi sitelerinin yoğunlaştığı Kurtköy'e uzanan Pendik'te ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında avukat Furkan Arıkan danışmanlık ve dava takibi hizmeti sunmaktadır; İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olan Arıkan'ın dosyaları, ilçenin kendi adliyesi 2013'te kapatıldığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Pendik Avukat",
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
      "Anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; aile mahkemesi davaları, ilçenin kendi adliyesi 2013'te kapatıldığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Pendik Boşanma Avukatı",
    metaDescription:
      "Pendik'te anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Pendik'teki ailelere yönelik boşanma, velayet ve nafaka süreçlerinde temsil sağlayan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Mal Rejimi Tasfiyesi", description: "Sahil şeridindeki konut ve site nitelikli taşınmazların değerleme süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Sahil şeridi ve Kurtköy çevresindeki konutların dahil olduğu mal rejimi tasfiyesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Güzelyalı ve Yenişehir gibi sahil mahalleleriyle Kurtköy çevresindeki yeni konut projelerinin bir arada bulunduğu Pendik'te, boşanma sürecindeki mal rejimi tasfiyelerinde bu bölgelerdeki taşınmazların güncel piyasa değeriyle paylaşımı öne çıkan konulardandır.",
      "Boşanma, velayet ve nafaka davalarına, Pendik'in kendi adliyesi 2013'te kapatıldığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki aile mahkemelerinde bakılır; anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Pendik'in kendi adliyesi 2013'te kapatıldığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki aile mahkemesine başvurulur." },
      { question: "Velayet kararında çocuğun yaşı etkili midir?", answer: "Evet, küçük yaştaki çocuklarda bakım süreklilığı, olgunlaşmış çocuklarda ise kendi beyanı ayrıca değerlendirmeye alınır." },
      { question: "Nafaka hesaplanırken hangi belgeler istenir?", answer: "Tarafların gelir belgeleri, banka kayıtları ve ihtiyaç kalemlerini gösteren belgeler dosyaya sunulur." },
      { question: "Sahil şeridindeki bir konut mal paylaşımını nasıl etkiler?", answer: "Taşınmazın güncel rayiç değeri ve tapu kaydı, bilirkişi incelemesiyle değerlemeye esas alınır." },
      { question: "Çekişmeli bir dava sonradan anlaşmalıya dönüştürülebilir mi?", answer: "Evet, yargılama sırasında taraflar mutabık kalırsa protokol sunularak sürecin anlaşmalıya dönüştürülmesi mümkündür." },
    ],
    howToTitle: "Pendik'te Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "Durum Değerlendirmesi", text: "Anlaşmalı mı çekişmeli mi bir yol izleneceği, velayet ve mal rejimi talepleriyle birlikte belirlenir." },
      { name: "Belge ve Protokol Hazırlığı", text: "Duruma göre dava dilekçesi veya protokol metni hazırlanır." },
      { name: "Aile Mahkemesine Başvuru", text: "Dosya yetkili aile mahkemesine sunulur." },
      { name: "Duruşma ve Karar", text: "Duruşma sürecinin ardından mahkeme kararını açıklar." },
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
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; ilçenin kendi adliyesi 2013'te kapatıldığından ceza davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Pendik Ceza Avukatı",
    metaDescription:
      "Pendik'te soruşturma, kovuşturma, tutukluluğa itiraz ve ceza yargılamasının tüm aşamalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, ceza yargılamasının soruşturma ve kovuşturma aşamalarında Pendik'teki şüpheli ve sanıklara müdafilik hizmeti vermektedir.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Havalimanı Bölgesi Suçları", description: "Sabiha Gökçen Havalimanı ve çevresindeki gümrük ve kaçakçılık kaynaklı iddialarda savunma." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Havalimanı çevresindeki gümrük ve kaçakçılık kaynaklı iddialarda savunma",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "Sabiha Gökçen Havalimanı'nın bulunduğu Kurtköy ile ilçe genelindeki sanayi sitelerinin yoğunlaştığı Pendik'te, havalimanı çevresindeki gümrük mevzuatına aykırılık iddiaları ve sanayi bölgesindeki iş yerlerinde yaşanan hırsızlık ile güveni kötüye kullanma iddiaları sık karşılaşılan ceza dosyaları arasındadır.",
      "İlçenin kendi adliyesi 2013'te kapatıldığından Pendik'teki ceza soruşturma ve kovuşturmaları Kartal'daki İstanbul Anadolu Adliyesi'nde yürütülür; gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar.",
    ],
    faqs: [
      { question: "Pendik'te bir ceza davası hangi adliyede görülür?", answer: "İlçenin kendi adliyesi 2013'te kapatıldığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir ancak müdafi bulundurmak önerilir." },
      { question: "Havalimanı çevresinde bir gümrük iddiasında ne yapılmalı?", answer: "Delillerin toplanması ve savunmanın hazırlanması için vakit kaybetmeden hukuki destek alınması önerilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, sulh ceza hakimliğine itiraz edilebilir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Yargılamaya kaldığı yerden devam edilir." },
    ],
    howToTitle: "Pendik'te Ceza Yargılaması Nasıl İlerler?",
    howToSteps: [
      { name: "Olay Bildirimi", text: "Şikayet, ihbar veya resen harekete geçilir." },
      { name: "Soruşturma Aşaması", text: "Deliller toplanır, ifadeler alınır." },
      { name: "Dava Açılması", text: "İddianamenin kabulüyle kovuşturma başlar." },
      { name: "Temyiz/İstinaf", text: "Karara karşı üst yargı yoluna gidilebilir." },
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
      "Sahil şeridindeki site projeleri, Kurtköy çevresindeki yeni konut ve sanayi sitesi taşınmazlarına ilişkin kat mülkiyeti, tapu ve kira uyuşmazlıklarında hukuki destek sağlanır; davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Pendik Gayrimenkul Avukatı",
    metaDescription:
      "Pendik'te kat mülkiyeti, tapu iptali, kira uyuşmazlıkları ve sanayi sitesi taşınmazlarına ilişkin gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Avukat Furkan Arıkan (İstanbul Barosu, sicil no: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019 mezunu), Pendik'teki tapu, kat mülkiyeti ve kira uyuşmazlıklarında danışmanlık sağlar.",
    highlightCards: [
      { title: "Kat Mülkiyeti Uyuşmazlıkları", description: "Site yönetimi, ortak gider ve karar uyuşmazlıklarının çözümü." },
      { title: "Sanayi Sitesi Taşınmazları", description: "Kaynarca ve Sanayi Mahallesi çevresindeki iş yeri kiralamaları ve satışları." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Kentsel Dönüşüm", description: "Riskli yapı tespiti ve dönüşüm süreçlerinde hak sahipliği takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kat mülkiyeti ve site yönetimi uyuşmazlıklarına ilişkin danışmanlık",
      "Sanayi sitesi ve iş yeri niteliğindeki taşınmazların kira sözleşmelerinin hazırlanması",
      "Tapu iptali ve tescil davalarının açılması",
      "Kentsel dönüşüm kapsamındaki hak sahipliği ve değer tespiti süreçleri",
      "Kira bedeli tespiti ve uyarlama davaları",
      "Taşınmaz satış vaadi sözleşmelerinin hukuki incelemesi",
    ],
    localParagraphs: [
      "Sahil şeridi boyunca yükselen site ve rezidans projeleri ile Kurtköy çevresinde havalimanına yakınlığı nedeniyle hızla gelişen yeni konut bölgelerinin bir arada bulunduğu Pendik'te, kat mülkiyeti ve site yönetimi kaynaklı uyuşmazlıklar sıklıkla gündeme gelmektedir.",
      "Bu tür uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Pendik'in kendi adliyesi 2013'te kapatıldığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    ],
    faqs: [
      { question: "Site yönetimiyle yaşanan bir ortak gider uyuşmazlığında ne yapılabilir?", answer: "Öncelikle yönetim planı ve genel kurul kararları incelenir, gerekirse dava yoluna gidilebilir." },
      { question: "Pendik'te gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi'nde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir." },
      { question: "Sanayi sitesindeki bir iş yeri kira sözleşmesinde nelere dikkat edilmeli?", answer: "Kullanım amacı, kira artış oranı ve tahliye şartlarının açıkça düzenlenmesi önerilir." },
      { question: "Kentsel dönüşümde hak sahibinin onayı şart mı?", answer: "Riskli yapı tespiti sonrası süreç kanunda öngörülen çoğunluk ve usul kurallarına göre ilerler." },
    ],
    howToTitle: "Pendik'te Tapu Uyuşmazlığı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Kayıt İncelemesi", text: "Tapu ve imar durumu belgeleri incelenir." },
      { name: "Uyuşmazlığın Netleştirilmesi", text: "İddia ve dayanak deliller belirlenir." },
      { name: "Dava Açılması", text: "Yetkili mahkemede dava süreci başlatılır." },
      { name: "Sonuçlanma", text: "Karar veya bilirkişi raporu doğrultusunda süreç tamamlanır." },
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
      "Alacak tahsili amacıyla icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır; icra daireleri, ilçenin kendi adliyesi 2013'te kapatıldığından Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir.",
    metaTitle: "Pendik İcra Avukatı",
    metaDescription:
      "Pendik'te icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Pendik'teki alacaklı ve borçlu taraflara icra-iflas hukuku kapsamında danışmanlık veren Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "Sanayi Sitesi Alacakları", description: "Kaynarca ve Kurtköy çevresindeki iş yerleri arası fatura ve sözleşme alacaklarının takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "Sanayi sitesi ve lojistik firmaları arası ticari alacakların icra yoluyla tahsili",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Kaynarca ve Sanayi Mahallesi çevresinde yoğunlaşan sanayi siteleri ile Kurtköy'deki lojistik ve havacılık sektörü firmalarının bulunduğu Pendik'te, ticari ilişkilerden doğan fatura ve sözleşme alacaklarının icra yoluyla tahsili sık başvurulan bir yol olarak öne çıkmaktadır.",
      "Bu takiplere ilişkin uyuşmazlıklar, Pendik'in kendi adliyesi 2013'te kapatıldığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki icra mahkemelerinde görülür; borçlunun Pendik'te yerleşik olduğu takiplerde yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "Lojistik firmaları arası bir fatura uyuşmazlığında icra takibi nasıl başlatılır?", answer: "Fatura, irsaliye ve varsa sözleşme belgeleri bir araya getirilerek yetkili icra dairesinde takip dosyası açılır." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Tebliğden itibaren 7 gündür." },
      { question: "İtiraz üzerine durmuş bir takip nasıl devam ettirilir?", answer: "Alacaklı, itirazın iptali davası açarak veya elinde uygun bir belge varsa itirazın kaldırılmasını istemek suretiyle sürece devam edebilir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir." },
      { question: "Borçlunun mal beyanında bulunmaması ne sonuç doğurur?", answer: "Yasal süre içinde mal beyanında bulunmayan borçlu hakkında icra mahkemesine şikayet yoluyla disiplin hapsi talep edilebilir." },
    ],
    howToTitle: "Pendik'te İcra Takibi Hangi Aşamalardan Oluşur?",
    howToSteps: [
      { name: "Alacağın Belgelendirilmesi", text: "Fatura, sözleşme veya ilam gibi dayanak belgeler bir araya getirilir." },
      { name: "Takip Dosyasının Açılması", text: "Yetkili icra dairesine başvurularak dosya oluşturulur." },
      { name: "Ödeme Emrinin Tebliği", text: "Borçluya yasal süreye tabi ödeme emri gönderilir." },
      { name: "Haciz ve Tahsilat", text: "İtiraz edilmezse veya itiraz giderilirse haciz yoluyla tahsilata geçilir." },
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
      "Sabiha Gökçen Havalimanı çevresindeki irtifak/yükseklik kısıtlaması kararlarından Kurtköy'deki hızlı yapılaşmaya bağlı ruhsat uyuşmazlıklarına kadar geniş bir alanda idari dava desteği sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Pendik İdare Avukatı",
    metaDescription:
      "Pendik'te idari işlemlerin iptali, imar uygulamalarına itiraz ve tazminat davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nin 2019 mezunu olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, idari işlemlerin iptali ve tam yargı davalarında Pendik'teki müvekkillerine danışmanlık sağlamaktadır.",
    highlightCards: [
      { title: "İptal Davası Süreci", description: "Hukuka aykırı idari işlemlere karşı yargı yoluna başvurulması." },
      { title: "Havalimanı Çevresi Kısıtlamaları", description: "Sabiha Gökçen Havalimanı irtifak/yükseklik sınırlaması kararlarına itiraz." },
      { title: "Ruhsat ve İmar İşlemleri", description: "Kurtköy'deki hızlı yapılaşmaya bağlı ruhsat ret işlemlerine dava." },
      { title: "İdari Yaptırımlara İtiraz", description: "Belediye ve diğer kurumların idari para cezalarına karşı dava." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Havalimanı çevresi irtifak/yükseklik kısıtlaması kararlarına karşı idari dava süreçleri",
      "Belediye ruhsat işlemlerine itiraz edilmesi",
      "İmar planı ve plan değişikliği kararlarına karşı iptal davası açılması",
      "İdarenin işlem veya eyleminden kaynaklanan zararlar için tam yargı davası açılması",
      "İdari para cezalarına karşı dava süreçlerinin yürütülmesi",
      "Kamu görevlisi özlük haklarına ilişkin idari uyuşmazlıklar",
    ],
    localParagraphs: [
      "Sabiha Gökçen Havalimanı'nın bulunduğu Kurtköy çevresinde uçuş güvenliği gerekçesiyle uygulanan irtifak/yükseklik kısıtlaması kararları ile ilçenin hızla yapılaşan bölgelerindeki ruhsat işlemleri, Pendik'teki idari uyuşmazlıkların önemli bir bölümünü oluşturmaktadır.",
      "Bu davalara İstanbul idare mahkemelerinde bakılmakta olup dava açma süresi, kural olarak işlemin tebliğ veya ilan edildiği tarihten başlayan 60 gündür; bu süre içinde dava açılmazsa hak düşümü söz konusu olur.",
    ],
    faqs: [
      { question: "Havalimanı çevresindeki bir yükseklik kısıtlaması kararına itiraz edilebilir mi?", answer: "Evet, kararın tebliğ veya ilan edildiği tarihten itibaren 60 gün içinde idare mahkemesinde iptal davası açılabilir." },
      { question: "Kurtköy'de bir ruhsat başvurusu reddedilirse ne yapılabilir?", answer: "Ret işlemine karşı idare mahkemesinde iptal davası açılabilir." },
      { question: "İmar planı değişikliğine ne zaman itiraz edilmeli?", answer: "Planın ilan edildiği veya işlemin tebliğ edildiği tarihten itibaren 60 gün içinde idare mahkemesinde dava açılması gerekir." },
      { question: "Belediyenin kestiği idari para cezasına nasıl itiraz edilir?", answer: "Cezanın tebliğinden itibaren yasal süre içinde idare mahkemesinde dava açılarak itiraz edilebilir." },
      { question: "İdarenin bir işlemi nedeniyle zarara uğrayan ne yapabilir?", answer: "Tam yargı davası açarak uğradığı zararın tazminini talep edebilir." },
    ],
    howToTitle: "Pendik'te İdari Dava Süreci Nasıl Yürütülür?",
    howToSteps: [
      { name: "Ön İnceleme", text: "Dava konusu işlem ile tebliğ veya ilan tarihi tespit edilir." },
      { name: "Süre Hesabı", text: "60 günlük dava açma süresinin başlangıcı belirlenir." },
      { name: "Dilekçenin Hazırlanması", text: "Hukuki dayanaklar ve talepler dilekçeye yazılır." },
      { name: "Mahkeme Süreci", text: "İdare mahkemesi dosyayı inceleyerek kararını verir." },
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
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemesi davaları, ilçenin kendi adliyesi 2013'te kapatıldığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Pendik İş Hukuku Avukatı",
    metaDescription:
      "Pendik'te kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan İstanbul Barosu'nda 72621 sicil numarasıyla kayıtlı olup 2019'da MEF Üniversitesi Hukuk Fakültesi'ni tamamlamıştır; iş hukuku alanında Pendik'teki çalışan ve işverenlere danışmanlık vermektedir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Havalimanı ve Sanayi Sitesi Çalışanları", description: "Sabiha Gökçen Havalimanı ile Kaynarca ve Kurtköy sanayi sitelerinde çalışan personelin hakları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Havalimanı, lojistik ve sanayi sitesi çalışanlarının işçilik alacaklarının tahsili",
      "Fazla mesai ve yıllık izin ücreti gibi diğer işçilik alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Sabiha Gökçen Havalimanı çalışanlarının yanı sıra Kaynarca ve Sanayi Mahallesi çevresindeki sanayi sitelerinde çalışan işçilerin yoğun olduğu Pendik'te, vardiyalı çalışma düzenine bağlı fazla mesai alacakları ve haksız fesih iddiaları sık karşılaşılan uyuşmazlık türleri arasındadır.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları, Pendik'in kendi adliyesi 2013'te kapatıldığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki iş mahkemesinde görülür.",
    ],
    faqs: [
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Çalışma süresi ve son brüt (giydirilmiş) ücret esas alınarak hesaplanır." },
      { question: "Pendik'te iş mahkemesi nerededir?", answer: "İlçenin kendi adliyesi 2013'te kapatıldığından Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir." },
      { question: "Vardiyalı çalışanların fazla mesai hakkı nasıl ispatlanır?", answer: "Puantaj kayıtları, giriş-çıkış kayıtları ve tanık beyanıyla ispat edilebilir." },
      { question: "İşe iade davası açmadan önce arabuluculuğa gitmek zorunlu mu?", answer: "Evet, dava şartı olarak öncelikle arabulucuya başvurulması gerekir." },
    ],
    howToTitle: "Pendik'te İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Fesih Değerlendirmesi", text: "İşten çıkarma gerekçesi ve usulü incelenir." },
      { name: "Arabulucuya Başvuru", text: "Yasal süre içinde arabuluculuk sürecine başlanır." },
      { name: "Dava Süreci", text: "Anlaşma olmazsa iş mahkemesinde dava açılır." },
      { name: "Sonuç", text: "Mahkeme kararı doğrultusunda işlem yapılır." },
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
      "Sahil şeridi ve Kurtköy çevresindeki konutların kiralanması, konut tahliyesi ve kira bedeli tespiti uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemesi davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Pendik Kira ve Tahliye Avukatı",
    metaDescription:
      "Pendik'te kiracı tahliyesi, kiralama sözleşmesi uyuşmazlıkları ve kira bedeli tespitinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kira hukuku kapsamında Pendik'teki kiraya verenlere ve kiracılara danışmanlık veren, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Havalimanı Çevresi Kiralamaları", description: "Kurtköy ve çevresindeki konut ve iş yeri kiralama sözleşmesi uyuşmazlıkları." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sahil şeridi ve Kurtköy çevresindeki konutlara ilişkin kira sözleşmelerinin hazırlanması",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Sabiha Gökçen Havalimanı'na yakınlığı nedeniyle kiralık konut talebinin yüksek seyrettiği Kurtköy ile sahil şeridindeki Güzelyalı ve Yenişehir gibi mahallelerin bulunduğu Pendik'te, kira sözleşmelerinde bedel ve süre şartlarının net belirlenmesi uyuşmazlıkları önlemek açısından önem taşır.",
      "Bu davalara, Pendik'in kendi adliyesi 2013'te kapatıldığından Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki sulh hukuk mahkemesinde bakılır; kira sözleşmesinin yazılı ve eksiksiz olması, uyuşmazlık halinde ispat açısından önem taşır.",
    ],
    faqs: [
      { question: "Havalimanı personeline kiralanan bir konutta tahliye nasıl istenir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir; kiracının mesleği tahliye sebeplerini değiştirmez." },
      { question: "Kurtköy çevresinde bir konutun kira bedeli nasıl güncellenir?", answer: "Sözleşmede belirlenen artış oranı veya yasal sınırlar çerçevesinde güncelleme yapılabilir; uyuşmazlık halinde tespit davası açılabilir." },
      { question: "Sahil şeridindeki yazlık kiralamalarında tahliye süreci farklı mı işler?", answer: "Konut kirası hükümleri uygulanır; sözleşmenin yazlık amaçlı yapılmış olması tahliye usulünü değiştirmez." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
    ],
    howToTitle: "Pendik'te Kiracı Tahliye Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Tahliye Sebebinin Netleştirilmesi", text: "İhtiyaç, temerrüt veya taahhüt gibi hukuki dayanak belirlenir." },
      { name: "İhtarname ve Belgelerin Hazırlanması", text: "Kira sözleşmesi, taahhütname veya ihtarname bir araya getirilir." },
      { name: "Sulh Hukuk Mahkemesi veya İcra Dairesine Başvuru", text: "Duruma göre Kartal'daki İstanbul Anadolu Adliyesi'nde başvuru yapılır." },
      { name: "Kararın İnfazı", text: "Kesinleşen karar veya icra emriyle taşınmazın tahliyesi sağlanır." },
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
      "Vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Pendik Vergi Avukatı",
    metaDescription:
      "Pendik'te vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukat olarak Pendik'teki mükelleflere vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda danışmanlık vermektedir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Sanayi Sitesi Mükellefleri", description: "Kaynarca ve Kurtköy çevresindeki iş yeri sahiplerinin vergi incelemeleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Sanayi sitesi ve lojistik firması mükelleflerinin vergi inceleme süreçlerinde danışmanlık",
      "Gayrimenkul kira gelirlerinin beyanına ilişkin uyuşmazlıklarda destek",
    ],
    localParagraphs: [
      "Pendik mükelleflerinin vergi işlemleri Pendik Vergi Dairesi Müdürlüğü üzerinden yürütülür; bu müdürlük Ertuğrulgazi, Bahçelievler, Doğu ve Kaynarca başta olmak üzere ilçenin çok sayıda mahallesini kapsamaktadır.",
      "Sabiha Gökçen Havalimanı çevresindeki ticari faaliyetler ile sanayi sitelerindeki iş yerlerine ilişkin vergi incelemeleri de sık karşılaşılan konular arasındadır. İhbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "Pendik'te hangi vergi dairesi yetkilidir?", answer: "Pendik mükellefleri Pendik Vergi Dairesi Müdürlüğü üzerinden işlem yapar." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Kira geliri beyan edilmezse ne olur?", answer: "Re'sen veya ikmalen tarhiyat ve buna bağlı ceza uygulanabilir, bu işlemlere karşı dava açılabilir." },
    ],
    howToTitle: "Pendik'te Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "pendik-borclar-hukuku-avukati",
    name: "Pendik Borçlar Hukuku Avukatı",
    heroTitle: "Pendik Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Ticari sözleşme uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; asliye hukuk mahkemesi davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Pendik Borçlar Hukuku Avukatı",
    metaDescription:
      "Pendik'te ticari sözleşmeler, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Sözleşme ve alacak kaynaklı uyuşmazlıklarda Pendik'teki müvekkillerine danışmanlık veren Furkan Arıkan, İstanbul Barosu'na kayıtlı (sicil no: 72621) ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunu bir avukattır.",
    highlightCards: [
      { title: "Ticari Sözleşmeler", description: "Sanayi sitesi ve lojistik firmaları arası tedarik sözleşmelerinden doğan uyuşmazlıklar." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Kira/İş Yeri Sözleşmeleri", description: "Havalimanı çevresindeki iş yeri kiralamalarından doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sanayi sitesi ve lojistik firmaları arası tedarik ve hizmet sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Havalimanı çevresindeki iş yeri kiralamalarından doğan sözleşme uyuşmazlıkları",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Kaynarca ve Sanayi Mahallesi çevresindeki sanayi siteleri ile Sabiha Gökçen Havalimanı'na bağlı lojistik ve hizmet sektörü firmalarının bulunduğu Pendik'te, tedarik ve hizmet sözleşmelerinden doğan alacak ve tazminat uyuşmazlıkları sıkça karşılaşılan dava türleri arasındadır.",
      "Bu davalar, Pendik'in kendi adliyesi 2013'te kapatıldığından Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Lojistik firmasının tedarik sözleşmesini ihlal etmesi halinde ne talep edilebilir?", answer: "Sözleşmeden dönme, ifa veya tazminat gibi hukuki yollara başvurulabilir." },
      { question: "Sanayi sitesindeki bir ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir." },
      { question: "Havalimanı çevresindeki iş yeri kira sözleşmesinin erken feshinde ne olur?", answer: "Sözleşme hükümleri ve kanuni düzenlemeler çerçevesinde tazminat yükümlülüğü doğabilir." },
    ],
    howToTitle: "Pendik'te Alacak Davası Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Alacağın Belgelendirilmesi", text: "Sözleşme, fatura ve diğer ticari belgelerle alacağın dayanağı ortaya konur." },
      { name: "İhtarname veya Arabuluculuk", text: "Gerekiyorsa karşı tarafa ihtarname çekilir veya zorunlu arabuluculuğa başvurulur." },
      { name: "Ticari Dava Sürecinin Başlatılması", text: "Yetkili mahkemede alacak veya tazminat davası açılır." },
      { name: "Kararın İcrası", text: "Kararın kesinleşmesiyle gerekirse icra takibiyle tahsilat sağlanır." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];
