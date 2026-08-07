// ============================================
// BLOG YAZILARI (3 dilli) — yeni yazı eklemek için
// aynı formatta bir kayıt ekleyin.
// ============================================
export const POSTS = [
  {
    slugs: { tr: "orumcek-vinc-nedir", en: "what-is-a-spider-crane", de: "was-ist-ein-minikran" },
    date: "2026-07-28",
    cover: "/slider/slide-1.jpg",
    tr: {
      category: "Ekipman Rehberi",
      title: "Örümcek Vinç Nedir, Nerelerde Kullanılır?",
      excerpt: "Dar kapılardan geçip bina içinde bile çalışabilen örümcek vinçler, klasik vinçlerin giremediği her yerde devreye girer.",
      content: [
        { h: "Kompakt gövde, büyük güç" },
        { p: "Örümcek vinçler (spider crane), paletli yürüyüş sistemi ve açılır destek ayakları sayesinde standart bir kapıdan geçebilecek kadar dar, ancak tonlarca yükü kaldırabilecek kadar güçlü makinelerdir. Kapalı alışveriş merkezleri, fabrika içleri, çatı altları ve şehir merkezindeki dar sokaklar en tipik kullanım alanlarıdır." },
        { h: "Nerelerde tercih edilir?" },
        { p: "Cam cephe montajı, çelik konstrüksiyon, heykel ve dekorasyon yerleştirme, asansör motoru değişimi gibi hassas kaldırma gerektiren işlerde örümcek vinç çoğu zaman tek çözümdür. Elektrikli modelleri kapalı alanlarda sıfır emisyonla çalışır." },
        { p: "Filomuzdaki örümcek vinçler farklı tonaj ve bom uzunluklarıyla her projeye uyarlanabilir. Hangi modelin işinize uygun olduğundan emin değilseniz WhatsApp'tan ulaşın, ücretsiz keşifle doğru ekipmanı belirleyelim." },
      ],
    },
    en: {
      category: "Equipment Guide",
      title: "What Is a Spider Crane and Where Is It Used?",
      excerpt: "Spider cranes fit through standard doorways and even work indoors — stepping in wherever classic cranes cannot reach.",
      content: [
        { h: "Compact body, serious power" },
        { p: "Thanks to their crawler tracks and folding outriggers, spider cranes are narrow enough to pass through a standard door yet strong enough to lift several tons. Shopping malls, factory floors, roof spaces and narrow city streets are their typical playground." },
        { h: "Where are they preferred?" },
        { p: "Glass facade installation, steel construction, sculpture placement and elevator motor replacement often make a spider crane the only viable option. Electric models work indoors with zero emissions." },
        { p: "The spider cranes in our fleet come in various tonnages and boom lengths. Not sure which model fits your job? Reach us on WhatsApp for a free survey." },
      ],
    },
    de: {
      category: "Geräte-Ratgeber",
      title: "Was ist ein Minikran und wo wird er eingesetzt?",
      excerpt: "Minikrane passen durch normale Türen und arbeiten sogar in Gebäuden — überall dort, wo klassische Krane nicht hinkommen.",
      content: [
        { h: "Kompakter Körper, große Kraft" },
        { p: "Dank Raupenfahrwerk und klappbaren Abstützungen sind Minikrane schmal genug für eine Standardtür und stark genug für mehrere Tonnen Last. Einkaufszentren, Fabrikhallen, Dachräume und enge Altstadtgassen sind ihr typisches Einsatzgebiet." },
        { h: "Wo werden sie bevorzugt?" },
        { p: "Bei Glasfassaden-Montage, Stahlbau, Skulpturen-Platzierung und Aufzugsmotor-Wechsel ist der Minikran oft die einzige Lösung. Elektrische Modelle arbeiten emissionsfrei in Innenräumen." },
        { p: "Unsere Minikrane gibt es in verschiedenen Tonnagen und Auslegerlängen. Unsicher, welches Modell passt? Schreiben Sie uns per WhatsApp für eine kostenlose Besichtigung." },
      ],
    },
  },
  {
    slugs: { tr: "makasli-platform-kiralama-rehberi", en: "scissor-lift-rental-guide", de: "scherenbuehne-mieten-ratgeber" },
    date: "2026-07-15",
    cover: "/slider/slide-5.jpg",
    tr: {
      category: "Kiralama",
      title: "Makaslı Platform Kiralarken Nelere Dikkat Etmeli?",
      excerpt: "Akülü mü dizel mi? Kaç metre çalışma yüksekliği? Doğru makaslı platformu seçmek için bilmeniz gerekenler.",
      content: [
        { h: "Akülü mü, dizel mi?" },
        { p: "Kapalı ve zemini düzgün alanlarda (AVM, depo, fabrika) akülü makaslı platformlar sessiz ve emisyonsuz çalışır. Açık arazide, bozuk zeminde ve yüksek kapasite gereken işlerde dizel modeller tercih edilir." },
        { h: "Çalışma yüksekliğini doğru hesaplayın" },
        { p: "Platform seçerken ulaşmak istediğiniz nokta değil, çalışma yüksekliği esas alınır: platform taban yüksekliğine yaklaşık 2 metre insan erişimi eklenir. Kiralamadan önce kapı ve asansör ölçülerini, zemin kapasitesini mutlaka paylaşın — ekibimiz keşifte tüm detayları sizinle netleştirir." },
      ],
    },
    en: {
      category: "Rental",
      title: "What to Consider When Renting a Scissor Lift",
      excerpt: "Electric or diesel? How many meters of working height? Everything you need to pick the right scissor lift.",
      content: [
        { h: "Electric or diesel?" },
        { p: "On smooth indoor floors (malls, warehouses, factories) electric scissor lifts run silently with zero emissions. For outdoor terrain, rough ground and higher capacities, diesel models are the way to go." },
        { h: "Calculate working height correctly" },
        { p: "What matters is working height, not just the point you want to reach: add roughly 2 meters of human reach to the platform height. Before renting, share door and elevator dimensions and floor capacity — our team clarifies every detail during the free survey." },
      ],
    },
    de: {
      category: "Vermietung",
      title: "Worauf Sie beim Mieten einer Scherenbühne achten sollten",
      excerpt: "Elektrisch oder Diesel? Wie viel Arbeitshöhe? Alles Wichtige zur Wahl der richtigen Scherenbühne.",
      content: [
        { h: "Elektrisch oder Diesel?" },
        { p: "Auf glatten Innenböden (Einkaufszentren, Lager, Fabriken) arbeiten Elektro-Scherenbühnen leise und emissionsfrei. Im Außenbereich, auf unebenem Gelände und bei höheren Kapazitäten sind Dieselmodelle die richtige Wahl." },
        { h: "Arbeitshöhe richtig berechnen" },
        { p: "Entscheidend ist die Arbeitshöhe, nicht nur der Zielpunkt: Zur Plattformhöhe kommen etwa 2 Meter Greifhöhe hinzu. Teilen Sie vor der Miete Tür- und Aufzugsmaße sowie Bodenbelastung mit — unser Team klärt alle Details bei der kostenlosen Besichtigung." },
      ],
    },
  },
  {
    slugs: { tr: "vinc-operasyonlarinda-is-guvenligi", en: "crane-safety-golden-rules", de: "kransicherheit-goldene-regeln" },
    date: "2026-06-30",
    cover: "/slider/slide-4.jpg",
    tr: {
      category: "İş Güvenliği",
      title: "Vinç Operasyonlarında İş Güvenliği: 7 Altın Kural",
      excerpt: "Vinç işinde ikinci şansa yer yoktur. Her operasyonda uyguladığımız temel güvenlik prensiplerini derledik.",
      content: [
        { p: "Vinç kaynaklı kazaların büyük bölümü planlama eksikliğinden doğar. Her operasyonumuzda istisnasız uyguladığımız kuralları paylaşıyoruz:" },
        { p: "1) Operasyon öncesi saha keşfi ve risk analizi yapılır. 2) Zemin taşıma kapasitesi doğrulanır. 3) Yük tablosunun dışına asla çıkılmaz. 4) Sapan ve aparatlar her kullanımdan önce kontrol edilir. 5) Rüzgar limitleri aşıldığında operasyon durdurulur. 6) Yük altında kimse bulundurulmaz. 7) Operatör ile işaretçi arasında kesintisiz iletişim sağlanır." },
        { p: "Tüm operatörlerimiz sertifikalıdır ve operasyonlarımız sigorta kapsamındadır. Güvenlikten taviz vermeyen bir çözüm ortağı arıyorsanız doğru yerdesiniz." },
      ],
    },
    en: {
      category: "Work Safety",
      title: "Crane Safety: 7 Golden Rules We Never Break",
      excerpt: "In crane work there is no room for second chances. Here are the core safety principles we apply on every job.",
      content: [
        { p: "Most crane accidents stem from poor planning. These are the rules we apply on every single operation without exception:" },
        { p: "1) Site survey and risk analysis before the job. 2) Ground bearing capacity verified. 3) Never exceed the load chart. 4) Slings and rigging inspected before each use. 5) Operation stops when wind limits are exceeded. 6) No one under the load, ever. 7) Continuous communication between operator and signaller." },
        { p: "All our operators are certified and every operation is insured. If you are looking for a partner that never compromises on safety, you are in the right place." },
      ],
    },
    de: {
      category: "Arbeitssicherheit",
      title: "Kransicherheit: 7 goldene Regeln",
      excerpt: "Bei Kranarbeit gibt es keine zweite Chance. Diese Sicherheitsprinzipien gelten bei jedem unserer Einsätze.",
      content: [
        { p: "Die meisten Kranunfälle entstehen durch mangelhafte Planung. Diese Regeln wenden wir ausnahmslos bei jedem Einsatz an:" },
        { p: "1) Ortsbegehung und Risikoanalyse vor dem Einsatz. 2) Bodentragfähigkeit wird geprüft. 3) Die Lasttabelle wird nie überschritten. 4) Anschlagmittel werden vor jedem Einsatz kontrolliert. 5) Bei Überschreiten der Windlimits wird gestoppt. 6) Niemand hält sich unter der Last auf. 7) Ständige Kommunikation zwischen Bediener und Einweiser." },
        { p: "Alle unsere Bediener sind zertifiziert und jeder Einsatz ist versichert. Wenn Sie einen Partner suchen, der bei Sicherheit keine Kompromisse macht, sind Sie hier richtig." },
      ],
    },
  },
  {
    slugs: { tr: "arac-ustu-platform-avantajlari", en: "truck-mounted-platform-advantages", de: "lkw-arbeitsbuehnen-vorteile" },
    date: "2026-06-10",
    cover: "/slider/slide-3.jpg",
    tr: {
      category: "Ekipman Rehberi",
      title: "Araç Üstü Platformların Avantajları",
      excerpt: "Şehir içi işlerde hız her şeydir. Araç üstü platformlar kurulum gerektirmeden dakikalar içinde çalışmaya başlar.",
      content: [
        { p: "Araç üstü platformlar kendi motoruyla iş noktasına ulaşır ve destek ayaklarını açarak dakikalar içinde çalışmaya hazır hale gelir. Nakliye maliyeti gerektirmemesi ve gün içinde birden fazla noktada çalışabilmesi en büyük avantajıdır." },
        { h: "Tipik kullanım alanları" },
        { p: "Sokak aydınlatması, tabela montajı, cephe temizliği, ağaç budama ve çatı kontrolleri araç üstü platformların günlük işleridir. 14 metreden 40+ metreye kadar erişim seçenekleri sunuyoruz. Rezervasyon için WhatsApp hattımız 7/24 açık." },
      ],
    },
    en: {
      category: "Equipment Guide",
      title: "The Advantages of Truck-Mounted Platforms",
      excerpt: "In urban jobs speed is everything. Truck-mounted platforms drive to the site and start working within minutes.",
      content: [
        { p: "Truck-mounted platforms drive themselves to the job site and are ready to work within minutes once the outriggers are set. No transport cost and the ability to cover multiple locations in one day are their biggest advantages." },
        { h: "Typical use cases" },
        { p: "Street lighting maintenance, signage installation, facade cleaning, tree trimming and roof inspections are everyday jobs for truck-mounted platforms. We offer reach options from 14 to 40+ meters. Our WhatsApp line is open 24/7 for reservations." },
      ],
    },
    de: {
      category: "Geräte-Ratgeber",
      title: "Die Vorteile von LKW-Arbeitsbühnen",
      excerpt: "Im Stadtgebiet zählt Geschwindigkeit. LKW-Arbeitsbühnen fahren zum Einsatzort und sind in Minuten arbeitsbereit.",
      content: [
        { p: "LKW-Arbeitsbühnen fahren selbst zum Einsatzort und sind nach dem Abstützen in wenigen Minuten einsatzbereit. Keine Transportkosten und mehrere Einsatzorte an einem Tag — das sind ihre größten Vorteile." },
        { h: "Typische Einsatzgebiete" },
        { p: "Straßenbeleuchtung, Schildermontage, Fassadenreinigung, Baumschnitt und Dachkontrollen gehören zum Alltag der LKW-Bühnen. Wir bieten Reichweiten von 14 bis über 40 Meter. Unsere WhatsApp-Linie ist rund um die Uhr für Reservierungen offen." },
      ],
    },
  },
];

export const getPost = (lang, slug) => POSTS.find((p) => p.slugs[lang] === slug);
