import BlogListPage from "@/components/pages/BlogListPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "en", key: "blog",
  title: T.en.meta.blog.t, description: T.en.meta.blog.d,
});

export default function Page() {
  return <BlogListPage lang="en" />;
}
