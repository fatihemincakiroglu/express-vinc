import { Suspense } from "react";
import FinderResults from "@/components/FinderResults";
import Breadcrumb from "@/components/Breadcrumb";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "de", key: "finder",
  title: T.de.meta.finder.t, description: T.de.meta.finder.d,
});

export default function Page() {
  return (
    <>
      <Breadcrumb lang="de" title={T.de.quote.finderTitle} items={[{ label: T.de.quote.finderTitle, href: r("de", "finder") }]} />
      <Suspense>
        <FinderResults lang="de" />
      </Suspense>
    </>
  );
}
