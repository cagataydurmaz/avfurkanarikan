import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const esenlerMiras: PseoService = {
  slug: "miras",
  urlSlug: "esenler-miras-avukati",
  name: "Esenler Miras Avukatı",
  heroTitle: "Esenler Miras Avukatı",
  heroSubtitle:
    "Esenler'de daire, dükkan ve kat karşılığı hisselerin mirasında veraset, saklı pay ve paylaşım süreçlerine destek verilir; davalar İstanbul Bakırköy Adliyesi'nde görülür.",
  metaTitle: "Esenler Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Esenler'de veraset ilamı, daire ve dükkan mirasının paylaşımı, saklı pay, tenkis ve mirasın reddi konularında miras hukuku danışmanlığı sunulmaktadır.",
  aboutParagraph:
    "Miras bırakanın daire, dükkan veya banka varlıkları ölümle birlikte mirasçılara geçer ve bu geçişin hukuki biçimi Türk Medeni Kanunu'nda düzenlenmiştir. Esenler'deki müvekkillere danışmanlık veren avukat Furkan Arıkan (İstanbul Barosu, Sicil No: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019), mirasçılık belgesi, tereke ve paylaşım dosyalarında temsil sağlamaktadır.",
  highlightCards: [
    { title: "Daire ve Dükkan Mirası", description: "Kat mülkiyetli bağımsız bölümlerin intikali ve paylaşımı." },
    { title: "Kentsel Dönüşümde Miras", description: "Dönüşüm sürecindeki yapılarda mirasçıların hak ve yetkileri." },
    { title: "Mirasın Reddi", description: "Borçlu terekede üç aylık ret süresinin takibi." },
    { title: "Tereke Tespiti", description: "Mal varlığı ve borçların mahkeme kanalıyla belirlenmesi." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Veraset ilamı alınması ve tapuda intikal işlemleri",
    "Kat mülkiyetli taşınmazlarda paylaşım ve ortaklığın giderilmesi",
    "Kentsel dönüşüm sözleşmelerinde mirasçı sıfatıyla temsil",
    "Mirasın reddi ve sürelerin takibi",
    "Saklı pay hesaplaması ve tenkis davası",
    "Tereke tespiti ve miras taksim sözleşmesi hazırlığı",
  ],
  localParagraphs: [
    "Esenler'de Turgut Reis, Kazım Karabekir, Menderes ve Davutpaşa gibi mahallelerde apartman dairelerinin ve zemin kat dükkanların aile içinde miras kalması sık rastlanan bir tablodur. Binası kentsel dönüşüme alınan paydaşlardan birinin ölmesi halinde, mirasçılar hem veraset belgesini hem de dönüşüm sözleşmesindeki hakları birlikte yönetmek zorunda kalabilir.",
    "Esenler, İstanbul Bakırköy Adliyesi'nin yargı çevresindedir; veraset ilamı ve ortaklığın giderilmesi sulh hukuk, tenkis ve tapu iptali davaları asliye hukuk mahkemelerinde görülür. Tapu işlemleri için Esenler Tapu Müdürlüğü, veraset ve intikal vergisi için ise Esenler Vergi Dairesi Müdürlüğü ile iletişime geçilir.",
  ],
  faqs: [
    {
      question: "Anne-babamın dairesi iki kardeşe kaldı, biri oturuyor diğeri hak istiyor. Ne olur?",
      answer:
        "Daire, veraset ilamındaki paylara göre ortak mülkiyete konu olur. Oturan kişiyle anlaşma sağlanamazsa diğer mirasçı, ortaklığın giderilmesini isteyebilir; bu halde taşınmaz çoğunlukla satılarak bedel paylaştırılır.",
    },
    {
      question: "Binası kentsel dönüşümde olan ölmüş malikin mirasçıları ne yapmalı?",
      answer:
        "Mirasçıların önce veraset ilamı alarak malik sıfatını tapuya yansıtması gerekir. Sonrasında dönüşüm sözleşmesi ve verilecek bağımsız bölümler konusunda tüm mirasçılar adına karar alınır.",
    },
    {
      question: "Mirasçılar arasında borçlu olan biri var, miras ona geçer mi?",
      answer:
        "Mirasçının kişisel borcu terekeyi doğrudan etkilemez, ancak alacaklılar o mirasçının payına haciz koydurabilir. Bu nedenle tapu kayıtlarında şerh olup olmadığı paylaşım öncesinde kontrol edilmelidir.",
    },
    {
      question: "Terekenin borçlu olup olmadığını nasıl öğrenirim?",
      answer:
        "Banka, SGK ve icra dosyaları üzerinden araştırma yapılabilir; gerekirse tereke tespiti talep edilir. Borç şüphesi varsa, TMK m.606'daki üç aylık ret süresi dolmadan karar verilmesi önemlidir.",
    },
    {
      question: "Esenler'de veraset ilamı başvurusu nereye yapılır?",
      answer:
        "Sulh hukuk mahkemesine yapılır; ilçe için yetkili adliye İstanbul Bakırköy Adliyesi'dir. Başvuruda nüfus kayıt örneği ve ölüm belgesi istenir, mahkeme mirasçıları ve payları gösteren belgeyi düzenler.",
    },
  ],
  howToTitle: "Esenler'de Daire Mirasında Tapuya Tescil Aşamaları",
  howToSteps: [
    { name: "Belge Toplama", text: "Ölüm belgesi, nüfus kayıt örneği ve tapu bilgileri bir araya getirilir." },
    { name: "Mirasçılık Belgesi", text: "Sulh hukuk mahkemesinden veraset ilamı temin edilir." },
    { name: "Vergi Beyanı", text: "Veraset ve intikal vergisi beyanı vergi dairesine kanuni süresinde verilir." },
    { name: "Tapu Müdürlüğü", text: "Esenler Tapu Müdürlüğü'nde mirasçılar adına intikal tescili yapılır." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: [
    "miras-sakli-pay-tenkis",
    "vasiyetname-nasil-duzenlenir",
    "muris-muvazaasi-nedir",
    "ortakligin-giderilmesi-davasi",
  ],
};
