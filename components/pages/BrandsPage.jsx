import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { T } from "@/lib/i18n";
import { r, productPath, brandPath } from "@/lib/routes";
import { BRANDS, productsByBrand, capText, productImage, brandSlug } from "@/lib/products";

export default function BrandsPage({ lang = "tr" }) {
  const t = T[lang];
  const q = t.quote;
  const brands = [...BRANDS].sort((a, b) => productsByBrand(b).length - productsByBrand(a).length);

  return (
    <>
      <Breadcrumb lang={lang} title={t.nav.brands} items={[{ label: t.nav.brands, href: r(lang, "brands") }]} />
      <section className="section">
        <div className="container">
          <p className="prod-intro">{t.prodPage.brandsIntro}</p>
          {brands.map((brand) => {
            const all = productsByBrand(brand);
            const items = all.slice(0, 4);
            const slug = brandSlug(brand);
            return (
              <div className="brand-block" key={brand} id={slug}>
                <div className="brand-block-head">
                  <div>
                    <h2>{brand}</h2>
                    <span className="brand-block-count">{all.length} {t.prodPage.brandCount}</span>
                  </div>
                  <Link href={brandPath(lang, slug)} className="btn btn-ghost brand-viewall">
                    {t.prodPage.viewAllBrand} →
                  </Link>
                </div>
                <div className="prod-grid brand-grid">
                  {items.map((p) => (
                    <Link href={productPath(lang, p)} className="prod-card has-img brand-mini" key={p.slug}>
                      <div className="pcard-media">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="pcard-img brand-img" src={productImage(p)} alt={p.model} loading="lazy" />
                        <span className="pcard-h">{p.h} m</span>
                      </div>
                      <div className="pcard-body">
                        <p className="prod-cat">{t.cats[p.cat]}</p>
                        <h3>{p.model}</h3>
                        <ul className="prod-specs">
                          <li><span>{q.whLabel}</span><strong>{p.h} m</strong></li>
                          <li><span>{q.capLabel}</span><strong>{capText(p.cap)}</strong></li>
                        </ul>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
