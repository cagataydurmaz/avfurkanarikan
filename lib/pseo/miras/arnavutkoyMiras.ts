import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const arnavutkoyMiras: PseoService = {
  slug: "miras",
  urlSlug: "arnavutkoy-miras-avukati",
  name: "Arnavutköy Miras Avukatı",
  heroTitle: "Arnavutköy Miras Avukatı",
  heroSubtitle:
    "İstanbul Havalimanı'nın sınırları içinde yer aldığı, Taşoluk'tan Durusu'na uzanan geniş Arnavutköy'de veraset ilamı, saklı pay ve tenkis, mirasın reddi ve ortaklığın giderilmesi konularında danışmanlık ve dava takibi sunulur; ilçe İstanbul Gaziosmanpaşa Adliyesi'nin yargı çevresindedir.",
  metaTitle: "Arnavutköy Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Arnavutköy'de veraset ilamı, saklı pay ve tenkis, mirasın reddi, muris muvazaası ve ortaklığın giderilmesi konularında avukatlık hizmeti verilmektedir.",
  aboutParagraph:
    "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Büro Beşiktaş/Sinanpaşa'dadır, Arnavutköy'de bulunmaz. Arnavutköy Merkez, Bolluca, Taşoluk ve Hadımköy gibi yerleşik mahalleler ile Durusu, Karaburun ve Boğazköy gibi kırsal karakterli mahalleleri bir arada barındıran ilçede, miras kalan mal varlığı konut, arsa ya da tarla gibi farklı türlerde olabilir; bu nedenle mirasçılık belgesinden taşınmaz paylarının devrine kadar her aşama ayrı bir hukuki değerlendirme gerektirir.",
  highlightCards: [
    { title: "Mirasçılık ve Veraset", description: "Yasal mirasçıların ve payların sulh hukuk mahkemesince belirlenmesi." },
    { title: "Hisseli Taşınmazlar", description: "Birden çok mirasçıya intikal eden arsa ve tarlalarda ortaklığın giderilmesi." },
    { title: "Saklı Pay ve Tenkis", description: "Vasiyet veya bağışlarla ihlal edilen saklı payın geri alınması." },
    { title: "Mirasın Reddi", description: "Borca batık terekede ret beyanının süresinde yapılması." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Veraset ilamı alınması ve mirasçıların tespiti",
    "Tapu müdürlüğünde intikal işlemleri için belge ve yol haritası hazırlanması",
    "Hisseli arsa ve tarlalarda ortaklığın giderilmesi davası",
    "Saklı payın ihlali halinde tenkis davası",
    "Mirasın reddi beyanı ve borçlu terekede mirasçının korunması",
    "Muris muvazaasına dayalı tapu iptal ve tescil davaları",
  ],
  localParagraphs: [
    "Arnavutköy'de miras bırakanın son yerleşim yeri ilçedeyse, veraset ilamı, mirasın reddi ve terekenin tespiti gibi sulh hukuk işleri ile tenkis ya da muris muvazaası gibi asliye hukuk davaları İstanbul Gaziosmanpaşa Adliyesi'nde görülür; taşınmazın aidiyetine ilişkin tapu iptal davalarında ise kesin yetki taşınmazın bulunduğu yer mahkemesindedir.",
    "Durusu, Karaburun ve Boğazköy gibi kırsal mahallelerdeki arazilerde payların mirasçılar arasında bölünmesi, ortak mülkiyet hâlinde kalan taşınmazlar bakımından ortaklığın giderilmesi seçeneğini gündeme getirebilir. Vergisel yükümlülükler bakımından ise Arnavutköy Mal Müdürlüğü ile yazışma gerekir; beyan süreleri ve tutarlar için güncel mevzuatın ayrıca kontrol edilmesi önerilir.",
  ],
  faqs: [
    { question: "Havalimanı çevresinde veya kırsal mahallede kalan arsa için mirasçılık belgesi nasıl alınır?", answer: "Taşınmazın konumundan bağımsız olarak mirasçılık belgesi sulh hukuk mahkemesinden veya noterden alınır; tapu müdürlüğü bu belge ile intikal işlemini yürütür." },
    { question: "Tarla hissesini satmak isteyen ama diğer mirasçılar kabul etmeyen mirasçı ne yapabilir?", answer: "Paydaşlar anlaşamazsa sulh hukuk mahkemesinde ortaklığın giderilmesi davası açılabilir; mahkeme taşınmazın aynen taksimi veya satışı yönünde karar verir." },
    { question: "Arnavutköy'de yaşayan miras bırakanın davası hangi adliyede açılır?", answer: "Yetki, miras bırakanın son yerleşim yerine göre belirlenir; Arnavutköy'de ise dosya İstanbul Gaziosmanpaşa Adliyesi'ne bağlı olarak yürütülür." },
    { question: "Tenkis davasında hangi süreler dikkate alınır?", answer: "Tenkis davasının hak düşürücü süreleri Türk Medeni Kanunu'nda düzenlenmiştir; sürenin başlangıcı somut olaya göre değiştiği için dosya incelenmeden tarih verilmez." },
    { question: "Mirası kabul etmeden önce borç araştırması yapılabilir mi?", answer: "Evet, mirasçı ret süresi dolmadan terekenin aktif ve pasifini araştırabilir; borç ağır basıyorsa ret beyanı değerlendirilebilir." },
  ],
  howToTitle: "Arnavutköy'de Miras İşlemlerine Nereden Başlanır?",
  howToSteps: [
    { name: "Belgelerin Toplanması", text: "Ölüm belgesi, nüfus kayıtları ve tapu kayıtları derlenir." },
    { name: "Mirasçılık Belgesi", text: "Mirasçı kimlerse onlar ve payları belgeyle ortaya konur." },
    { name: "Taşınmaz Durumu", text: "Hisseli arazi varsa devir, taksim veya ortaklığın giderilmesi seçenekleri değerlendirilir." },
    { name: "Dava veya Anlaşma", text: "Uyuşmazlık varsa Gaziosmanpaşa Adliyesi'nde dava açılır, yoksa taksim sözleşmesi yapılır." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
