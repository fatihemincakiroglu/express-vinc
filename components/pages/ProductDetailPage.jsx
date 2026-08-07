import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CAT_ICONS } from "@/components/CatIcons";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import { r, productPath } from "@/lib/routes";
import { capText, similarProducts } from "@/lib/products";

export default function ProductDetailPage({ lang = "tr", product }) {
  const t = T[lang];
  const q = t.quote;
  const pp = t.prodPage;
  const catName = t.cats[product.cat];
  const similar = similarProducts(product);

  const waMsg = `${q.hello}, ${q.waHead}.\n${q.fService}: ${product.model}`;
  const waLink = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(waMsg)}`;
  const platH = Math.max(product.h - 2, 2);
  const desc = pp.descTpl(product.model, product.h, capText(product.cap), catName, q.powerOpts[product.power]);

  return (
    <>
      <Breadcrumb
        lang={lang}
        title={product.model}
        items={[
          { label: t.nav.products, href: r(lang, "products") },
          { label: product.model, href: productPath(lang, product) },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="pd-grid">
            <div className="pd-main">
              <div className="pd-hero">
                <span className="pd-ico">{CAT_ICONS[product.cat]}</span>
                <div>
                  <p className="prod-cat">{catName}</p>
                  <h2>{product.model}</h2>
                </div>
              </div>
              <p className="pd-desc">{desc}</p>
              <p className="pd-desc">{pp.uses[product.cat]}</p>

              <h3 className="pd-specs-h">{pp.specsH}</h3>
              <ul className="pd-specs">
                <li><span>{q.whLabel}</span><strong>{product.h} m</strong></li>
                {product.cat !== 5 && product.cat !== 7 && (
                  <li><span>{pp.platH}</span><strong>{platH} m</strong></li>
                )}
                <li><span>{q.capLabel}</span><strong>{capText(product.cap)}</strong></li>
                <li><span>{q.powerLabel}</span><strong>{q.powerOpts[product.power]}</strong></li>
                <li><span>{pp.catLabel}</span><strong>{catName}</strong></li>
              </ul>
            </div>

            <aside className="pd-cta">
              <h3>{pp.ask}</h3>
              <p>{pp.rentPeriods}</p>
              <a className="btn btn-gold" href={waLink} target="_blank" rel="noopener">{pp.ask} →</a>
              <Link className="btn btn-dark" href={r(lang, "reservation")}>{t.float.rez}</Link>
              <a className="btn btn-ghost" href={`tel:${CONFIG.phoneLink}`}>☎ {CONFIG.phoneDisplay}</a>
              <p className="quote-note">{q.noteLine}</p>
            </aside>
          </div>

          {/* Benzer ürünler */}
          <div className="pd-similar">
            <div className="section-head">
              <span className="eyebrow">{t.nav.products}</span>
              <h2>{pp.similarH}</h2>
            </div>
            <div className="prod-grid">
              {similar.map((p) => (
                <Link className="prod-card" key={p.slug} href={productPath(lang, p)}>
                  <span className="prod-ico">{CAT_ICONS[p.cat]}</span>
                  <h3>{p.model}</h3>
                  <p className="prod-cat">{t.cats[p.cat]}</p>
                  <ul className="prod-specs">
                    <li><span>{q.whLabel}</span><strong>{p.h} m</strong></li>
                    <li><span>{q.capLabel}</span><strong>{capText(p.cap)}</strong></li>
                  </ul>
                  <span className="more">{pp.detail} →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
