import { SITE_URL, LANGS } from "@/lib/site";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      ...LANGS.map((l) => `${SITE_URL}/sitemap-${l}.xml`),
    ],
    host: SITE_URL,
  };
}
