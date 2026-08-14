import Link from "next/link";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";
import { ICONS } from "./Icons";

const KEYS = ["crane", "basket", "home", "tow", "cargo", "factory"];
// Hizmet kartı → ilgili kategori/sayfa rota anahtarı (yoksa ürünler sayfası)
const LINKS = ["cat8", "cat6", "products", "products", "cat8", "products"];

export default function ServiceCards({ lang = "tr" }) {
  const t = T[lang].services;
  return (
    <div className="cards">
      {t.list.map((s, i) => (
        <Link href={r(lang, LINKS[i])} className="card svc-card" key={s.t}>
          <span className="svc-num">0{i + 1}</span>
          <div className="icon">{ICONS[KEYS[i]]}</div>
          <h3>{s.t}</h3>
          <p>{s.d}</p>
          <span className="svc-more" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </span>
        </Link>
      ))}
    </div>
  );
}
