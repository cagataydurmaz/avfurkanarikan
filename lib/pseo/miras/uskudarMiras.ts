import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const uskudarMiras: PseoService = {
  slug: "miras",
  urlSlug: "uskudar-miras-avukati",
  name: "Üsküdar Miras Avukatı",
  heroTitle: "Üsküdar Miras Avukatı",
  heroSubtitle:
    "Kuzguncuk, Beylerbeyi ve Çengelköy'deki köklü aile mülklerinden Altunizade ve Acıbadem'deki konutlara kadar uzanan terekelerde veraset, saklı pay ve tenkis konularında hukuki destek verilir; davalar İstanbul Anadolu Adliyesi'nde görülür.",
  metaTitle: "Üsküdar Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Üsküdar'da veraset ilamı, vasiyetname, saklı pay, tenkis ve miras paylaşımı konularında avukatlık ve hukuki danışmanlık hizmeti sunulmaktadır.",
  aboutParagraph:
    "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Üsküdar'da nesiller boyu aktarılan aile konutları, ortak mülkiyetli taşınmazlar ve vasiyetname içeren terekelerde mirasçılara hukuki bilgilendirme ve temsil hizmeti verir; büro Beşiktaş'ta olup görüşmeler WhatsApp ya da telefonla planlanabilir.",
  highlightCards: [
    { title: "Aile Mülkü Terekeleri", description: "Birden çok kuşaktır paylı kalan konutların mirasçılar arasında düzenlenmesi." },
    { title: "Vasiyetname Süreçleri", description: "Resmi ve el yazılı vasiyetnamelerin açılması ve geçerlilik denetimi." },
    { title: "Saklı Pay Koruması", description: "Bağış ve vasiyetle ihlal edilen payın tenkis yoluyla talebi." },
    { title: "Muris Muvazaası", description: "Mirasçılardan mal kaçırma amaçlı devirlerde tapu iptali ihtimali." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Veraset ilamı başvurusu ve mirasçıların paylarının belirlenmesi",
    "Vasiyetnamenin sulh hukuk mahkemesince açılması ve iptal davaları",
    "Tenkis davası açılması ve saklı payın hesaplanması",
    "Muris muvazaasına dayalı tapu iptali ve tescil davaları",
    "Mirasın reddi ve mirasçılık sıfatına ilişkin danışmanlık",
    "Miras taksim sözleşmesi ve ortaklığın giderilmesi davaları",
  ],
  localParagraphs: [
    "Kuzguncuk, Beylerbeyi, Çengelköy ve Kandilli gibi Boğaz kıyısı semtlerinde yalı ve ahşap konut gibi tarihi niteliği olan, çoğu kez sit alanı statüsü taşıyan taşınmazlar kuşaktan kuşağa aktarılırken payların sayısı hızla artabilir. Bu yapılarda tadilat ve koruma izinleri paydaşların ortak hareket etmesini gerektirdiğinden, mirasçılar arasındaki pay dağılımının veraset ilamıyla netleştirilmesi pratikte ilk adımdır.",
    "Altunizade, Acıbadem ve Bulgurlu çevresindeki apartman daireleri ile ofis nitelikli taşınmazlar da terekede yer alabilir; bu durumda değer tespiti için bilirkişi incelemesi önem kazanır. Veraset ilamı, tenkis ve ortaklığın giderilmesi davaları niteliğine göre sulh veya asliye hukuk mahkemesinde, İstanbul Anadolu Adliyesi bünyesinde görülür; veraset ve intikal vergisi bildirimleri Üsküdar Vergi Dairesi Müdürlüğü ile yürütülür.",
  ],
  faqs: [
    {
      question: "Üsküdar'daki tarihi aile evinde birden çok mirasçı varsa evi kim kullanabilir?",
      answer:
        "Mirasçılar terekede ortak (elbirliği) mülkiyet halindedir ve mirasın paylaşımına kadar yönetimde birlikte hareket etmeleri gerekir. Anlaşma sağlanamazsa taksim sözleşmesi ya da dava yolu değerlendirilir; bu çerçevede kullanım ve paylaşım ayrı ayrı ele alınır.",
    },
    {
      question: "Miras bırakanın ölümünden sonra tapuda ilk işlem nedir?",
      answer:
        "Mirasçılar önce veraset ilamı alır ve ilgili tapu müdürlüğüne başvurarak intikal işlemini yaptırır. Veraset ve intikal vergisi bakımından Üsküdar Vergi Dairesi Müdürlüğü'ne bildirim gerekebilir; vergi beyan süreleri ve istisnalar güncel mevzuata göre ayrıca kontrol edilmelidir.",
    },
    {
      question: "Vasiyetnameyi kim açar, mirasçılar nasıl öğrenir?",
      answer:
        "Vasiyetname, sulh hukuk mahkemesi tarafından açılır ve ilgililere tebliğ edilir. Mirasçılar içeriği öğrendikten sonra saklı pay ihlali veya geçerlilik sorunu bulunup bulunmadığını incelemek için hukuki değerlendirme isteyebilir.",
    },
    {
      question: "Tenkis davası kimlere karşı açılır?",
      answer:
        "Saklı payı zedeleyen tasarrufla yararlanan kişilere, yani vasiyetle atanan mirasçıya veya bağışı alan kişiye karşı açılır. Dava asliye hukuk mahkemesinde görülür ve süre bakımından öğrenme tarihinin tespiti önem taşır.",
    },
    {
      question: "Mirasçılardan biri taşınmazdaki payını yabancıya satabilir mi?",
      answer:
        "Veraset sonrası pay sahipleri kural olarak kendi paylarını devredebilir; ancak paylı mülkiyette diğer paydaşların önalım hakkı gündeme gelebilir. Somut durum tapu kaydı ve satış şartlarına göre incelenmelidir.",
    },
  ],
  howToTitle: "Üsküdar'da Mirasçı Olarak Tapuda İntikal Nasıl Tamamlanır?",
  howToSteps: [
    { name: "Mirasçılık Belgesi", text: "Sulh hukuk veya noterlikten veraset belgesi alınır." },
    { name: "Vergi Bildirimi", text: "Veraset ve intikal vergisi yönünden vergi dairesine bildirim kontrol edilir." },
    { name: "Tapu Başvurusu", text: "Gerekli belgelerle tapu müdürlüğünde intikal talep edilir." },
    { name: "Paylaşım Planı", text: "Mirasçılar arasında taksim veya ortaklığın giderilmesi yolu belirlenir." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
