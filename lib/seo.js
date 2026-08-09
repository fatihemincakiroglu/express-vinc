import { SITE_URL } from "./site";
import { r } from "./routes";

const abs = (path) => (path === "/" ? SITE_URL : SITE_URL + path);

// subSlug verilirse canonical/hreflang, ilgili dilin taban yoluna "/<slug>" eklenir.
// Örn. key="brands", subSlug="jlg" → TR /markalar/jlg, EN /brands/jlg, DE /marken/jlg
export function makeMeta({ lang, key, title, description, subSlug }) {
  const url = (l) => {
    const base = r(l, key);
    if (!subSlug) return base;
    return (base === "/" ? "" : base) + "/" + subSlug;
  };
  return {
    title,
    description,
    authors: [{ name: "Express Vinç" }],
    creator: "Express Vinç",
    publisher: "Express Vinç",
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    alternates: {
      canonical: abs(url(lang)),
      languages: {
        tr: abs(url("tr")),
        en: abs(url("en")),
        de: abs(url("de")),
        "x-default": abs(url("tr")),
      },
    },
  };
}
