import type { PseoService } from "./types";
import { avcilarMiras } from "./miras/avcilarMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const avcilarBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "avcilar-avukat",
    name: "Avcılar Avukat",
    heroTitle: "Avcılar Avukat",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, İstanbul Üniversitesi-Cerrahpaşa'nın büyük yerleşkesine ev sahipliği yapan ve deprem riski açısından öne çıkan Avcılar'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçe İstanbul Küçükçekmece Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Avcılar Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Avcılar'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Büyük bir üniversite yerleşkesine sahip olan ve Kuzey Anadolu Fay Hattı'na yakınlığı nedeniyle deprem riski taşıyan Avcılar'da ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Deprem riski/kentsel dönüşüm uyuşmazlıklarının takibi." },
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
      "Deprem riski, öğrenci kiraları ve tapu ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "İstanbul Üniversitesi-Cerrahpaşa'nın büyük yerleşkesine ev sahipliği yapan Avcılar, aynı zamanda Kuzey Anadolu Fay Hattı'na yakınlığı ve sahil kesimindeki sıvılaşma riski nedeniyle İstanbul'un deprem riski en yüksek ilçelerinden biri olarak öne çıkmaktadır.",
      "İlçedeki hukuki uyuşmazlıklar İstanbul Küçükçekmece Adliyesi'nde, vergisel işlemler ise Avcılar Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Avcılar'daki davalara hangi adliye bakıyor?", answer: "Avcılar, İstanbul Küçükçekmece Adliyesi'nin yargı çevresinde yer almaktadır; ilçedeki hukuki uyuşmazlıklar bu adliyede yürütülür. Davanın hangi mahkemede görüleceği niteliğine göre belirlenir; aile, icra, iş, sulh hukuk ve asliye hukuk gibi mahkemeler Küçükçekmece Adliyesi bünyesinde yer alır. Vergisel işlemler ise Avcılar Vergi Dairesi Müdürlüğü nezdinde yürütülür." },
      { question: "Randevu nasıl alınır?", answer: "Randevu, WhatsApp veya telefonla iletişime geçilerek alınır ve uygun bir görüşme günü belirlenir. Görüşme tercihe göre yüz yüze veya çevrim içi planlanabilir. Görüşmede olay ve belgeler değerlendirilir; hukuki durumun incelenmesi için tapu, sözleşme, tebligat veya ihbarname gibi elde bulunan belgelerin hazır edilmesi süreci kolaylaştırır." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve temsil sağlanmaktadır. Soruşturma ve kovuşturmada savunma, boşanma ve velayet, deprem riski ve kira uyuşmazlıkları, işe iade, alacak tahsili, idari işlemlere karşı dava, vergi itirazı ve sözleşme kaynaklı borçlar hukuku uyuşmazlıkları bu kapsamdadır." },
      { question: "Büro Avcılar'da mı bulunuyor?", answer: "Hayır, büro Avcılar'da değil, Beşiktaş/Sinanpaşa'dadır. Avcılar'daki müvekkillere de diğer ilçelerle aynı kapsamda hizmet verilir; ilçedeki davalar İstanbul Küçükçekmece Adliyesi'nde görülür. Görüşmeler tercihe göre yüz yüze veya çevrim içi yapılabilir, randevu için WhatsApp ya da telefon kullanılır." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Danışmanlık ücreti, dosyanın niteliğine göre değişir ve randevu sırasında bilgi verilir. Hukuki durumun kapsamı, gerekli belgeler ve izlenecek yol görüşmede değerlendirildiği için ücret de bu aşamada netleşir. Temsil kararı verilirse sürecin ayrıntıları ve ücretlendirme müvekkille birlikte belirlenir." },
      { question: "Riskli yapı tespiti ile ilgili destek alınabilir mi?", answer: "Evet, deprem riski tespitine itiraz ve kentsel dönüşüm süreçlerinde danışmanlık sağlanır. Riskli yapı kararlarına ve kentsel dönüşüm kapsamındaki imar uygulamalarına karşı idari dava yoluna başvurulabilir; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m. 7). Tespit evrakı ve tebliğ tarihi bu nedenle saklanmalıdır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Görüşmeler tercihe göre yüz yüze veya çevrim içi olarak planlanabilir. Büro Beşiktaş/Sinanpaşa'da olduğundan Avcılar'daki müvekkillerle telefon, WhatsApp veya çevrim içi görüşme üzerinden ilk değerlendirme de yapılabilir. Randevu için önce WhatsApp veya telefonla iletişime geçilir; görüşmede belgeler üzerinden hukuki durum incelenir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Acil bir gözaltı durumunda vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir. Gözaltına alınan kişi müdafiyle görüşebilir (CMK m. 154) ve susma hakkı CMK m. 147'de güvence altındadır. Avcılar dosyalarının yargılaması İstanbul Küçükçekmece Adliyesi'nde yapılır." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, dosyanın seyri hakkında bilgi alınabilir; süreç boyunca gelişmeler müvekkille paylaşılır. Dosyadaki duruşma, tebligat ve karar gibi aşamalar takip edilir. Avcılar'daki dosyalar İstanbul Küçükçekmece Adliyesi'nde görüldüğünden, bilgilendirme telefon, WhatsApp veya çevrim içi görüşmeyle de yapılabilir." },
      { question: "Küçükçekmece Adliyesi'ne Avcılar'dan ulaşım nasıl?", answer: "Küçükçekmece Adliyesi'ne Avcılar'dan Metrobüs hattı ve E-5/TEM otoyolu bağlantıları üzerinden ulaşım sağlanabilir. Avcılar, Metrobüs hattı ile E-5 ve TEM bağlantıları sayesinde ilçe dışına erişimi olan bir geçiş noktasıdır. İlçedeki dosyalar bu adliyede yürütüldüğünden, adliyeye gitmeden önce duruşma günü ve saatinin kontrol edilmesi yararlıdır." },
    ],
    howToTitle: "Avcılar'da Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Avcılar Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "kiracinin-tahliye-sureci"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "avcilar-bosanma-avukati",
    name: "Avcılar Boşanma Avukatı",
    heroTitle: "Avcılar Boşanma Avukatı",
    heroSubtitle:
      "Aile mahkemeleri İstanbul Küçükçekmece Adliyesi bünyesinde yer alan Avcılar'da, anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımına ilişkin taleplerde temsil sağlanır.",
    metaTitle: "Avcılar Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Avcılar'da anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Aile hukuku alanında Avcılar'daki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlayan Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukat olarak faaliyetini sürdürmektedir.",
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
      "Avcılar'da açılan boşanma, velayet ve nafaka davalarına İstanbul Küçükçekmece Adliyesi'ndeki aile mahkemelerinde bakılır; anlaşmalı süreçte protokolün eksiksizliği, çekişmeli süreçte ise delillerin gücü belirleyici olur.",
      "Üniversite yerleşkesi çevresinde genç nüfusun yoğun olduğu Avcılar'da, boşanma sürecinde velayet ve nafaka taleplerinin doğru şekilde ortaya konması ayrı bir önem taşır.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Boşanma davası, İstanbul Küçükçekmece Adliyesi'ndeki aile mahkemesinde açılır; Avcılar'da açılan boşanma, velayet ve nafaka davalarına bu adliyedeki aile mahkemelerinde bakılır. Yetki, TMK m. 168 uyarınca eşlerden birinin yerleşim yeri veya davadan önce son altı ay birlikte oturdukları yer esas alınarak belirlenir." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Çocuk belirli bir olgunluğa ulaşmışsa velayet düzenlemesinde görüşü dikkate alınabilir; ancak karar çocuğun yararı gözetilerek mahkemece verilir. Velayet tesisi ve sonradan velayet değişikliği taleplerinde çocuğun yaşı, olgunluğu ve ihtiyaçları birlikte değerlendirilir. Avcılar'daki davalara Küçükçekmece Adliyesi'ndeki aile mahkemeleri bakar." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Nafaka miktarı, tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilerek belirlenir; mahkeme her dosyada somut koşullara bakar. Koşullar sonradan değişirse nafakanın artırılması, azaltılması veya kaldırılması için ayrı dava açılabilir. Bu nedenle gelir, gider ve ihtiyaçları gösteren belgelerin dosyaya sunulması önem taşır." },
      { question: "Deprem riski taşıyan konuttaki aile için tahliye ve boşanma süreci nasıl etkileşir?", answer: "Bu iki süreç birbirinden bağımsızdır; konutun tahliyesi ayrı bir hukuki süreç olarak yürütülür. Boşanma davasında velayet, nafaka ve mal rejimi gibi konular görülür; riskli yapı kararı veya kentsel dönüşüm nedeniyle yaşanan tahliye ise idari ve kira hukuku süreçlerine tabidir. Bu nedenle iki dosyadaki süreler ve belgeler ayrı takip edilmelidir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir. Boşanma davası açıldıktan sonra eşler barışırsa davadan vazgeçilebilir ve süreç sonlandırılabilir. Dava geri çekilmezse çekişmeli süreçte delillerin gücü, anlaşmalı süreçte ise protokolün eksiksizliği sonucu belirler; durum her dosyada ayrıca değerlendirilir." },
    ],
    howToTitle: "Avcılar'da Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "avcilar-ceza-avukati",
    name: "Avcılar Ceza Avukatı",
    heroTitle: "Avcılar Ceza Avukatı",
    heroSubtitle:
      "Avcılar'da yaşayan ya da çalışan şüpheli, sanık ve mağdurlara ifade aşamasından istinaf başvurusuna kadar savunma ve vekillik hizmeti verilir; dosyalar İstanbul Küçükçekmece Adliyesi'nde yürür.",
    metaTitle: "Avcılar Ceza Avukatı | Müdafilik",
    metaDescription:
      "Avcılar'da soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Avukat Furkan Arıkan hukuk fakültesini 2019'da MEF Üniversitesi'nde tamamlamış, İstanbul Barosu sicilinde 72621 numarayla kayıtlıdır. Büro Beşiktaş/Sinanpaşa'dadır; Avcılar'daki ceza dosyalarında ifade, duruşma ve kanun yolu işlemleri adliye merkezli yürütülür, müvekkille iletişim telefon ve WhatsApp üzerinden sürer.",
    highlightCards: [
      { title: "Kolluk ve Savcılık İfadesi", description: "İfade ve sorgu sırasında müdafi olarak yanınızda bulunmak." },
      { title: "Tutuklama ve Adli Kontrol", description: "CMK m.100-101 çerçevesinde değerlendirme, m.268 uyarınca itiraz." },
      { title: "Kampüs Çevresi Olaylar", description: "Üniversite ve Merkez mahalleleri çevresindeki iddialarda savunma." },
      { title: "Duruşma ve İstinaf", description: "Küçükçekmece Adliyesi duruşmaları ile kanun yolu başvuruları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltına alınan kişinin kolluk ve savcılık ifadesinde müdafi sıfatıyla bulunulması (CMK m.147, m.154)",
      "Tutuklama talebinde sulh ceza hakimliği sorgusuna hazırlık ve CMK m.101 kapsamında adli kontrol önerilerinin sunulması",
      "Tutuklama kararına karşı yedi günlük süre içinde CMK m.268 uyarınca itiraz dilekçesi hazırlanması",
      "Merkez, Üniversite ve Mustafa Kemal Paşa mahallelerinde yaşanan olaylara ilişkin soruşturma dosyasının incelenmesi",
      "Öğrenci şüpheli ve mağdurlar için kampüs çevresindeki olaylarda vekillik",
      "İddianamenin kabulünden istinaf başvurusuna kadar duruşma takibi ve uzlaşma görüşmelerinin yürütülmesi",
    ],
    localParagraphs: [
      "Avcılar, Metrobüs hattı ile E-5 ve TEM bağlantıları sayesinde ilçe dışından da yoğun yolcu alan bir geçiş noktasıdır; İstanbul Üniversitesi-Cerrahpaşa'nın Avcılar Yerleşkesi nedeniyle Üniversite ve Merkez mahallelerinde genç nüfus öne çıkar. Böyle kalabalık çevrelerde kavga, yaralama veya hırsızlık iddiaları gündeme geldiğinde kolluk tutanakları ve kamera görüntüleri dosyanın seyrini etkileyebilir; her iddia mutlaka mahkumiyetle sonuçlanmaz.",
      "Gözaltına alınan kişi CMK m.154 uyarınca müdafiyle görüşebilir, susma hakkı ise CMK m.147'de güvence altındadır. Tutuklama talebinde sulh ceza hakimliği CMK m.100 ve m.101 çerçevesinde karar verir; itiraz süresi yedi gündür (m.268). Avcılar dosyalarının yargılaması İstanbul Küçükçekmece Adliyesi'nde yapılır.",
    ],
    faqs: [
      { question: "Avcılar'daki bir ceza dosyası hangi adliyede yürütülür?", answer: "Avcılar'daki ceza soruşturma ve davaları İstanbul Küçükçekmece Adliyesi'nde ele alınır. Soruşturmayı Cumhuriyet başsavcılığı yapar, tutuklama gibi koruma tedbirlerine sulh ceza hakimliği karar verir, iddianame kabul edilirse yargılamayı görevli ceza mahkemesi sürdürür. Görevli mahkeme, iddia edilen suçun niteliğine göre belirlenir." },
      { question: "Avcılar'da gözaltına alınan kişi ifadesinden önce avukatla görüşebilir mi?", answer: "Evet, gözaltına alınan kişi ifadesi başlamadan önce müdafiyle görüşebilir (CMK m.154). Müdafi seçemeyen şüpheli talep ederse baro tarafından görevlendirme yapılır (CMK m.150). Susma hakkı da CMK m.147 ile güvence altındadır; ifade vermek zorunda olunmadığı kolluğa bildirilebilir." },
      { question: "Tutuklama kararına karşı ne kadar sürede itiraz edilir?", answer: "Tutuklama kararına karşı itiraz süresi, kararın tebliğinden veya öğrenilmesinden itibaren yedi gündür (CMK m.268). Başvuru, kararı veren sulh ceza hakimliğine yapılır; itirazı kanunda gösterilen merci inceler. Dilekçede kuvvetli şüphe ve tutuklama nedeninin eksikliği, adli kontrolün yeterli olduğu somut olarak anlatılmalıdır." },
      { question: "Öğrenci bir şüpheli için kampüs çevresindeki soruşturma farklı mı yürür?", answer: "Öğrenci olmak soruşturma usulünü değiştirmez; yetişkin şüpheli için genel kurallar uygulanır, 18 yaşından küçükler için ise çocuklara özgü hükümler devreye girer. İfade, delil ve itiraz hakları aynıdır. Öğrencilik, ancak okulun yürüttüğü disiplin soruşturması gibi paralel süreçlerde ayrıca önem kazanabilir." },
      { question: "Savcılık takipsizlik kararı verirse başvuru yolu var mı?", answer: "Evet, savcılığın kovuşturmaya yer olmadığı kararına karşı tebliğden itibaren 15 gün içinde sulh ceza hakimliği nezdinde itiraz yoluna gidilebilir (CMK m.173). Bu yol suçtan zarar gören ve şikayetçi sıfatı taşıyan kişiye açıktır; dilekçede delillerin eksik değerlendirildiğine dair gerekçeler somut biçimde ileri sürülmelidir." },
    ],
    howToTitle: "Avcılar'da Ceza Dosyası Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "Kolluk veya Savcılık Çağrısı", text: "Şikayet, ihbar ya da suçüstü hâli üzerine kolluk veya savcılık kişiyi ifadeye çağırır ya da gözaltına alır." },
      { name: "Müdafi ile Görüşme", text: "İfade öncesinde dosya bilgisi paylaşılır, susma hakkı ve sunulacak deliller birlikte değerlendirilir." },
      { name: "Sulh Ceza Hakimliği", text: "Tutuklama talebi varsa CMK m.100-101 çerçevesinde sorgu yapılır; karara yedi gün içinde itiraz edilebilir." },
      { name: "İddianame ve Duruşma", text: "İddianame kabul edilirse Küçükçekmece Adliyesi'nde duruşmalar başlar; hükme karşı istinaf yoluna gidilebilir." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "avcilar-gayrimenkul-avukati",
    name: "Avcılar Gayrimenkul Avukatı",
    heroTitle: "Avcılar Gayrimenkul Avukatı",
    heroSubtitle:
      "Deprem riski tespiti, kentsel dönüşüm ve tapu uyuşmazlıklarında hukuki destek sağlanır; davalar İstanbul Küçükçekmece Adliyesi'nde görülür.",
    metaTitle: "Avcılar Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Avcılar'da deprem riski/kentsel dönüşüm, tapu iptali ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Deprem riski, kentsel dönüşüm ve tapu uyuşmazlıklarında Avcılar'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Deprem Riski/Güçlendirme", description: "Riskli yapı tespitine itiraz ve güçlendirme süreçleri." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Öğrenci Konutu Piyasası", description: "Üniversite çevresindeki kiralık konutlara ilişkin uyuşmazlıklar." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Deprem riski tespitine itiraz ve güçlendirme sürecinde danışmanlık",
      "Kentsel dönüşüm kapsamında paydaşlar arası anlaşmazlıklarda temsil",
      "Tapu iptali ve tescil davalarının açılması",
      "Üniversite çevresindeki kiralık konutlara ilişkin sözleşme danışmanlığı",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
    ],
    localParagraphs: [
      "Kuzey Anadolu Fay Hattı'na yakınlığı ve sahil kesimindeki sıvılaşma riski nedeniyle İstanbul'un deprem riski en yüksek ilçelerinden biri olan Avcılar'da, riskli yapı tespiti ve güçlendirme/dönüşüm süreçlerine ilişkin uyuşmazlıklar önemli bir gayrimenkul hukuku konusudur.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Küçükçekmece Adliyesi bünyesinde görülür.",
    ],
    faqs: [
      { question: "Riskli yapı tespitine nasıl itiraz edilir?", answer: "Riskli yapı tespitine karşı belirli süre içinde teknik ve hukuki itiraz yapılabilir. Süre tespitin tebliğ veya öğrenme tarihinden başladığı için bu tarih belgelerden belirlenmelidir. Tespite karşı idari dava yoluna da başvurulabilir; idari işlemlerde dava açma süresi genel kural olarak tebliğden itibaren 60 gündür (İYUK m. 7)." },
      { question: "Bina güçlendirme kararı tüm kat maliklerini bağlar mı?", answer: "Bağlayıcılık, kat malikleri kurulunun aldığı karara ve kararın niteliğine göre değişir; anlaşmazlık halinde hukuki yollara başvurulabilir. Avcılar'da riskli yapı tespiti ve güçlendirme veya dönüşüm süreçlerine ilişkin uyuşmazlıklar önemli bir konudur. Kat mülkiyeti kararlarının dayanağı olan yönetim planı ve karar tutanakları incelenmelidir." },
      { question: "Avcılar'da gayrimenkul davası hangi mahkemede görülür?", answer: "Gayrimenkul davası, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde görülür; Avcılar'daki bu davalar İstanbul Küçükçekmece Adliyesi bünyesindeki mahkemelerde yürütülür. Kural olarak taşınmazın bulunduğu yer mahkemesi yetkilidir. Görevli mahkeme, riskli yapı, tapu veya kira gibi talebin niteliğine göre dosyada ayrıca belirlenir." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tapu iptali ve tescil davası açabilir. Dava, tapu kaydının hukuka aykırı oluştuğu iddiasına dayanır; tapu kaydı, sözleşme ve ilgili belgeler incelenerek hazırlanır. Avcılar'daki taşınmaz davaları İstanbul Küçükçekmece Adliyesi bünyesinde, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde görülür." },
      { question: "Üniversite çevresinde konut kiralarken nelere dikkat edilmeli?", answer: "Üniversite çevresinde konut kiralanırken binanın deprem güvenliği, kira sözleşmesinin yazılı olması ve depozito şartları önemlidir. Avcılar'da deprem riski nedeniyle riskli yapı tespiti ve güçlendirme süreçleri gündemdedir; bu yüzden binanın durumu sorulmalıdır. Yazılı sözleşme, bedel ve süre şartlarının ispatı açısından da önem taşır." },
    ],
    howToTitle: "Avcılar'da Riskli Yapı İtiraz Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Rapor İncelemesi", text: "Riskli yapı tespit raporu teknik açıdan değerlendirilir." },
      { name: "İtiraz Dilekçesi", text: "Süresi içinde ilgili kuruma itiraz dilekçesi sunulur." },
      { name: "Bilirkişi İncelemesi", text: "İtiraz üzerine yeniden teknik inceleme yapılabilir." },
      { name: "Sonuçlanma", text: "Nihai karar doğrultusunda süreç tamamlanır." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "kira-bedeli-tespit-ve-uyarlama-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "avcilar-icra-avukati",
    name: "Avcılar İcra Avukatı",
    heroTitle: "Avcılar İcra Avukatı",
    heroSubtitle:
      "İcra daireleri İstanbul Küçükçekmece Adliyesi bünyesinde bulunan Avcılar'da, alacaklı ve borçlu taraflara icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır.",
    metaTitle: "Avcılar İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Avcılar'da icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İcra ve iflas hukuku alanında Avcılar'daki alacaklı ve borçlu taraflara danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "İhaleye katılım ve ihalenin feshi talepleri",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Avcılar'da yürütülen icra takiplerine ilişkin uyuşmazlıklar İstanbul Küçükçekmece Adliyesi bünyesindeki icra mahkemelerinde görülür; borçlunun Avcılar'da ikamet ettiği dosyalarda yetkili icra dairesi, kural olarak borçlunun yerleşim yerine göre belirlenir.",
      "Avcılar özelinde, üniversite çevresinde yoğunlaşan öğrenci kiralamalarından ve yerel esnafla olan ilişkilerden doğan alacaklar, icra takibine sıklıkla konu olan alacak türleri arasında yer alır.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "İcra takibine sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlanabilir. İlamsız takipte doğrudan icra dairesine başvurulur, mahkeme kararı gerekmez. Borçlu Avcılar'da ikamet ediyorsa yetkili icra dairesi kural olarak borçlunun yerleşim yerine göre belirlenir; alacağı gösteren belgelerin eksiksiz sunulması önemlidir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Ödeme emrine itiraz süresi, tebliğden itibaren 7 gündür (İİK m. 62). Süre tebligat tarihinden işlemeye başladığı için ödeme emrinin tebliğ tarihi dikkatle kontrol edilmelidir. Süresinde itiraz edilmezse takip ilerleyebilir; itiraz edilirse alacaklı itirazın iptali veya kaldırılması yoluna başvurabilir." },
      { question: "Öğrenci kiracının kira borcu için icra takibi başlatılabilir mi?", answer: "Evet, kira sözleşmesine dayanılarak öğrenci kiracının kira borcu için icra takibi başlatılabilir. Takipte kira sözleşmesi ve ödenmeyen bedele ilişkin belgeler sunulur; kiracı ödeme emrine yedi gün içinde itiraz edebilir (İİK m. 62). Öğrenci kiralamalarından doğan alacaklar icra takibine konu olan alacak türleri arasındadır." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Haciz işlemi, kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir. Haciz, ödeme emrine süresinde itiraz edilmemesi veya itirazın kaldırılması gibi hallerde borçlunun mallarına uygulanır. Taşınmaz ve taşınır mal üzerinde haciz uygulanması ile satış işlemleri icra dairesi aracılığıyla yürütülür ve takip edilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Borçlu ödeme yapmazsa haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür. Takibin bu aşamaya ilerleyebilmesi için ödeme emrine itiraz edilmemiş veya itirazın ortadan kaldırılmış olması gerekir. Taşınmaz ve taşınır mal üzerinde haciz uygulanır, ardından satış yapılarak alacak tahsil edilir." },
    ],
    howToTitle: "Avcılar'da İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "avcilar-idare-avukati",
    name: "Avcılar İdare Avukatı",
    heroTitle: "Avcılar İdare Avukatı",
    heroSubtitle:
      "Deprem risk tespiti, imar ve belediye işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Avcılar İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Avcılar'da idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. İdari işlemlerin iptali ve tam yargı davalarında Avcılar'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Deprem Risk Kararları", description: "Afet riski taşıyan yapı tespitlerine karşı hukuki yollar." },
      { title: "İmar Uygulamaları", description: "Kentsel dönüşüm alanlarındaki imar planı değişiklikleri." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Deprem risk tespitine karşı idari dava süreçleri",
      "İmar planı değişikliklerine karşı iptal davası açılması",
      "Belediye ruhsat işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Deprem riski açısından İstanbul'un en hassas ilçelerinden biri olan Avcılar'da, riskli yapı kararlarına ve kentsel dönüşüm kapsamındaki imar uygulamalarına ilişkin idari işlemler sık başvurulan idari dava konuları arasındadır.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "Riskli yapı kararına karşı hangi sürede dava açılmalı?", answer: "Riskli yapı kararına karşı tebliğ veya öğrenme tarihinden itibaren 60 gün içinde idare mahkemesinde dava açılabilir (İYUK m. 7). Süre kaçırılmaması için kararın tebliğ tarihi belgelerden tespit edilmelidir. Avcılar'da riskli yapı kararlarına ve kentsel dönüşüm kapsamındaki imar uygulamalarına ilişkin davalar İstanbul idare mahkemelerinde görülür." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İmar planı ilan edildikten sonra, ilan tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılmalıdır. Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m. 7); plan ilanında sürenin başlangıcı ayrıca incelenmelidir. İmar planı değişikliklerine karşı iptal davası açılması hizmet kapsamındadır." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ruhsat başvurusu reddedilirse ret kararına karşı idare mahkemesinde iptal davası açılabilir. Belediye ruhsat işlemlerine itiraz edilmesi bu kapsamdadır. Dava süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m. 7); bu nedenle ret kararının tebliğ tarihi saklanmalı ve süre takip edilmelidir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, idari para cezasına karşı yasal süresinde idare mahkemesinde dava açılabilir. İdari para cezalarına karşı dava süreçleri hizmet kapsamındadır. Dava süresi cezanın dayandığı kanuna göre değişebileceğinden cezanın tebliğ tarihi ve dayanağı olan tutanak ilk olarak incelenmeli, süre kaçırılmadan dava dilekçesi hazırlanmalıdır." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "İdarenin bir eyleminden zarar görenler, tam yargı davası yoluyla zararın tazminini talep edebilir. İdarenin işlem veya eyleminden kaynaklı zararlar için tazminat talebi hazırlanır. Dava açılmadan önce işlemin niteliği, tebliğ veya öğrenme tarihi ve zararı gösteren belgeler incelenir; dava İstanbul idare mahkemelerinde görülür." },
    ],
    howToTitle: "Avcılar'da İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "avcilar-is-hukuku-avukati",
    name: "Avcılar İş Hukuku Avukatı",
    heroTitle: "Avcılar İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul Küçükçekmece Adliyesi bünyesindedir.",
    metaTitle: "Avcılar İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Avcılar'da kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Avcılar'daki çalışanlara ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Kısmi Süreli Çalışma", description: "Öğrenci çalışanların yarı zamanlı iş sözleşmesi uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Kısmi süreli/yarı zamanlı çalışanların işçilik alacaklarının tahsili",
      "Hafta tatili ve yıllık izin ücreti gibi diğer işçilik alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Büyük bir üniversite yerleşkesine sahip olan Avcılar'da, öğrencilerin de sıklıkla tercih ettiği kısmi süreli/yarı zamanlı çalışma ilişkilerinde ücret ve sigorta kaydına ilişkin uyuşmazlıklar sık gündeme gelmektedir.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Küçükçekmece Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Kısmi süreli çalışan öğrencinin sigorta hakkı var mı?", answer: "Kısmi süreli çalışan öğrenci de, çalışma süresine göre değişmekle birlikte sigortalı sayılabilir. Kısmi süreli veya yarı zamanlı çalışma ilişkilerinde ücret ve sigorta kaydına ilişkin uyuşmazlıklar gündeme gelmektedir. Sigorta kaydının eksik olduğu düşünülüyorsa iş sözleşmesi, ücret ödemeleri ve çalışma kayıtları incelenerek ödenmeyen sigorta primi tespit talepleri değerlendirilebilir." },
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Kıdem tazminatı, çalışma süresi ve son brüt ücret esas alınarak hesaplanır. Haksız fesih halinde kıdem ve ihbar tazminatı davaları açılabilir. Hesaplama için iş sözleşmesi, bordro ve sigorta kayıtlarındaki çalışma süresi ile ücret bilgileri incelenir; bu belgeler dosyada bulunduğunda talep tutarı daha net belirlenir." },
      { question: "Avcılar'da iş mahkemesi nerededir?", answer: "Avcılar'daki iş davaları İstanbul Küçükçekmece Adliyesi bünyesindeki iş mahkemelerinde görülür. Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları bu mahkemelerde açılır. İşe iade için fesihten itibaren bir ay içinde arabulucuya başvurulur, son tutanaktan itibaren iki hafta içinde dava açılır." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "İşe iade sürecinin toplam süresi dosyaya göre değişebilir; bu nedenle belirli bir gün sayısı söylenemez. Süreç önce arabuluculukla başlar ve fesihten itibaren bir ay içinde başvurulur. Anlaşma olmazsa son tutanaktan itibaren iki hafta içinde iş mahkemesinde dava açılır; işe iade şartları İş Kanunu m. 18'e göre aranır." },
      { question: "Part-time çalışanların kıdem tazminatı hakkı var mı?", answer: "Şartları taşıması halinde kısmi süreli çalışanlar da kıdem tazminatına hak kazanabilir. Kıdem tazminatı hakkı çalışma süresi, fesih nedeni ve iş sözleşmesinin niteliğine göre değerlendirilir; kısmi süreli çalışma bu hakkı tek başına ortadan kaldırmaz. Sözleşme, bordro ve sigorta kayıtlarının incelenmesi, hakkın doğup doğmadığının belirlenmesinde önem taşır." },
    ],
    howToTitle: "Avcılar'da İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "avcilar-kira-tahliye-avukati",
    name: "Avcılar Kira ve Tahliye Avukatı",
    heroTitle: "Avcılar Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Öğrenci ve aile konutu tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemeleri İstanbul Küçükçekmece Adliyesi'ndedir.",
    metaTitle: "Avcılar Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Avcılar'da kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Kira hukuku alanında Avcılar'daki kiraya verenlere ve kiracılara danışmanlık verir.",
    highlightCards: [
      { title: "Öğrenci Kiralamaları", description: "Üniversite çevresinde ortak kiralama ve depozito uyuşmazlıkları." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Üniversite çevresinde öğrenci kiralamalarına özgü sözleşmelerin hazırlanması",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Büyük bir üniversite yerleşkesinin bulunduğu Avcılar'da, öğrencilerin ortaklaşa kiraladığı konutlarda depozito iadesi ve ortak sorumluluk gibi konular, standart aile konutu kiralarından farklı uyuşmazlıklar doğurabilmektedir.",
      "Bu davalara İstanbul Küçükçekmece Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır; kira sözleşmesinin yazılı ve eksiksiz olması, uyuşmazlık halinde ispat açısından önem taşır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kiracı; kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye edilebilir. Kira borcunda konutlarda 30 günlük süre verilerek ihtar çekilir (TBK m. 315); taahhütname geçerliyse icra yoluyla, ihtiyaç halinde ise dava yoluyla tahliye talep edilir. Her yöntemin şartları dosyadaki belgelere göre ayrıca incelenir." },
      { question: "Ortak kiralanan öğrenci evinde depozito nasıl iade edilir?", answer: "Ortak kiralanan öğrenci evinde depozito, sözleşmede aksi kararlaştırılmadıkça tüm kiracıların onayı veya sözleşme şartlarına göre iade edilir. Öğrencilerin ortaklaşa kiraladığı konutlarda depozito iadesi ve ortak sorumluluk standart kiralardan farklı uyuşmazlıklar doğurabilir. Bu nedenle sözleşmenin yazılı olması ve depozito şartlarının açıkça belirlenmesi önem taşır." },
      { question: "Avcılar'da tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir. Süre; tahliye sebebine, tebligatların tamamlanmasına ve delillerin toplanmasına bağlıdır. Avcılar'da bu davalara İstanbul Küçükçekmece Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Rayiç bedel tespiti, mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Kira bedelinin tespiti ve uyarlanması için dava açılır; mahkeme taşınmazın rayiç kira bedelini değerlendirir. Başvuru sözleşme ve mevcut bedel belgeleriyle yapılır; Avcılar'daki bu davalara Küçükçekmece Adliyesi bünyesindeki sulh hukuk mahkemesi bakar." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir; mahkemeye gitmek gerekmeyebilir. Taahhütnamenin geçerliliği ve içeriği önce incelenir. Taahhüde dayalı icra yoluyla tahliye işlemleri icra dairesinde yürütülür; taahhütname geçerli değilse tahliye dava yoluyla istenir." },
    ],
    howToTitle: "Avcılar'da Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "avcilar-vergi-avukati",
    name: "Avcılar Vergi Avukatı",
    heroTitle: "Avcılar Vergi Avukatı",
    heroSubtitle:
      "Vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Avcılar Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Avcılar'da vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Avcılar'daki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Öğrenci Kiralama Piyasası Esnafı", description: "Üniversite çevresindeki küçük işletmelere yönelik vergi uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Üniversite çevresindeki küçük işletmelerde vergi incelemesi sürecinde danışmanlık",
      "Kira gelirlerinin beyanına ilişkin uyuşmazlıklarda destek",
    ],
    localParagraphs: [
      "Üniversite yerleşkesi çevresinde yoğunlaşan öğrenci konutu kiralama piyasası nedeniyle Avcılar'da, kira gelirinin eksik beyanına dayalı vergi incelemeleri sık karşılaşılan konular arasındadır.",
      "Bu işlemlere karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir; ihbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "Kira geliri beyan edilmezse ne olur?", answer: "Kira geliri beyan edilmezse re'sen veya ikmalen tarhiyat ve buna bağlı ceza uygulanabilir; bu işlemlere karşı dava açılabilir. Avcılar'da öğrenci konutu kiralama piyasası nedeniyle kira gelirinin eksik beyanına dayalı vergi incelemeleri gündeme gelmektedir. Tarhiyata ilişkin ihbarnameye karşı dava süresi tebliğden itibaren 30 gündür (İYUK m. 7)." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "İhbarnameye karşı tebliğden itibaren 30 gün içinde vergi mahkemesinde dava açılabilir (İYUK m. 7). Bu süre tebligat tarihinden başladığı için ihbarname evrakı saklanmalıdır. Uzlaşma başvurusu da tebliğden itibaren 30 gün içinde yapılabilir (VUK Ek m. 1); vergi ve ceza ihbarnamesi için süreler birlikte takip edilmelidir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "Avcılar'daki vergi işlemlerine karşı açılan davalar İstanbul vergi mahkemelerinde görülür. Vergisel işlemler Avcılar Vergi Dairesi Müdürlüğü nezdinde yürütülür. Dava açma süresi ihbarnamenin tebliğinden itibaren 30 gündür (İYUK m. 7); dilekçe vergi mahkemesine verilir ve ihbarname ile tebliğ evrakı dosyaya eklenir." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma başvurusu dava hakkını ortadan kaldırmaz; uzlaşma sağlanamazsa kalan dava açma süresi korunur. Uzlaşma başvurusu tebliğden itibaren 30 gün içinde yapılır (VUK Ek m. 1), dava süresi ise 30 gündür (İYUK m. 7). Bu nedenle uzlaşma görüşmelerinde sürelerin birlikte takip edilmesi gerekir." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Ödeme emrine karşı vergi mahkemesinde dava açılabilir; süre ödeme emrinin tebliğ tarihinden başlar ve ihbarnamelerdeki 30 günlük süreden farklı olabileceği için tebliğ evrakı hemen kontrol edilmelidir. Vergi ve ceza ihbarnamelerinde dava süresi 30 gündür (İYUK m. 7). Ödeme emrine karşı dava açılması hizmet kapsamındadır." },
    ],
    howToTitle: "Avcılar'da Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "avcilar-borclar-hukuku-avukati",
    name: "Avcılar Borçlar Hukuku Avukatı",
    heroTitle: "Avcılar Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Güçlendirme/inşaat sözleşmesi uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; ticaret ve asliye hukuk mahkemeleri İstanbul Küçükçekmece Adliyesi'ndedir.",
    metaTitle: "Avcılar Borçlar Hukuku Avukatı | Alacak Davası",
    metaDescription:
      "Avcılar'da sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Borçlar hukuku kapsamında Avcılar'daki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık verir.",
    highlightCards: [
      { title: "Güçlendirme Sözleşmeleri", description: "Bina güçlendirme ve yapım sözleşmesi uyuşmazlıkları." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Kat Karşılığı Sözleşmeler", description: "Kentsel dönüşüm kapsamındaki inşaat sözleşmesi uyuşmazlıkları." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Bina güçlendirme ve yapım sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Kat karşılığı inşaat sözleşmelerinden doğan uyuşmazlıklar",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Deprem riski nedeniyle güçlendirme ve kentsel dönüşüm faaliyetinin yoğun olduğu Avcılar'da, yüklenici firmalarla yapılan güçlendirme/inşaat sözleşmelerinden doğan uyuşmazlıklar sık karşılaşılan borçlar hukuku konularındandır.",
      "Bu davalar İstanbul Küçükçekmece Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Güçlendirme işini üstlenen firma işi eksik bırakırsa ne yapılabilir?", answer: "Güçlendirme işini üstlenen firma işi eksik bırakırsa sözleşmeden dönme, tazminat veya ifa davası gibi hukuki yollara başvurulabilir. Hangi yolun seçileceği sözleşme şartlarına ve eksikliğin niteliğine göre belirlenir. Avcılar'da güçlendirme ve inşaat sözleşmelerinden doğan uyuşmazlıklarda sözleşme, ödeme belgeleri ve yazışmalar incelenir; dava İstanbul Küçükçekmece Adliyesi'nde görülür." },
      { question: "Kat karşılığı inşaat sözleşmesi nedir?", answer: "Kat karşılığı inşaat sözleşmesi, arsa sahibinin arsayı, müteahhidin ise yapım hizmetini karşılıklı edim olarak sunduğu bir sözleşme türüdür. Bu sözleşmelerden doğan uyuşmazlıklarda ifa şartları, teslim koşulları ve tarafların edimleri sözleşme metni üzerinden incelenir. Avcılar'da dönüşüm faaliyetinin yoğun olması nedeniyle bu tür sözleşmelerde yazılı ve ayrıntılı düzenleme önem taşır." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Ticari alacak davası, niteliğine göre asliye ticaret mahkemesinde, İstanbul Küçükçekmece Adliyesi bünyesinde görülür. Avcılar'daki bu davalar anılan adliyede açılır. Bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabulucuya başvurulması gerekebilir; bu durum dosyanın niteliğine göre belirlenir." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, dava öncesi arabuluculuk her zaman şart değildir; yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Bu nedenle uyuşmazlığın ticari nitelikte olup olmadığı önce belirlenir. Şart aranan hallerde arabulucuya başvurulmadan açılan dava usulden reddedilebilir." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Zamanaşımına uğramış alacak, borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir. Zamanaşımı mahkemece kendiliğinden dikkate alınmaz, borçlunun itirazı gerekir. Bu nedenle alacak ve ihtar sürelerinin kontrolü önemlidir; alacak davası ve icra takibi öncesinde zamanaşımı durumu belgelerle incelenmelidir." },
    ],
    howToTitle: "Avcılar'da Alacak Davası Süreci Nasıl İşler?",
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

export const avcilarServices: PseoService[] = [...avcilarBaseServices, avcilarMiras];
