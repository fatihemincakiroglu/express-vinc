import { Suspense } from "react";
import FinderResults from "@/components/FinderResults";
import Breadcrumb from "@/components/Breadcrumb";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "tr", key: "finder",
  title: T.tr.meta.finder.t, description: T.tr.meta.finder.d,
});

export default function Page() {
  return (
    <>
      <Breadcrumb lang="tr" title={T.tr.quote.finderTitle} items={[{ label: T.tr.quote.finderTitle, href: r("tr", "finder") }]} />
      <Suspense>
        <FinderResults lang="tr" />
      </Suspense>
    </>
  );
}
