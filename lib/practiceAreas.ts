export type PracticeAreaSection = {
  heading: string;
  paragraphs: string[];
  items?: string[];
};

export type PracticeAreaFAQ = {
  question: string;
  answer: string;
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
    relatedSlugs: ["aile-hukuku", "borclar-hukuku"],
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
    relatedSlugs: ["borclar-hukuku", "gayrimenkul-hukuku"],
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
    relatedSlugs: ["miras-hukuku", "borclar-hukuku"],
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
    relatedSlugs: ["is-hukuku", "gayrimenkul-hukuku"],
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
];

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((a) => a.slug === slug);
}
