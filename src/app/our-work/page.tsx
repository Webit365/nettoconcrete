import type { Metadata } from "next";
import { Gallery, type GalleryImage } from "@/components/Gallery";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work — Concrete Project Gallery",
  description:
    "See recent concrete projects by Netto Concrete Construction across Watertown and Northern New York — foundations, flatwork, driveways, stamped concrete and more.",
  alternates: { canonical: "/our-work" },
};

// Real project photos (public/photos). Service shots lead, followed by the
// job-site gallery.
const images: GalleryImage[] = [
  ...[3, 4, 5, 8].map((n) => ({
    src: `/photos/service_${n}.jpg`,
    alt: `Netto Concrete Construction finished project ${n}`,
  })),
  ...Array.from({ length: 23 }, (_, i) => ({
    src: `/photos/project-${i + 1}.jpg`,
    alt: `Concrete project by Netto Concrete Construction in Northern New York`,
  })),
];

export default function OurWorkPage() {
  return (
    <>
      <section className="bg-steel-950 py-16 sm:py-20">
        <div className="container-x">
          <p className="eyebrow text-netto-400">
            <span className="h-px w-8 bg-netto-500" />
            Our Work
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Concrete built to last
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-steel-300">
            A look at recent foundations, flatwork, driveways and decorative
            concrete completed by {site.name} across {site.city} and Northern
            New York.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-x">
          <Gallery images={images} />
        </div>
      </section>

      <CtaBand title="Like what you see?" subtitle="Let's build something durable for your property. Get a free estimate today." />
    </>
  );
}
