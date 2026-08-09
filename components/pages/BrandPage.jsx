import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CONFIG } from "@/lib/config";
import { SITE_URL } from "@/lib/site";
import { T } from "@/lib/i18n";
import { r, productPath, brandPath } from "@/lib/routes";
import { productsByBrand, capText, productImage, brandSlug } from "@/lib/products";
import { brandSections, brandFaq } from "@/lib/brand-content";

export default function BrandPage({ lang = "tr", brand }) {
  const t = T[lang];
  const q = t.quote;
  const items = productsByBrand(brand);
  const slug = brandSlug(brand);
  const sections = brandSections(brand, lang, t);
  const faq = brandFaq(brand, lang, t);

  const waLink = (model) => {
    const msg = `${q.hello}, ${q.waHead}.\n${q.fService}: ${model}`;
    return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  // ---- JSON-LD schema (Brand + ItemList + FAQPage) ----
  const pageUrl = SITE_URL + brandPath(lang, slug);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Brand",
        "@id": pageUrl + "#brand",
        name: brand,
        url: pageUrl,
      },
      {
        "@type": "CollectionPage",
        "@id": pageUrl,
        url: pageUrl,
        name: `${brand} — Express Vinç`,
        isPartOf: { "@id": SITE_URL + "#website" },
        about: { "@id": pageUrl + "#brand" },
      },
      {
        "@type": "ItemList",
        name: `${brand} ${t.prodPage.brandProductsH}`,
        numberOfItems: items.length,
        itemListElement: items.slice(0, 30).map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: SITE_URL + productPath(lang, p),
          name: p.model,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": pageUrl + "#faq",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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

          {/* ÜRÜNLER */}
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

          {/* MARKA İÇERİĞİ (10 başlık) */}
          <div className="catp-body">
            {sections.map((sec) => (
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

          {/* SSS */}
          <div className="brand-faq">
            <div className="section-head"><span className="eyebrow">{t.faq.eyebrow}</span><h2>{brand} — {t.faq.h2}</h2></div>
            <div className="faq-box">
              {faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}<span className="faq-ico">+</span></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
