import type { PseoService } from "./types";
import { kagithaneMiras } from "./miras/kagithaneMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const kagithaneBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "kagithane-avukat",
    name: "Kağıthane Avukat",
    heroTitle: "Kağıthane Avukat",
    heroSubtitle:
      "Kağıthane'de oturan, çalışan veya işyeri işleten kişilerin ceza ve aile davalarından vergi ve borçlar uyuşmazlıklarına kadar sekiz alandaki dosyaları Çağlayan'daki mahkemelerde takip edilir; ilçeden M7 Kağıthane istasyonu ve otobüs hatlarıyla adliyeye gidilebilir.",
    metaTitle: "Kağıthane Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Kağıthane'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "72621 sicil numaralı İstanbul Barosu avukatı Furkan Arıkan, 2019'da MEF Üniversitesi'nin hukuk fakültesinden mezun olmuştur. Kağıthane'deki müvekkillerin sekiz ayrı hukuk alanındaki dosyalarında danışmanlık ve dava takibi yapar; büro Beşiktaş/Sinanpaşa'dadır, görüşme talebi WhatsApp veya telefonla iletilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Gözaltı anından istinaf ve temyize kadar savunma." },
      { title: "Aile Hukuku", description: "Boşanma, velayet, nafaka ve mal paylaşımı uyuşmazlıkları." },
      { title: "Gayrimenkul Hukuku", description: "Dönüşüm geçiren mahallelerde tapu, kat karşılığı ve kira ilişkileri." },
      { title: "İş Hukuku", description: "Set, stüdyo ve sanayi çalışanları ile işverenler için fesih ve alacak davaları." },
      { title: "İcra Hukuku", description: "Takip başlatma, borca itiraz ve haciz aşamaları." },
      { title: "İdare Hukuku", description: "Belediye ve idare işlemlerine karşı iptal ve tam yargı davaları." },
      { title: "Vergi Hukuku", description: "Kağıthane Vergi Dairesi kaynaklı tarhiyat, ceza ve uzlaşma süreçleri." },
      { title: "Borçlar Hukuku", description: "Yapım, hizmet ve telif sözleşmelerinden doğan alacak ve tazminat talepleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltında müdafilik, soruşturma ve duruşma aşamalarında ceza savunması",
      "Boşanma, velayet, nafaka ve mal rejimi davalarında temsil",
      "Tapu, kat mülkiyeti, kentsel dönüşüm ve kira uyuşmazlıklarında dava takibi",
      "İşçi ve işveren için fesih, kıdem-ihbar tazminatı ve işe iade danışmanlığı",
      "İlamsız ve ilamlı icra takibi, itiraz ve haciz işlemleri",
      "Belediye ve idare işlemlerine karşı idare mahkemesinde dava açılması",
      "Vergi ihbarnamelerine karşı uzlaşma ve iptal davası yolunun yürütülmesi",
      "Ticari ve bireysel sözleşmelerden doğan alacak ve tazminat davaları",
    ],
    localParagraphs: [
      "Çağlayan, Hamidiye ve Gürsel gibi köklü mahalleler ile Seyrantepe, Çeliktepe ve Şirintepe gibi bölgeler Kağıthane'nin farklı yüzlerini oluşturur: dizi ve program yapımı yapan şirketler ve stüdyolar, Sanayi Mahallesi'ndeki küçük üretim ve lojistik işletmeleri, Gültepe ile Nurtepe'de süren kentsel dönüşüm projeleri aynı ilçede yan yana bulunur.",
      "Kağıthane'deki dosyalar çoğunlukla İstanbul (Çağlayan) Adliyesi'nde yürür; vergi işlemleri Kağıthane Vergi Dairesi Müdürlüğü'ne tabidir. Adliyeye ulaşmak için M7 hattının Kağıthane istasyonu, M11 hattı ve çok sayıda otobüs güzergahı kullanılabilir.",
    ],
    faqs: [
      { question: "Kağıthane'de avukata ne zaman ve nasıl başvurulur?", answer: "Süreler işlemeye başlamadan önce, yani hukuki sorunla karşılaşıldığında WhatsApp veya telefonla randevu talep edilerek başvurulabilir. İlk görüşmede olay özeti ve belgeler incelenir, izlenecek yol ve olası süreler açıklanır. Görüşme yüz yüze ya da çevrim içi yapılabilir; danışmanlık ücretlidir." },
      { question: "Kağıthane'deki bir dava hangi adliyede görülür?", answer: "Kağıthane'de yaşayanlar bakımından görevli ve yetkili mahkeme çoğunlukla İstanbul (Çağlayan) Adliyesi'dir; ilçe bu adliyenin yargı çevresindedir. İdari ve vergisel uyuşmazlıklar İstanbul idare ve vergi mahkemelerinde görülür. Ulaşım için M7 Kağıthane istasyonu ile otobüs hatları kullanılabilir." },
      { question: "Büro Kağıthane'de mi, uzaktan hizmet alınabilir mi?", answer: "Büro Kağıthane'de değil, Beşiktaş/Sinanpaşa'dadır. Kağıthane'deki müvekkiller telefon ve WhatsApp üzerinden iletişime geçebilir, görüşmeyi yüz yüze veya görüntülü yapabilir. Duruşma ve adliye işlemleri Çağlayan'da yürütüldüğünden, müvekkilin her aşamada ilçeden ayrılması gerekmeyebilir; gerekli belgeler elektronik ortamda da iletilebilir." },
      { question: "Medya ve yapım şirketleri sözleşme uyuşmazlıklarında nereden destek alır?", answer: "Yapım, hizmet ve telif sözleşmelerinden doğan ödeme, teslim ve ifa uyuşmazlıkları borçlar hukuku kapsamında incelenir; telif ihlali iddiaları ayrıca fikri haklara ilişkin düzenlemelere de dayanabilir. Sözleşme metni, ödeme planı, ihtarlar ve yazışmalar incelenerek izlenecek yol belirlenir; ödeme geciktiğinde önce ihtarname çekilmesi de değerlendirilir." },
      { question: "Gözaltı veya tutuklama durumunda ilk ne yapılmalı?", answer: "Gözaltına alınan kişi, Ceza Muhakemesi Kanunu m.147 uyarınca avukattan yararlanma ve susma hakkına sahiptir; ifade vermeden önce müdafi talep edilmelidir. Yakınlarınız hemen telefon veya WhatsApp üzerinden iletişime geçerek kişinin bulunduğu birimi ve gözaltı saatini bildirebilir; müdafilik süreci buna göre başlatılır." },
    ],
    howToTitle: "Kağıthane'de Avukatla Çalışma Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Randevu Talebi", text: "WhatsApp veya telefonla ulaşılır, konu kısaca anlatılır ve görüşme için uygun gün belirlenir." },
      { name: "İlk Görüşme", text: "Belgeler incelenir, başvurulacak yargı yolu, süreler ve olası masraflar hakkında bilgi verilir." },
      { name: "Vekalet ve Dosya Kurulumu", text: "Temsil kararı alınırsa vekaletname düzenlenir, eksik belgeler tamamlanır ve dosya açılır." },
      { name: "Takip ve Bilgilendirme", text: "Duruşma ve işlemler adliyede yürütülür, gelişmeler müvekkille düzenli olarak paylaşılır." },
    ],
    crosslinkLabel: "Kağıthane Avukat (Genel)",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "kidem-tazminati-hesaplama-2026", "icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "kagithane-bosanma-avukati",
    name: "Kağıthane Boşanma Avukatı",
    heroTitle: "Kağıthane Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma davalarında velayet, nafaka ve mal paylaşımı konularında temsil sağlanır; davalar İstanbul (Çağlayan) Adliyesi'nde görülür.",
    metaTitle: "Kağıthane Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Kağıthane'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Aile hukuku alanında boşanma, velayet ve nafaka dosyalarında temsil veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Nafaka", description: "Tedbir, yoksulluk ve iştirak nafakasında temsil." },
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
      "Kağıthane'de Gültepe, Nurtepe ve Çeliktepe gibi orta gelir grubunun yoğun olduğu mahalleler bulunmakta, bu profil boşanma dosyalarında nafaka ve mal rejimi taleplerinin niteliğini de şekillendirmektedir.",
      "İlçede açılan boşanma, velayet ve nafaka davalarına İstanbul (Çağlayan) Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Kağıthane'de hangi mahkeme boşanma davasına bakar?", answer: "İstanbul (Çağlayan) Adliyesi'ndeki aile mahkemeleri bakar." },
      { question: "Protokolde eksik madde olursa ne olur?", answer: "Hakim eksik hususları tamamlatabilir veya anlaşmalı süreç çekişmeliye dönebilir." },
      { question: "Kusur tespiti dava sonucunu nasıl etkiler?", answer: "Tazminat ve bazı hallerde nafaka taleplerinin kabulünde belirleyici olabilir." },
      { question: "Velayet anne veya babadan birine otomatik verilir mi?", answer: "Hayır, cinsiyet esas alınmaz; çocuğun üstün yararı esastır." },
      { question: "Nafaka ödemeyen taraf hakkında ne yapılabilir?", answer: "İcra takibi başlatılabilir, tekrarı halinde cezai sorumluluk doğabilir." },
      { question: "Boşanma davası ortalama ne kadar sürer?", answer: "Anlaşmalı süreçte kısa, çekişmeli süreçte dosyaya göre değişen bir süre alabilir." },
    ],
    howToTitle: "Kağıthane'de Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "Durum Analizi", text: "Talepler (velayet, nafaka, mal rejimi) netleştirilir." },
      { name: "Belgelerin Hazırlanması", text: "Protokol veya dava dilekçesi oluşturulur." },
      { name: "Başvuru", text: "Aile mahkemesine başvuru yapılır." },
      { name: "Karar Süreci", text: "Duruşma sonunda mahkeme kararını açıklar." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "bosanmada-nafaka-turleri"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "kagithane-ceza-avukati",
    name: "Kağıthane Ceza Avukatı",
    heroTitle: "Kağıthane Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; kovuşturma İstanbul (Çağlayan) Adliyesi'nde yürütülür.",
    metaTitle: "Kağıthane Ceza Avukatı | Müdafilik",
    metaDescription:
      "Kağıthane'de soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında müdafilik yapan Furkan Arıkan, İstanbul Barosu'na 72621 sicil ile kayıtlı bir avukattır; MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Kanun Yolları", description: "İstinaf ve temyiz süreçlerinin yürütülmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı ve ifade sürecinde müdafi olarak hazır bulunma",
      "Soruşturma evrakının incelenmesi ve itiraz hakkının kullanılması",
      "Tutuklama kararına ve devamına karşı itiraz başvuruları",
      "Kovuşturma aşamasında duruşmaların takip edilmesi",
      "İstinaf ve temyiz dilekçelerinin hazırlanması",
      "Uzlaşma ve etkin pişmanlık hükümlerine ilişkin danışmanlık",
    ],
    localParagraphs: [
      "Kağıthane'nin gerek yoğun sanayi/lojistik faaliyeti gerekse kalabalık yerleşim mahalleleri (Gültepe, Nurtepe, Talatpaşa) nedeniyle kolluk müdahalesi gerektiren olaylara sıkça rastlanmaktadır; bu olaylara ilişkin kovuşturmalar İstanbul (Çağlayan) Adliyesi'nde görülür.",
      "Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında ve doğru kullanılması, sonraki aşamaların seyri açısından önemlidir.",
    ],
    faqs: [
      { question: "Kağıthane'deki ceza davaları nerede görülüyor?", answer: "Kovuşturma İstanbul (Çağlayan) Adliyesi'nde yürütülmektedir." },
      { question: "Müdafiye ulaşma hakkı ne zaman başlar?", answer: "Gözaltının başladığı andan itibaren müdafi ile görüşme talep edilebilir." },
      { question: "Tutukluluğa itiraz nereye yapılır?", answer: "Kararı veren merciin bağlı olduğu ağır ceza mahkemesine başvurulur." },
      { question: "Her dosyada avukat bulundurmak zorunlu mudur?", answer: "Belirli ağırlıktaki suçlarda ve bazı özel durumlarda zorunludur, diğer hallerde talebe bağlıdır." },
      { question: "Uzlaşma kabul edilmek zorunda mıdır?", answer: "Hayır, uzlaşmaya rıza göstermek şüpheli/sanığın iradesine bağlıdır." },
      { question: "Mahkeme kararına itiraz süresi var mıdır?", answer: "Evet, kararın tebliğinden itibaren kanunda öngörülen süre içinde istinaf yoluna gidilebilir." },
    ],
    howToTitle: "Kağıthane'de Ceza Yargılaması Nasıl İlerler?",
    howToSteps: [
      { name: "Soruşturma Süreci", text: "Şikayet veya ihbarla savcılık soruşturması başlatılır." },
      { name: "Müdafi Görüşmesi", text: "Şüpheli ifade vermeden önce müdafi ile görüşebilir." },
      { name: "Dava Açılması", text: "İddianamenin kabulüyle kovuşturma aşamasına geçilir." },
      { name: "Kanun Yolu", text: "Karara karşı gerekirse istinaf veya temyiz başvurusu yapılır." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "kagithane-gayrimenkul-avukati",
    name: "Kağıthane Gayrimenkul Avukatı",
    heroTitle: "Kağıthane Gayrimenkul Avukatı",
    heroSubtitle:
      "Kentsel dönüşüm, tapu uyuşmazlıkları ve kira ilişkilerinde hukuki destek sağlanır; davalar İstanbul (Çağlayan) Adliyesi'nde görülür.",
    metaTitle: "Kağıthane Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Kağıthane'de tapu iptali, kentsel dönüşüm ve kira uyuşmazlıklarında gayrimenkul avukatlığı ve danışmanlık hizmeti sunulmaktadır.",
    aboutParagraph:
      "Tapu, kat mülkiyeti ve kentsel dönüşüm uyuşmazlıklarında danışmanlık veren Furkan Arıkan, 72621 sicil sayılı İstanbul Barosu avukatıdır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Kentsel Dönüşüm", description: "Riskli yapı süreci ve kat maliki anlaşmalarında destek." },
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
      "Gültepe, Nurtepe ve Telsizler gibi mahallelerde eski yapı stokunun yoğun olması, Kağıthane'de kentsel dönüşüm projelerini ve buna bağlı hukuki süreçleri sık gündeme getirmektedir; bu süreçlere ilişkin uyuşmazlıklar İstanbul (Çağlayan) Adliyesi'ndeki sulh hukuk ve asliye hukuk mahkemelerinde görülür.",
      "Sanayi Mahallesi çevresinde işyeri niteliğindeki taşınmazların yoğunluğu, kira ve kullanım hakkına ilişkin ticari nitelikli uyuşmazlıkların da ortaya çıkmasına neden olabilmektedir.",
    ],
    faqs: [
      { question: "Kentsel dönüşüm süreci nasıl başlar?", answer: "Riskli yapı tespiti sonrasında kat maliklerinin çoğunluk kararı ve idari başvuru aşamalarıyla ilerler." },
      { question: "Kağıthane'de gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde görülür." },
      { question: "Riskli yapı kararına itiraz edilebilir mi?", answer: "Evet, teknik rapora karşı bilirkişi incelemesi talep edilerek itiraz edilebilir." },
      { question: "Ortak gider anlaşmazlıkları nasıl giderilir?", answer: "Öncelikle yönetim planı ve Kat Mülkiyeti Kanunu esas alınır, çözülemezse dava yoluna gidilir." },
      { question: "İşyeri niteliğindeki taşınmaz alımında nelere dikkat edilmeli?", answer: "Tapu kaydı, imar durumu ve varsa kısıtlamaların önceden incelenmesi önerilir." },
    ],
    howToTitle: "Kağıthane'de Kentsel Dönüşüm Süreci Nasıl Yürütülür?",
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
    urlSlug: "kagithane-icra-avukati",
    name: "Kağıthane İcra Avukatı",
    heroTitle: "Kağıthane İcra Avukatı",
    heroSubtitle:
      "Alacak tahsili amacıyla icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır; icra mahkemeleri İstanbul (Çağlayan) Adliyesi'ndedir.",
    metaTitle: "Kağıthane İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Kağıthane'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İcra ve iflas hukuku kapsamında hem alacaklı hem borçlu tarafında danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır; 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz ve itirazın iptali davası açılması",
      "Menkul ve gayrimenkul üzerinde haciz uygulanması",
      "İhalenin feshine ilişkin dava süreçleri",
      "İstihkak iddialarının değerlendirilmesi",
      "İflas ve konkordato başvurularında danışmanlık",
    ],
    localParagraphs: [
      "Sanayi Mahallesi ve çevresindeki üretim/lojistik işletmeleri arasındaki ticari alacaklar, Kağıthane'de icra takiplerinin sık başvurulan bir yöntem olmasına yol açmaktadır; bu takiplere ilişkin uyuşmazlıklar İstanbul (Çağlayan) Adliyesi'ndeki icra mahkemelerinde görülür.",
      "Borçlunun Kağıthane'de yerleşik olduğu takiplerde yetkili icra dairesi, kural olarak borçlunun ikametgahı veya sözleşmede belirlenen yer esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "İcra takibi uyuşmazlıkları nerede çözülüyor?", answer: "İstanbul (Çağlayan) Adliyesi'ndeki icra mahkemelerinde görülmektedir." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Tebliğ tarihinden itibaren 7 gündür." },
      { question: "İtirazın iptali davası nerede açılır?", answer: "Takibin yapıldığı yer icra mahkemesinde veya genel yetkili mahkemede açılabilir." },
      { question: "Usulsüz haciz işlemine karşı ne yapılmalı?", answer: "İcra mahkemesine şikayet başvurusunda bulunulabilir." },
      { question: "Mal beyanında bulunmamanın sonucu nedir?", answer: "Borçlu hakkında icra mahkemesi nezdinde şikayet yoluyla yaptırım uygulanabilir." },
    ],
    howToTitle: "Kağıthane'de İcra Takibi Nasıl İşletilir?",
    howToSteps: [
      { name: "Belgelerin Toplanması", text: "Alacağı ispatlayan sözleşme veya ilam bir araya getirilir." },
      { name: "Takip Talebi", text: "Yetkili icra dairesine başvurularak takip başlatılır." },
      { name: "Tebligat", text: "Ödeme emri borçluya tebliğ edilir, itiraz süresi işler." },
      { name: "Sonuç", text: "İtiraz olmazsa haciz ve tahsilat aşamasına geçilir." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "kagithane-idare-avukati",
    name: "Kağıthane İdare Avukatı",
    heroTitle: "Kağıthane İdare Avukatı",
    heroSubtitle:
      "Belediye ve diğer kamu kurumu işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Kağıthane İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Kağıthane'de idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "İdari işlemlerin iptali ve tam yargı davalarında danışmanlık veren Furkan Arıkan, 72621 sicil sayılı İstanbul Barosu avukatıdır; MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olmuştur.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Tam Yargı Davaları", description: "İdarenin işlem/eyleminden doğan zararın tazmini." },
      { title: "Riskli Yapı Kararları", description: "Kentsel dönüşüm kapsamındaki idari işlemlere itiraz." },
      { title: "Belediye İşlemleri", description: "İmar, ruhsat ve ceza kararlarına ilişkin uyuşmazlıklar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İdari işlemlerin iptaline yönelik dava süreçleri",
      "Tazminat amaçlı tam yargı davası açılması",
      "Riskli yapı ve kentsel dönüşüm kararlarına itiraz",
      "İmar ve ruhsat işlemlerine karşı dava süreçleri",
      "İdari para cezalarına karşı iptal davası",
      "Kamu personeli özlük işlemlerine ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Kağıthane'de yürütülen kentsel dönüşüm projeleri kapsamında tesis edilen riskli yapı tespiti ve yıkım kararlarına karşı idari yargı yoluna sıkça başvurulmaktadır; bu davalar İstanbul idare mahkemelerinde görülür.",
      "Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür; Sanayi Mahallesi çevresindeki işletmelere yönelik idari para cezaları da bu kapsamda değerlendirilebilir.",
    ],
    faqs: [
      { question: "İdari işleme karşı dava açma süresi nedir?", answer: "Genel kural olarak tebliğden itibaren 60 gündür." },
      { question: "Riskli yapı kararına nasıl itiraz edilir?", answer: "Teknik rapora karşı bilirkişi incelemesi talep edilerek idare mahkemesinde dava açılabilir." },
      { question: "Belediye cezasına itiraz nereye yapılır?", answer: "Yasal süre içinde idare mahkemesinde iptal davası açılarak itiraz edilir." },
      { question: "Yürütmenin durdurulması ne zaman talep edilir?", answer: "İşlemin uygulanması halinde telafisi güç zarar doğacaksa talep edilebilir." },
      { question: "Tam yargı davası hangi hallerde açılır?", answer: "İdarenin işlem veya eyleminden kaynaklı bir zarar oluştuğunda açılabilir." },
    ],
    howToTitle: "Kağıthane'de İdari İptal Davası Nasıl Açılır?",
    howToSteps: [
      { name: "İşlemin Belirlenmesi", text: "İptali istenen karar ve tebliğ tarihi tespit edilir." },
      { name: "Süre Kontrolü", text: "60 günlük yasal süre gözden geçirilir." },
      { name: "Dilekçe Hazırlığı", text: "Gerekçeler ve belgeler dilekçeye eklenir." },
      { name: "Yargılama", text: "İdare mahkemesi dosyayı inceler ve kararını verir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "kagithane-is-hukuku-avukati",
    name: "Kağıthane İş Hukuku Avukatı",
    heroTitle: "Kağıthane İş Hukuku Avukatı",
    heroSubtitle:
      "Kağıthane'de stüdyo, set, sanayi ve ofis çalışanları ile işverenlerin işten çıkarma, tazminat ve alacak uyuşmazlıklarında arabuluculuk ve iş mahkemesi süreçleri yürütülür; davalar Çağlayan'daki iş mahkemelerinde görülür.",
    metaTitle: "Kağıthane İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Kağıthane'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "72621 sicil numaralı İstanbul Barosu avukatı Furkan Arıkan, 2019'da MEF Üniversitesi'nin hukuk fakültesini bitirmiştir. İş hukuku dosyalarında Kağıthane'deki işçi ve işverenlerin fesih, tazminat ve işçilik alacağı uyuşmazlıklarında danışmanlık ve temsil hizmeti verir.",
    highlightCards: [
      { title: "Fesih Sonrası Hesaplar", description: "Kıdem ve ihbar tazminatının hesaplanması ve talep edilmesi." },
      { title: "İşe İade Davası", description: "Geçersiz fesih iddiasının arabuluculuk ve dava aşamalarında yürütülmesi." },
      { title: "Mesai ve Ücret Alacakları", description: "Fazla çalışma, izin ve eksik ödenen ücretlerin tahsili." },
      { title: "Set ve Stüdyo Çalışanları", description: "Proje bazlı çalışmalarda sözleşme türü ve çalışma düzeninin değerlendirilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız işten çıkarmaya bağlı kıdem ve ihbar tazminatı taleplerinin dava yoluyla takibi",
      "İşe iade talebinde zorunlu arabuluculuk başvurusu ve dava süreci",
      "Mesai farkı, hafta tatili çalışması ve yıllık izin ücretlerinin tahsili",
      "Mobbing iddialarının delillendirilmesi ve tazminat talebi",
      "İş sözleşmesi, ibraname ve fesih bildirimi metinlerinin hazırlanması",
      "İş kazası kaynaklı tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Kağıthane'de dizi ve program yapan şirketler ile stüdyolar uzun set günleri ve proje süreli sözleşmelerle çalışırken, Sanayi Mahallesi'ndeki üretim ve lojistik işletmeleri vardiya usulünü kullanabilir. Çalışma düzenlerinin bu kadar farklı olması, mesai ve fesih uyuşmazlıklarında hangi delillerin belirleyici olacağını da değiştirir.",
      "İşe iade ve işçilik alacağı davalarında dava açmadan önce arabulucuya başvurmak zorunludur. Arabuluculuk sonuçsuz kalırsa dava Çağlayan'daki iş mahkemelerinde görülür; M7 hattının Kağıthane istasyonu ve otobüs güzergahları adliyeye ulaşımı destekler.",
    ],
    faqs: [
      { question: "Haksız şekilde işten çıkarıldığımda ilk adım ne olmalı?", answer: "İlk adım, fesih bildiriminin yazılı olup olmadığını ve size ne zaman tebliğ edildiğini tespit etmektir. İşe iade istenecekse tebliğden itibaren bir ay içinde arabulucuya başvurulmalıdır. Tazminat talepleri için bordro, sözleşme ve yazışmalar bu aşamada saklanmalıdır." },
      { question: "Kıdem tazminatı ile ihbar tazminatı arasındaki fark nedir?", answer: "Kıdem tazminatı, çalışılan yıllara bağlı olarak belirli şartlarla sona eren iş ilişkisinde ödenir; ihbar tazminatı ise bildirim süresine uyulmadan yapılan feshin bedelidir. İhbar süreleri kıdeme göre iki, dört, altı veya sekiz haftadır (4857 sayılı Kanun m.17)." },
      { question: "Set ve prodüksiyon çalışanı belirsiz süreli işçi sayılabilir mi?", answer: "Evet, işçinin konumu sözleşmenin adından çok fiili çalışma düzenine göre belirlenir. Belirli süreli sözleşmeler esaslı neden olmaksızın ardı ardına yenilenirse baştan itibaren belirsiz süreli sayılır (4857 sayılı Kanun m.11). Proje bazlı çalışmada esaslı neden bulunup bulunmadığı ayrıca incelenir." },
      { question: "Fazla çalışma ücreti nasıl hesaplanır?", answer: "Haftalık kırk beş saati aşan çalışma fazla çalışma sayılır ve saat ücreti yüzde elli artırımla ödenir (4857 sayılı Kanun m.41). Hesapta giriş-çıkış saatleri, puantaj ve bordro karşılaştırılır; ücret bordroda ödenmiş görünüyorsa imzalı bordronun ispat değeri ayrıca değerlendirilir." },
      { question: "Kağıthane'de iş davası nerede açılır?", answer: "Kağıthane'de çalışan işçilerin iş davalarına çoğunlukla Çağlayan'daki iş mahkemeleri bakar. Dava açılmadan önce arabulucuya başvurmak dava şartıdır ve arabuluculuk son tutanağı dava dilekçesine eklenir. Böylece mahkemeye taşınan dosyada tarafların belgeleri ve talepleri önceden netleşmiş olur." },
    ],
    howToTitle: "Kağıthane'de Fesih Sonrası İlk Adımlar Nelerdir?",
    howToSteps: [
      { name: "Bildirimin Kayda Alınması", text: "Fesih bildirimi, tebliğ tarihi ve gerekçesi not edilir; iş sözleşmesi ve bordrolar toplanır." },
      { name: "Hak Kalemlerinin Ayrıştırılması", text: "Tazminat, işe iade, fazla çalışma ve izin alacakları ayrı başlıklarda değerlendirilir." },
      { name: "Arabuluculuk Başvurusu", text: "Fesihten itibaren bir ay içinde arabulucuya başvurulur ve görüşmelere belgelerle katılınır." },
      { name: "Mahkemeye Taşıma", text: "Son tutanaktan itibaren iki hafta içinde Çağlayan'daki iş mahkemesinde dava açılır." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "ise-iade-davasi"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "kagithane-kira-tahliye-avukati",
    name: "Kağıthane Kira ve Tahliye Avukatı",
    heroTitle: "Kağıthane Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemeleri İstanbul (Çağlayan) Adliyesi'ndedir.",
    metaTitle: "Kağıthane Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Kağıthane'de kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kira hukuku alanında hem kiraya verenlere hem kiracılara danışmanlık veren Furkan Arıkan, 72621 sicil sayılı İstanbul Barosu avukatıdır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "İşyeri Kiraları", description: "Sanayi/lojistik tesislerine ilişkin kira uyuşmazlıkları." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "İşyeri/depo niteliğindeki taşınmazların kira sözleşmeleri",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Kağıthane'de konut kiralarının yanı sıra Sanayi Mahallesi ve çevresinde depo, atölye ve küçük ölçekli üretim tesisi niteliğindeki taşınmazlara ilişkin işyeri kiraları da önemli bir yer tutar. Bu uyuşmazlıklarda taşınmazın bulunduğu yer sulh hukuk mahkemesi görevlidir.",
      "Bu davalara İstanbul (Çağlayan) Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır; işyeri kiralarında sektöre özgü teamüller de ayrıca değerlendirilebilir.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "İşyeri kiralarında ek bir usul var mı?", answer: "Temel usul benzer olsa da ticari kiralarda bazı özel süre ve teamül kuralları uygulanabilir." },
      { question: "Kağıthane'de tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
    ],
    howToTitle: "Kağıthane'de Kiracı Tahliye Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Sebebin Belirlenmesi", text: "Tahliyeye dayanak olacak durum (ihtiyaç, temerrüt, taahhüt) netleştirilir." },
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
    urlSlug: "kagithane-vergi-avukati",
    name: "Kağıthane Vergi Avukatı",
    heroTitle: "Kağıthane Vergi Avukatı",
    heroSubtitle:
      "Vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Kağıthane Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Kağıthane'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda danışmanlık veren Furkan Arıkan, 72621 sicil sayılı İstanbul Barosu avukatıdır; MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olmuştur.",
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
      "Kağıthane'de mükellefiyeti bulunanların vergisel işlemleri Kağıthane Vergi Dairesi Müdürlüğü tarafından yürütülür; bu daireye ait tarhiyat ve ceza kararlarına karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir.",
      "İlçedeki medya/prodüksiyon şirketleri ile sanayi ve lojistik işletmelerinin faaliyet hacmi, KDV ve kurumlar vergisi kaynaklı uyuşmazlıkların da sık görülmesine yol açmaktadır.",
    ],
    faqs: [
      { question: "Vergi/ceza ihbarnamesine ne kadar sürede itiraz edilmeli?", answer: "Tebliğ tarihinden itibaren 30 günlük süre içinde dava açılmalıdır." },
      { question: "Uzlaşma görüşmesi nasıl talep edilir?", answer: "Tarhiyat sonrası öngörülen süre içinde ilgili vergi dairesine yazılı başvuru yapılır." },
      { question: "Uzlaşma sağlanamazsa dava hakkı kaybedilir mi?", answer: "Hayır, kalan dava açma süresi içinde vergi mahkemesine başvurulabilir." },
      { question: "Ödeme emrine karşı ne kadar sürede dava açılabilir?", answer: "Tebliğinden itibaren 15 gün içinde açılabilir." },
      { question: "Prodüksiyon sektöründe hangi vergi uyuşmazlıkları öne çıkar?", answer: "Hizmet bedeli faturalandırması ve KDV iadesine ilişkin incelemeler sıkça gündeme gelmektedir." },
    ],
    howToTitle: "Kağıthane'de Vergi İtirazı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Değerlendirme", text: "İhbarnamenin dayanağı ve hesaplama yöntemi incelenir." },
      { name: "Strateji Belirleme", text: "Uzlaşma mı yoksa dava mı açılacağına karar verilir." },
      { name: "Başvurunun Yapılması", text: "Seçilen yola göre vergi dairesine veya mahkemeye başvurulur." },
      { name: "Sonuç", text: "Uzlaşma tutanağı veya mahkeme kararıyla süreç tamamlanır." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "kagithane-borclar-hukuku-avukati",
    name: "Kağıthane Borçlar Hukuku Avukatı",
    heroTitle: "Kağıthane Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Sözleşme uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; ticaret ve asliye hukuk mahkemeleri İstanbul (Çağlayan) Adliyesi'ndedir.",
    metaTitle: "Kağıthane Borçlar Hukuku Avukatı",
    metaDescription:
      "Kağıthane'de sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Borçlar hukuku kapsamında sözleşme ve alacak uyuşmazlıklarında danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil ile kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Sözleşme Uyuşmazlıkları", description: "İfa, ihlal ve fesih kaynaklı süreçlerin yürütülmesi." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Prodüksiyon Sözleşmeleri", description: "Yapım ve hizmet sözleşmelerinden doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sözleşmenin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Prodüksiyon ve tedarik sözleşmelerinden doğan uyuşmazlıklar",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Kağıthane'deki medya/prodüksiyon şirketleri ile sanayi bölgesindeki işletmeler arasında kurulan tedarik, hizmet ve yapım sözleşmelerinden doğan uyuşmazlıklar, ilçede sık karşılaşılan bir dava türüdür; bu uyuşmazlıklara niteliğine göre asliye hukuk veya ticaret mahkemelerinde bakılır.",
      "Bu davalar İstanbul (Çağlayan) Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Yapım şirketi teslimatı geciktirirse ne talep edilebilir?", answer: "Gecikme tazminatı istenebilir, süre makul ölçüyü aşarsa sözleşmeden dönülebilir." },
      { question: "Prodüksiyon sözleşmelerinde telif hakları nasıl düzenlenir?", answer: "Taraflar arasındaki sözleşmede açıkça belirtilmesi gerekir, aksi halde genel hükümler uygulanır." },
      { question: "Sanayi bölgesindeki tedarik uyuşmazlığı hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde görülür." },
      { question: "Fatura itirazı ne zaman yapılmalı?", answer: "Faturanın tebliğinden itibaren makul sürede itiraz edilmesi gerekir." },
      { question: "Sebepsiz zenginleşme davası ne zaman açılır?", answer: "Haklı bir sebep olmaksızın başkasının malvarlığından yararlanılması halinde açılabilir." },
    ],
    howToTitle: "Kağıthane'de Alacak Davası Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Sözleşmenin İncelenmesi", text: "Yapım/tedarik sözleşmesinin hükümleri değerlendirilir." },
      { name: "İhtar Süreci", text: "Gerekirse borçluya ihtarname gönderilir." },
      { name: "Başvuru", text: "Arabuluculuk veya dava yoluyla süreç ilerletilir." },
      { name: "Tahsilat", text: "Kesinleşen alacak icra yoluyla tahsil edilir." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];

export const kagithaneServices: PseoService[] = [...kagithaneBaseServices, kagithaneMiras];
