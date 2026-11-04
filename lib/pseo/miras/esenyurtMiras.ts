import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const esenyurtMiras: PseoService = {
  slug: "miras",
  urlSlug: "esenyurt-miras-avukati",
  name: "Esenyurt Miras Avukatı",
  heroTitle: "Esenyurt Miras Avukatı",
  heroSubtitle:
    "Esenyurt'ta site ve apartman dairelerinden oluşan mirasların intikali, saklı pay hesabı ve mirasçılar arası uyuşmazlıklarda hukuki destek sağlanır; adliye İstanbul Büyükçekmece Adliyesi'dir.",
  metaTitle: "Esenyurt Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Esenyurt'ta veraset ilamı, daire mirasının paylaşımı, saklı pay, tenkis ve mirasın reddi gibi konularda miras hukuku danışmanlığı yapılmaktadır.",
  aboutParagraph:
    "Birden fazla mirasçının bulunduğu dosyalarda payların doğru belirlenmesi, sonraki tapu ve paylaşım işlemlerinin temelini oluşturur. Esenyurt'taki müvekkillere danışmanlık veren avukat Furkan Arıkan (İstanbul Barosu, Sicil No: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019), veraset ilamından tapu devrine kadar uzanan süreçte temsil sağlamaktadır.",
  highlightCards: [
    { title: "Site Dairesi Mirası", description: "Aidat ve kat mülkiyeti ilişkileriyle iç içe geçen intikaller." },
    { title: "Mirasçılar Arası Uyuşmazlık", description: "Kardeşler ve eş arasındaki pay anlaşmazlıkları." },
    { title: "Yurt Dışı Bağlantılı Mirasçılar", description: "Başka ülkede yaşayan mirasçıların vekaletle temsili." },
    { title: "Vasiyetname İncelemesi", description: "Geçerlilik ve saklı pay açısından değerlendirme." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Veraset ilamı ve mirasçılık belgesi sürecinin yürütülmesi",
    "Birden fazla mirasçılı dairelerde tapuda hisseli intikal",
    "Eş ile çocuklar arasındaki pay hesaplaması",
    "Tenkis ve vasiyetnamenin iptali davaları",
    "Mirasın reddi ve ret süresinin takibi",
    "Ortaklığın giderilmesi davası ve taksim sözleşmesi",
  ],
  localParagraphs: [
    "Esenyurt'ta Namık Kemal, Cumhuriyet, Talatpaşa ve Güzelyurt gibi mahallelerde site ve çok katlı apartman yapıları yoğun olduğundan, miras kalan taşınmazlar çoğunlukla kat mülkiyetli bağımsız bölüm niteliğindedir. Bu durumda hisseli paylaşımın yanında aidat ve ortak gider borçlarının terekeye etkisi de değerlendirilmelidir.",
    "İlçe İstanbul Büyükçekmece Adliyesi'nin yargı çevresinde bulunur. Veraset ilamı ve ortaklığın giderilmesi sulh hukuk, tenkis ve tapu iptali davaları asliye hukuk mahkemesinde görülür; tapu intikali Esenyurt Tapu Müdürlüğü'nde, vergi bildirimi Esenyurt Vergi Dairesi Müdürlüğü'nde yapılır.",
  ],
  faqs: [
    {
      question: "Eşim vefat etti, çocuklarımızla birlikte miras nasıl paylaşılır?",
      answer:
        "Altsoyla birlikte mirasçı olan sağ kalan eşe yasal olarak mirasın dörtte biri düşer, kalan kısım çocuklar arasında eşit bölünür. Gerçek paylar mal rejimi tasfiyesi sonrasında hesaplandığından önce bu tasfiye değerlendirilir.",
    },
    {
      question: "Yurt dışında yaşayan kardeşim işlemlere nasıl katılır?",
      answer:
        "Konsolosluk veya noter aracılığıyla düzenlenen vekaletname ile temsil edilebilir. Vekaletnamenin tapu ve mahkeme işlemlerini kapsayacak biçimde ve gerekli onaylarla hazırlanması gerekir.",
    },
    {
      question: "Vasiyetnameyle bir yabancıya bırakılan daire için ne yapılabilir?",
      answer:
        "Saklı pay sahibi mirasçılar, saklı payları ihlal edildiyse tenkis davası açabilir. Vasiyetnamenin şekil veya ehliyet yönünden geçersizliği söz konusuysa iptal davası da değerlendirilir.",
    },
    {
      question: "Mirasın reddi için süre ne zaman başlar?",
      answer:
        "TMK m.606 kapsamındaki ret süresi üç aydır ve yasal mirasçı için ölümün öğrenilmesinden başlar. Önemli bir sebep bulunması halinde sulh hâkiminden süre uzatımı istenebilir (TMK m.615), bu yüzden gecikmeden hukuki destek alınması önerilir.",
    },
    {
      question: "Kooperatif veya sözleşmeli konut payı da miras kalır mı?",
      answer:
        "Üyelik hakkı ve ödenmiş bedeller terekeye dahildir. Hakkın mirasçılara devri, kooperatif ana sözleşmesi ve satış vaadi sözleşmesinin hükümlerine göre incelenir.",
    },
  ],
  howToTitle: "Esenyurt'ta Çok Mirasçılı Dairede Satış Öncesi Yapılacaklar",
  howToSteps: [
    { name: "Hak Sahiplerinin Tespiti", text: "Mirasçılar ve oranları veraset ilamıyla kesinleştirilir." },
    { name: "Borç Taraması", text: "Aidat, vergi ve haciz kayıtları tapu ve site yönetimi üzerinden kontrol edilir." },
    { name: "Ortak Karar", text: "Satış veya kullanım konusunda mirasçıların yazılı mutabakatı alınır." },
    { name: "Hukuki Yol Seçimi", text: "Mutabakat olmazsa ortaklığın giderilmesi davası açılır." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: [
    "miras-sakli-pay-tenkis",
    "vasiyetname-nasil-duzenlenir",
    "muris-muvazaasi-nedir",
    "ortakligin-giderilmesi-davasi",
  ],
};
