"use client";
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";

export default function ContactForm({ lang = "tr" }) {
  const t = T[lang].quote;
  const tc = T[lang].contact;
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const send = () => {
    const msg = `${t.hello},\n${t.fName}: ${form.name || "-"}\n${t.fPhone}: ${form.phone || "-"}\n${t.fMsg}: ${form.message || "-"}`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="quote-card">
      <h3>{tc.formH}</h3>
      <p className="sub">{tc.formP}</p>
      <div className="field"><label htmlFor="c-name">{t.name}</label><input id="c-name" type="text" placeholder={t.namePh} value={form.name} onChange={set("name")} /></div>
      <div className="field"><label htmlFor="c-phone">{t.phone}</label><input id="c-phone" type="tel" placeholder="0 (5__) ___ __ __" value={form.phone} onChange={set("phone")} /></div>
      <div className="field"><label htmlFor="c-message">{tc.msg}</label><textarea id="c-message" placeholder={tc.msgPh} value={form.message} onChange={set("message")} /></div>
      <button className="btn btn-dark" onClick={send}>{tc.send}</button>
    </div>
  );
}
