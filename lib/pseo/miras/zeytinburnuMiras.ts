import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const zeytinburnuMiras: PseoService = {
  slug: "miras",
  urlSlug: "zeytinburnu-miras-avukati",
  name: "Zeytinburnu Miras Avukatı",
  heroTitle: "Zeytinburnu Miras Avukatı",
  heroSubtitle:
    "Zeytinburnu'nda konut, dükkân ve atölye gibi aile işletmesiyle iç içe geçmiş terekelerde veraset, saklı pay, tenkis ve ortaklığın giderilmesi konularında hukuki destek verilir; davalar İstanbul Bakırköy Adliyesi'nde görülür.",
  metaTitle: "Zeytinburnu Miras Avukatı | Veraset, Tenkis",
  metaDescription:
    "Zeytinburnu'nda veraset ilamı, saklı pay, tenkis, mirasın reddi ve miras taksimi konularında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
  aboutParagraph:
    "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Zeytinburnu'ndaki esnaf ve aile işletmesi geçmişi olan müvekkillere mirasçılık belgesi, tereke tespiti, vasiyetname ve saklı pay konularında danışmanlık verir; büro Beşiktaş'tadır, randevu WhatsApp veya telefonla alınabilir.",
  highlightCards: [
    { title: "İşletmeli Terekeler", description: "Dükkân ve atölye payının bulunduğu miraslarda envanter ve paylaşım." },
    { title: "Veraset İlamı", description: "Mirasçı zümreleri ve payların resmi belgeyle kesinleştirilmesi." },
    { title: "Saklı Pay ve Tenkis", description: "Sağlararası bağış veya vasiyetle zedelenen payın talebi." },
    { title: "Ortaklığın Giderilmesi", description: "Anlaşma sağlanamayan paylı taşınmazlarda dava yolu." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Veraset ilamı başvurusu ve mirasçıların paylarının hesaplanması",
    "Tereke tespiti ve mirasçılar arası malvarlığı envanteri",
    "Saklı pay ihlaline karşı tenkis davası",
    "Mirasın reddi beyanı ve ret süresinin takibi",
    "Miras taksim sözleşmesi hazırlığı",
    "Ortaklığın giderilmesi ve muris muvazaası davalarında temsil",
  ],
  localParagraphs: [
    "Kazlıçeşme, Sümer, Telsiz ve Merkezefendi gibi mahallelerde küçük ölçekli işletme ve esnaf geçmişi olan ailelerde, miras bırakanın dükkân veya atölyedeki payı terekenin önemli bir bölümünü oluşturabilir. İşletmeyi sürdüren mirasçı ile işletmeye katılmayan mirasçıların haklarını dengelemek için tereke kalemlerinin değerlerinin doğru ortaya konması gerekir; bu aşamada bilirkişi incelemesi sıkça gündeme gelir.",
    "Zeytinburnu'nun kendi adliyesi bulunmadığı için veraset ilamı, tenkis, tapu iptali ve ortaklığın giderilmesi davaları niteliğine göre sulh ya da asliye hukuk mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür. Mirasçıların veraset ve intikal vergisi bildirimleri ise Zeytinburnu Vergi Dairesi Müdürlüğü ile yürütülür.",
  ],
  faqs: [
    {
      question: "Ölen babanın dükkânını bir kardeşim işletmeye devam ediyorsa diğerlerinin hakkı ne olur?",
      answer:
        "Dükkân, mirasçılar arasında paylı veya elbirliği mülkiyette kalan bir malvarlığı kalemi olabilir. İşletmeyi sürdürmek, diğer mirasçıların payını ortadan kaldırmaz; paylaşım anlaşmayla ya da ortaklığın giderilmesi davasıyla çözülebilir.",
    },
    {
      question: "Zeytinburnu'ndaki mirasçılar hangi mahkemede dava açar?",
      answer:
        "Dava türüne göre sulh hukuk veya asliye hukuk mahkemesi görevlidir; ilçe İstanbul Bakırköy Adliyesi'ne bağlıdır. Yetkili mahkeme çoğunlukla miras bırakanın son yerleşim yeri esas alınarak belirlenir.",
    },
    {
      question: "Mirasçılardan biri ret beyanında bulunursa pay kime geçer?",
      answer:
        "Ret eden mirasçı hiç mirasçı olmamış sayılır ve payı, kanundaki sıraya göre onun yerine geçecek kişilere intikal eder. Bu nedenle ret beyanının sonuçları tüm mirasçılar bakımından önceden değerlendirilmelidir.",
    },
    {
      question: "Tenkis davasında bağışlar da hesaba katılır mı?",
      answer:
        "Evet, saklı payı aşan karşılıksız kazandırmalar tenkise konu olabilir. Hesaplamada terekenin değeri ve sağlararası bağışlar birlikte ele alınır; ayrıntılı hesap dosyaya göre bilirkişi marifetiyle yapılır.",
    },
    {
      question: "Miras taksim sözleşmesi mutlaka noterde mi yapılmalıdır?",
      answer:
        "Taşınmaz içeren taksim sözleşmelerinde şekil şartlarına uyulması gerekir ve tapuya tescil bakımından resmi şekil önem taşır. Sözleşme öncesinde tereke içeriği ve paylar netleştirilmelidir.",
    },
  ],
  howToTitle: "Zeytinburnu'nda Aile İşletmesi Payı Olan Terekede Paylaşım Nasıl Planlanır?",
  howToSteps: [
    { name: "Envanter Çıkarılması", text: "Dükkân, atölye, taşınmaz ve banka kayıtları terekeye dahil edilerek listelenir." },
    { name: "Değer Tespiti", text: "Kalemlerin değeri gerektiğinde bilirkişiyle belirlenir." },
    { name: "Paylaşım Seçenekleri", text: "Payın devri, taksim sözleşmesi veya satış gibi seçenekleri dosyaya göre ele alınır." },
    { name: "Dava veya Sözleşme", text: "Anlaşma varsa sözleşme, yoksa ortaklığın giderilmesi davası yürütülür." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
