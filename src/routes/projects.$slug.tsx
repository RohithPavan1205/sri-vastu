import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, getProjects, getTestimonial } from "@/lib/content";
import { ClosingCTA, Eyebrow, ProjectTile } from "@/components/site/Editorial";
import { pageMeta } from "@/lib/seo";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData)
      return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.project;
    return pageMeta(`${p.title}, ${p.location}`, p.summary, `/projects/${params.slug}`);
  },
  notFoundComponent: () => (
    <div className="container-editorial py-48 text-center">
      <h1 className="font-serif text-5xl">Project not found</h1>
      <Link to="/projects" className="eyebrow link-underline mt-8 inline-block pb-1">
        All projects →
      </Link>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const testimonial = getTestimonial(p.testimonialId);
  const related = getProjects()
    .filter((x) => x.slug !== p.slug)
    .slice(0, 2);
  const storyRef = useScrollReveal(0.08);
  const spacesRef = useScrollReveal(0.08);
  const relatedRef = useScrollReveal(0.08);

  return (
    <article>
      {/* Hero */}
      <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden text-ivory">
        <img
          src={p.cover}
          alt={`Editorial — ${p.title}`}
          fetchPriority="high"
          className="animate-slow-zoom absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="hero-scrim absolute inset-0 -z-10" />
        <div className="container-editorial pb-12 md:pb-20">
          <p className="eyebrow text-ivory/70">{p.category}</p>
          <h1 className="display animate-rise mt-5 text-5xl md:text-8xl">{p.title}</h1>
          <p className="animate-fade-in mt-4 text-xs text-ivory/50 italic">
            Imagery is editorial / representative — not a project photograph
          </p>
        </div>
      </section>

      {/* Meta bar */}
      <section className="container-editorial">
        <dl className="grid grid-cols-2 border-b md:grid-cols-4">
          {[
            ["Location", p.location],
            ["Year", p.year],
            ["Type", p.type],
            ["Area", p.area],
          ].map(([k, v]) => (
            <div
              key={k}
              className="border-r py-6 pr-4 last:border-r-0 md:py-8 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
            >
              <dt className="eyebrow text-muted-foreground">{k}</dt>
              <dd className="mt-2 font-serif text-2xl">{v}</dd>
            </div>
          ))}
        </dl>

        {/* Introduction */}
        <div className="grid gap-10 py-24 md:grid-cols-12 md:py-36">
          <Eyebrow className="md:col-span-3">Introduction</Eyebrow>
          <p className="font-serif text-3xl leading-snug md:col-span-8 md:text-4xl">
            {p.description}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="grid gap-4 px-4 md:grid-cols-2 md:px-10">
        {p.gallery.slice(1, 3).map((src, i) => (
          <div key={i} className={`overflow-hidden ${i === 1 ? "md:mt-24" : ""}`}>
            <img
              src={src}
              alt={`Design study — ${p.title}, view ${i + 1}`}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        ))}
      </section>

      {/* Design story */}
      <section
        ref={storyRef}
        className="container-editorial grid gap-10 py-24 md:grid-cols-12 md:py-36"
      >
        <Eyebrow className="reveal md:col-span-3">Design story</Eyebrow>
        <div className="md:col-span-7">
          <p
            className="reveal max-w-2xl text-lg leading-relaxed text-muted-foreground"
            style={{ transitionDelay: "0.1s" }}
          >
            {p.story}
          </p>
        </div>
      </section>

      {/* Spaces */}
      <section
        ref={spacesRef}
        className="container-editorial space-y-24 pb-24 md:space-y-36 md:pb-36"
      >
        {p.spaces.map((s, i) => (
          <div
            key={s.name}
            className="reveal grid items-end gap-8 md:grid-cols-12"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div
              className={`overflow-hidden md:col-span-8 ${i % 2 ? "md:order-2 md:col-start-5" : ""}`}
            >
              <img
                src={s.image}
                alt={`Design study — ${s.name}, ${p.title}`}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div
              className={`md:col-span-4 ${i % 2 ? "md:order-1 md:col-start-1 md:row-start-1" : ""}`}
            >
              <p className="eyebrow text-muted-foreground">0{i + 1}</p>
              <h2 className="mt-3 font-serif text-4xl">{s.name}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Materials & highlights */}
      <section className="bg-stone">
        <div className="container-editorial grid gap-14 py-24 md:grid-cols-2 md:py-32">
          <div>
            <Eyebrow>Materials & finishes</Eyebrow>
            <ul className="mt-8">
              {p.materials.map((m) => (
                <li key={m} className="flex items-center gap-4 border-t border-ink/15 py-4">
                  <span className="block h-1.5 w-1.5 shrink-0 rotate-45 bg-clay" aria-hidden />
                  <span className="font-serif text-2xl">{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Design highlights</Eyebrow>
            <ul className="mt-8">
              {p.highlights.map((m) => (
                <li key={m} className="flex items-center gap-4 border-t border-ink/15 py-4">
                  <span className="block h-1.5 w-1.5 shrink-0 rotate-45 bg-clay" aria-hidden />
                  <span className="font-serif text-2xl">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {testimonial && (
        <figure className="container-editorial py-24 text-center md:py-36">
          <span className="font-serif text-6xl leading-none text-clay" aria-hidden>
            "
          </span>
          <blockquote className="mx-auto mt-4 max-w-3xl font-serif text-3xl leading-snug md:text-4xl">
            {testimonial.quote}
          </blockquote>
          <figcaption className="mt-10">
            <p className="eyebrow">{testimonial.clientName}</p>
            <p className="eyebrow mt-2 text-muted-foreground">{testimonial.projectName}</p>
          </figcaption>
        </figure>
      )}

      {/* Related */}
      <section ref={relatedRef} className="container-editorial border-t pb-28 pt-10 md:pb-40">
        <div className="mb-10 flex items-end justify-between gap-6">
          <Eyebrow>Related projects</Eyebrow>
          <Link to="/projects" className="eyebrow link-underline pb-1">
            All projects →
          </Link>
        </div>
        <div className="grid gap-12 md:grid-cols-2 md:gap-10">
          {related.map((r) => (
            <ProjectTile key={r.slug} project={r} aspect="aspect-[4/3]" />
          ))}
        </div>
      </section>

      <ClosingCTA lines={["Have a space", "in mind?"]} />
    </article>
  );
}
