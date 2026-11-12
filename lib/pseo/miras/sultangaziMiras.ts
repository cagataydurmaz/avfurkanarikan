import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const sultangaziMiras: PseoService = {
  slug: "miras",
  urlSlug: "sultangazi-miras-avukati",
  name: "Sultangazi Miras Avukatı",
  heroTitle: "Sultangazi Miras Avukatı",
  heroSubtitle:
    "Habibler, Cebeci, Esentepe ve çevre mahallelerde aile mülkü, tapu ve paylaşım meselelerinde veraset, saklı pay, tenkis ve ortaklığın giderilmesi konularında hukuki danışmanlık verilir; davalar İstanbul Gaziosmanpaşa Adliyesi'nde görülür.",
  metaTitle: "Sultangazi Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Sultangazi'de veraset ilamı, saklı pay, tenkis, mirasın reddi ve ortaklığın giderilmesi konularında miras hukuku danışmanlığı sunulmaktadır.",
  aboutParagraph:
    "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Sultangazi'de yaşayan ailelerin veraset ilamı, mirasçıların paylarının belirlenmesi, saklı pay ve tenkis, mirasın reddi ile paylı taşınmazların ortaklığının giderilmesi gibi miras dosyalarında danışmanlık ve temsil hizmeti verir; büro Beşiktaş'tadır, görüşmeler WhatsApp veya telefonla planlanır.",
  highlightCards: [
    { title: "Veraset ve Mirasçılık", description: "Mirasçı zümrelerinin ve payların belirlenmesi, veraset ilamı başvurusu." },
    { title: "Saklı Pay ve Tenkis", description: "Vasiyet veya bağışla zedelenen saklı payın korunması." },
    { title: "Paylı Taşınmazlar", description: "Kardeşler arasında kalan tapuların paylaşımı ve ortaklığın giderilmesi." },
    { title: "Mirasın Reddi", description: "Borca batık terekede üç aylık ret süresinin takibi." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Veraset ilamı için sulh hukuk mahkemesine başvuru hazırlığı",
    "Saklı payın hesaplanması ve tenkis davasının açılması",
    "Muris muvazaasına dayalı tapu iptali ve tescil davaları",
    "Mirasın reddi beyanı ve ret süresinin takibi",
    "Miras taksim sözleşmesinin hazırlanması",
    "Ortaklığın giderilmesi (izale-i şuyu) davalarında temsil",
  ],
  localParagraphs: [
    "Sultangazi'de Cebeci, Esentepe, Habibler ve Malkoçoğlu gibi mahallelerde yıllar içinde bölünerek el değiştiren arsa ve gecekondu kökenli taşınmazlar, mirasçılar arasında hisseli tapu olarak kalabilmektedir. Hazine arazisi üzerindeki yapılarda tapu tahsisiyle hak sahibine geçen taşınmazlar da miras bırakanın ölümüyle mirasçılar arasında paylı mülkiyete dönüşür; bu durumda hangi mirasçının hangi payı taşıdığı veraset ilamıyla belirlenir.",
    "Kentsel dönüşümün sürdüğü bölgelerde hak sahipliği çoğu zaman miras bırakanın adına kayıtlı taşınmaz üzerinden yürüdüğünden, mirasçıların tapuda intikalin tamamlanması için aynı anda hareket etmesi gerekebilir. Veraset ilamı, tenkis ve tapu iptali davaları niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Gaziosmanpaşa Adliyesi bünyesinde görülür; veraset ve intikal vergisi bildirimleri ise Sultangazi Mal Müdürlüğü ile yürütülür.",
  ],
  faqs: [
    {
      question: "Babamdan kalan hisseli tapuyu kardeşlerim satmak istemiyor, ne yapılabilir?",
      answer:
        "Paylı mülkiyette malikler anlaşamazsa her biri ortaklığın giderilmesi davası açabilir. Bu dava sulh hukuk mahkemesinde görülür; taşınmaz aynen paylaştırılamıyorsa satış yoluyla ortaklık giderilebilir. Dava öncesinde miras taksim sözleşmesiyle anlaşma da değerlendirilebilir.",
    },
    {
      question: "Sultangazi'de veraset ilamı için nereye başvurulur?",
      answer:
        "Veraset ilamı sulh hukuk mahkemesinden veya noterlikten alınabilir. Uyuşmazlık bulunan, mirasçılar arasında tereddüt olan dosyalarda mahkeme yolu tercih edilir. Başvuruda nüfus kayıt örnekleri ve miras bırakanın ölüm belgesi gibi evraklar sunulur.",
    },
    {
      question: "Ölen kişinin borcu varsa mirasçılar sorumlu olur mu?",
      answer:
        "Mirasçılar kural olarak miras bırakanın borçlarından sorumludur. Terekenin borca batık olduğu düşünülüyorsa TMK m.606 kapsamında ölümün öğrenilmesinden itibaren üç ay içinde mirasın reddi beyanı yapılabilir. Süre dosyanın durumuna göre dikkatle takip edilmelidir.",
    },
    {
      question: "Anne ya da babanın sağlığında yapılan bir tapu devri geri alınabilir mi?",
      answer:
        "Devrin gerçekte bağışa dayandığı veya mirasçılardan mal kaçırmak amacı taşıdığı ileri sürülüyorsa muris muvazaası ya da tenkis iddiası gündeme gelebilir. Hangi dava yolunun uygun olduğu, tapu kaydı ve devir sözleşmesinin incelenmesiyle belirlenir.",
    },
    {
      question: "Saklı pay kimlere tanınmıştır?",
      answer:
        "TMK m.506 uyarınca altsoy, ana ve baba ile sağ kalan eşin saklı payı bulunur. Altsoyun saklı payı yasal payının yarısıdır. Saklı payı ihlal eden tasarruflara karşı tenkis davası açılabilir; süre ve başlangıç tarihi somut olaya göre değerlendirilir.",
    },
  ],
  howToTitle: "Sultangazi'de Hisseli Tapunun Mirasçılar Arasında Paylaşımı Nasıl Yapılır?",
  howToSteps: [
    { name: "Mirasçıların Tespiti", text: "Veraset ilamıyla mirasçılar ve miras payları kesinleştirilir." },
    { name: "Tapu ve Tereke Dökümü", text: "Tapu kayıtları, şerhler ve diğer tereke unsurları listelenir." },
    { name: "Anlaşma Denemesi", text: "Mirasçılar uzlaşırsa taksim sözleşmesi hazırlanır ve tapuda intikal yapılır." },
    { name: "Dava Yolu", text: "Uzlaşma olmazsa ortaklığın giderilmesi davası sulh hukuk mahkemesinde açılır." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
