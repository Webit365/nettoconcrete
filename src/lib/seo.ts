import { site } from "./site";

export const baseUrl = "https://nettoconcrete.com";

// LocalBusiness structured data — helps Google surface the phone number,
// service area and hours in local/maps results.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${baseUrl}/#business`,
    name: site.legalName,
    alternateName: site.name,
    description: site.shortDescription,
    url: baseUrl,
    telephone: site.phone,
    email: site.email,
    image: `${baseUrl}/brand/netto-logo.png`,
    logo: `${baseUrl}/brand/netto-logo.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: "US",
    },
    areaServed: site.serviceArea.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    knowsAbout: [
      "Poured Foundations",
      "Concrete Driveways",
      "Stamped Concrete",
      "Retaining Walls",
      "Agricultural Concrete",
      "Concrete Repair",
    ],
    sameAs: [site.socials.facebook],
  };
}
