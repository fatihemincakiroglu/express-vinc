import { renderIndex, XML_HEADERS } from "@/lib/sitemaps";
export const dynamic = "force-static";
export function GET() {
  return new Response(renderIndex(), { headers: XML_HEADERS });
}
