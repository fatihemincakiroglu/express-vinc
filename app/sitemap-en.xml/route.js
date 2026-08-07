import { renderUrlset, XML_HEADERS } from "@/lib/sitemaps";
export const dynamic = "force-static";
export function GET() {
  return new Response(renderUrlset("en"), { headers: XML_HEADERS });
}
