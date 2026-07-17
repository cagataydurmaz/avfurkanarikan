import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const avcilarServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "avcilar-avukat",
    name: "Avcılar Avukat",
    heroTitle: "Avcılar Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, İstanbul Üniversitesi-Cerrahpaşa'nın büyük yerleşkesine ev sahipliği yapan ve deprem riski açısından öne çıkan Avcılar'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Küçükçekmece Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Avcılar Avukat",
    metaDescription:
      "Avcılar'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Büyük bir üniversite yerleşkesine sahip olan ve Kuzey Anadolu Fay Hattı'na yakınlığı nedeniyle deprem riski taşıyan Avcılar'da ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Deprem riski/kentsel dönüşüm uyuşmazlıklarının takibi." },
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
      "Deprem riski, öğrenci kiraları ve tapu ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "İstanbul Üniversitesi-Cerrahpaşa'nın büyük yerleşkesine ev sahipliği yapan Avcılar, aynı zamanda Kuzey Anadolu Fay Hattı'na yakınlığı ve sahil kesimindeki sıvılaşma riski nedeniyle İstanbul'un deprem riski en yüksek ilçelerinden biri olarak öne çıkmaktadır.",
      "İlçedeki hukuki uyuşmazlıklar İstanbul Küçükçekmece Adliyesi'nde, vergisel işlemler ise Avcılar Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Avcılar'daki davalara hangi adliye bakıyor?", answer: "Avcılar, İstanbul Küçükçekmece Adliyesi'nin yargı çevresinde yer almaktadır." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Avcılar'da mı bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Avcılar'daki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Riskli yapı tespiti ile ilgili destek alınabilir mi?", answer: "Evet, deprem riski tespitine itiraz ve kentsel dönüşüm süreçlerinde danışmanlık sağlanır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır." },
      { question: "Küçükçekmece Adliyesi'ne Avcılar'dan ulaşım nasıl?", answer: "Metrobüs hattı ve E-5/TEM otoyolu bağlantıları üzerinden ulaşım sağlanabilir." },
    ],
    howToTitle: "Avcılar'da Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Avcılar Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "kiracinin-tahliye-sureci"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "avcilar-bosanma-avukati",
    name: "Avcılar Boşanma Avukatı",
    heroTitle: "Avcılar Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; aile mahkemeleri İstanbul Küçükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Avcılar Boşanma Avukatı",
    metaDescription:
      "Avcılar'da anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Aile hukuku alanında Avcılar'daki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlar.",
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
      "Üniversite yerleşkesi çevresinde genç nüfusun da yoğun olduğu Avcılar'da, boşanma davalarında velayet ve nafaka taleplerinin doğru şekilde belirlenmesi önem taşımaktadır.",
      "Boşanma, velayet ve nafaka davalarına İstanbul Küçükçekmece Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "İstanbul Küçükçekmece Adliyesi'ndeki aile mahkemesine başvurulur." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir." },
      { question: "Deprem riski taşıyan konuttaki aile için tahliye ve boşanma süreci nasıl etkileşir?", answer: "Bu iki süreç birbirinden bağımsızdır; konutun tahliyesi ayrı bir hukuki süreç olarak yürütülür." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir." },
    ],
    howToTitle: "Avcılar'da Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "avcilar-ceza-avukati",
    name: "Avcılar Ceza Avukatı",
    heroTitle: "Avcılar Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; kovuşturma İstanbul Küçükçekmece Adliyesi'nde yürütülür.",
    metaTitle: "Avcılar Ceza Avukatı",
    metaDescription:
      "Avcılar'da soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. Ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında Avcılar'daki müvekkillerine müdafilik yapar.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Öğrenci Odaklı Olaylar", description: "Üniversite çevresindeki olaylara ilişkin savunma." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Üniversite çevresindeki olaylarda mağdur veya sanık vekilliği",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "Büyük bir üniversite yerleşkesine sahip olan Avcılar'da, öğrenci yoğunluğunun getirdiği sosyal hareketlilik nedeniyle kolluk müdahalesi gerektiren olaylar zaman zaman gündeme gelebilmektedir.",
      "Kovuşturma aşamasındaki davalar İstanbul Küçükçekmece Adliyesi'nde görülür. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından belirleyicidir.",
    ],
    faqs: [
      { question: "Avcılar'da bir ceza davası hangi adliyede görülür?", answer: "İstanbul Küçükçekmece Adliyesi'nde görülür." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir ancak müdafi bulundurmak önerilir." },
      { question: "Öğrenci olan bir şüpheli için süreç farklı mı işler?", answer: "Genel usul aynıdır; yaş küçüklüğü söz konusuysa ayrıca özel hükümler uygulanabilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, sulh ceza hakimliğine itiraz edilebilir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Yargılamaya kaldığı yerden devam edilir." },
    ],
    howToTitle: "Avcılar'da Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "avcilar-gayrimenkul-avukati",
    name: "Avcılar Gayrimenkul Avukatı",
    heroTitle: "Avcılar Gayrimenkul Avukatı",
    heroSubtitle:
      "Deprem riski tespiti, kentsel dönüşüm ve tapu uyuşmazlıklarında hukuki destek sağlanır; davalar İstanbul Küçükçekmece Adliyesi'nde görülür.",
    metaTitle: "Avcılar Gayrimenkul Avukatı",
    metaDescription:
      "Avcılar'da deprem riski/kentsel dönüşüm, tapu iptali ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Deprem riski, kentsel dönüşüm ve tapu uyuşmazlıklarında Avcılar'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Deprem Riski/Güçlendirme", description: "Riskli yapı tespitine itiraz ve güçlendirme süreçleri." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Öğrenci Konutu Piyasası", description: "Üniversite çevresindeki kiralık konutlara ilişkin uyuşmazlıklar." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Deprem riski tespitine itiraz ve güçlendirme sürecinde danışmanlık",
      "Kentsel dönüşüm kapsamında paydaşlar arası anlaşmazlıklarda temsil",
      "Tapu iptali ve tescil davalarının açılması",
      "Üniversite çevresindeki kiralık konutlara ilişkin sözleşme danışmanlığı",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
    ],
    localParagraphs: [
      "Kuzey Anadolu Fay Hattı'na yakınlığı ve sahil kesimindeki sıvılaşma riski nedeniyle İstanbul'un deprem riski en yüksek ilçelerinden biri olan Avcılar'da, riskli yapı tespiti ve güçlendirme/dönüşüm süreçlerine ilişkin uyuşmazlıklar önemli bir gayrimenkul hukuku konusudur.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Küçükçekmece Adliyesi bünyesinde görülür.",
    ],
    faqs: [
      { question: "Riskli yapı tespitine nasıl itiraz edilir?", answer: "Tespite karşı belirli süre içinde teknik ve hukuki itiraz yapılabilir." },
      { question: "Bina güçlendirme kararı tüm kat maliklerini bağlar mı?", answer: "Kat malikleri kurulunun aldığı karara göre değişir; anlaşmazlık halinde hukuki yollara başvurulabilir." },
      { question: "Avcılar'da gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Küçükçekmece Adliyesi bünyesinde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir." },
      { question: "Üniversite çevresinde konut kiralarken nelere dikkat edilmeli?", answer: "Binanın deprem güvenliği, kira sözleşmesinin yazılı olması ve depozito şartları önemlidir." },
    ],
    howToTitle: "Avcılar'da Riskli Yapı İtiraz Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Rapor İncelemesi", text: "Riskli yapı tespit raporu teknik açıdan değerlendirilir." },
      { name: "İtiraz Dilekçesi", text: "Süresi içinde ilgili kuruma itiraz dilekçesi sunulur." },
      { name: "Bilirkişi İncelemesi", text: "İtiraz üzerine yeniden teknik inceleme yapılabilir." },
      { name: "Sonuçlanma", text: "Nihai karar doğrultusunda süreç tamamlanır." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "kira-bedeli-tespit-ve-uyarlama-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "avcilar-icra-avukati",
    name: "Avcılar İcra Avukatı",
    heroTitle: "Avcılar İcra Avukatı",
    heroSubtitle:
      "Alacak tahsili amacıyla icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır; icra daireleri İstanbul Küçükçekmece Adliyesi'ndedir.",
    metaTitle: "Avcılar İcra Avukatı",
    metaDescription:
      "Avcılar'da icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İcra ve iflas hukuku kapsamında Avcılar'daki alacaklı ve borçlu taraflara danışmanlık verir.",
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
      "Üniversite çevresinde yoğunlaşan öğrenci konutu kiralama piyasası ve yerel esnaf ilişkilerinden doğan alacaklar, Avcılar'da icra takiplerinin sık başvurulan nedenleri arasındadır.",
      "Bu takiplere ilişkin uyuşmazlıklar İstanbul Küçükçekmece Adliyesi'ndeki icra mahkemelerinde görülür; borçlunun Avcılar'da yerleşik olduğu takiplerde yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "Sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlanabilir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Tebliğden itibaren 7 gündür." },
      { question: "Öğrenci kiracının kira borcu için icra takibi başlatılabilir mi?", answer: "Evet, kira sözleşmesine dayanılarak icra takibi başlatılabilir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür." },
    ],
    howToTitle: "Avcılar'da İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "avcilar-idare-avukati",
    name: "Avcılar İdare Avukatı",
    heroTitle: "Avcılar İdare Avukatı",
    heroSubtitle:
      "Deprem risk tespiti, imar ve belediye işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Avcılar İdare Avukatı",
    metaDescription:
      "Avcılar'da idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. İdari işlemlerin iptali ve tam yargı davalarında Avcılar'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Deprem Risk Kararları", description: "Afet riski taşıyan yapı tespitlerine karşı hukuki yollar." },
      { title: "İmar Uygulamaları", description: "Kentsel dönüşüm alanlarındaki imar planı değişiklikleri." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Deprem risk tespitine karşı idari dava süreçleri",
      "İmar planı değişikliklerine karşı iptal davası açılması",
      "Belediye ruhsat işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Deprem riski açısından İstanbul'un en hassas ilçelerinden biri olan Avcılar'da, riskli yapı kararlarına ve kentsel dönüşüm kapsamındaki imar uygulamalarına ilişkin idari işlemler sık başvurulan idari dava konuları arasındadır.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "Riskli yapı kararına karşı hangi sürede dava açılmalı?", answer: "Tebliğ veya öğrenme tarihinden itibaren 60 gün içinde idare mahkemesinde dava açılabilir." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İlan tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılmalıdır." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde dava açılabilir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, yasal süresinde idare mahkemesinde dava açılabilir." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "Tam yargı davası yoluyla zararın tazmini talep edilebilir." },
    ],
    howToTitle: "Avcılar'da İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "avcilar-is-hukuku-avukati",
    name: "Avcılar İş Hukuku Avukatı",
    heroTitle: "Avcılar İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul Küçükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Avcılar İş Hukuku Avukatı",
    metaDescription:
      "Avcılar'da kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Avcılar'daki çalışanlara ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Kısmi Süreli Çalışma", description: "Öğrenci çalışanların yarı zamanlı iş sözleşmesi uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Kısmi süreli/yarı zamanlı çalışanların işçilik alacaklarının tahsili",
      "Hafta tatili ve yıllık izin ücreti gibi diğer işçilik alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Büyük bir üniversite yerleşkesine sahip olan Avcılar'da, öğrencilerin de sıklıkla tercih ettiği kısmi süreli/yarı zamanlı çalışma ilişkilerinde ücret ve sigorta kaydına ilişkin uyuşmazlıklar sık gündeme gelmektedir.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Küçükçekmece Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Kısmi süreli çalışan öğrencinin sigorta hakkı var mı?", answer: "Çalışma süresine göre değişmekle birlikte, kısmi süreli çalışanlar da sigortalı sayılabilir." },
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Çalışma süresi ve son brüt ücret esas alınarak hesaplanır." },
      { question: "Avcılar'da iş mahkemesi nerededir?", answer: "İstanbul Küçükçekmece Adliyesi bünyesindedir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir." },
      { question: "Part-time çalışanların kıdem tazminatı hakkı var mı?", answer: "Şartları taşıması halinde kısmi süreli çalışanlar da kıdem tazminatına hak kazanabilir." },
    ],
    howToTitle: "Avcılar'da İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "avcilar-kira-tahliye-avukati",
    name: "Avcılar Kira ve Tahliye Avukatı",
    heroTitle: "Avcılar Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Öğrenci ve aile konutu tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemeleri İstanbul Küçükçekmece Adliyesi'ndedir.",
    metaTitle: "Avcılar Kira ve Tahliye Avukatı",
    metaDescription:
      "Avcılar'da kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Kira hukuku alanında Avcılar'daki kiraya verenlere ve kiracılara danışmanlık verir.",
    highlightCards: [
      { title: "Öğrenci Kiralamaları", description: "Üniversite çevresinde ortak kiralama ve depozito uyuşmazlıkları." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Üniversite çevresinde öğrenci kiralamalarına özgü sözleşmelerin hazırlanması",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Büyük bir üniversite yerleşkesinin bulunduğu Avcılar'da, öğrencilerin ortaklaşa kiraladığı konutlarda depozito iadesi ve ortak sorumluluk gibi konular, standart aile konutu kiralarından farklı uyuşmazlıklar doğurabilmektedir.",
      "Bu davalara İstanbul Küçükçekmece Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır; kira sözleşmesinin yazılı ve eksiksiz olması, uyuşmazlık halinde ispat açısından önem taşır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Ortak kiralanan öğrenci evinde depozito nasıl iade edilir?", answer: "Sözleşmede aksi kararlaştırılmadıkça, tüm kiracıların onayı veya sözleşme şartlarına göre iade edilir." },
      { question: "Avcılar'da tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
    ],
    howToTitle: "Avcılar'da Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "avcilar-vergi-avukati",
    name: "Avcılar Vergi Avukatı",
    heroTitle: "Avcılar Vergi Avukatı",
    heroSubtitle:
      "Vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Avcılar Vergi Avukatı",
    metaDescription:
      "Avcılar'da vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Avcılar'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Öğrenci Kiralama Piyasası Esnafı", description: "Üniversite çevresindeki küçük işletmelere yönelik vergi uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Üniversite çevresindeki küçük işletmelerde vergi incelemesi sürecinde danışmanlık",
      "Kira gelirlerinin beyanına ilişkin uyuşmazlıklarda destek",
    ],
    localParagraphs: [
      "Üniversite yerleşkesi çevresinde yoğunlaşan öğrenci konutu kiralama piyasası nedeniyle Avcılar'da, kira gelirinin eksik beyanına dayalı vergi incelemeleri sık karşılaşılan konular arasındadır.",
      "Bu işlemlere karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir; ihbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "Kira geliri beyan edilmezse ne olur?", answer: "Re'sen veya ikmalen tarhiyat ve buna bağlı ceza uygulanabilir, bu işlemlere karşı dava açılabilir." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır." },
    ],
    howToTitle: "Avcılar'da Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "avcilar-borclar-hukuku-avukati",
    name: "Avcılar Borçlar Hukuku Avukatı",
    heroTitle: "Avcılar Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Güçlendirme/inşaat sözleşmesi uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; ticaret ve asliye hukuk mahkemeleri İstanbul Küçükçekmece Adliyesi'ndedir.",
    metaTitle: "Avcılar Borçlar Hukuku Avukatı",
    metaDescription:
      "Avcılar'da sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Borçlar hukuku kapsamında Avcılar'daki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık verir.",
    highlightCards: [
      { title: "Güçlendirme Sözleşmeleri", description: "Bina güçlendirme ve yapım sözleşmesi uyuşmazlıkları." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Kat Karşılığı Sözleşmeler", description: "Kentsel dönüşüm kapsamındaki inşaat sözleşmesi uyuşmazlıkları." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Bina güçlendirme ve yapım sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Kat karşılığı inşaat sözleşmelerinden doğan uyuşmazlıklar",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Deprem riski nedeniyle güçlendirme ve kentsel dönüşüm faaliyetinin yoğun olduğu Avcılar'da, yüklenici firmalarla yapılan güçlendirme/inşaat sözleşmelerinden doğan uyuşmazlıklar sık karşılaşılan borçlar hukuku konularındandır.",
      "Bu davalar İstanbul Küçükçekmece Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Güçlendirme işini üstlenen firma işi eksik bırakırsa ne yapılabilir?", answer: "Sözleşmeden dönme, tazminat veya ifa davası gibi hukuki yollara başvurulabilir." },
      { question: "Kat karşılığı inşaat sözleşmesi nedir?", answer: "Arsa sahibinin arsayı, müteahhidin ise yapım hizmetini karşılıklı edim olarak sunduğu bir sözleşme türüdür." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, İstanbul Küçükçekmece Adliyesi bünyesinde görülür." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir." },
    ],
    howToTitle: "Avcılar'da Alacak Davası Süreci Nasıl İşler?",
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
