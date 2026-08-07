"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";

export default function RentalAssistant({ lang = "tr", standalone = false, init }) {
  const t = T[lang].quote;
  const router = useRouter();
  const [carry, setCarry] = useState(init?.carry ?? 0);
  const [power, setPower] = useState(init?.power ?? 1);
  const [hMin, setHMin] = useState(init?.min ?? "");
  const [hMax, setHMax] = useState(init?.max ?? "");

  const find = () => {
    const params = new URLSearchParams({ c: carry, p: power, min: hMin || "", max: hMax || "" });
    router.push(`${r(lang, "finder")}?${params.toString()}`);
  };

  const body = (
    <>
      {standalone && <h3 style={{ marginBottom: 16 }}>{t.tabAsst}</h3>}
      <div className="field">
        <label>{t.carryLabel}</label>
        <div className="segmented">
          {t.carryOpts.map((o, i) => (
            <button key={o} type="button" className={carry === i ? "on" : ""} onClick={() => setCarry(i)}>{o}</button>
          ))}
        </div>
      </div>
      <div className="field">
        <label>{t.powerLabel}</label>
        <div className="segmented">
          {t.powerOpts.map((o, i) => (
            <button key={o} type="button" className={power === i ? "on" : ""} onClick={() => setPower(i)}>{o}</button>
          ))}
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="a-min">{t.hMin}</label>
          <div className="unit-wrap">
            <input id="a-min" type="number" min="0" placeholder="6" value={hMin} onChange={(e) => setHMin(e.target.value)} />
            <span>m</span>
          </div>
        </div>
        <div className="field">
          <label htmlFor="a-max">{t.hMax}</label>
          <div className="unit-wrap">
            <input id="a-max" type="number" min="0" placeholder="14" value={hMax} onChange={(e) => setHMax(e.target.value)} />
            <span>m</span>
          </div>
        </div>
      </div>
      <button className="btn btn-dark btn-find" onClick={find}>
        {t.find}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
      </button>
      <p className="quote-note">{t.noteLine}</p>
    </>
  );

  return standalone ? <div className="quote-card">{body}</div> : body;
}
