// ============================================
// ÜRÜN KATALOĞU — makine eklemek/çıkarmak için bu listeyi düzenleyin
// cat: kategori indeksi (0-7, T[lang].cats sırası)
// h: çalışma yüksekliği (m) · cap: kapasite (kg) · power: 0 Dizel, 1 Akülü, 2 Çift Enerjili
// ============================================
export const PRODUCTS = [
  // 0 — Akülü Makaslı Platformlar
  { cat: 0, model: "Zoomlion ZS0607HD-Li", h: 8,  cap: 230, power: 1 },
  { cat: 0, model: "Zoomlion ZS0808HD-Li", h: 10, cap: 230, power: 1 },
  { cat: 0, model: "Zoomlion ZS1012HD-Li", h: 12, cap: 320, power: 1 },
  { cat: 0, model: "Zoomlion ZS1414HD-Li", h: 16, cap: 320, power: 1 },
  { cat: 0, model: "JCPT0807HA", h: 8, cap: 230, power: 1 },

  // 1 — Dizel Makaslı Platformlar
  { cat: 1, model: "4x4 Dizel Makaslı 12 m", h: 12, cap: 560, power: 0 },
  { cat: 1, model: "4x4 Dizel Makaslı 15 m", h: 15, cap: 680, power: 0 },
  { cat: 1, model: "Zoomlion ZS1623RT 4x4", h: 18, cap: 680, power: 0 },
  { cat: 1, model: "4x4 Dizel Makaslı 22 m", h: 22, cap: 680, power: 0 },

  // 2 — Dikey Platformlar
  { cat: 2, model: "Dikey Platform 8 m",  h: 8,  cap: 200, power: 1 },
  { cat: 2, model: "Dikey Platform 10 m", h: 10, cap: 200, power: 1 },
  { cat: 2, model: "Dikey Platform 12 m", h: 12, cap: 200, power: 1 },

  // 3 — Eklemli Platformlar
  { cat: 3, model: "JLG M450AJ", h: 16, cap: 230, power: 1 },
  { cat: 3, model: "Genie Z-45/25J DC", h: 16, cap: 227, power: 1 },
  { cat: 3, model: "Eklemli Platform 20 m 4x4", h: 20, cap: 230, power: 0 },
  { cat: 3, model: "Haulotte HA26 RTJ PRO", h: 26, cap: 230, power: 0 },

  // 4 — Örümcek Platformlar
  { cat: 4, model: "Örümcek Platform 15 m", h: 15, cap: 200, power: 2 },
  { cat: 4, model: "Örümcek Platform 20 m", h: 20, cap: 200, power: 2 },
  { cat: 4, model: "Örümcek Platform 25 m", h: 25, cap: 230, power: 2 },
  { cat: 4, model: "Örümcek Platform 30 m", h: 30, cap: 230, power: 2 },

  // 5 — Örümcek Vinçler
  { cat: 5, model: "Jekko SPX532", h: 9, cap: 3200, power: 2 },
  { cat: 5, model: "Örümcek Vinç 5 t", h: 15, cap: 5000, power: 2 },
  { cat: 5, model: "Örümcek Vinç 8 t", h: 20, cap: 8000, power: 0 },

  // 6 — Araç Üstü Platformlar
  { cat: 6, model: "Araç Üstü Platform 21 m", h: 21, cap: 200, power: 0 },
  { cat: 6, model: "Araç Üstü Platform 28 m", h: 28, cap: 200, power: 0 },
  { cat: 6, model: "Araç Üstü Platform 36 m", h: 36, cap: 200, power: 0 },
  { cat: 6, model: "Araç Üstü Platform 45 m", h: 45, cap: 200, power: 0 },

  // 7 — Kiralık Forkliftler
  { cat: 7, model: "VMAX CPCD30 4x4", h: 4.5, cap: 3000, power: 0 },
  { cat: 7, model: "Dizel Forklift 5 t", h: 4.5, cap: 5000, power: 0 },
  { cat: 7, model: "Akülü Forklift 2 t", h: 4.5, cap: 2000, power: 1 },
];

// Model adından URL dostu slug üret (tüm dillerde ortak)
const slugify = (m) =>
  m.toLocaleLowerCase("tr")
    .replace(/ı/g, "i").replace(/ş/g, "s").replace(/ç/g, "c")
    .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ö/g, "o")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

for (const p of PRODUCTS) p.slug = slugify(p.model);

// Kategori temsili görselleri (kendi saha fotoğraflarınız).
// Bir ürüne özel fotoğraf eklemek için ürün satırına  img: "/gallery/xx.jpg"  ekleyin.
export const CAT_IMAGES = [
  "/gallery/g10.jpg", // Akülü Makaslı
  "/gallery/g8.jpg",  // Dizel Makaslı
  "/gallery/g1.jpg",  // Dikey
  "/gallery/g6.jpg",  // Eklemli
  "/gallery/g3.jpg",  // Örümcek Platform
  "/gallery/g9.jpg",  // Örümcek Vinç
  "/gallery/g12.jpg", // Araç Üstü
  "/gallery/g7.jpg",  // Forklift
];
export const productImage = (p) => p.img || CAT_IMAGES[p.cat];

export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);

// Benzer ürünler: önce aynı kategori, sonra aynı grup içinde yüksekliği en yakın olanlar
export function similarProducts(product, count = 4) {
  const group = [5, 7].includes(product.cat) ? [5, 7] : [0, 1, 2, 3, 4, 6];
  const pool = PRODUCTS.filter((p) => p.slug !== product.slug && group.includes(p.cat));
  const score = (p) =>
    (p.cat === product.cat ? 0 : 100) + Math.abs(p.h - product.h);
  return pool.sort((a, b) => score(a) - score(b)).slice(0, count);
}

export const capText = (cap) => (cap >= 1000 ? `${cap / 1000} t` : `${cap} kg`);

// Asistan eşleştirme: taşınacak (0 insan / 1 malzeme), güç (0/1/2), hedef yükseklik
export function matchProducts(carry, power, height) {
  const cats = carry === 1 ? [5, 7] : [0, 1, 2, 3, 4, 6];
  const powerOk = (p) => (power === 2 ? p.power === 2 : p.power === power || p.power === 2);
  let pool = PRODUCTS.filter((p) => cats.includes(p.cat) && powerOk(p));
  let fit = pool.filter((p) => p.h >= height);
  if (fit.length === 0) fit = pool; // hiçbiri yetmiyorsa en yükseklerini göster
  return fit.sort((a, b) => a.h - b.h).slice(0, 4);
}
