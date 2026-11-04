import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const cekmekoyMiras: PseoService = {
  slug: "miras",
  urlSlug: "cekmekoy-miras-avukati",
  name: "Çekmeköy Miras Avukatı",
  heroTitle: "Çekmeköy Miras Avukatı",
  heroSubtitle:
    "Çekmeköy'de veraset ilamı, saklı pay, vasiyetname uyuşmazlıkları, mirasın reddi ve taşınmaz paylaşımında hukuki destek sağlanır; dosyalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
  metaTitle: "Çekmeköy Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Çekmeköy'de mirasçılık belgesi, saklı pay ve tenkis, vasiyetname, mirasın reddi ve ortaklığın giderilmesi konularında hukuki destek verilmektedir.",
  aboutParagraph:
    "Furkan Arıkan, 72621 sicil numarasıyla İstanbul Barosu'na kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Çekmeköy'de mirasçılık belgesi, saklı pay, vasiyetnamenin incelenmesi ve miras paylaşımı dosyalarında hukuki danışmanlık ve temsil sağlar. Büro Beşiktaş/Sinanpaşa'da yer alır; Çekmeköy'de ofis bulunmaz, görüşmeler WhatsApp veya telefonla planlanır.",
  highlightCards: [
    { title: "Veraset İlamı", description: "Zümrelere göre mirasçıların ve miras paylarının resmî belgeyle tespiti." },
    { title: "Vasiyetname İncelemesi", description: "Şekil şartları ve saklı pay açısından vasiyetnamenin değerlendirilmesi." },
    { title: "Tenkis Davası", description: "Saklı payı aşan ölüm öncesi bağış ve tasarruflara karşı başvuru." },
    { title: "Taşınmaz Paylaşımı", description: "Mirasçılar arasında taksim sözleşmesi veya ortaklığın giderilmesi davası." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Mirasçılık belgesinin alınması ve intikal için belge hazırlığı",
    "Vasiyetnamenin geçerlilik ve saklı pay yönünden incelenmesi",
    "Tenkis davasının açılması ve takibi",
    "Muris muvazaası iddiasıyla tapu iptali ve tescil davası",
    "Mirasın reddi beyanının süresinde yapılması",
    "Ortaklığın giderilmesi davası ve taksim sözleşmesi",
  ],
  localParagraphs: [
    "Çekmeköy, 5747 sayılı Kanun'la Ümraniye'den ayrılmış ve Alemdağ, Taşdelen, Ömerli belediyelerinin tüzel kişiliği sona ermiştir. Bu geçmiş nedeniyle Ömerli, Taşdelen veya Alemdağ gibi eski belde merkezlerindeki arazi ve müstakil evler ile Merkez, Hamidiye veya Mehmet Akif çevresindeki daireler aynı terekede yer alabilir. Taşınmazların nitelikleri farklı olduğunda paylaşım planı da ayrı ayrı kurulmalıdır.",
    "Çekmeköy'de ayrı bir adliye bulunmaz; miras davaları Kartal'daki İstanbul Anadolu Adliyesi'nde yürür. Vergi işlemlerinde bağlı olunan daire, ihbarname veya beyanname üzerindeki başlıktan görülür. Mirasçılık belgesi sulh mahkemesinden veya noterden alınabilir; M5 hattındaki Çekmeköy İstasyonu, belgelerin hazırlanması ve adliye dönüşlerinde Anadolu Yakası'ndaki bağlantıyı destekler.",
  ],
  faqs: [
    { question: "Çekmeköy'de veraset ilamı nereden alınır?", answer: "Mirasçılık belgesi sulh mahkemesinden veya noterden alınabilir (TMK m.598). Belgenin kapsamı ve pay oranları, mirasçıların hangi zümrede yer aldığına göre değişir." },
    { question: "Eşimin payı çocuklarımla birlikte ne kadardır?", answer: "Sağ kalan eş, altsoyla birlikte mirasçı olduğunda mirasın 1/4'ünü alır; ana-babayla birlikte 1/2, büyük ana-babayla birlikte 3/4 pay söz konusudur." },
    { question: "Vasiyetname yüzünden saklı payım azaldıysa ne yapılabilir?", answer: "Saklı pay sahibi mirasçı, vasiyetle ihlal edilen payı için tenkis davası açabilir. Dava asliye hukuk mahkemesinde görülür; süre ve koşullar somut olaya göre ayrıca değerlendirilir." },
    { question: "Mirasın reddi nasıl yapılır?", answer: "Ret beyanı sulh (hukuk) mahkemesine sözlü veya yazılı olarak, kayıtsız şartsız yapılır (TMK m.609). Üç aylık süre yasal mirasçı için ölümün öğrenilmesinden başlar (TMK m.606)." },
    { question: "Mirasçılar tapuda anlaşamıyorsa hangi dava açılır?", answer: "Paydaşlardan biri sulh hukuk mahkemesinde ortaklığın giderilmesi davası açabilir. Taksim sözleşmesi ise yazılı yapılır; taşınmaz varsa resmî şekil aranır." },
  ],
  howToTitle: "Çekmeköy'de Vasiyetname Uyuşmazlığına Nasıl Hazırlanılır?",
  howToSteps: [
    { name: "Vasiyetnamenin Temini", text: "Vasiyetnamenin türü belirlenir ve aslına ya da onaylı örneğine ulaşılır." },
    { name: "Şekil Kontrolü", text: "Düzenleme biçimi ve kanuni şartlar yönünden geçerliliği incelenir." },
    { name: "Saklı Payın Karşılaştırılması", text: "Vasiyetle bırakılan paylar, mirasçının saklı payıyla karşılaştırılır." },
    { name: "Başvuru Yolunun Seçilmesi", text: "İptal veya tenkis gibi uygun dava türü belirlenir ve dilekçe hazırlanır." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi", "mirasin-reddi-nasil-yapilir"],
};
