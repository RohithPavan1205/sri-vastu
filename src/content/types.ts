// Content shapes mirror future CMS tables (site_settings, services, projects, testimonials).
export interface SiteSettings {
  businessName: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string; // digits only, with country code
  email: string;
  address: string;
  city: string;
  region: string;
  mapsUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
  footerNote: string;
  siteUrl: string;
}

export interface HeroContent {
  headline: string[];
  subtitle: string;
  location: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  image: string;
  provides: string[];
  approach: string;
  faqs: { q: string; a: string }[];
  relatedProjectSlugs: string[];
  gallery: GalleryImage[];
  designCategories: string[];
  materials: { title: string; text: string }[];
  seoTitle: string;
  seoDescription: string;
  order: number;
  active: boolean;
}

/**
 * The model is deliberately explicit about provenance so new inspiration imagery
 * can be reviewed before it is treated as production-ready.
 */
export interface GalleryImage {
  id: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  category: string;
  style: string;
  source: "Existing site asset" | "Licensed stock" | "Client supplied";
  sourceUrl?: string;
  licence?: string;
  approvalStatus: "existing" | "approved" | "pending-review";
}

export interface ProjectSpace {
  name: string;
  text: string;
  image: string;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  type: string;
  category: string;
  year: string;
  area: string;
  summary: string;
  description: string;
  story: string;
  cover: string;
  gallery: string[];
  spaces: ProjectSpace[];
  materials: string[];
  highlights: string[];
  testimonialId?: string;
  featured: boolean;
  order: number;
}

export interface Testimonial {
  id: string;
  clientName: string;
  quote: string;
  projectName: string;
  order: number;
  active: boolean;
}

export interface Principle {
  title: string;
  text: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  text: string;
}

export interface MaterialSwatch {
  name: string;
  description: string;
  swatch: string; // hex color
}
