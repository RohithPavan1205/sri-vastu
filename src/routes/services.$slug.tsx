import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getService, telLink, trackContactAction, whatsappLink } from "@/lib/content";
import { siteSettings } from "@/content/site";
import { InspirationGallery } from "@/components/site/InspirationGallery";
import { jsonLdScript, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData)
      return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    const service = loaderData.service;
    return {
      ...pageMeta(service.seoTitle, service.seoDescription, `/services/${params.slug}`),
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-editorial py-48 text-center">
      <h1 className="font-serif text-5xl">Service not found</h1>
      <Link to="/services" className="eyebrow link-underline mt-8 inline-block pb-1">
        All services →
      </Link>
    </div>
  ),
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const message = `Hello Sri Vastu Interiors, I'd like to discuss ${service.title.toLowerCase()} for my space.`;
  const isResidential = service.slug === "residential-interiors";

  return (
    <>
      <section className="container-editorial pt-28 md:pt-32">
        <nav aria-label="Breadcrumb" className="eyebrow flex flex-wrap gap-2 text-muted-foreground">
          <Link to="/">Home</Link>
          <span aria-hidden> / </span>
          <Link to="/services">Services</Link>
          <span aria-hidden> / </span>
          <span className="text-foreground">{service.title}</span>
        </nav>
        <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="pb-2 lg:col-span-5">
            <p className="eyebrow text-clay">Interior solutions in Hyderabad</p>
            <h1 className="mt-5 font-serif text-5xl leading-[.93] md:text-7xl">{service.title}</h1>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">{service.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                onClick={() => trackContactAction("call", service.title)}
                href={telLink(siteSettings.phone)}
                className="btn-primary"
              >
                Call now <span aria-hidden>→</span>
              </a>
              <a
                onClick={() => trackContactAction("whatsapp", service.title)}
                href={whatsappLink(siteSettings.whatsapp, message)}
                target={siteSettings.whatsapp ? "_blank" : undefined}
                rel={siteSettings.whatsapp ? "noreferrer" : undefined}
                className="btn-outline"
              >
                WhatsApp us <span aria-hidden>→</span>
              </a>
            </div>
          </div>
          <div className="overflow-hidden lg:col-span-6 lg:col-start-7">
            <img
              src={service.image}
              alt={`${service.title} design inspiration`}
              fetchPriority="high"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-editorial grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <p className="eyebrow text-clay md:col-span-3">Designed around real life</p>
        <p className="font-serif text-3xl leading-snug md:col-span-8 md:text-4xl">
          {service.intro}
        </p>
      </section>

      {isResidential && <RoomDiscovery />}

      <InspirationGallery service={service.title} items={service.gallery} />

      <section className="container-editorial grid gap-14 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-4">
          <p className="eyebrow text-clay">Materials & customisation</p>
          <h2 className="mt-5 font-serif text-4xl leading-none md:text-5xl">
            Details that fit the way you live.
          </h2>
        </div>
        <div className="grid gap-px border border-ink/15 bg-ink/15 md:col-span-7 md:col-start-6">
          {service.materials.map((item, index) => (
            <article key={item.title} className="bg-background p-6 md:p-7">
              <p className="eyebrow text-clay">0{index + 1}</p>
              <h3 className="mt-5 font-serif text-3xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-stone">
        <div className="container-editorial grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-4">
            <p className="eyebrow text-clay">What we can help with</p>
            <h2 className="mt-5 font-serif text-4xl leading-none md:text-5xl">
              A useful scope, clearly defined.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="max-w-xl leading-relaxed text-muted-foreground">{service.approach}</p>
            <ul className="mt-8 border-t border-ink/15">
              {service.provides.map((item, index) => (
                <li key={item} className="flex gap-5 border-b border-ink/15 py-4">
                  <span className="font-serif text-clay">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-serif text-2xl">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-editorial grid gap-10 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-4">
          <p className="eyebrow text-clay">Questions</p>
          <h2 className="mt-5 font-serif text-4xl leading-none md:text-5xl">Frequently asked.</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          {service.faqs.map((faq) => (
            <details key={faq.q} className="group border-t border-ink/15 py-5 last:border-b">
              <summary className="flex cursor-pointer list-none justify-between gap-6 font-serif text-2xl">
                {faq.q}
                <span className="eyebrow transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-ink text-ivory">
        <div className="container-editorial grid gap-9 py-20 md:grid-cols-12 md:items-end md:py-28">
          <div className="md:col-span-7">
            <p className="eyebrow text-ivory/65">Let&apos;s talk through it</p>
            <h2 className="mt-5 font-serif text-5xl leading-none md:text-7xl">
              Have a design
              <br />
              in mind?
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="leading-relaxed text-ivory/70">
              Bring your ideas, room dimensions or inspiration references. We&apos;ll help you
              discuss a practical direction for your space.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                onClick={() => trackContactAction("call", service.title)}
                href={telLink(siteSettings.phone)}
                className="btn-outline"
              >
                Call now <span aria-hidden>→</span>
              </a>
              <a
                onClick={() => trackContactAction("whatsapp", service.title)}
                href={whatsappLink(siteSettings.whatsapp, message)}
                target={siteSettings.whatsapp ? "_blank" : undefined}
                rel={siteSettings.whatsapp ? "noreferrer" : undefined}
                className="eyebrow border border-ivory bg-ivory px-6 py-4 text-ink"
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

function RoomDiscovery() {
  return (
    <section className="border-y border-ink/15 bg-stone">
      <div className="container-editorial grid gap-8 py-14 md:grid-cols-12 md:items-end">
        <div className="md:col-span-6">
          <p className="eyebrow text-clay">Explore by room</p>
          <h2 className="mt-4 font-serif text-4xl leading-none md:text-5xl">
            Start where home happens.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9">
          Browse dedicated inspiration for the rooms most people want to get right first.
        </p>
        <div className="flex flex-wrap gap-3 md:col-span-12">
          <Link
            to="/services/residential-interiors/$room"
            params={{ room: "bedroom-interiors" }}
            className="btn-primary"
          >
            Bedroom interiors <span aria-hidden>→</span>
          </Link>
          <Link
            to="/services/residential-interiors/$room"
            params={{ room: "living-room-interiors" }}
            className="btn-outline"
          >
            Living room interiors <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
