import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const fatihMiras: PseoService = {
  slug: "miras",
  urlSlug: "fatih-miras-avukati",
  name: "Fatih Miras Avukatı",
  heroTitle: "Fatih Miras Avukatı",
  heroSubtitle:
    "Fatih'te tarihi mahallelerdeki yapılar, ticari işyerleri ve aile mülklerinin mirasında veraset, saklı pay ve paylaşım süreçlerinde destek sağlanır; davalar İstanbul (Çağlayan) Adliyesi'nde görülür.",
  metaTitle: "Fatih Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Fatih'te veraset ilamı, tarihi yapı ve işyeri mirasının paylaşımı, saklı pay, tenkis ve ortaklığın giderilmesi için miras hukuku danışmanlığı sunulur.",
  aboutParagraph:
    "Mirasın hukuki çerçevesi mirasçıların sıfatı, payları ve terekenin niteliğine göre şekillenir. Fatih'teki müvekkillere danışmanlık veren avukat Furkan Arıkan (İstanbul Barosu, Sicil No: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019), miras hukuku dosyalarında veraset, tenkis ve taksim aşamalarında temsil sağlamaktadır.",
  highlightCards: [
    { title: "Tarihi Mahalle Mülkleri", description: "Balat, Fener ve Samatya'daki eski yapıların hisseli intikali." },
    { title: "Ticari Alan Mirası", description: "Dükkan, han ve atölye niteliğindeki taşınmazların paylaşımı." },
    { title: "Saklı Pay Koruması", description: "Bağış ve vasiyetlerin mirasçıların payına etkisi." },
    { title: "Veraset ve İntikal Vergisi", description: "Beyan ve tapu intikal sürecinin düzenli yürütülmesi." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Veraset ilamı alınması ve mirasçı paylarının tespiti",
    "Tarihi yapı ve han niteliğindeki hisseli taşınmazlarda intikal",
    "İşyeri ve dükkan mirasında ortaklığın giderilmesi davası",
    "Saklı payın korunması amacıyla tenkis davası",
    "Muris muvazaasına dayalı tapu iptali ve tescil",
    "Mirasın reddi, vasiyetname ve tereke işlemlerinde danışmanlık",
  ],
  localParagraphs: [
    "Süleymaniye, Zeyrek, Balat, Fener ve Samatya gibi köklü mahallelerde yüz yılı aşkın ahşap ve kâgir yapılar kuşaktan kuşağa aktarılmakta, çoğunlukla çok sayıda hissedarlı bir mülkiyet tablosu ortaya çıkmaktadır. Sultanahmet ile Cerrahpaşa, Şehremini ve Karagümrük çevresinde ise konut ve ticari bağımsız bölümler birlikte miras konusu olmaktadır.",
    "Aksaray, Kumkapı ve Topkapı çevresindeki yoğun ticaret alanında dükkan ve işyeri hisseleri de mirasçılar arasında ihtilaf kaynağı olabilir. İlçe İstanbul (Çağlayan) Adliyesi'nin yargı çevresindedir; tapu işlemleri Fatih Tapu Müdürlüğü'nde, veraset ve intikal vergisi bildirimi ise Fatih Vergi Dairesi Müdürlüğü'nde yürütülür.",
  ],
  faqs: [
    {
      question: "Balat'taki ahşap ev dedemden kalmış, hâlâ onun adına. Nereden başlamalıyız?",
      answer:
        "Önce dededen başlayarak tüm ölen malikler için ayrı ayrı mirasçılık belgesi gerekir. Ardından hisseler güncel mirasçılar adına tescil edilir; kayıtlar tamamlanmadan satış veya paylaşım yapılamaz.",
    },
    {
      question: "Mirasçılardan biri yurt dışında ve ulaşılamıyorsa dava açılabilir mi?",
      answer:
        "Evet, ortaklığın giderilmesi davasında tüm paydaşlar davalı olarak gösterilir ve adres araştırması yapılır. Ulaşılamayan kişi için mahkeme tebligat yoluyla süreci yürütür.",
    },
    {
      question: "Eşimle ortak aldığımız daire mirasın bir parçası sayılır mı?",
      answer:
        "Sağ kalan eşin kendi payı terekeye girmez; yalnızca ölen eşe ait pay mirasa konu olur. Mal rejimi tasfiyesi ve eşin yasal miras payı birlikte hesaplanır.",
    },
    {
      question: "Veraset ve intikal vergisi hangi durumlarda doğar?",
      answer:
        "Miras yoluyla geçen mal ve haklar vergiye tabidir. İstisna tutarları ve beyan süreleri mevzuatta ayrıca belirlendiğinden, güncel düzenlemenin vergi dairesi veya resmi mevzuattan kontrol edilmesi gerekir.",
    },
    {
      question: "Fatih'te miras davaları hangi adliyede açılır?",
      answer:
        "İstanbul (Çağlayan) Adliyesi'nde sulh hukuk ve asliye hukuk mahkemelerinde görülür. Veraset ilamı ile ortaklığın giderilmesi sulh hukuk, tenkis ve tapu iptali ise asliye hukuk mahkemesinin görevindedir.",
    },
  ],
  howToTitle: "Fatih'te Birkaç Kuşak Önce Ölenlerin Taşınmazı Nasıl Devralınır?",
  howToSteps: [
    { name: "Zincirleme Mirasçılık", text: "Kayıtlı malikten başlayarak sonraki ölümler için mirasçı zinciri çıkarılır." },
    { name: "Belge Seti", text: "Nüfus kayıt örnekleri, ölüm belgeleri ve tapu kaydı bir araya getirilir." },
    { name: "Vergi ve Tescil", text: "İntikal vergisi yükümlülükleri yerine getirilir, Fatih Tapu Müdürlüğü'nde tescil yapılır." },
    { name: "Paylaşım Planı", text: "Taşınmazın kullanımı, satışı veya bedel paylaşımı için çözüm yolu belirlenir." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: [
    "miras-sakli-pay-tenkis",
    "vasiyetname-nasil-duzenlenir",
    "muris-muvazaasi-nedir",
    "ortakligin-giderilmesi-davasi",
  ],
};
