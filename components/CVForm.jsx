"use client";
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";

export default function CVForm({ lang = "tr" }) {
  const f = T[lang].hr.form;
  const [data, setData] = useState({ name: "", phone: "", email: "", position: "", msg: "" });
  const [fileName, setFileName] = useState("");

  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));

  const onFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) { setFileName(""); return; }
    setFileName(file.name);
  };

  const buildText = () => {
    const L = { tr: {}, en: {}, de: {} }[lang];
    return (
      `${f.h} — Express Vinç\n\n` +
      `${f.name}: ${data.name}\n` +
      `${f.phone}: ${data.phone}\n` +
      `${f.email}: ${data.email}\n` +
      `${f.position}: ${data.position}\n` +
      `${f.msg}: ${data.msg}\n` +
      (fileName ? `\nCV: ${fileName}` : "")
    );
  };

  const mailHref = () =>
    `mailto:${CONFIG.email}?subject=${encodeURIComponent(f.h + " - " + (data.name || ""))}&body=${encodeURIComponent(buildText())}`;
  const waHref = () =>
    `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(buildText())}`;

  return (
    <div className="cv-form">
      <div className="cv-form-head">
        <h3>{f.h}</h3>
        <p>{f.sub}</p>
      </div>
      <div className="cv-grid">
        <label className="cv-field">
          <span>{f.name}</span>
          <input type="text" value={data.name} onChange={set("name")} placeholder={f.namePh} />
        </label>
        <label className="cv-field">
          <span>{f.phone}</span>
          <input type="tel" value={data.phone} onChange={set("phone")} placeholder={f.phonePh} />
        </label>
        <label className="cv-field">
          <span>{f.email}</span>
          <input type="email" value={data.email} onChange={set("email")} placeholder={f.emailPh} />
        </label>
        <label className="cv-field">
          <span>{f.position}</span>
          <input type="text" value={data.position} onChange={set("position")} placeholder={f.positionPh} />
        </label>
        <label className="cv-field cv-field-full">
          <span>{f.msg}</span>
          <textarea rows={3} value={data.msg} onChange={set("msg")} placeholder={f.msgPh} />
        </label>
        <div className="cv-field cv-field-full">
          <span>{f.cv}</span>
          <label className="cv-upload">
            <input type="file" accept="application/pdf,.pdf" onChange={onFile} hidden />
            <span className="cv-upload-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/></svg>
              {fileName ? `${f.cvSelected} ${fileName}` : f.cv}
            </span>
            <small>{f.cvHint}</small>
          </label>
        </div>
      </div>
      <p className="cv-note">{f.note}</p>
      <div className="cv-actions">
        <a className="btn btn-gold" href={mailHref()}>{f.mailBtn} →</a>
        <a className="btn btn-dark" href={waHref()} target="_blank" rel="noopener">{f.wpBtn}</a>
      </div>
    </div>
  );
}
