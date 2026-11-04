import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const adalarMiras: PseoService = {
  slug: "miras",
  urlSlug: "adalar-miras-avukati",
  name: "Adalar Miras Avukatı",
  heroTitle: "Adalar Miras Avukatı",
  heroSubtitle:
    "Büyükada, Heybeliada, Burgazada ve Kınalıada'daki terekelerde mirasçılık belgesi, saklı pay, mirasın reddi ve taşınmaz paylaşımı konularında hukuki destek sağlanır.",
  metaTitle: "Adalar Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Adalar'da veraset ilamı, saklı pay, tenkis, mirasın reddi ve ada taşınmazlarının paylaşımı konularında hukuki danışmanlık ve dava takibi sunulur.",
  aboutParagraph:
    "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Adalar'daki mirasçılara mirasçılık belgesi, saklı pay, tenkis ve paylaşım konularında danışmanlık verir. Büro Beşiktaş/Sinanpaşa'dadır, Adalar'da ofis yoktur; görüşmeler telefon veya WhatsApp ile planlanır, belge akışı uzaktan yürütülebilir.",
  highlightCards: [
    { title: "Ada Taşınmazları", description: "Köşk, yazlık ve konutların mirasçılar arasında paylaştırılması." },
    { title: "Mirasçılık Belgesi", description: "Mirasçıların ve pay oranlarının mahkeme veya noter yoluyla belgelenmesi." },
    { title: "Tenkis ve Muvazaa", description: "Saklı payı zedeleyen devir ve vasiyetlere karşı dava yolları." },
    { title: "Mirasın Reddi", description: "Borçlu terekede ret hakkının süresi içinde kullanılması." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Mirasçılık belgesi başvurusu ve tapu intikaline hazırlık",
    "Ada taşınmazlarının paylaşımında taksim sözleşmesi",
    "Saklı pay ihlalinde tenkis davası",
    "Muris muvazaasına dayalı tapu iptali ve tescil davası",
    "Mirasın reddi beyanı ve borçlu terekede mirasçının korunması",
    "Hisseli taşınmazlarda ortaklığın giderilmesi davası",
  ],
  localParagraphs: [
    "Adalar yalnızca Maden, Nizam, Heybeliada, Burgazada ve Kınalıada mahallelerinden oluşur; adalar arasında kara bağlantısı olmadığından aynı terekedeki taşınmazlar ve mirasçılar farklı adalara dağılmış olabilir. Yıllarca aile içinde kalan köşk veya yazlıkların birden çok mirasçıya geçmesi, kimin hangi payı kullanacağı ve satışa kimin karar vereceği konusunda uyuşmazlık yaratabilir. Eşin payı altsoyla birlikte 1/4, ana-babayla 1/2, büyük ana-babayla 3/4 olarak hesaplanır.",
    "Büyükada'da Adalar Adliyesi bulunmakla birlikte bu adliye İstanbul Anadolu Adliyesi'ne bağlı mülhakat statüsündedir ve ilçede bir sulh hukuk mahkemesi yer alır. Dosyanın hangi mahkemede görüleceği olay bazında belirlenir. Şehir Hatları vapurları Kabataş, Kadıköy ve Bostancı iskelelerinden ada iskelelerine sefer yaptığından, belge teslimi ve duruşma günleri vapur saatleri gözetilerek planlanır.",
  ],
  faqs: [
    { question: "Adalar'da miras dosyası hangi mahkemede görülür?", answer: "Büyükada'da bir adliye ve sulh hukuk mahkemesi bulunur; ancak adliye Anadolu Adliyesi'ne bağlıdır. Dava türüne göre görevli ve yetkili mahkeme ayrıca belirlenir." },
    { question: "Büyükada'daki ahşap köşkün mirasçıları anlaşamazsa ne olur?", answer: "Önce yazılı taksim sözleşmesi denenir; taşınmaz varsa resmî şekil gerekir. Uzlaşma olmazsa ortaklığın giderilmesi davası sulh hukuk mahkemesinde açılabilir." },
    { question: "Mirasın reddi için süre kaç aydır?", answer: "Süre üç aydır; yasal mirasçı için miras bırakanın ölümünün öğrenilmesinden başlar (TMK m.606). Ret, sulh (hukuk) mahkemesine kayıtsız şartsız bildirilir (TMK m.609)." },
    { question: "Adada yaşamayan mirasçı işlemleri nasıl yürütür?", answer: "Vekalet düzenlenirse belge toplama, başvuru ve duruşma takibi mirasçı adına yapılabilir; ancak ret beyanı gibi bazı işlemlerin biçimi mahkemeden ayrıca teyit edilir." },
    { question: "Tenkis davası hangi mahkemede açılır?", answer: "Saklı payı ihlal edilen mirasçı tenkis davasını asliye hukuk mahkemesinde açabilir. Süre ve koşullar somut olaya göre değerlendirilir." },
  ],
  howToTitle: "Adalar'da Ada Taşınmazı İçeren Mirasta İlk Adımlar Nelerdir?",
  howToSteps: [
    { name: "Mirasçıların Bildirilmesi", text: "Mirasçı listesi çıkarılır ve mirasçılık belgesi için başvuru hazırlanır." },
    { name: "Taşınmaz Kayıtlarının Çıkarılması", text: "Hangi adada hangi taşınmazın bulunduğu tapu kayıtlarıyla netleştirilir." },
    { name: "Vekalet ve Belge Akışı", text: "Başka yerde yaşayan mirasçılar için vekalet düzenlenir, belgeler uzaktan toplanır." },
    { name: "Paylaşım Kararı", text: "Taksim sözleşmesi ya da mahkeme yoluyla paylaşım yönü belirlenir." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi", "mirasin-reddi-nasil-yapilir"],
};
