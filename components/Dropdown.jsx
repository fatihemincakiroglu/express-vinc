"use client";
import { useEffect, useRef, useState } from "react";

export default function Dropdown({ label, value, onChange, options, icons }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", esc); };
  }, []);

  const idx = options.indexOf(value);

  return (
    <div className="field" ref={ref}>
      {label && <label>{label}</label>}
      <div className={`dd${open ? " open" : ""}`}>
        <button type="button" className="dd-btn" onClick={() => setOpen(!open)} aria-expanded={open}>
          {icons && idx >= 0 && <span className="dd-ico">{icons[idx]}</span>}
          <span className="dd-val">{value}</span>
          <svg className="dd-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        {open && (
          <ul className="dd-list" role="listbox">
            {options.map((opt, i) => (
              <li key={opt}>
                <button
                  type="button"
                  className={`dd-opt${opt === value ? " on" : ""}`}
                  onClick={() => { onChange(opt); setOpen(false); }}
                >
                  {icons && <span className="dd-ico">{icons[i]}</span>}
                  <span>{opt}</span>
                  {opt === value && <span className="dd-check">✓</span>}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
