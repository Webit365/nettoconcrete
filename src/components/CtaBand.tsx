import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon, ArrowRightIcon } from "@/components/Icons";

export function CtaBand({
  title = "Ready to start your concrete project?",
  subtitle = "Get a free, no-obligation estimate from experienced local contractors.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-netto-600">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-15 [background-image:repeating-linear-gradient(45deg,#000_0,#000_1px,transparent_0,transparent_14px)]"
      />
      <div className="container-x relative flex flex-col items-center gap-6 py-14 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-2 max-w-xl text-netto-50">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn btn-lg btn-white">
            Get a Free Quote
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
          <a href={site.phoneHref} className="btn btn-lg btn-ghost-light">
            <PhoneIcon className="h-5 w-5" />
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
