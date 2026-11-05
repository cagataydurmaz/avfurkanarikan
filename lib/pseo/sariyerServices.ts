import type { PseoService } from "./types";
import { sariyerMiras } from "./miras/sariyerMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const sariyerBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "sariyer-avukat",
    name: "Sarıyer Avukat",
    heroTitle: "Sarıyer Avukat",
    heroSubtitle:
      "Sarıyer'de yaşayan veya işyeri bulunan kişilere ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık verilir; ilçe İstanbul (Çağlayan) Adliyesi'ne bağlıdır.",
    metaTitle: "Sarıyer Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Sarıyer'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında Sarıyer'deki müvekkillerine danışmanlık ve temsil hizmeti sunmaktadır.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturmadan kanun yoluna kadar müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka konularında temsil." },
      { title: "Gayrimenkul Hukuku", description: "Villa, yalı ve kira uyuşmazlıklarının yürütülmesi." },
      { title: "İş Hukuku", description: "Tazminat ve işe iade taleplerinin takibi." },
      { title: "İcra Hukuku", description: "Alacak takibi, itiraz ve haciz süreçlerinde destek." },
      { title: "İdare Hukuku", description: "İdareye karşı iptal ve tazminat davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı ve cezası uyuşmazlıklarında temsil." },
      { title: "Borçlar Hukuku", description: "Sözleşme ve alacak kaynaklı uyuşmazlıklar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı, soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde aile hukuku desteği",
      "Tapu, villa ve yalı niteliğindeki taşınmazlarda gayrimenkul hukuku hizmeti",
      "Tazminat ve işe iade süreçlerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı idare hukuku kapsamında dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme ve tazminat taleplerinde borçlar hukuku desteği",
    ],
    localParagraphs: [
      "Boğaz kıyısındaki Emirgan, İstinye, Yeniköy ve Tarabya gibi üst gelir grubunun yoğun olduğu mahallelerden Bahçeköy ve Kilyos gibi orman/sahil kesimindeki yerleşimlere uzanan Sarıyer, İstanbul'un yeşil alan bakımından en zengin ilçelerinden biridir.",
      "İlçede yaşayan veya faaliyet gösterenlerin hukuki uyuşmazlıkları İstanbul (Çağlayan) Adliyesi'ndeki mahkemelerde, vergisel işlemleri ise Sarıyer Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Sarıyer'deki davalara hangi adliye bakıyor?", answer: "Sarıyer'deki davalara İstanbul (Çağlayan) Adliyesi bakar; Sarıyer bu adliyenin yargı çevresi içinde yer alır. İlçede yaşayan veya faaliyet gösterenlerin hukuki uyuşmazlıkları Çağlayan'daki mahkemelerde görülür. Vergisel işlemler ise Sarıyer Vergi Dairesi Müdürlüğü nezdinde yürütülür. Randevu WhatsApp veya telefonla alınır." },
      { question: "Görüşme talebi nasıl iletilir?", answer: "Görüşme talebi WhatsApp veya telefon aracılığıyla iletilir ve randevu günü birlikte kararlaştırılır. İlk iletişimde konunuzu kısaca paylaşmanız yeterlidir. Danışmanlık görüşmesinde hukuki durumunuz değerlendirilir; temsil kararı alınırsa vekalet düzenlenir ve belgeler derlenir. Görüşme yüz yüze veya çevrim içi planlanabilir." },
      { question: "Hizmet kapsamına hangi hukuk dalları giriyor?", answer: "Ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve temsil sağlanır. Bunlar arasında gözaltı ve soruşturma savunması, boşanma ve velayet davaları, tapu ve villa uyuşmazlıkları, işe iade, alacak tahsili, idari işlemlere karşı iptal davaları ve vergi uyuşmazlıkları yer alır." },
      { question: "Büro Sarıyer'de mi bulunuyor?", answer: "Hayır, büro Sarıyer'de değil, Beşiktaş/Sinanpaşa'dadır. Sarıyer'deki müvekkiller de aynı kapsamda danışmanlık ve temsil hizmeti alır. Sarıyer dosyaları İstanbul (Çağlayan) Adliyesi'nde görüldüğünden mahkeme işlemleri orada yürütülür; randevu WhatsApp veya telefonla alınır. Büro dışında görüşme çevrim içi de yapılabilir." },
      { question: "Görüşme ücreti nasıl belirleniyor?", answer: "Görüşme ücreti dosyanın kapsamına göre değişir ve randevu sırasında netleştirilir. Danışmanlık görüşmesi ücret karşılığı yapılır ve görüşmede hukuki durumunuz değerlendirilir. Temsil kararı alınırsa vekalet düzenlenir ve belgeler derlenir; ücret konusundaki sorular görüşme öncesinde de iletilebilir." },
      { question: "Yalı ve villa niteliğindeki taşınmazlarla ilgili destek var mı?", answer: "Evet, yalı ve villa niteliğindeki taşınmazlara özgü tapu ve kullanım uyuşmazlıklarında gayrimenkul hukuku kapsamında danışmanlık sağlanır. Yalı ve kıyı yapılarına ilişkin tapu ve kullanım hakkı uyuşmazlıkları, tapu iptali ve tescil davaları ile site ve villa projelerindeki kat mülkiyeti sorunları bu kapsamdadır." },
      { question: "Görüşmeler uzaktan yapılabiliyor mu?", answer: "Evet, görüşmeler tercihe göre yüz yüze veya görüntülü ya da sesli olarak planlanabilir. Büro Beşiktaş/Sinanpaşa'dadır ve Sarıyer'de büro bulunmaz. İlk iletişim WhatsApp veya telefonla kurulur, ardından danışmanlık randevusu verilir; danışmanlık görüşmesi ücret karşılığı yapılır. Konunuz ilk iletişimde kısaca paylaşılır." },
      { question: "Çağlayan Adalet Sarayı'na Sarıyer'den ulaşım nasıl?", answer: "Sarıyer'den Çağlayan Adalet Sarayı'na M2 hattının Hacıosman istasyonu ve sahil yolu üzerindeki otobüs seferleriyle ulaşılabilir. Sarıyer dosyaları İstanbul (Çağlayan) Adliyesi'nin yargı çevresinde yer aldığından duruşma ve dava işlemleri için bu adliyeye gidilir. Randevu günü WhatsApp veya telefonla belirlenir." },
      { question: "Acil bir tutuklama veya gözaltı durumunda ne yapmalı?", answer: "Acil bir tutuklama veya gözaltı durumunda vakit kaybetmeden telefon ya da WhatsApp üzerinden iletişime geçilmelidir. Gözaltı ve ifade öncesinde hukuki temsil sağlanır, soruşturma dosyasına erişim ve itiraz hakları kullanılır. Tutuklama kararına karşı itiraz süresi 7 gündür." },
      { question: "Dosyanın seyri hakkında bilgi almak mümkün mü?", answer: "Evet, dosyanın seyri hakkında bilgi almak mümkündür; süreç boyunca gelişmeler düzenli olarak müvekkille paylaşılır. Temsil kararı alındıktan sonra mahkeme ve idari merciler nezdindeki işlemler takip edilir, belgeler derlenir ve başvuru veya duruşma aşamaları hakkında bilgi verilir." },
    ],
    howToTitle: "Sarıyer'de Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Sarıyer Avukat (Genel)",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "kidem-tazminati-hesaplama-2026", "icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "sariyer-bosanma-avukati",
    name: "Sarıyer Boşanma Avukatı",
    heroTitle: "Sarıyer Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma davalarında velayet, nafaka ve mal paylaşımı konularında temsil sağlanır; davalar İstanbul (Çağlayan) Adliyesi'nde görülür.",
    metaTitle: "Sarıyer Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Sarıyer'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sağlanmaktadır.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, aile hukuku alanında Sarıyer'deki müvekkillerine boşanma, velayet ve nafaka konularında temsil sunmaktadır.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Mal Rejimi", description: "Yüksek değerli taşınmazlarda katılma alacağı hesaplamaları." },
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
      "Sarıyer'in Boğaz kıyısındaki mahallelerinde gayrimenkul değerlerinin yüksekliği, boşanma davalarında mal rejimi tasfiyesi taleplerinin de daha karmaşık bir nitelik kazanmasına yol açabilmektedir.",
      "İlçede açılan boşanma, velayet ve nafaka davalarına İstanbul (Çağlayan) Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Sarıyer'de boşanma davası nereye açılır?", answer: "Sarıyer'deki boşanma davası, İstanbul (Çağlayan) Adliyesi bünyesindeki aile mahkemelerine açılır. Yetkili mahkeme TMK m.168 uyarınca belirlenir. Anlaşmalı boşanma, çekişmeli boşanma, velayet ve nafaka talepleri de aynı aile mahkemelerinde görülür; dava hazırlığı ve duruşma temsili bu kapsamda yürütülür." },
      { question: "Anlaşmalı boşanmada protokol neyi içermeli?", answer: "Anlaşmalı boşanma protokolü velayet, nafaka, mal rejimi ve varsa tazminata ilişkin tüm hususları eksiksiz düzenlemelidir. TMK m.166/3 uyarınca evliliğin en az 1 yıl sürmüş olması ve eşlerin duruşmada birlikte beyanda bulunması gerekir. Protokol hazırlığı ve duruşma temsili bu kapsamda yürütülür." },
      { question: "Yüksek değerli taşınmazlar mal paylaşımını nasıl etkiler?", answer: "Taşınmazın edinim tarihi ve niteliğine göre katılma alacağı hesaplaması değişebilir ve bilirkişi incelemesi gerekebilir. Evlilik içinde mi dışında mı edinildiği, mal rejimi tasfiyesinde belirleyici olur. Katılma alacağı kapsamındaki talepler, taşınmazın değeri ve edinim şekli birlikte değerlendirilerek hazırlanır." },
      { question: "Velayet hangi esasa göre belirlenir?", answer: "Velayeti belirleyen ölçüt çocuğun üstün yararıdır; mahkeme tarafların fiili durumunu buna göre değerlendirir. Velayet tesisi ve sonradan velayet değişikliği talepleri aile mahkemesinde görülür. Velayet kararıyla birlikte çocukla kişisel ilişkinin nasıl kurulacağı da dava kapsamında düzenlenebilir." },
      { question: "Nafaka sonradan değişebilir mi?", answer: "Evet, tarafların ekonomik koşullarındaki değişim nafakanın yeniden belirlenmesini gerektirebilir. Bu durumda nafakanın artırılması, azaltılması veya kaldırılması için dava açılır. Başvuruda tarafların güncel gelir, gider ve ihtiyaç durumunu gösteren belgeler mahkemeye sunulur. Nafaka taleplerinin hazırlanması ve takibi bu süreçte yürütülür." },
      { question: "Dava sürerken nafaka talep edilebilir mi?", answer: "Evet, dava sürerken ihtiyaç duyan taraf lehine tedbir nafakasına hükmedilebilir. Tedbir nafakası, boşanma davası sonuçlanıncaya kadar tarafın geçiminin sağlanması amacıyla istenir. Dava sonunda nafaka talepleri ayrıca değerlendirilir ve sonradan artırım, azaltım veya kaldırma davasına konu olabilir." },
    ],
    howToTitle: "Sarıyer'de Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "Ön Değerlendirme", text: "Evlilik birliğinin durumu ile velayet, nafaka ve mal rejimi talepleri belirlenir." },
      { name: "Belge Hazırlığı", text: "Duruma göre dava dilekçesi veya protokol hazırlanır." },
      { name: "Mahkemeye Başvuru", text: "Yetkili aile mahkemesine başvurularak duruşma günü beklenir." },
      { name: "Duruşma", text: "Taraflar dinlenir, gerekli değerlendirmeler yapılır, karar açıklanır." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "bosanmada-nafaka-turleri"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "sariyer-ceza-avukati",
    name: "Sarıyer Ceza Avukatı",
    heroTitle: "Sarıyer Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; kovuşturma İstanbul (Çağlayan) Adliyesi'nde yürütülür.",
    metaTitle: "Sarıyer Ceza Avukatı | Müdafilik",
    metaDescription:
      "Sarıyer'de soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi 2019 mezunu olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında Sarıyer'deki müvekkillerine müdafilik yapmaktadır.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Kanun Yolları", description: "İstinaf ve temyiz süreçlerinin yürütülmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İfade öncesi ve gözaltı sürecinde hukuki temsil sağlanması",
      "Soruşturma dosyasına erişim ve itiraz haklarının kullanılması",
      "Tutukluluk kararlarına karşı itiraz başvurularının hazırlanması",
      "Duruşma süreçlerinde sanık veya müşteki vekilliği",
      "Kanun yolu (istinaf/temyiz) dilekçelerinin sunulması",
      "Uzlaştırma sürecinde müvekkil menfaatinin korunması",
    ],
    localParagraphs: [
      "Sarıyer'in geniş orman alanları ve sahil şeridi, mevsimlik yoğun ziyaretçi trafiğiyle birlikte kolluk müdahalesi gerektiren bazı olayların da gündeme gelmesine yol açabilmektedir; bu olaylara ilişkin kovuşturmalar İstanbul (Çağlayan) Adliyesi'nde görülür.",
      "Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında ve doğru kullanılması sonraki aşamaların seyri açısından önem taşır.",
    ],
    faqs: [
      { question: "Sarıyer'de görülen ceza davalarında yetkili adliye neresidir?", answer: "Sarıyer'de görülen ceza davalarında yetkili adliye İstanbul (Çağlayan) Adliyesi'dir. Sarıyer bu adliyenin yargı çevresi içinde yer aldığından soruşturma ve kovuşturma işlemleri Çağlayan'daki makamlar ve mahkemeler nezdinde yürütülür. Duruşmalarda sanık veya müşteki vekilliği de bu adliyede yapılır." },
      { question: "Gözaltındaki bir kişiyle ne zaman görüşülebilir?", answer: "Gözaltı kararı verildiği andan itibaren gözaltındaki kişiyle görüşme talep edilebilir. İfade öncesi ve gözaltı sürecinde hukuki temsil sağlanır; bu nedenle ilk iletişimin vakit kaybetmeden telefon veya WhatsApp üzerinden kurulması önemlidir. Soruşturma dosyasına erişim ve itiraz hakları da müdafi aracılığıyla kullanılır." },
      { question: "Tutukluluğa itiraz için belirli bir gün sınırı var mı?", answer: "Evet, tutuklama kararına karşı itiraz süresi 7 gündür. Tutuklama CMK m.100/101 kapsamında verilir ve bu süre içinde itiraz dilekçesi hazırlanarak sunulur. Tutukluluk kararlarına karşı itiraz başvuruları bu kapsamda yürütülür; ayrıca soruşturma dosyasına erişim ve itiraz hakları da kullanılır." },
      { question: "Zorunlu müdafilik ne anlama gelir?", answer: "Zorunlu müdafilik, kanunda belirtilen ağırlıktaki suçlarda şüpheli veya sanığın yanında avukat bulundurulması zorunluluğunu ifade eder. Bu hallerde şüpheli veya sanık kendisi müdafi seçmezse barodan müdafi görevlendirilir. Zorunlu müdafilik, ifade ve duruşma aşamalarında savunma hakkının korunmasına hizmet eder." },
      { question: "Etkin pişmanlık hangi suçlarda uygulanır?", answer: "Etkin pişmanlık, kanunda açıkça sayılan suç tiplerinde uygulanabilir. Bu suçlarda kişinin kanunda aranan şartlara uygun davranışı ceza indirimi veya cezasızlık sonucu doğurabilir. Hangi suç için uygulanıp uygulanamayacağı, soruşturma dosyasındaki isnat ve deliller incelenerek değerlendirilir. Savunma bu değerlendirmeye göre hazırlanır." },
      { question: "Temyiz ile istinaf arasındaki fark nedir?", answer: "İstinaf, ilk derece mahkemesinin kararını olay ve hukuk yönünden yeniden inceler; temyiz ise kararın hukuka uygunluğunu denetler. Kanun yolu dilekçeleri bu aşamalarda sunulur. İstinaf kararına karşı, kanunun öngördüğü hallerde temyiz yoluna gidilebilir; hangi yolun açık olduğu karara göre belirlenir." },
    ],
    howToTitle: "Sarıyer'de Ceza Yargılaması Nasıl İlerler?",
    howToSteps: [
      { name: "Olayın Bildirilmesi", text: "Şikayet veya resen soruşturma başlatılır." },
      { name: "Savunmanın Kurulması", text: "Müdafi dosyayı inceleyip savunma stratejisi oluşturur." },
      { name: "Duruşma Süreci", text: "Deliller mahkeme önünde tartışılır." },
      { name: "Karar Sonrası", text: "Gerekirse üst mahkemeye başvurulur." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "sariyer-gayrimenkul-avukati",
    name: "Sarıyer Gayrimenkul Avukatı",
    heroTitle: "Sarıyer Gayrimenkul Avukatı",
    heroSubtitle:
      "Yalı, villa ve orman/sahil alanı statüsündeki taşınmazlara ilişkin uyuşmazlıklarda hukuki destek sağlanır; davalar İstanbul (Çağlayan) Adliyesi'nde görülür.",
    metaTitle: "Sarıyer Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Sarıyer'de tapu iptali, yalı/villa uyuşmazlıkları ve kira ilişkilerinde gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, tapu, kat mülkiyeti ve kıyı yapılarına ilişkin uyuşmazlıklarda Sarıyer'deki müvekkillerine danışmanlık vermektedir.",
    highlightCards: [
      { title: "Yalı ve Kıyı Yapıları", description: "Boğaz kıyısındaki taşınmazlara özgü tapu ve kullanım uyuşmazlıkları." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Kat Mülkiyeti", description: "Site ve villa projelerinde yönetim planı anlaşmazlıkları." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Yalı ve kıyı yapılarına ilişkin tapu ve kullanım hakkı uyuşmazlıkları",
      "Tapu iptali ve tescil davalarının açılması",
      "Site ve villa projelerinde kat mülkiyeti uyuşmazlıkları",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
      "Ortaklığın giderilmesi (izale-i şüyu) davaları",
    ],
    localParagraphs: [
      "Emirgan, İstinye, Yeniköy ve Tarabya gibi Boğaz kıyısındaki mahallelerde yalı ve kıyı yapılarına ilişkin özel mülkiyet ve kullanım hakkı uyuşmazlıkları, orman alanı ve sit statüsündeki arazilerle iç içe bir hukuki zemin oluşturmaktadır; bu uyuşmazlıklar İstanbul (Çağlayan) Adliyesi'ndeki sulh hukuk ve asliye hukuk mahkemelerinde görülür.",
      "Bahçeköy ve Kilyos çevresindeki orman köyü niteliğindeki yerleşimlerde de tapu tahsis belgesi ve orman sınırı kaynaklı uyuşmazlıklar zaman zaman gündeme gelmektedir.",
    ],
    faqs: [
      { question: "Yalı niteliğindeki taşınmazlarda ek bir kısıtlama var mı?", answer: "Evet, Kıyı Kanunu ve ilgili koruma mevzuatı yalı niteliğindeki taşınmazların kullanımı ve tadilatı konusunda ek kısıtlamalar getirebilir. Yalı ve kıyı yapılarına ilişkin tapu ve kullanım hakkı uyuşmazlıkları bu nedenle ayrıca incelenir. Kıyı kenar çizgisi tespiti de yapılaşma ve kullanım hakkını etkiler." },
      { question: "Sarıyer'de gayrimenkul davası hangi mahkemede görülür?", answer: "Uyuşmazlığın niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde görülür. Tapu iptali ve tescil, ortaklığın giderilmesi, kat mülkiyeti ve kira uyuşmazlıkları gibi dava türleri bu mahkemelerde açılır; görevli mahkeme talebin konusuna göre belirlenir." },
      { question: "Orman köyü sınırındaki taşınmazlarda tapu sorunu nasıl çözülür?", answer: "Orman sınırına yakın taşınmazlarda tapu sorunu için kadastro ve orman sınırlandırma kayıtlarının incelenmesi gerekir; gerekirse dava açılabilir. Orman sınırı tespitlerine karşı idari yargıda da başvuru yolu bulunur. Tapu iptali ve tescil davası ya da idari başvuru, kayıtlardaki çelişkiye göre belirlenir." },
      { question: "Villa/site projelerinde ortak alan anlaşmazlığı nasıl giderilir?", answer: "Villa ve sitelerde ortak alan anlaşmazlığında öncelikle yönetim planı esas alınır; sorun çözülemezse dava yoluna gidilir. Kat mülkiyeti uyuşmazlıkları bu çerçevede incelenir. Site ve villa projelerinde yönetim planındaki kullanım hükümleri, dava açılıp açılmayacağının değerlendirilmesinde temel belgedir." },
      { question: "Yüksek değerli bir taşınmaz alımında nelere dikkat edilmeli?", answer: "Yüksek değerli bir taşınmaz alımında tapu kaydı, kıyı veya orman sınırı durumu ve varsa şerhlerin önceden incelenmesi önerilir. Tapudaki ipotek veya haciz gibi şerhler ile sınır durumu satın alma kararını etkileyebilir. Satış vaadi gibi sözleşmeler de imzalanmadan önce gözden geçirilmelidir." },
    ],
    howToTitle: "Sarıyer'de Tapu Uyuşmazlığı Süreci Nasıl İlerler?",
    howToSteps: [
      { name: "Kayıt İncelemesi", text: "Taşınmazın tapu kaydı, şerhler ve sınır durumu incelenir." },
      { name: "Dayanağın Belirlenmesi", text: "Talebin hukuki gerekçesi netleştirilir." },
      { name: "Dilekçe Hazırlığı", text: "Talep ve deliller dilekçeye işlenir." },
      { name: "Yargılama", text: "Bilirkişi incelemesi sonrası mahkeme karar verir." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "sariyer-icra-avukati",
    name: "Sarıyer İcra Avukatı",
    heroTitle: "Sarıyer İcra Avukatı",
    heroSubtitle:
      "Alacak tahsili amacıyla icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır; icra mahkemeleri İstanbul (Çağlayan) Adliyesi'ndedir.",
    metaTitle: "Sarıyer İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Sarıyer'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, icra ve iflas hukuku kapsamında Sarıyer'deki alacaklı ve borçlu taraflara danışmanlık vermektedir.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacağa dayanak belge veya ilam üzerinden icra takibinin başlatılması",
      "Borca ve imzaya itiraz dilekçelerinin hazırlanması",
      "Haciz konulan menkul veya gayrimenkul üzerindeki işlemlerin takibi",
      "İhale sürecine katılım ve ihalenin feshine ilişkin başvurular",
      "Üçüncü kişilerin istihkak taleplerinin değerlendirilmesi",
      "Konkordato ve iflasın ertelenmesi taleplerinde danışmanlık",
    ],
    localParagraphs: [
      "Sarıyer'de yüksek değerli gayrimenkullerin ve villa/site projelerinin yoğunluğu, bu taşınmazlara ilişkin alacaklarda gayrimenkul üzerine haciz ve ihale süreçlerinin daha dikkatli yürütülmesini gerektirmektedir; bu takiplere ilişkin uyuşmazlıklar İstanbul (Çağlayan) Adliyesi'ndeki icra mahkemelerinde görülür.",
      "Borçlunun Sarıyer'de yerleşik olduğu takiplerde yetkili icra dairesi, kural olarak borçlunun ikametgahı veya sözleşmede belirlenen yer esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "İcra dosyasına itiraz için süre ne kadardır?", answer: "Ödeme emrinin tebliğinden itibaren 7 gün içinde itiraz edilmelidir (İİK m.62). Bu süre içinde yapılan itiraz takibi durdurur. Süre kaçırılırsa takip kesinleşir ve haciz aşamasına geçilebilir. Borca ve imzaya itiraz dilekçeleri de bu süre içinde hazırlanarak icra dairesine sunulur." },
      { question: "İcra mahkemesi hangi uyuşmazlıklara bakar?", answer: "İcra mahkemesi, takibe ilişkin itiraz, şikayet ve istihkak gibi konularda görevlidir; bu mahkemeler İstanbul (Çağlayan) Adliyesi bünyesindedir. Üçüncü kişilerin istihkak talepleri ile ihalenin feshine ilişkin başvurular da bu kapsamda değerlendirilir. Haciz ve satış işlemlerine ilişkin başvurular da bu mahkemede gündeme gelir." },
      { question: "Haczedilen yüksek değerli bir taşınmazın satışı nasıl gerçekleşir?", answer: "Haczedilen yüksek değerli bir taşınmaz, kıymet takdiri yapıldıktan sonra açık artırma yoluyla ihale edilir. Satış süreci, haciz konulan taşınmaz üzerindeki işlemlerin takibiyle yürür. İhale sürecine katılım ve ihalenin feshine ilişkin başvurular da bu aşamada gündeme gelebilir." },
      { question: "Borçlu itiraz etmezse ne olur?", answer: "Borçlu ödeme emrine süresinde itiraz etmezse takip kesinleşir ve haciz aşamasına geçilebilir. İtiraz süresi tebliğden itibaren 7 gündür (İİK m.62). Takip kesinleştikten sonra alacaklı, borçlunun menkul veya gayrimenkul mallarına haciz konulmasını talep edebilir. Süre kaçırılmaması bu nedenle önemlidir." },
      { question: "Alacaklı hangi yollarla tahsilat yapabilir?", answer: "Alacaklı maaş haczi, banka hesabı haczi veya taşınmaz haczi gibi yöntemlerle tahsilat yapabilir. Haciz konulan menkul veya gayrimenkul mal varlığı üzerindeki işlemler icra dosyasında takip edilir; gerektiğinde satış yoluna gidilir. Bu yollar, takibin kesinleşmesinden sonra gündeme gelir." },
    ],
    howToTitle: "Sarıyer'de İcra Takibi Nasıl İşletilir?",
    howToSteps: [
      { name: "Delil Toplama", text: "Alacağı gösteren sözleşme, fatura veya ilam derlenir." },
      { name: "Dosya Açılışı", text: "İcra dairesine başvurularak takip dosyası oluşturulur." },
      { name: "Tebligat Süreci", text: "Ödeme emri borçluya ulaştırılır ve itiraz süresi başlar." },
      { name: "Haciz ve Satış", text: "İtiraz edilmez veya sonuçlanırsa haciz ve satış işlemleri yürütülür." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "sariyer-idare-avukati",
    name: "Sarıyer İdare Avukatı",
    heroTitle: "Sarıyer İdare Avukatı",
    heroSubtitle:
      "Belediye, orman ve kıyı mevzuatına ilişkin idari işlemlere karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Sarıyer İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Sarıyer'de idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi 2019 mezunu olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, idari işlemlerin iptali ve tam yargı davalarında Sarıyer'deki müvekkillerine danışmanlık vermektedir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Orman/Kıyı Mevzuatı", description: "Orman sınırı ve kıyı kenar çizgisine ilişkin idari uyuşmazlıklar." },
      { title: "Tam Yargı Davaları", description: "İdarenin işlem/eyleminden doğan zararın tazmini." },
      { title: "Belediye İşlemleri", description: "İmar, ruhsat ve ceza kararlarına ilişkin uyuşmazlıklar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Orman sınırı ve kıyı kenar çizgisi tespitlerine itiraz edilmesi",
      "İdari kararların iptali için dava açılması",
      "İdarenin eylem ve işlemlerinden doğan zararlar için tazminat talebi",
      "Villa/site projelerine ilişkin ruhsat işlemlerinin takibi",
      "İdari para cezalarına karşı hukuki yollara başvurulması",
      "Kamu görevlilerinin özlük haklarına dair uyuşmazlıklarda destek",
    ],
    localParagraphs: [
      "Sarıyer'in geniş orman alanları ve Boğaz kıyısı, orman sınırı tespiti ve kıyı kenar çizgisi belirlemesi gibi idari işlemlerin sıklıkla dava konusu olmasına yol açmaktadır; bu davalar İstanbul idare mahkemelerinde görülür.",
      "Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür; villa ve site projelerine ilişkin imar işlemleri de bu kapsamda değerlendirilebilir.",
    ],
    faqs: [
      { question: "Orman sınırı kararına karşı ne yapılabilir?", answer: "Orman sınırı kararına karşı bilirkişi incelemesi talep edilerek idare mahkemesinde dava açılabilir. Dava, idari işlemin tebliğinden itibaren 60 gün içinde açılmalıdır (İYUK m.7). Orman sınırı ve kıyı kenar çizgisi tespitlerine itiraz bu kapsamdadır; yürütmeyi durdurma talebi de ayrıca istenebilir." },
      { question: "Kıyı kenar çizgisi neden önemlidir?", answer: "Kıyı kenar çizgisi, taşınmazın yapılaşma ve kullanım hakkını doğrudan etkileyen bir idari tespittir. Çizginin nereden geçtiği, yalı ve kıyı yapılarının kullanımını ve tadilatını sınırlayabilir. Bu tespite karşı itiraz edilebilir ve idari yargıda iptal davası açılabilir." },
      { question: "Dava açma süresi kaçırılırsa ne olur?", answer: "Dava açma süresi kaçırılırsa dava, süre aşımı nedeniyle usulden reddedilebilir. İdari davalarda süre, idari işlemin tebliğinden itibaren 60 gündür (İYUK m.7); vergi davalarında ise 30 gündür. Bu nedenle idari işlemin tebliğ tarihi, dava açma süresi bakımından önemlidir." },
      { question: "Villa projelerinde ruhsat iptaline itiraz mümkün mü?", answer: "Evet, ilgili idari işleme karşı idare mahkemesinde dava açılabilir. Dava süresi, idari işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Villa ve site projelerine ilişkin ruhsat işlemlerinin takibi ve idari kararların iptali bu kapsamda yürütülür. Yürütmeyi durdurma talebi de dava ile birlikte istenebilir." },
      { question: "Tazminat talebinde bulunmak için önce dava mı açılmalı?", answer: "Bazı hallerde önce idareye başvuru yapılması, ardından dava yoluna gidilmesi gerekir. İdarenin eylem ve işlemlerinden doğan zararlar için ön idari başvuru yapılır; talep reddedilirse veya cevap verilmezse tam yargı davası açılabilir. Bu nedenle başvuru ve dava açma süreleri birlikte değerlendirilmelidir." },
    ],
    howToTitle: "Sarıyer'de İdari İptal Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Tespit", text: "Hangi idari işlemin iptal edileceği netleştirilir." },
      { name: "Süre Takibi", text: "60 günlük başvuru süresi hesaplanır." },
      { name: "Başvuru", text: "Gerekçeli dava dilekçesi idare mahkemesine sunulur." },
      { name: "Sonuçlandırma", text: "Mahkeme incelemesi sonucunda karar verilir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "sariyer-is-hukuku-avukati",
    name: "Sarıyer İş Hukuku Avukatı",
    heroTitle: "Sarıyer İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul (Çağlayan) Adliyesi bünyesindedir.",
    metaTitle: "Sarıyer İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Sarıyer'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, iş hukuku kapsamında Sarıyer'deki işçi ve işverenlere danışmanlık vermektedir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Ev/Villa Personeli", description: "Özel konut ve villalarda çalışanların iş sözleşmesi uyuşmazlıkları." },
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
      "Sarıyer'in villa ve yalı ağırlıklı yerleşim dokusu, ev hizmetlisi ve özel personel istihdamına ilişkin iş sözleşmesi uyuşmazlıklarının da diğer ilçelere kıyasla daha sık gündeme gelmesine yol açabilmektedir. Bu uyuşmazlıklar da diğer iş davaları gibi önce zorunlu arabuluculuk sürecinden geçer.",
      "Anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul (Çağlayan) Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "İşe iade davasından önce ne yapılmalı?", answer: "Fesihten itibaren 1 ay içinde arabulucuya başvurulması zorunludur. Arabuluculukta anlaşma sağlanamazsa son tutanaktan itibaren 2 hafta içinde işe iade davası açılmalıdır. İşe iade için İş K. m.18 uyarınca işyerinde en az 30 işçi çalışması ve işçinin en az 6 ay kıdemi bulunması aranır." },
      { question: "Kıdem tazminatı hangi hallerde doğar?", answer: "Kıdem tazminatı, işverenin haksız feshi, işçinin haklı sebeple istifası ve emeklilik gibi hallerde doğar. Haksız fesih halinde kıdem ve ihbar tazminatı davaları açılabilir. Tazminat hesabı için iş sözleşmesi, bordro ve çalışma süresine ilişkin belgeler incelenir." },
      { question: "Sarıyer'de iş davası hangi mahkemede görülür?", answer: "Sarıyer'deki iş davaları İstanbul (Çağlayan) Adliyesi bünyesindeki iş mahkemelerinde görülür. İşe iade davası öncesinde zorunlu arabuluculuk sürecinden geçilir. Kıdem ve ihbar tazminatı, fazla mesai, hafta tatili ve yıllık izin alacakları gibi işçilik talepleri de bu mahkemelerde açılır." },
      { question: "Ev hizmetlisi çalıştırmanın hukuki boyutu nedir?", answer: "Ev hizmetlisi çalıştırmada iş ilişkisinin niteliğine göre kısmen farklı sosyal güvenlik ve sözleşme kuralları uygulanabilir. Bu nedenle çalışma ilişkisinin kurulma şekli, sözleşme ve ödemeler incelenir. Fazla mesai veya yıllık izin gibi alacaklarda da ilişkinin niteliği belirleyici olur." },
      { question: "İşçilik alacaklarında zamanaşımı süresi nedir?", answer: "Çoğu işçilik alacağında 5 yıllık zamanaşımı süresi uygulanır. Fazla mesai, hafta tatili ve yıllık izin alacakları gibi taleplerde bu süre dikkate alınır. Hangi alacağa hangi sürenin uygulanacağı alacağın türüne göre değişebileceğinden belgelerin süresi içinde incelenmesi önemlidir." },
    ],
    howToTitle: "Sarıyer'de İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Fesih İncelemesi", text: "İş sözleşmesinin sona erme şekli değerlendirilir." },
      { name: "Arabuluculuk", text: "Fesihten itibaren 1 ay içinde arabulucuya başvurulur." },
      { name: "Dava Açılışı", text: "Anlaşma olmazsa iki hafta içinde iş mahkemesine başvurulur." },
      { name: "Karar", text: "Mahkeme feshin geçerliliğini inceleyip sonuçlandırır." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "ise-iade-davasi"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "sariyer-kira-tahliye-avukati",
    name: "Sarıyer Kira ve Tahliye Avukatı",
    heroTitle: "Sarıyer Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Kiracı tahliyesi, kira bedeli tespiti ve yalı/villa kira sözleşmesi uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemeleri İstanbul (Çağlayan) Adliyesi'ndedir.",
    metaTitle: "Sarıyer Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Sarıyer'de kiracı tahliyesi, kira bedeli tespiti ve villa/yalı kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, kira hukuku alanında Sarıyer'deki kiraya verenlere ve kiracılara danışmanlık vermektedir.",
    highlightCards: [
      { title: "Villa/Yalı Kiraları", description: "Yüksek değerli taşınmazlara özgü kira uyuşmazlıkları." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Villa ve yalı niteliğindeki taşınmazların kira sözleşmeleri",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Sarıyer'de özellikle Boğaz kıyısındaki mahallelerde yaz aylarına özgü kısa süreli kiralamalar ile uzun süreli konut kiraları bir arada bulunur; bu çeşitlilik kira uyuşmazlıklarının niteliğini de etkilemektedir. Taşınmazın bulunduğu yer sulh hukuk mahkemesi görevlidir.",
      "Bu davalara İstanbul (Çağlayan) Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır; yalı ve kıyı yapılarında kullanım hakkına ilişkin ek düzenlemeler de ayrıca değerlendirmeye alınabilir.",
    ],
    faqs: [
      { question: "Kısa süreli yazlık kiralamalarda hangi kurallar geçerli?", answer: "Kısa süreli yazlık kiralamalarda sözleşme türüne göre genel kira hükümleri veya kısa süreli konaklama kuralları uygulanabilir. Bu nedenle sözleşmenin süresi, kullanım amacı ve tarafların beyanları incelenir. Villa ve yalı niteliğindeki taşınmazların kira sözleşmeleri de aynı şekilde sözleşme içeriğine göre değerlendirilir." },
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir tahliye taahhüdü veya kiraya verenin ihtiyacı nedeniyle tahliye talep edilebilir. Kira borcunda ödeme için verilen süre TBK m.315 uyarınca 30 gündür; bu sürede ödeme yapılmazsa tahliye yolu açılır. Taahhüde dayalı tahliye icra yoluyla da istenebilir." },
      { question: "Sarıyer'de bir tahliye davası ortalama ne kadar sürüyor?", answer: "Tahliye davasının süresi dosyanın niteliğine bağlıdır; kira borcu, ihtiyaç veya tahliye taahhüdü gibi dayanağa göre değişir. Kira borcunda TBK m.315 uyarınca ödeme için 30 günlük süre tanınır, ardından dava veya takip yoluna gidilir. Taahhüde dayalı tahliye icra yoluyla da yürütülebilir." },
      { question: "Rayiç bedel tespiti davası hangi şartlarda açılır?", answer: "Rayiç bedel tespiti davası, mevcut kira bedelinin piyasa koşullarının gerisinde kaldığı düşünüldüğünde açılabilir. Dava, rayiç kira bedelinin tespiti ve uyarlanması amacıyla açılır. Artış oranına ilişkin uyuşmazlıklarda da sözleşme ve kira dönemi bilgileri mahkemeye sunulur. Mahkeme gerekirse bilirkişi incelemesi yaptırabilir." },
      { question: "Yalı kiralamalarında ek bir kısıtlama var mı?", answer: "Evet, yalı kiralamalarında kıyı mevzuatı kullanım ve tadilat açısından ek kısıtlamalar getirebilir. Bu nedenle villa ve yalı niteliğindeki taşınmazların kira sözleşmeleri hazırlanırken kullanım hakkına ve yapılabilecek değişikliklere ilişkin hükümler dikkatle düzenlenir. Böylece taraflar arasındaki uyuşmazlık riski azaltılabilir." },
    ],
    howToTitle: "Sarıyer'de Kiracı Tahliye Süreci Nasıl İşletilir?",
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
    urlSlug: "sariyer-vergi-avukati",
    name: "Sarıyer Vergi Avukatı",
    heroTitle: "Sarıyer Vergi Avukatı",
    heroSubtitle:
      "Vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Sarıyer Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Sarıyer'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi 2019 mezunu olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Sarıyer'deki müvekkillerine danışmanlık vermektedir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Emlak Vergisi", description: "Yüksek değerli taşınmazlarda emlak vergisi uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Vergi incelemesi sürecinde danışmanlık",
      "Emlak vergisi değer tespitine ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Sarıyer'de mükellefiyeti bulunanların vergisel işlemleri Sarıyer Vergi Dairesi Müdürlüğü tarafından yürütülür; bu daireye ait tarhiyat ve ceza kararlarına karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir.",
      "İlçedeki yüksek değerli taşınmazlar nedeniyle emlak vergisi değer tespitine ilişkin uyuşmazlıklar da zaman zaman gündeme gelmektedir.",
    ],
    faqs: [
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Vergi ve ceza ihbarnamesine karşı tebliğden itibaren 30 gün içinde vergi mahkemesinde dava açılabilir (İYUK m.7). Süre içinde dava açılmazsa tarhiyat kesinleşebilir. Bu nedenle ihbarnamenin tebliğ tarihi ve içeriği ilk incelenen unsurlardır; uzlaşma talebi de bu süreçte değerlendirilebilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "Vergi davaları İstanbul vergi mahkemelerinde görülür. Vergi ve ceza ihbarnamesine karşı iptal davası, ödeme emrine karşı dava ve emlak vergisi değer tespitine ilişkin uyuşmazlıklar bu mahkemelerde incelenir. İhbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür (İYUK m.7)." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma başvurusu dava hakkını ortadan kaldırmaz; uzlaşma sağlanamazsa kalan dava açma süresi korunur. Bu nedenle uzlaşma talebi süresi içinde yapılır ve vergi idaresi nezdinde temsil sağlanır. Uzlaşma olmazsa vergi mahkemesinde iptal davası açılabilir. Tebliğ tarihi bu hesapta esas alınır." },
      { question: "Emlak vergisi değer tespitine nasıl itiraz edilir?", answer: "Emlak vergisi değer tespitine karşı, ilgili belediye işlemine karşı süresi içinde dava açılabilir. Bu tür uyuşmazlıklar vergi mahkemesinde görülür ve dava süresi tebliğden itibaren 30 gündür (İYUK m.7). Başvuruda değer tespitine ilişkin belgeler ve tebliğ tarihi dosyaya eklenir." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır. Ödeme emrine karşı dava açılması ve vergi incelemesi sürecinde danışmanlık bu kapsamdadır. Başvuru süresi tebliğ tarihinden başladığından, ödeme emrinin tebliğ şekli ve tarihi ilk incelenen konudur. Ödeme emri ve ekleri dava dilekçesine eklenmek üzere hazırlanır." },
    ],
    howToTitle: "Sarıyer'de Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "sariyer-borclar-hukuku-avukati",
    name: "Sarıyer Borçlar Hukuku Avukatı",
    heroTitle: "Sarıyer Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Sözleşme uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; ticaret ve asliye hukuk mahkemeleri İstanbul (Çağlayan) Adliyesi'ndedir.",
    metaTitle: "Sarıyer Borçlar Hukuku Avukatı | Alacak Davası",
    metaDescription:
      "Sarıyer'de sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, borçlar hukuku kapsamında Sarıyer'deki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık vermektedir.",
    highlightCards: [
      { title: "Sözleşme Uyuşmazlıkları", description: "İfa, ihlal ve fesih kaynaklı süreçlerin yürütülmesi." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "İnşaat/Dekorasyon Sözleşmeleri", description: "Villa yapım ve tadilat sözleşmelerinden doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sözleşmenin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Villa/dekorasyon yapım sözleşmelerinden doğan uyuşmazlıklar",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Sarıyer'deki villa ve yalıların yapım, tadilat ve dekorasyon işleri kapsamında kurulan eser ve hizmet sözleşmelerinden doğan uyuşmazlıklar, ilçede sık karşılaşılan bir dava türüdür; bu uyuşmazlıklara niteliğine göre asliye hukuk veya ticaret mahkemelerinde bakılır.",
      "Bu davalar İstanbul (Çağlayan) Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Müteahhit işi zamanında teslim etmezse ne yapılabilir?", answer: "Gecikme tazminatı talep edilebilir; süre uzarsa sözleşmeden dönme hakkı doğabilir. Teslim gecikmesi, eksik ifa veya ayıplı ifa halinde sözleşmenin ifasına veya ihlaline dayalı davalar açılabilir. Villa ve dekorasyon yapım sözleşmelerindeki teslim tarihi ve cezai şart hükümleri bu değerlendirmede incelenir." },
      { question: "Yapım sözleşmesinde ayıp bildirimi ne zaman yapılmalı?", answer: "Ayıp fark edilir edilmez gecikmeksizin karşı tarafa bildirilmelidir. Bildirim yapılmazsa ayıplı ifaya dayanan haklar tartışmalı hale gelebilir. Ayıplı ifa nedeniyle sözleşmeden dönme talepleri ve villa veya dekorasyon yapım sözleşmelerinden doğan uyuşmazlıklarda ayıp bildiriminin tarihi ve şekli önemlidir." },
      { question: "Ticari alacak uyuşmazlığı hangi mahkemede görülür?", answer: "Ticari alacak uyuşmazlığı, niteliğine göre asliye ticaret mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde görülür. Alacak davası veya icra takibi yoluyla da talepte bulunulabilir. Sözleşmenin ifasına veya ihlaline dayalı davalarda görevli mahkeme, uyuşmazlığın ticari nitelikte olup olmadığına göre belirlenir." },
      { question: "Sözlü anlaşmalar mahkemede geçerli sayılır mı?", answer: "Sözleşme türüne göre sözlü anlaşmalar da geçerli olabilir, ancak ispat açısından zorluk yaratabilir ve tanık beyanı gibi delillerle desteklenmesi gerekebilir. Bu nedenle sözleşme metinlerinin yazılı hazırlanması ve incelenmesi önemlidir. Yazılı belge, ödeme kayıtları ve yazışmalar uyuşmazlıkta ispat açısından yararlı olur." },
      { question: "Eser sözleşmesinde bedel ödenmezse ne yapılabilir?", answer: "Eser sözleşmesinde bedel ödenmezse alacak davası açılabilir veya icra takibi başlatılabilir. Alacağın dayanağı olan sözleşme, fatura ve teslim belgeleri bu aşamada incelenir. Takibe itiraz edilirse itirazın iptali yoluna gidilebilir; icra takibinde ödeme emrine itiraz süresi 7 gündür (İİK m.62)." },
    ],
    howToTitle: "Sarıyer'de Alacak Davası Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Sözleşme İncelemesi", text: "Yapım/hizmet sözleşmesinin hükümleri gözden geçirilir." },
      { name: "Bildirim", text: "Ayıp veya gecikme karşı tarafa bildirilir." },
      { name: "Hukuki Başvuru", text: "Gerekirse dava veya icra takibi başlatılır." },
      { name: "Sonuçlandırma", text: "Karar veya anlaşma ile süreç tamamlanır." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];

export const sariyerServices: PseoService[] = [...sariyerBaseServices, sariyerMiras];
