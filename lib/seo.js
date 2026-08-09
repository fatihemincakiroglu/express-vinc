import { SITE_URL } from "./site";
import { r } from "./routes";

const abs = (path) => (path === "/" ? SITE_URL : SITE_URL + path);

export function makeMeta({ lang, key, title, description }) {
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
      canonical: abs(r(lang, key)),
      languages: {
        tr: abs(r("tr", key)),
        en: abs(r("en", key)),
        de: abs(r("de", key)),
        "x-default": abs(r("tr", key)),
      },
    },
  };
}
