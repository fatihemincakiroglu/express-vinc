// Blog yazılarını 10 başlıklı zengin içeriğe genişleten üretici.
// Yazının mevcut kısa içeriği (post[lang].content) korunur; üzerine konu-bazlı
// (kategori/marka) başlıklar + paragraflar + tablo + liste eklenir.
import { BLOG_LINKS } from "./blog-links";

// Kategori adları (i18n'den t.cats geçilecek). Kategori indeksleri:
// 0 Akülü Makaslı, 1 Dizel Makaslı, 2 Dikey, 3 Eklemli, 4 Örümcek Platform,
// 5 Örümcek Vinç, 6 Araç Üstü, 7 Forklift, 8 Mobil Vinç

// Bir yazı için 10 başlıklı içerik döndürür (mevcut içerik + üretilen ek başlıklar).
export function blogFullContent(post, lang, t) {
  const base = post[lang].content || [];
  const slug = post.slugs.tr;
  const links = BLOG_LINKS[slug] || {};
  const cats = links.cats || [];
  const brands = links.brands || [];
  const catNames = cats.map((c) => t.cats[c]);
  const primaryCat = cats.length ? t.cats[cats[0]] : (lang === "en" ? "equipment" : lang === "de" ? "Geräte" : "ekipman");

  // Mevcut başlık sayısı
  const baseHeadings = base.filter((b) => b.h).length;
  const need = Math.max(0, 10 - baseHeadings);

  const extra = lang === "en"
    ? enBlocks(primaryCat, catNames, brands, t)
    : lang === "de"
    ? deBlocks(primaryCat, catNames, brands, t)
    : trBlocks(primaryCat, catNames, brands, t);

  // İlk 'need' kadar ek başlık bloğunu al (her blok: h + p'ler + opsiyonel ul/table)
  const added = [];
  let count = 0;
  for (const blk of extra) {
    if (count >= need) break;
    added.push(...blk);
    count++;
  }
  return [...base, ...added];
}

// --- TR blok kütüphanesi: her eleman bir başlık bloğu (dizi: [h, p, p, (ul|table)]) ---
function trBlocks(cat, catNames, brands, t) {
  const catLabel = catNames.length ? catNames.join(", ") : cat;
  const brandLine = brands.length
    ? `Filomuzda bu kategoride ${brands.join(", ")} gibi dünyanın önde gelen markalarının modelleri bulunur.`
    : `Filomuzda bu kategoride bakımlı ve belgeli çok sayıda model bulunur.`;
  return [
    [
      { h: `${cat} Kiralamada Doğru Model Seçimi` },
      { p: `Doğru ${cat.toLowerCase()} seçimi, işin yüksekliğine, taşınacak yüke ve çalışma ortamına göre değişir. Yanlış seçilen bir makine hem güvenlik riski yaratır hem de gereksiz maliyet doğurur; bu yüzden kiralama öncesinde ihtiyacınızı net olarak belirlemek kritik önemdedir. Express Vinç olarak keşif aşamasında sahayı yerinde değerlendirir, en uygun modeli birlikte belirleriz.` },
      { p: `${brandLine} Model seçiminde çalışma yüksekliği, platform kapasitesi, güç tipi (elektrikli/dizel) ve zemin koşulları birlikte değerlendirilir. Böylece ne eksik kapasiteli bir makineyle riske girersiniz ne de gereğinden büyük bir makineye fazladan ödeme yaparsınız.` },
    ],
    [
      { h: `Elektrikli mi, Dizel mi Tercih Etmeli?` },
      { p: `Kapalı ve zemini düzgün alanlarda (AVM, depo, fabrika içi) elektrikli/akülü modeller sessiz ve emisyonsuz çalışır; bu da onları iç mekân işleri için ideal kılar. Açık arazide, bozuk zeminde ve yüksek kapasite gereken işlerde ise dizel modeller tercih edilir çünkü daha fazla güç ve menzil sunarlar.` },
      { p: `İki tip arasındaki seçim, işin yapılacağı ortama ve süreye bağlıdır. Emisyonun sorun olduğu kapalı alanlarda dizel makine kullanmak hem sağlık hem mevzuat açısından uygun değildir; bu gibi durumlarda çift enerjili (hibrit) modeller de bir alternatif olarak değerlendirilebilir.` },
    ],
    [
      { h: `Çalışma Yüksekliğini Doğru Hesaplamak` },
      { p: `Platform veya vinç seçerken ulaşmak istediğiniz nokta değil, çalışma yüksekliği esas alınır. Genel kural olarak platform taban yüksekliğine yaklaşık 2 metre insan erişimi eklenir; yani 8 metre çalışma yüksekliği olan bir makinede operatör yaklaşık 6 metredeki platformdan çalışır. Bu hesabı doğru yapmak, sahada makinenin yetersiz kalmasını önler.` },
      { p: `Kiralamadan önce ulaşılacak en yüksek noktayı, engelleri ve varsa yatay erişim ihtiyacını bizimle paylaşın. Ekibimiz bu bilgilerle kapasite tablolarından en uygun modeli belirler ve gerekirse ücretsiz keşifle sahada doğrular.` },
      { table: {
        head: ["Çalışma Yüksekliği", "Tipik Kullanım", "Önerilen Sınıf"],
        rows: [
          ["6-10 m", "İç mekân bakım, depo", "Dikey / Akülü makaslı"],
          ["10-16 m", "Cephe, tabela, orta şantiye", "Makaslı / Eklemli"],
          ["16-30 m", "Yüksek cephe, çelik montaj", "Eklemli / Teleskopik bom"],
          ["30 m ve üzeri", "Yüksek kat, endüstriyel", "Teleskopik bom / Mobil vinç"],
        ],
      } },
    ],
    [
      { h: `${cat} Kiralamanın Avantajları` },
      { p: `${cat} satın almak yerine kiralamak, yüksek yatırım maliyetini ortadan kaldırır ve bakım, yedek parça, periyodik kontrol gibi tüm operasyonel yükleri kiralama firmasına devreder. Makine çalıştığı sürece ödeme yaparsınız; atıl kalan bir demirbaşın amortismanını sırtlanmazsınız.` },
      { p: `Bu model, özellikle proje bazlı çalışan firmalar ve dönemsel yoğunluk yaşayan işletmeler için nakit akışı açısından büyük avantaj sağlar. Ayrıca filo sürekli yenilendiği için ek yatırım yapmadan en güncel teknolojiye erişirsiniz.` },
      { ul: [
        "Yüksek satın alma maliyeti yerine öngörülebilir kira gideri",
        "Bakım, yedek parça ve periyodik kontrol tamamen kiralayana ait",
        "Arıza durumunda aynı gün ikame makine",
        "İhtiyaca göre model ve kapasite değiştirme esnekliği",
        "Sigortalı operasyon ve belgeli teslimat",
      ] },
    ],
    [
      { h: `İş Güvenliği ve Yasal Gereklilikler` },
      { p: `Yüksekte çalışma, iş kazalarının en sık yaşandığı alanlardan biridir; bu yüzden ${cat.toLowerCase()} kullanımında iş güvenliği kurallarına uymak hayati önemdedir. Operatörün kişisel koruyucu donanım kullanması, makinenin periyodik kontrolden geçmiş olması ve zeminin uygunluğu temel gerekliliklerdir.` },
      { p: `Türkiye'de belirli platform ve vinç sınıflarını kullanmak için operatör belgesi (MYK/operatör yetki belgesi) gerekir. Express Vinç operatörlü kiralama seçeneğinde makineyi belgeli ve deneyimli operatörlerimiz kullanır; operatörsüz kiralamada ise makinenin güvenli kullanımına dair bilgilendirme teslimat sırasında yapılır.` },
    ],
    [
      { h: `Kiralama Fiyatını Belirleyen Faktörler` },
      { p: `${cat} kiralama bedelini belirleyen başlıca değişkenler; makinenin kapasite/yükseklik sınıfı, kiralama süresi, güç tipi ve teslimat mesafesidir. Genel kural olarak yükseklik ve kapasite arttıkça makine sınıfı ve dolayısıyla kira bedeli yükselir.` },
      { p: `Kiralama süresi uzadıkça günlük birim maliyet belirgin şekilde düşer; bu nedenle uzun süreli işlerde aylık kiralama en ekonomik seçenektir. Express Vinç'te keşif ücretsizdir ve verilen fiyat sabittir; teslimatta sürpriz ek maliyet çıkmaz.` },
      { table: {
        head: ["Kiralama Süresi", "Birim Maliyet", "İdeal Kullanım"],
        rows: [
          ["Günlük", "Standart", "Tek seferlik işler"],
          ["Haftalık", "Daha avantajlı", "Orta ölçekli projeler"],
          ["Aylık", "En avantajlı", "Şantiye ve uzun dönem"],
        ],
      } },
    ],
    [
      { h: `Sahaya Uygun Zemin ve Ortam Koşulları` },
      { p: `Bir makinenin sahada güvenle çalışabilmesi için zeminin makinenin ağırlığını taşıyabilmesi ve mümkün olduğunca düz olması gerekir. Bozuk, eğimli veya yumuşak zeminlerde arazi tipi (RT/4x4) modeller tercih edilir; düz beton zeminlerde ise standart modeller yeterlidir.` },
      { p: `Çalışma ortamının iç mekân mı dış mekân mı olduğu, tavan yüksekliği, kapı genişliği ve manevra alanı da model seçimini doğrudan etkiler. Bu detayları kiralama öncesinde paylaşmanız, sahaya çıkan makinenin işe birebir uygun olmasını sağlar.` },
    ],
    [
      { h: `Kiralama Süreci Nasıl İşliyor?` },
      { p: `Kiralama süreci basittir: ihtiyacınızı (yükseklik, yük, çalışma ortamı, tarih) bize iletirsiniz; ekibimiz uygun modeli belirler ve net teklifi paylaşır. Anlaşma sonrası makine, planlanan gün ve saatte İstanbul içindeki adresinize teslim edilir.` },
      { p: `Teslimatta makinenin kullanım bilgilendirmesi yapılır ve güncel kontrol raporu verilir. İş bitiminde tek telefonla alım randevusu oluşturulur; uzun dönem kiralamalarda periyodik bakımlar sahada yürütülür, siz yalnızca işinize odaklanırsınız.` },
    ],
    [
      { h: `Sık Yapılan Hatalar ve Kaçınma Yolları` },
      { p: `Kiralamada en sık yapılan hata, çalışma yüksekliğinin yanlış hesaplanması ve makinenin sahada yetersiz kalmasıdır. Bir diğer yaygın hata, zemin koşulları göz ardı edilerek yanlış tekerlek/tahrik tipinin seçilmesidir; bu durum hem işi aksatır hem güvenlik riski yaratır.` },
      { p: `Bu hatalardan kaçınmanın en iyi yolu, kiralama öncesinde ücretsiz keşif hizmetinden yararlanmaktır. Deneyimli ekibimiz sahayı değerlendirir, olası sorunları önceden tespit eder ve işinize tam uyan makineyi önerir; böylece iş günü kaybı yaşanmaz.` },
    ],
    [
      { h: `Neden Express Vinç?` },
      { p: `Express Vinç, İstanbul merkezli operasyonuyla ${catLabel} kategorisindeki makineleri sabit fiyat, sigortalı operasyon, ücretsiz keşif ve 7/24 teknik destek güvencesiyle kiralar. Filomuzdaki her makine bakımlı ve kontrollüdür; teslimat öncesi teknik kontrolden geçer.` },
      { p: `Tek çatı altında dünyanın önde gelen markalarını sunmamız, size marka bağımsız ve tarafsız bir öneri sağlar. İhtiyacınızı WhatsApp veya telefonla iletin; en uygun modeli birlikte belirleyelim, teklifinizi bugün alın.` },
    ],
  ];
}

function enBlocks(cat, catNames, brands, t) {
  return [
    [
      { h: `Choosing the Right ${cat}` },
      { p: `The right choice depends on working height, load and the work environment. A wrong machine creates both safety risks and unnecessary cost, so defining your need before renting is critical. Our team evaluates the site during a free survey and helps you pick the best model.` },
      { p: `Working height, platform capacity, power type and ground conditions are assessed together. This way you neither risk an under-capacity machine nor overpay for an oversized one.` },
    ],
    [
      { h: `Electric or Diesel?` },
      { p: `On smooth indoor floors (malls, warehouses, factories) electric models run silently with zero emissions. For outdoor terrain and higher capacities, diesel models offer more power and range.` },
      { p: `The choice depends on the environment and duration. Where emissions are an issue, diesel is unsuitable and hybrid models can be an alternative.` },
    ],
    [
      { h: `Calculating Working Height` },
      { p: `What matters is working height, not just the point you want to reach: add roughly 2 m of human reach to the platform height.` },
      { p: `Before renting, share the highest point, obstacles and any horizontal reach need so we can match the right model.` },
    ],
    [
      { h: `Why Rent Instead of Buy?` },
      { p: `Renting removes the high capital outlay and transfers maintenance, spare parts and inspection to the rental company. You pay only while the machine works.` },
      { p: `This is a major cash-flow advantage for project-based and seasonal businesses, with access to the latest technology.` },
      { ul: [
        "Predictable rental cost instead of high purchase price",
        "Maintenance, parts and inspection on the rental company",
        "Same-day replacement in case of breakdown",
        "Flexibility to change model and capacity",
      ] },
    ],
    [
      { h: `Why Express Vinc?` },
      { p: `Express Vinc rents these machines with fixed pricing, insured operation, free survey and 24/7 support from Istanbul.` },
      { p: `We offer leading world brands under one roof for a brand-independent recommendation. Get your quote today.` },
    ],
  ];
}

function deBlocks(cat, catNames, brands, t) {
  return [
    [
      { h: `Die richtige Maschine wählen` },
      { p: `Die richtige Wahl hängt von Arbeitshöhe, Last und Einsatzumgebung ab. Eine falsche Maschine schafft Sicherheitsrisiken und unnötige Kosten. Unser Team bewertet die Baustelle bei einer kostenlosen Besichtigung.` },
      { p: `Arbeitshöhe, Plattformkapazität, Antriebsart und Bodenverhältnisse werden gemeinsam bewertet — so vermeiden Sie Unter- und Überdimensionierung.` },
    ],
    [
      { h: `Elektrisch oder Diesel?` },
      { p: `Auf glatten Innenböden arbeiten Elektromodelle leise und emissionsfrei. Im Außenbereich und bei höheren Kapazitäten bieten Dieselmodelle mehr Leistung.` },
      { p: `Die Wahl hängt von Umgebung und Dauer ab. Wo Emissionen ein Problem sind, sind Hybridmodelle eine Alternative.` },
    ],
    [
      { h: `Arbeitshöhe richtig berechnen` },
      { p: `Entscheidend ist die Arbeitshöhe, nicht nur der Zielpunkt: rechnen Sie etwa 2 m menschliche Reichweite zur Plattformhöhe hinzu.` },
      { p: `Teilen Sie vor der Miete den höchsten Punkt und Hindernisse mit, damit wir das passende Modell finden.` },
    ],
    [
      { h: `Warum mieten statt kaufen?` },
      { p: `Die Miete beseitigt hohe Investitionskosten und überträgt Wartung, Teile und Prüfung an den Vermieter. Sie zahlen nur während des Einsatzes.` },
      { p: `Das ist ein großer Liquiditätsvorteil für projektbasierte und saisonale Betriebe.` },
      { ul: [
        "Planbare Mietkosten statt hohem Kaufpreis",
        "Wartung, Teile und Prüfung beim Vermieter",
        "Ersatzgerät am selben Tag bei Störung",
        "Flexibler Wechsel von Modell und Kapazität",
      ] },
    ],
    [
      { h: `Warum Express Vinc?` },
      { p: `Express Vinc vermietet diese Maschinen mit Festpreisen, versichertem Betrieb, kostenloser Besichtigung und 24/7-Support aus Istanbul.` },
      { p: `Wir bieten führende Weltmarken unter einem Dach. Fordern Sie noch heute Ihr Angebot an.` },
    ],
  ];
}
