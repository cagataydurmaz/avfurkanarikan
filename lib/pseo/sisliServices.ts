import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const sisliServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "sisli-avukat",
    name: "Şişli Avukat",
    heroTitle: "Şişli Avukat",
    heroSubtitle:
      "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında Şişli ve çevresindeki müvekkillere hukuki danışmanlık ve dava takibi hizmeti verilmektedir. Şişli, İstanbul (Çağlayan) Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Şişli Avukat",
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
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "sisli-bosanma-avukati",
    name: "Şişli Boşanma Avukatı",
    heroTitle: "Şişli Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal rejimi tasfiyesi süreçlerinde hukuki danışmanlık. Şişli, İstanbul (Çağlayan) Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Şişli Boşanma Avukatı",
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
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "sisli-ceza-avukati",
    name: "Şişli Ceza Avukatı",
    heroTitle: "Şişli Ceza Avukatı",
    heroSubtitle:
      "Soruşturma ve kovuşturma süreçlerinde müdafilik, ifade ve sorgu süreçlerinde hukuki destek, tutukluluğa itiraz. Şişli, İstanbul (Çağlayan) Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Şişli Ceza Avukatı",
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
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "sisli-gayrimenkul-avukati",
    name: "Şişli Gayrimenkul Avukatı",
    heroTitle: "Şişli Gayrimenkul Avukatı",
    heroSubtitle:
      "Tapu iptali, kira uyuşmazlıkları, tahliye süreçleri ve gayrimenkul sözleşmelerinde hukuki destek. Şişli, İstanbul (Çağlayan) Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Şişli Gayrimenkul Avukatı",
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
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "sisli-icra-avukati",
    name: "Şişli İcra Avukatı",
    heroTitle: "Şişli İcra Avukatı",
    heroSubtitle:
      "İcra takibi başlatılması, ödeme emrine itiraz, haciz ve ihale süreçlerinde hukuki destek. Şişli, İstanbul (Çağlayan) Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Şişli İcra Avukatı",
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
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "sisli-idare-avukati",
    name: "Şişli İdare Avukatı",
    heroTitle: "Şişli İdare Avukatı",
    heroSubtitle:
      "İdari işlemlerin iptali, tam yargı davaları ve idari başvuru süreçlerinde hukuki destek. Yetkili yargı mercii İstanbul idare mahkemeleridir.",
    metaTitle: "Şişli İdare Avukatı",
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
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "sisli-is-hukuku-avukati",
    name: "Şişli İş Hukuku Avukatı",
    heroTitle: "Şişli İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem ve ihbar tazminatı, işe iade davası ve iş sözleşmesi uyuşmazlıklarında hukuki destek. Şişli, İstanbul (Çağlayan) Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Şişli İş Hukuku Avukatı",
    metaDescription:
      "Şişli'de kıdem-ihbar tazminatı, işe iade davası ve iş sözleşmesi uyuşmazlıklarında hukuki danışmanlık.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na kayıtlı (Sicil No: 72621) bir avukat olarak iş hukuku kapsamında işçi ve işveren tarafında danışmanlık ve dava takibi hizmeti sunmaktadır. 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Kıdem ve İhbar Tazminatı", description: "Haksız fesih halinde tazminat taleplerinin takibi." },
      { title: "İşe İade Davası", description: "İş güvencesi kapsamında işe iade sürecinin yürütülmesi." },
      { title: "İşçilik Alacakları", description: "Fazla mesai, izin ve ücret alacaklarının tahsili." },
      { title: "Sözleşme Düzenlenmesi", description: "İş sözleşmesi ve ibraname metinlerinin hazırlanması." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kıdem ve ihbar tazminatı davaları",
      "İşe iade davası ve arabuluculuk süreci",
      "Fazla mesai, hafta tatili ve yıllık izin alacakları",
      "Mobbing iddialarına ilişkin süreçler",
      "İş sözleşmesi ve ibraname düzenlenmesi",
      "İş kazası ve meslek hastalığından doğan tazminat davaları",
    ],
    localParagraphs: [
      "Şişli, Mecidiyeköy, Esentepe ve Maslak gibi İstanbul'un önemli iş merkezlerinden bazılarını barındıran bir ilçedir. Bu bölgelerde çalışan işçilerin iş sözleşmesinden doğan uyuşmazlıkları, diğer iş hukuku davaları gibi önce zorunlu arabuluculuk sürecinden geçmektedir.",
      "İşe iade ve işçilik alacaklarına ilişkin dava açılmadan önce arabulucuya başvuru zorunludur; anlaşma sağlanamazsa dava İstanbul (Çağlayan) Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "İşe iade davası açmadan önce ne yapılmalı?", answer: "Fesih bildiriminden itibaren 1 ay içinde arabulucuya başvurulması zorunludur." },
      { question: "Kıdem tazminatı hangi hallerde ödenir?", answer: "İşverenin haksız feshi, işçinin haklı sebeple istifası, emeklilik gibi kanunda sayılan hallerde ödenir." },
      { question: "Şişli'de iş davası hangi mahkemede görülür?", answer: "İstanbul (Çağlayan) Adliyesi bünyesindeki iş mahkemelerinde görülür." },
      { question: "Fazla mesai alacağı nasıl ispatlanır?", answer: "Bordro, yazışmalar ve tanık beyanı gibi delillerle ispatlanabilir." },
      { question: "İşçilik alacaklarında zamanaşımı süresi nedir?", answer: "Kıdem ve ihbar tazminatı dahil çoğu işçilik alacağı için 5 yıllık zamanaşımı süresi uygulanır." },
    ],
    howToTitle: "Şişli'de İşe İade Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Fesih Bildiriminin İncelenmesi", text: "İş sözleşmesinin feshine ilişkin bildirim incelenir." },
      { name: "Arabulucuya Başvuru", text: "Fesihten itibaren 1 ay içinde arabulucuya başvurulur." },
      { name: "Dava Açılması", text: "Anlaşma sağlanamazsa 2 hafta içinde iş mahkemesinde dava açılır." },
      { name: "Yargılama ve Karar", text: "Mahkeme feshin geçerliliğini değerlendirir ve kararını verir." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "sisli-kira-tahliye-avukati",
    name: "Şişli Kira ve Tahliye Avukatı",
    heroTitle: "Şişli Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında hukuki destek. Şişli, İstanbul (Çağlayan) Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Şişli Kira ve Tahliye Avukatı",
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
  },

  // ─────────────────────────── VERGİ ───────────────────────────
  {
    slug: "vergi",
    urlSlug: "sisli-vergi-avukati",
    name: "Şişli Vergi Avukatı",
    heroTitle: "Şişli Vergi Avukatı",
    heroSubtitle:
      "Vergi tarhiyatına itiraz, vergi cezalarına karşı dava ve uzlaşma süreçlerinde hukuki destek. Yetkili yargı mercii İstanbul vergi mahkemeleridir.",
    metaTitle: "Şişli Vergi Avukatı",
    metaDescription:
      "Şişli'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde hukuki danışmanlık.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na kayıtlı (Sicil No: 72621) bir avukat olarak vergi hukuku kapsamında vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda danışmanlık ve dava takibi hizmeti sunmaktadır. 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Vergi Tarhiyatına İtiraz", description: "Re'sen veya ikmalen tarh edilen vergilere karşı dava." },
      { title: "Vergi Cezaları", description: "Usulsüzlük ve vergi ziyaı cezalarına karşı hukuki destek." },
      { title: "Uzlaşma Süreci", description: "Vergi idaresiyle uzlaşma görüşmelerinde temsil." },
      { title: "Vergi Mahkemesi Süreci", description: "Vergi mahkemesinde dava açılması ve takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi/ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusu ve görüşmelerinde temsil",
      "Vergi mahkemesinde iptal davası açılması",
      "Ödeme emrine karşı dava açılması",
      "Vergi incelemesi sürecinde danışmanlık",
      "Gecikme faizi ve gecikme zammına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Şişli'de mükellefiyeti bulunan gerçek ve tüzel kişilerin vergisel işlemleri Şişli Vergi Dairesi Müdürlüğü tarafından yürütülmektedir. Bu daire tarafından tesis edilen tarhiyat ve ceza kesme işlemlerine karşı açılacak davalar İstanbul vergi mahkemelerinde görülür.",
      "Mecidiyeköy, Esentepe ve Maslak gibi yoğun ticari faaliyetin bulunduğu bölgelerde kurumlar vergisi ve KDV kaynaklı uyuşmazlıklar Şişli'de sıklıkla gündeme gelmektedir.",
    ],
    faqs: [
      { question: "Vergi ihbarnamesine karşı dava açma süresi ne kadardır?", answer: "Tebliğ tarihinden itibaren 30 gündür." },
      { question: "Şişli'de vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Uzlaşma talep edilirse dava hakkı kaybedilir mi?", answer: "Uzlaşma sağlanamazsa kalan süre içinde dava açma hakkı devam eder." },
      { question: "Ödeme emrine itiraz süresi ne kadardır?", answer: "Tebliğinden itibaren 15 gün içinde vergi mahkemesinde dava açılabilir." },
      { question: "Vergi incelemesi sürecinde hukuki destek alınabilir mi?", answer: "Evet, inceleme sürecinde mükellefin haklarının korunması amacıyla danışmanlık sağlanabilir." },
    ],
    howToTitle: "Şişli'de Vergi Tarhiyatına İtiraz Nasıl Yapılır?",
    howToSteps: [
      { name: "İhbarnamenin İncelenmesi", text: "Tarhiyata veya cezaya ilişkin ihbarname ve dayanağı incelenir." },
      { name: "Uzlaşma veya Dava Kararı", text: "Uzlaşma başvurusu mu yoksa doğrudan dava mı açılacağı değerlendirilir." },
      { name: "Başvurunun Yapılması", text: "30 gün içinde vergi mahkemesinde dava açılır veya uzlaşma talep edilir." },
      { name: "Sonuçlandırma", text: "Mahkeme kararı veya uzlaşma tutanağı ile süreç sonuçlandırılır." },
    ],
    crosslinkLabel: "Vergi Avukatı",
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "sisli-borclar-hukuku-avukati",
    name: "Şişli Borçlar Hukuku Avukatı",
    heroTitle: "Şişli Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Sözleşme uyuşmazlıkları, alacak ve tazminat davaları, sözleşmeden dönme ve ayıplı ifa süreçlerinde hukuki destek. Şişli, İstanbul (Çağlayan) Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Şişli Borçlar Hukuku Avukatı",
    metaDescription:
      "Şişli'de sözleşme uyuşmazlıkları, alacak ve tazminat davalarında hukuki danışmanlık ve dava takibi.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na kayıtlı (Sicil No: 72621) bir avukat olarak borçlar hukuku kapsamında sözleşme ve alacak uyuşmazlıklarında danışmanlık ve dava takibi hizmeti sunmaktadır. 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Sözleşme Uyuşmazlıkları", description: "Sözleşmenin ifası, ihlali ve feshine ilişkin süreçler." },
      { title: "Alacak Davaları", description: "Para alacaklarının tahsili amacıyla dava ve takip." },
      { title: "Sözleşmeden Dönme", description: "Temerrüt veya ayıplı ifa nedeniyle dönme talepleri." },
      { title: "Tazminat Davaları", description: "Sözleşmeye aykırılıktan doğan zararların tazmini." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sözleşmenin ifası ve ihlaline ilişkin davalar",
      "Alacak davası ve icra takibi süreçleri",
      "Sözleşmeden dönme ve ayıplı ifa uyuşmazlıkları",
      "Sözleşmeye aykırılıktan doğan tazminat davaları",
      "Sözleşme metinlerinin hazırlanması ve incelenmesi",
      "Sebepsiz zenginleşme davaları",
    ],
    localParagraphs: [
      "Şişli, özellikle Mecidiyeköy, Esentepe ve Maslak çevresinde yoğunlaşan ticari faaliyetler nedeniyle şirketler arası sözleşme uyuşmazlıklarının sıkça gündeme geldiği bir ilçedir. Bu uyuşmazlıklara ilişkin davalar, niteliğine göre İstanbul (Çağlayan) Adliyesi'ndeki asliye hukuk veya ticaret mahkemelerinde görülür.",
      "Şişli'de yerleşik gerçek ve tüzel kişiler arasındaki bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunluluğu bulunabilir; bu husus alacağın niteliğine göre değerlendirilir.",
    ],
    faqs: [
      { question: "Sözleşmeden dönme ile fesih arasındaki fark nedir?", answer: "Dönme sözleşmeyi geriye etkili, fesih ise ileriye etkili olarak sona erdirir." },
      { question: "Şişli'de ticari alacak davası hangi mahkemede görülür?", answer: "Uyuşmazlığın niteliğine göre asliye ticaret mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde görülür." },
      { question: "Alacak davası açmadan önce arabuluculuk zorunlu mu?", answer: "Ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak arabuluculuk zorunludur." },
      { question: "Ayıplı ifa halinde hangi haklar kullanılabilir?", answer: "Sözleşmeden dönme, bedel indirimi, ücretsiz onarım veya misli ile değişim talep edilebilir." },
      { question: "Zamanaşımına uğrayan alacak talep edilebilir mi?", answer: "Zamanaşımı def'i ileri sürülürse talep edilemez; borçlu bunu ileri sürmezse alacak talep edilebilir." },
    ],
    howToTitle: "Şişli'de Alacak Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Alacağın ve Delillerin Tespiti", text: "Sözleşme, fatura veya diğer belgelerle alacağın dayanağı ortaya konur." },
      { name: "İhtar ve Ön Koşulların Yerine Getirilmesi", text: "Gerekiyorsa ihtarname çekilir veya arabuluculuk başvurusu yapılır." },
      { name: "Dava Açılması", text: "Yetkili mahkemede alacak davası açılır." },
      { name: "Yargılama ve İcra", text: "Kararın kesinleşmesinin ardından gerekirse icra takibi başlatılır." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
  },
];
