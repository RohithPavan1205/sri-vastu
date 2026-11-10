import { siteSettings } from "@/content/site";

export function pageMeta(title: string, description: string, path = "/") {
  const full = `${title} — ${siteSettings.businessName}`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteSettings.siteUrl}${path}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: full },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${siteSettings.siteUrl}${path}` }],
  };
}

export function jsonLdScript(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

export const localBusinessLd = () => ({
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  name: siteSettings.businessName,
  description: siteSettings.description,
  url: siteSettings.siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteSettings.address,
    addressLocality: siteSettings.city,
    addressRegion: siteSettings.region,
    addressCountry: "IN",
  },
  areaServed: ["Hyderabad", "Telangana"],
  ...(siteSettings.phone ? { telephone: siteSettings.phone } : {}),
  ...(siteSettings.email ? { email: siteSettings.email } : {}),
  ...(siteSettings.instagramUrl || siteSettings.facebookUrl || siteSettings.youtubeUrl
    ? {
        sameAs: [
          siteSettings.instagramUrl,
          siteSettings.facebookUrl,
          siteSettings.youtubeUrl,
        ].filter(Boolean),
      }
    : {}),
});
