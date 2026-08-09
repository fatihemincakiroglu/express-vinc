import CategoryPage from "@/components/pages/CategoryPage";
import { CAT_CONTENT } from "@/lib/cat-content";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "de", key: "cat1",
  title: CAT_CONTENT[1].meta.de.t, description: CAT_CONTENT[1].meta.de.d,
});

export default function Page() {
  return <CategoryPage lang="de" cat={1} />;
}
