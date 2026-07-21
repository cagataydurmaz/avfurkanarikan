import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const umraniyeServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "umraniye-avukat",
    name: "Ümraniye Avukat",
    heroTitle: "Ümraniye Avukat",
    heroSubtitle:
      "1987 yılında Üsküdar'dan ayrılarak ilçe statüsü kazanan ve TÜİK'in 2025 verilerine göre 728.913 nüfusuyla İstanbul'un dördüncü kalabalık ilçesi olan Ümraniye'de avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti vermektedir; ilçenin 2013'te kapatılan kendi adliyesinin ardından dava ve icra dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülmektedir.",
    metaTitle: "Ümraniye Avukat",
    metaDescription:
      "Ümraniye'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuş bir avukattır. Doğusunda Sancaktepe, güneyinde Ataşehir, batısında Üsküdar, kuzeyinde ise Çekmeköy ve Beykoz ile komşu olan, yaklaşık 45 km²'lik alanda 30'u aşkın mahalleyi barındıran Ümraniye'de ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Sanayi sitesi, konut ve işyeri niteliğindeki taşınmazlarda uyuşmazlık takibi." },
      { title: "İş Hukuku", description: "İmalat ve hizmet sektörü çalışanlarının işçilik alacakları ve işe iade süreçleri." },
      { title: "İcra Hukuku", description: "Alacak takibi ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "İmar ve idari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı ve cezası uyuşmazlıkları." },
      { title: "Borçlar Hukuku", description: "Ticari sözleşme ve alacak kaynaklı davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Sanayi sitesi, konut ve işyeri niteliğindeki taşınmazlara ilişkin gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İmar uygulamaları ve idari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Ticari sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "1963 yılında belediye teşkilatına kavuşan ve 1987'de Üsküdar'dan ayrılarak ilçe statüsü kazanan Ümraniye, TÜİK'in 2025 Adrese Dayalı Nüfus Kayıt Sistemi sonuçlarına göre 728.913 kişilik nüfusuyla İstanbul'un dördüncü kalabalık ilçesidir; Yukarı Dudullu'daki İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi başta olmak üzere sanayi ile konut dokusunun iç içe geçtiği bir yerleşim yapısına sahiptir.",
      "İlçenin kendi adliyesi 2013 yılının Şubat ayında kapatılarak Kartal'daki İstanbul Anadolu Adliyesi'ne bağlanmıştır; vergisel işlemler Yamanevler Mahallesi'ndeki Ümraniye Vergi Dairesi Müdürlüğü üzerinden yürütülür, ulaşımda ise M5 metro hattının dokuz istasyonu ile 2023'te açılan M8 hattının beş istasyonu ilçe sınırları içinde kalır.",
    ],
    faqs: [
      { question: "Ümraniye'deki davalara hangi adliye bakıyor?", answer: "Ümraniye'nin kendi adliyesi 2013 yılının Şubat ayında kapatılarak Kartal'daki İstanbul Anadolu Adliyesi'ne bağlanmıştır; ilçedeki tüm dava ve icra dosyaları bu adliyede görülür." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Ümraniye'de mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Ümraniye'deki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Ümraniye'de vergi dairesi nerede?", answer: "Ümraniye Vergi Dairesi Müdürlüğü, Yamanevler Mahallesi'nde hizmet vermektedir." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Ümraniye'ye hangi metro hatlarıyla ulaşılır?", answer: "Üsküdar-Çekmeköy güzergahındaki M5 metrosu ile Bostancı-Dudullu güzergahındaki M8 metrosunun ilçe sınırları içindeki istasyonlarından ulaşılabilir." },
    ],
    howToTitle: "Ümraniye'de Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Ümraniye Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "umraniye-bosanma-avukati",
    name: "Ümraniye Boşanma Avukatı",
    heroTitle: "Ümraniye Boşanma Avukatı",
    heroSubtitle:
      "TÜİK verilerine göre İstanbul'un dördüncü kalabalık ilçesi olan ve İstiklal, Atatürk gibi yoğun apartman yerleşimine sahip mahalleleri barındıran Ümraniye'de anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal paylaşımı süreçlerinde avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) temsil sağlamaktadır; aile mahkemesi davaları, ilçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Ümraniye Boşanma Avukatı",
    metaDescription:
      "Ümraniye'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, Ümraniye'deki ailelerin boşanma, velayet ve nafaka süreçlerinde temsilini üstlenmektedir.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Mal Rejimi Tasfiyesi", description: "Apartman ve site nitelikli konutların değerlemeyle paylaşımı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Konut ve işyeri niteliğindeki taşınmazların dahil olduğu mal rejimi tasfiyesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "TÜİK verilerine göre Ümraniye'nin en kalabalık mahallesi olan İstiklal başta olmak üzere yoğun apartman ve site yerleşimine sahip ilçede, boşanma sürecindeki eşler için ortak konutun akıbeti ve ev eşyalarının paylaşımı sıklıkla gündeme gelen konular arasındadır.",
      "Boşanma, velayet ve nafaka talepleri, Ümraniye'nin kendi adliyesi 2013'te kapatılıp Kartal'daki İstanbul Anadolu Adliyesi'ne bağlandığından bu adliyedeki aile mahkemelerinde görülür; anlaşmalı süreçte protokolün eksiksizliği, çekişmeli süreçte ise ileri sürülen delillerin gücü sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Ümraniye'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki aile mahkemesine başvurulur." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir." },
      { question: "Ortak konut kiracı ise boşanma sürecini nasıl etkiler?", answer: "Kira sözleşmesinin tarafı olma durumu ve tahliye talepleri ayrıca değerlendirilir, konut hakkına ilişkin tedbir aile mahkemesinden istenebilir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir." },
    ],
    howToTitle: "Ümraniye'de Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "umraniye-ceza-avukati",
    name: "Ümraniye Ceza Avukatı",
    heroTitle: "Ümraniye Ceza Avukatı",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan avukat Furkan Arıkan, gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında Ümraniye'deki şüpheli ve sanıklara müdafilik hizmeti sunar; ilçe sınırlarında E ve T tipi kapalı ceza infaz kurumları bulunmakla birlikte dava dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülmektedir.",
    metaTitle: "Ümraniye Ceza Avukatı",
    metaDescription:
      "Ümraniye'de soruşturma, kovuşturma, tutukluluğa itiraz ve ceza yargılamasının tüm aşamalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nin 2019 mezunu olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, ceza yargılamasının soruşturma ve kovuşturma aşamalarında Ümraniye'deki müvekkillerine müdafilik hizmeti vermektedir.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "İnfaz Hukuku", description: "Ceza infaz kurumundaki hükümlülerin infaza ilişkin başvuruları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Ceza infaz kurumundaki hükümlülerin infaz hukukuna ilişkin başvuruları",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "Ümraniye sınırları içinde E ve T tipi kapalı ceza infaz kurumları ile 2014 yılından bu yana hizmet veren bir çocuk eğitim evi bulunmaktadır; bu durum infaz hukukuna ilişkin başvuruların ilçede sık karşılaşılan konular arasında yer almasına yol açmaktadır.",
      "Soruşturma ve kovuşturma dosyaları, ilçe adliyesinin 2013 yılında kapatılmasının ardından Kartal'daki İstanbul Anadolu Adliyesi'nde yürütülmektedir; gözaltı sürecinin başladığı andan itibaren şüphelinin müdafi ile görüşme hakkı doğar.",
    ],
    faqs: [
      { question: "Ümraniye'de bir ceza davası hangi adliyede görülür?", answer: "İlçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir ancak müdafi bulundurmak önerilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, sulh ceza hakimliğine itiraz edilebilir." },
      { question: "Ceza infaz kurumundaki bir hükümlü için hangi başvurular yapılabilir?", answer: "Koşullu salıverilme, denetimli serbestlik ve infazın ertelenmesi gibi taleplere ilişkin başvurular yapılabilir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Yargılamaya kaldığı yerden devam edilir." },
    ],
    howToTitle: "Ümraniye'de Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "umraniye-gayrimenkul-avukati",
    name: "Ümraniye Gayrimenkul Avukatı",
    heroTitle: "Ümraniye Gayrimenkul Avukatı",
    heroSubtitle:
      "Yukarı Dudullu Mahallesi'ndeki İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi'nin yanı sıra yoğun konut yerleşimine sahip Ümraniye'de tapu, kat mülkiyeti ve kira uyuşmazlıklarında avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) danışmanlık sağlar; davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Ümraniye Gayrimenkul Avukatı",
    metaDescription:
      "Ümraniye'de tapu iptali, kat mülkiyeti, sanayi sitesi taşınmazları ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Gayrimenkul hukuku alanında Ümraniye'deki müvekkillerine danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Sanayi Sitesi Taşınmazları", description: "İMES ve Dudullu OSB'deki işyeri/depo niteliğindeki taşınmazların alım-satım ve kira süreçleri." },
      { title: "Kat Mülkiyeti Uyuşmazlıkları", description: "Site yönetimi, ortak gider ve karar uyuşmazlıklarının çözümü." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Kentsel Dönüşüm", description: "Riskli yapı tespiti ve dönüşüm süreçlerinde hak sahipliği takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İMES Sanayi Sitesi ve Dudullu OSB'deki işyeri taşınmazlarının tapu ve imar durumu incelemesi",
      "Kat mülkiyeti ve site yönetimi uyuşmazlıklarına ilişkin danışmanlık",
      "Tapu iptali ve tescil davalarının açılması",
      "Kentsel dönüşüm kapsamındaki hak sahipliği ve değer tespiti süreçleri",
      "Kira bedeli tespiti ve uyarlama davaları",
      "Taşınmaz satış vaadi sözleşmelerinin hukuki incelemesi",
    ],
    localParagraphs: [
      "Yukarı Dudullu Mahallesi'ndeki İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi, Ümraniye'nin sanayi ve ticari gayrimenkul dokusunu oluşturmaktadır; bu bölgelerdeki işyeri ve depo niteliğindeki taşınmazların alım-satım ve kiralama işlemlerinde tapu kaydı ile imar durumunun birlikte incelenmesi önem taşır.",
      "Tapu ve imar kaynaklı uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Ümraniye'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    ],
    faqs: [
      { question: "Sanayi sitesindeki bir işyerini satın alırken nelere dikkat edilmeli?", answer: "Tapu kaydı, kat irtifakı/mülkiyeti durumu ve varsa kooperatif işletme yönetmeliği incelenmelidir." },
      { question: "Ümraniye'de gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi'nde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir." },
      { question: "Site yönetimiyle yaşanan ortak gider uyuşmazlığında ne yapılabilir?", answer: "Öncelikle yönetim planı ve genel kurul kararları incelenir, gerekirse dava yoluna gidilebilir." },
      { question: "Kentsel dönüşümde hak sahibinin onayı şart mı?", answer: "Riskli yapı tespiti sonrası süreç kanunda öngörülen çoğunluk ve usul kurallarına göre ilerler." },
    ],
    howToTitle: "Ümraniye'de Tapu Uyuşmazlığı Süreci Nasıl İşler?",
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
    urlSlug: "umraniye-icra-avukati",
    name: "Ümraniye İcra Avukatı",
    heroTitle: "Ümraniye İcra Avukatı",
    heroSubtitle:
      "İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi'ndeki işletmeler arasındaki ticari alacaklardan bireysel alacaklara uzanan icra takiplerinde İstanbul Barosu sicil no 72621 ile kayıtlı avukat Furkan Arıkan (MEF Üniversitesi Hukuk Fakültesi, 2019) Ümraniye'deki taraflara temsil sağlar; takipler Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki icra daireleri üzerinden yürütülür.",
    metaTitle: "Ümraniye İcra Avukatı",
    metaDescription:
      "Ümraniye'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İstanbul Barosu sicil no 72621 ile kayıtlı avukat Furkan Arıkan (MEF Üniversitesi Hukuk Fakültesi, 2019), icra ve iflas hukuku kapsamında Ümraniye'deki alacaklı ve borçlu taraflara danışmanlık verir.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "Sanayi Sitesi Alacakları", description: "İMES ve Dudullu OSB'deki işletmelerden doğan fatura ve senet alacaklarının takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "Sanayi sitesindeki işletmeler arası ticari alacakların icra yoluyla tahsili",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi'nde faaliyet gösteren imalat ve tedarik işletmeleri arasındaki mal/hizmet alışverişinden doğan fatura ve senet alacakları, Ümraniye'de icra takibine sık konu olan alacak türleri arasındadır.",
      "Bu takiplere ilişkin uyuşmazlıklar, Ümraniye'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki icra daireleri ve icra mahkemelerinde görülür; ödeme emrine itiraz süresi tebliğden itibaren 7 gündür.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "Sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlanabilir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Tebliğden itibaren 7 gündür." },
      { question: "Sanayi sitesindeki bir işletmeden alacak nasıl tahsil edilir?", answer: "Fatura ve varsa sözleşme belgeleri toplanarak yetkili icra dairesinde takip dosyası açılır." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür." },
    ],
    howToTitle: "Ümraniye'de İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "umraniye-idare-avukati",
    name: "Ümraniye İdare Avukatı",
    heroTitle: "Ümraniye İdare Avukatı",
    heroSubtitle:
      "İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi'ndeki işyeri açma/çalışma ruhsatı uyuşmazlıklarından, 1960'lardan bu yana çarpık biçimde yapılaşan bölgelerdeki ıslah imar planı işlemlerine kadar geniş bir alanda avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) Ümraniye'deki müvekkillerine idari dava desteği sunar; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Ümraniye İdare Avukatı",
    metaDescription:
      "Ümraniye'de idari işlemlerin iptali, imar uygulamalarına itiraz ve tazminat davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nin 2019 mezunu olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, idari işlemlerin iptali ve tam yargı davalarında Ümraniye'deki müvekkillerine danışmanlık sağlamaktadır.",
    highlightCards: [
      { title: "İptal Davası Süreci", description: "Hukuka aykırı idari işlemlere karşı yargı yoluna başvurulması." },
      { title: "Sanayi Sitesi Ruhsat İşlemleri", description: "İMES ve Dudullu OSB'deki işyeri açma/çalışma ruhsatı uyuşmazlıkları." },
      { title: "Islah İmar Uygulamaları", description: "Çarpık yapılaşan bölgelerdeki ıslah imar planı ve tapu tahsis işlemlerine itiraz." },
      { title: "İdari Yaptırımlara İtiraz", description: "Belediye ve diğer kurumların idari para cezalarına karşı dava." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İMES Sanayi Sitesi ve Dudullu OSB'deki işyeri açma ve çalışma ruhsatı ret işlemlerine itiraz",
      "Islah imar planı ve tapu tahsis belgesi işlemlerine ilişkin idari dava süreçleri",
      "Belediye imar planı ve plan değişikliği kararlarına karşı iptal davası açılması",
      "İdarenin işlem veya eyleminden kaynaklanan zararlar için tam yargı davası açılması",
      "İdari para cezalarına karşı dava süreçlerinin yürütülmesi",
      "Kamu görevlisi özlük haklarına ilişkin idari uyuşmazlıklar",
    ],
    localParagraphs: [
      "1960 yılında Organize Sanayi Bölgesi ilan edilmesinin ardından yoğun iç göç alan ve hızla yapılaşan Ümraniye'de, geçmişte plansız gelişen yerleşim alanlarına yönelik ıslah imar planı işlemleri ile İMES ve Dudullu OSB'deki işyerlerinin ruhsatlandırma süreçleri, ilçedeki idari uyuşmazlıkların önemli bir bölümünü oluşturmaktadır.",
      "Bu davalara İstanbul idare mahkemelerinde bakılmakta olup dava açma süresi, kural olarak işlemin tebliğ veya ilan edildiği tarihten başlayan 60 gündür; bu süre içinde dava açılmazsa hak düşümü söz konusu olur.",
    ],
    faqs: [
      { question: "Ümraniye'de imar planı değişikliğine ne zaman itiraz edilmeli?", answer: "Planın ilan edildiği veya işlemin tebliğ edildiği tarihten itibaren 60 gün içinde idare mahkemesinde dava açılması gerekir; bu süre geçirildiğinde dava hakkı düşer." },
      { question: "Sanayi sitesindeki bir işyerinin ruhsat başvurusu reddedilirse ne yapılabilir?", answer: "Ret işlemine karşı idare mahkemesinde iptal davası açılabilir." },
      { question: "Islah imar planı kapsamındaki bir tespite itiraz mümkün mü?", answer: "Evet, ilgili idari işleme karşı yasal süresi içinde dava yoluna gidilebilir." },
      { question: "Belediyenin kestiği idari para cezasına nasıl itiraz edilir?", answer: "Cezanın tebliğinden itibaren yasal süre içinde idare mahkemesinde dava açılarak itiraz edilebilir." },
      { question: "İdarenin bir işlemi nedeniyle zarara uğrayan ne yapabilir?", answer: "Tam yargı davası açarak uğradığı zararın tazminini talep edebilir." },
    ],
    howToTitle: "Ümraniye'de İdari Dava Süreci Nasıl Yürütülür?",
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
    urlSlug: "umraniye-is-hukuku-avukati",
    name: "Ümraniye İş Hukuku Avukatı",
    heroTitle: "Ümraniye İş Hukuku Avukatı",
    heroSubtitle:
      "Elmalıkent Mahallesi'ndeki Ümraniye Eğitim ve Araştırma Hastanesi ile İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi'ndeki imalat işletmelerinde çalışanların kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerinde İstanbul Barosu sicil no 72621 ile kayıtlı avukat Furkan Arıkan temsil sağlar; iş mahkemesi davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Ümraniye İş Hukuku Avukatı",
    metaDescription:
      "Ümraniye'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan İstanbul Barosu'nda 72621 sicil numarasıyla kayıtlı olup 2019'da MEF Üniversitesi Hukuk Fakültesi'ni tamamlamıştır; iş hukuku alanında Ümraniye'deki çalışan ve işverenlere danışmanlık vermektedir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Sanayi ve Sağlık Sektörü Çalışanları", description: "İMES/Dudullu OSB'deki imalat işletmeleri ile hastane personelinin işçilik hakları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Sanayi sitesi ve OSB'deki imalat işletmesi çalışanlarının işçilik alacaklarının tahsili",
      "Fazla mesai ve yıllık izin ücreti gibi diğer işçilik alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Elmalıkent Mahallesi'ndeki Ümraniye Eğitim ve Araştırma Hastanesi ile Yukarı Dudullu ve Esenşehir çevresindeki İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi'nde istihdam edilen çalışanlar, Ümraniye'de işçilik alacağı ve işe iade uyuşmazlıklarının önemli bir bölümünü oluşturmaktadır.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları, Ümraniye'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki iş mahkemesinde görülür.",
    ],
    faqs: [
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Çalışma süresi ve son brüt (giydirilmiş) ücret esas alınarak hesaplanır." },
      { question: "Ümraniye'de iş mahkemesi nerededir?", answer: "İlçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir." },
      { question: "Sanayi sitesinde çalışanların fazla mesai hakkı nasıl ispatlanır?", answer: "Puantaj kayıtları, bordrolar ve tanık beyanıyla ispat edilebilir." },
      { question: "İşe iade davası açmadan önce arabuluculuğa gitmek zorunlu mu?", answer: "Evet, dava şartı olarak öncelikle arabulucuya başvurulması gerekir." },
    ],
    howToTitle: "Ümraniye'de İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "umraniye-kira-tahliye-avukati",
    name: "Ümraniye Kira ve Tahliye Avukatı",
    heroTitle: "Ümraniye Kira ve Tahliye Avukatı",
    heroSubtitle:
      "TÜİK'in 2025 verilerine göre 728.913 nüfusuyla İstanbul'un dördüncü kalabalık ilçesi olan Ümraniye'de, M5 ve M8 metro hatlarının istasyonlarına yakın mahallelerdeki konut ve işyeri kiralamalarında, tahliye ve kira bedeli tespiti uyuşmazlıklarında avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) destek sağlar; sulh hukuk mahkemesi davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Ümraniye Kira ve Tahliye Avukatı",
    metaDescription:
      "Ümraniye'de kiracı tahliyesi, kira sözleşmesi uyuşmazlıkları ve kira bedeli tespitinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kira hukuku uyuşmazlıklarında Ümraniye'deki kiracı ve kiraya verenlere destek olan Furkan Arıkan, 2019 MEF Üniversitesi Hukuk Fakültesi mezunu olup İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır.",
    highlightCards: [
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "İşyeri Kiralamaları", description: "Sanayi sitesi ve cadde üzeri işyerlerinin kira uyuşmazlıkları." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Sanayi sitesi ve cadde üzerindeki işyerlerinin kira sözleşmelerinin hazırlanması ve incelenmesi",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "TÜİK'in 2025 verilerine göre 728.913 nüfusuyla İstanbul'un dördüncü kalabalık ilçesi olan Ümraniye'de, M5 hattının Çarşı ve Yamanevler, M8 hattının ise Parseller gibi istasyonlarına yakın mahallelerdeki konutlarda kiracı talebi yüksek seyretmektedir.",
      "Tahliye ve kira bedeli tespiti davalarına, Ümraniye'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki sulh hukuk mahkemesinde bakılır; yazılı ve eksiksiz bir kira sözleşmesi uyuşmazlık halinde ispat kolaylığı sağlar.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Ümraniye'de tahliye davası hangi mahkemede görülür?", answer: "İstanbul Anadolu Adliyesi bünyesindeki sulh hukuk mahkemesinde görülür." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
      { question: "Metro istasyonuna yakın bir konutun kira bedeli nasıl güncellenir?", answer: "Sözleşmede belirlenen artış oranı veya yasal sınırlar çerçevesinde güncelleme yapılabilir; uyuşmazlık halinde tespit davası açılabilir." },
    ],
    howToTitle: "Ümraniye'de Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "umraniye-vergi-avukati",
    name: "Ümraniye Vergi Avukatı",
    heroTitle: "Ümraniye Vergi Avukatı",
    heroSubtitle:
      "Yamanevler Mahallesi'ndeki Ümraniye Vergi Dairesi Müdürlüğü'ne bağlı mükelleflerin vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde İstanbul Barosu sicil no 72621 ile kayıtlı avukat Furkan Arıkan temsil sağlar; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Ümraniye Vergi Avukatı",
    metaDescription:
      "Ümraniye'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukat olarak Ümraniye'deki mükelleflere vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda danışmanlık vermektedir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Sanayi Sitesi Mükellefleri", description: "İMES ve Dudullu OSB'deki imalat işletmelerinin kurumlar vergisi incelemeleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Sanayi sitesi ve OSB'deki imalat işletmelerinin kurumlar vergisi inceleme süreçlerinde danışmanlık",
      "Gayrimenkul kira gelirlerinin beyanına ilişkin uyuşmazlıklarda destek",
    ],
    localParagraphs: [
      "Ümraniye mükelleflerinin vergisel işlemleri, Yamanevler Mahallesi Dr. Fazıl Küçük Caddesi'ndeki Ümraniye Vergi Dairesi Müdürlüğü üzerinden yürütülür; İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi'ndeki imalat işletmelerinin kurumlar vergisi incelemeleri ilçede sık karşılaşılan konular arasındadır.",
      "Vergi ve ceza ihbarnamesine karşı dava açma süresi tebliğden itibaren 30 gündür; davalar İstanbul vergi mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Ümraniye'de hangi vergi dairesi yetkilidir?", answer: "Yamanevler Mahallesi'ndeki Ümraniye Vergi Dairesi Müdürlüğü yetkilidir." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Kira geliri beyan edilmezse ne olur?", answer: "Re'sen veya ikmalen tarhiyat ve buna bağlı ceza uygulanabilir, bu işlemlere karşı dava açılabilir." },
    ],
    howToTitle: "Ümraniye'de Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "umraniye-borclar-hukuku-avukati",
    name: "Ümraniye Borçlar Hukuku Avukatı",
    heroTitle: "Ümraniye Borçlar Hukuku Avukatı",
    heroSubtitle:
      "İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi'ndeki imalatçı ve tedarikçi işletmeler arasındaki sözleşme ve alacak uyuşmazlıklarında İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan (MEF Üniversitesi Hukuk Fakültesi, 2019) Ümraniye'deki müvekkillerini temsil eder; davalar Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür.",
    metaTitle: "Ümraniye Borçlar Hukuku Avukatı",
    metaDescription:
      "Ümraniye'de ticari sözleşmeler, sanayi sitesi işletmeleri arası alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Sözleşme ve alacak kaynaklı uyuşmazlıklarda Ümraniye'deki müvekkillerine danışmanlık veren Furkan Arıkan, İstanbul Barosu'na kayıtlı (sicil no: 72621) ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunu bir avukattır.",
    highlightCards: [
      { title: "Tedarik Sözleşmeleri", description: "İmalat ve lojistik işletmeleri arası sözleşmelerden doğan uyuşmazlıklar." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Kira/İşyeri Sözleşmeleri", description: "Sanayi sitesi ve cadde üzeri işyeri kiralamalarından doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İmalat ve tedarik işletmeleri arası hizmet ve satış sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Sanayi sitesi ve cadde üzeri işyeri kiralamalarından doğan sözleşme uyuşmazlıkları",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi'ndeki imalatçı ve tedarikçi işletmeler arasında akdedilen hizmet ve satış sözleşmelerinden doğan ifa ve alacak uyuşmazlıkları, Ümraniye'de borçlar hukuku kapsamında sık karşılaşılan dava türlerindendir.",
      "Bu davalar, Ümraniye'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması dava şartıdır.",
    ],
    faqs: [
      { question: "Sözleşmeyi ihlal eden taraftan ne talep edilebilir?", answer: "Sözleşmeden dönme, ifa veya tazminat gibi hukuki yollara başvurulabilir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir." },
      { question: "Sanayi sitesindeki bir işyeri kira sözleşmesinin erken feshinde ne olur?", answer: "Sözleşme hükümleri ve kanuni düzenlemeler çerçevesinde tazminat yükümlülüğü doğabilir." },
    ],
    howToTitle: "Ümraniye'de Alacak Davası Süreci Nasıl İşler?",
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
