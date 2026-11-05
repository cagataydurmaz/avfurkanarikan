import type { PseoService } from "./types";
import { atasehirMiras } from "./miras/atasehirMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const atasehirBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "atasehir-avukat",
    name: "Ataşehir Avukat",
    heroTitle: "Ataşehir Avukat",
    heroSubtitle:
      "2008 yılında Kadıköy, Üsküdar ve Ümraniye'den ayrılan mahallelerin birleşimiyle kurulan, planlı yerleşimi ve banka/şirket genel müdürlükleriyle bilinen Ataşehir'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında avukat Furkan Arıkan danışmanlık ve dava takibi hizmeti sunmaktadır; İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olan Arıkan'ın dosyaları, ilçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Ataşehir Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Ataşehir'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. 2008'de Kadıköy, Üsküdar ve Ümraniye'den ayrılan mahallelerin birleşimiyle kurulan ve 25,84 km²'lik alanda 17 mahalleyi barındıran Ataşehir'de ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; ilçenin kendi adliyesi bulunmadığından davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür, randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Site, rezidans ve plaza nitelikli taşınmazlarda uyuşmazlık takibi." },
      { title: "İş Hukuku", description: "Şirket merkezlerinde çalışan personelin işçilik alacakları ve işe iade süreçleri." },
      { title: "İcra Hukuku", description: "Alacak takibi ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "İmar ve idari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı ve cezası uyuşmazlıkları." },
      { title: "Borçlar Hukuku", description: "Ticari sözleşme ve alacak kaynaklı davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Site, rezidans ve plaza tipi taşınmazlara ilişkin gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İmar uygulamaları ve idari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Ticari sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "İstanbul'un Anadolu Yakası'ndaki görece genç ilçelerinden biri olan Ataşehir, 2008 yılında 5747 sayılı Kanun'la Kadıköy, Üsküdar ve Ümraniye'den ayrılan mahallelerin birleştirilmesiyle kurulmuştur; Migros Ticaret A.Ş. ve BASF Türk gibi şirketlerin genel müdürlüklerinin de aralarında bulunduğu çok sayıda kurumsal merkez, E-5 hattı boyunca yükselen plaza ve kule yapılarında konumlanmıştır.",
      "Ataşehir'in kendi adliyesi bulunmadığından ilçedeki dava ve icra dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür; ilçeye M4 hattının Kozyatağı istasyonu ile 2023'te açılan M8 Bostancı-Dudullu hattının beş istasyonundan ulaşılabilir.",
    ],
    faqs: [
      { question: "Ataşehir'deki davalara hangi adliye bakıyor?", answer: "Ataşehir'in kendi adliyesi bulunmamaktadır; ilçedeki tüm dava ve icra dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. Davanın hangi mahkemede açılacağı uyuşmazlığın niteliğine göre belirlenir; örneğin kira davalarına sulh hukuk, ticari alacaklara asliye ticaret mahkemesi bakar. Ceza, icra ve iş dosyaları da aynı adliye bünyesinde yürütülür." },
      { question: "Randevu nasıl alınır?", answer: "Randevu, WhatsApp veya telefonla iletişime geçilerek alınır ve uygun bir görüşme günü belirlenir. Görüşme tercihe göre yüz yüze veya çevrim içi planlanabilir. Görüşmede olay ve belgeler değerlendirilir; hukuki durumun incelenmesi için tapu, sözleşme, tebligat veya ihbarname gibi elde bulunan belgelerin hazır edilmesi süreci kolaylaştırır." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve temsil sağlanmaktadır. Soruşturma ve kovuşturmada savunma, boşanma ve velayet, site ve plaza tipi taşınmaz uyuşmazlıkları, işe iade, alacak tahsili, imar işlemlerine karşı dava, vergi itirazı ve ticari sözleşme uyuşmazlıkları bu kapsamdadır." },
      { question: "Büro Ataşehir'de mi bulunuyor?", answer: "Hayır, büro Ataşehir'de değil, Beşiktaş/Sinanpaşa'dadır. Ataşehir'deki müvekkillere de aynı kapsamda hizmet verilir; ilçenin kendi adliyesi bulunmadığından davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. Görüşmeler tercihe göre yüz yüze veya çevrim içi yapılabilir, randevu için WhatsApp ya da telefon kullanılır." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Danışmanlık ücreti, dosyanın niteliğine göre değişir ve randevu sırasında bilgi verilir. Hukuki durumun kapsamı, gerekli belgeler ve izlenecek yol görüşmede değerlendirildiği için ücret de bu aşamada netleşir. Temsil kararı verilirse sürecin ayrıntıları ve ücretlendirme müvekkille birlikte belirlenir." },
      { question: "Ataşehir'e nasıl ulaşılır?", answer: "M4 hattının Kozyatağı istasyonu ile 2023'te açılan M8 Bostancı-Dudullu hattının beş istasyonu ilçeye raylı sistem bağlantısı sağlar; E-5 üzerinden karayoluyla da ulaşılabilir. Ataşehir'in kendi adliyesi bulunmadığından dava ve icra dosyaları ise Kartal'daki İstanbul Anadolu Adliyesi'nde görülür." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Görüşmeler tercihe göre yüz yüze veya çevrim içi olarak planlanabilir. Büro Beşiktaş/Sinanpaşa'da olduğundan Ataşehir'deki müvekkillerle çevrim içi görüşme veya telefon ve WhatsApp üzerinden ilk değerlendirme de yapılabilir. Randevu için önce WhatsApp veya telefonla iletişime geçilir; görüşmede belgeler üzerinden hukuki durum incelenir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Acil bir gözaltı durumunda vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar ve şüpheli, soruşturmanın her aşamasında müdafiden yararlanabilir (CMK m. 149). Ataşehir'deki soruşturmalar Kartal'daki İstanbul Anadolu Adliyesi'nde yürütülür." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, dosyanın seyri hakkında bilgi alınabilir; süreç boyunca gelişmeler müvekkille paylaşılır. Dosyadaki duruşma, tebligat ve karar gibi aşamalar takip edilir. Ataşehir'deki dosyalar Kartal'daki İstanbul Anadolu Adliyesi'nde görüldüğünden, bilgilendirme telefon, WhatsApp veya çevrim içi görüşmeyle de yapılabilir." },
      { question: "Şirket merkezi çalışanlarının işçilik uyuşmazlıklarında destek alınabilir mi?", answer: "Evet, Ataşehir'deki plaza ve ofis binalarında çalışanların işçilik alacağı ve işe iade taleplerinde danışmanlık sağlanır. İşe iade taleplerinde fesihten itibaren bir ay içinde arabulucuya başvurulması gerekir; anlaşma olmazsa dava açılır. Dava, Kartal'daki İstanbul Anadolu Adliyesi'ndeki iş mahkemesinde görülür." },
    ],
    howToTitle: "Ataşehir'de Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Ataşehir Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "atasehir-bosanma-avukati",
    name: "Ataşehir Boşanma Avukatı",
    heroTitle: "Ataşehir Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; aile mahkemesi davaları, ilçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Ataşehir Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Ataşehir'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Ataşehir'deki ailelere yönelik boşanma, velayet ve nafaka süreçlerinde temsil sağlayan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Mal Rejimi Tasfiyesi", description: "Site ve rezidans konutlarının paylaşımına ilişkin değerleme süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Site ve rezidans nitelikli konutların dahil olduğu mal rejimi tasfiyesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Toplu konut ve rezidans projelerinin yoğun olduğu, genç ve kurumsal çalışan nüfusun tercih ettiği Ataşehir'de, boşanma sürecindeki mal rejimi tasfiyelerinde site içi taşınmazların güncel piyasa değeriyle paylaşımı öne çıkan konulardandır.",
      "Boşanma, velayet ve nafaka davalarına, Ataşehir'in kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki aile mahkemelerinde bakılır; anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Ataşehir'in kendi adliyesi bulunmadığından boşanma davası, Kartal'daki İstanbul Anadolu Adliyesi'ndeki aile mahkemesinde açılır. Yetki, TMK m. 168 uyarınca eşlerden birinin yerleşim yeri veya davadan önce son altı ay birlikte oturdukları yer esas alınarak belirlenir. Boşanma, velayet ve nafaka davalarına bu adliyedeki aile mahkemelerinde bakılır." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Çocuk belirli bir olgunluğa ulaşmışsa velayet düzenlemesinde görüşü dikkate alınabilir; ancak karar çocuğun yararı gözetilerek mahkemece verilir. Velayet tesisi ve sonradan velayet değişikliği taleplerinde çocuğun yaşı, olgunluğu ve ihtiyaçları birlikte değerlendirilir. Ataşehir'deki davalara Kartal'daki aile mahkemeleri bakar." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Nafaka miktarı, tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilerek belirlenir; mahkeme her dosyada somut koşullara bakar. Koşullar sonradan değişirse nafakanın artırılması, azaltılması veya kaldırılması için ayrı dava açılabilir. Bu nedenle gelir, gider ve ihtiyaçları gösteren belgelerin dosyaya sunulması önem taşır." },
      { question: "Site içindeki bir konut mal paylaşımını nasıl etkiler?", answer: "Site içindeki konut, edinilmiş mal sayılıyorsa mal rejimi tasfiyesine dahil edilir; taşınmazın güncel rayiç değeri ve tapu kaydı, bilirkişi incelemesiyle değerlemeye esas alınır. Ataşehir'de site ve rezidans projelerinin yoğun olması nedeniyle bu taşınmazların güncel piyasa değeriyle paylaşımı öne çıkar; edinme tarihi ve kaynağı belgelerle incelenir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir. Boşanma davası açıldıktan sonra eşler barışırsa davadan vazgeçilebilir ve süreç sonlandırılabilir. Dava geri çekilmezse çekişmeli süreçte delillerin sağlam olması, anlaşmalı süreçte ise protokolün tam olması sonucu belirler; durum her dosyada ayrıca değerlendirilir." },
    ],
    howToTitle: "Ataşehir'de Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "İhtiyaç Analizi", text: "Velayet, nafaka ve mal rejimi talepleri değerlendirilir." },
      { name: "Dilekçe Hazırlığı", text: "Duruma uygun dava dilekçesi ya da protokol hazırlanır." },
      { name: "Dava Açılışı", text: "Yetkili aile mahkemesine başvuru yapılır." },
      { name: "Sonuç", text: "Duruşma sürecinin ardından karar açıklanır." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "bosanmada-nafaka-turleri"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "atasehir-ceza-avukati",
    name: "Ataşehir Ceza Avukatı",
    heroTitle: "Ataşehir Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; ilçenin kendi adliyesi bulunmadığından ceza davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Ataşehir Ceza Avukatı | Müdafilik",
    metaDescription:
      "Ataşehir'de soruşturma, kovuşturma, tutukluluğa itiraz ve ceza yargılamasının tüm aşamalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, ceza yargılamasının soruşturma ve kovuşturma aşamalarında Ataşehir'deki şüpheli ve sanıklara müdafilik hizmeti vermektedir.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Ekonomik Suçlar", description: "Dolandırıcılık ve güveni kötüye kullanma gibi mal varlığına karşı suçlarda savunma." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Dolandırıcılık ve güveni kötüye kullanma gibi mal varlığına karşı suçlarda savunma",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "Banka ve şirket operasyon merkezlerinin yoğunlaştığı Ataşehir'de, çalışan-işveren ilişkisinden veya ticari faaliyetten kaynaklanan güveni kötüye kullanma ve dolandırıcılık iddialarına ilişkin ceza soruşturmaları sık karşılaşılan dosya türleri arasındadır.",
      "İlçenin kendi adliyesi bulunmadığından Ataşehir'deki ceza soruşturma ve kovuşturmaları Kartal'daki İstanbul Anadolu Adliyesi'nde yürütülür; gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar.",
    ],
    faqs: [
      { question: "Ataşehir'de bir ceza davası hangi adliyede görülür?", answer: "Ataşehir'in kendi adliyesi bulunmadığından ilçedeki ceza soruşturma ve kovuşturmaları Kartal'daki İstanbul Anadolu Adliyesi'nde yürütülür. Dosyanın hangi mahkemede görüleceği suçun niteliğine ve yetki kurallarına göre belirlenir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğduğundan, soruşturma aşamasında da bu adliye nezdinde işlem yapılır." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Evet, ifade müdafi bulunmadan alınabilir; ancak şüpheli ve sanığın soruşturmanın her aşamasında müdafiden yararlanma hakkı vardır (CMK m. 149). Müdafi ile görüşme hakkı gözaltı sürecinin başladığı andan itibaren doğar ve zamanında kullanılması sürecin sonraki aşamalarını etkiler; bu nedenle müdafi bulundurulması önerilir." },
      { question: "İş yerinde yaşanan bir dolandırıcılık iddiasında ne yapılmalı?", answer: "İş yerinde dolandırıcılık iddiasında delillerin toplanması ve şikayet dilekçesinin hazırlanması için vakit kaybetmeden hukuki destek alınması önerilir. Banka ve şirket operasyon merkezlerinin yoğun olduğu Ataşehir'de güveni kötüye kullanma ve dolandırıcılık iddiaları sık karşılaşılan dosyalardandır. Yazışmalar, kayıtlar ve ödeme belgeleri delil olarak saklanmalıdır." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, kovuşturmaya yer olmadığı kararına karşı sulh ceza hakimliğine itiraz edilebilir; itiraz süresi tebliğden itibaren 15 gündür (CMK m. 173). Süre tebliğ tarihinden işlediği için tebligatın tarihi önem taşır. İtiraz için soruşturma dosyası ve kararın gerekçesi incelenir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Uzlaşma sağlanamazsa yargılamaya kaldığı yerden devam edilir. Uzlaşma sürecinde taraflar bir araya getirilir; anlaşma olmazsa soruşturma veya kovuşturma olağan yoluyla sürer. Bu nedenle uzlaşma teklifinin kapsamı değerlendirilirken yargılamanın devam edeceği de dikkate alınmalı, dosyadaki gelişmeler takip edilmelidir." },
    ],
    howToTitle: "Ataşehir'de Ceza Yargılaması Nasıl İlerler?",
    howToSteps: [
      { name: "Olay Bildirimi", text: "Şikayet, ihbar veya resen harekete geçilir." },
      { name: "Soruşturma Aşaması", text: "Deliller toplanır, ifadeler alınır." },
      { name: "Dava Açılması", text: "İddianamenin kabulüyle kovuşturma başlar." },
      { name: "Temyiz/İstinaf", text: "Karara karşı üst yargı yoluna gidilebilir." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "kosullu-saliverilme-oranlari"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "atasehir-gayrimenkul-avukati",
    name: "Ataşehir Gayrimenkul Avukatı",
    heroTitle: "Ataşehir Gayrimenkul Avukatı",
    heroSubtitle:
      "Site ve rezidans projelerindeki kat mülkiyeti uyuşmazlıkları, plaza/ofis kiralamaları ve tapu işlemlerinde hukuki destek sağlanır; davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Ataşehir Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Ataşehir'de kat mülkiyeti, tapu iptali, kira uyuşmazlıkları ve plaza/ofis taşınmazlarına ilişkin gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Avukat Furkan Arıkan (İstanbul Barosu, sicil no: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019 mezunu), Ataşehir'deki tapu, kat mülkiyeti ve kira uyuşmazlıklarında danışmanlık sağlar.",
    highlightCards: [
      { title: "Kat Mülkiyeti Uyuşmazlıkları", description: "Site yönetimi, ortak gider ve karar uyuşmazlıklarının çözümü." },
      { title: "Plaza/Ofis Kiralamaları", description: "Ticari nitelikli kira sözleşmelerinin hazırlanması ve denetimi." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Kentsel Dönüşüm", description: "Riskli yapı tespiti ve dönüşüm süreçlerinde hak sahipliği takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kat mülkiyeti ve site yönetimi uyuşmazlıklarına ilişkin danışmanlık",
      "Plaza ve ofis niteliğindeki taşınmazların kira sözleşmelerinin hazırlanması",
      "Tapu iptali ve tescil davalarının açılması",
      "Kentsel dönüşüm kapsamındaki hak sahipliği ve değer tespiti süreçleri",
      "Kira bedeli tespiti ve uyarlama davaları",
      "Taşınmaz satış vaadi sözleşmelerinin hukuki incelemesi",
    ],
    localParagraphs: [
      "Palladium ve Brandium gibi karma kullanımlı alışveriş-rezidans-plaza projelerinin de bulunduğu E-5 aksı boyunca yoğun bir site ve ofis kulesi dokusuna sahip Ataşehir'de, kat mülkiyeti ve site yönetimi kaynaklı uyuşmazlıklar sıklıkla gündeme gelmektedir.",
      "Bu tür uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Ataşehir'in kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    ],
    faqs: [
      { question: "Site yönetimiyle yaşanan bir ortak gider uyuşmazlığında ne yapılabilir?", answer: "Site yönetimiyle yaşanan ortak gider uyuşmazlığında öncelikle yönetim planı ve genel kurul kararları incelenir; gerekirse dava yoluna gidilebilir. Ataşehir'de yoğun site ve ofis kulesi dokusu nedeniyle kat mülkiyeti ve site yönetimi kaynaklı uyuşmazlıklar gündeme gelmektedir. Dava, Kartal'daki İstanbul Anadolu Adliyesi'nde görülür." },
      { question: "Ataşehir'de gayrimenkul davası hangi mahkemede görülür?", answer: "Gayrimenkul davası, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde görülür; Ataşehir'in kendi adliyesi bulunmadığından bu davalar Kartal'daki İstanbul Anadolu Adliyesi'nde açılır. Kural olarak taşınmazın bulunduğu yer mahkemesi yetkilidir. Görevli mahkeme, talebin niteliğine göre dosyada ayrıca belirlenir." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tapu iptali ve tescil davası açabilir. Dava, tapu kaydının hukuka aykırı oluştuğu iddiasına dayanır; tapu kaydı, sözleşme ve ilgili belgeler incelenerek hazırlanır. Ataşehir'deki taşınmaz davaları Kartal'daki İstanbul Anadolu Adliyesi'nde, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde görülür." },
      { question: "Plaza/ofis kira sözleşmesinde nelere dikkat edilmeli?", answer: "Plaza veya ofis kira sözleşmesinde kullanım amacı, kira artış oranı ve tahliye şartlarının açıkça düzenlenmesi önerilir. Ataşehir'de plaza ve ofis niteliğindeki taşınmazların kira sözleşmelerinde bedel ve süre şartlarının net belirlenmesi, uyuşmazlıkları önlemek açısından önem taşır. Sözleşmenin yazılı ve eksiksiz olması, ispat açısından da gereklidir." },
      { question: "Kentsel dönüşümde hak sahibinin onayı şart mı?", answer: "Riskli yapı tespiti sonrası süreç, kanunda öngörülen çoğunluk ve usul kurallarına göre ilerler; bu nedenle her dosyada her hak sahibinin onayı aranmayabilir. Kentsel dönüşüm kapsamında hak sahipliği ve değer tespiti süreçleri incelenir. Sürecin hangi çoğunlukla işleyeceği ve idari işlemlere karşı hangi yolların kullanılabileceği dosyaya göre değerlendirilir." },
    ],
    howToTitle: "Ataşehir'de Tapu Uyuşmazlığı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Kayıt İncelemesi", text: "Tapu ve imar durumu belgeleri incelenir." },
      { name: "Uyuşmazlığın Netleştirilmesi", text: "İddia ve dayanak deliller belirlenir." },
      { name: "Dava Açılması", text: "Yetkili mahkemede dava süreci başlatılır." },
      { name: "Sonuçlanma", text: "Karar veya bilirkişi raporu doğrultusunda süreç tamamlanır." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "atasehir-icra-avukati",
    name: "Ataşehir İcra Avukatı",
    heroTitle: "Ataşehir İcra Avukatı",
    heroSubtitle:
      "Alacak tahsili amacıyla icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır; icra daireleri, ilçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir.",
    metaTitle: "Ataşehir İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Ataşehir'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Ataşehir'deki alacaklı ve borçlu taraflara icra-iflas hukuku kapsamında danışmanlık veren Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "Ticari Alacaklar", description: "Şirketler arası fatura ve sözleşme alacaklarının takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "Şirketler arası ticari alacakların icra yoluyla tahsili",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Çok sayıda şirket genel müdürlüğü ve operasyon merkezinin bulunduğu Ataşehir'de, ticari ilişkilerden doğan fatura ve sözleşme alacaklarının icra yoluyla tahsili sık başvurulan bir yol olarak öne çıkmaktadır.",
      "Bu takiplere ilişkin uyuşmazlıklar, Ataşehir'in kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki icra mahkemelerinde görülür; borçlunun Ataşehir'de yerleşik olduğu takiplerde yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "İcra takibine sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlanabilir. İlamsız takipte doğrudan icra dairesine başvurulur, mahkeme kararı gerekmez. Borçlu Ataşehir'de yerleşikse yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak tespit edilir; alacağı gösteren belgelerin eksiksiz sunulması önemlidir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Ödeme emrine itiraz süresi, tebliğden itibaren 7 gündür (İİK m. 62). Süre tebligat tarihinden işlemeye başladığı için ödeme emrinin tebliğ tarihi dikkatle kontrol edilmelidir. Süresinde itiraz edilmezse takip ilerleyebilir; itiraz edilirse alacaklı itirazın iptali veya kaldırılması yoluna başvurabilir." },
      { question: "Şirketler arası bir fatura alacağı için icra takibi nasıl başlatılır?", answer: "Şirketler arası fatura alacağı için fatura ve varsa sözleşme belgeleri toplanarak yetkili icra dairesinde takip dosyası açılır. Borçlunun Ataşehir'de yerleşik olduğu takiplerde yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak belirlenir. Borçlu ödeme emrine yedi gün içinde itiraz edebilir (İİK m. 62); takibe ilişkin uyuşmazlıklar Kartal'daki icra mahkemelerinde görülür." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Haciz işlemi, kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir. Haciz, ödeme emrine süresinde itiraz edilmemesi veya itirazın kaldırılması gibi hallerde borçlunun mallarına uygulanır. Taşınmaz ve taşınır mal üzerinde haciz uygulanması ile satış işlemleri icra dairesi aracılığıyla yürütülür ve takip edilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Borçlu ödeme yapmazsa haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür. Takibin bu aşamaya ilerleyebilmesi için ödeme emrine itiraz edilmemiş veya itirazın ortadan kaldırılmış olması gerekir. Taşınmaz ve taşınır mal üzerinde haciz uygulanır, ardından satış yapılarak alacak tahsil edilir." },
    ],
    howToTitle: "Ataşehir'de İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "atasehir-idare-avukati",
    name: "Ataşehir İdare Avukatı",
    heroTitle: "Ataşehir İdare Avukatı",
    heroSubtitle:
      "İmar uygulamaları, kentsel dönüşüm işlemleri ve belediye kararlarına karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Ataşehir İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Ataşehir'de idari işlemlerin iptali, imar uygulamalarına itiraz ve tazminat davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nin 2019 mezunu olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, idari işlemlerin iptali ve tam yargı davalarında Ataşehir'deki müvekkillerine danışmanlık sağlamaktadır.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "İmar Uygulamaları", description: "Plan değişikliği ve ruhsat işlemlerine karşı dava süreçleri." },
      { title: "Kentsel Dönüşüm İşlemleri", description: "Riskli yapı tespitine ve süreç işlemlerine itiraz." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İmar planı ve plan değişikliği kararlarına karşı iptal davası açılması",
      "Belediye ruhsat işlemlerine itiraz edilmesi",
      "Kentsel dönüşüm sürecindeki idari işlemlere karşı hukuki destek",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "2008'den bu yana yoğun bir imar ve kentsel dönüşüm sürecinden geçen, planlı yerleşimiyle bilinen Ataşehir'de, imar planı değişiklikleri ve ruhsat işlemlerine ilişkin idari uyuşmazlıklar sık başvurulan dava konuları arasındadır.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "İmar planı değişikliğine karşı hangi sürede dava açılmalı?", answer: "İmar planı değişikliğine karşı ilan veya tebliğ tarihinden itibaren 60 gün içinde idare mahkemesinde dava açılabilir (İYUK m. 7). Dava süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür; bu nedenle sürenin başlangıç tarihi dikkatle tespit edilmelidir. Ataşehir'deki bu davalar İstanbul idare mahkemelerinde görülür." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ruhsat başvurusu reddedilirse ret kararına karşı idare mahkemesinde iptal davası açılabilir. Belediye ruhsat işlemlerine itiraz edilmesi bu kapsamdadır. Dava süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m. 7); bu nedenle ret kararının tebliğ tarihi saklanmalı ve süre takip edilmelidir." },
      { question: "Kentsel dönüşüm kapsamındaki bir tespite itiraz edilebilir mi?", answer: "Evet, kentsel dönüşüm kapsamındaki ilgili idari işleme karşı yasal süresi içinde dava açılabilir. Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m. 7). Kentsel dönüşüm sürecindeki idari işlemlere karşı hukuki destek sağlanır; tespit kararı, tebliğ evrakı ve ilgili belgeler incelenerek dava hazırlanır." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, idari para cezasına karşı yasal süresinde idare mahkemesinde dava açılabilir. İdari para cezalarına karşı dava süreçleri hizmet kapsamındadır. Dava süresi cezanın dayandığı kanuna göre değişebileceğinden cezanın tebliğ tarihi ve dayanağı olan tutanak ilk olarak incelenmeli, süre kaçırılmadan dava dilekçesi hazırlanmalıdır." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "İdarenin bir eyleminden zarar görenler, tam yargı davası yoluyla zararın tazminini talep edebilir. İdarenin işlem veya eyleminden kaynaklı zararlar için tazminat talebi hazırlanır. Dava açılmadan önce işlemin niteliği, tebliğ veya öğrenme tarihi ve zararı gösteren belgeler incelenir; dava İstanbul idare mahkemelerinde görülür." },
    ],
    howToTitle: "Ataşehir'de İdari İptal Davası Nasıl Açılır?",
    howToSteps: [
      { name: "İnceleme", text: "İptali istenen işlem ve ilan/tebliğ tarihi belirlenir." },
      { name: "Süre Takibi", text: "60 günlük yasal süre hesaplanır." },
      { name: "Dilekçe Hazırlığı", text: "Talep ve gerekçeler dilekçeye işlenir." },
      { name: "Yargılama", text: "İdare mahkemesi dosyayı inceleyip karar verir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: ["idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "atasehir-is-hukuku-avukati",
    name: "Ataşehir İş Hukuku Avukatı",
    heroTitle: "Ataşehir İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemesi davaları, ilçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Ataşehir İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Ataşehir'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan İstanbul Barosu'nda 72621 sicil numarasıyla kayıtlı olup 2019'da MEF Üniversitesi Hukuk Fakültesi'ni tamamlamıştır; iş hukuku alanında Ataşehir'deki çalışan ve işverenlere danışmanlık vermektedir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Plaza/Ofis Çalışanları", description: "Banka, holding ve şirket merkezlerinde çalışan personelin hakları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Banka, holding ve şirket merkezi personelinin işçilik alacaklarının tahsili",
      "Fazla mesai ve yıllık izin ücreti gibi diğer işçilik alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Migros Ticaret A.Ş. ve BASF Türk gibi şirketlerin genel müdürlüklerinin yanı sıra çok sayıda banka operasyon merkezinin E-5 hattındaki plaza ve kule yapılarında yer aldığı Ataşehir'de, beyaz yakalı çalışanların işçilik alacağı ve işe iade talepleri sık karşılaşılan uyuşmazlık türleri arasındadır.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları, Ataşehir'in kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki iş mahkemesinde görülür.",
    ],
    faqs: [
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Kıdem tazminatı, çalışma süresi ve son brüt (giydirilmiş) ücret esas alınarak hesaplanır. Haksız fesih halinde kıdem ve ihbar tazminatı davaları açılabilir. Hesaplama için iş sözleşmesi, bordro ve sigorta kayıtlarındaki çalışma süresi ile ücret bilgileri incelenir; bu belgeler dosyada bulunduğunda talep tutarı daha net belirlenir." },
      { question: "Ataşehir'de iş mahkemesi nerededir?", answer: "Ataşehir'in kendi adliyesi bulunmadığından iş mahkemesi, Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir. Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları bu adliyedeki iş mahkemesinde görülür. İşe iade için fesihten itibaren bir ay içinde arabulucuya başvurulur, son tutanaktan itibaren iki hafta içinde dava açılır." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "İşe iade sürecinin toplam süresi dosyaya göre değişebilir; bu nedenle belirli bir gün sayısı söylenemez. Süreç önce arabuluculukla başlar ve fesihten itibaren bir ay içinde başvurulur. Anlaşma olmazsa son tutanaktan itibaren iki hafta içinde iş mahkemesinde dava açılır; işe iade şartları İş Kanunu m. 18'e göre aranır." },
      { question: "Plaza/ofis çalışanlarının fazla mesai hakkı nasıl ispatlanır?", answer: "Plaza ve ofis çalışanlarının fazla mesai hakkı; giriş-çıkış kayıtları, e-posta ve mesai çizelgeleri ile tanık beyanıyla ispat edilebilir. Ataşehir'de plaza ve kule yapılarında çalışan personelin işçilik alacakları sık karşılaşılan uyuşmazlıklardandır. Bordro ve puantaj kayıtları da delil niteliğindedir; bu belgelerin saklanması ve dosyaya sunulması önemlidir." },
      { question: "İşe iade davası açmadan önce arabuluculuğa gitmek zorunlu mu?", answer: "Evet, işe iade davası açmadan önce dava şartı olarak öncelikle arabulucuya başvurulması gerekir. Başvuru, fesih bildiriminden itibaren bir ay içinde yapılır; anlaşma sağlanamazsa son tutanağın düzenlenmesinden itibaren iki hafta içinde iş mahkemesinde dava açılır. Arabulucuya başvurulmadan açılan dava usulden reddedilebilir." },
    ],
    howToTitle: "Ataşehir'de İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Fesih Değerlendirmesi", text: "İşten çıkarma gerekçesi ve usulü incelenir." },
      { name: "Arabulucuya Başvuru", text: "Yasal süre içinde arabuluculuk sürecine başlanır." },
      { name: "Dava Süreci", text: "Anlaşma olmazsa iş mahkemesinde dava açılır." },
      { name: "Sonuç", text: "Mahkeme kararı doğrultusunda işlem yapılır." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "giydirilmis-ucret-kavrami", "ise-iade-davasi"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "atasehir-kira-tahliye-avukati",
    name: "Ataşehir Kira ve Tahliye Avukatı",
    heroTitle: "Ataşehir Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Site ve rezidans konutlarının kiralanması, konut tahliyesi ve kira bedeli tespiti uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemesi davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Ataşehir Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Ataşehir'de kiracı tahliyesi, site/rezidans kiralama sözleşmesi uyuşmazlıkları ve kira bedeli tespitinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kira hukuku kapsamında Ataşehir'deki kiraya verenlere ve kiracılara danışmanlık veren, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Site/Rezidans Kiralamaları", description: "Toplu konut projelerindeki kiralama sözleşmesi uyuşmazlıkları." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Site ve rezidans konutlarına ilişkin kira sözleşmelerinin hazırlanması",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Toplu konut ve rezidans projelerinin yaygın olduğu, plaza/ofis merkezlerine yakınlığı nedeniyle kiracı talebinin yüksek seyrettiği Ataşehir'de, kira sözleşmelerinde bedel ve süre şartlarının net belirlenmesi uyuşmazlıkları önlemek açısından önem taşır.",
      "Bu davalara, Ataşehir'in kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki sulh hukuk mahkemesinde bakılır; kira sözleşmesinin yazılı ve eksiksiz olması, uyuşmazlık halinde ispat açısından önem taşır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kiracı; kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye edilebilir. Kira borcunda konutlarda 30 günlük süre verilerek ihtar çekilir (TBK m. 315); taahhütname geçerliyse icra yoluyla, ihtiyaç halinde ise dava yoluyla tahliye talep edilir. Her yöntemin şartları dosyadaki belgelere göre ayrıca incelenir." },
      { question: "Site içindeki bir konutun kira bedeli nasıl güncellenir?", answer: "Site içindeki konutun kira bedeli, sözleşmede belirlenen artış oranı veya yasal sınırlar çerçevesinde güncellenebilir; uyuşmazlık halinde tespit davası açılabilir. Ataşehir'de site ve rezidans konutlarında bedel ve süre şartlarının sözleşmede net belirlenmesi uyuşmazlıkları önlemek açısından önem taşır. Rayiç kira bedelinin tespiti ve uyarlanması davalarına sulh hukuk mahkemesi bakar." },
      { question: "Ataşehir'de tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir. Süre; tahliye sebebine, tebligatların tamamlanmasına ve delillerin toplanmasına bağlıdır. Ataşehir'de bu davalara Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki sulh hukuk mahkemesinde bakılır." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Rayiç bedel tespiti, mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Kira bedelinin tespiti ve uyarlanması için dava açılır; mahkeme taşınmazın rayiç kira bedelini değerlendirir. Başvuru sözleşme ve mevcut bedel belgeleriyle yapılır; Ataşehir'deki bu davalara Kartal'daki sulh hukuk mahkemesi bakar." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir; mahkemeye gitmek gerekmeyebilir. Taahhütnamenin geçerliliği ve içeriği önce incelenir. Taahhüde dayalı icra yoluyla tahliye işlemleri icra dairesinde yürütülür; taahhütname geçerli değilse tahliye dava yoluyla istenir." },
    ],
    howToTitle: "Ataşehir'de Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "atasehir-vergi-avukati",
    name: "Ataşehir Vergi Avukatı",
    heroTitle: "Ataşehir Vergi Avukatı",
    heroSubtitle:
      "Vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Ataşehir Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Ataşehir'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukat olarak Ataşehir'deki mükelleflere vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda danışmanlık vermektedir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Kurumlar Vergisi Uyuşmazlıkları", description: "Şirket merkezi bulunan mükelleflerin kurumlar vergisi incelemeleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Şirket merkezi mükelleflerinin kurumlar vergisi inceleme süreçlerinde danışmanlık",
      "Gayrimenkul kira gelirlerinin beyanına ilişkin uyuşmazlıklarda destek",
    ],
    localParagraphs: [
      "Ataşehir mükelleflerine ilişkin vergi işlemleri, İçerenköy Mahallesi'ndeki Kozyatağı Vergi Dairesi Müdürlüğü üzerinden yürütülür; bu müdürlük Atatürk, Barbaros, İçerenköy, İnönü, Kayışdağı, Küçükbakkalköy, Mevlana, Mimar Sinan, Yeni Çamlıca, Yeni Sahra ve Yenişehir mahallelerini kapsamaktadır.",
      "Çok sayıda şirket genel müdürlüğünün bulunduğu ilçede kurumlar vergisi incelemeleri de sık karşılaşılan konular arasındadır. İhbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "Ataşehir'de hangi vergi dairesi yetkilidir?", answer: "Ataşehir mükelleflerinin büyük bölümü, İçerenköy Mahallesi'ndeki Kozyatağı Vergi Dairesi Müdürlüğü üzerinden işlem yapar. Bu müdürlük Atatürk, Barbaros, İçerenköy, İnönü, Kayışdağı, Küçükbakkalköy, Mevlana, Mimar Sinan, Yeni Çamlıca, Yeni Sahra ve Yenişehir mahallelerini kapsar. Mükellefin bağlı olduğu daire ihbarname ve tebligat belgelerinden teyit edilir." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "İhbarnameye karşı tebliğden itibaren 30 gün içinde vergi mahkemesinde dava açılabilir (İYUK m. 7). Bu süre tebligat tarihinden başladığı için ihbarname evrakı saklanmalıdır. Uzlaşma başvurusu da tebliğden itibaren 30 gün içinde yapılabilir (VUK Ek m. 1); vergi ve ceza ihbarnamesi için süreler birlikte takip edilmelidir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "Ataşehir mükelleflerine ilişkin vergi uyuşmazlıkları İstanbul vergi mahkemelerinde görülür. Vergi işlemleri Kozyatağı Vergi Dairesi Müdürlüğü üzerinden yürütülür ve bu daireye ait tarhiyat ve cezalara karşı dava açılabilir. Dava açma süresi ihbarnamenin tebliğinden itibaren 30 gündür (İYUK m. 7); dilekçe vergi mahkemesine verilir." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma başvurusu dava hakkını ortadan kaldırmaz; uzlaşma sağlanamazsa kalan dava açma süresi korunur. Uzlaşma başvurusu tebliğden itibaren 30 gün içinde yapılır (VUK Ek m. 1), dava süresi ise 30 gündür (İYUK m. 7). Bu nedenle uzlaşma görüşmelerinde sürelerin birlikte takip edilmesi gerekir." },
      { question: "Kira geliri beyan edilmezse ne olur?", answer: "Kira geliri beyan edilmezse re'sen veya ikmalen tarhiyat ve buna bağlı ceza uygulanabilir; bu işlemlere karşı dava açılabilir. Gayrimenkul kira gelirlerinin beyanına ilişkin uyuşmazlıklarda destek sağlanır. Tarhiyata ilişkin ihbarnameye karşı dava süresi tebliğden itibaren 30 gündür (İYUK m. 7); tebliğ tarihi ve kira belgeleri bu nedenle önem taşır." },
    ],
    howToTitle: "Ataşehir'de Vergi İtirazı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "İnceleme", text: "Tarhiyat veya cezanın dayanağı ayrıntılı incelenir." },
      { name: "Yol Seçimi", text: "Uzlaşma mı yoksa doğrudan dava mı açılacağı kararlaştırılır." },
      { name: "Başvuru", text: "Süresi içinde vergi mahkemesine başvurulur veya uzlaşma istenir." },
      { name: "Sonuçlanma", text: "Mahkeme kararı veya uzlaşma tutanağıyla süreç biter." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: ["vergi-ihbarnamesine-itiraz-ve-uzlasma"],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "atasehir-borclar-hukuku-avukati",
    name: "Ataşehir Borçlar Hukuku Avukatı",
    heroTitle: "Ataşehir Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Ticari sözleşme uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; asliye hukuk mahkemesi davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Ataşehir Borçlar Hukuku Avukatı",
    metaDescription:
      "Ataşehir'de ticari sözleşmeler, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Sözleşme ve alacak kaynaklı uyuşmazlıklarda Ataşehir'deki müvekkillerine danışmanlık veren Furkan Arıkan, İstanbul Barosu'na kayıtlı (sicil no: 72621) ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunu bir avukattır.",
    highlightCards: [
      { title: "Ticari Sözleşmeler", description: "Şirketler arası hizmet ve tedarik sözleşmelerinden doğan uyuşmazlıklar." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Kira/Ofis Sözleşmeleri", description: "Plaza ve ofis kiralamalarından doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Şirketler arası hizmet ve tedarik sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Plaza ve ofis kiralamalarından doğan sözleşme uyuşmazlıkları",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Banka ve holding genel müdürlüklerinin yoğunlaştığı, ticari hayatın canlı olduğu Ataşehir'de, şirketler arası hizmet ve tedarik sözleşmelerinden doğan alacak ve tazminat uyuşmazlıkları sıkça karşılaşılan dava türleri arasındadır.",
      "Bu davalar, Ataşehir'in kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Sözleşmeyi ihlal eden taraftan ne talep edilebilir?", answer: "Sözleşmeyi ihlal eden taraf karşısında sözleşmeden dönme, ifa veya tazminat gibi hukuki yollara başvurulabilir. Hangi yolun seçileceği sözleşme şartlarına ve ihlalin niteliğine göre belirlenir. Şirketler arası hizmet ve tedarik sözleşmelerinden doğan uyuşmazlıklarda sözleşme metni, fatura ve yazışmalar incelenir; dava Kartal'daki İstanbul Anadolu Adliyesi'nde görülür." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Ticari alacak davası, niteliğine göre asliye ticaret mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür. Ataşehir'in kendi adliyesi bulunmadığından bu davalar anılan adliyede açılır. Bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabulucuya başvurulması gerekebilir; bu durum dosyanın niteliğine göre belirlenir." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, dava öncesi arabuluculuk her zaman şart değildir; yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Bu nedenle uyuşmazlığın ticari nitelikte olup olmadığı önce belirlenir. Şart aranan hallerde arabulucuya başvurulmadan açılan dava usulden reddedilebilir." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Zamanaşımına uğramış alacak, borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir. Zamanaşımı mahkemece kendiliğinden dikkate alınmaz, borçlunun itirazı gerekir. Bu nedenle alacak ve ihtar sürelerinin kontrolü önemlidir; alacak davası ve icra takibi öncesinde zamanaşımı durumu belgelerle incelenmelidir." },
      { question: "Ofis kira sözleşmesinin erken feshinde ne olur?", answer: "Ofis kira sözleşmesinin erken feshinde sözleşme hükümleri ve kanuni düzenlemeler çerçevesinde tazminat yükümlülüğü doğabilir. Plaza ve ofis kiralamalarından doğan sözleşme uyuşmazlıklarında sözleşmedeki fesih ve süre hükümleri incelenir. Bu nedenle fesih bildirimi yapılmadan önce sözleşme metninin ve ödeme belgelerinin gözden geçirilmesi önem taşır." },
    ],
    howToTitle: "Ataşehir'de Alacak Davası Süreci Nasıl İşler?",
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

export const atasehirServices: PseoService[] = [...atasehirBaseServices, atasehirMiras];
