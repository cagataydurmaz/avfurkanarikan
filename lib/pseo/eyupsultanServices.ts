import type { PseoService } from "./types";
import { eyupsultanMiras } from "./miras/eyupsultanMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const eyupsultanBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "eyupsultan-avukat",
    name: "Eyüpsultan Avukat",
    heroTitle: "Eyüpsultan Avukat",
    heroSubtitle:
      "Haliç kıyısındaki tarihi mahallelerden Alibeyköy'ün yeni konut alanlarına uzanan Eyüpsultan'da, Av. Furkan Arıkan (İstanbul Barosu, sicil 72621) ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukukunda danışmanlık ve dava takibi sunar; ilçe İstanbul Gaziosmanpaşa Adliyesi'ne bağlıdır.",
    metaTitle: "Eyüpsultan Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Eyüpsultan'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nin 2019 mezunu olan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve Beşiktaş/Sinanpaşa'daki bürosundan çalışır. Nişanca, Düğmeciler ve İslambey gibi merkez mahallelerden Alibeyköy, Yeşilpınar ve Akşemseddin'e kadar ilçenin farklı bölgelerinden gelen kira, tapu, aile, ceza ve alacak dosyalarını takip eder; ilk görüşme talebi telefonla veya WhatsApp üzerinden yapılabilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Karakol ve adliye aşamasında müdafi olarak hazır bulunma." },
      { title: "Aile Hukuku", description: "Boşanma davası, velayet ve nafaka artırım talepleri." },
      { title: "Gayrimenkul Hukuku", description: "Alibeyköy'deki dönüşüm projelerinde tapu ve kat mülkiyeti." },
      { title: "İş Hukuku", description: "Fesih sonrası işçilik alacakları ve işe iade talepleri." },
      { title: "İcra Hukuku", description: "Ödeme emri, haciz ve itiraz aşamalarının takibi." },
      { title: "İdare Hukuku", description: "İmar, ruhsat ve belediye kararlarına karşı iptal davası." },
      { title: "Vergi Hukuku", description: "Eyüp Mal Müdürlüğü işlemlerinden doğan uyuşmazlıklar." },
      { title: "Borçlar Hukuku", description: "Sözleşmeye aykırılık ve tazminat kaynaklı talepler." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı, ifade ve duruşma aşamalarında ceza müdafiliği",
      "Boşanma, velayet, nafaka ve mal paylaşımı davaları",
      "Alibeyköy ve çevresindeki dönüşüm projelerinde tapu, kat mülkiyeti ve riskli yapı işlemleri",
      "Merkez mahallelerdeki konut ve dükkân kiralarında tahliye ve bedel uyuşmazlıkları",
      "Kıdem, ihbar ve fazla çalışma alacakları ile işe iade talepleri",
      "Ödeme emrine itiraz, haciz ve itirazın iptali süreçleri",
      "İmar ve ruhsat kararlarına karşı idari dava",
      "Eyüp Mal Müdürlüğü işlemlerine karşı vergi uyuşmazlığı takibi",
    ],
    localParagraphs: [
      "Eyüp Sultan Camii ve Türbesi çevresindeki tarihi merkez ile Alibeyköy gibi eski sanayi alanlarının konuta dönüştüğü mahalleler, Eyüpsultan'da birbirinden farklı hukuki ihtiyaçlar doğurur. Merkezde kira ve miras kaynaklı taşınmaz sorunları, dönüşüm bölgelerinde ise riskli yapı, kat karşılığı sözleşme ve tapu uyuşmazlıkları gündeme gelebilir.",
      "İlçenin hukuk ve ceza dosyaları Merkez Mahallesi Eski Edirne Asfaltı No:32'deki İstanbul Gaziosmanpaşa Adliyesi'nde görülür; vergisel işlemler Eyüp Mal Müdürlüğü'ne bağlıdır. Alibeyköy'deki M7 istasyonu ile Topçular sınırındaki M1 Bayrampaşa-Maltepe istasyonu, ilçeye raylı sistem bağlantısı sağlar.",
    ],
    faqs: [
      { question: "Eyüpsultan'daki davalar hangi adliyede görülür?", answer: "Eyüpsultan'a ait davalar İstanbul Gaziosmanpaşa Adliyesi'nde görülür. Adliye, Gaziosmanpaşa Merkez Mahallesi Eski Edirne Asfaltı No:32 adresindedir; ceza, aile, iş, icra ve ticaret uyuşmazlıkları burada yürütülür. Vergi ve idari davalar ise İstanbul'daki vergi ve idare mahkemelerinde açılır." },
      { question: "Eyüpsultan'da büronuz var mı?", answer: "Hayır, Eyüpsultan'da büro yoktur; çalışma adresi Beşiktaş/Sinanpaşa'dır. Alibeyköy, Topçular veya merkez mahallelerden başvuran müvekkillerle büroda ya da çevrim içi görüşme yapılabilir. Vekalet verildikten sonra Gaziosmanpaşa Adliyesi'ndeki duruşmalara ve kalem işlemlerine avukat katılır, gelişmeler müvekkile aktarılır." },
      { question: "Alibeyköy'de dönüşüme giren binamda neleri kontrol etmeliyim?", answer: "Önce binanın riskli yapı tespitine ilişkin yazının içeriği ve tebliğ tarihi kontrol edilmelidir; bu işleme karşı itiraz ve dava için öngörülen süreler kısadır. Ardından müteahhitle yapılacak kat karşılığı sözleşmenin noterde düzenleme şeklinde yapılıp yapılmadığı, teslim süresi ve teminat hükümleri incelenmelidir." },
      { question: "Eyüpsultan'daki evimden kiracıyı çıkarmak için ne yapmalıyım?", answer: "Önce tahliyenin dayanağı belirlenir: kira borcunun ödenmemesi, yazılı tahliye taahhüdü veya konut ihtiyacı. Temerrütte TBK m.315 uyarınca süre verilerek ihtar çekilir; taahhütnameye dayalı tahliye icra dairesinden, ihtiyaç nedeniyle tahliye sulh hukuk mahkemesinden istenir. Dava açılacaksa önce arabulucuya başvurulması zorunludur." },
      { question: "Eyüpsultan'daki vergi işlemleri hangi birime bağlı?", answer: "Eyüpsultan'daki mükelleflerin vergi işlemleri Eyüp Mal Müdürlüğü üzerinden yürütülür. Bu birimin düzenlediği ihbarnameye karşı tebliğden itibaren 30 gün içinde İstanbul vergi mahkemelerinde dava açılabilir (İYUK m.7); dava yerine önce uzlaşma da talep edilebilir. Ödeme emrine karşı süre ise 15 gündür (6183 s.K. m.58)." },
    ],
    howToTitle: "Eyüpsultan'dan Başvuruda Süreç Hangi Adımlarla İlerler?",
    howToSteps: [
      { name: "Konunun Aktarılması", text: "Telefon veya WhatsApp ile uyuşmazlığın özeti ve varsa tebligat tarihi bildirilir." },
      { name: "Belgelerin İncelenmesi", text: "Tapu, kira sözleşmesi, ihtarname veya tutanak gibi evrak görüşme öncesinde gözden geçirilir." },
      { name: "Yol Haritası", text: "Ücretli danışmanlık görüşmesinde başvurulacak merci ve takip edilecek süreler netleşir." },
      { name: "Adliye Takibi", text: "Vekaletname sonrası Gaziosmanpaşa Adliyesi'ndeki işlemler yürütülür ve gelişmeler aktarılır." },
    ],
    crosslinkLabel: "Eyüpsultan Avukat (Genel)",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "kidem-tazminati-hesaplama-2026", "icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "eyupsultan-bosanma-avukati",
    name: "Eyüpsultan Boşanma Avukatı",
    heroTitle: "Eyüpsultan Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma davalarında velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; davalar İstanbul Gaziosmanpaşa Adliyesi'nde görülür.",
    metaTitle: "Eyüpsultan Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Eyüpsultan'da anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan (İstanbul Barosu, Sicil No: 72621), aile hukuku alanında boşanma, velayet ve nafaka dosyalarında Eyüpsultan'daki müvekkillerine temsil sağlamaktadır; MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur.",
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
      "Eyüpsultan Merkez'in köklü aile yapısından Alibeyköy'ün yoğun ve genç nüfuslu konut dokusuna uzanan sosyo-demografik çeşitlilik, boşanma dosyalarında velayet ve nafaka taleplerinin niteliğini de etkileyebilmektedir.",
      "İlçede açılan boşanma, velayet ve nafaka davalarına İstanbul Gaziosmanpaşa Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Aile mahkemesi başvurusu nasıl yapılır?", answer: "Aile mahkemesi başvurusu, dilekçeyle İstanbul Gaziosmanpaşa Adliyesi'ndeki aile mahkemesine yapılır. Dilekçede boşanma sebebi, velayet, nafaka ve mal rejimi talepleri yer alır; yetkili mahkeme TMK m.168'e göre belirlenir. Anlaşmalı boşanmada ise protokol hazırlanır ve duruşmada taraflar birlikte beyanda bulunur." },
      { question: "Anlaşmalı boşanmada taraflar duruşmaya katılmalı mı?", answer: "Evet, anlaşmalı boşanmada taraflar duruşmaya katılır; hakim her iki tarafı da dinleyerek iradeyi teyit eder. TMK m.166/3 uyarınca evliliğin en az bir yıl sürmüş olması ve eşlerin duruşmada birlikte beyanda bulunması gerekir. Protokolün velayet, nafaka ve mal paylaşımını eksiksiz düzenlemesi süreci kolaylaştırır." },
      { question: "Manevi tazminat hangi hallerde istenir?", answer: "Manevi tazminat, kişilik haklarına saldırı niteliğindeki kusurlu davranışlarda talep edilebilir. Boşanmaya bağlı maddi ve manevi tazminat talepleri boşanma davasında ileri sürülür. Kusurun ve kişilik hakkının ihlal edildiğinin delillerle gösterilmesi gerekir; talep, tarafların durumu ve olayın niteliğine göre değerlendirilir." },
      { question: "Ortak velayet mümkün müdür?", answer: "Ortak velayet, tarafların anlaşması ve çocuğun yararına uygun olması halinde uygulanabilir. Velayet düzenlemesinde belirleyici ölçüt çocuğun üstün yararıdır; mahkeme bu ölçütü çocuğun bakım, eğitim ve yaşam koşullarıyla birlikte değerlendirir. Anlaşmalı boşanma protokolünde velayet konusu açıkça düzenlenmelidir." },
      { question: "Yoksulluk nafakası kim tarafından talep edilebilir?", answer: "Yoksulluk nafakasını, boşanma nedeniyle yoksulluğa düşecek taraf talep edebilir. Nafaka miktarı tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilerek belirlenir. Nafakanın artırılması, azaltılması ve kaldırılması için ayrı davalar açılabilir; koşullar değiştiğinde bu yönde talepte bulunmak mümkündür." },
      { question: "Boşanma sonrası soyadı değişikliği nasıl olur?", answer: "Kadın, dilerse kararla birlikte evlilik öncesi soyadını kullanmaya devam edebilir. Bu talep boşanma davası sırasında mahkemeye iletilir. Soyadı konusunun velayet ve nafaka gibi boşanmanın diğer sonuçlarıyla birlikte dilekçede belirtilmesi, kararın eksiksiz düzenlenmesine yardımcı olur; hangi yolun izleneceği dosyadaki taleplere göre değerlendirilir." },
    ],
    howToTitle: "Eyüpsultan'da Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "Talep Belirleme", text: "Velayet, nafaka ve mal rejimi konusundaki talepler netleştirilir." },
      { name: "Dilekçe/Protokol", text: "Duruma uygun dilekçe veya protokol hazırlanır." },
      { name: "Aile Mahkemesine Başvuru", text: "Dosya açılarak duruşma günü beklenir." },
      { name: "Sonuçlandırma", text: "Duruşma sonrası mahkeme kararını verir." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "bosanmada-nafaka-turleri"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "eyupsultan-ceza-avukati",
    name: "Eyüpsultan Ceza Avukatı",
    heroTitle: "Eyüpsultan Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; kovuşturma İstanbul Gaziosmanpaşa Adliyesi'nde yürütülür.",
    metaTitle: "Eyüpsultan Ceza Avukatı | Müdafilik",
    metaDescription:
      "Eyüpsultan'da soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan (İstanbul Barosu, Sicil No: 72621), ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında Eyüpsultan'daki müvekkillerine müdafilik yapmaktadır; MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Kanun Yolları", description: "İstinaf ve temyiz süreçlerinin yürütülmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltındaki şüpheliye müdafilik hizmeti verilmesi",
      "Soruşturma aşamasında evrak incelemesi yapılması",
      "Tutuklama ve adli kontrol kararlarına itiraz edilmesi",
      "Kovuşturma sürecinde duruşmalara katılım sağlanması",
      "Üst mahkemelere başvuru dilekçelerinin hazırlanması",
      "Uzlaşma görüşmelerinde müvekkilin temsil edilmesi",
    ],
    localParagraphs: [
      "Eyüp Sultan Camii çevresindeki yoğun ziyaretçi trafiği ile Alibeyköy ve Rami çevresindeki kalabalık yerleşim, Eyüpsultan'da kolluk müdahalesi gerektiren olayların görece sık yaşanmasına zemin hazırlayabilmektedir. Kovuşturma aşamasındaki davalar İstanbul Gaziosmanpaşa Adliyesi'nde görülür.",
      "Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması sonraki aşamaların seyri açısından belirleyicidir.",
    ],
    faqs: [
      { question: "Eyüpsultan'da işlenen suçlarla ilgili dava nerede görülür?", answer: "Eyüpsultan'da işlenen suçlarla ilgili davalar İstanbul Gaziosmanpaşa Adliyesi'nde görülür. Soruşturma aşamasında savcılık ve sulh ceza hakimliği işlemleri bu adliye bünyesinde yürür; iddianame kabul edilirse kovuşturma da burada yapılır. Dosyanın hangi mahkemeye düşeceği iddia edilen suçun niteliğine bağlıdır." },
      { question: "Gözaltı süresi ne kadardır?", answer: "Gözaltı süresi, suçun niteliğine göre kanunda öngörülen sürelerle sınırlıdır. Gözaltına alınan kişi, gözaltının başladığı andan itibaren müdafi ile görüşme hakkına sahiptir (CMK m.154) ve susma hakkını kullanabilir. Bu hakların zamanında kullanılması, sonraki aşamaların seyri açısından belirleyici olabilir." },
      { question: "Adli kontrol tedbiri nedir?", answer: "Adli kontrol, tutuklama yerine uygulanabilecek ve belirli yükümlülükler içeren bir tedbirdir. Tutuklama talebi değerlendirilirken sulh ceza hakimliği CMK m.100 ve m.101 ölçütlerine göre karar verir; adli kontrol bu seçeneklerden biridir. Müdafi, sorgu öncesinde dosyayı inceleyerek adli kontrol seçeneklerini sunabilir." },
      { question: "Duruşmaya katılmak zorunlu mu?", answer: "Sanığın duruşmaya katılımı kural olarak esastır, bazı hallerde istisnalar uygulanabilir. Kovuşturma sürecinde duruşmalara müdafi katılır ve sanığın savunması bu şekilde desteklenir. Katılım zorunluluğu ve istisnalar suçun niteliğine ve mahkemenin kararına göre değiştiğinden, davetiyede yazan gün ve saate dikkat edilmelidir." },
      { question: "Temyiz süresi kaç gündür?", answer: "Temyiz, kararın niteliğine göre kanunda belirtilen süre içinde yapılmalıdır. Süre, kararın tebliğ edildiği veya öğrenildiği tarihten başladığından tebliğ tarihinin doğru belirlenmesi gerekir. Üst mahkemelere başvuru dilekçeleri hazırlanırken karardaki hukuka aykırılıklar somut olarak gösterilir; süre kaçırılırsa karar kesinleşebilir." },
      { question: "Uzlaşma sağlanırsa dava ne olur?", answer: "Uzlaşma sağlanırsa kamu davası açılmaz veya açılmışsa düşürülür. Uzlaştırma yalnızca kanunda sayılan suçlarda uygulanır (CMK m.253). Anlaşma sağlanamazsa soruşturma veya kovuşturma kaldığı yerden sürer; uzlaşma görüşmelerinde müvekkil temsil edilir ve teklif dosyadaki delil durumuyla birlikte değerlendirilir." },
    ],
    howToTitle: "Eyüpsultan'da Ceza Yargılaması Nasıl İlerler?",
    howToSteps: [
      { name: "Şikayet/İhbar", text: "Yetkili makamlara bildirimde bulunulur." },
      { name: "Soruşturma", text: "Savcılık delil toplar, ifadeler alınır." },
      { name: "İddianame", text: "Yeterli şüphe varsa dava açılır." },
      { name: "Yargılama", text: "Duruşmalar sonunda karar verilir." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "eyupsultan-gayrimenkul-avukati",
    name: "Eyüpsultan Gayrimenkul Avukatı",
    heroTitle: "Eyüpsultan Gayrimenkul Avukatı",
    heroSubtitle:
      "Kentsel dönüşüm, tapu uyuşmazlıkları ve kira ilişkilerinde hukuki destek sağlanır; davalar İstanbul Gaziosmanpaşa Adliyesi'nde görülür.",
    metaTitle: "Eyüpsultan Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Eyüpsultan'da tapu iptali, kentsel dönüşüm ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan (İstanbul Barosu, Sicil No: 72621), tapu, kat mülkiyeti ve kentsel dönüşüm uyuşmazlıklarında Eyüpsultan'daki müvekkillerine danışmanlık vermektedir; MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur.",
    highlightCards: [
      { title: "Kentsel Dönüşüm", description: "Alibeyköy ve çevresindeki dönüşüm süreçlerinde destek." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Kat Mülkiyeti", description: "Yönetim planı ve ortak gider anlaşmazlıkları." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Riskli yapı tespiti sonrası kentsel dönüşüm sürecinde danışmanlık",
      "Tapu iptali ve tescil davalarının açılması",
      "Kat mülkiyeti ve yönetim planından doğan uyuşmazlıklar",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
      "Ortaklığın giderilmesi (izale-i şüyu) davaları",
    ],
    localParagraphs: [
      "Alibeyköy'de eski sanayi tesislerinin konut ve ticaret alanına dönüştüğü bölgelerde kentsel dönüşüm projeleri yoğun biçimde sürmekte, bu da tapu ve kat mülkiyeti işlemlerini Eyüpsultan'da sık gündeme gelen bir konu haline getirmektedir; bu uyuşmazlıklar İstanbul Gaziosmanpaşa Adliyesi'ndeki sulh hukuk ve asliye hukuk mahkemelerinde görülür.",
      "Haliç kıyısındaki mahallelerde de kıyı ve dolgu alanı statüsüne bağlı tapu ve kullanım uyuşmazlıkları zaman zaman gündeme gelmektedir.",
    ],
    faqs: [
      { question: "Kentsel dönüşüm süreci nasıl başlar?", answer: "Kentsel dönüşüm süreci, riskli yapı tespiti sonrasında kat maliklerinin çoğunluk kararı ve idari başvuru aşamalarıyla ilerler. Alibeyköy'de eski sanayi tesislerinin dönüştüğü bölgelerde bu projeler yoğun biçimde sürmektedir. Sürecin her aşamasında tapu ve kat mülkiyeti işlemleri ile idari işlemlerin hukuka uygunluğu incelenir." },
      { question: "Eyüpsultan'da gayrimenkul davası hangi mahkemede görülür?", answer: "Eyüpsultan'daki gayrimenkul davaları niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Gaziosmanpaşa Adliyesi bünyesinde görülür. Kira ve tahliye uyuşmazlıkları ile tapu iptali ve tescil davaları farklı mahkemelerin görev alanına girebileceğinden, dava açılmadan önce uyuşmazlığın niteliği belirlenir." },
      { question: "Riskli yapı kararına itiraz edilebilir mi?", answer: "Evet, riskli yapı kararının dayandığı teknik rapora karşı bilirkişi incelemesi talep edilerek itiraz edilebilir. Karara karşı idari yargı yolu da açıktır; dava açma süresi genel kural olarak tebliğden itibaren 60 gündür (İYUK m.7). Raporun kapsamı ve tebliğ tarihi dosyada birlikte incelenir." },
      { question: "Ortak gider anlaşmazlıkları nasıl giderilir?", answer: "Ortak gider anlaşmazlıklarında öncelikle yönetim planı ve Kat Mülkiyeti Kanunu esas alınır; çözülemezse dava yoluna gidilir. Kat malikleri kurulu ve yönetim planından doğan uyuşmazlıklarda karar tutanakları ve ödeme kayıtları incelenir. Dava, İstanbul Gaziosmanpaşa Adliyesi bünyesindeki ilgili mahkemede açılabilir." },
      { question: "Haliç kıyısındaki taşınmazlarda ek bir kısıtlama var mı?", answer: "Evet, kıyı ve dolgu alanı statüsü kullanım ve tadilat açısından ek kısıtlamalar getirebilir. Haliç kıyısındaki mahallelerde statüye bağlı tapu ve kullanım uyuşmazlıkları zaman zaman gündeme gelir. Bu nedenle tapu kayıtları ve taşınmazın statüsü, işlem yapılmadan önce incelenmelidir." },
    ],
    howToTitle: "Eyüpsultan'da Kentsel Dönüşüm Süreci Nasıl Yürütülür?",
    howToSteps: [
      { name: "Teknik Tespit", text: "Yapının riskli olup olmadığına dair rapor alınır." },
      { name: "Kat Maliki Süreci", text: "Maliklerin anlaşması ve gerekli kararların alınması sağlanır." },
      { name: "İdari Başvuru", text: "İlgili idareye yıkım ve yeniden yapım için başvurulur." },
      { name: "Uygulama", text: "Anlaşma ve idari onay sonrası inşaat süreci başlar." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "eyupsultan-icra-avukati",
    name: "Eyüpsultan İcra Avukatı",
    heroTitle: "Eyüpsultan İcra Avukatı",
    heroSubtitle:
      "Alacak tahsili amacıyla icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır; icra mahkemeleri İstanbul Gaziosmanpaşa Adliyesi'ndedir.",
    metaTitle: "Eyüpsultan İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Eyüpsultan'da icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan (İstanbul Barosu, Sicil No: 72621), icra ve iflas hukuku kapsamında Eyüpsultan'daki alacaklı ve borçlu taraflara danışmanlık vermektedir; MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacaklının talebiyle ilamlı veya ilamsız takip dosyası açılması",
      "Ödeme emrine süresi içinde itiraz edilmesi",
      "İtirazın iptali veya itirazın kaldırılması davalarının yürütülmesi",
      "Taşınır ve taşınmaz mal üzerine haciz konulması",
      "İhale ve satış işlemlerine ilişkin itirazlar",
      "İflasın ertelenmesi ve konkordato taleplerinde danışmanlık",
    ],
    localParagraphs: [
      "Alibeyköy ve Rami çevresindeki küçük ve orta ölçekli işletmelerin ticari alacakları, Eyüpsultan'da icra takiplerinin sık başvurulan bir yol olmasına yol açmaktadır; bu takiplere ilişkin uyuşmazlıklar İstanbul Gaziosmanpaşa Adliyesi'ndeki icra mahkemelerinde görülür.",
      "Borçlunun Eyüpsultan'da yerleşik olduğu takiplerde yetkili icra dairesi, kural olarak borçlunun ikametgahı veya sözleşmede belirlenen yer esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "Takibe hangi hallerde itiraz edilir?", answer: "Borcun bulunmadığı, ödendiği veya imzanın borçluya ait olmadığı iddialarıyla itiraz edilebilir. Ödeme emrine itiraz süresi tebliğden itibaren 7 gündür (İİK m.62). İtiraz süresi içinde yapılırsa takip durur; alacaklı bu durumda itirazın iptali veya kaldırılması yoluna başvurabilir." },
      { question: "İtiraz süresi kaçırılırsa ne olur?", answer: "İtiraz süresi kaçırılırsa takip kesinleşir ve borçlu hakkında haciz işlemlerine geçilebilir. Ödeme emrine itiraz süresi tebliğden itibaren 7 gündür (İİK m.62); bu nedenle tebliğ tarihinin doğru belirlenmesi önemlidir. Kesinleşen takipte haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür." },
      { question: "Haciz kararına itiraz edilebilir mi?", answer: "Usule aykırılık halinde haciz işlemine karşı icra mahkemesine şikayet yoluyla itiraz edilebilir. Haciz taşınır ve taşınmaz mallar üzerine konulabildiğinden işlemin usule uygunluğu dosya üzerinden incelenir. Şikayet İstanbul Gaziosmanpaşa Adliyesi bünyesindeki icra mahkemesine yapılır; ihale ve satış işlemlerine ilişkin itirazlar da bu kapsamda değerlendirilir." },
      { question: "İcra dosyası hangi mahkemenin denetimindedir?", answer: "İcra dosyaları, İstanbul Gaziosmanpaşa Adliyesi bünyesindeki icra mahkemelerinin denetimindedir. İcra takibinden doğan uyuşmazlıklar, örneğin şikayet, itirazın kaldırılması ve ihale işlemlerine ilişkin talepler bu mahkemelerde görülür. Borçlunun Eyüpsultan'da yerleşik olduğu takiplerde yetkili icra dairesi kural olarak borçlunun ikametgahına göre belirlenir." },
      { question: "Borçlunun mal kaçırması halinde ne yapılabilir?", answer: "Borçlunun mal kaçırması halinde tasarrufun iptali davası açılarak işlemlerin geçersizliği talep edilebilir. Dava, alacaklıya zarar verecek şekilde yapılan devir ve benzeri işlemlerin alacaklı bakımından hükümsüz sayılmasını amaçlar. Dayanak olarak icra dosyası ile devre ilişkin tapu veya satış kayıtları kullanılır." },
    ],
    howToTitle: "Eyüpsultan'da İcra Takibi Hangi Aşamalardan Oluşur?",
    howToSteps: [
      { name: "Alacağın Tespiti", text: "Takibe konu borcun dayanağı belirlenir." },
      { name: "Takibin Başlatılması", text: "İcra dairesine başvuru yapılarak dosya açılır." },
      { name: "İtiraz Süresinin Takibi", text: "Borçlunun itiraz edip etmediği izlenir." },
      { name: "Tahsilat Aşaması", text: "Kesinleşen takipte haciz ve satış yoluyla tahsilat yapılır." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "eyupsultan-idare-avukati",
    name: "Eyüpsultan İdare Avukatı",
    heroTitle: "Eyüpsultan İdare Avukatı",
    heroSubtitle:
      "Belediye ve diğer kamu kurumu işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Eyüpsultan İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Eyüpsultan'da idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan (İstanbul Barosu, Sicil No: 72621), idari işlemlerin iptali ve tam yargı davalarında Eyüpsultan'daki müvekkillerine danışmanlık vermektedir; MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Tam Yargı Davaları", description: "İdarenin işlem/eyleminden doğan zararın tazmini." },
      { title: "Riskli Yapı Kararları", description: "Kentsel dönüşüm kapsamındaki idari işlemlere itiraz." },
      { title: "Belediye İşlemleri", description: "İmar, ruhsat ve ceza kararlarına ilişkin uyuşmazlıklar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Riskli yapı ve yıkım kararlarına karşı hukuki itiraz",
      "İmar/ruhsat işlemlerinin idari yargıda denetlettirilmesi",
      "İdarenin işlem veya eyleminden doğan zararlar için dava açılması",
      "Belediye para cezalarına karşı başvuru yapılması",
      "Yürütmenin durdurulması taleplerinin sunulması",
      "Kamu görevlisi özlük uyuşmazlıklarında danışmanlık",
    ],
    localParagraphs: [
      "Alibeyköy'de yürütülen kentsel dönüşüm projeleri kapsamında tesis edilen riskli yapı tespiti ve yıkım kararlarına karşı idari yargı yoluna sıkça başvurulmaktadır; bu davalar İstanbul idare mahkemelerinde görülür.",
      "Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür; dini ve tarihi alan statüsündeki bölgelere ilişkin idari işlemler de bu kapsamda değerlendirilebilir.",
    ],
    faqs: [
      { question: "Riskli yapı kararı kime tebliğ edilir?", answer: "Riskli yapı kararı, kat maliklerine veya yapı sahiplerine resmi olarak bildirilir. Bildirim tarihi dava açma süresinin başlangıcı bakımından önemlidir; genel kural olarak süre işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Karara karşı idari yargı yoluna başvurulabilir ve yürütmenin durdurulması talep edilebilir." },
      { question: "Yıkım kararına karşı dava açılabilir mi?", answer: "Evet, yıkım kararına karşı tebliğinden itibaren süresi içinde idare mahkemesinde dava açılabilir. Genel kural olarak dava açma süresi 60 gündür (İYUK m.7). Davada yıkım kararının dayanağı ve usulü incelenir; yürütmenin durdurulması talebi de dilekçeyle birlikte sunulabilir." },
      { question: "Dini/tarihi alan statüsü ne anlama gelir?", answer: "Bu statüdeki taşınmazlarda idari işlemler ek inceleme ve onay süreçlerine tabi olabilir. Eyüp Sultan Camii çevresi gibi dini ve tarihi dokusu bulunan bölgelere ilişkin idari işlemler de bu kapsamda değerlendirilebilir. İşlemin dayanağı olan statünün belirlenmesi, itiraz veya dava yolunun seçiminde ilk adımdır." },
      { question: "Belediye cezasına itiraz süresi kaçtır?", answer: "Belediye cezasına karşı kanunda öngörülen süre içinde idare mahkemesine başvurulmalıdır. Genel idari davalarda süre işlemin tebliğinden itibaren 60 gündür (İYUK m.7), ancak cezanın dayanağı mevzuata göre farklı olabilir. Bu nedenle ceza tutanağının ve tebliğ tarihinin incelenmesi doğru başvuru yolunun belirlenmesi için gereklidir." },
      { question: "İdareden tazminat talep etmenin şartı nedir?", answer: "İdareden tazminat talep edilebilmesi için zararın idarenin işlem veya eyleminden kaynaklanması gerekir. Bu talep tam yargı davası yoluyla ileri sürülür ve zarar ile idari işlem arasındaki bağ belgelerle gösterilmelidir. Zararın kapsamı ve ispatı dosyadaki belgelere göre değerlendirilir; süreler işlemin niteliğine göre değişebilir." },
    ],
    howToTitle: "Eyüpsultan'da İdari İptal Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Karar İncelemesi", text: "İdari işlemin içeriği ve tebliğ tarihi değerlendirilir." },
      { name: "Süre Takibi", text: "60 günlük dava açma süresi hesaplanır." },
      { name: "Dava Hazırlığı", text: "Gerekçeler dilekçeye işlenir." },
      { name: "Karar Aşaması", text: "İdare mahkemesi incelemesini tamamlayıp karar verir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "eyupsultan-is-hukuku-avukati",
    name: "Eyüpsultan İş Hukuku Avukatı",
    heroTitle: "Eyüpsultan İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul Gaziosmanpaşa Adliyesi bünyesindedir.",
    metaTitle: "Eyüpsultan İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Eyüpsultan'da kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan (İstanbul Barosu, Sicil No: 72621), iş hukuku kapsamında Eyüpsultan'daki işçi ve işverenlere danışmanlık vermektedir; MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Sanayi Sonrası İstihdam", description: "Alibeyköy'de dönüşen işletmelerdeki iş sözleşmesi uyuşmazlıkları." },
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
      "Eyüpsultan'da Alibeyköy ve Rami çevresinde faaliyet gösteren küçük ve orta ölçekli işletmeler önemli bir istihdam alanı oluşturmaktadır. Bu işletmelerdeki iş sözleşmesi uyuşmazlıkları da diğer iş davaları gibi önce zorunlu arabuluculuk sürecinden geçer.",
      "Anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Gaziosmanpaşa Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Küçük işletmelerde işe iade süreci nasıl işler?", answer: "İşletme büyüklüğü iş güvencesi kapsamını etkiler; 30'dan az çalışanı olan işyerlerinde işe iade koşulları farklılaşabilir. İşe iade için işyerinde en az 30 işçi çalışması ve işçinin en az 6 ay kıdemi bulunması gerekir (İş K. m.18). Arabuluculuk fesihten itibaren 1 ay içinde başvurulur; son tutanaktan itibaren 2 hafta içinde dava açılır." },
      { question: "Kıdem tazminatı hesaplamasında hangi ücret esas alınır?", answer: "Kıdem tazminatı hesabında son brüt ücret ve düzenli ödenen ek menfaatler esas alınır. Ücret bordroları ve ödeme kayıtları hesabın dayanağını oluşturur. Haksız fesih halinde kıdem ve ihbar tazminatı davaları açılabilir; alacakların tahsili için önce arabuluculuk, anlaşma olmazsa dava süreci izlenir." },
      { question: "Eyüpsultan'da iş mahkemesi başvurusu nereye yapılır?", answer: "Eyüpsultan'daki iş davaları İstanbul Gaziosmanpaşa Adliyesi'ndeki iş mahkemelerinde görülür; başvuru bu mahkemelere yapılır. Dava açılmadan önce zorunlu arabuluculuk sürecinden geçilir, anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları açılabilir. İşe iade davası son tutanaktan itibaren 2 hafta içinde açılmalıdır." },
      { question: "Bordro imzalatılmadan çalıştırma yasal mı?", answer: "Hayır, işçilik alacaklarının ispatı için düzenli bordro tutulması gerekir. Sigortasız veya eksik günlü çalışma halinde hizmet tespiti davası açılabilir. Bordro ücret ve fazla mesai alacaklarının hesabında temel belgedir; eksik veya düzensiz bordrolar uyuşmazlık konusu olabilir ve ödeme kayıtlarıyla birlikte incelenir." },
      { question: "İşçilik alacaklarında zamanaşımı ne zaman başlar?", answer: "İşçilik alacaklarında zamanaşımı, alacağın muaccel olduğu andan itibaren işler; çoğu zaman bu, iş sözleşmesinin sona erdiği tarihtir. Hangi alacağın hangi sürede zamanaşımına uğrayacağı alacak türüne göre değişir. Zamanaşımı borçlu tarafça ileri sürüldüğünde incelendiğinden fesih tarihi ve ödeme kayıtları erkenden derlenmelidir." },
    ],
    howToTitle: "Eyüpsultan'da İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Durum Tespiti", text: "Feshin haklı olup olmadığı değerlendirilir." },
      { name: "Arabuluculuk Süreci", text: "Yasal süre içinde arabulucuya başvurulur." },
      { name: "Dava Aşaması", text: "Anlaşılamazsa iş mahkemesine dava açılır." },
      { name: "Karar ve Uygulama", text: "Mahkeme kararı işverence uygulanır veya tazminata hükmedilir." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "ise-iade-davasi"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "eyupsultan-kira-tahliye-avukati",
    name: "Eyüpsultan Kira ve Tahliye Avukatı",
    heroTitle: "Eyüpsultan Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Eyüpsultan'ın merkez mahallelerindeki konut kiralarından Alibeyköy ve Rami çevresindeki depo ve işyeri kiralarına kadar tahliye, kira bedeli ve sözleşme uyuşmazlıklarında takip yapılır; davalar İstanbul Gaziosmanpaşa Adliyesi'ndeki sulh hukuk mahkemelerinde görülür.",
    metaTitle: "Eyüpsultan Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Eyüpsultan'da kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İstanbul Barosu'nun 72621 sicil numaralı üyesi Av. Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Eyüpsultan'daki ev sahipleri ile konut ve işyeri kiracılarına; ihtarname hazırlığı, zorunlu arabuluculuk görüşmesi, tahliye ve bedel tespiti davaları ile icra yoluyla tahliye aşamalarında Beşiktaş/Sinanpaşa'daki bürodan hukuki destek verir.",
    highlightCards: [
      { title: "Ödememe Halinde Tahliye", description: "TBK m.315'e göre mühlet verilerek yapılan temerrüt ihtarı ve ardından tahliye." },
      { title: "Rami ve Alibeyköy İşyerleri", description: "Depo ve dükkân kiralarında fesih ve boşaltma anlaşmazlıkları." },
      { title: "Kira Bedelinin Belirlenmesi", description: "TBK m.344 çerçevesinde yeni dönemin kirasının hâkim tarafından saptanması." },
      { title: "Dönüşümdeki Binalar", description: "Yıkım kararı alınan yapılarda kira ilişkisinin sona ermesi ve kiracının durumu." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kira borcunu ödemeyen kiracıya TBK m.315 uyarınca süre verilen ihtarnamenin hazırlanması",
      "Yazılı tahliye taahhüdüne dayanarak icra dairesi üzerinden tahliye talebi",
      "Ev sahibinin kendisi veya yakını için konut ihtiyacına dayalı tahliye davası (TBK m.350)",
      "TBK m.344 kapsamında kira bedelinin tespiti ve uyarlanması davaları",
      "Alibeyköy ve Rami çevresindeki depo ve dükkân kiralarında fesih ve tahliye uyuşmazlıkları",
      "Kira davalarından önce zorunlu arabuluculuk görüşmesinde taraf temsili",
    ],
    localParagraphs: [
      "Eyüpsultan'da kira ilişkileri iki ayrı görünüm taşır: Nişanca, Defterdar ve İslambey gibi merkez mahallelerde konut kiraları öne çıkarken, Alibeyköy ve Rami çevresinde depo ve işyeri niteliğindeki taşınmazların kiralanması da yaygındır. Taşınmazın konut, çatılı işyeri ya da açık depo olması, uygulanacak hükümlerin belirlenmesinde ilk bakılan noktadır.",
      "Kira uyuşmazlıklarında dava açmadan önce arabulucuya başvurmak zorunludur; anlaşma sağlanamazsa dava, İstanbul Gaziosmanpaşa Adliyesi'ndeki sulh hukuk mahkemesinde görülür. Alibeyköy'deki dönüşüm projelerinde ise yıkım kararının kira sözleşmesine etkisi ayrıca değerlendirilir.",
    ],
    faqs: [
      { question: "Eyüpsultan'da kirayı ödemeyen kiracı nasıl tahliye edilir?", answer: "Kiracıya önce yazılı ihtarla ödeme için süre verilir; konut ve çatılı işyerlerinde bu süre en az 30 gündür (TBK m.315). Süre sonunda borç ödenmezse tahliye, icra dairesinden ya da arabuluculuk sonrası Gaziosmanpaşa Adliyesi'ndeki sulh hukuk mahkemesinden istenebilir. İhtarnamenin tebliğ tarihi dosyada saklanmalıdır." },
      { question: "Kiracı taahhütname verdiyse Eyüpsultan'da mahkemeye gitmeden tahliye mümkün mü?", answer: "Evet, kiralananın tesliminden sonra yazılı olarak verilmiş geçerli bir tahliye taahhüdü varsa, icra dairesi aracılığıyla dava açmadan tahliye istenebilir (TBK m.352/1). Takibin, taahhüt edilen tarihten sonra kanunda öngörülen kısa süre içinde başlatılması gerekir; kira sözleşmesiyle aynı gün imzalanan taahhütnamelerin geçerliliği tartışmalı olabilir." },
      { question: "Eyüpsultan'da riskli yapı kararı alınan binadaki kiracının durumu ne olur?", answer: "Riskli yapı olarak tespit edilen ve yıkımına karar verilen binada kira ilişkisi, ilgili mevzuattaki usule göre sona erebilir. Kiracının bu süreçte peşin ödediği kira ve depozito gibi kalemleri geri isteme imkânı dosyaya göre değerlendirilir. Tebligatlar, tespit yazısı ve sözleşme metni birlikte incelenmelidir." },
      { question: "Ev sahibi oğlu için evi istiyor; Eyüpsultan'daki kiracı ne yapmalı?", answer: "Bu durumda tahliye, kiraya verenin kendisi, eşi, altsoyu, üstsoyu veya bakmakla yükümlü olduğu kişiler için doğan konut ihtiyacına dayanır (TBK m.350). İhtiyacın gerçek, samimi ve sürekli olması aranır. Kiracı, ihtiyacın bu niteliği taşımadığını Gaziosmanpaşa Adliyesi'ndeki sulh hukuk mahkemesinde delilleriyle tartışabilir." },
      { question: "Eyüpsultan'da kira bedelini güncellemek için ne zaman dava açılabilir?", answer: "Kira bedelinin tespiti davası, TBK m.344 çerçevesinde yeni kira yılında ödenecek tutarı belirlemek için açılır. Kiraya veren de kiracı da başvurabilir; mahkeme, Eyüpsultan'daki emsal taşınmazların kira düzeyini, binanın yaşını ve konumunu dikkate alır. Dava öncesinde arabuluculuk aşaması tamamlanmalı, emsal ilanlar ve sözleşme dosyaya eklenmelidir." },
    ],
    howToTitle: "Eyüpsultan'da Tahliye Talebi Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "Dayanağın Seçilmesi", text: "Temerrüt, yazılı taahhüt veya ihtiyaç gibi tahliye sebebi belirlenir." },
      { name: "İhtar ve Arabuluculuk", text: "Gerekli ihtarname çekilir; dava yolu seçilecekse arabulucuya başvurulur." },
      { name: "Mahkeme veya İcra", text: "Gaziosmanpaşa Adliyesi'nde sulh hukuk davası açılır ya da icra dairesinden tahliye istenir." },
      { name: "Teslim", text: "Kesinleşen karar veya tahliye emriyle taşınmazın anahtarı teslim alınır." },
    ],
    crosslinkLabel: "Kira ve Tahliye Avukatı",
    relatedPostSlugs: ["kiracinin-tahliye-sureci", "kira-bedeli-tespit-ve-uyarlama-davasi"],
  },

  // ─────────────────────────── VERGİ ───────────────────────────
  {
    slug: "vergi",
    urlSlug: "eyupsultan-vergi-avukati",
    name: "Eyüpsultan Vergi Avukatı",
    heroTitle: "Eyüpsultan Vergi Avukatı",
    heroSubtitle:
      "Vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Eyüpsultan Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Eyüpsultan'da vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan (İstanbul Barosu, Sicil No: 72621), vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Eyüpsultan'daki müvekkillerine danışmanlık vermektedir; MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Mahkeme Süreci", description: "Vergi mahkemesinde dava açılması ve takibi." },
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
      "Eyüpsultan'da mükellefiyeti bulunanların vergisel işlemleri Eyüp Mal Müdürlüğü tarafından yürütülür; bu daireye ait tarhiyat ve ceza kararlarına karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir.",
      "Alibeyköy çevresindeki küçük ve orta ölçekli sanayi/ticaret işletmelerinin faaliyet hacmi, KDV ve kurumlar vergisi kaynaklı uyuşmazlıkların da sık görülmesine yol açmaktadır.",
    ],
    faqs: [
      { question: "Vergi/ceza ihbarnamesine itiraz için süre nedir?", answer: "Vergi veya ceza ihbarnamesine karşı dava açma süresi tebliğden itibaren 30 gündür (İYUK m.7). Bu süre içinde İstanbul vergi mahkemelerinde iptal davası açılır. Uzlaşma başvurusu yapılmışsa uzlaşma sağlanamaması halinde kalan dava açma süresi korunur; bu nedenle tebliğ tarihinin doğru tespiti önemlidir." },
      { question: "Vergi uyuşmazlığı hangi yargı merciinde çözülür?", answer: "Vergi uyuşmazlıkları İstanbul vergi mahkemelerinde çözülür. Eyüp Mal Müdürlüğü'ne ait tarhiyat ve ceza kararlarına karşı açılan davalar da bu mahkemelerde görülür. İhbarnameye karşı dava, tebliğden itibaren 30 gün içinde açılır (İYUK m.7); ödeme emrine karşı dava da aynı mahkemede açılabilir." },
      { question: "Uzlaşma görüşmesi sonuçsuz kalırsa ne olur?", answer: "Uzlaşma görüşmesi sonuçsuz kalırsa mükellef kalan süre içinde dava açma hakkını kullanabilir. Uzlaşma başvurusu dava hakkını ortadan kaldırmaz; ihbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür (İYUK m.7). Uzlaşma ile dava yolu arasındaki tercih tarhiyatın miktarı ve dayanağına göre değerlendirilir." },
      { question: "Ödeme emrine dava açma süresi kaçtır?", answer: "Ödeme emrine karşı dava açma süresi tebliğinden itibaren 15 gündür. Ödeme emri kesinleşmiş vergi borcunun tahsili için gönderilir ve davaya İstanbul vergi mahkemelerinde bakılır. Dava açılırken ödeme emrinin dayanağı olan tarhiyatın kesinleşme durumu ve tebliğ usulü birlikte incelenir." },
      { question: "Küçük işletmelerde sık görülen vergi uyuşmazlığı nedir?", answer: "Küçük işletmelerde kayıt dışı işlem iddiaları ve KDV indirimi reddi sıkça gündeme gelen vergi uyuşmazlıklarıdır. Alibeyköy çevresindeki küçük ve orta ölçekli işletmelerin faaliyet hacmi KDV ve kurumlar vergisi kaynaklı uyuşmazlıkların da sık görülmesine yol açmaktadır. Bu işlemlere karşı ihbarnamenin tebliğinden itibaren 30 gün içinde dava açılabilir." },
    ],
    howToTitle: "Eyüpsultan'da Vergi İtirazı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Dosya İncelemesi", text: "Tarhiyatın veya cezanın hukuki dayanağı incelenir." },
      { name: "Karar Aşaması", text: "Uzlaşma veya dava seçeneklerinden biri tercih edilir." },
      { name: "Süreli Başvuru", text: "Seçilen yola göre başvuru zamanında yapılır." },
      { name: "Sonuçlandırma", text: "Karar veya uzlaşma belgesiyle işlem tamamlanır." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "eyupsultan-borclar-hukuku-avukati",
    name: "Eyüpsultan Borçlar Hukuku Avukatı",
    heroTitle: "Eyüpsultan Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Sözleşme uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; ticaret ve asliye hukuk mahkemeleri İstanbul Gaziosmanpaşa Adliyesi'ndedir.",
    metaTitle: "Eyüpsultan Borçlar Hukuku Avukatı",
    metaDescription:
      "Eyüpsultan'da sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan (İstanbul Barosu, Sicil No: 72621), borçlar hukuku kapsamında Eyüpsultan'daki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık vermektedir; MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur.",
    highlightCards: [
      { title: "Sözleşme Uyuşmazlıkları", description: "İfa, ihlal ve fesih kaynaklı süreçlerin yürütülmesi." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Tedarik Sözleşmeleri", description: "Alibeyköy çevresindeki işletmeler arası uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sözleşmenin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "İşletmeler arası tedarik sözleşmelerinden doğan uyuşmazlıklar",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Alibeyköy ve Rami çevresindeki küçük ve orta ölçekli işletmeler arasında kurulan tedarik ve hizmet sözleşmelerinden doğan uyuşmazlıklar, Eyüpsultan'da sık karşılaşılan bir dava türüdür; bu uyuşmazlıklara niteliğine göre asliye hukuk veya ticaret mahkemelerinde bakılır.",
      "Bu davalar İstanbul Gaziosmanpaşa Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Tedarikçi malı geç teslim ederse ne talep edilebilir?", answer: "Tedarikçi malı geç teslim ederse gecikme nedeniyle tazminat veya sözleşmeden dönme talep edilebilir. Hangi talebin ileri sürüleceği sözleşme hükümlerine ve gecikmenin niteliğine bağlıdır. İşletmeler arası tedarik sözleşmelerinden doğan uyuşmazlıklarda sipariş belgeleri, fatura ve yazışmalar dava veya icra takibinde delil olarak kullanılır." },
      { question: "Sipariş iptal edilirse ödenen avans geri alınabilir mi?", answer: "Sipariş iptal edilirse ödenen avansın iadesi sözleşme hükümlerine göre değişir; genel kural iadeyi gerektirir. Sebepsiz zenginleşmeye dayalı iade talepleri de bu kapsamda gündeme gelebilir. Avansın ödendiğini gösteren dekont ve sözleşme metni iade talebinin dayanağını oluşturur; gerekirse alacak davası veya icra takibi yürütülür." },
      { question: "Ticari defter kayıtları delil olarak kullanılabilir mi?", answer: "Usulüne uygun tutulmuş ticari defterler mahkemede delil teşkil edebilir. Alacak davası veya icra takibinde defter kayıtları, fatura ve sipariş belgeleriyle birlikte değerlendirilir. Defterlerin usulüne uygun tutulup tutulmadığı mahkemece incelenir; bu nedenle ticari kayıtların düzenli saklanması uyuşmazlıkta ispat bakımından önem taşır." },
      { question: "Alacak davası açmadan önce ihtar şart mı?", answer: "Alacak davası açmadan önce ihtar her zaman şart olmasa da temerrüdün ispatı açısından faydalıdır. İhtar, borçluya ifa için süre verildiğini ve borçlunun temerrüde düştüğünü göstermeye yardımcı olur. Sözleşmede ayrıca bildirim koşulu varsa ona uyulması gerekir; ihtarın tebliğ belgeleri dava dosyasına eklenir." },
      { question: "Ticari uyuşmazlıkta hangi mahkeme yetkilidir?", answer: "Ticari uyuşmazlıkta niteliğine göre asliye ticaret mahkemesi, İstanbul Gaziosmanpaşa Adliyesi bünyesinde yetkilidir. Bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması zorunlu olabilir. Uyuşmazlığın ticari niteliği ve tarafların sıfatı, davanın hangi mahkemede açılacağını belirler; gerekirse dava öncesinde arabuluculuk süreci de değerlendirilir." },
    ],
    howToTitle: "Eyüpsultan'da Alacak Davası Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Belge Toplama", text: "Sipariş, irsaliye ve fatura kayıtları derlenir." },
      { name: "Temerrüdün Tespiti", text: "Borçlunun ödeme yapmadığı tarih belirlenir." },
      { name: "Hukuki Başvuru", text: "Arabuluculuk veya doğrudan dava yoluna gidilir." },
      { name: "Tahsilat", text: "Kesinleşen alacak icra yoluyla tahsil edilir." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];

export const eyupsultanServices: PseoService[] = [...eyupsultanBaseServices, eyupsultanMiras];
