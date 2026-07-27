// Single source of truth for business info. Update here and it flows through
// the header, footer, contact page, and structured data.

export const site = {
  name: "Netto Concrete Construction",
  legalName: "Netto Concrete Construction Corp.",
  tagline: "Commercial, Farm & Residential Concrete Contractor",
  shortDescription:
    "Poured foundations, driveways, flatwork, stamped concrete and repairs for residential, commercial and agricultural clients across Northern New York.",
  phone: "(315) 408-4158",
  phoneHref: "tel:+13154084158",
  email: "info@nettoconcrete.com",
  emailHref: "mailto:info@nettoconcrete.com",
  city: "Watertown",
  region: "NY",
  regionName: "New York",
  serviceArea: [
    "Jefferson County",
    "Lewis County",
    "St. Lawrence County",
    "Watertown",
    "Northern New York",
  ],
  serviceAreaLine:
    "Serving Jefferson County, Lewis County, St. Lawrence and all of Northern New York",
  hours: "Monday–Friday, 8:00 a.m. – 6:00 p.m.",
  emergency: "24-Hour Emergency Service Available",
  yearsExperience: "15+",
  socials: {
    facebook: "https://www.facebook.com/",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/residential",
    children: [
      { label: "Residential", href: "/residential" },
      { label: "Commercial", href: "/commercial" },
      { label: "Agricultural", href: "/agricultural" },
    ],
  },
  { label: "Our Work", href: "/our-work" },
  { label: "Contact", href: "/contact" },
];
