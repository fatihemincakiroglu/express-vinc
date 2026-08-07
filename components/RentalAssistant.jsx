"use client";
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import { matchProducts, capText } from "@/lib/products";
import { CAT_ICONS } from "./CatIcons";
import ThanksBox from "./ThanksBox";

export default function RentalAssistant({ lang = "tr", standalone = false }) {
  const t = T[lang].quote;
  const [carry, setCarry] = useState(0);
  const [power, setPower] = useState(1);
  const [hMin, setHMin] = useState("");
  const [hMax, setHMax] = useState("");
  const [result, setResult] = useState(null);
  const [sent, setSent] = useState(false);

  const reset = () => { setResult(null); };

  const find = () => {
    const height = parseFloat(hMax) || parseFloat(hMin) || 10;
    setResult(matchProducts(carry, power, height));
  };

  const askQuote = () => {
    const names = (result || []).map((p) => p.model).join(", ");
    const msg =
      `${t.hello}, ${t.waAsst}.\n` +
      `${t.fCarry}: ${t.carryOpts[carry]}\n${t.fPower}: ${t.powerOpts[power]}\n` +
      `${t.fHeight}: ${hMin || "?"}-${hMax || "?"} m\n${t.fSuggested}: ${names}`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  const body = sent ? (
    <ThanksBox lang={lang} onReset={() => { setSent(false); setResult(null); }} />
  ) : (
    <>
      {standalone && <h3 style={{ marginBottom: 16 }}>{t.tabAsst}</h3>}
      <div className="field">
        <label>{t.carryLabel}</label>
        <div className="segmented">
          {t.carryOpts.map((o, i) => (
            <button key={o} type="button" className={carry === i ? "on" : ""} onClick={() => { setCarry(i); reset(); }}>{o}</button>
          ))}
        </div>
      </div>
      <div className="field">
        <label>{t.powerLabel}</label>
        <div className="segmented">
          {t.powerOpts.map((o, i) => (
            <button key={o} type="button" className={power === i ? "on" : ""} onClick={() => { setPower(i); reset(); }}>{o}</button>
          ))}
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="a-min">{t.hMin}</label>
          <div className="unit-wrap">
            <input id="a-min" type="number" min="0" placeholder="6" value={hMin} onChange={(e) => { setHMin(e.target.value); reset(); }} />
            <span>m</span>
          </div>
        </div>
        <div className="field">
          <label htmlFor="a-max">{t.hMax}</label>
          <div className="unit-wrap">
            <input id="a-max" type="number" min="0" placeholder="14" value={hMax} onChange={(e) => { setHMax(e.target.value); reset(); }} />
            <span>m</span>
          </div>
        </div>
      </div>
      <button className="btn btn-dark btn-find" onClick={find}>
        {t.find}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
      </button>
      {result && (
        <div className="suggest-box">
          <p className="suggest-lead">{t.matchesH}</p>
          <div className="suggest-items">
            {result.map((p) => (
              <div className="suggest-item product" key={p.model}>
                <span className="dd-ico">{CAT_ICONS[p.cat]}</span>
                <span className="pi-info">
                  <strong>{p.model}</strong>
                  <small>{t.whLabel}: {p.h} m · {t.capLabel}: {capText(p.cap)} · {t.powerOpts[p.power]}</small>
                </span>
              </div>
            ))}
          </div>
          <button className="btn btn-gold" onClick={askQuote}>{t.sendQuote} →</button>
        </div>
      )}
      <p className="quote-note">{t.noteLine}</p>
    </>
  );

  return standalone ? <div className="quote-card">{body}</div> : body;
}
