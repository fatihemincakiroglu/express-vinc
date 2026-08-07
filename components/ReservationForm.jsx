"use client";
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";

export default function ReservationForm({ lang = "tr" }) {
  const t = T[lang].quote;
  const tr = T[lang].rez;
  const services = T[lang].services.list.map((s) => s.t);
  const [f, setF] = useState({ service: services[0], location: "", date: "", time: "", name: "", phone: "", note: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const send = () => {
    const msg =
      `${t.hello}, ${t.waRezHead}.\n` +
      `${t.fService}: ${f.service}\n${t.fLocation}: ${f.location || "-"}\n` +
      `${t.fDate}: ${f.date || "-"} ${f.time || ""}\n${t.fName}: ${f.name || "-"}\n` +
      `${t.fPhone}: ${f.phone || "-"}\n${t.fNote}: ${f.note || "-"}`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="quote-card">
      <h3>{tr.formH}</h3>
      <p className="sub">{tr.formP}</p>
      <div className="field">
        <label htmlFor="r-service">{t.service}</label>
        <select id="r-service" value={f.service} onChange={set("service")}>
          {services.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="r-location">{t.location}</label>
        <input id="r-location" type="text" placeholder={t.locPh} value={f.location} onChange={set("location")} />
      </div>
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
