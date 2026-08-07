import Link from "next/link";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";

import { CAT_ICONS as ICONS } from "./CatIcons";

export default function CategoryStrip({ lang = "tr" }) {
  const cats = T[lang].cats;
  return (
    <section className="cat-strip">
      <div className="container">
        <div className="cat-grid">
          {cats.map((label, i) => (
            <Link href={r(lang, "services")} className="cat-item" key={label}>
              <span className="cat-icon">{ICONS[i]}</span>
              <span className="cat-label">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
