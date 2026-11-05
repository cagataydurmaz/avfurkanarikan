import type { PseoService } from "./types";
import { sisliMiras } from "./miras/sisliMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const sisliBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "sisli-avukat",
    name: "Şişli Avukat",
    heroTitle: "Şişli Avukat",
    heroSubtitle:
      "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında Şişli ve çevresindeki müvekkillere hukuki danışmanlık ve dava takibi hizmeti verilmektedir. Şişli, İstanbul (Çağlayan) Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Şişli Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Şişli'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında hukuki danışmanlık ve dava takibi hizmeti.",
    aboutParagraph:
      "Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş, İstanbul Barosu'na (Sicil No: 72621) kayıtlı bir avukattır. Ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku alanlarında hukuki danışmanlık ve dava takibi hizmeti sunulmaktadır. Görüşmeler randevu ile planlanmakta, her dosya için ayrı zaman ayrılmaktadır.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma, kovuşturma ve tutukluluk süreçlerinde müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet, nafaka ve mal rejimi uyuşmazlıkları." },
      { title: "Gayrimenkul Hukuku", description: "Tapu, kira ve tahliyeye ilişkin dava süreçleri." },
      { title: "İş Hukuku", description: "İşçilik alacakları, işe iade ve sözleşme uyuşmazlıkları." },
      { title: "İcra Hukuku", description: "Alacak tahsili, icra takibi ve itiraz süreçleri." },
      { title: "İdare Hukuku", description: "İdari işlemlerin iptali ve tam yargı davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklar." },
      { title: "Borçlar Hukuku", description: "Sözleşme, alacak ve tazminat uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Ceza hukuku - soruşturma ve kovuşturma süreçlerinde temsil",
      "Aile hukuku - boşanma, velayet, nafaka uyuşmazlıkları",
      "Gayrimenkul hukuku - tapu, kira, tahliye süreçleri",
      "İş hukuku - işçilik alacakları ve işe iade",
      "İcra ve iflas hukuku - alacak tahsili ve itiraz",
      "İdare hukuku - idari işlemlere karşı dava",
      "Vergi hukuku - vergi uyuşmazlıkları",
      "Borçlar hukuku - sözleşme ve tazminat davaları",
    ],
    localParagraphs: [
      "Şişli; Mecidiyeköy, Teşvikiye, Harbiye, Feriköy, Fulya, Esentepe ve Maslak gibi hem yoğun ticari faaliyetin hem de yerleşik konut dokusunun bir arada bulunduğu mahalleleri kapsayan bir ilçedir. Adli yargı bakımından İstanbul (Çağlayan) Adliyesi'nin yetki alanında yer alır; Çağlayan Adalet Sarayı'nın kendisi de Şişli sınırları içinde bulunmaktadır.",
      "Şişli'de yerleşik gerçek ve tüzel kişilerin hukuki uyuşmazlıkları genel olarak İstanbul Adliyesi'ndeki ilgili mahkemelerde, idari uyuşmazlıklar İstanbul idare mahkemelerinde, vergi uyuşmazlıkları ise İstanbul vergi mahkemelerinde görülür. Vergisel işlemlerde yetkili kurum Şişli Vergi Dairesi Müdürlüğü'dür.",
    ],
    faqs: [
      { question: "Şişli'de hangi adliye yetkilidir?", answer: "Şişli ilçesi İstanbul (Çağlayan) Adliyesi'nin yargı çevresinde yer almaktadır; Adalet Sarayı'nın kendisi de Şişli sınırları içindedir." },
      { question: "Danışmanlık görüşmesi nasıl planlanır?", answer: "WhatsApp veya telefon üzerinden ulaşılarak uygun bir görüşme zamanı belirlenir." },
      { question: "Hangi hukuk alanlarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi sağlanmaktadır." },
      { question: "Ofis Şişli'de mi bulunuyor?", answer: "Ofis Beşiktaş/Sinanpaşa'da bulunmaktadır; Şişli ve çevresindeki müvekkillere de hizmet verilmektedir." },
      { question: "Vekalet ücreti nasıl belirlenir?", answer: "Dosyanın niteliği ve kapsamına göre belirlenir, danışmanlık görüşmesinde bilgi verilir." },
      { question: "Şişli Vergi Dairesi ile ilgili uyuşmazlıklarda destek alınabilir mi?", answer: "Evet, vergi tarhiyatına itiraz ve vergi mahkemesi süreçlerinde hukuki destek sağlanmaktadır." },
      { question: "Görüşmeler çevrim içi yapılabiliyor mu?", answer: "Evet, görüşmeler yüz yüze veya çevrim içi olarak gerçekleştirilebilmektedir." },
      { question: "Çağlayan Adliyesi'ne ulaşım nasıldır?", answer: "M2 metro hattı ve metrobüs bağlantılarıyla Çağlayan Adalet Sarayı'na ulaşım sağlanabilmektedir." },
      { question: "Acil bir durumda (gözaltı vb.) nasıl ulaşılır?", answer: "Bu tür acil durumlarda telefon veya WhatsApp üzerinden doğrudan iletişime geçilebilir." },
      { question: "Dosya takibi hakkında bilgi nasıl alınır?", answer: "Süreç boyunca gelişmeler müvekkille düzenli olarak paylaşılmaktadır." },
    ],
    howToTitle: "Şişli'de Avukatlık Hizmetinden Nasıl Yararlanılır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Şişli Avukat (Genel)",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "kidem-tazminati-hesaplama-2026", "icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "sisli-bosanma-avukati",
    name: "Şişli Boşanma Avukatı",
    heroTitle: "Şişli Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal rejimi tasfiyesi süreçlerinde hukuki danışmanlık. Şişli, İstanbul (Çağlayan) Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Şişli Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Şişli'de anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal paylaşımı konularında hukuki danışmanlık ve dava takibi.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na kayıtlı (Sicil No: 72621) bir avukat olarak aile hukuku alanında boşanma, velayet ve nafaka uyuşmazlıklarında müvekkillere danışmanlık ve dava takibi hizmeti sunmaktadır. 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Anlaşmalı Boşanma", description: "Protokolün hazırlanması ve duruşma sürecinin yürütülmesi." },
      { title: "Çekişmeli Boşanma", description: "Kusur, tazminat ve velayete ilişkin dava sürecinin takibi." },
      { title: "Velayet ve Kişisel İlişki", description: "Çocuğun üstün yararı gözetilerek velayet düzenlemesi." },
      { title: "Nafaka Talepleri", description: "Tedbir, iştirak ve yoksulluk nafakası süreçlerinde temsil." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolünün hazırlanması",
      "Çekişmeli boşanma davasının açılması ve takibi",
      "Velayet düzenlemesi ve velayet değişikliği talepleri",
      "Nafaka artırım, azaltım ve kaldırma davaları",
      "Mal rejimi tasfiyesi (katılma alacağı) talepleri",
      "Boşanmaya bağlı maddi ve manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Şişli, Teşvikiye, Harbiye, Feriköy ve Mecidiyeköy gibi yerleşik nüfusun yoğun olduğu mahalleleri barındıran bir ilçedir. Bu bölgede ikamet eden çiftlerin boşanma davaları, taraflardan birinin yerleşim yeri veya dava öncesindeki son altı aydır birlikte oturdukları yer aile mahkemesinde açılabilir.",
      "Şişli'de açılan boşanma, velayet ve nafaka davaları İstanbul (Çağlayan) Adliyesi'ndeki aile mahkemelerinde görülür. Anlaşmalı süreçte protokolün eksiksiz düzenlenmesi, çekişmeli süreçte ise kusur ve mal rejimi iddialarının somut delillerle desteklenmesi sürecin seyri açısından belirleyicidir.",
    ],
    faqs: [
      { question: "Şişli'de boşanma davası hangi mahkemede görülür?", answer: "İstanbul (Çağlayan) Adliyesi bünyesindeki aile mahkemelerinde görülür." },
      { question: "Anlaşmalı boşanma protokolü neleri kapsamalıdır?", answer: "Velayet, nafaka, mal rejimi tasfiyesi ve varsa tazminat konularının tamamı açıkça düzenlenmelidir." },
      { question: "Çekişmeli boşanmada hangi deliller önemlidir?", answer: "Tanık beyanları, yazışmalar, mali kayıtlar gibi kusur ve talepleri destekleyen deliller önem taşır." },
      { question: "Velayet kararı verilirken neler dikkate alınır?", answer: "Mahkeme, çocuğun üstün yararı ilkesini esas alarak ebeveynlerin durumunu somut olarak değerlendirir." },
      { question: "Nafaka miktarı sabit midir?", answer: "Hayır, ekonomik koşulların değişmesi halinde nafakanın artırılması, azaltılması veya kaldırılması talep edilebilir." },
      { question: "Boşanma sürecinde tedbir nafakası istenebilir mi?", answer: "Evet, dava süresince ihtiyaç sahibi eş veya çocuklar lehine tedbir nafakasına hükmedilebilir." },
    ],
    howToTitle: "Şişli'de Boşanma Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Hukuki Değerlendirme", text: "Evlilik birliğinin durumu ve talepler (velayet, nafaka, mal rejimi) değerlendirilir." },
      { name: "Dilekçe/Protokol Hazırlığı", text: "Boşanma dilekçesi veya anlaşmalı boşanma protokolü hazırlanır." },
      { name: "Davanın Açılması", text: "Yetkili aile mahkemesine başvurulur, duruşma günü beklenir." },
      { name: "Duruşma ve Karar", text: "Duruşmada taraflar dinlenir, mahkeme kararını verir." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "bosanmada-nafaka-turleri"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "sisli-ceza-avukati",
    name: "Şişli Ceza Avukatı",
    heroTitle: "Şişli Ceza Avukatı",
    heroSubtitle:
      "Soruşturma ve kovuşturma süreçlerinde müdafilik, ifade ve sorgu süreçlerinde hukuki destek, tutukluluğa itiraz. Şişli, İstanbul (Çağlayan) Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Şişli Ceza Avukatı | Müdafilik",
    metaDescription:
      "Şişli'de soruşturma ve kovuşturma süreçlerinde müdafilik, tutukluluk itirazı ve ceza davası takibi hizmeti.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na kayıtlı (Sicil No: 72621) bir avukat olarak ceza yargılamasının her aşamasında müdafilik hizmeti sunmaktadır. 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Soruşturma Süreci", description: "İfade, gözaltı ve tutukluluk aşamalarında müdafilik." },
      { title: "Kovuşturma Süreci", description: "Duruşma takibi, savunma ve delil değerlendirmesi." },
      { title: "Tutukluluğa İtiraz", description: "Tutukluluk kararı ve devamına karşı itiraz başvuruları." },
      { title: "Kanun Yolları", description: "İstinaf ve temyiz aşamalarında dosyanın takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı ve ifade sürecinde müdafilik",
      "Soruşturma dosyasının incelenmesi",
      "Tutukluluk kararına ve devamına itiraz",
      "Kovuşturma aşamasında duruşma takibi",
      "İstinaf ve temyiz başvurularının hazırlanması",
      "Uzlaşma ve etkin pişmanlık süreçlerinde danışmanlık",
    ],
    localParagraphs: [
      "Şişli sınırları içinde işlendiği iddia edilen suçlara ilişkin soruşturmalar yerel kolluk birimlerince yürütülür; kovuşturma aşamasındaki davalar ise İstanbul (Çağlayan) Adliyesi'nde görülür. Çağlayan Adalet Sarayı'nın fiziken Şişli sınırları içinde bulunması, ilçede yürütülen ceza süreçlerinin adliyeye erişim açısından nispeten kolay olmasını sağlamaktadır.",
      "Gözaltına alınan bir kişinin müdafi ile görüşme hakkı gözaltının başladığı andan itibaren mevcuttur. Şişli'de, özellikle Mecidiyeköy ve çevresindeki yoğun ticari hareketlilik nedeniyle bu sürecin hızlı ve doğru şekilde yönetilmesi önem taşır.",
    ],
    faqs: [
      { question: "Şişli'de görülen bir ceza davası hangi adliyede yürütülür?", answer: "Kovuşturma aşamasındaki dava İstanbul (Çağlayan) Adliyesi'nde görülür; bu adliye fiziken Şişli sınırları içinde yer alır." },
      { question: "Gözaltı sürecinde avukata ne zaman ulaşılabilir?", answer: "Gözaltının başladığı andan itibaren müdafi ile görüşme hakkı bulunmaktadır." },
      { question: "Tutukluluk kararına itiraz nereye yapılır?", answer: "Kararı veren merciin bağlı olduğu ağır ceza mahkemesine itiraz edilir." },
      { question: "Müdafi bulundurmak zorunlu mu?", answer: "Alt sınırı 5 yıl veya üzeri hapis cezası gerektiren suçlarda ve bazı özel hallerde zorunludur, diğer hallerde isteğe bağlıdır." },
      { question: "Uzlaşma teklifi reddedilebilir mi?", answer: "Evet, uzlaşma tarafların iradesine bağlıdır, kabul zorunlu değildir." },
      { question: "Beraat kararına itiraz edilebilir mi?", answer: "Karara karşı istinaf yoluna başvurulabilir." },
    ],
    howToTitle: "Şişli'de Ceza Davası Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Soruşturma", text: "Şikayet veya ihbar üzerine savcılık soruşturması başlar." },
      { name: "Müdafi ile Görüşme", text: "Şüpheli, ifade öncesinde müdafi ile görüşme hakkını kullanabilir." },
      { name: "İddianame ve Kovuşturma", text: "İddianamenin kabulüyle dava açılır, duruşmalar başlar." },
      { name: "Karar ve Kanun Yolları", text: "Karar sonrası gerekirse istinaf veya temyiz yoluna başvurulur." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "sisli-gayrimenkul-avukati",
    name: "Şişli Gayrimenkul Avukatı",
    heroTitle: "Şişli Gayrimenkul Avukatı",
    heroSubtitle:
      "Tapu iptali, kira uyuşmazlıkları, tahliye süreçleri ve gayrimenkul sözleşmelerinde hukuki destek. Şişli, İstanbul (Çağlayan) Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Şişli Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Şişli'de tapu iptali, kira uyuşmazlıkları, tahliye ve gayrimenkul sözleşmelerinde hukuki danışmanlık ve dava takibi.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na kayıtlı (Sicil No: 72621) bir avukat olarak gayrimenkul hukuku kapsamında tapu, kira ve tahliye uyuşmazlıklarında hukuki danışmanlık ve dava takibi hizmeti sunmaktadır. 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Tapu İptal ve Tescil", description: "Usulsüz tapu işlemlerine karşı dava süreçleri." },
      { title: "Kira Uyuşmazlıkları", description: "Kira bedeli tespiti, uyarlama ve tahliye davaları." },
      { title: "Kat Mülkiyeti", description: "Ortak alan ve yönetim planı uyuşmazlıkları." },
      { title: "Sözleşme İncelemesi", description: "Alım-satım ve kira sözleşmelerinin hazırlanması." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Tapu iptal ve tescil davaları",
      "Kira bedeli tespit ve uyarlama davaları",
      "Kiracı tahliyesi (taahhüt, ihtiyaç, temerrüt nedeniyle)",
      "Kat mülkiyeti ve yönetim planı uyuşmazlıkları",
      "Ortaklığın giderilmesi (izale-i şüyu) davaları",
      "Gayrimenkul alım-satım sözleşmelerinin düzenlenmesi",
    ],
    localParagraphs: [
      "Şişli; Teşvikiye, Harbiye, Mecidiyeköy, Esentepe ve Maslak gibi hem konut hem iş yeri niteliğindeki taşınmazların yoğun olduğu mahalleleri kapsayan bir ilçedir. Bu bölgelerdeki tapu, kira ve kat mülkiyeti uyuşmazlıkları İstanbul (Çağlayan) Adliyesi'ndeki sulh hukuk ve asliye hukuk mahkemelerinde görülür.",
      "Şişli sınırları içindeki bir taşınmaza ilişkin tahliye davası veya kira bedeli tespiti davasında yetkili mahkeme, kural olarak taşınmazın bulunduğu yer sulh hukuk mahkemesidir; bu davalar da İstanbul (Çağlayan) Adliyesi bünyesinde yürütülür.",
    ],
    faqs: [
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tapu iptal ve tescil davası açabilir." },
      { question: "Şişli'de gayrimenkul davası hangi mahkemede görülür?", answer: "Uyuşmazlığın niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde görülür." },
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira bedelinin ödenmemesi, tahliye taahhüdü veya ihtiyaç nedeniyle tahliye gibi kanunda öngörülen hallerde tahliye talep edilebilir." },
      { question: "Kat mülkiyetinde ortak gider anlaşmazlıkları nasıl çözülür?", answer: "Öncelikle yönetim planı ve Kat Mülkiyeti Kanunu hükümleri çerçevesinde değerlendirilir, gerekirse dava açılır." },
      { question: "Gayrimenkul alım satımında hukuki inceleme neden önemlidir?", answer: "Tapu kaydı, şerh ve ipotek durumunun incelenmesi ilerideki uyuşmazlıkların önlenmesine katkı sağlar." },
    ],
    howToTitle: "Şişli'de Tapu İptali Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Tapu Kaydının İncelenmesi", text: "Taşınmazın güncel tapu kaydı ve şerhler incelenir." },
      { name: "Hukuki Gerekçenin Belirlenmesi", text: "İptal talebinin dayanağı tespit edilir." },
      { name: "Dava Dilekçesinin Hazırlanması", text: "Talep ve deliller ortaya konarak dava açılır." },
      { name: "Yargılama ve Karar", text: "Bilirkişi incelemesi sonrası mahkeme kararını verir." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "sisli-icra-avukati",
    name: "Şişli İcra Avukatı",
    heroTitle: "Şişli İcra Avukatı",
    heroSubtitle:
      "İcra takibi başlatılması, ödeme emrine itiraz, haciz ve ihale süreçlerinde hukuki destek. Şişli, İstanbul (Çağlayan) Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Şişli İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Şişli'de icra takibi, itiraz, haciz ve alacak tahsili süreçlerinde hukuki danışmanlık ve dava takibi.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na kayıtlı (Sicil No: 72621) bir avukat olarak icra ve iflas hukuku kapsamında alacaklı ve borçlu tarafında danışmanlık ve takip hizmeti sunmaktadır. 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "İcra Takibi Başlatma", description: "İlamlı ve ilamsız icra takibi süreçlerinin yürütülmesi." },
      { title: "Ödeme Emrine İtiraz", description: "Borca ve imzaya itiraz, itirazın iptali süreçleri." },
      { title: "Haciz İşlemleri", description: "Menkul ve gayrimenkul haczi süreçlerinin takibi." },
      { title: "İflas ve Konkordato", description: "İflas ve konkordato başvurularında danışmanlık." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İlamlı ve ilamsız icra takibi başlatılması",
      "Ödeme emrine itiraz ve itirazın iptali davaları",
      "Menkul ve gayrimenkul haczi işlemleri",
      "İhalenin feshi davaları",
      "İstihkak davaları",
      "İflas ve konkordato süreçlerinde danışmanlık",
    ],
    localParagraphs: [
      "Şişli'de yerleşik gerçek veya tüzel kişilere karşı başlatılacak icra takipleri, borçlunun yerleşim yerindeki veya sözleşmede belirlenen yetkili icra dairesinde yürütülür; bu takiplere ilişkin uyuşmazlıklar İstanbul (Çağlayan) Adliyesi'ndeki icra mahkemelerinde görülür.",
      "Mecidiyeköy ve çevresindeki yoğun ticari faaliyet nedeniyle Şişli'de faaliyet gösteren işletmelerin ticari alacaklara ilişkin icra süreçleri sıklıkla gündeme gelmektedir; bu süreçler de aynı yargı çevresinde yürütülmektedir.",
    ],
    faqs: [
      { question: "Şişli'de icra takibi hangi mahkemede görülür?", answer: "İcra takibine ilişkin uyuşmazlıklar İstanbul (Çağlayan) Adliyesi'ndeki icra mahkemelerinde görülür." },
      { question: "Ödeme emrine itiraz süresi ne kadardır?", answer: "Ödeme emrinin tebliğinden itibaren 7 gün içinde itiraz edilmesi gerekir." },
      { question: "İtirazın iptali davası nerede açılır?", answer: "Genel yetkili mahkemede veya takibin yapıldığı yer icra mahkemesinde açılabilir." },
      { question: "Haciz işlemine nasıl itiraz edilir?", answer: "Usulsüz haciz işlemlerine karşı icra mahkemesine şikayet yoluna gidilebilir." },
      { question: "Borçlu mal beyanında bulunmazsa ne olur?", answer: "Süresinde mal beyanında bulunmayan borçlu hakkında icra mahkemesine şikayet yoluyla yaptırım talep edilebilir." },
    ],
    howToTitle: "Şişli'de İcra Takibi Nasıl Başlatılır?",
    howToSteps: [
      { name: "Alacağın Belgelendirilmesi", text: "Alacağın dayanağı olan belge veya ilam hazırlanır." },
      { name: "İcra Dairesine Başvuru", text: "Yetkili icra dairesine takip talebiyle başvurulur." },
      { name: "Ödeme Emrinin Tebliği", text: "Borçluya ödeme emri tebliğ edilir, itiraz süresi başlar." },
      { name: "Haciz veya Tahsilat", text: "İtiraz edilmezse veya sonuçlanırsa haciz ve tahsilat işlemlerine geçilir." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "sisli-idare-avukati",
    name: "Şişli İdare Avukatı",
    heroTitle: "Şişli İdare Avukatı",
    heroSubtitle:
      "İdari işlemlerin iptali, tam yargı davaları ve idari başvuru süreçlerinde hukuki destek. Yetkili yargı mercii İstanbul idare mahkemeleridir.",
    metaTitle: "Şişli İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Şişli'de idari işlemlerin iptali, tam yargı davaları ve idareye karşı başvuru süreçlerinde hukuki danışmanlık.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na kayıtlı (Sicil No: 72621) bir avukat olarak idare hukuku kapsamında idari işlemlerin iptali ve tam yargı davalarında danışmanlık ve dava takibi hizmeti sunmaktadır. 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari işlemlere karşı dava süreci." },
      { title: "Tam Yargı Davaları", description: "İdarenin eylem ve işlemlerinden doğan zararın tazmini." },
      { title: "Belediye İşlemleri", description: "İmar, ruhsat ve idari para cezalarına ilişkin uyuşmazlıklar." },
      { title: "İdari Başvurular", description: "Dava öncesi idareye yapılan itiraz süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İdari işlemlerin iptali davaları",
      "Tam yargı (tazminat) davaları",
      "İmar planı ve ruhsat işlemlerine itiraz",
      "İdari para cezalarına karşı dava",
      "Kamulaştırma bedeline ilişkin uyuşmazlıklar",
      "Kamu görevlilerinin özlük işlemlerine ilişkin davalar",
    ],
    localParagraphs: [
      "Şişli Belediyesi ve diğer kamu kurumlarının ilçe sınırları içinde tesis ettiği imar, ruhsat ve idari para cezası gibi işlemlere karşı açılacak iptal davaları İstanbul idare mahkemelerinde görülür. Dava açma süresi, işlemin tebliğinden itibaren kural olarak 60 gündür.",
      "Şişli'de özellikle Mecidiyeköy, Esentepe ve Maslak gibi yoğun ticari yapılaşmanın bulunduğu bölgelerde imar ve ruhsat işlemlerine ilişkin idari uyuşmazlıklar sıklıkla gündeme gelmektedir.",
    ],
    faqs: [
      { question: "İdari işleme karşı dava açma süresi ne kadardır?", answer: "Kural olarak işlemin tebliğinden itibaren 60 gündür." },
      { question: "Belediye para cezasına nasıl itiraz edilir?", answer: "Cezanın tebliğinden itibaren yasal süre içinde idare mahkemesinde iptal davası açılabilir." },
      { question: "İdari davada yürütmenin durdurulması istenebilir mi?", answer: "Evet, işlemin uygulanması halinde giderilmesi güç zararlar doğacaksa talep edilebilir." },
      { question: "Tam yargı davası ne zaman açılır?", answer: "İdarenin işlem veya eyleminden doğan bir zararın tazmini istendiğinde açılır." },
      { question: "İdare mahkemesi kararına itiraz edilebilir mi?", answer: "Karara karşı istinaf, bazı hallerde temyiz yoluna başvurulabilir." },
    ],
    howToTitle: "Şişli'de İdari İşlemin İptali Davası Nasıl Açılır?",
    howToSteps: [
      { name: "İşlemin İncelenmesi", text: "İptali istenen idari işlem ve tebliğ tarihi tespit edilir." },
      { name: "Süre Kontrolü", text: "60 günlük dava açma süresi kontrol edilir." },
      { name: "Dava Dilekçesinin Hazırlanması", text: "İptal gerekçeleri dilekçede belirtilir." },
      { name: "Dava Süreci", text: "İdare mahkemesi dosyayı inceler ve karar verir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "sisli-is-hukuku-avukati",
    name: "Şişli İş Hukuku Avukatı",
    heroTitle: "Şişli İş Hukuku Avukatı",
    heroSubtitle:
      "Mecidiyeköy, Maslak ve Esentepe'deki işyerlerinde çalışanların ve işverenlerin fesih, tazminat ve alacak uyuşmazlıklarında arabuluculuk ile dava süreçleri yürütülür; iş mahkemeleri Çağlayan'dadır.",
    metaTitle: "Şişli İş Hukuku Avukatı | İşe İade ve Tazminat",
    metaDescription:
      "Şişli'de kıdem-ihbar tazminatı, işe iade davası ve iş sözleşmesi uyuşmazlıklarında hukuki danışmanlık.",
    aboutParagraph:
      "Avukat Furkan Arıkan 72621 sicil numarasıyla İstanbul Barosu'na kayıtlıdır; 2019'da MEF Üniversitesi'nin hukuk fakültesini bitirmiştir. İş hukuku dosyalarında Şişli'deki işçi ve işverenlere fesih değerlendirmesi, arabuluculuk hazırlığı ve iş mahkemesi davaları konularında hizmet verir.",
    highlightCards: [
      { title: "Fesih Sonrası Tazminatlar", description: "Kıdem ve ihbar tazminatı taleplerinin hesaplanması ve ileri sürülmesi." },
      { title: "İşe İade Başvurusu", description: "Geçersiz fesih iddiasının arabuluculuk ve dava aşamalarında yürütülmesi." },
      { title: "Mesai ve Ücret Alacakları", description: "Fazla çalışma, yıllık izin ve ödenmeyen ücretlerin tahsili." },
      { title: "İşveren Tarafı Danışmanlığı", description: "İş sözleşmesi, ibraname ve fesih bildirimi metinlerinin hazırlanması." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kıdem ve ihbar tazminatı taleplerinin hesaplanması ve dava yoluyla takibi",
      "İşe iade için arabulucuya başvuru ve ardından iş mahkemesi davası",
      "Mesai karşılığı ücret, hafta tatili çalışması ve kullanılmayan izin bedellerinin tahsili",
      "Mobbing iddialarında delillerin toplanması ve tazminat talebi",
      "İş sözleşmesi, ibraname ve fesih bildirimi metinlerinin hazırlanması",
      "Çalışırken yaşanan iş kazası veya meslek hastalığı nedeniyle tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Şişli'nin Mecidiyeköy-Esentepe hattında ve Maslak ile Ayazağa tarafında ofis tipi işyerleri yoğundur. Bu işyerlerinde bordro kayıtları, kartlı giriş-çıkış verileri ve kurum içi e-postalar, fazla çalışma ile fesih sebebine dair uyuşmazlıkların başlıca delilleri olarak öne çıkar.",
      "İşçilik alacağı veya işe iade talebiyle dava açılmadan önce arabulucuya başvurulması dava şartıdır. Arabuluculuktan sonuç çıkmazsa dava Çağlayan'daki iş mahkemelerinde görülür; Şişli-Mecidiyeköy M2 istasyonu ile Mecidiyeköy ve Gayrettepe'deki metrobüs bağlantıları bölgeden adliyeye ulaşımı destekler.",
    ],
    faqs: [
      { question: "İşe iade davası için hangi şartlar aranır?", answer: "4857 sayılı Kanun m.18 uyarınca işyerinde en az otuz işçi çalışması, işçinin en az altı aylık kıdeminin bulunması ve sözleşmenin belirsiz süreli olması gerekir; işveren vekilleri kapsam dışındadır. Fesih geçersiz sayılırsa işçi işe iade ile boşta geçen süre alacaklarını isteyebilir." },
      { question: "Arabulucuya başvuru ve dava açma süresi ne kadardır?", answer: "İşe iade talebinde fesih bildiriminin tebliğinden itibaren bir ay içinde arabulucuya başvurulur. Arabuluculuk son tutanağının düzenlenmesinden itibaren iki hafta içinde de iş mahkemesinde dava açılmalıdır. Bu süreler kesin olduğundan, takvim fesih tebliğ tarihine göre hesaplanmalıdır." },
      { question: "Kıdem tazminatı hangi hallerde ve nasıl hesaplanarak ödenir?", answer: "Kıdem tazminatı, aynı işverenin yanında en az bir yıl çalışmış işçiye; işverenin haksız feshi, işçinin haklı nedenle feshi, emeklilik veya askerlik gibi hallerde ödenir (1475 sayılı Kanun m.14). Her tam yıl için otuz günlük ücret esas alınır; ödemede güncel tavan tutar da dikkate alınır." },
      { question: "Fazla mesai alacağı hangi delillerle kanıtlanır?", answer: "Fazla çalışma alacağı; bordro, puantaj ve kartlı giriş-çıkış kayıtları, kurum içi yazışmalar ve tanık beyanlarıyla ispatlanabilir. Dijital sistem kullanılan işyerlerinde e-posta saatleri ve erişim kayıtları da delil olabilir. Haftalık kırk beş saati aşan çalışma fazla çalışma sayılır (4857 m.41)." },
      { question: "Kıdem, ücret ve mesai alacaklarında zamanaşımı kaç yıldır?", answer: "Kıdem ve ihbar tazminatı ile ücret ve fazla mesai gibi çoğu işçilik alacağında zamanaşımı süresi beş yıldır. Süre alacağın muaccel olduğu tarihten işlemeye başlar; bu nedenle her alacak kalemi için başlangıç tarihi ayrı ayrı belirlenir ve dava açılmadan önce hesaplanmalıdır." },
    ],
    howToTitle: "Şişli'de İş Davası Öncesi Arabuluculuk Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Fesih Evraklarının Toplanması", text: "Fesih bildirimi, iş sözleşmesi, bordrolar ve yazışmalar derlenerek feshin gerekçesi ve tebliğ tarihi belirlenir." },
      { name: "Arabulucuya Başvuru", text: "Fesihten itibaren bir ay içinde arabuluculuk bürosuna başvurulur ve toplantılara hazırlık yapılır." },
      { name: "Son Tutanak ve Dava", text: "Anlaşma çıkmazsa son tutanağın düzenlenmesini izleyen iki hafta içinde dava dilekçesi iş mahkemesine sunulur." },
      { name: "Yargılama Süreci", text: "Mahkeme feshin geçerliliğini ve alacak taleplerini inceler; deliller ve tanıklar bu aşamada sunulur." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "ise-iade-davasi"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "sisli-kira-tahliye-avukati",
    name: "Şişli Kira ve Tahliye Avukatı",
    heroTitle: "Şişli Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında hukuki destek. Şişli, İstanbul (Çağlayan) Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Şişli Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Şişli'de kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında hukuki danışmanlık.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na kayıtlı (Sicil No: 72621) bir avukat olup 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Kira hukuku kapsamında hem kiraya verenlere hem kiracılara, tahliye ve kira bedeli uyuşmazlıklarında hukuki destek sunulmaktadır.",
    highlightCards: [
      { title: "Tahliye Süreçleri", description: "İhtiyaç, temerrüt ve taahhütnameye dayalı tahliye başvuruları." },
      { title: "Rayiç Bedel Uyarlaması", description: "Piyasa koşullarına göre güncel kira bedelinin belirlenmesi." },
      { title: "İcra Kanalıyla Çıkarma", description: "Taahhütnameye dayanarak icra dairesi üzerinden tahliye." },
      { title: "Sözleşme Danışmanlığı", description: "Kira kontratının hazırlanması ve risklerinin gözden geçirilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İhtiyaç sebebiyle açılan tahliye davaları",
      "Taahhütnameye dayalı icra yoluyla çıkarma işlemleri",
      "Kira borcunun ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Sözleşmenin feshinden doğan tazminat talepleri",
      "Kira kontratlarının hazırlanması ve incelenmesi",
    ],
    localParagraphs: [
      "Şişli, konut kiralarının yanı sıra Mecidiyeköy ve Teşvikiye çevresinde yoğun bir işyeri kiralama hareketliliğinin de yaşandığı bir ilçedir. Hem mesken hem ticari amaçlı kiralamalara ilişkin uyuşmazlıklarda, taşınmazın bulunduğu yerdeki sulh hukuk mahkemesi görevlidir.",
      "Şişli sınırlarındaki bir taşınmaza dair açılacak tahliye veya bedel tespiti davasına İstanbul (Çağlayan) Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır; işyeri kiralarında ayrıca ticari teamüller de değerlendirmeye alınabilir.",
    ],
    faqs: [
      { question: "Kiracı hangi durumlarda tahliyeye zorlanabilir?", answer: "Kira borcunun ödenmemesi, geçerli bir tahliye taahhüdü veya ev sahibinin ihtiyacı gibi kanunda sayılan sebeplerle tahliye istenebilir." },
      { question: "Şişli'de bir tahliye davası ortalama ne kadar sürüyor?", answer: "Dosyanın niteliğine ve mahkemenin yoğunluğuna bağlı olarak süreç birkaç aydan bir buçuk yıla kadar uzayabilir." },
      { question: "Rayiç bedel uyarlaması davası hangi şartlarda açılır?", answer: "Mevcut kira bedelinin piyasa koşullarının gerisinde kaldığı düşünüldüğünde, kanunda öngörülen usule uygun olarak açılabilir." },
      { question: "Taahhütnameye dayalı tahliyede mahkemeye gitmek gerekir mi?", answer: "Hayır, geçerli bir taahhütname varsa doğrudan icra dairesi kanalıyla tahliye talep edilebilir." },
      { question: "İşyeri kiralarında ek bir koruma söz konusu mudur?", answer: "Ticari kiralarda bazı özel usul ve süre kuralları uygulanabilir, sözleşmenin niteliğine göre değerlendirme yapılmalıdır." },
    ],
    howToTitle: "Şişli'de Kiracı Çıkarma Süreci Nasıl İşletilir?",
    howToSteps: [
      { name: "Hukuki Zeminin Belirlenmesi", text: "Tahliyeye dayanak oluşturacak sebep (taahhüt, temerrüt, ihtiyaç) netleştirilir." },
      { name: "Belgelerin Toplanması", text: "İhtarname, sözleşme veya taahhütname gibi belgeler bir araya getirilir." },
      { name: "Başvurunun Yapılması", text: "Duruma göre sulh hukuk mahkemesine dava açılır ya da icra dairesine başvurulur." },
      { name: "Sürecin Sonuçlandırılması", text: "Kesinleşen karar veya icra emri doğrultusunda taşınmazın tahliyesi sağlanır." },
    ],
    crosslinkLabel: "Kira ve Tahliye Avukatı",
    relatedPostSlugs: ["kiracinin-tahliye-sureci", "kira-bedeli-tespit-ve-uyarlama-davasi"],
  },

  // ─────────────────────────── VERGİ ───────────────────────────
  {
    slug: "vergi",
    urlSlug: "sisli-vergi-avukati",
    name: "Şişli Vergi Avukatı",
    heroTitle: "Şişli Vergi Avukatı",
    heroSubtitle:
      "Şişli Vergi Dairesi Müdürlüğü'nce düzenlenen tarhiyat, vergi ziyaı cezası ve ödeme emirlerinde süreler kaçırılmadan itiraz, uzlaşma ya da iptal davası yolunun seçilebilmesi için ihbarname incelenir ve dosya hazırlanır.",
    metaTitle: "Şişli Vergi Avukatı | Vergi Cezası ve Uzlaşma",
    metaDescription:
      "Şişli'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde hukuki danışmanlık.",
    aboutParagraph:
      "Avukat Furkan Arıkan, 72621 sicil numarasıyla İstanbul Barosu'na kayıtlıdır; hukuk eğitimini 2019'da MEF Üniversitesi'nde tamamlamıştır. Vergi hukuku dosyalarında ihbarname incelemesi, uzlaşma görüşmeleri ve vergi mahkemesi davalarında Şişli'deki mükellefleri temsil eder; ilk değerlendirme için ihbarname ve tebliğ evrakı yeterlidir.",
    highlightCards: [
      { title: "İhbarname İncelemesi", description: "Matrah, dayanak ve tebliğ usulünün sürelerle birlikte kontrol edilmesi." },
      { title: "Ceza ve Faiz İtirazları", description: "Vergi ziyaı, usulsüzlük cezası ile gecikme faizi hesaplarına karşı talepler." },
      { title: "Uzlaşma Hazırlığı", description: "Uzlaşma komisyonu görüşmesi öncesi dosyanın hazırlanması ve mükellefin temsili." },
      { title: "İptal Davası", description: "Dilekçenin hazırlanması, yürütmeyi durdurma isteminin değerlendirilmesi ve mahkeme takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Tarhiyat ve ceza ihbarnamelerinin içerik ve tebliğ yönünden incelenmesi",
      "Uzlaşma talebinin hazırlanması ve komisyon görüşmesinde mükellefin temsili",
      "Vergi mahkemesinde iptal davası dilekçesinin hazırlanması ve takibi",
      "Ödeme emrine karşı dava ve yürütmeyi durdurma talebi",
      "Vergi incelemesi sırasında belge sunumu ve savunma konusunda danışmanlık",
      "Gecikme faizi ve gecikme zammı hesaplamalarına yönelik itirazlar",
    ],
    localParagraphs: [
      "Şişli Vergi Dairesi Müdürlüğü, Mecidiyeköy, Esentepe, Teşvikiye ve Fulya gibi ticaret ve konutun iç içe geçtiği mahallelerdeki mükelleflerin kayıtlarını tutar. Bu dairenin tesis ettiği tarhiyat ve ceza işlemleri hakkındaki uyuşmazlıklar, İstanbul'daki vergi mahkemelerine taşınır.",
      "Maslak ve Ayazağa'daki büro işletmelerinde ve Nişantaşı çevresindeki hizmet işletmelerinde KDV indirimi ile kurumlar vergisi matrahına ilişkin incelemeler ihbarname konusu olabilir. Böyle bir ihbarname elinize ulaştığında önce tebliğ tarihi ve dava süresi netleştirilmelidir.",
    ],
    faqs: [
      { question: "Vergi ihbarnamesine karşı ne kadar sürede dava açılır?", answer: "Vergi mahkemesinde dava açma süresi, ihbarnamenin tebliğinden itibaren 30 gündür (2577 sayılı İYUK m.7). Süre tebliğ tarihinden işlediği için tebligatın usulüne uygun yapılıp yapılmadığı önce incelenir; süre kaçırılırsa dava esas yönünden değil, süre yönünden reddedilebilir." },
      { question: "Uzlaşma talep etmek dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma talebi dava hakkını ortadan kaldırmaz; uzlaşma sağlanamazsa dava yoluna başvurulabilir. Uzlaşma sağlanırsa tutanak kesinleşir ve o konuda dava açılamaz. Sürelerin nasıl işleyeceği mevzuata göre ayrıca hesaplandığından, uzlaşma talebinde bulunmadan önce mutlaka bir takvim çıkarılmalı ve dava süresi kontrol edilmelidir." },
      { question: "Ödeme emrine karşı hangi sürede başvurulabilir?", answer: "Ödeme emrine karşı başvuru süresi, tebliğ tarihini izleyen 15 gündür ve dava vergi mahkemesinde açılır. Dava; borcun kesinleşmemiş olması, zamanaşımı ya da tebligat eksikliği gibi gerekçelere dayanabilir. Takip işlemleri sürebileceğinden yürütmeyi durdurma talebi de ayrıca değerlendirilir." },
      { question: "Vergi incelemesi başladığında avukattan yardım alınabilir mi?", answer: "Evet; inceleme sırasında istenen belgelerin süresinde sunulması, imzalanan tutanakların okunması ve inceleme raporuna karşı savunma verilmesi bakımından hukuki danışmanlık alınabilir. Böylece ihbarname düzenlenmeden önce mükellefin hakları ve olası uyuşmazlık noktaları değerlendirilmiş olur; savunma metni de bu aşamada hazırlanabilir." },
      { question: "Şişli'deki vergi uyuşmazlıkları hangi mercide görülür?", answer: "Şişli Vergi Dairesi Müdürlüğü'nün tarhiyat ve ceza işlemlerine karşı açılan davalara İstanbul vergi mahkemeleri bakar. Karar sonrasında kanun yoluna başvurmak mümkündür. Dava dilekçesinde ihbarnamenin hangi vergi türüne, hangi vergilendirme dönemine ve hangi tutara ait olduğu açıkça belirtilmelidir." },
    ],
    howToTitle: "Şişli'de Vergi İhbarnamesine Karşı Hangi Yol İzlenir?",
    howToSteps: [
      { name: "Tebliğ Tarihinin Belirlenmesi", text: "İhbarnamenin ne zaman ve hangi usulle tebliğ edildiği saptanır, dava süresi buna göre hesaplanır." },
      { name: "Dayanakların Gözden Geçirilmesi", text: "Matrah, ceza gerekçesi ve inceleme raporu ile mükellefin defter ve belgeleri karşılaştırılır." },
      { name: "Uzlaşma veya Dava Seçimi", text: "Uzlaşma talep etmenin mi yoksa doğrudan iptal davası açmanın mı daha uygun olduğu değerlendirilir." },
      { name: "Başvuru ve Takip", text: "Süre içinde dilekçe verilir veya uzlaşma talep edilir; sonrasında dosya takip edilir." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "sisli-borclar-hukuku-avukati",
    name: "Şişli Borçlar Hukuku Avukatı",
    heroTitle: "Şişli Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Şişli'de faaliyet gösteren şirketlerin ve bireylerin ödenmeyen bedel, ifa edilmeyen edim ya da ayıplı teslimden doğan sorunlarında belge incelemesi, ihtar ve dava takibi yürütülür; yargılama Çağlayan'daki mahkemelerde görülür.",
    metaTitle: "Şişli Borçlar Hukuku Avukatı | Alacak Davası",
    metaDescription:
      "Şişli'de sözleşme uyuşmazlıkları, alacak ve tazminat davalarında hukuki danışmanlık ve dava takibi.",
    aboutParagraph:
      "İstanbul Barosu'nun 72621 sicil numaralı avukatı Furkan Arıkan, 2019'da MEF Üniversitesi'nin hukuk fakültesini bitirmiştir. Şişli'deki müvekkillerin sözleşme, alacak ve tazminat uyuşmazlıklarında dosya incelemesi, ihtarname, arabuluculuk ve dava aşamalarında vekil olarak çalışır; büro Beşiktaş/Sinanpaşa'dadır, görüşmeler yüz yüze ya da çevrim içi yapılabilir.",
    highlightCards: [
      { title: "Ticari Sözleşme İhlalleri", description: "Teslim gecikmesi, eksik ifa ve ödeme temerrüdüne dayanan taleplerin hazırlanması." },
      { title: "Alacak ve Cari Hesap", description: "Fatura, irsaliye ve cari hesap ekstresine dayanan tahsil davaları." },
      { title: "Dönme ve Ayıp Talepleri", description: "Temerrüt veya ayıplı teslimde dönme, bedel indirimi gibi seçimlik hakların değerlendirilmesi." },
      { title: "Zararın Tazmini", description: "Sözleşmeye aykırılıktan doğan maddi kaybın hesaplanması ve talep edilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sözleşmenin ihlali nedeniyle ifa, gecikme tazminatı ve dönme talepleri",
      "Fatura ve cari hesaba dayalı alacak davaları ile ilamsız icra takibi",
      "Ayıplı mal veya hizmet teslimine karşı seçimlik hakların kullanılması",
      "Cezai şart ve gecikme cezası uyuşmazlıkları",
      "Sözleşme taslaklarının hazırlanması ve mevcut metinlerin risk açısından gözden geçirilmesi",
      "Haksız ödeme veya hatalı havale kaynaklı sebepsiz zenginleşme talepleri",
    ],
    localParagraphs: [
      "Mecidiyeköy-Esentepe hattı ile Maslak ve Ayazağa'daki ofis yoğunluğu, Teşvikiye ve Harbiye çevresindeki perakende ve hizmet işletmeleri Şişli'de şirketler arası ilişkileri sık kılar. Bu ilişkilerde tedarik, danışmanlık ve kiralama sözleşmelerinin ifasına dair anlaşmazlıklar doğabilir.",
      "Dava öncesinde elde fatura, irsaliye, e-posta yazışması ve ihtarname gibi belgeler birikmiş olur; para alacağına dayanan ticari davalarda arabulucuya başvurmak dava şartıdır. Anlaşma çıkmazsa dosya uyuşmazlığın niteliğine göre Çağlayan'daki asliye ticaret veya asliye hukuk mahkemesine taşınır.",
    ],
    faqs: [
      { question: "Sözleşmeyi ihlal eden tarafa karşı hangi seçenekler vardır?", answer: "Temerrüde düşen borçluya karşı alacaklı, Türk Borçlar Kanunu m.125 uyarınca ifayı ve gecikme tazminatını isteyebilir, uygun bir süre vererek ifa talep edebilir ya da sözleşmeden dönebilir. Hangi yolun seçileceği edimin niteliğine, ihtar yapılıp yapılmadığına ve zararın kapsamına bakılarak belirlenir." },
      { question: "Ticari alacak davası açmadan önce arabulucuya başvurmak gerekir mi?", answer: "Evet, konusu bir miktar paranın ödenmesi olan ticari davalarda arabulucuya başvurmak, 6102 sayılı Türk Ticaret Kanunu m.5/A uyarınca dava şartıdır. Anlaşma sağlanamazsa son tutanakla birlikte dava açılır; Şişli'de yerleşik taraflar bakımından yargılama genellikle İstanbul (Çağlayan) Adliyesi'nde yürür." },
      { question: "Ayıplı mal veya hizmet teslim edildiğinde ne yapılabilir?", answer: "Alıcı, ayıbı süresinde bildirmek koşuluyla sözleşmeden dönme, bedelden indirim, ücretsiz onarım ya da ayıpsız misliyle değiştirme seçeneklerinden birini kullanabilir. Ticari satışlarda muayene ve ihbar yükümlülüğü sıkı işlediğinden, teslim anındaki tutanak ve yazışmaların saklanması önem taşır." },
      { question: "Cezai şart kararlaştırılmışsa zarar için ek bedel talep edilebilir mi?", answer: "Cezai şart, zarar ispat edilmeksizin istenebilen sabit bir bedeldir; zarar cezai şartı aşıyorsa ve borçlu kusursuz olduğunu ispatlayamazsa aşan kısım da talep edilebilir (TBK m.182). Cezai şart aşırı bulunursa hakim tarafından indirilebilir; sonuç sözleşme hükümlerine göre değişir." },
      { question: "Alacağın zamanaşımına uğrayıp uğramadığı nasıl anlaşılır?", answer: "Genel zamanaşımı süresi Türk Borçlar Kanunu m.146 uyarınca on yıldır; bazı alacaklar için daha kısa özel süreler öngörülmüştür. Borçlu zamanaşımı def'ini ileri sürmedikçe hakim bunu kendiliğinden dikkate almaz (TBK m.161); süre hesabı alacağın türüne ve doğum tarihine göre yapılır." },
    ],
    howToTitle: "Şişli'de Ticari Alacak veya Sözleşme Davası Hangi Adımlarla Açılır?",
    howToSteps: [
      { name: "Dayanak Belgelerin Toplanması", text: "Sözleşme, fatura, irsaliye, cari hesap kaydı ve yazışmalar bir araya getirilerek talebin hukuki dayanağı çıkarılır." },
      { name: "İhtarname ve Arabuluculuk", text: "Borçluya ihtarname gönderilir; ticari para alacağında dava öncesi arabulucuya başvurulur." },
      { name: "Dava Dilekçesinin Hazırlanması", text: "Yetkili mahkeme belirlenir, talepler ve deliller dilekçede toplanarak dava açılır." },
      { name: "Yargılama ve Tahsil", text: "Karar kesinleştikten sonra tahsil için gerekirse ilamlı icra yoluna başvurulur." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];

export const sisliServices: PseoService[] = [...sisliBaseServices, sisliMiras];
