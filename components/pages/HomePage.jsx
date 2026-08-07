import Link from "next/link";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";
import HeroSlider from "@/components/HeroSlider";
import CategoryStrip from "@/components/CategoryStrip";
import QuoteCard from "@/components/QuoteCard";
import ServiceCards from "@/components/ServiceCards";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import BlogCards from "@/components/BlogCards";

export default function HomePage({ lang = "tr" }) {
  const t = T[lang];
  return (
    <>
      <section className="hero">
        <HeroSlider />
        <div className="container">
          <div>
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <h1>Express <span className="gold-italic">Vinç</span></h1>
            <p className="hero-lead">{t.hero.lead}</p>
            <div className="chips">
              {t.hero.chips.map((c) => <div className="chip" key={c}><span className="tick">✓</span> {c}</div>)}
            </div>
            <div className="rating-badge">
              <span className="stars">★★★★★</span>
              <span><strong>{t.hero.rating}</strong><small>{t.hero.ratingSub}</small></span>
            </div>
            <div className="hero-actions">
              <a className="btn btn-gold" href={`tel:${CONFIG.phoneLink}`}>{t.hero.call}</a>
              <Link className="btn btn-ghost-dark" href={r(lang, "services")}>{t.hero.servicesBtn}</Link>
            </div>
          </div>
          <QuoteCard lang={lang} />
        </div>
      </section>

      <CategoryStrip lang={lang} />

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{t.services.eyebrow}</span>
            <h2>{t.services.h2}</h2>
            <p>{t.services.p}</p>
          </div>
          <ServiceCards lang={lang} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t.steps.eyebrow}</span>
            <h2>{t.steps.h2}</h2>
          </div>
          <div className="steps">
            {t.steps.list.map((s, i) => (
              <div className="step-card" key={s.t}>
                <span className="step-num">{i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
          <a className="btn btn-gold" style={{ marginTop: 30 }} href={`https://wa.me/${CONFIG.whatsapp}`} target="_blank" rel="noopener">{t.steps.btn}</a>
        </div>
      </section>

      <section className="section on-dark">
        <div className="container">
          <div className="stats">
            {t.stats.map(([num, lbl]) => (
              <div className="stat" key={lbl}><div className="num">{num}</div><div className="lbl">{lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">{t.why.eyebrow}</span>
            <h2 style={{ color: "var(--ink)", fontSize: "clamp(1.7rem,3vw,2.3rem)" }}>
              {t.why.h2a}<span className="gold-italic">{t.why.h2b}</span>{t.why.h2c}
            </h2>
            <p style={{ color: "var(--muted)", marginTop: 14 }}>{t.why.p}</p>
          </div>
          <div className="feature-list">
            {t.why.list.map((f) => (
              <div className="feature" key={f.t}><span className="tick">✓</span><div><h4>{f.t}</h4><p>{f.d}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <Gallery lang={lang} />
      <Reviews lang={lang} />
      <Faq lang={lang} />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{t.blogSec.eyebrow}</span>
            <h2>{t.blogSec.h2}</h2>
            <p>{t.blogSec.p}</p>
          </div>
          <BlogCards lang={lang} limit={3} />
          <div style={{ textAlign: "center", marginTop: 34 }}>
            <Link href={r(lang, "blog")} className="btn btn-ghost">{t.blogSec.all}</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <div><h2>{t.cta.h}</h2><p>{t.cta.p}</p></div>
            <a className="btn btn-dark" href={`tel:${CONFIG.phoneLink}`}>☎ {CONFIG.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </>
  );
}
