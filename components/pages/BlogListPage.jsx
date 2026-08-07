import Breadcrumb from "@/components/Breadcrumb";
import BlogCards from "@/components/BlogCards";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";

export default function BlogListPage({ lang = "tr" }) {
  const t = T[lang];
  return (
    <>
      <Breadcrumb lang={lang} title={t.blogSec.pageTitle} items={[{ label: t.nav.blog, href: r(lang, "blog") }]} />
      <section className="section">
        <div className="container">
          <BlogCards lang={lang} />
        </div>
      </section>
    </>
  );
}
