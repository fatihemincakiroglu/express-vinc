import BrandPage from "@/components/pages/BrandPage";
import { BRANDS, brandSlug, brandFromSlug } from "@/lib/products";
import { makeMeta } from "@/lib/seo";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: brandSlug(b) }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const brand = brandFromSlug(params.slug);
  if (!brand) return {};
  const title = `${brand} Lift & Platform Models | Express Vinc`;
  const desc = `${brand} models for rent in Istanbul. Daily, weekly and monthly rental.`;
  return makeMeta({ lang: "en", key: "brands", title, description: desc, subSlug: params.slug });
}

export default async function Page(props) {
  const params = await props.params;
  const brand = brandFromSlug(params.slug);
  if (!brand) notFound();
  return <BrandPage lang="en" brand={brand} />;
}
