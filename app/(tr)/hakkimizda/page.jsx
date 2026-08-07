import AboutPage from "@/components/pages/AboutPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "tr", key: "about",
  title: T.tr.meta.about.t, description: T.tr.meta.about.d,
});

export default function Page() {
  return <AboutPage lang="tr" />;
}
