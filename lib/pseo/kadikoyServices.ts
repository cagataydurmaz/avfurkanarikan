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
      "Bağdat Caddesi'ndeki işletmelerden Kozyatağı plazalarındaki şirketlere ve bireysel alacaklılara kadar Kadıköy'de icra takibi başlatma, ödeme emrine itiraz, haciz ve satış aşamalarında temsil sağlanır; takipler Kartal'daki İstanbul Anadolu Adliyesi icra dairelerinde yürür.",
    metaTitle: "Kadıköy İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Kadıköy'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "MEF Üniversitesi Hukuk Fakültesi'ni 2019'da tamamlayan Av. Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla bağlıdır. Kadıköy'deki alacaklılar adına takip başlatır; borçlu konumundaki kişi ve şirketler adına ise ödeme emrine itiraz, haciz işlemlerine şikâyet ve borca ilişkin davalarda Beşiktaş/Sinanpaşa'daki bürodan temsil üstlenir.",
    highlightCards: [
      { title: "İlamsız ve İlamlı Takip", description: "Fatura, senet, sözleşme veya mahkeme kararına dayanan takip talebi." },
      { title: "7 Günlük İtiraz Süresi", description: "İİK m.62'ye göre ödeme emrine süresinde itiraz ve itirazın sonuçları." },
      { title: "Kozyatağı Ticari Alacakları", description: "Plazalarda faaliyet gösteren şirketlerin cari hesap ve fatura alacakları." },
      { title: "Haciz ve Satış", description: "Banka hesabı, araç ve taşınmaz üzerinde haciz ile satış işlemleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fatura, senet ve sözleşme alacakları için ilamsız takip başlatılması",
      "Mahkeme kararına dayanan ilamlı takiplerin yürütülmesi",
      "Ödeme emrine 7 gün içinde itiraz dilekçesinin hazırlanması (İİK m.62)",
      "İtiraz üzerine duran takipte itirazın iptali (İİK m.67) veya kaldırılması (İİK m.68) yollarının işletilmesi",
      "Kozyatağı'ndaki şirketlerin cari hesap ve fatura alacaklarında haciz ile tahsil işlemleri",
      "Moda, Caddebostan ve Suadiye'deki konut kiralarından doğan kira alacağı takipleri",
    ],
    localParagraphs: [
      "Kadıköy'de icra dosyalarının kaynağı semtten semte değişir: Kozyatağı'ndaki plazalarda çalışan şirketler arasında fatura ve cari hesap alacakları, Bağdat Caddesi ile Bahariye çevresindeki işletmelerde kira ve senet alacakları, Moda ve Caddebostan gibi konut ağırlıklı semtlerde ise kira ve aidat borçları takibe konu olabilir.",
      "Takiplere yönelik itiraz ve şikâyetler Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki icra mahkemelerinde incelenir. Kadıköy İskelesi'nden başlayan M4 metrosu Kartal yönüne uzandığından, adliyeye ulaşımda bu hat kullanılabilir.",
    ],
    faqs: [
      { question: "Kadıköy'de oturan borçluya karşı takip hangi icra dairesinde açılır?", answer: "Genel kural olarak takip, borçlunun yerleşim yerindeki icra dairesinde açılır; Kadıköy'de oturan borçlu için bu, Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki icra daireleridir. Sözleşmenin ifa yeri veya yetki sözleşmesi gibi sebeplerle başka bir yer de yetkili olabilir; yetkisiz dairede açılan takibe borçlu itiraz edebilir." },
      { question: "Ödeme emri Moda'daki adresime geldi; kaç gün içinde itiraz etmeliyim?", answer: "İtiraz için tebliğden itibaren 7 gün süre vardır (İİK m.62). İtiraz, takibin yürütüldüğü icra dairesine dilekçeyle veya sözlü olarak yapılabilir ve takibi durdurur. Borcun tamamına mı, bir kısmına mı ya da imzaya mı itiraz edildiği açıkça belirtilmelidir; süre kaçarsa takip kesinleşir." },
      { question: "Borçlu itiraz ettiyse Kozyatağı'ndaki şirketim alacağı nasıl tahsil eder?", answer: "İki yol vardır: itirazın kaldırılması ve itirazın iptali. Alacak imzası ikrar edilmiş bir belgeye dayanıyorsa, itirazın tebliğinden itibaren 6 ay içinde icra mahkemesinden itirazın kaldırılması istenebilir (İİK m.68). Diğer hallerde genel mahkemede 1 yıl içinde itirazın iptali davası açılır (İİK m.67); ticari alacaklarda önce arabulucuya gidilir." },
      { question: "Kadıköy'deki evimde haciz hangi eşyalara uygulanabilir?", answer: "Haciz, borçlunun evinde bulunan ve kanunen haczi mümkün olan eşyalara uygulanabilir; borçlu ve ailesi için lüzumlu ev eşyası ise haczedilemez. Haciz sırasında eşyanın kime ait olduğu tutanağa yazdırılmalı, üçüncü kişiye ait mallar için istihkak iddiası ileri sürülmelidir. Usulsüz işlemlere karşı icra mahkemesine şikâyet yolu açıktır." },
      { question: "Kira alacağı için Kadıköy'de takip başlatırken tahliye de istenebilir mi?", answer: "Evet, kiraya veren ödenmeyen kira için ödeme emriyle birlikte tahliye talepli takip başlatabilir. Kiracı ödeme emrinde verilen sürede ödeme yapmaz ve itirazı da kaldırılırsa icra mahkemesinden tahliye istenir. Kira sözleşmesinin yazılı olup olmaması, izlenecek takip yolunu ve icra mahkemesindeki ispat imkânını etkiler." },
    ],
    howToTitle: "Kadıköy'de Alacak İçin İcra Takibi Nasıl Başlatılır?",
    howToSteps: [
      { name: "Dayanak Belgenin Seçimi", text: "Fatura, senet, sözleşme veya ilamdan hangisine dayanılacağı belirlenir." },
      { name: "Yetkili Daire", text: "Borçlunun yerleşim yeri veya ifa yerine göre takibin açılacağı icra dairesi seçilir." },
      { name: "Ödeme Emri ve İtiraz", text: "Borçluya tebliğ edilen ödeme emrine karşı 7 günlük itiraz süresi izlenir." },
      { name: "Haciz ve Tahsil", text: "Takip kesinleşince mal varlığı sorgulanır, haciz ve satış talepleri yapılır." },
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
      "Fikirtepe'deki dönüşüm işlemleri, Kadıköy Belediyesi'nin imar ve ruhsat kararları ile idari para cezalarına karşı iptal ve tam yargı davaları takip edilir; uyuşmazlıklar İstanbul idare mahkemelerinde görülür.",
    metaTitle: "Kadıköy İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Kadıköy'de idari işlemlerin iptali, kentsel dönüşüm sürecine ilişkin idari uyuşmazlıklar ve tazminat davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olan Av. Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Fikirtepe'deki hak sahipleri, Moda ve Caferağa'daki işletmeciler ile Kadıköy'de idari bir kararla karşılaşan kişiler adına, işlemin tebliğinden kararın kesinleşmesine kadar Beşiktaş/Sinanpaşa'daki bürodan dava takibi yapar.",
    highlightCards: [
      { title: "Fikirtepe Dönüşüm Dosyaları", description: "Riskli alan uygulamaları ve proje onaylarına karşı idari yargı yolu." },
      { title: "İmar ve Ruhsat", description: "Yapı ruhsatı reddi, imar planı değişikliği ve yıkım kararlarına itiraz." },
      { title: "İşyeri Yaptırımları", description: "Ruhsat iptali, mühürleme ve idari para cezalarına karşı dava." },
      { title: "Tam Yargı", description: "İdarenin eylem veya işleminden doğan zararın tazmini istemi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fikirtepe'deki riskli alan ve riskli yapı uygulamalarına karşı iptal davası",
      "Uygulama projesi ve imar planı değişikliklerine yönelik idari dava süreçleri",
      "Yapı ruhsatı başvurusunun reddine veya yıkım kararına karşı dava",
      "Moda, Caferağa ve Bahariye çevresindeki işletmelere yönelik ruhsat ve mühürleme işlemlerine itiraz",
      "Belediye ve diğer kurumların kestiği idari para cezalarına karşı başvuru",
      "İdari eylem veya işlemden zarar görenler adına tam yargı davası",
    ],
    localParagraphs: [
      "Kadıköy'deki idari uyuşmazlıklarda Fikirtepe ayrı bir yer tutar: 2013'te riskli alan ilan edilen bölgede riskli yapı tespitleri, uygulama projeleri ve hak sahipliği işlemleri idari davalara konu olabilmektedir. Bunun yanında Moda, Caferağa ve Bahariye çevresindeki yoğun ticari hayat, işyeri ruhsatı ve idari yaptırım dosyalarını da beraberinde getirir.",
      "Bu davalar İstanbul idare mahkemelerinde açılır ve süre, kural olarak işlemin yazılı bildiriminden itibaren 60 gündür (İYUK m.7). İmar planı gibi ilan edilen işlemlerde sürenin başlangıcı ilan ve askı tarihlerine göre belirlendiğinden, bu tarihlerin kaydı önem taşır.",
    ],
    faqs: [
      { question: "Fikirtepe'deki riskli alan işlemlerine karşı nerede dava açılır?", answer: "Fikirtepe'deki riskli alan ve riskli yapı işlemlerine karşı dava, İstanbul idare mahkemelerinde açılır. İptal davası için genel süre, işlemin yazılı bildiriminden itibaren 60 gündür (İYUK m.7). Dilekçeye tebliğ belgesi, tapu kaydı ve itiraz edilen işlemin örneği eklenmeli; özel mevzuattaki itiraz aşamaları da ayrıca kontrol edilmelidir." },
      { question: "Kadıköy Belediyesi ruhsat başvurumu reddetti; ne yapabilirim?", answer: "Ret kararına karşı tebliğden itibaren 60 gün içinde idare mahkemesinde iptal davası açabilirsiniz. Davadan önce ret gerekçesi, imar durumu belgesi ve proje evrakı incelenir; gerekçe hatalı imar bilgisine dayanıyorsa bu, dilekçenin merkezine konur. Süre içinde idareye başvurup işlemin geri alınmasını istemek de mümkündür." },
      { question: "Moda'daki işyerime idari para cezası kesildi; itiraz yolu nedir?", answer: "İtiraz yolu, cezanın dayandığı kanuna göre belirlenir. Kabahatler Kanunu kapsamındaki cezalara karşı kural olarak sulh ceza hakimliğine başvurulurken, bazı özel kanunlardaki cezalar idare mahkemesinde dava konusu edilir. Bu nedenle ceza tutanağında gösterilen başvuru mercii ve süresi, ilk kontrol edilmesi gereken bilgidir." },
      { question: "Kadıköy'de idarenin bir işleminden zarar gördüm; tazminat isteyebilir miyim?", answer: "Evet, idarenin işlemi veya eylemi nedeniyle zarar doğduysa tam yargı davasıyla tazminat istenebilir. İşlemden kaynaklanan zararda dava, iptal davasıyla birlikte veya iptal kararından sonra açılabilir; eylemden doğan zararda ise önce idareye başvuru gerekir. Zararın miktarı ve idari faaliyetle bağlantısı belgelerle gösterilmelidir." },
      { question: "Kadıköy'deki bir imar planı değişikliğine komşu malik dava açabilir mi?", answer: "Evet, plan değişikliğinden menfaati etkilenen komşu malikler de iptal davası açabilir; idari yargıda iptal davası için menfaat ihlali yeterlidir. Süre, planın ilan ve askı tarihleri dikkate alınarak hesaplanır. Bağdat Caddesi ve Fenerbahçe gibi semtlerde yoğunluk veya kat artışı getiren değişiklikler bu tür davalara konu olabilir." },
    ],
    howToTitle: "Kadıköy'de İdari Bir Karara Karşı Hangi Adımlar İzlenir?",
    howToSteps: [
      { name: "Tebliğ ve İlan Kontrolü", text: "Kararın bildirildiği ya da ilan edildiği tarih belgelerden tespit edilir." },
      { name: "Başvuru Yolunun Seçimi", text: "İdare mahkemesi, sulh ceza hakimliği veya idareye başvuru seçeneklerinden uygun olanı belirlenir." },
      { name: "Dilekçe ve Deliller", text: "Hukuka aykırılık gerekçeleri, tapu ve imar belgeleriyle birlikte dilekçeye işlenir." },
      { name: "Yargılama Takibi", text: "İstanbul idare mahkemesindeki keşif, bilirkişi ve karar aşamaları izlenir." },
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
      "Fikirtepe'deki kat karşılığı inşaat sözleşmeleri, Kozyatağı'ndaki şirketlerin ticari sözleşmeleri ve Kadıköy'deki alacak ile tazminat talepleri için danışmanlık ve dava takibi yapılır; davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Kadıköy Borçlar Hukuku Avukatı | Alacak Davası",
    metaDescription:
      "Kadıköy'de kat karşılığı inşaat sözleşmeleri, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Av. Furkan Arıkan 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş, 72621 sicil numarasıyla İstanbul Barosu'na kaydolmuştur. Kadıköy'de arsa sahipleri, müteahhitlerle sözleşme ilişkisi kuran malikler ve ticari alacağı bulunan şirketler adına sözleşme incelemesi, ihtarname, arabuluculuk ve dava aşamalarında Beşiktaş/Sinanpaşa'daki bürodan çalışır.",
    highlightCards: [
      { title: "Kat Karşılığı İnşaat", description: "Fikirtepe'de arsa sahibi ile yüklenici arasındaki teslim ve eksik iş anlaşmazlıkları." },
      { title: "Alacak Talepleri", description: "Ödenmeyen bedel ve faiz için dava ya da takip yolunun seçimi." },
      { title: "Komşu Yapıya Zarar", description: "Kazı ve inşaat sırasında komşu binada oluşan hasarın giderilmesi." },
      { title: "Şirket Sözleşmeleri", description: "Kozyatağı'ndaki şirketlerin hizmet ve tedarik sözleşmelerinin incelenmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fikirtepe'de arsa payı karşılığı inşaat sözleşmelerinin hazırlık ve şekil yönünden incelenmesi",
      "Yüklenicinin geç teslimi veya eksik işi nedeniyle ifa, dönme ve tazminat davaları",
      "Komşu parseldeki kazı ve inşaat faaliyetinin yol açtığı hasar için tazminat talebi",
      "Kozyatağı'ndaki şirketler arasında hizmet, tedarik ve danışmanlık sözleşmelerinin müzakeresi",
      "Ödenmeyen bedeller için alacak davası, icra takibi ve itirazın iptali süreçleri",
      "Sebepsiz zenginleşme ve ayıplı ifadan doğan iade talepleri",
    ],
    localParagraphs: [
      "Fikirtepe'deki dönüşüm, Kadıköy'deki borçlar hukuku dosyalarına ayrı bir ağırlık kazandırır. Arsa payı karşılığı inşaat sözleşmesinin resmi şekilde, yani noterde düzenleme biçiminde yapılması gerekir; bu şekle uyulmadan imzalanan metinler geçersiz sayılabileceğinden, imza öncesi inceleme özellikle önemlidir.",
      "Kozyatağı'ndaki iş merkezlerinde faaliyet gösteren şirketlerin fatura ve hizmet bedeli uyuşmazlıklarında, ticari alacak davaları için dava şartı arabuluculuk aşamasının tamamlanması gerekir. Arabuluculukta sonuç çıkmazsa dava, Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    ],
    faqs: [
      { question: "Fikirtepe'de müteahhitle yapılacak sözleşme hangi şekilde imzalanmalı?", answer: "Arsa payı karşılığı inşaat sözleşmesi, taşınmaz devri borcu içerdiği için resmi şekilde, yani noterde düzenleme şeklinde yapılmalıdır; adi yazılı metinler geçersiz sayılabilir. İmzadan önce teslim süresi, gecikme cezası, teminat ve bağımsız bölüm paylaşımı ayrıntılı biçimde yazılmalıdır; bu kayıtlar ileride doğacak uyuşmazlıklarda belirleyici olur." },
      { question: "Yüklenici daireleri geç teslim ederse Kadıköy'deki arsa sahibi ne isteyebilir?", answer: "Arsa sahibi, sözleşmede kararlaştırılmışsa gecikme cezasını ve kira kaybı gibi zararlarını talep edebilir. Yükleniciye ihtarla uygun süre verilir; teslim yine gerçekleşmezse sözleşmeden dönme seçeneği de değerlendirilir. Talepler, arabuluculuk şartının bulunup bulunmadığı incelendikten sonra Kartal'daki İstanbul Anadolu Adliyesi'nde dava konusu yapılır." },
      { question: "Yandaki inşaat Göztepe'deki binamda çatlak oluşturdu; ne yapmalıyım?", answer: "Önce hasarın mahkeme aracılığıyla delil tespitiyle kayda geçirilmesi gerekir; bu yolla çatlakların oluşma zamanı ve nedeni bilirkişi raporuyla belgelenir. Ardından inşaatı yapan yüklenici ve gerektiğinde parsel maliki aleyhine tazminat davası açılabilir. Fotoğraflar, site yönetimiyle yazışmalar ve inşaatın başlangıç tarihi dosyada saklanmalıdır." },
      { question: "Kozyatağı'ndaki şirketimin ticari alacağı için doğrudan dava açabilir miyim?", answer: "Hayır, ticari nitelikteki alacak davalarında dava açmadan önce arabulucuya başvurmak dava şartıdır. Arabuluculuk sonunda anlaşma sağlanamazsa son tutanakla birlikte asliye ticaret mahkemesinde dava açılır. Alacak icra takibine konu edilmiş ve borçlu itiraz etmişse, itirazın iptali davası da aynı şarta tabidir." },
      { question: "Kadıköy'de alacak davası için zamanaşımı süresi ne kadar?", answer: "Genel zamanaşımı süresi 10 yıldır (TBK m.146); ancak kira bedeli, ücret ve benzeri dönemsel edimlerde bu süre 5 yıla iner (TBK m.147). Süre kural olarak alacağın muaccel olduğu tarihte başlar. İhtarname göndermek zamanaşımını kesmez; süreyi kesmek için dava açılması veya icra takibi başlatılması gibi işlemler gerekir." },
    ],
    howToTitle: "Kadıköy'de Sözleşme Uyuşmazlığı Nasıl Yönetilir?",
    howToSteps: [
      { name: "Sözleşmenin Okunması", text: "Şekil şartı, teslim tarihi, cezai şart ve fesih hükümleri değerlendirilir." },
      { name: "Delil Güvencesi", text: "Gerekirse delil tespiti yaptırılır, yazışma ve faturalar düzenli hale getirilir." },
      { name: "İhtar ve Arabuluculuk", text: "Karşı tarafa ihtarname gönderilir, ticari uyuşmazlıkta arabulucuya başvurulur." },
      { name: "Dava veya Takip", text: "Kartal'daki İstanbul Anadolu Adliyesi'nde dava açılır ya da icra yoluna gidilir." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];

export const kadikoyServices: PseoService[] = [...kadikoyBaseServices, kadikoyMiras];
