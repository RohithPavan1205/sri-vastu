import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/content/types";
import { siteSettings } from "@/content/site";
import { trackContactAction, whatsappLink } from "@/lib/content";

function galleryMessage(service: string, design: string) {
  return `Hello Sri Vastu Interiors, I liked the ${design} ${service} design inspiration and would like to discuss a similar design for my space.`;
}

export function InspirationGallery({ service, items }: { service: string; items: GalleryImage[] }) {
  const [filter, setFilter] = useState("All Designs");
  const [selected, setSelected] = useState<number | null>(null);
  const filters = useMemo(
    () => [
      "All Designs",
      ...Array.from(new Set(items.flatMap((item) => [item.category, item.style]))),
    ],
    [items],
  );
  const visible =
    filter === "All Designs"
      ? items
      : items.filter((item) => item.category === filter || item.style === filter);
  const activeItem = selected === null ? null : visible[selected];

  useEffect(() => {
    if (selected === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowLeft")
        setSelected((current) =>
          current === null ? null : (current - 1 + visible.length) % visible.length,
        );
      if (event.key === "ArrowRight")
        setSelected((current) => (current === null ? null : (current + 1) % visible.length));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected, visible.length]);

  return (
    <section className="bg-stone py-24 md:py-32">
      <div className="container-editorial">
        <div className="grid gap-7 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow text-clay">Design inspiration</p>
            <h2 className="mt-5 font-serif text-4xl leading-none md:text-6xl">
              Ideas to make your own.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9">
            These are conceptual design references, not completed Sri Vastu Interiors projects. Save
            the direction you like and we&apos;ll discuss what suits your space.
          </p>
        </div>

        <div
          className="mt-10 flex gap-2 overflow-x-auto pb-2"
          aria-label="Filter design inspiration"
        >
          {filters.map((option) => (
            <button
              type="button"
              key={option}
              onClick={() => {
                setFilter(option);
                setSelected(null);
              }}
              className={`shrink-0 border px-4 py-2 text-xs font-medium transition-colors ${filter === option ? "border-ink bg-ink text-ivory" : "border-ink/15 bg-background hover:border-ink/50"}`}
              aria-pressed={filter === option}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, index) => (
            <article key={item.id} className="group bg-background">
              <button
                type="button"
                onClick={() => setSelected(index)}
                className="block w-full overflow-hidden text-left"
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="img-zoom aspect-[4/3] w-full object-cover group-hover:scale-[1.03]"
                />
              </button>
              <div className="p-5">
                <p className="eyebrow text-clay">
                  {item.category} · {item.style}
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <button
                  type="button"
                  onClick={() => setSelected(index)}
                  className="eyebrow link-underline mt-5 pb-1"
                >
                  View design →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-ink/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeItem.title} inspiration`}
        >
          <div className="relative max-h-full w-full max-w-5xl overflow-y-auto bg-background shadow-2xl">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center bg-background/95"
              aria-label="Close design preview"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={activeItem.image}
              alt={activeItem.alt}
              className="max-h-[70svh] w-full object-cover"
            />
            <div className="grid gap-6 p-6 md:grid-cols-12 md:p-8">
              <div className="md:col-span-7">
                <p className="eyebrow text-clay">
                  {activeItem.category} · {activeItem.style}
                </p>
                <h3 className="mt-3 font-serif text-3xl md:text-4xl">{activeItem.title}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                  {activeItem.description}
                </p>
              </div>
              <div className="flex flex-wrap items-end gap-3 md:col-span-5 md:justify-end">
                <a
                  onClick={() =>
                    trackContactAction("gallery-enquiry", `${service}: ${activeItem.title}`)
                  }
                  href={whatsappLink(
                    siteSettings.whatsapp,
                    galleryMessage(service, activeItem.title),
                  )}
                  target={siteSettings.whatsapp ? "_blank" : undefined}
                  rel={siteSettings.whatsapp ? "noreferrer" : undefined}
                  className="btn-primary"
                >
                  Enquire about a similar design <span aria-hidden>→</span>
                </a>
              </div>
            </div>
            {visible.length > 1 && (
              <div className="absolute inset-x-0 top-[30%] flex justify-between px-3 sm:px-5">
                <button
                  type="button"
                  onClick={() =>
                    setSelected((current) =>
                      current === null ? null : (current - 1 + visible.length) % visible.length,
                    )
                  }
                  className="grid h-10 w-10 place-items-center bg-background/90"
                  aria-label="Previous design"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setSelected((current) =>
                      current === null ? null : (current + 1) % visible.length,
                    )
                  }
                  className="grid h-10 w-10 place-items-center bg-background/90"
                  aria-label="Next design"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
