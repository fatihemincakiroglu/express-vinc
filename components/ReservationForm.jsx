"use client";
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import Dropdown from "./Dropdown";
import { CAT_ICONS } from "./CatIcons";
import LocationInput from "./LocationInput";
import ThanksBox from "./ThanksBox";

export default function ReservationForm({ lang = "tr" }) {
  const t = T[lang].quote;
  const tr = T[lang].rez;
  const services = T[lang].cats;
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ service: services[0], location: "", date: "", time: "", name: "", phone: "", note: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const send = () => {
    const msg =
      `${t.hello}, ${t.waRezHead}.\n` +
      `${t.fService}: ${f.service}\n${t.fLocation}: ${f.location || "-"}\n` +
      `${t.fDate}: ${f.date || "-"} ${f.time || ""}\n${t.fName}: ${f.name || "-"}\n` +
      `${t.fPhone}: ${f.phone || "-"}\n${t.fNote}: ${f.note || "-"}`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="quote-card">
        <ThanksBox lang={lang} onReset={() => setSent(false)} />
      </div>
    );
  }

  return (
    <div className="quote-card">
      <h3>{tr.formH}</h3>
      <p className="sub">{tr.formP}</p>
      <Dropdown label={t.service} value={f.service} onChange={(v) => setF({ ...f, service: v })} options={services} icons={CAT_ICONS} />
      <LocationInput id="r-location" label={t.location} placeholder={t.locPh}
        value={f.location} onChange={(v) => setF({ ...f, location: v })} />
      <div className="field-row">
        <div className="field"><label htmlFor="r-date">{t.date}</label><input id="r-date" type="date" value={f.date} onChange={set("date")} /></div>
        <div className="field"><label htmlFor="r-time">{t.time}</label><input id="r-time" type="time" value={f.time} onChange={set("time")} /></div>
      </div>
      <div className="field-row">
        <div className="field"><label htmlFor="r-name">{t.name}</label><input id="r-name" type="text" placeholder={t.namePh} value={f.name} onChange={set("name")} /></div>
        <div className="field"><label htmlFor="r-phone">{t.phone}</label><input id="r-phone" type="tel" placeholder="0 (5__) ___ __ __" value={f.phone} onChange={set("phone")} /></div>
      </div>
      <div className="field">
        <label htmlFor="r-note">{t.note}</label>
        <textarea id="r-note" placeholder={t.notePh} value={f.note} onChange={set("note")} />
      </div>
      <button className="btn btn-dark" onClick={send}>{t.sendRez}</button>
      <p className="quote-note">{t.rezNote}</p>
    </div>
  );
}
