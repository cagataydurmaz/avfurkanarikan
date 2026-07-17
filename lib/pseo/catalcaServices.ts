import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const catalcaServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "catalca-avukat",
    name: "Çatalca Avukat",
    heroTitle: "Çatalca Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, yüzölçümü bakımından İstanbul'un en büyük ilçesi olan, orman ve mandıracılık kültürüyle tanınan Çatalca'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Büyükçekmece Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Çatalca Avukat",
    metaDescription:
      "Çatalca'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İstanbul'un yüzölçümü en büyük ilçesi olan, geniş orman alanları ile manda ve süt ürünleri üretimiyle tanınan Çatalca'da ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Tarım ve orman arazisi uyuşmazlıklarının takibi." },
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
      "Tarım ve orman arazisi ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "1.115 km² yüzölçümüyle İstanbul'un en büyük ilçesi olan ve şehrin yüzde 20'sini kaplayan Çatalca, geniş orman alanları, gölet çevresi ve manda/süt ürünleri üretimi geleneğiyle kırsal karakterini korumaktadır.",
      "İlçedeki hukuki uyuşmazlıklar İstanbul Büyükçekmece Adliyesi'nde, vergisel işlemler ise Büyükçekmece Vergi Dairesi Müdürlüğü'nün Çatalca dış veznesi nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Çatalca'daki davalara hangi adliye bakıyor?", answer: "Çatalca, İstanbul Büyükçekmece Adliyesi'nin yargı çevresinde yer almaktadır." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Çatalca'da mı bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Çatalca'daki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Köy arazisi veya mandıra işletmesiyle ilgili destek alınabilir mi?", answer: "Evet, tarım/orman arazisi ve tarımsal işletme uyuşmazlıklarında danışmanlık sağlanır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır." },
      { question: "Büyükçekmece Adliyesi'ne Çatalca'dan ulaşım nasıl?", answer: "E-5 karayolu bağlantısı üzerinden yaklaşık 45-70 dakikada ulaşılabilir." },
    ],
    howToTitle: "Çatalca'da Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Çatalca Avukat (Genel)",
    relatedPostSlugs: ["ortakligin-giderilmesi-davasi", "tapu-iptali-ve-tescil-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "catalca-bosanma-avukati",
    name: "Çatalca Boşanma Avukatı",
    heroTitle: "Çatalca Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; aile mahkemeleri İstanbul Büyükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Çatalca Boşanma Avukatı",
    metaDescription:
      "Çatalca'da anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Aile hukuku alanında Çatalca'daki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlar.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Mandıra/Çiftlik Payı", description: "Aile işletmesi niteliğindeki mandıra veya çiftliğin mal rejiminde değerlendirilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Mandıra veya çiftlik işletmesinin mal rejimi tasfiyesinde değerlendirilmesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Manda yetiştiriciliği ve süt ürünleri üretiminin aile işletmeciliği şeklinde yürütüldüğü Çatalca'da, boşanma davalarında bu tür işletmelerin mal rejimi tasfiyesinde nasıl değerlendirileceği ayrıca incelenmesi gereken bir konu olabilmektedir.",
      "Boşanma, velayet ve nafaka davalarına İstanbul Büyükçekmece Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "İstanbul Büyükçekmece Adliyesi'ndeki aile mahkemesine başvurulur." },
      { question: "Aile işletmesi niteliğindeki mandıra mal paylaşımında nasıl değerlendirilir?", answer: "Evlilik süresince edinilmişse katılma alacağı hesabına dahil edilir; miras yoluyla geçmişse kişisel mal sayılabilir." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir." },
    ],
    howToTitle: "Çatalca'da Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "catalca-ceza-avukati",
    name: "Çatalca Ceza Avukatı",
    heroTitle: "Çatalca Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; kovuşturma İstanbul Büyükçekmece Adliyesi'nde yürütülür.",
    metaTitle: "Çatalca Ceza Avukatı",
    metaDescription:
      "Çatalca'da soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. Ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında Çatalca'daki müvekkillerine müdafilik yapar.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Orman Suçları", description: "Kaçak yapılaşma ve orman alanına ilişkin iddialarda savunma." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Orman alanına kaçak yapılaşma iddialarında savunma",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "Geniş orman alanlarına sahip Çatalca'da, orman kanunu kapsamındaki kaçak yapılaşma ve izinsiz kesim gibi iddialara dayalı ceza soruşturmaları zaman zaman gündeme gelebilmektedir.",
      "Kovuşturma aşamasındaki davalar İstanbul Büyükçekmece Adliyesi'nde görülür. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından belirleyicidir.",
    ],
    faqs: [
      { question: "Çatalca'da bir ceza davası hangi adliyede görülür?", answer: "İstanbul Büyükçekmece Adliyesi'nde görülür." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir ancak müdafi bulundurmak önerilir." },
      { question: "Orman alanına izinsiz yapı yapıldığı iddiasında süreç nasıl işler?", answer: "İlgili idarelerin tespiti üzerine soruşturma başlar, deliller toplanır ve gerekirse iddianame düzenlenir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, sulh ceza hakimliğine itiraz edilebilir." },
      { question: "Temyiz kanun yoluna hangi kararlar için başvurulur?", answer: "Kanunda sayılan ağır suçlara ilişkin kararlar için başvurulabilir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Yargılamaya kaldığı yerden devam edilir." },
    ],
    howToTitle: "Çatalca'da Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "catalca-gayrimenkul-avukati",
    name: "Çatalca Gayrimenkul Avukatı",
    heroTitle: "Çatalca Gayrimenkul Avukatı",
    heroSubtitle:
      "Tarım ve orman arazisi, mera tahsisi ve tapu uyuşmazlıklarında hukuki destek sağlanır; davalar İstanbul Büyükçekmece Adliyesi'nde görülür.",
    metaTitle: "Çatalca Gayrimenkul Avukatı",
    metaDescription:
      "Çatalca'da tarım ve orman arazisi, tapu iptali ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Tarım, orman ve mera arazisi uyuşmazlıklarında Çatalca'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Tarım/Orman Arazisi", description: "Arazi sınırı, vasıf tespiti ve miras intikali uyuşmazlıkları." },
      { title: "Mera Tahsisi", description: "Otlak ve mera arazilerine ilişkin kullanım uyuşmazlıkları." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Tarım ve orman arazisi sınır ve vasıf uyuşmazlıklarında temsil",
      "Mera ve otlak arazilerinin kullanım hakkına ilişkin danışmanlık",
      "Tapu iptali ve tescil davalarının açılması",
      "Miras yoluyla intikal eden arazilerde ortaklığın giderilmesi davaları",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
    ],
    localParagraphs: [
      "İstanbul'un en geniş yüzölçümüne sahip ilçesi olan Çatalca'da, tarım, orman ve mera niteliğindeki arazilere ilişkin sınır tespiti ve miras intikali uyuşmazlıkları sık karşılaşılan gayrimenkul hukuku konularındandır.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür.",
    ],
    faqs: [
      { question: "Mera arazisi özel mülkiyete konu olabilir mi?", answer: "Kural olarak mera arazileri kamu malı niteliğindedir ve tahsis amacı dışında kullanılamaz." },
      { question: "Miras yoluyla kalan tarım arazisi paydaşlar arasında nasıl paylaşılır?", answer: "Anlaşma sağlanamazsa ortaklığın giderilmesi (izale-i şüyu) davası açılabilir." },
      { question: "Çatalca'da gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir." },
      { question: "Orman sınırındaki bir arazinin niteliği nasıl belirlenir?", answer: "Kadastro ve orman kadastrosu kayıtları birlikte incelenerek tespit edilir." },
    ],
    howToTitle: "Çatalca'da Ortaklığın Giderilmesi Süreci Nasıl İşler?",
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
    urlSlug: "catalca-icra-avukati",
    name: "Çatalca İcra Avukatı",
    heroTitle: "Çatalca İcra Avukatı",
    heroSubtitle:
      "Alacak tahsili amacıyla icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır; icra daireleri İstanbul Büyükçekmece Adliyesi'ndedir.",
    metaTitle: "Çatalca İcra Avukatı",
    metaDescription:
      "Çatalca'da icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İcra ve iflas hukuku kapsamında Çatalca'daki üretici, esnaf ve bireysel müvekkillere danışmanlık verir.",
    highlightCards: [
      { title: "Süt Ürünleri Alacakları", description: "Mandıra ve süt ürünleri satışından doğan alacakların takibi." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Süt, peynir ve tereyağı satışından doğan alacakların takibi",
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Manda ve inek sütünden peynir, yoğurt ve tereyağı üretiminin önemli bir geçim kaynağı olduğu Çatalca'da, üretici ile toptancı arasındaki ödeme uyuşmazlıkları icra takiplerinin sık başvurulan nedenleri arasındadır.",
      "Bu takiplere ilişkin uyuşmazlıklar İstanbul Büyükçekmece Adliyesi'ndeki icra mahkemelerinde görülür; borçlunun Çatalca'da yerleşik olduğu takiplerde yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "Sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlanabilir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Tebliğden itibaren 7 gündür." },
      { question: "Süt ürünleri toptan satışında ödeme yapılmazsa ne yapılabilir?", answer: "Fatura veya sözleşmeye dayanarak icra takibi başlatılabilir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür." },
    ],
    howToTitle: "Çatalca'da İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "catalca-idare-avukati",
    name: "Çatalca İdare Avukatı",
    heroTitle: "Çatalca İdare Avukatı",
    heroSubtitle:
      "Orman alanı, mera tahsisi ve belediye işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Çatalca İdare Avukatı",
    metaDescription:
      "Çatalca'da idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. İdari işlemlerin iptali ve tam yargı davalarında Çatalca'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Orman/Mera Tahsisi", description: "Orman kadastrosu ve mera tahsis kararlarına ilişkin uyuşmazlıklar." },
      { title: "Tarım İzinleri", description: "Tarımsal işletme ve hayvancılık ruhsat işlemleri." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Orman kadastrosu ve mera tahsis kararlarına karşı idari dava süreçleri",
      "Tarımsal işletme ve hayvancılık ruhsat işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
      "Belediye encümen kararlarına karşı dava açılması",
    ],
    localParagraphs: [
      "Geniş orman ve mera alanlarına sahip Çatalca'da, orman kadastrosu, mera tahsisi ve tarımsal işletme ruhsatlarına ilişkin idari işlemler diğer ilçelere kıyasla daha sık gündeme gelmektedir.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "Orman kadastrosu kararına itiraz edilebilir mi?", answer: "Evet, kararın kesinleşmesinden önce idari ve yargısal yollarla itiraz edilebilir." },
      { question: "Mera tahsis amacı değiştirilebilir mi?", answer: "Yasada öngörülen istisnai hallerde ve idari izinle mümkün olabilir." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde dava açılabilir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, yasal süresinde idare mahkemesinde dava açılabilir." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "Tam yargı davası yoluyla zararın tazmini talep edilebilir." },
    ],
    howToTitle: "Çatalca'da İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "catalca-is-hukuku-avukati",
    name: "Çatalca İş Hukuku Avukatı",
    heroTitle: "Çatalca İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul Büyükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Çatalca İş Hukuku Avukatı",
    metaDescription:
      "Çatalca'da kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Çatalca'daki mandıra ve tarım işletmesi çalışanlarına ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Mandıra/Çiftlik Çalışanları", description: "Hayvan bakıcısı ve tarım işçilerinin işçilik alacakları." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Mandıra ve çiftlik çalışanlarının ücret ve sigorta uyuşmazlıklarında destek",
      "Hafta tatili ve yıllık izin ücreti gibi diğer işçilik alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Manda ve süt ürünleri üretiminin önemli bir istihdam kaynağı olduğu Çatalca'da, hayvan bakıcılığı ve tarım işçiliğinde sigorta kaydı ve ücret ödemelerine ilişkin uyuşmazlıklar sık gündeme gelen iş hukuku konularındandır.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Büyükçekmece Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Mandırada çalışan işçinin sigorta hakkı var mı?", answer: "Çalışma süresine göre değişmekle birlikte, tarım ve hayvancılık işçileri de sigortalı sayılabilir." },
      { question: "Tarım işçisi iş kazası geçirirse ne yapılmalı?", answer: "Olay derhal SGK'ya bildirilmeli, tedavi ve tazminat süreci başlatılmalıdır." },
      { question: "Çatalca'da iş mahkemesi nerededir?", answer: "İstanbul Büyükçekmece Adliyesi bünyesindedir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir." },
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Çalışma süresi ve son brüt ücret esas alınarak hesaplanır." },
    ],
    howToTitle: "Çatalca'da İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "catalca-kira-tahliye-avukati",
    name: "Çatalca Kira ve Tahliye Avukatı",
    heroTitle: "Çatalca Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Konut ve tarımsal işletme tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemeleri İstanbul Büyükçekmece Adliyesi'ndedir.",
    metaTitle: "Çatalca Kira ve Tahliye Avukatı",
    metaDescription:
      "Çatalca'da kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Kira hukuku alanında Çatalca'daki kiraya verenlere ve kiracılara danışmanlık verir.",
    highlightCards: [
      { title: "Tarım Arazisi Kiraları", description: "Ekim/hasat amaçlı arazi kiralama sözleşmeleri." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Tarım arazisi ve mandıra tesislerinin kira sözleşmelerinin hazırlanması",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Tarım ve hayvancılık faaliyetinin yaygın olduğu Çatalca'da, ekim veya otlatma amacıyla arazi kiralanması konut kiralarından farklı özel şartlar içerebilmektedir.",
      "Bu davalara İstanbul Büyükçekmece Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır; kira sözleşmesinin yazılı ve eksiksiz olması, uyuşmazlık halinde ispat açısından önem taşır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Tarım arazisi kirasında hasat dönemi tahliyeyi etkiler mi?", answer: "Sözleşmede aksi kararlaştırılmadıkça, hasat hakkı sözleşme süresi içinde korunur." },
      { question: "Çatalca'da tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
    ],
    howToTitle: "Çatalca'da Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "catalca-vergi-avukati",
    name: "Çatalca Vergi Avukatı",
    heroTitle: "Çatalca Vergi Avukatı",
    heroSubtitle:
      "Tarım ve hayvancılık işletmelerine yönelik vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Çatalca Vergi Avukatı",
    metaDescription:
      "Çatalca'da vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Çatalca'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Mandıra İşletmeleri", description: "Süt ürünleri üreticilerine yönelik vergi uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Mandıra ve tarım işletmelerinde vergi incelemesi sürecinde danışmanlık",
      "Organik tarım işletmelerine yönelik vergi teşvik uyuşmazlıklarında destek",
    ],
    localParagraphs: [
      "Manda ve süt ürünleri üretiminin yanı sıra organik tarımın da geliştiği Çatalca'da, üretici kayıt sistemi ve gelir beyanına ilişkin vergi incelemeleri sık karşılaşılan konular arasındadır.",
      "Bu işlemlere karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir; ihbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "Mandıra işletmesinin vergi yükümlülüğü nasıl belirlenir?", answer: "Üretim hacmi, satış türü ve kanunda öngörülen istisnalara göre değerlendirilir." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır." },
    ],
    howToTitle: "Çatalca'da Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "catalca-borclar-hukuku-avukati",
    name: "Çatalca Borçlar Hukuku Avukatı",
    heroTitle: "Çatalca Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Süt ürünleri tedarik sözleşmesi uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; ticaret ve asliye hukuk mahkemeleri İstanbul Büyükçekmece Adliyesi'ndedir.",
    metaTitle: "Çatalca Borçlar Hukuku Avukatı",
    metaDescription:
      "Çatalca'da sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Borçlar hukuku kapsamında Çatalca'daki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık verir.",
    highlightCards: [
      { title: "Süt Tedarik Sözleşmeleri", description: "Üretici-toptancı arası süt/peynir tedarik sözleşmeleri." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Hayvan Alım-Satımı", description: "Manda ve büyükbaş hayvan alım-satımından doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Süt ve süt ürünleri tedarik sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Manda ve büyükbaş hayvan alım-satımından doğan ayıp ve tazminat talepleri",
      "Sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Manda yetiştiriciliği ve süt ürünleri üretiminin önemli bir geçim kaynağı olduğu Çatalca'da, üretici ile toptancı arasındaki tedarik sözleşmeleri ile hayvan alım-satımından doğan uyuşmazlıklar sık karşılaşılan borçlar hukuku konularındandır.",
      "Bu davalar İstanbul Büyükçekmece Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Satın alınan manda hastalıklı çıkarsa ne yapılabilir?", answer: "Ayıba dayalı olarak sözleşmeden dönme veya bedel indirimi talep edilebilir." },
      { question: "Süt tedarik sözleşmesinde teslim gecikirse ne olur?", answer: "Sözleşmede öngörülen gecikme cezası talep edilebilir, gerekirse sözleşmeden dönülebilir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir." },
    ],
    howToTitle: "Çatalca'da Alacak Davası Süreci Nasıl İşler?",
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
