import type { PseoService } from "./types";
import { bayrampasaMiras } from "./miras/bayrampasaMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const bayrampasaBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "bayrampasa-avukat",
    name: "Bayrampaşa Avukat",
    heroTitle: "Bayrampaşa Avukat",
    heroSubtitle:
      "Bayrampaşa'da oturan ya da işyeri işleten kişiler; aile, ceza, iş, gayrimenkul, icra, borçlar, vergi ve idare hukuku dosyalarında Furkan Arıkan'dan danışmanlık ve temsil alabilir. İlçedeki davalar Çağlayan'daki İstanbul Adliyesi'nde görülür.",
    metaTitle: "Bayrampaşa Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Bayrampaşa'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'nda 72621 sicil numarasıyla kayıtlıdır ve MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olmuştur. Büro Beşiktaş/Sinanpaşa'dadır; Yenidoğan, Vatan, Terazidere veya Kartaltepe gibi mahallelerde yaşayan ya da çalışan kişilerle de büroda ya da çevrim içi görüşülür. İlk iletişim için WhatsApp veya telefon yeterlidir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Gözaltı, ifade ve duruşma safhalarında müdafi olarak bulunmak." },
      { title: "Aile Hukuku", description: "Anlaşmalı veya çekişmeli boşanma, velayet ve nafaka dosyaları." },
      { title: "Gayrimenkul Hukuku", description: "Apartman dokusundaki kat mülkiyeti, tapu ve kira sorunları." },
      { title: "İş Hukuku", description: "Forum İstanbul çevresindeki mağaza çalışanlarının tazminat ve ücret talepleri." },
      { title: "İcra Hukuku", description: "Ticari ve bireysel alacaklarda takip başlatma ya da takibe itiraz." },
      { title: "İdare Hukuku", description: "Riskli yapı, imar ve idari para cezası işlemlerinin iptali." },
      { title: "Vergi Hukuku", description: "Bayrampaşa Vergi Dairesi kaynaklı tarhiyat ve cezalara itiraz." },
      { title: "Borçlar Hukuku", description: "Tedarik ve hizmet sözleşmelerinden doğan alacak ve tazminat davaları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı, ifade ve tutuklama aşamalarında müdafilik",
      "Çekişmeli ya da anlaşmalı boşanma ile velayet ve nafaka taleplerinin yürütülmesi",
      "Kat mülkiyeti, kentsel dönüşüm ve tapu işlemlerine ilişkin uyuşmazlıklar",
      "Forum İstanbul çevresi dahil işyeri kiralarında sözleşme ve tahliye desteği",
      "İşten çıkarılan veya ücreti ödenmeyen çalışanların tazminat ve alacak talepleri",
      "İcra takibi başlatma, ödeme emrine itiraz ve haciz aşaması takibi",
      "Riskli yapı kararı ve idari para cezalarına karşı iptal davaları",
      "Vergi ceza ihbarnamelerine itiraz ve sözleşmeden doğan alacak davaları",
    ],
    localParagraphs: [
      "Yenidoğan, Vatan, Terazidere, Altıntepsi ve Kartaltepe gibi mahallelerden oluşan Bayrampaşa'da günlük hayat, M1A/M1B hattındaki Bayrampaşa-Maltepe istasyonu ve metrobüs aktarması çevresinde akar. Bu erişim kolaylığı ticari ve hizmet hareketini artırır; Forum İstanbul çevresindeki faaliyet de ilçeden gelen başvuruların konusunu çeşitlendirir.",
      "Davalar Çağlayan'daki İstanbul Adliyesi'nde, vergi işlemleri ise Bayrampaşa Vergi Dairesi Müdürlüğü'nde görülür. Randevuya gelirken kimlik, tebligat, sözleşme, tapu veya kira belgeleri ile ödeme makbuzlarının hazırlanması ilk görüşmeyi kısaltır.",
    ],
    faqs: [
      { question: "Bayrampaşa'daki davalar hangi adliyede görülür?", answer: "Bayrampaşa'daki uyuşmazlıklara İstanbul (Çağlayan) Adliyesi bakar. Hukuk, ceza ve icra dosyaları bu adliyedeki mahkeme ve dairelerde yürür; idari işlemlere karşı davalar idare mahkemelerinde, vergi uyuşmazlıkları vergi mahkemelerinde görülür. Hangi mahkemenin görevli olacağı dosyanın türüne göre belirlenir." },
      { question: "Büro Bayrampaşa'da mı?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Bayrampaşa'daki müvekkillere buradan ve çevrim içi görüşmelerle hizmet verilir. İlçeden M1A/M1B hattı ile metrobüse aktarma yapılabildiği için şehrin diğer bölgelerine geçmek kolaydır. İlk adım, WhatsApp veya telefonla randevu talep etmektir; görüşme günü ve biçimi kişinin uygunluğuna göre belirlenir." },
      { question: "Hangi konularda danışmanlık alınabilir?", answer: "Aile, ceza, iş, gayrimenkul, icra, borçlar, vergi ve idare hukuku alanlarında hukuki danışma ve dava takibi yapılır. Bayrampaşa'daki başvurularda kat mülkiyeti, işyeri kirası, işçilik alacağı ve icra itirazı gibi başlıklar öne çıkabilir. Konunun hangi kategoriye girdiği ilk görüşmede netleştirilir." },
      { question: "Danışmanlık ve vekalet ücreti nasıl belirlenir?", answer: "Ücret tutarı, dosyanın kapsamı, süresi ve iş yüküne göre saptanır. Danışma görüşmesi bedelli yapılır; vekalet alınırsa ücret sözleşmeyle yazıya geçirilir. Avukatlık Kanunu m.164 gereği taraflar, Avukatlık Asgari Ücret Tarifesi'nin altında anlaşamaz. Rakam ve ödeme planı, dosya incelendikten sonra randevuda yazılı olarak paylaşılır." },
      { question: "Gözaltına alınan kişi için ilk ne yapılmalı?", answer: "Gözaltındaki kişinin ifadesi alınmadan önce müdafi yardımından yararlanma hakkı vardır; bu hakkı kullanmak için hemen telefonla ya da WhatsApp üzerinden büroyla iletişime geçilmelidir. Müdafi, ifade sırasında yanında bulunur, dosyadaki belgeleri inceler ve tutuklama talebine karşı itiraz yollarını değerlendirir." },
    ],
    howToTitle: "Bayrampaşa'dan Büroya Başvuru Adımları Nelerdir?",
    howToSteps: [
      { name: "Mesaj veya Arama", text: "WhatsApp ya da telefonla uyuşmazlığın konusu ve varsa süre bilgisi kısaca iletilir." },
      { name: "Belge Hazırlığı", text: "Kimlik, tebligat, sözleşme, tapu veya ödeme kayıtları gibi evrak bir araya getirilir." },
      { name: "Ücretli Danışma", text: "Randevuda hukuki durum değerlendirilir ve izlenebilecek yollar anlatılır." },
      { name: "Vekalet ve Takip", text: "Karar verilirse vekaletname düzenlenir, dosya takibi başlar ve gelişmeler paylaşılır." },
    ],
    crosslinkLabel: "Bayrampaşa Avukat (Genel)",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "kidem-tazminati-hesaplama-2026", "icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "bayrampasa-bosanma-avukati",
    name: "Bayrampaşa Boşanma Avukatı",
    heroTitle: "Bayrampaşa Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma davalarında velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlayan Furkan Arıkan, davalar İstanbul (Çağlayan) Adliyesi'nde görülmek üzere Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    metaTitle: "Bayrampaşa Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Bayrampaşa'da anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Boşanma, velayet ve nafaka dosyalarında temsil sağlayan Furkan Arıkan, İstanbul Barosu'na kayıtlı (72621) bir avukattır; 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve Bayrampaşa'daki müvekkillerine aile hukuku alanında danışmanlık vermektedir.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokol hazırlığı ve duruşma temsili." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına göre düzenleme talepleri." },
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
      "Bayrampaşa'nın yoğun ve istikrarlı konut dokusu, boşanma davalarında ortak konut ve ev eşyasına ilişkin taleplerin de sıkça gündeme gelmesine yol açmaktadır.",
      "İlçede açılan boşanma, velayet ve nafaka davalarına İstanbul (Çağlayan) Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davasında yetkili mahkeme hangisidir?", answer: "Boşanma davasında yetkili mahkeme, İstanbul (Çağlayan) Adliyesi'ndeki aile mahkemesidir. Yetki TMK m.168 uyarınca eşlerden birinin yerleşim yeri mahkemesi veya eşlerin en son altı aydan beri birlikte oturdukları yer mahkemesidir. Aile mahkemesi velayet ve nafaka taleplerine de aynı davada bakar." },
      { question: "Anlaşmalı boşanma ne kadar sürede sonuçlanır?", answer: "Anlaşmalı boşanma genellikle tek duruşmada, protokol eksiksizse kısa sürede sonuçlanabilir. Bunun için evliliğin en az 1 yıl sürmüş olması ve iki eşin duruşmada birlikte beyanda bulunması gerekir (TMK m.166/3). Protokolde mal paylaşımı, velayet ve nafaka gibi hususların açıkça düzenlenmesi önem taşır." },
      { question: "Çekişmeli boşanmada tanık dinletmek zorunlu mu?", answer: "Çekişmeli boşanmada tanık dinletmek zorunlu değildir; ancak kusur iddialarının ispatında önemli rol oynayabilir. Kusur, yazışmalar, kayıtlar ve diğer delillerle de gösterilebilir. Hangi delillerin sunulacağı olayın niteliğine göre belirlenir; çekişmeli süreçte delillerin sağlam olması sonucu belirler." },
      { question: "Velayet sonradan değiştirilebilir mi?", answer: "Koşulların değişmesi halinde velayetin değiştirilmesi talep edilebilir. Velayet düzenlendikten sonra çocuğun yararını etkileyen yeni bir durum ortaya çıkarsa aile mahkemesinde velayet değişikliği talebiyle başvurulabilir. Talepte değişen koşullar belgeler ve delillerle ortaya konulur; dava, aile mahkemesinde görülür." },
      { question: "İştirak nafakası kime ödenir?", answer: "İştirak nafakası, velayet kendisinde olmayan ebeveyn tarafından çocuğun giderlerine katkı olarak ödenir. Nafakanın miktarı, tarafların gelir durumu ve çocuğun ihtiyaçları birlikte değerlendirilerek belirlenir. Koşullar değişirse nafakanın artırılması, azaltılması veya kaldırılması talep edilebilir. İştirak nafakası, boşanma davasıyla birlikte hükme bağlanır." },
      { question: "Boşanma protokolüne sonradan itiraz edilebilir mi?", answer: "Kesinleşen boşanma protokolüne sonradan itiraz kural olarak mümkün değildir. Protokol hakim onayından sonra karara bağlanır; bu nedenle mal paylaşımı, velayet ve nafaka hususlarının protokol imzalanmadan önce eksiksiz düzenlenmesi önemlidir. Protokol metni imza öncesinde hukuki incelemeden geçirilmelidir." },
    ],
    howToTitle: "Bayrampaşa'da Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "İlk Görüşme", text: "Evlilik birliğinin durumu ve talepler konuşulur." },
      { name: "Evrak Hazırlığı", text: "Protokol veya dava dilekçesi düzenlenir." },
      { name: "Başvuru", text: "Aile mahkemesine dosya sunulur." },
      { name: "Karar", text: "Duruşma sonunda mahkeme kararını açıklar." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "bosanmada-nafaka-turleri"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "bayrampasa-ceza-avukati",
    name: "Bayrampaşa Ceza Avukatı",
    heroTitle: "Bayrampaşa Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma aşamalarının her birinde müdafilik hizmeti sunan Furkan Arıkan, kovuşturması İstanbul (Çağlayan) Adliyesi'nde yürütülen dosyalarda Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    metaTitle: "Bayrampaşa Ceza Avukatı | Müdafilik",
    metaDescription:
      "Bayrampaşa'da soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Ceza yargılamasının her aşamasında müdafilik yapan Furkan Arıkan, İstanbul Barosu'na kayıtlı (72621) bir avukattır; 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve Bayrampaşa'daki müvekkillerine gözaltı, soruşturma ve kovuşturma süreçlerinde hizmet vermektedir.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Kanun Yolları", description: "İstinaf ve temyiz süreçlerinin yürütülmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı aşamasında hukuki danışmanlık sağlanması",
      "Soruşturma sürecinin takip edilmesi",
      "Tutukluluğa ve adli kontrole itiraz edilmesi",
      "Duruşmalarda savunmanın sunulması",
      "Karara karşı üst mahkemelere başvuru dilekçelerinin hazırlanması",
      "Uzlaşma ve etkin pişmanlık konularında bilgilendirme",
    ],
    localParagraphs: [
      "Bayrampaşa'nın yoğun nüfusu ve Forum İstanbul gibi büyük alışveriş merkezlerinin bulunması, kolluk müdahalesi gerektiren bazı olayların ilçede görece sık yaşanmasına zemin hazırlayabilmektedir. Kovuşturma aşamasındaki davalar İstanbul (Çağlayan) Adliyesi'nde görülür.",
      "Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından belirleyicidir.",
    ],
    faqs: [
      { question: "Bayrampaşa'da ceza yargılaması nerede yürütülür?", answer: "Bayrampaşa'da ceza yargılaması, Çağlayan'daki İstanbul Adliyesi'nde yürütülür. Soruşturma aşaması savcılık nezdinde yürütülür; kovuşturma aşamasına geçildiğinde davalar bu adliyede görülür. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamalar açısından önem taşır. Soruşturma ve kovuşturma süreçlerinde müdafilik hizmeti sağlanır." },
      { question: "Avukatsız ifade verilebilir mi?", answer: "Evet, avukatsız ifade verilebilir; ancak müdafi bulundurmak hak kaybını önler. Müdafi ifade sırasında hakların korunmasına yardımcı olur ve soruşturma dosyasının takibini sağlar. Gözaltına alınan kişinin müdafi ile görüşme hakkı, gözaltı sürecinin başladığı andan itibaren doğar." },
      { question: "Tutuklama kararı kim tarafından verilir?", answer: "Tutuklama kararı sulh ceza hakimliği tarafından verilir (CMK m.100/101). Karar sonrasında tutuklamaya karşı 7 gün içinde itiraz edilebilir. Sulh ceza hakimliği, şüphelinin ifadesini ve dosyadaki delilleri değerlendirerek tutuklama veya adli kontrol gibi tedbirlere karar verir." },
      { question: "Beraat eden sanık yargılama giderlerini geri alabilir mi?", answer: "Beraat eden sanığın bazı yargılama giderleri hazineden karşılanabilir. Hangi giderlerin karşılanacağı hükümde belirtilir ve dosyadaki belge ile kayıtlara göre değerlendirilir. Karara karşı kanun yoluna başvurulabileceğinden hüküm fıkrası dikkatle incelenmeli, gider kalemleri belgelerle ortaya konulmalıdır. Bu nedenle hükümde yer alan gider ve masraf kalemleri ayrıca kontrol edilir." },
      { question: "İstinaf mahkemesi kararı kesin midir?", answer: "İstinaf mahkemesi kararı her zaman kesin değildir; bazı hallerde temyiz yoluna gidilebilir. Temyize açık olup olmadığı suçun niteliğine ve verilen karara göre belirlenir. İstinaf ve temyiz dilekçeleri kanuni süre içinde hazırlanmalıdır; sürenin başlangıcı karar tebliğine bağlıdır." },
      { question: "Uzlaşma teklifi kim tarafından yapılır?", answer: "Uzlaşma teklifi uzlaştırmacı aracılığıyla taraflara götürülür. Uzlaşmaya tabi suçlarda dosya uzlaştırmacıya gönderilir; uzlaştırmacı şüpheli ve mağdurla görüşerek teklifi iletir. Taraflar anlaşırsa süreç buna göre sonuçlanır; anlaşamazlarsa yargılama kaldığı yerden devam eder. Teklifin kabul edilmesi veya edilmemesi savunma hakkını ortadan kaldırmaz." },
    ],
    howToTitle: "Bayrampaşa'da Ceza Yargılaması Nasıl İlerler?",
    howToSteps: [
      { name: "Bildirim", text: "Şikayet veya ihbarla süreç başlar." },
      { name: "İfade ve Gözaltı", text: "Şüphelinin ifadesi alınır, gerekirse gözaltına alınır." },
      { name: "Dava Süreci", text: "Kovuşturma aşamasında duruşmalar yapılır." },
      { name: "Karar", text: "Mahkeme kararını verir, gerekirse üst yargı yoluna gidilir." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "bayrampasa-gayrimenkul-avukati",
    name: "Bayrampaşa Gayrimenkul Avukatı",
    heroTitle: "Bayrampaşa Gayrimenkul Avukatı",
    heroSubtitle:
      "Tapu uyuşmazlıkları, kat mülkiyeti sorunları ve kira ilişkilerinde temsil sağlayan Furkan Arıkan, davalar İstanbul (Çağlayan) Adliyesi'nde görülmek üzere Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    metaTitle: "Bayrampaşa Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Bayrampaşa'da tapu iptali, kat mülkiyeti uyuşmazlıkları ve kira ilişkilerinde gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Tapu, kat mülkiyeti ve kira uyuşmazlıklarında danışmanlık veren Furkan Arıkan, İstanbul Barosu'na kayıtlı (72621) bir avukattır; 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve gayrimenkul hukuku kapsamında Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    highlightCards: [
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Kat Mülkiyeti", description: "Yönetim planı ve ortak gider anlaşmazlıkları." },
      { title: "Kentsel Dönüşüm", description: "Yoğun konut dokusundaki dönüşüm süreçlerinde destek." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Tapu iptali ve tescil davalarının açılması",
      "Kat mülkiyeti ve yönetim planından doğan uyuşmazlıklar",
      "Riskli yapı tespiti sonrası kentsel dönüşüm sürecinde danışmanlık",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
      "Ortaklığın giderilmesi (izale-i şüyu) davaları",
    ],
    localParagraphs: [
      "Bayrampaşa'nın yoğun ve büyük ölçüde 1980-90'lı yıllarda inşa edilmiş apartman dokusu, kat mülkiyeti ve kentsel dönüşüm kapsamındaki tapu işlemlerini sık gündeme gelen konular haline getirmektedir; bu uyuşmazlıklar İstanbul (Çağlayan) Adliyesi'ndeki sulh hukuk ve asliye hukuk mahkemelerinde görülür.",
      "Forum İstanbul çevresindeki ticari alanlarda işyeri niteliğindeki taşınmazlara ilişkin kira ve kullanım uyuşmazlıkları da zaman zaman gündeme gelmektedir.",
    ],
    faqs: [
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Tapu iptal ve tescil davası, hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tarafından açılabilir. Tescilin dayanağının geçersiz olduğu veya hakkın tapuya doğru yansımadığı iddia edilebilir. Dava taşınmazın niteliğine göre görevli mahkemede görülür ve dosyaya tapu kaydı ile dayanak belgeler eklenir." },
      { question: "Bayrampaşa'da gayrimenkul davası hangi mahkemede görülür?", answer: "Gayrimenkul davası, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde görülür. Kira ve tahliye gibi uyuşmazlıklar sulh hukuk mahkemesinde, tapu iptali ve tescil gibi davalar ise asliye hukuk mahkemesinde ele alınabilir. Dosyaya tapu kaydı ve sözleşme gibi belgeler eklenir." },
      { question: "Kentsel dönüşüm süreci nasıl başlar?", answer: "Kentsel dönüşüm süreci, riskli yapı tespiti sonrasında kat maliklerinin çoğunluk kararı ve idari başvuru aşamalarıyla ilerler. Bayrampaşa'daki yoğun apartman dokusu nedeniyle bu süreç sıkça gündeme gelir. Malikler arasında uyuşmazlık çıkarsa tapu ve kat mülkiyetine ilişkin davalar sulh hukuk veya asliye hukuk mahkemesinde görülür." },
      { question: "Ortak gider anlaşmazlıkları nasıl çözülür?", answer: "Ortak gider anlaşmazlıklarında öncelikle yönetim planı ve Kat Mülkiyeti Kanunu esas alınır; çözülemezse dava açılabilir. Alacak için icra takibi de başlatılabilir. Yönetim planı, karar defteri ve borç dökümü dosyada incelenir; uyuşmazlık mahkemede veya icra yoluyla çözüme kavuşturulur." },
      { question: "İşyeri niteliğindeki taşınmaz alımında nelere dikkat edilmeli?", answer: "İşyeri niteliğindeki taşınmaz alımında tapu kaydı, imar durumu ve varsa kısıtlamaların önceden incelenmesi önerilir. Taşınmaz üzerinde ipotek, haciz veya şerh bulunup bulunmadığı tapu kaydından görülebilir. Forum İstanbul çevresi gibi ticari alanlarda kira ve kullanım durumu da ayrıca değerlendirilir." },
    ],
    howToTitle: "Bayrampaşa'da Tapu İptali Süreci Nasıl İlerler?",
    howToSteps: [
      { name: "Kayıt İncelemesi", text: "Taşınmazın tapu kaydı ve varsa şerhler incelenir." },
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
    urlSlug: "bayrampasa-icra-avukati",
    name: "Bayrampaşa İcra Avukatı",
    heroTitle: "Bayrampaşa İcra Avukatı",
    heroSubtitle:
      "Alacak tahsili amacıyla icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlayan Furkan Arıkan, icra mahkemeleri İstanbul (Çağlayan) Adliyesi'nde olan dosyalarda Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    metaTitle: "Bayrampaşa İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Bayrampaşa'da icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İcra ve iflas hukuku kapsamında alacaklı ve borçlu taraflara danışmanlık veren Furkan Arıkan, İstanbul Barosu'na kayıtlı (72621) bir avukattır; 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve Bayrampaşa'daki müvekkillerine takip sürecinin her aşamasında hizmet vermektedir.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İcra takibinin ilamlı veya ilamsız olarak başlatılması",
      "Borca, imzaya veya yetkiye itiraz dilekçesi hazırlanması",
      "İtirazın iptali davası yoluyla takibin sürdürülmesi",
      "Maaş, banka hesabı ve taşınır/taşınmaz haczi işlemleri",
      "İhalenin feshi talepleri",
      "Konkordato başvurusu ve iflasın ertelenmesi süreçlerinde danışmanlık",
    ],
    localParagraphs: [
      "Forum İstanbul çevresindeki ticari işletmeler ile ilçedeki küçük esnafın alacakları, Bayrampaşa'da icra takiplerinin sık başvurulan bir yol olmasına yol açmaktadır; bu takiplere ilişkin uyuşmazlıklar İstanbul (Çağlayan) Adliyesi'ndeki icra mahkemelerinde görülür.",
      "Borçlunun Bayrampaşa'da yerleşik olduğu takiplerde yetkili icra dairesi, kural olarak borçlunun ikametgahı veya sözleşmede belirlenen yer esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "Ödeme emrine itiraz nasıl yapılır?", answer: "Ödeme emrine itiraz, icra dairesine veya icra mahkemesine yazılı dilekçeyle başvurularak yapılır. İtiraz süresi tebliğden itibaren 7 gündür (İİK m.62). Dilekçede borca, imzaya veya yetkiye ilişkin itirazlar açıkça belirtilmelidir; süre kaçırılırsa takip kesinleşebilir. Tebliğ tarihinin belgelerden doğru tespit edilmesi, sürenin korunması açısından önem taşır." },
      { question: "İcra takibi ne kadar sürede sonuçlanır?", answer: "İcra takibinin ne kadar sürede sonuçlanacağı, borçlunun itiraz edip etmemesine ve mal varlığına göre değişir. Borçlu itiraz etmezse takip kesinleşir ve haciz aşamasına geçilir; itiraz ederse itirazın iptali davası gibi ek süreçler gerekebilir. Bu nedenle süre dosyaya göre belirlenir." },
      { question: "Maaş haczi ne kadar uygulanabilir?", answer: "Maaş haczi, kanunda öngörülen oranlarla sınırlı olarak uygulanır. Maaşın tamamı haczedilemez; borçlunun geçimini sağlayacak bölüm haciz dışında bırakılır. Maaş haczi ile banka hesabı ve taşınır veya taşınmaz mal haczi icra dairesince yürütülür; uygulanacak oran kanuna göre belirlenir." },
      { question: "Şikayet yolu ne zaman kullanılır?", answer: "Şikayet yolu, icra memurunun usule aykırı işlemlerine karşı kullanılır. İcra dairesinin kanuna aykırı bir işlem yapması halinde icra mahkemesine şikayet başvurusu yapılır. Şikayet için süre ve konu işlemin niteliğine göre belirlenir; bu nedenle işlemin öğrenildiği tarih önemlidir." },
      { question: "İcra mahkemesi kararına itiraz edilebilir mi?", answer: "İcra mahkemesi kararlarına karşı bazı hallerde istinaf yoluna gidilebilir. Hangi kararların kanun yoluna açık olduğu kararın niteliğine göre belirlenir. Kanun yolu süreleri kararın tebliğ veya tefhim tarihine göre işler; bu nedenle kararın içeriği ve tebliğ tarihi dikkatle incelenmelidir." },
    ],
    howToTitle: "Bayrampaşa'da İcra Takibi Hangi Aşamalardan Oluşur?",
    howToSteps: [
      { name: "Hazırlık", text: "Alacağı destekleyen belgeler bir araya getirilir." },
      { name: "Başvuru", text: "İcra dairesine takip talebiyle başvurulur." },
      { name: "Tebliğ ve Bekleme", text: "Ödeme emri tebliğ edilir, yasal süre beklenir." },
      { name: "İcra İşlemleri", text: "Gerekirse haciz ve satış aşamasına geçilir." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "bayrampasa-idare-avukati",
    name: "Bayrampaşa İdare Avukatı",
    heroTitle: "Bayrampaşa İdare Avukatı",
    heroSubtitle:
      "Belediye ve diğer kamu kurumu işlemlerine karşı iptal ve tam yargı davalarında temsil sağlayan Furkan Arıkan, yetkili mahkemenin İstanbul idare mahkemeleri olduğu dosyalarda Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    metaTitle: "Bayrampaşa İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Bayrampaşa'da idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "İdari işlemlerin iptali ve tam yargı davalarında danışmanlık veren Furkan Arıkan, İstanbul Barosu'na kayıtlı (72621) bir avukattır; 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve idare hukuku kapsamında Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Tam Yargı Davaları", description: "İdarenin işlem/eyleminden doğan zararın tazmini." },
      { title: "Kentsel Dönüşüm Kararları", description: "Riskli yapı tespitine ilişkin idari işlemlere itiraz." },
      { title: "Belediye İşlemleri", description: "İmar, ruhsat ve ceza kararlarına ilişkin uyuşmazlıklar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Riskli yapı tespitine dayalı kararlara itiraz edilmesi",
      "Belediye ruhsat ve ceza işlemlerine karşı dava açılması",
      "İdarenin işlem/eyleminden doğan zararlarda tam yargı davası",
      "İmar planı değişikliklerine itiraz edilmesi",
      "Yürütmenin durdurulması talebiyle başvuru yapılması",
      "Kamu görevlisi özlük haklarına ilişkin danışmanlık",
    ],
    localParagraphs: [
      "Bayrampaşa'nın yoğun ve eski yapı stoku, riskli yapı tespiti ve kentsel dönüşüm kapsamındaki idari kararların sık dava konusu olmasına yol açmaktadır; bu davalar İstanbul idare mahkemelerinde görülür.",
      "Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür; Forum İstanbul çevresindeki işletmelere yönelik idari para cezaları da bu kapsamda değerlendirilebilir.",
    ],
    faqs: [
      { question: "Riskli yapı tespitine karşı dava açılabilir mi?", answer: "Evet, riskli yapı tespitine karşı teknik rapora itirazen idare mahkemesinde dava açılabilir. İdari davalarda genel dava açma süresi tebliğden itibaren 60 gündür (İYUK m.7). Bayrampaşa'da eski yapı stoku nedeniyle riskli yapı tespiti ve kentsel dönüşüm kararları sık dava konusu olur." },
      { question: "İdari dava açma süresi ne kadardır?", answer: "İdari dava açma süresi genellikle tebliğden itibaren 60 gündür (İYUK m.7); vergi davalarında bu süre 30 gündür. Süre, işlemin yazılı bildirim tarihinden başlar. İşlem ve tebliğ belgesi dava dilekçesine eklenir; dava İstanbul idare mahkemelerinde açılır." },
      { question: "AVM çevresindeki idari para cezalarına nasıl itiraz edilir?", answer: "Forum İstanbul çevresindeki işletmelere kesilen idari para cezalarına, süresi içinde idare mahkemesine iptal davası açılarak itiraz edilebilir. Genel dava açma süresi tebliğden itibaren 60 gündür (İYUK m.7). Ceza tutanağı, tebliğ belgesi ve işletmeye ait kayıtlar dava dosyasına eklenir." },
      { question: "İmar planı değişikliğine kim itiraz edebilir?", answer: "Değişiklikten etkilenen taşınmaz maliki veya ilgili kişiler imar planı değişikliğine itiraz edebilir. İtiraz, idare mahkemesinde iptal davası şeklinde yapılır ve genel dava açma süresi 60 gündür (İYUK m.7). Dava dilekçesinde planın hukuka aykırılığı ve davacının planla bağlantısı açıklanır." },
      { question: "Tam yargı davasında ispat yükü kime aittir?", answer: "Tam yargı davasında ispat yükü kural olarak zararı iddia eden tarafa aittir. Davacı, idarenin işlem veya eyleminin zarara yol açtığını ve zararın miktarını belgelerle ortaya koymalıdır. Bilirkişi incelemesi gibi delil toplama yöntemleri de kullanılabilir; dava idare mahkemesinde görülür." },
    ],
    howToTitle: "Bayrampaşa'da İdari İptal Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Değerlendirme", text: "İptali istenen işlem ve dayanağı incelenir." },
      { name: "Süre Hesabı", text: "60 günlük başvuru süresi belirlenir." },
      { name: "Dilekçe", text: "Gerekçeli dava dilekçesi hazırlanır ve sunulur." },
      { name: "Karar", text: "İdare mahkemesi dosyayı sonuçlandırır." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "bayrampasa-is-hukuku-avukati",
    name: "Bayrampaşa İş Hukuku Avukatı",
    heroTitle: "Bayrampaşa İş Hukuku Avukatı",
    heroSubtitle:
      "Bayrampaşa'da çalışan işçilere ve işyeri bulunan işverenlere kıdem ile ihbar tazminatı, işe iade ve ücret alacakları konularında hukuki destek verilir; Forum İstanbul çevresindeki işyerleri dahil dosyalar Çağlayan'daki iş mahkemelerine taşınır.",
    metaTitle: "Bayrampaşa İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Bayrampaşa'da kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'ni 2019'da bitiren Furkan Arıkan, İstanbul Barosu'nun 72621 sicilli üyesidir. İş ilişkisinin sona ermesi, ücretlerin ödenmemesi veya iş kazası gibi durumlarda Bayrampaşa'daki işçi ve işverenlere hem dava öncesinde hem yargılama sırasında destek verir.",
    highlightCards: [
      { title: "Fesih Sonrası Haklar", description: "Kıdem, ihbar ve kullanılmayan izin ücretlerinin hesabı ve talebi." },
      { title: "İş Güvencesi", description: "Geçersiz fesih iddiasıyla arabuluculuk ve işe iade davası." },
      { title: "Mesai ve Ücret", description: "Fazla çalışma, hafta tatili ve bakiye maaş alacakları." },
      { title: "Mağaza ve Vardiya Çalışanları", description: "Forum İstanbul çevresinde vardiyalı çalışanların kayıt ve ispat sorunları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih iddiasında kıdem ve ihbar tazminatı hesabı ile dava takibi",
      "İşe iade talebinde arabulucu başvurusu ve sonrasındaki dava aşaması",
      "Fazla çalışma, hafta tatili ve yıllık izin ücreti alacaklarının talep edilmesi",
      "Psikolojik taciz (mobbing) iddialarında delil değerlendirmesi ve dava hazırlığı",
      "İş sözleşmesi, ibraname ve işten çıkış belgelerinin hukuki incelemesi",
      "İş kazası sonrası maddi ve manevi tazminat taleplerinin yürütülmesi",
    ],
    localParagraphs: [
      "Forum İstanbul çevresindeki mağazalar ve ilçedeki küçük işyerleri Bayrampaşa'da çalışanlar için önemli bir iş alanıdır; vardiya düzeni, mesai kayıtları ve prim ödemeleri de bu nedenle işçilik uyuşmazlıklarında tartışma konusu olabilir.",
      "Dava şartı olarak önce arabulucuya başvurulur; uzlaşma çıkmazsa dosya Çağlayan'daki İstanbul Adliyesi'nde iş mahkemesine taşınır. İşten ayrılış belgesi, bordro, banka kayıtları ve yazışmaların saklanması bu aşamada önem taşır.",
    ],
    faqs: [
      { question: "İşe iade davası açmadan önce hangi başvuru zorunludur?", answer: "İşe iade talebinde dava açmadan önce arabulucuya başvurmak zorunludur; başvuru, fesih bildiriminin tebliğinden itibaren bir ay içinde yapılmalıdır. Uzlaşma olmazsa arabulucu son tutanak düzenler ve bu tarihten itibaren iki hafta içinde iş mahkemesinde dava açılır. Bu süreler hak düşürücü nitelikte olduğundan geciktirilmemelidir." },
      { question: "Kıdem tazminatı hangi durumlarda ödenir?", answer: "Kıdem tazminatı, işyerinde en az bir yıl çalışmış işçiye; işverenin haksız feshi, işçinin haklı nedenle ayrılması, emeklilik veya askerlik gibi hallerde ödenir. İşçi haklı neden olmadan kendi isteğiyle ayrılırsa genel kural olarak hak doğmaz. Fesih nedeni ve belgeler her somut olayda ayrıca incelenir." },
      { question: "Bayrampaşa'daki işyerleri için iş davası hangi mahkemede açılır?", answer: "Bayrampaşa'daki işyerlerinin iş uyuşmazlıkları, Çağlayan'daki İstanbul Adliyesi bünyesinde bulunan iş mahkemelerine taşınır. Dava şartı olan arabuluculuk aşaması mahkemeden önce tamamlanmalıdır. Yetkili mahkeme işyerinin veya davalının yerleşim yerine göre belirlendiğinden, dosyanın bu yönü de ayrıca incelenir. Bu nedenle başvuru öncesinde işyeri adresi ve sözleşme bilgileri netleştirilir." },
      { question: "Mağaza çalışanı fazla mesaisini nasıl ispatlar?", answer: "Fazla mesai; bordro, puantaj ve giriş-çıkış kayıtları, kurum içi yazışmalar ve tanık beyanıyla ispatlanabilir. İşyeri kayıtları çoğunlukla işverende bulunduğundan mahkemeden getirtilmesi istenebilir. Hangi delilin dosyaya daha çok yarayacağı somut olaya göre değerlendirilir. Resmi kayıt bulunmuyorsa banka dekontları da çalışma düzenini göstermeye yardımcı olabilir." },
      { question: "İşçilik alacakları ne kadar süre sonra zamanaşımına uğrar?", answer: "Ücret, fazla çalışma, yıllık izin, kıdem ve ihbar tazminatı gibi işçilik alacaklarının çoğunda zamanaşımı süresi beş yıldır. Sürenin başlangıcı alacağın türüne göre değişebildiğinden, hak kaybı yaşanmaması için iş ilişkisi sona erdikten sonra vakit geçirmeden hukuki değerlendirme yaptırılması önerilir." },
    ],
    howToTitle: "Bayrampaşa'da İşe İade Talebi Hangi Sırayla İlerler?",
    howToSteps: [
      { name: "Fesih Yazısının İncelenmesi", text: "Fesih bildirimi, bordro ve sözleşme okunarak iş güvencesi şartlarının bulunup bulunmadığı değerlendirilir." },
      { name: "Arabulucuya Başvuru", text: "Tebliğden itibaren bir ay içinde arabuluculuk bürosuna başvurulur." },
      { name: "Dava Dilekçesi", text: "Son tutanaktan itibaren iki hafta içinde Çağlayan'daki iş mahkemesine dilekçe verilir." },
      { name: "Yargılama", text: "Mahkeme feshin geçerli bir nedene dayanıp dayanmadığını inceler ve karar verir." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "ise-iade-davasi"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "bayrampasa-kira-tahliye-avukati",
    name: "Bayrampaşa Kira ve Tahliye Avukatı",
    heroTitle: "Bayrampaşa Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında temsil sağlayan Furkan Arıkan, sulh hukuk mahkemeleri İstanbul (Çağlayan) Adliyesi'nde olan dosyalarda Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    metaTitle: "Bayrampaşa Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Bayrampaşa'da kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kiraya verenlere ve kiracılara danışmanlık veren Furkan Arıkan, İstanbul Barosu'na kayıtlı (72621) bir avukattır; 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve kira hukuku kapsamında Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    highlightCards: [
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "İşyeri Kiraları", description: "Forum İstanbul çevresindeki ticari kira uyuşmazlıkları." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "İşyeri niteliğindeki taşınmazların kira sözleşmeleri",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Bayrampaşa'da konut kiralarının yanı sıra Forum İstanbul çevresinde işyeri niteliğindeki taşınmazlara ilişkin kira uyuşmazlıkları da önemli bir yer tutar. Bu uyuşmazlıklarda taşınmazın bulunduğu yer sulh hukuk mahkemesi görevlidir.",
      "Bu davalara İstanbul (Çağlayan) Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır; işyeri kiralarında ticari teamüller de ayrıca değerlendirmeye alınabilir.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kiracı; kira borcunun ödenmemesi, geçerli bir taahhütname veya kiraya verenin ihtiyacı gibi sebeplerle tahliye edilebilir. Kira borcunda kiracıya ödeme için 30 gün süre verilir (TBK m.315); süre sonunda ödeme yapılmazsa tahliye yoluna gidilebilir. Hangi yolun izleneceği olayın niteliğine göre belirlenir." },
      { question: "Bayrampaşa'da tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine göre değişir; birkaç aydan bir buçuk yıla kadar sürebilir. İstanbul (Çağlayan) Adliyesi bünyesindeki sulh hukuk mahkemelerinde görülen davalarda süreyi tebligat işlemleri, delillerin toplanması ve gerekirse bilirkişi incelemesi etkiler. Kira borcu veya taahhütname gibi belgeye dayalı hallerde farklı yollar izlenebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Rayiç bedel tespiti, mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Dava sulh hukuk mahkemesinde açılır; mahkeme bilirkişi aracılığıyla bölgedeki emsal kira bedellerini araştırır. Kira bedelinin uyarlanması da bu tespitin sonucuna göre değerlendirilir. Talep edilirken mevcut kira sözleşmesi ve ödeme kayıtları dosyaya sunulur." },
      { question: "AVM içindeki mağaza kiralarında ek kural var mı?", answer: "AVM içindeki mağaza kiralarında sözleşmede öngörülen ciro kirası ve ortak gider kalemleri ayrıca değerlendirilmelidir. Bu kalemler kira sözleşmesinde belirlenir ve uyuşmazlıkta tahliye veya alacak talebinin kapsamını etkileyebilir. İşyeri kiralarında ticari teamüller de ayrıca değerlendirilir; davalar sulh hukuk mahkemesinde görülür." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname varsa tahliye doğrudan icra dairesi kanalıyla istenebilir. Taahhütnamenin geçerli olması ve tahliye talebinin usulüne uygun yapılması gerekir. Bu yol, mahkemede dava açılmasından farklı bir süreçtir; belgenin içeriği ve tarihi önceden incelenir." },
    ],
    howToTitle: "Bayrampaşa'da Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "bayrampasa-vergi-avukati",
    name: "Bayrampaşa Vergi Avukatı",
    heroTitle: "Bayrampaşa Vergi Avukatı",
    heroSubtitle:
      "Vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlayan Furkan Arıkan, yetkili mahkemenin İstanbul vergi mahkemeleri olduğu dosyalarda Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    metaTitle: "Bayrampaşa Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Bayrampaşa'da vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda danışmanlık veren Furkan Arıkan, İstanbul Barosu'na kayıtlı (72621) bir avukattır; 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve Bayrampaşa'daki müvekkillerine uzlaşma ve dava süreçlerinde hizmet vermektedir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Perakende Sektörü", description: "AVM içi işletmelere özgü vergi uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Vergi incelemesi sürecinde danışmanlık",
      "Gecikme faizi ve zammına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Bayrampaşa'da mükellefiyeti bulunanların vergisel işlemleri Bayrampaşa Vergi Dairesi Müdürlüğü tarafından yürütülür; bu daireye ait tarhiyat ve ceza kararlarına karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir.",
      "Forum İstanbul çevresindeki perakende işletmelerin faaliyet hacmi, KDV ve kurumlar vergisi kaynaklı uyuşmazlıkların da sık görülmesine yol açmaktadır.",
    ],
    faqs: [
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Vergi ve ceza ihbarnamesine karşı dava açma süresi, tebliğden itibaren 30 gündür (İYUK m.7). Dava vergi mahkemesinde açılır; süre kaçırılırsa tarhiyat kesinleşir. Dava süresi dolmadan uzlaşma başvurusu da değerlendirilebilir; uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "Vergi davaları İstanbul vergi mahkemelerinde görülür. Vergi ve ceza ihbarnamesine karşı iptal davası bu mahkemelerde açılır ve dava açma süresi tebliğden itibaren 30 gündür (İYUK m.7). İdari aşamadaki işlemler ise vergi dairesi müdürlüğü nezdinde yürütülür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma başvurusu dava hakkını ortadan kaldırmaz; uzlaşma sağlanamazsa kalan dava açma süresi korunur. Uzlaşma vergi idaresi nezdinde yürütülür ve taraflar anlaşırsa uyuşmazlık dava açılmadan sona erer. Anlaşma sağlanamazsa vergi mahkemesinde dava açılabilir; bu nedenle başvuru ile dava süresinin birlikte takip edilmesi gerekir." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Vergi ödeme emrine karşı, tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır. Ödeme emri, amme alacağının tahsili için gönderilir. Süre kaçırılırsa takip devam edebilir; bu nedenle tebliğ tarihi ve ödeme emrinin dayanağı doğru belirlenmelidir. Gerekirse ödeme emrine karşı iptal davası süresi içinde açılır." },
      { question: "Perakende sektöründe sık görülen vergi uyuşmazlığı nedir?", answer: "Perakende sektöründe sık görülen vergi uyuşmazlıkları arasında hasılat tespiti ve KDV indirimi reddi sıkça gündeme gelmektedir. Forum İstanbul çevresindeki işletmelerin faaliyet hacmi bu uyuşmazlıkları çoğaltabilir. İhbarnameye karşı tebliğden itibaren 30 gün içinde vergi mahkemesinde dava açılabilir (İYUK m.7)." },
    ],
    howToTitle: "Bayrampaşa'da Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "bayrampasa-borclar-hukuku-avukati",
    name: "Bayrampaşa Borçlar Hukuku Avukatı",
    heroTitle: "Bayrampaşa Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Sözleşme uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlayan Furkan Arıkan, ticaret ve asliye hukuk mahkemeleri İstanbul (Çağlayan) Adliyesi'nde olan dosyalarda Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    metaTitle: "Bayrampaşa Borçlar Hukuku Avukatı",
    metaDescription:
      "Bayrampaşa'da sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Sözleşme ve alacak uyuşmazlıklarında danışmanlık veren Furkan Arıkan, İstanbul Barosu'na kayıtlı (72621) bir avukattır; 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve borçlar hukuku kapsamında Bayrampaşa'daki müvekkillerine hizmet vermektedir.",
    highlightCards: [
      { title: "Sözleşme Uyuşmazlıkları", description: "İfa, ihlal ve fesih kaynaklı süreçlerin yürütülmesi." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Perakende Tedarik Sözleşmeleri", description: "Mağaza ve tedarikçiler arası uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sözleşmenin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Perakende ve tedarik sözleşmelerinden doğan uyuşmazlıklar",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Forum İstanbul çevresindeki perakende mağazalar ile tedarikçileri arasında kurulan sözleşmelerden doğan uyuşmazlıklar, Bayrampaşa'da sık karşılaşılan bir dava türüdür; bu uyuşmazlıklara niteliğine göre asliye hukuk veya ticaret mahkemelerinde bakılır.",
      "Bu davalar İstanbul (Çağlayan) Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Mağaza kira/tedarik sözleşmesi feshedilirse ne olur?", answer: "Mağaza kira veya tedarik sözleşmesi feshedilirse fesih bildirimi usulüne göre yapılmalı, aksi halde tazminat sorumluluğu doğabilir. Sözleşmedeki fesih ve bildirim şartları ile tarafların yazışmaları önce incelenir. Haklı sebep bulunup bulunmadığı da değerlendirilir; uyuşmazlık görevli mahkemede çözülür." },
      { question: "Toplu sipariş iptallerinde cezai şart uygulanır mı?", answer: "Toplu sipariş iptallerinde cezai şart, sözleşmede öngörülmüşse uygulanır; aşırı olması halinde mahkemece indirilebilir. Cezai şartın geçerliliği ve tutarı sözleşme metnine göre incelenir. Sipariş formları, iptal bildirimleri ve yazışmalar bu değerlendirmenin dayanağını oluşturur. Cezai şartın indirimi talebi için de bu belgeler dosyaya sunulur." },
      { question: "Tedarikçi ile mağaza arasındaki uyuşmazlık nerede çözülür?", answer: "Tedarikçi ile mağaza arasındaki uyuşmazlık, niteliğine göre asliye ticaret mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde çözülür. Bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir. Tedarik sözleşmesi, fatura ve sevk belgeleri gibi alacağı gösteren evraklar dosyaya eklenir." },
      { question: "Ürün ayıplı çıkarsa hangi haklar kullanılabilir?", answer: "Ürün ayıplı çıkarsa değişim, onarım, bedel indirimi veya sözleşmeden dönme talep edilebilir. Hangi hakkın kullanılacağı ayıbın niteliğine ve sözleşme hükümlerine göre belirlenir. Ayıbın bildirimi, ürün ve teslim belgeleri ile yazışmalar hakkın kullanılmasında dayanak oluşturur. Bu belgeler ayıbın varlığını ve zamanında bildirildiğini göstermesi bakımından saklanmalıdır." },
      { question: "Alacağın tahsili için doğrudan icraya gidilebilir mi?", answer: "Evet, alacağı belgeleyen kayıtlarla ilamsız icra takibi başlatılabilir. Sözleşme, fatura, sevk irsaliyesi veya cari hesap kayıtları takibin dayanağı olarak sunulur. Borçlu ödeme emrine 7 gün içinde itiraz edebilir (İİK m.62); itiraz halinde itirazın iptali davası gibi yollar gündeme gelebilir." },
    ],
    howToTitle: "Bayrampaşa'da Alacak Davası Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Kayıtların Toplanması", text: "Sözleşme, sipariş ve fatura belgeleri hazırlanır." },
      { name: "Bildirim", text: "Gerekiyorsa karşı tarafa ihtar gönderilir." },
      { name: "Başvuru", text: "Arabuluculuk veya dava yoluna başvurulur." },
      { name: "Sonuç", text: "Karar veya icra takibiyle alacak tahsil edilir." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];

export const bayrampasaServices: PseoService[] = [...bayrampasaBaseServices, bayrampasaMiras];
