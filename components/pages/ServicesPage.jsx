import Breadcrumb from "@/components/Breadcrumb";
import ServiceCards from "@/components/ServiceCards";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";

export default function ServicesPage({ lang = "tr" }) {
  const t = T[lang];
  return (
    <>
      <Breadcrumb lang={lang} title={t.services.pageTitle} items={[{ label: t.nav.services, href: r(lang, "services") }]} />
      <section className="section">
        <div className="container">
          <ServiceCards lang={lang} detail />
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <div><h2>{t.services.ctaH}</h2><p>{t.services.ctaP}</p></div>
            <a className="btn btn-dark" href={`https://wa.me/${CONFIG.whatsapp}`} target="_blank" rel="noopener">{t.services.ctaBtn}</a>
          </div>
        </div>
      </section>
    </>
  );
}
