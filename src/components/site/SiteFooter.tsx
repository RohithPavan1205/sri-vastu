import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import footerVase from "@/assets/footer-vase.png";
import { siteSettings } from "@/content/site";
import { getServices, telLink, whatsappLink } from "@/lib/content";
import { WhatsAppIcon } from "@/components/site/SriVastuLogo";

export function SiteFooter() {
  const s = siteSettings;
  const services = getServices();
  const whatsappHref = whatsappLink(s.whatsapp);
  const hasWhatsApp = Boolean(s.whatsapp);
  const socialLinks = [
    { label: "Instagram", href: s.instagramUrl },
    { label: "Facebook", href: s.facebookUrl },
    { label: "YouTube", href: s.youtubeUrl },
  ].filter((link) => link.href);

  return (
    <footer className="overflow-hidden bg-[#211a14] text-[#f7efe3]">
      {/* Final CTA */}
      <section className="relative isolate overflow-hidden border-b border-[#d5bc8a]/35">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_40%,rgba(151,112,69,0.17),transparent_28%)]"
          aria-hidden="true"
        />
        <div className="container-editorial relative py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <p className="eyebrow font-semibold text-[#ddbd80]">Let&apos;s create your space</p>
              <span className="h-px w-20 bg-[#d5bc8a]/60" aria-hidden="true" />
            </div>
            <h2 className="mt-7 max-w-4xl font-serif text-4xl leading-[1.06] tracking-tight text-[#f7efe3] sm:text-5xl lg:text-6xl">
              {s.footerNote}
            </h2>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="eyebrow inline-flex items-center gap-3 rounded-sm bg-[#f4e8d5] px-6 py-4 font-semibold text-[#211a14] transition-colors hover:bg-[#ddbd80]"
              >
                Start a project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={whatsappHref}
                target={hasWhatsApp ? "_blank" : undefined}
                rel={hasWhatsApp ? "noreferrer" : undefined}
                className="eyebrow inline-flex items-center gap-3 rounded-sm border border-[#e6d2ad]/70 px-6 py-4 font-semibold text-[#f7efe3] transition-colors hover:bg-[#f7efe3]/10"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <img
            src={footerVase}
            alt=""
            loading="lazy"
            className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden h-full w-[48%] object-cover object-right lg:block"
          />
        </div>
      </section>

      {/* Footer content */}
      <section className="container-editorial py-14 sm:py-16 lg:py-20">
        <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-x-10 xl:grid-cols-12 xl:gap-x-0">
          <div className="sm:col-span-2 xl:col-span-4 xl:pr-12">
            <p className="font-serif text-4xl leading-none tracking-tight text-[#f7efe3]">
              {s.businessName}
            </p>
            <p className="eyebrow mt-4 text-[#dfc897]">{s.tagline}</p>
            <p className="mt-7 max-w-xs text-sm leading-relaxed text-[#f7efe3]/75 sm:text-base">
              {s.description}
            </p>
            {socialLinks.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="eyebrow text-[#f7efe3]/75 transition-colors hover:text-[#dfc897]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-[#d5bc8a]/30 pt-8 sm:col-span-1 xl:col-span-2 xl:border-l xl:border-t-0 xl:px-10 xl:pt-0">
            <p className="eyebrow font-semibold text-[#ddbd80]">Explore</p>
            <nav className="mt-5" aria-label="Footer navigation">
              <ul className="space-y-3 text-base text-[#f7efe3]/85">
                <li>
                  <Link to="/" className="transition-colors hover:text-[#ddbd80]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="transition-colors hover:text-[#ddbd80]">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="transition-colors hover:text-[#ddbd80]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="transition-colors hover:text-[#ddbd80]">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="border-t border-[#d5bc8a]/30 pt-8 sm:col-span-1 xl:col-span-3 xl:border-l xl:border-t-0 xl:px-10 xl:pt-0">
            <p className="eyebrow font-semibold text-[#ddbd80]">Our services</p>
            <ul className="mt-5 space-y-2 text-sm leading-snug text-[#f7efe3]/85 sm:text-base">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="transition-colors hover:text-[#ddbd80]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[#d5bc8a]/30 pt-8 sm:col-span-1 xl:col-span-3 xl:border-l xl:border-t-0 xl:px-10 xl:pt-0">
            <p className="eyebrow font-semibold text-[#ddbd80]">Get in touch</p>
            <ul className="mt-5 space-y-4 text-base text-[#f7efe3]/85">
              <li>
                <a
                  href={telLink(s.phone)}
                  className="flex items-center gap-3 transition-colors hover:text-[#ddbd80]"
                >
                  <Phone className="h-5 w-5 shrink-0 text-[#dfc897]" strokeWidth={1.7} />
                  Call Now
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target={hasWhatsApp ? "_blank" : undefined}
                  rel={hasWhatsApp ? "noreferrer" : undefined}
                  className="flex items-center gap-3 transition-colors hover:text-[#ddbd80]"
                >
                  <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#dfc897]" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={s.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-[#ddbd80]"
                >
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#dfc897]" strokeWidth={1.7} />
                  <span>
                    {s.city}, {s.region}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-[#d5bc8a]/40">
        <div className="container-editorial flex flex-col justify-between gap-2 py-6 text-xs text-[#f7efe3]/70 sm:flex-row sm:text-sm">
          <p>
            © {new Date().getFullYear()} {s.businessName}. All rights reserved.
          </p>
          <p>
            {s.city} · {s.region}
          </p>
        </div>
      </div>
    </footer>
  );
}
