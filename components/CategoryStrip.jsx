import Link from "next/link";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";
import { PRODUCTS } from "@/lib/products";
import { CAT_ICONS as ICONS } from "./CatIcons";

export default function CategoryStrip({ lang = "tr" }) {
  const t = T[lang];
  const cats = t.cats;
  const cs = t.catStrip;

  return (
    <section className="cat-strip">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">{cs.eyebrow}</span>
          <h2>{cs.h2}</h2>
          <p>{cs.p}</p>
        </div>
        <div className="cat-grid">
          {cats.map((label, i) => {
            const count = PRODUCTS.filter((p) => p.cat === i).length;
            return (
              <Link href={r(lang, `cat${i}`)} className="cat-card" key={label}>
                <span className="cat-card-icon">{ICONS[i]}</span>
                <span className="cat-card-body">
                  <span className="cat-card-label">{label}</span>
                  {count > 0 && <span className="cat-card-count">{count} {cs.count}</span>}
                </span>
                <span className="cat-card-arrow" aria-hidden="true">→</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
