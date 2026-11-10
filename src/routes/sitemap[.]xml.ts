import { createFileRoute } from "@tanstack/react-router";
import { siteSettings } from "@/content/site";
import { getServices } from "@/lib/content";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          "/",
          "/about",
          "/services",
          "/how-we-work",
          "/contact",
          ...getServices().map((s) => `/services/${s.slug}`),
          "/services/residential-interiors/bedroom-interiors",
          "/services/residential-interiors/living-room-interiors",
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths
          .map((p) => `<url><loc>${siteSettings.siteUrl}${p}</loc></url>`)
          .join("")}</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
