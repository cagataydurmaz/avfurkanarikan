import type { PseoService } from "./types";
import { maltepeMiras } from "./miras/maltepeMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const maltepeBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "maltepe-avukat",
    name: "Maltepe Avukat",
    heroTitle: "Maltepe Avukat",
    heroSubtitle:
      "1992'de Kartal'dan ayrılarak müstakil ilçe haline gelen ve Marmara Denizi'ne yaklaşık 7 kilometre kıyısı bulunan Maltepe'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında avukat Furkan Arıkan danışmanlık ve dava takibi hizmeti sunmaktadır; İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olan Arıkan'ın dosyaları, ilçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Maltepe Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Maltepe'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olduktan sonra İstanbul Barosu'na 72621 sicil numarasıyla kaydolan bir avukattır. 1992'de 3806 sayılı Kanun'la Kartal'dan ayrılarak kurulan, 53 km² yüzölçümü ve 2025 itibarıyla yaklaşık 525 bin nüfusuyla İstanbul'un Anadolu Yakası'ndaki köklü ilçelerinden biri olan Maltepe'de ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; ilçenin kendi adliyesi bulunmadığından davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür, randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik ve mağdur vekilliği." },
      { title: "Aile Hukuku", description: "Boşanma, velayet, nafaka ve mal paylaşımı uyuşmazlıklarında temsil." },
      { title: "Gayrimenkul Hukuku", description: "Gülsuyu-Gülensu ve Başıbüyük'teki kentsel dönüşüm dahil tapu ve kat karşılığı uyuşmazlıkları." },
      { title: "İş Hukuku", description: "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarında danışmanlık." },
      { title: "İcra Hukuku", description: "Alacak takibi, itiraz ve haciz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "Kentsel dönüşüm ve idari işlemlerin iptaline yönelik dava takibi." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı, ceza ve uzlaşma süreçlerinde danışmanlık." },
      { title: "Borçlar Hukuku", description: "Sözleşme, alacak ve inşaat sözleşmesi kaynaklı uyuşmazlıklar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması ve mağdur vekilliği",
      "Boşanma, velayet ve nafaka taleplerinde aile hukuku danışmanlığı",
      "Gülsuyu-Gülensu ve Başıbüyük'teki kentsel dönüşüm alanı dahil kat karşılığı inşaat sözleşmesi ve tapu uyuşmazlıkları",
      "İşe iade ve işçilik alacaklarına ilişkin iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlerin iptaline yönelik dava süreçleri",
      "Vergi tarhiyatı ve cezalarına karşı itiraz ve dava takibi",
      "Sözleşme ve alacak kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "Bizans döneminde Bryas adıyla anılan ve İmparator Theophilos'un 816 yılında yaptırdığı sarayın kalıntılarının bu bölgede bulunduğu belirtilen Maltepe, 3 Haziran 1992 tarihli Resmî Gazete'de yayımlanan 3806 sayılı Kanun'la Kartal ilçesinden ayrılarak müstakil ilçe haline gelmiştir; günümüzde 18 mahalleden oluşan ilçenin nüfusu 2025 itibarıyla 525 bini aşmış, yüzölçümü ise 53 km² olarak kayıtlara geçmiştir.",
      "Maltepe'nin kendi adliyesi bulunmadığından dava ve icra dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür; vergisel işlemler ise adını ilçenin Küçükyalı Mahallesi'nden alan, ancak fiziken Kartal'daki bir vergi daireleri kompleksinde hizmet veren Küçükyalı Vergi Dairesi Müdürlüğü üzerinden yürütülür.",
    ],
    faqs: [
      { question: "Maltepe'deki davalara hangi adliye bakıyor?", answer: "Maltepe'deki davalara Kartal'daki İstanbul Anadolu Adliyesi bakar. Maltepe'nin kendi adliyesi bulunmamaktadır; ilçedeki tüm dava ve icra dosyaları bu adliyede görülür. Vergi işlemleri ise Küçükyalı Vergi Dairesi Müdürlüğü üzerinden yürütülür; başvuru yolu dosyanın türüne göre belirlenir." },
      { question: "Randevu nasıl alınır?", answer: "Randevu WhatsApp veya telefon üzerinden talep edilir. Konunun kısa özeti ve varsa tebligat ya da süre bilgisi iletildiğinde uygun bir görüşme günü belirlenir. Görüşmeye kimlik, sözleşme, tebligat ve ödeme belgelerinin getirilmesi, hukuki durumun ilk görüşmede daha net değerlendirilmesini sağlar." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dosya takibi yapılır. Maltepe'de Gülsuyu-Gülensu'daki kentsel dönüşüm sözleşmeleri, Bağdat Caddesi'ndeki işletmelerin alacak ve işçilik uyuşmazlıkları ile sahil şeridindeki konutların mal rejimi tasfiyeleri öne çıkabilir." },
      { question: "Büro Maltepe'de mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır. Maltepe'deki müvekkillerle büroda yüz yüze ya da çevrim içi görüşülür ve aynı kapsamda hizmet verilir. Maltepe'deki davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görüldüğünden duruşma günlerinde ulaşım ve saat planı birlikte yapılabilir; dosyanın gelişmeleri müvekkille paylaşılır." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Ücret, dosyanın niteliğine ve gerektirdiği emeğe göre belirlenir ve randevu sırasında bildirilir. Danışmanlık görüşmesi ücrete tabidir; vekalet verilirse ücret yazılı olarak kararlaştırılır. Avukatlık Kanunu m.164 uyarınca ücret, Avukatlık Asgari Ücret Tarifesi'nin altında belirlenemez. Ücretin kapsamı ve ödeme şekli, belgeler incelendikten sonra açıkça konuşulur." },
      { question: "Maltepe'de hangi vergi dairesi yetkilidir?", answer: "İlçedeki mükelleflerin büyük bölümü, Küçükyalı Vergi Dairesi Müdürlüğü üzerinden işlem yapar. Müdürlük Bağlarbaşı, Girne, Altayçeşme, Başıbüyük, Cevizli, İdealtepe ve Altıntepe gibi mahalleleri kapsar. Vergi ve ceza ihbarnamelerine karşı dava, tebliğden itibaren 30 gün içinde vergi mahkemesinde açılabilir." },
      { question: "Gülsuyu-Gülensu'daki kentsel dönüşüm sürecinde hukuki destek alınabilir mi?", answer: "Evet, kat karşılığı inşaat sözleşmesinin incelenmesi ve hak sahipliği uyuşmazlıklarında danışmanlık sağlanır. Arsa payı karşılığı inşaat sözleşmesinin resmi şekilde düzenlenmesi gerekir; sözleşme, tapu kaydı ve müteahhitle yazışmalar incelenerek dava, tespit veya idari başvuru gibi yollar değerlendirilir." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Görüşmeler tercihe göre yüz yüze veya çevrim içi planlanabilir. Yüz yüze görüşmeler Beşiktaş/Sinanpaşa'daki büroda yapılır; çevrim içi görüşmede belgeler WhatsApp veya e-posta ile paylaşılabilir. Randevu telefon ya da WhatsApp üzerinden talep edilir ve görüşme biçimi müvekkille birlikte belirlenir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Gözaltı halinde vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmelidir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar ve şüpheliye eşlik edilebilir. Ad, gözaltı yeri ve olayın kısa özeti paylaşıldığında sürecin ilk adımları hızla planlanabilir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca dosyadaki gelişmeler müvekkille paylaşılır. Duruşma tarihleri, mahkeme veya idare tarafından yapılan işlemler ve yeni evraklar hakkında bilgi verilir. Vekalet verilen dosyalarda gelişmeler WhatsApp, telefon veya yüz yüze görüşme gibi müvekkilin tercih ettiği yollarla aktarılır." },
    ],
    howToTitle: "Maltepe'de Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Maltepe Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "maltepe-bosanma-avukati",
    name: "Maltepe Boşanma Avukatı",
    heroTitle: "Maltepe Boşanma Avukatı",
    heroSubtitle:
      "Maltepe'de anlaşmalı veya çekişmeli olarak açılan boşanma davalarında velayet, nafaka ve mal rejimi tasfiyesi taleplerine ilişkin temsil sağlanır; sahil şeridindeki site ve rezidans nitelikli konutların da dahil olduğu mal paylaşımı süreçlerinde aile mahkemesi davaları, ilçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Maltepe Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Maltepe'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Aile hukuku kapsamında Maltepe'deki müvekkillerine boşanma, velayet ve nafaka süreçlerinde temsil sağlayan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Mal Rejimi Tasfiyesi", description: "İdealtepe ve Altıntepe gibi sahil mahallelerindeki konutlar dahil mal varlığının paylaşımı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Sahil şeridindeki site ve rezidans konutlarını da kapsayan mal rejimi tasfiyesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Marmara Denizi'ne yaklaşık 7 kilometre kıyısı bulunan Maltepe'de, özellikle İdealtepe ve Altıntepe gibi sahil şeridine yakın mahallelerdeki site ve rezidans nitelikli konutlar, boşanma sürecindeki mal rejimi tasfiyelerinde değerlemeye konu olan taşınmazlar arasında öne çıkmaktadır.",
      "Boşanma, velayet ve nafaka davalarına, Maltepe'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki aile mahkemesinde bakılır; anlaşmalı süreçte protokolün eksiksizliği, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Boşanma davası için Kartal'daki İstanbul Anadolu Adliyesi'ndeki aile mahkemesine başvurulur; Maltepe'nin kendi adliyesi bulunmamaktadır. TMK m.168 uyarınca yetkili mahkeme, eşlerden birinin yerleşim yeri mahkemesi veya eşlerin son birlikte oturduğu yer mahkemesidir. Velayet ve nafaka talepleri de aynı mahkemede görülür." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Evet, çocuk belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir. Mahkeme velayet düzenlemesinde çocuğun yararını esas alır; çocuğun yaşı, ihtiyaçları ve ebeveynlerle ilişkisi birlikte değerlendirilir. Çocuğun görüşü bağlayıcı olmayıp kararın dayanaklarından yalnızca biri olarak ele alınır." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Nafaka miktarı, tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilerek belirlenir. Mahkeme, nafaka ödeyecek tarafın ödeme gücünü ve nafaka alacak tarafın ihtiyacını gelir belgeleri, maaş bordroları ve harcama kalemleri üzerinden inceler. Koşullar değişirse nafakanın artırılması, azaltılması veya kaldırılması talep edilebilir." },
      { question: "Sahil şeridindeki bir sitedeki konut mal paylaşımını nasıl etkiler?", answer: "Taşınmazın güncel rayiç değeri, tapu kaydı ve varsa kira getirisi bilirkişi incelemesiyle değerlemeye esas alınır. İdealtepe ve Altıntepe gibi sahil şeridine yakın mahallelerdeki site ve rezidans nitelikli konutlar, mal rejimi tasfiyesinde edinilme tarihi ve katkı oranına göre değerlendirilir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir veya takipten vazgeçilebilir. Boşanma davası sürerken eşler barışırsa mahkemeye bu yönde beyanda bulunulur. Dava açılmış olması barışmaya engel değildir; ancak sürecin hukuki sonuçları, örneğin geçici nafaka ve velayet düzenlemeleri, mahkeme tarafından ayrıca değerlendirilir." },
    ],
    howToTitle: "Maltepe'de Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "İhtiyaç Analizi", text: "Velayet, nafaka ve mal rejimi talepleri değerlendirilir." },
      { name: "Dilekçe Hazırlığı", text: "Duruma uygun dava dilekçesi ya da protokol hazırlanır." },
      { name: "Dava Açılışı", text: "Yetkili aile mahkemesine başvuru yapılır." },
      { name: "Sonuç", text: "Duruşma sürecinin ardından karar açıklanır." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "ziynet-esyasi-davasi"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "maltepe-ceza-avukati",
    name: "Maltepe Ceza Avukatı",
    heroTitle: "Maltepe Ceza Avukatı",
    heroSubtitle:
      "Soruşturma aşamasındaki gözaltı ve ifade süreçlerinden kovuşturma aşamasındaki duruşmalara kadar müdafilik hizmeti sunulur; Maltepe'nin kendi adliyesi bulunmadığından ceza davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Maltepe Ceza Avukatı | Müdafilik",
    metaDescription:
      "Maltepe'de soruşturma, kovuşturma, tutukluluğa itiraz ve ceza yargılamasının tüm aşamalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "2019 MEF Üniversitesi Hukuk Fakültesi mezunu olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, Maltepe'deki şüpheli ve sanıklara soruşturma ve kovuşturma aşamalarında müdafilik hizmeti vermektedir.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Yoğun Ulaşım Noktalarına Bağlı Olaylar", description: "M4, Marmaray istasyonları ve sahil hattı çevresindeki asayiş olaylarında savunma." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "M4 ve Marmaray istasyonları ile sahil hattı çevresindeki asayiş olaylarında savunma",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "M4 metro hattının beş istasyonu, Marmaray'ın dört durağı ve Adalar'a deniz otobüsü seferlerinin kalktığı iskelesiyle Anadolu Yakası'nın işlek ulaşım noktalarından birini barındıran Maltepe'de, istasyon çevreleri ve sahil hattı gibi yoğun nüfus hareketliliğine sahip alanlardaki olaylara ilişkin ceza yargılamaları sık karşılaşılan bir alandır.",
      "Maltepe'de başlatılan ceza soruşturmaları ve bunlara bağlı kovuşturmalar, ilçenin kendi adliyesi bulunmaması nedeniyle Kartal'daki İstanbul Anadolu Adliyesi'nde yürütülür; şüphelinin müdafi ile görüşme hakkı gözaltının başladığı andan itibaren doğar.",
    ],
    faqs: [
      { question: "Maltepe'de bir ceza davası hangi adliyede görülür?", answer: "Maltepe'deki ceza davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür; ilçenin kendi adliyesi bulunmamaktadır. Ceza soruşturma ve kovuşturmaları bu adliyede yürütülür; soruşturma aşamasında ifade ve işlemler savcılık ve kolluk nezdinde yapılır. Gözaltı halinde müdafi ile görüşme hakkı hemen doğar." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Şüphelinin ifadesi müdafi bulunmadan da alınabilir; ancak müdafi bulundurulması önerilir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar. Müdafi, soruşturma dosyasını inceleyerek ifadenin içeriği ve haklar konusunda şüpheliye yol gösterir; ifade öncesinde iletişime geçmek bu nedenle faydalıdır." },
      { question: "Kalabalık bir istasyon veya sahil hattında yaşanan bir olayda ne yapılmalı?", answer: "Delillerin toplanması ve varsa şikayet dilekçesinin hazırlanması için vakit kaybetmeden hukuki destek alınması önerilir. Maltepe'de istasyon çevreleri ve sahil hattı gibi kalabalık alanlarda kamera kayıtları, tanık bilgileri ve sağlık raporları delil olarak değerlendirilir. Şikayet, savcılığa ya da kolluğa yapılabilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, kovuşturmaya yer olmadığı kararına karşı sulh ceza hakimliğine itiraz edilebilir. İtiraz süresi kararın tebliğinden itibaren 15 gündür. Mağdur veya şikayetçi, savcılığın dosyayı takipsizlikle sonuçlandırdığı hallerde bu yola başvurarak kararın yeniden incelenmesini isteyebilir; itiraz dilekçesi gerekçeleriyle hazırlanır." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Uzlaşma sağlanamazsa yargılamaya kaldığı yerden devam edilir. Uzlaşmaya tabi suçlarda taraflar bir araya getirilir; anlaşma olmazsa soruşturma veya kovuşturma olağan akışında sürer ve dosya iddianame ile mahkemeye taşınabilir. Uzlaşma görüşmelerinde ileri sürülen beyanlar dosyanın ilerleyişini kendiliğinden belirlemez." },
    ],
    howToTitle: "Maltepe'de Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "maltepe-gayrimenkul-avukati",
    name: "Maltepe Gayrimenkul Avukatı",
    heroTitle: "Maltepe Gayrimenkul Avukatı",
    heroSubtitle:
      "Gülsuyu-Gülensu ve Başıbüyük'teki kentsel dönüşüm sürecine ilişkin kat karşılığı inşaat sözleşmeleri ve hak sahipliği uyuşmazlıkları ile sahil şeridindeki taşınmaz alım-satım işlemlerinde hukuki destek sağlanır; davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Maltepe Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Maltepe'de Gülsuyu-Gülensu kentsel dönüşümü, tapu iptali ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı ve MEF Üniversitesi Hukuk Fakültesi'nin 2019 mezunu bir avukat olarak, Maltepe'deki kentsel dönüşüm sürecindeki sözleşme ve hak sahipliği uyuşmazlıkları ile tapu davalarında müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Kentsel Dönüşüm Uyuşmazlıkları", description: "Gülsuyu-Gülensu ve Başıbüyük'teki dönüşüm sürecinde kat karşılığı sözleşme ve hak sahipliği uyuşmazlıkları." },
      { title: "Sahil Şeridi Taşınmazları", description: "İdealtepe, Altıntepe ve Küçükyalı'daki konut alım-satım işlemleri." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Ortaklığın Giderilmesi", description: "Miras veya paylı mülkiyetten doğan taşınmazların satış yoluyla paylaştırılması." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gülsuyu-Gülensu ve Başıbüyük'teki kentsel dönüşüm sürecinde kat karşılığı inşaat sözleşmelerinin hazırlanması ve incelenmesi",
      "Hak sahipliği tespiti ve müteahhide karşı açılan uyuşmazlık davaları",
      "İdealtepe, Altıntepe ve Küçükyalı'daki konut alım-satımında tapu ve imar durumu incelemesi",
      "Tapu iptali ve tescil davalarının açılması",
      "Ortaklığın giderilmesi (izale-i şuyu) davaları",
      "Kira bedeli tespiti ve uyarlama davaları",
    ],
    localParagraphs: [
      "İstanbul'un ilk gecekondu yerleşimlerinden biri olan ve 1950'lerden itibaren E-5 çevresindeki sanayileşmeyle birlikte kırsaldan gelen göçle büyüyen Gülsuyu ve Gülensu mahallelerinde, 2017 yılında başlayan kentsel dönüşüm kapsamında 14.310 yapıdan 13.500'ü dönüşüm alanına dahil edilmiştir; komşu Başıbüyük Mahallesi'ndeki dönüşüm ise Parsel 49 projesiyle 2021 yılında tamamlanmıştır.",
      "Bu tür kentsel dönüşüm sözleşmeleri ile tapu uyuşmazlıkları, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Maltepe'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    ],
    faqs: [
      { question: "Gülsuyu-Gülensu'daki kentsel dönüşüm sürecinde hak sahipliği nasıl korunur?", answer: "Kat karşılığı sözleşmesi ve hak sahipliği belgeleri incelenerek, müteahhitle olan uyuşmazlıklarda hukuki yollara başvurulabilir. Tapu kaydı, sözleşme ve yazışmaların saklanması önemlidir. Gülsuyu-Gülensu'daki dönüşümde sözleşme, noterde veya tapu sicil müdürlüğünde resmi şekilde yapılmadıysa geçersiz sayılabilir; bu nedenle belgeler birlikte incelenir." },
      { question: "Kat karşılığı inşaat sözleşmesi hangi şekilde yapılmalı?", answer: "Kanun gereği arsa payı karşılığı inşaat sözleşmesi resmi şekil şartına tabidir; noter düzenlemesi olmadan yapılan sözleşme geçersizdir. Gülsuyu-Gülensu ve Başıbüyük'teki dönüşüm sürecinde bu şekil şartına uyulmaması uygulamada uyuşmazlık konusu olabilir. Sözleşmenin şekil ve içerik bakımından incelenmesi hak kaybını önlemeye yardımcı olur." },
      { question: "Maltepe'de gayrimenkul davası hangi mahkemede görülür?", answer: "Gayrimenkul davaları, uyuşmazlığın niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. Maltepe'nin kendi adliyesi bulunmamaktadır. Kira ve tahliye davaları sulh hukuk, tapu iptali ve tescil davaları asliye hukuk mahkemesinde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Tapu iptal davası, hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tarafından açılabilir. Sahte vekaletname, muvazaa veya geçersiz sözleşmeye dayanan tescil gibi durumlarda iptal ve tescil talep edilir. Dava, taşınmazın bulunduğu yer mahkemesinde görülür; tapu kaydı ve dayanak belgeler incelenerek dava dilekçesi hazırlanır." },
      { question: "Başıbüyük'teki dönüşüm projesi tamamlandı mı?", answer: "Parsel 49 olarak bilinen ilk etap 2021'de tamamlanmıştır; sonraki etaplara ilişkin hak sahipliği uyuşmazlıkları gündeme gelebilmektedir. Başıbüyük'teki dönüşümde sözleşme, tapu kaydı ve hak sahipliği belgeleri incelenerek uyuşmazlık halinde hukuki yollar değerlendirilir. Davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür." },
    ],
    howToTitle: "Maltepe'de Tapu ve Kentsel Dönüşüm Uyuşmazlığı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Kayıt İncelemesi", text: "Tapu, imar durumu ve varsa kat karşılığı sözleşmesi incelenir." },
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
    urlSlug: "maltepe-icra-avukati",
    name: "Maltepe İcra Avukatı",
    heroTitle: "Maltepe İcra Avukatı",
    heroSubtitle:
      "Bağdat Caddesi'nin Küçükyalı'da sona eren bölümündeki işletmeler ile bireysel alacaklılara yönelik icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır; Maltepe'nin kendi adliyesi bulunmadığından icra daireleri Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir.",
    metaTitle: "Maltepe İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Maltepe'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Maltepe'deki alacaklı ve borçlu taraflara icra ve iflas hukuku kapsamında danışmanlık veren Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "Esnaf ve Ticari Alacaklar", description: "Bağdat Caddesi'nin Maltepe ucundaki işletmeler arası alacak takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "Bağdat Caddesi üzerindeki işletmeler ile ilçe genelindeki esnaf arasındaki ticari alacakların takibi",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Bağdat Caddesi'nin doğuya uzanan son bölümünün Küçükyalı Mahallesi sınırları içinde sona erdiği Maltepe'de, cadde üzerindeki işletmeler ile ilçe genelindeki esnaf arasındaki fatura ve sözleşme kaynaklı alacakların icra yoluyla tahsili sık başvurulan bir yoldur.",
      "İcra takiplerine ilişkin itiraz ve şikayetler, Maltepe'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki icra mahkemelerinde görülür; borçlunun Maltepe'de yerleşik olduğu takiplerde yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "İcra takibi, sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlatılabilir. Alacağın dayanağını gösteren belgeler takip talebine eklenir; ilamlı takipte mahkeme kararı, ilamsız takipte ise alacağı ispata yarayan belge esas alınır. Takip talebi, yetkili icra dairesine sunulur ve borçluya ödeme emri gönderilir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Ödeme emrine itiraz süresi, tebliğden itibaren 7 gündür. İİK m.62 uyarınca borçlu bu süre içinde icra dairesine itiraz ederse takip durur. Sürenin kaçırılması halinde takip kesinleşebilir; bu nedenle ödeme emrinin tebliğ tarihi ve tebligat evrakı dikkatle saklanmalı, süre dolmadan değerlendirme yapılmalıdır." },
      { question: "Bağdat Caddesi üzerindeki bir işletmenin fatura alacağı için icra takibi nasıl başlatılır?", answer: "Fatura ve varsa sözleşme belgeleri toplanarak yetkili icra dairesinde takip dosyası açılır. Borçluya ödeme emri gönderilir; borçlu 7 gün içinde itiraz etmezse takip kesinleşir. Maltepe'de borçlunun yerleşik olduğu takiplerde yetkili icra dairesi kural olarak ikametgah esas alınarak belirlenir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Haciz, kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir. Borçlunun taşınmaz kayıtları, banka hesapları ve diğer mal varlığı üzerinden işlem yapılabilir; kanunda haczedilemez sayılan mallar ise kapsam dışındadır. Haciz, ödeme emrinin kesinleşmesinden sonra alacaklının talebi üzerine icra dairesi tarafından uygulanır." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Borçlu ödeme yapmazsa haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür. Ödeme emrine itiraz edilmezse takip kesinleşir; alacaklı haciz talep eder, haczedilen mallar satış aşamasına taşınır. Borçlu itiraz ederse itirazın iptali veya kaldırılması davası gibi yollar değerlendirilir." },
    ],
    howToTitle: "Maltepe'de İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "maltepe-idare-avukati",
    name: "Maltepe İdare Avukatı",
    heroTitle: "Maltepe İdare Avukatı",
    heroSubtitle:
      "Gülsuyu-Gülensu ve Başıbüyük'teki kentsel dönüşüm sürecindeki riskli alan/yapı tespiti ve uygulama işlemleri ile belediye imar kararlarına karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Maltepe İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Maltepe'de idari işlemlerin iptali, kentsel dönüşüm sürecine ilişkin idari uyuşmazlıklar ve tazminat davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Maltepe'deki müvekkillerine idari işlemlerin iptali ve tam yargı davalarında danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup MEF Üniversitesi Hukuk Fakültesi'ni 2019'da tamamlamıştır.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Kentsel Dönüşüm İşlemleri", description: "Gülsuyu-Gülensu ve Başıbüyük'teki riskli alan/yapı tespitine ve uygulama işlemlerine itiraz." },
      { title: "Belediye İmar Uygulamaları", description: "Ruhsat ve imar planı kararlarına karşı dava süreçleri." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gülsuyu-Gülensu ve Başıbüyük'teki kentsel dönüşüm alanında riskli yapı ve uygulama işlemlerine karşı idari dava süreçleri",
      "Belediye imar planı kararlarına karşı iptal davası açılması",
      "Ruhsat başvurusu ret işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "2017 yılında başlayan Gülsuyu-Gülensu kentsel dönüşümü ile komşu Başıbüyük Mahallesi'ndeki Parsel 49 projesi kapsamında yürütülen riskli alan tespiti ve uygulama imar planı onayı gibi idari işlemler, Maltepe'deki idari dava konularının başında gelmektedir.",
      "Gülsuyu-Gülensu ve Başıbüyük'teki riskli alan/yapı tespiti ile uygulama işlemlerine karşı açılacak davalara İstanbul idare mahkemelerinde bakılır; işlemin tebliğ veya ilan tarihinden itibaren altmış günlük yasal süre geçirildiğinde idari işlem kesinleşerek dava hakkı ortadan kalkar.",
    ],
    faqs: [
      { question: "Riskli alan/yapı tespitine karşı hangi sürede dava açılmalı?", answer: "Riskli alan veya yapı tespitine karşı, tebliğ veya öğrenme tarihinden itibaren 60 gün içinde idare mahkemesinde dava açılabilir. İYUK m.7 uyarınca bu süre kaçırılırsa iptal davası yolu kapanabilir. Gülsuyu-Gülensu ve Başıbüyük'te tespit yazısının tebliğ tarihi ve ekleri süre hesabı için saklanmalıdır." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde iptal davası açılabilir. Ret işleminin tebliğinden itibaren 60 gün içinde dava açılması gerekir; bu süre İYUK m.7 uyarınca belirlenir. Dava için ret yazısı, başvuru evrakı ve ilgili imar belgeleri toplanır; işlemin gerekçesi bu belgeler üzerinden değerlendirilir." },
      { question: "Kentsel dönüşüm uygulama projesine itiraz edilebilir mi?", answer: "Evet, hukuka aykırılık iddiasıyla idare mahkemesinde iptal davası açılabilir. Uygulama imar planı onayı gibi idari işlemlere karşı dava, tebliğ veya ilan tarihinden itibaren 60 gün içinde açılır. Gülsuyu-Gülensu ve Başıbüyük'te dava dilekçesinde işlemin hangi yönden hukuka aykırı olduğu belgelerle ortaya konur." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, idari para cezasına karşı yasal süresinde dava açılabilir. İdari işlemlere karşı iptal davası genel kural olarak tebliğden itibaren 60 gün içinde idare mahkemesinde açılır; ceza tutanağında farklı bir başvuru yolu belirtilmişse o yol esas alınmalıdır. Tutanak, tebliğ zarfı ve ödeme belgeleri saklanmalıdır." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "İdarenin işlem veya eyleminden zarar görenler, tam yargı davası yoluyla zararın tazminini talep edebilir. Dava idare mahkemesinde açılır; zararın idarenin işlemi veya eylemiyle bağlantısı belgelerle gösterilir. Önce idareye başvuru yapılması gereken hallerde başvuru yolu ve süreler dosyaya göre ayrıca belirlenir." },
    ],
    howToTitle: "Maltepe'de İdari İptal Davası Nasıl Açılır?",
    howToSteps: [
      { name: "İnceleme", text: "İptali istenen işlem ve tebliğ/ilan tarihi belirlenir." },
      { name: "Süre Takibi", text: "60 günlük yasal süre hesaplanır." },
      { name: "Dilekçe Hazırlığı", text: "Talep ve gerekçeler dilekçeye işlenir." },
      { name: "Yargılama", text: "İdare mahkemesi dosyayı inceleyip karar verir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: ["idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "maltepe-is-hukuku-avukati",
    name: "Maltepe İş Hukuku Avukatı",
    heroTitle: "Maltepe İş Hukuku Avukatı",
    heroSubtitle:
      "1997'de kurulan Maltepe Üniversitesi'nin personeli ile Bağdat Caddesi üzerindeki işletmelerde çalışanlar dahil olmak üzere kıdem-ihbar tazminatı, işe iade ve işçilik alacağı taleplerinde temsil sağlanır; ilçenin kendi adliyesi bulunmadığından iş mahkemesi davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Maltepe İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Maltepe'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Maltepe'deki çalışanlara ve işverenlere iş hukuku kapsamında danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup 2019'da MEF Üniversitesi Hukuk Fakültesi'ni bitirmiştir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Eğitim ve Ticaret Çalışanları", description: "Maltepe Üniversitesi'ndeki idari/akademik personel ile Bağdat Caddesi üzerindeki işletme çalışanlarının hakları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Bağdat Caddesi üzerindeki mağaza ve işletme çalışanlarının işçilik alacaklarının tahsili",
      "Fazla mesai ve yıllık izin ücreti gibi diğer işçilik alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "1997 yılında İstanbul Marmara Eğitim Vakfı tarafından kurulan ve ilçedeki Marmara Eğitim Köyü'nde faaliyet gösteren Maltepe Üniversitesi'nin akademik ve idari personelinin yanı sıra, Bağdat Caddesi'nin Küçükyalı'daki son bölümünde yoğunlaşan mağaza ve işletmelerde çalışanların işçilik alacağı ve işe iade talepleri, ilçedeki iş hukuku uyuşmazlıklarının önemli bir bölümünü oluşturmaktadır.",
      "Arabuluculuk aşamasında taraflar anlaşamazsa, Maltepe Üniversitesi personeli ile Bağdat Caddesi işletmelerindeki çalışanları da kapsayan işe iade ve işçilik alacağı davalarına, ilçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki iş mahkemesi bakar.",
    ],
    faqs: [
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Kıdem tazminatı, çalışma süresi ve son brüt giydirilmiş ücret esas alınarak hesaplanır. Çalışılan her tam yıl için bir aylık giydirilmiş ücret üzerinden hesap yapılır; artan süre de orantılı olarak eklenir. Giydirilmiş ücrete yemek, yol gibi düzenli yan haklar dahil edilir; bu nedenle bordro ve iş sözleşmesi incelenir." },
      { question: "Maltepe'de iş mahkemesi nerededir?", answer: "Maltepe'deki iş davalarına Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki iş mahkemesi bakar; ilçenin kendi adliyesi bulunmamaktadır. İşe iade ve işçilik alacağı davalarında kanunda öngörülen hallerde önce arabuluculuğa başvurulur. Arabuluculukta anlaşma sağlanamazsa dava aynı adliyedeki iş mahkemesinde açılır." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "İşe iade sürecinin toplam süresi dosyaya göre değişir ve kesin bir süre öngörülemez. Önce fesihten itibaren 1 ay içinde arabulucuya başvurulur; anlaşma olmazsa son tutanaktan itibaren 2 hafta içinde dava açılır. İş K. m.18 uyarınca 30 işçi ve 6 ay kıdem koşulu aranır." },
      { question: "Bağdat Caddesi üzerindeki bir mağaza çalışanının fazla mesai hakkı nasıl ispatlanır?", answer: "Giriş-çıkış kayıtları, vardiya çizelgeleri, bordro ve tanık beyanıyla ispat edilebilir. Bağdat Caddesi üzerindeki mağaza ve işletmelerde çalışanlar için vardiya listeleri ve kasa veya kart geçiş kayıtları da önem taşır. Bordrodaki fazla mesai tahakkukları ispatta değerlendirilir; kayıtların saklanması önerilir." },
      { question: "İşe iade davası açmadan önce arabuluculuğa gitmek zorunlu mu?", answer: "Evet, dava şartı olarak öncelikle arabulucuya başvurulması gerekir. Fesihten itibaren 1 ay içinde arabulucuya başvurulur; anlaşma olmazsa son tutanaktan itibaren 2 hafta içinde dava açılır. İş K. m.18 uyarınca 30 işçi ve 6 ay kıdem koşulu aranır; dava Kartal'daki iş mahkemesinde açılır." },
    ],
    howToTitle: "Maltepe'de İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "maltepe-kira-tahliye-avukati",
    name: "Maltepe Kira ve Tahliye Avukatı",
    heroTitle: "Maltepe Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Bağdat Caddesi'nin Küçükyalı'daki işyeri kiralamaları, sahil şeridindeki konut kiraları ve tahliye uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemesi davaları Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir.",
    metaTitle: "Maltepe Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Maltepe'de kiracı tahliyesi, konut ve işyeri kira sözleşmesi uyuşmazlıkları ve kira bedeli tespitinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Maltepe'deki kiraya verenlere ve kiracılara kira hukuku alanında danışmanlık veren Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş, İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur.",
    highlightCards: [
      { title: "Sahil Şeridi Konutları", description: "İdealtepe, Altıntepe ve Küçükyalı'daki konut kiralamalarına ilişkin uyuşmazlıklar." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve tahliye taahhüdüne dayalı süreçler." },
      { title: "İşyeri Kiraları", description: "Bağdat Caddesi'nin Küçükyalı'daki son bölümündeki mağaza kiralamaları." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedelinin belirlenmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İdealtepe, Altıntepe ve Küçükyalı'daki konut kiralamalarına ilişkin sözleşme incelemesi",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Bağdat Caddesi üzerindeki mağaza kiralarında rayiç bedel tespiti",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "M4 ve Marmaray istasyonlarına yakınlığı nedeniyle Cevizli, Girne ve Esenkent gibi mahallelerde kiracı devir hızının yüksek seyrettiği Maltepe'de, konut kira sözleşmelerinde depozito ve tahliye taahhüdü şartlarının net biçimde belirlenmesi uyuşmazlıkları önlemek açısından önem taşır.",
      "Sulh hukuk mahkemesi sıfatıyla bu tür kira ve tahliye uyuşmazlıklarına Kartal'daki İstanbul Anadolu Adliyesi'nde bakılır, çünkü Maltepe'nin kendi adliyesi yoktur; sözleşmenin yazılı yapılması ve tahliye taahhüdü gibi belgelerin eksiksiz saklanması, uyuşmazlık çıktığında ispat yükünü kolaylaştırır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir tahliye taahhüdü veya ihtiyaç nedeniyle kiracının tahliyesi talep edilebilir. Kira borcunda TBK m.315 uyarınca kiracıya en az 30 gün süre verilerek ihtar gönderilir; süre içinde ödeme yapılmazsa tahliye yolu açılır. Dava sulh hukuk mahkemesinde, taahhütte icra yoluyla açılır." },
      { question: "Bağdat Caddesi'ndeki bir işyerinin kira bedeli nasıl güncellenir?", answer: "İşyeri kira bedeli, sözleşmedeki artış oranı veya yasal sınırlar çerçevesinde güncellenir; uyuşmazlık halinde rayiç bedel tespiti istenebilir. Bağdat Caddesi üzerindeki işyeri kiralarında tarafların uzlaşamadığı durumlarda mahkemeden kira bedelinin tespiti istenir. Kira sözleşmesi ve önceki artış kayıtları bu değerlendirmede incelenir." },
      { question: "Maltepe'de tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine göre değişir; birkaç aydan bir yıla kadar sürebilir. Sürenin uzunluğu tebligatın ulaşması, bilirkişi incelemesi ve itirazlar gibi etkenlere bağlıdır. Dava Kartal'daki İstanbul Anadolu Adliyesi'ndeki sulh hukuk mahkemesinde görülür; sözleşmenin yazılı ve eksiksiz olması ispatı kolaylaştırır." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Rayiç bedel tespiti, mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Kira artışı konusunda taraflar anlaşamazsa mahkemeden kira bedelinin belirlenmesi istenir; mahkeme çevredeki benzer kiraları ve taşınmazın özelliklerini bilirkişi aracılığıyla inceler. Mevcut sözleşme ve önceki kira ödemeleri bu inceleme için gereklidir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir. Taahhütnamenin kiracı tarafından kiralananın tesliminden sonra yazılı olarak verilmiş olması ve geçerlilik şartlarını taşıması gerekir. Taahhütname geçerli değilse veya itiraz edilirse uyuşmazlık sulh hukuk mahkemesinde görülür." },
    ],
    howToTitle: "Maltepe'de Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "maltepe-vergi-avukati",
    name: "Maltepe Vergi Avukatı",
    heroTitle: "Maltepe Vergi Avukatı",
    heroSubtitle:
      "Küçükyalı Vergi Dairesi Müdürlüğü'ne bağlı Maltepe mükelleflerine yönelik vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Maltepe Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Maltepe'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Maltepe'deki mükelleflerin vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarında danışmanlık veren Furkan Arıkan, İstanbul Barosu sicil no 72621 ile kayıtlı olup 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Esnaf ve İşletme Uyuşmazlıkları", description: "Bağdat Caddesi ve ilçe genelindeki işletmelerin vergi inceleme süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Bağdat Caddesi ve ilçe genelindeki işletmelerin vergi inceleme süreçlerinde danışmanlık",
      "Gayrimenkul kira gelirlerinin beyanına ilişkin uyuşmazlıklarda destek",
    ],
    localParagraphs: [
      "Maltepe mükelleflerinin büyük bölümünün vergisel işlemleri, adını ilçenin Küçükyalı Mahallesi'nden alan ancak fiziken Kartal'daki bir vergi daireleri kompleksinde hizmet veren Küçükyalı Vergi Dairesi Müdürlüğü üzerinden yürütülür; bu müdürlük Bağlarbaşı, Girne, Altayçeşme, Feyzullah, Başıbüyük, Büyükbakkalköy, Zümrütevler, Cevizli, Yalı, İdealtepe, Çınar, Aydınevler, Altıntepe ve Fındıklı mahallelerini kapsamaktadır.",
      "Bağdat Caddesi üzerindeki işletmeler ile ilçe genelindeki esnafın vergi uyuşmazlıkları sık karşılaşılan konular arasındadır. İhbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "Maltepe'de hangi vergi dairesi yetkilidir?", answer: "İlçedeki mükelleflerin büyük bölümü, Küçükyalı Vergi Dairesi Müdürlüğü üzerinden işlem yapar. Müdürlük Bağlarbaşı, Girne, Altayçeşme, Başıbüyük, Cevizli, İdealtepe ve Altıntepe gibi mahalleleri kapsar. Vergi ve ceza ihbarnamelerine karşı dava, tebliğden itibaren 30 gün içinde vergi mahkemesinde açılabilir." },
      { question: "Küçükyalı Vergi Dairesi Müdürlüğü Maltepe'nin neresinde?", answer: "Müdürlük, adını ilçenin Küçükyalı Mahallesi'nden almakla birlikte fiziken Kartal'daki bir vergi daireleri kompleksinde hizmet vermektedir. Maltepe mükelleflerinin büyük bölümünün vergi işlemleri bu müdürlük üzerinden yürütülür. Vergi ve ceza ihbarnamelerine karşı dava, tebliğden itibaren 30 gün içinde vergi mahkemesinde açılabilir." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "İhbarnameye karşı tebliğden itibaren 30 gün içinde vergi mahkemesinde dava açılabilir. İYUK m.7 uyarınca vergi davalarında dava açma süresi 30 gündür. Süre tebliğ tarihinden başladığı için ihbarnamenin tebliğ zarfı ve tarihi saklanmalıdır; ihbarname ve eklerinin dava dilekçesine bağlanması gerekir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "Vergi davaları, İstanbul vergi mahkemelerinde görülür. Vergi ve ceza ihbarnamelerine karşı iptal davası bu mahkemede açılır; dava açma süresi tebliğden itibaren 30 gündür. Uzlaşma yoluna başvurulsa bile kalan dava açma süresi dikkate alınmalı, süre geçirilmeden dosya değerlendirilmelidir." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur. Uzlaşma başvurusu vergi idaresi nezdinde yapılır; anlaşma olmazsa mükellef vergi mahkemesinde dava açabilir. Dava açma süresi 30 gün olduğundan uzlaşma tutanağı ve tebliğ tarihleri sürenin ne kadar kaldığını belirlemek için dikkatle takip edilmelidir." },
    ],
    howToTitle: "Maltepe'de Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "maltepe-borclar-hukuku-avukati",
    name: "Maltepe Borçlar Hukuku Avukatı",
    heroTitle: "Maltepe Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Kentsel dönüşüm sürecindeki kat karşılığı inşaat sözleşmesi uyuşmazlıkları, ticari alacak talepleri ve tazminat davalarında temsil sağlanır; asliye hukuk mahkemesi davaları Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir.",
    metaTitle: "Maltepe Borçlar Hukuku Avukatı | Alacak Davası",
    metaDescription:
      "Maltepe'de kat karşılığı inşaat sözleşmeleri, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Maltepe'deki müvekkillerine sözleşme ve alacak uyuşmazlıklarında borçlar hukuku kapsamında danışmanlık veren Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır.",
    highlightCards: [
      { title: "Kentsel Dönüşüm Sözleşmeleri", description: "Gülsuyu-Gülensu ve Başıbüyük'teki kat karşılığı inşaat sözleşmesi uyuşmazlıkları." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Esnaf ve İşletme Sözleşmeleri", description: "Bağdat Caddesi ve ilçe genelindeki işletmeler arası ticari sözleşme uyuşmazlıkları." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gülsuyu-Gülensu ve Başıbüyük'teki kentsel dönüşüm alanındaki kat karşılığı inşaat sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Bağdat Caddesi ve ilçe genelindeki işletmeler arası ticari sözleşmelerin hazırlanması ve incelenmesi",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Gülsuyu, Gülensu ve Başıbüyük mahallelerindeki kentsel dönüşüm sürecinde arsa payı karşılığı inşaat sözleşmesinin resmi şekilde (tapu sicil müdürlüğünde veya noterde düzenleme şeklinde) yapılması zorunludur; bu şekil şartına uyulmadan yapılan sözleşmeler geçersiz kabul edilir ve uygulamada uyuşmazlık konusu olabilmektedir.",
      "Kartal'daki İstanbul Anadolu Adliyesi, Maltepe'nin kendi adliyesi bulunmadığından bu tür alacak ve tazminat davalarına da bakmaktadır; ticari nitelikteki bazı alacak uyuşmazlıklarında ise dava açılmadan önce arabuluculuk sürecinin tüketilmesi kanunen zorunludur.",
    ],
    faqs: [
      { question: "Kat karşılığı sözleşmesi hangi şekilde yapılmalı?", answer: "Kat karşılığı sözleşmesi, tapu sicil müdürlüğünde veya noterde düzenleme şeklinde yapılmalıdır; adi yazılı sözleşme geçersizdir. Arsa payı karşılığı inşaat sözleşmesi resmi şekle tabi olduğundan şekil şartına uyulmayan sözleşmeler geçersiz sayılır. Fikirtepe gibi dönüşüm alanlarında bu şekil eksikliği uyuşmazlıklarda sık gündeme gelir." },
      { question: "Müteahhit işi eksik veya hatalı bırakırsa ne yapılabilir?", answer: "Müteahhit işi eksik veya hatalı bırakırsa sözleşmeden dönme, tazminat veya ifa davası gibi hukuki yollara başvurulabilir. Önce eksiklikler tespit edilir ve müteahhide ihtarname çekilir; sözleşme, ruhsat ve teslim belgeleri incelenir. Ayıplı ifa halinde seçilecek yol sözleşmeye ve eksikliğin niteliğine göre belirlenir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Ticari alacak davaları, niteliğine göre asliye ticaret mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür. Maltepe'nin kendi adliyesi bulunmamaktadır. Bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması dava şartıdır; fatura, sözleşme ve cari hesap kayıtları hazırlanmalıdır." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, dava öncesi arabuluculuk yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Şartın aranıp aranmadığı uyuşmazlığın türüne göre belirlenir; arabuluculuğa başvurulmadan açılan dava bu hallerde usulden reddedilebilir. Başvuru yolu, alacağın niteliği incelenerek belirlenir." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir. Mahkeme zamanaşımını kendiliğinden dikkate almaz, borçlunun bu savunmayı ileri sürmesi gerekir. Alacağın doğduğu tarih, zamanaşımını kesen işlemler ve borçlunun kısmi ödemeleri gibi hususlar dosya üzerinde incelenir." },
    ],
    howToTitle: "Maltepe'de Alacak Davası Süreci Nasıl İşler?",
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

export const maltepeServices: PseoService[] = [...maltepeBaseServices, maltepeMiras];
