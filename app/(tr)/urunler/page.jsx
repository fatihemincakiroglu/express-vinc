import ProductsPage from "@/components/pages/ProductsPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "tr", key: "products",
  title: T.tr.meta.products.t, description: T.tr.meta.products.d,
});

export default function Page() {
  return <ProductsPage lang="tr" />;
}
