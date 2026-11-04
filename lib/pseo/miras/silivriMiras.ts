import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const silivriMiras: PseoService = {
  slug: "miras",
  urlSlug: "silivri-miras-avukati",
  name: "Silivri Miras Avukatı",
  heroTitle: "Silivri Miras Avukatı",
  heroSubtitle:
    "Silivri'de tarla, yazlık ve köy arsası gibi çeşitli taşınmazlardan oluşan terekelerde veraset ilamı, saklı pay, tenkis ve paylaşım uyuşmazlıklarında hukuki destek sağlanır; davalar İstanbul Büyükçekmece Adliyesi'nde görülür.",
  metaTitle: "Silivri Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Silivri'de veraset ilamı, tenkis davası, mirasın reddi ve tarla ile yazlık paylarının paylaşımı konusunda miras hukuku danışmanlığı sunulmaktadır.",
  aboutParagraph:
    "Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır. Silivri'de mirasçılara terekenin belirlenmesi, mirasçılık belgesi, saklı pay ve ortaklığın giderilmesi aşamalarında destek verir. Büro Beşiktaş/Sinanpaşa'dadır; Silivri'de ofis bulunmaz, görüşmeler çevrim içi yapılabilir.",
  highlightCards: [
    { title: "Tarla ve Arsa Payları", description: "Çanta, Bekirli ve Değirmenköy çevresindeki arazi hisselerinin mirasçılar arasında bölüşülmesi." },
    { title: "Sahil Yazlıkları", description: "Selimpaşa ve Gümüşyaka'daki yazlık daire ve villa paylarının paylaşımı." },
    { title: "Eski Hisse Kayıtları", description: "Eski tarihli intikal ve tapu kayıtlarındaki eksikliklerin giderilmesi." },
    { title: "Mirasın Reddi", description: "Kredi ve vergi borçlu terekelerde ret hakkının değerlendirilmesi." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Mirasçılık belgesinin alınması ve eski intikallerin kontrolü",
    "Saklı payı ihlal eden bağış ve vasiyete karşı tenkis davası",
    "Mirasın reddi ve tereke borcu incelemesi",
    "Vasiyetname düzenleme ve iptal süreçleri",
    "Muris muvazaası nedeniyle tapu iptali ve tescil",
    "Tarla, arsa ve yazlık paylarında taksim ve ortaklığın giderilmesi",
  ],
  localParagraphs: [
    "Silivri, yaklaşık 45 kilometrelik Marmara kıyısının yanı sıra Çanta, Bekirli ve Değirmenköy gibi daha kırsal mahallelerdeki tarla ve arsalarla da öne çıkar. Selimpaşa ve Gümüşyaka'daki yazlık siteler, Piri Mehmet Paşa'daki ilçe merkezi konutları ve kırsal tapu payları aynı ailede bir araya gelebildiğinden, tereke genellikle farklı nitelikte taşınmazlardan oluşur ve her biri için ayrı bir paylaşım yöntemi gerekebilir.",
    "Silivri'deki miras davaları İstanbul Büyükçekmece Adliyesi'nde görülür; çekişmesiz işler sulh hukuk, tenkis ve tapu iptali ise asliye hukuk mahkemesindedir. Eski tarihli tapu kayıtlarında mirasçıların intikalinin hiç yapılmadığı durumlar olabilir; bu halde zincirleme veraset incelemesi ve Silivri Vergi Dairesi Müdürlüğü nezdindeki yükümlülüklerin kontrolü gerekir.",
  ],
  faqs: [
    { question: "Silivri'de miras davaları hangi adliyede görülür?", answer: "Silivri dosyaları İstanbul Büyükçekmece Adliyesi'nde, görevli sulh veya asliye hukuk mahkemesinde yürütülür." },
    { question: "Yıllar önce ölen babamın tarlasında intikal yapılmamışsa ne olur?", answer: "Veraset ilamıyla tüm mirasçılar belirlenir ve tapuda intikal yapılır; gerekirse zincirleme birden fazla miras bırakan için ayrı ayrı işlem yapılır." },
    { question: "Yazlık dairede kardeşlerle ortak olduk, kullanım nasıl düzenlenir?", answer: "Taksim sözleşmesiyle kullanım ya da devir düzenlenebilir; anlaşma sağlanamazsa ortaklığın giderilmesi davası açılabilir." },
    { question: "Muris sağlığında tapuyu sattı gibi gösterdiyse ne yapılabilir?", answer: "Gerçek amaç mirasçılardan mal kaçırmaksa muris muvazaasına dayalı tapu iptali ve tescil davası değerlendirilir." },
    { question: "Silivri'den büroya ulaşım gerekli mi?", answer: "Zorunlu değildir; belgeler dijital iletilebilir, görüşme çevrim içi yapılabilir." },
  ],
  howToTitle: "Silivri'de Tereke Uyuşmazlığı Nasıl Ele Alınır?",
  howToSteps: [
    { name: "Tapu Kaydı İncelemesi", text: "Taşınmazların güncel tapu ve intikal durumu kontrol edilir." },
    { name: "Mirasçı Listesi", text: "Veraset ilamıyla yasal mirasçılar kesinleştirilir." },
    { name: "Paylaşım Seçenekleri", text: "Aynen bölüşüm, devir veya satış seçenekleri karşılaştırılır." },
    { name: "Başvuru ve Takip", text: "Anlaşma tescil edilir ya da mahkemede dava yürütülür." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
