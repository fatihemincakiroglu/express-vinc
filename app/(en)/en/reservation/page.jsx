import ReservationPage from "@/components/pages/ReservationPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "en", key: "reservation",
  title: T.en.meta.rez.t, description: T.en.meta.rez.d,
});

export default function Page() {
  return <ReservationPage lang="en" />;
}
