import { T } from "@/lib/i18n";

export default function Faq({ lang = "tr" }) {
  const t = T[lang].faq;
  return (
    <section className="section faq-section">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2>{t.h2}</h2>
          <p>{t.p}</p>
        </div>
        <div className="faq-box">
          {t.list.map((f) => (
            <details key={f.q}>
              <summary>{f.q}<span className="faq-ico">+</span></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
