import { POSTS } from "./blog";
import { SITE_URL, LANGS } from "./site";
import { ROUTES, r, blogPostPath } from "./routes";

const STATIC_KEYS = [
  { key: "home", changefreq: "weekly", priority: "1.0" },
  { key: "services", changefreq: "monthly", priority: "0.9" },
  { key: "products", changefreq: "monthly", priority: "0.9" },
  { key: "finder", changefreq: "monthly", priority: "0.5" },
  { key: "reservation", changefreq: "monthly", priority: "0.9" },
  { key: "about", changefreq: "monthly", priority: "0.7" },
  { key: "contact", changefreq: "monthly", priority: "0.8" },
  { key: "blog", changefreq: "weekly", priority: "0.7" },
];

const today = () => new Date().toISOString().split("T")[0];
const abs = (p) => (p === "/" ? SITE_URL : SITE_URL + p);

// x-default her zaman Türkçe
const staticAlternates = (key) => [
  { hreflang: "tr", href: abs(r("tr", key)) },
  { hreflang: "en", href: abs(r("en", key)) },
  { hreflang: "de", href: abs(r("de", key)) },
  { hreflang: "x-default", href: abs(r("tr", key)) },
];
const postAlternates = (post) => [
  { hreflang: "tr", href: abs(blogPostPath("tr", post)) },
  { hreflang: "en", href: abs(blogPostPath("en", post)) },
  { hreflang: "de", href: abs(blogPostPath("de", post)) },
  { hreflang: "x-default", href: abs(blogPostPath("tr", post)) },
];

export function urlsFor(lang) {
  const urls = STATIC_KEYS.map((s) => ({
    loc: abs(r(lang, s.key)),
    lastmod: today(),
    changefreq: s.changefreq,
    priority: s.priority,
    alternates: staticAlternates(s.key),
  }));
  for (const post of POSTS) {
    urls.push({
      loc: abs(blogPostPath(lang, post)),
      lastmod: post.date,
      changefreq: "yearly",
      priority: "0.6",
      alternates: postAlternates(post),
    });
  }
  return urls;
}

const XSL = `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>`;

export function renderUrlset(lang) {
  const items = urlsFor(lang)
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
${u.alternates.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`).join("\n")}
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
${XSL}
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${items}
</urlset>`;
}

export function renderIndex() {
  const maps = LANGS.map(
    (l) => `  <sitemap>
    <loc>${SITE_URL}/sitemap-${l}.xml</loc>
    <lastmod>${today()}</lastmod>
  </sitemap>`
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
${XSL}
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${maps}
</sitemapindex>`;
}

export const XML_HEADERS = { "Content-Type": "application/xml; charset=utf-8" };
