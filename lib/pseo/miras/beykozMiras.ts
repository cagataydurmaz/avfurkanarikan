import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const beykozMiras: PseoService = {
  slug: "miras",
  urlSlug: "beykoz-miras-avukati",
  name: "Beykoz Miras Avukatı",
  heroTitle: "Beykoz Miras Avukatı",
  heroSubtitle:
    "Boğaz kıyısındaki köklü mahalleler ile Polonezköy ve Riva gibi kırsal bölgelerde aileden kalan taşınmazların intikali, miras paylaşımı ve saklı pay uyuşmazlıklarında hukuki destek sağlanır; yetkili adliye İstanbul Beykoz Adliyesi'dir.",
  metaTitle: "Beykoz Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Beykoz'da veraset ilamı, tapuda intikal, saklı pay, tenkis ve ortaklığın giderilmesi davalarında hukuki danışmanlık ve temsil hizmeti verilmektedir.",
  aboutParagraph:
    "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Beykoz'daki mirasçılara mirasçılık belgesi, arsa ve bahçe niteliğindeki taşınmazların paylaşımı, vasiyetname ve tenkis konularında danışmanlık ve dava takibi sağlar.",
  highlightCards: [
    { title: "Veraset İşlemleri", description: "Mirasçıların ve miras paylarının belgelenmesi." },
    { title: "Kırsal Taşınmazlar", description: "Arsa, bahçe ve tarla niteliğindeki hisselerin paylaşımı." },
    { title: "Mirasın Reddi", description: "Borçlu terekelerde sürenin kaçırılmaması için takip." },
    { title: "Tenkis ve Muvazaa", description: "Hayattayken yapılan devirlerin saklı pay yönünden incelenmesi." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Veraset ilamı başvurusu ve mirasçılık incelemesi",
    "Mirasın reddi ve tereke defteri işlemleri",
    "Muris muvazaası ve tapu iptal ve tescil davaları",
    "Saklı pay ve tenkis davası",
    "Hisseli arsa ve bahçelerde ortaklığın giderilmesi",
    "Vasiyetname ve miras taksim sözleşmesi hazırlığı",
  ],
  localParagraphs: [
    "Kanlıca, Anadolu Hisarı, Paşabahçe ve Çubuklu gibi Boğaz kıyısı mahallelerinde nesiller boyu aynı ailede kalmış evler, Polonezköy, Riva ve Anadolu Kavağı çevresinde ise bahçe ve arsa niteliğindeki hisseli taşınmazlar bulunur. Bu tür parsellerde yıllardır intikali yapılmamış pay zincirleri olabilir; mirasçı sayısı arttıkça tapu kaydının güncellenmesi ve paylaşım ayrı bir dosya hazırlığı gerektirir.",
    "Beykoz'daki miras uyuşmazlıkları İstanbul Beykoz Adliyesi'nde, veraset ve intikal vergisi işlemleri ise Beykoz Vergi Dairesi Müdürlüğü nezdinde yürütülür. İlçede raylı sistem bulunmadığından belge toplama ve tapu müdürlüğü işlemleri için ulaşım süresinin planlanması pratikte işleri kolaylaştırır.",
  ],
  faqs: [
    { question: "Beykoz'da miras davalarına hangi adliye bakar?", answer: "İlçede İstanbul Beykoz Adliyesi görevlidir; mahkeme türü uyuşmazlığa göre sulh veya asliye hukuk olarak belirlenir." },
    { question: "Yıllardır intikal edilmemiş arsa hissesi nasıl devralınır?", answer: "Önce mirasçılık belgesi alınır, ardından tapu müdürlüğünde intikal yapılır; zincirleme mirasçılık varsa her ölüm için belge gerekebilir." },
    { question: "Bahçeli evi mirasçılardan biri kullanıyorsa diğerleri ne yapabilir?", answer: "Kullanım konusunda uzlaşma aranır; olmazsa ortaklığın giderilmesi davası ya da kullanım bedeli talebi değerlendirilir." },
    { question: "Mirası reddetmek için kaç gün vardır?", answer: "Ölümün öğrenilmesinden itibaren 3 aydır (TMK m.606); bu süre içinde sulh hukuk mahkemesine beyan verilmelidir." },
    { question: "Vasiyetnamede saklı payım aşılmışsa ne yapılır?", answer: "Tenkis davası açılabilir; ihlalin öğrenilme tarihi ve dava süresi birlikte kontrol edilmelidir." },
  ],
  howToTitle: "Beykoz'da Aile Mülkünün Mirasçılara Devri Nasıl Yapılır?",
  howToSteps: [
    { name: "Kayıtların Güncellenmesi", text: "Parsel ve hisse bilgileri tapu kaydından alınır." },
    { name: "Mirasçılık Belgesi", text: "Yasal mirasçıları gösteren belge temin edilir." },
    { name: "Paylaşım Planı", text: "Mirasçılarla arsa veya evin bölüşümü konusunda görüşülür." },
    { name: "İntikal ve Dava", text: "Anlaşma varsa tapu intikali yapılır; yoksa dava hazırlanır." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
