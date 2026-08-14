// Kurumsal sayfalar için uzun detaylı içerik (Hakkımızda, Neden Biz, İnsan Kaynakları).
// Her sayfa: bölümler (başlık + paragraflar + opsiyonel liste/tablo). TR tam, EN/DE özet.

// ---------- HAKKIMIZDA ----------
export function aboutSections(lang) {
  if (lang === "en") return aboutEN();
  if (lang === "de") return aboutDE();
  return [
    { h: "Biz Kimiz?", p: [
      "Express Vinç (Ekspres Vinç Hiz. Nak. Ltd. Şti.), İstanbul merkezli olarak vinç, yükseltici platform (manlift) ve forklift kiralama alanında hizmet veren profesyonel bir firmadır. Yılların saha deneyimini modern bir makine parkıyla birleştirerek, inşaattan sanayiye, lojistikten bakım-onarıma kadar her ölçekteki projeye güvenilir çözümler üretiyoruz. İkitelli Organize Sanayi Bölgesi'ndeki merkezimizden İstanbul'un iki yakasına ve çevre illere hizmet ulaştırıyoruz.",
      "Kuruluşumuzdan bu yana önceliğimiz, müşterilerimize yalnızca makine değil, kesintisiz ve güvenli bir operasyon deneyimi sunmak oldu. Bu yüzden filomuzu sürekli yeniliyor, ekibimizi düzenli eğitimlerle güçlendiriyor ve her işi kendi işimiz gibi titizlikle takip ediyoruz.",
    ]},
    { h: "Misyonumuz", p: [
      "Misyonumuz, yüksekte çalışma ve ağır kaldırma ihtiyacı olan her işletmeye; doğru makineyi, doğru zamanda, en güvenli ve en ekonomik şekilde ulaştırmaktır. Müşterilerimizin projelerini zamanında ve sorunsuz tamamlamalarını sağlamak için tüm operasyonel yükü — bakım, sigorta, periyodik kontrol ve teknik destek — kendi üzerimize alıyoruz.",
      "Her müşteriye tek tip yaklaşmak yerine, işin niteliğini anlayıp ona özel çözüm üretmeyi ilke edindik. Ücretsiz keşif hizmetimizle sahayı yerinde değerlendirir, gereğinden büyük ya da yetersiz bir makineyle riske girmenizi önleriz.",
    ]},
    { h: "Vizyonumuz", p: [
      "Vizyonumuz, İstanbul ve Türkiye genelinde vinç ve platform kiralama denince akla gelen ilk, en güvenilir ve en geniş makine parkına sahip marka olmaktır. Bunu, teknolojiye yatırım yaparak, çevreye duyarlı elektrikli makine parkımızı büyüterek ve müşteri memnuniyetini her zaman merkeze koyarak gerçekleştiriyoruz.",
      "Sektörde standartları yükselten, şeffaf fiyatlandırma ve dürüst hizmet anlayışıyla fark yaratan bir firma olmayı hedefliyoruz. Uzun vadeli iş ortaklıkları kurmak, bizim için tek seferlik kiralamalardan çok daha değerlidir.",
    ]},
    { h: "Neler Sunuyoruz?", p: [
      "Makine parkımız 8 dünya markasından 300'ü aşkın modeli kapsar: akülü ve dizel makaslı platformlar, dikey platformlar, eklemli ve teleskopik bom platformlar, örümcek platformlar, örümcek vinçler, araç üstü platformlar, forkliftler ve mobil vinçler. Bu çeşitlilik, en küçük iç mekân işinden en büyük şantiyeye kadar her ihtiyacı tek adresten karşılamanızı sağlar.",
      "Kiralama seçeneklerimiz günlük, haftalık ve aylık olarak esnektir; operatörlü veya operatörsüz tercih edebilirsiniz. Tüm makineler sigortalı, bakımlı ve güncel periyodik kontrol raporlarıyla teslim edilir.",
    ], ul: [
      "Vinç, platform ve forklift kiralama (günlük/haftalık/aylık)",
      "Operatörlü ve operatörsüz kiralama seçenekleri",
      "Ücretsiz keşif ve saha değerlendirmesi",
      "7/24 teknik destek ve aynı gün ikame makine",
      "Sigortalı operasyon ve belgeli teslimat",
    ]},
    { h: "Neden Express Vinç?", p: [
      "Bizi farklı kılan, makinelerimiz kadar hizmet anlayışımızdır. Sabit fiyat garantisi veriyoruz — teslimatta sürpriz maliyet çıkmaz. Ücretsiz keşif yapıyor, arıza durumunda aynı gün ikame makine gönderiyor ve operasyonunuzun durmasına izin vermiyoruz. Deneyimli ve belgeli operatör kadromuzla her işi güvenle tamamlıyoruz.",
      "Dünyanın önde gelen markalarını tek çatı altında sunmamız, size marka bağımsız ve tarafsız bir öneri sağlar. Amacımız belirli bir makineyi kiralamak değil, işinize en uygun çözümü bulmaktır. Bu yaklaşımımız, müşterilerimizin bize tekrar tekrar dönmesinin en büyük sebebidir.",
    ]},
  ];
}
function aboutEN() {
  return [
    { h: "Who We Are", p: [
      "Express Vinc is an Istanbul-based professional company specialising in the rental of cranes, aerial work platforms (manlifts) and forklifts. We combine years of field experience with a modern fleet to deliver reliable solutions for projects of every scale — from construction and industry to logistics and maintenance.",
      "Since our foundation, our priority has been to offer not just machines but an uninterrupted, safe operation experience. We continuously renew our fleet and strengthen our team with regular training.",
    ]},
    { h: "Our Mission", p: [
      "Our mission is to deliver the right machine, at the right time, in the safest and most economical way to every business that needs to work at height or lift heavy loads. We take on the entire operational burden — maintenance, insurance, inspection and technical support.",
      "Instead of a one-size-fits-all approach, we understand the nature of each job and produce a tailored solution, with a free site survey to avoid over- or under-sized machines.",
    ]},
    { h: "What We Offer", p: [
      "Our fleet spans over 300 models from 8 world brands: scissor lifts, vertical lifts, boom lifts, spider platforms, spider cranes, truck-mounted platforms, forklifts and mobile cranes.",
      "Rental terms are flexible — daily, weekly and monthly — with or without an operator. All machines are insured, maintained and delivered with up-to-date inspection reports.",
    ], ul: [
      "Crane, platform and forklift rental",
      "With or without operator",
      "Free site survey",
      "24/7 support and same-day replacement",
      "Insured operation and certified delivery",
    ]},
  ];
}
function aboutDE() {
  return [
    { h: "Wer wir sind", p: [
      "Express Vinc ist ein professionelles Unternehmen mit Sitz in Istanbul, spezialisiert auf die Vermietung von Kranen, Arbeitsbühnen (Manlifts) und Staplern. Wir verbinden langjährige Erfahrung mit einem modernen Fuhrpark für zuverlässige Lösungen jeder Größe.",
      "Seit unserer Gründung steht ein unterbrechungsfreier, sicherer Betrieb im Vordergrund. Wir erneuern unsere Flotte laufend und schulen unser Team regelmäßig.",
    ]},
    { h: "Unsere Mission", p: [
      "Unsere Mission ist es, jedem Betrieb die richtige Maschine zur richtigen Zeit sicher und wirtschaftlich zu liefern. Wir übernehmen die gesamte Betriebslast — Wartung, Versicherung, Prüfung und technischen Support.",
      "Mit einer kostenlosen Besichtigung finden wir die passende Lösung statt einer Einheitslösung.",
    ]},
    { h: "Was wir bieten", p: [
      "Unser Fuhrpark umfasst über 300 Modelle von 8 Weltmarken: Scheren-, Vertikal-, Gelenk- und Teleskopbühnen, Spinnenbühnen, Minikrane, LKW-Bühnen, Stapler und Mobilkrane.",
      "Flexible Miete — täglich, wöchentlich, monatlich — mit oder ohne Bediener. Alle Maschinen sind versichert, gewartet und geprüft.",
    ], ul: [
      "Kran-, Bühnen- und Staplermiete",
      "Mit oder ohne Bediener",
      "Kostenlose Besichtigung",
      "24/7-Support und Ersatzgerät am selben Tag",
      "Versicherter Betrieb",
    ]},
  ];
}

// ---------- NEDEN BİZ ----------
export function whyusSections(lang) {
  if (lang === "en") return whyEN();
  if (lang === "de") return whyDE();
  return [
    { h: "Türkiye'nin En Geniş Makine Parklarından Biri", p: [
      "Express Vinç, 8 dünya markasından 300'ü aşkın bakımlı ve belgeli makineyle İstanbul'un en geniş kiralık makine parklarından birine sahiptir. Akülü makaslı platformlardan 100 metreye ulaşan mobil vinçlere, örümcek vinçlerden forkliftlere kadar 9 farklı kategoride ihtiyacınız olan her makineyi tek adresten temin edersiniz. Bu genişlik, projeniz hangi aşamada olursa olsun doğru ekipmanı beklemeden bulmanızı sağlar.",
      "Farklı markaları (Zoomlion, JLG, Genie, Haulotte, Dingli, Liebherr, Jekko, VMAX) bir arada bulundurmamız, size marka bağımsız ve tarafsız bir öneri sunmamızı mümkün kılar. Belirli bir markayı pazarlamak yerine, işinize gerçekten en uygun makineyi öneririz.",
    ]},
    { h: "Sabit Fiyat Garantisi", p: [
      "Verdiğimiz teklif sabittir. Keşif sonrası paylaştığımız fiyat, teslimatta değişmez; gizli maliyet, sürpriz ek ücret çıkmaz. Bu şeffaflık, bütçenizi baştan net görmenizi ve projenizi güvenle planlamanızı sağlar.",
      "Kiralama süreniz uzadıkça günlük birim maliyet belirgin şekilde düşer. Uzun dönem projelerde aylık kiralama en ekonomik seçenektir ve size ciddi tasarruf sağlar.",
    ]},
    { h: "Ücretsiz Keşif ve Doğru Makine Seçimi", p: [
      "Yanlış makine seçimi, hem güvenlik riski hem de zaman ve para kaybı demektir. Bu yüzden kiralama öncesi ücretsiz keşif hizmeti sunuyoruz: ekibimiz sahayı yerinde değerlendirir, çalışma yüksekliğini, zemin koşullarını ve erişim ihtiyacını analiz eder.",
      "Bu sayede ne gereğinden büyük bir makineye fazladan ödersiniz, ne de yetersiz kapasiteyle işi riske atarsınız. Kapasite tablolarına hâkim uzman ekibimiz, işinize birebir uyan makineyi belirler.",
    ]},
    { h: "7/24 Teknik Destek ve İkame Garantisi", p: [
      "Sahada yaşanabilecek bir arıza, projenizi aksatmasın diye 7/24 teknik destek sağlıyoruz. Mobil servis ekibimiz hızla müdahale eder; sorun yerinde çözülemezse, aynı gün ikame makine göndererek operasyonunuzun durmasını önleriz.",
      "Bu garanti, özellikle sıkı termine sahip şantiyeler ve kesintisiz üretim gerektiren sanayi tesisleri için kritik önemdedir. Makineniz çalışmadığında para kaybedersiniz; biz bunu önlüyoruz.",
    ], ul: [
      "7/24 ulaşılabilir teknik destek hattı",
      "Sahada mobil servis müdahalesi",
      "Arızada aynı gün ikame makine",
      "Periyodik bakımların firma tarafından üstlenilmesi",
    ]},
    { h: "Sigortalı Operasyon ve Belgeli Operatörler", p: [
      "Tüm operasyonlarımız sigorta güvencesi altında yürütülür; bu, hem sizin hem de bizim için güvenli bir çalışma ortamı demektir. Makinelerimiz ilgili mevzuatın gerektirdiği periyodik kontrollerden geçer ve her teslimatta güncel kontrol raporuyla teslim edilir.",
      "Operatörlü kiralamalarımızda makineyi, MYK belgeli ve alanında deneyimli operatörlerimiz kullanır. İş güvenliğine verdiğimiz önem, operasyonlarınızın kazasız ve sorunsuz tamamlanmasının teminatıdır.",
    ]},
  ];
}
function whyEN() {
  return [
    { h: "One of Turkey's Largest Fleets", p: [
      "Express Vinc has one of Istanbul's largest rental fleets, with over 300 maintained, certified machines from 8 world brands across 9 categories — from electric scissor lifts to 100 m mobile cranes.",
      "Carrying multiple brands lets us give you a brand-independent, impartial recommendation for the machine that truly fits your job.",
    ]},
    { h: "Fixed-Price Guarantee", p: [
      "Our quote is fixed — the price we share after the survey does not change on delivery, with no hidden costs.",
      "The longer the rental, the lower the daily unit cost; monthly rental is the most economical for long-term projects.",
    ]},
    { h: "Free Survey & 24/7 Support", p: [
      "We offer a free site survey to select the right machine, avoiding safety risks and wasted money.",
      "With 24/7 support and a same-day replacement guarantee, your operation never stops.",
    ], ul: [
      "24/7 technical support line",
      "On-site mobile service",
      "Same-day replacement machine",
      "Maintenance handled by us",
    ]},
  ];
}
function whyDE() {
  return [
    { h: "Einer der größten Fuhrparks der Türkei", p: [
      "Express Vinc verfügt über einen der größten Mietfuhrparks Istanbuls mit über 300 gewarteten, zertifizierten Maschinen von 8 Weltmarken in 9 Kategorien.",
      "Durch mehrere Marken bieten wir eine markenunabhängige Empfehlung für die passende Maschine.",
    ]},
    { h: "Festpreisgarantie", p: [
      "Unser Angebot ist fest — der Preis ändert sich bei Lieferung nicht, keine versteckten Kosten.",
      "Je länger die Miete, desto niedriger der Tagespreis; Monatsmiete ist am wirtschaftlichsten.",
    ]},
    { h: "Kostenlose Besichtigung & 24/7-Support", p: [
      "Wir bieten eine kostenlose Besichtigung zur Auswahl der richtigen Maschine.",
      "Mit 24/7-Support und Ersatzgerät am selben Tag steht Ihr Betrieb nie still.",
    ], ul: [
      "24/7-Support-Hotline",
      "Mobiler Vor-Ort-Service",
      "Ersatzgerät am selben Tag",
      "Wartung durch uns",
    ]},
  ];
}

// ---------- İNSAN KAYNAKLARI ----------
export function hrSections(lang) {
  if (lang === "en") return hrEN();
  if (lang === "de") return hrDE();
  return [
    { h: "Neden Express Vinç'te Çalışmalısınız?", p: [
      "Express Vinç, çalışanlarını ailenin bir parçası olarak gören, emeğe değer veren bir kurumdur. Sektörün en deneyimli operatör ve teknik ekibiyle omuz omuza çalışır, her gün yeni bir şey öğrenirsiniz. Büyüyen bir firmada kariyer yapmak, kendinizi geliştirmek ve uzun vadeli bir iş güvencesine sahip olmak isteyenler için doğru adrestesiniz.",
      "Biz, çalışanının mutlu ve güvende olduğu bir işyerinin, işini de en iyi şekilde yaptığına inanıyoruz. Bu yüzden sigortalı çalışma, düzenli eğitim, adil ücret ve sağlıklı bir çalışma ortamı bizim için pazarlık konusu değildir.",
    ]},
    { h: "Aradığımız Pozisyonlar", p: [
      "Büyüyen filomuz ve artan iş hacmimizle birlikte farklı departmanlarda yeni ekip arkadaşları arıyoruz. Deneyimli veya yetişmeye açık, iş güvenliğine önem veren ve takım çalışmasına yatkın herkesin başvurusunu değerlendiriyoruz.",
      "Aşağıdaki pozisyonlar için özgeçmişinizi bize iletebilirsiniz. Şu anda açık pozisyon olmasa bile, başvurunuzu havuzumuzda tutar, uygun bir fırsat doğduğunda sizinle iletişime geçeriz.",
    ], table: {
      head: ["Pozisyon", "Aranan Nitelikler"],
      rows: [
        ["Platform/Vinç Operatörü", "MYK operatör belgesi (veya yetişmeye açık), sürücü belgesi"],
        ["Saha Teknisyeni", "Hidrolik/elektrik/mekanik bilgisi, teknik lise mezunu tercih"],
        ["Lojistik & Sevkiyat", "Ağır vasıta ehliyeti (E sınıfı), İstanbul yol bilgisi"],
        ["Ofis & Müşteri İlişkileri", "İletişim becerisi, MS Office, tercihen sektör deneyimi"],
      ],
    }},
    { h: "Çalışanlarımıza Sunduklarımız", p: [
      "Express Vinç'te işe alım kadar, çalışanı elde tutmak ve geliştirmek de önceliğimizdir. Ekibimize sunduğumuz haklar ve imkanlar, sektör standartlarının üzerindedir.",
      "Kariyer gelişiminizi destekliyor, operatör belgesi ve teknik sertifika masraflarını firma olarak karşılıyoruz. Performansa dayalı ödüllendirme ve terfi imkanlarıyla, emeğinizin karşılığını fazlasıyla alırsınız.",
    ], ul: [
      "Sigortalı ve yasal güvence altında çalışma",
      "Operatör belgesi ve teknik eğitim desteği (firma karşılar)",
      "Adil ve zamanında ödeme",
      "Performansa dayalı prim ve terfi imkanı",
      "Deneyimli ekiple çalışarak sürekli gelişim",
      "Sağlıklı ve güvenli çalışma ortamı",
    ]},
    { h: "Başvuru Nasıl Yapılır?", p: [
      "Başvurmak çok kolay: Aşağıdaki formu doldurup PDF formatındaki özgeçmişinizi (CV) yükleyebilir, ya da CV'nizi doğrudan e-posta veya WhatsApp üzerinden bize iletebilirsiniz. Başvurunuz ekibimize ulaştığında, uygun pozisyon için değerlendirmeye alınır.",
      "Başvurunuz olumlu değerlendirildiğinde, İnsan Kaynakları ekibimiz sizinle iletişime geçerek görüşme sürecini başlatır. Tüm başvurular gizlilik ilkesiyle saklanır.",
    ]},
  ];
}
function hrEN() {
  return [
    { h: "Why Work at Express Vinc?", p: [
      "Express Vinc treats its employees as part of the family and values effort. You work alongside the industry's most experienced team and learn every day, with long-term job security in a growing company.",
      "We believe a happy, safe employee does the best work — so insured employment, regular training, fair pay and a healthy environment are non-negotiable for us.",
    ]},
    { h: "Open Positions", p: [
      "As our fleet and business grow, we seek new colleagues across departments. We welcome experienced or trainable candidates who value work safety and teamwork.",
      "Send us your CV for the roles below; even without a current opening we keep your application on file.",
    ], table: {
      head: ["Position", "Requirements"],
      rows: [
        ["Platform/Crane Operator", "Operator certificate (or trainable), driving licence"],
        ["Field Technician", "Hydraulic/electric/mechanical knowledge"],
        ["Logistics & Dispatch", "Heavy vehicle licence, Istanbul route knowledge"],
        ["Office & Customer Relations", "Communication skills, MS Office"],
      ],
    }},
    { h: "What We Offer", p: [
      "Retaining and developing employees is a priority. Our benefits are above industry standard.",
      "We support your career and cover operator certificate and technical training costs, with performance-based rewards and promotion.",
    ], ul: [
      "Insured, legally secured employment",
      "Operator certificate & training support",
      "Fair, on-time pay",
      "Performance bonus and promotion",
      "Continuous development with an expert team",
    ]},
    { h: "How to Apply", p: [
      "Fill in the form below and upload your CV in PDF, or send it via e-mail or WhatsApp.",
      "If shortlisted, our HR team will contact you. All applications are kept confidential.",
    ]},
  ];
}
function hrDE() {
  return [
    { h: "Warum bei Express Vinc arbeiten?", p: [
      "Express Vinc behandelt seine Mitarbeiter als Teil der Familie. Sie arbeiten mit dem erfahrensten Team der Branche und lernen täglich dazu — mit langfristiger Sicherheit in einem wachsenden Unternehmen.",
      "Versicherte Beschäftigung, regelmäßige Schulung, faire Bezahlung und ein gesundes Umfeld sind für uns selbstverständlich.",
    ]},
    { h: "Offene Stellen", p: [
      "Mit wachsender Flotte suchen wir neue Kolleginnen und Kollegen in mehreren Abteilungen.",
      "Senden Sie uns Ihren Lebenslauf für die folgenden Positionen; wir behalten Ihre Bewerbung auch ohne aktuelle Vakanz.",
    ], table: {
      head: ["Position", "Anforderungen"],
      rows: [
        ["Bühnen-/Kranbediener", "Bedienerausweis (oder lernbereit), Führerschein"],
        ["Servicetechniker", "Hydraulik-/Elektrik-/Mechanikkenntnisse"],
        ["Logistik & Versand", "LKW-Führerschein, Ortskenntnis Istanbul"],
        ["Büro & Kundenbeziehungen", "Kommunikationsstärke, MS Office"],
      ],
    }},
    { h: "Was wir bieten", p: [
      "Mitarbeiterbindung und -entwicklung haben Priorität. Unsere Leistungen liegen über dem Branchenstandard.",
      "Wir fördern Ihre Karriere und übernehmen Kosten für Bedienerausweis und Schulungen.",
    ], ul: [
      "Versicherte Beschäftigung",
      "Ausweis- & Schulungsunterstützung",
      "Faire, pünktliche Bezahlung",
      "Leistungsprämie und Aufstieg",
    ]},
    { h: "Bewerbung", p: [
      "Füllen Sie das Formular aus und laden Sie Ihren Lebenslauf als PDF hoch, oder senden Sie ihn per E-Mail/WhatsApp.",
      "Bei Eignung meldet sich unser HR-Team. Alle Bewerbungen werden vertraulich behandelt.",
    ]},
  ];
}
