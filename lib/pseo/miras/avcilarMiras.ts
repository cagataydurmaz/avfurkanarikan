import type { PseoService } from "../types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const avcilarMiras: PseoService = {
  slug: "miras",
  urlSlug: "avcilar-miras-avukati",
  name: "Avcılar Miras Avukatı",
  heroTitle: "Avcılar Miras Avukatı",
  heroSubtitle:
    "Marmara kıyısındaki Ambarlı'dan Üniversite Mahallesi'ne uzanan Avcılar'da, kentsel dönüşüme konu konutların mirasçılar arasında paylaşımı dahil veraset, tenkis, vasiyetname ve muris muvazaası uyuşmazlıklarında temsil sağlanır; ilçe İstanbul Küçükçekmece Adliyesi'nin yargı çevresindedir.",
  metaTitle: "Avcılar Miras Avukatı | Veraset ve Tenkis",
  metaDescription:
    "Avcılar'da veraset ilamı, saklı pay ve tenkis, muris muvazaası, vasiyetname ve ortaklığın giderilmesi davalarında avukatlık hizmeti sunulmaktadır.",
  aboutParagraph:
    "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur; büro Avcılar'da değil, Beşiktaş/Sinanpaşa'dadır. Avcılar'da miras kalan bir konut çoğu zaman riskli yapı tespiti, güçlendirme veya yıkıp yeniden yapma gibi ek sorularla birlikte gelir; mirasçıların bu kararlara nasıl katılacağı ve payların kimin adına yazılacağı mirasçılık sıfatı kesinleştikten sonra netleşir.",
  highlightCards: [
    { title: "Dönüşüme Konu Konutlar", description: "Mirasçılar arasında kat karşılığı veya yeniden inşa kararlarının koordinasyonu." },
    { title: "Mirasçılık Sıfatı", description: "Payların ve zümrelerin mahkeme ya da noter belgesiyle ortaya konması." },
    { title: "Muris Muvazaası", description: "Mirastan mal kaçırma amacıyla yapılan devirlere karşı tapu iptal ve tescil." },
    { title: "Tereke Borçları", description: "Mirasın reddi veya kabulünün borç durumuna göre değerlendirilmesi." },
  ],
  processSteps: genelSurec,
  servicesList: [
    "Mirasçılık belgesi başvurusu ve zümre/pay analizi",
    "Riskli yapı kapsamındaki konutlarda mirasçıların temsili ve payların düzenlenmesi",
    "Muris muvazaasına dayalı tapu iptal ve tescil davası",
    "Tenkis davası için saklı pay hesabı ve dava hazırlığı",
    "Paydaşlar anlaşamadığında ortaklığın giderilmesi davası",
    "Vasiyetnamenin açılması, tenfizi ve iptaline ilişkin talepler",
  ],
  localParagraphs: [
    "Avcılar'daki miras uyuşmazlıkları, miras bırakanın yerleşim yerine ve taşınmazın konumuna göre İstanbul Küçükçekmece Adliyesi'ndeki sulh veya asliye hukuk mahkemelerinde görülür. Tapu kaydı üzerinden yürüyen işlemlerde Avcılar'daki tapu müdürlüğü mirasçılık belgesiyle intikal işlemini gerçekleştirir.",
    "Merkez, Cihangir, Tahtakale, Mustafa Kemal Paşa ve Ambarlı gibi mahallelerde bulunan taşınmazların veraset vergisi yönünden Avcılar Vergi Dairesi Müdürlüğü'ne yapılacak bildirim ayrıca incelenmelidir. Kentsel dönüşüm sözleşmesi olan bir bina mirasa konu olduğunda, sözleşmedeki hak ve yükümlülükler de mirasçılara geçer; bu sözleşme maddelerinin incelenmesi önem taşır.",
  ],
  faqs: [
    { question: "Riskli yapı kararı verilmiş bir daireyi miras alan kişi ne yapmalı?", answer: "Önce mirasçılık belgesiyle payın tapuya intikali sağlanır, sonra dönüşüm sözleşmesi ve kararlar hakkında mirasçılar adına hareket edilir." },
    { question: "Babanın hayattayken evi çocuklardan birine satış gösterip devretmesi geçersiz sayılabilir mi?", answer: "Gerçekte bağış niteliğinde olup mirasçıdan mal kaçırma amacı taşıyorsa muris muvazaası iddiasıyla tapu iptal ve tescil davası açılabilir." },
    { question: "Mirasçılar arasında biri Ambarlı'daki dükkana el koyduysa ne yapılır?", answer: "Önce mirasçılık belgesi ile pay ortaya konur; ardından haksız kullanım ve paylaşım için ortaklığın giderilmesi veya ecrimisil talebi değerlendirilir." },
    { question: "Vasiyetname Küçükçekmece'de nasıl açılır?", answer: "Vasiyetnamenin açılması sulh hukuk mahkemesi tarafından yapılır; ilgililere durum bildirilir ve vasiyetnamenin sonuçları açıklanır." },
    { question: "Veraset ilamı çıkmadan banka hesabına erişilebilir mi?", answer: "Bankalar genel olarak mirasçılık belgesi ister; belge sunulmadan hesap hareketleri mirasçılara devredilmez." },
  ],
  howToTitle: "Avcılar'da Miras Bırakılan Konut İçin Hangi Adımlar Atılır?",
  howToSteps: [
    { name: "Tapu ve Yapı Durumu", text: "Tapu kaydı ve binanın risk durumu birlikte kontrol edilir." },
    { name: "Mirasçı Tespiti", text: "Mirasçılar ve payları belgeyle sabitlenir." },
    { name: "Dönüşüm ve Paylaşım Kararı", text: "Sözleşme, taksim veya satış gibi seçenekler mirasçılarla görüşülür." },
    { name: "Küçükçekmece Başvurusu", text: "Anlaşma çıkmazsa uygun mahkemede dava açılır." },
  ],
  crosslinkLabel: "Miras Avukatı",
  relatedPostSlugs: ["miras-sakli-pay-tenkis", "vasiyetname-nasil-duzenlenir", "muris-muvazaasi-nedir", "ortakligin-giderilmesi-davasi"],
};
