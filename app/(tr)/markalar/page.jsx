import BrandsPage from "@/components/pages/BrandsPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "tr", key: "brands",
  title: T.tr.meta.brands.t, description: T.tr.meta.brands.d,
});

export default function Page() {
  return <BrandsPage lang="tr" />;
}
