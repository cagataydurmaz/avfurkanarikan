import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const beyogluMiras: PseoService = {
  slug: "miras",
  urlSlug: "beyoglu-miras-avukati",
  name: "Beyoğlu Miras Avukatı",
  heroTitle: "Beyoğlu Miras Avukatı",
  heroSubtitle:
    "Tarihi apartmanlar, iş hanları ve çok hisseli ticari birimlerin mirasçılara geçişinde veraset, saklı pay, tenkis ve ortaklığın giderilmesi konularında hukuki destek sunulur; yetkili adliye İstanbul (Çağlayan) Adliyesi'dir.",
  metaTitle: "Beyoğlu Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Beyoğlu'nda veraset ilamı, mirasın reddi, saklı pay, tenkis, hisseli taşınmaz ve ortaklığın giderilmesi konularında hukuki danışmanlık verilmektedir.",
  aboutParagraph:
    "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Beyoğlu'ndaki mirasçılara mirasçılık belgesi, hisseli bina ve dükkan paylaşımı, vasiyetname ve tenkis davalarında danışmanlık ve temsil hizmeti sağlar.",
  highlightCards: [
    { title: "Mirasçılık Belgesi", description: "Yasal mirasçı ve pay oranlarının belgelenmesi." },
    { title: "Hisseli Bina ve Dükkan", description: "Birden çok mirasçılı ticari taşınmazların paylaşımı." },
    { title: "Vasiyetname İncelemesi", description: "Biçim ve ehliyet yönünden geçerlilik kontrolü." },
    { title: "Tenkis ve Muvazaa", description: "Hayattayken yapılan devirlerin mirasçılara etkisi." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Veraset ilamı alınması ve mirasçıların payının hesabı",
    "Vasiyetnamenin iptali ve geçerlilik incelemesi",
    "Saklı pay hesabı ve tenkis davası",
    "Mirasın reddi ve tereke tespiti",
    "Hisseli taşınmazlarda ortaklığın giderilmesi davası",
    "Miras taksim sözleşmesi ve tapuda intikal desteği",
  ],
  localParagraphs: [
    "Cihangir, Asmalımescit ve Kamerhatun, Kasımpaşa ile Sütlüce gibi mahallelerde eski tarihli apartmanlar, iş hanları ve zemin kat dükkanlar çoğu zaman birkaç kuşaktır paylı mülkiyette kalmış olabilir. Hisse sahiplerinin sayısı mirasla birlikte arttıkça kira geliri paylaşımı, yönetim ve satış kararı konusunda ihtilaf çıkabilir; bu durumda önce taksim sözleşmesi, sonuç alınamazsa ortaklığın giderilmesi davası gündeme gelir.",
    "Beyoğlu'ndaki miras davaları İstanbul (Çağlayan) Adliyesi'nde görülür; veraset ve intikal vergisi işlemleri Beyoğlu Vergi Dairesi Müdürlüğü ile ilişkilidir. M2 metro hattı ve füniküler bağlantıları, mirasçıların belge ve randevu işlemleri için ilçeye ulaşımını kolaylaştırır.",
  ],
  faqs: [
    { question: "Beyoğlu'ndaki miras uyuşmazlıkları hangi mahkemelerde görülür?", answer: "İstanbul (Çağlayan) Adliyesi'ndeki sulh hukuk veya asliye hukuk mahkemelerinde görülür; görev dava türüne göre belirlenir." },
    { question: "Hisseli dükkanın kira geliri mirasçılar arasında nasıl bölünür?", answer: "Gelir hisse oranına göre paylaşılır; uyuşmazlık varsa hesap dökümü çıkarılarak hukuki yol değerlendirilir." },
    { question: "Mirasçılardan biri satışa karşı çıkarsa taşınmaz satılabilir mi?", answer: "Ortaklığın giderilmesi davasında mahkeme satış yoluyla ortaklığın giderilmesine karar verebilir." },
    { question: "Mirasın reddi hangi mahkemeye yapılır?", answer: "Sulh hukuk mahkemesine, ölümün öğrenilmesinden itibaren 3 ay içinde beyanda bulunulur (TMK m.606, m.609)." },
    { question: "Vasiyetname sonradan değiştirilebilir mi?", answer: "Miras bırakan sağlığında vasiyetnamesini değiştirebilir ya da geri alabilir; son düzenleme geçerli biçim şartlarını taşımalıdır." },
  ],
  howToTitle: "Beyoğlu'nda Paylı Mülkiyetteki Binalarda Miras Nasıl Yönetilir?",
  howToSteps: [
    { name: "Hisse Dökümü", text: "Tapudaki tüm pay sahipleri ve oranları listelenir." },
    { name: "Mirasçı Tespiti", text: "Her ölüm için mirasçılık belgesi ile güncel pay oluşturulur." },
    { name: "Gelir ve Kullanım Düzeni", text: "Kira ve kullanım konusunda yazılı mutabakat aranır." },
    { name: "Çözüm Yolu", text: "Taksim sözleşmesi ya da ortaklığın giderilmesi davası seçilir." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
