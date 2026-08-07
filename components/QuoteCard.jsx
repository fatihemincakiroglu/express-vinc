"use client";
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import Dropdown from "./Dropdown";
import { CAT_ICONS } from "./CatIcons";
import LocationInput from "./LocationInput";

// Kriterlere göre kategori önerisi (indeksler T[lang].cats sırasına göre)
// 0 Akülü Makaslı · 1 Dizel Makaslı · 2 Dikey · 3 Eklemli · 4 Örümcek Plt · 5 Örümcek Vinç · 6 Araç Üstü · 7 Forklift
function suggest(carryIdx, powerIdx, max) {
  if (carryIdx === 1) return max <= 6 ? [7] : [5];        // Malzeme
  if (powerIdx === 1) return max <= 12 ? [0, 2] : [3, 4]; // İnsan + Akülü
  if (powerIdx === 0) return max <= 16 ? [1] : max <= 24 ? [1, 3] : [3, 6]; // Dizel
  return max <= 30 ? [4] : [4, 6];                        // Çift enerjili
}

export default function QuoteCard({ lang = "tr" }) {
  const t = T[lang].quote;
  const cats = T[lang].cats;
  const [tab, setTab] = useState("teklif");

  // Hızlı Teklif
  const [form, setForm] = useState({ service: cats[0], location: "", date: "", name: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const sendQuote = () => {
    const msg =
      `${t.hello}, ${t.waHead}.\n` +
      `${t.fService}: ${form.service}\n${t.fLocation}: ${form.location || "-"}\n` +
      `${t.fDate}: ${form.date || "-"}\n${t.fName}: ${form.name || "-"}`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  // Kiralama Asistanı
  const [carry, setCarry] = useState(0);
  const [power, setPower] = useState(1);
  const [hMin, setHMin] = useState("");
  const [hMax, setHMax] = useState("");
  const [result, setResult] = useState(null);

  const find = () => {
    const max = parseFloat(hMax) || parseFloat(hMin) || 10;
    setResult(suggest(carry, power, max));
  };

  const askQuote = () => {
    const names = (result || []).map((i) => cats[i]).join(", ");
    const msg =
      `${t.hello}, ${t.waAsst}.\n` +
      `${t.fCarry}: ${t.carryOpts[carry]}\n${t.fPower}: ${t.powerOpts[power]}\n` +
      `${t.fHeight}: ${hMin || "?"}-${hMax || "?"} m\n${t.fSuggested}: ${names}`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="quote-card">
      <div className="tabs">
        <button className={tab === "teklif" ? "on" : ""} onClick={() => setTab("teklif")}>{t.tabQuote}</button>
        <button className={tab === "asistan" ? "on" : ""} onClick={() => setTab("asistan")}>{t.tabAsst}</button>
      </div>

      {tab === "teklif" ? (
        <>
          <Dropdown
            label={t.service}
            value={form.service}
            onChange={(v) => setForm({ ...form, service: v })}
            options={cats}
            icons={CAT_ICONS}
          />
          <LocationInput id="q-location" label={t.location} placeholder={t.locPh}
            value={form.location} onChange={(v) => setForm({ ...form, location: v })} />
          <div className="field-row">
            <div className="field">
              <label htmlFor="q-date">{t.date}</label>
              <input id="q-date" type="date" value={form.date} onChange={set("date")} />
            </div>
            <div className="field">
              <label htmlFor="q-name">{t.name}</label>
              <input id="q-name" type="text" placeholder={t.namePh} value={form.name} onChange={set("name")} />
            </div>
          </div>
          <button className="btn btn-dark" onClick={sendQuote}>{t.sendQuote}</button>
          <p className="quote-note">{t.noteLine}</p>
        </>
      ) : (
        <>
          <div className="field">
            <label>{t.carryLabel}</label>
            <div className="segmented">
              {t.carryOpts.map((o, i) => (
                <button key={o} type="button" className={carry === i ? "on" : ""} onClick={() => { setCarry(i); setResult(null); }}>{o}</button>
              ))}
            </div>
          </div>
          <div className="field">
            <label>{t.powerLabel}</label>
            <div className="segmented">
              {t.powerOpts.map((o, i) => (
                <button key={o} type="button" className={power === i ? "on" : ""} onClick={() => { setPower(i); setResult(null); }}>{o}</button>
              ))}
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="a-min">{t.hMin}</label>
              <div className="unit-wrap">
                <input id="a-min" type="number" min="0" placeholder="6" value={hMin} onChange={(e) => { setHMin(e.target.value); setResult(null); }} />
                <span>m</span>
              </div>
            </div>
            <div className="field">
              <label htmlFor="a-max">{t.hMax}</label>
              <div className="unit-wrap">
                <input id="a-max" type="number" min="0" placeholder="14" value={hMax} onChange={(e) => { setHMax(e.target.value); setResult(null); }} />
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
              <p className="suggest-lead">{t.suggestLead}</p>
              <div className="suggest-items">
                {result.map((i) => (
                  <div className="suggest-item" key={i}>
                    <span className="dd-ico">{CAT_ICONS[i]}</span>
                    <span>{cats[i]}</span>
                  </div>
                ))}
              </div>
              <button className="btn btn-gold" onClick={askQuote}>{t.sendQuote} →</button>
            </div>
          )}
          <p className="quote-note">{t.noteLine}</p>
        </>
      )}
    </div>
  );
}
