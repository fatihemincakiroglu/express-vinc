import BlogListPage from "@/components/pages/BlogListPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "de", key: "blog",
  title: T.de.meta.blog.t, description: T.de.meta.blog.d,
});

export default function Page() {
  return <BlogListPage lang="de" />;
}
