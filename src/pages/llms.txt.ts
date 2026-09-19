import type { APIRoute } from "astro";
import { site, services, towns } from "../data/site";
import { pages } from "../data/pages";

export const GET: APIRoute = () => {
  const lines = [
    `# ${site.name}`,
    "",
    `${site.name} is een tuinaannemer gevestigd in ${site.address.addressLocality} (${site.address.postalCode}, ${site.address.addressRegion}, ${site.address.addressCountry}).`,
    `Diensten: ${services.map((s) => s.navLabel).join(", ")}.`,
    `Werkgebied: ${towns.join(", ")}.`,
    `Contact: telefoon ${site.phone}, e-mail ${site.email}.`,
    `Bereikbaarheid: ${site.openingHoursText}.`,
    "",
    "## Pagina's",
    ...pages.map((p) => `- ${new URL(p.path, site.url).toString()}`),
  ];

  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
