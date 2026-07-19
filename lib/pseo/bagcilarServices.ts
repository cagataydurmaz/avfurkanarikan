import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const bagcilarServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "bagcilar-avukat",
    name: "Bağcılar Avukat",
    heroTitle: "Bağcılar Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, İstanbul'un en yoğun nüfuslu ilçelerinden Bağcılar'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Bakırköy Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Bağcılar Avukat",
    metaDescription:
      "Bağcılar'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Yoğun sanayi ve ticaret dokusuyla bilinen Bağcılar'da ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Kentsel dönüşüm, tapu ve tahliye uyuşmazlıklarının takibi." },
      { title: "İş Hukuku", description: "İşçilik alacakları ve işe iade davalarında destek." },
      { title: "İcra Hukuku", description: "Alacak takibi ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "İdari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı ve cezası uyuşmazlıkları." },
      { title: "Borçlar Hukuku", description: "Ticari sözleşme ve alacak kaynaklı davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Kentsel dönüşüm, tapu ve kira ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Ticari sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "Nüfus büyüklüğü bakımından İstanbul'un en kalabalık ilçelerinden biri olan Bağcılar, tekstil atölyelerinden metal ve gıda sanayine uzanan geniş bir üretim ağına ev sahipliği yapmaktadır; bu yoğun ticari doku, hukuki ihtiyaçları da çeşitlendirmektedir.",
      "İlçedeki hukuki uyuşmazlıklar İstanbul Bakırköy Adliyesi'nde, vergisel işlemler ise Bağcılar Mal Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Bağcılar'daki davalara hangi adliye bakıyor?", answer: "Bağcılar, İstanbul Bakırköy Adliyesi'nin yargı çevresinde yer almaktadır." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Bağcılar'da mı bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Bağcılar'daki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Kentsel dönüşüm sürecinde hukuki destek alınabilir mi?", answer: "Evet, riskli yapı tespiti ve müteahhitle yapılan sözleşmeler kapsamında danışmanlık sağlanır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Bakırköy Adliyesi'ne Bağcılar'dan ulaşım nasıl?", answer: "M1B metro hattı ve T1 tramvay bağlantıları üzerinden ulaşım sağlanabilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır." },
    ],
    howToTitle: "Bağcılar'da Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Bağcılar Avukat (Genel)",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "icra-takibi-ve-borca-itiraz", "tapu-iptali-ve-tescil-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "bagcilar-bosanma-avukati",
    name: "Bağcılar Boşanma Avukatı",
    heroTitle: "Bağcılar Boşanma Avukatı",
    heroSubtitle:
      "Bağcılar, aile mahkemelerinin de yer aldığı İstanbul Bakırköy Adliyesi'nin yargı çevresindedir; anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımı talepleri bakımından temsil sağlanır.",
    metaTitle: "Bağcılar Boşanma Avukatı",
    metaDescription:
      "Bağcılar'da anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, aile hukuku alanında Bağcılar'daki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlamaktadır.",
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
      "Velayet düzenlemesi ve ortak konutun kullanımı gibi konular, Bağcılar'da açılan aile hukuku dosyalarında öne çıkan başlıklar arasındadır; bunun bir nedeni de ilçenin yüksek nüfus yoğunluğu ve buna bağlı olarak kalabalık hanelerin yaygınlığıdır.",
      "Anlaşmalı süreçte protokolün eksiksiz hazırlanması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirleyen temel unsurdur; her iki süreçte de yetkili aile mahkemeleri İstanbul Bakırköy Adliyesi bünyesinde faaliyet göstermektedir.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "İstanbul Bakırköy Adliyesi'ndeki aile mahkemesine başvurulur." },
      { question: "Ortak konutun tahsisi nasıl belirlenir?", answer: "Çocukların üstün yararı ve tarafların ekonomik durumu birlikte değerlendirilir." },
      { question: "Mal rejimi tasfiyesinde işletme payı nasıl değerlendirilir?", answer: "Edinilmiş mal sayılırsa katılma alacağı hesabına dahil edilir." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir." },
    ],
    howToTitle: "Bağcılar'da Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "bagcilar-ceza-avukati",
    name: "Bağcılar Ceza Avukatı",
    heroTitle: "Bağcılar Ceza Avukatı",
    heroSubtitle:
      "Kovuşturma aşamasındaki dosyalar İstanbul Bakırköy Adliyesi'nde yürütülmektedir; gözaltı, ifade alma ve bu süreci izleyen kovuşturmanın her evresinde müdafilik hizmeti sunulur.",
    metaTitle: "Bağcılar Ceza Avukatı",
    metaDescription:
      "Bağcılar'da soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarının tümünde Bağcılar'daki müvekkillerine müdafilik yapan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup MEF Üniversitesi Hukuk Fakültesi'nin 2019 mezunudur.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Kanun Yolları", description: "Karara karşı üst mahkemelere başvuru süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "İstinaf ve temyiz dilekçelerinin düzenlenmesi",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "İşyerlerine yönelik güvenlik ve mülkiyet suçları, Bağcılar'da sık karşılaşılan ceza dosyaları arasında yer almaktadır; ilçenin yüksek nüfus yoğunluğu ile geniş sanayi ve ticaret ağı, kolluk müdahalesi gerektiren olay çeşitliliğini artıran etkenler arasında sayılabilir.",
      "Gözaltına alınan kişi bu aşamadan itibaren müdafi ile görüşme hakkına sahiptir; bu hakkın zamanında kullanılması sürecin sonraki aşamaları bakımından belirleyici olabilmektedir. Kovuşturma safhasına geçildiğinde dosyalar İstanbul Bakırköy Adliyesi'nde görülmeye devam etmektedir.",
    ],
    faqs: [
      { question: "Bağcılar'da bir ceza davası hangi adliyede görülür?", answer: "İstanbul Bakırköy Adliyesi'nde görülür." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir ancak müdafi bulundurmak önerilir." },
      { question: "İşyerine yönelik hırsızlık iddiasında süreç nasıl işler?", answer: "Şikayet üzerine soruşturma başlar, deliller toplanır ve gerekirse iddianame düzenlenir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, sulh ceza hakimliğine itiraz edilebilir." },
      { question: "Temyiz kanun yoluna hangi kararlar için başvurulur?", answer: "Kanunda sayılan ağır suçlara ilişkin kararlar için başvurulabilir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Yargılamaya kaldığı yerden devam edilir." },
    ],
    howToTitle: "Bağcılar'da Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "bagcilar-gayrimenkul-avukati",
    name: "Bağcılar Gayrimenkul Avukatı",
    heroTitle: "Bağcılar Gayrimenkul Avukatı",
    heroSubtitle:
      "Kentsel dönüşüm, riskli yapı tespiti, tapu uyuşmazlıkları ve kira ilişkilerinde hukuki destek sağlanır; davalar İstanbul Bakırköy Adliyesi'nde görülür.",
    metaTitle: "Bağcılar Gayrimenkul Avukatı",
    metaDescription:
      "Bağcılar'da kentsel dönüşüm, tapu iptali ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Kentsel dönüşüm, tapu ve kira uyuşmazlıklarında Bağcılar'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Kentsel Dönüşüm", description: "Riskli yapı tespiti ve 6306 sayılı Kanun kapsamındaki süreçler." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Müteahhit Sözleşmeleri", description: "Kat karşılığı inşaat sözleşmelerinden doğan uyuşmazlıklar." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Riskli yapı tespitine itiraz ve dönüşüm sürecinde danışmanlık",
      "Kat karşılığı inşaat sözleşmelerinin hazırlanması ve incelenmesi",
      "Paydaşlar arası anlaşmazlıkta 6306 sayılı Kanun kapsamında temsil",
      "Tapu iptali ve tescil davalarının açılması",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
    ],
    localParagraphs: [
      "Eski yapı stokunun yoğun olduğu Bağcılar, İstanbul'da kentsel dönüşüm sürecinin en yaygın yürütüldüğü ilçelerden biridir; bu süreçte paydaşlar arası anlaşma oranı, müteahhit seçimi ve sözleşme şartları uyuşmazlıkların en sık çıktığı noktalardır.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür.",
    ],
    faqs: [
      { question: "Riskli yapı tespitine itiraz edilebilir mi?", answer: "Evet, tespite karşı belirli süre içinde teknik ve hukuki itiraz yapılabilir." },
      { question: "Kentsel dönüşümde paydaşların 2/3 çoğunluğu ne anlama gelir?", answer: "Arsa payı çoğunluğu sağlanırsa azınlıkta kalan paydaşlar da karara uymak zorunda kalabilir." },
      { question: "Müteahhit inşaatı zamanında teslim etmezse ne yapılabilir?", answer: "Sözleşmede öngörülen gecikme cezası talep edilebilir, gerekirse sözleşmeden dönme hakkı kullanılabilir." },
      { question: "Bağcılar'da gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir." },
    ],
    howToTitle: "Bağcılar'da Kentsel Dönüşüm Süreci Nasıl İlerler?",
    howToSteps: [
      { name: "Risk Tespiti", text: "Binanın riskli yapı olup olmadığı teknik rapor ile belirlenir." },
      { name: "Paydaş Anlaşması", text: "Arsa payı çoğunluğuyla müteahhit ve sözleşme şartları belirlenir." },
      { name: "Sözleşme İncelemesi", text: "Kat karşılığı sözleşme hukuki açıdan gözden geçirilir." },
      { name: "Uygulama Takibi", text: "Yıkım, inşaat ve teslim süreci takip edilir." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "bagcilar-icra-avukati",
    name: "Bağcılar İcra Avukatı",
    heroTitle: "Bağcılar İcra Avukatı",
    heroSubtitle:
      "İstanbul Bakırköy Adliyesi bünyesindeki icra daireleri nezdinde yürütülen icra takibi, itiraz ve haciz süreçlerinde, ticari ve bireysel alacakların tahsiline yönelik temsil hizmeti sunulmaktadır.",
    metaTitle: "Bağcılar İcra Avukatı",
    metaDescription:
      "Bağcılar'da icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Avukat Furkan Arıkan İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur; icra ve iflas hukuku kapsamında Bağcılar'daki esnaf, işletme sahibi ve bireysel müvekkillere danışmanlık sunmaktadır.",
    highlightCards: [
      { title: "Ticari Alacaklar", description: "Atölye ve işletmeler arası fatura/senet alacaklarının takibi." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fatura, çek ve senede dayalı ticari alacaklar için icra takibi başlatılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "İhaleye katılım ve ihalenin feshi talepleri",
      "Mali sıkıntı yaşayan işletmeler için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Çek ve senede dayalı alacaklardan kaynaklanan icra takipleri, tedarikçi-alıcı ilişkilerinin yoğun olduğu Bağcılar'da sıklıkla başvurulan bir yol olarak öne çıkmaktadır; ilçede faaliyet gösteren binlerce küçük ve orta ölçekli atölye ve işletme bu tabloda belirleyici bir rol oynamaktadır.",
      "Borçlunun Bağcılar'da yerleşik olduğu takiplerde, yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak belirlenir; bu kapsamdaki uyuşmazlıklar İstanbul Bakırköy Adliyesi'ndeki icra mahkemelerinde çözümlenmektedir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "Sözleşme, senet, çek, fatura veya mahkeme ilamı gibi belgelerle başlanabilir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Tebliğden itibaren 7 gündür." },
      { question: "Karşılıksız çek nedeniyle icra takibi nasıl başlatılır?", answer: "Çek bankaya ibraz edildikten sonra kambiyo senetlerine özgü haciz yoluyla takip başlatılabilir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür." },
    ],
    howToTitle: "Bağcılar'da İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "bagcilar-idare-avukati",
    name: "Bağcılar İdare Avukatı",
    heroTitle: "Bağcılar İdare Avukatı",
    heroSubtitle:
      "Belediye, imar ve riskli yapı kararlarına karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Bağcılar İdare Avukatı",
    metaDescription:
      "Bağcılar'da idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. İdari işlemlerin iptali ve tam yargı davalarında Bağcılar'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Riskli Yapı Kararları", description: "Afet riski taşıyan yapı tespitlerine karşı hukuki yollar." },
      { title: "İşyeri Ruhsatları", description: "Atölye ve işyeri ruhsat işlemlerine ilişkin uyuşmazlıklar." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Riskli yapı tespitine karşı idari dava süreçleri",
      "İmar planı değişikliklerine karşı iptal davası açılması",
      "İşyeri ve atölye ruhsat işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Yoğun sanayi ve atölye faaliyetinin sürdüğü Bağcılar'da işyeri ruhsatlarına ve çevre mevzuatına ilişkin idari işlemler, imar ve kentsel dönüşüm kararlarıyla birlikte sık başvurulan idari dava konuları arasındadır.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "Riskli yapı kararına karşı hangi sürede dava açılmalı?", answer: "Tebliğ veya öğrenme tarihinden itibaren 60 gün içinde idare mahkemesinde dava açılabilir." },
      { question: "İşyeri ruhsatı iptal edilirse ne yapılabilir?", answer: "İptal işlemine karşı idare mahkemesinde dava açılabilir." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İlan tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılmalıdır." },
      { question: "Çevre cezası kesilirse itiraz edilebilir mi?", answer: "Evet, idari para cezasına karşı yasal süresinde dava açılabilir." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde dava açılabilir." },
    ],
    howToTitle: "Bağcılar'da İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "bagcilar-is-hukuku-avukati",
    name: "Bağcılar İş Hukuku Avukatı",
    heroTitle: "Bağcılar İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Bağcılar İş Hukuku Avukatı",
    metaDescription:
      "Bağcılar'da kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Bağcılar'daki tekstil ve imalat sektörü çalışanlarına ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Tekstil/İmalat Sektörü", description: "Atölye çalışanlarının sigortasız istihdam ve ücret uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Fazla mesai, hafta tatili ve yıllık izin alacaklarının tahsili",
      "Sigortasız veya eksik günlü çalışmaya ilişkin hizmet tespiti davaları",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Tekstil atölyelerinden metal ve gıda sanayine uzanan geniş bir üretim ağına sahip Bağcılar'da, mavi yaka istihdamın yoğunluğu nedeniyle sigortasız çalışma, fazla mesai ve haksız fesih kaynaklı uyuşmazlıklar sık gündeme gelmektedir.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Bakırköy Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Atölyede sigortasız çalıştırılan işçinin hakları nelerdir?", answer: "Hizmet tespiti davası açılarak çalışma süresi ve sigorta eksikliği mahkemece tespit ettirilebilir." },
      { question: "Parça başı ücretle çalışanların kıdem tazminatı hakkı var mı?", answer: "Şartları taşıması halinde parça başı ücretle çalışanlar da kıdem tazminatına hak kazanabilir." },
      { question: "Bağcılar'da iş mahkemesi nerededir?", answer: "İstanbul Bakırköy Adliyesi bünyesindedir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir." },
      { question: "İş kazası geçiren atölye çalışanı ne yapmalı?", answer: "Olay derhal SGK'ya bildirilmeli, tedavi ve tazminat süreci başlatılmalıdır." },
    ],
    howToTitle: "Bağcılar'da İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "bagcilar-kira-tahliye-avukati",
    name: "Bağcılar Kira ve Tahliye Avukatı",
    heroTitle: "Bağcılar Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Sulh hukuk mahkemelerinin İstanbul Bakırköy Adliyesi bünyesinde yer aldığı Bağcılar'da, konut ve işyeri tahliyesinden kira bedeli tespitine ve sözleşme uyuşmazlıklarına uzanan konularda destek sağlanmaktadır.",
    metaTitle: "Bağcılar Kira ve Tahliye Avukatı",
    metaDescription:
      "Bağcılar'da kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olan avukat Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır; kira hukuku alanında Bağcılar'daki kiraya verenlere ve kiracılara danışmanlık vermektedir.",
    highlightCards: [
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "İşyeri Tahliyesi", description: "Atölye ve dükkan niteliğindeki taşınmazlarda tahliye süreci." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Konut ve işyeri kira sözleşmelerinin hazırlanması ve incelenmesi",
      "İhtiyaç nedeniyle açılan tahliye davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "İşyeri tahliyesi ile kira bedeli uyuşmazlıklarında uygulanacak usul, konut kiralarındakinden farklılık gösterebilmektedir; Bağcılar'da konut stokunun yanı sıra kiracılık ilişkisiyle işletilen çok sayıda atölye ve dükkanın bulunması, bu ayrımı pratikte önemli kılmaktadır.",
      "Taşınmazın konut mu yoksa işyeri mi olarak nitelendirildiği, uygulanacak usulü belirleyen temel etkendir; bu tür uyuşmazlıklara İstanbul Bakırköy Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılmaktadır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "İşyeri kiracısının tahliyesi konuttan farklı mı?", answer: "Genel usul benzer olmakla birlikte, işyeri kiralarında ihtiyaç sebebiyle tahliyede ek koşullar aranabilir." },
      { question: "Bağcılar'da tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
    ],
    howToTitle: "Bağcılar'da Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "bagcilar-vergi-avukati",
    name: "Bağcılar Vergi Avukatı",
    heroTitle: "Bağcılar Vergi Avukatı",
    heroSubtitle:
      "Vergi uyuşmazlıklarında yetkili yargı mercii İstanbul vergi mahkemeleridir; işletmelere yönelik tarhiyat, ceza kesme işlemleri ve uzlaşma süreçlerinin her aşamasında temsil hizmeti sunulmaktadır.",
    metaTitle: "Bağcılar Vergi Avukatı",
    metaDescription:
      "Bağcılar'da vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kayıt olmuştur; vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Bağcılar'daki müvekkillerine bu doğrultuda danışmanlık vermektedir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Küçük İşletmeler", description: "Atölye ve esnaf işletmelerine yönelik vergi incelemesi süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Küçük ve orta ölçekli işletmelerde vergi incelemesi sürecinde danışmanlık",
      "Kayıt dışı işlem iddialarına karşı savunma hazırlanması",
    ],
    localParagraphs: [
      "Kayıt düzeni ve faturalara ilişkin uyuşmazlıklardan doğan vergi incelemeleri ile bunlara bağlı ceza kesme işlemleri, Bağcılar'da sık karşılaşılan konular arasında yer almaktadır; ilçede faaliyet gösteren binlerce küçük ve orta ölçekli atölye ve işletme, bu durumda etkili bir unsur olarak öne çıkmaktadır.",
      "İhbarnameye karşı dava açma süresi tebliğ tarihinden itibaren 30 gün olarak uygulanmaktadır; bu süreçte açılan davalara İstanbul vergi mahkemeleri bakmaktadır.",
    ],
    faqs: [
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Kayıt dışı satış iddiasıyla kesilen cezaya itiraz edilebilir mi?", answer: "Evet, incelemenin dayanağı ve hesap yöntemi hukuka aykırıysa dava yoluyla itiraz edilebilir." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır." },
    ],
    howToTitle: "Bağcılar'da Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "bagcilar-borclar-hukuku-avukati",
    name: "Bağcılar Borçlar Hukuku Avukatı",
    heroTitle: "Bağcılar Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Ticari sözleşme uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; ticaret ve asliye hukuk mahkemeleri İstanbul Bakırköy Adliyesi'ndedir.",
    metaTitle: "Bağcılar Borçlar Hukuku Avukatı",
    metaDescription:
      "Bağcılar'da sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Borçlar hukuku kapsamında Bağcılar'daki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık verir.",
    highlightCards: [
      { title: "Ticari Sözleşmeler", description: "Tedarik, imalat ve satış sözleşmelerinden doğan uyuşmazlıklar." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Müteahhit Sözleşmeleri", description: "Kat karşılığı inşaat sözleşmesi uyuşmazlıkları." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Tedarik ve imalat sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Ayıplı mal veya hizmet nedeniyle sözleşmeden dönme talepleri",
      "Kat karşılığı inşaat sözleşmelerinden doğan uyuşmazlıklar",
      "Ticari sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Tekstil ve imalat sektöründe faaliyet gösteren çok sayıda işletmenin bulunduğu Bağcılar'da, tedarik ve imalat sözleşmelerinden doğan ayıplı ifa ile ödeme gecikmesi kaynaklı uyuşmazlıklar sık karşılaşılan dava türleri arasındadır.",
      "Bu davalar İstanbul Bakırköy Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Tedarikçi malı zamanında teslim etmezse ne yapılabilir?", answer: "Sözleşmede öngörülen gecikme cezası talep edilebilir, gerekirse sözleşmeden dönme hakkı kullanılabilir." },
      { question: "Ayıplı mal iddiasında ispat yükü kimdedir?", answer: "Kural olarak malın ayıplı teslim edildiğini iddia eden taraf bunu ispatla yükümlüdür." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir." },
    ],
    howToTitle: "Bağcılar'da Ticari Alacak Davası Süreci Nasıl İşler?",
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
