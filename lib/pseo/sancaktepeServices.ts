import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const sancaktepeServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "sancaktepe-avukat",
    name: "Sancaktepe Avukat",
    heroTitle: "Sancaktepe Avukat",
    heroSubtitle:
      "22 Mart 2008 tarihli 5747 sayılı Kanun'la Ümraniye'ye bağlı Sarıgazi ve Yenidoğan beldeleri ile Kartal'a bağlı Samandıra Beldesi'nin birleştirilmesiyle kurulan ve TÜİK'in 2025 verilerine göre 507 bini aşkın nüfusuyla İstanbul'un görece genç ilçelerinden biri olan Sancaktepe'de avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti vermektedir; ilçenin ayrı bir adliyesi bulunmadığından dava ve icra dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülmektedir.",
    metaTitle: "Sancaktepe Avukat",
    metaDescription:
      "Sancaktepe'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuş bir avukattır. Güneyinde Kartal, güneybatısında Maltepe, batısında Ataşehir ve Ümraniye, kuzeyinde Çekmeköy, doğusunda Pendik ve güneydoğusunda Sultanbeyli ile komşu olan, yaklaşık 62 km²'lik alanda Sarıgazi, Yenidoğan, Meclis, Samandıra çevresi gibi eski belde yerleşimlerinden oluşan Sancaktepe'de ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Eski belde yerleşimlerindeki tapu ve imar uyuşmazlıklarında dava takibi." },
      { title: "İş Hukuku", description: "Sarıgazi ve Samandıra çevresindeki işletme çalışanlarının işçilik alacakları ve işe iade süreçleri." },
      { title: "İcra Hukuku", description: "Alacak takibi ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "İmar ve idari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı ve cezası uyuşmazlıkları." },
      { title: "Borçlar Hukuku", description: "Ticari sözleşme ve alacak kaynaklı davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Eski belde yerleşimlerindeki taşınmazlara ilişkin tapu ve imar uyuşmazlıklarında gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İmar uygulamaları ve idari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Ticari sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "22 Mart 2008 tarih ve 26824 sayılı Resmi Gazete'de yayımlanan 5747 sayılı Kanun ile Ümraniye'ye bağlı Sarıgazi ve Yenidoğan beldeleri ile Kartal'a bağlı Samandıra Beldesi'nin tüzel kişiliklerinin kaldırılıp birleştirilmesiyle kurulan Sancaktepe, İstanbul'un görece yeni ilçelerinden biridir; TÜİK'in 2025 Adrese Dayalı Nüfus Kayıt Sistemi verilerine göre nüfusu 507 bini aşmıştır.",
      "İlçenin kendi adliyesi bulunmadığından dava ve icra dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür; vergisel işlemler ise bağımsız bir vergi dairesi yerine Meclis Mahallesi'ndeki Sancaktepe İlçe Mal Müdürlüğü üzerinden yürütülmektedir.",
    ],
    faqs: [
      { question: "Sancaktepe'deki davalara hangi adliye bakıyor?", answer: "Sancaktepe'nin kendi adliyesi bulunmadığından ilçedeki tüm dava ve icra dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Sancaktepe'de mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Sancaktepe'deki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Sancaktepe'de vergi dairesi var mı?", answer: "İlçede bağımsız bir vergi dairesi bulunmamakta, vergisel işlemler Sancaktepe İlçe Mal Müdürlüğü üzerinden yürütülmektedir." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Sancaktepe'ye hangi metro hattıyla ulaşılır?", answer: "Üsküdar-Sultanbeyli güzergahındaki M5 metrosunun Sarıgazi, Meclis, Sancaktepe Şehir Hastanesi, Sancaktepe ve Samandıra Merkez istasyonlarından ulaşılabilir." },
    ],
    howToTitle: "Sancaktepe'de Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Sancaktepe Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "sancaktepe-bosanma-avukati",
    name: "Sancaktepe Boşanma Avukatı",
    heroTitle: "Sancaktepe Boşanma Avukatı",
    heroSubtitle:
      "2008'de Sarıgazi, Yenidoğan ve Samandıra'nın birleşmesiyle kurulan ve hızlı nüfus artışına sahne olan Sancaktepe'de anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal paylaşımı süreçlerinde avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) temsil sağlamaktadır; aile mahkemesi davaları, ilçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Sancaktepe Boşanma Avukatı",
    metaDescription:
      "Sancaktepe'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, Sancaktepe'deki ailelerin boşanma, velayet ve nafaka süreçlerinde temsilini üstlenmektedir.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Mal Rejimi Tasfiyesi", description: "Sarıgazi ve Samandıra çevresindeki müstakil ve apartman nitelikli konutların değerlemeyle paylaşımı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Konut niteliğindeki taşınmazların dahil olduğu mal rejimi tasfiyesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Eski belde merkezleri olan Sarıgazi ve Samandıra çevresindeki mahallelerde hâlâ yaygın olan müstakil ve az katlı konut dokusu, boşanma sürecindeki eşler için ortak konutun akıbeti ve taşınmazın kime kalacağı sorusunu sıklıkla gündeme getirmektedir.",
      "Boşanma, velayet ve nafaka talepleri, Sancaktepe'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki aile mahkemelerinde görülür; anlaşmalı süreçte protokolün eksiksizliği, çekişmeli süreçte ise ileri sürülen delillerin gücü sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Sancaktepe'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki aile mahkemesine başvurulur." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir." },
      { question: "Ortak konut kiracı ise boşanma sürecini nasıl etkiler?", answer: "Kira sözleşmesinin tarafı olma durumu ve tahliye talepleri ayrıca değerlendirilir, konut hakkına ilişkin tedbir aile mahkemesinden istenebilir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir." },
    ],
    howToTitle: "Sancaktepe'de Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "İhtiyaç Analizi", text: "Velayet, nafaka ve mal rejimi talepleri değerlendirilir." },
      { name: "Dilekçe Hazırlığı", text: "Duruma uygun dava dilekçesi ya da protokol hazırlanır." },
      { name: "Dava Açılışı", text: "Yetkili aile mahkemesine başvuru yapılır." },
      { name: "Sonuç", text: "Duruşma sürecinin ardından karar açıklanır." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanmada-nafaka-turleri", "ziynet-esyasi-davasi"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "sancaktepe-ceza-avukati",
    name: "Sancaktepe Ceza Avukatı",
    heroTitle: "Sancaktepe Ceza Avukatı",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan avukat Furkan Arıkan, gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında Sancaktepe'deki şüpheli ve sanıklara müdafilik hizmeti sunar; ilçenin kendi adliyesi bulunmadığından dava dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülmektedir.",
    metaTitle: "Sancaktepe Ceza Avukatı",
    metaDescription:
      "Sancaktepe'de soruşturma, kovuşturma, tutukluluğa itiraz ve ceza yargılamasının tüm aşamalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nin 2019 mezunu olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, ceza yargılamasının soruşturma ve kovuşturma aşamalarında Sancaktepe'deki müvekkillerine müdafilik hizmeti vermektedir.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Uzlaşma Süreci", description: "Uzlaşmaya tabi suçlarda tarafların bir araya getirilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
      "Adli para cezası ve hükmün açıklanmasının geri bırakılması taleplerinin değerlendirilmesi",
    ],
    localParagraphs: [
      "2008'de üç ayrı belde merkezinin birleşmesiyle kurulan ve hızlı nüfus artışı yaşayan Sancaktepe'de, ilçenin genişleyen yerleşim alanları ve yoğun trafiğine bağlı olarak trafik güvenliğine ve mala karşı işlenen suçlara ilişkin soruşturmalar sık karşılaşılan dosya türleri arasında yer almaktadır.",
      "Soruşturma ve kovuşturma dosyaları, ilçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde yürütülmektedir; gözaltı sürecinin başladığı andan itibaren şüphelinin müdafi ile görüşme hakkı doğar.",
    ],
    faqs: [
      { question: "Sancaktepe'de bir ceza davası hangi adliyede görülür?", answer: "İlçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir ancak müdafi bulundurmak önerilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, sulh ceza hakimliğine itiraz edilebilir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Yargılamaya kaldığı yerden devam edilir." },
      { question: "Adli kontrol tedbiri ne zaman uygulanır?", answer: "Tutuklama şartları oluşmasına rağmen tutuklama yerine yetersiz görülmediği hallerde hakim adli kontrole hükmedebilir." },
    ],
    howToTitle: "Sancaktepe'de Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "sancaktepe-gayrimenkul-avukati",
    name: "Sancaktepe Gayrimenkul Avukatı",
    heroTitle: "Sancaktepe Gayrimenkul Avukatı",
    heroSubtitle:
      "Sarıgazi, Yenidoğan ve Samandıra gibi eski belde yerleşimlerinin tüzel kişiliklerinin kaldırılıp birleştirilmesiyle 2008'de kurulan Sancaktepe'de, bu geçmişten kaynaklanan tapu, imar ve kat mülkiyeti uyuşmazlıklarında avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) danışmanlık sağlar; davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Sancaktepe Gayrimenkul Avukatı",
    metaDescription:
      "Sancaktepe'de tapu iptali, kat mülkiyeti, imar uyuşmazlıkları ve kira davalarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Gayrimenkul hukuku alanında Sancaktepe'deki müvekkillerine danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Eski Belde Yerleşimleri", description: "Sarıgazi, Yenidoğan ve Samandıra çevresindeki taşınmazlarda tapu ve imar durumu incelemesi." },
      { title: "Kat Mülkiyeti Uyuşmazlıkları", description: "Site yönetimi, ortak gider ve karar uyuşmazlıklarının çözümü." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Kentsel Dönüşüm", description: "Riskli yapı tespiti ve dönüşüm süreçlerinde hak sahipliği takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Eski belde yerleşimlerindeki taşınmazların tapu ve imar durumu incelemesi",
      "Kat mülkiyeti ve site yönetimi uyuşmazlıklarına ilişkin danışmanlık",
      "Tapu iptali ve tescil davalarının açılması",
      "Kentsel dönüşüm kapsamındaki hak sahipliği ve değer tespiti süreçleri",
      "Kira bedeli tespiti ve uyarlama davaları",
      "Taşınmaz satış vaadi sözleşmelerinin hukuki incelemesi",
    ],
    localParagraphs: [
      "2008 öncesinde Ümraniye'ye bağlı belde olan Sarıgazi ve Yenidoğan ile Kartal'a bağlı belde olan Samandıra'nın birleştirilmesiyle kurulan Sancaktepe'de, bu beldelerin plansız gelişen eski yerleşim dokusundan kalan taşınmazlarda tapu kaydı ile fiili durumun örtüşmemesi zaman zaman uyuşmazlık konusu olabilmektedir.",
      "Tapu ve imar kaynaklı uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Sancaktepe'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    ],
    faqs: [
      { question: "Eski belde yerleşimindeki bir taşınmazı satın alırken nelere dikkat edilmeli?", answer: "Tapu kaydı, kat irtifakı/mülkiyeti durumu ve imar durumu belediyeden ayrıca teyit edilmelidir." },
      { question: "Sancaktepe'de gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi'nde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir." },
      { question: "Site yönetimiyle yaşanan ortak gider uyuşmazlığında ne yapılabilir?", answer: "Öncelikle yönetim planı ve genel kurul kararları incelenir, gerekirse dava yoluna gidilebilir." },
      { question: "Kentsel dönüşümde hak sahibinin onayı şart mı?", answer: "Riskli yapı tespiti sonrası süreç kanunda öngörülen çoğunluk ve usul kurallarına göre ilerler." },
    ],
    howToTitle: "Sancaktepe'de Tapu Uyuşmazlığı Süreci Nasıl İşler?",
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
    urlSlug: "sancaktepe-is-hukuku-avukati",
    name: "Sancaktepe İş Hukuku Avukatı",
    heroTitle: "Sancaktepe İş Hukuku Avukatı",
    heroSubtitle:
      "Abdurrahmangazi Mahallesi'ndeki Sancaktepe Şehit Prof. Dr. İlhan Varank Eğitim ve Araştırma Hastanesi başta olmak üzere ilçedeki kamu ve özel sektör işletmelerinde çalışanların kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerinde İstanbul Barosu sicil no 72621 ile kayıtlı avukat Furkan Arıkan temsil sağlar; iş mahkemesi davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Sancaktepe İş Hukuku Avukatı",
    metaDescription:
      "Sancaktepe'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan İstanbul Barosu'nda 72621 sicil numarasıyla kayıtlı olup 2019'da MEF Üniversitesi Hukuk Fakültesi'ni tamamlamıştır; iş hukuku alanında Sancaktepe'deki çalışan ve işverenlere danışmanlık vermektedir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Sağlık Sektörü Çalışanları", description: "İlçedeki eğitim ve araştırma hastanesi personelinin işçilik hakları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Sağlık kurumu ve diğer işletme çalışanlarının işçilik alacaklarının tahsili",
      "Fazla mesai ve yıllık izin ücreti gibi diğer işçilik alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Abdurrahmangazi Mahallesi'nde bulunan ve 2017 yılında hizmete giren Sancaktepe Şehit Prof. Dr. İlhan Varank Eğitim ve Araştırma Hastanesi çalışanları ile ilçenin genişleyen ticari ve hizmet sektöründeki işletmelerin personeli, Sancaktepe'de işçilik alacağı ve işe iade uyuşmazlıklarının önemli bir bölümünü oluşturmaktadır.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları, Sancaktepe'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki iş mahkemesinde görülür.",
    ],
    faqs: [
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Çalışma süresi ve son brüt (giydirilmiş) ücret esas alınarak hesaplanır." },
      { question: "Sancaktepe'de iş mahkemesi nerededir?", answer: "İlçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir." },
      { question: "Fazla mesai nasıl ispatlanır?", answer: "Puantaj kayıtları, bordrolar ve tanık beyanıyla ispat edilebilir." },
      { question: "İşe iade davası açmadan önce arabuluculuğa gitmek zorunlu mu?", answer: "Evet, dava şartı olarak öncelikle arabulucuya başvurulması gerekir." },
    ],
    howToTitle: "Sancaktepe'de İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Fesih Değerlendirmesi", text: "İşten çıkarma gerekçesi ve usulü incelenir." },
      { name: "Arabulucuya Başvuru", text: "Yasal süre içinde arabuluculuk sürecine başlanır." },
      { name: "Dava Süreci", text: "Anlaşma olmazsa iş mahkemesinde dava açılır." },
      { name: "Sonuç", text: "Mahkeme kararı doğrultusunda işlem yapılır." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "giydirilmis-ucret-kavrami", "ise-iade-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "sancaktepe-icra-avukati",
    name: "Sancaktepe İcra Avukatı",
    heroTitle: "Sancaktepe İcra Avukatı",
    heroSubtitle:
      "Sarıgazi ve Samandıra çevresindeki esnaf ve işletmeler arasındaki ticari alacaklardan bireysel alacaklara uzanan icra takiplerinde İstanbul Barosu sicil no 72621 ile kayıtlı avukat Furkan Arıkan (MEF Üniversitesi Hukuk Fakültesi, 2019) Sancaktepe'deki taraflara temsil sağlar; takipler Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki icra daireleri üzerinden yürütülür.",
    metaTitle: "Sancaktepe İcra Avukatı",
    metaDescription:
      "Sancaktepe'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İstanbul Barosu sicil no 72621 ile kayıtlı avukat Furkan Arıkan (MEF Üniversitesi Hukuk Fakültesi, 2019), icra ve iflas hukuku kapsamında Sancaktepe'deki alacaklı ve borçlu taraflara danışmanlık verir.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "Esnaf Alacakları", description: "Sarıgazi ve Samandıra çevresindeki işletmelerden doğan fatura ve senet alacaklarının takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "Esnaf ve küçük işletmeler arası ticari alacakların icra yoluyla tahsili",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Sarıgazi ve Samandıra çevresindeki eski belde merkezlerinde yoğunlaşan esnaf ve küçük ölçekli işletmeler arasındaki mal/hizmet alışverişinden doğan fatura ve senet alacakları, Sancaktepe'de icra takibine sık konu olan alacak türleri arasındadır.",
      "Bu takiplere ilişkin uyuşmazlıklar, Sancaktepe'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki icra daireleri ve icra mahkemelerinde görülür; ödeme emrine itiraz süresi tebliğden itibaren 7 gündür.",
    ],
    faqs: [
      { question: "Sarıgazi'deki bir esnaf alacağı için icra takibi nasıl başlatılır?", answer: "Fatura, senet veya sözleşme gibi dayanak belgelerle yetkili icra dairesinde takip dosyası açılır." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Tebliğden itibaren 7 gündür." },
      { question: "İtiraz üzerine durmuş bir takip nasıl devam ettirilir?", answer: "Alacaklı, itirazın iptali davası açarak veya elinde uygun bir belge varsa itirazın kaldırılmasını istemek suretiyle sürece devam edebilir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir." },
      { question: "Mali sıkıntı yaşayan bir işletme icra takibini nasıl durdurabilir?", answer: "Şartları taşıması halinde konkordato talebiyle mahkemeden geçici veya kesin mühlet istenebilir." },
    ],
    howToTitle: "Sancaktepe'de İcra Takibi Hangi Aşamalardan Oluşur?",
    howToSteps: [
      { name: "Alacağın Belgelendirilmesi", text: "Fatura, senet veya sözleşme gibi dayanak belgeler bir araya getirilir." },
      { name: "Takip Dosyasının Açılması", text: "Kartal'daki İstanbul Anadolu Adliyesi icra dairesinde dosya oluşturulur." },
      { name: "Ödeme Emrinin Tebliği", text: "Borçluya yasal süreye tabi ödeme emri gönderilir." },
      { name: "Haciz ve Tahsilat", text: "İtiraz edilmezse veya itiraz giderilirse haciz yoluyla tahsilata geçilir." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "sancaktepe-idare-avukati",
    name: "Sancaktepe İdare Avukatı",
    heroTitle: "Sancaktepe İdare Avukatı",
    heroSubtitle:
      "2008'de üç ayrı belde merkezinin birleştirilmesiyle kurulan Sancaktepe'de, bu geçmişten kalan ıslah imar planı işlemlerinden belediye ruhsat uyuşmazlıklarına kadar geniş bir alanda avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) Sancaktepe'deki müvekkillerine idari dava desteği sunar; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Sancaktepe İdare Avukatı",
    metaDescription:
      "Sancaktepe'de idari işlemlerin iptali, imar uygulamalarına itiraz ve tazminat davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nin 2019 mezunu olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, idari işlemlerin iptali ve tam yargı davalarında Sancaktepe'deki müvekkillerine danışmanlık sağlamaktadır.",
    highlightCards: [
      { title: "İptal Davası Süreci", description: "Hukuka aykırı idari işlemlere karşı yargı yoluna başvurulması." },
      { title: "Ruhsat İşlemleri", description: "İşyeri açma/çalışma ruhsatı ret işlemlerine itiraz." },
      { title: "Islah İmar Uygulamaları", description: "Eski belde yerleşimlerindeki ıslah imar planı işlemlerine itiraz." },
      { title: "İdari Yaptırımlara İtiraz", description: "Belediye ve diğer kurumların idari para cezalarına karşı dava." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İşyeri açma ve çalışma ruhsatı ret işlemlerine itiraz",
      "Islah imar planı işlemlerine ilişkin idari dava süreçleri",
      "Belediye imar planı ve plan değişikliği kararlarına karşı iptal davası açılması",
      "İdarenin işlem veya eyleminden kaynaklanan zararlar için tam yargı davası açılması",
      "İdari para cezalarına karşı dava süreçlerinin yürütülmesi",
      "Kamu görevlisi özlük haklarına ilişkin idari uyuşmazlıklar",
    ],
    localParagraphs: [
      "2008'de Sarıgazi, Yenidoğan ve Samandıra beldelerinin birleştirilmesiyle kurulan Sancaktepe'de, bu eski belde yerleşimlerinden kalan çarpık yapılaşmış alanlara yönelik ıslah imar planı işlemleri ile belediye ruhsat süreçleri, ilçedeki idari uyuşmazlıkların önemli bir bölümünü oluşturmaktadır.",
      "Bu davalara İstanbul idare mahkemelerinde bakılmakta olup dava açma süresi, kural olarak işlemin tebliğ veya ilan edildiği tarihten başlayan 60 gündür; bu süre içinde dava açılmazsa hak düşümü söz konusu olur.",
    ],
    faqs: [
      { question: "Sancaktepe'de imar planı değişikliğine ne zaman itiraz edilmeli?", answer: "Planın ilan edildiği veya işlemin tebliğ edildiği tarihten itibaren 60 gün içinde idare mahkemesinde dava açılması gerekir; bu süre geçirildiğinde dava hakkı düşer." },
      { question: "Bir işyerinin ruhsat başvurusu reddedilirse ne yapılabilir?", answer: "Ret işlemine karşı idare mahkemesinde iptal davası açılabilir." },
      { question: "Islah imar planı kapsamındaki bir tespite itiraz mümkün mü?", answer: "Evet, ilgili idari işleme karşı yasal süresi içinde dava yoluna gidilebilir." },
      { question: "Belediyenin kestiği idari para cezasına nasıl itiraz edilir?", answer: "Cezanın tebliğinden itibaren yasal süre içinde idare mahkemesinde dava açılarak itiraz edilebilir." },
      { question: "İdarenin bir işlemi nedeniyle zarara uğrayan ne yapabilir?", answer: "Tam yargı davası açarak uğradığı zararın tazminini talep edebilir." },
    ],
    howToTitle: "Sancaktepe'de İdari Dava Süreci Nasıl Yürütülür?",
    howToSteps: [
      { name: "Ön İnceleme", text: "Dava konusu işlem ile tebliğ veya ilan tarihi tespit edilir." },
      { name: "Süre Hesabı", text: "60 günlük dava açma süresinin başlangıcı belirlenir." },
      { name: "Dilekçenin Hazırlanması", text: "Hukuki dayanaklar ve talepler dilekçeye yazılır." },
      { name: "Mahkeme Süreci", text: "İdare mahkemesi dosyayı inceleyerek kararını verir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: ["idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "sancaktepe-kira-tahliye-avukati",
    name: "Sancaktepe Kira ve Tahliye Avukatı",
    heroTitle: "Sancaktepe Kira ve Tahliye Avukatı",
    heroSubtitle:
      "M5 metro hattının Sarıgazi, Meclis ve Sancaktepe istasyonlarına yakın mahallelerdeki konut ve işyeri kiralamalarında, tahliye ve kira bedeli tespiti uyuşmazlıklarında avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) Sancaktepe'deki taraflara destek sağlar; sulh hukuk mahkemesi davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Sancaktepe Kira ve Tahliye Avukatı",
    metaDescription:
      "Sancaktepe'de kiracı tahliyesi, kira sözleşmesi uyuşmazlıkları ve kira bedeli tespitinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kira hukuku uyuşmazlıklarında Sancaktepe'deki kiracı ve kiraya verenlere destek olan Furkan Arıkan, 2019 MEF Üniversitesi Hukuk Fakültesi mezunu olup İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır.",
    highlightCards: [
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Metro Çevresi Kiralamaları", description: "M5 hattı istasyonlarına yakın mahallelerdeki konut kira uyuşmazlıkları." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Konut ve işyeri kira sözleşmelerinin hazırlanması ve incelenmesi",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "M5 metro hattının Çekmeköy-Samandıra Merkez uzatmasının 16 Mart 2024'te hizmete girmesiyle birlikte Sarıgazi, Meclis ve Sancaktepe istasyonlarına yakın mahallelerdeki konutlarda kiracı talebinin arttığı gözlenmektedir.",
      "Tahliye ve kira bedeli tespiti davalarına, Sancaktepe'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki sulh hukuk mahkemesinde bakılır; yazılı ve eksiksiz bir kira sözleşmesi uyuşmazlık halinde ispat kolaylığı sağlar.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Sancaktepe'de tahliye davası hangi mahkemede görülür?", answer: "İstanbul Anadolu Adliyesi bünyesindeki sulh hukuk mahkemesinde görülür." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
      { question: "Metro istasyonuna yakın bir konutun kira bedeli nasıl güncellenir?", answer: "Sözleşmede belirlenen artış oranı veya yasal sınırlar çerçevesinde güncelleme yapılabilir; uyuşmazlık halinde tespit davası açılabilir." },
    ],
    howToTitle: "Sancaktepe'de Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "sancaktepe-vergi-avukati",
    name: "Sancaktepe Vergi Avukatı",
    heroTitle: "Sancaktepe Vergi Avukatı",
    heroSubtitle:
      "Meclis Mahallesi'ndeki Sancaktepe İlçe Mal Müdürlüğü nezdinde işlem gören mükelleflerin vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde İstanbul Barosu sicil no 72621 ile kayıtlı avukat Furkan Arıkan temsil sağlar; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Sancaktepe Vergi Avukatı",
    metaDescription:
      "Sancaktepe'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukat olarak Sancaktepe'deki mükelleflere vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda danışmanlık vermektedir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Esnaf ve Küçük İşletme Mükellefleri", description: "İlçedeki esnaf ve küçük işletmelerin gelir/kurumlar vergisi incelemeleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Esnaf ve küçük işletmelerin vergi inceleme süreçlerinde danışmanlık",
      "Gayrimenkul kira gelirlerinin beyanına ilişkin uyuşmazlıklarda destek",
    ],
    localParagraphs: [
      "Sancaktepe'de bağımsız bir vergi dairesi bulunmadığından mükelleflerin vergisel işlemleri, Meclis Mahallesi'ndeki Sancaktepe İlçe Mal Müdürlüğü üzerinden yürütülür; ilçedeki esnaf ve küçük işletmelerin gelir ve kurumlar vergisi incelemeleri sık karşılaşılan konular arasındadır.",
      "Vergi ve ceza ihbarnamesine karşı dava açma süresi tebliğden itibaren 30 gündür; davalar İstanbul vergi mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Sancaktepe'de hangi kurum vergi dairesi yetkisini kullanıyor?", answer: "İlçede bağımsız bir vergi dairesi bulunmadığından bu yetki Meclis Mahallesi'ndeki Sancaktepe İlçe Mal Müdürlüğü tarafından kullanılmaktadır." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Kira geliri beyan edilmezse ne olur?", answer: "Re'sen veya ikmalen tarhiyat ve buna bağlı ceza uygulanabilir, bu işlemlere karşı dava açılabilir." },
    ],
    howToTitle: "Sancaktepe'de Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "sancaktepe-borclar-hukuku-avukati",
    name: "Sancaktepe Borçlar Hukuku Avukatı",
    heroTitle: "Sancaktepe Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Sarıgazi ve Samandıra çevresindeki esnaf ile ilçenin genişleyen ticari dokusundaki işletmeler arasındaki sözleşme ve alacak uyuşmazlıklarında İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan (MEF Üniversitesi Hukuk Fakültesi, 2019) Sancaktepe'deki müvekkillerini temsil eder; davalar Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür.",
    metaTitle: "Sancaktepe Borçlar Hukuku Avukatı",
    metaDescription:
      "Sancaktepe'de ticari sözleşmeler, esnaf ve işletmeler arası alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Sözleşme ve alacak kaynaklı uyuşmazlıklarda Sancaktepe'deki müvekkillerine danışmanlık veren Furkan Arıkan, İstanbul Barosu'na kayıtlı (sicil no: 72621) ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunu bir avukattır.",
    highlightCards: [
      { title: "Tedarik Sözleşmeleri", description: "Esnaf ve küçük ölçekli işletmeler arası sözleşmelerden doğan uyuşmazlıklar." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Kira/İşyeri Sözleşmeleri", description: "Cadde ve pazar üzeri işyeri kiralamalarından doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Esnaf ve küçük işletmeler arası hizmet ve satış sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Cadde ve pazar üzeri işyeri kiralamalarından doğan sözleşme uyuşmazlıkları",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Sarıgazi ve Samandıra çevresindeki esnaf ile ilçenin genişleyen ticari dokusundaki küçük ve orta ölçekli işletmeler arasında akdedilen hizmet ve satış sözleşmelerinden doğan ifa ve alacak uyuşmazlıkları, Sancaktepe'de borçlar hukuku kapsamında sık karşılaşılan dava türlerindendir.",
      "Bu davalar, Sancaktepe'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması dava şartıdır.",
    ],
    faqs: [
      { question: "Sözleşmeyi ihlal eden taraftan ne talep edilebilir?", answer: "Sözleşmeden dönme, ifa veya tazminat gibi hukuki yollara başvurulabilir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir." },
      { question: "Bir işyeri kira sözleşmesinin erken feshinde ne olur?", answer: "Sözleşme hükümleri ve kanuni düzenlemeler çerçevesinde tazminat yükümlülüğü doğabilir." },
    ],
    howToTitle: "Sancaktepe'de Alacak Davası Süreci Nasıl İşler?",
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
