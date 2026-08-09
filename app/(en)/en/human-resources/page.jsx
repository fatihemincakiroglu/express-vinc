import HRPage from "@/components/pages/HRPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "en", key: "hr",
  title: T.en.meta.hr.t, description: T.en.meta.hr.d,
});

export default function Page() {
  return <HRPage lang="en" />;
}
