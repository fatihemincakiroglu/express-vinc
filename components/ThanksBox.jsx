import { T } from "@/lib/i18n";

export default function ThanksBox({ lang = "tr", onReset }) {
  const t = T[lang].quote;
  return (
    <div className="thanks-box" role="status">
      <span className="thanks-check">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5l5.5 5.5L20 6.5"/></svg>
      </span>
      <h3>{t.thanksH}</h3>
      <p>{t.thanksP}</p>
      <button type="button" className="thanks-again" onClick={onReset}>{t.thanksAgain} →</button>
    </div>
  );
}
