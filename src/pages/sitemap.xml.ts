import type { APIRoute } from "astro";
import { site } from "../data/site";
import { pages } from "../data/pages";

export const GET: APIRoute = () => {
  const urls = pages
    .map(
      (p) => `  <url>
    <loc>${new URL(p.path, site.url).toString()}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
};
