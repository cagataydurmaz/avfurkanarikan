import type { PseoService } from "./types";
import { cekmekoyMiras } from "./miras/cekmekoyMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefonla ulaşarak konunuzu birkaç cümleyle özetleyebilirsiniz." },
  { name: "Danışmanlık Görüşmesi", text: "Görüşme ücrete tabidir; belgeleriniz üzerinden hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Belge Derleme", text: "Temsil konusunda karar verilirse vekaletname düzenlenir ve dosya belgeleri toplanır." },
  { name: "Takip ve Bilgilendirme", text: "Mahkeme ve kurum işlemleri yürütülür, her aşama müvekkile bildirilir." },
];

const cekmekoyBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "cekmekoy-avukat",
    name: "Çekmeköy Avukat",
    heroTitle: "Çekmeköy Avukat",
    heroSubtitle:
      "22 Mart 2008 tarihli 5747 sayılı Kanun'la Ümraniye'den ayrılarak ilçe olan, Alemdağ, Taşdelen ve Ömerli belediyelerinin tüzel kişiliğinin sona ermesiyle yeni bir yönetime kavuşan Çekmeköy'de avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku dosyalarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçede adliye teşkilatı kurulmadığından dosyalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Çekmeköy Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Çekmeköy'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında avukatlık ve hukuki danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur. Yaklaşık 152 km² yüzölçümüyle Ümraniye, Sancaktepe, Beykoz ve Şile arasında yer alan; Merkez ve Mehmet Akif gibi kentleşmiş mahallelerle Ömerli ve Taşdelen gibi eski belediye yerleşimlerini bir arada barındıran Çekmeköy'deki müvekkillere ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku konularında temsil sağlar; görüşme talepleri WhatsApp veya telefonla iletilebilir. Büro Beşiktaş/Sinanpaşa'dadır.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturmada müdafilik, tutukluluğa itiraz." },
      { title: "Aile Hukuku", description: "Boşanma, velayet, nafaka ve mal rejimi tasfiyesinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Tapu, kat mülkiyeti ve kentsel dönüşüm kaynaklı uyuşmazlıklar." },
      { title: "İş Hukuku", description: "İşe iade, kıdem-ihbar tazminatı ve işçilik alacakları." },
      { title: "İcra Hukuku", description: "İlamlı ve ilamsız takip, itiraz ve haciz işlemleri." },
      { title: "İdare Hukuku", description: "Belediye ve imar işlemlerine karşı iptal ve tam yargı davaları." },
      { title: "Vergi Hukuku", description: "Vergi ve ceza ihbarnamelerine itiraz, uzlaşma." },
      { title: "Borçlar Hukuku", description: "Sözleşme, alacak ve tazminat uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı, ifade ve kovuşturma aşamalarında ceza savunması",
      "Anlaşmalı ve çekişmeli boşanma ile velayet ve nafaka davalarında temsil",
      "Tapu iptali, kat mülkiyeti ve kentsel dönüşüm uyuşmazlıklarında dava takibi",
      "Kıdem-ihbar tazminatı ve işe iade taleplerinde iş hukuku danışmanlığı",
      "Alacak tahsilinde icra takibi ve itiraz süreçleri",
      "Belediye işlemlerine karşı idare mahkemesinde dava açılması",
      "Vergi ve ceza ihbarnamelerine karşı itiraz ve dava",
      "Sözleşme ve tazminat kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "Çekmeköy, 5747 sayılı Kanun'la Ümraniye'den ayrılarak ilçe statüsü kazanmış; Alemdağ, Taşdelen ve Ömerli belediyelerinin tüzel kişiliği sona ermiş, ilçe yönetimi 29 Mart 2009 yerel seçimleriyle oluşmuştur. Bu geçmiş, bugün ilçedeki mahallelerin imar ve tapu kayıtlarında da kendini gösterir.",
      "İlçede ayrı bir adliye bulunmadığından dava ve icra dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. Çekmeköy Mal Müdürlüğü Merkez Mahallesi'ndeki Hükümet Konağı'nda hizmet verir; vergi işlemlerinde bağlı olunan daire ise ihbarname veya beyanname üzerindeki başlıktan görülür.",
    ],
    faqs: [
      { question: "Çekmeköy'deki davalar hangi adliyede görülür?", answer: "Çekmeköy için ayrı bir adliye teşkilatı kurulmamıştır; davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. Hukuki ve cezai uyuşmazlıklar bu adliyedeki ilgili mahkemelerde, idari ve vergi uyuşmazlıkları ise İstanbul idare ve vergi mahkemelerinde görülür. Büro Beşiktaş/Sinanpaşa'dadır, Çekmeköy'de değildir; ilçedeki müvekkillere aynı kapsamda hizmet verilir." },
      { question: "Büro Çekmeköy'de mi?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Çekmeköy'deki müvekkillere aynı kapsamda hizmet verilir. Görüşmeler randevu esasına göre yüz yüze veya çevrim içi yapılabilir. Çekmeköy'deki dosyalar Kartal'daki İstanbul Anadolu Adliyesi'nde takip edilir; ilk iletişim WhatsApp veya telefonla kurulabilir, büroya gelmek zorunlu değildir." },
      { question: "Hangi alanlarda hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku konularında danışmanlık ve temsil sağlanır. Örneğin boşanma ve velayet, tapu ve kira uyuşmazlıkları, işe iade ve kıdem tazminatı, icra itirazı, idari işlemlere karşı iptal davaları ile vergi uyuşmazlıkları bu kapsamda değerlendirilir." },
      { question: "Randevu nasıl alınır?", answer: "Randevu için WhatsApp veya telefon üzerinden iletişime geçilerek uygun gün ve saat belirlenir. İlk iletişimde konu kısaca paylaşılır, ardından danışmanlık görüşmesi planlanır. Görüşme tercihe göre yüz yüze veya çevrim içi yapılabilir; temsil kararı alınırsa vekalet düzenlenir ve belgeler derlenir." },
      { question: "Çekmeköy'den adliyeye ulaşım nasıl olur?", answer: "Kartal'daki adliyeye özel araç veya toplu taşıma ile gidilir; duruşma günü için güzergah ve yolculuk süresi önceden planlanmalıdır. Hangi güzergahın uygun olacağı çıkış noktasına ve duruşma saatine göre değişir. Adliyede zamanında hazır bulunmak için duruşma saatinden önce yola çıkılması yararlı olur." },
      { question: "Danışmanlık görüşmesi ücretli mi?", answer: "Evet, görüşme ücrete tabidir; tutar dosyanın niteliğine göre görüşmede bildirilir. Görüşmede konunuz dinlenir, hukuki durumunuz değerlendirilir ve izlenebilecek yollar anlatılır. Temsil kararı alınırsa vekalet düzenlenir; vekalet ücreti davanın kapsamı ve süreç göz önüne alınarak belirlenir ve netleştirilir." },
      { question: "Çekmeköy'de vergi işlemleri nereden yürütülür?", answer: "Yetkili vergi dairesi mükellefin kaydına göre belirlenir; hangi dairenin işlem yaptığı ihbarname veya beyanname üzerindeki başlıktan görülür. Vergi davaları İstanbul vergi mahkemelerinde görülür ve ihbarnamenin tebliğinden itibaren dava açma süresi 30 gündür. Bu nedenle tebliğ edilen belgenin başlığı ve tarihi kontrol edilmelidir." },
      { question: "Görüşmeler çevrim içi yapılabilir mi?", answer: "Evet, tercihe göre yüz yüze veya çevrim içi planlanabilir. Çevrim içi görüşmede belgeler dijital ortamda paylaşılabilir. Randevu WhatsApp veya telefon üzerinden alınır; temsil kararı alınırsa vekalet ve dosya hazırlığı adımları izlenir. Büro Beşiktaş/Sinanpaşa'dadır, Çekmeköy'de değildir." },
    ],
    howToTitle: "Çekmeköy'de Hukuki Destek Almak İçin Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Çekmeköy Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "cekmekoy-bosanma-avukati",
    name: "Çekmeköy Boşanma Avukatı",
    heroTitle: "Çekmeköy Boşanma Avukatı",
    heroSubtitle:
      "Nişantepe, Alemdağ ve Taşdelen gibi site ve müstakil konut dokusunun yan yana bulunduğu Çekmeköy'de anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal rejimi tasfiyesi süreçlerinde avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) temsil sağlar; aile mahkemesi dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Çekmeköy Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Çekmeköy'de anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal rejimi tasfiyesi davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi 2019 mezunu olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, Çekmeköy'de yaşayan ailelerin boşanma, velayet ve nafaka konularındaki taleplerinde vekil olarak yer alır.",
    highlightCards: [
      { title: "Anlaşmalı Boşanma", description: "Evlilik en az bir yıl sürmüşse tek duruşmada sonuçlanabilen protokol hazırlığı." },
      { title: "Çekişmeli Boşanma", description: "Kusur iddialarının tanık ve belgelerle ortaya konulması." },
      { title: "Velayet ve Kişisel İlişki", description: "Çocuğun yaşadığı okul ve mahalle düzenini gözeten talepler." },
      { title: "Aile Konutu ve Mal Rejimi", description: "Aile konutu şerhi ve edinilmiş mallara katılma rejiminin tasfiyesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolünün hazırlanması ve duruşmada temsil",
      "Kusura dayalı çekişmeli boşanma davalarında dava ve cevap dilekçeleri",
      "Velayet, iştirak nafakası ve kişisel ilişki düzenlemesi talepleri",
      "Tedbir, yoksulluk ve iştirak nafakasının artırılması veya kaldırılması davaları",
      "Aile konutu şerhi ve mal rejiminin tasfiyesi davaları",
      "Maddi ve manevi tazminat taleplerinin yürütülmesi",
    ],
    localParagraphs: [
      "Çekmeköy'de Nişantepe ve Alemdağ gibi mahallelerdeki siteler ile Ömerli ve Taşdelen yerleşimlerindeki müstakil, bahçeli evler yan yana bulunur; boşanma sürecinde ortak konutun kime kalacağı, kira ya da kredi borcunun nasıl paylaşılacağı bu nedenle dosyadan dosyaya farklı bir tablo çizer.",
      "Eşlerden biri aile konutu üzerinde tek başına işlem yapmak istediğinde diğer eşin rızası aranır (TMK m. 194); bu korumanın tapu kütüğüne şerh edilmesi için başvuru yapılabilir. Davalar, ilçede adliye bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki aile mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Çekmeköy'de boşanma davası hangi mahkemede açılır?", answer: "Taraflardan birinin yerleşim yeri esas alınarak Kartal'daki İstanbul Anadolu Adliyesi'nde yetkili aile mahkemesinde açılır. Yetki kuralı, eşlerden birinin yerleşim yeri veya davadan önce son altı aydır birlikte oturulan yerdir (TMK m.168). Çekmeköy için ayrı adliye bulunmadığından dava dilekçesi bu adliyeye sunulur." },
      { question: "Anlaşmalı boşanma için evlilik ne kadar sürmüş olmalı?", answer: "Evliliğin en az bir yıl sürmüş olması ve tarafların mal ile çocuk konusunda protokolde uzlaşması gerekir (TMK m. 166/3). Eşler duruşmada birlikte beyanda bulunur ve hakim protokolü eşlerin iradesine uygunluğu bakımından inceler. Protokolde velayet, nafaka ve mal rejimi tasfiyesi eksiksiz düzenlenmelidir." },
      { question: "Aile konutu şerhi nedir?", answer: "Aile konutu şerhi, eşin rızası olmadan konutun devrini veya kiranın sonlandırılmasını engelleyen, tapu kütüğüne işlenebilen bir koruma yöntemidir. Şerh sayesinde konutu kullanan eşin hakkı üçüncü kişilere karşı da korunur. Şerh talebi tapu müdürlüğüne yapılır; aile konutu boşanma sürecinde mal paylaşımı ve konut kullanımı bakımından da önem taşır." },
      { question: "2002'den sonra yapılan evliliklerde hangi mal rejimi uygulanır?", answer: "Sözleşme ile başka bir rejim seçilmemişse yasal rejim olan edinilmiş mallara katılma rejimi geçerlidir. Bu rejimde evlilik süresince edinilen mallar paylaşıma konu olur, kişisel mallar ise ayrı tutulur. Boşanma halinde edinilmiş mallar üzerinden katılma alacağı hesaplanır; hesaplama mahkemece delillere göre yapılır." },
      { question: "Velayet kararında çocuğun yaşadığı çevre önemli midir?", answer: "Evet, hakim çocuğun üstün yararını belirlerken okul, bakım düzeni ve ebeveynlerin imkanlarını birlikte değerlendirir. Çocuğun yaşadığı çevre, eğitim sürekliliği ve günlük bakım düzeni bu değerlendirmenin parçalarıdır. Velayeti olmayan ebeveyn için kişisel ilişki düzenlenir; koşullar değişirse düzenleme yeniden ele alınabilir." },
      { question: "Dava devam ederken nafaka istenebilir mi?", answer: "Evet, tedbir nafakası dava süresince talep edilebilir. Tedbir nafakası dava sürerken geçici olarak ödenir ve nihai nafaka düzenlemesinden ayrıdır. Talep dava dilekçesinde veya dava sırasında ileri sürülür; ihtiyaç sahibi eş veya çocuklar lehine, tarafların gelir ve giderine ilişkin deliller dikkate alınarak karar verilir." },
    ],
    howToTitle: "Çekmeköy'de Boşanma Davası Hangi Adımlarla İlerler?",
    howToSteps: [
      { name: "Durum Tespiti", text: "Evlilik süresi, çocuk, mal varlığı ve kusur iddiaları gözden geçirilir." },
      { name: "Yol Seçimi", text: "Anlaşmalı protokol ya da çekişmeli dava seçeneklerinden biri belirlenir." },
      { name: "Dilekçe ve Tedbir Talepleri", text: "Dava dilekçesi hazırlanır, gerekirse geçici nafaka ve velayet tedbiri istenir." },
      { name: "Duruşmalar ve Karar", text: "Deliller sunulur, mahkeme boşanma ve fer'i konularda hüküm kurar." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-davasinda-velayet", "nafakada-yuzde-kac-sorusu", "ziynet-esyasi-davasi"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "cekmekoy-ceza-avukati",
    name: "Çekmeköy Ceza Avukatı",
    heroTitle: "Çekmeköy Ceza Avukatı",
    heroSubtitle:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan (MEF Üniversitesi Hukuk Fakültesi, 2019), Çekmeköy'de gözaltına alınan veya hakkında soruşturma yürütülen kişilerin ifade, tutukluluk ve kovuşturma aşamalarındaki savunmasını üstlenir; dava dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülmektedir.",
    metaTitle: "Çekmeköy Ceza Avukatı | Müdafilik",
    metaDescription:
      "Çekmeköy'de gözaltı, ifade, tutukluluğa itiraz ve ceza davalarının her aşamasında müdafilik ve vekillik hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş, İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur; Çekmeköy'deki şüpheli, sanık ve mağdurlara soruşturma ile kovuşturma süreçlerinde hukuki yardım sağlar.",
    highlightCards: [
      { title: "Gözaltı ve İfade", description: "Kolluk ve savcılık ifadesinde müdafi hazır bulunması." },
      { title: "Tutukluluk İncelemesi", description: "Tutuklama ve devam kararlarına karşı itiraz, adli kontrol talepleri." },
      { title: "Kovuşturma Aşaması", description: "İddianamenin incelenmesi, delillerin tartışılması ve savunma." },
      { title: "Mağdur Vekilliği", description: "Katılan sıfatıyla davaya müdahale ve zararın giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye müdafi olarak eşlik edilmesi",
      "Soruşturma dosyasının incelenmesi ve savunma stratejisinin kurulması",
      "Tutuklama kararına itiraz dilekçelerinin hazırlanması",
      "Duruşmalarda sanık müdafiliği veya katılan vekilliği",
      "Uzlaşmaya tabi suçlarda uzlaştırma sürecinin takibi",
      "Hükmün açıklanmasının geri bırakılması ve adli para cezasına çevirme taleplerinin değerlendirilmesi",
    ],
    localParagraphs: [
      "Çekmeköy'ün Ömerli ve Alemdağ taraflarında orman ve su havzası alanlarının geniş yer tutması, ilçedeki ceza dosyalarında orman, çevre ve imar mevzuatından doğan suç isnatlarının da gündeme gelebilmesine yol açar; bu dosyalar çoğu zaman bilirkişi ve keşif incelemesine dayanır.",
      "Gözaltına alınan kişinin müdafi ile görüşme hakkı gözaltının ilk anından itibaren vardır. Tutuklama kararına karşı itiraz süresi kararın tebliğinden itibaren yedi gündür (CMK m. 268); dosyalar Çekmeköy'de adliye bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde yürütülür.",
    ],
    faqs: [
      { question: "Çekmeköy'de işlenen suçlara hangi adliye bakar?", answer: "Çekmeköy için ayrı adliye teşkilatı kurulmadığından soruşturma ve dava dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde yürütülür. Suçun niteliğine göre asliye ceza veya ağır ceza mahkemesi görevlidir. Soruşturma aşamasında Cumhuriyet savcılığı, tutuklama ve adli kontrol kararlarında ise sulh ceza hakimlikleri devrededir." },
      { question: "Gözaltında avukat istemek zorunlu mu?", answer: "Hayır, ancak şüpheli müdafi yardımından yararlanma hakkına sahiptir ve ifade öncesinde bu hakkını kullanabilir. Müdafi talep edilirse ifade müdafi hazır bulunmadan alınmamalıdır. Alt sınırı beş yıldan fazla hapis cezasını gerektiren suçlarda ise müdafi zorunludur; talep edilmezse baro tarafından atama yapılır." },
      { question: "Tutuklamaya itiraz süresi kaç gündür?", answer: "Tutuklamaya itiraz süresi, kararın tebliğinden itibaren yedi gündür (CMK m. 268). İtiraz, kararı veren merciin bağlı olduğu ağır ceza mahkemesine yapılır. Dilekçede tutukluluğun hukuka aykırı veya orantısız olduğu gerekçelerle anlatılır; adli kontrol gibi daha hafif bir tedbirin yeterli olduğu da ileri sürülebilir (CMK m.100/101)." },
      { question: "Adli kontrol ile tutuklama arasındaki fark nedir?", answer: "Adli kontrolde kişi serbest kalır ancak yurt dışı çıkış yasağı, imza yükümlülüğü gibi tedbirlere tabi tutulur. Tutuklamada ise kişi cezaevinde tutulur. Adli kontrol tutuklamaya alternatif bir tedbirdir; yükümlülüklere uyulmaması halinde tutuklama gündeme gelebilir. Her iki karara karşı kanunda öngörülen yollarla itiraz edilebilir." },
      { question: "Uzlaşma hangi suçlarda mümkündür?", answer: "Kanunda uzlaşmaya tabi olarak sayılan suçlarda savcılık veya mahkeme aşamasında uzlaştırma yoluna gidilir. Her suç uzlaşma kapsamında değildir; önce suçun bu kapsama girip girmediği incelenir. Uzlaşma tarafların iradesine bağlıdır ve kabul edilmesi zorunlu değildir; teklif reddedilirse soruşturma veya kovuşturma olağan yoldan devam eder." },
      { question: "Kamu davası açılmaması kararına karşı ne yapılabilir?", answer: "Kovuşturmaya yer olmadığına dair karara, tebliğden itibaren on beş gün içinde sulh ceza hakimliğine itiraz edilebilir. İtiraz dilekçesinde soruşturmanın eksik yürütüldüğü veya delillerin yanlış değerlendirildiği gerekçeleriyle karar eleştirilir. Hakimlik itirazı kabul ederse iddianame düzenlenmesi yolu açılabilir; süre kaçırılmamalıdır." },
    ],
    howToTitle: "Çekmeköy'de Ceza Soruşturması Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "Şikayet veya İhbar", text: "Suç duyurusu kolluğa ya da cumhuriyet savcılığına iletilir." },
      { name: "İfade ve Delil Toplama", text: "Şüphelinin ifadesi alınır, deliller ve tanık beyanları toplanır." },
      { name: "İddianame ve Kabul", text: "Savcılık iddianame düzenler, mahkeme kabul ederse kovuşturma başlar." },
      { name: "Hüküm ve Kanun Yolu", text: "Mahkeme kararını verir; karara karşı istinaf yoluna başvurulabilir." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["tutukluluga-itiraz", "ceza-hukukunda-etkin-pismanlik", "kosullu-saliverilme-oranlari"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "cekmekoy-gayrimenkul-avukati",
    name: "Çekmeköy Gayrimenkul Avukatı",
    heroTitle: "Çekmeköy Gayrimenkul Avukatı",
    heroSubtitle:
      "Çekmeköy Tapu Müdürlüğü'nün hizmet verdiği, site yapılaşmasından eski belediye yerleşimlerindeki arsa ve müstakil evlere uzanan geniş bir taşınmaz çeşitliliği bulunan Çekmeköy'de avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) tapu, kat mülkiyeti, ortaklığın giderilmesi ve kentsel dönüşüm uyuşmazlıklarında danışmanlık ve dava takibi sağlar.",
    metaTitle: "Çekmeköy Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Çekmeköy'de tapu iptali, kat mülkiyeti, ortaklığın giderilmesi ve kentsel dönüşüm uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Gayrimenkul hukuku dosyalarında Çekmeköy'deki malik, alıcı ve kiracılara destek veren Furkan Arıkan, 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır.",
    highlightCards: [
      { title: "Tapu İşlemleri", description: "Satış vaadi, tapu iptali ve tescil davalarında hak kaybını önleyici inceleme." },
      { title: "Site ve Kat Mülkiyeti", description: "Aidat, yönetim kurulu kararı ve ortak alan uyuşmazlıkları." },
      { title: "Eski Belediye Yerleşimleri", description: "Alemdağ, Taşdelen ve Ömerli'deki arsa ve müstakil yapılarda imar-tapu uyumu." },
      { title: "Kentsel Dönüşüm", description: "Riskli yapı tespiti ve müteahhit sözleşmelerinin incelenmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Tapu kaydı, takyidat ve imar durumu incelemesi",
      "Tapu iptali ve tescil davalarının açılması",
      "Ortaklığın giderilmesi (izale-i şuyu) davaları",
      "Kat mülkiyeti kapsamında aidat ve yönetim kararı uyuşmazlıkları",
      "Kentsel dönüşümde riskli yapı ve hak sahipliği süreçleri",
      "Arsa payı karşılığı inşaat ve satış vaadi sözleşmelerinin hukuki incelemesi",
    ],
    localParagraphs: [
      "Alemdağ, Taşdelen ve Ömerli'nin 2009'a kadar ayrı belediyeler olarak yönetilmesi, bu bölgelerdeki bazı parsellerde imar planı ile fiili yapılaşma arasında fark bulunmasına, dolayısıyla tapu ve imar durumunun satın alma öncesinde birlikte incelenmesine ihtiyaç duyulmasına yol açabilmektedir.",
      "Sitelerde ortak gider ve aidat alacakları için Kat Mülkiyeti Kanunu m. 20 uyarınca her ay yüzde beş gecikme tazminatı uygulanır. Tapu ve ortaklığın giderilmesi davaları taşınmazın bulunduğu yer mahkemesinde, yani Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    ],
    faqs: [
      { question: "Çekmeköy'de tapu işlemleri nerede yapılır?", answer: "Çekmeköy Tapu Müdürlüğü ilçedeki taşınmazlara ilişkin tapu işlemlerini yürütür. Satış, devir ve şerh gibi işlemler bu müdürlükte yapılır. Tapu işlemleri öncesinde tapu kaydındaki ipotek, haciz ve şerh bilgilerinin kontrol edilmesi ilerideki uyuşmazlıkları önlemeye katkı sağlar; sözleşme hükümleri de yazılı olarak gözden geçirilmelidir." },
      { question: "Tapu iptal davası hangi mahkemede açılır?", answer: "Taşınmazın bulunduğu yerdeki asliye hukuk mahkemesinde açılır; Çekmeköy için bu mahkeme Kartal'daki İstanbul Anadolu Adliyesi'ndedir. Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir. Sahtecilik, yolsuz tescil veya muvazaa gibi iddialar dayanak olabilir; tapu kaydı ve resmi senet delil olarak incelenir." },
      { question: "Aidat borcuna uygulanan gecikme tazminatı ne kadardır?", answer: "Kat Mülkiyeti Kanunu m. 20 uyarınca ödenmeyen ortak giderlere aylık yüzde beş oranında gecikme tazminatı işletilir. Gider payını ödemeyen kat malikine karşı yönetici icra takibi başlatabilir. Borç ve tazminat, yönetim planı ve kat malikleri kurulu kararlarına dayanılarak talep edilir; itiraz halinde dava yoluna gidilebilir." },
      { question: "Satış vaadi sözleşmesi tapuya şerh edilmeden geçerli olur mu?", answer: "Taşınmaz satış vaadi sözleşmesi resmi şekilde düzenlenmedikçe geçerli değildir; tapuya şerhi ise üçüncü kişilere karşı koruma sağlar. Şerh edilmiş sözleşme, taşınmazın sonradan başkasına devredilmesi halinde de alıcının hakkını korur. Sözleşmenin noterde veya tapuda resmi şekilde yapılması bu nedenle önemlidir." },
      { question: "Riskli yapı tespiti sonrası kaç malikin onayı aranır?", answer: "6306 sayılı Kanun'a göre riskli yapının yıkılıp yeniden yapılması için arsa paylarının en az üçte ikisinin onayı aranır. Önce yapının riskli olup olmadığı tespit edilir, ardından maliklerin yeniden yapım kararı alınır. Karara katılmayan maliklerle ilgili süreç ve idari işlemlere karşı dava yolu da ilgili kanunda düzenlenmiştir." },
      { question: "Ortak olduğum taşınmazı satmak istiyorum, diğer paydaş razı olmazsa ne olur?", answer: "Ortaklığın giderilmesi davası açılarak taşınmazın satışı veya paylaştırılması mahkemeden istenebilir. Paydaşlardan her biri bu davayı açabilir. Mahkeme taşınmazın aynen bölünüp bölünemeyeceğini inceler; bölünemiyorsa satış yoluyla bedel paydaşlara payları oranında dağıtılır. Dava taşınmazın bulunduğu yer mahkemesinde görülür." },
    ],
    howToTitle: "Çekmeköy'de Tapu Uyuşmazlığı Dava Süreci Nasıl Başlar?",
    howToSteps: [
      { name: "Kayıt Temini", text: "Tapu kaydı, takyidat belgesi ve imar durumu yazısı alınır." },
      { name: "Dayanak Belirleme", text: "Sözleşme, ödeme dekontu ve yazışmalar iddianın delili olarak ayrılır." },
      { name: "Dava veya Şerh", text: "Gerekirse ihtiyati tedbirle birlikte tapu iptal ve tescil davası açılır." },
      { name: "Keşif ve Karar", text: "Bilirkişi incelemesi yapılır, mahkeme taşınmazın akıbetine karar verir." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi", "muris-muvazaasi-nedir"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "cekmekoy-icra-avukati",
    name: "Çekmeköy İcra Avukatı",
    heroTitle: "Çekmeköy İcra Avukatı",
    heroSubtitle:
      "Çekmeköy'deki alacaklı ve borçlular için ödeme emri tebliğinden haciz aşamasına kadar icra takibinin tüm basamaklarında avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621; MEF Üniversitesi Hukuk Fakültesi, 2019) danışmanlık ve vekillik hizmeti verir; takipler Kartal'daki İstanbul Anadolu Adliyesi icra dairelerinde yürütülür.",
    metaTitle: "Çekmeköy İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Çekmeköy'de icra takibi, ödeme emrine itiraz, haciz ve itirazın iptali süreçlerinde avukatlık ve danışmanlık hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur; Çekmeköy'de yerleşik veya mal varlığı bu ilçede bulunan taraflara icra-iflas hukuku alanında destek verir.",
    highlightCards: [
      { title: "Takip Başlatma", description: "Fatura, senet, kira sözleşmesi ya da mahkeme ilamına dayalı dosya açılışı." },
      { title: "Ödeme Emrine İtiraz", description: "Yedi günlük itiraz süresinin takibi ve itirazın hukuki sonuçlarının değerlendirilmesi." },
      { title: "İtirazın İptali", description: "Takibi durduran itiraza karşı genel mahkemede dava açılması." },
      { title: "Haciz Safhası", description: "Banka hesabı, araç ve taşınmaz üzerindeki haciz işlemlerinin yürütülmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İlamsız takip ve kambiyo senetlerine özgü takip başlatılması",
      "Ödeme emrine itiraz dilekçelerinin hazırlanması",
      "İtirazın iptali ve itirazın kaldırılması işlemleri",
      "Banka hesabı, araç ve taşınmaz haczi uygulamaları",
      "Haczedilemezlik şikayeti ve icra mahkemesi başvuruları",
      "Kira alacağı nedeniyle icra yoluyla takip",
    ],
    localParagraphs: [
      "Çekmeköy'de Merkez ve Mehmet Akif mahallelerindeki M5 çevresinde yoğunlaşan konut kiralamaları ile ilçedeki esnaf ve inşaat sektörü ilişkileri, kira ve fatura alacaklarına dayalı takiplerin başlıca kaynakları arasında yer alır; borçlunun taşınmazı varsa Çekmeköy Tapu Müdürlüğü üzerinden haciz şerhi işlenebilir.",
      "Ödeme emrine itiraz süresi tebliğden itibaren yedi gündür. İtiraz edilirse takip durur; alacaklı itirazın tebliğinden itibaren bir yıl içinde itirazın iptali davası açabilir (İİK m. 67). İcra dairelerinin tamamı, Çekmeköy'de adliye bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndedir.",
    ],
    faqs: [
      { question: "Çekmeköy'deki bir borçluya karşı icra takibi nerede açılır?", answer: "Genel yetki kuralıyla borçlunun yerleşim yeri icra dairesinde açılır; Çekmeköy için bu daireler Kartal'daki İstanbul Anadolu Adliyesi'ndedir. Takibe sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlanabilir. Borçluya ödeme emri gönderilir; süresinde itiraz edilmezse takip kesinleşir ve haciz aşamasına geçilebilir." },
      { question: "Ödeme emrine itiraz süresi ne kadardır?", answer: "Ödeme emrinin tebliğinden itibaren yedi gündür (İİK m.62). İtiraz icra dairesine bildirilir ve süresinde yapılırsa takip durur. Süre kaçırılırsa takip kesinleşir ve haciz aşamasına geçilebilir; bu nedenle tebliğ tarihinin doğru belirlenmesi ve süre içinde başvuru yapılması önemlidir." },
      { question: "İtirazın iptali davası için süre var mı?", answer: "Evet, alacaklı itirazın tebliğinden itibaren bir yıl içinde dava açmalıdır (İİK m. 67). Dava takibin yapıldığı yer icra mahkemesinde veya genel mahkemelerde açılabilir. Süre kaçırılırsa bu dava açılamaz ve alacaklı başka yollara başvurmak zorunda kalır; bu nedenle itirazın tebliğ tarihi dikkatle takip edilmelidir." },
      { question: "İcra inkar tazminatı nedir?", answer: "İtirazın iptali davasında haksız çıkan borçlu, alacağın yüzde yirmisinden az olmamak üzere tazminata mahkum edilebilir. Bu tazminat, haksız itirazla takibin geciktirilmesini caydırmak amacıyla alacaklı lehine hükmedilir. Alacağın likit olması, yani miktarının belirlenebilir olması bu tazminat bakımından değerlendirmeye alınır." },
      { question: "Maaş haczi nasıl uygulanır?", answer: "Maaşın haczedilebilir kısmı kanunda belirlenen sınırlar içinde kesilir; tamamı haczedilemez. Haciz kesintisi işverene gönderilen yazıyla yapılır ve kalan kısım borçlunun ve ailesinin geçimi için korunur. Haciz usulsüz yapılmışsa veya haczedilemez gelir kesilmişse icra mahkemesine şikayet yoluyla itiraz edilebilir." },
      { question: "Yanlış hacze karşı ne yapılabilir?", answer: "Haczedilemez mal veya usulsüz işlem iddiası icra mahkemesine yapılacak şikayetle ileri sürülür. Şikayet, işlemin öğrenildiği tarihten itibaren yasal süre içinde yapılmalıdır. Mahkeme haciz işlemini inceler ve hukuka aykırı bulursa iptal edebilir; Çekmeköy için bu mahkemeler Kartal'daki İstanbul Anadolu Adliyesi'ndedir." },
    ],
    howToTitle: "Çekmeköy'de İcra Takibi Adım Adım Nasıl İlerler?",
    howToSteps: [
      { name: "Dayanak Belgenin Seçimi", text: "Alacağın senet, fatura, sözleşme ya da ilama dayandığı belirlenir." },
      { name: "Takip Talebi", text: "Yetkili icra dairesine takip talebi sunulur, ödeme emri çıkarılır." },
      { name: "Borçlunun Tavrı", text: "Borçlu öderse takip biter; itiraz ederse takip durur ve dava yolu değerlendirilir." },
      { name: "Haciz ve Satış", text: "Kesinleşen takipte mal varlığı haczedilir, satış yoluyla alacak tahsil edilir." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "cekmekoy-idare-avukati",
    name: "Çekmeköy İdare Avukatı",
    heroTitle: "Çekmeköy İdare Avukatı",
    heroSubtitle:
      "Alemdağ, Taşdelen ve Ömerli belediyelerinin 2009'da Çekmeköy Belediyesi bünyesinde birleşmesinden sonra devralınan imar planları, yapı ruhsatları ve belediye işlemlerine ilişkin uyuşmazlıklarda avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) iptal ve tam yargı davalarında müvekkilleri temsil eder.",
    metaTitle: "Çekmeköy İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Çekmeköy'de imar planı, yapı ruhsatı, belediye cezası ve idari işlemlere karşı iptal ve tam yargı davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır; Çekmeköy'deki kişi ve işletmelerin kamu idareleriyle yaşadığı uyuşmazlıklarda idari başvuru ve dava aşamalarında yardımcı olur.",
    highlightCards: [
      { title: "İmar ve Ruhsat", description: "Yapı ruhsatı verilmemesi, yıkım kararı ve imar para cezalarına karşı dava." },
      { title: "Belediye İşlemleri", description: "İşyeri ruhsatı, zabıta cezaları ve ilan-reklam vergisi uyuşmazlıkları." },
      { title: "Havza ve Orman Sınırları", description: "Koruma kuşağı ve orman kadastrosundan doğan imar kısıtlamalarına itiraz." },
      { title: "Kamu Personeli", description: "Atama, disiplin cezası ve özlük hakkı işlemlerine karşı iptal davaları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İmar planı ve plan değişikliği kararlarına karşı iptal davası",
      "Yapı ruhsatı, yıkım ve imar para cezalarına itiraz",
      "İşyeri açma ve çalışma ruhsatı ret işlemlerine dava",
      "İdarenin hizmet kusurundan doğan tam yargı davaları",
      "Kamu görevlilerinin disiplin ve özlük hakkı uyuşmazlıkları",
      "Yürütmenin durdurulması taleplerinin hazırlanması",
    ],
    localParagraphs: [
      "Çekmeköy'ün kuzeyinde Ömerli Barajı çevresindeki su havzası ile Alemdağ yönündeki orman alanları, imar uygulamasını koruma mevzuatıyla birlikte düşünmeyi gerektirir; bu alanlardaki parsellerde yapılaşma izni, plan notları ve koruma kuşağı sınırlaması idari uyuşmazlığa konu olabilir.",
      "İdari işleme karşı iptal davası kural olarak işlemin tebliğinden itibaren 60 gün içinde açılır (İYUK m. 7). İdarenin eyleminden doğan zararlar için ise önce bir yıl içinde idareye başvurulur, ardından tam yargı davası açılır. Çekmeköy için idari yargı dosyaları İstanbul idare mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "İdari işleme karşı dava açma süresi kaç gündür?", answer: "Kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m. 7). Vergi davalarında bu süre 30 gündür. Özel kanunlarda farklı süreler öngörülebilir. Süre kaçırılırsa dava reddedilebileceğinden, işlemin ne zaman tebliğ edildiği ve hangi kanuna dayandığı baştan belirlenmelidir." },
      { question: "Belediyenin verdiği yıkım kararına itiraz edilebilir mi?", answer: "Evet, karara karşı idare mahkemesinde iptal davası açılabilir ve yürütmenin durdurulması istenebilir. Genel kural olarak dava süresi tebliğden itibaren 60 gündür (İYUK m. 7). Yürütmenin durdurulması talebi, uygulanması halinde telafisi güç zarar doğacak işlemlerde önem taşır; mahkeme karar verene kadar uygulama askıya alınabilir." },
      { question: "İdareye başvurmadan doğrudan tam yargı davası açılabilir mi?", answer: "Hayır, idarenin eylemine karşı zararın öğrenilmesinden itibaren bir yıl içinde idareye başvurulması gerekir (İYUK m. 13). İdare başvuruyu reddederse veya cevap vermezse dava açılabilir. Başvuru yapılmadan açılan tam yargı davası usulden reddedilebileceğinden, bu ön koşul ve süre dikkatle takip edilmelidir." },
      { question: "Yürütmenin durdurulması nedir?", answer: "Yürütmenin durdurulması, dava sonuçlanana kadar işlemin uygulanmasının askıya alınmasını sağlayan geçici koruma kararıdır. İşlemin uygulanması halinde giderilmesi güç zararlar doğacaksa ve işlem açıkça hukuka aykırıysa talep edilebilir. Talep dava dilekçesiyle birlikte ileri sürülür; karar dava sonucunu belirlemez, yalnızca uygulamayı geçici olarak durdurur." },
      { question: "İşyeri ruhsatı verilmeyen kişi ne yapabilir?", answer: "Ret işlemine karşı 60 gün içinde idare mahkemesinde dava açabilir (İYUK m. 7). Dilekçede ret gerekçesinin hukuka aykırı olduğu açıklanır; gerekirse yürütmenin durdurulması da istenir. Başvuru belgeleri ve ret yazısı dosyaya eklenir; mahkeme işlemin hukuka uygunluğunu inceler ve işlemi iptal edebilir." },
      { question: "Havza koruma alanındaki bir parselde yapı yapılabilir mi?", answer: "Parselin plan notları ve koruma kuşağı sınırlamalarına göre değişir; bu nedenle ilgili plan ve yönetmelik birlikte incelenmelidir. Yapılaşma izni verilmezse ret işlemine karşı idare mahkemesinde dava açılabilir. Genel kural olarak dava süresi tebliğden itibaren 60 gündür (İYUK m. 7); plan notları ve parsel bilgisi baştan incelenmelidir." },
    ],
    howToTitle: "Çekmeköy'de İdari Dava Hangi Adımlarla Açılır?",
    howToSteps: [
      { name: "İşlemin Tespiti", text: "Dava konusu işlem, düzenleyen kurum ve tebliğ tarihi belirlenir." },
      { name: "Sürenin Kontrolü", text: "60 günlük dava açma süresinin ne zaman başladığı hesaplanır." },
      { name: "Dilekçe ve Ekler", text: "Hukuka aykırılık gerekçeleri ve belgeler dilekçeyle birlikte sunulur." },
      { name: "İnceleme", text: "Mahkeme gerekirse keşif yaptırır ve işlemin hukuka uygunluğu hakkında karar verir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: ["idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "cekmekoy-is-hukuku-avukati",
    name: "Çekmeköy İş Hukuku Avukatı",
    heroTitle: "Çekmeköy İş Hukuku Avukatı",
    heroSubtitle:
      "Nişantepe'deki Özyeğin Üniversitesi'nden M5 hattı çevresindeki ticari alanlara, Taşdelen ve Ömerli'deki küçük işletmelere kadar Çekmeköy'de çalışan işçi ve işverenlere avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarında danışmanlık sağlar.",
    metaTitle: "Çekmeköy İş Hukuku Avukatı",
    metaDescription:
      "Çekmeköy'de işe iade, kıdem ve ihbar tazminatı, fazla mesai ve işçilik alacakları konularında iş hukuku avukatlığı hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur; Çekmeköy'de çalışan veya işyeri bulunan müvekkillerine iş sözleşmesi, fesih ve alacak konularında hukuki destek sunar.",
    highlightCards: [
      { title: "İşe İade", description: "Geçerli neden olmaksızın feshedilen iş sözleşmelerinde arabuluculuk ve dava." },
      { title: "Kıdem ve İhbar Tazminatı", description: "Hizmet süresi ve giydirilmiş ücret üzerinden hesap kontrolü." },
      { title: "Fazla Mesai ve İzin Alacakları", description: "Puantaj, bordro ve tanık beyanlarıyla işçilik alacaklarının ispatı." },
      { title: "Eğitim ve Hizmet Sektörü", description: "Üniversite, site yönetimi ve ticari işletmelerde çalışanların iş sözleşmesi uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İşe iade davası öncesi zorunlu arabuluculuk başvurusu",
      "Kıdem ve ihbar tazminatı hesabı ile dava takibi",
      "Fazla çalışma, hafta tatili ve yıllık izin ücreti alacakları",
      "İbraname ve işten ayrılış belgelerinin hukuki incelemesi",
      "İş kazası ve meslek hastalığı kaynaklı tazminat talepleri",
      "İşverenler için iş sözleşmesi ve fesih bildirimi danışmanlığı",
    ],
    localParagraphs: [
      "Çekmeköy'de Nişantepe'deki Özyeğin Üniversitesi, ticari işletmeler ve site yönetimleri gibi hizmet odaklı işverenler, bakım-onarım ve güvenlik gibi hizmet alımlarında çalışanların alt işveren ilişkisinden doğan haklarını gündeme getirebilir; asıl işveren ile alt işverenin birlikte sorumluluğu bu dosyalarda sıkça tartışılır.",
      "İşe iade için fesih bildiriminden itibaren bir ay içinde arabulucuya başvurulur; arabuluculuk sonuçsuz kalırsa son tutanaktan itibaren iki hafta içinde iş mahkemesinde dava açılır. İşe iade yalnızca otuz veya daha fazla işçi çalıştıran işyerlerinde ve en az altı aylık kıdemi olan işçiler için mümkündür (4857 s. K. m. 18). Davalar Kartal'daki İstanbul Anadolu Adliyesi iş mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "İşe iade davası için hangi şartlar aranır?", answer: "İşyerinde en az otuz işçi çalışması, işçinin en az altı aylık kıdeminin bulunması ve iş sözleşmesinin belirsiz süreli olması gerekir (4857 s. K. m. 18). Fesihten itibaren 1 ay içinde arabulucuya başvurulmalıdır. Arabuluculuk sonuçsuz kalırsa son tutanaktan itibaren 2 hafta içinde iş mahkemesinde dava açılır." },
      { question: "İşe iade için arabulucuya başvuru süresi ne kadardır?", answer: "Fesih bildiriminin tebliğinden itibaren bir ay içinde başvurulması gerekir. Arabuluculuk işe iade davasının dava şartıdır; başvuru yapılmadan dava açılırsa dava usulden reddedilebilir. Arabuluculuk sonuçsuz kalırsa son tutanaktan itibaren 2 hafta içinde iş mahkemesinde dava açılmalıdır (İş K. m.18)." },
      { question: "Arabuluculuk sonuçsuz kalırsa dava süresi nedir?", answer: "Son tutanağın düzenlenmesinden itibaren iki hafta içinde iş mahkemesinde dava açılmalıdır. Bu süre kaçırılırsa işe iade davası açma hakkı kaybedilebilir. Arabuluculuğa fesihten itibaren bir ay içinde başvurulmuş olması gerekir; tutanağın tarihi ve fesih bildirimi dilekçeye eklenerek mahkemeye sunulur (İş K. m.18)." },
      { question: "Kıdem tazminatı için en az ne kadar çalışmak gerekir?", answer: "Aynı işverenin işyerinde en az bir yıl çalışmış olmak gerekir. Bunun yanında fesih sebebinin kanunda sayılan hallerden biri olması gerekir; örneğin işverenin haksız feshi, işçinin haklı sebeple istifası veya emeklilik. Çalışma süresi ve son brüt ücret hesaplamanın esasını oluşturur ve hizmet dökümü ile bordro incelenir." },
      { question: "Taşeron işçisi asıl işverenden alacak talep edebilir mi?", answer: "Asıl işveren, alt işverenle birlikte işçinin kanundan doğan haklarından müştereken sorumludur. İşçi bu nedenle alacaklarını hem alt işverenden hem asıl işverenden talep edebilir. Alt işveren ilişkisinin geçerliliği ve işçinin hangi işyerinde çalıştığı delillerle belirlenir; dava iş mahkemesinde açılır, arabuluculuk gerekebilir." },
      { question: "Çekmeköy'deki iş davaları hangi mahkemede görülür?", answer: "Çekmeköy için ayrı adliye bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki iş mahkemelerinde görülür. Dava açmadan önce işe iade ve işçilik alacakları için arabulucuya başvurmak dava şartıdır. Büro Beşiktaş/Sinanpaşa'dadır, Çekmeköy'de değildir; ilçedeki müvekkillerin dosyaları bu adliyede takip edilir." },
    ],
    howToTitle: "Çekmeköy'de İşe İade Talebi Nasıl İlerler?",
    howToSteps: [
      { name: "Fesih Belgesinin Değerlendirilmesi", text: "Fesih bildirimi, gerekçe ve işçinin kıdemi incelenir." },
      { name: "Arabulucuya Başvuru", text: "Bir aylık süre içinde arabuluculuk bürosuna başvuru yapılır." },
      { name: "Dava Açılması", text: "Anlaşma çıkmazsa iki hafta içinde iş mahkemesine dilekçe verilir." },
      { name: "Karar ve Uygulama", text: "Mahkeme feshin geçersizliğine karar verirse işçi işe başlatılır veya tazminat öngörülür." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["ise-iade-davasi", "kidem-tazminati-hesaplama-2026", "giydirilmis-ucret-kavrami"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "cekmekoy-kira-tahliye-avukati",
    name: "Çekmeköy Kira ve Tahliye Avukatı",
    heroTitle: "Çekmeköy Kira ve Tahliye Avukatı",
    heroSubtitle:
      "21 Ekim 2018'de açılan M5 Çekmeköy İstasyonu'na yürüme mesafesindeki Mehmet Akif ve Merkez mahalleleri ile üniversite çevresindeki konutlarda kiracı ve ev sahibi arasındaki tahliye, kira artışı ve bedel tespiti uyuşmazlıklarında avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) hukuki destek sağlar.",
    metaTitle: "Çekmeköy Kira ve Tahliye Avukatı",
    metaDescription:
      "Çekmeköy'de kiracı tahliyesi, kira bedeli tespiti, kira artışı ve sözleşme uyuşmazlıklarında avukatlık hizmeti sunulmaktadır.",
    aboutParagraph:
      "Kira hukukuna ilişkin uyuşmazlıklarda Çekmeköy'deki ev sahibi ve kiracıların yanında yer alan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "İhtiyaç ve Temerrüt Tahliyesi", description: "Konut ihtiyacı veya kira borcu nedeniyle açılan tahliye süreçleri." },
      { title: "Kira Bedeli Tespiti", description: "Yeni kira döneminde rayiç bedelin mahkemece belirlenmesi." },
      { title: "Metro Çevresi Konutlar", description: "Mehmet Akif ve Merkez çevresindeki kiralık konutlarda sözleşme incelemesi." },
      { title: "Öğrenci ve Kısa Süreli Kiralamalar", description: "Üniversite çevresinde yapılan dönemlik sözleşmelerin hukuki değerlendirmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Konut ve işyeri kiralarında tahliye davalarının açılması",
      "Ödenmeyen kira için ihtarname ve icra yoluyla tahliye",
      "Yazılı taahhüde dayalı tahliye takibi",
      "Kira bedelinin tespiti ve uyarlama davaları",
      "Depozito iadesi ve kiralananın hasarına ilişkin uyuşmazlıklar",
      "Kira sözleşmesinin hazırlanması ve mevcut sözleşmenin incelenmesi",
    ],
    localParagraphs: [
      "Mehmet Akif Mahallesi'nde Şahinbey Caddesi üzerindeki M5 Çekmeköy İstasyonu, Merkez ve çevre mahallelerdeki konut kiralarında ulaşım kolaylığını öne çıkaran bir etkendir; metro çevresindeki bu talep, kira artış oranı ve yenileme dönemi uyuşmazlıklarını sıklıkla mahkemeye taşıyabilir.",
      "Kira bedelinin tespiti ve tahliye davaları sulh hukuk mahkemesinde görülür; Çekmeköy için bu mahkemeler Kartal'daki İstanbul Anadolu Adliyesi'ndedir. Ödeme emri gönderilen kira alacağı takibinde itiraz süresi yedi gündür; konutlarda kira artışı, TBK m. 344 uyarınca bir önceki kira yılındaki TÜFE ortalamasını aşamaz.",
    ],
    faqs: [
      { question: "Çekmeköy'de kira davaları hangi mahkemede görülür?", answer: "Tahliye ve kira tespiti davaları sulh hukuk mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. Çekmeköy için ayrı adliye bulunmadığından dava dilekçesi bu adliyeye sunulur. Taahhütname veya kira borcuna dayanan icra yoluyla tahliye ise icra dairesi kanalıyla yürütülür ve itiraz halinde mahkemeye taşınır." },
      { question: "Kira artış oranının sınırı var mı?", answer: "Evet, konut ve çatılı işyeri kiralarında yenilenen dönemdeki artış, bir önceki kira yılındaki TÜFE'nin on iki aylık ortalamasını geçemez (TBK m. 344). Bu sınır kira bedelinin yenilenen dönemde nasıl artırılabileceğini belirler. Taraflar anlaşamazsa kira bedeli tespiti davası açılabilir ve mahkeme bilirkişi incelemesiyle bedeli belirler." },
      { question: "Kiracıyı hangi hallerde tahliye ettirebilirim?", answer: "Kira borcunun ödenmemesi, yazılı tahliye taahhüdü veya kiraya verenin kendisi ya da yakınları için konut ihtiyacı gibi kanuni sebepler bulunmalıdır. Kira borcunda yazılı ihtar verilir ve ödeme için verilen süre (TBK m.315, 30 gün) geçerse tahliye istenebilir. Tahliye mahkeme veya icra yoluyla talep edilir." },
      { question: "Taahhütname tahliye için yeterli midir?", answer: "Kiracının kira başladıktan sonra, açıkça tahliye tarihi belirterek verdiği yazılı taahhüt tahliye takibine dayanak olabilir. Kira sözleşmesiyle aynı anda alınan boş tarihli veya önceden imzalatılan taahhütler genellikle dayanak olmaz. Taahhüdün geçerliliği itiraz halinde mahkemece incelenir; bu nedenle yazım şekli ve tarihi önem taşır." },
      { question: "Depozito ne zaman iade edilir?", answer: "Kiralananın hasarsız teslimiyle birlikte iade edilir; kiraya veren zarar iddiasında bulunursa bu zarar depozitodan mahsup edilebilir. Teslim sırasında taşınmazın durumunun yazılı tutanakla belgelenmesi ispat açısından önemlidir. Taraflar anlaşamazsa depozitonun iadesi için dava veya icra takibi yoluna başvurulabilir." },
      { question: "Mahkeme yeni kira bedelini nasıl belirler?", answer: "Mahkeme bilirkişi incelemesiyle emsal kiralara, kiralananın durumuna ve konumuna bakarak rayiç bedeli belirler. Taşınmazın yaşı, büyüklüğü ve bulunduğu çevre değerlendirmede etkilidir. Belirlenen bedel kural olarak yenilenen kira dönemine uygulanır; bu bedel de kira artış sınırı olan TBK m. 344 çerçevesinde incelenir." },
    ],
    howToTitle: "Çekmeköy'de Kiracı Tahliyesi Hangi Yolla Yapılır?",
    howToSteps: [
      { name: "Tahliye Sebebinin Seçimi", text: "Temerrüt, taahhüt veya ihtiyaç gibi sebeplerden hangisinin geçerli olduğu belirlenir." },
      { name: "İhtar veya Hazırlık", text: "Gerekli ise noterden ihtarname gönderilir, sözleşme ve dekontlar derlenir." },
      { name: "Başvuru Yolu", text: "Uygun olan icra dairesi ya da sulh hukuk mahkemesi yoluna gidilir." },
      { name: "Teslim", text: "Karar veya icra emri kesinleştiğinde taşınmaz boşaltılarak teslim alınır." },
    ],
    crosslinkLabel: "Kira ve Tahliye Avukatı",
    relatedPostSlugs: ["kiracinin-tahliye-sureci", "kira-bedeli-tespit-ve-uyarlama-davasi"],
  },

  // ─────────────────────────── VERGİ ───────────────────────────
  {
    slug: "vergi",
    urlSlug: "cekmekoy-vergi-avukati",
    name: "Çekmeköy Vergi Avukatı",
    heroTitle: "Çekmeköy Vergi Avukatı",
    heroSubtitle:
      "Merkez Mahallesi'ndeki Hükümet Konağı'nda Çekmeköy Mal Müdürlüğü'nün hizmet verdiği Çekmeköy'de avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) vergi ve ceza ihbarnamelerine itiraz, uzlaşma ve vergi mahkemesi davalarında Çekmeköy'deki mükellefleri temsil eder.",
    metaTitle: "Çekmeköy Vergi Avukatı",
    metaDescription:
      "Çekmeköy'de vergi ve ceza ihbarnamelerine itiraz, uzlaşma ve vergi mahkemesi davalarında avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi 2019 mezunu Furkan Arıkan, İstanbul Barosu'nda 72621 sicil numarasıyla kayıtlıdır; Çekmeköy'deki gerçek ve tüzel kişi mükelleflerin tarhiyat, vergi cezası ve tahsilat uyuşmazlıklarında hukuki danışmanlık verir.",
    highlightCards: [
      { title: "İhbarname İtirazı", description: "Re'sen veya ikmalen yapılan tarhiyatlara karşı dava hazırlığı." },
      { title: "Vergi Ziyaı Cezası", description: "Ziyaa uğratılan vergi ve buna bağlı cezaya karşı hukuki değerlendirme." },
      { title: "Uzlaşma", description: "Vergi idaresiyle belirlenen tutar üzerinde müzakere süreçleri." },
      { title: "Emlak ve Kira Geliri", description: "Çekmeköy Belediyesi emlak vergisi ve kira geliri beyanı uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamelerine karşı vergi mahkemesinde dava",
      "Uzlaşma talebinin hazırlanması ve komisyon toplantısında temsil",
      "Ödeme emrine karşı dava açılması",
      "Vergi incelemesi sırasında mükellefe danışmanlık",
      "Kira geliri ve emlak vergisi uyuşmazlıklarının incelenmesi",
      "Tahsilat işlemlerine karşı yürütmenin durdurulması taleplerinin hazırlanması",
    ],
    localParagraphs: [
      "Çekmeköy'de ayrı bir vergi dairesi bulunmamaktadır; ilçede Merkez Mahallesi Erenler Caddesi'ndeki Hükümet Konağı'nda Çekmeköy Mal Müdürlüğü bulunur; mükellefin bağlı olduğu dairenin güncel durumu ayrıca teyit edilmelidir. Hangi dairenin işlem yaptığı, ihbarname üzerindeki başlıktan görülebilir.",
      "Vergi ve ceza ihbarnamesine karşı dava açma süresi tebliğden itibaren 30 gündür; vergi ziyaı cezası, ziyaa uğratılan verginin bir katı tutarındadır (VUK m. 344). Çekmeköy mükellefleri bakımından davalar İstanbul vergi mahkemelerinde görülür.",
    ],
    faqs: [
      { question: "Çekmeköy mükellefleri hangi vergi dairesine bağlıdır?", answer: "Bağlı olunan vergi dairesi mükellefin kaydına göre belirlenir; güncel durum ihbarname başlığından veya İstanbul Vergi Daireleri yetki listesinden teyit edilmelidir. Vergi davaları ise İstanbul vergi mahkemelerinde görülür ve ihbarnamenin tebliğinden itibaren dava açma süresi 30 gündür. Bu nedenle tebliğ edilen belge saklanmalıdır." },
      { question: "Vergi ihbarnamesine karşı dava süresi kaç gündür?", answer: "Vergi ihbarnamesine karşı dava süresi tebliğden itibaren 30 gündür. Dava, İstanbul vergi mahkemelerinde açılır. Süre tebliğ tarihinden başlar ve kaçırılırsa dava hakkı kaybedilebilir; bu nedenle ihbarnamenin tebliğ edildiği tarih belgeden kontrol edilmelidir. Uzlaşma talebi bu süreyi etkileyebilir." },
      { question: "Vergi ziyaı cezası ne kadardır?", answer: "Vergi ziyaı cezası, ziyaa uğratılan verginin bir katıdır (VUK m. 344). Ceza, tarhiyat işlemiyle birlikte ihbarname ile bildirilir. Cezaya karşı da ihbarnamenin tebliğinden itibaren 30 gün içinde vergi mahkemesinde dava açılabilir; dilekçede tarhiyatın ve cezanın hukuka aykırı olduğu gerekçeleri açıklanır." },
      { question: "Uzlaşma talep etmek dava açma süresini durdurur mu?", answer: "Uzlaşma talebi dava açma süresini durdurur; uzlaşma sağlanamazsa kalan süre içinde dava açılabilir. Uzlaşma talebi tarhiyat sonrası yapılan idari bir başvurudur ve dava hakkını ortadan kaldırmaz. Uzlaşma tutanağı düzenlendikten sonra kalan sürede dava açılabilir; bu nedenle süre takibi dikkatle yapılmalıdır." },
      { question: "Vergi mahkemesi davası öncesinde idareye itiraz zorunlu mu?", answer: "Hayır, ihbarname doğrudan vergi mahkemesinde dava konusu yapılabilir. Dava süresi ihbarnamenin tebliğinden itibaren 30 gündür. İdari yoldan uzlaşma talep etmek mümkündür ancak zorunlu değildir; uzlaşma sağlanamazsa kalan süre içinde dava açılabilir. Dava İstanbul vergi mahkemelerinde görülür." },
      { question: "Kira geliri beyan edilmezse ne olur?", answer: "Kira geliri beyan edilmezse re'sen veya ikmalen tarhiyat yapılabilir ve vergi ziyaı cezası kesilebilir. Vergi ziyaı cezası ziyaa uğratılan verginin bir katıdır (VUK m. 344). Tarhiyata ve cezaya karşı ihbarnamenin tebliğinden itibaren 30 gün içinde vergi mahkemesinde dava açılabilir." },
    ],
    howToTitle: "Çekmeköy'de Vergi İhbarnamesine Nasıl Karşı Çıkılır?",
    howToSteps: [
      { name: "Tebliğ Tarihinin Tespiti", text: "İhbarnamenin tebliğ edildiği gün belirlenir ve süre sayımı başlatılır." },
      { name: "Tarhiyat Dayanağının İncelenmesi", text: "Vergi inceleme raporu ve hesaplama kalemleri gözden geçirilir." },
      { name: "Uzlaşma veya Dava", text: "Süre dolmadan uzlaşma talebi yapılır ya da vergi mahkemesinde dava açılır." },
      { name: "Sonuç ve Ödeme", text: "Mahkeme kararı veya uzlaşma tutanağı doğrultusunda borç belirlenir." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: ["vergi-ihbarnamesine-itiraz-ve-uzlasma"],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "cekmekoy-borclar-hukuku-avukati",
    name: "Çekmeköy Borçlar Hukuku Avukatı",
    heroTitle: "Çekmeköy Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Konut ve site inşaatlarının yoğun olduğu Çekmeköy'de müteahhit, esnaf ve bireyler arasındaki sözleşme, alacak, tazminat ve sebepsiz zenginleşme uyuşmazlıklarında avukat Furkan Arıkan (İstanbul Barosu, sicil no 72621) dava öncesi ihtarnameden karar sonrası icraya kadar temsil sağlar.",
    metaTitle: "Çekmeköy Borçlar Hukuku Avukatı",
    metaDescription:
      "Çekmeköy'de sözleşme, alacak, tazminat ve sebepsiz zenginleşme uyuşmazlıklarında borçlar hukuku avukatlığı ve dava takibi hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'ni tamamlamış ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur; Çekmeköy'deki gerçek kişi ve işletmelerin sözleşmesel ilişkilerinden doğan taleplerini mahkeme önünde takip eder.",
    highlightCards: [
      { title: "Sözleşme İhlali", description: "İfa, dönme veya tazminat seçeneklerinin değerlendirilmesi." },
      { title: "Alacak Davaları", description: "Fatura, cari hesap ve borç ikrarına dayalı alacakların tahsili." },
      { title: "İnşaat ve Hizmet Sözleşmeleri", description: "Eser sözleşmesi, tadilat ve müteahhit uyuşmazlıkları." },
      { title: "Sebepsiz Zenginleşme", description: "Hukuki sebep olmaksızın yapılan ödemelerin iadesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Eser ve hizmet sözleşmelerinden doğan alacak davaları",
      "Sözleşmeden dönme ve tazminat taleplerinin hazırlanması",
      "Noter kanalıyla ihtarname ve ödeme ihtarı gönderilmesi",
      "Sebepsiz zenginleşme ve haksız fiil tazminatı davaları",
      "Ticari alacaklarda dava şartı arabuluculuk başvurusu",
      "Kefalet ve borç ikrarı belgelerinin hukuki incelemesi",
    ],
    localParagraphs: [
      "Çekmeköy'de site ve konut yapımının sürdüğü mahallelerde tadilat, çevre düzenleme ve inşaat işlerine ilişkin eser sözleşmelerinden kaynaklanan; gecikme, ayıp ve bedel anlaşmazlığı gibi uyuşmazlıklar borçlar hukukunun sık karşılaşılan konuları arasındadır.",
      "Borçlar Kanunu'nda genel zamanaşımı süresi on yıldır (TBK m. 146). Konusu para alacağı olan ticari davalarda dava açmadan önce arabulucuya başvurmak zorunludur (TTK m. 5/A). Çekmeköy bakımından görevli ticaret ve hukuk mahkemeleri Kartal'daki İstanbul Anadolu Adliyesi'ndedir.",
    ],
    faqs: [
      { question: "Genel zamanaşımı süresi ne kadardır?", answer: "Özel bir süre öngörülmeyen alacaklarda on yıldır (TBK m. 146). Süre alacağın muaccel olduğu tarihten itibaren işler. Bazı alacaklar için kanun daha kısa süreler öngörür; zamanaşımı itirazı borçlu tarafından ileri sürülmezse mahkeme kendiliğinden dikkate almaz. Alacağın niteliğine göre uygulanacak süre ayrıca belirlenmelidir." },
      { question: "Ticari alacak davasından önce arabuluculuk şart mı?", answer: "Konusu bir miktar paranın ödenmesi olan ticari davalarda arabuluculuğa başvurmak dava şartıdır (TTK m. 5/A). Arabulucuya başvurmadan açılan dava usulden reddedilebilir. Arabuluculuk sonuçsuz kalırsa son tutanakla birlikte dava açılır; başvurunun yapıldığına dair belge dava dilekçesine eklenir." },
      { question: "Sözleşmeyi ihlal eden tarafa karşı hangi seçenekler vardır?", answer: "İfa talebi, sözleşmeden dönme ya da uğranılan zararın tazmini yollarından biri durumuna göre seçilebilir. Hangi yolun uygun olacağı ihlalin türüne, gecikmenin boyutuna ve sözleşme hükümlerine göre belirlenir. Temerrüdün oluşması için çoğu durumda ihtar çekilmesi gerekir; seçilen yol kanuni şartlara uygun biçimde kullanılmalıdır." },
      { question: "İhtarname çekmek zorunlu mudur?", answer: "Her zaman zorunlu değildir ancak temerrüdün oluşması ve ispat bakımından önemli bir araçtır. Vadesi belirli borçlarda ihtara gerek kalmadan temerrüt oluşabilir; vadesi belli olmayan borçlarda ise ihtar gerekir. İhtar yazılı yapıldığında tebliğ belgesiyle ispatlanabilir ve sonraki dava ile takip aşamasında delil olarak kullanılır." },
      { question: "Haksız fiilden doğan tazminatta zamanaşımı ne zaman başlar?", answer: "Zarar ve faili öğrenme tarihinden itibaren iki yıl, her halde fiilden itibaren on yıllık süre içinde dava açılması gerekir (TBK m. 72). İki yıllık süre zarar ve failin öğrenildiği tarihten başlar; on yıllık süre ise fiilin işlendiği tarihten başlar. Süreler dolarsa borçlunun zamanaşımı itirazı üzerine talep reddedilir." },
      { question: "Çekmeköy'deki alacak davası hangi mahkemede görülür?", answer: "Uyuşmazlığın niteliğine göre asliye hukuk veya asliye ticaret mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. Ticari nitelikteki para alacağı davalarında dava açmadan önce arabulucuya başvurmak dava şartıdır (TTK m. 5/A). Çekmeköy için ayrı adliye bulunmadığından dava bu adliyede açılır." },
    ],
    howToTitle: "Çekmeköy'de Alacak Davası Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "Belgelerin Toplanması", text: "Sözleşme, fatura, yazışma ve ödeme kayıtları bir dosyada toplanır." },
      { name: "İhtar ve Arabuluculuk", text: "Gerekirse noter ihtarı gönderilir, ticari davalarda arabulucuya başvurulur." },
      { name: "Dava Dilekçesi", text: "Yetkili ve görevli mahkemeye talep ve deliller sunulur." },
      { name: "Hüküm ve Tahsil", text: "Karar kesinleştiğinde alacak icra yoluyla tahsil edilir." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];

export const cekmekoyServices: PseoService[] = [...cekmekoyBaseServices, cekmekoyMiras];
