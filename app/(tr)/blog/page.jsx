import BlogListPage from "@/components/pages/BlogListPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "tr", key: "blog",
  title: T.tr.meta.blog.t, description: T.tr.meta.blog.d,
});

export default function Page() {
  return <BlogListPage lang="tr" />;
}
