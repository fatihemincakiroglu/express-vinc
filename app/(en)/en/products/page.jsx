import ProductsPage from "@/components/pages/ProductsPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "en", key: "products",
  title: T.en.meta.products.t, description: T.en.meta.products.d,
});

export default function Page() {
  return <ProductsPage lang="en" />;
}
