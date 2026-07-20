import type { PseoService } from "./types";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

export const sultangaziServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "sultangazi-avukat",
    name: "Sultangazi Avukat",
    heroTitle: "Sultangazi Avukat",
    heroSubtitle:
      "2008 yılında Gaziosmanpaşa'dan ayrılarak kurulan, 37 kilometrekarelik alanında 530 bini aşkın nüfusuyla İstanbul'un en yoğun yerleşim ilçelerinden biri olan Sultangazi'de İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan; ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunmaktadır; ilçedeki dava ve işlemlere Gaziosmanpaşa Adliyesi bakmaktadır.",
    metaTitle: "Sultangazi Avukat",
    metaDescription:
      "Sultangazi'de ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "36-37 kilometrekarelik yüzölçümüne karşın 530 bini aşkın nüfusuyla İstanbul'un en yoğun nüfuslu ilçelerinden birini oluşturan Sultangazi'de ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında danışmanlık ve temsil hizmeti, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı ve 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olan avukat Furkan Arıkan tarafından yürütülmektedir; randevu talepleri WhatsApp veya telefonla iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma süreçlerinde müdafilik ve mağdur vekilliği." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka uyuşmazlıklarında temsil." },
      { title: "Gayrimenkul Hukuku", description: "Kentsel dönüşüm, tapu ve kat karşılığı inşaat uyuşmazlıkları." },
      { title: "İş Hukuku", description: "İmalat ve tekstil işletmelerinde işçilik alacaklarında destek." },
      { title: "İcra Hukuku", description: "Ticari ve bireysel alacakların takibinde temsil." },
      { title: "İdare Hukuku", description: "Riskli yapı tespiti ve idari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı ve cezasına ilişkin itiraz süreçleri." },
      { title: "Borçlar Hukuku", description: "Kat karşılığı ve hizmet sözleşmelerinden doğan davalar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Kentsel dönüşüm kapsamındaki riskli yapı tespiti ve hak sahipliği uyuşmazlıklarında gayrimenkul hukuku desteği",
      "İmalat, tekstil ve konfeksiyon işletmelerinde çalışanlara yönelik iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere ve riskli yapı kararlarına karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Kat karşılığı inşaat ve hizmet sözleşmelerinden doğan borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "Sultangazi, 6 Mart 2008 tarihli kanunla; Gaziosmanpaşa'ya bağlı 13 mahalle ile Eyüpsultan ve Esenler'den birer mahallenin katılımıyla kurulmuştur. Bölge 1963 yılına kadar Eyüp'e, ardından 2008'e kadar Gaziosmanpaşa'ya bağlı kalmış; Tanzimat sonrasında Balkanlar'dan (özellikle Şumnu, Cuma ve Lofça yöresinden) gelen göçmenlerin yerleşimiyle şekillenen nüfus yapısı, 1970'li yıllardan itibaren sanayi istihdamına bağlı iç göçle büyük ölçüde yoğunlaşmıştır.",
      "İlçedeki dava ve işlemlere, Gaziosmanpaşa Merkez Mahallesi'nde hizmet veren Gaziosmanpaşa Adliyesi bakmakta olup bu adliyenin yargı çevresi Sultangazi'nin yanı sıra Gaziosmanpaşa, Arnavutköy ve Eyüpsultan ilçelerini de kapsamaktadır; vergisel işlemler ise Sultangazi Mal Müdürlüğü nezdinde yürütülmektedir.",
    ],
    faqs: [
      { question: "Sultangazi'deki davalara hangi adliye bakıyor?", answer: "Sultangazi'nin dava ve işlemlerine, Gaziosmanpaşa Merkez Mahallesi'nde yer alan Gaziosmanpaşa Adliyesi bakmaktadır; bu adliye aynı zamanda Gaziosmanpaşa, Arnavutköy ve Eyüpsultan ilçelerinin de yargı çevresindedir." },
      { question: "Ağır ceza davalarına hangi mahkeme bakıyor?", answer: "2024 yılında kurulan Gaziosmanpaşa Ağır Ceza Mahkemesi, Sultangazi dahil dört ilçenin ağır ceza davalarına bakmaktadır; ayrı bir adliyeye yönlendirme gerekmez." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme günü belirlenir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Büro Sultangazi'de mi bulunuyor?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Sultangazi'deki müvekkillere de aynı kapsamda hizmet verilir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, randevu sırasında bilgi verilir." },
      { question: "Kentsel dönüşüm sürecinde hukuki destek alınabilir mi?", answer: "Evet, riskli yapı tespitine itiraz, hak sahipliği tespiti ve kat karşılığı sözleşmelerinin incelenmesi konusunda danışmanlık sağlanır." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Tercihe göre yüz yüze veya çevrim içi olarak planlanabilir." },
      { question: "Acil bir gözaltı durumunda ne yapılmalı?", answer: "Vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmesi yeterlidir." },
      { question: "Sultangazi'de vergi işlemleri hangi kurum üzerinden yürütülür?", answer: "İlçe mükelleflerinin vergisel işlemleri, tam teşekküllü bir vergi dairesi değil Sultangazi Mal Müdürlüğü üzerinden yürütülmektedir." },
    ],
    howToTitle: "Sultangazi'de Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Sultangazi Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "idari-islemin-iptali-davasi", "istanbul-adliye-bulucu"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "sultangazi-bosanma-avukati",
    name: "Sultangazi Boşanma Avukatı",
    heroTitle: "Sultangazi Boşanma Avukatı",
    heroSubtitle:
      "Anlaşmalı ve çekişmeli boşanma davalarında velayet, nafaka ve mal paylaşımı taleplerinde temsil sağlanır; aile mahkemesi, Sultangazi'nin de yargı çevresinde bulunduğu Gaziosmanpaşa Adliyesi bünyesindedir.",
    metaTitle: "Sultangazi Boşanma Avukatı",
    metaDescription:
      "Sultangazi'de anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuş bir avukattır. Aile hukuku alanında Sultangazi'deki müvekkillerine boşanma, velayet ve nafaka konularında danışmanlık ve dava takibi hizmeti sunar.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün eksiksiz hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Mal Rejimi Tasfiyesi", description: "Apartman dairesi ve kat karşılığı payının paylaşımı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolü hazırlığı ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve sonradan velayet değişikliği talepleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Konut ve kat karşılığı payının dahil olduğu mal rejimi tasfiyesi davaları",
      "Boşanmaya bağlı maddi/manevi tazminat ve ziynet eşyası talepleri",
    ],
    localParagraphs: [
      "Balkan göçmenlerinin yerleşimiyle başlayan ve 1970'lerden itibaren sanayi istihdamı nedeniyle hızlanan iç göçle büyüyen Sultangazi'de, geniş aile yapılarının kentleşmeyle birlikte çekirdek aileye dönüştüğü hanelerde boşanma sürecindeki velayet ve nafaka talepleri sıkça gündeme gelmektedir.",
      "Boşanma, velayet ve nafaka davalarına, ilçenin yargı çevresinde bulunduğu Gaziosmanpaşa Adliyesi'ndeki aile mahkemesinde bakılır; kentsel dönüşüm sürecindeki hak sahipliği payları da mal rejimi tasfiyesinde ayrıca değerlendirilmesi gereken bir husustur.",
    ],
    faqs: [
      { question: "Boşanma davası için hangi adliyeye başvurulur?", answer: "Sultangazi'nin yargı çevresinde bulunduğu Gaziosmanpaşa Adliyesi'ndeki aile mahkemesine başvurulur." },
      { question: "Velayet düzenlemesinde çocuğun görüşü alınır mı?", answer: "Belirli bir olgunluğa ulaşmışsa görüşü dikkate alınabilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir." },
      { question: "Kentsel dönüşüm sürecindeki bir konutun mal paylaşımı nasıl etkilenir?", answer: "Riskli yapı kararı ve kat karşılığı sözleşmesi kapsamındaki hak sahipliği payı, taşınmazın güncel durumuna göre değerlemede dikkate alınır." },
      { question: "Boşanma davası açıldıktan sonra barışma mümkün mü?", answer: "Evet, taraflar anlaşırsa dava geri çekilebilir." },
    ],
    howToTitle: "Sultangazi'de Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "İhtiyaç Analizi", text: "Velayet, nafaka ve mal rejimi talepleri belirlenir." },
      { name: "Dilekçe Hazırlığı", text: "Duruma uygun dava dilekçesi veya protokol yazılır." },
      { name: "Dava Açılışı", text: "Yetkili aile mahkemesine başvurulur." },
      { name: "Sonuç", text: "Duruşma sonrası karar açıklanır." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "nafakada-yuzde-kac-sorusu", "ziynet-esyasi-davasi"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "sultangazi-ceza-avukati",
    name: "Sultangazi Ceza Avukatı",
    heroTitle: "Sultangazi Ceza Avukatı",
    heroSubtitle:
      "Gözaltı, ifade alma ve kovuşturma süreçlerinin her aşamasında müdafilik hizmeti sunulur; 2024 yılında kurulan Gaziosmanpaşa Ağır Ceza Mahkemesi sayesinde Sultangazi'deki genel ve ağır ceza davalarının tamamı aynı adliyede görülmektedir.",
    metaTitle: "Sultangazi Ceza Avukatı",
    metaDescription:
      "Sultangazi'de soruşturma, kovuşturma, tutukluluğa itiraz ve ağır ceza davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olan ve İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bulunan avukat Furkan Arıkan, ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında Sultangazi'deki müvekkillerine müdafilik yapmaktadır.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Ağır Ceza Davaları", description: "Gaziosmanpaşa Ağır Ceza Mahkemesi'nde savunma." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının detaylı incelenmesi",
      "Tutukluluk kararlarına karşı itirazların hazırlanması",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Gaziosmanpaşa Ağır Ceza Mahkemesi'nin görev alanına giren dosyalarda savunma",
      "Uzlaşma sürecinde tarafların bir araya getirilmesi",
    ],
    localParagraphs: [
      "Hâkimler ve Savcılar Kurulu'nun 3 Temmuz 2024 tarihli kararıyla kurulan Gaziosmanpaşa Ağır Ceza Mahkemesi'nin yargı çevresi Gaziosmanpaşa, Arnavutköy, Eyüpsultan ve Sultangazi olarak belirlenmiştir; bu düzenlemeden önce ağır ceza davaları İstanbul (Çağlayan) Adliyesi'nde görülüyordu.",
      "Bu sayede Sultangazi'de işlenen suçlara ilişkin gerek genel gerekse ağır ceza yargılamaları, farklı bir adliyeye yönlendirme gerekmeksizin Gaziosmanpaşa Adliyesi bünyesinde yürütülmektedir. Gözaltı sürecinin başladığı andan itibaren müdafi ile görüşme hakkı doğar.",
    ],
    faqs: [
      { question: "Sultangazi'de bir ceza davası hangi adliyede görülür?", answer: "Hem genel ceza davaları hem de 2024'te kurulan Gaziosmanpaşa Ağır Ceza Mahkemesi'nin görev alanına giren davalar Gaziosmanpaşa Adliyesi'nde görülür." },
      { question: "Müdafi bulunmadan ifade alınabilir mi?", answer: "Alınabilir ancak müdafi bulundurmak önerilir." },
      { question: "Ağır ceza davaları eskiden nerede görülüyordu?", answer: "2024 yılındaki HSK kararı öncesinde Gaziosmanpaşa ve Sultangazi'nin ağır ceza davalarına İstanbul (Çağlayan) Adliyesi'nde bakılıyordu." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, sulh ceza hakimliğine itiraz edilebilir." },
      { question: "Uzlaşma sağlanamazsa ne olur?", answer: "Yargılamaya kaldığı yerden devam edilir." },
    ],
    howToTitle: "Sultangazi'de Ceza Yargılaması Nasıl İlerler?",
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
    urlSlug: "sultangazi-gayrimenkul-avukati",
    name: "Sultangazi Gayrimenkul Avukatı",
    heroTitle: "Sultangazi Gayrimenkul Avukatı",
    heroSubtitle:
      "6306 sayılı Kanun kapsamındaki riskli yapı tespitleri, kat karşılığı inşaat sözleşmeleri ve tapu uyuşmazlıklarında hukuki destek sağlanır; davalar Gaziosmanpaşa Adliyesi'nde görülür.",
    metaTitle: "Sultangazi Gayrimenkul Avukatı",
    metaDescription:
      "Sultangazi'de kentsel dönüşüm, riskli yapı tespiti, kat karşılığı inşaat ve tapu iptali uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı avukat Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur; kentsel dönüşüm, tapu ve kat karşılığı inşaat uyuşmazlıklarında Sultangazi'deki müvekkillerine danışmanlık verir.",
    highlightCards: [
      { title: "Riskli Yapı Tespiti", description: "6306 sayılı Kanun kapsamındaki tespit ve itiraz süreçleri." },
      { title: "Kat Karşılığı İnşaat", description: "Müteahhit-hak sahibi sözleşme uyuşmazlıkları." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile ve hisseli mülkiyete karşı davalar." },
      { title: "Hazine Arazisi Tahsisi", description: "Gecekondu alanlarındaki tapu tahsis belgesi süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Riskli yapı tespitine karşı 15 günlük yasal süresinde itiraz edilmesi",
      "Riskli yapı kararının iptali için idari dava süreçlerinin yürütülmesi",
      "Kat karşılığı inşaat sözleşmelerinin hazırlanması ve müteahhit temerrüdüne karşı dava açılması",
      "Hisseli tapularda ortaklığın giderilmesi (izale-i şüyu) davaları",
      "Hazine arazisi üzerindeki yapılara ilişkin tapu tahsis belgesi ve devir süreçlerinde danışmanlık",
      "Tapu iptali ve tescil davalarının açılması",
    ],
    localParagraphs: [
      "Çevre ve Şehircilik Bakanlığı'nın 2017 yılında bazı mahalleleri riskli alan ilan etmesinin ardından 26 Mayıs 2022'de onaylanan uygulama imar planıyla hız kazanan kentsel dönüşüm, Cumhuriyet, 50. Yıl ve Esentepe mahallelerinde belediye öncülüğünde sürdürülmektedir; Zübeyde Hanım Mahallesi'ndeki hazine arazisi üzerine kurulu gecekonduların tapu tahsisi yoluyla hak sahiplerine devri de bu kapsamdaki uygulamalardan biridir.",
      "Kentsel dönüşüm ve tapu uyuşmazlıklarına ilişkin davalar, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Gaziosmanpaşa Adliyesi bünyesinde görülür; riskli yapı tespitine itiraz süresi tebliğden itibaren 15 gündür.",
    ],
    faqs: [
      { question: "Riskli yapı tespitine ne kadar sürede itiraz edilmeli?", answer: "6306 sayılı Kanun uyarınca malikler veya kanuni temsilcileri, tespitin tebliğinden itibaren 15 gün içinde itiraz edebilir." },
      { question: "Kat karşılığı sözleşmesinde müteahhit işi teslim etmezse ne yapılabilir?", answer: "Sözleşmeden dönme, ifa veya tazminat talebiyle dava açılabilir; teminat ipoteği varsa buna da başvurulabilir." },
      { question: "Sultangazi'de gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Gaziosmanpaşa Adliyesi bünyesinde görülür." },
      { question: "Hazine arazisindeki bir gecekondu için tapu alınabilir mi?", answer: "Belirli şartların sağlanması halinde tapu tahsis belgesi ve sonrasında tapuya dönüştürme süreci işletilebilir." },
      { question: "Riskli yapı kararına karşı dava açma süresi ne kadardır?", answer: "İtiraz süreciyle bağlantılı olarak, karara karşı iptal davası tebliğ tarihinden itibaren 30 gün içinde açılabilir." },
    ],
    howToTitle: "Sultangazi'de Riskli Yapı Tespitine İtiraz Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Tespitin İncelenmesi", text: "Riskli yapı tespit raporu ve dayanağı incelenir." },
      { name: "İtiraz Dilekçesi", text: "15 günlük süre içinde itiraz dilekçesi hazırlanır." },
      { name: "Teknik Heyet İncelemesi", text: "İtiraz, üniversite ve bakanlık temsilcilerinden oluşan heyetçe değerlendirilir." },
      { name: "Sonuçlanma", text: "Heyet kararı kesinleşir veya idare mahkemesinde dava süreci başlatılır." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "sultangazi-icra-avukati",
    name: "Sultangazi İcra Avukatı",
    heroTitle: "Sultangazi İcra Avukatı",
    heroSubtitle:
      "Alacak tahsili amacıyla icra takibi, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır; icra daireleri, ilçenin yargı çevresinde bulunduğu Gaziosmanpaşa Adliyesi bünyesindedir.",
    metaTitle: "Sultangazi İcra Avukatı",
    metaDescription:
      "Sultangazi'de icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İstanbul Barosu 72621 sicil sayılı avukat Furkan Arıkan (MEF Üniversitesi Hukuk Fakültesi, 2019 mezunu), icra ve iflas hukuku kapsamında Sultangazi'deki alacaklı ve borçlu taraflara danışmanlık vermektedir.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul/gayrimenkul üzerinde haciz uygulanması." },
      { title: "Atölye/Esnaf Alacakları", description: "Küçük imalat işletmelerinden doğan çek-senet takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınmaz ve taşınır mal üzerinde haciz uygulanması",
      "Tekstil, konfeksiyon ve metal-plastik imalat işletmeleri arasındaki çek/senet kaynaklı alacakların takibi",
      "Mali sıkıntı yaşayan borçlular için konkordato danışmanlığı",
    ],
    localParagraphs: [
      "1970'lerden itibaren kırsal yerleşmelerde kurulan küçük sanayi kuruluşlarının bugün de Cebeci, İsmetpaşa, Malkoçoğlu ve Uğur Mumcu gibi mahallelerde tekstil, konfeksiyon, plastik ve metal işleme atölyeleri olarak sürdüğü Sultangazi'de, işletmeler arası mal ve hizmet alışverişinden doğan çek ve senet alacakları icra takiplerinin sık görülen nedenleri arasındadır.",
      "Bu takiplere ilişkin uyuşmazlıklar Gaziosmanpaşa Adliyesi'ndeki icra mahkemelerinde görülür; borçlunun Sultangazi'de yerleşik olduğu takiplerde yetkili icra dairesi, kural olarak borçlunun ikametgahı esas alınarak tespit edilir.",
    ],
    faqs: [
      { question: "İcra takibine hangi belgelerle başlanır?", answer: "Sözleşme, senet, çek, fatura veya mahkeme ilamı gibi belgelerle başlanabilir." },
      { question: "Ödeme emrine itiraz süresi kaçtır?", answer: "Tebliğden itibaren 7 gündür." },
      { question: "Bir imalat atölyesinden alınan çek karşılıksız çıkarsa ne yapılabilir?", answer: "Çeke dayalı olarak kambiyo senetlerine mahsus haciz yoluyla icra takibi başlatılabilir." },
      { question: "Haciz işlemi hangi mallara uygulanabilir?", answer: "Kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür." },
    ],
    howToTitle: "Sultangazi'de İcra Takibi Hangi Aşamalardan Oluşur?",
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
    urlSlug: "sultangazi-idare-avukati",
    name: "Sultangazi İdare Avukatı",
    heroTitle: "Sultangazi İdare Avukatı",
    heroSubtitle:
      "Riskli yapı tespitine ilişkin idari kararlar, belediye imar uygulamaları ve idari para cezalarına karşı iptal ve tam yargı davalarında temsil sağlanır; yetkili mahkeme İstanbul idare mahkemeleridir.",
    metaTitle: "Sultangazi İdare Avukatı",
    metaDescription:
      "Sultangazi'de idari işlemlerin iptali, riskli yapı kararlarına itiraz ve tazminat davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Sultangazi'deki idari işlemlerin iptali ve tam yargı davalarında müvekkillerine danışmanlık veren avukat Furkan Arıkan — İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı, 2019 MEF Üniversitesi Hukuk Fakültesi mezunudur.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Riskli Yapı Kararları", description: "6306 sayılı Kanun kapsamındaki tespitlere karşı dava." },
      { title: "İmar Uygulamaları", description: "Belediye imar planı ve ruhsat kararlarına itiraz." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Riskli yapı tespitine yönelik teknik heyet kararının idare mahkemesinde iptali",
      "Kentsel dönüşüm kapsamındaki tahliye ve yıkım kararlarına karşı dava süreçleri",
      "Belediye imar planı kararlarına karşı iptal davası açılması",
      "Ruhsat işlemlerine itiraz edilmesi",
      "İdarenin işlem/eyleminden kaynaklı zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
    ],
    localParagraphs: [
      "2017 yılında bazı mahalleleri kapsayacak şekilde riskli alan ilan edilen ve 2022'de onaylanan uygulama imar planıyla dönüşüm süreci hızlanan Sultangazi'de, riskli yapı tespitlerine ve buna bağlı tahliye kararlarına karşı açılan idari davalar sık başvurulan konular arasındadır.",
      "Bu davalar İstanbul idare mahkemelerinde görülür; riskli yapı kararına karşı iptal davası açma süresi tebliğden itibaren 30 gün, bakanlık/başkanlık nezdindeki idari itiraz süresi ise 15 gündür.",
    ],
    faqs: [
      { question: "Riskli yapı kararına idari yoldan nasıl itiraz edilir?", answer: "Tebliğden itibaren 15 gün içinde, üniversite ve bakanlık temsilcilerinden oluşan teknik heyete itiraz edilebilir." },
      { question: "Riskli yapı kararının iptali için dava açma süresi ne kadardır?", answer: "İdari itiraz yolundan bağımsız olarak, kararın tebliğinden itibaren 30 gün içinde idare mahkemesinde iptal davası açılabilir." },
      { question: "Ruhsat başvurusu reddedilirse itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde dava açılabilir." },
      { question: "İdari para cezasına itiraz edilebilir mi?", answer: "Evet, yasal süresinde idare mahkemesinde dava açılabilir." },
      { question: "İdarenin bir eyleminden zarar görenler ne yapabilir?", answer: "Tam yargı davası yoluyla zararın tazmini talep edilebilir." },
    ],
    howToTitle: "Sultangazi'de İdari İptal Davası Nasıl Açılır?",
    howToSteps: [
      { name: "İnceleme", text: "İptali istenen işlem ve tebliğ tarihi belirlenir." },
      { name: "Süre Takibi", text: "İdari itiraz veya dava açma süresi hesaplanır." },
      { name: "Dilekçe Hazırlığı", text: "Talep ve gerekçeler dilekçeye işlenir." },
      { name: "Yargılama", text: "İdare mahkemesi dosyayı inceleyip karar verir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: ["idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "sultangazi-is-hukuku-avukati",
    name: "Sultangazi İş Hukuku Avukatı",
    heroTitle: "Sultangazi İş Hukuku Avukatı",
    heroSubtitle:
      "Kıdem-ihbar tazminatı, işe iade ve işçilik alacaklarına ilişkin süreçlerde temsil sağlanır; iş mahkemesi, Sultangazi'nin yargı çevresinde bulunduğu Gaziosmanpaşa Adliyesi bünyesindedir.",
    metaTitle: "Sultangazi İş Hukuku Avukatı",
    metaDescription:
      "Sultangazi'de kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Furkan Arıkan, 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş ve İstanbul Barosu'na 72621 sicil numarasıyla kaydolmuş bir avukattır. İş hukuku kapsamında Sultangazi'deki çalışanlara ve işverenlere danışmanlık verir.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "İmalat Sektörü", description: "Tekstil, konfeksiyon ve metal-plastik atölye çalışanlarının hakları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Tekstil, konfeksiyon, plastik ve metal işleme atölyelerinde çalışan işçilerin işçilik alacaklarının tahsili",
      "Kayıt dışı veya eksik bildirilen ücretlere ilişkin giydirilmiş ücret hesabına dayalı taleplerin takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "1970'li yıllarda o dönem kırsal nitelikteki Cebeci, Habibler ve Atışalanı gibi yerleşmelerde açılan küçük sanayi kuruluşlarının bugün de tekstil, konfeksiyon, plastik ve metal işleme atölyeleri olarak sürdüğü Sultangazi'de, imalat sektöründe çalışanların işçilik alacaklarına ilişkin uyuşmazlıklar sıkça gündeme gelmektedir.",
      "Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları, ilçenin yargı çevresinde bulunduğu Gaziosmanpaşa Adliyesi'ndeki iş mahkemesinde görülür.",
    ],
    faqs: [
      { question: "Atölyede kayıt dışı çalışan işçinin tazminat hakkı var mı?", answer: "Fiili çalışma tanık beyanı ve diğer delillerle ispatlanabildiği ölçüde kıdem ve ihbar tazminatı ile diğer işçilik alacakları talep edilebilir." },
      { question: "Haksız fesih halinde kıdem tazminatı nasıl hesaplanır?", answer: "Çalışma süresi ve son brüt (giydirilmiş) ücret esas alınarak hesaplanır." },
      { question: "Sultangazi'de iş mahkemesi nerededir?", answer: "İlçenin yargı çevresinde bulunduğu Gaziosmanpaşa Adliyesi bünyesindedir." },
      { question: "İşe iade talebi hangi sürede sonuçlanır?", answer: "Arabuluculuk ve dava sürecinin toplam süresi dosyaya göre değişebilir." },
      { question: "Atölye çalışanlarının fazla mesai hakkı nasıl ispatlanır?", answer: "Puantaj kayıtları, bordro ve tanık beyanı ile ispat edilebilir." },
    ],
    howToTitle: "Sultangazi'de İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Fesih Değerlendirmesi", text: "İşten çıkarma gerekçesi ve usulü incelenir." },
      { name: "Arabulucuya Başvuru", text: "Yasal süre içinde arabuluculuk sürecine başlanır." },
      { name: "Dava Süreci", text: "Anlaşma olmazsa iş mahkemesinde dava açılır." },
      { name: "Sonuç", text: "Mahkeme kararı doğrultusunda işlem yapılır." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "ise-iade-davasi", "giydirilmis-ucret-kavrami"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "sultangazi-kira-tahliye-avukati",
    name: "Sultangazi Kira ve Tahliye Avukatı",
    heroTitle: "Sultangazi Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Yüksek kiracı oranına sahip apartman bölgelerinde konut tahliyesi, kira bedeli tespiti ve kentsel dönüşüm nedeniyle bina boşaltılması süreçlerinde destek sağlanır; sulh hukuk mahkemesi Gaziosmanpaşa Adliyesi'ndedir.",
    metaTitle: "Sultangazi Kira ve Tahliye Avukatı",
    metaDescription:
      "Sultangazi'de kiracı tahliyesi, kira sözleşmesi uyuşmazlıkları, kira bedeli tespiti ve kentsel dönüşüm kapsamında bina tahliyesinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kira hukuku alanında Sultangazi'deki kiraya verenlere ve kiracılara danışmanlık veren Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Kentsel Dönüşümde Tahliye", description: "Riskli yapı kararı sonrası bina boşaltma süreçleri." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Yoğun nüfuslu apartman bölgelerine özgü konut kira sözleşmelerinin hazırlanması",
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Riskli yapı kararı sonrasında kiracının bina tahliyesine ilişkin hak ve yükümlülükleri konusunda danışmanlık",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
    ],
    localParagraphs: [
      "37 kilometrekarelik alanda 530 bini aşkın nüfusun büyük bölümünün apartman dairelerinde yaşadığı Sultangazi'de kiracı oranı yüksektir; bu nedenle kira bedeli uyuşmazlıkları ve tahliye talepleri günlük hukuki taleplerin önemli bir kısmını oluşturmaktadır.",
      "Ayrıca riskli yapı tespiti kesinleşen binalarda kiracıların da tahliye sürecine dahil olması gerekebilir; bu husus konut kirası tahliyesinden ayrı bir süreç olsa da sözleşme ilişkisinin sona erme koşulları açısından birlikte değerlendirilmesi gerekir. Sulh hukuk mahkemesi, ilçenin yargı çevresinde bulunduğu Gaziosmanpaşa Adliyesi bünyesindedir.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye talep edilebilir." },
      { question: "Riskli yapı kararı çıkan binada kiracı ne yapmalı?", answer: "Bina tahliye sürecine uyum sağlanması gerekir; kira sözleşmesinin sona ermesine bağlı hak ve yükümlülükler ayrıca değerlendirilir." },
      { question: "Sultangazi'de tahliye davası ne kadar sürer?", answer: "Dosyanın niteliğine göre değişmekle birlikte birkaç aydan bir buçuk yıla kadar sürebilir." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Hayır, geçerli bir taahhütname ile doğrudan icra dairesi kanalıyla tahliye istenebilir." },
    ],
    howToTitle: "Sultangazi'de Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "sultangazi-vergi-avukati",
    name: "Sultangazi Vergi Avukatı",
    heroTitle: "Sultangazi Vergi Avukatı",
    heroSubtitle:
      "Vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; ilçedeki mükelleflerin işlemleri tam teşekküllü bir vergi dairesi yerine Sultangazi Mal Müdürlüğü üzerinden yürütülür.",
    metaTitle: "Sultangazi Vergi Avukatı",
    metaDescription:
      "Sultangazi'de vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Sultangazi'deki müvekkillerine danışmanlık veren avukat Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Esnaf ve Atölye Denetimi", description: "Küçük imalat işletmelerine yönelik vergi incelemeleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Tekstil, konfeksiyon ve imalat atölyelerine yönelik vergi incelemesi sürecinde danışmanlık",
      "Kira gelirlerinin beyanına ilişkin uyuşmazlıklarda destek",
    ],
    localParagraphs: [
      "Sultangazi'deki mükelleflerin vergisel işlemleri, tam teşekküllü bir vergi dairesi müdürlüğü değil Sultangazi Mal Müdürlüğü (Uğur Mumcu Mahallesi, Atatürk Bulvarı) üzerinden yürütülmektedir; bu durum ilçenin 2008'de kurulan görece yeni bir yerleşim birimi olmasıyla bağlantılıdır.",
      "Küçük ve orta ölçekli imalat işletmelerinin yoğun olduğu ilçede, bu işletmelere yönelik vergi incelemeleri sık karşılaşılan konular arasındadır. İhbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "Sultangazi'de vergi işlemleri hangi kurumda yürütülür?", answer: "Sultangazi Mal Müdürlüğü nezdinde yürütülür; ilçede tam teşekküllü bir vergi dairesi müdürlüğü bulunmamaktadır." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "Tebliğden itibaren 30 gün içinde dava açılabilir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "İstanbul vergi mahkemelerinde görülür." },
      { question: "Uzlaşma başvurusu dava hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma sağlanamazsa kalan dava açma süresi korunur." },
      { question: "Atölye/esnaf işletmesi kira geliri beyan etmezse ne olur?", answer: "Re'sen veya ikmalen tarhiyat ve buna bağlı ceza uygulanabilir, bu işlemlere karşı dava açılabilir." },
    ],
    howToTitle: "Sultangazi'de Vergi İtirazı Süreci Nasıl İşler?",
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
    urlSlug: "sultangazi-borclar-hukuku-avukati",
    name: "Sultangazi Borçlar Hukuku Avukatı",
    heroTitle: "Sultangazi Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Kat karşılığı inşaat sözleşmesi uyuşmazlıkları, imalat sektöründen doğan mal/hizmet alacakları ve tazminat davalarında temsil sağlanır; asliye hukuk mahkemesi Gaziosmanpaşa Adliyesi'ndedir.",
    metaTitle: "Sultangazi Borçlar Hukuku Avukatı",
    metaDescription:
      "Sultangazi'de kat karşılığı inşaat sözleşmeleri, imalat sektörü alacakları ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Borçlar hukuku kapsamında Sultangazi'deki müvekkillerine sözleşme ve alacak uyuşmazlıklarında danışmanlık veren Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır.",
    highlightCards: [
      { title: "Kat Karşılığı Sözleşmeler", description: "Kentsel dönüşüm kapsamındaki inşaat sözleşmesi uyuşmazlıkları." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "İmalat Sektörü Alacakları", description: "Mal ve hizmet ifasından doğan ticari uyuşmazlıklar." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kentsel dönüşüm kapsamındaki kat karşılığı inşaat sözleşmelerinin ifası veya ihlaline dayalı davalar",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Tekstil, konfeksiyon ve metal-plastik imalat işletmeleri arasındaki mal/hizmet alacaklarına ilişkin uyuşmazlıklar",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Riskli alan ilanının ardından belediye öncülüğünde yürütülen kentsel dönüşüm projelerinin yoğunlaştığı Sultangazi'de, müteahhit ile hak sahipleri arasındaki kat karşılığı inşaat sözleşmelerinin kapsamının ve teslim koşullarının net biçimde belirlenmesi, uygulamada sıkça karşılaşılan uyuşmazlıkları önlemek açısından önem taşımaktadır.",
      "Bu davalar, ilçenin yargı çevresinde bulunduğu Gaziosmanpaşa Adliyesi'nde görülür; ticari nitelikteki bazı alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru zorunlu olabilir.",
    ],
    faqs: [
      { question: "Kat karşılığı inşaatı üstlenen müteahhit işi teslim etmezse ne yapılabilir?", answer: "Sözleşmeden dönme, tazminat veya ifa davası gibi hukuki yollara başvurulabilir." },
      { question: "Kentsel dönüşüm sözleşmesinde hak sahibinin teminatı nedir?", answer: "Sözleşmede kararlaştırılan teminat ipoteği veya banka teminat mektubu gibi güvenceler hak sahibini korur." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Niteliğine göre asliye ticaret mahkemesinde, Gaziosmanpaşa Adliyesi bünyesinde görülür." },
      { question: "Dava öncesi arabuluculuk her zaman şart mı?", answer: "Hayır, yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır." },
      { question: "Zamanaşımına uğramış alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse talep edilemez; ileri sürmezse talep edilebilir." },
    ],
    howToTitle: "Sultangazi'de Alacak Davası Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Delillerin Tespiti", text: "Sözleşme, fatura ve diğer belgelerle alacağın dayanağı ortaya konur." },
      { name: "Ön Koşullar", text: "Gerekiyorsa ihtarname çekilir veya arabuluculuğa başvurulur." },
      { name: "Dava Açılması", text: "Yetkili mahkemede alacak davası açılır." },
      { name: "İcra Aşaması", text: "Kararın kesinleşmesiyle gerekirse icra takibi başlatılır." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat", "ortakligin-giderilmesi-davasi"],
  },
];
