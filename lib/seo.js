import { SITE_URL } from "./site";
import { r } from "./routes";

const abs = (path) => (path === "/" ? SITE_URL : SITE_URL + path);

export function makeMeta({ lang, key, title, description }) {
  return {
    title,
    description,
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
