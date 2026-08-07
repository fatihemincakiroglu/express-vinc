"use client";
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import Dropdown from "./Dropdown";
import { CAT_ICONS } from "./CatIcons";
import LocationInput from "./LocationInput";
import ThanksBox from "./ThanksBox";
import RentalAssistant from "./RentalAssistant";

export default function QuoteCard({ lang = "tr", initialTab = "teklif", asstInit }) {
  const t = T[lang].quote;
  const cats = T[lang].cats;
  const [tab, setTab] = useState(initialTab);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ service: cats[0], location: "", date: "", name: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const sendQuote = () => {
    const msg =
      `${t.hello}, ${t.waHead}.\n` +
      `${t.fService}: ${form.service}\n${t.fLocation}: ${form.location || "-"}\n` +
      `${t.fDate}: ${form.date || "-"}\n${t.fName}: ${form.name || "-"}`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  return (
    <div className="quote-card">
      <div className="tabs">
        <button className={tab === "teklif" ? "on" : ""} onClick={() => setTab("teklif")}>{t.tabQuote}</button>
        <button className={tab === "asistan" ? "on" : ""} onClick={() => setTab("asistan")}>{t.tabAsst}</button>
      </div>

      {tab === "teklif" ? (
        sent ? (
          <ThanksBox lang={lang} onReset={() => setSent(false)} />
        ) : (
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
        )
      ) : (
        <RentalAssistant lang={lang} init={asstInit} />
      )}
    </div>
  );
}
