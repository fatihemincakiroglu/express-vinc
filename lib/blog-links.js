// Blog yazılarını ilgili kategori, marka ve diğer yazılara bağlayan eşleştirme.
// Anahtar: yazının TR slug'ı.
//  cats: ilgili kategori indeksleri (cat0..cat8) — ürün/kategori sayfalarına link + ürün listeleme
//  brands: ilgili marka adları — marka sayfalarına link
//  related: anahtar kelimeyle link verilecek diğer yazıların TR slug'ları
//           [{ slug, kw: { tr, en, de } }] — kw, metinde geçen ve linklenecek anahtar kelime
export const BLOG_LINKS = {
  "orumcek-vinc-nedir": {
    cats: [5], brands: ["Jekko"],
    related: [
      { slug: "eklemli-mi-makasli-mi", kw: { tr: "eklemli platform", en: "boom lift", de: "Gelenkbühne" } },
      { slug: "vincle-esya-tasima-rehberi", kw: { tr: "vinçle eşya taşıma", en: "lifting goods by crane", de: "Möbeltransport per Kran" } },
    ],
  },
  "makasli-platform-kiralama-rehberi": {
    cats: [0, 1], brands: ["Genie", "JLG", "Haulotte"],
    related: [
      { slug: "eklemli-mi-makasli-mi", kw: { tr: "eklemli platform", en: "boom vs scissor lift", de: "Gelenk- oder Scherenbühne" } },
      { slug: "makasli-platform-icin-belge-gerekir-mi", kw: { tr: "operatör belgesi", en: "operator certificate", de: "Bedienerausweis" } },
      { slug: "avm-projelerinde-akulu-platform", kw: { tr: "akülü platform", en: "electric platform", de: "Elektro-Arbeitsbühne" } },
    ],
  },
  "vinc-operasyonlarinda-is-guvenligi": {
    cats: [5, 8], brands: ["Liebherr", "Zoomlion"],
    related: [
      { slug: "yuksekte-calismada-kisisel-koruyucu-donanim", kw: { tr: "kişisel koruyucu donanım", en: "personal protective equipment", de: "persönliche Schutzausrüstung" } },
      { slug: "makasli-platform-icin-belge-gerekir-mi", kw: { tr: "operatör belgesi", en: "operator certificate", de: "Bedienerausweis" } },
    ],
  },
  "arac-ustu-platform-avantajlari": {
    cats: [6], brands: [],
    related: [
      { slug: "tabela-montajinda-arac-ustu-platform-secimi", kw: { tr: "tabela montajı", en: "signage installation", de: "Schildermontage" } },
      { slug: "manlift-kiralama-fiyatini-etkileyen-faktorler", kw: { tr: "kiralama fiyatı", en: "rental price", de: "Mietpreis" } },
    ],
  },
  "makasli-platform-icin-belge-gerekir-mi": {
    cats: [0, 1], brands: [],
    related: [
      { slug: "makasli-platform-kiralama-rehberi", kw: { tr: "makaslı platform", en: "scissor lift rental", de: "Scherenbühne mieten" } },
      { slug: "yuksekte-calismada-kisisel-koruyucu-donanim", kw: { tr: "yüksekte çalışma", en: "working at height", de: "Höhenarbeit" } },
    ],
  },
  "manlift-kiralama-fiyatini-etkileyen-faktorler": {
    cats: [3], brands: ["JLG", "Genie", "Haulotte"],
    related: [
      { slug: "eklemli-mi-makasli-mi", kw: { tr: "eklemli platform", en: "boom lift", de: "Gelenkbühne" } },
      { slug: "makasli-platform-kiralama-rehberi", kw: { tr: "makaslı platform", en: "scissor lift", de: "Scherenbühne" } },
    ],
  },
  "eklemli-mi-makasli-mi": {
    cats: [0, 3], brands: ["JLG", "Genie", "Haulotte", "Dingli"],
    related: [
      { slug: "makasli-platform-kiralama-rehberi", kw: { tr: "makaslı platform", en: "scissor lift rental", de: "Scherenbühne mieten" } },
      { slug: "manlift-kiralama-fiyatini-etkileyen-faktorler", kw: { tr: "eklemli", en: "boom lift rental price", de: "Gelenkbühnen-Mietpreis" } },
      { slug: "santiyede-4x4-arazi-tipi-platform-avantajlari", kw: { tr: "4x4", en: "4x4 rough terrain platform", de: "4x4-Geländebühne" } },
    ],
  },
  "vincle-esya-tasima-rehberi": {
    cats: [5, 6], brands: ["Jekko"],
    related: [
      { slug: "orumcek-vinc-nedir", kw: { tr: "örümcek vinç", en: "spider crane", de: "Minikran" } },
      { slug: "arac-ustu-platform-avantajlari", kw: { tr: "araç üstü platform", en: "truck-mounted platform", de: "LKW-Bühne" } },
    ],
  },
  "forklift-kiralarken-dikkat-edilecekler": {
    cats: [7], brands: ["Zoomlion", "JLG", "VMAX"],
    related: [
      { slug: "makasli-platform-kiralama-rehberi", kw: { tr: "platform kiralama", en: "platform rental", de: "Bühnenmiete" } },
    ],
  },
  "yuksekte-calismada-kisisel-koruyucu-donanim": {
    cats: [0, 3], brands: [],
    related: [
      { slug: "vinc-operasyonlarinda-is-guvenligi", kw: { tr: "vinç operasyonlarında iş güvenliği", en: "crane operation safety", de: "Sicherheit bei Kranarbeiten" } },
      { slug: "makasli-platform-icin-belge-gerekir-mi", kw: { tr: "operatör belgesi", en: "operator certificate", de: "Bedienerausweis" } },
    ],
  },
  "kis-aylarinda-vinc-ve-platform-operasyonlari": {
    cats: [1, 8], brands: ["Liebherr", "Zoomlion"],
    related: [
      { slug: "vinc-operasyonlarinda-is-guvenligi", kw: { tr: "iş güvenliği", en: "work safety", de: "Arbeitssicherheit" } },
      { slug: "santiyede-4x4-arazi-tipi-platform-avantajlari", kw: { tr: "arazi tipi", en: "rough terrain platform", de: "Geländebühne" } },
    ],
  },
  "avm-projelerinde-akulu-platform": {
    cats: [0, 2], brands: ["Genie", "JLG", "Haulotte", "Dingli"],
    related: [
      { slug: "makasli-platform-kiralama-rehberi", kw: { tr: "makaslı platform", en: "scissor lift rental", de: "Scherenbühne mieten" } },
      { slug: "eklemli-mi-makasli-mi", kw: { tr: "eklemli platform", en: "boom lift", de: "Gelenkbühne" } },
    ],
  },
  "tabela-montajinda-arac-ustu-platform-secimi": {
    cats: [6], brands: [],
    related: [
      { slug: "arac-ustu-platform-avantajlari", kw: { tr: "araç üstü", en: "truck-mounted platform advantages", de: "Vorteile der LKW-Bühne" } },
      { slug: "manlift-kiralama-fiyatini-etkileyen-faktorler", kw: { tr: "kiralama fiyatı", en: "rental price", de: "Mietpreis" } },
    ],
  },
  "santiyede-4x4-arazi-tipi-platform-avantajlari": {
    cats: [1, 3], brands: ["Genie", "JLG", "Haulotte", "Dingli"],
    related: [
      { slug: "kis-aylarinda-vinc-ve-platform-operasyonlari", kw: { tr: "kış", en: "winter platform operations", de: "Bühnenbetrieb im Winter" } },
      { slug: "eklemli-mi-makasli-mi", kw: { tr: "eklemli mi makaslı mı", en: "boom or scissor", de: "Gelenk oder Schere" } },
    ],
  },
};
