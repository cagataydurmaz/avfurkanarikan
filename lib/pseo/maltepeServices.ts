import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const maltepeServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "maltepe-avukat",
    name: "Maltepe Avukat",
    heroTitle: "Maltepe Avukat",
    heroSubtitle:
      "1992'de Kartal'dan ayrılarak müstakil ilçe haline gelen ve Marmara Denizi'ne yaklaşık 7 kilometre kıyısı bulunan Maltepe'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında avukat Furkan Arıkan danışmanlık ve dava takibi hizmeti sunmaktadır; İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olan Arıkan'ın dosyaları, ilçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Maltepe Avukat",
    metaDescription:
      "Maltepe'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olduktan sonra İstanbul Barosu'na 72621 sicil numarasıyla kaydolan bir avukattır. 1992'de 3806 sayılı Kanun'la Kartal'dan ayrılarak kurulan, 53 km² yüzölçümü ve 2025 itibarıyla yaklaşık 525 bin nüfusuyla İstanbul'un Anadolu Yakası'ndaki köklü ilçelerinden biri olan Maltepe'de ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında müvekkillerine danışmanlık ve temsil hizmeti sunar; ilçenin kendi adliyesi bulunmadığından davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür, randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma aşamalarında müdafilik ve mağdur vekilliği." },
      { title: "Aile Hukuku", description: "Boşanma, velayet, nafaka ve mal paylaşımı uyuşmazlıklarında temsil." },
      { title: "Gayrimenkul Hukuku", description: "Gülsuyu-Gülensu ve Başıbüyük'teki kentsel dönüşüm dahil tapu ve kat karşılığı uyuşmazlıkları." },
      { title: "İş Hukuku", description: "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarında danışmanlık." },
      { title: "İcra Hukuku", description: "Alacak takibi, itiraz ve haciz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "Kentsel dönüşüm ve idari işlemlerin iptaline yönelik dava takibi." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı, ceza ve uzlaşma süreçlerinde danışmanlık." },
      { title: "Borçlar Hukuku", description: "Sözleşme, alacak ve inşaat sözleşmesi kaynaklı uyuşmazlıklar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması ve mağdur vekilliği",
      "Boşanma, velayet ve nafaka taleplerinde aile hukuku danışmanlığı",
      "Gülsuyu-Gülensu ve Başıbüyük'teki kentsel dönüşüm alanı dahil kat karşılığı inşaat sözleşmesi ve tapu uyuşmazlıkları",
      "İşe iade ve işçilik alacaklarına ilişkin iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlerin iptaline yönelik dava süreçleri",
      "Vergi tarhiyatı ve cezalarına karşı itiraz ve dava takibi",
      "Sözleşme ve alacak kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "Bizans döneminde Bryas adıyla anılan ve İmparator Theophilos'un 816 yılında yaptırdığı sarayın kalıntılarının bu bölgede bulunduğu belirtilen Maltepe, 3 Haziran 1992 tarihli Resmî Gazete'de yayımlanan 3806 sayılı Kanun'la Kartal ilçesinden ayrılarak müstakil ilçe haline gelmiştir; günümüzde 18 mahalleden oluşan ilçenin nüfusu 2025 itibarıyla 525 bini aşmış, yüzölçümü ise 53 km² olarak kayıtlara geçmiştir.",
      "Maltepe'nin kendi adliyesi bulunmadığından dava ve icra dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür; vergisel işlemler ise adını ilçenin Küçükyalı Mahallesi'nden alan, ancak fiziken Kartal'daki bir vergi daireleri kompleksinde hizmet veren Küçükyalı Vergi Dairesi Müdürlüğü üzerinden yürütülür.",
    ],
    faqs: [
      { question: "Maltepe'deki davalara hangi adliye bakıyor?", answer: "Maltepe'nin kendi adliyesi bulunmamaktadır; ilçedeki tüm dava ve icra dosyaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Maltepe'de mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Maltepe'deki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Maltepe'de hangi vergi dairesi yetkilidir?", answer: "İlçedeki mükelleflerin büyük bölümü, Küçükyalı Vergi Dairesi Müdürlüğü üzerinden işlem yapar." },
      { question: "Gülsuyu-Gülensu'daki kentsel dönüşüm sürecinde hukuki destek alınabilir mi?", answer: "Evet, kat karşılığı inşaat sözleşmesinin incelenmesi ve hak sahipliği uyuşmazlıklarında danışmanlık sağlanır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır." },
    ],
    howToTitle: "Maltepe'de Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Maltepe Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "maltepe-bosanma-avukati",
    name: "Maltepe Boşanma Avukatı",
    heroTitle: "Maltepe Boşanma Avukatı",
    heroSubtitle:
      "Maltepe'de anlaşmalı veya çekişmeli olarak açılan boşanma davalarında velayet, nafaka ve mal rejimi tasfiyesi taleplerine ilişkin temsil sağlanır; sahil şeridindeki site ve rezidans nitelikli konutların da dahil olduğu mal paylaşımı süreçlerinde aile mahkemesi davaları, ilçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Maltepe Boşanma Avukatı",
    metaDescription:
      "Maltepe'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Aile hukuku kapsamında Maltepe'deki müvekkillerine boşanma, velayet ve nafaka süreçlerinde temsil sağlayan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Mal Rejimi Tasfiyesi", description: "İdealtepe ve Altıntepe gibi sahil mahallelerindeki konutlar dahil mal varlığının paylaşımı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Sahil şeridindeki site ve rezidans konutlarını da kapsayan mal rejimi tasfiyesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Marmara Denizi'ne yaklaşık 7 kilometre kıyısı bulunan Maltepe'de, özellikle İdealtepe ve Altıntepe gibi sahil şeridine yakın mahallelerdeki site ve rezidans nitelikli konutlar, boşanma sürecindeki mal rejimi tasfiyelerinde değerlemeye konu olan taşınmazlar arasında öne çıkmaktadır.",
      "Boşanma, velayet ve nafaka davalarına, Maltepe'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki aile mahkemesinde bakılır; anlaşmalı süreçte protokolün eksiksizliği, çekişmeli süreçte ise delillerin sağlam olması sonucu belirler.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Maltepe'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki aile mahkemesine başvurulur." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir." },
      { question: "Sahil şeridindeki bir sitedeki konut mal paylaşımını nasıl etkiler?", answer: "Taşınmazın güncel rayiç değeri, tapu kaydı ve varsa kira getirisi bilirkişi incelemesiyle değerlemeye esas alınır." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir." },
    ],
    howToTitle: "Maltepe'de Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "İhtiyaç Analizi", text: "Velayet, nafaka ve mal rejimi talepleri değerlendirilir." },
      { name: "Dilekçe Hazırlığı", text: "Duruma uygun dava dilekçesi ya da protokol hazırlanır." },
      { name: "Dava Açılışı", text: "Yetkili aile mahkemesine başvuru yapılır." },
      { name: "Sonuç", text: "Duruşma sürecinin ardından karar açıklanır." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "ziynet-esyasi-davasi"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "maltepe-ceza-avukati",
    name: "Maltepe Ceza Avukatı",
    heroTitle: "Maltepe Ceza Avukatı",
    heroSubtitle:
      "Soruşturma aşamasındaki gözaltı ve ifade süreçlerinden kovuşturma aşamasındaki duruşmalara kadar müdafilik hizmeti sunulur; Maltepe'nin kendi adliyesi bulunmadığından ceza davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Maltepe Ceza Avukatı",
    metaDescription:
      "Maltepe'de soruşturma, kovuşturma, tutukluluğa itiraz ve ceza yargılamasının tüm aşamalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "2019 MEF Üniversitesi Hukuk Fakültesi mezunu olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan Furkan Arıkan, Maltepe'deki şüpheli ve sanıklara soruşturma ve kovuşturma aşamalarında müdafilik hizmeti vermektedir.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Yoğun Ulaşım Noktalarına Bağlı Olaylar", description: "M4, Marmaray istasyonları ve sahil hattı çevresindeki asayiş olaylarında savunma." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "M4 ve Marmaray istasyonları ile sahil hattı çevresindeki asayiş olaylarında savunma",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "M4 metro hattının beş istasyonu, Marmaray'ın dört durağı ve Adalar'a deniz otobüsü seferlerinin kalktığı iskelesiyle Anadolu Yakası'nın işlek ulaşım noktalarından birini barındıran Maltepe'de, istasyon çevreleri ve sahil hattı gibi yoğun nüfus hareketliliğine sahip alanlardaki olaylara ilişkin ceza yargılamaları sık karşılaşılan bir alandır.",
      "Maltepe'de başlatılan ceza soruşturmaları ve bunlara bağlı kovuşturmalar, ilçenin kendi adliyesi bulunmaması nedeniyle Kartal'daki İstanbul Anadolu Adliyesi'nde yürütülür; şüphelinin müdafi ile görüşme hakkı gözaltının başladığı andan itibaren doğar.",
    ],
    faqs: [
      { question: "Maltepe'de bir ceza davası hangi adliyede görülür?", answer: "İlçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir ancak müdafi bulundurmak önerilir." },
      { question: "Kalabalık bir istasyon veya sahil hattında yaşanan bir olayda ne yapılmalı?", answer: "Delillerin toplanması ve varsa şikayet dilekçesinin hazırlanması için vakit kaybetmeden hukuki destek alınması önerilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, sulh ceza hakimliğine itiraz edilebilir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Yargılamaya kaldığı yerden devam edilir." },
    ],
    howToTitle: "Maltepe'de Ceza Yargılaması Nasıl İlerler?",
    howToSteps: [
      { name: "Olay Bildirimi", text: "Şikayet, ihbar veya resen harekete geçilir." },
      { name: "Soruşturma Aşaması", text: "Deliller toplanır, ifadeler alınır." },
      { name: "Dava Açılması", text: "İddianamenin kabulüyle kovuşturma başlar." },
      { name: "Temyiz/İstinaf", text: "Karara karşı üst yargı yoluna gidilebilir." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz", "kosullu-saliverilme-oranlari"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "maltepe-gayrimenkul-avukati",
    name: "Maltepe Gayrimenkul Avukatı",
    heroTitle: "Maltepe Gayrimenkul Avukatı",
    heroSubtitle:
      "Gülsuyu-Gülensu ve Başıbüyük'teki kentsel dönüşüm sürecine ilişkin kat karşılığı inşaat sözleşmeleri ve hak sahipliği uyuşmazlıkları ile sahil şeridindeki taşınmaz alım-satım işlemlerinde hukuki destek sağlanır; davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Maltepe Gayrimenkul Avukatı",
    metaDescription:
      "Maltepe'de Gülsuyu-Gülensu kentsel dönüşümü, tapu iptali ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı ve MEF Üniversitesi Hukuk Fakültesi'nin 2019 mezunu bir avukat olarak, Maltepe'deki kentsel dönüşüm sürecindeki sözleşme ve hak sahipliği uyuşmazlıkları ile tapu davalarında müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Kentsel Dönüşüm Uyuşmazlıkları", description: "Gülsuyu-Gülensu ve Başıbüyük'teki dönüşüm sürecinde kat karşılığı sözleşme ve hak sahipliği uyuşmazlıkları." },
      { title: "Sahil Şeridi Taşınmazları", description: "İdealtepe, Altıntepe ve Küçükyalı'daki konut alım-satım işlemleri." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Ortaklığın Giderilmesi", description: "Miras veya paylı mülkiyetten doğan taşınmazların satış yoluyla paylaştırılması." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gülsuyu-Gülensu ve Başıbüyük'teki kentsel dönüşüm sürecinde kat karşılığı inşaat sözleşmelerinin hazırlanması ve incelenmesi",
      "Hak sahipliği tespiti ve müteahhide karşı açılan uyuşmazlık davaları",
      "İdealtepe, Altıntepe ve Küçükyalı'daki konut alım-satımında tapu ve imar durumu incelemesi",
      "Tapu iptali ve tescil davalarının açılması",
      "Ortaklığın giderilmesi (izale-i şuyu) davaları",
      "Kira bedeli tespiti ve uyarlama davaları",
    ],
    localParagraphs: [
      "İstanbul'un ilk gecekondu yerleşimlerinden biri olan ve 1950'lerden itibaren E-5 çevresindeki sanayileşmeyle birlikte kırsaldan gelen göçle büyüyen Gülsuyu ve Gülensu mahallelerinde, 2017 yılında başlayan kentsel dönüşüm kapsamında 14.310 yapıdan 13.500'ü dönüşüm alanına dahil edilmiştir; komşu Başıbüyük Mahallesi'ndeki dönüşüm ise Parsel 49 projesiyle 2021 yılında tamamlanmıştır.",
      "Bu tür kentsel dönüşüm sözleşmeleri ile tapu uyuşmazlıkları, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Maltepe'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    ],
    faqs: [
      { question: "Gülsuyu-Gülensu'daki kentsel dönüşüm sürecinde hak sahipliği nasıl korunur?", answer: "Kat karşılığı sözleşmesi ve hak sahipliği belgeleri incelenerek, müteahhitle olan uyuşmazlıklarda hukuki yollara başvurulabilir." },
      { question: "Kat karşılığı inşaat sözleşmesi hangi şekilde yapılmalı?", answer: "Kanun gereği arsa payı karşılığı inşaat sözleşmesi resmi şekil şartına tabidir; noter düzenlemesi olmadan yapılan sözleşme geçersizdir." },
      { question: "Maltepe'de gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi'nde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir." },
      { question: "Başıbüyük'teki dönüşüm projesi tamamlandı mı?", answer: "Parsel 49 olarak bilinen ilk etap 2021'de tamamlanmıştır; sonraki etaplara ilişkin hak sahipliği uyuşmazlıkları gündeme gelebilmektedir." },
    ],
    howToTitle: "Maltepe'de Tapu ve Kentsel Dönüşüm Uyuşmazlığı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Kayıt İncelemesi", text: "Tapu, imar durumu ve varsa kat karşılığı sözleşmesi incelenir." },
      { name: "Uyuşmazlığın Netleştirilmesi", text: "İddia ve dayanak deliller belirlenir." },
      { name: "Dava Açılması", text: "Yetkili mahkemede dava süreci başlatılır." },
      { name: "Sonuçlanma", text: "Karar veya bilirkişi raporu doğrultusunda süreç tamamlanır." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "maltepe-icra-avukati",
    name: "Maltepe İcra Avukatı",
    heroTitle: "Maltepe İcra Avukatı",
    heroSubtitle:
      "Bağdat Caddesi'nin Küçükyalı'da sona eren bölümündeki işletmeler ile bireysel alacaklılara yönelik icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır; Maltepe'nin kendi adliyesi bulunmadığından icra daireleri Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir.",
    metaTitle: "Maltepe İcra Avukatı",
    metaDescription:
      "Maltepe'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Maltepe'deki alacaklı ve borçlu taraflara icra ve iflas hukuku kapsamında danışmanlık veren Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "Esnaf ve Ticari Alacaklar", description: "Bağdat Caddesi'nin Maltepe ucundaki işletmeler arası alacak takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "Bağdat Caddesi üzerindeki işletmeler ile ilçe genelindeki esnaf arasındaki ticari alacakların takibi",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "Bağdat Caddesi'nin doğuya uzanan son bölümünün Küçükyalı Mahallesi sınırları içinde sona erdiği Maltepe'de, cadde üzerindeki işletmeler ile ilçe genelindeki esnaf arasındaki fatura ve sözleşme kaynaklı alacakların icra yoluyla tahsili sık başvurulan bir yoldur.",
      "İcra takiplerine ilişkin itiraz ve şikayetler, Maltepe'nin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki icra mahkemelerinde görülür; borçlunun Maltepe'de yerleşik olduğu takiplerde yetkili icra dairesi kural olarak borçlunun ikametgahı esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "Sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlanabilir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Tebliğden itibaren 7 gündür." },
      { question: "Bağdat Caddesi üzerindeki bir işletmenin fatura alacağı için icra takibi nasıl başlatılır?", answer: "Fatura ve varsa sözleşme belgeleri toplanarak yetkili icra dairesinde takip dosyası açılır." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür." },
    ],
    howToTitle: "Maltepe'de İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "maltepe-idare-avukati",
    name: "Maltepe İdare Avukatı",
    heroTitle: "Maltepe İdare Avukatı",
    heroSubtitle:
      "Gülsuyu-Gülensu ve Başıbüyük'teki kentsel dönüşüm sürecindeki riskli alan/yapı tespiti ve uygulama işlemleri ile belediye imar kararlarına karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Maltepe İdare Avukatı",
    metaDescription:
      "Maltepe'de idari işlemlerin iptali, kentsel dönüşüm sürecine ilişkin idari uyuşmazlıklar ve tazminat davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Maltepe'deki müvekkillerine idari işlemlerin iptali ve tam yargı davalarında danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup MEF Üniversitesi Hukuk Fakültesi'ni 2019'da tamamlamıştır.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Kentsel Dönüşüm İşlemleri", description: "Gülsuyu-Gülensu ve Başıbüyük'teki riskli alan/yapı tespitine ve uygulama işlemlerine itiraz." },
      { title: "Belediye İmar Uygulamaları", description: "Ruhsat ve imar planı kararlarına karşı dava süreçleri." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gülsuyu-Gülensu ve Başıbüyük'teki kentsel dönüşüm alanında riskli yapı ve uygulama işlemlerine karşı idari dava süreçleri",
      "Belediye imar planı kararlarına karşı iptal davası açılması",
      "Ruhsat başvurusu ret işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "2017 yılında başlayan Gülsuyu-Gülensu kentsel dönüşümü ile komşu Başıbüyük Mahallesi'ndeki Parsel 49 projesi kapsamında yürütülen riskli alan tespiti ve uygulama imar planı onayı gibi idari işlemler, Maltepe'deki idari dava konularının başında gelmektedir.",
      "Gülsuyu-Gülensu ve Başıbüyük'teki riskli alan/yapı tespiti ile uygulama işlemlerine karşı açılacak davalara İstanbul idare mahkemelerinde bakılır; işlemin tebliğ veya ilan tarihinden itibaren altmış günlük yasal süre geçirildiğinde idari işlem kesinleşerek dava hakkı ortadan kalkar.",
    ],
    faqs: [
      { question: "Riskli alan/yapı tespitine karşı hangi sürede dava açılmalı?", answer: "Tebliğ veya öğrenme tarihinden itibaren 60 gün içinde idare mahkemesinde dava açılabilir." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde dava açılabilir." },
      { question: "Kentsel dönüşüm uygulama projesine itiraz edilebilir mi?", answer: "Evet, hukuka aykırılık iddiasıyla idare mahkemesinde iptal davası açılabilir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, yasal süresinde idare mahkemesinde dava açılabilir." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "Tam yargı davası yoluyla zararın tazmini talep edilebilir." },
    ],
    howToTitle: "Maltepe'de İdari İptal Davası Nasıl Açılır?",
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
    urlSlug: "maltepe-is-hukuku-avukati",
    name: "Maltepe İş Hukuku Avukatı",
    heroTitle: "Maltepe İş Hukuku Avukatı",
    heroSubtitle:
      "1997'de kurulan Maltepe Üniversitesi'nin personeli ile Bağdat Caddesi üzerindeki işletmelerde çalışanlar dahil olmak üzere kıdem-ihbar tazminatı, işe iade ve işçilik alacağı taleplerinde temsil sağlanır; ilçenin kendi adliyesi bulunmadığından iş mahkemesi davaları Kartal'daki İstanbul Anadolu Adliyesi'nde görülür.",
    metaTitle: "Maltepe İş Hukuku Avukatı",
    metaDescription:
      "Maltepe'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Maltepe'deki çalışanlara ve işverenlere iş hukuku kapsamında danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup 2019'da MEF Üniversitesi Hukuk Fakültesi'ni bitirmiştir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Eğitim ve Ticaret Çalışanları", description: "Maltepe Üniversitesi'ndeki idari/akademik personel ile Bağdat Caddesi üzerindeki işletme çalışanlarının hakları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Bağdat Caddesi üzerindeki mağaza ve işletme çalışanlarının işçilik alacaklarının tahsili",
      "Fazla mesai ve yıllık izin ücreti gibi diğer işçilik alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "1997 yılında İstanbul Marmara Eğitim Vakfı tarafından kurulan ve ilçedeki Marmara Eğitim Köyü'nde faaliyet gösteren Maltepe Üniversitesi'nin akademik ve idari personelinin yanı sıra, Bağdat Caddesi'nin Küçükyalı'daki son bölümünde yoğunlaşan mağaza ve işletmelerde çalışanların işçilik alacağı ve işe iade talepleri, ilçedeki iş hukuku uyuşmazlıklarının önemli bir bölümünü oluşturmaktadır.",
      "Arabuluculuk aşamasında taraflar anlaşamazsa, Maltepe Üniversitesi personeli ile Bağdat Caddesi işletmelerindeki çalışanları da kapsayan işe iade ve işçilik alacağı davalarına, ilçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi'ndeki iş mahkemesi bakar.",
    ],
    faqs: [
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Çalışma süresi ve son brüt (giydirilmiş) ücret esas alınarak hesaplanır." },
      { question: "Maltepe'de iş mahkemesi nerededir?", answer: "İlçenin kendi adliyesi bulunmadığından Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir." },
      { question: "Bağdat Caddesi üzerindeki bir mağaza çalışanının fazla mesai hakkı nasıl ispatlanır?", answer: "Giriş-çıkış kayıtları, vardiya çizelgeleri, bordro ve tanık beyanıyla ispat edilebilir." },
      { question: "İşe iade davası açmadan önce arabuluculuğa gitmek zorunlu mu?", answer: "Evet, dava şartı olarak öncelikle arabulucuya başvurulması gerekir." },
    ],
    howToTitle: "Maltepe'de İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Fesih Değerlendirmesi", text: "İşten çıkarma gerekçesi ve usulü incelenir." },
      { name: "Arabulucuya Başvuru", text: "Yasal süre içinde arabuluculuk sürecine başlanır." },
      { name: "Dava Süreci", text: "Anlaşma olmazsa iş mahkemesinde dava açılır." },
      { name: "Sonuç", text: "Mahkeme kararı doğrultusunda işlem yapılır." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "giydirilmis-ucret-kavrami", "ise-iade-davasi"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "maltepe-kira-tahliye-avukati",
    name: "Maltepe Kira ve Tahliye Avukatı",
    heroTitle: "Maltepe Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Bağdat Caddesi'nin Küçükyalı'daki işyeri kiralamaları, sahil şeridindeki konut kiraları ve tahliye uyuşmazlıklarında destek sağlanır; sulh hukuk mahkemesi davaları Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir.",
    metaTitle: "Maltepe Kira ve Tahliye Avukatı",
    metaDescription:
      "Maltepe'de kiracı tahliyesi, konut ve işyeri kira sözleşmesi uyuşmazlıkları ve kira bedeli tespitinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Maltepe'deki kiraya verenlere ve kiracılara kira hukuku alanında danışmanlık veren Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş, İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuştur.",
    highlightCards: [
      { title: "Sahil Şeridi Konutları", description: "İdealtepe, Altıntepe ve Küçükyalı'daki konut kiralamalarına ilişkin uyuşmazlıklar." },
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve tahliye taahhüdüne dayalı süreçler." },
      { title: "İşyeri Kiraları", description: "Bağdat Caddesi'nin Küçükyalı'daki son bölümündeki mağaza kiralamaları." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedelinin belirlenmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İdealtepe, Altıntepe ve Küçükyalı'daki konut kiralamalarına ilişkin sözleşme incelemesi",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Bağdat Caddesi üzerindeki mağaza kiralarında rayiç bedel tespiti",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "M4 ve Marmaray istasyonlarına yakınlığı nedeniyle Cevizli, Girne ve Esenkent gibi mahallelerde kiracı devir hızının yüksek seyrettiği Maltepe'de, konut kira sözleşmelerinde depozito ve tahliye taahhüdü şartlarının net biçimde belirlenmesi uyuşmazlıkları önlemek açısından önem taşır.",
      "Sulh hukuk mahkemesi sıfatıyla bu tür kira ve tahliye uyuşmazlıklarına Kartal'daki İstanbul Anadolu Adliyesi'nde bakılır, çünkü Maltepe'nin kendi adliyesi yoktur; sözleşmenin yazılı yapılması ve tahliye taahhüdü gibi belgelerin eksiksiz saklanması, uyuşmazlık çıktığında ispat yükünü kolaylaştırır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Bağdat Caddesi'ndeki bir işyerinin kira bedeli nasıl güncellenir?", answer: "Sözleşmedeki artış oranı veya yasal sınırlar çerçevesinde güncellenir; uyuşmazlık halinde rayiç bedel tespiti istenebilir." },
      { question: "Maltepe'de tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir yıla kadar sürebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
    ],
    howToTitle: "Maltepe'de Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "maltepe-vergi-avukati",
    name: "Maltepe Vergi Avukatı",
    heroTitle: "Maltepe Vergi Avukatı",
    heroSubtitle:
      "Küçükyalı Vergi Dairesi Müdürlüğü'ne bağlı Maltepe mükelleflerine yönelik vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Maltepe Vergi Avukatı",
    metaDescription:
      "Maltepe'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Maltepe'deki mükelleflerin vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarında danışmanlık veren Furkan Arıkan, İstanbul Barosu sicil no 72621 ile kayıtlı olup 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Esnaf ve İşletme Uyuşmazlıkları", description: "Bağdat Caddesi ve ilçe genelindeki işletmelerin vergi inceleme süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Bağdat Caddesi ve ilçe genelindeki işletmelerin vergi inceleme süreçlerinde danışmanlık",
      "Gayrimenkul kira gelirlerinin beyanına ilişkin uyuşmazlıklarda destek",
    ],
    localParagraphs: [
      "Maltepe mükelleflerinin büyük bölümünün vergisel işlemleri, adını ilçenin Küçükyalı Mahallesi'nden alan ancak fiziken Kartal'daki bir vergi daireleri kompleksinde hizmet veren Küçükyalı Vergi Dairesi Müdürlüğü üzerinden yürütülür; bu müdürlük Bağlarbaşı, Girne, Altayçeşme, Feyzullah, Başıbüyük, Büyükbakkalköy, Zümrütevler, Cevizli, Yalı, İdealtepe, Çınar, Aydınevler, Altıntepe ve Fındıklı mahallelerini kapsamaktadır.",
      "Bağdat Caddesi üzerindeki işletmeler ile ilçe genelindeki esnafın vergi uyuşmazlıkları sık karşılaşılan konular arasındadır. İhbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "Maltepe'de hangi vergi dairesi yetkilidir?", answer: "Maltepe mükelleflerinin büyük bölümü, adını Küçükyalı Mahallesi'nden alan Küçükyalı Vergi Dairesi Müdürlüğü üzerinden işlem yapar." },
      { question: "Küçükyalı Vergi Dairesi Müdürlüğü Maltepe'nin neresinde?", answer: "Müdürlük, adını ilçenin Küçükyalı Mahallesi'nden almakla birlikte fiziken Kartal'daki bir vergi daireleri kompleksinde hizmet vermektedir." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
    ],
    howToTitle: "Maltepe'de Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "maltepe-borclar-hukuku-avukati",
    name: "Maltepe Borçlar Hukuku Avukatı",
    heroTitle: "Maltepe Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Kentsel dönüşüm sürecindeki kat karşılığı inşaat sözleşmesi uyuşmazlıkları, ticari alacak talepleri ve tazminat davalarında temsil sağlanır; asliye hukuk mahkemesi davaları Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir.",
    metaTitle: "Maltepe Borçlar Hukuku Avukatı",
    metaDescription:
      "Maltepe'de kat karşılığı inşaat sözleşmeleri, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Maltepe'deki müvekkillerine sözleşme ve alacak uyuşmazlıklarında borçlar hukuku kapsamında danışmanlık veren Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır.",
    highlightCards: [
      { title: "Kentsel Dönüşüm Sözleşmeleri", description: "Gülsuyu-Gülensu ve Başıbüyük'teki kat karşılığı inşaat sözleşmesi uyuşmazlıkları." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Esnaf ve İşletme Sözleşmeleri", description: "Bağdat Caddesi ve ilçe genelindeki işletmeler arası ticari sözleşme uyuşmazlıkları." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gülsuyu-Gülensu ve Başıbüyük'teki kentsel dönüşüm alanındaki kat karşılığı inşaat sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Bağdat Caddesi ve ilçe genelindeki işletmeler arası ticari sözleşmelerin hazırlanması ve incelenmesi",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Gülsuyu, Gülensu ve Başıbüyük mahallelerindeki kentsel dönüşüm sürecinde arsa payı karşılığı inşaat sözleşmesinin resmi şekilde (tapu sicil müdürlüğünde veya noterde düzenleme şeklinde) yapılması zorunludur; bu şekil şartına uyulmadan yapılan sözleşmeler geçersiz kabul edilir ve uygulamada uyuşmazlık konusu olabilmektedir.",
      "Kartal'daki İstanbul Anadolu Adliyesi, Maltepe'nin kendi adliyesi bulunmadığından bu tür alacak ve tazminat davalarına da bakmaktadır; ticari nitelikteki bazı alacak uyuşmazlıklarında ise dava açılmadan önce arabuluculuk sürecinin tüketilmesi kanunen zorunludur.",
    ],
    faqs: [
      { question: "Kat karşılığı sözleşmesi hangi şekilde yapılmalı?", answer: "Tapu sicil müdürlüğünde veya noterde düzenleme şeklinde yapılmalıdır; adi yazılı sözleşme geçersizdir." },
      { question: "Müteahhit işi eksik veya hatalı bırakırsa ne yapılabilir?", answer: "Sözleşmeden dönme, tazminat veya ifa davası gibi hukuki yollara başvurulabilir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir." },
    ],
    howToTitle: "Maltepe'de Alacak Davası Süreci Nasıl İşler?",
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
