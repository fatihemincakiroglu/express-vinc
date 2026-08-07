import Link from "next/link";
import { POSTS } from "@/lib/blog";
import { T } from "@/lib/i18n";
import { blogPostPath } from "@/lib/routes";

const LOCALE = { tr: "tr-TR", en: "en-GB", de: "de-DE" };

export default function BlogCards({ lang = "tr", limit }) {
  const t = T[lang].blogSec;
  const list = limit ? POSTS.slice(0, limit) : POSTS;
  const fmt = (d) => new Date(d).toLocaleDateString(LOCALE[lang], { day: "numeric", month: "long", year: "numeric" });
  return (
    <div className="blog-cards">
      {list.map((post) => {
        const c = post[lang];
        return (
          <Link href={blogPostPath(lang, post)} className="blog-card" key={post.slug}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.cover} alt={c.title} loading="lazy" />
            <div className="blog-body">
              <span className="blog-cat">{c.category}</span>
              <h3>{c.title}</h3>
              <p>{c.excerpt}</p>
              <span className="blog-meta">{fmt(post.date)} · {t.read}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
