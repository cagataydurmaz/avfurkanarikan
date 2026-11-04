import type { PseoService } from "./types";
import { sultanbeyliMiras } from "./miras/sultanbeyliMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "Telefon ya da WhatsApp üzerinden ulaşılır, konu kısaca aktarılır." },
  { name: "Danışmanlık Görüşmesi", text: "Ücretli danışmanlık görüşmesinde dosyanın hukuki durumu ele alınır." },
  { name: "Vekalet ve Belge Toplama", text: "Temsile karar verilirse vekaletname düzenlenir ve evraklar bir araya getirilir." },
  { name: "Takip ve Bilgilendirme", text: "Mahkeme ve idari kurumlar önünde temsil sağlanır, gelişmeler müvekkille paylaşılır." },
];

const sultanbeyliBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "sultanbeyli-avukat",
    name: "Sultanbeyli Avukat",
    heroTitle: "Sultanbeyli Avukat",
    heroSubtitle:
      "1992'de ilçe statüsü kazanan, yaklaşık 29 km²'lik alanda Hasanpaşa, Mecidiye, Battalgazi, Abdurrahmangazi gibi 15 mahalleye yayılan ve TÜİK'in 2025 adrese dayalı nüfus kayıtlarına göre 378 bini aşkın nüfusu barındıran Sultanbeyli'de avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında danışmanlık ve dava takibi sunmaktadır; ilçede ayrı bir adliye binası bulunmadığından dosyalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Sultanbeyli Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Sultanbeyli'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olmuş, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır. Batı ve kuzeyde Sancaktepe, doğuda Pendik, güneyde Kartal ile çevrili olan Sultanbeyli'deki müvekkillerine farklı hukuk dallarında dosya incelemesi, dava açılışı ve takip hizmeti sağlar; ilk görüşme için telefon ya da WhatsApp üzerinden randevu istenebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Gözaltı, ifade ve duruşma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka davalarında temsil." },
      { title: "Gayrimenkul Hukuku", description: "Hızlı yapılaşmış mahallelerde tapu, imar ve kat mülkiyeti uyuşmazlıkları." },
      { title: "İş Hukuku", description: "İşçilik alacağı, kıdem-ihbar tazminatı ve işe iade başvuruları." },
      { title: "İcra Hukuku", description: "İcra takibi, itiraz ve haciz işlemlerinde temsil." },
      { title: "İdare Hukuku", description: "Belediye ve kamu idaresi işlemlerine karşı iptal ve tam yargı davaları." },
      { title: "Vergi Hukuku", description: "Vergi ve ceza ihbarnamelerine itiraz, uzlaşma ve dava süreçleri." },
      { title: "Borçlar Hukuku", description: "Sözleşme, alacak ve tazminat uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet, nafaka ve mal rejimi tasfiyesi davalarında temsil",
      "Tapu kaydı, imar durumu ve kat mülkiyeti sorunlarında gayrimenkul danışmanlığı",
      "İşe iade, kıdem-ihbar tazminatı ve işçilik alacağı talepleri",
      "İlamlı ve ilamsız icra takiplerinde alacaklı ve borçlu vekilliği",
      "İdari işlemlere karşı iptal ve tam yargı davalarının açılması",
      "Vergi tarhiyatı ve vergi ziyaı cezasına karşı itiraz ve dava takibi",
      "Sözleşmeden doğan alacak ve tazminat davalarının yürütülmesi",
    ],
    localParagraphs: [
      "Sultanbeyli, Kartal'dan ayrılarak 1992'de ilçe olmuş, kısa sürede yoğun biçimde yapılaşan bir Anadolu Yakası ilçesidir; TÜİK'in 2025 adrese dayalı nüfus kayıtlarına göre nüfusu 378 bini aşmıştır. Yaklaşık 29 km²'lik alana bu denli nüfusun yerleşmesi, tapu, imar, kira ve borç ilişkilerinden doğan uyuşmazlıkları günlük hayatın olağan bir parçası hâline getirmiştir.",
      "İlçenin adliye binası olmadığından hukuk, ceza ve icra dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. Vergi işlemleri ise Sultanbeyli Vergi Dairesi Müdürlüğü'nce yürütülür. Üsküdar'dan gelen M5 metro hattının 22 Mayıs 2026'da Sultanbeyli'ye ulaşması, ilçe ile Anadolu Yakası'nın diğer merkezleri arasındaki ulaşımı kolaylaştırmıştır.",
    ],
    faqs: [
      { question: "Sultanbeyli'deki davalar hangi adliyede görülür?", answer: "Sultanbeyli'de ayrı bir adliye binası bulunmadığından hukuk, ceza ve icra dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülmektedir." },
      { question: "İlk görüşme için nasıl randevu alınır?", answer: "Telefon veya WhatsApp üzerinden iletişime geçilerek uygun gün ve saat belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve temsil sağlanmaktadır." },
      { question: "Büro Sultanbeyli'de mi?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Sultanbeyli'deki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Ücret dosyanın niteliğine ve kapsamına göre değişir, görüşme sırasında bilgi verilir." },
      { question: "Sultanbeyli'de vergi dairesi var mı?", answer: "Evet, vergi işlemleri Sultanbeyli Vergi Dairesi Müdürlüğü üzerinden yürütülür." },
      { question: "Görüşmeler çevrim içi yapılabilir mi?", answer: "İlk değerlendirme yüz yüze ya da çevrim içi görüşmeyle planlanabilir." },
      { question: "Gözaltı gibi acil bir durumda ne yapılmalı?", answer: "Vakit kaybetmeden telefon ya da WhatsApp üzerinden ulaşılması gerekir." },
      { question: "Metro ile Sultanbeyli'ye ulaşım mümkün mü?", answer: "M5 hattının Samandıra Merkez-Sultanbeyli bölümü 22 Mayıs 2026'da açılmış olup Hasanpaşa ve Sultanbeyli istasyonları ilçede yer almaktadır." },
    ],
    howToTitle: "Sultanbeyli'de Hukuki Destek Süreci Nasıl Başlar?",
    howToSteps: genelSurec,
    crosslinkLabel: "Sultanbeyli Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "sultanbeyli-bosanma-avukati",
    name: "Sultanbeyli Boşanma Avukatı",
    heroTitle: "Sultanbeyli Boşanma Avukatı",
    heroSubtitle:
      "Sultanbeyli'de ikamet eden eşler için anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal rejimi tasfiyesi süreçlerinde avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) hukuki temsil sağlar; ilçede adliye binası bulunmadığından aile mahkemesi dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Sultanbeyli Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Sultanbeyli'de anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal paylaşımı davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi 2019 mezunu Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve Sultanbeyli'deki ailelerin boşanma, velayet ve nafaka uyuşmazlıklarında dava hazırlığı ile duruşma temsilini üstlenir.",
    highlightCards: [
      { title: "Anlaşmalı Boşanma", description: "Protokolün her başlığı kapsayacak şekilde yazılması ve tek celsede karar." },
      { title: "Çekişmeli Boşanma", description: "Kusur iddialarının tanık ve belgelerle ortaya konması." },
      { title: "Velayet ve Kişisel İlişki", description: "Çocuğun yararı gözetilerek velayet ve görüşme düzeni talepleri." },
      { title: "Mal Rejimi Tasfiyesi", description: "Evlilik süresince edinilen konut ve araçların katkı ve değer payı hesabı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolünün hazırlanması ve duruşmada temsil",
      "Evlilik birliğinin sarsılması nedeniyle çekişmeli boşanma davaları",
      "Velayetin düzenlenmesi ve çocukla kişisel ilişki tesisi",
      "Tedbir, iştirak ve yoksulluk nafakası talepleri",
      "Edinilmiş mallara katılma rejiminin tasfiyesi",
      "Maddi ve manevi tazminat ile ziynet alacağı talepleri",
    ],
    localParagraphs: [
      "Hasanpaşa, Mecidiye ve Battalgazi gibi yoğun nüfuslu mahallelerde sıkça görülen ve konutlar, boşanma sürecinde ortak konutun kimin kullanacağı sorusunu öne çıkarır; bu konuda geçici tedbir aile mahkemesinden talep edilebilir.",
      "Sultanbeyli'nin kendi adliyesi olmadığından boşanma davaları Kartal'daki İstanbul Anadolu Adliyesi'nin aile mahkemelerinde açılır; yerleşim yeri Sultanbeyli'de olan eşler için yetki, kural olarak eşlerden birinin yerleşim yeri veya son altı aydır birlikte oturdukları yer mahkemesine göre belirlenir.",
    ],
    faqs: [
      { question: "Sultanbeyli'de boşanma davası hangi adliyede açılır?", answer: "Yerleşim yeri Sultanbeyli olan eşler için dava, Kartal'daki İstanbul Anadolu Adliyesi'nde görev yapan aile mahkemesinde açılır." },
      { question: "Anlaşmalı boşanma için evlilik süresi şartı var mı?", answer: "Evet, Türk Medeni Kanunu m.166/3 uyarınca evlilik en az bir yıl sürmüş olmalı, eşler birlikte başvurmalı veya biri diğerinin davasını kabul etmelidir." },
      { question: "Nafaka miktarı nasıl belirlenir?", answer: "Tarafların gelir durumu, çocukların ihtiyaçları ve yaşam koşulları birlikte değerlendirilerek hakim tarafından belirlenir." },
      { question: "Çocuğun görüşü velayet kararında alınır mı?", answer: "Yaşı ve olgunluğu elverişliyse çocuğun görüşü uzman eşliğinde dinlenebilir." },
      { question: "Dava açıldıktan sonra eşler barışırsa ne olur?", answer: "Taraflar anlaşırsa dava geri çekilebilir veya takipsiz bırakılabilir." },
    ],
    howToTitle: "Sultanbeyli'de Boşanma Davası Hangi Adımlarla İlerler?",
    howToSteps: [
      { name: "Talepleri Belirleme", text: "Velayet, nafaka ve mal paylaşımı beklentileri netleştirilir." },
      { name: "Evrak ve Dilekçe", text: "Nüfus kayıtları ve deliller toplanarak dilekçe ya da protokol yazılır." },
      { name: "Davanın Açılması", text: "Dilekçe Kartal'daki İstanbul Anadolu Adliyesi'nde aile mahkemesine sunulur." },
      { name: "Karar", text: "Duruşmalar sonunda boşanma ve fer'i konularda hüküm verilir." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "bosanmada-nafaka-turleri"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "sultanbeyli-ceza-avukati",
    name: "Sultanbeyli Ceza Avukatı",
    heroTitle: "Sultanbeyli Ceza Avukatı",
    heroSubtitle:
      "Gözaltına alınan, ifadeye çağrılan veya hakkında iddianame düzenlenen kişiler için Sultanbeyli'de avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) müdafilik yapar; ilçenin ayrı adliyesi bulunmadığından soruşturma ve kovuşturma dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde yürütülür.",
    metaTitle: "Sultanbeyli Ceza Avukatı | Müdafilik",
    metaDescription:
      "Sultanbeyli'de gözaltı, ifade, tutuklamaya itiraz ve duruşma aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur; ceza muhakemesinin soruşturma ve kovuşturma evrelerinde Sultanbeyli'deki şüpheli, sanık ve mağdurların vekilliğini yapar.",
    highlightCards: [
      { title: "Gözaltı ve İfade", description: "Kolluk ve savcılık ifadelerinde müdafi bulundurulması." },
      { title: "Tutuklama İtirazı", description: "Tutuklama ve adli kontrol kararlarına süresinde itiraz." },
      { title: "Duruşma Temsili", description: "Delillerin tartışılması ve savunmanın sunulması." },
      { title: "Mağdur Vekilliği", description: "Müşteki ve katılan sıfatıyla davaya katılım." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının incelenmesi ve savunma hazırlığı",
      "Tutuklama ve adli kontrol kararlarına itiraz dilekçeleri",
      "Asliye ceza ve ağır ceza duruşmalarında sanık vekilliği",
      "Uzlaşmaya tabi suçlarda uzlaştırma sürecinin takibi",
      "İstinaf ve temyiz başvurularının hazırlanması",
    ],
    localParagraphs: [
      "Yaklaşık 29 km²'lik alanda 378 bini aşkın kişinin yaşadığı Sultanbeyli'de yaralama, tehdit ve mala zarar verme gibi bireysel şikayet dosyaları ceza avukatlığında sık görülür; bu suçların bir bölümü uzlaştırmaya tabidir.",
      "Dosyalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. Tutuklama kararına karşı itiraz süresi, CMK m.268 uyarınca kararın öğrenilmesinden itibaren yedi gündür; bu nedenle karar sonrası vakit kaybedilmeden başvuru yapılması gerekir.",
    ],
    faqs: [
      { question: "Sultanbeyli'de gözaltına alınırsam müdafi isteme hakkım var mı?", answer: "Evet, CMK m.149 uyarınca şüpheli ve sanık soruşturmanın her aşamasında müdafi yardımından yararlanabilir." },
      { question: "Tutuklama kararına itiraz süresi ne kadar?", answer: "CMK m.268'e göre itiraz, kararın öğrenilmesinden itibaren yedi gün içinde yapılmalıdır." },
      { question: "Ceza dosyam hangi adliyede görülür?", answer: "Sultanbeyli'nin ayrı adliyesi bulunmadığından dosyalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür." },
      { question: "Uzlaşma her suçta mümkün mü?", answer: "Hayır, yalnızca kanunda uzlaşmaya tabi olarak sayılan suçlarda uzlaştırma yoluna gidilebilir." },
      { question: "Kovuşturmaya yer olmadığı kararına karşı ne yapılabilir?", answer: "Karara karşı, tebliğden itibaren iki hafta içinde ilgili sulh ceza hakimliğine itiraz edilebilir." },
    ],
    howToTitle: "Sultanbeyli'de Ceza Soruşturması Nasıl İlerler?",
    howToSteps: [
      { name: "Şikayet veya Yakalama", text: "Soruşturma, şikayet, ihbar ya da yakalama ile başlar." },
      { name: "İfade ve Delil Toplama", text: "Şüphelinin ifadesi alınır, deliller toplanır." },
      { name: "İddianame ve Kovuşturma", text: "İddianame kabul edilirse duruşmalar başlar." },
      { name: "Kanun Yolu", text: "Hükme karşı istinaf, gerekirse temyiz yoluna başvurulur." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["tutukluluga-itiraz", "ceza-hukukunda-etkin-pismanlik", "kosullu-saliverilme-oranlari"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "sultanbeyli-gayrimenkul-avukati",
    name: "Sultanbeyli Gayrimenkul Avukatı",
    heroTitle: "Sultanbeyli Gayrimenkul Avukatı",
    heroSubtitle:
      "Köy statüsünden belde, ardından ilçe olma yoluyla 1992'de kurulan ve çok kısa sürede yapılaşan Sultanbeyli'de tapu, imar, kat mülkiyeti ve satış vaadi uyuşmazlıklarında avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) danışmanlık ve dava hizmeti verir; davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Sultanbeyli Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Sultanbeyli'de tapu iptali, imar durumu, kat mülkiyeti ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır; Sultanbeyli'deki taşınmaz sahiplerine alım-satım öncesi inceleme, tapu davaları ve ortaklığın giderilmesi konularında hukuki destek sağlar.",
    highlightCards: [
      { title: "Tapu ve İmar İncelemesi", description: "Alım öncesinde tapu kaydı, imar durumu ve yapı ruhsat belgelerinin kontrolü." },
      { title: "Hisseli ve Paylı Mülkiyet", description: "Paydaşlar arasında ortaklığın giderilmesi (izale-i şuyu) davaları." },
      { title: "Kat Mülkiyeti", description: "Yönetim planı, aidat ve kat malikleri kurulu kararlarından doğan uyuşmazlıklar." },
      { title: "Kentsel Dönüşüm", description: "Riskli yapı, tahliye ve hak sahipliği süreçlerinde takip." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Satın alma öncesi tapu, takyidat ve imar durumu incelemesi",
      "Tapu iptali ve tescil davalarının açılması",
      "Paydaşlar arasında ortaklığın giderilmesi davaları",
      "Kat mülkiyeti ve site yönetimi uyuşmazlıkları",
      "Riskli yapı ve kentsel dönüşüm kapsamında hak sahipliği takibi",
      "Satış vaadi sözleşmelerinin hukuki incelenmesi",
    ],
    localParagraphs: [
      "Sultanbeyli'nin 1957'de köy, 1989'da belde, 1992'de ilçe olması, yerleşimin hızlı ve kısmen plan öncesi gelişmesine yol açmıştır; Hamidiye, Mecidiye ve Fatih gibi mahallelerde taşınmaz alımında tapu kaydı ile fiili kullanım, imar planı ve yapı kullanma izninin ayrı ayrı doğrulanması gerekir.",
      "Aydos Kalesi çevresi dahil Aydos Ormanı kesimine ilişkin orman ve koruma statüsü, ilgili taşınmazlarda işlem yapmadan önce belirleyici olabilir. Tapu kaynaklı davalar, Sultanbeyli'nin adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde sulh veya asliye hukuk mahkemesinde görülür.",
    ],
    faqs: [
      { question: "Taşınmaz satın almadan önce neler kontrol edilmeli?", answer: "Tapu kaydındaki şerh ve takyidatlar, imar durumu, yapı ruhsatı ve iskan belgesi ilgili kurumlardan ayrı ayrı sorgulanmalıdır." },
      { question: "Tapu davaları hangi adliyede görülür?", answer: "Sultanbeyli'de adliye bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nin ilgili hukuk mahkemelerinde görülür." },
      { question: "Hisseli tapuda ortaklığın giderilmesi nasıl istenir?", answer: "Paydaşlardan biri sulh hukuk mahkemesinde ortaklığın giderilmesi davası açarak satış veya aynen taksim talep edebilir." },
      { question: "Kat malikleri kurulu kararına itiraz edilebilir mi?", answer: "Kat Mülkiyeti Kanunu m.33 kapsamında karara, öğrenmeden itibaren bir ay içinde ve her halde karar tarihinden itibaren üç ay içinde mahkemede itiraz edilebilir." },
      { question: "Riskli yapı tespitine itiraz mümkün mü?", answer: "Tespit, tebliğ tarihinden itibaren on beş gün içinde Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'na itiraz konusu yapılabilir; sonrasında idari yargı yolu açıktır." },
    ],
    howToTitle: "Sultanbeyli'de Tapu Uyuşmazlığı Davası Nasıl Yürür?",
    howToSteps: [
      { name: "Belge Toplama", text: "Tapu kaydı, imar durumu ve ödeme belgeleri temin edilir." },
      { name: "Hukuki Dayanak", text: "Talebin hukuki sebebi ve deliller belirlenir." },
      { name: "Dava Dilekçesi", text: "Yetkili hukuk mahkemesinde dava açılır." },
      { name: "Keşif ve Karar", text: "Gerekirse keşif ve bilirkişi incelemesinin ardından hüküm verilir." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi", "muris-muvazaasi-nedir"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "sultanbeyli-icra-avukati",
    name: "Sultanbeyli İcra Avukatı",
    heroTitle: "Sultanbeyli İcra Avukatı",
    heroSubtitle:
      "Sultanbeyli'de alacağını tahsil etmek isteyen alacaklılar ile hakkında takip başlatılan borçlular için avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) icra takibi, ödeme emrine itiraz ve haciz işlemlerinde vekillik yapar; icra daireleri Kartal'daki İstanbul Anadolu Adliyesi'nde bulunur.",
    metaTitle: "Sultanbeyli İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Sultanbeyli'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur; icra ve iflas hukukunda alacaklı ve borçlu taraflara takip, itiraz ve şikayet süreçlerinde destek verir.",
    highlightCards: [
      { title: "İlamsız Takip", description: "Senet, fatura ve cari hesap alacaklarının ödeme emri ile takibi." },
      { title: "İtiraz ve İtirazın İptali", description: "Ödeme emrine itiraz ve itirazın iptali ya da kaldırılması süreçleri." },
      { title: "Haciz İşlemleri", description: "Maaş, banka hesabı ve taşınır-taşınmaz haczinde alacaklı ve borçlu tarafın hakları." },
      { title: "Kira Alacağı Takibi", description: "Ödenmeyen kira bedellerinin icra yoluyla tahsili." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İlamsız icra takibi başlatılması",
      "Ödeme emrine itiraz dilekçesinin hazırlanması",
      "İtirazın iptali ve itirazın kaldırılması davaları",
      "Haciz, muhafaza ve satış işlemlerinin takibi",
      "Haczedilemezlik ve icra şikayeti başvuruları",
      "Kira alacağına dayalı tahliye ve takip işlemleri",
    ],
    localParagraphs: [
      "Sultanbeyli'de Hasanpaşa ve Mecidiye gibi yoğun yerleşimli mahallelerde kira alacakları, çek-senet ve cari hesap kaynaklı alacaklar icra takiplerinin başlıca konuları arasındadır.",
      "Ödeme emrine itiraz süresi, İİK m.62 gereğince tebliğden itibaren yedi gündür; süresinde itiraz edilmezse takip kesinleşir. Takip dosyaları, Sultanbeyli'nin ayrı adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki icra dairelerinde yürütülür.",
    ],
    faqs: [
      { question: "Ödeme emrine itiraz için süre ne kadar?", answer: "İİK m.62 uyarınca ödeme emrinin tebliğinden itibaren yedi gün içinde itiraz edilmelidir." },
      { question: "Sultanbeyli'de icra takibi hangi adliyede yürütülür?", answer: "Sultanbeyli'nin adliyesi bulunmadığından dosyalar Kartal'daki İstanbul Anadolu Adliyesi'ndeki icra dairelerinde işlem görür." },
      { question: "Maaşın tamamı haczedilebilir mi?", answer: "Hayır, İİK m.83 uyarınca maaşın belirli bir kısmı haczedilemez." },
      { question: "İtiraz edilirse takip durur mu?", answer: "Evet, borçlunun itirazı takibi durdurur; alacaklı itirazın iptali davası açabilir ya da itirazın kaldırılmasını isteyebilir." },
      { question: "İcra takibine karşı borçlu olarak ne yapılabilir?", answer: "Ödeme emrine itiraz, borca itiraz, imzaya itiraz veya icra mahkemesinde şikayet yollarından uygun olanı seçilir." },
    ],
    howToTitle: "Sultanbeyli'de İcra Takibi Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "Alacağın Belgelenmesi", text: "Senet, sözleşme veya faturalar toplanır." },
      { name: "Takip Talebi", text: "İcra dairesine takip talebi sunulur ve ödeme emri gönderilir." },
      { name: "İtiraz veya Kesinleşme", text: "Borçlu yedi gün içinde itiraz etmezse takip kesinleşir." },
      { name: "Haciz ve Satış", text: "Kesinleşen takipte haciz uygulanır, mallar satışa çıkarılır." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz", "kira-bedeli-tespit-ve-uyarlama-davasi"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "sultanbeyli-idare-avukati",
    name: "Sultanbeyli İdare Avukatı",
    heroTitle: "Sultanbeyli İdare Avukatı",
    heroSubtitle:
      "Sultanbeyli Belediyesi, kaymakamlık ve diğer kamu kurumlarının imar, ruhsat, yıkım, para cezası ve disiplin işlemlerine karşı açılacak iptal ve tam yargı davalarında avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) danışmanlık ve temsil sunar; idari yargı dosyaları İstanbul idare mahkemelerinde görülür.",
    metaTitle: "Sultanbeyli İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Sultanbeyli'de imar, yıkım, ruhsat ve idari para cezası işlemlerine karşı iptal ve tam yargı davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş, İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur; idari işlemlerden zarar gören Sultanbeyli sakinleri ve işletmeler için dava öncesi başvuru ve dava yollarında destek sağlar.",
    highlightCards: [
      { title: "İmar ve Yıkım İşlemleri", description: "Yapı tatil zaptı, yıkım kararı ve imar para cezalarına karşı iptal davası." },
      { title: "İşyeri Ruhsatı", description: "Ruhsat verilmemesi, iptali veya kapatma kararlarına itiraz." },
      { title: "Tam Yargı Davaları", description: "İdarenin eylem ve işleminden doğan zararın tazmini." },
      { title: "Kamu Personeli Davaları", description: "Disiplin cezası, atama ve nakil işlemlerinin iptali." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İdari işlemin iptali için dava dilekçesinin hazırlanması",
      "Yürütmenin durdurulması talebinin yapılması",
      "İmar kanunu kapsamındaki para cezalarına itiraz",
      "İşyeri açma ve çalışma ruhsatı uyuşmazlıkları",
      "İdarenin hizmet kusurundan doğan tam yargı davaları",
      "Kamu görevlilerinin disiplin ve özlük işlemlerine karşı dava",
    ],
    localParagraphs: [
      "Köyden ilçeye kısa sürede dönüşen Sultanbeyli'de yapı tatil zaptı, yıkım kararı ve 3194 sayılı İmar Kanunu kapsamındaki idari para cezaları idare hukukunda öne çıkan başlıklardır.",
      "İdari işlemlere karşı iptal davası, İYUK m.7 uyarınca yazılı bildirim tarihinden itibaren altmış gün içinde açılmalıdır; bu süre dava dilekçesinin hazırlanması için kısa olduğundan işlem öğrenilir öğrenilmez belgelerin toplanması önem taşır.",
    ],
    faqs: [
      { question: "İdari işleme karşı dava açma süresi ne kadar?", answer: "İYUK m.7'ye göre idare mahkemelerinde dava açma süresi, işlemin yazılı bildiriminden itibaren altmış gündür." },
      { question: "Yürütmenin durdurulması nedir?", answer: "İşlemin uygulanmasının dava sonuçlanana kadar durdurulmasını sağlayan geçici koruma kararıdır." },
      { question: "Yıkım kararına karşı ne yapılabilir?", answer: "Karara karşı iptal davası açılabilir ve yürütmenin durdurulması talep edilebilir." },
      { question: "İdari para cezası ödenmeden dava açılabilir mi?", answer: "Genellikle dava açılabilir; ancak cezayı veren kanunun kendi yargı yolu ve süresi ayrıca incelenmelidir." },
      { question: "Tam yargı davası hangi hallerde açılır?", answer: "İdarenin eylem veya işleminden kişisel hak ihlali ve zarar doğduğunda tazminat için açılır." },
    ],
    howToTitle: "Sultanbeyli'de İdari İşleme Karşı Dava Nasıl Açılır?",
    howToSteps: [
      { name: "İşlemin Tespiti", text: "İşlem metni, tebliğ tarihi ve dayanak mevzuat belirlenir." },
      { name: "İdari Başvuru Yolu", text: "Gerekiyorsa üst makama ya da ilgili idareye başvuru yapılır." },
      { name: "Dava Açılması", text: "Süresi içinde yetkili idare mahkemesine dilekçe verilir." },
      { name: "Yargılama", text: "Dosya incelenir, gerekirse keşif yapılır ve karar verilir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: ["idari-islemin-iptali-davasi", "tapu-iptali-ve-tescil-davasi"],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "sultanbeyli-is-hukuku-avukati",
    name: "Sultanbeyli İş Hukuku Avukatı",
    heroTitle: "Sultanbeyli İş Hukuku Avukatı",
    heroSubtitle:
      "Sultanbeyli'de ya da çevre ilçelerdeki işyerlerinde çalışan işçilerin ve işverenlerin kıdem-ihbar tazminatı, işe iade, fazla mesai ve ödenmeyen ücret uyuşmazlıklarında avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) temsil sağlar; iş mahkemesi dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Sultanbeyli İş Hukuku Avukatı | İşe İade ve Tazminat",
    metaDescription:
      "Sultanbeyli'de işe iade, kıdem ve ihbar tazminatı, fazla mesai ve işçilik alacakları konusunda iş hukuku avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı Furkan Arıkan, iş ilişkisinden doğan uyuşmazlıklarda arabuluculuk ve dava aşamalarında Sultanbeyli'deki işçi ve işverenlere hukuki destek verir.",
    highlightCards: [
      { title: "Kıdem ve İhbar Tazminatı", description: "Fesih nedenine göre tazminat haklarının incelenmesi." },
      { title: "İşe İade", description: "Geçersiz fesih halinde arabuluculuk ve işe iade davası." },
      { title: "Fazla Mesai ve Ücret", description: "Ödenmeyen mesai, hafta tatili ve yıllık izin alacakları." },
      { title: "Sigortasız Çalışma", description: "Kayıt dışı çalışma süresinin hizmet tespiti davasıyla belirlenmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kıdem ve ihbar tazminatı hesabı ve davası",
      "İşe iade için zorunlu arabuluculuk ve dava süreci",
      "Fazla mesai, hafta tatili ve yıllık izin ücreti alacakları",
      "Hizmet tespiti davaları",
      "İş kazası ve meslek hastalığı tazminat talepleri",
      "İşveren adına fesih ve sözleşme danışmanlığı",
    ],
    localParagraphs: [
      "Sultanbeyli'de nüfusun önemli bir bölümü ilçe sınırları dışındaki, özellikle komşu Pendik, Kartal ve Sancaktepe'deki sanayi ve hizmet işyerlerinde çalışmaktadır; M5 metro hattının 22 Mayıs 2026'da ilçeye ulaşması bu günlük çalışma hareketliliğini artırabilecek bir gelişmedir ve işyeri yeri ile iş mahkemesinin yetkisi konusunda dikkatli değerlendirme gerektirir.",
      "İşe iade talebinde fesih bildiriminden itibaren bir ay içinde arabulucuya başvurulması gerekir; İş Kanunu m.18 uyarınca otuz veya daha fazla işçi çalıştıran işyerinde en az altı aylık kıdemi olan işçiler iş güvencesinden yararlanır. Davalar Kartal'daki İstanbul Anadolu Adliyesi'nin iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "İşe iade için ne zaman başvurulmalı?", answer: "Fesih bildiriminin tebliğinden itibaren bir ay içinde arabulucuya başvurulmalı, anlaşma sağlanamazsa arabuluculuk son tutanağından itibaren iki hafta içinde dava açılmalıdır." },
      { question: "İş güvencesinden kimler yararlanır?", answer: "İş Kanunu m.18 uyarınca en az otuz işçi çalıştıran işyerinde, en az altı aydır çalışan ve belirsiz süreli sözleşmeli işçiler yararlanır." },
      { question: "Kıdem tazminatı için ne kadar çalışmak gerekir?", answer: "Genel olarak aynı işyerinde en az bir yıl çalışmış olmak gerekir ve fesih nedeni tazminata hak kazandırmalıdır." },
      { question: "İş davası öncesi arabuluculuk zorunlu mu?", answer: "Evet, 7036 sayılı Kanun uyarınca işçilik alacağı ve tazminat ile işe iade davalarında arabulucuya başvurmak dava şartıdır." },
      { question: "Sigortasız çalıştırıldığımı nasıl ispatlarım?", answer: "Tanık beyanları, banka kayıtları, yazışmalar ve işyeri belgeleriyle hizmet tespiti davası açılabilir." },
    ],
    howToTitle: "Sultanbeyli'de İşe İade ve Tazminat Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Fesih Bildiriminin İncelenmesi", text: "Fesih yazısı ve çalışma belgeleri değerlendirilir." },
      { name: "Arabuluculuk Başvurusu", text: "Süre içinde zorunlu arabuluculuğa başvurulur." },
      { name: "Dava Açılması", text: "Anlaşma olmazsa iş mahkemesinde dava başlatılır." },
      { name: "Bilirkişi ve Karar", text: "Alacak hesabı bilirkişi raporuyla yapılır, mahkeme karar verir." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["ise-iade-davasi", "kidem-tazminati-hesaplama-2026", "giydirilmis-ucret-kavrami"],
  },

  // ─────────────────────────── KİRA / TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "sultanbeyli-kira-tahliye-avukati",
    name: "Sultanbeyli Kira ve Tahliye Avukatı",
    heroTitle: "Sultanbeyli Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Sultanbeyli'de ev sahipleri ve kiracılar arasında doğan tahliye, kira bedelinin tespiti, kira artışı ve depozito uyuşmazlıklarında avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) hukuki destek verir; sulh hukuk mahkemesi dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Sultanbeyli Kira Tahliye Avukatı | Kira Tespiti",
    metaDescription:
      "Sultanbeyli'de kiracı tahliyesi, kira tespit davası, kira artışı ve depozito uyuşmazlıklarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve İstanbul Barosu'nda 72621 sicil numarasıyla kayıtlıdır; konut ve işyeri kira ilişkilerinde Sultanbeyli'deki kiraya veren ve kiracılara ihtar, dava ve takip aşamalarında yardımcı olur.",
    highlightCards: [
      { title: "Tahliye Davaları", description: "İhtiyaç, temerrüt ve tahliye taahhüdü nedenleriyle açılan davalar." },
      { title: "Kira Bedeli Tespiti", description: "Kira artışında emsal ve yasal sınırlar çerçevesinde mahkemeden bedel belirlenmesi." },
      { title: "Kira Alacağı Takibi", description: "Ödenmeyen kira için ihtar ve icra takibi." },
      { title: "Depozito ve Tadilat", description: "Depozito iadesi ve kiralananın zarar bedeli uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kira ödememe nedeniyle ihtarname ve tahliye davası",
      "Konut ihtiyacı sebebiyle tahliye davası",
      "Tahliye taahhütnamesine dayalı tahliye talepleri",
      "Kira bedelinin tespiti ve uyarlama davaları",
      "Depozito ve kiralananda oluşan zarar bedeli talepleri",
      "İşyeri kiralarında tahliye ve kira artışı uyuşmazlıkları",
    ],
    localParagraphs: [
      "Yoğun nüfuslu Sultanbeyli'de kira ilişkileri sık karşılaşılan uyuşmazlık konusudur; Hasanpaşa, Mecidiye ve Hamidiye gibi mahallelerde konut kiralarına ilişkin kira artışı ve tahliye talepleri sıklıkla gündeme gelir.",
      "Konut kira artışı, TBK m.344 uyarınca bir önceki kira yılındaki on iki aylık TÜFE ortalamasını geçemez. Kira davaları sulh hukuk mahkemesinde, Sultanbeyli'nin adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür; kiralananın bulunduğu yer mahkemesi yetkilidir.",
    ],
    faqs: [
      { question: "Kira artışı en fazla ne kadar olabilir?", answer: "Konut kiralarında TBK m.344 gereği artış, önceki kira yılındaki on iki aylık TÜFE ortalamasını aşamaz." },
      { question: "Kira ödenmezse kiracıya ne kadar süre verilir?", answer: "TBK m.315 uyarınca konutta kiracıya yazılı ihtarla otuz gün süre verilir; bu sürede ödeme yapılmazsa sözleşme feshedilebilir." },
      { question: "Tahliye davası hangi mahkemede açılır?", answer: "Kiralananın bulunduğu yer sulh hukuk mahkemesinde açılır; Sultanbeyli için bu, Kartal'daki İstanbul Anadolu Adliyesi'dir." },
      { question: "Tahliye taahhütnamesi her durumda geçerli mi?", answer: "Hayır, kira sözleşmesinden sonra ve kiralananın teslimi sonrasında düzenlenmiş yazılı taahhüt aranır; geçerliliği somut olayda incelenir." },
      { question: "Depozito ne zaman iade edilir?", answer: "Kiralanan hasarsız teslim edilmişse ve borç yoksa depozito kiracıya iade edilmelidir; uyuşmazlıkta dava veya icra yolu izlenir." },
    ],
    howToTitle: "Sultanbeyli'de Kiracı Tahliyesi Hangi Adımlarla İlerler?",
    howToSteps: [
      { name: "Sözleşme İncelemesi", text: "Kira sözleşmesi, ödeme kayıtları ve ihtarlar değerlendirilir." },
      { name: "İhtarname", text: "Gerekli durumda noter aracılığıyla ihtar gönderilir." },
      { name: "Dava veya İcra Takibi", text: "Sulh hukuk mahkemesinde dava ya da icra yoluyla tahliye talep edilir." },
      { name: "İlam ve Tahliye", text: "Kesinleşen karar icra yoluyla uygulanır." },
    ],
    crosslinkLabel: "Kira ve Tahliye Avukatı",
    relatedPostSlugs: ["kiracinin-tahliye-sureci", "kira-bedeli-tespit-ve-uyarlama-davasi"],
  },

  // ─────────────────────────── VERGİ ───────────────────────────
  {
    slug: "vergi",
    urlSlug: "sultanbeyli-vergi-avukati",
    name: "Sultanbeyli Vergi Avukatı",
    heroTitle: "Sultanbeyli Vergi Avukatı",
    heroSubtitle:
      "Sultanbeyli Vergi Dairesi Müdürlüğü'nce yapılan tarhiyat, vergi ziyaı cezası ve emlak vergisi işlemlerine karşı uzlaşma, itiraz ve vergi mahkemesinde dava aşamalarında avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) temsil sağlar; vergi davaları İstanbul vergi mahkemelerinde görülür.",
    metaTitle: "Sultanbeyli Vergi Avukatı | Vergi Cezası ve Uzlaşma",
    metaDescription:
      "Sultanbeyli'de vergi tarhiyatı, vergi cezası, uzlaşma ve vergi mahkemesi davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı Furkan Arıkan, MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olmuştur; vergi ihbarnamesi alan Sultanbeyli'deki mükelleflere uzlaşma ve dava sürecinde danışmanlık verir.",
    highlightCards: [
      { title: "Vergi Tarhiyatı", description: "Re'sen veya ikmalen tarh edilen vergilere karşı itiraz ve dava." },
      { title: "Vergi Ziyaı Cezası", description: "Ceza ihbarnamelerine karşı indirim ve uzlaşma imkanlarının değerlendirilmesi." },
      { title: "Uzlaşma Başvurusu", description: "Vergi ve ceza ihbarnamesi sonrası uzlaşma talebi ve görüşme takibi." },
      { title: "Emlak ve Harç İşlemleri", description: "Belediye kaynaklı emlak vergisi ve harç itirazları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi inceleme raporu ve ihbarnamenin değerlendirilmesi",
      "Uzlaşma talebinin hazırlanması ve görüşme temsili",
      "Vergi mahkemesinde iptal davası açılması",
      "Vergi ziyaı ve usulsüzlük cezalarına itiraz",
      "Ödeme emrine karşı dava ve yürütmenin durdurulması talebi",
      "Emlak vergisi ve belediye harçlarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Sultanbeyli'de vergi işlemleri Sultanbeyli Vergi Dairesi Müdürlüğü üzerinden yürütülür; ihbarname ve ödeme emri gibi tebligatların hangi daireden geldiğini kontrol etmek, süre hesabı için ilk adımdır.",
      "Vergi mahkemesinde dava açma süresi, İYUK m.7 uyarınca tebliğden itibaren otuz gündür; uzlaşma talebi de ihbarnamenin tebliğinden itibaren otuz gün içinde yapılmalıdır. Uzlaşma sağlanamazsa dava süresi kaldığı yerden işlemeye devam eder.",
    ],
    faqs: [
      { question: "Vergi ihbarnamesine karşı dava süresi ne kadar?", answer: "İYUK m.7 uyarınca vergi mahkemesinde dava açma süresi tebliğden itibaren otuz gündür." },
      { question: "Uzlaşma talebi için süre var mı?", answer: "Evet, tarhiyat sonrası ihbarnamenin tebliğinden itibaren otuz gün içinde uzlaşma talep edilmesi gerekir." },
      { question: "Sultanbeyli'de vergi dairesi var mı?", answer: "Evet, ilçedeki mükellefler Sultanbeyli Vergi Dairesi Müdürlüğü'ne bağlıdır." },
      { question: "Vergi cezasında indirim mümkün mü?", answer: "Kanunda öngörülen şartlar çerçevesinde süresinde ödeme veya uzlaşma halinde ceza indirimi uygulanabilir." },
      { question: "Dava açmak ödemeyi durdurur mu?", answer: "Vergi mahkemesinde dava açılması tek başına ödemeyi durdurmaz; yürütmenin durdurulması ayrıca talep edilebilir." },
    ],
    howToTitle: "Sultanbeyli'de Vergi Cezasına Karşı Süreç Nasıl İşler?",
    howToSteps: [
      { name: "İhbarname İncelemesi", text: "Tarhiyatın dayanağı ve tebliğ tarihi tespit edilir." },
      { name: "Uzlaşma Başvurusu", text: "Uygunsa otuz gün içinde uzlaşma talebinde bulunulur." },
      { name: "Dava Açılması", text: "Süre içinde vergi mahkemesine dava dilekçesi sunulur." },
      { name: "Karar", text: "Mahkeme dosyayı inceleyerek tarhiyatı onar veya iptal eder." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: ["vergi-ihbarnamesine-itiraz-ve-uzlasma", "idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── BORÇLAR HUKUKU ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "sultanbeyli-borclar-hukuku-avukati",
    name: "Sultanbeyli Borçlar Hukuku Avukatı",
    heroTitle: "Sultanbeyli Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Sultanbeyli'de esnaf, işletme ve bireyler arasındaki sözleşme, alacak, ödünç, haksız fiil ve tazminat uyuşmazlıklarında avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) dava öncesi ihtarname ile dava aşamalarında hukuki destek verir; dosyalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Sultanbeyli Borçlar Hukuku Avukatı | Alacak ve Tazminat",
    metaDescription:
      "Sultanbeyli'de sözleşme, alacak, ödünç ve tazminat uyuşmazlıklarında borçlar hukuku avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır; sözleşmeye aykırılık, ödenmeyen alacaklar ve haksız fiil kaynaklı tazminatlarda Sultanbeyli'deki müvekkillerini temsil eder.",
    highlightCards: [
      { title: "Sözleşme Uyuşmazlıkları", description: "Eksik ifa, gecikme ve sözleşmeden dönme taleplerinin değerlendirilmesi." },
      { title: "Alacak Davaları", description: "Ödünç, cari hesap ve hizmet bedeli alacaklarının tahsili." },
      { title: "Haksız Fiil Tazminatı", description: "Maddi ve manevi zarar bedellerinin istenmesi." },
      { title: "Kefalet ve Garanti", description: "Kefil veya garantör sıfatıyla sorumluluğun kapsamının belirlenmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sözleşmenin incelenmesi ve ihtarname düzenlenmesi",
      "Alacak davası ve ödenmeyen bedellerin tahsili",
      "Sözleşmeden dönme ve cezai şart talepleri",
      "Haksız fiilden doğan maddi ve manevi tazminat davaları",
      "Kefalet ve borç ikrarı belgelerinin hukuki incelenmesi",
      "Ticari davalar öncesi zorunlu arabuluculuk süreci",
    ],
    localParagraphs: [
      "Alacak uyuşmazlıklarında en çok tartışılan konu, borcun varlığının ve miktarının ispatıdır; Sultanbeyli'deki dosyalarda da yazışmalar, dekontlar ve tanık beyanları bu noktada delil işlevi görür.",
      "TBK m.146 uyarınca genel zamanaşımı süresi on yıldır; kira bedelleri gibi bazı alacaklarda bu süre TBK m.147 gereği beş yıla iner. Parasal sınırı aşmayan ve ticari nitelik taşıyan alacak davalarında dava şartı arabuluculuk uygulanır; yargılama Kartal'daki İstanbul Anadolu Adliyesi'nde yapılır.",
    ],
    faqs: [
      { question: "Genel zamanaşımı süresi ne kadardır?", answer: "TBK m.146 uyarınca genel zamanaşımı süresi on yıldır; kira gibi bazı alacaklarda bu süre beş yıldır." },
      { question: "Alacak için yazılı belge yoksa dava açılabilir mi?", answer: "Evet, ancak ispat yükü alacaklıya aittir; banka kayıtları, mesajlar ve tanık beyanlarıyla ispat denenebilir." },
      { question: "Ticari alacak davasından önce arabuluculuk gerekir mi?", answer: "Konusu para olan ticari davalarda 6102 sayılı Kanun m.5/A uyarınca arabulucuya başvurmak dava şartıdır." },
      { question: "Sözleşmeden dönme hangi hallerde mümkün?", answer: "Borçlunun temerrüdü ve verilen ek sürenin sonuçsuz kalması gibi kanunda sayılan hallerde dönme hakkı doğabilir." },
      { question: "Borç davaları hangi adliyede görülür?", answer: "Sultanbeyli'de adliye bulunmadığından davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür." },
    ],
    howToTitle: "Sultanbeyli'de Alacak ve Tazminat Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Delillerin Derlenmesi", text: "Sözleşme, dekont ve yazışmalar toplanır." },
      { name: "İhtarname", text: "Borçluya noter aracılığıyla ödeme için süre verilir." },
      { name: "Arabuluculuk veya Dava", text: "Gerekiyorsa arabuluculuk denenir, ardından dava açılır." },
      { name: "Hüküm ve İcra", text: "Karar kesinleştikten sonra icra yoluyla tahsil edilir." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat", "icra-takibi-ve-borca-itiraz"],
  },
];

export const sultanbeyliServices: PseoService[] = [...sultanbeyliBaseServices, sultanbeyliMiras];
