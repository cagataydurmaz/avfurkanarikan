import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const eyupsultanServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "eyupsultan-avukat",
    name: "Eyüpsultan Avukat",
    heroTitle: "Eyüpsultan Avukat",
    heroSubtitle:
      "Eyüpsultan'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında temsil sağlanır; ilçe İstanbul (Çağlayan) Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Eyüpsultan Avukat",
    metaDescription:
      "Eyüpsultan'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan (İstanbul Barosu, Sicil No: 72621), 2019'dan bu yana ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku alanlarında dosya takibi yapmaktadır; MEF Üniversitesi Hukuk Fakültesi mezunudur. Randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Tapu, kira ve tahliye uyuşmazlıklarının takibi." },
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
      "Tapu, kat mülkiyeti ve kira ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "Eyüp Sultan Camii ve Türbesi çevresindeki dini ve tarihi dokusuyla bilinen Eyüpsultan, aynı zamanda Alibeyköy başta olmak üzere sanayi sonrası dönüşen ve yoğun konut alanına evrilen mahalleleriyle karma bir yapıya sahiptir.",
      "İlçede yaşayan veya faaliyet gösterenlerin hukuki uyuşmazlıkları İstanbul (Çağlayan) Adliyesi'nde, vergisel işlemleri ise Eyüp Mal Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Eyüpsultan'daki davalara hangi adliye bakıyor?", answer: "Eyüpsultan, İstanbul (Çağlayan) Adliyesi'nin yargı çevresinde yer almaktadır." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Eyüpsultan'da mı bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Eyüpsultan'daki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Alibeyköy'deki sanayi dönüşümüyle ilgili hukuki destek var mı?", answer: "Evet, kentsel dönüşüm ve tapu işlemlerinde gayrimenkul hukuku kapsamında danışmanlık sağlanır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Çağlayan Adliyesi'ne Eyüpsultan'dan ulaşım nasıl?", answer: "M7 hattının Alibeyköy istasyonu ve M1 hattının Bayrampaşa-Maltepe istasyonu üzerinden ulaşım sağlanabilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır." },
    ],
    howToTitle: "Eyüpsultan'da Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Eyüpsultan Avukat (Genel)",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "kidem-tazminati-hesaplama-2026", "icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "eyupsultan-bosanma-avukati",
    name: "Eyüpsultan Boşanma Avukatı",
    heroTitle: "Eyüpsultan Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma davalarında velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; davalar İstanbul (Çağlayan) Adliyesi'nde görülür.",
    metaTitle: "Eyüpsultan Boşanma Avukatı",
    metaDescription:
      "Eyüpsultan'da anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan (İstanbul Barosu, Sicil No: 72621), aile hukuku alanında boşanma, velayet ve nafaka dosyalarında Eyüpsultan'daki müvekkillerine temsil sağlamaktadır; MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokol hazırlığı ve duruşma temsili." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına göre düzenleme talepleri." },
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
      "Eyüpsultan Merkez'in köklü aile yapısından Alibeyköy'ün yoğun ve genç nüfuslu konut dokusuna uzanan sosyo-demografik çeşitlilik, boşanma dosyalarında velayet ve nafaka taleplerinin niteliğini de etkileyebilmektedir.",
      "İlçede açılan boşanma, velayet ve nafaka davalarına İstanbul (Çağlayan) Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Aile mahkemesi başvurusu nasıl yapılır?", answer: "Dilekçeyle İstanbul (Çağlayan) Adliyesi'ndeki aile mahkemesine başvurulur." },
      { question: "Anlaşmalı boşanmada taraflar duruşmaya katılmalı mı?", answer: "Evet, hakim her iki tarafı da dinleyerek iradeyi teyit eder." },
      { question: "Manevi tazminat hangi hallerde istenir?", answer: "Kişilik haklarına saldırı niteliğindeki kusurlu davranışlarda talep edilebilir." },
      { question: "Ortak velayet mümkün müdür?", answer: "Tarafların anlaşması ve çocuğun yararına uygun olması halinde uygulanabilir." },
      { question: "Yoksulluk nafakası kim tarafından talep edilebilir?", answer: "Boşanma nedeniyle yoksulluğa düşecek taraf talep edebilir." },
      { question: "Boşanma sonrası soyadı değişikliği nasıl olur?", answer: "Kadın, dilerse kararla birlikte evlilik öncesi soyadını kullanmaya devam edebilir." },
    ],
    howToTitle: "Eyüpsultan'da Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "Talep Belirleme", text: "Velayet, nafaka ve mal rejimi konusundaki talepler netleştirilir." },
      { name: "Dilekçe/Protokol", text: "Duruma uygun dilekçe veya protokol hazırlanır." },
      { name: "Aile Mahkemesine Başvuru", text: "Dosya açılarak duruşma günü beklenir." },
      { name: "Sonuçlandırma", text: "Duruşma sonrası mahkeme kararını verir." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "bosanmada-nafaka-turleri"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "eyupsultan-ceza-avukati",
    name: "Eyüpsultan Ceza Avukatı",
    heroTitle: "Eyüpsultan Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; kovuşturma İstanbul (Çağlayan) Adliyesi'nde yürütülür.",
    metaTitle: "Eyüpsultan Ceza Avukatı",
    metaDescription:
      "Eyüpsultan'da soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan (İstanbul Barosu, Sicil No: 72621), ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında Eyüpsultan'daki müvekkillerine müdafilik yapmaktadır; MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Kanun Yolları", description: "İstinaf ve temyiz süreçlerinin yürütülmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltındaki şüpheliye müdafilik hizmeti verilmesi",
      "Soruşturma aşamasında evrak incelemesi yapılması",
      "Tutuklama ve adli kontrol kararlarına itiraz edilmesi",
      "Kovuşturma sürecinde duruşmalara katılım sağlanması",
      "Üst mahkemelere başvuru dilekçelerinin hazırlanması",
      "Uzlaşma görüşmelerinde müvekkilin temsil edilmesi",
    ],
    localParagraphs: [
      "Eyüp Sultan Camii çevresindeki yoğun ziyaretçi trafiği ile Alibeyköy ve Rami çevresindeki kalabalık yerleşim, Eyüpsultan'da kolluk müdahalesi gerektiren olayların görece sık yaşanmasına zemin hazırlayabilmektedir. Kovuşturma aşamasındaki davalar İstanbul (Çağlayan) Adliyesi'nde görülür.",
      "Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından belirleyicidir.",
    ],
    faqs: [
      { question: "Eyüpsultan'da işlenen suçlarla ilgili dava nerede görülür?", answer: "İstanbul (Çağlayan) Adliyesi'nde görülür." },
      { question: "Gözaltı süresi ne kadardır?", answer: "Suçun niteliğine göre kanunda öngörülen sürelerle sınırlıdır." },
      { question: "Adli kontrol tedbiri nedir?", answer: "Tutuklama yerine uygulanabilecek, belirli yükümlülükler içeren bir tedbirdir." },
      { question: "Duruşmaya katılmak zorunlu mu?", answer: "Sanığın katılımı kural olarak esastır, bazı hallerde istisnalar uygulanabilir." },
      { question: "Temyiz süresi kaç gündür?", answer: "Kararın niteliğine göre kanunda belirtilen süre içinde yapılmalıdır." },
      { question: "Uzlaşma sağlanırsa dava ne olur?", answer: "Kamu davası açılmaz veya açılmışsa düşürülür." },
    ],
    howToTitle: "Eyüpsultan'da Ceza Yargılaması Nasıl İlerler?",
    howToSteps: [
      { name: "Şikayet/İhbar", text: "Yetkili makamlara bildirimde bulunulur." },
      { name: "Soruşturma", text: "Savcılık delil toplar, ifadeler alınır." },
      { name: "İddianame", text: "Yeterli şüphe varsa dava açılır." },
      { name: "Yargılama", text: "Duruşmalar sonunda karar verilir." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "eyupsultan-gayrimenkul-avukati",
    name: "Eyüpsultan Gayrimenkul Avukatı",
    heroTitle: "Eyüpsultan Gayrimenkul Avukatı",
    heroSubtitle:
      "Kentsel dönüşüm, tapu uyuşmazlıkları ve kira ilişkilerinde hukuki destek sağlanır; davalar İstanbul (Çağlayan) Adliyesi'nde görülür.",
    metaTitle: "Eyüpsultan Gayrimenkul Avukatı",
    metaDescription:
      "Eyüpsultan'da tapu iptali, kentsel dönüşüm ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan (İstanbul Barosu, Sicil No: 72621), tapu, kat mülkiyeti ve kentsel dönüşüm uyuşmazlıklarında Eyüpsultan'daki müvekkillerine danışmanlık vermektedir; MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur.",
    highlightCards: [
      { title: "Kentsel Dönüşüm", description: "Alibeyköy ve çevresindeki dönüşüm süreçlerinde destek." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Kat Mülkiyeti", description: "Yönetim planı ve ortak gider anlaşmazlıkları." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Riskli yapı tespiti sonrası kentsel dönüşüm sürecinde danışmanlık",
      "Tapu iptali ve tescil davalarının açılması",
      "Kat mülkiyeti ve yönetim planından doğan uyuşmazlıklar",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
      "Ortaklığın giderilmesi (izale-i şüyu) davaları",
    ],
    localParagraphs: [
      "Alibeyköy'de eski sanayi tesislerinin konut ve ticaret alanına dönüştüğü bölgelerde kentsel dönüşüm projeleri yoğun biçimde sürmekte, bu da tapu ve kat mülkiyeti işlemlerini Eyüpsultan'da sık gündeme gelen bir konu haline getirmektedir; bu uyuşmazlıklar İstanbul (Çağlayan) Adliyesi'ndeki sulh hukuk ve asliye hukuk mahkemelerinde görülür.",
      "Haliç kıyısındaki mahallelerde de kıyı ve dolgu alanı statüsüne bağlı tapu ve kullanım uyuşmazlıkları zaman zaman gündeme gelmektedir.",
    ],
    faqs: [
      { question: "Kentsel dönüşüm süreci nasıl başlar?", answer: "Riskli yapı tespiti sonrasında kat maliklerinin çoğunluk kararı ve idari başvuru aşamalarıyla ilerler." },
      { question: "Eyüpsultan'da gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde görülür." },
      { question: "Riskli yapı kararına itiraz edilebilir mi?", answer: "Evet, teknik rapora karşı bilirkişi incelemesi talep edilerek itiraz edilebilir." },
      { question: "Ortak gider anlaşmazlıkları nasıl giderilir?", answer: "Öncelikle yönetim planı ve Kat Mülkiyeti Kanunu esas alınır, çözülemezse dava yoluna gidilir." },
      { question: "Haliç kıyısındaki taşınmazlarda ek bir kısıtlama var mı?", answer: "Kıyı ve dolgu alanı statüsü kullanım ve tadilat açısından ek kısıtlamalar getirebilir." },
    ],
    howToTitle: "Eyüpsultan'da Kentsel Dönüşüm Süreci Nasıl Yürütülür?",
    howToSteps: [
      { name: "Teknik Tespit", text: "Yapının riskli olup olmadığına dair rapor alınır." },
      { name: "Kat Maliki Süreci", text: "Maliklerin anlaşması ve gerekli kararların alınması sağlanır." },
      { name: "İdari Başvuru", text: "İlgili idareye yıkım ve yeniden yapım için başvurulur." },
      { name: "Uygulama", text: "Anlaşma ve idari onay sonrası inşaat süreci başlar." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "eyupsultan-icra-avukati",
    name: "Eyüpsultan İcra Avukatı",
    heroTitle: "Eyüpsultan İcra Avukatı",
    heroSubtitle:
      "Alacak tahsili amacıyla icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır; icra mahkemeleri İstanbul (Çağlayan) Adliyesi'ndedir.",
    metaTitle: "Eyüpsultan İcra Avukatı",
    metaDescription:
      "Eyüpsultan'da icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan (İstanbul Barosu, Sicil No: 72621), icra ve iflas hukuku kapsamında Eyüpsultan'daki alacaklı ve borçlu taraflara danışmanlık vermektedir; MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacaklının talebiyle ilamlı veya ilamsız takip dosyası açılması",
      "Ödeme emrine süresi içinde itiraz edilmesi",
      "İtirazın iptali veya itirazın kaldırılması davalarının yürütülmesi",
      "Taşınır ve taşınmaz mal üzerine haciz konulması",
      "İhale ve satış işlemlerine ilişkin itirazlar",
      "İflasın ertelenmesi ve konkordato taleplerinde danışmanlık",
    ],
    localParagraphs: [
      "Alibeyköy ve Rami çevresindeki küçük ve orta ölçekli işletmelerin ticari alacakları, Eyüpsultan'da icra takiplerinin sık başvurulan bir yol olmasına yol açmaktadır; bu takiplere ilişkin uyuşmazlıklar İstanbul (Çağlayan) Adliyesi'ndeki icra mahkemelerinde görülür.",
      "Borçlunun Eyüpsultan'da yerleşik olduğu takiplerde yetkili icra dairesi, kural olarak borçlunun ikametgahı veya sözleşmede belirlenen yer esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "Takibe hangi hallerde itiraz edilir?", answer: "Borcun bulunmadığı, ödendiği veya imzanın borçluya ait olmadığı iddialarıyla itiraz edilebilir." },
      { question: "İtiraz süresi kaçırılırsa ne olur?", answer: "Takip kesinleşir, borçlu hakkında haciz işlemlerine geçilebilir." },
      { question: "Haciz kararına itiraz edilebilir mi?", answer: "Usule aykırılık halinde icra mahkemesine şikayet yoluyla itiraz edilebilir." },
      { question: "İcra dosyası hangi mahkemenin denetimindedir?", answer: "İstanbul (Çağlayan) Adliyesi bünyesindeki icra mahkemelerinin denetimindedir." },
      { question: "Borçlunun mal kaçırması halinde ne yapılabilir?", answer: "Tasarrufun iptali davası açılarak işlemlerin geçersizliği talep edilebilir." },
    ],
    howToTitle: "Eyüpsultan'da İcra Takibi Hangi Aşamalardan Oluşur?",
    howToSteps: [
      { name: "Alacağın Tespiti", text: "Takibe konu borcun dayanağı belirlenir." },
      { name: "Takibin Başlatılması", text: "İcra dairesine başvuru yapılarak dosya açılır." },
      { name: "İtiraz Süresinin Takibi", text: "Borçlunun itiraz edip etmediği izlenir." },
      { name: "Tahsilat Aşaması", text: "Kesinleşen takipte haciz ve satış yoluyla tahsilat yapılır." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "eyupsultan-idare-avukati",
    name: "Eyüpsultan İdare Avukatı",
    heroTitle: "Eyüpsultan İdare Avukatı",
    heroSubtitle:
      "Belediye ve diğer kamu kurumu işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Eyüpsultan İdare Avukatı",
    metaDescription:
      "Eyüpsultan'da idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan (İstanbul Barosu, Sicil No: 72621), idari işlemlerin iptali ve tam yargı davalarında Eyüpsultan'daki müvekkillerine danışmanlık vermektedir; MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Tam Yargı Davaları", description: "İdarenin işlem/eyleminden doğan zararın tazmini." },
      { title: "Riskli Yapı Kararları", description: "Kentsel dönüşüm kapsamındaki idari işlemlere itiraz." },
      { title: "Belediye İşlemleri", description: "İmar, ruhsat ve ceza kararlarına ilişkin uyuşmazlıklar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Riskli yapı ve yıkım kararlarına karşı hukuki itiraz",
      "İmar/ruhsat işlemlerinin idari yargıda denetlettirilmesi",
      "İdarenin işlem veya eyleminden doğan zararlar için dava açılması",
      "Belediye para cezalarına karşı başvuru yapılması",
      "Yürütmenin durdurulması taleplerinin sunulması",
      "Kamu görevlisi özlük uyuşmazlıklarında danışmanlık",
    ],
    localParagraphs: [
      "Alibeyköy'de yürütülen kentsel dönüşüm projeleri kapsamında tesis edilen riskli yapı tespiti ve yıkım kararlarına karşı idari yargı yoluna sıkça başvurulmaktadır; bu davalar İstanbul idare mahkemelerinde görülür.",
      "Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür; dini ve tarihi alan statüsündeki bölgelere ilişkin idari işlemler de bu kapsamda değerlendirilebilir.",
    ],
    faqs: [
      { question: "Riskli yapı kararı kime tebliğ edilir?", answer: "Kat maliklerine veya yapı sahiplerine resmi olarak bildirilir." },
      { question: "Yıkım kararına karşı dava açılabilir mi?", answer: "Evet, tebliğinden itibaren süresi içinde idare mahkemesinde dava açılabilir." },
      { question: "Dini/tarihi alan statüsü ne anlama gelir?", answer: "Bu statüdeki taşınmazlarda idari işlemler ek inceleme ve onay süreçlerine tabi olabilir." },
      { question: "Belediye cezasına itiraz süresi kaçtır?", answer: "Kanunda öngörülen süre içinde idare mahkemesine başvurulmalıdır." },
      { question: "İdareden tazminat talep etmenin şartı nedir?", answer: "Zararın idarenin işlem veya eyleminden kaynaklanması gerekir." },
    ],
    howToTitle: "Eyüpsultan'da İdari İptal Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Karar İncelemesi", text: "İdari işlemin içeriği ve tebliğ tarihi değerlendirilir." },
      { name: "Süre Takibi", text: "60 günlük dava açma süresi hesaplanır." },
      { name: "Dava Hazırlığı", text: "Gerekçeler dilekçeye işlenir." },
      { name: "Karar Aşaması", text: "İdare mahkemesi incelemesini tamamlayıp karar verir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "eyupsultan-is-hukuku-avukati",
    name: "Eyüpsultan İş Hukuku Avukatı",
    heroTitle: "Eyüpsultan İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul (Çağlayan) Adliyesi bünyesindedir.",
    metaTitle: "Eyüpsultan İş Hukuku Avukatı",
    metaDescription:
      "Eyüpsultan'da kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan (İstanbul Barosu, Sicil No: 72621), iş hukuku kapsamında Eyüpsultan'daki işçi ve işverenlere danışmanlık vermektedir; MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Sanayi Sonrası İstihdam", description: "Alibeyköy'de dönüşen işletmelerdeki iş sözleşmesi uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Fazla mesai, hafta tatili ve yıllık izin alacaklarının tahsili",
      "Mobbing iddialarına ilişkin hukuki süreçler",
      "İş sözleşmesi ve ibraname metinlerinin düzenlenmesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Eyüpsultan'da Alibeyköy ve Rami çevresinde faaliyet gösteren küçük ve orta ölçekli işletmeler önemli bir istihdam alanı oluşturmaktadır. Bu işletmelerdeki iş sözleşmesi uyuşmazlıkları da diğer iş davaları gibi önce zorunlu arabuluculuk sürecinden geçer.",
      "Anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul (Çağlayan) Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Küçük işletmelerde işe iade süreci nasıl işler?", answer: "İşletme büyüklüğü iş güvencesi kapsamını etkileyebilir; 30'dan az çalışanı olan yerlerde koşullar farklılaşabilir." },
      { question: "Kıdem tazminatı hesaplamasında hangi ücret esas alınır?", answer: "Son brüt ücret ve düzenli ödenen ek menfaatler esas alınır." },
      { question: "Eyüpsultan'da iş mahkemesi başvurusu nereye yapılır?", answer: "İstanbul (Çağlayan) Adliyesi'ndeki iş mahkemelerine yapılır." },
      { question: "Bordro imzalatılmadan çalıştırma yasal mı?", answer: "Hayır, işçilik alacaklarının ispatı için düzenli bordro tutulması gerekir." },
      { question: "İşçilik alacaklarında zamanaşımı ne zaman başlar?", answer: "Alacağın muaccel olduğu, genellikle iş sözleşmesinin sona erdiği tarihten itibaren işler." },
    ],
    howToTitle: "Eyüpsultan'da İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Durum Tespiti", text: "Feshin haklı olup olmadığı değerlendirilir." },
      { name: "Arabuluculuk Süreci", text: "Yasal süre içinde arabulucuya başvurulur." },
      { name: "Dava Aşaması", text: "Anlaşılamazsa iş mahkemesine dava açılır." },
      { name: "Karar ve Uygulama", text: "Mahkeme kararı işverence uygulanır veya tazminata hükmedilir." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "ise-iade-davasi"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "eyupsultan-kira-tahliye-avukati",
    name: "Eyüpsultan Kira ve Tahliye Avukatı",
    heroTitle: "Eyüpsultan Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemeleri İstanbul (Çağlayan) Adliyesi'ndedir.",
    metaTitle: "Eyüpsultan Kira ve Tahliye Avukatı",
    metaDescription:
      "Eyüpsultan'da kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan (İstanbul Barosu, Sicil No: 72621), kira hukuku alanında Eyüpsultan'daki kiraya verenlere ve kiracılara danışmanlık vermektedir; MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur.",
    highlightCards: [
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "İşyeri Kiraları", description: "Alibeyköy çevresindeki ticari kira uyuşmazlıkları." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "İşyeri niteliğindeki taşınmazların kira sözleşmeleri",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Eyüpsultan'da konut kiralarının yanı sıra Alibeyköy ve Rami çevresinde işyeri ve depo niteliğindeki taşınmazlara ilişkin kira uyuşmazlıkları da önemli bir yer tutar. Bu uyuşmazlıklarda taşınmazın bulunduğu yer sulh hukuk mahkemesi görevlidir.",
      "Bu davalara İstanbul (Çağlayan) Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır; kentsel dönüşüm kapsamındaki binalarda kira ilişkisinin sona erme koşulları ayrıca değerlendirilebilir.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Eyüpsultan'da tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir." },
      { question: "Kentsel dönüşüm kapsamındaki binada kiracının hakları nedir?", answer: "Kira sözleşmesi, binanın yıkım kararı alınması halinde kanunda öngörülen usule göre sona erebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
    ],
    howToTitle: "Eyüpsultan'da Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "eyupsultan-vergi-avukati",
    name: "Eyüpsultan Vergi Avukatı",
    heroTitle: "Eyüpsultan Vergi Avukatı",
    heroSubtitle:
      "Vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Eyüpsultan Vergi Avukatı",
    metaDescription:
      "Eyüpsultan'da vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan (İstanbul Barosu, Sicil No: 72621), vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Eyüpsultan'daki müvekkillerine danışmanlık vermektedir; MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Mahkeme Süreci", description: "Vergi mahkemesinde dava açılması ve takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Vergi incelemesi sürecinde danışmanlık",
      "Gecikme faizi ve zammına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Eyüpsultan'da mükellefiyeti bulunanların vergisel işlemleri Eyüp Mal Müdürlüğü tarafından yürütülür; bu daireye ait tarhiyat ve ceza kararlarına karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir.",
      "Alibeyköy çevresindeki küçük ve orta ölçekli sanayi/ticaret işletmelerinin faaliyet hacmi, KDV ve kurumlar vergisi kaynaklı uyuşmazlıkların da sık görülmesine yol açmaktadır.",
    ],
    faqs: [
      { question: "Vergi/ceza ihbarnamesine itiraz için süre nedir?", answer: "Tebliğden itibaren 30 gündür." },
      { question: "Vergi uyuşmazlığı hangi yargı merciinde çözülür?", answer: "İstanbul vergi mahkemelerinde çözülür." },
      { question: "Uzlaşma görüşmesi sonuçsuz kalırsa ne olur?", answer: "Mükellef kalan süre içinde dava açma hakkını kullanabilir." },
      { question: "Ödeme emrine dava açma süresi kaçtır?", answer: "Tebliğinden itibaren 15 gündür." },
      { question: "Küçük işletmelerde sık görülen vergi uyuşmazlığı nedir?", answer: "Kayıt dışı işlem iddiaları ve KDV indirimi reddi sıkça gündeme gelmektedir." },
    ],
    howToTitle: "Eyüpsultan'da Vergi İtirazı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Dosya İncelemesi", text: "Tarhiyatın veya cezanın hukuki dayanağı incelenir." },
      { name: "Karar Aşaması", text: "Uzlaşma veya dava seçeneklerinden biri tercih edilir." },
      { name: "Süreli Başvuru", text: "Seçilen yola göre başvuru zamanında yapılır." },
      { name: "Sonuçlandırma", text: "Karar veya uzlaşma belgesiyle işlem tamamlanır." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "eyupsultan-borclar-hukuku-avukati",
    name: "Eyüpsultan Borçlar Hukuku Avukatı",
    heroTitle: "Eyüpsultan Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Sözleşme uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; ticaret ve asliye hukuk mahkemeleri İstanbul (Çağlayan) Adliyesi'ndedir.",
    metaTitle: "Eyüpsultan Borçlar Hukuku Avukatı",
    metaDescription:
      "Eyüpsultan'da sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan (İstanbul Barosu, Sicil No: 72621), borçlar hukuku kapsamında Eyüpsultan'daki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık vermektedir; MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur.",
    highlightCards: [
      { title: "Sözleşme Uyuşmazlıkları", description: "İfa, ihlal ve fesih kaynaklı süreçlerin yürütülmesi." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Tedarik Sözleşmeleri", description: "Alibeyköy çevresindeki işletmeler arası uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sözleşmenin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "İşletmeler arası tedarik sözleşmelerinden doğan uyuşmazlıklar",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Alibeyköy ve Rami çevresindeki küçük ve orta ölçekli işletmeler arasında kurulan tedarik ve hizmet sözleşmelerinden doğan uyuşmazlıklar, Eyüpsultan'da sık karşılaşılan bir dava türüdür; bu uyuşmazlıklara niteliğine göre asliye hukuk veya ticaret mahkemelerinde bakılır.",
      "Bu davalar İstanbul (Çağlayan) Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Tedarikçi malı geç teslim ederse ne talep edilebilir?", answer: "Gecikme nedeniyle tazminat veya sözleşmeden dönme talep edilebilir." },
      { question: "Sipariş iptal edilirse ödenen avans geri alınabilir mi?", answer: "Sözleşme hükümlerine göre değişir, genel kural iadeyi gerektirir." },
      { question: "Ticari defter kayıtları delil olarak kullanılabilir mi?", answer: "Usulüne uygun tutulmuş ticari defterler mahkemede delil teşkil edebilir." },
      { question: "Alacak davası açmadan önce ihtar şart mı?", answer: "Her zaman şart olmasa da temerrüdün ispatı açısından faydalıdır." },
      { question: "Ticari uyuşmazlıkta hangi mahkeme yetkilidir?", answer: "Niteliğine göre asliye ticaret mahkemesi, İstanbul (Çağlayan) Adliyesi bünyesinde yetkilidir." },
    ],
    howToTitle: "Eyüpsultan'da Alacak Davası Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Belge Toplama", text: "Sipariş, irsaliye ve fatura kayıtları derlenir." },
      { name: "Temerrüdün Tespiti", text: "Borçlunun ödeme yapmadığı tarih belirlenir." },
      { name: "Hukuki Başvuru", text: "Arabuluculuk veya doğrudan dava yoluna gidilir." },
      { name: "Tahsilat", text: "Kesinleşen alacak icra yoluyla tahsil edilir." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];
