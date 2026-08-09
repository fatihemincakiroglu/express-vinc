"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { T } from "@/lib/i18n";
import { r, switchPath, brandPath } from "@/lib/routes";
import { BRANDS, productsByBrand, brandSlug } from "@/lib/products";

export default function Navbar({ lang = "tr" }) {
  const t = T[lang];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // hangi dropdown açık: "brands" | "corporate" | null

  // Markalar alt menüsü (ürün sayısına göre sıralı)
  const brandItems = [...BRANDS]
    .sort((a, b) => productsByBrand(b).length - productsByBrand(a).length)
    .map((b) => ({ href: brandPath(lang, brandSlug(b)), label: b }));

  // Kurumsal alt menüsü
  const corporate = [
    { href: r(lang, "about"), label: t.nav.about },
    { href: r(lang, "hr"), label: t.nav.hr },
    { href: r(lang, "whyus"), label: t.nav.whyus },
  ];

  const LINKS = [
    { href: r(lang, "home"), label: t.nav.home, exact: true },
    { href: r(lang, "products"), label: t.nav.products },
    { type: "dropdown", id: "brands", label: t.nav.brands, href: r(lang, "brands"), children: brandItems, viewAll: true },
    { type: "dropdown", id: "corporate", label: t.nav.corporate, children: corporate },
    { href: r(lang, "blog"), label: t.nav.blog },
    { href: r(lang, "contact"), label: t.nav.contact },
  ];

  const langHref = (l) => switchPath(pathname, l);
  const isActive = (href, exact) => (exact ? pathname === href : pathname.startsWith(href));
  const closeAll = () => { setOpen(false); setOpenMenu(null); };

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
                const isOpen = openMenu === l.id;
                const anyActive = (l.href && pathname.startsWith(l.href)) || l.children.some((c) => pathname.startsWith(c.href));
                return (
                  <div
                    key={l.id}
                    className={`nav-dropdown${isOpen ? " sub-open" : ""}${l.id === "brands" ? " nav-dropdown-wide" : ""}`}
                    onMouseEnter={() => setOpenMenu(l.id)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button
                      type="button"
                      className={`nav-dropdown-toggle${anyActive ? " active" : ""}`}
                      onClick={() => setOpenMenu((v) => (v === l.id ? null : l.id))}
                      aria-expanded={isOpen}
                    >
                      {l.label}
                      <span className="nav-caret" aria-hidden="true">▾</span>
                    </button>
                    <div className={`nav-submenu${l.id === "brands" ? " nav-submenu-grid" : ""}`}>
                      {l.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className={pathname.startsWith(c.href) ? "active" : undefined}
                          onClick={closeAll}
                        >
                          {c.label}
                        </Link>
                      ))}
                      {l.viewAll && (
                        <Link href={l.href} className="nav-submenu-all" onClick={closeAll}>
                          {t.prodPage?.viewAllBrand || "Tümü"} →
                        </Link>
                      )}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={isActive(l.href, l.exact) ? "active" : undefined}
                  onClick={closeAll}
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
