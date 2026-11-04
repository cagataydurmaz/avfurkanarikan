import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const beylikduzuMiras: PseoService = {
  slug: "miras",
  urlSlug: "beylikduzu-miras-avukati",
  name: "Beylikdüzü Miras Avukatı",
  heroTitle: "Beylikdüzü Miras Avukatı",
  heroSubtitle:
    "Site ve rezidans dairelerinin, işyerlerinin ve ev hisselerinin mirasçılar arasında paylaşımında veraset, mirasın reddi, tenkis ve ortaklığın giderilmesi konularında destek sağlanır; davalar İstanbul Büyükçekmece Adliyesi'nde görülür.",
  metaTitle: "Beylikdüzü Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Beylikdüzü'nde veraset ilamı, mirasın reddi, saklı pay, tenkis ve ortaklığın giderilmesi konularında hukuki danışmanlık ve dava takibi yapılmaktadır.",
  aboutParagraph:
    "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Beylikdüzü'nde ikamet eden veya taşınmazı bu ilçede bulunan mirasçılara mirasçılık belgesi, taksim, saklı pay ve vasiyetname uyuşmazlıklarında hukuki danışmanlık verir.",
  highlightCards: [
    { title: "Veraset Belgesi", description: "Mirasçı zümrelerinin ve payların belgelenmesi." },
    { title: "Konut ve İşyeri Payları", description: "Çok mirasçılı dairelerde satış veya devir seçenekleri." },
    { title: "Mirasın Reddi", description: "Borç ağırlıklı terekelerde karar süresinin izlenmesi." },
    { title: "Saklı Pay Koruması", description: "Bağış ve vasiyetin tenkis yönünden değerlendirilmesi." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Veraset ilamı ve mirasçıların pay hesabı",
    "Mirasın reddi ve tereke tespiti",
    "Tenkis davası ve saklı pay incelemesi",
    "Muris muvazaasına dayalı tapu iptal davaları",
    "Ortaklığın giderilmesi (izale-i şuyu) davaları",
    "Miras taksim sözleşmesi ve intikal süreçlerinde destek",
  ],
  localParagraphs: [
    "Cumhuriyet, Barış, Büyükşehir, Adnan Kahveci ve Yakuplu gibi mahallelerde yoğun biçimde yer alan site ve apartman daireleri, kredi borcuyla birlikte miras kalabilen mal varlığı kalemleridir. Mirasçılar daireyi kullanmak, satmak ya da bedelini bölüşmek konusunda ayrışırsa taksim sözleşmesi tercih edilebilir; anlaşma çıkmazsa ortaklığın giderilmesi davası açılır. Gürpınar ve Kavaklı gibi mahallelerde ise ticari birimler ve ortak işletmeler terekeye dahil olabilir.",
    "Beylikdüzü'ndeki miras uyuşmazlıkları İstanbul Büyükçekmece Adliyesi'nde, vergi işlemleri Beylikdüzü Vergi Dairesi Müdürlüğü nezdinde yürütülür. Metrobüs hattının son durağının ilçede olması, mirasçıların farklı şehir bölgelerinden gelerek belge ve imza işlemlerini tek günde tamamlamasını kolaylaştırabilir.",
  ],
  faqs: [
    { question: "Beylikdüzü'ndeki miras davası hangi adliyede açılır?", answer: "Yetkili adliye İstanbul Büyükçekmece Adliyesi'dir; görevli mahkeme dava türüne göre sulh veya asliye hukuk mahkemesidir." },
    { question: "Kredi borcu devam eden daire mirasçılara geçer mi?", answer: "Mirası kabul eden mirasçılar terekedeki borçlardan da sorumlu olabilir; bu yüzden ret hakkı süresi içinde değerlendirilmelidir." },
    { question: "Mirasçılardan biri yurt dışında ise veraset işlemi yapılabilir mi?", answer: "Vekaletname veya konsolosluk kanalıyla işlemler yürütülebilir; gerekli belgeler dosyaya göre belirlenir." },
    { question: "Tapu devri sırasında muvazaa şüphesi varsa ne yapılır?", answer: "Satışın gerçekte bağış olduğu savunuluyorsa tapu iptal ve tescil davası için ödeme kayıtları ve devir tarihçesi toplanır." },
    { question: "Taksim sözleşmesi hangi biçimde yapılır?", answer: "Yazılı yapılır; taşınmazları kapsıyorsa resmi şekil aranır, bu nedenle tapu işlemleri öncesinde taslak gözden geçirilir." },
  ],
  howToTitle: "Beylikdüzü'nde Miras Kalan Daire Süreci Nasıl Başlatılır?",
  howToSteps: [
    { name: "Dairenin Durum Tespiti", text: "Tapu, ipotek ve kredi bakiyesi öğrenilir." },
    { name: "Mirasçı ve Pay Belirleme", text: "Mirasçılık belgesiyle hak sahipleri ve oranlar kesinleşir." },
    { name: "Karar Aşaması", text: "Mirası kabul, ret veya satış seçenekleri değerlendirilir." },
    { name: "Uygulama", text: "Tapu devri, taksim veya ortaklığın giderilmesi davası yürütülür." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
