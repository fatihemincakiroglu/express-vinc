import BrandsPage from "@/components/pages/BrandsPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "en", key: "brands",
  title: T.en.meta.brands.t, description: T.en.meta.brands.d,
});

export default function Page() {
  return <BrandsPage lang="en" />;
}
