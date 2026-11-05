import type { PseoService } from "./types";
import { esenyurtMiras } from "./miras/esenyurtMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const esenyurtBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "esenyurt-avukat",
    name: "Esenyurt Avukat",
    heroTitle: "Esenyurt Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, 1 milyonu aşan nüfusuyla Türkiye'nin en kalabalık ilçesi olan Esenyurt'ta ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Büyükçekmece Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Esenyurt Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Esenyurt'ta ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Son otuz yılda dünyada eşi görülmemiş bir hızla büyüyen, Türkiye'nin en kalabalık ilçesi olan Esenyurt'ta ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Yeni konut projeleri ve tahliye uyuşmazlıklarının takibi." },
      { title: "İş Hukuku", description: "İşçilik alacakları ve işe iade davalarında destek." },
      { title: "İcra Hukuku", description: "Alacak takibi ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "İdari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı ve cezası uyuşmazlıkları." },
      { title: "Borçlar Hukuku", description: "Sözleşme ve alacak kaynaklı davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Yeni konut projeleri ve kira ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "1989'da 37 bin olan nüfusu otuz yıl içinde bir milyonu aşan Esenyurt, hem yurt içinden hem yurt dışından yoğun göç alan, hızla yeni konut alanlarının inşa edildiği bir ilçedir; bu hızlı büyüme, hukuki ihtiyaçları da çeşitlendirmektedir.",
      "İlçedeki hukuki uyuşmazlıklar İstanbul Büyükçekmece Adliyesi'nde, vergisel işlemler ise Esenyurt Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Esenyurt'taki davalara hangi adliye bakıyor?", answer: "Esenyurt'taki davalara İstanbul Büyükçekmece Adliyesi bakar. Esenyurt, bu adliyenin yargı çevresinde yer aldığından ceza, aile, iş, icra ve ticari nitelikteki uyuşmazlıklar bu adliyedeki mahkemelerde görülür. Vergisel işlemler ise Esenyurt Vergi Dairesi Müdürlüğü nezdinde yürütülür, vergi davaları İstanbul vergi mahkemelerinde açılır." },
      { question: "Randevu nasıl alınır?", answer: "Randevu, WhatsApp veya telefonla iletişime geçilerek alınır. İlk adımda konu kısaca paylaşılır, ardından uygun bir görüşme günü belirlenir. Danışmanlık görüşmesinde hukuki durum değerlendirilir; temsil kararı alınırsa vekalet düzenlenir ve belgeler derlenerek sürece başlanır; mahkeme ve idari merciler nezdindeki işlemler bundan sonra takip edilir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Hizmet; ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku alanlarında verilmektedir. Bu kapsamda soruşturma ve kovuşturma savunması, boşanma ve velayet davaları, yeni konut projeleri ve kira uyuşmazlıkları, işçilik alacakları, icra takipleri, idari ve vergi davaları ile sözleşme kaynaklı uyuşmazlıklar takip edilir." },
      { question: "Büro Esenyurt'ta mı bulunuyor?", answer: "Hayır, büro Esenyurt'ta değil, Beşiktaş/Sinanpaşa'dadır. Esenyurt'taki müvekkillere de aynı kapsamda hizmet verilir; görüşmeler tercihe göre yüz yüze veya çevrim içi planlanabilir. Randevu için WhatsApp veya telefonla iletişim kurulması yeterlidir. Dosyalar İstanbul Büyükçekmece Adliyesi'nde takip edilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Danışmanlık görüşmesi ücret karşılığı yapılır ve ücret dosyanın niteliğine göre değişir. Uyuşmazlığın türü ve gerekli işlemler değerlendirilerek randevu sırasında bilgi verilir. Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir ve mahkeme ile idari merciler nezdinde süreç takip edilir." },
      { question: "Yeni satın alınan konutlarla ilgili hukuki destek alınabilir mi?", answer: "Evet, yeni satın alınan konutlarla ilgili tapu ve kat mülkiyeti işlemlerinde gayrimenkul hukuku kapsamında danışmanlık sağlanır. Esenyurt'ta yeni konut projeleri yoğun olduğundan teslim gecikmesi, kat mülkiyeti tesisi ve tapu uyuşmazlıkları sık gündeme gelir; sözleşme ve teslim belgeleri sürecin dayanağını oluşturur." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Görüşmeler tercihe göre yüz yüze veya çevrim içi olarak planlanabilir. Büro Beşiktaş/Sinanpaşa'dadır; uzaktan görüşmeyi tercih eden Esenyurt'taki müvekkiller için çevrim içi seçenek bulunur. İlk iletişim WhatsApp veya telefonla kurulur, görüşmede hukuki durum değerlendirilir ve gerekli belgeler belirlenir." },
      { question: "Büyükçekmece Adliyesi'ne Esenyurt'tan ulaşım nasıl?", answer: "Esenyurt'tan Büyükçekmece Adliyesi'ne metrobüs hattı üzerinden ulaşım sağlanabilir; Mahmutbey-Esenyurt metro hattı ise yapım aşamasındadır. Esenyurt, davaların görüldüğü İstanbul Büyükçekmece Adliyesi'nin yargı çevresinde yer alır. Süreç boyunca gelişmeler müvekkille paylaşıldığından, duruşma ve işlem günlerine göre güzergahı önceden planlamak gecikmeyi azaltır." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Acil bir gözaltı durumunda vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmelidir. Gözaltına alınan kişi CMK m.147 ve m.154 uyarınca susma hakkını kullanabilir ve müdafiyle görüşebilir. Tutuklama talebini sulh ceza hakimliği CMK m.100 ve m.101 ölçütlerine göre değerlendirir; ifade öncesinde müdafi yardımı önem taşır." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, dosyanın seyri hakkında bilgi alınabilir. Süreç boyunca duruşma, karar ve idari işlemlerdeki gelişmeler müvekkille paylaşılır. Temsil sırasında mahkeme ve idari merciler nezdindeki işlemler takip edilir; belirli bir aşamayı öğrenmek isteyen müvekkil WhatsApp veya telefonla iletişime geçerek güncel durumu sorabilir." },
    ],
    howToTitle: "Esenyurt'ta Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Esenyurt Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "esenyurt-bosanma-avukati",
    name: "Esenyurt Boşanma Avukatı",
    heroTitle: "Esenyurt Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; aile mahkemeleri İstanbul Büyükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Esenyurt Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Esenyurt'ta anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Aile hukuku alanında Esenyurt'taki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlar.",
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
      "Yurdun dört bir yanından yeni yerleşen ailelerin yoğun olduğu Esenyurt'ta, boşanma davalarında taraflardan birinin memleketinde bulunan mal varlığı veya ailevi bağların dava sürecine etkisi ayrıca değerlendirilmesi gereken bir konu olabilmektedir.",
      "Boşanma, velayet ve nafaka davalarına İstanbul Büyükçekmece Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Boşanma davası için İstanbul Büyükçekmece Adliyesi'ndeki aile mahkemesine başvurulur. Esenyurt'taki boşanma, velayet ve nafaka davalarına bu adliyedeki aile mahkemelerinde bakılır. Yetkili mahkeme TMK m.168'e göre belirlenir; dava dilekçesi hazırlanırken velayet, nafaka ve mal rejimi talepleri baştan netleştirilir." },
      { question: "Yeni taşınan çiftler nerede dava açabilir?", answer: "Yeni taşınan çiftler, son altı aydır birlikte oturdukları yerdeki veya taraflardan birinin yerleşim yerindeki aile mahkemesinde dava açabilir (TMK m.168). Esenyurt'a yeni yerleşen ailelerde taşınma tarihi ve ikamet kayıtları bu nedenle önem taşır; yetki itirazı yaşanmaması için dava açılmadan önce yerleşim yeri belgeleri kontrol edilir." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Çocuk belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir. Velayet düzenlemesinde belirleyici ölçüt çocuğun üstün yararıdır; mahkeme çocuğun görüşünü bu ölçütle birlikte değerlendirir. Görüş tek başına belirleyici sayılmaz, bakım ve eğitim koşulları gibi diğer unsurlarla birlikte ele alınır." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Nafaka miktarı, tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilerek belirlenir. Mahkeme, nafaka verecek tarafın ödeme gücünü ve alacaklı tarafın ihtiyacını gözetir. Nafakanın artırılması, azaltılması ve kaldırılması için ayrı davalar açılabilir; koşullar değiştiğinde bu yönde talepte bulunmak mümkündür." },
      { question: "Taşrada bulunan mal varlığı mal rejiminde nasıl değerlendirilir?", answer: "Evlilik süresince edinilmişse taşrada bulunan mal varlığı, bulunduğu yerden bağımsız olarak katılma alacağı hesabına dahil edilebilir. Katılma alacağı kapsamında mal rejimi tasfiyesi talep edilebilir; tapu kayıtları, edinme tarihi ve edinme şekli gibi bilgiler tasfiyenin dayanağını oluşturur." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, dava açıldıktan sonra da barışma mümkündür; taraflar anlaşırsa dava geri çekilebilir. Anlaşmalı boşanma yolu seçilirse TMK m.166/3 uyarınca evliliğin en az bir yıl sürmüş olması ve eşlerin duruşmada birlikte beyanda bulunması gerekir. Hangi yolun uygun olduğu dosyadaki taleplere göre değerlendirilir." },
    ],
    howToTitle: "Esenyurt'ta Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "esenyurt-ceza-avukati",
    name: "Esenyurt Ceza Avukatı",
    heroTitle: "Esenyurt Ceza Avukatı",
    heroSubtitle:
      "Ceza yargılamasına ilişkin dosyalar İstanbul Büyükçekmece Adliyesi'nde görülmekte olup, gözaltı ve ifade alma aşamasından kovuşturmanın sonuna kadar müdafilik hizmeti sağlanmaktadır.",
    metaTitle: "Esenyurt Ceza Avukatı | Müdafilik",
    metaDescription:
      "Esenyurt'ta soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Esenyurt'taki müvekkillere ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında müdafilik hizmeti veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Kanun Yolları", description: "Karara karşı üst mahkemelere başvuru süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "İstinaf ve temyiz dilekçelerinin düzenlenmesi",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "Kovuşturma aşamasındaki ceza davaları İstanbul Büyükçekmece Adliyesi'nde görülmektedir. Türkiye'nin en kalabalık ilçesi olması nedeniyle Esenyurt'taki nüfus yoğunluğu, kolluk müdahalesini gerektiren olay sayısının da buna paralel şekilde yüksek seyretmesine neden olabilmektedir.",
      "Şüphelinin müdafi ile görüşme hakkı, gözaltının başladığı andan itibaren mevcuttur ve bu hakkın erken aşamada kullanılıp kullanılmaması, yargılamanın ilerleyen safhalarını doğrudan etkileyebilmektedir.",
    ],
    faqs: [
      { question: "Esenyurt'ta bir ceza davası hangi adliyede görülür?", answer: "Esenyurt'ta bir ceza davası İstanbul Büyükçekmece Adliyesi'nde görülür. Soruşturma aşamasında savcılık ve sulh ceza hakimliği işlemleri bu adliye bünyesinde yürür; iddianame kabul edilirse kovuşturma da burada yapılır. Dosyanın hangi mahkemeye düşeceği iddia edilen suçun niteliğine bağlıdır." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Müdafi bulunmadan ifade alınabilir; ancak müdafi bulundurmak önerilir. Şüpheli, gözaltının başladığı andan itibaren müdafi ile görüşme hakkına sahiptir ve CMK m.147 uyarınca susma hakkını kullanabilir. İfadenin ilk aşamada müdafi eşliğinde verilmesi, yargılamanın ilerleyen safhalarını doğrudan etkileyebilir." },
      { question: "Tutukluluk süresi uzatılabilir mi?", answer: "Tutukluluk süresi, kanunda öngörülen azami süreler dahilinde uzatılabilir. Tutukluluğun devamı kararlarına karşı yedi gün içinde itiraz edilebilir ve tutuklama CMK m.100 ve m.101 ölçütlerine göre değerlendirilir. İtiraz dilekçesinde kuvvetli şüphe ve ölçülülük yönünden eksiklikler somut olarak gösterilmelidir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, kovuşturmaya yer olmadığı kararına karşı kararın tebliğinden itibaren 15 gün içinde sulh ceza hakimliğine itiraz edilebilir. Mağdur veya suçtan zarar gören, savcılığın soruşturmayı sonlandırmasına karşı bu yola başvurur. İtiraz dilekçesinde dosyadaki eksik delil ve araştırma talepleri somut olarak gösterilmelidir." },
      { question: "Temyiz kanun yoluna hangi kararlar için başvurulur?", answer: "Temyiz kanun yoluna, kanunda sayılan ağır suçlara ilişkin kararlar için başvurulabilir. Genel olarak ilk derece mahkemesi kararlarına karşı önce istinaf yoluna gidilir; istinaf ve temyiz dilekçelerinin düzenlenmesi hizmet kapsamındadır. Başvuru süresi kararın niteliğine göre değiştiğinden, karar tebliğ edildiğinde süre hemen kontrol edilmelidir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Uzlaşma sağlanamazsa yargılamaya kaldığı yerden devam edilir. Uzlaştırma yalnızca kanunda sayılan suçlarda uygulanır (CMK m.253) ve taraflar anlaşırsa kamu davası açılmaz. Anlaşma olmazsa soruşturma veya kovuşturma sürer; bu nedenle teklif geldiğinde dosyadaki delil durumu değerlendirilerek karar verilmelidir." },
    ],
    howToTitle: "Esenyurt'ta Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "esenyurt-gayrimenkul-avukati",
    name: "Esenyurt Gayrimenkul Avukatı",
    heroTitle: "Esenyurt Gayrimenkul Avukatı",
    heroSubtitle:
      "Yeni konut projeleri, tapu uyuşmazlıkları ve kira ilişkilerinde hukuki destek sağlanır; davalar İstanbul Büyükçekmece Adliyesi'nde görülür.",
    metaTitle: "Esenyurt Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Esenyurt'ta yeni konut projeleri, tapu iptali ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Yeni konut projeleri, tapu ve kira uyuşmazlıklarında Esenyurt'taki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Yeni Konut Projeleri", description: "Kat mülkiyeti tesisi ve teslim gecikmesi uyuşmazlıkları." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Müteahhit Sözleşmeleri", description: "Kat karşılığı inşaat sözleşmesi uyuşmazlıkları." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Yeni konut projelerinde kat mülkiyeti ve teslim uyuşmazlıkları",
      "Kat karşılığı inşaat sözleşmelerinin hazırlanması ve incelenmesi",
      "Tapu iptali ve tescil davalarının açılması",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
      "Ortaklığın giderilmesi (izale-i şüyu) davaları",
    ],
    localParagraphs: [
      "Nüfusu otuz yılda yirmi beş kattan fazla artan Esenyurt'ta, hızla artan konut talebine paralel olarak yeni inşa edilen projelerde teslim gecikmesi ve kat mülkiyeti tesisi kaynaklı uyuşmazlıklar sık karşılaşılan gayrimenkul hukuku konularındandır.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür.",
    ],
    faqs: [
      { question: "Yeni konut projesinde teslim gecikirse ne yapılabilir?", answer: "Yeni konut projesinde teslim gecikirse sözleşmede öngörülen gecikme cezası talep edilebilir, gerekirse sözleşmeden dönme hakkı kullanılabilir. Esenyurt'ta yeni projelerde teslim gecikmesi sık karşılaşılan bir uyuşmazlıktır. Teslim tarihi, ceza şartı ve ihtar belgeleri dosyanın temelini oluşturur; hangi yolun seçileceği sözleşme hükümlerine bağlıdır." },
      { question: "Esenyurt'ta gayrimenkul davası hangi mahkemede görülür?", answer: "Esenyurt'taki gayrimenkul davaları niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür. Kira ve tahliye uyuşmazlıkları ile tapu iptali ve tescil davaları farklı mahkemelerin görev alanına girebileceğinden, dava açılmadan önce uyuşmazlığın niteliği belirlenir." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Tapu iptal davası, hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tarafından açılabilir. Davada hatalı veya haksız yapılan tescilin iptali ve gerçek hak sahibi adına tescil talep edilir. Dayanak belgeler, tapu kayıtları ve tescile ilişkin işlem geçmişi dosyanın temelini oluşturur." },
      { question: "Kat irtifakından kat mülkiyetine geçiş ne zaman olur?", answer: "Kat irtifakından kat mülkiyetine geçiş, yapı kullanma izin belgesi alındıktan sonra talep üzerine gerçekleştirilir. Yeni konut projelerinde kat mülkiyeti tesisi gecikirse alıcılar kat mülkiyeti tapusuna kavuşamaz; bu durum teslim uyuşmazlıklarına yol açabilir. Süreçte yapı kullanma izin belgesinin alınıp alınmadığı ilk incelenecek konudur." },
      { question: "Konut alımında tapu öncesi nelere dikkat edilmeli?", answer: "Konut alımında tapu öncesi imar durumu, yüklenicinin mali durumu ve sözleşme şartlarının incelenmesi önerilir. Yeni konut projelerinde teslim tarihi, ceza şartı ve kat mülkiyeti tesisine ilişkin hükümlerin sözleşmede açıkça yazılı olması uyuşmazlık riskini azaltır. Satın alma kararından önce bu belgeler hukuki açıdan değerlendirilebilir." },
    ],
    howToTitle: "Esenyurt'ta Tapu İptali Süreci Nasıl İlerler?",
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
    urlSlug: "esenyurt-icra-avukati",
    name: "Esenyurt İcra Avukatı",
    heroTitle: "Esenyurt İcra Avukatı",
    heroSubtitle:
      "İcra daireleri İstanbul Büyükçekmece Adliyesi bünyesinde faaliyet göstermekte olup, alacak tahsiline yönelik icra takibi başvurusundan ödeme emrine itiraz ve haciz aşamasına kadar temsil hizmeti verilmektedir.",
    metaTitle: "Esenyurt İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Esenyurt'ta icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İcra ve iflas hukuku kapsamında Esenyurt'taki alacaklı ve borçlu taraflara danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukat olup 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "İhaleye katılım ve ihalenin feshi talepleri",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Esenyurt'ta alacak tahsilinde en sık başvurulan yollardan biri icra takibidir. Nüfustaki hızlı artışa paralel olarak küçük esnaf ve konut kiralamalarından kaynaklanan alacak uyuşmazlıklarının sayısı da benzer oranda yükselmektedir.",
      "İcra takibinden doğan uyuşmazlıkların görüldüğü icra mahkemeleri İstanbul Büyükçekmece Adliyesi bünyesindedir. Borçlunun Esenyurt'ta ikamet ettiği dosyalarda yetkili icra dairesi, genel kural gereği borçlunun yerleşim yerine göre belirlenmektedir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "İcra takibi; sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlatılabilir. Belge türü takibin yolunu belirler; ilamlı takip ve ilamsız takip farklı usullere tabidir. Konut kirası veya esnaf alacağı gibi uyuşmazlıklarda dayanak belgelerin eksiksiz sunulması, alacağın ispatını kolaylaştırır." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Ödeme emrine itiraz süresi, tebliğden itibaren 7 gündür (İİK m.62). Borçlu bu süre içinde itiraz ederse takip durur. Alacaklı itirazın iptali veya kaldırılması yoluna başvurabilir; süre kaçırılırsa takip kesinleşir ve haciz aşamasına geçilebilir. Bu nedenle tebliğ tarihinin doğru belirlenmesi önemlidir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Haciz, kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir. Haciz, takibin kesinleşmesinden sonra talep edilir; ardından satış yoluyla tahsilat işlemleri sürdürülür. İhaleye katılım ve ihalenin feshi gibi talepler de takip kapsamında değerlendirilir; hangi malın haczedileceği borçlunun malvarlığına göre belirlenir." },
      { question: "İtirazın iptali davası açma süresi var mı?", answer: "Evet, itirazın iptali davası itirazın tebliğinden itibaren bir yıl içinde açılmalıdır. Alacaklı, borçlunun ödeme emrine yaptığı itirazın kaldırılmasını bu dava ile ister; süre kaçırılırsa bu yoldan yararlanılamaz. İtirazın iptali veya kaldırılması yolları dosyanın dayanak belgelerine göre seçilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Borçlu ödeme yapmazsa haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür. Takip kesinleşmişse haciz talep edilir, haczedilen mal satışa çıkarılır ve bedel alacaklıya aktarılır. Borçlu itiraz ederse süreç itirazın iptali veya kaldırılması davasına yönelir; mali sıkıntıdaki borçlular için konkordato da gündeme gelebilir." },
    ],
    howToTitle: "Esenyurt'ta İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "esenyurt-idare-avukati",
    name: "Esenyurt İdare Avukatı",
    heroTitle: "Esenyurt İdare Avukatı",
    heroSubtitle:
      "Belediye, imar ve ruhsat işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Esenyurt İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Esenyurt'ta idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. İdari işlemlerin iptali ve tam yargı davalarında Esenyurt'taki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "İmar Uygulamaları", description: "Hızlı yapılaşmaya bağlı imar planı değişikliklerine ilişkin uyuşmazlıklar." },
      { title: "Yapı Ruhsatları", description: "İnşaat ve işyeri ruhsat işlemlerine ilişkin uyuşmazlıklar." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İmar planı değişikliklerine karşı iptal davası açılması",
      "Yapı ruhsatı ve işyeri ruhsat işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
      "Belediye encümen kararlarına karşı dava açılması",
    ],
    localParagraphs: [
      "Hızlı nüfus artışına paralel olarak sürekli genişleyen yapılaşma, Esenyurt'ta imar planı değişikliklerine ve yapı ruhsatlarına ilişkin idari işlemleri diğer ilçelere kıyasla daha sık gündeme getirmektedir.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İmar planı ilan edildikten sonra yasal süre içinde idare mahkemesinde dava açılmalıdır; süre ilan tarihinden başlar. Genel idari davalarda dava açma süresi 60 gündür (İYUK m.7), ancak planlara ilişkin süreler özel hükümlere tabi olabileceğinden ilan tarihi ve işlemin niteliği dikkatle belirlenmelidir." },
      { question: "Yapı ruhsatı iptal edilirse ne yapılabilir?", answer: "Yapı ruhsatı iptal edilirse iptal işlemine karşı idare mahkemesinde dava açılabilir. Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Yapı ruhsatı ve işyeri ruhsat işlemlerine itiraz edilirken iptal gerekçesi, tebliğ tarihi ve dayanak mevzuat birlikte incelenir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, idari para cezasına karşı yasal süresinde idare mahkemesinde dava açılabilir. Genel kural olarak dava açma süresi işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Cezanın dayanağı, tebliğ tarihi ve usul eksiklikleri incelenerek iptal talebi hazırlanır; cezayı veren kurum ve dayanak mevzuata göre başvuru yolu değişebilir." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ruhsat başvurusunun reddi halinde ret kararına karşı idare mahkemesinde dava açılabilir. Dava açma süresi genel kural olarak tebliğden itibaren 60 gündür (İYUK m.7). Ruhsat işlemlerine itiraz edilirken ret gerekçesi, başvuru dosyası ve ilgili mevzuata uygunluk birlikte incelenir." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "İdarenin bir eyleminden zarar görenler, tam yargı davası yoluyla zararın tazmini talep edebilir. İdarenin işlem veya eyleminden kaynaklı zararlarda tazminat talebi ilgili idare mahkemesinde ileri sürülür. Davada zararın kapsamı, idarenin eylemi ile zarar arasındaki ilişki ve belgeler birlikte değerlendirilir; süreler işlemin niteliğine göre değişebilir." },
    ],
    howToTitle: "Esenyurt'ta İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "esenyurt-is-hukuku-avukati",
    name: "Esenyurt İş Hukuku Avukatı",
    heroTitle: "Esenyurt İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul Büyükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Esenyurt İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Esenyurt'ta kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Esenyurt'taki işçi ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "İnşaat Sektörü", description: "Yoğun yapılaşma nedeniyle inşaat işçilerinin uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Fazla mesai, hafta tatili ve yıllık izin alacaklarının tahsili",
      "Sigortasız veya eksik günlü çalışmaya ilişkin hizmet tespiti davaları",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Sürekli yeni konut projelerinin inşa edildiği Esenyurt'ta, inşaat sektöründe çalışanların sigortasız istihdam, iş kazası ve ücret alacaklarına ilişkin uyuşmazlıkları sık gündeme gelen iş hukuku konularındandır.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Büyükçekmece Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "İnşaat işçisi iş kazası geçirirse ne yapılmalı?", answer: "İnşaat işçisi iş kazası geçirirse olay derhal SGK'ya bildirilmeli, tedavi ve tazminat süreci başlatılmalıdır. İş kazasından doğan tazminat talepleri iş hukuku kapsamında takip edilir. Kaza tutanağı, sağlık raporları ve çalışma kayıtları olayın işle ilişkisini göstermek bakımından önem taşır; tazminat talebi bu belgelerle hazırlanır." },
      { question: "Şantiyede sigortasız çalıştırılan işçinin hakları nelerdir?", answer: "Şantiyede sigortasız çalıştırılan işçi, hizmet tespiti davası açarak çalışma süresini ve sigorta eksikliğini mahkemece tespit ettirebilir. Sigortasız veya eksik günlü çalışmaya ilişkin davalar iş mahkemesinde görülür. Maaş belgeleri, tanık beyanları ve çalışma kayıtları fiili çalışmanın ispatında önemli deliller arasındadır." },
      { question: "Esenyurt'ta iş mahkemesi nerededir?", answer: "Esenyurt'taki iş davalarına İstanbul Büyükçekmece Adliyesi bünyesindeki iş mahkemelerinde bakılır. İşe iade ve işçilik alacağı davaları, arabuluculukta anlaşma sağlanamazsa bu mahkemelerde görülür. İşe iade davası, arabuluculuk son tutanağından itibaren 2 hafta içinde açılmalıdır; bu nedenle tutanak tarihinin takip edilmesi gerekir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "İşe iade talebinin ne kadar sürede sonuçlanacağı, arabuluculuk ve dava sürecinin toplam süresine bağlı olup dosyaya göre değişebilir. Arabuluculuk başvurusu fesihten itibaren 1 ay içinde yapılır; anlaşma olmazsa son tutanaktan itibaren 2 hafta içinde dava açılır (İş K. m.18: 30 işçi ve 6 ay kıdem koşulu)." },
      { question: "Proje süresine bağlı belirli süreli iş sözleşmelerinde kıdem tazminatı hakkı var mı?", answer: "Şartları taşıması halinde belirli süreli iş sözleşmelerinde de kıdem tazminatına hak kazanılabilir. Proje süresine bağlı sözleşmelerde hakkın doğup doğmadığı, sözleşmenin sona erme biçimine ve çalışma süresine göre değerlendirilir. Fesih haksızsa kıdem ve ihbar tazminatı davası açılabilir; sözleşme ve ibraname metinleri bu kapsamda incelenir." },
    ],
    howToTitle: "Esenyurt'ta İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "esenyurt-kira-tahliye-avukati",
    name: "Esenyurt Kira ve Tahliye Avukatı",
    heroTitle: "Esenyurt Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Kira ilişkisinden doğan uyuşmazlıklara İstanbul Büyükçekmece Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılmakta olup, kiracı tahliyesi, kira bedeli tespiti ve sözleşme uyuşmazlıklarında destek sunulmaktadır.",
    metaTitle: "Esenyurt Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Esenyurt'ta kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kira hukuku alanında Esenyurt'taki kiraya verenlere ve kiracılara danışmanlık sunan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Yeni Konut Kiraları", description: "Hızla büyüyen bölgede kira ilişkisi kurulması ve denetimi." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Yeni konut projelerinde kira sözleşmelerinin hazırlanması",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Kira bedeli uyuşmazlıkları, Esenyurt'ta sıkça karşılaşılan hukuki konulardan biridir; bunun başlıca nedeni, nüfusu otuz yılda on kattan fazla artan ilçede konut kiralama piyasasının da benzer bir hızla büyümüş olmasıdır.",
      "Kira sözleşmesinin yazılı şekilde düzenlenmiş olması, olası bir uyuşmazlıkta ispat bakımından önemlidir. Bu tür davalar İstanbul Büyükçekmece Adliyesi bünyesindeki sulh hukuk mahkemelerinde görülmektedir.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kiracı; kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye edilebilir. Kira borcunda ödeme için verilen 30 günlük süre sonunda ödeme yapılmazsa tahliye talep edilebilir (TBK m.315). Taahhütnameye dayalı tahliye icra yoluyla, ihtiyaç nedeniyle tahliye ise dava yoluyla istenir." },
      { question: "Esenyurt'ta tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine göre değişir; genel olarak birkaç aydan bir buçuk yıla kadar sürebilir. Sürenin uzayıp kısalması tahliye sebebine, taşınmazın konut veya işyeri olmasına ve itirazların niteliğine bağlıdır. Taahhütnameye dayalı icra yoluyla tahliye ise mahkeme sürecinden ayrı yürür." },
      { question: "Yeni teslim edilen bir konutta kira sözleşmesi ne zaman yapılmalı?", answer: "Yeni teslim edilen bir konutta kira sözleşmesinin, teslim tutanağı düzenlendikten ve taşınmazın kullanıma hazır olduğu teyit edildikten sonra yapılması önerilir. Sözleşmenin yazılı düzenlenmesi, olası bir uyuşmazlıkta ispat bakımından önemlidir. Kira bedeli, teslim durumu ve tahliye koşullarının açıkça yazılması sonradan çıkabilecek anlaşmazlıkları azaltır." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Rayiç bedel tespiti, mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Mahkeme, benzer taşınmazların kira bedellerini ve taşınmazın özelliklerini dikkate alarak bedeli belirler. Kira bedelinin tespiti ve uyarlanması davaları sulh hukuk mahkemelerinde görülür; kiraya verenler ve kiracılar bu yola başvurabilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile mahkemeye gitmeden doğrudan icra dairesi kanalıyla tahliye istenebilir. Taahhütnameye dayalı icra yoluyla tahliye, kiracının tahliyeyi önceden yazılı olarak üstlenmesine dayanır. Taahhütnamenin geçerlilik şartları dosyada incelenir; geçersizse mahkeme yoluna gidilmesi gerekebilir." },
    ],
    howToTitle: "Esenyurt'ta Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "esenyurt-vergi-avukati",
    name: "Esenyurt Vergi Avukatı",
    heroTitle: "Esenyurt Vergi Avukatı",
    heroSubtitle:
      "Vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Esenyurt Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Esenyurt'ta vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Esenyurt'taki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Yeni Açılan İşletmeler", description: "Hızla büyüyen esnaf/KOBİ kesimine yönelik vergi uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Yeni açılan küçük ve orta ölçekli işletmelerde vergi incelemesi sürecinde danışmanlık",
      "Konut satışlarına ilişkin değer artış kazancı uyuşmazlıklarında destek",
    ],
    localParagraphs: [
      "Hızla artan nüfusla birlikte sayısı katlanarak çoğalan küçük esnaf ve işletmelerin bulunduğu Esenyurt'ta, kayıt düzeni ve beyan uyuşmazlıklarına dayalı vergi incelemeleri sık karşılaşılan konular arasındadır.",
      "Bu işlemlere karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir; ihbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "İhbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür (İYUK m.7). Süre içinde açılan dava, vergi ve ceza ihbarnamesinin iptalini hedefler. Uzlaşma başvurusu yapılmışsa, uzlaşma sağlanamaması halinde kalan dava açma süresi korunur; bu nedenle tebliğ tarihinin doğru tespiti önemlidir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "Vergi davaları İstanbul vergi mahkemelerinde görülür. Vergi ve ceza ihbarnamesine karşı iptal davası, ihbarnamenin tebliğinden itibaren 30 gün içinde açılır (İYUK m.7). Dava, tarhiyatın ve buna bağlı cezaların hukuka uygunluğunu denetler; ödeme emrine karşı dava da aynı mahkemede açılabilir." },
      { question: "Yeni açılan bir işletme vergi incelemesine tabi olabilir mi?", answer: "Evet, yeni açılan bir işletme faaliyet süresinden bağımsız olarak vergi incelemesine tabi olabilir. Kayıt düzeni ve beyan uyuşmazlıklarına dayalı incelemeler sonucunda tarhiyat ve ceza kesilebilir; bu işlemlere karşı ihbarnamenin tebliğinden itibaren 30 gün içinde dava açılabilir. İnceleme sürecinde belgelerin düzenli tutulması önem taşır." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma başvurusu dava hakkını ortadan kaldırmaz. Uzlaşma sağlanamazsa kalan dava açma süresi korunur ve vergi mahkemesinde dava açılabilir. Vergi idaresi nezdindeki uzlaşma görüşmelerinde temsil sağlanır; uzlaşma ile dava yolu arasındaki tercih tarhiyatın miktarı ve dayanağına göre değerlendirilir." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Ödeme emrine karşı tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır. Ödeme emri, kesinleşmiş vergi borcunun tahsili için gönderilir; süre kaçırılırsa takip devam eder. Dava açılırken ödeme emrinin dayanağı olan tarhiyatın kesinleşme durumu ve tebliğ usulü birlikte incelenir." },
    ],
    howToTitle: "Esenyurt'ta Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "esenyurt-borclar-hukuku-avukati",
    name: "Esenyurt Borçlar Hukuku Avukatı",
    heroTitle: "Esenyurt Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Ticaret ve asliye hukuk mahkemeleri İstanbul Büyükçekmece Adliyesi bünyesinde yer almakta olup, sözleşme uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil hizmeti verilmektedir.",
    metaTitle: "Esenyurt Borçlar Hukuku Avukatı",
    metaDescription:
      "Esenyurt'ta sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Borçlar hukuku kapsamında Esenyurt'taki müvekkillere sözleşme ve alacak uyuşmazlıklarında danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi'nden 2019 yılında mezun olmuştur.",
    highlightCards: [
      { title: "Sözleşme Uyuşmazlıkları", description: "İfa, ihlal ve fesih kaynaklı süreçlerin yürütülmesi." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "İnşaat Sözleşmeleri", description: "Kat karşılığı inşaat ve yapım sözleşmesi uyuşmazlıkları." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sözleşmenin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Kat karşılığı inşaat sözleşmelerinden doğan uyuşmazlıklar",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Esenyurt'ta sık karşılaşılan dava türleri arasında kat karşılığı inşaat sözleşmelerinden ve malzeme/hizmet tedarikinden kaynaklanan uyuşmazlıklar yer almaktadır; bunun temel sebeplerinden biri ilçedeki inşaat faaliyetinin sürekli genişlemesidir.",
      "Bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması kanunen zorunlu tutulmuş olabilir. Bu kapsamdaki davalara İstanbul Büyükçekmece Adliyesi bünyesinde bakılmaktadır.",
    ],
    faqs: [
      { question: "Müteahhit taahhüdünü yerine getirmezse ne yapılabilir?", answer: "Müteahhit taahhüdünü yerine getirmezse sözleşmeden dönme, tazminat veya ifa davası gibi hukuki yollara başvurulabilir. Kat karşılığı inşaat sözleşmelerinden doğan uyuşmazlıklarda sözleşme hükümleri ve gecikme belgeleri incelenir. Hangi yolun seçileceği, sözleşmedeki edimlere ve ihlalin niteliğine göre belirlenir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Ticari alacak davası, niteliğine göre asliye ticaret mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür. Bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması zorunlu olabilir. Alacağın ticari nitelikte olup olmadığı sözleşmeye ve tarafların sıfatına göre belirlenir." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, dava öncesi arabuluculuk her zaman şart değildir; yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Zorunlu olan hallerde arabuluculuğa başvurulmadan dava açılırsa dava usulden reddedilebilir. Uyuşmazlığın bu kapsama girip girmediği dava açılmadan önce incelenir." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse zamanaşımına uğramış alacak talep edilemez; ileri sürmezse talep edilebilir. Mahkeme zamanaşımını kendiliğinden dikkate almaz, bu defi borçlunun ileri sürmesi gerekir. Alacak davası veya icra takibi açılmadan önce alacağın doğduğu tarih ve süreyi kesen işlemler incelenir." },
      { question: "Kat karşılığı inşaat sözleşmesi nedir?", answer: "Kat karşılığı inşaat sözleşmesi, arsa sahibinin arsayı, müteahhidin ise yapım hizmetini karşılıklı edim olarak sunduğu bir sözleşme türüdür. Uyuşmazlıklar teslim gecikmesi, eksik veya ayıplı yapım ve bağımsız bölüm paylaşımı üzerinde çıkabilir; bu nedenle sözleşme hazırlanırken edimler açıkça belirlenmelidir." },
    ],
    howToTitle: "Esenyurt'ta Alacak Davası Süreci Nasıl İşler?",
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

export const esenyurtServices: PseoService[] = [...esenyurtBaseServices, esenyurtMiras];
