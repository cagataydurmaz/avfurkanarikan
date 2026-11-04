import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const sultanbeyliMiras: PseoService = {
  slug: "miras",
  urlSlug: "sultanbeyli-miras-avukati",
  name: "Sultanbeyli Miras Avukatı",
  heroTitle: "Sultanbeyli Miras Avukatı",
  heroSubtitle:
    "Sultanbeyli'de mirasçılık belgesi, saklı pay, tenkis, mirasın reddi ve hisseli taşınmaz paylaşımında hukuki destek sağlanır; ilçede adliye bulunmadığından dosyalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
  metaTitle: "Sultanbeyli Miras Avukatı | Veraset",
  metaDescription:
    "Sultanbeyli'de veraset ilamı, saklı pay, tenkis davası, mirasın reddi ve hisseli taşınmaz paylaşımı için hukuki danışmanlık ve dava takibi sunulur.",
  aboutParagraph:
    "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Sultanbeyli'deki mirasçılara terekenin tespiti, mirasçılık belgesi, vasiyetname incelemesi ve paylaşım davalarında danışmanlık verir. Büro Beşiktaş/Sinanpaşa'dadır, Sultanbeyli'de ofis yoktur; randevu WhatsApp veya telefonla ayarlanır.",
  highlightCards: [
    { title: "Mirasçılık Belgesi", description: "Mirasçıların ve pay oranlarının sulh mahkemesi veya noter yoluyla belgelenmesi." },
    { title: "Hisseli Tapu Paylaşımı", description: "Birden çok mirasçıya geçen taşınmazlarda taksim veya ortaklığın giderilmesi." },
    { title: "Tenkis ve Muvazaa", description: "Saklı payı zedeleyen bağış, satış görünümlü devir ve vasiyetlere karşı dava yolları." },
    { title: "Mirasın Reddi", description: "Borcu malvarlığını aşan terekelerde ret hakkının süresi içinde kullanılması." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Mirasçılık belgesi başvurusu ve tapu intikaline hazırlık",
    "Sultanbeyli'deki hisseli taşınmazlarda ortaklığın giderilmesi davası",
    "Saklı payı aşan bağış ve vasiyetlere karşı tenkis davası",
    "Muris muvazaasına dayalı tapu iptali ve tescil davası",
    "Mirasın reddi beyanı ve borçlu terekede mirasçının korunması",
    "Yazılı miras taksim sözleşmesinin hazırlanması",
  ],
  localParagraphs: [
    "Sultanbeyli, 1992'de ilçe olmadan önce köy ve belde statüsünden geçmiş, hızlı yapılaşmış bir ilçedir. Hasanpaşa, Mecidiye, Fatih veya Abdurrahmangazi gibi mahallelerde kuşaklar boyunca aile içinde el değiştiren taşınmazlar çoğu zaman tek bir mirasçı adına değil, birden çok kişi adına hisseli tapuda yazılıdır. Bu tür terekelerde ilk soru, mirasçıların kimler olduğu ve her birinin payının ne olduğudur; eşin payı altsoyla birlikte mirasçı olduğunda 1/4, ana-babayla 1/2, büyük ana-babayla 3/4 olarak hesaplanır.",
    "Ayrı adliyesi bulunmayan ilçenin miras dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. Mirasçılık belgesi sulh mahkemesinden ya da noterden alınabilir; paylaşım anlaşmayla sonuçlanmazsa ortaklığın giderilmesi davası sulh hukuk, muris muvazaasına dayalı tapu iptali ise asliye hukuk mahkemesinde açılır. M5 hattının Sultanbeyli'ye uzanması, belge teslimi ve duruşma günleri için Anadolu Yakası'nın diğer ilçeleriyle bağlantıyı kolaylaştıran bir unsurdur.",
  ],
  faqs: [
    { question: "Sultanbeyli'de miras davası nerede görülür?", answer: "İlçenin ayrı adliyesi bulunmadığından miras uyuşmazlıkları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür; görevli mahkeme dava türüne göre sulh hukuk veya asliye hukuk olur." },
    { question: "Babamın hisseli arsası için ne yapılmalı?", answer: "Önce mirasçılık belgesi alınır; belgeyle tapu müdürlüğünde intikal yapılır. Mirasçılar anlaşamazsa taşınmazın paylaşımı için ortaklığın giderilmesi davası açılabilir." },
    { question: "Mirasın reddi için süre ne zaman başlar?", answer: "Yasal mirasçı için süre üç aydır ve miras bırakanın ölümünün öğrenilmesinden başlar (TMK m.606). Ret beyanı sulh (hukuk) mahkemesine yapılır; nüfus müdürlüğü veya noter yoluyla ret yoktur." },
    { question: "Kardeşime yapılan tapu devri saklı payımı ihlal ediyorsa ne olur?", answer: "Devir bağış niteliğindeyse tenkis, gerçekte miras bırakanın mirasçıdan mal kaçırması söz konusuysa muris muvazaası iddiası değerlendirilir; bu dava asliye hukuk mahkemesinde görülür." },
    { question: "Ret süresi geçtiyse yeni süre istenebilir mi?", answer: "Önemli bir sebebin varlığında sulh hâkimi süreyi uzatabilir veya yeni süre tanıyabilir (TMK m.615). Süre içinde ret edilmezse ret hakkı düşer (TMK m.610)." },
  ],
  howToTitle: "Sultanbeyli'de Hisseli Mirasın Paylaşımı Nasıl Başlatılır?",
  howToSteps: [
    { name: "Mirasçıların Belgelenmesi", text: "Mirasçılık belgesi alınır ve her mirasçının payı net biçimde kayda geçirilir." },
    { name: "Tapu Kaydının İncelenmesi", text: "Taşınmazın tapu kaydı, şerhleri ve hisse oranları güncel kayıtlardan kontrol edilir." },
    { name: "Uzlaşma Denemesi", text: "Aynen bölüşme ya da satış konusunda mirasçılarla yazılı taksim sözleşmesi görüşülür." },
    { name: "Dava Yoluna Geçiş", text: "Uzlaşma olmazsa ortaklığın giderilmesi davası için dilekçe hazırlanır ve Anadolu Adliyesi'ne sunulur." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi", "mirasin-reddi-nasil-yapilir"],
};
