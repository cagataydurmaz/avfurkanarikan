import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const silivriServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "silivri-avukat",
    name: "Silivri Avukat",
    heroTitle: "Silivri Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, 45 km'lik sahil şeridine ve Avrupa'nın en büyük ceza infaz kurumu kompleksine ev sahipliği yapan Silivri'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Büyükçekmece Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Silivri Avukat",
    metaDescription:
      "Silivri'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Tarım ve hayvancılık geleneğini uzun sahil şeridiyle bir arada barındıran, aynı zamanda Türkiye'nin en büyük ceza infaz kurumu kompleksine ev sahipliği yapan Silivri'de ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza ve İnfaz Hukuku", description: "Soruşturma, kovuşturma ve infaz sürecinde müdafilik/danışmanlık." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Tarım arazisi ve konut uyuşmazlıklarının takibi." },
      { title: "İş Hukuku", description: "İşçilik alacakları ve işe iade davalarında destek." },
      { title: "İcra Hukuku", description: "Alacak takibi ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "İdari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı ve cezası uyuşmazlıkları." },
      { title: "Borçlar Hukuku", description: "Sözleşme ve alacak kaynaklı davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma, kovuşturma ve infaz sürecinde ceza hukuku desteği",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Tarım arazisi ve konut ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "Antik dönemde Selymbria adıyla anılan, doğal limanı ve önemli ticaret yolları üzerindeki konumuyla tarih boyunca önemini koruyan Silivri, bugün tarım ve hayvancılık geleneğini 45 km'lik sahil şeridiyle bir arada sürdürmektedir.",
      "İlçedeki hukuki uyuşmazlıklar İstanbul Büyükçekmece Adliyesi'nde, vergisel işlemler ise Silivri Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Silivri'deki davalara hangi adliye bakıyor?", answer: "Silivri, İstanbul Büyükçekmece Adliyesi'nin yargı çevresinde yer almaktadır." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Silivri'de mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Silivri'deki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Ceza infaz kurumundaki bir yakınım için destek alabilir miyim?", answer: "Evet, infaz sürecine ilişkin danışmanlık ve hukuki temsil sağlanmaktadır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Acil bir durumda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır." },
      { question: "Büyükçekmece Adliyesi'ne Silivri'den ulaşım nasıl?", answer: "E-5 ve TEM karayolu bağlantıları üzerinden ulaşım sağlanabilir." },
    ],
    howToTitle: "Silivri'de Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Silivri Avukat (Genel)",
    relatedPostSlugs: ["tutukluluga-itiraz", "ceza-hukukunda-etkin-pismanlik"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "silivri-bosanma-avukati",
    name: "Silivri Boşanma Avukatı",
    heroTitle: "Silivri Boşanma Avukatı",
    heroSubtitle:
      "Aile mahkemelerinin İstanbul Büyükçekmece Adliyesi bünyesinde yer aldığı Silivri'de, velayet, nafaka ve mal paylaşımı talepleri anlaşmalı veya çekişmeli boşanma süreci kapsamında takip edilir.",
    metaTitle: "Silivri Boşanma Avukatı",
    metaDescription:
      "Silivri'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Boşanma, velayet ve nafaka uyuşmazlıklarında Silivri'deki müvekkillerine aile hukuku kapsamında temsil sağlayan Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Tarımsal Mal Varlığı", description: "Arazi ve hayvancılık işletmesinin mal rejiminde değerlendirilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Tarım arazisi ve hayvancılık işletmesinin mal rejimi tasfiyesinde değerlendirilmesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Silivri ekonomisinde tarım ve hayvancılığın günümüzde de belirli bir ağırlığı bulunması, boşanma davalarında tarla, sera veya hayvancılık işletmesi gibi varlıkların mal rejimi tasfiyesinde nasıl ele alınacağı sorusunu öne çıkarmaktadır.",
      "Anlaşmalı boşanmada protokolün eksiksiz düzenlenmesi, çekişmeli süreçte ise ileri sürülen delillerin gücü davanın seyrini belirleyen temel unsurlardır; her iki türdeki davalara da İstanbul Büyükçekmece Adliyesi bünyesindeki aile mahkemelerinde bakılmaktadır.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "İstanbul Büyükçekmece Adliyesi'ndeki aile mahkemesine başvurulur." },
      { question: "Tarım arazisi mal paylaşımında nasıl değerlendirilir?", answer: "Evlilik süresince edinilmişse katılma alacağı hesabına dahil edilir; miras yoluyla geçmişse kişisel mal sayılabilir." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir." },
    ],
    howToTitle: "Silivri'de Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "silivri-ceza-avukati",
    name: "Silivri Ceza Avukatı",
    heroTitle: "Silivri Ceza Avukatı",
    heroSubtitle:
      "Soruşturma ve kovuşturma aşamalarında müdafilik hizmetinin yanı sıra, Türkiye'nin en büyük ceza infaz kurumu kompleksinde bulunan hükümlüler için infaz hukuku danışmanlığı sağlanır.",
    metaTitle: "Silivri Ceza Avukatı",
    metaDescription:
      "Silivri'de soruşturma, kovuşturma, tutukluluğa itiraz ve infaz hukuku süreçlerinde ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. Ceza yargılamasının soruşturma ve kovuşturma aşamalarının yanı sıra, Silivri'deki ceza infaz kurumunda bulunan hükümlü ve tutuklular için infaz hukuku kapsamında danışmanlık ve temsil sağlar.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "İnfaz Hukuku", description: "Koşullu salıverilme, disiplin cezaları ve nakil talepleri." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Koşullu salıverilme ve infazın ertelenmesi taleplerinde danışmanlık",
      "Ceza infaz kurumu disiplin cezalarına karşı itiraz",
    ],
    localParagraphs: [
      "2008 yılında hizmete giren, Avrupa'nın en büyük ceza infaz kurumu kompleksi olan Marmara Cezaevi'nin (eski adıyla Silivri Cezaevi) burada bulunması, ilçeyi soruşturma-kovuşturma aşamasından ayrı olarak infaz hukuku alanında da önemli bir merkez haline getirmektedir.",
      "Hükümlü yakınları; koşullu salıverilme, denetimli serbestlik, disiplin cezalarına itiraz ve nakil talepleri gibi konularda infaz hakimliği nezdinde hukuki destek alabilir. Kovuşturma aşamasındaki davalar ise İstanbul Büyükçekmece Adliyesi'nde görülür.",
    ],
    faqs: [
      { question: "Koşullu salıverilme talebi nasıl yapılır?", answer: "İnfaz kurumu idaresi ve infaz hakimliği nezdinde yasal koşulların sağlanıp sağlanmadığı değerlendirilerek süreç yürütülür." },
      { question: "Cezaevi disiplin cezasına itiraz edilebilir mi?", answer: "Evet, disiplin kurulu kararına karşı infaz hakimliğine itiraz edilebilir." },
      { question: "Hükümlü nakil talebi hangi hallerde yapılabilir?", answer: "Sağlık, güvenlik veya aile birliği gibi gerekçelerle nakil talebinde bulunulabilir." },
      { question: "Silivri'de bir ceza davası hangi adliyede görülür?", answer: "Kovuşturma aşamasındaki davalar İstanbul Büyükçekmece Adliyesi'nde görülür." },
      { question: "Denetimli serbestlik süresi ne kadardır?", answer: "Hükmedilen cezanın türüne ve infaz kurumuna göre kanunda öngörülen süreler uygulanır." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir ancak müdafi bulundurmak önerilir." },
    ],
    howToTitle: "Silivri'de İnfaz Hukuku Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Dosya İncelemesi", text: "Hükümlünün infaz durumu ve kalan süre değerlendirilir." },
      { name: "Talebin Belirlenmesi", text: "Koşullu salıverilme, nakil veya itiraz gibi talep netleştirilir." },
      { name: "Başvuru", text: "İnfaz kurumu idaresine veya infaz hakimliğine başvuru yapılır." },
      { name: "Sonuçlanma", text: "Karar doğrultusunda süreç tamamlanır." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["tutukluluga-itiraz", "ceza-hukukunda-etkin-pismanlik"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "silivri-gayrimenkul-avukati",
    name: "Silivri Gayrimenkul Avukatı",
    heroTitle: "Silivri Gayrimenkul Avukatı",
    heroSubtitle:
      "Tarım arazisi, sahil bölgesi taşınmazları ve tapu uyuşmazlıklarında hukuki destek sağlanır; davalar İstanbul Büyükçekmece Adliyesi'nde görülür.",
    metaTitle: "Silivri Gayrimenkul Avukatı",
    metaDescription:
      "Silivri'de tarım arazisi, tapu iptali ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Tarım arazisi, sahil taşınmazları ve konut uyuşmazlıklarında Silivri'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Tarım Arazisi", description: "Arazi sınırı, miras intikali ve satış uyuşmazlıkları." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Sahil Bölgesi Taşınmazları", description: "Kıyı şeridindeki konut ve arsalara ilişkin uyuşmazlıklar." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Tarım arazisi sınır ve miras intikali uyuşmazlıklarında temsil",
      "Tapu iptali ve tescil davalarının açılması",
      "Sahil bölgesindeki taşınmaz alım-satımında hukuki danışmanlık",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
      "Ortaklığın giderilmesi (izale-i şüyu) davaları",
    ],
    localParagraphs: [
      "Tarım ve hayvancılık geleneğinin halen sürdüğü Silivri'de, miras yoluyla intikal eden tarım arazilerinde paydaşlar arası uyuşmazlıklar ile sahil bölgesindeki taşınmazlara ilişkin tapu sorunları sık karşılaşılan gayrimenkul hukuku konularındandır.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür.",
    ],
    faqs: [
      { question: "Miras yoluyla kalan tarım arazisi paydaşlar arasında nasıl paylaşılır?", answer: "Anlaşma sağlanamazsa ortaklığın giderilmesi (izale-i şüyu) davası açılabilir." },
      { question: "Silivri'de gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir." },
      { question: "Sahil bölgesinde arsa alımında nelere dikkat edilmeli?", answer: "İmar durumu, kıyı kenar çizgisi ve tapu kaydındaki şerhlerin incelenmesi önerilir." },
      { question: "Tarım arazisinin niteliği tapuda nasıl görünür?", answer: "Tapu kaydında arazinin tarla, bağ veya bahçe gibi niteliği belirtilir; bu durum kullanım hakkını etkiler." },
    ],
    howToTitle: "Silivri'de Ortaklığın Giderilmesi Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Mülkiyet Durumu İncelemesi", text: "Taşınmazın tapu kaydı ve paydaşlar tespit edilir." },
      { name: "Uzlaşma Girişimi", text: "Paydaşlar arasında satış veya paylaşım konusunda anlaşma aranır." },
      { name: "Dava Açılması", text: "Anlaşma sağlanamazsa sulh hukuk mahkemesinde dava açılır." },
      { name: "Satış/Paylaşım", text: "Mahkeme kararıyla taşınmaz satılır veya aynen paylaştırılır." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["ortakligin-giderilmesi-davasi", "tapu-iptali-ve-tescil-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "silivri-icra-avukati",
    name: "Silivri İcra Avukatı",
    heroTitle: "Silivri İcra Avukatı",
    heroSubtitle:
      "Silivri'de alacak tahsiline yönelik icra takibi, ödeme emrine itiraz ve haciz süreçlerinde hukuki temsil sağlanır; bu süreçlere ilişkin icra daireleri İstanbul Büyükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Silivri İcra Avukatı",
    metaDescription:
      "Silivri'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Silivri'deki çiftçi, esnaf ve bireysel müvekkillerine icra ve iflas hukuku kapsamında danışmanlık ve temsil hizmeti sunan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Tarımsal Ürün Alacakları", description: "Ürün satışından doğan alacakların takibi." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Tarımsal ürün ve hayvan satışından doğan alacakların takibi",
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Ürün ve hayvan satışından kaynaklanan alacakların tahsilinde icra takibine sıkça başvurulmaktadır; bunun başlıca nedeni, Silivri ekonomisinde tarım ve hayvancılığın hâlâ belirleyici bir yer tutmasıdır.",
      "Yetkili icra dairesinin tespitinde kural olarak borçlunun ikametgahı esas alınır; Silivri'de yerleşik borçlulara yönelik takiplerde de bu ilke geçerlidir. Takipten doğan uyuşmazlıkların yargılaması ise İstanbul Büyükçekmece Adliyesi'ndeki icra mahkemeleri tarafından yürütülür.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "Sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlanabilir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Tebliğden itibaren 7 gündür." },
      { question: "Tarımsal ürün satışında ödeme yapılmazsa ne yapılabilir?", answer: "Fatura veya sözleşmeye dayanarak icra takibi başlatılabilir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür." },
    ],
    howToTitle: "Silivri'de İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "silivri-idare-avukati",
    name: "Silivri İdare Avukatı",
    heroTitle: "Silivri İdare Avukatı",
    heroSubtitle:
      "Belediye, imar ve tarım arazisi işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Silivri İdare Avukatı",
    metaDescription:
      "Silivri'de idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. İdari işlemlerin iptali ve tam yargı davalarında Silivri'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Tarım Arazisi İzinleri", description: "Arazi vasıf değişikliği ve yapılaşma izinlerine ilişkin uyuşmazlıklar." },
      { title: "İmar Uygulamaları", description: "Sahil ve kırsal alanlardaki imar planı değişiklikleri." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Tarım arazisi vasıf değişikliği işlemlerine ilişkin idari dava süreçleri",
      "İmar planı değişikliklerine karşı iptal davası açılması",
      "Belediye ruhsat işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Geniş tarım arazilerine ve uzun bir sahil şeridine sahip Silivri'de, arazi vasıf değişikliği ve kırsal alan imar uygulamalarına ilişkin idari işlemler diğer bazı ilçelere kıyasla farklı bir boyut kazanmaktadır.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "Tarım arazisinin vasfı nasıl değiştirilir?", answer: "İlgili idari makamlara başvuru yapılır, ret halinde idare mahkemesinde dava açılabilir." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İlan tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılmalıdır." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde dava açılabilir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, yasal süresinde idare mahkemesinde dava açılabilir." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "Tam yargı davası yoluyla zararın tazmini talep edilebilir." },
    ],
    howToTitle: "Silivri'de İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "silivri-is-hukuku-avukati",
    name: "Silivri İş Hukuku Avukatı",
    heroTitle: "Silivri İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul Büyükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Silivri İş Hukuku Avukatı",
    metaDescription:
      "Silivri'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Silivri'deki tarım işçileri ve diğer sektör çalışanlarına ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Mevsimlik Tarım İşçileri", description: "Mevsimlik çalışma sözleşmelerinden doğan uyuşmazlıklar." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Mevsimlik tarım işçilerinin ücret ve sigorta uyuşmazlıklarında destek",
      "Hafta tatili ve yıllık izin ücreti gibi diğer işçilik alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Tarım ve hayvancılığın önemli bir istihdam kaynağı olduğu Silivri'de, mevsimlik tarım işçilerinin ücret, sigorta kaydı ve çalışma koşullarına ilişkin uyuşmazlıkları sık gündeme gelen iş hukuku konularındandır.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Büyükçekmece Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Mevsimlik tarım işçisinin sigorta hakkı var mı?", answer: "Çalışma süresine göre değişmekle birlikte, mevsimlik işçiler de sigortalı sayılabilir." },
      { question: "Tarım işçisi iş kazası geçirirse ne yapılmalı?", answer: "Olay derhal SGK'ya bildirilmeli, tedavi ve tazminat süreci başlatılmalıdır." },
      { question: "Silivri'de iş mahkemesi nerededir?", answer: "İstanbul Büyükçekmece Adliyesi bünyesindedir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir." },
      { question: "Mevsim sonunda işten çıkarılan işçinin hakları nelerdir?", answer: "Sözleşme türüne ve çalışma süresine göre kıdem/ihbar tazminatı hakkı doğabilir." },
    ],
    howToTitle: "Silivri'de İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "silivri-kira-tahliye-avukati",
    name: "Silivri Kira ve Tahliye Avukatı",
    heroTitle: "Silivri Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Sulh hukuk mahkemelerinin İstanbul Büyükçekmece Adliyesi'nde bulunduğu Silivri'de, konut ve yazlık tahliyesinden kira bedeli tespitine kadar kira sözleşmesi kaynaklı uyuşmazlıklarda hukuki destek verilir.",
    metaTitle: "Silivri Kira ve Tahliye Avukatı",
    metaDescription:
      "Silivri'de kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Silivri'deki kiraya verenlere ve kiracılara kira hukuku kapsamında danışmanlık hizmeti veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Yazlık/Sayfiye Kiraları", description: "45 km'lik sahil şeridinde dönemsel kiralama sözleşmeleri." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sahil bölgesinde yazlık/sayfiye amaçlı kira sözleşmelerinin hazırlanması",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Yaz aylarında 45 km'lik sahil şeridi boyunca talebin belirgin biçimde yükseldiği Silivri'de, yıllık konut kiralarından farklı bir sözleşme mantığı işleyen dönemsel yazlık kiralamalar öne çıkmaktadır.",
      "Kira sözleşmesinin yazılı ve eksiksiz düzenlenmiş olması, olası bir uyuşmazlıkta ispat bakımından belirleyici olur; bu tür davalara bakmakla görevli sulh hukuk mahkemeleri İstanbul Büyükçekmece Adliyesi bünyesinde faaliyet göstermektedir.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Yazlık kiralamada sezon sonu tahliye otomatik midir?", answer: "Sözleşmede belirlenen sürenin dolmasıyla kiracının taşınmazı teslim etmesi gerekir; anlaşmazlık halinde hukuki yollara başvurulabilir." },
      { question: "Silivri'de tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
    ],
    howToTitle: "Silivri'de Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "silivri-vergi-avukati",
    name: "Silivri Vergi Avukatı",
    heroTitle: "Silivri Vergi Avukatı",
    heroSubtitle:
      "Tarım işletmelerine yönelik vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Silivri Vergi Avukatı",
    metaDescription:
      "Silivri'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Silivri'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Tarımsal İşletmeler", description: "Çiftçi ve tarımsal işletmelere yönelik vergi uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Tarımsal işletmelerde vergi incelemesi sürecinde danışmanlık",
      "Arazi satışlarına ilişkin değer artış kazancı uyuşmazlıklarında destek",
    ],
    localParagraphs: [
      "Tarım ve hayvancılığın önemli bir ekonomik faaliyet olduğu Silivri'de, çiftçi kayıt sistemi ve ürün satışlarına ilişkin gelir beyanı uyuşmazlıkları sık karşılaşılan vergi konuları arasındadır.",
      "Bu işlemlere karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir; ihbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "Çiftçilerin gelir vergisi yükümlülüğü nasıl belirlenir?", answer: "Ürün türü, satış hacmi ve kanunda öngörülen istisnalara göre değerlendirilir." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır." },
    ],
    howToTitle: "Silivri'de Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "silivri-borclar-hukuku-avukati",
    name: "Silivri Borçlar Hukuku Avukatı",
    heroTitle: "Silivri Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Tarımsal tedarik sözleşmelerinden doğan uyuşmazlıklar, alacak talepleri ve tazminat davaları Silivri'de takip edilir; bu davalara İstanbul Büyükçekmece Adliyesi bünyesindeki ticaret ve asliye hukuk mahkemelerinde bakılır.",
    metaTitle: "Silivri Borçlar Hukuku Avukatı",
    metaDescription:
      "Silivri'de sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Sözleşme ve alacak kaynaklı uyuşmazlıklarda Silivri'deki müvekkillerine borçlar hukuku alanında danışmanlık hizmeti sunan Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur; İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır.",
    highlightCards: [
      { title: "Tarımsal Tedarik Sözleşmeleri", description: "Ürün alım-satım ve tedarik sözleşmelerinden doğan uyuşmazlıklar." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Hayvancılık Sözleşmeleri", description: "Hayvan alım-satımı ve besleme sözleşmelerinden doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Tarımsal ürün alım-satım ve tedarik sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Hayvan alım-satımından doğan ayıp ve tazminat talepleri",
      "Sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Silivri'de borçlar hukuku alanında en sık karşılaşılan uyuşmazlık türleri arasında, tarım ve hayvancılığın hâlâ önemli bir geçim kaynağı olmasına paralel biçimde, ürün tedarik sözleşmeleri ile hayvan alım-satımından kaynaklananlar yer almaktadır.",
      "Ticari nitelikteki bazı alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması zorunlu tutulmaktadır; bu davalara da İstanbul Büyükçekmece Adliyesi bünyesinde bakılmaktadır.",
    ],
    faqs: [
      { question: "Satın alınan hayvan hastalıklı çıkarsa ne yapılabilir?", answer: "Ayıba dayalı olarak sözleşmeden dönme veya bedel indirimi talep edilebilir." },
      { question: "Tarımsal tedarik sözleşmesinde teslim gecikirse ne olur?", answer: "Sözleşmede öngörülen gecikme cezası talep edilebilir, gerekirse sözleşmeden dönülebilir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir." },
    ],
    howToTitle: "Silivri'de Alacak Davası Süreci Nasıl İşler?",
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
