import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const sariyerServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "sariyer-avukat",
    name: "Sarıyer Avukat",
    heroTitle: "Sarıyer Avukat",
    heroSubtitle:
      "Sarıyer'de yaşayan veya işyeri bulunan kişilere ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık verilir; ilçe İstanbul (Çağlayan) Adliyesi'ne bağlıdır.",
    metaTitle: "Sarıyer Avukat",
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
      { question: "Sarıyer'deki davalara hangi adliye bakıyor?", answer: "Sarıyer, İstanbul (Çağlayan) Adliyesi'nin yargı çevresi içinde yer almaktadır." },
      { question: "Görüşme talebi nasıl iletilir?", answer: "WhatsApp veya telefon aracılığıyla ulaşılarak randevu günü kararlaştırılır." },
      { question: "Hizmet kapsamına hangi hukuk dalları giriyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında temsil sağlanmaktadır." },
      { question: "Büro Sarıyer'de mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'da yer almaktadır; Sarıyer'deki müvekkiller de aynı kapsamda hizmet almaktadır." },
      { question: "Görüşme ücreti nasıl belirleniyor?", answer: "Dosyanın kapsamına göre değişir ve randevu sırasında netleştirilir." },
      { question: "Yalı ve villa niteliğindeki taşınmazlarla ilgili destek var mı?", answer: "Evet, bu tür taşınmazlara özgü tapu ve kullanım uyuşmazlıklarında gayrimenkul hukuku kapsamında danışmanlık sağlanır." },
      { question: "Görüşmeler uzaktan yapılabiliyor mu?", answer: "Evet, tercihe göre yüz yüze veya görüntülü/sesli olarak planlanabilir." },
      { question: "Çağlayan Adalet Sarayı'na Sarıyer'den ulaşım nasıl?", answer: "M2 hattının Hacıosman istasyonu ve sahil yolu üzerindeki otobüs seferleriyle ulaşım sağlanabilir." },
      { question: "Acil bir tutuklama veya gözaltı durumunda ne yapmalı?", answer: "Vakit kaybetmeden telefon ya da WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Dosyanın seyri hakkında bilgi almak mümkün mü?", answer: "Evet, süreç boyunca gelişmeler düzenli olarak müvekkille paylaşılır." },
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
    metaTitle: "Sarıyer Boşanma Avukatı",
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
      { question: "Sarıyer'de boşanma davası nereye açılır?", answer: "İstanbul (Çağlayan) Adliyesi bünyesindeki aile mahkemelerine açılır." },
      { question: "Anlaşmalı boşanmada protokol neyi içermeli?", answer: "Velayet, nafaka, mal rejimi ve varsa tazminata ilişkin tüm hususları eksiksiz düzenlemelidir." },
      { question: "Yüksek değerli taşınmazlar mal paylaşımını nasıl etkiler?", answer: "Taşınmazın edinim tarihi ve niteliğine göre katılma alacağı hesaplaması değişebilir, bilirkişi incelemesi gerekebilir." },
      { question: "Velayet hangi esasa göre belirlenir?", answer: "Belirleyici ölçüt çocuğun üstün yararıdır; mahkeme tarafların fiili durumunu buna göre değerlendirir." },
      { question: "Nafaka sonradan değişebilir mi?", answer: "Evet, tarafların ekonomik koşullarındaki değişim nafakanın yeniden belirlenmesini gerektirebilir." },
      { question: "Dava sürerken nafaka talep edilebilir mi?", answer: "Evet, ihtiyaç duyan taraf lehine tedbir nafakasına hükmedilebilir." },
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
    metaTitle: "Sarıyer Ceza Avukatı",
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
      { question: "Sarıyer'de görülen ceza davalarında yetkili adliye neresidir?", answer: "İstanbul (Çağlayan) Adliyesi'dir." },
      { question: "Gözaltındaki bir kişiyle ne zaman görüşülebilir?", answer: "Gözaltı kararı verildiği andan itibaren görüşme talep edilebilir." },
      { question: "Tutukluluğa itiraz için belirli bir gün sınırı var mı?", answer: "Kanunda sabit bir gün sayısı yoktur; süreç devam ederken her aşamada itiraz edilebilir." },
      { question: "Zorunlu müdafilik ne anlama gelir?", answer: "Kanunda belirtilen ağırlıktaki suçlarda avukat bulundurulması zorunluluğunu ifade eder." },
      { question: "Etkin pişmanlık hangi suçlarda uygulanır?", answer: "Kanunda açıkça sayılan suç tiplerinde uygulanabilir." },
      { question: "Temyiz ile istinaf arasındaki fark nedir?", answer: "İstinaf olayı yeniden inceler, temyiz ise hukuka uygunluk denetimi yapar." },
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
    metaTitle: "Sarıyer Gayrimenkul Avukatı",
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
      { question: "Yalı niteliğindeki taşınmazlarda ek bir kısıtlama var mı?", answer: "Kıyı Kanunu ve ilgili koruma mevzuatı, kullanım ve tadilat konusunda ek kısıtlamalar getirebilir." },
      { question: "Sarıyer'de gayrimenkul davası hangi mahkemede görülür?", answer: "Uyuşmazlığın niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde görülür." },
      { question: "Orman köyü sınırındaki taşınmazlarda tapu sorunu nasıl çözülür?", answer: "Kadastro ve orman sınırlandırma kayıtlarının incelenmesi gerekir, gerekirse dava açılabilir." },
      { question: "Villa/site projelerinde ortak alan anlaşmazlığı nasıl giderilir?", answer: "Öncelikle yönetim planı esas alınır, çözülemezse dava yoluna gidilir." },
      { question: "Yüksek değerli bir taşınmaz alımında nelere dikkat edilmeli?", answer: "Tapu kaydı, kıyı/orman sınırı durumu ve varsa şerhlerin önceden incelenmesi önerilir." },
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
    metaTitle: "Sarıyer İcra Avukatı",
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
      { question: "İcra dosyasına itiraz için süre ne kadardır?", answer: "Ödeme emrinin tebliğinden itibaren 7 gün içinde itiraz edilmelidir." },
      { question: "İcra mahkemesi hangi uyuşmazlıklara bakar?", answer: "Takibe ilişkin itiraz, şikayet ve istihkak gibi konularda görevlidir; bu mahkemeler İstanbul (Çağlayan) Adliyesi bünyesindedir." },
      { question: "Haczedilen yüksek değerli bir taşınmazın satışı nasıl gerçekleşir?", answer: "Kıymet takdiri sonrasında açık artırma yoluyla ihale edilir." },
      { question: "Borçlu itiraz etmezse ne olur?", answer: "Takip kesinleşir ve haciz aşamasına geçilebilir." },
      { question: "Alacaklı hangi yollarla tahsilat yapabilir?", answer: "Maaş haczi, banka hesabı haczi veya taşınmaz haczi gibi yöntemler kullanılabilir." },
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
    metaTitle: "Sarıyer İdare Avukatı",
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
      { question: "Orman sınırı kararına karşı ne yapılabilir?", answer: "Bilirkişi incelemesi talep edilerek idare mahkemesinde dava açılabilir." },
      { question: "Kıyı kenar çizgisi neden önemlidir?", answer: "Taşınmazın yapılaşma ve kullanım hakkını doğrudan etkileyen bir idari tespittir." },
      { question: "Dava açma süresi kaçırılırsa ne olur?", answer: "Süre aşımı nedeniyle dava usulden reddedilebilir." },
      { question: "Villa projelerinde ruhsat iptaline itiraz mümkün mü?", answer: "Evet, ilgili idari işleme karşı idare mahkemesinde dava açılabilir." },
      { question: "Tazminat talebinde bulunmak için önce dava mı açılmalı?", answer: "Bazı hallerde önce idareye başvuru yapılması, ardından dava yoluna gidilmesi gerekir." },
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
    metaTitle: "Sarıyer İş Hukuku Avukatı",
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
      { question: "İşe iade davasından önce ne yapılmalı?", answer: "Fesihten itibaren 1 ay içinde arabulucuya başvurulması zorunludur." },
      { question: "Kıdem tazminatı hangi hallerde doğar?", answer: "İşverenin haksız feshi, işçinin haklı sebeple istifası ve emeklilik gibi hallerde doğar." },
      { question: "Sarıyer'de iş davası hangi mahkemede görülür?", answer: "İstanbul (Çağlayan) Adliyesi bünyesindeki iş mahkemelerinde görülür." },
      { question: "Ev hizmetlisi çalıştırmanın hukuki boyutu nedir?", answer: "İş ilişkisinin niteliğine göre kısmen farklı sosyal güvenlik ve sözleşme kuralları uygulanabilir." },
      { question: "İşçilik alacaklarında zamanaşımı süresi nedir?", answer: "Çoğu işçilik alacağında 5 yıllık zamanaşımı süresi uygulanır." },
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
    metaTitle: "Sarıyer Kira ve Tahliye Avukatı",
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
      { question: "Kısa süreli yazlık kiralamalarda hangi kurallar geçerli?", answer: "Sözleşme türüne göre genel kira hükümleri veya kısa süreli konaklama kuralları uygulanabilir." },
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Sarıyer'de bir tahliye davası ortalama ne kadar sürüyor?", answer: "Dosyanın niteliğine bağlı olarak birkaç aydan bir buçuk yıla kadar uzayabilir." },
      { question: "Rayiç bedel tespiti davası hangi şartlarda açılır?", answer: "Mevcut kira bedelinin piyasa koşullarının gerisinde kaldığı düşünüldüğünde açılabilir." },
      { question: "Yalı kiralamalarında ek bir kısıtlama var mı?", answer: "Kıyı mevzuatı kullanım ve tadilat açısından ek kısıtlamalar getirebilir." },
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
    metaTitle: "Sarıyer Vergi Avukatı",
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
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Emlak vergisi değer tespitine nasıl itiraz edilir?", answer: "İlgili belediye işlemine karşı süresi içinde dava açılabilir." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır." },
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
    metaTitle: "Sarıyer Borçlar Hukuku Avukatı",
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
      { question: "Müteahhit işi zamanında teslim etmezse ne yapılabilir?", answer: "Gecikme tazminatı talep edilebilir, süre uzarsa sözleşmeden dönme hakkı doğabilir." },
      { question: "Yapım sözleşmesinde ayıp bildirimi ne zaman yapılmalı?", answer: "Ayıp fark edilir edilmez gecikmeksizin karşı tarafa bildirilmelidir." },
      { question: "Ticari alacak uyuşmazlığı hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde görülür." },
      { question: "Sözlü anlaşmalar mahkemede geçerli sayılır mı?", answer: "İspat açısından zorluk yaratabilir, tanık beyanı gibi delillerle desteklenmesi gerekebilir." },
      { question: "Eser sözleşmesinde bedel ödenmezse ne yapılabilir?", answer: "Alacak davası açılabilir veya icra takibi başlatılabilir." },
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
