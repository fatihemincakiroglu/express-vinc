import CategoryPage from "@/components/pages/CategoryPage";
import { CAT_CONTENT } from "@/lib/cat-content";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "en", key: "cat2",
  title: CAT_CONTENT[2].meta.en.t, description: CAT_CONTENT[2].meta.en.d,
});

export default function Page() {
  return <CategoryPage lang="en" cat={2} />;
}
