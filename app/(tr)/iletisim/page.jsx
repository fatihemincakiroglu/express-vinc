import ContactPage from "@/components/pages/ContactPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "tr", key: "contact",
  title: T.tr.meta.contact.t, description: T.tr.meta.contact.d,
});

export default function Page() {
  return <ContactPage lang="tr" />;
}
