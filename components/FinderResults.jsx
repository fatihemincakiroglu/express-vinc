"use client";
import { useSearchParams } from "next/navigation";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import { matchProducts, capText } from "@/lib/products";
import { CAT_ICONS } from "./CatIcons";
import Link from "next/link";
import { productPath } from "@/lib/routes";
import QuoteCard from "./QuoteCard";

export default function FinderResults({ lang = "tr" }) {
  const t = T[lang];
  const q = t.quote;
  const sp = useSearchParams();

  const carry = parseInt(sp.get("c") ?? "0", 10) || 0;
  const power = parseInt(sp.get("p") ?? "1", 10) || 0;
  const min = sp.get("min") || "";
  const max = sp.get("max") || "";
  const height = parseFloat(max) || parseFloat(min) || 10;

  const results = matchProducts(carry, power, height);

  const waLink = (model) => {
    const msg =
      `${q.hello}, ${q.waAsst}.\n` +
      `${q.fCarry}: ${q.carryOpts[carry]}\n${q.fPower}: ${q.powerOpts[power]}\n` +
      `${q.fHeight}: ${min || "?"}-${max || "?"} m\n${q.fService}: ${model}`;
    return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="section">
      <div className="container finder-grid">
        <div className="finder-card">
          <QuoteCard lang={lang} initialTab="asistan" asstInit={{ carry, power, min, max }} />
        </div>
        <div>
          <div className="section-head" style={{ marginBottom: 26 }}>
            <span className="eyebrow">{q.tabAsst}</span>
            <h2>{q.matchesH}</h2>
            <p>{q.carryOpts[carry]} · {q.powerOpts[power]} · {min || "?"}–{max || "?"} m</p>
          </div>
          <div className="prod-grid finder-results">
            {results.map((p) => (
              <div className="prod-card" key={p.model}>
                <span className="prod-ico">{CAT_ICONS[p.cat]}</span>
                <h3>{p.model}</h3>
                <p className="prod-cat">{t.cats[p.cat]}</p>
                <ul className="prod-specs">
                  <li><span>{q.whLabel}</span><strong>{p.h} m</strong></li>
                  <li><span>{q.capLabel}</span><strong>{capText(p.cap)}</strong></li>
                  <li><span>{q.powerLabel}</span><strong>{q.powerOpts[p.power]}</strong></li>
                </ul>
                <Link className="more" href={productPath(lang, p)}>{t.prodPage.detail} →</Link>
                <a className="btn btn-gold" href={waLink(p.model)} target="_blank" rel="noopener">{q.sendQuote}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
