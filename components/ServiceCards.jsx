import Link from "next/link";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";
import { ICONS } from "./Icons";

const KEYS = ["crane", "basket", "home", "tow", "cargo", "factory"];

export default function ServiceCards({ lang = "tr", detail = false }) {
  const t = T[lang].services;
  return (
    <div className="cards">
      {t.list.map((s, i) => (
        <div className="card" key={s.t}>
          <div className="icon">{ICONS[KEYS[i]]}</div>
          <h3>{s.t}</h3>
          <p>{s.d}</p>
          {!detail && <Link className="more" href={r(lang, "services")}>{t.detail}</Link>}
        </div>
      ))}
    </div>
  );
}
