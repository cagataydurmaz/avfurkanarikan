import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const kadikoyServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "kadikoy-avukat",
    name: "Kadıköy Avukat",
    heroTitle: "Kadıköy Avukat",
    heroSubtitle:
      "Kadıköy'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan tarafından yürütülmektedir; kültür-sanat yaşamı ve yüksek eğitim düzeyiyle bilinen ilçenin kendine ait bir adliyesi bulunmadığından davalar Kartal'daki İstanbul Anadolu Adliyesi'nde görülmektedir.",
    metaTitle: "Kadıköy Avukat",
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
      { question: "Kadıköy'deki davalara hangi adliye bakıyor?", answer: "Kadıköy'ün kendi adliyesi bulunmamaktadır; 2013'te Kartal'da açılan İstanbul Anadolu Adliyesi, ilçenin tüm ceza, hukuk ve idari dava dosyalarına bakmaktadır." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefon üzerinden iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Kadıköy'de mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Kadıköy'deki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Fikirtepe'deki kentsel dönüşüm sürecinde hukuki destek alınabilir mi?", answer: "Evet, kat karşılığı inşaat sözleşmesinin incelenmesi ve hak sahipliği uyuşmazlıklarında danışmanlık sağlanır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Kadıköy Vergi Dairesi'ne bağlı işlemler nelerdir?", answer: "İlçedeki mükelleflerin büyük bölümünün vergisel işlemleri Kadıköy Vergi Dairesi Müdürlüğü üzerinden yürütülür; ilçede Göztepe gibi başka vergi daireleri de bulunmaktadır." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır." },
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
    metaTitle: "Kadıköy Boşanma Avukatı",
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
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Kartal'daki İstanbul Anadolu Adliyesi bünyesindeki aile mahkemesine başvurulur; Kadıköy'ün ayrı bir adliyesi bulunmamaktadır." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir." },
      { question: "Çift kariyerli bir evlilikte mal paylaşımı nasıl yapılır?", answer: "Evlilik birliği içinde edinilen mal varlığı katkı oranına göre paylaşılır; taraflara ait kişisel mallar tasfiye dışında değerlendirilir." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir." },
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
    metaTitle: "Kadıköy Ceza Avukatı",
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
      { question: "Kadıköy'de bir ceza davası hangi adliyede görülür?", answer: "Kadıköy'ün kendi adliyesi bulunmadığından tüm ceza davaları, ağır ceza dahil, Kartal'daki İstanbul Anadolu Adliyesi'nde görülür." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir ancak müdafi bulundurmak önerilir." },
      { question: "Kalabalık bir mekanda yaşanan tartışma nedeniyle soruşturma açılabilir mi?", answer: "Evet, darp, hakaret veya tehdit iddiası varsa şikayet üzerine veya resen soruşturma açılabilir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, sulh ceza hakimliğine itiraz edilebilir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Yargılamaya kaldığı yerden devam edilir." },
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
    metaTitle: "Kadıköy Gayrimenkul Avukatı",
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
      { question: "Fikirtepe'de kat karşılığı sözleşmesi neden noterde yapılmalı?", answer: "Kanun gereği arsa payı karşılığı inşaat sözleşmesi resmi şekil şartına tabidir; noter düzenlemesi olmadan yapılan sözleşme geçersizdir." },
      { question: "Müteahhit inşaatı süresinde tamamlamazsa ne yapılabilir?", answer: "Sözleşmedeki cezai şart ve teminat hükümlerine dayanılarak tazminat veya fesih talep edilebilir." },
      { question: "Komşu inşaattan kaynaklanan çatlaklar için ne yapılabilir?", answer: "Tespit yaptırılarak yükleniciye veya iş sahibine karşı tazminat davası açılabilir." },
      { question: "Kadıköy'de gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir." },
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
    metaTitle: "Kadıköy İcra Avukatı",
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
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "Sözleşme, senet, fatura veya mahkeme ilamı gibi belgelerle başlanabilir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Tebliğden itibaren 7 gündür." },
      { question: "Kadıköy'de icra dairesi nerededir?", answer: "Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir; Kadıköy'ün ayrı bir icra dairesi bulunmamaktadır." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür." },
    ],
    howToTitle: "Kadıköy'de İcra Takibi Hangi Aşamalardan Oluşur?",
    howToSteps: [
      { name: "Belge Derlemesi", text: "Alacağa dayanak oluşturan belgeler toplanır." },
      { name: "İcra Dairesine Başvuru", text: "Yetkili icra dairesinde takip dosyası açılır." },
      { name: "Tebligat Aşaması", text: "Borçluya ödeme emri gönderilir." },
      { name: "Haciz/Tahsilat", text: "Süreç sonunda haciz ve tahsilat işlemleri yürütülür." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz", "icra-masrafi-hesaplama"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "kadikoy-idare-avukati",
    name: "Kadıköy İdare Avukatı",
    heroTitle: "Kadıköy İdare Avukatı",
    heroSubtitle:
      "Fikirtepe kentsel dönüşüm sürecindeki idari işlemler, belediye imar uygulamaları ve idari para cezalarına karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Kadıköy İdare Avukatı",
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
      { question: "Riskli yapı tespitine karşı hangi sürede dava açılmalı?", answer: "Tebliğ veya öğrenme tarihinden itibaren 60 gün içinde idare mahkemesinde dava açılabilir." },
      { question: "Kentsel dönüşüm uygulama projesine itiraz edilebilir mi?", answer: "Evet, hukuka aykırılık iddiasıyla idare mahkemesinde iptal davası açılabilir." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde dava açılabilir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, yasal süresinde idare mahkemesinde dava açılabilir." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "Tam yargı davası yoluyla zararın tazmini talep edilebilir." },
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
    metaTitle: "Kadıköy İş Hukuku Avukatı",
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
      { question: "Kıdem tazminatı hangi hallerde ödenir?", answer: "En az 1 yıllık kıdem şartıyla kanunda sayılan haklı fesih hallerinde ödenir." },
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Çalışma süresi ve son brüt (giydirilmiş) ücret esas alınarak hesaplanır." },
      { question: "Kadıköy'de iş mahkemesi nerededir?", answer: "Kartal'daki İstanbul Anadolu Adliyesi bünyesindedir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir." },
      { question: "Plaza çalışanlarının fazla mesai hakkı nasıl ispatlanır?", answer: "Giriş-çıkış kayıtları, e-posta trafiği, bordro ve tanık beyanı ile ispat edilebilir." },
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
    metaTitle: "Kadıköy Kira ve Tahliye Avukatı",
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
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Bağdat Caddesi'ndeki bir işyerinin kira bedeli nasıl güncellenir?", answer: "Sözleşmedeki artış oranı veya yasal sınırlar çerçevesinde güncellenir; uyuşmazlık halinde rayiç bedel tespiti istenebilir." },
      { question: "Kadıköy'de tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir yıla kadar sürebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
    ],
    howToTitle: "Kadıköy'de Kiracı Tahliye Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Sebebin Belirlenmesi", text: "Tahliyeye dayanak olacak durum netleştirilir." },
      { name: "Belge Toplama", text: "İhtarname, sözleşme veya taahhütname bir araya getirilir." },
      { name: "Başvuru", text: "Duruma göre sulh hukuk mahkemesi veya icra dairesine başvurulur." },
      { name: "Tahliye", text: "Kesinleşen karar veya emirle taşınmaz teslim alınır." },
    ],
    crosslinkLabel: "Kira ve Tahliye Avukatı",
    relatedPostSlugs: ["kiracinin-tahliye-sureci", "kira-artisi-hesaplama"],
  },

  // ─────────────────────────── VERGİ ───────────────────────────
  {
    slug: "vergi",
    urlSlug: "kadikoy-vergi-avukati",
    name: "Kadıköy Vergi Avukatı",
    heroTitle: "Kadıköy Vergi Avukatı",
    heroSubtitle:
      "Kozyatağı'ndaki şirketler ve Bağdat Caddesi üzerindeki işletmelere yönelik vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Kadıköy Vergi Avukatı",
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
      { question: "Kadıköy Vergi Dairesi hangi mükellefleri kapsıyor?", answer: "İlçe genelindeki mükelleflerin büyük bölümü Kadıköy Vergi Dairesi Müdürlüğü'ne bağlıdır; bazı bölgelerde (örneğin Göztepe) ayrı vergi daireleri de bulunur." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Kozyatağı'ndaki bir şirkete vergi incelemesi başlatılırsa süreç nasıl işler?", answer: "İnceleme raporuna karşı uzlaşma talep edilebilir veya doğrudan dava yoluna gidilebilir." },
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
    metaTitle: "Kadıköy Borçlar Hukuku Avukatı",
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
      { question: "Kat karşılığı sözleşmesi hangi şekilde yapılmalı?", answer: "Tapu sicil müdürlüğünde veya noterde düzenleme şeklinde yapılmalıdır; adi yazılı sözleşme geçersizdir." },
      { question: "Müteahhit işi eksik/hatalı bırakırsa ne yapılabilir?", answer: "Sözleşmeden dönme, tazminat veya ifa davası gibi hukuki yollara başvurulabilir." },
      { question: "İnşaat kazısı komşu binada hasara yol açarsa ne yapılabilir?", answer: "Tespit yaptırılarak sorumlulara karşı tazminat davası açılabilir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, Kartal'daki İstanbul Anadolu Adliyesi bünyesinde görülür." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
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
