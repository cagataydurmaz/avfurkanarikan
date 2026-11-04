import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const buyukcekmeceMiras: PseoService = {
  slug: "miras",
  urlSlug: "buyukcekmece-miras-avukati",
  name: "Büyükçekmece Miras Avukatı",
  heroTitle: "Büyükçekmece Miras Avukatı",
  heroSubtitle:
    "Büyükçekmece'de veraset ilamı, saklı pay, tenkis ve ortaklığın giderilmesi süreçlerinde hukuki danışmanlık sağlanır; uyuşmazlıklar İstanbul Büyükçekmece Adliyesi'nde görülür.",
  metaTitle: "Büyükçekmece Miras Avukatı | Veraset",
  metaDescription:
    "Büyükçekmece'de veraset ilamı, saklı pay, tenkis, muris muvazaası ve ortaklığın giderilmesi konularında miras hukuku danışmanlığı sunulmaktadır.",
  aboutParagraph:
    "Miras bırakanın ölümüyle mal varlığının mirasçılara geçişi, Türk Medeni Kanunu'nun miras hükümleri çerçevesinde yürür. Büyükçekmece'deki müvekkillere bu alanda danışmanlık veren avukat Furkan Arıkan (İstanbul Barosu, Sicil No: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019), mirasçılık belgesinden taşınmaz paylaşımına kadar uzanan dosyalarda temsil sağlamaktadır.",
  highlightCards: [
    { title: "Veraset İlamı", description: "Mirasçıların ve payların sulh hukuk mahkemesinde belirlenmesi." },
    { title: "Saklı Pay ve Tenkis", description: "Saklı payı zedeleyen tasarruflara karşı dava hazırlığı." },
    { title: "Hisseli Taşınmazlar", description: "Ortak mülkiyetteki konut ve arsalarda paylaşım çözümleri." },
    { title: "Mirasın Reddi", description: "Borca batık terekede ret beyanının süresinde yapılması." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Veraset ilamı (mirasçılık belgesi) alınması için başvuru takibi",
    "Saklı pay hesabı ve tenkis davasının açılması",
    "Mirasın reddi beyanı ve sürelerin takibi",
    "Muris muvazaasına dayalı tapu iptali ve tescil davaları",
    "Miras taksim sözleşmesinin hazırlanması veya ortaklığın giderilmesi davası",
    "Tapuda intikal işlemleri ve veraset ve intikal vergisi sürecinde danışmanlık",
  ],
  localParagraphs: [
    "Büyükçekmece'de Dizdariye, Ahmediye ve Celaliye gibi eski yerleşik mahallelerdeki aile mülkleri ile Kumburgaz ve Kamiloba çevresindeki sahil yönlü konutlar, miras yoluyla birden fazla kişiye geçtiğinde hisseli mülkiyet sorununu gündeme getirebilir. Göl ve deniz kıyısına yakın taşınmazlarda kadastro ve imar durumunun tapu kaydıyla birlikte incelenmesi, paylaşım öncesinde değerlendirilen başlıca konulardan biridir.",
    "Bu ilçedeki miras davaları İstanbul Büyükçekmece Adliyesi'nin yargı çevresinde görülür; mirasçılık belgesi ve ortaklığın giderilmesi sulh hukuk, tenkis ve tapu iptali ise asliye hukuk mahkemesinin görev alanındadır. Tapu işlemleri için Büyükçekmece Tapu Müdürlüğü, veraset ve intikal vergisi bildirimleri için ise Büyükçekmece Vergi Dairesi Müdürlüğü ile temas kurulur.",
  ],
  faqs: [
    {
      question: "Kumburgaz'daki bir yazlık ölen babamdan bize kaldı, ilk ne yapmalıyız?",
      answer:
        "Önce mirasçıları ve payları gösteren veraset ilamı alınır, ardından tapuda intikal işlemi yapılır. Birden fazla mirasçı varsa taşınmaz hisseli hale gelir; satış, kullanım veya paylaşım için mirasçıların anlaşması ya da dava yoluna gidilmesi gerekir.",
    },
    {
      question: "Veraset ilamı Büyükçekmece'de hangi merciden alınır?",
      answer:
        "Başvuru sulh hukuk mahkemesine yapılır; bu ilçe için İstanbul Büyükçekmece Adliyesi yetkili adliyedir. Başvuruda ölüm belgesi ve nüfus kayıt örneği gibi belgeler sunulur.",
    },
    {
      question: "Saklı pay nedir, kimleri korur?",
      answer:
        "Saklı pay, miras bırakanın serbestçe tasarruf edemeyeceği kanuni payı ifade eder. Altsoy, ana-baba ve sağ kalan eş saklı pay sahibi olabilir; oranlar TMK m.505'te düzenlenmiştir.",
    },
    {
      question: "Mirası reddetmek için ne kadar süre var?",
      answer:
        "Ret hakkı TMK m.606 uyarınca, ölümün öğrenilmesinden başlayan üç aylık süre içinde kullanılır. Sürenin başlangıç anı ve borçtan sonradan haberdar olma gibi istisnai haller somut olaya göre değerlendirilir.",
    },
    {
      question: "Kardeşlerden biri satışa onay vermiyorsa ne yapılabilir?",
      answer:
        "Önce miras taksim sözleşmesi ile uzlaşma aranır. Sonuç alınamazsa her paydaş, sulh hukuk mahkemesinde ortaklığın giderilmesi davası açarak taşınmazın aynen paylaştırılmasını veya satışını talep edebilir.",
    },
  ],
  howToTitle: "Büyükçekmece'de Hisseli Mirasın Paylaşımı Nasıl Yürür?",
  howToSteps: [
    { name: "Mirasçılık Belgesi", text: "Veraset ilamı alınarak mirasçılar ve miras payları kesinleştirilir." },
    { name: "Tereke Envanteri", text: "Tapu kayıtları, banka hesapları ve borçlar derlenerek tereke ortaya konur." },
    { name: "Uzlaşma Görüşmesi", text: "Mirasçılar arasında taksim sözleşmesi yapılması için müzakere yürütülür." },
    { name: "Dava veya Tescil", text: "Uzlaşma olmazsa ortaklığın giderilmesi davası, olursa tapuda tescil işlemi yapılır." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: [
    "miras-sakli-pay-tenkis",
    "vasiyetname-nasil-duzenlenir",
    "muris-muvazaasi-nedir",
    "ortakligin-giderilmesi-davasi",
  ],
};
