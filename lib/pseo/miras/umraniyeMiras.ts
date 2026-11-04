import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const umraniyeMiras: PseoService = {
  slug: "miras",
  urlSlug: "umraniye-miras-avukati",
  name: "Ümraniye Miras Avukatı",
  heroTitle: "Ümraniye Miras Avukatı",
  heroSubtitle:
    "Ümraniye'de konut, dükkân ve sanayi sitesi payı gibi farklı nitelikteki terekelerde veraset ilamı, saklı pay, tenkis ve miras paylaşımı konularında hukuki destek sağlanır; davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
  metaTitle: "Ümraniye Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Ümraniye'de veraset ilamı, saklı pay, tenkis davası, mirasın reddi ve miras taksimi konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
  aboutParagraph:
    "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Ümraniye'de mirasçıların payının belirlenmesi, vasiyetnamenin geçerliliği, saklı pay ihlali ve terekedeki taşınmazların paylaşımı gibi konularda müvekkillerine danışmanlık sunar; büro Beşiktaş'tadır, ilk görüşme WhatsApp veya telefonla ayarlanabilir.",
  highlightCards: [
    { title: "Karma Nitelikli Tereke", description: "Konut, dükkân ve işyeri payı içeren terekelerde mirasçılık hesabı." },
    { title: "Vasiyetname İncelemesi", description: "Biçim şartları ve ayırt etme gücü yönünden geçerlilik değerlendirmesi." },
    { title: "Tenkis Davaları", description: "Saklı payı aşan tasarruflara karşı hak arama süreci." },
    { title: "Taksim ve Paylaşım", description: "Mirasçılar arası anlaşma ya da dava yoluyla paylaşım." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Mirasçılık belgesi (veraset ilamı) başvurusu ve mirasçı zümrelerinin tespiti",
    "Vasiyetnamenin açılması ve iptali ihtimalinin değerlendirilmesi",
    "Saklı pay ihlaline karşı tenkis davası",
    "Mirasın reddi ve ret süresinin takibi",
    "Terekenin tespiti ve mirasçılar arasında taksim sözleşmesi",
    "Ortaklığın giderilmesi davalarında temsil",
  ],
  localParagraphs: [
    "Ümraniye'de Atatürk, İstiklal, Çakmak ve Necip Fazıl gibi mahallelerde konut ağırlıklı terekeler görülürken, Yukarı Dudullu'daki İMES Sanayi Sitesi ve Dudullu Organize Sanayi Bölgesi çevresinde işyeri ve atölye payı içeren miraslar da bulunur. İşletme ya da dükkân payı kalan ailelerde, ticari faaliyetin sürmesiyle mirasçıların payını almak istemesi birlikte yönetilmesi gereken bir denge doğurabilir; bu tür terekelerde envanterin doğru çıkarılması öne çıkar.",
    "Ümraniye'nin kendi adliyesi bulunmadığından veraset ilamı, tenkis, tapu iptali ve ortaklığın giderilmesi davaları niteliğine göre sulh hukuk ya da asliye hukuk mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. Veraset ve intikal vergisi bildirimi ise Ümraniye Vergi Dairesi Müdürlüğü ile yürütülen idari bir süreçtir.",
  ],
  faqs: [
    {
      question: "Ümraniye'de veraset ilamı hangi adliyeden alınır?",
      answer:
        "Başvuru sulh hukuk mahkemesine yapılır; Ümraniye'nin bağlı olduğu yargı çevresi Kartal'daki İstanbul Anadolu Adliyesi'dir. Mirasçılar arasında ihtilaf yoksa noterlikten de veraset belgesi düzenlenebilir.",
    },
    {
      question: "Vasiyetname iptal edilebilir mi?",
      answer:
        "Vasiyetname, miras bırakanın ayırt etme gücünün bulunmaması, iradenin sakatlanması veya biçim şartlarına uyulmaması gibi sebeplerle iptal davasına konu olabilir. El yazılı vasiyetnamede tarih ve imza gibi şekil şartlarının eksiksizliği özellikle önemlidir.",
    },
    {
      question: "Saklı payımın ihlal edildiğini düşünüyorum, hangi mahkemeye başvurulur?",
      answer:
        "Tenkis davası asliye hukuk mahkemesinde açılır. Dava süresi öğrenme tarihinden başlayan bir yıllık süreyle sınırlıdır; saklı payın hesabı ve hangi tasarrufların tenkise tabi olduğu dosya özelinde belirlenmelidir.",
    },
    {
      question: "İşyeri payı mirasçılara nasıl bölünür?",
      answer:
        "İşyeri, tereke içinde bir malvarlığı kalemi olarak mirasçıların payları oranında paylı mülkiyete girer. Mirasçılar anlaşırsa biri payları devralabilir; anlaşamazlarsa ortaklığın giderilmesi davası yoluyla satış veya aynen taksim değerlendirilir.",
    },
    {
      question: "Mirası reddetmek için ne kadar süre vardır?",
      answer:
        "TMK m.606 uyarınca ret süresi üç aydır ve miras bırakanın ölümünün öğrenilmesinden başlar; ret beyanı sulh hukuk mahkemesine yapılır. Süre içinde ret beyanında bulunulmazsa ret hakkı düşer.",
    },
  ],
  howToTitle: "Ümraniye'de Vasiyetnameli Bir Terekede Saklı Pay Nasıl Korunur?",
  howToSteps: [
    { name: "Vasiyetnamenin İncelenmesi", text: "Vasiyetnamenin türü, tarihi ve şekil şartları kontrol edilir." },
    { name: "Saklı Payın Hesaplanması", text: "Tereke değeri ve mirasçı payları üzerinden saklı pay hesaplanır." },
    { name: "Dava Dilekçesi", text: "İhlal varsa tenkis talebi asliye hukuk mahkemesine sunulur." },
    { name: "Bilirkişi ve Karar", text: "Tereke değeri bilirkişi incelemesiyle belirlenir ve karar verilir." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
