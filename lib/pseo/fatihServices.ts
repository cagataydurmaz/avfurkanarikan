import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const fatihServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "fatih-avukat",
    name: "Fatih Avukat",
    heroTitle: "Fatih Avukat",
    heroSubtitle:
      "Fatih'te ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında temsil sağlayan bir hukuk bürosudur; ilçe İstanbul (Çağlayan) Adliyesi'nin yargı çevresindedir.",
    metaTitle: "Fatih Avukat",
    metaDescription:
      "Fatih'te ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında avukatlık ve danışmanlık hizmeti sunulmaktadır.",
    aboutParagraph:
      "Fatih'te hukuki destek arayan müvekkillere danışmanlık sağlayan avukat Furkan Arıkan (İstanbul Barosu, Sicil No: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019), ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında görev almaktadır. Randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka süreçlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Tapu, kira ve tahliye uyuşmazlıklarının takibi." },
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
      "Tapu, kat mülkiyeti ve kira ilişkilerinde gayrimenkul hukuku desteği",
      "İşe iade ve tazminat taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "Sultanahmet, Süleymaniye, Fener ve Balat gibi UNESCO Dünya Mirası listesinde yer alan tarihi dokuya sahip mahalleleriyle Fatih, İstanbul'un en eski ve en yoğun nüfuslu ilçelerinden biridir. Aksaray ve Kumkapı çevresindeki yoğun ticari ve turistik hareketlilik de ilçenin hukuki gündemini şekillendiren unsurlar arasındadır.",
      "Fatih'te yaşayan veya faaliyet gösterenlerin hukuki uyuşmazlıkları İstanbul (Çağlayan) Adliyesi'nde, vergisel işlemleri ise Fatih Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Fatih'teki davalara hangi adliye bakıyor?", answer: "Fatih, İstanbul (Çağlayan) Adliyesi'nin yargı çevresinde yer almaktadır." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Fatih'te mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Fatih'teki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Tarihi dokuya sahip binalarla ilgili hukuki destek var mı?", answer: "Evet, korunması gerekli taşınmaz kültür varlığı statüsündeki yapılara ilişkin uyuşmazlıklarda gayrimenkul hukuku kapsamında destek sağlanır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Çağlayan Adliyesi'ne Fatih'ten ulaşım nasıl?", answer: "T1 tramvay hattı ve Yenikapı aktarma merkezi üzerinden ulaşım sağlanabilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır." },
    ],
    howToTitle: "Fatih'te Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Fatih Avukat (Genel)",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "kidem-tazminati-hesaplama-2026", "icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "fatih-bosanma-avukati",
    name: "Fatih Boşanma Avukatı",
    heroTitle: "Fatih Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma davalarında velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; davalar İstanbul (Çağlayan) Adliyesi'nde görülür.",
    metaTitle: "Fatih Boşanma Avukatı",
    metaDescription:
      "Fatih'te anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Aile hukuku alanında boşanma, velayet ve nafaka dosyalarında Fatih'teki müvekkillerine temsil sağlayan avukat Furkan Arıkan (İstanbul Barosu, Sicil No: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019), süreci baştan sona takip etmektedir.",
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
      "Fatih, hem köklü aile yapılarının hem de yoğun göç ve nüfus hareketliliğinin bir arada görüldüğü bir ilçedir; bu çeşitlilik boşanma dosyalarında velayet ve nafaka taleplerinin niteliğini de etkileyebilmektedir.",
      "İlçede açılan boşanma, velayet ve nafaka davaları İstanbul (Çağlayan) Adliyesi'ndeki aile mahkemelerinde görülür. Anlaşmalı süreçte protokolün eksiksizliği, çekişmeli süreçte ise iddiaların somut delille desteklenmesi belirleyicidir.",
    ],
    faqs: [
      { question: "Fatih'te boşanma davası hangi mahkemede görülür?", answer: "İstanbul (Çağlayan) Adliyesi bünyesindeki aile mahkemelerinde görülür." },
      { question: "Anlaşmalı boşanma protokolü neleri kapsamalı?", answer: "Velayet, nafaka, mal rejimi ve varsa tazminata ilişkin tüm hususları eksiksiz düzenlemelidir." },
      { question: "Kusur iddiaları nasıl ispatlanır?", answer: "Tanık ifadeleri, yazışmalar ve mali belgeler gibi somut delillerle desteklenmelidir." },
      { question: "Velayet kararında esas alınan kriter nedir?", answer: "Mahkeme, çocuğun üstün yararını esas alarak ebeveynlerin durumunu değerlendirir." },
      { question: "Nafaka miktarı sabit midir?", answer: "Hayır, ekonomik koşullardaki değişiklik nafakanın yeniden belirlenmesini gerektirebilir." },
      { question: "Dava sürerken nafaka talep edilebilir mi?", answer: "Evet, ihtiyaç sahibi taraf lehine tedbir nafakasına hükmedilebilir." },
    ],
    howToTitle: "Fatih'te Boşanma Süreci Hangi Aşamalardan Oluşur?",
    howToSteps: [
      { name: "Ön Değerlendirme", text: "Evlilik birliğinin durumu ve talepler netleştirilir." },
      { name: "Belge Hazırlığı", text: "Duruma göre dava dilekçesi veya protokol hazırlanır." },
      { name: "Mahkemeye Başvuru", text: "Yetkili aile mahkemesine başvurularak duruşma günü beklenir." },
      { name: "Duruşma", text: "Taraflar dinlenir, gerekli değerlendirmeler yapılır." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "bosanmada-nafaka-turleri"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "fatih-ceza-avukati",
    name: "Fatih Ceza Avukatı",
    heroTitle: "Fatih Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma aşamalarının her birinde müdafilik hizmeti sunulur; kovuşturma İstanbul (Çağlayan) Adliyesi'nde yürütülür.",
    metaTitle: "Fatih Ceza Avukatı",
    metaDescription:
      "Fatih'te soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Ceza yargılamasının her aşamasında Fatih'teki müvekkillerine müdafilik yapan avukat Furkan Arıkan (İstanbul Barosu, Sicil No: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019), gözaltı, soruşturma, kovuşturma ve kanun yolu süreçlerinin tamamında hazır bulunmaktadır.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Kanun Yolları", description: "İstinaf ve temyiz süreçlerinin yürütülmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltına alınan şüpheliye ifade öncesi hukuki destek sağlanması",
      "Soruşturma dosyasındaki delillerin incelenmesi",
      "Tutuklama talebine ve tutukluluğun devamına itiraz edilmesi",
      "Duruşmalara katılım ve savunmanın hazırlanması",
      "İstinaf ve temyiz başvurularının yapılması",
      "Uzlaştırma ve etkin pişmanlık imkanlarının değerlendirilmesi",
    ],
    localParagraphs: [
      "Aksaray, Kumkapı ve Yenikapı çevresindeki yoğun nüfus hareketliliği ile turistik alanlardaki (Sultanahmet, Süleymaniye) kalabalık, Fatih'te kolluk müdahalesi gerektiren olayların görece sık yaşanmasına zemin hazırlayabilmektedir. Kovuşturma aşamasındaki davalar İstanbul (Çağlayan) Adliyesi'nde görülür.",
      "Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar; bu hakkın zamanında kullanılması, sonraki aşamaların seyri açısından belirleyicidir.",
    ],
    faqs: [
      { question: "Fatih'te işlenen bir suçun kovuşturması nerede yapılır?", answer: "İstanbul (Çağlayan) Adliyesi'nde yürütülür." },
      { question: "Şüpheli ifade vermeden önce avukatla görüşebilir mi?", answer: "Evet, gözaltı süresince müdafi ile görüşme hakkı vardır." },
      { question: "Tutukluluk kararına karşı hangi yola başvurulur?", answer: "Ağır ceza mahkemesine itiraz edilebilir." },
      { question: "Ceza davalarında avukat tutmak şart mı?", answer: "Belirli suç tiplerinde zorunlu, diğerlerinde tercihe bağlıdır." },
      { question: "Uzlaşma teklifini reddetmek mümkün mü?", answer: "Evet, taraflardan biri kabul etmezse süreç normal yargılamaya döner." },
      { question: "İstinaf başvurusu ne zaman yapılmalı?", answer: "Kararın tebliğinden itibaren yasal süre içinde yapılmalıdır." },
    ],
    howToTitle: "Fatih'te Ceza Yargılaması Nasıl İlerler?",
    howToSteps: [
      { name: "İhbar/Şikayet", text: "Savcılık soruşturmaya başlar." },
      { name: "İfade Süreci", text: "Şüpheli, müdafi eşliğinde ifade verebilir." },
      { name: "Kovuşturma", text: "İddianame kabul edilirse dava açılır." },
      { name: "Sonuç ve İtiraz", text: "Karar sonrası istinaf veya temyiz yoluna gidilebilir." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "fatih-gayrimenkul-avukati",
    name: "Fatih Gayrimenkul Avukatı",
    heroTitle: "Fatih Gayrimenkul Avukatı",
    heroSubtitle:
      "Tarihi doku koruma, tapu uyuşmazlıkları ve kira ilişkilerinde hukuki destek sağlanır; davalar İstanbul (Çağlayan) Adliyesi'nde görülür.",
    metaTitle: "Fatih Gayrimenkul Avukatı",
    metaDescription:
      "Fatih'te tapu iptali, korunması gerekli yapılar ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Tapu, kat mülkiyeti ve tescilli yapılara ilişkin uyuşmazlıklarda Fatih'teki müvekkillerine danışmanlık veren avukat Furkan Arıkan (İstanbul Barosu, Sicil No: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019), gayrimenkul hukuku kapsamında dava ve danışmanlık hizmeti sunmaktadır.",
    highlightCards: [
      { title: "Tarihi Yapılar", description: "Korunması gerekli taşınmaz kültür varlıklarına ilişkin süreçler." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Kat Mülkiyeti", description: "Yönetim planı ve ortak gider anlaşmazlıkları." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Korunması gerekli taşınmaz kültür varlığı statüsündeki yapılarda hukuki danışmanlık",
      "Tapu iptali ve tescil davalarının açılması",
      "Kat mülkiyeti ve yönetim planından doğan uyuşmazlıklar",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
      "Ortaklığın giderilmesi (izale-i şüyu) davaları",
    ],
    localParagraphs: [
      "Sultanahmet, Süleymaniye, Fener ve Balat gibi UNESCO listesindeki mahallelerde çok sayıda tescilli tarihi yapı bulunması, Fatih'te gayrimenkul işlemlerini koruma kurulu kararlarıyla iç içe bir hale getirmektedir; bu uyuşmazlıklar İstanbul (Çağlayan) Adliyesi'ndeki sulh hukuk ve asliye hukuk mahkemelerinde görülür.",
      "Aksaray ve Kumkapı çevresindeki yoğun ticari doku, işyeri niteliğindeki taşınmazlara ilişkin kira ve kullanım uyuşmazlıklarının da sık gündeme gelmesine yol açmaktadır.",
    ],
    faqs: [
      { question: "Tescilli bir yapıda tadilat yapmak için ne gerekir?", answer: "İlgili koruma kurulundan izin alınması gerekir; izinsiz müdahaleler idari ve hukuki yaptırımlara yol açabilir." },
      { question: "Fatih'te gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir." },
      { question: "Ortak gider anlaşmazlıkları nasıl çözülür?", answer: "Öncelikle yönetim planı ve Kat Mülkiyeti Kanunu esas alınır, çözülemezse dava açılabilir." },
      { question: "Eski bir binada satış öncesi neye dikkat edilmeli?", answer: "Tapu kaydı, tescilli yapı statüsü ve varsa kısıtlamaların önceden incelenmesi önerilir." },
    ],
    howToTitle: "Fatih'te Tapu İptali Süreci Nasıl İlerler?",
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
    urlSlug: "fatih-icra-avukati",
    name: "Fatih İcra Avukatı",
    heroTitle: "Fatih İcra Avukatı",
    heroSubtitle:
      "Alacak tahsili amacıyla icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır; icra mahkemeleri İstanbul (Çağlayan) Adliyesi'ndedir.",
    metaTitle: "Fatih İcra Avukatı",
    metaDescription:
      "Fatih'te icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İcra ve iflas hukuku kapsamında Fatih'teki alacaklı ve borçlu taraflara danışmanlık veren avukat Furkan Arıkan (İstanbul Barosu, Sicil No: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019), takip sürecinin her aşamasında temsil sağlamaktadır.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Ticari alacaklar için ilamlı/ilamsız icra takibi açılması",
      "Borca veya imzaya itiraz dilekçelerinin sunulması",
      "İtirazın iptali davasıyla takibin sürdürülmesi",
      "Taşınır/taşınmaz mal üzerine haciz konulması",
      "İhale ve satışa ilişkin hukuki takip",
      "Konkordato ve iflas süreçlerinde danışmanlık",
    ],
    localParagraphs: [
      "Aksaray ve çevresindeki yoğun toptan/perakende ticaret faaliyeti, Fatih'te ticari alacaklara ilişkin icra takiplerinin sık başvurulan bir yol olmasına yol açmaktadır; bu takiplere ilişkin uyuşmazlıklar İstanbul (Çağlayan) Adliyesi'ndeki icra mahkemelerinde görülür.",
      "Borçlunun Fatih'te yerleşik olduğu takiplerde yetkili icra dairesi, kural olarak borçlunun ikametgahı veya sözleşmede belirlenen yer esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "Fatih'te açılan icra takiplerine kim bakar?", answer: "İstanbul (Çağlayan) Adliyesi bünyesindeki icra müdürlükleri ve mahkemeleri bakar." },
      { question: "Borca itiraz süresi kaç gündür?", answer: "Ödeme emrinin tebliğinden itibaren 7 gündür." },
      { question: "İtirazın iptali davası hangi sürede açılmalı?", answer: "İtirazın tebliğinden itibaren bir yıl içinde açılabilir." },
      { question: "Haciz işlemine itiraz nasıl yapılır?", answer: "İcra mahkemesine şikayet yoluyla itiraz edilebilir." },
      { question: "Borçlu taahhüdünü yerine getirmezse ne olur?", answer: "Taahhüdü ihlal suçu oluşabilir ve haciz işlemlerine devam edilir." },
    ],
    howToTitle: "Fatih'te İcra Takibi Hangi Aşamalardan Oluşur?",
    howToSteps: [
      { name: "Dosya Hazırlığı", text: "Alacağı gösteren belge veya ilam derlenir." },
      { name: "Başvuru", text: "İcra dairesine takip talebiyle başvurulur." },
      { name: "Tebligat Süreci", text: "Borçluya ödeme emri gönderilir." },
      { name: "Haciz/Satış", text: "Süreç sonunda haciz ve satış işlemleri yürütülür." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "fatih-idare-avukati",
    name: "Fatih İdare Avukatı",
    heroTitle: "Fatih İdare Avukatı",
    heroSubtitle:
      "Belediye ve koruma kurulu işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Fatih İdare Avukatı",
    metaDescription:
      "Fatih'te idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "İdari işlemlerin iptali ve tam yargı davalarında Fatih'teki müvekkillerine danışmanlık veren avukat Furkan Arıkan (İstanbul Barosu, Sicil No: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019), idare hukuku kapsamında temsil sağlamaktadır.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Koruma Kurulu Kararları", description: "Tescilli yapılara ilişkin idari işlemlere itiraz." },
      { title: "Tam Yargı Davaları", description: "İdarenin işlem/eyleminden doğan zararın tazmini." },
      { title: "Belediye İşlemleri", description: "İmar, ruhsat ve ceza kararlarına ilişkin uyuşmazlıklar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Koruma kurulu kararlarına karşı dava açılması",
      "Belediye ruhsat ve imar işlemlerine itiraz edilmesi",
      "İdarenin eylem veya işleminden doğan zararlar için tam yargı davası",
      "İdari para cezalarının iptali için başvuru yapılması",
      "Yürütmenin durdurulması taleplerinin hazırlanması",
      "Kamu görevlileri özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Fatih'in önemli bir bölümünün sit alanı statüsünde olması, belediye ve koruma kurulu kararlarını idari yargı açısından sık gündeme gelen bir konu haline getirmektedir; bu davalar İstanbul idare mahkemelerinde görülür.",
      "Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür; Aksaray ve çevresindeki işletmelere yönelik idari para cezaları da bu kapsamda değerlendirilebilir.",
    ],
    faqs: [
      { question: "Fatih'te idari dava açma süresi ne kadardır?", answer: "Tebliğden itibaren 60 gün olarak uygulanır." },
      { question: "Koruma kurulu kararına itiraz edilebilir mi?", answer: "Evet, idari yargı yoluna başvurularak itiraz edilebilir." },
      { question: "Ruhsat iptali kararına karşı ne yapılabilir?", answer: "İdare mahkemesinde dava açılabilir." },
      { question: "Yürütmenin durdurulması hangi hallerde istenir?", answer: "Telafisi imkansız zarar riski varsa talep edilir." },
      { question: "Tazminat davası açma süresi var mı?", answer: "Zamanaşımı süreleri kanunda belirtilmiştir, dosyaya göre değişebilir." },
    ],
    howToTitle: "Fatih'te İdari İptal Davası Nasıl Açılır?",
    howToSteps: [
      { name: "Kararın Tespiti", text: "İptali istenen idari işlem belirlenir." },
      { name: "Sürenin Hesaplanması", text: "Yasal başvuru süresi kontrol edilir." },
      { name: "Dilekçenin Sunulması", text: "Gerekçeli dilekçe idare mahkemesine sunulur." },
      { name: "Mahkeme Süreci", text: "Dosya incelenir, karar verilir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "fatih-is-hukuku-avukati",
    name: "Fatih İş Hukuku Avukatı",
    heroTitle: "Fatih İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul (Çağlayan) Adliyesi bünyesindedir.",
    metaTitle: "Fatih İş Hukuku Avukatı",
    metaDescription:
      "Fatih'te kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İş hukuku kapsamında Fatih'teki işçi ve işverenlere danışmanlık veren avukat Furkan Arıkan (İstanbul Barosu, Sicil No: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019), tazminat ve işe iade süreçlerinde temsil sağlamaktadır.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Perakende/Tekstil Sektörü", description: "Aksaray çevresindeki ticari işletme çalışanlarının uyuşmazlıkları." },
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
      "Aksaray ve Laleli çevresindeki yoğun toptan ticaret ve tekstil sektörü işletmeleri, Fatih'te önemli bir istihdam alanı oluşturmaktadır. Bu sektörlerdeki iş sözleşmesi uyuşmazlıkları da diğer iş davaları gibi önce zorunlu arabuluculuk sürecinden geçer.",
      "Anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul (Çağlayan) Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Fatih'te iş uyuşmazlıkları hangi mahkemede görülür?", answer: "İstanbul (Çağlayan) Adliyesi bünyesindeki iş mahkemelerinde görülür." },
      { question: "Arabuluculuğa başvurmadan doğrudan dava açılabilir mi?", answer: "Hayır, işe iade ve çoğu işçilik alacağında arabuluculuk dava şartıdır." },
      { question: "Toptan ticaret sektöründe sık görülen uyuşmazlık nedir?", answer: "Fazla mesai ve prim alacaklarının ispatı sıkça gündeme gelmektedir." },
      { question: "İhbar tazminatı hangi hallerde ödenmez?", answer: "İşçinin haklı sebep olmaksızın istifa ettiği hallerde işveren ihbar tazminatı ödemez." },
      { question: "İş sözleşmesi ile ibraname arasındaki fark nedir?", answer: "Sözleşme çalışma koşullarını, ibraname ise ilişkinin sona ermesinde tarafların ibra beyanını düzenler." },
    ],
    howToTitle: "Fatih'te İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Sözleşmenin Değerlendirilmesi", text: "Feshin şekli ve gerekçesi incelenir." },
      { name: "Arabulucuya Başvuru", text: "Yasal süre içinde arabuluculuk başvurusu yapılır." },
      { name: "Dava Süreci", text: "Anlaşma sağlanamazsa iş mahkemesine başvurulur." },
      { name: "Sonuçlanma", text: "Mahkeme kararıyla süreç tamamlanır." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "ise-iade-davasi"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "fatih-kira-tahliye-avukati",
    name: "Fatih Kira ve Tahliye Avukatı",
    heroTitle: "Fatih Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemeleri İstanbul (Çağlayan) Adliyesi'ndedir.",
    metaTitle: "Fatih Kira ve Tahliye Avukatı",
    metaDescription:
      "Fatih'te kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kira hukuku alanında Fatih'teki kiraya verenlere ve kiracılara danışmanlık veren avukat Furkan Arıkan (İstanbul Barosu, Sicil No: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019), tahliye ve kira bedeli uyuşmazlıklarında temsil sağlamaktadır.",
    highlightCards: [
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "İşyeri Kiraları", description: "Aksaray/Laleli çevresindeki ticari kira uyuşmazlıkları." },
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
      "Fatih'te konut kiralarının yanı sıra Aksaray ve Laleli çevresinde işyeri, depo ve otel niteliğindeki taşınmazlara ilişkin kira uyuşmazlıkları da önemli bir yer tutar. Bu uyuşmazlıklarda taşınmazın bulunduğu yer sulh hukuk mahkemesi görevlidir.",
      "Bu davalara İstanbul (Çağlayan) Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır; tescilli yapılarda kullanım ve tadilat kısıtlamaları da sözleşme öncesi değerlendirilmelidir.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Fatih'te tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Tescilli bir binada kiracı olarak tadilat yapılabilir mi?", answer: "Koruma kurulu izni olmadan yapısal değişiklik yapılamaz." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
    ],
    howToTitle: "Fatih'te Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "fatih-vergi-avukati",
    name: "Fatih Vergi Avukatı",
    heroTitle: "Fatih Vergi Avukatı",
    heroSubtitle:
      "Vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Fatih Vergi Avukatı",
    metaDescription:
      "Fatih'te vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Fatih'teki müvekkillerine danışmanlık veren avukat Furkan Arıkan (İstanbul Barosu, Sicil No: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019), uzlaşma ve dava süreçlerinde temsil sağlamaktadır.",
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
      "Fatih'te mükellefiyeti bulunanların vergisel işlemleri Fatih Vergi Dairesi Müdürlüğü tarafından yürütülür; bu daireye ait tarhiyat ve ceza kararlarına karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir.",
      "Aksaray ve Laleli çevresindeki yoğun toptan ticaret ve turizm faaliyeti, KDV ve kurumlar vergisi kaynaklı uyuşmazlıkların da sık görülmesine yol açmaktadır.",
    ],
    faqs: [
      { question: "Vergi tarhiyatına karşı dava süresi ne kadardır?", answer: "İhbarnamenin tebliğinden itibaren 30 gündür." },
      { question: "Vergi mahkemesi başvurusu nasıl yapılır?", answer: "Süresi içinde dilekçe ile İstanbul vergi mahkemelerine başvurulur." },
      { question: "Uzlaşma talebi reddedilirse ne olur?", answer: "Kalan dava açma süresi içinde mahkemeye başvurma hakkı devam eder." },
      { question: "Ödeme emrine itiraz için süre nedir?", answer: "Tebliğinden itibaren 15 gündür." },
      { question: "Toptan ticaret sektöründe hangi vergi uyuşmazlıkları öne çıkar?", answer: "Sahte veya muhteviyatı itibarıyla yanıltıcı belge iddiaları ve KDV incelemeleri sıkça gündeme gelmektedir." },
    ],
    howToTitle: "Fatih'te Vergi İtirazı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "İhbarname İncelemesi", text: "Tarhiyatın dayanağı ve hesaplama şekli değerlendirilir." },
      { name: "Yöntem Seçimi", text: "Uzlaşma veya doğrudan dava seçeneği belirlenir." },
      { name: "Başvurunun Yapılması", text: "İlgili vergi dairesine veya mahkemeye süresinde başvurulur." },
      { name: "Sonuç", text: "Süreç, karar veya uzlaşma tutanağıyla tamamlanır." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: [],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "fatih-borclar-hukuku-avukati",
    name: "Fatih Borçlar Hukuku Avukatı",
    heroTitle: "Fatih Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Sözleşme uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; ticaret ve asliye hukuk mahkemeleri İstanbul (Çağlayan) Adliyesi'ndedir.",
    metaTitle: "Fatih Borçlar Hukuku Avukatı",
    metaDescription:
      "Fatih'te sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Borçlar hukuku kapsamında Fatih'teki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık veren avukat Furkan Arıkan (İstanbul Barosu, Sicil No: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019), dava ve icra süreçlerinde temsil sağlamaktadır.",
    highlightCards: [
      { title: "Sözleşme Uyuşmazlıkları", description: "İfa, ihlal ve fesih kaynaklı süreçlerin yürütülmesi." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Toptan Ticaret Sözleşmeleri", description: "Aksaray/Laleli çevresindeki tedarik sözleşmesi uyuşmazlıkları." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Sözleşmenin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Toptan ticaret ve tedarik sözleşmelerinden doğan uyuşmazlıklar",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Aksaray ve Laleli çevresindeki toptan tekstil ve turizm sektörü işletmeleri arasında kurulan tedarik ve hizmet sözleşmelerinden doğan uyuşmazlıklar, Fatih'te sık karşılaşılan bir dava türüdür; bu uyuşmazlıklara niteliğine göre asliye hukuk veya ticaret mahkemelerinde bakılır.",
      "Bu davalar İstanbul (Çağlayan) Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Fatih'te toptan ticaret sözleşmesi uyuşmazlığı nereye açılır?", answer: "Niteliğine göre asliye ticaret veya asliye hukuk mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde açılır." },
      { question: "Ayıplı mal teslimi halinde alıcının hakları nelerdir?", answer: "Bedel indirimi, ücretsiz onarım, misli ile değişim veya sözleşmeden dönme talep edilebilir." },
      { question: "Cezai şart hükmü her sözleşmede geçerli mi?", answer: "Taraflarca kararlaştırılmışsa geçerlidir, aşırı olması halinde hakim tarafından indirilebilir." },
      { question: "Arabuluculuk hangi alacak türlerinde zorunludur?", answer: "Ticari nitelikteki belirli para alacaklarında dava şartı olarak aranır." },
      { question: "Faturaya süresinde itiraz edilmezse ne olur?", answer: "Kabul edilmiş sayılabilir, bu durum ispat açısından karşı taraf lehine olabilir." },
    ],
    howToTitle: "Fatih'te Alacak Davası Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Belge Toplama", text: "Sözleşme, sipariş formu ve faturalar bir araya getirilir." },
      { name: "İhtar", text: "Gerekiyorsa borçluya ihtarname gönderilir." },
      { name: "Dava/Arabuluculuk", text: "Duruma göre arabulucuya başvurulur veya doğrudan dava açılır." },
      { name: "Tahsilat", text: "Kesinleşen alacak icra yoluyla tahsil edilir." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];
