import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const gaziosmanpasaServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "gaziosmanpasa-avukat",
    name: "Gaziosmanpaşa Avukat",
    heroTitle: "Gaziosmanpaşa Avukat",
    heroSubtitle:
      "Gaziosmanpaşa'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunulmaktadır. Sanayi geçmişi Rami ve Eyüp'ten taşınan küçük atölyelere, günümüzde ise yoğun nüfuslu bir yerleşim dokusuna dayanan ilçede hukuki süreçler kendi adliyesi olan Gaziosmanpaşa Adliyesi bünyesinde yürütülmektedir; hizmeti veren avukat Furkan Arıkan İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır.",
    metaTitle: "Gaziosmanpaşa Avukat",
    metaDescription:
      "Gaziosmanpaşa'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Cumhuriyet döneminde Taşlıtarla adıyla anılan, 1963'te ilçe statüsü kazanan ve bugün küçük esnaf ile fason üretime dayalı bir ekonomik yapıya sahip olan Gaziosmanpaşa'da ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında danışmanlık ve temsil sağlanmaktadır. Görüşme talepleri WhatsApp hattı veya telefon numarası üzerinden iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma süreçlerinde müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka uyuşmazlıklarında temsil." },
      { title: "Gayrimenkul Hukuku", description: "Kentsel dönüşüm ve tapu uyuşmazlıklarının takibi." },
      { title: "İş Hukuku", description: "İşçilik alacakları ve işe iade süreçlerinde destek." },
      { title: "İcra Hukuku", description: "Alacak takibi ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "İdari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Esnaf ve KOBİ vergi uyuşmazlıklarının çözümü." },
      { title: "Borçlar Hukuku", description: "Sözleşme ve alacak kaynaklı dava süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Kentsel dönüşüm ve riskli yapı süreçlerine ilişkin gayrimenkul hukuku desteği",
      "İşe iade ve işçilik alacaklarında iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "12 km²'lik yüzölçümüne karşılık yaklaşık 480 bin kişilik nüfusuyla Gaziosmanpaşa, kilometrekareye düşen kişi sayısı bakımından İstanbul'un en yoğun ilçeleri arasında yer alır; 1963'te Taşlıtarla adı değiştirilerek ilçe statüsü verilmiş, 2008'de Arnavutköy ve Sultangazi'nin ayrılmasıyla bugünkü sınırlarına kavuşmuştur.",
      "İlçedeki hukuki süreçler, Merkez Mahallesi'ndeki Gaziosmanpaşa Adliyesi'nde görülmektedir; 1 Eylül 2025 itibarıyla bu adliyenin yargı çevresi Gaziosmanpaşa'nın yanı sıra Arnavutköy, Eyüpsultan ve Sultangazi'yi de kapsayacak şekilde genişletilmiştir. Vergisel işlemler ise ilçe sınırları içindeki Gaziosmanpaşa Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Gaziosmanpaşa'daki davalara hangi adliye bakıyor?", answer: "İlçenin kendi adliyesi olan Gaziosmanpaşa Adliyesi bakmaktadır; bu adliyenin yargı çevresi Gaziosmanpaşa, Arnavutköy, Eyüpsultan ve Sultangazi'yi kapsamaktadır." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefon yoluyla iletişime geçilerek uygun bir görüşme günü planlanır." },
      { question: "Hangi hukuk alanlarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında danışmanlık ve temsil sağlanmaktadır." },
      { question: "Büro Gaziosmanpaşa'da mı yer alıyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Gaziosmanpaşa'daki müvekkillere de aynı kapsamda hizmet verilmektedir." },
      { question: "Danışmanlık ücreti nasıl belirleniyor?", answer: "Dosyanın kapsamına göre değişiklik gösterir, bilgi randevu sırasında paylaşılır." },
      { question: "Kentsel dönüşüm sürecinde hukuki destek alınabilir mi?", answer: "Evet, riskli yapı tespiti, kat karşılığı sözleşmeler ve tahliye süreçlerinde danışmanlık sağlanır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Talebe göre yüz yüze veya çevrim içi olarak düzenlenebilir." },
      { question: "Gözaltı durumunda ne yapılmalı?", answer: "Telefon veya WhatsApp üzerinden vakit kaybetmeden iletişime geçilmesi yeterlidir." },
      { question: "Dosya sürecine ilişkin bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille düzenli olarak paylaşılır." },
      { question: "Gaziosmanpaşa Adliyesi'ne ulaşım nasıl sağlanır?", answer: "M7 metro hattı ve İETT otobüs seferleriyle ulaşım sağlanabilir." },
    ],
    howToTitle: "Gaziosmanpaşa'da Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Gaziosmanpaşa Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "gaziosmanpasa-bosanma-avukati",
    name: "Gaziosmanpaşa Boşanma Avukatı",
    heroTitle: "Gaziosmanpaşa Boşanma Avukatı",
    heroSubtitle:
      "Aile mahkemesi Gaziosmanpaşa Adliyesi bünyesinde yer aldığından, anlaşmalı ve çekişmeli boşanma davaları, velayet ve nafaka talepleri ilçe sınırları içinde yürütülebilmektedir; süreçte mal rejimi tasfiyesinden çocuğun üstün yararına uygun düzenlemelere kadar temsil sağlanır.",
    metaTitle: "Gaziosmanpaşa Boşanma Avukatı",
    metaDescription:
      "Gaziosmanpaşa'da anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Aile hukuku alanında Gaziosmanpaşa'daki müvekkillere boşanma, velayet ve nafaka konularında temsil sağlanmaktadır. Konut yoğunluğunun yüksek olduğu ilçede mal rejimi tasfiyeleri çoğunlukla apartman dairesi niteliğindeki taşınmazlar üzerinden yürütülür. Furkan Arıkan, 2019 MEF Üniversitesi Hukuk Fakültesi mezunu olup İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Mal Rejimi Tasfiyesi", description: "Konut ve diğer taşınırların paylaşımı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolünün hazırlanması ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve velayet değişikliği talepleri",
      "Nafaka artırımı, azaltılması ve kaldırılması davaları",
      "Konut ve diğer aile malvarlığına ilişkin mal rejimi tasfiyesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Nüfus yoğunluğunun yüksek olduğu Gaziosmanpaşa'da aileler çoğunlukla apartman dairelerinde ikamet etmektedir; bu nedenle boşanma sürecindeki mal rejimi tasfiyelerinde taşınmazın niteliği ve varsa üzerindeki ipotek/kredi yükü değerlendirmenin merkezinde yer alır.",
      "Boşanma, velayet ve nafaka talepleri Gaziosmanpaşa Adliyesi'ndeki aile mahkemesinde görülür. Anlaşmalı süreçte protokolün eksiksizliği, çekişmeli süreçte ise delillerin yeterliliği sonucu belirleyen unsurlardır.",
    ],
    faqs: [
      { question: "Boşanma davası hangi adliyede görülür?", answer: "Gaziosmanpaşa Adliyesi'ndeki aile mahkemesinde görülür." },
      { question: "Velayet kararında çocuğun görüşü dikkate alınır mı?", answer: "Yeterli olgunluğa ulaşmışsa görüşü değerlendirmeye katılabilir." },
      { question: "Nafaka miktarı hangi kriterlere göre belirlenir?", answer: "Tarafların gelir düzeyi ve ihtiyaçları birlikte değerlendirilerek belirlenir." },
      { question: "Kredili bir konut mal paylaşımını nasıl etkiler?", answer: "Konut üzerindeki kredi/ipotek yükü, değerleme ve paylaşım hesabında dikkate alınır." },
      { question: "Dava açıldıktan sonra taraflar barışabilir mi?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir." },
    ],
    howToTitle: "Gaziosmanpaşa'da Boşanma Süreci Nasıl İlerler?",
    howToSteps: [
      { name: "İhtiyaç Analizi", text: "Velayet, nafaka ve mal rejimi talepleri belirlenir." },
      { name: "Dilekçe Hazırlığı", text: "Duruma uygun dava dilekçesi veya protokol hazırlanır." },
      { name: "Dava Açılışı", text: "Yetkili aile mahkemesine başvuru yapılır." },
      { name: "Sonuç", text: "Duruşma sonrasında karar açıklanır." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "ziynet-esyasi-davasi", "bosanmada-nafaka-turleri"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "gaziosmanpasa-ceza-avukati",
    name: "Gaziosmanpaşa Ceza Avukatı",
    heroTitle: "Gaziosmanpaşa Ceza Avukatı",
    heroSubtitle:
      "Soruşturma aşamasındaki ifade ve gözaltı süreçlerinden kovuşturma aşamasındaki duruşmalara kadar müdafilik hizmeti sağlanır. Yeni Adalet Sarayı'nda ağır ceza mahkemeleri de bulunduğundan, ilçedeki ceza yargılamalarının büyük bölümü Gaziosmanpaşa Adliyesi bünyesinde yürütülebilmektedir.",
    metaTitle: "Gaziosmanpaşa Ceza Avukatı",
    metaDescription:
      "Gaziosmanpaşa'da soruşturma, kovuşturma, tutukluluğa itiraz ve ticari ilişkilerden doğan ceza uyuşmazlıklarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında Gaziosmanpaşa'daki müvekkillere müdafilik hizmeti sağlanmaktadır; hizmeti sunan Furkan Arıkan İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Küçük esnaf ve fason üretimin ağırlıkta olduğu ilçe ekonomisinde, ticari ilişkilerden kaynaklanan bazı uyuşmazlıklar ceza yargılamasına da konu olabilmektedir.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Ticari İlişkili Suçlar", description: "Çek, senet ve dolandırıcılık iddialarına ilişkin savunma." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının incelenmesi ve itiraz dilekçelerinin hazırlanması",
      "Tutukluluk kararlarına karşı itiraz süreçlerinin yürütülmesi",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Çek, senet ve ticari ilişkilerden doğan dolandırıcılık/güveni kötüye kullanma iddialarında savunma",
      "Uzlaşma sürecinin yürütülmesi",
    ],
    localParagraphs: [
      "Küçük esnaf ve fason üretime dayalı yoğun bir ticari doku barındıran Gaziosmanpaşa'da, çek-senet ilişkilerinden ve ticari uyuşmazlıklardan kaynaklanan ceza şikayetleri diğer suç tiplerinin yanında sık karşılaşılan bir gündem maddesidir.",
      "Genel ceza davalarının yanı sıra ağır ceza mahkemeleri de Gaziosmanpaşa Adliyesi bünyesinde bulunduğundan, ilçedeki yargılamaların büyük kısmı başka bir adliyeye gerek kalmadan burada sonuçlandırılabilmektedir.",
    ],
    faqs: [
      { question: "Gaziosmanpaşa'da bir ceza davası hangi adliyede görülür?", answer: "Ağır ceza mahkemeleri dahil olmak üzere ceza davaları Gaziosmanpaşa Adliyesi'nde görülür." },
      { question: "Müdafi olmadan ifade verilebilir mi?", answer: "Verilebilir ancak müdafi eşliğinde ifade vermek önerilir." },
      { question: "Çek veya senetten kaynaklanan bir uyuşmazlıkta ceza şikayeti mümkün mü?", answer: "Somut olayın niteliğine göre karşılıksız çek veya dolandırıcılık gibi suç tipleri gündeme gelebilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, sulh ceza hakimliğine itiraz yoluna gidilebilir." },
      { question: "Uzlaşma sağlanamazsa süreç nasıl devam eder?", answer: "Yargılamaya kaldığı aşamadan devam edilir." },
    ],
    howToTitle: "Gaziosmanpaşa'da Ceza Yargılaması Nasıl İşler?",
    howToSteps: [
      { name: "Olay Bildirimi", text: "Şikayet, ihbar veya resen soruşturma başlar." },
      { name: "Soruşturma Aşaması", text: "Deliller toplanır, ifadeler alınır." },
      { name: "Dava Açılması", text: "İddianamenin kabulüyle kovuşturma başlar." },
      { name: "Temyiz/İstinaf", text: "Karara karşı üst yargı yoluna başvurulabilir." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "gaziosmanpasa-gayrimenkul-avukati",
    name: "Gaziosmanpaşa Gayrimenkul Avukatı",
    heroTitle: "Gaziosmanpaşa Gayrimenkul Avukatı",
    heroSubtitle:
      "Eski gecekondu dokusunun kentsel dönüşümle planlı yapılaşmaya dönüştüğü Gaziosmanpaşa'da, riskli yapı tespiti, kat karşılığı inşaat sözleşmeleri ve tapu uyuşmazlıklarında hukuki destek sağlanır; davalar Gaziosmanpaşa Adliyesi'nde görülür.",
    metaTitle: "Gaziosmanpaşa Gayrimenkul Avukatı",
    metaDescription:
      "Gaziosmanpaşa'da kentsel dönüşüm, kat karşılığı inşaat sözleşmesi, tapu iptali ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Kentsel dönüşüm süreçleri, kat karşılığı inşaat sözleşmeleri ve tapu davalarında Gaziosmanpaşa'daki müvekkillere danışmanlık verilmektedir. Furkan Arıkan İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukat olup 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Kentsel Dönüşüm", description: "6306 sayılı Kanun kapsamında riskli yapı süreçleri." },
      { title: "Kat Karşılığı Sözleşmeler", description: "Müteahhit ile hak sahibi arasındaki uyuşmazlıklar." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Ortaklığın Giderilmesi", description: "Hisseli taşınmazların paylaştırılması." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Riskli yapı tespitine ve kentsel dönüşüm sürecine ilişkin danışmanlık",
      "Kat karşılığı inşaat sözleşmelerinin hazırlanması ve incelenmesi",
      "Müteahhidin edimini yerine getirmemesi halinde açılacak davalar",
      "Tapu iptali ve tescil davalarının açılması",
      "Hisseli taşınmazlarda ortaklığın giderilmesi (izale-i şüyu) davaları",
      "Kira bedeli tespiti ve uyarlama davaları",
    ],
    localParagraphs: [
      "Geçmişte büyük ölçüde gecekondu yerleşimine sahne olan Gaziosmanpaşa, son yıllarda kentsel dönüşüm kapsamında yoğun bir yeniden yapılanma sürecinden geçmektedir; bu süreçte kat karşılığı inşaat sözleşmelerinin ve hak sahipliği paylarının doğru kurgulanması uyuşmazlıkları önlemek bakımından önem taşır.",
      "Gayrimenkul uyuşmazlıkları, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Gaziosmanpaşa Adliyesi bünyesinde görülmektedir.",
    ],
    faqs: [
      { question: "Riskli yapı tespitine itiraz edilebilir mi?", answer: "Evet, teknik rapora karşı süresi içinde itiraz yoluna gidilebilir." },
      { question: "Kat karşılığı sözleşmede müteahhit işi bırakırsa ne olur?", answer: "Sözleşmenin feshi, tazminat veya ifa davası gibi hukuki yollara başvurulabilir." },
      { question: "Gaziosmanpaşa'da gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Gaziosmanpaşa Adliyesi bünyesinde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tarafından açılabilir." },
      { question: "Hisseli bir taşınmaz nasıl paylaştırılır?", answer: "Taraflar anlaşamazsa ortaklığın giderilmesi davası yoluyla satış veya aynen taksim yapılabilir." },
    ],
    howToTitle: "Gaziosmanpaşa'da Kentsel Dönüşüm Uyuşmazlığı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Belge İncelemesi", text: "Tapu kaydı ve riskli yapı raporu incelenir." },
      { name: "Uyuşmazlığın Netleştirilmesi", text: "Talep ve dayanak deliller belirlenir." },
      { name: "Dava/İtiraz Süreci", text: "Yetkili merci veya mahkemeye başvurulur." },
      { name: "Sonuçlanma", text: "Karar veya bilirkişi raporu doğrultusunda süreç tamamlanır." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "gaziosmanpasa-icra-avukati",
    name: "Gaziosmanpaşa İcra Avukatı",
    heroTitle: "Gaziosmanpaşa İcra Avukatı",
    heroSubtitle:
      "Küçük esnaf ve fason üretim ilişkilerinin yoğun olduğu Gaziosmanpaşa'da, çek-senet kaynaklı alacakların tahsili amacıyla icra takibi başlatılması, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır.",
    metaTitle: "Gaziosmanpaşa İcra Avukatı",
    metaDescription:
      "Gaziosmanpaşa'da icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İcra ve iflas hukuku kapsamında Gaziosmanpaşa'daki esnaf, işletme sahibi ve bireysel alacaklı/borçlu taraflara danışmanlık sağlanmaktadır; hizmeti veren Furkan Arıkan 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul ve gayrimenkul üzerinde haciz uygulanması." },
      { title: "Esnaf Alacakları", description: "Çek ve senede dayalı ticari alacakların takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınır ve taşınmaz mal üzerinde haciz uygulanması",
      "Çek ve senede dayalı esnaf/ticari alacaklarının takibi",
      "Mali sıkıntı yaşayan borçlular için yeniden yapılandırma danışmanlığı",
    ],
    localParagraphs: [
      "Ekonomisinin önemli bir bölümü küçük esnaf ve fason üretime dayanan Gaziosmanpaşa'da, mal/hizmet teslimi karşılığında düzenlenen çek ve senetlerin tahsil edilememesi icra takiplerinin sık görülen nedenlerinden biridir.",
      "İcra takiplerine ilişkin uyuşmazlıklar Gaziosmanpaşa Adliyesi'ndeki icra daireleri ve icra hukuk mahkemesi nezdinde yürütülür; borçlunun ilçede yerleşik olduğu takiplerde yetkili icra dairesi kural olarak ikametgah esasına göre belirlenir.",
    ],
    faqs: [
      { question: "İcra takibi hangi belgelerle başlatılabilir?", answer: "Sözleşme, çek, senet, fatura veya mahkeme ilamı gibi belgelerle başlatılabilir." },
      { question: "Ödeme emrine itiraz süresi ne kadardır?", answer: "Tebliğ tarihinden itibaren 7 gündür." },
      { question: "Karşılıksız çek nedeniyle hangi yollara başvurulabilir?", answer: "Hem icra takibi hem de kanunda öngörülen şartlarla ceza şikayeti yoluna gidilebilir." },
      { question: "Haciz hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Haciz ve gerektiğinde satış yoluyla tahsilat işlemlerine devam edilir." },
    ],
    howToTitle: "Gaziosmanpaşa'da İcra Takibi Hangi Aşamalardan Oluşur?",
    howToSteps: [
      { name: "Belge Derlemesi", text: "Alacağa dayanak oluşturan belgeler bir araya getirilir." },
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
    urlSlug: "gaziosmanpasa-idare-avukati",
    name: "Gaziosmanpaşa İdare Avukatı",
    heroTitle: "Gaziosmanpaşa İdare Avukatı",
    heroSubtitle:
      "Belediye ruhsat işlemleri, riskli yapı/kentsel dönüşüm kararları ve idari para cezalarına karşı iptal ve tam yargı davalarında temsil sağlanır; bu davalara İstanbul idare mahkemelerinde bakılır.",
    metaTitle: "Gaziosmanpaşa İdare Avukatı",
    metaDescription:
      "Gaziosmanpaşa'da idari işlemlerin iptali, kentsel dönüşüm kararlarına itiraz ve tazminat davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "İdari işlemlerin iptali ve tam yargı davalarında Gaziosmanpaşa'daki müvekkillere danışmanlık sağlanmaktadır. Furkan Arıkan, MEF Üniversitesi Hukuk Fakültesi'nin 2019 mezunu olup İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Kentsel Dönüşüm İşlemleri", description: "Riskli yapı tespiti ve yıkım kararlarına itiraz." },
      { title: "Ruhsat Uyuşmazlıkları", description: "Belediye ruhsat ret/iptal kararlarına karşı dava." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Riskli yapı tespiti ve kentsel dönüşüm işlemlerine karşı idari dava süreçleri",
      "Belediye ruhsat işlemlerine itiraz edilmesi",
      "İmar planı ve uygulama işlemlerine karşı iptal davası açılması",
      "İdarenin işlem veya eyleminden kaynaklanan zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Kentsel dönüşümün yoğun biçimde yaşandığı Gaziosmanpaşa'da, riskli yapı tespitine ve buna bağlı yıkım kararlarına karşı açılan idari davalar diğer ilçelere kıyasla daha sık gündeme gelmektedir.",
      "Bu davalar Gaziosmanpaşa'nın bağlı bulunduğu adliye teşkilatından bağımsız olarak İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğ veya ilan tarihinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "Riskli yapı kararına karşı hangi sürede dava açılmalı?", answer: "Tebliğ veya öğrenme tarihinden itibaren 60 gün içinde idare mahkemesinde dava açılabilir." },
      { question: "Ruhsat başvurusunun reddine itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde iptal davası açılabilir." },
      { question: "İdari para cezasına itiraz nereye yapılır?", answer: "Yasal süresi içinde idare mahkemesine başvurularak itiraz edilebilir." },
      { question: "İdarenin bir işleminden zarar görenler ne yapabilir?", answer: "Tam yargı davası yoluyla uğranılan zararın tazmini talep edilebilir." },
      { question: "İmar planına itiraz süreci nasıl işler?", answer: "Önce idari başvuru yapılır, sonuçsuz kalırsa idare mahkemesinde dava yoluna gidilebilir." },
    ],
    howToTitle: "Gaziosmanpaşa'da İdari İptal Davası Nasıl Açılır?",
    howToSteps: [
      { name: "İnceleme", text: "İptali istenen işlem ve tebliğ/ilan tarihi belirlenir." },
      { name: "Süre Takibi", text: "60 günlük yasal süre hesaplanır." },
      { name: "Dilekçe Hazırlığı", text: "Talep ve gerekçeler dilekçeye işlenir." },
      { name: "Yargılama", text: "İdare mahkemesi dosyayı inceleyerek karar verir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: ["idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "gaziosmanpasa-is-hukuku-avukati",
    name: "Gaziosmanpaşa İş Hukuku Avukatı",
    heroTitle: "Gaziosmanpaşa İş Hukuku Avukatı",
    heroSubtitle:
      "Küçük ölçekli atölye ve imalathanelerin yoğun olduğu Gaziosmanpaşa'da, kıdem-ihbar tazminatı, işe iade ve fazla mesai gibi işçilik alacaklarına ilişkin süreçlerde temsil sağlanır.",
    metaTitle: "Gaziosmanpaşa İş Hukuku Avukatı",
    metaDescription:
      "Gaziosmanpaşa'da kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İş hukuku kapsamında Gaziosmanpaşa'daki çalışanlara ve küçük ölçekli işletme sahiplerine danışmanlık verilmektedir; danışmanlığı yürüten Furkan Arıkan İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Atölye/İmalathane Çalışanları", description: "Kayıt dışı çalışmaya bağlı ispat sorunlarının aşılması." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Kayıt dışı veya eksik bildirimli çalışmaya bağlı işçilik alacaklarının ispatı ve tahsili",
      "Fazla mesai, hafta tatili ve yıllık izin ücreti alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Küçük esnaf, imalathane ve fason üretim atölyelerinin yoğun olduğu Gaziosmanpaşa'da, kayıt dışı veya eksik bildirimli çalışmadan kaynaklanan işçilik alacağı uyuşmazlıkları öne çıkan konular arasındadır.",
      "Dava öncesinde işe iade ve işçilik alacaklarına ilişkin taleplerde arabuluculuğa başvurulması yasal bir zorunluluktur; arabuluculukta anlaşma sağlanamazsa süreç dava yoluyla devam eder. Yargı çevresi düzenlemelerindeki güncellemeler nedeniyle başvuru öncesinde yetkili iş mahkemesinin teyit edilmesi önerilir.",
    ],
    faqs: [
      { question: "Kayıt dışı çalışan bir işçi kıdem tazminatı talep edebilir mi?", answer: "Çalışmanın tanık beyanı, ödeme kayıtları gibi delillerle ispatlanması halinde talep edilebilir." },
      { question: "İşe iade talebi öncesi hangi adım zorunludur?", answer: "Dava açılmadan önce arabuluculuğa başvurulması zorunludur." },
      { question: "Gaziosmanpaşa'da iş mahkemesi süreci hangi adliyede yürütülür?", answer: "Yargı çevresi düzenlemeleri zaman zaman güncellenebildiğinden, başvuru öncesinde dosyanın açılacağı adliye ayrıca teyit edilir." },
      { question: "Fazla mesai alacağı nasıl ispatlanır?", answer: "Puantaj kayıtları, bordro ve tanık beyanıyla ispat edilebilir." },
      { question: "İş kazası sonrası hangi tazminatlar talep edilebilir?", answer: "Koşullara göre maddi ve manevi tazminat birlikte talep edilebilir." },
    ],
    howToTitle: "Gaziosmanpaşa'da İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Fesih Değerlendirmesi", text: "İşten çıkarma gerekçesi ve usulü incelenir." },
      { name: "Arabulucuya Başvuru", text: "Yasal süre içinde arabuluculuk sürecine başlanır." },
      { name: "Dava Süreci", text: "Anlaşma sağlanamazsa iş mahkemesinde dava açılır." },
      { name: "Sonuç", text: "Mahkeme kararı doğrultusunda işlem yapılır." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "ise-iade-davasi", "giydirilmis-ucret-kavrami"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "gaziosmanpasa-kira-tahliye-avukati",
    name: "Gaziosmanpaşa Kira ve Tahliye Avukatı",
    heroTitle: "Gaziosmanpaşa Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Yüksek nüfus yoğunluğu nedeniyle kiracı oranının da yüksek olduğu Gaziosmanpaşa'da, konut tahliyesi, riskli yapı nedeniyle boşaltma ve kira bedeli tespiti süreçlerinde destek sağlanır.",
    metaTitle: "Gaziosmanpaşa Kira ve Tahliye Avukatı",
    metaDescription:
      "Gaziosmanpaşa'da kiracı tahliyesi, riskli yapı nedeniyle boşaltma ve kira bedeli tespiti süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kira hukuku alanında Gaziosmanpaşa'daki kiraya verenlere ve kiracılara danışmanlık verilmektedir. 2019 MEF Üniversitesi Hukuk Fakültesi mezunu olan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır.",
    highlightCards: [
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Riskli Yapı Tahliyesi", description: "Kentsel dönüşüm kapsamında boşaltma süreçlerine destek." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Riskli yapı tespiti sonrası kiracının boşaltılmasına ilişkin süreçler",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "12 km²'lik alanda yaklaşık 480 bin kişinin yaşadığı Gaziosmanpaşa'da konutların önemli bir bölümü kiracılar tarafından kullanılmaktadır; bu yoğunluk kira bedeli ve tahliye uyuşmazlıklarının sıklıkla gündeme gelmesine yol açmaktadır.",
      "Kentsel dönüşüm kapsamında riskli yapı tespiti yapılan binalarda kiracının belirli bir süre içinde taşınmazı boşaltması gerekebilir; bu süreçte kiracı ile kiraya veren arasındaki hak ve yükümlülüklerin netleştirilmesi uyuşmazlıkları azaltır. Tahliye davalarına Gaziosmanpaşa Adliyesi bünyesindeki sulh hukuk mahkemesinde bakılır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Riskli yapı tespiti yapılan binada kiracı ne yapmalı?", answer: "Kanunda öngörülen süre içinde taşınmazı boşaltması gerekir; bu süreçte kiraya verenle olan hak ve yükümlülükler ayrıca değerlendirilir." },
      { question: "Gaziosmanpaşa'da tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir yılı aşkın bir süreye kadar sürebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Taahhütnameyle tahliye için mahkemeye gitmek gerekir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
    ],
    howToTitle: "Gaziosmanpaşa'da Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "gaziosmanpasa-vergi-avukati",
    name: "Gaziosmanpaşa Vergi Avukatı",
    heroTitle: "Gaziosmanpaşa Vergi Avukatı",
    heroSubtitle:
      "Küçük esnaf ve KOBİ ağırlıklı ekonomik yapısıyla öne çıkan Gaziosmanpaşa'da, vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Gaziosmanpaşa Vergi Avukatı",
    metaDescription:
      "Gaziosmanpaşa'da vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Gaziosmanpaşa'daki esnaf ve mükelleflere danışmanlık verilmektedir. Furkan Arıkan İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Esnaf/KOBİ Denetimleri", description: "Küçük işletmelere yönelik vergi incelemesi süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Küçük esnaf ve KOBİ'lere yönelik vergi incelemesi sürecinde danışmanlık",
      "Gerçek usulden basit usule veya tam tersi yöndeki uyuşmazlıklarda destek",
    ],
    localParagraphs: [
      "Ekonomik faaliyetin büyük kısmının küçük esnaf ve fason üretim işletmelerince yürütüldüğü Gaziosmanpaşa'da, bu işletmelere yönelik vergi incelemeleri ve re'sen/ikmalen tarhiyatlar sık karşılaşılan uyuşmazlık konuları arasındadır.",
      "Mükelleflerin vergisel işlemleri, ilçe sınırları içindeki Merkez Mahallesi'nde bulunan Gaziosmanpaşa Vergi Dairesi Müdürlüğü nezdinde yürütülür. İhbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "Gaziosmanpaşa Vergi Dairesi nerede bulunuyor?", answer: "İlçenin Merkez Mahallesi'nde yer almaktadır." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Uzlaşma başvurusu dava açma hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Basit usulden gerçek usule geçiş nasıl bir vergisel etki doğurur?", answer: "Mükellefiyet türü değiştiğinden beyan ve belge düzeni farklılaşır; bu konuda önceden danışmanlık alınması önerilir." },
    ],
    howToTitle: "Gaziosmanpaşa'da Vergi İtirazı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "İnceleme", text: "Tarhiyat veya cezanın dayanağı ayrıntılı olarak incelenir." },
      { name: "Yol Seçimi", text: "Uzlaşma mı yoksa doğrudan dava mı açılacağı kararlaştırılır." },
      { name: "Başvuru", text: "Süresi içinde vergi mahkemesine başvurulur veya uzlaşma istenir." },
      { name: "Sonuçlanma", text: "Mahkeme kararı veya uzlaşma tutanağıyla süreç sona erer." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: ["vergi-ihbarnamesine-itiraz-ve-uzlasma"],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "gaziosmanpasa-borclar-hukuku-avukati",
    name: "Gaziosmanpaşa Borçlar Hukuku Avukatı",
    heroTitle: "Gaziosmanpaşa Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Fason üretim ve kat karşılığı inşaat ilişkilerinden doğan sözleşme uyuşmazlıklarında, alacak taleplerinde ve tazminat davalarında temsil sağlanır; asliye hukuk mahkemesi Gaziosmanpaşa Adliyesi bünyesindedir.",
    metaTitle: "Gaziosmanpaşa Borçlar Hukuku Avukatı",
    metaDescription:
      "Gaziosmanpaşa'da fason üretim ve inşaat sözleşmesi uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Borçlar hukuku kapsamında Gaziosmanpaşa'daki müvekkillere sözleşme ve alacak uyuşmazlıklarında danışmanlık verilmektedir; Furkan Arıkan 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş olup İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır.",
    highlightCards: [
      { title: "Fason Üretim Sözleşmeleri", description: "İmalat ve tedarik ilişkilerinden doğan uyuşmazlıklar." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Kat Karşılığı Sözleşmeler", description: "İnşaat sözleşmesi uyuşmazlıklarının çözümü." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fason üretim ve tedarik sözleşmelerinden doğan uyuşmazlıkların çözümü",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Kat karşılığı inşaat sözleşmelerinden doğan uyuşmazlıklar",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Küçük esnaf ve fason üretime dayalı ticari ilişkilerin yoğun olduğu Gaziosmanpaşa'da, imalat/tedarik sözleşmelerinin kapsamının net biçimde belirlenmemesi uygulamada sıkça karşılaşılan uyuşmazlıkların başlıca nedenidir.",
      "Bu davalar Gaziosmanpaşa Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru dava şartı olarak aranabilir.",
    ],
    faqs: [
      { question: "Fason üretim işini yarım bırakan taraf için ne yapılabilir?", answer: "Sözleşmeden dönme, tazminat veya ifa davası gibi hukuki yollara başvurulabilir." },
      { question: "Kat karşılığı sözleşmede müteahhit temerrüde düşerse ne olur?", answer: "Sözleşme şartlarına göre fesih, tazminat veya ifa talebiyle dava açılabilir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, Gaziosmanpaşa Adliyesi bünyesinde görülür." },
      { question: "Dava öncesi arabuluculuk her zaman zorunlu mudur?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
      { question: "Zamanaşımına uğramış bir alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir." },
    ],
    howToTitle: "Gaziosmanpaşa'da Alacak Davası Süreci Nasıl İşler?",
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
