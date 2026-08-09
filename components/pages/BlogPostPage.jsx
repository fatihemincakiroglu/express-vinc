import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BlogCards from "@/components/BlogCards";
import { POSTS, getPost } from "@/lib/blog";
import { BLOG_LINKS } from "@/lib/blog-links";
import { blogFullContent } from "@/lib/blog-content";
import { T } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { CONFIG } from "@/lib/config";
import { r, blogPostPath, productPath, brandPath } from "@/lib/routes";
import { PRODUCTS, capText, productImage, brandSlug } from "@/lib/products";

const LOCALE = { tr: "tr-TR", en: "en-GB", de: "de-DE" };

function relatedPosts(post, lang, count = 3) {
  const others = POSTS.filter((p) => p.slugs.tr !== post.slugs.tr);
  const same = others.filter((p) => p[lang].category === post[lang].category);
  const rest = others.filter((p) => p[lang].category !== post[lang].category)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return [...same, ...rest].slice(0, count);
}

// Paragraf metnine, ilgili yazıların anahtar kelimeleriyle link enjekte eder.
// Her anahtar kelime tüm makalede yalnızca bir kez linklenir.
function linkifyParagraph(text, links, lang, usedKeys) {
  if (!links || !links.length) return text;
  // en uzun anahtar kelimeden başla (daha spesifik eşleşme)
  const sorted = [...links]
    .filter((l) => l.kw && l.kw[lang])
    .sort((a, b) => b.kw[lang].length - a.kw[lang].length);
  const nodes = [text];
  for (const link of sorted) {
    if (usedKeys.has(link.slug)) continue; // yazı başına 1 link
    const kw = link.kw[lang];
    const target = POSTS.find((p) => p.slugs.tr === link.slug);
    if (!target) continue;
    let injected = false;
    for (let i = 0; i < nodes.length; i++) {
      if (typeof nodes[i] !== "string") continue;
      const idx = nodes[i].toLowerCase().indexOf(kw.toLowerCase());
      if (idx === -1) continue;
      const before = nodes[i].slice(0, idx);
      const match = nodes[i].slice(idx, idx + kw.length);
      const after = nodes[i].slice(idx + kw.length);
      nodes.splice(i, 1, before,
        <Link key={link.slug + idx} href={blogPostPath(lang, target)} className="blog-inline-link">{match}</Link>,
        after);
      injected = true;
      usedKeys.add(link.slug);
      break;
    }
    if (injected) continue;
  }
  return nodes;
}

export default function BlogPostPage({ lang = "tr", post }) {
  const t = T[lang];
  const c = post[lang];
  const links = BLOG_LINKS[post.slugs.tr] || {};
  const fmt = (d) => new Date(d).toLocaleDateString(LOCALE[lang], { day: "numeric", month: "long", year: "numeric" });

  // İlgili ürünler: eşleştirilen kategorilerden örnekler (kullanıcı görsün diye 6 adet)
  const relCats = links.cats || [];
  const relProducts = relCats.length
    ? PRODUCTS.filter((p) => relCats.includes(p.cat)).slice(0, 6)
    : [];
  const relBrands = links.brands || [];
  const usedKeys = new Set();

  // 10 başlıklı genişletilmiş içerik
  const fullContent = blogFullContent(post, lang, t);

  const url = SITE_URL + blogPostPath(lang, post);
  const plainText = c.content.filter((b) => b.p).map((b) => b.p).join(" ");
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": url + "#article",
    headline: c.title,
    description: c.excerpt,
    image: post.cover ? [SITE_URL + post.cover] : undefined,
    articleSection: c.category,
    inLanguage: lang,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: CONFIG.companyName, url: SITE_URL },
    publisher: {
      "@type": "Organization", name: CONFIG.companyName,
      logo: { "@type": "ImageObject", url: SITE_URL + "/logo.png" },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Breadcrumb
        lang={lang}
        title={c.title}
        items={[{ label: t.nav.blog, href: r(lang, "blog") }, { label: c.title, href: blogPostPath(lang, post) }]}
      />
      <section className="section">
        <div className="container">
          <article className="article">
            <p className="eyebrow">{c.category} · {fmt(post.date)}</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="article-cover" src={post.cover} alt={c.title} />
            {fullContent.map((block, i) => {
              if (block.h) return <h2 key={i}>{block.h}</h2>;
              if (block.ul) return (
                <ul className="catp-ul" key={i}>
                  {block.ul.map((li) => <li key={li}>{li}</li>)}
                </ul>
              );
              if (block.table) return (
                <div className="catp-table-wrap" key={i}>
                  <table className="catp-table">
                    <thead><tr>{block.table.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
                    <tbody>
                      {block.table.rows.map((row) => (
                        <tr key={row[0]}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
              return <p key={i}>{linkifyParagraph(block.p, links.related, lang, usedKeys)}</p>;
            })}

            {/* İlgili markalar */}
            {relBrands.length > 0 && (
              <div className="blog-rel-brands">
                <h3>{t.blogSec.relatedBrandsH}</h3>
                <div className="blog-brand-chips">
                  {relBrands.map((b) => (
                    <Link key={b} href={brandPath(lang, brandSlug(b))} className="blog-brand-chip">{b}</Link>
                  ))}
                </div>
              </div>
            )}

            {/* İlgili yazılar — anahtar kelime linkleri (garantili) */}
            {links.related && links.related.length > 0 && (
              <div className="blog-rel-read">
                <h3>{t.blogSec.relatedReadH}</h3>
                <ul className="blog-rel-read-list">
                  {links.related.map((l) => {
                    const target = POSTS.find((p) => p.slugs.tr === l.slug);
                    if (!target) return null;
                    return (
                      <li key={l.slug}>
                        <Link href={blogPostPath(lang, target)}>{target[lang].title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            <Link href={r(lang, "blog")} className="btn btn-ghost" style={{ marginTop: 28 }}>{t.blogSec.back}</Link>
          </article>

          {/* İlgili ürünler */}
          {relProducts.length > 0 && (
            <div className="blog-rel-products">
              <div className="section-head">
                <span className="eyebrow">{t.nav.products}</span>
                <h2>{t.blogSec.relatedProductsH}</h2>
              </div>
              <div className="prod-grid">
                {relProducts.map((p) => (
                  <Link href={productPath(lang, p)} className="prod-card has-img brand-mini" key={p.slug}>
                    <div className="pcard-media">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="pcard-img" src={productImage(p)} alt={`${p.model} — ${t.cats[p.cat]}`} loading="lazy" />
                      <span className="pcard-h">{p.h} m</span>
                    </div>
                    <div className="pcard-body">
                      <p className="prod-cat">{t.cats[p.cat]}</p>
                      <h3>{p.model}</h3>
                      <ul className="prod-specs">
                        <li><span>{T[lang].quote.whLabel}</span><strong>{p.h} m</strong></li>
                        <li><span>{T[lang].quote.capLabel}</span><strong>{capText(p.cap)}</strong></li>
                      </ul>
                    </div>
                  </Link>
                ))}
              </div>
              {relCats.length > 0 && (
                <div className="blog-cat-links">
                  {relCats.map((ci) => (
                    <Link key={ci} href={r(lang, `cat${ci}`)} className="btn btn-ghost">
                      {t.cats[ci]} — {t.blogSec.viewCategory} →
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="related-posts">
            <div className="section-head">
              <span className="eyebrow">{t.blogSec.eyebrow}</span>
              <h2>{t.blogSec.moreH}</h2>
            </div>
            <BlogCards lang={lang} posts={relatedPosts(post, lang)} />
          </div>
        </div>
      </section>
    </>
  );
}
