import type { PseoService } from "./types";
import { arnavutkoyMiras } from "./miras/arnavutkoyMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const arnavutkoyBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "arnavutkoy-avukat",
    name: "Arnavutköy Avukat",
    heroTitle: "Arnavutköy Avukat",
    heroSubtitle:
      "Arnavutköy'ün Bolluca, Taşoluk, Hadımköy ve Boğazköy gibi mahallelerinde oturan ya da işletme yürüten kişiler için ceza ve aile davalarından vergi ve sözleşme uyuşmazlıklarına kadar sekiz alanda danışmanlık ve dava takibi sağlanır.",
    metaTitle: "Arnavutköy Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Arnavutköy'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "72621 sicil numaralı İstanbul Barosu avukatı Furkan Arıkan, 2019'da MEF Üniversitesi'nin hukuk fakültesini bitirmiştir. Arnavutköy'deki müvekkillerin sekiz ayrı hukuk alanındaki dosyalarında danışmanlık ve vekalet hizmeti verir; büro Beşiktaş/Sinanpaşa'dadır, randevu için WhatsApp veya telefon kullanılır.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Karakol ifadesinden duruşmaya kadar savunma ve müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet, nafaka ve mal paylaşımı uyuşmazlıkları." },
      { title: "Gayrimenkul Hukuku", description: "Yeni konut projelerinde tapu, teslim gecikmesi ve kat mülkiyeti sorunları." },
      { title: "İş Hukuku", description: "Fesih, tazminat ve işçilik alacağı davalarında işçi ve işveren desteği." },
      { title: "İcra Hukuku", description: "Takip başlatma, itiraz ve haciz süreçleri." },
      { title: "İdare Hukuku", description: "İmar ve ruhsat gibi idari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Arnavutköy Mal Müdürlüğü'nce tesis edilen tarhiyat ve cezalara itiraz." },
      { title: "Borçlar Hukuku", description: "Satış vaadi ve ticari sözleşmelerden doğan alacak ve tazminat talepleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı, soruşturma ve duruşma süreçlerinde müdafilik",
      "Boşanma, velayet ve nafaka davalarında vekil olarak temsil",
      "Konut satış vaadi, tapu devri ve kat mülkiyeti uyuşmazlıklarında dava takibi",
      "Fesih, işe iade ve işçilik alacağı taleplerinde danışmanlık",
      "İcra takibi başlatılması, borca itiraz ve haciz işlemleri",
      "İmar, ruhsat ve diğer idari işlemlere karşı iptal davası açılması",
      "Vergi ihbarnamelerine itiraz, uzlaşma ve vergi mahkemesi davaları",
      "Alacak, ifa ve tazminat taleplerine ilişkin sözleşme uyuşmazlıkları",
    ],
    localParagraphs: [
      "İstanbul Havalimanı'nın ilçe sınırları içinde bulunması ve Haziran 2026'da açılan Halkalı-Arnavutköy metro kesimi, Arnavutköy'ü tarım arazilerinin hızla konuta dönüştüğü bir ilçeye çevirmiştir. Taşoluk, Bolluca ve Hadımköy çevresindeki yeni konut projeleri ile Durusu ve Karaburun gibi kıyıya yakın yerleşimler farklı hukuki ihtiyaçlar doğurur.",
      "Vergisel işlemlerde yetkili birim Arnavutköy Mal Müdürlüğü'dür; davanın hangi adliyede görüleceği ise uyuşmazlığın türüne ve yetki kurallarına göre belirlenir. Ulaşım için metro hattı, M11 ve TEM otoyolu bağlantıları kullanılabilir.",
    ],
    faqs: [
      { question: "Arnavutköy'de avukatla ilk görüşme nasıl planlanır?", answer: "WhatsApp veya telefonla ulaşılarak konu kısaca aktarılır ve uygun bir gün belirlenir. Görüşmede olay özeti ile belgeler incelenir, izlenecek yol ve dikkat edilmesi gereken süreler anlatılır. Görüşme yüz yüze ya da çevrim içi yapılabilir; danışmanlık ücret karşılığıdır." },
      { question: "Arnavutköy Mal Müdürlüğü kaynaklı vergi uyuşmazlıklarında destek alınabilir mi?", answer: "Evet, Arnavutköy Mal Müdürlüğü'nce düzenlenen tarhiyat, vergi cezası ve ödeme emirlerine karşı itiraz, uzlaşma ve vergi mahkemesinde iptal davası açma konularında hukuki destek verilir. Vergi mahkemesinde dava açma süresi ihbarnamenin tebliğinden itibaren 30 gündür; bu yüzden tebliğ evrakı hemen saklanmalıdır." },
      { question: "Yeni konut projesinden daire alırken hangi uyuşmazlıklar çıkabilir?", answer: "En sık sorunlar teslim gecikmesi, ayıplı teslim, tapu devrinin yapılmaması ve sözleşme şartlarının sonradan değiştirilmesidir. Taşınmaz satış vaadi sözleşmesinin geçerli olması için noterde düzenlenmesi gerekir (TBK m.237). Sözleşme, ödeme dekontları ve yazışmalar incelenerek izlenecek yol belirlenir." },
      { question: "Büro Arnavutköy'de değilse hizmet nasıl alınır?", answer: "Büro Beşiktaş/Sinanpaşa'da olup Arnavutköy'deki müvekkillerle telefon, WhatsApp ve görüntülü görüşme üzerinden çalışılır. Gerekli evrak elektronik ortamda iletilebilir; duruşma ve adliye işlemleri avukat tarafından yürütüldüğünden müvekkilin her aşamada şehir içine gelmesi gerekmeyebilir, ancak vekalet ve bazı belgeler için noter veya adliye ziyareti gerekebilir." },
      { question: "Hangi hukuk alanlarında hizmet verilmektedir?", answer: "Hizmet sekiz alanı kapsar: ceza ve aile davaları, taşınmaz ve kira uyuşmazlıkları, işçilik alacakları, icra takibi, idari davalar, vergi itirazları ile sözleşme ve tazminat talepleri. Her dosya ayrı değerlendirilir; başvurulacak yargı yolu, süreler ve gerekli belgeler ilk görüşmede açıklanır." },
    ],
    howToTitle: "Arnavutköy'de Avukatla Çalışmaya Nasıl Başlanır?",
    howToSteps: [
      { name: "Mesaj veya Arama", text: "WhatsApp ya da telefonla konunun özeti paylaşılır ve görüşme günü kararlaştırılır." },
      { name: "Belgelerin Değerlendirilmesi", text: "Sözleşme, tapu kaydı, tebligat veya ihbarname gibi evraklar görüşmede incelenir." },
      { name: "Yol Haritasının Belirlenmesi", text: "Başvurulacak merci, süreler ve olası masraflar açıklanır; müvekkil karar verir." },
      { name: "Vekalet ve Takip", text: "Vekaletname düzenlenir, işlemler yürütülür ve dosyadaki gelişmeler müvekkille paylaşılır." },
    ],
    crosslinkLabel: "Arnavutköy Avukat (Genel)",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "kidem-tazminati-hesaplama-2026", "icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "arnavutkoy-bosanma-avukati",
    name: "Arnavutköy Boşanma Avukatı",
    heroTitle: "Arnavutköy Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma davalarında velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; davalar İstanbul Gaziosmanpaşa Adliyesi'nde görülür.",
    metaTitle: "Arnavutköy Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Arnavutköy'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Aile hukuku alanında Arnavutköy'deki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlar.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Nafaka", description: "Tedbir, yoksulluk ve iştirak nafakası süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Katılma alacağı kapsamında mal rejimi tasfiyesi talepleri",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Arnavutköy'ün hızlı nüfus artışı ve yeni yerleşen ailelerin yoğunluğu, boşanma davalarında velayet ve nafaka taleplerinin de artan bir öneme sahip olmasına yol açmaktadır.",
      "İlçede açılan boşanma, velayet ve nafaka davalarına İstanbul Gaziosmanpaşa Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Boşanma davası, İstanbul Gaziosmanpaşa Adliyesi'ndeki aile mahkemesinde açılır; Arnavutköy'de açılan boşanma, velayet ve nafaka davalarına bu adliyedeki aile mahkemeleri bakar. Yetki, TMK m. 168 uyarınca eşlerden birinin yerleşim yeri veya davadan önce son altı ay birlikte oturdukları yer esas alınarak belirlenir." },
      { question: "Yeni taşınan çiftler nerede dava açabilir?", answer: "Yeni taşınan çiftler, son altı aydır birlikte oturdukları yer mahkemesinde veya taraflardan birinin yerleşim yeri mahkemesinde dava açabilir (TMK m. 168). Arnavutköy'de yeni yerleşen ailelerin yoğun olduğu bu ilçede dava, Gaziosmanpaşa Adliyesi'ndeki aile mahkemesinde görülür; yetkili mahkeme dosyadaki yerleşim bilgilerine göre ayrıca teyit edilir." },
      { question: "Mal rejimi tasfiyesinde yeni edinilen konut nasıl değerlendirilir?", answer: "Yeni edinilen konut edinilmiş mal sayılırsa katılma alacağı hesabına dahil edilir. Mal rejimi tasfiyesinde konutun edinme tarihi, edinme kaynağı ve ödeme belgeleri incelenir. Bu nedenle tapu kaydı, banka dekontları ve sözleşme gibi belgeler dosyada önem taşır; sonuç her dosyada ayrıca değerlendirilir." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Çocuk belirli bir olgunluğa ulaşmışsa velayet düzenlemesinde görüşü dikkate alınabilir; ancak karar çocuğun yararı gözetilerek mahkemece verilir. Velayet tesisi ve sonradan velayet değişikliği taleplerinde çocuğun yaşı, olgunluğu ve ihtiyaçları birlikte değerlendirilir. Görüşün ne ölçüde esas alınacağı mahkemenin değerlendirmesine bağlıdır." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Nafaka miktarı, tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilerek belirlenir; mahkeme her dosyada somut koşullara bakar. Koşullar sonradan değişirse nafakanın artırılması, azaltılması veya kaldırılması için ayrı dava açılabilir. Bu nedenle gelir, gider ve ihtiyaçları gösteren belgelerin dosyaya sunulması önem taşır." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir. Boşanma davası açıldıktan sonra eşler barışırsa davadan vazgeçilebilir ve süreç sonlandırılabilir. Dava geri çekilmezse çekişmeli süreçte delillerin sağlam olması, anlaşmalı süreçte ise protokolün tam olması sonucu belirler; durum her dosyada ayrıca değerlendirilir." },
    ],
    howToTitle: "Arnavutköy'de Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "İhtiyaç Analizi", text: "Velayet, nafaka ve mal rejimi talepleri belirlenir." },
      { name: "Dilekçe Hazırlığı", text: "Duruma uygun dava dilekçesi veya protokol yazılır." },
      { name: "Dava Açılışı", text: "Yetkili aile mahkemesine başvurulur." },
      { name: "Sonuç", text: "Duruşma sonrası karar açıklanır." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "bosanmada-nafaka-turleri"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "arnavutkoy-ceza-avukati",
    name: "Arnavutköy Ceza Avukatı",
    heroTitle: "Arnavutköy Ceza Avukatı",
    heroSubtitle:
      "Arnavutköy'de ceza yargılamasının kovuşturma aşamasına İstanbul Gaziosmanpaşa Adliyesi'nde bakılır; gözaltı ve ifade alma anından itibaren müdafilik desteği sağlanır.",
    metaTitle: "Arnavutköy Ceza Avukatı | Müdafilik",
    metaDescription:
      "Arnavutköy'de soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Soruşturmadan kovuşturmaya, oradan kanun yollarına kadar ceza yargılamasının her evresinde Arnavutköy'deki müvekkillere müdafilik hizmeti veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Kanun Yolları", description: "İstinaf ve temyiz süreçlerinin yürütülmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Kanun yollarına başvuru dilekçelerinin düzenlenmesi",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "Kolluk müdahalesi gerektiren olaylara ilişkin dosyaların kovuşturma aşaması İstanbul Gaziosmanpaşa Adliyesi'nde görülmektedir. Arnavutköy'de bu tür başvuruların sayısı, İstanbul Havalimanı'nın yakın çevresindeki yoğun inşaat ve lojistik faaliyetle birlikte hızlanan nüfus artışına paralel olarak artış gösterebilmektedir.",
      "Şüphelinin müdafi ile görüşme hakkı, gözaltına alınmasıyla birlikte doğar; bu hakkın zamanında kullanılması sürecin sonraki aşamalarını doğrudan etkiler.",
    ],
    faqs: [
      { question: "Arnavutköy'de bir ceza davası hangi adliyede görülür?", answer: "Arnavutköy'de bir ceza davasının kovuşturma aşaması İstanbul Gaziosmanpaşa Adliyesi'nde görülür. Soruşturma aşamasında ise dosyanın hangi savcılık ve hakimlik nezdinde yürütüleceği olayın niteliğine ve yetki kurallarına göre belirlenir. Bu nedenle gözaltı veya soruşturma durumunda yetkili birimin her dosyada ayrıca netleştirilmesi gerekir." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Evet, ifade müdafi bulunmadan alınabilir; ancak şüpheli ve sanığın soruşturmanın her aşamasında müdafiden yararlanma hakkı vardır (CMK m. 149). Müdafi ile görüşme hakkı gözaltına alınmasıyla birlikte doğar ve zamanında kullanılması sürecin sonraki aşamalarını doğrudan etkiler; bu nedenle müdafi bulundurulması önerilir." },
      { question: "Tutukluluk süresi uzatılabilir mi?", answer: "Evet, tutukluluk süresi kanunda öngörülen azami süreler dahilinde uzatılabilir. Tutukluluk hali, tutuklama kararına karşı itiraz ve tutukluluğun incelenmesi yoluyla değerlendirilir (CMK m. 100/101). Tutuklama kararına itiraz süresi yedi gündür; itiraz dilekçesi tutukluluğa ilişkin dosya incelenerek hazırlanır." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, kovuşturmaya yer olmadığı kararına karşı sulh ceza hakimliğine itiraz edilebilir; itiraz süresi tebliğden itibaren 15 gündür (CMK m. 173). Süre tebliğ tarihinden işlediği için tebligatın tarihi önem taşır. İtiraz için soruşturma dosyası ve kararın gerekçesi incelenir." },
      { question: "Temyiz kanun yoluna hangi kararlar için başvurulur?", answer: "Temyiz kanun yoluna, kanunda sayılan ağır suçlara ilişkin kararlar için başvurulabilir. Kanun yollarına başvuru dilekçeleri, kararın niteliği ve ilgili mahkeme dikkate alınarak düzenlenir. Hangi kararın hangi kanun yoluna tabi olduğu ve başvuru süresi karar metni incelenerek belirlenir; bu yüzden kararın tebliğ tarihi önem taşır." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Uzlaşma sağlanamazsa yargılamaya kaldığı yerden devam edilir. Uzlaşma sürecinde taraflar bir araya getirilir; anlaşma olmazsa soruşturma veya kovuşturma olağan yoluyla sürer. Bu nedenle uzlaşma teklifinin kapsamı değerlendirilirken yargılamanın devam edeceği de dikkate alınmalı, dosyadaki gelişmeler takip edilmelidir." },
    ],
    howToTitle: "Arnavutköy'de Ceza Yargılaması Nasıl İlerler?",
    howToSteps: [
      { name: "Olay Bildirimi", text: "Şikayet, ihbar veya resen harekete geçilir." },
      { name: "Soruşturma Aşaması", text: "Deliller toplanır, ifadeler alınır." },
      { name: "Dava Açılması", text: "İddianamenin kabulüyle kovuşturma başlar." },
      { name: "Temyiz/İstinaf", text: "Karara karşı üst yargı yoluna gidilebilir." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "arnavutkoy-gayrimenkul-avukati",
    name: "Arnavutköy Gayrimenkul Avukatı",
    heroTitle: "Arnavutköy Gayrimenkul Avukatı",
    heroSubtitle:
      "Tarım arazisinden imara açılan taşınmazlar, tapu uyuşmazlıkları ve kira ilişkilerinde hukuki destek sağlanır; davalar İstanbul Gaziosmanpaşa Adliyesi'nde görülür.",
    metaTitle: "Arnavutköy Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Arnavutköy'de tapu iptali, imar değişikliği ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Tapu, imar ve kira uyuşmazlıklarında Arnavutköy'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İmar Değişikliği", description: "Tarım arazisinden imara açılan taşınmazlara ilişkin süreçler." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Yeni Konut Projeleri", description: "Kat mülkiyeti ve teslim uyuşmazlıkları." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İmar durumu değişen taşınmazlara ilişkin hukuki danışmanlık",
      "Tapu iptali ve tescil davalarının açılması",
      "Yeni konut projelerinde kat mülkiyeti ve teslim uyuşmazlıkları",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
      "Ortaklığın giderilmesi (izale-i şüyu) davaları",
    ],
    localParagraphs: [
      "Tarım arazilerinin hızla imara açıldığı Arnavutköy'de tapu kaydı ile fiili arazi kullanımı arasındaki uyumsuzluklar ve yeni konut projelerinde teslim gecikmesi kaynaklı uyuşmazlıklar sık gündeme gelmektedir; bu uyuşmazlıklar İstanbul Gaziosmanpaşa Adliyesi'ndeki sulh hukuk ve asliye hukuk mahkemelerinde görülür.",
      "İstanbul Havalimanı çevresindeki bölgelerde arsa niteliğindeki taşınmazlara ilişkin tapu ve kamulaştırma kaynaklı uyuşmazlıklar da zaman zaman gündeme gelmektedir.",
    ],
    faqs: [
      { question: "Tarım arazisi imara açıldığında tapuda ne değişir?", answer: "İmar planı değişikliği sonrası tapu kaydındaki nitelik güncellenir; bu süreç idari başvuru gerektirebilir. Tarım arazilerinin hızla imara açıldığı Arnavutköy'de tapu kaydı ile fiili arazi kullanımı arasında uyumsuzluklar ortaya çıkabilir. Bu nedenle imar durumu ve tapu kaydı birlikte incelenerek gerekli başvuruların yapılması önemlidir." },
      { question: "Arnavutköy'de gayrimenkul davası hangi mahkemede görülür?", answer: "Gayrimenkul davası, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde görülür; Arnavutköy'deki bu davalar İstanbul Gaziosmanpaşa Adliyesi bünyesindeki mahkemelerde yürütülür. Kural olarak taşınmazın bulunduğu yer mahkemesi yetkilidir. Görevli mahkeme, talebin niteliğine göre dosyada ayrıca belirlenir." },
      { question: "Yeni konut projesinde teslim gecikirse ne yapılabilir?", answer: "Yeni konut projesinde teslim gecikirse sözleşmede öngörülen gecikme cezası talep edilebilir, gerekirse sözleşmeden dönme hakkı kullanılabilir. Teslim gecikmesi kaynaklı uyuşmazlıklar ilçede gündeme gelmektedir. Sözleşme, ödeme dekontları ve yazışmalar incelenerek hangi hakkın kullanılacağı belirlenir; dava Gaziosmanpaşa Adliyesi'ndeki mahkemelerde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tapu iptali ve tescil davası açabilir. Dava, tapu kaydının hukuka aykırı oluştuğu iddiasına dayanır; tapu kaydı, sözleşme ve ilgili belgeler incelenerek hazırlanır. Arnavutköy'deki taşınmaz davaları Gaziosmanpaşa Adliyesi'ndeki sulh hukuk ve asliye hukuk mahkemelerinde görülür." },
      { question: "Arsa niteliğindeki taşınmaz alımında nelere dikkat edilmeli?", answer: "Arsa niteliğindeki taşınmaz alımında imar durumu, kadastro kaydı ve varsa kamulaştırma şerhinin incelenmesi önerilir. İstanbul Havalimanı çevresindeki bölgelerde arsa niteliğindeki taşınmazlara ilişkin tapu ve kamulaştırma kaynaklı uyuşmazlıklar gündeme gelebildiğinden bu kayıtların satın almadan önce kontrol edilmesi gerekir." },
    ],
    howToTitle: "Arnavutköy'de Tapu İptali Süreci Nasıl İlerler?",
    howToSteps: [
      { name: "Kayıt İncelemesi", text: "Taşınmazın tapu kaydı, imar durumu ve varsa şerhler incelenir." },
      { name: "Dayanağın Belirlenmesi", text: "İptal talebinin hukuki gerekçesi netleştirilir." },
      { name: "Dilekçe Hazırlığı", text: "Talep ve deliller dilekçeye işlenir." },
      { name: "Yargılama", text: "Bilirkişi incelemesi sonrası mahkeme karar verir." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "arnavutkoy-icra-avukati",
    name: "Arnavutköy İcra Avukatı",
    heroTitle: "Arnavutköy İcra Avukatı",
    heroSubtitle:
      "Alacak tahsili amacıyla icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır; icra mahkemeleri İstanbul Gaziosmanpaşa Adliyesi'ndedir.",
    metaTitle: "Arnavutköy İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Arnavutköy'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İcra ve iflas hukuku kapsamında Arnavutköy'deki alacaklı ve borçlu taraflara danışmanlık verir.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İnşaat ve tedarik ilişkilerinden doğan alacaklar için icra takibi başlatılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "İhaleye katılım ve ihalenin feshi talepleri",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "İstanbul Havalimanı çevresindeki inşaat ve lojistik sektörü işletmeleri arasındaki ticari alacaklar, Arnavutköy'de icra takiplerinin sık başvurulan bir yol olmasına yol açmaktadır; bu takiplere ilişkin uyuşmazlıklar İstanbul Gaziosmanpaşa Adliyesi'ndeki icra mahkemelerinde görülür.",
      "Borçlunun Arnavutköy'de yerleşik olduğu takiplerde yetkili icra dairesi, kural olarak borçlunun ikametgahı veya sözleşmede belirlenen yer esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "İcra takibine sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlanabilir. İlamsız takipte doğrudan icra dairesine başvurulur, mahkeme kararı gerekmez. Borçlu Arnavutköy'de yerleşikse yetkili icra dairesi kural olarak borçlunun ikametgahı veya sözleşmede belirlenen yer esas alınarak tespit edilir; alacağı gösteren belgelerin eksiksiz sunulması önemlidir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Ödeme emrine itiraz süresi, tebliğden itibaren 7 gündür (İİK m. 62). Süre tebligat tarihinden işlemeye başladığı için ödeme emrinin tebliğ tarihi dikkatle kontrol edilmelidir. Süresinde itiraz edilmezse takip ilerleyebilir; itiraz edilirse alacaklı itirazın iptali veya kaldırılması yoluna başvurabilir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Haciz işlemi, kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir. Haciz, ödeme emrine süresinde itiraz edilmemesi veya itirazın kaldırılması gibi hallerde borçlunun mallarına uygulanır. Taşınmaz ve taşınır mal üzerinde haciz uygulanması ile satış işlemleri icra dairesi aracılığıyla yürütülür ve takip edilir." },
      { question: "İtirazın iptali davası açma süresi var mı?", answer: "Evet, itirazın iptali davası, itirazın tebliğinden itibaren bir yıl içinde açılmalıdır. Alacaklı, itiraz edilen takibi sürdürmek için bu davayı açabilir; alacak belgeye dayanıyorsa itirazın kaldırılması da istenebilir. Süre kaçırılmaması için itirazın tebliğ tarihi kontrol edilmeli ve dava dilekçesi sözleşme, fatura gibi belgelerle hazırlanmalıdır." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Borçlu ödeme yapmazsa haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür. Takibin bu aşamaya ilerleyebilmesi için ödeme emrine itiraz edilmemiş veya itirazın ortadan kaldırılmış olması gerekir. Taşınmaz ve taşınır mal üzerinde haciz uygulanır, ardından satış yapılarak alacak tahsil edilir." },
    ],
    howToTitle: "Arnavutköy'de İcra Takibi Hangi Aşamalardan Oluşur?",
    howToSteps: [
      { name: "Belge Derlemesi", text: "Alacağa dayanak oluşturan belgeler toplanır." },
      { name: "İcra Dairesine Başvuru", text: "Yetkili icra dairesinde takip dosyası açılır." },
      { name: "Tebligat Aşaması", text: "Borçluya ödeme emri gönderilir." },
      { name: "Haciz/Tahsilat", text: "Süreç sonunda haciz ve tahsilat işlemleri yürütülür." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "arnavutkoy-idare-avukati",
    name: "Arnavutköy İdare Avukatı",
    heroTitle: "Arnavutköy İdare Avukatı",
    heroSubtitle:
      "Belediye, imar ve kamulaştırma işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Arnavutköy İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Arnavutköy'de idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. İdari işlemlerin iptali ve tam yargı davalarında Arnavutköy'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "İmar Planı Değişiklikleri", description: "Tarım arazisinden imara açılan bölgelere ilişkin uyuşmazlıklar." },
      { title: "Kamulaştırma", description: "Havalimanı ve altyapı projelerine bağlı kamulaştırma bedeli uyuşmazlıkları." },
      { title: "Belediye İşlemleri", description: "Ruhsat ve idari para cezalarına ilişkin uyuşmazlıklar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kamulaştırma bedeli uyuşmazlıklarında hukuki destek",
      "İmar planı değişikliklerine karşı iptal davası açılması",
      "Belediye ruhsat işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "İstanbul Havalimanı ve çevresindeki büyük altyapı projeleri nedeniyle Arnavutköy'de kamulaştırma bedeline itiraz ve imar planı değişikliklerine karşı açılan davalar diğer ilçelere kıyasla daha sık gündeme gelmektedir; bu davalar İstanbul idare mahkemelerinde görülür.",
      "Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür; hızla değişen imar planları nedeniyle bu sürenin takibi ayrı bir önem taşımaktadır.",
    ],
    faqs: [
      { question: "Kamulaştırma bedeli nasıl belirlenir?", answer: "Kamulaştırma bedeli, bilirkişi incelemesiyle taşınmazın güncel değeri esas alınarak hesaplanır. Arnavutköy'de İstanbul Havalimanı ve çevresindeki büyük altyapı projeleri nedeniyle kamulaştırma bedeline itiraz uyuşmazlıkları gündeme gelmektedir. Bedelin yeterli olup olmadığı tapu kaydı, imar durumu ve bilirkişi raporu üzerinden değerlendirilir." },
      { question: "Bedele itiraz nereye yapılır?", answer: "Bedel tespitine karşı asliye hukuk mahkemesine, idari işlemin kendisine karşı ise idare mahkemesine başvurulur. Yani bedele itiraz ile kamulaştırma işleminin iptali farklı yargı yollarına tabidir. İdari işlem için iptal davası genel kural olarak tebliğden itibaren 60 gün içinde açılmalıdır (İYUK m. 7)." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İmar planı ilan edildikten sonra, ilan tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılmalıdır. Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m. 7); plan ilanında sürenin başlangıcı ayrıca incelenmelidir. Hızla değişen imar planları nedeniyle bu sürenin takibi ayrı bir önem taşır." },
      { question: "Havalimanı projesi nedeniyle mağduriyet oluşursa ne yapılabilir?", answer: "Havalimanı projesi nedeniyle mağduriyet oluşursa tam yargı davası yoluyla zararın tazmini talep edilebilir. İdarenin işlem veya eyleminden kaynaklanan zararlar için tazminat istenir. İstanbul Havalimanı ve çevresindeki büyük altyapı projeleri nedeniyle bu tür uyuşmazlıklar gündeme gelmektedir; dava İstanbul idare mahkemelerinde görülür ve zararı gösteren belgeler hazırlanır." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ruhsat başvurusu reddedilirse ret kararına karşı idare mahkemesinde iptal davası açılabilir. Belediye ruhsat işlemlerine itiraz edilmesi bu kapsamdadır. Dava süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m. 7); bu nedenle ret kararının tebliğ tarihi saklanmalı ve süre takip edilmelidir." },
    ],
    howToTitle: "Arnavutköy'de İdari İptal Davası Nasıl Açılır?",
    howToSteps: [
      { name: "İnceleme", text: "İptali istenen işlem ve ilan/tebliğ tarihi belirlenir." },
      { name: "Süre Takibi", text: "60 günlük yasal süre hesaplanır." },
      { name: "Dilekçe Hazırlığı", text: "Talep ve gerekçeler dilekçeye işlenir." },
      { name: "Yargılama", text: "İdare mahkemesi dosyayı inceleyip karar verir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "arnavutkoy-is-hukuku-avukati",
    name: "Arnavutköy İş Hukuku Avukatı",
    heroTitle: "Arnavutköy İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul Gaziosmanpaşa Adliyesi bünyesindedir.",
    metaTitle: "Arnavutköy İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Arnavutköy'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Arnavutköy'deki işçi ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Havalimanı/İnşaat Sektörü", description: "Havalimanı ve inşaat projelerinde çalışanların uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Fazla mesai, hafta tatili ve yıllık izin alacaklarının tahsili",
      "Mobbing iddialarına ilişkin hukuki süreçler",
      "İş sözleşmesi ve ibraname metinlerinin düzenlenmesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "İstanbul Havalimanı ve çevresindeki inşaat, lojistik ve hizmet sektörü işletmeleri, Arnavutköy'de önemli bir istihdam alanı oluşturmaktadır. Bu sektörlerdeki iş sözleşmesi uyuşmazlıkları da diğer iş davaları gibi önce zorunlu arabuluculuk sürecinden geçer.",
      "Anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Gaziosmanpaşa Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "İnşaat sektöründe işçi hakları farklı mı?", answer: "Temel işçi hakları inşaat sektöründe de aynıdır; ancak proje süresine bağlı belirli süreli sözleşmeler daha sık görülür. Arnavutköy'de inşaat, lojistik ve hizmet sektörü önemli bir istihdam alanıdır. Belirli süreli sözleşmelerde sözleşme süresi, fesih nedeni ve fazla mesai, yıllık izin gibi alacak kalemleri ayrıca incelenir." },
      { question: "Şantiye çalışanı iş kazası geçirirse ne yapılmalı?", answer: "Şantiye çalışanı iş kazası geçirirse olay derhal SGK'ya bildirilmeli, tedavi ve tazminat süreci başlatılmalıdır. İş kazasından doğan tazminat taleplerinin takibi için kaza tutanağı, sağlık raporları ve tanık bilgileri gibi belgeler saklanmalıdır. Talebin hukuki dayanağı ve izlenecek yol dosyadaki belgelere göre belirlenir." },
      { question: "Arnavutköy'de iş mahkemesi nerededir?", answer: "Arnavutköy'deki iş davaları İstanbul Gaziosmanpaşa Adliyesi bünyesindeki iş mahkemelerinde görülür. Anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları bu mahkemelerde açılır; çünkü iş sözleşmesi uyuşmazlıkları önce zorunlu arabuluculuk sürecinden geçer. İşe iade için fesihten itibaren bir ay içinde arabulucuya başvurulur." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "İşe iade sürecinin toplam süresi dosyaya göre değişebilir; bu nedenle belirli bir gün sayısı söylenemez. Süreç önce zorunlu arabuluculukla başlar ve fesihten itibaren bir ay içinde başvurulur. Anlaşma olmazsa son tutanaktan itibaren iki hafta içinde iş mahkemesinde dava açılır; işe iade şartları İş Kanunu m. 18'e göre aranır." },
      { question: "Mevsimlik işçilerin kıdem tazminatı hakkı var mı?", answer: "Mevsimlik işçilerin kıdem tazminatı hakkı, çalışma süresi ve niteliğine göre değerlendirilir; şartları taşıması halinde hak doğabilir. Belirli süreli sözleşmelerde sözleşme süresi, fesih nedeni ve çalışma süresi birlikte incelenir. Bu nedenle iş sözleşmesi, bordro ve sigorta kayıtlarının dosyada bulunması önem taşır." },
    ],
    howToTitle: "Arnavutköy'de İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Fesih Değerlendirmesi", text: "İşten çıkarma gerekçesi ve usulü incelenir." },
      { name: "Arabulucuya Başvuru", text: "Yasal süre içinde arabuluculuk sürecine başlanır." },
      { name: "Dava Süreci", text: "Anlaşma olmazsa iş mahkemesinde dava açılır." },
      { name: "Sonuç", text: "Mahkeme kararı doğrultusunda işlem yapılır." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "ise-iade-davasi"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "arnavutkoy-kira-tahliye-avukati",
    name: "Arnavutköy Kira ve Tahliye Avukatı",
    heroTitle: "Arnavutköy Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Arnavutköy'de tahliye taleplerinde, kira bedelinin belirlenmesinde ve kira sözleşmesinden doğan uyuşmazlıklarda hukuki destek sağlanır; bu davalara sulh hukuk mahkemeleri İstanbul Gaziosmanpaşa Adliyesi bünyesinde bakar.",
    metaTitle: "Arnavutköy Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Arnavutköy'de kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur. Kira hukuku alanında Arnavutköy'deki kiraya verenlere ve kiracılara danışmanlık hizmeti sunmaktadır.",
    highlightCards: [
      { title: "Yeni Konut Kiraları", description: "Hızla büyüyen bölgede kira ilişkisi kurulması ve denetimi." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Yeni konut projelerinde kira sözleşmelerinin hazırlanması",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Arnavutköy'de kira ilişkileri, hızla artan konut arzı ve yeni yerleşen nüfusla birlikte giderek daha yoğun biçimde kurulmaktadır; bu tür uyuşmazlıklarda görevli mahkeme, taşınmazın bulunduğu yerdeki sulh hukuk mahkemesidir.",
      "Söz konusu sulh hukuk mahkemeleri, İstanbul Gaziosmanpaşa Adliyesi bünyesinde faaliyet göstermektedir. Ayrıca yeni teslim edilen projelerde, kira sözleşmesiyle teslim tutanağı arasındaki uyumun kontrol edilmesi ayrı bir önem taşımaktadır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kiracı; kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye edilebilir. Kira borcunda konutlarda 30 günlük süre verilerek ihtar çekilir (TBK m. 315); taahhütname geçerliyse icra yoluyla, ihtiyaç halinde ise dava yoluyla tahliye talep edilir. Her yöntemin şartları dosyadaki belgelere göre ayrıca incelenir." },
      { question: "Arnavutköy'de tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir. Süre; tahliye sebebine, tebligatların tamamlanmasına ve delillerin toplanmasına bağlıdır. Arnavutköy'de bu davalar taşınmazın bulunduğu yer sulh hukuk mahkemesinde, Gaziosmanpaşa Adliyesi bünyesinde görülür." },
      { question: "Yeni teslim edilen bir konutta kira sözleşmesi ne zaman yapılmalı?", answer: "Yeni teslim edilen bir konutta kira sözleşmesinin, teslim tutanağı düzenlendikten ve taşınmazın kullanıma hazır olduğu teyit edildikten sonra yapılması önerilir. Yeni teslim edilen projelerde kira sözleşmesiyle teslim tutanağı arasındaki uyumun kontrol edilmesi önem taşır; böylece bedel, süre ve taşınmazın durumu belgelenmiş olur." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Rayiç bedel tespiti, mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Kira bedelinin tespiti ve uyarlanması için dava açılır; mahkeme taşınmazın rayiç kira bedelini değerlendirir. Başvuru sözleşme ve mevcut bedel belgeleriyle yapılır; görevli mahkeme taşınmazın bulunduğu yer sulh hukuk mahkemesidir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir; mahkemeye gitmek gerekmeyebilir. Taahhütnamenin geçerliliği ve içeriği önce incelenir. Taahhüde dayalı icra yoluyla tahliye işlemleri icra dairesinde yürütülür; taahhütname geçerli değilse tahliye dava yoluyla istenir." },
    ],
    howToTitle: "Arnavutköy'de Kiracı Tahliye Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Sebebin Belirlenmesi", text: "Tahliyeye dayanak olacak durum netleştirilir." },
      { name: "Belge Toplama", text: "İhtarname, sözleşme veya taahhütname bir araya getirilir." },
      { name: "Başvuru", text: "Duruma göre sulh hukuk mahkemesi veya icra dairesine başvurulur." },
      { name: "Tahliye", text: "Kesinleşen karar veya emirle taşınmaz teslim alınır." },
    ],
    crosslinkLabel: "Kira ve Tahliye Avukatı",
    relatedPostSlugs: ["kiracinin-tahliye-sureci", "kira-bedeli-tespit-ve-uyarlama-davasi"],
  },

  // ─────────────────────────── VERGİ ───────────────────────────
  {
    slug: "vergi",
    urlSlug: "arnavutkoy-vergi-avukati",
    name: "Arnavutköy Vergi Avukatı",
    heroTitle: "Arnavutköy Vergi Avukatı",
    heroSubtitle:
      "Vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Arnavutköy Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Arnavutköy'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Arnavutköy'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "İnşaat Sektörü", description: "Yapı ve arsa satışlarına ilişkin vergi uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Vergi incelemesi sürecinde danışmanlık",
      "Arsa ve yapı satışlarına ilişkin vergi uyuşmazlıkları",
    ],
    localParagraphs: [
      "Arnavutköy'de mükellefiyeti bulunanların vergisel işlemleri Arnavutköy Mal Müdürlüğü tarafından yürütülür; bu daireye ait tarhiyat ve ceza kararlarına karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir.",
      "Hızla artan arsa ve konut satışları nedeniyle değer artış kazancı ve tapu harcı kaynaklı vergi uyuşmazlıkları ilçede sık gündeme gelmektedir.",
    ],
    faqs: [
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "İhbarnameye karşı tebliğden itibaren 30 gün içinde vergi mahkemesinde dava açılabilir (İYUK m. 7). Bu süre tebligat tarihinden başladığı için ihbarname evrakı saklanmalıdır. Uzlaşma başvurusu da tebliğden itibaren 30 gün içinde yapılabilir (VUK Ek m. 1); vergi ve ceza ihbarnamesi için süreler birlikte takip edilmelidir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "Arnavutköy Mal Müdürlüğü'ne ait tarhiyat ve ceza kararlarına karşı açılan davalar İstanbul vergi mahkemelerinde görülür. Arnavutköy'de mükellefiyeti bulunanların vergisel işlemleri bu daire tarafından yürütülür. Dava açma süresi ihbarnamenin tebliğinden itibaren 30 gündür (İYUK m. 7); dava dilekçesi vergi mahkemesine verilir." },
      { question: "Arsa satışında değer artış kazancı nasıl hesaplanır?", answer: "Arsa satışında değer artış kazancı, alım ve satım bedelleri arasındaki fark esas alınarak kanunda öngörülen usule göre vergilendirilir. Hızla artan arsa ve konut satışları nedeniyle değer artış kazancı ve tapu harcı kaynaklı vergi uyuşmazlıkları gündeme gelmektedir. Hesaplamada kullanılan belgelerin ve ihbarnamenin incelenmesi, itiraz veya dava için önemlidir." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma başvurusu dava hakkını ortadan kaldırmaz; uzlaşma sağlanamazsa kalan dava açma süresi korunur. Uzlaşma başvurusu tebliğden itibaren 30 gün içinde yapılır (VUK Ek m. 1), dava süresi ise 30 gündür (İYUK m. 7). Bu nedenle uzlaşma görüşmelerinde sürelerin birlikte takip edilmesi gerekir." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Ödeme emrine karşı vergi mahkemesinde dava açılabilir; süre ödeme emrinin tebliğ tarihinden başlar ve ihbarnamelerdeki 30 günlük süreden farklı olabileceği için tebliğ evrakı hemen kontrol edilmelidir. Vergi ve ceza ihbarnamelerinde dava süresi 30 gündür (İYUK m. 7). Ödeme emrine karşı dava açılması hizmet kapsamındadır." },
    ],
    howToTitle: "Arnavutköy'de Vergi İtirazı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "İnceleme", text: "Tarhiyat veya cezanın dayanağı ayrıntılı incelenir." },
      { name: "Yol Seçimi", text: "Uzlaşma mı yoksa doğrudan dava mı açılacağı kararlaştırılır." },
      { name: "Başvuru", text: "Süresi içinde vergi mahkemesine başvurulur veya uzlaşma istenir." },
      { name: "Sonuçlanma", text: "Mahkeme kararı veya uzlaşma tutanağıyla süreç biter." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "arnavutkoy-borclar-hukuku-avukati",
    name: "Arnavutköy Borçlar Hukuku Avukatı",
    heroTitle: "Arnavutköy Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Arnavutköy'de sözleşmeden doğan uyuşmazlıklar, alacak talepleri ve tazminat davaları bakımından hukuki temsil sağlanmaktadır; bu davalara bakan ticaret ve asliye hukuk mahkemeleri İstanbul Gaziosmanpaşa Adliyesi bünyesinde yer almaktadır.",
    metaTitle: "Arnavutköy Borçlar Hukuku Avukatı",
    metaDescription:
      "Arnavutköy'de sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Borçlar hukuku kapsamında Arnavutköy'deki müvekkillere sözleşmeden ve alacaktan kaynaklanan uyuşmazlıklarda danışmanlık hizmeti veren Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur.",
    highlightCards: [
      { title: "Sözleşme Uyuşmazlıkları", description: "İfa, ihlal ve fesih kaynaklı süreçlerin yürütülmesi." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "İnşaat Sözleşmeleri", description: "Kat karşılığı inşaat ve yapım sözleşmesi uyuşmazlıkları." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sözleşmenin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Kat karşılığı inşaat sözleşmelerinden doğan uyuşmazlıklar",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Kat karşılığı inşaat sözleşmelerinden ve arsa payı devrinden kaynaklanan uyuşmazlıklar, Arnavutköy'de hızla artan inşaat faaliyetine bağlı olarak ilçede sıklıkla karşılaşılan bir dava türü haline gelmiştir. Niteliğine göre bu uyuşmazlıklara asliye hukuk veya ticaret mahkemesi bakmaktadır.",
      "Söz konusu davalar İstanbul Gaziosmanpaşa Adliyesi bünyesindeki mahkemelerde yürütülmektedir. Ticari nitelikteki bazı alacak uyuşmazlıklarında ise dava açılmadan önce arabulucuya başvurulması dava şartı olarak aranabilir.",
    ],
    faqs: [
      { question: "Kat karşılığı inşaat sözleşmesi nedir?", answer: "Kat karşılığı inşaat sözleşmesi, arsa sahibinin arsayı, müteahhidin ise yapım hizmetini karşılıklı edim olarak sunduğu bir sözleşme türüdür. Arnavutköy'de hızla artan inşaat faaliyetine bağlı olarak bu sözleşmelerden ve arsa payı devrinden kaynaklanan uyuşmazlıklar ortaya çıkabilir; ifa şartları ve teslim koşulları sözleşme metni üzerinden incelenir." },
      { question: "Müteahhit taahhüdünü yerine getirmezse ne yapılabilir?", answer: "Müteahhit taahhüdünü yerine getirmezse sözleşmeden dönme, tazminat veya ifa davası gibi hukuki yollara başvurulabilir. Hangi yolun seçileceği sözleşme şartlarına ve gecikme veya eksikliğin niteliğine göre belirlenir. Sözleşme metni, ödeme belgeleri ve yazışmalar incelenir; uyuşmazlığa niteliğine göre asliye hukuk veya ticaret mahkemesi bakar." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Ticari alacak davası, niteliğine göre asliye ticaret mahkemesinde, İstanbul Gaziosmanpaşa Adliyesi bünyesinde görülür. Kat karşılığı inşaat sözleşmeleri gibi uyuşmazlıklarda görevli mahkeme, dosyanın niteliğine göre asliye hukuk veya ticaret mahkemesidir. Ticari nitelikteki bazı alacak uyuşmazlıklarında dava açılmadan önce arabulucuya başvurulması da gerekebilir." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, dava öncesi arabuluculuk her zaman şart değildir; yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Bu nedenle uyuşmazlığın ticari nitelikte olup olmadığı önce belirlenir. Şart aranan hallerde arabulucuya başvurulmadan açılan dava usulden reddedilebilir." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Zamanaşımına uğramış alacak, borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir. Zamanaşımı mahkemece kendiliğinden dikkate alınmaz, borçlunun itirazı gerekir. Bu nedenle alacak ve ihtar sürelerinin kontrolü önemlidir; alacak davası ve icra takibi öncesinde zamanaşımı durumu belgelerle incelenmelidir." },
    ],
    howToTitle: "Arnavutköy'de Alacak Davası Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Delillerin Tespiti", text: "Sözleşme, fatura ve diğer belgelerle alacağın dayanağı ortaya konur." },
      { name: "Ön Koşullar", text: "Gerekiyorsa ihtarname çekilir veya arabuluculuğa başvurulur." },
      { name: "Dava Açılması", text: "Yetkili mahkemede alacak davası açılır." },
      { name: "İcra Aşaması", text: "Kararın kesinleşmesiyle gerekirse icra takibi başlatılır." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];

export const arnavutkoyServices: PseoService[] = [...arnavutkoyBaseServices, arnavutkoyMiras];
