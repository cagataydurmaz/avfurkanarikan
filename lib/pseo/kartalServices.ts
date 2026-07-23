import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const kartalServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "kartal-avukat",
    name: "Kartal Avukat",
    heroTitle: "Kartal Avukat",
    heroSubtitle:
      "Anadolu Yakası'nın adliye merkezi konumundaki Kartal'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında avukat Furkan Arıkan danışmanlık ve dava takibi hizmeti sunmaktadır; İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olan Arıkan'ın dosyaları, İstanbul Anadolu Adliyesi'nin fiziken Kartal sınırları içinde yer alması sayesinde komşu ilçelerin aksine ek bir ilçe geçişi gerektirmeden aynı ilçede görülür.",
    metaTitle: "Kartal Avukat",
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
      { question: "Kartal'daki davalara hangi adliye bakıyor?", answer: "İstanbul Anadolu Adliyesi, Kartal'ın Esentepe Mahallesi'nde, ilçe sınırları içinde bulunmaktadır; Kartal'daki tüm dava ve icra dosyaları bu adliyede görülür." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Kartal'da mı bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Kartal'daki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Kartal'a nasıl ulaşılır?", answer: "M4 metro hattının Kartal, Yakacık-Adnan Kahveci, Hastane-Adliye ve Soğanlık istasyonları ile Marmaray'ın beş istasyonundan ulaşılabilir; E-5 üzerinden karayoluyla da erişim sağlanır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır." },
      { question: "Kartal'daki sanayi tesislerinde çalışanların işçilik uyuşmazlıklarında destek alınabilir mi?", answer: "Evet, ilçedeki üretim ve depo tesislerinde çalışanların işçilik alacağı ve işe iade taleplerinde danışmanlık sağlanır." },
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
      "Anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; aile mahkemesi davaları, Kartal'ın kendi sınırları içindeki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Kartal Boşanma Avukatı",
    metaDescription:
      "Kartal'da anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Kartal'daki ailelere yönelik boşanma, velayet ve nafaka süreçlerinde temsil sağlayan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Mal Rejimi Tasfiyesi", description: "Sahil şeridindeki ve site konutlarının paylaşımına ilişkin değerleme süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Sahil şeridi ve site nitelikli konutların dahil olduğu mal rejimi tasfiyesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Yalı ve Kordonboyu gibi sahil mahalleleriyle Soğanlık Yeni ve Yakacık Yeni gibi iç kesimlerdeki konut bölgelerini bir arada barındıran Kartal'da, boşanma sürecindeki mal rejimi tasfiyelerinde denize yakın konutların güncel piyasa değeriyle paylaşımı öne çıkan konulardandır.",
      "Boşanma, velayet ve nafaka davalarına, İstanbul Anadolu Adliyesi Kartal sınırları içinde bulunduğundan ilçe dışına çıkmaya gerek kalmadan bu adliyedeki aile mahkemelerinde bakılır; anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Kartal'ın Esentepe Mahallesi'ndeki İstanbul Anadolu Adliyesi'ndeki aile mahkemesine başvurulur." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir." },
      { question: "Sahil şeridindeki bir konut mal paylaşımını nasıl etkiler?", answer: "Taşınmazın güncel rayiç değeri ve tapu kaydı, bilirkişi incelemesiyle değerlemeye esas alınır." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir." },
    ],
    howToTitle: "Kartal'da Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "İhtiyaç Analizi", text: "Velayet, nafaka ve mal rejimi talepleri değerlendirilir." },
      { name: "Dilekçe Hazırlığı", text: "Duruma uygun dava dilekçesi ya da protokol hazırlanır." },
      { name: "Dava Açılışı", text: "Yetkili aile mahkemesine başvuru yapılır." },
      { name: "Sonuç", text: "Duruşma sürecinin ardından karar açıklanır." },
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
    metaTitle: "Kartal Ceza Avukatı",
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
      { question: "Kartal'da bir ceza davası hangi adliyede görülür?", answer: "İstanbul Anadolu Adliyesi, Kartal'ın Esentepe Mahallesi'nde bulunmaktadır ve ilçedeki ceza davaları bu adliyede görülür." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir ancak müdafi bulundurmak önerilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, sulh ceza hakimliğine itiraz edilebilir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Yargılamaya kaldığı yerden devam edilir." },
      { question: "Adliyenin ilçe içinde olması süreci nasıl etkiler?", answer: "Duruşma ve nöbetçi işlemlere erişimde ek bir ilçe geçişi gerekmediğinden süreç takibi kolaylaşır." },
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
    metaTitle: "Kartal Gayrimenkul Avukatı",
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
      { question: "Eski sanayi arazisi üzerindeki bir projede hak sahipliği nasıl belirlenir?", answer: "İmar durumu, tapu kaydı ve varsa uygulama sözleşmesi incelenerek hak sahipliği tespit edilir." },
      { question: "Kartal'da gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, ilçe sınırları içindeki İstanbul Anadolu Adliyesi'nde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir." },
      { question: "Site yönetimiyle yaşanan bir ortak gider uyuşmazlığında ne yapılabilir?", answer: "Öncelikle yönetim planı ve genel kurul kararları incelenir, gerekirse dava yoluna gidilebilir." },
      { question: "Sahil şeridindeki bir konutun satışında nelere dikkat edilmeli?", answer: "Tapu kaydı, kıyı mesafesi ve imar durumu belgelerinin tam olması önerilir." },
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
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemesi davaları Kartal sınırları içindeki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Kartal İş Hukuku Avukatı",
    metaDescription:
      "Kartal'da kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan İstanbul Barosu'nda 72621 sicil numarasıyla kayıtlı olup 2019'da MEF Üniversitesi Hukuk Fakültesi'ni tamamlamıştır; iş hukuku alanında Kartal'daki çalışan ve işverenlere danışmanlık vermektedir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Sanayi Tesisi Çalışanları", description: "Üretim ve depo tesislerinde çalışan personelin hakları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Sanayi ve depo tesislerinde çalışan personelin işçilik alacaklarının tahsili",
      "Fazla mesai ve yıllık izin ücreti gibi diğer işçilik alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "1947'den bu yana sanayi bölgesi kimliğini büyük ölçüde koruyan Kartal'da, üretim ve lojistik tesislerinde çalışan personelin kıdem-ihbar tazminatı ve fazla mesai gibi işçilik alacağı talepleri sık karşılaşılan uyuşmazlık türleri arasındadır.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları, Kartal'ın kendi sınırları içindeki İstanbul Anadolu Adliyesi'ndeki iş mahkemesinde görülür.",
    ],
    faqs: [
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Çalışma süresi ve son brüt (giydirilmiş) ücret esas alınarak hesaplanır." },
      { question: "Kartal'da iş mahkemesi nerededir?", answer: "İlçe sınırları içindeki İstanbul Anadolu Adliyesi bünyesindedir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir." },
      { question: "Sanayi tesisi çalışanlarının fazla mesai hakkı nasıl ispatlanır?", answer: "Puantaj kayıtları, vardiya çizelgeleri ve tanık beyanıyla ispat edilebilir." },
      { question: "İşe iade davası açmadan önce arabuluculuğa gitmek zorunlu mu?", answer: "Evet, dava şartı olarak öncelikle arabulucuya başvurulması gerekir." },
    ],
    howToTitle: "Kartal'da İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "kartal-icra-avukati",
    name: "Kartal İcra Avukatı",
    heroTitle: "Kartal İcra Avukatı",
    heroSubtitle:
      "Alacak tahsili amacıyla icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır; icra daireleri, Kartal'ın kendi sınırları içindeki İstanbul Anadolu Adliyesi bünyesindedir.",
    metaTitle: "Kartal İcra Avukatı",
    metaDescription:
      "Kartal'da icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kartal'daki alacaklı ve borçlu taraflara icra-iflas hukuku kapsamında danışmanlık veren Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "Ticari Alacaklar", description: "Sanayi ve lojistik tesisleri arasındaki fatura ve sözleşme alacaklarının takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "Üretim ve lojistik tesisleri arasındaki ticari alacakların icra yoluyla tahsili",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Sanayi bölgesi kimliğini uzun yıllar koruyan Kartal'da, üretim ve lojistik tesisleri arasındaki fatura ve sözleşme alacaklarının icra yoluyla tahsili sık başvurulan bir yol olarak öne çıkmaktadır.",
      "Bu takiplere ilişkin uyuşmazlıklar, Kartal'ın kendi sınırları içindeki İstanbul Anadolu Adliyesi'ndeki icra mahkemelerinde görülür; borçlunun Kartal'da yerleşik olduğu takiplerde yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "Sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlanabilir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Tebliğden itibaren 7 gündür." },
      { question: "Kartal'da icra dairesi nerededir?", answer: "İlçe sınırları içindeki İstanbul Anadolu Adliyesi bünyesindedir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür." },
    ],
    howToTitle: "Kartal'da İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "kartal-idare-avukati",
    name: "Kartal İdare Avukatı",
    heroTitle: "Kartal İdare Avukatı",
    heroSubtitle:
      "Sahil şeridindeki kıyı kenar çizgisi ve iskele/liman izinlerinden eski sanayi arazilerindeki ruhsat işlemlerine kadar geniş bir alanda idari dava desteği sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Kartal İdare Avukatı",
    metaDescription:
      "Kartal'da idari işlemlerin iptali, imar uygulamalarına itiraz ve tazminat davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nin 2019 mezunu olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, idari işlemlerin iptali ve tam yargı davalarında Kartal'daki müvekkillerine danışmanlık sağlamaktadır.",
    highlightCards: [
      { title: "İptal Davası Süreci", description: "Hukuka aykırı idari işlemlere karşı yargı yoluna başvurulması." },
      { title: "Kıyı ve İskele İzinleri", description: "Sahil şeridindeki kıyı kenar çizgisi ve iskele/liman işlemlerine itiraz." },
      { title: "Eski Sanayi Arazisi Ruhsatları", description: "Kentsel dönüşüm kapsamındaki ruhsat ve plan değişikliği işlemlerine dava." },
      { title: "İdari Yaptırımlara İtiraz", description: "Belediye ve diğer kurumların idari para cezalarına karşı dava." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kıyı kenar çizgisi tespiti ve iskele/liman izin işlemlerine karşı idari dava süreçleri",
      "Belediye ruhsat işlemlerine itiraz edilmesi",
      "Eski sanayi arazilerindeki dönüşüme ilişkin plan değişikliği kararlarına karşı iptal davası açılması",
      "İdarenin işlem veya eyleminden kaynaklanan zararlar için tam yargı davası açılması",
      "İdari para cezalarına karşı dava süreçlerinin yürütülmesi",
      "Kamu görevlisi özlük haklarına ilişkin idari uyuşmazlıklar",
    ],
    localParagraphs: [
      "Kartal İskelesi'nden Adalar'a düzenli vapur seferlerinin kalktığı sahil şeridinde kıyı kenar çizgisi tespiti ve iskele/liman işlemlerine ilişkin idari kararlar ile eski sanayi arazilerindeki dönüşüm sürecine bağlı ruhsat işlemleri, Kartal'daki idari uyuşmazlıkların önemli bir bölümünü oluşturmaktadır.",
      "Bu davalara İstanbul idare mahkemelerinde bakılmakta olup dava açma süresi, kural olarak işlemin tebliğ veya ilan edildiği tarihten başlayan 60 gündür; bu süre içinde dava açılmazsa hak düşümü söz konusu olur.",
    ],
    faqs: [
      { question: "Kıyı kenar çizgisi tespitine itiraz edilebilir mi?", answer: "Evet, tespitin tebliğ veya ilan edildiği tarihten itibaren 60 gün içinde idare mahkemesinde dava açılabilir." },
      { question: "Sahil şeridindeki bir iskele/liman izni reddedilirse ne yapılabilir?", answer: "Ret işlemine karşı idare mahkemesinde iptal davası açılabilir." },
      { question: "Eski sanayi arazisindeki bir ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde dava açılabilir." },
      { question: "Belediyenin kestiği idari para cezasına nasıl itiraz edilir?", answer: "Cezanın tebliğinden itibaren yasal süre içinde idare mahkemesinde dava açılarak itiraz edilebilir." },
      { question: "İdarenin bir işlemi nedeniyle zarara uğrayan ne yapabilir?", answer: "Tam yargı davası açarak uğradığı zararın tazminini talep edebilir." },
    ],
    howToTitle: "Kartal'da İdari Dava Süreci Nasıl Yürütülür?",
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
    urlSlug: "kartal-kira-tahliye-avukati",
    name: "Kartal Kira ve Tahliye Avukatı",
    heroTitle: "Kartal Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Sahil şeridindeki ve iç kesimlerdeki konutların kiralanması, tahliye ve kira bedeli tespiti uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemesi davaları Kartal sınırları içindeki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Kartal Kira ve Tahliye Avukatı",
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
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Kartal'da bir konutun kira bedeli nasıl güncellenir?", answer: "Sözleşmede belirlenen artış oranı veya yasal sınırlar çerçevesinde güncelleme yapılabilir; uyuşmazlık halinde tespit davası açılabilir." },
      { question: "Kartal'da tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir yıla kadar sürebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
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
      "Vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Kartal Vergi Avukatı",
    metaDescription:
      "Kartal'da vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukat olarak Kartal'daki mükelleflere vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda danışmanlık vermektedir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Sanayi ve Ticari İşletme Uyuşmazlıkları", description: "Üretim ve lojistik işletmelerinin vergi incelemeleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Sanayi ve lojistik işletmelerinin kurumlar vergisi inceleme süreçlerinde danışmanlık",
      "Gayrimenkul kira gelirlerinin beyanına ilişkin uyuşmazlıklarda destek",
    ],
    localParagraphs: [
      "Kartal mükelleflerine ilişkin vergi işlemleri, Hürriyet Mahallesi'ndeki Kartal Vergi Dairesi Müdürlüğü üzerinden yürütülür.",
      "Uzun yıllara dayanan sanayi kimliği nedeniyle ilçedeki üretim ve lojistik işletmelerinin kurumlar vergisi incelemeleri de sık karşılaşılan konular arasındadır. İhbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "Kartal'da hangi vergi dairesi yetkilidir?", answer: "Kartal mükellefleri, Hürriyet Mahallesi'ndeki Kartal Vergi Dairesi Müdürlüğü üzerinden işlem yapar." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Kira geliri beyan edilmezse ne olur?", answer: "Re'sen veya ikmalen tarhiyat ve buna bağlı ceza uygulanabilir, bu işlemlere karşı dava açılabilir." },
    ],
    howToTitle: "Kartal'da Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "kartal-borclar-hukuku-avukati",
    name: "Kartal Borçlar Hukuku Avukatı",
    heroTitle: "Kartal Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Ticari sözleşme uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; asliye hukuk mahkemesi davaları Kartal sınırları içindeki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Kartal Borçlar Hukuku Avukatı",
    metaDescription:
      "Kartal'da ticari sözleşmeler, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Sözleşme ve alacak kaynaklı uyuşmazlıklarda Kartal'daki müvekkillerine danışmanlık veren Furkan Arıkan, İstanbul Barosu'na kayıtlı (sicil no: 72621) ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunu bir avukattır.",
    highlightCards: [
      { title: "Ticari Sözleşmeler", description: "Üretim ve lojistik işletmeleri arasındaki tedarik sözleşmelerinden doğan uyuşmazlıklar." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Kira Sözleşmeleri", description: "Sahil şeridi ve site konutu kiralamalarından doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Üretim ve lojistik işletmeleri arasındaki tedarik sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Sahil şeridi ve site konutu kiralamalarından doğan sözleşme uyuşmazlıkları",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "1947'den bu yana sanayi bölgesi kimliğini koruyan Kartal'da, üretim ve lojistik işletmeleri arasındaki tedarik sözleşmelerinden doğan alacak ve tazminat uyuşmazlıkları sıkça karşılaşılan dava türleri arasındadır.",
      "Bu davalar, Kartal'ın kendi sınırları içindeki İstanbul Anadolu Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Sözleşmeyi ihlal eden taraftan ne talep edilebilir?", answer: "Sözleşmeden dönme, ifa veya tazminat gibi hukuki yollara başvurulabilir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, Kartal sınırları içindeki İstanbul Anadolu Adliyesi bünyesinde görülür." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir." },
      { question: "Bir tedarik sözleşmesinin erken feshinde ne olur?", answer: "Sözleşme hükümleri ve kanuni düzenlemeler çerçevesinde tazminat yükümlülüğü doğabilir." },
    ],
    howToTitle: "Kartal'da Alacak Davası Süreci Nasıl İşler?",
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
