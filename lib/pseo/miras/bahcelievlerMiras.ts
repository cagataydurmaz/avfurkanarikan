import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const bahcelievlerMiras: PseoService = {
  slug: "miras",
  urlSlug: "bahcelievler-miras-avukati",
  name: "Bahçelievler Miras Avukatı",
  heroTitle: "Bahçelievler Miras Avukatı",
  heroSubtitle:
    "Şirinevler, Siyavuşpaşa ve Yenibosna gibi mahallelerle metrobüs hattı boyunca uzanan Bahçelievler'de veraset, vasiyetname, tenkis ve miras taksim işlemlerinde hukuki destek verilir; ilçe İstanbul Bakırköy Adliyesi'nin yargı çevresindedir.",
  metaTitle: "Bahçelievler Miras Avukatı | Veraset",
  metaDescription:
    "Bahçelievler'de veraset ilamı, vasiyetname, saklı pay ve tenkis, muris muvazaası ve miras taksim sözleşmesi konularında avukatlık hizmeti sunulmaktadır.",
  aboutParagraph:
    "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur; büro Bahçelievler'de bulunmaz, Beşiktaş/Sinanpaşa'dadır. Zafer, Kocasinan Merkez, Soğanlı ve Hürriyet gibi mahallelerde bir aile içinde nesiller boyu kalan apartman dairelerinin mirasçılara geçişi, çoğu kez ilk kuşaktan kalan bir taşınmazın üçüncü kuşakta paylaşılması biçiminde karşımıza çıkar; bu hâlde zümre ve pay hesabı titizlik ister.",
  highlightCards: [
    { title: "Kuşaklar Arası İntikal", description: "Ölen mirasçının payının onun mirasçılarına geçtiği zincirleme durumlarda pay analizi." },
    { title: "Vasiyetname Kontrolü", description: "El yazılı veya resmi vasiyetnamenin geçerlilik ve saklı pay açısından incelenmesi." },
    { title: "Muris Muvazaası", description: "Satış görünümlü bağışlara karşı tapu iptal ve tescil seçeneği." },
    { title: "Taksim Sözleşmesi", description: "Mirasçıların paylaşımı yazılı olarak ve gerekirse noterde bağlaması." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Zincirleme intikal bulunan terekelerde mirasçılık belgesi ve pay hesabı",
    "Vasiyetnamenin açılması ve geçerlilik denetimi",
    "Muris muvazaasına dayalı tapu iptal ve tescil davası",
    "Saklı pay ihlaline karşı tenkis davası",
    "Mirasçılar arasında taksim sözleşmesi hazırlanması",
    "Ortaklığın giderilmesi davası ve satış sonrası paylaşım takibi",
  ],
  localParagraphs: [
    "Bahçelievler'de ölen kişinin son yerleşim yeri ilçedeyse, mirasçılık belgesi ve mirasın reddi gibi sulh hukuk işleri ile tenkis ve muris muvazaası gibi asliye hukuk davaları İstanbul Bakırköy Adliyesi'nde görülür. Tapu kaydı bulunan taşınmazlarda ilgili tapu müdürlüğüne intikal için başvurulur.",
    "Siyavuşpaşa, Şirinevler, Yenibosna Merkez ve Çobançeşme gibi mahallelerdeki gayrimenkullerin mirasçılar arasında yeniden dağıtılması sırasında vergi açısından Yenibosna Vergi Dairesi Müdürlüğü ile beyan işlemleri gündeme gelebilir. Süreler ve tutarlar için güncel mevzuat kontrol edilmeden tahmin yürütülmemelidir.",
  ],
  faqs: [
    { question: "Dede adına kayıtlı dairede torunlar mirasçı olabilir mi?", answer: "Altsoy zümresinde, çocuğu ölmüşse onun payı torunlara geçer; bu nedenle önce hangi mirasçının hayatta olduğu belirlenir." },
    { question: "El yazılı vasiyetname tarihsiz ise ne olur?", answer: "Tarih, el yazısı ve imza şart olduğundan eksik olan vasiyetname geçersizlik riski taşır ve iptal davasına konu olabilir." },
    { question: "Mirasçılardan biri tapuda yalnızca kendi adına devri yaptırdıysa ne yapılır?", answer: "Devrin muvazaalı olup olmadığı veya saklı payı ihlal edip etmediği incelenir; buna göre tapu iptal veya tenkis yoluna gidilebilir." },
    { question: "Miras taksim sözleşmesi noter onayı olmadan geçerli olur mu?", answer: "Taşınmaz içeriyorsa resmi şekil gerekir; yalnızca taşınırlar için yazılı sözleşme yeterli olabilir." },
    { question: "Vergi borcu olan terekede mirasçı ne yapabilir?", answer: "Borcun miktarı ve terekenin değeri karşılaştırılarak, ret süresi dolmadan mirasın kabulü veya reddi değerlendirilir." },
  ],
  howToTitle: "Bahçelievler'de Birden Fazla Kuşağa Kalan Miras Nasıl Çözülür?",
  howToSteps: [
    { name: "Aile Ağacının Çıkarılması", text: "Ölen kişi ve onun öncesinde ölen mirasçılar kronolojik olarak sıralanır." },
    { name: "Belge Seti", text: "Nüfus kayıtları, tapu ve varsa vasiyetname hazırlanır." },
    { name: "Pay Dağılımı", text: "Her mirasçıya düşen pay hesaplanır ve ilgili kişilere sunulur." },
    { name: "Bakırköy'de Çözüm", text: "Uzlaşma sağlanamazsa uygun dava Bakırköy Adliyesi'nde açılır." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
