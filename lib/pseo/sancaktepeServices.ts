import type { PseoService } from "./types";
import { sancaktepeMiras } from "./miras/sancaktepeMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const sancaktepeBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "sancaktepe-avukat",
    name: "Sancaktepe Avukat",
    heroTitle: "Sancaktepe Avukat",
    heroSubtitle:
      "22 Mart 2008 tarihli 5747 sayılı Kanun'la Ümraniye'ye bağlı Sarıgazi ve Yenidoğan beldeleri ile Kartal'a bağlı Samandıra Beldesi'nin birleştirilmesiyle kurulan ve TÜİK'in 2025 verilerine göre 507 bini aşkın nüfusuyla İstanbul'un görece genç ilçelerinden biri olan Sancaktepe'de avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti vermektedir; ilçenin ayrı bir adliyesi bulunmadığından dava ve icra dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülmektedir.",
    metaTitle: "Sancaktepe Avukat | Hukuki Danışmanlık",
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
      "Sarıgazi'den Samandıra'ya uzanan mahallelerde yaşayan eşlerin anlaşmalı ya da çekişmeli boşanma, velayet, nafaka ve mal rejimi uyuşmazlıklarında avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) hukuki temsil üstlenir; Sancaktepe'de adliye binası olmadığı için aile mahkemesi dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde yürür.",
    metaTitle: "Sancaktepe Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Sancaktepe'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır. Büro Beşiktaş/Sinanpaşa'dadır; Sancaktepe'de yaşayan eşlere boşanma protokolü, dava dilekçesi, velayet ve nafaka talepleri ile mal rejimi tasfiyesi konularında danışmanlık ve temsil sağlar. Randevu için WhatsApp veya telefon yeterlidir.",
    highlightCards: [
      { title: "Protokollü Boşanma", description: "TMK m.166/3 çerçevesinde protokolün eksiksiz kurulması ve hâkimin tarafları dinleyeceği duruşmaya hazırlık." },
      { title: "Kusur ve Tazminat", description: "Çekişmeli davada kusur iddialarının tanık ve belgelerle ortaya konması, maddi ve manevi tazminat talepleri." },
      { title: "Velayet ve Kişisel İlişki", description: "Çocuğun yararı ölçü alınarak velayet, görüşme düzeni ve iştirak nafakası taleplerinin hazırlanması." },
      { title: "Aile Konutu ve Mal Rejimi", description: "Sarıgazi, Samandıra ve Yenidoğan'daki konutlar için tapu kaydı, aile konutu şerhi ve katılma alacağı hesabı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "TMK m.166/3 uyarınca protokol taslağının hazırlanması ve ortak başvuru duruşmasında temsil",
      "Zina, hayata kast, terk ya da evlilik birliğinin temelden sarsılması gibi sebeplere dayanan çekişmeli boşanma davaları",
      "Velayetin düzenlenmesi, kişisel ilişki kurulması ve sonradan velayet değişikliği başvuruları",
      "Tedbir, yoksulluk ve iştirak nafakası taleplerinin açılması; nafakanın artırılması, azaltılması veya kaldırılması",
      "Yasal mal rejimi olan edinilmiş mallara katılma rejiminde katılma alacağı ve değer artış payı talepleri",
      "Boşanmaya bağlı maddi ve manevi tazminat ile ziynet eşyası taleplerinin yürütülmesi",
    ],
    localParagraphs: [
      "Sancaktepe, 2008'de Sarıgazi, Yenidoğan ve Samandıra beldelerinin birleşmesiyle oluştuğundan ilçede farklı dönemlerde yapılmış müstakil evlerden apartman ve sitelere uzanan çeşitli bir konut yelpazesi görülür. Eşlerin birlikte yaşadığı konutun tapuda kimin adına olduğu, aile konutu niteliği taşıyıp taşımadığı ve boşanma sonrası kimin kullanacağı sık tartışılan başlıklardır.",
      "Dosyalar Kartal'daki İstanbul Anadolu Adliyesi'ndeki aile mahkemelerinde görülür; TMK m.168'e göre yetkili mahkeme, eşlerden birinin yerleşim yeri veya dava açılmadan önce son altı aydır birlikte oturdukları yer mahkemesidir. Protokollü boşanmada metnin eksiksizliği, çekişmeli boşanmada ise delillerin niteliği sonucu belirler.",
    ],
    faqs: [
      { question: "Sancaktepe'de boşanma davası hangi mahkemede açılır?", answer: "Boşanma davası aile mahkemesinde açılır; TMK m.168 uyarınca eşlerden birinin yerleşim yeri veya son altı aydır birlikte yaşadıkları yer mahkemesi yetkilidir. Sancaktepe'de adliye bulunmadığı için bu davalara Kartal'daki İstanbul Anadolu Adliyesi'ndeki aile mahkemeleri bakar ve dilekçe bu adliyeye verilir." },
      { question: "Anlaşmalı boşanma için hangi şartlar aranır?", answer: "TMK m.166/3'e göre evliliğin en az bir yıl sürmüş olması, eşlerin birlikte başvurması veya birinin açtığı davayı diğerinin kabul etmesi gerekir. Hâkim eşleri bizzat dinleyerek iradelerinin serbest olduğuna kanaat getirmeli; mal paylaşımı, velayet ve nafakayı düzenleyen protokolü de onaylamalıdır." },
      { question: "Velayet kararında çocuğun görüşü dikkate alınır mı?", answer: "Evet, çocuk yaşı ve gelişimi elverdiği ölçüde mahkeme tarafından dinlenebilir ve görüşü değerlendirilir; ancak asıl ölçüt çocuğun üstün yararıdır. Hâkim sosyal inceleme raporunu ve ebeveynlerin bakım imkânlarını da inceler, bu nedenle çocuğun tercihi tek başına bağlayıcı sayılmaz." },
      { question: "Boşanmada nafaka türleri nelerdir?", answer: "Dava süresince tedbir nafakası, boşanma sonrasında kusur durumuna bağlı olarak yoksulluk nafakası ve velayeti almayan ebeveyn bakımından çocuk için iştirak nafakası söz konusu olabilir. Miktarı hâkim, tarafların gelirini, çocuğun ihtiyaçlarını ve ekonomik koşulları dikkate alarak belirler." },
      { question: "Aile konutu eşimin adına kayıtlıysa ne yapılabilir?", answer: "Konutun maliki hangi eş olursa olsun, diğer eşin açık rızası olmadan konut satılamaz veya üzerindeki hak sınırlandırılamaz (TMK m.194). Tapu müdürlüğünden aile konutu şerhi istenebilir; ayrıca aile mahkemesinden konutun kullanımına ilişkin tedbir kararı talep edilebilir." },
    ],
    howToTitle: "Sancaktepe'de Boşanma Davası Adım Adım Nasıl İlerler?",
    howToSteps: [
      { name: "Talep Haritası", text: "Velayet, nafaka, tazminat ve mal paylaşımı talepleri birlikte listelenir; sürecin anlaşmalı mı çekişmeli mi ilerleyeceği belirlenir." },
      { name: "Evrak ve Delil", text: "Nüfus kayıt örneği, tapu ve gelir belgeleri ile kusur iddialarını destekleyen deliller derlenir." },
      { name: "Başvuru", text: "Dilekçe veya protokolle Kartal'daki Anadolu Adliyesi'nde yetkili aile mahkemesine başvurulur." },
      { name: "Duruşma ve Karar", text: "Tarafların dinlendiği duruşma ve gerekirse yargılama sonunda mahkeme boşanma ile ona bağlı konularda hüküm verir." },
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
    metaTitle: "Sancaktepe Ceza Avukatı | Müdafilik",
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
      "Sarıgazi, Yenidoğan ve Samandıra'nın beldelikten ilçe çatısına geçtiği 2008'den bugüne tapu kaydının fiili kullanımla örtüşmediği, imar durumunun belirsiz kaldığı veya site yönetimiyle ihtilaf çıkan taşınmazlarda avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) hukuki inceleme ve dava desteği sunar; yetkili mahkemeler Kartal'daki İstanbul Anadolu Adliyesi'ndedir.",
    metaTitle: "Sancaktepe Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Sancaktepe'de tapu iptali, kat mülkiyeti, imar uyuşmazlıkları ve kira davalarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Taşınmaz dosyalarında Sancaktepe'deki malik, alıcı ve kat maliklerine hizmet veren Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır. Büro Beşiktaş/Sinanpaşa'dadır; tapu, imar ve kat mülkiyeti konularında inceleme ve dava desteği sağlar.",
    highlightCards: [
      { title: "Alım Öncesi İnceleme", description: "Tapu kaydı, takyidat, imar durumu ve yapı kullanma izninin satın alma öncesinde birlikte incelenmesi." },
      { title: "Tapu İptali ve Tescil", description: "TMK m.1025 kapsamında yolsuz tescile karşı iptal ve tescil davaları." },
      { title: "Kat Mülkiyeti", description: "Kat Mülkiyeti Kanunu çerçevesinde aidat, ortak gider ve genel kurul kararı uyuşmazlıkları." },
      { title: "Kentsel Dönüşüm", description: "6306 sayılı Kanun kapsamında riskli yapı tespiti, malikler arası uzlaşma ve hak sahipliği." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Satın alma öncesi tapu, ipotek, haciz şerhi ve imar durumu incelemesi",
      "Tapu kaydı ile fiili durum arasındaki farktan doğan tapu iptali ve tescil davaları",
      "Aidat tahsili, genel kurul kararına itiraz ve yönetici uyuşmazlıklarında Kat Mülkiyeti Kanunu desteği",
      "Ortaklığın giderilmesi ve paydaşlar arası paylaşım davaları",
      "6306 sayılı Kanun kapsamında riskli yapı itirazı, kat karşılığı ve hak sahipliği süreçleri",
      "Taşınmaz satış vaadi sözleşmelerinin incelenmesi ve tapuda tescil talebi",
    ],
    localParagraphs: [
      "Sancaktepe 2008'de üç beldenin tüzel kişiliklerinin kaldırılmasıyla kurulduğu için eski belde merkezleri ile sonradan gelişen mahalleler arasında yapılaşma biçimi ve imar geçmişi birbirinden farklı olabilir. Bu nedenle bir taşınmazın tapu kaydı, kadastro durumu ve imar planındaki konumu birlikte kontrol edilmeden işlem yapılması sonradan uyuşmazlığa yol açabilir.",
      "Taşınmazın aynına ilişkin davalarda kesin yetki taşınmazın bulunduğu yer mahkemesindedir (HMK m.12); Sancaktepe'deki taşınmazlar için bu, Kartal'daki İstanbul Anadolu Adliyesi'dir. Görevli mahkeme dava türüne göre değişir: paydaşlık davaları sulh hukukta, tapu iptali asliye hukukta görülür.",
    ],
    faqs: [
      { question: "Taşınmaz satın almadan önce hangi belgeler incelenmelidir?", answer: "Güncel tapu kaydı ile takyidat bilgileri (ipotek, haciz, şerh), imar durumu, yapı kullanma izni ve kat irtifakı ya da kat mülkiyeti durumu birlikte incelenmelidir. Tapu müdürlüğü ve belediyeden alınan belgeler, kayıttaki bilgiyle fiili durumun uyumlu olup olmadığını gösterir." },
      { question: "Tapu iptali ve tescil davası hangi hallerde açılabilir?", answer: "Tescil geçerli bir hukuki sebebe dayanmıyorsa veya sahte vekâletname, muvazaa ya da ehliyetsizlik gibi sakatlık içeriyorsa hak sahibi tapu iptali ve tescil davası açabilir (TMK m.1025). Kayda güvenerek edinen iyi niyetli üçüncü kişi korunabildiğinden delillerin dikkatle değerlendirilmesi gerekir." },
      { question: "Site aidatı ödenmezse yönetim ne yapabilir?", answer: "Kat Mülkiyeti Kanunu m.20 uyarınca ortak giderlere katılmayan kat maliki için gecikme tazminatı uygulanabilir ve alacak icra takibiyle tahsil edilebilir. Yönetim planı ile genel kurul kararları incelenir; gider payı hesabının usulüne uygun yapılıp yapılmadığı uyuşmazlıkta belirleyici olur." },
      { question: "Kentsel dönüşümde malikin onayı gerekir mi?", answer: "6306 sayılı Kanun'a göre riskli yapı tespitinden sonra yeniden inşa veya güçlendirme için malikler arasında kanunun aradığı çoğunluk sağlanırsa karar verilebilir; katılmayan maliklere ilişkin satış ve tazminat usulleri de öngörülmüştür. Riskli yapı tespitine karşı kanundaki kısa süre içinde itiraz edilebilir." },
      { question: "Gayrimenkul davaları hangi mahkemede açılır?", answer: "Taşınmazın aynına ilişkin davalarda kesin yetkili mahkeme taşınmazın bulunduğu yerdir (HMK m.12); Sancaktepe'deki taşınmazlar için dosyalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. Görevli mahkeme dava türüne bağlıdır; örneğin ortaklığın giderilmesi sulh hukukta, tapu iptali ise asliye hukukta görülür." },
    ],
    howToTitle: "Sancaktepe'de Tapu Uyuşmazlığına İlişkin Dava Süreci Nasıl İlerler?",
    howToSteps: [
      { name: "Kayıt ve İmar Taraması", text: "Tapu kaydı, takyidat, kadastro ve imar durumu belgeleri temin edilir." },
      { name: "Hak ve Delil Analizi", text: "Dava sebebi, taraflar ve dayanak belgeler netleştirilir." },
      { name: "Dava Dilekçesi", text: "Yetkili mahkemede tapu iptali, tescil, ortaklığın giderilmesi veya ilgili talebi içeren dava açılır." },
      { name: "Keşif ve Karar", text: "Gerekirse yerinde keşif ve bilirkişi incelemesi yapılır, ardından hüküm kurulur." },
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
      "Abdurrahmangazi'deki Sancaktepe Şehit Prof. Dr. İlhan Varank Eğitim ve Araştırma Hastanesi, Samandıra ve Sarıgazi çevresindeki işyerleri ile ilçedeki ticaret ve hizmet işletmelerinde çalışan işçilerin kıdem ve ihbar tazminatı, işe iade, fazla mesai ve diğer alacak taleplerinde avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) hukuki destek sağlar; iş davaları Kartal'daki Anadolu Adliyesi'nin iş mahkemelerinde yürür.",
    metaTitle: "Sancaktepe İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Sancaktepe'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır. Sancaktepe'de çalışan işçilere ve işverenlere fesih bildirimi, ibraname, bordro ve arabuluculuk aşamalarında danışmanlık verir; dava gerektiğinde Kartal'daki Anadolu Adliyesi iş mahkemelerinde temsil sağlar.",
    highlightCards: [
      { title: "Kıdem ve İhbar Tazminatı", description: "Hizmet süresi ve giydirilmiş brüt ücret üzerinden tazminat hesabı ve talep hazırlığı." },
      { title: "İşe İade (İş K. m.18)", description: "En az 30 işçi çalıştıran işyerinde 6 ay kıdemi bulunan işçiler için geçersiz fesih başvurusu." },
      { title: "Fazla Mesai ve Ücret Alacakları", description: "Bordro, puantaj ve tanık beyanlarıyla fazla çalışma, yıllık izin ve ücret alacaklarının talebi." },
      { title: "Hastane ve Hizmet İşyerleri", description: "Sağlık kuruluşu personeli ile ticaret ve hizmet işyeri çalışanları için fesih ve alacak incelemesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız veya geçersiz fesih sonrası kıdem ve ihbar tazminatı taleplerinin hazırlanması",
      "Fesihten itibaren bir ay içinde arabulucuya başvuru ve ardından işe iade davasının takibi",
      "Fazla mesai, hafta tatili, ulusal bayram ve yıllık izin ücreti alacaklarının talebi",
      "Bordro, SGK hizmet dökümü ve iş sözleşmesinin hak kaybı bakımından incelenmesi",
      "İbraname ve çıkış belgeleri imzalanmadan önce hukuki değerlendirme",
      "İş kazası ve meslek hastalığından doğan maddi ve manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Abdurrahmangazi Mahallesi'ndeki ve 2017'de hizmete açılan Sancaktepe Şehit Prof. Dr. İlhan Varank Eğitim ve Araştırma Hastanesi gibi kurumlarda ve Sarıgazi ile Samandıra çevresindeki ticaret ve hizmet işyerlerinde çalışanlar, işçilik alacağı ve işe iade başvurularına konu olabilecek durumlarla karşılaşabilmektedir.",
      "İşe iade için fesih bildiriminin tebliğinden itibaren bir ay içinde arabulucuya başvurulmalı (İş K. m.20), anlaşma sağlanamazsa arabuluculuk son tutanağından itibaren iki hafta içinde dava açılmalıdır. Davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görev yapan iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Kıdem tazminatı nasıl hesaplanır?", answer: "Kıdem tazminatı, işçinin aynı işyerinde en az bir yıl çalışması ve sözleşmenin kanunda sayılan sebeplerle sona ermesi halinde, her tam yıl için giydirilmiş brüt ücret üzerinden 30 günlük ücret esas alınarak hesaplanır. Kısmi yıllar orantılı olarak eklenir ve dönemsel tavan tutar sınırı dikkate alınır." },
      { question: "İşe iade davası açmak için hangi şartlar aranır?", answer: "İş K. m.18'e göre işyerinde en az otuz işçi çalışmalı, işçinin en az altı aylık kıdemi ve belirsiz süreli sözleşmesi bulunmalıdır. Ayrıca fesihten itibaren bir ay içinde arabulucuya başvurulmalıdır; arabuluculukta anlaşma sağlanamazsa iş mahkemesinde dava açılabilir." },
      { question: "Fazla mesai ücreti nasıl ispat edilir?", answer: "Fazla çalışmayı işçi ispat etmelidir; puantaj ve giriş-çıkış kayıtları, bordrolar, yazışmalar ve tanık beyanları delil olabilir. Mahkeme çoğu zaman bilirkişi marifetiyle hesap yaptırır, bordroda tahakkuk edip ödenen fazla mesai tutarları ise talepten mahsup edilir; bu nedenle belgelerin saklanması önemlidir." },
      { question: "Sancaktepe'de iş davaları hangi mahkemede görülür?", answer: "Sancaktepe'de adliye binası bulunmadığından işçilik alacağı ve işe iade davaları Kartal'daki İstanbul Anadolu Adliyesi'ne bağlı iş mahkemelerinde görülür. Dava açmadan önce 7036 sayılı Kanun gereği zorunlu arabuluculuk başvurusu yapılır ve son tutanak dava dilekçesine eklenir." },
      { question: "İbraname imzalamak hak kaybına yol açar mı?", answer: "TBK m.420 uyarınca ibra, iş sözleşmesinin sona ermesinden en az bir ay sonra, yazılı olarak, alacağın türü ve miktarı belirtilerek ve ödeme yapıldıktan sonra verilmişse geçerlidir. Bu şartlar yoksa ibranın geçersizliği ileri sürülebilir; yine de imzadan önce metnin incelenmesi önerilir." },
    ],
    howToTitle: "Sancaktepe'de İşe İade ve Alacak Başvurusu Nasıl Yürür?",
    howToSteps: [
      { name: "Fesih Belgelerinin Toplanması", text: "Fesih bildirimi, bordrolar, SGK hizmet dökümü ve iş sözleşmesi bir araya getirilir." },
      { name: "Arabulucu Başvurusu", text: "Fesih bildiriminin tebliğinden itibaren bir ay içinde arabulucuya başvurulur." },
      { name: "İş Mahkemesine Başvuru", text: "Son tutanaktan itibaren iki hafta içinde Kartal'daki Anadolu Adliyesi'nde dava açılır." },
      { name: "Yargılama ve Karar", text: "Delil toplama, bilirkişi hesabı ve duruşmaların ardından karar verilir." },
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
    metaTitle: "Sancaktepe İcra Avukatı | İcra Takibi ve Haciz",
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
      "Üç beldenin 2008'de tek ilçede toplanmasıyla gündeme gelen imar planı geçişleri, ıslah imar uygulamaları, belediye ruhsat ve ceza işlemleri gibi idari uyuşmazlıklarda avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) Sancaktepeli başvurucular adına dava açar ve süreci takip eder; yetkili yargı mercii İstanbul idare mahkemeleridir.",
    metaTitle: "Sancaktepe İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Sancaktepe'de idari işlemlerin iptali, imar uygulamalarına itiraz ve tazminat davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur. İmar, ruhsat, idari yaptırım ve kamu görevlisi uyuşmazlıklarında Sancaktepe'deki başvurucular için iptal ve tam yargı davası hazırlar; büro Beşiktaş/Sinanpaşa'dadır, görüşme WhatsApp veya telefonla ayarlanır.",
    highlightCards: [
      { title: "İptal Davası", description: "Hukuka aykırı bulunan idari işlemin iptali için İYUK m.7 uyarınca 60 günlük süre içinde başvuru." },
      { title: "İmar ve Islah Uygulamaları", description: "Eski belde yerleşimlerindeki ıslah imar planı, plan değişikliği ve yapı ruhsatı işlemlerine karşı dava." },
      { title: "Ruhsat ve Yaptırımlar", description: "İşyeri açma ve çalışma ruhsatı ret işlemleri ile idari para cezası kararlarına itiraz." },
      { title: "Tam Yargı", description: "İdarenin işlem veya eylemi nedeniyle doğan zararın tazmini için ön başvuru ve dava." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Eski belde yerleşimlerindeki ıslah imar planı işlemlerine karşı iptal davası ve itiraz başvuruları",
      "İlan edilmiş plan ve plan tadilatı kararlarının yargısal denetimi için dava sürecinin yönetilmesi",
      "İşyeri açma ve çalışma ruhsatının reddi, iptali veya işyerinin kapatılması işlemlerine itiraz",
      "Yapı ruhsatı, yıkım ve idari para cezası kararlarına karşı dava ile yürütmeyi durdurma talebi",
      "İdarenin eylemi veya işlemi nedeniyle doğan zarar için ön idari başvuru ve tam yargı davası",
      "Memur ve diğer kamu görevlilerinin disiplin, atama ve özlük hakkı uyuşmazlıkları",
    ],
    localParagraphs: [
      "Üç beldenin tüzel kişiliğinin kaldırılıp tek ilçe altında toplanması, farklı geçmişe sahip yerleşimlerin plan ve ruhsat işlemlerinin aynı idare tarafından yürütülmesi anlamına gelir. Sarıgazi, Yenidoğan ve Samandıra çevresindeki ıslah imar, plan değişikliği ve işyeri ruhsatı dosyaları bu nedenle idari yargıda sık gündeme gelebilen başlıklardır.",
      "İdari yargıda dava, kural olarak işlemin ilan veya tebliğ edildiği günden başlayan 60 gün içinde açılır (İYUK m.7); süre kaçırılırsa dava süre aşımından reddedilir. İlgili makama yapılan idari başvuru dava açma süresini durdurabildiğinden (İYUK m.11), tebliğ tarihinin belgelenmesi ilk adımdır.",
    ],
    faqs: [
      { question: "İmar planı değişikliğine karşı dava ne zaman açılmalı?", answer: "Plan değişikliğinin ilan edildiği veya ilgiliye tebliğ edildiği günden başlayan 60 günlük süre içinde idare mahkemesine iptal davası açılmalıdır (İYUK m.7). Süre kaçırılırsa dava süre aşımı nedeniyle reddedilir; bu yüzden ilan veya tebliğ tarihini belgelerle tespit etmek ilk adım olmalıdır." },
      { question: "İşyeri ruhsat başvurusu reddedilirse hangi yol izlenir?", answer: "Ret işleminin tebliğinden başlayan 60 gün içinde idare mahkemesine iptal davası açılabilir; istenirse önce belediyeye veya üst makama başvurulabilir ve bu başvuru süreyi durdurur. Dilekçede ret gerekçesinin mevzuata aykırılığı ve ruhsat şartlarının sağlandığı belgelerle gösterilir." },
      { question: "Islah imar planı kapsamındaki bir işleme itiraz edilebilir mi?", answer: "Evet, ıslah imar planı kapsamında yapılan plan, parselasyon veya tespit işlemi kesin ve yürütülebilir nitelikteyse 60 günlük süre içinde dava açılabilir. Dilekçeden önce işlemin hangi kurumca yapıldığı, tebliğ edilip edilmediği ve ilan tarihi araştırılır; gerekirse yürütmenin durdurulması da istenebilir." },
      { question: "İdari para cezası kararına hangi yolla karşı çıkılır?", answer: "Başvuru yolu ve süresi cezanın dayandığı kanuna göre değişir; bazı cezalarda idare mahkemesi, bazılarında sulh ceza hakimliği yetkilidir. Tebliğ evrakında yazılı başvuru yolu ve süre ilk olarak kontrol edilmeli, süre dolmadan gerekçeli itiraz veya dava dilekçesi sunulmalıdır." },
      { question: "İdarenin işlemi nedeniyle uğranılan zarar nasıl talep edilir?", answer: "Zararın tazmini için tam yargı davası açılır. İYUK m.13 uyarınca çoğu halde dava açmadan önce idareye yazılı başvuru yapılır; talep reddedilir ya da cevap verilmezse idare mahkemesinde dava açılabilir. Başvuru ve dava sürelerinin işlemin veya eylemin öğrenildiği tarihe göre hesaplanması gerekir." },
    ],
    howToTitle: "Sancaktepe'de İdari Yargıya Başvuru Hangi Sırayla Yapılır?",
    howToSteps: [
      { name: "İşlemin Tespiti", text: "Dava konusu belediye veya kurum işlemi, ilan ya da tebliğ tarihiyle birlikte belirlenir." },
      { name: "Süre Takvimi", text: "60 günlük sürenin başladığı gün hesaplanır; gerekiyorsa üst makama başvuru yapılarak süre durdurulur." },
      { name: "Dilekçe ve Ekler", text: "İşlemin örneği, plan paftası veya ruhsat evrakı eklenerek hukuka aykırılık gerekçeleri yazılır." },
      { name: "Yargılama", text: "İdare mahkemesi dosyayı inceler, gerekirse keşif ve bilirkişi raporu ile karar verir; kanun yolları saklıdır." },
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
      "Sarıgazi, Meclis ve Sancaktepe metro istasyonları çevresindeki konutlarda ve çarşı işyerlerinde yürüyen kira ilişkilerinde ödememe ihtarı, tahliye taahhüdü, ihtiyaç tahliyesi ve kira artışı uyuşmazlıklarında avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) hem kiraya verene hem kiracıya hukuki destek verir; sulh hukuk davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Sancaktepe Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Sancaktepe'de kiracı tahliyesi, kira sözleşmesi uyuşmazlıkları ve kira bedeli tespitinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kiraya veren ve kiracı Sancaktepeliler için ihtarname, tahliye ve kira tespiti süreçlerini yürüten Furkan Arıkan, 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve İstanbul Barosu'nda 72621 sicil numarasıyla kayıtlıdır. Büro Beşiktaş/Sinanpaşa'dadır; ön görüşme WhatsApp veya telefonla planlanır.",
    highlightCards: [
      { title: "Ödememe Nedeniyle Tahliye", description: "TBK m.315 uyarınca en az 30 günlük ihtar süresi ve sonrasındaki tahliye yolları." },
      { title: "İhtiyaç Tahliyesi", description: "Kiraya verenin kendisi veya yakınları için gerçek ve samimi konut ihtiyacına dayalı dava (TBK m.350)." },
      { title: "Kira Artışı ve Bedel Tespiti", description: "TBK m.344 çerçevesinde artış oranı sınırı ve yenilenen dönem için kira bedelinin belirlenmesi." },
      { title: "Taahhütle Tahliye", description: "Yazılı tahliye taahhüdüne dayanan, İİK m.272 kapsamındaki icra dairesi başvurusu." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kira borcunun ödenmemesi halinde ihtarname düzenlenmesi ve tahliye davası ya da icra takibi",
      "İhtiyaç gerekçesiyle konut tahliyesi davası ve kiracının tahliye taleplerine karşı savunma",
      "Tahliye taahhüdünün geçerlilik incelemesi ve icra dairesi aracılığıyla tahliye",
      "Yenilenen kira dönemi için kira bedelinin tespiti ve artış oranı uyuşmazlıkları",
      "Konut ve çatılı işyeri sözleşmelerinin hazırlanması, güvence bedeli ve teslim tutanağı düzenlemesi",
      "Haksız fesih, kiralananın hasarı ve eski hale getirme taleplerinden doğan tazminat davaları",
    ],
    localParagraphs: [
      "M5 hattının Çekmeköy-Samandıra Merkez bölümü 16 Mart 2024'te açılınca Sarıgazi, Meclis, Sancaktepe Şehir Hastanesi, Sancaktepe ve Samandıra Merkez istasyonları ilçe sınırları içinde hizmete girdi. İstasyonlara yürüme mesafesindeki konutlarda ve çarşı işyerlerinde kira bedelinin güncellenmesi, tahliye ve sözleşme yenileme konuları hem kiraya verenler hem kiracılar için önem taşır.",
      "Tahliye ve kira tespiti davaları sulh hukuk mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. Ödememe ihtarının noter aracılığıyla yapılması, tahliye taahhüdünün yazılı ve geçerli olması ile kira artışının TBK m.344 sınırlarına uyması dosyanın seyrini belirler.",
    ],
    faqs: [
      { question: "Kira ödenmezse kiracı hemen tahliye edilebilir mi?", answer: "Hayır, önce TBK m.315 uyarınca konut ve çatılı işyerlerinde en az 30 gün süre verilerek yazılı ihtar gönderilmelidir. Bu süre içinde kira ödenmezse kiraya veren sözleşmeyi feshedip tahliye davası açabilir veya ilamsız icra takibi başlatabilir (İİK m.269 ve devamı)." },
      { question: "İhtiyaç sebebiyle tahliye davası nasıl açılır?", answer: "TBK m.350'ye göre kiraya veren kendisi, eşi, altsoyu, üstsoyu veya bakmakla yükümlü olduğu kişi için konuta gerçek ve samimi bir ihtiyaç duyuyorsa dava açabilir. Kira sözleşmesi belirli süreliyse dava, sürenin bitiminden itibaren bir ay içinde açılmalıdır." },
      { question: "Kira artışı en fazla ne kadar olabilir?", answer: "Konut ve çatılı işyerlerinde yenilenen kira döneminde artış oranı, bir önceki yılın on iki aylık TÜFE ortalamasını aşamaz (TBK m.344). Beş yıldan uzun süren kira ilişkilerinde ise hâkim, yeni dönem için rayiç bedeli ve hakkaniyeti gözeterek bedeli belirleyebilir." },
      { question: "Tahliye taahhüdü mahkemeye gitmeden tahliye sağlar mı?", answer: "Kiracının kira başlangıcından sonra yazılı olarak verdiği geçerli bir tahliye taahhüdü varsa kiraya veren İİK m.272 uyarınca icra dairesinden tahliye isteyebilir. Taahhüdün irade fesadı taşımaması, tahliye tarihinin belli olması ve süresi içinde başvurulması aranır; kiracı itiraz ederse konu icra mahkemesinde incelenir." },
      { question: "Kira bedeli tespit davası ne zaman açılır?", answer: "Taraflar yenilenen dönem bedelinde anlaşamazsa ya da mevcut bedel rayicin belirgin biçimde gerisinde kalırsa TBK m.344 çerçevesinde sulh hukuk mahkemesinden bedelin tespiti istenebilir. Mahkeme emsal kiraları, taşınmazın konumunu ve bilirkişi raporunu dikkate alarak karar verir." },
    ],
    howToTitle: "Sancaktepe'de Tahliye Talebi Hangi Sırayla İlerler?",
    howToSteps: [
      { name: "Gerekçenin Seçimi", text: "Ödememe, ihtiyaç, taahhüt veya süre bitimi gibi tahliye sebebi belirlenir." },
      { name: "İhtar ve Belgeler", text: "Sözleşme, banka dekontları, noter ihtarnamesi ve varsa taahhütname toplanır." },
      { name: "Mahkeme veya İcra", text: "Sebebe göre Kartal'daki Anadolu Adliyesi'nde sulh hukuk mahkemesine ya da icra dairesine başvurulur." },
      { name: "Teslim", text: "Karar veya tahliye emri kesinleşince taşınmaz tutanakla teslim alınır." },
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
      "Meclis Mahallesi'ndeki Sancaktepe İlçe Mal Müdürlüğü nezdinde işlem gören esnaf, şirket ve gayrimenkul geliri bulunan mükelleflerin vergi ve ceza ihbarnamelerine, inceleme ve tarhiyat işlemlerine karşı avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) uzlaşma başvurusu ve dava süreçlerini yürütür; yetkili yargı mercii İstanbul vergi mahkemeleridir.",
    metaTitle: "Sancaktepe Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Sancaktepe'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, MEF Üniversitesi Hukuk Fakültesi'nin 2019 mezunudur ve İstanbul Barosu'nda 72621 sicil numarasıyla kayıtlıdır. Sancaktepe'deki esnaf, şirket ve kira geliri bulunan mükelleflerin ihbarname, inceleme, uzlaşma ve vergi mahkemesi aşamalarında temsilini üstlenir; büro Beşiktaş/Sinanpaşa'dadır.",
    highlightCards: [
      { title: "Tarhiyat İşlemleri", description: "Re'sen, ikmalen veya idarece yapılan tarhiyata karşı vergi mahkemesinde dava." },
      { title: "Vergi Ziyaı ve Usulsüzlük Cezaları", description: "Ceza ihbarnamelerinin gerekçe ve miktar yönünden incelenmesi." },
      { title: "Uzlaşma", description: "Uzlaşma komisyonu önünde temsil ve süre takibi." },
      { title: "Esnaf ve Gayrimenkul Geliri", description: "Gelir vergisi mükellefi esnaf ile kira geliri beyan eden mükelleflerin inceleme süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İhbarnamenin tebliğ ve içerik kontrolü, ardından vergi mahkemesinde iptal davası",
      "Uzlaşma talebinin süresi içinde yapılması ve uzlaşma görüşmelerinde temsil",
      "Vergi incelemesi ve vergi tekniği raporuna karşı savunma hazırlanması",
      "Ödeme emrine itiraz davası ile tecil ve taksitlendirme başvurularında danışmanlık",
      "Esnaf ve küçük işletme mükelleflerinin gelir vergisi uyuşmazlıklarında danışmanlık",
      "Kira gelirinin beyanı ve gayrimenkul sermaye iradı kaynaklı tarhiyat ile ceza uyuşmazlıkları",
    ],
    localParagraphs: [
      "Sancaktepe'de ayrı bir vergi dairesi müdürlüğü bulunmamaktadır; ilçedeki mükelleflerin vergisel işlemleri Meclis Mahallesi'ndeki Sancaktepe İlçe Mal Müdürlüğü aracılığıyla yürütülür. Bu nedenle ihbarnamenin hangi birimce düzenlendiği ve tebliğin kime yapıldığı gibi unsurlar başvuru sürecinde dikkatle incelenir.",
      "İhbarnamelerde vergi mahkemesine başvuru süresi tebliği izleyen günden itibaren 30 gündür (İYUK m.7); davaya İstanbul vergi mahkemeleri bakar. Ödeme emri bakımından süre bundan daha kısadır, bu yüzden ödeme emrini alan mükellefin tebliğ tarihini hemen belgelemesi gerekir.",
    ],
    faqs: [
      { question: "Vergi ve ceza ihbarnamesine karşı dava süresi nedir?", answer: "Vergi mahkemesinde dava, ihbarnamenin kendisine tebliğ edildiği günden başlayarak 30 gün içinde açılır (İYUK m.7). Bu süre hak düşürücüdür; kaçırılırsa tarhiyat kesinleşir. Bu yüzden tebliğ zarfı veya e-tebligat kaydı saklanmalı, uzlaşma düşünülüyorsa iki sürenin birlikte takip edilmesi gerekir." },
      { question: "Uzlaşma başvurusu yapmak dava açma imkânını kapatır mı?", answer: "Hayır, uzlaşma talep etmek dava hakkını kaybettirmez; görüşmeler sonuçsuz kalırsa süreden arta kalan zaman içinde vergi mahkemesine başvurulabilir. Buna karşılık uzlaşma sağlanır ve tutanak imzalanırsa belirlenen tutar kesinleşir, o tutar bakımından artık dava açılamaz; karar vermeden önce rakamlar dikkatle tartılmalıdır." },
      { question: "Sancaktepe'de vergi işlemleri hangi birim üzerinden yürütülür?", answer: "İlçede bağımsız bir vergi dairesi müdürlüğü bulunmadığından mükelleflerin işlemleri Meclis Mahallesi'ndeki Sancaktepe İlçe Mal Müdürlüğü üzerinden yürütülür. Uyuşmazlık çıkarsa dava, ihbarnameyi düzenleyen vergi idaresine karşı İstanbul vergi mahkemelerinde açılır; dilekçede işlemi yapan birim açıkça gösterilir." },
      { question: "Kira geliri beyan edilmezse hangi sonuçlar doğabilir?", answer: "Gayrimenkul sermaye iradı olarak beyan edilmesi gereken kira geliri beyan edilmezse idare re'sen veya ikmalen vergi tarh edebilir ve vergi ziyaı cezası kesebilir. Bu işlemlere karşı süresi içinde vergi mahkemesinde dava açılabilir; beyan yükümlülüğü ve istisna sınırları somut dosyada ayrıca incelenir." },
      { question: "Vergi incelemesi başladığında mükellef ne yapmalı?", answer: "İnceleme elemanının görev belgesi ve yazısı kontrol edilmeli, istenen defter ve belgeler süresi içinde sunulmalı ve rapora karşı savunma hakkı kullanılmalıdır. İnceleme sonunda düzenlenen vergi tekniği raporu ve ihbarnameler, dava ve uzlaşma değerlendirmesinin dayanağıdır; yazılı bildirimler saklanmalıdır." },
    ],
    howToTitle: "Sancaktepe'de Vergi Uyuşmazlığı Hangi Adımlarla Yürütülür?",
    howToSteps: [
      { name: "İhbarname İncelemesi", text: "Tarhiyatın dayanağı, dönemi, tutarı ve tebliğ tarihi kontrol edilir." },
      { name: "Yol Haritası", text: "Uzlaşma talebi ile doğrudan dava arasındaki tercih, süreler dikkate alınarak yapılır." },
      { name: "Başvuru", text: "30 günlük süre içinde uzlaşma talep edilir veya vergi mahkemesine dava dilekçesi sunulur." },
      { name: "Karar veya Tutanak", text: "Mahkeme kararı ya da uzlaşma tutanağıyla uyuşmazlık sonuçlanır." },
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
      "Sarıgazi, Samandıra ve Yenidoğan'daki küçük ve orta ölçekli işletmeler ile bireyler arasında doğan satış, hizmet ve eser sözleşmesi ihlalleri, alacak ve tazminat taleplerinde avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) Sancaktepeli taraflara dava ve icra aşamalarında hukuki temsil sağlar; uyuşmazlıklar Kartal'daki İstanbul Anadolu Adliyesi'nde çözülür.",
    metaTitle: "Sancaktepe Borçlar Hukuku Avukatı",
    metaDescription:
      "Sancaktepe'de ticari sözleşmeler, esnaf ve işletmeler arası alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Sözleşme ve alacak dosyalarında Sancaktepe'deki bireylere ve işletmelere hizmet veren Furkan Arıkan, MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olmuş, İstanbul Barosu'nda 72621 sicil numarasıyla kayıtlı bir avukattır. Büro Beşiktaş/Sinanpaşa'dadır; ihtarname, sözleşme incelemesi, arabuluculuk hazırlığı ve dava aşamalarında temsil sağlar.",
    highlightCards: [
      { title: "Sözleşmeye Aykırılık", description: "TBK m.112 uyarınca borcun hiç ya da gereği gibi ifa edilmemesinden doğan zararın talebi." },
      { title: "Alacak ve Senet Davaları", description: "Fatura, cari hesap, borç ikrarı ve senede dayanan alacakların dava veya takip yoluyla tahsili." },
      { title: "Ticari Uyuşmazlıklarda Arabuluculuk", description: "Para alacağı ve tazminat içeren ticari davalarda TTK m.5/A uyarınca dava şartı arabuluculuğa hazırlık." },
      { title: "Sözleşme Hazırlama", description: "Satış, hizmet ve işyeri sözleşmelerindeki riskli maddelerin imzadan önce incelenmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sözleşmenin ifa edilmemesi veya gecikmesi halinde tazminat ve ifa davası açılması",
      "Fatura, cari hesap ve borç ikrarına dayanan alacak davası ile icra takibi",
      "Ayıplı mal veya eserde sözleşmeden dönme, bedel indirimi ve onarım talepleri",
      "Cezai şart ve teminat içeren sözleşmelerde indirim ve tahsil uyuşmazlıkları",
      "Haksız fiil ve sebepsiz zenginleşmeden doğan iade ve tazminat davaları",
      "Sözleşme taslaklarının hazırlanması, ihtarname düzenlenmesi ve zamanaşımı kontrolü",
    ],
    localParagraphs: [
      "Sarıgazi, Samandıra ve Yenidoğan merkezlerindeki çarşı esnafı ile ilçede faaliyet gösteren işletmeler arasında yapılan vadeli satış, hizmet ve tedarik ilişkilerinde ödenmeyen fatura bedeli, gecikmiş teslim ve sözleşmenin yazılı olmayan kısmının ispatı gibi konular gündeme gelebilir.",
      "Davalar Kartal'daki İstanbul Anadolu Adliyesi'nde, niteliğine göre asliye hukuk veya asliye ticaret mahkemesinde açılır. Konusu para alacağı veya tazminat olan ticari davalarda dava açmadan önce arabulucuya başvurulması dava şartıdır (TTK m.5/A).",
    ],
    faqs: [
      { question: "Sözleşmeyi ihlal eden taraftan neler istenebilir?", answer: "Borcun hiç veya gereği gibi ifa edilmemesi halinde alacaklı, TBK m.112 uyarınca ifayı ve gecikme zararını isteyebilir; uygun ek süre verip sözleşmeden dönme ve zararın giderilmesini de talep edebilir. Hangi yolun seçileceği sözleşmenin türüne, temerrüt durumuna ve delillere göre belirlenir." },
      { question: "Ticari alacak davasından önce arabuluculuk şart mı?", answer: "Konusu para alacağı veya tazminat olan ticari davalarda dava açmadan önce arabulucuya başvurmak TTK m.5/A uyarınca dava şartıdır; son tutanak dilekçeye eklenmezse dava usulden reddedilir. Ticari nitelik taşımayan alacak davalarında ise arabuluculuk her zaman zorunlu değildir." },
      { question: "Zamanaşımına uğramış alacak istenebilir mi?", answer: "Alacak dava edilebilir; ancak borçlu süresinde zamanaşımı itirazında bulunursa mahkeme talebi reddeder, çünkü hâkim zamanaşımını kendiliğinden dikkate alamaz (TBK m.161). Genel süre on yıldır (TBK m.146); kira bedeli ve bazı ücret alacaklarında beş yıllık kısa süre öngörülmüştür (TBK m.147)." },
      { question: "Cezai şart fazla yüksekse indirilebilir mi?", answer: "Evet, TBK m.182/3 hâkime aşırı bulduğu cezai şartı indirme yetkisi verir. Ancak tacirler arasındaki ticari işlerde bu yetki ticari kanun hükümleri nedeniyle sınırlı olabilir; bu yüzden sözleşme tarafların sıfatına ve işin niteliğine göre ayrıca değerlendirilmelidir." },
      { question: "İşyeri kira sözleşmesi erken feshedilirse ne olur?", answer: "Haklı bir sebep olmadan süresinden önce sona erdirilen kira sözleşmesinde fesheden taraf diğerinin zararını tazmin etmekle yükümlü olabilir. Tazminat; sözleşmenin kalan süresi, kiralananın yeniden kiraya verilme imkânı ve kira bedeli gibi unsurlara göre belirlenir; fesih ve cezai şart maddeleri de belirleyicidir." },
    ],
    howToTitle: "Sancaktepe'de Alacak ve Tazminat Davası Hangi Sırayla Açılır?",
    howToSteps: [
      { name: "Belgelerin Derlenmesi", text: "Sözleşme, fatura, irsaliye, yazışma ve ödeme dekontları tarih sırasına göre derlenir." },
      { name: "İhtar ve Arabuluculuk", text: "Gerekirse noter ihtarnamesi gönderilir; ticari davalarda arabulucuya başvurulur." },
      { name: "Dava Dilekçesi", text: "Yetkili mahkemeye talepler, deliller ve hukuki dayanaklarla dilekçe sunulur." },
      { name: "Karar Sonrası", text: "Karar kesinleştiğinde tahsil için ilamlı icra takibi başlatılır." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];

export const sancaktepeServices: PseoService[] = [...sancaktepeBaseServices, sancaktepeMiras];
