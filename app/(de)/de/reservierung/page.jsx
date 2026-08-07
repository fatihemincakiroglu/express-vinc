import ReservationPage from "@/components/pages/ReservationPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "de", key: "reservation",
  title: T.de.meta.rez.t, description: T.de.meta.rez.d,
});

export default function Page() {
  return <ReservationPage lang="de" />;
}
