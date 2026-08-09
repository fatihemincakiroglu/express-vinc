import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CAT_ICONS } from "@/components/CatIcons";
import { T } from "@/lib/i18n";
import { r, productPath } from "@/lib/routes";
import { PRODUCTS, capText, productImage } from "@/lib/products";

export default function ProductsPage({ lang = "tr" }) {
  const t = T[lang];
  const q = t.quote;

  return (
    <>
      <Breadcrumb lang={lang} title={t.nav.products} items={[{ label: t.nav.products, href: r(lang, "products") }]} />

      {/* Kategori hızlı gezinme çubuğu — kategori sayfalarına link */}
      <div className="cat-nav">
        <div className="container">
          <div className="cat-nav-track">
            {t.cats.map((c, i) => (
              <Link key={c} href={r(lang, `cat${i}`)} className="cat-nav-chip">
                <span className="dd-ico">{CAT_ICONS[i]}</span>{c}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p className="prod-intro">{t.prodPage.intro}</p>

          {t.cats.map((catName, ci) => {
            const all = PRODUCTS.filter((p) => p.cat === ci);
            if (all.length === 0) return null;
            const items = all.slice(0, 4);
            return (
              <div className="brand-block" key={catName} id={`kat-${ci}`}>
                <div className="brand-block-head">
                  <div className="brand-block-title">
                    <span className="dd-ico">{CAT_ICONS[ci]}</span>
                    <div>
                      <h2>{catName}</h2>
                      <span className="brand-block-count">{all.length} {t.prodPage.brandCount}</span>
                    </div>
                  </div>
                  <Link href={r(lang, `cat${ci}`)} className="btn btn-ghost brand-viewall">
                    {t.prodPage.viewAllBrand} →
                  </Link>
                </div>
                <div className="prod-grid brand-grid">
                  {items.map((p) => (
                    <Link href={productPath(lang, p)} className="prod-card has-img brand-mini" key={p.slug}>
                      <div className="pcard-media">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="pcard-img brand-img" src={productImage(p)} alt={`${p.model} — ${catName}`} loading="lazy" />
                        <span className="pcard-h">{p.h} m</span>
                      </div>
                      <div className="pcard-body">
                        {p.brand && <p className="prod-cat">{p.brand}</p>}
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
