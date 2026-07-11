import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const besiktasServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "besiktas-avukat",
    name: "Beşiktaş Avukat",
    heroTitle: "Beşiktaş Avukat",
    heroSubtitle:
      "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında Beşiktaş ve çevresindeki müvekkillere hukuki danışmanlık ve dava takibi hizmeti sunulmaktadır. Yetkili adliye İstanbul (Çağlayan) Adliyesi'dir.",
    metaTitle: "Beşiktaş Avukat",
    metaDescription:
      "Beşiktaş ve çevresinde ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında hukuki danışmanlık ve dava takibi.",
    aboutParagraph:
      "Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na (Sicil No: 72621) kayıtlı olarak avukatlık mesleğini sürdürmektedir. Ceza, iş, gayrimenkul, aile, icra-iflas, idare, vergi ve borçlar hukuku alanlarında müvekkillere hukuki danışmanlık ve dava takibi hizmeti sunulmaktadır. Randevu bazlı çalışma prensibiyle her dosyaya ayrı zaman ayrılmaktadır.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma süreçlerinde müdafilik, tutukluluk itirazı." },
      { title: "Aile Hukuku", description: "Boşanma, velayet, nafaka ve mal rejimi tasfiyesi davaları." },
      { title: "Gayrimenkul Hukuku", description: "Tapu iptal-tescil, kira uyuşmazlıkları ve tahliye süreçleri." },
      { title: "İş Hukuku", description: "Kıdem-ihbar tazminatı, işe iade ve iş sözleşmesi uyuşmazlıkları." },
      { title: "İcra Hukuku", description: "İcra takibi, itiraz ve haciz işlemlerinde temsil." },
      { title: "İdare Hukuku", description: "İdari işlemlere karşı iptal davaları ve tam yargı davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatlarına itiraz ve vergi mahkemesi süreçleri." },
      { title: "Borçlar Hukuku", description: "Sözleşme uyuşmazlıkları, alacak ve tazminat davaları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Ceza hukuku - soruşturma ve kovuşturma süreçlerinde müdafilik",
      "Aile hukuku - boşanma, velayet, nafaka",
      "Gayrimenkul hukuku - tapu, kira, tahliye",
      "İş hukuku - kıdem, ihbar, işe iade",
      "İcra ve iflas hukuku - icra takibi ve itiraz",
      "İdare hukuku - idari işlemlere karşı iptal davaları",
      "Vergi hukuku - vergi uyuşmazlıkları",
      "Borçlar hukuku - sözleşme ve alacak davaları",
    ],
    localParagraphs: [
      "Beşiktaş, İstanbul Boğazı kıyısında yer alan ve Sinanpaşa, Bebek, Etiler, Ortaköy, Levent, Arnavutköy, Kuruçeşme gibi mahalleleri kapsayan bir ilçedir. İlçe, adli yargı bakımından İstanbul (Çağlayan) Adliyesi'nin yetki alanında yer almaktadır.",
      "Beşiktaş'ta ikamet eden veya işyeri bulunan kişilerin hukuki uyuşmazlıkları genel olarak İstanbul Adliyesi'ndeki ilgili mahkemelerde, idari uyuşmazlıklar İstanbul idare mahkemelerinde, vergi uyuşmazlıkları ise İstanbul vergi mahkemelerinde görülmektedir. Vergiyle ilgili idari başvurularda yetkili vergi dairesi Beşiktaş Vergi Dairesi Müdürlüğü'dür.",
    ],
    faqs: [
      { question: "Beşiktaş'ta hangi adliye yetkilidir?", answer: "Beşiktaş ilçesi İstanbul (Çağlayan) Adliyesi'nin yargı çevresinde yer almaktadır." },
      { question: "İlk danışmanlık görüşmesi ücretsiz mi?", answer: "Danışmanlık görüşmeleri ücret karşılığı yapılmaktadır." },
      { question: "Hangi hukuk alanlarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunulmaktadır." },
      { question: "Ofis Beşiktaş'ın neresinde?", answer: "Ofis Sinanpaşa Mahallesi'nde, Şehit Asım Caddesi üzerindedir. Tam adres iletişim bölümünde yer almaktadır." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefon üzerinden ulaşılarak randevu talep edilebilir." },
      { question: "Dava takibi İstanbul dışında da yapılıyor mu?", answer: "Dosyanın niteliğine göre değerlendirilmektedir; bu konuda görüşme sırasında bilgi verilmektedir." },
      { question: "Vekalet ücreti nasıl belirlenir?", answer: "Vekalet ücreti; davanın niteliği, kapsamı ve süresine göre belirlenir, danışmanlık görüşmesinde bilgi verilir." },
      { question: "Yazılı hukuki görüş (mütalaa) veriliyor mu?", answer: "Talep edilmesi halinde belirli konularda yazılı hukuki görüş hazırlanabilmektedir." },
      { question: "Beşiktaş Vergi Dairesi ile ilgili uyuşmazlıklarda yardım alınabilir mi?", answer: "Evet, vergi tarhiyatına itiraz ve vergi mahkemesi süreçlerinde hukuki destek sağlanmaktadır." },
      { question: "Acil gözaltı durumunda iletişime geçilebilir mi?", answer: "Gözaltı ve benzeri acil durumlarda telefon veya WhatsApp üzerinden iletişime geçilebilir." },
      { question: "Online/uzaktan görüşme yapılıyor mu?", answer: "Görüşmeler yüz yüze veya çevrim içi olarak gerçekleştirilebilmektedir." },
    ],
    howToTitle: "Beşiktaş'ta Avukatlık Hizmetinden Nasıl Yararlanılır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Beşiktaş Avukat (Genel)",
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "besiktas-bosanma-avukati",
    name: "Beşiktaş Boşanma Avukatı",
    heroTitle: "Beşiktaş Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma davaları, velayet, nafaka ve mal rejimi tasfiyesi konularında hukuki danışmanlık ve dava takibi. Yetkili adliye İstanbul (Çağlayan) Adliyesi'dir.",
    metaTitle: "Beşiktaş Boşanma Avukatı",
    metaDescription:
      "Beşiktaş'ta anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal rejimi tasfiyesi konularında hukuki destek.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na kayıtlı (Sicil No: 72621) bir avukat olarak aile hukuku kapsamındaki boşanma, velayet ve nafaka davalarında müvekkillere hukuki danışmanlık ve dava takibi hizmeti sunmaktadır. 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Anlaşmalı Boşanma", description: "Protokol hazırlanması ve duruşma sürecinde temsil." },
      { title: "Çekişmeli Boşanma", description: "Kusur, tazminat ve velayet uyuşmazlıklarında dava takibi." },
      { title: "Velayet", description: "Çocuğun üstün yararı ilkesi çerçevesinde velayet düzenlemesi." },
      { title: "Nafaka", description: "Tedbir, iştirak ve yoksulluk nafakası taleplerinde temsil." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlanması",
      "Çekişmeli boşanma davası açılması ve takibi",
      "Velayet düzenlemesi ve velayet değişikliği davaları",
      "Nafaka artırım, azaltım ve kaldırma davaları",
      "Mal rejimi tasfiyesi (katkı payı, katılma alacağı)",
      "Boşanmada maddi ve manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Beşiktaş; Sinanpaşa, Bebek, Etiler, Levent, Ortaköy, Arnavutköy ve Kuruçeşme gibi mahalleleri kapsayan, İstanbul Boğazı kıyısında yer alan bir ilçedir. Bu ilçede ikamet eden çiftlerin boşanma davaları, taraflardan birinin yerleşim yeri veya son altı aydır birlikte oturdukları yer aile mahkemesinde açılabilir.",
      "Beşiktaş'ta açılan aile hukuku davaları İstanbul (Çağlayan) Adliyesi'ndeki aile mahkemelerinde görülmektedir. Anlaşmalı boşanmada protokolün eksiksiz hazırlanması, çekişmeli boşanmada ise kusur ve mal rejimi iddialarının delillerle desteklenmesi süreç açısından önem taşır.",
    ],
    faqs: [
      { question: "Anlaşmalı boşanma ne kadar sürer?", answer: "Taraflar ve protokol hazır olduğunda genellikle tek duruşmada sonuçlanabilir; kesin süre mahkemenin iş yüküne bağlıdır." },
      { question: "Çekişmeli boşanma davası nerede açılır?", answer: "Eşlerden birinin yerleşim yeri veya davadan önce son altı aydır birlikte oturulan yer aile mahkemesinde açılır." },
      { question: "Velayet kararı neye göre verilir?", answer: "Mahkeme, çocuğun üstün yararı ilkesini esas alarak karar verir; ebeveynlerin durumu somut olarak değerlendirilir." },
      { question: "Nafaka miktarı nasıl belirlenir?", answer: "Tarafların ekonomik durumu, ihtiyaçlar ve kusur durumu birlikte değerlendirilerek belirlenir." },
      { question: "Boşanmada mal paylaşımı nasıl yapılır?", answer: "Evlilik süresince edinilen mallar, kanunda öngörülen mal rejimine göre (genellikle edinilmiş mallara katılma) paylaştırılır." },
      { question: "Anlaşmalı boşanmadan sonra dava tekrar açılabilir mi?", answer: "Kesinleşmiş anlaşmalı boşanma kararına karşı, kanunda öngörülen istisnai haller dışında yeniden dava açılamaz." },
      { question: "Boşanma davasında avukat zorunlu mu?", answer: "Kanunen zorunlu değildir, ancak sürecin hak kaybı yaşanmadan yürütülmesi açısından hukuki destek alınması önerilir." },
      { question: "Beşiktaş'ta boşanma davası hangi mahkemede görülür?", answer: "İstanbul (Çağlayan) Adliyesi bünyesindeki aile mahkemelerinde görülür." },
      { question: "Velayet kendisinde olmayan ebeveynin hakları nelerdir?", answer: "Kişisel ilişki (görüşme) hakkı saklıdır; kapsamı mahkeme tarafından belirlenir." },
      { question: "Boşanma sürecinde tedbir nafakası talep edilebilir mi?", answer: "Evet, dava süresince ihtiyaç sahibi eş veya çocuklar lehine tedbir nafakasına hükmedilebilir." },
    ],
    howToTitle: "Beşiktaş'ta Boşanma Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Hukuki Değerlendirme", text: "Evlilik birliğinin durumu ve talepler (velayet, nafaka, mal rejimi) değerlendirilir." },
      { name: "Dilekçe ve Belgelerin Hazırlanması", text: "Boşanma dilekçesi ve varsa anlaşmalı boşanma protokolü hazırlanır." },
      { name: "Davanın Açılması", text: "Yetkili aile mahkemesine dava açılır, duruşma günü beklenir." },
      { name: "Duruşma ve Karar", text: "Duruşmada taraflar dinlenir, mahkeme kararını verir; karar kesinleştiğinde süreç tamamlanır." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "besiktas-ceza-avukati",
    name: "Beşiktaş Ceza Avukatı",
    heroTitle: "Beşiktaş Ceza Avukatı",
    heroSubtitle:
      "Soruşturma ve kovuşturma aşamalarında müdafilik, ifade ve sorgu süreçlerinde hukuki destek, tutukluluk itirazları. Yetkili adliye İstanbul (Çağlayan) Adliyesi'dir.",
    metaTitle: "Beşiktaş Ceza Avukatı",
    metaDescription:
      "Beşiktaş'ta soruşturma ve kovuşturma süreçlerinde müdafilik, tutukluluk itirazı ve ceza davası takibi.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na kayıtlı (Sicil No: 72621) bir avukat olarak ceza hukuku kapsamında soruşturma ve kovuşturma aşamalarında müdafilik hizmeti sunmaktadır. 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade, gözaltı ve tutukluluk süreçlerinde müdafilik." },
      { title: "Kovuşturma Aşaması", description: "Duruşmalarda savunma, delil değerlendirmesi ve dava takibi." },
      { title: "Tutukluluk İtirazı", description: "Tutukluluk kararlarına ve devamına karşı itiraz süreçleri." },
      { title: "İstinaf ve Temyiz", description: "Bölge Adliye Mahkemesi ve Yargıtay aşamalarında temsil." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı ve ifade sürecinde müdafilik",
      "Soruşturma dosyasının incelenmesi ve itiraz süreçleri",
      "Tutukluluk kararına ve devamına itiraz",
      "Kovuşturma aşamasında duruşma takibi",
      "İstinaf ve temyiz başvuruları",
      "Etkin pişmanlık ve uzlaşma süreçlerinde danışmanlık",
    ],
    localParagraphs: [
      "Beşiktaş ilçesinde işlendiği iddia edilen suçlara ilişkin soruşturmalar Beşiktaş'taki kolluk birimlerince yürütülse de, kovuşturma aşamasındaki davalar İstanbul (Çağlayan) Adliyesi'nde görülmektedir. İlçe; Sinanpaşa, Levent, Etiler, Ortaköy gibi yoğun nüfuslu ve ticari hareketliliğin yüksek olduğu mahalleleri kapsamaktadır.",
      "Gözaltına alınan kişinin müdafi ile görüşme hakkı, gözaltının başladığı andan itibaren mevcuttur. Beşiktaş sınırları içinde gerçekleşen bir gözaltı işleminde bu hakkın zamanında ve etkin şekilde kullanılması, savunmanın hazırlanması açısından önemlidir.",
    ],
    faqs: [
      { question: "Beşiktaş'ta işlenen bir suç hangi adliyede görülür?", answer: "Kovuşturma aşamasındaki dava İstanbul (Çağlayan) Adliyesi'nde görülür." },
      { question: "Gözaltına alındığımda avukata ne zaman ulaşabilirim?", answer: "Gözaltının başladığı andan itibaren müdafi ile görüşme hakkı mevcuttur." },
      { question: "Müdafi tutmak zorunlu mu?", answer: "Alt sınırı 5 yıl veya daha fazla hapis cezasını gerektiren suçlarda ve bazı özel hallerde müdafi zorunludur; diğer durumlarda isteğe bağlıdır." },
      { question: "Tutukluluk kararına nasıl itiraz edilir?", answer: "Tutukluluk kararına karşı itiraz, kararı veren merciin bağlı olduğu ağır ceza mahkemesine yapılır." },
      { question: "Etkin pişmanlık her suçta uygulanır mı?", answer: "Hayır, yalnızca kanunda açıkça düzenlenen suç tiplerinde uygulanır." },
      { question: "Adli kontrol nedir?", answer: "Tutuklamaya alternatif olarak uygulanan, yurt dışı çıkış yasağı veya imza yükümlülüğü gibi tedbirleri kapsayan bir uygulamadır." },
      { question: "Şikayetçi olduğum bir dosyada hukuki destek alabilir miyim?", answer: "Evet, mağdur veya şikayetçi sıfatıyla da süreç takibi ve hukuki danışmanlık sağlanabilir." },
      { question: "Beraat kararına karşı istinaf mümkün mü?", answer: "Evet, kararın usul ve esas yönünden hatalı olduğu düşünülüyorsa istinaf yoluna başvurulabilir." },
      { question: "Soruşturma dosyasına erişim ne zaman mümkün olur?", answer: "Kural olarak müdafi soruşturma dosyasını inceleyebilir; bazı hallerde kısıtlama kararı verilebilir." },
      { question: "Uzlaşma teklifini kabul etmek zorunlu mu?", answer: "Hayır, uzlaşma tarafların iradesine bağlıdır, kabul edilmesi zorunlu değildir." },
    ],
    howToTitle: "Beşiktaş'ta Ceza Davası Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Soruşturma", text: "Şikayet veya ihbar üzerine savcılık soruşturması başlar, ifade alınabilir." },
      { name: "Müdafi ile Görüşme", text: "Şüpheli, gözaltı veya ifade öncesinde müdafi ile görüşme hakkını kullanabilir." },
      { name: "İddianame ve Kovuşturma", text: "İddianamenin kabulüyle dava açılır, duruşmalar başlar." },
      { name: "Karar ve Kanun Yolları", text: "Mahkeme kararının ardından gerekirse istinaf veya temyiz yoluna başvurulur." },
    ],
    crosslinkLabel: "Ceza Avukatı",
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "besiktas-gayrimenkul-avukati",
    name: "Beşiktaş Gayrimenkul Avukatı",
    heroTitle: "Beşiktaş Gayrimenkul Avukatı",
    heroSubtitle:
      "Tapu iptal ve tescil davaları, kira uyuşmazlıkları, tahliye süreçleri ve gayrimenkul alım-satım sözleşmelerinde hukuki destek. Yetkili adliye İstanbul (Çağlayan) Adliyesi'dir.",
    metaTitle: "Beşiktaş Gayrimenkul Avukatı",
    metaDescription:
      "Beşiktaş'ta tapu iptali, kira uyuşmazlıkları, tahliye ve gayrimenkul sözleşmelerinde hukuki danışmanlık ve dava takibi.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na kayıtlı (Sicil No: 72621) bir avukat olarak gayrimenkul hukuku kapsamında tapu, kira ve tahliye uyuşmazlıklarında müvekkillere hukuki danışmanlık ve dava takibi hizmeti sunmaktadır. 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Tapu İptal ve Tescil", description: "Hatalı veya usulsüz tapu işlemlerine karşı dava takibi." },
      { title: "Kira Uyuşmazlıkları", description: "Kira bedeli tespiti, uyarlama ve tahliye davaları." },
      { title: "Kat Mülkiyeti", description: "Ortak alan ve yönetim planı kaynaklı uyuşmazlıklar." },
      { title: "Alım-Satım Sözleşmeleri", description: "Gayrimenkul satış sözleşmelerinin hazırlanması ve incelenmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Tapu iptal ve tescil davaları",
      "Kira bedeli tespiti ve uyarlama davaları",
      "Kiracı tahliyesi (tahliye taahhüdü, ihtiyaç nedeniyle tahliye)",
      "Kat mülkiyeti ve yönetim planı uyuşmazlıkları",
      "Ortaklığın giderilmesi (izale-i şüyu) davaları",
      "Gayrimenkul alım-satım sözleşmelerinin düzenlenmesi",
    ],
    localParagraphs: [
      "Beşiktaş; Bebek, Etiler, Levent, Ortaköy, Arnavutköy, Kuruçeşme gibi konut ve işyeri yoğunluğu yüksek mahalleleri kapsayan bir ilçedir. Bu bölgelerdeki gayrimenkullere ilişkin tapu, kira ve kat mülkiyeti uyuşmazlıkları sıklıkla İstanbul (Çağlayan) Adliyesi'ndeki sulh hukuk ve asliye hukuk mahkemelerinde görülür.",
      "Kira sözleşmelerine ilişkin tahliye davalarında yetkili mahkeme, kural olarak taşınmazın bulunduğu yer sulh hukuk mahkemesidir. Beşiktaş sınırları içindeki bir taşınmaza ilişkin tahliye veya kira bedeli uyuşmazlığında da bu kural geçerlidir.",
    ],
    faqs: [
      { question: "Tapu iptal davası ne zaman açılabilir?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda, hak sahibi tapu iptal ve tescil davası açabilir." },
      { question: "Kiracı tahliyesi hangi hallerde mümkündür?", answer: "Tahliye taahhüdü, kira bedelinin ödenmemesi, ihtiyaç nedeniyle tahliye gibi kanunda öngörülen hallerde mümkündür." },
      { question: "Kira bedeli tespiti davası nedir?", answer: "Kira bedelinin günün rayiç değerine uyarlanması amacıyla açılan bir davadır." },
      { question: "Beşiktaş'ta gayrimenkul davası hangi mahkemede görülür?", answer: "Taşınmazın türüne ve uyuşmazlığın niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde görülür." },
      { question: "Kat mülkiyetinde ortak gider uyuşmazlıkları nasıl çözülür?", answer: "Öncelikle yönetim planı ve Kat Mülkiyeti Kanunu hükümleri çerçevesinde değerlendirilir, gerekirse dava yoluna gidilir." },
      { question: "Ortaklığın giderilmesi davası nedir?", answer: "Paylı veya elbirliği mülkiyetindeki bir taşınmazın satış veya taksim yoluyla ortaklığının sona erdirilmesi için açılan davadır." },
      { question: "Tahliye taahhütnamesi ile icra yoluyla tahliye mümkün mü?", answer: "Evet, geçerli bir tahliye taahhüdü bulunması halinde icra yoluyla tahliye talep edilebilir." },
      { question: "Gayrimenkul alım satımında avukat kontrolü neden önemlidir?", answer: "Tapu kaydı, ipotek ve şerh durumu gibi hususların incelenmesi ilerideki uyuşmazlıkların önlenmesine katkı sağlar." },
    ],
    howToTitle: "Beşiktaş'ta Tapu İptali Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Tapu Kaydının İncelenmesi", text: "Taşınmazın güncel tapu kaydı ve varsa şerhler incelenir." },
      { name: "Hukuki Gerekçenin Belirlenmesi", text: "İptal talebinin dayanağı (hile, ehliyetsizlik, usulsüzlük vb.) tespit edilir." },
      { name: "Dava Dilekçesinin Hazırlanması", text: "Talep ve deliller dilekçede ortaya konur, dava açılır." },
      { name: "Yargılama ve Karar", text: "Bilirkişi incelemesi ve duruşmaların ardından mahkeme kararını verir." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "besiktas-icra-avukati",
    name: "Beşiktaş İcra Avukatı",
    heroTitle: "Beşiktaş İcra Avukatı",
    heroSubtitle:
      "İcra takibi başlatılması, itiraz, haciz ve ihale süreçlerinde hukuki destek. Yetkili adliye İstanbul (Çağlayan) Adliyesi'dir.",
    metaTitle: "Beşiktaş İcra Avukatı",
    metaDescription:
      "Beşiktaş'ta icra takibi, itiraz, haciz ve alacak tahsili süreçlerinde hukuki danışmanlık ve dava takibi.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na kayıtlı (Sicil No: 72621) bir avukat olarak icra ve iflas hukuku kapsamında alacaklı ve borçlu tarafında hukuki danışmanlık ve takip hizmeti sunmaktadır. 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "İcra Takibi Başlatma", description: "İlamlı ve ilamsız icra takibi süreçlerinin yürütülmesi." },
      { title: "İtiraz ve İtirazın İptali", description: "Ödeme emrine itiraz ve itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul ve gayrimenkul üzerine haciz süreçlerinin takibi." },
      { title: "İflas ve Konkordato", description: "İflas ve konkordato süreçlerinde danışmanlık." },
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
      "Beşiktaş'ta yerleşik gerçek veya tüzel kişilere karşı başlatılacak icra takipleri, borçlunun yerleşim yerindeki veya sözleşmede belirlenen yetkili icra dairesinde yürütülür; bu takiplere ilişkin dava ve şikayetler İstanbul (Çağlayan) Adliyesi'ndeki icra mahkemelerinde görülür.",
      "Beşiktaş'ta faaliyet gösteren işletmelerin (özellikle Levent ve Gayrettepe çevresindeki ticari bölgelerde) ticari alacaklara ilişkin icra takipleri de aynı yargı çevresinde yürütülmektedir.",
    ],
    faqs: [
      { question: "İlamsız icra takibi nedir?", answer: "Bir mahkeme kararına dayanmadan, alacaklının doğrudan icra dairesine başvurarak başlattığı takip türüdür." },
      { question: "Ödeme emrine itiraz süresi ne kadardır?", answer: "Ödeme emrinin tebliğinden itibaren 7 gün içinde itiraz edilmesi gerekir." },
      { question: "İtirazın iptali davası nerede açılır?", answer: "Genel yetkili veya takibin yapıldığı yer icra mahkemesinde ya da genel mahkemelerde açılabilir." },
      { question: "Haciz işlemine itiraz edilebilir mi?", answer: "Usulsüz haciz işlemlerine karşı icra mahkemesine şikayet yoluna gidilebilir." },
      { question: "Beşiktaş'ta icra takibi hangi mahkemede görülür?", answer: "İcra takibine ilişkin uyuşmazlıklar İstanbul (Çağlayan) Adliyesi'ndeki icra mahkemelerinde görülür." },
      { question: "Borçlu mal beyanında bulunmak zorunda mı?", answer: "Evet, ödeme emrine itiraz etmeyen veya itirazı kesinleşen borçlu, yasal süre içinde mal beyanında bulunmakla yükümlüdür." },
      { question: "Maaş haczi ne kadar olabilir?", answer: "Kural olarak maaşın dörtte biri haczedilebilir; nafaka alacaklarında bu oran farklılık gösterebilir." },
      { question: "Konkordato başvurusu kimler tarafından yapılabilir?", answer: "Borçlarını vadesinde ödeyemeyen veya ödeyememe tehlikesi altında olan borçlular konkordato talebinde bulunabilir." },
    ],
    howToTitle: "Beşiktaş'ta İcra Takibi Nasıl Başlatılır?",
    howToSteps: [
      { name: "Alacağın Belgelendirilmesi", text: "Alacağın dayanağı olan belge veya ilam hazırlanır." },
      { name: "İcra Dairesine Başvuru", text: "Yetkili icra dairesine takip talebiyle başvurulur." },
      { name: "Ödeme Emrinin Tebliği", text: "Borçluya ödeme emri tebliğ edilir, itiraz süresi başlar." },
      { name: "Haciz veya Tahsilat", text: "İtiraz edilmez veya itiraz sonuçlanırsa haciz ve tahsilat işlemlerine geçilir." },
    ],
    crosslinkLabel: "İcra Avukatı",
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "besiktas-idare-avukati",
    name: "Beşiktaş İdare Avukatı",
    heroTitle: "Beşiktaş İdare Avukatı",
    heroSubtitle:
      "İdari işlemlerin iptali, tam yargı davaları ve idari başvuru süreçlerinde hukuki destek. Yetkili yargı mercii İstanbul idare mahkemeleridir.",
    metaTitle: "Beşiktaş İdare Avukatı",
    metaDescription:
      "Beşiktaş'ta idari işlemlerin iptali, tam yargı davaları ve idareye karşı başvuru süreçlerinde hukuki danışmanlık.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na kayıtlı (Sicil No: 72621) bir avukat olarak idare hukuku kapsamında idari işlemlerin iptali ve tam yargı davalarında müvekkillere hukuki danışmanlık ve dava takibi hizmeti sunmaktadır. 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari işlemlere karşı iptal davası açılması." },
      { title: "Tam Yargı Davaları", description: "İdarenin işlem veya eylemlerinden doğan zararın tazmini." },
      { title: "İdari Başvurular", description: "Dava açılmadan önce idareye yapılan itiraz ve başvurular." },
      { title: "Belediye İşlemleri", description: "İmar, ruhsat ve ceza gibi belediye işlemlerine karşı hukuki destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İdari işlemlerin iptali davaları",
      "Tam yargı (tazminat) davaları",
      "İmar planı ve ruhsat işlemlerine itiraz",
      "İdari para cezalarına karşı dava",
      "Kamulaştırma işlemlerine ilişkin uyuşmazlıklar",
      "Memur ve kamu görevlilerinin özlük işlemlerine ilişkin davalar",
    ],
    localParagraphs: [
      "Beşiktaş Belediyesi ve diğer kamu kurumlarının Beşiktaş sınırları içinde tesis ettiği imar, ruhsat, idari para cezası gibi işlemlere karşı açılacak iptal davaları İstanbul idare mahkemelerinde görülür. Dava açma süresi, işlemin ilgiliye tebliğinden itibaren kural olarak 60 gündür.",
      "İdari işleme karşı doğrudan dava açılabileceği gibi, bazı hallerde önce idareye başvuru (idari başvuru yolu) yapılması gerekebilir. Beşiktaş'ta özellikle Bebek, Etiler ve Ortaköy gibi mahallelerde sıkça karşılaşılan imar ve yapı ile ilgili idari işlemlerde bu süreçlerin doğru yönetilmesi önemlidir.",
    ],
    faqs: [
      { question: "İdari işleme karşı dava açma süresi ne kadardır?", answer: "Kural olarak işlemin tebliğinden itibaren 60 gündür; özel kanunlarda farklı süreler öngörülebilir." },
      { question: "İptal davası ile tam yargı davası arasındaki fark nedir?", answer: "İptal davası işlemin hukuka aykırılığının tespitini, tam yargı davası ise bu işlemden doğan zararın tazminini amaçlar." },
      { question: "İdari işleme karşı önce idareye başvurmak zorunlu mu?", answer: "Bazı işlemlerde zorunlu, bazılarında ihtiyaridir; işlemin türüne göre değerlendirilmelidir." },
      { question: "Belediye para cezasına nasıl itiraz edilir?", answer: "Cezanın tebliğinden itibaren yasal süre içinde idare mahkemesinde iptal davası açılabilir." },
      { question: "İdari davada yürütmenin durdurulması talep edilebilir mi?", answer: "Evet, işlemin uygulanması halinde giderilmesi güç zararlar doğacaksa yürütmenin durdurulması talep edilebilir." },
      { question: "Kamulaştırma bedeline itiraz mümkün mü?", answer: "Evet, kamulaştırma bedelinin tespitine ilişkin dava açılabilir." },
      { question: "İdare mahkemesi kararına karşı hangi yola başvurulur?", answer: "Karara karşı istinaf, bazı hallerde temyiz yoluna başvurulabilir." },
    ],
    howToTitle: "Beşiktaş'ta İdari İşlemin İptali Davası Nasıl Açılır?",
    howToSteps: [
      { name: "İşlemin İncelenmesi", text: "İptali istenen idari işlem ve tebliğ tarihi tespit edilir." },
      { name: "Süre Kontrolü", text: "60 günlük dava açma süresinin geçip geçmediği kontrol edilir." },
      { name: "Dava Dilekçesinin Hazırlanması", text: "İptal gerekçeleri ve varsa yürütmenin durdurulması talebi dilekçede belirtilir." },
      { name: "Dava Süreci", text: "İdare mahkemesi dosyayı inceler, gerekirse duruşma yapılır ve karar verilir." },
    ],
    crosslinkLabel: "İdare Avukatı",
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "besiktas-is-hukuku-avukati",
    name: "Beşiktaş İş Hukuku Avukatı",
    heroTitle: "Beşiktaş İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem ve ihbar tazminatı, işe iade davası, fazla mesai ve iş sözleşmesi uyuşmazlıklarında hukuki destek. Yetkili adliye İstanbul (Çağlayan) Adliyesi'dir.",
    metaTitle: "Beşiktaş İş Hukuku Avukatı",
    metaDescription:
      "Beşiktaş'ta kıdem-ihbar tazminatı, işe iade davası ve iş sözleşmesi uyuşmazlıklarında hukuki danışmanlık.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na kayıtlı (Sicil No: 72621) bir avukat olarak iş hukuku kapsamında işçi ve işveren tarafında hukuki danışmanlık ve dava takibi hizmeti sunmaktadır. 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Kıdem ve İhbar Tazminatı", description: "Haksız fesih halinde tazminat taleplerinin takibi." },
      { title: "İşe İade Davası", description: "İş güvencesi kapsamında işe iade süreçlerinin yürütülmesi." },
      { title: "Fazla Mesai ve Alacaklar", description: "Ücret, fazla mesai ve yıllık izin alacaklarının tahsili." },
      { title: "İş Sözleşmesi Düzenlenmesi", description: "İş sözleşmesi ve ibraname metinlerinin hazırlanması." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kıdem ve ihbar tazminatı davaları",
      "İşe iade davası ve arabuluculuk süreci",
      "Fazla mesai, hafta tatili ve yıllık izin alacakları",
      "Mobbing (psikolojik taciz) iddialarına ilişkin süreçler",
      "İş sözleşmesi ve ibraname düzenlenmesi",
      "İş kazası ve meslek hastalığından doğan tazminat davaları",
    ],
    localParagraphs: [
      "Beşiktaş, özellikle Levent ve Gayrettepe çevresinde yoğunlaşan iş merkezleri ile İstanbul'un önemli ticari bölgelerinden birini oluşturmaktadır. Bu bölgelerde çalışan işçilerin iş sözleşmesinden doğan uyuşmazlıkları da diğer iş hukuku davaları gibi önce arabuluculuk sürecinden geçmektedir.",
      "İşe iade ve işçilik alacaklarına ilişkin dava açılmadan önce arabulucuya başvuru zorunludur; arabuluculukta anlaşma sağlanamazsa dava İstanbul (Çağlayan) Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "İşe iade davası açmadan önce ne yapılmalı?", answer: "Fesih bildiriminden itibaren 1 ay içinde arabulucuya başvurulması zorunludur." },
      { question: "Kıdem tazminatı hangi hallerde ödenir?", answer: "İşverenin haksız feshi, işçinin haklı sebeple istifası, emeklilik gibi kanunda sayılan hallerde ödenir." },
      { question: "Fazla mesai alacağı nasıl ispatlanır?", answer: "Bordro, yazışmalar, tanık beyanı gibi delillerle ispatlanabilir." },
      { question: "İşe iade davası kimler için açılabilir?", answer: "İş güvencesi kapsamındaki (30 ve üzeri işçi çalıştıran işyerinde, en az 6 aylık kıdemi olan) işçiler açabilir." },
      { question: "Mobbing iddiası nasıl ileri sürülür?", answer: "Somut olgular ve varsa delillerle desteklenerek işverene karşı tazminat talebi ileri sürülebilir." },
      { question: "Beşiktaş'ta iş davası hangi mahkemede görülür?", answer: "İstanbul (Çağlayan) Adliyesi bünyesindeki iş mahkemelerinde görülür." },
      { question: "İhbar tazminatı süresi ne kadardır?", answer: "Kıdeme göre 2 ila 8 hafta arasında değişen bildirim sürelerine bağlıdır." },
      { question: "İşçilik alacaklarında zamanaşımı süresi nedir?", answer: "Kıdem ve ihbar tazminatı dahil çoğu işçilik alacağı için 5 yıllık zamanaşımı süresi uygulanır." },
    ],
    howToTitle: "Beşiktaş'ta İşe İade Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Fesih Bildiriminin İncelenmesi", text: "İş sözleşmesinin feshine ilişkin bildirim ve gerekçe incelenir." },
      { name: "Arabulucuya Başvuru", text: "Fesihten itibaren 1 ay içinde arabulucuya başvurulur." },
      { name: "Dava Açılması", text: "Arabuluculukta anlaşma sağlanamazsa 2 hafta içinde iş mahkemesinde dava açılır." },
      { name: "Yargılama ve Karar", text: "Mahkeme feshin geçerliliğini değerlendirir ve kararını verir." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "besiktas-kira-tahliye-avukati",
    name: "Beşiktaş Kira ve Tahliye Avukatı",
    heroTitle: "Beşiktaş Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında hukuki destek. Yetkili adliye İstanbul (Çağlayan) Adliyesi'dir.",
    metaTitle: "Beşiktaş Kira ve Tahliye Avukatı",
    metaDescription:
      "Beşiktaş'ta kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında hukuki danışmanlık.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na kayıtlı (Sicil No: 72621) bir avukat olarak kira hukuku kapsamında kiraya veren ve kiracı tarafında hukuki danışmanlık ve dava takibi hizmeti sunmaktadır. 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Tahliye Davaları", description: "İhtiyaç, tahliye taahhüdü ve temerrüt nedeniyle tahliye süreçleri." },
      { title: "Kira Bedeli Tespiti", description: "Kira bedelinin günün rayiç değerine uyarlanması." },
      { title: "İcra Yoluyla Tahliye", description: "Tahliye taahhüdüne dayalı icra takibi." },
      { title: "Kira Sözleşmesi İncelemesi", description: "Kira sözleşmesinin hazırlanması ve gözden geçirilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İhtiyaç nedeniyle tahliye davası",
      "Tahliye taahhüdüne dayalı icra yoluyla tahliye",
      "Kira bedelinin ödenmemesi nedeniyle tahliye",
      "Kira bedeli tespit ve uyarlama davası",
      "Kira sözleşmesinin feshi ve tazminat talepleri",
      "Kira sözleşmesi metinlerinin hazırlanması",
    ],
    localParagraphs: [
      "Beşiktaş; Bebek, Etiler, Levent, Ortaköy ve Arnavutköy gibi kira talebinin yüksek olduğu mahalleleri kapsamaktadır. Bu bölgelerdeki konut ve işyeri kiralarına ilişkin uyuşmazlıklarda taşınmazın bulunduğu yer sulh hukuk mahkemesi yetkilidir.",
      "Beşiktaş sınırları içindeki bir taşınmaza ilişkin tahliye davası veya kira bedeli tespiti davası İstanbul (Çağlayan) Adliyesi'ndeki sulh hukuk mahkemelerinde görülmektedir.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira bedelinin ödenmemesi, tahliye taahhüdü, ihtiyaç nedeniyle tahliye gibi kanunda öngörülen hallerde tahliye talep edilebilir." },
      { question: "Belirli süreli kira sözleşmesi sona erince kiracı çıkarılabilir mi?", answer: "Hayır, sürenin dolması tek başına tahliye sebebi değildir; kiracı bildirimde bulunmazsa sözleşme yenilenmiş sayılır." },
      { question: "Tahliye davası ne kadar sürer?", answer: "Mahkemenin iş yüküne ve uyuşmazlığın niteliğine göre değişmekle birlikte ortalama 6-18 ay sürebilir." },
      { question: "Kira bedeli tespiti davası ne zaman açılır?", answer: "Kira bedelinin günün koşullarına uyarlanması istendiğinde açılabilir; belirli süreler ve şartlara tabidir." },
      { question: "Tahliye taahhütnamesi ile icra yoluyla tahliye nasıl işler?", answer: "Geçerli bir tahliye taahhüdüne dayanılarak icra dairesi aracılığıyla tahliye talep edilebilir." },
      { question: "Kiracı kira bedelini artırmayı kabul etmezse ne olur?", answer: "Kiraya veren, kira bedeli tespiti davası açarak güncel bedelin belirlenmesini talep edebilir." },
    ],
    howToTitle: "Beşiktaş'ta Kiracı Tahliye Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Tahliye Sebebinin Belirlenmesi", text: "İhtiyaç, temerrüt veya taahhüt gibi tahliye sebebi tespit edilir." },
      { name: "İhtar veya Taahhüt Kontrolü", text: "Gerekli ihtarname çekilir veya taahhütname incelenir." },
      { name: "Dava veya İcra Takibi", text: "Duruma göre sulh hukuk mahkemesinde dava açılır veya icra takibi başlatılır." },
      { name: "Tahliyenin Gerçekleştirilmesi", text: "Karar veya icra emri kesinleştiğinde tahliye işlemi yürütülür." },
    ],
    crosslinkLabel: "Kira ve Tahliye Avukatı",
  },

  // ─────────────────────────── VERGİ ───────────────────────────
  {
    slug: "vergi",
    urlSlug: "besiktas-vergi-avukati",
    name: "Beşiktaş Vergi Avukatı",
    heroTitle: "Beşiktaş Vergi Avukatı",
    heroSubtitle:
      "Vergi tarhiyatlarına itiraz, vergi cezalarına karşı dava ve uzlaşma süreçlerinde hukuki destek. Yetkili yargı mercii İstanbul vergi mahkemeleridir.",
    metaTitle: "Beşiktaş Vergi Avukatı",
    metaDescription:
      "Beşiktaş'ta vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde hukuki danışmanlık.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na kayıtlı (Sicil No: 72621) bir avukat olarak vergi hukuku kapsamında vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda müvekkillere hukuki danışmanlık ve dava takibi hizmeti sunmaktadır. 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Vergi Tarhiyatına İtiraz", description: "Re'sen veya ikmalen tarh edilen vergilere karşı dava süreci." },
      { title: "Vergi Cezaları", description: "Usulsüzlük ve vergi ziyaı cezalarına karşı hukuki destek." },
      { title: "Uzlaşma Süreci", description: "Vergi idaresiyle uzlaşma başvurusu ve görüşme süreçleri." },
      { title: "Vergi Mahkemesi Süreci", description: "Vergi mahkemesinde dava açılması ve takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi/ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusu ve uzlaşma görüşmelerinde temsil",
      "Vergi mahkemesinde iptal davası açılması",
      "Ödeme emrine karşı itiraz (dava) açılması",
      "Vergi incelemesi sürecinde danışmanlık",
      "Gecikme faizi ve gecikme zammına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Beşiktaş'ta mükellefiyeti bulunan gerçek ve tüzel kişilerin vergisel işlemleri Beşiktaş Vergi Dairesi Müdürlüğü tarafından yürütülmektedir. Bu daire tarafından tesis edilen tarhiyat ve ceza kesme işlemlerine karşı açılacak davalar İstanbul vergi mahkemelerinde görülür.",
      "Vergi/ceza ihbarnamesinin tebliğinden itibaren 30 gün içinde dava açılabilir veya bu süre içinde uzlaşma talep edilebilir. Beşiktaş çevresinde özellikle Levent ve Gayrettepe'deki ticari faaliyetler nedeniyle kurumlar vergisi ve KDV kaynaklı uyuşmazlıklar sıkça gündeme gelmektedir.",
    ],
    faqs: [
      { question: "Vergi ihbarnamesine karşı dava açma süresi ne kadardır?", answer: "Tebliğ tarihinden itibaren 30 gündür." },
      { question: "Uzlaşma talep edilirse dava hakkı kaybedilir mi?", answer: "Uzlaşma sağlanamazsa, kalan süre içinde dava açma hakkı devam eder." },
      { question: "Beşiktaş'ta vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Vergi cezasına itiraz nasıl yapılır?", answer: "Vergi mahkemesinde iptal davası açılarak veya idari uzlaşma yoluyla itiraz edilebilir." },
      { question: "Ödeme emrine itiraz süresi ne kadardır?", answer: "Tebliğinden itibaren 15 gün içinde vergi mahkemesinde dava açılabilir." },
      { question: "Vergi incelemesi sırasında hukuki destek alınabilir mi?", answer: "Evet, inceleme sürecinde mükellefin haklarının korunması amacıyla danışmanlık sağlanabilir." },
      { question: "Gecikme faizine itiraz edilebilir mi?", answer: "Gecikme faizinin hesaplanmasına ilişkin hatalar bulunduğunda dava yoluyla itiraz edilebilir." },
    ],
    howToTitle: "Beşiktaş'ta Vergi Tarhiyatına İtiraz Nasıl Yapılır?",
    howToSteps: [
      { name: "İhbarnamenin İncelenmesi", text: "Tarhiyata veya cezaya ilişkin ihbarname ve dayanağı incelenir." },
      { name: "Uzlaşma veya Dava Kararı", text: "Uzlaşma başvurusu mu yoksa doğrudan dava açılacağı değerlendirilir." },
      { name: "Başvurunun Yapılması", text: "30 gün içinde vergi mahkemesinde dava açılır veya uzlaşma talep edilir." },
      { name: "Sonuçlandırma", text: "Mahkeme kararı veya uzlaşma tutanağı ile süreç sonuçlandırılır." },
    ],
    crosslinkLabel: "Vergi Avukatı",
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "besiktas-borclar-hukuku-avukati",
    name: "Beşiktaş Borçlar Hukuku Avukatı",
    heroTitle: "Beşiktaş Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Sözleşme uyuşmazlıkları, alacak ve tazminat davaları, sözleşmeden dönme ve ayıplı ifa süreçlerinde hukuki destek. Yetkili adliye İstanbul (Çağlayan) Adliyesi'dir.",
    metaTitle: "Beşiktaş Borçlar Hukuku Avukatı",
    metaDescription:
      "Beşiktaş'ta sözleşme uyuşmazlıkları, alacak ve tazminat davalarında hukuki danışmanlık ve dava takibi.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na kayıtlı (Sicil No: 72621) bir avukat olarak borçlar hukuku kapsamında sözleşme ve alacak uyuşmazlıklarında müvekkillere hukuki danışmanlık ve dava takibi hizmeti sunmaktadır. 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Sözleşme Uyuşmazlıkları", description: "Sözleşmenin ifası, ihlali ve feshine ilişkin süreçler." },
      { title: "Alacak Davaları", description: "Para alacaklarının tahsili amacıyla dava ve takip süreçleri." },
      { title: "Sözleşmeden Dönme", description: "Temerrüt veya ayıplı ifa nedeniyle dönme ve tazminat talepleri." },
      { title: "Tazminat Davaları", description: "Sözleşmeye aykırılıktan doğan zararların tazmini." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sözleşmenin ifası ve ihlaline ilişkin davalar",
      "Alacak davası ve icra takibi süreçleri",
      "Sözleşmeden dönme ve ayıplı ifa uyuşmazlıkları",
      "Kira dışı sözleşmelerden doğan tazminat davaları",
      "Sözleşme metinlerinin hazırlanması ve incelenmesi",
      "Sebepsiz zenginleşme davaları",
    ],
    localParagraphs: [
      "Beşiktaş'ta özellikle Levent ve Gayrettepe çevresinde yoğunlaşan ticari faaliyetler nedeniyle şirketler arası sözleşme uyuşmazlıkları sıklıkla gündeme gelmektedir. Bu uyuşmazlıklara ilişkin davalar, uyuşmazlığın niteliğine göre İstanbul (Çağlayan) Adliyesi'ndeki asliye hukuk veya ticaret mahkemelerinde görülür.",
      "Beşiktaş'ta yerleşik gerçek ve tüzel kişiler arasındaki alacak uyuşmazlıklarında, dava açılmadan önce belirli konularda arabuluculuğa başvuru zorunluluğu bulunabilmektedir; bu husus alacağın niteliğine göre değerlendirilir.",
    ],
    faqs: [
      { question: "Sözleşmeden dönme ile fesih arasındaki fark nedir?", answer: "Dönme sözleşmeyi geriye etkili, fesih ise ileriye etkili olarak sona erdirir." },
      { question: "Alacak davası açmadan önce arabuluculuk zorunlu mu?", answer: "Ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak arabuluculuk zorunludur." },
      { question: "Ayıplı ifa halinde hangi haklar kullanılabilir?", answer: "Sözleşmeden dönme, bedel indirimi, ücretsiz onarım veya misli ile değişim talep edilebilir." },
      { question: "Beşiktaş'ta ticari alacak davası hangi mahkemede görülür?", answer: "Uyuşmazlığın niteliğine göre asliye ticaret mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde görülür." },
      { question: "Sözleşmede cezai şart varsa ayrıca tazminat istenebilir mi?", answer: "Kural olarak cezai şart aşan zarar ispatlanmadıkça ek tazminat istenemez; sözleşme hükümlerine göre değişebilir." },
      { question: "Zamanaşımına uğrayan alacak talep edilebilir mi?", answer: "Zamanaşımı def'i ileri sürülürse talep edilemez; ancak borçlu bunu ileri sürmezse alacak talep edilebilir." },
    ],
    howToTitle: "Beşiktaş'ta Alacak Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Alacağın ve Delillerin Tespiti", text: "Sözleşme, fatura veya diğer belgelerle alacağın dayanağı ortaya konur." },
      { name: "İhtar ve Ön Koşulların Yerine Getirilmesi", text: "Gerekiyorsa ihtarname çekilir veya arabuluculuk başvurusu yapılır." },
      { name: "Dava Açılması", text: "Yetkili mahkemede alacak davası açılır." },
      { name: "Yargılama ve İcra", text: "Mahkeme kararının kesinleşmesinin ardından gerekirse icra takibi başlatılır." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
  },
];
