import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CAT_ICONS } from "@/components/CatIcons";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import { CAT_CONTENT } from "@/lib/cat-content";
import { r, productPath } from "@/lib/routes";
import { PRODUCTS, capText, productImage } from "@/lib/products";

export default function CategoryPage({ lang = "tr", cat = 0 }) {
  const t = T[lang];
  const q = t.quote;
  const c = CAT_CONTENT[cat][lang];
  const catName = t.cats[cat];
  const items = PRODUCTS.filter((p) => p.cat === cat);

  const waLink = (model) => {
    const msg = `${q.hello}, ${q.waHead}.\n${q.fService}: ${model}`;
    return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <>
      <Breadcrumb lang={lang} title={c.h1} items={[{ label: catName, href: r(lang, `cat${cat}`) }]} />
      <section className="section">
        <div className="container">
          {/* Giriş */}
          <div className="catp-head">
            <span className="dd-ico catp-ico">{CAT_ICONS[cat]}</span>
            <p className="catp-intro">{c.intro}</p>
            <div className="catp-cta">
              <a className="btn btn-gold" href={waLink(catName)} target="_blank" rel="noopener">{t.prodPage.ask} →</a>
              <a className="btn btn-dark" href={`tel:${CONFIG.phoneLink}`}>☎ {CONFIG.phoneDisplay}</a>
            </div>
          </div>

          {/* Ürünler */}
          <div className="prod-head" style={{ marginTop: 44 }}>
            <span className="dd-ico">{CAT_ICONS[cat]}</span>
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

          {/* Uzun içerik */}
          <div className="catp-body">
            {c.sections.map((sec) => (
              <div className="catp-sec" key={sec.h}>
                <h2>{sec.h}</h2>
                {sec.p.map((par) => <p key={par.slice(0, 40)}>{par}</p>)}
                {sec.ul && (
                  <ul className="catp-ul">
                    {sec.ul.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                )}
                {sec.table && (
                  <div className="catp-table-wrap">
                    <table className="catp-table">
                      <thead><tr>{sec.table.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
                      <tbody>
                        {sec.table.rows.map((row) => (
                          <tr key={row[0]}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Diğer kategoriler */}
          <div className="catp-others">
            <div className="section-head"><span className="eyebrow">{t.nav.products}</span><h2>{t.cats.filter((_, i) => i !== cat).length > 0 ? t.prodPage.similarH : ""}</h2></div>
            <div className="cat-nav-track" style={{ padding: 0 }}>
              {t.cats.map((label, i) => i === cat ? null : (
                <Link key={label} href={r(lang, `cat${i}`)} className="cat-nav-chip">
                  <span className="dd-ico">{CAT_ICONS[i]}</span>{label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
