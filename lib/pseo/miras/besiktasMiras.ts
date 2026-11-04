import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const besiktasMiras: PseoService = {
  slug: "miras",
  urlSlug: "besiktas-miras-avukati",
  name: "Beşiktaş Miras Avukatı",
  heroTitle: "Beşiktaş Miras Avukatı",
  heroSubtitle:
    "Büronun bulunduğu ofis ilçesi Beşiktaş'ta veraset ilamı, saklı pay, tenkis, vasiyetname ve miras paylaşımı konularında yüz yüze veya çevrim içi danışmanlık verilir; davalar İstanbul (Çağlayan) Adliyesi'nde görülür.",
  metaTitle: "Beşiktaş Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Beşiktaş'ta veraset ilamı, mirasın reddi, saklı pay, tenkis, vasiyetname ve miras paylaşımı uyuşmazlıklarında hukuki danışmanlık ve temsil sunulmaktadır.",
  aboutParagraph:
    "Furkan Arıkan, İstanbul Barosu'na kayıtlı (Sicil No: 72621) bir avukat olup 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Büro Beşiktaş/Sinanpaşa'dadır; ofis ilçesi olan Beşiktaş'ta miras hukuku kapsamında mirasçılık, saklı pay, vasiyetname ve taksim konularında danışmanlık ve dava takibi hizmeti sunulur.",
  highlightCards: [
    { title: "Veraset ve Mirasçılık", description: "Zümreler, eş payı ve mirasçılık belgesi işlemleri." },
    { title: "Vasiyetname", description: "Düzenleme, geçerlilik ve iptal değerlendirmeleri." },
    { title: "Saklı Pay ve Tenkis", description: "Bağış ve vasiyetlerin saklı payı aşan kısmının incelenmesi." },
    { title: "Değerli Taşınmazlar", description: "Yüksek bedelli konut ve yalı hisselerinin paylaşımı." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Veraset ilamı alınması ve payların hesaplanması",
    "Vasiyetname düzenlenmesi ve vasiyetnamenin iptali davaları",
    "Saklı pay ihlalinde tenkis davası",
    "Mirasın reddi ve tereke tespiti işlemleri",
    "Ortaklığın giderilmesi davaları",
    "Miras taksim sözleşmesi ve tapuda intikal desteği",
  ],
  localParagraphs: [
    "Bebek, Arnavutköy, Kuruçeşme ve Ortaköy gibi Boğaz kıyısındaki mahallelerde köklü ailelerin elinde kalan konak, yalı veya apartman hisseleri, miras paylaşımında bedel hesabı ve kullanım düzeni açısından özel bir değerlendirme gerektirebilir. Etiler, Levent ve Gayrettepe tarafında ise birden fazla mirasçıya kalan konut ve iş yeri hisselerinde taksim ya da satış yöntemi mirasçılar arasında anlaşmazlık yaratabilir.",
    "Beşiktaş ofis ilçesi olduğundan mirasçılarla görüşmeler büroda yüz yüze yapılabilir; ilçedeki uyuşmazlıklara ise İstanbul (Çağlayan) Adliyesi'ndeki sulh hukuk ve asliye hukuk mahkemelerinde bakılır. Veraset ve intikal vergisi bildirimleri Beşiktaş Vergi Dairesi Müdürlüğü kapsamında takip edilir.",
  ],
  faqs: [
    { question: "Beşiktaş'ta miras işlemleri için büroya gelinebilir mi?", answer: "Evet, büro Beşiktaş/Sinanpaşa'dadır; görüşmeler randevuyla yüz yüze veya çevrim içi planlanabilir." },
    { question: "Veraset ilamında eşin payı nasıl belirlenir?", answer: "Eş, birlikte miras bıraktığı zümreye göre pay alır; birinci zümre ile dörtte bir, ikinci zümre ile yarı, üçüncü zümre ile dörtte üç oranı geçerlidir." },
    { question: "Yalı veya konak hissesi mirasçılar arasında nasıl paylaşılır?", answer: "Uzlaşma varsa taksim sözleşmesi yapılır; yoksa ortaklığın giderilmesi davasıyla satış veya aynen bölünme talep edilir." },
    { question: "El yazılı vasiyetname geçerli olur mu?", answer: "Baştan sona miras bırakanın el yazısıyla yazılmış, tarihlenmiş ve imzalanmış olması gerekir." },
    { question: "Tenkis davası hangi mahkemede açılır?", answer: "Asliye hukuk mahkemesinde açılır; süre ve talep sınırı için dosya erken incelenmelidir." },
  ],
  howToTitle: "Beşiktaş'ta Miras Danışmanlığı Nasıl İlerler?",
  howToSteps: [
    { name: "Belge Toplanması", text: "Ölüm belgesi, nüfus kayıtları ve tapu bilgileri bir araya getirilir." },
    { name: "Hak Analizi", text: "Yasal pay, saklı pay ve varsa vasiyet birlikte değerlendirilir." },
    { name: "Strateji Belirleme", text: "Uzlaşma, ret ya da dava seçeneği netleştirilir." },
    { name: "Resmi İşlemler", text: "Mahkeme, tapu ve vergi dairesi aşamaları yürütülür." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
