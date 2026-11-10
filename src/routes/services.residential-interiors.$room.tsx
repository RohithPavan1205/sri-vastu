import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getService, telLink, whatsappLink } from "@/lib/content";
import { siteSettings } from "@/content/site";
import { InspirationGallery } from "@/components/site/InspirationGallery";
import { pageMeta } from "@/lib/seo";

const rooms = {
  "bedroom-interiors": {
    name: "Bedroom Interiors",
    h1: "Bedrooms designed for rest, storage and everyday ease.",
    intro:
      "A bedroom needs more than a good-looking bed wall. It needs a comfortable layout, useful wardrobes, lighting that works at different times of day and a palette that helps you unwind.",
    help: [
      "Wardrobe and loft planning",
      "Bed, headboard and bedside layouts",
      "Study and dressing corners",
      "Ambient, reading and task lighting",
      "Compact-room storage solutions",
    ],
    faqs: [
      [
        "Can you design a compact bedroom?",
        "Yes. Compact bedrooms benefit from an early focus on circulation, wardrobe depth and lighting, so every part of the room remains easy to use.",
      ],
      [
        "Can wardrobes and beds be planned together?",
        "Yes. Planning them as one composition can make the room feel calmer while making better use of available storage.",
      ],
      [
        "How do we choose a bedroom colour palette?",
        "We can consider daylight, existing finishes and the atmosphere you want, then discuss a palette that feels restful and practical.",
      ],
    ],
  },
  "living-room-interiors": {
    name: "Living Room Interiors",
    h1: "Living rooms that welcome the whole day in.",
    intro:
      "A living room has to shift between everyday rest, family time and hosting. We consider seating, circulation, lighting, storage and material choices so it feels composed without becoming precious.",
    help: [
      "Seating and conversation layouts",
      "TV and display units",
      "Layered lighting plans",
      "Dining and living zone coordination",
      "Compact-room furniture planning",
    ],
    faqs: [
      [
        "Can you plan a living room in a compact apartment?",
        "Yes. Proportion, clear pathways and adaptable furniture often make the biggest difference in a smaller shared room.",
      ],
      [
        "Can existing furniture be included?",
        "Useful existing pieces can be part of the conversation. The layout and finishes can then be planned around what you want to retain.",
      ],
      [
        "How can a living room feel warm without looking busy?",
        "A limited material palette, layered light and a few well-considered focal points usually create warmth with visual calm.",
      ],
    ],
  },
} as const;

export const Route = createFileRoute("/services/residential-interiors/$room")({
  loader: ({ params }) => {
    const room = rooms[params.room as keyof typeof rooms];
    const service = getService("residential-interiors");
    if (!room || !service) throw notFound();
    return { room, service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData)
      return { meta: [{ title: "Room not found" }, { name: "robots", content: "noindex" }] };
    const room = loaderData.room;
    return pageMeta(
      `${room.name} in Hyderabad`,
      `${room.intro} Explore ${room.name.toLowerCase()} inspiration with Sri Vastu Interiors in Hyderabad.`,
      `/services/residential-interiors/${params.room}`,
    );
  },
  component: RoomPage,
});

function RoomPage() {
  const { room, service } = Route.useLoaderData();
  const gallery = service.gallery.map((item, index) => ({
    ...item,
    id: `${room.name.toLowerCase().replaceAll(" ", "-")}-${index + 1}`,
    category: room.name,
    title: index === 0 ? room.name : item.title,
    alt: `${item.title} — ${room.name.toLowerCase()} design inspiration`,
  }));
  const message = `Hello Sri Vastu Interiors, I would like to discuss ${room.name.toLowerCase()} for my home.`;

  return (
    <>
      <section className="container-editorial pt-28 md:pt-32">
        <nav aria-label="Breadcrumb" className="eyebrow flex flex-wrap gap-2 text-muted-foreground">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/services">Services</Link>
          <span>/</span>
          <Link to="/services/$slug" params={{ slug: "residential-interiors" }}>
            Residential interiors
          </Link>
          <span>/</span>
          <span className="text-foreground">{room.name}</span>
        </nav>
        <div className="mt-8 grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow text-clay">Residential interiors in Hyderabad</p>
            <h1 className="mt-5 font-serif text-5xl leading-[.93] md:text-7xl">{room.h1}</h1>
            <p className="mt-7 max-w-2xl leading-relaxed text-muted-foreground">{room.intro}</p>
            <a
              href={whatsappLink(siteSettings.whatsapp, message)}
              target={siteSettings.whatsapp ? "_blank" : undefined}
              rel={siteSettings.whatsapp ? "noreferrer" : undefined}
              className="btn-primary mt-8"
            >
              Discuss your room <span aria-hidden>→</span>
            </a>
          </div>
          <img
            src={service.image}
            alt={`${room.name} design inspiration`}
            className="aspect-[4/3] w-full object-cover md:col-span-4 md:col-start-9"
          />
        </div>
      </section>
      <InspirationGallery service={room.name} items={gallery} />
      <section className="container-editorial grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-4">
          <p className="eyebrow text-clay">What we can help with</p>
          <h2 className="mt-5 font-serif text-4xl leading-none md:text-5xl">
            A room that works beautifully.
          </h2>
        </div>
        <ul className="border-t border-ink/15 md:col-span-7 md:col-start-6">
          {room.help.map((item, index) => (
            <li key={item} className="flex gap-5 border-b border-ink/15 py-4">
              <span className="font-serif text-clay">{String(index + 1).padStart(2, "0")}</span>
              <span className="font-serif text-2xl">{item}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-stone">
        <div className="container-editorial grid gap-10 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-4">
            <p className="eyebrow text-clay">Questions</p>
            <h2 className="mt-5 font-serif text-4xl leading-none md:text-5xl">Frequently asked.</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            {room.faqs.map(([question, answer]) => (
              <details key={question} className="group border-t border-ink/15 py-5 last:border-b">
                <summary className="flex cursor-pointer list-none justify-between gap-5 font-serif text-2xl">
                  {question}
                  <span className="eyebrow transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-relaxed text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ink text-ivory">
        <div className="container-editorial flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-end md:py-20">
          <div>
            <p className="eyebrow text-ivory/65">Your room, your routine</p>
            <h2 className="mt-5 font-serif text-5xl leading-none">Have a design in mind?</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={telLink(siteSettings.phone)} className="btn-outline">
              Call now <span aria-hidden>→</span>
            </a>
            <a
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
