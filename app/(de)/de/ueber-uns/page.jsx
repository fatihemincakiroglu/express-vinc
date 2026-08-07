import AboutPage from "@/components/pages/AboutPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "de", key: "about",
  title: T.de.meta.about.t, description: T.de.meta.about.d,
});

export default function Page() {
  return <AboutPage lang="de" />;
}
