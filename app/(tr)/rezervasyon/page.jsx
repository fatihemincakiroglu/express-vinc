import ReservationPage from "@/components/pages/ReservationPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "tr", key: "reservation",
  title: T.tr.meta.rez.t, description: T.tr.meta.rez.d,
});

export default function Page() {
  return <ReservationPage lang="tr" />;
}
