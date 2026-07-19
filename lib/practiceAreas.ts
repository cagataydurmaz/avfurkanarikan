export type PracticeAreaSection = {
  heading: string;
  paragraphs: string[];
  items?: string[];
};

export type PracticeAreaFAQ = {
  question: string;
  answer: string;
};

export type PracticeAreaLink = {
  label: string;
  href: string;
};

export type PracticeArea = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: PracticeAreaSection[];
  faq: PracticeAreaFAQ[];
  relatedSlugs: string[];
  relatedLinks?: PracticeAreaLink[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "ceza-hukuku",
    title: "Ceza Hukuku",
    metaTitle: "Ceza Hukuku",
    metaDescription:
      "Soruşturma ve kovuşturma aşamalarında müdafilik, tutukluluk itirazı, ifade ve sorgu süreçlerinde İstanbul'da hukuki destek.",
    intro:
      "Ceza hukuku; devletin suç olarak tanımladığı eylemler karşısında bireylerin haklarını, yükümlülüklerini ve yargılanma sürecini düzenleyen hukuk dalıdır. Türkiye'de ceza yargılaması 5271 sayılı Ceza Muhakemesi Kanunu (CMK) çerçevesinde yürütülür. Soruşturma aşamasından kesinleşmiş mahkumiyet kararına kadar her aşamada hukuki destek alınabilir.",
    sections: [
      {
        heading: "Ceza Davasında Süreç Nasıl İşler?",
        paragraphs: [
          "Ceza yargılaması iki temel aşamadan oluşur: soruşturma ve kovuşturma. Soruşturma aşaması; suç ihbarı veya re'sen başlatılan incelemeyle birlikte savcılık tarafından yürütülür. Bu aşamada şüpheli sıfatıyla ifade verilmesi, gözaltı ve tutukluluk kararları söz konusu olabilir.",
          "Kovuşturma aşaması, savcılığın iddianame düzenleyerek mahkemeye sunmasıyla başlar. Mahkeme, iddianameyi kabul ettiğinde dava açılmış olur ve sanık sıfatı doğar. Yargılama sürecinde duruşmalar yapılır, deliller incelenir ve karar aşamasına gelinir.",
        ],
      },
      {
        heading: "Soruşturma Aşamasında Şüphelinin Hakları",
        paragraphs: [
          "CMK'nın 147. maddesi uyarınca şüpheli; susma hakkına sahiptir, müdafi seçme ya da atanan müdafiden yararlanma hakkına sahiptir ve aleyhindeki suçlamalar hakkında bilgilendirilme hakkına sahiptir. Bu haklardan herhangi birinin kullandırılmaması usul hukuku ihlali oluşturur.",
          "Gözaltı süresi kural olarak 24 saattir; ancak toplu suçlarda savcılık kararıyla bu süre 4 güne kadar uzatılabilir. Gözaltı süresinin dolmasına rağmen serbest bırakılmayan kişiler için sulh ceza hakimliğine başvurulabilir.",
        ],
        items: [
          "Susma hakkı: Şüpheli, kendisini suçlayan beyanda bulunmaya zorlanamaz.",
          "Müdafi hakkı: İfade öncesinde avukatla görüşme hakkı kullanılabilir.",
          "Bilgilendirilme hakkı: Hangi suçla itham edildiği açıkça belirtilmelidir.",
          "Yakınları arama hakkı: Gözaltına alınan kişi istediği bir yakınını haberdar edebilir.",
        ],
      },
      {
        heading: "Tutukluluk ve Adli Kontrol",
        paragraphs: [
          "Tutukluluk, kuvvetli suç şüphesi ve tutukluluk nedenlerinden birinin varlığı halinde sulh ceza hakimliği kararıyla uygulanır. CMK'nın 100. maddesi uyarınca tutukluluk; şüphelinin kaçma, delil karartma veya suçu tekrarlama şüphesi gerekçe olarak gösterilebilir.",
          "Adli kontrol, tutuklamaya alternatif olarak uygulanan bir tedbir kümesidir. Belirli bir yeri terk etmeme, imzaya gelme, pasaport teslimi gibi yükümlülükleri kapsar. Tutukluluk kararlarına karşı itiraz yolu açıktır; itiraz sulh ceza hakimliğine yapılır.",
        ],
      },
      {
        heading: "Kovuşturma Aşaması ve Duruşma Süreci",
        paragraphs: [
          "İddianamenin kabul edilmesiyle başlayan kovuşturma aşamasında sanık, suçlamayla yüzleşme ve savunma yapma hakkına sahiptir. Duruşmalarda iddia makamı ve savunma tarafı delillerini sunar; tanıklar dinlenir, bilirkişi raporları değerlendirilir.",
          "Kararın açıklanmasından sonra Bölge Adliye Mahkemesi'ne istinaf, ardından Yargıtay'a temyiz yolu kullanılabilir. Kesinleşmiş kararlara karşı olağanüstü kanun yolları da gündeme gelebilir.",
        ],
      },
    ],
    faq: [
      {
        question: "Gözaltına alındığımda avukata ne zaman ulaşabilirim?",
        answer:
          "CMK'nın 154. maddesi uyarınca gözaltına alınan kişi, gözaltının başladığı andan itibaren müdafisiyle görüşme hakkına sahiptir. Savcılık veya kolluk bu hakkın kullanılmasını kısıtlayamaz. İfade başlamadan önce avukatınızla görüşme talebinde bulunmanız hakkınızdır.",
      },
      {
        question: "Müdafi tutmak zorunlu mu?",
        answer:
          "Alt sınırı 5 yıl veya daha fazla hapis cezasını gerektiren suçlar ile çocuklar ve engelli kişiler söz konusu olduğunda müdafi zorunludur. Diğer durumlarda müdafi atanması isteğe bağlıdır; ekonomik yetersizlik halinde baro tarafından ücretsiz müdafi atanması talep edilebilir.",
      },
      {
        question: "Şüpheli olarak ifade vermek zorunda mıyım?",
        answer:
          "Hayır. Susma hakkı Anayasa'nın 38. maddesi ve CMK'nın 147. maddesiyle güvence altındadır. Şüpheli, kendisi hakkında suçlayıcı beyanda bulunmaya zorlanamaz; ifade vermeme susma hakkının kullanılmasıdır ve aleyhte delil sayılamaz.",
      },
      {
        question: "Tutukluluk süresi ne kadar olabilir?",
        answer:
          "Ağır ceza mahkemelerinin görevine giren suçlarda tutukluluk süresi soruşturma aşamasında en fazla 6 ay olup bu süre uzatılabilir. Kovuşturma aşamasındaki toplam tutukluluk süresi ise suçun niteliğine göre 2 ila 7 yıl arasında değişir.",
      },
      {
        question: "Beraat kararı kesinleştikten sonra tazminat talep edebilir miyim?",
        answer:
          "Evet. CMK'nın 141. maddesi uyarınca haksız gözaltı veya tutukluluk nedeniyle uğranılan zararlar için devletten tazminat talep edilebilir. Dava, karar tarihinden itibaren 3 ay ve her halükarda 1 yıl içinde açılmalıdır.",
      },
    ],
    relatedSlugs: ["aile-hukuku", "borclar-hukuku", "tazminat-hukuku"],
  },

  {
    slug: "is-hukuku",
    title: "İş Hukuku",
    metaTitle: "İş Hukuku",
    metaDescription:
      "Haksız fesih, kıdem ve ihbar tazminatı, işe iade davası, fazla mesai ve işçi hakları konularında İstanbul'da hukuki destek.",
    intro:
      "İş hukuku; işçi ile işveren arasındaki ilişkileri, iş sözleşmesinin kurulmasından sona ermesine dek tüm süreçleri düzenleyen hukuk dalıdır. Türkiye'de temel kaynak 4857 sayılı İş Kanunu'dur. Bunun yanı sıra 6356 sayılı Sendikalar ve Toplu İş Sözleşmesi Kanunu, 5510 sayılı Sosyal Sigortalar Kanunu ve Borçlar Kanunu'nun genel hükümleri de uygulanır.",
    sections: [
      {
        heading: "İş Sözleşmesinin Feshi Türleri",
        paragraphs: [
          "İş sözleşmesi; işçi veya işveren tarafından, haklı nedenle ya da süreli (ihbarlı) olarak feshedilebilir. Haklı nedenle fesih, İş Kanunu'nun 24. ve 25. maddelerinde düzenlenmiştir. İşveren tarafından yapılan feshin geçerli nedene dayanması gerekir; geçersiz fesih halinde işe iade davası açılabilir.",
          "Süreli fesih, iş sözleşmesine son verilmeden önce öngörülen ihbar sürelerine uyulmasını gerektirir. İhbar süresine uyulmaması durumunda ihbar tazminatı ödenmesi gerekir. İşçinin kıdemine göre ihbar süresi 2 ila 8 hafta arasında değişir.",
        ],
      },
      {
        heading: "Kıdem Tazminatı: Hak Kazanma Koşulları",
        paragraphs: [
          "Kıdem tazminatı hakkı; en az 1 yıl çalışmış olan işçinin iş sözleşmesinin belirli koşullarla sona ermesi durumunda doğar. Bu koşullar: işveren tarafından geçerli nedene dayanmaksızın fesih, işçinin haklı nedenle istifa, emeklilik, askerlik veya evlilik nedeniyle işten ayrılma olarak sayılabilir.",
          "Kıdem tazminatı, her tam çalışma yılı için 30 günlük brüt ücret üzerinden hesaplanır. Hesaplamada ücretin yanı sıra düzenli olarak ödenen prim, yakacak yardımı, yemek ve servis bedeli gibi kalemler de dikkate alınır.",
        ],
      },
      {
        heading: "İşe İade Davası",
        paragraphs: [
          "30 veya daha fazla işçi çalıştıran işyerlerinde en az 6 aydır çalışan ve belirsiz süreli iş sözleşmesiyle istihdam edilen işçi; iş güvencesi kapsamındadır. Bu kapsamdaki bir işçinin sözleşmesi geçerli neden gösterilmeksizin feshedilirse işe iade davası açılabilir.",
          "İşe iade davası, fesih bildiriminin tebliğinden itibaren 1 ay içinde arabulucuya başvurulması; arabuluculukta anlaşılamaması halinde 2 hafta içinde iş mahkemesine başvurulmasıyla başlar. Mahkeme işe iade kararı verirse işveren, işçiyi 1 ay içinde işe başlatmak zorundadır.",
        ],
      },
      {
        heading: "Fazla Mesai ve Diğer İşçi Alacakları",
        paragraphs: [
          "Haftalık 45 saati aşan çalışmalar fazla mesai sayılır ve yüzde elli zamlı ücretle ödenir. İşçi; yıllık izin alacağı, hafta tatili ücreti, ulusal bayram ve genel tatil ücreti gibi alacaklar için de yasal haklara sahiptir. Bu alacakların ödenmemesi halinde iş mahkemesinde dava açılabilir.",
          "İşçi alacaklarında genel zamanaşımı süresi 5 yıldır; ancak kıdem ve ihbar tazminatı alacaklarında da 5 yıllık süre uygulanır. Zamanaşımı süresi dolmadan dava açılması ya da arabulucuya başvurulması önerilir.",
        ],
      },
    ],
    faq: [
      {
        question: "İş akdim haksız yere feshedildi, ne yapabilirim?",
        answer:
          "İş güvencesi kapsamındaysanız fesih bildiriminin tebliğinden itibaren 1 ay içinde arabulucuya başvurmanız gerekir. Arabuluculukta uzlaşılamaması halinde 2 hafta içinde iş mahkemesinde işe iade davası açılabilir. İş güvencesi kapsamı dışındaysanız kıdem ve ihbar tazminatı talep edebilirsiniz.",
      },
      {
        question: "Kıdem tazminatı almaya hak kazandım mı?",
        answer:
          "Kıdem tazminatına hak kazanmak için en az 1 yıl aynı işyerinde çalışmış olmanız ve iş sözleşmenizin belirli nedenlerle sona ermesi gerekir. İşveren tarafından yapılan geçersiz fesih, emeklilik, haklı nedenle istifa ve askerlik bu nedenler arasındadır. İstifanın haklı nedenlere dayandığını ispat etmek önemlidir.",
      },
      {
        question: "İşveren ibranameyi imzalatırsa haklarımı kaybeder miyim?",
        answer:
          "Hayır, salt imza ibranın geçerliliğini sağlamaz. İbranamenin geçerli olabilmesi için fesihten en az 1 ay sonra düzenlenmesi, ödeme belgesiyle desteklenmesi ve belirli bir alacak kalemini açıkça göstermesi gerekir. Baskı altında imzalanan ya da ödeme yapılmadan alınan ibranameler iş mahkemesinde geçersiz sayılabilir.",
      },
      {
        question: "İşe iade kararı verilirse işveren işe başlatmak zorunda mı?",
        answer:
          "Evet. Mahkeme işe iade kararı verdiğinde işveren, kararın kesinleşmesinden itibaren 1 ay içinde işçiyi işe başlatmak zorundadır. İşe başlatmama durumunda 4 ila 8 aylık brüt ücret tutarında işe başlatmama tazminatı ödenir; ayrıca kararın kesinleşmesine kadar en fazla 4 aya kadar boşta geçen süre ücreti ödenir.",
      },
      {
        question: "Fazla mesai alacağımı nasıl ispat edebilirim?",
        answer:
          "Fazla mesai alacağı; bordro kayıtları, mesai çizelgeleri, işyeri giriş-çıkış kayıtları ve tanık ifadesiyle ispat edilebilir. İşverenin kayıt tutmaması veya sunmaması halinde mahkeme, işçinin beyanını esas alarak hesaplama yapabilir. Ancak güçlü belgeler davanın seyri üzerinde belirleyici rol oynar.",
      },
    ],
    relatedSlugs: ["borclar-hukuku", "gayrimenkul-hukuku", "tahkim-arabuluculuk"],
  },

  {
    slug: "gayrimenkul-hukuku",
    title: "Gayrimenkul Hukuku",
    metaTitle: "Gayrimenkul Hukuku",
    metaDescription:
      "Kira uyuşmazlıkları, kiracı tahliyesi, tapu iptal ve tescil davaları, kat mülkiyeti uyuşmazlıklarında İstanbul'da hukuki destek.",
    intro:
      "Gayrimenkul hukuku; taşınmaz mülkiyeti, kira ilişkileri ve yapı hukuku gibi konuları kapsayan hukuk alanıdır. Türkiye'de temel kaynaklar; 4721 sayılı Türk Medeni Kanunu, 6098 sayılı Türk Borçlar Kanunu ve 634 sayılı Kat Mülkiyeti Kanunu'dur. Kira sözleşmelerinde ayrıca TBK'nın kira hükümlerine ilişkin 299 ila 378. maddeleri uygulanır.",
    sections: [
      {
        heading: "Kira Sözleşmesi ve Tarafların Yükümlülükleri",
        paragraphs: [
          "Kira sözleşmesi; kiraya verenin kiracıya bir taşınmazın kullanımını bırakmasını, kiracının ise buna karşılık kira bedeli ödemesini içerir. Sözleşme, yazılı ya da sözlü yapılabilir; ancak ispat kolaylığı açısından yazılı form önerilir. Konut ve çatılı işyeri kiralarında TBK'nın özel hükümleri uygulanır.",
          "Kiracının yükümlülükleri arasında kira bedelini zamanında ödemek, taşınmazı özenle kullanmak ve kira döneminin sona ermesiyle taşınmazı iade etmek yer alır. Kiraya verenin yükümlülükleri ise taşınmazı kullanıma elverişli biçimde teslim etmek ve bu durumu sürdürmektir.",
        ],
      },
      {
        heading: "Kiracı Tahliyesi Nasıl Gerçekleşir?",
        paragraphs: [
          "Kira sözleşmesinin sona ermesi kiracının taşınmazı kendiliğinden boşaltması anlamına gelmez. Konut kiralarında sözleşme; kiraya veren tarafından ancak TBK'da sayılan gerekçelerle sona erdirilebilir. Bu gerekçeler; kiracının kira bedelini ödememesi, sözleşmeye aykırı kullanım, ihtiyaç nedeniyle tahliye ve 10 yıllık uzama süresinin sona ermesidir.",
          "Kiraya veren tarafından açılan tahliye davası, sulh hukuk mahkemesinde görülür. Kiracının 2 haklı ihtar nedeniyle tahliye davasında ise ihtar koşullarının usulüne uygun gönderilmiş olması şarttır. Tahliye kararının icrası icra müdürlüğü aracılığıyla gerçekleştirilir.",
        ],
        items: [
          "Ödeme yapılmaması nedeniyle tahliye: Kiracıya 30 günlük ödeme süresi tanıyan ihtarname gönderilmesi gerekir.",
          "İhtiyaç nedeniyle tahliye: Kiraya veren veya birinci derece yakının konut ihtiyacı gerekçesiyle açılır.",
          "Yeniden inşa veya imar: Binanın esaslı onarım gerektirmesi halinde başvurulabilir.",
          "10 yıllık uzama: Kira sözleşmesi 10 kez uzamışsa kiraya veren en az 3 ay önceden bildirimle tahliye isteyebilir.",
        ],
      },
      {
        heading: "Tapu İptal ve Tescil Davaları",
        paragraphs: [
          "Tapu iptal ve tescil davası; hatalı, hileli veya hukuka aykırı biçimde gerçekleştirilen tapu işlemlerinin iptali ve doğru malikin adına tescili amacıyla açılan davadır. Söz konusu davalar asliye hukuk mahkemesinde görülür.",
          "Tapu iptaline yol açabilecek durumlar arasında sahte vekâletname, muvazaalı işlem, ehliyetsizlik, muris muvazaası (miras bırakanın mirasçıları zarara uğratmaya yönelik işlemi) ve hata sayılabilir. Dava açma süresi ihlal türüne göre değiştiğinden zaman kaybedilmeden başvurulması önerilir.",
        ],
      },
      {
        heading: "Kat Mülkiyeti ve Ortak Alan Uyuşmazlıkları",
        paragraphs: [
          "634 sayılı Kat Mülkiyeti Kanunu; apartman ve site gibi bağımsız bölümlerden oluşan yapılarda kat maliklerinin hak ve yükümlülüklerini düzenler. Ortak alanların kullanımı, aidat borçları, yönetim planı ve toplantı kararları bu kanun çerçevesinde çözüme kavuşturulur.",
          "Kat maliklerinin yükümlülüklerini yerine getirmemesi halinde diğer kat malikleri sulh hukuk mahkemesinde dava açabilir. Aidat borcu için icra takibi başlatılması da mümkündür. Yönetim kurulu kararlarına itiraz ise karar tarihinden itibaren 3 ay içinde yapılmalıdır.",
        ],
      },
    ],
    faq: [
      {
        question: "Kiracım kira ödemiyorsa ne yapmalıyım?",
        answer:
          "Kiracıya noter aracılığıyla veya iadeli taahhütlü mektupla 30 günlük ödeme süresi tanıyan ihtarname gönderilmelidir. Bu süre içinde ödeme yapılmazsa sulh hukuk mahkemesinde tahliye davası açılabilir. Bir kira döneminde 2 kez bu yola başvurulmuşsa 2 haklı ihtar nedeniyle tahliye davası yoluna gidilir.",
      },
      {
        question: "Kiracımı tahliye etmek ne kadar sürer?",
        answer:
          "Süre; gerekçeye, mahkeme yoğunluğuna ve itiraz aşamalarına göre değişir. Ödeme yapılmaması nedeniyle açılan davalar ortalama 3 ila 6 ay sürebilir. Tahliye kararının kesinleşmesinin ardından icra takibi başlatılır ve kiracıya 15 günlük tahliye süresi tanınır.",
      },
      {
        question: "Kira artışı için yasal sınır nedir?",
        answer:
          "TBK uyarınca konut kiralarında yıllık artış oranı, bir önceki kira yılı için açıklanan tüketici fiyat endeksi (TÜFE) oranını geçemez. Taraflar bu oranın üzerinde artış kararlaştırmış olsa bile kanuni sınır uygulanır. Kanunun öngördüğü sınırın üzerinde yapılan artış talepleri hukuki geçerlilik taşımaz.",
      },
      {
        question: "Tapusuz yere para ödedim, tapu almak için ne yapabilirim?",
        answer:
          "Tapu devri yapılmadan gerçekleştirilen satım sözleşmeleri 'satış vaadi sözleşmesi' niteliği taşıyabilir. Bu sözleşme noter onaylı ise tapu tescil davası açılabilir. Tapunun devredilmemesi halinde sözleşmenin yerine getirilmesini mahkemeden talep etmek ya da ödenen bedelin iadesi için dava açmak mümkündür.",
      },
      {
        question: "Muris muvazaası nedir?",
        answer:
          "Muris muvazaası; miras bırakanın mirasçıları devre dışı bırakmak amacıyla taşınmazını üçüncü kişilere gerçek bedelin çok altında ya da bağış gibi göstererek devretmesidir. Bu durumda mirasçılar tapu iptal ve tescil davası açarak mirasçıları zarara uğratan işlemin iptalini talep edebilir.",
      },
    ],
    relatedSlugs: ["miras-hukuku", "borclar-hukuku", "yabancilar-hukuku"],
  },

  {
    slug: "miras-hukuku",
    title: "Miras Hukuku",
    metaTitle: "Miras Hukuku",
    metaDescription:
      "Miras paylaşımı, saklı pay ve tenkis davası, vasiyetname düzenlenmesi, mirasın reddi konularında İstanbul'da hukuki destek.",
    intro:
      "Miras hukuku; bir kişinin ölümü üzerine mal varlığının, hak ve borçlarının mirasçılarına geçişini ve bu geçişin koşullarını düzenleyen hukuk dalıdır. Türkiye'de temel kaynak 4721 sayılı Türk Medeni Kanunu'nun miras hükümlerine ilişkin bölümüdür (TMK m. 495-682). Veraset ilamı, vasiyetname, tenkis ve miras taksimi bu alanın başlıca konuları arasındadır.",
    sections: [
      {
        heading: "Mirasçılık ve Miras Payları",
        paragraphs: [
          "Türk hukukunda mirasçılar; yasal mirasçılar ve atanmış mirasçılar olmak üzere iki grupta incelenir. Yasal mirasçılar kanun gereği miras hakkına sahip olan kişilerdir. Birinci zümre altsoy (çocuklar ve torunlar), ikinci zümre ana ve baba ve bunların altsoyu, üçüncü zümre büyükanne ve büyükbabalardan oluşur.",
          "Sağ kalan eş her zümredeki mirasçılarla birlikte miras bırakır; ancak miras payı zümreye göre değişir. Birinci zümreyle birlikte mirasın dörtte biri, ikinci zümreyle birlikte yarısı, üçüncü zümreyle birlikte dörtte üçü sağ kalan eşe kalır.",
        ],
      },
      {
        heading: "Saklı Pay Nedir ve Tenkis Davası Nasıl Açılır?",
        paragraphs: [
          "Saklı pay; miras bırakanın tasarruf özgürlüğü sınırlandırılmış olan ve belirli mirasçılara kanun tarafından güvence altına alınan miras payıdır. TMK'nın 505. maddesi uyarınca altsoyun saklı payı yasal miras payının yarısı, ana ve babanın saklı payı dörtte biri, sağ kalan eşin saklı payı ise duruma göre yasal miras payının tamamıdır.",
          "Miras bırakan, saklı payı aşan tasarruflarda bulunmuşsa saklı pay mirasçıları tenkis davası açabilir. Tenkis davası; vasiyetname veya sağlararası bağışlamalarla saklı payın ihlal edildiği durumlarda miras bırakanın ölümünden itibaren 1 yıl içinde açılmalıdır. Mirasın açılması sırasında saklı pay ihlalinin öğrenilmemesi halinde ise bu süre öğrenme tarihinden işlemeye başlar.",
        ],
      },
      {
        heading: "Vasiyetname Türleri ve Geçerlilik Koşulları",
        paragraphs: [
          "Türk hukukunda vasiyetname üç biçimde düzenlenebilir: resmi vasiyetname, el yazılı vasiyetname ve sözlü vasiyetname. Resmi vasiyetname, noter ve iki tanık huzurunda yapılır. El yazılı vasiyetname ise başından sonuna kadar miras bırakanın kendi el yazısıyla yazılmış, tarihlenmış ve imzalanmış olmalıdır.",
          "El yazılı vasiyetnamede herhangi bir biçim eksikliği (tarihin yazılmaması, daktilo kullanılması gibi) vasiyetnameyi geçersiz kılabilir. Vasiyetnamenin geçerli sayılabilmesi için miras bırakanın düzenleme anında ayırt etme gücüne sahip olması da zorunludur.",
        ],
      },
      {
        heading: "Mirasın Reddi",
        paragraphs: [
          "Mirasçı; borca batık olan mirası kabul etmek zorunda değildir. Mirası reddetme hakkı (ret hakkı) TMK'nın 605. maddesinde düzenlenmiştir. Mirasın reddi, miras bırakanın ölümünden itibaren 3 ay içinde sulh hukuk mahkemesine yazılı beyanla ya da nüfus müdürlüğü üzerinden yapılabilir.",
          "Mirasçı bu süreyi geçirirse mirası kabul etmiş sayılır. Aktif ret hakkını kullanan mirasçı; miras bırakanın borçlarından kişisel olarak sorumlu olmaz. Borcun varlığından haberdar olmaksızın mirası kabul eden mirasçı ise 3 aylık süreyi kaçırmış olsa bile hakimden ek süre talep edebilir.",
        ],
      },
    ],
    faq: [
      {
        question: "Mirası reddetmek istiyorum, nasıl yapabilirim?",
        answer:
          "Miras bırakanın ölümünden itibaren 3 ay içinde sulh hukuk mahkemesine başvurarak ret beyanında bulunulmalıdır. Ret beyanı sözlü olarak da yapılabilir; mahkeme bu beyanı tutanağa geçirir. 3 aylık süre haklı nedenlerle uzatılabilir; ancak sürenin geçirilmemesi için başvuruyu geciktirmemek önerilir.",
      },
      {
        question: "Saklı payım ihlal edildi, ne yapabilirim?",
        answer:
          "Saklı payın ihlal edildiğini öğrendiğiniz tarihten itibaren 1 yıl içinde tenkis davası açmanız gerekmektedir. Dava, mirasın açıldığı yerdeki asliye hukuk mahkemesinde açılır. Tenkis davası açmadan önce saklı payın hesaplanması ve hangi tasarrufların tenkise tabi olduğunun belirlenmesi önemlidir.",
      },
      {
        question: "Vasiyetname bana bırakılan payı azaltıyorsa itiraz edebilir miyim?",
        answer:
          "Saklı pay mirasçısıysanız vasiyetnameye karşı tenkis davası açabilirsiniz. Saklı pay mirasçısı değilseniz vasiyetnamenin geçerlilik koşullarını taşıyıp taşımadığını inceleyerek iptal davası yoluna başvurabilirsiniz. Vasiyetname iptali için miras bırakanın ehliyetsizliği, yanıltma, korkutma veya biçim eksikliği gerekçe olarak öne sürülebilir.",
      },
      {
        question: "Veraset ilamı nasıl alınır?",
        answer:
          "Veraset ilamı (mirasçılık belgesi) sulh hukuk mahkemesine başvurularak alınır. Başvuruda nüfus kayıt örneği ve varsa tanık beyanı sunulur. Mahkeme, mirasçıları ve paylarını gösterir belgeyi düzenler. Ayrıca noterliklere de başvurulabilir.",
      },
      {
        question: "Miras taksim sözleşmesi nedir?",
        answer:
          "Miras taksim sözleşmesi; birden fazla mirasçının miras bırakanın mal varlığını aralarında nasıl paylaşacaklarını belirleyen sözleşmedir. Yazılı biçimde yapılması gerekir; taşınmazları kapsıyorsa resmi şekil (noter tasdiki) aranır. Mirasçılardan biri taksime katılmak istemezse ortaklığın giderilmesi (izale-i şuyu) davası açılabilir.",
      },
    ],
    relatedSlugs: ["gayrimenkul-hukuku", "aile-hukuku"],
  },

  {
    slug: "borclar-hukuku",
    title: "Borçlar Hukuku",
    metaTitle: "Borçlar Hukuku",
    metaDescription:
      "Sözleşme uyuşmazlıkları, alacak ve tazminat davaları, icra takibi süreçlerinde İstanbul'da hukuki destek.",
    intro:
      "Borçlar hukuku; kişiler arasındaki borç ilişkilerini, sözleşmelerin kurulması ve sona ermesini, tazminat sorumluluğunu ve alacak ilişkilerini düzenleyen özel hukuk dalıdır. Türkiye'de temel kaynak 6098 sayılı Türk Borçlar Kanunu'dur (TBK). Söz konusu kanun; genel hükümler, sözleşmeden doğan borçlar ve sözleşme dışı sorumluluk olmak üzere üç ana bölümden oluşur.",
    sections: [
      {
        heading: "Sözleşme Serbestisi ve Temel İlkeler",
        paragraphs: [
          "Türk hukukunda sözleşme serbestisi ilkesi geçerlidir. Taraflar, kanunun emredici hükümlerine, ahlaka, kamu düzenine ve kişilik haklarına aykırı olmamak kaydıyla diledikleri içerikte sözleşme yapabilir. Sözleşme; teklif ve kabulün birbirine uyması halinde kurulur.",
          "Bazı sözleşme türlerinde şekil şartı aranır. Taşınmaz satımı resmi senet, kira sözleşmesi ise yazılı yapılmasına gerek olmamakla birlikte ispat kolaylığı açısından yazılı biçim önerilir. Geçerlilik şartını taşımayan sözleşmeler hükümsüz sayılır.",
        ],
      },
      {
        heading: "Sözleşmeye Aykırılık ve Tazminat",
        paragraphs: [
          "Bir taraf sözleşmeden doğan edimini gereği gibi ya da zamanında yerine getirmezse borçlu temerrüdü veya borca aykırılık söz konusu olur. Bu durumda alacaklı; edimin aynen ifasını, gecikme tazminatını ya da sözleşmeyi feshedip menfi zararını talep edebilir.",
          "Sözleşme dışı sorumluluk (haksız fiil) açısından ise zarar veren kişi; kusurunun bulunması, zararın varlığı ve eylemle zarar arasında nedensellik bağı kurulması şartıyla tazminatla yükümlü tutulabilir. Haksız fiilden doğan tazminat davalarında zamanaşımı süresi; zararı ve faili öğrenmeden itibaren 2 yıl, her halükarda haksız fiilin işlendiği tarihten itibaren 10 yıldır.",
        ],
      },
      {
        heading: "Alacak Davası ve İcra Takibi",
        paragraphs: [
          "Alacağın tahsili için iki yol izlenebilir: dava yolu veya icra takibi yolu. İcra takibinde alacaklı, icra müdürlüğüne başvurarak borçluya ödeme emri gönderilmesini sağlayabilir. Borçlu ödeme emrine 7 gün içinde itiraz etmezse takip kesinleşir.",
          "Borçlunun itiraz etmesi durumunda alacaklının icra mahkemesinde itirazın iptali davası açması ya da asliye hukuk mahkemesinde alacak davası yoluna gitmesi gerekir. Alacak davalarında genel zamanaşımı süresi 10 yıldır; ancak ticari satım ve kira bedeli gibi dönemsel alacaklarda 5 yıllık özel zamanaşımı uygulanır.",
        ],
      },
      {
        heading: "Sebepsiz Zenginleşme",
        paragraphs: [
          "Sebepsiz zenginleşme; haklı bir neden olmaksızın başkasının mal varlığı aleyhine zenginleşen kişinin bu zenginleşmeyi iade etme yükümlülüğünü ifade eder. Hukuki sebebin ortadan kalkması ya da beklenen sonucun gerçekleşmemesi halinde de sebepsiz zenginleşme hükümleri uygulanır.",
          "Sebepsiz zenginleşmede zamanaşımı süresi; zenginleşmenin öğrenilmesinden itibaren 2 yıl, her halükarda zenginleşmenin gerçekleştiği tarihten itibaren 10 yıldır. Belirlenen süreler dolmadan dava açılması ya da arabulucuya başvurulması önerilir.",
        ],
      },
    ],
    faq: [
      {
        question: "Alacağımı nasıl tahsil edebilirim?",
        answer:
          "İlk adım olarak borçluya noter aracılığıyla ihtarname gönderilebilir. Ödeme yapılmazsa icra takibi başlatılabilir ya da alacak davası açılabilir. Belgeye dayalı alacaklarda ilamsız icra takibi hızlı bir yol sunmaktadır; itiraz edilmemesi halinde 7 gün sonra takip kesinleşir.",
      },
      {
        question: "Sözleşmeden cayabilir miyim?",
        answer:
          "Sözleşmeden cayma hakkı; tarafların cayma hakkını saklı tutmuş olmalarına, tüketici sözleşmelerinde kanunun tanıdığı cayma sürelerine veya sözleşmenin esaslı hata, hile ya da korkutma nedeniyle kurulmasına bağlıdır. Cayma ya da sözleşmeden dönme koşulları mevcut değilse sözleşmenin feshi tazminat yükümlülüğüne yol açabilir.",
      },
      {
        question: "Manevi tazminat davası açabilir miyim?",
        answer:
          "Kişilik haklarının hukuka aykırı biçimde ihlal edilmesi halinde manevi tazminat talep edilebilir. Fiziksel zarar, onur ve itibar zararı, ağır ruhsal acı gibi durumlar manevi tazminata zemin oluşturabilir. Mahkeme, manevi tazminat miktarını belirlerken hakkaniyet ilkesini esas alır.",
      },
      {
        question: "İhtarname ne işe yarar?",
        answer:
          "İhtarname; borçluyu edimini yerine getirmeye davet eden resmi bir yazılı bildirimdir. Borçlu temerrüdünün başlaması için çoğu zaman ihtarname şartı aranır. Temerrüt tarihinden itibaren faiz işlemeye başlar ve tazminat kapsamı genişler. Ayrıca ihtarname zamanaşımını keser.",
      },
      {
        question: "Alacak davalarında zamanaşımı ne zaman dolar?",
        answer:
          "Genel zamanaşımı süresi 10 yıldır. Ancak kira bedeli, faiz, nafaka gibi dönemsel edimler için 5 yıl, haksız fiilden doğan alacaklarda ise zararın ve failin öğrenilmesinden itibaren 2 yıl ve her halükarda haksız fiilin işlendiği tarihten itibaren 10 yıllık süre uygulanır.",
      },
    ],
    relatedSlugs: ["is-hukuku", "gayrimenkul-hukuku", "icra-iflas-hukuku"],
  },

  {
    slug: "aile-hukuku",
    title: "Aile Hukuku",
    metaTitle: "Aile Hukuku",
    metaDescription:
      "Boşanma davası, velayet, nafaka, mal rejimi tasfiyesi ve aile hukuku konularında İstanbul'da hukuki destek.",
    intro:
      "Aile hukuku; evlilik, boşanma, velayet, nafaka ve mal rejimi gibi aile ilişkilerini düzenleyen hukuk dalıdır. Türkiye'de temel kaynak 4721 sayılı Türk Medeni Kanunu'nun aile hukukuna ilişkin bölümüdür (TMK m. 118-494). Aile mahkemelerinde görülen davalar kişilerin özel yaşamlarını doğrudan etkilediğinden sürecin dikkatle yürütülmesi önem taşır.",
    sections: [
      {
        heading: "Boşanma Türleri: Anlaşmalı ve Çekişmeli",
        paragraphs: [
          "Türk hukukunda boşanma iki temel biçimde gerçekleşebilir: anlaşmalı boşanma ve çekişmeli boşanma. Anlaşmalı boşanma (TMK m. 166/3) için evliliğin en az 1 yıl sürmüş olması ve tarafların; boşanmaya, velayete, nafakaya ve mal paylaşımına ilişkin protokolü birlikte imzalaması gerekir.",
          "Çekişmeli boşanma ise taraflardan birinin boşanmak istememesi ya da boşanmanın koşulları üzerinde uzlaşılamaması halinde açılır. Evlilik birliğinin sarsılması, zina, hayata kast, akıl hastalığı ve terk gibi boşanma nedenleri TMK'nın 161 ila 166. maddelerinde düzenlenmiştir.",
        ],
      },
      {
        heading: "Velayet ve Kişisel İlişki",
        paragraphs: [
          "Boşanma kararıyla birlikte mahkeme; müşterek çocukların velayetini eşlerden birine ya da istisnai olarak her ikisine birden verebilir. Velayet belirlenirken çocuğun üstün yararı esas alınır; çocuğun yaşı, sağlık durumu, ebeveynin ekonomik ve sosyal koşulları mahkemece değerlendirilir.",
          "Velayeti almayan ebeveyn ile çocuk arasındaki ilişki kişisel ilişki (görüş hakkı) düzenlemesiyle sürdürülür. Kişisel ilişkinin ihlal edilmesi durumunda velayet değişikliği davası açılabilir. Değişen koşullar veya çocuğun üstün yararının gerektirmesi halinde velayet her zaman yeniden düzenlenebilir.",
        ],
      },
      {
        heading: "Nafaka Türleri",
        paragraphs: [
          "Nafaka; eşlerden birinin veya çocuğun geçimini sağlamak amacıyla mahkeme kararıyla belirlenen düzenli ödemedir. Türk hukukunda dört tür nafaka vardır: tedbir nafakası (dava süresince), yoksulluk nafakası (boşanma sonrası eş için), iştirak nafakası (çocuklar için) ve yardım nafakası.",
          "Yoksulluk nafakasına hükmedilebilmesi için nafaka talep eden eşin boşanma yüzünden yoksulluğa düşecek olması gerekir. Nafaka miktarı; tarafların ekonomik durumları ve yaşam koşulları dikkate alınarak belirlenir. Koşulların değişmesi halinde nafaka artırımı ya da azaltılması davası açılabilir.",
        ],
      },
      {
        heading: "Mal Rejimi ve Tasfiye",
        paragraphs: [
          "01.01.2002 tarihinden sonra evlenen çiftlere yasal mal rejimi olarak edinilmiş mallara katılma rejimi uygulanır. Bu rejime göre evlilik süresince edinilen mallar (kişisel mallar hariç) boşanmada eşit olarak paylaşılır. Kişisel mallar ise miras yoluyla ya da evlilik öncesinde edinilen ve kişisel kullanıma özgü mallardır.",
          "Mal rejiminin tasfiyesinde taraflar önce kişisel mallarını geri alır; ardından artık değer (edinilmiş malların değerinden borçlar düşüldükten sonra kalan) hesaplanarak yarı yarıya paylaşılır. Bu hesaplamada ev eşyaları, banka hesapları ve emeklilik birikimi gibi evlilik içinde elde edilen değerler dikkate alınır.",
        ],
      },
    ],
    faq: [
      {
        question: "Anlaşmalı boşanma nasıl gerçekleşir?",
        answer:
          "Evliliğin en az 1 yıl sürmüş olması koşuluyla eşler; boşanma, velayet, nafaka ve mal paylaşımına ilişkin bir protokol hazırlar. Her iki eşin de duruşmada hazır bulunarak protokolü kabul ettiğini beyan etmesi halinde mahkeme boşanmaya hükmeder. Anlaşmalı boşanma genellikle tek duruşmada sonuçlanır.",
      },
      {
        question: "Çekişmeli boşanma ne kadar sürer?",
        answer:
          "Çekişmeli boşanma; delil toplanması, tanık dinlenmesi ve sosyal inceleme gibi süreçleri kapsadığından ortalama 1 ila 3 yıl sürebilir. İstinaf ve temyiz aşamaları da dikkate alındığında bu süre uzayabilir. Mahkemenin yoğunluğu ve davanın karmaşıklığı sonuç üzerinde belirleyici rol oynar.",
      },
      {
        question: "Velayeti nasıl alabilirim?",
        answer:
          "Velayet; hâkim tarafından çocuğun üstün yararına göre belirlenir. Velayetin size verilmesini destekleyecek unsurlar arasında çocukla güçlü duygusal bağ, sabit ve uygun yaşam koşulları, çocuğun eğitim ve sağlık ihtiyaçlarını karşılayabilme kapasitesi yer alır. Aile mahkemesi gerektiğinde uzman incelemesi ve sosyal araştırma raporu ister.",
      },
      {
        question: "Nafaka ne zaman başlar ve ne kadar devam eder?",
        answer:
          "Tedbir nafakası dava süresince hükmedilebilir. Yoksulluk nafakası boşanma kararının kesinleşmesiyle başlar. Nafaka süresiz olarak belirlenebileceği gibi belirli bir süreyle de sınırlandırılabilir. Nafaka; nafaka alacaklısının evlenmesi, taraflardan birinin ölümü veya alacaklının yoksulluktan kurtulması halinde sona erer.",
      },
      {
        question: "Boşanmada ev kime kalır?",
        answer:
          "Ev; kimin adına tapulu olduğuna ve taraflar arasındaki mal rejimi tasfiyesine göre belirlenir. Ortak mülkiyet söz konusuysa tasfiye davası açılabilir. Mahkeme, eşlerden birinin ve özellikle çocukların konut ihtiyacı bulunduğu hallerde evin kullanımını geçici olarak o eşe bırakabilir.",
      },
    ],
    relatedSlugs: ["miras-hukuku", "ceza-hukuku"],
  },

  {
    slug: "vergi-hukuku",
    title: "Vergi Hukuku",
    metaTitle: "Vergi Hukuku",
    metaDescription:
      "Vergi incelemesi, tarhiyat öncesi/sonrası uzlaşma, vergi ve ceza ihbarnamesine karşı dava süreçlerinde İstanbul'da hukuki destek.",
    intro:
      "Vergi hukuku; devletin vergilendirme yetkisini kullanırken izlediği usulü ve mükelleflerin bu süreçteki haklarını düzenleyen hukuk dalıdır. Türkiye'de temel kaynak 213 sayılı Vergi Usul Kanunu'dur (VUK); somut vergi türleri (gelir, kurumlar, KDV, ÖTV vb.) kendi özel kanunlarıyla düzenlenirken VUK, tarh-tebliğ-tahakkuk-tahsil sürecinin ve vergi cezalarının ortak usul zeminini oluşturur.",
    sections: [
      {
        heading: "Vergi İncelemesi Süreci ve Mükellefin Hakları",
        paragraphs: [
          "Vergi incelemesi, görevlendirme yazısının mükellefe tebliği ve incelemeye başlama tutanağının düzenlenmesiyle başlar. VUK'un 140. maddesi inceleme türüne göre azami süreler öngörür: tam incelemede 1 yıl (gerekirse 6 ay uzatılabilir), sınırlı incelemede 6 ay (6 ay uzatılabilir), KDV iadesine yönelik incelemede ise 3 ay (2 ay uzatılabilir).",
          "Aynı madde uyarınca mükellef; inceleme sırasında avukat veya mali müşavir bulundurma, incelemenin kapsamı ve konusu hakkında bilgilendirilme, defter ve belgelerin yazılı olarak istenmesini talep etme ve haklı bir nedenle makul ek süre isteme hakkına sahiptir. İnceleme sonunda düzenlenen rapor, mükellefe tebliğ edilecek ihbarnameye VUK m.35/12 uyarınca eklenmek zorundadır.",
        ],
      },
      {
        heading: "Vergi ve Ceza İhbarnamesine Karşı Dava Açma Süresi",
        paragraphs: [
          "Türk vergi sisteminde idari 'itiraz' kurumu bulunmaz; ihbarnameye karşı doğrudan yargı yolu işletilir. VUK m.377-378 ve İdari Yargılama Usulü Kanunu m.7 uyarınca, ihbarnamenin tebliğinden itibaren 30 gün içinde vergi mahkemesinde iptal davası açılmalıdır; bu süre hak düşürücüdür.",
          "Aynı 30 günlük süre içinde dava açmak yerine VUK m.376 kapsamında ceza indirimi talebi veya uzlaşma başvurusu da yapılabilir; ancak bu yollardan yalnızca biri tercih edilebilir. Süre kaçırıldığında ihbarname kesinleşir ve tahsilat aşamasına geçilir.",
        ],
      },
      {
        heading: "Tarhiyat Öncesi ve Tarhiyat Sonrası Uzlaşma",
        paragraphs: [
          "Tarhiyat öncesi uzlaşma, inceleme henüz tamamlanmadan, son tutanak imzalanmadan önce talep edilir; bu yola başvurulup sonuçsuz kalması veya mükellefin katılmaması halinde tarhiyat sonrası uzlaşma hakkı kullanılamaz. Tarhiyat sonrası uzlaşma ise ihbarnamenin tebliğinden itibaren 30 gün içinde talep edilir.",
          "7524 sayılı Kanun'la (Resmi Gazete: 2 Ağustos 2024) yapılan değişiklikle vergi aslı uzlaşma kapsamından çıkarılmış, bu tarihten sonraki başvurularda uzlaşma yalnızca vergi ziyaı, usulsüzlük ve özel usulsüzlük cezalarını kapsar hale gelmiştir. Uzlaşma sağlanırsa tutanak kesindir ve dava açılamaz; sağlanamazsa dava açma süresi kaldığı yerden devam eder, kalan süre 15 günden azsa 15 güne tamamlanır.",
        ],
      },
      {
        heading: "Vergi Cezalarının Türleri",
        paragraphs: [
          "Vergi ziyaı cezası (VUK m.341, 344), verginin zamanında veya eksiksiz tahakkuk ettirilmemesi halinde kesilir ve kural olarak kayba uğratılan verginin bir katı tutarındadır; VUK m.359'da sayılan kaçakçılık fiilleriyle (sahte belge düzenleme/kullanma gibi) vergi kaybına sebebiyet verilmişse bu oran üç kata çıkar.",
          "Usulsüzlük ve özel usulsüzlük cezaları (VUK m.351-353) ise vergi kaybı aranmaksızın, defter-belge düzeni, fatura kesme veya bildirim yükümlülüğü gibi şekli ödevlerin ihlalinde uygulanır ve genellikle her yıl yeniden değerleme oranıyla güncellenen maktu tutarlar üzerinden kesilir.",
        ],
      },
    ],
    faq: [
      {
        question: "Vergi incelemesi ne kadar sürer?",
        answer:
          "VUK m.140 uyarınca tam incelemede azami 1 yıl (gerekirse 6 ay uzatılabilir), sınırlı incelemede azami 6 ay, KDV iadesine yönelik incelemede ise azami 3 ay sürebilir. Bu süreler kanuni üst sınırdır; incelemeler genellikle daha kısa sürede tamamlanır.",
      },
      {
        question: "Uzlaşmaya giderek dava hakkımı kaybeder miyim?",
        answer:
          "Uzlaşma sağlanırsa evet; tutanakla belirlenen tutar kesinleşir ve o kalem için dava açılamaz. Uzlaşma sağlanamazsa dava açma hakkınız korunur; kalan süre 15 günden azsa 15 güne tamamlanır.",
      },
      {
        question: "Vergi/ceza ihbarnamesine itiraz süresi kaç gündür?",
        answer:
          "Teknik olarak 'itiraz' değil dava söz konusudur: ihbarnamenin tebliğinden itibaren 30 gün içinde vergi mahkemesinde iptal davası açılmalıdır. Bu süre hak düşürücüdür, kaçırılması halinde ihbarname kesinleşir.",
      },
      {
        question: "Tarhiyat öncesi mi, tarhiyat sonrası mı uzlaşmaya gitmeliyim?",
        answer:
          "Tarhiyat öncesi uzlaşma inceleme bitmeden talep edilir ve sonuçsuz kalırsa tarhiyat sonrası uzlaşma hakkı kaybedilir; tarhiyat sonrası uzlaşma ise ihbarname tebliğinden sonraki 30 gün içinde talep edilir. Hangisinin dosyanız için uygun olduğu incelemenin aşamasına göre değerlendirilmelidir.",
      },
      {
        question: "Vergi ziyaı cezası ile usulsüzlük cezası arasındaki fark nedir?",
        answer:
          "Vergi ziyaı cezası, kayba uğratılan vergiyle orantılı olarak kesilir (kural olarak 1 kat, kaçakçılık fiillerinde 3 kat). Usulsüzlük ve özel usulsüzlük cezaları ise vergi kaybı aranmaksızın, defter-belge ve bildirim gibi şekli yükümlülüklerin ihlalinde, genellikle sabit tutarlar üzerinden uygulanır.",
      },
    ],
    relatedSlugs: ["idare-hukuku", "borclar-hukuku"],
    relatedLinks: [
      { label: "Vergi/Ceza İhbarnamesine İtiraz ve Uzlaşma", href: "/makaleler/vergi-ihbarnamesine-itiraz-ve-uzlasma" },
    ],
  },

  {
    slug: "icra-iflas-hukuku",
    title: "İcra ve İflas Hukuku",
    metaTitle: "İcra ve İflas Hukuku",
    metaDescription:
      "İlamlı/ilamsız icra takibi, ödeme emrine itiraz, haciz süreci ve konkordato konularında İstanbul'da hukuki destek.",
    intro:
      "İcra ve iflas hukuku; alacaklının devlet gücü aracılığıyla alacağını cebren tahsil etmesini ve tacir borçlunun tasfiyesini düzenleyen hukuk dalıdır. Türkiye'de temel kaynak 2004 sayılı İcra ve İflas Kanunu'dur (İİK). Alacağın niteliğine göre ilamlı veya ilamsız takip yolları, borçlunun itiraz hakkı ve haciz süreci bu kanun çerçevesinde işler.",
    sections: [
      {
        heading: "İlamlı ve İlamsız İcra Takibi Arasındaki Fark",
        paragraphs: [
          "İlamsız icra takibi, para veya teminat alacakları için herhangi bir mahkeme kararı aranmaksızın doğrudan icra dairesine başvurularak başlatılır; borçluya ödeme emri gönderilir. İlamlı icra ise mahkeme ilamına veya ilam niteliğindeki bir belgeye dayanır ve borçluya icra emri gönderilir.",
          "İki yol arasındaki en kritik fark, itirazın sonucudur: ilamsız takipte borçlunun süresinde yaptığı itiraz takibi kendiliğinden durdurur; ilamlı takipte ise itiraz takibi durdurmaz, borçlunun icranın geri bırakılmasını ayrıca talep etmesi gerekir.",
        ],
      },
      {
        heading: "Ödeme Emrine İtiraz ve Sonrası",
        paragraphs: [
          "Borçlu, ödeme emrinin tebliğinden itibaren 7 gün içinde icra dairesine itiraz edebilir (İİK m.62); bu süre hak düşürücüdür ve itiraz takibi kendiliğinden durdurur. Alacaklının takibe devam edebilmesi için itirazı ortadan kaldırması gerekir.",
          "Bunun için iki farklı yol vardır: itirazın iptali davası genel mahkemede (asliye hukuk/ticaret) açılır, süresi itirazın alacaklıya tebliğinden itibaren 1 yıldır (İİK m.67) ve tam yargılama içerir. İtirazın kaldırılması ise icra mahkemesinde, elde bulunan belgeye dayanılarak istenir, süresi 6 aydır (İİK m.68-68/a) ve genellikle daha hızlı sonuçlanır.",
        ],
      },
      {
        heading: "Haciz Süreci ve Haczedilemeyen Mallar",
        paragraphs: [
          "Takip kesinleştikten sonra alacaklı haciz talep edebilir; icra memuru borçlunun taşınır ve taşınmaz mallarına, üçüncü kişilerdeki hak ve alacaklarına el koyar. Maaş ve ücret haczinde İİK m.83 uygulanır: önce borçlu ve ailesinin asgari geçimi için gerekli miktar ayrılır, kalan kısmın en fazla dörtte biri haczedilebilir.",
          "Nafaka alacakları bu sınırlamanın dışındadır ve önceliklidir. İİK m.82 uyarınca bazı mal ve haklar borcun türünden bağımsız olarak haciz dışıdır:",
        ],
        items: [
          "Borçlunun mesleği veya sanatı için gerekli alet ve edevat",
          "Kıymetli eşya hariç, ev ihtiyacı için gerekli eşya",
          "Borçlunun ve ailesinin ihtiyacına uygun tek barınma evi",
          "Maaş/ücretin en fazla dörtte biri; nafaka alacakları bu sınırın dışındadır",
        ],
      },
      {
        heading: "İflas Yoluyla Takip ve Konkordato",
        paragraphs: [
          "İflas yoluyla takip yalnızca Türk Ticaret Kanunu anlamında tacir sayılan borçlulara veya özel kanunla iflasa tabi tutulanlara uygulanabilir; sadece para ve teminat alacakları için başvurulabilir.",
          "Konkordato (İİK m.285 vd.), borcunu ödeyemeyen veya ödeyememe tehlikesi altındaki borçlunun mahkeme denetiminde alacaklılarıyla anlaşmasını sağlayan bir yeniden yapılandırma müessesesidir; borca batıklık şartı aranmaz. Mahkeme önce geçici mühlet (en fazla 5 ay), ardından şartları oluşursa kesin mühlet (en fazla 18 ay) verebilir; bu süre boyunca borçlu aleyhine yeni takip yapılamaz.",
        ],
      },
    ],
    faq: [
      {
        question: "İcra takibine itiraz etmezsem ne olur?",
        answer:
          "Ödeme emrinin tebliğinden itibaren 7 gün içinde itiraz etmez ve ödeme de yapmazsanız takip kesinleşir; alacaklı doğrudan haciz talep edebilir ve mal beyanında bulunmanız istenir.",
      },
      {
        question: "Maaşımın ne kadarı haczedilebilir?",
        answer:
          "İİK m.83 uyarınca önce sizin ve ailenizin asgari geçimi için gerekli miktar ayrılır; kalan kısmın en fazla dörtte biri haczedilebilir. Nafaka alacakları bu sınırlamanın dışında olup önceliklidir.",
      },
      {
        question: "Kambiyo senedine (çek/senet) dayalı takip normal takipten nasıl farklı?",
        answer:
          "Kambiyo senetlerine özgü takipte itiraz süresi 7 değil 5 gündür ve itiraz icra dairesine değil icra mahkemesine yapılır; itiraz sebepleri de sınırlı sayıdadır. Borçluya tanınan ödeme süresi 10 gündür.",
      },
      {
        question: "İtirazın iptali mi, itirazın kaldırılması mı daha hızlı sonuçlanır?",
        answer:
          "İtirazın kaldırılması, icra mahkemesinde elde bulunan belgeye dayanılarak istendiğinden genellikle itirazın iptalinden (genel mahkemede açılan, tam yargılama içeren) daha kısa sürede sonuçlanır.",
      },
      {
        question: "Evime haciz gelebilir mi?",
        answer:
          "İİK m.82 uyarınca borçlunun ve ailesinin ihtiyacına uygun tek barınma evi, borcun bizzat o evden doğmadığı sürece haczedilemez. Ancak evdeki kıymetli eşyalar (para, altın vb.) bu korumanın dışındadır.",
      },
    ],
    relatedSlugs: ["borclar-hukuku", "tazminat-hukuku"],
  },

  {
    slug: "idare-hukuku",
    title: "İdare Hukuku",
    metaTitle: "İdare Hukuku",
    metaDescription:
      "İdari işlemin iptali, tam yargı davası, yürütmenin durdurulması ve disiplin cezalarına itiraz konularında İstanbul'da hukuki destek.",
    intro:
      "İdare hukuku; kamu idarelerinin işlem ve eylemlerinin hukuka uygunluğunun denetlenmesini ve bu işlemlerden zarar görenlerin haklarını düzenleyen hukuk dalıdır. Türkiye'de idari yargı; kuruluşu bakımından 2575 sayılı Danıştay Kanunu ile 2576 sayılı Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin Kuruluşu Hakkında Kanun'a, yargılama usulü bakımından ise 2577 sayılı İdari Yargılama Usulü Kanunu'na (İYUK) dayanır.",
    sections: [
      {
        heading: "İdari İşlemin Unsurları ve İptal Davası",
        paragraphs: [
          "Bir idari işlemin hukuka uygun sayılabilmesi için beş unsuru taşıması gerekir: yetki, şekil, sebep, konu ve maksat. Bu unsurlardan herhangi birindeki sakatlık, işlemin iptalini gerektiren bir hukuka aykırılık sebebi oluşturur.",
          "İptal davası, idarenin kesin ve yürütülmesi zorunlu (icrai) işlemlerine karşı açılabilir; hazırlık işlemleri ve görüş niteliğindeki işlemler dava konusu edilemez. Dava açma süresi İYUK m.7 uyarınca, özel kanunlarda ayrı bir süre öngörülmediği sürece, Danıştay ve idare mahkemelerinde 60 gün, vergi mahkemelerinde 30 gündür.",
        ],
      },
      {
        heading: "Tam Yargı Davası: İptalden Farkı",
        paragraphs: [
          "İptal davasında işlemin menfaatinizi ihlal etmesi dava açmak için yeterliyken, tam yargı davasında somut bir hak ihlalinin ve zararın varlığının ortaya konması gerekir. Tam yargı davası; idarenin hizmet kusuru (hizmeti hiç, geç veya kötü işletmesi) ya da kusursuz sorumluluk esaslarına dayanılarak açılabilir.",
          "İYUK m.12 uyarınca, bir idari işlemden dolayı zarara uğrayanlar; doğrudan tam yargı davası açabilir, iptal davasıyla birlikte tam yargı davası da açabilir veya önce iptal davası açıp kararın kesinleşmesinden sonra ayrıca tam yargı davası açabilir.",
        ],
      },
      {
        heading: "Yürütmenin Durdurulması",
        paragraphs: [
          "İYUK m.27 uyarınca yürütmenin durdurulması kararı verilebilmesi için iki şartın birlikte gerçekleşmesi aranır: işlemin açıkça hukuka aykırı olması ve uygulanması halinde telafisi güç veya imkansız bir zararın doğması. Bu tedbir, dava sonuçlanana kadar işlemin sonuç doğurmasını geçici olarak engeller.",
          "Mahkeme, idarenin savunmasını aldıktan veya savunma süresi geçtikten sonra gerekçeli kararını verir. Yürütmenin durdurulması talebinin reddi kararına karşı tebliğden itibaren 7 gün içinde bölge idare mahkemesine itiraz edilebilir.",
        ],
      },
      {
        heading: "Kamu Görevlilerinin Disiplin Cezalarına Karşı Yollar",
        paragraphs: [
          "657 sayılı Devlet Memurları Kanunu m.125; uyarma, kınama, aylıktan kesme, kademe ilerlemesinin durdurulması ve devlet memurluğundan çıkarma olmak üzere beş disiplin cezası öngörür. Uyarma ve kınama dışındaki cezalar disiplin kurullarının görüşü alınarak verilir.",
          "Devlet memurluğundan çıkarma cezası hariç diğer disiplin cezalarına karşı idari itiraz yoluna gidilebilir; itiraz sonucundan tatmin olmayanlar için İYUK m.7'deki genel 60 günlük dava süresi içinde idare mahkemesinde dava açma yolu her halükarda açıktır.",
        ],
      },
    ],
    faq: [
      {
        question: "İdari işleme karşı dava açma süresini kaçırdım, ne yapabilirim?",
        answer:
          "İdari yargıda kural olarak süre geçtikten sonra eski hale getirme imkanı yoktur; süre geçince dava hakkı düşer. Tebligatın usulüne uygun yapılmadığı gibi istisnai durumlarda değerlendirme yapılabilir, ancak bu garanti bir yol değildir — sürenin kaçırılmaması esastır.",
      },
      {
        question: "Yürütmenin durdurulması kararı ne işe yarar?",
        answer:
          "Dava devam ederken idari işlemin uygulanmasını geçici olarak durdurarak, dava sonuçlanana kadar telafisi imkansız bir zarar doğmasını önler. İşlemin açıkça hukuka aykırı olması ve ciddi bir zarar riski bulunması şartlarının birlikte gerçekleşmesi gerekir.",
      },
      {
        question: "İptal davası mı, tam yargı davası mı açmalıyım?",
        answer:
          "İşlemin ortadan kaldırılmasını istiyorsanız iptal davası, işlem veya eylem nedeniyle uğradığınız zararın tazminini istiyorsanız tam yargı davası açmanız gerekir. İkisi birlikte de açılabilir.",
      },
      {
        question: "Disiplin cezasına karşı önce idareye mi başvurmalıyım?",
        answer:
          "Devlet memurluğundan çıkarma cezası hariç diğer disiplin cezalarında idari itiraz yolu kullanılabilir; ancak bu şart aranmaksızın doğrudan idare mahkemesinde dava açmak da mümkündür. Hangi yolun dosyanız için daha uygun olduğu somut duruma göre değerlendirilmelidir.",
      },
      {
        question: "Doğrudan Danıştay'a dava açabilir miyim?",
        answer:
          "Hayır, kural olarak ilk derece mahkemesi idare veya vergi mahkemesidir. Danıştay, yalnızca kanunda sayılan sınırlı sayıdaki işlem türü için ilk derece mahkemesi sıfatıyla görev yapar; diğer davalarda istinaf ve temyiz merciidir.",
      },
    ],
    relatedSlugs: ["vergi-hukuku", "tazminat-hukuku"],
    relatedLinks: [
      { label: "İdari İşlemin İptali Davası: Süre, Şartlar ve Süreç", href: "/makaleler/idari-islemin-iptali-davasi" },
    ],
  },

  {
    slug: "tazminat-hukuku",
    title: "Tazminat Hukuku",
    metaTitle: "Tazminat Hukuku",
    metaDescription:
      "Haksız fiilden doğan maddi ve manevi tazminat davaları, trafik kazası ve iş kazası tazminatı konularında İstanbul'da hukuki destek.",
    intro:
      "Tazminat hukuku; bir kişinin kusurlu ve hukuka aykırı bir fiille başkasına verdiği zararın giderilmesini düzenleyen hukuk alanıdır. Türkiye'de temel kaynak, 6098 sayılı Türk Borçlar Kanunu'nun (TBK) haksız fiillerden doğan borç ilişkilerine ayrılmış 49 ila 76. maddeleridir. Trafik kazası, iş kazası, hatalı tıbbi müdahale ve kişilik hakkı ihlalleri gibi pek çok uyuşmazlık bu genel çerçeve üzerinden çözülür.",
    sections: [
      {
        heading: "Haksız Fiil Sorumluluğunun Şartları",
        paragraphs: [
          "TBK m.49 uyarınca sorumluluğun doğması için dört şartın birlikte gerçekleşmesi gerekir: hukuka aykırı bir fiil, kusur (kast veya ihmal), bir zararın varlığı ve fiil ile zarar arasında uygun illiyet (nedensellik) bağı. Aynı maddenin ikinci fıkrasına göre, açıkça yasaklayan bir kural bulunmasa bile ahlaka aykırı bir fiille kasten zarar verilmesi de sorumluluk doğurur.",
          "Maddi tazminat, ölçülebilir ve belgelenebilir ekonomik kaybı karşılamayı amaçlarken; manevi tazminat, zarar görenin çektiği elem ve ızdırabı bir nebze hafifletmeyi amaçlayan, zenginleşme aracı olmayan bir tatmin niteliği taşır.",
        ],
      },
      {
        heading: "Maddi Tazminat Kalemleri",
        paragraphs: [
          "Ölüm halinde TBK m.53 uygulanır: cenaze giderleri, ölüm hemen gerçekleşmediyse tedavi giderleri ve çalışma gücü kaybı, ayrıca ölenin desteğinden yoksun kalan yakınların kaybı (destekten yoksun kalma tazminatı) talep edilebilir.",
          "Bedensel zarar (yaralanma) halinde ise TBK m.54 uygulanır: tedavi giderleri, kazanç kaybı, çalışma gücünün azalmasından veya yitirilmesinden doğan kayıp ve ekonomik geleceğin sarsılmasından doğan kayıp talep edilebilir. Destekten yoksun kalma ve çalışma gücü kaybı gibi kalemlerde tutar, Yargıtay uygulamasında genellikle bilirkişi/aktüer tarafından ulusal yaşam tablosu esas alınarak hesaplanır; bu nedenle kesin tutar ancak dosyaya özgü bir bilirkişi incelemesiyle belirlenebilir.",
        ],
      },
      {
        heading: "Manevi Tazminat Nasıl Belirlenir?",
        paragraphs: [
          "TBK m.56, özellikle bedensel bütünlüğün zedelenmesi ve ölüm hallerine özgü manevi tazminatı düzenler; ağır bedensel zarar veya ölüm halinde yakınlara da manevi tazminat verilebilir. Kanun, manevi tazminat için sabit bir miktar öngörmez.",
          "Hakim, manevi tazminat miktarını belirlerken olayın ağırlığını, tarafların kusur derecesini ve sosyal-ekonomik durumlarını dikkate alarak hakkaniyete uygun bir tutara karar verir. Amaç, zarar göreni zenginleştirmek değil, yaşadığı manevi acıyı bir ölçüde dengelemektir.",
        ],
      },
      {
        heading: "Zamanaşımı Süresi",
        paragraphs: [
          "TBK m.72 uyarınca haksız fiilden doğan tazminat talepleri, zarar görenin zararı ve sorumlu kişiyi öğrendiği tarihten itibaren 2 yıl, her halükarda haksız fiilin gerçekleştiği tarihten itibaren 10 yıl içinde zamanaşımına uğrar; bu iki süreden hangisi önce dolarsa talep hakkı o tarihte sona erer.",
          "Fiil aynı zamanda bir suç oluşturuyor ve ceza kanunundaki dava zamanaşımı süresi daha uzunsa, TBK m.72/2 uyarınca bu daha uzun süre tazminat talebine de uygulanır. Trafik kazası tazminatında bu genel çerçeveye ek olarak 2918 sayılı Karayolları Trafik Kanunu'nun özel hükümleri de dikkate alınır.",
        ],
      },
    ],
    faq: [
      {
        question: "Manevi tazminat miktarı nasıl belirlenir?",
        answer:
          "Kanunda sabit bir tutar yoktur; TBK m.56 uyarınca hakim, olayın ağırlığı, kusur derecesi ve tarafların sosyal-ekonomik durumunu değerlendirerek hakkaniyete uygun bir miktara karar verir.",
      },
      {
        question: "Tazminat davasında zamanaşımı ne zaman dolar?",
        answer:
          "TBK m.72 uyarınca zararı ve sorumluyu öğrenmeden itibaren 2 yıl, her halükarda olay tarihinden itibaren 10 yıl içinde dava açılmalıdır. Olay aynı zamanda suç oluşturuyorsa ve ceza zamanaşımı daha uzunsa, bu uzun süre uygulanır.",
      },
      {
        question: "Maddi tazminat kalemleri nelerdir?",
        answer:
          "Yaralanma halinde tedavi gideri, kazanç kaybı, çalışma gücü kaybı ve ekonomik geleceğin sarsılmasından doğan kayıp (TBK m.54); ölüm halinde cenaze gideri, tedavi gideri ve destekten yoksun kalma tazminatı (TBK m.53) talep edilebilir.",
      },
      {
        question: "Tazminat tutarını hesaplamak için bilirkişi raporu şart mı?",
        answer:
          "Destekten yoksun kalma ve çalışma gücü kaybı gibi kalemlerde evet; bu kalemler aktüeryal hesap ve ulusal yaşam tablosu esas alınarak bilirkişi tarafından hesaplanır. Belgeyle doğrudan ispatlanabilen kalemlerde bilirkişiye ihtiyaç olmayabilir.",
      },
      {
        question: "Haksız fiilden sorumlu tutulmak için ne ispatlanmalı?",
        answer:
          "TBK m.49 uyarınca hukuka aykırı bir fiil, failin kusuru, bir zararın varlığı ve fiil ile zarar arasında nedensellik bağı ispatlanmalıdır. Bu dört unsurdan biri eksikse tazminat sorumluluğu doğmaz.",
      },
    ],
    relatedSlugs: ["borclar-hukuku", "icra-iflas-hukuku"],
    relatedLinks: [
      { label: "Trafik Kazası Tazminatı Hesaplama", href: "/trafik-kazasi-tazminati-hesaplama" },
      { label: "Araç Değer Kaybı Hesaplama", href: "/arac-deger-kaybi-hesaplama" },
    ],
  },

  {
    slug: "tahkim-arabuluculuk",
    title: "Tahkim ve Arabuluculuk",
    metaTitle: "Tahkim ve Arabuluculuk",
    metaDescription:
      "Zorunlu ve ihtiyari arabuluculuk, iç tahkim ve milletlerarası tahkim süreçlerinde İstanbul'da hukuki destek ve temsil.",
    intro:
      "Tahkim ve arabuluculuk; taraflar arasındaki uyuşmazlıkların mahkeme dışında, daha hızlı ve esnek bir şekilde çözülmesini sağlayan alternatif uyuşmazlık çözüm yollarıdır. Arabuluculuk 6325 sayılı Hukuk Uyuşmazlıklarında Arabuluculuk Kanunu ile, iç tahkim Hukuk Muhakemeleri Kanunu'nun ilgili hükümleriyle, yabancılık unsuru taşıyan uyuşmazlıklarda tahkim ise 4686 sayılı Milletlerarası Tahkim Kanunu (MTK) ile düzenlenir.",
    sections: [
      {
        heading: "Hangi Uyuşmazlıklarda Arabuluculuk Zorunludur?",
        paragraphs: [
          "Taraflarca serbestçe tasarruf edilebilecek özel hukuk uyuşmazlıklarında arabuluculuğa başvurmak kural olarak isteğe bağlıdır (ihtiyari arabuluculuk). Ancak kanun koyucu bazı uyuşmazlık türlerinde dava açmadan önce arabulucuya başvurulmasını dava şartı haline getirmiştir; bu şart yerine getirilmeden açılan dava usulden reddedilir.",
          "Zorunlu arabuluculuk kapsamındaki başlıca uyuşmazlıklar: işçi-işveren alacak ve tazminat talepleri ile işe iade davaları (1 Ocak 2018'den itibaren, iş kazası ve meslek hastalığından kaynaklanan tazminat davaları hariç), konusu para alacağı veya tazminat olan ticari davalar (1 Ocak 2019'dan itibaren), tüketici mahkemelerinin görevine giren uyuşmazlıklar (28 Temmuz 2020'den itibaren) ve kira ilişkisinden doğan uyuşmazlıklar (1 Eylül 2023'ten itibaren, ilamsız icra yoluyla tahliye talepleri hariç).",
        ],
      },
      {
        heading: "Arabuluculuk Süreci ve Anlaşma Belgesinin Bağlayıcılığı",
        paragraphs: [
          "Arabuluculuk süreci, tarafsız ve eğitimli bir arabulucu eşliğinde yürütülür; sürenin kanunda belirlenen azami sınırları vardır (örneğin iş uyuşmazlıklarında 3 hafta, zorunlu hallerde 1 hafta daha uzatılabilir). Taraflar anlaşamazsa arabulucu bir son tutanak düzenler ve dava şartı yerine getirilmiş sayılır; dava açma hakkı saklıdır.",
          "Taraflar anlaşırsa düzenlenen anlaşma belgesi; taraflar, avukatları ve arabulucu tarafından imzalanmış olması ve icraya elverişli bir konu içermesi halinde 6325 sayılı Kanun m.18 uyarınca doğrudan ilam niteliğinde sayılır ve ayrıca dava açılmasına gerek kalmadan icraya konulabilir.",
        ],
      },
      {
        heading: "İç Tahkim: HMK'nın Tahkim Hükümleri",
        paragraphs: [
          "Hukuk Muhakemeleri Kanunu'nun tahkime ayrılmış hükümleri, tahkim yeri Türkiye olan ve yabancılık unsuru taşımayan uyuşmazlıklara uygulanır. Taşınmazlar üzerindeki ayni haklara ilişkin uyuşmazlıklar ile boşanma, miras ve iflas gibi tarafların iradesine tabi olmayan konular tahkime elverişli değildir.",
          "Taraflar sözleşmelerine geçerli bir tahkim şartı koyduklarında, karşı taraf bu şarta dayanarak süresinde itiraz ederse dava usulden reddedilir ve uyuşmazlık hakem önünde çözülür. Hakem kararına karşı klasik istinaf/temyiz yolu yoktur; yalnızca kanunda sayılan sınırlı sebeplere dayalı iptal davası açılabilir.",
        ],
      },
      {
        heading: "Milletlerarası Tahkim",
        paragraphs: [
          "4686 sayılı Milletlerarası Tahkim Kanunu, yabancılık unsuru taşıyan (örneğin tarafların yerleşim yerlerinin farklı ülkelerde olduğu veya sözleşmenin ifa yerinin yurt dışında bulunduğu) ve tahkim yeri Türkiye olan uyuşmazlıklara uygulanır. Türkiye, 1958 tarihli New York Konvansiyonu'na 3731 sayılı Kanun'la taraf olmuştur; bu sayede Türkiye'de verilen hakem kararları yurt dışında, yabancı ülkelerde verilen kararlar da Türkiye'de belirli usullerle tanınıp icra edilebilir.",
          "MTK m.15 uyarınca hakem kararına karşı, kararın bildiriminden itibaren 30 gün içinde asliye hukuk mahkemesinde iptal davası açılabilir. İptal sebepleri sınırlı sayıdadır: tarafın ehliyetsizliği, tahkim anlaşmasının geçersizliği, hakem seçiminde usulsüzlük, kararın tahkim anlaşması kapsamı dışında verilmesi, taraflara eşit davranılmaması, tahkime elverişsizlik ve kamu düzenine aykırılık bunlar arasındadır.",
        ],
      },
    ],
    faq: [
      {
        question: "Arabuluculuğa gitmeden doğrudan dava açabilir miyim?",
        answer:
          "İş, ticari, tüketici ve kira uyuşmazlıklarının kanunda sayılan türlerinde hayır; arabulucuya başvuru dava şartıdır ve bu şart yerine getirilmeden açılan dava usulden reddedilir. Bu kapsam dışındaki uyuşmazlıklarda arabuluculuk isteğe bağlıdır.",
      },
      {
        question: "Arabuluculukta anlaşamazsak ne olur?",
        answer:
          "Arabulucu bir son tutanak düzenler; bu tutanakla dava şartı yerine getirilmiş sayılır ve taraflar dava açma haklarını kullanabilir. Arabuluculuk süreci dava açma hakkını ortadan kaldırmaz, yalnızca ön adım niteliği taşır.",
      },
      {
        question: "Arabuluculukta varılan anlaşma mahkeme kararı gibi bağlayıcı mı?",
        answer:
          "Evet, kanunda aranan şartları taşıyan anlaşma belgesi (taraflar, avukatlar ve arabulucu tarafından imzalanmış, icraya elverişli bir konu içeren) ilam niteliğinde sayılır ve doğrudan icraya konulabilir.",
      },
      {
        question: "Sözleşmemizde tahkim şartı varsa mahkemeye gidebilir miyim?",
        answer:
          "Karşı taraf bu şarta dayanarak süresinde itiraz ederse hayır; dava usulden reddedilir ve uyuşmazlığın hakem önünde çözülmesi gerekir. Tahkim şartının geçerliliği ve kapsamı sözleşmenin ifadesine göre değerlendirilir.",
      },
      {
        question: "Hakem kararına itiraz edilebilir mi?",
        answer:
          "Esastan bir istinaf veya temyiz yolu yoktur; ancak kanunda sayılan sınırlı sebeplere (hakem seçiminde usulsüzlük, kamu düzenine aykırılık gibi) dayanılarak iptal davası açılabilir. Mahkeme bu davada uyuşmazlığın esasını yeniden incelemez.",
      },
    ],
    relatedSlugs: ["is-hukuku", "borclar-hukuku"],
  },

  {
    slug: "yabancilar-hukuku",
    title: "Yabancılar ve Vatandaşlık Hukuku",
    metaTitle: "Yabancılar ve Vatandaşlık Hukuku",
    metaDescription:
      "Oturma ve çalışma izni, yatırım yoluyla Türk vatandaşlığı, gayrimenkul edinimi ve sınır dışı kararına itiraz konularında hukuki destek.",
    intro:
      "Yabancılar ve vatandaşlık hukuku; yabancıların Türkiye'ye giriş, ikamet, çalışma ve mülk edinme süreçlerini, ayrıca yatırım yoluyla Türk vatandaşlığı kazanma yollarını düzenler. Temel kaynak 6458 sayılı Yabancılar ve Uluslararası Koruma Kanunu'dur (YUKK); çalışma izinlerinde 6735 sayılı Uluslararası İşgücü Kanunu, vatandaşlık başvurularında ise Türk Vatandaşlığı Kanunu Uygulama Yönetmeliği esas alınır.",
    sections: [
      {
        heading: "İkamet İzni Türleri",
        paragraphs: [
          "YUKK m.30 kapsamında altı ikamet izni türü bulunur: kısa dönem, aile, öğrenci, uzun dönem, insani ve insan ticareti mağduru ikamet izni. Kısa dönem ikamet izni her seferinde en fazla 2 yıl için verilir; gayrimenkul yatırımı yoluyla başvuranlara istisnai olarak azami 5 yıla kadar verilebilir. Aile ikamet izni her seferinde en fazla 3 yıl süreyle verilir.",
          "Uzun dönem ikamet izni ise süresizdir ve Türkiye'de kesintisiz en az 8 yıl yasal ikamet, son 3 yılda sosyal yardım almamış olma, düzenli/yeterli gelir ve kamu düzeni açısından tehdit oluşturmama şartlarını gerektirir (YUKK m.43). Öğrenci ve geçici koruma sürecinde geçirilen süreler bu 8 yıllık hesaba dahil edilmez.",
        ],
      },
      {
        heading: "Çalışma İzni Süreci",
        paragraphs: [
          "6735 sayılı Uluslararası İşgücü Kanunu uyarınca çalışma izni başvurusu, yabancının kendisi tarafından değil, onu istihdam edecek işveren tarafından yapılır. Yurt dışından başvuruda yabancı önce bulunduğu ülkedeki Türk büyükelçiliği veya başkonsolosluğuna başvurarak bir referans numarası alır; işveren bu numarayla Çalışma ve Sosyal Güvenlik Bakanlığı'na elektronik ortamda başvurur.",
          "Türkiye'de en az 6 ay geçerli ikamet izni bulunan yabancılar için yurt içinden başvuru da mümkündür; bu durumda da başvuruyu işveren yapar. Çalışma iznine bağlı olarak Türkiye'ye giren yabancının, izninin başlangıcından itibaren en geç 6 ay içinde işe başlaması gerekir.",
        ],
      },
      {
        heading: "Yatırım Yoluyla Türk Vatandaşlığı",
        paragraphs: [
          "Türk Vatandaşlığı Kanunu Uygulama Yönetmeliği m.20 kapsamında, belirli tutarların üzerinde yatırım yapan yabancılar istisnai olarak Türk vatandaşlığı kazanabilir. Yatırımcının eşi ve 18 yaşından küçük çocukları da bu haktan yararlanabilir.",
          "2026 itibarıyla geçerli eşik tutarlar: en az 400.000 ABD doları değerinde gayrimenkul edinip tapuya 3 yıl süreyle satılmayacağına dair şerh koydurmak; veya en az 500.000 ABD doları tutarında sabit sermaye yatırımı, banka mevduatı, devlet borçlanma aracı ya da gayrimenkul/girişim sermayesi yatırım fonu payı edinip bunu 3 yıl süreyle elde tutmak; ya da en az 50 kişilik istihdam yaratmak. Bu tutarlar 6 Ocak 2022 tarihli Cumhurbaşkanı Kararı ile belirlenmiştir ve zaman içinde değişebileceğinden başvuru öncesinde güncel tutarın büromuzla teyit edilmesi önerilir.",
        ],
      },
      {
        heading: "Gayrimenkul Edinimi ve Sınır Dışı Kararına İtiraz",
        paragraphs: [
          "Tapu Kanunu m.35 uyarınca yabancı gerçek kişiler Türkiye'de kişi başına ülke genelinde en fazla 30 hektara kadar taşınmaz edinebilir; ayrıca ilçe bazında özel mülkiyete konu alanın en fazla yüzde 10'u kadar sınırlama uygulanır. Askeri yasak bölgeler ve özel güvenlik bölgelerinde yabancılara taşınmaz edinim hakkı tanınmaz; bazı ülke vatandaşlarına yönelik ek kısıtlamalar da güncel Cumhurbaşkanı kararlarıyla belirlenebildiğinden işlem öncesi teyit edilmelidir.",
          "Sınır dışı etme kararına karşı YUKK m.53-60 uyarınca, kararın tebliğinden itibaren 7 gün içinde yetkili idare mahkemesine dava açılabilir; dava açılması sınır dışı işlemini kendiliğinden durdurur. Karara bağlı olarak uygulanabilecek giriş yasağı kural olarak en fazla 5 yıl sürer; ciddi kamu düzeni veya güvenliği tehdidi hallerinde bu süre istisnai olarak uzatılabilir.",
        ],
      },
    ],
    faq: [
      {
        question: "Ev alarak Türk vatandaşlığı alabilir miyim, ne kadar yatırım gerekir?",
        answer:
          "Evet; 2026 itibarıyla en az 400.000 ABD doları değerinde gayrimenkul edinip tapuya 3 yıl satılmayacağına dair şerh koydurarak yatırım yoluyla vatandaşlık başvurusunda bulunulabilir. Bu tutar zamanla değişebileceğinden başvuru öncesi güncel rakamın teyit edilmesi önemlidir.",
      },
      {
        question: "Sınır dışı etme kararına nasıl itiraz ederim?",
        answer:
          "Kararın tebliğinden itibaren 7 gün içinde yetkili idare mahkemesinde dava açılmalıdır. Dava açılması, sınır dışı işlemini ayrıca bir yürütmeyi durdurma talebine gerek kalmaksızın kendiliğinden durdurur.",
      },
      {
        question: "Oturma izni süresi dolarsa ne olur?",
        answer:
          "Süre bitiminden 60 gün öncesinden itibaren uzatma başvurusu yapılabilir. Süre dolmasına rağmen başvuru yapılmaz veya izinsiz kalınırsa yasal kalış hakkı ihlal edilmiş olur ve giriş yasağı riski doğabilir.",
      },
      {
        question: "Çalışma izni başvurusunu kim yapar, yabancı kendisi başvurabilir mi?",
        answer:
          "Hayır, başvuruyu yabancıyı istihdam edecek işveren yapar. Yurt dışından başvuru sürecinde yabancı yalnızca ilk aşamada konsolosluktan bir referans numarası alır, asıl başvuruyu işveren tamamlar.",
      },
      {
        question: "Yabancılar Türkiye'de her yerden gayrimenkul alabilir mi?",
        answer:
          "Hayır; askeri yasak bölgeler ve özel güvenlik bölgelerinde edinim mümkün değildir, ayrıca kişi ve ilçe bazında azami alan sınırları ile bazı ülke vatandaşlarına yönelik ek kısıtlamalar uygulanabilir. Güncel durumun işlem öncesinde teyit edilmesi önerilir.",
      },
    ],
    relatedSlugs: ["gayrimenkul-hukuku", "tahkim-arabuluculuk"],
  },
];

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((a) => a.slug === slug);
}
