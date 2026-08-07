"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";

export default function QuoteCard({ lang = "tr" }) {
  const t = T[lang].quote;
  const services = T[lang].services.list.map((s) => s.t);
  const router = useRouter();
  const [form, setForm] = useState({ service: services[0], location: "", date: "", name: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const send = () => {
    const msg =
      `${t.hello}, ${t.waHead}.\n` +
      `${t.fService}: ${form.service}\n${t.fLocation}: ${form.location || "-"}\n` +
      `${t.fDate}: ${form.date || "-"}\n${t.fName}: ${form.name || "-"}`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="quote-card">
      <div className="tabs">
        <button className="on">{t.tabQuote}</button>
        <button onClick={() => router.push(r(lang, "reservation"))}>{t.tabRez}</button>
      </div>
      <div className="field">
        <label htmlFor="q-service">{t.service}</label>
        <select id="q-service" value={form.service} onChange={set("service")}>
          {services.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="q-location">{t.location}</label>
        <input id="q-location" type="text" placeholder={t.locPh} value={form.location} onChange={set("location")} />
      </div>
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
      <button className="btn btn-dark" onClick={send}>{t.sendQuote}</button>
      <p className="quote-note">{t.noteLine}</p>
    </div>
  );
}
