import BrandsPage from "@/components/pages/BrandsPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "de", key: "brands",
  title: T.de.meta.brands.t, description: T.de.meta.brands.d,
});

export default function Page() {
  return <BrandsPage lang="de" />;
}
