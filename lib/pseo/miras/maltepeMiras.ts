import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const maltepeMiras: PseoService = {
  slug: "miras",
  urlSlug: "maltepe-miras-avukati",
  name: "Maltepe Miras Avukatı",
  heroTitle: "Maltepe Miras Avukatı",
  heroSubtitle:
    "Maltepe'de veraset ilamı, saklı pay ve tenkis, mirasın reddi, vasiyetname ve ortaklığın giderilmesi konularında danışmanlık ve dava takibi sağlanır; ilçenin kendi adliyesi bulunmadığından miras uyuşmazlıkları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
  metaTitle: "Maltepe Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Maltepe'de veraset ilamı, saklı pay, tenkis, mirasın reddi ve ortaklığın giderilmesi konularında miras hukuku danışmanlığı ve dava takibi sunulmaktadır.",
  aboutParagraph:
    "Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır. Maltepe'de bir yakınını kaybeden ailelere; mirasçıların belirlenmesi, tereke içindeki taşınmaz ve hesapların tespiti, paylaşım ve mahkeme süreçlerinde danışmanlık verir. Büro Beşiktaş/Sinanpaşa'dadır; Maltepe'deki müvekkillerle görüşmeler çevrim içi ya da yüz yüze planlanabilir.",
  highlightCards: [
    { title: "Veraset ve Mirasçılık", description: "Yasal mirasçıların ve paylarının sulh hukuk veya noter yoluyla belirlenmesi." },
    { title: "Saklı Pay ve Tenkis", description: "Vasiyet ya da sağlararası bağışla zedelenen saklı payın tenkis davasıyla korunması." },
    { title: "Kentsel Dönüşüm Mirası", description: "Gülsuyu-Gülensu gibi dönüşüm alanlarında tapudaki hisselerin mirasçılar arasında düzenlenmesi." },
    { title: "Paylaşım ve Ortaklığın Giderilmesi", description: "Sahil mahallelerindeki daire ve arsa paylarının anlaşma ya da satış yoluyla çözülmesi." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Veraset ilamı başvurusu ve mirasçılık belgesinin düzenlenmesi",
    "Saklı payın hesaplanması ve tenkis davası takibi",
    "Mirasın reddi beyanı ve borca batık tereke değerlendirmesi",
    "Vasiyetname düzenleme danışmanlığı ve iptal davaları",
    "Muris muvazaası kaynaklı tapu iptali ve tescil davaları",
    "Miras taksim sözleşmesi hazırlığı ve ortaklığın giderilmesi davaları",
  ],
  localParagraphs: [
    "Maltepe'de miras dosyalarının önemli bölümü taşınmaz payları etrafında şekillenir. Gülsuyu ve Gülensu'da 2017'de başlayan kentsel dönüşüm sürecinde tapu hissesi miras kalan ailelerde, mirasçıların kat karşılığı sözleşmesindeki konumu ve dönüşümden doğacak bağımsız bölümlerin paylaşımı ayrıca incelenmesi gereken bir konudur. İdealtepe, Altıntepe ve Küçükyalı gibi sahile yakın mahallelerde ise ana babadan intikal eden daire, arsa payı ve aile mülkü sıkça paylaşım gündemine gelir.",
    "Maltepe'nin kendi adliyesi bulunmadığından veraset, tenkis, tapu iptali ve ortaklığın giderilmesi davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür; veraset ilamı gibi çekişmesiz işler sulh hukuk, tenkis ve muris muvazaası davaları ise asliye hukuk mahkemesinde yürütülür. İntikal sonrası tapu işlemleri ile veraset ve intikal vergisi yükümlülüğü, Küçükyalı Vergi Dairesi Müdürlüğü üzerinden de takip edilmesi gereken ayrı bir aşamadır.",
  ],
  faqs: [
    { question: "Maltepe'de miras davalarına hangi adliye bakar?", answer: "Maltepe'nin kendi adliyesi yoktur; sulh ve asliye hukuk mahkemelerinde görülen miras davaları Kartal'daki İstanbul Anadolu Adliyesi'nde yürütülür." },
    { question: "Gülsuyu-Gülensu'da dönüşüme giren dairede mirasçıların hakkı nasıl belirlenir?", answer: "Veraset ilamına göre tapudaki payın mirasçılar arasında nasıl bölüşüldüğü ve kat karşılığı sözleşmedeki hak sahipliği birlikte incelenir." },
    { question: "Mirasçılardan biri satışa yanaşmazsa ne yapılabilir?", answer: "Paydaşlar anlaşamazsa sulh hukuk mahkemesinde ortaklığın giderilmesi davası açılarak taşınmazın satışı veya paylaştırılması istenebilir." },
    { question: "Borcu olan bir mirası reddetmek için süre var mıdır?", answer: "Mirasın reddi için kanunda 3 aylık süre öngörülmüştür; süre, mirasçının miras bırakanın ölümünü öğrendiği andan itibaren hesaplanır ve süre içinde ret beyanı yapılmazsa ret hakkı düşer." },
    { question: "Maltepe'deki bir miras için büronun ilçede ofisi var mı?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Maltepe'deki mirasçılarla görüşmeler çevrim içi veya yüz yüze yapılabilir." },
  ],
  howToTitle: "Maltepe'de Miras Dosyası Nasıl Başlatılır?",
  howToSteps: [
    { name: "Tereke Envanteri", text: "Tapu kayıtları, banka hesapları ve araçlar listelenir." },
    { name: "Mirasçılık Belgesi", text: "Nüfus kayıtlarıyla veraset ilamı alınır." },
    { name: "Seçenek Değerlendirmesi", text: "Kabul, ret veya paylaşım yolu mirasçılarla birlikte tartışılır." },
    { name: "Tapu ve Dava Aşaması", text: "Anlaşma varsa tapuda intikal, yoksa mahkemede dava yürütülür." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
