import ContactPage from "@/components/pages/ContactPage";
import { T } from "@/lib/i18n";
import { makeMeta } from "@/lib/seo";

export const metadata = makeMeta({
  lang: "en", key: "contact",
  title: T.en.meta.contact.t, description: T.en.meta.contact.d,
});

export default function Page() {
  return <ContactPage lang="en" />;
}
