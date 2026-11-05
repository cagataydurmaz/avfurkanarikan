import type { PseoService } from "./types";
import { gaziosmanpasaMiras } from "./miras/gaziosmanpasaMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefon aracılığıyla ulaşın, konunuzu kısaca paylaşın." },
  { name: "Danışmanlık Randevusu", text: "Danışmanlık görüşmesi ücret karşılığı yapılır, hukuki durumunuz değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir." },
  { name: "Temsil ve Süreç Takibi", text: "Mahkeme ve idari merciler nezdinde temsil sağlanır, gelişmeler paylaşılır." },
];

const gaziosmanpasaBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "gaziosmanpasa-avukat",
    name: "Gaziosmanpaşa Avukat",
    heroTitle: "Gaziosmanpaşa Avukat",
    heroSubtitle:
      "Gaziosmanpaşa'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında danışmanlık ve dava takibi hizmeti sunulmaktadır. Sanayi geçmişi Rami ve Eyüp'ten taşınan küçük atölyelere, günümüzde ise yoğun nüfuslu bir yerleşim dokusuna dayanan ilçede hukuki süreçler kendi adliyesi olan Gaziosmanpaşa Adliyesi bünyesinde yürütülmektedir; hizmeti veren avukat Furkan Arıkan İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır.",
    metaTitle: "Gaziosmanpaşa Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Gaziosmanpaşa'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup 2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Cumhuriyet döneminde Taşlıtarla adıyla anılan, 1963'te ilçe statüsü kazanan ve bugün küçük esnaf ile fason üretime dayalı bir ekonomik yapıya sahip olan Gaziosmanpaşa'da ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku dosyalarında danışmanlık ve temsil sağlanmaktadır. Görüşme talepleri WhatsApp hattı veya telefon numarası üzerinden iletilebilir.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturma süreçlerinde müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka uyuşmazlıklarında temsil." },
      { title: "Gayrimenkul Hukuku", description: "Kentsel dönüşüm ve tapu uyuşmazlıklarının takibi." },
      { title: "İş Hukuku", description: "İşçilik alacakları ve işe iade süreçlerinde destek." },
      { title: "İcra Hukuku", description: "Alacak takibi ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "İdari işlemlere karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Esnaf ve KOBİ vergi uyuşmazlıklarının çözümü." },
      { title: "Borçlar Hukuku", description: "Sözleşme ve alacak kaynaklı dava süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Soruşturma ve kovuşturma aşamalarında ceza savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Kentsel dönüşüm ve riskli yapı süreçlerine ilişkin gayrimenkul hukuku desteği",
      "İşe iade ve işçilik alacaklarında iş hukuku danışmanlığı",
      "Alacak tahsilinde icra-iflas hukuku desteği",
      "İdari işlemlere karşı dava süreçleri",
      "Vergi uyuşmazlıklarında itiraz ve dava takibi",
      "Sözleşme kaynaklı borçlar hukuku uyuşmazlıkları",
    ],
    localParagraphs: [
      "12 km²'lik yüzölçümüne karşılık yaklaşık 480 bin kişilik nüfusuyla Gaziosmanpaşa, kilometrekareye düşen kişi sayısı bakımından İstanbul'un en yoğun ilçeleri arasında yer alır; 1963'te Taşlıtarla adı değiştirilerek ilçe statüsü verilmiş, 2008'de Arnavutköy ve Sultangazi'nin ayrılmasıyla bugünkü sınırlarına kavuşmuştur.",
      "İlçedeki hukuki süreçler, Merkez Mahallesi'ndeki Gaziosmanpaşa Adliyesi'nde görülmektedir; 1 Eylül 2025 itibarıyla bu adliyenin yargı çevresi Gaziosmanpaşa'nın yanı sıra Arnavutköy, Eyüpsultan ve Sultangazi'yi de kapsayacak şekilde genişletilmiştir. Vergisel işlemler ise ilçe sınırları içindeki Gaziosmanpaşa Vergi Dairesi Müdürlüğü nezdinde yürütülür.",
    ],
    faqs: [
      { question: "Gaziosmanpaşa'daki davalara hangi adliye bakıyor?", answer: "Gaziosmanpaşa'daki davalara ilçenin kendi adliyesi olan Gaziosmanpaşa Adliyesi bakar. Bu adliyenin yargı çevresi Gaziosmanpaşa, Arnavutköy, Eyüpsultan ve Sultangazi'yi kapsar; çevre 1 Eylül 2025 itibarıyla bu şekilde genişletilmiştir. Vergisel işlemler ise Gaziosmanpaşa Vergi Dairesi Müdürlüğü nezdinde yürütülür." },
      { question: "Randevu nasıl alınır?", answer: "Randevu, WhatsApp veya telefonla iletişime geçilerek alınır. İlk adımda konu kısaca paylaşılır, ardından uygun bir görüşme günü belirlenir. Danışmanlık görüşmesinde hukuki durum değerlendirilir; temsil kararı alınırsa vekalet düzenlenir ve belgeler derlenerek sürece başlanır; mahkeme ve idari merciler nezdindeki işlemler bundan sonra takip edilir." },
      { question: "Hangi hukuk alanlarında hizmet veriliyor?", answer: "Hizmet; ceza, aile, gayrimenkul, iş, icra-iflas, idare, vergi ve borçlar hukuku alanlarında verilmektedir. Bu kapsamda soruşturma ve kovuşturma savunması, boşanma ve velayet davaları, kentsel dönüşüm ve riskli yapı süreçleri, işçilik alacakları, icra takipleri, idari ve vergi davaları ile sözleşme kaynaklı uyuşmazlıklar takip edilir." },
      { question: "Büro Gaziosmanpaşa'da mı yer alıyor?", answer: "Hayır, büro Gaziosmanpaşa'da değil, Beşiktaş/Sinanpaşa'dadır. Gaziosmanpaşa'daki müvekkillere de aynı kapsamda hizmet verilir; görüşmeler talebe göre yüz yüze veya çevrim içi düzenlenebilir. Randevu için WhatsApp veya telefonla iletişim kurulması yeterlidir. Dosyalar Gaziosmanpaşa Adliyesi'nde takip edilir; dosya durumu hakkında bilgi paylaşılır." },
      { question: "Danışmanlık ücreti nasıl belirleniyor?", answer: "Danışmanlık görüşmesi ücret karşılığı yapılır ve ücret dosyanın kapsamına göre değişir. Uyuşmazlığın türü ve gerekli işlemler değerlendirilerek bilgi randevu sırasında paylaşılır. Temsil kararı alınırsa vekalet düzenlenir, belgeler derlenir ve mahkeme ile idari merciler nezdinde süreç takip edilir." },
      { question: "Kentsel dönüşüm sürecinde hukuki destek alınabilir mi?", answer: "Evet, kentsel dönüşüm sürecinde riskli yapı tespiti, kat karşılığı sözleşmeler ve tahliye süreçlerinde danışmanlık sağlanır. Gaziosmanpaşa'da kentsel dönüşüm yoğun biçimde sürdüğünden riskli yapı kararlarına karşı idari dava, kat karşılığı inşaat sözleşmesi incelemesi ve müteahhit uyuşmazlıkları sık gündeme gelir; ilgili belgeler birlikte değerlendirilir." },
      { question: "Görüşmeler yüz yüze mi yapılıyor?", answer: "Görüşmeler talebe göre yüz yüze veya çevrim içi olarak düzenlenebilir. Büro Beşiktaş/Sinanpaşa'dadır; uzaktan görüşmeyi tercih eden Gaziosmanpaşa'daki müvekkiller için çevrim içi seçenek bulunur. İlk iletişim WhatsApp veya telefonla kurulur, görüşmede hukuki durum değerlendirilir ve gerekli belgeler belirlenir." },
      { question: "Gözaltı durumunda ne yapılmalı?", answer: "Gözaltı durumunda vakit kaybetmeden telefon veya WhatsApp üzerinden iletişime geçilmelidir. Gözaltına alınan kişi CMK m.147 ve m.154 uyarınca susma hakkını kullanabilir ve müdafiyle görüşebilir. Tutuklama talebini sulh ceza hakimliği CMK m.100 ve m.101 ölçütlerine göre değerlendirir; ifade öncesinde müdafi yardımı önem taşır." },
      { question: "Dosya sürecine ilişkin bilgi alınabilir mi?", answer: "Evet, dosya sürecine ilişkin bilgi alınabilir. Süreç boyunca duruşma, karar ve idari işlemlerdeki gelişmeler müvekkille düzenli olarak paylaşılır. Temsil sırasında mahkeme ve idari merciler nezdindeki işlemler takip edilir; belirli bir aşamayı öğrenmek isteyen müvekkil WhatsApp veya telefonla iletişime geçerek güncel durumu sorabilir." },
      { question: "Gaziosmanpaşa Adliyesi'ne ulaşım nasıl sağlanır?", answer: "Gaziosmanpaşa Adliyesi'ne M7 metro hattı ve İETT otobüs seferleriyle ulaşım sağlanabilir. Adliye, ilçenin Merkez Mahallesi'nde yer alır. Süreç boyunca gelişmeler müvekkille paylaşıldığından, duruşma ve işlem günlerine göre güzergahı önceden planlamak gecikme riskini azaltır; adliyeye gidişte kimlik ve dosya belgelerinin yanınızda bulunması işlemleri kolaylaştırır." },
    ],
    howToTitle: "Gaziosmanpaşa'da Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Gaziosmanpaşa Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "gaziosmanpasa-bosanma-avukati",
    name: "Gaziosmanpaşa Boşanma Avukatı",
    heroTitle: "Gaziosmanpaşa Boşanma Avukatı",
    heroSubtitle:
      "Aile mahkemesi Gaziosmanpaşa Adliyesi bünyesinde yer aldığından, anlaşmalı ve çekişmeli boşanma davaları, velayet ve nafaka talepleri ilçe sınırları içinde yürütülebilmektedir; süreçte mal rejimi tasfiyesinden çocuğun üstün yararına uygun düzenlemelere kadar temsil sağlanır.",
    metaTitle: "Gaziosmanpaşa Boşanma Avukatı | Velayet",
    metaDescription:
      "Gaziosmanpaşa'da anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "Aile hukuku alanında Gaziosmanpaşa'daki müvekkillere boşanma, velayet ve nafaka konularında temsil sağlanmaktadır. Konut yoğunluğunun yüksek olduğu ilçede mal rejimi tasfiyeleri çoğunlukla apartman dairesi niteliğindeki taşınmazlar üzerinden yürütülür. Furkan Arıkan, 2019 MEF Üniversitesi Hukuk Fakültesi mezunu olup İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır.",
    highlightCards: [
      { title: "Anlaşmalı Süreç", description: "Protokolün hazırlanması ve tek duruşmalık takip." },
      { title: "Çekişmeli Süreç", description: "Kusur ve tazminat iddialarının delillendirilmesi." },
      { title: "Velayet", description: "Çocuğun üstün yararına uygun düzenleme talepleri." },
      { title: "Mal Rejimi Tasfiyesi", description: "Konut ve diğer taşınırların paylaşımı." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolünün hazırlanması ve duruşma temsili",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet tesisi ve velayet değişikliği talepleri",
      "Nafaka artırımı, azaltılması ve kaldırılması davaları",
      "Konut ve diğer aile malvarlığına ilişkin mal rejimi tasfiyesi",
      "Boşanmaya bağlı maddi/manevi tazminat talepleri",
    ],
    localParagraphs: [
      "Nüfus yoğunluğunun yüksek olduğu Gaziosmanpaşa'da aileler çoğunlukla apartman dairelerinde ikamet etmektedir; bu nedenle boşanma sürecindeki mal rejimi tasfiyelerinde taşınmazın niteliği ve varsa üzerindeki ipotek/kredi yükü değerlendirmenin merkezinde yer alır.",
      "Boşanma, velayet ve nafaka talepleri Gaziosmanpaşa Adliyesi'ndeki aile mahkemesinde görülür. Anlaşmalı süreçte protokolün eksiksizliği, çekişmeli süreçte ise delillerin yeterliliği sonucu belirleyen unsurlardır.",
    ],
    faqs: [
      { question: "Boşanma davası hangi adliyede görülür?", answer: "Boşanma davası Gaziosmanpaşa Adliyesi'ndeki aile mahkemesinde görülür. Boşanma, velayet ve nafaka talepleri bu mahkemede ele alınır; yetkili mahkeme TMK m.168'e göre belirlenir. Anlaşmalı süreçte protokolün eksiksizliği, çekişmeli süreçte ise delillerin yeterliliği sonucu belirleyen unsurlardır; bu nedenle dilekçe hazırlığında belgeler baştan derlenir." },
      { question: "Velayet kararında çocuğun görüşü dikkate alınır mı?", answer: "Çocuk yeterli olgunluğa ulaşmışsa görüşü değerlendirmeye katılabilir. Velayet düzenlemesinde belirleyici ölçüt çocuğun üstün yararıdır; mahkeme çocuğun görüşünü bu ölçütle birlikte değerlendirir. Görüş tek başına belirleyici sayılmaz, bakım ve eğitim koşulları gibi diğer unsurlarla birlikte ele alınır." },
      { question: "Nafaka miktarı hangi kriterlere göre belirlenir?", answer: "Nafaka miktarı, tarafların gelir düzeyi ve ihtiyaçları birlikte değerlendirilerek belirlenir. Mahkeme, nafaka verecek tarafın ödeme gücünü ve alacaklı tarafın ihtiyacını gözetir. Nafakanın artırılması, azaltılması ve kaldırılması için ayrı davalar açılabilir; koşullar değiştiğinde bu yönde talepte bulunmak mümkündür." },
      { question: "Kredili bir konut mal paylaşımını nasıl etkiler?", answer: "Konut üzerindeki kredi veya ipotek yükü, mal rejimi tasfiyesinde değerleme ve paylaşım hesabında dikkate alınır. Gaziosmanpaşa'da aileler çoğunlukla apartman dairelerinde ikamet ettiğinden taşınmazın niteliği ve üzerindeki yük değerlendirmenin merkezindedir. Tapu kaydı, kredi bakiyesi ve değerleme belgeleri tasfiyenin dayanağını oluşturur." },
      { question: "Dava açıldıktan sonra taraflar barışabilir mi?", answer: "Evet, dava açıldıktan sonra taraflar barışabilir; taraflar anlaşırsa dava geri çekilebilir. Anlaşmalı boşanma yolu seçilirse TMK m.166/3 uyarınca evliliğin en az bir yıl sürmüş olması ve eşlerin duruşmada birlikte beyanda bulunması gerekir. Hangi yolun uygun olduğu dosyadaki taleplere göre değerlendirilir." },
    ],
    howToTitle: "Gaziosmanpaşa'da Boşanma Süreci Nasıl İlerler?",
    howToSteps: [
      { name: "İhtiyaç Analizi", text: "Velayet, nafaka ve mal rejimi talepleri belirlenir." },
      { name: "Dilekçe Hazırlığı", text: "Duruma uygun dava dilekçesi veya protokol hazırlanır." },
      { name: "Dava Açılışı", text: "Yetkili aile mahkemesine başvuru yapılır." },
      { name: "Sonuç", text: "Duruşma sonrasında karar açıklanır." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "ziynet-esyasi-davasi", "bosanmada-nafaka-turleri"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "gaziosmanpasa-ceza-avukati",
    name: "Gaziosmanpaşa Ceza Avukatı",
    heroTitle: "Gaziosmanpaşa Ceza Avukatı",
    heroSubtitle:
      "Soruşturma aşamasındaki ifade ve gözaltı süreçlerinden kovuşturma aşamasındaki duruşmalara kadar müdafilik hizmeti sağlanır. Yeni Adalet Sarayı'nda ağır ceza mahkemeleri de bulunduğundan, ilçedeki ceza yargılamalarının büyük bölümü Gaziosmanpaşa Adliyesi bünyesinde yürütülebilmektedir.",
    metaTitle: "Gaziosmanpaşa Ceza Avukatı | Müdafilik",
    metaDescription:
      "Gaziosmanpaşa'da soruşturma, kovuşturma, tutukluluğa itiraz ve ticari ilişkilerden doğan ceza uyuşmazlıklarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Ceza yargılamasının soruşturma, kovuşturma ve kanun yolu aşamalarında Gaziosmanpaşa'daki müvekkillere müdafilik hizmeti sağlanmaktadır; hizmeti sunan Furkan Arıkan İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı olup 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Küçük esnaf ve fason üretimin ağırlıkta olduğu ilçe ekonomisinde, ticari ilişkilerden kaynaklanan bazı uyuşmazlıklar ceza yargılamasına da konu olabilmektedir.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Ticari İlişkili Suçlar", description: "Çek, senet ve dolandırıcılık iddialarına ilişkin savunma." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde şüpheliye eşlik edilmesi",
      "Soruşturma dosyasının incelenmesi ve itiraz dilekçelerinin hazırlanması",
      "Tutukluluk kararlarına karşı itiraz süreçlerinin yürütülmesi",
      "Duruşma aşamasında sanık veya mağdur vekilliği",
      "Çek, senet ve ticari ilişkilerden doğan dolandırıcılık/güveni kötüye kullanma iddialarında savunma",
      "Uzlaşma sürecinin yürütülmesi",
    ],
    localParagraphs: [
      "Küçük esnaf ve fason üretime dayalı yoğun bir ticari doku barındıran Gaziosmanpaşa'da, çek-senet ilişkilerinden ve ticari uyuşmazlıklardan kaynaklanan ceza şikayetleri diğer suç tiplerinin yanında sık karşılaşılan bir gündem maddesidir.",
      "Genel ceza davalarının yanı sıra ağır ceza mahkemeleri de Gaziosmanpaşa Adliyesi bünyesinde bulunduğundan, ilçedeki yargılamaların büyük kısmı başka bir adliyeye gerek kalmadan burada sonuçlandırılabilmektedir.",
    ],
    faqs: [
      { question: "Gaziosmanpaşa'da bir ceza davası hangi adliyede görülür?", answer: "Ağır ceza mahkemeleri dahil olmak üzere ceza davaları Gaziosmanpaşa Adliyesi'nde görülür. Bu nedenle ilçedeki yargılamaların büyük kısmı başka bir adliyeye gerek kalmadan burada sonuçlandırılabilir. Soruşturma aşamasında sulh ceza hakimliği işlemleri de adliye bünyesinde yürür; dosyanın hangi mahkemeye düşeceği suçun niteliğine bağlıdır." },
      { question: "Müdafi olmadan ifade verilebilir mi?", answer: "Müdafi olmadan ifade verilebilir; ancak müdafi eşliğinde ifade vermek önerilir. Şüpheli CMK m.147 uyarınca susma hakkını kullanabilir ve gözaltının başladığı andan itibaren müdafi ile görüşme hakkına sahiptir. İfadenin ilk aşamada müdafi eşliğinde verilmesi, yargılamanın ilerleyen safhalarını etkileyebilir." },
      { question: "Çek veya senetten kaynaklanan bir uyuşmazlıkta ceza şikayeti mümkün mü?", answer: "Somut olayın niteliğine göre karşılıksız çek veya dolandırıcılık gibi suç tipleri gündeme gelebilir. Çek ve senet ilişkilerinden doğan ticari uyuşmazlıklar bazen ceza şikayetine de konu olabilir; olayın hukuki niteliği ayrıca değerlendirilir. Hangi yolun izleneceği çek, senet ve yazışma gibi belgelere bakılarak belirlenir." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, kovuşturmaya yer olmadığı kararına karşı kararın tebliğinden itibaren 15 gün içinde sulh ceza hakimliğine itiraz edilebilir. Mağdur veya suçtan zarar gören, savcılığın soruşturmayı sonlandırmasına karşı bu yola başvurur. İtiraz dilekçesinde dosyadaki eksik delil ve araştırma talepleri somut olarak gösterilmelidir." },
      { question: "Uzlaşma sağlanamazsa süreç nasıl devam eder?", answer: "Uzlaşma sağlanamazsa yargılamaya kaldığı aşamadan devam edilir. Uzlaştırma yalnızca kanunda sayılan suçlarda uygulanır (CMK m.253) ve taraflar anlaşırsa kamu davası açılmaz. Anlaşma olmazsa soruşturma veya kovuşturma sürer; bu nedenle teklif geldiğinde dosyadaki delil durumu değerlendirilerek karar verilmelidir." },
    ],
    howToTitle: "Gaziosmanpaşa'da Ceza Yargılaması Nasıl İşler?",
    howToSteps: [
      { name: "Olay Bildirimi", text: "Şikayet, ihbar veya resen soruşturma başlar." },
      { name: "Soruşturma Aşaması", text: "Deliller toplanır, ifadeler alınır." },
      { name: "Dava Açılması", text: "İddianamenin kabulüyle kovuşturma başlar." },
      { name: "Temyiz/İstinaf", text: "Karara karşı üst yargı yoluna başvurulabilir." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "gaziosmanpasa-gayrimenkul-avukati",
    name: "Gaziosmanpaşa Gayrimenkul Avukatı",
    heroTitle: "Gaziosmanpaşa Gayrimenkul Avukatı",
    heroSubtitle:
      "Eski gecekondu dokusunun kentsel dönüşümle planlı yapılaşmaya dönüştüğü Gaziosmanpaşa'da, riskli yapı tespiti, kat karşılığı inşaat sözleşmeleri ve tapu uyuşmazlıklarında hukuki destek sağlanır; davalar Gaziosmanpaşa Adliyesi'nde görülür.",
    metaTitle: "Gaziosmanpaşa Gayrimenkul Avukatı | Tapu",
    metaDescription:
      "Gaziosmanpaşa'da kentsel dönüşüm, kat karşılığı inşaat sözleşmesi, tapu iptali ve kira uyuşmazlıklarında gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Kentsel dönüşüm süreçleri, kat karşılığı inşaat sözleşmeleri ve tapu davalarında Gaziosmanpaşa'daki müvekkillere danışmanlık verilmektedir. Furkan Arıkan İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukat olup 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Kentsel Dönüşüm", description: "6306 sayılı Kanun kapsamında riskli yapı süreçleri." },
      { title: "Kat Karşılığı Sözleşmeler", description: "Müteahhit ile hak sahibi arasındaki uyuşmazlıklar." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
      { title: "Ortaklığın Giderilmesi", description: "Hisseli taşınmazların paylaştırılması." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Riskli yapı tespitine ve kentsel dönüşüm sürecine ilişkin danışmanlık",
      "Kat karşılığı inşaat sözleşmelerinin hazırlanması ve incelenmesi",
      "Müteahhidin edimini yerine getirmemesi halinde açılacak davalar",
      "Tapu iptali ve tescil davalarının açılması",
      "Hisseli taşınmazlarda ortaklığın giderilmesi (izale-i şüyu) davaları",
      "Kira bedeli tespiti ve uyarlama davaları",
    ],
    localParagraphs: [
      "Geçmişte büyük ölçüde gecekondu yerleşimine sahne olan Gaziosmanpaşa, son yıllarda kentsel dönüşüm kapsamında yoğun bir yeniden yapılanma sürecinden geçmektedir; bu süreçte kat karşılığı inşaat sözleşmelerinin ve hak sahipliği paylarının doğru kurgulanması uyuşmazlıkları önlemek bakımından önem taşır.",
      "Gayrimenkul uyuşmazlıkları, niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Gaziosmanpaşa Adliyesi bünyesinde görülmektedir.",
    ],
    faqs: [
      { question: "Riskli yapı tespitine itiraz edilebilir mi?", answer: "Evet, riskli yapı tespitinin dayandığı teknik rapora karşı süresi içinde itiraz yoluna gidilebilir. Karara karşı idari yargı yolu da açıktır; dava açma süresi genel kural olarak tebliğ veya öğrenme tarihinden itibaren 60 gündür (İYUK m.7). Raporun kapsamı ve tebliğ tarihi dosyada birlikte incelenir." },
      { question: "Kat karşılığı sözleşmede müteahhit işi bırakırsa ne olur?", answer: "Müteahhit işi bırakırsa sözleşmenin feshi, tazminat veya ifa davası gibi hukuki yollara başvurulabilir. Kat karşılığı inşaat sözleşmesindeki edimler, teslim tarihleri ve hak sahipliği payları dosyada incelenir. Hangi yolun seçileceği sözleşme hükümlerine ve müteahhidin ihlalinin niteliğine bağlıdır." },
      { question: "Gaziosmanpaşa'da gayrimenkul davası hangi mahkemede görülür?", answer: "Gaziosmanpaşa'daki gayrimenkul davaları niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde, Gaziosmanpaşa Adliyesi bünyesinde görülür. Kira ve tahliye uyuşmazlıkları ile tapu iptali ve tescil davaları farklı mahkemelerin görev alanına girebileceğinden, dava açılmadan önce uyuşmazlığın niteliği belirlenir." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Tapu iptal davası, hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi tarafından açılabilir. Davada hatalı veya haksız yapılan tescilin iptali ve gerçek hak sahibi adına tescil talep edilir. Dayanak belgeler, tapu kayıtları ve tescile ilişkin işlem geçmişi dosyanın temelini oluşturur." },
      { question: "Hisseli bir taşınmaz nasıl paylaştırılır?", answer: "Hisseli bir taşınmazda taraflar anlaşamazsa ortaklığın giderilmesi davası yoluyla satış veya aynen taksim yapılabilir. Dava, hisseli taşınmazlarda ortaklığın giderilmesi (izale-i şüyu) kapsamında açılır. Tapu kaydı, hisse oranları ve taşınmazın bölünüp bölünemeyeceği, hangi yolun uygulanacağını belirler." },
    ],
    howToTitle: "Gaziosmanpaşa'da Kentsel Dönüşüm Uyuşmazlığı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Belge İncelemesi", text: "Tapu kaydı ve riskli yapı raporu incelenir." },
      { name: "Uyuşmazlığın Netleştirilmesi", text: "Talep ve dayanak deliller belirlenir." },
      { name: "Dava/İtiraz Süreci", text: "Yetkili merci veya mahkemeye başvurulur." },
      { name: "Sonuçlanma", text: "Karar veya bilirkişi raporu doğrultusunda süreç tamamlanır." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "gaziosmanpasa-icra-avukati",
    name: "Gaziosmanpaşa İcra Avukatı",
    heroTitle: "Gaziosmanpaşa İcra Avukatı",
    heroSubtitle:
      "Küçük esnaf ve fason üretim ilişkilerinin yoğun olduğu Gaziosmanpaşa'da, çek-senet kaynaklı alacakların tahsili amacıyla icra takibi başlatılması, ödeme emrine itiraz ve haciz süreçlerinde temsil sağlanır.",
    metaTitle: "Gaziosmanpaşa İcra Avukatı | Takip ve Haciz",
    metaDescription:
      "Gaziosmanpaşa'da icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İcra ve iflas hukuku kapsamında Gaziosmanpaşa'daki esnaf, işletme sahibi ve bireysel alacaklı/borçlu taraflara danışmanlık sağlanmaktadır; hizmeti veren Furkan Arıkan 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır.",
    highlightCards: [
      { title: "Takip Süreci", description: "İlamlı veya ilamsız icra takibinin başlatılması." },
      { title: "İtiraz Süreçleri", description: "Borca ve imzaya itiraz, itirazın iptali davaları." },
      { title: "Haciz İşlemleri", description: "Menkul ve gayrimenkul üzerinde haciz uygulanması." },
      { title: "Esnaf Alacakları", description: "Çek ve senede dayalı ticari alacakların takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Alacağa dayanak belge veya ilam üzerinden takip dosyası açılması",
      "Ödeme emrine itiraz süreçlerinin yürütülmesi",
      "İtirazın iptali veya kaldırılması davaları",
      "Taşınır ve taşınmaz mal üzerinde haciz uygulanması",
      "Çek ve senede dayalı esnaf/ticari alacaklarının takibi",
      "Mali sıkıntı yaşayan borçlular için yeniden yapılandırma danışmanlığı",
    ],
    localParagraphs: [
      "Ekonomisinin önemli bir bölümü küçük esnaf ve fason üretime dayanan Gaziosmanpaşa'da, mal/hizmet teslimi karşılığında düzenlenen çek ve senetlerin tahsil edilememesi icra takiplerinin sık görülen nedenlerinden biridir.",
      "İcra takiplerine ilişkin uyuşmazlıklar Gaziosmanpaşa Adliyesi'ndeki icra daireleri ve icra hukuk mahkemesi nezdinde yürütülür; borçlunun ilçede yerleşik olduğu takiplerde yetkili icra dairesi kural olarak ikametgah esasına göre belirlenir.",
    ],
    faqs: [
      { question: "İcra takibi hangi belgelerle başlatılabilir?", answer: "İcra takibi; sözleşme, çek, senet, fatura veya mahkeme ilamı gibi belgelerle başlatılabilir. Belge türü takibin yolunu belirler; ilamlı takip ve ilamsız takip farklı usullere tabidir. Çek ve senede dayalı esnaf alacaklarında dayanak belgenin ve teslim kayıtlarının eksiksiz sunulması alacağın ispatını kolaylaştırır." },
      { question: "Ödeme emrine itiraz süresi ne kadardır?", answer: "Ödeme emrine itiraz süresi tebliğ tarihinden itibaren 7 gündür (İİK m.62). Borçlu bu süre içinde itiraz ederse takip durur. Alacaklı itirazın iptali veya kaldırılması yoluna başvurabilir; süre kaçırılırsa takip kesinleşir ve haciz aşamasına geçilebilir. Bu nedenle tebliğ tarihinin doğru belirlenmesi önemlidir." },
      { question: "Karşılıksız çek nedeniyle hangi yollara başvurulabilir?", answer: "Karşılıksız çek nedeniyle hem icra takibi hem de kanunda öngörülen şartlarla ceza şikayeti yoluna gidilebilir. Çekin dayandığı mal veya hizmet teslimi ve çekin tahsil edilememesi icra takibinin dayanağını oluşturur. Hangi yolun veya yolların birlikte izleneceği, çek ve teslim belgelerine göre değerlendirilir." },
      { question: "Haciz hangi mallara uygulanabilir?", answer: "Haciz, kanunen haczi caiz olan taşınır ve taşınmaz mallara uygulanabilir. Haciz, takibin kesinleşmesinden sonra talep edilir; ardından satış yoluyla tahsilat işlemleri sürdürülür. Hangi malın haczedileceği borçlunun malvarlığına göre belirlenir; ihale ve satışa ilişkin işlemler icra daireleri ve icra hukuk mahkemesi nezdinde yürütülür." },
      { question: "Borçlu ödeme yapmazsa süreç nasıl ilerler?", answer: "Borçlu ödeme yapmazsa haciz ve gerekirse satış yoluyla tahsilat işlemleri sürdürülür. Takip kesinleşmişse haciz talep edilir, haczedilen mal satışa çıkarılır ve bedel alacaklıya aktarılır. Borçlu itiraz ederse süreç itirazın iptali veya kaldırılması davasına yönelir; mali sıkıntıdaki borçlular için konkordato da gündeme gelebilir." },
    ],
    howToTitle: "Gaziosmanpaşa'da İcra Takibi Hangi Aşamalardan Oluşur?",
    howToSteps: [
      { name: "Belge Derlemesi", text: "Alacağa dayanak oluşturan belgeler bir araya getirilir." },
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
    urlSlug: "gaziosmanpasa-idare-avukati",
    name: "Gaziosmanpaşa İdare Avukatı",
    heroTitle: "Gaziosmanpaşa İdare Avukatı",
    heroSubtitle:
      "Belediye ruhsat işlemleri, riskli yapı/kentsel dönüşüm kararları ve idari para cezalarına karşı iptal ve tam yargı davalarında temsil sağlanır; bu davalara İstanbul idare mahkemelerinde bakılır.",
    metaTitle: "Gaziosmanpaşa İdare Avukatı | İptal Davası",
    metaDescription:
      "Gaziosmanpaşa'da idari işlemlerin iptali, kentsel dönüşüm kararlarına itiraz ve tazminat davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "İdari işlemlerin iptali ve tam yargı davalarında Gaziosmanpaşa'daki müvekkillere danışmanlık sağlanmaktadır. Furkan Arıkan, MEF Üniversitesi Hukuk Fakültesi'nin 2019 mezunu olup İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır.",
    highlightCards: [
      { title: "İptal Davaları", description: "Hukuka aykırı idari kararlara karşı dava süreci." },
      { title: "Kentsel Dönüşüm İşlemleri", description: "Riskli yapı tespiti ve yıkım kararlarına itiraz." },
      { title: "Ruhsat Uyuşmazlıkları", description: "Belediye ruhsat ret/iptal kararlarına karşı dava." },
      { title: "İdari Para Cezaları", description: "Belediye ve diğer kurumların cezalarına itiraz." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Riskli yapı tespiti ve kentsel dönüşüm işlemlerine karşı idari dava süreçleri",
      "Belediye ruhsat işlemlerine itiraz edilmesi",
      "İmar planı ve uygulama işlemlerine karşı iptal davası açılması",
      "İdarenin işlem veya eyleminden kaynaklanan zararlar için tazminat talebi",
      "İdari para cezalarına karşı dava süreçleri",
      "Kamu görevlisi özlük haklarına ilişkin uyuşmazlıklar",
    ],
    localParagraphs: [
      "Kentsel dönüşümün yoğun biçimde yaşandığı Gaziosmanpaşa'da, riskli yapı tespitine ve buna bağlı yıkım kararlarına karşı açılan idari davalar diğer ilçelere kıyasla daha sık gündeme gelmektedir.",
      "Bu davalar Gaziosmanpaşa'nın bağlı bulunduğu adliye teşkilatından bağımsız olarak İstanbul idare mahkemelerinde görülür; dava açma süresi genel kural olarak işlemin tebliğ veya ilan tarihinden itibaren 60 gündür.",
    ],
    faqs: [
      { question: "Riskli yapı kararına karşı hangi sürede dava açılmalı?", answer: "Riskli yapı kararına karşı tebliğ veya öğrenme tarihinden itibaren 60 gün içinde idare mahkemesinde dava açılabilir (İYUK m.7). Davada kararın dayanağı olan tespit ve tebliğ usulü incelenir. Riskli yapı tespiti ve kentsel dönüşüm işlemlerine karşı idari dava süreçleri hizmet kapsamındadır; tebliğ tarihinin takibi önemlidir." },
      { question: "Ruhsat başvurusunun reddine itiraz edilebilir mi?", answer: "Evet, ret kararına karşı idare mahkemesinde iptal davası açılabilir. Dava açma süresi genel kural olarak işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Belediye ruhsat işlemlerine itiraz edilirken ret gerekçesi, başvuru dosyası ve ilgili mevzuata uygunluk birlikte incelenir." },
      { question: "İdari para cezasına itiraz nereye yapılır?", answer: "İdari para cezasına karşı yasal süresi içinde idare mahkemesine başvurularak itiraz edilebilir. Genel kural olarak dava açma süresi işlemin tebliğinden itibaren 60 gündür (İYUK m.7). Cezanın dayanağı, tebliğ tarihi ve usul eksiklikleri incelenerek iptal talebi hazırlanır; cezayı veren kurum ve dayanak mevzuata göre başvuru yolu değişebilir." },
      { question: "İdarenin bir işleminden zarar görenler ne yapabilir?", answer: "İdarenin bir işleminden zarar görenler, tam yargı davası yoluyla uğranılan zararın tazminini talep edebilir. Tazminat talebi idarenin işlem veya eyleminden kaynaklanan zararlar için ileri sürülür. Davada zarar ile idarenin işlemi arasındaki bağ belgelerle gösterilmelidir; süreler işlemin niteliğine göre değişebileceğinden başvuru süreleri erkenden kontrol edilmelidir." },
      { question: "İmar planına itiraz süreci nasıl işler?", answer: "İmar planına itiraz sürecinde önce idari başvuru yapılır; sonuçsuz kalırsa idare mahkemesinde dava yoluna gidilebilir. Genel idari davalarda dava açma süresi 60 gündür (İYUK m.7), ancak planlara ilişkin süreler özel hükümlere tabi olabileceğinden ilan veya tebliğ tarihi dikkatle belirlenmelidir. İmar planı ve uygulama işlemlerine karşı iptal davası açılabilir." },
    ],
    howToTitle: "Gaziosmanpaşa'da İdari İptal Davası Nasıl Açılır?",
    howToSteps: [
      { name: "İnceleme", text: "İptali istenen işlem ve tebliğ/ilan tarihi belirlenir." },
      { name: "Süre Takibi", text: "60 günlük yasal süre hesaplanır." },
      { name: "Dilekçe Hazırlığı", text: "Talep ve gerekçeler dilekçeye işlenir." },
      { name: "Yargılama", text: "İdare mahkemesi dosyayı inceleyerek karar verir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: ["idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "gaziosmanpasa-is-hukuku-avukati",
    name: "Gaziosmanpaşa İş Hukuku Avukatı",
    heroTitle: "Gaziosmanpaşa İş Hukuku Avukatı",
    heroSubtitle:
      "Küçük ölçekli atölye ve imalathanelerin yoğun olduğu Gaziosmanpaşa'da, kıdem-ihbar tazminatı, işe iade ve fazla mesai gibi işçilik alacaklarına ilişkin süreçlerde temsil sağlanır.",
    metaTitle: "Gaziosmanpaşa İş Hukuku Avukatı | İşe İade",
    metaDescription:
      "Gaziosmanpaşa'da kıdem-ihbar tazminatı, işe iade davası ve işçilik alacaklarına ilişkin uyuşmazlıklarda avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "İş hukuku kapsamında Gaziosmanpaşa'daki çalışanlara ve küçük ölçekli işletme sahiplerine danışmanlık verilmektedir; danışmanlığı yürüten Furkan Arıkan İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Tazminat Süreçleri", description: "Haksız fesihte kıdem ve ihbar tazminatı takibi." },
      { title: "İşe İade", description: "İş güvencesi kapsamında işe iade davası." },
      { title: "Ücret Alacakları", description: "Fazla mesai ve diğer işçilik alacaklarının tahsili." },
      { title: "Atölye/İmalathane Çalışanları", description: "Kayıt dışı çalışmaya bağlı ispat sorunlarının aşılması." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Haksız fesih halinde kıdem ve ihbar tazminatı davaları",
      "İşe iade davası öncesi zorunlu arabuluculuk süreci",
      "Kayıt dışı veya eksik bildirimli çalışmaya bağlı işçilik alacaklarının ispatı ve tahsili",
      "Fazla mesai, hafta tatili ve yıllık izin ücreti alacaklarının takibi",
      "İş sözleşmesi ve ibraname metinlerinin hukuki incelemesi",
      "İş kazasından doğan tazminat taleplerinin takibi",
    ],
    localParagraphs: [
      "Küçük esnaf, imalathane ve fason üretim atölyelerinin yoğun olduğu Gaziosmanpaşa'da, kayıt dışı veya eksik bildirimli çalışmadan kaynaklanan işçilik alacağı uyuşmazlıkları öne çıkan konular arasındadır.",
      "Dava öncesinde işe iade ve işçilik alacaklarına ilişkin taleplerde arabuluculuğa başvurulması yasal bir zorunluluktur; arabuluculukta anlaşma sağlanamazsa süreç dava yoluyla devam eder. Yargı çevresi düzenlemelerindeki güncellemeler nedeniyle başvuru öncesinde yetkili iş mahkemesinin teyit edilmesi önerilir.",
    ],
    faqs: [
      { question: "Kayıt dışı çalışan bir işçi kıdem tazminatı talep edebilir mi?", answer: "Evet, kayıt dışı çalışan bir işçi, çalışmanın tanık beyanı ve ödeme kayıtları gibi delillerle ispatlanması halinde kıdem tazminatı talep edebilir. Kayıt dışı veya eksik bildirimli çalışmaya bağlı işçilik alacaklarının ispatı ve tahsili hizmet kapsamındadır. Çalışma süresini ve ücreti gösteren belgeler erkenden derlenmelidir." },
      { question: "İşe iade talebi öncesi hangi adım zorunludur?", answer: "Dava açılmadan önce arabuluculuğa başvurulması zorunludur. Arabuluculuk başvurusu fesihten itibaren 1 ay içinde yapılır; anlaşma sağlanamazsa son tutanaktan itibaren 2 hafta içinde dava açılır (İş K. m.18: 30 işçi ve 6 ay kıdem koşulu). Süreçte arabuluculuk son tutanağının tarihinin takibi önem taşır." },
      { question: "Gaziosmanpaşa'da iş mahkemesi süreci hangi adliyede yürütülür?", answer: "Yargı çevresi düzenlemeleri zaman zaman güncellenebildiğinden, başvuru öncesinde dosyanın açılacağı adliye ayrıca teyit edilir. Gaziosmanpaşa Adliyesi'nin yargı çevresi 1 Eylül 2025 itibarıyla Arnavutköy, Eyüpsultan ve Sultangazi'yi de kapsayacak şekilde genişletilmiştir. Arabuluculukta anlaşma sağlanamazsa işe iade ve işçilik alacağı davaları iş mahkemesinde görülür." },
      { question: "Fazla mesai alacağı nasıl ispatlanır?", answer: "Fazla mesai alacağı puantaj kayıtları, bordro ve tanık beyanıyla ispat edilebilir. Fazla mesai, hafta tatili ve yıllık izin ücreti alacaklarının takibinde çalışma saatlerini gösteren belgeler önem taşır. Alacağın tahsili için önce arabuluculuğa başvurulur; anlaşma sağlanamazsa iş mahkemesinde dava açılabilir." },
      { question: "İş kazası sonrası hangi tazminatlar talep edilebilir?", answer: "İş kazası sonrasında koşullara göre maddi ve manevi tazminat birlikte talep edilebilir. İş kazasından doğan tazminat talepleri iş hukuku kapsamında takip edilir. Kaza tutanağı, sağlık raporları ve çalışma kayıtları olayın işle ilişkisini ve zararın kapsamını göstermek bakımından önem taşır; talep bu belgelerle hazırlanır." },
    ],
    howToTitle: "Gaziosmanpaşa'da İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Fesih Değerlendirmesi", text: "İşten çıkarma gerekçesi ve usulü incelenir." },
      { name: "Arabulucuya Başvuru", text: "Yasal süre içinde arabuluculuk sürecine başlanır." },
      { name: "Dava Süreci", text: "Anlaşma sağlanamazsa iş mahkemesinde dava açılır." },
      { name: "Sonuç", text: "Mahkeme kararı doğrultusunda işlem yapılır." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "ise-iade-davasi", "giydirilmis-ucret-kavrami"],
  },

  // ─────────────────────────── KİRA-TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "gaziosmanpasa-kira-tahliye-avukati",
    name: "Gaziosmanpaşa Kira ve Tahliye Avukatı",
    heroTitle: "Gaziosmanpaşa Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Yüksek nüfus yoğunluğu nedeniyle kiracı oranının da yüksek olduğu Gaziosmanpaşa'da, konut tahliyesi, riskli yapı nedeniyle boşaltma ve kira bedeli tespiti süreçlerinde destek sağlanır.",
    metaTitle: "Gaziosmanpaşa Kira ve Tahliye Avukatı",
    metaDescription:
      "Gaziosmanpaşa'da kiracı tahliyesi, riskli yapı nedeniyle boşaltma ve kira bedeli tespiti süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Kira hukuku alanında Gaziosmanpaşa'daki kiraya verenlere ve kiracılara danışmanlık verilmektedir. 2019 MEF Üniversitesi Hukuk Fakültesi mezunu olan Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır.",
    highlightCards: [
      { title: "Konut Tahliyesi", description: "İhtiyaç, temerrüt ve taahhüde dayalı tahliye süreçleri." },
      { title: "Riskli Yapı Tahliyesi", description: "Kentsel dönüşüm kapsamında boşaltma süreçlerine destek." },
      { title: "Bedel Tespiti", description: "Güncel piyasa şartlarına göre kira bedeli belirlenmesi." },
      { title: "Sözleşme Denetimi", description: "Kira kontratının hazırlanması ve risk analizi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İhtiyaç nedeniyle açılan konut tahliyesi davaları",
      "Taahhütnameye dayalı icra yoluyla tahliye işlemleri",
      "Kira bedelinin ödenmemesi nedeniyle tahliye talebi",
      "Riskli yapı tespiti sonrası kiracının boşaltılmasına ilişkin süreçler",
      "Rayiç kira bedelinin tespiti ve uyarlanması",
      "Kira sözleşmesinin feshinden doğan tazminat talepleri",
    ],
    localParagraphs: [
      "12 km²'lik alanda yaklaşık 480 bin kişinin yaşadığı Gaziosmanpaşa'da konutların önemli bir bölümü kiracılar tarafından kullanılmaktadır; bu yoğunluk kira bedeli ve tahliye uyuşmazlıklarının sıklıkla gündeme gelmesine yol açmaktadır.",
      "Kentsel dönüşüm kapsamında riskli yapı tespiti yapılan binalarda kiracının belirli bir süre içinde taşınmazı boşaltması gerekebilir; bu süreçte kiracı ile kiraya veren arasındaki hak ve yükümlülüklerin netleştirilmesi uyuşmazlıkları azaltır. Tahliye davalarına Gaziosmanpaşa Adliyesi bünyesindeki sulh hukuk mahkemesinde bakılır.",
    ],
    faqs: [
      { question: "Kiracı hangi hallerde tahliye edilebilir?", answer: "Kiracı; kira borcunun ödenmemesi, geçerli bir taahhüt veya ihtiyaç nedeniyle tahliye edilebilir. Kira borcunda ödeme için verilen 30 günlük süre sonunda ödeme yapılmazsa tahliye talep edilebilir (TBK m.315). Taahhütnameye dayalı tahliye icra yoluyla, ihtiyaç nedeniyle tahliye ise dava yoluyla istenir." },
      { question: "Riskli yapı tespiti yapılan binada kiracı ne yapmalı?", answer: "Riskli yapı tespiti yapılan binada kiracının kanunda öngörülen süre içinde taşınmazı boşaltması gerekir; bu süreçte kiraya verenle olan hak ve yükümlülükler ayrıca değerlendirilir. Kiracı ile kiraya veren arasındaki hak ve yükümlülüklerin netleştirilmesi uyuşmazlıkları azaltır. Tahliye ile ilgili davalara Gaziosmanpaşa Adliyesi bünyesindeki sulh hukuk mahkemesinde bakılır." },
      { question: "Gaziosmanpaşa'da tahliye davası ne kadar sürer?", answer: "Tahliye davasının süresi dosyanın niteliğine göre değişir; genel olarak birkaç aydan bir yılı aşkın bir süreye kadar sürebilir. Sürenin uzayıp kısalması tahliye sebebine ve itirazların niteliğine bağlıdır. Taahhütnameye dayalı icra yoluyla tahliye ise mahkeme sürecinden ayrı yürür; davalara Gaziosmanpaşa Adliyesi bünyesindeki sulh hukuk mahkemesinde bakılır." },
      { question: "Rayiç bedel tespiti ne zaman istenir?", answer: "Rayiç bedel tespiti, mevcut kira bedeli piyasa koşullarının gerisinde kaldığında talep edilebilir. Mahkeme, benzer taşınmazların kira bedellerini ve taşınmazın özelliklerini dikkate alarak bedeli belirler. Kira bedelinin tespiti ve uyarlanması davaları sulh hukuk mahkemelerinde görülür; kiraya verenler ve kiracılar bu yola başvurabilir." },
      { question: "Taahhütnameyle tahliye için mahkemeye gitmek gerekir mi?", answer: "Hayır, geçerli bir taahhütname ile mahkemeye gitmeden doğrudan icra dairesi kanalıyla tahliye istenebilir. Taahhütnameye dayalı icra yoluyla tahliye, kiracının tahliyeyi önceden yazılı olarak üstlenmesine dayanır. Taahhütnamenin geçerlilik şartları dosyada incelenir; geçersizse mahkeme yoluna gidilmesi gerekebilir." },
    ],
    howToTitle: "Gaziosmanpaşa'da Kiracı Tahliye Süreci Nasıl İşler?",
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
    urlSlug: "gaziosmanpasa-vergi-avukati",
    name: "Gaziosmanpaşa Vergi Avukatı",
    heroTitle: "Gaziosmanpaşa Vergi Avukatı",
    heroSubtitle:
      "Küçük esnaf ve KOBİ ağırlıklı ekonomik yapısıyla öne çıkan Gaziosmanpaşa'da, vergi tarhiyatı, ceza kesme işlemleri ve uzlaşma süreçlerinde temsil sağlanır; yetkili mahkeme İstanbul vergi mahkemeleridir.",
    metaTitle: "Gaziosmanpaşa Vergi Avukatı | Uzlaşma ve Dava",
    metaDescription:
      "Gaziosmanpaşa'da vergi tarhiyatına itiraz, vergi cezaları ve vergi mahkemesi süreçlerinde avukatlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Vergi tarhiyatı ve cezalarına ilişkin uyuşmazlıklarda Gaziosmanpaşa'daki esnaf ve mükelleflere danışmanlık verilmektedir. Furkan Arıkan İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur.",
    highlightCards: [
      { title: "Tarhiyat İtirazı", description: "Re'sen veya ikmalen tarh edilen vergiye karşı dava." },
      { title: "Ceza Uyuşmazlıkları", description: "Usulsüzlük ve vergi ziyaı cezalarına itiraz." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma sürecinde temsil." },
      { title: "Esnaf/KOBİ Denetimleri", description: "Küçük işletmelere yönelik vergi incelemesi süreçleri." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi ve ceza ihbarnamesine karşı dava açılması",
      "Uzlaşma başvurusunda vergi idaresi nezdinde temsil",
      "Vergi mahkemesinde iptal davası süreçleri",
      "Ödeme emrine karşı dava açılması",
      "Küçük esnaf ve KOBİ'lere yönelik vergi incelemesi sürecinde danışmanlık",
      "Gerçek usulden basit usule veya tam tersi yöndeki uyuşmazlıklarda destek",
    ],
    localParagraphs: [
      "Ekonomik faaliyetin büyük kısmının küçük esnaf ve fason üretim işletmelerince yürütüldüğü Gaziosmanpaşa'da, bu işletmelere yönelik vergi incelemeleri ve re'sen/ikmalen tarhiyatlar sık karşılaşılan uyuşmazlık konuları arasındadır.",
      "Mükelleflerin vergisel işlemleri, ilçe sınırları içindeki Merkez Mahallesi'nde bulunan Gaziosmanpaşa Vergi Dairesi Müdürlüğü nezdinde yürütülür. İhbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür.",
    ],
    faqs: [
      { question: "Gaziosmanpaşa Vergi Dairesi nerede bulunuyor?", answer: "Gaziosmanpaşa Vergi Dairesi Müdürlüğü, ilçenin Merkez Mahallesi'nde yer almaktadır. Mükelleflerin vergisel işlemleri ilçe sınırları içindeki bu müdürlük nezdinde yürütülür. Bu daireye ait tarhiyat ve ceza kararlarına karşı açılan davalar İstanbul vergi mahkemelerinde görülür; ihbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür." },
      { question: "İhbarnameye itiraz süresi ne kadardır?", answer: "İhbarnameye karşı dava açma süresi tebliğden itibaren 30 gündür (İYUK m.7). Süre içinde açılan dava, vergi ve ceza ihbarnamesinin iptalini hedefler. Uzlaşma başvurusu yapılmışsa, uzlaşma sağlanamaması halinde kalan dava açma süresi korunur; bu nedenle tebliğ tarihinin doğru tespiti önemlidir." },
      { question: "Vergi davası hangi mahkemede görülür?", answer: "Vergi davaları İstanbul vergi mahkemelerinde görülür. Vergi ve ceza ihbarnamesine karşı iptal davası, ihbarnamenin tebliğinden itibaren 30 gün içinde açılır (İYUK m.7). Dava, tarhiyatın ve buna bağlı cezaların hukuka uygunluğunu denetler; ödeme emrine karşı dava da aynı mahkemede açılabilir." },
      { question: "Uzlaşma başvurusu dava açma hakkını ortadan kaldırır mı?", answer: "Hayır, uzlaşma başvurusu dava açma hakkını ortadan kaldırmaz. Uzlaşma sağlanamazsa kalan dava açma süresi korunur ve vergi mahkemesinde dava açılabilir. Vergi idaresi nezdindeki uzlaşma görüşmelerinde temsil sağlanır; uzlaşma ile dava yolu arasındaki tercih tarhiyatın miktarı ve dayanağına göre değerlendirilir." },
      { question: "Basit usulden gerçek usule geçiş nasıl bir vergisel etki doğurur?", answer: "Basit usulden gerçek usule geçişte mükellefiyet türü değiştiğinden beyan ve belge düzeni farklılaşır; bu konuda önceden danışmanlık alınması önerilir. Gerçek usulden basit usule veya tam tersi yöndeki uyuşmazlıklarda destek sağlanır. Küçük esnaf ve KOBİ'lerde vergi incelemesi sürecinde belge ve kayıtların düzenli tutulması önem taşır." },
    ],
    howToTitle: "Gaziosmanpaşa'da Vergi İtirazı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "İnceleme", text: "Tarhiyat veya cezanın dayanağı ayrıntılı olarak incelenir." },
      { name: "Yol Seçimi", text: "Uzlaşma mı yoksa doğrudan dava mı açılacağı kararlaştırılır." },
      { name: "Başvuru", text: "Süresi içinde vergi mahkemesine başvurulur veya uzlaşma istenir." },
      { name: "Sonuçlanma", text: "Mahkeme kararı veya uzlaşma tutanağıyla süreç sona erer." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: ["vergi-ihbarnamesine-itiraz-ve-uzlasma"],
  },

  // ─────────────────────────── BORÇLAR ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "gaziosmanpasa-borclar-hukuku-avukati",
    name: "Gaziosmanpaşa Borçlar Hukuku Avukatı",
    heroTitle: "Gaziosmanpaşa Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Fason üretim ve kat karşılığı inşaat ilişkilerinden doğan sözleşme uyuşmazlıklarında, alacak taleplerinde ve tazminat davalarında temsil sağlanır; asliye hukuk mahkemesi Gaziosmanpaşa Adliyesi bünyesindedir.",
    metaTitle: "Gaziosmanpaşa Borçlar Hukuku Avukatı",
    metaDescription:
      "Gaziosmanpaşa'da fason üretim ve inşaat sözleşmesi uyuşmazlıkları, alacak ve tazminat davalarında avukatlık ve danışmanlık hizmeti sağlanmaktadır.",
    aboutParagraph:
      "Borçlar hukuku kapsamında Gaziosmanpaşa'daki müvekkillere sözleşme ve alacak uyuşmazlıklarında danışmanlık verilmektedir; Furkan Arıkan 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuş olup İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır.",
    highlightCards: [
      { title: "Fason Üretim Sözleşmeleri", description: "İmalat ve tedarik ilişkilerinden doğan uyuşmazlıklar." },
      { title: "Alacak Davaları", description: "Para alacaklarının dava veya takip yoluyla tahsili." },
      { title: "Kat Karşılığı Sözleşmeler", description: "İnşaat sözleşmesi uyuşmazlıklarının çözümü." },
      { title: "Tazminat Talepleri", description: "Sözleşmeye aykırılıktan doğan zararların giderilmesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Fason üretim ve tedarik sözleşmelerinden doğan uyuşmazlıkların çözümü",
      "Alacak davası açılması ve icra takibi yürütülmesi",
      "Kat karşılığı inşaat sözleşmelerinden doğan uyuşmazlıklar",
      "Ayıplı ifa nedeniyle sözleşmeden dönme talepleri",
      "Sözleşme metinlerinin hazırlanması ve hukuki incelemesi",
      "Sebepsiz zenginleşmeye dayalı iade talepleri",
    ],
    localParagraphs: [
      "Küçük esnaf ve fason üretime dayalı ticari ilişkilerin yoğun olduğu Gaziosmanpaşa'da, imalat/tedarik sözleşmelerinin kapsamının net biçimde belirlenmemesi uygulamada sıkça karşılaşılan uyuşmazlıkların başlıca nedenidir.",
      "Bu davalar Gaziosmanpaşa Adliyesi bünyesinde görülür; bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvuru dava şartı olarak aranabilir.",
    ],
    faqs: [
      { question: "Fason üretim işini yarım bırakan taraf için ne yapılabilir?", answer: "Fason üretim işini yarım bırakan taraf için sözleşmeden dönme, tazminat veya ifa davası gibi hukuki yollara başvurulabilir. Fason üretim ve tedarik sözleşmelerinden doğan uyuşmazlıklarda sözleşmenin kapsamı ve tarafların edimleri incelenir. Hangi yolun seçileceği ihlalin niteliğine ve sözleşme hükümlerine bağlıdır; kapsamın net belirlenmesi uyuşmazlığı önler." },
      { question: "Kat karşılığı sözleşmede müteahhit temerrüde düşerse ne olur?", answer: "Müteahhit temerrüde düşerse sözleşme şartlarına göre fesih, tazminat veya ifa talebiyle dava açılabilir. Kat karşılığı inşaat sözleşmesindeki edimler, teslim tarihi ve hak sahipliği payları dosyada incelenir. Temerrüdün ispatı için ihtar ve teslim belgeleri önem taşır; hangi yolun seçileceği sözleşme hükümlerine göre belirlenir." },
      { question: "Ticari alacak davası hangi mahkemede görülür?", answer: "Ticari alacak davası niteliğine göre asliye ticaret mahkemesinde, Gaziosmanpaşa Adliyesi bünyesinde görülür. Bazı ticari alacak uyuşmazlıklarında dava açılmadan önce arabuluculuğa başvurulması zorunlu olabilir. Alacağın ticari nitelikte olup olmadığı sözleşmeye ve tarafların sıfatına göre belirlenir; bu değerlendirme dava açılmadan önce yapılır." },
      { question: "Dava öncesi arabuluculuk her zaman zorunlu mudur?", answer: "Hayır, dava öncesi arabuluculuk her zaman zorunlu değildir; yalnızca ticari nitelikteki bazı alacak uyuşmazlıklarında dava şartı olarak aranır. Zorunlu olan hallerde arabuluculuğa başvurulmadan dava açılırsa dava usulden reddedilebilir. Uyuşmazlığın bu kapsama girip girmediği dava açılmadan önce incelenir." },
      { question: "Zamanaşımına uğramış bir alacak talep edilebilir mi?", answer: "Borçlu zamanaşımı def'ini ileri sürerse zamanaşımına uğramış bir alacak talep edilemez; ileri sürmezse talep edilebilir. Mahkeme zamanaşımını kendiliğinden dikkate almaz, bu defi borçlunun ileri sürmesi gerekir. Alacak davası veya icra takibi açılmadan önce alacağın doğduğu tarih ve süreyi kesen işlemler incelenir." },
    ],
    howToTitle: "Gaziosmanpaşa'da Alacak Davası Süreci Nasıl İşler?",
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

export const gaziosmanpasaServices: PseoService[] = [...gaziosmanpasaBaseServices, gaziosmanpasaMiras];
