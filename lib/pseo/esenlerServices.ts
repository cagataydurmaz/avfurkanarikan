import type { PseoService } from "./types";
import { esenlerMiras } from "./miras/esenlerMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const esenlerBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "esenler-avukat",
    name: "Esenler Avukat",
    heroTitle: "Esenler Avukat",
    heroSubtitle:
      "Av. Furkan Arıkan (İstanbul Barosu, sicil 72621), İstanbul Otogarı'nın bulunduğu ve nakliye işletmelerinin yoğunlaştığı Esenler'deki kişi ve şirketlere ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukukunda danışmanlık verir; ilçenin dosyaları İstanbul Bakırköy Adliyesi'nde görülür.",
    metaTitle: "Esenler Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Esenler'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan Furkan Arıkan, 72621 sicil numarasıyla İstanbul Barosu'na kayıtlıdır ve bürosu Beşiktaş/Sinanpaşa'dadır. Davutpaşa, Menderes, Tuna ve Fevzi Çakmak gibi mahallelerden gelen başvurularda otobüs firmaları, nakliyeciler ve bu sektörde çalışanların taşıma, işçilik ve alacak uyuşmazlıklarının yanı sıra aile, ceza ve kira dosyalarında da temsil üstlenir. Görüşme talebi telefon veya WhatsApp ile iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Gözaltı, ifade ve kovuşturma aşamasında müdafi desteği." },
      { title: "Aile Hukuku", description: "Anlaşmalı ve çekişmeli boşanma ile velayet talepleri." },
      { title: "Gayrimenkul Hukuku", description: "Depo, antrepo ve konut tapusuna ilişkin anlaşmazlıklar." },
      { title: "İş Hukuku", description: "Şoför, muavin ve depo çalışanlarının alacak talepleri." },
      { title: "İcra Hukuku", description: "Navlun ve taşıma bedeli alacaklarında takip ve itiraz." },
      { title: "İdare Hukuku", description: "Yetki belgesi, ruhsat ve idari para cezası uyuşmazlıkları." },
      { title: "Vergi Hukuku", description: "Esenler Vergi Dairesi Müdürlüğü işlemlerine karşı dava." },
      { title: "Borçlar Hukuku", description: "Taşıma, kira ve hizmet sözleşmelerinden doğan talepler." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı ve ifade aşamasından duruşmaya kadar ceza dosyalarında müdafilik",
      "Boşanma, velayet, nafaka ve mal rejimi davalarında temsil",
      "Depo, antrepo ve konut niteliğindeki taşınmazlarda tapu ve kira anlaşmazlıkları",
      "Şoför ve lojistik çalışanlarının kıdem, fazla mesai ve işe iade talepleri",
      "Navlun ve taşıma ücreti alacaklarında icra takibi ve itiraz süreçleri",
      "Taşımacılık yetki belgesi ve idari para cezalarına karşı idari dava",
      "Esenler Vergi Dairesi Müdürlüğü tarhiyatlarına karşı uzlaşma ve dava",
      "Taşıma ve hizmet sözleşmelerinden doğan hasar ve tazminat talepleri",
    ],
    localParagraphs: [
      "Türkiye'nin en büyük şehirlerarası otobüs terminali olan İstanbul Otogarı'nın ilçe sınırlarında yer alması, Esenler'de ulaşım ve nakliye işletmelerini ekonominin merkezine taşır. Bu nedenle taşıma sözleşmeleri, şoför alacakları ve araç kaynaklı tazminat talepleri ilçeden gelen dosyalar arasında sıkça yer bulur.",
      "Esenler'e ait hukuk ve ceza dosyaları Osmaniye Mahallesi'ndeki İstanbul Bakırköy Adliyesi'nde görülür; Otogar istasyonundan M1A hattıyla Bakırköy yönüne ulaşılabilir. Vergi işlemleri ise Esenler Vergi Dairesi Müdürlüğü'nde yürür.",
    ],
    faqs: [
      { question: "Esenler'de açılacak bir dava hangi adliyede görülür?", answer: "Esenler, İstanbul Bakırköy Adliyesi'nin yargı çevresindedir; ceza, aile, iş, icra ve ticaret mahkemelerindeki dosyalar bu adliyede görülür. Adliye, Bakırköy Osmaniye Mahallesi İsmail Erez Bulvarı No:14 adresindedir. Vergi davaları ise bundan ayrı olarak İstanbul vergi mahkemelerinde açılır." },
      { question: "Bürodan Esenler'deki müvekkillere nasıl hizmet veriliyor?", answer: "Büro Beşiktaş/Sinanpaşa'dadır; Esenler'de ofis bulunmamaktadır. Esenler'den başvuran müvekkillerle görüşme, büroda yüz yüze ya da çevrim içi olarak planlanır. Belgeler elektronik ortamda iletilebilir; duruşma ve kalem işlemlerinin takibi ise Bakırköy Adliyesi'nde avukat tarafından yürütülür ve gelişmeler müvekkile düzenli olarak aktarılır." },
      { question: "Otobüs veya nakliye firmasıyla yaşanan taşıma uyuşmazlığında nereden başlanır?", answer: "İlk adım, taşıma ilişkisini gösteren sözleşme, irsaliye, fatura ve hasar tutanaklarını bir araya getirmektir. Ödenmeyen navlun bedeli için icra takibi başlatılabilir; borçlu ödeme emrine 7 gün içinde itiraz ederse (İİK m.62) itirazın iptali davası veya itirazın kaldırılması yolu değerlendirilir. Ticari alacaklarda dava öncesi arabuluculuk şartı da kontrol edilir." },
      { question: "Şoför olarak çalıştığım Esenler'deki firmadan alacaklarımı nasıl isterim?", answer: "Alacak kalemleri için önce arabulucuya başvurulması gerekir; anlaşma çıkmazsa Bakırköy'deki iş mahkemesinde dava açılabilir. Fazla mesai ve hafta tatili ücretlerinin ispatında takograf kayıtları, sefer listeleri ve banka dökümleri işe yarar. Ücret niteliğindeki alacaklar beş yıllık zamanaşımına tabidir (TBK m.147)." },
      { question: "Esenler'de gözaltına alınan bir yakınım için ne yapmalıyım?", answer: "Vakit kaybetmeden avukata ulaşılmalı ve gözaltındaki kişi müdafi talebini açıkça bildirmelidir. Şüpheli susma hakkını kullanabilir; tutuklama istenirse hâkim, CMK m.100 ve 101'deki koşulların varlığını inceler. Verilen tutuklama kararına karşı 7 gün içinde itiraz edilebilir (CMK m.268)." },
    ],
    howToTitle: "Esenler'den Hukuki Destek Almak İçin İzlenecek Yol",
    howToSteps: [
      { name: "Ön Bilgi", text: "Telefon veya WhatsApp üzerinden uyuşmazlığın konusu ve önemli tarihler kısaca aktarılır." },
      { name: "Belge Paylaşımı", text: "Sözleşme, irsaliye, tebligat ya da tutanak gibi belgeler görüşme öncesi iletilir." },
      { name: "Değerlendirme Görüşmesi", text: "Ücretli danışmanlık görüşmesinde izlenecek hukuki yol ve süreler belirlenir." },
      { name: "Temsil", text: "Vekaletname düzenlenirse Bakırköy Adliyesi ve ilgili kurumlardaki işlemler takip edilir." },
    ],
    crosslinkLabel: "Esenler Avukat (Genel)",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "esenler-bosanma-avukati",
    name: "Esenler Boşanma Avukatı",
    heroTitle: "Esenler Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; aile mahkemeleri İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Esenler Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Esenler'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Aile hukuku alanında Esenler'deki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlar.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Vardiyalı Çalışan Aileler", description: "Şoförlük ve lojistik sektöründe uzun mesai düzenine bağlı velayet düzenlemeleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Uzun süreli seferlere çıkan eşler için kişisel ilişki düzenlemesi talepleri",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Kara taşımacılığı sektöründe çalışan şoför ve lojistik personelinin yoğun olduğu Esenler'de, uzun süreli şehirlerarası seferler nedeniyle velayet düzenlemelerinde kişisel ilişki takviminin gerçekçi biçimde kurulması ayrı bir önem taşımaktadır.",
      "Boşanma, velayet ve nafaka davalarına İstanbul Bakırköy Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Boşanma davası için İstanbul Bakırköy Adliyesi'ndeki aile mahkemesine başvurulur. Esenler'deki boşanma, velayet ve nafaka davalarına bu adliyedeki aile mahkemelerinde bakılır. Yetkili mahkeme TMK m.168'e göre belirlenir; dava dilekçesi hazırlanırken velayet, nafaka ve mal rejimi talepleri baştan netleştirilir." },
      { question: "Şoför olarak çalışan ebeveynin velayet şansı düşer mi?", answer: "Meslek tek başına belirleyici değildir; velayette çocuğun üstün yararı esas alınır. Şoförlük gibi uzun seferli işlerde çalışma düzenine uygun, gerçekçi bir kişisel ilişki planı kurulabilir. Mahkeme çocuğun bakım ve eğitim koşullarını bir bütün olarak değerlendirir; çalışma düzeni bu değerlendirmenin yalnızca bir unsurudur." },
      { question: "Uzun seferlere çıkan eşle kişisel ilişki nasıl düzenlenir?", answer: "Sefer takvimine uyarlanmış esnek bir kişisel ilişki planı talep edilebilir. Uzun şehirlerarası seferlere çıkan eşin görüşme günleri çalışma düzeniyle çelişmeyecek biçimde belirlenirse planın uygulanabilirliği artar. Plan, çocuğun üstün yararı gözetilerek hazırlanır; koşullar değişirse sonradan yeni bir düzenleme talep edilebilir." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Çocuk belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir. Velayet düzenlemesinde belirleyici ölçüt çocuğun üstün yararıdır; mahkeme çocuğun görüşünü bu ölçütle birlikte değerlendirir. Görüş tek başına belirleyici sayılmaz, bakım ve eğitim koşulları gibi diğer unsurlarla birlikte ele alınır." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Nafaka miktarı, tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilerek belirlenir. Mahkeme, nafaka verecek tarafın ödeme gücünü ve alacaklı tarafın ihtiyacını gözetir. Nafakanın artırılması, azaltılması ve kaldırılması için ayrı davalar açılabilir; koşullar değiştiğinde bu yönde talepte bulunmak mümkündür." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, dava açıldıktan sonra da barışma mümkündür; taraflar anlaşırsa dava geri çekilebilir. Anlaşmalı boşanma yolu seçilirse TMK m.166/3 uyarınca evliliğin en az bir yıl sürmüş olması ve eşlerin duruşmada birlikte beyanda bulunması gerekir. Hangi yolun uygun olduğu dosyadaki taleplere göre değerlendirilir." },
    ],
    howToTitle: "Esenler'de Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "esenler-ceza-avukati",
    name: "Esenler Ceza Avukatı",
    heroTitle: "Esenler Ceza Avukatı",
    heroSubtitle:
      "Esenler'deki olaylara ilişkin soruşturma ve davalarda şüpheli, sanık veya mağdur adına ifade, itiraz ve duruşma işlemleri takip edilir; dosyalar İstanbul Bakırköy Adliyesi'nde ele alınır.",
    metaTitle: "Esenler Ceza Avukatı | Müdafilik",
    metaDescription:
      "Esenler'de soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, 72621 sicil numarasıyla İstanbul Barosu'na kayıtlı bir avukattır; hukuk fakültesini MEF Üniversitesi'nde 2019'da bitirmiştir. Büro Beşiktaş/Sinanpaşa'dadır. Esenler dosyalarında kolluk ifadesinden istinaf başvurusuna dek her aşamada vekalet üstlenilir, görüşmeler telefon veya WhatsApp ile planlanır.",
    highlightCards: [
      { title: "Gözaltı ve İfade", description: "Kolluk ve savcılıkta müdafi olarak hazır bulunmak." },
      { title: "Tutukluluğa Karşı İtiraz", description: "CMK m.100-101 ölçütleri ve m.268 itiraz süresi dikkate alınarak başvuru." },
      { title: "Otogar Çevresi İddiaları", description: "Hırsızlık ve dolandırıcılık şikayetlerinde savunma veya mağdur vekilliği." },
      { title: "Bakırköy'de Yargılama", description: "İddianameden hükme kadar duruşma takibi ve kanun yolu." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltındaki kişinin ifadesine müdafi olarak katılım ve susma hakkının kullandırılması (CMK m.147, m.154)",
      "Sulh ceza hakimliği sorgusu öncesinde dosya içeriğinin incelenmesi ve adli kontrol seçeneklerinin sunulması",
      "Tutukluluğa ya da tutukluluğun devamına karşı yedi gün içinde CMK m.268 uyarınca itiraz",
      "Otogarda eşyası çalınan veya dolandırılan yolcular için suç duyurusu ve kamera kaydı tespiti taleplerinin hazırlanması",
      "Turgut Reis, Kazım Karabekir, Menderes gibi mahallelerde yaşayan şüphelilerin soruşturma dosyalarında savunma",
      "Uzlaştırma teklifinin değerlendirilmesi ve Bakırköy Adliyesi'ndeki duruşmaların takibi",
    ],
    localParagraphs: [
      "İstanbul Otogarı ile M1A ve M1B hatlarındaki Otogar, Esenler ve Menderes istasyonları çevresinde gün boyu yolcu ve bagaj hareketi sürer. Bu yoğunlukta ortaya çıkan hırsızlık ve dolandırıcılık iddialarında, olayın hemen sonrasında alınan kamera görüntüleri, bilet kayıtları ve tanık beyanları hem mağdur hem şüpheli bakımından belirleyici olabilir.",
      "Esenler'in Turgut Reis, Kazım Karabekir, Fevzi Çakmak ve Menderes gibi mahallelerinden gelen dosyalar İstanbul Bakırköy Adliyesi'ne gider. Gözaltına alınan kişi CMK m.154 gereği müdafiyle görüşebilir; tutuklama talebinde sulh ceza hakimliği CMK m.100 ve m.101'e göre karar verir.",
    ],
    faqs: [
      { question: "Esenler'de işlenen bir suç için dava hangi adliyede açılır?", answer: "Esenler'deki olaylara ilişkin ceza davaları İstanbul Bakırköy Adliyesi'nde karara bağlanır. Soruşturmayı Bakırköy Cumhuriyet Başsavcılığı yürütür, tutuklama gibi koruma tedbirleri sulh ceza hakimliğince karara bağlanır ve iddianame kabul edilirse görevli ceza mahkemesi yargılamayı yapar; dosyanın hangi mahkemeye düşeceği iddia edilen suçun niteliğine bağlıdır." },
      { question: "Otogarda eşyası çalınan yolcu şikayetini nasıl yapar?", answer: "Eşyası çalınan yolcu, olayı en kısa sürede polis veya jandarmaya bildirerek suç duyurusunda bulunmalıdır. Gecikme kamera kayıtlarının silinme riskini artırdığından, görüntülerin saklanması için yazılı talepte bulunulmalı; bilet, bagaj fişi ve eşyanın değerini gösteren belgeler de başvuruya eklenmelidir." },
      { question: "Dolandırıcılık iddiasıyla ifadeye çağrılan kişi ne yapmalı?", answer: "İfadeye çağrılan kişi çağrı kâğıdındaki gün ve saatte hazır bulunmalı, ifade vermeden önce müdafiyle görüşmelidir. CMK m.147 uyarınca susma hakkı ve müdafi yardımından yararlanma hakkı vardır. Banka dekontları, telefon kayıtları ve yazışmalar gibi belgeler savunmanın dayanağı olduğundan önceden derlenmelidir." },
      { question: "Tutukluluğun devamına karar verilirse itiraz süresi ne kadardır?", answer: "Tutuklama veya tutukluluğun devamı kararlarına karşı itiraz süresi yedi gündür (CMK m.268); süre tebliğ ya da öğrenme tarihinden başlar. İtiraz dilekçesinde CMK m.100 ve m.101'deki kuvvetli şüphe, tutuklama nedeni ve ölçülülük yönünden eksiklikler somut olarak gösterilmelidir." },
      { question: "Mağdur, uzlaşma teklifini kabul etmek zorunda mıdır?", answer: "Hayır, mağdur uzlaşma teklifini kabul etmek zorunda değildir. Uzlaştırma yalnızca kanunda sayılan suçlarda uygulanır (CMK m.253) ve taraflar anlaşırsa kamu davası açılmaz. Anlaşma sağlanamazsa soruşturma veya kovuşturma kaldığı yerden sürer; bu nedenle teklif geldiğinde dosyadaki delil durumu ve olası sonuçlar değerlendirilerek karar verilmesi yerinde olur." },
    ],
    howToTitle: "Esenler'de Ceza Soruşturması Nasıl Başlar ve Nereye Varır?",
    howToSteps: [
      { name: "Şikayet veya İhbar", text: "Mağdurun başvurusu ya da kolluğun tespiti üzerine Bakırköy Cumhuriyet Başsavcılığı soruşturma başlatır." },
      { name: "İfade ve Delil Toplama", text: "Şüpheli ve tanıkların beyanı alınır; kamera kayıtları, banka hareketleri ve bilirkişi raporu dosyaya girer." },
      { name: "Koruma Tedbirleri", text: "Gerekirse sulh ceza hakimliği adli kontrol veya tutuklamaya karar verir; bu kararlara yedi gün içinde itiraz edilir." },
      { name: "İddianame ve Yargılama", text: "İddianame kabul edilirse Bakırköy'deki görevli mahkemede duruşmalar yapılır, hüküm istinaf denetimine açıktır." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "esenler-gayrimenkul-avukati",
    name: "Esenler Gayrimenkul Avukatı",
    heroTitle: "Esenler Gayrimenkul Avukatı",
    heroSubtitle:
      "Depolama alanları, antrepo kiraları, tapu uyuşmazlıkları ve konut ilişkilerinde hukuki destek sağlanır; davalar İstanbul Bakırköy Adliyesi'nde görülür.",
    metaTitle: "Esenler Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Esenler'de depolama/antrepo kiraları, tapu iptali ve konut uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Depolama, antrepo ve konut uyuşmazlıklarında Esenler'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Depolama/Antrepo", description: "Lojistik amaçlı kullanılan taşınmazlarda kira ve teslim uyuşmazlıkları." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Konut Yapı Stoku", description: "Yoğun apartman dokusunda kat mülkiyeti uyuşmazlıkları." },
      { title: "Kira İlişkileri", description: "Sözleşme hazırlığı ve tahliye süreçlerinde destek." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Depolama ve antrepo amaçlı taşınmazların kira sözleşmelerinin hazırlanması",
      "Lojistik firmaları ile mülk sahipleri arasındaki teslim uyuşmazlıkları",
      "Kat malikleri kurulu ve yönetim planı uyuşmazlıklarında temsil",
      "Tapu iptali ve tescil davalarının açılması",
      "Kira bedeli tespiti ve uyarlama davaları",
      "İhtiyaç, temerrüt veya taahhüde dayalı tahliye süreçleri",
    ],
    localParagraphs: [
      "Otogar çevresinde yoğunlaşan nakliye ve lojistik firmalarının depolama ihtiyacı, Esenler'de sanayi/depo niteliğindeki taşınmazlara olan talebi artırmakta; bu da kira ve teslim uyuşmazlıklarını sık karşılaşılan bir konu haline getirmektedir.",
      "Bu uyuşmazlıklar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür.",
    ],
    faqs: [
      { question: "Depo niteliğindeki taşınmaz kirasında nelere dikkat edilmeli?", answer: "Depo niteliğindeki taşınmaz kirasında kullanım amacı, teslim tarihi ve varsa özel şartlar sözleşmede açıkça belirtilmelidir. Kira bedeli, ödeme dönemi ve tahliye koşulları da yazılı hale getirilmelidir. Sözleşmenin baştan dikkatle hazırlanması, lojistik firmaları ile mülk sahipleri arasındaki teslim uyuşmazlıklarını azaltmaya yardımcı olur." },
      { question: "Antrepo kiracısı taşınmazı zamanında teslim etmezse ne olur?", answer: "Antrepo kiracısı taşınmazı zamanında teslim etmezse sözleşmede öngörülen gecikme cezası talep edilebilir; gerekirse tahliye yoluna gidilebilir. Hangi yolun uygulanacağı sözleşme hükümlerine ve taşınmazın konut mu işyeri mi sayıldığına bağlıdır. Bu nedenle sözleşme ve teslim belgeleri dikkatle incelenir." },
      { question: "Esenler'de gayrimenkul davası hangi mahkemede görülür?", answer: "Esenler'deki gayrimenkul davaları niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür. Kira ve tahliye uyuşmazlıkları ile tapu iptali ve tescil davaları farklı mahkemelerin görev alanına girebileceğinden, dava açılmadan önce uyuşmazlığın niteliği belirlenir." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Tapu iptal davası, hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tarafından açılabilir. Davada hatalı veya haksız yapılan tescilin iptali ve gerçek hak sahibi adına tescil talep edilir. Dayanak belgeler, tapu kayıtları ve tescile ilişkin işlem geçmişi dosyanın temelini oluşturur." },
      { question: "Kat malikleri kurulu kararına nasıl itiraz edilir?", answer: "Karara katılmayan kat maliki, belirli süre içinde iptal davası açabilir. Kat malikleri kurulu ve yönetim planı uyuşmazlıklarında temsil sağlanır; dava açılmadan önce karar tutanağı, yönetim planı ve toplantı belgeleri incelenir. Süreyi kaçırmamak için kararın öğrenildiği tarihin doğru belirlenmesi önemlidir." },
    ],
    howToTitle: "Esenler'de Tapu İptali Süreci Nasıl İlerler?",
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
    urlSlug: "esenler-icra-avukati",
    name: "Esenler İcra Avukatı",
    heroTitle: "Esenler İcra Avukatı",
    heroSubtitle:
      "Taşıma ve navlun alacaklarının tahsili amacıyla icra takibi, itiraz ve haciz süreçlerinde temsil sağlanır; icra daireleri İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Esenler İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Esenler'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İcra ve iflas hukuku kapsamında Esenler'deki nakliye ve lojistik firmalarına, esnafa ve bireysel müvekkillere danışmanlık verir.",
    highlightCards: [
      { title: "Navlun Alacakları", description: "Taşıma sözleşmelerinden doğan alacakların takibi." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Araç, menkul ve gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Navlun ve taşıma bedeli alacakları için icra takibi başlatılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Ticari araç dahil menkul ve gayrimenkul üzerinde haciz uygulanması",
      "İhaleye katılım ve ihalenin feshi talepleri",
      "Mali sıkıntı yaşayan nakliye firmaları için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "İstanbul Otogarı çevresinde yoğunlaşan çok sayıda nakliye ve lojistik firması arasındaki navlun ve taşıma bedeli alacakları, Esenler'de icra takiplerinin sık başvurulan nedenleri arasındadır.",
      "Bu takiplere ilişkin uyuşmazlıklar İstanbul Bakırköy Adliyesi'ndeki icra mahkemelerinde görülür; borçlunun Esenler'de yerleşik olduğu takiplerde yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "İcra takibi; sözleşme, senet, fatura, taşıma irsaliyesi veya mahkeme ilamı gibi belgelerle başlatılabilir. Belge türü takibin yolunu belirler; ilamlı takip ve ilamsız takip farklı usullere tabidir. Navlun ve taşıma bedeli alacaklarında fatura ile irsaliyenin birlikte sunulması, alacağın dayanağını göstermeyi kolaylaştırır." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Ödeme emrine itiraz süresi, tebliğden itibaren 7 gündür (İİK m.62). Borçlu bu süre içinde itiraz ederse takip durur. Alacaklı itirazın iptali veya kaldırılması yoluna başvurabilir; süre kaçırılırsa takip kesinleşir ve haciz aşamasına geçilebilir. Bu nedenle tebliğ tarihinin doğru belirlenmesi önemlidir." },
      { question: "Taşıma sırasında hasar oluşursa navlun alacağı etkilenir mi?", answer: "Taşıma sırasında hasar oluşması navlun alacağını etkileyebilir; ancak hasarın sorumluluğu ve kapsamı ayrıca değerlendirilir. Hasar nedeniyle indirim veya tazminat talebi ileri sürülürse itiraz ve dava süreci gündeme gelebilir. Taşıma sözleşmesi, irsaliye ve hasar tespitine ilişkin belgeler uyuşmazlığın çözümünde belirleyici olur." },
      { question: "Haciz işlemi ticari araçlara uygulanabilir mi?", answer: "Evet, kanunen haczi caiz olan ticari araçlar üzerinde haciz uygulanabilir. Nakliye ve lojistik borçlularının menkul ve gayrimenkul malları da haciz kapsamına girebilir. Haciz sonrasında satış yoluyla tahsilat işlemleri sürdürülür; ihaleye katılım ve ihalenin feshi gibi talepler de takip kapsamında değerlendirilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Borçlu ödeme yapmazsa haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür. Takip kesinleşmişse haciz talep edilir, haczedilen mal satışa çıkarılır ve bedel alacaklıya aktarılır. Borçlu itiraz ederse süreç itirazın iptali veya kaldırılması davasına yönelir; mali sıkıntıdaki firmalar için konkordato da gündeme gelebilir." },
    ],
    howToTitle: "Esenler'de İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "esenler-idare-avukati",
    name: "Esenler İdare Avukatı",
    heroTitle: "Esenler İdare Avukatı",
    heroSubtitle:
      "Taşımacılık yetki belgesi, belediye ve imar işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Esenler İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Esenler'de idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. İdari işlemlerin iptali ve tam yargı davalarında Esenler'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Taşımacılık Belgeleri", description: "K1/K2 yetki belgesi ve idari para cezalarına ilişkin uyuşmazlıklar." },
      { title: "Otogar İşletme İzinleri", description: "Terminal içi işyeri ve acentelik ruhsatlarına ilişkin süreçler." },
      { title: "Belediye İşlemleri", description: "Ruhsat ve idari para cezalarına ilişkin uyuşmazlıklar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Karayolu taşımacılığı yetki belgesi iptaline karşı dava süreçleri",
      "Otogar içi işyeri ve acentelik ruhsat işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Belediye ruhsat işlemlerine itiraz edilmesi",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Kara taşımacılığı sektörünün yoğun olduğu Esenler'de, taşımacılık yetki belgelerine ve otogar içi işyeri ruhsatlarına ilişkin idari işlemler diğer ilçelere kıyasla daha sık gündeme gelmektedir.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "Taşımacılık yetki belgesi iptal edilirse ne yapılabilir?", answer: "Taşımacılık yetki belgesi iptal edilirse iptal işlemine karşı idare mahkemesinde dava açılabilir. Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m.7). İşlemin dayanağı, tebliğ tarihi ve gerekçesi incelenerek iptal ve gerekirse zararın tazmini talepleri dilekçeye yazılır." },
      { question: "Otogar içi işyeri ruhsatı reddedilirse itiraz süresi nedir?", answer: "Otogar içi işyeri ruhsatı reddedilirse tebliğ tarihinden itibaren 60 gün içinde idare mahkemesinde dava açılabilir (İYUK m.7). Süre tebliğ ile başladığından tebliğ tarihinin doğru belirlenmesi gerekir. Ret işleminin gerekçesi ve başvuru belgeleri iptal davasının dayanağını oluşturur." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, idari para cezasına karşı yasal süresinde idare mahkemesinde dava açılabilir. Genel kural olarak dava açma süresi işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Cezanın dayanağı, tebliğ tarihi ve usul eksiklikleri incelenerek iptal talebi hazırlanır; cezayı veren kurum ve dayanak mevzuata göre başvuru yolu değişebilir." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İmar planı ilan edildikten sonra yasal süre içinde idare mahkemesinde dava açılmalıdır; süre ilan tarihinden başlar. Genel idari davalarda dava açma süresi 60 gündür (İYUK m.7), ancak planlara ilişkin süreler özel hükümlere tabi olabileceğinden ilan tarihi ve işlemin niteliği dikkatle belirlenmelidir." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ruhsat başvurusunun reddi halinde ret kararına karşı idare mahkemesinde dava açılabilir. Dava açma süresi genel kural olarak tebliğden itibaren 60 gündür (İYUK m.7). Belediye ruhsat işlemlerine itiraz edilirken ret gerekçesi, başvuru dosyası ve ilgili mevzuata uygunluk birlikte incelenir." },
    ],
    howToTitle: "Esenler'de İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "esenler-is-hukuku-avukati",
    name: "Esenler İş Hukuku Avukatı",
    heroTitle: "Esenler İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Esenler İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Esenler'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Esenler'deki şoför, lojistik personeli ve diğer çalışanlara ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Şoför/Lojistik Alacakları", description: "Yol tazminatı, fazla mesai ve harcırah uyuşmazlıkları." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Şoförler için yol/harcırah ve fazla mesai alacaklarının tahsili",
      "Sigortasız veya eksik günlü çalışmaya ilişkin hizmet tespiti davaları",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "İstanbul Otogarı ve çevresindeki lojistik firmalarında yoğun bir şoför ve nakliye personeli istihdamının bulunduğu Esenler'de, uzun mesafe seferlerine bağlı fazla mesai ve harcırah uyuşmazlıkları sık gündeme gelmektedir.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Bakırköy Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Şehirlerarası sefer yapan şoförün fazla mesaisi nasıl hesaplanır?", answer: "Şehirlerarası sefer yapan şoförün fazla mesaisi, fiili çalışma süresi ve dinlenme süreleri birlikte değerlendirilerek hesaplanır. Uzun mesafe seferlere bağlı fazla mesai ve harcırah uyuşmazlıkları Esenler'de sık gündeme gelir. Sefer kayıtları, ücret bordroları ve tanık beyanları alacağın ispatında önemli deliller arasında yer alır." },
      { question: "Harcırah ödenmezse ne yapılabilir?", answer: "Ödenmeyen harcırah alacağı için arabuluculuk ve dava yoluna gidilebilir. Şoförler için yol/harcırah ve fazla mesai alacaklarının tahsili iş hukuku kapsamında takip edilir. Arabuluculukta anlaşma sağlanamazsa dava İstanbul Bakırköy Adliyesi'ndeki iş mahkemelerinde açılır; harcırah ödemelerine ilişkin kayıtlar delil olarak toplanır." },
      { question: "Esenler'de iş mahkemesi nerededir?", answer: "Esenler'deki iş davalarına İstanbul Bakırköy Adliyesi bünyesindeki iş mahkemelerinde bakılır. İşe iade ve işçilik alacağı davaları, arabuluculukta anlaşma sağlanamazsa bu mahkemelerde görülür. İşe iade davası, arabuluculuk son tutanağından itibaren 2 hafta içinde açılmalıdır; bu nedenle tutanak tarihinin takip edilmesi gerekir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "İşe iade talebinin ne kadar sürede sonuçlanacağı, arabuluculuk ve dava sürecinin toplam süresine bağlı olup dosyaya göre değişebilir. Arabuluculuk başvurusu fesihten itibaren 1 ay içinde yapılır; anlaşma olmazsa son tutanaktan itibaren 2 hafta içinde dava açılır (İş K. m.18: 30 işçi ve 6 ay kıdem koşulu)." },
      { question: "Trafik kazası geçiren şoför için iş kazası tazminatı istenebilir mi?", answer: "Evet, işle ilgili bir sefer sırasında meydana gelen kaza iş kazası sayılabilir ve şartları taşıması halinde tazminat talep edilebilir. İş kazasından doğan tazminat talepleri iş hukuku kapsamında takip edilir. Kaza tutanağı, sefer görevlendirmesi ve sağlık raporları olayın işle ilişkisini göstermek bakımından önem taşır." },
    ],
    howToTitle: "Esenler'de İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "esenler-kira-tahliye-avukati",
    name: "Esenler Kira ve Tahliye Avukatı",
    heroTitle: "Esenler Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Esenler'de konut ya da depo/antrepo niteliğindeki taşınmazların tahliyesi, kira bedelinin belirlenmesi ve kira sözleşmesinden doğan uyuşmazlıklarda destek verilir; bu davalar İstanbul Bakırköy Adliyesi'ndeki sulh hukuk mahkemelerinde görülür.",
    metaTitle: "Esenler Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Esenler'de kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kira hukuku alanında Esenler'deki kiraya verenlere ve kiracılara danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Depo/Antrepo Tahliyesi", description: "Lojistik amaçlı kullanılan taşınmazlarda tahliye süreci." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Konut ve depo/antrepo kira sözleşmelerinin hazırlanması ve incelenmesi",
      "İhtiyaç nedeniyle açılan tahliye davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Esenler'de yoğun konut dokusunun yanında, İstanbul Otogarı çevresindeki lojistik firmalarının depolama ihtiyacı nedeniyle kiracılık ilişkisiyle işletilen depo/antrepo niteliğinde taşınmazlar da bulunur; bu taşınmazların tahliyesi konut kiralarından farklı usul kurallarına tabi olabilir.",
      "Bu taşınmazın konut mu yoksa işyeri mi sayılacağı, uygulanacak usulü doğrudan etkileyen bir husustur; ilgili davalar İstanbul Bakırköy Adliyesi çatısı altındaki sulh hukuk mahkemelerinde görülmektedir.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kiracı; kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye edilebilir. Kira borcunda ödeme için verilen 30 günlük süre sonunda ödeme yapılmazsa tahliye talep edilebilir (TBK m.315). Taahhütnameye dayalı tahliye icra yoluyla, ihtiyaç nedeniyle tahliye ise dava yoluyla istenir." },
      { question: "Depo kiracısının tahliyesi konuttan farklı mı?", answer: "Depo kiracısının tahliyesinde genel usul konutla benzer olmakla birlikte, işyeri kiralarında ihtiyaç sebebiyle tahliyede ek koşullar aranabilir. Taşınmazın konut mu işyeri mi sayılacağı uygulanacak usulü doğrudan etkiler. İlgili davalar İstanbul Bakırköy Adliyesi'ndeki sulh hukuk mahkemelerinde görülür." },
      { question: "Esenler'de tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine göre değişir; genel olarak birkaç aydan bir buçuk yıla kadar sürebilir. Sürenin uzayıp kısalması tahliye sebebine, taşınmazın konut veya işyeri olmasına ve itirazların niteliğine bağlıdır. Taahhütnameye dayalı icra yoluyla tahliye ise mahkeme sürecinden ayrı yürür." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Rayiç bedel tespiti, mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Mahkeme, benzer taşınmazların kira bedellerini ve taşınmazın özelliklerini dikkate alarak bedeli belirler. Kira bedelinin tespiti ve uyarlanması davaları sulh hukuk mahkemelerinde görülür; kiraya verenler ve kiracılar bu yola başvurabilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile mahkemeye gitmeden doğrudan icra dairesi kanalıyla tahliye istenebilir. Taahhütnameye dayalı icra yoluyla tahliye, kiracının tahliyeyi önceden yazılı olarak üstlenmesine dayanır. Taahhütnamenin geçerlilik şartları dosyada incelenir; geçersizse mahkeme yoluna gidilmesi gerekebilir." },
    ],
    howToTitle: "Esenler'de Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "esenler-vergi-avukati",
    name: "Esenler Vergi Avukatı",
    heroTitle: "Esenler Vergi Avukatı",
    heroSubtitle:
      "Esenler'deki nakliye ve lojistik işletmeleri için vergi tarhiyatına, kesilen cezalara ve uzlaşma sürecine ilişkin temsil sağlanır; bu uyuşmazlıklarda yetkili yargı mercii İstanbul vergi mahkemeleridir.",
    metaTitle: "Esenler Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Esenler'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Vergi tarhiyatı ve buna bağlı cezalara ilişkin uyuşmazlıklarda Esenler'deki müvekkillerine danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukat olup 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Nakliye Sektörü", description: "Taşımacılık işletmelerine yönelik vergi incelemesi süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Nakliye ve lojistik işletmelerinde vergi incelemesi sürecinde danışmanlık",
      "Motorlu taşıtlar vergisi ve ÖTV kaynaklı uyuşmazlıklarda destek",
    ],
    localParagraphs: [
      "Esenler'de motorlu taşıtlar vergisi, KDV ve navlun gelirleriyle ilgili vergi incelemeleri ile bunların sonucunda uygulanan ceza kesme işlemleri sıkça gündeme gelmektedir; bunun başlıca nedeni İstanbul Otogarı çevresinde yoğunlaşan nakliye ve taşımacılık faaliyetleridir.",
      "İstanbul vergi mahkemeleri, bu tür işlemlere karşı açılan davalara bakmakla görevlidir; ihbarnamenin tebliğinden itibaren 30 günlük süre içinde dava açılması gerekir.",
    ],
    faqs: [
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "İhbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür (İYUK m.7). Süre içinde açılan dava, vergi ve ceza ihbarnamesinin iptalini hedefler. Uzlaşma başvurusu yapılmışsa, uzlaşma sağlanamaması halinde kalan dava açma süresi korunur; bu nedenle tebliğ tarihinin doğru tespiti önemlidir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "Vergi davaları İstanbul vergi mahkemelerinde görülür. Vergi ve ceza ihbarnamesine karşı iptal davası, ihbarnamenin tebliğinden itibaren 30 gün içinde açılır (İYUK m.7). Dava, tarhiyatın ve buna bağlı cezaların hukuka uygunluğunu denetler; ödeme emrine karşı dava da aynı mahkemede açılabilir." },
      { question: "Navlun gelirleri eksik beyan edilirse ne olur?", answer: "Navlun gelirleri eksik beyan edilirse vergi idaresi re'sen veya ikmalen tarhiyat yapabilir ve buna bağlı ceza uygulanabilir. Bu işlemlere karşı ihbarnamenin tebliğinden itibaren 30 gün içinde dava açılabilir. Vergi incelemesi sürecinde beyanlar, fatura ve kayıtlar birlikte değerlendirilir; nakliye işletmelerine bu konuda danışmanlık verilir." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma başvurusu dava hakkını ortadan kaldırmaz. Uzlaşma sağlanamazsa kalan dava açma süresi korunur ve vergi mahkemesinde dava açılabilir. Vergi idaresi nezdindeki uzlaşma görüşmelerinde temsil sağlanır; uzlaşma ile dava yolu arasındaki tercih tarhiyatın miktarı ve dayanağına göre değerlendirilir." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Ödeme emrine karşı tebliğden itibaren 15 gün içinde vergi mahkemesine başvurulmalıdır. Ödeme emri, kesinleşmiş vergi borcunun tahsili için gönderilir; süre kaçırılırsa takip devam eder. Dava açılırken ödeme emrinin dayanağı olan tarhiyatın kesinleşme durumu ve tebliğ usulü birlikte incelenir." },
    ],
    howToTitle: "Esenler'de Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "esenler-borclar-hukuku-avukati",
    name: "Esenler Borçlar Hukuku Avukatı",
    heroTitle: "Esenler Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Taşıma sözleşmesi uyuşmazlıkları, alacak talepleri ve tazminat davalarında temsil sağlanır; ticaret ve asliye hukuk mahkemeleri İstanbul Bakırköy Adliyesi'ndedir.",
    metaTitle: "Esenler Borçlar Hukuku Avukatı | Alacak Davası",
    metaDescription:
      "Esenler'de sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Borçlar hukuku kapsamında Esenler'deki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık verir.",
    highlightCards: [
      { title: "Taşıma Sözleşmeleri", description: "Eşya taşıma ve nakliye sözleşmelerinden doğan uyuşmazlıklar." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Acentelik İlişkileri", description: "Otogar içi bilet satış ve acentelik sözleşmesi uyuşmazlıkları." },
      { title: "Tazminat Talepleri", description: "Taşıma sırasında oluşan hasarlardan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Eşya taşıma sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Taşıma sırasında oluşan hasar nedeniyle tazminat talepleri",
      "Otogar içi acentelik ve bilet satış sözleşmelerinden doğan uyuşmazlıklar",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Kara taşımacılığı ve nakliye sektörünün merkezlerinden biri olan Esenler'de, eşya taşıma sözleşmelerinden doğan hasar ve gecikme kaynaklı tazminat talepleri sık karşılaşılan dava türleri arasındadır.",
      "Bu davalar İstanbul Bakırköy Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Taşıma sırasında eşya hasar görürse kim sorumludur?", answer: "Kural olarak taşıyıcı, taşıma süresince oluşan hasardan sorumlu tutulabilir; sözleşme şartları da dikkate alınır. Eşya taşıma sözleşmesinin ihlaline dayalı davalarda hasarın kapsamı, taşıma belgeleri ve tarafların yükümlülükleri incelenir. Zarar gören taraf, hasarı belgeleyerek tazminat talebinde bulunabilir." },
      { question: "Otogar içi acentelik sözleşmesi tek taraflı feshedilebilir mi?", answer: "Otogar içi acentelik sözleşmesinin tek taraflı feshi, sözleşme şartlarına ve haklı sebebin bulunup bulunmadığına göre değerlendirilir. Fesih hakkının kullanılma biçimi ve sözleşmedeki bildirim hükümleri sonucu etkiler. Haksız fesih iddiasında sözleşme metni ve tarafların yazışmaları incelenir; gerekirse alacak veya tazminat davası açılabilir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Ticari alacak davası, niteliğine göre asliye ticaret mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür. Bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması zorunlu olabilir. Alacağın ticari nitelikte olup olmadığı sözleşmeye ve tarafların sıfatına göre belirlenir." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, dava öncesi arabuluculuk her zaman şart değildir; yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Zorunlu olan hallerde arabuluculuğa başvurulmadan dava açılırsa dava usulden reddedilebilir. Uyuşmazlığın bu kapsama girip girmediği dava açılmadan önce incelenir." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse zamanaşımına uğramış alacak talep edilemez; ileri sürmezse talep edilebilir. Mahkeme zamanaşımını kendiliğinden dikkate almaz, bu defi borçlunun ileri sürmesi gerekir. Alacak davası veya icra takibi açılmadan önce alacağın doğduğu tarih ve süreyi kesen işlemler incelenir." },
    ],
    howToTitle: "Esenler'de Alacak Davası Süreci Nasıl İşler?",
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

export const esenlerServices: PseoService[] = [...esenlerBaseServices, esenlerMiras];
