import LayoutShell from "@/components/LayoutShell";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  authors: [{ name: "Express Vinç" }],
  creator: "Express Vinç",
  publisher: "Express Vinç",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }) {
  return <LayoutShell lang="en">{children}</LayoutShell>;
}
