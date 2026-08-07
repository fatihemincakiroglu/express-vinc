import ProductsPage from "@/components/pages/ProductsPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "de", key: "products",
  title: T.de.meta.products.t, description: T.de.meta.products.d,
});

export default function Page() {
  return <ProductsPage lang="de" />;
}
