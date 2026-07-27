import type { Metadata } from "next";
import { AudienceTemplate } from "@/components/AudienceTemplate";

export const metadata: Metadata = {
  title: "Agricultural & Farm Concrete Contractor in Northern NY",
  description:
    "Durable agricultural concrete for farms across Jefferson, Lewis & St. Lawrence counties — concrete storage, manure storage, barn foundations, slabs and repairs. No job too big or small.",
  alternates: { canonical: "/agricultural" },
};

export default function AgriculturalPage() {
  return <AudienceTemplate slug="agricultural" />;
}
