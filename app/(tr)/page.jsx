import HomePage from "@/components/pages/HomePage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "tr", key: "home",
  title: T.tr.meta.home.t, description: T.tr.meta.home.d,
});

export default function Page() {
  return <HomePage lang="tr" />;
}
