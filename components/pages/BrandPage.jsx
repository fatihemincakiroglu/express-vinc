import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import { r, productPath, brandPath } from "@/lib/routes";
import { productsByBrand, capText, productImage, brandSlug } from "@/lib/products";

export default function BrandPage({ lang = "tr", brand }) {
  const t = T[lang];
  const q = t.quote;
  const items = productsByBrand(brand);
  const slug = brandSlug(brand);

  const waLink = (model) => {
    const msg = `${q.hello}, ${q.waHead}.\n${q.fService}: ${model}`;
    return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <>
      <Breadcrumb
        lang={lang}
        title={brand}
        items={[
          { label: t.nav.brands, href: r(lang, "brands") },
          { label: brand, href: brandPath(lang, slug) },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="brandpg-head">
            <h1>{brand}</h1>
            <p className="prod-intro">
              {brand} — {items.length} {t.prodPage.brandCount}. {t.prodPage.brandsIntro}
            </p>
            <div className="catp-cta">
              <a className="btn btn-gold" href={waLink(brand)} target="_blank" rel="noopener">{t.prodPage.ask} →</a>
              <a className="btn btn-dark" href={`tel:${CONFIG.phoneLink}`}>☎ {CONFIG.phoneDisplay}</a>
            </div>
          </div>

          <div className="prod-head" style={{ marginTop: 40 }}>
            <h2>{t.prodPage.brandProductsH}</h2>
            <span className="prod-count">{items.length}</span>
          </div>
          <div className="prod-grid">
            {items.map((p) => (
              <div className="prod-card has-img" key={p.slug}>
                <Link href={productPath(lang, p)} className="pcard-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="pcard-img" src={productImage(p)} alt={`${p.model} — ${t.cats[p.cat]}`} loading="lazy" />
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
                  <div className="pcard-actions">
                    <Link className="btn btn-ghost" href={productPath(lang, p)}>{t.prodPage.detail}</Link>
                    <a className="btn btn-gold" href={waLink(p.model)} target="_blank" rel="noopener">{t.prodPage.ask}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
