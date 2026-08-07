import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BlogCards from "@/components/BlogCards";
import { POSTS } from "@/lib/blog";
import { T } from "@/lib/i18n";
import { r, blogPostPath } from "@/lib/routes";

const LOCALE = { tr: "tr-TR", en: "en-GB", de: "de-DE" };

// Aynı kategoriden yazılar önce, kalan yerler en güncel yazılarla dolar
function relatedPosts(post, lang, count = 3) {
  const others = POSTS.filter((p) => p.slugs.tr !== post.slugs.tr);
  const same = others.filter((p) => p[lang].category === post[lang].category);
  const rest = others.filter((p) => p[lang].category !== post[lang].category)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return [...same, ...rest].slice(0, count);
}

export default function BlogPostPage({ lang = "tr", post }) {
  const t = T[lang];
  const c = post[lang];
  const fmt = (d) => new Date(d).toLocaleDateString(LOCALE[lang], { day: "numeric", month: "long", year: "numeric" });
  return (
    <>
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
            {c.content.map((block, i) => (block.h ? <h2 key={i}>{block.h}</h2> : <p key={i}>{block.p}</p>))}
            <Link href={r(lang, "blog")} className="btn btn-ghost" style={{ marginTop: 28 }}>{t.blogSec.back}</Link>
          </article>

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
