import type { PseoService } from "./types";
import { kadikoyMiras } from "./miras/kadikoyMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const kadikoyBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "kadikoy-avukat",
    name: "Kadıköy Avukat",
    heroTitle: "Kadıköy Avukat",
    heroSubtitle:
      "Kadıköy'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan tarafından yürütülmektedir; kültür-sanat yaşamı ve yüksek eğitim düzeyiyle bilinen ilçenin kendine ait bir adliyesi bulunmadığından davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülmektedir.",
    metaTitle: "Kadıköy Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Kadıköy'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olduktan sonra İstanbul Barosu'na 72621 sicil numarasıyla kaydolan bir avukattır. Yaklaşık 468 bin nüfusu, 21 mahallesi ve Türkiye'nin en yüksek üniversite mezunu oranına sahip ilçelerinden biri olma özelliğiyle öne çıkan Kadıköy'de ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; görüşme talepleri WhatsApp veya telefon üzerinden alınabilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma, kovuşturma ve itiraz süreçlerinde müdafilik ve mağdur vekilliği." },
      { title: "Aile Hukuku", description: "Boşanma, velayet, nafaka ve mal paylaşımı uyuşmazlıklarında temsil." },
      { title: "Gayrimenkul Hukuku", description: "Fikirtepe kentsel dönüşümü dahil tapu, kat karşılığı ve kira uyuşmazlıkları." },
      { title: "İş Hukuku", description: "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarında danışmanlık." },
      { title: "İcra Hukuku", description: "Alacak takibi, itiraz ve haciz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "İdari işlemlerin iptali ve tam yargı davalarında dava takibi." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı, ceza ve uzlaşma süreçlerinde danışmanlık." },
      { title: "Borçlar Hukuku", description: "Sözleşme, alacak ve inşaat sözleşmesi kaynaklı uyuşmazlıklar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması ve mağdur vekilliği",
      "Boşanma, velayet ve nafaka taleplerinde aile hukuku danışmanlığı",
      "Fikirtepe kentsel dönüşüm alanı dahil kat karşılığı inşaat sözleşmesi ve tapu uyuşmazlıkları",
      "İşe iade ve işçilik alacaklarına ilişkin iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlerin iptaline yönelik dava süreçleri",
      "Vergi tarhiyatı ve cezalarına karşı itiraz ve dava takibi",
      "Sözleşme ve alacak kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "21 mahalleden oluşan Kadıköy, Moda ve Caddebostan'daki sahil yaşamından Kozyatağı'ndaki plaza yoğunluklu iş merkezlerine kadar geniş bir sosyo-ekonomik yelpazeyi bir arada barındırır; Marmaray hattının yedi durağı, M4 metrosu ve Kadıköy İskelesi'nden kalkan vapur seferleri ilçeyi hem Avrupa Yakası'na hem Anadolu Yakası'nın diğer ilçelerine bağlar.",
      "2013 yılında Kartal'da açılan İstanbul Anadolu Adalet Sarayı ile Kadıköy'ün kendi adliyesi kapatılmış ve tüm dava dosyaları bu adliyeye taşınmıştır; vergisel işlemler ise Kadıköy Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Kadıköy'deki davalara hangi adliye bakıyor?", answer: "Kadıköy'deki davalara Kartal'daki İstanbul Anadolu Adliyesi bakar. İlçenin kendi adliyesi bulunmamaktadır; 2013'te Kartal'da açılan adliye, Kadıköy'ün tüm ceza, hukuk ve idari dava dosyalarını bünyesine almıştır. Vergi işlemleri ise Kadıköy Vergi Dairesi Müdürlüğü nezdinde yürütülür; başvuru yolu dosyanın türüne göre belirlenir." },
      { question: "Randevu nasıl alınır?", answer: "Randevu WhatsApp veya telefon üzerinden talep edilir. Konunun kısa özeti ve varsa tebligat ya da süre bilgisi iletildiğinde uygun bir görüşme günü belirlenir. Görüşmeye kimlik, sözleşme, tebligat ve ödeme belgelerinin getirilmesi, hukuki durumun ilk görüşmede daha net değerlendirilmesini sağlar." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dosya takibi yapılır. Kadıköy'de kentsel dönüşüm kaynaklı sözleşme uyuşmazlıkları, plaza çalışanlarının işçilik alacakları ve ticari alacak takipleri öne çıkabilir. Kapsam ilk görüşmede birlikte belirlenir." },
      { question: "Büro Kadıköy'de mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır. Kadıköy'deki müvekkillerle büroda yüz yüze ya da çevrim içi görüşülür ve aynı kapsamda hizmet verilir. Kadıköy'deki davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görüldüğünden duruşma günlerinde ulaşım ve saat planı birlikte yapılabilir; dosyanın gelişmeleri müvekkille paylaşılır." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Ücret, dosyanın niteliğine ve gerektirdiği emeğe göre belirlenir ve randevu sırasında bildirilir. Danışmanlık görüşmesi ücrete tabidir; vekalet verilirse ücret yazılı olarak kararlaştırılır. Avukatlık Kanunu m.164 uyarınca ücret, Avukatlık Asgari Ücret Tarifesi'nin altında belirlenemez. Ücretin kapsamı ve ödeme şekli, belgeler incelendikten sonra açıkça konuşulur." },
      { question: "Fikirtepe'deki kentsel dönüşüm sürecinde hukuki destek alınabilir mi?", answer: "Evet, kat karşılığı inşaat sözleşmesinin incelenmesi ve hak sahipliği uyuşmazlıklarında danışmanlık sağlanır. Arsa payı karşılığı inşaat sözleşmesinin noterde düzenleme şeklinde yapılması gerekir; sözleşme, tapu kaydı ve müteahhitle yazışmalar incelenerek dava, tespit veya idari başvuru gibi yollar değerlendirilir." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Görüşmeler tercihe göre yüz yüze veya çevrim içi planlanabilir. Yüz yüze görüşmeler Beşiktaş/Sinanpaşa'daki büroda yapılır; çevrim içi görüşmede belgeler WhatsApp veya e-posta ile paylaşılabilir. Randevu telefon ya da WhatsApp üzerinden talep edilir ve görüşme biçimi müvekkille birlikte belirlenir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Gözaltı halinde vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmelidir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar ve şüpheliye eşlik edilebilir. Ad, gözaltı yeri ve olayın kısa özeti paylaşıldığında sürecin ilk adımları hızla planlanabilir." },
      { question: "Kadıköy Vergi Dairesi'ne bağlı işlemler nelerdir?", answer: "İlçedeki mükelleflerin büyük bölümünün vergisel işlemleri Kadıköy Vergi Dairesi Müdürlüğü üzerinden yürütülür; Göztepe gibi bazı bölgelerde ayrı vergi daireleri de bulunur. Tarhiyat ve vergi ceza ihbarnamelerine karşı dava, tebliğden itibaren 30 gün içinde vergi mahkemesinde açılabilir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca dosyadaki gelişmeler müvekkille paylaşılır. Duruşma tarihleri, mahkeme veya idare tarafından yapılan işlemler ve yeni evraklar hakkında bilgi verilir. Vekalet verilen dosyalarda gelişmeler WhatsApp, telefon veya yüz yüze görüşme gibi müvekkilin tercih ettiği yollarla aktarılır." },
    ],
    howToTitle: "Kadıköy'de Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Kadıköy Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "kadikoy-bosanma-avukati",
    name: "Kadıköy Boşanma Avukatı",
    heroTitle: "Kadıköy Boşanma Avukatı",
    heroSubtitle:
      "Kadıköy'de anlaşmalı veya çekişmeli şekilde açılan boşanma davalarında velayet, nafaka ve mal rejimi tasfiyesi taleplerine ilişkin temsil sağlanmaktadır; aile mahkemesi, ilçenin bağlı olduğu Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir.",
    metaTitle: "Kadıköy Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Kadıköy'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Aile hukuku alanında Kadıköy'deki müvekkillerine boşanma, velayet ve nafaka konularında temsil sağlar.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Mal Rejimi Tasfiyesi", description: "Caddebostan ve Moda'daki taşınmazlar dahil mal varlığının paylaşımı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Sahil şeridindeki konutlar ve Kozyatağı'ndaki taşınmazlar dahil mal rejimi tasfiyesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Üniversite mezunu oranının Türkiye ortalamasının belirgin biçimde üzerinde seyrettiği Kadıköy'de, çift kariyerli evliliklerde mal rejimi tasfiyesi ve katkı payı alacağı hesapları boşanma sürecinin öne çıkan konularındandır.",
      "Boşanma, velayet ve nafaka davalarına Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki aile mahkemesinde bakılır. Anlaşmalı süreçte protokolün eksiksizliği, çekişmeli süreçte ise delillerin güçlü olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Boşanma davası, Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki aile mahkemesinde açılır; Kadıköy'ün ayrı bir adliyesi bulunmamaktadır. TMK m.168 uyarınca boşanma davasında yetkili mahkeme, eşlerden birinin yerleşim yeri mahkemesi veya eşlerin son birlikte oturduğu yer mahkemesidir. Başvuruda nüfus kayıt örneği, evlilik cüzdanı ve çocuk varsa velayet talepleri hazırlanır." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Evet, çocuk belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir. Mahkeme velayet düzenlemesinde çocuğun yararını esas alır; çocuğun yaşı, ihtiyaçları ve ebeveynlerle ilişkisi birlikte değerlendirilir. Çocuğun görüşü bağlayıcı olmayıp kararın dayanaklarından yalnızca biri olarak ele alınır." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Nafaka miktarı, tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilerek belirlenir. Mahkeme, nafaka ödeyecek tarafın ödeme gücünü ve nafaka alacak tarafın ihtiyacını gelir belgeleri, maaş bordroları ve harcama kalemleri üzerinden inceler. Koşullar değişirse nafakanın artırılması, azaltılması veya kaldırılması talep edilebilir." },
      { question: "Çift kariyerli bir evlilikte mal paylaşımı nasıl yapılır?", answer: "Evlilik birliği içinde edinilen mal varlığı, tarafların katkı oranına göre paylaşılır; kişisel mallar tasfiye dışında değerlendirilir. Çift kariyerli evliliklerde maaş, birikim ve taşınmaz edinimlerine ilişkin banka kayıtları ve tapu belgeleri incelenir; katkı payı alacağı ve mal rejimi tasfiyesi bu belgelere göre hesaplanır." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir veya takipten vazgeçilebilir. Boşanma davası sürerken eşler barışırsa mahkemeye bu yönde beyanda bulunulur. Dava açılmış olması barışmaya engel değildir; ancak sürecin hukuki sonuçları, örneğin geçici nafaka ve velayet düzenlemeleri, mahkeme tarafından ayrıca değerlendirilir." },
    ],
    howToTitle: "Kadıköy'de Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "İhtiyaç Analizi", text: "Velayet, nafaka ve mal rejimi talepleri belirlenir." },
      { name: "Dilekçe Hazırlığı", text: "Duruma uygun dava dilekçesi veya protokol yazılır." },
      { name: "Dava Açılışı", text: "Yetkili aile mahkemesine başvurulur." },
      { name: "Sonuç", text: "Duruşma sonrası karar açıklanır." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "nafakada-yuzde-kac-sorusu"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "kadikoy-ceza-avukati",
    name: "Kadıköy Ceza Avukatı",
    heroTitle: "Kadıköy Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma, tutuklama ve kovuşturma aşamalarının tamamında müdafilik hizmeti verilir; ilçenin ayrı bir adliyesi bulunmadığından ağır ceza davaları dahil tüm ceza davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Kadıköy Ceza Avukatı | Müdafilik",
    metaDescription:
      "Kadıköy'de soruşturma, kovuşturma, tutukluluğa itiraz ve asayiş olaylarına ilişkin ceza uyuşmazlıklarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "2019 MEF Üniversitesi Hukuk Fakültesi mezunu olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı Furkan Arıkan, ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında Kadıköy'deki müvekkillerine müdafilik yapar.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Yoğun Nüfus Hareketliliğine Bağlı Olaylar", description: "Kadıköy çarşısı ve sahil hattındaki asayiş olaylarında savunma." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Kadıköy çarşısı, Moda ve Bahariye çevresindeki yoğun nüfus hareketliliğine bağlı asayiş olaylarında savunma",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "İstanbul'un en yoğun ziyaretçi trafiğine sahip ilçelerinden biri olan Kadıköy'de, özellikle Kadıköy İskelesi çevresi, Bahariye Caddesi ve Moda sahili gibi kalabalık noktalarda meydana gelen olaylara ilişkin ceza yargılamaları sık karşılaşılan bir alandır.",
      "2013 yılında Kartal'da açılan İstanbul Anadolu Adalet Sarayı, Kadıköy'ün kendi adliyesini kapatarak tüm ceza dosyalarını -ağır ceza davaları dahil- bünyesine almıştır. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar.",
    ],
    faqs: [
      { question: "Kadıköy'de bir ceza davası hangi adliyede görülür?", answer: "Kadıköy'ün kendi adliyesi bulunmadığından tüm ceza davaları, ağır ceza dahil, Kartal'daki İstanbul Anadolu Adliyesi'nde görülür. 2013'te açılan bu adliye ilçenin ceza dosyalarını bünyesine almıştır. Soruşturma aşamasında ise ifade ve işlemler savcılık ve kolluk nezdinde yürütülür." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Şüphelinin ifadesi müdafi bulunmadan da alınabilir; ancak müdafi bulundurulması önerilir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar. Müdafi, soruşturma dosyasını inceleyerek ifadenin içeriği ve haklar konusunda şüpheliye yol gösterir; ifade öncesinde iletişime geçmek bu nedenle faydalıdır." },
      { question: "Kalabalık bir mekanda yaşanan tartışma nedeniyle soruşturma açılabilir mi?", answer: "Evet, darp, hakaret veya tehdit iddiası varsa şikayet üzerine veya resen soruşturma açılabilir. Kadıköy İskelesi çevresi, Bahariye Caddesi ve Moda sahili gibi kalabalık noktalardaki olaylar da bu kapsamdadır. Şüpheli ya da mağdur olarak ifadeye çağrılan kişi, soruşturma dosyasını müdafi aracılığıyla inceleyebilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, kovuşturmaya yer olmadığı kararına karşı sulh ceza hakimliğine itiraz edilebilir. İtiraz süresi kararın tebliğinden itibaren 15 gündür. Mağdur veya şikayetçi, savcılığın dosyayı takipsizlikle sonuçlandırdığı hallerde bu yola başvurarak kararın yeniden incelenmesini isteyebilir; itiraz dilekçesi gerekçeleriyle hazırlanır." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Uzlaşma sağlanamazsa yargılamaya kaldığı yerden devam edilir. Uzlaşmaya tabi suçlarda taraflar bir araya getirilir; anlaşma olmazsa soruşturma veya kovuşturma olağan akışında sürer ve dosya iddianame ile mahkemeye taşınabilir. Uzlaşma görüşmelerinde ileri sürülen beyanlar dosyanın ilerleyişini kendiliğinden belirlemez." },
    ],
    howToTitle: "Kadıköy'de Ceza Yargılaması Nasıl İlerler?",
    howToSteps: [
      { name: "Olay Bildirimi", text: "Şikayet, ihbar veya resen harekete geçilir." },
      { name: "Soruşturma Aşaması", text: "Deliller toplanır, ifadeler alınır." },
      { name: "Dava Açılması", text: "İddianamenin kabulüyle kovuşturma başlar." },
      { name: "Temyiz/İstinaf", text: "Karara karşı üst yargı yoluna gidilebilir." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "kosullu-saliverilme-oranlari"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "kadikoy-gayrimenkul-avukati",
    name: "Kadıköy Gayrimenkul Avukatı",
    heroTitle: "Kadıköy Gayrimenkul Avukatı",
    heroSubtitle:
      "Fikirtepe kentsel dönüşüm alanındaki kat karşılığı inşaat sözleşmeleri, hak sahipliği uyuşmazlıkları ve sahil şeridindeki taşınmaz alım-satımlarında hukuki destek sağlanır; davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Kadıköy Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Kadıköy'de Fikirtepe kentsel dönüşümü, tapu iptali ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş, İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuş bir avukattır. Fikirtepe kentsel dönüşüm sürecindeki sözleşme ve hak sahipliği uyuşmazlıkları ile tapu davalarında Kadıköy'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Fikirtepe Kentsel Dönüşümü", description: "Kat karşılığı inşaat sözleşmesi ve hak sahipliği uyuşmazlıkları." },
      { title: "Sahil Şeridi Taşınmazları", description: "Moda, Caddebostan ve Suadiye'deki konut alım-satım işlemleri." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Komşu Parsel Zararları", description: "İnşaat kaynaklı çatlak ve oturma nedeniyle tazminat talepleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fikirtepe kentsel dönüşüm alanındaki kat karşılığı inşaat sözleşmelerinin hazırlanması ve incelenmesi",
      "Hak sahipliği tespiti ve müteahhide karşı açılan uyuşmazlık davaları",
      "İnşaat kaynaklı komşu parsel zararlarında tazminat talepleri",
      "Moda, Caddebostan ve Suadiye'deki konut alım-satımında tapu ve imar durumu incelemesi",
      "Tapu iptali ve tescil davalarının açılması",
      "Kira bedeli tespiti ve uyarlama davaları",
    ],
    localParagraphs: [
      "2007'de kentsel dönüşüm alanı, 2013'te ise riskli alan ilan edilen Fikirtepe'de, özel sektör eliyle yürütülen projelerin bir bölümünün tamamlanamaması nedeniyle yıllar içinde çok sayıda hak sahipliği ve sözleşme uyuşmazlığı ortaya çıkmış, sürecin tamamı 2021'de yeniden yapılandırılmıştır.",
      "Kat karşılığı inşaat sözleşmesinin noterde düzenleme şeklinde yapılması zorunludur; adi yazılı sözleşmeler geçersiz sayılır. Bu tür uyuşmazlıklar, niteliğine göre Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki sulh hukuk veya asliye hukuk mahkemesinde görülür.",
    ],
    faqs: [
      { question: "Fikirtepe'de kat karşılığı sözleşmesi neden noterde yapılmalı?", answer: "Kanun gereği arsa payı karşılığı inşaat sözleşmesi resmi şekil şartına tabidir; noter düzenlemesi olmadan yapılan sözleşme geçersizdir. Fikirtepe'de yürütülen dönüşüm projelerinde bu şekil şartına uyulmaması uygulamada sıkça uyuşmazlık konusu olmuştur. Sözleşmenin şekil ve içerik bakımından incelenmesi hak kaybını önlemeye yardımcı olur." },
      { question: "Müteahhit inşaatı süresinde tamamlamazsa ne yapılabilir?", answer: "Sözleşmedeki cezai şart ve teminat hükümlerine dayanılarak tazminat veya fesih talep edilebilir. Önce sözleşmede teslim tarihi, gecikme cezası ve teminat düzenlemesi incelenir; müteahhide noter aracılığıyla ihtarname gönderilmesi sık izlenen yoldur. Gerekirse Kartal'daki İstanbul Anadolu Adliyesi'nde dava açılır." },
      { question: "Komşu inşaattan kaynaklanan çatlaklar için ne yapılabilir?", answer: "Hasar için önce tespit yaptırılmalı, ardından yükleniciye veya iş sahibine karşı tazminat davası açılabilir. Çatlakların fotoğraflanması, bilirkişi incelemesiyle durum tespiti yapılması ve inşaat faaliyetinin zaman çizelgesinin belgelenmesi delil açısından önem taşır. Dava, niteliğine göre Kartal'daki adliyede görülür." },
      { question: "Kadıköy'de gayrimenkul davası hangi mahkemede görülür?", answer: "Gayrimenkul davaları, uyuşmazlığın niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür. Kadıköy'ün ayrı bir adliyesi bulunmamaktadır. Tapu iptali, ortaklığın giderilmesi veya kat karşılığı sözleşme uyuşmazlıklarında görevli mahkeme dosyanın türüne göre belirlenir." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Tapu iptal davası, hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tarafından açılabilir. Sahte vekaletname, muvazaa veya geçersiz sözleşmeye dayanan tescil gibi durumlarda iptal ve tescil talep edilir. Dava, taşınmazın bulunduğu yer mahkemesinde görülür; tapu kaydı ve dayanak belgeler incelenerek dava dilekçesi hazırlanır." },
    ],
    howToTitle: "Kadıköy'de Tapu ve Kentsel Dönüşüm Uyuşmazlığı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Kayıt İncelemesi", text: "Tapu, imar durumu ve varsa kat karşılığı sözleşmesi incelenir." },
      { name: "Uyuşmazlığın Netleştirilmesi", text: "İddia ve dayanak deliller belirlenir." },
      { name: "Dava Açılması", text: "Yetkili mahkemede dava süreci başlatılır." },
      { name: "Sonuçlanma", text: "Karar veya bilirkişi raporu doğrultusunda süreç tamamlanır." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "kadikoy-icra-avukati",
    name: "Kadıköy İcra Avukatı",
    heroTitle: "Kadıköy İcra Avukatı",
    heroSubtitle:
      "Ticari alacakların ve bireysel borçların tahsili amacıyla icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır; icra daireleri Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir.",
    metaTitle: "Kadıköy İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Kadıköy'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Avukat Furkan Arıkan İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. İcra ve iflas hukuku kapsamında Kadıköy'deki alacaklı ve borçlu taraflara danışmanlık verir.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "Ticari Alacaklar", description: "Kozyatağı'ndaki plaza ve ofis merkezli şirketler arası alacak takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "Kozyatağı ve çevresindeki ofis merkezli şirketler arası ticari alacakların takibi",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Anadolu Yakası'nın önde gelen iş merkezlerinden biri haline gelen Kozyatağı'ndaki plazalarda faaliyet gösteren şirketler arasındaki ticari alacak uyuşmazlıkları, Kadıköy'de icra takiplerinin sık görülen nedenlerinden biridir.",
      "Bu takiplere ilişkin uyuşmazlıklar Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki icra mahkemelerinde görülür; borçlunun Kadıköy'de yerleşik olduğu takiplerde yetkili icra dairesi kural olarak ikametgah esas alınarak belirlenir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "İcra takibi, sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlatılabilir. Alacağın dayanağını gösteren belgeler takip talebine eklenir; ilamlı takipte mahkeme kararı, ilamsız takipte ise alacağı ispata yarayan belge esas alınır. Takip talebi, yetkili icra dairesine sunulur ve borçluya ödeme emri gönderilir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Ödeme emrine itiraz süresi, tebliğden itibaren 7 gündür. İİK m.62 uyarınca borçlu bu süre içinde icra dairesine itiraz ederse takip durur. Sürenin kaçırılması halinde takip kesinleşebilir; bu nedenle ödeme emrinin tebliğ tarihi ve tebligat evrakı dikkatle saklanmalı, süre dolmadan değerlendirme yapılmalıdır." },
      { question: "Kadıköy'de icra dairesi nerededir?", answer: "Kadıköy'deki icra takipleri Kartal'daki İstanbul Anadolu Adliyesi bünyesinde yürütülür; Kadıköy'ün ayrı bir icra dairesi bulunmamaktadır. Borçlunun Kadıköy'de yerleşik olduğu takiplerde yetkili icra dairesi kural olarak ikametgah esas alınarak belirlenir. Takibe ilişkin uyuşmazlıklar ise icra mahkemelerinde görülür." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Haciz, kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir. Borçlunun taşınmaz kayıtları, banka hesapları ve diğer mal varlığı üzerinden işlem yapılabilir; kanunda haczedilemez sayılan mallar ise kapsam dışındadır. Haciz, ödeme emrinin kesinleşmesinden sonra alacaklının talebi üzerine icra dairesi tarafından uygulanır." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Borçlu ödeme yapmazsa haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür. Ödeme emrine itiraz edilmezse takip kesinleşir; alacaklı haciz talep eder, haczedilen mallar satış aşamasına taşınır. Borçlu itiraz ederse itirazın iptali veya kaldırılması davası gibi yollar değerlendirilir." },
    ],
    howToTitle: "Kadıköy'de İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "kadikoy-idare-avukati",
    name: "Kadıköy İdare Avukatı",
    heroTitle: "Kadıköy İdare Avukatı",
    heroSubtitle:
      "Fikirtepe kentsel dönüşüm sürecindeki idari işlemler, belediye imar uygulamaları ve idari para cezalarına karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Kadıköy İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Kadıköy'de idari işlemlerin iptali, kentsel dönüşüm sürecine ilişkin idari uyuşmazlıklar ve tazminat davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı Furkan Arıkan, MEF Üniversitesi Hukuk Fakültesi'nden 2019'da mezun olmuş bir avukattır. İdari işlemlerin iptali ve tam yargı davalarında Kadıköy'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Fikirtepe Kentsel Dönüşüm İşlemleri", description: "Riskli alan/yapı tespitine ve uygulama işlemlerine itiraz." },
      { title: "Belediye İmar Uygulamaları", description: "Ruhsat ve imar planı kararlarına karşı dava süreçleri." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fikirtepe kentsel dönüşüm alanındaki riskli yapı ve uygulama işlemlerine karşı idari dava süreçleri",
      "Belediye imar planı kararlarına karşı iptal davası açılması",
      "Ruhsat başvurusu ret işlemlerine itiraz edilmesi",
      "İdarenin işlem veya eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "2013'te riskli alan ilan edilen Fikirtepe'de yürütülen kentsel dönüşüm sürecine ilişkin idari işlemler -riskli yapı tespiti, uygulama projesi onayı gibi- ilçedeki idari dava konularının başında gelmektedir.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "Riskli yapı tespitine karşı hangi sürede dava açılmalı?", answer: "Riskli yapı tespitine karşı, tebliğ veya öğrenme tarihinden itibaren 60 gün içinde idare mahkemesinde dava açılabilir. İYUK m.7 uyarınca bu süre kaçırılırsa iptal davası yolu kapanabilir. Fikirtepe gibi dönüşüm alanlarında tespit yazısının tebliğ tarihinin ve eklerinin saklanması süre hesabı için önemlidir." },
      { question: "Kentsel dönüşüm uygulama projesine itiraz edilebilir mi?", answer: "Evet, hukuka aykırılık iddiasıyla idare mahkemesinde iptal davası açılabilir. Uygulama projesi onayı gibi idari işlemlere karşı dava, tebliğden itibaren 60 gün içinde açılır. Fikirtepe gibi dönüşüm alanlarında dava dilekçesinde işlemin hangi yönden hukuka aykırı olduğu belgelerle ortaya konur." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde iptal davası açılabilir. Ret işleminin tebliğinden itibaren 60 gün içinde dava açılması gerekir; bu süre İYUK m.7 uyarınca belirlenir. Dava için ret yazısı, başvuru evrakı ve ilgili imar belgeleri toplanır; işlemin gerekçesi bu belgeler üzerinden değerlendirilir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, idari para cezasına karşı yasal süresinde dava açılabilir. İdari işlemlere karşı iptal davası genel kural olarak tebliğden itibaren 60 gün içinde idare mahkemesinde açılır; ceza tutanağında farklı bir başvuru yolu belirtilmişse o yol esas alınmalıdır. Tutanak, tebliğ zarfı ve ödeme belgeleri saklanmalıdır." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "İdarenin işlem veya eyleminden zarar görenler, tam yargı davası yoluyla zararın tazminini talep edebilir. Dava idare mahkemesinde açılır; zararın idarenin işlemi veya eylemiyle bağlantısı belgelerle gösterilir. Önce idareye başvuru yapılması gereken hallerde başvuru yolu ve süreler dosyaya göre ayrıca belirlenir." },
    ],
    howToTitle: "Kadıköy'de İdari İptal Davası Nasıl Açılır?",
    howToSteps: [
      { name: "İnceleme", text: "İptali istenen işlem ve tebliğ/ilan tarihi belirlenir." },
      { name: "Süre Takibi", text: "60 günlük yasal süre hesaplanır." },
      { name: "Dilekçe Hazırlığı", text: "Talep ve gerekçeler dilekçeye işlenir." },
      { name: "Yargılama", text: "İdare mahkemesi dosyayı inceleyip karar verir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: ["idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "kadikoy-is-hukuku-avukati",
    name: "Kadıköy İş Hukuku Avukatı",
    heroTitle: "Kadıköy İş Hukuku Avukatı",
    heroSubtitle:
      "Kozyatağı'ndaki plaza ve ofis merkezlerinde çalışanlar dahil kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemesi Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir.",
    metaTitle: "Kadıköy İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Kadıköy'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır. İş hukuku kapsamında Kadıköy'deki çalışanlara ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Plaza ve Ofis Çalışanları", description: "Kozyatağı'ndaki şirket merkezlerinde beyaz yaka uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Kozyatağı'ndaki plaza ve ofis merkezlerinde beyaz yaka işçilik alacaklarının tahsili",
      "Bağdat Caddesi üzerindeki mağaza ve showroom çalışanlarının ücret alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Anadolu Yakası'nın hızla büyüyen iş merkezlerinden Kozyatağı'nda çok sayıda şirketin merkez veya şube ofisi bulunması nedeniyle, Kadıköy'de beyaz yaka çalışanların işe iade ve tazminat talepleri sık karşılaşılan bir uyuşmazlık türüdür.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki iş mahkemesinde görülür.",
    ],
    faqs: [
      { question: "Kıdem tazminatı hangi hallerde ödenir?", answer: "Kıdem tazminatı, en az 1 yıllık kıdem şartıyla kanunda sayılan haklı fesih hallerinde ödenir. İşçinin haklı nedenle iş sözleşmesini feshetmesi veya işverenin haklı neden olmaksızın feshetmesi bu kapsamdadır. Hesap, çalışma süresi ve son brüt giydirilmiş ücret üzerinden yapılır; bordro ve iş sözleşmesi incelenir." },
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Kıdem tazminatı, çalışma süresi ve son brüt giydirilmiş ücret esas alınarak hesaplanır. Çalışılan her tam yıl için bir aylık giydirilmiş ücret üzerinden hesap yapılır; artan süre de orantılı olarak eklenir. Giydirilmiş ücrete yemek, yol gibi düzenli yan haklar dahil edilir; bu nedenle bordro ve iş sözleşmesi incelenir." },
      { question: "Kadıköy'de iş mahkemesi nerededir?", answer: "Kadıköy'deki iş davalarına Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki iş mahkemesi bakar; Kadıköy'ün ayrı bir adliyesi bulunmamaktadır. İşe iade ve işçilik alacağı davalarında kanunda öngörülen hallerde önce arabuluculuğa başvurulur. Arabuluculukta anlaşma sağlanamazsa dava aynı adliyedeki iş mahkemesinde açılır." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "İşe iade sürecinin toplam süresi dosyaya göre değişir ve kesin bir süre öngörülemez. Önce fesihten itibaren 1 ay içinde arabulucuya başvurulur; anlaşma olmazsa son tutanaktan itibaren 2 hafta içinde dava açılır. İş K. m.18 uyarınca 30 işçi ve 6 ay kıdem koşulu aranır." },
      { question: "Plaza çalışanlarının fazla mesai hakkı nasıl ispatlanır?", answer: "Plaza çalışanlarının fazla mesai hakkı, giriş-çıkış kayıtları, e-posta trafiği, bordro ve tanık beyanı ile ispat edilebilir. Kozyatağı gibi ofis yoğun bölgelerde çalışan beyaz yakalar için kart geçiş kayıtları ve yazışma saatleri önem taşır. Bordrodaki fazla mesai tahakkukları da ispatta değerlendirilir." },
    ],
    howToTitle: "Kadıköy'de İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Fesih Değerlendirmesi", text: "İşten çıkarma gerekçesi ve usulü incelenir." },
      { name: "Arabulucuya Başvuru", text: "Yasal süre içinde arabuluculuk sürecine başlanır." },
      { name: "Dava Süreci", text: "Anlaşma olmazsa iş mahkemesinde dava açılır." },
      { name: "Sonuç", text: "Mahkeme kararı doğrultusunda işlem yapılır." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "giydirilmis-ucret-kavrami"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "kadikoy-kira-tahliye-avukati",
    name: "Kadıköy Kira ve Tahliye Avukatı",
    heroTitle: "Kadıköy Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Moda ve Caferağa gibi yoğun kiracı nüfusuna sahip mahallelerdeki konut kiraları, Bağdat Caddesi üzerindeki işyeri kiralamaları ve tahliye uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemesi Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir.",
    metaTitle: "Kadıköy Kira ve Tahliye Avukatı | Tahliye",
    metaDescription:
      "Kadıköy'de kiracı tahliyesi, konut ve işyeri kira sözleşmesi uyuşmazlıkları ve kira bedeli tespitinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "2019 MEF Üniversitesi Hukuk Fakültesi mezunu Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır. Kira hukuku alanında Kadıköy'deki kiraya verenlere ve kiracılara danışmanlık verir.",
    highlightCards: [
      { title: "Konut Kiraları", description: "Moda ve Caferağa çevresindeki yoğun kiracı talebine bağlı uyuşmazlıklar." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve tahliye taahhüdüne dayalı süreçler." },
      { title: "İşyeri Kiraları", description: "Bağdat Caddesi ve Kadıköy çarşısındaki mağaza/dükkan kiralamaları." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedelinin belirlenmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Moda, Caferağa ve Osmanağa çevresindeki konut kiralamalarına ilişkin sözleşme incelemesi",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Bağdat Caddesi üzerindeki mağaza ve showroom kiralarında rayiç bedel tespiti",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "Genç ve öğrenci nüfusun yoğun olduğu Moda ve Caferağa gibi mahallelerde kiracı devir hızının yüksek olması, konut kira sözleşmelerinde depozito ve tahliye taahhüdü şartlarının net biçimde belirlenmesini önemli kılmaktadır.",
      "Bu davalara Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki sulh hukuk mahkemesinde bakılır; kira sözleşmesinin yazılı ve eksiksiz olması, uyuşmazlık halinde ispat açısından önem taşır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir tahliye taahhüdü veya ihtiyaç nedeniyle kiracının tahliyesi talep edilebilir. Kira borcunda TBK m.315 uyarınca kiracıya en az 30 gün süre verilerek ihtar gönderilir; süre içinde ödeme yapılmazsa tahliye yolu açılır. Dava sulh hukuk mahkemesinde, taahhütte icra yoluyla açılır." },
      { question: "Bağdat Caddesi'ndeki bir işyerinin kira bedeli nasıl güncellenir?", answer: "İşyeri kira bedeli, sözleşmedeki artış oranı veya yasal sınırlar çerçevesinde güncellenir; uyuşmazlık halinde rayiç bedel tespiti istenebilir. Bağdat Caddesi üzerindeki mağaza ve showroom kiralarında tarafların uzlaşamadığı durumlarda mahkemeden kira bedelinin tespiti istenir. Kira sözleşmesi ve önceki artış kayıtları bu değerlendirmede incelenir." },
      { question: "Kadıköy'de tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine göre değişir; birkaç aydan bir yıla kadar sürebilir. Sürenin uzunluğu, tebligatın ulaşması, bilirkişi incelemesi ve itirazlar gibi etkenlere bağlıdır. Dava Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki sulh hukuk mahkemesinde görülür; sözleşmenin yazılı ve eksiksiz olması ispatı kolaylaştırır." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Rayiç bedel tespiti, mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Kira artışı konusunda taraflar anlaşamazsa mahkemeden kira bedelinin belirlenmesi istenir; mahkeme çevredeki benzer kiraları ve taşınmazın özelliklerini bilirkişi aracılığıyla inceler. Mevcut sözleşme ve önceki kira ödemeleri bu inceleme için gereklidir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir. Taahhütnamenin kiracı tarafından kiralananın tesliminden sonra yazılı olarak verilmiş olması ve geçerlilik şartlarını taşıması gerekir. Taahhütname geçerli değilse veya itiraz edilirse uyuşmazlık sulh hukuk mahkemesinde görülür." },
    ],
    howToTitle: "Kadıköy'de Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "kadikoy-vergi-avukati",
    name: "Kadıköy Vergi Avukatı",
    heroTitle: "Kadıköy Vergi Avukatı",
    heroSubtitle:
      "Kozyatağı'ndaki şirketler ve Bağdat Caddesi üzerindeki işletmelere yönelik vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Kadıköy Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Kadıköy'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukat olarak, vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Kadıköy'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Kurumlar Vergisi İncelemeleri", description: "Kozyatağı merkezli şirketlere yönelik vergi denetimleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Kozyatağı'ndaki şirket merkezlerine yönelik kurumlar vergisi ve KDV incelemelerinde danışmanlık",
      "Bağdat Caddesi üzerindeki perakende işletmelerin vergi uyuşmazlıklarında destek",
    ],
    localParagraphs: [
      "Kadıköy'de birden fazla vergi dairesi bulunmakla birlikte, ilçe genelindeki mükelleflerin büyük bölümünün işlemleri Kadıköy Vergi Dairesi Müdürlüğü üzerinden yürütülür; Göztepe gibi bazı bölgelerde ayrı vergi daireleri de hizmet vermektedir.",
      "Kozyatağı'ndaki plaza ve ofis merkezlerinde yoğunlaşan şirketlerin kurumlar vergisi ve KDV incelemeleri, ilçede sık karşılaşılan vergi uyuşmazlıkları arasındadır. İhbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "Kadıköy Vergi Dairesi hangi mükellefleri kapsıyor?", answer: "İlçe genelindeki mükelleflerin büyük bölümü Kadıköy Vergi Dairesi Müdürlüğü'ne bağlıdır; Göztepe gibi bazı bölgelerde ayrı vergi daireleri de bulunur. Mükellefin bağlı olduğu daire, tarhiyat ve ihbarnameleri düzenleyen merkez olur. Bu işlemlere karşı dava, tebliğden itibaren 30 gün içinde vergi mahkemesinde açılabilir." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "İhbarnameye karşı tebliğden itibaren 30 gün içinde vergi mahkemesinde dava açılabilir. İYUK m.7 uyarınca vergi davalarında dava açma süresi 30 gündür. Süre tebliğ tarihinden başladığı için ihbarnamenin tebliğ zarfı ve tarihi saklanmalıdır; ihbarname ve eklerinin dava dilekçesine bağlanması gerekir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "Vergi davaları, İstanbul vergi mahkemelerinde görülür. Vergi ve ceza ihbarnamelerine karşı iptal davası bu mahkemede açılır; dava açma süresi tebliğden itibaren 30 gündür. Uzlaşma yoluna başvurulsa bile kalan dava açma süresi dikkate alınmalı, süre geçirilmeden dosya değerlendirilmelidir." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur. Uzlaşma başvurusu vergi idaresi nezdinde yapılır; anlaşma olmazsa mükellef vergi mahkemesinde dava açabilir. Dava açma süresi 30 gün olduğundan uzlaşma tutanağı ve tebliğ tarihleri sürenin ne kadar kaldığını belirlemek için dikkatle takip edilmelidir." },
      { question: "Kozyatağı'ndaki bir şirkete vergi incelemesi başlatılırsa süreç nasıl işler?", answer: "İnceleme raporuna karşı uzlaşma talep edilebilir veya doğrudan dava yoluna gidilebilir. Rapora dayalı vergi ve ceza ihbarnamesi tebliğ edildikten sonra uzlaşma başvurusu yapılabilir; ihbarnameye karşı dava süresi 30 gündür. Kozyatağı'ndaki şirketlerde kurumlar vergisi ve KDV incelemeleri belgelerle birlikte değerlendirilir." },
    ],
    howToTitle: "Kadıköy'de Vergi İtirazı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "İnceleme", text: "Tarhiyat veya cezanın dayanağı ayrıntılı incelenir." },
      { name: "Yol Seçimi", text: "Uzlaşma mı yoksa doğrudan dava mı açılacağı kararlaştırılır." },
      { name: "Başvuru", text: "Süresi içinde vergi mahkemesine başvurulur veya uzlaşma istenir." },
      { name: "Sonuçlanma", text: "Mahkeme kararı veya uzlaşma tutanağıyla süreç biter." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: ["vergi-ihbarnamesine-itiraz-ve-uzlasma"],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "kadikoy-borclar-hukuku-avukati",
    name: "Kadıköy Borçlar Hukuku Avukatı",
    heroTitle: "Kadıköy Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Fikirtepe kentsel dönüşümündeki kat karşılığı inşaat sözleşmesi uyuşmazlıkları, ticari alacak talepleri ve tazminat davalarında temsil sağlanır; asliye hukuk mahkemesi Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir.",
    metaTitle: "Kadıköy Borçlar Hukuku Avukatı | Alacak Davası",
    metaDescription:
      "Kadıköy'de kat karşılığı inşaat sözleşmeleri, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Avukat Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur. Borçlar hukuku kapsamında Kadıköy'deki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık verir.",
    highlightCards: [
      { title: "Kentsel Dönüşüm Sözleşmeleri", description: "Fikirtepe'deki kat karşılığı inşaat sözleşmesi uyuşmazlıkları." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Komşu Parsel Zararları", description: "İnşaat faaliyetinden kaynaklanan zararların tazmini." },
      { title: "Ticari Sözleşmeler", description: "Kozyatağı merkezli şirketler arası sözleşme uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fikirtepe kentsel dönüşüm alanındaki kat karşılığı inşaat sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "İnşaat faaliyetinden komşu parsellere verilen zararlarda tazminat talepleri",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Kozyatağı merkezli şirketler arası ticari sözleşmelerin hazırlanması ve incelenmesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Fikirtepe'deki kentsel dönüşüm sürecinde arsa payı karşılığı inşaat sözleşmesinin resmi şekilde (noter huzurunda) düzenlenmesi zorunludur; bu şekil şartına uyulmadan yapılan sözleşmeler geçersiz kabul edilir ve uygulamada sıkça uyuşmazlık konusu olur.",
      "Bu davalar Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Kat karşılığı sözleşmesi hangi şekilde yapılmalı?", answer: "Kat karşılığı sözleşmesi, tapu sicil müdürlüğünde veya noterde düzenleme şeklinde yapılmalıdır; adi yazılı sözleşme geçersizdir. Arsa payı karşılığı inşaat sözleşmesi resmi şekle tabi olduğundan şekil şartına uyulmayan sözleşmeler geçersiz sayılır. Fikirtepe gibi dönüşüm alanlarında bu şekil eksikliği uyuşmazlıklarda sık gündeme gelir." },
      { question: "Müteahhit işi eksik/hatalı bırakırsa ne yapılabilir?", answer: "Müteahhit işi eksik veya hatalı bırakırsa sözleşmeden dönme, tazminat veya ifa davası gibi hukuki yollara başvurulabilir. Önce eksiklikler tespit edilir ve müteahhide ihtarname çekilir; sözleşme, ruhsat ve teslim belgeleri incelenir. Ayıplı ifa halinde seçilecek yol sözleşmeye ve eksikliğin niteliğine göre belirlenir." },
      { question: "İnşaat kazısı komşu binada hasara yol açarsa ne yapılabilir?", answer: "Komşu binada hasar oluşursa önce tespit yaptırılmalı, ardından sorumlulara karşı tazminat davası açılabilir. Hasarın fotoğraflanması, bilirkişi incelemesi ve inşaat faaliyetinin tarihlerinin belgelenmesi delil bakımından önem taşır. Sorumluluk, inşaatı yapan müteahhit veya iş sahibi gibi taraflara yöneltilebilir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Ticari alacak davaları, niteliğine göre asliye ticaret mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür. Kadıköy'ün ayrı bir adliyesi bulunmamaktadır. Bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması dava şartıdır; fatura, sözleşme ve cari hesap kayıtları hazırlanmalıdır." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, dava öncesi arabuluculuk yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Şartın aranıp aranmadığı uyuşmazlığın türüne göre belirlenir; arabuluculuğa başvurulmadan açılan dava bu hallerde usulden reddedilebilir. Başvuru yolu, alacağın niteliği incelenerek belirlenir." },
    ],
    howToTitle: "Kadıköy'de Alacak Davası Süreci Nasıl İşler?",
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

export const kadikoyServices: PseoService[] = [...kadikoyBaseServices, kadikoyMiras];
