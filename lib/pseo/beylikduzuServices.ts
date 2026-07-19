import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const beylikduzuServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "beylikduzu-avukat",
    name: "Beylikdüzü Avukat",
    heroTitle: "Beylikdüzü Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, konut kooperatifleriyle planlı biçimde gelişmiş, TÜYAP Fuar Merkezi'ne ve uzun bir sahil şeridine sahip Beylikdüzü'nde ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Büyükçekmece Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Beylikdüzü Avukat",
    metaDescription:
      "Beylikdüzü'nde ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Yapı kooperatifleri aracılığıyla planlı biçimde gelişmiş, geniş yeşil alanlara ve TÜYAP Fuar Merkezi'ne sahip Beylikdüzü'nde ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Kooperatif ortaklığı ve tapu uyuşmazlıklarının takibi." },
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
      "Kooperatif ortaklığı, tapu ve kira ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "Yapı kooperatifleri eliyle inşa edilen toplu konut projeleriyle İstanbul'un en planlı yerleşimlerinden biri olan Beylikdüzü, geniş bulvarları, yeşil alanları ve TÜYAP Fuar ve Kongre Merkezi'yle hem yerleşik hem ticari bir profil sunmaktadır.",
      "İlçedeki hukuki uyuşmazlıklar İstanbul Büyükçekmece Adliyesi'nde, vergisel işlemler ise Beylikdüzü Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Beylikdüzü'ndeki davalara hangi adliye bakıyor?", answer: "Beylikdüzü, İstanbul Büyükçekmece Adliyesi'nin yargı çevresinde yer almaktadır." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Beylikdüzü'nde mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Beylikdüzü'ndeki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Konut kooperatifi uyuşmazlıklarında destek alınabilir mi?", answer: "Evet, ortaklık payı ve tapu devri süreçlerinde danışmanlık sağlanır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Büyükçekmece Adliyesi'ne Beylikdüzü'nden ulaşım nasıl?", answer: "Metrobüs hattının son durağı olan Beylikdüzü/TÜYAP durağı üzerinden ulaşım sağlanabilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır." },
    ],
    howToTitle: "Beylikdüzü'nde Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Beylikdüzü Avukat (Genel)",
    relatedPostSlugs: ["ortakligin-giderilmesi-davasi", "tapu-iptali-ve-tescil-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "beylikduzu-bosanma-avukati",
    name: "Beylikdüzü Boşanma Avukatı",
    heroTitle: "Beylikdüzü Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; aile mahkemeleri İstanbul Büyükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Beylikdüzü Boşanma Avukatı",
    metaDescription:
      "Beylikdüzü'nde anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Aile hukuku alanında Beylikdüzü'ndeki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlar.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Kooperatif Konutu Payı", description: "Kooperatif hissesinin mal rejiminde değerlendirilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Kooperatif hissesi/konutunun mal rejimi tasfiyesinde değerlendirilmesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Konut kooperatifleri aracılığıyla edinilmiş taşınmazların yaygın olduğu Beylikdüzü'nde, boşanma davalarında kooperatif hissesinin veya henüz tapuya dönüşmemiş ortaklık payının mal rejimi tasfiyesinde nasıl değerlendirileceği ayrı bir uzmanlık gerektirebilmektedir.",
      "Boşanma, velayet ve nafaka davalarına İstanbul Büyükçekmece Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "İstanbul Büyükçekmece Adliyesi'ndeki aile mahkemesine başvurulur." },
      { question: "Kooperatif hissesi mal paylaşımında nasıl değerlendirilir?", answer: "Evlilik süresince edinilmişse, tapuya henüz dönüşmemiş olsa dahi katılma alacağı hesabına dahil edilebilir." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir." },
      { question: "Mal rejimi tasfiyesi ne kadar sürer?", answer: "Dosyanın niteliğine ve bilirkişi incelemesine göre süre değişebilir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir." },
    ],
    howToTitle: "Beylikdüzü'nde Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "beylikduzu-ceza-avukati",
    name: "Beylikdüzü Ceza Avukatı",
    heroTitle: "Beylikdüzü Ceza Avukatı",
    heroSubtitle:
      "Beylikdüzü'nde yürütülen ceza dosyalarında ifade alma, gözaltı ve kovuşturmanın her aşamasında müdafi olarak destek verilir; davalara bakan adliye İstanbul Büyükçekmece Adliyesi'dir.",
    metaTitle: "Beylikdüzü Ceza Avukatı",
    metaDescription:
      "Beylikdüzü'nde soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarının tamamında Beylikdüzü'ndeki müvekkillere müdafilik hizmeti veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Fuar/Etkinlik Kaynaklı Uyuşmazlıklar", description: "TÜYAP çevresindeki organizasyonlara ilişkin iddialarda savunma." },
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
      "Beylikdüzü'nde zaman zaman gündeme gelen güven suçu iddialarının bir kısmı, TÜYAP Fuar ve Kongre Merkezi çevresinde yoğunlaşan etkinlik ve organizasyon faaliyetlerinden doğan ticari ilişkilerden kaynaklanabilmektedir.",
      "Müdafi ile görüşme hakkı, gözaltı sürecinin başladığı andan itibaren doğar ve bu hakkın zamanında kullanılması sürecin sonraki aşamalarını doğrudan etkiler; Beylikdüzü'nde açılan kovuşturma dosyalarına İstanbul Büyükçekmece Adliyesi'nde bakılmaktadır.",
    ],
    faqs: [
      { question: "Beylikdüzü'nde bir ceza davası hangi adliyede görülür?", answer: "İstanbul Büyükçekmece Adliyesi'nde görülür." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir ancak müdafi bulundurmak önerilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, sulh ceza hakimliğine itiraz edilebilir." },
      { question: "Temyiz kanun yoluna hangi kararlar için başvurulur?", answer: "Kanunda sayılan ağır suçlara ilişkin kararlar için başvurulabilir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Yargılamaya kaldığı yerden devam edilir." },
    ],
    howToTitle: "Beylikdüzü'nde Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "beylikduzu-gayrimenkul-avukati",
    name: "Beylikdüzü Gayrimenkul Avukatı",
    heroTitle: "Beylikdüzü Gayrimenkul Avukatı",
    heroSubtitle:
      "Yapı kooperatifi ortaklığı, tapu uyuşmazlıkları ve kira ilişkilerinde hukuki destek sağlanır; davalar İstanbul Büyükçekmece Adliyesi'nde görülür.",
    metaTitle: "Beylikdüzü Gayrimenkul Avukatı",
    metaDescription:
      "Beylikdüzü'nde yapı kooperatifi ortaklığı, tapu iptali ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Yapı kooperatifi ortaklığı, tapu ve kira uyuşmazlıklarında Beylikdüzü'ndeki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Kooperatif Ortaklığı", description: "Ortaklık payının devri, kooperatiften çıkma/çıkarılma uyuşmazlıkları." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Site Yönetimi", description: "Toplu konut sitelerinde yönetim ve aidat uyuşmazlıkları." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Yapı kooperatifi ortaklık payının devri ve tapuya dönüştürülmesi süreçleri",
      "Kooperatiften çıkarılma kararlarına karşı itiraz ve iptal davaları",
      "Site yönetim planı ve ortak gider uyuşmazlıklarında temsil",
      "Tapu iptali ve tescil davalarının açılması",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
    ],
    localParagraphs: [
      "Yapı kooperatifleri eliyle gelişen bir yerleşim geçmişine sahip Beylikdüzü'nde, kooperatif ortaklık payının devri, kooperatiften çıkarılma kararlarına itiraz ve tapuya dönüştürme süreçleri sık karşılaşılan gayrimenkul hukuku konularındandır.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür.",
    ],
    faqs: [
      { question: "Kooperatiften çıkarılma kararına itiraz edilebilir mi?", answer: "Evet, kararın usule ve esasa aykırı olduğu iddiasıyla mahkemeye başvurulabilir." },
      { question: "Kooperatif ortaklık payı nasıl devredilir?", answer: "Kooperatif ana sözleşmesindeki usule uygun olarak devir işlemi yapılmalıdır." },
      { question: "Beylikdüzü'nde gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir." },
      { question: "Site yönetim kurulu kararına nasıl itiraz edilir?", answer: "Karara katılmayan malik, belirli süre içinde iptal davası açabilir." },
    ],
    howToTitle: "Beylikdüzü'nde Kooperatif Ortaklığı Uyuşmazlığı Nasıl Çözülür?",
    howToSteps: [
      { name: "Belge İncelemesi", text: "Kooperatif ana sözleşmesi ve ortaklık kayıtları incelenir." },
      { name: "İtiraz veya Talep", text: "Duruma göre kooperatif organlarına itiraz veya devir talebi yapılır." },
      { name: "Dava Açılması", text: "Çözülemeyen uyuşmazlıkta mahkemeye başvurulur." },
      { name: "Sonuçlanma", text: "Mahkeme kararıyla ortaklık durumu netleşir." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "beylikduzu-icra-avukati",
    name: "Beylikdüzü İcra Avukatı",
    heroTitle: "Beylikdüzü İcra Avukatı",
    heroSubtitle:
      "Alacak tahsili amacıyla icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır; icra daireleri İstanbul Büyükçekmece Adliyesi'ndedir.",
    metaTitle: "Beylikdüzü İcra Avukatı",
    metaDescription:
      "Beylikdüzü'nde icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İcra ve iflas hukuku kapsamında Beylikdüzü'ndeki alacaklı ve borçlu taraflara danışmanlık verir.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "Etkinlik/Organizasyon Alacakları", description: "Fuar ve etkinlik sektöründen doğan ticari alacaklar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fuar ve etkinlik organizasyonu hizmetlerinden doğan alacakların takibi",
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "TÜYAP Fuar ve Kongre Merkezi çevresinde yoğunlaşan etkinlik, stant ve organizasyon hizmetlerine ilişkin ticari ilişkilerden doğan alacaklar, Beylikdüzü'nde icra takiplerinin başlıca kaynaklarından biridir.",
      "Bu takiplere ilişkin uyuşmazlıklar İstanbul Büyükçekmece Adliyesi'ndeki icra mahkemelerinde görülür; borçlunun Beylikdüzü'nde yerleşik olduğu takiplerde yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "Sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlanabilir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Tebliğden itibaren 7 gündür." },
      { question: "Fuar standı kirasında ödeme yapılmazsa ne olur?", answer: "Sözleşmeye dayanarak icra takibi başlatılabilir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür." },
    ],
    howToTitle: "Beylikdüzü'nde İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "beylikduzu-idare-avukati",
    name: "Beylikdüzü İdare Avukatı",
    heroTitle: "Beylikdüzü İdare Avukatı",
    heroSubtitle:
      "Beylikdüzü'nde belediye, imar ve kıyı alanına ilişkin idari işlemlere karşı açılan iptal ve tam yargı davalarında İstanbul idare mahkemeleri nezdinde temsil sağlanır.",
    metaTitle: "Beylikdüzü İdare Avukatı",
    metaDescription:
      "Beylikdüzü'nde idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş olup idari işlemlerin iptali ve tam yargı davaları alanında Beylikdüzü'ndeki müvekkillerine danışmanlık vermektedir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Kıyı Alanı Uygulamaları", description: "Sahil şeridi ve marina bölgesindeki imar uyuşmazlıkları." },
      { title: "Kooperatif İmar İzinleri", description: "Toplu konut projelerine ilişkin ruhsat süreçleri." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kıyı alanı ve sahil şeridi düzenlemelerine ilişkin idari dava süreçleri",
      "İmar planı değişikliklerine karşı iptal davası açılması",
      "Belediye ruhsat işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Sahil alanına ve imar planı değişikliklerine ilişkin idari işlemler, Beylikdüzü'nde zaman zaman dava konusu olabilmektedir; ilçe, 12,4 km uzunluğundaki kıyı şeridi ve West İstanbul Marina gibi tesisleriyle geniş bir sahil alanına sahiptir.",
      "Genel kural olarak dava açma süresi, ilgili işlemin tebliğinden itibaren 60 gündür; bu süre içindeki davalara İstanbul idare mahkemelerinde bakılmaktadır.",
    ],
    faqs: [
      { question: "Kıyı şeridindeki bir yapılaşmaya itiraz nasıl yapılır?", answer: "İlan veya tebliğ tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılabilir." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İlan tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılmalıdır." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde dava açılabilir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, yasal süresinde idare mahkemesinde dava açılabilir." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "Tam yargı davası yoluyla zararın tazmini talep edilebilir." },
    ],
    howToTitle: "Beylikdüzü'nde İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "beylikduzu-is-hukuku-avukati",
    name: "Beylikdüzü İş Hukuku Avukatı",
    heroTitle: "Beylikdüzü İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul Büyükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Beylikdüzü İş Hukuku Avukatı",
    metaDescription:
      "Beylikdüzü'nde kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Beylikdüzü'ndeki fuarcılık, organizasyon ve diğer sektör çalışanlarına ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Fuar/Etkinlik Sektörü", description: "Dönemsel ve proje bazlı çalışanların işçilik alacakları." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Fuar dönemlerinde dönemsel çalışanların işçilik alacaklarının tahsili",
      "Hafta tatili ve yıllık izin ücreti gibi diğer işçilik alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "TÜYAP Fuar ve Kongre Merkezi'nde yıl boyunca düzenlenen etkinlikler, dönemsel ve proje bazlı istihdamı Beylikdüzü'nde yaygınlaştırmakta; bu da işçilik alacaklarının hesaplanmasında ayrı bir dikkat gerektirebilmektedir.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Büyükçekmece Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Fuar dönemlerinde çalışanların kıdem tazminatı hakkı var mı?", answer: "Şartları taşıması halinde dönemsel çalışanlar da kıdem tazminatına hak kazanabilir." },
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Çalışma süresi ve son brüt ücret esas alınarak hesaplanır." },
      { question: "Beylikdüzü'nde iş mahkemesi nerededir?", answer: "İstanbul Büyükçekmece Adliyesi bünyesindedir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir." },
      { question: "Etkinlik sırasında iş kazası geçiren çalışan ne yapmalı?", answer: "Olay derhal SGK'ya bildirilmeli, tedavi ve tazminat süreci başlatılmalıdır." },
    ],
    howToTitle: "Beylikdüzü'nde İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "beylikduzu-kira-tahliye-avukati",
    name: "Beylikdüzü Kira ve Tahliye Avukatı",
    heroTitle: "Beylikdüzü Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Konut ve stant/işyeri tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemeleri İstanbul Büyükçekmece Adliyesi'ndedir.",
    metaTitle: "Beylikdüzü Kira ve Tahliye Avukatı",
    metaDescription:
      "Beylikdüzü'nde kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Kira hukuku alanında Beylikdüzü'ndeki kiraya verenlere ve kiracılara danışmanlık verir.",
    highlightCards: [
      { title: "Site İçi Konut Kiraları", description: "Toplu konut projelerinde kira sözleşmesi süreçleri." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Toplu konut projelerinde kira sözleşmelerinin hazırlanması",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Planlı toplu konut projeleri ve yüksek yaşam standardıyla bilinen Beylikdüzü'nde, sahil bölgesine yakınlık gibi etmenler kira bedellerini semtten semte belirgin biçimde farklılaştırabilmektedir.",
      "Bu davalara İstanbul Büyükçekmece Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır; kira sözleşmesinin yazılı ve eksiksiz olması, uyuşmazlık halinde ispat açısından önem taşır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Sahile yakın bir konutun kira bedeli nasıl tespit edilir?", answer: "Bilirkişi, konumu da dikkate alarak bölgedeki emsal bedelleri değerlendirir." },
      { question: "Beylikdüzü'nde tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
    ],
    howToTitle: "Beylikdüzü'nde Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "beylikduzu-vergi-avukati",
    name: "Beylikdüzü Vergi Avukatı",
    heroTitle: "Beylikdüzü Vergi Avukatı",
    heroSubtitle:
      "Vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Beylikdüzü Vergi Avukatı",
    metaDescription:
      "Beylikdüzü'nde vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Beylikdüzü'ndeki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Etkinlik/Organizasyon Sektörü", description: "Fuarcılık ve etkinlik işletmelerine yönelik vergi uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Fuarcılık ve etkinlik organizasyonu işletmelerinde vergi incelemesi sürecinde danışmanlık",
      "Konut satışlarına ilişkin değer artış kazancı uyuşmazlıklarında destek",
    ],
    localParagraphs: [
      "TÜYAP çevresindeki fuarcılık ve etkinlik organizasyonu sektörünün yoğun olduğu Beylikdüzü'nde, dönemsel gelir beyanına ilişkin vergi incelemeleri ile bunlara bağlı ceza kesme işlemleri sık karşılaşılan konular arasındadır.",
      "Bu işlemlere karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir; ihbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Fuar dönemi gelirleri nasıl beyan edilmeli?", answer: "Faaliyetin niteliğine göre ilgili vergilendirme dönemlerinde eksiksiz beyan edilmesi gerekir." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır." },
    ],
    howToTitle: "Beylikdüzü'nde Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "beylikduzu-borclar-hukuku-avukati",
    name: "Beylikdüzü Borçlar Hukuku Avukatı",
    heroTitle: "Beylikdüzü Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Etkinlik/organizasyon sözleşmesi uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; ticaret ve asliye hukuk mahkemeleri İstanbul Büyükçekmece Adliyesi'ndedir.",
    metaTitle: "Beylikdüzü Borçlar Hukuku Avukatı",
    metaDescription:
      "Beylikdüzü'nde sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Borçlar hukuku kapsamında Beylikdüzü'ndeki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık verir.",
    highlightCards: [
      { title: "Etkinlik/Stant Sözleşmeleri", description: "Fuar organizasyonu ve stant kiralama sözleşmelerinden doğan uyuşmazlıklar." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Kooperatif Sözleşmeleri", description: "Yapı kooperatifi ana sözleşmesinden doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fuar organizasyonu ve stant kiralama sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Kooperatif ortakları arası pay devri sözleşmelerinden doğan uyuşmazlıklar",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "TÜYAP çevresindeki yoğun etkinlik ve organizasyon sektörü nedeniyle Beylikdüzü'nde stant kiralama ve hizmet sözleşmelerinden doğan uyuşmazlıklar sık karşılaşılan dava türleri arasındadır.",
      "Bu davalar İstanbul Büyükçekmece Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Fuar organizatörü taahhüdünü yerine getirmezse ne yapılabilir?", answer: "Sözleşmeden dönme, tazminat veya ifa davası gibi hukuki yollara başvurulabilir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir." },
      { question: "Kooperatif ana sözleşmesine aykırı karar alınırsa ne yapılabilir?", answer: "Karara karşı iptal davası açılabilir." },
    ],
    howToTitle: "Beylikdüzü'nde Alacak Davası Süreci Nasıl İşler?",
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
