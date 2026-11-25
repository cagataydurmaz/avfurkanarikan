// Hizmet sayfalarındaki etkileşimli "durumunuzu değerlendirin" yönlendiricisi ve süreç çizelgesi verisi.
// Yalnızca sitede doğrulanmış genel kurallar kullanılır; sonuç vaadi yoktur.
// {ilce}, {ilceDe} ve {adliye} yer tutucuları sayfada ilçe adı, bulunma hâli ve bağlı adliye ile değiştirilir.

export type GuideResult = {
  title: string;
  points: string[];
  /** WhatsApp'ta hazır dolacak mesajın durum kısmı */
  message: string;
  link?: { href: string; label: string };
};

export type GuideOption = { label: string; next?: string; result?: GuideResult };
export type GuideStep = { question: string; options: GuideOption[] };

export type ServiceGuide = {
  /** Bağlamsal çağrıda kullanılan konu ("kira veya tahliye") */
  topic: string;
  title: string;
  intro: string;
  start: string;
  steps: Record<string, GuideStep>;
  timeline: { title: string; steps: { title: string; text: string }[] };
};

const ARABULUCULUK =
  "Kira uyuşmazlıklarında dava açmadan önce arabulucuya başvurmak zorunludur; anlaşma sağlanamazsa dava yoluna gidilir.";

export const GUIDES: Record<string, ServiceGuide> = {
  "kira-tahliye": {
    topic: "kira veya tahliye",
    title: "Durumunuzu iki soruda değerlendirin",
    intro: "Size uyan seçenekleri işaretleyin; ilgili kuralları ve izlenebilecek yolu özetleyelim.",
    start: "rol",
    steps: {
      rol: {
        question: "Kira ilişkisinde hangi taraftasınız?",
        options: [
          { label: "Ev / işyeri sahibiyim", next: "sahip" },
          { label: "Kiracıyım", next: "kiraci" },
        ],
      },
      sahip: {
        question: "Yaşadığınız sorun hangisi?",
        options: [
          {
            label: "Kira ödenmiyor",
            result: {
              title: "Kira ödenmediğinde izlenebilecek yol",
              points: [
                "Konut ve çatılı işyeri kirasında, ödenmeyen kira için kiracıya en az 30 gün süre verilerek yazılı bildirim yapılır (TBK m.315). Süre içinde ödenmezse sözleşme feshedilebilir.",
                "Ödenmeyen kira alacağı için icra takibi de başlatılabilir; hangi yolun uygun olduğu sözleşmeye ve ödeme kayıtlarına göre değerlendirilir.",
                ARABULUCULUK,
                "{ilceDe}ki kira davaları {adliye}'nde görülür.",
              ],
              message: "{ilceDe} ev sahibiyim, kiracı kirayı ödemiyor.",
            },
          },
          {
            label: "Kendim veya yakınım için ihtiyacım var",
            result: {
              title: "İhtiyaç nedeniyle tahliye",
              points: [
                "Kiraya veren; kendisi, eşi, altsoyu, üstsoyu veya bakmakla yükümlü olduğu kişiler için konut ya da işyeri ihtiyacı varsa tahliye davası açabilir (TBK m.350).",
                "İhtiyacın gerçek, samimi ve sürekli olması gerekir; mahkeme bunu somut delillerle değerlendirir.",
                "Dava kanunda öngörülen sürelere bağlıdır; süre kaçırılırsa dava açma imkânı bir sonraki döneme kalabilir.",
                ARABULUCULUK,
              ],
              message: "{ilceDe} ev sahibiyim, kiralık konuta kendim veya yakınım için ihtiyacım var.",
            },
          },
          {
            label: "Kira artışı veya güncel kira bedeli",
            result: {
              title: "Kira artışı ve kira tespiti",
              points: [
                "Konut ve çatılı işyeri kiralarında yenilenen dönemdeki artış, bir önceki kira yılının TÜFE on iki aylık ortalamasındaki değişimi geçemez (TBK m.344).",
                "Uzun süreli kiralarda ya da sözleşmede artış hükmü yoksa kira bedelinin mahkemece belirlenmesi (kira tespit davası) gündeme gelebilir.",
                ARABULUCULUK,
              ],
              message: "{ilceDe} ev sahibiyim, kira artışı veya kira tespiti hakkında bilgi almak istiyorum.",
              link: { href: "/kira-artisi-hesaplama", label: "Kira artışını hesaplayın" },
            },
          },
          {
            label: "Kiracı tahliye taahhüdü vermişti",
            result: {
              title: "Tahliye taahhüdüne dayalı tahliye",
              points: [
                "Yazılı tahliye taahhüdünün geçerli olması için kiralananın tesliminden sonra verilmiş olması gerekir (TBK m.352/1).",
                "Taahhüt edilen tarihte boşaltılmazsa icra yoluyla veya dava ile tahliye istenebilir; kanundaki süreler kısadır, gecikmeden harekete geçilmelidir.",
                "Taahhütnamenin aslını ve teslim tarihini gösteren belgeleri saklayın.",
              ],
              message: "{ilceDe} ev sahibiyim, kiracının tahliye taahhüdü var ama çıkmıyor.",
            },
          },
        ],
      },
      kiraci: {
        question: "Yaşadığınız sorun hangisi?",
        options: [
          {
            label: "Ev sahibi çıkmamı istiyor",
            result: {
              title: "Kiracı olarak tahliye talebi karşısında",
              points: [
                "Konut kirasında sözleşme süresinin bitmesi tek başına tahliye sebebi değildir; tahliye ancak kanunda sayılan sebeplerle (ödeme yapılmaması, ihtiyaç, yeniden inşa, uzama süresinin dolması gibi) mümkündür.",
                "Size gönderilen ihtarname, taahhüt belgesi veya arabuluculuk davetini saklayın ve süreleri takip edin.",
                ARABULUCULUK,
              ],
              message: "{ilceDe} kiracıyım, ev sahibi çıkmamı istiyor.",
            },
          },
          {
            label: "Kira artışı fazla geliyor",
            result: {
              title: "Kiracı açısından kira artışı",
              points: [
                "Konut ve çatılı işyeri kiralarında yenilenen dönemdeki artış, bir önceki kira yılının TÜFE on iki aylık ortalamasındaki değişimi geçemez (TBK m.344).",
                "Talep edilen artışın bu sınırı aşıp aşmadığını hesaplayarak yazılı olarak bildirmeniz uyuşmazlığı netleştirir.",
              ],
              message: "{ilceDe} kiracıyım, istenen kira artışı yüksek geliyor.",
              link: { href: "/kira-artisi-hesaplama", label: "Kira artışını hesaplayın" },
            },
          },
          {
            label: "Güvence bedeli (depozito) iade edilmiyor",
            result: {
              title: "Güvence bedelinin iadesi",
              points: [
                "Kira ilişkisi sona erdiğinde kiralananda hasar ve kira borcu yoksa güvence bedelinin iadesi istenebilir.",
                "Önce yazılı talepte bulunmak, teslim tutanağını ve ödeme kayıtlarını saklamak önemlidir.",
                ARABULUCULUK,
              ],
              message: "{ilceDe} kiracıydım, depozitom iade edilmiyor.",
            },
          },
        ],
      },
    },
    timeline: {
      title: "Kira ödenmediğinde tahliye süreci",
      steps: [
        { title: "Belgeleri toplayın", text: "Kira sözleşmesi, ödeme dekontları ve yazışmalar bir araya getirilir." },
        { title: "Yazılı bildirim", text: "Kiracıya ödeme için en az 30 gün süre verilir (TBK m.315)." },
        { title: "Arabuluculuk", text: "Dava açmadan önce arabulucuya başvurmak zorunludur." },
        { title: "Tahliye davası", text: "Anlaşma sağlanamazsa sulh hukuk mahkemesinde dava açılır; dosya {adliye}'nde görülür." },
        { title: "Tahliyenin uygulanması", text: "Tahliye kararı icra dairesi aracılığıyla yerine getirilir." },
      ],
    },
  },
};

/** Pilot: yönlendiricinin gösterildiği sayfalar ("ilçe:servis"). */
export const GUIDE_PAGES = new Set<string>(["kadikoy:kira-tahliye"]);

export function fill(text: string, d: { name: string; locative: string; courthouse: string }): string {
  return text
    .replaceAll("{ilceDe}", d.locative)
    .replaceAll("{ilce}", d.name)
    .replaceAll("{adliye}", d.courthouse);
}
