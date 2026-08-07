import LayoutShell from "@/components/LayoutShell";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({ children }) {
  return <LayoutShell lang="de">{children}</LayoutShell>;
}
