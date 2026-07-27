// Core service offerings shown on the home page grid.

export type Service = {
  title: string;
  slug: string;
  blurb: string;
};

export const coreServices: Service[] = [
  {
    title: "Poured Foundations",
    slug: "poured-foundations",
    blurb:
      "Get the strongest base possible with a poured foundation — competitively priced with block, while being drier, stronger, more design-flexible and virtually maintenance-free.",
  },
  {
    title: "Driveways",
    slug: "driveways",
    blurb:
      "Durable and easy to maintain, concrete is a natural choice for residential and commercial driveways — and it can be stamped and stained to boost your curb appeal.",
  },
  {
    title: "Walkways",
    slug: "walkways",
    blurb:
      "A smart, affordable way to add beauty and function to any outdoor space. Stamped, dyed and formed into any area to seamlessly enhance your landscape.",
  },
  {
    title: "Sidewalks",
    slug: "sidewalks",
    blurb:
      "Built with high traffic, weather and local building codes in mind. High-quality concrete with subtle finishing touches for a usable, long-lasting sidewalk.",
  },
  {
    title: "Stamped Concrete",
    slug: "stamped-concrete",
    blurb:
      "A large variety of looks and finishes, decorative concrete elevates your property's aesthetic and lets you customize a look you'll be proud to call your own.",
  },
  {
    title: "Outdoor Living Spaces",
    slug: "outdoor-living-spaces",
    blurb:
      "One of the easiest ways to improve the look and feel of your home is a patio. Choose from a wide selection of styles and colors to suit your home.",
  },
  {
    title: "Retaining Walls",
    slug: "retaining-walls",
    blurb:
      "From functional to decorative, retaining walls come in many styles and forms. Whatever your property layout, we can build a wall to suit your needs.",
  },
  {
    title: "Concrete Storage",
    slug: "concrete-storage",
    blurb:
      "Storage solutions built for strength and longevity — from straightforward to custom containers, our experienced crew can meet your storage needs.",
  },
];

export type AudiencePage = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  items: string[];
  hero: string;
};

export const audiences: Record<string, AudiencePage> = {
  residential: {
    slug: "residential",
    eyebrow: "Residential",
    title: "Residential Concrete",
    intro:
      "If your project calls for concrete, call us for some of the best pricing in Jefferson County. Schedule a consultation to discuss your needs and we'll provide a FREE estimate detailing the scope and cost of your project.",
    items: [
      "Patios",
      "Walkways",
      "Driveways",
      "Decorative & Stamped",
      "Retaining Walls",
      "Foundations",
      "Concrete Floors",
      "Exposed Aggregate",
      "Poured Walls",
      "Concrete Repairs",
    ],
    hero: "/photos/service_5.jpg",
  },
  commercial: {
    slug: "commercial",
    eyebrow: "Commercial / Business",
    title: "Commercial Concrete",
    intro:
      "Netto Concrete Construction Corp. is equipped to handle everything from small repairs and maintenance to parking lots and poured commercial building slabs. Talk to one of our commercial specialists so we can get you an accurate, competitive bid.",
    items: [
      "Commercial Driveways & Access-ways",
      "Public Walkways / Sidewalks",
      "Large Concrete Floors & Slabs",
      "Poured Walls",
      "Concrete Parking Lot Repairs",
      "Custom Solutions for Any Business Need",
    ],
    hero: "/photos/service_4.jpg",
  },
  agricultural: {
    slug: "agricultural",
    eyebrow: "Agricultural / Farm",
    title: "Agricultural Concrete",
    intro:
      "We offer a wide range of solutions for the agricultural and farming community. If you need a long-lasting, durable concrete solution built to work as hard as you do, call one of our specialists today. No job is too small or too big for us to handle.",
    items: [
      "Concrete Storage",
      "Manure Storage",
      "Barn Foundations",
      "Concrete Slabs",
      "Concrete Repairs",
    ],
    hero: "/photos/service_8.jpg",
  },
};
