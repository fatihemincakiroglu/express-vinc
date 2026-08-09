import WhyUsPage from "@/components/pages/WhyUsPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "de", key: "whyus",
  title: T.de.meta.whyus.t, description: T.de.meta.whyus.d,
});

export default function Page() {
  return <WhyUsPage lang="de" />;
}
