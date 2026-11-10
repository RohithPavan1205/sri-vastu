import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { getServices, telLink, trackContactAction, whatsappLink } from "@/lib/content";
import { siteSettings } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageMeta(
      "Interior Design Services in Hyderabad",
      "Explore residential interiors, modular kitchens, renovations, furniture and commercial interior design services in Hyderabad.",
      "/services",
    ),
  component: ServicesPage,
});

function ServicesPage() {
  const services = getServices();
  const message = "Hello Sri Vastu Interiors, I'd like to discuss my interior requirements.";

  return (
    <>
      <section className="container-editorial pb-14 pt-36 md:pb-20 md:pt-48">
        <p className="eyebrow text-clay">Our services</p>
        <div className="mt-7 grid gap-8 md:grid-cols-12 md:items-end">
          <h1 className="display text-5xl md:col-span-8 md:text-8xl">
            Everything your
            <br />
            space needs.
          </h1>
          <p className="max-w-md leading-relaxed text-muted-foreground md:col-span-4">
            Complete interior solutions for homes, offices and commercial spaces across Hyderabad.
          </p>
        </div>
      </section>

      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid gap-px overflow-hidden border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="group relative min-h-[310px] overflow-hidden bg-ink text-ivory sm:min-h-[340px]"
            >
              <img
                src={service.image}
                alt={`${service.title} design inspiration`}
                loading={index < 4 ? "eager" : "lazy"}
                className="img-zoom absolute inset-0 h-full w-full object-cover opacity-75 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
                <div>
                  <p className="eyebrow text-ivory/65">0{index + 1}</p>
                  <h2 className="mt-2 font-serif text-3xl leading-none">{service.title}</h2>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center border border-ivory/60 transition-colors group-hover:bg-ivory group-hover:text-ink">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-stone">
        <div className="container-editorial grid gap-8 py-16 md:grid-cols-12 md:items-end md:py-24">
          <div className="md:col-span-7">
            <p className="eyebrow text-clay">Start with a conversation</p>
            <h2 className="mt-5 font-serif text-4xl leading-none md:text-6xl">
              Not sure what your
              <br />
              space needs?
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="leading-relaxed text-muted-foreground">
              Tell us about the room, your priorities and the changes you&apos;re considering.
              We&apos;ll help you identify a useful next step.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                onClick={() => trackContactAction("call", "All services")}
                className="btn-primary"
                href={telLink(siteSettings.phone)}
              >
                Call now <span aria-hidden>→</span>
              </a>
              <a
                onClick={() => trackContactAction("whatsapp", "All services")}
                className="btn-outline"
                href={whatsappLink(siteSettings.whatsapp, message)}
                target={siteSettings.whatsapp ? "_blank" : undefined}
                rel={siteSettings.whatsapp ? "noreferrer" : undefined}
              >
                WhatsApp us <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
