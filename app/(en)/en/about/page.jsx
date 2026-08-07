import AboutPage from "@/components/pages/AboutPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "en", key: "about",
  title: T.en.meta.about.t, description: T.en.meta.about.d,
});

export default function Page() {
  return <AboutPage lang="en" />;
}
