import { POSTS } from "./blog";
import { prefix } from "./site";

// Her sayfanın dile göre URL'i — düzenlemek isterseniz burası
export const ROUTES = {
  home:        { tr: "",             en: "",             de: "" },
  services:    { tr: "/hizmetler",   en: "/services",    de: "/leistungen" },
  products:    { tr: "/urunler",     en: "/products",    de: "/produkte" },
  finder:      { tr: "/makine-bul",  en: "/machine-finder", de: "/maschinen-finder" },
  about:       { tr: "/hakkimizda",  en: "/about",       de: "/ueber-uns" },
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
