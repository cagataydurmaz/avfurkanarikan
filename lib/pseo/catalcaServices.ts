import type { PseoService } from "./types";
import { catalcaMiras } from "./miras/catalcaMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const catalcaBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "catalca-avukat",
    name: "Çatalca Avukat",
    heroTitle: "Çatalca Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, yüzölçümü bakımından İstanbul'un en büyük ilçesi olan, orman ve mandıracılık kültürüyle tanınan Çatalca'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Büyükçekmece Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Çatalca Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Çatalca'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İstanbul'un yüzölçümü en büyük ilçesi olan, geniş orman alanları ile manda ve süt ürünleri üretimiyle tanınan Çatalca'da ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Tarım ve orman arazisi uyuşmazlıklarının takibi." },
      { title: "İş Hukuku", description: "İşçilik alacakları ve işe iade davalarında destek." },
      { title: "İcra Hukuku", description: "Alacak takibi ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "İdari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı ve cezası uyuşmazlıkları." },
      { title: "Borçlar Hukuku", description: "Sözleşme ve alacak kaynaklı davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Tarım ve orman arazisi ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "1.115 km² yüzölçümüyle İstanbul'un en büyük ilçesi olan ve şehrin yüzde 20'sini kaplayan Çatalca, geniş orman alanları, gölet çevresi ve manda/süt ürünleri üretimi geleneğiyle kırsal karakterini korumaktadır.",
      "İlçedeki hukuki uyuşmazlıklar İstanbul Büyükçekmece Adliyesi'nde, vergisel işlemler ise Büyükçekmece Vergi Dairesi Müdürlüğü'nün Çatalca dış veznesi nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Çatalca'daki davalara hangi adliye bakıyor?", answer: "Çatalca, İstanbul Büyükçekmece Adliyesi'nin yargı çevresinde yer almaktadır. Hukuki uyuşmazlıklar genel olarak bu adliyedeki ilgili mahkemelerde, idari ve vergi uyuşmazlıkları ise İstanbul idare ve vergi mahkemelerinde görülür. Büro Beşiktaş/Sinanpaşa'dadır, Çatalca ilçesinde değildir; ilçedeki müvekkillere de hizmet verilir." },
      { question: "Randevu nasıl alınır?", answer: "Randevu için WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir. İlk iletişimde konu kısaca paylaşılır, ardından danışmanlık görüşmesi planlanır. Görüşme tercihe göre yüz yüze veya çevrim içi yapılabilir; temsil kararı alınırsa vekalet düzenlenir ve belgeler derlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır. Örneğin boşanma ve velayet, tarım arazisi ve tapu uyuşmazlıkları, kira ve tahliye, işe iade ve kıdem tazminatı, icra itirazı, idari işlemlere karşı davalar ile vergi uyuşmazlıkları bu kapsamda değerlendirilir." },
      { question: "Büro Çatalca'da mı bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Çatalca'daki müvekkillere de aynı kapsamda hizmet verilir. Görüşmeler randevu esasına göre yüz yüze veya çevrim içi yapılabilir. Çatalca'daki dosyalar İstanbul Büyükçekmece Adliyesi'nde takip edilir; ilk iletişim WhatsApp veya telefonla kurulabilir, görüşme için büroya gelmek zorunlu değildir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Danışmanlık ücreti dosyanın niteliğine göre değişir ve randevu sırasında bilgi verilir. Danışmanlık görüşmesi ücret karşılığı yapılır. Temsil kararı alındığında vekalet ücreti davanın kapsamı, süreç ve yapılacak işlemlere göre belirlenir; kapsam vekalet düzenlenmeden önce müvekkille konuşularak netleştirilir." },
      { question: "Köy arazisi veya mandıra işletmesiyle ilgili destek alınabilir mi?", answer: "Evet, tarım veya orman arazisi ve tarımsal işletme uyuşmazlıklarında danışmanlık sağlanır. Köy arazisinde tapu ve kadastro kayıtları, miras yoluyla gelen payların paylaşımı ve mera veya orman sınırı sorunları incelenir. Mandıra işletmesine ilişkin alacak, sözleşme ve vergi konularında da hukuki destek verilir." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Görüşmeler tercihe göre yüz yüze veya çevrim içi olarak planlanabilir. Yüz yüze görüşme Beşiktaş/Sinanpaşa'daki büroda randevu ile yapılır; çevrim içi görüşmede belgeler dijital ortamda paylaşılabilir. Randevu WhatsApp veya telefon üzerinden alınır ve temsil kararı alınırsa vekalet düzenlenir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Acil gözaltı durumunda vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir. Gözaltının başladığı andan itibaren müdafi ile görüşme hakkı bulunur. Aranırken kişinin adı, tutulduğu yer ve olayın kısa özeti paylaşılırsa süreç daha hızlı değerlendirilebilir; ifade öncesi müdafi talep edilebilir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır. Temsil ve süreç takibi aşamasında duruşma tarihleri, mahkeme kararları ve yapılması gereken işlemler hakkında bilgi verilir. Görüşmeler WhatsApp, telefon veya çevrim içi yapılabilir; böylece müvekkil dosyanın durumunu yakından izleyebilir." },
      { question: "Büyükçekmece Adliyesi'ne Çatalca'dan ulaşım nasıl?", answer: "Çatalca'dan Büyükçekmece Adliyesi'ne E-5 karayolu bağlantısı üzerinden yaklaşık 45-70 dakikada ulaşılabilir. Süre günün saatine ve trafik yoğunluğuna göre değişir. Adliye ilçe dışında olduğundan duruşma günü için güzergah ve yolculuk süresi önceden planlanmalı, duruşma saatinden önce adliyede hazır bulunulmalıdır." },
    ],
    howToTitle: "Çatalca'da Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Çatalca Avukat (Genel)",
    relatedPostSlugs: ["ortakligin-giderilmesi-davasi", "tapu-iptali-ve-tescil-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "catalca-bosanma-avukati",
    name: "Çatalca Boşanma Avukatı",
    heroTitle: "Çatalca Boşanma Avukatı",
    heroSubtitle:
      "Çatalca'daki boşanma, velayet, nafaka ve mal paylaşımı davalarına İstanbul Büyükçekmece Adliyesi'ndeki aile mahkemelerinde bakılır; anlaşmalı ve çekişmeli süreçlerde temsil sağlanır.",
    metaTitle: "Çatalca Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Çatalca'da anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Aile hukuku kapsamında Çatalca'daki müvekkillere boşanma, velayet ve nafaka süreçlerinde temsil sağlayan Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Mandıra/Çiftlik Payı", description: "Aile işletmesi niteliğindeki mandıra veya çiftliğin mal rejiminde değerlendirilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Mandıra veya çiftlik işletmesinin mal rejimi tasfiyesinde değerlendirilmesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Anlaşmalı süreçte üzerinde uzlaşılan protokolün eksiksizliği, çekişmeli süreçte ise ileri sürülen iddiaların delillerle desteklenmesi davanın seyrini belirler. Boşanmayla birlikte velayet ve nafaka talepleri de İstanbul Büyükçekmece Adliyesi'ndeki aile mahkemelerinde görülür.",
      "Manda yetiştiriciliği ve süt ürünleri üretiminin çoğunlukla aile işletmeciliği biçiminde sürdürüldüğü Çatalca'da, bu tür işletmelerin boşanma sürecindeki mal rejimi tasfiyesinde nasıl değerlendirileceği ayrı bir inceleme konusu olabilir.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Boşanma davası, İstanbul Büyükçekmece Adliyesi'ndeki aile mahkemesine açılır. Yetki bakımından eşlerden birinin yerleşim yeri veya davadan önce son altı aydır birlikte oturulan yer esas alınır (TMK m.168). Dava dilekçesi bu yetkili aile mahkemesine sunulur; adliye Çatalca ilçesi dışındadır." },
      { question: "Aile işletmesi niteliğindeki mandıra mal paylaşımında nasıl değerlendirilir?", answer: "Aile işletmesi niteliğindeki mandıra evlilik süresince edinilmişse katılma alacağı hesabına dahil edilir; miras yoluyla geçmişse kişisel mal sayılabilir. Mal rejimi sözleşmeyle değiştirilmemişse edinilmiş mallara katılma rejimi uygulanır. İşletmenin edinilme tarihi ve kaynağı belgelerle gösterilir; hesaplama mahkemece yapılır." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Çocuk belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir. Mahkeme velayet kararında çocuğun üstün yararını esas alır; yaşı, bakım düzeni ve ebeveynlerin imkanlarıyla birlikte değerlendirir. Çocuğun görüşü tek başına belirleyici değildir ve sosyal inceleme raporu gibi diğer delillerle birlikte incelenir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Nafaka miktarı, tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilerek belirlenir. Mahkeme tarafların ekonomik durumunu ve kusur durumunu gelir, gider ve yaşam standardına ilişkin delillerle inceler. Koşullar değişirse miktar yeniden değerlendirilebilir; dava süresince tedbir nafakası da talep edilebilir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir. Barışma halinde davacı dilekçeyle davadan vazgeçebilir ve süreç sona erer. Henüz karar verilmemişse tedbir nafakası gibi geçici düzenlemeler de değişebilir. Taraflar yeniden boşanmak isterse yeni bir dava açmaları gerekir." },
    ],
    howToTitle: "Çatalca'da Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "catalca-ceza-avukati",
    name: "Çatalca Ceza Avukatı",
    heroTitle: "Çatalca Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; kovuşturma İstanbul Büyükçekmece Adliyesi'nde yürütülür.",
    metaTitle: "Çatalca Ceza Avukatı | Müdafilik",
    metaDescription:
      "Çatalca'da soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. Ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında Çatalca'daki müvekkillerine müdafilik yapar.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Orman Suçları", description: "Kaçak yapılaşma ve orman alanına ilişkin iddialarda savunma." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Orman alanına kaçak yapılaşma iddialarında savunma",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "Geniş orman alanlarına sahip Çatalca'da, orman kanunu kapsamındaki kaçak yapılaşma ve izinsiz kesim gibi iddialara dayalı ceza soruşturmaları zaman zaman gündeme gelebilmektedir.",
      "Kovuşturma aşamasındaki davalar İstanbul Büyükçekmece Adliyesi'nde görülür. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından belirleyicidir.",
    ],
    faqs: [
      { question: "Çatalca'da bir ceza davası hangi adliyede görülür?", answer: "Çatalca'da işlenen suçlara ilişkin davalar İstanbul Büyükçekmece Adliyesi'nde görülür. Suçun niteliğine göre asliye ceza veya ağır ceza mahkemesi görevlidir. Soruşturma aşamasında Cumhuriyet savcılığı, tutuklama ve adli kontrol kararlarında ise sulh ceza hakimlikleri devrededir; dosya buna göre takip edilir." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Müdafi bulunmadan ifade alınabilir ancak müdafi bulundurmak önerilir. Şüpheli ifade vermeden önce müdafi talep edebilir ve bu hakkı gözaltının başladığı andan itibaren vardır. Müdafi hazır bulunması ifadenin hukuka uygun alınmasına yardımcı olur; zorunlu müdafilik hallerinde ise müdafi olmadan ifade alınmamalıdır." },
      { question: "Orman alanına izinsiz yapı yapıldığı iddiasında süreç nasıl işler?", answer: "İlgili idarelerin tespiti üzerine soruşturma başlar, deliller toplanır ve gerekirse iddianame düzenlenir. Şüpheli ifade verirken müdafi talep edebilir. Orman kadastrosu ve arazinin niteliği gibi hususlar delil olarak incelenir; iddianame kabul edilirse dava yetkili ceza mahkemesinde, Büyükçekmece Adliyesi'nde görülür." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, sulh ceza hakimliğine itiraz edilebilir. Kovuşturmaya yer olmadığı kararına itiraz süresi tebliğden itibaren 15 gündür. İtiraz dilekçesinde soruşturmanın eksik yürütüldüğü veya delillerin yanlış değerlendirildiği gerekçeleriyle karar eleştirilir; hakimlik kararı kabul ederse iddianame düzenlenmesi yolu açılabilir." },
      { question: "Temyiz kanun yoluna hangi kararlar için başvurulur?", answer: "Temyiz kanun yoluna kanunda sayılan ağır suçlara ilişkin kararlar için başvurulabilir. Yargılama süreci genellikle önce bölge adliye mahkemesine istinaf yoluyla ilerler; temyiz ise bu aşamadan sonra kanunda belirtilen sınırlı hallerde gündeme gelir. Süre ve şartlar kanunda düzenlenmiştir ve kararın tebliğinden itibaren işler." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Uzlaşma sağlanamazsa yargılamaya kaldığı yerden devam edilir. Taraflar uzlaşmazsa soruşturma veya kovuşturma olağan yoldan sürer; uzlaşma teklifinin kabul edilmesi zorunlu değildir. Uzlaşma yalnızca kanunda sayılan suçlarda söz konusu olur; teklif reddedilirse savcılık iddianame düzenleyebilir veya mahkeme davayı görür." },
    ],
    howToTitle: "Çatalca'da Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "catalca-gayrimenkul-avukati",
    name: "Çatalca Gayrimenkul Avukatı",
    heroTitle: "Çatalca Gayrimenkul Avukatı",
    heroSubtitle:
      "Tarım ve orman arazisi, mera tahsisi ve tapu uyuşmazlıklarında hukuki destek sağlanır; davalar İstanbul Büyükçekmece Adliyesi'nde görülür.",
    metaTitle: "Çatalca Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Çatalca'da tarım ve orman arazisi, tapu iptali ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Tarım, orman ve mera arazisi uyuşmazlıklarında Çatalca'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Tarım/Orman Arazisi", description: "Arazi sınırı, vasıf tespiti ve miras intikali uyuşmazlıkları." },
      { title: "Mera Tahsisi", description: "Otlak ve mera arazilerine ilişkin kullanım uyuşmazlıkları." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Tarım ve orman arazisi sınır ve vasıf uyuşmazlıklarında temsil",
      "Mera ve otlak arazilerinin kullanım hakkına ilişkin danışmanlık",
      "Tapu iptali ve tescil davalarının açılması",
      "Miras yoluyla intikal eden arazilerde ortaklığın giderilmesi davaları",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
    ],
    localParagraphs: [
      "İstanbul'un en geniş yüzölçümüne sahip ilçesi olan Çatalca'da, tarım, orman ve mera niteliğindeki arazilere ilişkin sınır tespiti ve miras intikali uyuşmazlıkları sık karşılaşılan gayrimenkul hukuku konularındandır.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür.",
    ],
    faqs: [
      { question: "Mera arazisi özel mülkiyete konu olabilir mi?", answer: "Kural olarak mera arazileri kamu malı niteliğindedir ve tahsis amacı dışında kullanılamaz. Bu nedenle özel mülkiyete konu olmaları sınırlıdır. Bir arazinin mera sayılıp sayılmadığı kadastro ve tahsis kayıtlarıyla belirlenir; tapuya kayıtlı görünen yerlerin niteliği tartışmalıysa idari ve yargısal yollar gündeme gelebilir." },
      { question: "Miras yoluyla kalan tarım arazisi paydaşlar arasında nasıl paylaşılır?", answer: "Miras yoluyla kalan tarım arazisi paydaşlar arasında anlaşmayla paylaşılabilir; anlaşma sağlanamazsa ortaklığın giderilmesi (izale-i şüyu) davası açılabilir. Mahkeme taşınmazın aynen bölünüp bölünemeyeceğini inceler; bölünemiyorsa satış yoluyla bedel paydaşlara payları oranında dağıtılır. Paydaşların her biri bu davayı açabilir." },
      { question: "Çatalca'da gayrimenkul davası hangi mahkemede görülür?", answer: "Gayrimenkul davası niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür. Kira ve ortaklığın giderilmesi davalarında sulh hukuk, tapu iptal ve tescil davalarında asliye hukuk mahkemesi görevli olabilir. Taşınmazın bulunduğu yer mahkemesi yetki bakımından belirleyicidir." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tapu iptal ve tescil davasını açabilir. Sahtecilik, yolsuz tescil, ehliyetsizlik veya muvazaa gibi iddialar dayanak olabilir. Dava taşınmazın bulunduğu yer mahkemesinde açılır; tapu kaydı ve resmi senet gibi belgeler delil olarak incelenir." },
      { question: "Orman sınırındaki bir arazinin niteliği nasıl belirlenir?", answer: "Orman sınırındaki bir arazinin niteliği, kadastro ve orman kadastrosu kayıtları birlikte incelenerek tespit edilir. Tapu kaydı, kadastro tutanağı ve orman sınırlama haritası karşılaştırılır; gerekirse mahkemece bilirkişi ve keşif yoluyla yerinde inceleme yapılır. Sonuç, arazinin özel mülkiyete konu olup olmadığını belirler." },
    ],
    howToTitle: "Çatalca'da Ortaklığın Giderilmesi Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Mülkiyet Durumu İncelemesi", text: "Taşınmazın tapu kaydı ve paydaşlar tespit edilir." },
      { name: "Uzlaşma Girişimi", text: "Paydaşlar arasında satış veya paylaşım konusunda anlaşma aranır." },
      { name: "Dava Açılması", text: "Anlaşma sağlanamazsa sulh hukuk mahkemesinde dava açılır." },
      { name: "Satış/Paylaşım", text: "Mahkeme kararıyla taşınmaz satılır veya aynen paylaştırılır." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["ortakligin-giderilmesi-davasi", "tapu-iptali-ve-tescil-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "catalca-icra-avukati",
    name: "Çatalca İcra Avukatı",
    heroTitle: "Çatalca İcra Avukatı",
    heroSubtitle:
      "İcra daireleri İstanbul Büyükçekmece Adliyesi bünyesindedir; alacak tahsili amacıyla başlatılan icra takibi, ödeme emrine itiraz ve haciz aşamalarında temsil sağlanır.",
    metaTitle: "Çatalca İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Çatalca'da icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Çatalca'daki üretici, esnaf ve bireysel müvekkillere icra ve iflas hukuku kapsamında danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukat olup 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Süt Ürünleri Alacakları", description: "Mandıra ve süt ürünleri satışından doğan alacakların takibi." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Süt, peynir ve tereyağı satışından doğan alacakların takibi",
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "İcra takibine ilişkin uyuşmazlıklar İstanbul Büyükçekmece Adliyesi'ndeki icra mahkemelerinde görülmekte olup, borçlunun Çatalca'da yerleşik bulunduğu dosyalarda yetkili icra dairesi kural olarak borçlunun ikametgahına göre belirlenmektedir.",
      "Çatalca'da manda ve inek sütünden peynir, yoğurt ve tereyağı üretimi önemli bir geçim kaynağı olup, üretici ile toptancı arasında ortaya çıkan ödeme uyuşmazlıkları da bu icra takiplerinin sık karşılaşılan sebeplerindendir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "İcra takibine sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlanabilir. İlamsız takipte alacaklı doğrudan icra dairesine başvurur ve borçluya ödeme emri gönderilir; ilamlı takipte ise mahkeme kararı dayanak olur. Alacağın belgeyle ispatlanabilir olması takibin ilerleyişi açısından önemlidir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Ödeme emrine itiraz süresi tebliğden itibaren 7 gündür (İİK m.62). İtiraz icra dairesine bildirilir ve süresinde yapılırsa takip durur. Süre kaçırılırsa takip kesinleşir ve haciz aşamasına geçilebilir; bu nedenle tebliğ tarihinin doğru belirlenmesi ve süre içinde başvuru yapılması önemlidir." },
      { question: "Süt ürünleri toptan satışında ödeme yapılmazsa ne yapılabilir?", answer: "Süt ürünleri toptan satışında ödeme yapılmazsa fatura veya sözleşmeye dayanarak icra takibi başlatılabilir. Borçluya ödeme emri gönderilir; 7 gün içinde itiraz edilmezse takip kesinleşir ve haciz aşamasına geçilebilir. İtiraz edilirse alacaklı itirazın iptali davası açabilir; teslim ve fatura belgeleri delil olarak önemlidir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Haciz işlemi kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir. Borçlunun ve ailesinin geçimi için gerekli bazı eşya ve haklar haczedilemez. Maaş gibi gelirler ise ancak kanunda belirlenen oranda haczedilir; haczedilemez bir mal haczedilmişse icra mahkemesine şikayet yoluyla itiraz edilebilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Borçlu ödeme yapmazsa haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür. Ödeme emrine süresinde itiraz edilmemişse takip kesinleşir ve alacaklı haciz talep edebilir. Haczedilen mallar satışa çıkarılır ve bedel alacaklıya ödenir; borçlu mal beyanında bulunmakla da yükümlüdür." },
    ],
    howToTitle: "Çatalca'da İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "catalca-idare-avukati",
    name: "Çatalca İdare Avukatı",
    heroTitle: "Çatalca İdare Avukatı",
    heroSubtitle:
      "Orman alanı, mera tahsisi ve belediye işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Çatalca İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Çatalca'da idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. İdari işlemlerin iptali ve tam yargı davalarında Çatalca'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Orman/Mera Tahsisi", description: "Orman kadastrosu ve mera tahsis kararlarına ilişkin uyuşmazlıklar." },
      { title: "Tarım İzinleri", description: "Tarımsal işletme ve hayvancılık ruhsat işlemleri." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Orman kadastrosu ve mera tahsis kararlarına karşı idari dava süreçleri",
      "Tarımsal işletme ve hayvancılık ruhsat işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
      "Belediye encümen kararlarına karşı dava açılması",
    ],
    localParagraphs: [
      "Geniş orman ve mera alanlarına sahip Çatalca'da, orman kadastrosu, mera tahsisi ve tarımsal işletme ruhsatlarına ilişkin idari işlemler diğer ilçelere kıyasla daha sık gündeme gelmektedir.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "Orman kadastrosu kararına itiraz edilebilir mi?", answer: "Evet, kararın kesinleşmesinden önce idari ve yargısal yollarla itiraz edilebilir. Orman kadastrosu işlemleri idari işlem niteliğinde olduğundan, ilan veya tebliğ tarihinden itibaren yasal süre içinde dava açılabilir. Süre ve yetkili mahkeme ilgili kanuna göre değişebilir; bu nedenle ilan tarihi ve karar belgesi baştan incelenmelidir." },
      { question: "Mera tahsis amacı değiştirilebilir mi?", answer: "Mera tahsis amacı yasada öngörülen istisnai hallerde ve idari izinle değiştirilebilir. Kural olarak mera arazileri kamu malıdır ve tahsis amacı dışında kullanılamaz. Değişiklik talebi idareye yapılır; ret veya onay işlemi idari işlem olduğundan, hukuka aykırı bulunursa idare mahkemesinde dava açılabilir." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde dava açılabilir. Genel kural olarak idari işlemlere karşı dava süresi tebliğden itibaren 60 gündür (İYUK m.7). Dilekçede ret gerekçesinin hukuka aykırı olduğu açıklanır; gerekirse yürütmenin durdurulması istenir ve mahkeme işlemin iptali yönünde karar verebilir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, yasal süresinde idare mahkemesinde dava açılabilir. Genel kural olarak idari işlemlere karşı dava süresi tebliğden itibaren 60 gündür (İYUK m.7); ancak bazı idari para cezalarında kanun farklı bir mercii veya süre öngörebilir. Bu nedenle cezanın dayanağı olan kanun maddesi kontrol edilmelidir." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "İdarenin eyleminden zarar görenler tam yargı davası yoluyla zararın tazmini talep edebilir. Bu dava, idari işlem veya eylemden doğan zararın karşılanmasını amaçlar. Zararın niteliği ve miktarı ispat edilmelidir; iptal davasıyla birlikte de ileri sürülebilir. Süre ve ön başvuru koşulları ilgili kanunda düzenlenmiştir." },
    ],
    howToTitle: "Çatalca'da İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "catalca-is-hukuku-avukati",
    name: "Çatalca İş Hukuku Avukatı",
    heroTitle: "Çatalca İş Hukuku Avukatı",
    heroSubtitle:
      "Çatalca'daki mandıra, çiftlik ve diğer işyerlerinde çalışan işçi ile işverenin fesih, tazminat, fazla mesai ve sigorta uyuşmazlıklarında arabuluculuktan iş mahkemesi aşamasına dek hukuki destek verilir.",
    metaTitle: "Çatalca İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Çatalca'da kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Avukat Furkan Arıkan, 72621 sicil numarasıyla İstanbul Barosu'na kayıtlıdır; MEF Üniversitesi'nin hukuk fakültesinden 2019 yılında mezun olmuştur. Büro Beşiktaş/Sinanpaşa'dadır. Çatalca'daki işçi ve işverenlerin fesih, tazminat ve sigorta sorunlarında belge incelemesi ile arabuluculuk ve dava takibi yapılır.",
    highlightCards: [
      { title: "Haksız Fesih Tazminatı", description: "Kıdem ve ihbar tazminatı taleplerinin hesaplanması ve takibi." },
      { title: "İşe İade ve Arabuluculuk", description: "İş K. m.18 ve m.21 çerçevesinde başvuru süreleri ile dava hazırlığı." },
      { title: "Sağım ve Bakım Vardiyaları", description: "Düzensiz çalışma saatlerinden doğan fazla mesai alacakları." },
      { title: "Kayıt Dışı Çalışma", description: "Eksik sigorta bildirimi için hizmet tespiti ve alacak talepleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İş sözleşmesi haksız sona erdiğinde kıdem ve ihbar tazminatı alacaklarının hesaplanması ve dava yoluyla istenmesi",
      "Fesihten sonra bir ay içinde yapılması gereken arabulucu başvurusunun ve son tutanak sonrası iş mahkemesi davasının hazırlanması",
      "Sabah ve akşam sağımı, bakım ve yem hazırlığı gibi işlerde puantaj, tanık ve bordro üzerinden fazla mesai ve hafta tatili alacaklarının belirlenmesi",
      "SGK hizmet dökümünde eksik gün veya hiç kayıt bulunan çalışanlar için hizmet tespiti davası açılması",
      "İbraname, istifa dilekçesi ve işyeri yazışmalarının imza atılmadan önce hukuki yönden incelenmesi",
      "İş kazası veya meslek hastalığı sonrasında SGK bildirimi ile tazminat taleplerinin takip edilmesi",
    ],
    localParagraphs: [
      "Çatalca'da manda sütü üretimi ve tarım işletmeleri çoğunlukla aile işletmeciliği biçiminde sürdüğünden çalışma düzeni yazılı sözleşmeden çok sözlü anlaşmalara dayanabilir. Sabah ve akşam sağımı, hayvan bakımı ve yem hazırlığı gibi işler düzensiz saatler doğurur; bu durum fazla mesai, hafta tatili ve sigorta bildirimi konularında ispat sorunu yaratabilir.",
      "Ferhatpaşa, Kaleiçi, Ovayenice, Muratbey, Karacaköy ve Binkılıç gibi mahallelerde çalışanlar için İstanbul merkezine E-5 üzerinden yaklaşık 45-70 dakikalık mesafe söz konusudur; bu yüzden belge ve tanık listesinin arabulucu görüşmesi öncesinde hazırlanması zaman kaybını azaltır. Uzlaşılamayan dosyalar Büyükçekmece Adliyesi bünyesindeki iş mahkemelerine taşınır.",
    ],
    faqs: [
      { question: "Çatalca'da mandıra çalışanı kıdem tazminatı alabilir mi?", answer: "En az bir yıl çalışmış işçi, iş sözleşmesi kanunda sayılan sebeplerden biriyle sona erdiğinde kıdem tazminatına hak kazanabilir; örneğin işveren haklı sebep olmadan feshetmişse ya da işçi haklı nedenle ayrılmışsa. İşletmenin kapsamı ve çalışma süreleri ise dosya üzerinden ayrıca değerlendirilir." },
      { question: "İşe iade için arabulucuya ne kadar sürede başvurulmalı?", answer: "Fesih bildiriminden itibaren bir ay içinde arabulucuya başvurulmalıdır; anlaşma sağlanamazsa son tutanağın düzenlenmesinden itibaren iki hafta içinde iş mahkemesinde dava açılır. İşe iade için ayrıca en az altı aylık kıdem ve otuz işçi ölçütü aranır (İş K. m.18)." },
      { question: "İşveren işçiyi işe başlatmazsa ne ödemek zorunda kalır?", answer: "Mahkeme feshi geçersiz sayar, işçi kararın kesinleşmesinden itibaren on iş günü içinde başvurur ve işveren bir ay içinde işe başlatmazsa, dört ile sekiz aylık ücret tutarında tazminat ve en çok dört aya kadar boşta geçen süre ücreti ödenir (İş K. m.21)." },
      { question: "Sigortası yatırılmayan çiftlik işçisi ne yapabilir?", answer: "Primi yatırılmayan ya da eksik gün bildirilen işçi, SGK hizmet dökümünü e-Devlet'ten kontrol edip eksiklik varsa hizmet tespiti davası açabilir. Maaş dekontları, tanık beyanları ve işyerine ilişkin fotoğraflar çalışmanın kanıtlanmasında kullanılır; dava iş mahkemesinde görülür." },
      { question: "Fazla mesai alacağı nasıl ispatlanır?", answer: "Fazla mesai, haftalık 45 saati aşan çalışmadır ve ücretin yüzde elli zamlı ödenmesi gerekir (İş K. m.41). Bordro, puantaj, mesaj yazışmaları ve tanık anlatımları ispat aracıdır; bordroda imzalı fazla mesai ödemesi görünüyorsa o bölüm ödenmiş sayılabilir." },
    ],
    howToTitle: "Çatalca'da Fesih Sonrası İşe İade Yolu Nasıl İşler?",
    howToSteps: [
      { name: "Fesih Yazısı ve Belgeler", text: "Fesih bildirimi, bordro, SGK dökümü ve sözleşme toplanır; kıdem ile çalışan sayısı ölçütleri kontrol edilir." },
      { name: "Arabulucu Başvurusu", text: "Fesih bildirimini izleyen bir ay içinde arabulucuya başvurulur ve görüşmeler yürütülür." },
      { name: "İş Mahkemesinde Dava", text: "Son tutanaktan itibaren iki hafta içinde Büyükçekmece Adliyesi'ndeki iş mahkemesinde dava açılır." },
      { name: "Karar ve İşe Başlama", text: "Fesih geçersiz bulunursa işçi on iş günü içinde işe başlamak için başvurur; başlatılmazsa İş K. m.21 tazminatı doğar." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "ise-iade-davasi"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "catalca-kira-tahliye-avukati",
    name: "Çatalca Kira ve Tahliye Avukatı",
    heroTitle: "Çatalca Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Konut ve tarımsal işletme tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemeleri İstanbul Büyükçekmece Adliyesi'ndedir.",
    metaTitle: "Çatalca Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Çatalca'da kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Kira hukuku alanında Çatalca'daki kiraya verenlere ve kiracılara danışmanlık verir.",
    highlightCards: [
      { title: "Tarım Arazisi Kiraları", description: "Ekim/hasat amaçlı arazi kiralama sözleşmeleri." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Tarım arazisi ve mandıra tesislerinin kira sözleşmelerinin hazırlanması",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Tarım ve hayvancılık faaliyetinin yaygın olduğu Çatalca'da, ekim veya otlatma amacıyla arazi kiralanması konut kiralarından farklı özel şartlar içerebilmektedir.",
      "Bu davalara İstanbul Büyükçekmece Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır; kira sözleşmesinin yazılı ve eksiksiz olması, uyuşmazlık halinde ispat açısından önem taşır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir. Kira borcunda yazılı ihtar verilir ve ödeme için verilen süre (TBK m.315, 30 gün) geçerse tahliye istenebilir. Her nedenin şartları ve ispat biçimi farklıdır; tahliye mahkeme veya icra yoluyla istenir." },
      { question: "Tarım arazisi kirasında hasat dönemi tahliyeyi etkiler mi?", answer: "Sözleşmede aksi kararlaştırılmadıkça, hasat hakkı sözleşme süresi içinde korunur. Kiracı süresi içinde ürünü hasat edebilir; kiraya veren tahliye için kanuni bir sebep ileri sürmelidir. Hasat dönemi, sözleşme süresi ve tahliye zamanı yazılı olarak belirlenmişse uyuşmazlıkta bu hükümler esas alınır ve ispat kolaylaşır." },
      { question: "Çatalca'da tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir. Taahhütname veya kira borcuna dayanan icra yoluyla tahliye daha kısa sürebilir. Dava Büyükçekmece Adliyesi'ndeki sulh hukuk mahkemesinde görülür; delillerin tamamlanması ve tebligat süreci uzatabilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında rayiç bedel tespiti talep edilebilir. Mahkeme bilirkişi incelemesiyle emsal kiralara ve taşınmazın konumuna bakarak güncel bedeli belirler. Dava belirli süre ve şartlara bağlıdır; açmadan önce kira sözleşmesindeki hükümler ve yenilenen dönem koşulları incelenmelidir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir. Taahhüt kira başladıktan sonra, tahliye tarihi belirtilerek yazılı verilmiş olmalıdır. Kiracıya tahliye emri gönderilir; itiraz edilirse takip durur ve taahhüdün geçerliliği ilgili mahkemede incelenir." },
    ],
    howToTitle: "Çatalca'da Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "catalca-vergi-avukati",
    name: "Çatalca Vergi Avukatı",
    heroTitle: "Çatalca Vergi Avukatı",
    heroSubtitle:
      "Tarım ve hayvancılık işletmelerine yönelik vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Çatalca Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Çatalca'da vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Çatalca'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Mandıra İşletmeleri", description: "Süt ürünleri üreticilerine yönelik vergi uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Mandıra ve tarım işletmelerinde vergi incelemesi sürecinde danışmanlık",
      "Organik tarım işletmelerine yönelik vergi teşvik uyuşmazlıklarında destek",
    ],
    localParagraphs: [
      "Manda ve süt ürünleri üretiminin yanı sıra organik tarımın da geliştiği Çatalca'da, üretici kayıt sistemi ve gelir beyanına ilişkin vergi incelemeleri sık karşılaşılan konular arasındadır.",
      "Bu işlemlere karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir; ihbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "Mandıra işletmesinin vergi yükümlülüğü nasıl belirlenir?", answer: "Mandıra işletmesinin vergi yükümlülüğü, üretim hacmi, satış türü ve kanunda öngörülen istisnalara göre değerlendirilir. Yükümlülüğün türü ve kapsamı işletmenin faaliyetine bağlıdır; tarhiyat yapılırsa ihbarnameye karşı tebliğden itibaren 30 gün içinde vergi mahkemesinde dava açılabilir. Kayıt ve belgelerin düzenli tutulması önemlidir." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "İhbarnameye itiraz süresi tebliğden itibaren 30 gündür; bu süre içinde vergi mahkemesinde dava açılabilir. Dava İstanbul vergi mahkemelerinde açılır. Süre tebliğ tarihinden başlar ve kaçırılırsa dava hakkı kaybedilebilir; bu nedenle ihbarnamenin tebliğ edildiği tarih belgeden kontrol edilmelidir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "Vergi davası İstanbul vergi mahkemelerinde görülür. Vergi uyuşmazlıklarında dava süresi kural olarak ihbarnamenin tebliğinden itibaren 30 gündür. Vergi dairesi işlemlerine karşı idari başvuru ve uzlaşma yolları da bulunur; dava ise yetkili vergi mahkemesinde, yani İstanbul'da açılır." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur. Uzlaşma talebi tarhiyat sonrası yapılan idari bir başvurudur ve dava hakkını ortadan kaldırmaz. Uzlaşma tutanağı düzenlendikten sonra kalan sürede dava açılabilir; bu nedenle süre takibinin dikkatle yapılması gerekir." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Vergi ödeme emrine karşı tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır. Süre tebliğ tarihinden başlar ve kaçırılırsa dava hakkı sona erebilir. Dilekçede ödeme emrinin dayanağı olan alacağın geçerliliği veya usul hataları ileri sürülebilir; ödeme emri belgesi dosyaya eklenir." },
    ],
    howToTitle: "Çatalca'da Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "catalca-borclar-hukuku-avukati",
    name: "Çatalca Borçlar Hukuku Avukatı",
    heroTitle: "Çatalca Borçlar Hukuku Avukatı",
    heroSubtitle:
      "İstanbul Büyükçekmece Adliyesi bünyesindeki ticaret ve asliye hukuk mahkemelerinde görülen süt ürünleri tedarik sözleşmesi uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanmaktadır.",
    metaTitle: "Çatalca Borçlar Hukuku Avukatı | Alacak Davası",
    metaDescription:
      "Çatalca'da sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Borçlar hukuku kapsamında sözleşme ve alacak uyuşmazlıklarına ilişkin olarak Çatalca'daki müvekkillere danışmanlık hizmeti, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan avukat Furkan Arıkan tarafından sağlanmaktadır.",
    highlightCards: [
      { title: "Süt Tedarik Sözleşmeleri", description: "Üretici-toptancı arası süt/peynir tedarik sözleşmeleri." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Hayvan Alım-Satımı", description: "Manda ve büyükbaş hayvan alım-satımından doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Süt ve süt ürünleri tedarik sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Manda ve büyükbaş hayvan alım-satımından doğan ayıp ve tazminat talepleri",
      "Sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Bu uyuşmazlıklara ilişkin davalar İstanbul Büyükçekmece Adliyesi bünyesinde görülür; bazı ticari alacak taleplerinde dava açılmadan önce arabuluculuğa başvurulması zorunlu olabilir.",
      "Geçimin önemli bir bölümünü oluşturan manda yetiştiriciliği ve süt ürünleri üretimi nedeniyle Çatalca'da, üretici-toptancı tedarik sözleşmeleri ile hayvan alım-satımından kaynaklanan uyuşmazlıklar borçlar hukukunda sık karşılaşılan konulardandır.",
    ],
    faqs: [
      { question: "Satın alınan manda hastalıklı çıkarsa ne yapılabilir?", answer: "Satın alınan manda hastalıklı çıkarsa ayıba dayalı olarak sözleşmeden dönme veya bedel indirimi talep edilebilir. Alıcı ayıbı öğrendikten sonra süresinde satıcıya bildirmelidir. Hastalığın satış anında mevcut olduğu veteriner raporu, teslim belgeleri ve yazışmalarla ispatlanır; uyuşmazlık çözülmezse dava açılabilir." },
      { question: "Süt tedarik sözleşmesinde teslim gecikirse ne olur?", answer: "Süt tedarik sözleşmesinde teslim gecikirse sözleşmede öngörülen gecikme cezası talep edilebilir, gerekirse sözleşmeden dönülebilir. Önce teslim için ihtar çekilmesi temerrüdün oluşması bakımından önemlidir. Hangi hakkın seçileceği sözleşme hükümlerine göre belirlenir; zarar ayrıca ispatlanırsa tazminat da istenebilir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Ticari alacak davası niteliğine göre asliye ticaret mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür. Konusu belirli bir miktar paranın ödenmesi olan ticari davalarda dava açmadan önce arabulucuya başvurmak dava şartıdır. Ticari olmayan alacaklarda asliye hukuk mahkemesi görevli olabilir." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Zorunlu hallerde arabulucuya başvurulmadan dava açılırsa dava usulden reddedilebilir. Ticari nitelik taşımayan uyuşmazlıklarda zorunluluk bulunmaz, ancak taraflar isterlerse gönüllü olarak arabuluculuğa başvurabilir; bu durumda uyuşmazlık mahkeme dışında çözülebilir." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse alacak talep edilemez; ileri sürmezse talep edilebilir. Mahkeme zamanaşımını kendiliğinden dikkate almaz. Bu nedenle borçlunun savunmasında bu itirazı yapıp yapmadığı önemlidir; sürenin ne zaman başladığı ve kesilip kesilmediği ayrıca incelenir." },
    ],
    howToTitle: "Çatalca'da Alacak Davası Süreci Nasıl İşler?",
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

export const catalcaServices: PseoService[] = [...catalcaBaseServices, catalcaMiras];
