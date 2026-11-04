import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const bakirkoyMiras: PseoService = {
  slug: "miras",
  urlSlug: "bakirkoy-miras-avukati",
  name: "Bakırköy Miras Avukatı",
  heroTitle: "Bakırköy Miras Avukatı",
  heroSubtitle:
    "Ataköy, Yeşilköy ve Zuhuratbaba gibi mahalleleri kapsayan ve Marmara kıyısında yer alan Bakırköy'de veraset ilamı, saklı pay ve tenkis, vasiyetname ve miras paylaşımı konularında danışmanlık sağlanır; İstanbul Bakırköy Adliyesi ilçenin kendi sınırları içindedir.",
  metaTitle: "Bakırköy Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Bakırköy'de veraset ilamı, saklı pay ve tenkis, vasiyetname, muris muvazaası ve ortaklığın giderilmesi konularında avukatlık hizmeti verilmektedir.",
  aboutParagraph:
    "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Büro Beşiktaş/Sinanpaşa'dadır, Bakırköy'de değildir. Adliyenin ilçe sınırları içinde olması, Bakırköy'deki miras dosyalarında belgelerin hızlı temin edilmesine ve mahkeme kalemleriyle yüz yüze iletişime imkan verir; bu avantaj, mirasçılık belgesi, tenkis veya ortaklığın giderilmesi gibi her dosyada pratik önem taşır.",
  highlightCards: [
    { title: "Adliyeye Yakınlık", description: "Mirasçılık belgesi ve ret beyanı gibi işlemlerde belgelerin yerinde takibi." },
    { title: "Sahil Mahalleleri", description: "Ataköy ve Yeşilköy'deki konutların mirasçılara intikali ve paylaşımı." },
    { title: "Saklı Pay Koruması", description: "Bağış ve vasiyetlerle ihlal edilen payın tenkis yoluyla talep edilmesi." },
    { title: "Vasiyetname Süreci", description: "Vasiyetnamenin açılması, tenfizi ve gerekirse iptali." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Mirasçılık belgesi başvurusu ve pay hesabı",
    "Mirasın reddi beyanının sulh hukuk mahkemesinde yapılması",
    "Vasiyetnamenin açılması ve tenfizi",
    "Saklı pay ihlaline karşı tenkis davası",
    "Muris muvazaasına dayalı tapu iptal ve tescil davası",
    "Mirasçılar arasında ortaklığın giderilmesi veya taksim anlaşması",
  ],
  localParagraphs: [
    "Bakırköy'de sulh hukuk ve asliye hukuk mahkemeleri İstanbul Bakırköy Adliyesi bünyesinde bulunduğundan, miras bırakanın son yerleşim yeri Bakırköy ise mirasçılık belgesi, mirasın reddi ve tereke tespiti gibi talepler ile tenkis ve muris muvazaası davaları doğrudan bu adliyede açılır; taşınmaz iptal davalarında ise kesin yetki taşınmazın bulunduğu yerdedir.",
    "Zuhuratbaba, Kartaltepe, Osmaniye, Cevizlik ve Şenlik gibi mahallelerde taşınmaz payı bulunan mirasçılar için Bakırköy Vergi Dairesi Müdürlüğü ile veraset vergisi bakımından bildirim yapmak gerekebilir; beyan süreleri ve istisnalar için güncel mevzuat ayrıca doğrulanmalıdır.",
  ],
  faqs: [
    { question: "Adliye Bakırköy'de olduğuna göre her miras davası orada mı açılır?", answer: "Yetki miras bırakanın son yerleşim yerine göre belirlenir; taşınmaz iptal davalarında ise taşınmazın bulunduğu yer mahkemesi kesin yetkilidir." },
    { question: "Mirasın reddi için adliyeye gidilmesi zorunlu mu?", answer: "Reddin sulh hukuk mahkemesi aracılığıyla yapılması esastır; bu nedenle süre dolmadan başvurunun yapılması önem taşır." },
    { question: "Ataköy'deki dairenin satışı için mirasçıların hepsinin imzası gerekir mi?", answer: "Elbirliği mülkiyetinde tüm mirasçılar birlikte hareket etmelidir; payları ayrılmışsa her mirasçı kendi payını devredebilir." },
    { question: "Vasiyetname noterde saklanıyorsa nasıl işlem yapılır?", answer: "Resmi vasiyetname noterde saklıdır; ölüm sonrası sulh hukuk mahkemesi tarafından açılır ve mirasçılara bildirilir." },
    { question: "Bakırköy'de yaşayan miras bırakanın eşine ne kadar pay düşer?", answer: "Eşin payı birlikte mirasçı olduğu zümreye göre değişir; birinci zümreyle dörtte bir, ikinci zümreyle yarım, üçüncü zümreyle dörtte üç olarak hesaplanır." },
  ],
  howToTitle: "Bakırköy'de Bir Mirasçılık Dosyası Nasıl Hazırlanır?",
  howToSteps: [
    { name: "Ölüm ve Nüfus Kayıtları", text: "Ölüm belgesi ve aile kütüğü örneği alınır." },
    { name: "Mal Varlığı Dökümü", text: "Gayrimenkul, banka ve araç kayıtlarıyla borçlar tek bir listede toplanır." },
    { name: "Mirasçılık ve Ret Kararı", text: "Mirasçılık belgesi alınır veya borç ağırsa ret süresi içinde beyan verilir." },
    { name: "Bakırköy'de Dava Aşaması", text: "Anlaşma sağlanamayan konularda Bakırköy Adliyesi'nde dava açılır." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
