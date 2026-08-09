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
  const title = `${brand} Vinç & Platform Modelleri | Express Vinç`;
  const desc = `${brand} modellerini İstanbul'da kiralayın. Günlük, haftalık, aylık kiralama ve operatörlü hizmet.`;
  return makeMeta({ lang: "tr", key: "brands", title, description: desc, subSlug: params.slug });
}

export default function Page({ params }) {
  const brand = brandFromSlug(params.slug);
  if (!brand) notFound();
  return <BrandPage lang="tr" brand={brand} />;
}
