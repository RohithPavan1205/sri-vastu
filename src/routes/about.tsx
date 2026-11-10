import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { images, siteSettings } from "@/content/site";
import { telLink, whatsappLink } from "@/lib/content";
import { Eyebrow } from "@/components/site/Editorial";
import { WhatsAppIcon } from "@/components/site/SriVastuLogo";
import { pageMeta } from "@/lib/seo";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const philosophy = [
  {
    number: "01",
    title: "Function Comes First",
    text: "We begin with how a room is used, then shape layouts, storage and details around the routines that matter to you.",
  },
  {
    number: "02",
    title: "Your Style Matters",
    text: "Your preferences help guide the materials, colours and finishes so your space feels personal as well as practical.",
  },
  {
    number: "03",
    title: "Every Budget Deserves Good Design",
    text: "Clear priorities and thoughtful choices help create an interior that works for your requirements and budget.",
  },
];

const approach = [
  {
    number: "01",
    title: "Designed Around Your Needs",
    text: "Your daily routine, storage needs and room priorities set the direction for every conversation.",
  },
  {
    number: "02",
    title: "Thoughtful Material Selection",
    text: "Materials and finishes are considered for the way they look, feel and fit into everyday use.",
  },
  {
    number: "03",
    title: "Clear Communication",
    text: "We keep the discussion focused on the scope, choices and details that help you make informed decisions.",
  },
  {
    number: "04",
    title: "Flexible Solutions",
    text: "Whether you are refining one room or planning a wider interior, the scope can reflect your needs.",
  },
];

const spaces = [
  {
    title: "Living Spaces",
    text: "Residential interiors for comfortable, considered homes that support everyday life.",
    image: images.villa,
    alt: "Warm contemporary living room shown as interior design inspiration",
    slug: "residential-interiors",
    link: "Explore residential interiors",
  },
  {
    title: "Functional Spaces",
    text: "Kitchens, custom furniture and practical details that make daily routines easier.",
    image: images.kitchen,
    alt: "Modern kitchen shown as interior design inspiration",
    slug: "modular-kitchens",
    link: "Explore modular kitchens",
  },
  {
    title: "Workspaces",
    text: "Commercial interiors and business environments planned for focused, welcoming work.",
    image: images.office,
    alt: "Contemporary workspace shown as interior design inspiration",
    slug: "commercial-interiors",
    link: "Explore commercial interiors",
  },
] as const;

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta(
      "About Sri Vastu Interiors | Interior Design in Hyderabad",
      "Discover Sri Vastu Interiors: practical, personalised interior design solutions for homes and businesses across Hyderabad.",
      "/about",
    ),
  component: AboutPage,
});

function AboutPage() {
  const philosophyRef = useScrollReveal(0.1);
  const approachRef = useScrollReveal(0.1);
  const spacesRef = useScrollReveal(0.08);
  const callRef = useScrollReveal(0.12);
  const whatsappHref = whatsappLink(siteSettings.whatsapp);
  const hasWhatsApp = Boolean(siteSettings.whatsapp);

  return (
    <>
      {/* About hero */}
      <section className="relative overflow-hidden bg-[#faf7f2] pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pb-28 lg:pt-48">
        <div className="container-editorial grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4">
              <Eyebrow className="font-semibold text-[#555b2c]">About Sri Vastu Interiors</Eyebrow>
              <span className="h-px w-12 bg-[#2a2d1d]/35" aria-hidden="true" />
            </div>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.03] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Spaces Designed Around the Way You Live.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sri Vastu Interiors creates practical, personalised interior solutions for homes and
              businesses across Hyderabad. We help bring together the details that make a space
              comfortable, functional and true to your needs.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-3 rounded-full bg-[#2a2d1d] px-7 py-3.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-[#393d27] hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Our Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-[#2a2d1d]/35 px-7 py-3.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-[#2a2d1d] hover:bg-[#2a2d1d]/5"
              >
                Talk to Us <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:col-span-5 lg:col-start-8 lg:max-w-none">
            <div
              className="absolute -right-4 -top-5 h-[72%] w-[70%] rounded-t-full bg-[#e9e0d3]"
              aria-hidden="true"
            />
            <div className="relative z-10 overflow-hidden rounded-[2rem] shadow-[0_20px_45px_rgba(61,45,28,0.16)]">
              <img
                src={images.dining}
                alt="Warm dining area shown as interior design inspiration"
                fetchPriority="high"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-5 z-20 hidden w-[42%] overflow-hidden rounded-[1.5rem] ring-8 ring-[#faf7f2] shadow-lg sm:block">
              <img
                src={images.materials}
                alt="Natural material palette shown as interior design inspiration"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <p className="relative z-20 mt-5 text-xs text-muted-foreground">
              Imagery is for design inspiration and does not represent completed projects.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        ref={philosophyRef}
        className="border-y border-[#2a2d1d]/10 bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container-editorial">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="reveal font-semibold text-[#555b2c]">Our philosophy</Eyebrow>
              <h2
                className="reveal mt-5 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
                style={{ transitionDelay: "0.08s" }}
              >
                Good Design Is More Than Just Appearance.
              </h2>
            </div>
            <p
              className="reveal max-w-md text-base leading-relaxed text-muted-foreground lg:col-span-4 lg:col-start-9"
              style={{ transitionDelay: "0.14s" }}
            >
              The right interior supports the life and work happening inside it, with choices that
              feel considered from day one.
            </p>
          </div>

          <ol className="mt-14 grid border-t border-[#2a2d1d]/15 md:grid-cols-3">
            {philosophy.map((item, index) => (
              <li
                key={item.number}
                className="reveal border-b border-[#2a2d1d]/15 py-8 last:border-b-0 md:border-b-0 md:px-8 md:py-10 md:first:pl-0 md:not-last:border-r md:not-last:border-[#2a2d1d]/15"
                style={{ transitionDelay: `${0.16 + index * 0.08}s` }}
              >
                <span className="text-sm font-semibold tracking-[0.14em] text-[#555b2c]">
                  {item.number}
                </span>
                <h3 className="mt-7 font-serif text-3xl leading-tight sm:text-4xl">{item.title}</h3>
                <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Approach */}
      <section ref={approachRef} className="bg-[#f1ece3] py-20 sm:py-24 lg:py-28">
        <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow className="reveal font-semibold text-[#555b2c]">
              What makes our approach different
            </Eyebrow>
            <h2
              className="reveal mt-5 font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl"
              style={{ transitionDelay: "0.08s" }}
            >
              Designed to make the process feel clear.
            </h2>
            <p
              className="reveal mt-6 max-w-md leading-relaxed text-muted-foreground"
              style={{ transitionDelay: "0.14s" }}
            >
              Interior decisions are easier when the conversation stays close to your space,
              priorities and day-to-day needs.
            </p>
            <img
              src={images.materials}
              alt="Wood, stone and fabric samples shown as interior design inspiration"
              loading="lazy"
              className="reveal-scale mt-10 aspect-[5/4] w-full rounded-[1.75rem] object-cover shadow-[0_16px_36px_rgba(61,45,28,0.12)]"
              style={{ transitionDelay: "0.2s" }}
            />
          </div>

          <ol className="grid gap-x-10 border-t border-[#2a2d1d]/15 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {approach.map((item, index) => (
              <li
                key={item.number}
                className="reveal border-b border-[#2a2d1d]/15 py-8 sm:py-9 sm:odd:pr-5 sm:even:border-l sm:even:pl-8"
                style={{ transitionDelay: `${0.1 + index * 0.07}s` }}
              >
                <span className="text-sm font-semibold tracking-[0.14em] text-[#555b2c]">
                  {item.number}
                </span>
                <h3 className="mt-5 font-serif text-3xl leading-tight">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Spaces */}
      <section ref={spacesRef} className="bg-[#faf7f2] py-20 sm:py-24 lg:py-28">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <Eyebrow className="reveal font-semibold text-[#555b2c]">
              The spaces we work with
            </Eyebrow>
            <h2
              className="reveal mt-5 font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ transitionDelay: "0.08s" }}
            >
              Interiors for the way each space needs to work.
            </h2>
          </div>
          <p
            className="reveal mt-4 text-xs text-muted-foreground/80"
            style={{ transitionDelay: "0.12s" }}
          >
            Images are editorial inspiration and do not represent completed Sri Vastu Interiors
            projects.
          </p>

          <div className="mt-10 grid gap-7 md:grid-cols-3 md:gap-6 lg:mt-12">
            {spaces.map((space, index) => (
              <article
                key={space.title}
                className="reveal group"
                style={{ transitionDelay: `${0.16 + index * 0.08}s` }}
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: space.slug }}
                  className="block overflow-hidden rounded-[1.5rem] bg-[#ded5c8] shadow-[0_12px_28px_rgba(61,45,28,0.1)]"
                >
                  <img
                    src={space.image}
                    alt={space.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-3xl leading-none">{space.title}</h3>
                    <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
                      {space.text}
                    </p>
                  </div>
                </div>
                <Link
                  to="/services/$slug"
                  params={{ slug: space.slug }}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#555b2c] transition-colors hover:text-foreground"
                >
                  {space.link} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section ref={callRef} className="bg-[#282219] py-20 text-[#f7efe3] sm:py-24 lg:py-28">
        <div className="container-editorial grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow className="reveal font-semibold text-[#dfc897]">Start a conversation</Eyebrow>
            <h2
              className="reveal mt-5 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ transitionDelay: "0.08s" }}
            >
              Have a Space in Mind? Let&apos;s Talk.
            </h2>
            <p
              className="reveal mt-6 max-w-xl text-base leading-relaxed text-[#f7efe3]/70 sm:text-lg"
              style={{ transitionDelay: "0.14s" }}
            >
              Tell us about your space, requirements and priorities. We&apos;ll help you take the
              next practical step.
            </p>
          </div>
          <div
            className="reveal flex flex-wrap gap-4 lg:col-span-4 lg:col-start-9"
            style={{ transitionDelay: "0.2s" }}
          >
            <a
              href={telLink(siteSettings.phone)}
              className="inline-flex items-center gap-3 rounded-full bg-[#f4e8d5] px-7 py-3.5 text-sm font-medium text-[#282219] transition-colors hover:bg-[#dfc897]"
            >
              Call Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappHref}
              target={hasWhatsApp ? "_blank" : undefined}
              rel={hasWhatsApp ? "noreferrer" : undefined}
              className="inline-flex items-center gap-3 rounded-full border border-[#f4e8d5]/55 px-7 py-3.5 text-sm font-medium text-[#f7efe3] transition-colors hover:bg-white/10"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
