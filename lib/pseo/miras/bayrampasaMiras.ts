import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const bayrampasaMiras: PseoService = {
  slug: "miras",
  urlSlug: "bayrampasa-miras-avukati",
  name: "Bayrampaşa Miras Avukatı",
  heroTitle: "Bayrampaşa Miras Avukatı",
  heroSubtitle:
    "Eski apartman dairelerinin ve aile arsalarının mirasçılar arasında devri sırasında veraset, saklı pay, tenkis ve ortaklığın giderilmesi konularında hukuki destek sunulur; yetkili adliye İstanbul (Çağlayan) Adliyesi'dir.",
  metaTitle: "Bayrampaşa Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Bayrampaşa'da veraset ilamı, saklı pay, tenkis, muris muvazaası ve ortaklığın giderilmesi davalarında hukuki danışmanlık ve temsil sağlanmaktadır.",
  aboutParagraph:
    "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Bayrampaşa'daki mirasçılara tereke tespiti, mirasçılık belgesi, miras paylaşımı ve vasiyetname uyuşmazlıklarında danışmanlık ve dava takibi hizmeti verir.",
  highlightCards: [
    { title: "Mirasçılık Belgesi", description: "Zümrelere göre yasal mirasçıların ve payların belirlenmesi." },
    { title: "Tereke Tespiti", description: "Taşınmaz, hesap ve borçların bir arada incelenmesi." },
    { title: "Muris Muvazaası", description: "Gerçek devri gizleyen satış görünümlü işlemlerin incelenmesi." },
    { title: "Hisseli Taşınmazlar", description: "Çok mirasçılı dairelerde taksim ve satış seçenekleri." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Mirasçılık belgesi alınması ve mirasçıların payının hesabı",
    "Terekenin tespiti ve mirasın reddi süreçleri",
    "Muris muvazaasına dayalı tapu iptal ve tescil davaları",
    "Saklı pay ihlalinde tenkis davası",
    "Hisseli taşınmazlarda ortaklığın giderilmesi davası",
    "Miras taksim sözleşmesinin hazırlanması",
  ],
  localParagraphs: [
    "Yenidoğan, Muratpaşa, Kocatepe ve Altıntepsi gibi mahallelerde yıllar içinde el değiştirmiş veya aileden kalmış apartman daireleri, miras uyuşmazlıklarına konu olan taşınmazların başında gelebilir. Ebeveynin sağlığında çocuklardan birine satış göstererek yaptığı devirler, diğer mirasçılar tarafından muris muvazaası iddiasıyla tapu iptal ve tescil davasına taşınabilir; bu tür dosyalarda tapu devir tarihçesinin ve satış bedelinin birlikte incelenmesi gerekir.",
    "Bayrampaşa'daki miras davaları İstanbul (Çağlayan) Adliyesi'ndeki sulh hukuk ve asliye hukuk mahkemelerinde görülür. Mirasın reddi, tereke tespiti ve ortaklığın giderilmesi sulh hukuk mahkemesinin; tenkis ve muris muvazaası davaları ise asliye hukuk mahkemesinin görev alanındadır.",
  ],
  faqs: [
    { question: "Bayrampaşa'daki mirasçılar hangi adliyeye başvurur?", answer: "İlçe İstanbul (Çağlayan) Adliyesi'ne bağlıdır; veraset ve ret işlemleri için sulh hukuk mahkemesi esas alınır." },
    { question: "Babamın sağlığında bir kardeşime yapılan satış iptal ettirilebilir mi?", answer: "Satış gerçekte bağış niteliğindeyse muris muvazaası iddiasıyla tapu iptal ve tescil davası açılabilir; dosyada bedel ve ödeme belgeleri incelenir." },
    { question: "Hissedarlardan biri anlaşmaya yanaşmıyorsa ne olur?", answer: "Ortaklığın giderilmesi davasında mahkeme taşınmazın aynen bölünmesine ya da açık artırmayla satılmasına karar verebilir." },
    { question: "Vasiyetname tek başına geçerli olur mu?", answer: "Resmi, el yazılı veya sözlü biçimlerden birine uygun düzenlenmesi gerekir; saklı payları aşan kısım tenkise tabi olabilir." },
    { question: "Terekede borç çıkarsa mirasçılar ne yapabilir?", answer: "Mirasın reddi hakkı süre içinde kullanılabilir; bu nedenle terekenin erken aşamada ayrıntılı dökümü çıkarılır." },
  ],
  howToTitle: "Bayrampaşa'da Hisseli Daire Mirasında İzlenecek Adımlar",
  howToSteps: [
    { name: "Tapu Kaydı Çıkarımı", text: "Dairenin güncel tapu kaydı, hisseler ve şerhler alınır." },
    { name: "Mirasçı Listesinin Kesinleşmesi", text: "Veraset belgesiyle hak sahipleri netleştirilir." },
    { name: "Uzlaşma Girişimi", text: "Satış, devir ya da bedel paylaşımı için mirasçılarla görüşülür." },
    { name: "Mahkeme Yolu", text: "Uzlaşma olmazsa ortaklığın giderilmesi davası açılır." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
