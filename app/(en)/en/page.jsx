import HomePage from "@/components/pages/HomePage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "en", key: "home",
  title: T.en.meta.home.t, description: T.en.meta.home.d,
});

export default function Page() {
  return <HomePage lang="en" />;
}
