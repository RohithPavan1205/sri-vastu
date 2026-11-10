import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { images, siteSettings } from "@/content/site";
import { getServices, telLink, trackContactAction, whatsappLink } from "@/lib/content";
import { submitEnquiry, validateEnquiry, type Enquiry } from "@/lib/enquiry";
import { jsonLdScript, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageMeta(
      "Contact Interior Designers in Hyderabad",
      "Contact Sri Vastu Interiors to discuss an interior design consultation, renovation or project enquiry in Hyderabad.",
      "/contact",
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
            name: "Contact",
            item: `${siteSettings.siteUrl}/contact`,
          },
        ],
      }),
    ],
  }),
  component: ContactPage,
});

const empty: Enquiry = {
  name: "",
  phone: "",
  email: "",
  service: "",
  location: "",
  budget: "",
  message: "",
  company: "",
};

const fieldClass =
  "w-full border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-clay";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="eyebrow text-muted-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-sm text-destructive">{error}</span>}
    </label>
  );
}

function ContactPage() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState<ReturnType<typeof validateEnquiry>>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [submitError, setSubmitError] = useState("");
  const services = getServices();
  const contactMessage =
    "Hello Sri Vastu Interiors, I would like to discuss my space and interior requirements.";
  const set = (key: keyof Enquiry) => (event: { target: { value: string } }) =>
    setForm((current) => ({ ...current, [key]: event.target.value }));

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validateEnquiry(form);
    setErrors(nextErrors);
    setSubmitError("");
    if (Object.keys(nextErrors).length) return;
    setState("sending");
    try {
      await submitEnquiry(form);
      trackContactAction("enquiry", "Contact form submission");
      setState("sent");
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "We couldn't send your enquiry. Please try again.",
      );
      setState("error");
    }
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-ivory">
        <img
          src={images.villa}
          alt="Contemporary Indian living room design inspiration"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-65"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/25" />
        <div className="container-editorial pb-20 pt-28 md:pb-28 md:pt-36">
          <nav aria-label="Breadcrumb" className="eyebrow flex gap-2 text-ivory/70">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </nav>
          <div className="mt-14 grid gap-9 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="eyebrow text-[#c5cc9d]">Get in touch</p>
              <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[.93] md:text-7xl">
                Let&apos;s talk about your space.
              </h1>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="leading-relaxed text-ivory/75">
                Planning a new interior, renovating an existing space or looking for a specific
                design? Tell us what you have in mind.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  onClick={() => trackContactAction("call", "Contact hero")}
                  href={telLink(siteSettings.phone)}
                  className="btn-outline"
                >
                  Call now <span aria-hidden>→</span>
                </a>
                <a
                  onClick={() => trackContactAction("whatsapp", "Contact hero")}
                  href={whatsappLink(siteSettings.whatsapp, contactMessage)}
                  target={siteSettings.whatsapp ? "_blank" : undefined}
                  rel={siteSettings.whatsapp ? "noreferrer" : undefined}
                  className="eyebrow bg-ivory px-6 py-4 text-ink"
                >
                  WhatsApp us <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-editorial grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <p className="eyebrow text-clay">Contact information</p>
          <h2 className="mt-5 font-serif text-4xl leading-none md:text-5xl">
            Start in the way that works for you.
          </h2>
        </div>
        <div className="grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 md:col-span-7 md:col-start-6">
          <ContactDetail
            label="Phone"
            value={siteSettings.phone || "Available once verified"}
            href={siteSettings.phone ? telLink(siteSettings.phone) : undefined}
          />
          <ContactDetail
            label="WhatsApp"
            value={
              siteSettings.whatsapp ? "Message Sri Vastu Interiors" : "Available once verified"
            }
            href={
              siteSettings.whatsapp
                ? whatsappLink(siteSettings.whatsapp, contactMessage)
                : undefined
            }
            external
          />
          <ContactDetail
            label="Location"
            value={`${siteSettings.city}, ${siteSettings.region}`}
            href={siteSettings.mapsUrl}
            external
          />
          <ContactDetail
            label="Operating hours"
            value="Hours can be confirmed when you get in touch."
          />
        </div>
      </section>

      <section id="enquiry" className="bg-stone">
        <div className="container-editorial grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-4">
            <p className="eyebrow text-clay">Project enquiry</p>
            <h2 className="mt-5 font-serif text-4xl leading-none md:text-5xl">
              Tell us what you&apos;re planning.
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
              A few details about your space help us understand the kind of conversation you need.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            {state === "sent" ? (
              <div className="border-t border-ink/15 pt-9" role="status">
                <h3 className="font-serif text-4xl">Thank you for getting in touch.</h3>
                <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                  Your enquiry has been sent. Sri Vastu Interiors will use the details you shared to
                  respond.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(empty);
                    setState("idle");
                  }}
                  className="eyebrow link-underline mt-7 pb-1"
                >
                  Send another enquiry →
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
                <Field label="Full name *" error={errors.name}>
                  <input
                    className={fieldClass}
                    value={form.name}
                    onChange={set("name")}
                    autoComplete="name"
                  />
                </Field>
                <Field label="Mobile number *" error={errors.phone}>
                  <input
                    className={fieldClass}
                    value={form.phone}
                    onChange={set("phone")}
                    type="tel"
                    autoComplete="tel"
                  />
                </Field>
                <Field label="Email address (optional)" error={errors.email}>
                  <input
                    className={fieldClass}
                    value={form.email}
                    onChange={set("email")}
                    type="email"
                    autoComplete="email"
                  />
                </Field>
                <Field label="Project location *" error={errors.location}>
                  <input
                    className={fieldClass}
                    value={form.location}
                    onChange={set("location")}
                    placeholder="e.g. Hyderabad"
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Service required *" error={errors.service}>
                    <select className={fieldClass} value={form.service} onChange={set("service")}>
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.slug} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label="Approximate budget (optional)">
                  <select className={fieldClass} value={form.budget} onChange={set("budget")}>
                    <option value="">Select a range</option>
                    <option>Under ₹5 lakh</option>
                    <option>₹5–10 lakh</option>
                    <option>₹10–20 lakh</option>
                    <option>Above ₹20 lakh</option>
                    <option>Prefer to discuss</option>
                  </select>
                </Field>
                <div className="hidden" aria-hidden="true">
                  <label>
                    Company
                    <input
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.company}
                      onChange={set("company")}
                    />
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <Field label="Describe your requirements *" error={errors.message}>
                    <textarea
                      className={`${fieldClass} min-h-36 resize-y`}
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Tell us about your space, priorities and any inspiration you have in mind."
                    />
                  </Field>
                </div>
                {state === "error" && (
                  <p className="sm:col-span-2 text-sm text-destructive" role="alert">
                    {submitError}
                  </p>
                )}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={state === "sending"}
                    className="btn-primary disabled:cursor-wait disabled:opacity-60"
                  >
                    {state === "sending" ? "Sending enquiry…" : "Send enquiry"}
                    {state !== "sending" && <span aria-hidden>→</span>}
                  </button>
                  <p className="mt-4 max-w-lg text-xs leading-relaxed text-muted-foreground">
                    Your details are used to respond to this enquiry. Fields marked * are required.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="container-editorial grid gap-9 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <p className="eyebrow text-clay">Find us</p>
          <h2 className="mt-5 font-serif text-4xl leading-none md:text-5xl">
            Hyderabad, Telangana.
          </h2>
        </div>
        <div className="flex aspect-[16/7] items-center justify-center border border-ink/15 bg-stone md:col-span-7 md:col-start-6">
          <div className="max-w-sm px-6 text-center">
            <p className="font-serif text-3xl">Directions and location</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A verified office address has not been published. Use the directions link to open
              Hyderabad in Google Maps.
            </p>
            <a
              href={siteSettings.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="eyebrow link-underline mt-5 inline-block pb-1"
            >
              Open Google Maps →
            </a>
          </div>
        </div>
      </section>

      <Faq />

      <section className="bg-ink text-ivory">
        <div className="container-editorial flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-end md:py-20">
          <div>
            <p className="eyebrow text-ivory/65">Your ideas matter</p>
            <h2 className="mt-5 font-serif text-5xl leading-none">
              Your space, your ideas.
              <br />
              Let&apos;s discuss.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              onClick={() => trackContactAction("call", "Contact final CTA")}
              href={telLink(siteSettings.phone)}
              className="btn-outline"
            >
              Call now <span aria-hidden>→</span>
            </a>
            <a
              onClick={() => trackContactAction("whatsapp", "Contact final CTA")}
              href={whatsappLink(siteSettings.whatsapp, contactMessage)}
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

function ContactDetail({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href?: string | undefined;
  external?: boolean | undefined;
}) {
  const content = (
    <>
      <p className="eyebrow text-clay">{label}</p>
      <p className="mt-4 font-serif text-2xl leading-tight">{value}</p>
    </>
  );
  return href ? (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="bg-background p-6 transition-colors hover:bg-ivory"
    >
      {content}
    </a>
  ) : (
    <div className="bg-background p-6">{content}</div>
  );
}

function Faq() {
  const faqs = [
    [
      "How can I discuss my interior requirements?",
      "You can call, WhatsApp or send an enquiry with a short note about your space and what you are considering.",
    ],
    [
      "Can I enquire about an individual room?",
      "Yes. Tell us which room you would like to discuss and what is not working for you today.",
    ],
    [
      "Do you provide residential and commercial services?",
      "Sri Vastu Interiors discusses residential, commercial and related interior requirements across Hyderabad and nearby areas.",
    ],
    [
      "Can I discuss my budget before starting?",
      "Yes. Sharing a budget range early helps frame a practical conversation about the scope and options.",
    ],
    [
      "How can I request a consultation?",
      "Use the enquiry form, call or WhatsApp. Add any reference photographs or notes that would help explain what you have in mind.",
    ],
  ];
  return (
    <section className="bg-stone">
      <div className="container-editorial grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <p className="eyebrow text-clay">Questions</p>
          <h2 className="mt-5 font-serif text-4xl leading-none md:text-5xl">Contact FAQs.</h2>
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
