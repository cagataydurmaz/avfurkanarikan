export type Lang = "tr" | "en" | "ru" | "ar";
export const LANGS: Lang[] = ["tr", "en", "ru", "ar"];

export const dictionary = {
  tr: {
    // Navbar
    "nav.about": "Hakkımda",
    "nav.practiceAreas": "Çalışma Alanları",
    "nav.process": "Süreç",
    "nav.articles": "Makaleler",
    "nav.tools": "Araçlar",
    "nav.districts": "İlçeler",
    "nav.contact": "İletişim",
    "nav.whatsapp": "WhatsApp ile Yazın",
    "nav.call": "Hemen Arayın",
    "nav.menuOpen": "Menüyü aç",
    "nav.menuClose": "Menüyü kapat",

    // Hero
    "hero.eyebrow": "İstanbul Barosu - Sicil No: 72621",
    "hero.tagline": "Ceza, iş ve gayrimenkul hukukunda İstanbul'da dava takibi ve hukuki danışmanlık.",
    "hero.whatsapp": "WhatsApp ile Yazın",
    "hero.call": "Hemen Arayın",
    "hero.scroll": "Aşağı kaydır",

    // About
    "about.label": "Hakkımda",
    "about.role": "Avukat - İstanbul Barosu",
    "about.bio1":
      "2019 yılında MEF Üniversitesi Hukuk Fakültesi'nden mezun olan Furkan Arıkan, avukatlık mesleğine İstanbul'da başlamış ve o tarihten bu yana aktif olarak hukuki danışmanlık ile dava takibi hizmetleri sürdürmektedir.",
    "about.bio2":
      "Büro, ağırlıklı olarak ceza hukuku, iş hukuku ve gayrimenkul uyuşmazlıklarında müvekkillere hukuki destek sağlamaktadır. Soruşturma ve kovuşturma süreçlerinde müdafilik, işçi-işveren uyuşmazlıklarında temsil ve kira hukuku kapsamındaki davalarda dava takibi bu hizmetlerin başlıcalarıdır.",
    "about.bio3":
      "Beşiktaş'ta faaliyet gösteren büro, İstanbul'un farklı ilçelerinden müvekkillere hizmet sunmaktadır. Randevu bazlı çalışma prensibiyle, her dosyaya birebir ilgi ve yeterli zaman ayrılmaktadır.",
    "about.education": "Eğitim",
    "about.educationValue": "MEF Üniversitesi Hukuk Fakültesi (2019)",
    "about.bar": "Baro",
    "about.barValue": "İstanbul Barosu - Sicil No: 72621",

    // Practice Areas (homepage)
    "practiceAreas.label": "Çalışma Alanları",
    "practiceAreas.heading": "Hukuki Destek Sunduğumuz Alanlar",
    "practiceAreas.subheading": "Her hukuki süreç farklı bir yaklaşım gerektirir. Dosyanızın ihtiyacına göre destek sağlıyoruz.",
    "practiceAreas.readMore": "Detaylı Bilgi",
    "practiceAreas.showAll": "Tüm Çalışma Alanlarını Gör",
    "practiceAreas.note": "Yukarıda yer almayan konularda da danışmanlık talep edebilirsiniz.",

    // Process
    "process.label": "Nasıl Çalışıyoruz",
    "process.heading": "Süreci Birlikte Yönetelim",
    "process.subheading": "Şeffaf ve öngörülebilir bir süreç için her adımı önceden paylaşıyoruz.",
    "process.step1.title": "İlk İletişim",
    "process.step1.desc": "WhatsApp veya telefon aracılığıyla ulaşın. Konunuzu kısaca paylaşın; randevu için uygun tarih ve saati birlikte belirleyelim.",
    "process.step2.title": "Danışmanlık Randevusu",
    "process.step2.desc": "Yüz yüze veya çevrim içi gerçekleştirilen danışmanlık görüşmesi ücret karşılığı yapılmaktadır. Görüşmede hukuki durumunuz değerlendirilir.",
    "process.step3.title": "Vekalet ve Dosya Hazırlığı",
    "process.step3.desc": "Temsil kararı alınması halinde noterde vekalet düzenlenir, ilgili belgeler derlenir ve dosya hazırlığı tamamlanır.",
    "process.step4.title": "Temsil ve Süreç Takibi",
    "process.step4.desc": "Mahkeme, savcılık ve diğer idari merciler nezdinde temsil ve süreç yönetimi sağlanır; gelişmeler müvekkille paylaşılır.",
    "process.noteLabel": "Bilgi notu:",
    "process.noteText": "İlk danışmanlık görüşmesi ücretlidir. Görüşme sonrasında vekalet verip vermemek tamamen müvekkile bırakılmakta olup herhangi bir yükümlülük doğurmaz.",

    // Tools preview
    "tools.label": "Ücretsiz Araçlar",
    "tools.heading": "Hukuki Hesaplama Araçları",
    "tools.calculate": "Hemen Hesapla",
    "tools.viewAll": "Tüm Araçlar",

    // Blog preview
    "blog.label": "Hukuki Bilgi",
    "blog.heading": "Hukuk Makaleleri",
    "blog.readMore": "Devamını Oku",
    "blog.viewAll": "Tüm Makaleler",

    // Google reviews
    "reviews.label": "Google Yorumları",
    "reviews.heading": "Müvekkillerimiz Ne Diyor?",
    "reviews.count": "38 Google yorumu",
    "reviews.cta": "Google'da Tüm Yorumları Gör",

    // Contact
    "contact.label": "İletişim",
    "contact.heading": "Bize Ulaşın",
    "contact.subheading": "Randevu için arayabilir veya WhatsApp üzerinden yazabilirsiniz.",
    "contact.formTitle": "Bir Mesaj Bırakın",
    "contact.address": "Adres",
    "contact.directions": "Yol Tarifi Al",
    "contact.besiktasPage": "Beşiktaş avukatlık hizmetleri",
    "contact.hours": "Çalışma Saatleri",
    "contact.hoursLine1": "Pazartesi - Cuma: 09:00 - 18:00",
    "contact.hoursLine2": "Cumartesi - Pazar: Kapalı",
    "contact.phone": "Telefon",
    "contact.email": "E-posta",

    // Contact form
    "form.name": "Ad Soyad",
    "form.namePlaceholder": "Adınız Soyadınız",
    "form.phone": "Telefon",
    "form.phonePlaceholder": "05XX XXX XX XX",
    "form.topic": "Konu",
    "form.message": "Mesajınız",
    "form.messagePlaceholder": "Durumunuzu kısaca özetleyin",
    "form.sendWhatsapp": "WhatsApp ile Gönder",
    "form.sendEmail": "E-posta ile Gönder",
    "form.note": "Gönder'e bastığınızda WhatsApp veya e-posta uygulamanız, mesajınız hazır halde açılır.",

    // Footer
    "footer.tagline": "Ceza, iş ve gayrimenkul hukukunda İstanbul'da dava takibi ve hukuki danışmanlık.",
    "footer.bar": "İstanbul Barosu - Sicil No: 72621",
    "footer.links": "Bağlantılar",
    "footer.contact": "İletişim",
    "footer.rights": "Tüm hakları saklıdır.",
    "footer.privacy": "Gizlilik Politikası ve KVKK Aydınlatma Metni",
    "footer.fraud": "Dolandırıcılık uyarısı",
    "hero.fraud": "Büro adına farklı numaralardan arayıp ödeme isteyenlere itibar etmeyiniz.",
    "contact.fraudNote": "Büro adına farklı numaralardan arayıp ödeme isteyen kişilere itibar etmeyiniz. Resmi numara: +90 535 487 40 99",
    "footer.disclaimer": "Bu sitedeki bilgiler hukuki danışmanlık niteliği taşımaz.",

    // Floating buttons
    "floating.whatsapp": "WhatsApp",
    "floating.call": "Ara",

    // Practice area detail page
    "praDetail.breadcrumbHome": "Ana Sayfa",
    "praDetail.faqLabel": "Sıkça Sorulan Sorular",
    "praDetail.faqHeading": "Hakkında Merak Edilenler",
    "praDetail.relatedContent": "İlgili İçerikler",
    "praDetail.disclaimer": "Bu sayfa genel bilgilendirme amaçlıdır; hukuki danışmanlık niteliği taşımaz. Kendi durumunuza özgü değerlendirme için bir avukata başvurmanız önerilir.",
    "praDetail.ctaLabel": "Hukuki Destek",
    "praDetail.ctaNote": "Danışmanlık görüşmesi ücret karşılığı yapılmaktadır.",
    "praDetail.whatsapp": "WhatsApp ile Yazın",
    "praDetail.relatedAreas": "İlgili Alanlar",
    "praDetail.allAreas": "Tüm Çalışma Alanları",
    "praDetail.faqTitle": "{title} Hakkında Merak Edilenler",
    "praDetail.ctaQuestion": "{title} konusunda danışmanlık almak ister misiniz?",
    "floating.hint": "Sorunuzu WhatsApp\u2019tan yazabilirsiniz",
    "contact.langNote": "",
  },
  en: {
    // Navbar
    "nav.about": "About",
    "nav.practiceAreas": "Practice Areas",
    "nav.process": "Process",
    "nav.articles": "Articles",
    "nav.tools": "Tools",
    "nav.districts": "Service Areas",
    "nav.contact": "Contact",
    "nav.whatsapp": "Message on WhatsApp",
    "nav.call": "Call Now",
    "nav.menuOpen": "Open menu",
    "nav.menuClose": "Close menu",

    // Hero
    "hero.eyebrow": "Istanbul Bar Association - Reg. No: 72621",
    "hero.tagline": "Litigation and legal counsel in criminal, labour and real estate law in Istanbul.",
    "hero.whatsapp": "Message on WhatsApp",
    "hero.call": "Call Now",
    "hero.scroll": "Scroll down",

    // About
    "about.label": "About",
    "about.role": "Attorney - Istanbul Bar Association",
    "about.bio1":
      "A graduate of MEF University Faculty of Law (2019), Furkan Arıkan began practising law in Istanbul and has since been actively providing legal counsel and litigation representation.",
    "about.bio2":
      "The office primarily supports clients in criminal law, labour law and real estate disputes. Defence representation during investigation and prosecution, employer-employee dispute representation, and litigation in tenancy matters are among its core services.",
    "about.bio3":
      "Based in Beşiktaş, the office serves clients across Istanbul's districts. Working on an appointment basis, each file receives dedicated attention and sufficient time.",
    "about.education": "Education",
    "about.educationValue": "MEF University Faculty of Law (2019)",
    "about.bar": "Bar",
    "about.barValue": "Istanbul Bar Association - Reg. No: 72621",

    // Practice Areas (homepage)
    "practiceAreas.label": "Practice Areas",
    "practiceAreas.heading": "Areas We Provide Legal Support In",
    "practiceAreas.subheading": "Every legal matter calls for a different approach. We tailor our support to your file's needs.",
    "practiceAreas.readMore": "Learn More",
    "practiceAreas.showAll": "View All Practice Areas",
    "practiceAreas.note": "You may also request consultation on matters not listed above.",

    // Process
    "process.label": "How We Work",
    "process.heading": "Let's Manage the Process Together",
    "process.subheading": "We share every step in advance for a transparent, predictable process.",
    "process.step1.title": "Initial Contact",
    "process.step1.desc": "Reach out via WhatsApp or phone. Briefly share your matter; together we'll agree on a suitable date and time for an appointment.",
    "process.step2.title": "Consultation Appointment",
    "process.step2.desc": "The consultation, held in person or online, is provided for a fee. Your legal situation is assessed during this meeting.",
    "process.step3.title": "Power of Attorney and File Preparation",
    "process.step3.desc": "If you decide to proceed with representation, the power of attorney is executed before a notary, relevant documents are gathered, and the file is prepared.",
    "process.step4.title": "Representation and Case Follow-up",
    "process.step4.desc": "Representation and case management is provided before courts, the prosecutor's office and other administrative authorities; developments are shared with the client.",
    "process.noteLabel": "Please note:",
    "process.noteText": "The initial consultation is provided for a fee. Whether to proceed with representation afterwards is entirely the client's decision and creates no obligation.",

    // Tools preview
    "tools.label": "Free Tools",
    "tools.heading": "Legal Calculation Tools",
    "tools.calculate": "Calculate Now",
    "tools.viewAll": "All Tools",

    // Blog preview
    "blog.label": "Legal Insight",
    "blog.heading": "Legal Articles",
    "blog.readMore": "Read More",
    "blog.viewAll": "All Articles",

    // Google reviews
    "reviews.label": "Google Reviews",
    "reviews.heading": "What Our Clients Say",
    "reviews.count": "38 Google reviews",
    "reviews.cta": "See All Reviews on Google",

    // Contact
    "contact.label": "Contact",
    "contact.heading": "Get in Touch",
    "contact.subheading": "You can call for an appointment or message us on WhatsApp.",
    "contact.formTitle": "Leave a Message",
    "contact.address": "Address",
    "contact.directions": "Get Directions",
    "contact.besiktasPage": "Legal services in Beşiktaş",
    "contact.hours": "Working Hours",
    "contact.hoursLine1": "Monday - Friday: 09:00 - 18:00",
    "contact.hoursLine2": "Saturday - Sunday: Closed",
    "contact.phone": "Phone",
    "contact.email": "Email",

    // Contact form
    "form.name": "Full Name",
    "form.namePlaceholder": "Your full name",
    "form.phone": "Phone",
    "form.phonePlaceholder": "05XX XXX XX XX",
    "form.topic": "Subject",
    "form.message": "Your Message",
    "form.messagePlaceholder": "Briefly describe your situation",
    "form.sendWhatsapp": "Send via WhatsApp",
    "form.sendEmail": "Send via Email",
    "form.note": "When you press send, your WhatsApp or email app will open with the message ready to go.",

    // Footer
    "footer.tagline": "Litigation and legal counsel in criminal, labour and real estate law in Istanbul.",
    "footer.bar": "Istanbul Bar Association - Reg. No: 72621",
    "footer.links": "Links",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy and Data Protection Notice",
    "footer.fraud": "Fraud warning",
    "hero.fraud": "Do not trust anyone calling from other numbers on behalf of the office and asking for payment.",
    "contact.fraudNote": "Do not trust anyone calling from other numbers on behalf of the office and asking for payment. Official number: +90 535 487 40 99",
    "footer.disclaimer": "The information on this site does not constitute legal advice.",

    // Floating buttons
    "floating.whatsapp": "WhatsApp",
    "floating.call": "Call",

    // Practice area detail page
    "praDetail.breadcrumbHome": "Home",
    "praDetail.faqLabel": "Frequently Asked Questions",
    "praDetail.faqHeading": "Frequently Asked About",
    "praDetail.relatedContent": "Related Content",
    "praDetail.disclaimer": "This page is for general information purposes only and does not constitute legal advice. For an assessment specific to your situation, please consult an attorney.",
    "praDetail.ctaLabel": "Legal Support",
    "praDetail.ctaNote": "Consultations are provided for a fee.",
    "praDetail.whatsapp": "Message on WhatsApp",
    "praDetail.relatedAreas": "Related Areas",
    "praDetail.allAreas": "All Practice Areas",
    "praDetail.faqTitle": "Frequently Asked About {title}",
    "praDetail.ctaQuestion": "Would you like advice on {title}?",
    "floating.hint": "You can send your question on WhatsApp",
    "contact.langNote": "",
  },
  ru: {
    // Navbar
    "nav.about": "Обо мне",
    "nav.practiceAreas": "Направления практики",
    "nav.process": "Порядок работы",
    "nav.articles": "Статьи",
    "nav.tools": "Калькуляторы",
    "nav.districts": "Районы",
    "nav.contact": "Контакты",
    "nav.whatsapp": "Написать в WhatsApp",
    "nav.call": "Позвонить",
    "nav.menuOpen": "Открыть меню",
    "nav.menuClose": "Закрыть меню",

    // Hero
    "hero.eyebrow": "Стамбульская коллегия адвокатов - Рег. №: 72621",
    "hero.tagline": "Ведение дел и юридические консультации по уголовному, трудовому праву и праву недвижимости в Стамбуле.",
    "hero.whatsapp": "Написать в WhatsApp",
    "hero.call": "Позвонить",
    "hero.scroll": "Прокрутить вниз",

    // About
    "about.label": "Обо мне",
    "about.role": "Адвокат - Стамбульская коллегия адвокатов",
    "about.bio1":
      "Адвокат Фуркан Арыкан окончил юридический факультет Университета MEF в 2019 году, начал адвокатскую практику в Стамбуле и с тех пор занимается юридическим консультированием и ведением судебных дел.",
    "about.bio2":
      "Бюро оказывает правовую помощь доверителям преимущественно в сфере уголовного права, трудового права и споров, связанных с недвижимостью. К основным услугам относятся защита на стадиях следствия и судебного разбирательства, представительство в трудовых спорах между работником и работодателем, а также ведение дел, связанных с арендой.",
    "about.bio3":
      "Бюро расположено в районе Бешикташ и работает с доверителями из разных районов Стамбула. Приём ведётся по предварительной записи, что позволяет уделять каждому делу индивидуальное внимание и достаточное время.",
    "about.education": "Образование",
    "about.educationValue": "Юридический факультет Университета MEF (2019)",
    "about.bar": "Коллегия адвокатов",
    "about.barValue": "Стамбульская коллегия адвокатов - Рег. №: 72621",

    // Practice Areas (homepage)
    "practiceAreas.label": "Направления практики",
    "practiceAreas.heading": "Направления, в которых мы оказываем правовую помощь",
    "practiceAreas.subheading": "Каждый правовой вопрос требует особого подхода. Мы оказываем помощь с учётом обстоятельств вашего дела.",
    "practiceAreas.readMore": "Подробнее",
    "practiceAreas.showAll": "Все направления практики",
    "practiceAreas.note": "Вы также можете обратиться за консультацией по вопросам, не указанным выше.",

    // Process
    "process.label": "Как мы работаем",
    "process.heading": "Выстроим процесс вместе",
    "process.subheading": "Для прозрачного и предсказуемого процесса мы заранее сообщаем о каждом этапе.",
    "process.step1.title": "Первичное обращение",
    "process.step1.desc": "Свяжитесь с нами через WhatsApp или по телефону. Кратко опишите ваш вопрос, и мы вместе согласуем удобную дату и время встречи.",
    "process.step2.title": "Консультация",
    "process.step2.desc": "Консультация проводится очно или онлайн на платной основе. В ходе встречи оценивается ваша правовая ситуация.",
    "process.step3.title": "Доверенность и подготовка дела",
    "process.step3.desc": "При принятии решения о представительстве у нотариуса оформляется доверенность, собираются необходимые документы и завершается подготовка дела.",
    "process.step4.title": "Представительство и сопровождение дела",
    "process.step4.desc": "Обеспечивается представительство и ведение дела в суде, прокуратуре и других административных органах; доверитель информируется о ходе дела.",
    "process.noteLabel": "Обратите внимание:",
    "process.noteText": "Первичная консультация является платной. Решение о выдаче доверенности после консультации полностью остаётся за доверителем и не порождает никаких обязательств.",

    // Tools preview
    "tools.label": "Бесплатные калькуляторы",
    "tools.heading": "Юридические калькуляторы",
    "tools.calculate": "Рассчитать",
    "tools.viewAll": "Все калькуляторы",

    // Blog preview
    "blog.label": "Правовая информация",
    "blog.heading": "Юридические статьи",
    "blog.readMore": "Читать далее",
    "blog.viewAll": "Все статьи",

    // Google reviews
    "reviews.label": "Отзывы в Google",
    "reviews.heading": "Что говорят наши доверители",
    "reviews.count": "38 отзывов в Google",
    "reviews.cta": "Все отзывы в Google",

    // Contact
    "contact.label": "Контакты",
    "contact.heading": "Свяжитесь с нами",
    "contact.subheading": "Для записи на приём вы можете позвонить или написать в WhatsApp.",
    "contact.formTitle": "Оставьте сообщение",
    "contact.address": "Адрес",
    "contact.directions": "Проложить маршрут",
    "contact.besiktasPage": "Адвокатские услуги в Бешикташе",
    "contact.hours": "Часы работы",
    "contact.hoursLine1": "Понедельник - пятница: 09:00 - 18:00",
    "contact.hoursLine2": "Суббота - воскресенье: выходной",
    "contact.phone": "Телефон",
    "contact.email": "Эл. почта",

    // Contact form
    "form.name": "Имя и фамилия",
    "form.namePlaceholder": "Ваше имя и фамилия",
    "form.phone": "Телефон",
    "form.phonePlaceholder": "05XX XXX XX XX",
    "form.topic": "Тема",
    "form.message": "Ваше сообщение",
    "form.messagePlaceholder": "Кратко опишите ситуацию",
    "form.sendWhatsapp": "Отправить через WhatsApp",
    "form.sendEmail": "Отправить по эл. почте",
    "form.note": "После нажатия кнопки «Отправить» откроется WhatsApp или почтовое приложение с подготовленным сообщением.",

    // Footer
    "footer.tagline": "Ведение дел и юридические консультации по уголовному, трудовому праву и праву недвижимости в Стамбуле.",
    "footer.bar": "Стамбульская коллегия адвокатов - Рег. №: 72621",
    "footer.links": "Ссылки",
    "footer.contact": "Контакты",
    "footer.rights": "Все права защищены.",
    "footer.privacy": "Политика конфиденциальности и уведомление о защите персональных данных (KVKK)",
    "footer.fraud": "Предупреждение о мошенничестве",
    "hero.fraud": "Не доверяйте лицам, которые звонят с других номеров от имени бюро и требуют оплату.",
    "contact.fraudNote": "Не доверяйте лицам, которые звонят с других номеров от имени бюро и требуют оплату. Официальный номер: +90 535 487 40 99",
    "footer.disclaimer": "Информация на этом сайте не является юридической консультацией.",

    // Floating buttons
    "floating.whatsapp": "WhatsApp",
    "floating.call": "Позвонить",

    // Practice area detail page
    "praDetail.breadcrumbHome": "Главная",
    "praDetail.faqLabel": "Часто задаваемые вопросы",
    "praDetail.faqHeading": "Часто задаваемые вопросы",
    "praDetail.relatedContent": "Связанные материалы",
    "praDetail.disclaimer": "Эта страница носит общий информационный характер и не является юридической консультацией. Для оценки вашей конкретной ситуации рекомендуется обратиться к адвокату.",
    "praDetail.ctaLabel": "Правовая помощь",
    "praDetail.ctaNote": "Консультация проводится на платной основе.",
    "praDetail.whatsapp": "Написать в WhatsApp",
    "praDetail.relatedAreas": "Смежные направления",
    "praDetail.allAreas": "Все направления практики",
    "praDetail.faqTitle": "{title}: часто задаваемые вопросы",
    "praDetail.ctaQuestion": "Хотите получить консультацию по вопросу «{title}»?",
    "floating.hint": "Вы можете задать вопрос в WhatsApp",
    "contact.langNote": "Консультации проводятся на турецком или английском языке.",
  },
  ar: {
    // Navbar
    "nav.about": "نبذة عني",
    "nav.practiceAreas": "مجالات العمل",
    "nav.process": "آلية العمل",
    "nav.articles": "مقالات",
    "nav.tools": "أدوات الحساب",
    "nav.districts": "المناطق",
    "nav.contact": "تواصل معنا",
    "nav.whatsapp": "راسلنا عبر واتساب",
    "nav.call": "اتصل الآن",
    "nav.menuOpen": "فتح القائمة",
    "nav.menuClose": "إغلاق القائمة",

    // Hero
    "hero.eyebrow": "نقابة المحامين في إسطنبول - رقم القيد: 72621",
    "hero.tagline": "متابعة الدعاوى والاستشارات القانونية في القانون الجنائي وقانون العمل وقانون العقارات في إسطنبول.",
    "hero.whatsapp": "راسلنا عبر واتساب",
    "hero.call": "اتصل الآن",
    "hero.scroll": "مرّر إلى الأسفل",

    // About
    "about.label": "نبذة عني",
    "about.role": "محامٍ - نقابة المحامين في إسطنبول",
    "about.bio1":
      "تخرّج المحامي فرقان أريكان في كلية الحقوق بجامعة MEF عام 2019، وبدأ ممارسة مهنة المحاماة في إسطنبول، ويقدّم منذ ذلك الحين خدمات الاستشارات القانونية ومتابعة الدعاوى.",
    "about.bio2":
      "يقدّم المكتب الدعم القانوني للموكّلين بصورة رئيسية في مجالات القانون الجنائي وقانون العمل والنزاعات العقارية. ومن أبرز هذه الخدمات: الدفاع خلال مرحلتَي التحقيق والمحاكمة، والتمثيل في النزاعات بين العامل وصاحب العمل، ومتابعة الدعاوى المتعلقة بالإيجار.",
    "about.bio3":
      "يقع المكتب في منطقة بشيكتاش، ويخدم موكّلين من مختلف مناطق إسطنبول. ويعمل بنظام المواعيد المسبقة، بما يتيح إيلاء كل ملف اهتمامًا مباشرًا ووقتًا كافيًا.",
    "about.education": "التعليم",
    "about.educationValue": "كلية الحقوق بجامعة MEF (2019)",
    "about.bar": "النقابة",
    "about.barValue": "نقابة المحامين في إسطنبول - رقم القيد: 72621",

    // Practice Areas (homepage)
    "practiceAreas.label": "مجالات العمل",
    "practiceAreas.heading": "المجالات التي نقدّم فيها الدعم القانوني",
    "practiceAreas.subheading": "تتطلب كل مسألة قانونية نهجًا مختلفًا. نقدّم الدعم وفقًا لاحتياجات ملفك.",
    "practiceAreas.readMore": "مزيد من المعلومات",
    "practiceAreas.showAll": "عرض جميع مجالات العمل",
    "practiceAreas.note": "يمكنكم أيضًا طلب الاستشارة في مسائل غير مذكورة أعلاه.",

    // Process
    "process.label": "كيف نعمل",
    "process.heading": "لنُدِر الإجراءات معًا",
    "process.subheading": "نوضّح كل خطوة مسبقًا من أجل إجراءات شفافة ويمكن توقّعها.",
    "process.step1.title": "التواصل الأولي",
    "process.step1.desc": "تواصلوا معنا عبر واتساب أو الهاتف. اعرضوا موضوعكم باختصار، ثم نحدّد معًا التاريخ والوقت المناسبين للموعد.",
    "process.step2.title": "موعد الاستشارة",
    "process.step2.desc": "تُعقد جلسة الاستشارة حضوريًا أو عبر الإنترنت مقابل أتعاب. ويُجرى خلالها تقييم وضعكم القانوني.",
    "process.step3.title": "الوكالة وإعداد الملف",
    "process.step3.desc": "في حال اتخاذ قرار التمثيل، تُنظَّم الوكالة لدى الكاتب العدل، وتُجمع المستندات ذات الصلة، ويُستكمل إعداد الملف.",
    "process.step4.title": "التمثيل ومتابعة الإجراءات",
    "process.step4.desc": "يُؤمَّن التمثيل وإدارة الإجراءات أمام المحاكم والنيابة العامة والجهات الإدارية الأخرى، مع إطلاع الموكّل على المستجدات.",
    "process.noteLabel": "ملاحظة:",
    "process.noteText": "الاستشارة الأولى مدفوعة الأجر. ويعود قرار منح الوكالة بعد الاستشارة إلى الموكّل وحده، ولا يترتب عليه أي التزام.",

    // Tools preview
    "tools.label": "أدوات مجانية",
    "tools.heading": "أدوات الحساب القانونية",
    "tools.calculate": "احسب الآن",
    "tools.viewAll": "جميع الأدوات",

    // Blog preview
    "blog.label": "معلومات قانونية",
    "blog.heading": "مقالات قانونية",
    "blog.readMore": "اقرأ المزيد",
    "blog.viewAll": "جميع المقالات",

    // Google reviews
    "reviews.label": "تقييمات Google",
    "reviews.heading": "ماذا يقول موكّلونا؟",
    "reviews.count": "38 تقييمًا على Google",
    "reviews.cta": "عرض جميع التقييمات على Google",

    // Contact
    "contact.label": "تواصل معنا",
    "contact.heading": "تواصلوا معنا",
    "contact.subheading": "يمكنكم الاتصال لحجز موعد أو المراسلة عبر واتساب.",
    "contact.formTitle": "اتركوا رسالة",
    "contact.address": "العنوان",
    "contact.directions": "الحصول على الاتجاهات",
    "contact.besiktasPage": "خدمات المحاماة في بشيكتاش",
    "contact.hours": "ساعات العمل",
    "contact.hoursLine1": "الاثنين - الجمعة: 09:00 - 18:00",
    "contact.hoursLine2": "السبت - الأحد: مغلق",
    "contact.phone": "الهاتف",
    "contact.email": "البريد الإلكتروني",

    // Contact form
    "form.name": "الاسم الكامل",
    "form.namePlaceholder": "اسمكم الكامل",
    "form.phone": "الهاتف",
    "form.phonePlaceholder": "05XX XXX XX XX",
    "form.topic": "الموضوع",
    "form.message": "رسالتكم",
    "form.messagePlaceholder": "لخّصوا وضعكم باختصار",
    "form.sendWhatsapp": "إرسال عبر واتساب",
    "form.sendEmail": "إرسال عبر البريد الإلكتروني",
    "form.note": "عند الضغط على «إرسال»، يُفتح تطبيق واتساب أو البريد الإلكتروني ورسالتكم جاهزة.",

    // Footer
    "footer.tagline": "متابعة الدعاوى والاستشارات القانونية في القانون الجنائي وقانون العمل وقانون العقارات في إسطنبول.",
    "footer.bar": "نقابة المحامين في إسطنبول - رقم القيد: 72621",
    "footer.links": "روابط",
    "footer.contact": "تواصل معنا",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.privacy": "سياسة الخصوصية وإشعار حماية البيانات الشخصية (KVKK)",
    "footer.fraud": "تحذير من الاحتيال",
    "hero.fraud": "لا تثقوا بمن يتصل من أرقام أخرى باسم المكتب ويطلب دفع مبالغ.",
    "contact.fraudNote": "لا تثقوا بالأشخاص الذين يتصلون من أرقام أخرى باسم المكتب ويطلبون دفع مبالغ. الرقم الرسمي: +90 535 487 40 99",
    "footer.disclaimer": "المعلومات الواردة في هذا الموقع لا تُعدّ استشارة قانونية.",

    // Floating buttons
    "floating.whatsapp": "واتساب",
    "floating.call": "اتصال",

    // Practice area detail page
    "praDetail.breadcrumbHome": "الصفحة الرئيسية",
    "praDetail.faqLabel": "الأسئلة الشائعة",
    "praDetail.faqHeading": "أسئلة شائعة",
    "praDetail.relatedContent": "محتوى ذو صلة",
    "praDetail.disclaimer": "هذه الصفحة لأغراض إعلامية عامة ولا تُعدّ استشارة قانونية. ويُنصح بمراجعة محامٍ لتقييم وضعكم الخاص.",
    "praDetail.ctaLabel": "الدعم القانوني",
    "praDetail.ctaNote": "تُقدَّم الاستشارة مقابل أتعاب.",
    "praDetail.whatsapp": "راسلنا عبر واتساب",
    "praDetail.relatedAreas": "مجالات ذات صلة",
    "praDetail.allAreas": "جميع مجالات العمل",
    "praDetail.faqTitle": "أسئلة شائعة حول {title}",
    "praDetail.ctaQuestion": "هل ترغبون في الحصول على استشارة بشأن {title}؟",
    "floating.hint": "يمكنكم إرسال سؤالكم عبر واتساب",
    "contact.langNote": "تُجرى الاستشارات باللغة التركية أو الإنجليزية.",
  },
} as const;
