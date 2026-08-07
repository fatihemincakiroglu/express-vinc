import Breadcrumb from "@/components/Breadcrumb";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";

export default function AboutPage({ lang = "tr" }) {
  const t = T[lang];
  const a = t.about;
  return (
    <>
      <Breadcrumb lang={lang} title={a.pageTitle} items={[{ label: t.nav.about, href: r(lang, "about") }]} />
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">{a.eyebrow}</span>
            <h2 style={{ color: "var(--ink)", fontSize: "clamp(1.7rem,3vw,2.3rem)" }}>{a.h2}</h2>
            <p style={{ color: "var(--muted)", marginTop: 14 }}>{a.p1}</p>
            <p style={{ color: "var(--muted)", marginTop: 10 }}>{a.p2}</p>
          </div>
          <div className="feature-list">
            {a.list.map((f) => (
              <div className="feature" key={f.t}><span className="tick">✓</span><div><h4>{f.t}</h4><p>{f.d}</p></div></div>
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
