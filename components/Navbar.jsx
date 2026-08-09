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
  const [subOpen, setSubOpen] = useState(false); // mobil açılır menü durumu

  // Kurumsal alt menüsü
  const corporate = [
    { href: r(lang, "about"), label: t.nav.about },
    { href: r(lang, "hr"), label: t.nav.hr },
    { href: r(lang, "whyus"), label: t.nav.whyus },
  ];

  const LINKS = [
    { href: r(lang, "home"), label: t.nav.home, exact: true },
    { href: r(lang, "products"), label: t.nav.products },
    { href: r(lang, "brands"), label: t.nav.brands },
    { type: "dropdown", label: t.nav.corporate, children: corporate },
    { href: r(lang, "blog"), label: t.nav.blog },
    { href: r(lang, "contact"), label: t.nav.contact },
  ];

  const langHref = (l) => switchPath(pathname, l);
  const isActive = (href, exact) => (exact ? pathname === href : pathname.startsWith(href));

  return (
    <>
      <div className="topbar">
        <div className="container">
          <span className="topbar-mobile">{t.topbarMobile}</span>
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
              if (l.type === "dropdown") {
                const anyActive = l.children.some((c) => pathname.startsWith(c.href));
                return (
                  <div
                    key={l.label}
                    className={`nav-dropdown${subOpen ? " sub-open" : ""}`}
                    onMouseEnter={() => setSubOpen(true)}
                    onMouseLeave={() => setSubOpen(false)}
                  >
                    <button
                      type="button"
                      className={`nav-dropdown-toggle${anyActive ? " active" : ""}`}
                      onClick={() => setSubOpen((v) => !v)}
                      aria-expanded={subOpen}
                    >
                      {l.label}
                      <span className="nav-caret" aria-hidden="true">▾</span>
                    </button>
                    <div className="nav-submenu">
                      {l.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className={pathname.startsWith(c.href) ? "active" : undefined}
                          onClick={() => { setOpen(false); setSubOpen(false); }}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={isActive(l.href, l.exact) ? "active" : undefined}
                  onClick={() => setOpen(false)}
                >
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
