import { createFileRoute, Link } from "@tanstack/react-router";
import { images, siteSettings } from "@/content/site";
import { getServices, telLink, trackContactAction, whatsappLink } from "@/lib/content";
import { jsonLdScript, pageMeta } from "@/lib/seo";

const steps = [
  [
    "01",
    "Initial conversation",
    "We start by understanding your requirements, the type of space, your preferences and the budget range you have in mind.",
  ],
  [
    "02",
    "Site visit & assessment",
    "Where applicable, we review the space, measurements, existing conditions and practical requirements before suggesting a direction.",
  ],
  [
    "03",
    "Design & material discussion",
    "We discuss suitable layouts, finishes, materials and possible solutions that fit the way the space will be used.",
  ],
  [
    "04",
    "Quotation & approval",
    "The proposed scope, cost considerations and execution requirements are discussed before work moves ahead with your approval.",
  ],
  [
    "05",
    "Execution",
    "The agreed work is carried out in stages, with communication around the selected scope and site requirements.",
  ],
  [
    "06",
    "Final handover",
    "Once the agreed work is complete, the finished space is reviewed and handed over.",
  ],
];

export const Route = createFileRoute("/how-we-work")({
  head: () => ({
    ...pageMeta(
      "Interior Design Process in Hyderabad",
      "Understand how Sri Vastu Interiors approaches interior design planning, material discussions and execution in Hyderabad.",
      "/how-we-work",
    ),
    scripts: [
      jsonLdScript({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteSettings.siteUrl}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "How We Work",
            item: `${siteSettings.siteUrl}/how-we-work`,
          },
        ],
      }),
    ],
  }),
  component: HowWeWork,
});

function HowWeWork() {
  const message =
    "Hello Sri Vastu Interiors, I would like to understand the process for my interior project.";
  const services = getServices();
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-ivory">
        <img
          src={images.studio}
          alt="Interior material samples and a warm workspace"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/20" />
        <div className="container-editorial pb-20 pt-28 md:pb-28 md:pt-36">
          <nav aria-label="Breadcrumb" className="eyebrow flex gap-2 text-ivory/70">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>How we work</span>
          </nav>
          <div className="mt-14 grid gap-9 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="eyebrow text-[#c5cc9d]">Our process</p>
              <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[.93] md:text-7xl">
                From your first idea to a space you love.
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="leading-relaxed text-ivory/75">
                Every space starts with an idea. We make the journey easier through thoughtful
                planning, clear communication and careful execution.
              </p>
              <Link to="/contact" className="btn-outline mt-7">
                Enquire now <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-editorial grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <p className="eyebrow text-clay">A clear journey</p>
          <h2 className="mt-5 font-serif text-4xl leading-none md:text-5xl">
            The conversations that shape a space.
          </h2>
        </div>
        <p className="max-w-xl leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
          Each project is different, so the exact scope and sequence can vary. These are the typical
          stages we discuss to move from an early idea to a well-considered interior.
        </p>
      </section>

      <section className="bg-stone">
        <div className="container-editorial py-20 md:py-28">
          <ol className="border-t border-ink/15">
            {steps.map(([number, title, text]) => (
              <li
                key={number}
                className="grid gap-5 border-b border-ink/15 py-8 md:grid-cols-12 md:gap-10 md:py-10"
              >
                <p className="font-serif text-5xl text-clay md:col-span-2">{number}</p>
                <h2 className="font-serif text-3xl leading-none md:col-span-4 md:text-4xl">
                  {title}
                </h2>
                <p className="max-w-xl leading-relaxed text-muted-foreground md:col-span-5">
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-editorial grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <p className="eyebrow text-clay">Before we begin</p>
          <h2 className="mt-5 font-serif text-4xl leading-none md:text-5xl">
            What&apos;s useful to share.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="max-w-xl leading-relaxed text-muted-foreground">
            You don&apos;t need every detail before contacting us. The following information can
            simply make the first conversation more productive.
          </p>
          <ul className="mt-8 border-t border-ink/15">
            {[
              "The type of space you have",
              "Approximate area or measurements, if available",
              "Your preferred design style or reference photographs",
              "Budget expectations or a range",
              "Specific storage, layout or use requirements",
            ].map((item, index) => (
              <li key={item} className="flex gap-5 border-b border-ink/15 py-4">
                <span className="font-serif text-clay">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-serif text-2xl">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-stone">
        <div className="container-editorial grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-4">
            <p className="eyebrow text-clay">What you can expect</p>
            <h2 className="mt-5 font-serif text-4xl leading-none md:text-5xl">
              A process built around your requirements.
            </h2>
          </div>
          <div className="grid gap-px border border-ink/15 bg-ink/15 md:col-span-7 md:col-start-6">
            {[
              [
                "Listen carefully",
                "Your needs, routines and preferences form the basis of the discussion.",
              ],
              [
                "Balance function and feeling",
                "Planning considers practical use as well as the atmosphere you want the space to have.",
              ],
              [
                "Discuss choices clearly",
                "Materials, layouts and design options are considered in relation to the scope and your priorities.",
              ],
              [
                "Explain the scope",
                "Costs and execution requirements are discussed before any agreed work moves ahead.",
              ],
              [
                "Keep your preferences in view",
                "Your feedback is part of arriving at a direction that feels appropriate for your space.",
              ],
            ].map(([title, text], index) => (
              <article key={title} className="bg-background p-6 md:p-7">
                <p className="eyebrow text-clay">0{index + 1}</p>
                <h3 className="mt-5 font-serif text-3xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <p className="eyebrow text-clay">Explore services</p>
          <h2 className="mt-5 font-serif text-4xl leading-none md:text-5xl">
            Start with the space you&apos;re thinking about.
          </h2>
        </div>
        <div className="flex flex-wrap content-start gap-x-5 gap-y-3 md:col-span-7 md:col-start-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="eyebrow link-underline pb-1"
            >
              {service.title} →
            </Link>
          ))}
        </div>
      </section>

      <ProcessFaq />

      <section className="bg-ink text-ivory">
        <div className="container-editorial flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-end md:py-20">
          <div>
            <p className="eyebrow text-ivory/65">Start with a conversation</p>
            <h2 className="mt-5 font-serif text-5xl leading-none">
              Ready to start planning
              <br />
              your space?
            </h2>
            <p className="mt-5 max-w-lg text-ivory/70">
              Tell us what you&apos;re considering, and we&apos;ll help you discuss a useful
              direction.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              onClick={() => trackContactAction("call", "How we work final CTA")}
              href={telLink(siteSettings.phone)}
              className="btn-outline"
            >
              Call now <span aria-hidden>→</span>
            </a>
            <a
              onClick={() => trackContactAction("whatsapp", "How we work final CTA")}
              href={whatsappLink(siteSettings.whatsapp, message)}
              target={siteSettings.whatsapp ? "_blank" : undefined}
              rel={siteSettings.whatsapp ? "noreferrer" : undefined}
              className="eyebrow bg-ivory px-6 py-4 text-ink"
            >
              WhatsApp us <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ProcessFaq() {
  const faqs = [
    [
      "How do I start an interior project?",
      "Call, WhatsApp or send an enquiry with a few details about your space and the changes you are considering.",
    ],
    [
      "Can you undertake an individual room?",
      "Yes. The scope can focus on one room, several spaces or a broader interior requirement depending on what you need.",
    ],
    [
      "Can I share inspiration images?",
      "Yes. Reference photographs are useful for explaining the kinds of materials, colours or layouts you are drawn to.",
    ],
    [
      "How are materials selected?",
      "Material options are discussed in relation to the space, intended use, maintenance needs and the visual direction you prefer.",
    ],
    [
      "How are quotations prepared?",
      "The proposed scope and execution requirements are discussed before a quotation can be considered.",
    ],
    [
      "Do you accept residential and commercial requirements?",
      "Sri Vastu Interiors discusses both residential and commercial interior requirements across Hyderabad and nearby areas.",
    ],
  ];
  return (
    <section className="bg-stone">
      <div className="container-editorial grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <p className="eyebrow text-clay">Questions</p>
          <h2 className="mt-5 font-serif text-4xl leading-none md:text-5xl">Process FAQs.</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group border-t border-ink/15 py-5 last:border-b">
              <summary className="flex cursor-pointer list-none justify-between gap-5 font-serif text-2xl">
                <span>{question}</span>
                <span className="eyebrow transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
