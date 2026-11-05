import type { PseoService } from "./types";
import { kucukcekmeceMiras } from "./miras/kucukcekmeceMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const kucukcekmeceBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "kucukcekmece-avukat",
    name: "Küçükçekmece Avukat",
    heroTitle: "Küçükçekmece Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, dünyada nadir bulunan tipik lagün göllerinden birine ve 200'ü aşkın büyük fabrikaya ev sahipliği yapan Küçükçekmece'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Küçükçekmece Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Küçükçekmece Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Küçükçekmece'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Adını taşıyan nadir lagün gölüyle ve yoğun imalat sanayisiyle tanınan Küçükçekmece'de ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Fabrika/sanayi tesisi ve konut uyuşmazlıklarının takibi." },
      { title: "İş Hukuku", description: "Fabrika çalışanlarının işçilik alacaklarında destek." },
      { title: "İcra Hukuku", description: "Ticari alacak takibi ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "İdari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı ve cezası uyuşmazlıkları." },
      { title: "Borçlar Hukuku", description: "Sanayi sözleşmesi ve alacak kaynaklı davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Fabrika/sanayi tesisi ve konut ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Ticari alacakların tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sanayi sözleşmesi kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "Dünyada az sayıda örneği bulunan tipik bir lagün gölü olan Küçükçekmece Gölü'ne kıyısı bulunan ilçede, 200'ü aşkın büyük fabrika ve yaklaşık 10 bin kayıtlı imalathane ile Küçükçekmece, İstanbul'un önemli sanayi ve ticaret merkezlerinden biridir.",
      "İlçedeki hukuki uyuşmazlıklar İstanbul Küçükçekmece Adliyesi'nde, vergisel işlemler ise Küçükçekmece Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Küçükçekmece'deki davalara hangi adliye bakıyor?", answer: "Küçükçekmece'deki davalara İstanbul Küçükçekmece Adliyesi bakar; ilçe bu adliyenin yargı çevresinde yer alır. Hukuk, ceza ve icra dosyaları bu adliyede görülür. Vergi işlemleri ise Küçükçekmece Vergi Dairesi Müdürlüğü nezdinde yürütülür; vergi davaları vergi mahkemelerinde açılır." },
      { question: "Randevu nasıl alınır?", answer: "Randevu WhatsApp veya telefon üzerinden talep edilir. Konunun kısa özeti ve varsa tebligat ya da süre bilgisi iletildiğinde uygun bir görüşme günü belirlenir. Görüşmeye kimlik, sözleşme, tebligat ve ödeme belgelerinin getirilmesi, hukuki durumun ilk görüşmede daha net değerlendirilmesini sağlar." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dosya takibi yapılır. Küçükçekmece'de fabrika ve imalathane kaynaklı ticari alacaklar, vardiyalı çalışmaya bağlı işçilik uyuşmazlıkları ve sanayi tesisi kiraları öne çıkabilir. Kapsam ilk görüşmede birlikte belirlenir." },
      { question: "Büro Küçükçekmece'de mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır. Küçükçekmece'deki müvekkillerle büroda yüz yüze ya da çevrim içi görüşülür ve aynı kapsamda hizmet verilir. Küçükçekmece'deki davalar İstanbul Küçükçekmece Adliyesi'nde görüldüğünden duruşma günlerinde ulaşım ve saat planı birlikte yapılabilir; dosyanın gelişmeleri müvekkille paylaşılır." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Ücret, dosyanın niteliğine ve gerektirdiği emeğe göre belirlenir ve randevu sırasında bildirilir. Danışmanlık görüşmesi ücrete tabidir; vekalet verilirse ücret yazılı olarak kararlaştırılır. Avukatlık Kanunu m.164 uyarınca ücret, Avukatlık Asgari Ücret Tarifesi'nin altında belirlenemez. Ücretin kapsamı ve ödeme şekli, belgeler incelendikten sonra açıkça konuşulur." },
      { question: "Fabrika/imalathane uyuşmazlıklarında destek alınabilir mi?", answer: "Evet, ticari sözleşme ve alacak uyuşmazlıklarında danışmanlık sağlanır. Küçükçekmece'deki fabrika ve imalathanelerde fatura, irsaliye, sözleşme ve cari hesap kayıtları incelenerek icra takibi, dava veya arabuluculuk gibi yollar değerlendirilir. Bazı ticari alacak uyuşmazlıklarında dava öncesi arabuluculuk zorunludur." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Görüşmeler tercihe göre yüz yüze veya çevrim içi planlanabilir. Yüz yüze görüşmeler Beşiktaş/Sinanpaşa'daki büroda yapılır; çevrim içi görüşmede belgeler WhatsApp veya e-posta ile paylaşılabilir. Randevu telefon ya da WhatsApp üzerinden talep edilir ve görüşme biçimi müvekkille birlikte belirlenir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Gözaltı halinde vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmelidir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar ve şüpheliye eşlik edilebilir. Ad, gözaltı yeri ve olayın kısa özeti paylaşıldığında sürecin ilk adımları hızla planlanabilir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca dosyadaki gelişmeler müvekkille paylaşılır. Duruşma tarihleri, mahkeme veya idare tarafından yapılan işlemler ve yeni evraklar hakkında bilgi verilir. Vekalet verilen dosyalarda gelişmeler WhatsApp, telefon veya yüz yüze görüşme gibi müvekkilin tercih ettiği yollarla aktarılır." },
      { question: "Küçükçekmece Adliyesi'ne ulaşım nasıl?", answer: "Küçükçekmece Adliyesi'ne M1B metro hattı ve Marmaray bağlantıları üzerinden ulaşım sağlanabilir. Duruşma günlerinde güzergah ve saat birlikte planlanabilir. Küçükçekmece'deki hukuk, ceza ve icra dosyaları İstanbul Küçükçekmece Adliyesi'nde görüldüğünden başka bir adliyeye gidilmesi gerekmez; ulaşım planı randevuda konuşulabilir." },
    ],
    howToTitle: "Küçükçekmece'de Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Küçükçekmece Avukat (Genel)",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz", "kidem-tazminati-hesaplama-2026"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "kucukcekmece-bosanma-avukati",
    name: "Küçükçekmece Boşanma Avukatı",
    heroTitle: "Küçükçekmece Boşanma Avukatı",
    heroSubtitle:
      "İstanbul Küçükçekmece Adliyesi bünyesindeki aile mahkemelerinde görülen anlaşmalı ve çekişmeli boşanma davalarında velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır.",
    metaTitle: "Küçükçekmece Boşanma Avukatı | Velayet",
    metaDescription:
      "Küçükçekmece'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Boşanma, velayet ve nafaka gibi aile hukuku uyuşmazlıklarında Küçükçekmece'deki müvekkillerini temsil eden Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat olarak görev yapmaktadır.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Nafaka", description: "Tedbir, yoksulluk ve iştirak nafakası süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Katılma alacağı kapsamında mal rejimi tasfiyesi talepleri",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Küçükçekmece'de görülen boşanma, velayet ve nafaka davalarına İstanbul Küçükçekmece Adliyesi bünyesindeki aile mahkemeleri bakar; süreç anlaşmalı yürütülürse protokolün eksiksizliği, çekişmeli yürütülürse delillerin yeterliliği belirleyici olur.",
      "İlçenin yoğun nüfusu ve sanayi işletmelerinin yaygınlığı düşünüldüğünde, velayet süreçlerinde çalışma düzenine bağlı kişisel ilişki planlamasının da zaman zaman ayrıca değerlendirilmesi gerekebilmektedir.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Boşanma davası için İstanbul Küçükçekmece Adliyesi'ndeki aile mahkemesine başvurulur. Küçükçekmece'deki boşanma, velayet ve nafaka davalarına bu adliyedeki aile mahkemeleri bakar. TMK m.168 uyarınca yetkili mahkeme, eşlerden birinin yerleşim yeri mahkemesi veya eşlerin son birlikte oturduğu yer mahkemesidir." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Evet, çocuk belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir. Mahkeme velayet düzenlemesinde çocuğun yararını esas alır; çocuğun yaşı, ihtiyaçları ve ebeveynlerle ilişkisi birlikte değerlendirilir. Çocuğun görüşü bağlayıcı olmayıp kararın dayanaklarından yalnızca biri olarak ele alınır." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Nafaka miktarı, tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilerek belirlenir. Mahkeme, nafaka ödeyecek tarafın ödeme gücünü ve nafaka alacak tarafın ihtiyacını gelir belgeleri, maaş bordroları ve harcama kalemleri üzerinden inceler. Koşullar değişirse nafakanın artırılması, azaltılması veya kaldırılması talep edilebilir." },
      { question: "Mal rejimi tasfiyesinde işletme payı nasıl değerlendirilir?", answer: "İşletme payı, edinilmiş mal sayılırsa katılma alacağı hesabına dahil edilir. Evlilik süresince edinilen işletme veya hisselerin değeri belgelerle ve gerekirse bilirkişi incelemesiyle belirlenir. Küçükçekmece'de imalathane ve fabrika gibi işletmelerin bulunduğu aile dosyalarında bu tasfiye boşanma sürecinin önemli bir konusu olabilir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir veya takipten vazgeçilebilir. Boşanma davası sürerken eşler barışırsa mahkemeye bu yönde beyanda bulunulur. Dava açılmış olması barışmaya engel değildir; ancak sürecin hukuki sonuçları, örneğin geçici nafaka ve velayet düzenlemeleri, mahkeme tarafından ayrıca değerlendirilir." },
    ],
    howToTitle: "Küçükçekmece'de Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "kucukcekmece-ceza-avukati",
    name: "Küçükçekmece Ceza Avukatı",
    heroTitle: "Küçükçekmece Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; kovuşturma İstanbul Küçükçekmece Adliyesi'nde yürütülür.",
    metaTitle: "Küçükçekmece Ceza Avukatı | Müdafilik",
    metaDescription:
      "Küçükçekmece'de soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. Ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında Küçükçekmece'deki müvekkillerine müdafilik yapar.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "İş Güvenliği İhlalleri", description: "Fabrika/sanayi tesisi kaynaklı iddialarda savunma." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "İş güvenliği ihlali iddialarına ilişkin süreçlerde destek",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "Yoğun bir sanayi ve imalat dokusuna sahip Küçükçekmece'de, iş güvenliği ihlalleri ve iş kazası kaynaklı taksirle yaralama/ölüme sebebiyet iddialarına dayalı ceza soruşturmaları zaman zaman gündeme gelebilmektedir.",
      "Kovuşturma aşamasındaki davalar İstanbul Küçükçekmece Adliyesi'nde görülür. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından belirleyicidir.",
    ],
    faqs: [
      { question: "Küçükçekmece'de bir ceza davası hangi adliyede görülür?", answer: "Küçükçekmece'deki ceza davaları İstanbul Küçükçekmece Adliyesi'nde görülür. Kovuşturma bu adliyedeki ceza mahkemelerinde yürütülür; soruşturma aşamasında ise ifade ve işlemler savcılık ve kolluk nezdinde yapılır. Gözaltı halinde müdafi ile görüşme hakkı gözaltının başladığı andan itibaren doğar." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Şüphelinin ifadesi müdafi bulunmadan da alınabilir; ancak müdafi bulundurulması önerilir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar. Müdafi, soruşturma dosyasını inceleyerek ifadenin içeriği ve haklar konusunda şüpheliye yol gösterir; ifade öncesinde iletişime geçmek bu nedenle faydalıdır." },
      { question: "Fabrikada iş kazası sonrası ceza soruşturması nasıl işler?", answer: "Olay yeri incelemesi ve bilirkişi raporu doğrultusunda kusur durumu değerlendirilir. İş kazası kaynaklı taksirle yaralama veya ölüme sebebiyet iddialarında savcılık soruşturma yürütür; iş güvenliği ihlalleri ve kusur oranı bilirkişi incelemesiyle belirlenir. Şüpheli, mağdur veya yakınları müdafi aracılığıyla dosyayı inceleyebilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, kovuşturmaya yer olmadığı kararına karşı sulh ceza hakimliğine itiraz edilebilir. İtiraz süresi kararın tebliğinden itibaren 15 gündür. Mağdur veya şikayetçi, savcılığın dosyayı takipsizlikle sonuçlandırdığı hallerde bu yola başvurarak kararın yeniden incelenmesini isteyebilir; itiraz dilekçesi gerekçeleriyle hazırlanır." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Uzlaşma sağlanamazsa yargılamaya kaldığı yerden devam edilir. Uzlaşmaya tabi suçlarda taraflar bir araya getirilir; anlaşma olmazsa soruşturma veya kovuşturma olağan akışında sürer ve dosya iddianame ile mahkemeye taşınabilir. Uzlaşma görüşmelerinde ileri sürülen beyanlar dosyanın ilerleyişini kendiliğinden belirlemez." },
    ],
    howToTitle: "Küçükçekmece'de Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "kucukcekmece-gayrimenkul-avukati",
    name: "Küçükçekmece Gayrimenkul Avukatı",
    heroTitle: "Küçükçekmece Gayrimenkul Avukatı",
    heroSubtitle:
      "Fabrika ve sanayi tesisi taşınmazları, tapu uyuşmazlıkları ve konut ilişkilerinde hukuki destek sağlanır; davalar İstanbul Küçükçekmece Adliyesi'nde görülür.",
    metaTitle: "Küçükçekmece Gayrimenkul Avukatı | Tapu",
    metaDescription:
      "Küçükçekmece'de fabrika/sanayi tesisi kiraları, tapu iptali ve konut uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Fabrika/sanayi tesisi ve konut uyuşmazlıklarında Küçükçekmece'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Sanayi Tesisi Taşınmazları", description: "Fabrika ve imalathane niteliğindeki taşınmazlarda kira uyuşmazlıkları." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Göl Kıyısı İmar Uygulamaları", description: "Küçükçekmece Gölü çevresi imar kısıtlamaları." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fabrika ve imalathane niteliğindeki taşınmazların kira sözleşmelerinin hazırlanması",
      "Sanayi tesisi devrine ilişkin uyuşmazlıklarda temsil",
      "Tapu iptali ve tescil davalarının açılması",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
      "Ortaklığın giderilmesi (izale-i şüyu) davaları",
    ],
    localParagraphs: [
      "200'ü aşkın büyük fabrikaya ve binlerce imalathaneye ev sahipliği yapan Küçükçekmece'de, sanayi tesisi niteliğindeki taşınmazların kira ve devir uyuşmazlıkları önemli bir gayrimenkul hukuku konusudur.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Küçükçekmece Adliyesi bünyesinde görülür.",
    ],
    faqs: [
      { question: "Fabrika niteliğindeki taşınmazın devrinde nelere dikkat edilmeli?", answer: "İmar durumu, çevre izinleri ve kira sözleşmesindeki devir şartları incelenmelidir. Tapu kaydındaki şerhler, ipotek ve haciz bilgileri ile taşınmazın kullanım amacına uygunluğu da devir öncesinde kontrol edilir. Küçükçekmece'deki sanayi tesislerinde bu belgelerin eksikliği sonradan uyuşmazlığa yol açabilir." },
      { question: "Küçükçekmece'de gayrimenkul davası hangi mahkemede görülür?", answer: "Gayrimenkul davaları, uyuşmazlığın niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Küçükçekmece Adliyesi bünyesinde görülür. Kira ve tahliye davaları sulh hukuk, tapu iptali ve tescil davaları asliye hukuk mahkemesinde görülür. Dava öncesinde tapu kaydı ve ilgili sözleşmelerin hazırlanması gerekir." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Tapu iptal davası, hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tarafından açılabilir. Sahte vekaletname, muvazaa veya geçersiz sözleşmeye dayanan tescil gibi durumlarda iptal ve tescil talep edilir. Dava, taşınmazın bulunduğu yer mahkemesinde görülür; tapu kaydı ve dayanak belgeler incelenerek dava dilekçesi hazırlanır." },
      { question: "Göl çevresindeki bir taşınmazda yapılaşma kısıtı var mı?", answer: "Yapılaşma kısıtı imar planına göre değişebilir; satın alma öncesi imar durumu belgesi incelenmelidir. Küçükçekmece Gölü çevresindeki taşınmazlarda plan hükümleri, tapu kaydındaki şerhler ve kullanım kısıtları belgelerden öğrenilir. İmar durumunun belgelenmesi, sonradan doğabilecek uyuşmazlıkları önlemeye yardımcı olur." },
      { question: "Sanayi tesisi kirasında rayiç bedel nasıl tespit edilir?", answer: "Bölgedeki emsal kira bedelleri bilirkişi incelemesiyle değerlendirilir. Mahkeme, benzer sanayi tesislerinin kira bedellerini ve taşınmazın özelliklerini dikkate alarak rayiç bedeli belirler. Mevcut kira sözleşmesi, önceki ödemeler ve taşınmazın kullanım durumu bu inceleme için gereklidir; rayiç bedel tespiti uyuşmazlık halinde talep edilir." },
    ],
    howToTitle: "Küçükçekmece'de Tapu İptali Süreci Nasıl İlerler?",
    howToSteps: [
      { name: "Kayıt İncelemesi", text: "Taşınmazın tapu kaydı, imar durumu ve varsa şerhler incelenir." },
      { name: "Dayanağın Belirlenmesi", text: "İptal talebinin hukuki gerekçesi netleştirilir." },
      { name: "Dilekçe Hazırlığı", text: "Talep ve deliller dilekçeye işlenir." },
      { name: "Yargılama", text: "Bilirkişi incelemesi sonrası mahkeme karar verir." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "kucukcekmece-icra-avukati",
    name: "Küçükçekmece İcra Avukatı",
    heroTitle: "Küçükçekmece İcra Avukatı",
    heroSubtitle:
      "İcra daireleri İstanbul Küçükçekmece Adliyesi bünyesinde yer alır; sanayi ve ticari alacakların tahsiline yönelik icra takibi, itiraz ve haciz süreçlerinde temsil verilir.",
    metaTitle: "Küçükçekmece İcra Avukatı | Takip ve Haciz",
    metaDescription:
      "Küçükçekmece'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, icra ve iflas hukuku alanında Küçükçekmece'deki fabrika işletmecilerine, esnafa ve bireysel müvekkillere danışmanlık vermektedir.",
    highlightCards: [
      { title: "Sanayi Alacakları", description: "Fabrika ve imalathaneler arası ticari alacakların takibi." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fabrika ve imalathaneler arası fatura/senet alacakları için icra takibi başlatılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "İhaleye katılım ve ihalenin feshi talepleri",
      "Mali sıkıntı yaşayan işletmeler için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Küçükçekmece'de 200'ü aşkın büyük fabrika ve binlerce imalathane faaliyet göstermektedir; tedarikçi ile alıcı arasındaki ticari ilişkilerden doğan çek ve senet alacakları, bu ortamda açılan icra takiplerinin başlıca nedenidir.",
      "İstanbul Küçükçekmece Adliyesi bünyesindeki icra mahkemeleri bu takiplere ilişkin uyuşmazlıklara bakmaktadır; borçlunun Küçükçekmece'de yerleşik olduğu dosyalarda yetkili icra dairesi, kural olarak borçlunun ikametgahı esas alınarak belirlenir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "İcra takibi, sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlatılabilir. Alacağın dayanağını gösteren belgeler takip talebine eklenir; ilamlı takipte mahkeme kararı, ilamsız takipte ise alacağı ispata yarayan belge esas alınır. Takip talebi, yetkili icra dairesine sunulur ve borçluya ödeme emri gönderilir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Ödeme emrine itiraz süresi, tebliğden itibaren 7 gündür. İİK m.62 uyarınca borçlu bu süre içinde icra dairesine itiraz ederse takip durur. Sürenin kaçırılması halinde takip kesinleşebilir; bu nedenle ödeme emrinin tebliğ tarihi ve tebligat evrakı dikkatle saklanmalı, süre dolmadan değerlendirme yapılmalıdır." },
      { question: "Karşılıksız çek nedeniyle icra takibi nasıl başlatılır?", answer: "Çek bankaya ibraz edildikten sonra kambiyo senetlerine özgü haciz yoluyla takip başlatılabilir. Bankadan alınan karşılıksızdır şerhi veya ibraz kaydı takip talebine eklenir ve yetkili icra dairesine başvurulur. Küçükçekmece'de tedarikçi ile alıcı arasındaki çek ve senet alacakları bu yolla takip edilebilir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Haciz, kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir. Borçlunun taşınmaz kayıtları, banka hesapları ve diğer mal varlığı üzerinden işlem yapılabilir; kanunda haczedilemez sayılan mallar ise kapsam dışındadır. Haciz, ödeme emrinin kesinleşmesinden sonra alacaklının talebi üzerine icra dairesi tarafından uygulanır." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Borçlu ödeme yapmazsa haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür. Ödeme emrine itiraz edilmezse takip kesinleşir; alacaklı haciz talep eder, haczedilen mallar satış aşamasına taşınır. Borçlu itiraz ederse itirazın iptali veya kaldırılması davası gibi yollar değerlendirilir." },
    ],
    howToTitle: "Küçükçekmece'de İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "kucukcekmece-idare-avukati",
    name: "Küçükçekmece İdare Avukatı",
    heroTitle: "Küçükçekmece İdare Avukatı",
    heroSubtitle:
      "Sanayi tesisi ruhsatları, çevre izinleri ve belediye işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Küçükçekmece İdare Avukatı | İptal Davası",
    metaDescription:
      "Küçükçekmece'de idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. İdari işlemlerin iptali ve tam yargı davalarında Küçükçekmece'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Sanayi Tesisi Ruhsatları", description: "Fabrika ve imalathane işletme ruhsatlarına ilişkin uyuşmazlıklar." },
      { title: "Çevre İzinleri", description: "Göl çevresi ve çevre mevzuatına ilişkin idari işlemler." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sanayi tesisi işletme ruhsatı işlemlerine itiraz edilmesi",
      "Çevre mevzuatına ilişkin idari işlemlerde danışmanlık",
      "İmar planı değişikliklerine karşı iptal davası açılması",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Yoğun sanayi faaliyetinin sürdüğü Küçükçekmece'de, fabrika işletme ruhsatlarına ve çevre mevzuatına ilişkin idari işlemler, göl çevresindeki imar kararlarıyla birlikte sık başvurulan idari dava konuları arasındadır.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "Fabrika işletme ruhsatı iptal edilirse ne yapılabilir?", answer: "İşletme ruhsatı iptal edilirse iptal işlemine karşı idare mahkemesinde dava açılabilir. Dava süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür. Küçükçekmece'deki fabrikalar için iptal yazısı, tebliğ tarihi ve ruhsat belgeleri toplanır; işlemin gerekçesi bu belgelerle incelenir." },
      { question: "Çevre cezası kesilirse itiraz edilebilir mi?", answer: "Evet, idari para cezasına karşı yasal süresinde dava açılabilir. İdari işlemlere karşı iptal davası genel kural olarak tebliğden itibaren 60 gün içinde idare mahkemesinde açılır; ceza tutanağında farklı bir yol belirtilmişse o yol esas alınmalıdır. Küçükçekmece'deki işletmeler için tutanak ve tebliğ evrakı saklanmalıdır." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İmar planına karşı ilan tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılmalıdır. Genel kural olarak iptal davası süresi 60 gündür; ancak planın ilan tarihi ve tebliğ koşulları süre hesabını etkileyebilir. Göl çevresindeki imar kararlarında ilan ve ilgili plan belgeleri incelenmelidir." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde iptal davası açılabilir. Ret işleminin tebliğinden itibaren 60 gün içinde dava açılması gerekir; bu süre İYUK m.7 uyarınca belirlenir. Dava için ret yazısı, başvuru evrakı ve ilgili imar belgeleri toplanır; işlemin gerekçesi bu belgeler üzerinden değerlendirilir." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "İdarenin işlem veya eyleminden zarar görenler, tam yargı davası yoluyla zararın tazminini talep edebilir. Dava idare mahkemesinde açılır; zararın idarenin işlemi veya eylemiyle bağlantısı belgelerle gösterilir. Önce idareye başvuru yapılması gereken hallerde başvuru yolu ve süreler dosyaya göre ayrıca belirlenir." },
    ],
    howToTitle: "Küçükçekmece'de İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "kucukcekmece-is-hukuku-avukati",
    name: "Küçükçekmece İş Hukuku Avukatı",
    heroTitle: "Küçükçekmece İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul Küçükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Küçükçekmece İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Küçükçekmece'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Küçükçekmece'deki fabrika ve imalathane çalışanlarına ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Fabrika Çalışanları", description: "Vardiyalı çalışma ve iş güvenliği uyuşmazlıkları." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Vardiyalı çalışmaya bağlı fazla mesai alacaklarının tahsili",
      "Sigortasız veya eksik günlü çalışmaya ilişkin hizmet tespiti davaları",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "200'ü aşkın büyük fabrika ve binlerce imalathaneye ev sahipliği yapan Küçükçekmece'de, vardiyalı çalışma düzenine bağlı fazla mesai ve iş güvenliği kaynaklı iş kazası uyuşmazlıkları sık gündeme gelmektedir.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Küçükçekmece Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Fabrikada iş kazası geçiren işçi ne yapmalı?", answer: "Olay derhal SGK'ya bildirilmeli, tedavi ve tazminat süreci başlatılmalıdır. Kaza tutanağı, sağlık raporları ve tanık bilgileri toplanarak delil olarak saklanır. Küçükçekmece'deki fabrikalarda çalışanların iş kazasından doğan tazminat talepleri İstanbul Küçükçekmece Adliyesi'ndeki iş mahkemelerinde görülür; süreç belgelerle birlikte değerlendirilir." },
      { question: "Vardiyalı çalışanların fazla mesai hakkı nasıl hesaplanır?", answer: "Haftalık 45 saati aşan çalışma süreleri fazla mesai olarak değerlendirilir. Vardiya çizelgeleri, giriş-çıkış kayıtları ve bordrolar üzerinden fazla çalışma süreleri belirlenir. Küçükçekmece'deki fabrikalarda vardiyalı çalışanlar için bu kayıtlar ve tanık beyanları fazla mesai alacağının ispatında esas alınır." },
      { question: "Küçükçekmece'de iş mahkemesi nerededir?", answer: "Küçükçekmece'deki iş davalarına İstanbul Küçükçekmece Adliyesi bünyesindeki iş mahkemeleri bakar. İşe iade ve işçilik alacağı davalarında kanunda öngörülen hallerde önce arabuluculuğa başvurulur. Arabuluculukta anlaşma sağlanamazsa dava aynı adliyedeki iş mahkemesinde açılır; bordro ve sözleşmeler hazırlanmalıdır." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "İşe iade sürecinin toplam süresi dosyaya göre değişir ve kesin bir süre öngörülemez. Önce fesihten itibaren 1 ay içinde arabulucuya başvurulur; anlaşma olmazsa son tutanaktan itibaren 2 hafta içinde dava açılır. İş K. m.18 uyarınca 30 işçi ve 6 ay kıdem koşulu aranır." },
      { question: "Sigortasız çalıştırılan işçinin hakları nelerdir?", answer: "Sigortasız çalıştırılan işçi, hizmet tespiti davası açarak çalışma süresini mahkemece tespit ettirebilir. Maaş dekontları, tanık beyanları ve işyeri kayıtları delil olarak kullanılır. Ücret, fazla mesai ve tazminat alacakları da ayrıca talep edilebilir; dava Küçükçekmece Adliyesi'ndeki iş mahkemesinde görülür." },
    ],
    howToTitle: "Küçükçekmece'de İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "kucukcekmece-kira-tahliye-avukati",
    name: "Küçükçekmece Kira ve Tahliye Avukatı",
    heroTitle: "Küçükçekmece Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Konut ve fabrika/imalathane tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemeleri İstanbul Küçükçekmece Adliyesi'ndedir.",
    metaTitle: "Küçükçekmece Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Küçükçekmece'de kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Kira hukuku alanında Küçükçekmece'deki kiraya verenlere ve kiracılara danışmanlık verir.",
    highlightCards: [
      { title: "Fabrika/İmalathane Kiraları", description: "Sanayi tesisi niteliğindeki taşınmazlarda kira süreçleri." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fabrika ve imalathane niteliğindeki taşınmazların kira sözleşmelerinin hazırlanması",
      "İhtiyaç nedeniyle açılan tahliye davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Konut stokunun yanı sıra çok sayıda fabrika ve imalathanenin de kiracılık ilişkisiyle işletildiği Küçükçekmece'de, sanayi tesisi tahliyeleri konut kiralarına kıyasla farklı usul kurallarına tabi olabilmektedir.",
      "Bu davalara İstanbul Küçükçekmece Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır; taşınmazın konut mu işyeri mi olduğu, uygulanacak usulü doğrudan etkiler.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir tahliye taahhüdü veya ihtiyaç nedeniyle kiracının tahliyesi talep edilebilir. Kira borcunda TBK m.315 uyarınca kiracıya en az 30 gün süre verilerek ihtar gönderilir; süre içinde ödeme yapılmazsa tahliye yolu açılır. Dava sulh hukuk mahkemesinde, taahhütte icra yoluyla açılır." },
      { question: "Fabrika kiracısının tahliyesi konuttan farklı mı?", answer: "Genel usul benzer olmakla birlikte, işyeri kiralarında ihtiyaç sebebiyle tahliyede ek koşullar aranabilir. Küçükçekmece'de fabrika ve imalathane kiralarında taşınmazın konut mu işyeri mi olduğu uygulanacak usulü doğrudan etkiler. Davalar İstanbul Küçükçekmece Adliyesi'ndeki sulh hukuk mahkemelerinde görülür." },
      { question: "Küçükçekmece'de tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine göre değişir; birkaç aydan bir buçuk yıla kadar sürebilir. Sürenin uzunluğu tebligatın ulaşması, bilirkişi incelemesi ve itirazlar gibi etkenlere bağlıdır. Dava Küçükçekmece Adliyesi bünyesindeki sulh hukuk mahkemesinde görülür; sözleşmenin yazılı ve eksiksiz olması ispatı kolaylaştırır." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Rayiç bedel tespiti, mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Kira artışı konusunda taraflar anlaşamazsa mahkemeden kira bedelinin belirlenmesi istenir; mahkeme çevredeki benzer kiraları ve taşınmazın özelliklerini bilirkişi aracılığıyla inceler. Mevcut sözleşme ve önceki kira ödemeleri bu inceleme için gereklidir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir. Taahhütnamenin kiracı tarafından kiralananın tesliminden sonra yazılı olarak verilmiş olması ve geçerlilik şartlarını taşıması gerekir. Taahhütname geçerli değilse veya itiraz edilirse uyuşmazlık sulh hukuk mahkemesinde görülür." },
    ],
    howToTitle: "Küçükçekmece'de Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "kucukcekmece-vergi-avukati",
    name: "Küçükçekmece Vergi Avukatı",
    heroTitle: "Küçükçekmece Vergi Avukatı",
    heroSubtitle:
      "Yetkili mahkeme İstanbul vergi mahkemeleri olmak üzere; sanayi işletmelerine yönelik vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil hizmeti sunulur.",
    metaTitle: "Küçükçekmece Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Küçükçekmece'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukat olup, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur; vergi tarhiyatı ve buna bağlı cezalara ilişkin uyuşmazlıklarda Küçükçekmece'deki müvekkillerine danışmanlık sağlamaktadır.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Sanayi İşletmeleri", description: "Fabrika ve imalathanelere yönelik vergi incelemesi süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Fabrika ve imalathanelerde vergi incelemesi sürecinde danışmanlık",
      "Kayıt dışı işlem iddialarına karşı savunma hazırlanması",
    ],
    localParagraphs: [
      "Vergi tarhiyatı veya cezasına karşı açılan davalara İstanbul vergi mahkemelerinde bakılmakta olup, ihbarnamenin tebliğinden itibaren dava açma süresi 30 gün ile sınırlıdır.",
      "200'ü aşkın büyük fabrikanın bulunduğu Küçükçekmece'de, işletmelerin üretim ve satış kayıtlarının vergi incelemesine konu edilmesi ile buna bağlı olarak kesilen cezalar, sıklıkla karşılaşılan uyuşmazlık türleri arasında yer almaktadır.",
    ],
    faqs: [
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "İhbarnameye karşı tebliğden itibaren 30 gün içinde vergi mahkemesinde dava açılabilir. İYUK m.7 uyarınca vergi davalarında dava açma süresi 30 gündür. Süre tebliğ tarihinden başladığı için ihbarnamenin tebliğ zarfı ve tarihi saklanmalıdır; ihbarname ve eklerinin dava dilekçesine bağlanması gerekir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "Vergi davaları, İstanbul vergi mahkemelerinde görülür. Vergi ve ceza ihbarnamelerine karşı iptal davası bu mahkemede açılır; dava açma süresi tebliğden itibaren 30 gündür. Uzlaşma yoluna başvurulsa bile kalan dava açma süresi dikkate alınmalı, süre geçirilmeden dosya değerlendirilmelidir." },
      { question: "Fabrika üretim kayıtları vergi incelemesinde nasıl değerlendirilir?", answer: "Üretim, sevkiyat ve satış belgeleri karşılaştırmalı olarak incelenir. Küçükçekmece'deki fabrikalarda üretim kayıtları ile fatura ve irsaliyelerin uyumu incelemede esas alınır; tutarsızlık tespit edilirse vergi ve ceza ihbarnamesi düzenlenebilir. Bu ihbarnameye karşı dava süresi tebliğden itibaren 30 gündür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur. Uzlaşma başvurusu vergi idaresi nezdinde yapılır; anlaşma olmazsa mükellef vergi mahkemesinde dava açabilir. Dava açma süresi 30 gün olduğundan uzlaşma tutanağı ve tebliğ tarihleri sürenin ne kadar kaldığını belirlemek için dikkatle takip edilmelidir." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Vergi ödeme emrine karşı, ödeme emrinde belirtilen süre içinde vergi mahkemesine başvurulmalıdır. Sürenin hesabı ödeme emrinin tebliğ tarihine göre yapıldığından tebliğ zarfı ve belge saklanmalıdır. Küçükçekmece'deki mükellefler için davalar İstanbul vergi mahkemelerinde görülür; ödeme emrinin dayanağı olan ihbarname de incelenir." },
    ],
    howToTitle: "Küçükçekmece'de Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "kucukcekmece-borclar-hukuku-avukati",
    name: "Küçükçekmece Borçlar Hukuku Avukatı",
    heroTitle: "Küçükçekmece Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Sanayi tedarik sözleşmesi uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; ticaret ve asliye hukuk mahkemeleri İstanbul Küçükçekmece Adliyesi'ndedir.",
    metaTitle: "Küçükçekmece Borçlar Hukuku Avukatı",
    metaDescription:
      "Küçükçekmece'de sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Borçlar hukuku kapsamında Küçükçekmece'deki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık verir.",
    highlightCards: [
      { title: "Sanayi Tedarik Sözleşmeleri", description: "Hammadde ve yarı mamul tedarik sözleşmesi uyuşmazlıkları." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Fason İmalat Sözleşmeleri", description: "Fason üretim ilişkilerinden doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Hammadde ve yarı mamul tedarik sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Fason imalat sözleşmelerinden doğan uyuşmazlıklar",
      "Ayıplı mal nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Yoğun imalat sanayisine sahip Küçükçekmece'de, hammadde tedariki ve fason üretim ilişkilerinden doğan ayıplı ifa ile ödeme gecikmesi kaynaklı uyuşmazlıklar sık karşılaşılan dava türleri arasındadır.",
      "Bu davalar İstanbul Küçükçekmece Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Fason üretimde teslim edilen ürün şartnameye uymazsa ne olur?", answer: "Ayıba dayalı olarak bedel indirimi veya sözleşmeden dönme talep edilebilir. Fason üretim sözleşmesindeki şartname, teslim belgeleri ve yazışmalar incelenir; ayıp tespit edildiğinde süresinde ihbar yapılması önemlidir. Küçükçekmece'deki imalat ilişkilerinde ayıplı ifa dosyaları bu belgelerle değerlendirilir." },
      { question: "Tedarikçi malı zamanında teslim etmezse ne yapılabilir?", answer: "Sözleşmede öngörülen gecikme cezası talep edilebilir, gerekirse sözleşmeden dönme hakkı kullanılabilir. Teslim tarihi, cezai şart ve teminat hükümleri sözleşmeden incelenir; tedarikçiye noter aracılığıyla ihtarname gönderilmesi sık izlenen yoldur. Küçükçekmece'deki hammadde tedarik ilişkilerinde yazışmalar ve teslim belgeleri saklanmalıdır." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Ticari alacak davaları, niteliğine göre asliye ticaret mahkemesinde, İstanbul Küçükçekmece Adliyesi bünyesinde görülür. Bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması dava şartıdır. Fatura, sözleşme, irsaliye ve cari hesap kayıtları dava öncesinde hazırlanmalı ve düzenli biçimde saklanmalıdır." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, dava öncesi arabuluculuk yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Şartın aranıp aranmadığı uyuşmazlığın türüne göre belirlenir; arabuluculuğa başvurulmadan açılan dava bu hallerde usulden reddedilebilir. Başvuru yolu, alacağın niteliği incelenerek belirlenir." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir. Mahkeme zamanaşımını kendiliğinden dikkate almaz, borçlunun bu savunmayı ileri sürmesi gerekir. Alacağın doğduğu tarih, zamanaşımını kesen işlemler ve borçlunun kısmi ödemeleri gibi hususlar dosya üzerinde incelenir." },
    ],
    howToTitle: "Küçükçekmece'de Ticari Alacak Davası Süreci Nasıl İşler?",
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

export const kucukcekmeceServices: PseoService[] = [...kucukcekmeceBaseServices, kucukcekmeceMiras];
