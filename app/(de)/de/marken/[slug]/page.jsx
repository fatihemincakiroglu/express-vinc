import BrandPage from "@/components/pages/BrandPage";
import { BRANDS, brandSlug, brandFromSlug } from "@/lib/products";
import { makeMeta } from "@/lib/seo";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: brandSlug(b) }));
}

export function generateMetadata({ params }) {
  const brand = brandFromSlug(params.slug);
  if (!brand) return {};
  const title = `${brand} Bühnen- & Kranmodelle | Express Vinc`;
  const desc = `${brand} Modelle in Istanbul mieten. Tages-, Wochen- und Monatsmiete.`;
  return makeMeta({ lang: "de", key: "brands", title, description: desc, subSlug: params.slug });
}

export default function Page({ params }) {
  const brand = brandFromSlug(params.slug);
  if (!brand) notFound();
  return <BrandPage lang="de" brand={brand} />;
}
