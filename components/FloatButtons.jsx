import Link from "next/link";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";

const IconWa = (<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.1c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-.9-.3-1.6-.6-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.1c.2-.3.4-.2.7-.1l2.1 1c.3.1.5.2.6.4 0 .1 0 .5-.2 1.1z"/></svg>);
const IconTel = (<svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>);
const IconCal = (<svg viewBox="0 0 24 24"><path d="M7 2v3M17 2v3M4 6h16a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm-1 5h18M8 15h3v3H8z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);

export default function FloatButtons({ lang = "tr" }) {
  const t = T[lang];
  return (
    <>
      <div className="float-stack">
        <a className="float-btn float-wa" href={`https://wa.me/${CONFIG.whatsapp}`} target="_blank" rel="noopener" aria-label="WhatsApp">{IconWa}</a>
        <a className="float-btn float-tel" href={`tel:${CONFIG.phoneLink}`} aria-label={t.float.call}>{IconTel}</a>
        <Link className="float-btn float-rez" href={r(lang, "reservation")} aria-label={t.float.rez}>{IconCal}</Link>
      </div>
      <nav className="mobile-bar" aria-label="Quick actions">
        <a className="mb-btn mb-wa" href={`https://wa.me/${CONFIG.whatsapp}`} target="_blank" rel="noopener">{IconWa}<span>{t.float.wa}</span></a>
        <a className="mb-btn mb-tel" href={`tel:${CONFIG.phoneLink}`}>{IconTel}<span>{t.float.call}</span></a>
        <Link className="mb-btn mb-rez" href={r(lang, "reservation")}>{IconCal}<span>{t.float.rez}</span></Link>
      </nav>
    </>
  );
}
