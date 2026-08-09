import HRPage from "@/components/pages/HRPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "tr", key: "hr",
  title: T.tr.meta.hr.t, description: T.tr.meta.hr.d,
});

export default function Page() {
  return <HRPage lang="tr" />;
}
