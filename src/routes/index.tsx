import { createFileRoute, Link } from "@tanstack/react-router";
import { heroContent, images, principles, siteSettings } from "@/content/site";
import { getServices, telLink, whatsappLink } from "@/lib/content";
import { Eyebrow } from "@/components/site/Editorial";
import { WhatsAppIcon } from "@/components/site/SriVastuLogo";
import { pageMeta } from "@/lib/seo";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, Phone, MapPin, Home as HomeIcon, Sofa, Layers, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "Interior Designers in Hyderabad",
      "Sri Vastu Interiors provides customised residential, kitchen, commercial and renovation interiors across Hyderabad and nearby areas.",
    ),
  component: Home,
});

function Home() {
  const services = getServices();
  const servicesRef = useScrollReveal(0.08);
  const principlesRef = useScrollReveal(0.08);

  return (
    <>
      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden text-white">
        {/* Background Image */}
        <img
          src={heroContent.image}
          alt="Warm Golden Minimalist Living Room by Sri Vastu Interiors"
          width={1672}
          height={941}
          fetchPriority="high"
          className="animate-slow-zoom absolute inset-0 -z-30 h-full w-full object-cover object-center"
        />

        {/* Ambient Dark Scrims for text contrast and atmosphere */}
        {/* Left-to-right vignette: rich espresso gradient fading to sunlit right side */}
        <div
          className="absolute inset-0 -z-20 pointer-events-none bg-gradient-to-r from-[#17110d]/92 via-[#17110d]/75 via-35% to-[#17110d]/10 to-70%"
          aria-hidden="true"
        />
        {/* Top-down gentle gradient for header readability */}
        <div
          className="absolute inset-x-0 top-0 -z-10 h-40 pointer-events-none bg-gradient-to-b from-[#120d09]/65 via-[#120d09]/20 to-transparent"
          aria-hidden="true"
        />
        {/* Bottom-up gradient for bottom info row */}
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-44 pointer-events-none bg-gradient-to-t from-[#120d09]/80 via-[#120d09]/25 to-transparent"
          aria-hidden="true"
        />

        {/* Hero Content - Shifted left for optimal alignment and balance */}
        <div className="container-editorial relative z-10 flex flex-1 flex-col justify-center pt-24 pb-20 sm:pt-24 sm:pb-20">
          <div className="max-w-xl lg:max-w-2xl lg:-ml-2 xl:-ml-4">
            {/* Eyebrow / Subtitle */}
            <div className="flex items-center gap-4">
              <span className="text-xs sm:text-[13px] font-medium tracking-[0.24em] text-white/80 uppercase">
                Interior Design &amp; Execution
              </span>
              <span className="h-[1px] w-12 bg-white/50" aria-hidden="true" />
            </div>

            {/* Main Headline - Exactly 2 lines */}
            <h1 className="mt-5 sm:mt-6 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.85rem] font-medium leading-[1.04] tracking-tight text-white">
              <span className="block whitespace-nowrap">Beautiful Interiors</span>
              <span className="block mt-1 sm:mt-2">
                for{" "}
                <span className="font-serif italic font-normal text-[#c9a76d]">Every Space.</span>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 sm:mt-6 max-w-[440px] text-base sm:text-[17px] leading-relaxed text-white/85 font-sans">
              Thoughtful design, quality execution and customized solutions for homes, offices and
              commercial spaces in Hyderabad.
            </p>

            {/* Call to Actions */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Call Now Pill (Solid Cream) */}
              <a
                href={telLink(siteSettings.phone)}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#f2e9dc] px-7 sm:px-8 py-3.5 text-sm sm:text-base font-medium text-[#1c1613] shadow-md transition-all duration-300 hover:bg-[#e6dccb] hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="h-4 w-4 fill-current text-[#1c1613]" />
                <span>Call Now</span>
              </a>

              {/* WhatsApp Us Pill (Translucent Dark Outline) */}
              <a
                href={whatsappLink(siteSettings.whatsapp)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/55 bg-black/30 px-7 sm:px-8 py-3.5 text-sm sm:text-base font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/85 hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-4 w-4 text-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar - Carousel dots removed completely */}
        <div className="absolute inset-x-0 bottom-6 sm:bottom-9 z-10">
          <div className="container-editorial">
            <div className="flex flex-wrap items-center gap-y-2 text-xs sm:text-sm font-normal tracking-wide text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white/70 shrink-0" />
                <span>Hyderabad &amp; Surrounding Areas</span>
              </div>
              <span
                className="mx-4 sm:mx-6 h-3.5 w-px bg-white/30 hidden sm:inline-block"
                aria-hidden="true"
              />
              <div className="flex items-center gap-2">
                <HomeIcon className="h-4 w-4 text-white/70 shrink-0" />
                <span>All Budgets: Affordable to Premium</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── About / Designing Spaces Around Your Life ─────────────── */}
      <section className="relative overflow-hidden bg-[#faf7f2] py-20 lg:py-28 text-foreground">
        <div className="container-editorial grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Overlapping Image Collage on the Left */}
          <div className="relative mx-auto w-full max-w-lg lg:col-span-6 lg:max-w-none">
            {/* Background arch / pill decorative shape */}
            <div
              className="absolute -top-6 left-12 h-80 w-64 rounded-t-full bg-[#eee7dc]/60 -z-0"
              aria-hidden="true"
            />

            {/* Main Primary Image */}
            <div className="relative z-10 w-[78%] overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src={images.dining}
                alt="Interior design showcase"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Overlapping Secondary Image */}
            <div className="absolute -bottom-6 right-0 z-20 w-[52%] overflow-hidden rounded-[2rem] shadow-2xl ring-8 ring-[#faf7f2]">
              <img
                src={images.kitchen}
                alt="Detail interior showcase"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Text & Features on the Right */}
          <div className="lg:col-span-6 lg:pl-4">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                About Sri Vastu Interiors
              </span>
              <span className="h-px w-10 bg-muted-foreground/40" aria-hidden="true" />
            </div>

            {/* Headline */}
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-foreground">
              Designing Spaces
              <br />
              Around Your Life
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base sm:text-[17px] leading-relaxed text-muted-foreground font-sans">
              We create beautiful, functional and personalized interiors for homes, offices and
              commercial spaces in Hyderabad, with solutions that suit every style and budget.
            </p>

            {/* 3 Pillar Features with Icons */}
            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6 border-t border-b border-border/40 py-6">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Sofa className="h-6 w-6 text-foreground/80 shrink-0 stroke-[1.5]" />
                <span className="text-xs sm:text-sm font-medium leading-tight text-foreground">
                  Custom
                  <br />
                  Designs
                </span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Layers className="h-6 w-6 text-foreground/80 shrink-0 stroke-[1.5]" />
                <span className="text-xs sm:text-sm font-medium leading-tight text-foreground">
                  Quality
                  <br />
                  Execution
                </span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Sparkles className="h-6 w-6 text-foreground/80 shrink-0 stroke-[1.5]" />
                <span className="text-xs sm:text-sm font-medium leading-tight text-foreground">
                  For Every
                  <br />
                  Budget
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#2a2d1d] hover:bg-[#393d27] px-7 py-3.5 text-sm sm:text-base font-medium text-white shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get to Know Us</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services ─────────────────────────────────────────────── */}
      <section ref={servicesRef} className="bg-[#faf7f2] py-16 text-foreground sm:py-20 lg:py-24">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl text-center">
            <div className="reveal flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#2a2d1d]/45" aria-hidden="true" />
              <Eyebrow className="text-[#2a2d1d]">Our services</Eyebrow>
              <span className="h-px w-10 bg-[#2a2d1d]/45" aria-hidden="true" />
            </div>
            <h2
              className="reveal mt-4 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ transitionDelay: "0.08s" }}
            >
              Complete Interior Solutions
            </h2>
            <p
              className="reveal mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
              style={{ transitionDelay: "0.14s" }}
            >
              From homes to workspaces, we design and transform spaces to suit your style, needs and
              budget.
            </p>
          </div>

          <ol className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-10 lg:grid-cols-4 lg:gap-5">
            {services.map((service, index) => (
              <li
                key={service.slug}
                className="reveal"
                style={{ transitionDelay: `${0.1 + index * 0.045}s` }}
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="group relative block aspect-[1.35/1] overflow-hidden rounded-[1.35rem] bg-[#2a2d1d] shadow-[0_12px_28px_rgba(45,37,27,0.12)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(45,37,27,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2a2d1d]"
                >
                  <img
                    src={service.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-[#21170d]/90 via-[#21170d]/28 to-[#21170d]/5"
                    aria-hidden="true"
                  />
                  <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-left sm:p-5 lg:p-4 xl:p-5">
                    <span className="font-serif text-[1.75rem] leading-[0.95] text-white sm:text-3xl lg:text-[1.65rem] xl:text-3xl">
                      {service.title}
                    </span>
                    <span
                      className="mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/80 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#2a2d1d]"
                      aria-hidden="true"
                    >
                      <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <div className="reveal mt-8 text-center" style={{ transitionDelay: "0.5s" }}>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 rounded-full bg-[#2a2d1d] px-7 py-3.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-[#393d27] hover:scale-[1.02] active:scale-[0.98] sm:px-8 sm:text-base"
            >
              Explore All Services{" "}
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </Link>
            <p className="mt-4 text-xs text-muted-foreground/80">
              Images are for design inspiration and do not represent completed projects.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Principles ───────────────────────────────────────────── */}
      <section ref={principlesRef} className="bg-[#faf7f2] py-20 text-foreground lg:py-28">
        <div className="container-editorial grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="reveal flex items-center gap-4">
              <Eyebrow className="font-semibold text-[#555b2c]">Why choose us</Eyebrow>
              <span className="h-px w-28 bg-[#2a2d1d]/35" aria-hidden="true" />
            </div>
            <h2
              className="reveal mt-7 max-w-md font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.4rem]"
              style={{ transitionDelay: "0.08s" }}
            >
              A more considered way to create your space.
            </h2>
            <p
              className="reveal mt-8 max-w-md text-lg leading-relaxed text-muted-foreground"
              style={{ transitionDelay: "0.14s" }}
            >
              Thoughtful design, clear guidance and practical solutions — all focused on creating
              spaces that truly work for you.
            </p>
          </div>

          <dl className="grid gap-x-0 gap-y-0 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {principles.map((item, index) => (
              <div
                key={item.title}
                className={`reveal py-8 first:pt-0 sm:py-0 sm:pb-12 sm:pt-0 sm:[&:nth-child(2)]:border-l sm:[&:nth-child(2)]:pl-10 sm:[&:nth-child(3)]:border-t sm:[&:nth-child(3)]:pt-10 sm:[&:nth-child(4)]:border-l sm:[&:nth-child(4)]:border-t sm:[&:nth-child(4)]:pl-10 sm:[&:nth-child(4)]:pt-10 ${index > 0 ? "border-t sm:border-t-0" : ""}`}
                style={{ transitionDelay: `${0.12 + index * 0.07}s` }}
              >
                <dt className="text-sm font-semibold tracking-[0.14em] text-[#555b2c]">
                  {String(index + 1).padStart(2, "0")}
                </dt>
                <dd className="mt-6">
                  <h3 className="font-serif text-4xl leading-none tracking-tight lg:text-[2.55rem]">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground lg:text-[17px]">
                    {item.text}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
