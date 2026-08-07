import Breadcrumb from "@/components/Breadcrumb";
import ReservationForm from "@/components/ReservationForm";
import RentalAssistant from "@/components/RentalAssistant";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";

export default function ReservationPage({ lang = "tr" }) {
  const t = T[lang];
  const rz = t.rez;
  return (
    <>
      <Breadcrumb lang={lang} title={rz.pageTitle} items={[{ label: rz.pageTitle, href: r(lang, "reservation") }]} />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="info-card"><h3>{rz.howH}</h3><p>{rz.howP}</p></div>
            <div className="info-card"><h3>{rz.fastH}</h3><p>{rz.fastP}</p><p><a href={`tel:${CONFIG.phoneLink}`}>{CONFIG.phoneDisplay}</a></p></div>
            <div className="info-card"><h3>{rz.advH}</h3><p>{rz.advP}</p></div>
            <RentalAssistant lang={lang} standalone />
          </div>
          <ReservationForm lang={lang} />
        </div>
      </section>
    </>
  );
}
