import type { PseoService } from "./types";
import { bagcilarMiras } from "./miras/bagcilarMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const bagcilarBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "bagcilar-avukat",
    name: "Bağcılar Avukat",
    heroTitle: "Bağcılar Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, İstanbul'un en yoğun nüfuslu ilçelerinden Bağcılar'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Bakırköy Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Bağcılar Avukat | Hukuki Danışmanlık",
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
      { question: "Bağcılar'daki davalara hangi adliye bakıyor?", answer: "Bağcılar, İstanbul Bakırköy Adliyesi'nin yargı çevresinde yer almaktadır; ilçedeki hukuki uyuşmazlıklar bu adliyede yürütülür. Davanın hangi mahkemede görüleceği niteliğine göre belirlenir; aile, icra, iş, sulh hukuk ve asliye hukuk gibi mahkemeler Bakırköy Adliyesi bünyesinde yer alır. Vergisel işlemler ise Bağcılar Mal Müdürlüğü nezdinde yürütülür." },
      { question: "Randevu nasıl alınır?", answer: "Randevu, WhatsApp veya telefonla iletişime geçilerek alınır ve uygun bir görüşme günü belirlenir. Görüşme tercihe göre yüz yüze veya çevrim içi planlanabilir. Görüşmede olay ve belgeler değerlendirilir; hukuki durumun incelenmesi için tapu, sözleşme, tebligat veya ihbarname gibi elde bulunan belgelerin hazır edilmesi süreci kolaylaştırır." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve temsil sağlanmaktadır. Soruşturma ve kovuşturmada savunma, boşanma ve velayet, kentsel dönüşüm ve kira uyuşmazlıkları, işe iade, alacak tahsili, idari işlemlere karşı dava, vergi itirazı ve ticari sözleşme kaynaklı uyuşmazlıklar bu kapsamdadır." },
      { question: "Büro Bağcılar'da mı bulunuyor?", answer: "Hayır, büro Bağcılar'da değil, Beşiktaş/Sinanpaşa'dadır. Bağcılar'daki müvekkillere de aynı kapsamda hizmet verilir; ilçedeki davalar İstanbul Bakırköy Adliyesi'nde görülür. Görüşmeler tercihe göre yüz yüze veya çevrim içi yapılabilir, randevu için WhatsApp ya da telefon kullanılır." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Danışmanlık ücreti, dosyanın niteliğine göre değişir ve randevu sırasında bilgi verilir. Hukuki durumun kapsamı, gerekli belgeler ve izlenecek yol görüşmede değerlendirildiği için ücret de bu aşamada netleşir. Temsil kararı verilirse sürecin ayrıntıları ve ücretlendirme müvekkille birlikte belirlenir." },
      { question: "Kentsel dönüşüm sürecinde hukuki destek alınabilir mi?", answer: "Evet, riskli yapı tespiti ve müteahhitle yapılan sözleşmeler kapsamında danışmanlık sağlanır. Bağcılar'da eski yapı stoku nedeniyle kentsel dönüşüm sürecinde paydaşlar arası anlaşma oranı, müteahhit seçimi ve sözleşme şartları uyuşmazlık noktalarıdır. Riskli yapı tespitine itiraz, 6306 sayılı Kanun kapsamında temsil ve kat karşılığı inşaat sözleşmelerinin incelenmesi bu desteğe dahildir." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Görüşmeler tercihe göre yüz yüze veya çevrim içi olarak planlanabilir. Büro Beşiktaş/Sinanpaşa'da olduğundan Bağcılar'daki müvekkillerle telefon, WhatsApp veya çevrim içi görüşme üzerinden ilk değerlendirme de yapılabilir. Randevu için önce WhatsApp veya telefonla iletişime geçilir; görüşmede belgeler üzerinden hukuki durum incelenir." },
      { question: "Bakırköy Adliyesi'ne Bağcılar'dan ulaşım nasıl?", answer: "Bakırköy Adliyesi'ne Bağcılar'dan M1B metro hattı ve T1 tramvay bağlantıları üzerinden ulaşım sağlanabilir. Bağcılar, İstanbul Bakırköy Adliyesi'nin yargı çevresinde yer aldığından ilçedeki davalar bu adliyede görülür. Adliyeye gitmeden önce duruşma günü ve saatinin ilgili kayıtlardan kontrol edilmesi yararlıdır." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Acil bir gözaltı durumunda vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir. Gözaltına alınan kişi bu aşamadan itibaren müdafi ile görüşme hakkına sahiptir ve bu hakkın zamanında kullanılması sürecin sonraki aşamaları bakımından belirleyici olabilir. Bağcılar'daki ceza dosyaları İstanbul Bakırköy Adliyesi'nde görülür." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, dosyanın seyri hakkında bilgi alınabilir; süreç boyunca gelişmeler müvekkille paylaşılır. Dosyadaki duruşma, tebligat ve karar gibi aşamalar takip edilir. Bağcılar'daki dosyalar İstanbul Bakırköy Adliyesi'nde görüldüğünden, bilgilendirme telefon, WhatsApp veya çevrim içi görüşmeyle de yapılabilir." },
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
    metaTitle: "Bağcılar Boşanma Avukatı | Velayet ve Nafaka",
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
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Boşanma davası, İstanbul Bakırköy Adliyesi'ndeki aile mahkemesinde açılır; Bağcılar'da açılan boşanma, velayet ve nafaka davalarına bu adliyedeki aile mahkemeleri bakar. Yetki, TMK m. 168 uyarınca eşlerden birinin yerleşim yeri veya davadan önce son altı ay birlikte oturdukları yer esas alınarak belirlenir." },
      { question: "Ortak konutun tahsisi nasıl belirlenir?", answer: "Ortak konutun tahsisinde çocukların üstün yararı ve tarafların ekonomik durumu birlikte değerlendirilir. Velayet düzenlemesi ve ortak konutun kullanımı, Bağcılar'da açılan aile hukuku dosyalarında öne çıkan başlıklardandır. Konutun tapu kaydı ve çocukların ihtiyaçları dosyada incelenir; karar mahkemece her dosyaya göre verilir." },
      { question: "Mal rejimi tasfiyesinde işletme payı nasıl değerlendirilir?", answer: "Mal rejimi tasfiyesinde işletme payı, edinilmiş mal sayılırsa katılma alacağı hesabına dahil edilir. Payın evlilik süresi içinde edinilip edinilmediği, edinme kaynağı ve değeri belgelerle incelenir. Katılma alacağı kapsamında mal rejimi tasfiyesi talepleri bu değerlendirmeye göre hazırlanır; işletmeye ilişkin kayıtlar ve belgeler dosyada önem taşır." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Çocuk belirli bir olgunluğa ulaşmışsa velayet düzenlemesinde görüşü dikkate alınabilir; ancak karar çocuğun yararı gözetilerek mahkemece verilir. Velayet tesisi ve sonradan velayet değişikliği taleplerinde çocuğun yaşı, olgunluğu ve ihtiyaçları birlikte değerlendirilir. Bağcılar'daki davalara Bakırköy Adliyesi'ndeki aile mahkemeleri bakar." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Nafaka miktarı, tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilerek belirlenir; mahkeme her dosyada somut koşullara bakar. Koşullar sonradan değişirse nafakanın artırılması, azaltılması veya kaldırılması için ayrı dava açılabilir. Bu nedenle gelir, gider ve ihtiyaçları gösteren belgelerin dosyaya sunulması önem taşır." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir. Boşanma davası açıldıktan sonra eşler barışırsa davadan vazgeçilebilir ve süreç sonlandırılabilir. Dava geri çekilmezse çekişmeli süreçte delillerin sağlam olması, anlaşmalı süreçte ise protokolün eksiksiz hazırlanması sonucu belirler; durum her dosyada ayrıca değerlendirilir." },
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
    metaTitle: "Bağcılar Ceza Avukatı | Müdafilik",
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
      { question: "Bağcılar'da bir ceza davası hangi adliyede görülür?", answer: "Bağcılar'da bir ceza davası İstanbul Bakırköy Adliyesi'nde görülür. Kovuşturma safhasına geçildiğinde dosyalar bu adliyede görülmeye devam eder. Soruşturma aşamasında ise gözaltı, ifade ve tutuklama gibi işlemler olayın niteliğine ve yetki kurallarına göre yürütülür; bu nedenle ilk aşamadan itibaren müdafi ile iletişimde olunması önemlidir." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Evet, ifade müdafi bulunmadan alınabilir; ancak şüpheli ve sanığın soruşturmanın her aşamasında müdafiden yararlanma hakkı vardır (CMK m. 149). Müdafi ile görüşme hakkı gözaltına alınmasıyla birlikte doğar ve zamanında kullanılması sürecin sonraki aşamalarını etkiler; bu nedenle müdafi bulundurulması önerilir." },
      { question: "İşyerine yönelik hırsızlık iddiasında süreç nasıl işler?", answer: "İşyerine yönelik hırsızlık iddiasında şikayet üzerine soruşturma başlar, deliller toplanır ve gerekirse iddianame düzenlenir. Bağcılar'da işyerlerine yönelik güvenlik ve mülkiyet suçları sık karşılaşılan ceza dosyalarındandır. Soruşturma boyunca toplanan deliller ve şüphelinin ifadesi dosyanın seyrini etkiler; müdafi bu aşamada soruşturma dosyasını inceler." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, kovuşturmaya yer olmadığı kararına karşı sulh ceza hakimliğine itiraz edilebilir; itiraz süresi tebliğden itibaren 15 gündür (CMK m. 173). Süre tebliğ tarihinden işlediği için tebligatın tarihi önem taşır. İtiraz için soruşturma dosyası ve kararın gerekçesi incelenir." },
      { question: "Temyiz kanun yoluna hangi kararlar için başvurulur?", answer: "Temyiz kanun yoluna, kanunda sayılan ağır suçlara ilişkin kararlar için başvurulabilir. Kanun yollarına başvuru dilekçeleri, kararın niteliği ve ilgili mahkeme dikkate alınarak düzenlenir. Hangi kararın hangi kanun yoluna tabi olduğu ve başvuru süresi karar metni incelenerek belirlenir; bu yüzden kararın tebliğ tarihi önem taşır." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Uzlaşma sağlanamazsa yargılamaya kaldığı yerden devam edilir. Uzlaşma sürecinde taraflar bir araya getirilir; anlaşma olmazsa soruşturma veya kovuşturma olağan yoluyla sürer. Bu nedenle uzlaşma teklifinin kapsamı değerlendirilirken yargılamanın devam edeceği de dikkate alınmalı, dosyadaki gelişmeler takip edilmelidir." },
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
    metaTitle: "Bağcılar Gayrimenkul Avukatı | Tapu ve Kira",
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
      { question: "Riskli yapı tespitine itiraz edilebilir mi?", answer: "Evet, riskli yapı tespitine karşı belirli süre içinde teknik ve hukuki itiraz yapılabilir. Süre tespitin tebliğ veya öğrenme tarihinden başladığı için bu tarih belgelerden belirlenmelidir. Bağcılar'da kentsel dönüşüm süreci yaygın yürütüldüğünden tespit evrakı saklanmalıdır; idari işlemlere karşı dava süresi genel kural olarak tebliğden itibaren 60 gündür (İYUK m. 7)." },
      { question: "Kentsel dönüşümde paydaşların 2/3 çoğunluğu ne anlama gelir?", answer: "Arsa payı çoğunluğu sağlanırsa azınlıkta kalan paydaşlar da karara uymak zorunda kalabilir; bu, 6306 sayılı Kanun kapsamındaki dönüşüm sürecinde paydaşlar arası anlaşma oranının önemini gösterir. Çoğunluk arsa paylarına göre belirlendiğinden tapu kayıtları incelenir. Sürecin usulü dosyada ayrıca değerlendirilir; azınlıkta kalan paydaş için hukuki yollar saklıdır." },
      { question: "Müteahhit inşaatı zamanında teslim etmezse ne yapılabilir?", answer: "Müteahhit inşaatı zamanında teslim etmezse sözleşmede öngörülen gecikme cezası talep edilebilir, gerekirse sözleşmeden dönme hakkı kullanılabilir. Kentsel dönüşümde müteahhit seçimi ve sözleşme şartları uyuşmazlıkların çıktığı başlıca noktalardır. Kat karşılığı inşaat sözleşmesi, ödeme belgeleri ve yazışmalar incelenerek hangi hakkın kullanılacağı belirlenir." },
      { question: "Bağcılar'da gayrimenkul davası hangi mahkemede görülür?", answer: "Gayrimenkul davası, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde görülür; Bağcılar'daki bu davalar İstanbul Bakırköy Adliyesi bünyesindeki mahkemelerde yürütülür. Kural olarak taşınmazın bulunduğu yer mahkemesi yetkilidir. Görevli mahkeme, riskli yapı, tapu veya kira gibi talebin niteliğine göre dosyada ayrıca belirlenir." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tapu iptali ve tescil davası açabilir. Dava, tapu kaydının hukuka aykırı oluştuğu iddiasına dayanır; tapu kaydı, sözleşme ve ilgili belgeler incelenerek hazırlanır. Bağcılar'daki taşınmaz davaları İstanbul Bakırköy Adliyesi bünyesinde, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde görülür." },
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
    metaTitle: "Bağcılar İcra Avukatı | İcra Takibi ve Haciz",
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
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "İcra takibine sözleşme, senet, çek, fatura veya mahkeme ilamı gibi belgelerle başlanabilir. İlamsız takipte doğrudan icra dairesine başvurulur, mahkeme kararı gerekmez. Borçlu Bağcılar'da yerleşikse yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak belirlenir; ilgili uyuşmazlıklar Bakırköy Adliyesi'ndeki icra mahkemelerinde çözümlenir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Ödeme emrine itiraz süresi, tebliğden itibaren 7 gündür (İİK m. 62). Süre tebligat tarihinden işlemeye başladığı için ödeme emrinin tebliğ tarihi dikkatle kontrol edilmelidir. Süresinde itiraz edilmezse takip ilerleyebilir; itiraz edilirse alacaklı itirazın iptali veya kaldırılması yoluna başvurabilir." },
      { question: "Karşılıksız çek nedeniyle icra takibi nasıl başlatılır?", answer: "Çek bankaya ibraz edildikten sonra kambiyo senetlerine özgü haciz yoluyla takip başlatılabilir. Fatura, çek ve senede dayalı ticari alacaklar için icra takibi başlatılması hizmet kapsamındadır. Çekin aslı, ibraz kaydı ve varsa karşılıksızlık şerhi gibi belgeler takip dosyasına eklenir; Bağcılar'da çek ve senede dayalı takipler sıklıkla başvurulan yollardandır." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Haciz işlemi, kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir. Haciz, ödeme emrine süresinde itiraz edilmemesi veya itirazın kaldırılması gibi hallerde borçlunun mallarına uygulanır. Taşınmaz ve taşınır mal üzerinde haciz uygulanması ile satış işlemleri icra dairesi aracılığıyla yürütülür ve takip edilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Borçlu ödeme yapmazsa haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür. Takibin bu aşamaya ilerleyebilmesi için ödeme emrine itiraz edilmemiş veya itirazın ortadan kaldırılmış olması gerekir. Taşınmaz ve taşınır mal üzerinde haciz uygulanır, ardından satış yapılarak alacak tahsil edilir." },
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
    metaTitle: "Bağcılar İdare Avukatı | İptal ve Tam Yargı",
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
      { question: "Riskli yapı kararına karşı hangi sürede dava açılmalı?", answer: "Riskli yapı kararına karşı tebliğ veya öğrenme tarihinden itibaren 60 gün içinde idare mahkemesinde dava açılabilir (İYUK m. 7). Süre kaçırılmaması için kararın tebliğ tarihi belgelerden tespit edilmelidir. Bağcılar'da riskli yapı tespitine ve imar ile kentsel dönüşüm kararlarına karşı davalar İstanbul idare mahkemelerinde görülür." },
      { question: "İşyeri ruhsatı iptal edilirse ne yapılabilir?", answer: "İşyeri ruhsatı iptal edilirse iptal işlemine karşı idare mahkemesinde dava açılabilir. Bağcılar'da yoğun sanayi ve atölye faaliyeti nedeniyle işyeri ruhsatlarına ilişkin idari işlemler sık başvurulan dava konularındandır. Dava süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m. 7); iptal işleminin tebliğ tarihi ve gerekçesi incelenmelidir." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İmar planı ilan edildikten sonra, ilan tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılmalıdır. Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m. 7); plan ilanında sürenin başlangıcı ayrıca incelenmelidir. İmar planı değişikliklerine karşı iptal davası açılması hizmet kapsamındadır." },
      { question: "Çevre cezası kesilirse itiraz edilebilir mi?", answer: "Evet, çevre cezası gibi idari para cezasına karşı yasal süresinde dava açılabilir. Bağcılar'da işyeri ruhsatlarına ve çevre mevzuatına ilişkin idari işlemler sık başvurulan idari dava konuları arasındadır. Dava süresi cezanın dayandığı kanuna göre değişebileceğinden cezanın tebliğ tarihi ve dayanağı olan tutanak ilk olarak incelenmelidir." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ruhsat başvurusu reddedilirse ret kararına karşı idare mahkemesinde iptal davası açılabilir. Belediye ruhsat işlemlerine itiraz edilmesi bu kapsamdadır. Dava süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m. 7); bu nedenle ret kararının tebliğ tarihi saklanmalı ve süre takip edilmelidir." },
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
    metaTitle: "Bağcılar İş Hukuku Avukatı | İşe İade",
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
      { question: "Atölyede sigortasız çalıştırılan işçinin hakları nelerdir?", answer: "Atölyede sigortasız çalıştırılan işçi, hizmet tespiti davası açarak çalışma süresi ve sigorta eksikliğinin mahkemece tespit ettirilmesini isteyebilir. Sigortasız veya eksik günlü çalışmaya ilişkin hizmet tespiti davaları hizmet kapsamındadır. Tanık beyanları, ücret ödemelerine ilişkin kayıtlar ve çalışmayı gösteren belgeler delil olarak önem taşır." },
      { question: "Parça başı ücretle çalışanların kıdem tazminatı hakkı var mı?", answer: "Şartları taşıması halinde parça başı ücretle çalışanlar da kıdem tazminatına hak kazanabilir. Kıdem tazminatı hakkı çalışma süresi, fesih nedeni ve iş sözleşmesinin niteliğine göre değerlendirilir; ücretin parça başı belirlenmesi bu hakkı tek başına ortadan kaldırmaz. Ücret kayıtları, bordro ve sigorta bilgileri bu bakımdan incelenir." },
      { question: "Bağcılar'da iş mahkemesi nerededir?", answer: "Bağcılar'daki iş davaları İstanbul Bakırköy Adliyesi bünyesindeki iş mahkemelerinde görülür. Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları bu mahkemelerde açılır. İşe iade için fesihten itibaren bir ay içinde arabulucuya başvurulur, son tutanaktan itibaren iki hafta içinde dava açılır." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "İşe iade sürecinin toplam süresi dosyaya göre değişebilir; bu nedenle belirli bir gün sayısı söylenemez. Süreç önce arabuluculukla başlar ve fesihten itibaren bir ay içinde başvurulur. Anlaşma olmazsa son tutanaktan itibaren iki hafta içinde iş mahkemesinde dava açılır; işe iade şartları İş Kanunu m. 18'e göre aranır." },
      { question: "İş kazası geçiren atölye çalışanı ne yapmalı?", answer: "İş kazası geçiren atölye çalışanının olayı derhal SGK'ya bildirmesi, tedavi ve tazminat sürecini başlatması gerekir. İş kazasından doğan tazminat taleplerinin takibi için kaza tutanağı, sağlık raporları ve tanık bilgileri gibi belgeler saklanmalıdır. Talebin hukuki dayanağı ve izlenecek yol dosyadaki belgelere göre belirlenir." },
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
    metaTitle: "Bağcılar Kira ve Tahliye Avukatı | Tahliye",
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
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kiracı; kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye edilebilir. Kira borcunda konutlarda 30 günlük süre verilerek ihtar çekilir (TBK m. 315); taahhütname geçerliyse icra yoluyla, ihtiyaç halinde ise dava yoluyla tahliye talep edilir. Her yöntemin şartları dosyadaki belgelere göre ayrıca incelenir." },
      { question: "İşyeri kiracısının tahliyesi konuttan farklı mı?", answer: "Genel usul benzer olmakla birlikte, işyeri kiralarında ihtiyaç sebebiyle tahliyede ek koşullar aranabilir. Taşınmazın konut mu yoksa işyeri mi olarak nitelendirildiği uygulanacak usulü belirleyen temel etkendir. Bağcılar'da çok sayıda atölye ve dükkanın kiracılık ilişkisiyle işletilmesi bu ayrımı önemli kılar; sözleşme ve kullanım amacı incelenir." },
      { question: "Bağcılar'da tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir. Süre; tahliye sebebine, tebligatların tamamlanmasına ve delillerin toplanmasına bağlıdır. Bağcılar'da bu davalara İstanbul Bakırköy Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Rayiç bedel tespiti, mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Kira bedelinin tespiti ve uyarlanması için dava açılır; mahkeme taşınmazın rayiç kira bedelini değerlendirir. Başvuru sözleşme ve mevcut bedel belgeleriyle yapılır; Bağcılar'daki bu davalara Bakırköy Adliyesi bünyesindeki sulh hukuk mahkemesi bakar." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir; mahkemeye gitmek gerekmeyebilir. Taahhütnamenin geçerliliği ve içeriği önce incelenir. Taahhüde dayalı icra yoluyla tahliye işlemleri icra dairesinde yürütülür; taahhütname geçerli değilse tahliye dava yoluyla istenir." },
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
    metaTitle: "Bağcılar Vergi Avukatı | Uzlaşma ve Dava",
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
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "İhbarnameye karşı tebliğden itibaren 30 gün içinde vergi mahkemesinde dava açılabilir (İYUK m. 7). Bu süre tebligat tarihinden başladığı için ihbarname evrakı saklanmalıdır. Uzlaşma başvurusu da tebliğden itibaren 30 gün içinde yapılabilir (VUK Ek m. 1); vergi ve ceza ihbarnamesi için süreler birlikte takip edilmelidir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "Bağcılar'daki vergi uyuşmazlıkları İstanbul vergi mahkemelerinde görülür. Vergisel işlemler Bağcılar Mal Müdürlüğü nezdinde yürütülür. Dava açma süresi ihbarnamenin tebliğinden itibaren 30 gündür (İYUK m. 7); dilekçe vergi mahkemesine verilir ve ihbarname ile tebliğ evrakı dosyaya eklenir." },
      { question: "Kayıt dışı satış iddiasıyla kesilen cezaya itiraz edilebilir mi?", answer: "Evet, incelemenin dayanağı ve hesap yöntemi hukuka aykırıysa kayıt dışı satış iddiasıyla kesilen cezaya karşı dava yoluyla itiraz edilebilir. Kayıt dışı işlem iddialarına karşı savunma hazırlanır; inceleme raporu, kullanılan hesap yöntemi ve ihbarname değerlendirilir. İhbarnameye karşı dava süresi tebliğden itibaren 30 gündür (İYUK m. 7)." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma başvurusu dava hakkını ortadan kaldırmaz; uzlaşma sağlanamazsa kalan dava açma süresi korunur. Uzlaşma başvurusu tebliğden itibaren 30 gün içinde yapılır (VUK Ek m. 1), dava süresi ise 30 gündür (İYUK m. 7). Bu nedenle uzlaşma görüşmelerinde sürelerin birlikte takip edilmesi gerekir." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Ödeme emrine karşı vergi mahkemesinde dava açılabilir; süre ödeme emrinin tebliğ tarihinden başlar ve ihbarnamelerdeki 30 günlük süreden farklı olabileceği için tebliğ evrakı hemen kontrol edilmelidir. Vergi ve ceza ihbarnamelerinde dava süresi 30 gündür (İYUK m. 7). Ödeme emrine karşı dava açılması hizmet kapsamındadır." },
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
      { question: "Tedarikçi malı zamanında teslim etmezse ne yapılabilir?", answer: "Tedarikçi malı zamanında teslim etmezse sözleşmede öngörülen gecikme cezası talep edilebilir, gerekirse sözleşmeden dönme hakkı kullanılabilir. Bağcılar'da tedarik ve imalat sözleşmelerinden doğan ödeme gecikmesi ve ayıplı ifa uyuşmazlıkları sık karşılaşılan dava türlerindendir. Sözleşme, fatura ve yazışmalar incelenerek hangi hakkın kullanılacağı belirlenir." },
      { question: "Ayıplı mal iddiasında ispat yükü kimdedir?", answer: "Kural olarak malın ayıplı teslim edildiğini iddia eden taraf bunu ispatla yükümlüdür. Bu nedenle ayıp ihbarı, fatura, teslim belgeleri ve yazışmalar gibi deliller önem taşır. Ayıplı mal veya hizmet nedeniyle sözleşmeden dönme talepleri bu delillerle hazırlanır; dosyaya göre bilirkişi incelemesi de gündeme gelebilir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Ticari alacak davası, niteliğine göre asliye ticaret mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür. Bağcılar'daki bu davalar anılan adliyede açılır. Bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabulucuya başvurulması gerekebilir; bu durum dosyanın niteliğine göre belirlenir." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, dava öncesi arabuluculuk her zaman şart değildir; yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Bu nedenle uyuşmazlığın ticari nitelikte olup olmadığı önce belirlenir. Şart aranan hallerde arabulucuya başvurulmadan açılan dava usulden reddedilebilir." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Zamanaşımına uğramış alacak, borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir. Zamanaşımı mahkemece kendiliğinden dikkate alınmaz, borçlunun itirazı gerekir. Bu nedenle alacak ve ihtar sürelerinin kontrolü önemlidir; alacak davası ve icra takibi öncesinde zamanaşımı durumu belgelerle incelenmelidir." },
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

export const bagcilarServices: PseoService[] = [...bagcilarBaseServices, bagcilarMiras];
