// Makale zenginleştirme verisi (makale gövdesinden ayrı tutulur).
// summary: soruyu doğrudan yanıtlayan 2-3 cümlelik kısa cevap (AEO).
// tools: ilgili hesaplama aracı rotaları (ör. "kidem-tazminati-hesaplama").
// updated: içerik gerçekten güncellendiyse ISO tarih (YYYY-MM-DD).
export interface PostEnrichment {
  summary?: string;
  tools?: string[];
  updated?: string;
}

export const TOOL_LABELS: Record<string, string> = {
  "arac-deger-kaybi-hesaplama": "Araç Değer Kaybı Hesaplama",
  "dava-harci-hesaplama": "Dava Harcı Hesaplama",
  "fazla-mesai-hesaplama": "Fazla Mesai Hesaplama",
  "icra-masrafi-hesaplama": "İcra Masrafı Hesaplama",
  "ihbar-tazminati-hesaplama": "İhbar Tazminatı Hesaplama",
  "infaz-yatar-hesaplama": "İnfaz Yatar Hesaplama",
  "islah-harci-hesaplama": "Islah Harcı Hesaplama",
  "istanbul-adliye-bulucu": "İstanbul Adliye Bulucu",
  "kidem-tazminati-hesaplama": "Kıdem Tazminatı Hesaplama",
  "kira-artisi-hesaplama": "Kira Artışı Hesaplama",
  "kira-stopaji-hesaplama": "Kira Stopajı Hesaplama",
  "nafaka-artisi-hesaplama": "Nafaka Artışı Hesaplama",
  "nafaka-hesaplama": "Nafaka Hesaplama",
  "tapu-harci-hesaplama": "Tapu Harcı Hesaplama",
  "trafik-kazasi-tazminati-hesaplama": "Trafik Kazası Tazminatı Hesaplama",
  "vekalet-ucreti-hesaplama": "Vekalet Ücreti Hesaplama",
  "yillik-izin-hesaplama": "Yıllık İzin Ücreti Hesaplama",
};

export const postEnrichment: Record<string, PostEnrichment> = {
  "ceza-hukukunda-etkin-pismanlik": {
    summary:
      "Etkin pişmanlık, şüpheli veya sanığın suçtan doğan zararı gidermesi, suçun aydınlatılmasına katkı sağlaması ya da suçun tamamlanmasını engellemesi halinde ceza indiriminden yararlanmasını sağlayan bir kurumdur. Yalnızca kanunda açıkça düzenlenen suç tiplerinde, örneğin hırsızlık, zimmet ve rüşvette uygulanır. İndirim oranı beyanın yapıldığı aşamaya göre değişir; kovuşturma başlamadan önceki başvurularda daha yüksek indirim öngörülmüştür.",
    updated: "2026-11-09",
  },
  "bosanma-davasinda-velayet": {
    summary:
      "Boşanmada velayet, TMK m.182 uyarınca çocuğun üstün yararı esas alınarak eşlerden birine verilir. Mahkeme çocuğun yaşını, ebeveynlerin bakım kapasitesini, çocuğun okul ve sosyal çevresini, yaşına ve olgunluğuna göre görüşünü ve ebeveynle bağını birlikte değerlendirir; gerektiğinde pedagog veya psikolog gibi uzmanlardan rapor alınır. Koşullar değişirse velayetin yeniden düzenlenmesi için dava açılabilir.",
    updated: "2026-11-09",
  },
  "kidem-tazminati-hesaplama-2026": {
    summary:
      "Kıdem tazminatı, en az bir yıl çalışmış işçinin sözleşmesi işverenin haklı sebep olmaksızın feshi, işçinin haklı nedenle istifası, askerlik, emeklilik veya kadın işçinin evlilikten itibaren bir yıl içinde ayrılması gibi hallerde sona erdiğinde doğar. Her tam çalışma yılı için 30 günlük giydirilmiş brüt ücret esas alınır ve tutar kıdem tazminatı tavanını aşamaz. Dava için 5 yıllık zamanaşımı süresi vardır.",
    tools: ["kidem-tazminati-hesaplama", "ihbar-tazminati-hesaplama"],
    updated: "2026-11-09",
  },
  "kiracinin-tahliye-sureci": {
    summary:
      "Kiraya veren, kiracıyı yalnızca TBK'da sınırlı olarak sayılan sebeplere dayanarak tahliye ettirebilir; konut ve çatılı işyerinde belirli sürenin dolması tek başına yeterli değildir. Başlıca sebepler kira bedelinin ödenmemesi, yazılı tahliye taahhüdü, bir kira yılında iki haklı ihtar, kiraya verenin veya yeni malikin ihtiyacı ile yeniden inşa ya da esaslı onarımdır. Kilit değiştirme gibi kendiliğinden tahliye girişimleri hukuki sorumluluk doğurur.",
    tools: ["dava-harci-hesaplama", "icra-masrafi-hesaplama"],
    updated: "2026-11-09",
  },
  "miras-sakli-pay-tenkis": {
    summary:
      "Saklı pay, mirasbırakanın tasarruf özgürlüğüne karşı alt soy, ana-baba ve sağ kalan eş için TMK ile güvence altına alınan asgari miras payıdır; örneğin alt soyun saklı payı yasal payının yarısıdır. Vasiyetname veya sağlıkta yapılan bağışlar bu payı zedeliyorsa saklı pay mirasçısı, aşan kısmın indirilmesi için tenkis davası açabilir. Dava, zedelenmenin öğrenilmesinden itibaren 1 yıl içinde açılmalıdır.",
    tools: ["dava-harci-hesaplama"],
    updated: "2026-11-09",
  },
  "sozlesmeden-donme-ve-tazminat": {
    summary:
      "Sözleşmeden dönme hakkı esas olarak iki durumda kullanılır: borçlunun temerrüdünde, alacaklının tanıdığı uygun süre içinde de ifa gerçekleşmezse (TBK m.125) ve teslim edilen malın ayıplı olması halinde (TBK m.227). Dönme sözleşmeyi geriye etkili olarak sona erdirir ve taraflar aldıklarını iade etmekle yükümlü olur. Temerrüt halinde dönmeyle birlikte olumsuz zararın tazmini de istenebilir.",
    updated: "2026-11-09",
  },
  "ise-iade-davasi": {
    summary:
      "İşe iade davası, en az 30 işçinin çalıştığı işyerinde, belirsiz süreli sözleşmeyle en az 6 ay kıdemi olan ve işveren vekili sayılmayan işçinin geçerli sebep olmadan işten çıkarılması halinde açılabilir. Fesih bildiriminin tebliğinden itibaren 1 ay içinde arabulucuya başvurmak zorunludur; anlaşma sağlanamazsa son tutanaktan itibaren 2 hafta içinde iş mahkemesinde dava açılır.",
    tools: ["kidem-tazminati-hesaplama", "ihbar-tazminati-hesaplama"],
    updated: "2026-11-09",
  },
  "tutukluluga-itiraz": {
    summary:
      "Tutukluluğa iki temel yolla karşı çıkılabilir: tutuklu veya avukatı her aşamada salıverilme talebinde bulunabilir ve hâkim bu talebi en geç 3 gün içinde karara bağlar; ayrıca tutuklama kararına 7 gün içinde itiraz edilebilir. Tutuklama, adli kontrol tedbirlerinin yetersiz kaldığı hallerde başvurulan istisnai bir tedbirdir. İç hukuk yolları tükendikten sonra Anayasa Mahkemesi'ne bireysel başvuru yapılabilir.",
    updated: "2026-11-09",
  },
  "bosanmada-nafaka-turleri": {
    summary:
      "TMK boşanmayla bağlantılı dört nafaka türü düzenler: dava süresince eş ve çocuklar için tedbir nafakası (m.169), velayeti olmayan ebeveynin çocuk için ödediği iştirak nafakası (m.182), boşanma yüzünden yoksulluğa düşecek ve daha ağır kusurlu olmayan eşe yoksulluk nafakası (m.175) ve yoksulluk içindeki alt veya üst soya yardım nafakası (m.364). Miktar sabit bir formülle değil, tarafların ekonomik durumuna göre belirlenir.",
    tools: ["nafaka-hesaplama", "nafaka-artisi-hesaplama"],
    updated: "2026-11-09",
  },
  "tapu-iptali-ve-tescil-davasi": {
    summary:
      "Tapu iptali ve tescil davası, hukuka aykırı oluşturulmuş tapu kaydının mahkeme kararıyla silinip taşınmazın gerçek hak sahibi adına tescilini sağlar. Muris muvazaası, sahte senet veya imza, hata, hile, ikrah ve kadastro hatası başlıca dava nedenleridir; muris muvazaasına dayalı davalar süreye tabi değildir. Tapuya güvenerek iyiniyetle taşınmaz edinen üçüncü kişinin hakkı ise TMK m.1023 ile korunur.",
    tools: ["dava-harci-hesaplama"],
    updated: "2026-11-09",
  },
  "vasiyetname-nasil-duzenlenir": {
    summary:
      "Vasiyetname üç şekilde düzenlenebilir: noter huzurunda iki tanıkla yapılan resmi vasiyetname, tamamı el yazısıyla yazılıp gün, ay ve yılı içeren tarih ile imza taşıyan el yazılı vasiyetname ve yalnızca olağanüstü hallerde iki tanık önünde yapılan sözlü vasiyetname. Düzenleyenin 15 yaşını doldurmuş ve ayırt etme gücüne sahip olması gerekir; şekil eksikliği iptal sebebi olabilir.",
    updated: "2026-11-09",
  },
  "icra-takibi-ve-borca-itiraz": {
    summary:
      "İlamsız icra takibinde borçlu, ödeme emrinin tebliğinden itibaren 7 gün içinde icra dairesine yazılı veya sözlü olarak borca ya da imzaya itiraz edebilir; süresinde yapılan itiraz takibi kendiliğinden durdurur. Alacaklı takibe devam etmek için itirazın tebliğinden itibaren 1 yıl içinde genel mahkemede itirazın iptali davası açabilir ya da elinde uygun belge varsa icra mahkemesinden itirazın kaldırılmasını isteyebilir.",
    tools: ["icra-masrafi-hesaplama"],
    updated: "2026-11-09",
  },
  "ortakligin-giderilmesi-davasi": {
    summary:
      "Ortaklığın giderilmesi davası, paylı veya elbirliği mülkiyetindeki bir malda paydaşlardan herhangi birinin diğerlerine karşı, taşınmazın bulunduğu yer sulh hukuk mahkemesinde açtığı davadır. Mal, değerinde önemli azalma olmadan bölünebiliyorsa aynen taksim edilir; bölünemiyorsa ihale yoluyla satılarak bedel pay oranına göre dağıtılır. Satışta kıymet takdirine süresinde itiraz edilmesi malın değerinin korunması bakımından önemlidir.",
    tools: ["dava-harci-hesaplama", "tapu-harci-hesaplama"],
    updated: "2026-11-09",
  },
  "bosanma-sureci-bilinmesi-gerekenler": {
    summary:
      "Boşanma süreci, yetkili aile mahkemesine dava dilekçesi veya anlaşmalı boşanma protokolüyle başvurulmasıyla başlar. Anlaşmalı boşanma için evliliğin en az 1 yıl sürmüş olması gerekir ve dava çoğunlukla tek celsede sonuçlanabilir; çekişmeli boşanmada süre şartı yoktur, ancak dilekçeler, tanık ve bilirkişi incelemesiyle yargılama daha uzun sürer. Kimlik, evlilik cüzdanı ve protokol ya da deliller temel belgelerdir.",
    tools: ["nafaka-hesaplama", "dava-harci-hesaplama"],
    updated: "2026-11-09",
  },
  "ziynet-esyasi-davasi": {
    summary:
      "Yerleşik Yargıtay içtihatlarına göre düğünde takılan ziynet eşyaları, aksi kanıtlanmadıkça kadına ait kabul edilir; doğrudan erkeğe takılan ziynetler ise kural olarak erkeğe ait sayılır. Ziynetlerin ortak ihtiyaçlar için bozdurulduğunu iddia eden taraf bunu ispatlamalıdır. Ziynet alacağı davası boşanma davasıyla birlikte veya ayrı açılabilir; ziynetlerin aynen iadesi ya da güncel bedeli istenebilir.",
    tools: ["dava-harci-hesaplama"],
    updated: "2026-11-09",
  },
  "kira-bedeli-tespit-ve-uyarlama-davasi": {
    summary:
      "Kira bedeli tespit davası, TBK m.344'e dayanarak yeni kira döneminde uygulanacak bedelin belirlenmesi için açılır ve artış kural olarak TÜFE'nin on iki aylık ortalamalarına göre değişim oranıyla sınırlıdır; beş yılı aşan ilişkilerde hâkim rayiç bedeli de dikkate alabilir. Uyarlama davası ise TBK m.138'deki aşırı ifa güçlüğüne dayanır ve öngörülemeyen olağanüstü bir durumla edimler arasındaki dengenin bozulmasını gerektirir.",
    tools: ["kira-artisi-hesaplama", "dava-harci-hesaplama"],
    updated: "2026-11-09",
  },
  "muris-muvazaasi-nedir": {
    summary:
      "Muris muvazaası, mirasbırakanın mirasçısını miras hakkından yoksun bırakmak amacıyla gerçekte bağışladığı taşınmazını tapuda satış gibi göstererek devretmesidir. Yasal mirasçıların her biri, miras payı oranında tapu iptali ve tescil davası açabilir; dava kesin hükümsüzlüğe dayandığından süreye tabi değildir. Bu dava, saklı payı aşan kısmın indirilmesini amaçlayan tenkis davasından farklıdır.",
    tools: ["dava-harci-hesaplama"],
    updated: "2026-11-09",
  },
  "idari-islemin-iptali-davasi": {
    summary:
      "İdari işlemin iptali davası, idarenin tek taraflı ve icrai işlemlerinin hukuka aykırılık iddiasıyla iptalinin istenmesidir. İYUK m.7 uyarınca dava açma süresi idare mahkemeleri ve Danıştay'da 60 gün, vergi mahkemelerinde 30 gündür ve bu süreler hak düşürücüdür. Telafisi güç zarar ihtimali ile işlemin açıkça hukuka aykırılığı birlikte bulunursa yürütmenin durdurulması istenebilir.",
    updated: "2026-11-09",
  },
  "vergi-ihbarnamesine-itiraz-ve-uzlasma": {
    summary:
      "Vergi veya ceza ihbarnamesi tebliğ edilen mükellef, tebliğden itibaren 30 gün içinde uzlaşma talep edebilir, vergi mahkemesinde dava açabilir ya da VUK m.376 kapsamında ceza indirimi isteyebilir. 7524 sayılı Kanun ile vergi aslı uzlaşma kapsamından çıkarıldığından uzlaşma yalnızca belirli cezalar için mümkündür. Uzlaşma sağlanamazsa kalan dava süresi işler; bu süre 15 günden azsa 15 güne tamamlanır.",
    updated: "2026-11-09",
  },
  "nafakada-yuzde-kac-sorusu": {
    summary:
      "Nafaka için kanunda veya Yargıtay içtihadında sabit bir yüzde yoktur; internette görülen oranlar resmi olmayan genellemelerdir. Hâkim miktarı her davanın somut koşullarına göre, hakkaniyet ilkesi çerçevesinde belirler. İştirak nafakasında çocuğun ihtiyaçları ve her iki ebeveynin geliri, yoksulluk nafakasında ayrıca kusur, evlilik süresi ve çalışma kapasitesi değerlendirilir; yükümlünün ödeme gücü de gözetilir.",
    tools: ["nafaka-hesaplama", "nafaka-artisi-hesaplama"],
    updated: "2026-11-09",
  },
  "giydirilmis-ucret-kavrami": {
    summary:
      "Giydirilmiş ücret, işçinin çıplak ücretine yol, yemek, ikramiye, düzenli prim ve özel sağlık sigortası gibi para veya para ile ölçülebilen, süreklilik arz eden yan menfaatlerin eklenmesiyle bulunan ücrettir. Kıdem tazminatı bu ücret üzerinden hesaplanır; İş Kanunu m.17 son fıkrası da ihbar tazminatı için aynı kuralı öngörür. Yılda bir kez verilen ödül gibi arızi ödemeler hesaba katılmaz.",
    tools: ["kidem-tazminati-hesaplama", "ihbar-tazminati-hesaplama"],
    updated: "2026-11-09",
  },
  "kosullu-saliverilme-oranlari": {
    summary:
      "5275 sayılı Kanun m.107 uyarınca süreli hapis cezalarında genel koşullu salıverilme oranı cezanın yarısıdır. Kasten öldürme, nitelikli cinsel suçlar, uyuşturucu ticareti ve terör suçları gibi kanunda sayılan kategorilerde 2/3 veya 3/4 gibi daha yüksek oranlar uygulanır; müebbette 24, ağırlaştırılmış müebbette 30 yıl esas alınır. İyi hal süreyi kısaltmaz, tahliye için aranan bir ön şarttır.",
    tools: ["infaz-yatar-hesaplama"],
    updated: "2026-11-09",
  },
  "mirasin-reddi-nasil-yapilir": {
    summary:
      "Miras, TMK m.606 uyarınca üç ay içinde, sulh hukuk mahkemesine sözlü veya yazılı, kayıtsız ve şartsız bir beyanla reddedilir. Süre yasal mirasçılar için ölümün öğrenilmesinden, atanmış mirasçılar için tasarrufun resmen bildirilmesinden başlar. Süre içinde reddetmeyen ya da tereke işlemlerine karışan veya tereke mallarını gizleyen mirasçı mirası kazanmış olur; mirasbırakanın ödemeden aczi açıkça belliyse miras reddedilmiş sayılır.",
    updated: "2026-11-09",
  },
  "fazla-mesai-alacagi-ve-ispati": {
    summary:
      "Fazla mesai, haftalık 45 saati aşan çalışmadır ve her saat için normal saat ücretinin yüzde elli fazlası ödenir (İş K. m.41); yılda en fazla 270 saat fazla çalışma yaptırılabilir. İspat yükü kural olarak işçidedir; puantaj, giriş-çıkış kayıtları, bordrolar, yazışmalar ve tanık beyanları kullanılabilir. Alacak 5 yıllık zamanaşımına tabidir ve dava öncesinde arabulucuya başvurmak zorunludur.",
    tools: ["fazla-mesai-hesaplama"],
    updated: "2026-11-09",
  },
  "ihtiyac-nedeniyle-tahliye-davasi": {
    summary:
      "Kiraya veren, kendisi, eşi, altsoyu, üstsoyu veya bakmakla yükümlü olduğu kişiler için konut ya da işyeri kullanma zorunluluğu varsa TBK m.350 uyarınca tahliye davası açabilir. Belirli süreli sözleşmede dava, sürenin sonundan itibaren 1 ay içinde açılmalıdır ve ihtiyacın gerçek, samimi ve zorunlu olması beklenir. Tahliye sağlanırsa kiralanan, haklı sebep olmadıkça 3 yıl boyunca eski kiracıdan başkasına kiralanamaz.",
    tools: ["dava-harci-hesaplama", "kira-artisi-hesaplama"],
    updated: "2026-11-09",
  },
  "kira-artis-orani-nasil-hesaplanir": {
    summary:
      "Konut ve çatılı işyeri kiralarında yıllık artış, TBK m.344 uyarınca bir önceki kira yılında TÜFE'nin on iki aylık ortalamalara göre değişim oranını geçemez. Hesap için mevcut kira, yenileme tarihinden önce TÜİK'in açıkladığı en son bu oranla çarpılıp bedele eklenir; yıllık değişim oranı kullanılmaz. Sözleşmedeki daha yüksek oran yalnızca bu sınıra kadar geçerlidir; %25 geçici sınırı ise sona ermiştir.",
    tools: ["kira-artisi-hesaplama"],
    updated: "2026-11-09",
  },
  "trafik-kazasi-tazminati-ve-arac-deger-kaybi": {
    summary:
      "Trafik kazasında zarar gören, bedensel zararlar ve araç değer kaybı için önce kazaya sebep olan aracın zorunlu trafik sigortacısına yazılı başvurur; sigortacı 15 gün içinde cevap vermez veya talep karşılanmazsa dava açılabilir ya da Sigorta Tahkim Komisyonu'na gidilebilir. KTK m.109 uyarınca zamanaşımı, zarar ve yükümlünün öğrenilmesinden itibaren 2 yıl, her halde kazadan itibaren 10 yıldır.",
    tools: ["trafik-kazasi-tazminati-hesaplama", "arac-deger-kaybi-hesaplama"],
    updated: "2026-11-09",
  },
};

const TR_MONTHS = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
export function formatTrDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${TR_MONTHS[m - 1]} ${y}`;
}
