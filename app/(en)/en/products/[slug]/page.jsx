import ProductDetailPage from "@/components/pages/ProductDetailPage";
import { notFound } from "next/navigation";
import { PRODUCTS, getProduct } from "@/lib/products";
import { SITE_URL } from "@/lib/site";
import { productPath } from "@/lib/routes";
import { T } from "@/lib/i18n";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

const abs = (p) => (p === "/" ? SITE_URL : SITE_URL + p);

export function generateMetadata({ params }) {
  const product = getProduct(params.slug);
  if (!product) return {};
  const catName = T.en.cats[product.cat];
  return {
    title: `${product.model} | ${catName} | Express Vinç`,
    description: `${product.model} — ${product.h} m, ${catName}. ${T.en.prodPage.rentPeriods}.`,
    alternates: {
      canonical: abs(productPath("en", product)),
      languages: {
        tr: abs(productPath("tr", product)),
        en: abs(productPath("en", product)),
        de: abs(productPath("de", product)),
        "x-default": abs(productPath("tr", product)),
      },
    },
  };
}

export default function Page({ params }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  return <ProductDetailPage lang="en" product={product} />;
}
