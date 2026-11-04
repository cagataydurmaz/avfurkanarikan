import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const bagcilarMiras: PseoService = {
  slug: "miras",
  urlSlug: "bagcilar-miras-avukati",
  name: "Bağcılar Miras Avukatı",
  heroTitle: "Bağcılar Miras Avukatı",
  heroSubtitle:
    "Demirkapı, Kirazlı ve Mahmutbey gibi mahallelerde çok katlı apartman dokusunun hâkim olduğu Bağcılar'da, aile içinde kalan dairelerin intikali, saklı pay ve tenkis, mirasın reddi ve ortaklığın giderilmesi süreçlerinde danışmanlık yapılır; ilçe İstanbul Bakırköy Adliyesi'nin yargı çevresindedir.",
  metaTitle: "Bağcılar Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Bağcılar'da veraset ilamı, saklı pay ve tenkis, mirasın reddi, tereke tespiti ve ortaklığın giderilmesi konularında avukatlık hizmeti verilmektedir.",
  aboutParagraph:
    "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Büro Beşiktaş/Sinanpaşa'dadır, Bağcılar'da değildir. Bağlar, Kemalpaşa, Fevzi Çakmak ve Göztepe gibi mahallelerde mirasa konu olan varlıklar sıklıkla bir veya birkaç apartman dairesi, bir ticari birim ve banka hesaplarından oluşabilir; bu çerçevede mirasın paylaştırılması, tenkis ve mirasın reddi gibi başlıklarda sistematik bir yol haritası çıkarılır.",
  highlightCards: [
    { title: "Apartman Daireleri", description: "Mirasçılar arasında dairelerin intikali, devri veya satışı için planlama." },
    { title: "Ticari Birimler", description: "Alt kat dükkan ve işyerlerinin miras paylarına bölünmesi." },
    { title: "Tereke Tespiti", description: "Mirasbırakanın malvarlığının resmi olarak belirlenmesi talebi." },
    { title: "Mirasın Reddi", description: "Borcu fazla terekede ret süresinin kaçırılmaması." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Mirasçılık belgesi alınması ve pay hesabı",
    "Tapu intikali öncesi gerekli belgelerin düzenlenmesi",
    "Tereke tespiti ve mal varlığının belirlenmesi talepleri",
    "Ortaklığın giderilmesi davası ile dairelerin satışı veya taksimi",
    "Saklı pay ihlalinde tenkis davası",
    "Mirasın reddi beyanı ve sonrasında yapılacak işlemler",
  ],
  localParagraphs: [
    "Bağcılar'daki mirasçılık belgesi, mirasın reddi, tereke tespiti ve ortaklığın giderilmesi gibi sulh hukuk işleri ile tenkis ve muris muvazaası gibi asliye hukuk davaları, miras bırakanın yerleşim yerine göre İstanbul Bakırköy Adliyesi'nde görülür. Taşınmaz kaydı bulunan miraslarda tapu müdürlüğü, mirasçılık belgesiyle intikal işlemini yürütür.",
    "Yenimahalle, Demirkapı, Kirazlı ve Bağlar gibi mahallelerdeki dairelerin birden fazla mirasçıya kalması hâlinde, kimin dairede oturacağı veya satış sonrası payın nasıl dağıtılacağı gündeme gelir. Vergi tarafında Bağcılar Mal Müdürlüğü ile işlem yapılacağından, veraset vergisi beyanı ve süreleri güncel mevzuattan ayrıca doğrulanmalıdır.",
  ],
  faqs: [
    { question: "Dört kardeşin ortak olduğu daireyi içlerinden biri kullanıyorsa diğerleri ne talep edebilir?", answer: "Anlaşma yoksa ortaklığın giderilmesi davası açılabilir; ayrıca kullanım karşılığı olarak ecrimisil talebi değerlendirilebilir." },
    { question: "Mirasbırakanın dükkan kirası kime gider?", answer: "Kira alacağı da terekeye dahildir ve ölüm anından itibaren mirasçılar arasında paylarına göre paylaşılır." },
    { question: "Bakırköy Adliyesi'ne başvuru için ilçe nüfus kaydı şart mı?", answer: "Yetkinin belirlenmesinde miras bırakanın son yerleşim yeri esas alınır; nüfus ve adres kayıtları buna göre incelenir." },
    { question: "Tereke tespiti neden istenir?", answer: "Mal varlığı belirsiz olduğunda veya mirasçılardan biri bilgi vermiyorsa terekenin resmi olarak tespit edilmesi talep edilebilir." },
    { question: "Borç ve alacakların mirasçılara geçişi nasıl olur?", answer: "Mirasçılar mirası kabul ederse hak ve borçların tamamı paylarına göre geçer; reddederlerse borçlardan sorumlu olmazlar." },
  ],
  howToTitle: "Bağcılar'da Apartman Daireli Bir Mirasın Paylaşımı Nasıl İlerler?",
  howToSteps: [
    { name: "Kayıtların Toplanması", text: "Tapu, kira sözleşmeleri ve banka hesapları bir arada çıkarılır." },
    { name: "Mirasçı ve Pay Tespiti", text: "Veraset belgesiyle kimlerin hangi payla mirasçı olduğu belirlenir." },
    { name: "Paylaşım Görüşmesi", text: "Daire kimde kalacak, satılacak mı ve nasıl denkleştirilecek konuşulur." },
    { name: "Bakırköy Adliyesi Yolu", text: "Uzlaşma olmazsa Bakırköy'de ortaklığın giderilmesi veya ilgili dava açılır." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
