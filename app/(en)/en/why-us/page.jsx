import WhyUsPage from "@/components/pages/WhyUsPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "en", key: "whyus",
  title: T.en.meta.whyus.t, description: T.en.meta.whyus.d,
});

export default function Page() {
  return <WhyUsPage lang="en" />;
}
