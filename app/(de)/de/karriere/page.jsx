import HRPage from "@/components/pages/HRPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "de", key: "hr",
  title: T.de.meta.hr.t, description: T.de.meta.hr.d,
});

export default function Page() {
  return <HRPage lang="de" />;
}
