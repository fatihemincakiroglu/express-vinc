import WhyUsPage from "@/components/pages/WhyUsPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "tr", key: "whyus",
  title: T.tr.meta.whyus.t, description: T.tr.meta.whyus.d,
});

export default function Page() {
  return <WhyUsPage lang="tr" />;
}
