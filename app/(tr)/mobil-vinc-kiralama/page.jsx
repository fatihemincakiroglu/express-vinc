import CategoryPage from "@/components/pages/CategoryPage";
import { CAT_CONTENT } from "@/lib/cat-content";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "tr", key: "cat8",
  title: CAT_CONTENT[8].meta.tr.t, description: CAT_CONTENT[8].meta.tr.d,
});

export default function Page() {
  return <CategoryPage lang="tr" cat={8} />;
}
