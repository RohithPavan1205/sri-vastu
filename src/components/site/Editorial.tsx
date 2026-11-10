import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { Project } from "@/content/types";
import { siteSettings, images } from "@/content/site";
import { whatsappLink } from "@/lib/content";
import { cn } from "@/lib/utils";
import { useScrollReveal, useReveal } from "@/hooks/use-scroll-reveal";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow text-muted-foreground", className)}>{children}</p>;
}

export function DisplayLines({
  lines,
  as: Tag = "h2",
  className,
}: {
  lines: string[];
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <Tag className={cn("display", className)}>
      {lines.map((l, i) => (
        <span key={i} className="block">
          {l}
        </span>
      ))}
    </Tag>
  );
}

export function ProjectMeta({ project, className }: { project: Project; className?: string }) {
  return (
    <p className={cn("eyebrow flex flex-wrap gap-x-4 gap-y-1", className)}>
      <span>{project.type}</span>
      <span aria-hidden>—</span>
      <span>{project.location}</span>
      <span aria-hidden>—</span>
      <span>{project.year}</span>
    </p>
  );
}

export function ProjectTile({
  project,
  aspect,
  sizes,
}: {
  project: Project;
  aspect: string;
  sizes?: string;
}) {
  const ref = useReveal<HTMLAnchorElement>(0.1);
  return (
    <Link
      ref={ref}
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="reveal group block"
    >
      <div className={cn("overflow-hidden bg-muted", aspect)}>
        <img
          src={project.cover}
          alt={`${project.title}, ${project.category.toLowerCase()} in ${project.location}`}
          loading="lazy"
          sizes={sizes}
          className="img-zoom h-full w-full object-cover group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-2xl md:text-3xl">{project.title}</h3>
        <span className="eyebrow shrink-0 text-muted-foreground">{project.year}</span>
      </div>
      <p className="eyebrow mt-1 text-muted-foreground">{project.category}</p>
    </Link>
  );
}

export function ClosingCTA({
  lines = ["Let's create a space", "that feels like yours."],
  image = images.villa,
}: {
  lines?: string[];
  image?: string;
}) {
  const ref = useScrollReveal(0.08);
  return (
    <section
      className="relative isolate flex min-h-[80svh] items-end overflow-hidden text-ivory"
      ref={ref}
    >
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="hero-scrim absolute inset-0 -z-10" />
      <div className="container-editorial pb-16 md:pb-24">
        <DisplayLines lines={lines} className="reveal max-w-4xl text-5xl md:text-7xl lg:text-8xl" />
        <div
          className="reveal mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10"
          style={{ transitionDelay: "0.15s" }}
        >
          <Link to="/contact" className="btn-primary">
            Start Your Project <span aria-hidden>→</span>
          </Link>
          <a
            href={whatsappLink(siteSettings.whatsapp)}
            target="_blank"
            rel="noreferrer"
            className="eyebrow link-underline self-start pb-1 text-ivory/80 hover:text-ivory"
          >
            WhatsApp Us →
          </a>
        </div>
      </div>
    </section>
  );
}

export function PageIntro({
  eyebrow,
  lines,
  text,
}: {
  eyebrow: string;
  lines: string[];
  text?: string;
}) {
  return (
    <section className="container-editorial pb-16 pt-36 md:pb-24 md:pt-48">
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="mt-8 grid gap-10 md:grid-cols-12">
        <DisplayLines
          as="h1"
          lines={lines}
          className="text-5xl md:col-span-8 md:text-7xl lg:text-8xl"
        />
        {text && (
          <p className="max-w-md self-end text-base leading-relaxed text-muted-foreground md:col-span-4">
            {text}
          </p>
        )}
      </div>
    </section>
  );
}

/** Horizontal rule with clay accent */
export function Divider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-6", className)}>
      <span className="block h-px flex-1 bg-border" />
      <span className="block h-1.5 w-1.5 rotate-45 bg-clay" aria-hidden />
      <span className="block h-px flex-1 bg-border" />
    </div>
  );
}
