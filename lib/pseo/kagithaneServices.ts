import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const kagithaneServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "kagithane-avukat",
    name: "Kağıthane Avukat",
    heroTitle: "Kağıthane Avukat",
    heroSubtitle:
      "Kağıthane'de yaşayan veya işyeri bulunan müvekkillere ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık verilir; ilçe İstanbul (Çağlayan) Adliyesi'ne bağlıdır.",
    metaTitle: "Kağıthane Avukat",
    metaDescription:
      "Kağıthane'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Avukat Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sağlamaktadır; randevu talebi WhatsApp veya telefon yoluyla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Gözaltından kanun yolu aşamasına kadar müdafilik hizmeti." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka konularında temsil." },
      { title: "Gayrimenkul Hukuku", description: "Tapu, kira ve tahliye uyuşmazlıklarının yürütülmesi." },
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
      "Tapu, kat mülkiyeti ve kira ilişkilerinde gayrimenkul hukuku hizmeti",
      "Tazminat ve işe iade süreçlerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı idare hukuku kapsamında dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme ve tazminat taleplerinde borçlar hukuku desteği",
    ],
    localParagraphs: [
      "Kağıthane, televizyon ve dizi yapım şirketlerinin, stüdyoların yoğunlaştığı bir medya merkezi olmasının yanı sıra Sanayi Mahallesi başta olmak üzere lojistik ve küçük ölçekli üretim tesislerinin de bulunduğu, İstanbul'un karma karakterli ilçelerinden biridir. Gültepe ve Nurtepe gibi mahallelerde kentsel dönüşüm projeleri sürmektedir.",
      "İlçede yaşayan veya faaliyet gösteren kişilerin hukuki uyuşmazlıkları İstanbul (Çağlayan) Adliyesi'ndeki mahkemelerde, vergisel işlemleri ise Kağıthane Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Kağıthane'deki davalara hangi adliye bakar?", answer: "Kağıthane, İstanbul (Çağlayan) Adliyesi'nin yargı çevresi içinde yer almaktadır." },
      { question: "Görüşme talebi nasıl oluşturulur?", answer: "WhatsApp veya telefon aracılığıyla ulaşılarak randevu günü kararlaştırılır." },
      { question: "Hizmet kapsamına hangi hukuk dalları giriyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında temsil sağlanmaktadır." },
      { question: "Bürosu Kağıthane'de mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'da yer almaktadır; Kağıthane'deki müvekkiller de aynı kapsamda hizmet almaktadır." },
      { question: "Görüşme ücreti nasıl belirleniyor?", answer: "Dosyanın kapsamına göre değişir ve randevu sırasında netleştirilir." },
      { question: "Medya/yapım şirketleriyle ilgili sözleşme uyuşmazlıklarında destek var mı?", answer: "Evet, ticari sözleşme ve telif kaynaklı uyuşmazlıklarda borçlar hukuku kapsamında danışmanlık sağlanır." },
      { question: "Görüşmeler uzaktan yapılabiliyor mu?", answer: "Evet, tercihe göre yüz yüze veya görüntülü/sesli olarak planlanabilir." },
      { question: "Çağlayan Adalet Sarayı'na Kağıthane'den ulaşım nasıl?", answer: "M7 hattının Kağıthane istasyonu ve çevresindeki otobüs seferleriyle ulaşım sağlanabilir." },
      { question: "Acil bir tutuklama veya gözaltı durumunda ne yapmalı?", answer: "Vakit kaybetmeden telefon ya da WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Dosyanın seyri hakkında bilgi almak mümkün mü?", answer: "Evet, süreç boyunca gelişmeler düzenli olarak müvekkille paylaşılır." },
    ],
    howToTitle: "Kağıthane'de Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
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
    metaTitle: "Kağıthane Boşanma Avukatı",
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
      { question: "Kağıthane'de boşanma davası nereye açılır?", answer: "İstanbul (Çağlayan) Adliyesi bünyesindeki aile mahkemelerine açılır." },
      { question: "Anlaşmalı boşanmada protokol neyi içermeli?", answer: "Velayet, nafaka, mal rejimi ve varsa tazminata ilişkin tüm hususları eksiksiz düzenlemelidir." },
      { question: "Kusur iddiaları nasıl kanıtlanır?", answer: "Tanık ifadeleri, yazışma kayıtları ve mali belgeler gibi somut delillerle desteklenmelidir." },
      { question: "Velayet hangi esasa göre belirlenir?", answer: "Belirleyici ölçüt çocuğun üstün yararıdır; mahkeme tarafların fiili durumunu buna göre değerlendirir." },
      { question: "Nafaka sonradan değişebilir mi?", answer: "Evet, tarafların ekonomik koşullarındaki değişim nafakanın yeniden belirlenmesini gerektirebilir." },
      { question: "Dava sürerken nafaka talep edilebilir mi?", answer: "Evet, ihtiyaç duyan taraf lehine tedbir nafakasına hükmedilebilir." },
    ],
    howToTitle: "Kağıthane'de Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "kagithane-ceza-avukati",
    name: "Kağıthane Ceza Avukatı",
    heroTitle: "Kağıthane Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; kovuşturma İstanbul (Çağlayan) Adliyesi'nde yürütülür.",
    metaTitle: "Kağıthane Ceza Avukatı",
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
    metaTitle: "Kağıthane Gayrimenkul Avukatı",
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
    metaTitle: "Kağıthane İcra Avukatı",
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
      "İlamlı veya ilamsız icra takibinin başlatılması",
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
    metaTitle: "Kağıthane İdare Avukatı",
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
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul (Çağlayan) Adliyesi bünyesindedir.",
    metaTitle: "Kağıthane İş Hukuku Avukatı",
    metaDescription:
      "Kağıthane'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İş hukuku kapsamında hem işçi hem işveren tarafını temsil eden Furkan Arıkan, İstanbul Barosu'na 72621 sicil ile kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Medya/Prodüksiyon Sektörü", description: "Set ve prodüksiyon çalışanlarının iş sözleşmesi uyuşmazlıkları." },
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
      "Kağıthane'de televizyon ve dizi yapımcılığı sektöründe faaliyet gösteren çok sayıda stüdyo ve prodüksiyon şirketi bulunması, bu sektörde çalışanların iş sözleşmesi ve ücret uyuşmazlıklarının da ayrı bir önem kazanmasına yol açmaktadır. Bu uyuşmazlıklar da diğer iş davaları gibi önce zorunlu arabuluculuk sürecinden geçer.",
      "Anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul (Çağlayan) Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "İşe iade davasından önce ne yapılmalı?", answer: "Fesihten itibaren 1 ay içinde arabulucuya başvurulması zorunludur." },
      { question: "Kıdem tazminatı hangi hallerde doğar?", answer: "İşverenin haksız feshi, işçinin haklı sebeple istifası ve emeklilik gibi kanunda sayılan hallerde doğar." },
      { question: "Kağıthane'de iş davası hangi mahkemede görülür?", answer: "İstanbul (Çağlayan) Adliyesi bünyesindeki iş mahkemelerinde görülür." },
      { question: "Prodüksiyon sektöründe çalışanların hakları farklı mı?", answer: "Temel işçilik hakları aynıdır; ancak proje bazlı çalışma düzeni ispat aşamasında farklı deliller gerektirebilir." },
      { question: "İşçilik alacaklarında zamanaşımı süresi nedir?", answer: "Çoğu işçilik alacağında 5 yıllık zamanaşımı süresi uygulanır." },
    ],
    howToTitle: "Kağıthane'de İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "kagithane-kira-tahliye-avukati",
    name: "Kağıthane Kira ve Tahliye Avukatı",
    heroTitle: "Kağıthane Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemeleri İstanbul (Çağlayan) Adliyesi'ndedir.",
    metaTitle: "Kağıthane Kira ve Tahliye Avukatı",
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
    metaTitle: "Kağıthane Vergi Avukatı",
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
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır." },
      { question: "Prodüksiyon sektöründe hangi vergi uyuşmazlıkları öne çıkar?", answer: "Hizmet bedeli faturalandırması ve KDV iadesine ilişkin incelemeler sıkça gündeme gelmektedir." },
    ],
    howToTitle: "Kağıthane'de Vergi İtirazı Süreci Nasıl İşler?",
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
      { question: "Sözleşmeden dönme ile fesih arasındaki fark nedir?", answer: "Dönme sözleşmeyi baştan itibaren, fesih ise ileriye dönük olarak sona erdirir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde görülür." },
      { question: "Prodüksiyon sözleşmesi uyuşmazlıklarında ilk adım nedir?", answer: "Öncelikle sözleşme hükümleri ve varsa cezai şart maddeleri incelenmelidir." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir." },
    ],
    howToTitle: "Kağıthane'de Alacak Davası Süreci Nasıl İşler?",
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
