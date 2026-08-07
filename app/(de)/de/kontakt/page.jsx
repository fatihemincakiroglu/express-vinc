import ContactPage from "@/components/pages/ContactPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "de", key: "contact",
  title: T.de.meta.contact.t, description: T.de.meta.contact.d,
});

export default function Page() {
  return <ContactPage lang="de" />;
}
