import type { Metadata } from "next";
import { AudienceTemplate } from "@/components/AudienceTemplate";

export const metadata: Metadata = {
  title: "Residential Concrete Contractor in Watertown, NY",
  description:
    "Residential concrete in Watertown & Jefferson County, NY — patios, walkways, driveways, decorative stamped concrete, retaining walls, foundations, floors and repairs. Free estimates.",
  alternates: { canonical: "/residential" },
};

export default function ResidentialPage() {
  return <AudienceTemplate slug="residential" />;
}
