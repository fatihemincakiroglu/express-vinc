import { T } from "@/lib/i18n";

const Stars = () => <span className="stars">★★★★★</span>;

function Card({ r }) {
  return (
    <div className="rev-card">
      <div className="rev-top"><Stars /><span className="rev-quote">"</span></div>
      <p>{r.text}</p>
      <div className="rev-who">
        <span className="rev-avatar">{r.init}</span>
        <span><strong>{r.name}</strong><small>{r.route}</small></span>
      </div>
    </div>
  );
}

export default function Reviews({ lang = "tr" }) {
  const t = T[lang].reviews;
  const row1 = [...t.list.slice(0, 3), ...t.list.slice(0, 3)];
  const row2 = [...t.list.slice(3), ...t.list.slice(3)];
  return (
    <section className="reviews">
      <div className="container">
        <div className="rev-head">
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <h2>{t.h2}</h2>
            <p>{t.p}</p>
          </div>
          <div className="rev-score"><span className="stars">★★★★★</span><strong>4.9</strong><small>{t.score}</small></div>
        </div>
      </div>
      <div className="rev-rows">
        <div className="rev-track">{row1.map((r, i) => <Card r={r} key={"a" + i} />)}</div>
        <div className="rev-track reverse">{row2.map((r, i) => <Card r={r} key={"b" + i} />)}</div>
      </div>
    </section>
  );
}
