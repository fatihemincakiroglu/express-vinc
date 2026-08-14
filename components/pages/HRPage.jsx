import Breadcrumb from "@/components/Breadcrumb";
import CVForm from "@/components/CVForm";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";
import { hrSections } from "@/lib/corporate-content";

export default function HRPage({ lang = "tr" }) {
  const t = T[lang];
  const h = t.hr;
  const sections = hrSections(lang);
  const waMsg = `${t.quote.hello}, ${h.pageTitle}`;
  const waLink = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(waMsg)}`;

  return (
    <>
      <Breadcrumb lang={lang} title={h.pageTitle} items={[{ label: h.pageTitle, href: r(lang, "hr") }]} />
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">{h.eyebrow}</span>
            <h1 style={{ color: "var(--ink)", fontSize: "clamp(1.8rem,3.4vw,2.5rem)", marginBottom: 6 }}>{h.h2}</h1>
            <p style={{ color: "var(--muted)", marginTop: 14 }}>{h.p1}</p>
            <p style={{ color: "var(--muted)", marginTop: 10 }}>{h.p2}</p>
            <div className="catp-cta" style={{ marginTop: 24 }}>
              <a className="btn btn-gold" href="#basvuru">{h.ctaH} →</a>
              <a className="btn btn-dark" href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
            </div>
          </div>
          <div className="feature-list">
            {h.list.map((f) => (
              <div className="feature" key={f.t}><span className="tick">✓</span><div><h4>{f.t}</h4><p>{f.d}</p></div></div>
            ))}
          </div>
        </div>

        {/* Uzun içerik bölümleri */}
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
        </div>
      </section>

      {/* Başvuru formu */}
      <section className="section" id="basvuru" style={{ background: "#FAF9F5", borderTop: "1px solid var(--line)" }}>
        <div className="container container-narrow">
          <CVForm lang={lang} />
        </div>
      </section>

      <section className="section on-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem,3vw,2rem)" }}>{h.ctaH}</h2>
          <p style={{ color: "rgba(255,255,255,.75)", marginTop: 10, maxWidth: 640, marginInline: "auto" }}>{h.ctaP}</p>
          <div className="catp-cta" style={{ marginTop: 24, justifyContent: "center" }}>
            <a className="btn btn-gold" href={waLink} target="_blank" rel="noopener">WhatsApp →</a>
            <a className="btn btn-ghost-dark" href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
          </div>
        </div>
      </section>
    </>
  );
}
