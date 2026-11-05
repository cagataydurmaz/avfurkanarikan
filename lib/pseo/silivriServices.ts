import type { PseoService } from "./types";
import { silivriMiras } from "./miras/silivriMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const silivriBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "silivri-avukat",
    name: "Silivri Avukat",
    heroTitle: "Silivri Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, 45 km'lik sahil şeridine ve Avrupa'nın en büyük ceza infaz kurumu kompleksine ev sahipliği yapan Silivri'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Büyükçekmece Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Silivri Avukat | Hukuki Danışmanlık",
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
      { question: "Silivri'deki davalara hangi adliye bakıyor?", answer: "Silivri'deki davalara İstanbul Büyükçekmece Adliyesi bakar; Silivri bu adliyenin yargı çevresi içinde yer alır. İlçedeki hukuki uyuşmazlıklar Büyükçekmece Adliyesi'nde görülür. Vergisel işlemler ise Silivri Vergi Dairesi Müdürlüğü nezdinde yürütülür. Randevu WhatsApp veya telefonla alınır. Dava dosyaları bu adliyede görülür." },
      { question: "Randevu nasıl alınır?", answer: "Randevu, WhatsApp veya telefon aracılığıyla alınır. İlk iletişimde konunuz kısaca paylaşılır, ardından uygun bir danışmanlık görüşmesi günü belirlenir. Danışmanlık görüşmesinde hukuki durumunuz değerlendirilir; temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir ve süreç takip edilir. Görüşme yüz yüze veya çevrim içi olabilir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku alanlarında hizmet verilir. Bunlar arasında soruşturma, kovuşturma ve infaz sürecinde ceza hukuku desteği, boşanma ve velayet davaları, tarım arazisi ve konut ilişkileri, işe iade, alacak tahsili, idari davalar ve vergi uyuşmazlıkları yer alır." },
      { question: "Büro Silivri'de mi bulunuyor?", answer: "Hayır, büro Silivri'de değil, Beşiktaş/Sinanpaşa'dadır. Silivri'de büro bulunmaz; ancak ilçedeki müvekkillere de aynı kapsamda danışmanlık ve temsil hizmeti verilir. Silivri dosyaları İstanbul Büyükçekmece Adliyesi'nde görüldüğünden mahkeme işlemleri orada yürütülür; randevu WhatsApp veya telefonla alınır. Görüşme çevrim içi de yapılabilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Danışmanlık görüşmesi ücret karşılığı yapılır; tutar dosyanın niteliğine göre değişir ve randevu sırasında bilgi verilir. Görüşmede hukuki durumunuz değerlendirilir. Temsil kararı alınırsa vekalet düzenlenir ve belgeler derlenir. Ücret ve süreç konusundaki sorular görüşme öncesinde de iletilebilir." },
      { question: "Ceza infaz kurumundaki bir yakınım için destek alabilir miyim?", answer: "Evet, infaz sürecine ilişkin danışmanlık ve hukuki temsil sağlanır. Koşullu salıverilme ve infazın ertelenmesi taleplerinde danışmanlık verilir, ceza infaz kurumu disiplin cezalarına karşı itiraz hazırlanır. Soruşturma, kovuşturma ve infaz sürecinde ceza hukuku desteği bu kapsamdadır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Görüşmeler tercihe göre yüz yüze veya çevrim içi olarak planlanabilir. Büro Beşiktaş/Sinanpaşa'dadır ve Silivri'de büro bulunmadığından uzaktan görüşme de seçenek olarak sunulur. İlk iletişim WhatsApp veya telefonla kurulur, ardından danışmanlık randevusu verilir; danışmanlık görüşmesi ücret karşılığı yapılır." },
      { question: "Acil bir durumda ne yapılmalı?", answer: "Acil bir durumda vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmelidir. Gözaltı halinde şüpheliye eşlik edilir ve soruşturma dosyası incelenir. Tutuklama kararına karşı itiraz süresi 7 gündür; tutuklama CMK m.100/101 kapsamında değerlendirilir ve itiraz dilekçesi hazırlanır." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, dosyanın seyri hakkında bilgi alınabilir. Temsil ve süreç takibi aşamasında mahkeme ve idari merciler nezdindeki gelişmeler müvekkille paylaşılır. Vekalet düzenlendikten ve belgeler derlendikten sonra dosyanın ilerleyişi süreç boyunca iletilir; başvuru ve duruşma aşamaları hakkında bilgi talep edilebilir." },
      { question: "Büyükçekmece Adliyesi'ne Silivri'den ulaşım nasıl?", answer: "Silivri'den Büyükçekmece Adliyesi'ne E-5 ve TEM karayolu bağlantıları üzerinden ulaşım sağlanabilir. Silivri, İstanbul Büyükçekmece Adliyesi'nin yargı çevresinde yer aldığından ilçedeki dava ve duruşmalar bu adliyede görülür. Duruşma ve dosya takibi için randevu WhatsApp veya telefonla planlanır." },
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
    metaTitle: "Silivri Boşanma Avukatı | Velayet ve Nafaka",
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
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Boşanma davası için İstanbul Büyükçekmece Adliyesi'ndeki aile mahkemesine başvurulur. Yetkili mahkeme TMK m.168 uyarınca belirlenir. Anlaşmalı boşanma, çekişmeli boşanma, velayet ve nafaka talepleri de aynı aile mahkemesinde görülür; dava hazırlığı ve duruşma temsili bu kapsamda yürütülür." },
      { question: "Tarım arazisi mal paylaşımında nasıl değerlendirilir?", answer: "Evlilik süresince edinilmişse tarım arazisi katılma alacağı hesabına dahil edilir; miras yoluyla geçmişse kişisel mal sayılabilir. Tarım arazisi ve hayvancılık işletmesi mal rejimi tasfiyesinde değerlendirilir. Edinim tarihi ve şekli, hesaplamada belirleyici olduğundan tapu ve işletmeye ilişkin belgeler incelenir." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Çocuk belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir. Velayet kararında ölçüt çocuğun yararıdır ve çocuğun görüşü bu değerlendirmenin bir parçası olabilir. Velayet tesisi ve sonradan velayet değişikliği talepleri aile mahkemesinde görülür; görüşün nasıl alınacağına hakim karar verir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Nafaka miktarı belirlenirken tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir. Bu değerlendirmede tarafların ekonomik koşulları esas alınır. Koşullar sonradan değişirse nafakanın artırılması, azaltılması veya kaldırılması için dava açılabilir; bu davalarda güncel gelir ve ihtiyaç belgeleri mahkemeye sunulur." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, dava açıldıktan sonra taraflar anlaşırsa dava geri çekilebilir. Barışma halinde boşanma süreci sona erdirilebilir ve dava sonuçlanmadan kapatılır. Taraflar barışmazsa dava sürer; bu sırada kusura dayalı çekişmeli dava veya anlaşmalı boşanma protokolü gündeme gelebilir." },
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
    metaTitle: "Silivri Ceza Avukatı | Müdafilik",
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
      { question: "Koşullu salıverilme talebi nasıl yapılır?", answer: "Koşullu salıverilme için infaz kurumu idaresi ve infaz hakimliği nezdinde yasal koşulların sağlanıp sağlanmadığı değerlendirilir ve süreç buna göre yürütülür. Bu konuda koşullu salıverilme ve infazın ertelenmesi taleplerinde danışmanlık verilir. Hükümlünün dosyası incelenerek başvuru hazırlanır." },
      { question: "Cezaevi disiplin cezasına itiraz edilebilir mi?", answer: "Evet, disiplin kurulu kararına karşı infaz hakimliğine itiraz edilebilir. Ceza infaz kurumu disiplin cezalarına karşı itiraz, kararın ve dayanağı olayın incelenmesiyle hazırlanır. İtiraz dilekçesi, hükümlünün dosyasındaki bilgilere göre infaz hakimliğine sunulur; sonuç hakim tarafından belirlenir." },
      { question: "Hükümlü nakil talebi hangi hallerde yapılabilir?", answer: "Hükümlü nakil talebi, sağlık, güvenlik veya aile birliği gibi gerekçelerle yapılabilir. Talebin dayanağı olan durumu gösteren belgeler başvuruya eklenir. İnfaz sürecine ilişkin danışmanlık ve hukuki temsil bu başvurular için de sağlanır; gerekçeye göre başvuru ilgili infaz makamına iletilir." },
      { question: "Silivri'de bir ceza davası hangi adliyede görülür?", answer: "Silivri'deki kovuşturma aşamasındaki ceza davaları İstanbul Büyükçekmece Adliyesi'nde görülür. Silivri bu adliyenin yargı çevresi içinde yer aldığından duruşmalarda sanık veya mağdur vekilliği orada yapılır. Gözaltı ve soruşturma aşamasında da şüpheliye eşlik edilir ve dosya incelenir." },
      { question: "Denetimli serbestlik süresi ne kadardır?", answer: "Denetimli serbestlik süresi, hükmedilen cezanın türüne ve infaz kurumuna göre kanunda öngörülen sürelere göre uygulanır. Süre dosyadaki hüküm ve infaz durumuna göre belirlenir. Koşullu salıverilme ve infazın ertelenmesi taleplerinde danışmanlık verilir; infaz hakimliği nezdindeki süreç hükümlünün dosyasına göre yürütülür." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Evet, müdafi bulunmadan da ifade alınabilir; ancak şüpheli veya sanığın ifade verirken müdafi bulundurması önerilir. Gözaltı sürecinde şüpheliye eşlik edilmesi ve soruşturma dosyasının detaylı incelenmesi, savunmanın dosya içeriğine göre hazırlanmasını sağlar. Böylece ifade dosyadaki delillerle birlikte değerlendirilir." },
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
    metaTitle: "Silivri Gayrimenkul Avukatı | Tapu ve Kira",
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
      { question: "Miras yoluyla kalan tarım arazisi paydaşlar arasında nasıl paylaşılır?", answer: "Miras yoluyla kalan tarım arazisinde anlaşma sağlanamazsa ortaklığın giderilmesi (izale-i şüyu) davası açılabilir. Paydaşlar arası paylaşım bu dava ile mahkeme tarafından yapılır. Tarım arazisi sınır ve miras intikali uyuşmazlıklarında temsil sağlanır; tapu kaydı ve paydaşların payları dava öncesinde incelenir." },
      { question: "Silivri'de gayrimenkul davası hangi mahkemede görülür?", answer: "Gayrimenkul davası, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür. Tapu iptali ve tescil, ortaklığın giderilmesi ve kira uyuşmazlıkları gibi dava türleri bu mahkemelerde açılır; görevli mahkeme talebin konusuna göre belirlenir." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tapu iptal ve tescil davası açabilir. Tapu kaydı ile fiili durum arasında fark varsa bu dava gündeme gelir. Dava açılmadan önce tapu kaydı ve tescile dayanak belgeler incelenir; talep, tescilin hukuka aykırılığına göre hazırlanır." },
      { question: "Sahil bölgesinde arsa alımında nelere dikkat edilmeli?", answer: "Sahil bölgesinde arsa alımında imar durumu, kıyı kenar çizgisi ve tapu kaydındaki şerhlerin incelenmesi önerilir. Bu unsurlar taşınmazın yapılaşma ve kullanım olanaklarını etkileyebilir. Sahil bölgesindeki taşınmaz alım-satımında hukuki danışmanlık bu inceleme için verilir; satış sözleşmesi de imzadan önce gözden geçirilir." },
      { question: "Tarım arazisinin niteliği tapuda nasıl görünür?", answer: "Tapu kaydında arazinin tarla, bağ veya bahçe gibi niteliği belirtilir; bu durum kullanım hakkını etkiler. Nitelik, taşınmazın nasıl kullanılabileceğini belirlediği için tapu kaydı alım-satımdan veya paylaşımdan önce incelenir. Vasıf değişikliği gerekiyorsa idari makamlara başvuru yapılır." },
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
    metaTitle: "Silivri İcra Avukatı | İcra Takibi ve Haciz",
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
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "İcra takibine sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlanabilir. Alacağa dayanak belge veya ilam üzerinden takip dosyası açılır ve borçluya ödeme emri gönderilir. Borçlunun ödeme emrine itiraz süresi tebliğden itibaren 7 gündür (İİK m.62); itiraz edilmezse takip kesinleşir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Ödeme emrine itiraz süresi, ödeme emrinin tebliğinden itibaren 7 gündür (İİK m.62). Bu süre içinde yapılan itiraz takibi durdurur. Alacaklı bundan sonra itirazın iptali davası açabilir veya uygun belgesi varsa itirazın kaldırılmasını isteyebilir; süre kaçırılırsa takip kesinleşir." },
      { question: "Tarımsal ürün satışında ödeme yapılmazsa ne yapılabilir?", answer: "Tarımsal ürün satışında ödeme yapılmazsa fatura veya sözleşmeye dayanarak icra takibi başlatılabilir. Tarımsal ürün ve hayvan satışından doğan alacakların takibi bu şekilde yürütülür. Borçlu ödeme emrine 7 gün içinde itiraz ederse, itirazın iptali veya kaldırılması yoluna gidilebilir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Haciz, kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir. Takibin kesinleşmesinden sonra borçlunun taşınır mal varlığı ile taşınmazları üzerinde haciz uygulanır. Hangi mal üzerinde işlem yapılacağı, dosyadaki belgelere ve takibin türüne göre belirlenir; haciz sonrası gerekirse satış yapılır." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Borçlu ödeme yapmazsa haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür. Ödeme emrine itiraz edilmemesi halinde takip kesinleşir ve haciz aşamasına geçilir. İtiraz edilirse takip durur; bu durumda itirazın iptali davası veya itirazın kaldırılması yoluna gidilebilir." },
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
    metaTitle: "Silivri İdare Avukatı | İptal ve Tam Yargı",
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
      { question: "Tarım arazisinin vasfı nasıl değiştirilir?", answer: "Tarım arazisinin vasfı için ilgili idari makamlara başvuru yapılır; ret halinde idare mahkemesinde dava açılabilir. Dava, idari işlemin tebliğinden itibaren 60 gün içinde açılmalıdır (İYUK m.7). Tarım arazisi vasıf değişikliği işlemlerine ilişkin idari dava süreçlerinde temsil sağlanır." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İmar planı ilan edildikten sonra yasal süre içinde idare mahkemesinde dava açılmalıdır. İdari davalarda dava açma süresi 60 gündür (İYUK m.7). Süre aşılırsa dava reddedilebilir; bu nedenle ilan tarihi önemlidir. İmar planı değişikliklerine karşı iptal davası bu kapsamda açılır." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ruhsat başvurusunun reddine karşı idare mahkemesinde dava açılabilir. Dava süresi, idari işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Belediye ruhsat işlemlerine itiraz bu kapsamda yapılır; ret kararının gerekçesi ve başvuru belgeleri dava dilekçesinin hazırlanmasında incelenir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, idari para cezasına karşı yasal süresinde idare mahkemesinde dava açılabilir. Genel dava süresi tebliğden itibaren 60 gündür (İYUK m.7). İdari para cezalarına karşı dava süreçlerinde temsil sağlanır; cezanın dayanağı olan işlem ve tebliğ tarihi dava açılmadan önce incelenir." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "İdarenin bir eyleminden zarar görenler, tam yargı davası yoluyla zararın tazminini talep edebilir. İdarenin işlem veya eyleminden kaynaklı zararlar için tazminat talebi bu dava ile ileri sürülür. Dava açılmadan önce idareye başvuru yapılması gerekebilir; zarar ve idarenin eylemi arasındaki bağ belgelerle ortaya konur." },
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
    metaTitle: "Silivri İş Hukuku Avukatı | İşe İade",
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
      { question: "Mevsimlik tarım işçisinin sigorta hakkı var mı?", answer: "Çalışma süresine göre değişmekle birlikte, mevsimlik işçiler de sigortalı sayılabilir. Mevsimlik tarım işçilerinin ücret ve sigorta uyuşmazlıklarında destek sağlanır. Sigortalılık durumu, çalışma süresi ve ödemelere ilişkin belgeler incelenerek değerlendirilir; eksik bildirim varsa bu belgelere dayanılarak talepte bulunulur." },
      { question: "Tarım işçisi iş kazası geçirirse ne yapılmalı?", answer: "Tarım işçisi iş kazası geçirirse olay derhal SGK'ya bildirilmeli, tedavi ve tazminat süreci başlatılmalıdır. İş kazasından doğan tazminat talepleri takip edilir. Kaza anına ilişkin bilgiler, tedavi belgeleri ve çalışma ilişkisini gösteren kayıtlar tazminat dosyasının hazırlanmasında kullanılır." },
      { question: "Silivri'de iş mahkemesi nerededir?", answer: "Silivri'deki iş davalarına bakan iş mahkemesi İstanbul Büyükçekmece Adliyesi bünyesindedir. İşe iade davası öncesinde zorunlu arabuluculuk süreci izlenir. Kıdem ve ihbar tazminatı, hafta tatili ve yıllık izin ücreti gibi işçilik alacaklarına ilişkin davalar da bu adliyede görülür." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir. Süreç, fesihten itibaren 1 ay içinde arabulucuya başvurularak başlar; anlaşma olmazsa son tutanaktan itibaren 2 hafta içinde dava açılır. İşe iade için İş K. m.18 uyarınca en az 30 işçi ve 6 ay kıdem aranır." },
      { question: "Mevsim sonunda işten çıkarılan işçinin hakları nelerdir?", answer: "Mevsim sonunda işten çıkarılan işçi için sözleşme türüne ve çalışma süresine göre kıdem veya ihbar tazminatı hakkı doğabilir. Ücret, hafta tatili ve yıllık izin gibi diğer işçilik alacakları da talep edilebilir. İbraname imzalanmadan önce iş sözleşmesi ve çıkış belgeleri hukuki açıdan incelenir." },
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
    metaTitle: "Silivri Kira ve Tahliye Avukatı | Tahliye",
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
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir tahliye taahhüdü veya ihtiyaç nedeniyle tahliye talep edilebilir. Kira borcunda ödeme için verilen süre TBK m.315 uyarınca 30 gündür; bu sürede ödeme yapılmazsa tahliye yolu açılır. Taahhüde dayalı tahliye icra yoluyla da istenebilir." },
      { question: "Yazlık kiralamada sezon sonu tahliye otomatik midir?", answer: "Hayır, tahliye otomatik değildir; sözleşmede belirlenen sürenin dolmasıyla kiracının taşınmazı teslim etmesi gerekir. Teslim yapılmazsa anlaşmazlık halinde hukuki yollara başvurulabilir. Sahil bölgesindeki yazlık veya sayfiye amaçlı kira sözleşmelerinde bu nedenle süre ve teslim hükümleri açıkça yazılmalıdır." },
      { question: "Silivri'de tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine bağlıdır; kira borcu, ihtiyaç veya tahliye taahhüdü gibi dayanağa göre değişir. Kira borcunda TBK m.315 uyarınca ödeme için 30 günlük süre tanınır, ardından dava veya takip yoluna gidilir. Taahhüde dayalı tahliye icra yoluyla da yürütülebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Rayiç bedel tespiti, mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Dava, rayiç kira bedelinin tespiti ve uyarlanması amacıyla açılır. Artış oranına ilişkin uyuşmazlıklarda sözleşme ve kira dönemi bilgileri mahkemeye sunulur; mahkeme gerekirse bilirkişi incelemesi yaptırabilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir. Taahhütnameye dayalı icra yoluyla tahliye işlemleri bu şekilde yürütülür. Taahhütnamenin geçerli olup olmadığı başvurudan önce incelenir; geçerlilik tartışmalıysa uyuşmazlık hukuki yollarla çözülebilir. Başvuru, taahhütnamenin içeriğine göre hazırlanır." },
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
    metaTitle: "Silivri Vergi Avukatı | Uzlaşma ve Dava",
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
      { question: "Çiftçilerin gelir vergisi yükümlülüğü nasıl belirlenir?", answer: "Çiftçilerin gelir vergisi yükümlülüğü, ürün türü, satış hacmi ve kanunda öngörülen istisnalara göre değerlendirilir. Tarımsal işletmelerde vergi incelemesi sürecinde danışmanlık verilir. Tarhiyata veya cezaya karşı ihbarnamenin tebliğinden itibaren 30 gün içinde vergi mahkemesinde dava açılabilir (İYUK m.7)." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Vergi ve ceza ihbarnamesine karşı tebliğden itibaren 30 gün içinde vergi mahkemesinde dava açılabilir (İYUK m.7). Süre içinde dava açılmazsa tarhiyat kesinleşebilir. Bu nedenle ihbarnamenin tebliğ tarihi ve içeriği ilk incelenen unsurlardır; uzlaşma talebi de bu süreçte değerlendirilebilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "Vergi davaları İstanbul vergi mahkemelerinde görülür. Vergi ve ceza ihbarnamesine karşı iptal davası ile ödeme emrine karşı dava bu mahkemelerde incelenir. İhbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür (İYUK m.7); vergisel işlemler Silivri Vergi Dairesi Müdürlüğü nezdinde yürütülür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma başvurusu dava hakkını ortadan kaldırmaz; uzlaşma sağlanamazsa kalan dava açma süresi korunur. Bu nedenle uzlaşma talebi süresi içinde yapılır ve vergi idaresi nezdinde temsil sağlanır. Uzlaşma olmazsa vergi mahkemesinde iptal davası açılabilir; tebliğ tarihi hesapta esas alınır." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır. Ödeme emrine karşı dava açılması bu kapsamdadır. Başvuru süresi tebliğ tarihinden başladığından, ödeme emrinin tebliğ şekli ve tarihi ilk incelenen konudur; ödeme emri ve ekleri dava dilekçesine eklenmek üzere hazırlanır." },
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
    metaTitle: "Silivri Borçlar Hukuku Avukatı | Alacak Davası",
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
      { question: "Satın alınan hayvan hastalıklı çıkarsa ne yapılabilir?", answer: "Satın alınan hayvan hastalıklı çıkarsa ayıba dayalı olarak sözleşmeden dönme veya bedel indirimi talep edilebilir. Hayvan alım-satımından doğan ayıp ve tazminat talepleri bu kapsamda takip edilir. Ayıbın fark edilir edilmez karşı tarafa bildirilmesi ve alım-satım belgelerinin saklanması önemlidir." },
      { question: "Tarımsal tedarik sözleşmesinde teslim gecikirse ne olur?", answer: "Tarımsal tedarik sözleşmesinde teslim gecikirse sözleşmede öngörülen gecikme cezası talep edilebilir, gerekirse sözleşmeden dönülebilir. Tarımsal ürün alım-satım ve tedarik sözleşmelerinin ifası veya ihlaline dayalı davalar bu kapsamda açılır. Teslim tarihi ve cezai şart hükümleri bu değerlendirmede incelenir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Ticari alacak davası, niteliğine göre asliye ticaret mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür. Alacak davası açılabileceği gibi icra takibi de yürütülebilir. Görevli mahkeme, uyuşmazlığın ticari nitelikte olup olmadığına göre belirlenir; alacağa dayanak sözleşme ve belgeler dava öncesinde incelenir." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, arabuluculuk her zaman şart değildir; yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Bu nedenle uyuşmazlığın niteliği dava açılmadan önce değerlendirilir. Gerekli olduğu halde arabulucuya başvurulmadan dava açılırsa dava usulden reddedilebilir. Bu inceleme dava hazırlığında ilk yapılan kontroldür." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse zamanaşımına uğramış alacak talep edilemez; ileri sürmezse talep edilebilir. Bu nedenle alacağın doğum tarihi ve zamanaşımı süresinin dolup dolmadığı dava veya takipten önce kontrol edilir. Sözleşme ve belgelerin incelenmesi bu kontrolün temelini oluşturur." },
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

export const silivriServices: PseoService[] = [...silivriBaseServices, silivriMiras];
