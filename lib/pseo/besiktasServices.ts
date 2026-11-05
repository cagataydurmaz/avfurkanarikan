import type { PseoService } from "./types";
import { besiktasMiras } from "./miras/besiktasMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const besiktasBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "besiktas-avukat",
    name: "Beşiktaş Avukat",
    heroTitle: "Beşiktaş Avukat",
    heroSubtitle:
      "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında Beşiktaş ve çevresindeki müvekkillere hukuki danışmanlık ve dava takibi hizmeti sunulmaktadır. Yetkili adliye İstanbul (Çağlayan) Adliyesi'dir.",
    metaTitle: "Beşiktaş Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Sinanpaşa'daki ofiste İstanbul Barosu'na kayıtlı avukat Furkan Arıkan; Beşiktaş'ta ceza, aile, gayrimenkul, iş, icra ve vergi hukukunda danışmanlık ve dava takibi.",
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
      { question: "Beşiktaş'ta hangi adliye yetkilidir?", answer: "Beşiktaş ilçesi İstanbul (Çağlayan) Adliyesi'nin yargı çevresinde yer almaktadır. Hukuki uyuşmazlıklar genel olarak bu adliyedeki ilgili mahkemelerde, idari uyuşmazlıklar İstanbul idare mahkemelerinde, vergi uyuşmazlıkları ise İstanbul vergi mahkemelerinde görülür. Büro da Beşiktaş ilçesinin Sinanpaşa Mahallesi'nde, yani ilçe sınırları içindedir." },
      { question: "İlk danışmanlık görüşmesi ücretsiz mi?", answer: "Hayır, danışmanlık görüşmeleri ücret karşılığı yapılmaktadır. Görüşmede konunuz kısaca dinlenir, hukuki durumunuz değerlendirilir ve izlenebilecek yollar anlatılır. Temsil kararı alınırsa vekalet düzenlenir ve belgeler derlenir; bu aşamada dosyanın kapsamı, izlenecek yol ve vekalet ücreti de netleştirilir." },
      { question: "Hangi hukuk alanlarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunulmaktadır. Örneğin boşanma ve velayet, tapu ve kira uyuşmazlıkları, kıdem ve işe iade, icra takibine itiraz, vergi tarhiyatına dava ve sözleşme alacakları bu kapsamdadır." },
      { question: "Ofis Beşiktaş'ın neresinde?", answer: "Ofis Beşiktaş ilçesinde, Sinanpaşa Mahallesi'nde, Şehit Asım Caddesi üzerindedir. Çalışma randevu esasına göre yürütüldüğü için görüşme öncesinde WhatsApp veya telefonla iletişime geçilmesi gerekir. Tam adres ve iletişim bilgileri sayfadaki iletişim bölümünde yer almaktadır; görüşme çevrim içi de yapılabilir." },
      { question: "Randevu nasıl alınır?", answer: "Randevu için WhatsApp veya telefon üzerinden ulaşılması yeterlidir. İlk iletişimde konu kısaca paylaşılır, ardından danışmanlık görüşmesi için uygun gün ve saat belirlenir. Randevu bazlı çalışma düzeni sayesinde her dosyaya ayrı zaman ayrılmakta, görüşme yüz yüze veya çevrim içi yapılabilmektedir." },
      { question: "Dava takibi İstanbul dışında da yapılıyor mu?", answer: "Bu durum dosyanın niteliğine ve yetkili mahkemenin bulunduğu yere göre değerlendirilmektedir. Büro Beşiktaş'tadır ve çalışmalar ağırlıklı olarak İstanbul'daki adliyelerde yürütülür. İstanbul dışındaki dosyalar için ilk görüşmede uyuşmazlığın konusu ve yetkili mahkeme birlikte incelenerek bilgi verilmektedir." },
      { question: "Vekalet ücreti nasıl belirlenir?", answer: "Vekalet ücreti; davanın niteliği, kapsamı ve süresine göre belirlenir. Dosyanın hazırlığı, gerekecek belge ve işlem sayısı ile süreçte yapılacak takip bu değerlendirmede etkilidir. Temsil kararı verilmeden önce, danışmanlık görüşmesinde ücret hakkında bilgi verilir ve kapsam netleştirilir." },
      { question: "Yazılı hukuki görüş (mütalaa) veriliyor mu?", answer: "Evet, talep edilmesi halinde belirli konularda yazılı hukuki görüş hazırlanabilmektedir. Bunun için uyuşmazlığa ilişkin belgelerin paylaşılması ve görüşün hangi soruya cevap vereceğinin belirlenmesi gerekir. Kapsam ve ücret, danışmanlık görüşmesinde dosyanın niteliğine göre konuşulmakta ve görüşme öncesinde netleştirilmektedir." },
      { question: "Beşiktaş Vergi Dairesi ile ilgili uyuşmazlıklarda yardım alınabilir mi?", answer: "Evet, vergi tarhiyatına itiraz ve vergi mahkemesi süreçlerinde hukuki destek sağlanmaktadır. Beşiktaş'ta vergiyle ilgili idari başvurularda yetkili daire Beşiktaş Vergi Dairesi Müdürlüğü'dür; vergi davaları ise İstanbul vergi mahkemelerinde görülür. İhbarnamenin tebliğ tarihi dava süresi için önemlidir." },
      { question: "Acil gözaltı durumunda iletişime geçilebilir mi?", answer: "Evet, gözaltı ve benzeri acil durumlarda telefon veya WhatsApp üzerinden iletişime geçilebilir. Gözaltının başladığı andan itibaren müdafi ile görüşme hakkı bulunmaktadır. Aranırken kişinin adı, tutulduğu yer ve olayın kısa özeti paylaşılırsa süreç daha hızlı değerlendirilebilir." },
      { question: "Online/uzaktan görüşme yapılıyor mu?", answer: "Evet, görüşmeler yüz yüze veya çevrim içi olarak gerçekleştirilebilmektedir. Beşiktaş dışında ya da yurt dışında bulunan kişiler için çevrim içi görüşme pratik bir seçenektir. Belgeler dijital ortamda paylaşılabilir; temsil kararı alınırsa vekalet ve dosya hazırlığı adımları izlenir." },
    ],
    howToTitle: "Beşiktaş'ta Avukatlık Hizmetinden Nasıl Yararlanılır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Beşiktaş Avukat (Genel)",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "kidem-tazminati-hesaplama-2026", "icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "besiktas-bosanma-avukati",
    name: "Beşiktaş Boşanma Avukatı",
    heroTitle: "Beşiktaş Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma davaları, velayet, nafaka ve mal rejimi tasfiyesi konularında hukuki danışmanlık ve dava takibi. Yetkili adliye İstanbul (Çağlayan) Adliyesi'dir.",
    metaTitle: "Beşiktaş Boşanma Avukatı | Velayet ve Nafaka",
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
      { question: "Anlaşmalı boşanma ne kadar sürer?", answer: "Taraflar ve protokol hazır olduğunda anlaşmalı boşanma genellikle tek duruşmada sonuçlanabilir. Ancak süre mahkemenin iş yüküne bağlıdır ve önceden belirtilemez. Evliliğin en az 1 yıl sürmüş olması ve eşlerin duruşmada birlikte beyanda bulunması gerekir (TMK m.166/3)." },
      { question: "Çekişmeli boşanma davası nerede açılır?", answer: "Çekişmeli boşanma davası, eşlerden birinin yerleşim yeri veya davadan önce son altı aydır birlikte oturulan yer aile mahkemesinde açılır (TMK m.168). Beşiktaş'taki aile uyuşmazlıkları İstanbul (Çağlayan) Adliyesi bünyesindeki aile mahkemelerinde görülür; dava dilekçesi bu yetki kuralına göre hazırlanır." },
      { question: "Velayet kararı neye göre verilir?", answer: "Mahkeme velayet konusunda çocuğun üstün yararı ilkesini esas alarak karar verir. Ebeveynlerin durumu somut olarak değerlendirilir; çocuğun bakım düzeni, eğitim ve yaşam koşulları dikkate alınır. Velayet boşanma kararıyla birlikte düzenlenir, diğer ebeveyn için kişisel ilişki kurulur." },
      { question: "Nafaka miktarı nasıl belirlenir?", answer: "Nafaka miktarı, tarafların ekonomik durumu, ihtiyaçlar ve kusur durumu birlikte değerlendirilerek belirlenir. Mahkeme gelir, gider ve yaşam standardına ilişkin delilleri inceler. Belirlenen miktar, koşullar değiştiğinde yeniden değerlendirilebilir; ayrıca dava süresince tedbir nafakası da talep edilebilir." },
      { question: "Boşanmada mal paylaşımı nasıl yapılır?", answer: "Evlilik süresince edinilen mallar, kanunda öngörülen mal rejimine göre paylaştırılır; sözleşmeyle başka rejim seçilmemişse genellikle edinilmiş mallara katılma rejimi uygulanır. Bu rejimde kişisel mallar ayrı tutulur, edinilmiş mallar üzerinden katılma alacağı hesaplanır. Tasfiye boşanma davasıyla birlikte veya ayrı bir davayla istenebilir." },
      { question: "Anlaşmalı boşanmadan sonra dava tekrar açılabilir mi?", answer: "Kesinleşmiş anlaşmalı boşanma kararına karşı, kanunda öngörülen istisnai haller dışında yeniden dava açılamaz. Bu nedenle protokolde velayet, nafaka, mal rejimi tasfiyesi ve varsa tazminat konuları eksiksiz düzenlenmelidir. Hakim protokolü eşlerin iradesine uygunluğu bakımından duruşmada inceler." },
      { question: "Boşanma davasında avukat zorunlu mu?", answer: "Kanunen zorunlu değildir; taraflar davayı kendileri de takip edebilir. Ancak dilekçe, delil sunumu, nafaka ve velayet taleplerinin belirlenmesi gibi usule ilişkin adımlar süre ve şekil şartlarına bağlıdır. Hak kaybı yaşanmadan ilerlemek için hukuki destek alınması önerilir." },
      { question: "Beşiktaş'ta boşanma davası hangi mahkemede görülür?", answer: "Beşiktaş'ta boşanma davaları İstanbul (Çağlayan) Adliyesi bünyesindeki aile mahkemelerinde görülür. Eşlerden birinin yerleşim yeri veya davadan önce son altı aydır birlikte oturulan yer yetki bakımından esas alınır (TMK m.168). Büro Beşiktaş'ta olduğundan ilçedeki müvekkillerle yüz yüze görüşme yapılabilir." },
      { question: "Velayet kendisinde olmayan ebeveynin hakları nelerdir?", answer: "Velayeti olmayan ebeveynin çocukla kişisel ilişki (görüşme) hakkı saklıdır ve bu hakkın kapsamı mahkeme tarafından belirlenir. Görüşme gün, saat ve tatil düzeni çocuğun yararı gözetilerek düzenlenir. Bu hak çocuğun da hakkı olduğundan, koşullar değişirse düzenlemenin yeniden ele alınması talep edilebilir." },
      { question: "Boşanma sürecinde tedbir nafakası talep edilebilir mi?", answer: "Evet, dava süresince ihtiyaç sahibi eş veya çocuklar lehine tedbir nafakasına hükmedilebilir. Tedbir nafakası boşanma davası sürerken geçici olarak ödenir ve karar kesinleşinceki nafaka düzenlemesinden ayrıdır. Talep dava dilekçesinde veya dava sırasında ileri sürülür; ekonomik durum delillerle desteklenir." },
    ],
    howToTitle: "Beşiktaş'ta Boşanma Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Hukuki Değerlendirme", text: "Evlilik birliğinin durumu ve talepler (velayet, nafaka, mal rejimi) değerlendirilir." },
      { name: "Dilekçe ve Belgelerin Hazırlanması", text: "Boşanma dilekçesi ve varsa anlaşmalı boşanma protokolü hazırlanır." },
      { name: "Davanın Açılması", text: "Yetkili aile mahkemesine dava açılır, duruşma günü beklenir." },
      { name: "Duruşma ve Karar", text: "Duruşmada taraflar dinlenir, mahkeme kararını verir; karar kesinleştiğinde süreç tamamlanır." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "bosanmada-nafaka-turleri"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "besiktas-ceza-avukati",
    name: "Beşiktaş Ceza Avukatı",
    heroTitle: "Beşiktaş Ceza Avukatı",
    heroSubtitle:
      "Soruşturma ve kovuşturma aşamalarında müdafilik, ifade ve sorgu süreçlerinde hukuki destek, tutukluluk itirazları. Yetkili adliye İstanbul (Çağlayan) Adliyesi'dir.",
    metaTitle: "Beşiktaş Ceza Avukatı | Müdafilik",
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
      { question: "Beşiktaş'ta işlenen bir suç hangi adliyede görülür?", answer: "Beşiktaş'ta işlenen suçlara ilişkin soruşturmalar ve kovuşturma aşamasındaki davalar İstanbul (Çağlayan) Adliyesi'nde görülür. Suçun niteliğine göre asliye ceza veya ağır ceza mahkemesi görevlidir. Soruşturma aşamasında Cumhuriyet savcılığı, tutuklama ve adli kontrol kararlarında ise sulh ceza hakimlikleri devrededir." },
      { question: "Gözaltına alındığımda avukata ne zaman ulaşabilirim?", answer: "Gözaltının başladığı andan itibaren müdafi ile görüşme hakkı mevcuttur. Kişi ifade vermeden önce müdafi talep edebilir; talep halinde ifade müdafi hazır bulunmadan alınmamalıdır. Gözaltında yakınlara ulaşılamıyorsa telefon veya WhatsApp üzerinden büroyla iletişime geçilebilir, tutulan yer bilgisi paylaşılmalıdır." },
      { question: "Müdafi tutmak zorunlu mu?", answer: "Alt sınırı beş yıldan fazla hapis cezasını gerektiren suçlarda ve bazı özel hallerde müdafi zorunludur; diğer durumlarda isteğe bağlıdır. Zorunlu hallerde kişi müdafi seçmezse barodan atama yapılır. İsteğe bağlı olsa da müdafi, ifade ve dosya incelemesi aşamalarında hakların korunmasına yardımcı olur." },
      { question: "Tutukluluk kararına nasıl itiraz edilir?", answer: "Tutukluluk kararına karşı itiraz, CMK m.268 uyarınca kararı veren hakimlik veya mahkemeye sunulur ve itirazı kanunda belirlenen mercii inceler; sulh ceza hakimliği kararlarında bu mercii genellikle numara olarak izleyen sulh ceza hakimliğidir. Tutuklamaya itiraz süresi 7 gündür. İtiraz dilekçesinde tutukluluğun hukuka aykırı veya orantısız olduğu somut gerekçelerle anlatılır, adli kontrol gibi daha hafif bir tedbirin yeterli olduğu ileri sürülebilir (CMK m.100/101)." },
      { question: "Etkin pişmanlık her suçta uygulanır mı?", answer: "Hayır, etkin pişmanlık yalnızca kanunda açıkça düzenlenen suç tiplerinde uygulanır. Her suç için bu imkan bulunmaz; uygulanabilmesi için kanundaki şartların, örneğin zamanında ve gönüllü başvurunun veya zararın giderilmesinin gerçekleşmesi gerekir. Somut olayda hangi suç tipinin kapsama girdiği ayrıca incelenmelidir." },
      { question: "Adli kontrol nedir?", answer: "Adli kontrol, tutuklamaya alternatif olarak uygulanan bir koruma tedbiridir. Yurt dışı çıkış yasağı veya belirli aralıklarla imza verme yükümlülüğü gibi önlemleri kapsar. Kişi serbest kalır ancak bu yükümlülüklere uymak zorundadır; aksine davranış halinde tutuklama gündeme gelebilir. Tutuklama kararına karşı da bu yönde itiraz edilebilir." },
      { question: "Şikayetçi olduğum bir dosyada hukuki destek alabilir miyim?", answer: "Evet, mağdur veya şikayetçi sıfatıyla da süreç takibi ve hukuki danışmanlık sağlanabilir. Şikayet dilekçesinin hazırlanması, soruşturma dosyasının izlenmesi ve kovuşturmaya yer olmadığı kararı verilirse itiraz edilmesi bu kapsamdadır. Kovuşturmaya yer olmadığı kararına itiraz süresi 15 gündür." },
      { question: "Beraat kararına karşı istinaf mümkün mü?", answer: "Evet, kararın usul ve esas yönünden hatalı olduğu düşünülüyorsa istinaf yoluna başvurulabilir. Mağdur, katılan veya Cumhuriyet savcısı kanuni süre içinde istinaf başvurusunda bulunabilir. Başvuru dilekçesinde kararın hangi yönlerden hukuka aykırı olduğu gerekçeleriyle belirtilir; süre kararın tebliğ veya açıklanmasından itibaren işler." },
      { question: "Soruşturma dosyasına erişim ne zaman mümkün olur?", answer: "Kural olarak müdafi soruşturma dosyasını inceleyebilir ve istediği belgelerin örneğini alabilir. Bazı hallerde soruşturmanın amacını tehlikeye düşürebileceği gerekçesiyle kısıtlama kararı verilebilir. Kısıtlama kararına karşı itiraz yoluna gidilebilir; dosyadaki ifade ve rapor gibi belgelerin yine de erişime açık olup olmadığı ayrıca değerlendirilir." },
      { question: "Uzlaşma teklifini kabul etmek zorunlu mu?", answer: "Hayır, uzlaşma tarafların iradesine bağlıdır ve kabul edilmesi zorunlu değildir. Teklifin reddedilmesi halinde soruşturma veya kovuşturma olağan yoldan devam eder. Uzlaşma yalnızca kanunda sayılan suçlarda söz konusu olduğundan, önce suçun kapsamda olup olmadığı, ardından teklifin içeriği dikkatle değerlendirilmelidir." },
    ],
    howToTitle: "Beşiktaş'ta Ceza Davası Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Soruşturma", text: "Şikayet veya ihbar üzerine savcılık soruşturması başlar, ifade alınabilir." },
      { name: "Müdafi ile Görüşme", text: "Şüpheli, gözaltı veya ifade öncesinde müdafi ile görüşme hakkını kullanabilir." },
      { name: "İddianame ve Kovuşturma", text: "İddianamenin kabulüyle dava açılır, duruşmalar başlar." },
      { name: "Karar ve Kanun Yolları", text: "Mahkeme kararının ardından gerekirse istinaf veya temyiz yoluna başvurulur." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "besiktas-gayrimenkul-avukati",
    name: "Beşiktaş Gayrimenkul Avukatı",
    heroTitle: "Beşiktaş Gayrimenkul Avukatı",
    heroSubtitle:
      "Tapu iptal ve tescil davaları, kira uyuşmazlıkları, tahliye süreçleri ve gayrimenkul alım-satım sözleşmelerinde hukuki destek. Yetkili adliye İstanbul (Çağlayan) Adliyesi'dir.",
    metaTitle: "Beşiktaş Gayrimenkul Avukatı | Tapu ve Kira",
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
      { question: "Tapu iptal davası ne zaman açılabilir?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda, hak sahibi tapu iptal ve tescil davası açabilir. Sahtecilik, yolsuz tescil, ehliyetsizlik veya muvazaa gibi iddialar dayanak olabilir. Dava taşınmazın bulunduğu yer mahkemesinde açılır ve tapu kaydı, resmi senet ve ilgili belgeler delil olarak incelenir." },
      { question: "Kiracı tahliyesi hangi hallerde mümkündür?", answer: "Tahliye taahhüdü, kira bedelinin ödenmemesi ve ihtiyaç nedeniyle tahliye gibi kanunda öngörülen hallerde mümkündür. Kira borcunda ödeme için verilen sürede borç ödenmezse tahliye istenebilir (TBK m.315, 30 gün). Her halde tahliye için mahkeme veya icra yoluna uygun şekilde başvurulması gerekir." },
      { question: "Kira bedeli tespiti davası nedir?", answer: "Kira bedeli tespiti davası, kira bedelinin günün rayiç değerine uyarlanması amacıyla açılan bir davadır. Mahkeme bilirkişi incelemesiyle emsal kiralara ve taşınmazın durumuna bakarak yeni bedeli belirler. Dava belirli süre ve şartlara bağlıdır; kiraya veren veya kiracı kira bedelinin güncellenmesi için bu yola başvurabilir." },
      { question: "Beşiktaş'ta gayrimenkul davası hangi mahkemede görülür?", answer: "Taşınmazın türüne ve uyuşmazlığın niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde görülür. Kira ve ortaklığın giderilmesi davalarında sulh hukuk, tapu iptal ve tescil davalarında asliye hukuk mahkemesi yetkilidir. Taşınmazın bulunduğu yer mahkemesi yetki açısından belirleyicidir." },
      { question: "Kat mülkiyetinde ortak gider uyuşmazlıkları nasıl çözülür?", answer: "Ortak gider uyuşmazlıkları öncelikle yönetim planı ve Kat Mülkiyeti Kanunu hükümleri çerçevesinde değerlendirilir; gerekirse dava yoluna gidilir. Gider payını ödemeyen kat malikine karşı yönetici icra takibi başlatabilir. Kat malikleri kurulu kararlarına itiraz da belirli süre içinde mahkemede ileri sürülebilir." },
      { question: "Ortaklığın giderilmesi davası nedir?", answer: "Ortaklığın giderilmesi davası, paylı veya elbirliği mülkiyetindeki bir taşınmazın satış veya taksim yoluyla ortaklığının sona erdirilmesi için açılan davadır. Paydaşlar anlaşamazsa her biri bu davayı açabilir. Mahkeme taşınmazın aynen bölünüp bölünemeyeceğini inceler; bölünemiyorsa satış yoluyla bedel paydaşlara payları oranında dağıtılır." },
      { question: "Tahliye taahhütnamesi ile icra yoluyla tahliye mümkün mü?", answer: "Evet, geçerli bir tahliye taahhüdü bulunması halinde icra yoluyla tahliye talep edilebilir. Taahhüt kira başladıktan sonra, tahliye tarihi açıkça yazılarak verilmelidir. Bu belgeye dayanılarak icra dairesi aracılığıyla tahliye takibi başlatılır; taahhüdün geçerliliği ise gerektiğinde mahkemece incelenir." },
      { question: "Gayrimenkul alım satımında avukat kontrolü neden önemlidir?", answer: "Tapu kaydı, ipotek ve şerh durumu gibi hususların incelenmesi ilerideki uyuşmazlıkların önlenmesine katkı sağlar. Haciz, intifa hakkı, kat irtifakı veya imar kısıtlaması gibi kayıtlar satıştan önce kontrol edilir. Sözleşmenin hükümleri ve ödeme planı da yazılı olarak gözden geçirilerek hak kaybı riskleri azaltılabilir." },
    ],
    howToTitle: "Beşiktaş'ta Tapu İptali Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Tapu Kaydının İncelenmesi", text: "Taşınmazın güncel tapu kaydı ve varsa şerhler incelenir." },
      { name: "Hukuki Gerekçenin Belirlenmesi", text: "İptal talebinin dayanağı (hile, ehliyetsizlik, usulsüzlük vb.) tespit edilir." },
      { name: "Dava Dilekçesinin Hazırlanması", text: "Talep ve deliller dilekçede ortaya konur, dava açılır." },
      { name: "Yargılama ve Karar", text: "Bilirkişi incelemesi ve duruşmaların ardından mahkeme kararını verir." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "besiktas-icra-avukati",
    name: "Beşiktaş İcra Avukatı",
    heroTitle: "Beşiktaş İcra Avukatı",
    heroSubtitle:
      "İcra takibi başlatılması, itiraz, haciz ve ihale süreçlerinde hukuki destek. Yetkili adliye İstanbul (Çağlayan) Adliyesi'dir.",
    metaTitle: "Beşiktaş İcra Avukatı | İcra Takibi ve Haciz",
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
      "Borca veya imzaya itiraz dilekçelerinin hazırlanması",
      "Menkul ve gayrimenkul haczi işlemleri",
      "İhalenin feshi davaları",
      "İstihkak davaları",
      "Konkordato başvurusu ve iflasın ertelenmesi süreçlerinde danışmanlık",
    ],
    localParagraphs: [
      "Beşiktaş'ta yerleşik gerçek veya tüzel kişilere karşı başlatılacak icra takipleri, borçlunun yerleşim yerindeki veya sözleşmede belirlenen yetkili icra dairesinde yürütülür; bu takiplere ilişkin dava ve şikayetler İstanbul (Çağlayan) Adliyesi'ndeki icra mahkemelerinde görülür.",
      "Beşiktaş'ta faaliyet gösteren işletmelerin (özellikle Levent ve Gayrettepe çevresindeki ticari bölgelerde) ticari alacaklara ilişkin icra takipleri de aynı yargı çevresinde yürütülmektedir.",
    ],
    faqs: [
      { question: "İlamsız icra takibi nedir?", answer: "İlamsız icra takibi, bir mahkeme kararına dayanmadan alacaklının doğrudan icra dairesine başvurarak başlattığı takip türüdür. Senet, fatura veya sözleşme gibi belgelerle başlatılabilir. Borçluya ödeme emri gönderilir; borçlu süresinde itiraz ederse takip durur ve alacaklı itirazın iptali davası açmak gibi yollara başvurabilir." },
      { question: "Ödeme emrine itiraz süresi ne kadardır?", answer: "Ödeme emrinin tebliğinden itibaren 7 gün içinde itiraz edilmesi gerekir (İİK m.62). İtiraz icra dairesine bildirilir ve süresinde yapılırsa takip durur. Süre kaçırılırsa takip kesinleşir ve haciz aşamasına geçilebilir; bu nedenle tebliğ tarihinin doğru belirlenmesi ve süre içinde başvuru yapılması önemlidir." },
      { question: "İtirazın iptali davası nerede açılır?", answer: "İtirazın iptali davası, genel yetkili veya takibin yapıldığı yer icra mahkemesinde ya da genel mahkemelerde açılabilir. Dava itirazın tebliğinden itibaren bir yıl içinde açılmalıdır. Alacak miktarı ve uyuşmazlığın niteliği görevli mahkemeyi belirler; ticari alacaklarda asliye ticaret mahkemesi görevli olabilir. Beşiktaş için bu mahkemeler İstanbul (Çağlayan) Adliyesi'ndedir." },
      { question: "Haciz işlemine itiraz edilebilir mi?", answer: "Evet, usulsüz haciz işlemlerine karşı icra mahkemesine şikayet yoluna gidilebilir. Haczedilemez mal haczedilmişse veya işlem usule aykırıysa bu yol kullanılır. Şikayet, işlemin öğrenildiği tarihten itibaren yasal süre içinde yapılmalıdır. Mahkeme haciz işlemini inceler ve hukuka aykırı bulursa iptal edebilir." },
      { question: "Beşiktaş'ta icra takibi hangi mahkemede görülür?", answer: "İcra takibine ilişkin uyuşmazlıklar İstanbul (Çağlayan) Adliyesi'ndeki icra mahkemelerinde görülür. Haciz şikayeti, itirazın kaldırılması gibi icra mahkemesinin görev alanındaki başvurular bu mahkemelere yapılır. Takibin kendisi ise yetkili icra dairesinde yürütülür; alacaklı ve borçlunun yerleşim yeri yetkiyi etkiler." },
      { question: "Borçlu mal beyanında bulunmak zorunda mı?", answer: "Evet, ödeme emrine itiraz etmeyen veya itirazı kesinleşen borçlu, yasal süre içinde mal beyanında bulunmakla yükümlüdür. Beyanda borçlunun malvarlığı, alacakları ve diğer gelirleri bildirilir. Bildirimin yapılmaması veya gerçeğe aykırı yapılması halinde alacaklı icra mahkemesi yoluyla yaptırım talep edebilir." },
      { question: "Maaş haczi ne kadar olabilir?", answer: "Kural olarak maaşın dörtte biri haczedilebilir; nafaka alacaklarında bu oran farklılık gösterebilir. Maaşın tamamı haczedilemez, borçlunun ve ailesinin geçimi için kalan kısım korunur. Haciz kesintisi işverene gönderilen yazıyla yapılır ve maaş haczine itiraz gerekiyorsa icra mahkemesine şikayet edilebilir." },
      { question: "Konkordato başvurusu kimler tarafından yapılabilir?", answer: "Borçlarını vadesinde ödeyemeyen veya ödeyememe tehlikesi altında olan borçlular konkordato talebinde bulunabilir. Başvuruda mali durumu gösteren belgeler ve geçici mühlet talebi sunulur. Mahkeme inceleme sonucunda geçici mühlet verebilir; bu süre içinde borçlu hakkında icra takibi yapılamaz, ancak şartlar kanunda ayrıca düzenlenmiştir." },
    ],
    howToTitle: "Beşiktaş'ta İcra Takibi Nasıl Başlatılır?",
    howToSteps: [
      { name: "Alacağın Belgelendirilmesi", text: "Alacağın dayanağı olan belge veya ilam hazırlanır." },
      { name: "İcra Dairesine Başvuru", text: "Yetkili icra dairesine takip talebiyle başvurulur." },
      { name: "Ödeme Emrinin Tebliği", text: "Borçluya ödeme emri tebliğ edilir, itiraz süresi başlar." },
      { name: "Haciz veya Tahsilat", text: "İtiraz edilmez veya itiraz sonuçlanırsa haciz ve tahsilat işlemlerine geçilir." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "besiktas-idare-avukati",
    name: "Beşiktaş İdare Avukatı",
    heroTitle: "Beşiktaş İdare Avukatı",
    heroSubtitle:
      "İdari işlemlerin iptali, tam yargı davaları ve idari başvuru süreçlerinde hukuki destek. Yetkili yargı mercii İstanbul idare mahkemeleridir.",
    metaTitle: "Beşiktaş İdare Avukatı | İptal ve Tam Yargı",
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
      { question: "İdari işleme karşı dava açma süresi ne kadardır?", answer: "Kural olarak idari işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Özel kanunlarda farklı süreler öngörülebilir. Vergi davalarında bu süre 30 gündür. Süre tebliğ tarihinden başlar ve kaçırılırsa dava reddedilebileceğinden, işlemin ne zaman öğrenildiği ve hangi kanuna dayandığı baştan belirlenmelidir." },
      { question: "İptal davası ile tam yargı davası arasındaki fark nedir?", answer: "İptal davası idari işlemin hukuka aykırılığının tespitini ve işlemin ortadan kaldırılmasını, tam yargı davası ise bu işlemden veya idarenin eyleminden doğan zararın tazminini amaçlar. İki talep aynı dilekçede birlikte ileri sürülebilir. İptal kararı verilse bile zarar ayrıca ispat edilmelidir." },
      { question: "İdari işleme karşı önce idareye başvurmak zorunlu mu?", answer: "Bazı işlemlerde zorunlu, bazılarında ihtiyaridir; işlemin türüne göre değerlendirilmelidir. Zorunlu hallerde idareye başvurulmadan dava açılırsa dava reddedilebilir. İhtiyari başvuruda ise dava açma süresi durur. Hangi yolun izleneceği ilgili kanuna bakılarak belirlenir ve süre kaybı yaşanmaması için dikkatle ilerlenmelidir." },
      { question: "Belediye para cezasına nasıl itiraz edilir?", answer: "Cezanın tebliğinden itibaren yasal süre içinde idare mahkemesinde iptal davası açılabilir. Bazı idari para cezalarında kanun farklı bir mercii veya süre öngörebilir; bu nedenle cezanın dayanağı olan kanun maddesi kontrol edilmelidir. Dilekçede ceza kararı eklenir ve işlemin hukuka aykırı olduğu gerekçeleri açıklanır." },
      { question: "İdari davada yürütmenin durdurulması talep edilebilir mi?", answer: "Evet, işlemin uygulanması halinde giderilmesi güç veya imkansız zararlar doğacaksa ve işlem açıkça hukuka aykırıysa yürütmenin durdurulması talep edilebilir. Talep dava dilekçesiyle birlikte veya dava sırasında ileri sürülür. Mahkeme karar verene kadar işlemin uygulanması askıya alınabilir; ancak bu karar dava sonucunu belirlemez." },
      { question: "Kamulaştırma bedeline itiraz mümkün mü?", answer: "Evet, kamulaştırma bedelinin tespitine ilişkin dava açılabilir. Bedelin düşük olduğu düşünülüyorsa mahkemeden bilirkişi incelemesiyle gerçek değerin belirlenmesi talep edilir. Kamulaştırma kararının kendisi de hukuka aykırıysa idare mahkemesinde iptal davası açılabilir; bu iki yol farklı mahkemelerde ve ayrı sürelere bağlı yürür." },
      { question: "İdare mahkemesi kararına karşı hangi yola başvurulur?", answer: "Karara karşı istinaf, bazı hallerde temyiz yoluna başvurulabilir. İdare mahkemesi kararlarına karşı istinaf başvurusu bölge idare mahkemesine yapılır. Süre kararın tebliğinden itibaren işler ve kanunda belirlenmiştir. Başvuru dilekçesinde kararın hangi yönlerden hukuka aykırı olduğu açıklanır." },
    ],
    howToTitle: "Beşiktaş'ta İdari İşlemin İptali Davası Nasıl Açılır?",
    howToSteps: [
      { name: "İşlemin İncelenmesi", text: "İptali istenen idari işlem ve tebliğ tarihi tespit edilir." },
      { name: "Süre Kontrolü", text: "60 günlük dava açma süresinin geçip geçmediği kontrol edilir." },
      { name: "Dava Dilekçesinin Hazırlanması", text: "İptal gerekçeleri ve varsa yürütmenin durdurulması talebi dilekçede belirtilir." },
      { name: "Dava Süreci", text: "İdare mahkemesi dosyayı inceler, gerekirse duruşma yapılır ve karar verilir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "besiktas-is-hukuku-avukati",
    name: "Beşiktaş İş Hukuku Avukatı",
    heroTitle: "Beşiktaş İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem ve ihbar tazminatı, işe iade davası, fazla mesai ve iş sözleşmesi uyuşmazlıklarında hukuki destek. Yetkili adliye İstanbul (Çağlayan) Adliyesi'dir.",
    metaTitle: "Beşiktaş İş Hukuku Avukatı | İşe İade",
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
      { question: "İşe iade davası açmadan önce ne yapılmalı?", answer: "Fesih bildiriminden itibaren 1 ay içinde arabulucuya başvurulması zorunludur. Arabuluculuk sonuçsuz kalırsa son tutanağın düzenlenmesinden itibaren 2 hafta içinde iş mahkemesinde dava açılmalıdır. İşe iade için işçinin 30 ve üzeri işçi çalıştıran işyerinde en az 6 aylık kıdemi bulunması gerekir (İş K. m.18)." },
      { question: "Kıdem tazminatı hangi hallerde ödenir?", answer: "İşverenin haksız feshi, işçinin haklı sebeple istifası, emeklilik gibi kanunda sayılan hallerde ödenir. Aynı işverenin işyerinde en az bir yıl çalışılmış olması gerekir. İşçinin kendi isteğiyle haklı neden olmaksızın ayrılması halinde tazminat doğmaz; fesih sebebi bu nedenle somut olaya göre değerlendirilir." },
      { question: "Fazla mesai alacağı nasıl ispatlanır?", answer: "Fazla mesai alacağı bordro, işyeri giriş-çıkış kayıtları, yazışmalar ve tanık beyanı gibi delillerle ispatlanabilir. İspat yükü kural olarak işçidedir; ancak işveren kayıtları sunmazsa bu durum değerlendirmeye yansır. Ücret bordrosundaki fazla mesai ödemeleri de hesaplamada dikkate alınır ve eksik ödemeler talep edilebilir." },
      { question: "İşe iade davası kimler için açılabilir?", answer: "İş güvencesi kapsamındaki işçiler açabilir: 30 ve üzeri işçi çalıştıran işyerinde, en az 6 aylık kıdemi olan ve belirsiz süreli iş sözleşmesiyle çalışan işçiler (İş K. m.18). Fesihten itibaren 1 ay içinde arabulucuya başvurulması gerekir." },
      { question: "Mobbing iddiası nasıl ileri sürülür?", answer: "Mobbing iddiası somut olgular ve varsa delillerle desteklenerek işverene karşı tazminat talebi olarak ileri sürülebilir. Yazışmalar, tanık beyanları, sağlık raporları ve olayların tarihli kaydı delil olarak sunulabilir. Sürekli ve sistematik davranış kalıbı ispat edilmelidir; tek seferlik olaylar genelde mobbing olarak değerlendirilmez." },
      { question: "Beşiktaş'ta iş davası hangi mahkemede görülür?", answer: "Beşiktaş'ta iş davaları İstanbul (Çağlayan) Adliyesi bünyesindeki iş mahkemelerinde görülür. Dava açmadan önce işe iade ve işçilik alacakları için arabulucuya başvurmak dava şartıdır. Büro Beşiktaş'ta olduğundan ilçede çalışan veya işyeri bulunan kişiler için dosya hazırlığı yüz yüze yürütülebilir." },
      { question: "İhbar tazminatı süresi ne kadardır?", answer: "İhbar tazminatı, kıdeme göre 2 ila 8 hafta arasında değişen bildirim sürelerine bağlıdır. İşveren bu süreye uymadan sözleşmeyi feshederse, bildirim süresine ait ücret kadar ihbar tazminatı ödemekle yükümlüdür. Haklı nedenle yapılan fesihlerde ihbar tazminatı doğmaz; fesih sebebi bu açıdan incelenir." },
      { question: "İşçilik alacaklarında zamanaşımı süresi nedir?", answer: "Kıdem ve ihbar tazminatı dahil çoğu işçilik alacağı için 5 yıllık zamanaşımı süresi uygulanır. Süre, alacağın muaccel olduğu tarihten itibaren işler. Zamanaşımı itirazı karşı tarafça ileri sürülürse süresi geçmiş alacaklar talep edilemez; bu nedenle fesih tarihi ve alacağın doğduğu zaman başta tespit edilmelidir." },
    ],
    howToTitle: "Beşiktaş'ta İşe İade Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Fesih Bildiriminin İncelenmesi", text: "İş sözleşmesinin feshine ilişkin bildirim ve gerekçe incelenir." },
      { name: "Arabulucuya Başvuru", text: "Fesihten itibaren 1 ay içinde arabulucuya başvurulur." },
      { name: "Dava Açılması", text: "Arabuluculukta anlaşma sağlanamazsa 2 hafta içinde iş mahkemesinde dava açılır." },
      { name: "Yargılama ve Karar", text: "Mahkeme feshin geçerliliğini değerlendirir ve kararını verir." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "ise-iade-davasi"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "besiktas-kira-tahliye-avukati",
    name: "Beşiktaş Kira ve Tahliye Avukatı",
    heroTitle: "Beşiktaş Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında hukuki destek. Yetkili adliye İstanbul (Çağlayan) Adliyesi'dir.",
    metaTitle: "Beşiktaş Kira ve Tahliye Avukatı | Tahliye",
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
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira bedelinin ödenmemesi, tahliye taahhüdü, ihtiyaç nedeniyle tahliye gibi kanunda öngörülen hallerde tahliye talep edilebilir. Kira borcunda yazılı ihtar verilir, ödeme için verilen süre (TBK m.315, 30 gün) geçerse tahliye isteği ileri sürülebilir. Her nedenin şartları ve ispat biçimi farklıdır." },
      { question: "Belirli süreli kira sözleşmesi sona erince kiracı çıkarılabilir mi?", answer: "Hayır, sürenin dolması tek başına tahliye sebebi değildir; kiracı bildirimde bulunmazsa sözleşme yenilenmiş sayılır. Kiracının çıkarılması için kanundaki tahliye sebeplerinden birinin bulunması gerekir. Kiracı süre bitiminden önce yazılı bildirimde bulunursa kira sonlanır; kiraya veren ise ancak kanuni sebep varsa tahliye ister." },
      { question: "Tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi mahkemenin iş yüküne ve uyuşmazlığın niteliğine göre değişmekle birlikte ortalama 6-18 ay sürebilir. Taahhütname veya kira borcuna dayanan icra yoluyla tahliye daha kısa sürebilir. Delillerin tamamlanması, tebligat ve bilirkişi incelemesi süreci uzatabilecek unsurlardır." },
      { question: "Kira bedeli tespiti davası ne zaman açılır?", answer: "Kira bedelinin günün koşullarına uyarlanması istendiğinde açılabilir; belirli süreler ve şartlara tabidir. Kira bedelinin rayiç değerin altında veya üstünde kaldığı düşünülüyorsa, mahkeme emsal kiralara ve taşınmazın durumuna bakarak bedeli belirler. Dava açmadan önce kira sözleşmesindeki hükümler ve yenilenen dönem koşulları incelenmelidir." },
      { question: "Tahliye taahhütnamesi ile icra yoluyla tahliye nasıl işler?", answer: "Geçerli bir tahliye taahhüdüne dayanılarak icra dairesi aracılığıyla tahliye talep edilebilir. Taahhüt kira başladıktan sonra, tahliye tarihi belirtilerek yazılı verilmiş olmalıdır. Kiracıya tahliye emri gönderilir; itiraz edilirse takip durur ve taahhüdün geçerliliği ilgili mahkemede incelenir." },
      { question: "Kiracı kira bedelini artırmayı kabul etmezse ne olur?", answer: "Kiraya veren, kira bedeli tespiti davası açarak güncel bedelin belirlenmesini talep edebilir. Kiracının kabul etmemesi tek başına tahliye sebebi değildir; mahkeme bilirkişi incelemesiyle yeni bedeli belirler. Dava açılmadan önce sözleşme hükümleri ve yenilenen dönem koşulları da değerlendirilmelidir." },
    ],
    howToTitle: "Beşiktaş'ta Kiracı Tahliye Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Tahliye Sebebinin Belirlenmesi", text: "İhtiyaç, temerrüt veya taahhüt gibi tahliye sebebi tespit edilir." },
      { name: "İhtar veya Taahhüt Kontrolü", text: "Gerekli ihtarname çekilir veya taahhütname incelenir." },
      { name: "Dava veya İcra Takibi", text: "Duruma göre sulh hukuk mahkemesinde dava açılır veya icra takibi başlatılır." },
      { name: "Tahliyenin Gerçekleştirilmesi", text: "Karar veya icra emri kesinleştiğinde tahliye işlemi yürütülür." },
    ],
    crosslinkLabel: "Kira ve Tahliye Avukatı",
    relatedPostSlugs: ["kiracinin-tahliye-sureci", "kira-bedeli-tespit-ve-uyarlama-davasi"],
  },

  // ─────────────────────────── VERGİ ───────────────────────────
  {
    slug: "vergi",
    urlSlug: "besiktas-vergi-avukati",
    name: "Beşiktaş Vergi Avukatı",
    heroTitle: "Beşiktaş Vergi Avukatı",
    heroSubtitle:
      "Vergi tarhiyatlarına itiraz, vergi cezalarına karşı dava ve uzlaşma süreçlerinde hukuki destek. Yetkili yargı mercii İstanbul vergi mahkemeleridir.",
    metaTitle: "Beşiktaş Vergi Avukatı | Uzlaşma ve Dava",
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
      { question: "Vergi ihbarnamesine karşı dava açma süresi ne kadardır?", answer: "Vergi ihbarnamesine karşı dava açma süresi tebliğ tarihinden itibaren 30 gündür. Dava, İstanbul vergi mahkemelerinde açılır. Süre tebliğ tarihinden başlar ve kaçırılırsa dava hakkı kaybedilebilir; bu nedenle ihbarnamenin tebliğ edildiği tarih belgeden kontrol edilmelidir. Uzlaşma talebi bu süreyi etkileyebilir." },
      { question: "Uzlaşma talep edilirse dava hakkı kaybedilir mi?", answer: "Hayır, uzlaşma sağlanamazsa kalan süre içinde dava açma hakkı devam eder. Uzlaşma talebi tarhiyat sonrası yapılan idari bir başvurudur ve dava hakkını ortadan kaldırmaz. Uzlaşma tutanağı düzenlendikten sonra kalan sürede dava açılabilir; bu nedenle süre takibi dikkatle yapılmalıdır." },
      { question: "Beşiktaş'ta vergi davası hangi mahkemede görülür?", answer: "Beşiktaş'ta vergi davaları İstanbul vergi mahkemelerinde görülür. Vergi uyuşmazlıklarında dava süresi kural olarak ihbarnamenin tebliğinden itibaren 30 gündür. Vergiyle ilgili idari başvurularda yetkili daire Beşiktaş Vergi Dairesi Müdürlüğü'dür; dava ise yetkili vergi mahkemesinde, yani İstanbul'da açılır." },
      { question: "Vergi cezasına itiraz nasıl yapılır?", answer: "Vergi cezasına karşı vergi mahkemesinde iptal davası açılarak veya idari uzlaşma yoluyla itiraz edilebilir. Dava süresi ihbarnamenin tebliğinden itibaren 30 gündür. Dilekçede cezanın hukuka aykırı olduğu gerekçeleri açıklanır; uzlaşma talebi yapılırsa uzlaşma sağlanamadığında kalan sürede dava açma hakkı devam eder." },
      { question: "Ödeme emrine itiraz süresi ne kadardır?", answer: "Vergi ödeme emrine karşı tebliğinden itibaren 15 gün içinde vergi mahkemesinde dava açılabilir. Süre tebliğ tarihinden başlar ve kaçırılırsa dava hakkı sona erebilir. Dilekçede ödeme emrinin dayanağı olan alacağın geçerliliği veya usul hataları ileri sürülebilir; ödeme emri belgesi dosyaya eklenir." },
      { question: "Vergi incelemesi sırasında hukuki destek alınabilir mi?", answer: "Evet, inceleme sürecinde mükellefin haklarının korunması amacıyla danışmanlık sağlanabilir. İnceleme elemanının talep ettiği belgeler, tutulan tutanaklar ve verilecek cevaplar hukuki açıdan değerlendirilir. İnceleme sonucunda tarhiyat yapılırsa ihbarnameye karşı vergi mahkemesinde dava açma süresi 30 gündür." },
      { question: "Gecikme faizine itiraz edilebilir mi?", answer: "Evet, gecikme faizinin hesaplanmasına ilişkin hatalar bulunduğunda dava yoluyla itiraz edilebilir. Faizin başlangıç tarihi, uygulanan oran veya hesaplama yöntemi gibi hususlar incelenir. İtiraz, ilgili tahakkuk işleminin tebliğinden itibaren vergi mahkemesinde yasal süre içinde yapılmalıdır; süre tebliğ tarihine göre belirlenir." },
    ],
    howToTitle: "Beşiktaş'ta Vergi Tarhiyatına İtiraz Nasıl Yapılır?",
    howToSteps: [
      { name: "İhbarnamenin İncelenmesi", text: "Tarhiyata veya cezaya ilişkin ihbarname ve dayanağı incelenir." },
      { name: "Uzlaşma veya Dava Kararı", text: "Uzlaşma başvurusu mu yoksa doğrudan dava açılacağı değerlendirilir." },
      { name: "Başvurunun Yapılması", text: "30 gün içinde vergi mahkemesinde dava açılır veya uzlaşma talep edilir." },
      { name: "Sonuçlandırma", text: "Mahkeme kararı veya uzlaşma tutanağı ile süreç sonuçlandırılır." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: [],
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
      { question: "Sözleşmeden dönme ile fesih arasındaki fark nedir?", answer: "Dönme sözleşmeyi geriye etkili, fesih ise ileriye etkili olarak sona erdirir. Dönmede taraflar aldıklarını iade eder; feshede ise sözleşme sona erene kadar yapılan edimler geçerli kalır. Hangi yolun uygulanacağı sözleşmenin niteliğine ve ihlalin türüne göre belirlenir; sürekli borç ilişkilerinde genellikle fesih söz konusudur." },
      { question: "Alacak davası açmadan önce arabuluculuk zorunlu mu?", answer: "Ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak arabuluculuk zorunludur. Konusu belirli bir miktar paranın ödenmesi olan ticari davalarda arabulucuya başvurmadan dava açılırsa dava usulden reddedilebilir. Ticari nitelik taşımayan alacaklarda zorunluluk bulunmaz; uyuşmazlığın türü baştan belirlenmelidir." },
      { question: "Ayıplı ifa halinde hangi haklar kullanılabilir?", answer: "Ayıplı ifa halinde sözleşmeden dönme, bedel indirimi, bedelsiz onarım veya misli ile değişim talep edilebilir. Alıcı malı teslim aldıktan sonra ayıbı süresinde satıcıya bildirmelidir. Hangi hakkın seçileceği ayıbın niteliğine ve sözleşme hükümlerine göre değişir; dava veya arabuluculuk yoluyla hak aranabilir." },
      { question: "Beşiktaş'ta ticari alacak davası hangi mahkemede görülür?", answer: "Uyuşmazlığın niteliğine göre asliye ticaret mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde görülür. Ticari nitelik taşıyan para alacağı davalarında dava açmadan önce arabulucuya başvurmak dava şartıdır. Ticari olmayan alacaklarda asliye hukuk mahkemesi görevli olabilir; bu ayrım uyuşmazlığın tarafları ve konusuna göre yapılır." },
      { question: "Sözleşmede cezai şart varsa ayrıca tazminat istenebilir mi?", answer: "Kural olarak cezai şart aşan zarar ispatlanmadıkça ek tazminat istenemez; sözleşme hükümlerine göre değişebilir. Cezai şart, ihlal halinde ödenecek bedeli önceden belirler ve alacaklının zararı ispat yükünü hafifletir. Şart fahiş bulunursa mahkeme tarafından indirilebilir; sözleşmedeki ifade ve işlemin türü bu yönden incelenir." },
      { question: "Zamanaşımına uğrayan alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse alacak talep edilemez; ancak borçlu bunu ileri sürmezse alacak talep edilebilir. Mahkeme zamanaşımını re'sen dikkate almaz. Bu nedenle borçlunun savunmasında bu itirazı yapıp yapmadığı önemlidir; zamanaşımı süresinin ne zaman başladığı ve kesilip kesilmediği ayrıca incelenir." },
    ],
    howToTitle: "Beşiktaş'ta Alacak Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Alacağın ve Delillerin Tespiti", text: "Sözleşme, fatura veya diğer belgelerle alacağın dayanağı ortaya konur." },
      { name: "İhtar ve Ön Koşulların Yerine Getirilmesi", text: "Gerekiyorsa ihtarname çekilir veya arabuluculuk başvurusu yapılır." },
      { name: "Dava Açılması", text: "Yetkili mahkemede alacak davası açılır." },
      { name: "Yargılama ve İcra", text: "Mahkeme kararının kesinleşmesinin ardından gerekirse icra takibi başlatılır." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];

export const besiktasServices: PseoService[] = [...besiktasBaseServices, besiktasMiras];
