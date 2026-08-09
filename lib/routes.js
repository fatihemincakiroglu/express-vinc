import { POSTS } from "./blog";
import { prefix } from "./site";

// Her sayfanın dile göre URL'i — düzenlemek isterseniz burası
export const ROUTES = {
  home:        { tr: "",             en: "",             de: "" },
  products:    { tr: "/urunler",     en: "/products",    de: "/produkte" },
  finder:      { tr: "/makine-bul",  en: "/machine-finder", de: "/maschinen-finder" },
  brands:      { tr: "/markalar",    en: "/brands",      de: "/marken" },
  cat0: { tr: "/akulu-makasli-platform-kiralama", en: "/electric-scissor-lift-rental", de: "/elektro-scherenbuehne-mieten" },
  cat1: { tr: "/dizel-makasli-platform-kiralama", en: "/diesel-scissor-lift-rental", de: "/diesel-scherenbuehne-mieten" },
  cat2: { tr: "/dikey-platform-kiralama", en: "/vertical-mast-lift-rental", de: "/vertikalmastbuehne-mieten" },
  cat3: { tr: "/eklemli-platform-kiralama", en: "/boom-lift-rental", de: "/gelenkbuehne-mieten" },
  cat4: { tr: "/orumcek-platform-kiralama", en: "/spider-lift-rental", de: "/raupenbuehne-mieten" },
  cat5: { tr: "/orumcek-vinc-kiralama", en: "/spider-crane-rental", de: "/minikran-mieten" },
  cat6: { tr: "/arac-ustu-platform-kiralama", en: "/truck-mounted-platform-rental", de: "/lkw-buehne-mieten" },
  cat7: { tr: "/forklift-kiralama", en: "/forklift-rental", de: "/stapler-mieten" },
  cat8: { tr: "/mobil-vinc-kiralama", en: "/mobile-crane-rental", de: "/mobilkran-mieten" },
  about:       { tr: "/hakkimizda",  en: "/about",       de: "/ueber-uns" },
  hr:          { tr: "/insan-kaynaklari", en: "/human-resources", de: "/karriere" },
  whyus:       { tr: "/neden-biz",   en: "/why-us",      de: "/warum-wir" },
  blog:        { tr: "/blog",        en: "/blog",        de: "/blog" },
  contact:     { tr: "/iletisim",    en: "/contact",     de: "/kontakt" },
  reservation: { tr: "/rezervasyon", en: "/reservation", de: "/reservierung" },
};

// r("en","contact") → "/en/contact" ; r("tr","home") → "/"
export const r = (lang, key) => {
  const full = prefix(lang) + ROUTES[key][lang];
  return full === "" ? "/" : full;
};

// Yol (prefix hariç, "/" ile başlar veya "")
export const routePath = (lang, key) => ROUTES[key][lang];

export const blogPostPath = (lang, post) => `${r(lang, "blog")}/${post.slugs[lang]}`;

export const productPath = (lang, product) => `${r(lang, "products")}/${product.slug}`;

// Dil değiştirici: mevcut sayfanın hedef dildeki karşılığını bulur
export function switchPath(pathname, targetLang) {
  const m = pathname.match(/^\/(en|de)(?=\/|$)/);
  const cur = m ? m[1] : "tr";
  let base = m ? pathname.slice(m[0].length) : pathname;
  if (base === "" || base === "/") return r(targetLang, "home");

  // Blog yazısı mı?
  const blogBase = ROUTES.blog[cur];
  if (base.startsWith(blogBase + "/")) {
    const slug = base.slice(blogBase.length + 1).replace(/\/$/, "");
    const post = POSTS.find((p) => p.slugs[cur] === slug);
    if (post) return blogPostPath(targetLang, post);
    return r(targetLang, "blog");
  }

  // Ürün detayı mı? (slug tüm dillerde ortak)
  const prodBase = ROUTES.products[cur];
  if (base.startsWith(prodBase + "/")) {
    const slug = base.slice(prodBase.length + 1).replace(/\/$/, "");
    return `${r(targetLang, "products")}/${slug}`;
  }

  // Statik sayfa mı?
  for (const key of Object.keys(ROUTES)) {
    if (ROUTES[key][cur] === base) return r(targetLang, key);
  }
  return r(targetLang, "home");
}


// Marka sayfası yolu: TR /markalar/<slug>, EN /brands/<slug>, DE /marken/<slug>
export const brandPath = (lang, slug) => `${r(lang, "brands")}/${slug}`;