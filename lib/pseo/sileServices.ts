import type { PseoService } from "./types";
import { sileMiras } from "./miras/sileMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const sileBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "sile-avukat",
    name: "Şile Avukat",
    heroTitle: "Şile Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan; Karadeniz kıyısında yazlık konutların, orman ve tarım arazilerinin, pansiyon ve butik konaklama işletmelerinin yan yana durduğu Şile'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçedeki adli işlemler Şile Adliyesi'nde yürütülür.",
    metaTitle: "Şile Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Şile'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Merkezdeki Balibey, Çavuş ve Hacıkasım mahalleleri ile Ağva'ya uzanan kıyı hattında yaşayan ve çalışan müvekkillerine ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında danışmanlık ve temsil hizmeti sunar; büro Şile'de değil Beşiktaş/Sinanpaşa'dadır, randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturmada müdafilik ve itiraz süreçleri." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka dosyalarında temsil." },
      { title: "Gayrimenkul Hukuku", description: "Yazlık, arsa ve kıyı yakınındaki taşınmaz uyuşmazlıkları." },
      { title: "İş Hukuku", description: "Konaklama ve hizmet sektörü işçilerinin alacak ve işe iade davaları." },
      { title: "İcra Hukuku", description: "Alacak takibi ve ödeme emrine itiraz süreçleri." },
      { title: "İdare Hukuku", description: "İmar, yıkım ve ruhsat işlemlerine karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Emlak, kira geliri ve tarhiyat uyuşmazlıkları." },
      { title: "Borçlar Hukuku", description: "İnşaat, eser ve kira dışı sözleşme uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma, kovuşturma ve tutukluluğa itiraz süreçlerinde ceza hukuku desteği",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Yazlık ve arsa alım satımlarında tapu ve imar durumu incelemesi",
      "İşe iade, kıdem ve fazla mesai taleplerinde iş hukuku danışmanlığı",
      "Ödeme emrine itiraz ve alacak tahsilinde icra hukuku desteği",
      "İmar, yıkım ve ruhsat işlemlerine karşı idari dava süreçleri",
      "Vergi tarhiyatına itiraz, uzlaşma ve dava takibi",
      "Eser, kira ve diğer sözleşmelerden doğan alacak ve tazminat davaları",
    ],
    localParagraphs: [
      "Şile'de yılın büyük bölümünde ilçede yaşayan nüfus ile yazın gelen yazlık sakinleri ve hafta sonu ziyaretçileri arasında belirgin bir fark oluşur. Bu mevsimsel yapı; yazlık kiralama, site yönetimi, konaklama işletmeciliği ve kıyıya yakın taşınmazlar üzerinde yoğunlaşan uyuşmazlıkları beraberinde getirir.",
      "Şile Adliyesi, İstanbul Anadolu Adliyesi'ne bağlı mülhakat adliyelerden biridir; vergisel işlemler ise Şile Vergi Dairesi Müdürlüğü nezdinde yürütülür. Dosyanın türüne göre görevli ve yetkili mahkemenin Şile'de mi yoksa Anadolu Adliyesi'nde mi olduğu ayrıca belirlenir.",
    ],
    faqs: [
      { question: "Şile'deki davalar hangi adliyede görülür?", answer: "Şile'deki davalar Şile Adliyesi'nde veya İstanbul Anadolu Adliyesi'nde görülür. Şile Adliyesi, İstanbul Anadolu Adliyesi'ne bağlı bir mülhakat adliyedir; görevli ve yetkili mahkeme dava türüne göre ayrıca belirlenir. Dosyanın türü bu nedenle başvuru öncesinde değerlendirilir. Vergisel işlemler ise Şile Vergi Dairesi Müdürlüğü nezdinde yürütülür." },
      { question: "Büro Şile'de mi bulunuyor?", answer: "Hayır, büro Şile'de değil, Beşiktaş/Sinanpaşa'dadır. Şile'de büro bulunmaz; ancak merkezde ve Ağva'ya uzanan kıyı hattında yaşayan veya çalışan müvekkillere de aynı kapsamda danışmanlık ve temsil hizmeti verilir. Randevu talepleri WhatsApp veya telefonla iletilebilir; görüşme çevrim içi de planlanabilir." },
      { question: "Randevu nasıl alınır?", answer: "Randevu, WhatsApp veya telefon aracılığıyla alınır. İlk iletişimde konunuz kısaca paylaşılır, ardından uygun bir danışmanlık görüşmesi günü belirlenir. Danışmanlık görüşmesinde hukuki durumunuz değerlendirilir; temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir ve mahkeme ile idari merciler nezdinde süreç takip edilir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku alanlarında hizmet verilir. Bunlar arasında soruşturma ve kovuşturma savunması, boşanma ve velayet davaları, yazlık ve arsa alım satımlarında tapu ve imar incelemesi, işe iade, ödeme emrine itiraz, idari davalar ve vergi uyuşmazlıkları yer alır." },
      { question: "Yazlık satın almadan önce hangi kayıtlar incelenmelidir?", answer: "Yazlık satın almadan önce tapu kaydı, imar durumu, yapı kullanma izni ve taşınmazın kıyı, orman veya koruma alanı sınırlarına göre konumu incelenmelidir. Tapudaki takyidatlar da kontrol edilmelidir. Yazlık ve arsa alım satımlarında tapu ve imar durumu incelemesi bu amaçla yapılır." },
      { question: "Yurt dışında yaşayan biri Şile'deki davasını takip ettirebilir mi?", answer: "Evet, düzenlenecek vekaletname ile dava ve icra işlemleri vekil aracılığıyla yürütülebilir. Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir ve mahkeme ile idari merciler nezdinde süreç takip edilir. İlk iletişim WhatsApp veya telefonla kurulabilir, görüşme çevrim içi yapılabilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Danışmanlık görüşmesi ücret karşılığı yapılır; tutar dosyanın niteliğine göre değişir ve randevu sırasında bilgi verilir. Görüşmede hukuki durumunuz değerlendirilir. Temsil kararı alınırsa vekalet düzenlenir ve belgeler derlenir. Ücret ve süreç konusundaki sorular görüşme öncesinde de iletilebilir." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Görüşmeler tercihe göre yüz yüze veya çevrim içi olarak planlanabilir. Büro Beşiktaş/Sinanpaşa'dadır ve Şile'de büro bulunmadığından uzaktan görüşme de seçenek olarak sunulur. İlk iletişim WhatsApp veya telefonla kurulur, ardından danışmanlık randevusu verilir; danışmanlık görüşmesi ücret karşılığı yapılır." },
    ],
    howToTitle: "Şile'de Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Şile Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "sile-bosanma-avukati",
    name: "Şile Boşanma Avukatı",
    heroTitle: "Şile Boşanma Avukatı",
    heroSubtitle:
      "Şile'de yaşayan eşler için anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal rejimi tasfiyesi talepleri, yetkili aile mahkemesi nezdinde takip edilir.",
    metaTitle: "Şile Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Şile'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Şile'de ikamet eden ve boşanma, velayet ya da nafaka sorunuyla karşılaşan kişilere aile hukuku alanında temsil sağlayan Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur.",
    highlightCards: [
      { title: "Anlaşmalı Boşanma", description: "Protokolün hazırlanması ve duruşma temsili." },
      { title: "Çekişmeli Boşanma", description: "Kusur iddialarının ve delillerin dosyaya sunulması." },
      { title: "Yazlık ve İkinci Konut", description: "Şile'deki yazlığın mal rejimi tasfiyesinde değerlendirilmesi." },
      { title: "Velayet ve Nafaka", description: "Çocuğun yararına uygun düzenleme ve nafaka talepleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Evlilik birliğinin sarsılmasına dayalı çekişmeli boşanma davaları",
      "Velayet, kişisel ilişki ve iştirak nafakası taleplerinde temsil",
      "Yoksulluk nafakasının tespiti, artırılması ve kaldırılması davaları",
      "Şile'deki yazlık ve arsa gibi taşınmazların edinilmiş mallara katılma rejimi kapsamında değerlendirilmesi",
      "Boşanmaya bağlı maddi ve manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Şile'de birçok ailenin İstanbul'un başka bir ilçesinde ikamet edip kıyıda yazlık ya da ikinci konut bulundurması, boşanmada hangi taşınmazın evlilik içinde edinildiği, hangisinin miras veya bağışla geldiği sorusunu öne çıkarır. Edinilmiş mallara katılma rejiminde bu ayrım tasfiyenin kapsamını belirler.",
      "Boşanma davasında yetki, Türk Medeni Kanunu m.168 uyarınca eşlerden birinin yerleşim yeri veya davadan önce son altı aydan beri birlikte oturdukları yer mahkemesine aittir; yani Şile'de yerleşik veya Şile'de birlikte yaşamış eşler için dava, yetkili aile mahkemesinde görülür.",
    ],
    faqs: [
      { question: "Boşanma davası hangi mahkemede açılır?", answer: "Boşanma davası, eşlerden birinin yerleşim yerindeki veya davadan önce son altı ay birlikte oturdukları yerdeki aile mahkemesinde açılır (TMK m.168). Anlaşmalı veya çekişmeli boşanma, velayet ve nafaka talepleri de aynı aile mahkemesinde görülür; dava hazırlığı ve duruşma temsili bu kapsamda yürütülür." },
      { question: "Anlaşmalı boşanma için evliliğin ne kadar sürmesi gerekir?", answer: "Anlaşmalı boşanma için evliliğin en az bir yıl sürmüş olması gerekir. TMK m.166/3 uyarınca eşlerin protokol konusunda anlaşması ve duruşmada birlikte beyanda bulunması aranır. Protokolde velayet, nafaka, mal rejimi ve varsa tazminata ilişkin hususlar düzenlenir; protokol hazırlığı ve duruşma temsili bu kapsamda yürütülür." },
      { question: "Yazlık evlilik içinde alındıysa mal paylaşımına girer mi?", answer: "Evlilik süresince edinilmiş ve kişisel mal sayılmayan taşınmazlar katılma alacağı hesabında dikkate alınır. Bu nedenle evlilik içinde alınan yazlık, edinilmiş mallara katılma rejimi kapsamında değerlendirilir. Edinim tarihi ve şekli hesaplamada belirleyici olduğundan tapu kaydı ve satın alma belgeleri incelenir." },
      { question: "Miras kalan yazlık paylaşılır mı?", answer: "Miras yoluyla edinilen mal kural olarak kişisel mal sayılır, bu nedenle katılma alacağı hesabına dahil edilmez. Ancak mala bağlı değer artışı ayrıca değerlendirilebilir. Şile'deki yazlık ve arsa gibi taşınmazlar edinilmiş mallara katılma rejimi kapsamında incelenir; edinim şeklini gösteren tapu kaydı belirleyici olur." },
      { question: "Şile'de oturup çocukla başka ilçede çalışan eş velayet davasında nasıl etkilenir?", answer: "Velayette çocuğun yararı esas alınır; ikamet, eğitim ve bakım düzeni birlikte değerlendirilir. Bu nedenle eşlerin ikamet ve çalışma yerinin farklı ilçelerde olması tek başına sonucu belirlemez. Velayet, kişisel ilişki ve iştirak nafakası talepleri aile mahkemesinde birlikte ele alınır." },
    ],
    howToTitle: "Şile'de Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "Durum Değerlendirmesi", text: "Evlilik süresi, çocuklar ve mal varlığı gözden geçirilir." },
      { name: "Dava Dilekçesi", text: "Yetkili aile mahkemesine boşanma dilekçesi sunulur." },
      { name: "Yargılama", text: "Duruşmalar yapılır, deliller ve tanıklar dinlenir." },
      { name: "Karar ve Uygulama", text: "Velayet, nafaka ve mal rejimi hükümleri karar ile belirlenir." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanmada-nafaka-turleri", "ziynet-esyasi-davasi"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "sile-ceza-avukati",
    name: "Şile Ceza Avukatı",
    heroTitle: "Şile Ceza Avukatı",
    heroSubtitle:
      "Şile'de gözaltı, ifade, tutuklama ve kovuşturma aşamalarında müdafilik; kıyı ve orman yolları üzerindeki trafik olayları ile yazlık bölgelerdeki mülkiyete karşı suçlarda savunma desteği sağlanır.",
    metaTitle: "Şile Ceza Avukatı | Müdafilik",
    metaDescription:
      "Şile'de soruşturma, kovuşturma, tutukluluğa itiraz ve müdafilik süreçlerinde ceza avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Şile'deki müvekkillerine ceza hukuku alanında müdafilik ve danışmanlık sağlayan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Gözaltı ve İfade", description: "Kolluk ve savcılık ifadesinde müdafi hazır bulunması." },
      { title: "Tutuklulukla İlgili İtiraz", description: "Sulh ceza hakimliği kararlarına karşı itiraz yolu." },
      { title: "Trafik Kazaları", description: "Taksirle yaralama ve ölüme neden olma dosyalarında savunma." },
      { title: "İmar ve Orman Suçları", description: "Kaçak yapı ve orman kanununa aykırılık iddialarında savunma." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı ve ifade aşamasında müdafilik",
      "Soruşturma dosyasının incelenmesi ve savunma stratejisi hazırlanması",
      "Tutuklama ve adli kontrol kararlarına itiraz",
      "Taksirle yaralama ve ölüme neden olma suçlarında savunma",
      "Yazlıklarda hırsızlık ve mala zarar verme dosyalarında müşteki veya şüpheli vekilliği",
      "İmar Kanunu ve Orman Kanunu kaynaklı suç isnatlarında savunma",
    ],
    localParagraphs: [
      "Şile'de yaz aylarında kıyı yolları ve Şile Yolu üzerindeki trafik yoğunluğu artar; Şile-Ağva hattındaki kazalar taksirle yaralama veya ölüme neden olma suçlamalarına yol açabilir. Kusur oranı, bilirkişi raporu ve kaza tespit tutanağı bu dosyalarda belirleyicidir.",
      "Kışın boş kalan yazlık sitelerinde hırsızlık ve mala zarar verme olayları ile kaçak yapı ve orman alanındaki faaliyetlerden doğan yargılamalar yetkili mahkemede görülür. Gözaltı süresi Ceza Muhakemesi Kanunu m.91 uyarınca kural olarak 24 saati geçemez.",
    ],
    faqs: [
      { question: "Gözaltında avukat talep etme hakkı var mı?", answer: "Evet, şüpheli her aşamada müdafi yardımından yararlanabilir. Gözaltı ve ifade aşamasında müdafilik yapılır; şüpheli ifade vermeden önce avukatıyla görüşebilir. Soruşturma dosyasının incelenmesi ve savunma stratejisinin hazırlanması da müdafi aracılığıyla yürütülür; bu nedenle ilk iletişimin vakit kaybetmeden kurulması önemlidir." },
      { question: "Tutuklama kararına itiraz süresi kaçtır?", answer: "Ceza Muhakemesi Kanunu m.268 uyarınca tutuklama kararına itiraz süresi karardan itibaren 7 gündür. Tutuklama CMK m.100/101 kapsamında değerlendirilir. Tutuklama ve adli kontrol kararlarına karşı itiraz bu süre içinde dilekçeyle yapılır; süre kaçırılmaması için dosyanın ve kararın hızlıca incelenmesi gerekir." },
      { question: "Gözaltı süresi en fazla ne kadardır?", answer: "Gözaltı süresi kural olarak 24 saattir; toplu işlenen suçlarda kanunda öngörülen ek süreler uygulanabilir. Gözaltı süresince şüpheli müdafi yardımından yararlanabilir. Gözaltı ve ifade aşamasında müdafilik yapılır; sürenin sonunda tutuklama veya adli kontrol gibi kararlar gündeme gelebilir." },
      { question: "Trafik kazasında karşı taraf yaralandıysa ne olur?", answer: "Trafik kazasında karşı taraf yaralandıysa taksirle yaralama suçu kapsamında soruşturma başlatılabilir; kusur durumu bilirkişi incelemesiyle belirlenir. Bu nedenle bilirkişi raporunun içeriği savunma bakımından önem taşır. Taksirle yaralama ve ölüme neden olma suçlarında soruşturma dosyası incelenerek savunma hazırlanır." },
      { question: "Kaçak yapı iddiası ceza davasına dönüşebilir mi?", answer: "Evet, İmar Kanunu hükümlerine aykırılık halinde idari yaptırımların yanında cezai soruşturma da açılabilir. Bu nedenle kaçak yapı iddiasında hem idari işlemlere karşı hem de suç isnadına karşı savunma gerekebilir. İmar Kanunu ve Orman Kanunu kaynaklı suç isnatlarında dosya buna göre incelenir." },
    ],
    howToTitle: "Şile'de Ceza Yargılaması Nasıl İlerler?",
    howToSteps: [
      { name: "İfade Aşaması", text: "Müdafi eşliğinde kolluk veya savcılık ifadesi verilir." },
      { name: "Soruşturma", text: "Deliller toplanır, gerekirse tutuklama veya adli kontrol değerlendirilir." },
      { name: "İddianame ve Kovuşturma", text: "Dava açılırsa duruşmalarda savunma sunulur." },
      { name: "Karar ve Kanun Yolları", text: "Hüküm sonrası istinaf ve temyiz yolları değerlendirilir." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["tutukluluga-itiraz", "ceza-hukukunda-etkin-pismanlik", "kosullu-saliverilme-oranlari"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "sile-gayrimenkul-avukati",
    name: "Şile Gayrimenkul Avukatı",
    heroTitle: "Şile Gayrimenkul Avukatı",
    heroSubtitle:
      "Şile'de yazlık, arsa ve tarla alım satımlarında tapu kayıtlarının, imar durumunun ve kıyı ile orman sınırlarının incelenmesi; tapu iptali, ortaklığın giderilmesi ve site yönetimi uyuşmazlıklarında dava takibi sağlanır.",
    metaTitle: "Şile Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Şile'de tapu iptali, ortaklığın giderilmesi, yazlık ve arsa alım satımı ile kat mülkiyeti uyuşmazlıklarında avukatlık hizmeti sunulmaktadır.",
    aboutParagraph:
      "Şile'deki taşınmaz uyuşmazlıklarında tapu, imar ve kat mülkiyeti mevzuatı kapsamında danışmanlık yapan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Tapu İncelemesi", description: "Satış öncesi tapu, takyidat ve imar durumunun kontrolü." },
      { title: "Kıyı ve Orman Sınırı", description: "Taşınmazın kıyı kenar çizgisi veya orman sınırına göre konumunun değerlendirilmesi." },
      { title: "Ortaklığın Giderilmesi", description: "Paylı mülkiyette satış yoluyla paydaşlığın sona erdirilmesi." },
      { title: "Site ve Aidat", description: "Yazlık sitelerinde yönetim planı ve aidat uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Yazlık, arsa ve tarla alım satımında tapu ve takyidat incelemesi",
      "Taşınmazın kıyı kenar çizgisi, orman veya koruma alanı sınırına göre durumunun araştırılması",
      "Tapu iptali ve tescil davaları",
      "Ortaklığın giderilmesi (izale-i şuyu) davaları",
      "Kadastro tespitine itiraz ve zilyetlik kaynaklı davalar",
      "Yazlık sitelerinde aidat, ortak gider ve yönetim planı uyuşmazlıkları",
    ],
    localParagraphs: [
      "Şile'de Karadeniz kıyısındaki taşınmazlar 3621 sayılı Kıyı Kanunu'ndaki kıyı kenar çizgisi düzenlemelerine, geniş orman örtüsü nedeniyle de orman mevzuatına tabi olabilir. Bu nedenle Ağva, Kumbaba, Kabakoz gibi bölgelerde taşınmaz alırken tapudaki niteliğin yanı sıra imar planı ve koruma statüsü de kontrol edilmelidir.",
      "Yazlık sitelerinde ortak giderlere katılmayan kat malikine karşı 634 sayılı Kat Mülkiyeti Kanunu m.20 uyarınca gecikme tazminatı istenebilir; kış aylarında kullanılmayan siteler, yönetim kurulu kararlarının ve aidat alacaklarının tahsilinde ayrı bir takip gerektirebilir.",
    ],
    faqs: [
      { question: "Yazlık almadan önce hangi belgelere bakılmalıdır?", answer: "Yazlık almadan önce güncel tapu kaydı, takyidat bilgileri, imar durumu, yapı ruhsatı ve yapı kullanma izni incelenmelidir. Taşınmazın kıyı kenar çizgisi, orman veya koruma alanı sınırına göre durumu da araştırılır. Tapu ve takyidat incelemesi, satın alma kararından önce yapılması gereken ilk kontrollerdendir." },
      { question: "Taşınmaz kıyıda ise yapılaşma serbest midir?", answer: "Hayır, Kıyı Kanunu'ndaki kıyı ve kıyı kenar çizgisi hükümleri yapılaşmayı sınırlar; her parselin durumu ayrıca araştırılmalıdır. Taşınmazın kıyı kenar çizgisi, orman veya koruma alanı sınırına göre durumu incelenir. Bu inceleme, alım satımdan önce yapılaşma ve kullanım olanaklarını belirlemek bakımından önemlidir." },
      { question: "Tapu iptali ve tescil davası hangi hallerde açılır?", answer: "Tapu iptali ve tescil davası, tapunun hukuka aykırı biçimde oluşması, muvazaa veya ehliyetsizlik gibi hallerde açılabilir. Tapu kaydı ile gerçek durum arasında fark varsa hak sahibi bu davayı açar. Dava öncesinde tapu kaydı ve tescile dayanak belgeler incelenir; talep, tescilin hukuka aykırılığına göre hazırlanır." },
      { question: "Paydaşlar arasında anlaşma olmazsa ne yapılır?", answer: "Paydaşlar arasında anlaşma olmazsa ortaklığın giderilmesi (izale-i şuyu) davasıyla taşınmazın satışı veya payların paylaştırılması yoluna gidilebilir. Dava, taşınmazın tapu kaydı ve paydaşların payları incelenerek açılır. Mahkeme, paylaşımın şekline dosyadaki duruma göre karar verir; anlaşma olmaması halinde bu dava açılır." },
      { question: "Yazlık sitesinde aidat ödemeyen malike ne yapılabilir?", answer: "Yönetim planı ve Kat Mülkiyeti Kanunu çerçevesinde aidat ödemeyen malike karşı icra takibi ve gecikme tazminatı talep edilebilir. Site aidat ve ortak gider alacaklarının takibi icra yoluyla yürütülür. Alacağın dayanağı olan yönetim planı ve ödeme kayıtları takip öncesinde incelenir." },
      { question: "Kadastro tespitine itiraz için süre var mı?", answer: "Evet, kadastro tutanaklarının askı ilanı süresi içinde itiraz edilmesi gerekir; süreler dosyaya göre ayrıca kontrol edilir. Kadastro tespitine itiraz ve zilyetlik kaynaklı davalar bu kapsamda açılır. İlanın tarihi ve tutanak içeriği, itirazın hangi süre içinde yapılacağını belirlemek için ilk incelenen unsurlardır." },
    ],
    howToTitle: "Şile'de Tapu İptali ve Tescil Davası Nasıl İşler?",
    howToSteps: [
      { name: "Tapu ve Belge İncelemesi", text: "Tapu kaydı, işlem dayanağı ve ilgili belgeler toplanır." },
      { name: "Dava Dilekçesi", text: "Taşınmazın bulunduğu yerdeki yetkili asliye hukuk mahkemesinde dava açılır." },
      { name: "Keşif ve Bilirkişi", text: "Taşınmaz yerinde incelenir, bilirkişi raporu alınır." },
      { name: "Karar ve Tescil", text: "Kesinleşen karar tapu müdürlüğüne bildirilerek uygulanır." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi", "muris-muvazaasi-nedir"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "sile-icra-avukati",
    name: "Şile İcra Avukatı",
    heroTitle: "Şile İcra Avukatı",
    heroSubtitle:
      "Şile'de pansiyon, restoran ve inşaat gibi mevsimlik işlerden doğan alacaklarda icra takibi başlatma, ödeme emrine itiraz ve haciz aşamalarında temsil sağlanır.",
    metaTitle: "Şile İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Şile'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Şile'deki esnaf, işletme sahibi ve bireysel müvekkillere icra ve iflas hukuku kapsamında danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukat olup 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Mevsimlik İşletme Alacakları", description: "Yaz sezonunda doğan konaklama ve hizmet alacaklarının takibi." },
      { title: "İtiraz Süreçleri", description: "Ödeme emrine itiraz, itirazın iptali ve kaldırılması." },
      { title: "Taşınmaz Haczi", description: "Tapuya haciz şerhi konulması ve satış aşaması." },
      { title: "Yazlık Sitesi Aidatları", description: "Ödenmeyen ortak gider ve aidat alacaklarının tahsili." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sezonluk konaklama, yeme-içme ve hizmet alacaklarının icra yoluyla takibi",
      "Senet, fatura veya sözleşmeye dayalı ilamsız takip dosyası açılması",
      "Ödeme emrine itiraz sürecinin yürütülmesi",
      "İtirazın iptali ve itirazın kaldırılması davaları",
      "Taşınmaz üzerine haciz şerhi konulması ve satış işlemleri",
      "Site aidat ve ortak gider alacaklarının takibi",
    ],
    localParagraphs: [
      "Şile'de gelirin önemli kısmı yaz sezonunda yoğunlaştığından pansiyon, restoran ve tedarikçi arasındaki ödeme gecikmeleri sezon sonunda icra takibine dönüşebilir. Borçluya gönderilen ödeme emrine itiraz süresi İcra ve İflas Kanunu m.62 uyarınca 7 gündür.",
      "Borçlunun taşınmazı Şile'deyse haciz tapu siciline şerh edilerek uygulanır; itirazın iptali davası ise İcra ve İflas Kanunu m.67 uyarınca itirazın tebliğinden itibaren bir yıl içinde açılmalıdır. Yetkili icra dairesi kural olarak borçlunun yerleşim yerine göre belirlenir.",
    ],
    faqs: [
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Ödeme emrine itiraz süresi, ödeme emrinin tebliğinden itibaren 7 gündür (İİK m.62). Bu süre içinde yapılan itiraz takibi durdurur. Alacaklı bundan sonra itirazın iptali davası açabilir veya itirazın kaldırılmasını isteyebilir; süre kaçırılırsa takip kesinleşir ve haciz aşamasına geçilebilir." },
      { question: "İtirazın iptali davası için süre var mı?", answer: "Evet, itirazın iptali davası, itirazın alacaklıya tebliğinden itibaren bir yıl içinde açılmalıdır. Ödeme emrine itiraz takibi durdurduğunda alacaklı bu davayı açabilir veya uygun belgesi varsa itirazın kaldırılmasını isteyebilir. Süre dolmadan dosya ve alacağın dayanak belgeleri incelenir." },
      { question: "Pansiyon veya restoran alacağı için hangi belgelerle takip yapılır?", answer: "Pansiyon veya restoran alacağı için fatura, sözleşme, senet, çek veya hesap kaydı gibi alacağı gösteren belgelerle takip başlatılabilir. Sezonluk konaklama, yeme-içme ve hizmet alacakları icra yoluyla takip edilir. Borçlu ödeme emrine 7 gün içinde itiraz etmezse takip kesinleşir." },
      { question: "Şile'deki taşınmaza haciz konulabilir mi?", answer: "Evet, borçlunun malik olduğu taşınmaz üzerine tapu siciline haciz şerhi konulabilir. Taşınmaz üzerine haciz şerhi konulması ve satış işlemleri icra dosyasında takip edilir. Takibin kesinleşmesinden sonra haciz uygulanır; gerekirse haczedilen taşınmazın satışı yoluna gidilir; haciz şerhi tapu kaydında görünür." },
      { question: "Hangi mallar haczedilemez?", answer: "İcra ve İflas Kanunu m.82'de sayılan, borçlunun ve ailesinin zorunlu ihtiyaçlarına ilişkin mallar haczedilemez. Bu nedenle haciz işlemi uygulanırken borçlunun mal varlığının hangi kısmının kanuni istisna kapsamında kaldığı da incelenir. Haczedilebilir mallar üzerinde ise takip kesinleştikten sonra işlem yapılabilir." },
    ],
    howToTitle: "Şile'de İcra Takibi Hangi Aşamalardan Oluşur?",
    howToSteps: [
      { name: "Belge Derlemesi", text: "Alacağa dayanak belgeler ve borçlu bilgileri hazırlanır." },
      { name: "Takip Talebi", text: "Yetkili icra dairesinde takip dosyası açılır." },
      { name: "Ödeme Emri ve İtiraz", text: "Borçluya ödeme emri tebliğ edilir, itiraz halinde hukuki yollar değerlendirilir." },
      { name: "Haciz ve Satış", text: "Kesinleşen takipte haciz ve satış işlemleri yürütülür." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "sile-idare-avukati",
    name: "Şile İdare Avukatı",
    heroTitle: "Şile İdare Avukatı",
    heroSubtitle:
      "Şile'de imar para cezası, yıkım kararı, yapı ruhsatı ve kamulaştırma gibi idari işlemlere karşı iptal ve tam yargı davaları ile yürütmenin durdurulması talepleri takip edilir.",
    metaTitle: "Şile İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Şile'de imar, yıkım, ruhsat ve kamulaştırma işlemlerine karşı iptal ve tam yargı davalarında avukatlık hizmeti sunulmaktadır.",
    aboutParagraph:
      "Şile'deki idari işlemlere karşı dava süreçlerinde müvekkillerine hukuki destek veren Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur.",
    highlightCards: [
      { title: "İmar ve Yıkım İşlemleri", description: "Yıkım kararı ve imar para cezalarına karşı dava." },
      { title: "Ruhsat ve İzin", description: "Yapı ruhsatı, iskan ve işletme izinlerinde red veya iptal işlemleri." },
      { title: "Kamulaştırma", description: "Bedel tespiti ve kamulaştırmasız el atma davaları." },
      { title: "Yürütmeyi Durdurma", description: "İşlemin uygulanmasının dava sonuçlanana dek durdurulması talebi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Yıkım kararı ve imar para cezasına karşı iptal davaları",
      "Yapı ruhsatı ve yapı kullanma izni işlemlerinde başvuru ve dava desteği",
      "Pansiyon ve butik otel gibi işletmelerin ruhsat ve izin uyuşmazlıkları",
      "Kamulaştırma bedel tespiti ve kamulaştırmasız el atma davaları",
      "Yürütmenin durdurulması taleplerinin hazırlanması",
      "Tam yargı davalarıyla idarenin eyleminden doğan zararın talebi",
    ],
    localParagraphs: [
      "Şile'de kıyı, orman ve koruma alanlarının iç içe bulunması imar işlemlerini daha çok kurumu ilgilendiren bir konuya dönüştürür; belediye, valilik ve çevre idaresi gibi farklı kurumlar aynı parsel hakkında işlem tesis edebilir. Bu nedenle işlemi yapan idarenin ve yetkili mahkemenin doğru belirlenmesi önemlidir.",
      "İdari işlemlere karşı iptal davası, 2577 sayılı İdari Yargılama Usulü Kanunu m.7 uyarınca tebliğden itibaren 60 gün içinde açılmalıdır. Yıkım kararı gibi geri dönüşü zor işlemlerde yürütmenin durdurulması talebi dilekçede ayrıca ileri sürülebilir.",
    ],
    faqs: [
      { question: "İdari işleme karşı dava süresi kaçtır?", answer: "İdari işleme karşı dava süresi genel olarak yazılı bildirimden itibaren 60 gündür (İYUK m.7). Vergi davalarında bu süre 30 gündür. Süre kaçırılırsa dava usulden reddedilebileceğinden idari işlemin tebliğ tarihi önemlidir; yıkım kararı ve imar para cezasına karşı iptal davaları bu süre içinde açılır." },
      { question: "Yıkım kararına karşı dava açılabilir mi?", answer: "Evet, yıkım kararına karşı işlemin iptali ve yürütmenin durdurulması talebiyle idare mahkemesinde dava açılabilir. Dava süresi, yazılı bildirimden itibaren 60 gündür (İYUK m.7). Yıkım kararı ve imar para cezasına karşı iptal davalarında kararın dayanağı ve tebliğ tarihi dava dilekçesi hazırlanırken incelenir." },
      { question: "Yürütmenin durdurulması her davada verilir mi?", answer: "Hayır, yürütmenin durdurulması her davada verilmez; kanundaki şartların oluşup oluşmadığına göre mahkeme tarafından değerlendirilir. Talep, dava dilekçesiyle birlikte veya dava sürecinde istenebilir. Yıkım gibi sonuçları ağır olabilecek işlemlerde bu talebin hazırlanması ayrıca önem taşır; mahkeme talebi dosya içeriğine göre inceler." },
      { question: "Tam yargı davası hangi durumda açılır?", answer: "Tam yargı davası, idarenin işlem veya eylemi nedeniyle uğranılan zararın giderilmesi için açılır; süre ve usul dosyaya göre belirlenir. İdarenin eyleminden doğan zararın talebi bu dava ile ileri sürülür. Dava açılmadan önce idareye başvuru yapılması gerekebilir; zarar ve idarenin işlemi arasındaki bağ belgelerle ortaya konur." },
      { question: "İmar para cezasına itiraz mümkün müdür?", answer: "Evet, ceza kararına karşı kanunda öngörülen süre içinde idari yargıda dava açılabilir. Genel dava süresi yazılı bildirimden itibaren 60 gündür (İYUK m.7). İmar para cezasına karşı iptal davasında cezanın dayanağı olan işlem ve tebliğ tarihi incelenir; yürütmenin durdurulması da talep edilebilir." },
    ],
    howToTitle: "Şile'de İdari İptal Davası Nasıl Açılır?",
    howToSteps: [
      { name: "İşlemin Tespiti", text: "Tebliğ tarihi ve işlemi yapan idare belirlenir." },
      { name: "Dilekçe Hazırlığı", text: "İptal gerekçeleri ve varsa yürütmeyi durdurma talebi yazılır." },
      { name: "Dava Açılması", text: "Süresi içinde yetkili idare mahkemesine başvurulur." },
      { name: "Yargılama", text: "İdarenin savunması alınır, gerekirse keşif ve bilirkişi incelemesi yapılır." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: ["idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "sile-is-hukuku-avukati",
    name: "Şile İş Hukuku Avukatı",
    heroTitle: "Şile İş Hukuku Avukatı",
    heroSubtitle:
      "Şile'de konaklama, yeme-içme, inşaat ve bahçe-bakım gibi sektörlerde çalışanların işe iade, kıdem ve ihbar tazminatı, fazla mesai ve ücret alacağı davalarında zorunlu arabuluculuk dahil temsil sağlanır.",
    metaTitle: "Şile İş Hukuku Avukatı | İşe İade ve Tazminat",
    metaDescription:
      "Şile'de işe iade, kıdem ve ihbar tazminatı, fazla mesai ve işçilik alacakları davalarında avukatlık hizmeti sunulmaktadır.",
    aboutParagraph:
      "Şile'de çalışan işçi ve işverenlere iş hukuku alanında danışmanlık yapan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "İşe İade", description: "Geçerli nedene dayanmayan fesih halinde arabuluculuk ve dava süreci." },
      { title: "Tazminat Alacakları", description: "Kıdem ve ihbar tazminatının hesaplanması ve talebi." },
      { title: "Sezonluk Çalışma", description: "Belirli süreli sözleşme ve sezon sonu fesih uyuşmazlıkları." },
      { title: "Fazla Mesai", description: "Yaz yoğunluğunda ödenmeyen fazla çalışma ve hafta tatili ücretleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İşe iade davası öncesi arabuluculuk başvurusu ve dava takibi",
      "Kıdem ve ihbar tazminatı taleplerinin hesaplanması",
      "Fazla mesai, hafta tatili ve ücret alacaklarının talebi",
      "Belirli süreli ve sezonluk sözleşmelerde fesih değerlendirmesi",
      "Sigortasız veya eksik bildirimli çalışmaya ilişkin hizmet tespiti davaları",
      "İşverenler için sözleşme ve fesih bildirimi danışmanlığı",
    ],
    localParagraphs: [
      "Şile'de yaz sezonunda artan konaklama ve yeme-içme işleri, kısa süreli çalışma ve belirli süreli sözleşmelerin yaygın olduğu bir iş piyasası oluşturur. Sözleşmenin gerçekten belirli süreli sayılıp sayılamayacağı 4857 sayılı İş Kanunu m.11 çerçevesinde, esaslı bir neden bulunup bulunmadığına göre değerlendirilir.",
      "İşe iade talebinde işçinin fesih bildiriminden itibaren bir ay içinde arabulucuya başvurması gerekir; arabuluculuk son tutanağından itibaren iki hafta içinde dava açılmalıdır. İş Kanunu m.18 uyarınca otuz veya daha fazla işçi çalıştıran işyerinde en az altı ay kıdemi bulunan işçiler bu haktan yararlanabilir.",
    ],
    faqs: [
      { question: "İşe iade davası için süre var mı?", answer: "Evet, fesih bildiriminden itibaren bir ay içinde arabulucuya başvurulmalıdır. Arabuluculukta anlaşma sağlanamazsa son tutanaktan itibaren iki hafta içinde dava açılır. İş K. m.18 uyarınca işyerinde en az 30 işçi çalışması ve işçinin en az 6 ay kıdemi bulunması aranır." },
      { question: "Arabuluculuk son tutanağından sonra dava süresi nedir?", answer: "Arabuluculuk son tutanağının düzenlenmesinden itibaren iki hafta içinde dava açılmalıdır. Arabulucuya başvuru ise fesihten itibaren bir ay içinde yapılır. İşe iade davası öncesi arabuluculuk başvurusu ve dava takibi bu süreler gözetilerek yürütülür; süre kaçırılırsa dava usulden reddedilebilir." },
      { question: "Sezonluk çalışanlar kıdem tazminatı alabilir mi?", answer: "Kıdem tazminatı hakkı, sözleşmenin niteliğine, çalışma süresine ve fesih nedenine göre ayrıca incelenir; her sezonluk çalışan için aynı sonuç doğmaz. Belirli süreli ve sezonluk sözleşmelerde fesih değerlendirmesi yapılır. Kıdem ve ihbar tazminatı taleplerinin hesaplanması için sözleşme ve çalışma kayıtları incelenir." },
      { question: "Fazla mesai ücreti nasıl ispatlanır?", answer: "Fazla mesai ücreti, bordro, puantaj, tanık beyanı ve işyeri kayıtları gibi delillerle ispatlanabilir. Fazla mesai, hafta tatili ve ücret alacaklarının talebinde bu belgeler birlikte değerlendirilir. Çalışma saatlerini gösteren kayıtlar ile tanık beyanları dava öncesinde derlenir ve alacağın hesabında kullanılır." },
      { question: "İşçilik alacakları için zamanaşımı süresi nedir?", answer: "İşçilik alacaklarında zamanaşımı alacağın türüne göre değişir; ücret ve fazla mesai gibi alacaklarda genel olarak beş yıldır. Bu nedenle fazla mesai, hafta tatili ve ücret alacaklarının talebinde sürenin dolup dolmadığı ilk kontrol edilir. Kıdem ve ihbar tazminatı gibi alacaklar için ayrıca inceleme yapılır." },
    ],
    howToTitle: "Şile'de İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Fesih Bildiriminin İncelenmesi", text: "Fesih tarihi, gerekçesi ve kıdem koşulları gözden geçirilir." },
      { name: "Arabuluculuk Başvurusu", text: "Bir aylık süre içinde zorunlu arabuluculuk başvurusu yapılır." },
      { name: "Dava Açılması", text: "Anlaşma sağlanmazsa iki hafta içinde iş mahkemesine dava açılır." },
      { name: "Yargılama ve Karar", text: "Deliller sunulur, feshin geçerli olup olmadığı mahkemece değerlendirilir." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["ise-iade-davasi", "kidem-tazminati-hesaplama-2026", "giydirilmis-ucret-kavrami"],
  },

  // ─────────────────────────── KİRA TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "sile-kira-tahliye-avukati",
    name: "Şile Kira ve Tahliye Avukatı",
    heroTitle: "Şile Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Şile'de yazlık, apart ve işyeri kiralarında kira bedelinin tespiti, kiracının tahliyesi ve kira alacağı uyuşmazlıkları için sulh hukuk ve icra yollarıyla temsil sağlanır.",
    metaTitle: "Şile Kira ve Tahliye Avukatı | Tahliye ve Kira Tespiti",
    metaDescription:
      "Şile'de kira tespiti, kiracı tahliyesi, kira alacağı ve ihtiyaç nedeniyle tahliye davalarında avukatlık hizmeti sunulmaktadır.",
    aboutParagraph:
      "Şile'de ev sahibi ve kiracılara kira hukuku alanında hukuki destek veren Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur.",
    highlightCards: [
      { title: "Yazlık Kiralamaları", description: "Sezonluk ve yıllık yazlık kira sözleşmelerinde hak ve yükümlülükler." },
      { title: "Tahliye Davaları", description: "Temerrüt, ihtiyaç ve tahliye taahhüdü nedenleriyle tahliye." },
      { title: "Kira Tespiti", description: "Yenilenen kira dönemi için bedelin mahkemece belirlenmesi." },
      { title: "İşyeri Kiraları", description: "Pansiyon, kafe ve dükkan kiralarında uyuşmazlıklar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kira sözleşmesinin hazırlanması ve incelenmesi",
      "Kira bedelinin tespiti ve uyarlanması davaları",
      "Kira bedelini ödemeyen kiracıya karşı ihtar ve tahliye süreci",
      "Konut ve işyeri ihtiyacı nedeniyle tahliye davaları",
      "Tahliye taahhüdüne dayalı icra takibi",
      "Sezonluk ve yıllık yazlık kiralamalarında sözleşme danışmanlığı",
    ],
    localParagraphs: [
      "Şile'de yazlık konutlar bazen yaz sezonuna, bazen yıl boyu kiralanır; kiracının mevsimlik mi yoksa sürekli mi oturacağı, sözleşmenin süresi ve fesih koşulları açısından önemlidir. Kısa süreli turistik kiralamalarda ise ayrıca izin belgesi gibi idari şartlar da gündeme gelebilir.",
      "Konut kiralarında kira bedeli artışı Türk Borçlar Kanunu m.344 uyarınca bir önceki kira yılındaki on iki aylık TÜFE ortalamasını aşamaz; kiracı temerrüt hâlinde ise m.315 gereği en az otuz gün süre verilerek ihtarname gönderilmesi gerekir.",
    ],
    faqs: [
      { question: "Kira artış oranı nasıl belirlenir?", answer: "Konut kiralarında kira artış oranı, Türk Borçlar Kanunu m.344 gereği on iki aylık TÜFE ortalamasıyla sınırlıdır. Artış oranına ilişkin uyuşmazlıklarda kira bedelinin tespiti ve uyarlanması davaları açılabilir. Kira sözleşmesi ve kira dönemi bilgileri, artışın bu sınıra uyup uymadığının incelenmesinde esas alınır." },
      { question: "Kira ödemeyen kiracıya ne yapılır?", answer: "Kira ödemeyen kiracıya otuz günlük ödeme süresi içeren ihtar gönderilir (TBK m.315). Bu sürede ödeme yapılmazsa tahliye veya icra yoluna gidilebilir. Kira bedelini ödemeyen kiracıya karşı ihtar ve tahliye süreci bu şekilde yürütülür; ihtarın düzenlenmesi ve tebliği dosya açısından önemlidir." },
      { question: "Ev sahibi kendi ihtiyacı için tahliye isteyebilir mi?", answer: "Evet, gerçek ve samimi ihtiyaç şartıyla Türk Borçlar Kanunu m.350 kapsamında dava açılabilir. Konut ve işyeri ihtiyacı nedeniyle tahliye davalarında ihtiyacın gerçek ve samimi olduğu ortaya konmalıdır. Dava hazırlığında kira sözleşmesi ve ihtiyaca ilişkin belgeler incelenir." },
      { question: "Yazlık kiralarında da aynı kurallar uygulanır mı?", answer: "Yazlık kiralarında sözleşmenin niteliğine göre konut kirası hükümleri veya özel düzenlemeler uygulanabilir; sözleşme birlikte incelenir. Sezonluk ve yıllık yazlık kiralamalarında sözleşme danışmanlığı verilir. Sözleşmenin süresi, kullanım amacı ve tarafların beyanları hangi hükümlerin uygulanacağını belirlemek için değerlendirilir." },
      { question: "Tahliye taahhütnamesi her zaman geçerli midir?", answer: "Hayır, tahliye taahhütnamesi her zaman geçerli değildir; kira sözleşmesinden sonra ve geçerli şekilde verilmiş olması gerekir. Geçerli bir taahhüt varsa tahliye icra takibiyle istenebilir. Tahliye taahhüdüne dayalı icra takibi açılmadan önce belgenin tarihi ve şekli incelenir." },
    ],
    howToTitle: "Şile'de Kiracı Tahliye Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Sözleşme İncelemesi", text: "Kira sözleşmesi ve ödeme kayıtları gözden geçirilir." },
      { name: "İhtar veya İhbar", text: "Tahliye nedenine göre ihtarname veya fesih bildirimi gönderilir." },
      { name: "Dava veya Takip", text: "Sulh hukuk mahkemesinde dava açılır ya da icra yoluyla takip başlatılır." },
      { name: "Karar ve Tahliye", text: "Kesinleşen karar icra aracılığıyla uygulanır." },
    ],
    crosslinkLabel: "Kira ve Tahliye Avukatı",
    relatedPostSlugs: ["kiracinin-tahliye-sureci", "kira-bedeli-tespit-ve-uyarlama-davasi"],
  },

  // ─────────────────────────── VERGİ ───────────────────────────
  {
    slug: "vergi",
    urlSlug: "sile-vergi-avukati",
    name: "Şile Vergi Avukatı",
    heroTitle: "Şile Vergi Avukatı",
    heroSubtitle:
      "Şile Vergi Dairesi Müdürlüğü tarafından yapılan tarhiyat, vergi ziyaı cezası ve emlak vergisi işlemlerine karşı uzlaşma talebi ile vergi mahkemesi nezdinde dava süreçleri yürütülür.",
    metaTitle: "Şile Vergi Avukatı | Vergi Cezası ve Uzlaşma",
    metaDescription:
      "Şile'de vergi tarhiyatı, vergi cezası, uzlaşma ve vergi mahkemesi davalarında avukatlık hizmeti sunulmaktadır.",
    aboutParagraph:
      "Şile'deki mükelleflere vergi uyuşmazlıklarında hukuki destek sağlayan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Vergi inceleme sonucu yapılan tarhiyatlara karşı dava ve uzlaşma." },
      { title: "Kira Geliri", description: "Yazlık kira gelirinin beyanına ilişkin sorunlar." },
      { title: "Emlak Vergisi", description: "Bina ve arsa beyanlarının değerlendirilmesi." },
      { title: "Gayrimenkul Satış Kazancı", description: "Taşınmaz satışından doğan değer artış kazancı uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi inceleme raporu ve ceza ihbarnamesinin değerlendirilmesi",
      "Tarhiyat sonrası uzlaşma talebinin hazırlanması",
      "Vergi mahkemesinde iptal davası açılması",
      "Yazlık kira gelirinin beyanına ilişkin danışmanlık",
      "Emlak vergisi beyan ve değer uyuşmazlıkları",
      "Taşınmaz satışında değer artış kazancının vergilendirilmesi hakkında danışmanlık",
    ],
    localParagraphs: [
      "Şile'de yazlık veya ikinci konutunu kiraya veren ya da satan mülk sahipleri için kira geliri beyanı ile taşınmazın elden çıkarılmasından doğan kazanç önemli bir vergi başlığıdır. Gelir Vergisi Kanunu m.80 kapsamında taşınmazın satışı, edinildiği tarihten itibaren beş yıl içinde yapılmışsa değer artış kazancı vergilendirilebilir.",
      "Vergi uyuşmazlıklarında dava süresi tebliğden itibaren 30 gündür. Tarhiyat sonrası uzlaşma talebi de kanuni süre içinde Şile Vergi Dairesi Müdürlüğü'ne yapılmalıdır; bu iki yol dosyaya göre birlikte değerlendirilir.",
    ],
    faqs: [
      { question: "Vergi cezasına karşı dava süresi kaçtır?", answer: "Vergi cezasına karşı dava süresi tebliğ tarihinden itibaren 30 gündür (İYUK m.7). Süre içinde vergi mahkemesinde iptal davası açılmazsa ceza kesinleşebilir. Vergi inceleme raporu ve ceza ihbarnamesi değerlendirilirken tebliğ tarihi ilk kontrol edilir; uzlaşma talebi de bu süreçte düşünülebilir." },
      { question: "Uzlaşma talebi nasıl yapılır?", answer: "Uzlaşma talebi, kanuni süre içinde ilgili vergi dairesine yazılı olarak başvurularak yapılır. Tarhiyat sonrası uzlaşma talebinin hazırlanması ve uzlaşma görüşmelerinde temsil sağlanır. Uzlaşma sağlanamazsa kalan dava açma süresi korunur ve vergi mahkemesinde iptal davası açılabilir." },
      { question: "Yazlık kira geliri beyan edilmeli midir?", answer: "Yazlık kira geliri, kanundaki istisna ve usullere göre beyana tabi olabilir; durum dosya bazında incelenir. Kira gelirinin tutarı ve kiralama şekli beyan yükümlülüğünü etkileyebilir. Yazlık kira gelirinin beyanına ilişkin danışmanlık, bu bilgilerin ve sözleşmelerin incelenmesiyle verilir." },
      { question: "Taşınmaz satışında vergi doğar mı?", answer: "Gelir Vergisi Kanunu m.80 uyarınca belirli süre içinde satılan taşınmazlardan değer artış kazancı doğabilir. Bu kazanç vergilendirmeye tabi olabileceğinden satış öncesinde edinme ve satış tarihleri ile bedelleri incelenir. Taşınmaz satışında değer artış kazancının vergilendirilmesi hakkında danışmanlık verilir." },
      { question: "Emlak vergisi beyanında hata yapılırsa ne olur?", answer: "Eksik veya hatalı emlak vergisi beyanı nedeniyle vergi ve ceza çıkabilir; düzeltme ve itiraz yolları ayrıca değerlendirilir. Emlak vergisi beyan ve değer uyuşmazlıklarında ihbarnameye karşı vergi mahkemesinde dava açma süresi tebliğden itibaren 30 gündür (İYUK m.7)." },
    ],
    howToTitle: "Şile'de Vergi İtirazı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "İhbarname İncelemesi", text: "Tarhiyat veya ceza ihbarnamesi ve tebliğ tarihi kontrol edilir." },
      { name: "Uzlaşma veya Dava Kararı", text: "Dosyaya göre uzlaşma talebi ya da dava yolu seçilir." },
      { name: "Dilekçe Sunulması", text: "Süresi içinde vergi dairesine veya vergi mahkemesine başvuru yapılır." },
      { name: "Yargılama ve Sonuç", text: "Mahkeme incelemesi sonrası karar verilir ve uygulanır." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: ["vergi-ihbarnamesine-itiraz-ve-uzlasma"],
  },

  // ─────────────────────────── BORÇLAR HUKUKU ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "sile-borclar-hukuku-avukati",
    name: "Şile Borçlar Hukuku Avukatı",
    heroTitle: "Şile Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Şile'de villa ve yazlık inşaatları, tadilat işleri, konaklama rezervasyonları ve diğer sözleşmelerden doğan alacak ile tazminat uyuşmazlıklarında dava ve ihtar süreçleri yürütülür.",
    metaTitle: "Şile Borçlar Hukuku Avukatı | Alacak ve Tazminat",
    metaDescription:
      "Şile'de eser sözleşmesi, alacak, tazminat ve sözleşmeden kaynaklı uyuşmazlıklarda borçlar hukuku avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Şile'deki müvekkillerine sözleşme, alacak ve tazminat konularında hukuki destek sağlayan Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur.",
    highlightCards: [
      { title: "Eser Sözleşmesi", description: "Yüklenici ile iş sahibi arasındaki inşaat ve tadilat uyuşmazlıkları." },
      { title: "Ayıplı İş", description: "Teslim sonrası ortaya çıkan ayıplara karşı seçimlik haklar." },
      { title: "Haksız Fiil", description: "Kaza veya zarar verici eylemlerden doğan tazminat talepleri." },
      { title: "Rezervasyon ve Hizmet", description: "Konaklama ve organizasyon sözleşmelerinin ifa edilmemesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Yazlık ve villa inşaatlarında yüklenici ile iş sahibi arasındaki uyuşmazlıklar",
      "Tadilat ve onarım işlerinde ayıplı ifa ve gecikme talepleri",
      "Sözleşmenin ihlali nedeniyle alacak ve tazminat davaları",
      "Haksız fiile dayalı maddi ve manevi tazminat talepleri",
      "Konaklama, organizasyon ve hizmet sözleşmelerinde ifa uyuşmazlıkları",
      "Sözleşme hazırlama ve ihtarname düzenleme",
    ],
    localParagraphs: [
      "Şile'de yazlık yapımı, tadilat ve bahçe düzenlemesi gibi işlerde yüklenici ile iş sahibi arasındaki anlaşmazlıklar sıkça eser sözleşmesi hükümlerine dayanır. Taşınmaz yapılarındaki ayıplara karşı Türk Borçlar Kanunu m.478 uyarınca zamanaşımı, teslimden itibaren beş yıldır; yüklenicinin ağır kusuru varsa bu süre uygulanmaz.",
      "Sözleşmenin ihlalinden doğan alacaklarda genel zamanaşımı Türk Borçlar Kanunu m.146 gereği on yıldır; haksız fiil tazminatında ise m.72 uyarınca öğrenmeden itibaren iki yıl ve her hâlde fiilden itibaren on yıllık süreler söz konusudur.",
    ],
    faqs: [
      { question: "Yüklenici işi zamanında teslim etmezse ne yapılabilir?", answer: "Yüklenici işi zamanında teslim etmezse sözleşmedeki gecikme cezası veya kanuni haklar çerçevesinde süre verilerek sözleşmeden dönme ve tazminat talep edilebilir. Yazlık ve villa inşaatlarında yüklenici ile iş sahibi arasındaki uyuşmazlıklarda teslim tarihi ve cezai şart hükümleri sözleşmeden incelenir." },
      { question: "Yapıdaki ayıp için süre var mı?", answer: "Evet, taşınmaz yapılarda ayıp için kural olarak teslimden itibaren beş yıllık zamanaşımı uygulanır. Tadilat ve onarım işlerinde ayıplı ifa ve gecikme talepleri de bu bağlamda değerlendirilir. Ayıp fark edildiğinde karşı tarafa bildirilmesi ve teslim belgelerinin saklanması delil açısından önemlidir." },
      { question: "Alacak davası açmadan önce ihtar çekmek gerekli midir?", answer: "Her zaman şart değildir; ancak temerrüdün oluşması ve delil açısından ihtarname yararlıdır. İhtarname ile borçluya süre verilir ve borç yazılı olarak hatırlatılır. Sözleşmenin ihlali nedeniyle alacak ve tazminat davası öncesinde ihtarname düzenlenmesi, dava hazırlığının bir parçası olarak yürütülür." },
      { question: "Haksız fiil tazminatında zamanaşımı ne kadardır?", answer: "Haksız fiil tazminatında zamanaşımı, zararı ve faili öğrenmeden itibaren iki yıl, her halde fiilden itibaren on yıldır. Haksız fiile dayalı maddi ve manevi tazminat taleplerinde bu süreler dikkate alınır. Zararın ve failin öğrenildiği tarih ile fiil tarihi, sürenin hesabında ilk incelenen unsurlardır." },
      { question: "Sözleşme cezası hakim tarafından azaltılabilir mi?", answer: "Evet, aşırı bulunan sözleşme cezası Türk Borçlar Kanunu m.182 uyarınca hakim tarafından indirilebilir. Sözleşmenin ihlali nedeniyle açılan alacak ve tazminat davalarında cezai şartın tutarı bu açıdan da değerlendirilir. Cezai şart hükmü ve ihlalin niteliği, indirim talebinin hazırlanmasında incelenir." },
    ],
    howToTitle: "Şile'de Alacak Davası Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Belge ve Delil Toplama", text: "Sözleşme, ödeme kayıtları ve yazışmalar bir araya getirilir." },
      { name: "İhtarname", text: "Karşı tarafa ifa veya ödeme için süre veren ihtarname gönderilir." },
      { name: "Dava Açılması", text: "Yetkili mahkemede alacak veya tazminat davası açılır." },
      { name: "Yargılama ve Karar", text: "Deliller değerlendirilir, bilirkişi raporu alınır ve karar verilir." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];

export const sileServices: PseoService[] = [...sileBaseServices, sileMiras];
