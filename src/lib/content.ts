// Content access layer. Components read only through these functions, so the
// seed data in src/content can later be swapped for database reads.
import { projects, services, testimonials } from "@/content/site";

export const getProjects = () => [...projects].sort((a, b) => a.order - b.order);
export const getFeaturedProject = () => getProjects().find((p) => p.featured) ?? projects[0];
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const getServices = () => services.filter((s) => s.active).sort((a, b) => a.order - b.order);
export const getService = (slug: string) => services.find((s) => s.slug === slug && s.active);
export const getTestimonials = () =>
  testimonials.filter((t) => t.active).sort((a, b) => a.order - b.order);
export const getTestimonial = (id?: string) => testimonials.find((t) => t.id === id);
export const getProjectsBySlugs = (slugs: string[]) =>
  slugs.map((s) => getProject(s)).filter((p): p is NonNullable<typeof p> => Boolean(p));

export const whatsappLink = (number: string, text = "Hello, I'd like to discuss a project.") =>
  number ? `https://wa.me/${number}?text=${encodeURIComponent(text)}` : "/contact#enquiry";

export const telLink = (number: string) =>
  number ? `tel:${number.replace(/\s/g, "")}` : "/contact#enquiry";

/** Lightweight, provider-agnostic conversion event for analytics integrations. */
export function trackContactAction(
  action: "call" | "whatsapp" | "gallery-enquiry" | "enquiry",
  context: string,
) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("sri-vastu:contact-action", { detail: { action, context } }),
  );
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", "contact_click", { contact_method: action, service_context: context });
}
