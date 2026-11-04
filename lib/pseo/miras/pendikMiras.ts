import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const pendikMiras: PseoService = {
  slug: "miras",
  urlSlug: "pendik-miras-avukati",
  name: "Pendik Miras Avukatı",
  heroTitle: "Pendik Miras Avukatı",
  heroSubtitle:
    "Pendik'te mirasçılık belgesi, saklı pay, tenkis, mirasın reddi ve paylaşım uyuşmazlıklarında hukuki destek sağlanır; ilçenin kendi adliyesi 2013'te kapandığından dosyalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
  metaTitle: "Pendik Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Pendik'te veraset ilamı, saklı pay, tenkis davası, mirasın reddi ve miras paylaşımı konularında hukuki danışmanlık ve dava takibi hizmeti verilmektedir.",
  aboutParagraph:
    "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Pendik'teki mirasçılara; terekenin tespiti, mirasçılık belgesi, vasiyetname incelemesi ve paylaşım davalarında danışmanlık verir. Büro Beşiktaş/Sinanpaşa'da bulunmaktadır ve Pendik'te ofis yoktur; randevu WhatsApp veya telefonla ayarlanır.",
  highlightCards: [
    { title: "Mirasçılık Belgesi", description: "Zümrelere göre mirasçıların ve miras paylarının resmen belirlenmesi." },
    { title: "Saklı Pay Koruması", description: "Bağış veya vasiyetle aşılan saklı payın tenkis davasıyla geri alınması." },
    { title: "Geniş Yüzölçümlü Mirasçı Payları", description: "Kurtköy, Yayalar ve Çınardere gibi mahallelerdeki arsa ve tarla paylarının düzenlenmesi." },
    { title: "Aile İşletmeleri", description: "Sanayi sitelerindeki iş yeri ve dükkân paylarının mirasçılar arasında bölüşülmesi." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Mirasçılık belgesi (veraset ilamı) alınması ve mirasçıların tespiti",
    "Saklı pay ihlalinde tenkis davası açılması",
    "Mirasın reddi veya borca batık tereke değerlendirmesi",
    "El yazılı ve resmi vasiyetname düzenleme danışmanlığı",
    "Muris muvazaası iddiasıyla tapu iptali ve tescil davaları",
    "Arsa, dükkân ve daire paylarında taksim sözleşmesi ve ortaklığın giderilmesi",
  ],
  localParagraphs: [
    "Pendik, Marmara kıyısından Kurtköy ve Sabiha Gökçen Havalimanı çevresine uzanan geniş yüzölçümüyle, miras dosyalarında konut kadar arsa, tarla ve iş yeri paylarının da konuşulduğu bir ilçedir. Kaynarca, Güzelyalı ve Yenişehir'deki daireler yanında Kurtköy, Yayalar ve Çınardere gibi mahallelerde yıllar içinde mirasçılara kalan tapu payları, çoğu kez kimin hangi payı alacağı ve taşınmazın nasıl değerleneceği sorularını doğurur.",
    "Pendik'in kendi adliyesi 2013'te İstanbul Anadolu Adalet Sarayı'nın açılmasıyla kapandığından, ilçedeki mirasçılar veraset, tenkis, tapu iptali ve ortaklığın giderilmesi davaları için Kartal'a başvurur. Sanayi sitelerindeki iş yeri veya dükkân payı miras kalmışsa, tapu intikali ile birlikte Pendik Vergi Dairesi Müdürlüğü nezdindeki veraset ve intikal vergisi yükümlülüğü de ayrıca değerlendirilir.",
  ],
  faqs: [
    { question: "Pendik'te miras davası açmak için hangi adliyeye gidilir?", answer: "Pendik'in adliyesi kapatıldığından davalar Kartal'daki İstanbul Anadolu Adliyesi'nde, görevli sulh veya asliye hukuk mahkemesinde açılır." },
    { question: "Birden fazla mirasçı arasında tarla veya arsa nasıl bölüştürülür?", answer: "Mirasçılar taksim sözleşmesiyle anlaşabilir; anlaşma sağlanamazsa ortaklığın giderilmesi davasında taşınmaz aynen bölünür ya da satılarak bedeli paylaştırılır." },
    { question: "Vasiyetname ile saklı payım azaltıldıysa hangi yola başvurabilirim?", answer: "Saklı pay mirasçısı olarak tenkis davası açabilirsiniz; hak düşürücü süre bulunduğundan gecikmeden hukuki destek alınması önerilir." },
    { question: "Sanayi sitesindeki iş yeri payı miras kalırsa ne yapılır?", answer: "Önce veraset ilamı alınır, ardından tapuda intikal yapılır; payların işletilmesi veya devri için mirasçılar arasında ayrıca sözleşme düzenlenebilir." },
    { question: "Pendik'te yüz yüze görüşme zorunlu mu?", answer: "Hayır, ilk değerlendirme çevrim içi yapılabilir; belgeler dijital olarak paylaşılır." },
  ],
  howToTitle: "Pendik'te Miras İşlemleri Hangi Sırayla Yürür?",
  howToSteps: [
    { name: "Belge Toplama", text: "Ölüm belgesi, nüfus kayıtları ve taşınmaz bilgileri bir araya getirilir." },
    { name: "Veraset Başvurusu", text: "Mirasçıların payları resmen belirlenir." },
    { name: "Karar Aşaması", text: "Miras kabul, ret veya taksim seçenekleri mirasçılarla görüşülür." },
    { name: "Resmi İşlemler", text: "Tapu intikali ve gerekirse dava süreci başlatılır." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
