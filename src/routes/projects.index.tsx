import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { getProjects } from "@/lib/content";
import { ClosingCTA, Eyebrow, PageIntro, ProjectTile } from "@/components/site/Editorial";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/projects/")({
  head: () =>
    pageMeta(
      "Projects",
      "Selected residential and commercial interiors by Studio Maati across Hyderabad.",
      "/projects",
    ),
  component: ProjectsPage,
});

const layout = [
  "md:col-span-7",
  "md:col-span-4 md:col-start-9 md:mt-40",
  "md:col-span-5 md:col-start-2",
  "md:col-span-6 md:col-start-7 md:-mt-16",
  "md:col-span-8 md:col-start-3",
];
const aspects = ["aspect-[4/5]", "aspect-[3/4]", "aspect-[4/3]", "aspect-[4/5]", "aspect-[16/9]"];

type Filter = "All" | "Residential" | "Commercial";

function ProjectsPage() {
  const projects = getProjects();
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <>
      <PageIntro
        eyebrow="Projects"
        lines={["Homes and", "spaces, lived in."]}
        text="A selection of residences, villas and workplaces designed and delivered by the studio."
      />

      {/* Imagery disclaimer */}
      <div className="container-editorial pb-4">
        <p className="text-xs text-muted-foreground/60 italic">
          Images are editorial and representative of our design approach — not photographs of
          completed projects.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="container-editorial pb-14">
        <div className="flex gap-1 border-b">
          {(["All", "Residential", "Commercial"] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`eyebrow border-b-2 pb-3 pr-6 pt-2 transition-colors ${
                filter === f
                  ? "border-clay text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="container-editorial pb-28 md:pb-44">
        <div className="grid gap-y-16 md:grid-cols-12 md:gap-x-10 md:gap-y-24">
          {filtered.map((p, i) => (
            <div key={p.slug} className={layout[i % layout.length]}>
              <ProjectTile project={p} aspect={aspects[i % aspects.length] ?? "aspect-[4/5]"} />
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="md:col-span-12 py-24 text-center">
              <p className="font-serif text-3xl text-muted-foreground">No projects found</p>
            </div>
          )}
        </div>
      </section>

      {/* Process teaser */}
      <section className="border-t bg-stone py-16 md:py-20">
        <div className="container-editorial grid items-center gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Every project begins with a conversation
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed md:text-lg">
            We don't start with a mood board. We start with questions: how do you live, what do you
            need, what have you always wanted? Good design follows from honest answers.
          </p>
        </div>
      </section>

      <ClosingCTA lines={["Have a space", "in mind?"]} />
    </>
  );
}
