import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const sariyerMiras: PseoService = {
  slug: "miras",
  urlSlug: "sariyer-miras-avukati",
  name: "Sarıyer Miras Avukatı",
  heroTitle: "Sarıyer Miras Avukatı",
  heroSubtitle:
    "Sarıyer'de Boğaz kıyısındaki köklü aile mülklerinden Maslak'taki iş yerlerine uzanan tereke kalemlerinde veraset, saklı pay, tenkis ve paylaşım konularında hukuki destek sağlanır; davalar İstanbul (Çağlayan) Adliyesi'nde görülür.",
  metaTitle: "Sarıyer Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Sarıyer'de veraset ilamı, saklı pay, tenkis, vasiyetname ve miras taksimi konularında Çağlayan Adliyesi'ne yönelik hukuki danışmanlık verilmektedir.",
  aboutParagraph:
    "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Sarıyer'deki mirasçılara, çok sayıda payı ve farklı nitelikte varlığı bulunan terekelerde mirasçılık, saklı pay ve paylaşım konularında danışmanlık yapar. Büro Beşiktaş/Sinanpaşa'dadır; Sarıyer'de ofis bulunmamaktadır.",
  highlightCards: [
    { title: "Boğaz Mahallelerinde Aile Mülkü", description: "Yeniköy, Tarabya ve Emirgan gibi mahallelerde nesilden nesile geçen taşınmazların intikali." },
    { title: "Orman Kenarı Konutlar", description: "Bahçeköy ve Kilyos'taki müstakil ev ve yazlık payları için taksim planı." },
    { title: "Saklı Pay Denetimi", description: "Hayattayken yapılan bağışların saklı payı aşıp aşmadığının incelenmesi." },
    { title: "Vasiyetname Danışmanlığı", description: "Geçerli biçimde vasiyet düzenlenmesi ve mevcut vasiyetin hükümlerinin değerlendirilmesi." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Veraset ilamı ve mirasçılık belgesi alınması",
    "Tenkis davası ve saklı pay hesabı",
    "Mirasın reddi ve tereke borçlarının incelenmesi",
    "Vasiyetname hazırlığı ve vasiyetname iptali davaları",
    "Muris muvazaası ve tapu iptali davaları",
    "Taksim sözleşmesi ve ortaklığın giderilmesi davaları",
  ],
  localParagraphs: [
    "Sarıyer, Rumelihisarı, Yeniköy ve Tarabya'daki Boğaz yalıları ve konutlarından Bahçeköy'ün Belgrad Ormanı kenarındaki müstakil evlerine, Rumelikavağı ve Kilyos'taki yazlıklara kadar farklı özelliklerde taşınmazın bir arada bulunduğu bir ilçedir. Aynı terekede ev, arsa ve ticari paylar bulunabildiği için, mirasçılar arasındaki paylaşımda her kalemin değerleme ve devir yönteminin ayrı ayrı düşünülmesi gerekir.",
    "Sarıyer'in dosyaları İstanbul (Çağlayan) Adliyesi'nde görülür; mirasçılık belgesi gibi çekişmesiz işler sulh hukuk, tenkis ve muris muvazaası davaları ise asliye hukuk mahkemesinde yürütülür. Tapuda intikal sonrasında Sarıyer Vergi Dairesi Müdürlüğü nezdindeki veraset ve intikal vergisi yükümlülüğü de ayrıca incelenmesi gereken bir başlıktır.",
  ],
  faqs: [
    { question: "Sarıyer'de miras davası hangi adliyede açılır?", answer: "Sarıyer dosyaları İstanbul (Çağlayan) Adliyesi'nde, ilgili sulh veya asliye hukuk mahkemesinde görülür." },
    { question: "Birden fazla taşınmazı olan mirası kardeşler arasında nasıl bölüşebiliriz?", answer: "Taksim sözleşmesiyle her taşınmaz bir mirasçıya verilebilir ve denkleştirme yapılabilir; anlaşma olmazsa ortaklığın giderilmesi davası açılabilir." },
    { question: "Hayattayken yapılan bağışlar miras payını etkiler mi?", answer: "Evet, saklı payı aşan karşılıksız kazandırmalar tenkis davasıyla düzeltilebilir." },
    { question: "Vasiyetnamede yeni bir düzenleme yapmak istersem?", answer: "Resmi vasiyetname noterde, el yazılı vasiyetname ise tamamen miras bırakanın el yazısıyla ve tarihli olarak düzenlenir; biçim eksikliği geçersizlik doğurabilir." },
    { question: "Sarıyer'de görüşme için ilçeye gelmek gerekir mi?", answer: "Hayır, görüşme Beşiktaş'taki büroda ya da çevrim içi yapılabilir." },
  ],
  howToTitle: "Sarıyer'de Terekenin Çözümüne Nasıl Gidilir?",
  howToSteps: [
    { name: "Varlıkların Sınıflandırılması", text: "Konut, arsa ve ticari paylar türlerine göre ayrılır." },
    { name: "Mirasçı Tespiti", text: "Veraset ilamıyla pay oranları kesinleşir." },
    { name: "Pay Dağıtım Planı", text: "Mirasçıların talepleri ve değerleme esasları görüşülür." },
    { name: "Tapu ve Mahkeme İşlemleri", text: "Anlaşma tapuda tescil edilir; anlaşma olmazsa dava açılır." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
