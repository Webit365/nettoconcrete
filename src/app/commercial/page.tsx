import type { Metadata } from "next";
import { AudienceTemplate } from "@/components/AudienceTemplate";

export const metadata: Metadata = {
  title: "Commercial Concrete Contractor in Watertown, NY",
  description:
    "Commercial concrete across Northern New York — driveways & access-ways, public sidewalks, large floors & slabs, poured walls, parking lot repairs and custom business solutions. Competitive bids.",
  alternates: { canonical: "/commercial" },
};

export default function CommercialPage() {
  return <AudienceTemplate slug="commercial" />;
}
