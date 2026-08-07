import ServicesPage from "@/components/pages/ServicesPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "tr", key: "services",
  title: T.tr.meta.services.t, description: T.tr.meta.services.d,
});

export default function Page() {
  return <ServicesPage lang="tr" />;
}
