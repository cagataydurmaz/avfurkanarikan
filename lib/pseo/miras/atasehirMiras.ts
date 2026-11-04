import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const atasehirMiras: PseoService = {
  slug: "miras",
  urlSlug: "atasehir-miras-avukati",
  name: "Ataşehir Miras Avukatı",
  heroTitle: "Ataşehir Miras Avukatı",
  heroSubtitle:
    "Barbaros, İçerenköy ve Küçükbakkalköy gibi mahallelerde yoğun konut ve site yerleşiminin bulunduğu Ataşehir'de mirasçılık belgesi, saklı pay, vasiyetname ve miras paylaşımı süreçlerinde hukuki destek verilir; ilçe İstanbul Anadolu Adliyesi'nin yargı çevresindedir.",
  metaTitle: "Ataşehir Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Ataşehir'de veraset ilamı, vasiyetname, saklı pay ve tenkis, miras taksim sözleşmesi ve mirasın reddi konularında avukatlık ve dava takibi hizmeti verilir.",
  aboutParagraph:
    "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur; büro Beşiktaş/Sinanpaşa'dadır, Ataşehir'de değildir. Anadolu Yakası'nın E-5 koridoruna oturan bu ilçesinde mirasçılar çoğu zaman bir veya birkaç daireden oluşan taşınmaz payları, banka hesapları ve araç gibi taşınır varlıklarla karşılaşır; bu kalemlerin her biri için gereken belge ve işlem sırası farklıdır, danışmanlık bu ayrımı netleştirmeye odaklanır.",
  highlightCards: [
    { title: "Daire ve Site Payları", description: "Birden fazla mirasçıya geçen konutlarda intikal ve taksim planlaması." },
    { title: "Banka ve Menkul Varlıklar", description: "Hesap, fon ve araç gibi taşınırlar için mirasçılık belgesiyle başvuru." },
    { title: "Vasiyetname İncelemesi", description: "Şekil şartlarına ve saklı pay sınırına uygunluğun kontrolü." },
    { title: "Taksim Sözleşmesi", description: "Mirasçıların paylaşımı yazılı ve gerekirse resmi şekilde bağlaması." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Mirasçılık belgesi başvurusu ve mirasçıların payının hesaplanması",
    "Bankalara ve kurumlara karşı mirasçılık belgesiyle işlem yapılması için destek",
    "Vasiyetnamenin açılması, tenfizi veya iptali süreçlerinde temsil",
    "Saklı pay ihlaline karşı tenkis davası",
    "Mirasçılar arasında taksim sözleşmesinin hazırlanması",
    "Terekenin tespiti ve terekede kayıtlı malların belirlenmesi talepleri",
  ],
  localParagraphs: [
    "Ataşehir'de açılacak mirasçılık, mirasın reddi, vasiyetnamenin açılması gibi sulh hukuk işleri ile tenkis ve muris muvazaası gibi asliye hukuk davaları, miras bırakanın yerleşim yerine göre İstanbul Anadolu Adliyesi'nde görülür. Mirasın tapu kaydı kısmı için de tapu müdürlüğünde intikal işlemi bu belgelerle başlatılır.",
    "Barbaros, Kayışdağı, Yenişehir ve İnönü gibi mahallelerdeki gayrimenkullerin mirasçılar arasında nasıl paylaşılacağı çoğunlukla ilk soruyu oluşturur. Veraset ve intikal vergisi bakımından Kozyatağı Vergi Dairesi Müdürlüğü ile iletişime geçilebilir; beyan ve ödeme koşulları için güncel mevzuat ayrıca doğrulanmalıdır.",
  ],
  faqs: [
    { question: "Mirasçılık belgesi bankalarda ve tapuda aynı şekilde mi kullanılır?", answer: "Genel olarak kullanılır; ancak bazı kurumlar belgenin güncel tarihli olmasını veya e-Devlet çıktısını isteyebilir." },
    { question: "Aynı apartmandaki daire üzerinde üç kardeş mirasçıysa ne yapılabilir?", answer: "Mirasçılar anlaşırsa devir veya taksim sözleşmesi yapılır; anlaşamazlarsa ortaklığın giderilmesi davası açılabilir." },
    { question: "Vasiyetname ile tüm malın tek çocuğa bırakılması geçerli mi?", answer: "Saklı pay sahibi diğer mirasçılar varsa vasiyet saklı payı ihlal ettiği oranda tenkis konusu olabilir." },
    { question: "Mirasçı yurt dışında yaşıyorsa işlemleri nasıl yürütür?", answer: "Konsolosluk veya noter aracılığıyla düzenlenen vekaletname ile işlemler Türkiye'de yürütülebilir." },
    { question: "Ataşehir'de bırakılan terekede gizli borç çıkarsa ne olur?", answer: "Mirasçı zamanında ret beyanında bulunmamışsa borçlardan sorumlu olabilir; durumun süre içinde incelenmesi önem taşır." },
  ],
  howToTitle: "Ataşehir'de Miras Paylaşımı Hangi Sırayla Yürütülür?",
  howToSteps: [
    { name: "Varlıkların Listelenmesi", text: "Daire, hesap ve araç gibi mal varlığı ile varsa borçlar çıkarılır." },
    { name: "Mirasçılık Belgesi", text: "Belge alınarak kurumlara başvurmanın zemini hazırlanır." },
    { name: "Paylaşım Planı", text: "Mirasçılar arasında devir, satış veya taksim seçenekleri görüşülür." },
    { name: "Anadolu Adliyesi Süreci", text: "Anlaşma sağlanamazsa İstanbul Anadolu Adliyesi'nde dava yolu işletilir." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
