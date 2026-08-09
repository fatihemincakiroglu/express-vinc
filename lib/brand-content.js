// Marka profil verileri + içerik üreticileri.
// Her markanın özgün gerçekleri (menşe, kuruluş, uzmanlık) BRAND_DATA'da;
// 10 başlıklı içerik ve 10 SSS bu verilerden markaya özel üretilir.
import { productsByBrand, capText } from "./products";
import { T } from "./i18n";

export const BRAND_DATA = {
  Zoomlion: {
    country: "Çin", countryEn: "China", countryDe: "China",
    founded: 1992, hq: "Changsha, Hunan",
    strength: "mobil vinç, paletli vinç ve yükseltici platform",
    strengthEn: "mobile cranes, crawler cranes and access platforms",
    strengthDe: "Mobilkrane, Raupenkrane und Arbeitsbühnen",
    note: "dünyanın en büyük vinç ve iş makinesi üreticilerinden biri",
    series: "ZA/ZT (platform), ZS (makaslı), ZAT/ZRT/ZCC (vinç)",
    site: "zoomlion.com",
  },
  JLG: {
    country: "ABD", countryEn: "USA", countryDe: "USA",
    founded: 1969, hq: "McConnellsburg, Pennsylvania",
    strength: "eklemli/teleskopik platform, makaslı platform ve teleskopik yükleyici",
    strengthEn: "boom lifts, scissor lifts and telehandlers",
    strengthDe: "Teleskop-/Gelenkbühnen, Scherenbühnen und Teleskoplader",
    note: "yükseltici platform (MEWP) sektörünün kurucu markalarından, Oshkosh grubuna bağlı",
    series: "ES/R (makaslı), AJ/SJ (bom), Skytrak (telehandler)",
    site: "jlg.com",
  },
  Genie: {
    country: "ABD", countryEn: "USA", countryDe: "USA",
    founded: 1966, hq: "Redmond, Washington",
    strength: "makaslı platform, eklemli/teleskopik bom ve dikey platform",
    strengthEn: "scissor lifts, boom lifts and vertical mast lifts",
    strengthDe: "Scherenbühnen, Teleskop-/Gelenkbühnen und Vertikalmastbühnen",
    note: "Terex grubuna bağlı, GS ve S/Z serileriyle dünya çapında tanınan platform markası",
    series: "GS (makaslı), S (teleskopik), Z (eklemli)",
    site: "genielift.com",
  },
  Haulotte: {
    country: "Fransa", countryEn: "France", countryDe: "Frankreich",
    founded: 1985, hq: "L'Horme, Fransa",
    strength: "makaslı platform, eklemli/teleskopik bom ve dikey platform",
    strengthEn: "scissor lifts, boom lifts and vertical mast lifts",
    strengthDe: "Scherenbühnen, Teleskop-/Gelenkbühnen und Vertikalmastbühnen",
    note: "Avrupa'nın en büyük yükseltici platform üreticisi, PULSEO elektrikli serisiyle öncü",
    series: "Compact/HS (makaslı), HA/HT (bom), Star (dikey)",
    site: "haulotte.com",
  },
  Dingli: {
    country: "Çin", countryEn: "China", countryDe: "China",
    founded: 2005, hq: "Deqing, Zhejiang",
    strength: "makaslı platform, eklemli/teleskopik bom ve dikey platform",
    strengthEn: "scissor lifts, boom lifts and vertical mast lifts",
    strengthDe: "Scherenbühnen, Teleskop-/Gelenkbühnen und Vertikalmastbühnen",
    note: "dünyanın en büyük üç platform üreticisinden biri, 300'den fazla patente sahip",
    series: "JCPT (makaslı), BA/BT (bom), AMWP (dikey)",
    site: "dingliglobal.com",
  },
  Liebherr: {
    country: "Almanya", countryEn: "Germany", countryDe: "Deutschland",
    founded: 1949, hq: "Bulle, İsviçre",
    strength: "mobil vinç, paletli vinç ve ağır kaldırma ekipmanı",
    strengthEn: "mobile cranes, crawler cranes and heavy lifting equipment",
    strengthDe: "Mobilkrane, Raupenkrane und Schwerlastausrüstung",
    note: "ağır kaldırma ve mobil vinç teknolojisinde dünya lideri Alman markası",
    series: "LTM (mobil vinç), LR (paletli), LTC/LRT",
    site: "liebherr.com",
  },
  Jekko: {
    country: "İtalya", countryEn: "Italy", countryDe: "Italien",
    founded: 2005, hq: "Colle Umberto, İtalya",
    strength: "örümcek vinç (mini paletli vinç) ve pick&carry vinç",
    strengthEn: "spider cranes (mini crawler cranes) and pick&carry cranes",
    strengthDe: "Minikrane (Raupenkrane) und Pick&Carry-Krane",
    note: "kompakt örümcek vinç segmentinin dünya çapında öncü İtalyan markası",
    series: "SPX/JF (örümcek vinç), MPK (minipicker)",
    site: "jekko.it",
  },
  VMAX: {
    country: "Türkiye", countryEn: "Türkiye", countryDe: "Türkei",
    founded: 2010, hq: "İstanbul",
    strength: "forklift ve istifleme ekipmanı",
    strengthEn: "forklifts and material handling equipment",
    strengthDe: "Stapler und Flurförderzeuge",
    note: "uygun maliyetli forklift ve depo ekipmanı çözümleri sunan marka",
    series: "dizel, LPG ve akülü forklift serileri",
    site: "",
  },
};

// Bir markanın ürünlerinin özetini (kategori dağılımı, min-max yükseklik/kapasite) döndürür
export function brandStats(brand) {
  const items = productsByBrand(brand);
  const cats = [...new Set(items.map((p) => p.cat))];
  const heights = items.map((p) => p.h).filter(Boolean);
  const caps = items.map((p) => p.cap).filter(Boolean);
  return {
    count: items.length,
    cats,
    minH: Math.min(...heights), maxH: Math.max(...heights),
    minCap: Math.min(...caps), maxCap: Math.max(...caps),
    catCounts: cats.map((c) => ({ cat: c, n: items.filter((p) => p.cat === c).length })),
  };
}

// ---- 10 başlıklı marka içeriği (TR) ----
// Her başlık: { h, p:[p1,p2], ul?, table? }
export function brandSections(brand, lang, t) {
  const d = BRAND_DATA[brand] || {};
  const s = brandStats(brand);
  const country = lang === "en" ? (d.countryEn || d.country) : lang === "de" ? (d.countryDe || d.country) : d.country;
  const strength = lang === "en" ? (d.strengthEn || d.strength) : lang === "de" ? (d.strengthDe || d.strength) : d.strength;
  const catNames = s.catCounts.map((c) => `${t.cats[c.cat]} (${c.n})`);

  if (lang === "tr") return trSections(brand, d, s, country, strength, catNames, t);
  if (lang === "en") return enSections(brand, d, s, country, strength, catNames, t);
  return deSections(brand, d, s, country, strength, catNames, t);
}

function catTable(brand, s, t) {
  return {
    head: ["Kategori", "Model Sayısı"],
    rows: s.catCounts.map((c) => [t.cats[c.cat], String(c.n)]),
  };
}

function trSections(brand, d, s, country, strength, catNames, t) {
  return [
    { h: `${brand} Kimdir?`, p: [
      `${brand}, ${d.founded ? d.founded + " yılında kurulan ve " : ""}merkezi ${d.hq || country}'de bulunan, ${d.note || strength + " alanında uzmanlaşmış"} bir üreticidir. ${country} menşeli marka, ${strength} kategorilerinde geniş bir ürün yelpazesi sunar ve dünya genelinde binlerce sahada aktif olarak kullanılır. Express Vinç olarak ${brand} filomuzu bakımlı, kontrol raporları güncel ve sahaya çıkmaya hazır halde bulunduruyoruz.`,
      `Markanın güçlü olduğu ${d.series || strength} serileri, İstanbul ve çevresindeki inşaat, sanayi ve bakım projelerinin ihtiyaçlarına birebir yanıt verir. Filomuzdaki ${s.count} adet ${brand} modeli, ${s.minH}-${s.maxH} metre çalışma aralığını kapsayacak şekilde seçilmiştir; böylece küçük bir iç mekân işinden büyük ölçekli bir şantiyeye kadar her ihtiyaç için doğru makineyi tek markadan temin edebilirsiniz.`,
    ]},
    { h: `${brand} Ürün Gamı ve Kategoriler`, p: [
      `Express Vinç filosunda ${brand} markası ${s.cats.length} farklı kategoride toplam ${s.count} modelle temsil edilir: ${catNames.join(", ")}. Bu çeşitlilik, tek bir marka çatısı altında farklı iş tiplerini karşılamanızı sağlar; aynı güven ve servis standardıyla hem yükseğe hem de ağıra çözüm bulursunuz.`,
      `Her kategori, işin niteliğine göre farklı bir erişim veya kaldırma problemini çözer. Aşağıdaki tablo ${brand} modellerimizin kategori dağılımını gösterir; ihtiyacınıza en uygun sınıfı belirleyip ilgili ürünlerin detaylarına yukarıdaki listeden ulaşabilirsiniz.`,
    ], table: catTable(brand, s, t) },
    { h: `${brand} Kiralamanın Avantajları`, p: [
      `${brand} makinelerini satın almak yerine kiralamak, yüksek yatırım maliyetini ortadan kaldırır ve bakım, yedek parça, periyodik kontrol gibi tüm operasyonel yükleri Express Vinç'e devreder. Makine çalıştığı sürece ödeme yaparsınız; atıl kalan bir demirbaşın amortismanını sırtlanmazsınız. Bu model, özellikle proje bazlı çalışan firmalar ve dönemsel yoğunluk yaşayan işletmeler için nakit akışı açısından büyük avantaj sağlar.`,
      `Kiralık ${brand} makinelerimiz her teslimat öncesi teknik kontrolden geçer; olası bir arızada aynı gün ikame makine sahanıza ulaştırılır ve operasyonunuz durmaz. Ayrıca filo sürekli yenilendiği için ek yatırım yapmadan en güncel ${brand} teknolojisine erişirsiniz.`,
    ], ul: [
      "Yüksek satın alma maliyeti yerine öngörülebilir kira gideri",
      "Bakım, yedek parça ve periyodik kontrol tamamen bize ait",
      "Arızada aynı gün ikame makine garantisi",
      "İhtiyaca göre model ve kapasite değiştirme esnekliği",
      "Sigortalı operasyon ve belgeli teslimat",
    ]},
    { h: `${brand} Modelleri Hangi İşlerde Kullanılır?`, p: [
      `${brand} ${strength} modelleri; inşaat şantiyeleri, sanayi tesisleri, lojistik depoları, AVM ve otel bakımları, cephe ve tabela işleri ile ağır kaldırma operasyonları başta olmak üzere çok geniş bir kullanım alanına sahiptir. Doğru model seçimi işin yüksekliğine, taşınacak yüke ve çalışma ortamına (iç/dış mekân, zemin tipi) göre yapılır.`,
      `Express Vinç ekibi, ${brand} kapasite tablolarına hâkim uzmanlardan oluşur; işinizi tarif ettiğinizde filodan en uygun modeli önerir, gerekirse ücretsiz keşifle saha uygunluğunu yerinde doğrular. Böylece ne eksik kapasiteli bir makineyle riske girersiniz ne de gereğinden büyük bir makineye fazladan ödersiniz.`,
    ]},
    { h: `${brand} Teknolojisi ve Güvenlik`, p: [
      `${brand}, ürünlerinde güncel güvenlik ve verimlilik teknolojilerini standart olarak sunar: yük moment sınırlayıcıları (LMI), eğim sensörleri, otomatik denge sistemleri ve operatör dostu oransal kumandalar bunların başında gelir. Bu sistemler hem operasyon güvenliğini artırır hem de deneyimli olmayan operatörlerin bile makineyi güvenle kullanmasını sağlar.`,
      `Filomuzdaki tüm ${brand} makineleri, ilgili mevzuatın gerektirdiği periyodik kontrollerden geçirilir ve her teslimatta güncel kontrol raporuyla birlikte tesliim edilir. Operatörlü kiralama seçeneğimizde ise makineyi, ${brand} ekipmanlarında deneyimli MYK belgeli operatörlerimiz kullanır.`,
    ]},
    { h: `${brand} Kiralama Fiyatını Belirleyen Faktörler`, p: [
      `${brand} kiralama bedelini belirleyen başlıca değişkenler; makinenin kapasite/yükseklik sınıfı, kiralama süresi, güç tipi (elektrikli/dizel) ve teslimat mesafesidir. Genel kural olarak yükseklik ve kapasite arttıkça makine sınıfı ve dolayısıyla kira bedeli yükselir; kiralama süresi uzadıkça ise günlük birim maliyet belirgin şekilde düşer.`,
      `Express Vinç'te keşif ücretsizdir ve verdiğimiz fiyat sabittir; teslimatta sürpriz ek maliyet çıkmaz. İhtiyacınızı WhatsApp veya telefonla ilettiğinizde, ${brand} modelleri için dakikalar içinde net ve şeffaf bir teklif alırsınız.`,
    ], table: {
      head: ["Kiralama Süresi", "Birim Maliyet", "İdeal Kullanım"],
      rows: [
        ["Günlük", "Standart", "Tek seferlik işler"],
        ["Haftalık", "Daha avantajlı", "Orta ölçekli projeler"],
        ["Aylık", "En avantajlı", "Şantiye ve uzun dönem"],
      ],
    }},
    { h: `${brand} mı, Başka Marka mı?`, p: [
      `Yükseltici platform ve vinç pazarında ${brand} dışında da güçlü markalar bulunur; doğru seçim çoğu zaman markadan çok işin gereksinimlerine bağlıdır. ${brand}, ${d.note || strength + " alanındaki gücüyle"} özellikle ${d.series || strength} serilerinde öne çıkar ve bu segmentte fiyat/performans dengesi arayan firmalar için güçlü bir tercihtir.`,
      `Express Vinç filosunda ${brand} ile birlikte dünyanın önde gelen diğer markaları da bulunduğu için, size marka bağımsız ve tarafsız bir öneri sunabiliyoruz. Amacımız belirli bir markayı satmak değil, işinize en uygun makineyi bulmaktır; bu yüzden gerektiğinde farklı markaları da masaya koyar, artı ve eksileriyle karşılaştırırız.`,
    ]},
    { h: `${brand} Yedek Parça ve Servis Desteği`, p: [
      `Kiralık makinelerde bakım ve servis sorumluluğu tamamen Express Vinç'e aittir; ${brand} makinelerinin periyodik bakımlarını, yağ ve filtre değişimlerini, lastik ve fren kontrollerini biz üstleniriz. Sahada yaşanan bir arızada mobil servis ekibimiz müdahale eder, çözülemeyen durumda ikame makine aynı gün devreye girer.`,
      `${brand} markasının yaygın servis ağı ve yedek parça bulunabilirliği, uzun dönem kiralamalarda kesintisiz çalışmanın önemli bir güvencesidir. Bu sayede aylık ve yıllık kiralamalarda makine duruş süreleri minimumda tutulur, projeniz takvimine sadık kalır.`,
    ]},
    { h: `${brand} Kiralama Süreçleri`, p: [
      `${brand} kiralama süreci basittir: ihtiyacınızı (yükseklik, yük, çalışma ortamı, tarih) bize iletirsiniz; ekibimiz uygun modeli belirler ve net teklifi paylaşır. Anlaşma sonrası makine, planlanan gün ve saatte İstanbul içindeki adresinize teslim edilir; gerekirse gece veya hafta sonu teslimatı da yapılır.`,
      `Teslimatta makinenin kullanım eğitimi verilir ve güncel kontrol raporu tesliim edilir. İş bitiminde tek telefonla alım randevusu oluşturulur. Uzun dönem kiralamalarda periyodik bakımlar sahada yürütülür, siz yalnızca işinize odaklanırsınız.`,
    ]},
    { h: `Neden Express Vinç'ten ${brand} Kiralamalısınız?`, p: [
      `Express Vinç, İstanbul merkezli operasyonuyla ${brand} makinelerini sabit fiyat, sigortalı operasyon, ücretsiz keşif ve 7/24 teknik destek güvencesiyle kiralar. Filomuzdaki her ${brand} ünitesi bakımlı ve kontrollüdür; teslimat öncesi teknik kontrolden geçer.`,
      `${brand} ile birlikte ${Object.keys(BRAND_DATA).length - 1} farklı dünya markasını tek çatı altında sunmamız, size tek muhatapla geniş bir seçim özgürlüğü sağlar. İhtiyacınızı iletin; ${brand} modelleri arasından en uygununu birlikte belirleyelim, teklifinizi bugün alın.`,
    ]},
  ];
}

function enSections(brand, d, s, country, strength, catNames, t) {
  return [
    { h: `About ${brand}`, p: [
      `${brand} is a ${country}-based manufacturer${d.founded ? ", founded in " + d.founded + "," : ""} specialising in ${strength}. ${d.note ? "It is " + d.note + "." : ""} At Express Vinc we keep our ${brand} fleet fully serviced, with up-to-date inspection reports and ready for immediate dispatch across Istanbul.`,
      `Our ${s.count} ${brand} models cover a ${s.minH}-${s.maxH} m working range, so you can source the right machine for anything from a small indoor job to a large-scale site — all from a single trusted brand.`,
    ]},
    { h: `${brand} Product Range`, p: [
      `In the Express Vinc fleet, ${brand} is represented across ${s.cats.length} categories with ${s.count} models in total: ${catNames.join(", ")}.`,
      `The table below shows the category breakdown of our ${brand} models. Identify the class that fits your job and open the relevant products from the list above.`,
    ], table: catTable(brand, s, t) },
    { h: `Benefits of Renting ${brand}`, p: [
      `Renting ${brand} instead of buying removes the high capital outlay and transfers maintenance, spare parts and periodic inspection to Express Vinc. You pay only while the machine works.`,
      `Every rental ${brand} machine is technically checked before delivery; in case of a breakdown a replacement reaches your site the same day.`,
    ], ul: [
      "Predictable rental cost instead of high purchase price",
      "Maintenance, parts and inspection fully on us",
      "Same-day replacement guarantee",
      "Flexibility to change model and capacity",
      "Insured operation and certified delivery",
    ]},
    { h: `Why Express Vinc for ${brand}`, p: [
      `Express Vinc rents ${brand} machines with fixed pricing, insured operations, free site survey and 24/7 support from its Istanbul base.`,
      `Alongside ${brand} we offer other world-leading brands under one roof, giving you a brand-independent recommendation. Tell us your need and get your quote today.`,
    ]},
  ];
}

function deSections(brand, d, s, country, strength, catNames, t) {
  return [
    { h: `Über ${brand}`, p: [
      `${brand} ist ein Hersteller aus ${country}${d.founded ? ", gegründet " + d.founded + "," : ""}, spezialisiert auf ${strength}. ${d.note ? "Die Marke ist " + d.note + "." : ""} Bei Express Vinc halten wir unsere ${brand}-Flotte gewartet und mit aktuellen Prüfberichten bereit — für die sofortige Lieferung in ganz Istanbul.`,
      `Unsere ${s.count} ${brand}-Modelle decken einen Arbeitsbereich von ${s.minH}-${s.maxH} m ab, sodass Sie vom kleinen Inneneinsatz bis zur Großbaustelle die richtige Maschine aus einer Hand erhalten.`,
    ]},
    { h: `${brand} Produktpalette`, p: [
      `In der Express-Vinc-Flotte ist ${brand} in ${s.cats.length} Kategorien mit insgesamt ${s.count} Modellen vertreten: ${catNames.join(", ")}.`,
      `Die Tabelle zeigt die Kategorienaufteilung unserer ${brand}-Modelle. Wählen Sie die passende Klasse und öffnen Sie die Produkte aus der Liste oben.`,
    ], table: catTable(brand, s, t) },
    { h: `Vorteile der ${brand}-Miete`, p: [
      `Die Miete von ${brand} statt Kauf beseitigt hohe Investitionskosten und überträgt Wartung, Ersatzteile und Prüfung an Express Vinc. Sie zahlen nur, solange die Maschine arbeitet.`,
      `Jede Mietmaschine wird vor der Lieferung technisch geprüft; bei einer Störung erreicht ein Ersatzgerät Ihre Baustelle noch am selben Tag.`,
    ], ul: [
      "Planbare Mietkosten statt hohem Kaufpreis",
      "Wartung, Teile und Prüfung komplett bei uns",
      "Ersatzgerät-Garantie am selben Tag",
      "Flexibler Wechsel von Modell und Kapazität",
      "Versicherter Betrieb und zertifizierte Lieferung",
    ]},
    { h: `Warum Express Vinc für ${brand}`, p: [
      `Express Vinc vermietet ${brand}-Maschinen mit Festpreisen, versichertem Betrieb, kostenloser Besichtigung und 24/7-Support von Istanbul aus.`,
      `Neben ${brand} bieten wir weitere weltweit führende Marken unter einem Dach — für eine markenunabhängige Empfehlung. Nennen Sie uns Ihren Bedarf und erhalten Sie noch heute Ihr Angebot.`,
    ]},
  ];
}

// ---- 10 Sık Sorulan Soru (marka bazlı) ----
export function brandFaq(brand, lang, t) {
  const d = BRAND_DATA[brand] || {};
  const s = brandStats(brand);
  const country = lang === "en" ? (d.countryEn || d.country) : lang === "de" ? (d.countryDe || d.country) : d.country;
  const catList = s.catCounts.map((c) => t.cats[c.cat]).join(", ");
  const hRange = `${s.minH}-${s.maxH}`;

  if (lang === "en") return [
    { q: `Where is ${brand} from?`, a: `${brand} is a ${country}-based manufacturer${d.founded ? ", founded in " + d.founded : ""}, specialising in ${d.strengthEn || d.strength}.` },
    { q: `How many ${brand} models does Express Vinc have?`, a: `Our fleet includes ${s.count} ${brand} models across the following categories: ${catList}.` },
    { q: `Can I rent ${brand} daily?`, a: `Yes. We offer ${brand} on daily, weekly and monthly terms, with the unit cost dropping as the rental period grows.` },
    { q: `Do you deliver ${brand} across Istanbul?`, a: `Yes, we deliver ${brand} machines to both the European and Anatolian sides of Istanbul, including night and weekend deliveries when needed.` },
    { q: `Is an operator included?`, a: `You can rent ${brand} with or without an operator. Our operators are certified and experienced on ${brand} equipment.` },
    { q: `What working heights are available?`, a: `Our ${brand} models cover a ${hRange} m working range.` },
    { q: `Is maintenance included?`, a: `Yes. On rental ${brand} machines all maintenance, spare parts and periodic inspections are handled by Express Vinc.` },
    { q: `What happens if the machine breaks down?`, a: `Our mobile service team responds on site; if the issue cannot be solved, a replacement ${brand} machine reaches you the same day.` },
    { q: `How do I get a quote?`, a: `Send your requirement via WhatsApp or phone; we recommend the right ${brand} model and share a fixed, transparent quote within minutes.` },
    { q: `Do you offer other brands too?`, a: `Yes. Alongside ${brand} we carry other leading brands, so we can give you a brand-independent recommendation.` },
  ];
  if (lang === "de") return [
    { q: `Woher kommt ${brand}?`, a: `${brand} ist ein Hersteller aus ${country}${d.founded ? ", gegründet " + d.founded : ""}, spezialisiert auf ${d.strengthDe || d.strength}.` },
    { q: `Wie viele ${brand}-Modelle hat Express Vinc?`, a: `Unsere Flotte umfasst ${s.count} ${brand}-Modelle in folgenden Kategorien: ${catList}.` },
    { q: `Kann ich ${brand} tageweise mieten?`, a: `Ja. Wir bieten ${brand} zu Tages-, Wochen- und Monatskonditionen; der Stückpreis sinkt mit längerer Mietdauer.` },
    { q: `Liefern Sie ${brand} in ganz Istanbul?`, a: `Ja, wir liefern ${brand}-Maschinen auf beide Seiten Istanbuls, bei Bedarf auch nachts und am Wochenende.` },
    { q: `Ist ein Bediener inbegriffen?`, a: `Sie können ${brand} mit oder ohne Bediener mieten. Unsere Bediener sind zertifiziert und auf ${brand} erfahren.` },
    { q: `Welche Arbeitshöhen gibt es?`, a: `Unsere ${brand}-Modelle decken einen Arbeitsbereich von ${hRange} m ab.` },
    { q: `Ist die Wartung inbegriffen?`, a: `Ja. Bei Mietmaschinen übernehmen wir Wartung, Ersatzteile und Prüfungen.` },
    { q: `Was passiert bei einer Störung?`, a: `Unser mobiler Service reagiert vor Ort; ist das Problem nicht lösbar, erhalten Sie am selben Tag eine Ersatzmaschine.` },
    { q: `Wie bekomme ich ein Angebot?`, a: `Senden Sie Ihren Bedarf per WhatsApp oder Telefon; wir empfehlen das passende ${brand}-Modell und nennen einen Festpreis.` },
    { q: `Bieten Sie auch andere Marken an?`, a: `Ja. Neben ${brand} führen wir weitere führende Marken für eine markenunabhängige Empfehlung.` },
  ];
  // TR (varsayılan)
  return [
    { q: `${brand} hangi ülkenin markası?`, a: `${brand}, ${country} menşeli${d.founded ? ", " + d.founded + " yılında kurulan" : ""} bir üreticidir ve ${d.strength} alanında uzmanlaşmıştır.` },
    { q: `Express Vinç'te kaç ${brand} modeli var?`, a: `Filomuzda ${s.count} adet ${brand} modeli bulunur ve şu kategorileri kapsar: ${catList}.` },
    { q: `${brand} günlük kiralanabilir mi?`, a: `Evet. ${brand} makinelerini günlük, haftalık ve aylık kiralayabilirsiniz; kiralama süresi uzadıkça günlük birim maliyet düşer.` },
    { q: `${brand} İstanbul'un her yerine teslim ediliyor mu?`, a: `Evet, ${brand} makinelerini İstanbul'un Avrupa ve Anadolu yakasındaki tüm ilçelere teslim ediyoruz; gerektiğinde gece ve hafta sonu teslimatı da yapıyoruz.` },
    { q: `${brand} kiralamada operatör dahil mi?`, a: `${brand} makinelerini operatörlü veya operatörsüz kiralayabilirsiniz. Operatörlerimiz MYK belgeli ve ${brand} ekipmanlarında deneyimlidir.` },
    { q: `${brand} modellerinin çalışma yüksekliği nedir?`, a: `Filomuzdaki ${brand} modelleri ${hRange} metre çalışma aralığını kapsar.` },
    { q: `${brand} kiralamada bakım dahil mi?`, a: `Evet. Kiralık ${brand} makinelerinde tüm bakım, yedek parça ve periyodik kontroller Express Vinç tarafından karşılanır.` },
    { q: `Makine arızalanırsa ne oluyor?`, a: `Mobil servis ekibimiz sahada müdahale eder; sorun çözülemezse ikame ${brand} makinesi aynı gün size ulaştırılır.` },
    { q: `${brand} için nasıl teklif alırım?`, a: `İhtiyacınızı WhatsApp veya telefonla iletin; uygun ${brand} modelini önerip dakikalar içinde sabit ve şeffaf bir teklif paylaşıyoruz.` },
    { q: `Sadece ${brand} mi var, başka marka da var mı?`, a: `${brand} ile birlikte dünyanın önde gelen diğer markalarını da sunuyoruz; böylece size marka bağımsız, tarafsız bir öneri yapabiliyoruz.` },
  ];
}
