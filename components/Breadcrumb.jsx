import Link from "next/link";
import { T } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { r } from "@/lib/routes";

export default function Breadcrumb({ lang = "tr", title, items }) {
  const trail = [{ label: T[lang].crumbHome, href: r(lang, "home") }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem", position: i + 1, name: t.label,
      item: t.href === "/" ? SITE_URL : SITE_URL + t.href,
    })),
  };

  return (
    <div className="breadcrumb">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container">
        <h1>{title}</h1>
        <nav aria-label="breadcrumb">
          {trail.map((t, i) => (
            <span key={t.href + i}>
              {i > 0 && <span className="bc-sep">›</span>}
              {i === trail.length - 1 ? <span className="bc-current">{t.label}</span> : <Link href={t.href}>{t.label}</Link>}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
