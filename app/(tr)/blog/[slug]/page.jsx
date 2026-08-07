import BlogPostPage from "@/components/pages/BlogPostPage";
import { notFound } from "next/navigation";
import { POSTS, getPost } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";
import { blogPostPath } from "@/lib/routes";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slugs["tr"] }));
}

const abs = (p) => (p === "/" ? SITE_URL : SITE_URL + p);

export function generateMetadata({ params }) {
  const post = getPost("tr", params.slug);
  if (!post) return {};
  const c = post["tr"];
  return {
    title: `${c.title} | Express Vinç Blog`,
    description: c.excerpt,
    alternates: {
      canonical: abs(blogPostPath("tr", post)),
      languages: {
        tr: abs(blogPostPath("tr", post)),
        en: abs(blogPostPath("en", post)),
        de: abs(blogPostPath("de", post)),
        "x-default": abs(blogPostPath("tr", post)),
      },
    },
  };
}

export default function Page({ params }) {
  const post = getPost("tr", params.slug);
  if (!post) notFound();
  return <BlogPostPage lang="tr" post={post} />;
}
