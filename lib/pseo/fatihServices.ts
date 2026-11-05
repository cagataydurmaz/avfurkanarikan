import type { PseoService } from "./types";
import { fatihMiras } from "./miras/fatihMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const fatihBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "fatih-avukat",
    name: "Fatih Avukat",
    heroTitle: "Fatih Avukat",
    heroSubtitle:
      "Tarihi Yarımada'da Sultanahmet'ten Yedikule'ye uzanan mahallelerde yaşayan veya çalışan kişiler için iş, aile, ceza, icra, gayrimenkul, vergi, idare ve borçlar hukuku alanlarında danışma ve dava yürütme hizmeti sunulur. Fatih'teki dosyalar Çağlayan'daki İstanbul Adliyesi'nde yürür.",
    metaTitle: "Fatih Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Fatih'te ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında avukatlık ve danışmanlık hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı, MEF Üniversitesi Hukuk Fakültesi 2019 mezunu bir avukattır. Büronun adresi Beşiktaş/Sinanpaşa'dadır; Fatih'te Aksaray, Kumkapı, Balat veya Samatya çevresinde oturan, çalışan ya da taşınmaz sahibi olan kişilerle büroda veya internet üzerinden görüşülür. Randevu talebi WhatsApp ya da telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Kolluk ifadesinden duruşmaya kadar müdafilik ve itiraz yolları." },
      { title: "Aile Hukuku", description: "Boşanma, velayet, nafaka ve mal paylaşımı taleplerinin yürütülmesi." },
      { title: "Gayrimenkul Hukuku", description: "Tarihi dokudaki yapılarda tapu, kira ve korunması gerekli kültür varlığı kısıtları." },
      { title: "İş Hukuku", description: "Ticari ve turistik hareketliliğin yoğun olduğu bölgelerde işçilik alacakları." },
      { title: "İcra Hukuku", description: "Alacağın tahsili için takip başlatma ya da haksız takibe itiraz." },
      { title: "İdare Hukuku", description: "İmar, yapı ruhsatı ve koruma işlemlerine karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Fatih Vergi Dairesi kaynaklı tarhiyat ve ceza kararlarına itiraz." },
      { title: "Borçlar Hukuku", description: "Sözleşmeye aykırılık, ödünç ve alacak davalarında dava takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı, tutuklama ve kovuşturma süreçlerinde müdafilik ya da mağdur vekilliği",
      "Boşanma, velayet, nafaka ve mal rejimi taleplerinin takibi",
      "Korunması gerekli yapılar dahil tapu, kat mülkiyeti ve kira uyuşmazlıkları",
      "Esnaf ve ticarethane çalışanlarının işçilik alacağı ve işe iade talepleri",
      "İlamsız icra takibi, itiraz ve haciz aşamalarında temsil",
      "İmar ve yapı ruhsatı işlemlerine karşı idari dava süreçleri",
      "Vergi tarhiyatı, vergi ziyaı cezası ve ödeme emri itirazları",
      "Sözleşmeden doğan alacak, tazminat ve ödünç uyuşmazlıkları",
    ],
    localParagraphs: [
      "Sultanahmet, Süleymaniye, Fener ve Balat çevresindeki tarihi doku, Fatih'te mülkiyet ve yapı ilişkilerine ayrı bir boyut katar: korunması gerekli taşınmaz kültür varlıklarında onarım, kullanım ve devir işlemleri koruma mevzuatındaki kısıtlara bağlıdır. Aksaray ve Kumkapı'daki ticari yoğunluk ise kira, alacak ve çalışma ilişkilerine dair başvuruları çeşitlendirir.",
      "T1 tramvayı Sultanahmet, Aksaray ve Topkapı hattı boyunca, Yenikapı'daki M1/M2 ve Marmaray aktarma noktası ise ilçenin güney ucunda şehrin diğer bölgelerine geçişi kolaylaştırır. Fatih'teki davalar Çağlayan'da İstanbul Adliyesi'ne gider; vergi işlemleri ise Fatih Vergi Dairesi Müdürlüğü'nce yürütülür.",
    ],
    faqs: [
      { question: "Fatih'te doğan uyuşmazlıklara hangi adliye bakar?", answer: "Fatih'teki uyuşmazlıklar İstanbul (Çağlayan) Adliyesi'nin görev ve yetki alanına girer. Medeni, cezai ve icra nitelikli dosyalar Çağlayan'daki mahkeme ve dairelerde yürütülür; vergi uyuşmazlıkları vergi mahkemelerinde, idari işlemlere karşı açılan davalar ise idare mahkemelerinde incelenir. Başvuru yolu dosyanın niteliğine göre değişir." },
      { question: "Tarihi yapılara ilişkin uyuşmazlıklarda destek verilir mi?", answer: "Evet, korunması gerekli taşınmaz kültür varlığı niteliğindeki yapılara ilişkin uyuşmazlıklarda gayrimenkul hukuku kapsamında destek verilir. Onarım, kullanım değişikliği veya devir söz konusuysa tapudaki şerhler, ilgili kurul kararları ve ruhsat belgeleri incelenir; sonrasında tapu, kira ya da idari işlem iptali yollarından uygun olan değerlendirilir." },
      { question: "Aksaray ve Kumkapı'daki işletmeler ticari uyuşmazlıklarda destek alabilir mi?", answer: "Evet, ticari kira, alacak ve sözleşme uyuşmazlıklarında Aksaray ve Kumkapı gibi ticari hareketliliği yüksek bölgelerdeki işletmelere danışmanlık verilebilir. Kira sözleşmesi, tahliye ihtarı, fatura veya çek gibi belgeler incelenir; icra takibi, dava ya da arabuluculuktan hangisinin uygun olduğu belirlenir." },
      { question: "Büro Fatih'te mi, ulaşım nasıl sağlanır?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Fatih'teki müvekkillerle bu adreste ya da internet üzerinden görüşülür. T1 tramvayı ve Yenikapı aktarma merkezi ilçeden şehrin farklı bölgelerine geçmeyi kolaylaştırır. Görüşme için WhatsApp ya da telefonla randevu istenebilir; görüşme günü ve biçimi kişinin uygunluğuna göre belirlenir." },
      { question: "Avukatlık ücreti nasıl belirlenir?", answer: "Ücret, dosyanın kapsamı ve gerektirdiği emek dikkate alınarak belirlenir; randevuda açıklanır ve danışmanlık görüşmesi ücrete tabidir. Temsil kararı verilirse vekalet ücreti yazılı olarak kararlaştırılır. Avukatlık Kanunu m.164 uyarınca ücret, Avukatlık Asgari Ücret Tarifesi'nin altında kararlaştırılamaz." },
    ],
    howToTitle: "Fatih'te Dosya Açma Süreci Nasıl Başlar?",
    howToSteps: [
      { name: "Konunun Aktarılması", text: "WhatsApp veya telefonla uyuşmazlığın özeti ve varsa son başvuru tarihi paylaşılır." },
      { name: "Evrakın Toplanması", text: "Tebligat, sözleşme, tapu kaydı veya ödeme belgeleri gibi dayanak evrak hazırlanır." },
      { name: "Ücretli Görüşme", text: "Hukuki durum değerlendirilir; olası başvuru yolları ve süreler anlatılır." },
      { name: "Vekalet Sonrası Takip", text: "Temsil kararı alınırsa vekaletname düzenlenir ve dosyanın seyri düzenli olarak bildirilir." },
    ],
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
    metaTitle: "Fatih Boşanma Avukatı | Velayet ve Nafaka",
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
      { question: "Fatih'te boşanma davası hangi mahkemede görülür?", answer: "Fatih'teki boşanma davaları İstanbul (Çağlayan) Adliyesi bünyesindeki aile mahkemelerinde görülür. Yetkili mahkeme TMK m.168'e göre belirlenir; dava dilekçesinde velayet, nafaka ve mal rejimi talepleri yer alır. Anlaşmalı süreçte protokolün eksiksizliği, çekişmeli süreçte ise iddiaların somut delille desteklenmesi belirleyicidir." },
      { question: "Anlaşmalı boşanma protokolü neleri kapsamalı?", answer: "Anlaşmalı boşanma protokolü velayet, nafaka, mal rejimi ve varsa tazminata ilişkin tüm hususları eksiksiz düzenlemelidir. TMK m.166/3 uyarınca evliliğin en az bir yıl sürmüş olması ve eşlerin duruşmada birlikte beyanda bulunması gerekir. Protokolün eksiksiz olması, sürecin tek duruşmada tamamlanmasına yardımcı olur." },
      { question: "Kusur iddiaları nasıl ispatlanır?", answer: "Kusur iddiaları tanık ifadeleri, yazışmalar ve mali belgeler gibi somut delillerle desteklenmelidir. Kusura dayalı çekişmeli boşanma davalarında iddiaların delillendirilmesi sonucu belirler. Mesaj kayıtları, banka dökümleri ve tanık beyanları dosyaya sunulabilir; hangi delilin hangi iddiayı desteklediği dilekçede açıkça gösterilmelidir." },
      { question: "Velayet kararında esas alınan kriter nedir?", answer: "Velayet kararında esas alınan kriter çocuğun üstün yararıdır; mahkeme bu ölçütle ebeveynlerin durumunu değerlendirir. Çocuğun bakım ve eğitim koşulları ile ebeveynlerin imkanları birlikte ele alınır. Velayet tesisi ve sonradan velayet değişikliği talepleri de aynı ölçüte göre incelenir; çocuk yeterli olgunluğa ulaşmışsa görüşü de dikkate alınabilir." },
      { question: "Nafaka miktarı sabit midir?", answer: "Hayır, nafaka miktarı sabit değildir; ekonomik koşullardaki değişiklik nafakanın yeniden belirlenmesini gerektirebilir. Nafakanın artırılması, azaltılması ve kaldırılması için ayrı davalar açılabilir. Miktar belirlenirken tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir; değişikliği gösteren belgeler talebin dayanağını oluşturur." },
      { question: "Dava sürerken nafaka talep edilebilir mi?", answer: "Evet, dava sürerken ihtiyaç sahibi taraf lehine tedbir nafakasına hükmedilebilir. Tedbir nafakası dava devam ederken geçici olarak ödenir; nihai nafaka kararı ise davanın sonunda verilir. Tarafların gelir durumu ve ihtiyaçları değerlendirilerek miktar belirlenir; talep dava dilekçesinde veya dava sırasında ileri sürülebilir." },
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
    metaTitle: "Fatih Ceza Avukatı | Müdafilik",
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
      { question: "Fatih'te işlenen bir suçun kovuşturması nerede yapılır?", answer: "Fatih'te işlenen bir suçun kovuşturması İstanbul (Çağlayan) Adliyesi'nde yürütülür. Soruşturma aşamasında savcılık ve sulh ceza hakimliği işlemleri de bu adliyede yapılır; iddianame kabul edilirse görevli ceza mahkemesi yargılamayı yürütür. Dosyanın hangi mahkemeye düşeceği iddia edilen suçun niteliğine bağlıdır." },
      { question: "Şüpheli ifade vermeden önce avukatla görüşebilir mi?", answer: "Evet, şüpheli ifade vermeden önce avukatla görüşebilir; gözaltı süresince müdafi ile görüşme hakkı vardır (CMK m.154). Şüpheli ayrıca CMK m.147 uyarınca susma hakkını kullanabilir. İfade öncesinde müdafi ile görüşme, savunmanın hazırlanması ve dosyadaki delillerin değerlendirilmesi bakımından önem taşır." },
      { question: "Tutukluluk kararına karşı hangi yola başvurulur?", answer: "Tutukluluk kararına karşı yedi gün içinde itiraz edilebilir (CMK m.268). İtiraz dilekçesinde CMK m.100 ve m.101'deki kuvvetli şüphe, tutuklama nedeni ve ölçülülük yönünden eksiklikler somut olarak gösterilmelidir. Tutuklama talebine ve tutukluluğun devamına karşı itiraz dilekçesi hazırlanır ve sürenin kaçırılmaması için karar tarihi takip edilir." },
      { question: "Ceza davalarında avukat tutmak şart mı?", answer: "Belirli suç tiplerinde müdafi bulundurmak zorunludur, diğerlerinde tercihe bağlıdır. Zorunlu olmayan hallerde de gözaltı, soruşturma ve kovuşturma aşamalarında müdafi yardımından yararlanılabilir. Müdafi ifade öncesi hazırlık, delil incelemesi ve itiraz gibi işlemlerde destek sağlar; bu nedenle dosyanın ilk aşamasında görüşme yapılması faydalıdır." },
      { question: "Uzlaşma teklifini reddetmek mümkün mü?", answer: "Evet, taraflardan biri kabul etmezse süreç normal yargılamaya döner. Uzlaştırma yalnızca kanunda sayılan suçlarda uygulanır (CMK m.253) ve taraflar anlaşırsa kamu davası açılmaz. Uzlaşma teklifi geldiğinde dosyadaki delil durumu ve olası sonuçlar değerlendirilerek karar verilmesi yerinde olur." },
      { question: "İstinaf başvurusu ne zaman yapılmalı?", answer: "İstinaf başvurusu, kararın tebliğinden itibaren yasal süre içinde yapılmalıdır. Süre kaçırılırsa karar kesinleşebilir; bu nedenle tebliğ tarihinin doğru belirlenmesi gerekir. İstinaf ve temyiz başvuruları dilekçeyle yapılır ve dilekçede kararın hukuka aykırı yönleri somut olarak gösterilir." },
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
    metaTitle: "Fatih Gayrimenkul Avukatı | Tapu ve Kira",
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
      { question: "Tescilli bir yapıda tadilat yapmak için ne gerekir?", answer: "Tescilli bir yapıda tadilat için ilgili koruma kurulundan izin alınması gerekir; izinsiz müdahaleler idari ve hukuki yaptırımlara yol açabilir. Fatih'te korunması gerekli taşınmaz kültür varlıklarında onarım ve kullanım işlemleri koruma mevzuatındaki kısıtlara bağlıdır. Tadilattan önce tapudaki şerhler ve kurul kararları incelenmelidir." },
      { question: "Fatih'te gayrimenkul davası hangi mahkemede görülür?", answer: "Fatih'teki gayrimenkul davaları niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde görülür. Kira ve tahliye uyuşmazlıkları ile tapu iptali ve tescil davaları farklı mahkemelerin görev alanına girebileceğinden, dava açılmadan önce uyuşmazlığın niteliği belirlenir." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Tapu iptal davası, hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tarafından açılabilir. Davada hatalı veya haksız yapılan tescilin iptali ve gerçek hak sahibi adına tescil talep edilir. Dayanak belgeler, tapu kayıtları ve tescile ilişkin işlem geçmişi dosyanın temelini oluşturur." },
      { question: "Ortak gider anlaşmazlıkları nasıl çözülür?", answer: "Ortak gider anlaşmazlıklarında öncelikle yönetim planı ve Kat Mülkiyeti Kanunu esas alınır; çözülemezse dava açılabilir. Kat malikleri kurulu ve yönetim planından doğan uyuşmazlıklarda karar tutanakları ile ödeme kayıtları incelenir. Dava, İstanbul (Çağlayan) Adliyesi bünyesindeki ilgili mahkemede açılabilir." },
      { question: "Eski bir binada satış öncesi neye dikkat edilmeli?", answer: "Eski bir binada satış öncesi tapu kaydı, tescilli yapı statüsü ve varsa kısıtlamaların önceden incelenmesi önerilir. Fatih'te çok sayıda tescilli tarihi yapı bulunduğundan gayrimenkul işlemleri koruma kurulu kararlarıyla iç içedir. Tapudaki şerhler ve kurul kararları, satışın ve sonrasındaki kullanımın sınırlarını belirler." },
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
    metaTitle: "Fatih İcra Avukatı | İcra Takibi ve Haciz",
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
      { question: "Fatih'te açılan icra takiplerine kim bakar?", answer: "Fatih'te açılan icra takiplerine İstanbul (Çağlayan) Adliyesi bünyesindeki icra müdürlükleri ve mahkemeleri bakar. Takip işlemleri icra müdürlüğünde yürür; şikayet ve itirazın kaldırılması gibi uyuşmazlıklar icra mahkemelerinde görülür. Borçlunun Fatih'te yerleşik olduğu takiplerde yetkili icra dairesi kural olarak borçlunun ikametgahına göre belirlenir." },
      { question: "Borca itiraz süresi kaç gündür?", answer: "Borca itiraz süresi, ödeme emrinin tebliğinden itibaren 7 gündür (İİK m.62). Borçlu bu süre içinde itiraz ederse takip durur; süre kaçırılırsa takip kesinleşir ve haciz aşamasına geçilebilir. Borca veya imzaya itiraz dilekçesi bu süre içinde icra dairesine sunulmalıdır; tebliğ tarihinin doğru belirlenmesi önemlidir." },
      { question: "İtirazın iptali davası hangi sürede açılmalı?", answer: "İtirazın iptali davası, itirazın tebliğinden itibaren bir yıl içinde açılabilir. Alacaklı, borçlunun itirazı nedeniyle duran takibin devam etmesi için bu davayı açar. Dava açılırken alacağın dayanağı olan fatura, sözleşme veya çek gibi belgeler dosyaya sunulur; sürenin takip edilmesi önemlidir." },
      { question: "Haciz işlemine itiraz nasıl yapılır?", answer: "Haciz işlemine karşı icra mahkemesine şikayet yoluyla itiraz edilebilir. Haciz taşınır veya taşınmaz mal üzerine konulabildiğinden, işlemin usule uygunluğu dosya üzerinden incelenir. Şikayet İstanbul (Çağlayan) Adliyesi bünyesindeki icra mahkemesine yapılır; ihale ve satışa ilişkin hukuki takip de bu kapsamda yürütülür." },
      { question: "Borçlu taahhüdünü yerine getirmezse ne olur?", answer: "Borçlu taahhüdünü yerine getirmezse taahhüdü ihlal suçu oluşabilir ve haciz işlemlerine devam edilir. Takip kesinleşmişse haciz ve gerekirse satış yoluyla tahsilat sürdürülür. Taahhüdün koşulları ve ihlalin gerçekleşip gerçekleşmediği dosyada ayrıca değerlendirilir; bu nedenle taahhüt belgesi ve takip evrakı birlikte incelenir." },
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
    metaTitle: "Fatih İdare Avukatı | İptal ve Tam Yargı",
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
      { question: "Fatih'te idari dava açma süresi ne kadardır?", answer: "Fatih'te idari dava açma süresi, genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Dava İstanbul idare mahkemelerinde açılır. Aksaray ve çevresindeki işletmelere yönelik idari para cezaları da bu kapsamda değerlendirilebilir; süreyi doğru hesaplamak için tebliğ tarihinin belirlenmesi gerekir." },
      { question: "Koruma kurulu kararına itiraz edilebilir mi?", answer: "Evet, koruma kurulu kararına karşı idari yargı yoluna başvurularak itiraz edilebilir. Fatih'in önemli bir bölümü sit alanı statüsünde olduğundan belediye ve koruma kurulu kararları sık gündeme gelir. Dava açma süresi genel kural olarak tebliğden itibaren 60 gündür (İYUK m.7); kararın dayanağı ve tebliğ tarihi incelenir." },
      { question: "Ruhsat iptali kararına karşı ne yapılabilir?", answer: "Ruhsat iptali kararına karşı idare mahkemesinde dava açılabilir. Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Belediye ruhsat ve imar işlemlerine itiraz edilirken iptal gerekçesi, dayanak mevzuat ve tebliğ tarihi birlikte incelenir; gerekirse yürütmenin durdurulması da talep edilebilir." },
      { question: "Yürütmenin durdurulması hangi hallerde istenir?", answer: "Yürütmenin durdurulması, telafisi güç veya imkansız zarar riski varsa talep edilir. Bu talep dava dilekçesiyle birlikte sunulabilir ve işlemin dava sonuçlanana kadar uygulanmasının durdurulmasını amaçlar. Talepte, işlemin açıkça hukuka aykırı olduğu ve uygulanması halinde doğacak zararın telafisinin güç olduğu somut olarak gösterilir." },
      { question: "Tazminat davası açma süresi var mı?", answer: "Tazminat davasında zamanaşımı süreleri kanunda belirtilmiştir ve dosyaya göre değişebilir. İdarenin eylem veya işleminden doğan zararlar için tam yargı davası açılır. Sürelerin işlemin niteliğine ve tebliğ ya da öğrenme tarihine göre belirlenmesi gerektiğinden, zarar ortaya çıktığında belgeler toplanıp başvuru süreleri erkenden kontrol edilmelidir." },
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
    metaTitle: "Fatih İş Hukuku Avukatı | İşe İade ve Tazminat",
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
      { question: "Fatih'te iş uyuşmazlıkları hangi mahkemede görülür?", answer: "Fatih'teki iş uyuşmazlıkları İstanbul (Çağlayan) Adliyesi bünyesindeki iş mahkemelerinde görülür. İşe iade ve işçilik alacağı davaları, zorunlu arabuluculukta anlaşma sağlanamazsa bu mahkemelerde açılır. İşe iade davası arabuluculuk son tutanağından itibaren 2 hafta içinde açılmalıdır; bu nedenle tutanak tarihi takip edilir." },
      { question: "Arabuluculuğa başvurmadan doğrudan dava açılabilir mi?", answer: "Hayır, işe iade ve çoğu işçilik alacağında arabuluculuk dava şartıdır; arabuluculuğa başvurulmadan doğrudan dava açılamaz. İşe iade için arabuluculuk fesihten itibaren 1 ay içinde başvurulur, anlaşma olmazsa son tutanaktan itibaren 2 hafta içinde dava açılır (İş K. m.18). Eksik başvuru davanın usulden reddine yol açabilir." },
      { question: "Toptan ticaret sektöründe sık görülen uyuşmazlık nedir?", answer: "Toptan ticaret sektöründe fazla mesai ve prim alacaklarının ispatı sıkça gündeme gelen uyuşmazlıklardır. Aksaray ve Laleli çevresindeki toptan ticaret ve tekstil işletmeleri önemli bir istihdam alanıdır. Çalışma saatlerini ve prim ödemelerini gösteren belgeler, tanık beyanları ve ödeme kayıtları alacağın ispatında önem taşır; dava öncesinde arabuluculuk sürecinden geçilir." },
      { question: "İhbar tazminatı hangi hallerde ödenmez?", answer: "İşçinin haklı sebep olmaksızın istifa ettiği hallerde işveren ihbar tazminatı ödemez. Haksız fesih halinde ise kıdem ve ihbar tazminatı davaları açılabilir. Feshin kim tarafından ve hangi gerekçeyle yapıldığı ihbar tazminatı hakkının doğup doğmadığını belirler; fesih bildirimi ve ödeme kayıtları bu nedenle dikkatle incelenir." },
      { question: "İş sözleşmesi ile ibraname arasındaki fark nedir?", answer: "İş sözleşmesi çalışma koşullarını düzenler, ibraname ise ilişkinin sona ermesinde tarafların ibra beyanını içerir. İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi işçi ve işveren açısından önemlidir. İbraname imzalanmadan önce kapsamı ve karşılığında ödenen tutar dikkatle değerlendirilmelidir; çünkü beyan ilerideki alacak taleplerini etkileyebilir." },
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
    metaTitle: "Fatih Kira ve Tahliye Avukatı | Tahliye",
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
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kiracı; kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye edilebilir. Kira borcunda ödeme için verilen 30 günlük süre sonunda ödeme yapılmazsa tahliye talep edilebilir (TBK m.315). Taahhütnameye dayalı tahliye icra yoluyla, ihtiyaç nedeniyle tahliye ise dava yoluyla istenir." },
      { question: "Fatih'te tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine göre değişir; genel olarak birkaç aydan bir buçuk yıla kadar sürebilir. Sürenin uzayıp kısalması tahliye sebebine, taşınmazın konut veya işyeri olmasına ve itirazların niteliğine bağlıdır. Taahhütnameye dayalı icra yoluyla tahliye ise mahkeme sürecinden ayrı yürür." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Rayiç bedel tespiti, mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Mahkeme, benzer taşınmazların kira bedellerini ve taşınmazın özelliklerini dikkate alarak bedeli belirler. Kira bedelinin tespiti ve uyarlanması davaları sulh hukuk mahkemelerinde görülür; kiraya verenler ve kiracılar bu yola başvurabilir." },
      { question: "Tescilli bir binada kiracı olarak tadilat yapılabilir mi?", answer: "Koruma kurulu izni olmadan tescilli bir binada yapısal değişiklik yapılamaz. Tescilli yapılarda kullanım ve tadilat kısıtlamaları sözleşme öncesinde değerlendirilmelidir; izinsiz müdahaleler idari ve hukuki yaptırımlara yol açabilir. Kiracı tadilat yapmak istiyorsa kira sözleşmesindeki hükümleri ve ilgili kurul kararlarını önceden incelemelidir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile mahkemeye gitmeden doğrudan icra dairesi kanalıyla tahliye istenebilir. Taahhütnameye dayalı icra yoluyla tahliye, kiracının tahliyeyi önceden yazılı olarak üstlenmesine dayanır. Taahhütnamenin geçerlilik şartları dosyada incelenir; geçersizse mahkeme yoluna gidilmesi gerekebilir." },
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
    metaTitle: "Fatih Vergi Avukatı | Vergi Cezası ve Uzlaşma",
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
      { question: "Vergi tarhiyatına karşı dava süresi ne kadardır?", answer: "Vergi tarhiyatına karşı dava süresi, ihbarnamenin tebliğinden itibaren 30 gündür (İYUK m.7). Bu süre içinde İstanbul vergi mahkemelerinde iptal davası açılır. Uzlaşma başvurusu yapılmışsa uzlaşma sağlanamaması halinde kalan dava açma süresi korunur; bu nedenle tebliğ tarihinin doğru tespiti önemlidir." },
      { question: "Vergi mahkemesi başvurusu nasıl yapılır?", answer: "Vergi mahkemesi başvurusu, süresi içinde dilekçe ile İstanbul vergi mahkemelerine yapılır. Vergi ve ceza ihbarnamesine karşı dava, tebliğden itibaren 30 gün içinde açılır (İYUK m.7). Dilekçede tarhiyatın hukuka aykırı olduğu iddiası gerekçeleriyle gösterilir; ödeme emrine karşı dava da aynı mahkemede açılabilir." },
      { question: "Uzlaşma talebi reddedilirse ne olur?", answer: "Uzlaşma talebi reddedilirse kalan dava açma süresi içinde mahkemeye başvurma hakkı devam eder. Uzlaşma başvurusu dava hakkını ortadan kaldırmaz; ihbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür (İYUK m.7). Uzlaşma ile dava yolu arasındaki tercih tarhiyatın miktarı ve dayanağına göre değerlendirilir." },
      { question: "Ödeme emrine itiraz için süre nedir?", answer: "Ödeme emrine itiraz için süre, tebliğinden itibaren 15 gündür. Ödeme emri kesinleşmiş vergi borcunun tahsili için gönderilir ve davaya İstanbul vergi mahkemelerinde bakılır. Dava açılırken ödeme emrinin dayanağı olan tarhiyatın kesinleşme durumu ve tebliğ usulü birlikte incelenir." },
      { question: "Toptan ticaret sektöründe hangi vergi uyuşmazlıkları öne çıkar?", answer: "Toptan ticaret sektöründe sahte veya muhteviyatı itibarıyla yanıltıcı belge iddiaları ve KDV incelemeleri öne çıkar. Aksaray ve Laleli çevresindeki yoğun toptan ticaret ve turizm faaliyeti bu uyuşmazlıkların sık görülmesine yol açmaktadır. Bu işlemlere karşı ihbarnamenin tebliğinden itibaren 30 gün içinde dava açılabilir." },
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
    metaTitle: "Fatih Borçlar Hukuku Avukatı | Alacak Davası",
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
      { question: "Fatih'te toptan ticaret sözleşmesi uyuşmazlığı nereye açılır?", answer: "Toptan ticaret sözleşmesi uyuşmazlığı niteliğine göre asliye ticaret veya asliye hukuk mahkemesinde, İstanbul (Çağlayan) Adliyesi bünyesinde açılır. Bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması zorunlu olabilir. Uyuşmazlığın ticari niteliği ve tarafların sıfatı, davanın hangi mahkemede açılacağını belirler." },
      { question: "Ayıplı mal teslimi halinde alıcının hakları nelerdir?", answer: "Ayıplı mal teslimi halinde alıcı bedel indirimi, onarım, misli ile değişim veya sözleşmeden dönme taleplerinden birini ileri sürebilir. Ayıplı ifa nedeniyle sözleşmeden dönme talepleri hizmet kapsamındadır. Hangi talebin seçileceği ayıbın niteliğine ve sözleşme hükümlerine bağlıdır; ayıp bildiriminin zamanında yapılıp yapılmadığı da değerlendirilir." },
      { question: "Cezai şart hükmü her sözleşmede geçerli mi?", answer: "Cezai şart hükmü, taraflarca kararlaştırılmışsa geçerlidir; aşırı olması halinde hakim tarafından indirilebilir. Cezai şart, sözleşmenin ihlali halinde ödenecek tutarı önceden belirler. Sözleşme metinleri hazırlanırken cezai şartın kapsamı, tutarı ve hangi ihlal için öngörüldüğü açıkça yazılmalıdır." },
      { question: "Arabuluculuk hangi alacak türlerinde zorunludur?", answer: "Arabuluculuk, ticari nitelikteki belirli para alacaklarında dava şartı olarak aranır. Zorunlu olan hallerde arabuluculuğa başvurulmadan dava açılırsa dava usulden reddedilebilir. Bu zorunluluk her uyuşmazlık için geçerli değildir; uyuşmazlığın bu kapsama girip girmediği dava açılmadan önce incelenir." },
      { question: "Faturaya süresinde itiraz edilmezse ne olur?", answer: "Faturaya süresinde itiraz edilmezse fatura kabul edilmiş sayılabilir; bu durum ispat açısından karşı taraf lehine olabilir. Bu nedenle fatura tebliğ edildiğinde içeriği incelenmeli, itiraz edilecekse yazılı olarak ve süresinde yapılmalıdır. Fatura, sipariş ve yazışmalar alacak davası veya icra takibinde delil olarak kullanılır." },
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

export const fatihServices: PseoService[] = [...fatihBaseServices, fatihMiras];
