import type { PseoService } from "./types";
import { adalarMiras } from "./miras/adalarMiras";

const genelSurec = [
  { name: "İlk İletişim", text: "WhatsApp veya telefonla ulaşılarak konu kısaca iletilir; adada bulunan müvekkil için çevrim içi görüşme de planlanabilir." },
  { name: "Danışmanlık Randevusu", text: "Görüşme ücrete tabidir; belgeler üzerinden hukuki durum değerlendirilir." },
  { name: "Vekalet ve Dosya Hazırlığı", text: "Temsil kararı verilirse vekaletname düzenlenir, tapu, sözleşme veya tebligat gibi belgeler toplanır." },
  { name: "Temsil ve Süreç Takibi", text: "Yetkili mahkeme veya idari merci nezdinde işlemler yürütülür, gelişmeler müvekkille paylaşılır." },
];

const adalarBaseServices: PseoService[] = [
  // ─────────────────────────── HUB ───────────────────────────
  {
    slug: "avukat",
    urlSlug: "adalar-avukat",
    name: "Adalar Avukat",
    heroTitle: "Adalar Avukat",
    heroSubtitle:
      "Büyükada, Heybeliada, Burgazada ve Kınalıada'daki ada sakinleri ile yazlık mülk sahipleri için ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku alanlarında Av. Furkan Arıkan tarafından hukuki danışmanlık ve dava takibi sağlanır; görüşmeler vapur seferlerine bağlı kalmadan çevrim içi de yapılabilir.",
    metaTitle: "Adalar Avukat | Hukuki Danışmanlık",
    metaDescription:
      "Adalar'da ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku konularında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı bir avukattır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Beş mahalleden oluşan Adalar ilçesinde, yani Büyükada'nın Maden ve Nizam mahallelerinde, ayrıca Heybeliada, Burgazada ve Kınalıada'da yaşayanlara ve buradaki taşınmaz sahiplerine çeşitli hukuk dallarında danışmanlık sunar. Büro Beşiktaş/Sinanpaşa'dadır; ilçede ofis bulunmadığından ada sakinleriyle ilk değerlendirme çoğunlukla telefon, WhatsApp veya çevrim içi görüşmeyle yapılır.",
    highlightCards: [
      { title: "Ceza Hukuku", description: "Soruşturma ve kovuşturmada müdafilik." },
      { title: "Aile Hukuku", description: "Boşanma, velayet ve nafaka işlerinde temsil." },
      { title: "Gayrimenkul Hukuku", description: "Tarihi ahşap yapılar ve yazlık taşınmazlarda tapu ve kira uyuşmazlıkları." },
      { title: "İş Hukuku", description: "Ada işletmelerinde çalışanların işçilik alacakları ve işe iade talepleri." },
      { title: "İcra Hukuku", description: "Alacak takibi ve itiraz süreçlerinde temsil." },
      { title: "İdare Hukuku", description: "Koruma ve imar kararlarına karşı iptal davaları." },
      { title: "Vergi Hukuku", description: "Vergi tarhiyatı, ceza ve uzlaşma süreçleri." },
      { title: "Borçlar Hukuku", description: "Sözleşme kaynaklı alacak ve tazminat uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Ada sakinleri için ceza soruşturması ve kovuşturması savunması",
      "Boşanma, velayet ve nafaka taleplerinde temsil",
      "Tarihi yapı ve yazlık taşınmazlara ilişkin tapu ve kat mülkiyeti uyuşmazlıkları",
      "Konaklama, gıda ve esnaf işletmelerinde çalışanlar için işçilik alacakları",
      "Alacak tahsilinde icra takibi ve itiraz süreçleri",
      "Koruma kurulu ve imar işlemlerine karşı idari dava takibi",
      "Vergi cezası ve tarhiyata karşı itiraz ile dava hazırlığı",
      "Sözleşme ve haksız fiilden doğan tazminat ve alacak davaları",
    ],
    localParagraphs: [
      "Adalar, İstanbul'un en küçük ilçelerinden biridir ve yalnızca Maden, Nizam, Heybeliada, Burgazada ve Kınalıada mahallelerinden oluşur. Ada merkezleri arasında köprü veya kara bağlantısı olmadığından ilçe hayatı vapur iskeleleri etrafında şekillenir; hukuki işlerde de belge teslimi, noter ve randevu planlaması bu ulaşım düzenine göre yapılır.",
      "İlçede Büyükada'da bir adliye binası bulunmakla birlikte Adalar Adliyesi, İstanbul Anadolu Adliyesi'ne bağlı mülhakat statüsündedir; Adalet Bakanlığı faaliyet raporlarında ilçede yalnızca bir sulh hukuk mahkemesinin yer aldığı belirtilir. Bu nedenle diğer davalar, niteliğine göre Anadolu Adliyesi'nde görülür ve dosyanın yetkili mahkemesi her olayda ayrıca belirlenir.",
    ],
    faqs: [
      { question: "Adalar'daki davalara hangi adliye bakıyor?", answer: "Büyükada'daki Adalar Adliyesi, İstanbul Anadolu Adliyesi'ne bağlı mülhakat bir adliyedir; ilçede bulunmayan mahkemelerin işleri bağlı olunan Anadolu Adliyesi'nde görülür. Yetkili mahkeme davanın türüne göre belirlenir." },
      { question: "Büro Adalar'da mı?", answer: "Hayır, büro Beşiktaş/Sinanpaşa'dadır; Adalar'daki müvekkillere aynı kapsamda hizmet verilir." },
      { question: "Adada yaşıyorsam görüşme için karaya çıkmam gerekir mi?", answer: "Gerekmez; ilk değerlendirme telefon, WhatsApp veya çevrim içi görüşmeyle yapılabilir." },
      { question: "Hangi hukuk dallarında hizmet veriliyor?", answer: "Ceza, aile, gayrimenkul, iş, icra, idare, vergi ve borçlar hukuku kapsamında temsil sağlanmaktadır." },
      { question: "Randevu nasıl alınır?", answer: "WhatsApp veya telefonla iletişime geçilerek uygun bir görüşme zamanı belirlenir." },
      { question: "Danışmanlık ücreti nasıl belirlenir?", answer: "Dosyanın niteliğine göre değişir, görüşme sırasında bilgi verilir." },
      { question: "Adalar'a nasıl ulaşılır?", answer: "Kabataş, Kadıköy ve Bostancı iskelelerinden kalkan Şehir Hatları vapurlarıyla Büyükada, Heybeliada, Burgazada ve Kınalıada'ya deniz yoluyla ulaşılır." },
      { question: "Dosyanın seyri hakkında bilgi alınabilir mi?", answer: "Evet, süreç boyunca gelişmeler müvekkille paylaşılır." },
    ],
    howToTitle: "Adalar'da Hukuki Sürece Nasıl Başlanır?",
    howToSteps: genelSurec,
    crosslinkLabel: "Adalar Avukat (Genel)",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── BOŞANMA ───────────────────────────
  {
    slug: "bosanma",
    urlSlug: "adalar-bosanma-avukati",
    name: "Adalar Boşanma Avukatı",
    heroTitle: "Adalar Boşanma Avukatı",
    heroSubtitle:
      "Adalar'da yaşayan ailelerin anlaşmalı veya çekişmeli boşanma, velayet ve nafaka süreçlerinde temsili yürütülür; duruşma günlerinde vapur seferlerine göre planlama yapılması gerektiği için süreç baştan takvimlendirilir.",
    metaTitle: "Adalar Boşanma Avukatı | Velayet ve Nafaka",
    metaDescription:
      "Adalar'da anlaşmalı ve çekişmeli boşanma, velayet ve nafaka davalarında avukatlık ve dava takibi hizmeti sunulmaktadır.",
    aboutParagraph:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı Av. Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Adalar'da ikamet eden eşlerin boşanma, velayet ve nafaka işlerinde danışmanlık ve temsil hizmeti verir.",
    highlightCards: [
      { title: "Anlaşmalı Boşanma", description: "Protokolün hazırlanması ve tek duruşmalık süreç." },
      { title: "Çekişmeli Boşanma", description: "Kusur iddialarının delillendirilmesi." },
      { title: "Velayet ve Kişisel İlişki", description: "Çocuğun okul ve ada yaşamına uygun görüşme düzeni talepleri." },
      { title: "Mal Rejimi", description: "Ada konutu ve yazlık gibi taşınmazların tasfiyesi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Anlaşmalı boşanma protokolünün hazırlanması",
      "Kusura dayalı çekişmeli boşanma davalarının yürütülmesi",
      "Velayet ve çocukla kişisel ilişki düzenlemeleri",
      "Nafakanın artırılması, azaltılması ve kaldırılması davaları",
      "Ada konutu ve yazlık dahil mal rejimi tasfiyesi",
      "Boşanmaya bağlı tazminat talepleri",
    ],
    localParagraphs: [
      "Adalar'da çocuklu ailelerde okul servisi, sağlık hizmeti ve günlük ulaşım deniz ulaşımına bağlı olduğundan velayet ve kişisel ilişki düzenlemelerinde görüş saatlerinin vapur tarifeleriyle uyumlu olması pratikte önem taşır; bu hususlar protokole veya talep sonucuna açıkça yazılabilir.",
      "Aile mahkemesi davalarında yetki, Türk Medeni Kanunu'nun 168. maddesi uyarınca eşlerden birinin yerleşim yeri veya davadan önce son altı ay birlikte oturdukları yer mahkemesine göre belirlenir; Adalar'da ikamet eden eşler bakımından yetkili mahkeme, adliye düzeni dikkate alınarak her dosyada ayrıca teyit edilir.",
    ],
    faqs: [
      { question: "Anlaşmalı boşanma için ne gerekir?", answer: "Evliliğin en az bir yıl sürmüş olması ve eşlerin boşanma ile sonuçlarında anlaşması gerekir (TMK m. 166/3)." },
      { question: "Adalar'da boşanma davası hangi mahkemede açılır?", answer: "Yetki, eşlerin yerleşim yerine göre belirlenir; ilçede görevli mahkeme bulunmuyorsa bağlı olunan Anadolu Adliyesi'ndeki aile mahkemesine başvurulabilir." },
      { question: "Çocukla görüşme düzeni ada koşullarına göre ayarlanabilir mi?", answer: "Mahkeme çocuğun yararını gözeterek düzenleme yapar; ulaşım koşulları talep edilen sürelerin belirlenmesinde dikkate alınabilir." },
      { question: "Nafaka miktarı neye göre belirlenir?", answer: "Tarafların gelir durumu ve ihtiyaçları birlikte değerlendirilir." },
      { question: "Yazlık konut mal paylaşımına dahil olur mu?", answer: "Edinilmiş mallar olarak sayılıyorsa tasfiyeye dahil edilir; edinme tarihi ve kaynağı tapu ve belgelerle incelenir." },
    ],
    howToTitle: "Adalar'da Boşanma Süreci Hangi Aşamalardan Geçer?",
    howToSteps: [
      { name: "İhtiyaç Analizi", text: "Velayet, nafaka ve mal rejimi talepleri değerlendirilir." },
      { name: "Dilekçe veya Protokol", text: "Duruma uygun dava dilekçesi ya da protokol hazırlanır." },
      { name: "Dava Açılışı", text: "Yetkili aile mahkemesine başvuru yapılır." },
      { name: "Sonuç", text: "Duruşma sürecinin ardından karar açıklanır." },
    ],
    crosslinkLabel: "Boşanma Avukatı",
    relatedPostSlugs: ["bosanma-sureci-bilinmesi-gerekenler", "bosanma-davasinda-velayet", "bosanmada-nafaka-turleri"],
  },

  // ─────────────────────────── CEZA ───────────────────────────
  {
    slug: "ceza",
    urlSlug: "adalar-ceza-avukati",
    name: "Adalar Ceza Avukatı",
    heroTitle: "Adalar Ceza Avukatı",
    heroSubtitle:
      "Adalar'da gözaltı, ifade ve kovuşturma süreçlerinde müdafilik hizmeti sunulur; adaya yalnızca deniz yoluyla ulaşıldığından acil bir işlemde iletişim kanalının önceden belli olması süreci kolaylaştırır.",
    metaTitle: "Adalar Ceza Avukatı | Müdafilik",
    metaDescription:
      "Adalar'da soruşturma, kovuşturma, tutukluluğa itiraz ve ceza yargılamasının tüm aşamalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Av. Furkan Arıkan, 72621 sicil numarasıyla İstanbul Barosu'na kayıtlıdır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Adalar'daki şüpheli, sanık ve mağdurlara ceza yargılamasının soruşturma ve kovuşturma evrelerinde danışmanlık ve temsil sağlar.",
    highlightCards: [
      { title: "Soruşturma Aşaması", description: "İfade ve gözaltı sürecinde hukuki destek." },
      { title: "Kovuşturma Takibi", description: "Duruşma katılımı ve delillerin değerlendirilmesi." },
      { title: "Tutukluluk İtirazı", description: "Tutuklama ve devamı kararlarına itiraz." },
      { title: "Mağdur Vekilliği", description: "Müşteki veya katılan sıfatıyla davanın takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Gözaltı sürecinde müdafi olarak hazır bulunulması",
      "Soruşturma dosyasının incelenmesi",
      "Tutukluluk kararlarına karşı itiraz hazırlığı",
      "Duruşma aşamasında sanık veya katılan vekilliği",
      "Uzlaştırma kapsamındaki suçlarda sürecin yürütülmesi",
      "Kovuşturmaya yer olmadığı kararlarına itiraz",
    ],
    localParagraphs: [
      "Adalar'da başlayan bir soruşturmanın ilerleyen aşamaları niteliğine göre Anadolu Adliyesi'ne taşınabilir; ilçedeki adliyede yalnızca bir sulh hukuk mahkemesi bulunduğu belirtildiğinden ceza dosyalarının nerede yürütüleceği her olayda ayrıca netleştirilmelidir.",
      "Ceza Muhakemesi Kanunu'nun 149. maddesi uyarınca şüpheli ve sanık, soruşturmanın her aşamasında müdafiden yararlanabilir. Adada bulunan kişinin acil durumda avukata telefonla ulaşabilmesi, vapur seferlerinin zamanını beklemeden süreci başlatabilmek için önemlidir.",
    ],
    faqs: [
      { question: "Adalar'da bir ceza davası hangi adliyede görülür?", answer: "Ceza dosyaları suçun ve yetkinin niteliğine göre belirlenir; ilçede bulunmayan mahkemelerin işleri bağlı olunan İstanbul Anadolu Adliyesi'nde görülür." },
      { question: "Müdafi olmadan ifade verilebilir mi?", answer: "Verilebilir; ancak şüpheli ve sanığın her aşamada müdafiden yararlanma hakkı vardır." },
      { question: "Tutuklama kararına itiraz süresi nedir?", answer: "Sulh ceza hakimliği kararlarına karşı itiraz süresi, kararın tebliği veya öğrenilmesinden itibaren yedi gündür (CMK m. 268)." },
      { question: "Kovuşturmaya yer olmadığı kararına itiraz edilebilir mi?", answer: "Evet, tebliğden itibaren 15 gün içinde sulh ceza hakimliğine itiraz edilebilir (CMK m. 173)." },
      { question: "Adada yaşayanlar için iletişim nasıl sağlanır?", answer: "Telefon veya WhatsApp üzerinden vakit kaybetmeden iletişime geçilmesi yeterlidir." },
    ],
    howToTitle: "Adalar'da Ceza Yargılaması Nasıl İlerler?",
    howToSteps: [
      { name: "Olay Bildirimi", text: "Şikayet, ihbar veya resen harekete geçilir." },
      { name: "Soruşturma", text: "Deliller toplanır, ifadeler alınır." },
      { name: "Kovuşturma", text: "İddianamenin kabulüyle yargılama başlar." },
      { name: "Kanun Yolu", text: "Karara karşı istinaf veya temyiz yoluna başvurulabilir." },
    ],
    crosslinkLabel: "Ceza Avukatı",
    relatedPostSlugs: ["ceza-hukukunda-etkin-pismanlik", "tutukluluga-itiraz", "kosullu-saliverilme-oranlari"],
  },

  // ─────────────────────────── GAYRİMENKUL ───────────────────────────
  {
    slug: "gayrimenkul",
    urlSlug: "adalar-gayrimenkul-avukati",
    name: "Adalar Gayrimenkul Avukatı",
    heroTitle: "Adalar Gayrimenkul Avukatı",
    heroSubtitle:
      "Büyükada'nın Maden ve Nizam mahalleleri ile diğer adalardaki köşk, yalı ve yazlık nitelikli taşınmazlarda tapu işlemleri, ortaklığın giderilmesi, kat mülkiyeti ve kira uyuşmazlıklarında hukuki destek sağlanır.",
    metaTitle: "Adalar Gayrimenkul Avukatı | Tapu ve Kira",
    metaDescription:
      "Adalar'da tapu iptali, ortaklığın giderilmesi, kat mülkiyeti ve kira uyuşmazlıklarına ilişkin gayrimenkul avukatlığı hizmeti sunulmaktadır.",
    aboutParagraph:
      "Av. Furkan Arıkan (İstanbul Barosu, sicil no: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019 mezunu) Adalar'daki taşınmaz sahiplerine tapu, miras yoluyla geçen paylı mülkiyet ve kira konularında danışmanlık sunar.",
    highlightCards: [
      { title: "Tarihi Yapılar", description: "Eski ahşap köşklerde tapu ve paylı mülkiyet incelemesi." },
      { title: "Yazlık Taşınmazlar", description: "Mevsimlik kullanılan konutlarda alım-satım ve kira uyuşmazlıkları." },
      { title: "Ortaklığın Giderilmesi", description: "Mirasçılar arasında paylı mülkiyetin sona erdirilmesi." },
      { title: "Tapu Uyuşmazlıkları", description: "Usulsüz tescile karşı iptal ve düzeltme davaları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Köşk ve yazlık nitelikli taşınmazlarda tapu kaydı incelemesi",
      "Tapu iptali ve tescil davalarının açılması",
      "Mirasçılar arasında ortaklığın giderilmesi davaları",
      "Kat mülkiyeti ve site yönetimi uyuşmazlıkları",
      "Taşınmaz satış vaadi sözleşmelerinin incelenmesi",
      "Kira tespit ve uyarlama davalarının hazırlanması",
    ],
    localParagraphs: [
      "Adalar'da birçok taşınmaz, nesilden nesile geçen ve çok sayıda mirasçının paylı malik olduğu eski ahşap yapılardan oluşur. Bu tür dosyalarda tapu kaydı, intikal ve pay oranları incelenmeden alım-satım ya da kira işlemi yapılması uyuşmazlığa yol açabilir; Adalar'da koruma statüsü bulunan alanlar yer aldığından ayrıca ilgili kurul kararlarının da kontrol edilmesi gerekir.",
      "Taşınmaza ilişkin davalar, kural olarak taşınmazın bulunduğu yer mahkemesinde, niteliğine göre sulh hukuk veya asliye hukuk sıfatıyla görülür; ilçede yalnızca sulh hukuk mahkemesinin bulunduğu belirtildiğinden asliye hukuk görevine giren dosyalar bağlı olunan Anadolu Adliyesi'nde yürütülür.",
    ],
    faqs: [
      { question: "Eski bir ahşap köşkün tapusunda nelere bakılmalı?", answer: "Tapu kaydındaki malik ve pay bilgileri, intikal işlemlerinin tamamlanıp tamamlanmadığı ile varsa koruma ve imar kayıtları incelenmelidir." },
      { question: "Mirasçılar taşınmazı paylaşamıyorsa ne yapılır?", answer: "Ortaklığın giderilmesi davası açılarak taşınmazın aynen paylaştırılması veya satışı yoluyla paylı mülkiyete son verilebilir." },
      { question: "Tapu iptal davası hangi hallerde açılır?", answer: "Hukuka aykırı bir tescil işlemi bulunduğunda hak sahibi bu davayı açabilir." },
      { question: "Yazlık konutu satın alırken hangi belgeler istenmelidir?", answer: "Tapu kaydı, imar durumu, varsa koruma kurulu kararı ve yapı ruhsatı ya da yapı kullanma izni belgeleri incelenmelidir." },
      { question: "Gayrimenkul davası hangi mahkemede görülür?", answer: "Niteliğine göre sulh hukuk veya asliye hukuk mahkemesinde görülür; görevli mahkeme dosyada ayrıca belirlenir." },
    ],
    howToTitle: "Adalar'da Tapu Uyuşmazlığı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Kayıt İncelemesi", text: "Tapu, intikal ve imar durumu belgeleri toplanır." },
      { name: "Uyuşmazlığın Netleştirilmesi", text: "İddia ve dayanak deliller belirlenir." },
      { name: "Dava Açılması", text: "Yetkili mahkemede dava başlatılır." },
      { name: "Keşif ve Karar", text: "Gerekirse keşif ve bilirkişi incelemesi yapılır, ardından karar verilir." },
    ],
    crosslinkLabel: "Gayrimenkul Avukatı",
    relatedPostSlugs: ["tapu-iptali-ve-tescil-davasi", "ortakligin-giderilmesi-davasi", "muris-muvazaasi-nedir"],
  },

  // ─────────────────────────── İCRA ───────────────────────────
  {
    slug: "icra",
    urlSlug: "adalar-icra-avukati",
    name: "Adalar İcra Avukatı",
    heroTitle: "Adalar İcra Avukatı",
    heroSubtitle:
      "Adalar'da esnaf, işletme ve bireylerin alacak takibi ile haciz ve itiraz işlemlerinde temsili sağlanır; ada dışındaki icra dairesi işlemleri vekaletle yürütüldüğü için ayrıca vapurla gidiş gelişe gerek kalmaz.",
    metaTitle: "Adalar İcra Avukatı | İcra Takibi ve Haciz",
    metaDescription:
      "Adalar'da icra takibi, ödeme emrine itiraz, haciz ve alacak tahsili süreçlerinde avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı Av. Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Adalar'daki alacaklı ve borçlulara icra takibi başlatma, itiraz ve haciz süreçlerinde danışmanlık ve temsil sunar.",
    highlightCards: [
      { title: "İcra Takibi", description: "İlamlı ve ilamsız takiplerin başlatılması." },
      { title: "İtiraz", description: "Ödeme emrine itiraz ve itirazın kaldırılması süreçleri." },
      { title: "Haciz İşlemleri", description: "Banka hesabı, araç ve taşınmaz üzerindeki haciz talepleri." },
      { title: "Kira Alacakları", description: "Yazlık ve işyeri kiralarında ödenmeyen bedellerin takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İlamsız icra takibinin başlatılması",
      "Ödeme emrine itiraz ve itirazın iptali süreçleri",
      "Haciz ve satış işlemlerinin takibi",
      "Kira alacağı için takip ve tahliye talepleri",
      "Konkordato ve iflas konularında danışmanlık",
      "İcra işlemlerine karşı şikayet başvuruları",
    ],
    localParagraphs: [
      "Adalar'da yaz mevsiminde yoğunlaşan konaklama, restoran ve esnaf faaliyetlerinde kira, tedarik ve hizmet bedelleri sezon sonunda ödenmeyebilir; bu tür alacaklarda borçlunun adresi ve tebligat bilgilerinin doğru belirlenmesi takibin ilerlemesi açısından önemlidir.",
      "İcra takibi başlatılırken yetkili icra dairesi genel kural olarak borçlunun yerleşim yerine göre belirlenir; borçlunun ödeme emrine itiraz süresi tebliğden itibaren yedi gündür (İİK m. 62) ve bu süre kaçırılmamalıdır.",
    ],
    faqs: [
      { question: "Ödeme emrine ne kadar sürede itiraz edilir?", answer: "Ödeme emrinin tebliğinden itibaren yedi gün içinde itiraz edilebilir (İİK m. 62)." },
      { question: "İtiraz edilen takip nasıl devam ettirilir?", answer: "Alacaklı itirazın iptali davası açabilir veya belgeye dayanıyorsa itirazın kaldırılmasını isteyebilir." },
      { question: "Adalar'daki bir işletmeye haciz uygulanabilir mi?", answer: "Hukuka uygun şekilde başlatılmış bir takipte borçlunun haczi kabil malları üzerinde haciz talep edilebilir." },
      { question: "Takibi başlatmak için mahkemeye gitmek gerekir mi?", answer: "İlamsız takipte doğrudan icra dairesine başvurulur, mahkeme kararı gerekmez." },
      { question: "İcra işlemlerine karşı ne yapılabilir?", answer: "Usulsüz işlemlere karşı icra mahkemesine şikayet yoluyla başvurulabilir." },
    ],
    howToTitle: "Adalar'da İcra Takibi Hangi Aşamalardan Oluşur?",
    howToSteps: [
      { name: "Alacağın Belgelendirilmesi", text: "Fatura, sözleşme veya senet gibi dayanaklar derlenir." },
      { name: "Takip Talebi", text: "Yetkili icra dairesine başvuru yapılır." },
      { name: "Ödeme Emri ve İtiraz", text: "Borçluya ödeme emri tebliğ edilir, itiraz halinde yol belirlenir." },
      { name: "Haciz ve Tahsil", text: "Kesinleşen takipte haciz ve satış işlemleri yürütülür." },
    ],
    crosslinkLabel: "İcra Avukatı",
    relatedPostSlugs: ["icra-takibi-ve-borca-itiraz"],
  },

  // ─────────────────────────── İDARE ───────────────────────────
  {
    slug: "idare",
    urlSlug: "adalar-idare-avukati",
    name: "Adalar İdare Avukatı",
    heroTitle: "Adalar İdare Avukatı",
    heroSubtitle:
      "Adalar'daki tarihi ahşap yapılarda onarım, yıkım ve imar işlemlerine; koruma kurulu kararlarına ve diğer idari işlemlere karşı iptal ve tam yargı davalarında temsil sağlanır.",
    metaTitle: "Adalar İdare Avukatı | İptal ve Tam Yargı",
    metaDescription:
      "Adalar'da imar, koruma ve idari işlemlere karşı iptal davası ile tam yargı davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Av. Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır; 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Adalar'da idari işlemden etkilenen taşınmaz sahipleri ve ilçede yaşayanlar için idari başvuru ve dava süreçlerinde destek sağlar.",
    highlightCards: [
      { title: "İptal Davası", description: "Hukuka aykırı idari işlemlerin iptali talepleri." },
      { title: "Tam Yargı Davası", description: "İdarenin eylem veya işleminden doğan zararların tazmini." },
      { title: "Koruma ve İmar", description: "Onarım izni, yıkım ve imar kararlarına yönelik itirazlar." },
      { title: "İdari Başvuru", description: "Dava öncesi idareye başvuru ve süre takibi." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Koruma kurulu kararlarına karşı iptal davası",
      "İmar, yıkım ve yapı denetimi işlemlerine itiraz",
      "İdare tarafından verilen para cezalarına karşı dava",
      "Kamulaştırma ve tam yargı davaları",
      "Memurluk ve kamu görevlisi uyuşmazlıkları",
      "Yürütmenin durdurulması taleplerinin hazırlanması",
    ],
    localParagraphs: [
      "Adalar'ın büyük bölümü koruma statüsündeki alanlar içinde yer aldığından (2863 sayılı Kültür ve Tabiat Varlıklarını Koruma Kanunu), tarihi ahşap yapıların onarımı, cephe değişikliği veya kullanım değişikliği gibi işlemlerde ilgili koruma kurulu ve belediye iznine ihtiyaç duyulabilir. Bu izinlerin reddi veya yapıya ilişkin yıkım, para cezası gibi işlemler idari yargıya taşınabilir.",
      "İdari işlemlere karşı iptal davası, İdari Yargılama Usulü Kanunu'nun 7. maddesi uyarınca kural olarak tebliğden itibaren 60 gün içinde açılmalıdır. Adalar'daki işlemler için görevli ve yetkili idare mahkemesi dosyanın niteliğine göre belirlenir.",
    ],
    faqs: [
      { question: "İdari işleme karşı dava açma süresi nedir?", answer: "Kural olarak yazılı bildirim tarihinden itibaren 60 gündür (İYUK m. 7)." },
      { question: "Koruma kurulu kararına karşı dava açılabilir mi?", answer: "Evet, hukuka aykırı olduğu düşünülen koruma kurulu kararlarına karşı iptal davası açılabilir." },
      { question: "Yürütmenin durdurulması nedir?", answer: "Dava sonuçlanana kadar idari işlemin uygulanmasının durdurulması talebidir; şartları mahkemece değerlendirilir." },
      { question: "İdare bir zarar verirse ne yapılabilir?", answer: "Zararın giderilmesi için tam yargı davası açılabilir." },
      { question: "Dava açmadan önce idareye başvurmak gerekir mi?", answer: "Bazı işlemlerde idari başvuru yolu zorunlu veya süreyi etkileyebilir; dosyaya göre değerlendirilir." },
    ],
    howToTitle: "Adalar'da İdari Dava Süreci Nasıl Yürütülür?",
    howToSteps: [
      { name: "İşlemin İncelenmesi", text: "Karar, tebliğ tarihi ve dayanak mevzuat incelenir." },
      { name: "Süre Kontrolü", text: "Dava açma süresinin işleyip işlemediği belirlenir." },
      { name: "Dava Dilekçesi", text: "İptal veya tam yargı talebiyle dava dilekçesi hazırlanır." },
      { name: "Yargılama", text: "İdare savunması alınır, gerekirse keşif yapılır ve karar verilir." },
    ],
    crosslinkLabel: "İdare Avukatı",
    relatedPostSlugs: ["idari-islemin-iptali-davasi"],
  },

  // ─────────────────────────── İŞ HUKUKU ───────────────────────────
  {
    slug: "is-hukuku",
    urlSlug: "adalar-is-hukuku-avukati",
    name: "Adalar İş Hukuku Avukatı",
    heroTitle: "Adalar İş Hukuku Avukatı",
    heroSubtitle:
      "Adalar'daki otel, restoran, mağaza ve ev hizmeti gibi sektörlerde çalışanların işe iade, kıdem ve ihbar tazminatı ile ödenmeyen işçilik alacağı taleplerinde danışmanlık ve temsil sağlanır.",
    metaTitle: "Adalar İş Hukuku Avukatı | İşe İade ve Tazminat",
    metaDescription:
      "Adalar'da işe iade, kıdem ve ihbar tazminatı, fazla mesai ve işçilik alacakları davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı Av. Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Adalar'da çalışan veya iş yeri bulunan kişilere iş sözleşmesinin sona ermesi ve işçilik alacakları konularında hukuki destek verir.",
    highlightCards: [
      { title: "İşe İade", description: "Geçersiz feshe karşı arabuluculuk ve dava süreci." },
      { title: "Kıdem ve İhbar Tazminatı", description: "Hak doğuran fesih hallerinin incelenmesi." },
      { title: "Fazla Mesai", description: "Sezonda uzayan çalışma sürelerinin alacağa yansıması." },
      { title: "Mevsimlik Çalışma", description: "Sezon sonu sona eren iş sözleşmelerinde hak kaybı riski." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "İşe iade talebi için arabuluculuk ve dava takibi",
      "Kıdem ve ihbar tazminatı hesaplanması",
      "Fazla mesai, hafta tatili ve yıllık izin alacakları",
      "Ödenmeyen ücret ve sigorta primi tespit talepleri",
      "Belirli süreli ve mevsimlik iş sözleşmesi uyuşmazlıkları",
      "İşverene karşı fesih ve ibraname incelemesi",
    ],
    localParagraphs: [
      "Adalar'da yaz mevsiminde artan konaklama, yeme-içme ve perakende faaliyetleri nedeniyle çalışma süreleri uzayabilir; sezonluk çalışanlarda fazla mesai ve yıllık izin kayıtlarının tutulması, sonradan doğabilecek alacak taleplerinde delil açısından önem taşır.",
      "İşe iade talebinde işçi, feshin bildiriminden itibaren bir ay içinde arabulucuya başvurmak zorundadır; anlaşma sağlanamazsa son tutanağın düzenlenmesinden itibaren iki hafta içinde iş mahkemesinde dava açılır (7036 sayılı Kanun ve 4857 sayılı İş Kanunu).",
    ],
    faqs: [
      { question: "İşe iade davası için süre nedir?", answer: "Fesih bildiriminden itibaren bir ay içinde arabulucuya başvurulur; anlaşmama tutanağından itibaren iki hafta içinde dava açılır." },
      { question: "İşe iade için hangi şartlar aranır?", answer: "İşçinin en az altı aylık kıdemi ve işyerinde en az otuz işçi çalışması gibi şartlar aranır (İş Kanunu m. 18)." },
      { question: "Sezonluk işçi kıdem tazminatı alabilir mi?", answer: "Belirli şartlar altında alabilir; sözleşme süresi, fesih nedeni ve çalışma süresi birlikte değerlendirilir." },
      { question: "Fazla mesai nasıl ispatlanır?", answer: "Bordro, puantaj kayıtları ve tanık beyanları gibi delillerle ispat edilir." },
      { question: "İbraname imzalamak hak kaybına yol açar mı?", answer: "İbraname, içeriğine ve imza koşullarına göre değerlendirilir; kapsamı dikkatle incelenmelidir." },
    ],
    howToTitle: "Adalar'da İşe İade Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Fesih İncelemesi", text: "Fesih bildirimi, çalışma süresi ve gerekçe incelenir." },
      { name: "Arabuluculuk", text: "Zorunlu arabuluculuk başvurusu yapılır." },
      { name: "Dava Açılışı", text: "Anlaşma olmazsa iş mahkemesinde dava açılır." },
      { name: "Karar", text: "Delillerin değerlendirilmesinin ardından karar verilir." },
    ],
    crosslinkLabel: "İş Hukuku Avukatı",
    relatedPostSlugs: ["kidem-tazminati-hesaplama-2026", "giydirilmis-ucret-kavrami", "ise-iade-davasi"],
  },

  // ─────────────────────────── KİRA / TAHLİYE ───────────────────────────
  {
    slug: "kira-tahliye",
    urlSlug: "adalar-kira-tahliye-avukati",
    name: "Adalar Kira ve Tahliye Avukatı",
    heroTitle: "Adalar Kira ve Tahliye Avukatı",
    heroSubtitle:
      "Adalar'da yazlık ve yıllık konut kiralarında, işyeri kiralarında kira bedeli tespiti, tahliye ve ödenmeyen kira konularında hem ev sahibine hem kiracıya hukuki destek sağlanır.",
    metaTitle: "Adalar Kira ve Tahliye Avukatı | Tahliye ve Kira Tespiti",
    metaDescription:
      "Adalar'da kiracı tahliyesi, kira bedeli tespiti ve uyarlama ile ödenmeyen kira alacaklarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "Av. Furkan Arıkan (İstanbul Barosu, sicil no: 72621; MEF Üniversitesi Hukuk Fakültesi, 2019 mezunu) Adalar'daki kira sözleşmelerine ilişkin ihtar, tespit ve tahliye süreçlerinde danışmanlık ve temsil sağlar.",
    highlightCards: [
      { title: "Tahliye Davaları", description: "İhtiyaç, kira borcu ve taahhüt nedenlerine dayalı tahliye." },
      { title: "Kira Tespiti", description: "Rayiç bedele göre kira bedelinin belirlenmesi." },
      { title: "Yazlık Kiralar", description: "Sezonluk kira sözleşmelerinde süre ve ödeme şartları." },
      { title: "İşyeri Kiraları", description: "Ada esnafının kira sözleşmelerinde yenileme ve uyarlama." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Kira borcu nedeniyle ihtar ve tahliye süreci",
      "Konut ihtiyacı sebebiyle tahliye davası",
      "Kira bedelinin tespiti ve uyarlama davaları",
      "Taahhütname ile tahliye taleplerinin takibi",
      "Sezonluk ve yıllık kira sözleşmelerinin incelenmesi",
      "Depozito iadesi uyuşmazlıkları",
    ],
    localParagraphs: [
      "Adalar'da yazlık konutlar çoğunlukla sezonluk, bazıları ise yıllık sözleşmeyle kiralandığından sözleşmenin süresi, belirsiz süreli mi belirli süreli mi olduğu ve yenilenme şartları dosyanın seyrini belirler; bu nedenle sözleşmenin yazılı olup olmadığı ilk bakılacak noktadır.",
      "Kira uyuşmazlıkları, Türk Borçlar Kanunu hükümleri uyarınca kiralananın bulunduğu yer sulh hukuk mahkemesinde görülür; Adalar'da sulh hukuk mahkemesi bulunduğu belirtildiğinden bu davalar ilçede de açılabilmektedir. Kira ödemeyen kiracıya konutlarda 30 günlük süre vererek ihtar çekilir (TBK m. 315).",
    ],
    faqs: [
      { question: "Kira ödenmezse tahliye nasıl istenir?", answer: "Kiracıya yazılı ihtar gönderilir ve konutlarda otuz gün süre verilir; süre içinde ödenmezse icra takibi ve tahliye davası yoluna gidilebilir." },
      { question: "Kira bedeli ne zaman tespit ettirilebilir?", answer: "Kira dönemi bitiminde, rayiç bedelin sözleşmedeki bedelden önemli ölçüde farklı olduğu hallerde tespit davası açılabilir." },
      { question: "Yazlık kiralamada sözleşme yazılı olmak zorunda mı?", answer: "Konut kiralarında yazılı şekil ispat için önemlidir; yazılı sözleşme yoksa süre ve bedel ispat sorunları doğurabilir." },
      { question: "Ev sahibi kendi ihtiyacı için tahliye isteyebilir mi?", answer: "Gerçek ve samimi bir konut ihtiyacı varsa, belirli süre ve şartlarla tahliye talep edilebilir (TBK m. 350)." },
      { question: "Taahhütnameyle tahliye mahkemeye gitmeyi gerektirir mi?", answer: "Geçerli bir taahhütname varsa icra dairesi yoluyla tahliye istenebilir." },
    ],
    howToTitle: "Adalar'da Kiracı Tahliye Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Sebebin Belirlenmesi", text: "Tahliyeye dayanak olacak durum netleştirilir." },
      { name: "Belge Toplama", text: "Sözleşme, ihtarname veya taahhütname derlenir." },
      { name: "Başvuru", text: "Duruma göre sulh hukuk mahkemesi veya icra dairesine başvurulur." },
      { name: "Teslim", text: "Karar veya emir kesinleşince taşınmaz teslim alınır." },
    ],
    crosslinkLabel: "Kira ve Tahliye Avukatı",
    relatedPostSlugs: ["kiracinin-tahliye-sureci", "kira-bedeli-tespit-ve-uyarlama-davasi"],
  },

  // ─────────────────────────── VERGİ ───────────────────────────
  {
    slug: "vergi",
    urlSlug: "adalar-vergi-avukati",
    name: "Adalar Vergi Avukatı",
    heroTitle: "Adalar Vergi Avukatı",
    heroSubtitle:
      "Adalar Vergi Dairesi'ne bağlı mükelleflerin vergi tarhiyatı, vergi ziyaı cezası ve uzlaşma süreçlerinde hukuki destek sağlanır; ada esnafı ve yazlık kira geliri elde eden taşınmaz sahipleri için itiraz ve dava yolları açıklanır.",
    metaTitle: "Adalar Vergi Avukatı | Vergi Cezası ve Uzlaşma",
    metaDescription:
      "Adalar'da vergi tarhiyatı, vergi cezası, uzlaşma ve vergi mahkemesi davalarında avukatlık hizmeti verilmektedir.",
    aboutParagraph:
      "İstanbul Barosu'na 72621 sicil numarasıyla kayıtlı Av. Furkan Arıkan, 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Adalar'daki mükelleflere vergi inceleme raporu, ihbarname ve cezalara karşı hukuki yolların değerlendirilmesinde destek verir.",
    highlightCards: [
      { title: "Vergi Ceza İhbarnamesi", description: "Tarhiyat ve ceza ihbarnamelerine itiraz yolları." },
      { title: "Uzlaşma", description: "Vergi idaresiyle uzlaşma görüşmelerine hazırlık." },
      { title: "Vergi Davası", description: "Vergi mahkemesinde iptal ve tadil davası." },
      { title: "Kira Geliri", description: "Yazlık kira gelirinin beyanında doğan uyuşmazlıklar." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Vergi inceleme raporu ve ihbarnamelerin değerlendirilmesi",
      "Uzlaşma talebinin hazırlanması",
      "Vergi mahkemesinde dava açılması",
      "Kira geliri beyanına ilişkin uyuşmazlıklar",
      "Vergi ziyaı ve usulsüzlük cezalarına itiraz",
      "Tahsilat ve haciz işlemlerine karşı başvurular",
    ],
    localParagraphs: [
      "Adalar'da yazlık ve konut kira gelirleri ile sezonluk işletme gelirleri vergi beyanına konu olabilir; gelirin hangi yıla ve hangi gelir türüne ait olduğu, ihbarname sonrası yapılacak itirazlarda temel tartışma noktasıdır.",
      "Vergi mahkemesinde dava açma süresi, ihbarnamenin tebliğinden itibaren 30 gündür (İYUK m. 7). Uzlaşma talebi için de tebliğden itibaren 30 gün içinde idareye başvurulması gerekir (VUK Ek m. 1); bu sürelerin işlemesi, tebligat tarihinin doğru tespitine bağlıdır.",
    ],
    faqs: [
      { question: "Vergi ceza ihbarnamesine karşı dava süresi nedir?", answer: "Tebliğden itibaren 30 gündür (İYUK m. 7)." },
      { question: "Uzlaşma ve dava birlikte kullanılabilir mi?", answer: "Uzlaşma talebi dava süresini etkileyebilir; uzlaşma sağlanamazsa kalan süre içinde dava açılabilir." },
      { question: "Vergi dairesi hangi birimdir?", answer: "Adalar'daki mükellefler için Adalar Vergi Dairesi Müdürlüğü yetkili birimdir." },
      { question: "Kira geliri nasıl beyan edilir?", answer: "Gayrimenkul sermaye iradı olarak beyan edilir; tutar ve istisna şartları yıla göre değişir." },
      { question: "Tahsilat işlemine karşı ne yapılabilir?", answer: "Hukuka aykırı bulunan haciz veya tahsil işlemlerine karşı idari başvuru ve dava yolları vardır." },
    ],
    howToTitle: "Adalar'da Vergi İtirazı Süreci Nasıl İşler?",
    howToSteps: [
      { name: "İhbarnamenin Değerlendirilmesi", text: "Tebliğ tarihi, tutar ve gerekçe incelenir." },
      { name: "Yol Seçimi", text: "Uzlaşma veya dava yolundan hangisinin izleneceği belirlenir." },
      { name: "Başvuru veya Dava", text: "Süre içinde uzlaşma talebi ya da dava dilekçesi sunulur." },
      { name: "Karar", text: "Mahkeme sürecinin ardından karar açıklanır." },
    ],
    crosslinkLabel: "Vergi Avukatı",
    relatedPostSlugs: ["vergi-ihbarnamesine-itiraz-ve-uzlasma"],
  },

  // ─────────────────────────── BORÇLAR HUKUKU ───────────────────────────
  {
    slug: "borclar-hukuku",
    urlSlug: "adalar-borclar-hukuku-avukati",
    name: "Adalar Borçlar Hukuku Avukatı",
    heroTitle: "Adalar Borçlar Hukuku Avukatı",
    heroSubtitle:
      "Adalar'da yapılan onarım, inşaat, taşıma ve hizmet sözleşmelerinden doğan alacak ve tazminat uyuşmazlıklarında hukuki destek verilir; ada dışındaki yüklenicilerle yapılan işlerde sözleşmenin ispat gücü ayrıca önem taşır.",
    metaTitle: "Adalar Borçlar Hukuku Avukatı | Alacak ve Tazminat",
    metaDescription:
      "Adalar'da sözleşme kaynaklı alacak, tazminat ve haksız fiil davalarında avukatlık ve danışmanlık hizmeti verilmektedir.",
    aboutParagraph:
      "Av. Furkan Arıkan, İstanbul Barosu'na 72621 sicil numarasıyla kayıtlıdır ve 2019'da MEF Üniversitesi Hukuk Fakültesi'nden mezun olmuştur. Adalar'daki bireylere ve işletmelere sözleşmeden doğan alacak, tazminat ve haksız fiil konularında danışmanlık sağlar.",
    highlightCards: [
      { title: "Alacak Davası", description: "Ödenmeyen bedellerin dava yoluyla tahsili." },
      { title: "Sözleşmeden Dönme", description: "Edimin ifa edilmemesi halinde sözleşmeden dönme ve tazminat." },
      { title: "Haksız Fiil", description: "Zarara yol açan eylemlerden doğan tazminat talepleri." },
      { title: "Onarım ve İnşaat", description: "Ahşap yapı onarımı ve taşıma işlerinde yüklenici uyuşmazlıkları." },
    ],
    processSteps: genelSurec,
    servicesList: [
      "Eser sözleşmelerinden doğan alacak ve ayıp uyuşmazlıkları",
      "Ödenmeyen hizmet ve taşıma bedeli davaları",
      "Sözleşmeden dönme ve tazminat talepleri",
      "Haksız fiil nedeniyle maddi ve manevi tazminat",
      "Ödünç ve borç ilişkilerinden doğan uyuşmazlıklar",
      "Zamanaşımı ve ihtar sürelerinin kontrolü",
    ],
    localParagraphs: [
      "Adalar'da ahşap köşk ve yazlıkların onarımı gibi işlerde malzeme ve işçiliğin adaya deniz yoluyla taşınması gerektiğinden, teslim tarihi, bedel ve sorumluluğun sözleşmede açık yazılması uyuşmazlıkları önleyebilir. Yazılı sözleşme, fatura ve yazışmalar sonradan açılacak alacak veya ayıp davasında temel delil niteliğindedir.",
      "Borçlar hukukunda genel zamanaşımı süresi on yıldır (TBK m. 146); haksız fiil tazminatında ise zarar ve failin öğrenilmesinden itibaren iki yıl, her halde fiilden itibaren on yıl uygulanır (TBK m. 72). Davaya bakacak mahkeme, uyuşmazlığın değerine ve niteliğine göre belirlenir.",
    ],
    faqs: [
      { question: "Alacak davası için zamanaşımı süresi nedir?", answer: "Genel olarak on yıldır; bazı alacaklar için daha kısa süreler öngörülmüştür (TBK m. 146 ve devamı)." },
      { question: "Haksız fiil tazminatında süre nedir?", answer: "Zarar ve failin öğrenilmesinden itibaren iki yıl, fiilden itibaren en geç on yıldır (TBK m. 72)." },
      { question: "Yüklenici işi eksik yaparsa ne yapılabilir?", answer: "Ayıp ihbarı yapılır, ardından bedel indirimi, onarım veya sözleşmeden dönme gibi seçimlik haklar kullanılabilir." },
      { question: "Sözleşmesiz yapılan iş için alacak talep edilebilir mi?", answer: "Fatura, yazışma ve tanık gibi delillerle ispat edilebiliyorsa talep edilebilir." },
      { question: "Dava açmadan önce ihtar çekmek gerekir mi?", answer: "Birçok durumda temerrüt ve süre bakımından ihtar önemlidir; dosyaya göre değerlendirilir." },
    ],
    howToTitle: "Adalar'da Alacak Davası Süreci Nasıl İşler?",
    howToSteps: [
      { name: "Belge Toplama", text: "Sözleşme, fatura ve yazışmalar bir araya getirilir." },
      { name: "İhtar", text: "Gerekiyorsa karşı tarafa süre verilerek ihtarname gönderilir." },
      { name: "Dava Açılması", text: "Yetkili ve görevli mahkemede dava başlatılır." },
      { name: "Yargılama", text: "Deliller toplanır, bilirkişi incelemesi yapılır ve karar verilir." },
    ],
    crosslinkLabel: "Borçlar Hukuku Avukatı",
    relatedPostSlugs: ["sozlesmeden-donme-ve-tazminat"],
  },
];

export const adalarServices: PseoService[] = [...adalarBaseServices, adalarMiras];
