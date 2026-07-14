import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const beyogluServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "beyoglu-avukat",
    name: "Beyoğlu Avukat",
    heroTitle: "Beyoğlu Avukat",
    heroSubtitle:
      "Beyoğlu ve çevresinde ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında dava takibi ve hukuki danışmanlık sağlanır. İlçe, İstanbul (Çağlayan) Adliyesi'nin yargı çevresinde yer alır.",
    metaTitle: "Beyoğlu Avukat",
    metaDescription:
      "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında Beyoğlu'nda hukuki danışmanlık ve dava takibi hizmeti verilir.",
    aboutParagraph:
      "2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır. Çalışma alanları arasında ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku bulunur; görüşme talepleri randevu usulüyle karşılanır.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma aşamasından kovuşturmanın sonuna kadar müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet, nafaka ve mal paylaşımı süreçleri." },
      { title: "Gayrimenkul Hukuku", description: "Tapu uyuşmazlıkları, kira ilişkileri ve tahliye davaları." },
      { title: "İş Hukuku", description: "İşe iade, tazminat ve işçilik alacağı talepleri." },
      { title: "İcra Hukuku", description: "Alacağın tahsili, takip ve itiraz aşamalarında destek." },
      { title: "İdare Hukuku", description: "İdari işlemlere karşı iptal ve tam yargı davaları." },
      { title: "Vergi Hukuku", description: "Tarhiyat ve vergi cezalarına ilişkin itiraz süreçleri." },
      { title: "Borçlar Hukuku", description: "Sözleşme, tazminat ve alacak uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza hukuku desteği",
      "Boşanma, velayet ve nafakaya ilişkin aile hukuku süreçleri",
      "Tapu, kira ve tahliye konularında gayrimenkul hukuku hizmeti",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsili ve itiraz süreçlerinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı iptal davası ve idare hukuku danışmanlığı",
      "Vergi uyuşmazlıklarında itiraz ve dava süreçleri",
      "Sözleşme ve tazminat uyuşmazlıklarında borçlar hukuku desteği",
    ],
    localParagraphs: [
      "Cihangir ve Gümüşsuyu'nun merkezi konut dokusundan İstiklal Caddesi çevresinin yoğun ticari hareketliliğine, Kasımpaşa ve Hacıahmet'in köklü yerleşim mahallelerine kadar geniş bir sosyo-ekonomik yelpazeyi barındıran Beyoğlu, İstanbul'un nüfus yoğunluğu en yüksek ilçelerinden biridir. Adli yargı bakımından İstanbul (Çağlayan) Adliyesi'nin yetki alanındadır.",
      "İlçede yerleşik kişilerin hukuki uyuşmazlıkları ilgili adli mahkemelerde, idari nitelikli uyuşmazlıklar İstanbul idare mahkemelerinde, vergisel uyuşmazlıklar ise İstanbul vergi mahkemelerinde çözümlenir. Vergi işlemlerinde muhatap kurum Beyoğlu Vergi Dairesi Müdürlüğü'dür.",
    ],
    faqs: [
      { question: "Beyoğlu hangi adliyenin yargı çevresindedir?", answer: "İlçe, İstanbul (Çağlayan) Adliyesi'nin yargı çevresi içinde yer almaktadır." },
      { question: "Görüşme talebi nasıl iletilir?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir randevu zamanı belirlenir." },
      { question: "Hangi alanlarda temsil sağlanıyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku dahil geniş bir yelpazede temsil ve danışmanlık sunulur." },
      { question: "Fiziki ofis Beyoğlu sınırları içinde mi?", answer: "Hayır, ofis Beşiktaş/Sinanpaşa'dadır; Beyoğlu'ndaki müvekkillere de aynı şekilde hizmet verilir." },
      { question: "Ücretlendirme nasıl yapılıyor?", answer: "Dosyanın kapsamı ve karmaşıklığına göre değişir, netleştirme danışmanlık görüşmesinde yapılır." },
      { question: "Beyoğlu Vergi Dairesi kararlarına itiraz edilebilir mi?", answer: "Evet, tarhiyat ve ceza kararlarına karşı uzlaşma ve dava süreçlerinde destek sağlanır." },
      { question: "Uzaktan görüşme mümkün mü?", answer: "Evet, talebe göre yüz yüze veya çevrim içi görüşme düzenlenebilir." },
      { question: "Çağlayan Adalet Sarayı'na Beyoğlu'ndan nasıl ulaşılır?", answer: "M2 metrosu, füniküler hatları ve otobüs güzergahları üzerinden ulaşım mümkündür." },
      { question: "Gözaltı gibi acil durumlarda ne yapılmalı?", answer: "Telefon veya WhatsApp üzerinden derhal iletişime geçilmesi yeterlidir." },
      { question: "Dava süreci hakkında düzenli bilgi alınabilir mi?", answer: "Evet, dosyadaki her gelişme müvekkille paylaşılır." },
    ],
    howToTitle: "Beyoğlu'nda Hukuki Destek Süreci Nasıl Başlar?",
    howToSteps: genelSurec,
    crosslinkLabel: "Beyoğlu Avukat (Genel)",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "kidem-tazminati-hesaplama-2026", "icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "beyoglu-bosanma-avukati",
    name: "Beyoğlu Boşanma Avukatı",
    heroTitle: "Beyoğlu Boşanma Avukatı",
    heroSubtitle:
      "Boşanma sürecinde velayet, nafaka ve mal rejimi tasfiyesi dahil olmak üzere anlaşmalı ve çekişmeli davalarda hukuki temsil sağlanır. Yargı çevresi İstanbul (Çağlayan) Adliyesi'dir.",
    metaTitle: "Beyoğlu Boşanma Avukatı",
    metaDescription:
      "Anlaşmalı veya çekişmeli boşanma, velayet, nafaka ve mal paylaşımı süreçlerinde Beyoğlu'nda hukuki temsil ve danışmanlık sağlanır.",
    aboutParagraph:
      "Furkan Arıkan, 72621 sicil numarasıyla İstanbul Barosu'na kayıtlı bir avukat olarak aile hukuku alanında velayet, nafaka ve boşanma süreçlerinde temsil sunar. 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokol hazırlığı ve tek celsede sonuçlanan duruşma takibi." },
      { title: "Çekişmeli Süreç", description: "Kusur tespiti, tazminat ve velayet uyuşmazlıklarının yürütülmesi." },
      { title: "Velayet Düzenlemesi", description: "Çocuğun üstün yararına göre velayet ve kişisel ilişki tesisi." },
      { title: "Nafaka Süreçleri", description: "Tedbir, yoksulluk ve iştirak nafakası taleplerinin takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolünün hazırlanması ve duruşma takibi",
      "Kusura dayalı çekişmeli boşanma davası açılması",
      "Velayetin düzenlenmesi veya sonradan değiştirilmesi talepleri",
      "Nafakanın artırılması, azaltılması ya da kaldırılması davaları",
      "Edinilmiş mallara katılma alacağı (mal rejimi tasfiyesi) talepleri",
      "Boşanmadan doğan maddi ve manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Cihangir ve Gümüşsuyu'nun kentli, orta-üst gelir profilinden Kasımpaşa ve Hacıahmet'in geleneksel aile yapısına uzanan geniş bir demografik çeşitlilik, Beyoğlu'nde boşanma davalarındaki mal rejimi ve nafaka taleplerinin de dosyadan dosyaya farklılaşmasına yol açar.",
      "Bu farklılığa rağmen ilçedeki tüm boşanma, velayet ve nafaka davaları aynı yargı çevresinde, İstanbul (Çağlayan) Adliyesi'ndeki aile mahkemelerinde görülür. Anlaşmalı süreçte protokolün eksiksizliği, çekişmeli süreçte ise iddiaların somut delille desteklenmesi belirleyici olur.",
    ],
    faqs: [
      { question: "Aile mahkemesi başvurusu nereye yapılır?", answer: "Beyoğlu'ndaki boşanma davaları İstanbul (Çağlayan) Adliyesi bünyesindeki aile mahkemelerinde görülür." },
      { question: "Protokolde hangi başlıklar yer almalı?", answer: "Velayet, nafaka, mal rejimi tasfiyesi ve varsa tazminat konuları eksiksiz düzenlenmelidir." },
      { question: "Çekişmeli süreçte ispat yükü nasıl işler?", answer: "Kusur ve talepler tanık beyanı, yazışma ve mali kayıt gibi somut delillerle desteklenmelidir." },
      { question: "Velayet hangi kritere göre belirlenir?", answer: "Esas alınan ölçüt çocuğun üstün yararıdır; ebeveynlerin fiili durumu buna göre değerlendirilir." },
      { question: "Nafaka miktarı sonradan değiştirilebilir mi?", answer: "Evet, koşullardaki değişiklik nafakanın artırılması, azaltılması veya kaldırılmasını gerektirebilir." },
      { question: "Dava süresince nafaka talep edilebilir mi?", answer: "Evet, ihtiyaç sahibi taraf lehine tedbir nafakasına hükmedilebilir." },
    ],
    howToTitle: "Beyoğlu'nde Boşanma Süreci Nasıl İlerler?",
    howToSteps: [
      { name: "Durumun Değerlendirilmesi", text: "Evlilik birliğinin durumu ile velayet, nafaka ve mal rejimi talepleri netleştirilir." },
      { name: "Belge Hazırlığı", text: "Duruma göre dava dilekçesi veya anlaşmalı protokol hazırlanır." },
      { name: "Başvuru", text: "Yetkili aile mahkemesine başvurulur ve duruşma günü beklenir." },
      { name: "Duruşma Süreci", text: "Taraflar dinlenir, gerekli incelemeler yapılır ve karar verilir." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "bosanmada-nafaka-turleri"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "beyoglu-ceza-avukati",
    name: "Beyoğlu Ceza Avukatı",
    heroTitle: "Beyoğlu Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade, tutukluluk ve kovuşturma aşamalarının tamamında müdafilik hizmeti sunulur. Kovuşturma İstanbul (Çağlayan) Adliyesi'nde yürütülür.",
    metaTitle: "Beyoğlu Ceza Avukatı",
    metaDescription:
      "Gözaltı, soruşturma ve kovuşturma aşamalarında Beyoğlu'nda müdafilik ile tutukluluğa itiraz ve kanun yolu süreçlerinde destek sağlanır.",
    aboutParagraph:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, ceza yargılamasının soruşturmadan kanun yollarına kadar tüm aşamalarında müdafilik yapmaktadır. Mezuniyeti 2019 yılında MEF Üniversitesi Hukuk Fakültesi'ndendir.",
    highlightCards: [
      { title: "Gözaltı ve İfade", description: "Kolluk ve savcılık aşamasında hazır bulunma ve danışmanlık." },
      { title: "Kovuşturma Takibi", description: "Duruşmalara katılım, savunma ve delil değerlendirmesi." },
      { title: "Tutukluluk İtirazları", description: "Tutuklama kararı ve devamına karşı başvurular." },
      { title: "İstinaf/Temyiz", description: "Kanun yolu aşamalarında dosyanın sürdürülmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde ifade öncesi ve sırasında müdafilik",
      "Soruşturma dosyasına erişim ve inceleme",
      "Tutuklama kararına ve tutukluluğun devamına itiraz",
      "Kovuşturma aşamasında duruşmaların takibi",
      "İstinaf ve temyiz dilekçelerinin hazırlanması",
      "Uzlaşma ve etkin pişmanlık hükümlerinden yararlanma danışmanlığı",
    ],
    localParagraphs: [
      "İstiklal Caddesi ve Taksim Meydanı etrafındaki yoğun kalabalık ve gece hayatı hareketliliği, Beyoğlu'nde kolluk müdahalesine konu olan olayların görece sık yaşanmasına zemin hazırlar. Bu olaylara ilişkin kovuşturmalar İstanbul (Çağlayan) Adliyesi'nde görülür.",
      "Gözaltı kararı verilen kişinin müdafi ile görüşme hakkı, gözaltının başladığı ilk anda doğar. Beyoğlu'nün yoğun saatlerinde bu sürece hızlı müdahale edilmesi özellikle önem taşır.",
    ],
    faqs: [
      { question: "Kovuşturma hangi adliyede yürütülür?", answer: "Beyoğlu'nde işlenen suçlara ilişkin kovuşturmalar İstanbul (Çağlayan) Adliyesi'nde görülür." },
      { question: "Müdafiye ne zaman erişilebilir?", answer: "Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme talep edilebilir." },
      { question: "Tutukluluğa itiraz nasıl yapılır?", answer: "Kararı veren merciin bağlı bulunduğu ağır ceza mahkemesine itiraz başvurusu yapılır." },
      { question: "Her ceza davasında müdafi zorunlu mu?", answer: "Alt sınırı beş yıl ve üzerindeki suçlarla bazı özel hallerde zorunludur; diğer durumlarda talebe bağlıdır." },
      { question: "Uzlaşma teklifini reddetmek mümkün mü?", answer: "Evet, uzlaşmaya rıza göstermek zorunlu değildir." },
      { question: "Beraat sonrası itiraz yolu var mı?", answer: "Karara karşı istinaf başvurusu yapılabilir." },
    ],
    howToTitle: "Beyoğlu'nde Ceza Yargılaması Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "Soruşturmanın Başlaması", text: "Şikayet veya ihbarla savcılık soruşturması başlatılır." },
      { name: "Müdafi Talebi", text: "Şüpheli, ifadeden önce müdafi ile görüşme hakkını kullanabilir." },
      { name: "Kovuşturmaya Geçiş", text: "İddianamenin kabulüyle dava açılır ve duruşmalar başlar." },
      { name: "Karar Sonrası Süreç", text: "Gerekirse istinaf veya temyiz kanun yoluna başvurulur." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "beyoglu-gayrimenkul-avukati",
    name: "Beyoğlu Gayrimenkul Avukatı",
    heroTitle: "Beyoğlu Gayrimenkul Avukatı",
    heroSubtitle:
      "Tapu uyuşmazlıkları, kat mülkiyeti sorunları ve kentsel dönüşüm süreçlerinde hukuki destek sunulur. Dava mercii İstanbul (Çağlayan) Adliyesi'dir.",
    metaTitle: "Beyoğlu Gayrimenkul Avukatı",
    metaDescription:
      "Tapu iptali, kat mülkiyeti uyuşmazlıkları ve kentsel dönüşüm süreçlerinde Beyoğlu'nda hukuki danışmanlık ve dava takibi sağlanır.",
    aboutParagraph:
      "Furkan Arıkan, gayrimenkul hukuku alanında tapu, kat mülkiyeti ve kentsel dönüşüm uyuşmazlıklarında danışmanlık veren, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır. 2019 mezunudur (MEF Üniversitesi Hukuk Fakültesi).",
    highlightCards: [
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescil işlemlerine karşı iptal ve düzeltme davaları." },
      { title: "Kat Mülkiyeti", description: "Yönetim planı ve ortak alan kaynaklı anlaşmazlıklar." },
      { title: "Kentsel Dönüşüm", description: "Riskli yapı tespiti ve kat maliki anlaşma süreçleri." },
      { title: "Sözleşme Denetimi", description: "Satış ve kira sözleşmelerinin hukuki kontrolü." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Tapu iptali ve tescil davalarının açılması",
      "Kira bedelinin tespiti ve uyarlanmasına yönelik davalar",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
      "Kat mülkiyeti ve yönetim planından kaynaklı anlaşmazlıklar",
      "Ortaklığın giderilmesi (izale-i şüyu) davaları",
      "Gayrimenkul satış ve devir sözleşmelerinin düzenlenmesi",
    ],
    localParagraphs: [
      "Yüzyılın başına dayanan tarihi apartmanların yoğunlukta olduğu Beyoğlu'nde, kat mülkiyeti kurulumu ve ortak alan uyuşmazlıkları ile kentsel dönüşüm kapsamındaki tapu işlemleri sık gündeme gelir. Bu tür uyuşmazlıklar İstanbul (Çağlayan) Adliyesi'ndeki sulh hukuk ve asliye hukuk mahkemelerinde görülmektedir.",
      "İstiklal Caddesi çevresindeki binalarda konut ve işyeri niteliğindeki bağımsız bölümlerin iç içe bulunması, ortak gider paylaşımı ve yönetim planı uygulamalarında ek değerlendirme gerektirebilir.",
    ],
    faqs: [
      { question: "Tapu kaydına itiraz hangi durumda mümkündür?", answer: "Tescil işleminin hukuka aykırı olduğu hallerde hak sahibi tapu iptali ve tescil davası açabilir." },
      { question: "Gayrimenkul davaları hangi mahkemede görülür?", answer: "Uyuşmazlığın türüne göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde görülür." },
      { question: "Kentsel dönüşüm süreci hangi adımlardan oluşur?", answer: "Riskli yapı tespiti, kat maliklerinin çoğunluk kararı ve idari başvuru aşamalarını içerir." },
      { question: "Ortak gider anlaşmazlıkları nasıl çözülür?", answer: "Öncelikle yönetim planı ve Kat Mülkiyeti Kanunu hükümlerine bakılır, uzlaşma sağlanamazsa dava açılabilir." },
      { question: "Satış öncesi hukuki inceleme neyi kapsar?", answer: "Tapu kaydındaki şerh, ipotek ve haciz gibi kısıtlamaların kontrolünü içerir." },
    ],
    howToTitle: "Beyoğlu'nde Tapu İptali Süreci Nasıl İlerler?",
    howToSteps: [
      { name: "Kayıt İncelemesi", text: "Taşınmazın tapu kaydı ve varsa şerhler incelenir." },
      { name: "Dayanağın Belirlenmesi", text: "İptal talebinin hukuki gerekçesi netleştirilir." },
      { name: "Dilekçenin Hazırlanması", text: "Talep ve destekleyici deliller dilekçeye işlenir." },
      { name: "Yargılama Süreci", text: "Bilirkişi incelemesi tamamlanınca mahkeme karar verir." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "beyoglu-icra-avukati",
    name: "Beyoğlu İcra Avukatı",
    heroTitle: "Beyoğlu İcra Avukatı",
    heroSubtitle:
      "Alacağın tahsiline yönelik icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır. İcra mahkemeleri İstanbul (Çağlayan) Adliyesi'ndedir.",
    metaTitle: "Beyoğlu İcra Avukatı",
    metaDescription:
      "İcra takibi, ödeme emrine itiraz, haciz ve alacak tahsili konularında Beyoğlu'nda hukuki danışmanlık ve temsil sağlanır.",
    aboutParagraph:
      "İcra ve iflas hukuku alanında hem alacaklı hem borçlu tarafını temsil eden Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olmuştur.",
    highlightCards: [
      { title: "Takip Başlatma", description: "İlamlı veya ilamsız icra takibinin yürütülmesi." },
      { title: "İtiraz Süreçleri", description: "Borca, imzaya itiraz ve itirazın iptali davaları." },
      { title: "Haciz Uygulamaları", description: "Menkul ve gayrimenkul üzerinde haciz işlemleri." },
      { title: "İflas/Konkordato", description: "Borçlunun mali durumuna göre başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İlamlı veya ilamsız takiple icra sürecinin başlatılması",
      "Ödeme emrine itiraz ile itirazın iptali davası açılması",
      "Menkul ve gayrimenkul üzerinde haciz uygulanması",
      "İhalenin feshine yönelik dava süreci",
      "İstihkak iddialarının değerlendirilmesi",
      "İflas ve konkordato başvurularında danışmanlık",
    ],
    localParagraphs: [
      "İstiklal Caddesi'nin yoğun perakende ve hizmet ekonomisi, Beyoğlu'nde işyeri kira alacakları ile ticari alacaklara ilişkin icra takiplerinin sık başvurulan bir yol olmasına neden olur; bu takiplerden doğan uyuşmazlıklar İstanbul (Çağlayan) Adliyesi'ndeki icra mahkemelerinde görülür.",
      "Borçlunun Beyoğlu'nde yerleşik olduğu takiplerde, yetkili icra dairesi genel olarak borçlunun ikametgahı veya sözleşmede kararlaştırılan yer esas alınarak belirlenir.",
    ],
    faqs: [
      { question: "İcra takibi uyuşmazlıkları nerede görülür?", answer: "Bu uyuşmazlıklar İstanbul (Çağlayan) Adliyesi bünyesindeki icra mahkemelerinde görülür." },
      { question: "Ödeme emrine itiraz için süre nedir?", answer: "Tebliğ tarihinden itibaren 7 gün içinde itiraz edilmelidir." },
      { question: "İtirazın iptali davası nerede açılır?", answer: "Takibin yapıldığı yerdeki icra mahkemesinde veya genel yetkili mahkemede açılabilir." },
      { question: "Usulsüz haciz işlemine karşı ne yapılabilir?", answer: "İcra mahkemesine şikayet başvurusu yapılabilir." },
      { question: "Mal beyanında bulunulmazsa ne olur?", answer: "Borçlu hakkında icra mahkemesi nezdinde şikayet yoluyla yaptırım talep edilebilir." },
    ],
    howToTitle: "Beyoğlu'nde İcra Takibi Hangi Aşamalardan Oluşur?",
    howToSteps: [
      { name: "Belge Hazırlığı", text: "Alacağı gösteren belge veya ilam bir araya getirilir." },
      { name: "Takip Talebi", text: "Yetkili icra dairesine başvurularak takip başlatılır." },
      { name: "Tebligat Süreci", text: "Ödeme emri borçluya tebliğ edilir, itiraz süresi işlemeye başlar." },
      { name: "Sonuçlandırma", text: "İtiraz olmazsa haciz ve tahsilat aşamasına geçilir." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "beyoglu-idare-avukati",
    name: "Beyoğlu İdare Avukatı",
    heroTitle: "Beyoğlu İdare Avukatı",
    heroSubtitle:
      "Belediye ve diğer kamu kurumu işlemlerinin iptali ile tam yargı davalarında temsil sağlanır. Yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Beyoğlu İdare Avukatı",
    metaDescription:
      "İdari işlemlerin iptali, tazminat talepli tam yargı davaları ve idareye itiraz başvurularında Beyoğlu'nda hukuki destek sunulur.",
    aboutParagraph:
      "İdare hukuku kapsamında idari işlemlerin iptali ve tam yargı davalarında danışmanlık sunan Furkan Arıkan, 72621 sicil sayılı İstanbul Barosu avukatıdır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "İptal Süreci", description: "Hukuka aykırı bulunan idari kararlara karşı dava." },
      { title: "Tam Yargı Talebi", description: "İdarenin eylem veya işleminden doğan zararın giderilmesi." },
      { title: "Belediye Kararları", description: "İmar, ruhsat ve ceza kararlarına ilişkin uyuşmazlıklar." },
      { title: "Ön İtiraz", description: "Dava öncesi idari başvuru ve itiraz aşaması." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İdari işlemlerin iptaline yönelik dava açılması",
      "Tazminat amaçlı tam yargı davası süreçleri",
      "İmar planı ve yapı ruhsatı işlemlerine itiraz",
      "İdari para cezalarına karşı dava açılması",
      "Kamulaştırma bedeline ilişkin uyuşmazlıklar",
      "Kamu personeli özlük işlemlerine dair davalar",
    ],
    localParagraphs: [
      "Beyoğlu'nün kentsel sit alanı statüsü, belediyenin tarihi doku koruma, imar ve ruhsat kararlarını özellik arz eden bir hale getirir; bu kararlara karşı açılacak iptal davaları İstanbul idare mahkemelerinde görülür.",
      "Dava açma süresi kural olarak işlemin tebliğinden itibaren 60 gündür. İstiklal Caddesi çevresindeki işletmelere kesilen idari para cezaları da bu kapsamda değerlendirilebilir.",
    ],
    faqs: [
      { question: "İdari işleme karşı süre ne kadardır?", answer: "Genel kural olarak tebliğ tarihinden itibaren 60 gün içinde dava açılmalıdır." },
      { question: "Belediye cezasına itiraz nasıl yapılır?", answer: "Yasal süre içinde idare mahkemesinde iptal davası açılarak itiraz edilebilir." },
      { question: "Koruma kurulu kararına dava açılabilir mi?", answer: "Evet, bu tür kararlara karşı da idari yargı yoluna gidilebilir." },
      { question: "Yürütmenin durdurulması ne zaman istenir?", answer: "İşlemin uygulanması telafisi güç zarara yol açacaksa bu talep gündeme gelir." },
      { question: "Tazminat talebi hangi hallerde gündeme gelir?", answer: "İdarenin işlem veya eyleminden kaynaklanan bir zarar oluştuğunda tam yargı davası açılabilir." },
    ],
    howToTitle: "Beyoğlu'nde İdari İptal Davası Nasıl İlerler?",
    howToSteps: [
      { name: "İşlemin Tespiti", text: "İptali istenen karar ve tebliğ tarihi belirlenir." },
      { name: "Sürenin Kontrolü", text: "60 günlük yasal süre gözden geçirilir." },
      { name: "Dilekçe Hazırlığı", text: "Gerekçeler ve destekleyici belgeler dilekçeye eklenir." },
      { name: "Mahkeme Süreci", text: "İdare mahkemesi dosyayı inceleyip kararını açıklar." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "beyoglu-is-hukuku-avukati",
    name: "Beyoğlu İş Hukuku Avukatı",
    heroTitle: "Beyoğlu İş Hukuku Avukatı",
    heroSubtitle:
      "İşe iade, kıdem-ihbar tazminatı ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır. İş mahkemeleri İstanbul (Çağlayan) Adliyesi'nde faaliyet gösterir.",
    metaTitle: "Beyoğlu İş Hukuku Avukatı",
    metaDescription:
      "İşe iade davası, kıdem-ihbar tazminatı ve işçilik alacaklarına ilişkin uyuşmazlıklarda Beyoğlu'nda hukuki danışmanlık verilir.",
    aboutParagraph:
      "Furkan Arıkan, iş hukuku alanında hem işçi hem işveren tarafını temsil eden, İstanbul Barosu'na 72621 sicil ile kayıtlı bir avukattır. 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Tazminat Talepleri", description: "Haksız fesih sonucu kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi hükümlerine dayalı işe iade süreci." },
      { title: "Ücret Alacakları", description: "Fazla mesai, izin ve diğer ödemelerin tahsili." },
      { title: "Sözleşme Hazırlığı", description: "İş sözleşmesi ve ibraname metinlerinin düzenlenmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesihte kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Fazla mesai, hafta tatili ve yıllık izin alacaklarının tahsili",
      "Mobbing iddialarına dayalı hukuki süreçler",
      "İş sözleşmesi ve ibraname metinlerinin düzenlenmesi",
      "İş kazası kaynaklı tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "İstiklal Caddesi çevresindeki perakende işletmeleri ile bar, restoran ve otel gibi gece hayatı sektörü işyerleri, Beyoğlu'nde yoğun bir istihdam alanı oluşturur. Bu sektörlerdeki iş sözleşmesi uyuşmazlıkları da dava öncesinde zorunlu arabuluculuk sürecine tabidir.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul (Çağlayan) Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "İşe iade davasından önce hangi adım atılmalı?", answer: "Fesihten itibaren 1 ay içinde arabulucuya başvurulması zorunludur." },
      { question: "Kıdem tazminatına hak kazanma şartları nelerdir?", answer: "Haksız fesih, haklı sebeple istifa veya emeklilik gibi kanunda sayılan haller kıdem tazminatı hakkı doğurur." },
      { question: "İş davaları hangi mahkemede görülür?", answer: "İstanbul (Çağlayan) Adliyesi bünyesindeki iş mahkemelerinde görülür." },
      { question: "Vardiyalı çalışanların fazla mesaisi nasıl ispatlanır?", answer: "Puantaj kayıtları, yazışmalar ve tanık beyanı gibi delillerle ispat edilebilir." },
      { question: "İşçilik alacaklarında zamanaşımı ne kadardır?", answer: "Çoğu işçilik alacağı için kanunda öngörülen süre 5 yıldır." },
    ],
    howToTitle: "Beyoğlu'nde İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Fesih İncelemesi", text: "İş sözleşmesinin sona erme şekli ve gerekçesi incelenir." },
      { name: "Arabuluculuk Başvurusu", text: "Fesihten itibaren 1 ay içinde arabulucuya başvurulur." },
      { name: "Dava Açılışı", text: "Anlaşılamazsa iki hafta içinde iş mahkemesine başvurulur." },
      { name: "Karar Süreci", text: "Mahkeme feshin geçerliliğini inceleyip kararını verir." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "ise-iade-davasi"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "beyoglu-kira-tahliye-avukati",
    name: "Beyoğlu Kira ve Tahliye Avukatı",
    heroTitle: "Beyoğlu Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Konut ve işyeri kiralarında tahliye, rayiç bedel tespiti ve sözleşme uyuşmazlıklarında destek sunulur. Sulh hukuk mahkemeleri İstanbul (Çağlayan) Adliyesi'ndedir.",
    metaTitle: "Beyoğlu Kira ve Tahliye Avukatı",
    metaDescription:
      "Konut ve işyeri kiralarında tahliye, rayiç bedel tespiti ve sözleşme uyuşmazlıklarında Beyoğlu'nda hukuki danışmanlık sunulur.",
    aboutParagraph:
      "Kira hukuku alanında hem mülk sahiplerine hem kiracılara danışmanlık veren Furkan Arıkan, 72621 sicil sayılı İstanbul Barosu avukatıdır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur.",
    highlightCards: [
      { title: "İşyeri Uyuşmazlıkları", description: "İstiklal Caddesi çevresindeki ticari kira anlaşmazlıkları." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt veya taahhüde dayalı çıkarma süreçleri." },
      { title: "Bedel Uyarlaması", description: "Piyasa koşullarına göre kira bedelinin yeniden belirlenmesi." },
      { title: "Kontrat İncelemesi", description: "Kira sözleşmesinin risklere karşı gözden geçirilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Konut ve işyeri kiralarında tahliye davası açılması",
      "Geçerli taahhütnameye dayanarak icra yoluyla çıkarma",
      "Kira borcunun ödenmemesi sebebiyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve güncellenmesi",
      "Sözleşme feshinden kaynaklanan tazminat talepleri",
      "Ticari kira sözleşmelerinin hazırlanması ve gözden geçirilmesi",
    ],
    localParagraphs: [
      "İstiklal Caddesi çevresindeki değerli işyeri kiraları ile Kasımpaşa, Hacıahmet gibi mahallelerdeki konut kiralarının bir arada bulunması, Beyoğlu'ndeki kira uyuşmazlıklarını türce çeşitlendirir. Bunların tümünde taşınmazın bulunduğu yer sulh hukuk mahkemesi görevlidir.",
      "Bu davalara İstanbul (Çağlayan) Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır; ticari kiralarda ayrıca sektöre özgü teamüller de değerlendirmeye alınabilir.",
    ],
    faqs: [
      { question: "İşyeri ve konut tahliyesi aynı usule mi tabidir?", answer: "Temel usul ortak olsa da ticari kiralarda bazı ek süre ve teamül kuralları uygulanabilir." },
      { question: "Tahliye davası ortalama ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir." },
      { question: "Rayiç bedel davası ne zaman açılır?", answer: "Mevcut kira bedelinin piyasa değerinin altında kaldığı durumlarda, kanuni usule uyularak açılabilir." },
      { question: "Taahhütnameyle tahliye mahkeme gerektirir mi?", answer: "Geçerli bir taahhütname varsa doğrudan icra dairesi kanalıyla tahliye talep edilebilir." },
      { question: "Tescilli yapılarda kiracılık ek kısıtlamaya tabi mi?", answer: "Sit alanı statüsü tadilat ve kullanım biçimini etkileyebileceğinden sözleşme öncesi incelenmelidir." },
    ],
    howToTitle: "Beyoğlu'nde Tahliye Süreci Nasıl Yürütülür?",
    howToSteps: [
      { name: "Sebebin Netleştirilmesi", text: "Tahliyeye dayanak olacak durum (taahhüt, temerrüt, ihtiyaç) belirlenir." },
      { name: "Belge Toplama", text: "İhtarname, sözleşme veya taahhütname bir araya getirilir." },
      { name: "Başvuru", text: "Duruma göre sulh hukuk mahkemesi veya icra dairesine başvurulur." },
      { name: "Tahliyenin Gerçekleşmesi", text: "Kesinleşen karar veya emirle taşınmaz tahliye edilir." },
    ],
    crosslinkLabel: "Kira ve Tahliye Avukatı",
    relatedPostSlugs: ["kiracinin-tahliye-sureci", "kira-bedeli-tespit-ve-uyarlama-davasi"],
  },

  // ─────────────────────────── VERGİ ───────────────────────────
  {
    slug: "vergi",
    urlSlug: "beyoglu-vergi-avukati",
    name: "Beyoğlu Vergi Avukatı",
    heroTitle: "Beyoğlu Vergi Avukatı",
    heroSubtitle:
      "Vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır. Vergi mahkemeleri İstanbul vergi yargısı bünyesindedir.",
    metaTitle: "Beyoğlu Vergi Avukatı",
    metaDescription:
      "Vergi tarhiyatına itiraz, ceza kesme işlemleri ve uzlaşma süreçlerinde Beyoğlu'nda hukuki danışmanlık ve dava takibi sağlanır.",
    aboutParagraph:
      "Vergi hukuku alanında tarhiyat ve ceza uyuşmazlıklarında danışmanlık sunan Furkan Arıkan, İstanbul Barosu'na 72621 sicil ile kayıtlıdır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen yapılan vergilendirmeye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı kesintilerine itiraz." },
      { title: "Uzlaşma Görüşmesi", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Mahkeme Süreci", description: "Vergi mahkemesi nezdinde dava açılması ve takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda idare nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Vergi incelemesi sürecinde danışmanlık verilmesi",
      "Gecikme faizi ve gecikme zammına dair uyuşmazlıklar",
    ],
    localParagraphs: [
      "Beyoğlu'nde mükellefiyeti bulunanların vergisel işlemleri Beyoğlu Vergi Dairesi Müdürlüğü tarafından yürütülür; bu daireye ait tarhiyat ve ceza kararlarına karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir.",
      "İstiklal Caddesi ve çevresindeki yoğun perakende ile turizm faaliyeti, KDV ve kurumlar vergisi kaynaklı uyuşmazlıkların ilçede sık görülmesine yol açar.",
    ],
    faqs: [
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davaları hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Uzlaşma başvurusu dava hakkını etkiler mi?", answer: "Uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır." },
      { question: "Turizm sektöründe hangi uyuşmazlıklar öne çıkar?", answer: "KDV iadesi talepleri ve hasılat tespitine dayalı vergi incelemeleri sıkça gündeme gelir." },
    ],
    howToTitle: "Beyoğlu'nde Vergi İtirazı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "İhbarname İncelemesi", text: "Tarhiyat veya cezanın dayanağı ayrıntılı incelenir." },
      { name: "Yol Seçimi", text: "Uzlaşma başvurusu mu yoksa doğrudan dava mı açılacağı kararlaştırılır." },
      { name: "Başvurunun Yapılması", text: "Süresi içinde vergi mahkemesine başvurulur veya uzlaşma talep edilir." },
      { name: "Sürecin Kapanışı", text: "Mahkeme kararı veya uzlaşma tutanağıyla süreç tamamlanır." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "beyoglu-borclar-hukuku-avukati",
    name: "Beyoğlu Borçlar Hukuku Avukatı",
    heroTitle: "Beyoğlu Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Sözleşme ihlalleri, alacak talepleri ve tazminat davalarında temsil sağlanır. Ticaret ve asliye hukuk mahkemeleri İstanbul (Çağlayan) Adliyesi'ndedir.",
    metaTitle: "Beyoğlu Borçlar Hukuku Avukatı",
    metaDescription:
      "Sözleşme uyuşmazlıkları, alacak talepleri ve tazminat davalarında Beyoğlu'nda hukuki danışmanlık ve dava takibi sunulur.",
    aboutParagraph:
      "Furkan Arıkan, borçlar hukuku kapsamında sözleşme ve alacak uyuşmazlıklarında danışmanlık veren, 72621 sicil sayılı İstanbul Barosu avukatıdır. MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olmuştur.",
    highlightCards: [
      { title: "Sözleşme İhtilafları", description: "İfa, ihlal ve fesih kaynaklı uyuşmazlıkların yürütülmesi." },
      { title: "Alacak Süreçleri", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Dönme Talepleri", description: "Ayıplı ifa veya temerrüt nedeniyle sözleşmeden dönme." },
      { title: "Tazminat Davaları", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sözleşmenin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Sözleşmeye aykırılıktan doğan tazminat davaları",
      "Sözleşme metinlerinin hazırlanması ve hukuki denetimi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "İstiklal Caddesi çevresindeki perakende, otelcilik ve eğlence sektörü işletmeleri arasındaki tedarik ve hizmet sözleşmelerinden doğan uyuşmazlıklar, Beyoğlu'nde sıkça karşılaşılan bir dava türüdür. Bu uyuşmazlıklara niteliğine göre İstanbul (Çağlayan) Adliyesi'ndeki asliye hukuk veya ticaret mahkemelerinde bakılır.",
      "Beyoğlu'nde ticari nitelikteki bazı alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir; bu husus alacağın türüne göre değerlendirilir.",
    ],
    faqs: [
      { question: "Dönme ile fesih arasındaki fark nedir?", answer: "Dönme sözleşmeyi baştan itibaren, fesih ise ileriye dönük olarak sona erdirir." },
      { question: "Ticari alacak davası nerede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde görülür." },
      { question: "Dava öncesi arabuluculuk her zaman zorunlu mu?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
      { question: "Tedarik sözleşmesi ihtilafları nasıl çözülür?", answer: "Öncelikle sözleşme hükümleri ve varsa cezai şart maddeleri incelenir, sonra dava veya arabuluculuk yoluna gidilir." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep reddedilir; ileri sürülmezse alacak talep edilebilir." },
    ],
    howToTitle: "Beyoğlu'nde Alacak Davası Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Delil Tespiti", text: "Sözleşme, fatura ve diğer belgelerle alacağın dayanağı ortaya konur." },
      { name: "Ön Koşulların Yerine Getirilmesi", text: "Gerekiyorsa ihtarname çekilir veya arabuluculuğa başvurulur." },
      { name: "Davanın Açılması", text: "Yetkili mahkemede alacak davası açılır." },
      { name: "İcra Aşaması", text: "Kararın kesinleşmesiyle gerekirse icra takibi başlatılır." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];
