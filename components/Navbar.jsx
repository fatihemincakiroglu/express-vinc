"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import { r, switchPath } from "@/lib/routes";

export default function Navbar({ lang = "tr" }) {
  const t = T[lang];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const LINKS = [
    { href: r(lang, "home"), label: t.nav.home, exact: true },
    { href: r(lang, "services"), label: t.nav.services },
    { href: r(lang, "about"), label: t.nav.about },
    { href: r(lang, "blog"), label: t.nav.blog },
    { href: r(lang, "contact"), label: t.nav.contact },
  ];

  // Dil değiştirici: aynı sayfanın hedef dildeki karşılığına gider
  const langHref = (l) => switchPath(pathname, l);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar-scroll" aria-hidden="true">
            <div className="topbar-scroll-inner">
              {[0, 1, 2, 3].map((i) => <span key={i}>{t.topbar} ✦ </span>)}
            </div>
          </div>
          <nav className="lang-switch" aria-label="Language">
            {["tr", "en", "de"].map((l) => (
              <a key={l} href={langHref(l)} className={l === lang ? "on" : ""} title={l.toUpperCase()}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/flags/${l}.png`} alt={l.toUpperCase()} width="22" height="22" />
              </a>
            ))}
          </nav>
        </div>
      </div>
      <header className="navbar">
        <div className="container">
          <Link href={r(lang, "home")} className="brand">
            <Image src="/logo.png" alt="Express Vinç" width={188} height={98} className="brand-logo" priority />
          </Link>
          <nav className={`nav-links${open ? " open" : ""}`}>
            {LINKS.map((l) => {
              const active = l.exact ? pathname === l.href : pathname.startsWith(l.href);
              return (
                <Link key={l.href} href={l.href} className={active ? "active" : undefined} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <a className="btn btn-dark" href={`tel:${CONFIG.phoneLink}`}>{t.nav.call}</a>
          <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(!open)}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
      </header>
    </>
  );
}
