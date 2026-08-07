import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CAT_ICONS } from "@/components/CatIcons";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import { r, productPath } from "@/lib/routes";
import { capText, similarProducts, productImage } from "@/lib/products";

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
  const isLifting = product.cat !== 5 && product.cat !== 7;

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
      <section className="section pdx">
        <div className="container">

          {/* ÜST BLOK: görsel + bilgi */}
          <div className="pdx-hero">
            <div className="pdx-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={productImage(product)} alt={`${product.model} — ${catName}`} />
              <span className="pdx-badge-cat"><span className="dd-ico">{CAT_ICONS[product.cat]}</span>{catName}</span>
              <span className="pdx-badge-pow">{q.powerOpts[product.power]}</span>
            </div>

            <div className="pdx-info">
              <span className="eyebrow">{catName}</span>
              <h2>{product.model}</h2>
              <p className="pdx-lead">{desc}</p>

              <div className="pdx-stats">
                <div className="pdx-stat">
                  <span className="num">{product.h}<small> m</small></span>
                  <span className="lbl">{q.whLabel}</span>
                </div>
                <div className="pdx-stat">
                  <span className="num">{capText(product.cap)}</span>
                  <span className="lbl">{q.capLabel}</span>
                </div>
                <div className="pdx-stat">
                  <span className="num pdx-pow">{q.powerOpts[product.power]}</span>
                  <span className="lbl">{q.powerLabel}</span>
                </div>
              </div>

              <div className="pdx-actions">
                <a className="btn btn-gold" href={waLink} target="_blank" rel="noopener">{pp.ask} →</a>
                <Link className="btn btn-dark" href={r(lang, "reservation")}>{t.float.rez}</Link>
                <a className="btn btn-ghost" href={`tel:${CONFIG.phoneLink}`}>☎ {CONFIG.phoneDisplay}</a>
              </div>
              <p className="pdx-periods">✓ {pp.rentPeriods} · {q.noteLine}</p>
            </div>
          </div>

          {/* GÜVEN ŞERİDİ */}
          <div className="pdx-trust">
            {t.hero.chips.map((c) => (
              <span key={c}><i>✓</i>{c}</span>
            ))}
          </div>

          {/* ALT BLOK: teknik özellikler + hakkında */}
          <div className="pdx-body">
            <div className="pdx-card">
              <h3>{pp.specsH}</h3>
              <ul className="pd-specs">
                <li><span>{q.whLabel}</span><strong>{product.h} m</strong></li>
                {isLifting && <li><span>{pp.platH}</span><strong>{platH} m</strong></li>}
                <li><span>{q.capLabel}</span><strong>{capText(product.cap)}</strong></li>
                <li><span>{q.powerLabel}</span><strong>{q.powerOpts[product.power]}</strong></li>
                <li><span>{pp.catLabel}</span><strong>{catName}</strong></li>
              </ul>
            </div>
            <div className="pdx-card">
              <h3>{pp.usesH}</h3>
              <p className="pdx-use">{pp.uses[product.cat]}</p>
              <h3 style={{ marginTop: 22 }}>{pp.aboutH}</h3>
              <p className="pdx-use">{desc}</p>
            </div>
          </div>

          {/* BENZER ÜRÜNLER */}
          <div className="pd-similar">
            <div className="section-head">
              <span className="eyebrow">{t.nav.products}</span>
              <h2>{pp.similarH}</h2>
            </div>
            <div className="prod-grid">
              {similar.map((p) => (
                <Link className="prod-card has-img" key={p.slug} href={productPath(lang, p)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="pcard-img" src={productImage(p)} alt={p.model} loading="lazy" />
                  <div className="pcard-body">
                    <p className="prod-cat">{t.cats[p.cat]}</p>
                    <h3>{p.model}</h3>
                    <ul className="prod-specs">
                      <li><span>{q.whLabel}</span><strong>{p.h} m</strong></li>
                      <li><span>{q.capLabel}</span><strong>{capText(p.cap)}</strong></li>
                    </ul>
                    <span className="more">{pp.detail} →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
