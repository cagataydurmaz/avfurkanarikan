import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const tuzlaMiras: PseoService = {
  slug: "miras",
  urlSlug: "tuzla-miras-avukati",
  name: "Tuzla Miras Avukatı",
  heroTitle: "Tuzla Miras Avukatı",
  heroSubtitle:
    "Tuzla'da mirasçılık belgesi, saklı pay, tenkis, mirasın reddi ve ticari işletme ya da taşınmaz içeren terekelerin paylaşımında hukuki destek sağlanır; dosyalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
  metaTitle: "Tuzla Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Tuzla'da veraset ilamı, saklı pay, tenkis davası, mirasın reddi ve işletme veya taşınmaz içeren terekelerin paylaşımında hukuki destek verilir.",
  aboutParagraph:
    "Furkan Arıkan, 72621 sicil numarasıyla İstanbul Barosu'na kayıtlıdır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Tuzla'daki mirasçılara, taşınmaz ve işletme payı içeren terekelerde mirasçılık belgesi, paylaşım ve tenkis konularında danışmanlık verir. Büro Beşiktaş/Sinanpaşa'dadır; Tuzla'da ofis yoktur, randevu telefon veya WhatsApp ile ayarlanır.",
  highlightCards: [
    { title: "Mirasçılık Belgesi", description: "Zümre sıralamasına göre mirasçıların ve payların belgelenmesi." },
    { title: "İşletme Payı Terekeleri", description: "Şirket hissesi veya ticari faaliyet içeren mirasta paylaşım planlaması." },
    { title: "Tenkis ve Muvazaa", description: "Saklı payı aşan tasarruflar ve mal kaçırmaya yönelik devirlere karşı dava." },
    { title: "Ret ve Paylaşım", description: "Borçlu terekede mirasın reddi; taşınmazlarda taksim veya ortaklığın giderilmesi." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Mirasçılık belgesi başvurusu ve Tuzla Tapu Müdürlüğü'nde intikal hazırlığı",
    "Şirket payı veya işletme içeren terekelerde paylaşım danışmanlığı",
    "Saklı pay ihlalinde tenkis davası",
    "Muris muvazaası kaynaklı tapu iptali ve tescil davası",
    "Mirasın reddi beyanı ve borçlu terekede mirasçının korunması",
    "Taksim sözleşmesi ve ortaklığın giderilmesi davası",
  ],
  localParagraphs: [
    "Tuzla, tersaneler bölgesi ile Tepeören ve Orhanlı çevresindeki sanayi alanlarıyla Anadolu Yakası'nın sanayi ağırlıklı ilçelerinden biridir. Bu yapı, miras bırakanın bir işletmede ortaklığı, ticari alacakları veya iş yeri hissesi bulunan terekelerde ayrı bir inceleme gerektirir; Aydınlı, Postane, Evliya Çelebi gibi yerleşim mahallelerindeki konutlar ile Akfırat ve Tepeören tarafındaki arsalar ise taşınmaz paylaşımı açısından farklı sorunlar doğurur.",
    "Tuzla'nın kendi adliyesi bulunmadığından miras davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. İntikal işlemleri Evliya Çelebi Mahallesi'ndeki kaymakamlık binasında hizmet veren Tuzla Tapu Müdürlüğü'nde yürütülür. Marmaray'ın Aydıntepe, İçmeler ve Tuzla istasyonları, ilçedeki mirasçıların belge ve adliye programını planlamasını kolaylaştırır.",
  ],
  faqs: [
    { question: "Tuzla'da tapuya intikal için hangi belge gerekir?", answer: "Genellikle mirasçılık belgesi ve kimlik belgeleriyle tapu müdürlüğüne başvurulur. Tuzla Tapu Müdürlüğü Evliya Çelebi Mahallesi'ndeki kaymakamlık binasında hizmet verir." },
    { question: "Miras bırakanın şirket hissesi mirasçılara nasıl geçer?", answer: "Hisse, terekenin bir parçası olarak mirasçılara geçer; ayrıntılar ortaklık sözleşmesine ve şirket türüne bağlıdır. Paylaşım için tereke kalemleri tek tek belgelenmelidir." },
    { question: "Mirasın reddi dilekçesi hangi mahkemeye verilir?", answer: "Ret beyanı sulh (hukuk) mahkemesine sözlü veya yazılı yapılır (TMK m.609); nüfus müdürlüğü ya da noter yoluyla ret yapılamaz. Yetkili mahkeme olayda ayrıca belirlenir." },
    { question: "Üç aylık ret süresi ne zaman işlemeye başlar?", answer: "Yasal mirasçılar için süre, miras bırakanın ölümünün öğrenilmesinden başlar (TMK m.606). Süre dolarsa ret hakkı düşer (TMK m.610)." },
    { question: "Vasiyetle bir kişiye fazla pay bırakılmışsa saklı pay nasıl korunur?", answer: "Saklı pay sahibi mirasçı tenkis davası açabilir; dava asliye hukuk mahkemesinde görülür. Önce terekenin değeri ve yapılan tasarruflar belgelerle ortaya konulur." },
  ],
  howToTitle: "Tuzla'da İşletme ve Taşınmaz İçeren Terekede Paylaşım Nasıl Planlanır?",
  howToSteps: [
    { name: "Tereke Envanteri", text: "Taşınmaz, hesap, şirket payı ve borçlar tek bir listede toplanır." },
    { name: "Mirasçı Sıralaması", text: "Mirasçılık belgesine göre zümre ve pay oranları kontrol edilir." },
    { name: "Değerlerin Belgelenmesi", text: "Taşınmazlar ve işletme payı için resmî kayıtlara dayanan değer verileri derlenir." },
    { name: "Paylaşım Yöntemi", text: "Yazılı taksim sözleşmesi ya da ortaklığın giderilmesi davası arasında seçim yapılır." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi", "mirasin-reddi-nasil-yapilir"],
};
