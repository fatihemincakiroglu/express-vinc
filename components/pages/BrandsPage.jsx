import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CAT_ICONS } from "@/components/CatIcons";
import { T } from "@/lib/i18n";
import { r, productPath } from "@/lib/routes";
import { BRANDS, productsByBrand, capText, productImage } from "@/lib/products";

export default function BrandsPage({ lang = "tr" }) {
  const t = T[lang];
  const q = t.quote;
  // Jekko en geniş marka — başa al, kalanlar ürün sayısına göre
  const brands = [...BRANDS].sort((a, b) => productsByBrand(b).length - productsByBrand(a).length);

  return (
    <>
      <Breadcrumb lang={lang} title={t.nav.brands} items={[{ label: t.nav.brands, href: r(lang, "brands") }]} />
      <section className="section">
        <div className="container">
          <p className="prod-intro">{t.prodPage.brandsIntro}</p>
          {brands.map((brand) => {
            const items = productsByBrand(brand);
            return (
              <div className="prod-group" key={brand} id={brand.toLowerCase()}>
                <div className="prod-head brand-head">
                  <h2>{brand}</h2>
                  <span className="prod-count">{items.length} {t.prodPage.brandCount}</span>
                </div>
                <div className="prod-grid">
                  {items.map((p) => (
                    <div className="prod-card has-img" key={p.slug}>
                      <Link href={productPath(lang, p)} className="pcard-media">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="pcard-img brand-img" src={productImage(p)} alt={p.model} loading="lazy" />
                        <span className="pcard-pow">{q.powerOpts[p.power]}</span>
                        <span className="pcard-h">{p.h} m</span>
                      </Link>
                      <div className="pcard-body">
                        <p className="prod-cat">{t.cats[p.cat]}</p>
                        <Link href={productPath(lang, p)}><h3>{p.model}</h3></Link>
                        <ul className="prod-specs">
                          <li><span>{q.whLabel}</span><strong>{p.h} m</strong></li>
                          <li><span>{q.capLabel}</span><strong>{capText(p.cap)}</strong></li>
                        </ul>
                        <span className="more">{t.prodPage.detail} →</span>
                      </div>
                    </div>
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
