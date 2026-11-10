import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { siteSettings } from "@/content/site";
import { getServices, telLink, whatsappLink } from "@/lib/content";
import { WhatsAppIcon } from "@/components/site/SriVastuLogo";
import { Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", hasDropdown: true },
  { to: "/how-we-work", label: "How We Work" },
  { to: "/contact", label: "Contact" },
] as const;

function hasImageHero(path: string) {
  // Only use the transparent, light-on-dark navigation over routes whose hero
  // actually extends behind it. Service pages now begin on an ivory canvas.
  return (
    path === "/" ||
    /^\/projects\/[^/]+/.test(path) ||
    path === "/contact" ||
    path === "/how-we-work"
  );
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const servicesList = getServices();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.round((y / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const transparent = hasImageHero(pathname) && !scrolled && !open;

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="progress-bar pointer-events-none"
        style={{
          width: `${progress}%`,
          opacity: scrolled ? 1 : 0,
          transition: "width 0.1s linear, opacity 0.3s",
        }}
        aria-hidden
      />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          transparent
            ? "bg-transparent text-white"
            : "border-b border-ink/10 bg-background/95 text-foreground backdrop-blur-md shadow-sm",
        )}
      >
        <div className="container-editorial flex h-20 items-center justify-between gap-6 md:h-24">
          {/* Clean, Elegant Text Logo */}
          <Link
            to="/"
            className="transition-opacity hover:opacity-85"
            aria-label={`${siteSettings.businessName} Home`}
          >
            <span
              className={cn(
                "font-serif text-2xl sm:text-[27px] tracking-tight font-normal transition-colors",
                transparent ? "text-white" : "text-foreground",
              )}
            >
              Sri Vastu Interiors
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
            {nav.map((n) => {
              const isServices = "hasDropdown" in n && n.hasDropdown;
              return (
                <div key={n.to} className="relative group">
                  <Link
                    to={n.to}
                    activeOptions={{ exact: n.to === "/" }}
                    className={cn(
                      "relative flex items-center gap-1.5 py-1 text-sm font-medium transition-colors",
                      transparent
                        ? "text-white/90 hover:text-white"
                        : "text-foreground/80 hover:text-foreground",
                    )}
                  >
                    {({ isActive }) => (
                      <>
                        <span>{n.label}</span>
                        {isServices && (
                          <ChevronDown className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover:rotate-180" />
                        )}
                        {isActive && (
                          <span
                            className={cn(
                              "absolute -bottom-1 left-0 right-0 h-[2px] rounded-full",
                              transparent ? "bg-white" : "bg-foreground",
                            )}
                          />
                        )}
                      </>
                    )}
                  </Link>

                  {/* Dropdown Menu for Services */}
                  {isServices && (
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-1/2 -translate-x-1/2 pt-3 w-60 z-50">
                      <div
                        className={cn(
                          "rounded-xl border p-2 shadow-2xl backdrop-blur-md",
                          transparent
                            ? "border-white/15 bg-[#1f1712]/95 text-white"
                            : "border-border bg-card text-card-foreground",
                        )}
                      >
                        <Link
                          to="/services"
                          className={cn(
                            "block rounded-lg px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors",
                            transparent
                              ? "text-white/60 hover:bg-white/10 hover:text-white"
                              : "text-muted-foreground hover:bg-stone/50 hover:text-foreground",
                          )}
                        >
                          View All Services →
                        </Link>
                        <div
                          className={cn("my-1 h-px", transparent ? "bg-white/10" : "bg-border/60")}
                        />
                        {servicesList.map((service) => (
                          <Link
                            key={service.slug}
                            to="/services/$slug"
                            params={{ slug: service.slug }}
                            className={cn(
                              "block rounded-lg px-3.5 py-2 text-sm transition-colors",
                              transparent
                                ? "text-white/85 hover:bg-white/10 hover:text-white"
                                : "text-foreground/85 hover:bg-stone/50 hover:text-foreground",
                            )}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden items-center gap-3.5 lg:flex">
            <a
              href={telLink(siteSettings.phone)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200",
                transparent
                  ? "border border-white/55 bg-black/15 text-white backdrop-blur-sm hover:bg-black/35 hover:border-white/80"
                  : "border border-ink/20 bg-stone/40 text-foreground hover:bg-stone/80",
              )}
            >
              <Phone className="h-3.5 w-3.5 fill-current" />
              <span>Call Now</span>
            </a>
            <a
              href={whatsappLink(siteSettings.whatsapp)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#59652c] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#687635] hover:scale-[1.02]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Bar: Call button + Menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={telLink(siteSettings.phone)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
                transparent
                  ? "border border-white/50 bg-black/20 text-white"
                  : "border border-ink/20 text-foreground",
              )}
            >
              <Phone className="h-3 w-3 fill-current" />
              <span>Call</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "eyebrow flex h-10 items-center gap-2 rounded-full px-3 transition-colors",
                transparent ? "text-white" : "text-foreground",
              )}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="relative block h-3 w-5" aria-hidden>
                <span
                  className={cn(
                    "absolute left-0 top-0 h-[2px] w-5 bg-current transition-transform duration-300",
                    open && "translate-y-1.5 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[2px] w-5 bg-current transition-transform duration-300",
                    open && "-translate-y-1.5 -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-[#1c1613] text-white pt-24 transition-opacity duration-500 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav
          className="container-editorial flex flex-1 flex-col overflow-y-auto pb-8"
          aria-label="Mobile"
        >
          {nav.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              tabIndex={open ? 0 : -1}
              className="flex items-baseline justify-between border-b border-white/10 py-4 font-serif text-3xl transition-opacity hover:opacity-75"
            >
              {n.label}
              <span className="eyebrow text-white/40">0{i + 1}</span>
            </Link>
          ))}
          <div className="mt-auto grid grid-cols-2 gap-3 pt-8">
            <a
              href={telLink(siteSettings.phone)}
              tabIndex={open ? 0 : -1}
              className="flex items-center justify-center gap-2 rounded-full border border-white/30 py-3 text-center text-sm font-medium transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4 fill-current" />
              Call Now
            </a>
            <a
              href={whatsappLink(siteSettings.whatsapp)}
              tabIndex={open ? 0 : -1}
              className="flex items-center justify-center gap-2 rounded-full bg-[#59652c] py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#687635]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
