import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CAT_ICONS } from "@/components/CatIcons";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import { r, productPath } from "@/lib/routes";
import { PRODUCTS, capText, productImage } from "@/lib/products";

export default function ProductsPage({ lang = "tr" }) {
  const t = T[lang];
  const q = t.quote;

  const waLink = (model) => {
    const msg = `${q.hello}, ${q.waHead}.\n${q.fService}: ${model}`;
    return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <>
      <Breadcrumb lang={lang} title={t.nav.products} items={[{ label: t.nav.products, href: r(lang, "products") }]} />

      {/* Kategori hızlı gezinme çubuğu */}
      <div className="cat-nav">
        <div className="container">
          <div className="cat-nav-track">
            {t.cats.map((c, i) => (
              <a key={c} href={`#kat-${i}`} className="cat-nav-chip">
                <span className="dd-ico">{CAT_ICONS[i]}</span>{c}
              </a>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p className="prod-intro">{t.prodPage.intro}</p>

          {t.cats.map((catName, ci) => {
            const items = PRODUCTS.filter((p) => p.cat === ci);
            if (items.length === 0) return null;
            return (
              <div className="prod-group" key={catName} id={`kat-${ci}`}>
                <div className="prod-head">
                  <span className="dd-ico">{CAT_ICONS[ci]}</span>
                  <h2>{catName}</h2>
                  <span className="prod-count">{items.length}</span>
                </div>
                <div className="prod-grid">
                  {items.map((p) => (
                    <div className="prod-card has-img" key={p.slug}>
                      <Link href={productPath(lang, p)} className="pcard-media">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="pcard-img" src={productImage(p)} alt={`${p.model} — ${catName}`} loading="lazy" />
                        <span className="pcard-pow">{q.powerOpts[p.power]}</span>
                        <span className="pcard-h">{p.h} m</span>
                      </Link>
                      <div className="pcard-body">
                        <Link href={productPath(lang, p)}>
                          <h3>{p.model}</h3>
                        </Link>
                        <ul className="prod-specs">
                          <li><span>{q.whLabel}</span><strong>{p.h} m</strong></li>
                          <li><span>{q.capLabel}</span><strong>{capText(p.cap)}</strong></li>
                          <li><span>{q.powerLabel}</span><strong>{q.powerOpts[p.power]}</strong></li>
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
            );
          })}
        </div>
      </section>
    </>
  );
}
