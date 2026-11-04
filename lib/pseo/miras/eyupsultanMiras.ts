import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const eyupsultanMiras: PseoService = {
  slug: "miras",
  urlSlug: "eyupsultan-miras-avukati",
  name: "Eyüpsultan Miras Avukatı",
  heroTitle: "Eyüpsultan Miras Avukatı",
  heroSubtitle:
    "Eyüpsultan'da eski aile evleri, Haliç kıyısı ve Alibeyköy çevresindeki taşınmazların mirasında veraset, tenkis ve paylaşım süreçlerinde destek sağlanır; adliye İstanbul Gaziosmanpaşa Adliyesi'dir.",
  metaTitle: "Eyüpsultan Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Eyüpsultan'da veraset ilamı, eski aile mülkünün paylaşımı, saklı pay, tenkis ve muris muvazaası konularında miras hukuku danışmanlığı verilmektedir.",
  aboutParagraph:
    "Uzun süre aynı ailede kalmış taşınmazlar, mirasçı sayısı arttıkça kayıt ve paylaşım bakımından zorlaşabilir. Eyüpsultan'daki müvekkillere bu alanda danışmanlık veren avukat Furkan Arıkan (İstanbul Barosu, Sicil No: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019), mirasçılık belgesi, taksim ve dava aşamalarında temsil sağlamaktadır.",
  highlightCards: [
    { title: "Eski Aile Evleri", description: "Birkaç kuşaktır hisseli duran müstakil ve eski yapılar." },
    { title: "Tescilli Yapı Mirası", description: "Koruma statüsünün paylaşım ve devir üzerindeki etkisi." },
    { title: "Hisse Satışı Uyuşmazlığı", description: "Paydaşlar arasındaki önalım ve paylaşım anlaşmazlıkları." },
    { title: "Terekenin Tespiti", description: "Varlık ve borçların belirlenmesi, mirasın reddi kararı." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Veraset ilamının alınması ve mirasçı paylarının belirlenmesi",
    "Çok hisseli eski yapılarda intikal ve tescil işlemleri",
    "Tescilli yapılarda paylaşım ve devir konusunda hukuki danışmanlık",
    "Ortaklığın giderilmesi davası ve taksim sözleşmesi",
    "Muris muvazaası ve tenkis davalarının hazırlanması",
    "Mirasın reddi, vasiyetname ve terekenin tespiti",
  ],
  localParagraphs: [
    "Eyüpsultan Merkez, Nişanca, Defterdar ve Silahtarağa gibi Haliç kıyısına yakın mahallelerde yüzyıllık yerleşim dokusu nedeniyle birden fazla kuşağın hisse sahibi olduğu müstakil evler ve küçük apartmanlar bulunabilmektedir. Alibeyköy, Karadolap ve Topçular çevresindeki daha yeni konut stoğunda ise genelde kat mülkiyetli daireler ve işyerleri mirasa konu olur.",
    "İlçe İstanbul Gaziosmanpaşa Adliyesi'nin yargı çevresindedir; veraset ilamı ve ortaklığın giderilmesi davaları sulh hukuk, tenkis ve tapu iptali davaları asliye hukuk mahkemelerinde görülür. Tapu işlemleri için Eyüpsultan Tapu Müdürlüğü, veraset ve intikal vergisi bildirimi için ise Eyüp Mal Müdürlüğü ile iletişime geçilir.",
  ],
  faqs: [
    {
      question: "Büyükanneden kalan eski ev on iki kişiye hisseli, satış nasıl yapılır?",
      answer:
        "Satış için tüm paydaşların birlikte hareket etmesi gerekir. Biri bile onay vermezse paylaşım ancak ortaklığın giderilmesi davası ile sağlanabilir; mahkeme taşınmazın satış yoluyla paylaştırılmasına karar verebilir.",
    },
    {
      question: "Tescilli sayılan bir yapıyı mirasçılar arasında bölüştürmek mümkün mü?",
      answer:
        "Yapının koruma statüsü, fiziki bölünme ve tadilat izinlerini sınırlayabilir. Paylaşım genellikle hisse satışı veya bedel paylaşımı biçiminde kurgulanır; ilgili koruma kurulu mevzuatı ayrıca incelenmelidir.",
    },
    {
      question: "Hissemi dışarıdan birine satarsam diğer mirasçılar itiraz edebilir mi?",
      answer:
        "Paydaşların yasal önalım hakkı bulunabilir. Satışın şartları ve bildirim usulü, önalım hakkının kullanılıp kullanılamayacağını belirler; işlemden önce tapu kaydı ve payların incelenmesi önerilir.",
    },
    {
      question: "Babam tek çocuğuna ev bağışlamış, diğer kardeşler ne yapabilir?",
      answer:
        "Bağış saklı payı aşıyorsa tenkis davası açılabilir. İşlem aslında satış görüntüsü altında yapılmış bir bağışsa muris muvazaası nedeniyle tapu iptali de gündeme gelebilir.",
    },
    {
      question: "Mirası reddetmek ile terekenin resmi tasfiyesi arasındaki fark nedir?",
      answer:
        "Ret, mirasçının terekeyi hiç devralmaması anlamına gelir ve TMK m.606 kapsamında, ölümün öğrenilmesinden başlayan üç ay içinde yapılır. Resmi tasfiye ise mirasçıların talebiyle terekenin mahkeme eliyle tasfiye edilmesidir; bu yol borcun belirsiz olduğu hallerde değerlendirilir.",
    },
  ],
  howToTitle: "Eyüpsultan'da Hisseli Eski Evin Mirasçılar Adına Kaydı",
  howToSteps: [
    { name: "Kayıt Güncelliği", text: "Tapu kaydındaki eski malikler ve ara intikaller tek tek incelenir." },
    { name: "Eksik Veraset", text: "Daha önce intikal yapılmamış mirasçılar için ayrı veraset ilamları alınır." },
    { name: "Koruma Durumu", text: "Yapının tescil ve koruma kurulu kararları yönünden durumu kontrol edilir." },
    { name: "Paylaşım Kararı", text: "Eyüpsultan Tapu Müdürlüğü'nde tescil sonrası taksim veya dava yolu seçilir." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: [
    "miras-sakli-pay-tenkis",
    "vasiyetname-nasil-duzenlenir",
    "muris-muvazaasi-nedir",
    "ortakligin-giderilmesi-davasi",
  ],
};
