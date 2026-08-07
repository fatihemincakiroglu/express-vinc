"use client";
import { useEffect, useRef, useState } from "react";
import { LOCATIONS } from "@/lib/istanbul-locations";

// Türkçe karakterleri normalize et (ı→i, ş→s...) — her harfte doğru eşleşme için
const norm = (s) =>
  s.toLocaleLowerCase("tr")
    .replace(/ı/g, "i").replace(/ş/g, "s").replace(/ç/g, "c")
    .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ö/g, "o");

const INDEX = LOCATIONS.map((l) => ({ label: l, key: norm(l) }));

function search(q) {
  const nq = norm(q.trim());
  if (nq.length < 1) return [];
  const starts = [];
  const contains = [];
  for (const item of INDEX) {
    if (item.key.startsWith(nq)) starts.push(item.label);
    else if (item.key.includes(nq)) contains.push(item.label);
    if (starts.length >= 8) break;
  }
  return [...starts, ...contains].slice(0, 8);
}

export default function LocationInput({ id, label, placeholder, value, onChange }) {
  const [open, setOpen] = useState(false);
  const [hits, setHits] = useState([]);
  const [hi, setHi] = useState(-1);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const input = (e) => {
    const v = e.target.value;
    onChange(v);
    const h = search(v);
    setHits(h);
    setOpen(h.length > 0);
    setHi(-1);
  };

  const pick = (v) => { onChange(v); setOpen(false); };

  const keys = (e) => {
    if (!open) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setHi((h) => Math.min(h + 1, hits.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setHi((h) => Math.max(h - 1, 0)); }
    else if (e.key === "Enter" && hi >= 0) { e.preventDefault(); pick(hits[hi]); }
    else if (e.key === "Escape") setOpen(false);
  };

  // Eşleşen kısmı kalın göster
  const mark = (label) => {
    const nq = norm(value.trim());
    const i = norm(label).indexOf(nq);
    if (i < 0 || !nq) return label;
    return (<>{label.slice(0, i)}<strong>{label.slice(i, i + nq.length)}</strong>{label.slice(i + nq.length)}</>);
  };

  return (
    <div className="field loc-field" ref={ref}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id} type="text" autoComplete="off" placeholder={placeholder}
        value={value} onChange={input} onKeyDown={keys}
        onFocus={() => value && setOpen(search(value).length > 0)}
      />
      {open && (
        <ul className="loc-list" role="listbox">
          {hits.map((h, i) => (
            <li key={h}>
              <button type="button" className={i === hi ? "hi" : ""} onMouseEnter={() => setHi(i)} onClick={() => pick(h)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>
                <span>{mark(h)}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
