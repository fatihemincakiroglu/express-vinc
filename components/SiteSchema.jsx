import { SITE_URL } from "@/lib/site";
import { CONFIG } from "@/lib/config";

// Tüm sayfalarda görünen temel schema: Organization + WebSite + LocalBusiness
export default function SiteSchema({ lang = "tr" }) {
  const langUrl = lang === "tr" ? SITE_URL : `${SITE_URL}/${lang}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": SITE_URL + "#organization",
        name: CONFIG.companyName,
        legalName: CONFIG.legalName,
        url: SITE_URL,
        logo: SITE_URL + "/logo.png",
        image: SITE_URL + "/logo.png",
        telephone: CONFIG.phoneLink,
        email: CONFIG.email,
        sameAs: [CONFIG.instagram].filter(Boolean),
        address: {
          "@type": "PostalAddress",
          streetAddress: CONFIG.address,
          addressLocality: "İstanbul",
          addressCountry: "TR",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": SITE_URL + "#localbusiness",
        name: CONFIG.companyName,
        image: SITE_URL + "/logo.png",
        url: SITE_URL,
        telephone: CONFIG.phoneLink,
        email: CONFIG.email,
        priceRange: "₺₺",
        address: {
          "@type": "PostalAddress",
          streetAddress: CONFIG.address,
          addressLocality: "İstanbul",
          addressRegion: "İstanbul",
          addressCountry: "TR",
        },
        areaServed: { "@type": "City", name: "İstanbul" },
        openingHoursSpecification: [{
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00", closes: "23:59",
        }],
        parentOrganization: { "@id": SITE_URL + "#organization" },
      },
      {
        "@type": "WebSite",
        "@id": SITE_URL + "#website",
        url: SITE_URL,
        name: CONFIG.companyName,
        inLanguage: lang,
        publisher: { "@id": SITE_URL + "#organization" },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
