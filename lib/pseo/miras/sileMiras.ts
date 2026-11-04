import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const sileMiras: PseoService = {
  slug: "miras",
  urlSlug: "sile-miras-avukati",
  name: "Şile Miras Avukatı",
  heroTitle: "Şile Miras Avukatı",
  heroSubtitle:
    "Şile'de yazlık, arsa ve tarla gibi taşınmazlar bırakan terekelerde mirasçılık belgesi, saklı pay, mirasın reddi ve paylaşım uyuşmazlıklarında hukuki destek sağlanır.",
  metaTitle: "Şile Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Şile'de yazlık ve arsa içeren terekelerde veraset ilamı, tenkis, mirasın reddi, muris muvazaası ve ortaklığın giderilmesi için hukuki destek sunulur.",
  aboutParagraph:
    "İstanbul Barosu'nda 72621 sicil numarasıyla kayıtlı olan Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Şile'deki mirasçılara, taşınmaz ağırlıklı terekelerde mirasçılık belgesi, paylaşım ve tenkis konularında danışmanlık verir. Büro Beşiktaş/Sinanpaşa'dadır, Şile'de ofis yoktur; görüşmeler telefon veya WhatsApp üzerinden planlanır.",
  highlightCards: [
    { title: "Yazlık ve Arsa Terekeleri", description: "Mevsimlik kullanılan taşınmazların mirasçılar arasında paylaştırılması." },
    { title: "Mirasçılık Belgesi", description: "Mirasçıların ve pay oranlarının sulh mahkemesi veya noterce belgelenmesi." },
    { title: "Muris Muvazaası", description: "Mal kaçırma amaçlı görünürdeki satışlara karşı tapu iptali ve tescil." },
    { title: "Ret ve Saklı Pay", description: "Borçlu terekede ret hakkı ile saklı payı koruyan tenkis yolu." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Mirasçılık belgesi ve taşınmaz intikaline hazırlık",
    "Yazlık ve arsa paylaşımında taksim sözleşmesi hazırlanması",
    "Satış görünümlü devirlere karşı muris muvazaası davası",
    "Saklı payın zedelendiği hallerde tenkis davası",
    "Mirasın reddi beyanı ve borçlu terekede mirasçının korunması",
    "Hisseli tarla ve arsalarda ortaklığın giderilmesi davası",
  ],
  localParagraphs: [
    "Şile'de Ağva, Kumbaba, Kabakoz veya Hacıkasım gibi yerleşimlerde yazlık konutlar, arsalar ve tarım arazileri bir arada bulunur. Bu taşınmazlar çoğu zaman mirasçıların yalnızca yaz aylarında kullandığı mallar olduğundan, kimin hangi hisseye sahip olduğu, kimin masrafları karşıladığı ve satışın kimin onayıyla yapılacağı konusunda uyuşmazlıklar doğabilir. Terekede tapu kaydı, imar durumu ve kıyı ile orman sınırları ayrıca incelenmelidir.",
    "Şile Adliyesi, İstanbul Anadolu Adliyesi'ne bağlı mülhakat adliyelerden biridir; hangi mahkemenin görevli ve yetkili olduğu dosyanın türüne göre ayrıca belirlenir. İlçeye metro ulaşımı bulunmaz, Şile Yolu üzerinden karayoluyla gidilir; bu nedenle belge toplama, imza ve duruşma planı önceden yapılmalıdır. Tapu işlemleri için ilgili tapu müdürlüğüne mirasçılık belgesiyle başvurulur.",
  ],
  faqs: [
    { question: "Şile'deki yazlık mirasçılar arasında nasıl paylaşılır?", answer: "Mirasçılar yazılı taksim sözleşmesiyle anlaşabilir; taşınmaz varsa sözleşme resmî şekilde yapılır. Anlaşma olmazsa ortaklığın giderilmesi davası açılabilir." },
    { question: "Yazlık ölümünden önce çocuklardan birine satılmışsa itiraz edilebilir mi?", answer: "Satışın gerçekte bağış olduğu veya mirasçıdan mal kaçırmak amacıyla yapıldığı iddia ediliyorsa muris muvazaası davası değerlendirilir; bu dava asliye hukuk mahkemesinde görülür." },
    { question: "Şile'de mirasçılık belgesi için hangi yol izlenir?", answer: "Mirasçılık belgesi sulh mahkemesinden veya noterden alınabilir (TMK m.598). Belgeyle tapu müdürlüğünde intikal işlemi başlatılır." },
    { question: "Borçlu bir kişinin mirasını reddetmek için ne yapmalıyım?", answer: "Ret beyanı sulh (hukuk) mahkemesine yapılır (TMK m.609); yasal mirasçı için üç aylık süre ölümün öğrenilmesinden başlar (TMK m.606). Süre içinde ret edilmezse hak düşer." },
    { question: "Ret süresini kaçıran mirasçı için bir imkân var mı?", answer: "Önemli sebep bulunuyorsa sulh hâkimi süreyi uzatabilir veya yeni süre verebilir (TMK m.615). Önemli sebebin varlığı olayın koşullarına göre mahkemece değerlendirilir." },
  ],
  howToTitle: "Şile'de Yazlık Taşınmazın Tereke İçindeki Durumu Nasıl Belirlenir?",
  howToSteps: [
    { name: "Tapu Kaydının Alınması", text: "Taşınmazın güncel tapu kaydı, hisse oranları ve şerhleri temin edilir." },
    { name: "Mirasçıların Tespiti", text: "Mirasçılık belgesiyle hangi kişilerin hangi oranda hak sahibi olduğu belirlenir." },
    { name: "Fiili Durumun İncelenmesi", text: "Kullanım biçimi, masraflar ve varsa kira geliri belgelerle ortaya konur." },
    { name: "Paylaşım Yolunun Seçilmesi", text: "Uzlaşma mümkünse taksim sözleşmesi, değilse dava dilekçesi hazırlanır." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi", "mirasin-reddi-nasil-yapilir"],
};
