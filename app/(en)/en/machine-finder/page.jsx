import { Suspense } from "react";
import FinderResults from "@/components/FinderResults";
import Breadcrumb from "@/components/Breadcrumb";
import { T } from "@/lib/i18n";
import { r } from "@/lib/routes";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "en", key: "finder",
  title: T.en.meta.finder.t, description: T.en.meta.finder.d,
});

export default function Page() {
  return (
    <>
      <Breadcrumb lang="en" title={T.en.quote.finderTitle} items={[{ label: T.en.quote.finderTitle, href: r("en", "finder") }]} />
      <Suspense>
        <FinderResults lang="en" />
      </Suspense>
    </>
  );
}
