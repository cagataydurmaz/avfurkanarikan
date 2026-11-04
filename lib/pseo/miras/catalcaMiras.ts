import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const catalcaMiras: PseoService = {
  slug: "miras",
  urlSlug: "catalca-miras-avukati",
  name: "Çatalca Miras Avukatı",
  heroTitle: "Çatalca Miras Avukatı",
  heroSubtitle:
    "Çatalca'da tarla, arsa ve köy evi gibi kırsal mirasların intikali, paylaşımı ve miras uyuşmazlıklarında hukuki destek sağlanır; davalar İstanbul Büyükçekmece Adliyesi'nde görülür.",
  metaTitle: "Çatalca Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Çatalca'da veraset ilamı, tarla ve arsa mirasının paylaşımı, saklı pay, tenkis ve muris muvazaası konularında miras hukuku danışmanlığı verilmektedir.",
  aboutParagraph:
    "Kırsal nitelikli taşınmazların çok sayıda mirasçıya geçtiği bölgelerde miras hukuku uyuşmazlıkları zamanla karmaşıklaşabilir. Çatalca'daki müvekkillere danışmanlık veren avukat Furkan Arıkan (İstanbul Barosu, Sicil No: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019), veraset, taksim ve tapu iptali süreçlerinde temsil sağlamaktadır.",
  highlightCards: [
    { title: "Tarla ve Arsa Mirası", description: "Çok hisseli kırsal taşınmazların intikali ve paylaşımı." },
    { title: "Muris Muvazaası", description: "Mirasçıdan mal kaçırma amaçlı devirlere karşı tapu iptali." },
    { title: "Veraset İlamı", description: "Mirasçıların sulh hukuk mahkemesince belirlenmesi." },
    { title: "Sözlü Paylaşımların Yazıya Dökülmesi", description: "Yıllardır fiilen kullanılan payların hukuken düzenlenmesi." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Veraset ilamı için sulh hukuk mahkemesine başvuru",
    "Tarım arazisi ve arsa niteliğindeki hisseli taşınmazların intikali",
    "Ortaklığın giderilmesi (izale-i şüyu) davasının açılması",
    "Muris muvazaasına dayalı tapu iptali ve tescil davası",
    "Saklı pay ihlalinde tenkis davası",
    "Vasiyetnamenin iptali veya vasiyetname düzenlenmesi konusunda danışmanlık",
  ],
  localParagraphs: [
    "Çatalca'da Ferhatpaşa ve Kaleiçi gibi ilçe merkezindeki mahalleler ile Ovayenice, Muratbey, Karacaköy ve Binkılıç gibi kırsal yerleşimlerde tarla ve arsa niteliğindeki parseller kuşaklar boyunca hisseli biçimde aktarılabilmektedir. Tarım arazisi niteliğindeki parsellerin bölünmesinde 5403 sayılı Toprak Koruma ve Arazi Kullanımı Kanunu'ndaki sınırlamalar da paylaşım planında dikkate alınır; bu nedenle aynen taksim her zaman mümkün olmayabilir.",
    "Aile içinde yıllarca sözle yapılmış paylaşımlar ya da bir çocuğa fiilen bırakılmış yerler, miras bırakanın ölümünden sonra uyuşmazlığa dönüşebilir. İlçe İstanbul Büyükçekmece Adliyesi'nin yargı çevresindedir; tapu işlemleri Çatalca Tapu Müdürlüğü'nde, vergi bildirimleri ise Büyükçekmece Vergi Dairesi Müdürlüğü'nün Çatalca dış veznesinde yürütülür.",
  ],
  faqs: [
    {
      question: "Köydeki tarla babamın adına kayıtlı, ölümünden sonra nasıl bölüşülür?",
      answer:
        "Veraset ilamıyla mirasçılar belirlenip tapuda hisseli intikal yapılır. Ardından mirasçılar anlaşarak taksim yapabilir; anlaşma sağlanamazsa sulh hukuk mahkemesinde ortaklığın giderilmesi davası açılır.",
    },
    {
      question: "Tarım arazisi miras yoluyla küçük parçalara bölünebilir mi?",
      answer:
        "Tarım arazilerinin bölünmesi 5403 sayılı Kanun'daki asgari parsel büyüklüğü sınırlamalarına tabidir. Parselin niteliği ve alanı, paylaşım biçimini belirler; bu yüzden satış ve bedel paylaşımı yolu da gündeme gelebilir.",
    },
    {
      question: "Ağabeyime sağlığında devredilen arsa için dava açılabilir mi?",
      answer:
        "Devir, mirasçılardan mal kaçırma amacıyla yapılmış ve gerçek bir satış değilse muris muvazaası iddiasıyla tapu iptali ve tescil davası açılabilir. Aksi halde saklı payı ihlal eden bağışlar için tenkis yoluna gidilir.",
    },
    {
      question: "Mirası reddedersem tarla da elimden gider mi?",
      answer:
        "Evet, ret halinde mirasçı sıfatıyla terekedeki hak ve borçların hiçbirini devralmaz. TMK m.606 uyarınca ret süresi üç aydır ve ölümün öğrenilmesinden başlar; kararı vermeden önce terekenin aktif ve pasifinin araştırılması önerilir.",
    },
    {
      question: "Çatalca'da miras davaları hangi mahkemede açılır?",
      answer:
        "İlçe, İstanbul Büyükçekmece Adliyesi'nin yargı çevresindedir. Veraset ilamı ve ortaklığın giderilmesi sulh hukuk, tenkis ve tapu iptali davaları asliye hukuk mahkemesinde görülür.",
    },
  ],
  howToTitle: "Çatalca'da Çok Hisseli Tarla Mirası Nasıl Düzenlenir?",
  howToSteps: [
    { name: "Hisse Dökümü", text: "Tapu kaydı çıkarılarak mevcut paydaşlar ve hisse oranları tespit edilir." },
    { name: "Parsel Niteliği", text: "Arazinin tarım, arsa veya orman sınırı durumu imar ve kadastro kayıtlarıyla kontrol edilir." },
    { name: "Mirasçılık Belgesi", text: "Eksik intikaller için veraset ilamı alınıp hisseler mirasçılar adına tescil edilir." },
    { name: "Paylaşım Yolu", text: "Taksim sözleşmesi, bedel paylaşımı veya ortaklığın giderilmesi davası seçeneklerinden uygunu izlenir." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: [
    "miras-sakli-pay-tenkis",
    "vasiyetname-nasil-duzenlenir",
    "muris-muvazaasi-nedir",
    "ortakligin-giderilmesi-davasi",
  ],
};
