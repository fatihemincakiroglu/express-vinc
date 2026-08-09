import Breadcrumb from "@/components/Breadcrumb";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";

export default function WhyUsPage({ lang = "tr" }) {
  const t = T[lang];
  const w = t.whyus;
  return (
    <>
      <Breadcrumb lang={lang} title={w.pageTitle} items={[{ label: w.pageTitle, href: r(lang, "whyus") }]} />
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">{w.eyebrow}</span>
            <h2 style={{ color: "var(--ink)", fontSize: "clamp(1.7rem,3vw,2.3rem)" }}>{w.h2}</h2>
            <p style={{ color: "var(--muted)", marginTop: 14 }}>{w.p1}</p>
            <p style={{ color: "var(--muted)", marginTop: 10 }}>{w.p2}</p>
            <div className="catp-cta" style={{ marginTop: 24 }}>
              <a className="btn btn-gold" href={`tel:${CONFIG.phoneLink}`}>☎ {CONFIG.phoneDisplay}</a>
              <a className="btn btn-dark" href={r(lang, "products")}>{t.nav.products} →</a>
            </div>
          </div>
          <div className="feature-list">
            {w.list.map((f) => (
              <div className="feature" key={f.t}><span className="tick">✓</span><div><h4>{f.t}</h4><p>{f.d}</p></div></div>
            ))}
          </div>
        </div>
      </section>
      <section className="section on-dark">
        <div className="container">
          <div className="stats">
            {w.stats.map(([num, lbl]) => (
              <div className="stat" key={lbl}><div className="num">{num}</div><div className="lbl">{lbl}</div></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
