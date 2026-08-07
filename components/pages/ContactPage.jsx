import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";

export default function ContactPage({ lang = "tr" }) {
  const t = T[lang];
  const c = t.contact;
  return (
    <>
      <Breadcrumb lang={lang} title={c.pageTitle} items={[{ label: t.nav.contact, href: r(lang, "contact") }]} />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="info-card"><h3>{c.phoneH}</h3><p>{c.phoneP}</p><p><a href={`tel:${CONFIG.phoneLink}`}>{CONFIG.phoneDisplay}</a></p></div>
            <div className="info-card"><h3>{c.waH}</h3><p>{c.waP}</p><p><a href={`https://wa.me/${CONFIG.whatsapp}`} target="_blank" rel="noopener">{c.waLink}</a></p></div>
            <div className="info-card"><h3>{c.igH}</h3><p>{c.igP}</p><p><a href={CONFIG.instagram} target="_blank" rel="noopener">{CONFIG.instagramHandle} →</a></p></div>
            <div className="info-card"><h3>{c.mailH}</h3><p>{c.mailP}</p><p><a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a></p></div>
            <div className="info-card"><h3>{c.addrH}</h3><p>{CONFIG.address}</p></div>
          </div>
          <ContactForm lang={lang} />
        </div>
      </section>
    </>
  );
}
