import ServicesPage from "@/components/pages/ServicesPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "en", key: "services",
  title: T.en.meta.services.t, description: T.en.meta.services.d,
});

export default function Page() {
  return <ServicesPage lang="en" />;
}
