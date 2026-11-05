import type { PseoService } from "./types";
import { gungorenMiras } from "./miras/gungorenMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const gungorenBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "gungoren-avukat",
    name: "Güngören Avukat",
    heroTitle: "Güngören Avukat",
    heroSubtitle:
      "Haznedar, Güneştepe, Tozkoparan veya Mareşal Çakmak'ta yaşayan ve çarşıda ticaret yapan kişiler; aile, iş, icra, ceza, gayrimenkul, borçlar, vergi ve idare hukuku dosyaları için danışmanlık ve temsil alabilir. Güngören'deki davalar İstanbul Bakırköy Adliyesi'nde görülür.",
    metaTitle: "Güngören Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Güngören'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'ni bitirmiş; İstanbul Barosu'nda 72621 sicil numarasıyla avukatlık yapmaktadır. Büro Güngören'de değil Beşiktaş/Sinanpaşa'dadır; ilçedeki esnaf, çalışan, ev sahibi ve kiracılarla büroda veya internet üzerinden görüşülür. Randevu WhatsApp veya telefonla talep edilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Şüpheli ve sanık müdafiliği ile mağdur vekilliği." },
      { title: "Aile Hukuku", description: "Velayet, nafaka ve boşanma davalarında temsil ile protokol hazırlığı." },
      { title: "Gayrimenkul Hukuku", description: "Dükkan, depo ve konut kirası ile tapu sorunlarının takibi." },
      { title: "İş Hukuku", description: "Çarşı işyerlerinde çalışanların alacak ve tazminat talepleri." },
      { title: "İcra Hukuku", description: "Toptan satıştan doğan alacakların takibi ve takibe itirazlar." },
      { title: "İdare Hukuku", description: "İdari para cezası ve belediye işlemlerine karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Güngören Vergi Dairesi kaynaklı tarhiyat ve ceza itirazları." },
      { title: "Borçlar Hukuku", description: "Mal teslimi, bedel ödemesi ve gecikme tazminatı uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Şüpheli, sanık veya mağdur sıfatıyla ceza yargılamasında temsil",
      "Boşanma, velayet ve nafaka davalarında protokol hazırlığı ve dava takibi",
      "Dükkan, depo ve konut kiraları ile tapu kayıtlarına ilişkin uyuşmazlıklar",
      "Çarşı işyerlerinde çalışanların kıdem, ihbar ve fazla mesai alacakları",
      "Çek, senet ve fatura kaynaklı alacakların icra yoluyla takibi",
      "İdari para cezası ve belediye işlemlerine karşı iptal davaları",
      "Vergi inceleme raporu ve ceza ihbarnamelerine itiraz süreçleri",
      "Toptan satış, mal teslimi ve ödeme gecikmesinden doğan tazminat davaları",
    ],
    localParagraphs: [
      "1992'ye kadar Bakırköy'ün parçası olan Güngören, yaklaşık 7 km² yüzölçümüyle küçük bir alana sığar; Güneştepe, Gençosman, Akıncılar ve Sanayi gibi mahallelerde iş yeri ile konut iç içe geçmiştir. Toptan tekstil çarşısı bu yoğun yapının en belirgin ticari unsurudur.",
      "Haznedar'daki metrobüs durağı ve T1 tramvayına yakınlık çarşıya erişimi kolaylaştırır. Güngören'deki davalar İstanbul Bakırköy Adliyesi'nde, vergi işlemleri Güngören Vergi Dairesi Müdürlüğü'nde yürür; görüşmeye kimlik, sözleşme, tebligat ve ödeme belgeleriyle gelmek süreci hızlandırır.",
    ],
    faqs: [
      { question: "Güngören'de açılacak davalar için görevli adliye neresidir?", answer: "Güngören'de açılacak hukuk, ceza ve icra dosyalarında görevli adliye İstanbul Bakırköy Adliyesi'dir. Vergi uyuşmazlıkları vergi mahkemelerinde, idari işlemlere karşı davalar idare mahkemelerinde görülebilir. Dosyanın türüne göre görevli mahkeme değiştiğinden ilk görüşmede başvuru yolu birlikte belirlenir." },
      { question: "Çarşıdaki ticari alacaklar için hukuki destek alınabilir mi?", answer: "Evet; mal teslimi, bedel ödemesi, çek ve senet alacakları ile toptan satış sözleşmesi gibi çarşı kaynaklı uyuşmazlıklarda danışma ve takip hizmeti verilir. Fatura, sevk irsaliyesi, cari hesap kayıtları ve yazışmalar incelenerek icra takibi, dava veya arabuluculuk seçeneklerinden uygun olanı değerlendirilir." },
      { question: "Büro Güngören'de mi, Bakırköy Adliyesi'ne nasıl gidilir?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; görüşmeler büroda ya da çevrim içi yapılabilir. Bakırköy Adliyesi'ne metrobüs ve T1 tramvay bağlantıları üzerinden ulaşılabilir. Haznedar'daki metrobüs durağı Güngören'deki müvekkiller için ulaşımı kolaylaştıran noktalardan biridir. Adliyeye gidilmesi gereken günlerde güzergah ve saat birlikte planlanabilir." },
      { question: "Hangi hukuk dallarında danışmanlık veriliyor?", answer: "Aile, iş, icra, ceza, gayrimenkul, borçlar, vergi ve idare hukuku alanlarında hukuki danışma ve dosya takibi yapılır. Güngören'de dükkan kirası, toptan alacak, çalışan hakları ve kat mülkiyeti gibi konular öne çıkabilir. Konunun kapsamı ve izlenecek yol ilk görüşmede birlikte değerlendirilir." },
      { question: "Avukatlık ücreti nasıl belirlenir?", answer: "Ücret, dosyanın niteliğine ve gerektirdiği emeğe göre belirlenir ve randevuda bildirilir. Danışmanlık görüşmesi ücrete tabidir; vekalet verilirse ücret yazılı olarak kararlaştırılır. Avukatlık Kanunu m.164 uyarınca ücret, Avukatlık Asgari Ücret Tarifesi'nin altında belirlenemez. Ücretin kapsamı ve ödeme şekli, dosya incelendikten sonra randevuda açıkça konuşulur." },
    ],
    howToTitle: "Güngören'de Büroyla Çalışmaya Nasıl Başlanır?",
    howToSteps: [
      { name: "İlk Mesaj", text: "WhatsApp ya da telefonla konunun kısa özeti ve varsa süre bilgisi iletilir." },
      { name: "Belgelerin Derlenmesi", text: "Kimlik, sözleşme, tebligat veya ödeme kayıtları gibi evrak toplanır." },
      { name: "Danışma Görüşmesi", text: "Ücretli görüşmede hukuki durum değerlendirilir ve olası başvuru yolları anlatılır." },
      { name: "Vekalet ve Takip", text: "Karar verilirse vekaletname düzenlenir ve dosyanın gelişmeleri müvekkille paylaşılır." },
    ],
    crosslinkLabel: "Güngören Avukat (Genel)",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz", "kidem-tazminati-hesaplama-2026"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "gungoren-bosanma-avukati",
    name: "Güngören Boşanma Avukatı",
    heroTitle: "Güngören Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma süreçlerinde velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; aile mahkemeleri İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Güngören Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Güngören'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Aile hukuku alanında Güngören'deki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlar.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Esnaf Ailelerinde Mal Rejimi", description: "Dükkan işleten eşin katkı payının hesaplanması." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Dükkan işleten eşin katkı payının mal rejiminde değerlendirilmesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Çarşıda dükkan işleten aile işletmelerinin yaygın olduğu Güngören'de, boşanma davalarında eşlerden birinin işletmeye emek veya sermaye katkısının mal rejimi tasfiyesinde nasıl değerlendirileceği önemli bir konu olabilmektedir.",
      "Boşanma, velayet ve nafaka davalarına İstanbul Bakırköy Adliyesi'ndeki aile mahkemelerinde bakılır. Anlaşmalı süreçte protokolün tam olması, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Anlaşmalı boşanmada dükkan/işletme nasıl paylaşılır?", answer: "Anlaşmalı boşanmada eşler dükkan veya işletmenin paylaşımı konusunda protokolde serbestçe anlaşabilir. Anlaşma sağlanamazsa mal rejimi hükümleri uygulanır. Güngören'deki aile işletmelerinde eşlerin emek veya sermaye katkısı bu tasfiyede önem taşır; TMK m.166/3 uyarınca en az 1 yıllık evlilik ve duruşmada iki eşin birlikte beyanı aranır." },
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Boşanma davası için İstanbul Bakırköy Adliyesi'ndeki aile mahkemesine başvurulur. Güngören'deki boşanma, velayet ve nafaka davalarına bu adliyedeki aile mahkemelerinde bakılır. TMK m.168 uyarınca yetkili mahkeme, eşlerden birinin yerleşim yeri mahkemesi veya eşlerin son birlikte oturduğu yer mahkemesidir; dilekçe buna göre hazırlanır." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Evet, çocuk belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir. Mahkeme velayet düzenlemesinde çocuğun yararını esas alır; çocuğun yaşı, ihtiyaçları ve ebeveynlerle ilişkisi birlikte değerlendirilir. Çocuğun görüşü bağlayıcı olmayıp kararın dayanaklarından yalnızca biri olarak ele alınır." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Nafaka miktarı, tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilerek belirlenir. Mahkeme, nafaka ödeyecek tarafın ödeme gücünü ve nafaka alacak tarafın ihtiyacını gelir belgeleri, maaş bordroları ve harcama kalemleri üzerinden inceler. Koşullar değişirse nafakanın artırılması, azaltılması veya kaldırılması talep edilebilir." },
      { question: "Eşin işletmeye kayıtsız katkısı ispatlanabilir mi?", answer: "Evet, eşin işletmeye kayıtsız katkısı tanık beyanı, banka kayıtları ve benzeri delillerle ispat edilmeye çalışılabilir. Güngören çarşısındaki aile işletmelerinde dükkan adına kayıtlı olmasa da emek veya sermaye katkısı mal rejimi tasfiyesinde ve katkı payı alacağında değerlendirilir. Delillerin düzenli toplanması önem taşır." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir veya takipten vazgeçilebilir. Boşanma davası sürerken eşler barışırsa mahkemeye bu yönde beyanda bulunulur. Dava açılmış olması barışmaya engel değildir; ancak geçici nafaka ve velayet düzenlemeleri gibi sürecin sonuçları mahkeme tarafından ayrıca değerlendirilir." },
    ],
    howToTitle: "Güngören'de Boşanma Süreci Hangi Aşamalardan Geçer?",
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
    urlSlug: "gungoren-ceza-avukati",
    name: "Güngören Ceza Avukatı",
    heroTitle: "Güngören Ceza Avukatı",
    heroSubtitle:
      "Şüpheli veya sanık olarak gözaltından duruşmaya uzanan sürecin tamamında müdafi, mağdur olarak ise vekil sıfatıyla çalışılır; yargılama İstanbul Bakırköy Adliyesi'nin ceza mahkemelerinde sürer.",
    metaTitle: "Güngören Ceza Avukatı | Müdafilik",
    metaDescription:
      "Güngören'de soruşturma, kovuşturma, tutukluluğa itiraz ve kanun yolu aşamalarında ceza avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'ni 2019'da bitiren Furkan Arıkan, İstanbul Barosu'nda 72621 sicil numarasıyla kayıtlıdır. Güngören'de yaşayan ya da çarşıda faaliyet gösteren kişilerin ceza dosyalarında soruşturmadan istinaf ve temyize kadar savunma ve vekillik yapar.",
    highlightCards: [
      { title: "Gözaltı ve İfade", description: "Kolluk ve savcılık ifadesinde müdafi yardımı." },
      { title: "Dava Takibi", description: "Duruşmalara katılım, delil ve tanık değerlendirmesi." },
      { title: "Tutuklamaya İtiraz", description: "Tutuklama ve tutukluluğun devamı kararlarına karşı başvuru." },
      { title: "Çarşı Kaynaklı İddialar", description: "Dükkan ve depo ilişkilerinden doğan güveni kötüye kullanma ve dolandırıcılık şikayetleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltındaki kişiyle görüşme ve ifade sırasında müdafi olarak bulunma",
      "Soruşturma dosyasındaki belge ve tutanakların incelenmesi",
      "Tutuklama ve adli kontrol kararlarına itiraz dilekçelerinin hazırlanması",
      "Duruşmalarda sanık müdafiliği veya katılan vekilliği",
      "Ticari belgelerin delil olarak değerlendirildiği güveni kötüye kullanma ve dolandırıcılık dosyaları",
      "Uzlaşma görüşmelerinin yürütülmesi ve sonuçlarının dosyaya yansıtılması",
    ],
    localParagraphs: [
      "Toptan ticarette mal alışverişi sıklıkla cari hesap, sevk irsaliyesi ve vadeli ödeme gibi belgelerle yürütüldüğünden, Güngören çarşısında ödemenin yapılmaması veya malın iade edilmemesi gibi ticari anlaşmazlıklar zaman zaman savcılığa şikayet olarak taşınabilir. Bu tür dosyalarda fiilin cezai mi, yoksa tamamen hukuki mi olduğu ilk tartışma konusudur.",
      "Güngören'de işlendiği ileri sürülen suçlara ilişkin yargılama İstanbul Bakırköy Adliyesi'nde yapılır. Kişi gözaltına alındığında müdafi yardımı hakkı hemen doğar; bu hakkın ifadeden önce kullanılması, dosyanın sonraki safhalarını doğrudan etkileyebilir.",
    ],
    faqs: [
      { question: "Çarşıdaki ticari ilişkiden doğan bir şikayette süreç nasıl işler?", answer: "Şikayet veya ihbar üzerine Cumhuriyet savcılığı soruşturma başlatır, taraflardan ifade alır ve fatura, sevk irsaliyesi, cari hesap kayıtları ile yazışmalar gibi ticari belgeleri inceler. Fiilin güveni kötüye kullanma ya da dolandırıcılık sayılıp sayılmayacağı, olayın somut koşullarına göre belirlenir." },
      { question: "Güngören'de işlenen suça ait dava hangi adliyede görülür?", answer: "Güngören'de işlendiği ileri sürülen suçlara ilişkin dosyalar, İstanbul Bakırköy Adliyesi bünyesinde sürdürülür. Soruşturma savcılık ve sulh ceza hakimliğinde yürütülür; iddianame kabul edilirse yargılama görevli ceza mahkemesinde yapılır. Suçun ağırlığına göre asliye ceza veya ağır ceza mahkemesi görevli olur." },
      { question: "Avukat olmadan ifade verilebilir mi?", answer: "İfade avukatsız da alınabilir, ancak şüpheli ve sanık ifade öncesinde müdafi yardımından yararlanma hakkına sahiptir; bu hak kendisine hatırlatılır. Müdafi, ifade sırasında yanında bulunur ve dosyayı inceler. Bu nedenle ifadeden önce bir avukatla görüşmek, hakkın etkin kullanılması bakımından önemlidir." },
      { question: "Takipsizlik kararı verilirse ne yapılabilir?", answer: "Kovuşturmaya yer olmadığına dair karara, kararın tebliğinden itibaren on beş gün içinde sulh ceza hakimliği nezdinde itiraz edilebilir. İtiraz dilekçesinde kararın neden hatalı olduğu belgelerle açıklanır. Sürenin kaçırılması halinde bu yola başvurma imkanı ortadan kalkabileceğinden, tebligat tarihi hemen kontrol edilmelidir." },
      { question: "Tutuklama kararına itiraz süresi ne kadardır?", answer: "Tutuklama kararına karşı, kararın öğrenilmesinden itibaren yedi gün içinde itiraz edilebilir. Dilekçede tutuklamanın şartlarının bulunmadığı ya da adli kontrolün yeterli olduğu gerekçeleriyle savunma yapılır. İtirazın yanı sıra tutukluluğun devamının gerekliliği de belirli aralıklarla ayrıca incelenir." },
    ],
    howToTitle: "Güngören'de Bir Ceza Dosyası Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "Şikayet veya İhbar", text: "Olay, mağdurun şikayeti, ihbar ya da kolluğun tespiti üzerine savcılığa ulaşır." },
      { name: "Soruşturma", text: "Savcılık delilleri toplar; şüpheli, tanık ve mağdurdan ifade alınır." },
      { name: "İddianame ve Duruşma", text: "İddianame kabul edilirse görevli ceza mahkemesinde yargılama başlar." },
      { name: "Kanun Yolu", text: "Hükme karşı istinaf, uygun hallerde temyiz yoluyla üst mahkemeye başvurulabilir." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "gungoren-gayrimenkul-avukati",
    name: "Güngören Gayrimenkul Avukatı",
    heroTitle: "Güngören Gayrimenkul Avukatı",
    heroSubtitle:
      "Güngören'in çarşı dükkanları, depoları ve sıkışık apartman dokusundaki taşınmazlar için kira, tapu ve kat mülkiyeti uyuşmazlıklarında hukuki destek verilir; bu dosyaların görüldüğü yer İstanbul Bakırköy Adliyesi'dir.",
    metaTitle: "Güngören Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Güngören'de çarşı dükkanı kiraları, tapu iptali ve konut uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'ni 2019'da bitiren Furkan Arıkan, İstanbul Barosu'nda 72621 sicil numarasıyla kayıtlıdır. Güngören'de dükkan, depo veya konut sahibi olan ya da kiracı bulunan kişilerin kira, tapu ve kat mülkiyeti sorunlarında danışmanlık yapar.",
    highlightCards: [
      { title: "Dükkan Kiraları", description: "Çarşıdaki işyerlerinde kira şartları, artış ve devir meseleleri." },
      { title: "Tapu Kayıtları", description: "Yolsuz tescil ve kayıt hatalarında iptal ya da düzeltme talepleri." },
      { title: "Kat Mülkiyeti", description: "Küçük alanda yoğunlaşan apartmanlarda yönetim ve aidat anlaşmazlıkları." },
      { title: "Tahliye ve Sözleşme", description: "Kira sözleşmesinin hazırlanması, ihtar ve tahliye aşamaları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Dükkan ve depo kira sözleşmelerinin hazırlanması veya incelenmesi",
      "İşyeri devrinde kiraya veren onayı ve kiracılığın sona ermesi sorunları",
      "Apartman yönetimi, aidat ve kat malikleri kurulu kararlarına itiraz",
      "Yolsuz tescil iddiasıyla tapu iptali ve tescil davaları",
      "Kira bedelinin belirlenmesi ve sözleşme şartlarının uyarlanması davaları",
      "Kira borcu, ihtiyaç veya tahliye taahhüdüne dayanan tahliye süreçleri",
    ],
    localParagraphs: [
      "Güngören'in sınırlı yüzölçümünde çarşı dükkanları ile konutlar yan yana bulunduğundan, dükkanın devri, depo kullanımı ve kira bedelindeki artış gibi konular gündeme gelebilir. Aynı sebeple Güneştepe veya Merkez gibi mahallelerdeki apartmanlarda yönetim ve ortak gider anlaşmazlıkları da gündeme gelebilir.",
      "Kira ve tahliye davaları niteliğine göre sulh hukuk mahkemesinde, tapu iptali ve tescil davaları ise asliye hukuk mahkemesinde görülür; her ikisi de İstanbul Bakırköy Adliyesi'ndedir. Dava öncesinde tapu kaydı, kira sözleşmesi ve ödeme dekontlarının hazırlanması gerekir.",
    ],
    faqs: [
      { question: "Dükkan kirasını devretmek için kiraya verenin izni gerekir mi?", answer: "Genel kural olarak evet; konut ve çatılı işyeri kiralarında kiracı, kiraya verenin yazılı rızası olmadan kiralananı başkasına devredemez. İşyeri devrinde sözleşmedeki özel hükümler ve kanundaki istisnalar ayrıca incelendiğinden, devirden önce sözleşme ile tapu kaydının birlikte değerlendirilmesi gerekir." },
      { question: "Dükkan kira bedeli mahkemede nasıl belirlenir?", answer: "Mahkeme, dükkanın konumunu, durumunu ve emsal kira bedellerini bilirkişi incelemesiyle değerlendirerek bedeli belirler. Güngören çarşısında benzer işyerlerinin kira seviyeleri bu incelemede karşılaştırma ölçütü olabilir. Hangi dönem için bedel talep edildiği ise dosyadaki sözleşme ve ihtar tarihlerine göre netleşir." },
      { question: "Güngören'deki gayrimenkul davaları hangi mahkemede görülür?", answer: "Güngören'deki gayrimenkul uyuşmazlıkları, İstanbul Bakırköy Adliyesi bünyesindeki hukuk mahkemelerine gider. Kira ve tahliye davalarına sulh hukuk mahkemesi bakar; tapu iptali ve tescil davaları ise asliye hukuk mahkemesinin görev alanındadır. Dosyanın türü, ilk görüşmede belgeler incelenerek netleştirilir." },
      { question: "Tapu iptali davası hangi durumlarda açılır?", answer: "Tapu iptali davası, tescilin hukuka aykırı olduğu, örneğin sahte belgeye ya da geçersiz bir işleme dayandığı hallerde açılır. Davacının hak sahibi olduğunu belgelemesi gerekir. Mahkeme tapu kaydını, dayanak belgeleri ve gerekirse bilirkişi raporunu inceleyerek karar verir." },
      { question: "Kat malikleri kurulunun aldığı karar iptal ettirilebilir mi?", answer: "Evet, karar kanuna veya yönetim planına aykırıysa ilgili kat maliki, kararın iptali için sulh hukuk mahkemesine başvurabilir. Kanunda öngörülen süre geçirilirse hak kaybı doğabileceğinden, kararın öğrenilmesinin ardından toplantı tutanağı ve yönetim planı vakit kaybetmeden incelenmelidir." },
    ],
    howToTitle: "Güngören'de Dükkan Kirası Uyuşmazlığı Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "Belgelerin İncelenmesi", text: "Kira sözleşmesi, ödeme dekontları ve tapu kaydı birlikte okunur." },
      { name: "İhtar veya Bildirim", text: "Gerekiyorsa kiraya verene ya da kiracıya noter aracılığıyla yazılı bildirim gönderilir." },
      { name: "Dilekçenin Hazırlanması", text: "Talep, hukuki dayanak ve deliller dilekçede toplanır." },
      { name: "Yargılama ve Karar", text: "Bilirkişi incelemesi gerekirse yapılır, ardından mahkeme hükmünü verir." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "kira-bedeli-tespit-ve-uyarlama-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "gungoren-icra-avukati",
    name: "Güngören İcra Avukatı",
    heroTitle: "Güngören İcra Avukatı",
    heroSubtitle:
      "Toptan tekstil ticaretinden doğan alacakların tahsili amacıyla icra takibi, itiraz ve haciz süreçlerinde temsil sağlanır; icra daireleri İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Güngören İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Güngören'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İcra ve iflas hukuku kapsamında Güngören'deki tekstil esnafına ve bireysel müvekkillere danışmanlık verir.",
    highlightCards: [
      { title: "Çarşı Esnafı Alacakları", description: "Toptan tekstil satışından doğan çek/senet alacaklarının takibi." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "İflas/Konkordato", description: "Mali durum değerlendirmesi ve başvuru danışmanlığı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Toptan tekstil satışından doğan çek ve senet alacaklarının takibi",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "İhaleye katılım ve ihalenin feshi talepleri",
      "Mali sıkıntı yaşayan esnaf ve işletmeler için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Dar bir alana sıkışmış yoğun bir tekstil çarşısına sahip Güngören'de, komisyoncu ve toptancı esnaf arasındaki vadeli satışlardan doğan çek ve senet alacakları icra takiplerinin başlıca nedenlerindendir.",
      "Bu takiplere ilişkin uyuşmazlıklar İstanbul Bakırköy Adliyesi'ndeki icra mahkemelerinde görülür; borçlunun Güngören'de yerleşik olduğu takiplerde yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "Vadeli tekstil satışında ödeme yapılmazsa ilk adım ne olmalı?", answer: "Ödeme yapılmazsa elde bulunan çek, senet veya faturaya dayanarak icra takibi başlatılabilir. Güngören çarşısındaki vadeli satışlarda cari hesap kayıtları, sevk irsaliyesi ve yazışmalar alacağın ispatında kullanılır. Takip talebi yetkili icra dairesine sunulur ve borçluya ödeme emri gönderilir; borçlunun itiraz süresi 7 gündür." },
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "İcra takibi, sözleşme, senet, çek, fatura veya mahkeme ilamı gibi belgelerle başlatılabilir. Alacağın dayanağını gösteren belgeler takip talebine eklenir; ilamlı takipte mahkeme kararı, ilamsız takipte alacağı ispata yarayan belge esas alınır. Takip talebi yetkili icra dairesine sunulur ve borçluya ödeme emri gönderilir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Ödeme emrine itiraz süresi, tebliğden itibaren 7 gündür. İİK m.62 uyarınca borçlu bu süre içinde icra dairesine itiraz ederse takip durur. Sürenin kaçırılması halinde takip kesinleşebilir; bu nedenle ödeme emrinin tebliğ tarihi ve tebligat evrakı saklanmalı, süre dolmadan değerlendirme yapılmalıdır." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Haciz, kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir. Borçlunun taşınmaz kayıtları, banka hesapları ve diğer mal varlığı üzerinden işlem yapılabilir; kanunda haczedilemez sayılan mallar ise kapsam dışındadır. Haciz, ödeme emrinin kesinleşmesinden sonra alacaklının talebi üzerine icra dairesi tarafından uygulanır." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Borçlu ödeme yapmazsa haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür. Ödeme emrine itiraz edilmezse takip kesinleşir; alacaklı haciz talep eder, haczedilen mallar satış aşamasına taşınır. Borçlu itiraz ederse itirazın iptali veya kaldırılması davası gibi yollar değerlendirilir." },
    ],
    howToTitle: "Güngören'de İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "gungoren-idare-avukati",
    name: "Güngören İdare Avukatı",
    heroTitle: "Güngören İdare Avukatı",
    heroSubtitle:
      "Belediye, imar ve işyeri ruhsat işlemlerine karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Güngören İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Güngören'de idari işlemlerin iptali, tazminat davaları ve idareye itiraz süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır ve MEF Üniversitesi Hukuk Fakültesi 2019 mezunudur. İdari işlemlerin iptali ve tam yargı davalarında Güngören'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Çarşı İşyeri Ruhsatları", description: "Tekstil çarşısındaki işyeri ve depo ruhsat süreçleri." },
      { title: "İmar Uygulamaları", description: "Kompakt yerleşim dokusunda imar durumu uyuşmazlıkları." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Çarşı içi işyeri ve depo ruhsat işlemlerine itiraz edilmesi",
      "İmar planı değişikliklerine karşı iptal davası açılması",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
      "Belediye encümen kararlarına karşı dava açılması",
    ],
    localParagraphs: [
      "Sınırlı yüzölçümüne rağmen yoğun bir çarşı faaliyetinin sürdüğü Güngören'de, işyeri ve depo ruhsatlarına ilişkin idari işlemler ile imar uygulamaları sık başvurulan idari dava konuları arasındadır.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "Çarşı içi depo ruhsatı reddedilirse itiraz süresi nedir?", answer: "Depo ruhsatı reddedilirse tebliğ tarihinden itibaren 60 gün içinde idare mahkemesinde dava açılabilir. İYUK m.7 uyarınca bu süre kaçırılırsa iptal davası yolu kapanabilir. Dava için ret yazısı, tebliğ tarihi ve başvuru evrakı toplanır; Güngören'deki davalar İstanbul idare mahkemelerinde görülür." },
      { question: "İşyeri ruhsatı iptal edilirse ne yapılabilir?", answer: "İşyeri ruhsatı iptal edilirse iptal işlemine karşı idare mahkemesinde dava açılabilir. Dava süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür. Güngören çarşısındaki işyerleri için iptal yazısı, tebliğ tarihi ve ruhsat belgeleri toplanır; işlemin gerekçesi hukuka uygunluk bakımından bu belgelerle incelenir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, idari para cezasına karşı yasal süresinde dava açılabilir. İdari işlemlere karşı iptal davası genel kural olarak tebliğden itibaren 60 gün içinde idare mahkemesinde açılır; ceza tutanağında farklı bir başvuru yolu belirtilmişse o yol esas alınmalıdır. Tutanak, tebliğ zarfı ve ödeme belgeleri saklanmalıdır." },
      { question: "İmar planı ilan edildikten sonra ne kadar sürede itiraz edilmeli?", answer: "İmar planına karşı ilan tarihinden itibaren yasal süre içinde idare mahkemesinde dava açılmalıdır. Genel kural olarak iptal davası süresi 60 gündür; ancak planın ilan tarihi ve tebliğ koşulları süre hesabını etkileyebilir. Güngören'de işyeri ve depo ruhsatlarını etkileyen imar uygulamalarında ilan ve ilgili plan belgeleri incelenmelidir." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde iptal davası açılabilir. Ret işleminin tebliğinden itibaren 60 gün içinde dava açılması gerekir; bu süre İYUK m.7 uyarınca belirlenir. Dava için ret yazısı, başvuru evrakı ve ilgili imar belgeleri toplanır; işlemin gerekçesi bu belgeler üzerinden değerlendirilir." },
    ],
    howToTitle: "Güngören'de İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "gungoren-is-hukuku-avukati",
    name: "Güngören İş Hukuku Avukatı",
    heroTitle: "Güngören İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemeleri İstanbul Bakırköy Adliyesi bünyesindedir.",
    metaTitle: "Güngören İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Güngören'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İş hukuku kapsamında Güngören'deki tekstil çarşısı çalışanlarına ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Çarşı Çalışanı Alacakları", description: "Tezgahtar ve depo elemanlarının ücret uyuşmazlıkları." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Tezgahtar ve depo elemanlarının ücret ve fazla mesai alacaklarının tahsili",
      "Sigortasız veya eksik günlü çalışmaya ilişkin hizmet tespiti davaları",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Küçük ama yoğun bir tekstil çarşısına sahip Güngören'de, dükkan ve depolarda çalışan tezgahtar ve yardımcı personelin ücret, fazla mesai ve sigorta kaydı uyuşmazlıkları sık görülen iş hukuku konularındandır.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları İstanbul Bakırköy Adliyesi'ndeki iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Çarşıda sigortasız çalıştırılan tezgahtarın hakları nelerdir?", answer: "Sigortasız çalıştırılan tezgahtar, hizmet tespiti davası açarak çalışma süresini ve sigorta eksikliğini mahkemece tespit ettirebilir. Maaş dekontları, tanık beyanları ve işyeri kayıtları delil olarak kullanılır. Ücret, fazla mesai ve tazminat alacakları da ayrıca talep edilebilir; dava Bakırköy Adliyesi'ndeki iş mahkemesinde görülür." },
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Kıdem tazminatı, çalışma süresi ve son brüt ücret esas alınarak hesaplanır. Çalışılan her tam yıl için bir aylık brüt ücret üzerinden hesap yapılır; artan süre de orantılı olarak eklenir. Bordro, iş sözleşmesi ve sigorta kayıtları incelenir; ücrete eklenen düzenli yan haklar da hesaba dahil edilebilir." },
      { question: "Güngören'de iş mahkemesi nerededir?", answer: "Güngören'deki iş davalarına İstanbul Bakırköy Adliyesi bünyesindeki iş mahkemeleri bakar. İşe iade ve işçilik alacağı davalarında kanunda öngörülen hallerde önce arabuluculuğa başvurulur. Arabuluculukta anlaşma sağlanamazsa dava aynı adliyedeki iş mahkemesinde açılır; dosyaya ait bordro ve sözleşmeler hazırlanmalıdır." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "İşe iade sürecinin toplam süresi dosyaya göre değişir ve kesin bir süre öngörülemez. Önce fesihten itibaren 1 ay içinde arabulucuya başvurulur; anlaşma olmazsa son tutanaktan itibaren 2 hafta içinde dava açılır. İş K. m.18 uyarınca 30 işçi ve 6 ay kıdem koşulu aranır." },
      { question: "Depoda iş kazası geçiren çalışan ne yapmalı?", answer: "Olay derhal SGK'ya bildirilmeli, tedavi ve tazminat süreci başlatılmalıdır. Kaza tutanağı, sağlık raporları ve tanık bilgileri toplanarak delil olarak saklanır. Güngören'deki depo ve dükkanlarda çalışanların iş kazasından doğan tazminat talepleri Bakırköy Adliyesi'ndeki iş mahkemelerinde görülür; süreç belgelerle birlikte değerlendirilir." },
    ],
    howToTitle: "Güngören'de İşe İade Süreci Nasıl İşler?",
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
    urlSlug: "gungoren-kira-tahliye-avukati",
    name: "Güngören Kira ve Tahliye Avukatı",
    heroTitle: "Güngören Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Çarşı dükkanı ve konut tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemeleri İstanbul Bakırköy Adliyesi'ndedir.",
    metaTitle: "Güngören Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Güngören'de kiracı tahliyesi, kira bedeli tespiti ve kira sözleşmesi uyuşmazlıklarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Kira hukuku alanında Güngören'deki kiraya verenlere ve kiracılara danışmanlık verir.",
    highlightCards: [
      { title: "Dükkan Rayiç Bedeli", description: "Sınırlı çarşı alanında güncel kira bedelinin tespiti." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "İşyeri Tahliyesi", description: "Çarşı dükkanlarında tahliye süreci ve usulü." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Çarşı dükkanlarında rayiç kira bedelinin tespiti ve uyarlanması",
      "Konut ve işyeri kira sözleşmelerinin hazırlanması ve incelenmesi",
      "İhtiyaç nedeniyle açılan tahliye davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Sınırlı yüzölçümü nedeniyle çarşı içindeki dükkanlara olan talebin yüksek kaldığı Güngören'de, kira bedeli tespiti davaları konut kiralarına kıyasla daha sık başvurulan bir yol haline gelmektedir.",
      "Bu davalara İstanbul Bakırköy Adliyesi bünyesindeki sulh hukuk mahkemelerinde bakılır; taşınmazın konut mu işyeri mi olduğu, uygulanacak usulü doğrudan etkiler.",
    ],
    faqs: [
      { question: "Çarşıda dükkan kirası neden sık uyuşmazlık konusu olur?", answer: "Güngören'de sınırlı alan nedeniyle dükkana olan talebin yüksek kalması, rayiç bedel farklarını daha belirgin hale getirebilir. Kira bedeli tespiti davaları bu nedenle konut kiralarına kıyasla daha sık başvurulan bir yoldur. Davalar Bakırköy Adliyesi'ndeki sulh hukuk mahkemelerinde görülür; kira sözleşmesi ve ödeme dekontları hazırlanmalıdır." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Rayiç bedel tespiti, mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Kira artışı konusunda taraflar anlaşamazsa mahkemeden kira bedelinin belirlenmesi istenir; mahkeme çevredeki benzer kiraları ve taşınmazın özelliklerini bilirkişi aracılığıyla inceler. Mevcut sözleşme ve önceki ödemeler bu inceleme için gereklidir." },
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir tahliye taahhüdü veya ihtiyaç nedeniyle kiracının tahliyesi talep edilebilir. Kira borcunda TBK m.315 uyarınca kiracıya en az 30 gün süre verilerek ihtar gönderilir; süre içinde ödeme yapılmazsa tahliye yolu açılır. Dava sulh hukuk mahkemesinde, taahhütte icra yoluyla açılır." },
      { question: "Güngören'de tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine göre değişir; birkaç aydan bir buçuk yıla kadar sürebilir. Sürenin uzunluğu tebligatın ulaşması, bilirkişi incelemesi ve itirazlar gibi etkenlere bağlıdır. Dava Bakırköy Adliyesi bünyesindeki sulh hukuk mahkemesinde görülür; sözleşmenin yazılı ve eksiksiz olması ispatı kolaylaştırır." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir. Taahhütnamenin kiracı tarafından kiralananın tesliminden sonra yazılı olarak verilmiş olması ve geçerlilik şartlarını taşıması gerekir. Taahhütname geçerli değilse veya itiraz edilirse uyuşmazlık sulh hukuk mahkemesinde görülür." },
    ],
    howToTitle: "Güngören'de Kira Bedeli Tespiti Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Emsal Araştırması", text: "Çarşı içindeki benzer nitelikteki dükkanların kira bedelleri araştırılır." },
      { name: "İhtarname", text: "Gerekiyorsa karşı tarafa bildirim yapılır." },
      { name: "Dava Açılması", text: "Sulh hukuk mahkemesinde tespit davası açılır." },
      { name: "Bilirkişi İncelemesi", text: "Mahkemenin görevlendirdiği bilirkişi güncel bedeli belirler." },
    ],
    crosslinkLabel: "Kira ve Tahliye Avukatı",
    relatedPostSlugs: ["kira-bedeli-tespit-ve-uyarlama-davasi", "kiracinin-tahliye-sureci"],
  },

  // ─────────────────────────── VERGİ ───────────────────────────
  {
    slug: "vergi",
    urlSlug: "gungoren-vergi-avukati",
    name: "Güngören Vergi Avukatı",
    heroTitle: "Güngören Vergi Avukatı",
    heroSubtitle:
      "Tekstil çarşısı işletmelerine yönelik vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Güngören Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Güngören'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Güngören'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Çarşı Esnafı İncelemesi", description: "Toptan tekstil ticaretine yönelik vergi incelemesi süreçleri." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Toptan tekstil ticaretine yönelik vergi incelemesi sürecinde danışmanlık",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Kayıt dışı işlem iddialarına karşı savunma hazırlanması",
    ],
    localParagraphs: [
      "Dünyanın önemli toptan tekstil çarşılarından birine sahip Güngören'de, yoğun nakit ve vadeli işlem hacmi nedeniyle kayıt düzenine ilişkin vergi incelemeleri ile bunlara bağlı ceza kesme işlemleri sık karşılaşılan konular arasındadır.",
      "Bu işlemlere karşı açılan davalar İstanbul vergi mahkemelerinde görülmektedir; ihbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "Toptan satışlarda kayıt dışı işlem iddiasına nasıl itiraz edilir?", answer: "İncelemenin dayanağı ve hesap yöntemi hukuka aykırıysa dava yoluyla itiraz edilebilir. Güngören çarşısında kayıt düzenine ilişkin incelemeler sonucu kesilen vergi ve ceza ihbarnamelerine karşı vergi mahkemesinde dava açılır; dava açma süresi tebliğden itibaren 30 gündür. İnceleme raporu ve defter kayıtları bu süreçte esas alınır." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "İhbarnameye karşı tebliğden itibaren 30 gün içinde vergi mahkemesinde dava açılabilir. İYUK m.7 uyarınca vergi davalarında dava açma süresi 30 gündür. Süre tebliğ tarihinden başladığı için ihbarnamenin tebliğ zarfı ve tarihi saklanmalıdır; ihbarname ve eklerinin dava dilekçesine bağlanması gerekir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "Vergi davaları, İstanbul vergi mahkemelerinde görülür. Vergi ve ceza ihbarnamelerine karşı iptal davası bu mahkemede açılır; dava açma süresi tebliğden itibaren 30 gündür. Uzlaşma yoluna başvurulsa bile kalan dava açma süresi dikkate alınmalı, süre geçirilmeden dosya değerlendirilmelidir." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur. Uzlaşma başvurusu vergi idaresi nezdinde yapılır; anlaşma olmazsa mükellef vergi mahkemesinde dava açabilir. Dava açma süresi 30 gün olduğundan uzlaşma tutanağı ve tebliğ tarihleri, sürenin ne kadar kaldığını belirlemek için dikkatle takip edilmelidir." },
      { question: "Ödeme emrine itiraz süresi nedir?", answer: "Vergi ödeme emrine karşı, ödeme emrinde belirtilen süre içinde vergi mahkemesine başvurulmalıdır. Sürenin hesabı ödeme emrinin tebliğ tarihine göre yapıldığından tebliğ zarfı ve belge saklanmalıdır. Güngören'de vergi mahkemesi davaları İstanbul vergi mahkemelerinde görülür; ödeme emrinin dayanağı olan ihbarname ve kesinleşme durumu da incelenir." },
    ],
    howToTitle: "Güngören'de Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "gungoren-borclar-hukuku-avukati",
    name: "Güngören Borçlar Hukuku Avukatı",
    heroTitle: "Güngören Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Toptan tekstil ticaretinden doğan sözleşme, alacak ve tazminat uyuşmazlıkları, Güngören'in bağlı bulunduğu İstanbul Bakırköy Adliyesi'ndeki ticaret ve asliye hukuk mahkemelerinde takip edilir.",
    metaTitle: "Güngören Borçlar Hukuku Avukatı",
    metaDescription:
      "Güngören'de sözleşme uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Güngören'de borçlar hukuku kapsamındaki sözleşme ve alacak uyuşmazlıkları, danışmanlıktan dava takibine uzanan bir süreçte ele alınır. Bu hizmeti sunan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Toptan Tekstil Sözleşmeleri", description: "Komisyonculuk ve toptan satıştan doğan uyuşmazlıklar." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Konsinye İlişkileri", description: "Konsinye teslim edilen ürünlerden doğan uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Toptan satış ve komisyonculuk sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Konsinye teslim ilişkilerinden doğan uyuşmazlıklar",
      "Ayıplı mal nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması kanunen zorunludur; Güngören'de bu davalara İstanbul Bakırköy Adliyesi'ndeki ticaret ve asliye hukuk mahkemelerinde bakılır.",
      "Toptan tekstil çarşısıyla tanınan ilçede, komisyonculuk ve konsinye teslim ilişkilerinden kaynaklanan ödeme gecikmeleri, borçlar hukuku alanında sık görülen uyuşmazlıklar arasındadır.",
    ],
    faqs: [
      { question: "Komisyoncu ile toptancı arasındaki uyuşmazlıklar nasıl çözülür?", answer: "Öncelikle sözleşme şartları incelenir, gerekirse arabuluculuk veya dava yoluna gidilir. Güngören çarşısındaki komisyonculuk ilişkilerinde cari hesap kayıtları, sevk irsaliyeleri ve yazışmalar uyuşmazlığın ispatında esas alınır. Bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurmak zorunludur." },
      { question: "Konsinye teslim edilen ürün satılmazsa ne olur?", answer: "Konsinye teslim edilen ürün satılmazsa sözleşme şartlarına göre ürün iade edilebilir veya bedeli mahsuplaşma yoluyla çözülebilir. Güngören çarşısında komisyonculuk ve konsinye teslim ilişkilerinde sözleşme hükümleri, teslim belgeleri ve cari hesap kayıtları incelenir. Anlaşma sağlanamazsa arabuluculuk veya dava yolu değerlendirilir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Ticari alacak davaları, niteliğine göre asliye ticaret mahkemesinde, İstanbul Bakırköy Adliyesi bünyesinde görülür. Bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması dava şartıdır. Fatura, sözleşme, sevk irsaliyesi ve cari hesap kayıtları dava öncesinde hazırlanmalıdır." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, dava öncesi arabuluculuk yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Şartın aranıp aranmadığı uyuşmazlığın türüne göre belirlenir; arabuluculuğa başvurulmadan açılan dava bu hallerde usulden reddedilebilir. Başvuru yolu, alacağın niteliği incelenerek belirlenir." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir. Mahkeme zamanaşımını kendiliğinden dikkate almaz, borçlunun bu savunmayı ileri sürmesi gerekir. Alacağın doğduğu tarih, zamanaşımını kesen işlemler ve borçlunun kısmi ödemeleri gibi hususlar dosya üzerinde incelenir." },
    ],
    howToTitle: "Güngören'de Ticari Alacak Davası Süreci Nasıl İşler?",
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

export const gungorenServices: PseoService[] = [...gungorenBaseServices, gungorenMiras];
