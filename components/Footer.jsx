import Link from "next/link";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";

export default function Footer({ lang = "tr" }) {
  const t = T[lang];
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand"><em>Express</em> Vinç</div>
            <p>{t.footer.about}</p>
          </div>
          <div>
            <h4>{t.footer.quick}</h4>
            <ul>
              <li><Link href={r(lang, "home")}>{t.nav.home}</Link></li>
              <li><Link href={r(lang, "services")}>{t.nav.services}</Link></li>
              <li><Link href={r(lang, "products")}>{t.nav.products}</Link></li>
              <li><Link href={r(lang, "brands")}>{t.nav.brands}</Link></li>
              <li><Link href={r(lang, "about")}>{t.nav.about}</Link></li>
              <li><Link href={r(lang, "blog")}>{t.nav.blog}</Link></li>
              <li><Link href={r(lang, "contact")}>{t.nav.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t.footer.products}</h4>
            <ul>
              {T[lang].cats.map((c) => (
                <li key={c}><Link href={r(lang, "products")}>{c}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t.footer.contact}</h4>
            <ul>
              <li><a href={`tel:${CONFIG.phoneLink}`}>{CONFIG.phoneDisplay}</a></li>
              <li><a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a></li>
              <li><a href={CONFIG.instagram} target="_blank" rel="noopener">Instagram: {CONFIG.instagramHandle}</a></li>
              <li><span>{CONFIG.address}</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 {CONFIG.legalName} — {t.footer.rights}</span>
          <span className="seo-credit"><a href="https://fatihemincakiroglu.com/" target="_blank" rel="noopener">{t.footer.seo}</a> Fatih Emin Çakıroğlu</span>
        </div>
      </div>
    </footer>
  );
}
