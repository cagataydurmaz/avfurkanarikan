import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const sisliMiras: PseoService = {
  slug: "miras",
  urlSlug: "sisli-miras-avukati",
  name: "Şişli Miras Avukatı",
  heroTitle: "Şişli Miras Avukatı",
  heroSubtitle:
    "Şişli'de apartman daireleri ve ticari birimlerden oluşan terekelerde mirasçılık belgesi, saklı pay, tenkis ve paylaşım konularında hukuki destek sağlanır; ilçenin dosyaları İstanbul (Çağlayan) Adliyesi'nde görülür.",
  metaTitle: "Şişli Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Şişli'de veraset ilamı, saklı pay, tenkis davası ve apartman dairesi ile ticari birim paylarının paylaşımı için miras hukuku danışmanlığı verilmektedir.",
  aboutParagraph:
    "Furkan Arıkan, 2019 MEF Üniversitesi Hukuk Fakültesi mezunu olup İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır. Şişli'deki mirasçılara, miras bırakanın daire, işyeri ve şirket payı gibi kalemlerinin belirlenmesinde, mirasçılık belgesinin alınmasında ve paylaşım uyuşmazlıklarında danışmanlık verir. Büro Beşiktaş/Sinanpaşa'dadır; Şişli'de ofis yoktur.",
  highlightCards: [
    { title: "Eski Apartman Daireleri", description: "Feriköy, Teşvikiye ve Harbiye'deki aile dairelerinin mirasçılar arasında intikali." },
    { title: "Ticari Birim Payları", description: "Mecidiyeköy, Esentepe ve Maslak çevresindeki ofis ve dükkân hisselerinin düzenlenmesi." },
    { title: "Tenkis ve Bağış Denetimi", description: "Hayattayken yapılan devirlerin saklı payı aşıp aşmadığının incelenmesi." },
    { title: "Mirasın Reddi", description: "Kredi ve şirket borçları içeren terekelerde ret hakkının değerlendirilmesi." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Veraset ilamı alınması ve mirasçıların belirlenmesi",
    "Tenkis davası ve saklı pay hesabı",
    "Mirasın reddi ve tereke borçlarının incelenmesi",
    "Vasiyetname düzenlenmesi ve vasiyetnamenin iptali",
    "Muris muvazaasına dayalı tapu iptali ve tescil davaları",
    "Daire ve işyeri paylarında taksim sözleşmesi ile ortaklığın giderilmesi",
  ],
  localParagraphs: [
    "Şişli'de Feriköy, Teşvikiye, Harbiye ve Fulya gibi köklü mahallelerdeki eski apartman daireleri ile Mecidiyeköy, Esentepe ve Maslak çevresindeki ofis ve ticari birimler, miras dosyalarında en sık karşılaşılan varlıklardandır. Bir ailenin hem oturduğu daireyi hem de kira getiren bir işyerini birlikte miras alması halinde, kullanım, kira gelirinin bölüşümü ve satış gibi farklı konuların birlikte ele alınması gerekir.",
    "Şişli dosyaları İstanbul (Çağlayan) Adliyesi'nde görülür; mirasçılık belgesi gibi çekişmesiz işler sulh hukuk, tenkis ve muris muvazaası davaları asliye hukuk mahkemesinde yürütülür. Şişli Vergi Dairesi Müdürlüğü nezdinde veraset ve intikal vergisi yükümlülüğü ile tapuda intikal işlemleri ayrıca takip edilir.",
  ],
  faqs: [
    { question: "Şişli'de miras davası hangi adliyede açılır?", answer: "Şişli dosyaları İstanbul (Çağlayan) Adliyesi'nde, görevli sulh veya asliye hukuk mahkemesinde görülür." },
    { question: "Mirasçılardan biri kira getiren işyerini kullanıyorsa diğerleri ne talep edebilir?", answer: "Kullanımın düzenlenmesi veya kira gelirinin payına göre paylaşılması istenebilir; sonuç alınamazsa ortaklığın giderilmesi davası açılabilir." },
    { question: "Bir mirasçıya yapılan hayattaki devir iptal edilebilir mi?", answer: "Muvazaa varsa tapu iptali, saklı pay aşılmışsa tenkis davası seçenekleri değerlendirilir." },
    { question: "Şirket payı da terekeye girer mi?", answer: "Evet, miras bırakanın şirket payı terekeye dahildir; ortaklık sözleşmesi ve esas sözleşme hükümleri ayrıca incelenir." },
    { question: "Randevu için büroya gitmek gerekli midir?", answer: "Hayır, ilk değerlendirme WhatsApp ve çevrim içi görüşmeyle de yapılabilir." },
  ],
  howToTitle: "Şişli'de Mirasın Paylaşımı Nasıl Planlanır?",
  howToSteps: [
    { name: "Envanter Hazırlama", text: "Daire, işyeri, hesap ve şirket payları listelenir." },
    { name: "Hak Sahiplerinin Belirlenmesi", text: "Veraset ilamıyla pay oranları netleşir." },
    { name: "Anlaşma Görüşmeleri", text: "Kullanım, devir ve satış seçenekleri mirasçılarla görüşülür." },
    { name: "Resmileştirme", text: "Anlaşma noterde ve tapuda işlenir; olmazsa dava açılır." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
