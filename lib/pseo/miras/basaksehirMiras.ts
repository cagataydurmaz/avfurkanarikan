import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const basaksehirMiras: PseoService = {
  slug: "miras",
  urlSlug: "basaksehir-miras-avukati",
  name: "Başakşehir Miras Avukatı",
  heroTitle: "Başakşehir Miras Avukatı",
  heroSubtitle:
    "Veraset ilamı, mirasın reddi, saklı pay ve tenkis, ortaklığın giderilmesi süreçlerinde Başakşehir'deki mirasçılara hukuki danışmanlık ve temsil sağlanır; davalar İstanbul Küçükçekmece Adliyesi'nde görülür.",
  metaTitle: "Başakşehir Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Başakşehir'de veraset ilamı, mirasın reddi, saklı pay, tenkis ve ortaklığın giderilmesi konularında hukuki danışmanlık ve dava takibi sunulmaktadır.",
  aboutParagraph:
    "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Miras hukuku kapsamında mirasçılık belgesi, miras paylaşımı, saklı pay ve vasiyetname uyuşmazlıklarında Başakşehir'de yaşayan veya taşınmazı Başakşehir'de bulunan mirasçılara danışmanlık verir.",
  highlightCards: [
    { title: "Veraset ve Tereke", description: "Mirasçılık belgesi alınması ve terekenin tespiti." },
    { title: "Mirasın Reddi", description: "Borca batık terekelerde 3 aylık sürenin takibi." },
    { title: "Saklı Pay ve Tenkis", description: "Tasarrufların saklı pay yönünden incelenmesi." },
    { title: "Site Dairesi Paylaşımı", description: "Mirasçılar arasında konutun taksimi veya satışı." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Veraset ilamı başvurusu ve mirasçıların payının belirlenmesi",
    "Mirasın reddi beyanı ve süre takibi",
    "Saklı pay hesabı ve tenkis davası",
    "Vasiyetnamenin iptali ve geçerlilik incelemesi",
    "Ortaklığın giderilmesi (izale-i şuyu) davaları",
    "Miras taksim sözleşmesi hazırlığı ve tapuda intikal desteği",
  ],
  localParagraphs: [
    "Başakşehir'de Bahçeşehir, Güvercintepe, Şahintepe ve Kayaşehir gibi planlı konut bölgelerindeki site daireleri, mirasçıların en sık karşılaştığı mal varlığı kalemlerinden biri olabilir. Birden fazla mirasçıya kalan bir dairenin kullanılması, satılması ya da bedelinin paylaştırılması konusunda anlaşma sağlanamazsa sulh hukuk mahkemesinde ortaklığın giderilmesi davası gündeme gelir. Başak ve Kayabaşı gibi mahallelerde ise ailelerin elinde kalan eski tarihli tapuların intikali ayrıca incelenmelidir.",
    "İlçedeki miras davaları İstanbul Küçükçekmece Adliyesi'nde, intikale ilişkin vergi işlemleri ise Başakşehir Vergi Dairesi Müdürlüğü nezdinde yürütülür. Terekede kredili edinilmiş bir konut varsa mirasçıların borca batıklık ihtimalini değerlendirmeden mirası kabul etmemesi ve mirasın reddi süresini yakından izlemesi önem taşır.",
  ],
  faqs: [
    { question: "Başakşehir'de veraset ilamı nereden alınır?", answer: "Veraset ilamı için sulh hukuk mahkemesine veya noterliğe başvurulabilir; ilçe İstanbul Küçükçekmece Adliyesi'nin yargı çevresindedir." },
    { question: "Kredi borcu kalan bir site dairesi mirasta nasıl ele alınır?", answer: "Daire ve borç birlikte terekeyi oluşturur; borç değerini aşıyorsa mirasın reddi seçeneği süresi içinde değerlendirilmelidir." },
    { question: "Mirasçılardan biri daireyi satmak istemezse ne yapılır?", answer: "Anlaşma sağlanamazsa ortaklığın giderilmesi davası açılarak taşınmazın satışı veya aynen taksimi talep edilebilir." },
    { question: "Mirasın reddi süresi ne kadardır?", answer: "Üç aydır ve miras bırakanın ölümünün öğrenilmesinden başlar (TMK m.606); ret beyanı sulh hukuk mahkemesine yapılır." },
    { question: "Saklı payın ihlal edildiğini düşünüyorsam hangi mahkemeye gidilir?", answer: "Tenkis davası asliye hukuk mahkemesinde açılır; süre ihlalin öğrenilmesinden itibaren işler ve dosyanın erken incelenmesi önerilir." },
  ],
  howToTitle: "Başakşehir'de Miras İşlemleri Hangi Sırayla Yürür?",
  howToSteps: [
    { name: "Mirasçıların Tespiti", text: "Nüfus kayıtlarıyla yasal mirasçılar ve payları belirlenir." },
    { name: "Terekenin Dökümü", text: "Daire, hesap ve borçlar listelenir; ret ihtimali değerlendirilir." },
    { name: "Paylaşım Yöntemi", text: "Taksim sözleşmesi ya da dava yolu mirasçılarla birlikte seçilir." },
    { name: "Tapu ve Vergi İşlemleri", text: "İntikal ve veraset ve intikal vergisi işlemleri tamamlanır." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
