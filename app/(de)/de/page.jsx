import HomePage from "@/components/pages/HomePage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "de", key: "home",
  title: T.de.meta.home.t, description: T.de.meta.home.d,
});

export default function Page() {
  return <HomePage lang="de" />;
}
