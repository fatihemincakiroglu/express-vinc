import Breadcrumb from "@/components/Breadcrumb";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";
import { aboutSections } from "@/lib/corporate-content";

export default function AboutPage({ lang = "tr" }) {
  const t = T[lang];
  const a = t.about;
  const sections = aboutSections(lang);
  return (
    <>
      <Breadcrumb lang={lang} title={a.pageTitle} items={[{ label: t.nav.about, href: r(lang, "about") }]} />
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">{a.eyebrow}</span>
            <h1 style={{ color: "var(--ink)", fontSize: "clamp(1.8rem,3.4vw,2.5rem)", marginBottom: 6 }}>{a.h2}</h1>
            <p style={{ color: "var(--muted)", marginTop: 14 }}>{a.p1}</p>
            <p style={{ color: "var(--muted)", marginTop: 10 }}>{a.p2}</p>
            <div className="catp-cta" style={{ marginTop: 24 }}>
              <a className="btn btn-gold" href={`tel:${CONFIG.phoneLink}`}>☎ {CONFIG.phoneDisplay}</a>
              <a className="btn btn-dark" href={r(lang, "products")}>{t.nav.products} →</a>
            </div>
          </div>
          <div className="feature-list">
            {a.list.map((f) => (
              <div className="feature" key={f.t}><span className="tick">✓</span><div><h4>{f.t}</h4><p>{f.d}</p></div></div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="catp-body">
            {sections.map((sec) => (
              <div className="catp-sec" key={sec.h}>
                <h2>{sec.h}</h2>
                {sec.p.map((par) => <p key={par.slice(0, 40)}>{par}</p>)}
                {sec.ul && <ul className="catp-ul">{sec.ul.map((li) => <li key={li}>{li}</li>)}</ul>}
                {sec.table && (
                  <div className="catp-table-wrap">
                    <table className="catp-table">
                      <thead><tr>{sec.table.head.map((th) => <th key={th}>{th}</th>)}</tr></thead>
                      <tbody>{sec.table.rows.map((row) => (<tr key={row[0]}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>))}</tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section on-dark">
        <div className="container">
          <div className="stats">
            {a.stats.map(([num, lbl]) => (
              <div className="stat" key={lbl}><div className="num">{num}</div><div className="lbl">{lbl}</div></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
