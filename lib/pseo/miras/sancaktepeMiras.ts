import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const sancaktepeMiras: PseoService = {
  slug: "miras",
  urlSlug: "sancaktepe-miras-avukati",
  name: "Sancaktepe Miras Avukatı",
  heroTitle: "Sancaktepe Miras Avukatı",
  heroSubtitle:
    "Sancaktepe'de veraset ilamı, mirasın reddi, saklı pay ve tenkis ile taşınmaz paylaşımı konularında bilgilendirme ve dava takibi yapılır; ilçenin adliyesi bulunmadığından miras davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
  metaTitle: "Sancaktepe Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Sancaktepe'de veraset ilamı, mirasın reddi, saklı pay ve tenkis davası, ortaklığın giderilmesi konularında miras hukuku danışmanlığı sunulmaktadır.",
  aboutParagraph:
    "Furkan Arıkan, 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve İstanbul Baro kaydı 72621 sicil numarasıyla tutulmaktadır. Sancaktepe'deki ailelere miras bırakanın ölümünden sonra hangi belgelerin alınacağı, mirasçıların paylarının nasıl hesaplanacağı ve uyuşmazlık halinde hangi mahkemeye gidileceği konusunda destek verir. Büro Beşiktaş/Sinanpaşa'dadır, ilçede ofis bulunmaz.",
  highlightCards: [
    { title: "Zümre ve Pay Hesabı", description: "Altsoy, ana-baba ve eş arasındaki yasal payların kanuna göre belirlenmesi." },
    { title: "Mirasın Reddi", description: "Borcu fazla olan terekede ret süresinin ve sonuçlarının değerlendirilmesi." },
    { title: "Hisseli Tapu Çözümleri", description: "Sarıgazi, Yenidoğan ve Abdurrahmangazi'deki taşınmaz paylarının mirasçılar arasında düzenlenmesi." },
    { title: "Tenkis ve Muvazaa", description: "Mal kaçırma amaçlı devir iddialarında tapu iptali ve tenkis seçeneklerinin incelenmesi." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Veraset ilamı ve mirasçılık belgesi sürecinin yürütülmesi",
    "Mirasın reddi beyanının hazırlanması ve sonuçlarının açıklanması",
    "Saklı pay hesabı ve tenkis davası takibi",
    "Vasiyetnamenin geçerlilik ve biçim denetimi",
    "Muris muvazaasına dayalı tapu iptali davaları",
    "Taksim sözleşmesi ve ortaklığın giderilmesi davaları",
  ],
  localParagraphs: [
    "Sancaktepe'de Sarıgazi, Yenidoğan, Meclis, Emek ve Abdurrahmangazi gibi mahalleler, M5 metro hattının Samandıra Merkez'e uzanmasıyla birlikte daha erişilebilir hale gelmiş yerleşimlerdir. Bu mahallelerdeki daire ve arsa payları ebeveynden çocuklara geçtiğinde, mirasçıların sayısı arttıkça tek bir taşınmazın nasıl kullanılacağı veya satılacağı sorusu öne çıkar; bu nedenle paylaşım planının tapu kaydıyla birlikte ele alınması gerekir.",
    "Sancaktepe'nin kendi adliyesi bulunmadığından mirasçılık belgesi, mirasın reddi ve ortaklığın giderilmesi gibi sulh hukuk işleri ile tenkis ve tapu iptali gibi asliye hukuk davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. Vergi yönünden ilçe mal müdürlüğü işlemleri de veraset ve intikal vergisi beyanında dikkate alınacak bir adres olarak karşımıza çıkar.",
  ],
  faqs: [
    { question: "Sancaktepe'de miras uyuşmazlığı hangi adliyede çözülür?", answer: "İlçenin adliyesi olmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görevli mahkemelere başvurulur." },
    { question: "Babamdan kalan dairede kardeşlerimle ortak olduk, satmak istemiyorlarsa?", answer: "Ortaklığın giderilmesi davasıyla mahkeme taşınmazın aynen bölünmesine ya da satışına karar verebilir; önce taksim sözleşmesi yoluyla anlaşma denenir." },
    { question: "Mirası kabul etmek zorunda mıyım?", answer: "Hayır; borca batık terekede mirasçı, kanundaki süre içinde mirası reddedebilir. Süreyi kaçırmamak için belgeler hızla toplanmalıdır." },
    { question: "Tapuda intikal için neler gerekir?", answer: "Veraset ilamı ve mirasçıların kimlik bilgileri tapu işlemleri için gereklidir; verginin ödenmesi de intikal sürecinin bir parçasıdır." },
    { question: "İlk görüşme için hangi belgeleri hazırlamalıyım?", answer: "Miras bırakanın ölüm belgesi, nüfus kaydı, varsa tapu ve vasiyetname örnekleri yeterlidir." },
  ],
  howToTitle: "Sancaktepe'de Mirasa Hazırlık Adımları",
  howToSteps: [
    { name: "Aile Ağacı Çıkarımı", text: "Nüfus kayıtlarıyla yasal mirasçılar tespit edilir." },
    { name: "Mal Varlığı Dökümü", text: "Gayrimenkul, banka ve araç kayıtları kontrol edilir." },
    { name: "Hukuki Strateji", text: "Kabul, ret, anlaşma veya dava yolu seçilir." },
    { name: "Uygulama", text: "Seçilen yol çerçevesinde başvuru ve tapu işlemleri tamamlanır." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
