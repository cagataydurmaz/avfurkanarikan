import type { PseoService } from "./types";
import { beylikduzuMiras } from "./miras/beylikduzuMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const beylikduzuBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "beylikduzu-avukat",
    name: "Beylikdüzü Avukat",
    heroTitle: "Beylikdüzü Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, konut kooperatifleriyle planlı biçimde gelişmiş, TÜYAP Fuar Merkezi'ne ve uzun bir sahil şeridine sahip Beylikdüzü'nde ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Büyükçekmece Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Beylikdüzü Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Beylikdüzü'nde ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Yapı kooperatifleri aracılığıyla planlı biçimde gelişmiş, geniş yeşil alanlara ve TÜYAP Fuar Merkezi'ne sahip Beylikdüzü'nde ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Kooperatif ortaklığı ve tapu uyuşmazlıklarının takibi." },
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
      "Kooperatif ortaklığı, tapu ve kira ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "Yapı kooperatifleri eliyle inşa edilen toplu konut projeleriyle İstanbul'un en planlı yerleşimlerinden biri olan Beylikdüzü, geniş bulvarları, yeşil alanları ve TÜYAP Fuar ve Kongre Merkezi'yle hem yerleşik hem ticari bir profil sunmaktadır.",
      "İlçedeki hukuki uyuşmazlıklar İstanbul Büyükçekmece Adliyesi'nde, vergisel işlemler ise Beylikdüzü Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Beylikdüzü'ndeki davalara hangi adliye bakıyor?", answer: "Beylikdüzü, İstanbul Büyükçekmece Adliyesi'nin yargı çevresinde yer aldığından davalara bu adliye bakar. Hukuk ve ceza yargılaması bu adliye bünyesinde yürütülür; vergisel işlemler ilgili vergi dairesi müdürlüğü nezdinde, vergi davaları ise İstanbul vergi mahkemelerinde görülür. Randevu için WhatsApp veya telefonla iletişime geçilebilir." },
      { question: "Randevu nasıl alınır?", answer: "Randevu için WhatsApp veya telefon üzerinden iletişime geçilir ve konu kısaca paylaşılır; ardından uygun bir görüşme günü belirlenir. Danışmanlık görüşmesi ücret karşılığı yapılır ve hukuki durum değerlendirilir. Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir ve süreç başlatılır." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve temsil hizmeti verilir. Bu kapsamda boşanma ve velayet, işçilik alacakları, icra takibi, idari işlemlere karşı iptal davaları ve vergi uyuşmazlıkları gibi konular yürütülür. Ayrıntılar randevuda paylaşılır." },
      { question: "Büro Beylikdüzü'nde mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Beylikdüzü bölgesindeki müvekkillere de aynı kapsamda hizmet verilir. Görüşmeler yüz yüze veya çevrim içi planlanabilir; ilk iletişim WhatsApp ya da telefonla kurulur. Dava ve işlemler yetkili adliye ve idari merciler nezdinde yürütülür." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Danışmanlık görüşmesi ücret karşılığı yapılır ve ücret dosyanın niteliğine göre değişir. Uyuşmazlığın türü, belge yoğunluğu ve gerekecek takip süreci gibi unsurlar dikkate alınır. Ücret ve kapsam bilgisi randevu sırasında paylaşılır; temsil kararı alınırsa vekalet düzenlenir." },
      { question: "Konut kooperatifi uyuşmazlıklarında destek alınabilir mi?", answer: "Evet, konut kooperatifi uyuşmazlıklarında ortaklık payı ve tapu devri süreçlerinde danışmanlık sağlanır. Kooperatiften çıkarılma kararına itiraz ve ortaklık payı devri gibi konular ana sözleşme hükümlerine göre incelenir. Uyuşmazlık niteliğine göre görevli mahkemede, İstanbul Büyükçekmece Adliyesi bünyesinde görülür." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Görüşmeler tercihe göre yüz yüze veya çevrim içi olarak planlanabilir. İlk iletişim WhatsApp ya da telefonla kurulur, ardından görüşme günü belirlenir. Hangi yöntem seçilirse seçilsin hukuki durum değerlendirilir; temsil kararı alınırsa vekalet düzenlenir ve belgeler birlikte derlenir." },
      { question: "Büyükçekmece Adliyesi'ne Beylikdüzü'nden ulaşım nasıl?", answer: "Büyükçekmece Adliyesi'ne ulaşım, Metrobüs hattının son durağı olan Beylikdüzü/TÜYAP durağı üzerinden sağlanabilir. Beylikdüzü, İstanbul Büyükçekmece Adliyesi'nin yargı çevresinde yer aldığı için ilçedeki davalar bu adliyede görülür. Duruşma gününden önce mahkeme ve saat bilgisinin teyit edilmesi önerilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Gözaltı halinde vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmelidir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından önem taşır. Müdafi, ifade alma ve soruşturma aşamalarında şüpheliye eşlik eder." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, dosyanın seyri hakkında süreç boyunca bilgi verilir. Temsil sürecinde gelişmeler müvekkille paylaşılır; mahkeme ve idari merciler nezdindeki işlemler, duruşma tarihleri ve yeni evraklar takip edilerek bildirilir. Bu takip, vekalet düzenlendikten sonra yürütülen dosya yönetiminin bir parçasıdır." },
    ],
    howToTitle: "Beylikdüzü'nde Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Beylikdüzü Avukat (Genel)",
    relatedPostSlugs: ["ortakligin-giderilmesi-davasi", "tapu-iptali-ve-tescil-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "beylikduzu-bosanma-avukati",
    name: "Beylikdüzü Boşanma Avukatı",
    heroTitle: "Beylikdüzü Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; aile mahkemeleri İstanbul Büyükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Beylikdüzü Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Beylikdüzü'nde anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Aile hukuku alanında Beylikdüzü'ndeki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlar.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Kooperatif Konutu Payı", description: "Kooperatif hissesinin mal rejiminde değerlendirilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Kooperatif hissesi/konutunun mal rejimi tasfiyesinde değerlendirilmesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Konut kooperatifleri aracılığıyla edinilmiş taşınmazların yaygın olduğu Beylikdüzü'nde, boşanma davalarında kooperatif hissesinin veya henüz tapuya dönüşmemiş ortaklık payının mal rejimi tasfiyesinde nasıl değerlendirileceği ayrı bir uzmanlık gerektirebilmektedir.",
      "Boşanma, velayet ve nafaka davalarına İstanbul Büyükçekmece Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Boşanma davası için İstanbul Büyükçekmece Adliyesi'ndeki aile mahkemesine başvurulur. Yetki TMK m.168 uyarınca eşlerden birinin yerleşim yeri mahkemesi veya eşlerin en son altı aydan beri birlikte oturdukları yer mahkemesidir. Anlaşmalı boşanmada en az 1 yıllık evlilik ve duruşmada iki eşin birlikte beyanı aranır (TMK m.166/3)." },
      { question: "Kooperatif hissesi mal paylaşımında nasıl değerlendirilir?", answer: "Evlilik süresince edinilmişse kooperatif hissesi, tapuya henüz dönüşmemiş olsa dahi katılma alacağı hesabına dahil edilebilir. Mal rejimi tasfiyesinde hissenin edinilme tarihi, ödenen aidatlar ve güncel değeri değerlendirilir. Ortaklık belgeleri ve ödeme kayıtları hesabın dayanağını oluşturur." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Çocuk belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir. Velayet düzenlenirken esas ölçüt çocuğun yararıdır; çocuğun yaşı ve gelişim düzeyi, görüşünün ne ölçüde değerlendirileceğini etkiler. Mahkeme, tarafların beyanlarını dosyadaki delillerle birlikte değerlendirir. Bu değerlendirmede velayetin kime verileceği ve kişisel ilişki düzeni de gözetilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Nafaka miktarı, tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilerek belirlenir. Hakim, nafaka yükümlüsünün ödeme gücünü ve nafaka alacaklısının ihtiyaçlarını dosyadaki delillerle ölçer. Koşullar değişirse nafakanın artırılması, azaltılması veya kaldırılması talep edilebilir. Nafaka çocuğun giderlerine yönelik olabileceği gibi eşin ihtiyacına da ilişkin olabilir." },
      { question: "Mal rejimi tasfiyesi ne kadar sürer?", answer: "Mal rejimi tasfiyesinin süresi, dosyanın niteliğine ve bilirkişi incelemesine göre değişir. Taşınmaz ve kooperatif hissesi gibi mal varlığı kalemlerinin çokluğu ile tarafların delilleri süreyi etkiler. Belgelerin eksiksiz sunulması, bilirkişi incelemesinin ve hesaplamanın zamanında tamamlanmasına katkı sağlar." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir. Barışma halinde davanın sürdürülmesine gerek kalmaz; taraflar bu iradelerini mahkemeye bildirir. Bu yol, boşanma kararı verilmeden önce açıktır ve davanın seyri tarafların açıklamalarına göre mahkemece yürütülür. Anlaşmalı boşanma için ise protokolün eksiksiz olması önem taşır." },
    ],
    howToTitle: "Beylikdüzü'nde Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "beylikduzu-ceza-avukati",
    name: "Beylikdüzü Ceza Avukatı",
    heroTitle: "Beylikdüzü Ceza Avukatı",
    heroSubtitle:
      "Yakuplu'dan Gürpınar'a, TÜYAP çevresinden sahil şeridine kadar Beylikdüzü'nde başlayan soruşturmalarda ifade, tutuklama ve duruşma aşamalarında savunma yapılır; ilçenin ceza dosyaları Büyükçekmece'deki İstanbul Büyükçekmece Adliyesi'nde görülür.",
    metaTitle: "Beylikdüzü Ceza Avukatı | Müdafilik",
    metaDescription:
      "Beylikdüzü'nde soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Av. Furkan Arıkan, 72621 numaralı sicille İstanbul Barosu'na bağlı olarak çalışır; MEF Üniversitesi'nden 2019'da hukuk mezunu olmuştur. Beylikdüzü'nde şüpheli, sanık, mağdur ve katılanlara; fuar ve organizasyon ilişkilerinden doğan güven suçu iddialarından kişilere karşı suçlara kadar farklı dosyalarda ceza hukuku desteği verir.",
    highlightCards: [
      { title: "İfade ve Gözaltı", description: "Kolluk ve savcılık aşamasında müdafi eşliğinde ifade." },
      { title: "Tutukluluk Denetimi", description: "CMK m.100-101 koşullarının incelenmesi ve 7 günlük itiraz süresi." },
      { title: "Fuar ve Organizasyon Kaynaklı İddialar", description: "TÜYAP çevresindeki ticari ilişkilerde dolandırıcılık ve güveni kötüye kullanma suçlamaları." },
      { title: "Zorunlu Müdafilik", description: "Alt sınırı beş yıldan fazla hapis gerektiren suçlarda CMK m.150 güvencesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sırasında şüpheliyle görüşme ve ifade öncesi hakların açıklanması",
      "Tutukluluk ve adli kontrol tedbirlerine yönelik itiraz dilekçelerinin hazırlanması",
      "Stant, organizasyon ve etkinlik sözleşmelerine dayanan güven suçu iddialarında belge incelemesi",
      "Mağdur adına şikayet ve kovuşturmaya yer olmadığı kararına 15 gün içinde itiraz",
      "Büyükçekmece Adliyesi'ndeki ceza mahkemelerinde duruşma takibi",
      "Hükme karşı istinaf ve temyiz dilekçelerinin hazırlanması",
    ],
    localParagraphs: [
      "Metrobüs hattının son durağı Beylikdüzü/TÜYAP'ın çevresinde yıl boyunca fuar ve etkinlikler düzenlenir; bu hareketlilik, stant kiralama, organizasyon ödemesi veya ürün teslimi gibi ticari ilişkilerin kimi zaman suç duyurusuna dönüşmesine yol açabilir; en sık ileri sürülen iddialar dolandırıcılık ile güveni kötüye kullanmadır. Böyle dosyalarda ilişkinin hukuki mi cezai mi olduğunun erken ayrıştırılması savunmanın ana eksenidir.",
      "Beylikdüzü'nde başlayan soruşturmalar İstanbul Büyükçekmece Adliyesi'ndeki Cumhuriyet başsavcılığınca yürütülür, kovuşturmalar aynı adliyedeki ceza mahkemelerinde görülür. Tutuklama kararına karşı 7 günlük itiraz süresi (CMK m.268) ve şikayetçi açısından KYOK kararına karşı 15 günlük süre, dosyanın seyrini belirleyen kritik tarihlerdir.",
    ],
    faqs: [
      { question: "Beylikdüzü'nde gözaltına alınan kişinin ifadesi nerede alınır?", answer: "İlk ifade genellikle olayın gerçekleştiği yerdeki kolluk biriminde alınır; savcılık ifadesi ve sulh ceza hakimliğindeki sorgu ise İstanbul Büyükçekmece Adliyesi'nde yapılır. Şüpheli, gözaltının başından itibaren avukatıyla görüşebilir ve ifadesini avukatı yanındayken verebilir. Susma hakkı da her aşamada kullanılabilir." },
      { question: "TÜYAP'taki bir fuar için ödeme alıp hizmet vermemek dolandırıcılık sayılır mı?", answer: "Her ödeme uyuşmazlığı dolandırıcılık değildir; suçun oluşması için baştan hileli davranışla karşı tarafın aldatılıp yarar sağlanması gerekir. Hizmetin sonradan yerine getirilememesi çoğu zaman sözleşmeye aykırılık olarak hukuk mahkemesinde çözülür. Sözleşme, yazışmalar ve ödeme kayıtları bu ayrımın yapılmasında belirleyicidir." },
      { question: "Yakuplu'da yaşanan bir kavga sonrası şikayetten vazgeçilirse dava düşer mi?", answer: "Suç şikayete bağlıysa, şikayetten vazgeçme kural olarak soruşturmayı veya davayı düşürür; ancak sanık bu vazgeçmeyi kabul etmezse yargılama sürer. Basit kasten yaralama şikayete bağlıdır; silahla işlenen yaralama gibi nitelikli hallerde ise vazgeçme sonuç doğurmaz. Suçun hangi kapsamda kaldığı dosya içeriğine göre belirlenir." },
      { question: "Beylikdüzü'ndeki bir soruşturmada tutuklama yerine adli kontrol istenebilir mi?", answer: "Evet, müdafi tutuklama talebine karşı adli kontrol tedbirlerinin yeterli olacağını savunabilir; hakim de tutuklama kararında adli kontrolün neden yetersiz kaldığını gerekçelendirmek zorundadır (CMK m.101). Yurt dışına çıkış yasağı veya imza yükümlülüğü bu tedbirlere örnektir. Verilen tutuklama kararı da 7 gün içinde itiraz yoluyla denetime götürülebilir (CMK m.268)." },
      { question: "Fuar firmasının dolandırıldığı iddiasında şirket davaya katılabilir mi?", answer: "Evet, suçtan zarar gören şirket, yetkili temsilcisi veya vekili aracılığıyla kamu davasına katılma talebinde bulunabilir. Katılan sıfatı kazanılınca delil sunma, tanık dinletme talebi ve kanun yoluna başvurma hakları kullanılabilir. Talep, Büyükçekmece Adliyesi'ndeki ilk derece mahkemesinde hüküm verilinceye kadar yapılabilir." },
    ],
    howToTitle: "Beylikdüzü'nde Başlayan Bir Soruşturma Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "Kolluk Aşaması", text: "Şüpheli yakalanır veya ifadeye çağrılır, müdafi hakkı hatırlatılır." },
      { name: "Savcılık Değerlendirmesi", text: "Büyükçekmece'deki savcılık delilleri toplar, iddianame veya KYOK kararı verir." },
      { name: "Kovuşturma", text: "Kabul edilen iddianameyle ceza mahkemesinde duruşmalar yapılır." },
      { name: "Üst Mahkeme İncelemesi", text: "Verilen karar istinaf, gerekirse temyiz incelemesine taşınır." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "beylikduzu-gayrimenkul-avukati",
    name: "Beylikdüzü Gayrimenkul Avukatı",
    heroTitle: "Beylikdüzü Gayrimenkul Avukatı",
    heroSubtitle:
      "Yapı kooperatifi ortaklığı, tapu uyuşmazlıkları ve kira ilişkilerinde hukuki destek sağlanır; davalar İstanbul Büyükçekmece Adliyesi'nde görülür.",
    metaTitle: "Beylikdüzü Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Beylikdüzü'nde yapı kooperatifi ortaklığı, tapu iptali ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Yapı kooperatifi ortaklığı, tapu ve kira uyuşmazlıklarında Beylikdüzü'ndeki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Kooperatif Ortaklığı", description: "Ortaklık payının devri, kooperatiften çıkma/çıkarılma uyuşmazlıkları." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Site Yönetimi", description: "Toplu konut sitelerinde yönetim ve aidat uyuşmazlıkları." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Yapı kooperatifi ortaklık payının devri ve tapuya dönüştürülmesi süreçleri",
      "Kooperatiften çıkarılma kararlarına karşı itiraz ve iptal davaları",
      "Site yönetim planı ve ortak gider uyuşmazlıklarında temsil",
      "Tapu iptali ve tescil davalarının açılması",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
    ],
    localParagraphs: [
      "Yapı kooperatifleri eliyle gelişen bir yerleşim geçmişine sahip Beylikdüzü'nde, kooperatif ortaklık payının devri, kooperatiften çıkarılma kararlarına itiraz ve tapuya dönüştürme süreçleri sık karşılaşılan gayrimenkul hukuku konularındandır.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür.",
    ],
    faqs: [
      { question: "Kooperatiften çıkarılma kararına itiraz edilebilir mi?", answer: "Evet, kooperatiften çıkarılma kararına, kararın usule ve esasa aykırı olduğu iddiasıyla mahkemeye başvurulabilir. İtirazda ana sözleşme hükümleri ile kararın alınma usulü incelenir. Karar ve tebliğ belgeleri dava dosyasına eklenir; dava, İstanbul Büyükçekmece Adliyesi bünyesinde görülür." },
      { question: "Kooperatif ortaklık payı nasıl devredilir?", answer: "Kooperatif ortaklık payı, kooperatif ana sözleşmesindeki usule uygun olarak devredilmelidir. Devir için ana sözleşmenin aradığı şartlar ve varsa kurul onayı gibi hususlar önce kontrol edilir. Devir işlemi yazılı sözleşmeyle belgelenmeli; tapu devri aşamasında ortaklık belgeleri ayrıca incelenmelidir." },
      { question: "Beylikdüzü'nde gayrimenkul davası hangi mahkemede görülür?", answer: "Gayrimenkul davası, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür. Kira ve tahliye gibi uyuşmazlıklar sulh hukuk mahkemesinde, tapu iptali ve tescil gibi davalar ise asliye hukuk mahkemesinde ele alınabilir. Dosyaya tapu kaydı ve sözleşme gibi belgeler eklenir." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Tapu iptal ve tescil davası, hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tarafından açılabilir. Tescilin dayanağının geçersiz olduğu veya hakkın tapuya doğru yansımadığı iddia edilebilir. Dava taşınmazın niteliğine göre görevli mahkemede görülür ve dosyaya tapu kaydı ile dayanak belgeler eklenir." },
      { question: "Site yönetim kurulu kararına nasıl itiraz edilir?", answer: "Karara katılmayan malik, belirli süre içinde iptal davası açabilir. Dava, İstanbul Büyükçekmece Adliyesi bünyesindeki mahkemede görülür. Karar tutanağı, yönetim planı ve toplantı belgeleri incelenir; kararın kanuna veya yönetim planına aykırı olduğu iddiası bu belgelere dayandırılır." },
    ],
    howToTitle: "Beylikdüzü'nde Kooperatif Ortaklığı Uyuşmazlığı Nasıl Çözülür?",
    howToSteps: [
      { name: "Belge İncelemesi", text: "Kooperatif ana sözleşmesi ve ortaklık kayıtları incelenir." },
      { name: "İtiraz veya Talep", text: "Duruma göre kooperatif organlarına itiraz veya devir talebi yapılır." },
      { name: "Dava Açılması", text: "Çözülemeyen uyuşmazlıkta mahkemeye başvurulur." },
      { name: "Sonuçlanma", text: "Mahkeme kararıyla ortaklık durumu netleşir." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "beylikduzu-icra-avukati",
    name: "Beylikdüzü İcra Avukatı",
    heroTitle: "Beylikdüzü İcra Avukatı",
    heroSubtitle:
      "TÜYAP çevresindeki stant ve organizasyon işlerinden toplu konut sitelerinin aidat alacaklarına kadar uzanan dosyalarda takip başlatılması, borçlu itirazlarının karşılanması ve haciz aşaması yürütülür; icra uyuşmazlıkları İstanbul Büyükçekmece Adliyesi'nde görülür.",
    metaTitle: "Beylikdüzü İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Beylikdüzü'nde icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İcra ve iflas dosyalarında görev alan avukat Furkan Arıkan, MEF Üniversitesi'nden 2019'da mezun olduktan sonra İstanbul Barosu'nun 72621 numaralı sicil kaydını almıştır. Beylikdüzü'nde fuar ve etkinlik firmaları, site yönetimleri ve bireysel alacaklılar adına takip başlatır; ödeme emri alan borçlulara ise itiraz ve icra mahkemesi süreçlerinde destek olur.",
    highlightCards: [
      { title: "Fuar ve Stant Alacakları", description: "Organizasyon, stant kurulumu ve etkinlik hizmeti bedellerinin takibi." },
      { title: "Site Aidat Alacakları", description: "Toplu konut yönetimlerinin ödenmeyen aidat alacakları." },
      { title: "Borçlu Tarafın İtirazları", description: "Ödeme emrine 7 günlük süre içinde itiraz ve usulsüz işlemlere karşı şikayet." },
      { title: "İtirazın Kaldırılması ve İptali", description: "İİK m.68 ile 6 ay, İİK m.67 ile 1 yıl süreli yollar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Stant kurulumu ve etkinlik hizmetinden doğan fatura alacaklarında ilamsız takip",
      "Site yönetimleri adına ödenmeyen aidatlar için icra takibi",
      "Borçlu adına 7 günlük süre içinde borca ve imzaya itiraz",
      "Noter onaylı veya imzası ikrar edilmiş belgelere dayalı alacaklarda itirazın kaldırılması",
      "Genel mahkemede itirazın iptali davası ve icra inkar tazminatı talebi",
      "Araç, banka hesabı ve maaş haczi işlemlerinin takibi",
    ],
    localParagraphs: [
      "TÜYAP Fuar ve Kongre Merkezi'nde düzenlenen etkinlikler Beylikdüzü'nde ticari ilişkilerin belirgin bir kaynağıdır; stant kurulumu, lojistik ve organizasyon hizmetleri çoğu zaman kısa süreli ve hızlı sözleşmelerle yürütülür. Fatura ve teslim belgelerinin eksik tutulduğu durumlarda takibe itiraz edilmesi kolaylaşır; bu yüzden belgelerin baştan düzenli saklanması tahsil sürecini doğrudan etkiler.",
      "Yapı kooperatifleri eliyle gelişen toplu konut dokusu, site yönetimlerinin aidat alacaklarını da icra takiplerinin konusu haline getirebilir. Beylikdüzü'ndeki borçlulara yönelik takiplerden doğan itiraz ve şikayetler İstanbul Büyükçekmece Adliyesi'ndeki icra mahkemesinde incelenir.",
    ],
    faqs: [
      { question: "TÜYAP'ta kurulan stantın bedeli ödenmezse hangi takip yolu kullanılır?", answer: "Stant bedeli için sözleşme ve faturaya dayanılarak ilamsız icra takibi başlatılabilir. Borçlu firma 7 günlük itiraz süresini (İİK m.62) kullanmazsa takip kesinleşir ve haciz istenebilir. İtiraz gelirse, belgenin türüne bakılarak icra mahkemesi veya genel mahkeme yolu seçilir." },
      { question: "Beylikdüzü'ndeki site yönetimi ödenmeyen aidat için icra takibi başlatabilir mi?", answer: "Evet, site yönetimi yönetim planı ve kat malikleri kurulu kararlarına dayanarak aidat borcunu tahsil etmek için takip başlatabilir. Takibe borçlu malikin hesap dökümü ve aidat tutarını gösteren karar eklenir. Malik itiraz ederse alacak, itiraz tebliğ edildikten sonra 1 yıllık süre içinde açılacak itirazın iptali davasıyla ispatlanabilir (İİK m.67)." },
      { question: "Ödeme emri alan Beylikdüzü'ndeki bir işletme borca nasıl itiraz eder?", answer: "İşletmenin itiraz için 7 günü vardır; süre ödeme emrinin tebliğiyle başlar ve itiraz icra dairesine yazılı ya da sözlü yapılabilir (İİK m.62). İtirazda borcun tamamına mı yoksa bir kısmına mı karşı çıkıldığı açıkça belirtilmelidir. Takip bir belgeye dayanıyorsa ve imza açıkça inkar edilmezse, imza kabul edilmiş sayılabilir." },
      { question: "Beylikdüzü'ndeki bir takipte haksız itiraz eden borçlu tazminat öder mi?", answer: "Borçlunun itirazı haksız bulunursa, itirazın iptali veya kaldırılması kararıyla birlikte borçlu aleyhine icra inkar tazminatına hükmedilebilir. Bunun için alacağın likit, yani miktarının belirlenebilir olması ve alacaklının bunu talep etmesi gerekir. Stant ve organizasyon faturalarında tutarın sözleşmeyle önceden belirlenmesi bu açıdan yarar sağlar." },
      { question: "Beylikdüzü'nde kesinleşen takipte borçlunun maaşı haczedilebilir mi?", answer: "Evet, maaş haczedilebilir; ancak kanun borçlunun ve bakımını üstlendiği kişilerin zorunlu ihtiyaçlarını gözetir, kesinti de belirli bir oranla sınırlı tutulur. Haciz müzekkeresi işverene gönderilir, kesintiler icra dosyasına aktarılır. Aynı maaş üzerinde birden fazla haciz varsa kesintiler haciz sırasına göre uygulanır." },
    ],
    howToTitle: "Beylikdüzü'nde Stant veya Aidat Alacağı İçin Takip Süreci Nasıl Yürür?",
    howToSteps: [
      { name: "Alacağın Belgelenmesi", text: "Sözleşme, fatura, teslim tutanağı veya aidat kararı hazırlanır." },
      { name: "Ödeme Emri", text: "Takip talebiyle dosya açılır, ödeme emri borçlunun adresine gönderilir." },
      { name: "İtiraz Halinde Yol Seçimi", text: "Belgenin niteliğine göre icra mahkemesi veya genel mahkeme yolu belirlenir." },
      { name: "Tahsil", text: "Kesinleşen takipte maaş, hesap ve mal varlığı hacizleriyle tahsil yapılır." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "beylikduzu-idare-avukati",
    name: "Beylikdüzü İdare Avukatı",
    heroTitle: "Beylikdüzü İdare Avukatı",
    heroSubtitle:
      "Beylikdüzü'nde belediye, imar ve kıyı alanına ilişkin idari işlemlere karşı açılan iptal ve tam yargı davalarında İstanbul idare mahkemeleri nezdinde temsil sağlanır.",
    metaTitle: "Beylikdüzü İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Beylikdüzü'nde idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş olup idari işlemlerin iptali ve tam yargı davaları alanında Beylikdüzü'ndeki müvekkillerine danışmanlık vermektedir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Kıyı Alanı Uygulamaları", description: "Sahil şeridi ve marina bölgesindeki imar uyuşmazlıkları." },
      { title: "Kooperatif İmar İzinleri", description: "Toplu konut projelerine ilişkin ruhsat süreçleri." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kıyı alanı ve sahil şeridi düzenlemelerine ilişkin idari dava süreçleri",
      "İmar planı değişikliklerine karşı iptal davası açılması",
      "Belediye ruhsat işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Sahil alanına ve imar planı değişikliklerine ilişkin idari işlemler, Beylikdüzü'nde zaman zaman dava konusu olabilmektedir; ilçe, 12,4 km uzunluğundaki kıyı şeridi ve West İstanbul Marina gibi tesisleriyle geniş bir sahil alanına sahiptir.",
      "Genel kural olarak dava açma süresi, ilgili işlemin tebliğinden itibaren 60 gündür; bu süre içindeki davalara İstanbul idare mahkemelerinde bakılmaktadır.",
    ],
    faqs: [
      { question: "Kıyı şeridindeki bir yapılaşmaya itiraz nasıl yapılır?", answer: "Kıyı şeridindeki bir yapılaşmaya karşı ilan veya tebliğ tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılabilir. Genel kural olarak idari davalarda süre 60 gündür (İYUK m.7). Sahil ve kıyı düzenlemelerine ilişkin imar ve ruhsat işlemleri iptal davasına konu edilebilir." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İmar planına karşı dava, ilan tarihinden itibaren yasal süre içinde idare mahkemesinde açılmalıdır; idari davalarda genel süre 60 gündür (İYUK m.7). Plan değişikliğinden etkilenen taşınmaz malikleri veya ilgili kişiler dava açabilir. Sürenin kaçırılmaması için ilan tarihi ve usulü doğru tespit edilmelidir." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde iptal davası açılabilir. Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Başvuru dosyası, ret yazısı ve tebliğ tarihini gösteren belgeler dava açılmadan önce derlenir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, idari para cezasına karşı yasal süresinde idare mahkemesinde dava açılabilir. İdari davalarda genel dava açma süresi, işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Ceza tutanağı ve tebliğ belgeleri dosyaya eklenir; iptal talebi hukuka aykırılık gerekçeleriyle birlikte sunulur." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "İdarenin işlem veya eyleminden zarar görenler, zararın tazmini için tam yargı davası açabilir. Zarara yol açan işlemin ya da eylemin ve zararın belgelerle ortaya konulması gerekir. Dava idare mahkemesinde görülür; süre ve ön başvuru usulü, somut olaya göre belirlenir." },
    ],
    howToTitle: "Beylikdüzü'nde İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "beylikduzu-is-hukuku-avukati",
    name: "Beylikdüzü İş Hukuku Avukatı",
    heroTitle: "Beylikdüzü İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul Büyükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Beylikdüzü İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Beylikdüzü'nde kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Beylikdüzü'ndeki fuarcılık, organizasyon ve diğer sektör çalışanlarına ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Fuar/Etkinlik Sektörü", description: "Dönemsel ve proje bazlı çalışanların işçilik alacakları." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Fuar dönemlerinde dönemsel çalışanların işçilik alacaklarının tahsili",
      "Hafta tatili ve yıllık izin ücreti gibi diğer işçilik alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "TÜYAP Fuar ve Kongre Merkezi'nde yıl boyunca düzenlenen etkinlikler, dönemsel ve proje bazlı istihdamı Beylikdüzü'nde yaygınlaştırmakta; bu da işçilik alacaklarının hesaplanmasında ayrı bir dikkat gerektirebilmektedir.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Büyükçekmece Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Fuar dönemlerinde çalışanların kıdem tazminatı hakkı var mı?", answer: "Şartları taşıması halinde fuar dönemlerinde çalışan dönemsel çalışanlar da kıdem tazminatına hak kazanabilir. Hizmet süresi ve işten ayrılış biçimi bu hakkın doğup doğmadığını belirler. Dönemsel ve proje bazlı çalışmalarda çalışma dönemleri ve sözleşmeler birlikte incelenerek işçilik alacağı hesaplanır." },
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Haksız fesih halinde kıdem tazminatı, çalışma süresi ve son brüt ücret esas alınarak hesaplanır. Hesapta çalışılan yıl sayısı ile ücrete eklenen düzenli ödemeler birlikte değerlendirilir. İşe giriş ve çıkış kayıtları, bordrolar ve fesih bildirimi hesabın dayanağını oluşturur; uyuşmazlık iş mahkemesinde görülür." },
      { question: "Beylikdüzü'nde iş mahkemesi nerededir?", answer: "Bölgedeki iş davalarına İstanbul Büyükçekmece Adliyesi bünyesindeki iş mahkemeleri bakar. İşe iade ve işçilik alacağı davaları, arabuluculukta anlaşma sağlanamazsa bu mahkemelerde görülür. İşe iade için fesihten itibaren 1 ay içinde arabuluculuğa başvurulur; son tutanaktan itibaren 2 hafta içinde dava açılır." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "İşe iade sürecinin toplam süresi dosyaya göre değişir. Süreç, fesihten itibaren 1 ay içinde arabuluculuğa başvuru ile başlar; anlaşma sağlanamazsa son tutanaktan itibaren 2 hafta içinde dava açılır. İş K. m.18 uyarınca en az 30 işçi ve 6 ay kıdem şartı aranır." },
      { question: "Etkinlik sırasında iş kazası geçiren çalışan ne yapmalı?", answer: "Etkinlik sırasında iş kazası geçiren çalışan olayı derhal SGK'ya bildirmeli, tedavi ve tazminat sürecini başlatmalıdır. Kaza tutanağı, sağlık raporları ve tanık bilgileri delil olarak saklanır. Maddi ve manevi tazminat talepleri iş mahkemesinde ileri sürülebilir; talebin kapsamı olayın koşullarına göre belirlenir." },
    ],
    howToTitle: "Beylikdüzü'nde İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "beylikduzu-kira-tahliye-avukati",
    name: "Beylikdüzü Kira ve Tahliye Avukatı",
    heroTitle: "Beylikdüzü Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Kooperatif kökenli sitelerden Yakuplu sahiline yakın konutlara kadar kira artışı, tahliye ve kira bedeli belirleme uyuşmazlıklarında arabulucu görüşmesinden mahkeme aşamasına kadar destek verilir; davalara İstanbul Büyükçekmece Adliyesi'ndeki sulh hukuk mahkemelerinde bakılır.",
    metaTitle: "Beylikdüzü Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Beylikdüzü'nde kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Avukat Furkan Arıkan hukuk diplomasını 2019'da MEF Üniversitesi'nden almıştır; İstanbul Barosu'ndaki sicil numarası 72621'dir. Beylikdüzü'nde site dairesi kiralayan malikler ve kiracılar için sözleşme düzenleme, kiranın yeniden belirlenmesi, tahliye talepleri ve arabulucu görüşmelerinde hukuki destek sağlar.",
    highlightCards: [
      { title: "Site Dairesi Kiraları", description: "Aidat, ortak gider ve otopark kullanımının sözleşmede paylaştırılması." },
      { title: "Kira Bedelinin Belirlenmesi", description: "TBK m.344 kapsamında emsal ve endeks esaslı değerlendirme." },
      { title: "Tahliye Sebepleri", description: "Temerrüt (TBK m.315), ihtiyaç (TBK m.350) ve taahhüt (TBK m.352/1)." },
      { title: "Arabuluculuk Şartı", description: "Kira davalarından önce 2023'ten beri zorunlu olan arabuluculuk görüşmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Site içi dairelerde aidat ve ortak gider sorumluluğunu düzenleyen kira sözleşmesi hazırlığı",
      "Sahile yakın ve iç kesimdeki emsallere dayalı kira bedeli belirleme davaları",
      "Kirayı ödemeyen kiracıya TBK m.315 çerçevesinde ihtar ve ardından tahliye",
      "Malikin veya yakınlarının konut ihtiyacına dayalı tahliye davaları",
      "Teslimden sonra verilen yazılı tahliye taahhüdüne dayanan icra yoluyla tahliye",
      "Arabulucu toplantılarında malik veya kiracının temsil edilmesi",
    ],
    localParagraphs: [
      "Beylikdüzü'nün yapı kooperatifleriyle oluşmuş toplu konut dokusu, kira ilişkilerinin sıklıkla site içindeki dairelerde kurulmasına yol açar; bu da sözleşmede aidat, yakıt ve ortak alan giderlerinin kimde kalacağını ayrı bir müzakere konusu yapar. Yakuplu sahili ve marina çevresine yakın konutlarla iç kesimlerdeki daireler arasındaki fark, kira bedeli belirleme davalarında emsal seçimini önemli kılar.",
      "Kira uyuşmazlıklarında 2023'te getirilen zorunlu arabuluculuk nedeniyle mahkemeye gitmeden önce arabulucuyla görüşülmesi gerekir; bu görüşmeden sonuç alınamayan dosyalar İstanbul Büyükçekmece Adliyesi'ndeki sulh hukuk mahkemesine taşınır. Ödeme ihtarına veya yazılı taahhüde dayanan tahliye istemleri ise icra dairesi üzerinden de yürütülebilir.",
    ],
    faqs: [
      { question: "Beylikdüzü'ndeki sitede kiracı aidatı ödemezse kiraya veren ne yapabilir?", answer: "Sözleşmede aidatın kiracıya ait olduğu kararlaştırılmışsa, kiraya veren ödenmeyen tutarı kiracıdan isteyebilir. Kiracının ödemesi gereken yan giderler de kira bedeli gibi 30 günlük süre verilerek ihtara konu edilebilir (TBK m.315). Bu nedenle aidat, yakıt ve ortak gider kalemlerinin kime ait olduğu sözleşmede açıkça yazılmalıdır." },
      { question: "Yakuplu sahiline yakın bir dairenin kirası mahkemece nasıl belirlenir?", answer: "Beş yılı aşan kira ilişkilerinde mahkeme, bilirkişi aracılığıyla benzer daireleri inceleyerek hakkaniyete uygun bir bedel belirler (TBK m.344). Sahile uzaklık, site olanakları ve yapının yaşı gibi özellikler ile endeksteki yıllık artış birlikte tartılır. Dava açılmadan önce arabulucu görüşmesinin tamamlanması gerekir." },
      { question: "Beylikdüzü'nde sözleşme süresi biten kiracı evden çıkmak zorunda mı?", answer: "Hayır; konut kirasında sözleşme süresinin bitmesi, kiraya verene tek başına sözleşmeyi sona erdirme hakkı vermez ve kiracı bildirimde bulunmadıkça sözleşme aynı koşullarla uzamış sayılır (TBK m.347). Kanundaki uzama süresi dolmadıkça kiraya veren, ancak kanunda sayılan ihtiyaç, kira borcunu ödememe veya yazılı taahhüt gibi sebeplerle tahliye isteyebilir." },
      { question: "Beylikdüzü'nde kira uyuşmazlığı için doğrudan mahkemeye gidilebilir mi?", answer: "Hayır, kira ilişkisinden kaynaklanan uyuşmazlıklarda 2023'ten beri mahkemeye gitmeden önce arabuluculuk aşamasının tamamlanması gerekir. Taraflar uzlaşırsa imzalanan belge icra edilebilir nitelik kazanabilir; sağlanamazsa son tutanakla birlikte Büyükçekmece'deki sulh hukuk mahkemesinde dava açılır. İcra yoluyla tahliye istemleri kural olarak bu şartın dışında kalır." },
      { question: "Beylikdüzü'nde kiracı tahliye taahhüdü verdiği tarihte çıkmazsa ne yapılır?", answer: "Kiracı taahhüdü daireyi teslim aldıktan sonra ve yazılı biçimde vermişse, kiraya veren boşaltılmayan daire için icra dairesi aracılığıyla tahliye isteyebilir (TBK m.352/1). Talep kanundaki süre geçirilmeden yapılmalıdır; aksi halde o dönem için taahhüde dayanma imkanı kaybolabilir. Taahhütnamenin aslı ve teslim tarihini gösteren belgeler hazır tutulmalıdır." },
    ],
    howToTitle: "Beylikdüzü'nde Kiralık Daire Uyuşmazlığı Hangi Sırayla Çözülür?",
    howToSteps: [
      { name: "Sözleşmenin Okunması", text: "Süre, aidat ve yan gider hükümleri ile tahliye sebebi belirlenir." },
      { name: "Yazılı Bildirim", text: "Ödeme ihtarı, kira artış talebi veya ihtiyaç bildirimi gönderilir." },
      { name: "Arabulucu Görüşmesi", text: "Anlaşma aranır; sağlanamazsa son tutanak düzenlenir." },
      { name: "Mahkeme veya İcra", text: "Talebin türüne göre Büyükçekmece'deki sulh hukuk mahkemesine gidilir ya da icra müdürlüğünden tahliye istenir." },
    ],
    crosslinkLabel: "Kira ve Tahliye Avukatı",
    relatedPostSlugs: ["kiracinin-tahliye-sureci", "kira-bedeli-tespit-ve-uyarlama-davasi"],
  },

  // ─────────────────────────── VERGİ ───────────────────────────
  {
    slug: "vergi",
    urlSlug: "beylikduzu-vergi-avukati",
    name: "Beylikdüzü Vergi Avukatı",
    heroTitle: "Beylikdüzü Vergi Avukatı",
    heroSubtitle:
      "Fuar, organizasyon ve etkinlik firmalarının dönemsel gelirleri ile konut satışlarından doğan vergi tarhiyatlarında Beylikdüzü Vergi Dairesi Müdürlüğü nezdinde uzlaşma ve İstanbul vergi mahkemelerinde dava süreçleri takip edilir.",
    metaTitle: "Beylikdüzü Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Beylikdüzü'nde vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İstanbul Barosu'nun 72621 sicilli avukatı Furkan Arıkan, MEF Üniversitesi'nin hukuk fakültesinden 2019'da mezun olmuştur. Beylikdüzü'nde organizasyon ve etkinlik şirketleri, kooperatif yoluyla konut edinmiş satıcılar ve küçük işletmeler için inceleme, ceza ve tahsil aşamalarındaki uyuşmazlıklarda danışmanlık ve dava vekilliği yapar.",
    highlightCards: [
      { title: "Fuar Dönemi Gelirleri", description: "Etkinliğe bağlı hasılatın hangi döneme ait olduğuna dair tarhiyatlar." },
      { title: "Kooperatif Konut Satışları", description: "Ortaklık payından tapuya geçen dairelerin satışında değer artışı." },
      { title: "Ceza İhbarnameleri", description: "Kesilen cezalarda uzlaşma ile yargı yolu arasında tercih." },
      { title: "Tahsil Aşaması", description: "Ödeme emrinde 6183 s.K. m.58'deki 15 günlük sürenin takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fuar ve organizasyon işletmelerinde hasılatın dönemselliği nedeniyle yapılan tarhiyatlara karşı savunma",
      "Kooperatif aracılığıyla edinilen konutların satışında değer artış kazancı uyuşmazlıkları",
      "Beylikdüzü Vergi Dairesi Müdürlüğü'nde tarhiyat sonrası uzlaşma talebi",
      "Tarhiyatın iptali için 30 günlük kanuni süre gözetilerek dava hazırlığı",
      "Tahsil için gönderilen ödeme emirlerinin 15 gün içinde yargıya taşınması",
      "Vergi incelemesi tutanaklarına şerh ve savunma hazırlığı",
    ],
    localParagraphs: [
      "TÜYAP Fuar ve Kongre Merkezi'nde düzenlenen etkinlikler, Beylikdüzü'ndeki organizasyon, stant ve lojistik işletmelerinin gelirini belirli dönemlerde yoğunlaştırır. Hasılatın faturalandığı tarih ile hizmetin verildiği dönem arasındaki farklar, beyan eksikliği iddiasına ve bu iddiaya dayanan vergi ziyaı cezasına yol açabilir.",
      "Kooperatifler eliyle gelişen ilçede, uzun yıllar önce ortaklık payıyla edinilmiş dairelerin satışında edinme tarihinin hangi işleme göre belirleneceği de vergisel sonucu etkileyebilir. Beyan ve tahsil işlemleri Beylikdüzü Vergi Dairesi Müdürlüğü'nde yürür, yargısal denetim ise İstanbul'daki vergi mahkemelerince yapılır.",
    ],
    faqs: [
      { question: "TÜYAP'ta yılın belirli aylarında gelir elde eden bir firma hangi vergi riskleriyle karşılaşır?", answer: "Başlıca risk, hasılatın hizmetin verildiği dönem yerine farklı bir dönemde beyan edilmesi nedeniyle tarhiyat yapılmasıdır. İncelemede sözleşme tarihleri, fatura düzenleme günleri ve banka tahsilatları karşılaştırılır. Tespit edilen farka vergi ziyaı cezası eklenebilir; ihbarnameye karşı uzlaşma veya dava yolu açıktır." },
      { question: "Beylikdüzü'nde kooperatiften alınan daire satıldığında değer artış kazancı doğar mı?", answer: "Satış, kanunda öngörülen elde tutma süresi dolmadan yapılmışsa değer artış kazancı doğabilir. Kooperatif yoluyla edinilen dairelerde sürenin başlangıcının ortaklık payının ediniminden mi yoksa tapu tescilinden mi hesaplanacağı belgelere göre incelenir. Tarhiyat yapılırsa ihbarnamenin tebliğinden sonraki 30 günlük süre içinde yargı yoluna başvurulabilir." },
      { question: "Beylikdüzü Vergi Dairesi'nden gelen ceza ihbarnamesi için uzlaşma mı dava mı tercih edilmeli?", answer: "Tercih, tarhiyatın dayanağının ne kadar güçlü olduğuna göre yapılır: hukuki hata belirginse dava, tutar üzerinde müzakere imkanı varsa uzlaşma öne çıkar. Uzlaşmada anlaşılamazsa dava yolu kapanmaz. Her iki yolda da 30 günlük dava süresi ile uzlaşma başvurusunun şartları birlikte izlenmelidir." },
      { question: "Beylikdüzü'ndeki bir mükellefin vergi davası açması tahsilatı durdurur mu?", answer: "Evet, tarhiyata karşı süresinde açılan dava, dava konusu vergi ve cezanın tahsilini karar verilinceye kadar kural olarak durdurur. Bu sonuç ihbarnameye karşı açılan davalar içindir; ödeme emrine karşı açılan davada tahsilin seyri ayrıca değerlendirilir. Beylikdüzü'ndeki mükelleflerin bu davaları İstanbul'daki vergi mahkemelerince karara bağlanır." },
      { question: "Beylikdüzü'ndeki bir etkinlik firması vergi davasında hangi belgeleri sunmalıdır?", answer: "Dilekçeye ihbarnamenin ve inceleme raporunun örnekleri, varsa uzlaşma tutanağı ile tarhiyatın hatalı olduğunu gösteren defter kayıtları, faturalar ve banka dökümleri eklenir. Etkinlik işletmelerinde hizmetin verildiği tarihleri gösteren sözleşmeler ve organizasyon takvimi de delil değeri taşır. Belgeler dava açma süresi içinde düzenli biçimde hazırlanmalıdır." },
    ],
    howToTitle: "Beylikdüzü'nde Bir Vergi İhbarnamesine Nasıl Yanıt Verilir?",
    howToSteps: [
      { name: "Tebliğ Tarihinin Tespiti", text: "Tebliğ günü kayda alınır, dava süresinin son günü hesaplanır." },
      { name: "Dönem ve Hasılat Analizi", text: "Fatura, sözleşme ve tahsilat kayıtları vergilendirme dönemiyle eşleştirilir." },
      { name: "Uzlaşma Talebi", text: "Uygunsa Beylikdüzü Vergi Dairesi Müdürlüğü'nden uzlaşma istenir." },
      { name: "Dava", text: "Anlaşma sağlanmazsa veya doğrudan tercih edilirse vergi mahkemesinde dava açılır." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "beylikduzu-borclar-hukuku-avukati",
    name: "Beylikdüzü Borçlar Hukuku Avukatı",
    heroTitle: "Beylikdüzü Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Etkinlik/organizasyon sözleşmesi uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; ticaret ve asliye hukuk mahkemeleri İstanbul Büyükçekmece Adliyesi'ndedir.",
    metaTitle: "Beylikdüzü Borçlar Hukuku Avukatı",
    metaDescription:
      "Beylikdüzü'nde sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Borçlar hukuku kapsamında Beylikdüzü'ndeki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık verir.",
    highlightCards: [
      { title: "Etkinlik/Stant Sözleşmeleri", description: "Fuar organizasyonu ve stant kiralama sözleşmelerinden doğan uyuşmazlıklar." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Kooperatif Sözleşmeleri", description: "Yapı kooperatifi ana sözleşmesinden doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fuar organizasyonu ve stant kiralama sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Kooperatif ortakları arası pay devri sözleşmelerinden doğan uyuşmazlıklar",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "TÜYAP çevresindeki yoğun etkinlik ve organizasyon sektörü nedeniyle Beylikdüzü'nde stant kiralama ve hizmet sözleşmelerinden doğan uyuşmazlıklar sık karşılaşılan dava türleri arasındadır.",
      "Bu davalar İstanbul Büyükçekmece Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Fuar organizatörü taahhüdünü yerine getirmezse ne yapılabilir?", answer: "Fuar organizatörü taahhüdünü yerine getirmezse sözleşmeden dönme, tazminat veya ifa davası gibi hukuki yollara başvurulabilir. Hangi yolun seçileceği sözleşme hükümlerine ve ihlalin niteliğine göre belirlenir. Stant kiralama veya hizmet sözleşmesi, ödeme belgeleri ve yazışmalar dayanak oluşturur." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Ticari alacak davası, niteliğine göre asliye ticaret mahkemesinde, İstanbul Büyükçekmece Adliyesi bünyesinde görülür. Ticari nitelikteki bazı alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması dava şartı olabilir. Dosyaya sözleşme, fatura ve yazışmalar gibi alacağı gösteren belgeler eklenir." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, dava öncesi arabuluculuk her uyuşmazlıkta şart değildir; yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Şartın aranıp aranmadığı uyuşmazlığın konusuna göre belirlenir. Zorunlu olduğu hallerde arabuluculuğa başvurulmadan açılan dava usulden reddedilebilir. Bu nedenle uyuşmazlığın türü baştan doğru nitelendirilmelidir." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse alacak talep edilemez; ileri sürmezse talep edilebilir. Zamanaşımı mahkemece kendiliğinden dikkate alınmaz, borçlunun itirazına bağlıdır. Bu nedenle alacağın doğum tarihi ve zamanaşımını kesen işlemler dosyada dikkatle incelenir. Sözleşme, fatura ve yazışmalar bu incelemeye esas alınır." },
      { question: "Kooperatif ana sözleşmesine aykırı karar alınırsa ne yapılabilir?", answer: "Kooperatif ana sözleşmesine aykırı karar alınırsa karara karşı iptal davası açılabilir. Kararın hangi hükme aykırı olduğu ana sözleşme ve toplantı tutanağı üzerinden belirlenir. Kooperatif ortakları arası pay devri ve ortaklık haklarına ilişkin uyuşmazlıklarda bu belgeler önem taşır." },
    ],
    howToTitle: "Beylikdüzü'nde Alacak Davası Süreci Nasıl İşler?",
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

export const beylikduzuServices: PseoService[] = [...beylikduzuBaseServices, beylikduzuMiras];
