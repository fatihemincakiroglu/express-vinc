import ServicesPage from "@/components/pages/ServicesPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "de", key: "services",
  title: T.de.meta.services.t, description: T.de.meta.services.d,
});

export default function Page() {
  return <ServicesPage lang="de" />;
}
