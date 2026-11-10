import heroWarmLiving from "@/assets/hero-warm-living.png";
import type {
  GalleryImage,
  HeroContent,
  MaterialSwatch,
  Principle,
  ProcessStep,
  Project,
  Service,
  SiteSettings,
  Stat,
  Testimonial,
} from "./types";

export const images = {
  // The homepage hero is protected and intentionally remains the original asset.
  hero: heroWarmLiving,
  kitchen: "/images/kitchens/kitchen-01.jpg",
  bedroom: "/images/bedrooms/bedroom-01.jpg",
  dining: "/images/residential/dining-room-01.jpg",
  office: "/images/commercial/office-01.jpg",
  materials: "/images/furniture/custom-cabinet-01.jpg",
  villa: "/images/residential/living-room-03.jpg",
  studio: "/images/commercial/office-02.jpg",
};

const serviceImages = {
  "residential-interiors": "/images/residential/living-room-01.jpg",
  "modular-kitchens": "/images/kitchens/kitchen-01.jpg",
  "commercial-interiors": "/images/commercial/office-01.jpg",
  "home-renovations": "/images/residential/living-room-03.jpg",
  "custom-furniture": "/images/furniture/custom-cabinet-01.jpg",
  "false-ceilings": "/images/bedrooms/bedroom-02.jpg",
  "painting-services": "/images/residential/living-room-02.jpg",
  "other-interior-works": "/images/residential/dining-room-01.jpg",
} as const;

const galleryImages: Record<string, string[]> = {
  "residential-interiors": [
    "/images/residential/living-room-01.jpg",
    "/images/residential/living-room-02.jpg",
    "/images/residential/dining-room-01.jpg",
    "/images/residential/living-room-03.jpg",
    "/images/furniture/custom-cabinet-01.jpg",
    "/images/bedrooms/kids-study-01.jpg",
  ],
  "modular-kitchens": [
    "/images/kitchens/kitchen-01.jpg",
    "/images/kitchens/kitchen-02.jpg",
    "/images/kitchens/kitchen-03.jpg",
    "/images/kitchens/kitchen-04.jpg",
    "/images/residential/dining-room-01.jpg",
    "/images/furniture/custom-cabinet-01.jpg",
  ],
  "commercial-interiors": [
    "/images/commercial/office-01.jpg",
    "/images/commercial/office-02.jpg",
    "/images/commercial/office-03.jpg",
    "/images/furniture/custom-cabinet-01.jpg",
    "/images/residential/dining-room-01.jpg",
    "/images/living-rooms/tv-unit-01.jpg",
  ],
  "home-renovations": [
    "/images/residential/living-room-03.jpg",
    "/images/kitchens/kitchen-03.jpg",
    "/images/bedrooms/bedroom-01.jpg",
    "/images/residential/living-room-02.jpg",
    "/images/furniture/custom-cabinet-01.jpg",
    "/images/living-rooms/tv-unit-01.jpg",
  ],
  "custom-furniture": [
    "/images/furniture/custom-cabinet-01.jpg",
    "/images/living-rooms/tv-unit-01.jpg",
    "/images/bedrooms/bedroom-01.jpg",
    "/images/bedrooms/kids-study-01.jpg",
    "/images/residential/dining-room-01.jpg",
    "/images/residential/living-room-02.jpg",
  ],
  "false-ceilings": [
    "/images/bedrooms/bedroom-02.jpg",
    "/images/bedrooms/bedroom-03.jpg",
    "/images/residential/living-room-01.jpg",
    "/images/residential/dining-room-01.jpg",
    "/images/bedrooms/bedroom-01.jpg",
    "/images/residential/living-room-03.jpg",
  ],
  "painting-services": [
    "/images/residential/living-room-02.jpg",
    "/images/bedrooms/bedroom-03.jpg",
    "/images/residential/living-room-01.jpg",
    "/images/residential/dining-room-01.jpg",
    "/images/living-rooms/tv-unit-01.jpg",
    "/images/bedrooms/kids-study-01.jpg",
  ],
  "other-interior-works": [
    "/images/furniture/custom-cabinet-01.jpg",
    "/images/living-rooms/tv-unit-01.jpg",
    "/images/residential/dining-room-01.jpg",
    "/images/bedrooms/kids-study-01.jpg",
    "/images/residential/living-room-03.jpg",
    "/images/kitchens/kitchen-04.jpg",
  ],
};

// Contact details are supplied by the business and power the call and WhatsApp actions site-wide.
export const siteSettings: SiteSettings = {
  businessName: "Sri Vastu Interiors",
  tagline: "Thoughtful interiors for everyday living",
  description:
    "Sri Vastu Interiors provides customised residential and commercial interior solutions across Hyderabad and nearby areas.",
  phone: "+91 95508 64751",
  whatsapp: "919550864751",
  email: "",
  address: "Serving Hyderabad and nearby areas",
  city: "Hyderabad",
  region: "Telangana",
  mapsUrl: "https://maps.google.com/?q=Hyderabad,+Telangana",
  instagramUrl: "",
  facebookUrl: "",
  youtubeUrl: "",
  footerNote: "Practical, personalised interiors for homes and businesses across Hyderabad.",
  siteUrl: "https://srivastuinteriors.in",
};

export const heroContent: HeroContent = {
  headline: ["Beautiful Interiors", "for Every Space."],
  subtitle: "Interior design & execution",
  location: "Hyderabad & Surrounding Areas",
  image: heroWarmLiving,
  ctaText: "Call Now",
  ctaLink: "/contact",
  secondaryCtaText: "WhatsApp Us",
  secondaryCtaLink: "/contact",
};

export const introContent = {
  statement: ["Interiors that work", "beautifully for you."],
  text: "Sri Vastu Interiors helps homeowners and businesses shape spaces that feel comfortable, organised and personal. From a single kitchen to a complete interior, we focus on practical planning, clear choices and a finish that suits your life and budget.",
};

export const philosophy = {
  statement: ["Good interiors begin", "with real life."],
  text: "The best decisions start with how a space is used: the way you cook, work, host, rest and store the things that matter. We pair that understanding with materials, colours and details chosen to feel right for your space.",
  image: images.materials,
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Initial consultation",
    text: "Tell us about your space, requirements, style preferences and approximate budget.",
  },
  {
    number: "02",
    title: "Site visit",
    text: "We review the site, take measurements and understand the practical conditions.",
  },
  {
    number: "03",
    title: "Plan & design discussion",
    text: "We discuss layouts, finishes, storage and the design direction that fits your needs.",
  },
  {
    number: "04",
    title: "Materials & quotation",
    text: "You review the proposed materials, scope and quotation before any work begins.",
  },
  {
    number: "05",
    title: "Your approval",
    text: "We refine the details together and move ahead only after you are comfortable with the plan.",
  },
  {
    number: "06",
    title: "Execution",
    text: "The selected work is carried out in stages, with coordination around the agreed scope.",
  },
  {
    number: "07",
    title: "Completion & handover",
    text: "We walk through the completed space with you and close out the agreed work.",
  },
];

export const principles: Principle[] = [
  {
    title: "Designed Around You",
    text: "We begin with your routine, priorities and space — not a one-size-fits-all look.",
  },
  {
    title: "Clear Choices",
    text: "Layouts, materials and finishes are explained in plain language so you can decide with confidence.",
  },
  {
    title: "Flexible Scope",
    text: "Choose support for one room, a renovation, or a complete residential or commercial interior.",
  },
  {
    title: "Practical Finishes",
    text: "We consider maintenance, day-to-day use and the character you want the space to have.",
  },
];

type ServiceSeed = Omit<
  Service,
  "gallery" | "designCategories" | "materials" | "seoTitle" | "seoDescription"
>;

const serviceSeeds: ServiceSeed[] = [
  {
    slug: "residential-interiors",
    title: "Residential Interiors",
    order: 1,
    active: true,
    image: serviceImages["residential-interiors"],
    summary: "Personalised interiors for apartments, villas and independent homes.",
    intro:
      "Create a home that feels considered from room to room. We help shape layouts, storage, lighting, finishes and furniture around the way your household lives.",
    provides: [
      "Space planning",
      "Living, bedroom and dining interiors",
      "Storage and wardrobe planning",
      "Lighting and finish selection",
      "Furniture coordination",
    ],
    approach:
      "We start with the people who will use the home: their routines, storage needs, style preferences and the rooms that need the most attention.",
    faqs: [
      {
        q: "Can I get help for only part of my home?",
        a: "Yes. The scope can focus on a room, a few spaces or a full home, depending on your requirements.",
      },
      {
        q: "Will you help choose materials and colours?",
        a: "Yes. Material and finish options can be discussed as part of the planning process.",
      },
      {
        q: "Do you work in apartments and villas?",
        a: "We serve residential spaces across Hyderabad and nearby areas, including apartments, villas and independent homes.",
      },
    ],
    relatedProjectSlugs: [],
  },
  {
    slug: "modular-kitchens",
    title: "Modular Kitchens",
    order: 2,
    active: true,
    image: serviceImages["modular-kitchens"],
    summary: "Kitchen planning that balances workflow, storage and easy everyday use.",
    intro:
      "A good kitchen supports the way you cook. We plan practical zones, usable storage, durable surfaces and a look that works with the rest of your home.",
    provides: [
      "Kitchen layout planning",
      "Base and wall cabinetry",
      "Pantry and utility storage",
      "Countertop and backsplash selection",
      "Appliance and lighting coordination",
    ],
    approach:
      "We look at your cooking habits, appliance needs and available space before recommending an L-shaped, parallel, U-shaped or island layout.",
    faqs: [
      {
        q: "Can I renovate an existing kitchen?",
        a: "Yes. We can discuss a kitchen refresh or a more complete redesign based on the existing site conditions.",
      },
      {
        q: "Which kitchen layout is right for me?",
        a: "The right layout depends on your room size, door and window positions, appliance needs and cooking workflow.",
      },
      {
        q: "Can you help with utility areas too?",
        a: "Utility storage and work areas can be included when they are part of your requirements.",
      },
    ],
    relatedProjectSlugs: [],
  },
  {
    slug: "commercial-interiors",
    title: "Commercial Interiors",
    order: 3,
    active: true,
    image: serviceImages["commercial-interiors"],
    summary: "Functional, welcoming environments for offices, retail and customer-facing spaces.",
    intro:
      "Plan a commercial space that supports your team, your customers and the way your business operates—from reception and work areas to storage and finishing details.",
    provides: [
      "Space and circulation planning",
      "Workstations and cabin layouts",
      "Reception and customer areas",
      "Storage and display planning",
      "Finish and furniture selection",
    ],
    approach:
      "We focus on practical flow, everyday durability and a visual direction that fits your business rather than an off-the-shelf template.",
    faqs: [
      {
        q: "What kinds of commercial spaces can you discuss?",
        a: "Office, retail and other customer-facing interiors can be reviewed based on your requirements.",
      },
      {
        q: "Can you work around business operating hours?",
        a: "Timing and access constraints can be discussed during the initial consultation and site visit.",
      },
      {
        q: "Can the design reflect our brand?",
        a: "Colours, materials, signage zones and customer touchpoints can be planned to suit your brand direction.",
      },
    ],
    relatedProjectSlugs: [],
  },
  {
    slug: "home-renovations",
    title: "Home Renovations",
    order: 4,
    active: true,
    image: serviceImages["home-renovations"],
    summary: "Thoughtful updates that make an existing home feel easier to live in.",
    intro:
      "Whether you are updating one room or reworking a larger part of your home, we help identify what to keep, what to improve and how to make the change feel cohesive.",
    provides: [
      "Existing-space review",
      "Layout improvement",
      "Kitchen and bathroom updates",
      "Surface and finish refresh",
      "Storage and lighting upgrades",
    ],
    approach:
      "Renovation begins with what is already there. We assess the opportunities in your current space before proposing changes that are useful and visually coherent.",
    faqs: [
      {
        q: "Can we renovate while living in the home?",
        a: "The practical feasibility depends on the rooms and work involved. This can be assessed during site planning.",
      },
      {
        q: "Do I need to renovate the whole house?",
        a: "No. A renovation can focus on a kitchen, bedroom, living area or any set of spaces that needs attention.",
      },
      {
        q: "Can existing furniture be retained?",
        a: "Useful existing pieces can be considered when planning the updated interior.",
      },
    ],
    relatedProjectSlugs: [],
  },
  {
    slug: "custom-furniture",
    title: "Custom Furniture",
    order: 5,
    active: true,
    image: serviceImages["custom-furniture"],
    summary: "Furniture and storage designed for your room, routine and preferred finish.",
    intro:
      "When ready-made furniture does not quite fit, custom pieces can make a room feel more organised and complete. We help plan proportions, storage and finishes for your space.",
    provides: [
      "TV and display units",
      "Wardrobes and storage",
      "Beds and headboards",
      "Study and work tables",
      "Dining and living furniture",
    ],
    approach:
      "Each piece is planned for its job first, then refined for proportion, material, hardware and how it belongs with the rest of the room.",
    faqs: [
      {
        q: "Can I order a single custom piece?",
        a: "Yes. Tell us what you need and the space available so the appropriate scope can be discussed.",
      },
      {
        q: "Can custom furniture include storage?",
        a: "Yes. Storage needs can be built into wardrobes, beds, TV units, study tables and other furniture.",
      },
      {
        q: "Can I choose the finish?",
        a: "Finish preferences can be discussed alongside practical requirements such as use, maintenance and existing décor.",
      },
    ],
    relatedProjectSlugs: [],
  },
  {
    slug: "false-ceilings",
    title: "False Ceilings",
    order: 6,
    active: true,
    image: serviceImages["false-ceilings"],
    summary: "Ceiling solutions that bring together lighting, proportion and a clean finish.",
    intro:
      "A well-planned false ceiling can organise lighting, soften a room and create a more finished look. We help choose a design that suits the ceiling height and room purpose.",
    provides: [
      "Ceiling layout planning",
      "Lighting point coordination",
      "Cove and profile details",
      "Room-by-room ceiling concepts",
      "Finish coordination",
    ],
    approach:
      "We consider ceiling height, natural light, ventilation points and the lighting you need before deciding how much detail a room really needs.",
    faqs: [
      {
        q: "Will a false ceiling make my room feel lower?",
        a: "The effect depends on existing ceiling height and the design. A suitable approach can be discussed after reviewing the space.",
      },
      {
        q: "Can lighting be planned with the ceiling?",
        a: "Yes. Lighting locations and ceiling details are best considered together.",
      },
      {
        q: "Can I update only one room?",
        a: "Yes. False ceiling work can be planned for a single room or multiple spaces.",
      },
    ],
    relatedProjectSlugs: [],
  },
  {
    slug: "painting-services",
    title: "Painting Services",
    order: 7,
    active: true,
    image: serviceImages["painting-services"],
    summary: "Colour and paint choices that refresh a space and pull the interior together.",
    intro:
      "Painting is one of the most effective ways to update a home or business. We help select colours and finishes that work with the light, furniture and use of each room.",
    provides: [
      "Interior colour consultation",
      "Wall and ceiling colour planning",
      "Accent wall ideas",
      "Finish selection",
      "Paint-scope coordination",
    ],
    approach:
      "Rather than picking colours in isolation, we consider the room’s light, size, existing finishes and the feeling you want to create.",
    faqs: [
      {
        q: "Can you help choose colours for the whole home?",
        a: "Yes. A coordinated colour direction can be planned across rooms while still giving each space its own character.",
      },
      {
        q: "Can painting be part of a larger renovation?",
        a: "Yes. Painting can be planned alongside other interior work so the overall finish feels consistent.",
      },
      {
        q: "Do you suggest accent walls?",
        a: "Accent-wall ideas can be considered when they suit the room, lighting and overall interior direction.",
      },
    ],
    relatedProjectSlugs: [],
  },
  {
    slug: "other-interior-works",
    title: "Other Interior Works",
    order: 8,
    active: true,
    image: serviceImages["other-interior-works"],
    summary: "Supporting interior work tailored to the needs of your space.",
    intro:
      "Some spaces need a combination of practical updates beyond a single category. Share what you have in mind and we can discuss a suitable interior scope.",
    provides: [
      "Interior consultation",
      "Storage and utility updates",
      "Finishing-detail coordination",
      "Room-specific improvements",
      "Combined interior scopes",
    ],
    approach:
      "We begin by understanding the existing space and the changes that would make it more comfortable, functional and complete.",
    faqs: [
      {
        q: "Can I discuss a requirement not listed under another service?",
        a: "Yes. Tell us about your space and requirement so we can discuss whether it fits the scope of work.",
      },
      {
        q: "Can different interior updates be combined?",
        a: "Related updates can be planned together when that makes the work more practical and cohesive.",
      },
      {
        q: "Can the scope focus on one room?",
        a: "Yes. The work can be discussed for a particular room or area based on your needs.",
      },
    ],
    relatedProjectSlugs: [],
  },
];

const galleryPlans: Record<string, [string, string, string, string][]> = {
  "residential-interiors": [
    [
      "Living Rooms",
      "Contemporary",
      "A living room shaped around everyday gathering",
      "Balanced seating, warm finishes and lighting that works from morning to evening.",
    ],
    [
      "Bedrooms",
      "Warm Wood",
      "A calm, layered bedroom",
      "Practical storage and a softer material palette help a private room feel settled.",
    ],
    [
      "Dining Rooms",
      "Modern",
      "A dining setting with room to linger",
      "A considered table, lighting and circulation can make everyday meals feel more generous.",
    ],
    [
      "Full-Home Interiors",
      "Minimal",
      "A consistent language from room to room",
      "Finishes and proportions that connect the spaces without making them feel identical.",
    ],
    [
      "Storage & Furniture",
      "Compact",
      "Storage that recedes into the room",
      "Integrated solutions can bring order without adding visual weight.",
    ],
    [
      "Living Rooms",
      "Contemporary",
      "A home with a relaxed focal point",
      "Layered lighting and adaptable furniture support the way people actually live.",
    ],
  ],
  "modular-kitchens": [
    [
      "L-shaped",
      "Contemporary",
      "An efficient L-shaped kitchen",
      "Work zones, counter space and storage are planned around real cooking routines.",
    ],
    [
      "U-shaped",
      "Modern",
      "A hardworking U-shaped layout",
      "Continuous counters and useful corner storage make the most of a compact footprint.",
    ],
    [
      "Parallel",
      "Minimal",
      "A streamlined parallel kitchen",
      "Separated wet and dry zones can keep the workflow clear and comfortable.",
    ],
    [
      "Straight",
      "Compact",
      "A straight kitchen with useful vertical storage",
      "Tall cabinetry and thoughtful organisation help a smaller wall do more.",
    ],
    [
      "Island",
      "Warm Wood",
      "A social kitchen island",
      "Where space allows, an island can add prep room and a casual place to connect.",
    ],
    [
      "Compact",
      "Contemporary",
      "Small kitchen, thoughtful details",
      "A practical blend of durable surfaces, task lighting and everyday storage.",
    ],
  ],
  "commercial-interiors": [
    [
      "Office Interiors",
      "Contemporary",
      "A focused everyday workspace",
      "Planning starts with circulation, individual work and the moments teams share.",
    ],
    [
      "Reception Areas",
      "Modern",
      "A welcoming first impression",
      "Reception zones can feel clear and professional without losing warmth.",
    ],
    [
      "Meeting Rooms",
      "Minimal",
      "A calm place to meet",
      "Comfort, acoustics and visual clarity help a discussion space work harder.",
    ],
    [
      "Retail Interiors",
      "Warm Wood",
      "A retail setting that makes browsing easy",
      "Fixtures, display and pathways are arranged around the customer journey.",
    ],
    [
      "Showroom Interiors",
      "Contemporary",
      "A showroom with room to explore",
      "Simple material backdrops keep products and conversations at the centre.",
    ],
    [
      "Office Interiors",
      "Compact",
      "A compact office with a sense of order",
      "Flexible storage and carefully placed work points make limited area feel considered.",
    ],
  ],
  "home-renovations": [
    [
      "Living Room Renovations",
      "Contemporary",
      "A refreshed shared room",
      "Updating layout, lighting and surfaces can shift how an existing room feels.",
    ],
    [
      "Kitchen Renovations",
      "Modern",
      "A kitchen rethought for daily use",
      "Renovation planning starts with the constraints already in the space.",
    ],
    [
      "Bedroom Renovations",
      "Warm Wood",
      "A quieter bedroom update",
      "New storage, colour and bedside lighting can make a familiar room work better.",
    ],
    [
      "Full-Home Renovations",
      "Minimal",
      "A cohesive home refresh",
      "Priorities are phased so individual improvements still feel like one home.",
    ],
    [
      "Layout Improvements",
      "Compact",
      "A clearer plan for a compact room",
      "Small layout changes can create more usable space and easier movement.",
    ],
    [
      "Storage Improvements",
      "Contemporary",
      "Storage added with restraint",
      "Well-placed joinery can remove clutter without crowding the room.",
    ],
  ],
  "custom-furniture": [
    [
      "Wardrobes",
      "Warm Wood",
      "A wardrobe built around the room",
      "Internal divisions, doors and finishes can be chosen for the way it will be used.",
    ],
    [
      "TV Units",
      "Minimal",
      "A low-profile media wall",
      "Display, cable management and closed storage come together in one considered piece.",
    ],
    [
      "Beds",
      "Contemporary",
      "A bed with integrated purpose",
      "Headboards, bedside surfaces and storage can be designed as a complete composition.",
    ],
    [
      "Study Tables",
      "Compact",
      "A dedicated place to focus",
      "A custom desk can use an overlooked corner while keeping essentials close.",
    ],
    [
      "Shelving",
      "Modern",
      "Shelving that gives objects a home",
      "Open and closed sections balance display, storage and visual calm.",
    ],
    [
      "Storage Units",
      "Contemporary",
      "Storage fitted to an awkward wall",
      "Custom proportions help a useful solution feel like part of the architecture.",
    ],
  ],
  "false-ceilings": [
    [
      "Simple Ceilings",
      "Minimal",
      "A simple ceiling with quiet refinement",
      "A restrained design can improve the finish of a room without overworking it.",
    ],
    [
      "Peripheral Ceilings",
      "Contemporary",
      "A perimeter that frames the room",
      "Peripheral detailing can organise downlights while keeping the centre visually open.",
    ],
    [
      "Cove Lighting",
      "Warm Wood",
      "Soft light around the edge",
      "Cove lighting creates a more relaxed evening mood when planned with the room.",
    ],
    [
      "Bedroom Ceilings",
      "Modern",
      "A bedroom ceiling that feels calm",
      "The design responds to bed position, ceiling height and the lighting you need.",
    ],
    [
      "Living Room Ceilings",
      "Contemporary",
      "A living room ceiling with focus",
      "Ceiling lines can subtly connect seating, lighting and the central conversation area.",
    ],
    [
      "Simple Ceilings",
      "Compact",
      "A compact room with a lighter feel",
      "Lower visual complexity helps a smaller room retain an open feeling.",
    ],
  ],
  "painting-services": [
    [
      "Interior Walls",
      "Contemporary",
      "Walls that set the room's tone",
      "A grounded base colour lets furniture, art and daylight work together.",
    ],
    [
      "Bedroom Colours",
      "Warm Wood",
      "A restful bedroom palette",
      "Warm neutrals and considered contrast can make a private space feel more settled.",
    ],
    [
      "Living Room Colours",
      "Modern",
      "A living room with gentle definition",
      "Colour can differentiate zones without making a shared room feel busy.",
    ],
    [
      "Neutral Palettes",
      "Minimal",
      "A neutral palette with depth",
      "Subtle shifts in undertone can keep a calm room from feeling flat.",
    ],
    [
      "Textured Finishes",
      "Contemporary",
      "Texture used as a focal layer",
      "A restrained textured wall can add material interest without overwhelming the room.",
    ],
    [
      "Interior Walls",
      "Compact",
      "Light colours for a compact room",
      "The right paint finish and value can make a smaller space feel more open.",
    ],
  ],
  "other-interior-works": [
    [
      "Utility Updates",
      "Compact",
      "A useful utility corner",
      "Small practical upgrades can change how smoothly the everyday home runs.",
    ],
    [
      "Storage Solutions",
      "Contemporary",
      "A storage solution for an in-between space",
      "A tailored response can make a corridor, niche or spare wall more useful.",
    ],
    [
      "Finishing Details",
      "Minimal",
      "Finishing details that pull a room together",
      "Lighting, hardware and transitions can make an update feel resolved.",
    ],
    [
      "Room Improvements",
      "Modern",
      "One room, thoughtfully improved",
      "A focused scope can still make a noticeable difference to daily life.",
    ],
    [
      "Combined Scopes",
      "Warm Wood",
      "Several small changes, one coherent direction",
      "Related work is planned as a set so the final space feels intentional.",
    ],
    [
      "Consultation",
      "Contemporary",
      "A starting point for an unusual requirement",
      "Share the space and what is not working; the right scope can be defined together.",
    ],
  ],
};

const materialPlans: Record<string, { title: string; text: string }[]> = {
  "modular-kitchens": [
    {
      title: "Cabinet finishes",
      text: "Explore laminates, wood-inspired finishes and colour combinations suited to your light and maintenance needs.",
    },
    {
      title: "Countertops & backsplashes",
      text: "Choose practical surface pairings based on daily cooking, cleaning and the overall kitchen palette.",
    },
    {
      title: "Storage configurations",
      text: "Plan drawers, pantry storage, corner solutions and utility zones around how you cook.",
    },
  ],
  "painting-services": [
    {
      title: "Colour direction",
      text: "Build a room-by-room palette that responds to natural light, existing furniture and the mood you want.",
    },
    {
      title: "Wall finishes",
      text: "Discuss suitable paint finishes and restrained texture options for the room and level of use.",
    },
    {
      title: "Feature moments",
      text: "Use accent colours selectively to give a wall, niche or architectural feature gentle definition.",
    },
  ],
};

const defaultMaterials = [
  {
    title: "Finishes that suit the room",
    text: "Material and colour choices are discussed in relation to daily use, light and the character of the existing space.",
  },
  {
    title: "Made for real routines",
    text: "Layouts, lighting and storage are considered together so the result is practical as well as visually cohesive.",
  },
  {
    title: "Choices you can understand",
    text: "Options are presented clearly, with scope for your style preferences, priorities and budget conversation.",
  },
];

export const services: Service[] = serviceSeeds.map((service) => {
  const plan = galleryPlans[service.slug] ?? [];
  const serviceGalleryImages = galleryImages[service.slug] ?? [];
  const categories = Array.from(new Set(plan.map(([category]) => category)));
  return {
    ...service,
    designCategories: categories,
    materials: materialPlans[service.slug] ?? defaultMaterials,
    seoTitle: `${service.title} in Hyderabad`,
    seoDescription: `${service.summary} Speak with Sri Vastu Interiors about ${service.title.toLowerCase()} in Hyderabad.`,
    gallery: plan.flatMap(([category, style, title, description], imageIndex) => {
      const image = serviceGalleryImages[imageIndex];
      if (!image) return [];
      return [
        {
          id: `${service.slug}-${imageIndex + 1}`,
          image,
          alt: `${title} — ${service.title.toLowerCase()} design inspiration`,
          title,
          description,
          category,
          style,
          source: "Licensed stock" as const,
          sourceUrl: "/images/IMAGE-SOURCES.json",
          licence: "Unsplash License — free for commercial use; attribution appreciated.",
          approvalStatus: "approved" as const,
        } satisfies GalleryImage,
      ];
    }),
  };
});

// No project imagery, testimonials or performance figures have been supplied.
// Keep these collections empty instead of presenting conceptual imagery as Sri Vastu work.
export const projects: Project[] = [];
export const testimonials: Testimonial[] = [];

export const aboutStats: Stat[] = [
  { value: "100%", label: "Customised layouts" },
  { value: "7+", label: "Service specialisations" },
  { value: "Hyderabad", label: "Primary focus area" },
  { value: "Direct", label: "Consultation & site visits" },
];

export const materialsPalette: MaterialSwatch[] = [
  { name: "Warm Oak", description: "Natural matte veneer with subtle grain", swatch: "#c8a882" },
  { name: "Fluted Teak", description: "Architectural vertical timber accents", swatch: "#9b6b43" },
  { name: "Travertine", description: "Porous tactile stone in warm ivory", swatch: "#d8cfc0" },
  { name: "Brushed Brass", description: "Subtle satin metallic hardware tone", swatch: "#bfa46f" },
  { name: "Linen Sand", description: "Textured upholstery in neutral clay", swatch: "#d5cdbd" },
  { name: "Raw Clay", description: "Earthy terracotta tones for focal points", swatch: "#b27354" },
];

export const aboutContent = {
  heading: ["Practical interiors,", "made personal."],
  description:
    "Sri Vastu Interiors serves homeowners and businesses across Hyderabad and nearby areas with customised interior design and execution support.",
  story:
    "Every interior starts with a different set of needs. Our approach is to understand your space, priorities and budget before turning ideas into a clear, workable plan.",
  founderNote: "Founder and team details can be added here once verified information is available.",
  values: [
    {
      title: "Listen first",
      text: "Your routine, preferences and requirements shape the direction of the work.",
    },
    {
      title: "Keep it practical",
      text: "We value planning, storage, usable finishes and decisions that make day-to-day life easier.",
    },
    {
      title: "Make choices clear",
      text: "We aim to make the scope, materials and next steps easy to understand.",
    },
  ],
};
