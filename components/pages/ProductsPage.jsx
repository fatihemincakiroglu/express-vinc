import Breadcrumb from "@/components/Breadcrumb";
import { CAT_ICONS } from "@/components/CatIcons";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";
import { PRODUCTS, capText } from "@/lib/products";

export default function ProductsPage({ lang = "tr" }) {
  const t = T[lang];
  const q = t.quote;

  const waLink = (model) => {
    const msg = `${q.hello}, ${q.waHead}.\n${q.fService}: ${model}`;
    return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <>
      <Breadcrumb lang={lang} title={t.nav.products} items={[{ label: t.nav.products, href: r(lang, "products") }]} />
      <section className="section">
        <div className="container">
          <p className="prod-intro">{t.prodPage.intro}</p>
          {t.cats.map((catName, ci) => {
            const items = PRODUCTS.filter((p) => p.cat === ci);
            if (items.length === 0) return null;
            return (
              <div className="prod-group" key={catName} id={`kat-${ci}`}>
                <div className="prod-head">
                  <span className="dd-ico">{CAT_ICONS[ci]}</span>
                  <h2>{catName}</h2>
                  <span className="prod-count">{items.length}</span>
                </div>
                <div className="prod-grid">
                  {items.map((p) => (
                    <div className="prod-card" key={p.model}>
                      <span className="prod-ico">{CAT_ICONS[p.cat]}</span>
                      <h3>{p.model}</h3>
                      <ul className="prod-specs">
                        <li><span>{q.whLabel}</span><strong>{p.h} m</strong></li>
                        <li><span>{q.capLabel}</span><strong>{capText(p.cap)}</strong></li>
                        <li><span>{q.powerLabel}</span><strong>{q.powerOpts[p.power]}</strong></li>
                      </ul>
                      <a className="btn btn-gold" href={waLink(p.model)} target="_blank" rel="noopener">{t.prodPage.ask}</a>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
